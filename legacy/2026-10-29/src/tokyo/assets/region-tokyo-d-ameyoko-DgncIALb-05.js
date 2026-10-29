// tokyo/assets/region-tokyo-d-ameyoko-DgncIALb 05 — setmaterial
// Lines 1125-1389 of readable/tokyo/assets/region-tokyo-d-ameyoko-DgncIALb.pretty.js (statement-aligned).
function _e(e, t) {
  let n = t.white(),
    r = k.west - 0.3,
    i = k.east - 0.05,
    a = A;
  (e.setMaterial(0.5, 0.5, 0, 0),
    w(e, 14211284),
    c(e, r, a, 0.02, 6.9, 0.12, n, 8),
    e.setMaterial(0.6, 0.1, 0, 0),
    w(e, 16053488),
    f(e, r, 5, a - 0.18, i, 5.5, a + 0.18, n),
    e.setMaterial(0.6, 0, 0.3, U),
    w(e, 16777215),
    l(e, i - 0.3, a - 0.2, r + 0.4, a - 0.2, 4.3, 4.9, t.uv(`sign-banner`)),
    l(e, r + 0.4, a + 0.2, i - 0.3, a + 0.2, 4.3, 4.9, t.uv(`sign-banner`)));
  let o = 0.6,
    s = [r + (i - r) * 0.22, r + (i - r) * 0.5, r + (i - r) * 0.78],
    u = [`a`, `me`, `yoko`];
  for (let n = 0; n < 3; n++)
    (W(e, s[n], 6.1, a + 0.2, 0.68, t.uv(`sign-${u[n]}`), 1),
      W(e, s[2 - n], 6.1, a - 0.2, 0.68, t.uv(`sign-${u[n]}`), -1));
  (e.setMaterial(0.6, 0.1, 0, 0), w(e, 16053488));
  for (let t of s) f(e, t - 0.7, 5.5, a - 0.17, t + 0.7, 5.55, a + 0.17, n);
  (w(e, 1923752),
    f(e, r - 0.3, 6.55, a - o, i + 0.3, 6.72, a + o, n),
    w(e, 1923752));
  let d = 7.25,
    p = 6.7,
    m = 0.6;
  (e.quad(
    r - 0.3,
    p,
    a + m,
    i + 0.3,
    p,
    a + m,
    i + 0.3,
    d,
    a,
    r - 0.3,
    d,
    a,
    n.u0,
    n.v0,
    n.u1,
    n.v1,
  ),
    e.quad(
      i + 0.3,
      p,
      a - m,
      r - 0.3,
      p,
      a - m,
      r - 0.3,
      d,
      a,
      i + 0.3,
      d,
      a,
      n.u0,
      n.v0,
      n.u1,
      n.v1,
    ));
  for (let [t, o] of [
    [r - 0.3, -1],
    [i + 0.3, 1],
  ])
    e.quad(
      t,
      p,
      a + m,
      t,
      p,
      a - m,
      t + o * 0.5,
      7.5,
      a - m - 0.15,
      t + o * 0.5,
      7.5,
      a + m + 0.15,
      n.u0,
      n.v0,
      n.u1,
      n.v1,
    );
  (w(e, 1923752),
    c(e, (r + i) / 2, a, d, 7.5, 0.05, n, 5),
    e.setMaterial(0.6, 0, 0.3, U),
    w(e, 16777215),
    W(e, (r + i) / 2, 8.1, a + 0.12, 0.55, t.uv(`sign-clock`), 1),
    W(e, (r + i) / 2, 8.1, a - 0.12, 0.55, t.uv(`sign-clock`), -1),
    e.setMaterial(0.6, 0.2, 0, 0),
    w(e, 1923752));
  for (let t = 0; t < 12; t++) {
    let o = (t / 12) * Math.PI * 2;
    f(
      e,
      (r + i) / 2 + Math.cos(o) * 0.55 - 0.06,
      8.1 + Math.sin(o) * 0.55 - 0.06,
      a - 0.12,
      (r + i) / 2 + Math.cos(o) * 0.55 + 0.06,
      8.1 + Math.sin(o) * 0.55 + 0.06,
      a + 0.12,
      n,
    );
  }
}
function ve(e, r) {
  let i = r.white(),
    { x0: a, x1: o, z0: c, z1: u } = j;
  (e.setMaterial(0.8, 0, 0, 0),
    w(e, 16777215),
    _(e, a, c, o, u, 0.17, r.uv(`granite`), 3));
  let d = [
    [a + 0.4, c + 0.3, o - 0.4, c + 1.1],
    [o - 1.1, c + 1.4, o - 0.3, u - 0.6],
  ];
  for (let [a, o, c, l] of d) {
    (w(e, 16777215),
      s(
        e,
        (a + c) / 2,
        (o + l) / 2,
        0.15,
        0.8,
        (c - a) / 2,
        (l - o) / 2,
        0,
        1,
        r.uv(`bamboo`),
        r.uv(`bamboo`),
        r.uv(`bamboo`),
      ),
      e.setMaterial(0.8, 0, 0, 0));
    let u = new t(n(`ame-bamboo`, Math.round(a), Math.round(o)));
    for (let t = 0; t < 14; t++) {
      let t = a + 0.15 + u.next() * (c - a - 0.3),
        n = o + 0.15 + u.next() * (l - o - 0.3),
        r = 2.2 + u.next() * 1.4;
      (w(e, u.next() < 0.5 ? 5933626 : 7248454),
        C(
          e,
          t,
          0.8,
          n,
          t + (u.next() - 0.5) * 0.3,
          0.8 + r,
          n + (u.next() - 0.5) * 0.3,
          0.025,
          i,
        ),
        w(e, 4880946));
      for (let a = 0; a < 3; a++) {
        let o = 0.8 + r * (0.62 + a * 0.17),
          s = u.next() * Math.PI * 2;
        T(
          e,
          t + Math.cos(s) * 0.18,
          o,
          n + Math.sin(s) * 0.18,
          0.26,
          0.07,
          0.12,
          i,
          2,
          5,
        );
      }
    }
  }
  (e.setMaterial(0.6, 0.3, 0, 0), w(e, 3050042));
  let p = a + 4.4,
    m = (c + u) / 2 - 2.5;
  for (let t of [-1.3, 1.3])
    f(e, p, 0.15, m + t - 0.05, p + 0.1, 2.6, m + t + 0.05, i);
  (e.setMaterial(0.6, 0, 0.25, 1),
    w(e, 16777215),
    l(e, p - 0.05, m - 1.4, p - 0.05, m + 1.4, 1.2, 2.6, r.uv(`panda-sign`)));
}
var ye = (e) => [
  {
    name: `teppanda`,
    write: (t) => {
      let n = e.uv(`iron`),
        r = e.white();
      (t.setMaterial(0.9, 0, 0, 0),
        w(t, 10131600),
        s(t, 0, 0, 0, 0.55, 0.55, 0.45, 0, 1, r, e.uv(`panda-plate`)),
        t.setMaterial(0.35, 0.8, 0, 0),
        w(t, 16777215),
        T(t, 0, 0.98, 0, 0.42, 0.45, 0.38, n, 5, 10),
        T(t, 0, 1.6, 0.05, 0.34, 0.3, 0.32, e.uv(`iron-face`), 5, 10));
      for (let e of [-1, 1])
        (T(t, e * 0.24, 1.86, 0.02, 0.1, 0.1, 0.07, n, 3, 6),
          T(t, e * 0.3, 1.08, 0.18, 0.12, 0.22, 0.12, n, 3, 6),
          T(t, e * 0.2, 0.66, 0.3, 0.14, 0.1, 0.2, n, 3, 6));
      T(t, 0, 1.54, 0.34, 0.07, 0.05, 0.05, n, 3, 6);
    },
  },
  ...[0, 1].map((t) => ({
    name: `jewel-flag-${t}`,
    write: (n) => {
      let r = e.white(),
        i = e.uv(`jewel-flag-${t}`);
      (n.setMaterial(0.6, 0.5, 0, 0),
        w(n, 9080466),
        c(n, 0, 0, 0, 6.6, 0.09, r, 6, !0));
      for (let e of [1, -1])
        (C(n, 0, 6.15, 0, 0, 6.15, e * 0.95, 0.025, r),
          C(n, 0, 4.05, 0, 0, 4.05, e * 0.95, 0.025, r));
      (n.setMaterial(0.8, 0, 0.22, U | 16), w(n, 16777215));
      for (let e of [1, -1]) {
        let t = e > 0 ? 0.18 : -0.92,
          r = e > 0 ? 0.92 : -0.18;
        (l(n, 0.012, r, 0.012, t, 4, 6.1, i),
          l(n, -0.012, t, -0.012, r, 4, 6.1, i));
      }
    },
  })),
  {
    name: `kaitori`,
    write: (t) => {
      (t.setMaterial(0.6, 0, 0.2, 1), w(t, 16777215));
      let n = e.uv(`kaitori`);
      (t.quad(
        -0.3,
        0,
        0.2,
        0.3,
        0,
        0.2,
        0.3,
        1.1,
        0.02,
        -0.3,
        1.1,
        0.02,
        n.u0,
        n.v0,
        n.u1,
        n.v1,
      ),
        t.quad(
          0.3,
          0,
          -0.2,
          -0.3,
          0,
          -0.2,
          -0.3,
          1.1,
          -0.02,
          0.3,
          1.1,
          -0.02,
          n.u0,
          n.v0,
          n.u1,
          n.v1,
        ));
    },
  },
];
