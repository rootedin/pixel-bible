/* 픽셀 성경 — 월드 렌더러: 블록(타일), 하늘, 배경 산/도시
 * 캔버스 256x144, 타일 8px → 가로 32칸 x 세로 18칸 */
window.PB = window.PB || {};
(function (PB) {
  const S = 8, COLS = 32, ROWS = 18, W = COLS * S, H = ROWS * S;
  PB.W = W; PB.H = H; PB.S = S; PB.COLS = COLS; PB.ROWS = ROWS;

  function rng(seed) {
    let s = (seed >>> 0) || 1;
    return () => (s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296;
  }
  PB.rng = rng;
  const pick = (r, a) => a[(r() * a.length) | 0];
  const brick = (x, y) => y === 0 || y === 4 || (y < 4 ? x === 0 : x === 4);

  const GRASS = ['#5da83a', '#4f9530', '#6bb847', '#5a9f36'];
  const DIRT = ['#8b5a35', '#7a4d2c', '#96653e', '#6c4427'];
  const WOOL = c => (x, y, r) => (r() < 0.2 ? c[1] : c[0]);

  /* 블록 정의: 글자 하나 = 블록 하나. f(x,y,r,frame) → 색 (null = 투명) */
  const TILES = {
    G: { name: '잔디', f: (x, y, r) => (y < 2 || (y === 2 && r() < 0.55) ? pick(r, GRASS) : pick(r, DIRT)) },
    D: { name: '흙', f: (x, y, r) => pick(r, DIRT) },
    S: { name: '돌', f: (x, y, r) => pick(r, ['#8c8c8c', '#7d7d7d', '#999999', '#727272']) },
    C: { name: '돌벽돌', f: (x, y, r) => (brick(x, y) ? '#5e5e5e' : pick(r, ['#9a9a9a', '#8f8f8f', '#a5a5a5'])) },
    B: { name: '벽돌', f: (x, y, r) => (brick(x, y) ? '#c9bfb0' : pick(r, ['#a4452f', '#963d29', '#b04e36'])) },
    m: { name: '대리석', f: (x, y, r) => (r() < 0.08 ? '#b9b6ae' : pick(r, ['#eeebe4', '#e4e1d9', '#f5f3ee'])) },
    s: { name: '모래', f: (x, y, r) => pick(r, ['#e2d59b', '#d8ca8c', '#ebdfa8', '#d2c283']) },
    W: { name: '물', frames: 3, f: (x, y, r, t) => ['#2f5fd0', '#3a6be0', '#2a55bd', '#4a7bef'][(x + y * 2 + t + ((r() * 2) | 0)) % 4] },
    A: { name: '용암', frames: 3, f: (x, y, r, t) => ['#e8641c', '#f28a1e', '#d9480f', '#ffb13b'][(x * 3 + y + t * 2 + ((r() * 2) | 0)) % 4] },
    L: { name: '나뭇잎', f: (x, y, r) => (r() < 0.12 ? '#1d5215' : pick(r, ['#2f7a22', '#3b8f2a', '#25661b', '#44992f'])) },
    T: { name: '통나무', f: (x, y, r) => (x === 0 || x === 7 || r() < 0.15 ? '#4a321c' : pick(r, ['#6b4a2a', '#5a3d22', '#7a5632'])) },
    P: { name: '나무판자', f: (x, y, r) => (y % 4 === 3 || (x === (y < 4 ? 2 : 6) ) ? '#6e5230' : pick(r, ['#b08850', '#a07a45', '#bb9458'])) },
    g: { name: '유리', f: (x, y, r) => (x === 0 || y === 0 || x === 7 || y === 7 ? '#dff4ff' : (x === y + 2 && x < 6 ? '#ffffff' : null)) },
    X: { name: '금', f: (x, y, r) => (x === 0 || y === 7 ? '#c8961a' : x === 7 || y === 0 ? '#fff3a0' : pick(r, ['#f7d34a', '#f0c63a', '#ffdd5e'])) },
    O: { name: '흑요석', f: (x, y, r) => pick(r, ['#140f1f', '#1f1530', '#2a1d42', '#0d0a14']) },
    N: { name: '눈', f: (x, y, r) => pick(r, ['#f4f8ff', '#e6eef9', '#ffffff']) },
    w: { name: '흰 양털', f: WOOL(['#ececec', '#dcdcdc']) },
    r: { name: '빨간 양털', f: WOOL(['#b3312c', '#9c2925']) },
    b: { name: '파란 양털', f: WOOL(['#2e388d', '#262f78']) },
    p: { name: '보라 양털', f: WOOL(['#7b2fbe', '#6827a3']) },
    y: { name: '건초', f: (x, y, r) => (y === 2 || y === 5 ? '#8a6a12' : pick(r, ['#d9b52c', '#c9a322', '#e5c33d'])) },
    K: { name: '어둠', f: () => '#000000' },
    '#': { name: '기반암', f: (x, y, r) => pick(r, ['#3a3a3a', '#222222', '#555555', '#111111']) },
    c: { name: '구름', f: (x, y, r) => (y === 7 ? '#dfe6ee' : '#ffffff') }
  };
  PB.TILES = TILES;
  /* 캐릭터가 설 수 없는(통과하는) 블록 */
  const PASS = new Set(['.', ' ', 'c', 'L', 'T', 'g']);

  const cache = {};
  function tileImg(ch, variant, frame) {
    const def = TILES[ch]; if (!def) return null;
    const key = ch + variant + ':' + frame;
    if (cache[key]) return cache[key];
    const cv = document.createElement('canvas'); cv.width = cv.height = S;
    const g = cv.getContext('2d'), r = rng(ch.charCodeAt(0) * 97 + variant * 13 + 1);
    for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
      const c = def.f(x, y, r, frame);
      if (c) { g.fillStyle = c; g.fillRect(x, y, 1, 1); }
    }
    return (cache[key] = cv);
  }

  /* "G{32}" 같은 반복 표기를 펼침 */
  function expandRow(row) {
    return row.replace(/(.)\{(\d+)\}/g, (m, ch, n) => ch.repeat(+n)).padEnd(COLS, '.').slice(0, COLS);
  }
  /* 맵은 아래쪽 정렬: 짧게 써도 캔버스 바닥에 붙음 */
  PB.parseMap = function (rows) {
    const grid = Array.from({ length: ROWS }, () => '.'.repeat(COLS));
    const list = (rows || []).map(expandRow);
    const off = ROWS - list.length;
    list.forEach((row, i) => { if (off + i >= 0) grid[off + i] = row; });
    return grid;
  };
  /* 해당 열에서 캐릭터가 설 땅의 y(타일 행) */
  PB.groundY = function (grid, col) {
    const c = Math.max(0, Math.min(COLS - 1, Math.floor(col)));
    for (let y = 0; y < ROWS; y++) if (!PASS.has(grid[y][c])) return y;
    return ROWS;
  };

  PB.drawMap = function (g, grid, t) {
    for (let y = 0; y < ROWS; y++) for (let x = 0; x < COLS; x++) {
      const ch = grid[y][x]; const def = TILES[ch]; if (!def) continue;
      const frame = def.frames ? Math.floor(t / 400 + x * 0.3) % def.frames : 0;
      const img = tileImg(ch, (x * 7 + y * 13) % 4, frame);
      g.drawImage(img, x * S, y * S);
    }
  };

  /* ---------- 하늘 ---------- */
  const SKIES = {
    day: ['#5b8def', '#6a99f1', '#7aa6f4', '#8bb3f6', '#9dc0f8', '#b0cdfa'],
    dawn: ['#34306e', '#5e3f8c', '#9a4f8f', '#d3647a', '#f08a5d', '#ffbf73'],
    dusk: ['#1d2250', '#3b2f6e', '#6d3a7a', '#a84a6c', '#d8664f', '#f09550'],
    night: ['#050818', '#081028', '#0c1636', '#111d45', '#162554', '#1c2c5e'],
    dark: ['#000000', '#010102', '#020204', '#030306', '#040408', '#05050a'],
    storm: ['#2c3038', '#363b45', '#414752', '#4c5360', '#58606d', '#646c7a'],
    glory: ['#fffbe8', '#fff3c4', '#ffe9a0', '#ffde7c', '#ffd35c', '#ffc640'],
    cave: ['#141417', '#18181c', '#1c1c21', '#202026', '#24242b', '#282830'],
    fire: ['#2a0a04', '#4a1206', '#6e1c08', '#94290b', '#bb3a0e', '#e05412']
  };
  PB.SKIES = SKIES;
  const DARK_SKY = new Set(['night', 'dark', 'cave', 'storm', 'fire']);
  PB.isDarkSky = s => DARK_SKY.has(s);

  const stars = (() => { const r = rng(7); return Array.from({ length: 60 }, () => [r() * W | 0, r() * H * 0.7 | 0, r()]); })();

  PB.drawSky = function (g, sky, t, opts) {
    const bands = SKIES[sky] || SKIES.day, bh = Math.ceil(H / bands.length);
    bands.forEach((c, i) => { g.fillStyle = c; g.fillRect(0, i * bh, W, bh); });
    if (sky === 'night' || opts.stars) {
      stars.forEach(([x, y, p]) => {
        const on = Math.sin(t / 500 + p * 20) > -0.3;
        g.fillStyle = on ? '#ffffff' : '#8890b0';
        g.fillRect(x, y, 1, 1);
        if (p > 0.85 && on) { g.fillRect(x - 1, y, 3, 1); g.fillRect(x, y - 1, 1, 3); }
      });
    }
    if (sky === 'glory') { // 위에서 내려오는 빛줄기
      g.fillStyle = 'rgba(255,255,255,0.35)';
      for (let i = 0; i < 7; i++) { const x = ((i * 41 + t / 60) % (W + 40)) - 20; g.fillRect(x | 0, 0, 6, H); }
    }
    const clouds = opts.clouds != null ? opts.clouds : (sky === 'day' || sky === 'dawn' || sky === 'storm');
    if (clouds) {
      const col = sky === 'storm' ? '#8a909b' : sky === 'dawn' ? '#ffd9c7' : '#ffffff';
      const r = rng(3);
      for (let i = 0; i < 5; i++) {
        const w = 24 + (r() * 30 | 0), y = 6 + (r() * 30 | 0), sp = 0.004 + r() * 0.004;
        const x = ((r() * W + t * sp) % (W + w)) - w;
        g.fillStyle = col; g.fillRect(x | 0, y, w, 6); g.fillRect((x + 6) | 0, y - 4, w - 14, 4);
      }
    }
  };

  /* ---------- 먼 배경 ---------- */
  const BG = {
    hills: { color: '#3f7f3a', dark: '#1f3a2a', h: (x) => 34 + Math.sin(x / 23) * 8 + Math.sin(x / 9) * 3 },
    mountains: { color: '#6b7a99', dark: '#262c44', cap: '#eef2ff', h: (x) => 70 + Math.abs(((x + 30) % 90) - 45) * -1.4 + Math.sin(x / 7) * 3 },
    desert: { color: '#d4b877', dark: '#5a4a35', h: (x) => 26 + Math.sin(x / 31) * 7 + Math.sin(x / 13) * 2 },
    city: { color: '#c7a978', dark: '#3d3548', city: true },
    sea: { color: '#2952b8', dark: '#122050', flat: 22 }
  };
  PB.drawBg = function (g, bg, sky, t) {
    const d = BG[bg]; if (!d) return;
    const col = DARK_SKY.has(sky) ? d.dark : d.color, base = H - 8 * 3;
    g.fillStyle = col;
    if (d.city) {
      const r = rng(11); let x = 0;
      while (x < W) {
        const w = 10 + (r() * 18 | 0), h = 18 + (r() * 36 | 0);
        g.fillStyle = col; g.fillRect(x, base - h, w, h + 30);
        if (r() < 0.4) g.fillRect(x + (w >> 2), base - h - 6, w >> 1, 6); // 탑
        g.fillStyle = DARK_SKY.has(sky) ? '#f2c14e' : 'rgba(0,0,0,0.25)';
        for (let wy = base - h + 4; wy < base - 2; wy += 7) for (let wx = x + 2; wx < x + w - 3; wx += 5) if (r() < 0.5) g.fillRect(wx, wy, 2, 3);
        x += w + (r() * 4 | 0);
      }
      return;
    }
    if (d.flat) { g.fillRect(0, base - d.flat, W, d.flat + 30); return; }
    for (let x = 0; x < W; x += 2) {
      const h = Math.max(4, d.h(x) | 0), top = base - h;
      g.fillStyle = col; g.fillRect(x, top, 2, h + 30);
      if (d.cap && h > 52) { g.fillStyle = DARK_SKY.has(sky) ? '#8a93b8' : d.cap; g.fillRect(x, top, 2, Math.min(6, h - 52)); }
    }
  };
})(window.PB);
