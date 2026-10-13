// tokyo__assets__region-tokyo-BcM3fReU 131 — col
// Lines 58376-58653 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function* xj(e, t) {
  let n = e.coarse ? 3 : 5,
    r = e.coarse ? yj : yj / 2,
    i = (e, t) => [QA(nj + 23.4 * e), bj(e, t), $A(t)];
  for (let t of [!1, !0]) {
    t
      ? e.col(16184816).mat(0.7, 0, 0.2, 0)
      : e.col(15658730).mat(0.6, 0, 0.22, 1);
    for (let a = ej; a < 71.999; a += r) {
      let o = Math.min(tj, a + r);
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
  for (let t = ej; t <= 72.001; t += yj) {
    for (let n = 0; n + 1 < a.length; n++) {
      let r = i(a[n], t),
        o = i(a[n + 1], t);
      e.rod(r[0], r[1] - 0.12, r[2], o[0], o[1] - 0.12, o[2], 0.3, 4);
    }
    e.coarse || e.cylY(QA(21.8), $A(t), aj, 13.7, 0.32, 8);
  }
  for (let t = ej; t < 71.999; t += yj) {
    let n = Math.min(tj, t + yj),
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
  for (let t = -48, n = 0; t < tj; t += 20, n++) {
    let n = i(1, t),
      r = QA(35),
      a = $A(t + 5);
    (e.rod(r, 0, a, n[0], n[1] - 0.2, n[2], 0.32, 8, 0.22),
      e.pole(r, a, 0.4, 0, 6),
      e.coarse || e.cylY(r, a, 0, 0.5, 0.55, 8));
  }
}
function* Sj(e, t) {
  if (
    (e.col(15132386).mat(0.6, 0.1, 0.1, Y),
    e.box(QA(nj), 6.699999999999999, $A(ej), QA(ij), aj, $A(tj)),
    e
      .col(12567234)
      .mat(0.8, 0, 0, 0)
      .flat(
        QA(nj),
        $A(ej),
        QA(ij),
        $A(tj),
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
        QA(28) - 0.3,
        $A(t) - 0.3,
        QA(28) + 0.3,
        $A(t) + 0.3,
        6.68,
        e.white,
        0,
        0,
        !1,
      );
  }
  (e.col(16777215).mat(0.5, 0, 0.35, Y),
    e.panel(
      QA(ij) + 0.02,
      $A(-5.8),
      QA(ij) + 0.02,
      $A(-14.2),
      5.65,
      7.7,
      t.c(`signYaesu`),
    ),
    e.col(11125708).mat(0.15, 0.3, 0.05, 1),
    e.box(QA(ij) - 0.08, aj, $A(ej), QA(ij), 8.7, $A(tj)),
    e.col(14212060).mat(0.4, 0.6, 0, 0),
    e.box(QA(ij) - 0.12, 8.7, $A(ej), QA(ij) + 0.04, 8.799999999999999, $A(tj)),
    e.col(13948630).mat(0.5, 0.2, 0.05, 1));
  for (let t = -53; t < tj; t += 13)
    (e.coarse || e.cylY(QA(30.6), $A(t), 0, 6.699999999999999, 0.45, 10),
      e.pole(QA(30.6), $A(t), 0.5, 0, 6.699999999999999));
  for (let [n, r] of [
    [ej, -38],
    [52, tj],
  ])
    (e.col(16777215).mat(0.2, 0.3, 0.2, Y),
      e.box(
        QA(21),
        aj,
        $A(n),
        QA(29),
        12.399999999999999,
        $A(r),
        t.c(`glass`),
        3,
        2.4,
        e.white,
      ),
      e.col(14212060).mat(0.4, 0.5, 0, 0),
      e.box(
        QA(20.8),
        12.399999999999999,
        $A(n) - 0.2,
        QA(29.2),
        12.899999999999999,
        $A(r) + 0.2,
      ));
}
function* Cj(e, t) {
  let n = t.c(`paving`),
    r = e.coarse ? 16 : 4;
  if (
    (e.col(16777215).mat(0.85, 0, 0.03, Y),
    vj(e, 19.4, -60, cj, 74, gj, n, r),
    vj(e, cj, -60, uj, dj, gj, n, r),
    vj(e, cj, fj, uj, 74, gj, n, r),
    vj(e, lj, -48, uj, 62, gj, n, r),
    e.col(mj).mat(0.9, 0, 0, 0),
    vj(e, cj, dj, lj, fj, 0.03),
    vj(e, lj, dj, uj, -48, 0.03),
    vj(e, lj, 62, uj, fj, 0.03),
    e.col(hj).mat(0.85, 0, 0.04, 0),
    e.box(QA(cj), 0, $A(dj), QA(cj) + 0.3, 0.13, $A(fj)),
    e.box(QA(lj) - 0.3, 0, $A(-48), QA(lj), 0.13, $A(62)),
    e.box(QA(pj.x0), 0, $A(pj.z0), QA(pj.x1), _j, $A(pj.z1)),
    e.col(16777215).mat(0.85, 0, 0.03, Y),
    vj(
      e,
      pj.x0 + 0.25,
      pj.z0 + 0.25,
      pj.x1 - 0.25,
      pj.z1 - 0.25,
      0.18000000000000002,
      n,
      r,
    ),
    yield,
    e.coarse)
  )
    return;
  for (let n of [14, 30, 46]) WA(e, t, QA(pj.x0 + 1.3), $A(n), 9, -1, _j);
  (GA(e, t.c(`signTaxi`), QA(33), $A(-30), Math.PI / 2),
    GA(e, t.c(`signTaxi`), QA(33), $A(-6), Math.PI / 2),
    e.col(9212310).mat(0.4, 0.6, 0, 0));
  for (let t = -48; t <= -4; t += 4)
    e.obox(QA(31.8), 0.5, $A(t), 0.04, 0.5, 0.04);
  (e.box(QA(31.759999999999998), 0.95, $A(-48), QA(31.84), 1, $A(-4)),
    e.col(1974049).mat(0.5, 0.5, 0, 0));
  for (let t = -47; t <= 61; t += 3.2)
    e.obox(QA(61.95), 0.4, $A(t), 0.08, 0.4, 0.08);
  let i = 0.045;
  (e.col(14726144).mat(0.7, 0, 0.02, 0), vj(e, 36.8, -50, 36.95, -2, i));
  for (let t = -50; t <= -2; t += 6) vj(e, 34.3, t, 36.95, t + 0.15, i);
  e.col(15263970).mat(0.7, 0, 0.02, 0);
  for (let t of [38.5, 41.5, 44.5, 47.5, 50.5, 53.5])
    for (let n = -50; n < 0; n += 4) vj(e, t, n, t + 0.15, n + 2.2, i);
  for (let t of [41, 52.5])
    for (let n = 4; n < 66; n += 4) vj(e, t, n, t + 0.15, n + 2.2, i);
  for (let t of [4, 66])
    for (let n = 34.6; n < pj.x0 - 0.4; n += 1.2)
      vj(e, n, t - 2, n + 0.6, t + 2, i);
  e.col(14211282).mat(0.7, 0, 0.02, 0);
  for (let t of [8, 24, 40, 56])
    (vj(e, pj.x0 - 3.2, t, pj.x0 - 0.2, t + 0.15, i),
      vj(e, pj.x0 - 3.2, t + 12, pj.x0 - 0.2, t + 12.15, i));
}
function* wj(e, t) {
  (yield* Cj(e, t),
    yield,
    yield* Sj(e, t),
    yield,
    yield* xj(e, t),
    e.solid(
      QA(nj),
      $A(ej),
      QA(ij),
      $A(tj),
      6.699999999999999,
      8.799999999999999,
    ));
}
function Tj(e, t) {
  e.col(15789800).mat(0.6, 0, 0.4, 1);
  let n = (e, t) => [QA(nj + 23.4 * e), bj(e, t), $A(t)];
  for (let t = ej; t < 71.999; t += 26) {
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
    .box(QA(nj), 6.699999999999999, $A(ej), QA(ij), aj, $A(tj));
}
