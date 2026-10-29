// tokyo/assets/actors-bknSEpf2 60 — math
// Lines 24936-25213 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function b_(e, t, n, r) {
  let i = n[0] - t[0],
    a = n[1] - t[1],
    o = n[2] - t[2],
    s = Math.hypot(i, a, o) || 1,
    c = new V(i / s, a / s, o / s),
    l = Math.abs(c.y) > 0.9 ? new V(1, 0, 0) : new V(0, 1, 0),
    u = new V().crossVectors(c, l).normalize().multiplyScalar(r),
    d = new V().crossVectors(u, c).normalize().multiplyScalar(r),
    f = (e, t, n) => [
      e[0] + u.x * t + d.x * n,
      e[1] + u.y * t + d.y * n,
      e[2] + u.z * t + d.z * n,
    ],
    p = [
      [1, 1],
      [-1, 1],
      [-1, -1],
      [1, -1],
    ];
  for (let r = 0; r < 4; r++) {
    let [i, a] = p[r],
      [o, s] = p[(r + 1) % 4],
      c = [
        (u.x * (i + o) + d.x * (a + s)) / 2,
        (u.y * (i + o) + d.y * (a + s)) / 2,
        (u.z * (i + o) + d.z * (a + s)) / 2,
      ];
    e.quad(f(t, i, a), f(n, i, a), f(n, o, s), f(t, o, s), c);
  }
}
var x_ = new V(),
  S_ = new V(),
  C_ = new V(),
  w_ = new V();
function T_(e, t, n, r, i = r, a = 8, o = !1) {
  x_.set(n[0] - t[0], n[1] - t[1], n[2] - t[2]);
  let s = x_.length();
  if (s < 1e-5) return;
  (x_.multiplyScalar(1 / s),
    w_.set(0, 1, 0),
    Math.abs(x_.y) > 0.9 && w_.set(1, 0, 0),
    S_.crossVectors(x_, w_).normalize(),
    C_.crossVectors(S_, x_).normalize());
  let c = S_.x,
    l = S_.y,
    u = S_.z,
    d = C_.x,
    f = C_.y,
    p = C_.z,
    m = x_.x,
    h = x_.y,
    g = x_.z;
  for (let s = 0; s < a; s++) {
    let _ = (s / a) * Math.PI * 2,
      v = ((s + 1) / a) * Math.PI * 2,
      y = Math.cos(_),
      b = Math.sin(_),
      x = Math.cos(v),
      S = Math.sin(v),
      C = [c * y + d * b, l * y + f * b, u * y + p * b],
      w = [c * x + d * S, l * x + f * S, u * x + p * S],
      T = [t[0] + C[0] * r, t[1] + C[1] * r, t[2] + C[2] * r],
      E = [n[0] + C[0] * i, n[1] + C[1] * i, n[2] + C[2] * i],
      D = [n[0] + w[0] * i, n[1] + w[1] * i, n[2] + w[2] * i],
      O = [t[0] + w[0] * r, t[1] + w[1] * r, t[2] + w[2] * r];
    (e.smoothQuad(T, E, D, O, C, C, w, w),
      o && (e.tri(t, O, T, [-m, -h, -g]), e.tri(n, E, D, [m, h, g])));
  }
}
var E_ = !0;
function D_(e) {
  E_ = e;
}
function O_(e, t, n, r) {
  (E_ && Zg(e, t, n, r)) || k_(e, t, n, r);
}
function k_(e, t, n, r) {
  let i = { color: t.passenger ? 4013893 : 2832981, rough: 0.9, variant: n },
    a =
      t.jacket === void 0
        ? { color: 16777215, paint: 2, rough: 0.8, variant: n }
        : { color: t.jacket, rough: 0.75, variant: n },
    o = { ...m_, variant: n },
    s = { color: 1710618, rough: 0.8, variant: n },
    c = { color: 2105636, rough: 0.7, variant: n },
    { hipY: l, hipZ: u, lean: d } = t;
  (e.style(i), e.cbox(0, l + 0.02, u + 0.03, 0.3, 0.16, 0.3, 0.05, !1));
  for (let n of [-1, 1]) {
    let r = [n * 0.1, l + 0.02, u - 0.02],
      a = [n * t.knee[0], t.knee[1], t.knee[2]],
      o = [n * t.foot[0], t.foot[1], t.foot[2]];
    (e.style(i),
      T_(e, r, a, 0.078, 0.062, 6, !0),
      T_(e, a, [o[0], o[1] + 0.05, o[2]], 0.058, 0.045, 6, !0),
      e.style(s),
      e.cbox(o[0], o[1], o[2] - 0.06, 0.1, 0.08, 0.25, 0.03, !1));
  }
  let f = l + Math.sqrt(Math.max(0.05, 0.52 * 0.52 - d * d)),
    p = u - d;
  (e.style(a),
    e.extrude(
      [
        [u + 0.14, l],
        [u - 0.1, l],
        [p - 0.1, f - 0.02],
        [p + 0.12, f + 0.02],
      ],
      (e, t) => (t > l + (f - l) * 0.65 ? 0.2 : 0.17),
      0.045,
    ));
  for (let n of [-1, 1]) {
    let r = n * 0.21,
      i = f - 0.06,
      s = p + 0.02,
      l = n * t.hand[0],
      u = t.hand[1],
      d = t.hand[2],
      m = (r + l) / 2 + n * 0.06,
      h = Math.min(i, u) - 0.08,
      g = (s + d) / 2 + 0.04;
    (e.style(a),
      T_(e, [r, i, s], [m, h, g], 0.058, 0.05, 6, !0),
      T_(e, [m, h, g], [l, u, d + 0.03], 0.05, 0.042, 6, !0),
      e.style(t.fullFace ? c : o),
      e.cbox(l, u, d, 0.075, 0.075, 0.09, 0.02, !1));
  }
  let m = f + 0.2,
    h = p + 0.02 - d * 0.15;
  if (
    (e.style(o),
    e.box(0, m - 0.11, h + 0.01, 0.08, 0.08, 0.08, ``),
    e.cbox(0, m + 0.02, h, 0.16, 0.2, 0.19, 0.05),
    !t.bareHead)
  ) {
    if (t.fullFace) {
      (e.style({
        color: 16777215,
        paint: 3,
        rough: 0.2,
        metal: 0.15,
        variant: n,
      }),
        e.extrude(
          [
            [h + 0.14, m - 0.1],
            [h - 0.15, m - 0.1],
            [h - 0.17, m + 0.04],
            [h - 0.1, m + 0.17],
            [h + 0.02, m + 0.2],
            [h + 0.13, m + 0.14],
            [h + 0.16, m + 0.02],
          ],
          (e, t) =>
            0.13 -
            Math.max(0, t - m - 0.12) * 0.7 -
            Math.max(0, m - 0.06 - t) * 0.5,
          0.05,
        ),
        e.style({ color: 987928, rough: 0.05, metal: 0.6, variant: n }),
        e.quad(
          [-0.1, m - 0.01, h - 0.172],
          [0.1, m - 0.01, h - 0.172],
          [0.09, m + 0.08, h - 0.142],
          [-0.09, m + 0.08, h - 0.142],
          [0, 0.3, -1],
        ));
      return;
    }
    (e.style({
      color: 16777215,
      paint: 3,
      rough: 0.25,
      metal: 0.1,
      variant: n,
    }),
      e.extrude(
        [
          [h + 0.13, m],
          [h - 0.1, m + 0.06],
          [h - 0.13, m + 0.14],
          [h - 0.02, m + 0.21],
          [h + 0.12, m + 0.18],
          [h + 0.15, m + 0.06],
        ],
        (e, t) => 0.11 - Math.max(0, t - m - 0.16) * 0.6,
        0.04,
      ),
      e.style({ color: 1710618, rough: 0.3, variant: n }),
      e.box(0, m + 0.08, h - 0.12, 0.2, 0.025, 0.06, ``),
      e.style({ color: 1381653, rough: 0.6, variant: n }),
      e.box(-0.036, m + 0.045, h - 0.097, 0.026, 0.014, 0.006, ``),
      e.box(0.036, m + 0.045, h - 0.097, 0.026, 0.014, 0.006, ``),
      e.style({ color: 14673646, rough: 0.9, variant: r }),
      e.box(0, m - 0.03, h - 0.098, 0.12, 0.07, 0.01, ``));
  }
}
var A_ = {
    hipY: 0.88,
    hipZ: 0.2,
    lean: 0.12,
    hand: [0.32, 1.08, -0.47],
    knee: [0.15, 0.86, -0.12],
    foot: [0.15, 0.39, -0.1],
  },
  j_ = {
    hipY: 0.92,
    hipZ: 0.57,
    lean: 0.05,
    hand: [0.15, 1, 0.42],
    knee: [0.22, 0.9, 0.36],
    foot: [0.26, 0.44, 0.42],
    passenger: !0,
  },
  M_ = { color: 1381912, rough: 0.45, metal: 0.4 },
  N_ = { color: 10396585, rough: 0.35, metal: 0.8 },
  P_ = { color: 8225159, rough: 0.45, metal: 0.65 },
  F_ = { color: 2763824, rough: 0.5, metal: 0.5 },
  I_ = { color: 1381653, rough: 0.8 },
  L_ = { color: 13212219, rough: 0.3, metal: 0.85 },
  R_ = { color: 9278105, rough: 0.28, metal: 0.9 },
  z_ = {
    motorcycle: { y: 1, z: -0.4, rake: 0.38 },
    superbike: { y: 0.92, z: -0.45, rake: 0.42 },
  };
function B_(e, t, n, r, i, a, o, s = 0.02, c = 8) {
  for (let l = 0; l < c; l++) {
    let u = i + ((a - i) * l) / c,
      d = i + ((a - i) * (l + 1)) / c,
      f = [n + Math.sin(u) * r, t + Math.cos(u) * r],
      p = [n + Math.sin(d) * r, t + Math.cos(d) * r],
      m = [n + Math.sin(u) * (r - s), t + Math.cos(u) * (r - s)],
      h = [n + Math.sin(d) * (r - s), t + Math.cos(d) * (r - s)],
      g = [0, Math.cos((u + d) / 2), Math.sin((u + d) / 2)];
    (e.quad(
      [-o, f[1], f[0]],
      [o, f[1], f[0]],
      [o, p[1], p[0]],
      [-o, p[1], p[0]],
      g,
    ),
      e.quad(
        [-o, m[1], m[0]],
        [o, m[1], m[0]],
        [o, h[1], h[0]],
        [-o, h[1], h[0]],
        [-g[0], -g[1], -g[2]],
      ));
    for (let t of [-1, 1])
      e.quad(
        [t * o, f[1], f[0]],
        [t * o, p[1], p[0]],
        [t * o, h[1], h[0]],
        [t * o, m[1], m[0]],
        [t, 0, 0],
      );
  }
}
function V_(e, t, n, r, i) {
  for (let a = 0; a < i; a++) {
    let o = (a + 0.5) / i,
      s = [
        t[0] + (n[0] - t[0]) * o,
        t[1] + (n[1] - t[1]) * o,
        t[2] + (n[2] - t[2]) * o,
      ],
      c = [(n[0] - t[0]) * 0.02, (n[1] - t[1]) * 0.02, (n[2] - t[2]) * 0.02];
    T_(
      e,
      [s[0] - c[0], s[1] - c[1], s[2] - c[2]],
      [s[0] + c[0], s[1] + c[1], s[2] + c[2]],
      r,
      r,
      10,
      !0,
    );
  }
}
