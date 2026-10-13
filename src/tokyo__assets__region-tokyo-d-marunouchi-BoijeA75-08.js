// tokyo__assets__region-tokyo-d-marunouchi-BoijeA75 08 — setmaterial
// Lines 2346-2582 of readable/tokyo__assets__region-tokyo-d-marunouchi-BoijeA75.pretty.js (statement-aligned).
function Ct(e, n) {
  let i = e.w,
    a = e.base,
    o = e.A,
    s = o.white(),
    c = o.uv(`pave:garden`),
    l = o.uv(`flowers`);
  (i.setMaterial(0.9, 0, 0, 0), _(i, 16777215));
  for (let e of n) K(i, e.x0, e.z0, e.x1, e.z1, a + 0.02, c, 3);
  let u = new t(r(`maru-garden`));
  for (let t of n) {
    let n = t.z1 - t.z0 > t.x1 - t.x0,
      r = Math.max(1, Math.floor((n ? t.z1 - t.z0 : t.x1 - t.x0) / 8));
    for (let o = 0; o < r; o++) {
      let c = (o + 0.5) / r,
        u = n ? t.x0 + (t.x1 - t.x0) * 0.3 : t.x0 + (t.x1 - t.x0) * c,
        d = n ? t.z0 + (t.z1 - t.z0) * c : t.z0 + (t.z1 - t.z0) * 0.32,
        f = n ? 1.2 : 2.4,
        p = n ? 2.4 : 1.2;
      (J(e, u - f, d - p, u + f, d + p, a, a + 0.45, 12103840),
        i.setMaterial(0.95, 0, 0, 0),
        _(i, 16777215),
        K(
          i,
          u - f + 0.12,
          d - p + 0.12,
          u + f - 0.12,
          d + p - 0.12,
          a + 0.47,
          l,
          2.4,
        ),
        e.cols.push({
          x0: u - f,
          z0: d - p,
          x1: u + f,
          z1: d + p,
          y0: 0,
          y1: a + 0.45,
        }));
      let m = n ? u + f + 0.8 : u - f - 0.8,
        h = n ? d - p - 0.6 : d + p + 0.6;
      (i.setMaterial(0.5, 0.5, 0, 0),
        _(i, 2306090),
        A(i, m, h, a, a + 3, 0.07, 8),
        i.setMaterial(0.3, 0, 0.75, 1),
        _(i, 16767392),
        i.box(m, a + 3.3, h, 0.2, 0.3, 0.2, s.u0, s.v0, s.u1, s.v1),
        i.setMaterial(0.5, 0.5, 0, 0),
        _(i, 2306090),
        i.box(m, a + 3.68, h, 0.26, 0.08, 0.26, s.u0, s.v0, s.u1, s.v1),
        e.cols.push({
          x0: m - 0.1,
          z0: h - 0.1,
          x1: m + 0.1,
          z1: h + 0.1,
          y0: 0,
          y1: a + 3,
        }));
    }
    let o = e.detail > 0 ? 3 : 2;
    for (let r = 0; r < o; r++)
      wt(
        e,
        n
          ? t.x0 + (t.x1 - t.x0) * 0.75
          : t.x0 + (t.x1 - t.x0) * ((r + 0.5) / o),
        n
          ? t.z0 + (t.z1 - t.z0) * ((r + 0.5) / o)
          : t.z0 + (t.z1 - t.z0) * 0.75,
        u.next() * 3,
      );
  }
  let d = n[0];
  (Tt(e, (d.x0 + d.x1) / 2 + 1.5, d.z0 + (d.z1 - d.z0) * 0.55),
    i.setMaterial(0.8, 0, 0, 0),
    _(i, 16777215));
  let f = o.uv(`sign:square`);
  (J(e, d.x1 - 2.6, d.z1 - 0.9, d.x1 - 0.4, d.z1 - 0.4, a, a + 0.7, 9210500),
    Y(i, d.x1 - 1.5, a + 0.38, d.z1 - 0.4, 0, 1, 2, 0.55, f, 0.01));
}
function wt(e, t, n, r) {
  let i = e.w,
    a = e.base,
    o = e.A.white();
  (i.setMaterial(0.5, 0.6, 0, 0),
    _(i, 2895408),
    A(i, t, n, a, a + 0.72, 0.035, 6),
    A(i, t, n, a + 0.72, a + 0.74, 0.38, 10));
  for (let e of [0, Math.PI]) {
    let s = t + Math.cos(r + e) * 0.62,
      c = n + Math.sin(r + e) * 0.62;
    i.box(s, a + 0.44, c, 0.21, 0.02, 0.21, o.u0, o.v0, o.u1, o.v1);
    let l = s + Math.cos(r + e) * 0.2,
      u = c + Math.sin(r + e) * 0.2;
    i.box(
      l,
      a + 0.66,
      u,
      Math.abs(Math.sin(r + e)) * 0.2 + 0.02,
      0.22,
      Math.abs(Math.cos(r + e)) * 0.2 + 0.02,
      o.u0,
      o.v0,
      o.u1,
      o.v1,
    );
    for (let [e, t] of [
      [-0.17, -0.17],
      [0.17, 0.17],
      [-0.17, 0.17],
      [0.17, -0.17],
    ])
      i.box(s + e, a + 0.22, c + t, 0.015, 0.22, 0.015, o.u0, o.v0, o.u1, o.v1);
  }
}
function Tt(e, t, n) {
  let r = e.w,
    i = e.base;
  (J(e, t - 1.6, n - 0.8, t + 1.6, n + 0.8, i, i + 0.4, 6974054, 0.7, 0, !0),
    r.setMaterial(0.35, 0.8, 0, 0),
    _(r, 5917234),
    j(r, t - 1.1, i + 0.6, n, t - 0.1, i + 1.5, n + 0.2, 0.42, 8, 0.3, !0, !0),
    j(r, t - 0.1, i + 1.5, n + 0.2, t + 0.4, i + 1.8, n, 0.3, 8, 0.24, !1, !0),
    j(
      r,
      t + 0.4,
      i + 0.55,
      n - 0.1,
      t + 1.3,
      i + 0.85,
      n + 0.1,
      0.38,
      8,
      0.28,
      !0,
      !0,
    ));
}
function Et(e) {
  let t = x.b45,
    n = e.w,
    r = e.base,
    i = e.A;
  X(e, {
    x0: -272,
    z0: t.minZ + 2,
    x1: t.maxX - 1.15,
    z1: t.maxZ - 1.15,
    pod: 31,
    podCell: `pod:shinen`,
    gh: 5.6,
    shops: { E: `shop:lobby`, N: `shop:lobby` },
    t: { x0: -270.5, z0: t.minZ + 4, x1: t.maxX - 2.6, z1: t.maxZ - 6 },
    top: 120,
    cw: `meiji`,
  });
  let a = t.minX + 1,
    o = -272,
    s = t.minZ + 5.5,
    c = t.maxZ - 1,
    l = i.uv(`granite`),
    u = i.uv(`colwin`),
    d = r + 6.2,
    f = r + 26.5,
    p = r + 31;
  (n.setMaterial(0.8, 0, 0.18, H),
    _(n, 16777215),
    q(
      e,
      a,
      s,
      o,
      c,
      r,
      d,
      (e) => (e === `E` ? null : u),
      3.6,
      6.2,
      void 0,
      !0,
    ));
  let m = a + 2.2;
  (n.setMaterial(0.75, 0, 0.18, H),
    _(n, 16777215),
    G(n, m, s, m, c, d, f, u, 3.6, 5.1),
    G(n, a, c, o, c, d, f, u, 3.6, 5.1),
    G(n, o, s, a + 2.2, s, d, f, u, 3.6, 5.1),
    n.setMaterial(0.8, 0, 0, 0),
    _(n, 16777215),
    n.quad(a, f, s, a, f, c, m, f, c, m, f, s, l.u0, l.v0, l.u1, l.v1),
    K(n, a, s, m, c, d + 0.02, l, 3));
  let h = (c - s) / 10;
  for (let t = 0; t < 10; t++) {
    let r = s + h * (t + 0.5),
      i = a + 1;
    (J(e, i - 0.85, r - 0.85, i + 0.85, r + 0.85, d, d + 0.7, 13682872),
      n.setMaterial(0.7, 0, 0, 0),
      _(n, 14538440),
      A(n, i, r, d + 0.7, f - 1.6, 0.72, 12, 0.62, !1),
      _(n, 15130578),
      A(n, i, r, f - 1.6, f - 0.5, 0.64, 12, 0.86, !1),
      J(e, i - 0.95, r - 0.95, i + 0.95, r + 0.95, f - 0.5, f, 15130578),
      e.cols.push({
        x0: i - 0.72,
        z0: r - 0.72,
        x1: i + 0.72,
        z1: r + 0.72,
        y0: d,
        y1: f,
      }));
  }
  (n.setMaterial(0.8, 0, 0, 0),
    _(n, 16777215),
    q(e, a, s, o, c, f, p - 0.8, l, 3, 3, void 0, !1),
    J(e, a - 0.6, s - 0.6, -271.8, c + 0.6, p - 0.8, p, 14867405),
    n.setMaterial(0.75, 0, 0.18, H),
    _(n, 16777215),
    q(
      e,
      a + 1.4,
      s + 1.4,
      o,
      c - 1.4,
      p,
      p + 4.2,
      u,
      3.6,
      4.2,
      i.uv(`roof`),
      !1,
    ),
    e.cols.push({ x0: a, z0: s, x1: o, z1: c, y0: 0, y1: p }),
    n.setMaterial(0.85, 0, 0, 0),
    _(n, 16777215),
    K(n, t.minX + 1, t.minZ + 1, -272, s, r + 0.02, i.uv(`pave:gyoko`), 4));
}
