// tokyo__assets__region-tokyo-d-shimbashi-CU0USnvn 14 — setmaterial
// Lines 4026-4279 of readable/tokyo__assets__region-tokyo-d-shimbashi-CU0USnvn.pretty.js (statement-aligned).
function Zt(e, t, n) {
  let r = t.white(),
    i = S.block,
    a = n.plan.groundHeight(S.x, S.front),
    o = S.front,
    s = e.begin();
  (s.setMaterial(0.85, 0, 0, 0),
    P(s, 12104356),
    I(s, i.x0, i.z0, i.x1, i.z1, a + 0.03, r));
  let c = t.uv(`kyu:pav`),
    l = 9.2;
  for (let [e, t] of [
    [1.75, 8.75],
    [16.75, 23.75],
  ]) {
    (s.setMaterial(0.85, 0, 0, 0),
      P(s, 13617334),
      L(s, e, a, o, t, a + l, o + 12, r),
      P(s, 16777215),
      F(s, t, o - 0.02, e, o - 0.02, a, a + l, c));
    let n = e < 10 ? e - 0.02 : t + 0.02;
    for (let t = 0; t < 2; t++) {
      let r = o + (12 * t) / 2,
        i = o + (12 * (t + 1)) / 2;
      e < 10 ? F(s, n, r, n, i, a, a + l, c) : F(s, n, i, n, r, a, a + l, c);
    }
    (F(s, e, o + 12 + 0.02, t, o + 12 + 0.02, a, a + l, c),
      Xt(s, r, e, o, t, o + 12, a + l, 2.2));
  }
  let u = 8.75,
    d = 16.75,
    f = 5.2;
  (s.setMaterial(0.85, 0, 0, 0),
    P(s, 13880506),
    L(s, u, a, o, d, a + f, o + 10, r),
    P(s, 16777215),
    F(s, d, o - 0.02, u, o - 0.02, a, a + f, t.uv(`kyu:arcade`)),
    P(s, 15526110),
    L(s, 8.6, a + f, o - 0.25, 16.9, a + f + 0.3, o + 10, r),
    s.quad(
      15.75,
      a + f + 0.3,
      o - 0.2,
      9.75,
      a + f + 0.3,
      o - 0.2,
      25.5 / 2,
      a + f + 1.55,
      o - 0.2,
      25.5 / 2,
      a + f + 1.55,
      o - 0.2,
      r.u0,
      r.v0,
      r.u1,
      r.v1,
    ),
    s.setMaterial(0.75, 0.2, 0, 0),
    P(s, 4080198),
    I(s, u, o, d, o + 10, a + f + 0.31, r),
    s.setMaterial(0.7, 0, 0, 0),
    P(s, 16777215),
    F(s, 15.85, o - 0.05, 9.65, o - 0.05, a + 4.25, a + 4.95, t.uv(`kyu:sign`)),
    R(s, 17.95, o - 2.2, a, a + 1.3, 0.6, 0.05, 0, -1, r, t.uv(`kyu:hours`), r),
    s.setMaterial(0.6, 0, 0, 0),
    P(s, 16777215),
    R(
      s,
      i.x0 + 1.2,
      i.z0 + 1.6,
      a,
      a + 1.5,
      0.22,
      0.15,
      0,
      -1,
      r,
      t.uv(`kyu:site`),
      r,
    ));
  let p = o + 12 + 2.5,
    m = p + 14,
    h = 22.5,
    g = 0.92;
  (s.setMaterial(0.9, 0, 0, 0),
    P(s, 10262154),
    L(s, 3, a, p, h, a + g, m, r),
    P(s, 12169890),
    I(s, 3, p, h, m, a + g + 0.01, r),
    P(s, 8156780),
    L(s, 3, a + g - 0.18, m - 0.02, h, a + g + 0.02, m + 0.35, r),
    P(s, 10262154),
    s.quad(
      -0.20000000000000018,
      a + 0.02,
      p + 2,
      -0.20000000000000018,
      a + 0.02,
      p + 5,
      3,
      a + g,
      p + 5,
      3,
      a + g,
      p + 2,
      r.u0,
      r.v0,
      r.u1,
      r.v1,
    ));
  let _ = m + 1.6;
  (P(s, 6973024),
    L(s, 1.5, a, _ - 1.4, 24, a + 0.18, _ + 1.4, r),
    P(s, 4864556));
  for (let e = 2; e < 23.5; e += 0.62)
    L(s, e, a + 0.18, _ - 1.05, e + 0.22, a + 0.26, _ + 1.05, r);
  (s.setMaterial(0.4, 0.7, 0, 0), P(s, 8025196));
  for (let e of [-1, 1])
    L(
      s,
      1.8,
      a + 0.26,
      _ + e * 0.533 - 0.035,
      23.7,
      a + 0.4,
      _ + e * 0.533 + 0.035,
      r,
    );
  (s.setMaterial(0.5, 0.4, 0, 0), P(s, 15921902));
  for (let e = 4.5; e < h; e += 4.6) {
    let t = p - 0.2,
      n = _ + 1.8,
      i = a + g,
      o = a,
      c = a + 6.6;
    (B(s, e, i, t, e, c - 1.2, t, 0.09, r),
      B(s, e, o, n, e, c - 1.2, n, 0.09, r));
    let l = t,
      u = c - 1.2;
    for (let i = 1; i <= 8; i++) {
      let a = i / 8,
        o = t + (n - t) * a,
        d = c - 1.2 + Math.sin(a * Math.PI) * 1.2;
      (B(s, e, u, l, e, d, o, 0.08, r), (l = o), (u = d));
    }
  }
  let v = S.x;
  (s.setMaterial(0.7, 0, 0, 0),
    P(s, 9078398),
    L(s, v - 0.4, a, _ + 1.5, v + 0.4, a + 0.12, _ + 2.3, r),
    P(s, 16777215),
    R(
      s,
      v,
      _ + 1.9,
      a + 0.12,
      a + 0.95,
      0.09,
      0.09,
      0,
      -1,
      r,
      t.uv(`kyu:zero`),
      t.uv(`kyu:zero`),
    ));
  for (let [e, t] of [
    [i.x0 + 1.4, i.z1 - 4],
    [i.x1 - 1.4, i.z1 - 4],
  ])
    (s.setMaterial(0.9, 0, 0, 0),
      P(s, 4864554),
      z(s, e, t, a, a + 2.6, 0.14, r, 6),
      P(s, 4090418),
      L(s, e - 1.3, a + 2.4, t - 1.3, e + 1.3, a + 3.9, t + 1.3, r),
      P(s, 4880954),
      L(s, e - 0.9, a + 3.9, t - 0.9, e + 0.9, a + 4.8, t + 0.9, r));
  return (
    e.end(`kyu-shimbashi`, S.x, (i.z0 + i.z1) / 2, 520),
    e.box(1.75, o, 8.75, o + 12, a, a + l + 2.5),
    e.box(16.75, o, 23.75, o + 12, a, a + l + 2.5),
    e.box(u, o, d, o + 10, a, a + f + 1.6),
    e.box(3, p, h, m + 0.35, a, a + g),
    e.circles.push({
      x: i.x0 + 1.2,
      z: i.z0 + 1.6,
      r: 0.3,
      y0: a,
      y1: a + 1.5,
    }),
    {
      floors: [
        {
          cx: 25.5 / 2,
          cz: (p + m) / 2,
          hx: 19.5 / 2,
          hz: (m - p) / 2,
          y0: a + g,
          y1: a + g,
        },
        { cx: 1.4, cz: p + 3.5, hx: 1.6, hz: 1.5, y0: a, y1: a + g, ramp: !0 },
      ],
    }
  );
}
var Q = 12239558;
function Qt(e) {
  (e.need(`kachi:plate`, 160, 48, lt(`shim.kachi.name`)),
    e.need(`kachi:kana`, 160, 48, lt(`shim.kachi.kana`)));
}
function $t(e, t, n, r, i, a) {
  let o = f,
    s = r - n,
    c = a >= 1 ? 16 : 10,
    l = Math.round(s / 5.4),
    u = (e) => {
      let t = ((e - n) / s) * 2 - 1;
      return i + 1.5 + o.rise * (1 - t * t);
    };
  for (let a of [-1, 1]) {
    let d = o.z + a * o.ribZ;
    (e.setMaterial(0.45, 0.55, 0, 0),
      P(e, Q, 0.92),
      L(e, n, i, d - 0.45, r, i + 1.5, d + 0.45, t),
      e.setMaterial(0.42, 0.55, 0.1, 1),
      P(e, Q));
    let f = n,
      p = i + 1.5;
    for (let r = 1; r <= c; r++) {
      let i = n + (s * r) / c,
        a = u(i);
      (B(e, f, p, d, i, a, d, 0.55, t), (f = i), (p = a));
    }
    (e.setMaterial(0.45, 0.55, 0, 0), P(e, Q, 0.95));
    for (let r = 1; r < l; r++) {
      let a = n + (s * r) / l;
      B(e, a, i + 1.5, d, a, u(a) - 0.4, d, 0.09, t);
    }
  }
  (e.setMaterial(0.45, 0.55, 0, 0), P(e, Q, 0.9));
  let d = o.z - o.ribZ,
    p = o.z + o.ribZ,
    m = [];
  for (let r = 2; r < l - 1; r += 2) {
    let a = n + (s * r) / l;
    u(a) - i < 7.5 || (m.push(a), B(e, a, u(a), d, a, u(a), p, 0.22, t));
  }
  if (a >= 1)
    for (let n = 0; n + 1 < m.length; n++) {
      let r = m[n],
        i = m[n + 1];
      (B(e, r, u(r), d, i, u(i), p, 0.12, t),
        B(e, r, u(r), p, i, u(i), d, 0.12, t));
    }
}
