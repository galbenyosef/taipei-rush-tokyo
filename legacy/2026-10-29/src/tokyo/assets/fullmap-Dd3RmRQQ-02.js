// tokyo/assets/fullmap-Dd3RmRQQ 02 — math
// Lines 24-1300 of readable/tokyo/assets/fullmap-Dd3RmRQQ.pretty.js (statement-aligned).
var w = `"PingFang TC","Noto Sans TC","Microsoft JhengHei","Heiti TC",system-ui,sans-serif`,
  T = 1.2,
  E = `haneda-limousine`,
  D = [
    { id: `story`, msg: { zh: `主線任務`, en: `Story` }, icon: `mission` },
    {
      id: `side`,
      msg: { zh: `支線任務`, en: `Side missions` },
      icon: `mission`,
    },
    { id: `job`, msg: { zh: `打工`, en: `Jobs` }, icon: `delivery` },
    { id: `race`, msg: { zh: `競速`, en: `Races` }, icon: `race` },
    { id: `culture`, msg: { zh: `文化體驗`, en: `Culture` }, icon: `mission` },
    { id: `mrt`, msg: { zh: `捷運站`, en: `MRT stations` }, icon: `mrt` },
    { id: `shop`, msg: { zh: `商店`, en: `Shops` }, icon: `shop` },
    {
      id: `service`,
      msg: { zh: `醫院・警察局`, en: `Hospital · Police` },
      icon: `hospital`,
    },
    { id: `temple`, msg: { zh: `廟宇`, en: `Temples` }, icon: `temple` },
    { id: `market`, msg: { zh: `夜市`, en: `Night markets` }, icon: `market` },
    { id: `landmark`, msg: { zh: `地標`, en: `Landmarks` }, icon: `landmark` },
    {
      id: `collectible`,
      msg: { zh: `招財貓`, en: `Lucky cats` },
      icon: `collectible`,
    },
    {
      id: `garbage`,
      msg: { zh: `垃圾車`, en: `Garbage trucks` },
      icon: `garbage`,
    },
    { id: `vehicle`, msg: { zh: `車輛`, en: `Vehicles` }, icon: `vehicle` },
  ],
  O = new Set([`story`, `side`, `job`, `race`, `culture`]),
  k = {
    story: `story`,
    side: `side`,
    job: `job`,
    race: `race`,
    culture: `culture`,
  },
  FullMap = class {
    kit;
    blips;
    gps;
    nav;
    el;
    canvas;
    g;
    W = 1;
    H = 1;
    dpr = 1;
    allocKey = ``;
    cx = 0;
    cz = -200;
    scale = 0.5;
    dirty = !0;
    acc = 0;
    isOpen = !1;
    hills = null;
    src = null;
    base = null;
    releaseTimer = 0;
    side;
    legend;
    legendBtn;
    legendVersion = -1;
    legendRect = null;
    hidden;
    groupOfBlip = new Map();
    dup = new Set();
    missionCat = new Map();
    clock;
    money;
    district;
    hints;
    keys = new Set();
    scope;
    pointers = new Map();
    dragMoved = 0;
    pinch0 = 0;
    scale0 = 1;
    reticle;
    showReticle = !1;
    labelCache = new Map();
    labelLang = ``;
    labelPass = (() => {
      let e = {
        g: null,
        s: 1,
        W: 1,
        H: 1,
        cx: 0,
        cz: 0,
        ox: 0,
        oz: 0,
        lang: `zh`,
        font: w,
        X: (t) => t * e.s + e.ox,
        Z: (t) => t * e.s + e.oz,
        t: (e) => this.kit.t(e),
        free: () => !0,
      };
      return e;
    })();
    clX = [];
    clY = [];
    clN = [];
    clB = [];
    onClose;
    constructor(e, r, i, a) {
      ((this.kit = e),
        (this.blips = r),
        (this.gps = i),
        (this.nav = a),
        (this.el = d(`div`, `fm`, e.menuLayer)),
        (this.canvas = d(`canvas`, `fm-canvas`, this.el)),
        (this.canvas.width = this.canvas.height = 1),
        (this.g = this.canvas.getContext(`2d`, { alpha: !1 })),
        (this.hidden = new Set(m().mapHidden ?? [])));
      let s = d(`div`, `fm-top`, this.el),
        c = d(`div`, `fm-title`, s);
      (e.dual(c, e.region.mapTitle ?? x.mapTitle),
        (this.district = new p(d(`div`, `fm-district`, s))));
      let l = d(`div`, `fm-stats`, s);
      this.clock = new p(d(`span`, `fm-clock`, l));
      let u = d(`span`, `fm-money`, l);
      (d(`small`, ``, u, n()),
        (this.money = new p(d(`span`, ``, u))),
        (this.legendBtn = d(`button`, `fm-legbtn icon-btn`, s)),
        (this.legendBtn.type = `button`),
        (this.legendBtn.innerHTML = o.map),
        e.bindTitle(this.legendBtn, x.legend),
        this.legendBtn.addEventListener(`click`, (t) => {
          (t.stopPropagation(),
            e.sfx(`ui_click`, 0.6),
            this.side.classList.toggle(`open`),
            this.measureLegend(),
            (this.dirty = !0));
        }));
      let f = d(`button`, `fm-close icon-btn`, s);
      ((f.innerHTML = o.close),
        e.bindTitle(f, x.mapClose),
        f.addEventListener(`click`, (e) => {
          (e.stopPropagation(), this.requestClose());
        }),
        (this.side = d(`div`, `fm-side`, this.el)));
      let h = d(`div`, `fm-legend-title`, this.side);
      (e.dual(d(`span`, ``, h), x.legend),
        e.bind(d(`em`, `fm-legend-tip`, h), {
          zh: `點選切換顯示`,
          en: `Tap to show / hide`,
        }),
        (this.legend = d(`div`, `fm-legend`, this.side)));
      let g = d(`div`, `fm-zoom`, this.el),
        _ = (t, n, r) => {
          let i = d(`button`, `icon-btn`, g);
          ((i.innerHTML = o[t]),
            r && e.bindTitle(i, r),
            i.addEventListener(`click`, (t) => {
              (t.stopPropagation(), e.sfx(`ui_click`, 0.6), n());
            }));
        };
      (_(`plus`, () => this.zoomBy(1.5, this.W / 2, this.H / 2)),
        _(`minus`, () => this.zoomBy(1 / 1.5, this.W / 2, this.H / 2)),
        _(`locate`, () => this.centerOnPlayer(), x.mapCenter),
        (this.reticle = d(`div`, `fm-reticle`, this.el)),
        (this.hints = d(`div`, `fm-hints`, this.el)),
        this.buildHints(),
        e.onLang(() => {
          (this.buildHints(), (this.legendVersion = -1), (this.dirty = !0));
        }));
      let v = this.canvas;
      (v.addEventListener(`pointerdown`, (e) => this.pDown(e)),
        v.addEventListener(`pointermove`, (e) => this.pMove(e)),
        v.addEventListener(`pointerup`, (e) => this.pUp(e)),
        v.addEventListener(`pointercancel`, (e) =>
          this.pointers.delete(e.pointerId),
        ),
        v.addEventListener(
          `wheel`,
          (e) => {
            (e.preventDefault(),
              this.zoomBy(Math.exp(-e.deltaY * 0.0016), e.clientX, e.clientY));
          },
          { passive: !1 },
        ),
        v.addEventListener(`contextmenu`, (e) => e.preventDefault()),
        window.addEventListener(`keyup`, (e) => this.keys.delete(e.code)),
        t(() => {
          this.isOpen &&
            (this.resize(), this.measureLegend(), this.clampView());
        }),
        (this.scope = {
          root: this.el,
          onBack: () => this.requestClose(),
          onKey: (e) => this.onKey(e),
          onPad: (e) => this.onPad(e),
          onAxes: (e, t, n, r, i, a, o) => {
            (e || t) &&
              ((this.showReticle = !0), this.pan(e * 700 * o, t * 700 * o));
            let s = a - i;
            Math.abs(s) > 0.1 &&
              this.zoomBy(Math.exp(s * 1.6 * o), this.W / 2, this.H / 2);
          },
        }));
    }
    hintDevice = ``;
    device() {
      let e = this.kit.ctx.input.device;
      return this.kit.touch && e !== `gamepad` ? `touch` : e;
    }
    buildHints() {
      let e = this.kit,
        t = this.device();
      ((this.hintDevice = t + e.lang),
        (this.hints.textContent = ``),
        (this.hints.dataset.dev = t));
      let n = (t, n) => {
        let r = d(`span`, `fm-hint`, this.hints);
        (t(r), d(`span`, ``, r, e.t(n)));
      };
      t === `gamepad`
        ? (n(
            (t) =>
              d(
                `span`,
                `kc kc-pad kc-wide`,
                t,
                e.lang === `zh`
                  ? `左搖桿`
                  : e.lang === `ja`
                    ? `左スティック`
                    : `L-stick`,
              ),
            { zh: `移動地圖`, en: `Pan` },
          ),
          n((e) => v(e, `LT / RT`), { zh: `縮放`, en: `Zoom` }),
          n((e) => v(e, `A`), { zh: `設定導航`, en: `Set waypoint` }),
          n((e) => v(e, `Y`), x.mapCenter),
          n((e) => v(e, `B`), x.mapClose))
        : t === `touch`
          ? (n(() => {}, { zh: `拖曳移動`, en: `Drag to pan` }),
            n(() => {}, { zh: `雙指縮放`, en: `Pinch to zoom` }),
            n(() => {}, { zh: `點一下設定導航`, en: `Tap to set a waypoint` }))
          : (n((e) => d(`span`, `kc kc-wide`, e, `WASD`), {
              zh: `移動地圖（或拖曳）`,
              en: `Pan (or drag)`,
            }),
            n((e) => d(`span`, `kc kc-wide`, e, `Q / E`), {
              zh: `縮放（或滾輪）`,
              en: `Zoom (or wheel)`,
            }),
            n((t) => y(t, `attack`, `kbm`, e.lang), {
              zh: `設定導航`,
              en: `Set waypoint`,
            }),
            n((e) => d(`span`, `kc`, e, `C`), x.mapCenter),
            n((e) => d(`span`, `kc kc-wide`, e, `Esc`), x.mapClose));
    }
    prewarm() {
      ((this.dpr = Math.min(2, window.devicePixelRatio || 1)),
        (this.W = window.innerWidth),
        (this.H = window.innerHeight));
      try {
        (this.buildLegend(),
          this.fitCity(this.kit.ctx.player.position),
          this.clampView(),
          this.draw());
      } catch (e) {
        console.warn(`[ui] map prewarm`, e);
      }
    }
    open(e) {
      ((this.isOpen = !0),
        clearTimeout(this.releaseTimer),
        this.el.classList.add(`show`),
        this.side.classList.remove(`open`),
        this.resize());
      let t = this.src;
      (!this.base &&
        t &&
        (this.base = g(t, this.kit.ctx.quality.mobile ? 1280 : 2048)),
        this.legendVersion !== this.blips.version && this.buildLegend(),
        this.measureLegend());
      let n = this.kit.ctx.player.position;
      (e
        ? ((this.scale = Math.max(
            this.fitScale() * 1.6,
            Math.min(this.scale, 1.4),
          )),
          (this.cx = e.x),
          (this.cz = e.z))
        : this.fitCity(n),
        this.clampView(),
        this.buildHints(),
        (this.dirty = !0),
        (this.showReticle =
          this.kit.ctx.input.device !== `kbm` &&
          this.kit.ctx.input.device !== `touch`),
        this.nav.push(this.scope),
        this.update(1));
    }
    close() {
      this.isOpen &&
        ((this.isOpen = !1),
        this.el.classList.remove(`show`),
        this.keys.clear(),
        this.pointers.clear(),
        this.nav.pop(this.scope),
        clearTimeout(this.releaseTimer),
        (this.releaseTimer = window.setTimeout(() => this.release(), 400)));
    }
    release() {
      this.isOpen ||
        (c(this.canvas),
        (this.allocKey = ``),
        this.base && c(this.base.canvas),
        (this.base = null));
    }
    requestClose() {
      (this.kit.sfx(`ui_back`), this.onClose?.());
    }
    ins = { top: 0, right: 0, bottom: 0, left: 0 };
    usable() {
      let e = this.ins,
        t = (this.kit.compact ? 44 : 70) + e.top,
        n = (this.kit.compact ? 30 : 56) + e.bottom,
        r =
          this.legendRect && !this.kit.compact
            ? this.W - this.legendRect[0] + 8
            : 0;
      return {
        x0: 12 + e.left,
        x1: this.W - Math.max(12 + e.right, r),
        y0: t,
        y1: this.H - n,
      };
    }
    get look() {
      return this.kit.look;
    }
    fitScale() {
      let e = this.usable(),
        t = this.look.city;
      return Math.min(
        (e.x1 - e.x0) / (t.maxX - t.minX + 120),
        (e.y1 - e.y0) / (t.maxZ - t.minZ + 80),
      );
    }
    fitCity(e) {
      let t = this.usable(),
        n = this.look.city,
        r = this.kit.compact ? 0.3 : 0;
      this.scale = Math.max(this.fitScale(), r);
      let i = this.scale,
        a = (n.minX + n.maxX) / 2,
        o = (n.minZ + n.maxZ) / 2;
      ((this.cx = a - ((t.x0 + t.x1) / 2 - this.W / 2) / i),
        (this.cz = o - ((t.y0 + t.y1) / 2 - this.H / 2) / i));
      let s = (t.x1 - t.x0) / 2 / i,
        c = (t.y1 - t.y0) / 2 / i,
        l = ((t.x0 + t.x1) / 2 - this.W / 2) / i,
        u = ((t.y0 + t.y1) / 2 - this.H / 2) / i,
        d = this.cx + l,
        f = this.cz + u,
        p = Math.max(e.x - s * 0.8, Math.min(e.x + s * 0.8, d)),
        m = Math.max(e.z - c * 0.8, Math.min(e.z + c * 0.8, f));
      ((this.cx += p - d), (this.cz += m - f));
    }
    resize() {
      ((this.dpr = Math.min(2, window.devicePixelRatio || 1)),
        (this.W = window.innerWidth),
        (this.H = window.innerHeight));
      let e = l();
      ((this.ins.top = e.top),
        (this.ins.right = e.right),
        (this.ins.bottom = e.bottom),
        (this.ins.left = e.left));
      let t = `${this.W}x${this.H}@${this.dpr}`;
      (t !== this.allocKey &&
        ((this.allocKey = t),
        (this.canvas.width = Math.round(this.W * this.dpr)),
        (this.canvas.height = Math.round(this.H * this.dpr))),
        (this.dirty = !0));
    }
    clampView() {
      let e = this.fitScale() * 0.85;
      this.scale = Math.max(e, Math.min(6, this.scale));
      let t = this.scale,
        n = this.W / 2 / t,
        r = this.H / 2 / t,
        i = this.look.view;
      ((this.cx =
        i.maxX - i.minX <= n * 2
          ? Math.max(i.maxX - n, Math.min(i.minX + n, this.cx))
          : Math.max(i.minX + n, Math.min(i.maxX - n, this.cx))),
        (this.cz =
          i.maxZ - i.minZ <= r * 2
            ? Math.max(i.maxZ - r, Math.min(i.minZ + r, this.cz))
            : Math.max(i.minZ + r, Math.min(i.maxZ - r, this.cz))));
    }
    pan(e, t) {
      ((this.cx += e / this.scale),
        (this.cz += t / this.scale),
        this.clampView(),
        (this.dirty = !0));
    }
    zoomBy(e, t, n) {
      let r = this.cx + (t - this.W / 2) / this.scale,
        i = this.cz + (n - this.H / 2) / this.scale;
      ((this.scale *= e),
        this.clampView(),
        (this.cx = r - (t - this.W / 2) / this.scale),
        (this.cz = i - (n - this.H / 2) / this.scale),
        this.clampView(),
        (this.dirty = !0));
    }
    centerOnPlayer() {
      let e = this.kit.ctx.player.position;
      ((this.cx = e.x), (this.cz = e.z), this.clampView(), (this.dirty = !0));
    }
    screenToWorld(e, t) {
      return {
        x: this.cx + (e - this.W / 2) / this.scale,
        z: this.cz + (t - this.H / 2) / this.scale,
      };
    }
    toggleWaypointAt(e, t) {
      let n = this.gps.waypoint;
      if (n) {
        let r = (n.x - this.cx) * this.scale + this.W / 2,
          i = (n.z - this.cz) * this.scale + this.H / 2;
        if (Math.hypot(r - e, i - t) < 22) {
          (this.gps.set(null), this.kit.sfx(`ui_back`), (this.dirty = !0));
          return;
        }
      }
      let r = this.screenToWorld(e, t);
      (this.gps.set(r, void 0, !0),
        this.kit.sfx(`ui_confirm`),
        (this.dirty = !0));
    }
    pDown(e) {
      if (
        (u(this.canvas, e.pointerId),
        this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY }),
        (this.showReticle = !1),
        this.side.classList.contains(`open`)
          ? (this.side.classList.remove(`open`), (this.dragMoved = 99))
          : this.pointers.size === 1 && (this.dragMoved = 0),
        this.pointers.size === 2)
      ) {
        let [e, t] = [...this.pointers.values()];
        ((this.pinch0 = Math.hypot(e.x - t.x, e.y - t.y)),
          (this.scale0 = this.scale),
          (this.dragMoved = 99));
      }
    }
    pMove(e) {
      let t = this.pointers.get(e.pointerId);
      if (!t) return;
      let n = e.clientX - t.x,
        r = e.clientY - t.y;
      if (this.pointers.size === 1)
        ((this.dragMoved += Math.abs(n) + Math.abs(r)),
          this.dragMoved > 5 && this.pan(-n, -r),
          (t.x = e.clientX),
          (t.y = e.clientY));
      else if (this.pointers.size === 2) {
        ((t.x = e.clientX), (t.y = e.clientY));
        let [n, r] = [...this.pointers.values()],
          i = Math.hypot(n.x - r.x, n.y - r.y);
        if (this.pinch0 > 0) {
          let e = this.scale0 * (i / this.pinch0);
          this.zoomBy(e / this.scale, (n.x + r.x) / 2, (n.y + r.y) / 2);
        }
      }
    }
    pUp(e) {
      let t = this.pointers.has(e.pointerId);
      (this.pointers.delete(e.pointerId),
        t &&
          this.pointers.size === 0 &&
          this.dragMoved <= 5 &&
          e.button === 0 &&
          this.toggleWaypointAt(e.clientX, e.clientY),
        this.pointers.size < 2 && (this.pinch0 = 0));
    }
    onKey(e) {
      let t = e.code;
      return t === `Escape` || t === `KeyM`
        ? (e.repeat || this.requestClose(), !0)
        : [
              `KeyW`,
              `KeyA`,
              `KeyS`,
              `KeyD`,
              `ArrowUp`,
              `ArrowDown`,
              `ArrowLeft`,
              `ArrowRight`,
              `KeyQ`,
              `KeyE`,
              `Equal`,
              `Minus`,
              `NumpadAdd`,
              `NumpadSubtract`,
            ].includes(t)
          ? (this.keys.add(t),
            (!t.startsWith(`Key`) ||
              t === `KeyW` ||
              t === `KeyA` ||
              t === `KeyS` ||
              t === `KeyD`) &&
              (this.showReticle = !0),
            !0)
          : t === `Enter` || t === `Space` || t === `NumpadEnter`
            ? (e.repeat || this.toggleWaypointAt(this.W / 2, this.H / 2),
              (this.showReticle = !0),
              !0)
            : t === `Backspace` || t === `Delete`
              ? (this.gps.waypoint &&
                  (this.gps.set(null),
                  this.kit.sfx(`ui_back`),
                  (this.dirty = !0)),
                !0)
              : t === `KeyC` || t === `Home`
                ? (this.centerOnPlayer(), !0)
                : !1;
    }
    onPad(e) {
      if (e === 0) this.toggleWaypointAt(this.W / 2, this.H / 2);
      else if (e === 1 || e === 8) this.requestClose();
      else if (e === 2) (this.gps.set(null), (this.dirty = !0));
      else if (e === 3) this.centerOnPlayer();
      else return !1;
      return !0;
    }
    update(e) {
      if (!this.isOpen) return;
      let t = this.keys;
      if (t.size) {
        let n = 650 * e,
          r = 0,
          i = 0;
        ((t.has(`KeyW`) || t.has(`ArrowUp`)) && (i -= n),
          (t.has(`KeyS`) || t.has(`ArrowDown`)) && (i += n),
          (t.has(`KeyA`) || t.has(`ArrowLeft`)) && (r -= n),
          (t.has(`KeyD`) || t.has(`ArrowRight`)) && (r += n),
          (r || i) && this.pan(r, i),
          (t.has(`KeyE`) || t.has(`Equal`) || t.has(`NumpadAdd`)) &&
            this.zoomBy(Math.exp(1.8 * e), this.W / 2, this.H / 2),
          (t.has(`KeyQ`) || t.has(`Minus`) || t.has(`NumpadSubtract`)) &&
            this.zoomBy(Math.exp(-1.8 * e), this.W / 2, this.H / 2));
      }
      if (
        (this.reticle.classList.toggle(`show`, this.showReticle),
        this.device() + this.kit.lang !== this.hintDevice && this.buildHints(),
        (this.acc += e),
        this.acc > 0.25)
      ) {
        ((this.acc = 0), (this.dirty = !0));
        let e = this.kit.ctx,
          t = 12;
        try {
          t = e.env.hour;
        } catch {}
        (this.clock.set(s(t)), this.money.set(f(e.state.money)));
        let n = e.player.position,
          r = e.plan.districtAt(n.x, n.z),
          i = C(e, n.x, n.z);
        this.district.set(
          i && i.zh !== r.name.zh
            ? `${this.kit.t(i)} · ${this.kit.t(r.name)}`
            : `${this.kit.t(r.name)} · ${this.kit.alt(r.name)}`,
        );
      }
      (this.legendVersion !== this.blips.version &&
        (this.buildLegend(), this.measureLegend()),
        this.dirty && ((this.dirty = !1), this.draw()));
    }
    refreshMissionCats() {
      this.missionCat.clear();
      try {
        for (let e of this.kit.ctx.missions.list()) {
          let t =
            e.category === `story`
              ? `story`
              : e.category === `job`
                ? `job`
                : e.category === `race`
                  ? `race`
                  : e.category === `culture`
                    ? `culture`
                    : `side`;
          this.missionCat.set(e.id, { cat: t, glyph: e.glyph });
        }
      } catch {}
    }
    groupOf(e) {
      let t = this.groupOfBlip.get(e.id);
      if (t !== void 0) return t;
      t = null;
      let n = e.id,
        r = n.indexOf(`:`),
        i = r > 0 ? n.slice(r + 1) : ``;
      return (
        e.pulse ||
        e.icon === `target` ||
        e.icon === `waypoint` ||
        e.icon === `cash` ||
        e.icon === `police-car` ||
        n === E
          ? (t = null)
          : n.startsWith(`story:`)
            ? (t = `story`)
            : e.category && k[e.category]
              ? (t = k[e.category])
              : n.startsWith(`mission:`)
                ? (t =
                    this.missionCat.get(i)?.cat ??
                    (e.icon === `race`
                      ? `race`
                      : e.icon === `delivery`
                        ? `job`
                        : `side`))
                : e.icon === `mission`
                  ? (t = `side`)
                  : e.icon === `race`
                    ? (t = `race`)
                    : e.icon === `delivery`
                      ? (t = `job`)
                      : e.icon === `mrt` ||
                          e.icon === `jr` ||
                          e.icon === `metro`
                        ? (t = `mrt`)
                        : e.icon === `shop`
                          ? (t = `shop`)
                          : e.icon === `hospital` || e.icon === `police`
                            ? (t = `service`)
                            : e.icon === `temple`
                              ? (t = `temple`)
                              : e.icon === `market`
                                ? (t = `market`)
                                : e.icon === `landmark`
                                  ? (t = `landmark`)
                                  : e.icon === `collectible`
                                    ? (t = `collectible`)
                                    : e.icon === `garbage`
                                      ? (t = `garbage`)
                                      : (e.icon === `vehicle` ||
                                          e.icon === `taxi`) &&
                                        (t = `vehicle`),
        this.groupOfBlip.set(e.id, t),
        t
      );
    }
    visible(e) {
      let t = this.groupOf(e);
      return !t || !this.hidden.has(t);
    }
    findDuplicates() {
      this.dup.clear();
      let e = new Map();
      for (let t of this.blips.map.values()) {
        let n = this.groupOf(t);
        if (!n || O.has(n) || !t.label) continue;
        let r =
            n === `landmark` || n === `market` || n === `temple` ? `place` : n,
          i = r + `|` + (typeof t.label == `string` ? t.label : t.label.zh),
          a = typeof t.label == `string` ? i : r + `|en|` + t.label.en,
          o = (e) =>
            e && Math.abs(e.x - t.x) + Math.abs(e.z - t.z) <= 120 ? e : void 0,
          s = o(e.get(i)) ?? o(e.get(a));
        if (!s) {
          (e.has(i) || e.set(i, t), e.has(a) || e.set(a, t));
          continue;
        }
        let c = t.id.startsWith(`ui-lm-`) ? s : t;
        (this.dup.add(c.id), c === s && (e.set(i, t), e.set(a, t)));
      }
    }
    buildLegend() {
      ((this.legendVersion = this.blips.version),
        this.groupOfBlip.clear(),
        this.refreshMissionCats(),
        this.findDuplicates());
      let e = new Map(),
        t = new Map(),
        n = new Map();
      for (let r of this.blips.map.values()) {
        let i = this.groupOf(r);
        if (!i || this.dup.has(r.id)) continue;
        e.set(i, (e.get(i) ?? 0) + 1);
        let a = t.get(i);
        (a || t.set(i, (a = new Map())),
          a.set(r.color, (a.get(r.color) ?? 0) + 1),
          n.has(i) || n.set(i, r.icon));
      }
      try {
        let t = this.kit.ctx.culture.garbageTrucks.length;
        t && e.set(`garbage`, (e.get(`garbage`) ?? 0) + t);
      } catch {}
      let a = this.kit.ctx.plan.pois.filter(
        (e) => e.kind === `convenience`,
      ).length;
      (a && e.set(`shop`, (e.get(`shop`) ?? 0) + a),
        (this.legend.textContent = ``));
      let o = Math.min(2, window.devicePixelRatio || 1),
        s = Math.round(22 * o),
        c = (e, t) => {
          ((e.width = e.height = s),
            e.getContext(`2d`).drawImage(t, 0, 0, s, s));
        },
        l = (e, t) => {
          let n = d(`div`, `fm-leg fixed`, this.legend);
          (c(
            d(`canvas`, `fm-leg-ic`, n),
            e === `player` ? r(s) : i(`waypoint`, s),
          ),
            d(`span`, `fm-leg-name`, n, this.kit.t(t)));
        };
      (l(`player`, x.you), l(`waypoint`, { zh: `導航點`, en: `Waypoint` }));
      let u = this.blips.map.get(E);
      if (u) {
        let e = d(`button`, `fm-leg fixed`, this.legend);
        ((e.type = `button`),
          (e.dataset.nav = `1`),
          c(d(`canvas`, `fm-leg-ic`, e), i(u.icon, s, u.color, u.glyph)),
          d(`span`, `fm-leg-name`, e, this.kit.t(x.mapAirportBus)),
          e.addEventListener(`click`, (e) => {
            (e.stopPropagation(),
              this.gps.set({ x: u.x, z: u.z }, void 0, !0),
              (this.cx = u.x),
              (this.cz = u.z),
              this.kit.sfx(`ui_confirm`),
              (this.dirty = !0));
          }));
      }
      for (let r of D) {
        let a = e.get(r.id) ?? 0;
        if (!a) continue;
        let o = t.get(r.id),
          l;
        if (o) {
          let e = 0;
          for (let [t, n] of o) n > e && ((e = n), (l = t));
        }
        let u = d(
          `button`,
          `fm-leg${this.hidden.has(r.id) ? ` off` : ``}`,
          this.legend,
        );
        ((u.type = `button`), (u.dataset.nav = `1`));
        let f = r.id === `shop` ? `shop` : (n.get(r.id) ?? r.icon);
        (c(
          d(`canvas`, `fm-leg-ic`, u),
          i(f, s, O.has(r.id) || r.id === `service` ? l : void 0),
        ),
          d(
            `span`,
            `fm-leg-name`,
            u,
            this.kit.t(this.kit.region.legend?.[r.id] ?? r.msg),
          ),
          d(`span`, `fm-leg-n`, u, String(a)),
          u.addEventListener(`click`, (e) => {
            (e.stopPropagation(),
              this.hidden.has(r.id)
                ? this.hidden.delete(r.id)
                : this.hidden.add(r.id),
              u.classList.toggle(`off`, this.hidden.has(r.id)),
              h({ mapHidden: [...this.hidden] }),
              this.kit.sfx(`ui_click`, 0.6),
              (this.dirty = !0));
          }));
      }
    }
    invalidateLegend() {
      ((this.legendVersion = -1), (this.dirty = !0));
    }
    measureLegend() {
      if (!this.isOpen) return;
      if (this.kit.compact && !this.side.classList.contains(`open`)) {
        this.legendRect = null;
        return;
      }
      let e = this.side.getBoundingClientRect();
      this.legendRect = e.width
        ? [e.left - 6, e.top - 6, e.right + 6, e.bottom + 6]
        : null;
    }
    drawMrt(e, t) {
      let n = null;
      try {
        n = this.kit.ctx.transit.mapLines;
      } catch {}
      n && n.length && _(e, n, t, !0);
    }
    stations() {
      try {
        return this.kit.ctx.transit.mapStations ?? null;
      } catch {
        return null;
      }
    }
    streetText(t, n, r, i) {
      let a = this.kit.lang;
      a !== this.labelLang && ((this.labelLang = a), this.labelCache.clear());
      let o = `${t.index}|${Math.round((t.axis === `x` ? n : r) / 25)}|${+!!i}`,
        s = this.labelCache.get(o);
      if (s === void 0) {
        let c = this.kit.ctx.plan.streetLabel(t, n, r);
        (c.n || (i = !1),
          (s =
            a === `zh`
              ? i
                ? c.full.zh
                : c.zh
              : a === `ja`
                ? i
                  ? (c.full.ja ?? e(c.full.zh) ?? c.full.zh)
                  : (c.ja ?? e(c.zh) ?? c.zh)
                : i
                  ? c.full.en
                  : c.en.replace(/, Sec\. \d+$/, ``)),
          this.labelCache.set(o, s));
      }
      return s;
    }
    draw() {
      let e = this.kit.ctx,
        t = this.g,
        n = this.dpr,
        o = this.W,
        s = this.H,
        c = this.scale,
        l = o / 2 - this.cx * c,
        u = s / 2 - this.cz * c;
      t.setTransform(n * c, 0, 0, n * c, n * l, n * u);
      let d = {
          minX: this.cx - o / 2 / c,
          maxX: this.cx + o / 2 / c,
          minZ: this.cz - s / 2 / c,
          maxZ: this.cz + s / 2 / c,
        },
        f = this.base;
      f && c * n <= f.scale * 1.6
        ? (b(t, d, this.hills, this.look),
          (t.imageSmoothingEnabled = !0),
          t.drawImage(
            f.canvas,
            f.minX,
            f.minZ,
            f.maxX - f.minX,
            f.maxZ - f.minZ,
          ))
        : S(t, e.plan, {
            ...d,
            look: this.look,
            pxPerM: c,
            hills: this.hills,
            detail: c > 0.7,
            stations: this.stations(),
          });
      let p = this.gps;
      if (p.waypoint && p.count >= 2) {
        let e = p.pts;
        ((t.lineJoin = `round`),
          (t.lineCap = `round`),
          t.beginPath(),
          t.moveTo(e[0], e[1]));
        for (let n = 1; n < p.count; n++) t.lineTo(e[n * 2], e[n * 2 + 1]);
        let n = p.colors;
        ((t.strokeStyle = n.glow),
          (t.lineWidth = 10 / c),
          t.stroke(),
          (t.strokeStyle = n.core),
          (t.lineWidth = 4 / c),
          t.stroke());
      }
      this.hidden.has(`mrt`) || this.drawMrt(t, c);
      try {
        let n = e.police.evading ? e.police.searchArea : null;
        n &&
          n.r > 0 &&
          (t.beginPath(),
          t.arc(n.x, n.z, n.r, 0, Math.PI * 2),
          (t.fillStyle = `rgba(255,45,60,0.14)`),
          t.fill(),
          (t.lineWidth = 2 / c),
          (t.strokeStyle = `rgba(255,90,100,0.8)`),
          t.setLineDash([8 / c, 6 / c]),
          t.stroke(),
          t.setLineDash([]));
      } catch {}
      t.setTransform(n, 0, 0, n, 0, 0);
      let m = (e) => e * c + l,
        h = (e) => e * c + u,
        g = [],
        _ = (e, t, n, r) => {
          for (let i = 0; i < g.length; i += 4)
            if (e < g[i + 2] && n > g[i] && t < g[i + 3] && r > g[i + 1])
              return !1;
          return (g.push(e, t, n, r), !0);
        };
      (this.legendRect && g.push(...this.legendRect),
        g.push(0, 0, o, this.kit.compact ? 40 : 58),
        (t.textAlign = `center`),
        (t.textBaseline = `middle`),
        (t.lineJoin = `round`));
      let v = this.clX,
        y = this.clY,
        x = this.clN,
        C = this.clB;
      v.length = y.length = x.length = C.length = 0;
      let E = c < T;
      for (let e of this.blips.map.values()) {
        let t = m(e.x),
          n = h(e.z);
        if (
          t < -20 ||
          t > o + 20 ||
          n < -20 ||
          n > s + 20 ||
          !this.visible(e) ||
          this.dup.has(e.id)
        )
          continue;
        let r = !1;
        if (E && !e.pulse && this.groupOf(e))
          for (let e = 0; e < v.length; e++) {
            if (C[e].pulse || !this.groupOf(C[e])) continue;
            let i = v[e] - t,
              a = y[e] - n;
            if (i * i + a * a < 289) {
              (x[e]++, (r = !0));
              break;
            }
          }
        r ||
          (v.push(t),
          y.push(n),
          x.push(1),
          C.push(e),
          g.push(t - 11, n - 11, t + 11, n + 11));
      }
      {
        let t = e.player.position,
          n = m(t.x),
          r = h(t.z);
        g.push(n - 16, r - 16, n + 16, r + 16);
      }
      if (c >= 0.2) {
        let n = c >= 0.75 || this.kit.lang !== `en`;
        for (let r of e.plan.roads) {
          if (
            (!r.major && c < 1.7) ||
            (r.lane && c < 3) ||
            (r.pedestrian && c < 1.2) ||
            !r.name.zh ||
            r.name.zh === `無名巷` ||
            (this.look.mapStreet && !this.look.mapStreet(r, c))
          )
            continue;
          let i = r.major ? (c < 0.5 ? 11 : 12) : 10.5;
          t.font = `${r.major ? 600 : 500} ${i}px ${w}`;
          let a = Math.max(420, (r.major ? 260 : 200) + i * 9) / c,
            o = Math.max(r.from, r.axis === `x` ? d.minX : d.minZ),
            s = Math.min(r.to, r.axis === `x` ? d.maxX : d.maxZ);
          if (s - o < 30 / c) continue;
          let l = Math.ceil((o - r.from) / a) * a + r.from + a * 0.5;
          for (let c = l < s ? l : (o + s) / 2; c < s; c += a) {
            if (
              r.axis === `x` ? e.plan.nodeAt(c, r.at) : e.plan.nodeAt(r.at, c)
            )
              continue;
            let a = r.axis === `x` ? c : r.at,
              o = r.axis === `x` ? r.at : c,
              s = this.streetText(r, a, o, n),
              l = m(a),
              u = h(o),
              d = r.axis === `z`,
              f = d && this.kit.lang !== `en`,
              p = f ? s.length * i * 1.04 : t.measureText(s).width,
              g = d ? i + 4 : p + 6,
              v = d ? p + 6 : i + 4;
            if (_(l - g / 2, u - v / 2, l + g / 2, u + v / 2)) {
              if (
                ((t.lineWidth = 3),
                (t.strokeStyle = `rgba(12,15,22,0.85)`),
                (t.fillStyle = r.major ? `#f3f1ea` : `#c9cdd6`),
                f)
              ) {
                let e = i * 1.04,
                  n = u - ((s.length - 1) * e) / 2;
                for (let r = 0; r < s.length; r++) {
                  if (s[r] === `ー`) {
                    (t.save(),
                      t.translate(l, n + r * e + 0.5),
                      t.rotate(Math.PI / 2),
                      t.strokeText(s[r], 0, 0),
                      t.fillText(s[r], 0, 0),
                      t.restore());
                    continue;
                  }
                  (t.strokeText(s[r], l, n + r * e + 0.5),
                    t.fillText(s[r], l, n + r * e + 0.5));
                }
                continue;
              }
              (t.save(),
                t.translate(l, u),
                d && t.rotate(-Math.PI / 2),
                t.strokeText(s, 0, 0.5),
                t.fillText(s, 0, 0.5),
                t.restore());
            }
          }
        }
      }
      let D = this.labelPass;
      if (
        (this.look.labels &&
          ((D.g = t),
          (D.s = c),
          (D.W = o),
          (D.H = s),
          (D.cx = this.cx),
          (D.cz = this.cz),
          (D.ox = l),
          (D.oz = u),
          (D.lang = this.kit.lang),
          (D.free = _),
          this.look.labels(D)),
        c < 1.8)
      )
        for (let n of e.plan.districts) {
          if (n.id === `riverside`) continue;
          let e = this.look.city,
            r = Math.max(n.minX, e.minX),
            i = Math.min(n.maxX, e.maxX),
            a = Math.max(n.minZ, e.minZ),
            o = Math.min(n.maxZ, e.maxZ);
          if (i <= r || o <= a) continue;
          let s = this.look.districtAnchor?.(n.id);
          if (s === null) continue;
          let l = m(s ? s.x : (r + i) / 2),
            u = h(s ? s.z : (a + o) / 2),
            d = Math.max(15, Math.min(34, 26 * Math.sqrt(c / 0.5)));
          t.font = `800 ${d}px ${w}`;
          let f = this.kit.t(n.name),
            p = t.measureText(f).width;
          if (!_(l - p / 2, u - d * 0.7, l + p / 2, u + d * 0.9)) continue;
          ((t.lineWidth = 4),
            (t.strokeStyle = `rgba(8,10,16,0.55)`),
            t.strokeText(f, l, u),
            (t.fillStyle = `rgba(255,255,255,0.82)`),
            t.fillText(f, l, u));
          let g = this.kit.alt(n.name).toUpperCase();
          g &&
            ((t.font = `600 ${Math.round(d * 0.36)}px ${w}`),
            (t.fillStyle = `rgba(255,214,120,0.8)`),
            t.fillText(g.split(``).join(` `), l, u + d * 0.72));
        }
      if (c >= 0.32) {
        t.font = `600 12px ${w}`;
        for (let n of e.plan.landmarks) {
          if (n.zone && n.kind !== `market`) continue;
          let e = m(n.x),
            r = h(n.z);
          if (e < -50 || e > o + 50 || r < -20 || r > s + 20) continue;
          let i = this.blips.map.get(`ui-lm-${n.id}`);
          if (i && !this.visible(i)) continue;
          let a = this.kit.t(n.name),
            c = t.measureText(a).width,
            l = r + (i ? 20 : 15);
          _(e - c / 2 - 4, l - 8, e + c / 2 + 4, l + 8) &&
            ((t.fillStyle =
              n.kind === `temple`
                ? `#ff9a7a`
                : n.kind === `market`
                  ? `#ffbe5c`
                  : n.kind === `park`
                    ? `#8fe0a2`
                    : `#d8ceff`),
            i || (t.beginPath(), t.arc(e, r, 3.2, 0, Math.PI * 2), t.fill()),
            (t.lineWidth = 3),
            (t.strokeStyle = `rgba(10,12,18,0.9)`),
            t.strokeText(a, e, l),
            t.fillText(a, e, l));
        }
        for (let e of this.blips.map.values()) {
          if (!j(e) || !this.visible(e) || this.dup.has(e.id)) continue;
          let n = m(e.x),
            r = h(e.z);
          if (n < -50 || n > o + 50 || r < -20 || r > s + 20) continue;
          let i = this.kit.t(e.label),
            a = t.measureText(i).width,
            c = r + 20;
          _(n - a / 2 - 4, c - 8, n + a / 2 + 4, c + 8) &&
            ((t.fillStyle =
              e.icon === `temple`
                ? `#ff9a7a`
                : e.icon === `market`
                  ? `#ffbe5c`
                  : `#d8ceff`),
            (t.lineWidth = 3),
            (t.strokeStyle = `rgba(10,12,18,0.9)`),
            t.strokeText(i, n, c),
            t.fillText(i, n, c));
        }
        t.font = `italic 600 13px ${w}`;
        for (let n of e.plan.hills) {
          if (!n.name) continue;
          let e = m(n.x),
            r = h(n.z);
          if (e < -80 || e > o + 80 || r < -20 || r > s + 20) continue;
          let i = this.kit.t(n.name),
            a = t.measureText(i).width;
          _(e - a / 2, r - 9, e + a / 2, r + 9) &&
            ((t.fillStyle = `rgba(190,230,190,0.75)`),
            t.fillText(`▲ ${i}`, e, r));
        }
      }
      let O = Math.round(20 * n);
      if (c >= 1.1 && !this.hidden.has(`shop`)) {
        let r = Math.round(16 * n);
        for (let n of e.plan.pois) {
          if (n.kind !== `convenience`) continue;
          let e = m(n.x),
            i = h(n.z);
          e < -10 ||
            e > o + 10 ||
            i < -10 ||
            i > s + 10 ||
            t.drawImage(a(n.brand, r), e - 8, i - 8, 16, 16);
        }
      }
      let k = e.time.real;
      for (let e = 0; e < C.length; e++) {
        let n = C[e],
          r = v[e],
          a = y[e];
        if (n.pulse) {
          let e = (k * 0.9) % 1;
          ((t.globalAlpha = (1 - e) * 0.8),
            (t.strokeStyle = n.color),
            (t.lineWidth = 2),
            t.beginPath(),
            t.arc(r, a, 10 + e * 14, 0, Math.PI * 2),
            t.stroke(),
            (t.globalAlpha = 1));
        }
        t.drawImage(
          i(n.icon, O, n.color, x[e] > 1 ? void 0 : n.glyph),
          r - 10,
          a - 10,
          20,
          20,
        );
        let o = x[e];
        if (o > 1) {
          let e = o > 9 ? `9+` : String(o);
          t.font = `700 9px ${w}`;
          let n = e.length > 1 ? 15 : 12;
          ((t.fillStyle = `rgba(8,10,16,0.92)`),
            t.beginPath(),
            t.arc(r + 8, a - 8, n / 2, 0, Math.PI * 2),
            t.fill(),
            (t.lineWidth = 1),
            (t.strokeStyle = `rgba(255,255,255,0.55)`),
            t.stroke(),
            (t.fillStyle = `#fff`),
            t.fillText(e, r + 8, a - 7.6));
        } else if (
          n.label &&
          c >= 0.8 &&
          n.icon !== `mrt` &&
          n.icon !== `jr` &&
          n.icon !== `metro` &&
          !n.id.startsWith(`ui-lm-`) &&
          !j(n)
        ) {
          let e = this.kit.t(n.label);
          t.font = `600 11px ${w}`;
          let i = t.measureText(e).width;
          _(r - i / 2 - 3, a + 12, r + i / 2 + 3, a + 26) &&
            ((t.lineWidth = 3),
            (t.strokeStyle = `rgba(10,12,18,0.9)`),
            t.strokeText(e, r, a + 19),
            (t.fillStyle = `#fff`),
            t.fillText(e, r, a + 19));
        }
      }
      if (!this.hidden.has(`garbage`))
        try {
          let n = e.culture.garbageTrucks;
          for (let e = 0; e < n.length; e++) {
            let r = m(n[e].x),
              a = h(n[e].z);
            r < -20 ||
              r > o + 20 ||
              a < -20 ||
              a > s + 20 ||
              t.drawImage(i(`garbage`, O), r - 10, a - 10, 20, 20);
          }
        } catch {}
      try {
        if (e.police.level > 0) {
          let n = Math.floor(k * 6) % 2 == 0;
          for (let r of e.vehicles.list) {
            if (r.kind !== `police` || r.destroyed || r.driver === `player`)
              continue;
            let e = m(r.body.x),
              i = h(r.body.z);
            ((t.fillStyle = n ? `#ff2d3c` : `#2d6bff`),
              t.beginPath(),
              t.arc(e, i, 6, 0, Math.PI * 2),
              t.fill(),
              (t.lineWidth = 2),
              (t.strokeStyle = `#0b0d12`),
              t.stroke());
          }
        }
      } catch {}
      if (c >= 0.9 && !this.hidden.has(`mrt`)) {
        t.font = `600 11px ${w}`;
        for (let n of e.plan.mrtStations) {
          let e = m(n.ex),
            r = h(n.ez);
          if (e < -40 || e > o + 40 || r < -20 || r > s + 20) continue;
          let i = this.kit.t(n.name),
            a = t.measureText(i).width;
          _(e - a / 2 - 2, r - 23, e + a / 2 + 2, r - 9) &&
            ((t.lineWidth = 3),
            (t.strokeStyle = `rgba(10,12,18,0.9)`),
            t.strokeText(i, e, r - 16),
            (t.fillStyle = `#9fd3ff`),
            t.fillText(i, e, r - 16));
        }
      }
      let A = this.gps.waypoint;
      if (A) {
        let e = m(A.x),
          r = h(A.z);
        t.drawImage(
          i(`waypoint`, Math.round(26 * n), this.gps.colors.blip),
          e - 13,
          r - 13,
          26,
          26,
        );
      }
      let M = e.player.position,
        N = m(M.x),
        P = h(M.z),
        F = e.player.heading ?? 0;
      try {
        let t = e.vehicles.playerVehicle;
        t && (F = t.heading);
      } catch {}
      let I = 0.5 + 0.5 * Math.sin(k * 4);
      ((t.fillStyle = `rgba(255,255,255,${0.12 + 0.1 * I})`),
        t.beginPath(),
        t.arc(N, P, 18 + I * 4, 0, Math.PI * 2),
        t.fill(),
        t.save(),
        t.translate(N, P),
        t.rotate(F),
        t.drawImage(r(Math.round(28 * n)), -14, -14, 28, 28),
        t.restore());
    }
  };
