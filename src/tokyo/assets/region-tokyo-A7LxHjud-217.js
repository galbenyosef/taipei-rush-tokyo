// tokyo/assets/region-tokyo-A7LxHjud 217 — top
// Lines 84688-85029 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var Kye = {
    id: `miyashita-park`,
    site: fM(DM.x, DM.z),
    name: { ja: `宮下公園`, zh: `宮下公園`, en: `Miyashita Park` },
    near: 230,
    build: Wye,
    far: Gye,
    bounds: () => [-1754, 1150, -1718, 1305],
    farBoxes: (e, t) => [
      {
        x0: DM.x - 17.5,
        x1: DM.x + 17.5,
        z0: DM.z + kM.z0,
        z1: DM.z + kM.z1,
        y0: t.gy,
        y1: t.gy + kM.top,
        rgb: [0.72, 0.7, 0.66],
        lit: !0,
      },
      {
        x0: DM.x - 17.5,
        x1: DM.x + 17.5,
        z0: DM.z + kM.z1,
        z1: DM.z + 71,
        y0: t.gy,
        y1: t.gy + OM,
        rgb: [0.6, 0.63, 0.62],
        lit: !0,
      },
    ],
    anchors: [
      {
        key: `miyashita-park-stairs`,
        lx: 13,
        lz: 74,
        turn: Math.PI,
        name: { zh: `宮下公園 南側階梯`, en: `Miyashita Park, south stairs` },
      },
      {
        key: `miyashita-park-rooftop`,
        lx: 0,
        lz: -40,
        turn: 0,
        name: { zh: `宮下公園 屋頂草坪`, en: `Miyashita Park, rooftop lawn` },
      },
    ],
    blip: !0,
  },
  NM = { x: -1879, z: 1216.5 },
  PM = { x0: -20.5, x1: 14.5, z0: -26, z1: 26, top: 50 },
  FM = { x0: PM.x1, x1: 20.5 },
  IM = { x0: -20.5, x1: 8.5, z0: -22, z1: 22, crown: 102, top: 108.5 },
  LM = 8,
  RM = (PM.z1 - PM.z0) / LM,
  zM = (e) => ({ zs: PM.z1 - e * RM, zn: PM.z1 - (e + 1) * RM, top: 5 * e });
function* qye(e, t) {
  let n = t.c(`glass`),
    r = t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1),
    i = 16053490,
    a = e.coarse ? 0 : 0.6,
    o = () => e.col(13227740).mat(0.12, 0.4, 0.11, G),
    s = (t, s, c, l) => {
      (c < 5 &&
        (e.col(16777215).mat(0.3, 0.35, 0.3, G),
        e.wall(t[0], t[1], s[0], s[1], c, 5, r, 3.2, 5),
        (c = 5)),
        o(),
        e.coarse
          ? e.wall(t[0], t[1], s[0], s[1], c, l, n, 6, 10)
          : Fye(e, t, s, c, l, 5, a, n, 3, i));
    };
  (s([PM.x1, PM.z0], [PM.x0, PM.z0], 0, PM.top),
    s([PM.x0, PM.z0], [PM.x0, PM.z1], 0, PM.top),
    s([PM.x0, PM.z1], [PM.x1, PM.z1], 0, PM.top),
    yield);
  for (let t = 0; t < LM; t++) {
    let n = zM(t);
    (s([PM.x1, n.zs], [PM.x1, n.zn], n.top, PM.top),
      t !== 0 &&
        (s([FM.x1, n.zs], [FM.x1, n.zn], 0, n.top),
        s([FM.x0, n.zs], [FM.x1, n.zs], zM(t - 1).top, n.top),
        t === 7 && s([FM.x1, n.zn], [FM.x0, n.zn], 0, n.top),
        e.solid(FM.x0, n.zn, FM.x1, n.zs, 0, n.top)));
  }
  if (!e.coarse) {
    e.col(i).mat(0.5, 0.3, 0.14, 1);
    for (let [t, n] of [
      [PM.x0, PM.z0],
      [PM.x0, PM.z1],
      [PM.x1, PM.z0],
      [PM.x1, PM.z1],
    ])
      e.box(t - 0.7, 0, n - 0.7, t + 0.7, PM.top + 0.3, n + 0.7);
    for (let t = 1; t < LM; t++) {
      let n = zM(t);
      e.box(FM.x1 - 0.7, 0, n.zs - 0.7, FM.x1 + 0.7, n.top + 0.3, n.zs + 0.7);
    }
    e.box(
      FM.x1 - 0.7,
      0,
      PM.z0 - 0.7,
      FM.x1 + 0.7,
      zM(7).top + 0.3,
      PM.z0 + 0.7,
    );
  }
  (e.solid(PM.x0, PM.z0, PM.x1, PM.z1, 0, PM.top), yield);
  for (let t = 0; t < LM; t++) {
    let n = zM(t),
      r = n.top;
    if (
      t > 0 &&
      (e.col(13814976).mat(0.85, 0, 0.03, 1),
      e.flat(FM.x0, n.zn, FM.x1, n.zs, r),
      e.col(5209661).mat(0.95, 0, 0, 0),
      e.box(FM.x0, r, n.zn + 0.3, FM.x0 + 1.1, r + 0.7, n.zs - 0.3),
      !e.coarse)
    )
      for (let t = n.zn + 1.2; t < n.zs - 0.8; t += 2)
        BA(e, FM.x0 + 0.55, r + 0.7, t, 0.6, 4156979);
    if (t < 7) {
      let i = 18.4,
        a = 20.2,
        o = e.coarse ? 4 : 10,
        s = RM / o,
        c = 5 / o;
      e.col(15329250).mat(0.6, 0.2, 0.05, 1);
      for (let t = 0; t < o; t++) {
        let o = n.zs - t * s;
        (e.panel(i, o, a, o, r + t * c, r + (t + 1) * c),
          e.flat(i, o - s, a, o, r + (t + 1) * c));
      }
      for (let t of [i, a]) {
        let i = [t > 19 ? 1 : -1, 0, 0];
        rM(
          e,
          [t, r, n.zs],
          [t, r, n.zn],
          [t, r + 5, n.zn],
          [t, r + 5, n.zn],
          i,
        );
      }
      (e.coarse ||
        (e.col(13159632).mat(0.4, 0.6, 0, 0),
        e.rod(20.25, r + 1.1, n.zs, 20.25, r + 6.1, n.zn, 0.04, 4)),
        e.floor(i, n.zn, a, n.zs, r + 5, r, `stairs`),
        t > 0 && e.floor(FM.x0, n.zn, i, n.zs, r, r));
    } else
      (e.floor(FM.x0, n.zn, FM.x1, n.zs, r, r),
        hM(e, FM.x1 - 0.12, n.zs, FM.x1 - 0.12, n.zn, r));
    t > 0 && !e.coarse && hM(e, FM.x0, n.zs - 0.12, 18.3, n.zs - 0.12, r);
  }
  yield;
  let c = PM.top;
  if (
    (e.col(13486010).mat(0.85, 0, 0, 0),
    Uk(e, pM(PM.x0, PM.z0, PM.x1, PM.z1), c),
    e.col(5209661).mat(0.95, 0, 0, 0),
    e.box(IM.x1 + 1, c, PM.z0 + 1, PM.x1 - 1, c + 0.8, PM.z0 + 3),
    e.box(IM.x1 + 1, c, PM.z1 - 3, PM.x1 - 1, c + 0.8, PM.z1 - 1),
    !e.coarse)
  ) {
    let t = 431;
    for (let [n, r] of [
      [11.5, -15],
      [11.5, -5],
      [11.5, 6],
      [11.5, 16],
    ])
      zA(e, n, c, r, 6, t++);
    (hM(e, PM.x1 - 0.12, PM.z1, PM.x1 - 0.12, PM.z0, c),
      hM(e, PM.x1, PM.z0 + 0.12, PM.x0, PM.z0 + 0.12, c),
      hM(e, PM.x0, PM.z1 - 0.12, PM.x1, PM.z1 - 0.12, c));
  }
  e.floor(IM.x1, PM.z0, PM.x1, PM.z1, c, c);
}
function* Jye(e, t) {
  let n = pM(IM.x0, IM.z0, IM.x1, IM.z1);
  (e.col(12766417).mat(0.2, 0.3, 0.09, G | 32),
    Vk(
      e,
      n,
      PM.top,
      IM.crown,
      t.c(`glass`),
      e.coarse ? 6 : 3,
      e.coarse ? 8.4 : 4.2,
    ),
    e.col(15921904).mat(0.45, 0.4, 0.1, 1),
    kj(e, n, PM.top, IM.crown, e.coarse ? 6.4 : 3.2, 0.5, 0.3),
    e.col(15527662).mat(0.45, 0.45, 0.25, 1),
    Vk(e, n, IM.crown, IM.top, t.A.sub(`lcMidGlass`, 0.5, 0, 1, 1), 6.4, 6.5));
  let r = Bk(n, -0.4);
  (Vk(e, IA(r), IM.crown, IM.top, e.white, 60, 7),
    HA(e, r, n, IM.top),
    e.col(8357e3).mat(0.85, 0, 0, 0),
    Uk(e, r, IM.crown + 1),
    e.col(16777215).mat(0.4, 0.2, 0.9, 1));
  let i = e.sub(IM.x1 + 0.02, 0, 0, Math.PI / 2);
  (bM(e, `PARGO`, 0, IM.crown - 9, 6.5, 0.5),
    e.leave(i),
    (i = e.sub((IM.x0 + IM.x1) / 2, 0, IM.z1 + 0.02, Math.PI)),
    bM(e, `PARGO`, 0, IM.crown - 9, 5, 0.5),
    e.leave(i));
  for (let [t, n] of [
    [IM.x0 + 0.5, IM.z0 + 0.5],
    [IM.x1 - 0.5, IM.z1 - 0.5],
  ])
    Kk(e, t, IM.top, n, 0.45);
  e.solid(IM.x0, IM.z0, IM.x1, IM.z1, PM.top, IM.top);
}
function* Yye(e, t) {
  (yield* qye(e, t), yield* Jye(e, t));
}
function Xye(e, t) {
  (e.col(13227740).mat(0.12, 0.4, 0.11, G),
    e.box(PM.x0, 0, PM.z0, FM.x1, PM.top, PM.z1, t.c(`glass`)),
    e.col(12766417).mat(0.2, 0.3, 0.09, G | 32),
    e.box(IM.x0, PM.top, IM.z0, IM.x1, IM.top, IM.z1, t.c(`glass`)));
}
var Zye = [
  Bye,
  Kye,
  {
    id: `shibuya-parco`,
    site: fM(NM.x, NM.z),
    name: { ja: `渋谷パルゴ`, zh: `澀谷 PARGO`, en: `Shibuya PARGO` },
    near: 230,
    build: Yye,
    far: Xye,
    bounds: () => [-1900, 1190, -1858, 1243],
    farBoxes: (e, t) => [
      {
        x0: NM.x + PM.x0,
        x1: NM.x + FM.x1,
        z0: NM.z + PM.z0,
        z1: NM.z + PM.z1,
        y0: t.gy,
        y1: t.gy + PM.top,
        rgb: [0.62, 0.66, 0.68],
        lit: !0,
      },
      {
        x0: NM.x + IM.x0,
        x1: NM.x + IM.x1,
        z0: NM.z + IM.z0,
        z1: NM.z + IM.z1,
        y0: t.gy + PM.top,
        y1: t.gy + IM.top,
        rgb: [0.5, 0.54, 0.57],
        lit: !0,
      },
    ],
    anchors: [
      {
        key: `shibuya-pargo-terraces`,
        lx: 26,
        lz: 20,
        turn: Math.PI / 2,
        name: {
          zh: `澀谷 PARGO 公園通側階梯露台`,
          en: `Shibuya PARGO, Koen-dori terraces`,
        },
      },
    ],
    blip: !0,
  },
];
r.add({ "東京鐵塔 展望台": `東京タワー 展望台` });
var BM = 333,
  VM = {
    under: 119,
    soffit: 125,
    f1: 127,
    ceil1: 131.2,
    mid: 131.4,
    f2: 132.6,
    top2: 136.8,
    roof: 138.5,
  },
  HM = { under: 222, f: 223.5, ceil: 228, roof: 229.6 },
  UM = 248,
  WM = 260,
  GM = 295,
  KM = (BM - VM.roof) / 7,
  qM = 16738858,
  Qye = 15853266,
  JM = (e) => e > VM.roof && Math.floor((e - VM.roof) / KM) % 2 == 1,
  $ye = (e) => 1.5 + 42.5 * Math.exp(-e / 95),
  ebe = (e) => 0.79 + 0.21 * (1 - Math.exp(-e / 90)),
  YM = (e) => $ye(e) * ebe(e),
  XM = (e) => 1.1 + 5.6 * Math.exp(-e / 48),
  ZM = 7,
  QM = 9,
  $M = 53,
  eN = [ZM, 12, 18, 25, 32, 40, 47, $M],
  tN = [$M, 66, 79, 92, 105.5, VM.under],
  nN = [VM.roof, ...[0.5, 1, 1.5, 2, 2.5, 3].map((e) => VM.roof + KM * e)].map(
    (e) => Math.min(e, HM.under),
  ),
  rN = [HM.roof, 238.8, UM],
  iN = 16.2,
  aN = 4.2,
  oN = 7.8,
  sN = 2.2,
  cN = { md: 6, td: 2.1 },
  lN = { x0: -25, x1: 25, z0: -25, z1: 25, h: 26.4 },
  uN = { x0: 25, x1: 56, z0: -25, z1: 25, h: 16 },
  dN = { x0: -65, x1: 65, z0: -39.5, z1: 39.5 },
  fN = { x: (ry.x0 + ry.x1) / 2, z: (ry.z0 + ry.z1) / 2 },
  pN = iy.map((e) => ({
    z0: fN.x - e.x1,
    z1: fN.x - e.x0,
    foot: e.foot - fN.z,
    head: e.head - fN.z,
  })),
  mN = [
    [0, -1, 1, 0],
    [1, 0, 0, 1],
    [0, 1, -1, 0],
    [-1, 0, 0, -1],
  ],
  hN = [
    [-1, -1],
    [1, -1],
    [1, 1],
    [-1, 1],
  ];
function gN(e, t, n, r = YM(n)) {
  let [i, a, o, s] = mN[e];
  return [i * r + o * t * r, n, a * r + s * t * r];
}
function _N(e, t, n = 1) {
  let r = t < VM.under ? 1 : t < HM.roof ? 0.8 : 0.6;
  JM(t)
    ? e.col(Qye).mat(0.6, 0.1, 0.14 * r * n, 1)
    : e.col(qM).mat(0.56, 0.12, 0.3 * r * n, 1);
}
function vN(e, t, n, r, i = 4) {
  e.rod(t[0], t[1], t[2], n[0], n[1], n[2], r, i);
}
