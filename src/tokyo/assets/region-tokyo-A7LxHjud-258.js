// tokyo/assets/region-tokyo-A7LxHjud 258 — bridge
// Lines 96525-96786 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* eCe(e, t) {
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
  (r(aR.east),
    r(aR.south),
    r(aR.bridge),
    i(aR.east.x1, aR.east.z1, aR.east.x1, aR.east.z0),
    i(aR.east.x1, aR.east.z0, aR.east.x0, aR.east.z0),
    i(aR.south.x0, aR.south.z1, aR.bridge.x0, aR.south.z1),
    i(aR.bridge.x1, aR.south.z1, aR.east.x1, aR.south.z1),
    i(aR.south.x0, aR.south.z0, aR.south.x0, aR.south.z1),
    i(aR.bridge.x0, aR.bridge.z0, aR.bridge.x0, aR.bridge.z1),
    i(aR.bridge.x1, aR.bridge.z1, aR.bridge.x1, aR.bridge.z0));
  let a = (t, n, r, i) => hM(e, t, n, r, i, q.deck);
  (a(aR.east.x1 - 0.1, aR.east.z1, aR.east.x1 - 0.1, aR.sky.z1),
    a(aR.east.x1 - 0.1, aR.sky.z0, aR.east.x1 - 0.1, aR.east.z0),
    a(aR.east.x0, aR.east.z0 + 0.1, aR.east.x1, aR.east.z0 + 0.1),
    a(aR.south.x0 + 0.1, aR.south.z0, aR.south.x0 + 0.1, aR.south.z1),
    a(aR.south.x0, aR.south.z1 - 0.1, aR.bridge.x0, aR.south.z1 - 0.1),
    a(aR.bridge.x1, aR.south.z1 - 0.1, aR.east.x1, aR.south.z1 - 0.1),
    a(aR.bridge.x0 + 0.1, aR.bridge.z0, aR.bridge.x0 + 0.1, aR.bridge.z1),
    a(aR.bridge.x1 - 0.1, aR.bridge.z0, aR.bridge.x1 - 0.1, aR.bridge.z1),
    e.col(13620182).mat(0.4, 0.5, 0.05, 0));
  for (let t of [-6, 6, 18])
    (e.cylY(aR.east.x1 - 0.7, t, 0, q.deck - 0.9, 0.3, e.coarse ? 5 : 8),
      e.pole(aR.east.x1 - 0.7, t, 0.35, 0, q.deck - 0.9));
  for (let t of [aR.bridge.z0 + 1, aR.bridge.z1 - 1])
    for (let n of [aR.bridge.x0 + 0.6, aR.bridge.x1 - 0.6])
      (e.cylY(n, t, 0, q.deck - 0.9, 0.35, e.coarse ? 5 : 8),
        e.pole(n, t, 0.4, 0, q.deck - 0.9));
  yield;
  let o = aR.sky;
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
  let s = aR.stair,
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
    (rM(
      e,
      [t, 0, s.z1],
      [t, 0, s.z0],
      [t, q.deck + 1, s.z0],
      [t, 1, s.z1],
      [n, 0, 0],
    ),
      rM(
        e,
        [t, 1, s.z1],
        [t, q.deck + 1, s.z0],
        [t - n * 0.2, q.deck + 1, s.z0],
        [t - n * 0.2, 1, s.z1],
        [0, 1, 1],
      ));
  (e.floor(aR.east.x0, aR.east.z0, aR.east.x1, aR.east.z1, q.deck),
    e.floor(aR.south.x0, aR.south.z0, aR.south.x1, aR.south.z1, q.deck),
    e.floor(aR.bridge.x0, aR.bridge.z0, aR.bridge.x1, aR.bridge.z1, q.deck),
    e.floor(o.x0 - 0.2, o.z0, o.x1, o.z1, q.deck),
    e.floor(s.x0, s.z0, s.x1, s.z1, q.deck, 0, `stairs`));
  let d = (t, n, r, i) => e.solid(t, n, r, i, q.deck, q.deck + 1.2, `prop`);
  (d(aR.east.x1 - 0.2, aR.sky.z1, aR.east.x1, aR.east.z1),
    d(aR.east.x1 - 0.2, aR.east.z0, aR.east.x1, aR.sky.z0),
    d(aR.east.x0, aR.east.z0, aR.east.x1, aR.east.z0 + 0.2),
    d(aR.south.x0, aR.south.z0, aR.south.x0 + 0.2, aR.south.z1),
    d(aR.south.x0, aR.south.z1 - 0.2, aR.bridge.x0, aR.south.z1),
    d(aR.bridge.x1, aR.south.z1 - 0.2, aR.east.x1, aR.south.z1),
    d(aR.bridge.x0, aR.bridge.z0, aR.bridge.x0 + 0.2, aR.bridge.z1),
    d(aR.bridge.x1 - 0.2, aR.bridge.z0, aR.bridge.x1, aR.bridge.z1),
    e.solid(o.x0, o.z0 - 0.2, o.x1, o.z0, q.deck, q.deck + 3.6, `prop`),
    e.solid(o.x0, o.z1, o.x1, o.z1 + 0.2, q.deck, q.deck + 3.6, `prop`),
    e.solid(s.x0 - 0.2, s.z0, s.x0, s.z1, 0, q.deck + 1, `prop`),
    e.solid(s.x1, s.z0, s.x1 + 0.2, s.z1, 0, q.deck + 1, `prop`));
}
var bR = [
  iR.z0 - 0.6,
  iR.eave - 0.2,
  -35,
  17.4,
  -32.2,
  iR.crest,
  -29.6,
  18.6,
  -27,
  18.1,
  -24.4,
  18.6,
  -21.8,
  iR.crest,
  -19,
  17.4,
  iR.z1,
  iR.eave + 0.6,
];
function* tCe(e, t) {
  let n = t.c(`glass`);
  if (
    (e.col(14605525).mat(0.8, 0, 0.06, 1),
    e.box(
      iR.x0,
      iR.beam0,
      iR.z0,
      iR.x1,
      iR.beam1,
      iR.z1,
      t.c(`plaster`),
      6,
      iR.beam1 - iR.beam0,
      e.white,
      !0,
    ),
    e.col(13293276).mat(0.12, 0.4, 0.3, G),
    e.wall(
      iR.x1,
      iR.z0,
      iR.x0,
      iR.z0,
      iR.beam1,
      iR.eave,
      n,
      2.5,
      iR.eave - iR.beam1,
    ),
    e.wall(
      iR.x0,
      iR.z1,
      K.x0,
      iR.z1,
      iR.beam1,
      iR.eave,
      n,
      2.5,
      iR.eave - iR.beam1,
    ),
    e.wall(
      K.x1,
      iR.z1,
      iR.x1,
      iR.z1,
      iR.beam1,
      iR.eave,
      n,
      2.5,
      iR.eave - iR.beam1,
    ),
    e.wall(
      iR.x1,
      iR.z1,
      iR.x1,
      iR.z0,
      iR.beam1,
      iR.eave,
      n,
      2.5,
      iR.eave - iR.beam1,
    ),
    !e.coarse)
  ) {
    e.col(12172994).mat(0.4, 0.6, 0.05, 0);
    for (let t = iR.x0 + 1.25; t < iR.x1; t += 2.5)
      e.box(t - 0.08, iR.beam1, iR.z0 - 0.25, t + 0.08, iR.eave, iR.z0);
    for (let t = K.x1 + 1.25; t < iR.x1; t += 2.5)
      e.box(t - 0.08, iR.beam1, iR.z1, t + 0.08, iR.eave, iR.z1 + 0.25);
  }
  (yield, e.col(12567493).mat(0.35, 0.65, 0.04, 1));
  let r = bR;
  (e.extrudeX(r, iR.x0, iR.x1, !1, !1), e.col(11120820).mat(0.4, 0.6, 0.05, 1));
  for (let [t, n] of [
    [iR.x0, -1],
    [iR.x1, 1],
  ])
    for (let r = 0; r + 2 < bR.length; r += 2) {
      let i = bR[r],
        a = bR[r + 1],
        o = bR[r + 2],
        s = bR[r + 3];
      rM(
        e,
        [t, iR.eave - 0.2, i],
        [t, iR.eave - 0.2, o],
        [t, s, o],
        [t, a, i],
        [n, 0, 0],
      );
    }
  if (!e.coarse) {
    e.col(14672611).mat(0.35, 0.6, 0.05, 1);
    for (let t = iR.x0 + 2; t < iR.x1 - 0.5; t += 4.4) {
      let n = [];
      for (let e = 0; e < r.length; e += 2) n.push(r[e], r[e + 1] + 0.18);
      e.extrudeX(n, t, t + 0.35, !1, !1);
    }
    e.col(15266292).mat(0.1, 0.3, 0.7, 1);
    for (let t of [-32.2, -21.8])
      e.flat(iR.x0 + 1, t - 0.6, iR.x1 - 1, t + 0.6, iR.crest + 0.05);
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
    (e.cylY(t, n, 0, iR.beam0, 0.75, e.coarse ? 6 : 12, 1.9, !1),
      e.pole(t, n, 0.85, 0, iR.beam0));
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
    (vR(e, `G`, 0, 3.45, 0.5), e.leave(n), e.leave(t));
  }
  (e.solid(-9, -23.3, 1, -18.2, 0, 4.2),
    e.solid(iR.x0, iR.z0, iR.x1, iR.z1, iR.beam0, iR.crest));
}
