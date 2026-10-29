// tokyo/assets/region-tokyo-55J_WESF 199 — col
// Lines 79166-79475 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* J_e(e, t) {
  let n = t.A.sub(`lcTkGrid`, 0, 0, 0.5, 1),
    r = t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1),
    i = cA(0, e.coarse),
    a = cA(0.5, e.coarse);
  if (
    (e.col(16777215).mat(0.3, 0.4, 0.3, G),
    zk(e, i, 0, sA.pod, r, 3.2, 8),
    e.col(6182476).mat(0.45, 0.6, 0.04, 1),
    !e.coarse)
  )
    for (let t of [8, 16, 24]) Hk(e, i, 0.15, t - 0.18, t + 0.08);
  (Hk(e, i, 0.9, sA.pod - 0.4, sA.pod + 1.2),
    yield,
    e.col(16777215).mat(0.35, 0.55, 0.16, G | 32),
    zk(e, a, sA.pod + 1.2, sA.top, n, 6.4, 13.2),
    yield,
    e.col(12103844).mat(0.5, 0.6, 0.02, 0),
    zk(e, a, sA.top, sA.frame, n, 6.4, 13.2));
  let o = Rk(a, -0.35);
  if (
    (zk(e, [...o].reverse(), sA.top, sA.frame, n, 6.4, 13.2),
    e.col(3814445).mat(0.5, 0.6, 0, 0),
    Hk(e, a, 0.15, sA.frame - 0.3, sA.frame),
    e.col(8159104).mat(0.85, 0, 0, 0),
    Vk(e, o, sA.top),
    !e.coarse)
  ) {
    (e.col(10132894).mat(0.8, 0.2, 0, 0),
      e.box(aA(50), sA.top, oA(-150), aA(58), sA.top + 4, oA(-134)),
      e.col(4538426).mat(0.6, 0.5, 0, 0));
    for (let t of [-153.5, -131.5])
      e.panel(
        aA(sA.x1 - 0.45),
        oA(t + 1.2),
        aA(sA.x1 - 0.45),
        oA(t - 1.2),
        42,
        58,
      );
    for (let t of [49.4, 59.6])
      e.panel(
        aA(t + 1.2),
        oA(sA.z0 + 0.45),
        aA(t - 1.2),
        oA(sA.z0 + 0.45),
        42,
        58,
      );
  }
  (Wk(e, aA(sA.x0 + 1.5), sA.frame, oA(sA.z0 + 1.5), 0.45),
    Wk(e, aA(sA.x1 - 2.5), sA.frame, oA(sA.z1 - 2.5), 0.45),
    yield);
  let s = (e, n, r, i) => Gk(t, `lcSigns`, e, n, r, i, 320, 192),
    c = Math.SQRT1_2,
    l = aA(sA.x1) - 5,
    u = oA(sA.z1) - 5,
    d = l + c * 5.06,
    f = u + c * 5.06;
  (e.col(16777215).mat(0.4, 0.4, 0.3, G),
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
    e.solid(aA(sA.x0), oA(sA.z0), aA(sA.x1), oA(sA.z1), 0, sA.frame));
}
function* Y_e(e, t) {
  let { x0: n, x1: r, z0: i, z1: a } = q_e;
  (e.col(16777215).mat(0.85, 0, 0.03, G),
    e.flat(
      aA(n),
      oA(i),
      aA(r),
      oA(a),
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
      e.box(aA(t), 0, oA(n), aA(r), 0.45, oA(i)),
      e.col(6130245).mat(0.95, 0, 0, 0),
      e.flat(aA(t + 0.25), oA(n + 0.25), aA(r - 0.25), oA(i - 0.25), 0.47));
  if (
    (e.col(10130828).mat(0.85, 0, 0, 0),
    e.box(aA(41.2), 0, oA(-156.5), aA(43), 0.3, oA(-128.5)),
    e.col(2373962).mat(0.05, 0.2, 0.03, 1),
    e.flat(aA(41.4), oA(-156.3), aA(42.8), oA(-128.7), 0.32),
    yield,
    !e.coarse)
  ) {
    for (let t = -154; t < -129; t += 6)
      (e.col(9071176).mat(0.8, 0, 0, 0),
        e.box(aA(43.6), 0.42, oA(t), aA(44.2), 0.48, oA(t + 2.2)),
        e.col(4868682).mat(0.5, 0.6, 0, 0),
        e.box(aA(43.65), 0, oA(t + 0.2), aA(44.15), 0.42, oA(t + 0.4)),
        e.box(aA(43.65), 0, oA(t + 1.8), aA(44.15), 0.42, oA(t + 2)),
        e.solid(aA(43.6), oA(t), aA(44.2), oA(t + 2.2), 0, 0.5, `prop`));
    for (let t of [-150, -138, -129])
      (e.col(3815994).mat(0.5, 0.6, 0, 0),
        e.cylY(aA(44.9), oA(t), 0, 4.2, 0.07, 6),
        e.col(16773848).mat(0.3, 0, 0.8, 1),
        e.cylY(aA(44.9), oA(t), 4.2, 4.7, 0.18, 6),
        e.pole(aA(44.9), oA(t), 0.12, 0, 4.7));
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
    (UC(e, aA(t), oA(n), r, o++), e.pole(aA(t), oA(n), 0.3, 0, 3));
}
function* X_e(e, t) {
  (yield* J_e(e, t), yield, yield* Y_e(e, t));
}
function Z_e(e, t) {
  let n = Lk(aA(sA.x0), oA(sA.z0), aA(sA.x1), oA(sA.z1), [0.5, 0.5, 5, 0.5], 1);
  (e.col(16777215).mat(0.35, 0.55, 0.16, G | 32),
    zk(e, n, 0, sA.frame, t.A.sub(`lcTkGrid`, 0, 0, 0.5, 1), 25.6, 52.8),
    e.col(8159104).mat(0.85, 0, 0, 0),
    Vk(e, n, sA.frame - 1),
    Wk(e, aA(sA.x0 + 1.5), sA.frame, oA(sA.z0 + 1.5), 0.7));
}
var Q_e = {
    id: `tokiwabashi-beacon`,
    site: (e) => ({
      x: iA.x,
      z: iA.z,
      gy: e.groundHeight(iA.x, iA.z),
      facing: 0,
    }),
    name: {
      ja: `常盤橋ビーコンタワー`,
      zh: `常盤橋燈塔大樓`,
      en: `Tokiwabashi Beacon Tower`,
    },
    near: 250,
    build: X_e,
    far: Z_e,
    bounds: () => [35, -159, 63, -125],
    farBoxes: (e, t) => [
      {
        x0: sA.x0,
        x1: sA.x1,
        z0: sA.z0,
        z1: sA.z1,
        y0: t.gy,
        y1: t.gy + sA.frame,
        rgb: [0.24, 0.25, 0.23],
        lit: !0,
      },
    ],
    anchors: [
      {
        key: `tokiwabashi-beacon-entrance`,
        lx: aA(64.4),
        lz: oA(-124.6),
        turn: -Math.PI / 4,
        name: {
          zh: `常盤橋燈塔大樓 轉角入口`,
          en: `Tokiwabashi Beacon Tower, corner entrance`,
        },
      },
      {
        key: `tokyo-beacon-park`,
        lx: aA(43.6),
        lz: oA(-142),
        turn: -Math.PI / 2,
        name: { zh: `TOKYO BEACON 公園`, en: `TOKYO BEACON Park` },
      },
    ],
    blip: !0,
  },
  lA = { x: 14, z: -146 },
  uA = (e) => e - lA.x,
  dA = (e) => e - lA.z,
  fA = { x0: 7.6, x1: 24.2, z0: -158.2, z1: -134.2 },
  pA = { base: 9, podium: 52, cw: 118, net: 186, steel: 195 },
  mA = [
    [11.2, -154.6, 0.4],
    [20.6, -154.4, 2.2],
    [20.4, -138.2, 3],
    [12.4, -139.6, -1.2],
  ];
function $_e(e, t) {
  let n = Lk(
    uA(fA.x0),
    dA(fA.z0),
    uA(fA.x1),
    dA(fA.z1),
    [4, 7, 4, 4],
    t ? 2 : 5,
  );
  return e ? Rk(n, e) : n;
}
function* eve(e, t) {
  let n = $_e(0, e.coarse);
  e.col(5917246).mat(0.8, 0, 0, 0);
  for (let t = 0, r = Rk(n, 0.3), i = r.length; t < i; t++) {
    let n = r[t],
      a = r[(t + 1) % i];
    Math.hypot(a[0] - n[0], a[1] - n[1]) > 0.001 &&
      e.panel(n[0], n[1], a[0], a[1], 0.15, pA.base);
  }
  let r = Rk(n, 0.8);
  (e.col(16777215).mat(0.4, 0.4, 0.02, 0),
    zk(e, r, pA.base, pA.podium, t.A.sub(`lcNet`, 0, 0, 0.5, 0.5), 8, 8.6),
    e.col(14146011).mat(0.5, 0.4, 0, 0),
    Hk(e, r, 0.4, pA.podium - 0.3, pA.podium + 0.6),
    yield,
    e.col(16777215).mat(0.2, 0.5, 0, 0),
    zk(
      e,
      n,
      pA.podium + 0.6,
      pA.cw,
      t.A.sub(`lcNet`, 0.5, 0, 1, 0.5),
      6.4,
      8.8,
    ),
    e.col(11057348).mat(0.95, 0, 0, 0),
    zk(e, Rk(n, 0.25), pA.cw, pA.net, t.A.sub(`lcNet`, 0, 0.5, 1, 1), 15, 9),
    yield,
    e.col(9342860).mat(0.7, 0.3, 0, 0),
    Vk(e, n, pA.net),
    e.coarse || Vk(e, Rk(n, -0.4), pA.net + 4.5),
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
      e.rod(i, pA.net, a, i, pA.steel, a, 0.28, 4);
    }
    a += s;
  }
  if (
    (Hk(e, n, 0.05, pA.net + 4.3, pA.net + 4.9),
    Hk(e, n, 0.05, pA.steel - 0.6, pA.steel),
    !e.coarse)
  )
    for (let t of [uA(fA.x0) + 0.1, uA(fA.x1) - 0.1])
      for (let [n, r] of [
        [-154, -147],
        [-145, -138],
      ])
        (e.rod(t, pA.net, dA(n), t, pA.steel, dA(r), 0.25, 4),
          e.rod(t, pA.net, dA(r), t, pA.steel, dA(n), 0.25, 4));
  (e.col(11053478).mat(0.85, 0, 0, 0),
    e.box(uA(13), pA.net, dA(-151), uA(19.5), pA.steel + 5, dA(-141.5)),
    yield,
    e.col(14080216).mat(0.7, 0.2, 0.03, 1));
  let o = Rk(n, 0.6);
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
        pA.steel - 3,
        pA.steel + 5.5,
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
      e.obox(uA(t), pA.net + 1.2, dA(n), 0.3, 0.2, 0.3);
  }
  yield;
  for (let [t, n, r] of mA)
    Kk(e, uA(t), pA.steel + 0.5, dA(n), 22, r, 36, 1.12);
  (Wk(e, uA(fA.x0 + 2), pA.steel + 5.6, dA(fA.z0 + 2), 0.4),
    Wk(e, uA(fA.x1 - 2), pA.steel + 5.6, dA(fA.z1 - 2), 0.4),
    e.solid(uA(fA.x0), dA(fA.z0), uA(fA.x1), dA(fA.z1), 0, pA.steel + 6));
}
