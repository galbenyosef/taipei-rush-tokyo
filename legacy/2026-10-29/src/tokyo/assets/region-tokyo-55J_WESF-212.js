// tokyo/assets/region-tokyo-55J_WESF 212 — col
// Lines 82966-83295 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* aye(e, t) {
  let n = Cj(e, jj.x, jj.z),
    {
      x0: r,
      x1: i,
      nw0: a,
      road0: o,
      road1: s,
      sw1: c,
      shop1: l,
      kerb: u,
    } = Uj;
  (e.col(6053474).mat(0.92, 0, 0, 0),
    e.flat(r, o, i, s, Nj),
    e.col(15921898).mat(0.7, 0, 0.05, 1));
  for (let t = r + 2; t < i - 3; t += 6)
    e.flat(
      t,
      (o + s) / 2 - 0.08,
      t + 3,
      (o + s) / 2 + 0.08,
      0.041999999999999996,
    );
  (e.col(13814976).mat(0.8, 0, 0.03, G),
    e.flat(
      r,
      a,
      i,
      o - 0.25,
      u,
      t.c(`paving`),
      e.coarse ? 10 : 3,
      e.coarse ? 10 : 3,
    ),
    e.flat(
      r,
      s + 0.25,
      i,
      c,
      u,
      t.c(`paving`),
      e.coarse ? 10 : 3,
      e.coarse ? 10 : 3,
    ),
    e.col(11973290).mat(0.85, 0, 0, 0),
    e.box(r, Nj, o - 0.25, i, u + 0.01, o),
    e.box(r, Nj, s, i, u + 0.01, s + 0.25),
    e.panel(r, a, r, o - 0.25, Nj, u),
    e.panel(i, o - 0.25, i, a, Nj, u),
    e.panel(i, c, i, s + 0.25, Nj, u),
    e.panel(r, s + 0.25, r, c, Nj, u),
    e.panel(i, a, r, a, Nj, u),
    e.floor(r, a, i, o, u),
    e.floor(r, s, i, c, u),
    yield);
  let d = new ie(4421),
    f = [
      { col: 15525594, cell: t.c(`granite`), tw: 2.4, th: 2.4, emis: 0.06 },
      { col: 3817028, cell: t.c(`office`), tw: 2.4, th: 3.2, emis: 0.3 },
      {
        col: 13154458,
        cell: t.A.sub(`lcTkGrid`, 0, 0, 0.5, 1),
        tw: 6.4,
        th: 13.2,
        emis: 0.2,
      },
      { col: 15266034, cell: t.c(`glass`), tw: 3, th: 4.4, emis: 0.4 },
    ],
    p = t.c(`wakoShow`),
    m = -1108,
    h = 0;
  for (; m < -973;) {
    let n = Math.min(-972 - m, 10 + Math.floor(d.next() * 8)),
      r = 9 + Math.floor(d.next() * 4) * 3,
      i = f[Math.floor(d.next() * f.length)],
      a = c,
      o = l;
    (e.col(16777215).mat(0.35, 0.2, 0.42, G),
      e.wall(m + n, a, m, a, u, 4.4, p, 3.2, 4.3),
      e.col(i.col).mat(0.4, 0.3, i.emis, G),
      e.wall(m + n, a, m, a, 4.4, r, i.cell, i.tw, i.th),
      e.col(2895151).mat(0.5, 0.5, 0, 0),
      e.coarse || e.box(m + 0.4, 4.4, a - 0.5, m + n - 0.4, 4.75, a + 0.1),
      e.col(11841704).mat(0.85, 0, 0, 0));
    let s = m <= -1108 ? u : h;
    (r > s
      ? e.wall(m, a, m, o, Math.max(u, s), r, t.c(`plaster`), 4, 4)
      : s > r && e.wall(m, o, m, a, r, s, t.c(`plaster`), 4, 4),
      e.wall(m, o, m + n, o, u, r, t.c(`plaster`), 8, 8),
      e.flat(m, a, m + n, o, r),
      e.solid(m, a, m + n, o, 0, r),
      (h = r),
      (m += n),
      m >= -973 &&
        (e.col(11841704).mat(0.85, 0, 0, 0),
        e.wall(m, o, m, a, u, r, t.c(`plaster`), 4, 4)));
  }
  yield;
  let g = 71;
  for (let t = -1112; t < -972; t += 9)
    (t > -1112 && t < -1086) ||
      (Gj(e, t, a + 3, 8.5, g++, !0), e.pole(t, a + 3, 0.3, u, 3));
  for (let t = -1104; t < -972; t += e.coarse ? 18 : 9)
    (Gj(e, t, c - 2.5, 8, g++, !1), e.pole(t, c - 2.5, 0.3, u, 3));
  if (!e.coarse)
    for (let t = -1100; t < -972; t += 18)
      (WC(e, t + 4.5, u, o - 0.8, 5),
        WC(e, t + 9, u, s + 0.8, 5),
        e.pole(t + 4.5, o - 0.8, 0.12, 0, 5),
        e.pole(t + 9, s + 0.8, 0.12, 0, 5));
  (e.col(5208638).mat(0.95, 0, 0, 0),
    e.box(r + 0.2, Nj, o + 0.02, r + 1.4, 1, s - 0.02),
    e.solid(r + 0.2, o, r + 1.4, s, 0, 1, `prop`),
    yield,
    yield* oye(e, t),
    e.leave(n));
}
function* oye(e, t) {
  let { x0: n, x1: r, z0: i, z1: a, h: o } = Wj;
  if (
    (e.col(14865600).mat(0.35, 0.3, 0.38, G),
    Ej(e, n, i, r, a, 0, 10, t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1), 3.2, 10),
    e.col(16047300).mat(0.5, 0.25, 0.12, G | 32),
    Ej(
      e,
      n + 1,
      i + 1,
      r - 1,
      a - 1,
      10.5,
      o,
      t.A.sub(`lcTkGrid`, 0, 0, 0.5, 1),
      e.coarse ? 12.8 : 6.4,
      e.coarse ? 26.4 : 13.2,
      9078402,
    ),
    e.col(13349788).mat(0.7, 0, 0.04, 1),
    e.box(n - 0.3, 10, i - 0.3, r + 0.3, 10.5, a + 0.3),
    e.coarse ||
      (Hk(
        e,
        [
          [r - 0.6, i + 0.6],
          [n + 0.6, i + 0.6],
          [n + 0.6, a - 0.6],
          [r - 0.6, a - 0.6],
        ],
        0.6,
        o - 1.2,
        o + 0.4,
      ),
      e.col(10131604).mat(0.7, 0.3, 0, 0),
      e.box(n + 10, o, i + 10, r - 10, o + 4, a - 10)),
    Wk(e, n + 2, o + 0.4, i + 2, 0.35),
    e.col(14209220).mat(0.4, 0.4, 0.1, 1),
    e.box(
      -1111,
      5.2,
      a - 0.4,
      -1089,
      5.8,
      Uj.road0 - 0.5,
      e.white,
      0,
      0,
      null,
      !0,
    ),
    !e.coarse)
  ) {
    e.col(16773334).mat(0.3, 0, 0.8, 1);
    for (let t = -1109; t < -1090; t += 3.5)
      e.flat(t - 0.3, a + 1.5, t + 0.3, a + 5, 5.18, e.white, 0, 0, !1);
  }
  e.col(5919824).mat(0.4, 0.6, 0, 0);
  for (let t of [-1110, -1090])
    (e.cylY(t, Uj.road0 - 1.2, Uj.kerb, 5.25, 0.2, 8, 0.2, !1),
      e.pole(t, Uj.road0 - 1.2, 0.25, 0, 5.2));
  (e.solid(n, i, r, a, 0, o), yield);
}
function sye(e, t) {
  let n = Cj(e, jj.x, jj.z),
    { x0: r, x1: i, z0: a, z1: o, h: s } = Wj;
  (e.col(16047300).mat(0.5, 0.25, 0.12, G | 32),
    Ej(
      e,
      r,
      a,
      i,
      o,
      0,
      s,
      t.A.sub(`lcTkGrid`, 0, 0, 0.5, 1),
      25.6,
      44,
      9078402,
    ),
    e.col(14077634).mat(0.6, 0.1, 0.1, G),
    Ej(
      e,
      -1108,
      Uj.sw1,
      -972,
      Uj.shop1,
      0,
      13,
      t.c(`office`),
      9.6,
      12.8,
      10131088,
    ),
    e.leave(n));
}
var cye = [
  Qve,
  iye,
  {
    id: `roppongi-keyakizaka`,
    site: Mj,
    name: { ja: `けやき坂`, zh: `櫸木坂`, en: `Keyakizaka` },
    near: 220,
    build: aye,
    far: sye,
    bounds: () => [-1121, 1062, -967, 1134],
    farBoxes: (e, t) => [
      {
        x0: Wj.x0,
        x1: Wj.x1,
        z0: Wj.z0,
        z1: Wj.z1,
        y0: t.gy,
        y1: t.gy + Wj.h,
        rgb: [0.48, 0.36, 0.28],
        lit: !0,
      },
    ],
    anchors: [
      {
        key: `roppongi-keyakizaka`,
        lx: -976 - jj.x,
        lz: 1114 - jj.z,
        turn: -Math.PI / 2,
        name: { zh: `櫸木坂通`, en: `Keyakizaka-dori` },
      },
    ],
    roofs: [
      {
        lx0: -1111 - jj.x,
        lz0: Wj.z1 - jj.z,
        lx1: -1089 - jj.x,
        lz1: Uj.road0 - 0.5 - jj.z,
        y: 5.2,
      },
    ],
    blip: !1,
  },
];
r.add({ 東京中町: `東京ナカマチ` });
var Kj = { x: -1045, z: 859 },
  lye = (e) => ({
    x: Kj.x,
    z: Kj.z,
    gy: e.groundHeight(Kj.x, Kj.z),
    facing: 0,
  }),
  qj = 0.03,
  Jj = [
    { x0: -1050, x1: -1006, z0: 838, z1: 892, y: 152 },
    { x0: -1046, x1: -1010, z0: 840, z1: 890, y: 204 },
    { x0: -1042, x1: -1014, z0: 843, z1: 887, y: 240 },
  ],
  Yj = 248,
  Xj = 14,
  Zj = {
    x0: -1100,
    x1: -1052,
    z0: 846,
    z1: 886,
    h: 22,
    ridge: 27.5,
    s0: 858,
    s1: 874,
  },
  uye = { x0: -1004, x1: -975, z0: 894, z1: 917, h: 15 },
  Qj = { x0: -1121, x1: -1104, z0: 846, z1: 916, h: 62 },
  $j = { x0: -1121, x1: -975, z0: 798, z1: 836 },
  eM = (e, t) => Lk(e.x0, e.z0, e.x1, e.z1, 1.4, t ? 1 : 2);
function* dye(e, t) {
  let n = t.c(`glass`),
    r = eM(Jj[0], e.coarse);
  (e.col(14870248).mat(0.25, 0.45, 0.4, G),
    zk(e, r, 0, Xj, t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1), 3.2, Xj),
    e.col(15131354).mat(0.6, 0.1, 0.06, 1),
    Hk(e, r, 0.4, Xj, 15.2),
    yield);
  let i = 15.2;
  for (let t = 0; t < Jj.length; t++) {
    let r = Jj[t],
      a = eM(r, e.coarse);
    (e.col(15920354).mat(0.3, 0.2, 0.05, G | 32),
      zk(e, a, i, r.y, n, e.coarse ? 12 : 6, e.coarse ? 16.8 : 8.4),
      e.coarse ||
        (e.col(15659506).mat(0.4, 0.5, 0.03, 1),
        Dj(e, a, i, r.y, 3, 0.5, 0.26)),
      e.col(15263972).mat(0.5, 0.3, 0.06, 1),
      Hk(e, a, 0.55, r.y - 0.4, r.y + 1),
      (i = r.y + 1),
      yield);
  }
  let a = eM(Jj[2], e.coarse);
  (e.col(15791350).mat(0.4, 0.4, 0.22, 1),
    zk(e, a, i, 247.7, t.A.sub(`lcMidGlass`, 0.5, 0, 1, 1), 6.4, 12.6),
    e.col(8159364).mat(0.85, 0, 0, 0),
    Vk(e, a, 246.5),
    e.coarse ||
      (e.col(11054254).mat(0.7, 0.3, 0, 0),
      zk(e, [...Rk(a, -0.3)].reverse(), 246.5, 247.7, e.white, 8, 8),
      e.col(15264490).mat(0.5, 0.3, 0.1, 1),
      Oj(e, Rk(a, 0.12), Rk(a, -0.3), 247.7, Yj),
      e.col(10133154).mat(0.7, 0.3, 0, 0),
      e.box(-1034, 246.5, 852, -1022, 249.5, 878)));
  for (let t of [Jj[2]])
    (Wk(e, t.x0 + 1.5, Yj, t.z0 + 1.5, 0.45),
      Wk(e, t.x1 - 1.5, Yj, t.z1 - 1.5, 0.45),
      e.coarse ||
        (Wk(e, t.x1 - 1.5, Yj, t.z0 + 1.5, 0.4),
        Wk(e, t.x0 + 1.5, Yj, t.z1 - 1.5, 0.4)));
  let o = Jj[0];
  e.solid(o.x0, o.z0, o.x1, o.z1, 0, Yj);
}
