/* lessons/list.js 자동 생성: node genlist.js
 *
 * 손으로 관리하면 200강에서 반드시 어긋난다. 레슨 파일이 유일한 진실이 되도록,
 * 목록도 표지(cover)도 레슨에서 그대로 뽑아낸다.
 *
 * 표지는 레슨 데이터의 cover(장면 번호, 1부터)로 지정한다. 생략하면 자동 선택.
 * keep:true 로 이어받은 장면도 엔진의 buildWorlds 로 완전히 펼친 뒤 저장하므로
 * 목록 화면의 그림이 실제 수업 화면과 항상 같다.
 */
const fs = require('fs');
const path = require('path');
const { ROOT, loadEngine, loadLesson, lessonFiles } = require('./lessonio.js');

/* 표지로 쓸 장면 고르기: 지정이 없으면 오브젝트가 가장 많은 장면 (= 가장 볼 것이 많은 장면) */
function pickCover(L, worlds) {
  if (L.cover != null) return Math.max(0, Math.min(worlds.length - 1, L.cover - 1));
  let best = 0, score = -1;
  worlds.forEach((w, i) => {
    const s = (w.objects || []).length * 2 + (w.map || []).length;
    if (s > score) { score = s; best = i; }
  });
  return best;
}

/* 렌더에 필요한 것만 남긴다 (grid 는 런타임에 다시 만들어지므로 제외) */
function coverOf(w) {
  const out = { sky: w.sky, map: w.map || [], objects: (w.objects || []).map(o => Object.assign({}, o)) };
  if (w.bg && w.bg !== 'none') out.bg = w.bg;
  if (w.clouds !== undefined) out.clouds = w.clouds;
  if (w.stars !== undefined) out.stars = w.stars;
  return out;
}

function main() {
  const PB = loadEngine();
  const rows = [];
  for (const file of lessonFiles()) {
    const rel = 'lessons/' + path.basename(file);
    let L;
    try { L = loadLesson(PB, file); }
    catch (e) { console.error(`✘ ${rel}: ${e.message}`); process.exitCode = 1; continue; }
    if (typeof L.week !== 'number') { console.error(`✘ ${rel}: week 가 없습니다`); process.exitCode = 1; continue; }
    const worlds = PB.buildWorlds(L.scenes);
    const ci = pickCover(L, worlds);
    rows.push({ week: L.week, file: rel, title: L.title, ref: L.ref || '', achievement: L.achievement ? { title: L.achievement.title, icon: L.achievement.icon || 'heart' } : null, cover: coverOf(worlds[ci]), coverScene: ci + 1 });
  }
  rows.sort((a, b) => a.week - b.week);

  const dup = rows.map(r => r.week).filter((w, i, a) => a.indexOf(w) !== i);
  if (dup.length) { console.error(`✘ 중복된 주차: ${[...new Set(dup)].join(', ')}`); process.exitCode = 1; }

  const body = rows.map(r =>
    '  {\n' +
    `    week: ${r.week}, file: ${JSON.stringify(r.file)}, title: ${JSON.stringify(r.title)}, ref: ${JSON.stringify(r.ref)},\n` +
    `    achievement: ${JSON.stringify(r.achievement)},\n` +
    `    cover: ${JSON.stringify(r.cover)}\n` +
    '  }'
  ).join(',\n');

  const out =
    '/* 이 파일은 genlist.js 가 만듭니다 — 직접 고치지 마십시오.\n' +
    ' * 레슨을 추가/수정한 뒤 `npm run list` (또는 `npm run build`) 를 실행하면 갱신됩니다.\n' +
    ' * 표지를 바꾸려면 레슨 데이터에 cover: <장면 번호> 를 넣으십시오. */\n' +
    'window.PB_LESSONS = [\n' + body + '\n];\n';

  fs.writeFileSync(path.join(ROOT, 'lessons', 'list.js'), out);
  console.log(`✔ lessons/list.js — ${rows.length}강`);
  rows.forEach(r => console.log(`    ${String(r.week).padStart(3)}강  ${r.title}  (표지: 장면 ${r.coverScene})`));
}
main();
