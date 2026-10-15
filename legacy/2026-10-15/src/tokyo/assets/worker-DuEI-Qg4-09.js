// tokyo/assets/worker-DuEI-Qg4 09 — math
// Lines 3906-4252 of readable/tokyo/assets/worker-DuEI-Qg4.pretty.js (statement-aligned).
const Je = {
    piano: De,
    epiano: Oe,
    nylon: ke,
    bass: Ae,
    synthbass: je,
    pad: Me,
    strings: Ne,
    supersaw: Pe,
    lead: Fe,
    suona: Ie,
    erhu: Le,
    vox: Re,
    power: Be,
    chug: Ve,
    distlead: He,
    organ: Ue,
    harpsi: We,
    musicbox: Ge,
    marimba: Ke,
    flute: qe,
  },
  Ye = Object.fromEntries(
    Object.entries(Ee).map(([e, t]) => [e, { ...t, render: Je[e] }]),
  ),
  H = 44100,
  U = 32e3,
  Xe = {
    kick808: (e) => {
      let t = U,
        n = N(t, 0.9, 150, 47, 0.035, 0.45, 0.001);
      return (
        S(n, P(t, 0.01, e, `hp`, 3e3, 0.7, 1e-4, 0.0015), 0.3),
        w(n, 1.8),
        B(C(n, 0.95), t)
      );
    },
    kick: (e) => {
      let t = U,
        n = N(t, 0.45, 165, 50, 0.022, 0.16, 5e-4);
      return (
        S(n, P(t, 0.02, e, `bp`, 3500, 1, 1e-4, 0.002), 0.35),
        w(n, 2.5),
        B(C(n, 0.95), t)
      );
    },
    kick_lofi: (e) => {
      let t = U,
        n = N(t, 0.5, 110, 50, 0.03, 0.22, 0.002);
      return (
        S(n, P(t, 0.03, e, `lp`, 1200, 0.7, 0.001, 0.006), 0.3),
        h(n, t, 2e3),
        w(n, 1.6),
        B(C(n, 0.9), t)
      );
    },
    snare: (e) => {
      let t = H,
        n = V(0.4, t),
        r = f(n, t, 185, [
          [1, 1, 0.07],
          [1.78, 0.6, 0.05],
        ]),
        i = s(n, e);
      return (
        _(i, t, 3800, 0.45),
        x(i, t, 0.001, 0.12),
        S(r, i, 1.3),
        S(r, P(t, 0.01, e, `hp`, 2e3, 0.7, 1e-4, 0.001), 0.4),
        w(r, 1.6),
        B(C(r, 0.9), t)
      );
    },
    snare_lofi: (e) => {
      let t = U,
        n = V(0.35, t),
        r = f(n, t, 200, [
          [1, 1, 0.05],
          [1.7, 0.5, 0.04],
        ]),
        i = s(n, e);
      return (
        _(i, t, 2500, 0.6),
        h(i, t, 4500),
        x(i, t, 0.002, 0.09),
        S(r, i, 1.1),
        w(r, 1.4),
        B(C(r, 0.85), t)
      );
    },
    rim: (e) => {
      let t = H,
        n = P(t, 0.08, e, `bp`, 1800, 3, 1e-4, 0.006);
      return (S(n, Ze(t, 0.08, 820, 0.012), 0.7), B(C(n, 0.85), t));
    },
    clap: (e) => {
      let t = H,
        n = a(0.4, t);
      for (let r = 0; r < 4; r++)
        S(n, P(t, 0.03, e, `bp`, 1250, 1.5, 2e-4, 0.004), 0.8, r * 0.011 * t);
      return (
        S(n, P(t, 0.35, e, `bp`, 1250, 1.2, 0.001, 0.11), 0.7, 0.033 * t),
        B(C(n, 0.85), t)
      );
    },
    hat_c: (e) => {
      let t = H,
        n = V(0.12, t),
        r = ue(n, t, 1, e);
      return (
        S(r, s(n, e), 0.3),
        _(r, t, 1e4, 1),
        g(r, t, 7e3),
        x(r, t, 5e-4, 0.035),
        B(C(r, 0.8), t)
      );
    },
    hat_o: (e) => {
      let t = H,
        n = V(0.6, t),
        r = ue(n, t, 1, e);
      return (
        S(r, s(n, e), 0.3),
        _(r, t, 9500, 1),
        g(r, t, 6500),
        x(r, t, 0.001, 0.22),
        B(C(r, 0.8), t)
      );
    },
    crash: (e) => {
      let t = U,
        n = V(2.2, t),
        r = new Float32Array(n),
        i = new Float32Array(n);
      for (let a of [r, i]) {
        let r = ue(n, t, 1.8, e);
        (S(r, s(n, e), 0.8),
          g(r, t, 3500),
          h(r, t, 13e3),
          x(r, t, 0.002, 0.7),
          S(a, r));
      }
      return C({ sr: t, ch: [r, i] }, 0.8);
    },
    ride: (e) => {
      let t = U,
        n = V(1.2, t),
        r = ue(n, t, 2.4, e);
      return (
        S(r, s(n, e), 0.15),
        g(r, t, 3e3),
        x(r, t, 0.001, 0.45),
        S(r, Ze(t, 1.2, 3150, 0.35), 0.15),
        B(C(r, 0.75), t)
      );
    },
    tom_h: (e) => {
      let t = U,
        n = N(t, 0.5, 240, 175, 0.05, 0.18);
      return (
        S(n, P(t, 0.05, e, `bp`, 1500, 1, 5e-4, 0.01), 0.3),
        B(C(n, 0.9), t)
      );
    },
    tom_l: (e) => {
      let t = U,
        n = N(t, 0.6, 150, 100, 0.05, 0.22);
      return (
        S(n, P(t, 0.05, e, `bp`, 1e3, 1, 5e-4, 0.012), 0.3),
        B(C(n, 0.9), t)
      );
    },
    shaker: (e) => {
      let t = H,
        n = s(V(0.12, t), e);
      return (g(n, t, 5500), b(n, t, [0, 0, 0.03, 1, 0.1, 0]), B(C(n, 0.7), t));
    },
    snap: (e) => {
      let t = H,
        n = P(t, 0.12, e, `bp`, 2600, 1.4, 2e-4, 0.018);
      return (
        S(n, P(t, 0.01, e, `hp`, 3e3, 0.7, 1e-4, 0.001), 0.5),
        B(C(n, 0.8), t)
      );
    },
    bigdrum: (e) => {
      let t = U,
        n = N(t, 0.9, 98, 68, 0.03, 0.3);
      return (
        S(
          n,
          f(V(0.8, t), t, 108, [
            [1, 0.35, 0.16],
            [1.33, 0.15, 0.1],
          ]),
        ),
        S(n, P(t, 0.08, e, `lp`, 1100, 0.7, 5e-4, 0.018), 0.45),
        w(n, 1.4),
        B(C(n, 0.9), t)
      );
    },
    gong: (e) => {
      let t = U,
        n = f(
          V(3, t),
          t,
          128,
          [
            [1, 1, 1.8],
            [1.52, 0.7, 1.3],
            [2.03, 0.5, 1],
            [2.59, 0.4, 0.8],
            [3.21, 0.3, 0.5],
            [4.4, 0.2, 0.35],
          ],
          4,
          e,
        );
      return (
        S(n, P(t, 0.2, e, `lp`, 900, 0.7, 0.002, 0.04), 0.4),
        b(n, t, [0, 0, 0.01, 1, 0.1, 0.8, 0.3, 1, 3, 1]),
        B(C(n, 0.85), t)
      );
    },
    opera_gong: (e) => {
      let t = U,
        n = V(1.1, t),
        r = d(n, t, (e) => 620 * (1 + 0.2 * (1 - Math.exp(-e / 0.12))), `sine`);
      return (
        S(
          r,
          d(n, t, (e) => 923.8 * (1 + 0.2 * (1 - Math.exp(-e / 0.12))), `sine`),
          0.4,
        ),
        S(
          r,
          d(
            n,
            t,
            (e) => 1432.2 * (1 + 0.15 * (1 - Math.exp(-e / 0.1))),
            `sine`,
          ),
          0.2,
        ),
        x(r, t, 0.001, 0.3),
        S(r, P(t, 0.03, e, `hp`, 2e3, 0.7, 1e-4, 0.003), 0.2),
        B(C(r, 0.85), t)
      );
    },
    cymbal_bo: (e) => {
      let t = U,
        n = V(1.2, t),
        r = ue(n, t, 1.45, e);
      return (
        S(r, s(n, e), 1),
        g(r, t, 1800),
        v(r, t, 4200, 1.5, 5),
        x(r, t, 0.001, 0.32),
        B(C(r, 0.8), t)
      );
    },
    woodblock: (e) => {
      let t = H,
        n = y(P(t, 0.2, e, `lp`, 3500, 0.7, 1e-4, 0.0015), t, [
          [900, 1, 0.04],
          [2400, 0.4, 0.015],
        ]);
      return B(C(n, 0.8), t);
    },
    riser: (e) => {
      let t = 22050,
        n = V(4, t),
        r = s(n, e);
      _(r, t, (e) => 400 * 20 ** (e / 4), 1.5);
      let i = d(n, t, (e) => 110 * 8 ** (e / 4), `saw`);
      return (
        h(i, t, 5e3),
        S(r, i, 0.12),
        b(r, t, [0, 0, 3.8, 1, 4, 0]),
        B(C(r, 0.7), t)
      );
    },
    impact: (e) => {
      let t = U,
        n = N(t, 2, 70, 30, 0.12, 0.5),
        r = c(V(2, t), e);
      return (
        h(r, t, (e) => 5e3 * Math.exp(-e / 0.3) + 200),
        x(r, t, 0.002, 0.4),
        S(n, r, 0.6),
        w(n, 1.8),
        B(C(n, 0.9), t)
      );
    },
    vox_hey: (e) => {
      let t = U,
        n = 0.32,
        r = O(
          V(n, t),
          t,
          (e) => 260 - (e / n) * 60,
          k([
            [0, `e`],
            [n, `i`],
          ]),
          e,
          {
            breath: 0.2,
            rough: 0.35,
            amp: (e) =>
              Math.min(1, e / 0.01) *
              Math.max(0, 1 - Math.max(0, e - 0.15) / 0.17),
          },
        );
      return (w(r, 2), g(r, t, 200), B(C(r, 0.85), t));
    },
  };
function Ze(e, t, n, r) {
  return f(V(t, e), e, n, [[1, 1, r]]);
}
const Qe = [],
  $e = [
    { rh: `76 75 76 71 74 72` },
    { rh: `69:2 r 60 64 69`, lh: `Am` },
    { rh: `71:2 r 64 68 71`, lh: `E` },
    { rh: `72:2 r 64 76 75`, lh: `Am` },
    { rh: `76 75 76 71 74 72` },
    { rh: `69:2 r 60 64 69`, lh: `Am` },
    { rh: `71:2 r 64 72 71`, lh: `E` },
  ];
(Qe.push(...$e, { rh: `69:2 r:2 76 75`, lh: `Am` }),
  Qe.push(...$e, { rh: `69:2 r 71 72 74`, lh: `Am` }),
  Qe.push(
    { rh: `76:3 67 77 76`, lh: `C` },
    { rh: `74:3 65 76 74`, lh: `G` },
    { rh: `72:3 64 74 72`, lh: `Am` },
    { rh: `71:2 64 64 76 64`, lh: `E` },
    { rh: `76 76 88 75 76 75` },
    { rh: `76 75 76 75 76 75` },
  ),
  Qe.push(...$e, { rh: `69:6`, lh: `Am` }));
const et = {
  Am: [45, 52, 57],
  E: [40, 52, 56],
  C: [48, 55, 60],
  G: [43, 55, 59],
};
