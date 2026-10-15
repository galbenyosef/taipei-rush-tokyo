// tokyo/assets/region-tokyo-55J_WESF 204 — col
// Lines 80578-80874 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* vve(e, t) {
  let { x0: n, x1: r, z0: i, z1: a, h: o } = KA;
  (e.col(3553339).mat(0.9, 0, 0, 0),
    e.flat(n, i, r, a, 0.04),
    e.col(15910202).mat(0.7, 0, 0.05, 1),
    e.flat(n, -0.25, r, -0.1, 0.05),
    e.flat(n, 0.1, r, 0.25, 0.05),
    e.col(15790316).mat(0.7, 0, 0.05, 1));
  for (let t of [-5, 5])
    for (let i = n + 1; i < r - 4; i += 10)
      e.flat(i, t - 0.08, i + 5, t + 0.08, 0.05);
  (e.col(13225160).mat(0.6, 0.1, 0, 0),
    e.panel(n, i, r, i, 1, o),
    e.panel(r, a, n, a, 1, o),
    e.col(6053729).mat(0.8, 0, 0, 0),
    e.panel(n, i, r, i, 0, 1),
    e.panel(r, a, n, a, 0, 1),
    e.col(5001042).mat(0.9, 0, 0, 0),
    e.flat(n, i, r, a, o, e.white, 0, 0, !1),
    e.col(723981).mat(1, 0, 0, 0),
    e.panel(n, a, n, i, 0, o),
    e.col(16773846).mat(0.4, 0, 0.9, 0));
  for (let t = n + 2; t < r - 1; t += e.coarse ? 8 : 4)
    (e.flat(t, i + 0.6, t + 2, i + 1.1, o - 0.02, e.white, 0, 0, !1),
      e.flat(t, a - 1.1, t + 2, a - 0.6, o - 0.02, e.white, 0, 0, !1));
  yield;
  let s = t.c(`granite`),
    { x0: c, x1: l, z0: u, z1: d, h: f } = mve;
  if (
    (e.col(14078150).mat(0.8, 0, 0.12, 1),
    e.wall(l, d, l, a, 0, f, s, 2, 2),
    e.wall(l, i, l, u, 0, f, s, 2, 2),
    e.wall(l, a, l, i, o + 1, f, s, 2, 2),
    e.wall(l, u, c, u, 0, f, s, 2, 2),
    e.wall(c, d, l, d, 0, f, s, 2, 2),
    e.col(3948870).mat(0.4, 0.6, 0.05, 1),
    e.panel(l, a, l, i, o, o + 1),
    e.box(l, o + 0.8, i - 0.4, l + 0.8, o + 1.1, a + 0.4),
    e.col(6196295).mat(0.95, 0, 0, 0),
    e.flat(c, u, l, d, f, t.c(`lawn`), 4, 4),
    e.col(13617340).mat(0.85, 0, 0, 0),
    e.box(c, f, u + 3, c + 5.5, f + 1.2, d - 3),
    e.col(5603138).mat(0.95, 0, 0, 0),
    e.flat(c, u + 3.3, c + 5.2, d - 3.3, f + 1.22),
    !e.coarse)
  ) {
    for (let t = u + 2; t < d - 1; t += 4) RA(e, l - 2.4, f, t, 1.1);
    for (let t = u + 5; t < d - 4; t += 6)
      RA(e, c + 2.6, f + 1.22, t, 1.4, 3432495);
    VA(e, l - 0.15, d, l - 0.15, u, f);
  }
  (e.solid(c, u, l + 0.8, i, 0, f + 1.2),
    e.solid(c, a, l + 0.8, d, 0, f + 1.2),
    e.solid(c, i, l + 0.8, a, o, f + 1.2),
    e.solid(n, i, n + 14, a, 0, o));
}
function* yve(e, t) {
  let { x0: n, x1: r, z0: i, z1: a, y: o } = qA,
    s = t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1);
  (e.col(16777215).mat(0.3, 0.3, 0.3, G),
    e.wall(r, i, n, i, 0, 5.2, s, 3.2, 5.2),
    e.wall(n, i, n, a, 0, 5.2, s, 3.2, 5.2),
    e.wall(r, a, r, i, 0, 5.2, s, 3.2, 5.2),
    e.wall(n, a, -22, a, 0, 5.2, s, 3.2, 5.2),
    e.col(15131354).mat(0.7, 0.1, 0.08, 1),
    e.wall(r, i, n, i, 5.2, o, e.white, 50, 2),
    e.wall(n, i, n, a, 5.2, o, e.white, 50, 2),
    e.wall(r, a, r, i, 5.2, o, e.white, 50, 2),
    e.wall(n, a, -22, a, 5.2, o, e.white, 50, 2),
    e.col(15131096).mat(0.85, 0, 0, 0));
  let c = e.coarse ? 14 : 4;
  e.flat(n, i, r, a, o, t.c(`paving`), c, c);
  let l = e.coarse ? 16 : 36,
    u = FA(-21, -39, 15, 11, l),
    d = FA(-21, -39, 15.7, 11.7, l);
  if (
    (e.col(6262344).mat(0.95, 0, 0, 0),
    IA(e, u, o + 0.04),
    e.col(13288374).mat(0.8, 0, 0.06, 1),
    zk(e, d, o, o + 0.45, e.white, 50, 1),
    zk(e, PA(u), o + 0.04, o + 0.45, e.white, 50, 1),
    BA(e, u, d, o + 0.45),
    yield,
    !e.coarse)
  ) {
    let t = 61;
    for (let s = 0; s < 10; s++) {
      let c = -Math.PI / 2 + (s / 10) * Math.PI * 2 + 0.3,
        l = -21 + Math.cos(c) * 19,
        u = -39 + Math.sin(c) * 14.5;
      l > r - 2 ||
        l < n + 2 ||
        u < i + 2 ||
        u > a - 2 ||
        (l > YA.x0 - 1 && u < i + 5) ||
        LA(e, l, o, u, 8 + (s % 3), t++);
    }
    e.col(3815994).mat(0.5, 0.6, 0, 0);
    for (let [t, n] of [
      [-38, -54],
      [-3, -54],
      [-38, -23],
      [-3, -24],
    ])
      (e.cylY(t, n, o, o + 4.2, 0.08, 6),
        e.push().col(16773848).mat(0.3, 0, 0.8, 1),
        e.cylY(t, n, o + 4.2, o + 4.7, 0.2, 6),
        e.pop(),
        e.pole(t, n, 0.15, o, o + 4.7));
    (VA(e, n + 0.15, i, n + 0.15, a, o),
      VA(e, r - 0.15, a, r - 0.15, i, o),
      VA(e, -19.6, i + 0.15, -18.4, i + 0.15, o));
  }
  let f = e.coarse ? 8 : 26,
    p = (JA.z1 - JA.z0) / f,
    m = o / f;
  e.col(14275528).mat(0.85, 0, 0.05, 1);
  for (let t = 0; t < f; t++) {
    let n = JA.z0 + t * p;
    (e.panel(JA.x1, n, JA.x0, n, t * m, (t + 1) * m),
      e.flat(JA.x0, n, JA.x1, n + p, (t + 1) * m));
  }
  e.col(13617340).mat(0.85, 0, 0.06, 1);
  for (let [t, r, i] of [
    [n, JA.x0, -1],
    [-20, JA.x1, 1],
  ]) {
    let n = t,
      a = r;
    i < 0
      ? (e.quad(n, 0, JA.z0, n, 0, JA.z1, n, o + 0.9, JA.z1, n, 0.9, JA.z0),
        e.quad(a, 0, JA.z1, a, 0, JA.z0, a, 0.9, JA.z0, a, o + 0.9, JA.z1))
      : (e.quad(n, 0, JA.z1, n, 0, JA.z0, n, 0.9, JA.z0, n, o + 0.9, JA.z1),
        e.quad(a, 0, JA.z0, a, 0, JA.z1, a, o + 0.9, JA.z1, a, 0.9, JA.z0));
    let s = Math.min(n, a),
      c = Math.max(n, a);
    (e.quad(s, 0.9, JA.z0, s, o + 0.9, JA.z1, c, o + 0.9, JA.z1, c, 0.9, JA.z0),
      e.panel(c, JA.z0, s, JA.z0, 0, 0.9),
      e.solid(s, JA.z0, c, JA.z1, 0, o + 0.9));
  }
  (e.solid(n, i, r, a, 0, o),
    e.floor(JA.x0, JA.z0, JA.x1, JA.z1, 0, o, `stairs`),
    e.floor(n, i, r, a, o, o, `platform`),
    e.solid(n, i, n + 0.3, a, o, o + 1.1, `prop`),
    e.solid(r - 0.3, i, r, a, o, o + 1.1, `prop`),
    yield);
  let h = t.c(`granite`),
    g = 81;
  for (let [n, r, i, a, o] of hve) {
    if (
      (e.col(14275268).mat(0.85, 0, 0.06, 1),
      e.wall(i, r, n, r, 0, o, h, 2, 2),
      e.wall(n, r, n, a, 0, o, h, 2, 2),
      e.wall(n, a, i, a, 0, o, h, 2, 2),
      e.wall(i, a, i, r, 0, o, h, 2, 2),
      e.col(5933637).mat(0.95, 0, 0, 0),
      e.flat(n, r, i, a, o, t.c(`lawn`), 4, 4),
      !e.coarse)
    ) {
      for (let t = r + 2.5; t < a - 1; t += 4) RA(e, i - 1.6, o, t, 1);
      LA(e, (n + i) / 2 - 2, o, (r + a) / 2, 7.5, g++);
    }
    e.solid(n, r, i, a, 0, o);
  }
}
function* bve(e, t) {
  let { x0: n, x1: r, z0: i, z1: a, y: o, d: s } = YA;
  (e.col(15263972).mat(0.6, 0.2, 0.05, 1),
    e.panel(n, i, n, a, o - s, o),
    e.panel(r, a, r, i, o - s, o),
    e.flat(n, i, r, a, o - s, e.white, 0, 0, !1),
    e.col(14605010).mat(0.85, 0, 0, 0));
  let c = e.coarse ? 14 : 4;
  if (
    (e.flat(n, i, r, a, o, t.c(`paving`), c, c),
    e.col(4870230).mat(0.4, 0.6, 0, 0),
    e.panel(n - 0.05, i, n - 0.05, a, o - 0.5, o - 0.2),
    e.panel(r + 0.05, a, r + 0.05, i, o - 0.5, o - 0.2),
    !e.coarse)
  ) {
    e.col(16774368).mat(0.4, 0, 0.85, 1);
    for (let t = i + 3; t < a - 2; t += 6)
      e.flat(n + 2, t, r - 2, t + 0.4, o - s - 0.02, e.white, 0, 0, !1);
    (VA(e, n + 0.12, i, n + 0.12, a, o), VA(e, r - 0.12, a, r - 0.12, i, o));
    for (let t = i + 8; t < a - 6; t += 12)
      (e.col(13617340).mat(0.85, 0, 0, 0),
        e.box(-12.5, o, t, -9.5, o + 0.6, t + 5),
        RA(e, -11, o + 0.6, t + 2.5, 1.2));
  }
  (e.floor(n, i, r, a, o, o, `bridge`),
    e.solid(n, i, n + 0.25, a, o, o + 1.1, `prop`),
    e.solid(r - 0.25, i, r, a, o, o + 1.1, `prop`),
    yield);
}
function* xve(e, t) {
  let n = t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1),
    r = t.A.sub(`lcMidGlass`, 0.5, 0, 1, 1),
    i = e.coarse ? 1 : 3;
  {
    let { x0: a, x1: o, z0: s, z1: c, h: l, pod: u } = XA,
      d = Lk(a, s, o, c, 1.5, i),
      f = Lk(a + 3, s + 3, o, c, [1.5, 1.5, 1.5, 1.5], i);
    if (
      (e.col(16777215).mat(0.3, 0.35, 0.3, G),
      zk(e, d, 0, 8, n, 3.2, 8),
      e.col(15133936).mat(0.3, 0.2, 0.09, G | 32),
      zk(e, d, 8, u, t.c(`glass`), 6.4, 8.4),
      e.col(6130759).mat(0.95, 0, 0, 0),
      Vk(e, d, u),
      e.col(15133936).mat(0.3, 0.2, 0.09, G | 32),
      zk(
        e,
        f,
        u,
        l - 8,
        t.c(`glass`),
        e.coarse ? 12.8 : 6.4,
        e.coarse ? 16.8 : 8.4,
      ),
      e.col(15659250).mat(0.4, 0.5, 0.25, 1),
      zk(e, f, l - 8, l, r, 6.4, 8),
      e.col(8422794).mat(0.85, 0, 0, 0),
      Vk(e, f, l - 0.3),
      !e.coarse)
    )
      for (let t = a + 1.5; t < a + 3; t += 10)
        for (let n = s + 2; n < c - 1; n += 3.5) RA(e, t, u, n, 0.9);
    (Wk(e, a + 4, l, s + 4, 0.45),
      Wk(e, o - 1.5, l, c - 1.5, 0.45),
      e.solid(a, s, o, c, 0, l));
  }
  yield;
  {
    let { x0: a, x1: o, z0: s, z1: c, h: l } = ZA,
      u = Lk(a, s, o, c, 3, i);
    if (
      (e.col(16777215).mat(0.3, 0.35, 0.3, G),
      zk(e, u, 0, 10, n, 3.2, 10),
      e.col(15920354).mat(0.35, 0.2, 0.11, G | 32),
      zk(
        e,
        u,
        10,
        l - 9,
        t.c(`office`),
        e.coarse ? 7.2 : 3.6,
        e.coarse ? 8 : 4,
      ),
      e.col(15526630).mat(0.4, 0.5, 0.2, 1),
      zk(e, Rk(u, -0.3), l - 9, l, r, 6.4, 9),
      e.col(8422794).mat(0.85, 0, 0, 0),
      Vk(e, Rk(u, -0.3), l - 0.3),
      e.col(15262940).mat(0.6, 0.2, 0.05, 1),
      !e.coarse)
    )
      for (let t of [10, 60, 110, 160]) {
        let n = Rk(u, 0.35);
        (zk(e, n, t - 0.5, t, e.white, 50, 1), BA(e, u, n, t));
      }
    (Wk(e, a + 3, l, s + 3, 0.45),
      Wk(e, o - 3, l, c - 3, 0.45),
      e.solid(a, s, o, c, 0, l));
  }
}
function* Sve(e, t) {
  (yield* gve(e, t),
    yield* _ve(e, t),
    yield* vve(e, t),
    yield,
    yield* yve(e, t),
    yield* bve(e, t),
    yield* xve(e, t));
}
function Cve(e, t) {
  let n = (e) => QA(e, 1);
  (e.col(13950694).mat(0.3, 0.2, 0.09, G | 32),
    NA(e, n, 0, GA.screen, t.A.sub(`lcMidGlass`, 0, 0, 0.5, 1), 25.6, 50.4),
    e.col(15922422).mat(0.4, 0.5, 0.28, 1),
    NA(
      e,
      n,
      GA.screen,
      GA.top,
      t.A.sub(`lcMidGlass`, 0.5, 0, 1, 1),
      12.8,
      14.5,
    ),
    e.col(8357e3).mat(0.85, 0, 0, 0),
    Vk(e, n(GA.top), GA.top - 1),
    Wk(e, 0, GA.top, 0, 0.8),
    e.col(15133936).mat(0.3, 0.2, 0.09, G | 32),
    e.box(XA.x0, 0, XA.z0, XA.x1, XA.h, XA.z1, t.c(`glass`), 25.6, 33.6),
    e.col(15920354).mat(0.35, 0.2, 0.11, G | 32),
    e.box(ZA.x0, 0, ZA.z0, ZA.x1, ZA.h, ZA.z1, t.c(`office`), 14.4, 16),
    e.col(15131096).mat(0.8, 0, 0, 0),
    e.box(qA.x0, 0, qA.z0, qA.x1, qA.y, qA.z1));
}
