// tokyo/assets/region-tokyo-55J_WESF 291 — col
// Lines 106773-106987 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var NTe = {
    id: `yoyogi-park`,
    site: PU(BU),
    name: { ja: `代々木公園`, zh: `代代木公園`, en: `Yoyogi Park` },
    near: 260,
    build: MTe,
    far(e, t) {
      let n = FU(e, BU),
        r = t.season ?? `green`;
      (YV(
        e,
        BU.x0,
        BU.z0,
        BU.x1,
        BU.z1,
        RV.LAWN,
        62,
        r === `bare` ? 9144924 : 6262595,
        7906130,
        61,
      ),
        GV(e, {
          x0: BU.x0,
          z0: BU.z0,
          x1: BU.x1,
          z1: BU.z1,
          step: 14,
          inside: (e, t) =>
            e < BU.x0 + 14 ||
            e > BU.x1 - 14 ||
            t < BU.z0 + 14 ||
            t > BU.z1 - 14 ||
            (e > -2010 && t > 1060),
          height: () => 12,
          dark: 4153396,
          light: 6130238,
          salt: 63,
          lump: 5,
          jitter: 3,
        }),
        ZV(e, VU.x, VU.z, VU.rx, VU.rz, 6201, 0, !1),
        e.leave(n));
    },
    bounds: () => [BU.x0, BU.z0, BU.x1, BU.z1],
    farBoxes: () => [
      {
        x0: BU.x0 + 2,
        x1: BU.x1 - 2,
        z0: BU.z0 + 2,
        z1: BU.z0 + 12,
        y0: 0.15,
        y1: 13,
        rgb: [0.07, 0.13, 0.06],
      },
      {
        x0: BU.x0 + 2,
        x1: BU.x1 - 2,
        z0: BU.z1 - 11,
        z1: BU.z1 - 2,
        y0: 0.15,
        y1: 13,
        rgb: [0.07, 0.13, 0.06],
      },
    ],
    anchors: [
      {
        key: `yoyogi-park-fountain`,
        lx: VU.x - (BU.x0 + BU.x1) / 2,
        lz: VU.z - 30 - (BU.z0 + BU.z1) / 2,
        turn: Math.PI,
        name: { zh: `代代木公園 噴水池`, en: `Yoyogi Park Fountain` },
      },
    ],
    blip: !0,
  },
  qU = { x0: -1975, z0: 280, x1: -1655, z1: 505 },
  JU = { x: -1930 },
  YU = { z: 330 },
  XU = { x: -1770 },
  ZU = { x0: -1925, z0: 312, x1: -1885, z1: 336 },
  QU = { x0: -1880, z0: 300, x1: -1745, z1: 425 },
  $U = { x0: -1735, z0: 330, x1: -1680, z1: 470 },
  eW = [
    { x: -1925, z: 462, rx: 30, rz: 14, r: 0.15 },
    { x: -1862, z: 472, rx: 24, rz: 12, r: -0.1 },
    { x: -1812, z: 465, rx: 20, rz: 11, r: 0.25 },
  ],
  tW = IU(
    { x0: qU.x0 + 16, z0: qU.z0 + 14, x1: qU.x1 - 14, z1: qU.z1 - 12 },
    16,
  ),
  nW = [
    [
      [JU.x, qU.z0],
      [JU.x, qU.z0 + 14],
    ],
    [
      [qU.x1, YU.z],
      [qU.x1 - 14, YU.z],
    ],
    [
      [XU.x, qU.z1],
      [XU.x, qU.z1 - 12],
    ],
    [
      [-1707.5, qU.z0 + 14 + 16],
      [-1707.5, qU.z1 - 12],
    ],
    [
      [qU.x0 + 16, 432],
      [-1745, 432],
    ],
  ],
  rW = { x0: -1716, z0: 350, x1: -1699, z1: 455 };
function PTe(e, t, n, r) {
  let i = e.sub(n, 0, r, 0);
  (e.push().col(12103842).mat(0.85, 0, 0, 0).box(-9, -0.2, -4.5, 9, 0.7, 4.5),
    e.col(8010278).mat(0.75, 0, 0.12, 1));
  for (let t of [-8, -4, 0, 4, 8])
    for (let n of [-3.8, 3.8])
      e.box(t - 0.18, 0.7, n - 0.18, t + 0.18, 4.2, n + 0.18);
  if (!e.coarse) {
    (e.col(6171676), e.box(-4, 0.7, -0.15, 4, 3.6, 0.15));
    for (let t of [-3.8, 3.8]) e.box(-8, 1.3, t - 0.06, 8, 1.4, t + 0.06);
  }
  (e.pop(),
    uC(e, 0, 0, 4.2, 6.4, {
      sides: 4,
      rise: 3.2,
      curve: 1.5,
      sori: 0.6,
      color: 5200474,
      band: 8010278,
      ridgeColor: 3949636,
      soffit: 6171676,
      eave: 1.2,
    }));
  for (let t of [-1, 1])
    uC(e, t * 6.2, 0, 3.6, 3.6, {
      sides: 4,
      rise: 1.8,
      curve: 1.4,
      sori: 0.4,
      color: 5200474,
      band: 8010278,
      ridgeColor: 3949636,
      soffit: 6171676,
      eave: 0.9,
    });
  (e.solid(-9, -4.5, 9, 4.5, 0, 0.7, `platform`), e.leave(i));
}
function FTe(e, t, n, r, i) {
  let a = e.sub(n, 0, r, i);
  (e.push().col(12166534).mat(0.85, 0, 0.1, 1),
    e.box(-5, 0.4, -3.5, 5, 3, 3.5),
    e.col(15919830).mat(0.8, 0, 0.5, 1),
    e.panel(4.5, -3.52, -4.5, -3.52, 0.6, 2.7),
    e.col(10130570).mat(0.9, 0, 0, 0).box(-5.5, 0, -4, 5.5, 0.4, 4),
    e.pop(),
    aC(e, 0, 0, 3, 6.2, 4.8, {
      rise: 2.2,
      cell: t.c(`copper`),
      color: 9675674,
      band: 6195834,
      ridgeColor: 4943456,
      soffit: 7035461,
      tile: 2,
      rows: 4,
      eave: 1.2,
      ridgeH: 0.4,
      wallY: 3,
      wallColor: 12166534,
    }),
    e.solid(-5, -3.5, 5, 3.5, 0, 3),
    e.leave(a));
}
function ITe(e, t) {
  let n = JU.x,
    r = qU.z0 + 0.6;
  e.push().col(13222580).mat(0.85, 0, 0.06, 1);
  for (let i of [-1, 1])
    (e.box(
      n + i * 6 - 0.8,
      0,
      r - 0.8,
      n + i * 6 + 0.8,
      3.6,
      r + 0.8,
      t.c(`granite`),
      2,
      2,
    ),
      e.solid(n + i * 6 - 0.8, r - 0.8, n + i * 6 + 0.8, r + 0.8, 0, 3.6),
      e.col(2829612).mat(0.6, 0.6, 0, 0),
      e.box(n + i * 6.9, 0.1, r + 0.4, n + i * 7, 2.6, r + 5.6),
      e.col(13222580).mat(0.85, 0, 0.06, 1),
      e.coarse ||
        e
          .col(16773324)
          .mat(0.3, 0, 1, 1)
          .box(n + i * 6 - 0.3, 3.6, r - 0.3, n + i * 6 + 0.3, 4.2, r + 0.3)
          .col(13222580)
          .mat(0.85, 0, 0.06, 1));
  e.pop();
  let i = n + 12,
    a = n + 34,
    o = qU.z0 + 4,
    s = qU.z0 + 14;
  (e.push().col(5924464).mat(0.25, 0.3, 0.45, G),
    e.box(i, 0, o, a, 3.8, s, t.c(`glass`), 3, 3.8),
    e.col(14210252).mat(0.8, 0, 0.05, 1),
    e.box(i - 2, 3.8, o - 2, a + 2, 4.4, s + 2),
    e.pop(),
    e.solid(i, o, a, s, 0, 4.4));
}
