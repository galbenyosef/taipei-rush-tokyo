// tokyo/assets/region-tokyo-55J_WESF 221 — col
// Lines 85799-86110 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* tbe(e) {
  let t = yN(nN, rN),
    n = xN(t, 15.85 / nN),
    r = zM.f1;
  (e.col(4412019).mat(0.95, 0, 0.04, 0),
    Vk(e, n, r, !0),
    e.col(7829370).mat(0.9, 0, 0.1, 1),
    Vk(e, n, zM.ceil1, !1),
    e.col(16774364).mat(0.3, 0, 0.85, 1));
  for (let n of [0.62, 0.86]) {
    let r = xN(t, n);
    for (let t = 0; t < r.length; t++) {
      let n = r[t],
        i = r[(t + 1) % r.length],
        a = (i[1] - n[1]) * 0.012,
        o = -(i[0] - n[0]) * 0.012,
        s = zM.ceil1 - 0.02;
      tM(
        e,
        [n[0], s, n[1]],
        [n[0] + a, s, n[1] + o],
        [i[0] + a, s, i[1] + o],
        [i[0], s, i[1]],
        [0, -1, 0],
      );
    }
  }
  if (
    (e.col(15329250).mat(0.5, 0.2, 0.05, 0),
    Hye(
      e,
      xN(t, 15.899999999999999 / nN),
      xN(t, 15.899999999999999 / nN),
      r,
      r + 0.35,
    ),
    !e.coarse)
  ) {
    e.col(3159098).mat(0.5, 0.5, 0, 0);
    for (let n = 0; n < t.length; n++) {
      let i = t[n],
        a = t[(n + 1) % t.length],
        o = Math.hypot(a[0] - i[0], a[1] - i[1]),
        s = Math.max(1, Math.round(o / 1.6));
      for (let t = 0; t <= s; t++) {
        let n = t / s,
          o = i[0] + (a[0] - i[0]) * n,
          c = i[1] + (a[1] - i[1]) * n,
          l = 15.95 / nN,
          u = 16.5 / nN;
        e.rod(o * l, r, c * l, o * u, zM.ceil1, c * u, 0.05, 3);
      }
      let c = 15.649999999999999 / nN,
        l = 16.15 / nN;
      (e.rod(i[0] * c, r + 1, i[1] * c, a[0] * c, r + 1, a[1] * c, 0.04, 4),
        e.rod(
          i[0] * l,
          r + 2.6,
          i[1] * l,
          a[0] * l,
          r + 2.6,
          a[1] * l,
          0.05,
          3,
        ));
    }
  }
  (e.col(2500652).mat(0.6, 0.3, 0.04, 0),
    e.box(-oN.md, r, -oN.md, oN.md, zM.ceil1, oN.md),
    PN(e, -oN.md, -1, r),
    PN(e, oN.md, 1, r),
    e.col(16777215).mat(0.4, 0, 0.85, 1));
  {
    let t = e.sub(oN.md + 0.05, r, 0, Math.PI / 2);
    (vM(e, `TOP DECK`, 0, 2.95, 0.42, 0.03), e.leave(t));
  }
  e.col(GM).mat(0.6, 0.1, 0.06, 0);
  for (let [t, n] of pN) {
    let i = qM(129),
      a = JM(129) / 2;
    (e.box(t * i - a, r, n * i - a, t * i + a, zM.ceil1, n * i + a),
      e.pole(t * i, n * i, a + 0.2, r, zM.ceil1));
  }
  e.col(1780275).mat(0.08, 0.6, 0.02, 0);
  for (let [t, n, i, a] of [
    [-14, -2, -12.6, 2],
    [12.6, -2, 14, 2],
    [-2, -14, 2, -12.6],
    [-2, 12.6, 2, 14],
  ])
    e.flat(t, n, i, a, r + 0.012);
  e.col(1974308).mat(0.7, 0.2, 0, 0);
  for (let [t, n] of [
    [-9, -9],
    [9, 9],
    [9, -9],
    [-9, 9],
  ])
    e.cylY(t, n, r, r + 0.45, 0.35, 8);
  let i = [3095893, 9056044, 14275784, 4151866, 2040101, 12094026, 7040885];
  ([
    [-14.6, -6],
    [-14.4, 3],
    [-8, -14.6],
    [3, -14.5],
    [14.4, 5],
    [14.5, -2],
    [6, 14.6],
    [-5, 14.5],
    [-10, 10.5],
    [10, -10.6],
    [0, -9],
    [-9.5, 0.5],
  ].forEach(([t, n], a) =>
    jN(e, t, r, n, 1.62 + (a % 4) * 0.05, i[a % i.length]),
  ),
    e.floor(-16.2, -16.2, nN, nN, r),
    NN(e, n, r, 3.6),
    e.solid(-oN.md, -oN.md, oN.md, oN.md, r - 0.2, zM.ceil1),
    e.solid(-17.2, -17.2, 17.2, 17.2, zM.ceil1, zM.ceil1 + 0.4),
    yield);
  let a = yN(iN, aN),
    o = xN(a, 7.5 / iN),
    s = BM.f;
  (e.col(16053490).mat(0.12, 0.2, 0.06, 0),
    Vk(e, o, s, !0),
    e.col(14146270).mat(0.06, 1, 0.05, 1));
  let c = e.coarse ? 8 : 16,
    l = oN.td + 0.2,
    u = 8.2;
  for (let t = 0; t < c; t++) {
    let n = (t / c) * Math.PI * 2,
      r = ((t + 1) / c) * Math.PI * 2,
      i = (n + r) / 2,
      a = BM.ceil - (t % 2 ? 0.2 : 0.9),
      o = BM.ceil - (t % 2 ? 0.8 : 0.1),
      s = (e, t, n) => [Math.cos(e) * t, n, Math.sin(e) * t],
      d = s(n, l, BM.ceil - 0.05),
      f = s(r, l, BM.ceil - 0.05),
      p = s(i, (l + u) / 2, a),
      m = s(n, u, BM.ceil - 0.05),
      h = s(r, u, BM.ceil - 0.05),
      g = s(i, u, o),
      _ = [0, -1, 0];
    (MN(e, d, p, f, _),
      MN(e, d, m, p, _),
      MN(e, f, p, h, _),
      MN(e, p, m, g, _),
      MN(e, p, g, h, _));
  }
  for (let t = 0; t < 8; t++) {
    let n = (t / 8) * Math.PI * 2,
      r = ((t + 1) / 8) * Math.PI * 2,
      i = (e, t, n) => [Math.cos(e) * t, n, Math.sin(e) * t],
      a = oN.td + (t % 2 ? 0.35 : 0.1),
      o = i(n, oN.td, s),
      c = i(r, oN.td, s),
      l = i(n, a, s + 2.2),
      u = i(r, oN.td + 0.45 - (a - oN.td), s + 2.2),
      d = i(n, oN.td, BM.ceil),
      f = i(r, oN.td, BM.ceil),
      p = (n + r) / 2,
      m = [Math.cos(p), 0, Math.sin(p)];
    (MN(e, o, u, c, m),
      MN(e, o, l, u, m),
      MN(e, l, f, u, m),
      MN(e, l, d, f, m));
  }
  (PN(e, -oN.td - 0.4, -1, s), e.col(16767392).mat(0.3, 0, 0.95, 1));
  for (let t = 0; t < o.length; t++) {
    let n = o[t],
      r = o[(t + 1) % o.length];
    e.rod(n[0], BM.ceil - 0.15, n[1], r[0], BM.ceil - 0.15, r[1], 0.04, 3);
  }
  e.col(13225168).mat(0.3, 0.8, 0, 0);
  for (let t = 0; t < a.length; t++) {
    let n = a[t],
      r = a[(t + 1) % a.length],
      i = 7.35 / iN;
    e.rod(n[0] * i, s + 0.95, n[1] * i, r[0] * i, s + 0.95, r[1] * i, 0.035, 4);
  }
  for (let [t, n, r] of [
    [-5, 2.5, 2040101],
    [4.6, -3.2, 9056044],
    [2.4, 5, 14275784],
  ])
    jN(e, t, s, n, 1.66, r);
  (e.floor(-7.8, -7.8, iN, iN, s),
    NN(e, o, s, 3.4),
    e.solid(
      -oN.td - 0.4,
      -oN.td - 0.4,
      oN.td + 0.4,
      oN.td + 0.4,
      s - 0.2,
      BM.ceil,
    ),
    e.solid(-8.8, -8.8, 8.8, 8.8, BM.ceil, BM.ceil + 0.4));
}
var nbe = {
  id: `tokyo-tower-decks`,
  site: AN,
  name: {
    ja: `東京タワー 展望台`,
    zh: `東京鐵塔 展望台`,
    en: `Tokyo Tower observation decks`,
  },
  near: 70,
  interior: !0,
  build: tbe,
  far(e) {
    (e.col(2831432).mat(1, 0, 0, 0), e.flat(-1, -1, 1, 1, zM.f1));
  },
  bounds: (e, t) => [t.x - nN, t.z - nN, t.x + nN, t.z + nN],
  farBoxes: () => [],
};
r.add({ 增上寺: `増上寺`, "增上寺 大門": `増上寺 大門` });
var FN = 12534056,
  IN = 10104864,
  LN = 13804874,
  RN = 12894132,
  zN = 9278361,
  BN = -25,
  VN = { x: 23, z0: 4, z1: 29.5, h: 5.6 },
  HN = { x: 13, z0: 0 },
  UN = { x: 11, z0: -10 },
  WN = 6,
  GN = 27.5,
  KN = { x: -42, z: -17 };
function qN(e, t, n, r, i, a) {
  return e.A.sub(t, n / 256, 1 - a / 256, i / 256, 1 - r / 256);
}
function JN(e) {
  return {
    frieze: qN(e, `myojinOrn`, 0, 0, 256, 40),
    rafters: qN(e, `myojinOrn`, 0, 40, 256, 60),
    door: qN(e, `myojinOrn`, 96, 164, 176, 256),
    shoji: e.c(`shoji`),
    plaster: e.c(`plaster`),
    granite: e.c(`granite`),
    kawara: e.c(`kawara`),
    lantern: e.c(`lantern`),
  };
}
function YN(e, t = IN) {
  return {
    rise: 1,
    cell: e.kawara,
    color: zN,
    band: t,
    soffit: FN,
    ridgeColor: 3882563,
    tile: 2,
  };
}
var XN = (e, t = 0.14, n = FN) => e.col(n).mat(0.62, 0, t * 0.55, 1);
function rbe(e, t, n, r, i, a, o, s, c, l = 0.02) {
  (e.wall(i, r - l, n, r - l, o, s, t, c, s - o),
    e.wall(n, a + l, i, a + l, o, s, t, c, s - o),
    e.wall(n - l, r, n - l, a, o, s, t, c, s - o),
    e.wall(i + l, a, i + l, r, o, s, t, c, s - o));
}
function ZN(e, t, n, r, i, a, o, s, c, l = 3) {
  let u = (s - o) / l;
  for (let s = 0; s < l; s++) {
    let d = (c * (s + 1)) / l;
    (XN(e, 0.1),
      e.box(
        n - d,
        o + s * u,
        r - d,
        i + d,
        o + (s + 1) * u,
        a + d,
        e.coarse ? e.white : t.rafters,
        e.coarse ? 0 : 2.4,
        e.coarse ? 0 : u,
        e.white,
        !0,
      ));
  }
}
function QN(e, t, n, r = FN) {
  let i = 0.9;
  XN(e, 0.1, r);
  for (let r = 0; r + 3 < t.length; r += 2) {
    let a = t[r],
      o = t[r + 1],
      s = t[r + 2],
      c = t[r + 3];
    if ((e.rod(a, n + i, o, s, n + i, c, 0.07, 4), e.coarse)) continue;
    e.rod(a, n + 0.4, o, s, n + 0.4, c, 0.05, 3);
    let l = Math.max(1, Math.round(Math.hypot(s - a, c - o) / 1.6));
    for (let t = 0; t <= l; t++) {
      let r = a + ((s - a) * t) / l,
        u = o + ((c - o) * t) / l;
      (e.box(r - 0.07, n, u - 0.07, r + 0.07, n + i + 0.05, u + 0.07),
        (t === 0 || t === l) &&
          e
            .push()
            .col(LN)
            .mat(0.35, 0.8, 0.08, 1)
            .lathe(
              r,
              u,
              [0.1, n + i + 0.05, 0.11, n + i + 0.14, 0.02, n + i + 0.32],
              5,
            )
            .pop());
    }
  }
}
