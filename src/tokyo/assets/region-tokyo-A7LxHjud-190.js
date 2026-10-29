// tokyo/assets/region-tokyo-A7LxHjud 190 — col
// Lines 76061-76462 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* c_e(e, t) {
  let n = { ...o_e, cell: t.c(`tnmKawara`), tile: 3 };
  SO(e, t, uO, 0, -30, 0, 5);
  for (let n of [1, -1]) {
    let r = n * uO,
      i = n * lO;
    (n > 0
      ? SO(e, t, i, fO, r, fO, 9.600000000000001 / 2)
      : SO(e, t, r, fO, i, fO, 9.600000000000001 / 2),
      n > 0 ? SO(e, t, r, fO, r, 0, 5, !0) : SO(e, t, r, 0, r, fO, 5, !0));
  }
  (SO(e, t, lO, dO, lO, fO, 5.5),
    SO(e, t, -39.6, fO, -39.6, dO, 5.5),
    e.coarse
      ? (e
          .col(bO)
          .emis(0.12, G)
          .wall(-39.6, dO, lO, dO, 0, gO, t.c(`granite`), 6, 6),
        e.emis(0, 0))
      : SO(e, t, -39.6, dO, lO, dO, 5),
    e.col(xO).mat(0.85, 0, 0.12, G));
  let r = [
    -39.6,
    fO,
    -30,
    fO,
    -30,
    0,
    uO,
    0,
    uO,
    fO,
    lO,
    fO,
    lO,
    dO,
    -39.6,
    dO,
  ];
  (e.sweep(r, _C(1.35, 0.18, 0.3), !0),
    e.col(bO).sweep(r, _C(12.7, 0.25, 0.35), !0),
    e.emis(0, 0),
    yield,
    CO(e, t, uO, 10, 0, 5),
    CO(e, t, -10, -30, 0, 5),
    CO(e, t, lO, uO, fO, 9.600000000000001 / 2),
    CO(e, t, -30, -39.6, fO, 9.600000000000001 / 2));
  for (let t = -30; t <= 30.001; t += 5) wO(e, t, 0);
  for (let t of [1, -1])
    for (let n of [0, 0.5, 1]) wO(e, t * (uO + 9.600000000000001 * n), fO);
  if (!e.coarse) {
    for (let t of [12.5, 17.5, 22.5, 27.5])
      for (let n of [1, -1]) TO(e, n * t, 0);
    for (let t of [1, -1]) {
      let n = (t * 69.6) / 2;
      (l_e(e, n, 10.2, -1.6500000000000001, 1.05, 0.16),
        e.col(2894633).mat(0.25, 0.3, 0.03, G),
        u_e(e, n, 10.2, -1.6300000000000001, 0.9, 16),
        TO(e, n, fO, 3.2, 8.4, 1.8));
    }
  }
  (yield,
    e.col(a_e).mat(0.85, 0, 0, 0),
    e.sweep(r, [0, gO, 0.35, 17.150000000000002, 0.6, 17.45, 0, _O], !0),
    lC(e, 0, dO / 2, _O, 33.2, 12.2, {
      ...n,
      rise: i_e,
      curve: 1.08,
      sori: 0.9,
      eave: vO,
      thick: 0.5,
      ridgeH: 1.2,
      tg: 0.45,
      og: 0.9,
      gableColor: 4143669,
      gegyo: !1,
      rows: 8,
    }),
    yield);
  for (let t of [1, -1])
    lC(
      e,
      (t * 69.6) / 2,
      16.4 / 2,
      _O,
      13,
      8,
      {
        ...n,
        rise: 5.2,
        curve: 1.1,
        sori: 0.8,
        eave: vO,
        thick: 0.5,
        ridgeH: 0.8,
        tg: 0.5,
        og: 0.6,
        gableColor: 4143669,
        gegyo: !1,
        rows: 6,
      },
      Math.PI / 2,
    );
  yield;
  let i = 1.2,
    a = 6.2,
    o = 7.6;
  (e.col(xO).mat(0.85, 0, 0.14, G),
    e.box(-9, 0, -9, 9, i, 0, t.c(`granite`), 2.4, 1.2),
    e
      .col(14867923)
      .flat(-9, -9, 9, 0, 1.2049999999999998, t.c(`paving`), 2, 2));
  for (let n = 0; n < 6; n++) {
    let r = -12 + n * 0.5;
    e.col(xO, 0.96 + (n % 2) * 0.04).box(
      -8.2,
      0,
      r,
      8.2,
      (n + 1) * (i / 6),
      -9,
      t.c(`granite`),
      2.4,
      1.2,
    );
  }
  e.col(bO).mat(0.82, 0, 0.18, G);
  for (let n of [1, -1]) {
    let r = n > 0 ? 7.6 : -9,
      s = n > 0 ? 9 : -7.6;
    e.box(r, i, -9, s, a, 0, t.c(`granite`), 2.4, 2.4);
    let c = n > 0 ? 2.5 : -3.9,
      l = n > 0 ? 3.9 : -2.5;
    (e.box(c, i, -9, l, a, -7.6, t.c(`granite`), 2.4, 2.4),
      e.solid(r, -9, s, 0, 0, o),
      e.solid(c, -9, l, -7.6, 0, o));
  }
  if (
    (e
      .emis(0.12, G)
      .box(-9.2, a, -9.2, 9.2, o, 0, t.c(`granite`), 2.4, 1.5, null, !0),
    !e.coarse)
  ) {
    e.col(13221542).emis(0.1, G);
    for (let t = -8.4; t <= 8.401; t += 1.2)
      e.box(t - 0.32, 6.65, -9.28, t + 0.32, 7.25, -9.2);
  }
  e.col(16777215).mat(0.4, 0.2, 0.35, G);
  for (let n of [-4.6, 0, 4.6])
    e.panel(n + 1.6, -0.06, n - 1.6, -0.06, i, 5.4, t.c(`doors`));
  (e.emis(0, 0), e.mat(0.8, 0, 0.12, G));
  let s = {
    rise: 6,
    curve: 1.3,
    tg: 0.22,
    xg: 4.6,
    og: 0.55,
    D: 10.4,
    y0: 7.8,
    cz: -4.2,
  };
  lC(
    e,
    0,
    s.cz,
    s.y0,
    6.3,
    s.D,
    {
      ...n,
      rise: s.rise,
      curve: s.curve,
      sori: 0.95,
      eave: 1.6,
      thick: 0.4,
      ridgeH: 0.7,
      tg: s.tg,
      xg: s.xg,
      og: s.og,
      gableColor: 14077629,
      rows: 6,
    },
    Math.PI / 2,
  );
  {
    let t = (e) => s.y0 + s.rise * e ** 1.75 + 0.35 * (1 - e) ** 3,
      n = s.cz - (s.xg + s.og) - 0.07,
      r = s.D * (1 - s.tg) + 0.6,
      i = e.coarse ? 4 : 10,
      a = 0.36;
    e.col(15986662).mat(0.7, 0, 0.2, G);
    for (let o = 0; o < i; o++) {
      let c = -r + (2 * r * o) / i,
        l = -r + (2 * r * (o + 1)) / i,
        u = t(1 - Math.abs(c) / s.D) + 0.3,
        d = t(1 - Math.abs(l) / s.D) + 0.3;
      (e.quad(l, d - a, n, c, u - a, n, c, u, n, l, d, n),
        e.quad(c, u - a, n + 0.3, c, u - a, n, l, d - a, n, l, d - a, n + 0.3),
        e.quad(c, u, n, c, u, n + 0.3, l, d, n + 0.3, l, d, n));
    }
    if (!e.coarse) {
      let r = t(1) + 0.3 - a;
      (e.box(-0.34, r - 0.62, n - 0.06, 0.34, r - 0.05, n + 0.02),
        e.box(-0.14, r - 0.86, n - 0.08, 0.14, r - 0.62, n + 0));
    }
  }
  if (
    (uC(e, 0, 0, s.y0 - 0.05, 4.4, s.cz - 6.3 - 0.35, s.cz - 6.3 + 2.8, 1.9, {
      ...n,
      rise: 0,
      tile: 2,
      thick: 0.4,
      boardColor: 15986662,
      gilt: 5591114,
      fittings: !1,
      pendant: !1,
    }),
    !e.coarse)
  ) {
    e.col(5212786).mat(0.5, 0.5, 0, 0);
    for (let t of [1, -1])
      e.rod(t * 9.05, i, -8.9, t * 9.05, 7.699999999999999, -8.9, 0.07, 5);
  }
  if (
    (e.floor(-7.6, -9, 7.6, 0, i, i, `platform`),
    e.floor(-8.2, -12, 8.2, -9, 0.05, i, `platform`),
    yield,
    !e.coarse)
  ) {
    (e.col(16777215).mat(0.8, 0, 0.45, G),
      e.panel(
        -11,
        -0.12,
        -13.2,
        -0.12,
        4,
        13,
        t.A.sub(`tnmBanner`, 0, 0, 0.5, 1),
      ),
      e.panel(
        -13.6,
        -0.12,
        -15.8,
        -0.12,
        4,
        13,
        t.A.sub(`tnmBanner`, 0.5, 0, 1, 1),
      ),
      e.col(4868682).mat(0.5, 0.6, 0, 0));
    for (let [t, n] of [
      [-11, -13.2],
      [-13.6, -15.8],
    ])
      e.box(n - 0.1, 13, -0.2, t + 0.1, 13.12, -0.08);
  }
  let c = 0.05;
  (e.mat(0.92, 0, 0, 0), e.col(6053729));
  for (let n of [1, -1])
    e.flat(n > 0 ? 9 : -13.5, -32.1, n > 0 ? 13.5 : -9, -12, c, t.c(`white`));
  (e.flat(-9, -32.1, 9, -28.4, c, t.c(`white`)),
    e
      .col(14736594)
      .flat(-13.5, -12, 13.5, fO, 0.060000000000000005, t.c(`paving`), 2, 2),
    e.flat(-9, -14.1, 9, -12, 0.060000000000000005, t.c(`paving`), 2, 2),
    e
      .flat(-39.6, -4, -13.5, fO, 0.060000000000000005, t.c(`paving`), 2, 2)
      .flat(13.5, -4, lO, fO, 0.060000000000000005, t.c(`paving`), 2, 2),
    e.flat(-30, fO, uO, 0, 0.060000000000000005, t.c(`paving`), 2, 2),
    e.col(5928004));
  for (let t of [1, -1])
    e.flat(
      t > 0 ? 13.5 : -39.6,
      -32.1,
      t > 0 ? lO : -13.5,
      -4,
      c,
      e.white,
      8,
      8,
    );
  for (let t of [1, -1])
    e.flat(t > 0 ? 6.4 : -9, -28.4, t > 0 ? 9 : -6.4, -14.1, c, e.white);
  if (!e.coarse) {
    e.col(13223098).mat(0.85, 0, 0, 0);
    for (let t of [1, -1])
      (e.box(t > 0 ? 13.5 : -13.75, 0, -32.1, t > 0 ? 13.75 : -13.5, 0.18, -4),
        e.box(t > 0 ? 8.75 : -9, 0, -28.4, t > 0 ? 9 : -8.75, 0.18, -14.1));
  }
  e.col(13486270).mat(0.85, 0, 0.06, G);
  for (let [n, r, i, a] of [
    [-6.4, -28.4, 6.4, -28],
    [-6.4, -14.5, 6.4, -14.1],
    [-6.4, -28, -6, -14.5],
    [6, -28, 6.4, -14.5],
  ])
    e.box(n, 0, r, i, 0.45, a, t.c(`granite`), 2, 2);
  if (
    (e.col(2372666).mat(0.06, 0.1, 0, 0),
    e.flat(-6, -28, 6, -14.5, 0.3),
    e.col(13354684).mat(0.85, 0, 0.06, G),
    e.lathe(
      0,
      -13.9,
      [2.6, 0, 2.6, 0.55, 2.3, 0.6, 2.25, 0.35],
      e.seg(20),
      0,
      e.white,
      !1,
      !0,
    ),
    e.col(2372666).mat(0.06, 0.1, 0, 0).disc(0, 0.42, -13.9, 2.28, e.seg(20)),
    e.col(13354684).mat(0.85, 0, 0.06, G),
    e.lathe(
      0,
      -13.9,
      [0.35, 0.4, 0.3, 0.95, 1.1, 1.05, 1.1, 1.25, 0.95, 1.2],
      e.seg(14),
      0,
      e.white,
      !1,
      !0,
    ),
    e.solid(-6.4, -28.4, 6.4, -14.1, 0, 0.9, `wall`),
    e.pole(0, -13.9, 2.6, 0, 1.3, `wall`),
    yield,
    s_e(e, 21, -17, 1881),
    !e.coarse)
  ) {
    for (let t of [1, -1])
      (EO(e, t * 7.7, -25.5, 1.3, 1.25),
        EO(e, t * 7.7, -21.4, 1.25, 1.2),
        EO(e, t * 7.7, -17.2, 1.2, 1.1),
        e.solid(t > 0 ? 6.4 : -9, -27, t > 0 ? 9 : -6.4, -16, 0, 1.2, `wall`));
    for (let [t, n, r, i] of [
      [-17, -2.8, 1.4, 1.2],
      [-25, -2.8, 1.4, 1.2],
      [17, -2.8, 1.4, 1.2],
      [25, -2.8, 1.4, 1.2],
      [-11.5, -10.5, 1, 0.9],
      [11.5, -10.5, 1, 0.9],
    ])
      EO(e, t, n, r, i);
    (KC(e, -33, -10, 12, 77), KC(e, -35, -23, 11, 78));
    for (let t of [1, -1])
      for (let n of [-29, -16])
        (qC(e, t * 14.3, 0, n, 4.2), e.pole(t * 14.3, n, 0.2, 0, 4.4));
    (e.pole(-33, -10, 0.5, 0, 5), e.pole(-35, -23, 0.45, 0, 5));
  }
  yield;
  let l = yO;
  (OO(e, t, 5.9, l, 2.3, 1.7, 3.5),
    OO(e, t, -5.9, l, 2.3, 1.7, 3.5),
    e.col(16777215).mat(0.5, 0.55, 0.15, G));
  let u = -33.35 - 0.06;
  (e.panel(-5.2, u, -6.6, u, 2.35, 2.78, t.A.sub(`tnmPlaque`, 0, 0.5, 1, 1)),
    e.panel(
      -5.25,
      u,
      -6.55,
      u,
      1,
      1.75,
      t.A.sub(`tnmPlaque`, 0.25, 0, 0.75, 0.5),
    ));
  let d = [
    [lO, l, 7.05, l],
    [-7.05, l, -39.6, l],
    [lO, fO, lO, l],
    [-39.6, l, -39.6, fO],
  ];
  for (let [n, r, i, a] of d) {
    let o = Math.min(n, i),
      s = Math.max(n, i),
      c = Math.min(r, a),
      l = Math.max(r, a),
      u = s - o > l - c;
    if (
      (e.col(13617857).mat(0.88, 0, 0.08, G),
      u
        ? e.box(o, 0, c - 0.3, s, 0.6, l + 0.3, t.c(`granite`), 2, 1.2)
        : e.box(o - 0.3, 0, c, s + 0.3, 0.6, l, t.c(`granite`), 2, 1.2),
      e.col(9146517).mat(0.45, 0.6, 0, 0),
      e.coarse)
    )
      u && e.box(o, 2.1, c - 0.05, s, 2.2, c + 0.05);
    else if (u) DO(e, o, s, c, 0.6, 2.2, 0.45);
    else {
      let t = e.sub(o, 0, (c + l) / 2, -Math.PI / 2);
      (DO(e, -(l - c) / 2, (l - c) / 2, 0, 0.6, 2.2, 0.45), e.leave(t));
    }
    u
      ? e.solid(o, c - 0.3, s, l + 0.3, 0, 2.3, `wall`)
      : e.solid(o - 0.3, c, s + 0.3, l, 0, 2.3, `wall`);
  }
  (e.coarse ||
    (e.col(9146517).mat(0.45, 0.6, 0, 0),
    DO(e, 7.3, 13.8, -31.95, 0.05, 2.4, 0.3),
    DO(e, -13.8, -7.3, -31.95, 0.05, 2.4, 0.3)),
    e.solid(-30, 0, uO, dO, 0, 28));
  for (let t of [1, -1])
    e.solid(t > 0 ? uO : -39.6, fO, t > 0 ? lO : -30, dO, 0, 26);
}
