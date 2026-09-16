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
/* 엔진·레슨 적재는 genlist.js / snap.js 와 같은 모듈을 쓴다 (따로 두면 어긋난다) */
const { ROOT, loadEngine, loadLesson } = require('./lessonio.js');

const COLS = 32, ROWS = 18;

/* ---------- 성경 대조 (DB 없으면 건너뜀) ---------- */
let bible = null, bibleWhy = '';
try {
  const v = require('./verse.js');
  if (!fs.existsSync(v.DB)) { bibleWhy = '성경 DB 파일 없음: ' + v.DB; }
  else { v.flat('창1:1'); bible = v; }
} catch (e) { bibleWhy = '성경 DB 사용 불가: ' + e.message; }

/* 대사 속 하나님·예수님 말씀 대조용: 킹흠정역 전체의 "두 낱말 연쇄" 집합.
   축약 인용은 통과하지만, 어미·낱말을 바꿔 쓴 말씀은 연쇄가 끊겨 비율이 떨어진다. */
const words = t => String(t).replace(/\*\*/g, '').replace(/[“”"'’‘…,.!?;:·()]/g, ' ').split(/\s+/).filter(Boolean);
let bigrams = null;
function bibleBigrams() {
  if (bigrams) return bigrams;
  const { DatabaseSync } = require('node:sqlite');
  const db = new DatabaseSync(bible.DB, { readOnly: true });
  bigrams = new Set();
  for (const r of db.prepare('SELECT btext FROM Bible').all()) {
    const w = words(bible.clean(r.btext));
    for (let i = 1; i < w.length; i++) bigrams.add(w[i - 1] + ' ' + w[i]);
  }
  return bigrams;
}
const DIVINE = new Set(['하나님', '예수님', '주', '주의 천사']);

/* 킹흠정역에 없는 표기 (대부분 개역 성경 표기). 화면에 나오는 모든 글에 적용한다.
   성경 책 이름(출애굽기·사사기)과 ref 는 대상이 아니다. */
const TERMS = [
  [/(?<!출)애굽/, '이집트'],
  [/(?<![가-힣])바로(?:가|의|에게|를|왕)(?![가-힣])/, '파라오'],
  [/세례/, '침례 (세례 요한 → 침례자 요한)'],
  [/요단/, '요르단'],
  [/바벨론/, '바빌론'],
  [/앗수르/, '아시리아'],
  [/법궤/, '궤 (하나님의 궤 · 주의 궤 · 언약궤)'],
  [/(?<![가-힣])사사(?!기|로|롭)/, '재판관'],
  [/선지자/, '대언자'],
  [/나실인/, '나사르 사람'],
  [/귀신/, '마귀 · 부정한 영'],
  [/맹인|소경/, '눈먼 사람'],
  [/중풍/, '마비 병'],
  [/문둥/, '나병'],
  [/성전세/, '공세'],
  [/천부장/, '천인 대장 · 총대장'],
  [/방백/, '통치자'],
  [/대궐/, '왕의 집 · 왕의 문'],
  [/천국/, '하늘의 왕국'],
  [/(?<![가-힣])떡/, '빵'],
  [/베뢰아/, '베레아'],
  [/거라사/, '가다라'],
  [/이고니온/, '이고니움'],
  [/여호와(?!이레)/, '주']
];

/* 목차: 레슨 제목·본문이 목차와 같아야 목록·검색이 어긋나지 않는다 */
const CURRICULUM = (() => {
  try {
    const sb = { window: {} };
    require('vm').runInNewContext(fs.readFileSync(path.join(ROOT, 'lessons/curriculum.js'), 'utf8'), sb);
    return sb.window.PB_CURRICULUM || [];
  } catch (e) { return []; }
})();

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

  const cur = CURRICULUM[L.week - 1];
  if (cur && cur[0] !== L.title) add('W', '', `title 이 목차(curriculum.js)와 다릅니다: "${cur[0]}"`);
  if (cur && cur[1] !== L.ref) add('W', '', `ref 가 목차(curriculum.js)와 다릅니다: "${cur[1]}"`);

  const verseCards = L.scenes.filter(sc => sc.verse).length;
  if (verseCards > 5) add('W', '', `말씀 카드가 ${verseCards}장입니다 (핵심 구절 3~5장. 대사로 이미 읽은 구절은 카드로 또 띄우지 않기)`);

  /* 표기: 화면에 나오는 글 전부 (성경 인용인 verse · memory · blank 는 본문 대조로 따로 검사) */
  {
    const shown = [];
    const push = (at, t) => { if (t) shown.push([at, String(t)]); };
    push('', L.title); push('', L.splash); push('', L.intro); if (L.achievement) push('', L.achievement.title);
    L.scenes.forEach((sc, i) => {
      const at = `장면 ${i + 1}`;
      push(at, sc.caption);
      (sc.lines || []).forEach(l => { push(at, typeof l === 'string' ? l : l && l.text); if (l && l.who) push(at, l.who); });
      if (sc.quiz) [sc.quiz.q, sc.quiz.explain, ...(sc.quiz.options || [])].forEach(t => push(at, t));
      if (sc.choose) [sc.choose.q, ...(sc.choose.options || []).map(o => o && o.text)].forEach(t => push(at, t));
      if (sc.find) [sc.find.q, sc.find.hint, sc.find.explain].forEach(t => push(at, t));
      if (sc.walk) [sc.walk.q, sc.walk.say, sc.walk.name].forEach(t => push(at, t));
      [...(sc.objects || []), ...(sc.add || [])].forEach(o => o && o.label && push(at, o.label));
    });
    for (const [at, t] of shown) for (const [re, want] of TERMS) {
      const m = re.exec(t);
      if (m) add('W', at, `'${m[0]}' 는 킹흠정역 표기가 아닙니다 → ${want}: "${t.slice(0, 30)}"`);
    }
  }

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
       산등성이(S·D·s·G)에 올려 세우는 것은 의도한 연출이므로,
       사람이 지은 블록(판자·돌벽돌·벽돌·대리석) 위에 높이 서 있을 때만 잡는다. */
    {
      const BUILT = new Set(['P', 'C', 'B', 'm']);
      const floors = [];
      for (let x = 0; x < COLS; x++) { const gy = PB.groundY(w.grid, x); if (gy < ROWS) floors.push(gy); }
      if (floors.length) {
        const median = floors.slice().sort((a, b) => a - b)[floors.length >> 1];
        (w.objects || []).forEach(o => {
          if (o.y != null || !LAND_ONLY.has(o.s)) return;
          const gy = PB.groundY(w.grid, o.x);
          if (gy >= ROWS) return;
          const ch = w.grid[gy][Math.floor(o.x)];
          if (BUILT.has(ch) && median - gy >= 2)
            add('W', at, `'${o.label || o.s}' 가 건물 블록('${ch}') 위 ${median - gy}칸 높이에 서 있습니다 (x=${o.x}). 지붕·성벽에 올라간 것이 아닌지 확인하십시오`);
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
    if ((sc.lines || []).length > 3) add('W', at, `대사가 ${sc.lines.length}줄입니다 (장면당 2~3줄)`);
    (sc.lines || []).forEach(l => {
      const text = typeof l === 'string' ? l : (l && l.text) || '';
      const who = typeof l === 'object' && l ? l.who : '';
      if (!text) add('W', at, '빈 대사가 있습니다');
      if (text.length > 55) add('W', at, `대사가 ${text.length}자입니다 (권장 40자 안팎): "${text.slice(0, 24)}…"`);
      const bolds = (text.match(/\*\*/g) || []).length / 2;
      if (bolds > 1) add('W', at, `한 대사에 **강조** 가 ${bolds}개입니다 (1개 이하 권장)`);
      if ((text.match(/\*\*/g) || []).length % 2) add('E', at, `** 짝이 맞지 않습니다: "${text.slice(0, 24)}…"`);
      if (who === '하나님' && typeof l === 'object') { /* 하나님은 대사만 — 정상 */ }
      /* 말투: 해요체 적발. 문장마다 본다 — "…일어나 먹으라고요." 같은 간접 인용 꼬리도 해요체다 */
      text.replace(/\*\*/g, '').split(/(?<=[.!?])\s+/).forEach(sen => {
        const t = sen.replace(/["”’)\]]+$/, '').trim();
        if (/(요|죠)[.!?]*$/.test(t) && !/(필요|중요|주요)[.!?]*$/.test(t))
          add('W', at, `해요체로 보입니다 (중·고등부는 합니다체): "${t.slice(-24)}"`);
      });
      /* 하나님·예수님의 말씀은 킹흠정역 표현을 따른다 (줄여 인용하는 것은 괜찮다) */
      if (DIVINE.has(who) && bible) {
        const w = words(text);
        if (w.length >= 4) {
          const set = bibleBigrams();
          let hit = 0;
          for (let k = 1; k < w.length; k++) if (set.has(w[k - 1] + ' ' + w[k])) hit++;
          const ratio = hit / (w.length - 1);
          if (ratio < 0.5) add('W', at, `${who}의 말씀이 킹흠정역 표현과 다릅니다 (낱말 연쇄 일치 ${Math.round(ratio * 100)}%): "${text.slice(0, 30)}…"`);
        }
      }
    });
    /* 나눔은 열린 질문으로 — "…있지는 않습니까?" 는 예/아니요로 끝난다 */
    if (sc.caption === '나눔') (sc.lines || []).forEach(l => {
      const t = (typeof l === 'string' ? l : (l && l.text) || '').trim();
      if (/(않습니까|없습니까|아닙니까|않았습니까)\?$/.test(t))
        add('W', at, `나눔 질문이 예/아니요로 끝나는 수사의문문입니다: "${t.slice(-26)}"`);
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
      /* 보기는 엔진이 섞는다. 그래도 정답만 길면 읽지 않고 맞힌다 */
      if (Array.isArray(q.options) && q.options.length > 1 && q.answer >= 0 && q.answer < q.options.length) {
        const len = q.options.map(o => String(o).length), a = len[q.answer];
        const other = Math.max(...len.filter((_, k) => k !== q.answer));
        if (a >= other * 1.5 && a - other >= 5)
          add('W', at, `quiz: 정답만 눈에 띄게 깁니다 (정답 ${a}자 / 오답 최대 ${other}자). 오답도 비슷한 길이로`);
        if (q.shuffle !== false && q.options.some(o => /위의|모두 (맞|옳|틀)|둘 다|[A-D]와 [A-D]/.test(o)))
          add('W', at, 'quiz: 순서에 기대는 보기가 있습니다 (보기가 섞임). quiz.shuffle: false 를 넣으십시오');
      }
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
