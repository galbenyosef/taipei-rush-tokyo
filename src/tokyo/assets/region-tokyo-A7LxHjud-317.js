// tokyo/assets/region-tokyo-A7LxHjud 317 — col
// Lines 114430-114731 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* mOe(e, t) {
  let n = Bs,
    r = 0.17,
    i = bs.B1;
  e.push().col(11115658).mat(0.85, 0, 0, 0);
  let a = t.c(`paving`);
  (e.flat(n.x0, n.z0, n.x1, xq.z0, r, a, 4, 4),
    e.flat(n.x0, xq.z1, n.x1, n.z1, r, a, 4, 4),
    e.flat(n.x0, xq.z0, xq.x0, xq.z1, r, a, 4, 4),
    e.flat(xq.x1, xq.z0, n.x1, xq.z1, r, a, 4, 4),
    e.pop(),
    e.push().col(10120021).mat(0.9, 0, 0, 0),
    e.wall(
      xq.x1,
      xq.z1,
      xq.x0,
      xq.z1,
      i - 0.3,
      r,
      t.c(`brick`),
      4 * sq(e),
      4 * sq(e),
    ),
    e.wall(
      xq.x0,
      xq.z0,
      xq.x1,
      xq.z0,
      i - 0.3,
      r,
      t.c(`brick`),
      4 * sq(e),
      4 * sq(e),
    ),
    e.wall(
      xq.x0,
      xq.z1,
      xq.x0,
      xq.z0,
      i - 0.3,
      r,
      t.c(`brick`),
      4 * sq(e),
      4 * sq(e),
    ),
    e.wall(
      xq.x1,
      xq.z0,
      xq.x1,
      xq.z1,
      i - 0.3,
      r,
      t.c(`brick`),
      4 * sq(e),
      4 * sq(e),
    ),
    e.pop(),
    yield);
  let o = Sq.x0 + Sq.w,
    s = Sq.s - Sq.w,
    c = (e, n) => t.plan.groundHeight(e, n);
  e.push().col(12037794).mat(0.9, 0, 0, 0);
  {
    let t = [];
    for (let e = Sq.n; e < s; e += 3) t.push(e);
    t.push(s);
    let n = t.map((e) => [o, e]),
      r = t.map((e) => c(o - 0.3, e) + 1);
    tq(e, [...n].reverse(), t.map(() => i - 0.2).reverse(), [...r].reverse());
    let a = [];
    for (let e = o; e < Sq.x1; e += 3) a.push(e);
    a.push(Sq.x1);
    let l = a.map((e) => [e, s]),
      u = a.map((e) => c(e, s + 0.3) + 1);
    tq(e, [...l].reverse(), a.map(() => i - 0.2).reverse(), [...u].reverse());
    for (let n = 0; n + 1 < t.length; n++)
      e.solid(o - 0.25, t[n], o + 0.25, t[n + 1], i, r[n]);
    for (let t = 0; t + 1 < a.length; t++)
      e.solid(a[t], s - 0.25, a[t + 1], s + 0.25, i, u[t]);
  }
  (e.pop(), yield, e.push().col(14078148).mat(0.8, 0, 0, 0));
  let l = [
    [xq.x0 + 8, xq.z0, xq.x1, xq.z0],
    [xq.x1, xq.z0, xq.x1, xq.z1],
    [xq.x0, xq.z1, xq.x1, xq.z1],
  ];
  for (let [t, n, a, o] of l)
    (e.box(
      Math.min(t, a) - 0.15,
      r,
      Math.min(n, o) - 0.15,
      Math.max(t, a) + 0.15,
      1.27,
      Math.max(n, o) + 0.15,
    ),
      e.solid(
        Math.min(t, a) - 0.15,
        Math.min(n, o) - 0.15,
        Math.max(t, a) + 0.15,
        Math.max(n, o) + 0.15,
        i,
        1.27,
        `rail`,
      ));
  (e.box(xq.x0 - 0.15, r, xq.z0 + 0.15, xq.x0 + 0.15, 1.27, xq.z1),
    e.solid(xq.x0 - 0.15, xq.z0 + 0.15, xq.x0 + 0.15, xq.z1, i, 1.27, `rail`),
    e.pop());
  let u = -2247.5,
    d = -2241.5,
    f = xq.z0;
  (e.push().col(11115658).mat(0.85, 0, 0, 0),
    e.flat(u, f, d, 226, r, t.c(`paving`), 4, 4),
    e.col(8024168).mat(0.9, 0, 0, 0),
    e.flat(u, f, d, 226, -0.73, e.white, 0, 0, !1),
    e.panel(u, f, u, 226, -0.73, r),
    e.panel(d, 226, d, f, -0.73, r),
    e.panel(u, 226, d, 226, -0.73, r),
    e.col(12037794).mat(0.9, 0, 0, 0));
  for (let t of [f + 9, f + 21])
    e.box(-2245.9, i, t - 0.7, -2243.1, -0.73, t + 0.7);
  (e.col(14078148).mat(0.8, 0, 0, 0),
    e.box(-2247.65, r, f, -2247.35, 1.27, 226),
    e.box(-2241.65, r, f, -2241.35, 1.27, 226),
    e.box(u, r, 225.85, d, 1.27, 226.15),
    e.pop(),
    e.floor(u, f, d, 226, r),
    e.solid(-2247.65, f, -2247.35, 226, r, 1.27, `rail`),
    e.solid(-2241.65, f, -2241.35, 226, r, 1.27, `rail`),
    e.solid(u, 225.85, d, 226.15, r, 1.27, `rail`));
  for (let t of [f + 9, f + 21])
    e.solid(-2245.9, t - 0.7, -2243.1, t + 0.7, i, r);
  if (!e.coarse) {
    e.push().col(11115658).mat(0.85, 0, 0, 0);
    for (let [t, n, i, a] of [
      [xq.x1 - 6, xq.z0, -1, 1],
      [xq.x1 - 6, xq.z1, -1, -1],
    ])
      for (let o = 0; o < 5; o++) {
        let s = (HK / 2) * (o / 5),
          c = (HK / 2) * ((o + 1) / 5),
          l = (e) => [
            t + i * (5 - 5 * Math.cos(e)),
            n + a * (5 - 5 * Math.sin(e)),
          ],
          [u, d] = l(s),
          [f, p] = l(c);
        i * a < 0
          ? e.triFace(t, r, n, f, r, p, u, r, d)
          : e.triFace(t, r, n, u, r, d, f, r, p);
      }
    e.pop();
  }
  e.push().col(6261324).mat(0.95, 0, 0, 0);
  let p = o + 5,
    m = xq.x1 - 9,
    h = xq.z0 + 6,
    g = s - 5;
  if (
    (e.box(p, i, h, m, i + 0.5, g),
    e.pop(),
    e.solid(p, h, m, g, i, i + 0.5, `kerb`),
    !e.coarse)
  ) {
    let t = XB(911);
    for (let n = p + 1.8; n < m - 1; n += 3.4)
      for (let r = h + 1.8; r < g - 1; r += 3.4)
        BA(
          e,
          n + t.range(-0.5, 0.5),
          i + 0.5,
          r + t.range(-0.5, 0.5),
          t.range(1, 1.5),
          t.pick([4024885, 4617019, 3497775]),
        );
  }
  yield;
  let _ = xq.x1 - 6;
  (e.push().col(5593178).mat(0.9, 0.2, 0.04, 1),
    e.flat(_, xq.z0, xq.x1, xq.z1, i + 4.4, e.white, 0, 0, !1),
    e.col(11840930).mat(0.9, 0, 0, 0),
    e.panel(_, xq.z0, _, xq.z1, i + 4.4, r),
    e.flat(_, xq.z0, xq.x1, xq.z1, r),
    e.col(10133668).mat(0.7, 0.2, 0, 0));
  for (let t = xq.z0 + 4; t < xq.z1; t += 8)
    (e.cylY(_ + 0.6, t, i, i + 4.4, 0.4, 8),
      e.pole(_ + 0.6, t, 0.42, i, i + 4.4));
  (e.col(16777215).mat(0.3, 0.3, 0.4, G),
    e.panel(
      xq.x1 - 0.05,
      xq.z0 + 4,
      xq.x1 - 0.05,
      xq.z1 - 4,
      i,
      i + 4.2,
      t.c(`glass`),
    ),
    e.pop(),
    e.floor(_, xq.z0, xq.x1, xq.z1, r),
    e.coarse ||
      (GB(
        e,
        xq.x1 - 0.1,
        i + 3.3,
        214,
        VB,
        7,
        0.9,
        0.08,
        1845790,
        `JR 新宿駅 西口`,
        16777215,
        { raw: !0, px: 20, lit: 0.6, flat: !0 },
      ),
      GB(
        e,
        xq.x1 - 0.1,
        i + 3.3,
        226,
        VB,
        5,
        0.9,
        0.08,
        1925044,
        `小田急線`,
        16777215,
        { px: 20, lit: 0.6, flat: !0 },
      ),
      GB(
        e,
        xq.x1 - 0.1,
        i + 3.3,
        202,
        VB,
        5,
        0.9,
        0.08,
        12589162,
        `京王線`,
        16777215,
        { px: 20, lit: 0.6, flat: !0 },
      )),
    yield);
  for (let [t, n, r, i] of [
    [-2252, 175, 4.6, 13],
    [-2236, 176.5, 3.6, 10],
  ])
    (e.push().col(9133640).mat(0.9, 0, 0, 0),
      e.lathe(
        t,
        n,
        [r, 0, r * 0.92, i * 0.55, r * 0.7, i, 0, i],
        e.coarse ? 8 : 12,
        0,
        e.white,
        !1,
        !0,
      ),
      e.col(4943162).mat(0.95, 0, 0, 0),
      e.coarse ||
        e.lathe(
          t,
          n,
          [r + 0.12, 0.2, r * 0.95, i * 0.5, r * 0.9 + 0.08, i * 0.62],
          12,
          0.3,
          e.white,
          !1,
          !0,
        ),
      e.col(2763306).mat(0.8, 0.3, 0, 0),
      e.coarse || e.lathe(t, n, [r * 0.72, i - 0.6, r * 0.71, i + 0.1], 12),
      e.pop(),
      e.pole(t, n, r, 0, i));
  if (!e.coarse) {
    e.push().col(14672869).mat(0.4, 0.4, 0.15, 1);
    for (let t of [199, 213, 227]) {
      e.box(-2225.4, 2.6, t, -2221.6, 2.8, t + 10, e.white, 0, 0, null, !0);
      for (let n of [t + 0.4, t + 9.6])
        e.box(-2225.2, r, n - 0.06, -2225.08, 2.6, n + 0.06);
    }
    e.pop();
  }
}
var hOe = {
    id: `sj-west-plaza`,
    site: UK,
    name: {
      ja: `新宿駅西口広場`,
      zh: `新宿站西口廣場`,
      en: `Shinjuku Station West Exit Plaza`,
    },
    near: 200,
    build: mOe,
    far: (e) => {
      (e.col(9133640).mat(0.9, 0, 0, 0),
        e.box(-2256.6, 0, 170.4, -2247.4, 13, 179.6));
    },
    bounds: () => [Bs.x0, 168, Bs.x1, Bs.z1],
    farBoxes: () => [],
  },
  Cq = { x0: -2106.25, z0: 241.75, x1: -2054.25, z1: 262 },
  wq = { x0: -2088.2, z0: 262.6, x1: -2054.8, z1: 327.7, h: 46 };
