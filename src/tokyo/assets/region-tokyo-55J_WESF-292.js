// tokyo/assets/region-tokyo-55J_WESF 292 — math
// Lines 106988-107232 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* LTe(e, t) {
  let n = FU(e, qU),
    r = t.season ?? `green`,
    i = r === `bare` ? 9407582 : r === `autumn` ? 7572552 : 6525514,
    a = r === `bare` ? 10393448 : 8301142,
    o = eW.map((e) => e),
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
  YV(e, qU.x0, qU.z0, qU.x1, qU.z1, RV.LAWN, e.coarse ? 64 : 22, i, a, 71);
  let c = t.c(`gravel`);
  XV(e, [...tW, tW[0]], 6, RV.PATH, 13813938, c, 8);
  for (let t of nW) XV(e, t, 4, RV.PAVE, 13813938, c, 4);
  yield;
  for (let t = 0; t < eW.length; t++) {
    let n = eW[t];
    ZV(e, n.x, n.z, n.rx, n.rz, 7101 + t, n.r);
  }
  (e.coarse ||
    (e.push().col(7232844).mat(0.85, 0, 0, 0),
    e.box(-1897, RV.WATER + 0.15, 466, -1885, RV.WATER + 0.35, 468.4),
    e.pop()),
    PTe(e, t, -1925, 444),
    FTe(e, t, -1830, 447, 0),
    yield);
  {
    let t = rW;
    (e.push().mat(0.95, 0, 0, 0),
      e.col(10193780).flat(t.x0 - 1, t.z0 - 1, t.x1 + 1, t.z1 + 1, RV.PATH));
    let n =
        r === `bare`
          ? [7035460]
          : [13779034, 15770548, 15986658, 15253568, 12068412],
      i = VV(7201);
    for (let r = t.z0 + 2; r < t.z1 - 2; r += 7)
      for (let a of [t.x0 + 1, t.x1 - 4.5])
        (e.col(4087344).box(a, 0, r, a + 3.5, 0.5, r + 5.2),
          e.coarse ||
            e
              .col(n[Math.floor(i.next() * n.length)])
              .box(a + 0.2, 0.5, r + 0.2, a + 3.3, 0.75, r + 5));
    e.pop();
    for (let t = $U.z0 + 4; t < $U.z1; t += e.coarse ? 26 : 12)
      for (let n of [$U.x0 + 4, $U.x0 + 12, $U.x1 - 12, $U.x1 - 4])
        WV(e, `plane`, n, t, 15, Math.round(n * 13 + t), r);
  }
  yield;
  let l = (e, t, n) =>
    NU(e, t, tW, !0) < 3 + n ||
    nW.some((r) => NU(e, t, r) < 2 + n) ||
    s(e, t, 4 + n) ||
    MU(e, t, ZU, 6 + n) ||
    MU(e, t, QU, n) ||
    MU(e, t, $U, n) ||
    MU(e, t, { x0: JU.x + 8, z0: qU.z0, x1: JU.x + 38, z1: qU.z0 + 18 }, n);
  yield* KV(e, {
    x0: qU.x0,
    z0: qU.z0,
    x1: qU.x1,
    z1: qU.z1,
    step: e.coarse ? 15 : 10,
    inside: (e, t) =>
      !l(e, t, 3) &&
      MU(e, t, {
        x0: qU.x0 + 6,
        z0: qU.z0 + 6,
        x1: qU.x1 - 6,
        z1: qU.z1 - 6,
      }) &&
      (e < qU.x0 + 14 || e > qU.x1 - 13 || t < qU.z0 + 12 || t > qU.z1 - 11),
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
      (Math.abs(e - JU.x) < 10 && t < qU.z0 + 16) ||
      (Math.abs(t - YU.z) < 9 && e > qU.x1 - 16) ||
      (Math.abs(e - XU.x) < 9 && t > qU.z1 - 15) ||
      l(e, t, 0);
    (RU(
      e,
      { x0: qU.x0 + 3.5, z0: qU.z0 + 3.5, x1: qU.x1 - 3.5, z1: qU.z1 - 3.5 },
      11,
      7401,
      3824945,
      t,
      9,
      15,
    ),
      e.coarse ||
        RU(
          e,
          { x0: qU.x0 + 14, z0: qU.z0 + 12, x1: qU.x1 - 13, z1: qU.z1 - 11 },
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
    e < qU.x0 + 14 ||
    e > qU.x1 - 13 ||
    t < qU.z0 + 12 ||
    t > qU.z1 - 11;
  LU(
    e,
    7301,
    { x0: qU.x0 + 14, z0: 432, x1: -1770, z1: qU.z1 - 11 },
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
    WV(e, `cedar`, t, n, i, Math.round(t * 5 + n), r);
  (LU(
    e,
    7302,
    { x0: QU.x0 + 8, z0: QU.z0 + 10, x1: QU.x1 - 8, z1: QU.z1 - 10 },
    e.coarse ? 4 : 7,
    [`plane`, `keyaki`, `ever`],
    14,
    20,
    (e, t) => Math.abs(e + 1812) < 30 && Math.abs(t - 362) < 26,
    r,
    18,
  ),
    LU(
      e,
      7303,
      { x0: qU.x0 + 14, z0: qU.z0 + 12, x1: qU.x1 - 13, z1: 432 },
      e.coarse ? 10 : 22,
      [`sakura`, `sakura`, `sakura`, `keyaki`],
      7,
      10,
      (e, t) => u(e, t) || MU(e, t, QU, -6),
      r,
      7,
    ),
    yield);
  {
    let t = ZU;
    e.push().col(15264748).mat(0.4, 0.6, 0.15, 1);
    for (let n = t.x0; n <= t.x1 + 0.01; n += 5)
      for (let r of [t.z0, t.z1])
        e.box(n - 0.12, 0, r - 0.12, n + 0.12, iW(n), r + 0.12);
    for (let n of [t.z0, t.z1])
      for (let r = 0; r < 8; r++) {
        let i = t.x0 + (r * (t.x1 - t.x0)) / 8,
          a = t.x0 + ((r + 1) * (t.x1 - t.x0)) / 8;
        e.rod(i, iW(i), n, a, iW(a), n, 0.14, 4);
      }
    if (
      (e.col(13223098).mat(0.85, 0, 0, 0).flat(t.x0, t.z0, t.x1, t.z1, RV.PAVE),
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
          HV(
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
  ITe(e, t);
  for (let [t, n] of [
    [qU.x1 - 4, YU.z + 9],
    [XU.x + 8, qU.z1 - 5],
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
    for (let t = 0; t < tW.length; t += 3) {
      let [n, r] = tW[t],
        [i, a] = tW[(t + 1) % tW.length],
        o = i - n,
        s = a - r,
        c = Math.hypot(o, s) || 1,
        l = (-s / c) * 4.2,
        u = (o / c) * 4.2;
      (eH(e, n + l, r + u, 3.8, !0),
        $V(e, n + (o / c) * 4 + l, r + (s / c) * 4 + u, Math.atan2(s, o)));
    }
  (QV(e, qU.x0 + 0.6, qU.z0 + 0.6, qU.x1 - 0.6, qU.z0 + 0.6, 1.8, [
    [JU.x - 6.8 - qU.x0, JU.x + 6.8 - qU.x0],
  ]),
    QV(e, qU.x1 - 0.6, qU.z0 + 0.6, qU.x1 - 0.6, qU.z1 - 0.6, 1.8, [
      [YU.z - 5 - qU.z0, YU.z + 5 - qU.z0],
    ]),
    QV(e, qU.x0 + 0.6, qU.z1 - 0.6, qU.x1 - 0.6, qU.z1 - 0.6, 1.8, [
      [XU.x - 5 - qU.x0, XU.x + 5 - qU.x0],
    ]),
    QV(e, qU.x0 + 0.6, qU.z0 + 0.6, qU.x0 + 0.6, qU.z1 - 0.6, 1.8),
    e.leave(n));
}
