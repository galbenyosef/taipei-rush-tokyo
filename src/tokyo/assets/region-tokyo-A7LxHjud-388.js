// tokyo/assets/region-tokyo-A7LxHjud 388 — math
// Lines 140967-141315 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function DPe(e, t) {
  let n = (n, r, i, a, o, s) => {
    (e.setColor(0.74, 0.71, 0.64),
      e.boxMinMax(n, t, r, i, t + o, a, 51),
      e.setColor(0.26, 0.4, 0.34),
      e.frustum(
        (n + i) / 2,
        t + o,
        (r + a) / 2,
        i - n + 5,
        a - r + 5,
        (i - n) * 0.25,
        a - r - (i - n) * 0.6,
        s,
      ));
  };
  (n(-600, 62, -586, 168, 8.5, 3.2),
    n(-640, 96, -614, 132, 11, 5),
    n(-640, 140, -616, 166, 9, 4),
    n(-614, 108, -600, 120, 6, 2),
    e.setColor(0.42, 0.4, 0.36),
    e.flat(-584, 68, -550, 162, t + 0.03));
  let r = Math.floor(P1.minX / M1) - 1,
    i = Math.ceil(P1.maxX / M1) + 1,
    a = Math.floor(P1.minZ / M1) - 1,
    o = Math.ceil(P1.maxZ / M1) + 1,
    s = (e, t) => L1((e + 0.5) * M1, (t + 0.5) * M1),
    c = (e, n) => {
      let r = e * M1,
        i = n * M1,
        a = +s(e - 1, n - 1) + +s(e, n - 1) + +s(e - 1, n) + +s(e, n);
      return t + EPe(r, i) * (a === 4 ? 1 : 0.72);
    };
  for (let n = a; n < o; n++)
    for (let a = r; a < i; a++) {
      if (!s(a, n)) continue;
      let r = a * M1,
        i = r + M1,
        o = n * M1,
        l = o + M1,
        u = I1(r + 3, o - 5, 46, 41),
        d = I1(r, o, 17, 63),
        f = 0.94 + 0.12 * F1(a + 77, n),
        p = Math.min(1, Math.max(0, (u - 0.35) * 1.8)) * (0.6 + 0.4 * d);
      (e.setColor(
        (0.045 + 0.035 * p) * f,
        (0.085 + 0.045 * p) * f,
        (0.04 + 0.012 * p) * f,
      ),
        e.quad(
          r,
          c(a, n + 1),
          l,
          i,
          c(a + 1, n + 1),
          l,
          i,
          c(a + 1, n),
          o,
          r,
          c(a, n),
          o,
        ));
      let m = t + 1.2;
      (e.setColor(0.035 * f, 0.065 * f, 0.032 * f),
        s(a, n - 1) ||
          e.quad(
            i + N1,
            m,
            o - N1,
            r - N1,
            m,
            o - N1,
            r,
            c(a, n),
            o,
            i,
            c(a + 1, n),
            o,
          ),
        s(a, n + 1) ||
          e.quad(
            r - N1,
            m,
            l + N1,
            i + N1,
            m,
            l + N1,
            i,
            c(a + 1, n + 1),
            l,
            r,
            c(a, n + 1),
            l,
          ),
        s(a - 1, n) ||
          e.quad(
            r - N1,
            m,
            o - N1,
            r - N1,
            m,
            l + N1,
            r,
            c(a, n + 1),
            l,
            r,
            c(a, n),
            o,
          ),
        s(a + 1, n) ||
          e.quad(
            i + N1,
            m,
            l + N1,
            i + N1,
            m,
            o - N1,
            i,
            c(a + 1, n),
            o,
            i,
            c(a + 1, n + 1),
            l,
          ));
    }
  let l = Ab,
    u = [
      [P1.minX, P1.minZ, P1.minX, P1.maxZ],
      [P1.minX, P1.maxZ, P1.maxX, P1.maxZ],
      [P1.minX, P1.minZ, l.minX - 6, P1.minZ],
      [P1.maxX, l.maxZ + 6, P1.maxX, P1.maxZ],
    ];
  for (let [n, r, i, a] of u) {
    let o = Math.hypot(i - n, a - r),
      s = Math.round(o / 8);
    for (let o = 0; o <= s; o++) {
      let c = n + ((i - n) * o) / s,
        l = r + ((a - r) * o) / s;
      if (!L1(c + (c < -700 ? 4 : -4), l + (l > 0 ? -4 : 4)) && !L1(c, l))
        continue;
      let u = F1(Math.round(c * 3), Math.round(l * 3));
      R1(
        e,
        c,
        t + 1.5 + u * 3,
        l,
        4.2 + u * 2.2,
        11 + u * 6,
        0.8 + u * 0.4,
        !1,
      );
    }
  }
  for (let n = l.minZ + 8; n < l.maxZ + 6; n += 6.5) {
    let r = F1(Math.round(n), 5);
    R1(e, l.minX - 5 - r * 3, t, n, 4 + r * 2, 12 + r * 5, 0.85 + r * 0.4);
  }
  for (let n = l.minX; n < l.maxX - 10; n += 6.5) {
    let r = F1(Math.round(n), 9);
    n > -548 ||
      R1(e, n, t, l.maxZ + 5 + r * 3, 4 + r * 2, 12 + r * 5, 0.85 + r * 0.4);
  }
}
function OPe(e, t) {
  let n = () => e.setColor(0.2, 0.22, 0.24),
    r = () => e.setColor(0.62, 0.12, 0.08),
    i = 662,
    a = -1402,
    o = t.height(i, a);
  if (x1.sensoji) {
    (r(),
      e.box(i, o, a, 30, 12, 26),
      n(),
      e.frustum(i, o + 12, a, 40, 34, 12, 4, 15),
      e.box(i, o + 27, a, 14, 1.5, 4),
      r(),
      e.box(i, o, a + 40, 18, 9, 9),
      n(),
      e.frustum(i, o + 9, a + 40, 24, 14, 6, 2, 6),
      (i = 632),
      (a = -1372),
      (o = t.height(i, a)));
    for (let t = 0; t < 5; t++) {
      let s = 1 - t * 0.09,
        c = o + 2 + t * 7.6;
      (r(),
        e.box(i, c, a, 7 * s, 4.2, 7 * s),
        n(),
        e.frustum(i, c + 4.2, a, 13 * s, 13 * s, 7.5 * s, 7.5 * s, 3.4));
    }
    (e.setColor(0.55, 0.45, 0.25),
      e.cyl(i, o + 2 + 38, a, 0.5, 12, 6, !0, 0.3));
  }
  ((i = 905),
    (a = -1262),
    (o = t.height(i, a)),
    e.setColor(0.07, 0.07, 0.08),
    e.frustum(i, o, a, 30, 26, 38, 32, 22),
    e.setColor(0.9, 0.62, 0.14).setEmit(0.35, 0),
    e.beam(i - 8, o + 22, a, i + 18, o + 40, a + 2, 9, 6),
    e.beam(i + 18, o + 40, a + 2, i + 30, o + 37, a + 3, 6, 4),
    e.noEmit(),
    e.setColor(0.86, 0.66, 0.22),
    e.box(i + 4, o, a - 34, 26, 88, 22),
    A1(e, i + 4, o, a - 34, 26, 22, 88, 4.4, [0.5, 0.36, 0.1]),
    e.setColor(0.92, 0.92, 0.9),
    e.box(i + 4, o + 88, a - 34, 26, 12, 22),
    j1(e, t, i + 36, a - 40, 26, 30, 92, 405));
}
function kPe(e, t) {
  let n = 802,
    r = -760,
    i = t.height(n, r);
  (e.setColor(0.62, 0.6, 0.56),
    e.box(n, i, r, 64, 14, 64),
    e.setColor(0.32, 0.52, 0.44),
    e.frustum(n, i + 14, r, 70, 70, 34, 34, 14),
    e.frustum(n, i + 28, r, 34, 34, 18, 18, 8),
    e.setColor(0.86, 0.84, 0.8),
    e.box(n, i + 36, r, 14, 6, 14),
    e.setColor(0.32, 0.52, 0.44),
    e.frustum(n, i + 42, r, 18, 18, 2, 2, 5),
    (n = 896),
    (r = -770),
    (i = t.height(n, r)),
    e.setColor(0.52, 0.5, 0.47));
  for (let [t, a] of [
    [-1, -1],
    [1, -1],
    [1, 1],
    [-1, 1],
  ])
    e.box(n + t * 20, i, r + a * 16, 10, 30, 10);
  (e.setColor(0.6, 0.58, 0.55),
    e.box(n, i + 30, r, 76, 26, 58),
    A1(e, n, i + 30, r, 76, 58, 26, 8, [0.3, 0.3, 0.3], 4),
    e.setColor(0.38, 0.36, 0.34),
    e.frustum(n, i + 56, r, 80, 62, 70, 54, 6));
}
function APe(e, t) {
  let n = (n, r, i, a, o, s, c) => j1(e, t, n, r, i, a, o, s, c);
  if (
    (x1.toranomonHills &&
      n(-553, 700, 48, 48, 255, 21, {
        taper: 0.25,
        crown: 12,
        glass: [0.4, 0.48, 0.55],
      }),
    x1.toranomonStationTower && n(-553, 571, 46, 40, 266, 22, { crown: 8 }),
    x1.azabudaiHills &&
      n(-660, 925, 52, 52, 325, 24, {
        taper: 0.2,
        glass: [0.5, 0.55, 0.58],
        crown: 6,
      }),
    x1.roppongiHills &&
      n(-1045, 1040, 60, 52, 238, 25, { glass: [0.3, 0.33, 0.36], crown: 14 }),
    x1.tokyoMidtown &&
      n(-1045, 858, 44, 44, 248, 26, { taper: 0.18, glass: [0.42, 0.5, 0.56] }),
    [
      [724, 709, 192],
      [760, 660, 178],
      [700, 560, 165],
      [860, 470, 170],
      [931, 466, 190],
      [905, 380, 150],
      [990, 690, 195],
      [1010, 560, 168],
      [820, 300, 140],
      [1180, 520, 180],
      [1230, 640, 170],
      [1150, 760, 155],
      [1280, 420, 160],
    ].forEach(([e, t, r], i) =>
      n(e, t, 30 + (i % 3) * 4, 30 + ((i + 1) % 3) * 4, r, 31 + i, {
        glass: [0.62, 0.62, 0.6],
        crown: 4,
      }),
    ),
    x1.tocho &&
      (n(-2390, 320, 30, 26, 243, 41, { glass: [0.62, 0.6, 0.56], crown: 0 }),
      n(-2345, 320, 30, 26, 243, 42, { glass: [0.62, 0.6, 0.56], crown: 0 }),
      n(-2368, 410, 60, 40, 163, 43, { glass: [0.6, 0.58, 0.55] })),
    x1.parkTower &&
      n(-2368, 533, 50, 44, 235, 44, { glass: [0.42, 0.44, 0.46], crown: 10 }),
    x1.cocoon &&
      n(-2240, 294, 26, 26, 204, 45, {
        taper: 0.3,
        glass: [0.36, 0.42, 0.48],
        crown: 4,
      }),
    x1.keioPlaza &&
      n(-2280, 301, 30, 60, 178, 46, { glass: [0.66, 0.66, 0.64] }),
    x1.kabukichoTower &&
      n(-2108, 0, 30, 30, 225, 47, {
        taper: 0.15,
        glass: [0.4, 0.46, 0.52],
        crown: 8,
      }),
    x1.scrambleSquare &&
      n(-1736, 1373, 32, 56, 230, 48, { glass: [0.42, 0.46, 0.5], crown: 6 }),
    x1.hikarie &&
      n(-1646, 1371, 60, 44, 183, 49, { glass: [0.48, 0.5, 0.5], crown: 6 }),
    x1.sunshine60 &&
      n(w1.x, w1.z, 54, 40, 240, 61, { glass: [0.55, 0.55, 0.53] }),
    x1.tokyoDome)
  ) {
    let n = -905,
      r = -719,
      i = t.height(n, r);
    (e.setColor(0.86, 0.87, 0.86),
      e.cyl(n, i, r, 72, 16, 20, !1),
      e.cyl(n, i + 16, r, 72, 18, 20, !0, 34));
  }
}
var z1 = 48,
  B1 = Math.atan2(806, -1384),
  V1 = 64,
  H1 = 256,
  U1 = 1004,
  W1 = 1005,
  G1 = new Float64Array(98),
  K1 = new Float64Array(98);
function q1(e, t, n, r, i) {
  let a = 2 * (n - t),
    o = 2 * t - n,
    s = r / 3;
  for (let t = 0; t <= r; t++) {
    let n = Math.min(2, Math.floor(t / s)),
      c = (t - n * s) / s,
      l = B1 + (n * 2 * Math.PI) / 3,
      u = l + (2 * Math.PI) / 3,
      d = B1 + (2 * Math.PI * t) / r,
      f = a * (Math.cos(l) * (1 - c) + Math.cos(u) * c) + o * Math.cos(d),
      p = a * (Math.sin(l) * (1 - c) + Math.sin(u) * c) + o * Math.sin(d);
    if (i) {
      let e = Math.hypot(f, p) || 1;
      ((f += (f / e) * i), (p += (p / e) * i));
    }
    ((e[t * 2] = f), (e[t * 2 + 1] = p));
  }
}
function J1(e, t) {
  let n = 0;
  for (let r = 0; r < t; r++)
    n += Math.hypot(e[r * 2 + 2] - e[r * 2], e[r * 2 + 3] - e[r * 2 + 1]);
  return n;
}
