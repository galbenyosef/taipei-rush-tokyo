// tokyo/assets/region-tokyo-A7LxHjud 288 — col
// Lines 106016-106258 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* ITe(e, t) {
  let n = e.sub(-sU.x, 0, -sU.z, 0),
    r = t.season ?? `green`;
  (XV(
    e,
    oU.x0,
    oU.z0,
    oU.x1,
    oU.z1,
    zV.LAWN,
    e.coarse ? 60 : 22,
    r === `bare` ? 9407582 : 6328394,
    8103509,
    81,
  ),
    e.push().col(12235685).mat(0.9, 0, 0, 0),
    e.flat(
      oU.x0 + 1,
      oU.z0 + 1,
      -1446,
      oU.z1 - 1,
      zV.PAVE,
      e.coarse ? e.white : t.c(`paving`),
      e.coarse ? 0 : 12,
      e.coarse ? 0 : 12,
    ),
    e.pop(),
    yield,
    yield* MTe(e, t),
    yield,
    yield* NTe(e, t),
    yield,
    yield* FTe(e, t));
  let i = HV(8301);
  for (let t = 0; t < (e.coarse ? 6 : 14); t++) {
    let t =
        i.next() < 0.5
          ? i.range(-1440, lU.x - 20)
          : i.range(lU.x + 20, oU.x1 - 6),
      n = i.range(uU.z1 + 10, oU.z1 - 6);
    GV(
      e,
      i.next() < 0.6 ? `keyaki` : `sakura`,
      t,
      n,
      i.range(9, 16),
      Math.floor(i.next() * 1e6),
      r,
    );
  }
  e.leave(n);
}
function LTe(e, t) {
  let n = e.sub(-sU.x, 0, -sU.z, 0);
  (e.push().mat(0.8, 0, 0, 0),
    pU(e, 24, 0.98, 0, 44.5, (e) => [e % 2 ? hU : gU, 0.85]),
    mU(e, 24, 0.66, 0.98, 47, 44.5, !0, () => [13159112, 1]),
    mU(e, 24, 0.5, 0.66, 1, 40, !0, () => [9079402, 1]),
    e.col(bU).box(uU.x0, 0, uU.z0, uU.x1, 15, uU.z1),
    e
      .col(7314566)
      .lathe(
        (uU.x0 + uU.x1) / 2,
        (uU.z0 + uU.z1) / 2 + 1,
        [9, 15, 9, 27, 0.01, 32],
        8,
      ),
    e
      .col(t.season === `autumn` ? 14200880 : 6261312)
      .box(lU.x - 16, 0, dU.z + 8, lU.x - 5, 16, lU.z1 - 2),
    e.box(lU.x + 5, 0, dU.z + 8, lU.x + 16, 16, lU.z1 - 2),
    e.pop(),
    e.leave(n));
}
var RTe = [
    {
      id: `jingu-gaien`,
      site: ATe,
      name: { ja: `明治神宮外苑`, zh: `明治神宮外苑`, en: `Meiji Jingu Gaien` },
      near: 280,
      build: ITe,
      far: LTe,
      bounds: () => [oU.x0, oU.z0, oU.x1, oU.z1],
      farBoxes: () => [
        {
          x0: cU.x - cU.rx * 0.9,
          x1: cU.x + cU.rx * 0.9,
          z0: cU.z - cU.rz * 0.9,
          z1: cU.z + cU.rz * 0.9,
          y0: 0.15,
          y1: 47,
          rgb: [0.42, 0.32, 0.22],
          lit: !0,
        },
        {
          x0: uU.x0,
          x1: uU.x1,
          z0: uU.z0,
          z1: uU.z1,
          y0: 0.15,
          y1: 19,
          rgb: [0.62, 0.56, 0.46],
        },
      ],
      anchors: [
        {
          key: `ginkgo-avenue`,
          lx: lU.x - sU.x,
          lz: lU.z1 + 10 - sU.z,
          turn: 0,
          name: { zh: `神宮外苑 銀杏並木`, en: `Jingu Gaien Ginkgo Avenue` },
        },
        {
          key: `national-stadium`,
          lx: cU.x + cU.rx + 12 - sU.x,
          lz: cU.z - sU.z,
          turn: -Math.PI / 2,
          name: { zh: `國立競技場`, en: `Japan National Stadium` },
        },
      ],
      blip: !0,
    },
  ],
  xU = { x0: -1286, z0: 560, x1: -1185, z1: 742 },
  SU = { x: (xU.x0 + xU.x1) / 2, z: (xU.z0 + xU.z1) / 2 },
  CU = { x0: -1230, x1: -1208, z0: 594, z1: 708 },
  wU = { x0: -1236, z0: 636, z1: 666 },
  TU = { x0: -1254, w: 16 },
  EU = { z: 651, hw: 5 },
  DU = 15328732,
  OU = 13617596,
  kU = 7314824,
  zTe = 5405802,
  AU = 13214026,
  BTe = (e) => ({
    x: SU.x,
    z: SU.z,
    gy: e.groundHeight(SU.x, SU.z),
    facing: 0,
  });
function jU(e, t, n, r, i, a, o = 4.2) {
  let s = t.c(`granite`);
  if (
    (e.push().col(OU).mat(0.75, 0, 0.16, 1),
    e.wall(n, r, n, i, 0, 7, s, e.coarse ? 40 : 3.2, e.coarse ? 7 : 1.75),
    e.col(DU).emis(0.14, 1),
    e.wall(n, r, n, i, 7, a, s, e.coarse ? 40 : 6, e.coarse ? 12 : 5),
    e.pop(),
    e.coarse)
  )
    return;
  let c = Math.max(1, Math.round((i - r) / o));
  for (let t = 0; t < c; t++) {
    let o = r + (t + 0.5) * ((i - r) / c);
    (e.push().col(3949126).mat(0.3, 0.2, 0.5, G),
      e.panel(n - 0.03, o - 0.9, n - 0.03, o + 0.9, 2.2, 5.6),
      e.panel(n - 0.03, o - 1, n - 0.03, o + 1, 8.5, 13.5),
      e.pop(),
      e.push().col(DU, 1.04).mat(0.75, 0, 0.16, 1));
    let s = r + t * ((i - r) / c);
    for (let t of [-0.55, 0.55])
      e.box(n - 0.45, 7.4, s + t - 0.3, n, a - 1.6, s + t + 0.3);
    e.pop();
  }
  (e.push().col(DU, 1.05).mat(0.75, 0, 0.14, 1),
    e.box(n - 0.6, 7, r, n, 7.6, i),
    e.box(n - 0.9, a - 1.6, r, n, a, i));
  for (let t = r + 0.6; t < i; t += 0.9)
    e.box(n - 0.35, a, t - 0.12, n - 0.1, a + 1, t + 0.12);
  (e.box(n - 0.45, a + 1, r, n, a + 1.3, i), e.pop());
}
function MU(e, t, n, r, i, a, o) {
  let s = 2.2,
    c = a + 4.6,
    l = Math.min((r - t) / 2, (i - n) / 2) - 0.5,
    u = c + 1.6;
  e.push().col(kU).mat(0.55, 0.35, 0, 0);
  let d = (t, n, r, i) =>
      e.quad(
        t[0],
        t[1],
        t[2],
        n[0],
        n[1],
        n[2],
        r[0],
        r[1],
        r[2],
        i[0],
        i[1],
        i[2],
      ),
    f = [
      [t, n, t, i, 1, 0],
      [t, i, r, i, 0, -1],
      [r, i, r, n, -1, 0],
      [r, n, t, n, 0, 1],
    ];
  for (let [o, p, m, h, g, _] of f) {
    let f = Math.sign((t + r) / 2 - o),
      g = Math.sign((n + i) / 2 - p),
      _ = Math.sign((t + r) / 2 - m),
      v = Math.sign((n + i) / 2 - h);
    (d(
      [o, a, p],
      [m, a, h],
      [m + _ * s, c, h + v * s],
      [o + f * s, c, p + g * s],
    ),
      e.col(zTe),
      d(
        [o + f * s, c, p + g * s],
        [m + _ * s, c, h + v * s],
        [m + _ * l, u, h + v * l],
        [o + f * l, u, p + g * l],
      ),
      e.col(kU));
  }
  if ((e.pop(), o && !e.coarse))
    for (let r = n + 4; r < i - 3; r += 8.4)
      (e.push().col(DU).mat(0.75, 0, 0.12, 1),
        e.box(t + 0.6, a + 0.4, r - 1, t + 2.4, a + 3.4, r + 1),
        e
          .col(3949126)
          .mat(0.3, 0.2, 0.4, G)
          .panel(t + 0.58, r - 0.6, t + 0.58, r + 0.6, a + 0.8, a + 2.8),
        e.col(kU).mat(0.55, 0.35, 0, 0),
        UV(
          e,
          t + 1.5,
          r,
          [
            [1.3, a + 3.4],
            [0.7, a + 4.1],
            [0, a + 4.4],
          ],
          4,
          kU,
          1,
          Math.PI / 4,
        ),
        e.pop());
}
