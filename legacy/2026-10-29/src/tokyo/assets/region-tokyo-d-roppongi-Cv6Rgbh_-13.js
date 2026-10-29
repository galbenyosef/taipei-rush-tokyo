// tokyo/assets/region-tokyo-d-roppongi-Cv6Rgbh_ 13 — setmaterial
// Lines 3562-3828 of readable/tokyo/assets/region-tokyo-d-roppongi-Cv6Rgbh_.pretty.js (statement-aligned).
function kt(e, t, n, r, i, a, o, s, c) {
  let l = t.white(),
    u = (e) => (s ? [n + e, r] : [n, r + e]),
    d = Math.max(0.22, a * 0.05);
  for (let t of [-i, i]) {
    let [n, r] = u(t);
    (e.setMaterial(0.7, 0, 0, 0),
      A(e, Q),
      ie(e, n, r, o, o + a, d, l, 10),
      A(e, 1710618),
      ie(e, n, r, o, o + 0.5, d * 1.12, l, 10));
  }
  let f = +!!s,
    p = +!s,
    m = (t, a, o, s, c) => {
      (A(e, c), N(e, n, r, t, a, i + o, s, -p, f, l));
    };
  (e.setMaterial(0.7, 0, 0, 0),
    m(o + a * 0.72, o + a * 0.72 + d * 1.1, d * 2.2, d * 0.55, Q),
    m(o + a, o + a + d * 1, d * 3.2, d * 0.8, Q),
    m(o + a + d * 1, o + a + d * 1.7, d * 4.2, d * 0.95, 1710618));
  let h = o + a * 0.72 + d * 1.1;
  (A(e, Q),
    N(e, n, r, h, o + a, d * 0.6, d * 0.5, -p, f, l),
    e.setMaterial(0.6, 0, 0.12, 1),
    A(e, 16777215));
  let g = Math.min(i * 0.55, 1),
    _ = (o + a - h) * 0.85,
    v = t.uv(c);
  (N(
    e,
    n,
    r,
    h + (o + a - h - _) / 2,
    h + (o + a - h + _) / 2,
    g / 2,
    d * 0.62,
    -p,
    f,
    l,
    v,
    v,
  ),
    e.setMaterial(0.7, 0, 0, 0),
    A(e, Q));
  let y = o + a + d * 1.7,
    b = y + i * 0.42,
    x = d * 0.5;
  for (let t of [-1, 1]) {
    let [n, r] = u(t * i * 0.92),
      [a, o] = u(0);
    for (let t of [-x, x]) {
      let i = s ? 0 : t,
        c = s ? t : 0;
      (e.quad(
        n + i,
        y,
        r + c,
        a + i,
        b,
        o + c,
        a + i,
        b + d * 0.9,
        o + c,
        n + i,
        y + d * 0.9,
        r + c,
        l.u0,
        l.v0,
        l.u1,
        l.v1,
      ),
        e.quad(
          n + i,
          y + d * 0.9,
          r + c,
          a + i,
          b + d * 0.9,
          o + c,
          a + i,
          b,
          o + c,
          n + i,
          y,
          r + c,
          l.u0,
          l.v0,
          l.u1,
          l.v1,
        ));
    }
    A(e, 1710618);
    let c = [n - (s ? 0 : x), y + d * 0.9, r - (s ? x : 0)],
      f = [a - (s ? 0 : x), b + d * 0.9, o - (s ? x : 0)],
      p = [a + (s ? 0 : x), b + d * 0.9, o + (s ? x : 0)],
      m = [n + (s ? 0 : x), y + d * 0.9, r + (s ? x : 0)];
    (e.quad(
      c[0],
      c[1],
      c[2],
      f[0],
      f[1],
      f[2],
      p[0],
      p[1],
      p[2],
      m[0],
      m[1],
      m[2],
      l.u0,
      l.v0,
      l.u1,
      l.v1,
    ),
      e.quad(
        m[0],
        m[1],
        m[2],
        p[0],
        p[1],
        p[2],
        f[0],
        f[1],
        f[2],
        c[0],
        c[1],
        c[2],
        l.u0,
        l.v0,
        l.u1,
        l.v1,
      ),
      A(e, Q));
  }
  N(e, n, r, y, b, d * 0.35, d * 0.4, -p, f, l);
}
function At(e, t, n, r, i, a, o, s) {
  let c = t.white();
  (e.setMaterial(0.7, 0, 0, 0), A(e, Q));
  for (let t of [-i, i]) N(e, n, r + t, o, o + a, 0.09, 0.09, 1, 0, c);
  if (
    (N(e, n, r, o + a * 0.78, o + a * 0.78 + 0.1, 0.07, i + 0.18, 1, 0, c),
    N(e, n, r, o + a, o + a + 0.12, 0.09, i + 0.3, 1, 0, c),
    A(e, 1710618),
    N(e, n, r, o + a + 0.12, o + a + 0.2, 0.11, i + 0.38, 1, 0, c),
    s)
  ) {
    (e.setMaterial(0.7, 0, 0, 0), A(e, 16777215));
    let a = t.uv(`hono`);
    for (let t of [-i, i])
      j(
        e,
        n - 0.1 - u.DETAIL,
        r + t + 0.08,
        n - 0.1 - u.DETAIL,
        r + t - 0.08,
        o + 0.5,
        o + 1.6,
        a,
      );
  }
}
function jt(e, t, n, r, i, a, o, s, c, l, u) {
  let d = t.white();
  (e.setMaterial(0.9, 0, 0, 0),
    A(e, 10131084),
    N(
      e,
      (n + i) / 2,
      (r + a) / 2,
      o - 0.05,
      o + 0.6,
      (i - n) / 2 + 0.5,
      (a - r) / 2 + 0.5,
      0,
      1,
      d,
    ));
  let f = o + 0.6;
  (e.setMaterial(0.85, 0, 0, 0), A(e, 15920868));
  let p = u ? 1.6 : 0;
  (N(
    e,
    (n + p + i) / 2,
    (r + a) / 2,
    f,
    f + s,
    (i - n - p) / 2,
    (a - r) / 2,
    0,
    1,
    d,
    void 0,
    void 0,
    !1,
  ),
    e.setMaterial(0.7, 0, 0, 0),
    A(e, Q));
  for (
    let t = r;
    t <= a + 0.01;
    t += (a - r) / Math.max(1, Math.round((a - r) / 3))
  )
    (N(e, n + 0.02, t, f, f + s, 0.2, 0.2, 0, 1, d),
      N(e, i - 0.02, t, f, f + s, 0.2, 0.2, 0, 1, d));
  for (
    let t = n;
    t <= i + 0.01;
    t += (i - n) / Math.max(1, Math.round((i - n) / 3))
  )
    (N(e, t, r + 0.02, f, f + s, 0.2, 0.2, 0, 1, d),
      N(e, t, a - 0.02, f, f + s, 0.2, 0.2, 0, 1, d));
  (N(
    e,
    (n + i) / 2,
    (r + a) / 2,
    f + s - 0.5,
    f + s,
    (i - n) / 2 + 0.22,
    (a - r) / 2 + 0.22,
    0,
    1,
    d,
    void 0,
    void 0,
    !1,
  ),
    u &&
      (e.setMaterial(0.6, 0, 0.35, 1),
      A(e, 16767130),
      j(e, n + p - 0.02, r + 0.6, n + p - 0.02, a - 0.6, f, f + s - 0.6, d)),
    e.setMaterial(0.6, 0.3, 0, 0),
    A(e, xt));
  let m = n - c,
    h = i + c,
    g = r - c,
    _ = a + c,
    v = f + s,
    y = v + l,
    b = a - r >= i - n,
    x = (b ? i - n : a - r) / 2 + c,
    S = b ? (m + h) / 2 : m + x,
    C = b ? (m + h) / 2 : h - x,
    w = b ? g + x : (g + _) / 2,
    T = b ? _ - x : (g + _) / 2,
    E = d;
  (e.quad(m, v, g, m, v, _, S, y, T, S, y, w, E.u0, E.v0, E.u1, E.v1),
    e.quad(h, v, _, h, v, g, C, y, w, C, y, T, E.u0, E.v0, E.u1, E.v1),
    e.quad(h, v, g, m, v, g, S, y, w, C, y, w, E.u0, E.v0, E.u1, E.v1),
    e.quad(m, v, _, h, v, _, C, y, T, S, y, T, E.u0, E.v0, E.u1, E.v1),
    e.setMaterial(0.9, 0, 0, 0),
    A(e, 4864554),
    M(e, m, g, h, _, v - 0.02, d, !0),
    A(e, 4091484),
    N(
      e,
      (S + C) / 2,
      (w + T) / 2,
      y - 0.1,
      y + 0.35,
      Math.abs(C - S) / 2 + 0.3,
      Math.abs(T - w) / 2 + 0.3,
      0,
      1,
      d,
    ));
}
