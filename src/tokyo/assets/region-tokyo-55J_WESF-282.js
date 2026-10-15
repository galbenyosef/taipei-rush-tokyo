// tokyo/assets/region-tokyo-55J_WESF 282 — col
// Lines 104079-104382 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function Uwe(e, t, n, r, i) {
  let a = 1.1;
  if (
    (BH(e, t, -n - 2, r - 3.5, n + 2, i + 2, 0.7),
    e.push().col(SH).mat(0.85, 0, 0.12, 1),
    e.box(-n, 0.7, r, n, a, i),
    !e.coarse)
  )
    for (let t = 0; t < 3; t++)
      e.box(
        -n * 0.5,
        0,
        r - 3.2 + t * 0.9,
        n * 0.5,
        0.35 + t * 0.25,
        r - 2.3 + t * 0.9,
      );
  let o = (2 * n) / 11,
    s = 6.4;
  for (let t = 0; t <= 11; t++) {
    let i = -n + t * o;
    e.col(SH).box(i - 0.22, a, r - 0.22, i + 0.22, s, r + 0.22);
  }
  (e.col(CH).box(-n, 5.8500000000000005, r - 0.25, n, s, r + 0.25),
    e.box(-n, 4.7, r - 0.2, n, 5, r + 0.2),
    e.col(Lwe).mat(0.9, 0, 0.25, 1));
  for (let t = 0; t < 11; t++) {
    let i = -n + t * o + 0.22,
      a = i + o - 0.44;
    e.panel(a, r + 0.3, i, r + 0.3, 4.2, 5.8500000000000005);
  }
  (e.col(3813158).mat(0.95, 0, 0.08, 1),
    e.panel(n - 0.3, r + 3.5, -n + 0.3, r + 3.5, a, 5.800000000000001),
    e
      .col(2761501)
      .flat(-n + 0.3, r + 0.3, n - 0.3, r + 3.5, 5.84, e.white, 0, 0, !1),
    e.col(SH).mat(0.85, 0, 0.1, 1),
    e.panel(-n, i, n, i, a, s),
    e.pop(),
    e.push().col(SH).mat(0.85, 0, 0.1, 1));
  for (let t of [-n * 0.72, -n * 0.24, n * 0.24, n * 0.72])
    (e.box(t - 0.25, 0.7, r - 3.3, t + 0.25, 5.3, r - 2.8),
      e.solid(t - 0.25, r - 3.3, t + 0.25, r - 2.8, 0, 5.3, `pole`));
  (e.box(-n, 5, r - 3.35, n, 5.45, r - 2.75),
    e.pop(),
    zH(e, t, {
      L: n + 2.6,
      zf: r - 4.4,
      yf: 5.4,
      zr: r + 8.5,
      yr: 13.2,
      zb: i + 2.6,
      yb: 7.6,
      wf: r,
      wb: i,
      wl: n,
      floor: a,
    }),
    e.solid(-n, r + 3.5, n, i, 0, 9));
}
function Wwe(e, t, n, r, i) {
  if (
    (BH(e, t, -n - 1.5, r - 3, n + 1.5, i + 1.5, 1.2),
    e.push().col(SH).mat(0.85, 0, 0.1, 1),
    e.box(-n, 1.2, r, n, 6.8, i),
    !e.coarse)
  ) {
    e.col(CH);
    for (let t = 0; t < 5; t++) {
      let i = -n + 1 + t * ((2 * n - 2) / 5),
        a = i + (2 * n - 2) / 5 - 0.6;
      e.panel(a, r - 0.03, i, r - 0.03, 2, 6);
    }
  }
  (e.pop(),
    zH(e, t, {
      L: n + 2.2,
      zf: r - 4.8,
      yf: 5.6,
      zr: r + (i - r) * 0.42,
      yr: 14.5,
      zb: i + 2.4,
      yb: 7.4,
      wf: r,
      wb: i,
      wl: n,
      floor: 1.2,
    }),
    e.solid(-n - 1.5, r - 3, n + 1.5, i + 1.5, 0, 10));
}
function Gwe(e, t, n) {
  let r = n / 2,
    i = fH.d / 2,
    a = 4.2;
  if (
    (e.push().col(12827822).mat(0.85, 0, 0, 0),
    e.box(-r, -0.1, -i, r, 0.45, i),
    e.col(SH).mat(0.85, 0, 0.035, 1),
    e.panel(r, -i + 0.2, -r, -i + 0.2, 0.45, a),
    e.panel(-r, -i + 0.26, r, -i + 0.26, 0.45, a),
    !e.coarse)
  ) {
    e.col(7232582).mat(0.9, 0, 0.06, 1);
    let t = Math.max(1, Math.round(n / 3.6));
    for (let a = 0; a < t; a++) {
      let o = -r + (a + 0.18) * (n / t),
        s = -r + (a + 0.82) * (n / t);
      e.panel(s, -i + 0.18, o, -i + 0.18, 1.5, 3);
    }
    e.col(SH).mat(0.85, 0, 0.1, 1);
    for (let o = 0; o <= t; o += 2) {
      let s = -r + (n / t) * o;
      (e.panel(s + 0.15, i - 0.15, s - 0.15, i - 0.15, 0.45, a),
        e.panel(s - 0.15, i - 0.15, s - 0.15, i - 0.45, 0.45, a),
        e.panel(s + 0.15, i - 0.45, s + 0.15, i - 0.15, 0.45, a));
    }
    (e.box(-r, 3.75, i - 0.5, r, a, i - 0.1),
      e
        .col(CH)
        .flat(-r, -i + 0.26, r, i - 0.1, 4.180000000000001, e.white, 0, 0, !1));
  }
  (e.pop(),
    aC(e, 0, 0, a, r + 0.5, i + 1.4, {
      rise: 2.2,
      curve: 1.3,
      sori: 0.12,
      cell: t.c(`copper`),
      color: 7109749,
      band: 5204576,
      ridgeColor: 4151376,
      soffit: CH,
      tile: 5,
      rows: 3,
      eave: 1.3,
      ridgeH: 0.5,
      wallY: a,
      wallColor: SH,
      thick: 0.3,
    }),
    e.solid(-r, -i, r, -i + 0.4, 0, a));
}
function VH(e, t, n, r, i) {
  let a = {
    cell: t.c(`copper`),
    color: 7109749,
    band: 5204576,
    ridgeColor: 4151376,
    soffit: CH,
    tile: 3,
  };
  (e.push().col(12827822).mat(0.85, 0, 0, 0),
    e.box(-n - 0.6, -0.1, -r - 0.6, n + 0.6, 0.5, r + 0.6),
    e.col(SH).mat(0.85, 0, 0.12, 1));
  let o = i ? 5.4 : 5.2;
  for (let t of [-n, -n * 0.36, n * 0.36, n])
    for (let n of [-r, r])
      (e.box(t - 0.3, 0.5, n - 0.3, t + 0.3, o, n + 0.3),
        e.pole(t, n, 0.4, 0, o));
  for (let t of [-r, r])
    e.box(-n - 0.3, o - 0.7, t - 0.35, n + 0.3, o, t + 0.35);
  for (let t of [-n, n]) e.box(t - 0.35, o - 0.7, -r, t + 0.35, o, r);
  for (let t of [-1, 1]) {
    let r = t * n,
      i = t * n * 0.36;
    (e.col(SH, 0.92),
      e.panel(Math.min(r, i) * 1, 0, Math.max(r, i), 0, 0.5, o - 0.7),
      e.panel(Math.max(r, i), 0.06, Math.min(r, i), 0.06, 0.5, o - 0.7),
      e.solid(Math.min(r, i), -0.2, Math.max(r, i), 0.25, 0, o));
  }
  let s = o;
  if (i) {
    if (
      (e.col(CH).mat(0.85, 0, 0.08, 1),
      e.box(-n - 1, o, -r - 1, n + 1, o + 0.6, r + 1),
      !e.coarse)
    ) {
      e.col(SH).mat(0.85, 0, 0.1, 1);
      for (let t of [-r - 0.9, r + 0.9])
        e.box(-n - 0.9, o + 1.15, t - 0.07, n + 0.9, o + 1.25, t + 0.07);
      for (let t of [-n - 0.9, n + 0.9])
        e.box(t - 0.07, o + 1.15, -r - 0.9, t + 0.07, o + 1.25, r + 0.9);
    }
    e.col(SH).mat(0.85, 0, 0.12, 1);
    let t = n - 0.4,
      i = r - 0.4;
    if ((e.box(-t, o + 0.6, -i, t, o + 3.6, i), !e.coarse)) {
      for (let n of [-i - 0.02, i + 0.02])
        for (let r of [-t * 0.6, 0, t * 0.6]) {
          let t = n < 0 ? -1 : 1;
          (e.col(4075812),
            t < 0
              ? e.panel(r + 1.1, n, r - 1.1, n, o + 1.4, o + 3)
              : e.panel(r - 1.1, n, r + 1.1, n, o + 1.4, o + 3),
            e.col(SH));
          for (let i = -4; i <= 4; i++) {
            let a = r + i * 0.24,
              s = n + t * 0.02;
            t < 0
              ? e.panel(a + 0.05, s, a - 0.05, s, o + 1.4, o + 3)
              : e.panel(a - 0.05, s, a + 0.05, s, o + 1.4, o + 3);
          }
        }
      e.col(CH).box(-t - 0.5, o + 3.2, -i - 0.5, t + 0.5, o + 3.75, i + 0.5);
    }
    s = o + 3.75;
  }
  (e.pop(),
    aC(e, 0, 0, s + 0.1, n + 2.6, r + 2.6, {
      rise: i ? 4 : 3.2,
      curve: 1.4,
      sori: 0.2,
      ...a,
      wallY: s,
      wallInset: 2.6,
      wallColor: SH,
      eave: 1.8,
      ridgeH: 0.7,
      thick: 0.4,
    }));
}
function Kwe(e, t, n, r) {
  let i = e.sub(n, 0, r, 0);
  e.push().col(SH).mat(0.85, 0, 0.1, 1);
  for (let t of [-1, 1])
    for (let n of [-1, 1])
      (e.box(t * 3 - 0.18, 0, n * 2 - 0.18, t * 3 + 0.18, 3.4, n * 2 + 0.18),
        e.pole(t * 3, n * 2, 0.25, 0, 3.4));
  (e.col(10262156).mat(0.9, 0, 0, 0).box(-2.2, 0, -0.8, 2.2, 0.85, 0.8),
    e.col(4020826).mat(0.1, 0.2, 0, 0).flat(-2, -0.6, 2, 0.6, 0.86),
    e.pop(),
    aC(
      e,
      0,
      0,
      3.4,
      4.2,
      3.2,
      {
        rise: 1.8,
        cell: t.c(`copper`),
        color: 7109749,
        band: 5204576,
        ridgeColor: 4151376,
        soffit: CH,
        tile: 2,
        rows: 4,
        eave: 1.1,
        ridgeH: 0.4,
        wallY: 3.4,
        wallColor: SH,
      },
      Math.PI / 2,
    ),
    e.leave(i));
}
var HH = [
  12068906, 2043738, 1776411, 13081134, 3037754, 6957658, 13650462, 2779802,
];
function UH(e, t, n, r, i, a) {
  e.push().col(3878436).mat(0.9);
  for (
    let t = -n;
    t <= n + 0.01;
    t += (2 * n) / Math.max(1, Math.round((2 * n) / 4.5))
  )
    (e.box(t - 0.1, 0, -0.9, t + 0.1, a, -0.7),
      e.box(t - 0.1, 0, r - 0.2, t + 0.1, i, r),
      e.pole(t, -0.8, 0.15, 0, a));
  (e.box(-n - 0.3, a - 0.25, -1, n + 0.3, a, -0.6),
    e.pop(),
    e.push().col(5260861).mat(0.8, 0.1));
  let o = e.coarse ? e.white : t.c(`kawara`);
  (e.quad(
    -n - 0.6,
    a,
    -1.4,
    n + 0.6,
    a,
    -1.4,
    n + 0.6,
    i + 0.15,
    r + 0.4,
    -n - 0.6,
    i + 0.15,
    r + 0.4,
    o,
  ),
    e.col(3024416),
    e.quad(
      n + 0.6,
      a - 0.02,
      -1.4,
      -n - 0.6,
      a - 0.02,
      -1.4,
      -n - 0.6,
      i + 0.13,
      r + 0.4,
      n + 0.6,
      i + 0.13,
      r + 0.4,
    ),
    e.pop());
}
