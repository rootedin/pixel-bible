/* 레슨 파일을 브라우저 없이 읽기 위한 공용 모듈 (lint.js / genlist.js / snap.js 가 함께 사용)
 *
 * 레슨은 HTML 안에서 PB.start({...}) 를 호출한다. 그 인자를 그대로 꺼내오면
 * 별도의 파서 없이 실제 레슨 데이터를 얻을 수 있다 — 파서와 엔진이 어긋날 일이 없다. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = __dirname;

/* engine/ 3종을 DOM 없이 적재해 PB 객체를 돌려준다.
 * 엔진은 모듈 최상위에서 document 를 쓰지 않으므로 가능하다. */
function loadEngine() {
  const sandbox = {
    window: {}, console,
    document: { createElement: () => { throw new Error('엔진 최상위에서 document 를 사용하고 있습니다'); } },
    performance: { now: () => 0 }
  };
  sandbox.globalThis = sandbox;
  vm.createContext(sandbox);
  for (const f of ['engine/world.js', 'engine/sprites.js', 'engine/engine.js']) {
    vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), sandbox, { filename: f });
  }
  return sandbox.window.PB;
}

/* 레슨 HTML → PB.start 에 넘긴 객체 */
function loadLesson(PB, file) {
  const html = fs.readFileSync(file, 'utf8');
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

/* lessons/ 의 레슨 파일 목록. _ 로 시작하는 파일(픽스처)은 제외 */
function lessonFiles() {
  const dir = path.join(ROOT, 'lessons');
  return fs.readdirSync(dir)
    .filter(f => /^\d+.*\.html$/.test(f))
    .sort()
    .map(f => path.join(dir, f));
}

module.exports = { ROOT, loadEngine, loadLesson, lessonFiles };
