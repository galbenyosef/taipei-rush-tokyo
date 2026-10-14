// tokyo/assets/region-tokyo-BcM3fReU 156 — col
// Lines 66332-66619 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function* Wte(e, t) {
  let n = t.A.sub(`lcMidGlass`, 0, 0, 0.5, 1),
    { x0: r, x1: i, z0: a, z1: o, h: s } = kL,
    c = (e) => EL(r) + 0.55 * (1 - Math.cos(((e - a) / (o - a)) * Math.PI * 4)),
    l = e.coarse ? 8 : 24,
    u = [];
  for (let e = 0; e <= l; e++) {
    let t = a + ((o - a) * e) / l;
    u.push([c(t), DL(t)]);
  }
  let d = [[EL(i), DL(a)], ...u, [EL(i), DL(o)]];
  if (
    (e.col(16777215).mat(0.3, 0.1, 0.32, Y),
    vL(e, d, 0, 6, t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1), 3.2, 6),
    e.col(16777215).mat(0.18, 0.55, 0.16, Y | 32),
    vL(e, d, 6, s, n, 6.4, 12.6),
    yield,
    e.col(15133422).mat(0.5, 0.3, 0.05, 1),
    !e.coarse)
  )
    for (let t = 6; t < s - 1; t += 8.4) xL(e, d, 0.35, t - 0.25, t + 0.1);
  if (
    (xL(e, d, 0.5, s - 0.2, s + 0.9),
    e.col(10134442).mat(0.8, 0, 0, 0),
    bL(e, d, s + 0.9),
    e.col(14212318).mat(0.45, 0.5, 0.1, 1),
    e.box(EL(r) - 1.6, 6, DL(a + 0.3), EL(r) + 0.4, 6.35, DL(o - 0.3)),
    !e.coarse)
  ) {
    e.col(16773848).mat(0.4, 0, 0.7, 1);
    for (let t = a + 2; t < o - 1; t += 3)
      e.flat(
        EL(r) - 1.2,
        DL(t) - 0.2,
        EL(r) - 0.6,
        DL(t) + 0.2,
        5.98,
        e.white,
        0,
        0,
        !1,
      );
  }
  yield;
  let f = (e, n, r, i) => wL(t, `lcSigns`, e, n, r, i, 320, 192);
  e.col(16777215).mat(0.4, 0.1, 0.35, Y);
  let p = EL(r) - 0.05;
  (e.panel(p, DL(-143.2), p, DL(-137.6), 6.6, 8.2, f(0, 64, 288, 48)),
    e.panel(p, DL(-133.4), p, DL(-126.9), 6.6, 8, f(0, 152, 288, 40)),
    e.panel(
      EL(r) + 0.6,
      DL(o) + 0.05,
      EL(i) - 0.4,
      DL(o) + 0.05,
      6.6,
      8,
      f(0, 152, 288, 40),
    ),
    e.col(16777215).mat(0.6, 0, 0.3, Y),
    e.panel(
      p - 0.02,
      DL(-130.7),
      p - 0.02,
      DL(-129.4),
      9,
      18.5,
      f(288, 0, 32, 192),
    ),
    e.col(3159354).mat(0.2, 0.4, 0.25, Y),
    e.coarse ||
      e.panel(
        p - 0.03,
        DL(-143),
        p - 0.03,
        DL(-139),
        0,
        4.2,
        t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1),
      ),
    e.solid(EL(r), DL(a), EL(i), DL(o), 0, s + 1));
}
function* Gte(e, t) {
  let n = t.A.sub(`lcMidGlass`, 0, 0, 0.5, 1),
    r = t.A.sub(`lcMidGlass`, 0.5, 0, 1, 1),
    i = Ute(e.coarse),
    a = kL.h + 0.9,
    o = () => e.col(16777215).mat(0.2, 0.35, 0.008, Y | 32),
    s = a;
  for (let [t, a] of Hte)
    (o(),
      vL(e, i, s, t, n, 6.4, 12.6),
      e.col(16777215).mat(0.5, 0.4, 0, 0),
      vL(e, i, t, a, r, 6.4, 12.6),
      (s = a),
      yield);
  if (
    (o(),
    vL(e, i, s, NL, n, 6.4, 12.6),
    yield,
    e.col(15265524).mat(0.35, 0.5, 0.04, 0),
    SL(e, i, NL, ML, r, 6.4, 12.6, e.coarse ? 4 : 1.6, 7107965),
    !e.coarse)
  ) {
    e.col(1911350).mat(0.3, 0.5, 0, 0);
    let t = EL(AL.x1 - 3.6);
    for (let [n, r] of [
      [DL(AL.z0) - 0.06, -1],
      [DL(AL.z1) + 0.06, 1],
    ]) {
      let i = ML(t, n);
      r < 0
        ? e.panel(t + 0.45, n, t - 0.45, n, a, i - 0.6)
        : e.panel(t - 0.45, n, t + 0.45, n, a, i - 0.6);
    }
    e.col(15922422).mat(0.3, 0.6, 0.14, 1);
    let n = i.length;
    for (let t = 0; t < n; t++) {
      let r = i[t],
        a = i[(t + 1) % n],
        o = ML(r[0], r[1]),
        s = ML(a[0], a[1]);
      e.quad(
        r[0],
        o - 0.5,
        r[1],
        a[0],
        s - 0.5,
        a[1],
        a[0],
        s + 0.25,
        a[1],
        r[0],
        o + 0.25,
        r[1],
      );
    }
  }
  let c = EL(AL.x1) - 3,
    l = DL(AL.z0) + 3;
  if ((CL(e, c, ML(c, l) + 0.2, l, 0.5), !e.coarse)) {
    let t = EL(AL.x0) + 3,
      n = DL(AL.z1) - 3;
    CL(e, t, ML(t, n) + 0.2, n, 0.4);
  }
  e.solid(EL(AL.x0), DL(AL.z0), EL(AL.x1), DL(AL.z1), a, jL);
}
function* Kte(e, t) {
  let n = t.A.sub(`lcMidGlass`, 0, 0, 0.5, 1);
  (e.col(16777215).mat(0.3, 0.1, 0.32, Y),
    vL(e, PL, 0, 5.2, t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1), 3.2, 5.2),
    e.col(16054523).mat(0.18, 0.5, 0.16, Y | 32),
    vL(e, PL, 5.2, FL, n, 6.4, 12.6),
    e.col(15659250).mat(0.5, 0.3, 0.05, 1));
  for (let t = 5.2; t < FL; t += e.coarse ? 8.4 : 4.2)
    xL(e, PL, 0.6, t - 0.18, t + 0.12);
  (xL(e, PL, 0.4, 25.8, 27.1),
    e.col(9344926).mat(0.85, 0, 0, 0),
    bL(e, PL, 27.1),
    e.coarse ||
      (e.col(5208642).mat(0.95, 0, 0, 0),
      e.box(EL(280.6), 27.1, DL(-157.8), EL(284.8), 27.6, DL(-155.8)),
      e.col(12112092).mat(0.1, 0.4, 0.05, 0),
      e.box(EL(280.2), 27.1, DL(-158.3), EL(287), 28.2, DL(-158.2))),
    yield,
    e.solid(EL(280), DL(-158.4), EL(286), DL(-156), 0, 27),
    e.solid(EL(280), DL(-156), EL(284.6), DL(-152.4), 0, 27),
    e.solid(EL(280), DL(-152.4), EL(282.4), DL(-148.8), 0, 27));
}
function* qte(e, t) {
  (yield* Wte(e, t), yield, yield* Kte(e, t), yield, yield* Gte(e, t));
}
function Jte(e, t) {
  let n = t.A.sub(`lcMidGlass`, 0, 0, 0.5, 1),
    r = gL(EL(AL.x0), DL(AL.z0), EL(AL.x1), DL(AL.z1), [2.5, 2.5, 4, 4], 1);
  (e.col(16777215).mat(0.2, 0.35, 0.008, Y | 32),
    vL(e, r, 0, NL, n, 25.6, 50.4),
    e.col(15265524).mat(0.35, 0.5, 0.04, 0),
    SL(
      e,
      r,
      NL,
      ML,
      t.A.sub(`lcMidGlass`, 0.5, 0, 1, 1),
      25.6,
      50.4,
      8,
      7107965,
    ),
    e.col(16054523).mat(0.18, 0.5, 0.16, Y),
    vL(e, PL, 0, FL, n, 12.8, 25.2),
    CL(e, EL(AL.x1) - 3, 279, DL(AL.z0) + 3, 0.7));
}
var Yte = {
    id: `midtown-nihonbashi`,
    site: (e) => ({
      x: TL.x,
      z: TL.z,
      gy: e.groundHeight(TL.x, TL.z),
      facing: 0,
    }),
    name: {
      ja: `東京ナカマチ日本橋`,
      zh: `東京中町日本橋`,
      en: `Tokyo Nakamachi Nihonbashi`,
    },
    near: 240,
    build: qte,
    far: Jte,
    bounds: () => [268, -159, 288, -126],
    farBoxes: (e, t) => [
      {
        x0: kL.x0,
        x1: kL.x1,
        z0: kL.z0,
        z1: kL.z1,
        y0: t.gy,
        y1: t.gy + kL.h,
        rgb: [0.36, 0.48, 0.6],
        lit: !0,
      },
      {
        x0: AL.x0,
        x1: AL.x1,
        z0: AL.z0,
        z1: AL.z1,
        y0: t.gy + kL.h,
        y1: t.gy + 255,
        rgb: [0.33, 0.47, 0.62],
        lit: !0,
      },
      {
        x0: 280,
        x1: 286,
        z0: -158.4,
        z1: -150,
        y0: t.gy,
        y1: t.gy + FL,
        rgb: [0.42, 0.52, 0.6],
        lit: !0,
      },
    ],
    anchors: [
      {
        key: `midtown-nihonbashi-entrance`,
        lx: EL(266.6),
        lz: DL(-141),
        turn: Math.PI / 2,
        name: {
          zh: `東京中町日本橋 中央通入口`,
          en: `Tokyo Nakamachi Nihonbashi, Chuo-dori entrance`,
        },
      },
      {
        key: `midtown-nihonbashi-riverside`,
        lx: EL(284),
        lz: DL(-160.5),
        turn: Math.PI,
        name: {
          zh: `東京中町日本橋 河畔露台`,
          en: `Tokyo Nakamachi Nihonbashi, riverside terrace`,
        },
      },
    ],
    blip: !0,
  },
  IL = { x: 49, z: -142 },
  LL = (e) => e - IL.x,
  RL = (e) => e - IL.z,
  zL = {
    x0: 46.6,
    x1: 62.4,
    z0: -156.8,
    z1: -127,
    pod: 32,
    top: 206,
    frame: 212,
  },
  Xte = { x0: 35.4, x1: 46, z0: -158.5, z1: -126 };
function BL(e, t) {
  return gL(
    LL(zL.x0 + e),
    RL(zL.z0 + e),
    LL(zL.x1 - e),
    RL(zL.z1 - e),
    [0.5, 0.5, 5 - e, 0.5],
    t ? 2 : 5,
  );
}
