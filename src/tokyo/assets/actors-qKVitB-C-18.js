// tokyo/assets/actors-qKVitB-C 18 — math
// Lines 5435-5730 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function $o(e) {
  let t = Go[e],
    n = Qo[e],
    r = t.maxSpeed * 1.02,
    i = t.accel * (1 - (1.02 / Yo) ** Xo);
  n.drag = Math.max(5e-5, (i - Zo) / (r * r));
}
for (let e of Ho) $o(e);
var es = class {
  closed;
  xs;
  zs;
  cum;
  length;
  n;
  constructor(e, t = !1) {
    this.closed = t;
    let n = t && e.length > 2 ? [...e, e[0]] : e;
    ((this.n = n.length),
      (this.xs = new Float64Array(this.n)),
      (this.zs = new Float64Array(this.n)),
      (this.cum = new Float64Array(this.n)));
    let r = 0;
    for (let e = 0; e < this.n; e++)
      ((this.xs[e] = n[e].x),
        (this.zs[e] = n[e].z),
        e > 0 &&
          (r += Math.hypot(
            this.xs[e] - this.xs[e - 1],
            this.zs[e] - this.zs[e - 1],
          )),
        (this.cum[e] = r));
    this.length = Math.max(r, 0.001);
  }
  wrap(e) {
    return this.closed
      ? ((e %= this.length), e < 0 && (e += this.length), e)
      : e < 0
        ? 0
        : e > this.length
          ? this.length
          : e;
  }
  segAt(e) {
    e = this.wrap(e);
    let t = 0,
      n = this.n - 2;
    for (; t < n;) {
      let r = (t + n + 1) >> 1;
      this.cum[r] <= e ? (t = r) : (n = r - 1);
    }
    return Math.max(0, t);
  }
  pointAt(e, t) {
    e = this.wrap(e);
    let n = this.segAt(e),
      r = this.cum[n + 1] - this.cum[n] || 1e-6,
      i = (e - this.cum[n]) / r;
    return (
      (t.x = this.xs[n] + (this.xs[n + 1] - this.xs[n]) * i),
      (t.z = this.zs[n] + (this.zs[n + 1] - this.zs[n]) * i),
      t
    );
  }
  dirAt(e, t) {
    let n = this.segAt(e),
      r = this.xs[n + 1] - this.xs[n],
      i = this.zs[n + 1] - this.zs[n],
      a = Math.hypot(r, i) || 1;
    return ((t.x = r / a), (t.z = i / a), t);
  }
  project(e, t, n, r = -1, i = 6) {
    let a = 0,
      o = this.n - 2;
    r >= 0 && ((a = r - i), (o = r + i));
    let s = 1 / 0,
      c = 0,
      l = 0,
      u = this.n - 1;
    for (let n = a; n <= o; n++) {
      let r = n;
      if (this.closed) r = ((n % u) + u) % u;
      else if (r < 0 || r > u - 1) continue;
      let i = this.xs[r],
        a = this.zs[r],
        o = this.xs[r + 1] - i,
        d = this.zs[r + 1] - a,
        f = o * o + d * d || 1e-9,
        p = ((e - i) * o + (t - a) * d) / f;
      p = p < 0 ? 0 : p > 1 ? 1 : p;
      let m = i + o * p,
        h = a + d * p,
        g = (m - e) * (m - e) + (h - t) * (h - t);
      g < s && ((s = g), (l = r), (c = this.cum[r] + Math.sqrt(f) * p));
    }
    return ((n.s = c), (n.seg = l), (n.dist = Math.sqrt(s)), n);
  }
};
function ts(e, t, n, r) {
  let i = e.linkBetween(t, n);
  if (!i) return Ve(0, 0, e.laneWidth, e.side);
  let a = Math.min(r, i.lanes - 1);
  return Ve(i.road.median / 2, a, e.laneWidth, e.side);
}
function ns(e, t, n, r = !1, i = 11) {
  let a = [];
  for (let e of t) a[a.length - 1] !== e && a.push(e);
  r && a.length > 2 && a[0] === a[a.length - 1] && a.pop();
  let o = a.length;
  if (o < 2) return a.map((t) => ({ x: e.nodes[t].x, z: e.nodes[t].z }));
  let s = r ? o : o - 1,
    c = [];
  for (let t = 0; t < s; t++) {
    let r = e.nodes[a[t]],
      i = e.nodes[a[(t + 1) % o]],
      s = i.x - r.x,
      l = i.z - r.z,
      u = Math.hypot(s, l) || 1;
    ((s /= u), (l /= u));
    let d = ts(e, r.id, i.id, n),
      f = -l,
      p = s;
    c.push({
      ax: r.x + f * d,
      az: r.z + p * d,
      bx: i.x + f * d,
      bz: i.z + p * d,
      dx: s,
      dz: l,
    });
  }
  let l = [],
    u = (e, t) => {
      let n = l[l.length - 1];
      (!n || Math.hypot(n.x - e, n.z - t) > 0.5) && l.push({ x: e, z: t });
    };
  r || u(c[0].ax, c[0].az);
  let d = (e, t) => {
    let n = e.dx * t.dz - e.dz * t.dx;
    if (Math.abs(n) < 0.05) {
      u(e.bx, e.bz);
      return;
    }
    let r = ((t.ax - e.ax) * t.dz - (t.az - e.az) * t.dx) / n,
      a = e.ax + e.dx * r,
      o = e.az + e.dz * r,
      s = Math.hypot(e.bx - e.ax, e.bz - e.az),
      c = Math.hypot(t.bx - t.ax, t.bz - t.az),
      l = e.dx * t.dx + e.dz * t.dz,
      d = Math.min(l < -0.5 ? 6 : i, s * 0.45, c * 0.45),
      f = a - e.dx * d,
      p = o - e.dz * d,
      m = a + t.dx * d,
      h = o + t.dz * d;
    for (let e = 0; e <= 7; e++) {
      let t = e / 7,
        n = 1 - t;
      u(
        n * n * f + 2 * n * t * a + t * t * m,
        n * n * p + 2 * n * t * o + t * t * h,
      );
    }
  };
  for (let e = 0; e < s - +!r; e++) d(c[e], c[(e + 1) % s]);
  return (r || u(c[s - 1].bx, c[s - 1].bz), l);
}
function rs(e, t, n = !1) {
  let r = [],
    i = n ? t.length : t.length - 1;
  for (let n = 0; n < i; n++) {
    let i = t[n],
      a = t[(n + 1) % t.length],
      o = e.findRoute(i.x, i.z, a.x, a.z);
    for (let e of o) r[r.length - 1] !== e && r.push(e);
  }
  return r;
}
function is(e, t, n) {
  let r = e.snapToSidewalk(t, n),
    i = (t, n, r) => {
      if (e.surfaceAt(t, n) !== `sidewalk`) return !1;
      let i = r.axis === `x` ? 3 : 0,
        a = r.axis === `x` ? 0 : 3;
      return (
        e.surfaceAt(t + i, n + a) === `sidewalk` &&
        e.surfaceAt(t - i, n - a) === `sidewalk`
      );
    };
  if (!r.road || i(r.x, r.z, r.road)) return r;
  let a = r.road;
  for (let e = 1; e <= 30; e++)
    for (let t of [1, -1]) {
      let n = t * e * 2,
        o = a.axis === `x` ? r.x + n : r.x,
        s = a.axis === `x` ? r.z : r.z + n,
        c = a.axis === `x` ? o : s;
      if (!(c < a.from + 3 || c > a.to - 3) && i(o, s, a))
        return { x: o, z: s, facing: r.facing, road: a };
    }
  return r;
}
function as(e, t, n, r = 1.7, i = 1) {
  if (!e) return { x: t, z: n, heading: 0 };
  if (e.axis === `x`) {
    let a = Math.sign(n - e.at) || 1;
    return { x: t, z: e.at + a * (e.halfWidth - r), heading: Ft(`x`, a, i) };
  }
  let a = Math.sign(t - e.at) || 1;
  return { x: e.at + a * (e.halfWidth - r), z: n, heading: Ft(`z`, a, i) };
}
function os(e, t, n) {
  if (!e) return { x: t, z: n, heading: 0 };
  let r = e.halfWidth + 1;
  if (e.axis === `x`) {
    let i = Math.sign(n - e.at) || 1;
    return { x: t, z: e.at + i * r, heading: i > 0 ? 0 : Math.PI };
  }
  let i = Math.sign(t - e.at) || 1;
  return { x: e.at + i * r, z: n, heading: i > 0 ? -Math.PI / 2 : Math.PI / 2 };
}
var ss = class e {
  xs = [];
  zs = [];
  adj = [];
  grid = new Map();
  static CELL = 40;
  constructor(t) {
    let n = (e) => (e ? e.sidewalk * 0.5 : 1.5);
    for (let e of t.blocks) {
      let t = e.minX - n(e.west),
        r = e.maxX + n(e.east),
        i = e.minZ - n(e.north),
        a = e.maxZ + n(e.south),
        o = this.add(t, i),
        s = this.add(r, i),
        c = this.add(r, a),
        l = this.add(t, a);
      (this.link(o, s), this.link(s, c), this.link(c, l), this.link(l, o));
    }
    let r = e.CELL;
    for (let e = 0; e < this.xs.length; e++) {
      let t = Math.floor(this.xs[e] / r),
        n = Math.floor(this.zs[e] / r);
      for (let r = -1; r <= 1; r++)
        for (let i = -1; i <= 1; i++) {
          let a = this.grid.get(cs(t + i, n + r));
          if (a)
            for (let t of a) {
              if (t <= e || this.adj[e].includes(t)) continue;
              let n = Math.abs(this.xs[t] - this.xs[e]),
                r = Math.abs(this.zs[t] - this.zs[e]);
              ((n < 1.6 && r > 2 && r < 48) || (r < 1.6 && n > 2 && n < 48)) &&
                this.link(e, t);
            }
        }
    }
  }
  add(t, n) {
    let r = this.xs.length;
    (this.xs.push(t), this.zs.push(n), this.adj.push([]));
    let i = cs(Math.floor(t / e.CELL), Math.floor(n / e.CELL)),
      a = this.grid.get(i);
    return (a || this.grid.set(i, (a = [])), a.push(r), r);
  }
  link(e, t) {
    e === t ||
      this.adj[e].includes(t) ||
      (this.adj[e].push(t), this.adj[t].push(e));
  }
  nearest(t, n) {
    let r = e.CELL,
      i = Math.floor(t / r),
      a = Math.floor(n / r),
      o = -1,
      s = 1 / 0;
    for (let e = 1; e <= 4 && o < 0; e++)
      for (let r = -e; r <= e; r++)
        for (let c = -e; c <= e; c++) {
          let e = this.grid.get(cs(i + c, a + r));
          if (e)
            for (let r of e) {
              let e = (this.xs[r] - t) ** 2 + (this.zs[r] - n) ** 2;
              e < s && ((s = e), (o = r));
            }
        }
    if (o < 0)
      for (let e = 0; e < this.xs.length; e++) {
        let r = (this.xs[e] - t) ** 2 + (this.zs[e] - n) ** 2;
        r < s && ((s = r), (o = e));
      }
    return o;
  }
};
function cs(e, t) {
  return (t + 4096) * 8192 + (e + 4096);
}
