// tokyo/assets/region-tokyo-55J_WESF 230 — col
// Lines 88338-88593 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* Mbe(e, t) {
  (e.col(fP).mat(0.9, 0, 0.06, sP),
    e.box(-18.2, 0, -1.5, 18.2, DP, 25.2, t.granite, 2, DP));
  for (let t = 0; t < 8; t++) {
    let n = -6.5 + (t * 5) / 8;
    e.box(-7.6, 0, n, 7.6, ((t + 1) * DP) / 8, -1.5);
  }
  (e.floor(-7.6, -6.6, 7.6, -1.5, 0, DP), e.floor(-18.2, -1.5, 18.2, 0.8, DP));
  for (let t of [-1, 1])
    e.solid(
      t > 0 ? 7.6 : -18.2,
      -1.6,
      t > 0 ? 18.2 : -7.6,
      0.39999999999999997,
      0,
      DP,
    );
  for (let t of [-7.4, -2.6, 2.6, 7.4])
    (LP(e, t, -7, 0, 9, 0.36, 0.24), e.pole(t, -7, 0.4, 0, 9));
  jP(e, 0.2).box(-8, 8.4, -7.3, 8, 9.2, -6.7);
  for (let t of [-7.4, 7.4]) jP(e, 0.2).box(t - 0.2, 8.5, -7, t + 0.2, 9.1, TP);
  yield;
  let n = [-16.8, -12.6, -8.4, -4.2, 0, 4.2, 8.4, 12.6, 16.8],
    r = 10.2;
  for (let t of n) LP(e, t, TP, DP, r, 0.42, 0.24);
  (e.col(2758160).mat(0.9, 0, 0.3, sP),
    e.panel(12.6, 3.8000000000000003, -12.6, 3.8000000000000003, DP, 8.6),
    e.col(dP).mat(0.4, 0.7, 0.55, sP),
    e.panel(4.2, 3.7, -4.2, 3.7, 4, 7),
    e
      .col(2758160)
      .mat(0.9, 0, 0.3, sP)
      .flat(-12.6, TP, 12.6, 3.8000000000000003, 8.6, e.white, 0, 0, !1));
  for (let n of [-1, 1])
    (e
      .col(2758160)
      .panel(
        n > 0 ? 12.6 : -12.6,
        n > 0 ? TP : 3.8000000000000003,
        n > 0 ? 12.6 : -12.6,
        n > 0 ? 3.8000000000000003 : TP,
        DP,
        8.6,
      ),
      e.col(5909018).mat(0.7, 0, 0.3, G),
      e.wall(
        n > 0 ? 16.8 : -12.6,
        0.65,
        n > 0 ? 12.6 : -16.8,
        0.65,
        DP,
        6.800000000000001,
        t.shoji,
        e.coarse ? 1.4 : 0.7,
        e.coarse ? 1.6 : 0.8,
      ));
  (jP(e, 0.22).box(-17.2, 8.6, 0.5, 17.2, r, 0.85),
    e
      .col(uP)
      .mat(0.85, 0, 0.16, sP)
      .panel(12.6, 0.48, -12.6, 0.48, 6.800000000000001, 8.6, t.plaster));
  for (let n of [-1, 1])
    e.col(uP).panel(
      n > 0 ? 16.8 : -12.6,
      0.64,
      n > 0 ? 12.6 : -16.8,
      0.64,
      6.800000000000001,
      8.6,
      t.plaster,
    );
  for (let [n, i, a, o] of [
    [-17.2, TP, -17.2, EP],
    [17.2, EP, 17.2, TP],
    [-17.2, EP, 17.2, EP],
  ])
    (e.col(cP, 0.95).mat(0.6, 0, 0.2, sP),
      e.wall(n, i, a, o, DP, 6, e.white, 40, 4),
      e.col(uP).mat(0.85, 0, 0.14, sP),
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
      jP(e, 0.2).box(t - 0.3, DP, 23.8, t + 0.3, r, 24.1);
    for (let t of [6, 12, 18])
      for (let n of [-1, 1])
        jP(e, 0.2).box(n * 17.2 - 0.3, DP, t - 0.3, n * 17.2 + 0.3, r, t + 0.3);
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
      (e.col(5913122).mat(0.7, 0, 0.1, sP).box(-5, DP, -1.3, 5, 3.4, -0.2),
      e.col(2759698).box(-4.9, 3.4, -1.25, 4.9, 3.5, -0.25)),
    yield,
    IP(e, -17.4, 0.3, 17.4, 24.3, r, 11.799999999999999, 1.1),
    FP(e, -19.6, -2, 19.6, 26.5, 11.75, 0.42),
    FP(e, -8.6, -8, 8.6, 0.39999999999999997, 8.4, 0.4),
    AP(e),
    iC(e, 0, TP, 8.9, 9.4, 9.2, {
      ...kP(t),
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
    oC(e, 0, 12.3, 11.6, 21.4, 15.7, {
      ...kP(t),
      rise: 16,
      curve: 1.45,
      sori: 1.4,
      thick: 0.5,
      eave: 3.4,
      ridgeH: 1.4,
      tg: 0.42,
      gableColor: cP,
      rows: 10,
    }),
    !e.coarse)
  ) {
    e.col(dP).mat(0.45, 0.4, 0.15, sP);
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
  (MP(e, t, 0, 8.05, -3.6, 3.6, 1.35, t.shinbashi, null),
    e.solid(-17.4, 0.39999999999999997, 17.4, 24.4, 0, 30),
    e.solid(-18.2, EP, 18.2, 25.2, 0, DP));
}
function Nbe(e, t, n) {
  (e.push().col(fP).mat(0.9, 0, 0.05, sP),
    e.box(t - 1.6, 0, n - 1.6, t + 1.6, 0.55, n + 1.6),
    e.col(pP).mat(0.5, 0.35, 0.08, sP));
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
    e.col(15235130).mat(0.8, 0, 0.6, sP).disc(t, 1.8, n, 1.15, r),
    e.col(pP).mat(0.5, 0.35, 0.08, sP));
  for (let r = 0; r < 4; r++) {
    let i = oP / 4 + (r * oP) / 2;
    e.cylY(t + Math.cos(i) * 0.95, n + Math.sin(i) * 0.95, 1.9, 2.9, 0.08, 6);
  }
  (uC(e, t, n, 2.85, 1.9, {
    sides: 6,
    rise: 1,
    curve: 1.3,
    sori: 0.25,
    eave: 0.4,
    thick: 0.15,
    color: pP,
    band: 6972496,
    soffit: 3815472,
    ridgeColor: 3815472,
    ridgeH: 0.25,
    rows: 3,
    hips: 2,
    curl: 0.25,
  }),
    e
      .col(dP)
      .mat(0.35, 0.8, 0.08, sP)
      .lathe(t, n, [0.28, 3.85, 0.22, 4.1, 0.05, 4.5], 6),
    e.pop(),
    e.pole(t, n, 1.6, 0, 4.5));
}
function Pbe(e, t, n, r) {
  for (let t of [-1, 1])
    for (let i of [-1, 1])
      (e
        .col(6965808)
        .mat(0.7, 0, 0.12, sP)
        .cylY(n + t * 2.6, r + i * 1.6, 0, 3.6, 0.18, 8),
        e.pole(n + t * 2.6, r + i * 1.6, 0.22, 0, 3.6));
  (e
    .col(10131084)
    .mat(0.9, 0, 0.05, sP)
    .box(n - 2, 0, r - 0.9, n + 2, 0.85, r + 0.9),
    e
      .col(5929610)
      .mat(0.15, 0.3, 0, 0)
      .flat(n - 1.8, r - 0.7, n + 1.8, r + 0.7, 0.8),
    e.solid(n - 2, r - 0.9, n + 2, r + 0.9, 0, 0.85),
    e.mat(0.6, 0.3, 0, 0),
    oC(e, n, r, 3.6, 3.9, 2.9, {
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
