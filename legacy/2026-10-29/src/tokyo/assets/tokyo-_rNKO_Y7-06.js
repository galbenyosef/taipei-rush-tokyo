// tokyo/assets/tokyo-_rNKO_Y7 06 — math
// Lines 2720-3167 of readable/tokyo/assets/tokyo-_rNKO_Y7.pretty.js (statement-aligned).
var hn = class {
    ctx;
    root;
    hudLayer;
    topLayer;
    touchLayer;
    menuLayer;
    fadeEl;
    bound = [];
    langListeners = [];
    touch;
    compact = !1;
    short = !1;
    onUiScale;
    onHints;
    region = {};
    look;
    constructor(e) {
      ((this.ctx = e),
        (this.touch = e.input.isTouch || e.params.has(`touch`)),
        (this.root = V(`div`, `tr-ui`, document.body)),
        (this.root.id = `ui-root`),
        (this.hudLayer = V(`div`, `tr-layer tr-hud`, this.root)),
        (this.touchLayer = V(`div`, `tr-layer tr-touch`, this.root)),
        (this.fadeEl = V(`div`, `tr-layer tr-fade`, this.root)),
        (this.topLayer = V(`div`, `tr-layer tr-top`, this.root)),
        (this.menuLayer = V(`div`, `tr-layer tr-menus`, this.root)),
        this.touch && document.body.classList.add(`tr-is-touch`));
      let t = () => {
        let e = w();
        ((this.compact = Math.min(window.innerWidth, window.innerHeight) < 520),
          (this.short = this.touch && window.innerHeight < 400 && !e),
          document.body.classList.toggle(`tr-compact`, this.compact),
          document.body.classList.toggle(`tr-short`, this.short),
          document.body.classList.toggle(`tr-portrait`, e));
      };
      (t(), g(t));
    }
    get lang() {
      return this.ctx.state.lang;
    }
    t(e) {
      return e == null
        ? ``
        : typeof e == `object`
          ? (this.ctx.t(e) ?? e.zh ?? e.en ?? ``)
          : String(e);
    }
    alt(e) {
      return typeof e != `object` || !e || this.lang === `ja`
        ? ``
        : ((this.lang === `en` ? e.zh : e.en) ?? ``);
    }
    bind(e, t) {
      return (
        this.bound.push({ el: e, msg: t, mode: `t` }),
        (e.textContent = this.t(t)),
        e
      );
    }
    dual(e, t) {
      return (
        this.bound.push({ el: e, msg: t, mode: `dual` }),
        this.renderDual(e, t),
        e
      );
    }
    bindAlt(e, t) {
      return (
        this.bound.push({ el: e, msg: t, mode: `alt` }),
        (e.textContent = this.alt(t)),
        e
      );
    }
    bindTitle(e, t) {
      return (
        this.bound.push({ el: e, msg: t, mode: `title` }),
        (e.title = this.t(t)),
        e.setAttribute(`aria-label`, this.t(t)),
        e
      );
    }
    renderDual(e, t) {
      ((e.textContent = ``), V(`b`, ``, e, this.t(t)));
      let n = this.alt(t);
      n && V(`small`, ``, e, n);
    }
    onLang(e) {
      this.langListeners.push(e);
    }
    relocalize() {
      this.bound = this.bound.filter(
        (e) => e.el.isConnected || e.el.dataset.keep === `1`,
      );
      for (let e of this.bound)
        e.mode === `t`
          ? (e.el.textContent = this.t(e.msg))
          : e.mode === `alt`
            ? (e.el.textContent = this.alt(e.msg))
            : e.mode === `title`
              ? ((e.el.title = this.t(e.msg)),
                e.el.setAttribute(`aria-label`, this.t(e.msg)))
              : this.renderDual(e.el, e.msg);
      ((document.documentElement.lang =
        this.lang === `zh` ? `zh-Hant-TW` : this.lang === `ja` ? `ja` : `en`),
        document.body.classList.toggle(`tr-lang-en`, this.lang === `en`),
        document.body.classList.toggle(`tr-lang-ja`, this.lang === `ja`));
      for (let e of this.langListeners)
        try {
          e();
        } catch (e) {
          console.error(`[ui] lang listener`, e);
        }
    }
    sfx(e, t = 1) {
      try {
        this.ctx.audio.play(e, { ui: !0, volume: t });
      } catch {}
    }
    keep(e) {
      return ((e.dataset.keep = `1`), e);
    }
  },
  gn = {
    mission: !0,
    target: !0,
    waypoint: !0,
    race: !0,
    delivery: !0,
    cash: !1,
  },
  _n = class {
    map = new Map();
    version = 0;
    rev = 0;
    add(e, t) {
      let n = {
        id: e,
        x: t.x,
        z: t.z,
        icon: t.icon,
        color: t.color ?? Qe(t.icon),
        label: t.label,
        clampToEdge: t.clampToEdge ?? gn[t.icon] ?? !1,
        pulse: !!t.pulse,
        mapOnly: !!t.mapOnly,
        rx: t.x,
        rz: t.z,
        glyph: t.glyph || void 0,
        category: t.category,
      };
      return (this.map.set(e, n), this.version++, this.rev++, n);
    }
    update(e, t, n) {
      let r = this.map.get(e);
      if (!r) return;
      ((r.x = t), (r.z = n));
      let i = t - r.rx,
        a = n - r.rz;
      i * i + a * a > 0.0625 && ((r.rx = t), (r.rz = n), this.rev++);
    }
    remove(e) {
      this.map.delete(e) && (this.version++, this.rev++);
    }
    has(e) {
      return this.map.has(e);
    }
  },
  vn = {
    user: { core: `#ff4fa6`, glow: `rgba(255,61,154,0.3)`, blip: `#ff3d9a` },
    mission: { core: `#ffc93d`, glow: `rgba(255,201,61,0.3)`, blip: `#ffc93d` },
  },
  yn = class {
    ctx;
    get colors() {
      return this.waypoint && !this.waypoint.user ? vn.mission : vn.user;
    }
    waypoint = null;
    pts = new Float32Array(512);
    count = 0;
    distance = 0;
    tail = 0;
    version = 0;
    rev = 0;
    timer = 0;
    lastX = 1e9;
    lastZ = 1e9;
    lastFoot = !0;
    dirty = !1;
    soft = !1;
    constructor(e) {
      this.ctx = e;
    }
    set(e, t, n = !1) {
      let r = this.waypoint;
      if (e && r && r.user === n) {
        t !== void 0 && (r.label = t);
        let n = Math.hypot(e.x - r.x, e.z - r.z);
        if (n < 0.5) return;
        ((r.x = e.x),
          (r.z = e.z),
          this.rev++,
          this.count >= 2 &&
            ((this.pts[(this.count - 1) * 2] = e.x),
            (this.pts[(this.count - 1) * 2 + 1] = e.z)),
          n > 60 ? (this.dirty = !0) : (this.soft = !0));
        return;
      }
      (e || r) &&
        ((this.waypoint = e ? { x: e.x, z: e.z, label: t, user: n } : null),
        (this.count = 0),
        (this.dirty = !0),
        (this.soft = !1),
        (this.timer = 0),
        this.version++,
        this.rev++);
    }
    update(e, t, n, r) {
      this.waypoint &&
        (this.count >= 2 && ((this.pts[0] = t), (this.pts[1] = n)),
        (this.timer -= e),
        !(this.timer > 0 && !this.dirty) &&
          ((this.timer = 1),
          (this.dirty ||
            this.soft ||
            r !== this.lastFoot ||
            Math.hypot(t - this.lastX, n - this.lastZ) > 8) &&
            (this.compute(t, n, r), (this.dirty = !1), (this.soft = !1))));
    }
    remaining(e, t) {
      return this.count < 2
        ? this.directDistance(e, t)
        : this.tail + Math.hypot(this.pts[2] - e, this.pts[3] - t);
    }
    directDistance(e, t) {
      let n = this.waypoint;
      return n ? Math.hypot(n.x - e, n.z - t) : 0;
    }
    compute(e, t, n) {
      let r = this.waypoint;
      ((this.lastX = e), (this.lastZ = t), (this.lastFoot = n));
      let i = this.ctx.plan,
        a = [];
      try {
        a = i.gpsRoute(e, t, r.x, r.z, n);
      } catch {
        a = [];
      }
      let o = this.pts,
        s = 0,
        c = (e, t) => {
          s >= 255 || ((o[s * 2] = e), (o[s * 2 + 1] = t), s++);
        };
      c(e, t);
      let l = i.nodes,
        u = null,
        d = null;
      try {
        ((u = i.routeAnchor(e, t, n)), (d = i.routeAnchor(r.x, r.z, n)));
      } catch {}
      let f = (e, t, n, r) => {
          let a = null;
          try {
            i.walkClear(e, t, n, r) || (a = i.walkPath(e, t, n, r));
          } catch {
            a = null;
          }
          if (a) for (let e = 0; e < a.length - 1; e++) c(a[e].x, a[e].z);
          c(n, r);
        },
        p = !1;
      if (
        n &&
        u &&
        d &&
        (u.off > 0.5 || d.off > 0.5) &&
        Math.hypot(r.x - e, r.z - t) < 320
      )
        try {
          p = i.walkClear(e, t, r.x, r.z, !0);
        } catch {
          p = !1;
        }
      if (!p) {
        if (u && d) {
          u.off > 0.5 && f(e, t, u.x, u.z);
          for (let e of a) c(l[e].x, l[e].z);
          if (
            ((d.off > 0.5 || u.link === d.link) && c(d.x, d.z), d.off > 0.5)
          ) {
            let e = o[(s - 1) * 2],
              t = o[(s - 1) * 2 + 1],
              n = null;
            try {
              i.walkClear(e, t, r.x, r.z) || (n = i.walkPath(e, t, r.x, r.z));
            } catch {
              n = null;
            }
            if (n) for (let e = 0; e < n.length - 1; e++) c(n[e].x, n[e].z);
          }
        } else {
          let n = 0;
          if (a.length >= 2) {
            let r = l[a[0]],
              i = l[a[1]],
              o = Math.hypot(r.x - i.x, r.z - i.z);
            Math.hypot(e - i.x, t - i.z) < o && (n = 1);
          }
          let i = a.length;
          if (i - n >= 2) {
            let e = l[a[i - 2]],
              t = l[a[i - 1]],
              n = Math.hypot(e.x - t.x, e.z - t.z);
            Math.hypot(e.x - r.x, e.z - r.z) < n && --i;
          }
          for (let e = n; e < i; e++) {
            let t = l[a[e]];
            if (e === n) {
              let e = o[(s - 1) * 2],
                n = o[(s - 1) * 2 + 1];
              Math.abs(t.x - e) > 3 &&
                Math.abs(t.z - n) > 3 &&
                (Math.abs(t.x - e) < Math.abs(t.z - n) ? c(t.x, n) : c(e, t.z));
            }
            c(t.x, t.z);
          }
          if (s > 1) {
            let e = o[(s - 1) * 2],
              t = o[(s - 1) * 2 + 1];
            if (Math.abs(r.x - e) > 3 && Math.abs(r.z - t) > 3) {
              let n = s > 1 ? o[(s - 2) * 2] : e;
              Math.abs(n - e) > 1 ? c(r.x, t) : c(e, r.z);
            }
          }
        }
      }
      (c(r.x, r.z), (this.count = s));
      let m = 0;
      for (let e = 2; e < s; e++)
        m += Math.hypot(o[e * 2] - o[e * 2 - 2], o[e * 2 + 1] - o[e * 2 - 1]);
      ((this.tail = m),
        (this.distance = s >= 2 ? m + Math.hypot(o[2] - e, o[3] - t) : 0));
      let h = Math.hypot(r.x - e, r.z - t);
      (n &&
        !r.user &&
        h < 130 &&
        this.distance > Math.max(250, h * 4) &&
        ((o[0] = e),
        (o[1] = t),
        (o[2] = r.x),
        (o[3] = r.z),
        (this.count = 2),
        (this.tail = 0),
        (this.distance = h)),
        this.version++,
        this.rev++);
    }
  },
  bn = {
    F: `enter`,
    E: `interact`,
    SPACE: `jump`,
    空白鍵: `jump`,
    SHIFT: `sprint`,
    H: `horn`,
    Q: `radio`,
    T: `phone`,
    M: `map`,
    V: `camera`,
    C: `lookBehind`,
    R: `reload`,
    TAB: `weaponNext`,
    ESC: `pause`,
    P: `pause`,
    LMB: `attack`,
    RMB: `aim`,
    左鍵: `attack`,
    右鍵: `aim`,
  },
  xn = {
    sprint: `Shift`,
    jump: `Space`,
    handbrake: `Space`,
    enter: `F`,
    interact: `E`,
    attack: `LMB`,
    aim: `RMB`,
    horn: `H`,
    pause: `Esc`,
    map: `M`,
    phone: `T`,
    camera: `V`,
    lookBehind: `C`,
    radio: `Q`,
    weaponNext: `Tab`,
    weaponPrev: `Wheel`,
    reload: `R`,
  },
  Sn = {
    sprint: 1,
    jump: 0,
    handbrake: 0,
    enter: 3,
    interact: 2,
    attack: 7,
    aim: 6,
    horn: 10,
    pause: 9,
    map: 8,
    phone: 12,
    camera: 11,
    lookBehind: 13,
    radio: 4,
    weaponNext: 5,
    weaponPrev: 4,
    reload: 15,
  },
  Cn = {
    xbox: [`A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `⧉`, `☰`, `L3`, `R3`],
    ps: [`✕`, `○`, `□`, `△`, `L1`, `R1`, `L2`, `R2`, `⧉`, `☰`, `L3`, `R3`],
    nintendo: [`B`, `A`, `Y`, `X`, `L`, `R`, `ZL`, `ZR`, `−`, `+`, `L3`, `R3`],
  },
  wn = {
    xbox: [`a`, `b`, `x`, `y`],
    ps: [`ps-x`, `ps-o`, `ps-s`, `ps-t`],
    nintendo: [`nt`, `nt`, `nt`, `nt`],
  },
  Tn = {
    A: 0,
    B: 1,
    X: 2,
    Y: 3,
    LB: 4,
    RB: 5,
    LT: 6,
    RT: 7,
    "⧉": 8,
    "☰": 9,
    L3: 10,
    R3: 11,
    "▲": 12,
    "▼": 13,
    "◀": 14,
    "▶": 15,
  },
  En = [`up`, `down`, `left`, `right`],
  Dn = `xbox`,
  On = -1e9;
