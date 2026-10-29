// tokyo/assets/region-tokyo-A7LxHjud 195 — col
// Lines 78027-78319 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* H_e(e, t) {
  let n = t.c(`granite`),
    r = t.c(`plaster`),
    i = ZO.zf,
    a = ZO.zb,
    o = ZO.x1;
  (e.col(ak).mat(0.8, 0, 0.1, G),
    e.wall(ZO.x0, i, Nk.o0, i, 0, lk, n, 3, 1.4),
    e.wall(Nk.o1, i, o, i, 0, lk, n, 3, 1.4),
    e.wall(Nk.o0, i, Nk.o1, i, Nk.open, lk, n, 3, 1.4),
    e.wall(o, i, o, $O.base, 0, yk, n, 3, 1.4),
    e.panel(Nk.o0, i, Nk.o0, i - 0.6, 0, Nk.open),
    e.panel(Nk.o1, i - 0.6, Nk.o1, i, 0, Nk.open),
    e.col(16777215).mat(0.3, 0.2, 0.6, G),
    e.panel(
      -106.8,
      i + 0.02,
      -102.2,
      i + 0.02,
      0.4,
      3.6,
      t.A.sub(`uenoMisc`, ...Qx.shop),
    ),
    Lk(e, t, xk, i, Nk.bay0, i),
    Lk(e, t, Nk.bay1, i, o, i));
  let s = i + 0.5;
  (Lk(e, t, Nk.bay0, s, Nk.bay1, s, lk, 10.8),
    e.col(rk).mat(0.85, 0, 0.3, G),
    e.wall(Nk.bay0, s, Nk.bay1, s, 10.8, bk, r, 6, 6, 0.1),
    e.panel(Nk.bay0, i, Nk.bay0, s, lk, bk),
    e.panel(Nk.bay1, s, Nk.bay1, i, lk, bk),
    e.flat(Nk.bay0, i, Nk.bay1, s, bk));
  let c = (Nk.bay0 + Nk.bay1) / 2;
  e.col(16777215).mat(0.6, 0, 0.5, G);
  for (let n of [-2.6, 0, 2.6])
    e.panel(
      c + n - 0.85,
      s + 0.03,
      c + n + 0.85,
      s + 0.03,
      11.2,
      14.6,
      t.A.sub(`uenoMisc`, ...Qx.decoWindow),
    );
  (e.panel(
    c - 0.7,
    s + 0.03,
    c + 0.7,
    s + 0.03,
    16.3,
    17.7,
    t.A.sub(`uenoMisc`, ...Qx.clock),
  ),
    e.col(ik).mat(0.8, 0, 0.1, G),
    e.sweep([Nk.bay0, s, Nk.bay1, s], gC(17.9, 0.3, 0.5), !1),
    yield,
    Lk(e, t, xk, a, xk, i, 8.6, vk),
    Lk(e, t, o, a, xk, a, lk, vk),
    e.col(ak).mat(0.8, 0, 0.08, G),
    e.wall(o, a, xk, a, 0, lk, n, 3, 1.4),
    e.col(ik).mat(0.8, 0, 0.1, G),
    e.sweep([xk, i, o, i, o, a, xk, a], gC(vk, 0.35, 0.8000000000000007), !0),
    e.col(10131346).mat(0.9, 0, 0, 0),
    e.flat(xk, a, o, i, 16.6),
    e.col(14277334).mat(0.5, 0.3, 0.05, 1),
    e.box(Nk.can0, Nk.open, Nk.canZ, Nk.can1, Nk.open + 0.95, i),
    e.col(16777215).mat(0.4, 0, 0.6, G));
  let l = (Nk.o0 + Nk.o1) / 2;
  if (
    (e.panel(
      l - 3.8,
      Nk.canZ + 0.02,
      l + 3.8,
      Nk.canZ + 0.02,
      Nk.open + 0.02,
      Nk.open + 0.93,
      t.c(`uenoSign`),
    ),
    e.col(16774364).mat(0.4, 0, 0.75, 1),
    !e.coarse)
  )
    for (let t = Nk.can0 + 1.5; t < Nk.can1 - 1; t += 2.4)
      e.flat(
        t,
        Nk.canZ + 1.2,
        t + 0.6,
        Nk.canZ + 1.8,
        Nk.open - 0.01,
        e.white,
        0,
        0,
        !1,
      );
  if ((e.col(10396063).mat(0.5, 0.6, 0, 0), !e.coarse))
    for (let t of [Nk.can0 + 0.5, Nk.can1 - 0.5])
      e.rod(t, Nk.open, Nk.canZ + 0.4, t, Nk.open + 1.9, i - 0.02, 0.06, 4);
  (yield,
    e.col(14472907).mat(0.8, 0, 0.05, G),
    Ik(e, QO.x0, QO.zb, QO.x1, i, 0.05, t.c(`paving`), 2),
    e.col(16052714).mat(0.6, 0, 0.16, 1),
    e.flat(QO.x0, QO.zb, QO.x1, i, 5.1, e.white, 0, 0, !1),
    e.col(15327958).mat(0.8, 0, 0.1, G),
    e.wall(QO.x0 - 0.02, QO.zf, QO.x0 - 0.02, QO.zb, 0, 5.1, r, 4, 4),
    e.wall(QO.x1, QO.zb, QO.x1, QO.zf, 3.4, 5.1, r, 4, 4),
    e.wall(QO.x0, QO.zb, QO.x1, QO.zb, 3.4, 5.1, r, 4, 4),
    e.col(16777215).mat(0.3, 0.2, 0.6, G),
    e.wall(
      QO.x1,
      QO.zb,
      QO.x1,
      QO.zf - 0.6,
      0.05,
      3.4,
      t.A.sub(`uenoMisc`, ...Qx.shop),
      4,
      3.35,
    ),
    e.wall(
      QO.x0 + 4.5,
      QO.zb,
      QO.x1,
      QO.zb,
      0.05,
      3.4,
      t.A.sub(`uenoMisc`, ...Qx.shop),
      4,
      3.35,
    ),
    e.col(2762790).mat(0.9, 0, 0.3, 1),
    e.panel(QO.x0 + 0.3, QO.zb + 0.02, QO.x0 + 4.5, QO.zb + 0.02, 0.05, 3.4),
    e.col(ak).mat(0.8, 0, 0.1, G),
    e.wall(Nk.o0, i - 0.6, QO.x0, i - 0.6, 0, 5.1, n, 3, 1.4),
    e.wall(QO.x1, i - 0.6, Nk.o1, i - 0.6, 0, 5.1, n, 3, 1.4),
    e.solid(QO.x1, a, o, i, 0, yk),
    e.solid(ZO.x0, a, QO.x1, QO.zb, 0, yk),
    e.solid(ZO.x0, QO.zb, QO.x1, i, 5.1, yk),
    e.solid(ZO.x0, i - 0.6, Nk.o0, i, 0, 5.1),
    e.solid(Nk.o1, i - 0.6, QO.x1, i, 0, 5.1));
}
function* U_e(e, t) {
  let n = t.c(`granite`),
    r = ek.x0,
    i = ek.x1,
    a = ek.zf,
    o = ek.zb;
  if (
    (e.col(ak).mat(0.8, 0, 0.1, G),
    e.wall(r, a, i, a, 0, lk, n, 3, 1.4),
    e.wall(i, a, i, o, 0, lk, n, 3, 1.4),
    e.wall(i, o, r, o, 0, lk, n, 3, 1.4),
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
        t.A.sub(`uenoMisc`, ...Qx.shutter),
      );
    (e.col(16777215).mat(0.3, 0.2, 0.5, G),
      e.panel(i + 0.02, -1211, i + 0.02, -1215, 0.06, 3, t.c(`doors`)));
  }
  (Lk(e, t, r, a, i, a),
    Lk(e, t, i, a, i, o),
    Lk(e, t, i, o, r, o),
    e.col(ik).mat(0.8, 0, 0.1, G),
    e.sweep([r, a, i, a, i, o, r, o], gC(vk, 0.35, 0.8000000000000007), !0),
    e.sweep([r, a, i, a, i, o], _C(5.3999999999999995, 0.12, 0.3), !1),
    e.col(10131346).mat(0.9, 0, 0, 0),
    e.flat(r, o, i, a, 16.6),
    e.solid(r, o, i, a, 0, yk),
    yield);
}
function* W_e(e, t) {
  let n = t.c(`paving`),
    r = tk.x0,
    i = tk.x1,
    a = $O.base,
    o = Ak;
  (e.col(15656148).mat(0.8, 0, 0.02, G),
    e.box(r, 4.85, a, i, lk, o, t.c(`white`), 0, 0, n),
    e.col(14208967).mat(0.8, 0, 0, 0),
    e.flat(r, a, i, o, 4.85, e.white, 0, 0, !1),
    e.floor(r, a, i, o, lk, lk, `deck`),
    e.floor($O.x0 + 1.2, Ek, $O.x1 - 1.2, $O.base, lk, lk, `deck`));
  let s = t.c(`plaster`),
    c = (n, r, i, a) => {
      e.col(sk).mat(0.75, 0, 0.04, G);
      let o = Math.min(n, i),
        c = Math.min(r, a),
        l = Math.max(n, i),
        u = Math.max(r, a);
      (e.box(o, lk, c, l, 6.6499999999999995, u, s, 2.4, 2.4, t.c(`white`)),
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
        e.solid(o, c, l, u, lk, 6.8, `parapet`));
    };
  (c(r, a + 0.1, r + 0.24, Mk.z0),
    c(r, Mk.z1, r + 0.24, o),
    c(i - 0.24, a + 0.1, i, jk.z0),
    c(r, -1158.44, i, o),
    yield);
  for (let t of N_e) {
    for (let n of [r + 0.7, i - 0.7])
      (e.col(ck).mat(0.4, 0.5, 0.05, 1),
        e.box(n - 0.32, 1.6, t - 0.32, n + 0.32, 4.85, t + 0.32),
        e.col(D_e).mat(0.5, 0.3, 0, 0),
        e.box(n - 0.42, -0.15, t - 0.42, n + 0.42, 1.6, t + 0.42),
        e.pole(n, t, 0.45, -0.15, 4.85));
    (e.col(ck).mat(0.4, 0.5, 0.05, 1),
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
    Fk(
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
        (e.rod(n, lk, t, n, m, t, 0.07, 6), e.pole(n, t, 0.12, lk, m));
  }
  if ((yield, !e.coarse))
    for (let t = -1192; t > -1156.2; t -= 9)
      for (let n of [r + 0.12, i - 0.12])
        (t < jk.z1 + 1 && n > i - 1) ||
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
  (Rk(e, t, jk.x1, jk.x0, jk.z0, jk.z1), Rk(e, t, Mk.x0, Mk.x1, Mk.z0, Mk.z1));
}
