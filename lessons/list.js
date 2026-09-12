/* 만들어진 레슨 목록 — 새 주차를 만들면 여기에 한 줄(객체 하나) 추가
 * week = curriculum.js 의 강 번호. 여기 있는 강만 목록에서 열리고, 나머지는 "오픈 예정"으로 표시된다. */
window.PB_LESSONS = [
  {
    week: 1, file: 'lessons/01-creation.html', title: '처음에', ref: '창세기 1:1 – 2:3',
    cover: {
      sky: 'day',
      map: ['.{15}LLL.{10}LLL.', '.{14}L{5}.{8}L{5}', '.{14}L{5}.{8}L{5}', '.{16}T.{12}T..', '.{16}T.{12}T..', '.{16}T.{5}G{5}..T..',
        '.{13}G{9}D{5}G{5}', 'W{10}s{3}D{19}', 'W{10}s{3}D{19}', 'W{10}s{3}D{6}S{13}', 's{11}S{21}', 'S{32}'],
      objects: [{ s: 'sun', x: 24, y: 5 }, ['sheep', 20], ['man', 15], ['girl', 17, { hair: '#5a3212', shirt: '#c7b28a' }], ['bird', 6, { y: 4 }]]
    }
  },
  {
    week: 37, file: 'lessons/37-moses-born.html', title: '모세가 태어났어요', ref: '출애굽기 2:1-10',
    cover: {
      sky: 'dawn', bg: 'desert',
      map: ['G{8}W{14}s{10}', 'D{8}W{14}s{10}', 'D{8}W{14}s{10}', 'D{8}W{14}s{10}',
        'S{8}W{14}s{10}', 'S{8}W{14}s{10}', 'S{22}s{10}', 'S{32}'],
      objects: [
        { s: 'reed', x: 9.5 }, { s: 'reed', x: 10.5 }, { s: 'reed', x: 18.5 },
        { s: 'reed', x: 19.5 }, { s: 'reed', x: 21 }, { s: 'reed', x: 21.8 },
        { s: 'basket', x: 20 }, { s: 'girl', x: 2 },
        { s: 'girl', x: 25, crown: true, shirt: '#e8d48a', sash: '#2fa3b0', flip: true },
        { s: 'woman', x: 28.5, hood: '#b9a06a', flip: true },
        { s: 'fish', x: 14, y: 13 }
      ]
    }
  }
];
