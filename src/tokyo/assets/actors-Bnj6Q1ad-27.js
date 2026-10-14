// tokyo/assets/actors-Bnj6Q1ad 27 — color
// Lines 13227-13427 of readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js (statement-aligned).
function ou(e, t, n, r) {
  let i = { color: t.passenger ? 4013893 : 2832981, rough: 0.9, variant: n },
    a =
      t.jacket === void 0
        ? { color: 16777215, paint: 2, rough: 0.8, variant: n }
        : { color: t.jacket, rough: 0.75, variant: n },
    o = { ...Kl, variant: n },
    s = { color: 1710618, rough: 0.8, variant: n },
    c = { color: 2105636, rough: 0.7, variant: n },
    { hipY: l, hipZ: u, lean: d } = t;
  (e.style(i), e.cbox(0, l + 0.02, u + 0.03, 0.3, 0.16, 0.3, 0.05, !1));
  for (let n of [-1, 1]) {
    let r = [n * 0.1, l + 0.02, u - 0.02],
      a = [n * t.knee[0], t.knee[1], t.knee[2]],
      o = [n * t.foot[0], t.foot[1], t.foot[2]];
    (e.style(i),
      K(e, r, a, 0.078, 0.062, 6, !0),
      K(e, a, [o[0], o[1] + 0.05, o[2]], 0.058, 0.045, 6, !0),
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
      K(e, [r, i, s], [m, h, g], 0.058, 0.05, 6, !0),
      K(e, [m, h, g], [l, u, d + 0.03], 0.05, 0.042, 6, !0),
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
var su = {
    hipY: 0.88,
    hipZ: 0.2,
    lean: 0.12,
    hand: [0.32, 1.08, -0.47],
    knee: [0.15, 0.86, -0.12],
    foot: [0.15, 0.39, -0.1],
  },
  cu = {
    hipY: 0.92,
    hipZ: 0.57,
    lean: 0.05,
    hand: [0.15, 1, 0.42],
    knee: [0.22, 0.9, 0.36],
    foot: [0.26, 0.44, 0.42],
    passenger: !0,
  },
  lu = { color: 1381912, rough: 0.45, metal: 0.4 },
  uu = { color: 10396585, rough: 0.35, metal: 0.8 },
  du = { color: 8225159, rough: 0.45, metal: 0.65 },
  fu = { color: 2763824, rough: 0.5, metal: 0.5 },
  pu = { color: 1381653, rough: 0.8 },
  mu = { color: 13212219, rough: 0.3, metal: 0.85 },
  hu = { color: 9278105, rough: 0.28, metal: 0.9 },
  gu = {
    motorcycle: { y: 1, z: -0.4, rake: 0.38 },
    superbike: { y: 0.92, z: -0.45, rake: 0.42 },
  };
function _u(e, t, n, r, i, a, o, s = 0.02, c = 8) {
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
function vu(e, t, n, r, i) {
  for (let a = 0; a < i; a++) {
    let o = (a + 0.5) / i,
      s = [
        t[0] + (n[0] - t[0]) * o,
        t[1] + (n[1] - t[1]) * o,
        t[2] + (n[2] - t[2]) * o,
      ],
      c = [(n[0] - t[0]) * 0.02, (n[1] - t[1]) * 0.02, (n[2] - t[2]) * 0.02];
    K(
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
