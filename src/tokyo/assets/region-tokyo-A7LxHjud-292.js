// tokyo/assets/region-tokyo-A7LxHjud 292 — math
// Lines 107079-107323 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* ZTe(e, t) {
  let n = IU(e, JU),
    r = t.season ?? `green`,
    i = r === `bare` ? 9407582 : r === `autumn` ? 7572552 : 6525514,
    a = r === `bare` ? 10393448 : 8301142,
    o = tW.map((e) => e),
    s = (e, t, n) =>
      o.some((r) => {
        let i = Math.cos(-r.r),
          a = Math.sin(-r.r),
          o = e - r.x,
          s = t - r.z,
          c = o * i - s * a,
          l = o * a + s * i;
        return (c / (r.rx + n)) ** 2 + (l / (r.rz + n)) ** 2 < 1;
      });
  XV(e, JU.x0, JU.z0, JU.x1, JU.z1, zV.LAWN, e.coarse ? 64 : 22, i, a, 71);
  let c = t.c(`gravel`);
  ZV(e, [...nW, nW[0]], 6, zV.PATH, 13813938, c, 8);
  for (let t of rW) ZV(e, t, 4, zV.PAVE, 13813938, c, 4);
  yield;
  for (let t = 0; t < tW.length; t++) {
    let n = tW[t];
    QV(e, n.x, n.z, n.rx, n.rz, 7101 + t, n.r);
  }
  (e.coarse ||
    (e.push().col(7232844).mat(0.85, 0, 0, 0),
    e.box(-1897, zV.WATER + 0.15, 466, -1885, zV.WATER + 0.35, 468.4),
    e.pop()),
    JTe(e, t, -1925, 444),
    YTe(e, t, -1830, 447, 0),
    yield);
  {
    let t = iW;
    (e.push().mat(0.95, 0, 0, 0),
      e.col(10193780).flat(t.x0 - 1, t.z0 - 1, t.x1 + 1, t.z1 + 1, zV.PATH));
    let n =
        r === `bare`
          ? [7035460]
          : [13779034, 15770548, 15986658, 15253568, 12068412],
      i = HV(7201);
    for (let r = t.z0 + 2; r < t.z1 - 2; r += 7)
      for (let a of [t.x0 + 1, t.x1 - 4.5])
        (e.col(4087344).box(a, 0, r, a + 3.5, 0.5, r + 5.2),
          e.coarse ||
            e
              .col(n[Math.floor(i.next() * n.length)])
              .box(a + 0.2, 0.5, r + 0.2, a + 3.3, 0.75, r + 5));
    e.pop();
    for (let t = eW.z0 + 4; t < eW.z1; t += e.coarse ? 26 : 12)
      for (let n of [eW.x0 + 4, eW.x0 + 12, eW.x1 - 12, eW.x1 - 4])
        GV(e, `plane`, n, t, 15, Math.round(n * 13 + t), r);
  }
  yield;
  let l = (e, t, n) =>
    PU(e, t, nW, !0) < 3 + n ||
    rW.some((r) => PU(e, t, r) < 2 + n) ||
    s(e, t, 4 + n) ||
    NU(e, t, QU, 6 + n) ||
    NU(e, t, $U, n) ||
    NU(e, t, eW, n) ||
    NU(e, t, { x0: YU.x + 8, z0: JU.z0, x1: YU.x + 38, z1: JU.z0 + 18 }, n);
  yield* qV(e, {
    x0: JU.x0,
    z0: JU.z0,
    x1: JU.x1,
    z1: JU.z1,
    step: e.coarse ? 15 : 10,
    inside: (e, t) =>
      !l(e, t, 3) &&
      NU(e, t, {
        x0: JU.x0 + 6,
        z0: JU.z0 + 6,
        x1: JU.x1 - 6,
        z1: JU.z1 - 6,
      }) &&
      (e < JU.x0 + 14 || e > JU.x1 - 13 || t < JU.z0 + 12 || t > JU.z1 - 11),
    height: (e, t) => 14 + 3 * Math.sin(e * 0.04 + 1) + 2 * Math.cos(t * 0.06),
    dark: 4087603,
    light: 6063932,
    salt: 73,
    lump: 4,
    baseY: 3.2,
    inset: 3.5,
    trunks: () => !0,
  });
  {
    let t = (e, t) =>
      (Math.abs(e - YU.x) < 10 && t < JU.z0 + 16) ||
      (Math.abs(t - XU.z) < 9 && e > JU.x1 - 16) ||
      (Math.abs(e - ZU.x) < 9 && t > JU.z1 - 15) ||
      l(e, t, 0);
    (zU(
      e,
      { x0: JU.x0 + 3.5, z0: JU.z0 + 3.5, x1: JU.x1 - 3.5, z1: JU.z1 - 3.5 },
      11,
      7401,
      3824945,
      t,
      9,
      15,
    ),
      e.coarse ||
        zU(
          e,
          { x0: JU.x0 + 14, z0: JU.z0 + 12, x1: JU.x1 - 13, z1: JU.z1 - 11 },
          14,
          7411,
          4483130,
          t,
          9,
          14,
        ));
  }
  yield;
  let u = (e, t) =>
    l(e, t, 1.5) ||
    e < JU.x0 + 14 ||
    e > JU.x1 - 13 ||
    t < JU.z0 + 12 ||
    t > JU.z1 - 11;
  RU(
    e,
    7301,
    { x0: JU.x0 + 14, z0: 432, x1: -1770, z1: JU.z1 - 11 },
    e.coarse ? 8 : 20,
    [`pine`, `maple`, `pine`, `ever`, `sakura`],
    6,
    11,
    u,
    r,
    5,
  );
  for (let [t, n, i] of [
    [-1868, 312, 26],
    [-1852, 322, 24],
    [-1760, 310, 25],
    [-1755, 410, 27],
    [-1870, 414, 23],
    [-1812, 300, 22],
  ])
    GV(e, `cedar`, t, n, i, Math.round(t * 5 + n), r);
  (RU(
    e,
    7302,
    { x0: $U.x0 + 8, z0: $U.z0 + 10, x1: $U.x1 - 8, z1: $U.z1 - 10 },
    e.coarse ? 4 : 7,
    [`plane`, `keyaki`, `ever`],
    14,
    20,
    (e, t) => Math.abs(e + 1812) < 30 && Math.abs(t - 362) < 26,
    r,
    18,
  ),
    RU(
      e,
      7303,
      { x0: JU.x0 + 14, z0: JU.z0 + 12, x1: JU.x1 - 13, z1: 432 },
      e.coarse ? 10 : 22,
      [`sakura`, `sakura`, `sakura`, `keyaki`],
      7,
      10,
      (e, t) => u(e, t) || NU(e, t, $U, -6),
      r,
      7,
    ),
    yield);
  {
    let t = QU;
    e.push().col(15264748).mat(0.4, 0.6, 0.15, 1);
    for (let n = t.x0; n <= t.x1 + 0.01; n += 5)
      for (let r of [t.z0, t.z1])
        e.box(n - 0.12, 0, r - 0.12, n + 0.12, aW(n), r + 0.12);
    for (let n of [t.z0, t.z1])
      for (let r = 0; r < 8; r++) {
        let i = t.x0 + (r * (t.x1 - t.x0)) / 8,
          a = t.x0 + ((r + 1) * (t.x1 - t.x0)) / 8;
        e.rod(i, aW(i), n, a, aW(a), n, 0.14, 4);
      }
    if (
      (e.col(13223098).mat(0.85, 0, 0, 0).flat(t.x0, t.z0, t.x1, t.z1, zV.PAVE),
      e.pop(),
      !e.coarse)
    )
      for (let [t, n, r] of [
        [-1915, 320, 9],
        [-1905, 328, 7],
        [-1895, 318, 10],
        [-1891, 330, 6],
      ])
        (e.push().col(7035460).mat(0.9, 0, 0, 0).rod(t, 0, n, t, r, n, 0.2, 4),
          UV(
            e,
            t,
            n,
            [
              [0, r - 1.2],
              [3.2, r - 0.2],
              [0.4, r + 0.5],
              [0, r + 0.6],
            ],
            6,
            5212730,
            1,
          ),
          e.pop());
    e.solid(t.x0, t.z0, t.x1, t.z1, 0, 10);
  }
  XTe(e, t);
  for (let [t, n] of [
    [JU.x1 - 4, XU.z + 9],
    [ZU.x + 8, JU.z1 - 5],
  ])
    (e
      .push()
      .col(13946562)
      .mat(0.85, 0, 0.1, 1)
      .box(t - 2.5, 0, n - 2, t + 2.5, 3, n + 2),
      e.col(5922918).box(t - 3, 3, n - 2.5, t + 3, 3.4, n + 2.5),
      e.pop(),
      e.solid(t - 2.5, n - 2, t + 2.5, n + 2, 0, 3.4));
  if (!e.coarse)
    for (let t = 0; t < nW.length; t += 3) {
      let [n, r] = nW[t],
        [i, a] = nW[(t + 1) % nW.length],
        o = i - n,
        s = a - r,
        c = Math.hypot(o, s) || 1,
        l = (-s / c) * 4.2,
        u = (o / c) * 4.2;
      (tH(e, n + l, r + u, 3.8, !0),
        eH(e, n + (o / c) * 4 + l, r + (s / c) * 4 + u, Math.atan2(s, o)));
    }
  ($V(e, JU.x0 + 0.6, JU.z0 + 0.6, JU.x1 - 0.6, JU.z0 + 0.6, 1.8, [
    [YU.x - 6.8 - JU.x0, YU.x + 6.8 - JU.x0],
  ]),
    $V(e, JU.x1 - 0.6, JU.z0 + 0.6, JU.x1 - 0.6, JU.z1 - 0.6, 1.8, [
      [XU.z - 5 - JU.z0, XU.z + 5 - JU.z0],
    ]),
    $V(e, JU.x0 + 0.6, JU.z1 - 0.6, JU.x1 - 0.6, JU.z1 - 0.6, 1.8, [
      [ZU.x - 5 - JU.x0, ZU.x + 5 - JU.x0],
    ]),
    $V(e, JU.x0 + 0.6, JU.z0 + 0.6, JU.x0 + 0.6, JU.z1 - 0.6, 1.8),
    e.leave(n));
}
