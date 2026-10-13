// tokyo__assets__region-tokyo-d-shimbashi-CU0USnvn 08 — setmaterial
// Lines 2268-2607 of readable/tokyo__assets__region-tokyo-d-shimbashi-CU0USnvn.pretty.js (statement-aligned).
function yt(e, t, n, r) {
  let i = t.white(),
    { x0: a, z0: o, x1: s, z1: c } = m,
    l = t.uv(`sl:stones`);
  (e.setMaterial(0.95, 0, 0, 0), P(e, 16777215));
  let d = n + y - 0.12,
    f = (t, r, i, a) => {
      let o = Math.hypot(i - t, a - r),
        s = Math.max(1, Math.round(o / 4));
      for (let o = 0; o < s; o++) {
        let c = o / s,
          u = (o + 1) / s;
        F(
          e,
          t + (i - t) * c,
          r + (a - r) * c,
          t + (i - t) * u,
          r + (a - r) * u,
          n,
          d,
          l,
        );
      }
    };
  (f(a, c, s, c),
    f(s, o, a, o),
    f(s, c, s, o),
    f(a, o, a, c),
    e.setMaterial(0.6, 0, 0, 0),
    P(e, 12171442),
    L(e, a - 0.08, d, o - 0.08, s + 0.08, n + y, c + 0.08, i),
    P(e, 16777215),
    F(
      e,
      a - 0.02,
      (o + c) / 2 - 1.1,
      a - 0.02,
      (o + c) / 2 + 1.1,
      n + 0.12,
      n + 0.62,
      t.uv(`sl:stoneplaque`),
    ));
  let p = t.uv(`sl:flowers`);
  for (let t = o + 0.8; t < c - 0.8; t += 2.3)
    for (let r of [a + 0.25, s - 0.25])
      (e.setMaterial(0.85, 0, 0, 0),
        P(e, 16777215),
        R(e, r, t + 0.45, n + y, n + y + 0.3, 0.17, 0.45, 0, 1, p, p, p));
  let h = u.x,
    g = n + y;
  (e.setMaterial(0.95, 0, 0, 0),
    P(e, 6973024),
    L(e, h - 1.35, g, o + 0.6, h + 1.35, g + 0.12, c - 0.6, i),
    P(e, 4864556));
  for (let t = o + 0.9; t < c - 0.7; t += 0.62)
    L(e, h - 1.05, g + 0.12, t, h + 1.05, g + 0.2, t + 0.22, i);
  (e.setMaterial(0.4, 0.7, 0, 0), P(e, 8025196));
  for (let t of [-1, 1])
    L(
      e,
      h + t * 0.533 - 0.035,
      g + 0.2,
      o + 0.7,
      h + t * 0.533 + 0.035,
      g + 0.34,
      c - 0.7,
      i,
    );
  (e.setMaterial(0.5, 0.6, 0, 0), P(e, 1974049));
  let _ = a + 0.42,
    v = s - 0.42,
    b = o + 0.42,
    x = c - 0.42,
    S = n + y,
    C = [
      [_, b],
      [v, b],
      [v, x],
      [_, x],
      [_, b],
    ];
  for (let t = 0; t + 1 < C.length; t++) {
    let [n, a] = C[t],
      [o, s] = C[t + 1];
    for (let t of [0.5, 0.92]) B(e, n, S + t, a, o, S + t, s, 0.018, i);
    let c = Math.hypot(o - n, s - a),
      l = Math.max(1, Math.round(c / (r >= 1 ? 1.4 : 2.8)));
    for (let t = 0; t < l; t++) {
      let r = t / l;
      z(e, n + (o - n) * r, a + (s - a) * r, S, S + 0.95, 0.025, i, 4);
    }
  }
}
function bt(e, t, n, r) {
  let i = t.white(),
    a = m.x0 - x,
    o = m.x1 + x,
    s = m.z0 - x,
    c = m.z1 + x;
  (e.setMaterial(0.95, 0, 0, 0),
    P(e, 13615776),
    I(e, a, s, m.x0, c, n + 0.025, i),
    I(e, m.x1, s, o, c, n + 0.025, i),
    I(e, m.x0, s, m.x1, m.z0, n + 0.025, i),
    I(e, m.x0, m.z1, m.x1, c, n + 0.025, i),
    e.setMaterial(0.5, 0.5, 0, 0),
    P(e, 1842206));
  let l = [
      [a + 0.1, s + 0.1],
      [o - 0.1, s + 0.1],
      [o - 0.1, c - 0.1],
      [a + 0.1, c - 0.1],
      [a + 0.1, s + 0.1],
    ],
    u = null;
  for (let t = 0; t + 1 < l.length; t++) {
    let [a, o] = l[t],
      [s, c] = l[t + 1],
      d = Math.hypot(s - a, c - o),
      f = Math.max(1, Math.round(d / 1.9));
    for (let t = 0; t < f; t++) {
      let l = t / f,
        d = a + (s - a) * l,
        p = o + (c - o) * l;
      if (
        (z(e, d, p, n, n + 0.62, 0.065, i, 8),
        L(e, d - 0.07, n + 0.62, p - 0.07, d + 0.07, n + 0.68, p + 0.07, i),
        u && r >= 1)
      ) {
        let t = (u[0] + d) / 2,
          r = (u[1] + p) / 2;
        (B(e, u[0], n + 0.56, u[1], t, n + 0.44, r, 0.012, i),
          B(e, t, n + 0.44, r, d, n + 0.56, p, 0.012, i));
      }
      u = [d, p];
    }
  }
  let d = m.x1 + 0.5,
    f = m.z1 + 0.55;
  (e.setMaterial(0.5, 0.2, 0, 0),
    P(e, 15790058),
    z(e, d, f, n, n + 3.6, 0.075, i, 8),
    e.setMaterial(0.3, 0, 0.7, 1),
    P(e, 16774360),
    L(e, d - 0.16, n + 3.6, f - 0.16, d + 0.16, n + 3.95, f + 0.16, i),
    e.setMaterial(0.5, 0.2, 0, 0),
    P(e, 15790058),
    L(e, d - 0.2, n + 3.95, f - 0.2, d + 0.2, n + 4.02, f + 0.2, i));
  let p = m.x0 - x - 0.6,
    h = m.z1 - 2.6;
  (e.setMaterial(0.6, 0.4, 0, 0), P(e, 2244654));
  for (let t of [-0.62, 0.62]) z(e, p, h + t, n, n + 1.75, 0.04, i, 6);
  (e.setMaterial(0.7, 0, 0, 0),
    P(e, 16777215),
    R(
      e,
      p,
      h,
      n + 0.9,
      n + 1.78,
      0.75,
      0.04,
      -1,
      0,
      i,
      t.uv(`sl:board`),
      t.uv(`sl:board`),
    ));
  let { x: g, z: _ } = ne;
  (e.setMaterial(0.6, 0, 0, 0),
    P(e, 9407364),
    L(e, g - 0.42, n, _ - 0.42, g + 0.42, n + 0.85, _ + 0.42, i),
    e.setMaterial(0.4, 0.8, 0, 0),
    P(e, 6968626));
  let v = n + 0.85,
    y = g,
    b = _ - 0.12;
  for (let [t, n, r] of [
    [0, 0.8, 0.2],
    [0.8, 1.25, 0.15],
    [1.25, 1.36, 0.06],
  ])
    z(e, y, b, v + t, v + n, r, i, 8);
  z(e, y, b, v + 1.36, v + 1.58, 0.1, i, 8);
  let S = g + 0.05,
    C = _ + 0.24;
  (z(e, S, C, v, v + 0.5, 0.1, i, 8),
    z(e, S, C, v + 0.5, v + 0.66, 0.07, i, 8),
    B(e, y + 0.05, v + 1.12, b + 0.12, S, v + 0.5, C - 0.05, 0.035, i));
}
function xt(e, t, n) {
  let r = t.white(),
    i = A.camera,
    a = A.subject,
    o = a.x - i.x,
    s = a.z - i.z,
    c = Math.hypot(o, s),
    l = o / c,
    u = s / c;
  (e.setMaterial(0.5, 0.6, 0, 0), P(e, 2763566));
  for (let t = 0; t < 3; t++) {
    let a = (t / 3) * Math.PI * 2;
    B(
      e,
      i.x,
      n + 1.25,
      i.z,
      i.x + Math.cos(a) * 0.45,
      n,
      i.z + Math.sin(a) * 0.45,
      0.018,
      r,
    );
  }
  (e.setMaterial(0.45, 0.3, 0, 0),
    P(e, 16777215),
    R(e, i.x, i.z, n + 1.28, n + 1.56, 0.11, 0.26, l, u, t.uv(`tv:cam`), r, r),
    P(e, 1710618),
    R(e, i.x + l * 0.36, i.z + u * 0.36, n + 1.33, n + 1.5, 0.07, 0.1, l, u, r),
    R(
      e,
      i.x - l * 0.05 + u * 0.12,
      i.z - u * 0.05 - l * 0.12,
      n + 1.56,
      n + 1.64,
      0.04,
      0.08,
      l,
      u,
      r,
    ));
  let d = A.light,
    f = a.x - d.x,
    p = a.z - d.z,
    m = Math.hypot(f, p),
    h = f / m,
    g = p / m;
  (e.setMaterial(0.5, 0.6, 0, 0), P(e, 2763566));
  for (let t = 0; t < 3; t++) {
    let i = (t / 3) * Math.PI * 2 + 0.5;
    B(
      e,
      d.x,
      n + 0.6,
      d.z,
      d.x + Math.cos(i) * 0.4,
      n,
      d.z + Math.sin(i) * 0.4,
      0.015,
      r,
    );
  }
  (z(e, d.x, d.z, n + 0.6, n + 2, 0.018, r, 4),
    P(e, 1710618),
    R(e, d.x, d.z, n + 1.85, n + 2.3, 0.3, 0.05, h, g, r),
    e.setMaterial(0.2, 0, 1, 0),
    P(e, 16774888),
    R(
      e,
      d.x + h * 0.055,
      d.z + g * 0.055,
      n + 1.88,
      n + 2.27,
      0.27,
      0.005,
      h,
      g,
      r,
    ),
    e.setMaterial(0.35, 0.7, 0, 0),
    P(e, 12106944),
    R(e, i.x + 0.9, i.z + 0.4, n, n + 0.32, 0.32, 0.22, l, u, r),
    e.setMaterial(0.6, 0, 0, 0),
    P(e, 1052688),
    B(e, i.x, n + 0.02, i.z, d.x, n + 0.02, d.z, 0.012, r),
    P(e, 16777215),
    R(
      e,
      i.x + 0.9,
      i.z + 0.4,
      n + 0.32,
      n + 0.42,
      0.05,
      0.05,
      l,
      u,
      t.uv(`tv:flag`),
      t.uv(`tv:flag`),
      t.uv(`tv:flag`),
    ));
}
function St(e, t, n) {
  let r = t.white(),
    i = n.plan.groundHeight(E.x, E.z),
    { x: a, z: o } = E;
  (e.setMaterial(0.55, 0, 0, 0),
    P(e, 9276036),
    L(e, a - 1.2, i, o - 1.3, a + 1, i + 0.42, o + 1.3, r),
    P(e, 12614216),
    L(e, a - 1.55, i, o - 1.9, a - 1.35, i + 2.8, o + 1.9, r),
    e.setMaterial(0.4, 0.6, 0, 0),
    P(e, 5921370));
  for (let t of [-1, 1])
    L(
      e,
      a - 1,
      i + 0.42,
      o + t * 0.6 - 0.05,
      a + 0.9,
      i + 0.52,
      o + t * 0.6 + 0.05,
      r,
    );
  let s = t.uv(`d51:wheel`);
  (e.setMaterial(0.45, 0.4, 0, 0),
    P(e, 16777215),
    V(e, a - 0.55, i + 0.52 + 0.7, o, 1, 0, 0.16, 0.7, r, 18, !0, s),
    V(e, a + 0.45, i + 0.52 + 0.7, o, 1, 0, 0.16, 0.7, r, 18, !0, s),
    e.setMaterial(0.4, 0.7, 0, 0),
    P(e, 13159632),
    V(e, a - 0.05, i + 0.52 + 0.7, o, 1, 0, 1.4, 0.1, r, 8, !0),
    P(e, 16777215),
    F(
      e,
      a + 1.005,
      o + 0.9,
      a + 1.005,
      o - 0.9,
      i + 0.08,
      i + 0.36,
      t.uv(`d51:plate`),
    ));
  let c = D,
    l = n.plan.groundHeight(c.x, c.z);
  (e.setMaterial(0.5, 0, 0, 0),
    P(e, 7236710),
    L(e, c.x - 0.35, l, c.z - 0.65, c.x + 0.35, l + 0.3, c.z + 0.65, r),
    P(e, 16777215),
    R(e, c.x, c.z, l + 0.3, l + 1.95, 0.48, 0.14, 1, 0, r, t.uv(`shoka`)));
}
