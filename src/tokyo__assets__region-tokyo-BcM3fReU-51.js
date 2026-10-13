// tokyo__assets__region-tokyo-BcM3fReU 51 — math
// Lines 28093-28417 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function Zg(e, t, n, r, i, a, o, s, c, l, u) {
  let d = c * i,
    f = -s * i,
    p = s * o,
    m = c * o,
    h = n - a,
    g = n + a,
    _ = [t + d + p, r + f + m],
    v = [t + d - p, r + f - m],
    y = [t - d + p, r - f + m],
    b = [t - d - p, r - f - m],
    x = Kg,
    S = l ?? { u0: x.u, v0: x.v, u1: x.u, v1: x.v },
    C = u ?? { u0: x.u, v0: x.v, u1: x.u, v1: x.v };
  (e.quad(
    y[0],
    h,
    y[1],
    _[0],
    h,
    _[1],
    _[0],
    g,
    _[1],
    y[0],
    g,
    y[1],
    S.u0,
    S.v0,
    S.u1,
    S.v1,
  ),
    e.quad(
      v[0],
      h,
      v[1],
      b[0],
      h,
      b[1],
      b[0],
      g,
      b[1],
      v[0],
      g,
      v[1],
      C.u0,
      C.v0,
      C.u1,
      C.v1,
    ),
    e.quad(
      _[0],
      h,
      _[1],
      v[0],
      h,
      v[1],
      v[0],
      g,
      v[1],
      _[0],
      g,
      _[1],
      x.u,
      x.v,
      x.u,
      x.v,
    ),
    e.quad(
      b[0],
      h,
      b[1],
      y[0],
      h,
      y[1],
      y[0],
      g,
      y[1],
      b[0],
      g,
      b[1],
      x.u,
      x.v,
      x.u,
      x.v,
    ),
    e.quad(
      y[0],
      g,
      y[1],
      _[0],
      g,
      _[1],
      v[0],
      g,
      v[1],
      b[0],
      g,
      b[1],
      x.u,
      x.v,
      x.u,
      x.v,
    ));
}
function Qg(e, t, n, r, i, a, o, s, c = 6, l = s, u = !1, d = !1) {
  let f = i - t,
    p = a - n,
    m = o - r,
    h = Math.hypot(f, p, m) || 1,
    g = f / h,
    _ = p / h,
    v = m / h,
    y,
    b,
    x;
  Math.abs(_) < 0.9
    ? ((y = -v), (b = 0), (x = g))
    : ((y = 0), (b = v), (x = -_));
  let S = Math.hypot(y, b, x) || 1;
  ((y /= S), (b /= S), (x /= S));
  let C = _ * x - v * b,
    w = v * y - g * x,
    T = g * b - _ * y,
    E = Kg,
    D = e.n;
  for (let u = 0; u <= c; u++) {
    let d = (u / c) * Math.PI * 2,
      f = Math.cos(d),
      p = Math.sin(d),
      m = y * f + C * p,
      h = b * f + w * p,
      g = x * f + T * p;
    (e.vertex(t + m * s, n + h * s, r + g * s, m, h, g, E.u, E.v),
      e.vertex(i + m * l, a + h * l, o + g * l, m, h, g, E.u, E.v));
  }
  for (let t = 0; t < c; t++) {
    let n = D + t * 2;
    e.tri(n, n + 2, n + 1).tri(n + 1, n + 2, n + 3);
  }
  if (d) {
    let t = e.vertex(i, a, o, g, _, v, E.u, E.v),
      n = e.n;
    for (let t = 0; t < c; t++) {
      let n = (t / c) * Math.PI * 2,
        r = Math.cos(n),
        s = Math.sin(n);
      e.vertex(
        i + (y * r + C * s) * l,
        a + (b * r + w * s) * l,
        o + (x * r + T * s) * l,
        g,
        _,
        v,
        E.u,
        E.v,
      );
    }
    for (let r = 0; r < c; r++) e.tri(t, n + r, n + ((r + 1) % c));
  }
  if (u) {
    let i = e.vertex(t, n, r, -g, -_, -v, E.u, E.v),
      a = e.n;
    for (let i = 0; i < c; i++) {
      let a = (i / c) * Math.PI * 2,
        o = Math.cos(a),
        l = Math.sin(a);
      e.vertex(
        t + (y * o + C * l) * s,
        n + (b * o + w * l) * s,
        r + (x * o + T * l) * s,
        -g,
        -_,
        -v,
        E.u,
        E.v,
      );
    }
    for (let t = 0; t < c; t++) e.tri(i, a + ((t + 1) % c), a + t);
  }
}
function $g(e, t, n, r, i, a, o = 6, s = a, c = !0) {
  Qg(e, t, r, n, t, i, n, a, o, s, !1, c);
}
function e_(e, t, n, r, i, a, o, s, c, l = 0) {
  let u = i[1] * a[2] - i[2] * a[1],
    d = i[2] * a[0] - i[0] * a[2],
    f = i[0] * a[1] - i[1] * a[0],
    p = Kg,
    m = c ? (c.u0 + c.u1) / 2 : p.u,
    h = c ? (c.v0 + c.v1) / 2 : p.v,
    g = c ? (c.u1 - c.u0) / 2 : 0,
    _ = c ? (c.v1 - c.v0) / 2 : 0,
    v = e.vertex(t, n, r, u, d, f, m, h);
  for (let c = 0; c < s; c++) {
    let p = l + (c / s) * Math.PI * 2,
      v = Math.cos(p),
      y = Math.sin(p);
    e.vertex(
      t + (i[0] * v + a[0] * y) * o,
      n + (i[1] * v + a[1] * y) * o,
      r + (i[2] * v + a[2] * y) * o,
      u,
      d,
      f,
      m + g * v,
      h + _ * y,
    );
  }
  for (let t = 0; t < s; t++) e.tri(v, v + 1 + t, v + 1 + ((t + 1) % s));
}
function t_(e, t, n, r, i, a, o, s, c) {
  let l = (o / 2) * a,
    u = -i * (o / 2),
    d = n - s / 2,
    f = n + s / 2,
    p = e.n;
  return (
    e.quad(
      t - l,
      d,
      r - u,
      t + l,
      d,
      r + u,
      t + l,
      f,
      r + u,
      t - l,
      f,
      r - u,
      c.u0,
      c.v0,
      c.u1,
      c.v1,
    ),
    p
  );
}
function n_(e, t, n, r, i, a, o = 1, s = 1, c = 1) {
  return (
    (e[0] = a * o),
    (e[1] = 0),
    (e[2] = -i * o),
    (e[3] = 0),
    (e[4] = 0),
    (e[5] = s),
    (e[6] = 0),
    (e[7] = 0),
    (e[8] = i * c),
    (e[9] = 0),
    (e[10] = a * c),
    (e[11] = 0),
    (e[12] = t),
    (e[13] = n),
    (e[14] = r),
    (e[15] = 1),
    e
  );
}
var r_ = (e, t) => e * 100 + t,
  i_ = {
    sakura: `bloom`,
    hanafubuki: `bloom`,
    summer: `green`,
    ginkgo: `autumn`,
    momiji: `autumn`,
    winter: `bare`,
  };
function a_(e) {
  let t = e.params.get(`treeSeason`);
  if (t === `green` || t === `bloom` || t === `autumn` || t === `bare`)
    return t;
  let n = i_[e.params.get(`season`) ?? ``];
  if (n) return n;
  let r = e.time?.date;
  if (!r) return `green`;
  let i = r_(r.m, r.d);
  return i >= r_(3, 24) && i <= r_(4, 8)
    ? `bloom`
    : i >= r_(11, 12) && i <= r_(12, 12)
      ? `autumn`
      : i >= r_(12, 20) || i <= r_(3, 14)
        ? `bare`
        : `green`;
}
var o_ = {
    b40: { minX: -297.75, minZ: -158.75, maxX: -258.25, maxZ: -125.75 },
    b102: { minX: -138.75, minZ: -158.75, maxX: -86.25, maxZ: -125.75 },
    b42: { minX: -297.75, minZ: -94.25, maxX: -258.25, maxZ: -21.5 },
    b104: { minX: -136.75, minZ: -94.25, maxX: -86.25, maxZ: -21.5 },
    b106: { minX: -136.75, minZ: 21.5, maxX: -86.25, maxZ: 112.75 },
    b74: { minX: -180.75, minZ: 69.25, maxX: -153.25, maxZ: 112.75 },
    b45: { minX: -297.75, minZ: 69.25, maxX: -258.25, maxZ: 112.75 },
  },
  s_ = { minX: -136.75, minZ: -52, maxX: -86.25, maxZ: -21.5 },
  c_ = { z: 0, x0: -315, x1: -80, median: 8, lanes: 14.5, edge: 21.5 },
  l_ = { x: -190, carriage: 3.25, edge: 9.25, z0: -158.75, z1: 338.25 },
  u_ = { x: -315, kerb: -326.25, wall: -332.25, z0: -150, z1: 336 },
  d_ = [
    [-171.25, -158.75],
    [-125.75, -94.25],
    [-21.5, 21.5],
    [56.75, 69.25],
    [112.75, 137.25],
    [233.75, 246.25],
    [338.25, 371.75],
  ],
  f_ = [
    [-332.25, -297.75],
    [-258.25, -245.75],
    [-199.25, -180.75],
    [-153.25, -136.75],
    [-86.25, -60],
  ];
function p_(e, t, n, r = 1.5) {
  let i = [],
    a = e;
  for (let [e, o] of [...n].sort((e, t) => e[0] - t[0]))
    if (!(o <= a)) {
      if (e >= t) break;
      (e - r > a + r && i.push([a + r, e - r]), (a = Math.max(a, o)));
    }
  return (t - r > a + r && i.push([a + r, t - r]), i);
}
