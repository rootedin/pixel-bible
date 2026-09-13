/* 레슨 검증기: node lint.js [파일...]
 *
 * 200강 규모에서 오타는 반드시 난다. 수업 도중이 아니라 여기서 잡는다.
 * 브라우저 없이 engine/ 을 그대로 불러와 실제 블록·스프라이트 목록과 대조하므로,
 * 엔진에 블록이나 스프라이트를 추가하면 검사 범위도 자동으로 따라온다.
 *
 * 오류(✘)가 하나라도 있으면 종료 코드 1.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = __dirname;
const COLS = 32, ROWS = 18;

/* ---------- 엔진 적재 (DOM 없이) ---------- */
function loadEngine() {
  const sandbox = {
    window: {}, console,
    /* 엔진은 모듈 최상위에서 document 를 쓰지 않는다. 혹시 쓰면 여기서 티가 난다. */
    document: { createElement: () => { throw new Error('lint: 최상위에서 document 사용'); } },
    performance: { now: () => 0 }
  };
  sandbox.globalThis = sandbox;
  vm.createContext(sandbox);
  for (const f of ['engine/world.js', 'engine/sprites.js', 'engine/engine.js']) {
    vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), sandbox, { filename: f });
  }
  return sandbox.window.PB;
}

/* ---------- 레슨 파일에서 PB.start(...) 인자 뽑기 ---------- */
function loadLesson(PB, file) {
  const html = fs.readFileSync(file, 'utf8');
  /* src= 가 없는 인라인 <script> 만 모은다 (엔진은 이미 적재돼 있으므로) */
  const code = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)]
    .map(m => m[1]).join('\n');
  if (!code.trim()) throw new Error('인라인 <script> 가 없습니다');

  let captured = null;
  const sandbox = {
    PB: Object.assign({}, PB, { start: L => { captured = L; } }),
    console: { log() {}, warn() {}, error() {} },
    window: {}, document: { createElement: () => ({ getContext: () => ({}) }) }
  };
  sandbox.globalThis = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename: file, timeout: 5000 });
  if (!captured) throw new Error('PB.start({...}) 호출을 찾지 못했습니다');
  return captured;
}

/* ---------- 성경 대조 (DB 없으면 건너뜀) ---------- */
let bible = null, bibleWhy = '';
try {
  const v = require('./verse.js');
  if (!fs.existsSync(v.DB)) { bibleWhy = '성경 DB 파일 없음: ' + v.DB; }
  else { v.flat('창1:1'); bible = v; }
} catch (e) { bibleWhy = '성경 DB 사용 불가: ' + e.message; }

/* 인용 비교용 정규화: 공백·따옴표·말줄임표 차이는 무시 */
const norm = s => String(s)
  .replace(/\*\*/g, '')
  .replace(/[“”"'’‘]/g, '')
  .replace(/[…]/g, '')
  .replace(/\s+/g, ' ')
  .trim();

/* ---------- 검사 본체 ---------- */
const FX = ['light', 'rain', 'snow', 'sparkle', 'rainbow', 'flash', 'lightning', 'dark'];

function checkLesson(PB, L, add) {
  const TILES = PB.TILES, SPR = PB.SPR, PEOPLE = PB.PEOPLE, SKIES = PB.SKIES, BG = PB.BG;
  const spriteNames = new Set([...Object.keys(SPR), ...Object.keys(PEOPLE), 'person']);

  /* --- 레슨 머리말 --- */
  if (typeof L.week !== 'number') add('E', '', 'week 가 숫자가 아닙니다');
  if (!L.title) add('E', '', 'title 이 없습니다');
  if (!L.ref) add('W', '', 'ref(본문 범위)가 없습니다');
  if (!L.memory || !L.memory.text) add('W', '', 'memory(암송 구절)가 없습니다');
  if (!L.achievement || !L.achievement.title) add('W', '', 'achievement 가 없습니다');
  if (L.achievement && L.achievement.icon && !spriteNames.has(L.achievement.icon))
    add('E', '', `achievement.icon '${L.achievement.icon}' 는 없는 스프라이트입니다`);

  if (!Array.isArray(L.scenes) || !L.scenes.length) { add('E', '', 'scenes 가 비어 있습니다'); return; }
  if (L.scenes.length < 6) add('W', '', `장면이 ${L.scenes.length}개입니다 (권장 8~14)`);
  if (L.scenes.length > 20) add('W', '', `장면이 ${L.scenes.length}개입니다 (너무 깁니다)`);

  /* --- 월드를 실제 엔진 로직으로 재현 (keep/add/remove 반영) --- */
  let worlds;
  try { worlds = PB.buildWorlds(L.scenes); }
  catch (e) { add('E', '', 'buildWorlds 실패: ' + e.message); return; }

  let interactions = 0, quizzes = 0;

  L.scenes.forEach((sc, i) => {
    const at = `장면 ${i + 1}`;
    const w = worlds[i];

    /* 맵 */
    (sc.map || []).forEach((row, ri) => {
      if (typeof row !== 'string') { add('E', at, `map ${ri + 1}행이 문자열이 아닙니다`); return; }
      const expanded = row.replace(/(.)\{(\d+)\}/g, (m, ch, n) => ch.repeat(+n));
      if (expanded.length > COLS) add('E', at, `map ${ri + 1}행이 ${expanded.length}칸입니다 (최대 ${COLS})`);
      [...new Set(expanded)].forEach(ch => {
        if (ch !== '.' && ch !== ' ' && !TILES[ch]) add('E', at, `map 에 알 수 없는 블록 '${ch}'`);
      });
    });
    if ((sc.map || []).length > ROWS) add('E', at, `map 이 ${sc.map.length}행입니다 (최대 ${ROWS})`);

    /* 하늘 / 배경 / 효과 */
    if (sc.sky && !SKIES[sc.sky]) add('E', at, `sky '${sc.sky}' 는 없는 값입니다`);
    if (sc.bg && sc.bg !== 'none' && !BG[sc.bg]) add('E', at, `bg '${sc.bg}' 는 없는 값입니다`);
    [].concat(sc.fx || []).forEach(fx => {
      if (!FX.includes(fx)) add('E', at, `fx '${fx}' 는 없는 값입니다`);
    });

    /* 오브젝트 */
    const norm1 = o => (Array.isArray(o) ? Object.assign({ s: o[0], x: o[1] }, o[2] || {}) : o);
    [...(sc.objects || []), ...(sc.add || [])].map(norm1).forEach(o => {
      if (!o || !o.s) { add('E', at, 'objects 항목에 s(스프라이트 이름)가 없습니다'); return; }
      if (!spriteNames.has(o.s)) add('E', at, `스프라이트 '${o.s}' 를 찾을 수 없습니다`);
      if (o.x == null || o.x < 0 || o.x > COLS - 1) add('E', at, `'${o.s}' 의 x=${o.x} 가 0~${COLS - 1} 밖입니다`);
      if (o.y != null && (o.y < 0 || o.y > ROWS)) add('E', at, `'${o.s}' 의 y=${o.y} 가 0~${ROWS} 밖입니다`);
      if (o.anim && !['bob', 'walk', 'swim', 'fly', 'float', 'jump'].includes(o.anim))
        add('E', at, `'${o.s}' 의 anim '${o.anim}' 은 없는 값입니다`);
    });

    /* 사람·땅짐승·병거가 물이나 용암 위에 서 있지 않은가.
       y 를 생략하면 그 열의 맨 위 단단한 블록 위에 서는데, 물도 단단한 블록으로 쳐서
       물 위를 걷는 것처럼 보이게 된다. (배·바구니·갈대·물고기는 정상이므로 제외) */
    const LAND_ONLY = new Set([...Object.keys(PEOPLE), 'person', 'sheep', 'cow', 'lion', 'chariot']);
    (w.objects || []).forEach(o => {
      if (o.y != null || !LAND_ONLY.has(o.s)) return;
      const gy = PB.groundY(w.grid, o.x);
      if (gy >= ROWS) return;
      const ch = w.grid[gy][Math.floor(o.x)];
      if (ch === 'W' || ch === 'A')
        add('W', at, `'${o.label || o.s}' 가 ${ch === 'W' ? '물' : '용암'} 위에 서 있습니다 (x=${o.x})`);
    });

    /* 지붕·성벽 위에 얹혀 버린 인물 잡기.
       y 를 생략하면 그 열의 맨 위 단단한 블록 위에 서므로, 건물이 있는 열에서는
       사람이 지붕으로 올라가 공중에 뜬 것처럼 보인다.
       대부분의 열이 잡는 바닥(중앙값)보다 3칸 이상 높으면 의심한다. */
    {
      const floors = [];
      for (let x = 0; x < COLS; x++) { const gy = PB.groundY(w.grid, x); if (gy < ROWS) floors.push(gy); }
      if (floors.length) {
        const median = floors.slice().sort((a, b) => a - b)[floors.length >> 1];
        (w.objects || []).forEach(o => {
          if (o.y != null || !LAND_ONLY.has(o.s)) return;
          const gy = PB.groundY(w.grid, o.x);
          if (gy < ROWS && median - gy >= 3)
            add('W', at, `'${o.label || o.s}' 가 바닥보다 ${median - gy}칸 높습니다 (x=${o.x}). 지붕·성벽 위에 서 있지 않은지 확인하십시오`);
        });
      }
    }

    /* remove 대상이 실제로 있는가 — 오타가 조용히 통과하던 지점 */
    const prev = i > 0 ? worlds[i - 1] : null;
    (sc.remove || []).forEach(name => {
      const pool = prev ? prev.objects : [];
      if (!pool.some(o => o.s === name || o.label === name))
        add('E', at, `remove: '${name}' 가 이전 장면에 없습니다 (오타?)`);
      /* 스프라이트 이름으로 지우면 같은 종류가 통째로 사라진다.
         이름표가 붙은 인물까지 휩쓸려 나가면 대개 의도한 것이 아니다
         (대사는 남아 있는데 말하는 사람만 사라진다). */
      const named = pool.filter(o => o.s === name && o.label && o.label !== name);
      if (named.length)
        add('W', at, `remove: '${name}' 로 지우면 ${named.map(o => `'${o.label}'`).join(', ')} 까지 사라집니다. 라벨로 지정하십시오`);
    });

    /* 대사 */
    (sc.lines || []).forEach(l => {
      const text = typeof l === 'string' ? l : (l && l.text) || '';
      const who = typeof l === 'object' && l ? l.who : '';
      if (!text) add('W', at, '빈 대사가 있습니다');
      if (text.length > 55) add('W', at, `대사가 ${text.length}자입니다 (권장 40자 안팎): "${text.slice(0, 24)}…"`);
      const bolds = (text.match(/\*\*/g) || []).length / 2;
      if (bolds > 1) add('W', at, `한 대사에 **강조** 가 ${bolds}개입니다 (1개 이하 권장)`);
      if ((text.match(/\*\*/g) || []).length % 2) add('E', at, `** 짝이 맞지 않습니다: "${text.slice(0, 24)}…"`);
      if (who === '하나님' && typeof l === 'object') { /* 하나님은 대사만 — 정상 */ }
      /* 말투: 어린이용 해요체 적발 */
      if (/(어요|에요|예요|했죠|하죠|이죠|거예요)[.!?"”]?\s*$/.test(text.trim()))
        add('W', at, `해요체로 보입니다 (중·고등부는 합니다체): "${text.slice(-22)}"`);
    });
    /* 하나님을 스프라이트로 그리지 않는다 */
    (w.objects || []).forEach(o => {
      if (o.label === '하나님') add('E', at, '하나님을 스프라이트(objects)로 그릴 수 없습니다. 대사만 사용하십시오');
    });

    /* 말씀 카드 */
    if (sc.verse) checkQuote(sc.verse, at + ' verse');

    /* 퀴즈 */
    if (sc.quiz) {
      quizzes++;
      const q = sc.quiz;
      if (!q.q) add('E', at, 'quiz.q 가 없습니다');
      if (!Array.isArray(q.options) || q.options.length < 2) add('E', at, 'quiz.options 가 2개 미만입니다');
      else if (!(q.answer >= 0 && q.answer < q.options.length))
        add('E', at, `quiz.answer=${q.answer} 가 options 범위(0~${q.options.length - 1}) 밖입니다`);
      if (q.options && q.options.length > 4) add('W', at, 'quiz.options 가 4개를 넘습니다 (A~D 까지만 표기됨)');
      if (!q.explain) add('W', at, 'quiz.explain 이 없습니다');
    }

    /* --- 상호작용 4종 --- */
    if (sc.find) {
      interactions++;
      const targets = [].concat(sc.find.target || []);
      if (!sc.find.q) add('E', at, 'find.q 가 없습니다');
      if (!targets.length) add('E', at, 'find.target 이 없습니다');
      targets.forEach(t => {
        if (!(w.objects || []).some(o => o.s === t || o.label === t))
          add('E', at, `find.target '${t}' 가 이 장면에 없습니다 (클릭할 수 없음)`);
      });
      if (!sc.find.explain) add('W', at, 'find.explain 이 없습니다');
    }
    if (sc.choose) {
      interactions++;
      const opts = sc.choose.options || [];
      if (!sc.choose.q) add('E', at, 'choose.q 가 없습니다');
      if (opts.length < 2) add('E', at, 'choose.options 가 2개 미만입니다');
      opts.forEach(o => {
        if (!o || !o.text) add('E', at, 'choose.options 항목에 text 가 없습니다');
        if (o && o.goto != null && (o.goto < 1 || o.goto > L.scenes.length))
          add('E', at, `choose goto=${o.goto} 가 장면 범위(1~${L.scenes.length}) 밖입니다`);
      });
    }
    if (sc.blank) {
      interactions++;
      const slots = (String(sc.blank.text || '').match(/___/g) || []).length;
      const ans = sc.blank.answers || [];
      if (!slots) add('E', at, 'blank.text 에 ___ 가 없습니다');
      if (slots !== ans.length) add('E', at, `blank: 빈칸 ${slots}개인데 answers 는 ${ans.length}개입니다`);
      if (!(sc.blank.extra || []).length) add('W', at, 'blank.extra(오답 보기)가 없어 너무 쉽습니다');
      (sc.blank.extra || []).forEach(x => {
        if (ans.includes(x)) add('E', at, `blank.extra '${x}' 가 정답과 겹칩니다`);
      });
      if (sc.blank.text) checkQuote({ text: sc.blank.text, ref: sc.blank.ref }, at + ' blank', ans);
    }
    if (sc.walk) {
      interactions++;
      const wk = sc.walk;
      if (wk.goal == null) add('E', at, 'walk.goal 이 없습니다');
      else if (wk.goal < 0 || wk.goal > COLS - 1) add('E', at, `walk.goal=${wk.goal} 이 0~${COLS - 1} 밖입니다`);
      if (wk.from != null && (wk.from < 0 || wk.from > COLS - 1)) add('E', at, `walk.from=${wk.from} 이 0~${COLS - 1} 밖입니다`);
      if (wk.player && !spriteNames.has(wk.player)) add('E', at, `walk.player '${wk.player}' 는 없는 스프라이트입니다`);
      if (wk.from != null && wk.goal != null && Math.abs(wk.from - wk.goal) < 3)
        add('W', at, '출발점과 목표가 너무 가까워 이동할 것이 없습니다');
      /* 출발점부터 목표까지 전 구간을 실제로 걸을 수 있는가.
         바닥이 없으면 캐릭터가 화면 밖으로 떨어지고,
         물/용암 위를 지나면 물 위를 걷는 것처럼 보인다. */
      if (wk.goal != null) {
        const from = wk.from == null ? 2 : wk.from;
        const lo = Math.floor(Math.min(from, wk.goal)), hi = Math.ceil(Math.max(from, wk.goal));
        const noFloor = [], onLiquid = [];
        for (let x = Math.max(0, lo); x <= Math.min(COLS - 1, hi); x++) {
          const gy = PB.groundY(w.grid, x);
          if (gy >= ROWS) { noFloor.push(x); continue; }
          const ch = w.grid[gy][x];
          if (ch === 'W' || ch === 'A') onLiquid.push(x + (ch === 'W' ? '(물)' : '(용암)'));
        }
        if (noFloor.length) add('E', at, `walk 경로에 바닥이 없는 열: ${noFloor.join(', ')} (캐릭터가 떨어짐)`);
        if (onLiquid.length) add('E', at, `walk 경로가 액체 위를 지납니다: ${onLiquid.join(', ')}`);
      }
    }
  });

  if (L.memory) checkQuote(L.memory, 'memory');
  if (quizzes < 2) add('W', '', `퀴즈가 ${quizzes}개입니다 (권장 2개)`);
  if (interactions < 2) add('W', '', `상호작용이 ${interactions}개입니다 (권장 2개 이상: find/choose/blank/walk)`);

  /* 인용문이 킹흠정역과 일치하는가 */
  function checkQuote(v, at, fillWith) {
    if (!v || !v.text) { add('E', at, '본문(text)이 없습니다'); return; }
    if (!v.ref) { add('W', at, 'ref(출처)가 없습니다'); return; }
    if (!bible) return;
    const real = bible.flat(v.ref);
    if (!real) { add('E', at, `ref '${v.ref}' 를 성경에서 찾을 수 없습니다`); return; }
    let src = String(v.text);
    if (fillWith) { let i = 0; src = src.replace(/___/g, () => fillWith[i++] || '___'); }
    const a = norm(src), b = norm(real);
    /* 핵심 구절만 짧게 인용하는 것은 정상. 단 표현은 킹흠정역 그대로여야 한다. */
    if (b.includes(a)) return;
    add('E', at, `킹흠정역 본문과 다릅니다 (${v.ref})\n      레슨: ${a}\n      성경: ${b}`);
  }
}

/* ---------- 실행 ---------- */
function main() {
  const PB = loadEngine();
  let files = process.argv.slice(2);
  if (!files.length) {
    const dir = path.join(ROOT, 'lessons');
    files = fs.readdirSync(dir).filter(f => /\.html$/.test(f) && !f.startsWith('_')).map(f => path.join(dir, f));
  }
  if (bibleWhy) console.log(`ℹ 성경 대조를 건너뜁니다 — ${bibleWhy}\n`);

  let errors = 0, warns = 0;
  for (const file of files) {
    const rel = path.relative(ROOT, file).replace(/\\/g, '/');
    const msgs = [];
    const add = (lv, at, msg) => msgs.push({ lv, at, msg });
    try {
      checkLesson(PB, loadLesson(PB, file), add);
    } catch (e) {
      add('E', '', e.message);
    }
    errors += msgs.filter(m => m.lv === 'E').length;
    warns += msgs.filter(m => m.lv === 'W').length;
    if (!msgs.length) { console.log(`✔ ${rel}`); continue; }
    console.log(`\n${rel}`);
    for (const m of msgs) console.log(`  ${m.lv === 'E' ? '✘' : '⚠'} ${m.at ? m.at + ': ' : ''}${m.msg}`);
  }
  console.log(`\n${files.length}개 파일 검사 · 오류 ${errors} · 경고 ${warns}`);
  process.exit(errors ? 1 : 0);
}
main();
