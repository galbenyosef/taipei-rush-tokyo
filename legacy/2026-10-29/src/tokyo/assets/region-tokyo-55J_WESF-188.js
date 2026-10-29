// tokyo/assets/region-tokyo-55J_WESF 188 — col
// Lines 75443-75790 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function zge(e, t, n) {
  let r = -23.5,
    i = -16.4,
    a = -11.4,
    o = -3.2;
  (e.col(zD).mat(0.6, 0, 0.15, 1),
    e.box(r, 0, a, i, 7.2, o),
    e.col(16777215).mat(0.6, 0, 0.6, G),
    e.wall(-16.38, -3.6, -16.38, -11, 0.9, 3.1, t.c(`shoji`), 1.9, 2.2),
    e.wall(
      -16.38,
      -3.8000000000000003,
      -16.38,
      -10.8,
      4.4,
      6.2,
      t.c(`shoji`),
      1.6,
      1.8,
    ),
    e
      .col(zD)
      .box(
        -15.649999999999999,
        4.55,
        -11.200000000000001,
        -15.499999999999998,
        4.7,
        -3.4000000000000004,
      ));
  let s = {
    cell: t.c(`kawara`),
    color: 4935509,
    band: 3816770,
    soffit: zD,
    ridgeColor: 3093046,
    tile: 2,
  };
  if (
    (e.mat(0.85, 0.05, 0, 0),
    iC(
      e,
      -16.2,
      -14.600000000000001 / 2,
      3.6,
      8.2 / 2 + 0.6,
      1.2,
      {
        ...s,
        rise: 0.6,
        R: 8.2 / 2 + 0.6,
        ridgeH: 0,
        eave: 0.9,
        sori: 0.1,
        rows: 2,
      },
      Math.PI / 2,
    ),
    oC(
      e,
      -39.9 / 2,
      -14.600000000000001 / 2,
      7.2,
      8.2 / 2 + 1.1,
      4.65,
      {
        ...s,
        rise: 3.4,
        curve: 1.3,
        sori: 0.45,
        eave: 1.1,
        ridgeH: 0.6,
        tg: 0.45,
        gableColor: zD,
        rows: 4,
      },
      Math.PI / 2,
    ),
    !e.coarse)
  )
    for (let n = -9.2; n < -4.2; n += 3.8)
      GC(e, -15.499999999999998, 3.5, n, 0.6, t.c(`lantern`));
  e.solid(r, a, i, o, 0, 9);
  let c = -2.4,
    l = 5.2,
    u = -23.5,
    d = -16.9;
  (e.col(zD).mat(0.6, 0, 0.15, 1),
    e.box(u, 0, c, d, 1.4, l),
    e.col(15262422).mat(0.8, 0, 0.2, 1),
    e.box(u, 1.4, c, -23.1, 5.2, l),
    e.coarse ||
      (e.col(16777215).mat(0.6, 0, 0.3, G),
      e.panel(-23.08, 4.8, -23.08, -2, 1.8, 4.6, n.dragon)),
    e.col(zD).mat(0.55, 0, 0.18, 1));
  for (let t of [-2.1999999999999997, 2.8000000000000003 / 2, 5])
    e.cylY(-17.15, t, 1.4, 5.4, 0.2, 8);
  if (
    (e.box(u, 5.2, c, d, 5.8, l),
    e
      .col(zD)
      .box(-17.2, 2.15, -2.1999999999999997, -17.049999999999997, 2.3, 5),
    qD(e),
    oC(e, -19.8, 2.8000000000000003 / 2, 5.8, 4.700000000000001, 4.8, {
      ...KD(t, zD),
      rise: 3.2,
      curve: 1.3,
      sori: 0.4,
      eave: 1,
      ridgeH: 0.5,
      tg: 0.4,
      xg: 6.600000000000001 / 2 - 0.2,
      gableColor: zD,
      rows: 4,
    }),
    !e.coarse)
  )
    for (let n = -0.7999999999999998; n < 4.2; n += 4.4)
      GC(e, -17.299999999999997, 5.15, n, 0.55, t.c(`lantern`));
  e.solid(u, c, d, l, 0, 8);
}
function Bge(e, t) {
  let n = 16.6,
    r = jD,
    i = PD,
    a = 2.6;
  if (
    (e.col(14275784).mat(0.7, 0, 0.12, G),
    e.box(n, 0, i, r, 17, a, t.c(`granite`), 4.8, 5.6),
    e.col(16777215).mat(0.25, 0.3, 0.5, G),
    e.wall(16.57, 2, 16.57, -9.1, 0.3, 15.6, t.c(`glass`), 3, 3.4),
    !e.coarse)
  ) {
    e.col(zD).mat(0.6, 0, 0.12, 1);
    for (let t = -9.1; t <= 2.1; t += 1.6)
      e.box(16.25, 0.3, t - 0.08, n, 15.6, t + 0.08);
  }
  (e.col(10131604).mat(0.85, 0, 0, 0).flat(n, i, r, a, 17),
    e.solid(n, i, r, a, 0, 17));
}
function* Vge(e, t, n) {
  if (
    (e.col(14736853).mat(0.85, 0, 0.02, 1),
    e.flat(-23.5, -4.8, jD, jD, 0.04, t.c(`paving`), 4, 4),
    !e.coarse)
  ) {
    (e
      .col(13223356)
      .flat(-2.4, -3.5999999999999996, 2.4, 8.2, 0.05, t.c(`paving`), 2, 2),
      eO(e, 11.4, 8.4, 0),
      eO(e, -11.4, 8.4, 0));
    for (let t of [-1, 1]) {
      let n = t * 9.6;
      (e
        .col(HD)
        .mat(0.9, 0, 0, 0)
        .box(n - 0.75, 0, 8.55, n + 0.75, 0.45, 10.05),
        e
          .col(1841689)
          .mat(0.5, 0.5, 0, 0)
          .lathe(n, 9.3, [0.5, 0.45, 0.62, 1.45, 0.66, 1.55], 10),
        e
          .col(BD)
          .mat(0.3, 0.85, 0.1, 1)
          .box(n - 0.18, 0.85, 8.680000000000001, n + 0.18, 1.2, 8.8),
        e.solid(n - 0.8, 8.600000000000001, n + 0.8, 10, 0, 1.55));
    }
    (QD(e, 8.6, -2.4, 1.15),
      QD(e, -8.6, -2.4, 1.15),
      QD(e, 15, 9.6, 1),
      QD(e, -15.6, 13.2, 1),
      rO(e, n, -13, 5.2),
      rO(e, n, 13.8, 6.4, 2.2),
      Lge(e, 14.6, -3.4));
  }
  (Ige(e, 12, -0.4),
    Fge(e, -17.4, 9.6),
    Rge(e, t, -20.6, 15.8),
    yield,
    iO(e, t, 20.6, 6.6, !0),
    iO(e, t, 20.6, 12.2, !1),
    iO(e, t, 20.6, 17.8, !0),
    e.col(12894132).mat(0.9, 0, 0, 0));
  let r = (n, r, i, a) => {
    (e.box(
      Math.min(n, i) - 0.15,
      0,
      Math.min(r, a) - 0.15,
      Math.max(n, i) + 0.15,
      1.5,
      Math.max(r, a) + 0.15,
      t.c(`granite`),
      3,
      1.5,
    ),
      e.solid(
        Math.min(n, i) - 0.15,
        Math.min(r, a) - 0.15,
        Math.max(n, i) + 0.15,
        Math.max(r, a) + 0.15,
        0,
        1.5,
      ));
  };
  (r(-23.5, 23.3, 14.2, 23.3),
    r(17.4, 23.3, jD, 23.3),
    r(-23.3, 6, -23.3, jD),
    r(23.3, 3, 23.3, jD),
    e.coarse ||
      (UC(e, -21.6, 21.4, 13, 11),
      UC(e, -14, 21.6, 11, 12),
      UC(e, 21.4, 21.6, 12, 13),
      UC(e, -22, 7.4, 9, 14)));
}
function* Hge(e, t) {
  let n = Tge(t);
  ((tO = t.c(`granite`)),
    kge(e, t, n),
    yield,
    Dge(e, n),
    yield,
    yield* Mge(e, t, n),
    yield,
    Nge(e, t),
    zge(e, t, n),
    Bge(e, t),
    yield,
    yield* Pge(e, t, n),
    yield,
    yield* Vge(e, t, n));
}
function Uge(e, t) {
  (e.col(RD).mat(0.6, 0, 0.3, 1),
    e.box(-6, 0, -9.1, 6, 10.9, -4.5),
    e.box(-12, 0, LD, 12, 9.2, 22.9),
    e.col(16777215).mat(0.6, 0.25, 0, 0),
    e.extrudeX(
      [-1.2999999999999998, 10.9, -12.3, 10.9, FD, 15.6],
      -8.7,
      8.7,
      !0,
      !0,
      GD(t, `myojinShop`, 0, 96, 256, 128),
    ),
    e.extrudeX(
      [22.799999999999997, 9.2, 9, 9.2, 31.799999999999997 / 2, 19.8],
      -15.2,
      15.2,
      !0,
      !0,
      GD(t, `myojinShop`, 0, 96, 256, 128),
    ),
    e.col(UD).mat(0.6, 0.3, 0, 0),
    e.box(-3.7, 0, -21.799999999999997, -2.7, 8.2, -21),
    e.box(2.7, 0, -21.799999999999997, 3.7, 8.2, -21),
    e.box(-5.6, 7.6, -21.75, 5.6, 8.9, -21.049999999999997),
    e.col(14011579).mat(0.85, 0, 0.4, G | 32),
    e.box(MD, 0, ND, jD, 15, PD, t.c(`office`), 6, 6),
    e.box(-23.5, 0, ND, -4.6, 18, PD, t.c(`office`), 6, 6));
}
function Wge(e, t) {
  let n = (e, n, r, i, a, o, s = !1) => ({
    x0: t.x - r,
    x1: t.x - e,
    z0: t.z - i,
    z1: t.z - n,
    y0: t.gy,
    y1: t.gy + a,
    rgb: o,
    lit: s,
  });
  return [
    n(-12, LD, 12, 22.9, 19, [0.5, 0.16, 0.1]),
    n(-6, -9.1, 6, -4.5, 13, [0.62, 0.2, 0.1]),
    n(MD, ND, jD, PD, 15, [0.62, 0.6, 0.55], !0),
    n(-23.5, ND, -4.6, PD, 18, [0.66, 0.64, 0.6], !0),
  ];
}
var Gge = {
    id: `kanda-myojin`,
    near: 230,
    build: Hge,
    far: Uge,
    farBoxes: Wge,
    blip: !1,
    anchors: [
      {
        key: `kanda-myojin-torii`,
        lx: 0,
        lz: -29.5,
        turn: Math.PI,
        name: { zh: `神田明神 銅鳥居`, en: `Kanda Myojin bronze torii` },
      },
      {
        key: `kanda-myojin-court`,
        lx: 0,
        lz: 1,
        turn: Math.PI,
        name: { zh: `神田明神 御社殿`, en: `Kanda Myojin main hall` },
      },
    ],
  },
  aO = { x: -246, z: -1387 },
  oO = 39.6,
  sO = 30,
  cO = 18,
  lO = -1.6,
  uO = 1.6,
  dO = 13,
  fO = 16.4,
  pO = 17.1,
  mO = 17.5,
  Kge = 10.5,
  hO = 3.2,
  gO = -32.5,
  _O = 16246470,
  vO = 14471096,
  qge = 3813675,
  Jge = {
    color: 16777215,
    band: 3946805,
    soffit: 2762532,
    ridgeColor: 3420462,
  };
function yO(e, t, n, r, i, a, o, s = !1) {
  let c = t.c(`granite`);
  (e.col(vO).emis(0.34, G).wall(n, r, i, a, 0, uO, c, 3.2, 1.6, 0.32),
    e.col(_O).emis(0.32, G).wall(n, r, i, a, uO, dO, c, 2.4, 2.4, 0.15),
    s
      ? e.col(_O).emis(0.17, G).wall(n, r, i, a, dO, fO, c, 2.4, 2.4, 0.24)
      : e
          .col(16773852)
          .emis(0.17, G)
          .wall(
            n,
            r,
            i,
            a,
            dO,
            fO,
            t.A.sub(`tnmBay`, 0, 0.234, 1, 1),
            o,
            3.3999999999999986,
            0.24,
          ),
    e.col(_O).emis(0.3, G).wall(n, r, i, a, fO, pO, c, 2.4, 2.4),
    e.emis(0, 0));
}
