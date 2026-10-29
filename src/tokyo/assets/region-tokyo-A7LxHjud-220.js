// tokyo/assets/region-tokyo-A7LxHjud 220 — roof
// Lines 85655-85889 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function ube(e, t) {
  let n = [
    ZM,
    24,
    $M,
    79,
    VM.under,
    VM.roof,
    ...nN.slice(2).filter((e, t) => t % 2 == 0),
    HM.under,
    HM.roof,
    UM,
  ];
  for (let [t, r] of hN)
    for (let i = 0; i + 1 < n.length; i++)
      (n[i] >= VM.under - 0.001 && n[i + 1] <= VM.roof + 0.001) ||
        (n[i] >= HM.under - 0.001 && n[i + 1] <= HM.roof + 0.001) ||
        n[i + 1] <= n[i] ||
        (_N(e, (n[i] + n[i + 1]) / 2),
        bN(
          e,
          [t * YM(n[i]), n[i], r * YM(n[i])],
          [t * YM(n[i + 1]), n[i + 1], r * YM(n[i + 1])],
          XM(n[i]) * 0.6,
          XM(n[i + 1]) * 0.6,
        ));
  let r = [
    $M,
    79,
    VM.under,
    -1,
    VM.roof,
    VM.roof + KM,
    VM.roof + KM * 2,
    HM.under - 0.01,
  ];
  for (let t = 0; t < 4; t++) {
    _N(e, 25);
    let n = YM(QM) - XM(QM) / 2,
      i = null;
    for (let r = 0; r <= 4; r++) {
      let a = -1 + r / 2,
        o = QM + 31 * Math.sqrt(Math.max(0, 1 - a * a)),
        s = gN(t, (a * n) / YM(o), o);
      (i && vN(e, i, s, 0.9, 3), (i = s));
    }
    for (let n = 0; n + 1 < r.length; n++)
      r[n] < 0 ||
        r[n + 1] < 0 ||
        (_N(e, (r[n] + r[n + 1]) / 2),
        vN(e, gN(t, -1, r[n]), gN(t, 1, r[n + 1]), 0.7, 3),
        vN(e, gN(t, 1, r[n]), gN(t, -1, r[n + 1]), 0.7, 3),
        vN(e, gN(t, -1, r[n]), gN(t, 1, r[n]), 0.6, 3));
  }
  let i = xN(iN, aN);
  (e.col(15855594).mat(0.4, 0.2, 0.3, G),
    SN(e, CN(i, 0.98), CN(i, 1.04), VM.soffit, VM.roof, t.c(`glass`), 0),
    Uk(e, CN(i, 1.04), VM.roof, !0),
    Uk(e, CN(i, 0.98), VM.soffit, !1));
  let a = xN(oN, sN);
  (SN(e, a, CN(a, 1.06), HM.under, HM.roof, t.c(`glass`), 0),
    Uk(e, CN(a, 1.06), HM.roof, !0),
    e.col(15921128).mat(0.5, 0.2, 0.15, 1),
    e.lathe(0, 0, [6.5, UM, 6.5, WM], 8, 0));
  for (let [t, n, r, i] of [
    [WM, GM, 2, 1.2],
    [GM, BM, 1, 0.4],
  ])
    (_N(e, t + 20, 0.85), e.lathe(0, 0, [r, t, i, n], 4, Math.PI / 4));
  (wN(e, 0, 331.8, 0, 0.9),
    e.col(6179390).mat(0.6, 0.1, 0.12, G),
    e.box(lN.x0, 0, lN.z0, lN.x1, lN.h, lN.z1),
    e.box(uN.x0, 0, uN.z0, uN.x1, uN.h, uN.z1));
}
function ON(e, t, n, r, i, a, o, s, c) {
  return {
    x0: e.x - i,
    x1: e.x - n,
    z0: e.z + t,
    z1: e.z + r,
    y0: e.gy + a,
    y1: e.gy + o,
    rgb: s,
    glow: c,
  };
}
var kN = [0.8, 0.12, 0.02],
  AN = [0.86, 0.76, 0.6];
function dbe(e, t) {
  let n = [];
  for (let [e, r] of hN)
    for (let [i, a] of [
      [0, 26],
      [26, 51],
    ]) {
      let o = YM((i + a) / 2),
        s = XM((i + a) / 2) * 0.8;
      n.push(ON(t, e * o - s, r * o - s, e * o + s, r * o + s, i, a, kN, 0.9));
    }
  let r = [
    [51, 79],
    [79, 100],
    [100, VM.under],
    [VM.roof, VM.roof + KM],
    [VM.roof + KM, VM.roof + KM * 2],
    [VM.roof + KM * 2, HM.under],
  ];
  for (let [e, i] of r) {
    let r = YM((e + i) / 2) * 0.82,
      a = JM((e + i) / 2);
    n.push(ON(t, -r, -r, r, r, e, i, a ? AN : kN, a ? 0.4 : 0.9));
  }
  return (
    n.push(
      ON(t, -16.2, -16.2, iN, iN, VM.soffit, VM.roof, [0.72, 0.72, 0.7], 0.6),
    ),
    n.push(
      ON(t, -7.8, -7.8, oN, oN, HM.under, HM.roof, [0.72, 0.72, 0.7], 0.6),
    ),
    n.push(
      ON(
        t,
        -YM(238) * 0.8,
        -YM(238) * 0.8,
        YM(238) * 0.8,
        YM(238) * 0.8,
        HM.roof,
        UM,
        AN,
        0.45,
      ),
    ),
    n.push(ON(t, -5.5, -5.5, 5.5, 5.5, UM, WM, [0.85, 0.84, 0.8], 0.4)),
    n.push(ON(t, -1.6, -1.6, 1.6, 1.6, WM, GM, kN, 0.8)),
    n.push(ON(t, -0.8, -0.8, 0.8, 0.8, GM, BM, AN, 0.6)),
    n.push(ON(t, lN.x0, lN.z0, lN.x1, lN.z1, 0, lN.h, [0.36, 0.29, 0.24])),
    n.push(ON(t, uN.x0, uN.z0, uN.x1, uN.z1, 0, uN.h, [0.36, 0.29, 0.24])),
    n
  );
}
var jN = 9,
  MN = (e) => ({
    x: fN.x,
    z: fN.z,
    gy: e.groundHeight(fN.x, fN.z),
    facing: Math.PI / 2,
  });
function fbe(e) {
  let t = (t, n, r) => ({ x: fN.x - n, z: fN.z + t, y: e + r }),
    n = (e, n, r, i) => ({ key: e, ...t(n, r, i) });
  return {
    doors: [
      n(`street`, lN.x0 - 1.2, jN, 0),
      n(`main-down`, -cN.md - 1, 0, VM.f1),
      n(`main-up`, cN.md + 1, 0, VM.f1),
      n(`top`, -cN.td - 1, 0, HM.f),
    ],
    streetArrive: { ...t(lN.x0 - 6, jN, 0), heading: 0 },
    mainFromStreet: { ...t(-cN.md - 3.2, 0, VM.f1), heading: 0 },
    mainFromTop: { ...t(cN.md + 3.2, 0, VM.f1), heading: Math.PI },
    topArrive: { ...t(-cN.td - 2.4, 0, HM.f), heading: 0 },
  };
}
var pbe = {
  id: `tokyo-tower`,
  name: { ja: `東京タワー`, zh: `東京鐵塔`, en: `Tokyo Tower` },
  site: MN,
  near: 320,
  build: lbe,
  far: ube,
  farBoxes: dbe,
  bounds: (e, t) => [t.x - 40, t.z - 66, t.x + 40, t.z + 66],
  blip: !1,
  anchors: [
    {
      key: `tokyo-tower-foot`,
      lx: -46,
      lz: 0,
      turn: Math.PI / 2,
      name: { zh: `東京鐵塔 塔下廣場`, en: `Tokyo Tower forecourt` },
    },
  ],
  roofs: [
    { lx0: lN.x0 - 5, lz0: -12, lx1: lN.x0, lz1: 12, y: 4.6 },
    { lx0: -16.2, lz0: -16.2, lx1: iN, lz1: iN, y: VM.ceil1 },
    { lx0: -7.8, lz0: -7.8, lx1: oN, lz1: oN, y: HM.ceil },
  ],
};
function NN(e, t, n, r, i, a) {
  (e.col(2763824).mat(0.8, 0, 0, 0),
    e.cylY(t, r, n, n + 0.85, 0.13, 5),
    e.col(a).mat(0.8, 0, 0, 0),
    e.cylY(t, r, n + 0.85, n + 1.42, 0.2, 6, 0.17),
    e.col(14858644).mat(0.7, 0, 0, 0),
    e.cylY(t, r, n + 1.45, n + i, 0.11, 6, 0.09));
}
function PN(e, t, n, r, i) {
  let a = n[0] - t[0],
    o = n[1] - t[1],
    s = n[2] - t[2],
    c = r[0] - t[0],
    l = r[1] - t[1],
    u = r[2] - t[2],
    d = o * u - s * l,
    f = s * c - a * u,
    p = a * l - o * c;
  d * i[0] + f * i[1] + p * i[2] >= 0
    ? e.triFace(t[0], t[1], t[2], n[0], n[1], n[2], r[0], r[1], r[2])
    : e.triFace(t[0], t[1], t[2], r[0], r[1], r[2], n[0], n[1], n[2]);
}
function FN(e, t, n, r) {
  for (let i = 0; i < t.length; i++) {
    let a = t[i],
      o = t[(i + 1) % t.length],
      s = (a[0] + o[0]) / 2,
      c = (a[1] + o[1]) / 2,
      l = Math.hypot(o[0] - a[0], o[1] - a[1]);
    e.solidRot(
      s,
      c,
      l / 2 + 0.3,
      0.25,
      -Math.atan2(o[1] - a[1], o[0] - a[0]),
      n - 0.2,
      n + r,
      `wall`,
    );
  }
}
function IN(e, t, n, r) {
  (e.col(12172479).mat(0.25, 0.85, 0.08, 1),
    TN(e, t + n * 0.03, -1.3, t + n * 0.03, 1.3, n, 0, r, r + 2.5),
    e.col(16773588).mat(0.3, 0, 0.9, 1),
    TN(e, t + n * 0.04, -1.6, t + n * 0.04, 1.6, n, 0, r + 2.6, r + 2.8));
}
