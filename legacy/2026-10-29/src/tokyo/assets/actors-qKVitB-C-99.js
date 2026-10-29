// tokyo/assets/actors-qKVitB-C 99 — math
// Lines 46503-46810 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function Dw(e, t, n) {
  let r = new T({
    name: e,
    uniforms: t,
    vertexShader: ww,
    fragmentShader: Tw,
    transparent: !0,
    depthWrite: !1,
    blending: n,
    side: 2,
  });
  return ((r.forceSinglePass = !0), r);
}
function Ow(e, t, n) {
  let r = (e * 1.12 + n * 0.37) % 1,
    i = t === 0 ? r : (r + 0.5) % 1;
  return i < 0.5 ? (((i / 0.5) * 3) % 1 < 0.55 ? 1 : 0.06) : 0.04;
}
var kw = [],
  Aw = Lt(),
  jw = Lt(),
  Mw = new L(),
  Nw = (e) => e.kind === `ped`;
function Pw(e, t, n, r, i, a, o, s = 0.8) {
  let c = r - t,
    l = i - n,
    u = Math.hypot(c, l);
  if (u < 1.5) return !1;
  let d = c / u,
    f = l / u,
    p = e.dynamics.query((t + r) / 2, (n + i) / 2, u / 2 + s + 0.5, kw);
  for (let e = 0; e < p; e++) {
    let r = kw[e];
    if (r === a || r === o || !Nw(r)) continue;
    let i = r.x - t,
      c = r.z - n,
      l = i * d + c * f;
    if (!(l < 0.8 || l > u - 0.6) && Math.abs(i * f - c * d) < s + r.radius)
      return !0;
  }
  return !1;
}
function Fw(e, t, n, r) {
  let i = e.dynamics.query(t, n, r, kw),
    a = 0;
  for (let e = 0; e < i; e++) Nw(kw[e]) && a++;
  return a;
}
function Iw(e, t, n, r, i, a, o) {
  let s = e.statics.raycast(t, n, r, Aw),
    c = s ? Aw.distance : r;
  Mw.copy(t);
  let l = 0;
  for (let t = 0; t < 4; t++) {
    let r = e.dynamics.raycast(Mw, n, c - l, i, jw);
    if (!r) break;
    if (Nw(r) && t < 3) {
      let e = jw.distance + r.radius * 2 + 0.1;
      if (((l += e), l >= c)) break;
      Mw.addScaledVector(n, e);
      continue;
    }
    if (Nw(r)) break;
    return (
      (o.distance = l + jw.distance),
      o.point.copy(jw.point),
      o.normal.copy(jw.normal),
      (o.tag = jw.tag),
      (o.body = r),
      (a.point = o.point),
      (a.dir = n),
      r.onDamage?.(a),
      o
    );
  }
  return s
    ? ((o.distance = Aw.distance),
      o.point.copy(Aw.point),
      o.normal.copy(Aw.normal),
      (o.tag = Aw.tag),
      (o.body = null),
      o)
    : null;
}
var Lw = 200,
  Rw = class {
    pts = new Float32Array(400);
    n = 0;
    seg = 0;
    gx = 0;
    gz = 0;
    builtAt = -999;
    nodes = new Int32Array(Lw);
    nodeWp = new Int16Array(Lw);
    nodeAxis = new Uint8Array(Lw);
    nodeCount = 0;
    lp = { x: 0, z: 0 };
    clear() {
      ((this.n = 0), (this.seg = 0), (this.nodeCount = 0));
    }
    push(e, t) {
      this.n >= Lw ||
        ((this.pts[this.n * 2] = e), (this.pts[this.n * 2 + 1] = t), this.n++);
    }
    build(e, t, n, r, i, a, o, s, c = 0, l = 20, u = !1) {
      (this.clear(),
        (this.gx = a),
        (this.gz = o),
        (this.builtAt = t),
        this.push(n, r));
      let d = n + Math.sin(i) * l,
        f = r - Math.cos(i) * l,
        p = Math.hypot(a - n, o - r) < 25 ? [] : e.findRoute(d, f, a, o, u),
        m = null;
      for (let t = 0; t < p.length && this.n < 192; t++) {
        let n = e.nodes[p[t]];
        if (this.nodeCount < Lw) {
          ((this.nodes[this.nodeCount] = n.id),
            (this.nodeWp[this.nodeCount] = this.n - 1));
          let r = t > 0 ? e.linkBetween(p[t - 1], p[t]) : null;
          ((this.nodeAxis[this.nodeCount] = r
            ? r.road.axis === `x`
              ? 0
              : 1
            : 2),
            this.nodeCount++);
        }
        if (s === `nodes` || t + 1 >= p.length) {
          (this.push(n.x, n.z), (m = null));
          continue;
        }
        let r = e.linkBetween(p[t], p[t + 1]);
        if (!r) {
          (this.push(n.x, n.z), (m = null));
          continue;
        }
        let i = Math.min(c, r.lanes - 1);
        (e.lanePoint(r, i, 0, this.lp),
          m && this.turnCurve(m, r, this.lp.x, this.lp.z),
          this.push(this.lp.x, this.lp.z),
          e.lanePoint(r, i, r.length, this.lp),
          this.push(this.lp.x, this.lp.z),
          (m = r));
      }
      if (this.n >= 3) {
        let e = Math.sin(i),
          t = -Math.cos(i),
          a = this.pts[2] - n,
          o = this.pts[3] - r;
        a * e + o * t < 0 && Math.hypot(a, o) < 30 && (this.seg = 1);
      }
      this.push(a, o);
    }
    turnCurve(e, t, n, r) {
      if (this.n < 1) return;
      let i = this.pts[(this.n - 1) * 2],
        a = this.pts[(this.n - 1) * 2 + 1],
        o = e.dx * t.dz - e.dz * t.dx;
      if (Math.abs(o) < 0.3 || e.dx * t.dx + e.dz * t.dz < -0.5) return;
      let s = n - i,
        c = r - a,
        l = (s * t.dz - c * t.dx) / o,
        u = (s * e.dz - c * e.dx) / o;
      if (l < 0.5 || l > 30 || u > -0.5 || u < -30) return;
      let d = i + e.dx * l,
        f = a + e.dz * l;
      for (let e = 1; e <= 3; e++) {
        let t = e / 4,
          o = 1 - t;
        this.push(
          o * o * i + 2 * o * t * d + t * t * n,
          o * o * a + 2 * o * t * f + t * t * r,
        );
      }
    }
    get valid() {
      return this.n >= 2;
    }
    remaining(e, t) {
      if (this.n < 2) return 0;
      let n = 0,
        r = e,
        i = t;
      for (let e = this.seg + 1; e < this.n; e++) {
        let t = this.pts[e * 2],
          a = this.pts[e * 2 + 1];
        ((n += Math.hypot(t - r, a - i)), (r = t), (i = a));
      }
      return n;
    }
    track(e, t, n, r, i = 45, a = !1) {
      let o = this.pts,
        s = this.n;
      if (s < 2) {
        ((r.x = this.gx), (r.z = this.gz), (r.turn = 0), (r.cornerDist = 999));
        return;
      }
      let c = a ? 6 : 14;
      for (; this.seg < s - 2;) {
        let n = this.seg,
          r = o[n * 2],
          i = o[n * 2 + 1],
          s = o[n * 2 + 2],
          l = o[n * 2 + 3],
          u = s - r,
          d = l - i,
          f = u * u + d * d;
        if (
          (f > 1e-4 ? ((e - r) * u + (t - i) * d) / f : 1) >= 1 ||
          Math.hypot(s - e, l - t) < (a ? 2.5 : 4)
        ) {
          this.seg++;
          continue;
        }
        let p = o[n * 2 + 4],
          m = o[n * 2 + 5];
        if (
          zw(e, t, s, l, p, m) + 0.5 < zw(e, t, r, i, s, l) &&
          Math.hypot(s - e, l - t) < c
        ) {
          this.seg++;
          continue;
        }
        break;
      }
      let l = this.seg,
        u = o[l * 2],
        d = o[l * 2 + 1],
        f = o[l * 2 + 2],
        p = o[l * 2 + 3],
        m = f - u,
        h = p - d,
        g = Math.hypot(m, h),
        _ = g > 0.001 ? V(((e - u) * m + (t - d) * h) / (g * g), 0, 1) : 1,
        v = n,
        y = u + m * _,
        b = d + h * _,
        x = g * (1 - _);
      if (a && l < s - 2 && v > x + 3) {
        let e = o[l * 2 + 4] - f,
          t = o[l * 2 + 5] - p,
          n = Math.hypot(e, t);
        if (n > 0.5 && g > 0.5) {
          let r = (m * e + h * t) / (g * n);
          r < 0.75 && (v = x + Math.max(3, (v - x) * (r < 0.2 ? 0.3 : 0.55)));
        }
      }
      for (; v > x && l < s - 2;)
        ((v -= x),
          l++,
          (u = o[l * 2]),
          (d = o[l * 2 + 1]),
          (f = o[l * 2 + 2]),
          (p = o[l * 2 + 3]),
          (m = f - u),
          (h = p - d),
          (g = Math.hypot(m, h)),
          (y = u),
          (b = d),
          (x = g));
      let S = x > 0.001 ? Math.min(v, x) / Math.max(g, 0.001) : 0;
      ((r.x = y + m * S),
        (r.z = b + h * S),
        (r.turn = 0),
        (r.cornerDist = 999));
      let C = 0,
        w = this.seg,
        T = o[w * 2 + 2] - o[w * 2],
        E = o[w * 2 + 3] - o[w * 2 + 1],
        D = Math.atan2(T, -E);
      C = Math.hypot(o[w * 2 + 2] - e, o[w * 2 + 3] - t);
      let O = 0,
        k = C;
      for (w = this.seg + 1; w < s - 1 && C < i; w++) {
        ((T = o[w * 2 + 2] - o[w * 2]), (E = o[w * 2 + 3] - o[w * 2 + 1]));
        let e = Math.hypot(T, E);
        if (e < 0.5) continue;
        let t = Math.atan2(T, -E);
        (O === 0 && (k = C), (O += z(t - D)));
        let n = Math.abs(O);
        (n > r.turn && n > 0.35 && ((r.turn = n), (r.cornerDist = k)),
          e >= 9 && (O = 0),
          (D = t),
          (C += e));
      }
    }
    nextStop(e) {
      for (let t = 1; t < this.nodeCount; t++) {
        let n = this.nodeWp[t];
        if (!(n <= this.seg || this.nodeAxis[t] === 2))
          return (
            (e.node = this.nodes[t]),
            (e.axis = this.nodeAxis[t] === 0 ? `x` : `z`),
            (e.x = this.pts[n * 2]),
            (e.z = this.pts[n * 2 + 1]),
            !0
          );
      }
      return !1;
    }
  };
function zw(e, t, n, r, i, a) {
  let o = i - n,
    s = a - r,
    c = o * o + s * s,
    l = c > 1e-6 ? V(((e - n) * o + (t - r) * s) / c, 0, 1) : 0;
  return Math.hypot(n + o * l - e, r + s * l - t);
}
