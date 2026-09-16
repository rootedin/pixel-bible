/* 픽셀 성경 — 레슨 플레이어
 * PB.start(lesson) 한 줄로 레슨 화면 전체를 만듭니다. 레슨 데이터 형식은 CLAUDE.md 참고 */
window.PB = window.PB || {};
(function (PB) {
  const { W, H, S } = PB;
  const $ = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const shuffled = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const store = { get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };

  /* ---------- 파비콘 (파일 없이 SVG 를 직접 심는다 → dist 단일 파일에서도 보임) ---------- */
  if (typeof document.querySelector === 'function' && document.head && !document.querySelector('link[rel~="icon"]')) { // node(lint) 환경에서는 건너뜀
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">' +
      '<rect x="0" y="2" width="16" height="12" fill="#3b2414"/><rect x="1" y="3" width="6" height="10" fill="#f3e6c4"/>' +
      '<rect x="9" y="3" width="6" height="10" fill="#f3e6c4"/><rect x="7" y="2" width="2" height="12" fill="#6b3f1f"/>' +
      '<rect x="2" y="5" width="4" height="1" fill="#b08a5e"/><rect x="2" y="7" width="4" height="1" fill="#b08a5e"/>' +
      '<rect x="2" y="9" width="3" height="1" fill="#b08a5e"/><rect x="11" y="4" width="2" height="7" fill="#d9a520"/>' +
      '<rect x="10" y="6" width="4" height="2" fill="#d9a520"/><rect x="0" y="14" width="16" height="2" fill="#4f9530"/></svg>';
    const link = document.createElement('link');
    link.rel = 'icon'; link.type = 'image/svg+xml'; link.href = 'data:image/svg+xml,' + encodeURIComponent(svg);
    document.head.appendChild(link);
  }

  /* ---------- 업적 기록 (브라우저에 저장, 목록 화면의 '업적' 에서 모아 봄) ---------- */
  PB.getAchievements = () => { try { return JSON.parse(store.get('pb-ach') || '{}') || {}; } catch (e) { return {}; } };
  PB.addAchievement = week => { const got = PB.getAchievements(); if (!got[week]) { got[week] = Date.now(); store.set('pb-ach', JSON.stringify(got)); } };

  /* ---------- 8비트 효과음 ---------- */
  const Snd = {
    on: store.get('pb-mute') !== '1', ctx: null,
    tone(f, dur, type = 'square', vol = 0.05, when = 0) {
      if (!this.on) return;
      try {
        this.ctx = this.ctx || new (window.AudioContext || window.webkitAudioContext)();
        const c = this.ctx, o = c.createOscillator(), g = c.createGain(), t = c.currentTime + when;
        o.type = type; o.frequency.value = f;
        g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        o.connect(g).connect(c.destination); o.start(t); o.stop(t + dur);
      } catch (e) {}
    },
    blip() { this.tone(500 + Math.random() * 90, 0.03, 'square', 0.012); },
    click() { this.tone(660, 0.05, 'square', 0.035); },
    ok() { [523, 659, 784, 1047].forEach((f, i) => this.tone(f, 0.12, 'square', 0.045, i * 0.08)); },
    no() { this.tone(140, 0.25, 'sawtooth', 0.045); },
    level() { [392, 523, 659, 784, 1047].forEach((f, i) => this.tone(f, 0.1, 'triangle', 0.07, i * 0.06)); }
  };

  /* ---------- 월드 만들기 (keep: 이전 장면 이어받기) ---------- */
  const OBJ_KEYS = new Set(['s', 'x', 'y', 'anim', 'label', 'flip', 'scale', 'speed', 'range']);
  const normObj = o => (Array.isArray(o) ? Object.assign({ s: o[0], x: o[1] }, o[2] || {}) : Object.assign({}, o));
  function spriteFor(o) {
    const opts = {}; for (const k in o) if (!OBJ_KEYS.has(k)) opts[k] = o[k];
    return PB.getSprite(o.s, opts);
  }
  function buildWorld(sc, prev) {
    const base = sc.keep && prev ? prev : { sky: 'day', bg: 'none', map: [], objects: [] };
    const w = Object.assign({}, base);
    ['sky', 'bg', 'map', 'clouds', 'stars'].forEach(k => { if (sc[k] !== undefined) w[k] = sc[k]; });
    let objs = sc.objects ? sc.objects.map(normObj) : base.objects.slice();
    if (sc.remove) objs = objs.filter(o => !sc.remove.includes(o.s) && !sc.remove.includes(o.label));
    w.objects = objs.concat((sc.add || []).map(normObj));
    w.fx = sc.fx; w.grid = PB.parseMap(w.map);
    return w;
  }
  PB.buildWorlds = scenes => { let prev = null; return scenes.map(sc => (prev = buildWorld(sc, prev))); };

  /* ---------- 그리기 ---------- */
  function drawObjects(g, w, t, tags, hits) {
    w.objects.forEach((o, i) => {
      const sp = spriteFor(o); if (!sp) return;
      const sc = o.scale || 1, spd = o.speed || 1;
      let x = (o.x + 0.5) * S, y = (o.y != null ? o.y : PB.groundY(w.grid, o.x)) * S, flip = !!o.flip;
      const fi = sp.frames.length > 1 ? Math.floor(t / (o.anim === 'fly' ? 180 : 320)) % sp.frames.length : 0;
      if (o.anim === 'fly') {
        const span = W + 40; x = ((x + t * 0.02 * spd) % span + span) % span - 20; y += Math.sin(t / 300 + i) * 3;
      } else if (o.anim === 'walk' || o.anim === 'swim') {
        const per = (o.anim === 'walk' ? 1400 : 900) / spd, ph = t / per + i;
        x += Math.sin(ph) * (o.range || 2) * S; if (Math.cos(ph) < 0) flip = !flip;
        if (o.anim === 'walk') y -= Math.floor(t / 150) % 2;
      } else if (o.anim === 'step') y -= Math.floor(t / 150) % 2; // 직접 조종하는 인물: 좌우 흔들림 없이 발걸음만
      else if (o.anim === 'bob') y -= Math.floor(t / 500 + i) % 2;
      else if (o.anim === 'float') y += Math.round(Math.sin(t / 400 + i) * 2);
      else if (o.anim === 'jump') y -= Math.max(0, Math.sin(t / 220 + i)) * 6 | 0;
      const dw = sp.w * sc, dh = sp.h * sc, dx = Math.round(x - dw / 2), dy = Math.round(y - dh);
      g.save();
      if (flip) { g.translate(dx + dw, dy); g.scale(-1, 1); g.drawImage(sp.frames[fi], 0, 0, dw, dh); }
      else g.drawImage(sp.frames[fi], dx, dy, dw, dh);
      g.restore();
      if (tags && o.label) tags.push({ label: o.label, x: (dx + dw / 2) / W * 100, y: (dy + (sp.head !== sp.frames[0] ? 2 * sc : 0)) / H * 100 });
      if (hits) hits.push({ o, x: dx, y: dy, w: dw, h: dh });
    });
  }
  function pixelCircle(g, cx, cy, r, step = 2) {
    for (let dy = -r; dy <= r; dy += step) {
      const hw = Math.floor(Math.sqrt(Math.max(0, r * r - dy * dy)) / step) * step;
      g.fillRect(cx - hw, cy + dy, hw * 2, step);
    }
  }
  const drops = (() => { const r = PB.rng(5); return Array.from({ length: 90 }, () => [r(), r(), r()]); })();
  function drawFx(g, fx, t, age) {
    [].concat(fx || []).forEach(f => {
      if (f === 'light') {
        const a = Math.min(1, age / 1200);
        g.fillStyle = 'rgba(255,248,210,0.16)';
        for (let k = 4; k >= 0; k--) pixelCircle(g, W / 2, 26, Math.round((16 + k * 22) * a + Math.sin(t / 300) * 2));
        g.fillStyle = 'rgba(255,255,255,0.9)'; pixelCircle(g, W / 2, 26, Math.round(8 * a));
      } else if (f === 'rain' || f === 'snow') {
        const rain = f === 'rain';
        g.fillStyle = rain ? '#9ec0ff' : '#ffffff';
        drops.forEach(([a, b, c]) => {
          const x = ((a * W + t * (rain ? 0.03 : 0.008) * (0.5 + c)) % W) | 0;
          const y = ((b * H + t * (rain ? 0.25 : 0.03) * (0.6 + c)) % H) | 0;
          g.fillRect(x, y, 1, rain ? 4 : (c > 0.5 ? 2 : 1));
        });
      } else if (f === 'sparkle') {
        drops.slice(0, 30).forEach(([a, b, c], i) => {
          if (Math.sin(t / 250 + i * 1.7) < 0.4) return;
          const x = a * W | 0, y = b * H * 0.8 | 0;
          g.fillStyle = c > 0.5 ? '#fff6a0' : '#ffffff';
          g.fillRect(x - 1, y, 3, 1); g.fillRect(x, y - 1, 1, 3);
        });
      } else if (f === 'rainbow') {
        ['#e53b3b', '#f28a1e', '#ffd84a', '#4fb81a', '#2f8fe0', '#3b3fbe', '#8a3bbe'].forEach((c, i) => {
          g.fillStyle = c; const R = 110 - i * 4;
          for (let x = -R; x <= R; x += 2) g.fillRect(W / 2 + x, Math.round((H - 24 - Math.sqrt(R * R - x * x)) / 2) * 2, 2, 4);
        });
      } else if (f === 'flash' || f === 'lightning') {
        const k = f === 'flash' ? age : t % 4000;
        if (k < 400) { g.fillStyle = `rgba(255,255,255,${0.8 * (1 - k / 400)})`; g.fillRect(0, 0, W, H); }
      } else if (f === 'dark') {
        g.fillStyle = 'rgba(0,0,10,0.55)'; g.fillRect(0, 0, W, H);
      }
    });
  }
  PB.drawWorld = function (g, w, t, age, tags, hits) {
    PB.drawSky(g, w.sky, t, { clouds: w.clouds, stars: w.stars });
    PB.drawBg(g, w.bg, w.sky, t);
    PB.drawMap(g, w.grid, t);
    drawObjects(g, w, t, tags, hits);
    drawFx(g, w.fx, t, age);
  };
  /* 목록 페이지 썸네일용: 장면 하나를 정지화면으로 */
  PB.renderStill = function (canvas, scene) {
    canvas.width = W; canvas.height = H;
    PB.drawWorld(canvas.getContext('2d'), buildWorld(scene, null), 1000, 5000, null);
  };

  function dirtBackground() {
    const cv = document.createElement('canvas'); cv.width = cv.height = 32;
    const g = cv.getContext('2d'), r = PB.rng(9), f = PB.TILES.D.f;
    for (let y = 0; y < 32; y++) for (let x = 0; x < 32; x++) { g.fillStyle = f(x, y, r); g.fillRect(x, y, 1, 1); }
    g.fillStyle = 'rgba(0,0,0,0.62)'; g.fillRect(0, 0, 32, 32);
    document.body.style.backgroundImage = `url(${cv.toDataURL()})`;
  }

  /* ---------- 대사 텍스트: **강조** 지원 ---------- */
  const segs = text => String(text || '').split(/(\*\*[^*]+\*\*)/).filter(Boolean)
    .map(p => (p.startsWith('**') ? { t: p.slice(2, -2), b: true } : { t: p, b: false }));
  /* ghost: 아직 안 나온 글자를 보이지 않게 미리 깔아 둔다 → 타자 중에 줄 수·창 높이가 변하지 않음 */
  function segHtml(ss, n, ghost) {
    let html = '', left = n;
    const br = t => esc(t).replace(/\n/g, '<br>');
    for (const s of ss) {
      if (left <= 0 && !ghost) break;
      const part = s.t.slice(0, Math.max(0, left)), rest = ghost ? s.t.slice(part.length) : '';
      left -= part.length;
      const e = br(part) + (rest ? `<span class="pb-ghost">${br(rest)}</span>` : '');
      html += s.b ? `<b>${e}</b>` : e;
    }
    return html;
  }

  /* ---------- 교안 · 활동지 (인쇄용): 레슨.html?guide · 레슨.html?sheet ----------
   * 교안 = 교사용. 장면 그림·대사·말씀·정답·해설·교사 메모(notes)를 한 장에.
   * 활동지 = 학생용. 퀴즈(정답 없음)·빈칸·생각해 보기·나눔·암송 말씀. */
  const richText = t => segs(t).map(p => (p.b ? `<b>${esc(p.t)}</b>` : esc(p.t))).join('');
  const lineOf = l => (typeof l === 'string' ? { text: l } : l || { text: '' });
  function renderGuide(L, mode) {
    const guide = mode === 'guide';
    document.title = `${L.title} · ${guide ? '교안' : '활동지'} · 픽셀 성경`;
    document.body.classList.add('pb-print');
    const worlds = PB.buildWorlds(L.scenes);
    const self = esc(location.pathname.split('/').pop() || '');
    const quote = v => `<blockquote>${esc(v.text)}<cite>${esc(v.ref || '')}</cite></blockquote>`;
    const notes = x => [].concat(x || []).map(n => `<div class="note">교사 메모 · ${richText(n)}</div>`).join('');
    const out = [`<div class="pb-doc-tools"><a class="pb-btn sm" href="${self}">◀ 레슨으로</a>
      <a class="pb-btn sm${guide ? ' on' : ''}" href="?guide">교안 (교사용)</a><a class="pb-btn sm${guide ? '' : ' on'}" href="?sheet">활동지 (학생용)</a>
      <button class="pb-btn sm" type="button" data-print>인쇄</button></div>`,
      `<header><div class="k">${L.week ? L.week + '강 · ' : ''}${esc(L.ref || '')}</div><h1>${esc(L.title)}</h1>` +
      (guide ? (L.intro ? `<p class="intro">${esc(L.intro)}</p>` : '') : '<div class="name">이름 ____________________</div>') + '</header>'];
    if (guide) {
      out.push(notes(L.notes));
      if (L.memory) out.push(`<section class="mem"><h2>암송 말씀</h2>${quote(L.memory)}</section>`);
      L.scenes.forEach((sc, i) => {
        const h = [`<h3><span>${i + 1}</span> ${esc(sc.caption || '')}</h3>`];
        (sc.lines || []).map(lineOf).forEach(o => h.push(`<p>${o.who ? `<em>${esc(o.who)}</em> ` : ''}${richText(o.text)}</p>`));
        if (sc.walk) h.push(`<div class="act">걷기 · ${richText(sc.walk.q || '')}</div>`);
        if (sc.find) h.push(`<div class="act">찾기 · ${richText(sc.find.q)}<div class="ans">정답: ${esc([].concat(sc.find.target).join(', '))}${sc.find.explain ? ' — ' + richText(sc.find.explain) : ''}</div></div>`);
        if (sc.choose) h.push(`<div class="act">선택 · ${richText(sc.choose.q)}<ul>${(sc.choose.options || []).map(o => `<li>${esc(o.text)}${o.goto ? ` <small>→ ${o.goto}번 장면</small>` : ''}</li>`).join('')}</ul></div>`);
        if (sc.verse) h.push(quote(sc.verse));
        if (sc.quiz) h.push(`<div class="act">퀴즈 · ${richText(sc.quiz.q)}<ol type="A">${sc.quiz.options.map((o, k) => (k === sc.quiz.answer ? `<li class="ok">${esc(o)} ✔</li>` : `<li>${esc(o)}</li>`)).join('')}</ol>${sc.quiz.explain ? `<div class="ans">${richText(sc.quiz.explain)}</div>` : ''}</div>`);
        if (sc.blank) { let k = 0; h.push(`<div class="act">빈칸 · ${esc(sc.blank.text).replace(/___/g, () => `<u>${esc(sc.blank.answers[k++] || '')}</u>`)}<cite>${esc(sc.blank.ref || '')}</cite></div>`); }
        h.push(notes(sc.notes));
        out.push(`<section class="scene"><canvas width="${W}" height="${H}"></canvas><div>${h.join('')}</div></section>`);
      });
    } else {
      const pick = k => L.scenes.filter(sc => sc[k]).map(sc => sc[k]);
      const share = [];
      L.scenes.forEach(sc => { if (sc.caption === '나눔') (sc.lines || []).map(lineOf).forEach(o => share.push(o.text.replace(/^생각해 보기:\s*/, ''))); });
      const write = '<div class="lines"></div>';
      let n = 0;
      const sec = (title, body) => { if (body) out.push(`<section><h2>${++n}. ${title}</h2>${body}</section>`); };
      sec('본문 확인', pick('quiz').map((q, i) => `<div class="q"><p>${i + 1}) ${richText(q.q)}</p><ol type="A">${q.options.map(o => `<li>${esc(o)}</li>`).join('')}</ol></div>`).join(''));
      sec('말씀 빈칸 채우기', pick('blank').map(b => `<div class="q"><p>${esc(b.text).replace(/___/g, '<span class="slot"></span>')}</p><cite>${esc(b.ref || '')}</cite><div class="bank">${shuffled((b.answers || []).concat(b.extra || [])).map(w => `<span>${esc(w)}</span>`).join('')}</div></div>`).join(''));
      sec('생각해 보기', pick('choose').map(c => `<div class="q"><p>${richText(c.q)}</p>${write}</div>`).join(''));
      sec('나눔', share.map(t => `<div class="q"><p>${richText(t)}</p>${write}</div>`).join(''));
      if (L.memory) sec('암송 말씀', quote(L.memory) + write);
    }
    const doc = $('div', 'pb-doc', out.join(''));
    (document.getElementById('app') || document.body).appendChild(doc);
    doc.querySelector('[data-print]').onclick = () => window.print();
    doc.querySelectorAll('.scene canvas').forEach((c, i) => PB.drawWorld(c.getContext('2d'), worlds[i], 1000, 5000, null));
  }

  /* ---------- 앱 ---------- */
  PB.start = function (L) {
    const docMode = (/[?&](guide|sheet)\b/.exec(location.search) || [])[1];
    if (docMode) return renderGuide(L, docMode);
    dirtBackground();
    document.title = `${L.title} · 픽셀 성경`;
    const worlds = PB.buildWorlds(L.scenes);
    const steps = [];
    L.scenes.forEach((sc, si) => {
      const n0 = steps.length;
      const lines = sc.lines || (sc.text ? [{ who: sc.who, text: sc.text }] : []);
      lines.forEach(l => steps.push(typeof l === 'string' ? { si, kind: 'say', who: '', text: l } : Object.assign({ si, kind: 'say' }, l)));
      if (sc.walk) steps.push(Object.assign({ si, kind: 'walk' }, sc.walk));
      if (sc.find) steps.push(Object.assign({ si, kind: 'find' }, sc.find));
      if (sc.choose) steps.push(Object.assign({ si, kind: 'choose' }, sc.choose));
      if (sc.verse) steps.push(Object.assign({ si, kind: 'verse' }, sc.verse));
      if (sc.quiz) steps.push(Object.assign({ si, kind: 'quiz' }, sc.quiz));
      if (sc.blank) steps.push(Object.assign({ si, kind: 'blank' }, sc.blank));
      if (steps.length === n0) steps.push({ si, kind: 'say', who: '', text: '' });
    });

    const wk = String(L.week || '').padStart(2, '0');
    const app = $('div', 'pb-app');
    app.innerHTML = `
      <div class="pb-top">
        ${L.week ? `<span class="pb-week">WEEK ${wk}</span>` : ''}
        <span class="pb-title-text">${esc(L.title)}</span><span class="pb-ref">${esc(L.ref || '')}</span>
        <span class="pb-spacer"></span>
        ${L.home !== false ? `<a class="pb-btn sm" href="${esc(L.home || '../index.html')}" style="text-decoration:none">☰ 목록</a>` : ''}
        <a class="pb-btn sm" href="?guide" style="text-decoration:none" title="교사용 교안 · 학생 활동지 (인쇄용)">▤ 교안</a>
        <button class="pb-btn sm" data-a="snd"></button><button class="pb-btn sm" data-a="full">⛶ 전체화면</button>
      </div>
      <div class="pb-stage"><canvas width="${W}" height="${H}"></canvas><div class="pb-overlay"></div><div class="pb-tags pb-overlay"></div><div class="pb-fade"></div>
        <div class="pb-dpad" hidden><button class="pb-btn" data-w="left">◀</button><button class="pb-btn" data-w="right">▶</button></div></div>
      <div class="pb-dialog"><div class="pb-avatar"><canvas width="6" height="6"></canvas></div><div class="pb-say"><div class="pb-who"></div><div class="pb-text"></div><div class="pb-extra"></div></div><div class="pb-more">▼</div></div>
      <div class="pb-bottom"><button class="pb-btn" data-a="prev">◀ 이전</button>
        <div class="pb-xpwrap"><div class="pb-level">0</div><div class="pb-xp"><div class="pb-xpfill" style="width:0"></div></div></div>
        <button class="pb-btn" data-a="next">다음 ▶</button></div>`;
    (document.getElementById('app') || document.body).appendChild(app);
    const q = s => app.querySelector(s);
    const cv = q('.pb-stage canvas'), g = cv.getContext('2d');
    const overlay = q('.pb-overlay'), tagLayer = q('.pb-tags'), fade = q('.pb-fade');
    const dlg = q('.pb-dialog'), avatar = q('.pb-avatar'), avCv = q('.pb-avatar canvas');
    const whoEl = q('.pb-who'), textEl = q('.pb-text'), extraEl = q('.pb-extra'), moreEl = q('.pb-more');
    const sndBtn = q('[data-a="snd"]');
    const setSnd = () => { sndBtn.textContent = Snd.on ? '♪ 소리 켬' : '♪ 소리 끔'; };
    setSnd();

    const dpad = q('.pb-dpad');
    /* 이동 키 판별: ← → 와 A/D.
       A/D 는 e.code 로 판별해야 한글 입력 상태에서도 동작한다. */
    const moveKey = e =>
      (e.key === 'ArrowLeft' || e.code === 'KeyA') ? 'left' :
      (e.key === 'ArrowRight' || e.code === 'KeyD') ? 'right' : null;
    const st = { mode: 'title', step: 0, hist: [], si: 0, sceneT0: performance.now(), typing: null, shown: 0,
      find: null, blank: null, walk: null, quiz: null, choose: null, miss: null, hits: [], keys: { left: false, right: false } };
    let world = worlds[0];
    let tagEls = [];

    /* 렌더 루프 */
    function walkTick(now) {
      const wk = st.walk; if (!wk) return;
      const dt = Math.min(60, now - (wk.last || now)); wk.last = now;
      if (!wk.done) {
        const dir = (st.keys.right ? 1 : 0) - (st.keys.left ? 1 : 0);
        if (dir) {
          wk.o.x = Math.max(0, Math.min(PB.COLS - 1, wk.o.x + dir * dt / 1000 * (wk.speed || 5)));
          wk.o.flip = dir < 0; wk.o.anim = 'step';
          if (Math.abs(wk.o.x - wk.goal) <= (wk.tol == null ? 1 : wk.tol)) wk.finish();
        } else wk.o.anim = null;
      }
    }
    /* 목표 지점 표시 (노란 화살표) */
    function drawGoal(gc, gx, t) {
      const gy = PB.groundY(world.grid, gx);
      const x = Math.round((gx + 0.5) * S);
      const y = Math.max(2, gy * S - 28) + Math.round(Math.sin(t / 300) * 2);
      gc.fillStyle = '#ffff55';
      gc.fillRect(x - 4, y, 9, 2); gc.fillRect(x - 3, y + 2, 7, 2);
      gc.fillRect(x - 2, y + 4, 5, 2); gc.fillRect(x - 1, y + 6, 3, 2);
    }
    /* 오답 클릭 위치에 X 표시 */
    function drawMiss(gc, m, t) {
      const age = t - m.t0; if (age > 600) { st.miss = null; return; }
      gc.fillStyle = '#ff5555';
      for (let i = -4; i <= 4; i++) { gc.fillRect(m.x + i, m.y + i, 2, 2); gc.fillRect(m.x + i, m.y - i, 2, 2); }
    }
    (function loop(now) {
      const tags = [];
      st.hits = [];
      walkTick(now);
      PB.drawWorld(g, world, now, now - st.sceneT0, tags, st.hits);
      if (st.walk && !st.walk.done) drawGoal(g, st.walk.goal, now);
      if (st.miss) drawMiss(g, st.miss, now);
      tagLayer.hidden = st.mode !== 'play'; // 타이틀/엔딩 화면에선 이름표 숨김
      if (tagEls.length !== tags.length) {
        tagLayer.innerHTML = ''; tagEls = tags.map(() => tagLayer.appendChild($('div', 'pb-tag')));
      }
      tags.forEach((tg, i) => { const e = tagEls[i]; if (e.textContent !== tg.label) e.textContent = tg.label; e.style.left = tg.x + '%'; e.style.top = tg.y + '%'; });
      requestAnimationFrame(loop);
    })(performance.now());

    function setScene(si, instant) {
      if (si === st.si && !instant) return;
      const go = () => { st.si = si; world = worlds[si]; st.sceneT0 = performance.now(); showCaption(L.scenes[si].caption); };
      if (instant) { go(); return; }
      fade.classList.add('on');
      setTimeout(() => { go(); fade.classList.remove('on'); }, 260);
    }
    function showCaption(text) {
      overlay.querySelectorAll('.pb-caption').forEach(e => e.remove());
      if (text) overlay.appendChild($('div', 'pb-caption', esc(text)));
    }
    function setAvatar(step) {
      const sc = worlds[step.si];
      let sp = null;
      if (step.face) sp = PB.getSprite(step.face);
      else if (step.who) { const o = sc.objects.find(o => o.label === step.who); if (o) sp = spriteFor(o); }
      if (!sp) sp = PB.getSprite(step.kind === 'quiz' ? 'star' : 'scroll');
      const src = sp.head;
      avCv.width = src.width; avCv.height = src.height;
      const ag = avCv.getContext('2d'); ag.clearRect(0, 0, src.width, src.height); ag.drawImage(src, 0, 0);
    }
    function type(text, done) {
      clearInterval(st.typing);
      const ss = segs(text), total = ss.reduce((n, s) => n + s.t.length, 0);
      st.shown = 0; textEl.innerHTML = segHtml(ss, 0, true); moreEl.hidden = true;
      st.typing = setInterval(() => {
        st.shown += 1;
        textEl.innerHTML = segHtml(ss, st.shown, true);
        if (st.shown % 3 === 0) Snd.blip();
        if (st.shown >= total) finish();
      }, 26);
      function finish() { clearInterval(st.typing); st.typing = null; textEl.innerHTML = segHtml(ss, total); moreEl.hidden = false; if (done) done(); }
      st.finishTyping = finish;
    }

    /* 장면/단계가 바뀔 때 진행 중이던 상호작용을 되돌린다 */
    function clearInteractive() {
      if (st.walk) {
        const arr = worlds[st.walk.si].objects, i = arr.indexOf(st.walk.o);
        if (i >= 0) arr.splice(i, 1);
        st.walk = null;
      }
      st.find = null; st.blank = null; st.quiz = null; st.choose = null; st.miss = null;
      st.keys.left = st.keys.right = false;
      q('.pb-stage').classList.remove('finding');
      dpad.hidden = true;
    }

    function render() {
      const s = steps[st.step];
      clearInteractive();
      setScene(s.si);
      const paper = s.kind === 'verse' || s.kind === 'blank';
      dlg.classList.toggle('verse', paper);
      extraEl.innerHTML = '';
      avatar.hidden = paper;
      if (s.kind === 'say') { whoEl.textContent = s.who || ''; setAvatar(s); type(s.text); }
      else if (s.kind === 'verse') {
        whoEl.textContent = s.label || '오늘의 말씀';
        type(s.text, () => { extraEl.innerHTML = `<div class="pb-vref">— ${esc(s.ref || '')}</div>`; });
      } else if (s.kind === 'quiz') {
        clearInterval(st.typing); st.typing = null; setAvatar(s);
        whoEl.textContent = s.label || '퀴즈!'; textEl.innerHTML = segHtml(segs(s.q), 1e9); moreEl.hidden = true;
        const box = $('div', 'pb-quiz');
        /* 보기 순서를 매번 섞는다 — 정답 위치를 외워서 맞히지 못하게.
           "위의 모두" 처럼 순서에 기대는 보기가 있으면 quiz.shuffle: false */
        const order = s.shuffle === false ? s.options.map((_, i) => i) : shuffled(s.options.map((_, i) => i));
        order.forEach((i, k) => {
          const opt = s.options[i];
          const b = $('button', 'pb-btn', `${'ABCD'[k] || k + 1}. ${esc(opt)}`);
          b.onclick = e => {
            e.stopPropagation();
            if (i === s.answer) {
              b.classList.add('ok'); Snd.ok(); box.querySelectorAll('button').forEach(x => (x.disabled = x !== b));
              if (st.quiz) st.quiz.done = true;
              if (s.explain) extraEl.insertAdjacentHTML('beforeend', `<div class="pb-text" style="margin-top:10px">${segHtml(segs('✔ ' + s.explain), 1e9)}</div>`);
              moreEl.hidden = false;
            } else { b.classList.remove('no'); void b.offsetWidth; b.classList.add('no'); Snd.no(); }
          };
          box.appendChild(b);
        });
        extraEl.appendChild(box);
        st.quiz = { done: false };
      } else if (s.kind === 'find') {
        clearInterval(st.typing); st.typing = null; setAvatar(s);
        whoEl.textContent = s.label || '찾아보십시오';
        textEl.innerHTML = segHtml(segs(s.q), 1e9); moreEl.hidden = true;
        st.find = { targets: [].concat(s.target), misses: 0, done: false, step: s };
        q('.pb-stage').classList.add('finding');
        extraEl.innerHTML = '<div class="pb-hint">화면에서 직접 클릭하십시오.</div>';
      } else if (s.kind === 'choose') {
        clearInterval(st.typing); st.typing = null; setAvatar(s);
        whoEl.textContent = s.label || '선택하십시오';
        textEl.innerHTML = segHtml(segs(s.q), 1e9); moreEl.hidden = true;
        const cbox = $('div', 'pb-quiz');
        (s.shuffle === false ? (s.options || []) : shuffled(s.options || [])).forEach(opt => {
          const b = $('button', 'pb-btn', esc(opt.text));
          b.onclick = e => {
            e.stopPropagation(); Snd.click(); b.classList.add('ok');
            if (st.choose) st.choose.done = true;
            cbox.querySelectorAll('button').forEach(x => (x.disabled = true));
            const to = Math.max(1, Math.min(L.scenes.length, opt.goto || s.si + 2)) - 1;
            const idx = steps.findIndex(x => x.si === to);
            setTimeout(() => { if (idx >= 0) { st.hist.push(st.step); st.step = idx; render(); } else next(); }, 420);
          };
          cbox.appendChild(b);
        });
        extraEl.appendChild(cbox);
        st.choose = { done: false };
      } else if (s.kind === 'blank') {
        clearInterval(st.typing); st.typing = null;
        whoEl.textContent = s.label || '빈칸을 채우십시오'; moreEl.hidden = true;
        const answers = (s.answers || []).slice();
        st.blank = { answers: answers, filled: 0 };
        const parts = String(s.text || '').split('___');
        textEl.innerHTML = parts.map((p, i) =>
          esc(p) + (i < parts.length - 1 ? '<span class="pb-slot" data-i="' + i + '">____</span>' : '')).join('');
        const chips = $('div', 'pb-chips');
        answers.concat(s.extra || []).map(w => [Math.random(), w]).sort((a, b) => a[0] - b[0])
          .forEach(pair => {
            const word = pair[1], b = $('button', 'pb-chip', esc(word));
            b.onclick = e => {
              e.stopPropagation();
              const bl = st.blank; if (!bl) return;
              if (word === bl.answers[bl.filled]) {
                const slot = textEl.querySelector('.pb-slot[data-i="' + bl.filled + '"]');
                if (slot) { slot.textContent = word; slot.classList.add('on'); }
                bl.filled++; b.disabled = true; Snd.click();
                if (bl.filled >= bl.answers.length) {
                  Snd.ok(); moreEl.hidden = false;
                  extraEl.insertAdjacentHTML('beforeend', '<div class="pb-vref">— ' + esc(s.ref || '') + '</div>');
                }
              } else { b.classList.remove('no'); void b.offsetWidth; b.classList.add('no'); Snd.no(); }
            };
            chips.appendChild(b);
          });
        extraEl.appendChild(chips);
      } else if (s.kind === 'walk') {
        clearInterval(st.typing); st.typing = null; setAvatar(s);
        whoEl.textContent = s.label || '직접 이동하십시오'; moreEl.hidden = true;
        const o = { s: s.player || 'boy', x: s.from == null ? 2 : s.from, label: s.name };
        ['skin', 'hair', 'shirt', 'pants', 'sash', 'beard', 'long', 'robe', 'hood', 'crown', 'halo', 'wings', 'staff', 'scale', 'pal', 'preset']
          .forEach(k => { if (s[k] !== undefined) o[k] = s[k]; });
        worlds[s.si].objects.push(o);
        st.walk = {
          o: o, si: s.si, goal: s.goal, tol: s.tol, speed: s.speed,
          done: false, last: performance.now(),
          finish: function () {
            this.done = true; this.o.anim = null; dpad.hidden = true; Snd.ok(); moreEl.hidden = false;
            extraEl.innerHTML = '';
            if (s.say) type(s.say); else textEl.innerHTML = segHtml(segs('목표 지점에 도착했습니다.'), 1e9);
          }
        };
        dpad.hidden = false;
        textEl.innerHTML = segHtml(segs(s.q || '방향키(또는 A·D), 화면의 ◀ ▶ 버튼으로 이동하십시오.'), 1e9);
      }
      const pct = (st.step + 1) / steps.length * 100;
      q('.pb-xpfill').style.width = pct + '%';
      q('.pb-level').textContent = s.si + 1;
    }

    function next() {
      if (st.mode === 'title') return begin();
      if (st.mode === 'end') return;
      if (st.typing) return st.finishTyping();
      Snd.click();
      if (st.step < steps.length - 1) {
        const prevSi = steps[st.step].si; st.hist.push(st.step); st.step++;
        if (steps[st.step].si !== prevSi) Snd.level();
        render();
      } else end();
    }
    function prev() {
      if (st.mode === 'end') { st.mode = 'play'; overlay.querySelectorAll('.pb-titlescreen').forEach(e => e.remove()); render(); return; }
      if (st.mode !== 'play' || (st.step === 0 && !st.hist.length)) return;
      /* 선택 분기로 건너뛴 장면이 끼어들지 않도록, 번호가 아니라 지나온 경로를 되짚는다 */
      Snd.click(); st.step = st.hist.length ? st.hist.pop() : st.step - 1; render();
    }
    function begin(atScene) {
      overlay.querySelectorAll('.pb-titlescreen').forEach(e => e.remove());
      st.mode = 'play'; st.hist = [];
      st.step = atScene ? Math.max(0, steps.findIndex(s => s.si === atScene)) : 0;
      showCaption(L.scenes[steps[st.step].si].caption);
      Snd.level(); render();
    }
    function titleScreen() {
      st.mode = 'title';
      const ts = $('div', 'pb-titlescreen');
      ts.innerHTML = `<div class="pb-logo">${esc(L.title)}</div><div class="pb-sub">${esc(L.ref || '')}</div>
        ${L.splash ? `<div class="pb-splash">${esc(L.splash)}</div>` : ''}<button class="pb-btn" style="font-size:20px;padding:12px 40px">▶ 시작하기</button>`;
      ts.querySelector('button').onclick = e => { e.stopPropagation(); begin(); };
      overlay.appendChild(ts);
      dlg.classList.remove('verse'); avatar.hidden = false; setAvatar({ si: 0, face: 'scroll' });
      whoEl.textContent = L.week ? `WEEK ${wk}` : ''; textEl.innerHTML = segHtml(segs(L.intro || '시작하기를 눌러 주세요!'), 1e9);
      extraEl.innerHTML = ''; moreEl.hidden = true;
    }
    function end() {
      st.mode = 'end'; Snd.level(); showCaption(null);
      const a = L.achievement || { title: '말씀 탐험 완료!' };
      if (L.week) PB.addAchievement(L.week);
      const ts = $('div', 'pb-titlescreen');
      ts.innerHTML = `<div class="pb-sub" style="color:var(--mc-yellow)">업적 달성!</div><div class="pb-logo" style="font-size:clamp(26px,5vw,64px)">${esc(a.title)}</div>
        <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center"><button class="pb-btn" data-e="again">↺ 처음부터</button>${L.home !== false ? `<a class="pb-btn" style="text-decoration:none" href="${esc(L.home || '../index.html')}">☰ 목록으로</a>` : ''}</div>`;
      ts.querySelector('[data-e="again"]').onclick = e => { e.stopPropagation(); begin(); };
      overlay.appendChild(ts);
      const mv = L.memory;
      if (mv) {
        dlg.classList.add('verse'); avatar.hidden = true; whoEl.textContent = '이번 주 암송 말씀'; extraEl.innerHTML = '';
        type(mv.text, () => { extraEl.innerHTML = `<div class="pb-vref">— ${esc(mv.ref || '')}</div>`; });
      }
      const toast = $('div', 'pb-toast');
      const icon = PB.getSprite(a.icon || 'heart').frames[0], ic = document.createElement('canvas');
      ic.width = icon.width; ic.height = icon.height; ic.getContext('2d').drawImage(icon, 0, 0);
      toast.appendChild(ic);
      toast.appendChild($('div', '', `<div class="t1">업적 달성!</div><div class="t2">${esc(a.title)}</div>`));
      document.body.appendChild(toast); setTimeout(() => toast.remove(), 4800);
    }

    /* 입력 */
    /* 상호작용이 끝나지 않았으면 클릭으로 건너뛰지 않는다 (다음 ▶ 버튼은 항상 동작) */
    function interactionPending() {
      return (st.find && !st.find.done) || (st.walk && !st.walk.done) ||
        (st.blank && st.blank.filled < st.blank.answers.length) ||
        (st.quiz && !st.quiz.done) || (st.choose && !st.choose.done);
    }
    function stageClick(e) {
      const fd = st.find; if (!fd || fd.done) return;
      const r = cv.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width * W, py = (e.clientY - r.top) / r.height * H;
      const hit = st.hits.slice().reverse().find(h => px >= h.x && px <= h.x + h.w && py >= h.y && py <= h.y + h.h);
      if (hit && fd.targets.some(t => t === hit.o.s || t === hit.o.label)) {
        fd.done = true; Snd.ok(); moreEl.hidden = false;
        extraEl.innerHTML = '<div class="pb-text" style="margin-top:10px">' +
          segHtml(segs('✔ ' + (fd.step.explain || '맞았습니다.')), 1e9) + '</div>';
      } else {
        fd.misses++; Snd.no(); st.miss = { x: px | 0, y: py | 0, t0: performance.now() };
        if (fd.misses >= 2 && fd.step.hint) extraEl.innerHTML = '<div class="pb-hint">힌트: ' + esc(fd.step.hint) + '</div>';
      }
    }
    dlg.addEventListener('click', () => { if (!interactionPending()) next(); });
    q('.pb-stage').addEventListener('click', e => {
      if (st.mode !== 'play') return;
      if (st.find && !st.find.done) return stageClick(e);
      if (interactionPending()) return;
      next();
    });
    dpad.querySelectorAll('[data-w]').forEach(b => {
      const k = b.dataset.w;
      const on = e => { e.preventDefault(); e.stopPropagation(); st.keys[k] = true; };
      const off = e => { e.stopPropagation(); st.keys[k] = false; };
      b.addEventListener('pointerdown', on);
      ['pointerup', 'pointerleave', 'pointercancel'].forEach(ev => b.addEventListener(ev, off));
      b.addEventListener('click', e => e.stopPropagation());
    });
    q('[data-a="next"]').onclick = next;
    q('[data-a="prev"]').onclick = prev;
    sndBtn.onclick = () => { Snd.on = !Snd.on; store.set('pb-mute', Snd.on ? '0' : '1'); setSnd(); };
    const full = () => (document.fullscreenElement ? document.exitFullscreen() : app.requestFullscreen && app.requestFullscreen());
    q('[data-a="full"]').onclick = full;
    /* 전체화면에서는 대화창·버튼 높이를 뺀 나머지에 무대를 맞춘다 → 글씨가 화면 아래로 밀려 잘리지 않음 */
    const stageEl = q('.pb-stage'), topEl = q('.pb-top'), bottomEl = q('.pb-bottom');
    function fit() {
      if (document.fullscreenElement !== app) { stageEl.style.width = ''; return; }
      const cs = getComputedStyle(app), gap = parseFloat(cs.rowGap) || 0;
      const padX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
      const padY = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
      const used = topEl.offsetHeight + dlg.offsetHeight + bottomEl.offsetHeight + gap * 3 + padY + 6;
      const w = Math.min(app.clientWidth - padX, (app.clientHeight - used) * 16 / 9);
      stageEl.style.width = Math.max(200, Math.floor(w)) + 'px';
    }
    document.addEventListener('fullscreenchange', fit);
    window.addEventListener('resize', fit);
    if (window.ResizeObserver) new ResizeObserver(fit).observe(dlg);
    document.addEventListener('keydown', e => {
      if (e.target.closest && e.target.closest('input,textarea')) return;
      const mv = moveKey(e);
      /* 걷기 단계에서는 좌우 키가 '이동' 전용이다.
         도착한 뒤에도 장면을 넘기지 않는다 — 계속 누르고 있다가 장면이 줄줄이
         넘어가 버리는 일을 막는다. 넘어갈 때는 Space·Enter·PageDown·'다음 ▶'. */
      if (st.walk && mv) {
        e.preventDefault();
        if (!st.walk.done) st.keys[mv] = true;
        return;
      }
      /* 키를 누르고 있을 때 자동 반복으로 장면이 연달아 넘어가지 않게 한다 */
      if (e.repeat) return;
      if (['ArrowRight', ' ', 'Enter', 'PageDown'].includes(e.key)) {
        e.preventDefault();
        /* 풀지 않은 상호작용(걷기·찾기·빈칸·퀴즈·선택)은 Space·Enter·→ 로 건너뛰지 않는다.
           막혔을 때 교사는 프레젠터 PageDown 또는 '다음 ▶' 버튼으로 넘긴다. */
        if (e.key !== 'PageDown' && st.mode === 'play' && !st.typing && interactionPending()) { Snd.no(); return; }
        next();
      }
      else if (['ArrowLeft', 'PageUp', 'Backspace'].includes(e.key)) { e.preventDefault(); prev(); }
      else if (e.key === 'f' || e.key === 'F') full();
    });
    document.addEventListener('keyup', e => {
      const mv = moveKey(e);
      if (mv) st.keys[mv] = false;
    });

    showCaption(null);
    const m = /^#(\d+)$/.exec(location.hash); // 주소 뒤에 #5 → 5번째 장면부터 (1부터 셈)
    if (m) { setScene(Math.min(+m[1], L.scenes.length) - 1, true); begin(Math.min(+m[1], L.scenes.length) - 1); }
    else titleScreen();
  };
})(window.PB);
