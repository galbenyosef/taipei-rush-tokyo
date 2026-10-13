// tokyo__assets__region-tokyo-BcM3fReU 129 — mat
// Lines 57752-58098 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function gA(e, t, n, r, i) {
  if (
    (e.col(14209732).mat(0.8, 0, 0.06, Y),
    e.box(t, i - 0.35, r - 1.2, n, i, r),
    e.col(pA).mat(0.6, 0, 0.08, Y),
    e.box(t, i + 0.95, r - 1.25, n, i + 1.1, r - 1.05),
    !e.coarse)
  ) {
    e.box(t, i + 0.25, r - 1.2, n, i + 0.33, r - 1.1);
    for (let a = t; a <= n + 0.001; a += 1.8)
      e.box(a - 0.08, i, r - 1.22, a + 0.08, i + 1.1, r - 1.06);
  }
}
function* _A(e, t) {
  let n = hA(t);
  if (
    (e.col(dA).mat(0.85, 0, 0.16, Y),
    e.box(-23.5, 0, lA, sA, uA, cA, t.c(`plaster`), 2, 2),
    !e.coarse)
  ) {
    (e.col(5987160).mat(0.8, 0, 0, 0).box(-23.55, 0, -14.55, 23.55, 0.9, -14.3),
      e.col(16777215).emis(0.3, Y));
    for (let n of [-4.2, -1.4, 1.4, 4.2])
      e.panel(n + 1.2, -14.56, n - 1.2, -14.56, 0, 3.6, t.c(`doors`));
    for (let n of [-16, -12, 12, 16])
      e.panel(n + 1.4, -14.56, n - 1.4, -14.56, 0.9, 3.4, t.c(`kabukiWall`));
    e.emis(0, 0);
  }
  if (
    (e.mat(0.88, 0, 0.02, Y),
    ND(e, 0, -13.5, 6, 24.3, 2.2, {
      ...n,
      rise: 1.2,
      R: sA,
      ridgeH: 0,
      eave: 1.1,
      sori: 0.2,
      curve: 1.2,
      rows: 2,
    }),
    yield,
    e.col(dA).mat(0.85, 0, 0.14, Y),
    e.box(-9, uA, -12.9, 9, 16, cA, t.c(`kabukiWall`), 3, 4.9),
    e.mat(0.88, 0, 0.02, Y),
    FD(
      e,
      0,
      1,
      16,
      14.9,
      10.6,
      {
        ...n,
        rise: 9.6,
        curve: 1.2,
        sori: 0.55,
        eave: 1.6,
        ridgeH: 0.85,
        tg: 0.5,
        gableColor: dA,
        gableCell: t.c(`plaster`),
        band: 16052714,
      },
      Math.PI / 2,
    ),
    !e.coarse)
  ) {
    e.col(13214282).mat(0.35, 0.8, 0.12, Y);
    for (let t of [-1, 1])
      for (let n = 1; n <= 4; n++) {
        let r = n / 5;
        e.box(
          t * 9.6 * (1 - r) - 0.25,
          16 + 9.6 * r ** 1.2 - 0.2,
          -14.7,
          t * 9.6 * (1 - r) + 0.25,
          16 + 9.6 * r ** 1.2 + 0.2,
          -14.45,
        );
      }
  }
  yield;
  for (let r of [-1, 1]) {
    let i = r > 0 ? 9 : -23.5,
      a = r > 0 ? sA : -9;
    (e.col(dA).mat(0.85, 0, 0.14, Y),
      e.box(i, uA, -12.9, a, 12.4, cA, t.c(`kabukiWall`), 2.9, 6.2),
      gA(e, i + 0.3, a - 0.3, -12.9, 6.4),
      e.mat(0.88, 0, 0.02, Y),
      FD(e, (i + a) / 2, 1.5999999999999996 / 2, 12.4, (a - i) / 2 + 1, 14.7, {
        ...n,
        rise: 8.5,
        curve: 1.15,
        sori: 0.45,
        eave: 1.3,
        ridgeH: 0.6,
        tg: 0.42,
        gableColor: dA,
        xg: (a - i) / 2 - 1.5,
      }));
  }
  (yield, e.col(3813159).mat(0.7, 0, 0, 0));
  for (let t of [-5.6, 5.6])
    for (let n of [-17.6, -14.7])
      (e.box(t - 0.32, 0, n - 0.32, t + 0.32, 6.4, n + 0.32),
        e.pole(t, n, 0.4, 0, 6.4));
  if (
    (e.box(-6, 6, -17.900000000000002, 6, 6.7, -17.3),
    e.mat(0.88, 0, 0.02, Y),
    ID(e, 0, 0, 6.7, 6.6, -18.1, -12.9, 3.6, {
      ...n,
      rise: 0,
      tile: 2,
      thick: 0.5,
      boardColor: 16052714,
      gilt: 13214282,
    }),
    e.col(16777215).mat(0.5, 0.2, 0.3, Y),
    e.panel(2.9, -17.96, -2.9, -17.96, 6.85, 8.75, t.c(`kabukiSign`)),
    !e.coarse)
  ) {
    (e
      .col(3091240)
      .mat(0.7, 0, 0, 0)
      .box(-1.6, 25.6 + 0.6, -9.5, 1.6, 28.400000000000002, -6.5),
      e
        .col(dA)
        .box(-1.4, 26.500000000000004, -9.55, 1.4, 28.000000000000004, -9.5),
      e.mat(0.88, 0, 0, 0),
      ND(e, 0, -8, 28.400000000000002, 2.2, 2, {
        ...n,
        rise: 1.1,
        ridgeH: 0.3,
        eave: 0.6,
        sori: 0.2,
        rows: 2,
      }),
      e.col(14209732).mat(0.8, 0, 0, 0));
    for (let t of [-1, 1])
      e.rod(
        t * 1.2,
        28.400000000000002,
        -9.6,
        t * 1.6,
        31.400000000000002,
        -9.9,
        0.06,
        4,
      );
    e.col(15262940);
    for (let t of [-1, 1])
      e.lathe(
        t * 1.6,
        -9.9,
        [0.02, 30.6, 0.45, 31.1, 0.02, 31.800000000000004],
        6,
      );
  }
  if ((yield, !e.coarse)) {
    for (let n of [-21, -18, -15, -12, -9.5, 9.5, 12, 15, 18, 21])
      kO(e, n, 5.6000000000000005, -15.4, 1.3, t.c(`lantern`));
    (kO(e, -3.6, 6, -16.900000000000002, 1.8, t.c(`lantern`)),
      kO(e, 3.6, 6, -16.900000000000002, 1.8, t.c(`lantern`)));
    let n = t.c(`nobori`);
    for (let t = 0; t < 8; t++) {
      let r = (t < 4 ? -21 : 11.4) + (t % 4) * 3.2,
        i = -16.1;
      (e.col(13157564).mat(0.6, 0.4, 0, 0).cylY(r, i, 0, 6.6, 0.05, 5),
        e.pole(r, i, 0.1, 0, 6.6, `pole`));
      let a = t % 4,
        o = {
          u0: n.u0 + ((n.u1 - n.u0) * a) / 4,
          v0: n.v0,
          u1: n.u0 + ((n.u1 - n.u0) * (a + 1)) / 4,
          v1: n.v1,
        };
      (e.col(16777215).mat(0.85, 0, 0.05, 1),
        e.panel(r + 0.05, -16.12, r + 0.95, -16.12, 1.4, 6.2, o),
        e.panel(
          r + 0.95,
          -16.080000000000002,
          r + 0.05,
          -16.080000000000002,
          1.4,
          6.2,
          o,
        ));
    }
  }
  e.solid(-23.5, lA, sA, cA, 0, 24);
}
function vA(e, t) {
  (e.col(dA).mat(0.85, 0, 0.14, Y),
    e.box(-23.5, 0, lA, sA, uA, cA, t.c(`plaster`), 6, 6),
    e.box(-23.5, uA, -12.9, sA, 12.4, cA, t.c(`kabukiWall`), 6, 6.2),
    e.col(fA).mat(0.6, 0.1, 0, 0),
    e.extrudeX(
      [15.5, 12.4, -13.9, 12.4, 0, 20.9],
      -24.5,
      24.5,
      !0,
      !0,
      t.c(`kawara`),
    ),
    e.col(dA),
    e.extrudeZ([-9, 12.4, 9, 12.4, 9, 16, 0, 25.6, -9, 16], -12.9, cA, !0, !0));
}
function yA(e, t) {
  return [
    {
      x0: t.x - sA,
      x1: t.x + sA,
      z0: t.z + lA,
      z1: t.z + cA,
      y0: t.gy,
      y1: t.gy + 13,
      rgb: [0.8, 0.79, 0.75],
      lit: !0,
    },
    {
      x0: t.x - 9,
      x1: t.x + 9,
      z0: t.z + lA + 2,
      z1: t.z + cA,
      y0: t.gy + 13,
      y1: t.gy + 21,
      rgb: [0.27, 0.28, 0.3],
    },
  ];
}
var bA = {
    id: `kabukiza`,
    near: 230,
    build: _A,
    far: vA,
    farBoxes: yA,
    blip: !0,
    anchors: [
      {
        key: `kabukiza-front`,
        lx: 0,
        lz: -23.5,
        turn: Math.PI,
        name: { zh: `歌舞伎座 正面`, en: `Kabukiza main entrance` },
      },
    ],
  },
  xA = { hx: 18, hz: 12, h: 145, cz: 1.5 };
function SA(e, t) {
  let { hx: n, hz: r, h: i, cz: a } = xA;
  if (
    (e.col(14276303).mat(0.7, 0, 0.12, Y),
    e.box(-23, 0, -20.5, 23, 9.5, 20.5, t.c(`granite`), 2, 2),
    e.col(16777215).mat(0.25, 0.4, 0.22, Y | 32),
    e.box(-n, 9.5, a - r, n, i, a + r, t.c(`office`), 3.6, 4, e.white),
    !e.coarse)
  ) {
    e.col(14868182).mat(0.6, 0, 0.1, Y);
    for (let t = -n; t <= n + 0.001; t += 3.6)
      (e.box(t - 0.18, 9.5, a - r - 0.5, t + 0.18, i, a - r),
        e.box(t - 0.18, 9.5, a + r, t + 0.18, i, a + r + 0.5));
    e.sweep([-n, a - r, n, a - r, n, a + r, -n, a + r], VD(9.2, 0.5, 0.6), !0);
  }
  (e.col(15263456).mat(0.6, 0.1, 0.18, 1),
    e.box(-n - 0.3, i, a - r - 0.3, n + 0.3, i + 1.2, a + r + 0.3),
    e
      .col(10133668)
      .mat(0.6, 0.3, 0, 0)
      .box(-n + 3, i + 1.2, a - r + 3, n - 3, i + 5, a + r - 3),
    e.col(16722450).mat(0.5, 0, 0.9, 1));
  for (let t of [-1, 1])
    e.box(
      t * (n - 3.5) - 0.3,
      i + 5,
      a - 0.3,
      t * (n - 3.5) + 0.3,
      i + 5.6,
      a + 0.3,
    );
  (e.solid(-23, -20.5, 23, 20.5, 0, 9.5), e.solid(-n, a - r, n, a + r, 9.5, i));
}
function CA(e, t) {
  let { hx: n, hz: r, h: i, cz: a } = xA;
  (e.col(16777215).mat(0.3, 0.4, 0.2, Y | 32),
    e.box(-n, 0, a - r, n, i, a + r, t.c(`office`), 7.2, 8));
}
var wA = {
    id: `kabukiza-tower`,
    site: (e) => {
      let t = (Yc.x0 + Yc.x1) / 2,
        n = (Yc.z0 + Yc.z1) / 2;
      return { x: t, z: n, gy: e.groundHeight(t, n), facing: 0 };
    },
    name: { ja: `歌舞伎座タワー`, zh: `歌舞伎座大樓`, en: `Kabukiza Tower` },
    near: 260,
    build: SA,
    far: CA,
    farBoxes: (e, t) => [
      {
        x0: t.x - xA.hx,
        x1: t.x + xA.hx,
        z0: t.z + xA.cz - xA.hz,
        z1: t.z + xA.cz + xA.hz,
        y0: t.gy,
        y1: t.gy + xA.h,
        rgb: [0.42, 0.47, 0.5],
        lit: !0,
      },
    ],
  },
  TA = { x: -53, z: 3 },
  EA = (e) => e - TA.x,
  DA = (e) => e - TA.z,
  OA = -74,
  kA = -32.5,
  AA = -92,
  jA = 98,
  MA = -40,
  NA = 40,
  PA = { x0: -70, x1: -43, za: 12, zb: 33 },
  FA = -45,
  IA = { x0: -66, x1: -55 },
  LA = 3947840,
  RA = 12170669,
  zA = 0.04,
  BA = 0.17;
function VA(e, t, n, r, i, a, o = e.white, s = 0) {
  e.flat(EA(t), DA(n), EA(r), DA(i), a, o, s, s);
}
function HA(e, t, n, r, i, a, o = e.white, s = 0) {
  (e.col(RA).mat(0.85, 0, 0.04, Y),
    e.box(EA(t), 0, DA(n), EA(r), BA, DA(i)),
    e.col(a).mat(0.95, 0, 0, 0),
    VA(e, t + 0.25, n + 0.25, r - 0.25, i - 0.25, 0.18000000000000002, o, s));
}
function UA(e, t, n, r, i, a = 3.6) {
  if (e.coarse) return;
  let o = Math.hypot(r - t, i - n),
    s = Math.max(1, Math.round(o / a));
  e.push().col(1974049).mat(0.5, 0.5, 0, 0);
  for (let a = 0; a <= s; a++) {
    let o = EA(t + ((r - t) * a) / s),
      c = DA(n + ((i - n) * a) / s);
    e.obox(o, 0.35, c, 0.06, 0.35, 0.06);
  }
  (e.rod(EA(t), 0.52, DA(n), EA(r), 0.52, DA(i), 0.02, 3), e.pop());
}
