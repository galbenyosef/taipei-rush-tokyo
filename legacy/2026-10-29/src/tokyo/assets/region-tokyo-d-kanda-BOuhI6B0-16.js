// tokyo/assets/region-tokyo-d-kanda-BOuhI6B0 16 — top
// Lines 4843-5146 of readable/tokyo/assets/region-tokyo-d-kanda-BOuhI6B0.pretty.js (statement-aligned).
function kn(e, t) {
  let n = t.white(),
    r = Z.rail;
  e.setMaterial(0.55, 0.35, 0, 0);
  for (let t of [-2.15, 2.15]) {
    let i = On(t, Z.sz) - 0.6,
      a = On(t, Z.nz) + 0.6;
    (D(e, 7240824),
      Dn(e, i, a, t - 0.45, t + 0.45, r - 0.8, r + 1.2, n),
      D(e, 6187622));
    let o = t > 0 ? t + 0.45 : t - 0.45 - 0.06;
    for (let t = i + 0.8; t < a - 0.4; t += 1.6)
      Dn(e, t - 0.05, t + 0.05, o, o + 0.06, r - 0.8, r + 1.2, n, !1);
    Dn(e, i, a, t - 0.55, t + 0.55, r + 1.12, r + 1.24, n);
  }
  let i = Math.min(On(-2, Z.sz), On(2, Z.sz)),
    a = Math.max(On(-2, Z.nz), On(2, Z.nz));
  D(e, 5002836);
  for (let t = i + 0.6; t < a - 0.3; t += 1.8)
    Dn(e, t - 0.18, t + 0.18, -1.7, 1.7, r - 0.8, r - 0.35, n);
  D(e, 3812900);
  for (let t = i + 0.3; t < a - 0.2; t += 0.6)
    Dn(e, t - 0.11, t + 0.11, -1.25, 1.25, r - 0.35, r - 0.17, n);
  (e.setMaterial(0.35, 0.8, 0, 0), D(e, 9077880));
  for (let t of [-0.72, 0.72]) Dn(e, i, a, t - 0.04, t + 0.04, r - 0.17, r, n);
  (e.setMaterial(0.7, 0.1, 0, 0),
    D(e, 14209184),
    Dn(e, i, a, 1.45, 1.62, r - 0.1, r + 0.12, n));
}
function An(e, t, n, r, i) {
  let a = t.uv(`gorge:conc`),
    o = t.white(),
    { half: s, y0: c, y1: l } = pn,
    u = r + i * 0.025;
  e.setMaterial(0.95, 0, 0, 0);
  let d = i > 0 ? n - s : n + s,
    f = i > 0 ? n + s : n - s;
  (D(e, 658445),
    O(e, d, u, f, u, c, l - 0.6, o),
    D(e, 1448218),
    O(e, d, u, f, u, l - 0.6, l, o),
    e.setMaterial(0.9, 0, 0, 0),
    D(e, 13947076));
  let p = r + i * 0.13;
  for (let t of [-1, 1])
    j(e, n + t * (s + 0.3), p, X - 0.2, l + 0.6, 0.3, 0.13, 0, i, a);
  j(e, n, p, l, l + 0.6, s + 0.6, 0.13, 0, i, a);
}
function jn(e, t, n) {
  let r = t.uv(`gorge:conc`),
    i = t.white(),
    a = n.minX + 0.35,
    o = n.maxX - 0.35,
    s = C.top,
    c = C.bottom,
    l = (s + c) / 2,
    u = (c - s) / 2,
    d = X + 1.3,
    f = -2.15,
    p = -m,
    h = (e) => f + (d - f) * ((e - l) / u) ** 2,
    g = (e) => 0.7 + 0.65 * ((e - l) / u) ** 2,
    _ = Array.from({ length: 19 }, (e, t) => s + ((c - s) * t) / 18);
  (e.setMaterial(0.9, 0, 0.1, 1), D(e, 13157560));
  for (let t = 0; t < 18; t++) {
    let n = _[t],
      i = _[t + 1],
      s = h(n),
      c = h(i);
    (e.quad(a, s, n, o, s, n, o, c, i, a, c, i, r.u0, r.v0, r.u1, r.v1),
      e.quad(
        a,
        c + g(i),
        i,
        o,
        c + g(i),
        i,
        o,
        s + g(n),
        n,
        a,
        s + g(n),
        n,
        r.u0,
        r.v0,
        r.u1,
        r.v1,
      ));
  }
  (e.setMaterial(0.88, 0, 0.14, 1), D(e, 14867920));
  for (let t = 0; t < 18; t++) {
    let n = _[t],
      i = _[t + 1],
      s = h(n),
      c = h(i),
      l = s + g(n),
      u = c + g(i);
    (e.quad(a, s, n, a, c, i, a, u, i, a, l, n, r.u0, r.v0, r.u1, r.v1),
      e.quad(o, c, i, o, s, n, o, l, n, o, u, i, r.u0, r.v0, r.u1, r.v1));
  }
  (e.setMaterial(0.9, 0, 0, 0),
    D(e, 12104872),
    j(
      e,
      (a + o) / 2,
      s + 0.45,
      X - 0.3,
      d + 0.9,
      (o - a) / 2 + 0.2,
      0.45,
      0,
      1,
      r,
    ),
    j(
      e,
      (a + o) / 2,
      c - 0.45,
      X - 0.3,
      d + 0.9,
      (o - a) / 2 + 0.2,
      0.45,
      0,
      1,
      r,
    ),
    D(e, 13683904));
  for (let t of [a + 0.3, (a + o) / 2, o - 0.3])
    for (let n = s + 1.1; n < c - 0.8; n += 1.45) {
      let i = h(n) + g(n);
      p - i < 0.6 ||
        j(e, t, n, i - 0.05, p, 0.24, 0.24, 0, 1, r, void 0, void 0, !1);
    }
  for (let [t, a] of [
    [n.minX, -1],
    [n.maxX, 1],
  ]) {
    (D(e, 14078662),
      j(
        e,
        t - a * 0.1,
        (s + c) / 2,
        -0.12,
        0.2,
        0.28,
        (c - s) / 2 + 1.4,
        0,
        1,
        r,
      ),
      D(e, 13025974),
      j(
        e,
        t - a * 0.18,
        (s + c) / 2,
        0.15,
        1.12,
        0.12,
        (c - s) / 2 + 1.4,
        0,
        1,
        r,
      ),
      D(e, 10262670));
    for (let n = s - 0.9; n < c + 0.6; n += 1.5)
      j(
        e,
        t - a * 0.18 + a * 0.125,
        n + 0.6,
        0.38,
        0.88,
        0.005,
        0.5,
        0,
        1,
        i,
        void 0,
        void 0,
        !1,
      );
    (D(e, 14210248),
      j(
        e,
        t - a * 0.18,
        (s + c) / 2,
        1.12,
        1.2,
        0.16,
        (c - s) / 2 + 1.4,
        0,
        1,
        r,
      ));
    for (let n of [s - 1.6, c + 1.6])
      (D(e, 13157560),
        j(e, t - a * 0.3, n, 0.15, 1.65, 0.32, 0.32, 0, 1, r),
        j(e, t - a * 0.3, n, 1.65, 1.8, 0.38, 0.38, 0, 1, r));
  }
}
function Mn(e, t, n, r, i, a) {
  let o = t.uv(`gorge:conc`);
  (e.setMaterial(0.9, 0, 0, 0),
    D(e, 12631216),
    j(e, n - r * 0.15, (i + a) / 2, -0.15, 1.05, 0.15, (a - i) / 2, 0, 1, o),
    D(e, 14078662),
    j(e, n - r * 0.15, (i + a) / 2, 1.05, 1.15, 0.2, (a - i) / 2, 0, 1, o));
}
function Nn(e, t, n, r, i) {
  let a = t.white(),
    o = t.uv(`gorge:stone`);
  if (i - r < 0.5) return;
  (e.setMaterial(0.9, 0, 0, 0),
    D(e, 11052186),
    j(e, (r + i) / 2, n, S - 0.05, S + 0.35, 0.16, (i - r) / 2, 1, 0, o),
    e.setMaterial(0.5, 0.6, 0, 0),
    D(e, 3424828));
  let s = Math.max(1, Math.round((i - r) / 2));
  for (let t = 0; t <= s; t++) {
    let o = r + ((i - r) * t) / s;
    P(e, o, S + 0.35, n, o, S + 1.1, n, 0.035, a);
  }
  for (let t of [S + 0.55, S + 0.82, S + 1.08])
    P(e, r, t, n, i, t, n, t > 1.15 ? 0.03 : 0.018, a);
}
function Pn(e, t) {
  let n = t.uv(`gorge:conc`),
    r = t.white(),
    i = C.top,
    a = C.top + v.width,
    o = (i + a) / 2,
    s = v.width / 2;
  (e.setMaterial(0.9, 0, 0, 0),
    D(e, 11841700),
    j(
      e,
      (v.x0 + v.xLand) / 2,
      o,
      y - 0.45,
      y,
      (v.xLand - v.x0) / 2,
      s,
      0,
      1,
      n,
    ),
    D(e, 9209980));
  for (let t of [v.x0 + 0.6, v.xLand - 0.6])
    j(e, t, i + 0.5, X - 0.6, y - 0.45, 0.2, 0.5, 0, 1, n);
  let c = Math.ceil((v.top - y) / v.rise),
    l = (v.top - y) / c,
    u = (v.x1 - v.xLand) / c;
  D(e, 12104872);
  for (let t = 1; t <= c; t++) {
    let r = y + t * l;
    j(e, v.xLand + (t - 0.5) * u, o, r - 0.55, r, u / 2, s, 0, 1, n);
  }
  (j(e, v.x1 + 0.8, o, -0.4, v.top, 0.8, s, 0, 1, n),
    e.setMaterial(0.4, 0.7, 0, 0),
    D(e, 10133668));
  let d = a - 0.06,
    f = (e) =>
      e <= v.xLand
        ? y
        : e >= v.x1
          ? v.top
          : y + ((e - v.xLand) / (v.x1 - v.xLand)) * (v.top - y);
  for (let t = v.xLand; t <= v.x1 + 1.6 + 0.01; t += 1.4)
    P(e, t, f(t), d, t, f(t) + 0.95, d, 0.025, r);
  (P(e, v.xLand, y + 0.95, d, v.x1, v.top + 0.95, d, 0.03, r),
    P(e, v.x1, v.top + 0.95, d, v.x1 + 1.6, v.top + 0.95, d, 0.03, r),
    P(e, v.x1 + 1.6, v.top, i, v.x1 + 1.6, v.top + 0.95, i, 0.025, r),
    P(e, v.x1 + 1.6, v.top + 0.95, i, v.x1 + 1.6, v.top + 0.95, d, 0.03, r),
    P(e, v.x0, y, i, v.x0, y + 0.95, i, 0.025, r),
    P(e, v.x0, y + 0.95, i, v.x0, y + 0.95, a, 0.03, r),
    D(e, 3424828));
  let p = C.top - 0.3,
    m = v.x1 + 1.65,
    h = m + 1.5;
  for (let t of [S + 0.12, S + 1.05]) P(e, m, t, p, h, t, p, 0.025, r);
  for (let t of [m, h]) P(e, t, S + 0.12, p, t, S + 1.05, p, 0.025, r);
  for (let t = m + 0.15; t < h; t += 0.15)
    P(e, t, S + 0.12, p, t, S + 1.05, p, 0.01, r);
  let g = h + 1.2,
    _ = S + 0.72,
    b = C.top - 0.22,
    x = 0.3;
  e.setMaterial(0.7, 0, 0, 0);
  for (let t = 0; t < 12; t++) {
    let n = (t / 12) * Math.PI * 2,
      i = ((t + 1) / 12) * Math.PI * 2;
    (D(e, t % 3 == 0 ? 15921904 : 15754264),
      P(
        e,
        g + Math.cos(n) * x,
        _ + Math.sin(n) * x,
        b,
        g + Math.cos(i) * x,
        _ + Math.sin(i) * x,
        b,
        0.06,
        r,
      ));
  }
}
