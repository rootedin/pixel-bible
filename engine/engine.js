/* 픽셀 성경 — 레슨 플레이어
 * PB.start(lesson) 한 줄로 레슨 화면 전체를 만듭니다. 레슨 데이터 형식은 CLAUDE.md 참고 */
window.PB = window.PB || {};
(function (PB) {
  const { W, H, S } = PB;
  const $ = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const store = { get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };

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
  function drawObjects(g, w, t, tags) {
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
      } else if (o.anim === 'bob') y -= Math.floor(t / 500 + i) % 2;
      else if (o.anim === 'float') y += Math.round(Math.sin(t / 400 + i) * 2);
      else if (o.anim === 'jump') y -= Math.max(0, Math.sin(t / 220 + i)) * 6 | 0;
      const dw = sp.w * sc, dh = sp.h * sc, dx = Math.round(x - dw / 2), dy = Math.round(y - dh);
      g.save();
      if (flip) { g.translate(dx + dw, dy); g.scale(-1, 1); g.drawImage(sp.frames[fi], 0, 0, dw, dh); }
      else g.drawImage(sp.frames[fi], dx, dy, dw, dh);
      g.restore();
      if (tags && o.label) tags.push({ label: o.label, x: (dx + dw / 2) / W * 100, y: (dy + (sp.head !== sp.frames[0] ? 2 * sc : 0)) / H * 100 });
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
  PB.drawWorld = function (g, w, t, age, tags) {
    PB.drawSky(g, w.sky, t, { clouds: w.clouds, stars: w.stars });
    PB.drawBg(g, w.bg, w.sky, t);
    PB.drawMap(g, w.grid, t);
    drawObjects(g, w, t, tags);
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
  function segHtml(ss, n) {
    let html = '', left = n;
    for (const s of ss) {
      if (left <= 0) break;
      const part = s.t.slice(0, left); left -= part.length;
      const e = esc(part).replace(/\n/g, '<br>');
      html += s.b ? `<b>${e}</b>` : e;
    }
    return html;
  }

  /* ---------- 앱 ---------- */
  PB.start = function (L) {
    dirtBackground();
    document.title = `${L.title} · 픽셀 성경`;
    const worlds = PB.buildWorlds(L.scenes);
    const steps = [];
    L.scenes.forEach((sc, si) => {
      const n0 = steps.length;
      const lines = sc.lines || (sc.text ? [{ who: sc.who, text: sc.text }] : []);
      lines.forEach(l => steps.push(typeof l === 'string' ? { si, kind: 'say', who: '', text: l } : Object.assign({ si, kind: 'say' }, l)));
      if (sc.verse) steps.push(Object.assign({ si, kind: 'verse' }, sc.verse));
      if (sc.quiz) steps.push(Object.assign({ si, kind: 'quiz' }, sc.quiz));
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
        <button class="pb-btn sm" data-a="snd"></button><button class="pb-btn sm" data-a="full">⛶ 전체화면</button>
      </div>
      <div class="pb-stage"><canvas width="${W}" height="${H}"></canvas><div class="pb-overlay"></div><div class="pb-tags pb-overlay"></div><div class="pb-fade"></div></div>
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

    const st = { mode: 'title', step: 0, si: 0, sceneT0: performance.now(), typing: null, shown: 0 };
    let world = worlds[0];
    let tagEls = [];

    /* 렌더 루프 */
    (function loop(now) {
      const tags = [];
      PB.drawWorld(g, world, now, now - st.sceneT0, tags);
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
      st.shown = 0; textEl.innerHTML = ''; moreEl.hidden = true;
      st.typing = setInterval(() => {
        st.shown += 1;
        textEl.innerHTML = segHtml(ss, st.shown);
        if (st.shown % 3 === 0) Snd.blip();
        if (st.shown >= total) finish();
      }, 26);
      function finish() { clearInterval(st.typing); st.typing = null; textEl.innerHTML = segHtml(ss, total); moreEl.hidden = false; if (done) done(); }
      st.finishTyping = finish;
    }

    function render() {
      const s = steps[st.step];
      setScene(s.si);
      dlg.classList.toggle('verse', s.kind === 'verse');
      extraEl.innerHTML = '';
      avatar.hidden = s.kind === 'verse';
      if (s.kind === 'say') { whoEl.textContent = s.who || ''; setAvatar(s); type(s.text); }
      else if (s.kind === 'verse') {
        whoEl.textContent = s.label || '오늘의 말씀';
        type(s.text, () => { extraEl.innerHTML = `<div class="pb-vref">— ${esc(s.ref || '')}</div>`; });
      } else if (s.kind === 'quiz') {
        clearInterval(st.typing); st.typing = null; setAvatar(s);
        whoEl.textContent = s.label || '퀴즈!'; textEl.innerHTML = segHtml(segs(s.q), 1e9); moreEl.hidden = true;
        const box = $('div', 'pb-quiz');
        s.options.forEach((opt, i) => {
          const b = $('button', 'pb-btn', `${'ABCD'[i] || i + 1}. ${esc(opt)}`);
          b.onclick = e => {
            e.stopPropagation();
            if (i === s.answer) {
              b.classList.add('ok'); Snd.ok(); box.querySelectorAll('button').forEach(x => (x.disabled = x !== b));
              if (s.explain) extraEl.insertAdjacentHTML('beforeend', `<div class="pb-text" style="margin-top:10px">${segHtml(segs('✔ ' + s.explain), 1e9)}</div>`);
              moreEl.hidden = false;
            } else { b.classList.remove('no'); void b.offsetWidth; b.classList.add('no'); Snd.no(); }
          };
          box.appendChild(b);
        });
        extraEl.appendChild(box);
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
        const prevSi = steps[st.step].si; st.step++;
        if (steps[st.step].si !== prevSi) Snd.level();
        render();
      } else end();
    }
    function prev() {
      if (st.mode === 'end') { st.mode = 'play'; overlay.querySelectorAll('.pb-titlescreen').forEach(e => e.remove()); render(); return; }
      if (st.mode !== 'play' || st.step === 0) return;
      Snd.click(); st.step--; render();
    }
    function begin(atScene) {
      overlay.querySelectorAll('.pb-titlescreen').forEach(e => e.remove());
      st.mode = 'play';
      st.step = atScene ? Math.max(0, steps.findIndex(s => s.si === atScene)) : 0;
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
    dlg.addEventListener('click', next);
    q('.pb-stage').addEventListener('click', () => { if (st.mode === 'play') next(); });
    q('[data-a="next"]').onclick = next;
    q('[data-a="prev"]').onclick = prev;
    sndBtn.onclick = () => { Snd.on = !Snd.on; store.set('pb-mute', Snd.on ? '0' : '1'); setSnd(); };
    const full = () => (document.fullscreenElement ? document.exitFullscreen() : app.requestFullscreen && app.requestFullscreen());
    q('[data-a="full"]').onclick = full;
    document.addEventListener('keydown', e => {
      if (e.target.closest && e.target.closest('input,textarea')) return;
      if (['ArrowRight', ' ', 'Enter', 'PageDown'].includes(e.key)) { e.preventDefault(); next(); }
      else if (['ArrowLeft', 'PageUp', 'Backspace'].includes(e.key)) { e.preventDefault(); prev(); }
      else if (e.key === 'f' || e.key === 'F') full();
    });

    showCaption(null);
    const m = /^#(\d+)$/.exec(location.hash); // 주소 뒤에 #5 → 5번째 장면부터 (1부터 셈)
    if (m) { setScene(Math.min(+m[1], L.scenes.length) - 1, true); begin(Math.min(+m[1], L.scenes.length) - 1); }
    else titleScreen();
  };
})(window.PB);
