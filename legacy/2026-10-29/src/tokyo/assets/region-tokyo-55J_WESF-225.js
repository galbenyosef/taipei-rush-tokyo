// tokyo/assets/region-tokyo-55J_WESF 225 — box
// Lines 87051-87309 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function OP(e) {
  let t = (t) => e.A.sub(`sjText`, t[0] / 448, 0, t[1] / 448, 1),
    n = (t) =>
      e.A.sub(`sjSigns`, t[0] / 384, 1 - t[3] / 64, t[2] / 384, 1 - t[1] / 64);
  return {
    kaminarimon: t(nS.kaminarimon),
    furaijin: t(nS.furaijin),
    kobuna: t(nS.kobuna),
    shinbashi: t(nS.shinbashi),
    boards: rS.map(n),
    kinryuzan: n(iS.kinryuzan),
    semui: n(iS.semui),
    lantern: e.c(`lantern`),
    kawara: e.c(`kawara`),
    plaster: e.c(`plaster`),
    shoji: e.c(`shoji`),
    paving: e.c(`paving`),
    granite: e.c(`granite`),
    copper: e.c(`copper`),
  };
}
var kP = (e, t = hP, n = lP) => ({
    cell: e.kawara,
    color: t,
    band: 14209208,
    soffit: n,
    ridgeColor: 4014406,
    tile: 2,
  }),
  AP = (e, t = 0.07) => e.mat(0.82, 0.08, t, sP),
  xbe = 0.78,
  jP = (e, t = 0.16, n = 1) => e.col(cP, n).mat(0.55, 0, t * xbe, sP);
function MP(e, t, n, r, i, a, o, s, c, l = -oP / 2) {
  let u = r - a,
    d = [
      0, 0.8, 0.06, 0.93, 0.14, 0.99, 0.5, 1, 0.86, 0.99, 0.94, 0.93, 1, 0.8,
    ],
    f = d.length / 2,
    p = e.coarse ? 12 : 20,
    m = e.coarse ? 1 : 2;
  e.push().col(16777215).mat(0.6, 0, 0.55, G);
  for (let r = 0; r < p; r++) {
    let h = l - oP + (2 * oP * r) / p,
      g = l - oP + (2 * oP * (r + 1)) / p,
      _ = r - p / 2,
      v = _ >= -m && _ < m,
      y = c && (r < m || r >= p - m);
    for (let _ = 0; _ + 1 < f; _++) {
      let f = d[_ * 2],
        b = d[_ * 2 + 2],
        x = d[_ * 2 + 1] * o,
        S = d[_ * 2 + 3] * o,
        C = u + f * a,
        w = u + b * a,
        T = (v || y) && f >= 0.139999 && b <= 0.860001,
        E,
        D,
        O,
        k,
        A,
        j,
        ee,
        M;
      if (T) {
        let e = v ? s : c,
          t = v ? l - (2 * oP * m) / p : l + oP - (2 * oP * m) / p,
          n = (4 * oP * m) / p,
          r = (e) => {
            let n = e - t;
            for (; n < -1e-6;) n += 2 * oP;
            for (; n > 2 * oP - 1e-6;) n -= 2 * oP;
            return n;
          },
          i = 1 - r(h) / n,
          a = 1 - (r(h) + (2 * oP) / p) / n,
          o = (e) => (0.86 - e) / 0.72,
          u = (t) => e.u0 + (e.u1 - e.u0) * t,
          d = (t) => e.v0 + (e.v1 - e.v0) * t;
        ((E = u(o(f))),
          (D = d(i)),
          (O = u(o(f))),
          (k = d(a)),
          (A = u(o(b))),
          (j = d(i)),
          (ee = u(o(b))),
          (M = d(a)));
      } else {
        let e = t.lantern,
          n = (t) => e.u0 + (e.u1 - e.u0) * t,
          i = (t) => e.v0 + (e.v1 - e.v0) * t;
        ((E = n(r / p)),
          (D = i(f)),
          (O = n((r + 1) / p)),
          (k = i(f)),
          (A = n(r / p)),
          (j = i(b)),
          (ee = n((r + 1) / p)),
          (M = i(b)));
      }
      let te = Math.cos(h),
        ne = Math.sin(h),
        re = Math.cos(g),
        ie = Math.sin(g),
        ae = e.w.n;
      (e.v(n + te * x, C, i + ne * x, te, 0, ne, E, D),
        e.v(n + re * x, C, i + ie * x, re, 0, ie, O, k),
        e.v(n + re * S, w, i + ie * S, re, 0, ie, ee, M),
        e.v(n + te * S, w, i + ne * S, te, 0, ne, A, j),
        e.tri(ae, ae + 2, ae + 1),
        e.tri(ae, ae + 3, ae + 2));
    }
  }
  (e.pop(), e.push().col(1775380).mat(0.55, 0.2, 0, 0));
  let h = e.seg(16);
  (e.lathe(
    n,
    i,
    [o * 0.86, u - 0.28, o * 0.88, u - 0.06, o * 0.82, u + 0.02],
    h,
    0,
    e.white,
    !1,
    !0,
  ),
    e.disc(n, u - 0.28, i, o * 0.86, h, !0),
    e.lathe(
      n,
      i,
      [o * 0.82, r - 0.02, o * 0.88, r + 0.06, o * 0.84, r + 0.26],
      h,
      0,
      e.white,
      !1,
      !0,
    ),
    e.disc(n, r + 0.26, i, o * 0.84, h),
    e.coarse ||
      (e
        .col(10257504)
        .mat(0.8, 0, 0, 0)
        .disc(n, u - 0.3, i, o * 0.6, h, !0),
      e
        .col(dP)
        .mat(0.35, 0.8, 0.1, sP)
        .lathe(
          n,
          i,
          [o * 0.9, u - 0.2, o * 0.9, u - 0.14],
          h,
          0,
          e.white,
          !1,
          !0,
        ),
      e.lathe(
        n,
        i,
        [o * 0.9, r + 0.12, o * 0.9, r + 0.18],
        h,
        0,
        e.white,
        !1,
        !0,
      )),
    e.pop());
}
function NP(e, t, n, r, i, a = 0.62) {
  e.coarse ||
    (e
      .push()
      .col(2762274)
      .mat(0.6, 0.2, 0, 0)
      .box(n - 0.03, r - 0.05, i - 0.03, n + 0.03, r + 0.25, i + 0.03)
      .pop(),
    GC(e, n, r - 0.05, i, a, t.lantern));
}
function PP(e, t, n, r, i, a) {
  let o = 0.85;
  if (
    (jP(e, 0.12),
    e.box(t, a + o - 0.1, n - 0.06, r, a + o, n + 0.06),
    e.box(t, a + o - 0.1, i - 0.06, r, a + o, i + 0.06),
    e.box(t - 0.06, a + o - 0.1, n, t + 0.06, a + o, i),
    e.box(r - 0.06, a + o - 0.1, n, r + 0.06, a + o, i),
    !e.coarse)
  ) {
    (e.box(t, a + 0.3, n - 0.05, r, a + 0.38, n + 0.05),
      e.box(t, a + 0.3, i - 0.05, r, a + 0.38, i + 0.05),
      e.box(t - 0.05, a + 0.3, n, t + 0.05, a + 0.38, i),
      e.box(r - 0.05, a + 0.3, n, r + 0.05, a + 0.38, i));
    for (let [s, c, l, u] of [
      [t, n, r, n],
      [t, i, r, i],
      [t, n, t, i],
      [r, n, r, i],
    ]) {
      let t = Math.hypot(l - s, u - c),
        n = Math.max(1, Math.round(t / 1.6));
      for (let t = 1; t < n; t++) {
        let r = s + ((l - s) * t) / n,
          i = c + ((u - c) * t) / n;
        e.box(r - 0.06, a, i - 0.06, r + 0.06, a + o, i + 0.06);
      }
    }
    e.push().col(dP).mat(0.35, 0.8, 0.1, sP);
    for (let [s, c] of [
      [t, n],
      [r, n],
      [t, i],
      [r, i],
    ])
      e.lathe(s, c, [0.1, a + o, 0.12, a + o + 0.1, 0.02, a + o + 0.3], 6);
    e.pop();
  }
}
function FP(e, t, n, r, i, a, o = 0.4) {
  (e.push().col(lP).mat(0.7, 0, o, sP),
    e.flat(t, n, r, i, a, e.white, 0, 0, !1),
    e.pop());
}
function IP(e, t, n, r, i, a, o, s) {
  let c = (o - a) / 2;
  for (let o = 0; o < 2; o++) {
    let l = (s * (o + 1)) / 2,
      u = a + o * c,
      d = u + c * 0.7;
    if (
      (e.col(cP, 0.92 - o * 0.06).mat(0.6, 0, 0.2, sP),
      e.box(t - l, u, n - l, r + l, d, i + l, e.white, 0, 0, null, !0),
      !e.coarse && o === 1)
    ) {
      e.push().col(dP).mat(0.35, 0.8, 0.12, sP);
      let a = Math.max(2, Math.round((r - t) / 1.3)),
        o = Math.max(2, Math.round((i - n) / 1.3));
      for (let o = 0; o <= a; o++) {
        let s = t + ((r - t) * o) / a;
        (e.box(s - 0.12, d, n - l - 0.14, s + 0.12, d + c * 0.3, n - l + 0.1),
          e.box(s - 0.12, d, i + l - 0.1, s + 0.12, d + c * 0.3, i + l + 0.14));
      }
      for (let a = 1; a < o; a++) {
        let s = n + ((i - n) * a) / o;
        (e.box(t - l - 0.14, d, s - 0.12, t - l + 0.1, d + c * 0.3, s + 0.12),
          e.box(r + l - 0.1, d, s - 0.12, r + l + 0.14, d + c * 0.3, s + 0.12));
      }
      e.pop();
    }
  }
}
function LP(e, t, n, r, i, a, o = 0.18) {
  (jP(e, o),
    e.cylY(t, n, r, i, a, 10, a * 0.95, !1),
    e.coarse ||
      e
        .push()
        .col(1973016)
        .mat(0.6, 0.1, 0, 0)
        .cylY(t, n, r, r + 0.3, a * 1.12, 10, a * 1.08, !0)
        .pop());
}
