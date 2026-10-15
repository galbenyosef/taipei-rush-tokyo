// tokyo/assets/region-tokyo-55J_WESF 185 — col
// Lines 74677-74875 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* Mge(e, t, n) {
  let r = e.sub(0, 0, FD, 0),
    i = [-5.6, -2.1, 2.1, 5.6],
    a = -2.2,
    o = 2.2,
    s = 4.7;
  (e.col(HD).mat(0.9, 0, 0.04, 1),
    e.box(-6.7, 0, -3.1, 6.7, 0.25, 3.1, t.c(`granite`), 2, 0.25),
    e.col(RD).mat(0.5, 0, 0.07, 1));
  for (let t of i)
    for (let n of [a, o])
      (e.cylY(t, n, 0.25, s, 0.3, 10, 0.28, !1), e.pole(t, n, 0.34, 0, s));
  if (!e.coarse)
    for (let t of i)
      for (let [n, r] of [
        [a, -1],
        [o, 1],
      ]) {
        let i = n + r * 0.55;
        (e.col(BD).mat(0.3, 0.85, 0.12, 1),
          e.obox(t, 4.65, i, 0.24, 0.26, 0.45),
          e.lathe(
            t,
            i + r * 0.38,
            [0.05, 4.45, 0.22, 4.58, 0.2, 4.88, 0.04, 4.96],
            6,
          ),
          e.col(3108774).mat(0.6, 0, 0.08, 1),
          e.obox(t, 4.78, i - r * 0.05, 0.3, 0.22, 0.2));
      }
  yield;
  for (let t of [-1, 1]) {
    let n = t * 2.1,
      r = t * 5.6,
      i = Math.min(n, r),
      c = Math.max(n, r);
    (e.col(RD).mat(0.55, 0, 0.18, 1),
      e.box(i, 0.25, -0.12, c, s, 0.12),
      e.box(t > 0 ? c - 0.15 : i, 0.25, a, t > 0 ? c : i + 0.15, s, o),
      e.box(t > 0 ? i : c - 0.15, 0.25, a, t > 0 ? i + 0.15 : c, s, o));
    for (let [n, r, s] of [
      [a, -0.12, -1],
      [0.12, o, 1],
    ]) {
      e.col(wge).mat(0.7, 0, 0.1, 1);
      let a = s < 0 ? n : r;
      if (
        (e.box(
          i + 0.15,
          0.25,
          Math.min(a, a - s * 1.2),
          c - 0.15,
          1.15,
          Math.max(a, a - s * 1.2),
        ),
        !e.coarse)
      ) {
        (e.col(2046508).mat(0.7, 0, 0, 0),
          e.box(i + 0.15, 1.95, a - 0.04, c - 0.15, 2.05, a + 0.04));
        for (let t = i + 0.3; t < c - 0.2; t += 0.3)
          s < 0
            ? e.panel(t + 0.06, a - 0.03, t - 0.06, a - 0.03, 1.15, 2)
            : e.panel(t - 0.06, a + 0.03, t + 0.06, a + 0.03, 1.15, 2);
        let n = (i + c) / 2;
        s < 0
          ? Age(e, n, 1.15, a + 0.75, t > 0 ? 9057830 : 2762276)
          : (jge(e, n, 1.15, a - 0.75, -t),
            e
              .col(13223616)
              .mat(0.4, 0.6, 0.2, 1)
              .box(i + 0.3, 3.3, 0.12, c - 0.3, 3.75, 0.2));
      }
    }
    e.solid(
      t > 0 ? i : -7,
      -2.3000000000000003,
      t > 0 ? 7 : c,
      2.3000000000000003,
      0,
      s,
    );
  }
  (e.col(RD).mat(0.6, 0, 0.35, 1),
    e.flat(-2.1, a, 2.1, o, s, e.white, 0, 0, !1),
    e.col(16777215).mat(0.7, 0, 0.3, G),
    e.panel(2.05, -2.52, -2.05, -2.52, 3.95, s, n.curtain),
    e.panel(-2.05, 2.52, 2.05, 2.52, 3.95, s, n.curtain),
    e.floor(-6.7, -3.1, 6.7, 3.1, 0.25),
    yield,
    e.col(RD).mat(0.55, 0, 0.07, 1),
    e.box(-5.9, s, -2.5, 5.9, 6.5, 2.5),
    e.col(16777215).mat(0.6, 0, 0.3, G),
    XD(e, n.frieze, -5.9, -2.5, 5.9, 2.5, 4.95, 5.45, 2.4),
    e.mat(0.55, 0, 0.1, 1),
    YD(e, -5.9, -2.5, 5.9, 2.5, 5.5, 6.45, 0.95, 0.9, RD, n.rafters),
    e.col(RD).mat(0.55, 0, 0.09, 1),
    e.box(-6.9, 6.45, -3.45, 6.9, 6.72, 3.45, e.white, 0, 0, null, !0),
    Ege(e, -6.8, -3.35, 6.8, 3.35, 6.72, RD),
    yield,
    e.col(RD).mat(0.55, 0, 0.06, 1),
    e.box(-5.2, 6.72, -1.9, 5.2, 9.65, 1.9));
  for (let t of [-5.2, -1.9, 1.9, 5.2])
    for (let n of [-1.95, 1.95]) e.cylY(t, n, 6.72, 9.6, 0.26, 8, 0.25, !1);
  e.col(16777215).mat(0.4, 0.3, 0.35, G);
  for (let [t, r] of [
    [-1.93, -1],
    [1.93, 1],
  ]) {
    let i = (n, i, a, o, s) =>
      r < 0 ? e.panel(i, t, n, t, a, o, s) : e.panel(n, t, i, t, a, o, s);
    (i(2.15, 4.95, 7.25, 8.95, r < 0 ? n.dragon : n.phoenix),
      i(-4.95, -2.15, 7.25, 8.95, r < 0 ? n.phoenix : n.dragon),
      i(-1.65, 1.65, 6.9, 9, n.door));
  }
  if (
    (XD(e, n.frieze, -5.2, -1.93, 5.2, 1.93, 9.1, 9.55, 2.4),
    e.col(RD).mat(0.55, 0, 0.13, 1),
    e.box(-5.6, 9.65, -2.3, 5.6, 10.85, 2.3),
    YD(e, -5.6, -2.3, 5.6, 2.3, 9.7, 10.8, 0.9, 1.35, RD, n.rafters),
    e.col(16777215).mat(0.6, 0, 0.45, G),
    e.flat(-7.2, -4.1, 7.2, 4.1, 10.87, n.rafters, 3.6, 1.4, !1),
    e.col(16777215).mat(0.45, 0.3, 0.35, G),
    e.panel(0.72, -2.95, -0.72, -2.95, 8, 10, n.gaku),
    e.coarse || e.col(2762274).box(-0.05, 10, -2.92, 0.05, 10.3, -2.8),
    yield,
    qD(e),
    oC(e, 0, 0, 10.9, 8.7, 5.5, {
      ...KD(t),
      rise: 4.7,
      curve: 1.35,
      sori: 0.65,
      thick: 0.42,
      eave: 2.4,
      ridgeH: 0.85,
      tg: 0.47,
      gableColor: RD,
      rows: 6,
    }),
    !e.coarse)
  ) {
    e.col(BD).mat(0.3, 0.85, 0.1, 1);
    let t = 6.64575;
    for (let n of [-1, 1])
      (e
        .col(5212786)
        .mat(0.55, 0.3, 0, 0)
        .box(n * t - 0.18, 10.9 + 4.7 - 0.2, -0.45, n * t + 0.18, 16.35, 0.45),
        e
          .col(BD)
          .mat(0.3, 0.85, 0.1, 1)
          .box(n * t - 0.2, 15.75, -0.16, n * t + 0.2, 16.1, 0.16),
        e.box(
          n * 6.695749999999999 - 0.06,
          13,
          -0.55,
          n * 6.695749999999999 + 0.06,
          14.3,
          0.55,
        ));
  }
  (ZD(e, n, 6.55, 0.25, -3.2, 1.9),
    ZD(e, n, -6.55, 0.25, -3.2, 1.9),
    e.leave(r));
}
function Nge(e, t) {
  for (let n of [-1, 1]) {
    let r = n * 6.95,
      i = n * 16.3,
      a = Math.min(r, i),
      o = Math.max(r, i),
      s = -8.8,
      c = -4.8;
    if (
      (e.col(RD).mat(0.6, 0, 0.18, 1), e.box(a, 0, s, o, 3.4, c), !e.coarse)
    ) {
      e.col(7319692).mat(0.7, 0, 0.2, G);
      for (let n = a + 0.8; n < o - 1.5; n += 2.6)
        (e.wall(n + 1.8, -8.83, n, -8.83, 1, 2.6, t.c(`shoji`), 0.9, 0.8),
          e.wall(n, -4.77, n + 1.8, -4.77, 1, 2.6, t.c(`shoji`), 0.9, 0.8));
      e.col(HD)
        .mat(0.9, 0, 0, 0)
        .box(a - 0.05, 0, -8.850000000000001, o + 0.05, 0.5, -4.75);
    }
    (qD(e),
      oC(e, (a + o) / 2, FD, 3.4, (o - a) / 2 + 0.9, 2.9, {
        ...KD(t),
        rise: 2.3,
        curve: 1.3,
        sori: 0.3,
        eave: 0.9,
        thick: 0.3,
        ridgeH: 0.45,
        tg: 0.5,
        gableColor: RD,
        rows: 4,
      }),
      e.solid(a, Math.min(s, PD), o, c, 0, 6));
  }
}
