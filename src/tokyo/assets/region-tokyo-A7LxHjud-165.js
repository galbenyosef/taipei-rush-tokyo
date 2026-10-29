// tokyo/assets/region-tokyo-A7LxHjud 165 — col
// Lines 68561-68843 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function Nme(e, t) {
  (e.col(aw).mat(0.8, 0, 0.05, G), uw(e, t, 1), uw(e, t, -1));
  let n = e.seg(12);
  for (let [r, i] of nw) {
    let a = (r + i) / 2,
      o = (i - r) / 2;
    for (let r = 0; r < n; r++) {
      let i = Math.PI - (r / n) * Math.PI,
        s = Math.PI - ((r + 1) / n) * Math.PI,
        c = a + Math.cos(i) * o,
        l = -1.3499999999999999 + Math.sin(i) * o,
        u = a + Math.cos(s) * o,
        d = -1.3499999999999999 + Math.sin(s) * o;
      e.quad(ew, l, c, -6.4, l, c, -6.4, d, u, ew, d, u, t.c(`granite`));
    }
    (e.quad(
      ew,
      -2.05,
      r,
      -6.4,
      -2.05,
      r,
      -6.4,
      -1.3499999999999999,
      r,
      ew,
      -1.3499999999999999,
      r,
    ),
      e.quad(
        -6.4,
        -2.05,
        i,
        ew,
        -2.05,
        i,
        ew,
        -1.3499999999999999,
        i,
        -6.4,
        -1.3499999999999999,
        i,
      ));
  }
  e.col(12169892);
  for (let t = -18; t < QC; t += 2) {
    let n = Math.min(QC, t + 2);
    e.quad(
      -6.4,
      lw(n) + 0.05,
      n,
      ew,
      lw(n) + 0.05,
      n,
      ew,
      lw(t) + 0.05,
      t,
      -6.4,
      lw(t) + 0.05,
      t,
    );
  }
  e.col(aw);
  let r = 0.45;
  for (let t of [-1, 1]) {
    let n = t * (ew - r / 2);
    for (let t = -18; t < QC; t += 1) {
      let i = Math.min(QC, t + 1),
        a = lw(t) + 0.05,
        o = lw(i) + 0.05;
      (e.quad(
        n - r / 2,
        a,
        t,
        n - r / 2,
        o,
        i,
        n - r / 2,
        o + 1,
        i,
        n - r / 2,
        a + 1,
        t,
      ),
        e.quad(
          n + r / 2,
          o,
          i,
          n + r / 2,
          a,
          t,
          n + r / 2,
          a + 1,
          t,
          n + r / 2,
          o + 1,
          i,
        ),
        e.quad(
          n - r / 2 - 0.05,
          a + 1,
          t,
          n - r / 2 - 0.05,
          o + 1,
          i,
          n + r / 2 + 0.05,
          o + 1,
          i,
          n + r / 2 + 0.05,
          a + 1,
          t,
        ));
    }
    if (e.coarse)
      for (let t of [-13, -0.2, 8.6])
        e.col(3814184)
          .box(n - 0.2, lw(t), t - 0.2, n + 0.2, lw(t) + 5.2, t + 0.2)
          .col(aw);
    else for (let t of [-13, -0.2, 8.6]) jme(e, n, lw(t) + 0.05, t, 0.85);
  }
}
function Pme(e, t) {
  e.col(16777215).mat(0.9, 0, 0, 0);
  for (let n of [-1, 1]) {
    let r = n * 5.2,
      i = n * 14;
    e.box(
      Math.min(r, i),
      ZC,
      5.7,
      Math.max(r, i),
      13.049999999999999,
      15.5,
      t.c(`ishigaki`),
      4,
      4,
      t.c(`ishigaki`),
    );
  }
  e.col(3880240).mat(0.8, 0, 0, 0);
  for (let t of [-1, 1])
    e.box(t * 4.6 - 0.45, tw, 10.3, t * 4.6 + 0.45, 9.7, 11.3);
  if (
    (e.box(-5.2, 8.9, 10.200000000000001, 5.2, 9.9, 11.4),
    e.col(2762274),
    e.panel(4.1, 10.9, -4.1, 10.9, tw, 8.9),
    !e.coarse)
  ) {
    e.col(6974054).mat(0.4, 0.8, 0, 0);
    for (let t of [1.2, 3.2, 5.2])
      e.box(-4.1, tw + t, 10.82, 4.1, tw + t + 0.18, 10.88);
  }
  if (
    (e.mat(0.88, 0, 0, 0),
    cC(e, 0, 10.8, 9.9, 6.6, 2.4, {
      rise: 1.6,
      cell: t.c(`kawara`),
      tile: 2,
      color: sw,
      band: 14210248,
      soffit: 3813416,
      ridgeH: 0.5,
      ridgeColor: 5001302,
      eave: 1.2,
      wallY: 9.9,
      wallInset: 0.6,
      wallColor: 3880240,
    }),
    e.col(ow).mat(0.85, 0, 0.08, G),
    e.box(-12, 12.25, 11.5, 12, 17.45, 16.1, t.c(`plaster`), 2, 2),
    !e.coarse)
  ) {
    e.col(3420204).mat(0.8, 0, 0, 0);
    for (let t = -9; t <= 9; t += 4.5)
      e.box(t - 0.8, 14.45, 11.4, t + 0.8, 15.649999999999999, 11.52);
  }
  (e.mat(0.88, 0, 0, 0),
    lC(e, 0, 25.4 / 2 + 1.1, 17.25, 13.5, 4.2, {
      rise: 3.2,
      cell: t.c(`kawara`),
      color: sw,
      band: 14868178,
      soffit: 15263454,
      ridgeH: 0.6,
      ridgeColor: 5001302,
      eave: 1,
      sori: 0.35,
      tg: 0.45,
    }));
}
function Fme(e, t) {
  let n = rw.lx,
    r = rw.w,
    i = rw.deck;
  e.col(16777215).mat(0.9, 0, 0, 0);
  let a = 2.2,
    o = e.coarse ? 2 : 3;
  e.grid(
    n + 12,
    ZC,
    -24,
    n - 12,
    ZC,
    -24,
    n - 12 + a,
    i,
    -21.8,
    n + 12 - a,
    i,
    -21.8,
    t.c(`ishigaki`),
    e.coarse ? 3 : 6,
    o,
  );
  for (let r of [-1, 1]) {
    let a = n + r * 12,
      s = n + r * 9.8;
    r > 0
      ? e.grid(
          a,
          ZC,
          -8,
          a,
          ZC,
          -24,
          s,
          i,
          -21.8,
          s,
          i,
          -8,
          t.c(`ishigaki`),
          4,
          o,
        )
      : e.grid(
          a,
          ZC,
          -24,
          a,
          ZC,
          -8,
          s,
          i,
          -8,
          s,
          i,
          -21.8,
          t.c(`ishigaki`),
          4,
          o,
        );
  }
  e.col(5990974)
    .mat(0.95, 0, 0, 0)
    .flat(n - 12 + a, -21.8, n + 12 - a, -8, i + 0.02);
  let s = QC;
  (e.col(8358789).mat(0.5, 0.6, 0, 0), e.box(n - r, i - 1.8, -8, n + r, i, s));
  let c = e.seg(10);
  for (let t of [-1, 1])
    for (let a = 0; a < c; a++) {
      let o = a / c,
        s = (a + 1) / c,
        l = -8 + 18.5 * o,
        u = -8 + 18.5 * s,
        d = (e) => i - 1.8 - 3.2 * Math.sin(Math.PI * e),
        f = n + t * (r - 0.3);
      (e.box(f - 0.25, d(o) - 0.5, l, f + 0.25, d(o), u), d(s));
    }
  e.col(7173744).mat(0.5, 0.6, 0, 0);
  for (let t of [-1, 1]) {
    let a = n + t * r;
    if ((e.box(a - 0.07, i + 1, -8, a + 0.07, i + 1.12, s), !e.coarse)) {
      e.box(a - 0.04, i + 0.45, -8, a + 0.04, i + 0.52, s);
      for (let t = -8; t <= s; t += 1.2)
        e.box(a - 0.05, i, t - 0.05, a + 0.05, i + 1, t + 0.05);
      for (let t of [-7, 2.5 / 2, 9.5]) qC(e, a, i, t, 3.4);
    }
  }
  e.col(9275260)
    .mat(0.9, 0, 0, 0)
    .flat(n - r, -8, n + r, s, i + 0.03);
}
