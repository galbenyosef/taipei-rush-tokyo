// tokyo/assets/region-tokyo-A7LxHjud 199 — col
// Lines 79257-79566 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* sve(e, t) {
  let n = t.A.sub(`lcTkGrid`, 0, 0, 0.5, 1),
    r = t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1),
    i = uA(0, e.coarse),
    a = uA(0.5, e.coarse);
  if (
    (e.col(16777215).mat(0.3, 0.4, 0.3, G),
    Vk(e, i, 0, lA.pod, r, 3.2, 8),
    e.col(6182476).mat(0.45, 0.6, 0.04, 1),
    !e.coarse)
  )
    for (let t of [8, 16, 24]) Wk(e, i, 0.15, t - 0.18, t + 0.08);
  (Wk(e, i, 0.9, lA.pod - 0.4, lA.pod + 1.2),
    yield,
    e.col(16777215).mat(0.35, 0.55, 0.16, G | 32),
    Vk(e, a, lA.pod + 1.2, lA.top, n, 6.4, 13.2),
    yield,
    e.col(12103844).mat(0.5, 0.6, 0.02, 0),
    Vk(e, a, lA.top, lA.frame, n, 6.4, 13.2));
  let o = Bk(a, -0.35);
  if (
    (Vk(e, [...o].reverse(), lA.top, lA.frame, n, 6.4, 13.2),
    e.col(3814445).mat(0.5, 0.6, 0, 0),
    Wk(e, a, 0.15, lA.frame - 0.3, lA.frame),
    e.col(8159104).mat(0.85, 0, 0, 0),
    Uk(e, o, lA.top),
    !e.coarse)
  ) {
    (e.col(10132894).mat(0.8, 0.2, 0, 0),
      e.box(sA(50), lA.top, cA(-150), sA(58), lA.top + 4, cA(-134)),
      e.col(4538426).mat(0.6, 0.5, 0, 0));
    for (let t of [-153.5, -131.5])
      e.panel(
        sA(lA.x1 - 0.45),
        cA(t + 1.2),
        sA(lA.x1 - 0.45),
        cA(t - 1.2),
        42,
        58,
      );
    for (let t of [49.4, 59.6])
      e.panel(
        sA(t + 1.2),
        cA(lA.z0 + 0.45),
        sA(t - 1.2),
        cA(lA.z0 + 0.45),
        42,
        58,
      );
  }
  (Kk(e, sA(lA.x0 + 1.5), lA.frame, cA(lA.z0 + 1.5), 0.45),
    Kk(e, sA(lA.x1 - 2.5), lA.frame, cA(lA.z1 - 2.5), 0.45),
    yield);
  let s = (e, n, r, i) => qk(t, `lcSigns`, e, n, r, i, 320, 192),
    c = Math.SQRT1_2,
    l = sA(lA.x1) - 5,
    u = cA(lA.z1) - 5,
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
    e.solid(sA(lA.x0), cA(lA.z0), sA(lA.x1), cA(lA.z1), 0, lA.frame));
}
function* cve(e, t) {
  let { x0: n, x1: r, z0: i, z1: a } = ove;
  (e.col(16777215).mat(0.85, 0, 0.03, G),
    e.flat(
      sA(n),
      cA(i),
      sA(r),
      cA(a),
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
      e.box(sA(t), 0, cA(n), sA(r), 0.45, cA(i)),
      e.col(6130245).mat(0.95, 0, 0, 0),
      e.flat(sA(t + 0.25), cA(n + 0.25), sA(r - 0.25), cA(i - 0.25), 0.47));
  if (
    (e.col(10130828).mat(0.85, 0, 0, 0),
    e.box(sA(41.2), 0, cA(-156.5), sA(43), 0.3, cA(-128.5)),
    e.col(2373962).mat(0.05, 0.2, 0.03, 1),
    e.flat(sA(41.4), cA(-156.3), sA(42.8), cA(-128.7), 0.32),
    yield,
    !e.coarse)
  ) {
    for (let t = -154; t < -129; t += 6)
      (e.col(9071176).mat(0.8, 0, 0, 0),
        e.box(sA(43.6), 0.42, cA(t), sA(44.2), 0.48, cA(t + 2.2)),
        e.col(4868682).mat(0.5, 0.6, 0, 0),
        e.box(sA(43.65), 0, cA(t + 0.2), sA(44.15), 0.42, cA(t + 0.4)),
        e.box(sA(43.65), 0, cA(t + 1.8), sA(44.15), 0.42, cA(t + 2)),
        e.solid(sA(43.6), cA(t), sA(44.2), cA(t + 2.2), 0, 0.5, `prop`));
    for (let t of [-150, -138, -129])
      (e.col(3815994).mat(0.5, 0.6, 0, 0),
        e.cylY(sA(44.9), cA(t), 0, 4.2, 0.07, 6),
        e.col(16773848).mat(0.3, 0, 0.8, 1),
        e.cylY(sA(44.9), cA(t), 4.2, 4.7, 0.18, 6),
        e.pole(sA(44.9), cA(t), 0.12, 0, 4.7));
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
    (KC(e, sA(t), cA(n), r, o++), e.pole(sA(t), cA(n), 0.3, 0, 3));
}
function* lve(e, t) {
  (yield* sve(e, t), yield, yield* cve(e, t));
}
function uve(e, t) {
  let n = zk(sA(lA.x0), cA(lA.z0), sA(lA.x1), cA(lA.z1), [0.5, 0.5, 5, 0.5], 1);
  (e.col(16777215).mat(0.35, 0.55, 0.16, G | 32),
    Vk(e, n, 0, lA.frame, t.A.sub(`lcTkGrid`, 0, 0, 0.5, 1), 25.6, 52.8),
    e.col(8159104).mat(0.85, 0, 0, 0),
    Uk(e, n, lA.frame - 1),
    Kk(e, sA(lA.x0 + 1.5), lA.frame, cA(lA.z0 + 1.5), 0.7));
}
var dve = {
    id: `tokiwabashi-beacon`,
    site: (e) => ({
      x: oA.x,
      z: oA.z,
      gy: e.groundHeight(oA.x, oA.z),
      facing: 0,
    }),
    name: {
      ja: `常盤橋ビーコンタワー`,
      zh: `常盤橋燈塔大樓`,
      en: `Tokiwabashi Beacon Tower`,
    },
    near: 250,
    build: lve,
    far: uve,
    bounds: () => [35, -159, 63, -125],
    farBoxes: (e, t) => [
      {
        x0: lA.x0,
        x1: lA.x1,
        z0: lA.z0,
        z1: lA.z1,
        y0: t.gy,
        y1: t.gy + lA.frame,
        rgb: [0.24, 0.25, 0.23],
        lit: !0,
      },
    ],
    anchors: [
      {
        key: `tokiwabashi-beacon-entrance`,
        lx: sA(64.4),
        lz: cA(-124.6),
        turn: -Math.PI / 4,
        name: {
          zh: `常盤橋燈塔大樓 轉角入口`,
          en: `Tokiwabashi Beacon Tower, corner entrance`,
        },
      },
      {
        key: `tokyo-beacon-park`,
        lx: sA(43.6),
        lz: cA(-142),
        turn: -Math.PI / 2,
        name: { zh: `TOKYO BEACON 公園`, en: `TOKYO BEACON Park` },
      },
    ],
    blip: !0,
  },
  dA = { x: 14, z: -146 },
  fA = (e) => e - dA.x,
  pA = (e) => e - dA.z,
  mA = { x0: 7.6, x1: 24.2, z0: -158.2, z1: -134.2 },
  hA = { base: 9, podium: 52, cw: 118, net: 186, steel: 195 },
  gA = [
    [11.2, -154.6, 0.4],
    [20.6, -154.4, 2.2],
    [20.4, -138.2, 3],
    [12.4, -139.6, -1.2],
  ];
function fve(e, t) {
  let n = zk(
    fA(mA.x0),
    pA(mA.z0),
    fA(mA.x1),
    pA(mA.z1),
    [4, 7, 4, 4],
    t ? 2 : 5,
  );
  return e ? Bk(n, e) : n;
}
function* pve(e, t) {
  let n = fve(0, e.coarse);
  e.col(5917246).mat(0.8, 0, 0, 0);
  for (let t = 0, r = Bk(n, 0.3), i = r.length; t < i; t++) {
    let n = r[t],
      a = r[(t + 1) % i];
    Math.hypot(a[0] - n[0], a[1] - n[1]) > 0.001 &&
      e.panel(n[0], n[1], a[0], a[1], 0.15, hA.base);
  }
  let r = Bk(n, 0.8);
  (e.col(16777215).mat(0.4, 0.4, 0.02, 0),
    Vk(e, r, hA.base, hA.podium, t.A.sub(`lcNet`, 0, 0, 0.5, 0.5), 8, 8.6),
    e.col(14146011).mat(0.5, 0.4, 0, 0),
    Wk(e, r, 0.4, hA.podium - 0.3, hA.podium + 0.6),
    yield,
    e.col(16777215).mat(0.2, 0.5, 0, 0),
    Vk(
      e,
      n,
      hA.podium + 0.6,
      hA.cw,
      t.A.sub(`lcNet`, 0.5, 0, 1, 0.5),
      6.4,
      8.8,
    ),
    e.col(11057348).mat(0.95, 0, 0, 0),
    Vk(e, Bk(n, 0.25), hA.cw, hA.net, t.A.sub(`lcNet`, 0, 0.5, 1, 1), 15, 9),
    yield,
    e.col(9342860).mat(0.7, 0.3, 0, 0),
    Uk(e, n, hA.net),
    e.coarse || Uk(e, Bk(n, -0.4), hA.net + 4.5),
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
      e.rod(i, hA.net, a, i, hA.steel, a, 0.28, 4);
    }
    a += s;
  }
  if (
    (Wk(e, n, 0.05, hA.net + 4.3, hA.net + 4.9),
    Wk(e, n, 0.05, hA.steel - 0.6, hA.steel),
    !e.coarse)
  )
    for (let t of [fA(mA.x0) + 0.1, fA(mA.x1) - 0.1])
      for (let [n, r] of [
        [-154, -147],
        [-145, -138],
      ])
        (e.rod(t, hA.net, pA(n), t, hA.steel, pA(r), 0.25, 4),
          e.rod(t, hA.net, pA(r), t, hA.steel, pA(n), 0.25, 4));
  (e.col(11053478).mat(0.85, 0, 0, 0),
    e.box(fA(13), hA.net, pA(-151), fA(19.5), hA.steel + 5, pA(-141.5)),
    yield,
    e.col(14080216).mat(0.7, 0.2, 0.03, 1));
  let o = Bk(n, 0.6);
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
        hA.steel - 3,
        hA.steel + 5.5,
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
      e.obox(fA(t), hA.net + 1.2, pA(n), 0.3, 0.2, 0.3);
  }
  yield;
  for (let [t, n, r] of gA)
    Jk(e, fA(t), hA.steel + 0.5, pA(n), 22, r, 36, 1.12);
  (Kk(e, fA(mA.x0 + 2), hA.steel + 5.6, pA(mA.z0 + 2), 0.4),
    Kk(e, fA(mA.x1 - 2), hA.steel + 5.6, pA(mA.z1 - 2), 0.4),
    e.solid(fA(mA.x0), pA(mA.z0), fA(mA.x1), pA(mA.z1), 0, hA.steel + 6));
}
