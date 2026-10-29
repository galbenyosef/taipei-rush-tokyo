// tokyo/assets/region-tokyo-55J_WESF 254 — top
// Lines 95228-95545 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* OSe(e, t) {
  let n = GL,
    r = t.c(`ishigaki`);
  (e.col(uL).mat(0.92, 0, 0, 0),
    pL(e, `x`, n.x0, n.z0, n.z1, -1, -2.4, n.top, r, 4, 0.8),
    pL(e, `z`, n.z1, n.x0, n.gate0, 1, -0.25, n.top, r, 4),
    pL(e, `z`, n.z1, n.gate1, n.x1, 1, -0.25, n.top, r, 4),
    pL(e, `x`, n.x1, n.z0, n.pas0, 1, -2.4, n.top, r, 4),
    pL(e, `x`, n.x1, n.pas1, n.z1, 1, -2.4, n.top, r, 4),
    pL(e, `x`, n.inX0, n.z0, n.inZ1, 1, n.deck - 0.2, n.top, r),
    pL(e, `x`, n.inX1, n.z0, n.pas0, -1, n.deck - 0.2, n.top, r),
    pL(e, `x`, n.inX1, n.pas1, n.inZ1, -1, n.deck - 0.2, n.top, r),
    pL(e, `z`, n.inZ1, n.inX0, n.gate0, -1, n.deck - 0.2, n.top, r),
    pL(e, `z`, n.inZ1, n.gate1, n.inX1, -1, n.deck - 0.2, n.top, r),
    pL(e, `x`, n.gate0, n.inZ1, n.z1, 1, -0.25, n.top, r),
    pL(e, `x`, n.gate1, n.inZ1, n.z1, -1, -0.25, n.top, r),
    pL(e, `z`, n.pas0, n.inX1, n.x1, 1, n.deck - 0.2, n.top, r),
    pL(e, `z`, n.pas1, n.inX1, n.x1, -1, n.deck - 0.2, n.top, r),
    TL(e, n.x0 + 0.8, n.z0, n.inX0, n.z1, n.top),
    TL(e, n.inX0, n.inZ1, n.gate0, n.z1, n.top),
    TL(e, n.gate1, n.inZ1, n.inX1, n.z1, n.top),
    TL(e, n.inX1, n.pas1, n.x1, n.z1, n.top),
    TL(e, n.inX1, n.z0, n.x1, n.pas0, n.top));
  let i = n.top + 2.3;
  (e.solid(n.x0, n.z0, n.inX0, n.z1, -2, i, `wall`),
    e.solid(n.inX0, n.inZ1, n.gate0, n.z1, -2, i, `wall`),
    e.solid(n.gate1, n.inZ1, n.inX1, n.z1, -2, i, `wall`),
    e.solid(n.inX1, n.pas1, n.x1, n.z1, -2, i, `wall`),
    e.solid(n.inX1, n.z0, n.x1, n.pas0, -2, i, `wall`),
    yield,
    gL(e, t, n.inX0, n.z0, n.inX1, n.inZ1, n.deck - dL),
    gL(e, t, n.gate0, n.inZ1, n.gate1, n.z1, n.deck - dL),
    gL(e, t, n.inX1, n.pas0, n.x1, n.pas1, n.deck - dL),
    e.floor(n.inX0, n.z0, n.inX1, n.inZ1, n.deck),
    e.floor(n.gate0, n.inZ1, n.gate1, n.z1 + 0.6, n.deck),
    e.floor(n.inX1, n.pas0, n.x1, n.pas1, n.deck),
    e.col(uL).mat(0.92, 0, 0, 0),
    pL(e, `z`, n.pas0, n.x1, n.causeX1, -1, -2.4, n.deck, r, 4, 0.3),
    pL(e, `z`, n.pas1, n.x1, n.causeX1, 1, -2.4, n.deck, r, 4, 0.3),
    e
      .col(13354424)
      .mat(0.85, 0, 0, 0)
      .flat(
        n.x1,
        n.pas0 + 0.5,
        n.causeX1,
        n.pas1 - 0.5,
        n.deck,
        t.c(`granite`),
        2,
        2,
      ),
    e.col(12433064));
  for (let [t, r] of [
    [n.pas0, n.pas0 + 0.5],
    [n.pas1 - 0.5, n.pas1],
  ])
    (e.box(n.x1, n.deck, t, n.causeX1, n.deck + 0.7, r),
      e.solid(n.x1, t, n.causeX1, r, -2, n.deck + 0.9, `wall`));
  (e.floor(n.x1, n.pas0 + 0.5, n.causeX1, n.pas1 - 0.5, n.deck),
    yield,
    hL(e, t, n.x0 + 1.4, n.z0 + 1, n.x0 + 1.4, n.z1 - 1.2, n.top, 1),
    hL(e, t, n.x0 + 1.4, n.z1 - 1.2, n.gate0, n.z1 - 1.2, n.top, 1),
    hL(e, t, n.gate1, n.z1 - 1.2, n.inX1 + 0.5, n.z1 - 1.2, n.top, 1),
    SL(
      e,
      t,
      (n.gate0 + n.gate1) / 2,
      n.z1 - 0.8,
      Math.PI,
      n.deck,
      3.2,
      5.2,
      2.7,
      (n.gate1 - n.gate0) / 2,
    ),
    CL(
      e,
      t,
      (n.inX1 + n.x1) / 2,
      (n.z0 + n.z1) / 2 - 1.5,
      Math.PI / 2,
      n.top,
      9.2,
      4.2,
      4.8,
    ),
    wL(e, t, n.inX1, n.x1, n.pas0, n.pas1, n.deck, n.top, !1),
    yL(e, `pine`, n.inX0 + 3, n.deck, n.z0 + 3.5, 7, 77),
    yL(e, `pine`, n.inX1 - 3, n.deck, n.z0 + 3, 6, 78));
}
function kSe(e, t) {
  let n = GL;
  (e.col(uL).mat(0.92, 0, 0, 0),
    e.box(n.x0, -2, n.z0, n.x1, n.top, n.z1, t.c(`ishigaki`), 6, 6),
    e.col(cL).mat(0.85, 0, 0.08, G),
    e.box(
      n.inX1 - 0.5,
      n.top,
      n.z0 + 1.5,
      n.x1 + 0.5,
      n.top + 4.8,
      n.z1 - 4.5,
      t.c(`plaster`),
      2,
      2,
    ),
    e.col(lL).mat(0.7, 0.1, 0, 0),
    e.extrudeZ(
      [
        n.inX1 - 2,
        n.top + 4.8,
        n.x1 + 2,
        n.top + 4.8,
        (n.inX1 + n.x1) / 2,
        n.top + 8,
      ],
      n.z0,
      n.z1 - 3,
      !0,
      !0,
    ));
}
var ASe = {
  id: `sakuradamon`,
  site: fL,
  name: { ja: `桜田門`, zh: `櫻田門`, en: `Sakurada-mon Gate` },
  near: 230,
  build: OSe,
  far: kSe,
  bounds: () => [GL.x0 - 4, GL.z0 - 4, GL.causeX1 + 2, GL.z1 + 4],
  farBoxes: () => [
    {
      x0: GL.inX1,
      x1: GL.x1,
      z0: GL.z0 + 1,
      z1: GL.z1 - 4,
      y0: GL.top,
      y1: GL.top + 7,
      rgb: [0.8, 0.8, 0.78],
    },
  ],
  anchors: [
    {
      key: `sakuradamon`,
      lx: -525,
      lz: 254,
      turn: 0,
      name: { zh: `櫻田門`, en: `Sakurada-mon Gate` },
    },
  ],
  roofs: [{ lx0: GL.inX1, lz0: GL.pas0, lx1: GL.x1, lz1: GL.pas1, y: GL.top }],
  blip: !0,
};
r.add({ "北之丸公園・日本武道館": `北の丸公園・日本武道館` });
var KL = { cx: -838, cz: -297, a: 38 },
  qL = KL.a / Math.cos(Math.PI / 8),
  JL = Math.PI / 8,
  YL = {
    nZ0: -383,
    nZ1: -378,
    gap0: -805,
    gap1: -797,
    inX0: -814,
    inX1: -790,
    inZ1: -360,
    sZ1: -354,
    wX0: -820,
    eX1: -784,
    pas0: -373,
    pas1: -367,
    top: 5.8,
  },
  XL = { parkX: -911, walkX: -939, z0: -378, z1: -207 },
  ZL = { x0: KL.cx - 47, x1: KL.cx + 47, z0: KL.cz - 47, z1: KL.cz + 47 },
  QL = { cx: -738, cz: -288, rx: 19, rz: 11 },
  $L = { rimN: -232.2, rimS: -211.8 },
  eR = (e, t) => [
    KL.cx + Math.cos(JL + (e * Math.PI) / 4) * t,
    KL.cz + Math.sin(JL + (e * Math.PI) / 4) * t,
  ];
function* jSe(e, t) {
  let { cx: n, cz: r, a: i } = KL,
    a = oL + 0.6;
  (e.col(13222838).mat(0.85, 0, 0, 0),
    e.lathe(
      n,
      r,
      [
        qL + 3.2,
        oL - 0.1,
        qL + 3.2,
        oL + 0.3,
        qL + 1.6,
        oL + 0.3,
        qL + 1.6,
        a,
        0.01,
        a,
      ],
      8,
      JL,
    ));
  let o = 2 * qL * Math.sin(Math.PI / 8);
  for (let s = 0; s < 8; s++) {
    let [c, l] = eR(s, qL),
      [u, d] = eR(s + 1, qL);
    (e.col(14472906).mat(0.85, 0, 0.1, G),
      e.wall(u, d, c, l, a, 14, t.c(`plaster`), 4, 4.5));
    let f = ((s + 1) * Math.PI) / 4,
      p = e.sub(n, 0, r, f + Math.PI / 2),
      m = s % 2 == 1;
    if ((e.col(15131094).mat(0.8, 0, 0.08, G), !e.coarse))
      for (let t = -o / 2 + 1.8; t < o / 2 - 1.5; t += 3.4)
        e.box(t - 0.35, a, -i - 0.55, t + 0.35, 13.8, -i);
    (e.col(4082256).mat(0.2, 0.3, 0.35, 1),
      e.panel(o / 2 - 1, -i - 0.03, -o / 2 + 1, -i - 0.03, 10.8, 12.4),
      m &&
        (e.col(3095104).mat(0.2, 0.3, 0.4, 1),
        e.panel(6, -i - 0.6, -6, -i - 0.6, a, a + 3.6),
        e.col(13814976).mat(0.8, 0, 0, 0),
        e.box(-7.5, a + 3.8, -i - 4.5, 7.5, a + 4.3, -i)),
      e.solid(-o / 2, -i - 0.3, o / 2, -i + 1.5, 0, 14),
      e.leave(p));
  }
  (yield, e.mat(0.75, 0.15, 0, 0));
  let s = 6714476;
  uC(e, n, r, 14.3, qL + 4.2, {
    rise: 6,
    tTop: 0.3,
    curve: 1.05,
    sori: 0.4,
    thick: 0.6,
    eave: 0,
    color: s,
    band: 5595739,
    ridgeH: 0.6,
    ridgeColor: 5134932,
    rows: 4,
    hips: 2,
    sides: 8,
    rot: JL,
  });
  let c = (qL + 4.2) * 0.7 - 0.6;
  if (
    (e.col(14078664).mat(0.9, 0, 0, 0),
    e.lathe(
      n,
      r,
      [qL - 0.2, 13.700000000000001, qL + 4.2, 13.700000000000001],
      8,
      JL,
    ),
    e.lathe(n, r, [c - 0.2, 21.3, qL + 0.5, 21.3], 8, JL),
    e.col(15328732).mat(0.8, 0, 0.12, G),
    e.lathe(n, r, [c, 13.700000000000001, c, 21.3], 8, JL, t.c(`plaster`)),
    !e.coarse)
  ) {
    e.col(3424842).mat(0.2, 0.3, 0.5, 1);
    let t = c * Math.cos(Math.PI / 8);
    for (let i = 0; i < 8; i++) {
      let a = e.sub(n, 0, r, ((i + 1) * Math.PI) / 4 + Math.PI / 2);
      for (let n = -9; n <= 9; n += 3)
        e.panel(n + 0.9, -t - 0.04, n - 0.9, -t - 0.04, 16.5, 20.3);
      e.leave(a);
    }
  }
  (yield, e.mat(0.7, 0.2, 0, 0));
  let l = uC(e, n, r, 22, qL + 0.5, {
    rise: 15.5,
    curve: 1.12,
    sori: 0.5,
    thick: 0.7,
    eave: 0,
    color: s,
    tile: 4,
    band: 5595739,
    soffit: 12170410,
    ridgeH: 0.8,
    ridgeColor: 5134932,
    rows: 6,
    hips: 4,
    sides: 8,
    rot: JL,
  });
  (e.col(5924448).mat(0.6, 0.3, 0, 0),
    e.lathe(n, r, [2.2, l - 0.3, 1.9, l + 0.6, 1.2, l + 0.9], 8, JL),
    e.col(14200392).mat(0.32, 0.85, 0.25, 1));
  let u = e.seg(12);
  (e.lathe(
    n,
    r,
    [
      1,
      l + 0.9,
      0.7,
      l + 1.4,
      1.5,
      l + 2.6,
      1.7,
      l + 3.4,
      1.3,
      l + 4.3,
      0.5,
      l + 5,
      0.08,
      l + 5.9,
      0.01,
      l + 6.2,
    ],
    u,
    0,
    e.white,
    !1,
    !0,
  ),
    e.rod(n, l + 6, r, n, l + 7.2, r, 0.06, 4));
}
