// tokyo/assets/region-tokyo-55J_WESF 231 — mat
// Lines 88594-88943 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* Fbe(e, t) {
  let n = e.sub(-40, 0, 6, 0);
  (cC(e, 0, -17, 0, 5.4, 6.6, {
    type: `myojin`,
    color: 11906979,
    kasagiColor: 10393740,
  }),
    e
      .col(fP)
      .mat(0.9, 0, 0.05, sP)
      .box(-7.5, 0, -1.5, 7.5, 0.9, 16.5, t.granite, 2, 0.9),
    e.col(gP).mat(0.35, 0.1, 0.06, sP).box(-6.2, 0.9, 0, 6.2, 5.2, 7.5));
  for (let t of [-6.2, -3.1, 0, 3.1, 6.2])
    (e.col(gP).mat(0.35, 0.1, 0.08, sP).cylY(t, -0.1, 0.9, 5.2, 0.24, 8),
      e.coarse ||
        e
          .push()
          .col(dP)
          .mat(0.3, 0.85, 0.15, sP)
          .cylY(t, -0.1, 0.9, 1.15, 0.28, 8)
          .cylY(t, -0.1, 4.9, 5.1, 0.27, 8)
          .pop());
  (e
    .col(7232072)
    .mat(0.6, 0, 0.35, G)
    .wall(5.9, -0.04, -5.9, -0.04, 1.1, 4.2, t.shoji, 0.8, 0.9),
    e.col(dP).mat(0.35, 0.8, 0.18, sP).box(-6.4, 4.5, -0.25, 6.4, 4.75, 7.75),
    e.col(gP).mat(0.35, 0.1, 0.06, sP).box(-2.6, 0.9, 7.5, 2.6, 4.4, 10),
    e.box(-4.6, 0.9, 10, 4.6, 5, 15.6),
    yield);
  let r = {
    cell: t.copper,
    color: 12171688,
    band: 6265476,
    ridgeColor: 4872784,
    soffit: gP,
    tile: 2,
  };
  if (
    (e.mat(0.6, 0.3, 0, 0),
    oC(e, 0, 3.75, 5.2, 8.2, 5.4, {
      ...r,
      rise: 4,
      curve: 1.4,
      sori: 0.6,
      eave: 1.6,
      thick: 0.35,
      ridgeH: 0.6,
      tg: 0.45,
      gableColor: gP,
      rows: 5,
    }),
    sC(e, 0, 0, 4.4, 2.6, -2.2, 0.4, 1.3, {
      ...r,
      rise: 0,
      thick: 0.35,
      boardColor: 6265476,
      gilt: dP,
    }),
    aC(
      e,
      0,
      8.75,
      4.4,
      1.6,
      3.2,
      {
        ...r,
        rise: 1.6,
        curve: 1.2,
        eave: 0.4,
        sori: 0.1,
        thick: 0.25,
        ridgeH: 0.3,
        wallY: 4.4,
        wallColor: gP,
        rows: 3,
      },
      oP / 2,
    ),
    oC(e, 0, 12.8, 5, 6, 4.2, {
      ...r,
      rise: 3.6,
      curve: 1.4,
      sori: 0.5,
      eave: 1.3,
      thick: 0.3,
      ridgeH: 0.5,
      tg: 0.45,
      gableColor: gP,
      rows: 4,
    }),
    !e.coarse)
  )
    for (let t of [-1, 1]) {
      e.col(11775652).mat(0.9, 0, 0, 0);
      let n = t * 4.2;
      (e.box(n - 0.5, 0, -6.5, n + 0.5, 0.35, -5.5),
        e.cylY(n, -6, 0.35, 1.5, 0.16, 6),
        e
          .col(15983280)
          .mat(0.6, 0, 0.7, sP)
          .box(n - 0.24, 1.5, -6.24, n + 0.24, 1.95, -5.76),
        e
          .col(11775652)
          .mat(0.9, 0, 0, 0)
          .lathe(n, -6, [0.6, 1.95, 0.25, 2.4, 0.06, 2.6], 6, oP / 6),
        e.pole(n, -6, 0.5, 0, 2.6));
    }
  (e.leave(n), e.solid(-47.5, 4.5, -32.5, 22.5, 0, 12));
}
function* Ibe(e, t) {
  (e.col(14275785).mat(0.88, 0, 0.03, sP),
    e.flat(
      -70,
      -35.4,
      50,
      35.4,
      0.04,
      t.paving,
      e.coarse ? 12 : 6,
      e.coarse ? 12 : 6,
    ),
    e.coarse ||
      e
        .col(12235944)
        .mat(0.88, 0, 0.03, sP)
        .flat(-3.5, -24.8, 3.5, -7.2, 0.06, t.paving, 3.5, 3.5),
    Nbe(e, 0, -13),
    Pbe(e, t, 15.5, -12));
  for (let t of [-22, -16]) for (let n of [-1, 1]) Sbe(e, n * 5.2, t);
  (e.coarse ||
    [
      [-9, -22, 7.5],
      [12, -24, 7],
      [-14, -6, 8],
      [22, -4, 7.5],
      [-60, -24, 8],
      [46, -11, 8],
      [24, 8, 7],
      [-54, 31, 8],
    ].forEach(([t, n, r], i) => HC(e, t, n, r, 31 + i)),
    [
      [-31, 30, 22],
      [33, 32, 16],
      [-28, -8, 18],
      [-58, 22, 21],
      [-28, 14, 18],
      [-8, 33, 13],
      [12, 33, 12],
      [-52, -12, 16],
    ].forEach(([t, n, r], i) => {
      (!e.coarse || r > 17) && Cbe(e, t, n, r, i + 1);
    }));
}
function* Lbe(e, t) {
  let n = OP(t);
  (yield* Ibe(e, n),
    yield,
    yield* jbe(e, n),
    yield,
    yield* Mbe(e, n),
    yield,
    yield* Fbe(e, n),
    yield,
    GP(e, n, 37, 19, 0, 8.5, 5.5, 5.4, 3.6),
    GP(e, n, 44, 0, -oP / 2, 5.5, 4.2, 4.4, 2.8),
    Rbe(e, n, -65.5, 2),
    zbe(e, n, -36, -26));
}
function GP(e, t, n, r, i, a, o, s, c) {
  let l = e.sub(n, 0, r, i);
  (e
    .col(fP)
    .mat(0.9, 0, 0.05, sP)
    .box(-a - 1, 0, -o - 1.6, a + 1, 0.8, o + 1, t.granite, 2, 0.8),
    e.floor(-a - 1, -o - 1.6, a + 1, o + 1, 0.8),
    jP(e, 0.2).box(-a, 0.8, -o, a, s - 1.2, o),
    e
      .col(uP)
      .mat(0.85, 0, 0.14, sP)
      .box(-a, s - 1.2, -o, a, s, o, t.plaster, 2, 1.2));
  let u = Math.max(2, Math.round((2 * a) / 3.2));
  for (let t = 0; t <= u; t++)
    LP(e, -a + (2 * a * t) / u, -o - 0.05, 0.8, s, 0.24, 0.2);
  (e
    .col(5909018)
    .mat(0.7, 0, 0.3, G)
    .wall(
      a - 0.4,
      -o - 0.04,
      -a + 0.4,
      -o - 0.04,
      1,
      s - 1.6,
      t.shoji,
      e.coarse ? 1.6 : 0.8,
      e.coarse ? 1.8 : 0.9,
    ),
    IP(e, -a, -o, a, o, s, s + 0.8, 0.5),
    FP(e, -a - 1.2, -o - 1.2, a + 1.2, o + 1.2, s + 0.78, 0.35),
    AP(e),
    oC(e, 0, 0, s + 0.65, a + 2.2, o + 2.2, {
      ...kP(t),
      rise: c,
      curve: 1.4,
      sori: 0.55,
      thick: 0.32,
      eave: 1.6,
      ridgeH: 0.6,
      tg: 0.45,
      gableColor: cP,
      rows: 5,
    }),
    e.leave(l),
    e.solidRot(
      n,
      r,
      Math.abs(Math.cos(i)) > 0.5 ? a : o,
      Math.abs(Math.cos(i)) > 0.5 ? o : a,
      0,
      0,
      s + c,
    ));
}
function Rbe(e, t, n, r) {
  let i = e.sub(n, 0, r, -oP / 2),
    a = 4.6,
    o = 1.9,
    s = 4.8;
  (e
    .col(fP)
    .mat(0.9, 0, 0.05, sP)
    .box(-5.2, 0, -2.6, 5.2, 0.2, 2.6, t.granite, 2, 0.2),
    e.floor(-5.2, -2.6, 5.2, 2.6, 0.2));
  for (let t of [-4.6, -1.9, o, a])
    for (let n of [-1.9, 0, 1.9])
      (LP(e, t, n, 0.2, s, n === 0 ? 0.28 : 0.22, 0.2),
        e.pole(t, n, 0.32, 0, s));
  for (let n of [-1, 1]) {
    let r = Math.min(n * o, n * a),
      i = Math.max(n * o, n * a);
    if (
      (jP(e, 0.2, 0.95).box(r, 0.2, -0.1, i, 2.2, 0.1),
      e
        .col(uP)
        .mat(0.85, 0, 0.12, sP)
        .box(r, 2.2, -0.08, i, s, 0.08, t.plaster, 2, 2.6),
      e
        .col(2837050)
        .mat(0.7, 0, 0.08, sP)
        .box(r + 0.15, 0.2, -1.7, i - 0.15, 0.8, -0.1),
      RP(
        e,
        (r + i) / 2,
        0.8,
        -0.95,
        0,
        0.95,
        n > 0 ? 3824266 : 9058858,
        12096058,
        `deity`,
      ),
      !e.coarse)
    ) {
      (e.col(2044712).mat(0.6, 0.3, 0, 0),
        e.box(r + 0.1, 3.9, -1.94, i - 0.1, 4, -1.86));
      for (let t = r + 0.4; t < i - 0.25; t += 0.5)
        e.box(t - 0.025, 0.8, -1.93, t + 0.025, 3.9, -1.87);
    }
    e.solid(n > 0 ? o : -4.75, -2.1, n > 0 ? 4.75 : -1.9, 2.1, 0, 5.3);
  }
  jP(e, 0.16);
  for (let t of [-1.9, 0, 1.9])
    e.box(-4.6 - 0.3, s, t - 0.18, 4.8999999999999995, 5.3, t + 0.18);
  (IP(e, -4.6 - 0.3, -2.1, 4.8999999999999995, 2.1, 5.3, 6, 0.5),
    FP(e, -5.6, -3.2, 5.6, 3.2, 5.949999999999999, 0.35),
    AP(e),
    aC(e, 0, 0, 5.75, 6.6, 4.4, {
      ...kP(t, mP),
      rise: 3,
      curve: 1.3,
      sori: 0.25,
      thick: 0.35,
      eave: 1.8,
      ridgeH: 0.6,
      wallY: 5.75,
      wallInset: 1.6,
      wallColor: cP,
      rows: 5,
    }),
    e.leave(i));
}
function zbe(e, t, n, r) {
  if (
    (e.push().col(9077364).mat(0.95, 0, 0.03, sP),
    e.lathe(
      n,
      r,
      [6.2, 0, 5.6, 1.2, 4, 2.2, 3.2, 2.4],
      e.seg(12),
      0.3,
      t.granite,
    ),
    e.col(4153140).mat(0.95, 0, 0, 0),
    !e.coarse)
  )
    for (let t = 0; t < 7; t++) {
      let i = (t / 7) * oP * 2 + 0.4,
        a = 4.8;
      e.lathe(
        n + Math.cos(i) * a,
        r + Math.sin(i) * a,
        [0.05, 0.9, 0.9, 1.4, 0.6, 2, 0.05, 2.3],
        5,
        i,
      );
    }
  (e.pop(), e.disc(n, 2.4, r, 3.2, e.seg(12)));
  for (let t of [-1, 1])
    for (let i of [-1, 1])
      jP(e, 0.2).cylY(n + t * 1.6, r + i * 1.6, 2.4, 6.4, 0.16, 8);
  (e.push().col(5986888).mat(0.5, 0.4, 0.06, sP),
    e.lathe(
      n,
      r,
      [0.85, 4.1, 0.82, 4.4, 0.7, 5.6, 0.45, 5.95, 0.1, 6.05],
      e.seg(10),
      0,
      e.white,
      !1,
      !0,
    ),
    e.pop(),
    jP(e, 0.16).box(n - 1.8, 6.2, r - 1.8, n + 1.8, 6.6, r + 1.8),
    AP(e),
    oC(e, n, r, 6.5, 3.4, 3.4, {
      ...kP(t),
      rise: 2.6,
      curve: 1.4,
      sori: 0.5,
      thick: 0.28,
      eave: 1.2,
      ridgeH: 0.45,
      tg: 0.45,
      gableColor: cP,
      rows: 4,
    }),
    e.pole(n, r, 6, 0, 2.4));
}
