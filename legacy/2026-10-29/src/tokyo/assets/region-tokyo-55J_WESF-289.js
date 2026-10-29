// tokyo/assets/region-tokyo-55J_WESF 289 — coarse
// Lines 106168-106473 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* DTe(e, t) {
  let n = e.sub(-xU.x, 0, -xU.z, 0),
    r = t.season ?? `green`;
  (YV(
    e,
    bU.x0,
    bU.z0,
    bU.x1,
    bU.z1,
    RV.LAWN,
    e.coarse ? 60 : 22,
    r === `bare` ? 9407582 : 6130756,
    7774288,
    91,
  ),
    e.push().col(14867661).mat(0.95, 0, 0, 0),
    e.flat(
      bU.x0 + 1,
      SU.z0 - 4,
      wU.x0 - 0.5,
      SU.z1 + 4,
      RV.PATH,
      e.coarse ? e.white : t.c(`gravel`),
      e.coarse ? 0 : 8,
      e.coarse ? 0 : 8,
    ),
    e.flat(
      wU.x0,
      SU.z0 + wU.w,
      CU.x0,
      SU.z1 - wU.w,
      RV.PATH,
      e.coarse ? e.white : t.c(`gravel`),
      e.coarse ? 0 : 5,
      e.coarse ? 0 : 5,
    ),
    e
      .col(13222578)
      .flat(
        bU.x0 + 1,
        TU.z - 4,
        CU.x0,
        TU.z + 4,
        RV.PAVE,
        e.coarse ? e.white : t.c(`granite`),
        e.coarse ? 0 : 3,
        e.coarse ? 0 : 3,
      ),
    e.pop(),
    yield,
    e.push().col(EU).mat(0.75, 0, 0.1, 1),
    e.box(
      SU.x0,
      0,
      SU.z0,
      SU.x1,
      18.3,
      SU.z1,
      t.c(`granite`),
      e.coarse ? 0 : 6,
      e.coarse ? 0 : 6,
    ));
  for (let [n, r] of [
    [SU.z0, SU.z0 + wU.w],
    [SU.z1 - wU.w, SU.z1],
  ])
    e.box(
      wU.x0,
      0,
      n,
      SU.x0,
      18.3,
      r,
      t.c(`granite`),
      e.coarse ? 0 : 6,
      e.coarse ? 0 : 6,
    );
  (e.box(
    CU.x0,
    0,
    CU.z0,
    SU.x0,
    20,
    CU.z1,
    t.c(`granite`),
    e.coarse ? 0 : 6,
    e.coarse ? 0 : 6,
  ),
    e.pop(),
    AU(e, t, SU.x0, SU.z0 + wU.w, CU.z0, 17),
    AU(e, t, SU.x0, CU.z1, SU.z1 - wU.w, 17),
    AU(e, t, wU.x0, SU.z0, SU.z0 + wU.w, 17),
    AU(e, t, wU.x0, SU.z1 - wU.w, SU.z1, 17),
    AU(e, t, CU.x0, CU.z0, CU.z1, 18.7, 5),
    yield);
  let i = CU.x0 - 4.5;
  (e.push().col(EU).mat(0.75, 0, 0.16, 1),
    e.box(i - 0.5, 0, CU.z0 + 3, CU.x0, 1.2, CU.z1 - 3));
  for (let t = CU.z0 + 5; t <= CU.z1 - 5 + 0.01; t += 4)
    for (let n of [-0.7, 0.7])
      (e.cylY(i + 0.6, t + n, 1.2, 16.6, 0.42, e.coarse ? 6 : 10, 0.38),
        e.pole(i + 0.6, t + n, 0.45, 0, 17));
  (e.box(i - 0.3, 16.6, CU.z0 + 3, CU.x0, 18.6, CU.z1 - 3),
    e.pop(),
    e.coarse ||
      (e.push().col(4151886).mat(0.5, 0.6, 0, 0),
      e.box(CU.x0 + 1, 20, TU.z - 3, CU.x0 + 4, 24.5, TU.z + 3),
      e.col(kU).mat(0.35, 0.8, 0.2, 1),
      HV(
        e,
        CU.x0 + 2.5,
        TU.z,
        [
          [1.6, 24.5],
          [0.9, 26],
          [0, 27],
        ],
        6,
        kU,
        1,
      ),
      e.pop()),
    yield,
    jU(e, SU.x0, SU.z0, SU.x1, SU.z1, 18.3, !0));
  for (let [t, n] of [
    [SU.z0, SU.z0 + wU.w],
    [SU.z1 - wU.w, SU.z1],
  ])
    jU(e, wU.x0, t, SU.x0 + 2, n, 18.3, !0);
  jU(e, CU.x0, CU.z0, SU.x0 + 4, CU.z1, 20, !1);
  for (let t of [SU.z0 + wU.w / 2, SU.z1 - wU.w / 2])
    (e.push().col(OU).mat(0.55, 0.35, 0, 0),
      e.lathe(
        wU.x0 + wU.w / 2,
        t,
        [6.5, 18.3, 5.6, 22, 3.4, 25, 0.01, 26.5],
        e.coarse ? 6 : 12,
        Math.PI / 4,
      ),
      e
        .col(kU)
        .mat(0.35, 0.8, 0.2, 1)
        .cylY(wU.x0 + wU.w / 2, t, 26.5, 28, 0.25, 6, 0.05),
      e.pop());
  e.solid(SU.x0, SU.z0, SU.x1, SU.z1, 0, 23);
  for (let [t, n] of [
    [SU.z0, SU.z0 + wU.w],
    [SU.z1 - wU.w, SU.z1],
  ])
    e.solid(wU.x0, t, SU.x0, n, 0, 23);
  (e.solid(i - 0.5, CU.z0, SU.x0, CU.z1, 0, 20), yield);
  let a = bU.x0 + 1.2;
  e.push().col(DU).mat(0.75, 0, 0.12, 1);
  for (let n of [-1, 1]) {
    let r = TU.z + n * (TU.hw + 0.9);
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
      e.col(DU).mat(0.75, 0, 0.12, 1));
  }
  if ((e.col(1974306).mat(0.45, 0.6, 0, 0), e.coarse))
    e.box(a - 0.05, 3.4, TU.z - TU.hw, a + 0.05, 3.6, TU.z + TU.hw);
  else {
    for (let t = TU.z - TU.hw + 0.25; t < TU.z + TU.hw; t += 0.3) {
      let n = 3.9 + 0.5 * Math.cos(((t - TU.z) / TU.hw) * Math.PI * 0.5);
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
      e.box(a - 0.05, t, TU.z - TU.hw, a + 0.05, t + 0.12, TU.z + TU.hw);
  }
  if ((e.col(kU).mat(0.35, 0.8, 0.25, 1), !e.coarse)) {
    e.col(kU)
      .mat(0.35, 0.8, 0.08, 1)
      .box(a - 0.09, 2.15, TU.z - 0.35, a + 0.09, 2.85, TU.z + 0.35);
    for (let t = TU.z - TU.hw + 0.25; t < TU.z + TU.hw; t += 0.6) {
      let n = 3.9 + 0.5 * Math.cos(((t - TU.z) / TU.hw) * Math.PI * 0.5);
      e.box(a - 0.05, n, t - 0.05, a + 0.05, n + 0.22, t + 0.05);
    }
  }
  if (
    (e.pop(),
    e.solid(a - 0.2, TU.z - TU.hw, a + 0.2, TU.z + TU.hw, 0, 4.2, `fence`),
    QV(
      e,
      a,
      bU.z0 + 1,
      a,
      TU.z - TU.hw - 1.8,
      2.6,
      [],
      13617596,
      1974306,
      0.45,
    ),
    QV(
      e,
      a,
      TU.z + TU.hw + 1.8,
      a,
      bU.z1 - 1,
      2.6,
      [],
      13617596,
      1974306,
      0.45,
    ),
    QV(e, a, bU.z0 + 1, bU.x1 - 1, bU.z0 + 1, 2.6, [], 13617596, 1974306),
    QV(e, bU.x1 - 1, bU.z1 - 1, a, bU.z1 - 1, 2.6, [], 13617596, 1974306),
    QV(
      e,
      bU.x1 - 1,
      bU.z0 + 1,
      bU.x1 - 1,
      bU.z1 - 1,
      2.6,
      [],
      13617596,
      1974306,
    ),
    !e.coarse)
  )
    for (let t of [610, 630, 672, 692]) eH(e, -1262, t, 4.6, !0);
  (ZV(e, -1196, TU.z, 9, 14, 9101, 0, !0),
    e.push().col(15660022).mat(0.3, 0, 0.35, 1),
    HV(
      e,
      -1196,
      TU.z,
      [
        [1.2, RV.WATER],
        [0.4, 5],
        [0, 6],
      ],
      6,
      15660022,
      1,
    ),
    e.pop());
  for (let t = bU.z0 + 6; t < SU.z0 - 4; t += e.coarse ? 14 : 7)
    for (let n of [-1270, -1250, -1230, -1210, -1195])
      WV(e, t % 2 ? `ever` : `keyaki`, n + (t % 5), t, 12, n * 3 + t, r);
  for (let t = SU.z1 + 6; t < bU.z1 - 4; t += e.coarse ? 14 : 7)
    for (let n of [-1270, -1250, -1230, -1210, -1195])
      WV(e, t % 2 ? `ever` : `keyaki`, n + (t % 5), t, 12, n * 3 + t, r);
  e.leave(n);
}
function OTe(e) {
  let t = e.sub(-xU.x, 0, -xU.z, 0);
  (e.col(EU).mat(0.75, 0, 0.1, 1),
    e.box(SU.x0, 0, SU.z0, SU.x1, 18, SU.z1),
    e.box(wU.x0, 0, SU.z0, SU.x0, 18, SU.z0 + wU.w),
    e.box(wU.x0, 0, SU.z1 - wU.w, SU.x0, 18, SU.z1),
    e.col(OU).mat(0.55, 0.35, 0, 0),
    e.extrudeZ(
      [SU.x0, 18, SU.x1, 18, (SU.x0 + SU.x1) / 2, 24],
      SU.z0,
      SU.z1,
      !0,
      !0,
    ),
    e.leave(t));
}
