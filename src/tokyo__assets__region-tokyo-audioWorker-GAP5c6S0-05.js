// tokyo__assets__region-tokyo-audioWorker-GAP5c6S0 05 — math
// Lines 1419-1704 of readable/tokyo__assets__region-tokyo-audioWorker-GAP5c6S0.pretty.js (statement-aligned).
const Be = {
  tk_piyo: (e, t) => {
    let n = M,
      r = a(0.42, n),
      i = t ? 0.94 : 1,
      s = (e) => {
        let t = d(1088, n, (e) => i * (2900 + (e / 0.034) * 400), `sine`);
        b(t, n, [0, 0, 0.004, 1, 0.028, 0.9, 0.034, 0]);
        let a = 0.082,
          o = (e) => i * (3200 - 900 * (e / a) ** 0.8),
          s = d(2624, n, o, `sine`);
        (S(
          s,
          d(s.length, n, (e) => 2 * o(e), `sine`),
          0.1,
        ),
          b(s, n, [0, 0, 0.006, 1, 0.057, 0.85, a, 0]),
          S(r, t, 1, Math.round(e * n)),
          S(r, s, 1, Math.round((e + 0.048) * n)));
      };
    return (s(0.01), t && s(0.2), w(r, 1.3), o(C(r, 0.75), n));
  },
  tk_kakko: (e, t) => {
    let n = M,
      r = a(t ? 0.62 : 0.5, n),
      i = t ? 1.04 : 1,
      s = (e, t, a, o, s = 1) => {
        let c = d(
          Math.round(a * n),
          n,
          (n) => i * (e + (t - e) * (n / a)),
          `sine`,
        );
        (S(
          c,
          d(c.length, n, (n) => 3 * i * (e + (t - e) * (n / a)), `sine`),
          0.06,
        ),
          b(c, n, [0, 0, 0.012, 1, a * 0.75, 0.75, a, 0]),
          S(r, c, s, Math.round(o * n)));
      },
      c = 0.01;
    return (
      t && (s(1e3, 990, 0.045, c, 0.8), (c += 0.085)),
      s(1005, 995, 0.06, c),
      s(805, 780, 0.26, c + 0.11),
      o(C(r, 0.75), n)
    );
  },
  tk_door: (e) => {
    let t = M,
      r = a(2.1, t);
    for (let e = 0; e < 3; e++) {
      let i = 0.02 + e * 0.5;
      (S(r, F(t, n(88), 0.9, 0.35), 0.6, Math.round(i * t)),
        S(r, F(t, n(85), 1, 0.4), 0.6, Math.round((i + 0.2) * t)));
    }
    let [i] = E(r, t, { size: 0.4, wet: 0.12, tail: 0.3 });
    return o(C(i, 0.8), t);
  },
  tk_atc: () => Ge(!1),
  tk_atcb: () => Ge(!0),
  tk_buzz: (e) => {
    let t = N,
      n = a(0.75, t);
    for (let [e, r] of [
      [0.01, 0.12],
      [0.22, 0.3],
    ]) {
      let i = d(Math.round(r * t), t, 420, `square`);
      (S(i, d(Math.round(r * t), t, 840, `saw`), 0.15),
        h(i, t, 1800, 0.7),
        S(
          n,
          b(i, t, [0, 0, 0.01, 1, r - 0.02, 1, r, 0]),
          0.6,
          Math.round(e * t),
        ));
    }
    return o(C(n, 0.6), t);
  },
  tk_pa: (e) => {
    let t = M,
      r = a(2.2, t);
    [77, 81, 84, 89].forEach((e, i) =>
      S(
        r,
        F(t, n(e), 1.6, i === 3 ? 0.9 : 0.5),
        0.5,
        Math.round((0.02 + i * 0.22) * t),
      ),
    );
    let [i] = E(r, t, { size: 0.55, wet: 0.2, tail: 0.5 });
    return o(C(i, 0.75), t);
  },
  tk_konbini: (e, t) => {
    let r = M,
      i = a(t ? 1.7 : 1.3, r),
      s = t
        ? [
            [79, 0],
            [84, 0.13],
            [88, 0.26],
            [86, 0.39],
            [83, 0.6],
            [84, 0.73],
          ]
        : [
            [81, 0],
            [78, 0.3],
          ];
    for (let [e, a] of s)
      S(i, F(r, n(e), 1, t ? 0.45 : 0.8), 0.6, Math.round((a + 0.01) * r));
    return o(C(i, 0.75), r);
  },
  tk_bell: (e, t) => {
    let n = 44100,
      r = a(t ? 1.25 : 0.9, n),
      i = (t, i) => {
        S(
          r,
          je(n, 0.85, e, [
            [2410, 1, 0.42],
            [3920, 0.7, 0.3],
            [5830, 0.45, 0.18],
            [7380, 0.25, 0.1],
          ]),
          i,
          Math.round(t * n),
        );
        for (let a = 1; a <= 3; a++)
          S(
            r,
            je(n, 0.25, e, [
              [2410, 1, 0.2],
              [5830, 0.5, 0.1],
            ]),
            (i * 0.35) / a,
            Math.round((t + 0.035 * a) * n),
          );
      };
    return (i(0.005, 1), t && i(0.3, 0.9), o(C(r, 0.8), n));
  },
  tk_bikestart: (e) => {
    let t = M,
      n = a(0.75, t);
    (S(n, L(t, 0.12, 420, 180, 0.01, 0.03), 0.6, 0),
      S(n, I(t, 0.05, e, `bp`, 1800, 1.4, 5e-4, 0.012), 0.8, 0),
      S(
        n,
        je(t, 0.3, e, [
          [1240, 1, 0.12],
          [3110, 0.5, 0.06],
        ]),
        0.5,
        0,
      ));
    for (let e of [0.35, 0.48]) {
      let r = d(2240, t, 2050, `square`);
      (h(r, t, 3800),
        b(r, t, [0, 0, 0.003, 1, 0.06, 1, 0.07, 0]),
        S(n, r, 0.18, Math.round(e * t)));
    }
    return o(C(n, 0.75), t);
  },
  tk_kankan: (e) => {
    let t = M,
      n = a(0.95, t);
    return (
      S(n, Ve(t, 730, e), 1, 0),
      S(n, Ve(t, 742, e), 0.92, 13440),
      o(C(n, 0.8), t)
    );
  },
  tk_suzu: (e, t) => {
    let n = M,
      r = a(t ? 1.6 : 2.6, n);
    for (let t = 0; t < 46; t++) {
      let i = 0.02 + (t / 46) * 1.1 + e.range(-0.01, 0.01);
      S(
        r,
        P(n, e.range(3e3, 6800), 0.35, [
          [1, 1, 0.12],
          [1.51, 0.4, 0.06],
        ]),
        (0.25 + 0.3 * Math.sin((Math.PI * t) / 46)) * e.range(0.6, 1),
        Math.round(i * n),
      );
    }
    if (!t)
      for (let t of [1.75, 2.25]) {
        let i = I(n, 0.09, e, `bp`, 1300, 0.9, 4e-4, 0.016);
        (S(i, L(n, 0.06, 300, 160, 0.005, 0.012), 0.3),
          S(r, i, 1.4, Math.round(t * n)));
      }
    let [i] = E(r, n, { size: 0.6, wet: 0.18, tail: 0.6 });
    return o(C(i, 0.8), n);
  },
  tk_crow: (e, t) => {
    let n = N,
      r = 2 + (t % 2),
      i = a(0.55 * r + 0.3, n);
    for (let a = 0; a < r; a++) {
      let r = e.range(0.28, 0.4),
        o = e.range(480, 560),
        s = oe(
          Math.round(r * n),
          n,
          (e) => o * (1 - (e / r) * 0.18),
          se([
            [0, `a`],
            [r * 0.7, `a`],
            [r, `o`],
          ]),
          e,
          { rough: 0.9, breath: 0.25, jitter: 0.05, scale: 1.25 },
        );
      (b(s, n, [0, 0, 0.02, 1, r * 0.6, 0.85, r, 0]),
        S(i, s, 1, Math.round((0.02 + a * (0.5 + 0.05 * t)) * n)));
    }
    return (g(i, n, 300), w(i, 1.8), o(C(i, 0.7), n));
  },
  tk_siren_far: (e, n) => {
    let r = 8e3,
      i = 52e3,
      a = n
        ? (e) => 450 + 800 * (0.5 - 0.5 * Math.cos((t * e) / 4))
        : (e) => (Math.floor(e / 0.65) % 2 ? 770 : 960),
      o = d(i, r, a, `square`);
    (S(
      o,
      d(i, r, (e) => a(e) * 1.003, `saw`),
      0.5,
    ),
      h(o, r, 1500, 0.7),
      b(o, r, [0, 0, 1.5, 0.7, 3.8, 1, 5.3, 0.5, 6.5, 0]));
    let [s, c] = E(o, r, {
      size: 0.8,
      damp: 0.6,
      wet: 0.5,
      dry: 0.5,
      tail: 1.2,
    });
    return (h(s, r, 1800), h(c, r, 1800), C({ sr: r, ch: [s, c] }, 0.6));
  },
  tk_yuyake: (e) => Ie(e),
  tk_hotaru: (e) => Le(e),
  tk_hyoshigi: (e) => {
    let t = N,
      n = a(1, t);
    for (let [r, i, a] of [
      [0.02, 1, 1],
      [0.44, 0.85, 0.97],
    ]) {
      let o = je(t, 0.22, e, [
        [1480 * a, 1, 0.032],
        [2410 * a, 0.6, 0.02],
        [3920 * a, 0.32, 0.011],
        [5650 * a, 0.16, 0.007],
      ]);
      (S(o, I(t, 0.012, e, `bp`, 2600, 1.2, 2e-4, 0.003), 0.6),
        S(n, o, i, Math.round(r * t)));
    }
    let [r] = E(n, t, {
      size: 0.75,
      damp: 0.45,
      wet: 0.32,
      dry: 1,
      tail: 0.9,
      predelay: 0.03,
    });
    return o(C(r, 0.8), t);
  },
};
ye.forEach((e, t) => {
  Be[`tk_mel${t}`] = (t, n) => Fe(e, t, n ? e.tail : 0);
});
function Ve(e, t, n) {
  let r = P(e, t, 0.5, [
    [1, 1, 0.3],
    [2.32, 0.45, 0.16],
    [3.89, 0.25, 0.09],
    [5.4, 0.12, 0.05],
  ]);
  return (S(r, I(e, 0.01, n, `hp`, 2500, 0.7, 2e-4, 0.002), 0.3), w(r, 1.4), r);
}
