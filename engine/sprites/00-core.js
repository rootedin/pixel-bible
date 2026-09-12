/* 픽셀 성경 — 스프라이트 코어: 사람 생성기 + 렌더링 + 팩 등록 API
 * px 배열의 글자 하나 = 픽셀 하나, '.' = 투명. pal 로 글자→색 지정
 * 새 그림은 이 파일이 아니라 같은 폴더의 팩 파일(10-base.js 등)에 추가한다. */
window.PB = window.PB || {};
(function (PB) {
  const SPR = {};
  PB.SPR = SPR;
  /* 팩에서 호출: PB.addSprites({ 이름: { pal, px } }) */
  PB.addSprites = obj => Object.assign(SPR, obj);

  /* ---------- 사람 생성기 ----------
   * 옵션: skin hair eyes shirt pants shoes sash beard long robe hood crown halo wings staff */
  const PEOPLE = {
    boy: { hair: '#3b2414', shirt: '#2fa3b0', pants: '#3b3f9e' },
    girl: { hair: '#3b2414', long: true, shirt: '#e0628a', robe: true, sash: '#f5d76e' },
    man: { hair: '#2a1a10', beard: '#2a1a10', shirt: '#8b6b45', robe: true, sash: '#5a3d22' },
    woman: { hood: '#4a6fb0', shirt: '#c7b28a', robe: true, sash: '#7a3b2a' },
    elder: { hair: '#dcdcdc', beard: '#f0f0f0', shirt: '#6b5a8e', robe: true, sash: '#d9b52c' },
    shepherd: { hair: '#3b2414', shirt: '#b89a6a', robe: true, sash: '#6b4a2a', staff: true },
    king: { hair: '#3b2414', beard: '#3b2414', shirt: '#7b2fbe', robe: true, sash: '#f7d34a', crown: true },
    priest: { hair: '#2a1a10', beard: '#2a1a10', shirt: '#f2f2f2', robe: true, sash: '#2e388d', hood: '#f2f2f2' },
    soldier: { hair: '#555', shirt: '#9a9a9a', pants: '#6f6f6f', shoes: '#4a321c', sash: '#b3312c' },
    giant: { hair: '#3a2a1a', beard: '#3a2a1a', shirt: '#8c8c8c', pants: '#5e5e5e', sash: '#6b4a2a' },
    jesus: { hair: '#4a2c16', beard: '#4a2c16', long: true, shirt: '#f5f1e6', robe: true, sash: '#b3312c' },
    angel: { hair: '#f7d34a', shirt: '#ffffff', robe: true, sash: '#f7d34a', halo: true, wings: true }
  };
  PB.PEOPLE = PEOPLE;

  function personSprite(o) {
    const c = Object.assign({ skin: '#c99066', hair: '#3b2414', eyes: '#1b1b2b', shirt: '#2fa3b0', pants: '#3b3f9e', shoes: '#4a4a4a' }, o);
    if (c.hood) { c.hair = c.hood; c.long = true; }
    const L = c.long;
    const head = [
      '.hhhhhh.', '.hhhhhh.', '.hssssh.',
      L ? 'hsessesh' : '.sesses.',
      L ? 'hssssssh' : '.ssssss.',
      c.beard ? (L ? 'hbbbbbbh' : '.bbbbbb.') : (L ? 'hssmmssh' : '.ssmmss.')];
    const body = [
      c.beard ? 'ccbbbbcc' : 'cccccccc', 'cccccccc', 'cccccccc',
      c.sash ? 'cxxxxxxc' : 'cccccccc', 'kccccccK'];
    const legs = c.robe
      ? ['.cccccc.', '.cccccc.', '.cccccc.', 'cccccccc', '.oo..oo.']
      : ['.pppppp.', '.pppppp.', '.pp..pp.', '.pp..pp.', '.oo..oo.'];
    const pal = {
      h: c.hair, s: c.skin, e: c.eyes, m: shade(c.skin, -30), b: c.beard, c: c.shirt, x: c.sash,
      k: c.skin, K: c.skin, p: c.pants, o: c.robe ? shade(c.skin, -40) : c.shoes
    };
    const cv = mk(16, 19), g = cv.getContext('2d');
    if (c.wings) { // 몸 뒤의 날개
      g.fillStyle = '#eef4ff';
      [[1, 6, 3, 7], [0, 8, 1, 4], [12, 6, 3, 7], [15, 8, 1, 4]].forEach(r => g.fillRect(...r));
      g.fillStyle = '#c9d6ea'; g.fillRect(2, 12, 1, 2); g.fillRect(13, 12, 1, 2);
    }
    paint(g, [...head, ...body, ...legs], pal, 4, 3);
    if (c.crown) { g.fillStyle = '#f7d34a'; g.fillRect(5, 1, 1, 1); g.fillRect(7, 1, 2, 1); g.fillRect(10, 1, 1, 1); g.fillRect(5, 2, 6, 1); g.fillStyle = '#e53b3b'; g.fillRect(7, 2, 2, 1); }
    if (c.halo) { g.fillStyle = '#ffe25a'; g.fillRect(6, 0, 4, 1); g.fillRect(5, 1, 1, 1); g.fillRect(10, 1, 1, 1); }
    if (c.staff) { g.fillStyle = '#7a5632'; g.fillRect(13, 5, 1, 14); g.fillRect(14, 3, 1, 2); g.fillRect(13, 3, 1, 1); }
    const hc = mk(6, 6); hc.getContext('2d').drawImage(cv, 5, 3, 6, 6, 0, 0, 6, 6);
    return { frames: [cv], w: 16, h: 19, head: hc };
  }

  function shade(hex, amt) {
    const n = parseInt(hex.slice(1), 16);
    const f = v => Math.max(0, Math.min(255, v + amt));
    return '#' + [f(n >> 16), f((n >> 8) & 255), f(n & 255)].map(v => v.toString(16).padStart(2, '0')).join('');
  }
  function mk(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
  function paint(g, rows, pal, ox, oy) {
    rows.forEach((row, y) => [...row].forEach((ch, x) => {
      const col = pal[ch]; if (ch === '.' || !col) return;
      g.fillStyle = col; g.fillRect(ox + x, oy + y, 1, 1);
    }));
  }

  const cache = {};
  /* 이름 + 옵션 → { frames:[canvas], w, h, head } */
  PB.getSprite = function (name, opts) {
    opts = opts || {};
    const key = name + JSON.stringify(opts);
    if (cache[key]) return cache[key];
    let out;
    if (name === 'person' || PEOPLE[name]) {
      out = personSprite(Object.assign({}, PEOPLE[opts.preset || name] || {}, opts));
    } else {
      const d = SPR[name];
      if (!d) { console.warn('알 수 없는 스프라이트:', name); return null; }
      const pal = Object.assign({}, d.pal, opts.pal || {});
      const frames = (d.frames || [d.px]).map(rows => {
        const cv = mk(rows[0].length, rows.length); paint(cv.getContext('2d'), rows, pal, 0, 0); return cv;
      });
      out = { frames, w: frames[0].width, h: frames[0].height, head: frames[0] };
    }
    return (cache[key] = out);
  };
})(window.PB);
