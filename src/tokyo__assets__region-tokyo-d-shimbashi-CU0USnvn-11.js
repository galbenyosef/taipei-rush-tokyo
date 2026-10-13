// tokyo__assets__region-tokyo-d-shimbashi-CU0USnvn 11 — setmaterial
// Lines 3258-3496 of readable/tokyo__assets__region-tokyo-d-shimbashi-CU0USnvn.pretty.js (statement-aligned).
function zt(e, t, n, r) {
  let i = t.white(),
    a = Lt(n),
    o = r + n.h,
    s = Rt[n.fac % Rt.length];
  (e.setMaterial(0.9, 0, 0, 0),
    P(e, 9078656),
    I(e, n.x0, n.z0, n.x1, n.z1, o, i),
    P(e, s, 0.82));
  let [c, l] = Y(a, 0, -a.depth),
    [u, d] = Y(a, 1, -a.depth);
  F(e, u, d, c, l, r, o, i);
  let [f, p] = Y(a, 0, 0),
    [m, h] = Y(a, 1, 0);
  (F(e, c, l, f, p, r, o, i), F(e, m, h, u, d, r, o, i));
  let g = n.face === `W` || n.face === `S`,
    _ = [
      [g ? n.endMin : n.endMax, c, l, f, p],
      [g ? n.endMax : n.endMin, m, h, u, d],
    ],
    v = t.uv(`mkt:fac:${(n.fac + 3) % Mt}`);
  for (let [i, a, o, c, l] of _) {
    if (!i) continue;
    let u = -(l - o),
      d = c - a,
      f = Math.hypot(u, d) || 1,
      p = (u / f) * 0.03,
      m = (d / f) * 0.03,
      h = Math.hypot(c - a, l - o),
      g = Math.max(1, Math.round(h / 6));
    P(e, 16777215);
    for (let t = 1; t < n.floors; t++) {
      let n = r + q + (t - 1) * At;
      for (let t = 0; t < g; t++)
        F(
          e,
          a + ((c - a) * t) / g + p,
          o + ((l - o) * t) / g + m,
          a + ((c - a) * (t + 1)) / g + p,
          o + ((l - o) * (t + 1)) / g + m,
          n,
          n + At,
          v,
        );
    }
    if (n.special !== `sushi` && n.special !== `horumon` && h > 4) {
      let i = 0.08,
        s = Math.min(0.92, i + 5 / h);
      (e.setMaterial(0.6, 0, 0, 0),
        F(
          e,
          a + (c - a) * i + p * 3,
          o + (l - o) * i + m * 3,
          a + (c - a) * s + p * 3,
          o + (l - o) * s + m * 3,
          r + 2.66,
          r + 3.24,
          t.uv(`mkt:board:${n.name}`),
        ),
        e.setMaterial(0.9, 0, 0, 0));
    }
    P(e, s, 0.82);
  }
  P(e, 16777215);
  let y = t.uv(`mkt:fac:${n.fac}`),
    b = Math.max(1, Math.round(a.wid / 6));
  for (let t = 1; t < n.floors; t++) {
    let n = r + q + (t - 1) * At;
    for (let t = 0; t < b; t++) X(e, a, t / b, (t + 1) / b, 0, n, n + At, y);
  }
  (P(e, s),
    X(e, a, 0, 1, 0, o - jt, o, i),
    X(e, a, 0, 0.04, 0, r, r + q, i),
    X(e, a, 0.96, 1, 0, r, r + q, i));
  let x =
    n.special === `horumon`
      ? t.uv(`horumon:board`)
      : n.special === `sushi`
        ? t.uv(`sushi:board`)
        : t.uv(`mkt:board:${n.name}`);
  (e.setMaterial(0.7, 0, 0, 0),
    P(e, 2762274),
    X(e, a, 0.02, 0.98, 0.06, r + 2.62, r + q, i),
    Z(e, a, 0.02, 0.98, 0, r + q, 0.13, r + q, i),
    e.setMaterial(
      0.6,
      0,
      n.special === `sushi` ? 0.35 : 0,
      n.special === `sushi` ? 3 : 0,
    ),
    P(e, 16777215),
    X(e, a, 0.03, 0.97, 0.13, r + 2.66, r + q - 0.04, x),
    n.vacant &&
      (e.setMaterial(0.6, 0.3, 0, 0),
      P(e, 16777215),
      X(e, a, 0.04, 0.96, 0.02, r, r + 2.62, t.uv(`mkt:shut:${n.shut}`))));
  let S = ((n.x0 * 5 + n.z0 * 11) | 0) % 6;
  if (S < 2 && a.wid > 4.5) {
    let [t, n] = Y(a, 0.6, -a.depth * 0.55);
    if (
      (e.setMaterial(0.6, 0.4, 0, 0),
      P(e, S === 0 ? 14211282 : 10132638),
      S === 0)
    ) {
      for (let [r, a] of [
        [-0.45, -0.45],
        [0.45, -0.45],
        [0.45, 0.45],
        [-0.45, 0.45],
      ])
        B(e, t + r, o, n + a, t + r, o + 0.9, n + a, 0.04, i);
      z(e, t, n, o + 0.9, o + 2.2, 0.62, i, 10);
    } else
      for (let r = 0; r < 3; r++)
        L(
          e,
          t - 1.2 + r * 0.85,
          o,
          n - 0.3,
          t - 0.5 + r * 0.85,
          o + 0.62,
          n + 0.3,
          i,
        );
  }
  if (
    n.floors >= 2 &&
    !n.vacant &&
    !n.special &&
    ((n.x0 * 13 + n.z0 * 7) | 0) % 5 < 2
  ) {
    let s = (a.rx - a.lx) / a.wid,
      c = (a.rz - a.lz) / a.wid,
      [l, u] = Y(a, 0.1, 0.5),
      d = r + q + 0.3,
      f = Math.min(o - jt - 0.2, d + 3.4),
      p = t.uv(`mkt:nobori:${n.trade.id}`);
    (e.setMaterial(0.6, 0, 0.18, 3),
      P(e, 16777215),
      R(e, l, u, d, f, 0.42, 0.07, s, c, i, p, p),
      e.setMaterial(0.5, 0.6, 0, 0),
      P(e, 6975090),
      B(
        e,
        l - a.nx * 0.45,
        d + 0.2,
        u - a.nz * 0.45,
        l + a.nx * 0.05,
        d + 0.2,
        u + a.nz * 0.05,
        0.03,
        i,
      ),
      B(
        e,
        l - a.nx * 0.45,
        f - 0.2,
        u - a.nz * 0.45,
        l + a.nx * 0.05,
        f - 0.2,
        u + a.nz * 0.05,
        0.03,
        i,
      ),
      e.setMaterial(0.9, 0, 0, 0));
  }
  (n.special === `sushi` && Bt(e, t, n, a, r),
    n.special === `gate` && Vt(e, t, n, r));
}
function Bt(e, t, n, r, i) {
  (t.white(),
    Ht(e, t, n, r, i),
    e.setMaterial(0.15, 0.2, 0.1, 1),
    P(e, 12243160),
    e.setMaterial(0.6, 0, 0.3, 3),
    P(e, 16777215));
  let a = t.uv(`sushi:man`),
    o = n.x1 + 0.08,
    s = n.z0 - 0.08;
  (F(e, o, s, o - 2.2, s, i + 3.5, i + 6.8, a),
    F(e, o, s + 2.2, o, s, i + 3.5, i + 6.8, a));
  let c = t.uv(`sushi:board`);
  (e.setMaterial(0.6, 0, 0.3, 3),
    F(e, n.x1 + 0.1, n.z0 + 9.5, n.x1 + 0.1, n.z0 + 3, i + 3.4, i + 4.6, c));
}
function Vt(e, t, n, r) {
  let i = t.white(),
    a = r + n.h,
    o = t.uv(`mkt:sign`);
  (e.setMaterial(0.5, 0.6, 0, 0), P(e, 5922402));
  for (let t of [n.x0 + 1, n.x0 + 6])
    B(e, t, a, n.z0 + 0.6, t, a + 2.6, n.z0 + 0.6, 0.06, i);
  for (let t of [n.z0 + 1.6, n.z0 + 6.6])
    B(e, n.x0 + 0.5, a, t, n.x0 + 0.5, a + 2.6, t, 0.06, i);
  (e.setMaterial(0.6, 0, 0.35, 3),
    P(e, 16777215),
    F(e, n.x0 + 7, n.z0 + 0.5, n.x0 + 0.3, n.z0 + 0.5, a + 0.9, a + 2.6, o),
    F(e, n.x0 + 0.4, n.z0 + 0.6, n.x0 + 0.4, n.z0 + 7.4, a + 0.9, a + 2.6, o),
    e.setMaterial(0.8, 0, 0, 0),
    P(e, 4869198),
    F(e, n.x0 + 0.3, n.z0 + 0.62, n.x0 + 7, n.z0 + 0.62, a + 0.9, a + 2.6, i),
    F(
      e,
      n.x0 + 0.52,
      n.z0 + 7.4,
      n.x0 + 0.52,
      n.z0 + 0.6,
      a + 0.9,
      a + 2.6,
      i,
    ));
}
function Ht(e, t, n, r, i) {
  let a = t.white(),
    o = Math.min(r.depth - 0.3, n.lane ? 2.2 : 2.6);
  (e.setMaterial(0.8, 0, 0.2, 0),
    P(e, 16777215),
    X(e, r, 0.04, 0.96, -o, i, i + 2.62, t.uv(`mkt:int:${n.trade.id}`)),
    P(e, 4867648),
    Z(e, r, 0.04, 0.96, -o, i + 2.62, 0, i + 2.62, a, !0),
    P(e, 15262940));
  let s = t.uv(`mkt:int:${n.trade.id}`),
    [c, l] = Y(r, 0.04, -o),
    [u, d] = Y(r, 0.04, 0),
    [f, p] = Y(r, 0.96, -o),
    [m, h] = Y(r, 0.96, 0);
  (F(e, u, d, c, l, i, i + 2.62, s),
    F(e, f, p, m, h, i, i + 2.62, s),
    P(e, 6974054),
    I(
      e,
      Math.min(c, u, f, m),
      Math.min(l, d, p, h),
      Math.max(c, u, f, m),
      Math.max(l, d, p, h),
      i + 0.02,
      a,
    ));
}
