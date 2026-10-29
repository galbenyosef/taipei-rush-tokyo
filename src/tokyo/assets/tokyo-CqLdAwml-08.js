// tokyo/assets/tokyo-CqLdAwml 08 — msg
// Lines 3413-3640 of readable/tokyo/assets/tokyo-CqLdAwml.pretty.js (statement-aligned).
function mr(e, t) {
  let n = [];
  for (let t in e) {
    let r = e[t];
    r && r.isTexture && n.push(r);
  }
  for (let r of [e.uniforms, t])
    if (r)
      for (let e in r) {
        let t = r[e]?.value;
        if (t) {
          if (t.isTexture) n.includes(t) || n.push(t);
          else if (Array.isArray(t))
            for (let e of t) e && e.isTexture && !n.includes(e) && n.push(e);
        }
      }
  return n;
}
function hr(t) {
  let n = null;
  return {
    name: `net`,
    alwaysUpdate: !0,
    async init(t) {
      try {
        ((n = (
          await _e(
            e(
              () => import(`./net-PtwKfaxg.js`).then((e) => e.t),
              __vite__mapDeps([
                18, 4, 6, 3, 5, 7, 8, 9, 19, 12, 13, 14, 15, 20, 21,
              ]),
            ),
            2e4,
            `net chunk`,
          )
        ).createNet(t, { city: R })),
          (t.net = n),
          await n.init?.(t));
      } catch (e) {
        (console.warn(`[net] multiplayer unavailable`, e), (n = null));
      }
    },
    start: (e) => n?.start?.(e),
    update: (e, t) => n?.update?.(e, t),
    lateUpdate: (e, t) => n?.lateUpdate?.(e, t),
    prewarm: (e) => n?.prewarm?.(e),
  };
}
function gr(e, t, n) {
  try {
    return e.plan.locationLabel?.(t, n) ?? null;
  } catch {
    return null;
  }
}
var _r = class {
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
        (this.root = B(`div`, `tr-ui`, document.body)),
        (this.root.id = `ui-root`),
        (this.hudLayer = B(`div`, `tr-layer tr-hud`, this.root)),
        (this.touchLayer = B(`div`, `tr-layer tr-touch`, this.root)),
        (this.fadeEl = B(`div`, `tr-layer tr-fade`, this.root)),
        (this.topLayer = B(`div`, `tr-layer tr-top`, this.root)),
        (this.menuLayer = B(`div`, `tr-layer tr-menus`, this.root)),
        this.touch && document.body.classList.add(`tr-is-touch`));
      let t = () => {
        let e = g();
        ((this.compact = Math.min(window.innerWidth, window.innerHeight) < 520),
          (this.short = this.touch && window.innerHeight < 400 && !e),
          document.body.classList.toggle(`tr-compact`, this.compact),
          document.body.classList.toggle(`tr-short`, this.short),
          document.body.classList.toggle(`tr-portrait`, e));
      };
      (t(), C(t));
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
      return typeof e != `object` || !e || this.lang !== `zh`
        ? ``
        : (e.en ?? ``);
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
      ((e.textContent = ``), B(`b`, ``, e, this.t(t)));
      let n = this.alt(t);
      n && B(`small`, ``, e, n);
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
  vr = {
    mission: !0,
    target: !0,
    waypoint: !0,
    race: !0,
    delivery: !0,
    cash: !1,
  },
  yr = class {
    map = new Map();
    version = 0;
    rev = 0;
    add(e, t) {
      let n = {
        id: e,
        x: t.x,
        z: t.z,
        icon: t.icon,
        color: t.color ?? ut(t.icon),
        label: t.label,
        clampToEdge: t.clampToEdge ?? vr[t.icon] ?? !1,
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
  br = null;
function xr(e) {
  br = e;
}
