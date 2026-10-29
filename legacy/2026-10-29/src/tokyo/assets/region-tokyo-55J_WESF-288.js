// tokyo/assets/region-tokyo-55J_WESF 288 — col
// Lines 105925-106167 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* STe(e, t) {
  let n = e.sub(-oU.x, 0, -oU.z, 0),
    r = t.season ?? `green`;
  (YV(
    e,
    aU.x0,
    aU.z0,
    aU.x1,
    aU.z1,
    RV.LAWN,
    e.coarse ? 60 : 22,
    r === `bare` ? 9407582 : 6328394,
    8103509,
    81,
  ),
    e.push().col(12235685).mat(0.9, 0, 0, 0),
    e.flat(
      aU.x0 + 1,
      aU.z0 + 1,
      -1446,
      aU.z1 - 1,
      RV.PAVE,
      e.coarse ? e.white : t.c(`paving`),
      e.coarse ? 0 : 12,
      e.coarse ? 0 : 12,
    ),
    e.pop(),
    yield,
    yield* vTe(e, t),
    yield,
    yield* yTe(e, t),
    yield,
    yield* xTe(e, t));
  let i = VV(8301);
  for (let t = 0; t < (e.coarse ? 6 : 14); t++) {
    let t =
        i.next() < 0.5
          ? i.range(-1440, cU.x - 20)
          : i.range(cU.x + 20, aU.x1 - 6),
      n = i.range(lU.z1 + 10, aU.z1 - 6);
    WV(
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
function CTe(e, t) {
  let n = e.sub(-oU.x, 0, -oU.z, 0);
  (e.push().mat(0.8, 0, 0, 0),
    fU(e, 24, 0.98, 0, 44.5, (e) => [e % 2 ? mU : hU, 0.85]),
    pU(e, 24, 0.66, 0.98, 47, 44.5, !0, () => [13159112, 1]),
    pU(e, 24, 0.5, 0.66, 1, 40, !0, () => [9079402, 1]),
    e.col(yU).box(lU.x0, 0, lU.z0, lU.x1, 15, lU.z1),
    e
      .col(7314566)
      .lathe(
        (lU.x0 + lU.x1) / 2,
        (lU.z0 + lU.z1) / 2 + 1,
        [9, 15, 9, 27, 0.01, 32],
        8,
      ),
    e
      .col(t.season === `autumn` ? 14200880 : 6261312)
      .box(cU.x - 16, 0, uU.z + 8, cU.x - 5, 16, cU.z1 - 2),
    e.box(cU.x + 5, 0, uU.z + 8, cU.x + 16, 16, cU.z1 - 2),
    e.pop(),
    e.leave(n));
}
var wTe = [
    {
      id: `jingu-gaien`,
      site: gTe,
      name: { ja: `明治神宮外苑`, zh: `明治神宮外苑`, en: `Meiji Jingu Gaien` },
      near: 280,
      build: STe,
      far: CTe,
      bounds: () => [aU.x0, aU.z0, aU.x1, aU.z1],
      farBoxes: () => [
        {
          x0: sU.x - sU.rx * 0.9,
          x1: sU.x + sU.rx * 0.9,
          z0: sU.z - sU.rz * 0.9,
          z1: sU.z + sU.rz * 0.9,
          y0: 0.15,
          y1: 47,
          rgb: [0.42, 0.32, 0.22],
          lit: !0,
        },
        {
          x0: lU.x0,
          x1: lU.x1,
          z0: lU.z0,
          z1: lU.z1,
          y0: 0.15,
          y1: 19,
          rgb: [0.62, 0.56, 0.46],
        },
      ],
      anchors: [
        {
          key: `ginkgo-avenue`,
          lx: cU.x - oU.x,
          lz: cU.z1 + 10 - oU.z,
          turn: 0,
          name: { zh: `神宮外苑 銀杏並木`, en: `Jingu Gaien Ginkgo Avenue` },
        },
        {
          key: `national-stadium`,
          lx: sU.x + sU.rx + 12 - oU.x,
          lz: sU.z - oU.z,
          turn: -Math.PI / 2,
          name: { zh: `國立競技場`, en: `Japan National Stadium` },
        },
      ],
      blip: !0,
    },
  ],
  bU = { x0: -1286, z0: 560, x1: -1185, z1: 742 },
  xU = { x: (bU.x0 + bU.x1) / 2, z: (bU.z0 + bU.z1) / 2 },
  SU = { x0: -1230, x1: -1208, z0: 594, z1: 708 },
  CU = { x0: -1236, z0: 636, z1: 666 },
  wU = { x0: -1254, w: 16 },
  TU = { z: 651, hw: 5 },
  EU = 15328732,
  DU = 13617596,
  OU = 7314824,
  TTe = 5405802,
  kU = 13214026,
  ETe = (e) => ({
    x: xU.x,
    z: xU.z,
    gy: e.groundHeight(xU.x, xU.z),
    facing: 0,
  });
function AU(e, t, n, r, i, a, o = 4.2) {
  let s = t.c(`granite`);
  if (
    (e.push().col(DU).mat(0.75, 0, 0.16, 1),
    e.wall(n, r, n, i, 0, 7, s, e.coarse ? 40 : 3.2, e.coarse ? 7 : 1.75),
    e.col(EU).emis(0.14, 1),
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
      e.push().col(EU, 1.04).mat(0.75, 0, 0.16, 1));
    let s = r + t * ((i - r) / c);
    for (let t of [-0.55, 0.55])
      e.box(n - 0.45, 7.4, s + t - 0.3, n, a - 1.6, s + t + 0.3);
    e.pop();
  }
  (e.push().col(EU, 1.05).mat(0.75, 0, 0.14, 1),
    e.box(n - 0.6, 7, r, n, 7.6, i),
    e.box(n - 0.9, a - 1.6, r, n, a, i));
  for (let t = r + 0.6; t < i; t += 0.9)
    e.box(n - 0.35, a, t - 0.12, n - 0.1, a + 1, t + 0.12);
  (e.box(n - 0.45, a + 1, r, n, a + 1.3, i), e.pop());
}
function jU(e, t, n, r, i, a, o) {
  let s = 2.2,
    c = a + 4.6,
    l = Math.min((r - t) / 2, (i - n) / 2) - 0.5,
    u = c + 1.6;
  e.push().col(OU).mat(0.55, 0.35, 0, 0);
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
      e.col(TTe),
      d(
        [o + f * s, c, p + g * s],
        [m + _ * s, c, h + v * s],
        [m + _ * l, u, h + v * l],
        [o + f * l, u, p + g * l],
      ),
      e.col(OU));
  }
  if ((e.pop(), o && !e.coarse))
    for (let r = n + 4; r < i - 3; r += 8.4)
      (e.push().col(EU).mat(0.75, 0, 0.12, 1),
        e.box(t + 0.6, a + 0.4, r - 1, t + 2.4, a + 3.4, r + 1),
        e
          .col(3949126)
          .mat(0.3, 0.2, 0.4, G)
          .panel(t + 0.58, r - 0.6, t + 0.58, r + 0.6, a + 0.8, a + 2.8),
        e.col(OU).mat(0.55, 0.35, 0, 0),
        HV(
          e,
          t + 1.5,
          r,
          [
            [1.3, a + 3.4],
            [0.7, a + 4.1],
            [0, a + 4.4],
          ],
          4,
          OU,
          1,
          Math.PI / 4,
        ),
        e.pop());
}
