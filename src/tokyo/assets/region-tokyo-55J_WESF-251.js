// tokyo/assets/region-tokyo-55J_WESF 251 — banktop
// Lines 94390-94721 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* vSe(e, t) {
  let n = jL,
    r = t.c(`ishigaki`);
  (e.col(uL).mat(0.9, 0, 0, 0),
    pL(e, `z`, n.gap0, n.bridgeX0, n.bridgeX1, -1, -2.4, n.deck, r, 4, 0.4),
    pL(e, `z`, n.gap1, n.bridgeX0, n.bridgeX1, 1, -2.4, n.deck, r, 4, 0.4),
    e
      .col(13354424)
      .mat(0.85, 0, 0, 0)
      .flat(
        n.bridgeX0,
        n.gap0 + 0.4,
        n.bridgeX1,
        n.gap1 - 0.4,
        n.deck,
        t.c(`granite`),
        2,
        2,
      ),
    e.col(12433064));
  for (let [t, r] of [
    [n.gap0, n.gap0 + 0.6],
    [n.gap1 - 0.6, n.gap1],
  ])
    (e.box(n.bridgeX0 + 0.5, n.deck, t, n.bridgeX1, n.deck + 0.75, r),
      e.solid(n.bridgeX0 + 0.5, t, n.bridgeX1, r, -2, n.deck + 0.9, `wall`));
  if (
    (e.floor(n.bridgeX0, n.gap0 + 0.6, n.bridgeX1, n.gap1 - 0.6, n.deck),
    !e.coarse)
  )
    for (let t of [n.gap0 + 0.3, n.gap1 - 0.3])
      e.col(12433064).box(
        n.bridgeX1 - 0.6,
        n.deck,
        t - 0.3,
        n.bridgeX1,
        n.deck + 1.2,
        t + 0.3,
      );
  (yield, e.col(uL).mat(0.92, 0, 0, 0));
  for (let [t, i] of [
    [OL.minZ, n.gap0],
    [n.gap1, OL.maxZ],
  ])
    pL(e, `x`, n.bankOut, t, i, 1, -2.4, n.bankTop, r, 4, n.bankBat);
  let i = n.bankOut - n.bankBat;
  for (let [t, a] of [
    [n.gap0, 1],
    [n.gap1, -1],
  ]) {
    let o = a > 0 ? n.bankIn : n.bankOut,
      s = a > 0 ? n.bankOut : n.bankIn,
      c = a > 0 ? n.bankIn : i,
      l = a > 0 ? i : n.bankIn;
    e.grid(o, -0.15, t, s, -0.15, t, l, n.bankTop, t, c, n.bankTop, t, r, 2, 2);
  }
  for (let [t, i] of [
    [OL.minZ, n.nZ0],
    [n.inZ0, n.gap0],
    [n.gap1, n.inZ1],
    [n.sZ1, OL.maxZ],
  ])
    pL(e, `x`, n.bankIn, t, i, -1, -0.15, n.bankTop, r);
  (pL(e, `z`, n.nZ0, n.wX0, n.pas0, -1, -0.15, n.bankTop, r),
    pL(e, `z`, n.nZ0, n.pas1, n.bankIn, -1, -0.15, n.bankTop, r),
    pL(e, `z`, n.inZ0, n.inX0, n.pas0, 1, -0.15, n.bankTop, r),
    pL(e, `z`, n.inZ0, n.pas1, n.inX1, 1, -0.15, n.bankTop, r),
    pL(e, `x`, n.pas0, n.nZ0, n.inZ0, 1, -0.15, n.bankTop, r),
    pL(e, `x`, n.pas1, n.nZ0, n.inZ0, -1, -0.15, n.bankTop, r),
    pL(e, `x`, n.wX0, n.nZ0, n.sZ1, -1, -0.15, n.bankTop, r),
    pL(e, `x`, n.inX0, n.inZ0, n.inZ1, 1, -0.15, n.bankTop, r),
    pL(e, `z`, n.inZ1, n.inX0, n.inX1, -1, -0.15, n.bankTop, r),
    pL(e, `z`, n.sZ1, n.wX0, n.bankIn, 1, -0.15, n.bankTop, r),
    TL(e, n.bankIn, OL.minZ, i, n.gap0, n.bankTop),
    TL(e, n.bankIn, n.gap1, i, OL.maxZ, n.bankTop),
    TL(e, n.wX0, n.inZ0, n.inX0, n.sZ1, n.bankTop),
    TL(e, n.inX0, n.inZ1, n.bankIn, n.sZ1, n.bankTop));
  let a = n.bankTop + 2.3;
  (e.solid(n.bankIn, OL.minZ, n.bankOut, n.gap0, -2, a, `wall`),
    e.solid(n.bankIn, n.gap1, n.bankOut, OL.maxZ, -2, a, `wall`),
    e.solid(n.wX0, n.nZ0, n.pas0, n.inZ0, -2, n.bankTop, `wall`),
    e.solid(n.pas1, n.nZ0, n.bankIn, n.inZ0, -2, n.bankTop, `wall`),
    e.solid(n.wX0, n.inZ0, n.inX0, n.sZ1, -2, a, `wall`),
    e.solid(n.inX0, n.inZ1, n.bankIn, n.sZ1, -2, a, `wall`),
    yield,
    hL(e, t, i - 0.7, OL.minZ, i - 0.7, n.gap0, n.bankTop, -1),
    hL(e, t, i - 0.7, n.gap1, i - 0.7, OL.maxZ, n.bankTop, -1),
    hL(
      e,
      t,
      n.inX0 - 0.6,
      n.inZ1 - 0.6 + 1.2,
      n.inX0 - 0.6,
      n.inZ0 + 0.6,
      n.bankTop,
      1,
    ),
    hL(
      e,
      t,
      n.inX0 - 0.6,
      n.inZ1 + 0.6,
      n.bankIn + 0.6,
      n.inZ1 + 0.6,
      n.bankTop,
      -1,
    ),
    SL(
      e,
      t,
      -506.4,
      (n.gap0 + n.gap1) / 2,
      Math.PI / 2,
      oL,
      3.6,
      5.6,
      3,
      (n.gap1 - n.gap0) / 2,
    ),
    yield,
    CL(
      e,
      t,
      (n.wX0 + n.bankIn) / 2 + 1.5,
      (n.nZ0 + n.inZ0) / 2,
      0,
      n.bankTop,
      14.2,
      4.6,
      5.2,
    ),
    wL(e, t, n.pas0, n.pas1, n.nZ0 - 0.6, n.inZ0 + 0.6, oL, n.bankTop, !0));
}
function* ySe(e, t) {
  (e.col(uL).mat(0.92, 0, 0, 0),
    mL(e, t, VL, HL, oL, 0.16),
    yield,
    e.col(12893874).mat(0.85, 0, 0, 0));
  let n = sL;
  (EL(e, OL.maxX - 9, OL.minZ - 0.5, OL.minX - 0.5, OL.minZ - 0.5, n),
    EL(e, OL.minX - 0.5, OL.minZ - 0.5, OL.minX - 0.5, kL.minZ - 0.5, n),
    EL(e, OL.minX - 0.5, kL.maxZ + 0.5, OL.minX - 0.5, BL.cz - 6.5, n),
    EL(e, BL.cx + 6, OL.maxZ + 0.5, OL.maxX - 9, OL.maxZ + 0.5, n));
  for (let t of [kL.minZ + 0.5, kL.maxZ - 0.5])
    for (let n = kL.x1; n < kL.x0 - 4; n += 8) {
      let r = Math.min(kL.x0 - 4, n + 8);
      EL(e, n, t, r, t, AL(n), AL(r));
    }
  (_L(e, t, !0, kL.x0, kL.x1, kL.minZ + 0.9, kL.maxZ - 0.9, oL, sL),
    e.col(12104099).mat(0.85, 0, 0, 0));
  for (let t of [kL.minZ, kL.maxZ - 0.9])
    e.quad(
      kL.x1,
      13.4,
      t + 0.9,
      kL.x0,
      0.4,
      t + 0.9,
      kL.x0,
      0.4,
      t,
      kL.x1,
      13.4,
      t,
    );
  yield;
  let r = t.c(`granite`);
  e.col(14078148).mat(0.8, 0, 0, 0);
  for (let [t, n, i, a] of gSe)
    (e.box(t, -0.05000000000000002, n, i, 5.65, a, r, 2.2, 1.1),
      e.solid(t, n, i, a, 0, 5.65, `wall`));
  e.col(12168862).mat(0.85, 0, 0, 0);
  for (let [t, n, i, a] of _Se)
    (e.box(t, 12.950000000000001, n, i, 15.75, a, r, 1.6, 0.9),
      e.solid(t, n, i, a, 12.15, 15.75, `wall`));
  e.col(uL).mat(0.92, 0, 0, 0);
  for (let [n, r, i, a] of [
    [-546, -123, -540, -114.6],
    [-546, -105.4, -540, -99],
  ])
    (e.box(n, -0.05000000000000002, r, i, 3.55, a, t.c(`ishigaki`), 3, 3),
      e.solid(n, r, i, a, 0, 3.55, `wall`));
  (yield,
    UL(e, t, PL.x0, PL.z0, PL.x1, PL.z1, !0),
    UL(e, t, FL.x0, FL.z0, FL.x1, FL.z1, !1),
    yield,
    bSe(e, t),
    yield);
  let i = jL;
  (gL(e, t, i.bankIn, i.gap0, i.bridgeX0, i.gap1, oL),
    gL(e, t, i.inX0, i.inZ0, i.inX1, i.inZ1, oL),
    gL(e, t, i.pas0, NL, i.pas1, i.inZ0, oL),
    gL(e, t, kL.x0, ML, i.pas1, NL, oL),
    gL(e, t, PL.x1, PL.z0, PL.x1 + 6, ML, oL, `earth`),
    gL(e, t, PL.x1 + 6, -128, -548, -124, oL, `earth`),
    gL(e, t, -552, -124, -548, ML, oL, `earth`),
    gL(e, t, IL.x1, NL, IL.x1 + 5, IL.z0 + 6, oL, `stone`),
    yield,
    xSe(e, t));
}
function UL(e, t, n, r, i, a, o) {
  if (
    (e.col(3813418).mat(0.85, 0, 0, 0),
    e.box(n, oL, r, i, 2.568, a),
    e.col(cL).mat(0.85, 0, 0.05, G),
    e.box(
      n + 0.02,
      2.568,
      r + 0.02,
      i - 0.02,
      4.05,
      a - 0.02,
      t.c(`plaster`),
      2,
      2,
    ),
    !e.coarse)
  ) {
    if ((e.col(5983552).mat(0.8, 0, 0, 0), o))
      for (let t = r + 1.5; t < a - 1.5; t += 3)
        e.box(i, 1.15, t, i + 0.06, 2.05, t + 2);
    else
      for (let t = n + 1.5; t < i - 1.5; t += 3)
        e.box(t, 1.15, a, t + 2, 2.05, a + 0.06);
  }
  e.mat(0.88, 0, 0, 0);
  let s = (n + i) / 2,
    c = (r + a) / 2,
    l = (o ? a - r : i - n) / 2 + 1.1,
    u = (o ? i - n : a - r) / 2 + 1.2;
  (aC(
    e,
    s,
    c,
    4.1,
    l,
    u,
    {
      rise: u * 0.62,
      cell: t.c(`kawara`),
      tile: 2,
      color: lL,
      band: 14210248,
      soffit: 3813416,
      ridgeH: 0.45,
      ridgeColor: 5001302,
      eave: 1,
      wallY: 4.1,
      wallInset: 1.1,
      wallColor: cL,
    },
    o ? Math.PI / 2 : 0,
  ),
    e.solid(n, r, i, a, 0, 6.05));
}
function bSe(e, t) {
  let n = IL;
  (e.col(14275526).mat(0.8, 0, 0.06, G),
    e.box(n.x0, oL, n.z0, n.x1, 7.65, n.z1, t.c(`granite`), 3, 1.5),
    e.col(5596266).mat(0.15, 0.3, 0.3, 1),
    e.panel(n.x1 + 0.03, n.z1 - 3, n.x1 + 0.03, n.z0 + 3, oL, 3.55),
    e.col(15131352).mat(0.7, 0, 0, 0),
    e.box(n.x1 - 1, 3.75, n.z0 + 1, n.x1 + 4.5, 4.15, n.z1 - 1),
    e
      .col(10130828)
      .box(n.x0 - 0.4, 7.65, n.z0 - 0.4, n.x1 + 0.4, 8.15, n.z1 + 0.4),
    e.solid(n.x0, n.z0, n.x1, n.z1, 0, 8.15));
}
function WL(e, t, n, r, i, a) {
  let o = e.coarse ? 12 : 22,
    s = new ie(ge(a)),
    c = [];
  for (let e = 0; e < o; e++) {
    let a = (e / o) * Math.PI * 2,
      l = 0.82 + 0.3 * s.next();
    c.push([t + Math.cos(a) * r * l, n + Math.sin(a) * i * l]);
  }
  let l = 0.2;
  e.col(3098436).mat(0.12, 0.1, 0, 0);
  let u = e.v(t, l, n, 0, 1, 0, e.white.u0, e.white.v0);
  for (let [t, n] of c) e.v(t, l, n, 0, 1, 0, e.white.u0, e.white.v0);
  for (let t = 0; t < o; t++) e.tri(u, u + 1 + ((t + 1) % o), u + 1 + t);
  e.col(9077624).mat(0.9, 0, 0, 0);
  for (let t = 0; t < o; t++) {
    let [n, r] = c[t],
      [i, a] = c[(t + 1) % o],
      l = e.coarse ? 1 : 2;
    for (let t = 0; t < l; t++) {
      let o = (t + 0.5) / l,
        c = n + (i - n) * o,
        u = r + (a - r) * o,
        d = 0.5 + s.next() * 0.5;
      e.box(
        c - d,
        0.04999999999999999,
        u - d * 0.8,
        c + d,
        0.37 + s.next() * 0.3,
        u + d * 0.8,
      );
    }
  }
  return c;
}
function xSe(e, t) {
  let n = LL;
  (WL(e, n.cx, n.cz, n.rx, n.rz, `kokyo-pond`),
    e.col(6122302).mat(0.95, 0, 0, 0),
    e.lathe(
      n.cx + 4,
      n.cz - 1,
      [3.2, 0.2, 2.4, 0.75, 0.6, 1.05, 0.01, 1.0999999999999999],
      e.coarse ? 6 : 9,
    ),
    yL(e, `pine`, n.cx + 4, 0.9500000000000001, n.cz - 1, 6.5, 41),
    xL(e, n.cx - 9, oL, n.cz - n.rz - 1.6, !0),
    xL(e, n.cx + n.rx + 1.5, oL, n.cz + 2, !0),
    e.col(7232844).mat(0.85, 0, 0, 0));
  let r = n.cx - n.rx * 0.95,
    i = n.cz + 1.5;
  (e.box(r - 2, 0.4, i - 0.6, r + 4, 0.55, i + 0.6),
    e.box(r + 3.5, 0.4, i - 3.5, r + 4.7, 0.55, i + 0.6));
  for (let [t, n, r, i] of [
    [-573, -134, `pine`, 7],
    [-541, -152, `pine`, 8],
    [-548, -131, `maple`, 5.5],
    [-566, -156, `maple`, 5],
    [-536, -138, `maple`, 6],
    [-578, -150, `pine`, 6.5],
  ])
    yL(e, r, t, oL, n, i, ge(`pond-tree`, t, n));
}
