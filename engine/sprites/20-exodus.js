/* 출애굽 팩 — 출애굽기 본문에 필요한 그림 */
(function (PB) {
  PB.addSprites({
    frog: {
      pal: { g: '#4f9e2c', d: '#2f6a18', w: '#f2f2f2', e: '#111' }, px: [
        '..g..g..',
        '.gwggwg.',
        '.geggeg.',
        'gggggggg',
        'gdggggdg',
        'gg.gg.gg',
        '.g....g.']
    },
    /* 파리 — anim: 'fly' 로 화면을 가로지르게 쓴다 */
    fly: { pal: { k: '#222228', w: '#aab4c4' }, px: ['w.w', 'kkk', '.k.'] },
    /* 메뚜기 */
    locust: { pal: { g: '#7a8a2a', d: '#4a5a12', e: '#111' }, px: ['..gggg', 'gggggg', 'ggggeg', '.d..d.'] },
    /* 병거 — 이집트·가나안 군대 장면에 반복해서 쓴다 */
    chariot: {
      pal: { k: '#4a3a2a', y: '#c8961a', d: '#2a1a10', s: '#8a7a5a' }, px: [
        '...kkkkk..',
        '..kyyyyyk.',
        '..kyyyyyk.',
        'kkkkkkkkkk',
        '.d......d.',
        'dsd....dsd',
        '.d......d.']
    },
    /* 벽돌 한 장 — 국고 도시 공사 장면용 */
    brick: {
      pal: { b: '#a4452f', l: '#c05a40', d: '#7a3222' }, px: [
        'llllllll',
        'bbbbbbbb',
        'bbbbbbbb',
        'dddddddd']
    }
  });
})(window.PB);
