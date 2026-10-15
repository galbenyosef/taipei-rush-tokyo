// tokyo/assets/region-tokyo-d-marunouchi-BoijeA75 09 — setmaterial
// Lines 2583-2764 of readable/tokyo/assets/region-tokyo-d-marunouchi-BoijeA75.pretty.js (statement-aligned).
function Dt(e) {
  let t = x.b42,
    n = e.w,
    r = e.base,
    i = e.A,
    a = i.white(),
    o = t.minX + 0.6,
    s = t.maxX - 0.6,
    c = t.minZ + 0.6,
    l = t.maxZ - 0.6,
    u = i.uv(`hoard:banner`),
    d = i.uv(`hoard`),
    f = mt(o, c, s, l);
  for (let e of [`N`, `E`, `S`, `W`]) {
    let [t, i, o, s] = f[e],
      c = Math.hypot(o - t, s - i),
      l = (o - t) / c,
      p = (s - i) / c;
    (n.setMaterial(0.8, 0, 0, 0), _(n, 16777215));
    for (let a = 0, o = 0; a < c - 0.01; a += 8, o++) {
      let s = Math.min(c, a + 8),
        f = (e === `S` || e === `W`) && o % 3 == 1 ? u : d;
      W(
        n,
        t + l * a,
        i + p * a,
        t + l * s,
        i + p * s,
        r,
        r + 3,
        pt(f, 0, (s - a) / 8, 0, 1),
      );
    }
    (_(n, 12105908), W(n, o, s, t, i, r, r + 3, a));
  }
  e.cols.push(
    { x0: o, z0: c, x1: o + 0.3, z1: l, y0: 0, y1: r + 3 },
    { x0: s - 0.3, z0: c, x1: s, z1: l, y0: 0, y1: r + 3 },
    { x0: o, z0: c, x1: s, z1: c + 0.3, y0: 0, y1: r + 3 },
    { x0: o, z0: l - 0.3, x1: s, z1: l, y0: 0, y1: r + 3 },
  );
  let p = (o + s) / 2;
  (J(e, p - 4, l - 0.1, p + 4, l + 0.05, r, r + 3 + 0.02, 3963466),
    n.setMaterial(0.6, 0, 0.04, 1),
    _(n, 16777215),
    Y(n, p - 6.5, r + 1.7, l, 0, 1, 1.05, 1.4, i.uv(`notice:plan`), 0.04),
    Y(n, p + 6.2, r + 1.6, l, 0, 1, 0.9, 1.2, i.uv(`notice:owabi`), 0.04),
    Y(n, o, r + 1.7, l - 9, -1, 0, 1.05, 1.4, i.uv(`notice:plan`), 0.04));
  let m = o + 5,
    h = s - 5,
    g = c + 5,
    v = l - 7,
    y = 4.4;
  J(
    e,
    (m + h) / 2 - 4.5,
    (g + v) / 2 - 8,
    (m + h) / 2 + 4.5,
    (g + v) / 2 + 8,
    r,
    r + 52,
    11053218,
    0.9,
    0,
    !0,
  );
  for (let t = 1; t <= 10; t++) {
    let n = r + t * y;
    J(e, m, g, h, v, n - 0.35, n, 9211016);
  }
  (n.setMaterial(0.8, 0, 0, 0), _(n, 13144666));
  let b = Math.max(2, Math.round((h - m) / 6)),
    S = Math.max(2, Math.round((v - g) / 6));
  for (let e = 0; e <= b; e++)
    for (let t = 0; t <= S; t++) {
      if (e !== 0 && e !== b && t !== 0 && t !== S && t !== Math.floor(S / 2))
        continue;
      let i = m + ((h - m) * e) / b,
        o = g + ((v - g) * t) / S;
      n.box(
        i,
        r + (10 * y) / 2,
        o,
        0.32,
        (10 * y) / 2,
        0.32,
        a.u0,
        a.v0,
        a.u1,
        a.v1,
      );
    }
  let C = i.uv(`sheet`);
  (n.setMaterial(0.9, 0, 0, 0),
    _(n, 16777215),
    q(
      e,
      m - 0.8,
      g - 0.8,
      h + 0.8,
      v + 0.8,
      r + 8 * y,
      r + 10 * y + 1.2,
      C,
      6,
      4,
      void 0,
      !1,
    ),
    n.setMaterial(0.5, 0.2, 0, 0),
    _(n, 15253536));
  for (let e = 1; e < 8; e++) {
    let t = r + e * y + 1;
    (n.box(
      (m + h) / 2,
      t,
      v + 0.05,
      (h - m) / 2,
      0.04,
      0.04,
      a.u0,
      a.v0,
      a.u1,
      a.v1,
    ),
      n.box(
        m - 0.05,
        t,
        (g + v) / 2,
        0.04,
        0.04,
        (v - g) / 2,
        a.u0,
        a.v0,
        a.u1,
        a.v1,
      ));
  }
  e.cols.push({ x0: m, z0: g, x1: h, z1: v, y0: 0, y1: r + 10 * y + 1.2 });
  let w = h - 3,
    T = g + 4,
    E = r + 78;
  (n.setMaterial(0.6, 0.4, 0, 0), _(n, 14209200));
  for (let [e, t] of [
    [-0.9, -0.9],
    [0.9, -0.9],
    [0.9, 0.9],
    [-0.9, 0.9],
  ])
    A(n, w + e, T + t, r, E, 0.09, 4);
  for (let e = r + 2; e < E; e += 3)
    (j(n, w - 0.9, e, T - 0.9, w + 0.9, e + 3, T - 0.9, 0.04, 3),
      j(n, w + 0.9, e, T - 0.9, w + 0.9, e + 3, T + 0.9, 0.04, 3),
      j(n, w + 0.9, e, T + 0.9, w - 0.9, e + 3, T + 0.9, 0.04, 3),
      j(n, w - 0.9, e, T + 0.9, w - 0.9, e + 3, T - 0.9, 0.04, 3));
  (J(e, w - 1.6, T - 1.6, w + 1.6, T + 1.6, E, E + 2.2, 14209200, 0.6, 0.4),
    J(
      e,
      w + 1.6,
      T - 0.9,
      w + 3.2,
      T + 0.9,
      E + 0.2,
      E + 2.4,
      15263970,
      0.4,
      0.2,
    ),
    n.setMaterial(0.6, 0.4, 0, 0),
    _(n, 12595242),
    j(n, w, E + 2.2, T, w - 32, E + 2.2, T + 30, 0.5, 4),
    j(n, w, E + 6, T, w - 22, E + 2.4, T + 20.6, 0.06, 3),
    j(n, w, E + 2.2, T, w + 9, E + 2.2, T - 8.4, 0.5, 4),
    J(e, w + 6.5, T - 8, w + 9.5, T - 5, E + 0.5, E + 2, 6974054),
    j(n, w, E + 2.2, T, w, E + 7, T, 0.2, 4),
    _(n, 2763306),
    j(n, w - 20, E + 2.2, T + 18.75, w - 20, r + 46, T + 18.75, 0.03, 3),
    n.setMaterial(0.3, 0, 0.9, 1),
    _(n, 16722458),
    n.box(w, E + 7.3, T, 0.2, 0.2, 0.2, a.u0, a.v0, a.u1, a.v1),
    n.box(w - 32, E + 2.6, T + 30, 0.18, 0.18, 0.18, a.u0, a.v0, a.u1, a.v1));
}
