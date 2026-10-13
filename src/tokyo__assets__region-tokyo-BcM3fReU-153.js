// tokyo__assets__region-tokyo-BcM3fReU 153 — col
// Lines 65390-65682 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function* jte(e, t) {
  let n = t.c(`granite`),
    r = t.c(`plaster`),
    i = CI.zf,
    a = CI.zb,
    o = CI.x1;
  (e.col(jI).mat(0.8, 0, 0.1, Y),
    e.wall(CI.x0, i, uL.o0, i, 0, BI, n, 3, 1.4),
    e.wall(uL.o1, i, o, i, 0, BI, n, 3, 1.4),
    e.wall(uL.o0, i, uL.o1, i, uL.open, BI, n, 3, 1.4),
    e.wall(o, i, o, TI.base, 0, XI, n, 3, 1.4),
    e.panel(uL.o0, i, uL.o0, i - 0.6, 0, uL.open),
    e.panel(uL.o1, i - 0.6, uL.o1, i, 0, uL.open),
    e.col(16777215).mat(0.3, 0.2, 0.6, Y),
    e.panel(
      -106.8,
      i + 0.02,
      -102.2,
      i + 0.02,
      0.4,
      3.6,
      t.A.sub(`uenoMisc`, ...HE.shop),
    ),
    mL(e, t, QI, i, uL.bay0, i),
    mL(e, t, uL.bay1, i, o, i));
  let s = i + 0.5;
  (mL(e, t, uL.bay0, s, uL.bay1, s, BI, 10.8),
    e.col(kI).mat(0.85, 0, 0.3, Y),
    e.wall(uL.bay0, s, uL.bay1, s, 10.8, ZI, r, 6, 6, 0.1),
    e.panel(uL.bay0, i, uL.bay0, s, BI, ZI),
    e.panel(uL.bay1, s, uL.bay1, i, BI, ZI),
    e.flat(uL.bay0, i, uL.bay1, s, ZI));
  let c = (uL.bay0 + uL.bay1) / 2;
  e.col(16777215).mat(0.6, 0, 0.5, Y);
  for (let n of [-2.6, 0, 2.6])
    e.panel(
      c + n - 0.85,
      s + 0.03,
      c + n + 0.85,
      s + 0.03,
      11.2,
      14.6,
      t.A.sub(`uenoMisc`, ...HE.decoWindow),
    );
  (e.panel(
    c - 0.7,
    s + 0.03,
    c + 0.7,
    s + 0.03,
    16.3,
    17.7,
    t.A.sub(`uenoMisc`, ...HE.clock),
  ),
    e.col(AI).mat(0.8, 0, 0.1, Y),
    e.sweep([uL.bay0, s, uL.bay1, s], VD(17.9, 0.3, 0.5), !1),
    yield,
    mL(e, t, QI, a, QI, i, 8.6, YI),
    mL(e, t, o, a, QI, a, BI, YI),
    e.col(jI).mat(0.8, 0, 0.08, Y),
    e.wall(o, a, QI, a, 0, BI, n, 3, 1.4),
    e.col(AI).mat(0.8, 0, 0.1, Y),
    e.sweep([QI, i, o, i, o, a, QI, a], VD(YI, 0.35, 0.8000000000000007), !0),
    e.col(10131346).mat(0.9, 0, 0, 0),
    e.flat(QI, a, o, i, 16.6),
    e.col(14277334).mat(0.5, 0.3, 0.05, 1),
    e.box(uL.can0, uL.open, uL.canZ, uL.can1, uL.open + 0.95, i),
    e.col(16777215).mat(0.4, 0, 0.6, Y));
  let l = (uL.o0 + uL.o1) / 2;
  if (
    (e.panel(
      l - 3.8,
      uL.canZ + 0.02,
      l + 3.8,
      uL.canZ + 0.02,
      uL.open + 0.02,
      uL.open + 0.93,
      t.c(`uenoSign`),
    ),
    e.col(16774364).mat(0.4, 0, 0.75, 1),
    !e.coarse)
  )
    for (let t = uL.can0 + 1.5; t < uL.can1 - 1; t += 2.4)
      e.flat(
        t,
        uL.canZ + 1.2,
        t + 0.6,
        uL.canZ + 1.8,
        uL.open - 0.01,
        e.white,
        0,
        0,
        !1,
      );
  if ((e.col(10396063).mat(0.5, 0.6, 0, 0), !e.coarse))
    for (let t of [uL.can0 + 0.5, uL.can1 - 0.5])
      e.rod(t, uL.open, uL.canZ + 0.4, t, uL.open + 1.9, i - 0.02, 0.06, 4);
  (yield,
    e.col(14472907).mat(0.8, 0, 0.05, Y),
    pL(e, wI.x0, wI.zb, wI.x1, i, 0.05, t.c(`paving`), 2),
    e.col(16052714).mat(0.6, 0, 0.16, 1),
    e.flat(wI.x0, wI.zb, wI.x1, i, 5.1, e.white, 0, 0, !1),
    e.col(15327958).mat(0.8, 0, 0.1, Y),
    e.wall(wI.x0 - 0.02, wI.zf, wI.x0 - 0.02, wI.zb, 0, 5.1, r, 4, 4),
    e.wall(wI.x1, wI.zb, wI.x1, wI.zf, 3.4, 5.1, r, 4, 4),
    e.wall(wI.x0, wI.zb, wI.x1, wI.zb, 3.4, 5.1, r, 4, 4),
    e.col(16777215).mat(0.3, 0.2, 0.6, Y),
    e.wall(
      wI.x1,
      wI.zb,
      wI.x1,
      wI.zf - 0.6,
      0.05,
      3.4,
      t.A.sub(`uenoMisc`, ...HE.shop),
      4,
      3.35,
    ),
    e.wall(
      wI.x0 + 4.5,
      wI.zb,
      wI.x1,
      wI.zb,
      0.05,
      3.4,
      t.A.sub(`uenoMisc`, ...HE.shop),
      4,
      3.35,
    ),
    e.col(2762790).mat(0.9, 0, 0.3, 1),
    e.panel(wI.x0 + 0.3, wI.zb + 0.02, wI.x0 + 4.5, wI.zb + 0.02, 0.05, 3.4),
    e.col(jI).mat(0.8, 0, 0.1, Y),
    e.wall(uL.o0, i - 0.6, wI.x0, i - 0.6, 0, 5.1, n, 3, 1.4),
    e.wall(wI.x1, i - 0.6, uL.o1, i - 0.6, 0, 5.1, n, 3, 1.4),
    e.solid(wI.x1, a, o, i, 0, XI),
    e.solid(CI.x0, a, wI.x1, wI.zb, 0, XI),
    e.solid(CI.x0, wI.zb, wI.x1, i, 5.1, XI),
    e.solid(CI.x0, i - 0.6, uL.o0, i, 0, 5.1),
    e.solid(uL.o1, i - 0.6, wI.x1, i, 0, 5.1));
}
function* Mte(e, t) {
  let n = t.c(`granite`),
    r = EI.x0,
    i = EI.x1,
    a = EI.zf,
    o = EI.zb;
  if (
    (e.col(jI).mat(0.8, 0, 0.1, Y),
    e.wall(r, a, i, a, 0, BI, n, 3, 1.4),
    e.wall(i, a, i, o, 0, BI, n, 3, 1.4),
    e.wall(i, o, r, o, 0, BI, n, 3, 1.4),
    !e.coarse)
  ) {
    e.col(16777215).mat(0.6, 0.3, 0, 0);
    for (let n of [-62.5, -55])
      e.panel(
        n,
        a + 0.02,
        n + 5,
        a + 0.02,
        0.06,
        3.9,
        t.A.sub(`uenoMisc`, ...HE.shutter),
      );
    (e.col(16777215).mat(0.3, 0.2, 0.5, Y),
      e.panel(i + 0.02, -1211, i + 0.02, -1215, 0.06, 3, t.c(`doors`)));
  }
  (mL(e, t, r, a, i, a),
    mL(e, t, i, a, i, o),
    mL(e, t, i, o, r, o),
    e.col(AI).mat(0.8, 0, 0.1, Y),
    e.sweep([r, a, i, a, i, o, r, o], VD(YI, 0.35, 0.8000000000000007), !0),
    e.sweep([r, a, i, a, i, o], HD(5.3999999999999995, 0.12, 0.3), !1),
    e.col(10131346).mat(0.9, 0, 0, 0),
    e.flat(r, o, i, a, 16.6),
    e.solid(r, o, i, a, 0, XI),
    yield);
}
function* Nte(e, t) {
  let n = t.c(`paving`),
    r = DI.x0,
    i = DI.x1,
    a = TI.base,
    o = sL;
  (e.col(15656148).mat(0.8, 0, 0.02, Y),
    e.box(r, 4.85, a, i, BI, o, t.c(`white`), 0, 0, n),
    e.col(14208967).mat(0.8, 0, 0, 0),
    e.flat(r, a, i, o, 4.85, e.white, 0, 0, !1),
    e.floor(r, a, i, o, BI, BI, `deck`),
    e.floor(TI.x0 + 1.2, rL, TI.x1 - 1.2, TI.base, BI, BI, `deck`));
  let s = t.c(`plaster`),
    c = (n, r, i, a) => {
      e.col(FI).mat(0.75, 0, 0.04, Y);
      let o = Math.min(n, i),
        c = Math.min(r, a),
        l = Math.max(n, i),
        u = Math.max(r, a);
      (e.box(o, BI, c, l, 6.6499999999999995, u, s, 2.4, 2.4, t.c(`white`)),
        e.col(15261908).mat(0.7, 0, 0.04, Y),
        l - o > u - c
          ? e.rod(
              o,
              6.699999999999999,
              (c + u) / 2,
              l,
              6.699999999999999,
              (c + u) / 2,
              0.17,
              6,
            )
          : e.rod(
              (o + l) / 2,
              6.699999999999999,
              c,
              (o + l) / 2,
              6.699999999999999,
              u,
              0.17,
              6,
            ),
        e.solid(o, c, l, u, BI, 6.8, `parapet`));
    };
  (c(r, a + 0.1, r + 0.24, lL.z0),
    c(r, lL.z1, r + 0.24, o),
    c(i - 0.24, a + 0.1, i, cL.z0),
    c(r, -1158.44, i, o),
    yield);
  for (let t of Ste) {
    for (let n of [r + 0.7, i - 0.7])
      (e.col(II).mat(0.4, 0.5, 0.05, 1),
        e.box(n - 0.32, 1.6, t - 0.32, n + 0.32, 4.85, t + 0.32),
        e.col(LI).mat(0.5, 0.3, 0, 0),
        e.box(n - 0.42, -0.15, t - 0.42, n + 0.42, 1.6, t + 0.42),
        e.pole(n, t, 0.45, -0.15, 4.85));
    (e.col(II).mat(0.4, 0.5, 0.05, 1),
      e.box(r + 0.4, 4.85 - 0.7, t - 0.25, i - 0.4, 4.85, t + 0.25),
      e.coarse ||
        (e.rod(r + 0.9, 2.2, t, i - 0.9, 4.85 - 0.7, t, 0.09, 4),
        e.rod(i - 0.9, 2.2, t, r + 0.9, 4.85 - 0.7, t, 0.09, 4)));
  }
  let l = (r + i) / 2 - 1.7,
    u = (r + i) / 2 + 1.7,
    d = (u - l) / 2,
    f = (l + u) / 2,
    p = -1187.5,
    m = 7.8999999999999995,
    h = e.coarse ? 4 : 8,
    g = (e) => f - Math.cos((e / h) * Math.PI) * d,
    _ = (e) => m + Math.sin((e / h) * Math.PI) * 1.15;
  e.col(16184817).mat(0.5, 0.1, 0.1, 1);
  for (let t = 0; t < h; t++)
    fL(
      e,
      g(t),
      _(t),
      a,
      g(t + 1),
      _(t + 1),
      a,
      g(t + 1),
      _(t + 1),
      p,
      g(t),
      _(t),
      p,
    );
  if (!e.coarse) {
    e.col(14605525).mat(0.4, 0.5, 0, 0);
    for (let t = a - 2.5; t > p; t -= 2.5)
      for (let n = 0; n < h; n++)
        e.rod(g(n), _(n) + 0.03, t, g(n + 1), _(n + 1) + 0.03, t, 0.05, 4);
    for (let t = a - 1.2; t > -1187.6; t -= 4)
      for (let n of [l, u])
        (e.rod(n, BI, t, n, m, t, 0.07, 6), e.pole(n, t, 0.12, BI, m));
  }
  if ((yield, !e.coarse))
    for (let t = -1192; t > -1156.2; t -= 9)
      for (let n of [r + 0.12, i - 0.12])
        (t < cL.z1 + 1 && n > i - 1) ||
          (e.col(7106418).mat(0.5, 0.6, 0, 0),
          e.rod(n, 6.8, t, n, 9.2, t, 0.06, 6),
          e.col(16773846).mat(0.3, 0, 0.9, 1),
          e.lathe(
            n,
            t,
            [0, 9.149999999999999, 0.22, 9.3, 0.24, 9.5, 0.18, 9.7, 0, 9.75],
            8,
            0,
            e.white,
            !1,
            !0,
          ));
  (hL(e, t, cL.x1, cL.x0, cL.z0, cL.z1), hL(e, t, lL.x0, lL.x1, lL.z0, lL.z1));
}
