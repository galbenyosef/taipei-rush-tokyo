// tokyo/assets/region-tokyo-A7LxHjud 180 — col
// Lines 72808-73538 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* yge(e, t) {
  let n = t.c(`benWall`),
    r = t.A.sub(`benMisc`, 0, 0, 0.5, 0.25),
    i = t.A.sub(`benMisc`, 0, 0.375, 0.5, 0.5),
    a = t.A.sub(`benMisc`, 0, 0.25, 0.5, 0.375),
    o = t.A.sub(`benMisc`, 0, 0.5, 0.5, 1),
    s = t.A.sub(`benMisc`, 0.5, 0, 0.75, 1),
    c = t.A.sub(`benMisc`, 0.75, 0, 1, 1);
  {
    let n = e.coarse ? 8 : 4;
    (e.col(11710375).mat(0.95, 0, 0, 0),
      e.flat(-13, -11.9, -2.2, 14, 0.03, t.c(`gravel`), n, n),
      e.flat(2.2, -11.9, 13, 14, 0.03, t.c(`gravel`), n, n),
      e.flat(-13, -14, -6, -11.9, 0.03, t.c(`gravel`), n, n),
      e.flat(6, -14, 13, -11.9, 0.03, t.c(`gravel`), n, n),
      e.flat(-2.2, -2, 2.2, 14, 0.03, t.c(`gravel`), n, n),
      e.col(14078665),
      e.flat(-2.2, LE, 2.2, PE, 0.04, t.c(`paving`), 4.4, e.coarse ? 8 : 4),
      e.flat(-6, -14, -2.2, PE, 0.04, t.c(`paving`), 3.8, 2.1),
      e.flat(2.2, -14, 6, PE, 0.04, t.c(`paving`), 3.8, 2.1),
      e.coarse ||
        (e
          .col(15921386)
          .flat(6.2, -13.8, 10.2, -11.6, 0.09, t.c(`gravel`), 2, 2.2),
        e
          .col(10328463)
          .box(6.1, 0, -13.9, 10.3, 0.08, -13.75)
          .box(6.1, 0, -11.65, 10.3, 0.08, -11.5)),
      e.col(11118238),
      e.flat(-3.7, LE, -2.2, -14, 0.03, t.c(`gravel`), 1.5, n * 2),
      e.flat(2.2, LE, 3.7, -14, 0.03, t.c(`gravel`), 1.5, n * 2),
      e.coarse ||
        (e.col(10328463),
        e.box(-2.35, 0, LE, -2.2, 0.08, PE),
        e.box(2.2, 0, LE, 2.35, 0.08, PE)),
      e.col(10852998),
      e.flat(13, -2, 69, 2, 0.03, t.c(`gravel`), n * 2, 4));
  }
  yield;
  {
    if (
      (e.col(UE).mat(0.95, 0, 0, 0),
      qE(e, yE, 0, SE, t.c(`granite`), 2, SE),
      e.col(13804602).mat(0.6, 0.2, 0.1, G),
      qE(e, yE, SE, CE, e.white),
      e.col(9067068).mat(0.85, 0, 0, 0),
      e.lathe(0, vE, [yE, CE, bE, CE], 8, GE),
      e.col(16777215).mat(0.85, 0, 0.22, G),
      qE(e, bE, CE, wE, n, 0, 0, !0),
      e.mat(0.85, 0, 0.16, G),
      qE(e, 6.42, wE, 6.05, r, e.coarse ? 0 : 2.45, 0.5499999999999998, !0),
      !e.coarse)
    ) {
      e.col(RE).mat(0.6, 0, 0.12, G);
      let t = [];
      for (let e = 0; e < 8; e++) t.push(...KE(e, 7.55));
      (e.sweep(
        t,
        [-0.06, 2.44, 0.06, 2.44, 0.06, 2.55, -0.06, 2.55, -0.06, 2.44],
      ),
        e.sweep(t, [0.03, 1.98, 0.03, 2.06]));
      for (let t = 0; t < 8; t++) {
        if (t === 5) continue;
        let [n, r] = KE(t, 7.55),
          [i, a] = KE(t + 1, 7.55);
        (e.rod(n, CE, r, n, 2.6500000000000004, r, 0.07, 4),
          e.rod(
            (n + i) / 2,
            CE,
            (r + a) / 2,
            (n + i) / 2,
            2.55,
            (r + a) / 2,
            0.05,
            4,
          ));
      }
      for (let t = 0; t < 8; t++) {
        let [n, r] = KE(t, 6.35);
        r < 0.7000000000000002 || e.cylY(n, r, CE, wE, 0.2, 8, 0.2, !1);
      }
    }
    if (
      (yield,
      e.mat(0.75, 0.05, 0, 0),
      pC(e, 0, vE, TE, 8.6, {
        rise: 4.03,
        curve: 1.25,
        tTop: 1 - xE / 8.6,
        sori: 0.55,
        cell: t.c(`kawara`),
        color: BE,
        tile: 2,
        thick: 0.42,
        eave: 2.2,
        soffit: zE,
        band: RE,
        bandCell: a,
        bandTile: 1.6,
        ridgeH: 0.55,
        ridgeColor: 6317678,
        rows: 4,
        hips: 2,
        curl: 0.25,
      }),
      e.col(16777215).mat(0.85, 0, 0.2, G),
      qE(e, xE, EE, DE, n),
      e.mat(0.85, 0, 0.16, G),
      qE(e, 4.8, DE, 11.85, r, e.coarse ? 0 : 1.8, 0.6500000000000004),
      !e.coarse)
    ) {
      e.col(RE).mat(0.6, 0, 0.12, G);
      for (let t = 0; t < 8; t++) {
        let [n, r] = KE(t, 4.74);
        e.cylY(n, r, EE, DE, 0.17, 6, 0.17, !1);
      }
    }
    (yield, e.mat(0.55, 0.25, 0.12, G));
    let o = pC(e, 0, vE, OE, 7.6, {
      rise: 4.4,
      curve: 1.45,
      tTop: 0.94,
      sori: 0.85,
      cell: t.c(`copper`),
      color: VE,
      tile: 2,
      thick: 0.45,
      eave: 2.7,
      soffit: zE,
      band: 5217672,
      bandCell: i,
      bandTile: 1.6,
      ridgeH: 0.6,
      ridgeColor: 5214076,
      rows: 7,
      hips: 3,
      curl: 0.55,
    });
    if (
      (e.col(2762790).mat(0.5, 0.4, 0, 0),
      e.lathe(0, vE, [0.85, o - 0.15, 0.85, o + 0.45, 0.62, o + 0.6], 8, GE),
      e.col(HE).mat(0.35, 0.85, 0.15, 1),
      e.lathe(0, vE, [0.55, o + 0.6, 0.6, o + 0.85, 0.32, o + 1.1], 8),
      e.lathe(
        0,
        vE,
        [
          0.05,
          o + 1.1,
          0.42,
          o + 1.4,
          0.46,
          o + 1.7,
          0.26,
          o + 2.1,
          0.02,
          o + 2.45,
        ],
        e.coarse ? 5 : 8,
        0,
        e.white,
        !1,
        !0,
      ),
      !e.coarse)
    ) {
      let t = o + 1.75;
      for (let n of [0, Math.PI / 2])
        for (let r = 0; r < 5; r++) {
          let i = Math.PI * (0.15 + (0.7 * r) / 4),
            a = Math.cos(i) * Math.cos(n),
            o = Math.cos(i) * Math.sin(n),
            s = Math.sin(i);
          e.rod(
            a * 0.35,
            t + s * 0.35,
            vE + o * 0.35,
            a * 0.95,
            t + s * 0.95,
            vE + o * 0.95,
            0.07,
            4,
            0.02,
          );
        }
      e.col(3815994)
        .mat(0.4, 0.8, 0, 0)
        .rod(0, o + 2.4, vE, 0, o + 4.2, vE, 0.035, 4);
    }
    if (!e.coarse) {
      e.col(6978130).mat(0.5, 0.7, 0, 0);
      for (let t = 0; t < 8; t++) {
        let [n, r] = KE(t, 7.35);
        e.lathe(n, r, [0.01, 12.1, 0.16, 11.85, 0.18, 11.450000000000001], 4);
      }
    }
  }
  yield;
  {
    (e.col(UE).mat(0.95, 0, 0, 0),
      e.wall(ME, NE, -9.4, NE, 0, SE, t.c(`granite`), 2, SE),
      e.wall(-9.4, NE, -9.4, 1.5, 0, SE, t.c(`granite`), 2, SE),
      e.wall(ME, 1.5, ME, NE, 0, SE, t.c(`granite`), 2, SE),
      e.col(13804602).mat(0.6, 0.2, 0.1, G),
      e.panel(ME, NE, -9.4, NE, SE, CE),
      e.panel(-9.4, NE, -9.4, 1.5, SE, CE),
      e.panel(ME, 1.5, ME, NE, SE, CE),
      e.col(9067068).mat(0.85, 0, 0, 0),
      e.flat(-9.4, NE, ME, 1.5, CE));
    let i = [-8.2, -5.1, -1.7, 1.7, 5.1, kE];
    e.col(16777215).mat(0.85, 0, 0.22, G);
    for (let t = 0; t < 5; t++) {
      let r = i[t + 1],
        a = i[t];
      if (t === 0 || t === 4) {
        e.panel(r, AE, a, AE, CE, wE, n);
        continue;
      }
      if (
        (e.col(_ge).panel(r, AE, a, AE, 4.5, wE),
        e.col(RE).box(a, 4.3, -8.12, r, 4.5, AE),
        t === 2)
      )
        (e.col(3810328).mat(0.9, 0, 0.35, 1),
          e.panel(r, -6.8, a, -6.8, CE, 4.3),
          e.col(2759186).mat(0.9, 0, 0, 0),
          e.panel(r, AE, r, -6.8, CE, 4.3),
          e.panel(a, -6.8, a, AE, CE, 4.3),
          e.flat(a, AE, r, -6.8, 4.3, e.white, 0, 0, !1));
      else {
        let t = (r + a) / 2;
        (e.col(16777215).mat(0.7, 0, 0.3, G),
          e.panel(r, -8.02, t, -8.02, 2.6, 4.3, o),
          e.panel(t, -8.02, a, -8.02, 2.6, 4.3, o),
          e.col(14047772).mat(0.7, 0, 0.2, 1),
          e.panel(r, -8.02, a, -8.02, CE, 2.6));
      }
      e.col(16777215).mat(0.85, 0, 0.22, G);
    }
    for (let t of [-1, 1]) {
      let r = t * kE;
      t > 0
        ? e.wall(r, jE, r, AE, CE, wE, n, 3.4, 3.9)
        : e.wall(r, AE, r, jE, CE, wE, n, 3.4, 3.9);
    }
    (e.mat(0.85, 0, 0.16, G),
      e.wall(
        8.299999999999999,
        -8.1,
        -8.2 - 0.1,
        -8.1,
        wE,
        6.15,
        r,
        e.coarse ? 8.2 : 2.05,
        0.65,
      ),
      e.wall(
        -8.2 - 0.1,
        -8.1,
        -8.2 - 0.1,
        jE,
        wE,
        6.15,
        r,
        e.coarse ? 8 : 2,
        0.65,
      ),
      e.wall(
        8.299999999999999,
        jE,
        8.299999999999999,
        -8.1,
        wE,
        6.15,
        r,
        e.coarse ? 8 : 2,
        0.65,
      ),
      e.col(RE).mat(0.6, 0, 0.14, G));
    for (let t of i) e.cylY(t, -8.08, CE, wE, 0.22, e.coarse ? 6 : 8, 0.22, !1);
    if (!e.coarse)
      for (let t of [-4.5, -1])
        for (let n of [-1, 1]) e.cylY(n * 8.28, t, CE, wE, 0.22, 8, 0.22, !1);
    (e.box(-8.2 - 0.2, 5.15, -8.3, 8.399999999999999, wE, -8.05),
      e.coarse || JC(e, 0, 4.25, -7.4, 1.5, t.c(`lantern`)),
      e.col(RE).mat(0.6, 0, 0.12, G));
    for (let t of [-1, 1]) {
      let n = t * FE,
        r = t * 9.25;
      if (
        (e.box(
          Math.min(n, r),
          2.42,
          -9.200000000000001,
          Math.max(n, r),
          2.54,
          -9.08,
        ),
        !e.coarse)
      ) {
        e.box(
          Math.min(n, r),
          1.96,
          -9.180000000000001,
          Math.max(n, r),
          2.0300000000000002,
          -9.100000000000001,
        );
        for (let t = Math.min(n, r); t <= Math.max(n, r) + 0.001; t += 2.1)
          e.box(t - 0.06, CE, -9.200000000000001, t + 0.06, 2.54, -9.08);
        e.box(
          t * 9.18 - 0.06,
          2.42,
          -9.200000000000001,
          t * 9.18 + 0.06,
          2.54,
          1,
        );
      }
      for (let [n, r] of [
        [-9.200000000000001, CE],
        [-11.6, 0],
      ])
        (e
          .col(RE)
          .box(t * 3.2 - 0.16, r, n - 0.16, t * 3.2 + 0.16, r + 1.15, n + 0.16),
          e.coarse ||
            e
              .col(6122069)
              .mat(0.5, 0.7, 0, 0)
              .lathe(
                t * 3.2,
                n,
                [0.15, r + 1.15, 0.17, r + 1.3, 0.02, r + 1.55],
                6,
              ),
          e.mat(0.6, 0, 0.12, G));
      (e
        .col(RE)
        .rod(t * 3.2, 1, -11.6, t * 3.2, 2.5, -9.200000000000001, 0.07, 4),
        e.col(UE).mat(0.95, 0, 0, 0),
        e.box(t > 0 ? FE : -3.4, 0, PE, t > 0 ? 3.4 : -3, 0.35, NE));
    }
    e.col(WE).mat(0.85, 0, 0, 0);
    let s = e.coarse ? 4 : 8;
    for (let t = 0; t < s; t++) {
      let n = PE + (2.5999999999999996 * t) / s;
      e.box(-3, 0, n, FE, ((t + 1) * CE) / s, NE);
    }
    e.mat(0.42, 0.55, 0, 0);
    let c = {
      y0: 6.4,
      L: 10,
      D: 6.4,
      R: 5.4,
      rise: 3.5,
      curve: 1.5,
      sori: 0.45,
      cz: -3.4,
    };
    (sC(e, 0, c.cz, c.y0, c.L, c.D, {
      rise: c.rise,
      R: c.R,
      curve: c.curve,
      sori: c.sori,
      cell: t.c(`kawara`),
      color: BE,
      tile: 2,
      thick: 0.42,
      eave: 2,
      soffit: zE,
      band: 5922404,
      ridgeH: 0,
      rows: 6,
    }),
      e.col(6120040).mat(0.55, 0.3, 0, 0));
    let l = c.y0 + c.rise;
    if (
      (e.box(
        -c.R - 0.2,
        l - 0.15,
        c.cz - 0.25,
        c.R + 0.2,
        l + 0.38,
        c.cz + 0.25,
      ),
      !e.coarse)
    ) {
      for (let t of [-1, 1])
        e.box(
          t * c.R - 0.35,
          l - 0.1,
          c.cz - 0.42,
          t * c.R + 0.35,
          l + 0.85,
          c.cz + 0.42,
        );
      let t = (e, t, n) => {
        let r = e * (c.L + (c.R - c.L) * n);
        return [
          r,
          c.y0 +
            c.rise * n ** +c.curve +
            c.sori * (Math.abs(r) / c.L) ** 3 * (1 - n) ** 1.5 +
            0.12,
          c.cz + t * c.D * (1 - n),
        ];
      };
      for (let n of [-1, 1])
        for (let r of [-1, 1]) {
          let i = [0.03, 0.3, 0.6, 1];
          for (let a = 0; a + 1 < i.length; a++) {
            let o = t(n, r, i[a]),
              s = t(n, r, i[a + 1]);
            e.rod(o[0], o[1], o[2], s[0], s[1], s[2], 0.13, 4);
          }
        }
    }
    e.coarse ||
      (e.col(16777215).mat(0.7, 0, 0.12, G),
      e.wall(10, -9.83, -10, -9.83, 6.02, 6.42, a, 1.6, 0.4));
  }
  yield;
  {
    let n = t.A.sub(`benRack`, 0, 0.5, 1, 1),
      r = t.A.sub(`benRack`, 0, 0, 1, 0.5),
      i = [-11.2, -7.1, -3.45, 3.45, 7.1, IE];
    if ((e.col(3877408).mat(0.85, 0, 0, 0), !e.coarse))
      for (let t of i)
        (e.box(t - 0.09, 0, -10.59, t + 0.09, 6.1, -10.41),
          e.pole(t, gge, 0.15, 0, 6));
    (e.col(RE).mat(0.6, 0, 0.14, G),
      e.box(-11.5, 5.9, -10.68, 11.5, 6.12, -10.32),
      e.extrudeX(
        [0.42, 6.12, -0.42, 6.12, 0, 6.35],
        -11.2 - 0.45,
        11.649999999999999,
        !0,
        !0,
      ));
    let a = (t, n, r, i) => {
      let a = 0.72,
        o = -10.82,
        s = 2.8;
      for (let c = t; c < n - 0.001; c += s) {
        let t = Math.min(n, c + s),
          l = (t - c) / s;
        (e.quad(
          t,
          r + 0.1,
          -11.08,
          c,
          r + 0.1,
          -11.08,
          c,
          r + a - 0.1,
          -11.08,
          t,
          r + a - 0.1,
          -11.08,
          i,
          1 - l,
          0.17,
          1,
          0.83,
        ),
          e.coarse ||
            (e.quad(
              t,
              r + a - 0.1,
              -11.08,
              c,
              r + a - 0.1,
              -11.08,
              c,
              r + a,
              o,
              t,
              r + a,
              o,
              i,
              1 - l,
              0.83,
              1,
              1,
            ),
            e.quad(
              t,
              r,
              o,
              c,
              r,
              o,
              c,
              r + 0.1,
              -11.08,
              t,
              r + 0.1,
              -11.08,
              i,
              1 - l,
              0,
              1,
              0.17,
            )));
      }
    };
    (e.col(16777215).mat(0.8, 0, 0.14, G), a(-11.2, IE, 5.12, n));
    for (let [e, t] of [
      [-11.2, -3.45],
      [3.45, IE],
    ])
      (a(e, t, 4.37, r), a(e, t, 3.62, n), a(e, t, 2.87, r));
  }
  if ((yield, !e.coarse)) {
    let t = -14.8;
    (e.col(UE).mat(0.9, 0, 0, 0),
      e.cylY(0, t, 0, 0.55, 0.75, 8, 0.75),
      e.col(2894374).mat(0.45, 0.75, 0, 0),
      e.lathe(0, t, [0.35, 0.55, 0.75, 0.75, 0.8, 1.15, 0.7, 1.25], 8));
    for (let n = 0; n < 4; n++) {
      let r = GE * 2 * n + Math.PI / 4;
      e.rod(
        Math.cos(r) * 0.55,
        1.2,
        t + Math.sin(r) * 0.55,
        Math.cos(r) * 0.55,
        2.2,
        t + Math.sin(r) * 0.55,
        0.04,
        4,
      );
    }
    (e.lathe(0, t, [0.05, 2.15, 1.15, 2.2, 0.95, 2.35, 0.2, 2.6, 0.05, 2.9], 8),
      e.pole(0, t, 0.85, 0, 2.5),
      e.col(11020830).mat(0.6, 0, 0, 0).box(-0.32, 0, -16.7, 0.32, 0.95, -16.3),
      e.col(2762274).box(-0.36, 0.95, -16.740000000000002, 0.36, 1, -16.26),
      e.solid(-0.36, -16.740000000000002, 0.36, -16.26, 0, 1));
    let n = 5.6;
    (e.col(WE).mat(0.9, 0, 0, 0).box(5, 0, -13, 6.199999999999999, 1.1, -11.8),
      e.col(7310456).mat(0.55, 0.5, 0, 0));
    let r = [];
    for (let e = 0; e < 12; e++) {
      let t = (e / 12) * Math.PI * 2,
        i = 0.4 * (1 - 0.35 * Math.max(0, Math.sin(t)));
      r.push(
        n + Math.cos(t) * i,
        1.72 + Math.sin(t) * 0.55 * (Math.sin(t) > 0 ? 1.3 : 1),
      );
    }
    (e.extrudeZ(r, -12.52, -12.32, !0, !0),
      e.box(5.52, 2.3, -12.48, 5.68, 2.95, -12.35),
      e.rod(n, 2.95, -12.42, n, 3.25, -12.18, 0.09, 4),
      e.box(5.279999999999999, 2.62, -12.450000000000001, 5.92, 2.68, -12.38),
      e.box(5.35, 2.82, -12.450000000000001, 5.85, 2.88, -12.38),
      e.solid(5, -13, 6.199999999999999, -11.8, 0, 3.3));
    for (let t of [-9.4, -4.4, 4, 8.9]) {
      let n = -12.6;
      (e
        .col(13157564)
        .mat(0.6, 0.4, 0, 0)
        .cylY(t, n, 0, 4.2, 0.04, 4, 0.04, !1),
        e.box(t - 0.02, 4, -12.62, t + 0.7, 4.05, -12.58),
        e.pole(t, n, 0.08, 0, 4.2),
        e.col(16777215).mat(0.85, 0, 0.06, 1),
        e.panel(t + 0.68, -12.62, t + 0.04, -12.62, 1.4, 4, s),
        e.panel(t + 0.04, -12.58, t + 0.68, -12.58, 1.4, 4, s));
    }
    (XE(e, -12.2, -12.8),
      XE(e, 12.2, -12.8),
      JE(e, -10.8, -12.6, 1.05),
      JE(e, 10.6, -10.6, 1.05));
  }
  if ((yield, !e.coarse)) {
    let n = -11.4,
      r = -4.6;
    e.col(vge).mat(0.85, 0, 0, 0);
    for (let t of [-0.85, 0.85])
      for (let i of [-1, 1])
        (e.box(n + t - 0.08, 0, r + i - 0.08, n + t + 0.08, 2.35, r + i + 0.08),
          e.pole(n + t, r + i, 0.12, 0, 2.3));
    (e
      .col(9078655)
      .mat(0.9, 0, 0, 0)
      .box(-11.85, 0, -5.35, -10.950000000000001, 0.75, -3.8499999999999996),
      e
        .col(3951186)
        .mat(0.2, 0, 0, 0)
        .flat(-11.75, -5.25, -11.05, -3.9499999999999997, 0.76),
      e.solid(-11.85, -5.35, -10.950000000000001, -3.8499999999999996, 0, 0.75),
      e.mat(0.8, 0.1, 0, 0),
      cC(
        e,
        n,
        r,
        2.3,
        1.6,
        1.25,
        {
          rise: 0.75,
          cell: t.c(`kawara`),
          color: 9075306,
          thick: 0.18,
          eave: 0.4,
          band: 5916214,
          soffit: 4075558,
          ridgeH: 0.22,
          ridgeColor: 4865588,
          wallY: 2.35,
          wallInset: 0.4,
          wallColor: 5916214,
          rows: 3,
          sori: 0.08,
        },
        Math.PI / 2,
      ),
      e.push().col(16184040).mat(0.6, 0, 0.5, 1));
    for (let t of [-1, 1])
      e.lathe(
        -12.25,
        r + t,
        [0.14, 1.45, 0.26, 1.62, 0.27, 1.9, 0.24, 2.05, 0.14, 2.15],
        6,
      );
    e.pop();
    let i = 11.2,
      a = 3.8;
    (e.col(9407620).mat(0.9, 0, 0, 0).box(10.45, 0, 3.05, 11.95, 0.55, 4.55),
      e
        .col(RE)
        .mat(0.6, 0, 0.1, G)
        .box(10.799999999999999, 0.55, 3.3499999999999996, 11.6, 1.45, 4.25),
      e.mat(0.55, 0.25, 0, 0),
      cC(
        e,
        i,
        a,
        1.45,
        0.75,
        0.7,
        {
          rise: 0.38,
          cell: t.c(`copper`),
          color: VE,
          thick: 0.1,
          eave: 0.2,
          band: 5217672,
          ridgeH: 0.12,
          ridgeColor: 5214076,
          rows: 2,
          wallY: 1.45,
          wallInset: 0.3,
          wallColor: RE,
        },
        Math.PI / 2,
      ),
      e.col(12075050).mat(0.6, 0.3, 0, 0));
    for (let t of [-0.95, 0.95])
      for (let n of [-0.95, 0.95])
        e.rod(i + t, 0, a + n, i + t, 1.7, a + n, 0.04, 4);
    (e.sweep(
      [
        10.25, 2.8499999999999996, 12.149999999999999, 2.8499999999999996,
        12.149999999999999, 4.75, 10.25, 4.75,
      ],
      [0.03, 1.62, 0.03, 1.7],
    ),
      e.sweep(
        [
          10.25, 2.8499999999999996, 12.149999999999999, 2.8499999999999996,
          12.149999999999999, 4.75, 10.25, 4.75,
        ],
        [0.02, 0.15, 0.02, 0.22],
      ),
      e.solid(10.25, 2.8499999999999996, 12.149999999999999, 4.75, 0, 1.7),
      GC(e, -10.6, 10.8, 8.5, 811),
      e.pole(-10.6, 10.8, 0.35, 0, 4),
      YE(e, 11, 11, 9.5, 3),
      GC(e, -12.1, -11, 5.5, 37),
      e.pole(-12.1, -11, 0.25, 0, 3),
      ZE(e, 10.6, -6.2, 1.3, 2, 0.2, 1),
      ZE(e, 11.4, -0.4, 1.1, 1.6, -0.15, 0.9),
      ZE(e, 10.4, 8, 1, 1.7, 0.4, 1.1),
      ZE(e, -11.6, 4.8, 1.2, 1.9, -0.3, 0.95));
  }
  yield;
  for (let t of [-24, -56, -88]) (JE(e, -3.3, t, 1), JE(e, 3.3, t, 1));
  for (let t of [-1, 1]) {
    let n = t * 3.75;
    (e.col(11183772).mat(0.9, 0, 0, 0),
      e.box(n - 0.12, 0.25, -48, n + 0.12, 0.85, -34),
      e.solid(n - 0.15, -48, n + 0.15, -34, 0, 0.9));
    let r = e.coarse ? [-48, -34] : [-48, -44.5, -41, -37.5, -34];
    for (let t of r)
      (e.box(n - 0.2, 0, t - 0.2, n + 0.2, 1.05, t + 0.2),
        e.coarse ||
          e.lathe(n, t, [0.17, 1.05, 0.2, 1.18, 0.02, 1.38], 4, Math.PI / 4));
  }
  (e.coarse ||
    (YE(e, 3.8, -30, 9, 7, 1),
    YE(e, -3.8, -70, 9.5, 2, -1),
    YE(e, 3.8, -104, 8.5, 9, 1),
    ZE(e, -3.2, -40, 1.4, 2.2, 0.1, 1),
    ZE(e, 3.2, -64, 1.2, 1.8, -0.2, 0.92),
    ZE(e, -3.3, -96, 1.1, 2, 0.25, 1.05),
    XE(e, -3.5, -76),
    XE(e, 3.5, -52),
    XE(e, -3.5, -104)),
    JE(e, -3.1, -118.5, 1.35),
    JE(e, 3.1, -118.5, 1.35),
    e.col(16777215).mat(0.85, 0, 0, 0),
    e.col(UE).box(-3.7, 0, -115, -2.7, 0.35, -114),
    e.col(16777215),
    e.box(-3.4400000000000004, 0.35, -114.74, -2.96, 3.2, -114.26, c),
    e
      .col(11578531)
      .lathe(-3.2, -114.5, [0.34, 3.2, 0.2, 3.45, 0.02, 3.5], 4, Math.PI / 4),
    e.solid(-3.7, -115, -2.7, -114, 0, 3.4),
    yield);
  {
    let t = yE * Math.cos(GE);
    (e.solidRot(0, vE, t, t, 0, 0, 14),
      e.solidRot(0, vE, t, t, Math.PI / 4, 0, 14),
      e.solid(-9.4, AE, ME, jE, 0, 10),
      e.solid(-9.4, NE, -3.4, AE, 0, 1.5),
      e.solid(3.4, NE, ME, AE, 0, 1.5),
      e.floor(-3, PE, FE, NE, 0, CE, `stairs`),
      e.floor(-9.4, NE, ME, AE, CE, CE, `platform`));
  }
}
