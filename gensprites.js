/* engine/sprites.js 생성: node gensprites.js
 *
 * 원본은 engine/sprites/ 안의 파일들이다. 여기에 팩을 추가하면 되고,
 * 레슨 HTML 의 <script> 3줄은 200강 내내 그대로 둘 수 있다.
 * (engine/sprites.js 는 생성물이므로 직접 고치지 말 것)
 */
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'engine', 'sprites');
const out = path.join(__dirname, 'engine', 'sprites.js');

function build() {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.js')).sort();
  if (!files.length) { console.error('✘ engine/sprites/ 가 비어 있습니다'); process.exit(1); }
  const body = files
    .map(f => `/* ===== engine/sprites/${f} ===== */\n` + fs.readFileSync(path.join(dir, f), 'utf8').trim())
    .join('\n\n');
  const text =
    '/* 이 파일은 gensprites.js 가 engine/sprites/ 를 합쳐 만듭니다 — 직접 고치지 마십시오.\n' +
    ' * 스프라이트를 추가하려면 engine/sprites/ 안의 팩 파일을 고친 뒤 `npm run sprites` 를 실행하십시오. */\n' +
    body + '\n';
  fs.writeFileSync(out, text);
  return { files, bytes: Buffer.byteLength(text) };
}

module.exports = { build };
if (require.main === module) {
  const r = build();
  console.log(`✔ engine/sprites.js — ${r.files.join(', ')} (${(r.bytes / 1024).toFixed(1)}KB)`);
}
