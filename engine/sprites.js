/* 이 파일은 gensprites.js 가 engine/sprites/ 를 합쳐 만듭니다 — 직접 고치지 마십시오.
 * 스프라이트를 추가하려면 engine/sprites/ 안의 팩 파일을 고친 뒤 `npm run sprites` 를 실행하십시오. */
/* ===== engine/sprites/00-core.js ===== */
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

/* ===== engine/sprites/10-base.js ===== */
/* 기본 팩 — 동물·자연·사물 */
(function (PB) {
  PB.addSprites({
      sheep: { pal: { w: '#f2f2f2', v: '#d6d6d6', f: '#d8c2a6', e: '#222', l: '#b8a58e' }, px: [
        '...wvwwww...', '.wwwwwwwwwff', 'wwvwwwwwwfef', 'wwwwwwvwwfff', 'wwwwwwwwww..', '.wwvwwwwww..', '.ll....ll...', '.ll....ll...'] },
      cow: { pal: { w: '#eeeeee', k: '#3a2a22', p: '#e8a0a0', e: '#111', h: '#cfc7b8' }, px: [
        'h.........h.', 'kkwwkkkkwkkk', 'kwwkkkkwwkek', 'kkkkwwkkkkpp', 'kwwkkkkwwkpp', 'kkkkkkkkkk..', '.kk....kk...', '.kk....kk...'] },
      lion: { pal: { m: '#8a4b1c', y: '#d9a23c', e: '#222', n: '#5a3212' }, px: [
        '........mmm.', '.......mmyym', 'y......mmyey', 'yyyyyyymmyyn', 'yyyyyyyymyy.', 'yyyyyyyyy...', '.yy....yy...', '.yy....yy...'] },
      snake: { pal: { g: '#4f9e2c', d: '#2f6a18', e: '#ff3', t: '#d33' }, px: [
        '........ggg.', '.......ggegt', 'gdg...gdg...', '.gdgggdg....', '..ggg.......'] },
      fish: { pal: { o: '#f08a24', y: '#ffc04a', e: '#111' }, px: [
        '...ooo..', 'o.oyyoeo', 'oooyyooo', 'o..ooo..'] },
      bird: { pal: { b: '#3b3b46', o: '#f0a020' }, frames: [
        ['b.....b', 'bb...bb', '.bbobb.', '..bbb..'],
        ['.......', '..bob..', '.bbbbb.', 'b.....b']] },
      dove: { pal: { b: '#ffffff', o: '#f0a020' }, frames: [
        ['b.....b', 'bb...bb', '.bbobb.', '..bbb..'],
        ['.......', '..bob..', '.bbbbb.', 'b.....b']] },
      sun: { pal: { y: '#ffe25a', w: '#fff7c2', o: '#f5b82e' }, px: [
        'oooooooooooo', 'oyyyyyyyyyyo', 'oyyyyyyyyyyo', 'oyyywwwwyyyo', 'oyywwwwwwyyo', 'oyywwwwwwyyo', 'oyywwwwwwyyo', 'oyywwwwwwyyo', 'oyyywwwwyyyo', 'oyyyyyyyyyyo', 'oyyyyyyyyyyo', 'oooooooooooo'] },
      moon: { pal: { m: '#e8ecf5', d: '#b9c0d0' }, px: [
        'mmmmmmmmmm', 'mmmdmmmmmm', 'mmddmmmmmm', 'mmmmmmmddm', 'mmmmmmmddm', 'mdmmmmmmmm', 'mmmmmdmmmm', 'mmmmddmmmm', 'mmmmmmmmmm', 'mmmmmmmmmm'] },
      star: { pal: { y: '#fff6a0', w: '#ffffff' }, px: ['..y..', '..y..', 'yywyy', '..y..', '..y..'] },
      heart: { pal: { r: '#e53b3b', p: '#ff8a8a', d: '#a61f1f' }, px: [
        '.rr.rr.', 'rpprrrr', 'rprrrrr', '.rrrrd.', '..rrd..', '...d...'] },
      cross: { pal: { w: '#8a5a2e', d: '#5e3b1b' }, px: [
        '..ww...', '..wd...', 'wwwwwww', 'dddwddd', '..wd...', '..wd...', '..wd...', '..wd...', '..wd...', '..wd...', '..wd...'] },
      fire: { pal: { r: '#e0401a', o: '#f28a1e', y: '#ffd84a' }, frames: [
        ['..r...', '.rr.r.', '.ror.r', 'rooorr', 'royyor', 'royyor', '.rooo.', '..rr..'],
        ['...r..', '.r.rr.', 'r.ror.', 'rroooo', 'royyor', 'ryyyor', '.rooo.', '..rr..']] },
      tablets: { pal: { s: '#a9a9a9', d: '#6f6f6f', l: '#555' }, px: [
        '.sss..sss.', 'sssss.ssss', 'slll..slls', 'sssss.ssss', 'sllls.slls', 'sssss.ssss', 'sllls.slls', 'sssss.ssss', 'ddddd.dddd'] },
      scroll: { pal: { p: '#f1e2b8', d: '#c9a96a', b: '#8a5a2e', l: '#9a8a6a' }, px: [
        'bb......bb', 'bpppppppbb', '.plllllp..', '.pppppppp.', '.plllllp..', 'bpppppppbb', 'bb......bb'] },
      bread: { pal: { b: '#c98a3e', l: '#e6b264', d: '#8e5a22' }, px: ['..bbbb..', '.blllbb.', 'bbbbbbbb', '.dddddd.'] },
      fruit: { pal: { r: '#d8262a', l: '#ff6a6a', g: '#3b8f2a', b: '#6b4a2a' }, px: ['..b..', '.gb..', 'rrlrr', 'rrrlr', 'rrrrr', '.rrr.'] },
      flower: { pal: { r: '#e8433b', y: '#ffd84a', g: '#3b8f2a' }, px: ['.r.', 'ryr', '.r.', '.g.', 'gg.'] },
      flower2: { pal: { r: '#ffd84a', y: '#f28a1e', g: '#3b8f2a' }, px: ['.r.', 'ryr', '.r.', '.g.', '.gg'] },
      tuft: { pal: { g: '#4f9530', l: '#6bb847' }, px: ['g.l.g', '.glg.', 'gglgg'] },
      torch: { pal: { f: '#ffd84a', o: '#f28a1e', w: '#6b4a2a' }, frames: [['.f.', 'fof', '.w.', '.w.', '.w.'], ['f..', 'of.', '.w.', '.w.', '.w.']] },
      stone: { pal: { s: '#9a9a9a', d: '#6f6f6f', l: '#bdbdbd' }, px: ['.lss.', 'lsssd', 'ssssd', '.ddd.'] },
      jar: { pal: { c: '#b86a3c', d: '#8a4a26', l: '#d88a5c' }, px: ['.cc.', 'cddc', 'clcc', 'clcc', '.cc.'] },
      coin: { pal: { y: '#ffd84a', o: '#c8961a' }, px: ['.yy.', 'yooy', 'yooy', '.yy.'] },
      basket: { pal: { r: '#d9b26a', d: '#a8813f', w: '#f5f0e4', s: '#c99066', e: '#1b1b2b' }, px: [
        '....sss.....', '...seses....', '...wwwww....', 'rrrrrrrrrrrr', '.rdrrdrrdrr.', '.rrddrrddrr.', '..dddddddd..'] },
      reed: { pal: { g: '#5aa03a', d: '#37701f', b: '#8a5a2e' }, px: [
        '..b..', '..b..', '..b..', 'g.b.g', 'gdbdg', 'gdbdg', '.gbg.', '.dbd.', '..d..'] }
    });
})(window.PB);

/* ===== engine/sprites/20-exodus.js ===== */
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
