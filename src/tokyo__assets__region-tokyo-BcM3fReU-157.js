// tokyo__assets__region-tokyo-BcM3fReU 157 — col
// Lines 66620-66929 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function* Zte(e, t) {
  let n = t.A.sub(`lcTkGrid`, 0, 0, 0.5, 1),
    r = t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1),
    i = BL(0, e.coarse),
    a = BL(0.5, e.coarse);
  if (
    (e.col(16777215).mat(0.3, 0.4, 0.3, Y),
    vL(e, i, 0, zL.pod, r, 3.2, 8),
    e.col(6182476).mat(0.45, 0.6, 0.04, 1),
    !e.coarse)
  )
    for (let t of [8, 16, 24]) xL(e, i, 0.15, t - 0.18, t + 0.08);
  (xL(e, i, 0.9, zL.pod - 0.4, zL.pod + 1.2),
    yield,
    e.col(16777215).mat(0.35, 0.55, 0.16, Y | 32),
    vL(e, a, zL.pod + 1.2, zL.top, n, 6.4, 13.2),
    yield,
    e.col(12103844).mat(0.5, 0.6, 0.02, 0),
    vL(e, a, zL.top, zL.frame, n, 6.4, 13.2));
  let o = _L(a, -0.35);
  if (
    (vL(e, [...o].reverse(), zL.top, zL.frame, n, 6.4, 13.2),
    e.col(3814445).mat(0.5, 0.6, 0, 0),
    xL(e, a, 0.15, zL.frame - 0.3, zL.frame),
    e.col(8159104).mat(0.85, 0, 0, 0),
    bL(e, o, zL.top),
    !e.coarse)
  ) {
    (e.col(10132894).mat(0.8, 0.2, 0, 0),
      e.box(LL(50), zL.top, RL(-150), LL(58), zL.top + 4, RL(-134)),
      e.col(4538426).mat(0.6, 0.5, 0, 0));
    for (let t of [-153.5, -131.5])
      e.panel(
        LL(zL.x1 - 0.45),
        RL(t + 1.2),
        LL(zL.x1 - 0.45),
        RL(t - 1.2),
        42,
        58,
      );
    for (let t of [49.4, 59.6])
      e.panel(
        LL(t + 1.2),
        RL(zL.z0 + 0.45),
        LL(t - 1.2),
        RL(zL.z0 + 0.45),
        42,
        58,
      );
  }
  (CL(e, LL(zL.x0 + 1.5), zL.frame, RL(zL.z0 + 1.5), 0.45),
    CL(e, LL(zL.x1 - 2.5), zL.frame, RL(zL.z1 - 2.5), 0.45),
    yield);
  let s = (e, n, r, i) => wL(t, `lcSigns`, e, n, r, i, 320, 192),
    c = Math.SQRT1_2,
    l = LL(zL.x1) - 5,
    u = RL(zL.z1) - 5,
    d = l + c * 5.06,
    f = u + c * 5.06;
  (e.col(16777215).mat(0.4, 0.4, 0.3, Y),
    e.panel(
      d - c * 2.6,
      f + c * 2.6,
      d + c * 2.6,
      f - c * 2.6,
      5,
      6.2,
      s(0, 112, 176, 40),
    ),
    e.col(14210252).mat(0.4, 0.5, 0.1, 1),
    e.coarse ||
      e.obox(d + c * 0.8, 4.6, f + c * 0.8, 3.2, 0.12, 1.4, -Math.PI / 4),
    e.solid(LL(zL.x0), RL(zL.z0), LL(zL.x1), RL(zL.z1), 0, zL.frame));
}
function* Qte(e, t) {
  let { x0: n, x1: r, z0: i, z1: a } = Xte;
  (e.col(16777215).mat(0.85, 0, 0.03, Y),
    e.flat(
      LL(n),
      RL(i),
      LL(r),
      RL(a),
      0.16,
      t.c(`paving`),
      e.coarse ? 12 : 4,
      e.coarse ? 12 : 4,
    ));
  for (let [t, n, r, i] of [
    [36.2, -156.5, 40.4, -143],
    [36.2, -140, 40.4, -128.5],
  ])
    (e.col(13223096).mat(0.85, 0, 0, 0),
      e.box(LL(t), 0, RL(n), LL(r), 0.45, RL(i)),
      e.col(6130245).mat(0.95, 0, 0, 0),
      e.flat(LL(t + 0.25), RL(n + 0.25), LL(r - 0.25), RL(i - 0.25), 0.47));
  if (
    (e.col(10130828).mat(0.85, 0, 0, 0),
    e.box(LL(41.2), 0, RL(-156.5), LL(43), 0.3, RL(-128.5)),
    e.col(2373962).mat(0.05, 0.2, 0.03, 1),
    e.flat(LL(41.4), RL(-156.3), LL(42.8), RL(-128.7), 0.32),
    yield,
    !e.coarse)
  ) {
    for (let t = -154; t < -129; t += 6)
      (e.col(9071176).mat(0.8, 0, 0, 0),
        e.box(LL(43.6), 0.42, RL(t), LL(44.2), 0.48, RL(t + 2.2)),
        e.col(4868682).mat(0.5, 0.6, 0, 0),
        e.box(LL(43.65), 0, RL(t + 0.2), LL(44.15), 0.42, RL(t + 0.4)),
        e.box(LL(43.65), 0, RL(t + 1.8), LL(44.15), 0.42, RL(t + 2)),
        e.solid(LL(43.6), RL(t), LL(44.2), RL(t + 2.2), 0, 0.5, `prop`));
    for (let t of [-150, -138, -129])
      (e.col(3815994).mat(0.5, 0.6, 0, 0),
        e.cylY(LL(44.9), RL(t), 0, 4.2, 0.07, 6),
        e.col(16773848).mat(0.3, 0, 0.8, 1),
        e.cylY(LL(44.9), RL(t), 4.2, 4.7, 0.18, 6),
        e.pole(LL(44.9), RL(t), 0.12, 0, 4.7));
  }
  let o = 7;
  for (let [t, n, r] of [
    [38.3, -154, 8.5],
    [38.3, -148.5, 9.5],
    [38.3, -137.5, 9],
    [38.3, -131, 8],
    [44.8, -156.8, 7.5],
    [44.8, -126.8, 7.5],
  ])
    (EO(e, LL(t), RL(n), r, o++), e.pole(LL(t), RL(n), 0.3, 0, 3));
}
function* $te(e, t) {
  (yield* Zte(e, t), yield, yield* Qte(e, t));
}
function ene(e, t) {
  let n = gL(LL(zL.x0), RL(zL.z0), LL(zL.x1), RL(zL.z1), [0.5, 0.5, 5, 0.5], 1);
  (e.col(16777215).mat(0.35, 0.55, 0.16, Y | 32),
    vL(e, n, 0, zL.frame, t.A.sub(`lcTkGrid`, 0, 0, 0.5, 1), 25.6, 52.8),
    e.col(8159104).mat(0.85, 0, 0, 0),
    bL(e, n, zL.frame - 1),
    CL(e, LL(zL.x0 + 1.5), zL.frame, RL(zL.z0 + 1.5), 0.7));
}
var tne = {
    id: `tokiwabashi-beacon`,
    site: (e) => ({
      x: IL.x,
      z: IL.z,
      gy: e.groundHeight(IL.x, IL.z),
      facing: 0,
    }),
    name: {
      ja: `常盤橋ビーコンタワー`,
      zh: `常盤橋燈塔大樓`,
      en: `Tokiwabashi Beacon Tower`,
    },
    near: 250,
    build: $te,
    far: ene,
    bounds: () => [35, -159, 63, -125],
    farBoxes: (e, t) => [
      {
        x0: zL.x0,
        x1: zL.x1,
        z0: zL.z0,
        z1: zL.z1,
        y0: t.gy,
        y1: t.gy + zL.frame,
        rgb: [0.24, 0.25, 0.23],
        lit: !0,
      },
    ],
    anchors: [
      {
        key: `tokiwabashi-beacon-entrance`,
        lx: LL(64.4),
        lz: RL(-124.6),
        turn: -Math.PI / 4,
        name: {
          zh: `常盤橋燈塔大樓 轉角入口`,
          en: `Tokiwabashi Beacon Tower, corner entrance`,
        },
      },
      {
        key: `tokyo-beacon-park`,
        lx: LL(43.6),
        lz: RL(-142),
        turn: -Math.PI / 2,
        name: { zh: `TOKYO BEACON 公園`, en: `TOKYO BEACON Park` },
      },
    ],
    blip: !0,
  },
  VL = { x: 14, z: -146 },
  HL = (e) => e - VL.x,
  UL = (e) => e - VL.z,
  WL = { x0: 7.6, x1: 24.2, z0: -158.2, z1: -134.2 },
  GL = { base: 9, podium: 52, cw: 118, net: 186, steel: 195 },
  KL = [
    [11.2, -154.6, 0.4],
    [20.6, -154.4, 2.2],
    [20.4, -138.2, 3],
    [12.4, -139.6, -1.2],
  ];
function nne(e, t) {
  let n = gL(
    HL(WL.x0),
    UL(WL.z0),
    HL(WL.x1),
    UL(WL.z1),
    [4, 7, 4, 4],
    t ? 2 : 5,
  );
  return e ? _L(n, e) : n;
}
function* rne(e, t) {
  let n = nne(0, e.coarse);
  e.col(5917246).mat(0.8, 0, 0, 0);
  for (let t = 0, r = _L(n, 0.3), i = r.length; t < i; t++) {
    let n = r[t],
      a = r[(t + 1) % i];
    Math.hypot(a[0] - n[0], a[1] - n[1]) > 0.001 &&
      e.panel(n[0], n[1], a[0], a[1], 0.15, GL.base);
  }
  let r = _L(n, 0.8);
  (e.col(16777215).mat(0.4, 0.4, 0.02, 0),
    vL(e, r, GL.base, GL.podium, t.A.sub(`lcNet`, 0, 0, 0.5, 0.5), 8, 8.6),
    e.col(14146011).mat(0.5, 0.4, 0, 0),
    xL(e, r, 0.4, GL.podium - 0.3, GL.podium + 0.6),
    yield,
    e.col(16777215).mat(0.2, 0.5, 0, 0),
    vL(
      e,
      n,
      GL.podium + 0.6,
      GL.cw,
      t.A.sub(`lcNet`, 0.5, 0, 1, 0.5),
      6.4,
      8.8,
    ),
    e.col(11057348).mat(0.95, 0, 0, 0),
    vL(e, _L(n, 0.25), GL.cw, GL.net, t.A.sub(`lcNet`, 0, 0.5, 1, 1), 15, 9),
    yield,
    e.col(9342860).mat(0.7, 0.3, 0, 0),
    bL(e, n, GL.net),
    e.coarse || bL(e, _L(n, -0.4), GL.net + 4.5),
    e.col(7238262).mat(0.6, 0.6, 0, 0));
  let i = n.length,
    a = 0;
  for (let t = 0; t < i; t++) {
    let r = n[t],
      o = n[(t + 1) % i],
      s = Math.hypot(o[0] - r[0], o[1] - r[1]),
      c = e.coarse ? 8 : 4.2;
    for (let t = (c - (a % c)) % c; t < s; t += c) {
      let n = t / s,
        i = r[0] + (o[0] - r[0]) * n,
        a = r[1] + (o[1] - r[1]) * n;
      e.rod(i, GL.net, a, i, GL.steel, a, 0.28, 4);
    }
    a += s;
  }
  if (
    (xL(e, n, 0.05, GL.net + 4.3, GL.net + 4.9),
    xL(e, n, 0.05, GL.steel - 0.6, GL.steel),
    !e.coarse)
  )
    for (let t of [HL(WL.x0) + 0.1, HL(WL.x1) - 0.1])
      for (let [n, r] of [
        [-154, -147],
        [-145, -138],
      ])
        (e.rod(t, GL.net, UL(n), t, GL.steel, UL(r), 0.25, 4),
          e.rod(t, GL.net, UL(r), t, GL.steel, UL(n), 0.25, 4));
  (e.col(11053478).mat(0.85, 0, 0, 0),
    e.box(HL(13), GL.net, UL(-151), HL(19.5), GL.steel + 5, UL(-141.5)),
    yield,
    e.col(14080216).mat(0.7, 0.2, 0.03, 1));
  let o = _L(n, 0.6);
  for (let t = 0, n = o.length; t < n; t++) {
    let r = o[t],
      i = o[(t + 1) % n],
      a = Math.hypot(i[0] - r[0], i[1] - r[1]);
    for (let t = 0.6; t < a - 2.2; t += e.coarse ? 9 : 5.2) {
      let n = t / a,
        o = Math.min(1, (t + 3.6) / a);
      e.panel(
        r[0] + (i[0] - r[0]) * n,
        r[1] + (i[1] - r[1]) * n,
        r[0] + (i[0] - r[0]) * o,
        r[1] + (i[1] - r[1]) * o,
        GL.steel - 3,
        GL.steel + 5.5,
      );
    }
  }
  if (!e.coarse) {
    e.col(16774880).mat(0.3, 0, 0.9, 1);
    for (let [t, n] of [
      [10, -156],
      [22, -156],
      [22, -137],
      [11, -138],
      [16, -146],
    ])
      e.obox(HL(t), GL.net + 1.2, UL(n), 0.3, 0.2, 0.3);
  }
  yield;
  for (let [t, n, r] of KL)
    Vte(e, HL(t), GL.steel + 0.5, UL(n), 22, r, 36, 1.12);
  (CL(e, HL(WL.x0 + 2), GL.steel + 5.6, UL(WL.z0 + 2), 0.4),
    CL(e, HL(WL.x1 - 2), GL.steel + 5.6, UL(WL.z1 - 2), 0.4),
    e.solid(HL(WL.x0), UL(WL.z0), HL(WL.x1), UL(WL.z1), 0, GL.steel + 6));
}
