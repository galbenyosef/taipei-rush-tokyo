// tokyo/assets/region-tokyo-A7LxHjud 231 — mat
// Lines 88685-89034 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* Jbe(e, t) {
  let n = e.sub(-40, 0, 6, 0);
  (dC(e, 0, -17, 0, 5.4, 6.6, {
    type: `myojin`,
    color: 11906979,
    kasagiColor: 10393740,
  }),
    e
      .col(mP)
      .mat(0.9, 0, 0.05, lP)
      .box(-7.5, 0, -1.5, 7.5, 0.9, 16.5, t.granite, 2, 0.9),
    e.col(vP).mat(0.35, 0.1, 0.06, lP).box(-6.2, 0.9, 0, 6.2, 5.2, 7.5));
  for (let t of [-6.2, -3.1, 0, 3.1, 6.2])
    (e.col(vP).mat(0.35, 0.1, 0.08, lP).cylY(t, -0.1, 0.9, 5.2, 0.24, 8),
      e.coarse ||
        e
          .push()
          .col(pP)
          .mat(0.3, 0.85, 0.15, lP)
          .cylY(t, -0.1, 0.9, 1.15, 0.28, 8)
          .cylY(t, -0.1, 4.9, 5.1, 0.27, 8)
          .pop());
  (e
    .col(7232072)
    .mat(0.6, 0, 0.35, G)
    .wall(5.9, -0.04, -5.9, -0.04, 1.1, 4.2, t.shoji, 0.8, 0.9),
    e.col(pP).mat(0.35, 0.8, 0.18, lP).box(-6.4, 4.5, -0.25, 6.4, 4.75, 7.75),
    e.col(vP).mat(0.35, 0.1, 0.06, lP).box(-2.6, 0.9, 7.5, 2.6, 4.4, 10),
    e.box(-4.6, 0.9, 10, 4.6, 5, 15.6),
    yield);
  let r = {
    cell: t.copper,
    color: 12171688,
    band: 6265476,
    ridgeColor: 4872784,
    soffit: vP,
    tile: 2,
  };
  if (
    (e.mat(0.6, 0.3, 0, 0),
    lC(e, 0, 3.75, 5.2, 8.2, 5.4, {
      ...r,
      rise: 4,
      curve: 1.4,
      sori: 0.6,
      eave: 1.6,
      thick: 0.35,
      ridgeH: 0.6,
      tg: 0.45,
      gableColor: vP,
      rows: 5,
    }),
    uC(e, 0, 0, 4.4, 2.6, -2.2, 0.4, 1.3, {
      ...r,
      rise: 0,
      thick: 0.35,
      boardColor: 6265476,
      gilt: pP,
    }),
    cC(
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
        wallColor: vP,
        rows: 3,
      },
      cP / 2,
    ),
    lC(e, 0, 12.8, 5, 6, 4.2, {
      ...r,
      rise: 3.6,
      curve: 1.4,
      sori: 0.5,
      eave: 1.3,
      thick: 0.3,
      ridgeH: 0.5,
      tg: 0.45,
      gableColor: vP,
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
          .mat(0.6, 0, 0.7, lP)
          .box(n - 0.24, 1.5, -6.24, n + 0.24, 1.95, -5.76),
        e
          .col(11775652)
          .mat(0.9, 0, 0, 0)
          .lathe(n, -6, [0.6, 1.95, 0.25, 2.4, 0.06, 2.6], 6, cP / 6),
        e.pole(n, -6, 0.5, 0, 2.6));
    }
  (e.leave(n), e.solid(-47.5, 4.5, -32.5, 22.5, 0, 12));
}
function* Ybe(e, t) {
  (e.col(14275785).mat(0.88, 0, 0.03, lP),
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
        .mat(0.88, 0, 0.03, lP)
        .flat(-3.5, -24.8, 3.5, -7.2, 0.06, t.paving, 3.5, 3.5),
    Kbe(e, 0, -13),
    qbe(e, t, 15.5, -12));
  for (let t of [-22, -16]) for (let n of [-1, 1]) Fbe(e, n * 5.2, t);
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
    ].forEach(([t, n, r], i) => GC(e, t, n, r, 31 + i)),
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
      (!e.coarse || r > 17) && Ibe(e, t, n, r, i + 1);
    }));
}
function* Xbe(e, t) {
  let n = AP(t);
  (yield* Ybe(e, n),
    yield,
    yield* Wbe(e, n),
    yield,
    yield* Gbe(e, n),
    yield,
    yield* Jbe(e, n),
    yield,
    qP(e, n, 37, 19, 0, 8.5, 5.5, 5.4, 3.6),
    qP(e, n, 44, 0, -cP / 2, 5.5, 4.2, 4.4, 2.8),
    Zbe(e, n, -65.5, 2),
    Qbe(e, n, -36, -26));
}
function qP(e, t, n, r, i, a, o, s, c) {
  let l = e.sub(n, 0, r, i);
  (e
    .col(mP)
    .mat(0.9, 0, 0.05, lP)
    .box(-a - 1, 0, -o - 1.6, a + 1, 0.8, o + 1, t.granite, 2, 0.8),
    e.floor(-a - 1, -o - 1.6, a + 1, o + 1, 0.8),
    NP(e, 0.2).box(-a, 0.8, -o, a, s - 1.2, o),
    e
      .col(fP)
      .mat(0.85, 0, 0.14, lP)
      .box(-a, s - 1.2, -o, a, s, o, t.plaster, 2, 1.2));
  let u = Math.max(2, Math.round((2 * a) / 3.2));
  for (let t = 0; t <= u; t++)
    zP(e, -a + (2 * a * t) / u, -o - 0.05, 0.8, s, 0.24, 0.2);
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
    RP(e, -a, -o, a, o, s, s + 0.8, 0.5),
    LP(e, -a - 1.2, -o - 1.2, a + 1.2, o + 1.2, s + 0.78, 0.35),
    MP(e),
    lC(e, 0, 0, s + 0.65, a + 2.2, o + 2.2, {
      ...jP(t),
      rise: c,
      curve: 1.4,
      sori: 0.55,
      thick: 0.32,
      eave: 1.6,
      ridgeH: 0.6,
      tg: 0.45,
      gableColor: uP,
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
function Zbe(e, t, n, r) {
  let i = e.sub(n, 0, r, -cP / 2),
    a = 4.6,
    o = 1.9,
    s = 4.8;
  (e
    .col(mP)
    .mat(0.9, 0, 0.05, lP)
    .box(-5.2, 0, -2.6, 5.2, 0.2, 2.6, t.granite, 2, 0.2),
    e.floor(-5.2, -2.6, 5.2, 2.6, 0.2));
  for (let t of [-4.6, -1.9, o, a])
    for (let n of [-1.9, 0, 1.9])
      (zP(e, t, n, 0.2, s, n === 0 ? 0.28 : 0.22, 0.2),
        e.pole(t, n, 0.32, 0, s));
  for (let n of [-1, 1]) {
    let r = Math.min(n * o, n * a),
      i = Math.max(n * o, n * a);
    if (
      (NP(e, 0.2, 0.95).box(r, 0.2, -0.1, i, 2.2, 0.1),
      e
        .col(fP)
        .mat(0.85, 0, 0.12, lP)
        .box(r, 2.2, -0.08, i, s, 0.08, t.plaster, 2, 2.6),
      e
        .col(2837050)
        .mat(0.7, 0, 0.08, lP)
        .box(r + 0.15, 0.2, -1.7, i - 0.15, 0.8, -0.1),
      BP(
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
  NP(e, 0.16);
  for (let t of [-1.9, 0, 1.9])
    e.box(-4.6 - 0.3, s, t - 0.18, 4.8999999999999995, 5.3, t + 0.18);
  (RP(e, -4.6 - 0.3, -2.1, 4.8999999999999995, 2.1, 5.3, 6, 0.5),
    LP(e, -5.6, -3.2, 5.6, 3.2, 5.949999999999999, 0.35),
    MP(e),
    cC(e, 0, 0, 5.75, 6.6, 4.4, {
      ...jP(t, gP),
      rise: 3,
      curve: 1.3,
      sori: 0.25,
      thick: 0.35,
      eave: 1.8,
      ridgeH: 0.6,
      wallY: 5.75,
      wallInset: 1.6,
      wallColor: uP,
      rows: 5,
    }),
    e.leave(i));
}
function Qbe(e, t, n, r) {
  if (
    (e.push().col(9077364).mat(0.95, 0, 0.03, lP),
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
      let i = (t / 7) * cP * 2 + 0.4,
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
      NP(e, 0.2).cylY(n + t * 1.6, r + i * 1.6, 2.4, 6.4, 0.16, 8);
  (e.push().col(5986888).mat(0.5, 0.4, 0.06, lP),
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
    NP(e, 0.16).box(n - 1.8, 6.2, r - 1.8, n + 1.8, 6.6, r + 1.8),
    MP(e),
    lC(e, n, r, 6.5, 3.4, 3.4, {
      ...jP(t),
      rise: 2.6,
      curve: 1.4,
      sori: 0.5,
      thick: 0.28,
      eave: 1.2,
      ridgeH: 0.45,
      tg: 0.45,
      gableColor: uP,
      rows: 4,
    }),
    e.pole(n, r, 6, 0, 2.4));
}
