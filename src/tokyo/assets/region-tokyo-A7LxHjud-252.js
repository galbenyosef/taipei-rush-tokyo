// tokyo/assets/region-tokyo-A7LxHjud 252 — mat
// Lines 94813-95057 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* FSe(e, t) {
  let n = BL,
    r = lL + n.h,
    i = t.c(`ishigaki`);
  (e.col(16776436).mat(0.85, 0, 0, 0),
    gL(
      e,
      t,
      [
        [n.x1, n.z0],
        [n.x0, n.z0],
        [n.x0, n.z1],
        [n.x1, n.z1],
        [n.x1, n.z0],
      ]
        .slice()
        .reverse(),
      () => r,
      lL,
      n.bat / n.h,
      i,
      3,
    ),
    e
      .col(13617338)
      .mat(0.9, 0, 0, 0)
      .flat(n.x0, n.z0, n.x1, n.z1, r, t.c(`gravel`), 4, 4),
    e.solid(n.x0 - 0.8, n.z0 - 0.8, n.x1 + 0.8, n.z1, 12.15, r, `wall`),
    e.solid(n.x0 - 0.8, n.z1, VL.x0, n.z1 + 0.8, 12.15, r, `wall`),
    e.solid(VL.x1, n.z1, n.x1 + 0.8, n.z1 + 0.8, 12.15, r, `wall`),
    e.floor(n.x0, n.z0, n.x1, n.z1, r));
  let a = 0.6;
  e.col(3422010).mat(0.5, 0.6, 0, 0);
  let o = (t, n, i, a) => {
    OL(e, t, n, i, a, r);
    let o = Math.min(t, i) - 0.15,
      s = Math.max(t, i) + 0.15,
      c = Math.min(n, a) - 0.15,
      l = Math.max(n, a) + 0.15;
    e.solid(o, c, s, l, r, r + 1.1, `prop`);
  };
  (o(n.x0 + a, n.z0 + a, n.x1 - a, n.z0 + a),
    o(n.x0 + a, n.z0 + a, n.x0 + a, n.z1 - a),
    o(n.x1 - a, n.z0 + a, n.x1 - a, n.z1 - a),
    o(n.x0 + a, n.z1 - a, VL.x0, n.z1 - a),
    o(VL.x1, n.z1 - a, n.x1 - a, n.z1 - a),
    yield);
  let s = VL,
    c = (e) => lL + (n.h * (s.z1 - e)) / (s.z1 - s.z0);
  e.col(14209732).mat(0.85, 0, 0, 0);
  for (let [t, n] of [
    [s.x0, -1],
    [s.x1, 1],
  ])
    (n > 0
      ? e.quad(
          t,
          12.85,
          s.z1,
          t,
          12.85,
          s.z0,
          t,
          r,
          s.z0,
          t,
          13.200000000000001,
          s.z1,
          i,
        )
      : e.quad(
          t,
          12.85,
          s.z0,
          t,
          12.85,
          s.z1,
          t,
          13.200000000000001,
          s.z1,
          t,
          r,
          s.z0,
          i,
        ),
      e.box(t - 0.3, c(s.z1), s.z0, t + 0.3, r + 0.5, s.z0 + 2));
  (yL(e, t, !1, s.z1, s.z0, s.x0 + 0.4, s.x1 - 0.4, lL, r),
    e.col(12235685).mat(0.85, 0, 0, 0));
  for (let t of [s.x0, s.x1 - 0.4])
    e.quad(
      t,
      13.55,
      s.z1,
      t + 0.4,
      13.55,
      s.z1,
      t + 0.4,
      r + 0.4,
      s.z0,
      t,
      r + 0.4,
      s.z0,
    );
  e.floor(s.x0, s.z0, s.x1, s.z1, r, lL);
  for (let t of [s.x0, s.x1])
    for (let n = s.z0; n < s.z1; n += 5.5)
      e.solid(
        t - 0.25,
        n,
        t + 0.25,
        Math.min(s.z1, n + 5.5),
        12.15,
        c(n) + 1,
        `wall`,
      );
  (yield, ISe(e, t, HL.cx, HL.cz, lL), yield);
  let l = lL;
  if (
    (vL(e, t, s.x0 - 4, s.z1, AL.minX, s.z1 + 8, l),
    vL(e, t, -652, s.z1 + 8, -646, -30, l),
    vL(e, t, -620, s.z1 + 8, -615, -30, l),
    vL(e, t, -646, -36, -620, -30, l),
    vL(e, t, -615, HL.cz - 2, HL.cx - 6, HL.cz + 2, l),
    vL(e, t, -690, s.z1 - 2, s.x0 - 4, s.z1 + 3, l, `earth`),
    vL(e, t, -690, s.z1 + 3, -685, -24, l, `earth`),
    vL(e, t, -600, -42, -512, -37, l, `earth`),
    !e.coarse)
  ) {
    for (let t = -604; t > -640; t -= 14) qC(e, t, l, s.z1 + 8.6, 3.6);
    for (let t = -100; t < -34; t += 16) qC(e, -652.6, l, t, 3.6);
    for (let t = -526; t > -556; t -= 14) qC(e, t, cL, -105.4, 3.6);
  }
}
function ISe(e, t, n, r, i) {
  let a = t.c(`plaster`),
    o = [
      [5, 5, 5.2],
      [3.9, 3.9, 3.8],
      [2.8, 2.8, 3.4],
    ],
    s = i;
  for (let i = 0; i < 3; i++) {
    let [c, l, u] = o[i];
    if (
      (e.col(uL).mat(0.85, 0, 0.1, G),
      e.box(n - c, s, r - l, n + c, s + u, r + l, a, 2, 2),
      !e.coarse)
    ) {
      e.col(2762790).mat(0.8, 0, 0, 0);
      let t = i === 0 ? 3 : 2;
      for (let i = 0; i < t; i++) {
        let a = (i - (t - 1) / 2) * (c * 0.55);
        for (let t of [-1, 1])
          (e.box(
            n + a - 0.45,
            s + u * 0.42,
            r + t * l - 0.05,
            n + a + 0.45,
            s + u * 0.66,
            r + t * l + 0.05,
          ),
            e.box(
              n + t * c - 0.05,
              s + u * 0.42,
              r + a - 0.45,
              n + t * c + 0.05,
              s + u * 0.66,
              r + a + 0.45,
            ));
      }
    }
    e.mat(0.88, 0, 0, 0);
    let d = {
      cell: t.c(`kawara`),
      tile: 3,
      color: dL,
      band: 15263454,
      soffit: 15263454,
      eave: 1.2,
      sori: 0.4,
      curve: 1.3,
      rows: 3,
    };
    if (i < 2) {
      let [a, f] = o[i + 1];
      (sC(e, n, r, s + u + 0.1, c + 1.4, l + 1.4, {
        ...d,
        rise: 1.9,
        R: c + 1.4 - (l + 1.4),
        ridgeH: 0,
      }),
        i === 0 &&
          (cC(
            e,
            n + c * 0.55,
            r,
            s + u + 0.6,
            1.8,
            2.2,
            {
              rise: 1.6,
              cell: t.c(`kawara`),
              color: dL,
              band: 15263454,
              soffit: 15263454,
              ridgeH: 0.3,
              ridgeColor: 5001302,
              eave: 0.6,
              wallY: s + u + 0.6,
              wallInset: 0.3,
              wallColor: uL,
            },
            Math.PI / 2,
          ),
          cC(e, n, r + l * 0.55, s + u + 0.6, 1.8, 2.2, {
            rise: 1.6,
            cell: t.c(`kawara`),
            color: dL,
            band: 15263454,
            soffit: 15263454,
            ridgeH: 0.3,
            ridgeColor: 5001302,
            eave: 0.6,
            wallY: s + u + 0.6,
            wallInset: 0.3,
            wallColor: uL,
          })),
        (s += u + 1));
    } else
      lC(e, n, r, s + u + 0.1, c + 1.5, l + 1.5, {
        ...d,
        rise: 2.8,
        gableColor: uL,
        ridgeH: 0.55,
        ridgeColor: 5001302,
        tg: 0.48,
      });
  }
  if (!e.coarse) {
    e.col(uL).mat(0.85, 0, 0.1, G);
    for (let t of [-1, 1])
      e.box(n + t * 3 - 0.9, i + 0.7, r + 5, n + t * 3 + 0.9, i + 3, r + 5.7);
  }
  e.solid(n - 5, r - 5, n + 5, r + 5, i - 1, i + 15);
}
