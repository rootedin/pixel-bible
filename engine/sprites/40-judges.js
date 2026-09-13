/* 사사기 팩 — 사사 시대 본문에 필요한 그림 */
(function (PB) {
  PB.addSprites({
    /* 양쪽에 날이 선 짧은 칼 — 에훗의 칼(삿 3장) 등 */
    sword: {
      pal: { s: '#b9c0cc', l: '#e8eef7', d: '#7a828f', h: '#6e4d28', g: '#c8961a' }, px: [
        '...g........',
        'hhhgssssssl.',
        'hhhgsssssssl',
        'hhhgssssssl.',
        '...g........']
    },
    /* 양털 한 뭉치 — 기드온의 표징(삿 6장) */
    fleece: {
      pal: { w: '#f4f2ea', g: '#d6d2c4', d: '#a49c8a' }, px: [
        '..wwww..',
        '.wwgwww.',
        'wwgggwww',
        'wwgwwggw',
        '.wwgwww.',
        '..dddd..']
    },
    /* 여우 — 삼손의 여우 삼백 마리(삿 15장) */
    fox: {
      pal: { o: '#c8702a', d: '#8a4718', k: '#2a1a10' }, px: [
        'oo.....o.o',
        '.oo...oooo',
        '..oooooook',
        '.oooooooo.',
        '.dd....dd.',
        '.dd....dd.']
    }
  });
})(window.PB);
