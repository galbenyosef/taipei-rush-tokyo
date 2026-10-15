// tokyo/assets/region-tokyo-55J_WESF 210 — col
// Lines 82435-82694 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* Xve(e, t) {
  let n = Cj(e, jj.x, jj.z);
  (e.col(14867922).mat(0.8, 0, 0.03, G),
    e.flat(
      zj.x0,
      zj.z0,
      zj.x1,
      zj.z1,
      Nj,
      t.c(`paving`),
      e.coarse ? 12 : 4,
      e.coarse ? 12 : 4,
    ),
    e.flat(
      Vj.x0,
      Vj.z0,
      Vj.x1,
      Vj.z1,
      Nj,
      t.c(`paving`),
      e.coarse ? 10 : 4,
      e.coarse ? 10 : 4,
    ),
    e.flat(
      zj.x1,
      zj.z0,
      -969,
      Yve,
      Nj,
      t.c(`paving`),
      e.coarse ? 12 : 4,
      e.coarse ? 12 : 4,
    ),
    Jve(e, t),
    yield,
    yield* Gve(e, t),
    yield,
    Rj(
      e,
      t,
      -1118,
      988,
      -1074,
      1058,
      [
        { y: 20, n: 0, s: 0, w: 0, e: 0 },
        { y: 27, n: 6, s: 5, w: 6, e: 0 },
        { y: 33, n: 13, s: 11, w: 13, e: 0 },
      ],
      null,
    ),
    yield,
    Rj(
      e,
      t,
      -1072,
      1072,
      -1030,
      1102,
      [
        { y: 14, n: 0, s: 0, w: 0, e: 0 },
        { y: 20, n: 0, s: 7, w: 5, e: 6 },
      ],
      13152862,
    ),
    Rj(
      e,
      t,
      -1118,
      963,
      -1082,
      985,
      [
        { y: 24, n: 0, s: 0, w: 0, e: 0 },
        { y: 30, n: 5, s: 0, w: 0, e: 6 },
      ],
      null,
    ),
    yield,
    Kve(e, t),
    qve(e, Bj.x, Bj.z, Math.PI * 0.18),
    yield);
  {
    let { x0: t, x1: n, z0: r, z1: i } = Vj,
      a = e.coarse ? 4 : 10,
      o = (e) => 9 + 4.5 * Math.sin(Math.PI * e);
    e.col(15790316).mat(0.7, 0, 0.18, 1);
    for (let s = 0; s < a; s++) {
      let c = s / a,
        l = (s + 1) / a,
        u = t + (n - t) * c,
        d = t + (n - t) * l;
      (e.quad(u, o(c), i - 2, d, o(l), i - 2, d, o(l), r + 6, u, o(c), r + 6),
        e.quad(
          u,
          o(c) - 0.05,
          r + 6,
          d,
          o(l) - 0.05,
          r + 6,
          d,
          o(l) - 0.05,
          i - 2,
          u,
          o(c) - 0.05,
          i - 2,
        ));
    }
    e.col(10134182).mat(0.4, 0.6, 0, 0);
    for (let s of [r + 6, i - 2]) {
      for (let r = 0; r < a; r++) {
        let i = r / a,
          c = (r + 1) / a;
        e.rod(
          t + (n - t) * i,
          o(i) - 0.3,
          s,
          t + (n - t) * c,
          o(c) - 0.3,
          s,
          0.22,
          5,
        );
      }
      for (let r of [t + 0.4, n - 0.4])
        (e.cylY(r, s, 0, 9, 0.3, 8), e.pole(r, s, 0.35, 0, 9));
    }
    (e.col(7040624).mat(0.7, 0.1, 0, 0),
      e.box(t + 2, Nj, i - 9, n - 2, 1.1, i - 1),
      e.floor(t + 2, i - 9, n - 2, i - 1, 1.1));
  }
  if (!e.coarse) {
    for (let [t, n] of [
      [-1072, 995],
      [-1050, 966],
      [-1022, 966],
      [-1018, 1010],
      [-1040, 1010],
    ])
      (WC(e, t, Nj, n, 4.6), e.pole(t, n, 0.12, 0, 4.6));
    let t = 31;
    for (let [n, r, i] of [
      [-1076, 1004, 8],
      [-1078, 970, 7.5],
      [-1020, 975, 8.5],
      [-1036, 968, 7.5],
      [-1060, 1008, 7],
      [-1004, 968, 8],
      [-998, 994, 8.5],
      [-984, 994, 8],
      [-972, 988, 7.5],
    ])
      (UC(e, n, r, i, t++), e.pole(n, r, 0.3, 0, 3));
    e.col(8021328).mat(0.8, 0, 0, 0);
    for (let [t, n] of [
      [-1046, 990],
      [-1046, 1002],
      [-1016, 990],
    ])
      (e.box(t - 1.2, 0.42, n - 0.3, t + 1.2, 0.5, n + 0.3),
        e.col(6974574).mat(0.5, 0.5, 0, 0),
        e.box(t - 1.1, Nj, n - 0.25, t + 1.1, 0.42, n + 0.25),
        e.col(8021328).mat(0.8, 0, 0, 0),
        e.solid(t - 1.2, n - 0.3, t + 1.2, n + 0.3, 0, 0.5, `prop`));
  }
  e.leave(n);
}
function Zve(e, t) {
  let n = Cj(e, jj.x, jj.z),
    r = Ij().filter(
      (e, t) => t % 8 == 0 || t % 8 == 2 || t % 8 == 4 || t % 8 == 6,
    );
  (e.col(14210770).mat(0.34, 0.3, 0.15, G | 32),
    zk(e, r, 0, Fj.shaft, t.c(`gtGlass`), 51.2, 50.4),
    e.col(15266036).mat(0.12, 0.35, 0.3, G),
    zk(e, r, Fj.shaft, Fj.crown, t.c(`glass`), 12, 18),
    e.col(15659764).mat(0.35, 0.6, 0.32, 1),
    zk(e, Rk(r, 0.6), Fj.crown, Fj.top, e.white, 60, 12),
    e.col(5922659).mat(0.85, 0, 0, 0),
    Vk(e, r, Fj.top - 1),
    Wk(e, r[3][0], Fj.top, r[3][1], 0.8),
    Wk(e, r[11][0], Fj.top, r[11][1], 0.8),
    e.col(14273718).mat(0.6, 0.1, 0.12, G | 32),
    Ej(e, -1118, 988, -1074, 1058, 0, 27, t.c(`office`), 28.8, 27, 10263186),
    Ej(e, -1072, 1072, -1030, 1102, 0, 18, t.c(`office`), 28.8, 18, 10263186),
    Ej(e, -1118, 963, -1082, 985, 0, 26, t.c(`office`), 28.8, 26, 10263186),
    e.leave(n));
}
var Qve = {
    id: `roppongi-hills`,
    site: Mj,
    name: { ja: `六本木ヒルズ`, zh: `六本木新城`, en: `Roppongi Hills` },
    near: 260,
    build: Xve,
    far: Zve,
    bounds: () => [-1118, 962, -1008, 1102],
    farBoxes: (e, t) => [
      {
        x0: Pj.x - 25.5,
        x1: Pj.x + 25.5,
        z0: Pj.z - 25.5,
        z1: Pj.z + 25.5,
        y0: t.gy,
        y1: t.gy + Fj.top,
        rgb: [0.3, 0.34, 0.37],
        lit: !0,
      },
      {
        x0: -1118,
        x1: -1074,
        z0: 988,
        z1: 1058,
        y0: t.gy,
        y1: t.gy + 27,
        rgb: [0.55, 0.5, 0.44],
        lit: !0,
      },
      {
        x0: -1072,
        x1: -1030,
        z0: 1072,
        z1: 1102,
        y0: t.gy,
        y1: t.gy + 18,
        rgb: [0.55, 0.5, 0.44],
        lit: !0,
      },
    ],
    anchors: [
      {
        key: `roppongi-hills-66-plaza`,
        lx: -1012 - jj.x,
        lz: 982 - jj.z,
        turn: Math.PI * 0.7,
        name: {
          zh: `六本木新城 66廣場（媽媽蜘蛛）`,
          en: `Roppongi Hills 66 Plaza (Maman)`,
        },
      },
      {
        key: `roppongi-hills-metro-hat`,
        lx: -1063 - jj.x,
        lz: 966 - jj.z,
        turn: Math.PI,
        name: { zh: `六本木新城 Metro Hat`, en: `Roppongi Hills Metro Hat` },
      },
    ],
    roofs: [
      {
        lx0: Vj.x0 - jj.x,
        lz0: Vj.z0 + 6 - jj.z,
        lx1: Vj.x1 - jj.x,
        lz1: Vj.z1 - 2 - jj.z,
        y: 9,
      },
    ],
    blip: !0,
  },
  Hj = { x0: -1006, x1: -970, z0: 1046, z1: 1100, h: 44, atrium: 1061 },
  $ve = { x0: -1014, x1: -971, z0: 1003, z1: 1043 };
