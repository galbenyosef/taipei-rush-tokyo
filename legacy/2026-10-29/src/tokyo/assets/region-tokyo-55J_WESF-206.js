// tokyo/assets/region-tokyo-55J_WESF 206 — col
// Lines 81213-81557 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* Mve(e, t) {
  let n = t.A.sub(`lcMidGlass`, 0.5, 0, 1, 1),
    r = t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1),
    i = e.coarse ? 4.8 : 1.6;
  for (let [t, a, o] of [
    [oj, Ove, e.coarse ? 3 : 6],
    [sj, kve, e.coarse ? 8 : 26],
  ]) {
    let s = Lk(t.x0, t.z0, t.x1, t.z1, 0.01, 1);
    if (
      (e.col(16777215).mat(0.3, 0.3, 0.32, G),
      zk(e, s, 0, cj, r, 3.2, cj),
      e.col(14207408).mat(0.7, 0.05, 0.1, 1),
      e.box(
        t.x0 - 0.6,
        4.4,
        t.z0 - 0.6,
        t.x1 + 0.6,
        4.85,
        t.z1 + 0.6,
        e.white,
        0,
        0,
        null,
        !0,
      ),
      t === oj)
    )
      zA(
        e,
        t.x0,
        t.z0,
        t.x1,
        t.z1,
        4.85,
        a,
        i,
        o,
        7903834,
        12760471,
        n,
        6.4,
        12.6,
        14996664,
      );
    else {
      let r = e.sub(0, 0, 0, -Math.PI / 2);
      (zA(
        e,
        -t.z1,
        t.x0,
        -t.z0,
        t.x1,
        4.85,
        (e, t) => a(t, -e),
        i,
        e.coarse ? 3 : 6,
        7903834,
        12760471,
        n,
        6.4,
        12.6,
        14996664,
      ),
        e.leave(r));
    }
    let c = 0;
    for (let e = t.z0; e <= t.z1; e += 2)
      for (let n = t.x0; n <= t.x1; n += 2) c = Math.max(c, a(n, e));
    (e.solid(t.x0, t.z0, t.x1, t.z1, 0, c), yield);
  }
  (e.col(16777215).mat(0.2, 0.4, 0.3, G),
    e.box(
      oj.x1,
      0,
      sj.z0 + 4,
      sj.x0,
      9,
      sj.z1 - 4,
      t.c(`glass`),
      3.2,
      4.5,
      e.white,
    ),
    e.solid(oj.x1, sj.z0 + 4, sj.x0, sj.z1 - 4, 0, 9));
}
function* Nve(e, t) {
  let n = e.coarse ? 16 : 4;
  (e.col(14736336).mat(0.85, 0, 0, 0),
    e.flat(rj(-712), ij(845), rj(-607), ij(990), 0.04, t.c(`paving`), n, n));
  let { x0: r, z0: i, x1: a, z1: o } = Ave;
  (e.col(6787917).mat(0.95, 0, 0, 0),
    e.flat(r + 2, i + 3, rj(-652), o - 3, 0.06, t.c(`lawn`), 4, 4),
    e.flat(rj(-647), i + 3, a - 2, o - 3, 0.06, t.c(`lawn`), 4, 4));
  let s = FA(rj(-670), ij(872), 9, 6.5, e.coarse ? 12 : 28),
    c = FA(rj(-670), ij(872), 9.8, 7.3, e.coarse ? 12 : 28);
  if (
    (e.col(3034972).mat(0.05, 0.3, 0.06, 1),
    IA(e, s, 0.1),
    e.col(13288374).mat(0.8, 0, 0, 0),
    zk(e, c, 0.06, 0.4, e.white, 60, 1),
    zk(e, PA(s), 0.1, 0.4, e.white, 60, 1),
    BA(e, s, c, 0.4),
    yield,
    !e.coarse)
  ) {
    let t = 141;
    for (let [n, r, i] of [
      [-684, 852, 10],
      [-676, 852, 9],
      [-662, 852, 11],
      [-640, 852, 9.5],
      [-628, 852, 10],
      [-616, 852, 9],
      [-684, 890, 9],
      [-662, 889, 10],
      [-640, 889, 9],
      [-618, 890, 10],
      [-656, 868, 8],
      [-630, 870, 11],
      [-620, 878, 8.5],
      [-617, 905, 9],
      [-617, 920, 8],
      [-617, 940, 9.5],
    ])
      LA(e, rj(n), 0.06, ij(r), i, t++);
    for (let t = 0; t < 9; t++) RA(e, rj(-686 + t * 4.2), 0.06, ij(893.5), 0.9);
    for (let t = 856; t < 890; t += 8)
      (e.col(9071176).mat(0.8, 0, 0, 0),
        e.box(rj(-653.4), 0.42, ij(t), rj(-652.8), 0.48, ij(t + 2.2)),
        e.solid(rj(-653.4), ij(t), rj(-652.8), ij(t + 2.2), 0, 0.5, `prop`));
    e.col(3815994).mat(0.5, 0.6, 0, 0);
    for (let t of [858, 874, 890])
      (e.cylY(rj(-646), ij(t), 0, 4.2, 0.08, 6),
        e.push().col(16773848).mat(0.3, 0, 0.8, 1),
        e.cylY(rj(-646), ij(t), 4.2, 4.7, 0.2, 6),
        e.pop(),
        e.pole(rj(-646), ij(t), 0.15, 0, 4.7));
  }
}
function* Pve(e, t) {
  (yield* Nve(e, t), yield* jve(e, t), yield* Mve(e, t));
}
function Fve(e, t) {
  let n = (e) => lj(e, 1);
  (e.col(15922680).mat(0.3, 0.2, 0.08, G | 32),
    NA(e, n, 0, aj.crown, t.c(`glass`), 25.6, 33.6),
    e.col(16054008).mat(0.35, 0.5, 0.3, 1),
    NA(e, n, aj.crown, aj.top, t.A.sub(`lcMidGlass`, 0.5, 0, 1, 1), 12.8, 29.2),
    e.col(9080724).mat(0.85, 0, 0, 0),
    Vk(e, n(aj.top), aj.top),
    Wk(e, 0, aj.top + 1, 0, 0.8),
    e.col(14207408).mat(0.8, 0, 0.1, 1),
    e.box(oj.x0, 0, oj.z0, oj.x1, 15, oj.z1),
    e.box(sj.x0, 0, sj.z0, sj.x1, 13, sj.z1));
}
var Ive = {
  id: `azabudai-hills`,
  site: (e) => ({
    x: nj.x,
    z: nj.z,
    gy: e.groundHeight(nj.x, nj.z),
    facing: 0,
  }),
  name: {
    ja: `麻布台ヒルズ 森JPタワー`,
    zh: `麻布台之丘 森JP大樓`,
    en: `Azabudai Hills Mori JP Tower`,
  },
  near: 270,
  build: Pve,
  far: Fve,
  bounds: () => [-712, 845, -607, 990],
  farBoxes: (e, t) => [
    {
      x0: nj.x - 25,
      x1: nj.x + 25,
      z0: nj.z - 25,
      z1: nj.z + 25,
      y0: t.gy,
      y1: t.gy + 40,
      rgb: [0.46, 0.52, 0.58],
      lit: !0,
    },
    {
      x0: nj.x - 22,
      x1: nj.x + 22,
      z0: nj.z - 22,
      z1: nj.z + 22,
      y0: t.gy + 40,
      y1: t.gy + aj.crown,
      rgb: [0.48, 0.54, 0.6],
      lit: !0,
    },
    {
      x0: nj.x - 15,
      x1: nj.x + 15,
      z0: nj.z - 15,
      z1: nj.z + 15,
      y0: t.gy + aj.crown,
      y1: t.gy + aj.top,
      rgb: [0.8, 0.82, 0.84],
    },
    {
      x0: nj.x + oj.x0,
      x1: nj.x + oj.x1,
      z0: nj.z + oj.z0,
      z1: nj.z + oj.z1,
      y0: t.gy,
      y1: t.gy + 15,
      rgb: [0.55, 0.5, 0.42],
    },
    {
      x0: nj.x + sj.x0,
      x1: nj.x + sj.x1,
      z0: nj.z + sj.z0,
      z1: nj.z + sj.z1,
      y0: t.gy,
      y1: t.gy + 13,
      rgb: [0.55, 0.5, 0.42],
    },
  ],
  anchors: [
    {
      key: `azabudai-hills-square`,
      lx: rj(-650),
      lz: ij(870),
      turn: Math.PI,
      name: { zh: `麻布台之丘 中央廣場`, en: `Azabudai Hills Central Square` },
    },
  ],
  blip: !0,
};
r.add({ 國會議事堂: `国会議事堂` });
var uj = { x: -750, z: 355 },
  dj = 14867409,
  fj = 12892848,
  pj = 1.2,
  mj = 7.8,
  hj = 21,
  gj = [-20, -56, 20, 56, 22.6],
  Lve = [
    [-20.5, -56.5, 23, -40, 24.4],
    [-20.5, 40, 23, 56.5, 24.4],
  ],
  _j = [-19, -18, 24, 18, 26],
  vj = {
    base: 26,
    colY0: 30,
    colY1: 44,
    entY: 46.5,
    steps: 8,
    stepH: 1.8,
    top: 65.45,
  };
function yj(e, t, n, r) {
  return [
    [n, t, e, t],
    [e, t, e, r],
    [e, r, n, r],
    [n, r, n, t],
  ];
}
function bj(e, t, [n, r, i, a, o], s = hj) {
  let c = t.c(`wakoBay`),
    l = t.c(`granite`),
    u = e.coarse ? 7.2 : 3.6,
    d = e.coarse ? 8 : 2;
  for (let [t, f, p, m] of yj(n, r, i, a))
    (e.col(fj).mat(0.85, 0, 0.26, 1),
      e.wall(t, f, p, m, 0, pj, l, d, pj, 0.24),
      e.col(13879998).mat(0.82, 0, 0.24, 1),
      e.wall(t, f, p, m, pj, mj, c, u, 6.6, 0.18, 1.8),
      e.col(dj).mat(0.8, 0, 0.18, 1),
      e.wall(
        t,
        f,
        p,
        m,
        mj,
        s,
        c,
        u,
        e.coarse ? s - mj : (s - mj) / 2,
        0.11,
        1.8,
      ),
      e.col(dj).mat(0.8, 0, 0.11, 1),
      e.wall(t, f, p, m, s + 0.9, o, l, d, e.coarse ? 4 : 2, 0.1));
  (e.col(15262424).mat(0.75, 0, 0.12, 1),
    fC(e, n, r, i, a, pC(s, 0.9, 0.9)),
    e.coarse ||
      fC(e, n, r, i, a, [0, 7.6499999999999995, 0.25, 7.7, 0.25, 8.05, 0, 8.1]),
    e.col(14209478).mat(0.8, 0, 0.08, 1),
    fC(e, n, r, i, a, [0, o - 0.25, 0.2, o - 0.2, 0.2, o, 0, o]),
    e.col(9078656).mat(0.9, 0, 0, 0),
    e.flat(n, r, i, a, o - 0.6),
    e.col(dj).mat(0.8, 0, 0.1, 1));
  for (let [t, s, c, l] of yj(n + 0.5, r + 0.5, i - 0.5, a - 0.5))
    e.panel(c, l, t, s, o - 0.6, o);
  (e.flat(n, r, i, r + 0.5, o),
    e.flat(n, a - 0.5, i, a, o),
    e.flat(n, r + 0.5, n + 0.5, a - 0.5, o),
    e.flat(i - 0.5, r + 0.5, i, a - 0.5, o),
    e.solid(n, r, i, a, 0, o));
}
function xj(e, t, n, r, i, a = 0.55, o = 0.45) {
  e.push().col(dj).mat(0.8, 0, 0.16, 1);
  for (let s = n; s <= r + 0.001; s += i) e.box(t, mj, s - a, t + o, hj, s + a);
  e.pop();
}
function Sj(e, t, n, r, i, a) {
  (e.push().col(dj).mat(0.78, 0, 0.2, 1),
    e.box(t - a * 1.35, r, n - a * 1.35, t + a * 1.35, r + 0.6, n + a * 1.35),
    e.cylY(t, n, r + 0.6, i - 0.7, a, e.coarse ? 6 : 12, a * 0.88, !1),
    e.box(t - a * 1.4, i - 0.7, n - a * 1.4, t + a * 1.4, i, n + a * 1.4),
    e.pop(),
    e.pole(t, n, a, r, i));
}
function* Rve(e, t) {
  if ((bj(e, t, gj), !e.coarse)) {
    (xj(e, gj[2], -36.4, -21.6, 3.6), xj(e, gj[2], 21.6, 36.4, 3.6));
    for (let t of [-1, 1]) {
      (e.col(12174278).mat(0.2, 0.5, 0.05, 0),
        e.box(-12, gj[4] - 0.6, t * 24 - 7, 4, gj[4] + 1.8, t * 24 + 7),
        e.col(7304056).mat(0.6, 0.5, 0, 0));
      for (let n = -11; n < 4; n += 3)
        e.box(n, gj[4] + 1.8, t * 24 - 7, n + 0.2, gj[4] + 2, t * 24 + 7);
    }
  }
  yield;
  for (let n of Lve) {
    bj(e, t, n, 21.8);
    let r = (n[1] + n[3]) / 2,
      i = n[2];
    (e.col(5920078).mat(0.6, 0.2, 0.1, 1),
      e.panel(i + 0.02, r + 6.4, i + 0.02, r - 6.4, mj, hj),
      e.col(dj).mat(0.78, 0, 0.18, 1));
    for (let t of [-6.6, -2.2, 2.2, 6.6])
      e.box(i, mj, r + t - 0.75, i + 1.4, 21.8, r + t + 0.75);
    (e.box(i, 21.8, r - 7.6, i + 1.6, 23.2, r + 7.6),
      e.solid(i, r - 7.6, i + 1.6, r + 7.6, mj, 23.2));
  }
  yield;
}
