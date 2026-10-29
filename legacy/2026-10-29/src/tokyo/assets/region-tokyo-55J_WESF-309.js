// tokyo/assets/region-tokyo-55J_WESF 309 — col
// Lines 112036-112316 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* sDe(e, t) {
  let n = e.sub(-CK.x, 0, -CK.z, 0),
    r = t.c(`glass`),
    i = t.c(`office`),
    a = e.coarse ? 3 : 1;
  (e.push().col(13223613).mat(0.85, 0, 0, 0),
    e.flat(
      SK.x0,
      SK.z0,
      SK.x1,
      SK.z1,
      0.08,
      e.coarse ? e.white : t.c(`paving`),
      e.coarse ? 0 : 3,
      e.coarse ? 0 : 3,
    ),
    e.pop());
  let o = (t) => {
    (e.push().col(kK).mat(0.8, 0, 0.06, 1),
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
    (o(EK),
    o(DK),
    yield,
    e.push().col(5593434).mat(0.6, 0.1, 0.1, G),
    e.box(
      wK.x0 + 2,
      0,
      wK.z0 + 2,
      wK.x1 - 2,
      wK.base,
      wK.z1 - 2,
      i,
      4 * a,
      4.5,
    ),
    e.col(12899532).mat(0.3, 0.25, 0.14, G | 32),
    e.box(wK.x0, wK.base, wK.z0, wK.x1, wK.h, wK.z1, r, 3.6 * a, 8.2),
    e.col(10132632).mat(0.85, 0, 0, 0),
    e.flat(wK.x0, wK.z0, wK.x1, wK.z1, wK.h + 0.01),
    !e.coarse)
  ) {
    e.col(aDe).mat(0.5, 0.5, 0, 0);
    for (let t = wK.x0; t <= wK.x1 + 0.01; t += (wK.x1 - wK.x0) / 6)
      (e.box(t - 0.2, wK.base, wK.z0 - 0.3, t + 0.2, wK.h, wK.z0),
        e.box(t - 0.2, wK.base, wK.z1, t + 0.2, wK.h, wK.z1 + 0.3));
    for (let t = wK.z0; t <= wK.z1 + 0.01; t += (wK.z1 - wK.z0) / 4)
      (e.box(wK.x0 - 0.3, wK.base, t - 0.2, wK.x0, wK.h, t + 0.2),
        e.box(wK.x1, wK.base, t - 0.2, wK.x1 + 0.3, wK.h, t + 0.2));
  }
  (e.pop(), e.solid(wK.x0, wK.z0, wK.x1, wK.z1, 0, wK.h), yield);
  let s = e.coarse ? 10 : 20;
  if (
    (e.push().col(15658730).mat(0.6, 0.2, 0.05, 1),
    e.lathe(
      TK.x,
      TK.z,
      [
        TK.r,
        wK.h,
        TK.r,
        wK.h + TK.h - 1.5,
        TK.r - 1.2,
        wK.h + TK.h,
        0.01,
        wK.h + TK.h + 0.3,
      ],
      s,
    ),
    !e.coarse)
  ) {
    e.col(13948628);
    for (let t = 0; t < 24; t++) {
      let n = (t / 24) * Math.PI * 2;
      e.box(
        TK.x + Math.cos(n) * (TK.r + 0.1) - 0.12,
        wK.h + 0.5,
        TK.z + Math.sin(n) * (TK.r + 0.1) - 0.12,
        TK.x + Math.cos(n) * (TK.r + 0.1) + 0.12,
        wK.h + TK.h - 1.6,
        TK.z + Math.sin(n) * (TK.r + 0.1) + 0.12,
      );
    }
  }
  let c = TK.x + 3,
    l = TK.z;
  (e.col(12106940).mat(0.5, 0.5, 0, 0),
    e.cylY(c, l, wK.h + TK.h, wK.h + TK.h + 16, 0.45, 6, 0.2),
    e.col(14169386).mat(0.6, 0, 0, 0),
    e.cylY(c, l, wK.h + TK.h + 16, wK.h + TK.h + 19, 0.22, 6, 0.12),
    e.col(15263972).mat(0.5, 0.3, 0, 0));
  let u = e.coarse ? 6 : 12;
  (jK(e, TK.x + TK.r + 2.5, wK.h + 6, TK.z - 4, 2.6, -0.3, 0.25, u),
    jK(e, TK.x + TK.r + 2.2, wK.h + 8.5, TK.z + 3, 2.1, 0.5, 0.15, u),
    jK(
      e,
      TK.x - 3,
      wK.h + TK.h + 1.8,
      TK.z - TK.r + 1,
      1.6,
      -Math.PI / 2,
      0.3,
      u,
    ),
    jK(e, wK.x1 - 3, wK.h + 2.6, wK.z1 - 3, 2.2, 0.8, 0.5, u),
    e.pop(),
    yield);
  let d = OK;
  if (
    (e.push().col(AK).mat(0.75, 0.05, 0.06, 1),
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
      n = SK.z1 - 0.5;
    e.push();
    let r = [14694970, 3116878, 3105476];
    for (let i = 0; i < 3; i++)
      e.col(r[i])
        .mat(0.5, 0, 0.3, 1)
        .box(t + i * 1.3 - 1.9, 0, n - 0.6, t + i * 1.3 - 0.8, 1.8, n + 0.4);
    (e.col(16185074).mat(0.5, 0, 0.6, 1),
      UB(e, `JHK`, t, 0.45, n + 0.43, RB, 0.9, {
        px: 18,
        align: 0.5,
        maxW: 3.6,
        raw: !0,
      }),
      e.col(3815994).mat(0.6, 0, 0, 0),
      UB(e, `JHK放送センター`, EK.x0 + 18, EK.h - 2.6, EK.z1 + 0.06, RB, 1.2, {
        px: 18,
        align: 0.5,
        maxW: 16,
        raw: !0,
      }),
      e.pop());
  }
  let f = VV(7711);
  for (let [n, r] of [
    [-1964, 1230],
    [-1942, 1232],
    [-1960, 1186],
  ])
    WV(
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
function cDe(e) {
  let t = e.sub(-CK.x, 0, -CK.z, 0);
  (e.push().mat(0.7, 0.2, 0, 0),
    e.col(7308937).box(wK.x0, 0, wK.z0, wK.x1, wK.h, wK.z1),
    e
      .col(15658730)
      .lathe(TK.x, TK.z, [TK.r, wK.h, TK.r, wK.h + TK.h, 0.01, wK.h + TK.h], 8),
    e.col(kK).box(EK.x0, 0, EK.z0, EK.x1, EK.h, EK.z1),
    e.box(DK.x0, 0, DK.z0, DK.x1, DK.h, DK.z1),
    e.col(AK).box(OK.x0, 0, OK.z0, OK.x1, OK.h, OK.z1),
    e.pop(),
    e.leave(t));
}
var lDe = {
  id: `jhk-center`,
  site: oDe,
  name: {
    ja: `JHK放送センター`,
    zh: `JHK 放送中心`,
    en: `JHK Broadcasting Center`,
  },
  near: 260,
  build: sDe,
  far: cDe,
  bounds: () => [SK.x0, SK.z0, SK.x1, SK.z1 + 3],
  farBoxes: () => [
    {
      x0: wK.x0,
      x1: wK.x1,
      z0: wK.z0,
      z1: wK.z1,
      y0: 0.15,
      y1: wK.h,
      rgb: [0.42, 0.52, 0.54],
      lit: !0,
    },
    {
      x0: EK.x0,
      x1: EK.x1,
      z0: EK.z0,
      z1: EK.z1,
      y0: 0.15,
      y1: EK.h,
      rgb: [0.8, 0.79, 0.75],
    },
    {
      x0: OK.x0,
      x1: OK.x1,
      z0: OK.z0,
      z1: OK.z1,
      y0: 0.15,
      y1: OK.h,
      rgb: [0.6, 0.62, 0.62],
    },
  ],
  blip: !0,
};
r.add({ "澀谷 Streamline": `渋谷ストリームライン` });
var MK = { x0: -1692.8, z0: 1465.8, x1: -1661.8, z1: 1520 },
  NK = { x: (MK.x0 + MK.x1) / 2, z: (MK.z0 + MK.z1) / 2 },
  PK = {
    x0: -1690.5,
    x1: -1664.5,
    z0: 1472,
    z1: 1518,
    pod: 22,
    band: 36,
    h: 172,
    crown: 180,
  },
  FK = { z0: MK.z0, z1: PK.z0, deck: 7 },
  uDe = (e) => ({
    x: NK.x,
    z: NK.z,
    gy: e.groundHeight(MK.x0, MK.z0),
    facing: 0,
  }),
  IK = (e, t, n, r) => [
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
