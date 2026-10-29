// tokyo/assets/actors-bknSEpf2 63 — math
// Lines 25807-26132 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function Z_(e, t) {
  let n = cr[t];
  for (let r of [n.frontAxle, n.rearAxle]) {
    let i = n.wheelR,
      a = n.wheelW * (r > 0 && t === `superbike` ? 1.25 : 1);
    (e.style(n_),
      e.cylX(0, i, r, i, a, 16, !1),
      e.discX(a / 2, i, r, i, 1, 14),
      e.discX(-a / 2, i, r, i, -1, 14),
      e.style(
        t === `motorcycle` ? t_ : { color: 2105894, rough: 0.35, metal: 0.6 },
      ));
    for (let n of [-1, 1]) {
      let o = n * (a / 2 + 0.004),
        s = t === `motorcycle` ? 12 : 5;
      for (let n = 0; n < s; n++) {
        let a = (n / s) * Math.PI * 2;
        T_(
          e,
          [o, i + Math.sin(a) * 0.04, r + Math.cos(a) * 0.04],
          [
            o,
            i + Math.sin(a + 0.3) * i * 0.72,
            r + Math.cos(a + 0.3) * i * 0.72,
          ],
          t === `motorcycle` ? 0.004 : 0.014,
          t === `motorcycle` ? 0.004 : 0.01,
          3,
        );
      }
      e.discX(o, i, r, 0.045, n, 8);
    }
    e.style(e_);
  }
}
function Q_(e) {
  switch (e) {
    case `g`:
      return $g;
    case `k`:
      return r_;
    case `b`:
      return e_;
    case `w`:
      return o_;
    case `c`:
      return t_;
    default:
      return null;
  }
}
function $_(e, t, n) {
  let r = [],
    i = [];
  for (let [t, n, a] of e) (r.push([t, n]), i.push(a));
  (e[e.length - 1][0], e[0][0]);
  let a = [...n].sort((e, t) => t.z - e.z);
  for (let e of a) {
    let n = e.r;
    (r.push([e.z + n, t]), i.push(`k`));
    for (let a = 1; a <= 7; a++) {
      let o = (a / 7) * Math.PI;
      (r.push([e.z + Math.cos(o) * n, Math.max(t, e.wy + Math.sin(o) * n)]),
        i.push(a === 7 ? `x` : `k`));
    }
  }
  return ((i[i.length - 1] = `x`), { pts: r, seg: i });
}
function ev(e) {
  let t = e.zc ?? 0;
  return (n, r) => {
    let i = h_((r - e.belt) / Math.max(0.01, e.roof - e.belt), 0, 1),
      a = e.W - e.tumble * i,
      o = h_((Math.abs(n - t) - (e.halfLen - e.round)) / e.round, 0, 1);
    return ((a -= e.pinch * o * o), r < 0.42 && (a -= (0.42 - r) * 0.22), a);
  };
}
function tv(e, t, n, r = i_) {
  e.style(r);
  let i = [];
  (t.seg.forEach((e, t) => e === `x` && i.push(t)),
    e.extrude(t.pts, ev(n), n.chamfer, i, (e) => Q_(t.seg[e])));
}
function nv(e, t, n) {
  let r = (e, t, n) => {
    let r = [];
    for (let i = 0; i < e.length; i++) {
      let a = e[i],
        o = e[(i + 1) % e.length],
        s = t(a[0]),
        c = t(o[0]);
      if ((s && r.push(a), s !== c)) {
        let e = (n - a[0]) / (o[0] - a[0]);
        r.push([n, a[1] + (o[1] - a[1]) * e]);
      }
    }
    return r;
  };
  return r(
    r(e, (e) => e >= t, t),
    (e) => e <= n,
    n,
  );
}
var rv = (e, t, n) => {
  let r = (n - e[1]) / (t[1] - e[1] || 1e-6);
  return [e[0] + (t[0] - e[0]) * r, n];
};
function iv(e, t, n, r, i, a, o, s, c, l, u = 0.05, d = $g) {
  let f = rv(n, r, o),
    p = rv(n, r, s),
    m = rv(i, a, s),
    h = rv(i, a, o),
    g = [
      [f[0] + c, o],
      [h[0] - c, o],
      [m[0] - c, s],
      [p[0] + c, s],
    ],
    _ = [-1 / 0, ...l.flatMap((e) => [e - u, e + u]), 1 / 0],
    v = ev(t);
  e.style(d);
  for (let t = 0; t < _.length; t += 2) {
    let n = nv(g, _[t], _[t + 1]);
    if (n.length < 3) continue;
    let r = w.triangulateShape(
      n.map(([e, t]) => new ie(e, t)),
      [],
    );
    for (let t of [-1, 1])
      for (let i of r) {
        let r = i.map((e) => [
          t * (v(n[e][0], n[e][1]) + 0.012),
          n[e][1],
          n[e][0],
        ]);
        e.tri(r[0], r[1], r[2], [t, 0, 0]);
      }
  }
}
function av(e, t, n, r, i, a, o = 0.1) {
  for (let s of [-1, 1]) {
    let c = s * t;
    (e.style({ color: 1316378, rough: 0.25, metal: 0.7 }),
      e.box(c, n, r + 0.01, i + 0.04, a + 0.035, o, ``),
      e.style(s_),
      e.box(
        c - s * i * 0.1,
        n + a * 0.1,
        r - o / 2 + 0.005,
        i * 0.66,
        a * 0.64,
        0.02,
        ``,
      ),
      e.style({ ...s_, color: 15923455 }),
      e.box(c, n - a * 0.38, r - o / 2 + 0.004, i * 0.96, a * 0.13, 0.02, ``),
      e.style(s < 0 ? u_ : d_),
      e.box(
        c + s * i * 0.36,
        n + a * 0.1,
        r - o / 2 + 0.004,
        i * 0.22,
        a * 0.52,
        0.02,
        ``,
      ));
  }
}
function ov(e, t, n, r, i, a, o = 0.08) {
  for (let s of [-1, 1]) {
    let c = s * t;
    (e.style({ color: 2755854, rough: 0.2, metal: 0.4 }),
      e.box(c, n, r - 0.01, i + 0.03, a + 0.03, o, ``),
      e.style(c_),
      e.box(
        c + s * i * 0.08,
        n + a * 0.18,
        r + o / 2 - 0.005,
        i * 0.8,
        a * 0.5,
        0.02,
        ``,
      ),
      e.style(l_),
      e.box(
        c + s * i * 0.08,
        n + a * 0.18,
        r + o / 2 + 0.004,
        i * 0.62,
        a * 0.12,
        0.02,
        ``,
      ),
      e.style(s < 0 ? u_ : d_),
      e.box(
        c + s * i * 0.3,
        n - a * 0.3,
        r + o / 2 - 0.004,
        i * 0.34,
        a * 0.28,
        0.02,
        ``,
      ),
      e.style(f_),
      e.box(
        c - s * i * 0.26,
        n - a * 0.3,
        r + o / 2 - 0.004,
        i * 0.36,
        a * 0.28,
        0.02,
        ``,
      ));
  }
}
function sv(e, t, n, r, i, a = !0) {
  (a && (e.style(t_), e.box(0, t, n + 0.012, r + 0.05, i + 0.05, 0.03, ``)),
    e.style({ color: 16777215, rough: 0.5, metal: 0.3 }));
  let o = Yd.grille,
    s = n - 0.006;
  e.quadUV(
    [r / 2, t - i / 2, s],
    [-r / 2, t - i / 2, s],
    [-r / 2, t + i / 2, s],
    [r / 2, t + i / 2, s],
    o.u0,
    o.v0,
    o.u1,
    o.v1,
  );
}
function cv(e, t, n, r, i, a, o, s = 12172738, c = 5) {
  (e.style(n_),
    e.cylX(t, n, r, i, a, 14, !1),
    e.discX(t + (o * a) / 2, n, r, i, o, 14),
    e.discX(t - (o * a) / 2, n, r, i, -o, 14));
  let l = t + o * (a / 2 + 0.004);
  (e.style({ color: 2763824, rough: 0.6, metal: 0.4 }),
    e.discX(l, n, r, i * 0.66, o, 12),
    e.style({ color: s, rough: 0.3, metal: 0.85 }));
  let u = l + o * 0.004;
  for (let t = 0; t < c; t++) {
    let a = (t / c) * Math.PI * 2,
      s = Math.cos(a),
      l = Math.sin(a),
      d = Math.cos(a + Math.PI / 2),
      f = Math.sin(a + Math.PI / 2),
      p = i * 0.62,
      m = i * 0.09;
    e.quad(
      [u, n + f * m, r + d * m],
      [u, n + l * p + f * m * 0.6, r + s * p + d * m * 0.6],
      [u, n + l * p - f * m * 0.6, r + s * p - d * m * 0.6],
      [u, n - f * m, r - d * m],
      [o, 0, 0],
    );
  }
  for (let t = 0; t < 12; t++) {
    let a = (t / 12) * Math.PI * 2,
      s = ((t + 1) / 12) * Math.PI * 2,
      c = i * 0.6,
      l = i * 0.68;
    e.quad(
      [u, n + Math.sin(a) * c, r + Math.cos(a) * c],
      [u, n + Math.sin(a) * l, r + Math.cos(a) * l],
      [u, n + Math.sin(s) * l, r + Math.cos(s) * l],
      [u, n + Math.sin(s) * c, r + Math.cos(s) * c],
      [o, 0, 0],
    );
  }
  (e.style({ color: 9277589, rough: 0.35, metal: 0.8 }),
    e.discX(u + o * 0.003, n, r, i * 0.14, o, 8));
}
function lv(e = 5) {
  let t = new kf();
  return (cv(t, 0, 0, 0, 1, 1, 1, 12172738, e), t.buildGeometry());
}
function uv() {
  let e = new kf();
  (e.style(n_),
    e.cylX(0, 0, 0, 1, 1, 16, !1),
    e.discX(0.5, 0, 0, 1, 1, 16),
    e.discX(-0.5, 0, 0, 1, -1, 16));
  for (let t of [-1, 1]) {
    let n = t * 0.505;
    (e.style({ color: 1381914, rough: 0.7 }),
      e.discX(n, 0, 0, 0.8, t, 16),
      e.style({ color: 13948891, rough: 0.2, metal: 0.95 }));
    let r = n + t * 0.004;
    for (let n = 0; n < 16; n++) {
      let i = (n / 16) * Math.PI * 2,
        a = ((n + 1) / 16) * Math.PI * 2;
      e.quad(
        [r, Math.sin(i) * 0.72, Math.cos(i) * 0.72],
        [r, Math.sin(i) * 0.84, Math.cos(i) * 0.84],
        [r, Math.sin(a) * 0.84, Math.cos(a) * 0.84],
        [r, Math.sin(a) * 0.72, Math.cos(a) * 0.72],
        [t, 0, 0],
      );
    }
    let i = r + t * 0.004;
    for (let n = 0; n < 18; n++) {
      let r = (n / 18) * Math.PI * 2,
        a = r + (n % 2 ? 0.55 : -0.55),
        o = 0.018,
        s = Math.cos(r) * 0.16,
        c = Math.sin(r) * 0.16,
        l = Math.cos(a) * 0.74,
        u = Math.sin(a) * 0.74,
        d = -(u - c),
        f = l - s,
        p = Math.hypot(d, f) || 1;
      e.quad(
        [i, c + (f / p) * o, s + (d / p) * o],
        [i, u + (f / p) * o, l + (d / p) * o],
        [i, u - (f / p) * o, l - (d / p) * o],
        [i, c - (f / p) * o, s - (d / p) * o],
        [t, 0, 0],
      );
    }
    (e.style({ color: 12106946, rough: 0.3, metal: 0.8 }),
      e.discX(i + t * 0.004, 0, 0, 0.2, t, 12));
  }
  return e.buildGeometry();
}
