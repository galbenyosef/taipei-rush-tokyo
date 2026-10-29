// tokyo/assets/region-tokyo-A7LxHjud 309 — col
// Lines 112127-112407 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* xDe(e, t) {
  let n = e.sub(-wK.x, 0, -wK.z, 0),
    r = t.c(`glass`),
    i = t.c(`office`),
    a = e.coarse ? 3 : 1;
  (e.push().col(13223613).mat(0.85, 0, 0, 0),
    e.flat(
      CK.x0,
      CK.z0,
      CK.x1,
      CK.z1,
      0.08,
      e.coarse ? e.white : t.c(`paving`),
      e.coarse ? 0 : 3,
      e.coarse ? 0 : 3,
    ),
    e.pop());
  let o = (t) => {
    (e.push().col(AK).mat(0.8, 0, 0.06, 1),
      e.box(t.x0, 0, t.z0, t.x1, t.h, t.z1),
      e.col(5069408).mat(0.25, 0.3, 0.2, G | 32));
    for (let [n, i] of [
      [4.2, 6.4],
      [9, 11.2],
    ])
      (e.wall(t.x0 - 0.03, t.z0, t.x0 - 0.03, t.z1, n, i, r, 3 * a, 2.2),
        e.wall(t.x0, t.z1 + 0.03, t.x1, t.z1 + 0.03, n, i, r, 3 * a, 2.2),
        e.wall(t.x1 + 0.03, t.z1, t.x1 + 0.03, t.z0, n, i, r, 3 * a, 2.2),
        e.wall(t.x1, t.z0 - 0.03, t.x0, t.z0 - 0.03, n, i, r, 3 * a, 2.2));
    (e.pop(), e.solid(t.x0, t.z0, t.x1, t.z1, 0, t.h));
  };
  if (
    (o(DK),
    o(OK),
    yield,
    e.push().col(5593434).mat(0.6, 0.1, 0.1, G),
    e.box(
      TK.x0 + 2,
      0,
      TK.z0 + 2,
      TK.x1 - 2,
      TK.base,
      TK.z1 - 2,
      i,
      4 * a,
      4.5,
    ),
    e.col(12899532).mat(0.3, 0.25, 0.14, G | 32),
    e.box(TK.x0, TK.base, TK.z0, TK.x1, TK.h, TK.z1, r, 3.6 * a, 8.2),
    e.col(10132632).mat(0.85, 0, 0, 0),
    e.flat(TK.x0, TK.z0, TK.x1, TK.z1, TK.h + 0.01),
    !e.coarse)
  ) {
    e.col(yDe).mat(0.5, 0.5, 0, 0);
    for (let t = TK.x0; t <= TK.x1 + 0.01; t += (TK.x1 - TK.x0) / 6)
      (e.box(t - 0.2, TK.base, TK.z0 - 0.3, t + 0.2, TK.h, TK.z0),
        e.box(t - 0.2, TK.base, TK.z1, t + 0.2, TK.h, TK.z1 + 0.3));
    for (let t = TK.z0; t <= TK.z1 + 0.01; t += (TK.z1 - TK.z0) / 4)
      (e.box(TK.x0 - 0.3, TK.base, t - 0.2, TK.x0, TK.h, t + 0.2),
        e.box(TK.x1, TK.base, t - 0.2, TK.x1 + 0.3, TK.h, t + 0.2));
  }
  (e.pop(), e.solid(TK.x0, TK.z0, TK.x1, TK.z1, 0, TK.h), yield);
  let s = e.coarse ? 10 : 20;
  if (
    (e.push().col(15658730).mat(0.6, 0.2, 0.05, 1),
    e.lathe(
      EK.x,
      EK.z,
      [
        EK.r,
        TK.h,
        EK.r,
        TK.h + EK.h - 1.5,
        EK.r - 1.2,
        TK.h + EK.h,
        0.01,
        TK.h + EK.h + 0.3,
      ],
      s,
    ),
    !e.coarse)
  ) {
    e.col(13948628);
    for (let t = 0; t < 24; t++) {
      let n = (t / 24) * Math.PI * 2;
      e.box(
        EK.x + Math.cos(n) * (EK.r + 0.1) - 0.12,
        TK.h + 0.5,
        EK.z + Math.sin(n) * (EK.r + 0.1) - 0.12,
        EK.x + Math.cos(n) * (EK.r + 0.1) + 0.12,
        TK.h + EK.h - 1.6,
        EK.z + Math.sin(n) * (EK.r + 0.1) + 0.12,
      );
    }
  }
  let c = EK.x + 3,
    l = EK.z;
  (e.col(12106940).mat(0.5, 0.5, 0, 0),
    e.cylY(c, l, TK.h + EK.h, TK.h + EK.h + 16, 0.45, 6, 0.2),
    e.col(14169386).mat(0.6, 0, 0, 0),
    e.cylY(c, l, TK.h + EK.h + 16, TK.h + EK.h + 19, 0.22, 6, 0.12),
    e.col(15263972).mat(0.5, 0.3, 0, 0));
  let u = e.coarse ? 6 : 12;
  (MK(e, EK.x + EK.r + 2.5, TK.h + 6, EK.z - 4, 2.6, -0.3, 0.25, u),
    MK(e, EK.x + EK.r + 2.2, TK.h + 8.5, EK.z + 3, 2.1, 0.5, 0.15, u),
    MK(
      e,
      EK.x - 3,
      TK.h + EK.h + 1.8,
      EK.z - EK.r + 1,
      1.6,
      -Math.PI / 2,
      0.3,
      u,
    ),
    MK(e, TK.x1 - 3, TK.h + 2.6, TK.z1 - 3, 2.2, 0.8, 0.5, u),
    e.pop(),
    yield);
  let d = kK;
  if (
    (e.push().col(jK).mat(0.75, 0.05, 0.06, 1),
    e.box(d.x0, d.cy0, d.z0, d.x1, d.h, d.z1, t.c(`granite`), 3, 3),
    e.box(d.x0 + 4, d.h, d.z0 + 3, d.x0 + 12, d.h + 6, d.z0 + 11),
    e.col(4869714).mat(0.6, 0.3, 0.02, G),
    e.box(d.x0 + 1, 0, d.z0 + 1, d.x1 - 1, d.cy0, d.z1 - 1, i, 1.2 * a, 1.5),
    !e.coarse)
  ) {
    e.col(6126910).mat(0.95, 0, 0, 0);
    for (let t of [3.6, 7.6])
      e.box(d.x0 + 1, t, d.z1 - 1, d.x1 - 1, t + 0.6, d.z1 - 0.2);
  }
  if (
    (e.col(10470320).mat(0.15, 0.4, 0.3, G),
    e.box(d.x0 - 2, d.cy0, d.z1 - 10, d.x1 - 8, d.cy1, d.cz1, r, 3 * a, 3.5),
    e.col(14079696).mat(0.7, 0, 0.05, 1),
    e.box(d.x0 - 2.3, d.cy0 - 0.6, d.z1 - 10.3, d.x1 - 7.7, d.cy0, d.cz1 + 0.3),
    e.box(d.x0 - 2.3, d.cy1, d.z1 - 10.3, d.x1 - 7.7, d.cy1 + 0.6, d.cz1 + 0.3),
    e.pop(),
    e.solid(d.x0, d.z0, d.x1, d.z1, 0, d.h),
    !e.coarse)
  ) {
    let t = -1950,
      n = CK.z1 - 0.5;
    e.push();
    let r = [14694970, 3116878, 3105476];
    for (let i = 0; i < 3; i++)
      e.col(r[i])
        .mat(0.5, 0, 0.3, 1)
        .box(t + i * 1.3 - 1.9, 0, n - 0.6, t + i * 1.3 - 0.8, 1.8, n + 0.4);
    (e.col(16185074).mat(0.5, 0, 0.6, 1),
      WB(e, `JHK`, t, 0.45, n + 0.43, zB, 0.9, {
        px: 18,
        align: 0.5,
        maxW: 3.6,
        raw: !0,
      }),
      e.col(3815994).mat(0.6, 0, 0, 0),
      WB(e, `JHK放送センター`, DK.x0 + 18, DK.h - 2.6, DK.z1 + 0.06, zB, 1.2, {
        px: 18,
        align: 0.5,
        maxW: 16,
        raw: !0,
      }),
      e.pop());
  }
  let f = HV(7711);
  for (let [n, r] of [
    [-1964, 1230],
    [-1942, 1232],
    [-1960, 1186],
  ])
    GV(
      e,
      `keyaki`,
      n,
      r,
      f.range(8, 11),
      Math.floor(f.next() * 1e6),
      t.season ?? `green`,
    );
  e.leave(n);
}
function SDe(e) {
  let t = e.sub(-wK.x, 0, -wK.z, 0);
  (e.push().mat(0.7, 0.2, 0, 0),
    e.col(7308937).box(TK.x0, 0, TK.z0, TK.x1, TK.h, TK.z1),
    e
      .col(15658730)
      .lathe(EK.x, EK.z, [EK.r, TK.h, EK.r, TK.h + EK.h, 0.01, TK.h + EK.h], 8),
    e.col(AK).box(DK.x0, 0, DK.z0, DK.x1, DK.h, DK.z1),
    e.box(OK.x0, 0, OK.z0, OK.x1, OK.h, OK.z1),
    e.col(jK).box(kK.x0, 0, kK.z0, kK.x1, kK.h, kK.z1),
    e.pop(),
    e.leave(t));
}
var CDe = {
  id: `jhk-center`,
  site: bDe,
  name: {
    ja: `JHK放送センター`,
    zh: `JHK 放送中心`,
    en: `JHK Broadcasting Center`,
  },
  near: 260,
  build: xDe,
  far: SDe,
  bounds: () => [CK.x0, CK.z0, CK.x1, CK.z1 + 3],
  farBoxes: () => [
    {
      x0: TK.x0,
      x1: TK.x1,
      z0: TK.z0,
      z1: TK.z1,
      y0: 0.15,
      y1: TK.h,
      rgb: [0.42, 0.52, 0.54],
      lit: !0,
    },
    {
      x0: DK.x0,
      x1: DK.x1,
      z0: DK.z0,
      z1: DK.z1,
      y0: 0.15,
      y1: DK.h,
      rgb: [0.8, 0.79, 0.75],
    },
    {
      x0: kK.x0,
      x1: kK.x1,
      z0: kK.z0,
      z1: kK.z1,
      y0: 0.15,
      y1: kK.h,
      rgb: [0.6, 0.62, 0.62],
    },
  ],
  blip: !0,
};
r.add({ "澀谷 Streamline": `渋谷ストリームライン` });
var NK = { x0: -1692.8, z0: 1465.8, x1: -1661.8, z1: 1520 },
  PK = { x: (NK.x0 + NK.x1) / 2, z: (NK.z0 + NK.z1) / 2 },
  FK = {
    x0: -1690.5,
    x1: -1664.5,
    z0: 1472,
    z1: 1518,
    pod: 22,
    band: 36,
    h: 172,
    crown: 180,
  },
  IK = { z0: NK.z0, z1: FK.z0, deck: 7 },
  wDe = (e) => ({
    x: PK.x,
    z: PK.z,
    gy: e.groundHeight(NK.x0, NK.z0),
    facing: 0,
  }),
  LK = (e, t, n, r) => [
    [
      [e, t],
      [e, r],
      [-1, 0],
    ],
    [
      [e, r],
      [n, r],
      [0, 1],
    ],
    [
      [n, r],
      [n, t],
      [1, 0],
    ],
    [
      [n, t],
      [e, t],
      [0, -1],
    ],
  ];
