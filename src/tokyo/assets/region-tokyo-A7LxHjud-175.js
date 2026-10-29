// tokyo/assets/region-tokyo-A7LxHjud 175 — math
// Lines 71581-71835 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function tge(e, t) {
  let n = t.c(`granite`),
    r = [],
    i = e.coarse ? 1 : 0.5;
  for (let e = -7; e <= 7.000001; e += i) r.push(e);
  let a = Math.sqrt(GT * GT - 10.368399999999998);
  for (let e of [-3.95, WT])
    for (let t of [e - a, e + a]) Math.abs(t) < UT && r.push(t);
  (r.sort((e, t) => e - t), e.col(tE).mat(0.82, 0, 0.05, G));
  for (let t = 0; t + 1 < r.length; t++) {
    let i = r[t],
      a = r[t + 1];
    if (a - i < 0.001) continue;
    let o = oE((i + a) / 2),
      s = o === null ? HT : (oE(i + 1e-4) ?? HT),
      c = o === null ? HT : (oE(a - 1e-4) ?? HT),
      l = Math.floor(-a / 2),
      u = -a / 2 - l,
      d = Math.min(1, -i / 2 - l);
    sE(
      e,
      [
        [a, c, 0],
        [i, s, 0],
        [i, qT, 0],
        [a, qT, 0],
      ],
      [0, 0, -1],
      n,
      u,
      (c + 2) / 2,
      d,
      1.95 / 2,
    );
  }
  e.col(rE).mat(0.7, 0, 0, 0);
  for (let [t, n] of [
    [-7, -6.75],
    [6.75, UT],
  ])
    sE(
      e,
      [
        [n, HT, -0.03],
        [t, HT, -0.03],
        [t, -1.25, -0.03],
        [n, -1.25, -0.03],
      ],
      [0, 0, -1],
    );
  let o = e.seg(15),
    s = Math.asin(3.42 / GT);
  for (let t of [-3.95, WT]) {
    for (let n = 0; n < o; n++) {
      let r = s + ((Math.PI - 2 * s) * n) / o,
        i = s + ((Math.PI - 2 * s) * (n + 1)) / o,
        a = (e, n) => [t + Math.cos(e) * n, KT + Math.sin(e) * n, -0.04];
      if (
        (e.col(n % 2 ? tE : 13815233).mat(0.8, 0, iE, G),
        sE(e, [a(r, GT), a(i, GT), a(i, 4.96), a(r, 4.96)], [0, 0, -1]),
        !e.coarse)
      ) {
        let n = (e, n) => [t + Math.cos(e) * GT, KT + Math.sin(e) * GT, n];
        sE(
          e,
          [n(r, -0.04), n(i, -0.04), n(i, 0), n(r, 0)],
          [-Math.cos((r + i) / 2), -Math.sin((r + i) / 2), 0],
        );
      }
    }
    (e.col(tE).mat(0.8, 0, iE, G),
      e.box(
        t - 0.24,
        -0.36999999999999966,
        -0.12,
        t + 0.24,
        0.07000000000000038,
        0,
      ));
  }
  let c = e.seg(10);
  e.col(nE).mat(0.85, 0, iE, G);
  let l = [];
  for (let e = 0; e <= c; e++)
    l.push(
      Math.cos((e / c) * Math.PI) * 0.9,
      -Math.sin((e / c) * Math.PI) * 0.9,
    );
  let u = -0.75;
  for (let t = 0; t < c; t++) {
    let [n, r, i, a] = [l[t * 2], l[t * 2 + 1], l[t * 2 + 2], l[t * 2 + 3]],
      o = (n + i) / 2,
      s = (r + a) / 2;
    sE(
      e,
      [
        [n, HT, r],
        [i, HT, a],
        [i, u, a],
        [n, u, r],
      ],
      [o, 0, s],
    );
    let c = 0.62,
      d = -0.53,
      f = -0.39;
    (sE(
      e,
      [
        [n, u, r],
        [i, u, a],
        [(c / 0.9) * i, d, (c / 0.9) * a],
        [(c / 0.9) * n, d, (c / 0.9) * r],
      ],
      [o, 0.6, s],
    ),
      sE(
        e,
        [
          [(c / 0.9) * n, d, (c / 0.9) * r],
          [(c / 0.9) * i, d, (c / 0.9) * a],
          [i * 0.05, f, a * 0.05],
          [n * 0.05, f, r * 0.05],
        ],
        [o * 0.4, 1, s * 0.4],
      ));
  }
  if (!e.coarse) {
    e.col(rE).mat(0.7, 0, 0, 0);
    for (let t = 0; t < c; t++) {
      let [n, r, i, a] = [
        l[t * 2] * 1.03,
        l[t * 2 + 1] * 1.03,
        l[t * 2 + 2] * 1.03,
        l[t * 2 + 3] * 1.03,
      ];
      sE(
        e,
        [
          [n, HT, r],
          [i, HT, a],
          [i, -1.2, a],
          [n, -1.2, r],
        ],
        [(n + i) / 2, 0, (r + a) / 2],
      );
    }
  }
  if (
    (e.col(tE).mat(0.8, 0, 0.06, G),
    e.box(-8.75, qT, -0.26, QT, JT, 0.3, t.c(`granite`), 2, 2),
    !e.coarse)
  ) {
    e.col(nE).emis(iE);
    for (let t = -6.65; t < UT; t += 0.7)
      Math.abs(t) > 1.4500000000000002 &&
        Math.abs(Math.abs(t) - WT) > 0.4 &&
        e.box(t - 0.09, -0.2, -0.18, t + 0.09, qT, 0);
  }
}
function fE(e, t, n, r) {
  let i = t.c(`granite`);
  (e.col(tE).mat(0.8, 0, 0.06, G),
    e.box(n, BT, -0.14, r, 0.62, 0.74, i, 2, 2, i),
    e.box(n, 1.06, -0.2, r, YT, 0.8, i, 2, 2, i),
    e.box(n, 1, -0.11000000000000001, r, 1.06, 0.71));
  let a = Math.max(1, Math.round((r - n) / 2.6)),
    o = (r - n) / a;
  for (let t = 0; t <= a; t++) {
    let a = n + o * t,
      s = Math.max(n, a - 0.24),
      c = Math.min(r, a + 0.24);
    e.box(s, 0.62, -0.18000000000000002, c, 1.06, 0.78, i, 2, 2);
  }
  if (e.coarse) {
    (e.col(7302244).mat(0.9, 0, 0, 0),
      e.box(n, 0.62, 0.07999999999999999, r, 1, 0.52));
    return;
  }
  e.col(nE).mat(0.82, 0, iE, G);
  for (let t = 0; t < a; t++) {
    let r = n + o * t + 0.24,
      i = n + o * (t + 1) - 0.24,
      a = Math.max(1, Math.round((i - r) / 0.43));
    for (let t = 0; t < a; t++)
      dE(
        e,
        r + ((t + 0.5) * (i - r)) / a,
        0.3,
        [0.075, 0.62, 0.11, 0.74, 0.05, 0.93, 0.085, 1],
      );
  }
}
function pE(e, t, n, r, i, a = 1) {
  e.push();
  let o = e.coarse ? 4 : 6;
  (aE(e),
    e.lathe(
      n,
      i,
      [0.012 * a, r - 0.06 * a, 0.05 * a, r, 0.15 * a, r + 0.1 * a],
      o,
    ),
    e.col(16777215).mat(0.3, 0, 0.8, G),
    e.lathe(
      n,
      i,
      [0.15 * a, r + 0.1 * a, 0.205 * a, r + 0.28 * a, 0.165 * a, r + 0.46 * a],
      o,
      0,
      t.c(`nbCage`),
      !1,
      !0,
    ),
    aE(e),
    e.lathe(
      n,
      i,
      [
        0.15 * a,
        r + 0.46 * a,
        0.285 * a,
        r + 0.495 * a,
        0.13 * a,
        r + 0.57 * a,
        0.05 * a,
        r + 0.7 * a,
        0.032 * a,
        r + 0.82 * a,
        0.004 * a,
        r + 0.93 * a,
      ],
      o,
    ),
    e.pop());
}
function mE(e, t, n) {
  let r = e.coarse ? 2 : 4,
    i = (e) => {
      let n = 1 - e,
        r = n * n * n,
        i = 3 * n * n * e,
        a = 3 * n * e * e,
        o = e * e * e;
      return [0, 1, 2].map(
        (e) => r * t[0][e] + i * t[1][e] + a * t[2][e] + o * t[3][e],
      );
    },
    a = i(0);
  for (let t = 1; t <= r; t++) {
    let o = i(t / r);
    (e.rod(a[0], a[1], a[2], o[0], o[1], o[2], n * (1 - (t / r) * 0.25), 4),
      (a = o));
  }
}
