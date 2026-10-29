// tokyo/assets/region-tokyo-A7LxHjud 173 — col
// Lines 71008-71285 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* Rhe(e, t) {
  let n = e.coarse ? 3 : 5,
    r = e.coarse ? PT : PT / 2,
    i = (e, t) => [_T(xT + 23.4 * e), FT(e, t), vT(t)];
  for (let t of [!1, !0]) {
    t
      ? e.col(16184816).mat(0.7, 0, 0.2, 0)
      : e.col(15658730).mat(0.6, 0, 0.22, 1);
    for (let a = yT; a < 71.999; a += r) {
      let o = Math.min(bT, a + r);
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
  for (let t = yT; t <= 72.001; t += PT) {
    for (let n = 0; n + 1 < a.length; n++) {
      let r = i(a[n], t),
        o = i(a[n + 1], t);
      e.rod(r[0], r[1] - 0.12, r[2], o[0], o[1] - 0.12, o[2], 0.3, 4);
    }
    e.coarse || e.cylY(_T(21.8), vT(t), CT, 13.7, 0.32, 8);
  }
  for (let t = yT; t < 71.999; t += PT) {
    let n = Math.min(bT, t + PT),
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
  for (let t = -48, n = 0; t < bT; t += 20, n++) {
    let n = i(1, t),
      r = _T(35),
      a = vT(t + 5);
    (e.rod(r, 0, a, n[0], n[1] - 0.2, n[2], 0.32, 8, 0.22),
      e.pole(r, a, 0.4, 0, 6),
      e.coarse || e.cylY(r, a, 0, 0.5, 0.55, 8));
  }
}
function* zhe(e, t) {
  if (
    (e.col(15132386).mat(0.6, 0.1, 0.1, G),
    e.box(_T(xT), 6.699999999999999, vT(yT), _T(ST), CT, vT(bT)),
    e
      .col(12567234)
      .mat(0.8, 0, 0, 0)
      .flat(
        _T(xT),
        vT(yT),
        _T(ST),
        vT(bT),
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
        _T(28) - 0.3,
        vT(t) - 0.3,
        _T(28) + 0.3,
        vT(t) + 0.3,
        6.68,
        e.white,
        0,
        0,
        !1,
      );
  }
  (e.col(16777215).mat(0.5, 0, 0.35, G),
    e.panel(
      _T(ST) + 0.02,
      vT(-5.8),
      _T(ST) + 0.02,
      vT(-14.2),
      5.65,
      7.7,
      t.c(`signYaesu`),
    ),
    e.col(11125708).mat(0.15, 0.3, 0.05, 1),
    e.box(_T(ST) - 0.08, CT, vT(yT), _T(ST), 8.7, vT(bT)),
    e.col(14212060).mat(0.4, 0.6, 0, 0),
    e.box(_T(ST) - 0.12, 8.7, vT(yT), _T(ST) + 0.04, 8.799999999999999, vT(bT)),
    e.col(13948630).mat(0.5, 0.2, 0.05, 1));
  for (let t = -53; t < bT; t += 13)
    (e.coarse || e.cylY(_T(30.6), vT(t), 0, 6.699999999999999, 0.45, 10),
      e.pole(_T(30.6), vT(t), 0.5, 0, 6.699999999999999));
  for (let [n, r] of [
    [yT, -38],
    [52, bT],
  ])
    (e.col(16777215).mat(0.2, 0.3, 0.2, G),
      e.box(
        _T(21),
        CT,
        vT(n),
        _T(29),
        12.399999999999999,
        vT(r),
        t.c(`glass`),
        3,
        2.4,
        e.white,
      ),
      e.col(14212060).mat(0.4, 0.5, 0, 0),
      e.box(
        _T(20.8),
        12.399999999999999,
        vT(n) - 0.2,
        _T(29.2),
        12.899999999999999,
        vT(r) + 0.2,
      ));
}
function* Bhe(e, t) {
  let n = t.c(`paving`),
    r = e.coarse ? 16 : 4;
  if (
    (e.col(16777215).mat(0.85, 0, 0.03, G),
    NT(e, 19.4, -60, TT, 74, jT, n, r),
    NT(e, TT, -60, DT, OT, jT, n, r),
    NT(e, TT, kT, DT, 74, jT, n, r),
    NT(e, ET, -48, DT, 62, jT, n, r),
    e.col(Ihe).mat(0.9, 0, 0, 0),
    NT(e, TT, OT, ET, kT, 0.03),
    NT(e, ET, OT, DT, -48, 0.03),
    NT(e, ET, 62, DT, kT, 0.03),
    e.col(Lhe).mat(0.85, 0, 0.04, 0),
    e.box(_T(TT), 0, vT(OT), _T(TT) + 0.3, 0.13, vT(kT)),
    e.box(_T(ET) - 0.3, 0, vT(-48), _T(ET), 0.13, vT(62)),
    e.box(_T(AT.x0), 0, vT(AT.z0), _T(AT.x1), MT, vT(AT.z1)),
    e.col(16777215).mat(0.85, 0, 0.03, G),
    NT(
      e,
      AT.x0 + 0.25,
      AT.z0 + 0.25,
      AT.x1 - 0.25,
      AT.z1 - 0.25,
      0.18000000000000002,
      n,
      r,
    ),
    yield,
    e.coarse)
  )
    return;
  for (let n of [14, 30, 46]) pT(e, t, _T(AT.x0 + 1.3), vT(n), 9, -1, MT);
  (mT(e, t.c(`signTaxi`), _T(33), vT(-30), Math.PI / 2),
    mT(e, t.c(`signTaxi`), _T(33), vT(-6), Math.PI / 2),
    e.col(9212310).mat(0.4, 0.6, 0, 0));
  for (let t = -48; t <= -4; t += 4)
    e.obox(_T(31.8), 0.5, vT(t), 0.04, 0.5, 0.04);
  (e.box(_T(31.759999999999998), 0.95, vT(-48), _T(31.84), 1, vT(-4)),
    e.col(1974049).mat(0.5, 0.5, 0, 0));
  for (let t = -47; t <= 61; t += 3.2)
    e.obox(_T(61.95), 0.4, vT(t), 0.08, 0.4, 0.08);
  let i = 0.045;
  (e.col(14726144).mat(0.7, 0, 0.02, 0), NT(e, 36.8, -50, 36.95, -2, i));
  for (let t = -50; t <= -2; t += 6) NT(e, 34.3, t, 36.95, t + 0.15, i);
  e.col(15263970).mat(0.7, 0, 0.02, 0);
  for (let t of [38.5, 41.5, 44.5, 47.5, 50.5, 53.5])
    for (let n = -50; n < 0; n += 4) NT(e, t, n, t + 0.15, n + 2.2, i);
  for (let t of [41, 52.5])
    for (let n = 4; n < 66; n += 4) NT(e, t, n, t + 0.15, n + 2.2, i);
  for (let t of [4, 66])
    for (let n = 34.6; n < AT.x0 - 0.4; n += 1.2)
      NT(e, n, t - 2, n + 0.6, t + 2, i);
  e.col(14211282).mat(0.7, 0, 0.02, 0);
  for (let t of [8, 24, 40, 56])
    (NT(e, AT.x0 - 3.2, t, AT.x0 - 0.2, t + 0.15, i),
      NT(e, AT.x0 - 3.2, t + 12, AT.x0 - 0.2, t + 12.15, i));
}
function* Vhe(e, t) {
  (yield* Bhe(e, t),
    yield,
    yield* zhe(e, t),
    yield,
    yield* Rhe(e, t),
    e.solid(
      _T(xT),
      vT(yT),
      _T(ST),
      vT(bT),
      6.699999999999999,
      8.799999999999999,
    ));
}
function Hhe(e, t) {
  e.col(15789800).mat(0.6, 0, 0.4, 1);
  let n = (e, t) => [_T(xT + 23.4 * e), FT(e, t), vT(t)];
  for (let t = yT; t < 71.999; t += 26) {
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
    .box(_T(xT), 6.699999999999999, vT(yT), _T(ST), CT, vT(bT));
}
