// tokyo/assets/region-tokyo-A7LxHjud 241 — col
// Lines 91436-91697 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function vI(e, t, n, r, i) {
  (e.push().col(4153649, i.range(0.85, 1.1)).mat(0.95, 0, 0, 0),
    e.lathe(
      t,
      n,
      [r * 0.9, -0.05, r, r * 0.35, r * 0.7, r * 0.75, 0.05, r * 0.85],
      5,
      i.next(),
    ),
    e.pop());
}
function yI(e, t, n, r, i = 1, a = 0) {
  e.push().col(9078139, r.range(0.8, 1.1)).mat(0.95, 0, 0, 0);
  let o = r.range(0.55, 1.15) * i,
    s = r.range(0.5, 1.1) * i,
    c = a - 0.25 * i;
  (e.lathe(
    t,
    n,
    [o, c, o * r.range(0.7, 0.9), c + s * 0.55, 0.01, c + s],
    5,
    r.range(0, Math.PI),
  ),
    e.pop());
}
function bI(e, t, n, r = 0) {
  e.push().col(10328204).mat(0.95, 0, 0, 0);
  for (let i = 0; i < 3; i++) {
    let a = (i / 3) * Math.PI * 2;
    e.rod(
      t + Math.cos(a) * 0.5,
      r,
      n + Math.sin(a) * 0.5,
      t + Math.cos(a) * 0.28,
      r + 0.6,
      n + Math.sin(a) * 0.28,
      0.07,
      4,
    );
  }
  (e.lathe(t, n, [0.4, r + 0.58, 0.4, r + 0.66], 6),
    e.col(15916206).mat(0.8, 0, 0.35, 1),
    e.lathe(t, n, [0.24, r + 0.66, 0.24, r + 0.94], 6),
    e.col(10328204).mat(0.95, 0, 0, 0),
    e.lathe(
      t,
      n,
      [
        0.01,
        r + 0.9,
        0.78,
        r + 0.98,
        0.72,
        r + 1.06,
        0.18,
        r + 1.3,
        0.01,
        r + 1.38,
      ],
      6,
      Math.PI / 6,
    ),
    e.pop(),
    e.pole(t, n, 0.6, r, r + 1.3));
}
function xI(e, t, n) {
  (e.push().col(10657169).mat(0.95, 0, 0, 0),
    e.lathe(t, n, [0.42, 0, 0.42, 0.2, 0.28, 0.3], 6),
    e.cylY(t, n, 0.3, 1.25, 0.13, 6, 0.12, !1),
    e.lathe(t, n, [0.2, 1.25, 0.36, 1.4, 0.36, 1.48], 6),
    e.col(15916206).mat(0.8, 0, 0.35, 1),
    e.lathe(t, n, [0.22, 1.48, 0.22, 1.8], 6),
    e.col(10657169).mat(0.95, 0, 0, 0),
    e.lathe(
      t,
      n,
      [
        0.01, 1.78, 0.52, 1.86, 0.48, 1.94, 0.12, 2.12, 0.1, 2.18, 0.13, 2.26,
        0.01, 2.4,
      ],
      6,
      Math.PI / 6,
    ),
    e.pop(),
    e.pole(t, n, 0.4, 0, 2.3));
}
function SI(e, t, n, r, i, a, o, s) {
  let c = Math.hypot(i - n, a - r),
    l = (i - n) / c,
    u = (a - r) / c,
    d = -u,
    f = l,
    p = uI.t / 2,
    m = (e, t, i) => [n + l * e + d * t, i, r + u * e + f * t],
    h = 0.8,
    g = uI.h,
    _ = e.coarse ? 8 : 4;
  for (let n of [1, -1]) {
    let r = m(n > 0 ? 0 : c, n * p, 0),
      i = m(n > 0 ? c : 0, n * p, 0);
    (e.col(9407363).mat(0.9, 0, 0, 0),
      e.wall(r[0], r[2], i[0], i[2], 0, h, t.c(`granite`), _, h),
      e.col(15986920).mat(0.85, 0, 0.03, 1),
      e.wall(r[0], r[2], i[0], i[2], h, g, t.c(`plaster`), _, g - h));
  }
  let v = 0.62,
    y = g + 0.02,
    b = g + 0.5;
  (e.col(4935250).mat(0.7, 0.1, 0, 0),
    rM(e, m(0, 0, b), m(c, 0, b), m(c, v, y), m(0, v, y), [d, 1, f]),
    rM(e, m(0, 0, b), m(c, 0, b), m(c, -0.62, y), m(0, -0.62, y), [-d, 1, -f]),
    rM(e, m(0, v, y), m(c, v, y), m(c, -0.62, y), m(0, -0.62, y), [0, -1, 0]),
    e.coarse ||
      (e.col(4145734).mat(0.7, 0.1, 0, 0),
      rM(
        e,
        m(0, -0.1, b),
        m(c, -0.1, b),
        m(c, -0.1, b + 0.16),
        m(0, -0.1, b + 0.16),
        [-d, 0, -f],
      ),
      rM(
        e,
        m(0, 0.1, b),
        m(c, 0.1, b),
        m(c, 0.1, b + 0.16),
        m(0, 0.1, b + 0.16),
        [d, 0, f],
      ),
      rM(
        e,
        m(0, -0.1, b + 0.16),
        m(c, -0.1, b + 0.16),
        m(c, 0.1, b + 0.16),
        m(0, 0.1, b + 0.16),
        [0, 1, 0],
      )));
  for (let [t, n, r] of [
    [o, 0, -1],
    [s, c, 1],
  ]) {
    if (!t) continue;
    (e.col(15986920).mat(0.85, 0, 0, 0),
      rM(e, m(n, -p, 0), m(n, p, 0), m(n, p, g), m(n, -p, g), [
        l * r,
        0,
        u * r,
      ]),
      e.col(4935250).mat(0.7, 0.1, 0, 0));
    let i = m(n, -0.62, y),
      a = m(n, v, y),
      o = m(n, 0, b);
    r > 0
      ? e.triFace(i[0], i[1], i[2], a[0], a[1], a[2], o[0], o[1], o[2])
      : e.triFace(a[0], a[1], a[2], i[0], i[1], i[2], o[0], o[1], o[2]);
  }
  e.solidRot(
    n + l * c * 0.5,
    r + u * c * 0.5,
    c / 2,
    p + 0.05,
    Math.atan2(u, l),
    0,
    g + 0.5,
    `wall`,
  );
}
function CI(e, t, n, r, i, a) {
  let o = e.sub(n, 0, r, a);
  e.col(5981235).mat(0.85, 0, 0, 0);
  for (let t of [-1, 1])
    (e.box(t * i - 0.18, 0, -0.18, t * i + 0.18, 3.6, 0.18),
      e.box(t * i - 0.13, 0, 1, t * i + 0.13, 3.3, 1.26),
      e.solid(t * i - 0.2, -0.2, t * i + 0.2, 0.2, 0, 3.6, `wall`));
  (e.box(-i - 0.4, 3.3, -0.22, i + 0.4, 3.75, 0.22),
    e.box(-i - 0.3, 3.3, 0.22, i + 0.3, 3.5, 1.26),
    e.col(7033148).mat(0.85, 0, 0, 0));
  for (let t of [-1, 1])
    e.box(
      t * i - (t > 0 ? 0.12 : -0),
      0.1,
      0.25,
      t * i + (t > 0 ? 0 : 0.12),
      3.1,
      0.25 + i * 0.95,
    );
  (cC(e, 0, 0.5, 3.75, i + 1.1, 1.55, {
    rise: 1.05,
    cell: t.c(`kawara`),
    tile: 2,
    color: 9146260,
    band: 4995628,
    soffit: 3812900,
    ridgeH: 0.28,
    ridgeColor: 4869458,
    eave: 0.5,
    wallY: 3.75,
    wallInset: 0.5,
    wallColor: 5981235,
    rows: 3,
  }),
    e.leave(o));
}
function Yxe(e, t, n, r) {
  let i = e.sub(n, 0, r, Math.PI / 2),
    a = 13124908,
    o = 1.8;
  e.col(a).mat(0.6, 0, 0.04, 1);
  for (let t of [-1, 1])
    (e.cylY(t * o, -0.9, 0, 3.4, 0.17, 8, 0.16, !1),
      e.cylY(t * o, 0.9, 0, 3.4, 0.17, 8, 0.16, !1),
      e.box(t * o - 0.12, 2.9, -0.9, t * o + 0.12, 3.15, 0.9),
      e.pole(t * o, -0.9, 0.2, 0, 3.4, `post`),
      e.pole(t * o, 0.9, 0.2, 0, 3.4, `post`));
  (e.box(-2.1, 3.15, -1.05, 2.1, 3.5, 1.05),
    e.col(3091240).mat(0.8, 0, 0, 0),
    e.box(-2.1, 0, -0.95, -1.8 + 0.12, 0.2, 0.95),
    e.box(1.6800000000000002, 0, -0.95, 2.1, 0.2, 0.95));
  let s = {
    rise: 0,
    cell: t.c(`kawara`),
    tile: 2,
    color: 8226704,
    band: 3946805,
    soffit: a,
    thick: 0.35,
  };
  (uC(e, 0, 0, 3.6, 2.8, -1.7, 0, 1.15, {
    ...s,
    boardColor: 3814706,
    gilt: 13214282,
    pendant: !1,
  }),
    uC(
      e,
      0,
      0,
      3.6,
      2.8,
      -1.7,
      0,
      1.15,
      { ...s, boardColor: 3814706, gilt: 13214282, pendant: !1 },
      Math.PI,
    ),
    e.leave(i));
}
function Xxe(e, t) {
  let n = mI.zc - 4,
    r = mI.zc + 4;
  for (let [i, a] of [
    [cI.z0, n],
    [r, cI.z1],
  ])
    (e.col(9341310).mat(0.95, 0, 0, 0),
      e.wall(pI.x0, i, pI.x0, a, -1.2, pI.top, t.c(`ishigaki`), 2, 1.45),
      e.wall(pI.x1, a, pI.x1, i, -1.2, pI.top, t.c(`ishigaki`), 2, 1.45),
      e.col(13351316).mat(0.95, 0, 0, 0),
      e.flat(pI.x0, i, pI.x1, a, pI.top, t.c(`gravel`), 4, 4),
      e.floor(pI.x0, i, pI.x1, a, pI.top, pI.top, `path`));
}
