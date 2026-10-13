// tokyo__assets__region-tokyo-d-marunouchi-BoijeA75 06 — setmaterial
// Lines 1684-2000 of readable/tokyo__assets__region-tokyo-d-marunouchi-BoijeA75.pretty.js (statement-aligned).
function q(e, t, n, r, i, a, o, s, c, l, u, d = !0) {
  let f = mt(t, n, r, i);
  for (let t of [`N`, `E`, `S`, `W`]) {
    let n = typeof s == `function` ? s(t) : s;
    if (!n) continue;
    let [r, i, u, d] = f[t];
    G(e.w, r, i, u, d, a, o, n, c, l);
  }
  (u && e.w.quad(t, o, i, r, o, i, r, o, n, t, o, n, u.u0, u.v0, u.u1, u.v1),
    d && e.cols.push({ x0: t, z0: n, x1: r, z1: i, y0: a, y1: o }));
}
function J(e, t, n, r, i, a, o, s, c = 0.85, l = 0, u = !1) {
  let d = e.A.white();
  (e.w.setMaterial(c, l, 0, 0),
    _(e.w, s),
    e.w.box(
      (t + r) / 2,
      (a + o) / 2,
      (n + i) / 2,
      (r - t) / 2,
      (o - a) / 2,
      (i - n) / 2,
      d.u0,
      d.v0,
      d.u1,
      d.v1,
    ),
    u && e.cols.push({ x0: t, z0: n, x1: r, z1: i, y0: a, y1: o }));
}
function Y(e, t, n, r, i, a, o, s, c, l = 0.05) {
  let u = (o / 2) * a,
    d = -i * (o / 2),
    f = t + i * l,
    p = r + a * l;
  e.quad(
    f - u,
    n - s / 2,
    p - d,
    f + u,
    n - s / 2,
    p + d,
    f + u,
    n + s / 2,
    p + d,
    f - u,
    n + s / 2,
    p - d,
    c.u0,
    c.v0,
    c.u1,
    c.v1,
  );
}
var ht = 12.8,
  gt = 8.8,
  _t = 12.8,
  vt = 16;
function X(e, t) {
  let n = e.w,
    r = e.A,
    i = e.base,
    a = r.uv(t.podCell),
    o = mt(t.x0, t.z0, t.x1, t.z1);
  for (let e of [`N`, `E`, `S`, `W`]) {
    let [s, c, l, u] = o[e],
      d = t.shops[e];
    (d
      ? (n.setMaterial(0.25, 0.2, 0.32, U | 16),
        _(n, 16777215),
        G(
          n,
          s,
          c,
          l,
          u,
          i,
          i + t.gh,
          typeof d == `string` ? r.uv(d) : d.map((e) => r.uv(e)),
          6.4,
          t.gh,
        ))
      : (n.setMaterial(0.8, 0, 0.18, H),
        _(n, 16777215),
        G(n, s, c, l, u, i, i + t.gh, a, ht, gt)),
      n.setMaterial(0.75, 0, 0.2, H),
      _(n, 16777215),
      G(n, s, c, l, u, i + t.gh, i + t.pod, a, ht, gt));
  }
  let s = r.white();
  (n.setMaterial(0.6, 0.3, 0, 0),
    _(n, 3947062),
    n.box(
      (t.x0 + t.x1) / 2,
      i + t.gh + 0.12,
      (t.z0 + t.z1) / 2,
      (t.x1 - t.x0) / 2 + 0.9,
      0.12,
      (t.z1 - t.z0) / 2 + 0.9,
      s.u0,
      s.v0,
      s.u1,
      s.v1,
    ),
    n.setMaterial(0.8, 0, 0, 0),
    _(n, 13616822),
    n.box(
      (t.x0 + t.x1) / 2,
      i + t.pod + 0.3,
      (t.z0 + t.z1) / 2,
      (t.x1 - t.x0) / 2 + 0.45,
      0.3,
      (t.z1 - t.z0) / 2 + 0.45,
      s.u0,
      s.v0,
      s.u1,
      s.v1,
    ),
    e.cols.push({
      x0: t.x0,
      z0: t.z0,
      x1: t.x1,
      z1: t.z1,
      y0: 0,
      y1: i + t.pod,
    }));
  let c = r.uv(`roof`);
  (n.setMaterial(0.9, 0, 0, 0),
    _(n, 16777215),
    K(n, t.x0, t.z0, t.x1, t.z1, i + t.pod + 0.6, c, 6));
  let l = r.uv(`cw:${t.cw}`),
    u = i + t.pod + 0.6,
    d = t.crown,
    f = d ? t.top - d.n * 4 : t.top;
  (n.setMaterial(0.42, 0.1, 0.4, H), _(n, 16777215));
  let p = t.t;
  (q(e, p.x0, p.z0, p.x1, p.z1, u, i + f, l, _t, vt, void 0, !0),
    d &&
      (n.setMaterial(0.42, 0.1, 0.4, H),
      _(n, 16777215),
      q(
        e,
        p.x0 + d.d,
        p.z0 + d.d,
        p.x1 - d.d,
        p.z1 - d.d,
        i + f,
        i + t.top,
        l,
        _t,
        vt,
        void 0,
        !0,
      ),
      n.setMaterial(0.9, 0, 0, 0),
      _(n, 16777215),
      K(n, p.x0, p.z0, p.x1, p.z1, i + f + 0.02, c, 6)));
  let m = d ? p.x0 + d.d : p.x0,
    h = d ? p.z0 + d.d : p.z0,
    g = d ? p.x1 - d.d : p.x1,
    v = d ? p.z1 - d.d : p.z1;
  (n.setMaterial(0.9, 0, 0, 0),
    _(n, 16777215),
    K(n, m, h, g, v, i + t.top, c, 6),
    J(e, m, h, g, h + 0.5, i + t.top, i + t.top + 1.4, 13159632, 0.5, 0.4),
    J(e, m, v - 0.5, g, v, i + t.top, i + t.top + 1.4, 13159632, 0.5, 0.4),
    J(e, m, h, m + 0.5, v, i + t.top, i + t.top + 1.4, 13159632, 0.5, 0.4),
    J(e, g - 0.5, h, g, v, i + t.top, i + t.top + 1.4, 13159632, 0.5, 0.4));
  let y = (m + g) / 2,
    b = (h + v) / 2;
  (J(
    e,
    y - (g - m) * 0.25,
    b - (v - h) * 0.2,
    y + (g - m) * 0.2,
    b + (v - h) * 0.25,
    i + t.top,
    i + t.top + 4.5,
    10132636,
  ),
    n.setMaterial(0.3, 0, 0.9, 1),
    _(n, 16722458));
  for (let [e, r] of [
    [m + 0.6, h + 0.6],
    [g - 0.6, v - 0.6],
  ])
    n.box(e, i + t.top + 1.7, r, 0.18, 0.18, 0.18, s.u0, s.v0, s.u1, s.v1);
}
function yt(e) {
  let t = x.b106,
    n = t.minX + 1.15,
    r = t.maxX - 1.15,
    i = t.minZ + 1.2;
  X(e, {
    x0: n,
    z0: i,
    x1: r,
    z1: 72.4,
    pod: 31,
    podCell: `pod:en`,
    gh: 5.6,
    shops: {
      E: [`shop:mall`, `shop:boutique2`, `shop:mall1`],
      N: [`shop:boutique1`, `shop:boutique0`, `shop:cafe`, `shop:boutique2`],
      W: [`shop:boutique0`, `shop:cafe`],
      S: [`shop:cafe`, `shop:boutique1`],
    },
    t: { x0: n + 6.5, z0: i + 5.5, x1: r - 6.5, z1: 66.9 },
    top: 150,
    cw: `en`,
  });
  let a = e.w,
    o = e.base;
  (a.setMaterial(0.4, 0, 0.5, U),
    _(a, 16777215),
    Y(a, r, o + 7, i + 6, 1, 0, 7.2, 2, e.A.uv(`name:en`), 0.95),
    Y(a, n + 8, o + 7, i, 0, -1, 7.2, 2, e.A.uv(`name:en`), 0.95));
}
function bt(e) {
  let t = O,
    n = t.minX + 1.15,
    r = t.maxX - 1.15,
    i = t.minZ + 0.4,
    a = t.maxZ - 1.2;
  X(e, {
    x0: n,
    z0: i,
    x1: r,
    z1: a,
    pod: 31,
    podCell: `pod:shinen`,
    gh: 5.6,
    shops: {
      E: [`shop:mall1`, `shop:boutique0`, `shop:mall`],
      S: [`shop:boutique2`, `shop:cafe`, `shop:boutique1`],
      W: [`shop:cafe`, `shop:boutique0`],
    },
    t: { x0: n + 4.5, z0: i + 3, x1: r - 4.5, z1: a - 4.5 },
    top: 158,
    cw: `shinen`,
    crown: { n: 5, d: 2.6 },
  });
  let o = e.w,
    s = e.base,
    c = e.A.white(),
    l = s + 31 + 0.6;
  (o.setMaterial(0.1, 0.2, 0, 0),
    _(o, 12110028),
    o.box(
      r - 0.1,
      l + 0.55,
      (i + a) / 2,
      0.04,
      0.55,
      (a - i) / 2,
      c.u0,
      c.v0,
      c.u1,
      c.v1,
    ),
    o.box(
      (n + r) / 2,
      l + 0.55,
      a - 0.1,
      (r - n) / 2,
      0.55,
      0.04,
      c.u0,
      c.v0,
      c.u1,
      c.v1,
    ),
    o.setMaterial(0.9, 0, 0, 0),
    _(o, 5138996));
  for (let e = i + 3; e < a - 2; e += 4.5)
    o.box(r - 1.1, l + 0.35, e, 0.45, 0.35, 0.9, c.u0, c.v0, c.u1, c.v1);
  (o.setMaterial(0.5, 0, 0.55, 1), _(o, 16767136));
  let u = { x0: n + 4.5, z1: a - 4.5, x1: r - 4.5 };
  (o.box(
    u.x1 + 1.2,
    l + 3.4,
    (i + a) / 2,
    1.2,
    0.08,
    (a - i) / 2 - 3,
    c.u0,
    c.v0,
    c.u1,
    c.v1,
  ),
    o.box(
      (n + r) / 2,
      l + 3.4,
      u.z1 + 1.2,
      (r - n) / 2 - 4,
      0.08,
      1.2,
      c.u0,
      c.v0,
      c.u1,
      c.v1,
    ),
    o.setMaterial(0.4, 0, 0.5, U),
    _(o, 16777215),
    Y(
      o,
      u.x1,
      l + 2.2,
      (i + a) / 2,
      1,
      0,
      5.4,
      1.35,
      e.A.uv(`name:terrace`),
      0.06,
    ),
    Y(o, r, s + 7, a - 6, 1, 0, 7.2, 1.8, e.A.uv(`name:shinen`), 0.95));
}
