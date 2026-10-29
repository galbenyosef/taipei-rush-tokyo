// tokyo/assets/region-tokyo-A7LxHjud 294 — col
// Lines 107639-107889 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function xW(e, t, n, r, i, a, o, s, c, l) {
  let u = [r[0] - n[0], r[1] - n[1], r[2] - n[2]],
    d = [a[0] - n[0], a[1] - n[1], a[2] - n[2]],
    f = [
      u[1] * d[2] - u[2] * d[1],
      u[2] * d[0] - u[0] * d[2],
      u[0] * d[1] - u[1] * d[0],
    ],
    p = Math.hypot(f[0], f[1], f[2]) || 1;
  f = f.map((e) => e / p);
  let m = [];
  for (let e = 0; e <= s; e++)
    for (let l = 0; l <= o; l++) {
      let p = l / o,
        h = e / s,
        g = [0, 1, 2].map(
          (e) =>
            (1 - p) * (1 - h) * n[e] +
            p * (1 - h) * r[e] +
            p * h * i[e] +
            (1 - p) * h * a[e],
        );
      if (l > 0 && l < o && e > 0 && e < s) {
        let e = t.range(-c, c),
          n = t.range(-0.18, 0.18) / o,
          r = t.range(-0.18, 0.18) / s;
        for (let t = 0; t < 3; t++) g[t] += f[t] * e + u[t] * n + d[t] * r;
      }
      m.push(g);
    }
  let h = 0,
    g = (e, t) => m[t * (o + 1) + e];
  for (let t = 0; t < s; t++)
    for (let n = 0; n < o; n++) {
      let r = g(n, t),
        i = g(n + 1, t),
        a = g(n + 1, t + 1),
        o = g(n, t + 1),
        s = (t, n, r) => {
          (l(h++),
            e.triFace(t[0], t[1], t[2], n[0], n[1], n[2], r[0], r[1], r[2]));
        };
      (n + t) % 2 ? (s(r, i, a), s(r, a, o)) : (s(r, i, o), s(i, a, o));
    }
}
var SW = (e, t, n, r, i, a = {}) => ({
    id: e,
    near: 200,
    site: hW(e),
    build: r,
    far: i,
    farBoxes: eEe(e, t, n),
    ...a,
  }),
  CW = { h: 27.5, r: 7.2, dh: 31 };
function* rEe(e, t) {
  let [n, r] = oW(t.plan, `omote-lafora`),
    i = -n + CW.r,
    a = -r + CW.r;
  (e.col(11909307).mat(0.45, 0.55, 0, 0),
    e.box(i, 0, -r, n, CW.h, r),
    e.box(-n, 0, a, i, CW.h, r));
  let o = e.coarse ? 10 : 20,
    s = (t, n, r) => e.lathe(i, a, [r, t, r, n], o, 0, e.white, !1, !0);
  if (
    (e.col(3949126).mat(0.15, 0.5, 0.45, 1), s(0, 5.2, CW.r - 0.15), e.coarse)
  )
    (e.col(15497896).mat(0.6, 0, 0.3, 1), s(5.2, 27, CW.r));
  else
    for (let [t, n, r] of [
      [5.2, 9, 15892400],
      [9, 15.5, 16767055],
      [15.5, 21, 5818086],
      [21, 27, 16747100],
    ])
      (e.col(r).mat(0.6, 0, 0.32, 1), s(t, n, CW.r));
  if (
    (e.col(14211804).mat(0.35, 0.6, 0.06, 1),
    e.lathe(
      i,
      a,
      [CW.r + 0.1, 27, CW.r + 0.1, CW.dh, 0.02, CW.dh],
      o,
      0,
      e.white,
      !1,
      !0,
    ),
    e.coarse)
  )
    return;
  (yield,
    e.col(14869734).mat(0.4, 0.5, 0.15, 1),
    e.lathe(
      i,
      a,
      [CW.r - 0.2, 5, CW.r + 1.4, 5, CW.r + 1.4, 5.35, CW.r - 0.2, 5.35],
      o,
      0,
      e.white,
      !1,
      !0,
    ),
    dW(e, t, i + 0.4, n - 1, -r - 0.03, 4.8),
    e.push().col(16777215).mat(0.3, 0.2, 0.35, G),
    e.wall(
      -n - 0.03,
      a + 0.6,
      -n - 0.03,
      r - 1,
      0,
      4.8,
      t.c(`doors`),
      2.4,
      4.8,
    ),
    e.pop(),
    e.col(2501166).mat(0.5, 0.2, 0, 0),
    e.panel(n - 2, -r - 0.03, i + 2.6, -r - 0.03, 7, 25),
    e.col(15326452).mat(0.6, 0, 0.28, 1),
    e.panel(n - 2.6, -r - 0.06, i + 3.2, -r - 0.06, 7.6, 24.4));
  let c = i + 3.2,
    l = n - 2.6 - c;
  (e.col(16740264).mat(0.6, 0, 0.32, 1),
    e.panel(c + l * 0.95, -r - 0.09, c + l * 0.38, -r - 0.09, 13, 23),
    e.col(16767055).mat(0.6, 0, 0.32, 1),
    e.panel(c + l * 0.55, -r - 0.12, c + l * 0.08, -r - 0.12, 9, 17.5),
    e.col(2237738).mat(0.6, 0, 0.1, 1),
    e.panel(c + l * 0.9, -r - 0.12, c + l * 0.6, -r - 0.12, 9.2, 10.2));
  let u = Math.SQRT1_2,
    d = [-u, -u];
  (GB(
    e,
    i + d[0] * (CW.r + 0.15),
    27.6,
    a + d[1] * (CW.r + 0.15),
    d,
    6.5,
    2.6,
    0.3,
    2369322,
    `LAFORET`,
    16777215,
    { lit: 0.6, px: 24 },
  ),
    e.solid(i, -r, n, r, 0, CW.h),
    e.solid(-n, a, i, r, 0, CW.h),
    e.solid(i - CW.r * 0.8, a - CW.r * 0.8, i + 0.1, a + 0.1, 0, CW.dh));
}
function iEe(e, t) {
  let [n, r] = oW(t.plan, `omote-lafora`);
  (e.col(11909307).mat(0.45, 0.55, 0, 0), e.box(-n, 0, -r, n, CW.h, r));
}
var wW = {
  base: 10.4,
  flare: 13.2,
  deck: 23.6,
  top: 33,
  ch: 8,
  e: 0.9,
  deep: 8,
  portW: 3.7,
  portH: 9,
  tD: 11,
  backW: 2.3,
  backY0: 5.6,
  backY1: 10,
};
function TW(e, t) {
  let { ch: n, e: r } = wW,
    i = r * (Math.SQRT2 - 1);
  return {
    O: [
      [e - n, -t],
      [-e, -t],
      [-e, t],
      [e, t],
      [e, -t + n],
    ],
    B: [
      [e - n - i, -t + r],
      [-e, -t + r],
      [-e, t],
      [e - r, t],
      [e - r, -t + n + i],
    ],
  };
}
function aEe(e, t) {
  let { ch: n, deep: r } = wW,
    i = [-e + 9, -e + 13.5],
    a = [-e + 23, -e + 27.5],
    o = [-1, 3.5],
    s = [
      [i[0], -t],
      [-e, -t],
      [-e, t],
      [e, t],
      [e, o[1]],
      [e - r, o[1]],
      [e - r, t - r],
      [i[0], t - r],
    ],
    c = bW(i[1], -t, a[0], -t + r),
    l = [
      [e - n, -t],
      [a[1], -t],
      [a[1], -t + r],
      [e - r, -t + r],
      [e - r, o[0]],
      [e, o[0]],
      [e, -t + n],
    ],
    u = [
      bW(-e, -t, i[0], t),
      bW(i[0], t - r, e - r, t),
      bW(e - r, o[1], e, t),
      c,
      bW(a[1], -t, e - r, -t + r),
      [
        [e - r, -t],
        [e - r, o[0]],
        [e, o[0]],
        [e, -t + n],
      ],
    ],
    d = [
      bW(i[0], -t + r, e - r, t - r),
      bW(i[0], -t, i[1], -t + r),
      bW(a[0], -t, a[1], -t + r),
      bW(e - r, o[0], e, o[1]),
    ],
    f = [
      [i[1], -t, i[0], -t],
      [a[1], -t, a[0], -t],
      [e, o[1], e, o[0]],
    ];
  return { pieces: [s, c, l], lids: u, deck: d, mouths: f };
}
var oEe = (e, t, n, r) =>
    (Math.abs(e[1] + r) < 1e-6 && Math.abs(t[1] + r) < 1e-6) ||
    (Math.abs(e[0] + n) < 1e-6 && Math.abs(t[0] + n) < 1e-6) ||
    (Math.abs(e[1] - r) < 1e-6 && Math.abs(t[1] - r) < 1e-6) ||
    (Math.abs(e[0] - n) < 1e-6 && Math.abs(t[0] - n) < 1e-6) ||
    (Math.abs(e[0] - t[0]) > 1e-6 && Math.abs(e[1] - t[1]) > 1e-6),
  sEe = 9210509,
  EW = 12109516,
  DW = [
    16777215, 14674159, 11125984, 7306117, 3883850, 13160662, 8955269, 12432808,
    2896439, 15525081, 9872301, 16054265, 14264504,
  ];
