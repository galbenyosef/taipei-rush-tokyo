// tokyo/assets/region-tokyo-55J_WESF 265 — col
// Lines 98597-98937 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var CCe = {
    id: `shibuya-109`,
    site: CR(mz.x, mz.z),
    name: { ja: `SHIBUYA108`, zh: `SHIBUYA108`, en: `SHIBUYA108` },
    near: 260,
    build: xCe,
    far: SCe,
    farBoxes: (e, t) => [
      {
        x0: -1911.5,
        x1: -1870.5,
        z0: 1355.5,
        z1: 1406.5,
        y0: t.gy,
        y1: t.gy + _z,
        rgb: [0.72, 0.74, 0.76],
        lit: !0,
      },
      {
        x0: t.x + gz.x - gz.r,
        x1: t.x + gz.x + gz.r,
        z0: t.z + gz.z - gz.r,
        z1: t.z + gz.z + gz.r,
        y0: t.gy,
        y1: t.gy + vz,
        rgb: [0.78, 0.8, 0.82],
        glow: 0.25,
      },
    ],
    blip: !0,
    anchors: [
      {
        key: `shibuya-108`,
        lx: gz.x + 11,
        lz: gz.z - 11,
        turn: xR * 0.75,
        name: { zh: `SHIBUYA108 前`, en: `In front of SHIBUYA108` },
      },
    ],
  },
  Cz = { x: -1874, z: 1281 };
function wCe(e, t) {
  let n = 4.3;
  e.push().col(12107460).mat(0.35, 0.75, 0.05, G);
  for (let t of [-1, 1])
    (e.cylY(0, t * n, 0, 5, 0.17, 8, 0.15, !0), e.pole(0, t * n, 0.2, 0, 5));
  let r = e.coarse ? 6 : 12,
    i = (e) => [-4.3 + 2 * n * e, 5 + 1.5999999999999996 * Math.sin(e * xR)];
  for (let t of [-0.25, 0.25])
    for (let n = 0; n < r; n++) {
      let [a, o] = i(n / r),
        [s, c] = i((n + 1) / r);
      e.rod(t, o, a, t, c, s, 0.09, 6);
    }
  if (!e.coarse)
    for (let t = 1; t < r; t += 2) {
      let [n, a] = i(t / r);
      e.rod(-0.25, a, n, 0.25, a, n, 0.04, 4);
    }
  if (
    (e.col(1714764).mat(0.5, 0.4),
    e.box(-0.22, 6.35, -3.1, 0.22, 7.6499999999999995, 3.1),
    e.col(16777215).mat(0.3, 0, 0.55, SR),
    e.panel(0.24, 3, 0.24, -3, 6.42, 7.58, wR(t, `gate`)),
    e.panel(-0.24, -3, -0.24, 3, 6.42, 7.58, wR(t, `gate`)),
    !e.coarse)
  ) {
    e.col(16773840).mat(0.3, 0, 0.8, 1);
    for (let t = 1; t < 12; t++) {
      let [n, r] = i(t / 12);
      Math.abs(n) < 3.2 ||
        (kR(e, 0.32, r + 0.1, n, 0.07, 0.07, 5, 2),
        kR(e, -0.32, r + 0.1, n, 0.07, 0.07, 5, 2));
    }
  }
  e.pop();
}
var TCe = [
  rCe,
  lCe,
  mCe,
  vCe,
  bCe,
  CCe,
  {
    id: `center-gai-gate`,
    site: CR(Cz.x, Cz.z),
    name: { ja: `渋谷センター街`, zh: `澀谷中心街`, en: `Shibuya Center-gai` },
    near: 200,
    build: wCe,
    far() {},
    farBoxes: () => [],
    bounds: (e, t) => [t.x - 6, t.z - 6, t.x + 6, t.z + 6],
    anchors: [
      {
        key: `center-gai`,
        lx: 9,
        lz: 0,
        turn: -xR / 2,
        name: { zh: `澀谷中心街入口`, en: `Shibuya Center-gai entrance` },
      },
    ],
  },
];
r.add({ 竹下通: `竹下通り`, 表參道: `表参道` });
var ECe = (e, t) => (n) => ({
    x: e,
    z: t,
    gy: n.groundHeight(e, t),
    facing: 0,
  }),
  wz = (e, t) => e.A.sub(`p3hiSigns`, xS[t][0] / 640, 0, xS[t][1] / 640, 1),
  Tz = [16748484, 16765530, 9429960, 10275071, 13019391, 16756858],
  Ez = { x: -1786, z: 890, half: 5.25, curb: 3.25, west: -27.5, east: 66.5 };
function Dz(e, t, n, r, i, a) {
  (e.col(a).mat(0.35, 0, 0.25, 1),
    e.lathe(
      t,
      r,
      [
        0.01,
        n - i,
        i * 0.75,
        n - i * 0.6,
        i,
        n,
        i * 0.75,
        n + i * 0.65,
        0.01,
        n + i,
      ],
      e.coarse ? 4 : 6,
    ));
}
function Oz(e, t, n) {
  let r = Ez.half - 0.65,
    i = 6.6;
  for (let t of [-1, 1])
    (e.col(16052974).mat(0.4, 0.5),
      e.box(n - 0.18, 0, t * r - 0.18, n + 0.18, i, t * r + 0.18),
      e.pole(n, t * r, 0.25, 0, i));
  let a = 4.6,
    o = 5.9,
    s = r + 0.3;
  (e.col(16777215).mat(0.5, 0, 0.08, 1),
    e.box(n - 0.25, 3.7499999999999996, -s, n + 0.25, 6.0200000000000005, s));
  let c = wz(t, `takeshita`),
    l = t.A.sub(`hjSigns`, SS.tkStreet[0] / CS, 0, SS.tkStreet[1] / CS, 1);
  (e.col(16777215).mat(0.45, 0, 0.2, G),
    e.panel(n - 0.27, -s + 0.25, n - 0.27, s - 0.25, a, o, c),
    e.panel(n + 0.27, s - 0.25, n + 0.27, -s + 0.25, a, o, c),
    e.panel(n - 0.27, -s + 1.2, n - 0.27, s - 1.2, 3.8499999999999996, 4.5, l),
    e.panel(n + 0.27, s - 1.2, n + 0.27, -s + 1.2, 3.8499999999999996, 4.5, l));
  let u = 2.3,
    d = 8.2 + 0.2,
    f = e.coarse ? 8 : 14;
  for (let t = 0; t < f; t++) {
    let r = (t / f) * Math.PI * 2;
    Dz(e, n, d + Math.sin(r) * u, Math.cos(r) * u, 0.42, Tz[t % Tz.length]);
  }
  Dz(e, n, 8.099999999999998, 0, 0.95, 16774392);
  for (let t of [-1, 1])
    (e.col(16774392).mat(0.35, 0, 0.25, 1),
      e.lathe(
        n,
        t * 0.42,
        [
          0.01, 8.799999999999999, 0.28, 9.299999999999999, 0.25,
          9.999999999999998, 0.01, 10.299999999999999,
        ],
        e.coarse ? 4 : 6,
      ),
      e.coarse ||
        (e.col(16748484).mat(0.35, 0, 0.25, 1),
        e.lathe(
          n - 0.08,
          t * 0.42,
          [
            0.01, 8.999999999999998, 0.14, 9.349999999999998, 0.12,
            9.899999999999999, 0.01, 10.099999999999998,
          ],
          5,
        )));
  if (!e.coarse) {
    Dz(e, n, 7.249999999999998, 0, 0.3, 16732058);
    for (let [t, r, i] of [
      [-1.6, 0.9, 16765530],
      [1.7, 0.5, 10275071],
      [-1.2, -1.4, 16765530],
      [1.4, -1.5, 13019391],
    ])
      (e.col(i).mat(0.4, 0.3, 0.3, 1),
        e.lathe(
          n,
          t,
          [0.01, d + r - 0.3, 0.32, d + r, 0.01, d + r + 0.3],
          5,
          Math.PI / 5,
        ));
  }
}
function DCe(e, t, n, r) {
  let i = Math.sign(n);
  (e.col(16184302).mat(0.45, 0.5),
    e.cylY(t, n, 0, 5.4, 0.09, 6, 0.07, !1),
    e.col(Tz[r % Tz.length]).mat(0.3, 0, 0.8, 1),
    e.lathe(
      t,
      n,
      [0.01, 5.3, 0.32, 5.5, 0.34, 5.75, 0.25, 6, 0.01, 6.1],
      e.coarse ? 5 : 8,
    ),
    e.col(14210252).mat(0.45, 0.5),
    e.rod(t, 4.5, n, t, 4.5, n - i * 0.9, 0.03, 4),
    e.rod(t, 2.6, n, t, 2.6, n - i * 0.9, 0.03, 4));
  let a = Tz[(r + 1) % Tz.length],
    o = Tz[(r + 3) % Tz.length];
  (e.col(a).mat(0.7, 0, 0.18, 1),
    e.box(t - 0.02, 2.62, n - i * 0.88, t + 0.02, 4.48, n - i * 0.48),
    e.col(o).mat(0.7, 0, 0.18, 1),
    e.box(t - 0.02, 2.62, n - i * 0.44, t + 0.02, 4.48, n - i * 0.06),
    e.coarse ||
      (e.col(16777215).mat(0.6, 0, 0.3, 1),
      e.box(t - 0.035, 3.7, n - i * 0.74, t + 0.035, 3.95, n - i * 0.62),
      e.box(t - 0.035, 3.7, n - i * 0.3, t + 0.035, 3.95, n - i * 0.18)),
    e.pole(t, n, 0.12, 0, 5.4));
}
var OCe = {
    id: `takeshita-dori`,
    site: ECe(Ez.x, Ez.z),
    name: { ja: `竹下通り`, zh: `竹下通`, en: `Takeshita-dori` },
    near: 200,
    *build(e, t) {
      let n = (n, r, i) => {
        let a = e.sub(
          n,
          t.plan.groundHeight(Ez.x + n, Ez.z + r) - t.site.gy,
          0,
          0,
        );
        (i(), e.leave(a));
      };
      (n(Ez.west, 0, () => Oz(e, t, 0)),
        n(Ez.east, 0, () => Oz(e, t, 0)),
        yield);
      let r = Ez.curb + 0.45,
        i = 0;
      for (let t = Ez.west + 10; t < Ez.east - 6; t += 18, i++) {
        let a = i % 2 ? r : -r,
          o = i;
        n(t, a, () => DCe(e, 0, a, o));
      }
    },
    far() {},
    farBoxes: () => [],
    bounds: (e, t) => [
      t.x + Ez.west - 15,
      t.z - 20,
      t.x + Ez.east + 15,
      t.z + 20,
    ],
    anchors: [
      {
        key: `takeshita-gate`,
        lx: Ez.west - 6,
        lz: 0,
        turn: -Math.PI / 2,
        name: { zh: `竹下通入口`, en: `Takeshita-dori gate` },
      },
    ],
    blip: !0,
  },
  kz = { x: -1545, z: 990, lz: 13.2 };
function Az(e, t, n) {
  let r = Math.PI / 6;
  (e.col(11052187).mat(0.95),
    e.box(t - 1.1, 0, n - 1.1, t + 1.1, 0.3, n + 1.1),
    e.box(t - 0.85, 0.3, n - 0.85, t + 0.85, 0.55, n + 0.85),
    e.col(6183766).mat(0.95),
    e.lathe(t, n, [0.78, 0.55, 0.8, 0.95, 0.55, 1.15], 6, r),
    e.col(11775910).mat(0.95),
    e.lathe(t, n, [0.42, 1.15, 0.36, 3.2, 0.42, 3.25], 6, r),
    e.lathe(t, n, [0.42, 3.25, 0.82, 3.6, 0.82, 3.78, 0.6, 3.82], 6, r),
    e.col(16773320).mat(0.4, 0, 0.9, 1),
    e.lathe(t, n, [0.5, 3.82, 0.5, 4.75], 6, r),
    e.col(11775910).mat(0.95));
  for (let i = 0; i < 6; i++) {
    let a = r + (i / 6) * Math.PI * 2;
    e.cylY(t + Math.cos(a) * 0.55, n + Math.sin(a) * 0.55, 3.82, 4.75, 0.09, 4);
  }
  if (
    (e.lathe(
      t,
      n,
      [0.45, 4.75, 1.05, 4.85, 1.12, 5, 0.7, 5.35, 0.35, 5.6],
      6,
      r,
    ),
    !e.coarse)
  )
    for (let i = 0; i < 6; i++) {
      let a = r + (i / 6) * Math.PI * 2;
      e.lathe(
        t + Math.cos(a) * 1.08,
        n + Math.sin(a) * 1.08,
        [0.01, 4.95, 0.1, 5.05, 0.08, 5.18, 0.01, 5.24],
        5,
      );
    }
  (e.lathe(t, n, [0.3, 5.6, 0.36, 5.75, 0.22, 5.85], 8),
    e.lathe(
      t,
      n,
      [0.22, 5.85, 0.3, 6.05, 0.26, 6.22, 0.1, 6.36, 0.01, 6.45],
      8,
    ),
    e.solid(t - 1.1, n - 1.1, t + 1.1, n + 1.1, 0, 3.3));
}
var kCe = {
  id: `omotesando-lanterns`,
  site: (e) => ({
    x: kz.x,
    z: kz.z,
    gy: e.groundHeight(kz.x, kz.z - kz.lz),
    facing: 0,
  }),
  name: { ja: `表参道`, zh: `表參道`, en: `Omotesando` },
  near: 180,
  build(e) {
    (Az(e, 0, -kz.lz), Az(e, 0, kz.lz));
  },
  far() {},
  farBoxes: () => [],
  bounds: (e, t) => [t.x - 20, t.z - kz.lz - 20, t.x + 20, t.z + kz.lz + 20],
};
r.add({
  日出城: `サンライズシティ`,
  池袋站東口: `池袋駅東口`,
  池袋站西口: `池袋駅西口`,
  日出60通: `サンライズ60通り`,
});
