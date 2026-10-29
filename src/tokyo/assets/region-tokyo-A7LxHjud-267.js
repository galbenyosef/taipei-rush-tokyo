// tokyo/assets/region-tokyo-A7LxHjud 267 — col
// Lines 99378-99711 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function Wz(e, t, n, r, i) {
  return [
    [e + i, t],
    [e + i, t + i],
    [e, t + i],
    [e, r - i],
    [e + i, r - i],
    [e + i, r],
    [n - i, r],
    [n - i, r - i],
    [n, r - i],
    [n, t + i],
    [n - i, t + i],
    [n - i, t],
  ];
}
function Gz(e, t, n, r, i, a, o, s = !0) {
  (e.flat(t + a, n, r - a, i, o, e.white, 0, 0, s),
    e.flat(t, n + a, t + a, i - a, o, e.white, 0, 0, s),
    e.flat(r - a, n + a, r, i - a, o, e.white, 0, 0, s));
}
function Kz(e, t, n, r, i, a, o, s, c, l, u, d = !0) {
  let f = Math.hypot(r - t, i - n) || 1,
    p = -(i - n) / f,
    m = (r - t) / f,
    h = t + p * a,
    g = n + m * a,
    _ = r + p * a,
    v = i + m * a;
  (e.wall(h, g, _, v, o, s, c, l, u),
    d && !e.coarse && (e.panel(t, n, h, g, o, s), e.panel(_, v, r, i, o, s)));
}
function qz(e, t, n, r, i, a, o, s = e.white) {
  let c = (t + r) / 2,
    l = (n + i) / 2,
    u = [
      [r, n, t, n],
      [t, n, t, i],
      [t, i, r, i],
      [r, i, r, n],
    ];
  for (let [t, n, r, i] of u)
    e.quad(
      t,
      a,
      n,
      r,
      a,
      i,
      c + (r - c) * 0.002,
      o,
      l + (i - l) * 0.002,
      c + (t - c) * 0.002,
      o,
      l + (n - l) * 0.002,
      s,
    );
}
function JCe(e, t, n, r) {
  let i = t.site,
    a = (e, n) => t.plan.groundHeight(i.x + e, i.z + n) - i.gy + r,
    o = 0,
    s = 0;
  for (let e of n) ((o += e[0]), (s += e[1]));
  ((o /= n.length), (s /= n.length));
  let c = e.white,
    l = e.v(o, a(o, s), s, 0, 1, 0, c.u0, c.v0),
    u = n.map((t) => e.v(t[0], a(t[0], t[1]), t[1], 0, 1, 0, c.u0, c.v0));
  for (let t = 0; t < u.length; t++) e.tri(l, u[t], u[(t + 1) % u.length]);
}
function Jz(e, t, n, r, i, a, o, s, c, l) {
  let [u, d, f, p] = OS[n],
    m = t.A.sub(`nsArt`, u / 64, 1 - p / 64, f / 64, 1 - d / 64),
    h = o,
    g = -a,
    _ = r - (h * s) / 2,
    v = i - (g * s) / 2,
    y = r + (h * s) / 2,
    b = i + (g * s) / 2;
  (e.push().col(16777215).mat(0.5, 0, 0.6, G),
    e.panel(_ + a * 0.3, v + o * 0.3, y + a * 0.3, b + o * 0.3, c, l, m),
    e.col(14211284).mat(0.5, 0.3, 0, 0),
    e.panel(_, v, _ + a * 0.3, v + o * 0.3, c, l),
    e.panel(y + a * 0.3, b + o * 0.3, y, b, c, l),
    e.quad(
      _,
      l,
      v,
      _ + a * 0.3,
      l,
      v + o * 0.3,
      y + a * 0.3,
      l,
      b + o * 0.3,
      y,
      l,
      b,
    ),
    e.pop());
}
function Yz(e, t, n, r, i, a, o, s) {
  (e.panel(i, r, t, r, n, a),
    e.panel(t, o, i, o, n, a),
    e.panel(t, r, t, o, n, a),
    e.panel(i, o, i, r, n, a),
    s && e.flat(t, r, i, o, a));
}
var Xz = (e, t, n = 0.09, r = 1) => e.col(t, r).mat(0.72, 0.04, n, Hz),
  Zz = (e) => e.A.sub(`nsArt`, 0, 0, 0.5, 1),
  Qz = (e) => e.A.sub(`lcTkGrid`, 0.5, 0, 1, 1),
  $z = (e, t) => (n) => ({ x: e, z: t, gy: n.groundHeight(e, t), facing: 0 });
function eB(e, t, n, r, i, a, o, s) {
  let c = -o,
    l = a;
  e.quad(
    n + c * s,
    r - s,
    i + l * s,
    n - c * s,
    r - s,
    i - l * s,
    n - c * s,
    r + s,
    i - l * s,
    n + c * s,
    r + s,
    i + l * s,
    t.c(`clock`),
  );
}
var tB = { x: -2367.5, z: 360 },
  nB = (e) => e - tB.x,
  rB = (e) => e - tB.z,
  iB = {
    x0: nB(-2412),
    x1: nB(-2372),
    n: 3.5,
    split: 158,
    obs: 202,
    obsTop: 214,
    crown: 230,
    top: 243,
  },
  aB = [
    [rB(268), rB(304)],
    [rB(342), rB(378)],
  ],
  oB = { z0: rB(299), z1: rB(347) },
  sB = { x0: nB(-2412), x1: nB(-2364), z0: rB(392), z1: rB(455) },
  YCe = [
    [-3, 125, 0],
    [125, 137, 4],
    [137, 149, 8],
    [149, 163, 12],
  ],
  cB = {
    cx: nB(-2370),
    cz: rB(323),
    ri: [30, 40],
    ro: [42, 52],
    a0: (-80 * Vz) / 180,
    a1: (80 * Vz) / 180,
    col: 9,
    roof: 34,
  },
  lB = 12894908;
function* XCe(e, t) {
  let { x0: n, x1: r, n: i } = iB,
    a = Zz(t);
  for (let o = 0; o < aB.length; o++) {
    let [s, c] = aB[o],
      l = Wz(n, s, r, c, i);
    (e.col(16777215).mat(0.3, 0.35, 0.3, G),
      Vk(e, l, -3, 8, Qz(t), 3.2, 11),
      Xz(e, lB),
      Vk(e, l, 8, iB.obs, a, 6.4, 16));
    let u = (n + r) / 2,
      d = (s + c) / 2,
      f = 2.6;
    (Xz(e, 9409688, 0.12),
      Kz(
        e,
        u + f,
        s,
        u - f,
        s,
        0.45,
        o === 1 ? iB.split : 8,
        iB.obs,
        a,
        6.4,
        16,
      ),
      Kz(
        e,
        u - f,
        c,
        u + f,
        c,
        0.45,
        o === 0 ? iB.split : 8,
        iB.obs,
        a,
        6.4,
        16,
      ),
      Kz(e, n, d - f, n, d + f, 0.45, 8, iB.obs, a, 6.4, 16),
      Kz(e, r, d + f, r, d - f, 0.45, 8, iB.obs, a, 6.4, 16),
      yield,
      e.col(11912139).mat(0.2, 0.4, 0.06, 1),
      Gz(e, n, s, r, c, i, iB.obs),
      e.col(11844800).mat(0.2, 0.3, 0.32, G),
      Vk(
        e,
        Wz(n + 1.2, s + 1.2, r - 1.2, c - 1.2, i),
        iB.obs,
        iB.obsTop,
        t.c(`glass`),
        3,
        6,
      ));
    let p = Wz(n + 0.5, s + 0.5, r - 0.5, c - 0.5, 8);
    (Xz(e, 13289666, 0.06),
      Vk(e, p, iB.obsTop, iB.crown, a, 6.4, 16),
      e.col(12171185).mat(0.8, 0, 0.05, 1),
      Gz(e, n + 0.5, s + 0.5, r - 0.5, c - 0.5, 8, iB.crown));
    let m = 16.5,
      h = (e) => [
        [u, d - e],
        [u - e, d],
        [u, d + e],
        [u + e, d],
      ];
    if (
      (Xz(e, 13816010, 0.06),
      Vk(e, h(m), iB.crown, iB.top - 2, a, 6.4, 11),
      e.col(14210768).mat(0.72, 0.04, 0.16, 1),
      Vk(e, h(15.3), iB.top - 2, iB.top, e.white, 50, 2),
      e.col(12171185).mat(0.8, 0, 0.05, 1),
      Uk(e, h(m), iB.top - 2),
      e.col(9211794).mat(0.85, 0, 0, 0),
      Uk(e, h(15.3), iB.top),
      !e.coarse)
    ) {
      (e.col(10132896).mat(0.8, 0.2, 0, 0),
        e.box(u - 4, iB.top, d - 4, u + 4, iB.top + 3, d + 4),
        e.col(15001320).mat(0.5, 0.3, 0, 0));
      for (let [t, n] of [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ]) {
        let r = u + t * 8,
          i = d + n * 8;
        (e.rod(r, iB.top, i, r, iB.top + 1.6, i, 0.15, 4),
          e.lathe(
            r + t * 0.5,
            i + n * 0.5,
            [0.1, iB.top + 1.2, 1.3, iB.top + 1.9, 1.5, iB.top + 2.4],
            8,
            0,
          ));
      }
    }
    for (let [t, n] of [
      [u + m - 1.5, d],
      [u - m + 1.5, d],
      [u, d + m - 1.5],
      [u, d - m + 1.5],
    ])
      Kk(e, t, iB.top, n, 0.55);
    for (let [t, i] of [
      [n + 4.5, s + 4.5],
      [r - 4.5, c - 4.5],
    ])
      Kk(e, t, iB.obs, i, 0.4);
    (e.solid(n, s, r, c, -3, iB.obs),
      e.solid(n + 1, s + 1, r - 1, c - 1, iB.obs, iB.top),
      yield);
  }
  let o = Uz(n + 1.5, oB.z0, r - 1.5, oB.z1);
  (e.col(16777215).mat(0.3, 0.35, 0.3, G),
    Vk(e, o, -3, 8, Qz(t), 3.2, 11),
    Xz(e, 12434357),
    Vk(e, o, 8, iB.split, a, 6.4, 16),
    e.col(11118498).mat(0.85, 0, 0.04, 1),
    e.flat(n + 1.5, oB.z0, r - 1.5, oB.z1, iB.split),
    e.coarse ||
      (e.col(9343380).mat(0.8, 0.2, 0, 0),
      e.box(n + 8, iB.split, oB.z0 + 10, r - 10, iB.split + 4, oB.z1 - 10)),
    e.col(14277854).mat(0.4, 0.5, 0.1, 1),
    e.box(
      r - 1.5,
      7.6,
      oB.z0 + 8,
      r + 4.5,
      8.2,
      oB.z1 - 8,
      e.white,
      0,
      0,
      null,
      !0,
    ),
    e.solid(n + 1.5, oB.z0, r - 1.5, oB.z1, -3, iB.split),
    yield);
}
function* ZCe(e, t) {
  let n = Zz(t),
    { x0: r, x1: i, z0: a, z1: o } = sB;
  for (let [s, c, l] of YCe) {
    let u = Uz(r, a + l, i - l, o - l);
    (s < 0
      ? (e.col(16777215).mat(0.3, 0.35, 0.3, G),
        Vk(e, u, -3, 8, Qz(t), 3.2, 11),
        Xz(e, lB),
        Vk(e, u, 8, c, n, 6.4, 16))
      : (Xz(e, l === 12 ? 13289666 : lB), Vk(e, u, s, c, n, 6.4, 12)),
      e.col(11118498).mat(0.85, 0, 0.04, 1),
      e.flat(r, a + l, i - l, o - l, c),
      e.solid(r, a + l, i - l, o - l, Math.max(-3, s), c));
  }
  Xz(e, 9409688, 0.12);
  let s = (a + o) / 2;
  (Kz(e, i, s + 3, i, s - 3, 0.45, 8, 125, n, 6.4, 16),
    Kk(e, r + 2, 163, a + 14, 0.45),
    Kk(e, i - 14, 163, o - 14, 0.45),
    Xz(e, 12171185, 0.12),
    e.box(nB(-2411), -3, rB(376), nB(-2380), 14, rB(394), n, 6.4, 16),
    e.solid(nB(-2411), rB(376), nB(-2380), rB(394), -3, 14),
    yield);
}
var uB = (e, t) => [cB.cx + t[0] * Math.cos(e), cB.cz + t[1] * Math.sin(e)];
