// tokyo/assets/region-tokyo-A7LxHjud 230 — col
// Lines 88429-88684 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* Gbe(e, t) {
  (e.col(mP).mat(0.9, 0, 0.06, lP),
    e.box(-18.2, 0, -1.5, 18.2, kP, 25.2, t.granite, 2, kP));
  for (let t = 0; t < 8; t++) {
    let n = -6.5 + (t * 5) / 8;
    e.box(-7.6, 0, n, 7.6, ((t + 1) * kP) / 8, -1.5);
  }
  (e.floor(-7.6, -6.6, 7.6, -1.5, 0, kP), e.floor(-18.2, -1.5, 18.2, 0.8, kP));
  for (let t of [-1, 1])
    e.solid(
      t > 0 ? 7.6 : -18.2,
      -1.6,
      t > 0 ? 18.2 : -7.6,
      0.39999999999999997,
      0,
      kP,
    );
  for (let t of [-7.4, -2.6, 2.6, 7.4])
    (zP(e, t, -7, 0, 9, 0.36, 0.24), e.pole(t, -7, 0.4, 0, 9));
  NP(e, 0.2).box(-8, 8.4, -7.3, 8, 9.2, -6.7);
  for (let t of [-7.4, 7.4]) NP(e, 0.2).box(t - 0.2, 8.5, -7, t + 0.2, 9.1, DP);
  yield;
  let n = [-16.8, -12.6, -8.4, -4.2, 0, 4.2, 8.4, 12.6, 16.8],
    r = 10.2;
  for (let t of n) zP(e, t, DP, kP, r, 0.42, 0.24);
  (e.col(2758160).mat(0.9, 0, 0.3, lP),
    e.panel(12.6, 3.8000000000000003, -12.6, 3.8000000000000003, kP, 8.6),
    e.col(pP).mat(0.4, 0.7, 0.55, lP),
    e.panel(4.2, 3.7, -4.2, 3.7, 4, 7),
    e
      .col(2758160)
      .mat(0.9, 0, 0.3, lP)
      .flat(-12.6, DP, 12.6, 3.8000000000000003, 8.6, e.white, 0, 0, !1));
  for (let n of [-1, 1])
    (e
      .col(2758160)
      .panel(
        n > 0 ? 12.6 : -12.6,
        n > 0 ? DP : 3.8000000000000003,
        n > 0 ? 12.6 : -12.6,
        n > 0 ? 3.8000000000000003 : DP,
        kP,
        8.6,
      ),
      e.col(5909018).mat(0.7, 0, 0.3, G),
      e.wall(
        n > 0 ? 16.8 : -12.6,
        0.65,
        n > 0 ? 12.6 : -16.8,
        0.65,
        kP,
        6.800000000000001,
        t.shoji,
        e.coarse ? 1.4 : 0.7,
        e.coarse ? 1.6 : 0.8,
      ));
  (NP(e, 0.22).box(-17.2, 8.6, 0.5, 17.2, r, 0.85),
    e
      .col(fP)
      .mat(0.85, 0, 0.16, lP)
      .panel(12.6, 0.48, -12.6, 0.48, 6.800000000000001, 8.6, t.plaster));
  for (let n of [-1, 1])
    e.col(fP).panel(
      n > 0 ? 16.8 : -12.6,
      0.64,
      n > 0 ? 12.6 : -16.8,
      0.64,
      6.800000000000001,
      8.6,
      t.plaster,
    );
  for (let [n, i, a, o] of [
    [-17.2, DP, -17.2, OP],
    [17.2, OP, 17.2, DP],
    [-17.2, OP, 17.2, OP],
  ])
    (e.col(uP, 0.95).mat(0.6, 0, 0.2, lP),
      e.wall(n, i, a, o, kP, 6, e.white, 40, 4),
      e.col(fP).mat(0.85, 0, 0.14, lP),
      e.wall(n, i, a, o, 6, r, t.plaster, 2.1, 2.1));
  if (!e.coarse) {
    e.col(5909018).mat(0.7, 0, 0.3, G);
    for (let n of [-1, 1])
      for (let r = 3.1; r < 22; r += 4.2)
        n > 0
          ? e.wall(
              17.23,
              r + 2.6,
              17.23,
              r,
              3.5999999999999996,
              5.6,
              t.shoji,
              0.75,
              0.8,
            )
          : e.wall(
              -17.23,
              r,
              -17.23,
              r + 2.6,
              3.5999999999999996,
              5.6,
              t.shoji,
              0.75,
              0.8,
            );
    for (let t of [-15, -10, 10, 15])
      NP(e, 0.2).box(t - 0.3, kP, 23.8, t + 0.3, r, 24.1);
    for (let t of [6, 12, 18])
      for (let n of [-1, 1])
        NP(e, 0.2).box(n * 17.2 - 0.3, kP, t - 0.3, n * 17.2 + 0.3, r, t + 0.3);
  }
  if (
    (e
      .push()
      .col(2761244)
      .mat(0.6, 0.2, 0, 0)
      .box(-2, 9.3, -7.55, 2, 10.4, -7.35)
      .pop(),
    e
      .push()
      .col(16777215)
      .mat(0.45, 0.3, 0.3, G)
      .panel(1.9, -7.6, -1.9, -7.6, 9.4, 10.3, t.semui)
      .pop(),
    e.coarse ||
      (e.col(5913122).mat(0.7, 0, 0.1, lP).box(-5, kP, -1.3, 5, 3.4, -0.2),
      e.col(2759698).box(-4.9, 3.4, -1.25, 4.9, 3.5, -0.25)),
    yield,
    RP(e, -17.4, 0.3, 17.4, 24.3, r, 11.799999999999999, 1.1),
    LP(e, -19.6, -2, 19.6, 26.5, 11.75, 0.42),
    LP(e, -8.6, -8, 8.6, 0.39999999999999997, 8.4, 0.4),
    MP(e),
    sC(e, 0, DP, 8.9, 9.4, 9.2, {
      ...jP(t),
      rise: 2.9,
      R: 9.4,
      curve: 1.2,
      sori: 0.35,
      thick: 0.4,
      eave: 1.6,
      ridgeH: 0,
      rows: 3,
    }),
    yield,
    lC(e, 0, 12.3, 11.6, 21.4, 15.7, {
      ...jP(t),
      rise: 16,
      curve: 1.45,
      sori: 1.4,
      thick: 0.5,
      eave: 3.4,
      ridgeH: 1.4,
      tg: 0.42,
      gableColor: uP,
      rows: 10,
    }),
    !e.coarse)
  ) {
    e.col(pP).mat(0.45, 0.4, 0.15, lP);
    let t = 15.676299999999998;
    for (let n of [-1, 1])
      e.box(
        n * t - 0.3,
        28.1,
        12,
        n * t + 0.3,
        29.700000000000003,
        12.600000000000001,
      );
  }
  (PP(e, t, 0, 8.05, -3.6, 3.6, 1.35, t.shinbashi, null),
    e.solid(-17.4, 0.39999999999999997, 17.4, 24.4, 0, 30),
    e.solid(-18.2, OP, 18.2, 25.2, 0, kP));
}
function Kbe(e, t, n) {
  (e.push().col(mP).mat(0.9, 0, 0.05, lP),
    e.box(t - 1.6, 0, n - 1.6, t + 1.6, 0.55, n + 1.6),
    e.col(hP).mat(0.5, 0.35, 0.08, lP));
  let r = e.seg(14);
  (e.lathe(
    t,
    n,
    [1, 0.55, 1.35, 1, 1.4, 1.5, 1.25, 1.85, 1.35, 1.95],
    r,
    0,
    e.white,
    !1,
    !0,
  ),
    e.col(15235130).mat(0.8, 0, 0.6, lP).disc(t, 1.8, n, 1.15, r),
    e.col(hP).mat(0.5, 0.35, 0.08, lP));
  for (let r = 0; r < 4; r++) {
    let i = cP / 4 + (r * cP) / 2;
    e.cylY(t + Math.cos(i) * 0.95, n + Math.sin(i) * 0.95, 1.9, 2.9, 0.08, 6);
  }
  (pC(e, t, n, 2.85, 1.9, {
    sides: 6,
    rise: 1,
    curve: 1.3,
    sori: 0.25,
    eave: 0.4,
    thick: 0.15,
    color: hP,
    band: 6972496,
    soffit: 3815472,
    ridgeColor: 3815472,
    ridgeH: 0.25,
    rows: 3,
    hips: 2,
    curl: 0.25,
  }),
    e
      .col(pP)
      .mat(0.35, 0.8, 0.08, lP)
      .lathe(t, n, [0.28, 3.85, 0.22, 4.1, 0.05, 4.5], 6),
    e.pop(),
    e.pole(t, n, 1.6, 0, 4.5));
}
function qbe(e, t, n, r) {
  for (let t of [-1, 1])
    for (let i of [-1, 1])
      (e
        .col(6965808)
        .mat(0.7, 0, 0.12, lP)
        .cylY(n + t * 2.6, r + i * 1.6, 0, 3.6, 0.18, 8),
        e.pole(n + t * 2.6, r + i * 1.6, 0.22, 0, 3.6));
  (e
    .col(10131084)
    .mat(0.9, 0, 0.05, lP)
    .box(n - 2, 0, r - 0.9, n + 2, 0.85, r + 0.9),
    e
      .col(5929610)
      .mat(0.15, 0.3, 0, 0)
      .flat(n - 1.8, r - 0.7, n + 1.8, r + 0.7, 0.8),
    e.solid(n - 2, r - 0.9, n + 2, r + 0.9, 0, 0.85),
    e.mat(0.6, 0.3, 0, 0),
    lC(e, n, r, 3.6, 3.9, 2.9, {
      cell: t.copper,
      color: 16777215,
      band: 6265476,
      ridgeColor: 5212786,
      soffit: 6965808,
      tile: 2,
      rise: 2.1,
      curve: 1.3,
      sori: 0.35,
      eave: 0.9,
      thick: 0.25,
      ridgeH: 0.35,
      tg: 0.45,
      gableColor: 6965808,
      rows: 4,
    }));
}
