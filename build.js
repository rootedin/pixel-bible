// 배포용 빌드: node build.js → dist/ 에 레슨마다 "파일 하나짜리" HTML 생성
// (카톡·메일로 보내거나 USB로 옮겨도 그대로 열림. 폰트만 인터넷 필요, 없으면 기본 글꼴)
const fs = require('fs'), path = require('path');
const root = __dirname, out = path.join(root, 'dist');
fs.mkdirSync(out, { recursive: true });
const read = p => fs.readFileSync(path.join(root, p), 'utf8');

const files = fs.readdirSync(path.join(root, 'lessons')).filter(f => /^\d+.*\.html$/.test(f));
for (const f of files) {
  let html = read('lessons/' + f);
  html = html.replace(/<link rel="stylesheet" href="\.\.\/engine\/(\w+\.css)">/g, (m, css) => `<style>\n${read('engine/' + css)}\n</style>`);
  html = html.replace(/<script src="\.\.\/engine\/(\w+\.js)"><\/script>/g, (m, js) => `<script>\n${read('engine/' + js)}\n</script>`);
  html = html.replace('PB.start({', 'PB.start({ home: false,');
  fs.writeFileSync(path.join(out, f), html);
  console.log('✔ dist/' + f, (Buffer.byteLength(html) / 1024).toFixed(0) + 'KB');
}
