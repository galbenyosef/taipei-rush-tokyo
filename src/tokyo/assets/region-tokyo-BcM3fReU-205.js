// tokyo/assets/region-tokyo-BcM3fReU 205 — math
// Lines 84958-85306 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function tq(e, t, n, r, i, a, o, s) {
  let c = t.bx - t.ax,
    l = t.bz - t.az,
    u = Math.hypot(c, l) || 1,
    d = c / u,
    f = l / u,
    p = -f,
    m = d,
    h = t.ax + c * n + p * r,
    g = t.az + l * n + m * r,
    _ = t.ya + (t.yb - t.ya) * n,
    v = (e, t, n) => [h + d * e + p * t, _ + n, g + f * e + m * t],
    y = Kg.u,
    b = Kg.v,
    x = (t, n, r, i) => {
      let [a, o, s, c] = t,
        l = o[0] - a[0],
        u = o[1] - a[1],
        d = o[2] - a[2],
        f = c[0] - a[0],
        p = c[1] - a[1],
        m = c[2] - a[2];
      (u * m - d * p) * n + (d * f - l * m) * r + (l * p - u * f) * i >= 0
        ? e.quad(
            a[0],
            a[1],
            a[2],
            o[0],
            o[1],
            o[2],
            s[0],
            s[1],
            s[2],
            c[0],
            c[1],
            c[2],
            y,
            b,
            y,
            b,
          )
        : e.quad(
            a[0],
            a[1],
            a[2],
            c[0],
            c[1],
            c[2],
            s[0],
            s[1],
            s[2],
            o[0],
            o[1],
            o[2],
            y,
            b,
            y,
            b,
          );
    },
    S = -s,
    C = -o;
  (x([v(-i, -a, S), v(-i, a, S), v(-i, a, C), v(-i, -a, C)], -d, 0, -f),
    x([v(i, -a, S), v(i, a, S), v(i, a, C), v(i, -a, C)], d, 0, f),
    x([v(-i, -a, S), v(i, -a, S), v(i, -a, C), v(-i, -a, C)], -p, 0, -m),
    x([v(-i, a, S), v(i, a, S), v(i, a, C), v(-i, a, C)], p, 0, m),
    x([v(-i, -a, S), v(i, -a, S), v(i, a, S), v(-i, a, S)], 0, -1, 0));
}
function nq(e, t, n, r, i, a = !0) {
  let o = n.half,
    s = jK,
    c = 0.025;
  if (n.solid) {
    if (!a) return;
    e.setMaterial(0.7, 0.25, 0, 0).setColor(255, 255, 255);
    for (let [t, r] of [
      [-o - c, -1],
      [-o + 0.12 + c, 1],
      [o + c, 1],
      [o - 0.12 - c, -1],
    ])
      $K(e, n, t, s.parapet, s.parapet + s.wall, r, XK, 6);
    return;
  }
  let l = RK(LK(n, -1, r), -1, i),
    u = RK(LK(n, 1, r), 1, i);
  e.setMaterial(0.7, 0.25, 0, 0).setColor(255, 255, 255);
  for (let t of l)
    (a && $K(e, t, -o - c, s.parapet, s.parapet + s.wall, -1, XK, 6),
      a && $K(e, t, -o + 0.12 + c, s.parapet, s.parapet + s.wall, 1, XK, 6),
      $K(e, t, -o - c, -s.fascia, s.parapet, -1, QK, 8));
  for (let t of u)
    (a && $K(e, t, o + c, s.parapet, s.parapet + s.wall, 1, XK, 6),
      a && $K(e, t, o - 0.12 - c, s.parapet, s.parapet + s.wall, -1, XK, 6),
      $K(e, t, o + c, -s.fascia, s.parapet, 1, QK, 8));
  e.setMaterial(0.9, 0, 0, 0).setColor(255, 255, 255);
  let d = o * 0.6;
  for (let [t, r] of [
    [-o + 0.35, -d - 1],
    [-d + 1, -1],
    [1, d - 1],
    [d + 1, o - 0.35],
  ])
    eq(e, n, t, r, s.slab + 0.02, ZK, 8);
  let f = Math.hypot(n.bx - n.ax, n.bz - n.az),
    p = Math.max(1, Math.round(f / 8));
  (t.setMaterial(0.6, 0.35, 0, 0), rq(t, 112, 120, 112));
  for (let e = 0; e < p; e++) {
    let r = (e + 0.5) / p;
    (tq(t, n, r, -d / 2, 0.12, d / 2 - 1, s.slab, s.slab + 1.1),
      tq(t, n, r, d / 2, 0.12, d / 2 - 1, s.slab, s.slab + 1.1));
  }
  rq(t, 70, 76, 72);
  for (let e of [-1, 1])
    tq(t, n, 0.5, e * (d + 1.12), f / 2, 0.09, s.slab + 0.35, s.slab + 0.53);
  if (n.pier) {
    let e = n.bx - n.ax,
      r = n.bz - n.az,
      i = e / (f || 1),
      a = r / (f || 1),
      o = n.ax + i * (s.pier * 1.25 + 0.14),
      c = n.az + a * (s.pier * 1.25 + 0.14),
      l = n.ya - s.slab - s.girder,
      u = Kg.u,
      d = Kg.v;
    t.box(o, l / 2, c, 0.08, l / 2, 0.08, u, d, u, d);
  }
  (t.setMaterial(0.4, 0, 1.4, 1), rq(t, 236, 230, 210));
  for (let e of [-1, 1])
    tq(t, n, 0.5, (d / 2) * e, 0.35, 0.18, s.slab + 0.02, s.slab + 0.14);
}
function rq(e, t, n, r) {
  e.setColor(OK(t), OK(n), OK(r));
}
var iq = [84, 112, 66],
  aq = (e, t, n, r = 0) =>
    t > e.x0 - r && t < e.x1 + r && n > e.z0 - r && n < e.z1 + r;
function oq(e, t, n, r) {
  let i = Math.floor(e / n),
    a = Math.floor(t / n),
    o = e / n - i,
    s = t / n - a,
    c = (e, t) => (P(`tokyo-ueno-ground`, i + e, a + t, r) & 1023) / 511.5 - 1,
    l = o * o * (3 - 2 * o),
    u = s * s * (3 - 2 * s),
    d = c(0, 0) + (c(1, 0) - c(0, 0)) * l;
  return d + (c(0, 1) + (c(1, 1) - c(0, 1)) * l - d) * u;
}
function sq(e, t, n, r, i) {
  let a = e.n;
  for (let a = 0; a < 4; a++)
    (e.setColor(V(r[a][0] * i[a]), V(r[a][1] * i[a]), V(r[a][2] * i[a])),
      e.vertex(n[a][0], t, n[a][1], 0, 1, 0, 0, 0));
  e.tri(a, a + 1, a + 2).tri(a, a + 2, a + 3);
}
var cq = [1, 1, 1, 1];
function lq(e, t, n, r, i, a, o, s) {
  for (let c = 0; c < s; c++) {
    let l = (c / s) * Math.PI * 2,
      u = ((c + 1) / s) * Math.PI * 2;
    sq(
      e,
      n,
      [
        [t, r],
        [t + Math.cos(u) * i, r + Math.sin(u) * a],
        [t + Math.cos(l) * i, r + Math.sin(l) * a],
        [t, r],
      ],
      [o, iq, iq, o],
      cq,
    );
  }
}
function uq(e, t, n) {
  let r = [e];
  for (let i = Math.floor(e / n) * n + n; i < t - 0.05; i += n)
    i > e + 0.05 && r.push(i);
  return (r.push(t), r);
}
function dq(e, t, n) {
  let r = $T(t),
    { paths: i } = r;
  if (!i.length) return;
  let a = t.sidewalkHeight,
    o = (e, t) => e >= n.minX && e < n.maxX && t >= n.minZ && t < n.maxZ,
    s = (e, n) =>
      t.groundHeight(e, n) > r.top - 0.3 && t.surfaceAt(e, n) === `park`,
    c = (e, t, n, r) =>
      s(e, t) && s(e + n, t) && s(e - n, t) && s(e, t + r) && s(e, t - r);
  e.setMaterial(0.95, 0, 0, 0);
  for (let t = 0; t < 70; t++) {
    let n = P(`tokyo-ueno-patch`, t),
      r = -470 + ((n & 65535) / 65535) * 330,
      s = -1425 + (((n >>> 16) & 65535) / 65535) * 235,
      l = 4 + ((n >>> 3) & 3),
      u = 3.5 + ((n >>> 6) & 3);
    if (!o(r, s) || !c(r, s, l, u) || i.some((e) => aq(e, r, s, 4))) continue;
    let d = (n >>> 8) & 3,
      f =
        d === 0
          ? [112, 118, 72]
          : d === 1
            ? [96, 110, 64]
            : d === 2
              ? [104, 112, 70]
              : [118, 116, 80];
    lq(e, r, a + 0.008, s, l, u, f, 10);
  }
  for (let t of r.trees) {
    let n = 1.6 + t.s * 0.9;
    o(t.x, t.z) &&
      c(t.x, t.z, n, n) &&
      lq(e, t.x, a + 0.012, t.z, n, n * 0.9, [124, 108, 82], 8);
  }
  for (let t of r.items) {
    if (t.kind !== `bench`) continue;
    let n = t.x + t.fx * 0.6,
      r = t.z + t.fz * 0.6,
      i = Math.abs(t.fz) * 1.3 + 0.8,
      s = Math.abs(t.fx) * 1.3 + 0.8;
    o(n, r) && c(n, r, i, s) && lq(e, n, a + 0.014, r, i, s, [132, 118, 92], 8);
  }
  for (let t of r.beds) {
    let r = Math.max(t.x0, n.minX),
      i = Math.min(t.x1, n.maxX),
      o = Math.max(t.z0, n.minZ),
      s = Math.min(t.z1, n.maxZ);
    i - r < 0.05 ||
      s - o < 0.05 ||
      (e.setColor(V(66), V(50), V(36)),
      e.quad(
        r,
        a + 0.035,
        s,
        i,
        a + 0.035,
        s,
        i,
        a + 0.035,
        o,
        r,
        a + 0.035,
        o,
      ));
  }
  let l = 0.6;
  i.forEach((t, r) => {
    let i = t.kind === `gravel` ? [184, 176, 158] : [170, 152, 122],
      o = t.kind === `gravel` ? 0.07 : 0.12,
      c = (e, t) => 1 + oq(e, t, 2.3, 1) * o + oq(e, t, 9, 2) * o * 1.2,
      u = (t, n, r, i, a, o) => {
        let s = [
            [n, a],
            [i, a],
            [i, r],
            [n, r],
          ],
          c = [],
          l = [];
        for (let [e, t] of s) {
          let [n, r] = o(e, t);
          (c.push(n), l.push(r));
        }
        sq(e, t, s, c, l);
      },
      d = a + 0.018 + r * 6e-4,
      f = (e, t, r, a, o) => {
        if (e ? t < n.minZ || t >= n.maxZ : t < n.minX || t >= n.maxX) return;
        let l = Math.max(r, e ? n.minX : n.minZ),
          f = Math.min(a, e ? n.maxX : n.maxZ);
        if (f - l < 0.05) return;
        let p = uq(l, f, 3),
          m = (n, r) =>
            Math.abs((e ? r : n) - t) < 0.001 ? [i, c(n, r) * 0.96] : [iq, 1],
          h = Math.min(t, t + o),
          g = Math.max(t, t + o);
        for (let t = 0; t + 1 < p.length; t++) {
          let n = p[t],
            r = p[t + 1],
            i = (n + r) / 2;
          s(e ? i : (h + g) / 2, e ? (h + g) / 2 : i) &&
            (e ? u(d, n, h, r, g, m) : u(d, h, n, g, r, m));
        }
      };
    (f(!0, t.z0, t.x0, t.x1, -0.6),
      f(!0, t.z1, t.x0, t.x1, l),
      f(!1, t.x0, t.z0, t.z1, -0.6),
      f(!1, t.x1, t.z0, t.z1, l));
    let p = Math.max(t.x0, n.minX),
      m = Math.min(t.x1, n.maxX),
      h = Math.max(t.z0, n.minZ),
      g = Math.min(t.z1, n.maxZ);
    if (m - p < 0.05 || g - h < 0.05) return;
    let _ = uq(p, m, 3),
      v = uq(h, g, 3),
      y = (e, t) => [i, c(e, t)];
    for (let e = 0; e + 1 < v.length; e++)
      for (let t = 0; t + 1 < _.length; t++)
        s((_[t] + _[t + 1]) / 2, (v[e] + v[e + 1]) / 2) &&
          u(a + 0.03, _[t], v[e], _[t + 1], v[e + 1], y);
  });
}
var fq = (function (e) {
    return (
      (e[(e.Road = 0)] = `Road`),
      (e[(e.Plaza = 1)] = `Plaza`),
      (e[(e.Sidewalk = 2)] = `Sidewalk`),
      (e[(e.Lot = 3)] = `Lot`),
      (e[(e.Park = 4)] = `Park`),
      (e[(e.Water = 5)] = `Water`),
      (e[(e.Outside = 6)] = `Outside`),
      (e[(e.Flush = 7)] = `Flush`),
      e
    );
  })(fq || {}),
  pq = -1.7;
function mq(e, t, n) {
  switch (e.surfaceAt(t, n)) {
    case `road`:
    case `crosswalk`:
      return fq.Road;
    case `plaza`:
      return fq.Plaza;
    case `sidewalk`:
      return e.isFlush(t, n) ? fq.Flush : fq.Sidewalk;
    case `park`:
      return fq.Park;
    case `water`:
      return fq.Water;
    case `terrain`:
      return fq.Outside;
    default:
      return fq.Lot;
  }
}
function hq(e, t, n, r, i, a) {
  e.quad(t, a, i, r, a, i, r, a, n, t, a, n);
}
function gq(e, t, n, r, i, a, o) {
  o > 0
    ? e.quad(t, i, r, t, i, n, t, a, n, t, a, r)
    : e.quad(t, i, n, t, i, r, t, a, r, t, a, n);
}
function _q(e, t, n, r, i, a, o) {
  o > 0
    ? e.quad(n, i, t, r, i, t, r, a, t, n, a, t)
    : e.quad(r, i, t, n, i, t, n, a, t, r, a, t);
}
