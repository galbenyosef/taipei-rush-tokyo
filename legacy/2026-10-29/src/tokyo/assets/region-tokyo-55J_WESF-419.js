// tokyo/assets/region-tokyo-55J_WESF 419 — math
// Lines 150310-150649 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function nLe() {
  if (l4) return;
  l4 = !0;
  let e = lee;
  (Object.assign(e[0], {
    T: 1,
    s0: 1,
    a: 2.6,
    b: 3.2,
    speedLo: 0.7,
    speedHi: 0.95,
    latSpeed: 1,
    reactLo: 0.3,
    reactHi: 0.85,
  }),
    Object.assign(e[8], {
      T: 1,
      s0: 1.1,
      speedLo: 0.92,
      speedHi: 1.12,
      reactLo: 0.3,
      reactHi: 0.8,
    }),
    Object.assign(e[1], {
      T: 1.05,
      speedLo: 0.95,
      speedHi: 1.15,
      reactLo: 0.35,
      reactHi: 0.9,
    }),
    Object.assign(e[2], { T: 1.3, speedLo: 0.9, speedHi: 1.1, latSpeed: 1.05 }),
    Object.assign(e[3], { T: 1.3, speedLo: 0.9, speedHi: 1.08 }),
    Object.assign(e[4], { T: 1.35, speedLo: 0.88, speedHi: 1.05 }),
    Object.assign(e[5], { a: 1.8, speedLo: 0.82, speedHi: 1 }));
  let t = { ...e[2], day: 14, night: 8, a: 2, speedLo: 0.86, speedHi: 1.06 },
    n = { ...e[1], day: 4, night: 8 };
  zee(
    [`kei`, `cab`, `mamachari`],
    [
      t,
      n,
      {
        day: 5,
        night: 1.5,
        majorOnly: !1,
        T: 1.1,
        s0: 1,
        a: 1.1,
        b: 2.4,
        speedLo: 1,
        speedHi: 1,
        latSpeed: 0.7,
        aLat: 2.4,
        reactLo: 0.5,
        reactHi: 1.3,
        horn: `bike_bell`,
      },
    ],
    s4,
    c4,
  );
}
function rLe(e) {
  let t = 0.001 + e * 0.998,
    n = Math.sin(t * 53.1 + 9.3) * 43758.5453123;
  return Math.floor((n - Math.floor(n)) * 8) & 7;
}
var iLe = new Set([`ginza`, `shimbashi`, `marunouchi`, `nihonbashi`]),
  aLe = 3,
  oLe = 0.75,
  sLe = class extends see {
    T;
    nk;
    mixes = new Map();
    majOnly;
    wD;
    wN;
    district = ``;
    tick = 0;
    inFill = !1;
    closures = [];
    tqT = 0;
    tqRef = 0;
    tqCur = 0;
    tqIds = [];
    constructor(e, t) {
      (super(e, t),
        (this.T = t),
        (this.nk = ot.length),
        (this.majOnly = new Uint8Array(this.nk)));
      for (let e = 0; e < this.nk; e++) {
        let t = J0.find((t) => t.kind === ot[e]);
        this.majOnly[e] = +!!t?.majorOnly;
      }
      [this.wD, this.wN] = this.mixOf(``);
      for (let t of e.plan.dataset.closures ?? [])
        this.closures.push({
          def: t,
          ids: ef(e.plan, t).map((e) => e.id),
          on: !1,
        });
      ((this.scootWant = -1), (this.exprScale = aLe));
    }
    mixOf(e) {
      let t = this.mixes.get(e);
      if (!t) {
        let n = new Float32Array(this.nk),
          r = new Float32Array(this.nk),
          i = e || null;
        for (let e = 0; e < this.nk; e++)
          ((n[e] = Y0(ot[e], i, !1)), (r[e] = Y0(ot[e], i, !0)));
        ((t = [n, r]), this.mixes.set(e, t));
      }
      return t;
    }
    tkw(e, t, n, r) {
      return (this.majOnly[e] && !r) || (e === 6 && !n)
        ? 0
        : this.wD[e] + (this.wN[e] - this.wD[e]) * t;
    }
    pickKind(e) {
      let t = this.night(),
        n = this.hour(),
        r = e && !(n >= 0.5 && n < 5.5),
        i = 0;
      for (let n = 0; n < this.nk; n++) i += this.tkw(n, t, r, e);
      let a = this.sim.rng.next() * i;
      for (let n = 0; n < this.nk; n++)
        if (((a -= this.tkw(n, t, r, e)), a <= 0)) return n;
      return 2;
    }
    shareH() {
      let e = this.night(),
        t = 0,
        n = 0;
      for (let r = 0; r < this.nk; r++) {
        let i = this.tkw(r, e, !0, !0);
        ((t += i), ree(r) && (n += i));
      }
      return t > 0 ? n / t : 0;
    }
    activate(e, t, n, r, i, a = !0) {
      if (this.T.closed[t]) return null;
      (this.inFill && e === 0 && this.sim.rng.next() < 0.6 && (e = c4),
        e === c4 && (n = this.sim.links[t].lanes - 1));
      let o = super.activate(e, t, n, r, i, a);
      return o
        ? ((o.jumpy = !1),
          o.kind === c4
            ? ((o.box = 0), (o.passenger = !1), (o.midLane = !1))
            : o.kind === 6 && this.T.assignRoute(o, rLe(o.seed)),
          o)
        : null;
    }
    initialFill() {
      (this.refresh(), (this.inFill = !0));
      try {
        super.initialFill();
      } finally {
        this.inFill = !1;
      }
    }
    placeMoving(e, t, n, r, i) {
      return (
        n === 0 && this.sim.rng.next() > 0.1 && (n = -1),
        super.placeMoving(e, t, n, r, i)
      );
    }
    feedQueues(e, t) {
      if ((this.tqT -= e) > 0) return;
      this.tqT = 0.4;
      let n = this.sim,
        r = n.net;
      if ((this.tqRef -= 0.4) <= 0) {
        ((this.tqRef = 1.6),
          r.gatherLinks(this.camX, this.camZ, 0, mee.queueRange, this.tqIds));
        let e = 0;
        for (let t of this.tqIds) {
          let i = n.links[t];
          !r.sig[t] ||
            i.pedestrian ||
            i.length < 32 ||
            r.expr[t] ||
            this.T.closed[t] ||
            (this.tqIds[e++] = t);
        }
        this.tqIds.length = e;
      }
      let i = this.tqIds.length;
      if (!i) return;
      let a = this.ctx.signals;
      for (let e = 0; e < Math.min(2, i); e++) {
        let e = this.tqIds[this.tqCur++ % i],
          o = n.links[e],
          s = r.axis[e] === 0 ? `x` : `z`;
        if (a.state(o.to, s) !== `red` || a.remaining(o.to, s) < 8) continue;
        let c = 0;
        for (let t = n.hL(e); t >= 0; t = n.nextL[t]) {
          let e = n.cars[t];
          e.active && !e.two && o.length - e.s < 34 && e.v < 1 && c++;
        }
        let l = Math.round(
          (1 + o.lanes * (0.5 + this.rk * 1.2)) * this.densH(),
        );
        if (c >= l) continue;
        let u = Math.min(t - n.active.length, 6);
        if (u <= 0) return;
        let d = o.ex - o.dx * 9,
          f = o.ez - o.dz * 9,
          p = Math.hypot(d - this.camX, f - this.camZ),
          m = Math.hypot(d - n.px, f - n.pz);
        if (m > 120 || p < 16) continue;
        let h = (d - this.camX) * this.cfx + (f - this.camZ) * this.cfz < -20,
          g = o.dx * (d - n.px) + o.dz * (f - n.pz) > 0;
        if (
          (h && g && m > 60) ||
          (this.inView(d, f, 13) &&
            p < this.vMin &&
            !this.occluded(o.ex - o.dx * 4, o.ez - o.dz * 4))
        )
          continue;
        let _ = this.seedQueue(e, u, 0, 0, 1 + Math.round(this.rk * 2));
        if (_ > 0) {
          this.queued += _;
          return;
        }
      }
    }
    update(e) {
      (super.update(e),
        (this.tick -= e) <= 0 && ((this.tick = 1), this.refresh()));
    }
    refresh() {
      let e = this.sim,
        t = this.ctx,
        n = ``;
      try {
        n = t.plan.districtAt(e.px, e.pz)?.id ?? ``;
      } catch {
        n = ``;
      }
      if (
        (n !== this.district &&
          ((this.district = n), ([this.wD, this.wN] = this.mixOf(n))),
        (this.T.hailK = (iLe.has(n) ? 1.6 : 1) * (1 + this.night() * 0.8)),
        !this.closures.length)
      )
        return;
      let r = t.time,
        i = r?.date,
        a = this.hour();
      for (let t of this.closures) {
        let n =
            !!i &&
            (Qd(t.def, i, r.weekday, a) || Qd(t.def, i, r.weekday, a + oLe)),
          o = n && !t.on && Qd(t.def, i, r.weekday, a);
        if ((n !== t.on && ((t.on = n), this.T.setClosed(t.ids, n)), n))
          for (let t = e.active.length - 1; t >= 0; t--) {
            let n = e.active[t];
            n.mode === 0 &&
              this.T.closed[n.link] &&
              (o || !n.visible) &&
              this.despawn(n);
          }
      }
    }
  },
  u4 = [
    [
      `harumi`,
      `sotobori-ginza`,
      `sotobori-shimbashi`,
      `shin-ohashi-tsukiji`,
      `shin-ohashi-shiodome`,
      `daiichi-keihin`,
    ],
    [
      `yaesu`,
      `sotobori-yaesu`,
      `showa-ginza`,
      `showa-nihonbashi`,
      `showa-edobashi`,
      `edo-kodemmacho`,
      `edo-asakusabashi`,
    ],
    [`babasaki`, `hibiya`, `harumi`],
    [`chuo-ueno`, `asakusa`, `kototoi`],
    [`kasuga`, `chuo-ueno`, `hongo`],
    [`chuo-akihabara`, `yasukuni`, `kuramaebashi`, `sotobori-ochanomizu`],
    [`hibiya`, `harumi`, `babasaki`],
    [
      `yaesu`,
      `sotobori-yaesu`,
      `eitai`,
      `chuo-nihonbashi`,
      `shin-ohashi-ningyocho`,
    ],
  ],
  cLe = [
    [-15, 395],
    [30, 575],
    [-15, 585],
  ];
function lLe(e, t) {
  let n = new Uint8Array(t);
  for (let t of e.links)
    for (let e = 0; e < u4.length; e++)
      u4[e].includes(t.road.id) && (n[t.id] |= 1 << e);
  return n;
}
function uLe(e, t, n) {
  let r = (t - e.sx) * e.dx + (n - e.sz) * e.dz;
  return (
    (r = r < 0 ? 0 : r > e.length ? e.length : r),
    [Math.hypot(e.sx + e.dx * r - t, e.sz + e.dz * r - n), r]
  );
}
function d4(e, t) {
  let n = new Float32Array(t).fill(-1),
    r = [];
  for (let t of e.dataset.stations ?? [])
    t.line === `JY` && r.push([t.x, t.z, 2]);
  for (let [e, t] of cLe) r.push([e, t, 1]);
  for (let [t, i, a] of r) {
    let r = [];
    for (let n of e.links) {
      if (n.pedestrian || n.length < 50 || n.road.kind === `lane`) continue;
      let [e, a] = uLe(n, t, i);
      e > 75 || r.push([e, n.id, Math.max(16, Math.min(n.length - 18, a))]);
    }
    r.sort((e, t) => e[0] - t[0]);
    for (let e = 0; e < Math.min(a, r.length); e++) n[r[e][1]] = r[e][2];
  }
  return n;
}
var dLe = [`1`],
  f4 = 11,
  p4 = 0.4,
  m4 = 3.05,
  h4 = new WeakMap();
