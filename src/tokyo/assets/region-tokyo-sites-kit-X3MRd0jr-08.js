// tokyo/assets/region-tokyo-sites-kit-X3MRd0jr 08 — face
// Lines 2256-2440 of readable/tokyo/assets/region-tokyo-sites-kit-X3MRd0jr.pretty.js (statement-aligned).
function* ye(e, t) {
  let n = e.lm,
    r = e.art,
    i = t.recess - 0.08,
    a = t.o1 - t.o0,
    o = (t.o0 + t.o1) / 2,
    l = 2.45;
  n.setPaint(P(t.wood ?? 3810326, 0.75));
  for (let e = 0; e < 10; e++) {
    let r = t.o0 + (a * e) / 10,
      o = t.o0 + (a * (e + 1)) / 10,
      s = Z(((r - t.o0) / a) * 2 - 1),
      c = Z(((o - t.o0) / a) * 2 - 1);
    n.quad([o, l, i], [r, l, i], [r, s - 0.02, i], [o, c - 0.02, i]);
  }
  n.setPaint(P(1971212, 0.7));
  for (let e = 1; e < 6; e++) {
    let r = t.o0 + (a * e) / 6;
    n.box(
      r - 0.03,
      l,
      i - 0.04,
      r + 0.03,
      Z(((r - t.o0) / a) * 2 - 1) - 0.05,
      i,
    );
  }
  n.box(t.o0, 2.37, i - 0.1, t.o1, 2.49, i);
  let u = Math.min(a - 0.6, 4.6);
  if (
    (n.setPaint(P(L.black, 0.6)),
    n.box(
      o - u / 2 - 0.06,
      2.75,
      i - 0.16,
      o + u / 2 + 0.06,
      3.6500000000000004,
      i - 0.04,
    ),
    r.tex(e.atlas.r(t.signKey), 16777215, t.open ? 1 : 0.3),
    t.signCell)
  ) {
    let [e, n, a] = t.signCell,
      s = e % n,
      c = Math.floor(e / n) % a,
      l = 0.004;
    r.rectZ(
      o - u / 2,
      2.81,
      o + u / 2,
      3.59,
      i - 0.17,
      -1,
      s / n + l,
      1 - (c + 1) / a + l,
      (s + 1) / n - l,
      1 - c / a - l,
    );
  } else r.rectZ(o - u / 2, 2.81, o + u / 2, 3.59, i - 0.17, -1);
  if ((yield, !t.open)) {
    (n.setPaint(P(10132632, 0.55, 0.5)),
      n.box(t.o0, 0, i - 0.02, t.o1, 2.37, i, 32));
    return;
  }
  if (
    (t.backKey
      ? r.tex(e.atlas.r(t.backKey), 16777215, 0.75)
      : r.col(16308392, 0.8, 0.95),
    r.rectZ(t.o0 + 0.05, 0.02, t.o1 - 0.05, 2.35, i - 0.005, -1),
    t.kind === `izakaya` || t.kind === `counter`)
  ) {
    n.setPaint(P(L.woodDark, 0.7));
    for (let e of [t.o0 + 0.05, o - 0.03, t.o1 - 0.11])
      n.box(e, 0, i - 0.06, e + 0.06, 2.35, i - 0.02);
    (n.box(t.o0, 0, i - 0.06, t.o1, 0.15, i - 0.02),
      t.kind === `counter` &&
        (n.setPaint(P(14212319, 0.3, 0.7)),
        n.box(t.o0 + 0.2, 0.95, i - 0.45, t.o1 - 0.2, 1, i - 0.02),
        n.setPaint(P(6965808, 0.7)),
        n.box(t.o0 + 0.2, 0, i - 0.4, t.o1 - 0.2, 0.95, i - 0.05),
        e.box(t.o0 + 0.2, i - 0.45, t.o1 - 0.2, i, 0, 1)));
  }
  if (
    (t.norenKey &&
      H(e, {
        x0: o - 1.2,
        x1: o + 1.2,
        y1: 2.33,
        z: i - 0.05,
        len: 0.75,
        key: t.norenKey,
      }),
    t.lanternKey)
  ) {
    if (t.bigLantern)
      U(e, {
        x: t.o1 - 0.9,
        y: 1.15,
        z: t.face - 0.45,
        r: 0.48,
        h: 1.25,
        key: t.lanternKey,
        cell: t.lanternCell,
        zWall: i,
      });
    else
      for (let n of [t.o0 + 0.55, t.o1 - 0.55])
        U(e, {
          x: n,
          y: 1.7300000000000002,
          z: i - 0.35,
          r: 0.2,
          h: 0.56,
          key: t.lanternKey,
          cell: t.lanternCell,
          zWall: i,
        });
  }
  yield;
  let d = t.face - 1;
  if (t.kind === `grill`) {
    (n.setPaint(P(5921372, 0.4, 0.7)),
      n.box(o - 1.3, 0, t.face - 0.55, o + 1.3, 0.92, t.face + 0.15),
      n.setPaint(F(16734746, 2.8, !0)),
      n.box(o - 1.15, 0.92, t.face - 0.45, o + 1.15, 0.95, t.face + 0.05, 4),
      r.col(9067050, 0));
    for (let e = 0; e < 12; e++) {
      let n = o - 1.05 + e * 0.19;
      (r.box(n - 0.012, 0.98, t.face - 0.42, n + 0.012, 1, t.face + 0.02),
        r.col(e % 3 ? 8010266 : 5909010, 0),
        r.box(n - 0.03, 0.97, t.face - 0.26, n + 0.03, 1.03, t.face - 0.12),
        r.col(9067050, 0));
    }
    (e.box(o - 1.3, t.face - 0.55, o + 1.3, t.face + 0.15, 0, 1.1),
      c(e, { x: o, z: t.face + 0.6, rot: 0, pose: `cook`, palette: `vendor` }),
      J(e, { x: t.o0 + 0.8, z: d - 0.2, stools: 3 }),
      s(e, {
        x0: o - 1,
        z0: t.face - 0.95,
        x1: o + 1,
        z1: t.face - 0.95,
        people: 3,
        rot: 0,
        seatH: 0.45,
        palette: `office`,
      }));
  } else if (t.kind === `izakaya`)
    (J(e, { x: t.o0 + 1.2, z: d, stools: 3 }),
      J(e, { x: t.o1 - 1.2, z: d, stools: 2, crate: 14721562 }),
      s(e, {
        x0: t.o0 + 0.6,
        z0: d - 0.55,
        x1: t.o0 + 1.8,
        z1: d - 0.55,
        people: 2,
        rot: 0,
        seatH: 0.38,
        palette: `office`,
      }));
  else if (t.kind === `stand`)
    for (let n of [t.o0 + 1.3, t.o1 - 1.3])
      (r.col(6964262, 0),
        r.cyl(n, d, 0.32, 0.32, 0, 1, 10),
        r.col(3810324, 0),
        r.cyl(n, d, 0.36, 0.36, 1, 1.04, 10),
        e.circle(n, d, 0.36, 0, 1.05),
        c(e, {
          x: n - 0.55,
          z: d,
          rot: Math.PI / 2,
          pose: `stand`,
          palette: `office`,
          hold: 16042058,
        }),
        c(e, {
          x: n + 0.5,
          z: d - 0.2,
          rot: -Math.PI / 2,
          pose: `lean`,
          palette: `office`,
          hold: 16042058,
        }));
  t.menuKey &&
    G(e, { x: t.o1 - 0.35, z: t.face - 0.4, key: t.menuKey, rot: -0.3 });
}
