// tokyo/assets/tokyo-CqLdAwml 14 — math
// Lines 6006-6558 of readable/tokyo/assets/tokyo-CqLdAwml.pretty.js (statement-aligned).
var ki = Math.PI * 2,
  Ai = 0.36,
  ji = 150,
  Mi = 45,
  Ni = class {
    kit;
    blips;
    gps;
    el;
    canvas;
    g;
    cssSize = 200;
    dpr = 1;
    pxSize = 200;
    win = null;
    hills = null;
    recentring = !1;
    zoom = 0.8;
    acc = 1;
    shopXZ = new Float32Array();
    shopBrand = [];
    hpFill;
    arFill;
    hpLow;
    arWrap;
    rimRed;
    rimBlue;
    distText;
    distShow;
    nightSlot;
    distMission;
    lastHp = -1;
    northFont = ``;
    lastAr = -1;
    flash = 0;
    dX = 1e9;
    dZ = 1e9;
    dYaw = 0;
    dHead = 0;
    dZoom = 1;
    dBlips = -1;
    dGps = -1;
    dLang = ``;
    dVeh = !1;
    stale = 0;
    animated = !1;
    lastDistQ = NaN;
    draws = 0;
    constructor(e, t, n, r) {
      ((this.kit = e), (this.blips = t), (this.gps = n));
      let i = B(`div`, `mm-wrap`, e.hudLayer);
      this.el = i;
      let a = B(`button`, `mm`, i);
      ((a.type = `button`),
        a.setAttribute(`aria-label`, `開啟地圖 / Open map`),
        a.addEventListener(`click`, (e) => {
          (e.stopPropagation(), r());
        }),
        (this.canvas = B(`canvas`, `mm-canvas`, a)),
        B(`div`, `mm-glass`, a));
      let o = B(`div`, `mm-dist`, a);
      ((this.distText = new V(o)),
        (this.distShow = new H(o, `show`)),
        (this.distMission = new H(o, `mission`)),
        (this.rimRed = new H(a, `rim-red`)),
        (this.nightSlot = new H(a, `night`)),
        (this.rimBlue = new H(a, `rim-blue`)),
        (this.g = this.canvas.getContext(`2d`)));
      let s = B(`div`, `mm-bars`, i),
        c = B(`div`, `bar bar-hp`, s);
      ((this.hpFill = new gt(B(`i`, ``, c), `--v`)),
        (this.hpLow = new H(c, `low`)));
      let l = B(`div`, `bar bar-ar`, s);
      ((this.arFill = new gt(B(`i`, ``, l), `--v`)),
        (this.arWrap = new H(l, `empty`)),
        this.resize(),
        C(() => this.resize()),
        this.refreshShops());
    }
    refreshShops() {
      let e = this.kit.ctx.plan.pois.filter((e) => e.kind === `convenience`);
      ((this.shopXZ = new Float32Array(e.length * 2)),
        (this.shopBrand = e.map((e) => e.brand)),
        e.forEach((e, t) => {
          ((this.shopXZ[t * 2] = e.x), (this.shopXZ[t * 2 + 1] = e.z));
        }),
        (this.dBlips = -1));
    }
    resize() {
      let e = this.el.querySelector(`.mm`).getBoundingClientRect();
      ((this.cssSize = Math.max(80, Math.round(e.width || 200))),
        (this.dpr = Math.min(2, window.devicePixelRatio || 1)),
        (this.pxSize = Math.round(this.cssSize * this.dpr)),
        (this.canvas.width = this.canvas.height = this.pxSize),
        (this.northFont = `700 ${Math.round(11 * this.dpr)}px "PingFang TC","Noto Sans TC","Microsoft JhengHei",sans-serif`),
        (this.acc = 1),
        (this.dBlips = -1),
        this.sizeWindow());
    }
    sizeWindow() {
      this.win?.setSize((this.cssSize / 2 / Ai) * 1.02 + 4, ji);
    }
    suspend(e) {
      e ? this.win?.release() : this.sizeWindow();
    }
    setBase(e) {
      (this.win?.release(),
        (this.win = new Di(e)),
        this.sizeWindow(),
        (this.dBlips = -1));
    }
    coverView(e) {
      let t = this.win;
      if (!t) return;
      let n = this.kit.ctx.player.position;
      if (!t.covers(e, 0)) {
        t.paint(n.x, n.z);
        return;
      }
      if (this.recentring || t.covers(e, Mi)) return;
      this.recentring = !0;
      let r = () => {
          this.recentring = !1;
          let e = this.win;
          if (!e || !e.ready) return;
          let t = this.kit.ctx.player.position,
            n = t.x - (e.minX + e.maxX) / 2,
            r = t.z - (e.minZ + e.maxZ) / 2,
            i = Math.hypot(n, r),
            a = i > 1 ? Math.min(ji * 0.5, i * 0.5) / i : 0;
          e.paint(t.x + n * a, t.z + r * a);
        },
        i = this.kit.ctx.work;
      i ? i.nextFrame().then(r) : setTimeout(r, 0);
    }
    update(e) {
      let t = this.kit.ctx,
        n = t.player,
        r = Math.max(0, Math.min(1, (n.health ?? 100) / (n.maxHealth || 100)));
      Math.abs(r - this.lastHp) > 0.002 &&
        ((this.lastHp = r),
        this.hpFill.set(r.toFixed(3)),
        this.hpLow.set(r < 0.3));
      let i = Math.max(0, Math.min(1, (n.armor ?? 0) / 100));
      Math.abs(i - this.lastAr) > 0.002 &&
        ((this.lastAr = i),
        this.arFill.set(i.toFixed(3)),
        this.arWrap.set(i <= 0.001));
      let a = 0;
      try {
        a = t.env.night;
      } catch {}
      this.nightSlot.set(a > 0.5);
      let o = 0;
      try {
        o = t.police.level;
      } catch {}
      this.flash += e;
      let s = Math.floor(this.flash * 4) % 2 == 0,
        c = !!t.police?.evading;
      (this.rimRed.set(o > 0 && !c && s), this.rimBlue.set(o > 0 && !c && !s));
      let l = Fi(t),
        u = l ? Math.abs(l.speed) : 0,
        d = l ? Math.max(Ai, 0.62 - u * 0.009) : 0.85;
      ((this.zoom += (d - this.zoom) * Math.min(1, e * 2.5)),
        (this.acc += e),
        (this.stale += e));
      let f = t.quality;
      if (this.acc < (f.mobile || f.level === `low` ? 1 / 20 : 1 / 30)) return;
      ((this.acc = 0), this.needsDraw(l) && this.draw(l !== null));
      let p = this.gps.waypoint;
      if (p) {
        let e = this.gps.remaining(n.position.x, n.position.z),
          t = e >= 1e3 ? -Math.round(e / 100) : Math.round(e / 10);
        t !== this.lastDistQ &&
          ((this.lastDistQ = t),
          this.distText.set(
            t < 0 ? `${(-t / 10).toFixed(1)} km` : `${t * 10} m`,
          ));
      }
      (this.distShow.set(!!p), this.distMission.set(!!p && !p.user));
    }
    invalidate() {
      this.dBlips = -1;
    }
    needsDraw(e) {
      if (this.stale >= (this.animated ? 1 / 15 - 0.004 : 0.5)) return !0;
      let t = this.kit.ctx;
      if (
        this.blips.rev !== this.dBlips ||
        this.gps.rev !== this.dGps ||
        this.kit.lang !== this.dLang ||
        !!e !== this.dVeh
      )
        return !0;
      let n = t.player.position,
        r = this.pxSize / 2,
        i = this.zoom * this.dpr,
        a = n.x - this.dX,
        o = n.z - this.dZ;
      if (
        (a * a + o * o) * i * i > 0.16 ||
        Math.abs(this.zoom - this.dZoom) * r > 0.4 * this.dZoom
      )
        return !0;
      let s = 0;
      try {
        s = t.cameraRig.yaw;
      } catch {}
      if (Math.abs(Pi(s - this.dYaw)) * r > 0.4) return !0;
      let c = e ? e.heading : (t.player.heading ?? 0);
      return Math.abs(Pi(c - this.dHead)) > 0.02;
    }
    draw(e) {
      let t = this.kit.ctx;
      (this.draws++, (this.stale = 0));
      let n = !1,
        r = this.g,
        i = this.pxSize,
        a = i / 2,
        o = a,
        s = this.dpr,
        c = this.zoom * s,
        l = t.player.position,
        u = l.x,
        d = l.z,
        f = 0;
      try {
        f = t.cameraRig.yaw;
      } catch {}
      let p = Math.cos(f),
        m = Math.sin(f);
      (r.setTransform(1, 0, 0, 1, 0, 0),
        r.clearRect(0, 0, i, i),
        r.save(),
        r.beginPath(),
        r.arc(a, a, o, 0, ki),
        r.clip(),
        r.setTransform(1, 0, 0, 1, a, a),
        r.rotate(-f),
        r.scale(c, c),
        r.translate(-u, -d));
      let h = (o / c) * 1.02,
        g = this.view;
      ((g.minX = u - h),
        (g.maxX = u + h),
        (g.minZ = d - h),
        (g.maxZ = d + h),
        this.coverView(g));
      let _ = this.win && this.win.ready ? this.win : null,
        v = this.win?.src.look,
        y = v ? v.base : g;
      if (
        (v &&
          (!_ ||
            g.minX < y.minX ||
            g.maxX > y.maxX ||
            g.minZ < y.minZ ||
            g.maxZ > y.maxZ) &&
          vi(r, g, this.hills, v),
        _)
      ) {
        let e = Math.max(_.minX, y.minX, g.minX),
          t = Math.min(_.maxX, y.maxX, g.maxX),
          n = Math.max(_.minZ, y.minZ, g.minZ),
          i = Math.min(_.maxZ, y.maxZ, g.maxZ);
        if (t > e && i > n) {
          let a = _.scale,
            o = (e - _.minX) * a,
            s = (n - _.minZ) * a,
            c = (t - e) * a,
            l = (i - n) * a;
          ((r.imageSmoothingEnabled = !0),
            r.drawImage(_.canvas, o, s, c, l, e, n, t - e, i - n));
        }
      }
      let b = this.gps;
      if (b.waypoint && b.count >= 2) {
        let e = b.pts;
        ((r.lineJoin = `round`),
          (r.lineCap = `round`),
          r.beginPath(),
          r.moveTo(e[0], e[1]));
        for (let t = 1; t < b.count; t++) r.lineTo(e[t * 2], e[t * 2 + 1]);
        let t = b.colors;
        ((r.strokeStyle = t.glow),
          (r.lineWidth = (9 * s) / c),
          r.stroke(),
          (r.strokeStyle = t.core),
          (r.lineWidth = (4 * s) / c),
          r.stroke());
      }
      try {
        let e = t.police.evading ? t.police.searchArea : null;
        if (e && e.r > 0) {
          n = !0;
          let i = Math.floor(t.time.real * 2) % 2 == 0;
          (r.beginPath(),
            r.arc(e.x, e.z, e.r, 0, ki),
            (r.fillStyle = i
              ? `rgba(255,45,60,0.16)`
              : `rgba(45,107,255,0.16)`),
            r.fill(),
            (r.lineWidth = (2 * s) / c),
            (r.strokeStyle = i
              ? `rgba(255,90,100,0.8)`
              : `rgba(110,150,255,0.8)`),
            r.setLineDash([(7 * s) / c, (5 * s) / c]),
            r.stroke(),
            r.setLineDash([]));
        }
      } catch {}
      (r.restore(), r.setTransform(1, 0, 0, 1, 0, 0));
      let x = t.time.real,
        S = Math.round(19 * s),
        C = Math.round(14 * s),
        w = o - S * 0.62,
        ee = this.shopXZ,
        T = (o + C) / c;
      for (let e = 0; e < ee.length; e += 2) {
        let t = ee[e] - u,
          n = ee[e + 1] - d;
        if (t > T || t < -T || n > T || n < -T) continue;
        let i = a + (t * p + n * m) * c,
          s = a + (-t * m + n * p) * c,
          l = i - a,
          f = s - a;
        l * l + f * f > (o - C * 0.5) ** 2 ||
          ((r.globalAlpha = 0.92),
          r.drawImage(ft(this.shopBrand[e >> 1], C), i - C / 2, s - C / 2));
      }
      r.globalAlpha = 1;
      try {
        let e = t.culture.garbageTrucks;
        for (let t = 0; t < e.length; t++) {
          let i = e[t];
          this.drawBlipAt(
            r,
            `garbage`,
            null,
            i.x - u,
            i.z - d,
            p,
            m,
            c,
            a,
            o,
            w,
            i.playing,
            i.playing ? 0.5 + 0.5 * Math.sin(x * 6) : 0,
            `#f5d000`,
            S,
            x,
          ) && (n = !0);
        }
      } catch {}
      let E = this.bp;
      ((E.px = u),
        (E.pz = d),
        (E.cos = p),
        (E.sin = m),
        (E.z = c),
        (E.c = a),
        (E.R = o),
        (E.edge = w),
        (E.icon = S),
        (E.t = x),
        (this.bg = r),
        (this.blipAnim = !1),
        this.blips.map.forEach(this.eachBlip),
        this.blipAnim && (n = !0));
      let D = b.waypoint;
      if (D) {
        let e = b.colors.blip;
        (this.drawBlipAt(
          r,
          `waypoint`,
          null,
          D.x - u,
          D.z - d,
          p,
          m,
          c,
          a,
          o,
          w,
          !0,
          +!D.user,
          e,
          S,
          x,
        ),
          D.user || (n = !0));
      }
      let O = 0;
      try {
        O = t.police.level;
      } catch {}
      if (O > 0) {
        n = !0;
        try {
          let e = t.vehicles.list,
            n = Math.floor(x * 6) % 2 == 0;
          for (let t = 0; t < e.length; t++) {
            let i = e[t];
            if (i.kind !== `police` || i.destroyed || i.driver === `player`)
              continue;
            let o = i.body.x - u,
              l = i.body.z - d,
              f = (o * p + l * m) * c,
              h = (-o * m + l * p) * c,
              g = Math.hypot(f, h);
            (g > w && ((f *= w / g), (h *= w / g)),
              (r.fillStyle = n ? `#ff2d3c` : `#2d6bff`),
              r.beginPath(),
              r.arc(a + f, a + h, 5 * s, 0, ki),
              r.fill(),
              (r.lineWidth = 1.5 * s),
              (r.strokeStyle = `#0b0d12`),
              r.stroke());
          }
        } catch {}
      }
      let te = t.player.heading ?? 0,
        ne = e ? (Fi(t)?.heading ?? te) : te,
        re = Math.round(24 * s);
      (r.setTransform(1, 0, 0, 1, a, a),
        r.rotate(ne - f),
        r.drawImage(lt(re), -re / 2, -re / 2),
        r.setTransform(1, 0, 0, 1, 0, 0));
      let k = v ? v.bearing : 0,
        A = k ? Math.sin(f + k) : m,
        ie = k ? Math.cos(f + k) : p,
        ae = a - A * (o - 11 * s),
        oe = a - ie * (o - 11 * s),
        se = this.kit.lang + this.northFont;
      if (!this.northSprite || this.northKey !== se) {
        this.northKey = se;
        let e = Math.ceil(20 * s),
          t = this.northSprite ?? document.createElement(`canvas`);
        t.width = t.height = e;
        let n = t.getContext(`2d`);
        ((n.fillStyle = `rgba(10,12,18,0.85)`),
          n.beginPath(),
          n.arc(e / 2, e / 2, 9 * s, 0, ki),
          n.fill(),
          (n.fillStyle = `#ffffff`),
          (n.font = this.northFont),
          (n.textAlign = `center`),
          (n.textBaseline = `middle`),
          n.fillText(
            this.kit.lang === `en` ? `N` : `北`,
            e / 2,
            e / 2 + 0.5 * s,
          ),
          (this.northSprite = t));
      }
      let ce = this.northSprite;
      (r.drawImage(ce, ae - ce.width / 2, oe - ce.height / 2),
        (this.animated = n),
        (this.dX = u),
        (this.dZ = d),
        (this.dYaw = f),
        (this.dHead = ne),
        (this.dZoom = this.zoom),
        (this.dBlips = this.blips.rev),
        (this.dGps = b.rev),
        (this.dLang = this.kit.lang),
        (this.dVeh = e));
    }
    view = { minX: 0, maxX: 0, minZ: 0, maxZ: 0 };
    bg = null;
    bp = {
      px: 0,
      pz: 0,
      cos: 1,
      sin: 0,
      z: 1,
      c: 0,
      R: 0,
      edge: 0,
      icon: 0,
      t: 0,
    };
    blipAnim = !1;
    eachBlip = (e) => {
      if (e.mapOnly) return;
      let t = this.bp,
        n = e.icon === `police-car` ? (Math.floor(t.t * 5) % 2 ? 1 : 0.35) : 1;
      this.drawBlipAt(
        this.bg,
        e.icon,
        e,
        e.x - t.px,
        e.z - t.pz,
        t.cos,
        t.sin,
        t.z,
        t.c,
        t.R,
        t.edge,
        e.clampToEdge,
        +!!e.pulse,
        e.color,
        t.icon,
        t.t,
        n,
      ) &&
        (e.pulse || e.icon === `police-car`) &&
        (this.blipAnim = !0);
    };
    northSprite = null;
    northKey = ``;
    drawBlipAt(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g = 1) {
      let _ = (r * a + i * o) * s,
        v = (-r * o + i * a) * s,
        y = Math.hypot(_, v),
        b = m;
      if (y > u) {
        if (d) ((_ *= u / y), (v *= u / y), (b = m * 0.82));
        else if (y > l + m * 0.5) return !1;
      }
      let x;
      n
        ? ((!n.spr || n.sprPx !== m) &&
            ((n.spr = dt(n.icon, m, n.color, n.glyph)), (n.sprPx = m)),
          (x = n.spr))
        : (x = t === `garbage` ? dt(`garbage`, m) : dt(t, m, p));
      let S = c + _,
        C = c + v;
      if (f > 0) {
        let t = (h * 0.9) % 1;
        ((e.globalAlpha = (1 - t) * 0.8 * g),
          (e.strokeStyle = p),
          (e.lineWidth = 2 * this.dpr),
          e.beginPath(),
          e.arc(S, C, b * (0.45 + t * 0.7), 0, ki),
          e.stroke());
      }
      return (
        (e.globalAlpha = g),
        e.drawImage(x, S - b / 2, C - b / 2, b, b),
        (e.globalAlpha = 1),
        !0
      );
    }
    setVisible(e) {
      this.el.classList.toggle(`hidden`, !e);
    }
    get label() {
      return G.map;
    }
  };
