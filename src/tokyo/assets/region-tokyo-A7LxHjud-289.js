// tokyo/assets/region-tokyo-A7LxHjud 289 — coarse
// Lines 106259-106564 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* VTe(e, t) {
  let n = e.sub(-SU.x, 0, -SU.z, 0),
    r = t.season ?? `green`;
  (XV(
    e,
    xU.x0,
    xU.z0,
    xU.x1,
    xU.z1,
    zV.LAWN,
    e.coarse ? 60 : 22,
    r === `bare` ? 9407582 : 6130756,
    7774288,
    91,
  ),
    e.push().col(14867661).mat(0.95, 0, 0, 0),
    e.flat(
      xU.x0 + 1,
      CU.z0 - 4,
      TU.x0 - 0.5,
      CU.z1 + 4,
      zV.PATH,
      e.coarse ? e.white : t.c(`gravel`),
      e.coarse ? 0 : 8,
      e.coarse ? 0 : 8,
    ),
    e.flat(
      TU.x0,
      CU.z0 + TU.w,
      wU.x0,
      CU.z1 - TU.w,
      zV.PATH,
      e.coarse ? e.white : t.c(`gravel`),
      e.coarse ? 0 : 5,
      e.coarse ? 0 : 5,
    ),
    e
      .col(13222578)
      .flat(
        xU.x0 + 1,
        EU.z - 4,
        wU.x0,
        EU.z + 4,
        zV.PAVE,
        e.coarse ? e.white : t.c(`granite`),
        e.coarse ? 0 : 3,
        e.coarse ? 0 : 3,
      ),
    e.pop(),
    yield,
    e.push().col(DU).mat(0.75, 0, 0.1, 1),
    e.box(
      CU.x0,
      0,
      CU.z0,
      CU.x1,
      18.3,
      CU.z1,
      t.c(`granite`),
      e.coarse ? 0 : 6,
      e.coarse ? 0 : 6,
    ));
  for (let [n, r] of [
    [CU.z0, CU.z0 + TU.w],
    [CU.z1 - TU.w, CU.z1],
  ])
    e.box(
      TU.x0,
      0,
      n,
      CU.x0,
      18.3,
      r,
      t.c(`granite`),
      e.coarse ? 0 : 6,
      e.coarse ? 0 : 6,
    );
  (e.box(
    wU.x0,
    0,
    wU.z0,
    CU.x0,
    20,
    wU.z1,
    t.c(`granite`),
    e.coarse ? 0 : 6,
    e.coarse ? 0 : 6,
  ),
    e.pop(),
    jU(e, t, CU.x0, CU.z0 + TU.w, wU.z0, 17),
    jU(e, t, CU.x0, wU.z1, CU.z1 - TU.w, 17),
    jU(e, t, TU.x0, CU.z0, CU.z0 + TU.w, 17),
    jU(e, t, TU.x0, CU.z1 - TU.w, CU.z1, 17),
    jU(e, t, wU.x0, wU.z0, wU.z1, 18.7, 5),
    yield);
  let i = wU.x0 - 4.5;
  (e.push().col(DU).mat(0.75, 0, 0.16, 1),
    e.box(i - 0.5, 0, wU.z0 + 3, wU.x0, 1.2, wU.z1 - 3));
  for (let t = wU.z0 + 5; t <= wU.z1 - 5 + 0.01; t += 4)
    for (let n of [-0.7, 0.7])
      (e.cylY(i + 0.6, t + n, 1.2, 16.6, 0.42, e.coarse ? 6 : 10, 0.38),
        e.pole(i + 0.6, t + n, 0.45, 0, 17));
  (e.box(i - 0.3, 16.6, wU.z0 + 3, wU.x0, 18.6, wU.z1 - 3),
    e.pop(),
    e.coarse ||
      (e.push().col(4151886).mat(0.5, 0.6, 0, 0),
      e.box(wU.x0 + 1, 20, EU.z - 3, wU.x0 + 4, 24.5, EU.z + 3),
      e.col(AU).mat(0.35, 0.8, 0.2, 1),
      UV(
        e,
        wU.x0 + 2.5,
        EU.z,
        [
          [1.6, 24.5],
          [0.9, 26],
          [0, 27],
        ],
        6,
        AU,
        1,
      ),
      e.pop()),
    yield,
    MU(e, CU.x0, CU.z0, CU.x1, CU.z1, 18.3, !0));
  for (let [t, n] of [
    [CU.z0, CU.z0 + TU.w],
    [CU.z1 - TU.w, CU.z1],
  ])
    MU(e, TU.x0, t, CU.x0 + 2, n, 18.3, !0);
  MU(e, wU.x0, wU.z0, CU.x0 + 4, wU.z1, 20, !1);
  for (let t of [CU.z0 + TU.w / 2, CU.z1 - TU.w / 2])
    (e.push().col(kU).mat(0.55, 0.35, 0, 0),
      e.lathe(
        TU.x0 + TU.w / 2,
        t,
        [6.5, 18.3, 5.6, 22, 3.4, 25, 0.01, 26.5],
        e.coarse ? 6 : 12,
        Math.PI / 4,
      ),
      e
        .col(AU)
        .mat(0.35, 0.8, 0.2, 1)
        .cylY(TU.x0 + TU.w / 2, t, 26.5, 28, 0.25, 6, 0.05),
      e.pop());
  e.solid(CU.x0, CU.z0, CU.x1, CU.z1, 0, 23);
  for (let [t, n] of [
    [CU.z0, CU.z0 + TU.w],
    [CU.z1 - TU.w, CU.z1],
  ])
    e.solid(TU.x0, t, CU.x0, n, 0, 23);
  (e.solid(i - 0.5, wU.z0, CU.x0, wU.z1, 0, 20), yield);
  let a = xU.x0 + 1.2;
  e.push().col(OU).mat(0.75, 0, 0.12, 1);
  for (let n of [-1, 1]) {
    let r = EU.z + n * (EU.hw + 0.9);
    (e.box(
      a - 0.9,
      0,
      r - 0.9,
      a + 0.9,
      4.6,
      r + 0.9,
      t.c(`granite`),
      1.8,
      1.8,
    ),
      e.solid(a - 0.9, r - 0.9, a + 0.9, r + 0.9, 0, 4.6),
      e
        .col(2500650)
        .mat(0.5, 0.6, 0, 0)
        .box(a - 0.2, 4.6, r - 0.2, a + 0.2, 6.4, r + 0.2),
      e
        .col(16773324)
        .mat(0.3, 0, 1.2, 1)
        .box(a - 0.35, 6.4, r - 0.35, a + 0.35, 7.2, r + 0.35),
      e.col(OU).mat(0.75, 0, 0.12, 1));
  }
  if ((e.col(1974306).mat(0.45, 0.6, 0, 0), e.coarse))
    e.box(a - 0.05, 3.4, EU.z - EU.hw, a + 0.05, 3.6, EU.z + EU.hw);
  else {
    for (let t = EU.z - EU.hw + 0.25; t < EU.z + EU.hw; t += 0.3) {
      let n = 3.9 + 0.5 * Math.cos(((t - EU.z) / EU.hw) * Math.PI * 0.5);
      (e.quad(
        a,
        0.2,
        t - 0.03,
        a,
        0.2,
        t + 0.03,
        a,
        n,
        t + 0.03,
        a,
        n,
        t - 0.03,
      ),
        e.quad(
          a,
          0.2,
          t + 0.03,
          a,
          0.2,
          t - 0.03,
          a,
          n,
          t - 0.03,
          a,
          n,
          t + 0.03,
        ));
    }
    for (let t of [0.3, 1.5, 3.4])
      e.box(a - 0.05, t, EU.z - EU.hw, a + 0.05, t + 0.12, EU.z + EU.hw);
  }
  if ((e.col(AU).mat(0.35, 0.8, 0.25, 1), !e.coarse)) {
    e.col(AU)
      .mat(0.35, 0.8, 0.08, 1)
      .box(a - 0.09, 2.15, EU.z - 0.35, a + 0.09, 2.85, EU.z + 0.35);
    for (let t = EU.z - EU.hw + 0.25; t < EU.z + EU.hw; t += 0.6) {
      let n = 3.9 + 0.5 * Math.cos(((t - EU.z) / EU.hw) * Math.PI * 0.5);
      e.box(a - 0.05, n, t - 0.05, a + 0.05, n + 0.22, t + 0.05);
    }
  }
  if (
    (e.pop(),
    e.solid(a - 0.2, EU.z - EU.hw, a + 0.2, EU.z + EU.hw, 0, 4.2, `fence`),
    $V(
      e,
      a,
      xU.z0 + 1,
      a,
      EU.z - EU.hw - 1.8,
      2.6,
      [],
      13617596,
      1974306,
      0.45,
    ),
    $V(
      e,
      a,
      EU.z + EU.hw + 1.8,
      a,
      xU.z1 - 1,
      2.6,
      [],
      13617596,
      1974306,
      0.45,
    ),
    $V(e, a, xU.z0 + 1, xU.x1 - 1, xU.z0 + 1, 2.6, [], 13617596, 1974306),
    $V(e, xU.x1 - 1, xU.z1 - 1, a, xU.z1 - 1, 2.6, [], 13617596, 1974306),
    $V(
      e,
      xU.x1 - 1,
      xU.z0 + 1,
      xU.x1 - 1,
      xU.z1 - 1,
      2.6,
      [],
      13617596,
      1974306,
    ),
    !e.coarse)
  )
    for (let t of [610, 630, 672, 692]) tH(e, -1262, t, 4.6, !0);
  (QV(e, -1196, EU.z, 9, 14, 9101, 0, !0),
    e.push().col(15660022).mat(0.3, 0, 0.35, 1),
    UV(
      e,
      -1196,
      EU.z,
      [
        [1.2, zV.WATER],
        [0.4, 5],
        [0, 6],
      ],
      6,
      15660022,
      1,
    ),
    e.pop());
  for (let t = xU.z0 + 6; t < CU.z0 - 4; t += e.coarse ? 14 : 7)
    for (let n of [-1270, -1250, -1230, -1210, -1195])
      GV(e, t % 2 ? `ever` : `keyaki`, n + (t % 5), t, 12, n * 3 + t, r);
  for (let t = CU.z1 + 6; t < xU.z1 - 4; t += e.coarse ? 14 : 7)
    for (let n of [-1270, -1250, -1230, -1210, -1195])
      GV(e, t % 2 ? `ever` : `keyaki`, n + (t % 5), t, 12, n * 3 + t, r);
  e.leave(n);
}
function HTe(e) {
  let t = e.sub(-SU.x, 0, -SU.z, 0);
  (e.col(DU).mat(0.75, 0, 0.1, 1),
    e.box(CU.x0, 0, CU.z0, CU.x1, 18, CU.z1),
    e.box(TU.x0, 0, CU.z0, CU.x0, 18, CU.z0 + TU.w),
    e.box(TU.x0, 0, CU.z1 - TU.w, CU.x0, 18, CU.z1),
    e.col(kU).mat(0.55, 0.35, 0, 0),
    e.extrudeZ(
      [CU.x0, 18, CU.x1, 18, (CU.x0 + CU.x1) / 2, 24],
      CU.z0,
      CU.z1,
      !0,
      !0,
    ),
    e.leave(t));
}
