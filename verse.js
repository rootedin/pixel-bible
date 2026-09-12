// 성경 구절 조회 (킹흠정역 마제스티): node verse.js 창1:1 창1:27-28 요3:16 시23
// 레슨의 verse/memory 본문은 반드시 이 출력을 그대로 사용
const { DatabaseSync } = require('node:sqlite');
const path = require('path');
const DB = process.env.BIBLE_DB || path.join(__dirname, '..', 'bible', 'data', '킹흠정역 마제스티.bdb');

const ABBR = ['창', '출', '레', '민', '신', '수', '삿', '룻', '삼상', '삼하', '왕상', '왕하', '대상', '대하', '스', '느', '에', '욥', '시', '잠', '전', '아', '사', '렘', '애', '겔', '단', '호', '욜', '암', '옵', '욘', '미', '나', '합', '습', '학', '슥', '말',
  '마', '막', '눅', '요', '행', '롬', '고전', '고후', '갈', '엡', '빌', '골', '살전', '살후', '딤전', '딤후', '딛', '몬', '히', '약', '벧전', '벧후', '요일', '요이', '요삼', '유', '계'];
const NAME = ['창세기', '출애굽기', '레위기', '민수기', '신명기', '여호수아', '사사기', '룻기', '사무엘상', '사무엘하', '열왕기상', '열왕기하', '역대기상', '역대기하', '에스라', '느헤미야', '에스더', '욥기', '시편', '잠언', '전도서', '아가', '이사야', '예레미야', '예레미야애가', '에스겔', '다니엘', '호세아', '요엘', '아모스', '오바댜', '요나', '미가', '나훔', '하박국', '스바냐', '학개', '스가랴', '말라기',
  '마태복음', '마가복음', '누가복음', '요한복음', '사도행전', '로마서', '고린도전서', '고린도후서', '갈라디아서', '에베소서', '빌립보서', '골로새서', '데살로니가전서', '데살로니가후서', '디모데전서', '디모데후서', '디도서', '빌레몬서', '히브리서', '야고보서', '베드로전서', '베드로후서', '요한일서', '요한이서', '요한삼서', '유다서', '요한계시록'];

function bookIndex(s) {
  let i = ABBR.indexOf(s); if (i < 0) i = NAME.indexOf(s);
  if (i < 0) i = NAME.findIndex(n => n.startsWith(s));
  return i;
}
// 소제목 <...>, 단락 표시 ¶, 전각 문장부호 정리
const clean = t => t.replace(/<[^>]*>/g, '').replace(/¶/g, '').replace(/[⁠-⁯]/g, '')
  .replace(/（/g, '(').replace(/）/g, ')').replace(/，/g, ',').replace(/？/g, '?').replace(/\s+/g, ' ').trim();

const db = new DatabaseSync(DB, { readOnly: true });
const args = process.argv.slice(2);
if (!args.length) { console.log('사용법: node verse.js 창1:1 창1:27-28 요3:16 시23'); process.exit(0); }
for (const a of args) {
  const m = /^(\D+?)\s*(\d+)(?::(\d+)(?:-(\d+))?)?$/.exec(a.trim());
  const b = m ? bookIndex(m[1]) : -1;
  if (b < 0) { console.log(`✘ 알 수 없는 구절: ${a}`); continue; }
  const ch = +m[2], v1 = m[3] ? +m[3] : 1, v2 = m[4] ? +m[4] : m[3] ? v1 : 999;
  const rows = db.prepare('SELECT verse, btext FROM Bible WHERE book=? AND chapter=? AND verse BETWEEN ? AND ? ORDER BY verse').all(b + 1, ch, v1, v2);
  if (!rows.length) { console.log(`✘ 없음: ${a}`); continue; }
  const last = rows[rows.length - 1].verse;
  const ref = `${NAME[b]} ${ch}:${rows[0].verse}${last !== rows[0].verse ? '-' + last : ''}`;
  if (rows.length === 1) console.log(`${ref}\n${clean(rows[0].btext)}\n`);
  else console.log(`${ref}\n${rows.map(r => `${r.verse} ${clean(r.btext)}`).join('\n')}\n`);
}
