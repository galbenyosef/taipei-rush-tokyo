// tokyo/assets/region-tokyo-55J_WESF 195 — col
// Lines 77936-78228 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* k_e(e, t) {
  let n = t.c(`granite`),
    r = t.c(`plaster`),
    i = YO.zf,
    a = YO.zb,
    o = YO.x1;
  (e.col(rk).mat(0.8, 0, 0.1, G),
    e.wall(YO.x0, i, jk.o0, i, 0, sk, n, 3, 1.4),
    e.wall(jk.o1, i, o, i, 0, sk, n, 3, 1.4),
    e.wall(jk.o0, i, jk.o1, i, jk.open, sk, n, 3, 1.4),
    e.wall(o, i, o, ZO.base, 0, _k, n, 3, 1.4),
    e.panel(jk.o0, i, jk.o0, i - 0.6, 0, jk.open),
    e.panel(jk.o1, i - 0.6, jk.o1, i, 0, jk.open),
    e.col(16777215).mat(0.3, 0.2, 0.6, G),
    e.panel(
      -106.8,
      i + 0.02,
      -102.2,
      i + 0.02,
      0.4,
      3.6,
      t.A.sub(`uenoMisc`, ...Yx.shop),
    ),
    Fk(e, t, yk, i, jk.bay0, i),
    Fk(e, t, jk.bay1, i, o, i));
  let s = i + 0.5;
  (Fk(e, t, jk.bay0, s, jk.bay1, s, sk, 10.8),
    e.col(tk).mat(0.85, 0, 0.3, G),
    e.wall(jk.bay0, s, jk.bay1, s, 10.8, vk, r, 6, 6, 0.1),
    e.panel(jk.bay0, i, jk.bay0, s, sk, vk),
    e.panel(jk.bay1, s, jk.bay1, i, sk, vk),
    e.flat(jk.bay0, i, jk.bay1, s, vk));
  let c = (jk.bay0 + jk.bay1) / 2;
  e.col(16777215).mat(0.6, 0, 0.5, G);
  for (let n of [-2.6, 0, 2.6])
    e.panel(
      c + n - 0.85,
      s + 0.03,
      c + n + 0.85,
      s + 0.03,
      11.2,
      14.6,
      t.A.sub(`uenoMisc`, ...Yx.decoWindow),
    );
  (e.panel(
    c - 0.7,
    s + 0.03,
    c + 0.7,
    s + 0.03,
    16.3,
    17.7,
    t.A.sub(`uenoMisc`, ...Yx.clock),
  ),
    e.col(nk).mat(0.8, 0, 0.1, G),
    e.sweep([jk.bay0, s, jk.bay1, s], pC(17.9, 0.3, 0.5), !1),
    yield,
    Fk(e, t, yk, a, yk, i, 8.6, gk),
    Fk(e, t, o, a, yk, a, sk, gk),
    e.col(rk).mat(0.8, 0, 0.08, G),
    e.wall(o, a, yk, a, 0, sk, n, 3, 1.4),
    e.col(nk).mat(0.8, 0, 0.1, G),
    e.sweep([yk, i, o, i, o, a, yk, a], pC(gk, 0.35, 0.8000000000000007), !0),
    e.col(10131346).mat(0.9, 0, 0, 0),
    e.flat(yk, a, o, i, 16.6),
    e.col(14277334).mat(0.5, 0.3, 0.05, 1),
    e.box(jk.can0, jk.open, jk.canZ, jk.can1, jk.open + 0.95, i),
    e.col(16777215).mat(0.4, 0, 0.6, G));
  let l = (jk.o0 + jk.o1) / 2;
  if (
    (e.panel(
      l - 3.8,
      jk.canZ + 0.02,
      l + 3.8,
      jk.canZ + 0.02,
      jk.open + 0.02,
      jk.open + 0.93,
      t.c(`uenoSign`),
    ),
    e.col(16774364).mat(0.4, 0, 0.75, 1),
    !e.coarse)
  )
    for (let t = jk.can0 + 1.5; t < jk.can1 - 1; t += 2.4)
      e.flat(
        t,
        jk.canZ + 1.2,
        t + 0.6,
        jk.canZ + 1.8,
        jk.open - 0.01,
        e.white,
        0,
        0,
        !1,
      );
  if ((e.col(10396063).mat(0.5, 0.6, 0, 0), !e.coarse))
    for (let t of [jk.can0 + 0.5, jk.can1 - 0.5])
      e.rod(t, jk.open, jk.canZ + 0.4, t, jk.open + 1.9, i - 0.02, 0.06, 4);
  (yield,
    e.col(14472907).mat(0.8, 0, 0.05, G),
    Pk(e, XO.x0, XO.zb, XO.x1, i, 0.05, t.c(`paving`), 2),
    e.col(16052714).mat(0.6, 0, 0.16, 1),
    e.flat(XO.x0, XO.zb, XO.x1, i, 5.1, e.white, 0, 0, !1),
    e.col(15327958).mat(0.8, 0, 0.1, G),
    e.wall(XO.x0 - 0.02, XO.zf, XO.x0 - 0.02, XO.zb, 0, 5.1, r, 4, 4),
    e.wall(XO.x1, XO.zb, XO.x1, XO.zf, 3.4, 5.1, r, 4, 4),
    e.wall(XO.x0, XO.zb, XO.x1, XO.zb, 3.4, 5.1, r, 4, 4),
    e.col(16777215).mat(0.3, 0.2, 0.6, G),
    e.wall(
      XO.x1,
      XO.zb,
      XO.x1,
      XO.zf - 0.6,
      0.05,
      3.4,
      t.A.sub(`uenoMisc`, ...Yx.shop),
      4,
      3.35,
    ),
    e.wall(
      XO.x0 + 4.5,
      XO.zb,
      XO.x1,
      XO.zb,
      0.05,
      3.4,
      t.A.sub(`uenoMisc`, ...Yx.shop),
      4,
      3.35,
    ),
    e.col(2762790).mat(0.9, 0, 0.3, 1),
    e.panel(XO.x0 + 0.3, XO.zb + 0.02, XO.x0 + 4.5, XO.zb + 0.02, 0.05, 3.4),
    e.col(rk).mat(0.8, 0, 0.1, G),
    e.wall(jk.o0, i - 0.6, XO.x0, i - 0.6, 0, 5.1, n, 3, 1.4),
    e.wall(XO.x1, i - 0.6, jk.o1, i - 0.6, 0, 5.1, n, 3, 1.4),
    e.solid(XO.x1, a, o, i, 0, _k),
    e.solid(YO.x0, a, XO.x1, XO.zb, 0, _k),
    e.solid(YO.x0, XO.zb, XO.x1, i, 5.1, _k),
    e.solid(YO.x0, i - 0.6, jk.o0, i, 0, 5.1),
    e.solid(jk.o1, i - 0.6, XO.x1, i, 0, 5.1));
}
function* A_e(e, t) {
  let n = t.c(`granite`),
    r = QO.x0,
    i = QO.x1,
    a = QO.zf,
    o = QO.zb;
  if (
    (e.col(rk).mat(0.8, 0, 0.1, G),
    e.wall(r, a, i, a, 0, sk, n, 3, 1.4),
    e.wall(i, a, i, o, 0, sk, n, 3, 1.4),
    e.wall(i, o, r, o, 0, sk, n, 3, 1.4),
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
        t.A.sub(`uenoMisc`, ...Yx.shutter),
      );
    (e.col(16777215).mat(0.3, 0.2, 0.5, G),
      e.panel(i + 0.02, -1211, i + 0.02, -1215, 0.06, 3, t.c(`doors`)));
  }
  (Fk(e, t, r, a, i, a),
    Fk(e, t, i, a, i, o),
    Fk(e, t, i, o, r, o),
    e.col(nk).mat(0.8, 0, 0.1, G),
    e.sweep([r, a, i, a, i, o, r, o], pC(gk, 0.35, 0.8000000000000007), !0),
    e.sweep([r, a, i, a, i, o], mC(5.3999999999999995, 0.12, 0.3), !1),
    e.col(10131346).mat(0.9, 0, 0, 0),
    e.flat(r, o, i, a, 16.6),
    e.solid(r, o, i, a, 0, _k),
    yield);
}
function* j_e(e, t) {
  let n = t.c(`paving`),
    r = $O.x0,
    i = $O.x1,
    a = ZO.base,
    o = Ok;
  (e.col(15656148).mat(0.8, 0, 0.02, G),
    e.box(r, 4.85, a, i, sk, o, t.c(`white`), 0, 0, n),
    e.col(14208967).mat(0.8, 0, 0, 0),
    e.flat(r, a, i, o, 4.85, e.white, 0, 0, !1),
    e.floor(r, a, i, o, sk, sk, `deck`),
    e.floor(ZO.x0 + 1.2, wk, ZO.x1 - 1.2, ZO.base, sk, sk, `deck`));
  let s = t.c(`plaster`),
    c = (n, r, i, a) => {
      e.col(ak).mat(0.75, 0, 0.04, G);
      let o = Math.min(n, i),
        c = Math.min(r, a),
        l = Math.max(n, i),
        u = Math.max(r, a);
      (e.box(o, sk, c, l, 6.6499999999999995, u, s, 2.4, 2.4, t.c(`white`)),
        e.col(15261908).mat(0.7, 0, 0.04, G),
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
        e.solid(o, c, l, u, sk, 6.8, `parapet`));
    };
  (c(r, a + 0.1, r + 0.24, Ak.z0),
    c(r, Ak.z1, r + 0.24, o),
    c(i - 0.24, a + 0.1, i, kk.z0),
    c(r, -1158.44, i, o),
    yield);
  for (let t of b_e) {
    for (let n of [r + 0.7, i - 0.7])
      (e.col(ok).mat(0.4, 0.5, 0.05, 1),
        e.box(n - 0.32, 1.6, t - 0.32, n + 0.32, 4.85, t + 0.32),
        e.col(m_e).mat(0.5, 0.3, 0, 0),
        e.box(n - 0.42, -0.15, t - 0.42, n + 0.42, 1.6, t + 0.42),
        e.pole(n, t, 0.45, -0.15, 4.85));
    (e.col(ok).mat(0.4, 0.5, 0.05, 1),
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
    Nk(
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
        (e.rod(n, sk, t, n, m, t, 0.07, 6), e.pole(n, t, 0.12, sk, m));
  }
  if ((yield, !e.coarse))
    for (let t = -1192; t > -1156.2; t -= 9)
      for (let n of [r + 0.12, i - 0.12])
        (t < kk.z1 + 1 && n > i - 1) ||
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
  (Ik(e, t, kk.x1, kk.x0, kk.z0, kk.z1), Ik(e, t, Ak.x0, Ak.x1, Ak.z0, Ak.z1));
}
