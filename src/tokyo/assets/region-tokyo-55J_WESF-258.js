// tokyo/assets/region-tokyo-55J_WESF 258 — bridge
// Lines 96434-96695 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* VSe(e, t) {
  let n = t.c(`paving`),
    r = (t, r = !0) => {
      (e.col(14078406).mat(0.85, 0, 0.03, 1),
        e.flat(
          t.x0,
          t.z0,
          t.x1,
          t.z1,
          q.deck,
          n,
          e.coarse ? 0 : 4,
          e.coarse ? 0 : 4,
        ),
        e.col(15001059).mat(0.6, 0.2, 0.05, 1),
        r && e.flat(t.x0, t.z0, t.x1, t.z1, q.deck - 0.9, e.white, 0, 0, !1));
    },
    i = (t, n, r, i) => {
      (e.push().col(15330024).mat(0.55, 0.2, 0.05, 1),
        e.panel(t, n, r, i, q.deck - 0.9, q.deck),
        e.pop());
    };
  (r(rR.east),
    r(rR.south),
    r(rR.bridge),
    i(rR.east.x1, rR.east.z1, rR.east.x1, rR.east.z0),
    i(rR.east.x1, rR.east.z0, rR.east.x0, rR.east.z0),
    i(rR.south.x0, rR.south.z1, rR.bridge.x0, rR.south.z1),
    i(rR.bridge.x1, rR.south.z1, rR.east.x1, rR.south.z1),
    i(rR.south.x0, rR.south.z0, rR.south.x0, rR.south.z1),
    i(rR.bridge.x0, rR.bridge.z0, rR.bridge.x0, rR.bridge.z1),
    i(rR.bridge.x1, rR.bridge.z1, rR.bridge.x1, rR.bridge.z0));
  let a = (t, n, r, i) => pM(e, t, n, r, i, q.deck);
  (a(rR.east.x1 - 0.1, rR.east.z1, rR.east.x1 - 0.1, rR.sky.z1),
    a(rR.east.x1 - 0.1, rR.sky.z0, rR.east.x1 - 0.1, rR.east.z0),
    a(rR.east.x0, rR.east.z0 + 0.1, rR.east.x1, rR.east.z0 + 0.1),
    a(rR.south.x0 + 0.1, rR.south.z0, rR.south.x0 + 0.1, rR.south.z1),
    a(rR.south.x0, rR.south.z1 - 0.1, rR.bridge.x0, rR.south.z1 - 0.1),
    a(rR.bridge.x1, rR.south.z1 - 0.1, rR.east.x1, rR.south.z1 - 0.1),
    a(rR.bridge.x0 + 0.1, rR.bridge.z0, rR.bridge.x0 + 0.1, rR.bridge.z1),
    a(rR.bridge.x1 - 0.1, rR.bridge.z0, rR.bridge.x1 - 0.1, rR.bridge.z1),
    e.col(13620182).mat(0.4, 0.5, 0.05, 0));
  for (let t of [-6, 6, 18])
    (e.cylY(rR.east.x1 - 0.7, t, 0, q.deck - 0.9, 0.3, e.coarse ? 5 : 8),
      e.pole(rR.east.x1 - 0.7, t, 0.35, 0, q.deck - 0.9));
  for (let t of [rR.bridge.z0 + 1, rR.bridge.z1 - 1])
    for (let n of [rR.bridge.x0 + 0.6, rR.bridge.x1 - 0.6])
      (e.cylY(n, t, 0, q.deck - 0.9, 0.35, e.coarse ? 5 : 8),
        e.pole(n, t, 0.4, 0, q.deck - 0.9));
  yield;
  let o = rR.sky;
  (r(o),
    e.col(15659247).mat(0.5, 0.3, 0.2, 1),
    e.box(o.x0, q.deck + 3.6, o.z0 - 0.2, o.x1, q.deck + 4.2, o.z1 + 0.2),
    e.col(16773852).mat(0.4, 0, 0.6, 1),
    e.flat(o.x0, o.z0, o.x1, o.z1, q.deck + 3.58, e.white, 0, 0, !1),
    e.col(14672868).mat(0.4, 0.5, 0.05, 1));
  for (let t = o.x0; t <= o.x1 + 0.01; t += e.coarse ? 5 : 2.5)
    for (let n of [o.z0, o.z1])
      e.box(t - 0.06, q.deck, n - 0.08, t + 0.06, q.deck + 3.6, n + 0.08);
  (i(o.x1, o.z0, o.x0, o.z0), i(o.x0, o.z1, o.x1, o.z1), yield);
  let s = rR.stair,
    c = e.coarse ? 8 : 24,
    l = (s.z1 - s.z0) / c,
    u = q.deck / c;
  e.col(14210250).mat(0.85, 0, 0.04, 1);
  for (let t = 0; t < c; t++) {
    let n = s.z0 + t * l;
    (e.flat(s.x0, n, s.x1, n + l, q.deck - t * u),
      e.panel(s.x0, n + l, s.x1, n + l, q.deck - (t + 1) * u, q.deck - t * u));
  }
  e.col(15527660).mat(0.55, 0.2, 0.05, 1);
  for (let [t, n] of [
    [s.x0, -1],
    [s.x1, 1],
  ])
    (tM(
      e,
      [t, 0, s.z1],
      [t, 0, s.z0],
      [t, q.deck + 1, s.z0],
      [t, 1, s.z1],
      [n, 0, 0],
    ),
      tM(
        e,
        [t, 1, s.z1],
        [t, q.deck + 1, s.z0],
        [t - n * 0.2, q.deck + 1, s.z0],
        [t - n * 0.2, 1, s.z1],
        [0, 1, 1],
      ));
  (e.floor(rR.east.x0, rR.east.z0, rR.east.x1, rR.east.z1, q.deck),
    e.floor(rR.south.x0, rR.south.z0, rR.south.x1, rR.south.z1, q.deck),
    e.floor(rR.bridge.x0, rR.bridge.z0, rR.bridge.x1, rR.bridge.z1, q.deck),
    e.floor(o.x0 - 0.2, o.z0, o.x1, o.z1, q.deck),
    e.floor(s.x0, s.z0, s.x1, s.z1, q.deck, 0, `stairs`));
  let d = (t, n, r, i) => e.solid(t, n, r, i, q.deck, q.deck + 1.2, `prop`);
  (d(rR.east.x1 - 0.2, rR.sky.z1, rR.east.x1, rR.east.z1),
    d(rR.east.x1 - 0.2, rR.east.z0, rR.east.x1, rR.sky.z0),
    d(rR.east.x0, rR.east.z0, rR.east.x1, rR.east.z0 + 0.2),
    d(rR.south.x0, rR.south.z0, rR.south.x0 + 0.2, rR.south.z1),
    d(rR.south.x0, rR.south.z1 - 0.2, rR.bridge.x0, rR.south.z1),
    d(rR.bridge.x1, rR.south.z1 - 0.2, rR.east.x1, rR.south.z1),
    d(rR.bridge.x0, rR.bridge.z0, rR.bridge.x0 + 0.2, rR.bridge.z1),
    d(rR.bridge.x1 - 0.2, rR.bridge.z0, rR.bridge.x1, rR.bridge.z1),
    e.solid(o.x0, o.z0 - 0.2, o.x1, o.z0, q.deck, q.deck + 3.6, `prop`),
    e.solid(o.x0, o.z1, o.x1, o.z1 + 0.2, q.deck, q.deck + 3.6, `prop`),
    e.solid(s.x0 - 0.2, s.z0, s.x0, s.z1, 0, q.deck + 1, `prop`),
    e.solid(s.x1, s.z0, s.x1 + 0.2, s.z1, 0, q.deck + 1, `prop`));
}
var vR = [
  nR.z0 - 0.6,
  nR.eave - 0.2,
  -35,
  17.4,
  -32.2,
  nR.crest,
  -29.6,
  18.6,
  -27,
  18.1,
  -24.4,
  18.6,
  -21.8,
  nR.crest,
  -19,
  17.4,
  nR.z1,
  nR.eave + 0.6,
];
function* HSe(e, t) {
  let n = t.c(`glass`);
  if (
    (e.col(14605525).mat(0.8, 0, 0.06, 1),
    e.box(
      nR.x0,
      nR.beam0,
      nR.z0,
      nR.x1,
      nR.beam1,
      nR.z1,
      t.c(`plaster`),
      6,
      nR.beam1 - nR.beam0,
      e.white,
      !0,
    ),
    e.col(13293276).mat(0.12, 0.4, 0.3, G),
    e.wall(
      nR.x1,
      nR.z0,
      nR.x0,
      nR.z0,
      nR.beam1,
      nR.eave,
      n,
      2.5,
      nR.eave - nR.beam1,
    ),
    e.wall(
      nR.x0,
      nR.z1,
      K.x0,
      nR.z1,
      nR.beam1,
      nR.eave,
      n,
      2.5,
      nR.eave - nR.beam1,
    ),
    e.wall(
      K.x1,
      nR.z1,
      nR.x1,
      nR.z1,
      nR.beam1,
      nR.eave,
      n,
      2.5,
      nR.eave - nR.beam1,
    ),
    e.wall(
      nR.x1,
      nR.z1,
      nR.x1,
      nR.z0,
      nR.beam1,
      nR.eave,
      n,
      2.5,
      nR.eave - nR.beam1,
    ),
    !e.coarse)
  ) {
    e.col(12172994).mat(0.4, 0.6, 0.05, 0);
    for (let t = nR.x0 + 1.25; t < nR.x1; t += 2.5)
      e.box(t - 0.08, nR.beam1, nR.z0 - 0.25, t + 0.08, nR.eave, nR.z0);
    for (let t = K.x1 + 1.25; t < nR.x1; t += 2.5)
      e.box(t - 0.08, nR.beam1, nR.z1, t + 0.08, nR.eave, nR.z1 + 0.25);
  }
  (yield, e.col(12567493).mat(0.35, 0.65, 0.04, 1));
  let r = vR;
  (e.extrudeX(r, nR.x0, nR.x1, !1, !1), e.col(11120820).mat(0.4, 0.6, 0.05, 1));
  for (let [t, n] of [
    [nR.x0, -1],
    [nR.x1, 1],
  ])
    for (let r = 0; r + 2 < vR.length; r += 2) {
      let i = vR[r],
        a = vR[r + 1],
        o = vR[r + 2],
        s = vR[r + 3];
      tM(
        e,
        [t, nR.eave - 0.2, i],
        [t, nR.eave - 0.2, o],
        [t, s, o],
        [t, a, i],
        [n, 0, 0],
      );
    }
  if (!e.coarse) {
    e.col(14672611).mat(0.35, 0.6, 0.05, 1);
    for (let t = nR.x0 + 2; t < nR.x1 - 0.5; t += 4.4) {
      let n = [];
      for (let e = 0; e < r.length; e += 2) n.push(r[e], r[e + 1] + 0.18);
      e.extrudeX(n, t, t + 0.35, !1, !1);
    }
    e.col(15266292).mat(0.1, 0.3, 0.7, 1);
    for (let t of [-32.2, -21.8])
      e.flat(nR.x0 + 1, t - 0.6, nR.x1 - 1, t + 0.6, nR.crest + 0.05);
  }
  (yield, e.col(14013388).mat(0.85, 0, 0.04, 1));
  for (let [t, n] of [
    [-14, -28],
    [-1, -28],
    [11, -28],
    [-14, -20.5],
    [-1, -20.5],
    [45.3, -31],
    [45.3, -22],
  ])
    (e.cylY(t, n, 0, nR.beam0, 0.75, e.coarse ? 6 : 12, 1.9, !1),
      e.pole(t, n, 0.85, 0, nR.beam0));
  if (
    (e.col(15963904).mat(0.5, 0.1, 0.25, 1),
    e.box(-9, 0, -23.3, 1, 4.2, -18.2),
    e.col(16777215).mat(0.3, 0.2, 0.55, G),
    e.panel(1, -23.32, -9, -23.32, 0.2, 3.4, t.c(`doors`)),
    !e.coarse)
  ) {
    let t = e.sub(-4, 0, -23.35, 0);
    (e.col(16777215).mat(0.3, 0, 0.6, 1),
      e.panel(0.5, -0.02, -0.5, -0.02, 3.3, 4.1),
      e.col(15963904).mat(0.3, 0, 0.6, 1));
    let n = e.sub(0, 0, -0.04, 0);
    (gR(e, `G`, 0, 3.45, 0.5), e.leave(n), e.leave(t));
  }
  (e.solid(-9, -23.3, 1, -18.2, 0, 4.2),
    e.solid(nR.x0, nR.z0, nR.x1, nR.z1, nR.beam0, nR.crest));
}
