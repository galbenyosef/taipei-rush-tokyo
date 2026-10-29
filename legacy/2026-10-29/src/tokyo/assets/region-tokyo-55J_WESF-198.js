// tokyo/assets/region-tokyo-55J_WESF 198 — col
// Lines 78878-79165 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* V_e(e, t) {
  let n = t.A.sub(`lcMidGlass`, 0, 0, 0.5, 1),
    { x0: r, x1: i, z0: a, z1: o, h: s } = Zk,
    c = (e) => Jk(r) + 0.55 * (1 - Math.cos(((e - a) / (o - a)) * Math.PI * 4)),
    l = e.coarse ? 8 : 24,
    u = [];
  for (let e = 0; e <= l; e++) {
    let t = a + ((o - a) * e) / l;
    u.push([c(t), Yk(t)]);
  }
  let d = [[Jk(i), Yk(a)], ...u, [Jk(i), Yk(o)]];
  if (
    (e.col(16777215).mat(0.3, 0.1, 0.32, G),
    zk(e, d, 0, 6, t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1), 3.2, 6),
    e.col(16777215).mat(0.18, 0.55, 0.16, G | 32),
    zk(e, d, 6, s, n, 6.4, 12.6),
    yield,
    e.col(15133422).mat(0.5, 0.3, 0.05, 1),
    !e.coarse)
  )
    for (let t = 6; t < s - 1; t += 8.4) Hk(e, d, 0.35, t - 0.25, t + 0.1);
  if (
    (Hk(e, d, 0.5, s - 0.2, s + 0.9),
    e.col(10134442).mat(0.8, 0, 0, 0),
    Vk(e, d, s + 0.9),
    e.col(14212318).mat(0.45, 0.5, 0.1, 1),
    e.box(Jk(r) - 1.6, 6, Yk(a + 0.3), Jk(r) + 0.4, 6.35, Yk(o - 0.3)),
    !e.coarse)
  ) {
    e.col(16773848).mat(0.4, 0, 0.7, 1);
    for (let t = a + 2; t < o - 1; t += 3)
      e.flat(
        Jk(r) - 1.2,
        Yk(t) - 0.2,
        Jk(r) - 0.6,
        Yk(t) + 0.2,
        5.98,
        e.white,
        0,
        0,
        !1,
      );
  }
  yield;
  let f = (e, n, r, i) => Gk(t, `lcSigns`, e, n, r, i, 320, 192);
  e.col(16777215).mat(0.4, 0.1, 0.35, G);
  let p = Jk(r) - 0.05;
  (e.panel(p, Yk(-143.2), p, Yk(-137.6), 6.6, 8.2, f(0, 64, 288, 48)),
    e.panel(p, Yk(-133.4), p, Yk(-126.9), 6.6, 8, f(0, 152, 288, 40)),
    e.panel(
      Jk(r) + 0.6,
      Yk(o) + 0.05,
      Jk(i) - 0.4,
      Yk(o) + 0.05,
      6.6,
      8,
      f(0, 152, 288, 40),
    ),
    e.col(16777215).mat(0.6, 0, 0.3, G),
    e.panel(
      p - 0.02,
      Yk(-130.7),
      p - 0.02,
      Yk(-129.4),
      9,
      18.5,
      f(288, 0, 32, 192),
    ),
    e.col(3159354).mat(0.2, 0.4, 0.25, G),
    e.coarse ||
      e.panel(
        p - 0.03,
        Yk(-143),
        p - 0.03,
        Yk(-139),
        0,
        4.2,
        t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1),
      ),
    e.solid(Jk(r), Yk(a), Jk(i), Yk(o), 0, s + 1));
}
function* H_e(e, t) {
  let n = t.A.sub(`lcMidGlass`, 0, 0, 0.5, 1),
    r = t.A.sub(`lcMidGlass`, 0.5, 0, 1, 1),
    i = B_e(e.coarse),
    a = Zk.h + 0.9,
    o = () => e.col(16777215).mat(0.2, 0.35, 0.008, G | 32),
    s = a;
  for (let [t, a] of z_e)
    (o(),
      zk(e, i, s, t, n, 6.4, 12.6),
      e.col(16777215).mat(0.5, 0.4, 0, 0),
      zk(e, i, t, a, r, 6.4, 12.6),
      (s = a),
      yield);
  if (
    (o(),
    zk(e, i, s, tA, n, 6.4, 12.6),
    yield,
    e.col(15265524).mat(0.35, 0.5, 0.04, 0),
    Uk(e, i, tA, eA, r, 6.4, 12.6, e.coarse ? 4 : 1.6, 7107965),
    !e.coarse)
  ) {
    e.col(1911350).mat(0.3, 0.5, 0, 0);
    let t = Jk(Qk.x1 - 3.6);
    for (let [n, r] of [
      [Yk(Qk.z0) - 0.06, -1],
      [Yk(Qk.z1) + 0.06, 1],
    ]) {
      let i = eA(t, n);
      r < 0
        ? e.panel(t + 0.45, n, t - 0.45, n, a, i - 0.6)
        : e.panel(t - 0.45, n, t + 0.45, n, a, i - 0.6);
    }
    e.col(15922422).mat(0.3, 0.6, 0.14, 1);
    let n = i.length;
    for (let t = 0; t < n; t++) {
      let r = i[t],
        a = i[(t + 1) % n],
        o = eA(r[0], r[1]),
        s = eA(a[0], a[1]);
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
  let c = Jk(Qk.x1) - 3,
    l = Yk(Qk.z0) + 3;
  if ((Wk(e, c, eA(c, l) + 0.2, l, 0.5), !e.coarse)) {
    let t = Jk(Qk.x0) + 3,
      n = Yk(Qk.z1) - 3;
    Wk(e, t, eA(t, n) + 0.2, n, 0.4);
  }
  e.solid(Jk(Qk.x0), Yk(Qk.z0), Jk(Qk.x1), Yk(Qk.z1), a, $k);
}
function* U_e(e, t) {
  let n = t.A.sub(`lcMidGlass`, 0, 0, 0.5, 1);
  (e.col(16777215).mat(0.3, 0.1, 0.32, G),
    zk(e, nA, 0, 5.2, t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1), 3.2, 5.2),
    e.col(16054523).mat(0.18, 0.5, 0.16, G | 32),
    zk(e, nA, 5.2, rA, n, 6.4, 12.6),
    e.col(15659250).mat(0.5, 0.3, 0.05, 1));
  for (let t = 5.2; t < rA; t += e.coarse ? 8.4 : 4.2)
    Hk(e, nA, 0.6, t - 0.18, t + 0.12);
  (Hk(e, nA, 0.4, 25.8, 27.1),
    e.col(9344926).mat(0.85, 0, 0, 0),
    Vk(e, nA, 27.1),
    e.coarse ||
      (e.col(5208642).mat(0.95, 0, 0, 0),
      e.box(Jk(280.6), 27.1, Yk(-157.8), Jk(284.8), 27.6, Yk(-155.8)),
      e.col(12112092).mat(0.1, 0.4, 0.05, 0),
      e.box(Jk(280.2), 27.1, Yk(-158.3), Jk(287), 28.2, Yk(-158.2))),
    yield,
    e.solid(Jk(280), Yk(-158.4), Jk(286), Yk(-156), 0, 27),
    e.solid(Jk(280), Yk(-156), Jk(284.6), Yk(-152.4), 0, 27),
    e.solid(Jk(280), Yk(-152.4), Jk(282.4), Yk(-148.8), 0, 27));
}
function* W_e(e, t) {
  (yield* V_e(e, t), yield, yield* U_e(e, t), yield, yield* H_e(e, t));
}
function G_e(e, t) {
  let n = t.A.sub(`lcMidGlass`, 0, 0, 0.5, 1),
    r = Lk(Jk(Qk.x0), Yk(Qk.z0), Jk(Qk.x1), Yk(Qk.z1), [2.5, 2.5, 4, 4], 1);
  (e.col(16777215).mat(0.2, 0.35, 0.008, G | 32),
    zk(e, r, 0, tA, n, 25.6, 50.4),
    e.col(15265524).mat(0.35, 0.5, 0.04, 0),
    Uk(
      e,
      r,
      tA,
      eA,
      t.A.sub(`lcMidGlass`, 0.5, 0, 1, 1),
      25.6,
      50.4,
      8,
      7107965,
    ),
    e.col(16054523).mat(0.18, 0.5, 0.16, G),
    zk(e, nA, 0, rA, n, 12.8, 25.2),
    Wk(e, Jk(Qk.x1) - 3, 279, Yk(Qk.z0) + 3, 0.7));
}
var K_e = {
    id: `midtown-nihonbashi`,
    site: (e) => ({
      x: qk.x,
      z: qk.z,
      gy: e.groundHeight(qk.x, qk.z),
      facing: 0,
    }),
    name: {
      ja: `東京ナカマチ日本橋`,
      zh: `東京中町日本橋`,
      en: `Tokyo Nakamachi Nihonbashi`,
    },
    near: 240,
    build: W_e,
    far: G_e,
    bounds: () => [268, -159, 288, -126],
    farBoxes: (e, t) => [
      {
        x0: Zk.x0,
        x1: Zk.x1,
        z0: Zk.z0,
        z1: Zk.z1,
        y0: t.gy,
        y1: t.gy + Zk.h,
        rgb: [0.36, 0.48, 0.6],
        lit: !0,
      },
      {
        x0: Qk.x0,
        x1: Qk.x1,
        z0: Qk.z0,
        z1: Qk.z1,
        y0: t.gy + Zk.h,
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
        y1: t.gy + rA,
        rgb: [0.42, 0.52, 0.6],
        lit: !0,
      },
    ],
    anchors: [
      {
        key: `midtown-nihonbashi-entrance`,
        lx: Jk(266.6),
        lz: Yk(-141),
        turn: Math.PI / 2,
        name: {
          zh: `東京中町日本橋 中央通入口`,
          en: `Tokyo Nakamachi Nihonbashi, Chuo-dori entrance`,
        },
      },
      {
        key: `midtown-nihonbashi-riverside`,
        lx: Jk(284),
        lz: Yk(-160.5),
        turn: Math.PI,
        name: {
          zh: `東京中町日本橋 河畔露台`,
          en: `Tokyo Nakamachi Nihonbashi, riverside terrace`,
        },
      },
    ],
    blip: !0,
  },
  iA = { x: 49, z: -142 },
  aA = (e) => e - iA.x,
  oA = (e) => e - iA.z,
  sA = {
    x0: 46.6,
    x1: 62.4,
    z0: -156.8,
    z1: -127,
    pod: 32,
    top: 206,
    frame: 212,
  },
  q_e = { x0: 35.4, x1: 46, z0: -158.5, z1: -126 };
function cA(e, t) {
  return Lk(
    aA(sA.x0 + e),
    oA(sA.z0 + e),
    aA(sA.x1 - e),
    oA(sA.z1 - e),
    [0.5, 0.5, 5 - e, 0.5],
    t ? 2 : 5,
  );
}
