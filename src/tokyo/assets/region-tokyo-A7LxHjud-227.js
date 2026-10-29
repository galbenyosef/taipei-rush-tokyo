// tokyo/assets/region-tokyo-A7LxHjud 227 — col
// Lines 87746-88056 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var VP = [
    [11565626, 14264410, 9067050, 15255696],
    [15260072, 13123626, 15918792, 10119738],
    [13123626, 2771594, 15255648, 1842204],
    [15259808, 8034890, 14202992, 5929530],
    [13146714, 6965802, 15255696, 3811866],
    [14170730, 3836632, 15913546, 4896874],
  ],
  HP = [2240602, 11020318, 2968117, 3811872];
function UP(e, t, n, r, i, a, o, s) {
  t > 0 ? e.panel(n, r, n, i, a, o, s) : e.panel(-n, i, -n, r, a, o, s);
}
function Rbe(e, t, n, r, i, a, o, s, c, l) {
  t > 0
    ? e.wall(n, r, n, i, a, o, s, c, l)
    : e.wall(-n, i, -n, r, a, o, s, c, l);
}
function WP(e, t, n, r, i, a, o, s, c = !1) {
  e.box(
    Math.min(t * n, t * a),
    r,
    i,
    Math.max(t * n, t * a),
    o,
    s,
    e.white,
    0,
    0,
    null,
    c,
  );
}
function zbe(e, t, n, r, i, a, o, s) {
  let c = s - 0.62,
    l = VP[a][3];
  if (
    (e.col(l, 0.78).mat(0.85, 0, 0.7, lP),
    UP(e, n, 7.95, r, i, 0, c),
    e.col(15261900).mat(0.8, 0, 0.6, lP),
    e.flat(
      Math.min(n * 5.8, n * 7.95),
      r,
      Math.max(n * 5.8, n * 7.95),
      i,
      c,
      e.white,
      0,
      0,
      !1,
    ),
    !e.coarse)
  ) {
    (e.col(14208440).mat(0.85, 0, 0.25, lP),
      n > 0
        ? (e.panel(CP, r, 7.95, r, 0, c), e.panel(7.95, i, CP, i, 0, c))
        : (e.panel(-7.95, r, -5.45, r, 0, c),
          e.panel(-5.45, i, -7.95, i, 0, c)),
      e.col(9077624).mat(0.9, 0, 0, 0),
      e.flat(
        Math.min(n * CP, n * 7.95),
        r,
        Math.max(n * CP, n * 7.95),
        i,
        0.04,
      ));
    let t = VP[a];
    (e.col(5913638).mat(0.7, 0, 0.08, lP),
      WP(e, n, 5.6000000000000005, 0, r + 0.25, 6.5, 0.85, i - 0.25));
    let s = 3 + o.int(0, 2),
      l = (i - r - 0.6) / s;
    for (let i = 0; i < s; i++) {
      let a = r + 0.3 + i * l,
        s = 0.12 + o.next() * 0.25;
      (e.col(t[i % 3], 0.9 + o.next() * 0.2).mat(0.6, 0, 0.3, lP),
        WP(
          e,
          n,
          5.67 + o.next() * 0.1,
          0.85,
          a + 0.04,
          6.43,
          0.85 + s,
          a + l - 0.04,
        ));
    }
    for (let a of [1.1, 1.75]) {
      (e.col(6965808).mat(0.8, 0, 0.1, lP),
        WP(e, n, 7.5, a, r + 0.1, 7.95 - 0.02, a + 0.05, i - 0.1));
      let s = 3 + o.int(0, 3),
        c = (i - r - 0.3) / s;
      for (let i = 0; i < s; i++)
        (e.col(t[(i + 1) % 3], 0.85 + o.next() * 0.3).mat(0.6, 0, 0.35, lP),
          WP(
            e,
            n,
            7.55,
            a + 0.05,
            r + 0.15 + i * c + 0.03,
            7.9,
            a + 0.25 + o.next() * 0.25,
            r + 0.15 + (i + 1) * c - 0.03,
          ));
    }
    if (a === 2) {
      let a = 7.92;
      for (let o = 0; o < 3; o++) {
        let s = r + ((i - r) * (o + 0.5)) / 3,
          c = 2.05;
        e.col(t[o], 1).mat(0.6, 0, 0.35, lP);
        let l = 0.36;
        for (let t = 0; t < 5; t++) {
          let r = cP * 0.15 + (cP * 0.7 * t) / 5,
            i = cP * 0.15 + (cP * 0.7 * (t + 1)) / 5,
            o = [s + Math.cos(r) * l, c + Math.sin(r) * l],
            u = [s + Math.cos(i) * l, c + Math.sin(i) * l];
          n > 0
            ? e.triFace(
                7.92,
                1.9999999999999998,
                s,
                a,
                o[1],
                o[0],
                a,
                u[1],
                u[0],
              )
            : e.triFace(
                -7.92,
                1.9999999999999998,
                s,
                -7.92,
                u[1],
                u[0],
                -7.92,
                o[1],
                o[0],
              );
        }
      }
    }
  }
  (NP(e, 0.18), WP(e, n, 5.37, c, r, 5.8, s, i, !0));
  let u = Math.min(2.4, i - r - 0.5),
    d = (r + i) / 2;
  if (
    (e.push().col(16777215).mat(0.5, 0, 0.45, G),
    UP(
      e,
      n,
      5.3100000000000005,
      d - u / 2,
      d + u / 2,
      c + 0.03,
      s - 0.03,
      t.boards[a],
    ),
    e.pop(),
    !e.coarse && o.chance(0.45))
  ) {
    e.col(HP[o.int(0, HP.length - 1)]).mat(0.85, 0, 0.12, lP);
    let t = Math.min(2.4, i - r - 0.6);
    for (let r = 0; r < 3; r++)
      UP(
        e,
        n,
        5.25,
        d - t / 2 + (t * r) / 3 + 0.03,
        d - t / 2 + (t * (r + 1)) / 3 - 0.03,
        c - 0.55,
        c,
        e.white,
      );
  }
}
function* GP(e, t, n, r, i, a) {
  let o = 3.3,
    s = 6.5,
    c = i - r,
    l = Math.max(1, Math.round(c / 3.7)),
    u = c / l,
    d = new le(de(`nakamise`, a));
  for (let t = 0; t <= l; t++) {
    let i = r + t * u;
    (NP(e, 0.2), WP(e, n, 5.3500000000000005, 0, i - 0.17, 5.75, o, i + 0.17));
  }
  for (let i = 0; i < l; i++)
    zbe(e, t, n, r + i * u + 0.17, r + (i + 1) * u - 0.17, d.int(0, 5), d, o);
  (yield,
    e.col(fP).mat(0.85, 0, 0.1, lP),
    Rbe(e, n, 6, r, i, 3.65, s, t.plaster, 2, 3),
    NP(e, 0.16),
    WP(e, n, 5.88, 6.05, r, 6.05, s, i),
    WP(e, n, 5.88, 3.65, r, 6.05, 3.92, i));
  for (let t = 0; t <= l; t++) {
    let i = r + t * u;
    WP(e, n, 5.86, 3.65, i - 0.14, 6.05, s, i + 0.14);
  }
  if (!e.coarse) {
    e.col(16777215).mat(0.6, 0, 0.6, G | 32);
    for (let i = 0; i < l; i++) {
      let a = r + (i + 0.5) * u;
      UP(e, n, 5.97, a - 0.85, a + 0.85, 4.35, 5.65, t.shoji);
    }
  }
  for (let [a, c] of [
    [r, -1],
    [i, 1],
  ]) {
    let r = a + c * 0.001;
    e.col(uP, 0.9).mat(0.6, 0, 0.16, lP);
    let i = n * CP,
      l = n * wP;
    (c < 0 == n > 0 ? e.panel(l, r, i, r, 0, o) : e.panel(i, r, l, r, 0, o),
      e.col(fP).mat(0.85, 0, 0.08, lP),
      c < 0 == n > 0
        ? e.wall(n * wP, r, n * 6, r, o, s, t.plaster, 2, 3)
        : e.wall(n * 6, r, n * wP, r, o, s, t.plaster, 2, 3));
  }
  let f = Math.min(n * wP, n * TP),
    p = Math.max(n * wP, n * TP),
    m = [14209992, 13616822, 14867922, 12893358];
  for (let a = r; a < i - 0.001;) {
    let r = a + 8 + d.next() * 4;
    r > i - 4 && (r = i);
    let o = 6.8 + d.int(0, 2) * 1.4;
    if (
      (e.col(m[d.int(0, m.length - 1)]).mat(0.85, 0, 0.04, lP),
      e.wall(p, a, f, a, 0, o, t.plaster, 4, 3.5),
      e.wall(f, r, p, r, 0, o, t.plaster, 4, 3.5),
      e.wall(f, a, f, r, 0, o, t.plaster, 4, 3.5),
      e.wall(p, r, p, a, 0, o, t.plaster, 4, 3.5),
      e.col(9342088).mat(0.9, 0, 0, 0).flat(f, a, p, r, o),
      !e.coarse)
    ) {
      e.col(12105392).mat(0.85, 0, 0, 0);
      let t = n * (15.45 + d.next() * 4),
        i = (a + r) / 2;
      e.box(t - 1.3, o + 0.03, i - 1, t + 1.3, o + 1.5, i + 1);
    }
    a = r;
  }
  (yield, MP(e, 0.02));
  let h = jP(t, gP, dP),
    g = (r + i) / 2;
  if (
    (sC(
      e,
      n * 5.7,
      g,
      3.25,
      c / 2 + 0.25,
      1.15,
      {
        ...h,
        rise: 0.55,
        R: c / 2 + 0.25,
        ridgeH: 0,
        eave: 0.9,
        sori: 0.03,
        curve: 1.1,
        thick: 0.18,
        rows: 2,
      },
      cP / 2,
    ),
    sC(
      e,
      n * 8.95,
      g,
      6.4,
      c / 2 + 0.4,
      3.55,
      {
        ...h,
        rise: 2,
        curve: 1.2,
        sori: 0.12,
        eave: 0.8,
        thick: 0.25,
        ridgeH: 0.4,
        rows: 3,
      },
      cP / 2,
    ),
    !e.coarse)
  ) {
    for (let i = 0; i <= l; i++) FP(e, t, n * 4.8, 2.98, r + i * u);
    (e.push().col(dP).mat(0.7, 0, 0.35, lP),
      WP(e, n, 4.6000000000000005, 3.05, r, 5.37, 3.07, i),
      e.pop());
  }
  e.solid(
    Math.min(n * 5.3500000000000005, n * TP),
    r - 0.2,
    Math.max(n * 5.3500000000000005, n * TP),
    i + 0.2,
    0,
    9,
  );
}
function* Bbe(e, t) {
  let n = AP(t);
  (yield* Lbe(e, n),
    yield,
    yield* GP(e, n, 1, -30.2, -10.45, 1),
    yield* GP(e, n, 1, 0.45, 36.6, 2),
    yield* GP(e, n, -1, -30.2, 3, 3),
    yield* GP(e, n, -1, 7, 36.6, 4));
  for (let t of [-1, 1]) Vbe(e, n, t, +(t < 0));
}
