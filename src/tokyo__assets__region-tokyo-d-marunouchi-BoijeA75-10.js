// tokyo__assets__region-tokyo-d-marunouchi-BoijeA75 10 — math
// Lines 2765-3076 of readable/tokyo__assets__region-tokyo-d-marunouchi-BoijeA75.pretty.js (statement-aligned).
function Ot(e) {
  let n = x.b40,
    i = h,
    a = e.w,
    o = e.base,
    s = e.A,
    c = s.white();
  (X(e, {
    x0: i.x1 + 1.5,
    z0: n.minZ + 1.2,
    x1: n.maxX - 1.15,
    z1: n.maxZ - 1.2,
    pod: 31,
    podCell: `pod:shinen`,
    gh: 5.6,
    shops: { S: `shop:lobby`, W: `shop:lobby` },
    t: { x0: i.x1 + 3, z0: n.minZ + 2.4, x1: n.maxX - 2.4, z1: n.maxZ - 3 },
    top: 158,
    cw: `one`,
  }),
    a.setMaterial(0.75, 0, 0.18, H),
    _(a, 16777215),
    q(
      e,
      n.minX + 1.15,
      n.minZ + 1.2,
      i.x1 + 1.5,
      i.z0 - 1,
      o,
      o + 31,
      s.uv(`pod:shinen`),
      ht,
      gt,
      s.uv(`roof`),
      !0,
    ));
  let l = s.uv(`gravel`),
    u = s.uv(`stone:komatsu`),
    d = s.uv(`stone:inada`);
  (a.setMaterial(0.95, 0, 0, 0),
    _(a, 16777215),
    K(a, i.x0, i.z0, i.x1, i.z1, o + 0.02, l, 2));
  let f = (i.x0 + i.x1) / 2;
  (a.setMaterial(0.7, 0, 0, 0),
    _(a, 16777215),
    K(a, f - 1.1, i.z1 - 4.2, f + 1.1, i.z1, o + 0.05, d, 2),
    K(a, f - 1.1, i.z0 + 2, f + 1.1, i.z0 + 9.6, o + 0.05, d, 2));
  for (let t = 0; t < 6; t++) {
    let n = i.z1 - 4.2 - t * 0.95,
      r = 0.06 + Math.sin(((t + 0.5) / 6) * Math.PI) * 0.28;
    J(e, f - 0.54, n - 0.95, f + 0.54, n, o, o + r, 14210250);
  }
  let p = (t) => {
    let n = f + t * 1.9;
    (a.setMaterial(0.85, 0, 0, 0), _(a, 16777215));
    let r = n + t * 0.4,
      s = i.z1 + 0.6,
      c = n + t * 1.5,
      l = i.z1 - 2.2,
      d = 0.35,
      p = l - s,
      m = -(c - r),
      h = Math.hypot(p, m),
      g = (p / h) * d,
      v = (m / h) * d;
    (W(a, r, s, c, l, o, o + 1.6, u),
      W(a, c + g, l + v, r + g, s + v, o, o + 1.6, u),
      a.quad(
        r,
        o + 1.6,
        s,
        c,
        o + 1.6,
        l,
        c + g,
        o + 1.6,
        l + v,
        r + g,
        o + 1.6,
        s + v,
        u.u0,
        u.v0,
        u.u1,
        u.v1,
      ),
      W(a, r + g, s + v, r, s, o, o + 1.6, u),
      e.cols.push({
        x0: Math.min(r, c, r + g, c + g),
        z0: Math.min(s, l, s + v, l + v),
        x1: Math.max(r, c, r + g, c + g),
        z1: Math.max(s, l, s + v, l + v),
        y0: 0,
        y1: o + 1.6,
      }));
  };
  (p(-1), p(1));
  for (let t = 0; t < 3; t++)
    J(
      e,
      f - 1.6,
      i.z1 - 0.4 - t * 0.4 - 0.4,
      f + 1.6,
      i.z1 - 0.4 - t * 0.4,
      o,
      o + 0.05 + t * 0.05,
      12106416,
    );
  let m = i.z0 + 0.6,
    g = i.z0 + 2;
  (J(e, f - 3.4, m - 0.2, f + 3.4, g + 1.4, o, o + 0.32, 14605010),
    J(e, f - 1, m, f + 1, m + 0.9, o + 0.32, o + 0.75, 9343620, 0.85, 0, !0),
    a.setMaterial(0.6, 0.1, 0, 0),
    _(a, 4606015),
    a.box(f, o + 1.75, m + 0.45, 0.42, 1, 0.11, c.u0, c.v0, c.u1, c.v1),
    j(
      a,
      f - 0.42,
      o + 2.72,
      m + 0.45,
      f + 0.42,
      o + 2.72,
      m + 0.45,
      0.11,
      6,
      0.11,
      !0,
      !0,
    ),
    a.setMaterial(0.95, 0, 0, 0),
    _(a, 8158834),
    a.box(f + 2, o + 0.9, m + 0.2, 0.7, 0.6, 0.45, c.u0, c.v0, c.u1, c.v1),
    a.box(f + 2.2, o + 1.6, m + 0.1, 0.45, 0.3, 0.32, c.u0, c.v0, c.u1, c.v1),
    e.cols.push({
      x0: f - 1,
      z0: m,
      x1: f + 1,
      z1: m + 0.9,
      y0: 0,
      y1: o + 2.8,
    }));
  for (let t of [-1, 1]) kt(e, f + t * 2.7, g + 0.8, o + 0.32);
  (J(e, f - 0.35, g + 0.3, f + 0.35, g + 0.9, o + 0.32, o + 0.85, 10132112),
    a.setMaterial(0.4, 0.8, 0, 0),
    _(a, 4865578),
    A(a, f, g + 0.6, o + 0.85, o + 1.15, 0.28, 10, 0.34));
  let v = s.uv(`hinoki`),
    y = s.uv(`kuyo`),
    b = (t, n, r, i, s) => {
      let l = Math.hypot(r - t, i - n),
        u = (r - t) / l,
        d = (i - n) / l,
        f = d,
        p = -u,
        m = 0;
      for (let e = 0; e < l - 0.01; e += 1.8, m++) {
        let r = Math.min(l, e + 1.8),
          i = t + u * (e + r) * 0.5,
          h = n + d * (e + r) * 0.5;
        if (s && (u === 0 ? h : i) > s[0] && (u === 0 ? h : i) < s[1]) continue;
        let g = 1.6 + (m % 3) * 0.2,
          b = m % 5 == 2;
        (a.setMaterial(b ? 0.2 : 0.85, 0, b ? 0.12 : 0, b ? U : 0),
          _(a, 16777215));
        let x = b ? y : v,
          S = t + u * e,
          C = n + d * e,
          w = t + u * r,
          T = n + d * r;
        (W(a, S, C, w, T, o, o + g, x),
          W(
            a,
            w - f * 0.06,
            T - p * 0.06,
            S - f * 0.06,
            C - p * 0.06,
            o,
            o + g,
            x,
          ),
          a.setMaterial(0.4, 0.7, 0, 0),
          _(a, 8018474),
          a.box(
            (S + w) / 2 - f * 0.03,
            o + g + 0.04,
            (C + T) / 2 - p * 0.03,
            Math.abs(u) * (r - e) * 0.5 + 0.05,
            0.04,
            Math.abs(d) * (r - e) * 0.5 + 0.05,
            c.u0,
            c.v0,
            c.u1,
            c.v1,
          ));
      }
      e.cols.push({
        x0: Math.min(t, r) - 0.05,
        z0: Math.min(n, i) - 0.05,
        x1: Math.max(t, r) + 0.05,
        z1: Math.max(n, i) + 0.05,
        y0: 0,
        y1: o + 1.6,
      });
    };
  (b(i.x0, i.z0, i.x0, i.z1),
    b(i.x0, i.z1, f - 1.6, i.z1),
    b(f + 1.6, i.z1, i.x1, i.z1),
    a.setMaterial(0.85, 0, 0, 0),
    _(a, 16777215));
  let S = s.uv(`masakado:stone`);
  (a.box(
    f + 3.2,
    o + 0.95,
    i.z1 - 1.2,
    0.28,
    0.95,
    0.18,
    c.u0,
    c.v0,
    c.u1,
    c.v1,
  ),
    Y(a, f + 3.2, o + 0.95, i.z1 - 1.2 + 0.18, 0, 1, 0.52, 1.85, S, 0.005),
    e.cols.push({
      x0: f + 2.9,
      z0: i.z1 - 1.4,
      x1: f + 3.5,
      z1: i.z1 - 1,
      y0: 0,
      y1: o + 1.9,
    }));
  let C = s.uv(`masakado:board`);
  (J(e, f - 4.2, i.z1 - 1.3, f - 4.1, i.z1 - 1.25, o, o + 1, 3814440),
    J(e, f - 2.8, i.z1 - 1.3, f - 2.7, i.z1 - 1.25, o, o + 1, 3814440),
    a.setMaterial(0.7, 0, 0, 0),
    _(a, 16777215),
    Y(a, f - 3.45, o + 1.45, i.z1 - 1.25, 0, 1, 1.5, 1.2, C, 0.02));
  let w = new t(r(`maru-masa-plants`));
  At(e, i.x1 - 2.4, i.z0 + 2.4, 2.6, 0);
  for (let t = 0; t < 4; t++) jt(e, i.x0 + 1.4, i.z0 + 3.5 + t * 3.6, w.next());
  a.setMaterial(0.95, 0, 0, 0);
  for (let t = 0; t < (e.detail > 0 ? 14 : 7); t++) {
    _(a, w.next() < 0.5 ? 4090414 : 5143092);
    let e = i.x0 + 0.8 + w.next() * 2.2,
      t = i.z0 + 1 + w.next() * (i.z1 - i.z0 - 6);
    a.box(e, o + 0.25, t, 0.35, 0.25, 0.35, c.u0, c.v0, c.u1, c.v1);
  }
}
function kt(e, t, n, r) {
  let i = e.w,
    a = e.A.white();
  (i.setMaterial(0.9, 0, 0, 0),
    _(i, 10132112),
    i.box(t, r + 0.1, n, 0.3, 0.1, 0.3, a.u0, a.v0, a.u1, a.v1),
    A(i, t, n, r + 0.2, r + 0.9, 0.11, 6),
    i.box(t, r + 0.95, n, 0.26, 0.05, 0.26, a.u0, a.v0, a.u1, a.v1),
    i.setMaterial(0.6, 0, 0.6, 1),
    _(i, 16765072),
    i.box(t, r + 1.15, n, 0.17, 0.15, 0.17, a.u0, a.v0, a.u1, a.v1),
    i.setMaterial(0.9, 0, 0, 0),
    _(i, 10132112),
    A(i, t, n, r + 1.3, r + 1.5, 0.34, 6, 0.06),
    i.box(t, r + 1.56, n, 0.05, 0.06, 0.05, a.u0, a.v0, a.u1, a.v1),
    e.cols.push({
      x0: t - 0.3,
      z0: n - 0.3,
      x1: t + 0.3,
      z1: n + 0.3,
      y0: 0,
      y1: r + 1.5,
    }));
}
function At(e, t, n, r, i) {
  (we(
    e.w,
    t,
    e.base,
    n,
    r * 0.7,
    r,
    Te[i % Te.length],
    17 + i * 13 + Math.round(t * 7 + n * 3),
    e.detail > 0,
  ),
    e.cols.push({
      x0: t - 0.2,
      z0: n - 0.2,
      x1: t + 0.2,
      z1: n + 0.2,
      y0: 0,
      y1: e.base + 3,
    }));
}
function jt(e, t, n, r) {
  let i = e.w,
    a = e.base;
  (i.setMaterial(0.6, 0, 0, 0), _(i, 11037258));
  for (let e = 0; e < 3; e++) {
    let o = e * 2.1 + r * 3;
    j(
      i,
      t,
      a,
      n,
      t + Math.cos(o) * 0.5,
      a + 3.4,
      n + Math.sin(o) * 0.5,
      0.05,
      4,
    );
  }
  we(i, t, a + 2.6, n, 0.6, 1.1, Ee, 31 + Math.round(r * 100), e.detail > 0);
}
