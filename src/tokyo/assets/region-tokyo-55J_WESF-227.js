// tokyo/assets/region-tokyo-55J_WESF 227 — col
// Lines 87655-87965 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var zP = [
    [11565626, 14264410, 9067050, 15255696],
    [15260072, 13123626, 15918792, 10119738],
    [13123626, 2771594, 15255648, 1842204],
    [15259808, 8034890, 14202992, 5929530],
    [13146714, 6965802, 15255696, 3811866],
    [14170730, 3836632, 15913546, 4896874],
  ],
  BP = [2240602, 11020318, 2968117, 3811872];
function VP(e, t, n, r, i, a, o, s) {
  t > 0 ? e.panel(n, r, n, i, a, o, s) : e.panel(-n, i, -n, r, a, o, s);
}
function Tbe(e, t, n, r, i, a, o, s, c, l) {
  t > 0
    ? e.wall(n, r, n, i, a, o, s, c, l)
    : e.wall(-n, i, -n, r, a, o, s, c, l);
}
function HP(e, t, n, r, i, a, o, s, c = !1) {
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
function Ebe(e, t, n, r, i, a, o, s) {
  let c = s - 0.62,
    l = zP[a][3];
  if (
    (e.col(l, 0.78).mat(0.85, 0, 0.7, sP),
    VP(e, n, 7.95, r, i, 0, c),
    e.col(15261900).mat(0.8, 0, 0.6, sP),
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
    (e.col(14208440).mat(0.85, 0, 0.25, sP),
      n > 0
        ? (e.panel(xP, r, 7.95, r, 0, c), e.panel(7.95, i, xP, i, 0, c))
        : (e.panel(-7.95, r, -5.45, r, 0, c),
          e.panel(-5.45, i, -7.95, i, 0, c)),
      e.col(9077624).mat(0.9, 0, 0, 0),
      e.flat(
        Math.min(n * xP, n * 7.95),
        r,
        Math.max(n * xP, n * 7.95),
        i,
        0.04,
      ));
    let t = zP[a];
    (e.col(5913638).mat(0.7, 0, 0.08, sP),
      HP(e, n, 5.6000000000000005, 0, r + 0.25, 6.5, 0.85, i - 0.25));
    let s = 3 + o.int(0, 2),
      l = (i - r - 0.6) / s;
    for (let i = 0; i < s; i++) {
      let a = r + 0.3 + i * l,
        s = 0.12 + o.next() * 0.25;
      (e.col(t[i % 3], 0.9 + o.next() * 0.2).mat(0.6, 0, 0.3, sP),
        HP(
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
      (e.col(6965808).mat(0.8, 0, 0.1, sP),
        HP(e, n, 7.5, a, r + 0.1, 7.95 - 0.02, a + 0.05, i - 0.1));
      let s = 3 + o.int(0, 3),
        c = (i - r - 0.3) / s;
      for (let i = 0; i < s; i++)
        (e.col(t[(i + 1) % 3], 0.85 + o.next() * 0.3).mat(0.6, 0, 0.35, sP),
          HP(
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
        e.col(t[o], 1).mat(0.6, 0, 0.35, sP);
        let l = 0.36;
        for (let t = 0; t < 5; t++) {
          let r = oP * 0.15 + (oP * 0.7 * t) / 5,
            i = oP * 0.15 + (oP * 0.7 * (t + 1)) / 5,
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
  (jP(e, 0.18), HP(e, n, 5.37, c, r, 5.8, s, i, !0));
  let u = Math.min(2.4, i - r - 0.5),
    d = (r + i) / 2;
  if (
    (e.push().col(16777215).mat(0.5, 0, 0.45, G),
    VP(
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
    e.col(BP[o.int(0, BP.length - 1)]).mat(0.85, 0, 0.12, sP);
    let t = Math.min(2.4, i - r - 0.6);
    for (let r = 0; r < 3; r++)
      VP(
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
function* UP(e, t, n, r, i, a) {
  let o = 3.3,
    s = 6.5,
    c = i - r,
    l = Math.max(1, Math.round(c / 3.7)),
    u = c / l,
    d = new ie(ge(`nakamise`, a));
  for (let t = 0; t <= l; t++) {
    let i = r + t * u;
    (jP(e, 0.2), HP(e, n, 5.3500000000000005, 0, i - 0.17, 5.75, o, i + 0.17));
  }
  for (let i = 0; i < l; i++)
    Ebe(e, t, n, r + i * u + 0.17, r + (i + 1) * u - 0.17, d.int(0, 5), d, o);
  (yield,
    e.col(uP).mat(0.85, 0, 0.1, sP),
    Tbe(e, n, 6, r, i, 3.65, s, t.plaster, 2, 3),
    jP(e, 0.16),
    HP(e, n, 5.88, 6.05, r, 6.05, s, i),
    HP(e, n, 5.88, 3.65, r, 6.05, 3.92, i));
  for (let t = 0; t <= l; t++) {
    let i = r + t * u;
    HP(e, n, 5.86, 3.65, i - 0.14, 6.05, s, i + 0.14);
  }
  if (!e.coarse) {
    e.col(16777215).mat(0.6, 0, 0.6, G | 32);
    for (let i = 0; i < l; i++) {
      let a = r + (i + 0.5) * u;
      VP(e, n, 5.97, a - 0.85, a + 0.85, 4.35, 5.65, t.shoji);
    }
  }
  for (let [a, c] of [
    [r, -1],
    [i, 1],
  ]) {
    let r = a + c * 0.001;
    e.col(cP, 0.9).mat(0.6, 0, 0.16, sP);
    let i = n * xP,
      l = n * SP;
    (c < 0 == n > 0 ? e.panel(l, r, i, r, 0, o) : e.panel(i, r, l, r, 0, o),
      e.col(uP).mat(0.85, 0, 0.08, sP),
      c < 0 == n > 0
        ? e.wall(n * SP, r, n * 6, r, o, s, t.plaster, 2, 3)
        : e.wall(n * 6, r, n * SP, r, o, s, t.plaster, 2, 3));
  }
  let f = Math.min(n * SP, n * CP),
    p = Math.max(n * SP, n * CP),
    m = [14209992, 13616822, 14867922, 12893358];
  for (let a = r; a < i - 0.001;) {
    let r = a + 8 + d.next() * 4;
    r > i - 4 && (r = i);
    let o = 6.8 + d.int(0, 2) * 1.4;
    if (
      (e.col(m[d.int(0, m.length - 1)]).mat(0.85, 0, 0.04, sP),
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
  (yield, AP(e, 0.02));
  let h = kP(t, mP, lP),
    g = (r + i) / 2;
  if (
    (iC(
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
      oP / 2,
    ),
    iC(
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
      oP / 2,
    ),
    !e.coarse)
  ) {
    for (let i = 0; i <= l; i++) NP(e, t, n * 4.8, 2.98, r + i * u);
    (e.push().col(lP).mat(0.7, 0, 0.35, sP),
      HP(e, n, 4.6000000000000005, 3.05, r, 5.37, 3.07, i),
      e.pop());
  }
  e.solid(
    Math.min(n * 5.3500000000000005, n * CP),
    r - 0.2,
    Math.max(n * 5.3500000000000005, n * CP),
    i + 0.2,
    0,
    9,
  );
}
function* Dbe(e, t) {
  let n = OP(t);
  (yield* wbe(e, n),
    yield,
    yield* UP(e, n, 1, -30.2, -10.45, 1),
    yield* UP(e, n, 1, 0.45, 36.6, 2),
    yield* UP(e, n, -1, -30.2, 3, 3),
    yield* UP(e, n, -1, 7, 36.6, 4));
  for (let t of [-1, 1]) Obe(e, n, t, +(t < 0));
}
