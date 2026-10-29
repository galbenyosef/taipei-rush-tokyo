// tokyo/assets/region-tokyo-A7LxHjud 207 — mat
// Lines 81649-81965 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* Qve(e, t) {
  Sj(e, t, yj, 22.2);
  let n = yj[2];
  (e.col(mj).mat(0.85, 0, 0.22, 1),
    e.box(n, 0, -16, n + 5.6, hj, 16, t.c(`granite`), 2, hj));
  let r = e.coarse ? 2 : 6,
    i = 0.6,
    a = hj / r;
  for (let t = 0; t < r; t++) {
    let o = n + 5.6 + (r - t) * i;
    (e.panel(o, 13, o, -13, t * a, (t + 1) * a),
      e.flat(o - i, -13, o, 13, (t + 1) * a));
  }
  (e.col(3814961).mat(0.5, 0.3, 0.3, 1),
    e.panel(n + 0.02, 6, n + 0.02, -6, hj, 9.5, t.c(`doors`)));
  for (let t of [-14, -8.4, -2.8, 2.8, 8.4, 14])
    wj(e, n + 3.6, t, hj, 18.6, 0.95);
  (e.col(pj).mat(0.78, 0, 0.18, 1),
    e.box(n, 18.6, -15.6, n + 5.2, 21.2, 15.6, e.white, 0, 0, null, !0),
    e.box(n, 21.2, -14.6, n + 4.6, 23.4, 14.6),
    e.solid(n, -16, n + 5.6 + r * i, 16, 0, hj),
    yield);
  let o = bj;
  (e.col(pj).mat(0.78, 0, 0.26, 1),
    e.box(-12, yj[4] - 0.6, -12, 12, o.colY0, 12, t.c(`granite`), 2, 2),
    hC(e, -12, -12, 12, 12, gC(o.colY0 - 0.9, 0.6, 0.9)),
    e.col(14209220).mat(0.8, 0, 0.24, 1));
  for (let [n, r, i, a] of xj(-9.6, -9.6, 9.6, 9.6))
    e.wall(
      n,
      r,
      i,
      a,
      o.colY0,
      o.colY1,
      t.c(`wakoBay`),
      3.84,
      o.colY1 - o.colY0,
      0.24,
    );
  e.col(pj).mat(0.78, 0, 0.26, 1);
  for (let n of [-1, 1])
    for (let r of [-1, 1])
      e.box(
        n > 0 ? 8.2 : -12,
        o.colY0,
        r > 0 ? 8.2 : -12,
        n > 0 ? 12 : -8.2,
        o.colY1,
        r > 0 ? 12 : -8.2,
        t.c(`granite`),
        2,
        2,
      );
  for (let t of [-5.4, -1.8, 1.8, 5.4])
    (wj(e, 11, t, o.colY0, o.colY1, 0.72),
      wj(e, -11, t, o.colY0, o.colY1, 0.72),
      wj(e, t, 11, o.colY0, o.colY1, 0.72),
      wj(e, t, -11, o.colY0, o.colY1, 0.72));
  (e.col(pj).mat(0.78, 0, 0.3, 1),
    e.box(
      -12.4,
      o.colY1,
      -12.4,
      12.4,
      o.entY,
      12.4,
      t.c(`granite`),
      2,
      2.5,
      null,
      !0,
    ),
    hC(e, -12.4, -12.4, 12.4, 12.4, gC(o.entY - 0.8, 0.5, 0.8)),
    yield);
  let s = o.entY;
  for (let n = 0; n < o.steps; n++) {
    let r = 11.6 - n * 0.95;
    (e.col(pj).mat(0.78, 0, 0.25 - n * 0.012, 1),
      e.box(-r, s, -r, r, s + o.stepH, r, t.c(`granite`), 2, o.stepH),
      (s += o.stepH));
  }
  let c = 3.2,
    l = s + 2.8;
  (e.col(14209220).mat(0.8, 0, 0.34, 1),
    e.box(-3.2, s, -3.2, c, l, c, t.c(`wakoBay`), 3.2, 2.8),
    e.col(pj).mat(0.78, 0, 0.3, 1),
    e.box(-3.6, l, -3.6, 3.6, l + 0.5, 3.6, e.white, 0, 0, null, !0));
  let u = l + 0.5,
    d = o.top - 0.4,
    f = 3.4000000000000004;
  (e.triFace(
    -3.4000000000000004,
    u,
    -3.4000000000000004,
    f,
    u,
    -3.4000000000000004,
    0,
    d,
    0,
  ),
    e.triFace(f, u, -3.4000000000000004, f, u, f, 0, d, 0),
    e.triFace(f, u, f, -3.4000000000000004, u, f, 0, d, 0),
    e.triFace(
      -3.4000000000000004,
      u,
      f,
      -3.4000000000000004,
      u,
      -3.4000000000000004,
      0,
      d,
      0,
    ),
    e.col(12101498).mat(0.4, 0.7, 0.1, 1),
    e.rod(0, d - 0.2, 0, 0, o.top, 0, 0.12, 6),
    e.solid(-12.4, -12.4, 12.4, 12.4, yj[4], o.entY),
    e.solid(-11.6, -11.6, 11.6, 11.6, o.entY, o.top));
}
function* $ve(e, t) {
  let n = e.coarse ? 14 : 4;
  (e.col(14209732).mat(0.95, 0, 0, 0),
    e.flat(21, -59, 58, 59, 0.04, t.c(`gravel`), n, n),
    e.col(13617339).mat(0.85, 0, 0, 0),
    e.flat(yj[2] + 9.2, -7, 58, 7, 0.06, t.c(`paving`), n, n),
    e.col(6591051).mat(0.95, 0, 0, 0));
  for (let n of [-1, 1]) {
    let r = n < 0 ? -52 : 11,
      i = n < 0 ? -11 : 52;
    e.flat(32, r, 55, i, 0.06, t.c(`lawn`), 4, 4);
  }
  if (
    (e.col(14209732).mat(0.95, 0, 0, 0),
    e.flat(-27, -59, 21, -57.5, 0.04, t.c(`gravel`), n, n),
    e.flat(-27, 57.5, 21, 59, 0.04, t.c(`gravel`), n, n),
    e.flat(-27, 59, 58, 66.5, 0.04, t.c(`gravel`), n, n),
    e.flat(-27, -57.5, -21.5, 57.5, 0.04, t.c(`gravel`), n, n),
    e.col(6591051).mat(0.95, 0, 0, 0),
    e.flat(-25, 60.5, 55, 65, 0.06, t.c(`lawn`), 4, 4),
    e.flat(-26, -55, -23, 55, 0.06, t.c(`lawn`), 4, 4),
    yield,
    !e.coarse)
  ) {
    let t = 171;
    for (let n of [-1, 1]) {
      for (let r = 34; r < 55; r += 5.2)
        GC(e, r, n * 54.5, 6.5 + ((r * 3) % 2), t++);
      for (let t = 34; t < 55; t += 3.4) BA(e, t, 0.06, n * 9.6, 0.9, 3497776);
      for (let [t, r] of [
        [38, 22],
        [49, 22],
        [38, 41],
        [49, 41],
        [43.5, 31.5],
      ])
        (BA(e, t, 0.06, n * r, 2.2, 3103276),
          e.pole(t, n * r, 1.4, 0, 2.6, `prop`));
      for (let t = 34; t < 55; t += 5.2)
        e.pole(t, n * 54.5, 0.35, 0, 3, `tree`);
    }
    for (let n = -22; n < 54; n += 12)
      (GC(e, n, 62.8, 7 + ((n * 7) % 3), t++),
        e.pole(n, 62.8, 0.35, 0, 3, `tree`));
    for (let n = -50; n < 52; n += 14)
      (GC(e, -24.5, n, 7.5 + ((n * 5) % 2), t++),
        e.pole(-24.5, n, 0.35, 0, 3, `tree`));
    for (let t of [-7.8, 7.8])
      for (let n of [36, 46, 56])
        (qC(e, n, 0.06, t, 4.4), e.pole(n, t, 0.15, 0, 4.4));
  }
  e.col(2895408).mat(0.5, 0.6, 0, 0);
  for (let [t, n] of [
    [-59, -9],
    [9, 59],
  ]) {
    if (
      (e.box(57.54, 1.55, t, 57.660000000000004, 1.7, n),
      e.box(57.54, 0.5, t, 57.660000000000004, 0.6, n),
      !e.coarse)
    )
      for (let r = t; r <= n; r += 0.5)
        e.box(57.57, 0.2, r - 0.03, 57.63, 1.6, r + 0.03);
    (e.col(mj).mat(0.85, 0, 0.1, 1),
      e.box(57.35, 0, t, 57.85, 0.25, n),
      e.col(2895408).mat(0.5, 0.6, 0, 0),
      e.solid(57.35, t, 57.85, n, 0, 1.7, `fence`));
  }
  e.col(pj).mat(0.8, 0, 0.2, 1);
  for (let n of [-9.6, 9.6])
    (e.box(
      56.9,
      0,
      n - 0.6,
      58.300000000000004,
      3.2,
      n + 0.6,
      t.c(`granite`),
      2,
      1.6,
    ),
      e.box(56.75, 3.2, n - 0.75, 58.45, 3.5, n + 0.75),
      e.push().col(16773328).mat(0.3, 0, 0.85, 1),
      e.cylY(57.6, n, 3.5, 4.5, 0.35, 8),
      e.pop(),
      e.solid(56.9, n - 0.6, 58.300000000000004, n + 0.6, 0, 4.5));
}
function* eye(e, t) {
  (yield* $ve(e, t), yield* Zve(e, t), yield* Qve(e, t));
}
function tye(e, t) {
  let n = t.c(`granite`);
  (e.col(pj).mat(0.8, 0, 0.2, 1),
    e.box(vj[0], 0, vj[1], vj[2], vj[4], vj[3], t.c(`wakoBay`), 7.2, 11),
    e.box(yj[0], 0, yj[1], yj[2] + 5, yj[4], yj[3], n, 8, 8),
    e.box(-12, yj[4], -12, 12, bj.entY, 12, n, 8, 8),
    e.mat(0.8, 0, 0.3, 1),
    e.box(-10, bj.entY, -10, 10, bj.entY + 8, 10, n, 8, 8),
    e.box(-5.5, bj.entY + 8, -5.5, 5.5, bj.entY + 17, 5.5, n, 8, 8),
    e.triFace(-3.6, bj.entY + 17, -3.6, 3.6, bj.entY + 17, -3.6, 0, bj.top, 0),
    e.triFace(3.6, bj.entY + 17, -3.6, 3.6, bj.entY + 17, 3.6, 0, bj.top, 0),
    e.triFace(3.6, bj.entY + 17, 3.6, -3.6, bj.entY + 17, 3.6, 0, bj.top, 0),
    e.triFace(-3.6, bj.entY + 17, 3.6, -3.6, bj.entY + 17, -3.6, 0, bj.top, 0));
}
var nye = {
  id: `diet`,
  site: (e) => ({
    x: fj.x,
    z: fj.z,
    gy: e.groundHeight(fj.x, fj.z),
    facing: 0,
  }),
  name: { ja: `国会議事堂`, zh: `國會議事堂`, en: `National Diet Building` },
  near: 240,
  build: eye,
  far: tye,
  bounds: () => [-777, 296, -692, 422],
  farBoxes: (e, t) => [
    {
      x0: fj.x + vj[0],
      x1: fj.x + vj[2] + 3,
      z0: fj.z + vj[1],
      z1: fj.z + vj[3],
      y0: t.gy,
      y1: t.gy + vj[4],
      rgb: [0.72, 0.68, 0.63],
    },
    {
      x0: fj.x - 12,
      x1: fj.x + 12,
      z0: fj.z - 12,
      z1: fj.z + 12,
      y0: t.gy + vj[4],
      y1: t.gy + bj.entY,
      rgb: [0.74, 0.7, 0.65],
    },
    {
      x0: fj.x - 8,
      x1: fj.x + 8,
      z0: fj.z - 8,
      z1: fj.z + 8,
      y0: t.gy + bj.entY,
      y1: t.gy + 60,
      rgb: [0.74, 0.7, 0.65],
    },
  ],
  anchors: [
    {
      key: `diet-front`,
      lx: 62,
      lz: 0,
      turn: -Math.PI / 2,
      name: { zh: `國會議事堂 正門`, en: `National Diet Building, main gate` },
    },
  ],
  blip: !0,
};
function Tj(e, t, n) {
  return e.sub(-t, 0, -n, 0);
}
function Ej(e, t) {
  let n = t[0] - e[0],
    r = t[1] - e[1],
    i = Math.hypot(n, r) || 1;
  return [-r / i, n / i];
}
function Dj(e, t, n, r = !0) {
  let i = 0;
  for (let e = 0; e < 4; e++) {
    let n = t[e],
      r = t[(e + 1) % 4];
    i += n[0] * r[1] - r[0] * n[1];
  }
  let a = i < 0 === r ? t : [t[3], t[2], t[1], t[0]];
  e.quad(
    a[0][0],
    n,
    a[0][1],
    a[1][0],
    n,
    a[1][1],
    a[2][0],
    n,
    a[2][1],
    a[3][0],
    n,
    a[3][1],
  );
}
function Oj(e, t, n, r, i, a, o, s, c, l, u, d) {
  (e.wall(r, n, t, n, a, o, s, c, l, d),
    e.wall(t, i, r, i, a, o, s, c, l, d),
    e.wall(t, n, t, i, a, o, s, c, l, d),
    e.wall(r, i, r, n, a, o, s, c, l, d),
    u !== void 0 &&
      (e.push().col(u).mat(0.85, 0, 0, 0), e.flat(t, n, r, i, o), e.pop()));
}
