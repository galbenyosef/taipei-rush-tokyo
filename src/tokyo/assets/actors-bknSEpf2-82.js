// tokyo/assets/actors-bknSEpf2 82 — math
// Lines 34395-34719 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
var Ix = class {
  plan;
  links;
  nL;
  nN;
  axis;
  major;
  sig;
  deadEnd;
  box;
  stopCar;
  stopScoot;
  twoStage;
  turnStart;
  turnCount;
  turnOut;
  turnType;
  opposing;
  feeder;
  busStop;
  curb;
  medianHalf;
  side;
  laneWidth;
  nPlan;
  expr;
  thru;
  rampIn;
  rampSide;
  profStart;
  profCount;
  prof;
  gx0;
  gz0;
  gw;
  gh;
  cellStart;
  cellLinks;
  stamp;
  stampN = 1;
  constructor(e, t) {
    this.plan = e;
    let n = e.links,
      r = e.nodes,
      i = (this.side = e.side);
    this.laneWidth = e.laneWidth;
    let a = null;
    if (t?.expressways?.length && t.groundAt)
      try {
        ((a = Dx(e, t.expressways, n.length, r.length, t.groundAt)),
          a.links.length || (a = null));
      } catch (e) {
        (console.warn(`[traffic] expressway lanes skipped`, e), (a = null));
      }
    let o = a ? n.concat(a.links) : n;
    ((this.links = o), (this.nPlan = n.length));
    let s = (this.nL = o.length);
    if (
      ((this.nN = r.length + (a ? a.nodes.length : 0)),
      (this.expr = new Uint8Array(s)),
      (this.thru = new Uint8Array(s)),
      (this.rampIn = new Uint8Array(s)),
      (this.rampSide = new Uint8Array(s)),
      a)
    )
      for (let e of a.side) this.rampSide[e] = 1;
    ((this.profStart = new Int32Array(s)),
      (this.profCount = new Int32Array(s)),
      (this.prof = new Float32Array(a ? a.prof : [])),
      (this.axis = new Uint8Array(s)),
      (this.major = new Uint8Array(s)),
      (this.sig = new Uint8Array(s)),
      (this.deadEnd = new Uint8Array(s)),
      (this.box = new Uint8Array(s)),
      (this.stopCar = new Float32Array(s)),
      (this.stopScoot = new Float32Array(s)),
      (this.twoStage = new Uint8Array(s)),
      (this.turnStart = new Int32Array(s)),
      (this.turnCount = new Uint8Array(s)),
      (this.opposing = new Int32Array(s).fill(-1)),
      (this.feeder = new Int32Array(s).fill(-1)),
      (this.busStop = new Float32Array(s).fill(-1)),
      (this.curb = new Float32Array(s)),
      (this.medianHalf = new Float32Array(s)));
    let c = [],
      l = [];
    for (let e of o) {
      if (e.id >= this.nPlan) {
        this.virtualLink(e, a, r, c, l);
        continue;
      }
      let n = r[e.to];
      ((this.axis[e.id] = e.road.axis === `x` ? 0 : 1),
        (this.major[e.id] = +!!e.road.major),
        (this.sig[e.id] = +!!n.signal),
        (this.deadEnd[e.id] = +(n.kind === `end`)),
        (this.curb[e.id] = e.road.halfWidth),
        (this.medianHalf[e.id] = e.road.median * 0.5));
      let s = t?.boxDepth ?? dx.boxDepth,
        u;
      if (t?.hasBox) {
        let n = !1;
        try {
          n = t.hasBox(e.id);
        } catch {
          n = !1;
        }
        u = n && e.length > s + 10 && !e.pedestrian;
      } else
        u =
          i > 0 &&
          n.signal &&
          e.road.major &&
          e.lanes >= 2 &&
          e.length > 28 &&
          !e.pedestrian;
      ((this.box[e.id] = +!!u),
        (this.stopScoot[e.id] = Math.max(0.5, e.length - 0.4)),
        (this.stopCar[e.id] = u
          ? e.length - s - 0.45
          : Math.max(0.5, e.length - 0.4)),
        (this.twoStage[e.id] = (
          i > 0
            ? u && (!t?.turnLinks || t.turnLinks.has(e.id))
            : n.signal && e.lanes >= 3 && !e.pedestrian
        )
          ? 1
          : 0),
        (this.turnStart[e.id] = c.length));
      let d = 0;
      for (let t of n.out) {
        let n = o[t];
        if (n.pedestrian) continue;
        let r = Qe(bt(n.heading - e.heading), i);
        (c.push(t), l.push(r), d++);
      }
      let f = a?.rampOut.get(n.id);
      if (f)
        for (let t of f) {
          let n = o[t];
          if (this.rampSide[t]) {
            let r = Qe(bt(n.heading - e.heading), i);
            if (r === Nx) continue;
            (c.push(t), l.push(r === Ax ? jx : r), d++);
            continue;
          }
          !Fx(n.road, e.road) ||
            Math.abs(bt(n.heading - e.heading)) > 0.35 ||
            (c.push(t), l.push(Ax), d++);
        }
      this.turnCount[e.id] = d;
      for (let t of n.in) {
        let n = o[t];
        n.id !== e.id &&
          Fx(n.road, e.road) &&
          Math.abs(bt(n.heading - e.heading)) > 2.8 &&
          (this.opposing[e.id] = n.id);
      }
      let p = r[e.from];
      for (let t of p.in) {
        let n = o[t];
        Fx(n.road, e.road) &&
          Math.abs(bt(n.heading - e.heading)) < 0.35 &&
          (this.feeder[e.id] = n.id);
      }
      !t?.busStops &&
        e.road.major &&
        e.length > 70 &&
        !e.pedestrian &&
        Ke(e.id, `bus`) % 3 == 0 &&
        (this.busStop[e.id] = e.length * 0.52);
    }
    if (
      ((this.turnOut = Int32Array.from(c)),
      (this.turnType = Uint8Array.from(l)),
      t?.busStops)
    )
      for (let n of t.busStops) {
        let t = e.nearestLink(n.curbX, n.curbZ);
        if (!t || t.dist > 6) continue;
        let r = t.link;
        if (Math.abs(bt(r.heading - n.busHeading)) > 0.4) continue;
        let i = (n.curbX - r.sx) * r.dx + (n.curbZ - r.sz) * r.dz;
        i < 18 ||
          i > r.length - 16 ||
          ((this.busStop[r.id] < 0 || i < this.busStop[r.id]) &&
            (this.busStop[r.id] = i));
      }
    let u = e.bounds;
    ((this.gx0 = Math.floor((u.minX - 40) / Px)),
      (this.gz0 = Math.floor((u.minZ - 40) / Px)),
      (this.gw = Math.floor((u.maxX + 40) / Px) - this.gx0 + 1),
      (this.gh = Math.floor((u.maxZ + 40) / Px) - this.gz0 + 1));
    let d = [];
    for (let e = 0; e < this.gw * this.gh; e++) d.push([]);
    for (let e of o) {
      if (e.pedestrian) continue;
      let t = Math.max(1, Math.ceil(e.length / 16)),
        n = -1;
      for (let r = 0; r <= t; r++) {
        let i = (e.length * r) / t,
          a = e.sx + e.dx * i,
          o = e.sz + e.dz * i,
          s = this.cellOf(a, o);
        if (s < 0 || s === n) continue;
        let c = d[s];
        (c[c.length - 1] !== e.id && c.push(e.id), (n = s));
      }
    }
    this.cellStart = new Int32Array(d.length + 1);
    let f = 0;
    for (let e = 0; e < d.length; e++)
      ((this.cellStart[e] = f), (f += d[e].length));
    ((this.cellStart[d.length] = f), (this.cellLinks = new Int32Array(f)));
    let p = 0;
    for (let e of d) for (let t of e) this.cellLinks[p++] = t;
    this.stamp = new Uint32Array(s);
  }
  virtualLink(e, t, n, r, i) {
    let a = e.id - this.nPlan,
      o = e.id;
    ((this.expr[o] = 1),
      (this.axis[o] = e.road.axis === `x` ? 0 : 1),
      (this.major[o] = 1),
      (this.curb[o] = t.curb[a]),
      (this.medianHalf[o] = t.medianHalf[a]),
      (this.stopScoot[o] = Math.max(0.5, e.length - 0.4)),
      (this.stopCar[o] = Math.max(0.5, e.length - 0.4)),
      (this.profStart[o] = t.profStart[a]),
      (this.profCount[o] = t.profCount[a]),
      (this.turnStart[o] = r.length));
    let s = 0;
    if (e.to >= n.length) {
      let a = t.nodes[e.to - n.length];
      a.kind === `end` ? (this.deadEnd[o] = 1) : (this.thru[o] = 1);
      for (let e of a.out)
        (r.push(e),
          i.push(this.rampSide[o] || this.rampSide[e] ? jx : Ax),
          s++);
    } else {
      let t = n[e.to];
      this.sig[o] = +!!t.signal;
      for (let n of t.out) {
        let t = this.links[n];
        if (t.pedestrian) continue;
        let a = Qe(bt(t.heading - e.heading), this.side);
        (a === Ax || a === (this.rampSide[o] ? jx : Mx)) &&
          (r.push(n), i.push(a), s++);
      }
      for (let n of t.in) {
        let t = this.links[n];
        Fx(t.road, e.road) &&
          Math.abs(bt(t.heading - e.heading)) > 2.8 &&
          (this.opposing[o] = t.id);
      }
    }
    (e.from < n.length && e.to >= n.length && (this.rampIn[o] = 1),
      (this.turnCount[o] = s));
  }
  yAt(e, t) {
    if (!this.expr[e]) return 0;
    let n = this.profCount[e],
      r = this.profStart[e],
      i = t / 2;
    (i < 0 && (i = 0), i > n - 1 && (i = n - 1));
    let a = Math.floor(i),
      o = a + 1 < n ? a + 1 : a,
      s = i - a;
    return this.prof[r + a] * (1 - s) + this.prof[r + o] * s;
  }
  gradeAt(e, t) {
    return this.expr[e] ? (this.yAt(e, t + 1) - this.yAt(e, t - 1)) * 0.5 : 0;
  }
  cellOf(e, t) {
    let n = Math.floor(e / Px) - this.gx0,
      r = Math.floor(t / Px) - this.gz0;
    return n < 0 || r < 0 || n >= this.gw || r >= this.gh
      ? -1
      : r * this.gw + n;
  }
  laneOff(e, t) {
    return Ht(this.medianHalf[e], t, this.laneWidth);
  }
  gatherLinks(e, t, n, r, i) {
    i.length = 0;
    let a = ++this.stampN,
      o = Math.floor((e - r) / Px) - this.gx0,
      s = Math.floor((e + r) / Px) - this.gx0,
      c = Math.floor((t - r) / Px) - this.gz0,
      l = Math.floor((t + r) / Px) - this.gz0,
      u = this.links,
      d = r * r,
      f = n * n;
    for (let n = Math.max(0, c); n <= Math.min(this.gh - 1, l); n++)
      for (let r = Math.max(0, o); r <= Math.min(this.gw - 1, s); r++) {
        let o = n * this.gw + r;
        for (let n = this.cellStart[o]; n < this.cellStart[o + 1]; n++) {
          let r = this.cellLinks[n];
          if (this.stamp[r] === a) continue;
          this.stamp[r] = a;
          let o = u[r],
            s = e - o.sx,
            c = t - o.sz,
            l = s * o.dx + c * o.dz;
          l = l < 0 ? 0 : l > o.length ? o.length : l;
          let p = o.sx + o.dx * l - e,
            m = o.sz + o.dz * l - t;
          if (p * p + m * m > d) continue;
          let h = o.sx - e,
            g = o.sz - t,
            _ = o.ex - e,
            v = o.ez - t;
          (h * h + g * g < f && _ * _ + v * v < f) || i.push(r);
        }
      }
    return i.length;
  }
};
function Lx(e) {
  return (
    (e = (e + Math.PI) % (2 * Math.PI)),
    e < 0 && (e += 2 * Math.PI),
    e - Math.PI
  );
}
