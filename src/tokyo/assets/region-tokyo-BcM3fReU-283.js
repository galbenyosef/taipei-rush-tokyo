// tokyo/assets/region-tokyo-BcM3fReU 283 — mode
// Lines 112047-113148 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var v5 = class {
  root;
  cv;
  g;
  statusEl;
  callEl;
  panelEl = null;
  tutEl = null;
  o;
  mt;
  rng;
  T;
  auto;
  mode = `wait`;
  wait = 0.6;
  time = 0;
  sel = 0;
  pending = null;
  tsel = 0;
  armed = null;
  hover = null;
  promptSel = 1;
  anim = new Map();
  hold = new Map();
  slots = [];
  calls = [];
  callT = 0;
  revealT = 0;
  dpr = 1;
  W = 0;
  H = 0;
  insets = { l: 0, r: 0, t: 0, b: 0 };
  lay = null;
  tutStep = -1;
  tutSeen = new Set();
  padPrev = { l: !1, r: !1, a: !1, b: !1 };
  listeners = [];
  stoppedWell = !1;
  done = !1;
  lastMouse = !1;
  constructor(e) {
    if (
      ((this.o = e),
      (this.auto = e.auto),
      (this.T = e.auto ? m5 : p5),
      (this.mt = B6(e.seed >>> 0, e.rounds)),
      (this.rng = new ne((e.seed ^ 1540483477) >>> 0)),
      !document.getElementById(`tk-koikoi-css`))
    ) {
      let e = document.createElement(`style`);
      ((e.id = `tk-koikoi-css`),
        (e.textContent = f5),
        document.head.appendChild(e));
    }
    ((this.root = document.createElement(`div`)),
      (this.root.id = `tk-koikoi`),
      (this.root.lang =
        e.lang === `ja` ? `ja` : e.lang === `zh` ? `zh-Hant` : `en`),
      (this.cv = document.createElement(`canvas`)),
      (this.g = Wi(this.cv, this.cv.getContext(`2d`))),
      (this.statusEl = document.createElement(`div`)),
      (this.statusEl.className = `kk-status`),
      (this.callEl = document.createElement(`div`)),
      (this.callEl.className = `kk-call`),
      (this.callEl.lang = `ja`),
      this.root.append(this.cv, this.statusEl, this.callEl),
      document.body.appendChild(this.root));
    let t = document.createElement(`div`);
    ((t.style.cssText = `position:fixed;visibility:hidden;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)`),
      this.root.appendChild(t));
    let n = getComputedStyle(t);
    ((this.insets = {
      t: parseFloat(n.paddingTop) || 0,
      r: parseFloat(n.paddingRight) || 0,
      b: parseFloat(n.paddingBottom) || 0,
      l: parseFloat(n.paddingLeft) || 0,
    }),
      t.remove(),
      this.resize());
    let r = (e, t, n) => {
      (window.addEventListener(e, t, n),
        this.listeners.push(() => window.removeEventListener(e, t, n)));
    };
    (r(`resize`, () => this.resize()),
      r(`keydown`, (e) => this.key(e), { capture: !0 }));
    let i = (e, t) => {
      (this.cv.addEventListener(e, t),
        this.listeners.push(() => this.cv.removeEventListener(e, t)));
    };
    (i(`pointerdown`, (e) => {
      (e.preventDefault(),
        (this.lastMouse = e.pointerType === `mouse`),
        this.tap(e.clientX, e.clientY));
    }),
      i(`pointermove`, (e) => {
        let t = this.hit(e.clientX, e.clientY);
        ((this.hover = t && t.where === `hand` ? t.id : null),
          (this.cv.style.cursor = t ? `pointer` : `default`));
      }),
      i(`pointerleave`, () => (this.hover = null)),
      e.tutorial && this.tutorial(0));
  }
  destroy() {
    for (let e of this.listeners.splice(0)) e();
    this.root.remove();
  }
  tx(e) {
    return this.o.t(e);
  }
  get r() {
    return this.mt.round;
  }
  style(e) {
    return e === 1 ? this.o.opponent.style : `expert`;
  }
  who(e) {
    return e === 0 ? `player` : `ai`;
  }
  sfx(e, t) {
    try {
      this.o.sfx?.(e, t);
    } catch {}
  }
  emit(e) {
    try {
      this.o.onEvent?.(e);
    } catch (e) {
      console.error(`[koikoi] onEvent threw`, e);
    }
  }
  call(e, t = ``) {
    this.calls.push({ main: e, sub: t, t: this.T.call });
  }
  playerTurn() {
    return this.r.turn === 0 && !this.auto;
  }
  update(e) {
    ((e = Math.min(0.1, Math.max(0, e))),
      (this.time += e),
      this.pollPad(),
      this.step(e),
      this.render(e));
  }
  step(e) {
    if (this.done) return;
    if (this.wait > 0) {
      this.wait -= e;
      return;
    }
    let t = this.r;
    switch (t.phase) {
      case `play`:
        if (t.turn === 1 || this.auto) {
          this.mode !== `wait` && (this.mode = `wait`);
          let e = n8(t, t.turn, this.style(t.turn), this.rng);
          this.doPlay(e.card, e.target);
        } else
          this.mode === `wait` &&
            ((this.mode = `select`),
            (this.sel = Math.min(this.sel, t.hands[0].length - 1)),
            this.o.tutorial && this.tutorial(0));
        break;
      case `flip`:
        (P6(t),
          (this.revealT = this.time),
          this.sfx(`ui_hover`, 0.7),
          (this.wait = this.T.reveal));
        break;
      case `drawn`: {
        let e = A6(t, t.drawn);
        if (e.length && this.playerTurn()) {
          this.mode !== `drawTarget` &&
            ((this.mode = `drawTarget`), (this.tsel = 0));
          break;
        }
        this.doResolve(e.length ? r8(t, t.turn, this.style(t.turn)) : void 0);
        break;
      }
      case `decide`:
        if (t.turn === 1 || this.auto) {
          let e = this.mt.scores[t.turn] - this.mt.scores[+(t.turn === 0)];
          this.doDecide(a8(t, t.turn, this.style(t.turn), e));
        } else this.mode !== `prompt` && this.showPrompt();
        break;
      case `over`:
        this.mode !== `summary` && this.mode !== `done` && this.showSummary();
    }
  }
  captureHold(e, t) {
    if (!e.length || !this.lay) return;
    let n = t === null ? null : this.anim.get(t);
    n &&
      e.forEach((e, r) => {
        e === t
          ? this.hold.set(e, { until: this.time + this.T.hold, rect: { ...n } })
          : this.hold.set(e, {
              until: this.time + this.T.hold,
              rect: {
                x: n.x + n.w * 0.18 * (r ? 1 : 0.6),
                y: n.y - n.h * 0.12,
                w: n.w,
                h: n.h,
              },
            });
      });
  }
  doPlay(e, t) {
    let n = this.r,
      r = n.turn,
      i = k6(n, e),
      a = i.length === 2 ? (t ?? i[0]) : (i[0] ?? null),
      o = N6(n, e, t);
    (this.captureHold(o.captured, a),
      this.sfx(`ui_click`, o.captured.length ? 0.85 : 1.1),
      (this.mode = `wait`),
      (this.pending = null),
      (this.armed = null),
      (this.wait = r === 1 ? this.T.play + this.T.ai * 0.4 : this.T.play),
      r === 0 && this.o.tutorial && this.tutorial(1));
  }
  doResolve(e) {
    let t = this.r,
      n = t.turn,
      r = t.drawn,
      i = k6(t, r),
      a = i.length === 2 ? (e ?? i[0]) : (i[0] ?? null),
      o = F6(t, e);
    if (
      (this.captureHold(o.captured, a),
      (this.mode = `wait`),
      o.captured.length && this.sfx(`ui_click`, 0.85),
      (this.wait = this.T.draw + (n === 0 ? this.T.ai : 0)),
      n === 0 && this.o.tutorial && t.moves >= 3 && this.tutorial(2),
      o.newYaku?.length)
    ) {
      for (let e of o.newYaku)
        this.emit({
          kind: `yaku`,
          who: this.who(n),
          yaku: e.id,
          points: e.points,
        });
      let e = o.newYaku.map((e) => g5(e.id)).join(`・`),
        t = o.newYaku
          .map((e) =>
            [_5(this.o.lang, e.id), this.tx(h5.points(e.points))]
              .filter(Boolean)
              .join(` `),
          )
          .join(` · `);
      (this.call(e, (n === 1 ? this.tx(this.o.opponent.name) + `：` : ``) + t),
        this.sfx(`ui_confirm`),
        (this.wait = this.T.yaku));
    }
  }
  doDecide(e) {
    let t = this.r,
      n = t.turn,
      r = R6(t, n).points;
    (n === 0 && !e && (this.stoppedWell = !0),
      I6(t, e),
      this.emit(
        e
          ? { kind: `koi`, who: this.who(n) }
          : { kind: `stop`, who: this.who(n), points: r },
      ),
      this.call(
        e ? `こいこい！` : `勝負！`,
        this.o.lang === `ja` ? `` : this.tx(e ? h5.koiCall : h5.stopCall),
      ),
      this.sfx(e ? `ui_confirm` : `coin`),
      this.closePanel(),
      (this.mode = `wait`),
      (this.wait = this.T.decide));
  }
  playCard(e, t = !1) {
    let n = this.r;
    if (
      this.done ||
      n.phase !== `play` ||
      !this.playerTurn() ||
      this.wait > 0 ||
      !n.hands[0].includes(e) ||
      (this.mode !== `select` && this.mode !== `target`)
    )
      return !1;
    let r = k6(n, e);
    return (
      (this.sel = n.hands[0].indexOf(e)),
      r.length === 2
        ? ((this.mode = `target`),
          (this.pending = e),
          (this.tsel = 0),
          this.sfx(`ui_hover`),
          !0)
        : r.length === 0 && t && this.armed !== e
          ? ((this.armed = e),
            (this.mode = `select`),
            (this.pending = null),
            this.sfx(`ui_hover`),
            !0)
          : (this.doPlay(e), !0)
    );
  }
  pickField(e) {
    let t = this.r;
    return this.mode === `target` &&
      this.pending !== null &&
      A6(t, this.pending).includes(e)
      ? (this.doPlay(this.pending, e), !0)
      : this.mode === `drawTarget` &&
          t.drawn !== null &&
          A6(t, t.drawn).includes(e)
        ? (this.doResolve(e), !0)
        : !1;
  }
  choose(e) {
    return this.mode !== `prompt` || this.r.phase !== `decide`
      ? !1
      : (this.doDecide(e), !0);
  }
  proceed() {
    return (
      this.mode === `summary` &&
      (this.closePanel(),
      V6(this.mt)
        ? ((this.mode = `wait`),
          (this.wait = 0.5),
          (this.slots = []),
          this.hold.clear(),
          !0)
        : ((this.mode = `done`), (this.done = !0), !0))
    );
  }
  cancel() {
    this.mode === `target`
      ? ((this.mode = `select`), (this.pending = null), this.sfx(`ui_back`))
      : this.armed !== null && ((this.armed = null), this.sfx(`ui_back`));
  }
  move(e) {
    if (this.mode === `select`) {
      let t = this.r.hands[0].length;
      if (!t) return;
      ((this.sel = (this.sel + e + t) % t),
        (this.armed = null),
        this.sfx(`ui_hover`));
    } else
      this.mode === `target` || this.mode === `drawTarget`
        ? ((this.tsel = (this.tsel + 1) % 2), this.sfx(`ui_hover`))
        : this.mode === `prompt` &&
          ((this.promptSel = +!this.promptSel), this.markPrompt());
  }
  confirm() {
    let e = this.r;
    if (this.mode === `select`) {
      let t = e.hands[0][this.sel];
      t !== void 0 && this.playCard(t);
    } else
      this.mode === `target` && this.pending !== null
        ? this.pickField(A6(e, this.pending)[this.tsel])
        : this.mode === `drawTarget` && e.drawn !== null
          ? this.pickField(A6(e, e.drawn)[this.tsel])
          : this.mode === `prompt`
            ? this.choose(this.promptSel === 0)
            : this.mode === `summary` && this.proceed();
  }
  key(e) {
    if (this.done) return;
    let t = e.code,
      n = !0;
    if (t === `ArrowLeft` || t === `KeyA`) this.move(-1);
    else if (t === `ArrowRight` || t === `KeyD`) this.move(1);
    else if (
      t === `Enter` ||
      t === `KeyE` ||
      t === `Space` ||
      t === `NumpadEnter`
    )
      this.confirm();
    else if (t === `Escape` || t === `Backspace`) this.cancel();
    else if (/^Digit[1-8]$/.test(t) && this.mode === `select`) {
      let e = this.r.hands[0][Number(t.slice(5)) - 1];
      e !== void 0 && this.playCard(e);
    } else n = !1;
    n && ((this.lastMouse = !1), e.preventDefault(), e.stopPropagation());
  }
  pollPad() {
    let e = navigator.getGamepads?.();
    if (!e) return;
    let t = { l: !1, r: !1, a: !1, b: !1 };
    for (let n of e)
      n &&
        ((t.l ||= !!n.buttons[14]?.pressed || (n.axes[0] ?? 0) < -0.6),
        (t.r ||= !!n.buttons[15]?.pressed || (n.axes[0] ?? 0) > 0.6),
        (t.a ||= !!n.buttons[0]?.pressed),
        (t.b ||= !!n.buttons[1]?.pressed));
    let n = this.padPrev;
    (t.l && !n.l && this.move(-1),
      t.r && !n.r && this.move(1),
      t.a && !n.a && this.confirm(),
      t.b && !n.b && this.cancel(),
      (this.padPrev = t));
  }
  tap(e, t) {
    let n = this.hit(e, t);
    if (this.mode === `select`)
      n?.where === `hand`
        ? this.playCard(n.id, !0)
        : this.armed !== null && this.inField(e, t)
          ? this.playCard(this.armed)
          : this.cancel();
    else if (this.mode === `target` || this.mode === `drawTarget`) {
      if (n?.where === `field` && this.pickField(n.id)) return;
      this.mode === `target` && n?.where === `hand`
        ? ((this.mode = `select`),
          (this.pending = null),
          this.playCard(n.id, !0))
        : this.mode === `target` && this.cancel();
    }
  }
  hit(e, t) {
    let n = this.r,
      r = n.hands[0];
    for (let n = r.length - 1; n >= 0; n--) {
      let i = this.anim.get(r[n]);
      if (i && e >= i.x && e <= i.x + i.w && t >= i.y && t <= i.y + i.h)
        return { where: `hand`, id: r[n] };
    }
    for (let r of n.field) {
      let n = this.anim.get(r);
      if (
        n &&
        e >= n.x - 3 &&
        e <= n.x + n.w + 3 &&
        t >= n.y - 3 &&
        t <= n.y + n.h + 3
      )
        return { where: `field`, id: r };
    }
    return null;
  }
  inField(e, t) {
    let n = this.lay?.field;
    return !!n && e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
  }
  closePanel() {
    (this.panelEl?.remove(), (this.panelEl = null));
  }
  showPrompt() {
    ((this.mode = `prompt`), (this.promptSel = 1));
    let e = this.r,
      t = R6(e, 0),
      n = document.createElement(`div`);
    n.className = `kk-panel`;
    let r = document.createElement(`h3`);
    ((r.textContent = this.tx(h5.yakuMade)),
      n.appendChild(r),
      n.appendChild(this.yakuLine(t.yaku)));
    let i = document.createElement(`div`);
    ((i.className = `kk-note`),
      (i.textContent =
        this.tx(h5.now(t.base)) +
        (t.koiDoubled ? ` · ${this.tx(h5.x2koi)}` : ``)),
      n.appendChild(i));
    let a = document.createElement(`div`);
    a.className = `kk-btns`;
    let o = (e, t, n, r) => {
      let i = document.createElement(`button`);
      ((i.type = `button`), (i.className = e), (i.lang = `ja`), i.append(t));
      let o = document.createElement(`small`);
      return (
        (o.lang = this.root.lang),
        (o.textContent = n),
        i.appendChild(o),
        i.addEventListener(`pointerdown`, (e) => {
          (e.preventDefault(),
            e.stopPropagation(),
            (this.lastMouse = e.pointerType === `mouse`),
            this.choose(r));
        }),
        i.addEventListener(`pointerenter`, () => {
          ((this.promptSel = +!r), this.markPrompt());
        }),
        a.appendChild(i),
        i
      );
    };
    (o(`koi`, `こいこい`, this.tx(h5.koiHint), !0),
      o(`stop`, `勝負`, this.tx(h5.stopHint(t.points)), !1),
      n.appendChild(a),
      this.root.appendChild(n),
      (this.panelEl = n),
      this.markPrompt(),
      this.o.tutorial && this.tutorial(3));
  }
  markPrompt() {
    this.panelEl
      ?.querySelectorAll(`button`)
      ?.forEach((e, t) => e.classList.toggle(`sel`, t === this.promptSel));
  }
  yakuLine(e) {
    let t = document.createElement(`div`);
    t.className = `kk-y`;
    for (let n of e) {
      let e = document.createElement(`span`),
        r = document.createElement(`b`);
      ((r.lang = `ja`), (r.textContent = g5(n.id)), e.appendChild(r));
      let i = _5(this.o.lang, n.id);
      if ((e.append(` `), i)) {
        let t = document.createElement(`small`);
        ((t.textContent = i + ` `), e.appendChild(t));
      }
      (e.append(this.tx(h5.points(n.points))), t.appendChild(e));
    }
    return t;
  }
  showSummary() {
    let e = this.r,
      t = e.result;
    this.mode = `summary`;
    let n = this.o.opponent.name,
      r = this.mt.history[this.mt.history.length - 1] === t,
      i = [...this.mt.scores];
    !r && t.winner !== null && (i[t.winner] += t.points);
    let a = this.mt.history.length + +!r,
      o =
        a >= this.mt.rounds &&
        (i[0] !== i[1] || a >= this.mt.rounds + this.mt.maxExtra);
    (this.emit({
      kind: `roundEnd`,
      who: this.who(t.winner ?? e.oya),
      points: t.points,
    }),
      this.tutEl?.remove(),
      (this.tutEl = null),
      t.winner === 0 && this.sfx(`coin`));
    let s = document.createElement(`div`);
    s.className = `kk-panel`;
    let c = document.createElement(`h3`);
    ((c.textContent = this.tx(
      t.winner === 0 ? h5.win : t.winner === 1 ? h5.lose(n) : h5.draw,
    )),
      s.appendChild(c),
      t.yaku.length && s.appendChild(this.yakuLine(t.yaku)),
      t.reason === `oyaken` &&
        s.appendChild(
          Object.assign(document.createElement(`div`), {
            className: `kk-note`,
            textContent: this.tx(h5.oyaken),
          }),
        ));
    let l = [];
    (t.doubled7 && l.push(this.tx(h5.x2at7)),
      t.koiDoubled && l.push(this.tx(h5.x2koi)));
    let u = document.createElement(`div`);
    ((u.className = `kk-y`),
      (u.textContent =
        (l.length ? l.join(` · `) + ` → ` : ``) + this.tx(h5.points(t.points))),
      t.winner !== null && s.appendChild(u));
    let d = document.createElement(`div`);
    if (
      ((d.className = `kk-note`),
      (d.textContent = this.tx(h5.score(i[0], i[1], n))),
      o)
    ) {
      let e = document.createElement(`h3`);
      ((e.style.marginTop = `8px`),
        (e.textContent = `${this.tx(h5.matchOver)} — ${this.tx(i[0] > i[1] ? h5.matchWin : i[0] < i[1] ? h5.matchLose : h5.matchTie)}`),
        s.appendChild(e));
    }
    s.appendChild(d);
    let f = document.createElement(`div`);
    f.className = `kk-btns`;
    let p = document.createElement(`button`);
    if (
      ((p.type = `button`),
      (p.className = `sel`),
      (p.style.fontSize = `18px`),
      (p.textContent = this.tx(o ? h5.finish : h5.next)),
      p.addEventListener(`pointerdown`, (e) => {
        (e.preventDefault(),
          e.stopPropagation(),
          (this.lastMouse = e.pointerType === `mouse`),
          this.proceed());
      }),
      f.appendChild(p),
      s.appendChild(f),
      this.root.appendChild(s),
      (this.panelEl = s),
      this.auto)
    ) {
      let e = this.time,
        t = () => {
          this.mode !== `summary` ||
            this.done ||
            (this.time - e >= 1.1 ? this.proceed() : requestAnimationFrame(t));
        };
      requestAnimationFrame(t);
    }
  }
  tutorial(e) {
    if (this.tutSeen.has(e) || e < this.tutStep) return;
    (this.tutSeen.add(e), (this.tutStep = e), this.tutEl?.remove());
    let t = document.createElement(`div`);
    t.className = `kk-tut`;
    let n = document.createElement(`span`);
    n.innerHTML = this.tx(h5.tut[e]);
    let r = document.createElement(`button`);
    ((r.type = `button`),
      (r.textContent = `×`),
      r.addEventListener(`pointerdown`, (e) => {
        (e.preventDefault(),
          e.stopPropagation(),
          t.remove(),
          this.tutEl === t && (this.tutEl = null));
      }),
      t.append(n, r),
      this.root.appendChild(t),
      (this.tutEl = t),
      this.placeDom());
  }
  resize() {
    ((this.W = window.innerWidth),
      (this.H = window.innerHeight),
      (this.dpr = Math.min(2, window.devicePixelRatio || 1)),
      (this.cv.width = Math.round(this.W * this.dpr)),
      (this.cv.height = Math.round(this.H * this.dpr)),
      (this.lay = null),
      this.placeDom());
  }
  layout() {
    let e = this.W,
      t = this.H,
      n = this.insets,
      r = Math.max(6, Math.min(16, Math.min(e, t) * 0.02)),
      i = e >= t * 1.15,
      a = n.l + r,
      o = n.t + r,
      s = e - n.r - r,
      c = t - n.b - r,
      l,
      u,
      d,
      f;
    if (i) {
      let e = Math.max(180, Math.min(360, (s - a) * 0.27)),
        t = { x: s - e, y: o, w: e, h: c - o };
      l = { x: a, y: o, w: t.x - r - a, h: c - o };
      let n = e < 260 ? 40 : Math.max(22, Math.min(30, t.h * 0.08)),
        i = (t.h - n) / 2;
      ((u = { x: t.x, y: t.y, w: e, h: i }),
        (d = { x: t.x, y: t.y + i + n, w: e, h: i }),
        (f = { x: t.x + e / 2, y: t.y + i + (e < 260 ? 2 : n / 2 - 12) }));
    } else {
      l = { x: a, y: o, w: s - a, h: c - o };
      let t = Math.min(120, l.h * 0.15);
      ((u = { x: a, y: 0, w: l.w, h: t }),
        (d = { x: a, y: 0, w: l.w, h: t }),
        (f = { x: e / 2, y: 0 }));
    }
    let p = r * 0.8,
      m = Math.min(l.h * (i ? 0.27 : 0.16), l.w / 8.6 / o8),
      h = Math.min(l.h * (i ? 0.15 : 0.08), m * 0.62),
      g = l.y,
      _ = l.y + l.h - m;
    i ||
      ((u.y = g + h + p),
      (d.y = _ - p - u.h),
      (f = { x: e / 2, y: u.y + u.h + 2 }));
    let v = i ? g + h + p * 1.6 : u.y + u.h + p + 26,
      y = i ? _ - p * 2.2 : d.y - p,
      b = { x: l.x, y: v, w: l.w, h: Math.max(40, y - v) },
      x = Math.max(12, this.slots.length),
      S = Math.ceil(x / 2),
      C = Math.min((b.h - p * 0.6) / 2, m * 0.92);
    ((e) => (S + 1.5) * (e * o8 + p * 0.6))(C) > b.w &&
      (C = (b.w / (S + 1.5) - p * 0.6) / o8);
    let w = C * o8,
      T = S * (w + p * 0.6) - p * 0.6,
      E = b.x + Math.max(0, (b.w - T - w * 1.5) / 2),
      D = E + w * 1.5,
      O = b.y + (b.h - (C * 2 + p * 0.6)) / 2,
      k = (e) => ({
        x: D + Math.floor(e / 2) * (w + p * 0.6),
        y: O + (e % 2) * (C + p * 0.6),
        w,
        h: C,
      }),
      A = { x: E, y: O + C * 0.5 + p * 0.3, w, h: C },
      j = { x: E + w * 0.3, y: A.y - C * 0.78, w, h: C };
    return {
      land: i,
      pad: r,
      gap: p,
      main: l,
      field: b,
      capAI: u,
      capMe: d,
      status: f,
      handH: m,
      handY: _,
      oppH: h,
      oppY: g,
      slotRect: k,
      pile: A,
      reveal: j,
      fH: C,
    };
  }
  placeDom() {
    let e = (this.lay = this.layout());
    if (
      ((this.statusEl.style.left = `${e.status.x}px`),
      (this.statusEl.style.top = `${e.status.y}px`),
      (this.statusEl.style.maxWidth = e.land
        ? `${e.capMe.w - 6}px`
        : `${this.W - 24}px`),
      this.tutEl)
    ) {
      this.tutEl.style.top = `${e.land ? e.oppY : e.field.y - 4}px`;
      let t = Math.min(640, e.main.w - 8);
      ((this.tutEl.style.width = `${t}px`),
        (this.tutEl.style.left = `${e.main.x + (e.main.w - t) / 2}px`));
    }
  }
  target(e, t, n, r) {
    let i = this.hold.get(e);
    i && (i.until > this.time ? (t = i.rect) : this.hold.delete(e));
    let a = this.anim.get(e);
    if (!a) return ((a = { ...t, face: n }), this.anim.set(e, a), a);
    let o = 1 - Math.exp(-r * (this.auto ? 22 : 13));
    return (
      (a.x += (t.x - a.x) * o),
      (a.y += (t.y - a.y) * o),
      (a.w += (t.w - a.w) * o),
      (a.h += (t.h - a.h) * o),
      (a.face = n),
      a
    );
  }
  moving(e, t) {
    return Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 4;
  }
  render(e) {
    let t = this.r,
      n = (this.lay = this.layout()),
      r = this.g,
      i = this.dpr;
    (r.setTransform(i, 0, 0, i, 0, 0),
      r.clearRect(0, 0, this.W, this.H),
      (r.fillStyle = `rgba(22,14,9,.93)`),
      r.fillRect(0, 0, this.W, this.H));
    let a = n.main,
      o = r.createRadialGradient(
        a.x + a.w / 2,
        a.y + a.h / 2,
        10,
        a.x + a.w / 2,
        a.y + a.h / 2,
        Math.max(a.w, a.h) * 0.7,
      );
    (o.addColorStop(0, `#2f5a3a`),
      o.addColorStop(1, `#173322`),
      (r.fillStyle = o),
      y5(r, a.x - n.pad * 0.5, a.y - n.pad * 0.5, a.w + n.pad, a.h + n.pad, 14),
      r.fill(),
      (r.strokeStyle = `rgba(255,214,120,.18)`),
      (r.lineWidth = 1),
      r.stroke());
    let s = new Set(t.field);
    for (let e = 0; e < this.slots.length; e++) {
      let t = this.slots[e];
      t !== null && !s.has(t) && (this.slots[e] = null);
    }
    for (let e of t.field) {
      if (this.slots.includes(e)) continue;
      let t = this.slots.findIndex((e, t) => e === null && t < 12),
        n = t >= 0 ? t : this.slots.findIndex((e) => e === null);
      n >= 0 ? (this.slots[n] = e) : this.slots.push(e);
    }
    for (
      ;
      this.slots.length > 12 && this.slots[this.slots.length - 1] === null;
    )
      this.slots.pop();
    this.slots.length > 12 && this.slots.length % 2 && this.slots.push(null);
    let c = [],
      l =
        this.pending ??
        this.armed ??
        (this.mode === `select`
          ? (this.hover ?? t.hands[0][this.sel] ?? null)
          : null),
      u = l !== null && t.hands[0].includes(l) ? new Set(k6(t, l)) : new Set(),
      d =
        this.mode === `target` && this.pending !== null
          ? A6(t, this.pending)
          : this.mode === `drawTarget` && t.drawn !== null
            ? A6(t, t.drawn)
            : [],
      f = t.deck.length;
    for (let e = Math.min(3, f) - 1; e >= 0; e--)
      r.drawImage(
        d5(-1, n.pile.h * i),
        n.pile.x - e * 1.5,
        n.pile.y - e * 1.5,
        n.pile.w,
        n.pile.h,
      );
    if (
      (f &&
        ((r.font = `700 ${Math.max(10, n.pile.h * 0.16)}px system-ui,sans-serif`),
        (r.fillStyle = `rgba(255,255,255,.7)`),
        (r.textAlign = `center`),
        r.fillText(
          String(f),
          n.pile.x + n.pile.w / 2,
          n.pile.y + n.pile.h * 0.88,
        )),
      this.slots.forEach((t, r) => {
        if (t === null) return;
        let i = n.slotRect(r),
          a = this.target(t, i, !0, e),
          o = d.includes(t)
            ? d[this.tsel] === t
              ? `#ffd24d`
              : `#ffe9a8`
            : u.has(t)
              ? `#ffd24d`
              : void 0;
        c.push({ id: t, a, z: this.moving(a, i) ? 3 : 0, glow: o, badge: !0 });
      }),
      t.drawn !== null)
    ) {
      this.anim.has(t.drawn) || this.anim.set(t.drawn, { ...n.pile, face: !1 });
      let r = this.target(
        t.drawn,
        n.reveal,
        this.time - this.revealT > 0.12,
        e,
      );
      c.push({
        id: t.drawn,
        a: r,
        z: 4,
        glow: this.mode === `drawTarget` ? `#ffd24d` : `#fff3c4`,
        badge: !0,
      });
    }
    let p = t.hands[0],
      m = n.handH * o8,
      h = Math.min(
        m * 0.12,
        (n.main.w - m * p.length) / Math.max(1, p.length - 1),
      ),
      g = p.length * m + (p.length - 1) * h,
      _ = n.main.x + (n.main.w - g) / 2;
    p.forEach((r, i) => {
      let a =
          (this.mode === `select` && (i === this.sel || r === this.hover)) ||
          r === this.pending ||
          r === this.armed,
        o = a ? n.handH * 0.12 : 0,
        s = { x: _ + i * (m + h), y: n.handY - o, w: m, h: n.handH },
        l = this.target(r, s, !0, e),
        u = this.playerTurn() && t.phase === `play` && k6(t, r).length > 0;
      c.push({
        id: r,
        a: l,
        z: this.moving(l, s) ? 3 : 1,
        glow: a ? `#ffd24d` : void 0,
        badge: !0,
        lift: +!!u,
      });
    });
    let v = t.hands[1],
      y = n.oppH * o8,
      b = -y * 0.35,
      x = v.length * y + (v.length - 1) * b,
      S = n.main.x + (n.main.w - x) / 2;
    (v.forEach((t, r) => {
      let i = { x: S + r * (y + b), y: n.oppY, w: y, h: n.oppH },
        a = this.target(t, i, !1, e);
      c.push({ id: t, a, z: 1 });
    }),
      this.capArea(0, n.capMe, n, e, c),
      this.capArea(1, n.capAI, n, e, c),
      c.sort((e, t) => e.z - t.z));
    for (let e of c) {
      let t = e.a;
      (e.glow &&
        (r.save(),
        (r.shadowColor = e.glow),
        (r.shadowBlur = 14),
        (r.fillStyle = e.glow),
        y5(r, t.x - 2.5, t.y - 2.5, t.w + 5, t.h + 5, Math.max(3, t.w * 0.09)),
        r.fill(),
        r.restore()),
        r.drawImage(d5(t.face ? e.id : -1, t.h * i), t.x, t.y, t.w, t.h),
        e.dim &&
          ((r.fillStyle = `rgba(0,0,0,.28)`),
          y5(r, t.x, t.y, t.w, t.h, Math.max(2, t.w * 0.07)),
          r.fill()),
        e.lift &&
          ((r.fillStyle = `#ffd24d`),
          y5(r, t.x + t.w * 0.3, t.y + t.h + 3, t.w * 0.4, 3, 1.5),
          r.fill()),
        e.badge && t.face && t.h >= 40 && this.badge(t, m6(e.id)));
    }
    if ((this.renderStatus(), this.renderCalls(e), this.anim.size > 60))
      for (let e of [...this.anim.keys()])
        c.some((t) => t.id === e) || this.anim.delete(e);
  }
  badge(e, t) {
    let n = this.g,
      r = Math.max(11, Math.min(17, e.h * 0.15));
    ((n.fillStyle = `rgba(16,10,6,.82)`),
      y5(n, e.x + 2, e.y + 2, r * (t >= 10 ? 1.25 : 0.95), r, r * 0.3),
      n.fill(),
      (n.fillStyle = `#ffe9b0`),
      (n.font = `800 ${r * 0.72}px system-ui,sans-serif`),
      (n.textAlign = `center`),
      (n.textBaseline = `middle`),
      n.fillText(
        String(t),
        e.x + 2 + (r * (t >= 10 ? 1.25 : 0.95)) / 2,
        e.y + 2 + r / 2 + 0.5,
      ),
      (n.textBaseline = `alphabetic`));
  }
  capArea(e, t, n, r, i) {
    let a = this.r,
      o = a.caps[e],
      s = [`hikari`, `tane`, `tan`, `kasu`],
      c = new Map(s.map((e) => [e, []]));
    for (let e of o) c.get(f6[e].kind).push(e);
    let l = this.g,
      u = e === 0 ? this.tx(h5.you) : this.tx(this.o.opponent.name),
      d = Math.max(18, Math.min(24, t.h * 0.13));
    ((l.fillStyle = `rgba(0,0,0,.35)`),
      y5(l, t.x, t.y, t.w, t.h, 10),
      l.fill(),
      (l.font = `800 ${d * 0.62}px "Hiragino Sans","PingFang TC","Noto Sans TC",system-ui,sans-serif`),
      (l.textAlign = `left`),
      (l.fillStyle = e === 0 ? `#ffe08a` : `#ffb4a0`));
    let f = this.mt.scores[e],
      p = `${u}  ${this.tx(h5.points(f))}${a.oya === e ? `  ·  ${this.tx(h5.oya)}` : ``}${a.koi[e] ? `  ·  こいこい×${a.koi[e]}` : ``}`;
    l.fillText(p, t.x + 8, t.y + d * 0.78, t.w - 16);
    let m = w6(o, a.caps[+(e === 0)], a.rules),
      h = m.filter((e) => e.points > 0),
      g = m
        .filter((e) => e.points === 0 && e.live && e.have > 0)
        .sort((e, t) => t.have / t.need - e.have / e.need)
        .slice(0, Math.max(0, 3 - h.length)),
      _ = Math.max(14, d * 0.8),
      v = t.x + 8,
      y = t.y + d + 2;
    l.font = `700 ${_ * 0.66}px ${Hi}`;
    for (let e of [...h, ...g]) {
      let n =
          e.points > 0
            ? `${h6[e.id].ja} ${e.points}`
            : `${h6[e.id].ja} ${e.have}/${e.need}`,
        r = l.measureText(n).width + 12;
      if (v + r > t.x + t.w - 6) break;
      ((l.fillStyle = e.points > 0 ? `#ffc83d` : `rgba(255,255,255,.14)`),
        y5(l, v, y, r, _, _ / 2),
        l.fill(),
        (l.fillStyle = e.points > 0 ? `#2a1a08` : `#fff`),
        l.fillText(n, v + 6, y + _ * 0.74),
        (v += r + 5));
    }
    let b = y + _ + 4,
      x = (t.y + t.h - b - 4) / 4,
      S = Math.max(14, x - 3),
      C = S * o8,
      w = Math.min(15, x * 0.42),
      T = Math.max(w * 2.1 + 12, Math.min(54, t.w * 0.17));
    s.forEach((e, n) => {
      let a = c.get(e),
        o = b + n * x;
      ((l.fillStyle = `rgba(255,255,255,.75)`),
        (l.font = `800 ${w}px ${Hi}`),
        (l.textAlign = `left`),
        l.fillText(l6[e].ja, t.x + 8, o + x * 0.45),
        (l.font = `600 ${Math.min(12, x * 0.32)}px system-ui,sans-serif`),
        (l.fillStyle = `rgba(255,255,255,.55)`),
        l.fillText(String(a.length), t.x + 8, o + x * 0.85));
      let s = t.w - T - 10,
        u = a.length > 1 ? Math.min(C * 0.62, (s - C) / (a.length - 1)) : 0;
      a.forEach((e, n) => {
        let a = { x: t.x + T + n * u, y: o + (x - S) / 2, w: C, h: S },
          s = this.target(e, a, !0, r);
        i.push({ id: e, a: s, z: this.moving(s, a) ? 3 : 0 });
      });
    });
  }
  statusText = ``;
  renderStatus() {
    let e = this.r,
      t = this.o.opponent.name,
      n = this.mt.history.length + 1,
      r = this.tx(
        n > this.mt.rounds
          ? h5.extra(n - this.mt.rounds)
          : h5.round(n, this.mt.rounds),
      ),
      i = ``;
    i =
      this.mode === `target`
        ? this.tx(h5.pickField)
        : this.mode === `drawTarget`
          ? this.tx(h5.pickDrawn)
          : this.armed === null
            ? this.mode === `prompt`
              ? this.tx(h5.choose)
              : e.phase === `over` || this.done
                ? ``
                : e.turn === 0
                  ? this.auto
                    ? this.tx(h5.you) + ` · auto`
                    : this.tx(h5.yourTurn)
                  : this.tx(h5.theirTurn(t))
            : this.tx(h5.layDown);
    let a = (this.lay?.capMe.w ?? 999) < 260,
      o = i ? (a && this.mt.rounds === 1 ? i : `${r} · ${i}`) : r;
    o !== this.statusText &&
      ((this.statusText = o), (this.statusEl.textContent = o));
  }
  renderCalls(e) {
    if (this.callT > 0) {
      ((this.callT -= e),
        this.callT <= 0 && this.callEl.classList.remove(`on`));
      return;
    }
    let t = this.calls.shift();
    if (!t) return;
    this.callEl.replaceChildren();
    let n = document.createElement(`b`);
    if (((n.textContent = t.main), this.callEl.appendChild(n), t.sub)) {
      let e = document.createElement(`i`);
      ((e.lang = this.root.lang),
        (e.textContent = t.sub),
        this.callEl.appendChild(e));
    }
    (this.callEl.classList.add(`on`), (this.callT = t.t));
  }
  snapshot() {
    let e = this.r;
    return {
      mode: this.mode,
      phase: e.phase,
      turn: e.turn,
      oya: e.oya,
      round:
        this.mt.history.length +
        (e.phase === `over` &&
        this.mt.history[this.mt.history.length - 1] === e.result
          ? 0
          : 1),
      rounds: this.mt.rounds,
      scores: [...this.mt.scores],
      hand: [...e.hands[0]],
      oppCount: e.hands[1].length,
      field: [...e.field],
      deck: e.deck.length,
      drawn: e.drawn,
      caps: [[...e.caps[0]], [...e.caps[1]]],
      yaku: [e.caps[0], e.caps[1]].map((t) =>
        R6(e, t === e.caps[0] ? 0 : 1).yaku.map((e) => e.id),
      ),
      choices:
        this.mode === `target` && this.pending !== null
          ? A6(e, this.pending)
          : this.mode === `drawTarget` && e.drawn !== null
            ? A6(e, e.drawn)
            : [],
      koi: [...e.koi],
      result: e.result,
      wait: Math.max(0, this.wait),
      auto: this.auto,
      done: this.done,
      stoppedWell: this.stoppedWell,
      months: e.hands[0].map((e) => c6[m6(e) - 1].ja),
    };
  }
  rects() {
    let e = [];
    for (let t of this.r.hands[0]) {
      let n = this.anim.get(t);
      n && e.push({ id: t, where: `hand`, x: n.x, y: n.y, w: n.w, h: n.h });
    }
    for (let t of this.r.field) {
      let n = this.anim.get(t);
      n && e.push({ id: t, where: `field`, x: n.x, y: n.y, w: n.w, h: n.h });
    }
    return e;
  }
  get finished() {
    return this.done || (H6(this.mt) && this.mode === `done`);
  }
};
