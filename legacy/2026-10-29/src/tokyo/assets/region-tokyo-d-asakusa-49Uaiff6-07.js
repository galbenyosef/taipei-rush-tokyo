// tokyo/assets/region-tokyo-d-asakusa-49Uaiff6 07 — setmaterial
// Lines 1718-1985 of readable/tokyo/assets/region-tokyo-d-asakusa-49Uaiff6.pretty.js (statement-aligned).
function ft(e, t, n, r) {
  let i = t.white(),
    a = lt(n),
    o = r + n.h,
    s = Math.floor(n.fac / 3) === 0,
    c = ut[(n.fac * 7 + n.shut) % ut.length];
  e.setMaterial(0.9, 0, 0, 0);
  let [l, u] = K(a, 0, -a.depth),
    [d, f] = K(a, 1, -a.depth),
    [p, m] = K(a, 0, 0),
    [h, g] = K(a, 1, 0);
  if (s) {
    let t = o - at,
      n = t + Math.min(2, a.depth * 0.18);
    (L(e, 4869716),
      e.setMaterial(0.55, 0.15, 0, 0),
      J(e, a, -0.01, 1.01, 0.55, t - 0.12, -a.depth / 2, n, i, !0),
      J(e, a, -0.01, 1.01, -a.depth / 2, n, -a.depth - 0.3, t - 0.12, i, !0),
      e.setMaterial(0.9, 0, 0, 0),
      L(e, c, 0.82));
    let [s, _] = K(a, 0, -a.depth / 2),
      [v, y] = K(a, 1, -a.depth / 2);
    (e.quad(l, t, u, p, t, m, s, n, _, s, n, _, i.u0, i.v0, i.u1, i.v1),
      e.quad(h, t, g, d, t, f, v, n, y, v, n, y, i.u0, i.v0, i.u1, i.v1),
      L(e, c, 0.82),
      R(e, d, f, l, u, r, t, i),
      R(e, l, u, p, m, r, t, i),
      R(e, h, g, d, f, r, t, i));
  } else
    (L(e, 9078656),
      xe(
        e,
        Math.min(n.x0, n.x1),
        Math.min(n.z0, n.z1),
        Math.max(n.x0, n.x1),
        Math.max(n.z0, n.z1),
        o,
        i,
      ),
      L(e, c, 0.82),
      R(e, d, f, l, u, r, o, i),
      R(e, l, u, p, m, r, o, i),
      R(e, h, g, d, f, r, o, i));
  let _ = n.face === `W` || n.face === `S`,
    v = [
      [_ ? n.endMin : n.endMax, l, u, p, m],
      [_ ? n.endMax : n.endMin, h, g, d, f],
    ],
    y = t.uv(`fac:${(n.fac + 1) % 12}`);
  for (let [i, a, o, s, c] of v) {
    if (!i) continue;
    let l = -(c - o),
      u = s - a,
      d = Math.hypot(l, u) || 1,
      f = (l / d) * 0.03,
      p = (u / d) * 0.03,
      m = Math.hypot(s - a, c - o),
      h = Math.max(1, Math.round(m / 6));
    (e.setMaterial(0.85, 0, 0.3, 33), L(e, 16777215));
    for (let t = 1; t < n.floors; t++) {
      let n = r + W + (t - 1) * 3;
      for (let t = 0; t < h; t++)
        R(
          e,
          a + ((s - a) * t) / h + f,
          o + ((c - o) * t) / h + p,
          a + ((s - a) * (t + 1)) / h + f,
          o + ((c - o) * (t + 1)) / h + p,
          n,
          n + 3,
          y,
        );
    }
    if (m > 4) {
      let i = 0.06,
        l = Math.min(0.94, i + 4.6 / m);
      (e.setMaterial(0.6, 0, 0.32, 3),
        R(
          e,
          a + (s - a) * i + f * 3,
          o + (c - o) * i + p * 3,
          a + (s - a) * l + f * 3,
          o + (c - o) * l + p * 3,
          r + 2.66,
          r + 3.24,
          t.uv(`shop:board:${n.name}`),
        ));
    }
    e.setMaterial(0.9, 0, 0, 0);
  }
  (e.setMaterial(0.85, 0, 0.3, 33), L(e, 16777215));
  let b = t.uv(`fac:${n.fac}`),
    x = Math.max(1, Math.round(a.wid / 6));
  for (let t = 1; t < n.floors; t++) {
    let n = r + W + (t - 1) * 3;
    for (let t = 0; t < x; t++) q(e, a, t / x, (t + 1) / x, 0, n, n + 3, b);
  }
  if (
    (e.setMaterial(0.9, 0, 0, 0),
    s || (L(e, c), q(e, a, 0, 1, 0, o - at, o, i)),
    L(e, c, 0.9),
    q(e, a, 0, 0.04, 0, r, r + W, i),
    q(e, a, 0.96, 1, 0, r, r + W, i),
    s &&
      !n.arcade &&
      (e.setMaterial(0.55, 0.15, 0, 0),
      L(e, 5132888),
      J(e, a, -0.02, 1.02, 0, r + W + 0.42, 0.95, r + W + 0.06, i),
      L(e, 2762790),
      J(e, a, -0.02, 1.02, 0, r + W + 0.41, 0.95, r + W + 0.05, i, !0),
      e.setMaterial(0.9, 0, 0, 0)),
    e.setMaterial(0.7, 0, 0, 0),
    L(e, 2762274),
    q(e, a, 0.02, 0.98, 0.06, r + 2.62, r + W, i),
    J(e, a, 0.02, 0.98, 0, r + W, 0.13, r + W, i),
    e.setMaterial(0.6, 0, 0.35, 3),
    L(e, 16777215),
    q(
      e,
      a,
      0.03,
      0.97,
      0.13,
      r + 2.66,
      r + W - 0.04,
      t.uv(`shop:board:${n.name}`),
    ),
    n.sode)
  ) {
    let s = (a.rx - a.lx) / a.wid,
      c = (a.rz - a.lz) / a.wid,
      l = t.uv(`shop:sode:${n.name}`);
    if (n.arcade) {
      let [t, n] = K(a, 0.5, 1.15);
      (e.setMaterial(0.6, 0, 0.3, 19),
        L(e, 16777215),
        Se(e, t, n, r + 3.7, r + 5.4, 0.42, 0.05, s, c, i, l, l),
        e.setMaterial(0.5, 0.6, 0, 16),
        L(e, 4869714),
        B(
          e,
          t - a.nx * 1.15,
          r + 5.55,
          n - a.nz * 1.15,
          t,
          r + 5.55,
          n,
          0.025,
          i,
        ),
        B(e, t, r + 5.4, n, t, r + 5.55, n, 0.015, i));
    } else {
      let [t, u] = K(a, 0.12, 0.5),
        d = r + W + 0.35,
        f = Math.min(o - 0.3, d + Math.min(4.4, (n.floors - 1) * 3 - 0.4));
      f - d > 1.5 &&
        (e.setMaterial(0.6, 0, 0.3, 3),
        L(e, 16777215),
        Se(e, t, u, d, f, 0.45, 0.07, s, c, i, l, l),
        e.setMaterial(0.5, 0.6, 0, 0),
        L(e, 5922402),
        B(
          e,
          t - a.nx * 0.5,
          d + 0.2,
          u - a.nz * 0.5,
          t + a.nx * 0.05,
          d + 0.2,
          u + a.nz * 0.05,
          0.03,
          i,
        ),
        B(
          e,
          t - a.nx * 0.5,
          f - 0.2,
          u - a.nz * 0.5,
          t + a.nx * 0.05,
          f - 0.2,
          u + a.nz * 0.05,
          0.03,
          i,
        ));
    }
  }
  if (n.lanterns && n.trade.lantern) {
    let o = t.uv(`lantern:${n.trade.lantern}`);
    for (let t of [0.12, 0.88]) {
      let [n, s] = K(a, t, 0.42);
      (e.setMaterial(0.5, 0.6, 0, 0),
        L(e, 2763306),
        B(e, n - a.nx * 0.3, r + 3, s - a.nz * 0.3, n, r + 3, s, 0.015, i),
        dt(e, n, r + 2.36, s, o, i));
    }
  }
  if (n.trade.id === `tokiwakado`) {
    let [n, o] = K(a, 0.5, 0.95);
    (e.setMaterial(0.5, 0.6, 0, 0),
      L(e, 2763306),
      B(e, n - a.nx * 0.85, r + 3.25, o - a.nz * 0.85, n, r + 3.25, o, 0.03, i),
      B(e, n, r + 3, o, n, r + 3.25, o, 0.02, i),
      dt(
        e,
        n,
        r + 1.65,
        o,
        t.uv(`lantern:asa.shop.tokiwakado.lantern`),
        i,
        0.52,
        1.3,
      ));
  }
  let S = ((n.x0 * 5 + n.z0 * 11) | 0) % 6;
  if (!s && S < 2 && a.wid > 4.5) {
    let [t, n] = K(a, 0.6, -a.depth * 0.55);
    if (
      (e.setMaterial(0.6, 0.4, 0, 0),
      L(e, S === 0 ? 14211282 : 10132638),
      S === 0)
    ) {
      for (let [r, a] of [
        [-0.45, -0.45],
        [0.45, -0.45],
        [0.45, 0.45],
        [-0.45, 0.45],
      ])
        B(e, t + r, o, n + a, t + r, o + 0.9, n + a, 0.04, i);
      Ce(e, t, n, o + 0.9, o + 2.2, 0.62, i, 10);
    } else
      for (let r = 0; r < 3; r++)
        z(
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
}
function pt(e, t, n, r, i, a) {
  let o = t.white(),
    s = t.uv(`shop:int:${n.trade.id}`);
  (e.setMaterial(0.8, 0, 0.22, 16),
    L(e, 16777215),
    q(e, r, 0.04, 0.96, -a, i, i + 2.62, s),
    L(e, 4867648),
    J(e, r, 0.04, 0.96, -a, i + 2.62, 0, i + 2.62, o, !0),
    L(e, 15262940));
  let [c, l] = K(r, 0.04, -a),
    [u, d] = K(r, 0.04, 0),
    [f, p] = K(r, 0.96, -a),
    [m, h] = K(r, 0.96, 0);
  (R(e, u, d, c, l, i, i + 2.62, s),
    R(e, f, p, m, h, i, i + 2.62, s),
    L(e, 8024168),
    xe(
      e,
      Math.min(c, u, f, m),
      Math.min(l, d, p, h),
      Math.max(c, u, f, m),
      Math.max(l, d, p, h),
      i + 0.02,
      o,
    ));
}
