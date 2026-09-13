/* 배포용 빌드: node build.js
 *
 * dist/ 에 "파일 하나짜리" HTML 을 만든다. 카톡·메일로 보내거나 USB 로 옮겨도
 * 더블클릭만으로 열린다 (서버 불필요). 폰트만 인터넷이 필요하고, 없으면 기본 글꼴.
 *
 *   dist/index.html        전체 목록 (레슨으로 이동 가능)
 *   dist/NN-슬러그.html     레슨 하나
 *
 * 빌드 전에 engine/sprites.js 와 lessons/list.js 를 먼저 다시 만든다 —
 * 손으로 갱신하는 걸 잊어 목록과 실제 레슨이 어긋나는 일을 막는다.
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const root = __dirname, out = path.join(root, 'dist');
const read = p => fs.readFileSync(path.join(root, p), 'utf8');

/* ---------- 1. 생성물 먼저 갱신 ---------- */
require('./gensprites.js').build();
execFileSync(process.execPath, [path.join(root, 'genlist.js')], { stdio: 'inherit' });

fs.mkdirSync(out, { recursive: true });

/* ---------- 2. 공통: 외부 참조를 본문에 심는다 ---------- */
function inline(html, prefix) {
  const css = new RegExp(`<link rel="stylesheet" href="${prefix}engine/(\\w+\\.css)">`, 'g');
  const js = new RegExp(`<script src="${prefix}engine/(\\w+\\.js)"></script>`, 'g');
  return html
    .replace(css, (m, f) => `<style>\n${read('engine/' + f)}\n</style>`)
    .replace(js, (m, f) => `<script>\n${read('engine/' + f)}\n</script>`);
}

/* ---------- 3. 레슨 ---------- */
const files = fs.readdirSync(path.join(root, 'lessons')).filter(f => /^\d+.*\.html$/.test(f)).sort();
let total = 0;
for (const f of files) {
  let html = inline(read('lessons/' + f), '\\.\\./');
  /* dist 안에서는 목록이 같은 폴더에 있다 */
  html = html.replace('PB.start({', "PB.start({ home: 'index.html',");
  const p = path.join(out, f);
  fs.writeFileSync(p, html);
  total += Buffer.byteLength(html);
  console.log(`✔ dist/${f}  ${(Buffer.byteLength(html) / 1024).toFixed(0)}KB`);
}

/* ---------- 4. 목록 ---------- */
{
  let html = inline(read('index.html'), '');
  /* 커리큘럼과 목록 데이터도 심는다 */
  html = html.replace(/<script src="lessons\/(\w+\.js)"><\/script>/g,
    (m, f) => `<script>\n${read('lessons/' + f)}\n</script>`);
  /* dist 에서는 레슨이 같은 폴더에 있으므로 lessons/ 경로를 떼어낸다 */
  html = html.replace(/"lessons\//g, '"');
  /* 도감은 배포본에 넣지 않는다 (제작용) */
  html = html.replace(/<a class="pb-btn sm" href="sprites\.html"[\s\S]*?<\/a>/g, '');
  fs.writeFileSync(path.join(out, 'index.html'), html);
  total += Buffer.byteLength(html);
  console.log(`✔ dist/index.html  ${(Buffer.byteLength(html) / 1024).toFixed(0)}KB`);
}

console.log(`\n${files.length + 1}개 파일 · 합계 ${(total / 1024 / 1024).toFixed(2)}MB`);
console.log('dist/ 폴더를 통째로 옮기면 인터넷 없이도 열립니다 (글꼴만 인터넷 사용).');
