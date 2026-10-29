// tokyo/assets/region-tokyo-55J_WESF 257 — col
// Lines 96139-96433 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* zSe(e, t) {
  let n = t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1),
    r = t.c(`glass`),
    i = t.c(`gtGlass`),
    a = e.coarse ? 6.4 : 3.2;
  if (
    (e.col(16777215).mat(0.3, 0.35, 0.3, G),
    e.wall(K.x0, K.z0, K.x0, K.z1, 0, q.deck, n, 3.2, q.deck),
    e.wall(K.x0, K.z1, K.x1, K.z1, 0, q.deck, n, 3.2, q.deck),
    e.wall(K.x1, K.z1, K.x1, J.z1, 0, q.deck, n, 3.2, q.deck),
    e.col(10135214).mat(0.2, 0.4, 0.15, G),
    e.wall(J.x0, K.z0, K.x0, K.z0, 0, nR.beam0, r, 3, 4.6),
    e.col(13163238).mat(0.25, 0.22, 0.045, G),
    e.wall(K.x0, K.z0, K.x0, K.z1, q.deck, q.waist0, r, a, 5.2),
    e.wall(K.x0, K.z1, K.x1, K.z1, q.deck, q.waist0, r, a, 5.2),
    e.wall(K.x1, K.z1, K.x1, J.z1, q.deck, q.waist0, r, a, 5.2),
    e.wall(J.x0, K.z0, K.x0, K.z0, nR.crest, q.waist0, r, a, 5.2),
    e.wall(K.x1, K.z0, J.x0, K.z0, J.top, q.waist0, r, a, 5.2),
    e.wall(K.x1, J.z1, K.x1, K.z0, J.top, q.waist0, r, a, 5.2),
    !e.coarse)
  ) {
    e.col(15659506).mat(0.45, 0.4, 0.12, 1);
    for (let t = q.deck + 5.2; t < q.waist0 - 1; t += 5.2)
      for (let n = 0; n < 4; n++) {
        let r = mR[n],
          i = mR[(n + 1) % 4],
          a = r[1] === i[1] ? 0 : r[0] === K.x0 ? -0.25 : 0.25,
          o = r[1] === i[1] ? (r[1] === K.z0 ? -0.25 : 0.25) : 0;
        e.panel(r[0] + a, r[1] + o, i[0] + a, i[1] + o, t - 0.35, t);
      }
  }
  yield;
  let o = 0.9,
    s = [
      [K.x1 - o, K.z0 + o],
      [K.x0 + o, K.z0 + o],
      [K.x0 + o, K.z1 - o],
      [K.x1 - o, K.z1 - o],
    ];
  (e.col(10136246).mat(0.3, 0.25, 0.1, G | 32),
    zk(e, s, q.waist0, q.waist1, r, a, 4),
    e.col(14278111).mat(0.6, 0.3, 0.05, 1));
  for (let [t, n] of [
    [q.waist0, !0],
    [q.waist1, !1],
  ])
    for (let r = 0; r < 4; r++) {
      let i = mR[r],
        a = mR[(r + 1) % 4],
        o = s[(r + 1) % 4],
        c = s[r];
      tM(
        e,
        [i[0], t, i[1]],
        [a[0], t, a[1]],
        [o[0], t, o[1]],
        [c[0], t, c[1]],
        [0, n ? 1 : -1, 0],
      );
    }
  if (
    (e.col(11718888).mat(0.25, 0.22, 0.08, G | 32),
    zk(e, mR, q.waist1, q.off, r, e.coarse ? 6.4 : 4, e.coarse ? 9 : 4.5),
    !e.coarse)
  ) {
    e.col(2503228).mat(0.3, 0.6, 0, 0);
    for (let t = 0; t < 4; t++)
      RSe(e, mR[t], mR[(t + 1) % 4], q.waist1 + 2, q.off - 2, 4411 + t * 97);
  }
  (e.col(10469336).mat(0.25, 0.25, 0.1, G),
    zk(e, mR, q.off, q.gal, r, a, 4.75),
    yield,
    e.col(14214894).mat(0.08, 0.3, 0.42, G),
    zk(e, mR, q.gal, q.ceil, r, e.coarse ? 6 : 3, q.ceil - q.gal),
    e.col(5003878).mat(0.15, 0.6, 0.05, 0),
    zk(e, mR, q.ceil, q.roof - 1.4, i, a, 3));
  for (let [t, n, r] of hR())
    (e.col(15922162).mat(0.45, 0.4, 0.08, 1),
      e.panel(t[0], t[1], n[0], n[1], q.roof - 1.4, q.roof + r - 0.3),
      e.col(16777215).mat(0.3, 0.2, 0.95, 1),
      e.panel(t[0], t[1], n[0], n[1], q.roof + r - 0.3, q.roof + r));
  for (let [t, n] of mR) {
    let r = fR(t - Math.sign(t), n - Math.sign(n));
    Wk(e, t, q.roof + r + pR(t - Math.sign(t), n - Math.sign(n)), n, 0.18);
  }
  {
    let t = K.x1 + 0.04;
    if (
      (e.col(2828067).mat(0.4, 0.5, 0.05, 0),
      e.box(K.x1, 0, 10.1, K.x1 + 0.25, 3.6, 13.9),
      e.col(11967082).mat(0.3, 0.8, 0.12, 1),
      e.panel(t + 0.25, 13.4, t + 0.25, 10.6, 0, 2.7),
      e.col(16773846).mat(0.3, 0, 0.9, 1),
      e.panel(t + 0.25, 13.75, t + 0.25, 10.25, 2.8, 2.95),
      !e.coarse)
    ) {
      let n = e.sub(t + 0.25, 0, 12, Math.PI / 2);
      (e.col(16777215).mat(0.3, 0, 0.9, 1),
        gR(e, `SHIBUYA SKYE`, 0, 3.05, 0.42),
        e.leave(n));
    }
  }
  if (
    (yield,
    _R(e, t, K.x0, K.z0, -1, -1, 13, 24, 8.5, nR.crest, q.petal + 4),
    _R(e, t, K.x1, K.z0, 1, -1, 7, 9, 3, J.top, 54),
    e.col(2369580).mat(0.5, 0.4, 0, 0),
    e.box(-4.8, nR.crest + 2, K.z0 - 0.3, 10.8, 47.6, K.z0),
    e.col(16777215).mat(0.3, 0, 0.5, 2),
    e.panel(
      10.4,
      K.z0 - 0.32,
      -4.4,
      K.z0 - 0.32,
      nR.crest + 2.4,
      47.2,
      cS(t.c(`sbyArt`), `screenB`),
    ),
    yield,
    !e.coarse)
  ) {
    for (let [t, n, r, i] of [
      [K.x0 - 0.06, 0, -Math.PI / 2, 8],
      [0, K.z0 - 0.06, 0, -8],
    ]) {
      let a = e.sub(t, 0, n, r);
      (e.col(1777186).mat(0.4, 0.3, 0.05, 1),
        e.panel(i + 8.5, 0, i - 8.5, 0, 81, 86.4),
        e.col(16777215).mat(0.4, 0.2, 0.8, 1));
      let o = e.sub(0, 0, -0.04, 0);
      (gR(e, `SHIBUYA`, i - 0.6, 84, 1.5),
        gR(e, `SCRAMBLE TOWER`, i - 0.6, 81.8, 1.5),
        e.col(16777215).mat(0.4, 0.2, 0.8, 1),
        e.panel(i + 8, 0, i + 7.8, 0, 82, 85.6),
        e.panel(i + 5, 0, i + 4.8, 0, 82, 85.6),
        tM(
          e,
          [i + 7.8, 85.6, 0],
          [i + 5, 82, 0],
          [i + 5.2, 82, 0],
          [i + 8, 85.6, 0],
          [0, 0, -1],
        ),
        e.leave(o),
        e.leave(a));
    }
    let t = e.sub(K.x0 - 0.06, 0, 6, -Math.PI / 2);
    (e.col(16777215).mat(0.4, 0.2, 0.75, 1),
      gR(e, `SHIBUYA SKYE`, 0, 26, 2.2),
      e.leave(t));
  }
  (e.solid(K.x0, K.z0, J.x0, K.z1, 0, q.gal - 0.2),
    e.solid(J.x0, J.z1, K.x1, K.z1, 0, q.gal - 0.2),
    e.solid(J.x0, K.z0, K.x1, J.z1, J.top, q.gal - 0.2),
    e.solid(K.x0 - 4, K.z0 - 4, K.x0, K.z0 + 8, nR.crest, 50),
    e.solid(K.x0, K.z0 - 4, K.x0 + 6, K.z0, nR.crest, 50));
}
function* BSe(e, t) {
  let n = t.c(`glass`);
  if (
    (e.col(14935782).mat(0.5, 0.2, 0.2, 1),
    e.panel(J.x0, J.z1, J.x0, J.z0, 0, J.top),
    e.panel(J.x0, J.z0, J.x1, J.z0, nR.beam0, J.top),
    e.panel(J.x1, J.z1, J.x0, J.z1, 0, J.top),
    e.col(14276044).mat(0.85, 0, 0.05, 1),
    e.flat(J.x0, J.z0, J.x1, J.z1, 0.04),
    e.col(16052196).mat(0.6, 0, 0.45, 1),
    e.flat(J.x0, J.z0, J.x1, J.z1, J.top, e.white, 0, 0, !1),
    e.col(13619922).mat(0.7, 0.1, 0.06, 1),
    e.box(J.ex0, q.deck - 0.6, J.z0, J.x1, q.deck, J.eTop),
    e.box(J.ex1, q.deck - 0.6, J.eTop, J.x1, q.deck, -9),
    !e.coarse)
  ) {
    (pM(e, J.ex1, -9.05, J.x1 - 0.2, -9.05, q.deck),
      pM(e, J.ex1 + 0.05, J.eTop, J.ex1 + 0.05, -9, q.deck),
      e.col(14475232).mat(0.6, 0.2, 0.1, 1));
    for (let t of [14.4, 21])
      (e.box(J.x0, t - 0.5, J.z0, J.x0 + 2.5, t, J.z1),
        e.box(J.x0 + 2.5, t - 0.5, J.z1 - 2.5, J.x1 - 0.5, t, J.z1),
        pM(e, J.x0 + 2.5, J.z0 + 0.5, J.x0 + 2.5, J.z1 - 2.5, t));
    (e.col(3817284).mat(0.4, 0.6, 0.05, 0),
      tM(
        e,
        [J.x0 + 3, 14.4, J.z1 - 2.6],
        [J.x0 + 4.6, 14.4, J.z1 - 2.6],
        [J.x0 + 4.6, q.deck, J.z1 - 2.6 - 11],
        [J.x0 + 3, q.deck, J.z1 - 2.6 - 11],
        [0, 1, 1],
      ));
  }
  (e.col(5988454).mat(0.5, 0.5, 0.05, 0),
    tM(
      e,
      [J.ex0, 0.05, J.eBot],
      [J.ex1, 0.05, J.eBot],
      [J.ex1, q.deck, J.eTop],
      [J.ex0, q.deck, J.eTop],
      [0, 1, 1],
    ),
    e.col(3159354).mat(0.5, 0.5, 0, 0));
  for (let t of [J.ex0, J.ex1])
    tM(
      e,
      [t, 0, J.eBot],
      [t, 0, J.eTop],
      [t, q.deck, J.eTop],
      [t, 0.05, J.eBot],
      [t === J.ex0 ? -1 : 1, 0, 0],
    );
  if (!e.coarse) {
    e.col(11913424).mat(0.1, 0.5, 0.05, 1);
    for (let t of [J.ex0 + 0.05, J.ex1 - 0.05])
      for (let n of [-1, 1])
        tM(
          e,
          [t, 0.05, J.eBot],
          [t, 1.05, J.eBot],
          [t, q.deck + 1, J.eTop],
          [t, q.deck, J.eTop],
          [n, 0, 0],
        );
    e.col(1974822).mat(0.4, 0.3, 0, 0);
    for (let t of [J.ex0 + 0.05, J.ex1 - 0.05])
      e.rod(t, 1.05, J.eBot, t, q.deck + 1.05, J.eTop, 0.05, 4);
  }
  (yield,
    e.coarse
      ? (e.col(12044754).mat(0.15, 0.4, 0.3, G),
        e.panel(K.x1, J.z1, K.x1, J.z0, 0, J.top, n),
        e.panel(K.x1, J.z0, J.x0, J.z0, nR.crest, J.top, n))
      : (e.col(16185076).mat(0.45, 0.5, 0.1, 1),
        mM(
          e,
          [
            [K.x1, J.z1],
            [K.x1, J.z0],
          ],
          q.deck + 3.5,
          J.top,
          4.6,
          1.5,
          0.45,
          0.32,
          !1,
        ),
        mM(
          e,
          [
            [K.x1, J.z0],
            [J.x0, J.z0],
          ],
          nR.crest + 0.5,
          J.top,
          4.6,
          1.5,
          0.45,
          0.32,
          !1,
        )),
    e.col(3883334).mat(0.4, 0.6, 0, 0));
  for (let t = J.z0; t <= J.z1 + 0.01; t += 2.8)
    e.box(K.x1 - 0.08, 0, t - 0.06, K.x1 + 0.08, J.top, t + 0.06);
  (e.box(K.x1 - 0.1, q.deck + 3.4, J.z0, K.x1 + 0.1, q.deck + 3.6, J.z1),
    e.box(K.x1 - 0.1, 4.1, J.z0, K.x1 + 0.1, 4.3, J.z1));
  let r = K.x1 - 0.15,
    i = K.x1 + 0.1;
  (e.solid(r, J.z0, i, -14, 0, J.top),
    e.solid(r, -14, i, -9, 0, q.deck),
    e.solid(r, -14, i, -9, q.deck + 3.5, J.top),
    e.solid(r, -9, i, -8, 0, J.top),
    e.solid(r, -8, i, -4, 4.2, J.top),
    e.solid(r, -4, i, J.z1, 0, J.top),
    e.floor(J.ex0, J.eTop, J.ex1, J.eBot, q.deck, 0, `stairs`),
    e.floor(J.ex0, J.z0, J.x1, J.eTop, q.deck),
    e.floor(J.ex1, J.eTop, J.x1, -9, q.deck),
    e.solid(J.x0, J.z0, J.ex0, J.eBot, 0, q.deck + 1.2, `prop`),
    e.solid(
      J.ex1,
      J.eTop + 0.5,
      J.ex1 + 0.2,
      J.eBot - 0.6,
      0,
      q.deck + 1.1,
      `prop`,
    ),
    e.solid(
      J.ex1 + 0.2,
      -9.15,
      J.x1 - 0.2,
      -8.95,
      q.deck,
      q.deck + 1.1,
      `prop`,
    ));
}
