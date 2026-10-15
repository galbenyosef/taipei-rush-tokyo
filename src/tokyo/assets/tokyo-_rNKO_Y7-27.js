// tokyo/assets/tokyo-_rNKO_Y7 27 — addeventlistener
// Lines 10680-11435 of readable/tokyo/assets/tokyo-_rNKO_Y7.pretty.js (statement-aligned).
var Ja = `<svg viewBox="0 0 200 220" aria-hidden="true">
  <defs><linearGradient id="jg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#e0262f"/></linearGradient></defs>
  <circle cx="100" cy="92" r="70" fill="#e0262f" opacity=".14"/>
  <path d="M38 220c4-44 26-66 62-66s58 22 62 66z" fill="#101218" stroke="url(#jg)" stroke-width="3"/>
  <path d="M70 160l30 26 30-26" fill="none" stroke="#fff" stroke-width="3" opacity=".7"/>
  <path d="M88 150h24v16a12 12 0 0 1-24 0z" fill="#101218" stroke="url(#jg)" stroke-width="3"/>
  <ellipse cx="100" cy="110" rx="30" ry="36" fill="#101218" stroke="url(#jg)" stroke-width="3"/>
  <path d="M66 96c0-24 16-38 34-38s34 12 36 32c-10-4-24-6-36-6-12 0-24 4-34 12z" fill="#262a36" stroke="url(#jg)" stroke-width="3"/>
  <path d="M120 90c14 0 30 2 42 8l-4 6c-12-4-26-6-40-6z" fill="#262a36" stroke="url(#jg)" stroke-width="3"/>
</svg>`,
  Ya = `<svg viewBox="0 0 200 220" aria-hidden="true">
  <defs><linearGradient id="wg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffd27a"/><stop offset="1" stop-color="#e0262f"/></linearGradient></defs>
  <circle cx="100" cy="92" r="70" fill="#ffb13d" opacity=".14"/>
  <path d="M42 220c4-42 26-62 58-62s54 20 58 62z" fill="#101218" stroke="url(#wg)" stroke-width="3"/>
  <path d="M76 162c8 10 16 14 24 14s16-4 24-14" fill="none" stroke="#ffd27a" stroke-width="3" opacity=".8"/>
  <path d="M90 148h20v16a10 10 0 0 1-20 0z" fill="#101218" stroke="url(#wg)" stroke-width="3"/>
  <path d="M128 86c20 6 30 22 26 44-3 16-12 26-22 30 6-14 8-30 4-44z" fill="#2a2028" stroke="url(#wg)" stroke-width="3"/>
  <ellipse cx="100" cy="110" rx="28" ry="35" fill="#101218" stroke="url(#wg)" stroke-width="3"/>
  <path d="M70 110c-4-30 10-50 32-50 20 0 34 14 32 38-10-12-26-18-42-16-10 2-18 12-22 28z" fill="#2a2028" stroke="url(#wg)" stroke-width="3"/>
</svg>`,
  Xa = 0.35,
  Za = 3,
  Qa = 1.35,
  $a = class {
    kit;
    el;
    stickZone;
    lookZone;
    base;
    knob;
    stickId = -1;
    sx = 0;
    sy = 0;
    lookId = -1;
    lx = 0;
    ly = 0;
    radius = 60;
    foot;
    drive;
    mode = ``;
    buttons = [];
    visible = !1;
    hint;
    armed = !1;
    canEnter = !1;
    canInteract = !1;
    canSwap = !1;
    shownWeapon = ``;
    weaponBtn;
    weaponHud = null;
    enterLinger = 0;
    lastT = 0;
    onPause;
    onMap;
    onPhone;
    constructor(e) {
      this.kit = e;
      let t = e.touchLayer;
      ((this.el = V(`div`, `tc`, t)),
        (this.lookZone = V(`div`, `tc-look`, this.el)),
        (this.stickZone = V(`div`, `tc-stick`, this.el)),
        (this.base = V(`div`, `tc-base`, this.stickZone)),
        (this.knob = V(`div`, `tc-knob`, this.base)),
        (this.foot = V(`div`, `tc-cluster tc-foot`, this.el)),
        (this.drive = V(`div`, `tc-cluster tc-drive`, this.el)));
      let n = V(`div`, `tc-top`, this.el);
      (this.btn(this.foot, `attack`, `attack`, `b-attack big`),
        this.btn(this.foot, `jump`, `jump`, `b-jump`),
        this.btn(this.foot, `aim`, `aim`, `b-aim`),
        this.btn(this.foot, `sprint`, `sprint`, `b-sprint`),
        this.btn(this.foot, `enter`, `enter`, `b-enter`),
        this.btn(this.foot, `interact`, `interact`, `b-interact`),
        this.btn(this.foot, `reload`, `reload`, `b-reload small`),
        (this.weaponBtn = this.btn(
          this.foot,
          `weaponNext`,
          `fists`,
          `b-weapon`,
        ).el),
        this.btn(this.foot, `camera`, `camera`, `b-cam small`),
        this.pedal(this.drive, `gas`, `b-gas`),
        this.pedal(this.drive, `brake`, `b-brake`),
        this.btn(this.drive, `handbrake`, `handbrake`, `b-hb`),
        (this.btn(this.drive, `enter`, `exit`, `b-exit`).holdWhenMoving = !0),
        this.btn(this.drive, `horn`, `horn`, `b-horn`),
        this.btn(this.drive, `radio`, `radio`, `b-radio small`),
        this.btn(this.drive, `camera`, `camera`, `b-cam small`),
        this.btn(this.drive, `interact`, `interact`, `b-interact`),
        this.topBtn(n, `pause`, () => this.onPause?.()),
        this.topBtn(n, `map`, () => this.onMap?.()),
        this.topBtn(n, `phone`, () => this.onPhone?.()),
        (this.hint = V(`div`, `tc-rotate`, e.menuLayer)));
      let r = V(`div`, `tc-rotate-card`, this.hint);
      ((V(`div`, `tc-rotate-ic`, r).innerHTML =
        `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><g class="rp"><rect x="21" y="8" width="22" height="40" rx="4"/><path d="M29 43h6"/></g><path class="ra" d="M50 20a22 22 0 0 1 4 16M54 36l3-5M54 36l-5-2"/></svg>`),
        e.dual(V(`div`, ``, r), {
          zh: `請將手機橫放`,
          en: `Rotate to landscape`,
        }),
        this.hint.addEventListener(`pointerdown`, () =>
          this.hint.classList.add(`dismissed`),
        ));
      let i = !1,
        a = 0,
        o = () => {
          (clearTimeout(a),
            (a = window.setTimeout(
              () => this.hint.classList.add(`dismissed`),
              8e3,
            )));
        };
      e.ctx.events.once(`game:ready`, () => {
        ((i = !0), o());
      });
      let s = w();
      (g(() => {
        let e = w();
        (e && !s && (this.hint.classList.remove(`dismissed`), i && o()),
          (s = e));
      }),
        this.stickZone.addEventListener(`pointerdown`, (e) =>
          this.stickDown(e),
        ),
        this.stickZone.addEventListener(`pointermove`, (e) =>
          this.stickMove(e),
        ),
        this.stickZone.addEventListener(`pointerup`, (e) => this.stickUp(e)),
        this.stickZone.addEventListener(`pointercancel`, (e) =>
          this.stickUp(e),
        ),
        this.stickZone.addEventListener(`lostpointercapture`, (e) =>
          this.stickUp(e),
        ),
        this.lookZone.addEventListener(`pointerdown`, (e) => {
          this.weaponHudTap(e) ||
            (this.lookId === -1 &&
              ((this.lookId = e.pointerId),
              (this.kit.ctx.input.virtual.lookHeld = !0),
              (this.lx = e.clientX),
              (this.ly = e.clientY),
              rt(this.lookZone, e.pointerId),
              e.preventDefault()));
        }),
        this.lookZone.addEventListener(`pointermove`, (e) => {
          if (e.pointerId !== this.lookId) return;
          let t = this.kit.ctx.input.virtual;
          ((t.lookDX += (e.clientX - this.lx) * Qa),
            (t.lookDY += (e.clientY - this.ly) * Qa),
            (this.lx = e.clientX),
            (this.ly = e.clientY));
        }));
      let c = (e) => {
        e.pointerId === this.lookId &&
          ((this.lookId = -1), (this.kit.ctx.input.virtual.lookHeld = !1));
      };
      (this.lookZone.addEventListener(`pointerup`, c),
        this.lookZone.addEventListener(`pointercancel`, c),
        this.lookZone.addEventListener(`lostpointercapture`, c));
      let l = (e) => e.preventDefault();
      (this.el.addEventListener(`touchstart`, l, { passive: !1 }),
        this.el.addEventListener(`touchmove`, l, { passive: !1 }),
        document.addEventListener(`gesturestart`, l, { passive: !1 }),
        document.addEventListener(`dblclick`, l, { passive: !1 }),
        window.addEventListener(`blur`, () => this.releaseAll()),
        (this.weaponHud = e.hudLayer.querySelector(`.tr-weapon`)),
        g(() => this.stickId === -1 && this.idle()),
        this.setVisible(!1));
    }
    btn(e, t, n, r) {
      let i = V(`div`, `tc-btn ${r}`, e);
      i.innerHTML = B[n];
      let a = V(`span`, `tc-lbl`, i);
      this.kit.bind(a, Pn[t]);
      let o = { el: i, action: t, pointer: -1 };
      ((i.dataset.act = t),
        this.buttons.push(o),
        i.addEventListener(`pointerdown`, (e) => {
          if ((e.preventDefault(), e.stopPropagation(), o.pointer === -1)) {
            if (
              ((o.pointer = e.pointerId),
              rt(i, e.pointerId),
              i.classList.add(`down`),
              o.holdWhenMoving && this.vehicleSpeed() > Za)
            ) {
              (i.classList.add(`holding`),
                (o.holdTimer = window.setTimeout(() => {
                  if (
                    ((o.holdTimer = void 0),
                    i.classList.remove(`holding`),
                    o.pointer === -1)
                  )
                    return;
                  let e = this.kit.ctx.input.virtual;
                  (e.buttons.add(t),
                    setTimeout(() => {
                      (o.pointer === -1 || o.holdWhenMoving) &&
                        e.buttons.delete(t);
                    }, 120));
                }, Xa * 1e3)));
              return;
            }
            this.kit.ctx.input.virtual.buttons.add(t);
            try {
              this.kit.ctx.input.rumble(0.2, 20);
            } catch {}
          }
        }));
      let s = (e) => {
        e.pointerId === o.pointer &&
          ((o.pointer = -1),
          i.classList.remove(`down`, `holding`),
          o.holdTimer !== void 0 &&
            (clearTimeout(o.holdTimer), (o.holdTimer = void 0)),
          this.kit.ctx.input.virtual.buttons.delete(t));
      };
      return (
        i.addEventListener(`pointerup`, s),
        i.addEventListener(`pointercancel`, s),
        i.addEventListener(`lostpointercapture`, s),
        o
      );
    }
    weaponHudTap(e) {
      let t = this.weaponHud;
      if (!t || this.mode !== `foot`) return !1;
      let n = t.getBoundingClientRect();
      if (!n.width || !n.height) return !1;
      let r = Math.max(4, (44 - n.height) / 2);
      if (
        e.clientX < n.left - 4 ||
        e.clientX > n.right + 4 ||
        e.clientY < n.top - r ||
        e.clientY > n.bottom + r
      )
        return !1;
      (e.preventDefault(),
        e.stopPropagation(),
        this.kit.ctx.input.virtual.tap(`weaponNext`));
      try {
        this.kit.ctx.input.rumble(0.2, 20);
      } catch {}
      return !0;
    }
    vehicleSpeed() {
      try {
        return Math.abs(this.kit.ctx.vehicles.playerVehicle?.speed ?? 0);
      } catch {
        return 0;
      }
    }
    hlKey = ``;
    hlActs = [];
    highlight(e) {
      let t = e.join(`,`);
      if (t !== this.hlKey) {
        ((this.hlKey = t), (this.hlActs = e));
        for (let t of this.buttons)
          t.el.classList.toggle(`hl`, !!t.action && e.includes(t.action));
      }
    }
    pedal(e, t, n) {
      let r = V(`div`, `tc-btn tc-pedal ${n}`, e);
      r.innerHTML = B[t];
      let i = V(`span`, `tc-lbl`, r);
      this.kit.bind(
        i,
        t === `gas` ? { zh: `油門`, en: `Gas` } : { zh: `煞車`, en: `Brake` },
      );
      let a = { el: r, pointer: -1 };
      this.buttons.push(a);
      let o = (e) => {
          let n = this.kit.ctx.input.virtual;
          t === `gas` ? (n.throttle = e) : (n.brake = e);
        },
        s = (e) => {
          let t = r.getBoundingClientRect();
          return Math.max(
            0.55,
            Math.min(1, 0.55 + ((e.clientY - t.top) / t.height) * 0.6),
          );
        };
      (r.addEventListener(`pointerdown`, (e) => {
        (e.preventDefault(),
          e.stopPropagation(),
          a.pointer === -1 &&
            ((a.pointer = e.pointerId),
            rt(r, e.pointerId),
            r.classList.add(`down`),
            o(s(e))));
      }),
        r.addEventListener(`pointermove`, (e) => {
          e.pointerId === a.pointer && o(s(e));
        }));
      let c = (e) => {
        e.pointerId === a.pointer &&
          ((a.pointer = -1), r.classList.remove(`down`), o(0));
      };
      (r.addEventListener(`pointerup`, c),
        r.addEventListener(`pointercancel`, c),
        r.addEventListener(`lostpointercapture`, c));
    }
    topBtn(e, t, n) {
      let r = V(`button`, `tc-topbtn tc-${t}`, e);
      ((r.type = `button`),
        (r.innerHTML = B[t]),
        r.addEventListener(`pointerdown`, (e) => {
          (e.preventDefault(),
            e.stopPropagation(),
            this.kit.sfx(`ui_click`),
            n());
        }));
    }
    stickDown(e) {
      if (this.stickId !== -1) return;
      (e.preventDefault(),
        (this.stickId = e.pointerId),
        rt(this.stickZone, e.pointerId));
      let t = this.stickZone.getBoundingClientRect();
      ((this.radius = Math.max(
        40,
        Math.min(70, (this.base.offsetWidth || 110) * 0.5),
      )),
        (this.sx = Math.max(
          t.left + this.radius,
          Math.min(t.right - this.radius, e.clientX),
        )),
        (this.sy = Math.max(
          t.top + this.radius,
          Math.min(t.bottom - this.radius, e.clientY),
        )),
        (this.base.style.transform = `translate3d(${this.sx - t.left}px,${this.sy - t.top}px,0)`),
        this.base.classList.add(`active`),
        this.stickMove(e));
    }
    stickMove(e) {
      if (e.pointerId !== this.stickId) return;
      let t = e.clientX - this.sx,
        n = e.clientY - this.sy,
        r = Math.hypot(t, n),
        i = this.radius,
        a = r > i * 1.35;
      (r > i && ((t *= i / r), (n *= i / r)),
        (this.knob.style.transform = `translate3d(${t}px,${n}px,0)`));
      let o = t / i,
        s = -n / i;
      Math.hypot(o, s) < 0.12 && (o = s = 0);
      let c = this.kit.ctx.input.virtual;
      ((c.moveX = o),
        (c.moveY = s),
        this.base.classList.toggle(`sprint`, a),
        a && this.mode === `foot`
          ? c.buttons.add(`sprint`)
          : this.buttons.some(
              (e) => e.action === `sprint` && e.pointer !== -1,
            ) || c.buttons.delete(`sprint`));
    }
    stickUp(e) {
      if (e.pointerId !== this.stickId) return;
      this.stickId = -1;
      let t = this.kit.ctx.input.virtual;
      ((t.moveX = 0),
        (t.moveY = 0),
        this.buttons.some((e) => e.action === `sprint` && e.pointer !== -1) ||
          t.buttons.delete(`sprint`),
        (this.knob.style.transform = `translate3d(0,0,0)`),
        this.base.classList.remove(`active`, `sprint`),
        this.idle());
    }
    idle() {
      let e = this.stickZone.getBoundingClientRect();
      if (!e.width) return;
      let t = this.base.offsetWidth || 110,
        n = Math.min(e.width * 0.42, t * 1.2),
        r = e.height - Math.min(t * 1.05, e.height * 0.4);
      this.base.style.transform = `translate3d(${n.toFixed(0)}px,${r.toFixed(0)}px,0)`;
    }
    releaseButtons() {
      let e = this.kit.ctx.input.virtual;
      ((e.throttle = e.brake = 0), e.buttons.clear());
      for (let e of this.buttons) {
        (e.holdTimer !== void 0 && clearTimeout(e.holdTimer),
          (e.holdTimer = void 0));
        let t = e.pointer;
        ((e.pointer = -1),
          e.el.classList.remove(`down`, `holding`),
          t !== -1 &&
            e.el.hasPointerCapture(t) &&
            e.el.releasePointerCapture(t));
      }
    }
    releaseAll() {
      this.releaseButtons();
      let e = this.kit.ctx.input.virtual;
      ((e.moveX = e.moveY = e.lookDX = e.lookDY = 0),
        (e.lookHeld = !1),
        (this.stickId = this.lookId = -1),
        (this.knob.style.transform = `translate3d(0,0,0)`),
        this.base.classList.remove(`active`, `sprint`),
        this.idle());
    }
    setVisible(e) {
      e !== this.visible &&
        ((this.visible = e),
        this.el.classList.toggle(`show`, e),
        this.hint.classList.toggle(`show`, e),
        e ? requestAnimationFrame(() => this.idle()) : this.releaseAll());
    }
    update() {
      if (!this.visible) return;
      let e = this.kit.ctx,
        t = `foot`;
      try {
        t =
          e.vehicles.playerVehicle || e.player.mode === `vehicle`
            ? `vehicle`
            : `foot`;
      } catch {}
      if (
        (t !== this.mode &&
          ((this.mode = t),
          this.releaseButtons(),
          t === `foot` &&
            this.stickId !== -1 &&
            this.base.classList.contains(`sprint`) &&
            e.input.virtual.buttons.add(`sprint`),
          this.foot.classList.toggle(`show`, t === `foot`),
          this.drive.classList.toggle(`show`, t === `vehicle`),
          (this.el.dataset.mode = t)),
        t !== `foot`)
      ) {
        let t =
          this.hlActs.includes(`interact`) || !!e.ui.hasPrompt?.(`interact`);
        t !== this.canInteract &&
          ((this.canInteract = t),
          this.drive.classList.toggle(`can-interact`, t));
        return;
      }
      let n = !1,
        r = `fists`,
        i = !1;
      try {
        ((r = e.player.weapon),
          (n = r === `pistol` || r === `smg`),
          (i = (e.player.ownedWeapons?.length ?? 1) > 1));
      } catch {}
      if (
        (n !== this.armed &&
          ((this.armed = n), this.foot.classList.toggle(`armed`, n)),
        i !== this.canSwap &&
          ((this.canSwap = i), this.foot.classList.toggle(`can-swap`, i)),
        r !== this.shownWeapon)
      ) {
        this.shownWeapon = r;
        let e = this.weaponBtn.firstElementChild;
        e && (e.outerHTML = B[r] ?? B.fists);
      }
      let a = e.time.real,
        o = Math.min(0.1, Math.max(0, a - this.lastT));
      this.lastT = a;
      let s = !1;
      try {
        s = !!e.vehicles.enterTarget;
      } catch {}
      s || this.hlActs.includes(`enter`) || e.ui.hasPrompt?.(`enter`)
        ? (this.enterLinger = 1.2)
        : (this.enterLinger -= o);
      let c = this.enterLinger > 0;
      for (let e = 0; !c && e < this.buttons.length; e++) {
        let t = this.buttons[e];
        t.action === `enter` && t.pointer !== -1 && (c = !0);
      }
      c !== this.canEnter &&
        ((this.canEnter = c), this.foot.classList.toggle(`can-enter`, c));
    }
  },
  eo = class {
    stack = [];
    current = null;
    padPrev = [];
    repeatT = 0;
    repeatDir = ``;
    usingPointer = !1;
    onMove;
    onActivate;
    constructor() {
      (window.addEventListener(`keydown`, (e) => this.key(e), !0),
        window.addEventListener(
          `mousemove`,
          () => {
            this.usingPointer = !0;
          },
          { passive: !0 },
        ));
    }
    get active() {
      return this.stack[this.stack.length - 1] ?? null;
    }
    get depth() {
      return this.stack.length;
    }
    push(e) {
      let t = this.active;
      (t && (t.last = this.current),
        this.stack.push(e),
        this.snapshotPad(),
        this.hook(e.root));
      let n = e.initial?.() ?? e.last ?? this.list()[0];
      this.focus(n ?? null, !1);
    }
    pop(e) {
      if (e) {
        let t = this.stack.lastIndexOf(e);
        if (t < 0) return;
        this.stack.splice(t, 1);
      } else this.stack.pop();
      let t = this.active;
      if ((this.snapshotPad(), t)) {
        let e =
          t.last && t.last.isConnected
            ? t.last
            : (t.initial?.() ?? this.list()[0]);
        this.focus(e ?? null, !1);
      } else this.focus(null);
    }
    clear() {
      ((this.stack.length = 0), this.focus(null));
    }
    hook(e) {
      e.__navHooked ||
        ((e.__navHooked = !0),
        e.addEventListener(`focusin`, (e) => {
          let t = e.target.closest?.(`[data-nav]`);
          t &&
            this.active?.root.contains(t) &&
            this.isVisible(t) &&
            this.focus(t, !1);
        }),
        e.addEventListener(`mouseover`, (t) => {
          let n = t.target.closest?.(`[data-nav]`);
          n &&
            e.contains(n) &&
            n !== this.current &&
            this.isVisible(n) &&
            this.focus(n, !1);
        }));
    }
    list() {
      let e = this.active;
      if (!e) return [];
      let t = e.root.querySelectorAll(`[data-nav]`),
        n = [];
      return (
        t.forEach((e) => {
          this.isVisible(e) && !e.hasAttribute(`disabled`) && n.push(e);
        }),
        n
      );
    }
    isVisible(e) {
      if (!e.isConnected) return !1;
      let t = e.getBoundingClientRect();
      return (
        t.width > 0 &&
        t.height > 0 &&
        getComputedStyle(e).visibility !== `hidden`
      );
    }
    focus(e, t = !0) {
      this.current !== e &&
        (this.current?.classList.remove(`focus`),
        (this.current = e),
        e &&
          (e.classList.add(`focus`),
          t && e.scrollIntoView?.({ block: `nearest`, inline: `nearest` })));
    }
    get focused() {
      return this.current;
    }
    move(e, t) {
      let n = this.list();
      if (!n.length) return;
      let r = this.current && n.includes(this.current) ? this.current : null;
      if (!r) {
        (this.focus(n[0]), this.onMove?.());
        return;
      }
      let i = r.getBoundingClientRect(),
        a = i.left + i.width / 2,
        o = i.top + i.height / 2,
        s = null,
        c = 1 / 0;
      for (let l of n) {
        if (l === r) continue;
        let n = l.getBoundingClientRect(),
          u = n.left + n.width / 2,
          d = n.top + n.height / 2,
          f = u - a,
          p = d - o,
          m = f * e + p * t;
        if (m <= 4) continue;
        let h =
          m +
          (e === 0
            ? Math.max(
                0,
                Math.max(i.left, n.left) < Math.min(i.right, n.right)
                  ? 0
                  : Math.abs(f),
              )
            : Math.max(
                0,
                Math.max(i.top, n.top) < Math.min(i.bottom, n.bottom)
                  ? 0
                  : Math.abs(p),
              )) *
            2.5;
        h < c && ((c = h), (s = l));
      }
      if (!s && t !== 0) {
        let e = n
          .slice()
          .sort(
            (e, t) =>
              e.getBoundingClientRect().top - t.getBoundingClientRect().top,
          );
        ((s = t > 0 ? e[0] : e[e.length - 1]), s === r && (s = null));
      }
      s && ((this.usingPointer = !1), this.focus(s), this.onMove?.());
    }
    activate() {
      let e = this.current;
      e &&
        ((e.navAdjust && e.dataset.nav === `slider`) ||
          (this.onActivate?.(), e.click()));
    }
    adjust(e) {
      let t = this.current;
      return t?.navAdjust ? (t.navAdjust(e), !0) : !1;
    }
    back() {
      this.active?.onBack?.();
    }
    key(e) {
      if (se(e.target)) return;
      let t = this.active;
      if (
        !t ||
        ([`Enter`, `NumpadEnter`, `Space`].includes(e.code) &&
          e.target instanceof HTMLElement &&
          e.target.closest(`button, a`) &&
          !t.root.contains(e.target))
      )
        return;
      if (t.onKey?.(e)) {
        (e.preventDefault(), e.stopPropagation());
        return;
      }
      let n = !0;
      switch (e.code) {
        case `Tab`: {
          let t = this.list(),
            n = t.indexOf(document.activeElement),
            r =
              t[
                ((n < 0 ? (e.shiftKey ? 0 : -1) : n) +
                  (e.shiftKey ? -1 : 1) +
                  t.length) %
                  t.length
              ];
          r && (this.focus(r), r.focus({ preventScroll: !0 }));
          break;
        }
        case `ArrowUp`:
        case `KeyW`:
          this.move(0, -1);
          break;
        case `ArrowDown`:
        case `KeyS`:
          this.move(0, 1);
          break;
        case `ArrowLeft`:
        case `KeyA`:
          this.adjust(-1) || this.move(-1, 0);
          break;
        case `ArrowRight`:
        case `KeyD`:
          this.adjust(1) || this.move(1, 0);
          break;
        case `Enter`:
        case `NumpadEnter`:
        case `Space`:
          e.repeat || this.activate();
          break;
        case `Escape`:
        case `Backspace`:
          e.repeat || this.back();
          break;
        default:
          n = !1;
      }
      n && (e.preventDefault(), e.stopPropagation());
    }
    snapshotPad() {
      let e = to();
      this.padPrev = e ? e.buttons.map((e) => e.pressed) : [];
    }
    update(e) {
      let t = this.active;
      if (!t) return;
      let n = to();
      if (!n) return;
      let r = (e) => !!n.buttons[e]?.pressed && !this.padPrev[e],
        i = (e) => (Math.abs(e) < 0.2 ? 0 : e),
        a = i(n.axes[0] ?? 0),
        o = i(n.axes[1] ?? 0),
        s = i(n.axes[2] ?? 0),
        c = i(n.axes[3] ?? 0);
      t.onAxes?.(
        a,
        o,
        s,
        c,
        n.buttons[6]?.value ?? 0,
        n.buttons[7]?.value ?? 0,
        e,
      );
      for (let e = 0; e < n.buttons.length; e++)
        r(e) &&
          (t.onPad?.(e) ||
            (e === 0 ? this.activate() : e === 1 && this.back()));
      let l = ``;
      (n.buttons[12]?.pressed || (!t.onAxes && o < -0.6)
        ? (l = `u`)
        : n.buttons[13]?.pressed || (!t.onAxes && o > 0.6)
          ? (l = `d`)
          : n.buttons[14]?.pressed || (!t.onAxes && a < -0.6)
            ? (l = `l`)
            : (n.buttons[15]?.pressed || (!t.onAxes && a > 0.6)) && (l = `r`),
        l
          ? l === this.repeatDir
            ? ((this.repeatT -= e),
              this.repeatT <= 0 && ((this.repeatT = 0.11), this.dir(l)))
            : ((this.repeatDir = l), (this.repeatT = 0.38), this.dir(l))
          : (this.repeatDir = ``),
        (this.padPrev = n.buttons.map((e) => e.pressed)));
    }
    dir(e) {
      e === `u`
        ? this.move(0, -1)
        : e === `d`
          ? this.move(0, 1)
          : e === `l`
            ? this.adjust(-1) || this.move(-1, 0)
            : this.adjust(1) || this.move(1, 0);
    }
  };
