/* 여호수아 팩 — 가나안 정복 본문에 필요한 그림 */
(function (PB) {
  PB.addSprites({
    /* 창 — 오른쪽을 가리킨다 (여호수아 8장, 손을 거두지 아니하였으며) */
    spear: {
      pal: { w: '#8a6a3a', d: '#5e4522', s: '#9aa3b4', l: '#d6dde9' }, px: [
        '........ll..',
        '........lss.',
        'wwwwwwwwssss',
        'ddddddddsss.',
        '........ss..']
    },
    /* 연기 — anim: 'float' 로 불탄 성 위에 올린다 */
    smoke: {
      pal: { g: '#6e6e78', l: '#9aa0aa', d: '#4a4a52' }, px: [
        '..llll..',
        '.llgggl.',
        'llggggll',
        '.gggggg.',
        '..gddg..',
        '...dd...']
    }
  });
})(window.PB);
