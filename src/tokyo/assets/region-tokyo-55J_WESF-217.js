// tokyo/assets/region-tokyo-55J_WESF 217 — top
// Lines 84597-84938 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var Nye = {
    id: `miyashita-park`,
    site: uM(TM.x, TM.z),
    name: { ja: `宮下公園`, zh: `宮下公園`, en: `Miyashita Park` },
    near: 230,
    build: jye,
    far: Mye,
    bounds: () => [-1754, 1150, -1718, 1305],
    farBoxes: (e, t) => [
      {
        x0: TM.x - 17.5,
        x1: TM.x + 17.5,
        z0: TM.z + DM.z0,
        z1: TM.z + DM.z1,
        y0: t.gy,
        y1: t.gy + DM.top,
        rgb: [0.72, 0.7, 0.66],
        lit: !0,
      },
      {
        x0: TM.x - 17.5,
        x1: TM.x + 17.5,
        z0: TM.z + DM.z1,
        z1: TM.z + 71,
        y0: t.gy,
        y1: t.gy + EM,
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
  jM = { x: -1879, z: 1216.5 },
  MM = { x0: -20.5, x1: 14.5, z0: -26, z1: 26, top: 50 },
  NM = { x0: MM.x1, x1: 20.5 },
  PM = { x0: -20.5, x1: 8.5, z0: -22, z1: 22, crown: 102, top: 108.5 },
  FM = 8,
  IM = (MM.z1 - MM.z0) / FM,
  LM = (e) => ({ zs: MM.z1 - e * IM, zn: MM.z1 - (e + 1) * IM, top: 5 * e });
function* Pye(e, t) {
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
          : Sye(e, t, s, c, l, 5, a, n, 3, i));
    };
  (s([MM.x1, MM.z0], [MM.x0, MM.z0], 0, MM.top),
    s([MM.x0, MM.z0], [MM.x0, MM.z1], 0, MM.top),
    s([MM.x0, MM.z1], [MM.x1, MM.z1], 0, MM.top),
    yield);
  for (let t = 0; t < FM; t++) {
    let n = LM(t);
    (s([MM.x1, n.zs], [MM.x1, n.zn], n.top, MM.top),
      t !== 0 &&
        (s([NM.x1, n.zs], [NM.x1, n.zn], 0, n.top),
        s([NM.x0, n.zs], [NM.x1, n.zs], LM(t - 1).top, n.top),
        t === 7 && s([NM.x1, n.zn], [NM.x0, n.zn], 0, n.top),
        e.solid(NM.x0, n.zn, NM.x1, n.zs, 0, n.top)));
  }
  if (!e.coarse) {
    e.col(i).mat(0.5, 0.3, 0.14, 1);
    for (let [t, n] of [
      [MM.x0, MM.z0],
      [MM.x0, MM.z1],
      [MM.x1, MM.z0],
      [MM.x1, MM.z1],
    ])
      e.box(t - 0.7, 0, n - 0.7, t + 0.7, MM.top + 0.3, n + 0.7);
    for (let t = 1; t < FM; t++) {
      let n = LM(t);
      e.box(NM.x1 - 0.7, 0, n.zs - 0.7, NM.x1 + 0.7, n.top + 0.3, n.zs + 0.7);
    }
    e.box(
      NM.x1 - 0.7,
      0,
      MM.z0 - 0.7,
      NM.x1 + 0.7,
      LM(7).top + 0.3,
      MM.z0 + 0.7,
    );
  }
  (e.solid(MM.x0, MM.z0, MM.x1, MM.z1, 0, MM.top), yield);
  for (let t = 0; t < FM; t++) {
    let n = LM(t),
      r = n.top;
    if (
      t > 0 &&
      (e.col(13814976).mat(0.85, 0, 0.03, 1),
      e.flat(NM.x0, n.zn, NM.x1, n.zs, r),
      e.col(5209661).mat(0.95, 0, 0, 0),
      e.box(NM.x0, r, n.zn + 0.3, NM.x0 + 1.1, r + 0.7, n.zs - 0.3),
      !e.coarse)
    )
      for (let t = n.zn + 1.2; t < n.zs - 0.8; t += 2)
        RA(e, NM.x0 + 0.55, r + 0.7, t, 0.6, 4156979);
    if (t < 7) {
      let i = 18.4,
        a = 20.2,
        o = e.coarse ? 4 : 10,
        s = IM / o,
        c = 5 / o;
      e.col(15329250).mat(0.6, 0.2, 0.05, 1);
      for (let t = 0; t < o; t++) {
        let o = n.zs - t * s;
        (e.panel(i, o, a, o, r + t * c, r + (t + 1) * c),
          e.flat(i, o - s, a, o, r + (t + 1) * c));
      }
      for (let t of [i, a]) {
        let i = [t > 19 ? 1 : -1, 0, 0];
        tM(
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
        t > 0 && e.floor(NM.x0, n.zn, i, n.zs, r, r));
    } else
      (e.floor(NM.x0, n.zn, NM.x1, n.zs, r, r),
        pM(e, NM.x1 - 0.12, n.zs, NM.x1 - 0.12, n.zn, r));
    t > 0 && !e.coarse && pM(e, NM.x0, n.zs - 0.12, 18.3, n.zs - 0.12, r);
  }
  yield;
  let c = MM.top;
  if (
    (e.col(13486010).mat(0.85, 0, 0, 0),
    Vk(e, dM(MM.x0, MM.z0, MM.x1, MM.z1), c),
    e.col(5209661).mat(0.95, 0, 0, 0),
    e.box(PM.x1 + 1, c, MM.z0 + 1, MM.x1 - 1, c + 0.8, MM.z0 + 3),
    e.box(PM.x1 + 1, c, MM.z1 - 3, MM.x1 - 1, c + 0.8, MM.z1 - 1),
    !e.coarse)
  ) {
    let t = 431;
    for (let [n, r] of [
      [11.5, -15],
      [11.5, -5],
      [11.5, 6],
      [11.5, 16],
    ])
      LA(e, n, c, r, 6, t++);
    (pM(e, MM.x1 - 0.12, MM.z1, MM.x1 - 0.12, MM.z0, c),
      pM(e, MM.x1, MM.z0 + 0.12, MM.x0, MM.z0 + 0.12, c),
      pM(e, MM.x0, MM.z1 - 0.12, MM.x1, MM.z1 - 0.12, c));
  }
  e.floor(PM.x1, MM.z0, MM.x1, MM.z1, c, c);
}
function* Fye(e, t) {
  let n = dM(PM.x0, PM.z0, PM.x1, PM.z1);
  (e.col(12766417).mat(0.2, 0.3, 0.09, G | 32),
    zk(
      e,
      n,
      MM.top,
      PM.crown,
      t.c(`glass`),
      e.coarse ? 6 : 3,
      e.coarse ? 8.4 : 4.2,
    ),
    e.col(15921904).mat(0.45, 0.4, 0.1, 1),
    Dj(e, n, MM.top, PM.crown, e.coarse ? 6.4 : 3.2, 0.5, 0.3),
    e.col(15527662).mat(0.45, 0.45, 0.25, 1),
    zk(e, n, PM.crown, PM.top, t.A.sub(`lcMidGlass`, 0.5, 0, 1, 1), 6.4, 6.5));
  let r = Rk(n, -0.4);
  (zk(e, PA(r), PM.crown, PM.top, e.white, 60, 7),
    BA(e, r, n, PM.top),
    e.col(8357e3).mat(0.85, 0, 0, 0),
    Vk(e, r, PM.crown + 1),
    e.col(16777215).mat(0.4, 0.2, 0.9, 1));
  let i = e.sub(PM.x1 + 0.02, 0, 0, Math.PI / 2);
  (vM(e, `PARGO`, 0, PM.crown - 9, 6.5, 0.5),
    e.leave(i),
    (i = e.sub((PM.x0 + PM.x1) / 2, 0, PM.z1 + 0.02, Math.PI)),
    vM(e, `PARGO`, 0, PM.crown - 9, 5, 0.5),
    e.leave(i));
  for (let [t, n] of [
    [PM.x0 + 0.5, PM.z0 + 0.5],
    [PM.x1 - 0.5, PM.z1 - 0.5],
  ])
    Wk(e, t, PM.top, n, 0.45);
  e.solid(PM.x0, PM.z0, PM.x1, PM.z1, MM.top, PM.top);
}
function* Iye(e, t) {
  (yield* Pye(e, t), yield* Fye(e, t));
}
function Lye(e, t) {
  (e.col(13227740).mat(0.12, 0.4, 0.11, G),
    e.box(MM.x0, 0, MM.z0, NM.x1, MM.top, MM.z1, t.c(`glass`)),
    e.col(12766417).mat(0.2, 0.3, 0.09, G | 32),
    e.box(PM.x0, MM.top, PM.z0, PM.x1, PM.top, PM.z1, t.c(`glass`)));
}
var Rye = [
  Dye,
  Nye,
  {
    id: `shibuya-parco`,
    site: uM(jM.x, jM.z),
    name: { ja: `渋谷パルゴ`, zh: `澀谷 PARGO`, en: `Shibuya PARGO` },
    near: 230,
    build: Iye,
    far: Lye,
    bounds: () => [-1900, 1190, -1858, 1243],
    farBoxes: (e, t) => [
      {
        x0: jM.x + MM.x0,
        x1: jM.x + NM.x1,
        z0: jM.z + MM.z0,
        z1: jM.z + MM.z1,
        y0: t.gy,
        y1: t.gy + MM.top,
        rgb: [0.62, 0.66, 0.68],
        lit: !0,
      },
      {
        x0: jM.x + PM.x0,
        x1: jM.x + PM.x1,
        z0: jM.z + PM.z0,
        z1: jM.z + PM.z1,
        y0: t.gy + MM.top,
        y1: t.gy + PM.top,
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
var RM = 333,
  zM = {
    under: 119,
    soffit: 125,
    f1: 127,
    ceil1: 131.2,
    mid: 131.4,
    f2: 132.6,
    top2: 136.8,
    roof: 138.5,
  },
  BM = { under: 222, f: 223.5, ceil: 228, roof: 229.6 },
  VM = 248,
  HM = 260,
  UM = 295,
  WM = (RM - zM.roof) / 7,
  GM = 16738858,
  zye = 15853266,
  KM = (e) => e > zM.roof && Math.floor((e - zM.roof) / WM) % 2 == 1,
  Bye = (e) => 1.5 + 42.5 * Math.exp(-e / 95),
  Vye = (e) => 0.79 + 0.21 * (1 - Math.exp(-e / 90)),
  qM = (e) => Bye(e) * Vye(e),
  JM = (e) => 1.1 + 5.6 * Math.exp(-e / 48),
  YM = 7,
  XM = 9,
  ZM = 53,
  QM = [YM, 12, 18, 25, 32, 40, 47, ZM],
  $M = [ZM, 66, 79, 92, 105.5, zM.under],
  eN = [zM.roof, ...[0.5, 1, 1.5, 2, 2.5, 3].map((e) => zM.roof + WM * e)].map(
    (e) => Math.min(e, BM.under),
  ),
  tN = [BM.roof, 238.8, VM],
  nN = 16.2,
  rN = 4.2,
  iN = 7.8,
  aN = 2.2,
  oN = { md: 6, td: 2.1 },
  sN = { x0: -25, x1: 25, z0: -25, z1: 25, h: 26.4 },
  cN = { x0: 25, x1: 56, z0: -25, z1: 25, h: 16 },
  lN = { x0: -65, x1: 65, z0: -39.5, z1: 39.5 },
  uN = { x: (ey.x0 + ey.x1) / 2, z: (ey.z0 + ey.z1) / 2 },
  dN = ty.map((e) => ({
    z0: uN.x - e.x1,
    z1: uN.x - e.x0,
    foot: e.foot - uN.z,
    head: e.head - uN.z,
  })),
  fN = [
    [0, -1, 1, 0],
    [1, 0, 0, 1],
    [0, 1, -1, 0],
    [-1, 0, 0, -1],
  ],
  pN = [
    [-1, -1],
    [1, -1],
    [1, 1],
    [-1, 1],
  ];
function mN(e, t, n, r = qM(n)) {
  let [i, a, o, s] = fN[e];
  return [i * r + o * t * r, n, a * r + s * t * r];
}
function hN(e, t, n = 1) {
  let r = t < zM.under ? 1 : t < BM.roof ? 0.8 : 0.6;
  KM(t)
    ? e.col(zye).mat(0.6, 0.1, 0.14 * r * n, 1)
    : e.col(GM).mat(0.56, 0.12, 0.3 * r * n, 1);
}
function gN(e, t, n, r, i = 4) {
  e.rod(t[0], t[1], t[2], n[0], n[1], n[2], r, i);
}
