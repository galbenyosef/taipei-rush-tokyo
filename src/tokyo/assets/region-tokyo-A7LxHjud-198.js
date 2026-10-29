// tokyo/assets/region-tokyo-A7LxHjud 198 — col
// Lines 78969-79256 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* eve(e, t) {
  let n = t.A.sub(`lcMidGlass`, 0, 0, 0.5, 1),
    { x0: r, x1: i, z0: a, z1: o, h: s } = $k,
    c = (e) => Xk(r) + 0.55 * (1 - Math.cos(((e - a) / (o - a)) * Math.PI * 4)),
    l = e.coarse ? 8 : 24,
    u = [];
  for (let e = 0; e <= l; e++) {
    let t = a + ((o - a) * e) / l;
    u.push([c(t), Zk(t)]);
  }
  let d = [[Xk(i), Zk(a)], ...u, [Xk(i), Zk(o)]];
  if (
    (e.col(16777215).mat(0.3, 0.1, 0.32, G),
    Vk(e, d, 0, 6, t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1), 3.2, 6),
    e.col(16777215).mat(0.18, 0.55, 0.16, G | 32),
    Vk(e, d, 6, s, n, 6.4, 12.6),
    yield,
    e.col(15133422).mat(0.5, 0.3, 0.05, 1),
    !e.coarse)
  )
    for (let t = 6; t < s - 1; t += 8.4) Wk(e, d, 0.35, t - 0.25, t + 0.1);
  if (
    (Wk(e, d, 0.5, s - 0.2, s + 0.9),
    e.col(10134442).mat(0.8, 0, 0, 0),
    Uk(e, d, s + 0.9),
    e.col(14212318).mat(0.45, 0.5, 0.1, 1),
    e.box(Xk(r) - 1.6, 6, Zk(a + 0.3), Xk(r) + 0.4, 6.35, Zk(o - 0.3)),
    !e.coarse)
  ) {
    e.col(16773848).mat(0.4, 0, 0.7, 1);
    for (let t = a + 2; t < o - 1; t += 3)
      e.flat(
        Xk(r) - 1.2,
        Zk(t) - 0.2,
        Xk(r) - 0.6,
        Zk(t) + 0.2,
        5.98,
        e.white,
        0,
        0,
        !1,
      );
  }
  yield;
  let f = (e, n, r, i) => qk(t, `lcSigns`, e, n, r, i, 320, 192);
  e.col(16777215).mat(0.4, 0.1, 0.35, G);
  let p = Xk(r) - 0.05;
  (e.panel(p, Zk(-143.2), p, Zk(-137.6), 6.6, 8.2, f(0, 64, 288, 48)),
    e.panel(p, Zk(-133.4), p, Zk(-126.9), 6.6, 8, f(0, 152, 288, 40)),
    e.panel(
      Xk(r) + 0.6,
      Zk(o) + 0.05,
      Xk(i) - 0.4,
      Zk(o) + 0.05,
      6.6,
      8,
      f(0, 152, 288, 40),
    ),
    e.col(16777215).mat(0.6, 0, 0.3, G),
    e.panel(
      p - 0.02,
      Zk(-130.7),
      p - 0.02,
      Zk(-129.4),
      9,
      18.5,
      f(288, 0, 32, 192),
    ),
    e.col(3159354).mat(0.2, 0.4, 0.25, G),
    e.coarse ||
      e.panel(
        p - 0.03,
        Zk(-143),
        p - 0.03,
        Zk(-139),
        0,
        4.2,
        t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1),
      ),
    e.solid(Xk(r), Zk(a), Xk(i), Zk(o), 0, s + 1));
}
function* tve(e, t) {
  let n = t.A.sub(`lcMidGlass`, 0, 0, 0.5, 1),
    r = t.A.sub(`lcMidGlass`, 0.5, 0, 1, 1),
    i = $_e(e.coarse),
    a = $k.h + 0.9,
    o = () => e.col(16777215).mat(0.2, 0.35, 0.008, G | 32),
    s = a;
  for (let [t, a] of Q_e)
    (o(),
      Vk(e, i, s, t, n, 6.4, 12.6),
      e.col(16777215).mat(0.5, 0.4, 0, 0),
      Vk(e, i, t, a, r, 6.4, 12.6),
      (s = a),
      yield);
  if (
    (o(),
    Vk(e, i, s, rA, n, 6.4, 12.6),
    yield,
    e.col(15265524).mat(0.35, 0.5, 0.04, 0),
    Gk(e, i, rA, nA, r, 6.4, 12.6, e.coarse ? 4 : 1.6, 7107965),
    !e.coarse)
  ) {
    e.col(1911350).mat(0.3, 0.5, 0, 0);
    let t = Xk(eA.x1 - 3.6);
    for (let [n, r] of [
      [Zk(eA.z0) - 0.06, -1],
      [Zk(eA.z1) + 0.06, 1],
    ]) {
      let i = nA(t, n);
      r < 0
        ? e.panel(t + 0.45, n, t - 0.45, n, a, i - 0.6)
        : e.panel(t - 0.45, n, t + 0.45, n, a, i - 0.6);
    }
    e.col(15922422).mat(0.3, 0.6, 0.14, 1);
    let n = i.length;
    for (let t = 0; t < n; t++) {
      let r = i[t],
        a = i[(t + 1) % n],
        o = nA(r[0], r[1]),
        s = nA(a[0], a[1]);
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
  let c = Xk(eA.x1) - 3,
    l = Zk(eA.z0) + 3;
  if ((Kk(e, c, nA(c, l) + 0.2, l, 0.5), !e.coarse)) {
    let t = Xk(eA.x0) + 3,
      n = Zk(eA.z1) - 3;
    Kk(e, t, nA(t, n) + 0.2, n, 0.4);
  }
  e.solid(Xk(eA.x0), Zk(eA.z0), Xk(eA.x1), Zk(eA.z1), a, tA);
}
function* nve(e, t) {
  let n = t.A.sub(`lcMidGlass`, 0, 0, 0.5, 1);
  (e.col(16777215).mat(0.3, 0.1, 0.32, G),
    Vk(e, iA, 0, 5.2, t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1), 3.2, 5.2),
    e.col(16054523).mat(0.18, 0.5, 0.16, G | 32),
    Vk(e, iA, 5.2, aA, n, 6.4, 12.6),
    e.col(15659250).mat(0.5, 0.3, 0.05, 1));
  for (let t = 5.2; t < aA; t += e.coarse ? 8.4 : 4.2)
    Wk(e, iA, 0.6, t - 0.18, t + 0.12);
  (Wk(e, iA, 0.4, 25.8, 27.1),
    e.col(9344926).mat(0.85, 0, 0, 0),
    Uk(e, iA, 27.1),
    e.coarse ||
      (e.col(5208642).mat(0.95, 0, 0, 0),
      e.box(Xk(280.6), 27.1, Zk(-157.8), Xk(284.8), 27.6, Zk(-155.8)),
      e.col(12112092).mat(0.1, 0.4, 0.05, 0),
      e.box(Xk(280.2), 27.1, Zk(-158.3), Xk(287), 28.2, Zk(-158.2))),
    yield,
    e.solid(Xk(280), Zk(-158.4), Xk(286), Zk(-156), 0, 27),
    e.solid(Xk(280), Zk(-156), Xk(284.6), Zk(-152.4), 0, 27),
    e.solid(Xk(280), Zk(-152.4), Xk(282.4), Zk(-148.8), 0, 27));
}
function* rve(e, t) {
  (yield* eve(e, t), yield, yield* nve(e, t), yield, yield* tve(e, t));
}
function ive(e, t) {
  let n = t.A.sub(`lcMidGlass`, 0, 0, 0.5, 1),
    r = zk(Xk(eA.x0), Zk(eA.z0), Xk(eA.x1), Zk(eA.z1), [2.5, 2.5, 4, 4], 1);
  (e.col(16777215).mat(0.2, 0.35, 0.008, G | 32),
    Vk(e, r, 0, rA, n, 25.6, 50.4),
    e.col(15265524).mat(0.35, 0.5, 0.04, 0),
    Gk(
      e,
      r,
      rA,
      nA,
      t.A.sub(`lcMidGlass`, 0.5, 0, 1, 1),
      25.6,
      50.4,
      8,
      7107965,
    ),
    e.col(16054523).mat(0.18, 0.5, 0.16, G),
    Vk(e, iA, 0, aA, n, 12.8, 25.2),
    Kk(e, Xk(eA.x1) - 3, 279, Zk(eA.z0) + 3, 0.7));
}
var ave = {
    id: `midtown-nihonbashi`,
    site: (e) => ({
      x: Yk.x,
      z: Yk.z,
      gy: e.groundHeight(Yk.x, Yk.z),
      facing: 0,
    }),
    name: {
      ja: `東京ナカマチ日本橋`,
      zh: `東京中町日本橋`,
      en: `Tokyo Nakamachi Nihonbashi`,
    },
    near: 240,
    build: rve,
    far: ive,
    bounds: () => [268, -159, 288, -126],
    farBoxes: (e, t) => [
      {
        x0: $k.x0,
        x1: $k.x1,
        z0: $k.z0,
        z1: $k.z1,
        y0: t.gy,
        y1: t.gy + $k.h,
        rgb: [0.36, 0.48, 0.6],
        lit: !0,
      },
      {
        x0: eA.x0,
        x1: eA.x1,
        z0: eA.z0,
        z1: eA.z1,
        y0: t.gy + $k.h,
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
        y1: t.gy + aA,
        rgb: [0.42, 0.52, 0.6],
        lit: !0,
      },
    ],
    anchors: [
      {
        key: `midtown-nihonbashi-entrance`,
        lx: Xk(266.6),
        lz: Zk(-141),
        turn: Math.PI / 2,
        name: {
          zh: `東京中町日本橋 中央通入口`,
          en: `Tokyo Nakamachi Nihonbashi, Chuo-dori entrance`,
        },
      },
      {
        key: `midtown-nihonbashi-riverside`,
        lx: Xk(284),
        lz: Zk(-160.5),
        turn: Math.PI,
        name: {
          zh: `東京中町日本橋 河畔露台`,
          en: `Tokyo Nakamachi Nihonbashi, riverside terrace`,
        },
      },
    ],
    blip: !0,
  },
  oA = { x: 49, z: -142 },
  sA = (e) => e - oA.x,
  cA = (e) => e - oA.z,
  lA = {
    x0: 46.6,
    x1: 62.4,
    z0: -156.8,
    z1: -127,
    pod: 32,
    top: 206,
    frame: 212,
  },
  ove = { x0: 35.4, x1: 46, z0: -158.5, z1: -126 };
function uA(e, t) {
  return zk(
    sA(lA.x0 + e),
    cA(lA.z0 + e),
    sA(lA.x1 - e),
    cA(lA.z1 - e),
    [0.5, 0.5, 5 - e, 0.5],
    t ? 2 : 5,
  );
}
