// tokyo/assets/region-tokyo-55J_WESF 180 — col
// Lines 72717-73447 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* sge(e, t) {
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
      e.flat(-2.2, PE, 2.2, jE, 0.04, t.c(`paving`), 4.4, e.coarse ? 8 : 4),
      e.flat(-6, -14, -2.2, jE, 0.04, t.c(`paving`), 3.8, 2.1),
      e.flat(2.2, -14, 6, jE, 0.04, t.c(`paving`), 3.8, 2.1),
      e.coarse ||
        (e
          .col(15921386)
          .flat(6.2, -13.8, 10.2, -11.6, 0.09, t.c(`gravel`), 2, 2.2),
        e
          .col(10328463)
          .box(6.1, 0, -13.9, 10.3, 0.08, -13.75)
          .box(6.1, 0, -11.65, 10.3, 0.08, -11.5)),
      e.col(11118238),
      e.flat(-3.7, PE, -2.2, -14, 0.03, t.c(`gravel`), 1.5, n * 2),
      e.flat(2.2, PE, 3.7, -14, 0.03, t.c(`gravel`), 1.5, n * 2),
      e.coarse ||
        (e.col(10328463),
        e.box(-2.35, 0, PE, -2.2, 0.08, jE),
        e.box(2.2, 0, PE, 2.35, 0.08, jE)),
      e.col(10852998),
      e.flat(13, -2, 69, 2, 0.03, t.c(`gravel`), n * 2, 4));
  }
  yield;
  {
    if (
      (e.col(BE).mat(0.95, 0, 0, 0),
      WE(e, gE, 0, yE, t.c(`granite`), 2, yE),
      e.col(13804602).mat(0.6, 0.2, 0.1, G),
      WE(e, gE, yE, bE, e.white),
      e.col(9067068).mat(0.85, 0, 0, 0),
      e.lathe(0, hE, [gE, bE, _E, bE], 8, HE),
      e.col(16777215).mat(0.85, 0, 0.22, G),
      WE(e, _E, bE, xE, n, 0, 0, !0),
      e.mat(0.85, 0, 0.16, G),
      WE(e, 6.42, xE, 6.05, r, e.coarse ? 0 : 2.45, 0.5499999999999998, !0),
      !e.coarse)
    ) {
      e.col(FE).mat(0.6, 0, 0.12, G);
      let t = [];
      for (let e = 0; e < 8; e++) t.push(...UE(e, 7.55));
      (e.sweep(
        t,
        [-0.06, 2.44, 0.06, 2.44, 0.06, 2.55, -0.06, 2.55, -0.06, 2.44],
      ),
        e.sweep(t, [0.03, 1.98, 0.03, 2.06]));
      for (let t = 0; t < 8; t++) {
        if (t === 5) continue;
        let [n, r] = UE(t, 7.55),
          [i, a] = UE(t + 1, 7.55);
        (e.rod(n, bE, r, n, 2.6500000000000004, r, 0.07, 4),
          e.rod(
            (n + i) / 2,
            bE,
            (r + a) / 2,
            (n + i) / 2,
            2.55,
            (r + a) / 2,
            0.05,
            4,
          ));
      }
      for (let t = 0; t < 8; t++) {
        let [n, r] = UE(t, 6.35);
        r < 0.7000000000000002 || e.cylY(n, r, bE, xE, 0.2, 8, 0.2, !1);
      }
    }
    if (
      (yield,
      e.mat(0.75, 0.05, 0, 0),
      uC(e, 0, hE, SE, 8.6, {
        rise: 4.03,
        curve: 1.25,
        tTop: 1 - vE / 8.6,
        sori: 0.55,
        cell: t.c(`kawara`),
        color: LE,
        tile: 2,
        thick: 0.42,
        eave: 2.2,
        soffit: IE,
        band: FE,
        bandCell: a,
        bandTile: 1.6,
        ridgeH: 0.55,
        ridgeColor: 6317678,
        rows: 4,
        hips: 2,
        curl: 0.25,
      }),
      e.col(16777215).mat(0.85, 0, 0.2, G),
      WE(e, vE, CE, wE, n),
      e.mat(0.85, 0, 0.16, G),
      WE(e, 4.8, wE, 11.85, r, e.coarse ? 0 : 1.8, 0.6500000000000004),
      !e.coarse)
    ) {
      e.col(FE).mat(0.6, 0, 0.12, G);
      for (let t = 0; t < 8; t++) {
        let [n, r] = UE(t, 4.74);
        e.cylY(n, r, CE, wE, 0.17, 6, 0.17, !1);
      }
    }
    (yield, e.mat(0.55, 0.25, 0.12, G));
    let o = uC(e, 0, hE, TE, 7.6, {
      rise: 4.4,
      curve: 1.45,
      tTop: 0.94,
      sori: 0.85,
      cell: t.c(`copper`),
      color: RE,
      tile: 2,
      thick: 0.45,
      eave: 2.7,
      soffit: IE,
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
      e.lathe(0, hE, [0.85, o - 0.15, 0.85, o + 0.45, 0.62, o + 0.6], 8, HE),
      e.col(zE).mat(0.35, 0.85, 0.15, 1),
      e.lathe(0, hE, [0.55, o + 0.6, 0.6, o + 0.85, 0.32, o + 1.1], 8),
      e.lathe(
        0,
        hE,
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
            hE + o * 0.35,
            a * 0.95,
            t + s * 0.95,
            hE + o * 0.95,
            0.07,
            4,
            0.02,
          );
        }
      e.col(3815994)
        .mat(0.4, 0.8, 0, 0)
        .rod(0, o + 2.4, hE, 0, o + 4.2, hE, 0.035, 4);
    }
    if (!e.coarse) {
      e.col(6978130).mat(0.5, 0.7, 0, 0);
      for (let t = 0; t < 8; t++) {
        let [n, r] = UE(t, 7.35);
        e.lathe(n, r, [0.01, 12.1, 0.16, 11.85, 0.18, 11.450000000000001], 4);
      }
    }
  }
  yield;
  {
    (e.col(BE).mat(0.95, 0, 0, 0),
      e.wall(kE, AE, -9.4, AE, 0, yE, t.c(`granite`), 2, yE),
      e.wall(-9.4, AE, -9.4, 1.5, 0, yE, t.c(`granite`), 2, yE),
      e.wall(kE, 1.5, kE, AE, 0, yE, t.c(`granite`), 2, yE),
      e.col(13804602).mat(0.6, 0.2, 0.1, G),
      e.panel(kE, AE, -9.4, AE, yE, bE),
      e.panel(-9.4, AE, -9.4, 1.5, yE, bE),
      e.panel(kE, 1.5, kE, AE, yE, bE),
      e.col(9067068).mat(0.85, 0, 0, 0),
      e.flat(-9.4, AE, kE, 1.5, bE));
    let i = [-8.2, -5.1, -1.7, 1.7, 5.1, EE];
    e.col(16777215).mat(0.85, 0, 0.22, G);
    for (let t = 0; t < 5; t++) {
      let r = i[t + 1],
        a = i[t];
      if (t === 0 || t === 4) {
        e.panel(r, DE, a, DE, bE, xE, n);
        continue;
      }
      if (
        (e.col(age).panel(r, DE, a, DE, 4.5, xE),
        e.col(FE).box(a, 4.3, -8.12, r, 4.5, DE),
        t === 2)
      )
        (e.col(3810328).mat(0.9, 0, 0.35, 1),
          e.panel(r, -6.8, a, -6.8, bE, 4.3),
          e.col(2759186).mat(0.9, 0, 0, 0),
          e.panel(r, DE, r, -6.8, bE, 4.3),
          e.panel(a, -6.8, a, DE, bE, 4.3),
          e.flat(a, DE, r, -6.8, 4.3, e.white, 0, 0, !1));
      else {
        let t = (r + a) / 2;
        (e.col(16777215).mat(0.7, 0, 0.3, G),
          e.panel(r, -8.02, t, -8.02, 2.6, 4.3, o),
          e.panel(t, -8.02, a, -8.02, 2.6, 4.3, o),
          e.col(14047772).mat(0.7, 0, 0.2, 1),
          e.panel(r, -8.02, a, -8.02, bE, 2.6));
      }
      e.col(16777215).mat(0.85, 0, 0.22, G);
    }
    for (let t of [-1, 1]) {
      let r = t * EE;
      t > 0
        ? e.wall(r, OE, r, DE, bE, xE, n, 3.4, 3.9)
        : e.wall(r, DE, r, OE, bE, xE, n, 3.4, 3.9);
    }
    (e.mat(0.85, 0, 0.16, G),
      e.wall(
        8.299999999999999,
        -8.1,
        -8.2 - 0.1,
        -8.1,
        xE,
        6.15,
        r,
        e.coarse ? 8.2 : 2.05,
        0.65,
      ),
      e.wall(
        -8.2 - 0.1,
        -8.1,
        -8.2 - 0.1,
        OE,
        xE,
        6.15,
        r,
        e.coarse ? 8 : 2,
        0.65,
      ),
      e.wall(
        8.299999999999999,
        OE,
        8.299999999999999,
        -8.1,
        xE,
        6.15,
        r,
        e.coarse ? 8 : 2,
        0.65,
      ),
      e.col(FE).mat(0.6, 0, 0.14, G));
    for (let t of i) e.cylY(t, -8.08, bE, xE, 0.22, e.coarse ? 6 : 8, 0.22, !1);
    if (!e.coarse)
      for (let t of [-4.5, -1])
        for (let n of [-1, 1]) e.cylY(n * 8.28, t, bE, xE, 0.22, 8, 0.22, !1);
    (e.box(-8.2 - 0.2, 5.15, -8.3, 8.399999999999999, xE, -8.05),
      e.coarse || GC(e, 0, 4.25, -7.4, 1.5, t.c(`lantern`)),
      e.col(FE).mat(0.6, 0, 0.12, G));
    for (let t of [-1, 1]) {
      let n = t * ME,
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
          e.box(t - 0.06, bE, -9.200000000000001, t + 0.06, 2.54, -9.08);
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
        [-9.200000000000001, bE],
        [-11.6, 0],
      ])
        (e
          .col(FE)
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
        .col(FE)
        .rod(t * 3.2, 1, -11.6, t * 3.2, 2.5, -9.200000000000001, 0.07, 4),
        e.col(BE).mat(0.95, 0, 0, 0),
        e.box(t > 0 ? ME : -3.4, 0, jE, t > 0 ? 3.4 : -3, 0.35, AE));
    }
    e.col(VE).mat(0.85, 0, 0, 0);
    let s = e.coarse ? 4 : 8;
    for (let t = 0; t < s; t++) {
      let n = jE + (2.5999999999999996 * t) / s;
      e.box(-3, 0, n, ME, ((t + 1) * bE) / s, AE);
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
    (iC(e, 0, c.cz, c.y0, c.L, c.D, {
      rise: c.rise,
      R: c.R,
      curve: c.curve,
      sori: c.sori,
      cell: t.c(`kawara`),
      color: LE,
      tile: 2,
      thick: 0.42,
      eave: 2,
      soffit: IE,
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
      i = [-11.2, -7.1, -3.45, 3.45, 7.1, NE];
    if ((e.col(3877408).mat(0.85, 0, 0, 0), !e.coarse))
      for (let t of i)
        (e.box(t - 0.09, 0, -10.59, t + 0.09, 6.1, -10.41),
          e.pole(t, ige, 0.15, 0, 6));
    (e.col(FE).mat(0.6, 0, 0.14, G),
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
    (e.col(16777215).mat(0.8, 0, 0.14, G), a(-11.2, NE, 5.12, n));
    for (let [e, t] of [
      [-11.2, -3.45],
      [3.45, NE],
    ])
      (a(e, t, 4.37, r), a(e, t, 3.62, n), a(e, t, 2.87, r));
  }
  if ((yield, !e.coarse)) {
    let t = -14.8;
    (e.col(BE).mat(0.9, 0, 0, 0),
      e.cylY(0, t, 0, 0.55, 0.75, 8, 0.75),
      e.col(2894374).mat(0.45, 0.75, 0, 0),
      e.lathe(0, t, [0.35, 0.55, 0.75, 0.75, 0.8, 1.15, 0.7, 1.25], 8));
    for (let n = 0; n < 4; n++) {
      let r = HE * 2 * n + Math.PI / 4;
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
    (e.col(VE).mat(0.9, 0, 0, 0).box(5, 0, -13, 6.199999999999999, 1.1, -11.8),
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
    (qE(e, -12.2, -12.8),
      qE(e, 12.2, -12.8),
      GE(e, -10.8, -12.6, 1.05),
      GE(e, 10.6, -10.6, 1.05));
  }
  if ((yield, !e.coarse)) {
    let n = -11.4,
      r = -4.6;
    e.col(oge).mat(0.85, 0, 0, 0);
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
      aC(
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
        .col(FE)
        .mat(0.6, 0, 0.1, G)
        .box(10.799999999999999, 0.55, 3.3499999999999996, 11.6, 1.45, 4.25),
      e.mat(0.55, 0.25, 0, 0),
      aC(
        e,
        i,
        a,
        1.45,
        0.75,
        0.7,
        {
          rise: 0.38,
          cell: t.c(`copper`),
          color: RE,
          thick: 0.1,
          eave: 0.2,
          band: 5217672,
          ridgeH: 0.12,
          ridgeColor: 5214076,
          rows: 2,
          wallY: 1.45,
          wallInset: 0.3,
          wallColor: FE,
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
      HC(e, -10.6, 10.8, 8.5, 811),
      e.pole(-10.6, 10.8, 0.35, 0, 4),
      KE(e, 11, 11, 9.5, 3),
      HC(e, -12.1, -11, 5.5, 37),
      e.pole(-12.1, -11, 0.25, 0, 3),
      JE(e, 10.6, -6.2, 1.3, 2, 0.2, 1),
      JE(e, 11.4, -0.4, 1.1, 1.6, -0.15, 0.9),
      JE(e, 10.4, 8, 1, 1.7, 0.4, 1.1),
      JE(e, -11.6, 4.8, 1.2, 1.9, -0.3, 0.95));
  }
  yield;
  for (let t of [-24, -56, -88]) (GE(e, -3.3, t, 1), GE(e, 3.3, t, 1));
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
    (KE(e, 3.8, -30, 9, 7, 1),
    KE(e, -3.8, -70, 9.5, 2, -1),
    KE(e, 3.8, -104, 8.5, 9, 1),
    JE(e, -3.2, -40, 1.4, 2.2, 0.1, 1),
    JE(e, 3.2, -64, 1.2, 1.8, -0.2, 0.92),
    JE(e, -3.3, -96, 1.1, 2, 0.25, 1.05),
    qE(e, -3.5, -76),
    qE(e, 3.5, -52),
    qE(e, -3.5, -104)),
    GE(e, -3.1, -118.5, 1.35),
    GE(e, 3.1, -118.5, 1.35),
    e.col(16777215).mat(0.85, 0, 0, 0),
    e.col(BE).box(-3.7, 0, -115, -2.7, 0.35, -114),
    e.col(16777215),
    e.box(-3.4400000000000004, 0.35, -114.74, -2.96, 3.2, -114.26, c),
    e
      .col(11578531)
      .lathe(-3.2, -114.5, [0.34, 3.2, 0.2, 3.45, 0.02, 3.5], 4, Math.PI / 4),
    e.solid(-3.7, -115, -2.7, -114, 0, 3.4),
    yield);
  {
    let t = gE * Math.cos(HE);
    (e.solidRot(0, hE, t, t, 0, 0, 14),
      e.solidRot(0, hE, t, t, Math.PI / 4, 0, 14),
      e.solid(-9.4, DE, kE, OE, 0, 10),
      e.solid(-9.4, AE, -3.4, DE, 0, 1.5),
      e.solid(3.4, AE, kE, DE, 0, 1.5),
      e.floor(-3, jE, ME, AE, 0, bE, `stairs`),
      e.floor(-9.4, AE, kE, DE, bE, bE, `platform`));
  }
}
