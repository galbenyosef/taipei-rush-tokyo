// tokyo/assets/region-tokyo-A7LxHjud 221 — col
// Lines 85890-86201 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* mbe(e) {
  let t = xN(iN, aN),
    n = CN(t, 15.85 / iN),
    r = VM.f1;
  (e.col(4412019).mat(0.95, 0, 0.04, 0),
    Uk(e, n, r, !0),
    e.col(7829370).mat(0.9, 0, 0.1, 1),
    Uk(e, n, VM.ceil1, !1),
    e.col(16774364).mat(0.3, 0, 0.85, 1));
  for (let n of [0.62, 0.86]) {
    let r = CN(t, n);
    for (let t = 0; t < r.length; t++) {
      let n = r[t],
        i = r[(t + 1) % r.length],
        a = (i[1] - n[1]) * 0.012,
        o = -(i[0] - n[0]) * 0.012,
        s = VM.ceil1 - 0.02;
      rM(
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
    tbe(
      e,
      CN(t, 15.899999999999999 / iN),
      CN(t, 15.899999999999999 / iN),
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
          l = 15.95 / iN,
          u = 16.5 / iN;
        e.rod(o * l, r, c * l, o * u, VM.ceil1, c * u, 0.05, 3);
      }
      let c = 15.649999999999999 / iN,
        l = 16.15 / iN;
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
    e.box(-cN.md, r, -cN.md, cN.md, VM.ceil1, cN.md),
    IN(e, -cN.md, -1, r),
    IN(e, cN.md, 1, r),
    e.col(16777215).mat(0.4, 0, 0.85, 1));
  {
    let t = e.sub(cN.md + 0.05, r, 0, Math.PI / 2);
    (bM(e, `TOP DECK`, 0, 2.95, 0.42, 0.03), e.leave(t));
  }
  e.col(qM).mat(0.6, 0.1, 0.06, 0);
  for (let [t, n] of hN) {
    let i = YM(129),
      a = XM(129) / 2;
    (e.box(t * i - a, r, n * i - a, t * i + a, VM.ceil1, n * i + a),
      e.pole(t * i, n * i, a + 0.2, r, VM.ceil1));
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
    NN(e, t, r, n, 1.62 + (a % 4) * 0.05, i[a % i.length]),
  ),
    e.floor(-16.2, -16.2, iN, iN, r),
    FN(e, n, r, 3.6),
    e.solid(-cN.md, -cN.md, cN.md, cN.md, r - 0.2, VM.ceil1),
    e.solid(-17.2, -17.2, 17.2, 17.2, VM.ceil1, VM.ceil1 + 0.4),
    yield);
  let a = xN(oN, sN),
    o = CN(a, 7.5 / oN),
    s = HM.f;
  (e.col(16053490).mat(0.12, 0.2, 0.06, 0),
    Uk(e, o, s, !0),
    e.col(14146270).mat(0.06, 1, 0.05, 1));
  let c = e.coarse ? 8 : 16,
    l = cN.td + 0.2,
    u = 8.2;
  for (let t = 0; t < c; t++) {
    let n = (t / c) * Math.PI * 2,
      r = ((t + 1) / c) * Math.PI * 2,
      i = (n + r) / 2,
      a = HM.ceil - (t % 2 ? 0.2 : 0.9),
      o = HM.ceil - (t % 2 ? 0.8 : 0.1),
      s = (e, t, n) => [Math.cos(e) * t, n, Math.sin(e) * t],
      d = s(n, l, HM.ceil - 0.05),
      f = s(r, l, HM.ceil - 0.05),
      p = s(i, (l + u) / 2, a),
      m = s(n, u, HM.ceil - 0.05),
      h = s(r, u, HM.ceil - 0.05),
      g = s(i, u, o),
      _ = [0, -1, 0];
    (PN(e, d, p, f, _),
      PN(e, d, m, p, _),
      PN(e, f, p, h, _),
      PN(e, p, m, g, _),
      PN(e, p, g, h, _));
  }
  for (let t = 0; t < 8; t++) {
    let n = (t / 8) * Math.PI * 2,
      r = ((t + 1) / 8) * Math.PI * 2,
      i = (e, t, n) => [Math.cos(e) * t, n, Math.sin(e) * t],
      a = cN.td + (t % 2 ? 0.35 : 0.1),
      o = i(n, cN.td, s),
      c = i(r, cN.td, s),
      l = i(n, a, s + 2.2),
      u = i(r, cN.td + 0.45 - (a - cN.td), s + 2.2),
      d = i(n, cN.td, HM.ceil),
      f = i(r, cN.td, HM.ceil),
      p = (n + r) / 2,
      m = [Math.cos(p), 0, Math.sin(p)];
    (PN(e, o, u, c, m),
      PN(e, o, l, u, m),
      PN(e, l, f, u, m),
      PN(e, l, d, f, m));
  }
  (IN(e, -cN.td - 0.4, -1, s), e.col(16767392).mat(0.3, 0, 0.95, 1));
  for (let t = 0; t < o.length; t++) {
    let n = o[t],
      r = o[(t + 1) % o.length];
    e.rod(n[0], HM.ceil - 0.15, n[1], r[0], HM.ceil - 0.15, r[1], 0.04, 3);
  }
  e.col(13225168).mat(0.3, 0.8, 0, 0);
  for (let t = 0; t < a.length; t++) {
    let n = a[t],
      r = a[(t + 1) % a.length],
      i = 7.35 / oN;
    e.rod(n[0] * i, s + 0.95, n[1] * i, r[0] * i, s + 0.95, r[1] * i, 0.035, 4);
  }
  for (let [t, n, r] of [
    [-5, 2.5, 2040101],
    [4.6, -3.2, 9056044],
    [2.4, 5, 14275784],
  ])
    NN(e, t, s, n, 1.66, r);
  (e.floor(-7.8, -7.8, oN, oN, s),
    FN(e, o, s, 3.4),
    e.solid(
      -cN.td - 0.4,
      -cN.td - 0.4,
      cN.td + 0.4,
      cN.td + 0.4,
      s - 0.2,
      HM.ceil,
    ),
    e.solid(-8.8, -8.8, 8.8, 8.8, HM.ceil, HM.ceil + 0.4));
}
var hbe = {
  id: `tokyo-tower-decks`,
  site: MN,
  name: {
    ja: `東京タワー 展望台`,
    zh: `東京鐵塔 展望台`,
    en: `Tokyo Tower observation decks`,
  },
  near: 70,
  interior: !0,
  build: mbe,
  far(e) {
    (e.col(2831432).mat(1, 0, 0, 0), e.flat(-1, -1, 1, 1, VM.f1));
  },
  bounds: (e, t) => [t.x - iN, t.z - iN, t.x + iN, t.z + iN],
  farBoxes: () => [],
};
r.add({ 增上寺: `増上寺`, "增上寺 大門": `増上寺 大門` });
var LN = 12534056,
  RN = 10104864,
  zN = 13804874,
  BN = 12894132,
  VN = 9278361,
  HN = -25,
  UN = { x: 23, z0: 4, z1: 29.5, h: 5.6 },
  WN = { x: 13, z0: 0 },
  GN = { x: 11, z0: -10 },
  KN = 6,
  qN = 27.5,
  JN = { x: -42, z: -17 };
function YN(e, t, n, r, i, a) {
  return e.A.sub(t, n / 256, 1 - a / 256, i / 256, 1 - r / 256);
}
function XN(e) {
  return {
    frieze: YN(e, `myojinOrn`, 0, 0, 256, 40),
    rafters: YN(e, `myojinOrn`, 0, 40, 256, 60),
    door: YN(e, `myojinOrn`, 96, 164, 176, 256),
    shoji: e.c(`shoji`),
    plaster: e.c(`plaster`),
    granite: e.c(`granite`),
    kawara: e.c(`kawara`),
    lantern: e.c(`lantern`),
  };
}
function ZN(e, t = RN) {
  return {
    rise: 1,
    cell: e.kawara,
    color: VN,
    band: t,
    soffit: LN,
    ridgeColor: 3882563,
    tile: 2,
  };
}
var QN = (e, t = 0.14, n = LN) => e.col(n).mat(0.62, 0, t * 0.55, 1);
function gbe(e, t, n, r, i, a, o, s, c, l = 0.02) {
  (e.wall(i, r - l, n, r - l, o, s, t, c, s - o),
    e.wall(n, a + l, i, a + l, o, s, t, c, s - o),
    e.wall(n - l, r, n - l, a, o, s, t, c, s - o),
    e.wall(i + l, a, i + l, r, o, s, t, c, s - o));
}
function $N(e, t, n, r, i, a, o, s, c, l = 3) {
  let u = (s - o) / l;
  for (let s = 0; s < l; s++) {
    let d = (c * (s + 1)) / l;
    (QN(e, 0.1),
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
function eP(e, t, n, r = LN) {
  let i = 0.9;
  QN(e, 0.1, r);
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
            .col(zN)
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
