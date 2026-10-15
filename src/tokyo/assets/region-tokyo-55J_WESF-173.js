// tokyo/assets/region-tokyo-55J_WESF 173 — col
// Lines 70917-71194 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* Ehe(e, t) {
  let n = e.coarse ? 3 : 5,
    r = e.coarse ? jT : jT / 2,
    i = (e, t) => [mT(vT + 23.4 * e), MT(e, t), hT(t)];
  for (let t of [!1, !0]) {
    t
      ? e.col(16184816).mat(0.7, 0, 0.2, 0)
      : e.col(15658730).mat(0.6, 0, 0.22, 1);
    for (let a = gT; a < 71.999; a += r) {
      let o = Math.min(_T, a + r);
      for (let r = 0; r < n; r++) {
        let s = i(r / n, a),
          c = i((r + 1) / n, a),
          l = i((r + 1) / n, o),
          u = i(r / n, o);
        t
          ? e.quad(
              s[0],
              s[1] - 0.05,
              s[2],
              c[0],
              c[1] - 0.05,
              c[2],
              l[0],
              l[1] - 0.05,
              l[2],
              u[0],
              u[1] - 0.05,
              u[2],
            )
          : e.quad(
              s[0],
              s[1],
              s[2],
              u[0],
              u[1],
              u[2],
              l[0],
              l[1],
              l[2],
              c[0],
              c[1],
              c[2],
            );
      }
    }
  }
  (yield, e.col(14212060).mat(0.4, 0.6, 0.08, 1));
  let a = e.coarse ? [0, 0.5, 1] : [0, 0.2, 0.4, 0.6, 0.8, 1];
  for (let t = gT; t <= 72.001; t += jT) {
    for (let n = 0; n + 1 < a.length; n++) {
      let r = i(a[n], t),
        o = i(a[n + 1], t);
      e.rod(r[0], r[1] - 0.12, r[2], o[0], o[1] - 0.12, o[2], 0.3, 4);
    }
    e.coarse || e.cylY(mT(21.8), hT(t), bT, 13.7, 0.32, 8);
  }
  for (let t = gT; t < 71.999; t += jT) {
    let n = Math.min(_T, t + jT),
      r = i(1, t),
      a = i(1, n);
    if (
      (e.rod(r[0], r[1], r[2], a[0], a[1], a[2], 0.38, e.coarse ? 4 : 6),
      e.coarse)
    )
      continue;
    let o = i(0, t),
      s = i(0, n);
    e.rod(o[0], o[1], o[2], s[0], s[1], s[2], 0.3, 4);
  }
  for (let t = -48, n = 0; t < _T; t += 20, n++) {
    let n = i(1, t),
      r = mT(35),
      a = hT(t + 5);
    (e.rod(r, 0, a, n[0], n[1] - 0.2, n[2], 0.32, 8, 0.22),
      e.pole(r, a, 0.4, 0, 6),
      e.coarse || e.cylY(r, a, 0, 0.5, 0.55, 8));
  }
}
function* Dhe(e, t) {
  if (
    (e.col(15132386).mat(0.6, 0.1, 0.1, G),
    e.box(mT(vT), 6.699999999999999, hT(gT), mT(yT), bT, hT(_T)),
    e
      .col(12567234)
      .mat(0.8, 0, 0, 0)
      .flat(
        mT(vT),
        hT(gT),
        mT(yT),
        hT(_T),
        6.699999999999999,
        e.white,
        0,
        0,
        !1,
      ),
    !e.coarse)
  ) {
    e.col(16774364).mat(0.4, 0, 0.8, 1);
    for (let t = -54; t < 70; t += 9)
      e.flat(
        mT(28) - 0.3,
        hT(t) - 0.3,
        mT(28) + 0.3,
        hT(t) + 0.3,
        6.68,
        e.white,
        0,
        0,
        !1,
      );
  }
  (e.col(16777215).mat(0.5, 0, 0.35, G),
    e.panel(
      mT(yT) + 0.02,
      hT(-5.8),
      mT(yT) + 0.02,
      hT(-14.2),
      5.65,
      7.7,
      t.c(`signYaesu`),
    ),
    e.col(11125708).mat(0.15, 0.3, 0.05, 1),
    e.box(mT(yT) - 0.08, bT, hT(gT), mT(yT), 8.7, hT(_T)),
    e.col(14212060).mat(0.4, 0.6, 0, 0),
    e.box(mT(yT) - 0.12, 8.7, hT(gT), mT(yT) + 0.04, 8.799999999999999, hT(_T)),
    e.col(13948630).mat(0.5, 0.2, 0.05, 1));
  for (let t = -53; t < _T; t += 13)
    (e.coarse || e.cylY(mT(30.6), hT(t), 0, 6.699999999999999, 0.45, 10),
      e.pole(mT(30.6), hT(t), 0.5, 0, 6.699999999999999));
  for (let [n, r] of [
    [gT, -38],
    [52, _T],
  ])
    (e.col(16777215).mat(0.2, 0.3, 0.2, G),
      e.box(
        mT(21),
        bT,
        hT(n),
        mT(29),
        12.399999999999999,
        hT(r),
        t.c(`glass`),
        3,
        2.4,
        e.white,
      ),
      e.col(14212060).mat(0.4, 0.5, 0, 0),
      e.box(
        mT(20.8),
        12.399999999999999,
        hT(n) - 0.2,
        mT(29.2),
        12.899999999999999,
        hT(r) + 0.2,
      ));
}
function* Ohe(e, t) {
  let n = t.c(`paving`),
    r = e.coarse ? 16 : 4;
  if (
    (e.col(16777215).mat(0.85, 0, 0.03, G),
    AT(e, 19.4, -60, ST, 74, OT, n, r),
    AT(e, ST, -60, wT, TT, OT, n, r),
    AT(e, ST, ET, wT, 74, OT, n, r),
    AT(e, CT, -48, wT, 62, OT, n, r),
    e.col(whe).mat(0.9, 0, 0, 0),
    AT(e, ST, TT, CT, ET, 0.03),
    AT(e, CT, TT, wT, -48, 0.03),
    AT(e, CT, 62, wT, ET, 0.03),
    e.col(The).mat(0.85, 0, 0.04, 0),
    e.box(mT(ST), 0, hT(TT), mT(ST) + 0.3, 0.13, hT(ET)),
    e.box(mT(CT) - 0.3, 0, hT(-48), mT(CT), 0.13, hT(62)),
    e.box(mT(DT.x0), 0, hT(DT.z0), mT(DT.x1), kT, hT(DT.z1)),
    e.col(16777215).mat(0.85, 0, 0.03, G),
    AT(
      e,
      DT.x0 + 0.25,
      DT.z0 + 0.25,
      DT.x1 - 0.25,
      DT.z1 - 0.25,
      0.18000000000000002,
      n,
      r,
    ),
    yield,
    e.coarse)
  )
    return;
  for (let n of [14, 30, 46]) uT(e, t, mT(DT.x0 + 1.3), hT(n), 9, -1, kT);
  (dT(e, t.c(`signTaxi`), mT(33), hT(-30), Math.PI / 2),
    dT(e, t.c(`signTaxi`), mT(33), hT(-6), Math.PI / 2),
    e.col(9212310).mat(0.4, 0.6, 0, 0));
  for (let t = -48; t <= -4; t += 4)
    e.obox(mT(31.8), 0.5, hT(t), 0.04, 0.5, 0.04);
  (e.box(mT(31.759999999999998), 0.95, hT(-48), mT(31.84), 1, hT(-4)),
    e.col(1974049).mat(0.5, 0.5, 0, 0));
  for (let t = -47; t <= 61; t += 3.2)
    e.obox(mT(61.95), 0.4, hT(t), 0.08, 0.4, 0.08);
  let i = 0.045;
  (e.col(14726144).mat(0.7, 0, 0.02, 0), AT(e, 36.8, -50, 36.95, -2, i));
  for (let t = -50; t <= -2; t += 6) AT(e, 34.3, t, 36.95, t + 0.15, i);
  e.col(15263970).mat(0.7, 0, 0.02, 0);
  for (let t of [38.5, 41.5, 44.5, 47.5, 50.5, 53.5])
    for (let n = -50; n < 0; n += 4) AT(e, t, n, t + 0.15, n + 2.2, i);
  for (let t of [41, 52.5])
    for (let n = 4; n < 66; n += 4) AT(e, t, n, t + 0.15, n + 2.2, i);
  for (let t of [4, 66])
    for (let n = 34.6; n < DT.x0 - 0.4; n += 1.2)
      AT(e, n, t - 2, n + 0.6, t + 2, i);
  e.col(14211282).mat(0.7, 0, 0.02, 0);
  for (let t of [8, 24, 40, 56])
    (AT(e, DT.x0 - 3.2, t, DT.x0 - 0.2, t + 0.15, i),
      AT(e, DT.x0 - 3.2, t + 12, DT.x0 - 0.2, t + 12.15, i));
}
function* khe(e, t) {
  (yield* Ohe(e, t),
    yield,
    yield* Dhe(e, t),
    yield,
    yield* Ehe(e, t),
    e.solid(
      mT(vT),
      hT(gT),
      mT(yT),
      hT(_T),
      6.699999999999999,
      8.799999999999999,
    ));
}
function Ahe(e, t) {
  e.col(15789800).mat(0.6, 0, 0.4, 1);
  let n = (e, t) => [mT(vT + 23.4 * e), MT(e, t), hT(t)];
  for (let t = gT; t < 71.999; t += 26) {
    let r = t + 26;
    for (let [i, a] of [
      [0, 0.5],
      [0.5, 1],
    ]) {
      let o = n(i, t),
        s = n(a, t),
        c = n(a, r),
        l = n(i, r);
      (e.quad(
        o[0],
        o[1],
        o[2],
        l[0],
        l[1],
        l[2],
        c[0],
        c[1],
        c[2],
        s[0],
        s[1],
        s[2],
      ),
        e.quad(
          o[0],
          o[1],
          o[2],
          s[0],
          s[1],
          s[2],
          c[0],
          c[1],
          c[2],
          l[0],
          l[1],
          l[2],
        ));
    }
  }
  e.col(15132386)
    .mat(0.6, 0, 0, 0)
    .box(mT(vT), 6.699999999999999, hT(gT), mT(yT), bT, hT(_T));
}
