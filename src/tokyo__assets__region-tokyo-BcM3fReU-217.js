// tokyo__assets__region-tokyo-BcM3fReU 217 — setcolor
// Lines 89537-89867 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function mY(e, t) {
  if (
    e > aY.faceX + 2 ||
    e < aY.westX - 120 ||
    t < aY.minZ - 280 ||
    t > aY.maxZ + 140
  )
    return 0;
  let n = +(e <= aY.faceX),
    r = 1 - pY(aY.maxZ - 10, aY.maxZ + 60, t),
    i = pY(aY.minZ - 260, aY.minZ - 120, t),
    a = pY(aY.westX - 100, aY.westX, e);
  return n * r * i * a;
}
function hY(e, t) {
  let n = mY(e, t);
  return n > 0 ? aY.terrace * n : 0;
}
function gY(e, t) {
  let n = mY(e, t);
  return (
    e < -150 &&
      e > -900 &&
      t < -1500 &&
      t > -2100 &&
      (n = Math.max(n, 0.75 * pY(-1500, -1560, t) * (1 - pY(-1900, -2100, t)))),
    Math.abs(e + 470) < 90 &&
      Math.abs(t - 990) < 110 &&
      (n = Math.max(n, 0.85)),
    n
  );
}
var _Y = { x: 1124, z: -1366, h: 634 },
  vY = { x: -490, z: 957, h: 333 };
function yY(e, t, n, r, i = 1.6) {
  (e.setColor(1, 0.12, 0.06).setEmit(7, 2, 0),
    e.box(t, n, r, i, i, i),
    e.noEmit());
}
function bY(e, t) {
  let { x: n, z: r } = vY,
    i = t.height(n, r),
    a = [0.86, 0.23, 0.05],
    o = [0.88, 0.86, 0.82],
    s = (t, i, s, c, l) => {
      let u = l ? o : a;
      (e.setColor(u[0], u[1], u[2]).setEmit(l ? 0.5 : 0.9, 0),
        e.frustum(n, t, r, s, s, c, c, i, !1));
    };
  (e.noEmit().setColor(0.66, 0.64, 0.6),
    e.box(n, i, r + 22, 70, 18, 34),
    EY(e, n, i, r + 22, 70, 34, 18, 4.2, [0.3, 0.32, 0.34], 2.5),
    e.setColor(a[0], a[1], a[2]).setEmit(0.9, 0));
  for (let [t, a] of [
    [-1, -1],
    [1, -1],
    [1, 1],
    [-1, 1],
  ])
    e.beam(n + t * 38, i, r + a * 38, n + t * 14, i + 62, r + a * 14, 5, 5);
  ([
    [48, 62, 34, 30],
    [62, 95, 30, 24],
    [95, 145, 24, 18],
    [158, 190, 15, 12],
    [190, 222, 12, 9],
    [222, 248, 9, 7],
  ].forEach(([e, t, n, r], a) => s(i + e, t - e, n, r, a % 2 == 1)),
    e.setColor(0.3, 0.32, 0.34).setEmit(0, 0, 0),
    e.box(n, i + 145, r, 26, 13, 26),
    e.setColor(1, 0.9, 0.72).setEmit(1.6, 0),
    e.box(n, i + 150, r, 26.4, 3, 26.4, 0, 51),
    e.noEmit(),
    e.setColor(0.3, 0.32, 0.34),
    e.box(n, i + 248, r, 9, 6, 9),
    e.setColor(1, 0.9, 0.72).setEmit(1.4, 0),
    e.box(n, i + 251, r, 9.3, 1.5, 9.3, 0, 51),
    s(i + 254, 40, 6, 3.5, !1),
    e.setColor(o[0], o[1], o[2]).setEmit(0.4, 0),
    e.frustum(n, i + 294, r, 3.5, 3.5, 1, 1, 39, !0),
    e.noEmit());
  for (let t of [145, 250, 332]) yY(e, n, i + t + 2, r, 1.7);
}
var xY = { x0: -488, x1: 636, z0: -1530, z1: 830 };
function SY(e, t) {
  let n = Math.max(xY.x0 - e, 0, e - xY.x1),
    r = Math.max(xY.z0 - t, 0, t - xY.z1);
  return Math.sqrt(n * n + r * r);
}
function CY(e, t) {
  let n = 0;
  return (
    t < xY.z0 && (n |= 1),
    t > xY.z1 && (n |= 2),
    e < xY.x0 && (n |= 4),
    e > xY.x1 && (n |= 8),
    n || 15
  );
}
var wY = 1,
  TY = () => (wY = (Math.imul(wY, 1664525) + 1013904223) >>> 0) / 4294967296;
function EY(e, t, n, r, i, a, o, s, c, l = 3.5, u = 15) {
  let d = i / 2 + 0.06,
    f = a / 2 + 0.06;
  for (let i = n + l; i + 1.2 < n + o - 1.5; i += s) {
    let n = TY() < 0.55,
      a = TY() < 0.6;
    (e.setColor(c[0], c[1], c[2]).setEmit(n ? 4 : 0, 0),
      n && e.setColor(a ? 0.25 : 0.2, 0.22, a ? 0.16 : 0.24));
    let o = i + (n ? 1.3 : 1.5);
    (u & 1 &&
      e.quad(
        t - d,
        i,
        r + f,
        t + d,
        i,
        r + f,
        t + d,
        o,
        r + f,
        t - d,
        o,
        r + f,
      ),
      u & 2 &&
        e.quad(
          t + d,
          i,
          r - f,
          t - d,
          i,
          r - f,
          t - d,
          o,
          r - f,
          t + d,
          o,
          r - f,
        ),
      u & 4 &&
        e.quad(
          t + d,
          i,
          r + f,
          t + d,
          i,
          r - f,
          t + d,
          o,
          r - f,
          t + d,
          o,
          r + f,
        ),
      u & 8 &&
        e.quad(
          t - d,
          i,
          r - f,
          t - d,
          i,
          r + f,
          t - d,
          o,
          r + f,
          t - d,
          o,
          r - f,
        ));
  }
  e.noEmit();
}
function DY(e, t, n, r, i, a, o, s, c = {}) {
  let l = t.height(n, r),
    u = c.glass ?? [0.34, 0.42, 0.48],
    d = SY(n, r) < 260;
  e.setColor(u[0], u[1], u[2]).setEmit(0, 0, d ? 0 : s);
  let f = c.taper ?? 0;
  (f > 0 && !c.yaw
    ? e.frustum(n, l, r, i, a, i * (1 - f), a * (1 - f), o, !0)
    : e.box(n, l, r, i, o, a, c.yaw ?? 0),
    e.noEmit(),
    d &&
      !(f > 0) &&
      !c.yaw &&
      EY(
        e,
        n,
        l,
        r,
        i,
        a,
        o,
        6.8,
        [u[0] * 0.55, u[1] * 0.55, u[2] * 0.6],
        3.5,
        CY(n, r),
      ));
  let p = c.crown ?? 0;
  if (p > 0) {
    let t = 1 - (f > 0 ? f : 0);
    (e.setColor(u[0] * 0.7, u[1] * 0.7, u[2] * 0.72),
      e.box(n, l + o, r, i * t * 0.72, p, a * t * 0.72, c.yaw ?? 0));
  }
  if (o > 90 && (yY(e, n, l + o + p + 0.5, r), o > 150)) {
    let t = i * 0.3,
      s = a * 0.3;
    (yY(e, n - t, l + o * 0.5, r - s, 1.3),
      yY(e, n + t, l + o * 0.5, r + s, 1.3));
  }
}
function OY(e, t) {
  let n = aY.faceX,
    r = aY.terrace + 0.15,
    i = aY.minZ + 20,
    a = aY.maxZ - 10,
    o = -1.6;
  for (let t = 0; t < 6; t++) {
    let s = o + ((r - o) * t) / 6,
      c = o + ((r - o) * (t + 1)) / 6,
      l = t / 6,
      u = (t + 1) / 6,
      d = n + 4.5 * (1 - l) * (1 - l),
      f = n + 4.5 * (1 - u) * (1 - u),
      p = 0.92 + (0.08 * ((t * 37) % 5)) / 4;
    (e.setColor(0.5 * p, 0.47 * p, 0.42 * p),
      e.quad(d, s, a, d, s, i, f, c, i, f, c, a));
  }
  (e.setColor(0.2, 0.26, 0.14),
    e.flat(n - 22, i, n, a, r),
    e.setColor(0.86, 0.85, 0.8),
    e.box(n - 3, r, (i + 140) / 2 + 40, 1.2, 2.6, 120),
    e.setColor(0.24, 0.25, 0.27),
    e.box(n - 3, r + 2.6, (i + 140) / 2 + 40, 2.2, 0.6, 121));
  let s = 7,
    c = () => (s = (Math.imul(s, 1103515245) + 12345) >>> 0) / 4294967296;
  for (let t = i + 6; t < a - 4; t += 9 + c() * 8) {
    let i = n - 3 - c() * 9,
      a = r,
      o = 5 + c() * 4,
      s = 4 + c() * 3;
    (e.setColor(0.24, 0.2, 0.16),
      e.box(i, a, t, 0.6, o * 0.6, 0.6),
      e.setColor(0.07 + c() * 0.03, 0.13 + c() * 0.04, 0.07),
      e.box(i + (c() - 0.5) * 2, a + o * 0.55, t, s, 1.6, s * 0.8, c() * 3),
      e.box(
        i + (c() - 0.5) * 2,
        a + o * 0.8,
        t,
        s * 0.7,
        1.4,
        s * 0.6,
        c() * 3,
      ));
  }
}
function kY(e, t) {
  let n = () => e.setColor(0.2, 0.22, 0.24),
    r = () => e.setColor(0.62, 0.12, 0.08),
    i = 626,
    a = -1400,
    o = t.height(i, a);
  (r(),
    e.box(i, o, a, 30, 12, 26),
    n(),
    e.frustum(i, o + 12, a, 40, 34, 12, 4, 15),
    e.box(i, o + 27, a, 14, 1.5, 4),
    r(),
    e.box(i + 4, o, a + 46, 18, 9, 9),
    n(),
    e.frustum(i + 4, o + 9, a + 46, 24, 14, 6, 2, 6),
    (i = 600),
    (a = -1371),
    (o = t.height(i, a)));
  for (let t = 0; t < 5; t++) {
    let s = 1 - t * 0.09,
      c = o + 2 + t * 7.6;
    (r(),
      e.box(i, c, a, 7 * s, 4.2, 7 * s),
      n(),
      e.frustum(i, c + 4.2, a, 13 * s, 13 * s, 7.5 * s, 7.5 * s, 3.4));
  }
  (e.setColor(0.55, 0.45, 0.25),
    e.cyl(i, o + 2 + 38, a, 0.5, 12, 6, !0, 0.3),
    (i = 872),
    (a = -1262),
    (o = t.height(i, a)),
    e.setColor(0.07, 0.07, 0.08),
    e.frustum(i, o, a, 30, 26, 38, 32, 22),
    e.setColor(0.9, 0.62, 0.14).setEmit(0.35, 0),
    e.beam(i - 8, o + 22, a, i + 18, o + 40, a + 2, 9, 6),
    e.beam(i + 18, o + 40, a + 2, i + 30, o + 37, a + 3, 6, 4),
    e.noEmit(),
    e.setColor(0.86, 0.66, 0.22),
    e.box(i + 4, o, a - 34, 26, 88, 22),
    EY(e, i + 4, o, a - 34, 26, 22, 88, 4.4, [0.5, 0.36, 0.1]),
    e.setColor(0.92, 0.92, 0.9),
    e.box(i + 4, o + 88, a - 34, 26, 12, 22),
    DY(e, t, i + 36, a - 40, 26, 30, 92, 405));
}
function AY(e, t) {
  let n = 802,
    r = -760,
    i = t.height(n, r);
  (e.setColor(0.62, 0.6, 0.56),
    e.box(n, i, r, 64, 14, 64),
    e.setColor(0.32, 0.52, 0.44),
    e.frustum(n, i + 14, r, 70, 70, 34, 34, 14),
    e.frustum(n, i + 28, r, 34, 34, 18, 18, 8),
    e.setColor(0.86, 0.84, 0.8),
    e.box(n, i + 36, r, 14, 6, 14),
    e.setColor(0.32, 0.52, 0.44),
    e.frustum(n, i + 42, r, 18, 18, 2, 2, 5),
    (n = 896),
    (r = -770),
    (i = t.height(n, r)),
    e.setColor(0.52, 0.5, 0.47));
  for (let [t, a] of [
    [-1, -1],
    [1, -1],
    [1, 1],
    [-1, 1],
  ])
    e.box(n + t * 20, i, r + a * 16, 10, 30, 10);
  (e.setColor(0.6, 0.58, 0.55),
    e.box(n, i + 30, r, 76, 26, 58),
    EY(e, n, i + 30, r, 76, 58, 26, 8, [0.3, 0.3, 0.3], 4),
    e.setColor(0.38, 0.36, 0.34),
    e.frustum(n, i + 56, r, 80, 62, 70, 54, 6));
}
