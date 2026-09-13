/* 룻기·사무엘 팩 — 추수와 성막 장면에 필요한 그림 */
(function (PB) {
  PB.addSprites({
    /* 곡식 단 — 보리 수확, 요셉의 꿈, 추수 장면에 두루 쓴다 */
    sheaf: {
      pal: { y: '#d8b44a', d: '#9a7a28', l: '#f0d878' }, px: [
        '.l.l.l.l',
        'lylylyly',
        'yyyyyyyy',
        'dddddddd',
        'yyyyyyyy',
        '.yy..yy.']
    },
    /* 벌집 — 삼손의 사자 주검, 요나단의 수풀(삼상 14장) */
    honeycomb: {
      pal: { y: '#e8b93a', d: '#a87c10', l: '#f7dc7a' }, px: [
        '.lylyl.',
        'yyyyyyy',
        'ydydydy',
        'yyyyyyy',
        'ydydydy',
        '.yyyyy.']
    }
  });
})(window.PB);
