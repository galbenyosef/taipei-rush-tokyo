// tokyo/assets/region-tokyo-A7LxHjud 196 — math
// Lines 78320-78659 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function Rk(e, t, n, r, i, a) {
  let o = e.coarse ? 1 : 16,
    s = r - n,
    c = Math.sign(s);
  if ((e.col(14274495).mat(0.85, 0, 0.04, G), o === 1))
    e.quad(n, 0, a, r, lk, a, r, lk, i, n, 0, i);
  else
    for (let t = 0; t < o; t++) {
      let r = n + (s * t) / o,
        c = n + (s * (t + 1)) / o,
        l = (lk * (t + 1)) / o;
      e.box(Math.min(r, c), l - lk / o, i, Math.max(r, c), l, a);
    }
  let l = (e) => (lk * (e - n)) / s;
  e.col(sk).mat(0.75, 0, 0.02, G);
  for (let [t, o] of [
    [i - 0.22, i],
    [a, a + 0.22],
  ]) {
    for (let i of [t, o])
      Fk(e, n, -0.25, i, r, 5.35, i, r, 6.6499999999999995, i, n, 1.05, i);
    (Fk(
      e,
      n,
      1.05,
      t,
      r,
      6.6499999999999995,
      t,
      r,
      6.6499999999999995,
      o,
      n,
      1.05,
      o,
    ),
      e.solid(
        Math.min(n, r),
        t,
        Math.max(n, r),
        o,
        0,
        6.699999999999999,
        `parapet`,
      ));
  }
  if (
    (e.col(14208967).mat(0.8, 0, 0, 0),
    Fk(
      e,
      n,
      -0.25,
      i - 0.22,
      r,
      5.35,
      i - 0.22,
      r,
      5.35,
      a + 0.22,
      n,
      -0.25,
      a + 0.22,
    ),
    !e.coarse)
  ) {
    e.col(ck).mat(0.4, 0.5, 0.05, 1);
    let t = n + s * 0.62;
    (e.box(
      Math.min(t, t + 0.36),
      0,
      i + 0.2,
      Math.max(t, t + 0.36),
      l(t) - 0.3,
      i + 0.56,
    ),
      e.box(
        Math.min(t, t + 0.36),
        0,
        a - 0.56,
        Math.max(t, t + 0.36),
        l(t) - 0.3,
        a - 0.2,
      ));
  }
  let u = (n + r) / 2,
    d = (i + a) / 2,
    f = e.sub(u, 0, d, c > 0 ? -Math.PI / 2 : Math.PI / 2);
  (e.floor(
    -(a - i) / 2,
    -Math.abs(s) / 2,
    (a - i) / 2,
    Math.abs(s) / 2,
    0,
    lk,
    `stairs`,
  ),
    e.leave(f));
}
function* G_e(e, t) {
  let n = P_e;
  (e.col(12170926).mat(0.7, 0, 0.1, G),
    e.cylY(n.x, n.z, 0.05, n.h, n.r, e.coarse ? 12 : 24),
    e.pole(n.x, n.z, n.r, 0, n.h + 2));
  let r = e.sub(n.x, n.h, n.z, n.turn);
  e.col(15986150).mat(0.5, 0, 0.07, 1);
  let i = 1.12,
    a = 0.27,
    o = 1.55,
    s = -0.2,
    c = 0.18,
    l = (e) => 5.260000000000001 / 2 - e * 1.3800000000000001,
    u = (t, n, r, i) => e.box(Math.min(t, r), n, s, Math.max(t, r), i, c),
    d = l(0);
  (u(d, a, d - a, o),
    u(d - i + a, a, d - i, o),
    u(d, 0, d - i, a),
    (d = l(1)),
    u(d, 0, d - a, o));
  for (let e of [0, 1.28 / 2, 1.28])
    u(d - a, e, d - i + (e > 0 && e < 1.28 ? 0.15 : 0), e + a);
  ((d = l(2)), u(d, 0, d - a, o), u(d - i + a, 0, d - i, o));
  {
    let t = d - a / 2,
      n = d - i + a / 2,
      r = Math.hypot(t - n, 1.28),
      l = Math.atan2(1.28, t - n),
      u = (t + n) / 2,
      f = o / 2,
      p = (Math.cos(l) * r) / 2,
      m = (Math.sin(l) * r) / 2,
      h = a / 2 / Math.sin(l),
      g = [
        [u + p - h, f + m],
        [u + p + h, f + m],
        [u - p + h, f - m],
        [u - p - h, f - m],
      ];
    for (let t of [s, c])
      Fk(
        e,
        g[0][0],
        g[0][1],
        t,
        g[1][0],
        g[1][1],
        t,
        g[2][0],
        g[2][1],
        t,
        g[3][0],
        g[3][1],
        t,
      );
    for (let [t, n] of [
      [0, 1],
      [2, 3],
    ])
      Fk(
        e,
        g[t][0],
        g[t][1],
        s,
        g[n][0],
        g[n][1],
        s,
        g[n][0],
        g[n][1],
        c,
        g[t][0],
        g[t][1],
        c,
      );
  }
  d = l(3);
  {
    let t = d - i / 2,
      n = e.coarse ? 8 : 14;
    for (let r = 0; r < n; r++) {
      let i = (r / n) * Math.PI * 2,
        o = ((r + 1) / n) * Math.PI * 2,
        l = (e, n) => [
          t + Math.cos(e) * (0.56 - n),
          0.775 + Math.sin(e) * (0.775 - n),
        ],
        u = l(i, 0),
        d = l(o, 0),
        f = l(i, a),
        p = l(o, a);
      for (let t of [s, c])
        Fk(e, u[0], u[1], t, d[0], d[1], t, p[0], p[1], t, f[0], f[1], t);
      (Fk(e, u[0], u[1], s, d[0], d[1], s, d[0], d[1], c, u[0], u[1], c),
        e.coarse ||
          Fk(e, p[0], p[1], s, f[0], f[1], s, f[0], f[1], c, p[0], p[1], c));
    }
  }
  e.leave(r);
  {
    let n = I_e,
      r = 3.7,
      i = 7.5;
    (e.col(rk).mat(0.85, 0, 0.06, G),
      e.box(n.x0, 0, n.z0, n.x1, r, n.z1, t.c(`plaster`), 4, 4),
      e.col(16777215).mat(0.3, 0.2, 0.6, G),
      e.panel(
        n.x0 + 0.4,
        n.z1 + 0.02,
        n.x1 - 0.4,
        n.z1 + 0.02,
        0.1,
        3,
        t.A.sub(`uenoMisc`, ...Qx.shop),
      ),
      e.col(2763822).mat(0.5, 0.4, 0, 0),
      e.box(n.x0, r, n.z0, n.x1, 7.9, n.z1),
      e.col(16777215).mat(0.25, 0.1, 0.95, 1 | G));
    let a = (e, n) => t.A.sub(`uenoVision`, e, 0, n, 1);
    (e.panel(
      n.x0,
      n.z1 + 0.03,
      n.x1,
      n.z1 + 0.03,
      3.9000000000000004,
      i,
      a(0, 0.5),
    ),
      e.panel(
        n.x1 + 0.03,
        n.z1,
        n.x1 + 0.03,
        n.z0,
        3.9000000000000004,
        i,
        a(0.5, 1),
      ),
      e.solid(n.x0, n.z0, n.x1, n.z1, 0, 7.9));
  }
  if (!e.coarse) {
    let n = F_e;
    e.col(15855852).mat(0.5, 0.3, 0.06, 1);
    for (let [t, r] of [
      [n.x0 + 0.2, n.z0 + 0.2],
      [n.x1 - 0.2, n.z0 + 0.2],
      [n.x0 + 0.2, n.z1 - 0.2],
      [n.x1 - 0.2, n.z1 - 0.2],
    ])
      (e.box(t - 0.12, 0.06, r - 0.12, t + 0.12, n.h, r + 0.12),
        e.pole(t, r, 0.15, 0, n.h));
    (e.box(n.x0, n.h - 0.25, n.z0, n.x1, n.h, n.z0 + 0.2),
      e.box(n.x0, n.h - 0.25, n.z1 - 0.2, n.x1, n.h, n.z1));
    for (let t = n.x0 + 0.3; t < n.x1; t += 0.45)
      e.box(t, n.h - 0.02, n.z0, t + 0.07, n.h + 0.3, n.z1);
    for (let [t, n] of [
      [-117.4, -1192.6],
      [-104, -1184.2],
    ])
      (e.col(7106418).mat(0.5, 0.6, 0, 0).rod(t, 0.06, n, t, 3.9, n, 0.07, 6),
        e.pole(t, n, 0.12, 0, 3.9),
        e.col(16773846).mat(0.3, 0, 0.9, 1),
        e.lathe(
          t,
          n,
          [0, 3.85, 0.26, 4, 0.28, 4.25, 0.2, 4.45, 0, 4.5],
          8,
          0,
          e.white,
          !1,
          !0,
        ));
    (mT(e, t.c(`signTaxi`), -59.5, Dk.z0 - 0.6, Math.PI, 0.06, 1.8),
      e.pole(-59.5, Dk.z0 - 0.6, 0.12, 0, 2.3),
      e.col(10133668).mat(0.4, 0.6, 0, 0),
      e.rod(-63, 0.95, Dk.z0 - 1.6, -56, 0.95, Dk.z0 - 1.6, 0.03, 4));
    for (let t of [-63, -59.5, -56])
      e.rod(t, 0.06, Dk.z0 - 1.6, t, 0.95, Dk.z0 - 1.6, 0.03, 4);
  }
  yield;
}
function* K_e(e, t) {
  (yield* R_e(e, t),
    yield* B_e(e, t),
    yield* H_e(e, t),
    yield* U_e(e, t),
    yield* W_e(e, t),
    yield* G_e(e, t),
    e.emis(0, 0).mat(0.85, 0, 0, 0).col(16777215));
}
function q_e(e, t) {
  (e.col(rk).mat(0.85, 0, 0.12, G),
    e.box($O.x0, 0, $O.zb, $O.x1, _k, $O.zf),
    e.box(xk, 0, ZO.zb, ZO.x1, yk, ZO.zf),
    e.box(ek.x0, 0, ek.zb, ek.x1, yk, ek.zf),
    e.col(ak).box($O.x0, 0, $O.zf, $O.x1, dk, $O.base),
    e.col(16770736).mat(0.4, 0, 0.6, 1),
    e.panel(Tk(0) - Ck / 2, $O.zf + 0.02, Tk(7) + Ck / 2, $O.zf + 0.02, pk, mk),
    e.col(ok).mat(0.45, 0, 0.5, 1),
    e.box(Pk.x0, Pk.y0 + 0.4, Pk.zf - Pk.d, Pk.x1, Pk.y0 + Pk.h - 0.4, Pk.zf),
    e.col(sk).mat(0.8, 0, 0.05, 0),
    e.box(tk.x0, 4.85, $O.base, tk.x1, 6.6499999999999995, Ak));
}
function J_e(e) {
  return { x: 0, z: 0, gy: e.groundHeight(wk, -1194), facing: 0 };
}
function Y_e(e, t) {
  let n = [0.58, 0.48, 0.42];
  return [
    {
      x0: $O.x0,
      x1: $O.x1,
      z0: $O.zb,
      z1: $O.base,
      y0: t.gy,
      y1: t.gy + _k,
      rgb: n,
      lit: !0,
    },
    {
      x0: xk,
      x1: ZO.x1,
      z0: ZO.zb,
      z1: ZO.zf,
      y0: t.gy,
      y1: t.gy + yk,
      rgb: n,
      lit: !0,
    },
    {
      x0: ek.x0,
      x1: ek.x1,
      z0: ek.zb,
      z1: ek.zf,
      y0: t.gy,
      y1: t.gy + yk,
      rgb: n,
      lit: !0,
    },
  ];
}
function X_e(e, t) {
  return [ZO.x0 - 6, $O.zb - 6, jk.x1 + 8, -1152.2];
}
