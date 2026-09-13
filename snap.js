/* 시각/구조 회귀 검사
 *
 *   node snap.js            구조 스냅샷 비교 (의존성 없음, 항상 동작)
 *   node snap.js --update   현재 상태를 새 기준으로 저장
 *   node snap.js --pixel    실제 렌더 이미지까지 비교 (playwright 필요)
 *
 * 왜 필요한가: 200강에서 엔진을 한 줄 고치면 어느 강이 깨졌는지 알 방법이 없다.
 * 구조 스냅샷은 "맵 파싱 / keep·add·remove / 단계 구성"이 달라졌는지를 잡고,
 * 픽셀 스냅샷은 "색·타일 그리기"가 달라졌는지를 잡는다.
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { ROOT, loadEngine, loadLesson, lessonFiles } = require('./lessonio.js');

const SNAPDIR = path.join(ROOT, 'snapshots');
const BASE = path.join(SNAPDIR, 'structure.json');
const PIXDIR = path.join(SNAPDIR, 'pixel');

const args = process.argv.slice(2);
const UPDATE = args.includes('--update');
const PIXEL = args.includes('--pixel');

/* ---------- 구조 스냅샷 ---------- */
function structure(PB, L) {
  const worlds = PB.buildWorlds(L.scenes);
  return worlds.map((w, i) => {
    const sc = L.scenes[i];
    return {
      caption: sc.caption || null,
      sky: w.sky, bg: w.bg || 'none', fx: sc.fx || null,
      grid: w.grid.join('|'),                       // 실제로 그려질 18x32 격자
      /* y 를 생략한 캐릭터는 엔진이 계산한 발 위치까지 담는다.
         그래야 PASS(통과 블록)나 groundY 로직이 바뀌어도 잡힌다. */
      objects: (w.objects || []).map(o => {
        const y = o.y != null ? o.y : PB.groundY(w.grid, o.x);
        return `${o.s}@${o.x},${y}${o.label ? '#' + o.label : ''}${o.anim ? ':' + o.anim : ''}`;
      }),
      steps: ['lines', 'walk', 'find', 'choose', 'verse', 'quiz', 'blank'].filter(k => sc[k])
    };
  });
}

function collect() {
  const PB = loadEngine();
  const snap = {};
  for (const file of lessonFiles()) {
    const rel = 'lessons/' + path.basename(file);
    try {
      const L = loadLesson(PB, file);
      const st = structure(PB, L);
      snap[rel] = {
        title: L.title, week: L.week, scenes: st.length,
        hash: crypto.createHash('sha1').update(JSON.stringify(st)).digest('hex').slice(0, 12),
        detail: st
      };
    } catch (e) {
      snap[rel] = { error: e.message };
    }
  }
  return snap;
}

function compareStructure() {
  const now = collect();
  fs.mkdirSync(SNAPDIR, { recursive: true });

  if (UPDATE || !fs.existsSync(BASE)) {
    fs.writeFileSync(BASE, JSON.stringify(now, null, 1));
    console.log(`✔ 기준 저장: snapshots/structure.json (${Object.keys(now).length}강)`);
    return 0;
  }

  const base = JSON.parse(fs.readFileSync(BASE, 'utf8'));
  const files = [...new Set([...Object.keys(base), ...Object.keys(now)])].sort();
  let changed = 0;

  for (const f of files) {
    const a = base[f], b = now[f];
    if (!a) { console.log(`+ ${f} (새 레슨)`); continue; }
    if (!b) { console.log(`- ${f} (삭제됨)`); changed++; continue; }
    if (b.error) { console.log(`✘ ${f}: ${b.error}`); changed++; continue; }
    if (a.hash === b.hash) continue;
    changed++;
    console.log(`\n✘ ${f} — ${b.title}`);
    const n = Math.max((a.detail || []).length, (b.detail || []).length);
    for (let i = 0; i < n; i++) {
      const x = (a.detail || [])[i], y = (b.detail || [])[i];
      if (!x) { console.log(`    장면 ${i + 1}: 추가됨`); continue; }
      if (!y) { console.log(`    장면 ${i + 1}: 없어짐`); continue; }
      for (const k of ['caption', 'sky', 'bg', 'grid', 'objects', 'steps', 'fx']) {
        const sx = JSON.stringify(x[k]), sy = JSON.stringify(y[k]);
        if (sx === sy) continue;
        if (k === 'grid') { console.log(`    장면 ${i + 1}: 맵이 달라졌습니다`); continue; }
        console.log(`    장면 ${i + 1} ${k}: ${sx} → ${sy}`);
      }
    }
  }
  if (!changed) console.log(`✔ 구조 변화 없음 (${files.length}강)`);
  else console.log(`\n${changed}개 레슨이 달라졌습니다. 의도한 변경이면 node snap.js --update`);
  return changed;
}

/* ---------- 픽셀 스냅샷 (playwright) ---------- */
async function comparePixels() {
  let chromium;
  try { ({ chromium } = require('playwright')); }
  catch (e) {
    console.log('\nℹ 픽셀 비교를 건너뜁니다 — playwright 가 설치되어 있지 않습니다.');
    console.log('  설치: npm i -D playwright && npx playwright install chromium');
    return 0;
  }
  const http = require('http');
  const serve = require('child_process').spawn(process.execPath, [path.join(ROOT, 'serve.js')],
    { stdio: 'ignore', env: Object.assign({}, process.env, { PORT: '5199' }) });
  await new Promise(r => setTimeout(r, 700));

  fs.mkdirSync(PIXDIR, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const PB = loadEngine();
  let changed = 0;

  try {
    for (const file of lessonFiles()) {
      const name = path.basename(file, '.html');
      const L = loadLesson(PB, file);
      for (let i = 1; i <= L.scenes.length; i++) {
        await page.goto(`http://localhost:5199/lessons/${path.basename(file)}#${i}`, { waitUntil: 'load' });
        await page.waitForTimeout(220);
        const buf = await page.locator('.pb-stage canvas').screenshot();
        const out = path.join(PIXDIR, `${name}-${String(i).padStart(2, '0')}.png`);
        if (!fs.existsSync(out) || UPDATE) { fs.writeFileSync(out, buf); continue; }
        const old = fs.readFileSync(out);
        if (!old.equals(buf)) {
          changed++;
          fs.writeFileSync(out.replace(/\.png$/, '.new.png'), buf);
          console.log(`✘ ${name} 장면 ${i} 이 달라졌습니다 → snapshots/pixel/${path.basename(out).replace(/\.png$/, '.new.png')}`);
        }
      }
    }
  } finally {
    await browser.close();
    serve.kill();
  }
  if (!changed) console.log('✔ 픽셀 변화 없음');
  return changed;
}

(async () => {
  const a = compareStructure();
  const b = PIXEL ? await comparePixels() : 0;
  process.exit(a + b ? 1 : 0);
})();
