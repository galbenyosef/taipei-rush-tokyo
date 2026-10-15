// tokyo/assets/region-tokyo-55J_WESF 387 — setcolor
// Lines 140571-140875 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function cPe(e, t) {
  if (!x1.tokyoTower) return;
  let { x: n, z: r } = C1,
    i = t.height(n, r),
    a = [0.86, 0.23, 0.05],
    o = [0.88, 0.86, 0.82],
    s = (t, i, s, c, l) => {
      let u = l ? o : a;
      (e.setColor(u[0], u[1], u[2]).setEmit(l ? 0.5 : 0.9, 0),
        e.frustum(n, t, r, s, s, c, c, i, !1));
    };
  (e.noEmit().setColor(0.66, 0.64, 0.6),
    e.box(n, i, r + 44, 60, 18, 30),
    A1(e, n, i, r + 44, 60, 30, 18, 4.2, [0.3, 0.32, 0.34], 2.5),
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
  for (let t of [145, 250, 332]) T1(e, n, i + t + 2, r, 1.7);
}
function E1(e, t) {
  return Math.max(0, b1(e, t) - 8);
}
function D1(e, t) {
  let n = sPe(e, t),
    r = y1(n, e, t),
    i = 0;
  for (let a of v1)
    (a !== n && y1(a, e, t) > r + 600) ||
      (t < a.minZ - 8 && (i |= 1),
      t > a.maxZ + 8 && (i |= 2),
      e < a.minX - 8 && (i |= 4),
      e > a.maxX + 8 && (i |= 8));
  return i || 15;
}
var O1 = 1,
  k1 = () => (O1 = (Math.imul(O1, 1664525) + 1013904223) >>> 0) / 4294967296;
function A1(e, t, n, r, i, a, o, s, c, l = 3.5, u = 15) {
  let d = i / 2 + 0.06,
    f = a / 2 + 0.06;
  for (let i = n + l; i + 1.2 < n + o - 1.5; i += s) {
    let n = k1() < 0.55,
      a = k1() < 0.6;
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
function j1(e, t, n, r, i, a, o, s, c = {}) {
  let l = t.height(n, r),
    u = c.glass ?? [0.34, 0.42, 0.48],
    d = E1(n, r) < 260;
  e.setColor(u[0], u[1], u[2]).setEmit(0, 0, d ? 0 : s);
  let f = c.taper ?? 0;
  (f > 0 && !c.yaw
    ? e.frustum(n, l, r, i, a, i * (1 - f), a * (1 - f), o, !0)
    : e.box(n, l, r, i, o, a, c.yaw ?? 0),
    e.noEmit(),
    d &&
      !(f > 0) &&
      !c.yaw &&
      A1(
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
        D1(n, r),
      ));
  let p = c.crown ?? 0;
  if (p > 0) {
    let t = 1 - (f > 0 ? f : 0);
    (e.setColor(u[0] * 0.7, u[1] * 0.7, u[2] * 0.72),
      e.box(n, l + o, r, i * t * 0.72, p, a * t * 0.72, c.yaw ?? 0));
  }
  if (o > 90 && (T1(e, n, l + o + p + 0.5, r), o > 150)) {
    let t = i * 0.3,
      s = a * 0.3;
    (T1(e, n - t, l + o * 0.5, r - s, 1.3),
      T1(e, n + t, l + o * 0.5, r + s, 1.3));
  }
}
function lPe(e, t) {
  let n = Gv.faceX,
    r = Gv.terrace + 0.15,
    i = Gv.minZ,
    a = Gv.maxZ,
    o = Ob,
    s = -1.6,
    c = (e) => n + 4.5 * (1 - e) * (1 - e);
  for (let [t, n] of [
    [i, o.minZ],
    [o.maxZ, a],
  ])
    for (let i = 0; i < 6; i++) {
      let a = s + ((r - s) * i) / 6,
        o = s + ((r - s) * (i + 1)) / 6,
        l = c(i / 6),
        u = c((i + 1) / 6),
        d = 0.92 + (0.08 * ((i * 37) % 5)) / 4;
      (e.setColor(0.5 * d, 0.47 * d, 0.42 * d),
        e.quad(l, a, n, l, a, t, u, o, t, u, o, n));
    }
  e.setColor(0.44, 0.42, 0.38);
  for (let t = 0; t < 6; t++) {
    let i = s + ((r - s) * t) / 6,
      a = s + ((r - s) * (t + 1)) / 6,
      l = c(t / 6),
      u = c((t + 1) / 6);
    (e.quad(n, i, o.minZ, l, i, o.minZ, u, a, o.minZ, n, a, o.minZ),
      e.quad(l, i, o.maxZ, n, i, o.maxZ, n, a, o.maxZ, u, a, o.maxZ));
  }
  for (let [t, s] of [
    [i, o.minZ],
    [o.maxZ, 122],
    [182, a],
  ])
    _1(e, `x`, n - 0.9, t, s, r);
  let l = 7,
    u = () => (l = (Math.imul(l, 1103515245) + 12345) >>> 0) / 4294967296;
  for (let t = i + 6; t < a - 4; t += 9 + u() * 8) {
    let i = n - 3 - u() * 9,
      a = r,
      s = 5 + u() * 4,
      c = 4 + u() * 3,
      l = u() - 0.5,
      d = u() * 3,
      f = u() - 0.5,
      p = u() * 3,
      m = u(),
      h = u();
    (t > o.minZ - 4 && t < o.maxZ + 4) ||
      (e.setColor(0.24, 0.2, 0.16),
      e.box(i, a, t, 0.6, s * 0.6, 0.6),
      e.setColor(0.07 + m * 0.03, 0.13 + h * 0.04, 0.07),
      e.box(i + l * 2, a + s * 0.55, t, c, 1.6, c * 0.8, d),
      e.box(i + f * 2, a + s * 0.8, t, c * 0.7, 1.4, c * 0.6, p));
  }
  fPe(e, r);
}
var M1 = 7,
  N1 = 2.8,
  uPe = [
    [-655, 50, -542, 180],
    [-548, 84, -500, 188],
  ],
  P1 = { minX: -909, maxX: -512, minZ: -167, maxZ: 222 },
  F1 = (e, t) => {
    let n = Math.imul(e * 374761393 + t * 668265263, 1274126177) >>> 0;
    return (
      (n = Math.imul(n ^ (n >>> 13), 1103515245) >>> 0),
      ((n ^ (n >>> 16)) >>> 0) / 4294967296
    );
  };
function I1(e, t, n, r) {
  let i = e / n,
    a = t / n,
    o = Math.floor(i),
    s = Math.floor(a),
    c = i - o,
    l = a - s,
    u = c * c * (3 - 2 * c),
    d = l * l * (3 - 2 * l),
    f = F1(o + r, s),
    p = F1(o + 1 + r, s),
    m = F1(o + r, s + 1),
    h = F1(o + 1 + r, s + 1);
  return f + (p - f) * u + (m - f) * d + (f - p - m + h) * u * d;
}
function L1(e, t) {
  if (e < P1.minX || e > P1.maxX || t < P1.minZ || t > P1.maxZ) return !1;
  let n = Db;
  if (e > n.minX - 4 && t < n.maxZ + 4) return !1;
  for (let [n, r, i, a] of uPe) if (e > n && e < i && t > r && t < a) return !1;
  return !0;
}
function dPe(e, t) {
  return (
    10 +
    6.5 * I1(e, t, 38, 3) +
    3.5 * I1(e, t, 13, 17) +
    3.2 * F1(Math.round(e / M1) + 911, Math.round(t / M1))
  );
}
function R1(e, t, n, r, i, a, o, s = !0) {
  (e.setColor(0.2, 0.16, 0.12), s && e.box(t, n, r, 0.5, a * 0.45, 0.5));
  let c = n + a * 0.32,
    l = n + a * 0.7,
    u = n + a;
  e.setColor(0.07 * o, 0.125 * o, 0.06 * o);
  for (let n = 0; n < 6; n++) {
    let a = (n / 6) * Math.PI * 2 + o,
      s = ((n + 1) / 6) * Math.PI * 2 + o,
      d = Math.cos(a),
      f = Math.sin(a),
      p = Math.cos(s),
      m = Math.sin(s);
    (e.quad(
      t + p * i * 0.55,
      c,
      r + m * i * 0.55,
      t + d * i * 0.55,
      c,
      r + f * i * 0.55,
      t + d * i,
      l,
      r + f * i,
      t + p * i,
      l,
      r + m * i,
    ),
      e.tri(t + p * i, l, r + m * i, t + d * i, l, r + f * i, t, u, r));
  }
}
