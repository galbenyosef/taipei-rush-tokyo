// tokyo/assets/region-tokyo-55J_WESF 220 — roof
// Lines 85564-85798 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function Zye(e, t) {
  let n = [
    YM,
    24,
    ZM,
    79,
    zM.under,
    zM.roof,
    ...eN.slice(2).filter((e, t) => t % 2 == 0),
    BM.under,
    BM.roof,
    VM,
  ];
  for (let [t, r] of pN)
    for (let i = 0; i + 1 < n.length; i++)
      (n[i] >= zM.under - 0.001 && n[i + 1] <= zM.roof + 0.001) ||
        (n[i] >= BM.under - 0.001 && n[i + 1] <= BM.roof + 0.001) ||
        n[i + 1] <= n[i] ||
        (hN(e, (n[i] + n[i + 1]) / 2),
        vN(
          e,
          [t * qM(n[i]), n[i], r * qM(n[i])],
          [t * qM(n[i + 1]), n[i + 1], r * qM(n[i + 1])],
          JM(n[i]) * 0.6,
          JM(n[i + 1]) * 0.6,
        ));
  let r = [
    ZM,
    79,
    zM.under,
    -1,
    zM.roof,
    zM.roof + WM,
    zM.roof + WM * 2,
    BM.under - 0.01,
  ];
  for (let t = 0; t < 4; t++) {
    hN(e, 25);
    let n = qM(XM) - JM(XM) / 2,
      i = null;
    for (let r = 0; r <= 4; r++) {
      let a = -1 + r / 2,
        o = XM + 31 * Math.sqrt(Math.max(0, 1 - a * a)),
        s = mN(t, (a * n) / qM(o), o);
      (i && gN(e, i, s, 0.9, 3), (i = s));
    }
    for (let n = 0; n + 1 < r.length; n++)
      r[n] < 0 ||
        r[n + 1] < 0 ||
        (hN(e, (r[n] + r[n + 1]) / 2),
        gN(e, mN(t, -1, r[n]), mN(t, 1, r[n + 1]), 0.7, 3),
        gN(e, mN(t, 1, r[n]), mN(t, -1, r[n + 1]), 0.7, 3),
        gN(e, mN(t, -1, r[n]), mN(t, 1, r[n]), 0.6, 3));
  }
  let i = yN(nN, rN);
  (e.col(15855594).mat(0.4, 0.2, 0.3, G),
    bN(e, xN(i, 0.98), xN(i, 1.04), zM.soffit, zM.roof, t.c(`glass`), 0),
    Vk(e, xN(i, 1.04), zM.roof, !0),
    Vk(e, xN(i, 0.98), zM.soffit, !1));
  let a = yN(iN, aN);
  (bN(e, a, xN(a, 1.06), BM.under, BM.roof, t.c(`glass`), 0),
    Vk(e, xN(a, 1.06), BM.roof, !0),
    e.col(15921128).mat(0.5, 0.2, 0.15, 1),
    e.lathe(0, 0, [6.5, VM, 6.5, HM], 8, 0));
  for (let [t, n, r, i] of [
    [HM, UM, 2, 1.2],
    [UM, RM, 1, 0.4],
  ])
    (hN(e, t + 20, 0.85), e.lathe(0, 0, [r, t, i, n], 4, Math.PI / 4));
  (SN(e, 0, 331.8, 0, 0.9),
    e.col(6179390).mat(0.6, 0.1, 0.12, G),
    e.box(sN.x0, 0, sN.z0, sN.x1, sN.h, sN.z1),
    e.box(cN.x0, 0, cN.z0, cN.x1, cN.h, cN.z1));
}
function EN(e, t, n, r, i, a, o, s, c) {
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
var DN = [0.8, 0.12, 0.02],
  ON = [0.86, 0.76, 0.6];
function Qye(e, t) {
  let n = [];
  for (let [e, r] of pN)
    for (let [i, a] of [
      [0, 26],
      [26, 51],
    ]) {
      let o = qM((i + a) / 2),
        s = JM((i + a) / 2) * 0.8;
      n.push(EN(t, e * o - s, r * o - s, e * o + s, r * o + s, i, a, DN, 0.9));
    }
  let r = [
    [51, 79],
    [79, 100],
    [100, zM.under],
    [zM.roof, zM.roof + WM],
    [zM.roof + WM, zM.roof + WM * 2],
    [zM.roof + WM * 2, BM.under],
  ];
  for (let [e, i] of r) {
    let r = qM((e + i) / 2) * 0.82,
      a = KM((e + i) / 2);
    n.push(EN(t, -r, -r, r, r, e, i, a ? ON : DN, a ? 0.4 : 0.9));
  }
  return (
    n.push(
      EN(t, -16.2, -16.2, nN, nN, zM.soffit, zM.roof, [0.72, 0.72, 0.7], 0.6),
    ),
    n.push(
      EN(t, -7.8, -7.8, iN, iN, BM.under, BM.roof, [0.72, 0.72, 0.7], 0.6),
    ),
    n.push(
      EN(
        t,
        -qM(238) * 0.8,
        -qM(238) * 0.8,
        qM(238) * 0.8,
        qM(238) * 0.8,
        BM.roof,
        VM,
        ON,
        0.45,
      ),
    ),
    n.push(EN(t, -5.5, -5.5, 5.5, 5.5, VM, HM, [0.85, 0.84, 0.8], 0.4)),
    n.push(EN(t, -1.6, -1.6, 1.6, 1.6, HM, UM, DN, 0.8)),
    n.push(EN(t, -0.8, -0.8, 0.8, 0.8, UM, RM, ON, 0.6)),
    n.push(EN(t, sN.x0, sN.z0, sN.x1, sN.z1, 0, sN.h, [0.36, 0.29, 0.24])),
    n.push(EN(t, cN.x0, cN.z0, cN.x1, cN.z1, 0, cN.h, [0.36, 0.29, 0.24])),
    n
  );
}
var kN = 9,
  AN = (e) => ({
    x: uN.x,
    z: uN.z,
    gy: e.groundHeight(uN.x, uN.z),
    facing: Math.PI / 2,
  });
function $ye(e) {
  let t = (t, n, r) => ({ x: uN.x - n, z: uN.z + t, y: e + r }),
    n = (e, n, r, i) => ({ key: e, ...t(n, r, i) });
  return {
    doors: [
      n(`street`, sN.x0 - 1.2, kN, 0),
      n(`main-down`, -oN.md - 1, 0, zM.f1),
      n(`main-up`, oN.md + 1, 0, zM.f1),
      n(`top`, -oN.td - 1, 0, BM.f),
    ],
    streetArrive: { ...t(sN.x0 - 6, kN, 0), heading: 0 },
    mainFromStreet: { ...t(-oN.md - 3.2, 0, zM.f1), heading: 0 },
    mainFromTop: { ...t(oN.md + 3.2, 0, zM.f1), heading: Math.PI },
    topArrive: { ...t(-oN.td - 2.4, 0, BM.f), heading: 0 },
  };
}
var ebe = {
  id: `tokyo-tower`,
  name: { ja: `東京タワー`, zh: `東京鐵塔`, en: `Tokyo Tower` },
  site: AN,
  near: 320,
  build: Xye,
  far: Zye,
  farBoxes: Qye,
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
    { lx0: sN.x0 - 5, lz0: -12, lx1: sN.x0, lz1: 12, y: 4.6 },
    { lx0: -16.2, lz0: -16.2, lx1: nN, lz1: nN, y: zM.ceil1 },
    { lx0: -7.8, lz0: -7.8, lx1: iN, lz1: iN, y: BM.ceil },
  ],
};
function jN(e, t, n, r, i, a) {
  (e.col(2763824).mat(0.8, 0, 0, 0),
    e.cylY(t, r, n, n + 0.85, 0.13, 5),
    e.col(a).mat(0.8, 0, 0, 0),
    e.cylY(t, r, n + 0.85, n + 1.42, 0.2, 6, 0.17),
    e.col(14858644).mat(0.7, 0, 0, 0),
    e.cylY(t, r, n + 1.45, n + i, 0.11, 6, 0.09));
}
function MN(e, t, n, r, i) {
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
function NN(e, t, n, r) {
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
function PN(e, t, n, r) {
  (e.col(12172479).mat(0.25, 0.85, 0.08, 1),
    CN(e, t + n * 0.03, -1.3, t + n * 0.03, 1.3, n, 0, r, r + 2.5),
    e.col(16773588).mat(0.3, 0, 0.9, 1),
    CN(e, t + n * 0.04, -1.6, t + n * 0.04, 1.6, n, 0, r + 2.6, r + 2.8));
}
