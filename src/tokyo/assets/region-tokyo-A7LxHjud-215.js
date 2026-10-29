// tokyo/assets/region-tokyo-A7LxHjud 215 — col
// Lines 84085-84339 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var _M = (e, t, n, r) => [
    [e, t],
    [n, t],
    [n, r],
    [e, r],
  ],
  vM = (e, t, n, r, i) => [
    [e - i / 2, t],
    [e + i / 2, t],
    [n + i / 2, r],
    [n - i / 2, r],
  ],
  yM = {
    ...sM,
    P: [_M(0, 0, 1, 6), _M(1, 5, 4, 6), _M(1, 2.5, 4, 3.5), _M(3, 3.5, 4, 5)],
    A: [_M(0, 0, 1, 6), _M(3, 0, 4, 6), _M(1, 5, 3, 6), _M(1, 2.4, 3, 3.4)],
    R: [
      _M(0, 0, 1, 6),
      _M(1, 5, 4, 6),
      _M(1, 2.5, 4, 3.5),
      _M(3, 3.5, 4, 5),
      vM(2.7, 2.5, 3.5, 0, 1.1),
    ],
    G: [
      _M(0, 0, 1, 6),
      _M(1, 5, 4, 6),
      _M(1, 0, 4, 1),
      _M(3, 1, 4, 3.4),
      _M(2, 2.4, 3, 3.4),
    ],
    H: [_M(0, 0, 1, 6), _M(3, 0, 4, 6), _M(1, 2.5, 3, 3.5)],
    I: [_M(1.5, 0, 2.5, 6)],
    S: [
      _M(0, 5, 4, 6),
      _M(0, 3, 1, 6),
      _M(0, 2.5, 4, 3.5),
      _M(3, 0, 4, 3),
      _M(0, 0, 4, 1),
    ],
    C: [_M(0, 0, 1, 6), _M(1, 5, 4, 6), _M(1, 0, 4, 1)],
    B: [
      _M(0, 0, 1, 6),
      _M(1, 5, 3.2, 6),
      _M(1, 2.6, 3.2, 3.4),
      _M(1, 0, 3.2, 1),
      _M(3, 3.4, 4, 5.4),
      _M(3, 0.6, 4, 2.6),
    ],
    N: [_M(0, 0, 1, 6), _M(3, 0, 4, 6), vM(1.5, 6, 2.5, 0, 1.1)],
    U: [_M(0, 0, 1, 6), _M(3, 0, 4, 6), _M(1, 0, 3, 1)],
    W: [
      _M(0, 0, 1, 6),
      _M(3, 0, 4, 6),
      [
        [1, 1.6],
        [2, 3.6],
        [2, 2],
        [1, 0],
      ],
      [
        [3, 1.6],
        [3, 0],
        [2, 2],
        [2, 3.6],
      ],
    ],
  };
function bM(e, t, n, r, i, a) {
  let o = i / 6,
    s = 5.2,
    c = n + ((t.length * s - 1.2) * o) / 2,
    l = -a;
  for (let n of t) {
    for (let t of yM[n] ?? []) {
      let n = t.map(([e, t]) => [c - e * o, r + t * o]),
        i = (e) => [n[e][0], n[e][1], l],
        a = (e) => [n[e][0], n[e][1], 0];
      rM(e, i(0), i(1), i(2), i(3), [0, 0, -1]);
      let s = (n[0][0] + n[1][0] + n[2][0] + n[3][0]) / 4,
        u = (n[0][1] + n[1][1] + n[2][1] + n[3][1]) / 4;
      for (let t = 0; t < 4; t++) {
        let r = (t + 1) % 4;
        rM(e, i(t), i(r), a(r), a(t), [
          (n[t][0] + n[r][0]) / 2 - s,
          (n[t][1] + n[r][1]) / 2 - u,
          0,
        ]);
      }
    }
    c -= s * o;
  }
}
var xM = { x: -1646, z: 1377 },
  SM = [
    [0, 9, -2, 0, 40, 19.5, 6],
    [9, 24, 0, -0.6, 42, 20.6, 8],
    [24, 38, -3, 0.6, 43.5, 21.1, 9],
    [38, 52, 1, -0.8, 41, 20.2, 8],
    [52, 66, -2, 0.3, 44, 21.4, 10],
    [66, 78, 2, 0, 40, 19.6, 7],
  ],
  CM = 182.5,
  wM = 179,
  TM = (e, t) => mM(4 + (e % 2 ? 1 : -1), e % 2 ? -0.5 : 0.5, 29, 15, 5, t),
  EM = 101 / 6;
function* Iye(e, t) {
  let n = e.coarse ? 2 : 4,
    r = t.c(`gtGlass`),
    i = t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1);
  for (let t = 0; t < SM.length; t++) {
    let [a, o, s, c, l, u, d] = SM[t],
      f = mM(s, c, l, u, d, n);
    if (t === 0)
      (e.col(16777215).mat(0.3, 0.35, 0.3, G), Vk(e, f, 0, o, i, 3.2, 9));
    else {
      let n = Bk(f, 0.45);
      (e.col(15987955).mat(0.45, 0.4, 0.4, 1),
        Vk(e, n, a, a + 1.4, e.white, 60, 1.4),
        HA(e, f, n, a + 1.4),
        Uk(e, n, a, !1),
        t === 4
          ? e.col(15660022).mat(0.25, 0.3, 0.16, G)
          : e.col(15922679).mat(0.25, 0.3, 0.09, G | 32),
        Vk(e, f, a + 1.4, o, r, e.coarse ? 25.6 : 12.8, e.coarse ? 25.2 : 12.6),
        t === 4 &&
          (e.col(15790834).mat(0.4, 0.45, 0.1, 1),
          kj(e, f, a + 1.4, o, e.coarse ? 4.8 : 2.4, 0.5, 0.28)));
    }
    (e.col(12040372).mat(0.85, 0, 0, 0), Uk(e, f, o - 0.05), t % 2 && (yield));
  }
  (e.solid(-42, -19.5, 38, 19.5, 0, 78), e.solid(-46, -21.4, 42, 21.7, 9, 78));
}
function* Lye(e, t) {
  let n = e.coarse ? 2 : 4,
    r = t.c(`gtGlass`),
    i = t.A.sub(`lcMidGlass`, 0.5, 0, 1, 1);
  for (let t = 0; t < 6; t++) {
    let i = 78 + t * EM,
      a = i + EM,
      o = TM(t, n),
      s = Bk(o, 0.35);
    (e.col(15987955).mat(0.45, 0.4, 0.4, 1),
      Vk(e, s, i, i + 1.1, e.white, 60, 1.1),
      HA(e, o, s, i + 1.1),
      t > 0 && Uk(e, s, i, !1),
      e.col(15922679).mat(0.22, 0.32, 0.09, G | 32),
      Vk(e, o, i + 1.1, a, r, e.coarse ? 25.6 : 12.8, e.coarse ? 25.2 : 12.6),
      t < 5 && (e.col(12040372).mat(0.85, 0, 0, 0), Uk(e, o, a - 0.05)));
  }
  yield;
  let a = TM(5, n);
  (e.col(15659248).mat(0.45, 0.45, 0.3, 1), Vk(e, a, wM, CM, i, 6.4, 3.5));
  let o = Bk(a, -0.4);
  (Vk(e, IA(o), wM, CM, e.white, 60, 4),
    HA(e, o, a, CM),
    e.col(8357e3).mat(0.85, 0, 0, 0),
    Uk(e, o, wM),
    e.coarse ||
      (e.col(10133154).mat(0.8, 0.2, 0, 0),
      e.box(-14, wM, -8, -2, 182, 7),
      e.box(10, wM, -6, 22, 182, 8)));
  let s = e.sub(
    a.reduce((e, t) => Math.min(e, t[0]), 1 / 0) - 0.02,
    0,
    -0.5,
    -Math.PI / 2,
  );
  (e.col(16777215).mat(0.4, 0.2, 0.85, 1),
    bM(e, `HIKARIO`, 0, 173.2, 3.2, 0.35),
    e.leave(s));
  let c = Bk(a, 0.2),
    l = Math.floor(c.length / 4);
  for (let t = 0; t < 4; t++)
    Kk(
      e,
      c[t * l + Math.floor(l / 2)][0],
      CM,
      c[t * l + Math.floor(l / 2)][1],
      0.5,
    );
  e.solid(-26, -15.5, 34, 15.5, 78, CM);
}
function* Rye(e, t) {
  (yield* Iye(e, t), yield* Lye(e, t));
}
function zye(e, t) {
  let n = t.c(`gtGlass`);
  (e.col(15922679).mat(0.25, 0.3, 0.09, G | 32),
    e.box(-44, 0, -21, 42, 78, 21, n),
    e.box(-25, 78, -15, 33, CM, 15, n));
}
var Bye = {
    id: `shibuya-hikarie`,
    site: (e) => {
      let t = 1 / 0;
      for (let n = 0; n <= 16; n++)
        for (let r of [xM.z - 21, xM.z + 21])
          t = Math.min(t, e.groundHeight(xM.x - 45 + (86 * n) / 16, r));
      return { x: xM.x, z: xM.z, gy: t, facing: 0 };
    },
    name: { ja: `渋谷ヒカリオ`, zh: `澀谷 Hikario`, en: `Shibuya Hikario` },
    near: 250,
    build: Rye,
    far: zye,
    bounds: () => [-1692, 1355, -1600, 1399],
    farBoxes: (e, t) => [
      {
        x0: xM.x - 46,
        x1: xM.x + 42,
        z0: xM.z - 21.5,
        z1: xM.z + 21.7,
        y0: t.gy,
        y1: t.gy + 78,
        rgb: [0.5, 0.56, 0.6],
        lit: !0,
      },
      {
        x0: xM.x - 26,
        x1: xM.x + 34,
        z0: xM.z - 15.5,
        z1: xM.z + 15.5,
        y0: t.gy + 78,
        y1: t.gy + CM,
        rgb: [0.48, 0.55, 0.6],
        lit: !0,
      },
    ],
    anchors: [
      {
        key: `shibuya-hikario-west`,
        lx: -50,
        lz: 0,
        turn: -Math.PI / 2,
        name: {
          zh: `澀谷 Hikario 明治通側`,
          en: `Shibuya Hikario, Meiji-dori side`,
        },
      },
    ],
    blip: !0,
  },
  DM = { x: -1736, z: 1233.5 },
  OM = 17.5,
  kM = { z0: -83, z1: -60, top: 75.1 },
  AM = { x0: -17.5, x1: 17.5, z0: kM.z1, z1: 40 },
  jM = { x0: -17.5, x1: 8.5, z0: 40, z1: 71 },
  Vye = { x0: 9.6, x1: 16.4, z0: 40, z1: 71 },
  MM = [
    [-17.5, kM.z1],
    [-17.5, 71],
    [8.5, 71],
    [8.5, 40],
    [17.5, 40],
    [17.5, kM.z1],
  ];
