/* 열왕기 팩 — 왕들의 시대 본문에 필요한 그림 */
(function (PB) {
  PB.addSprites({
    /* 포도송이 — 나봇의 포도원(왕상 21장) */
    grapes: {
      pal: { p: '#6a3a8a', d: '#3f2154', l: '#9a6ab4', g: '#4f9e2c' }, px: [
        '...gg...',
        '..ppgp..',
        '.pplppp.',
        'ppplpppp',
        '.pppppd.',
        '..pppd..',
        '...pd...']
    },
    /* 멍에 — 르호보암에게 백성이 가볍게 해 달라고 한 것(왕상 12장) */
    yoke: {
      pal: { w: '#8a6a3a', d: '#5e4522', l: '#b08a4a' }, px: [
        '.wwwwwwwwww.',
        'wllllllllllw',
        'wwwwwwwwwwww',
        '.d........d.',
        '.d........d.',
        '.d........d.',
        '..dd....dd..']
    },
    /* 낙타 — 세바의 여왕이 타고 온 행렬(왕상 10장) */
    camel: {
      pal: { h: '#a87244', d: '#6e4620', k: '#2e1e12' }, px: [
        '...........kkk',
        '..........khhk',
        '..........hh..',
        '.....hhh..hh..',
        'd.hhhhhhhhhh..',
        '.hhhhhhhhhhh..',
        '.hhhhhhhhhhh..',
        '..hh.....hh...',
        '..h.h....h.h..',
        '..d.d....d.d..']
    },
    /* 보석 — 낙타에 실려 온 예물(왕상 10:2) */
    gem: {
      pal: { b: '#4aa8d8', l: '#a8e0f5', d: '#1a5a8a' }, px: [
        '..llll..',
        '.lbbbbl.',
        'lbbbbbbl',
        'lbbbbbbd',
        '.dbbbbd.',
        '..dbbd..',
        '...dd...']
    }
  });
})(window.PB);
