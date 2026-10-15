// tokyo/assets/audio-DzcbodvB 09 — math
// Lines 3941-4286 of readable/tokyo/assets/audio-DzcbodvB.pretty.js (statement-aligned).
var et = {
    piano: Ne,
    epiano: Pe,
    nylon: Fe,
    bass: Ie,
    synthbass: Le,
    pad: Re,
    strings: ze,
    supersaw: Be,
    lead: Ve,
    suona: He,
    erhu: Ue,
    vox: We,
    power: Ke,
    chug: qe,
    distlead: Je,
    organ: Ye,
    harpsi: Xe,
    musicbox: Ze,
    marimba: Qe,
    flute: $e,
  },
  tt = Object.fromEntries(
    Object.entries(Me).map(([e, t]) => [e, { ...t, render: et[e] }]),
  ),
  nt = 44100,
  H = 32e3,
  rt = {
    kick808: (e) => {
      let t = H,
        n = F(t, 0.9, 150, 47, 0.035, 0.45, 0.001);
      return (
        O(n, I(t, 0.01, e, `hp`, 3e3, 0.7, 1e-4, 0.0015), 0.3),
        A(n, 1.8),
        B(k(n, 0.95), t)
      );
    },
    kick: (e) => {
      let t = H,
        n = F(t, 0.45, 165, 50, 0.022, 0.16, 5e-4);
      return (
        O(n, I(t, 0.02, e, `bp`, 3500, 1, 1e-4, 0.002), 0.35),
        A(n, 2.5),
        B(k(n, 0.95), t)
      );
    },
    kick_lofi: (e) => {
      let t = H,
        n = F(t, 0.5, 110, 50, 0.03, 0.22, 0.002);
      return (
        O(n, I(t, 0.03, e, `lp`, 1200, 0.7, 0.001, 0.006), 0.3),
        x(n, t, 2e3),
        A(n, 1.6),
        B(k(n, 0.9), t)
      );
    },
    snare: (e) => {
      let t = nt,
        n = V(0.4, t),
        r = v(n, t, 185, [
          [1, 1, 0.07],
          [1.78, 0.6, 0.05],
        ]),
        i = p(n, e);
      return (
        C(i, t, 3800, 0.45),
        D(i, t, 0.001, 0.12),
        O(r, i, 1.3),
        O(r, I(t, 0.01, e, `hp`, 2e3, 0.7, 1e-4, 0.001), 0.4),
        A(r, 1.6),
        B(k(r, 0.9), t)
      );
    },
    snare_lofi: (e) => {
      let t = H,
        n = V(0.35, t),
        r = v(n, t, 200, [
          [1, 1, 0.05],
          [1.7, 0.5, 0.04],
        ]),
        i = p(n, e);
      return (
        C(i, t, 2500, 0.6),
        x(i, t, 4500),
        D(i, t, 0.002, 0.09),
        O(r, i, 1.1),
        A(r, 1.4),
        B(k(r, 0.85), t)
      );
    },
    rim: (e) => {
      let t = nt,
        n = I(t, 0.08, e, `bp`, 1800, 3, 1e-4, 0.006);
      return (O(n, it(t, 0.08, 820, 0.012), 0.7), B(k(n, 0.85), t));
    },
    clap: (e) => {
      let t = nt,
        n = d(0.4, t);
      for (let r = 0; r < 4; r++)
        O(n, I(t, 0.03, e, `bp`, 1250, 1.5, 2e-4, 0.004), 0.8, r * 0.011 * t);
      return (
        O(n, I(t, 0.35, e, `bp`, 1250, 1.2, 0.001, 0.11), 0.7, 0.033 * t),
        B(k(n, 0.85), t)
      );
    },
    hat_c: (e) => {
      let t = nt,
        n = V(0.12, t),
        r = me(n, t, 1, e);
      return (
        O(r, p(n, e), 0.3),
        C(r, t, 1e4, 1),
        S(r, t, 7e3),
        D(r, t, 5e-4, 0.035),
        B(k(r, 0.8), t)
      );
    },
    hat_o: (e) => {
      let t = nt,
        n = V(0.6, t),
        r = me(n, t, 1, e);
      return (
        O(r, p(n, e), 0.3),
        C(r, t, 9500, 1),
        S(r, t, 6500),
        D(r, t, 0.001, 0.22),
        B(k(r, 0.8), t)
      );
    },
    crash: (e) => {
      let t = H,
        n = V(2.2, t),
        r = new Float32Array(n),
        i = new Float32Array(n);
      for (let a of [r, i]) {
        let r = me(n, t, 1.8, e);
        (O(r, p(n, e), 0.8),
          S(r, t, 3500),
          x(r, t, 13e3),
          D(r, t, 0.002, 0.7),
          O(a, r));
      }
      return k({ sr: t, ch: [r, i] }, 0.8);
    },
    ride: (e) => {
      let t = H,
        n = V(1.2, t),
        r = me(n, t, 2.4, e);
      return (
        O(r, p(n, e), 0.15),
        S(r, t, 3e3),
        D(r, t, 0.001, 0.45),
        O(r, it(t, 1.2, 3150, 0.35), 0.15),
        B(k(r, 0.75), t)
      );
    },
    tom_h: (e) => {
      let t = H,
        n = F(t, 0.5, 240, 175, 0.05, 0.18);
      return (
        O(n, I(t, 0.05, e, `bp`, 1500, 1, 5e-4, 0.01), 0.3),
        B(k(n, 0.9), t)
      );
    },
    tom_l: (e) => {
      let t = H,
        n = F(t, 0.6, 150, 100, 0.05, 0.22);
      return (
        O(n, I(t, 0.05, e, `bp`, 1e3, 1, 5e-4, 0.012), 0.3),
        B(k(n, 0.9), t)
      );
    },
    shaker: (e) => {
      let t = nt,
        n = p(V(0.12, t), e);
      return (S(n, t, 5500), E(n, t, [0, 0, 0.03, 1, 0.1, 0]), B(k(n, 0.7), t));
    },
    snap: (e) => {
      let t = nt,
        n = I(t, 0.12, e, `bp`, 2600, 1.4, 2e-4, 0.018);
      return (
        O(n, I(t, 0.01, e, `hp`, 3e3, 0.7, 1e-4, 0.001), 0.5),
        B(k(n, 0.8), t)
      );
    },
    bigdrum: (e) => {
      let t = H,
        n = F(t, 0.9, 98, 68, 0.03, 0.3);
      return (
        O(
          n,
          v(V(0.8, t), t, 108, [
            [1, 0.35, 0.16],
            [1.33, 0.15, 0.1],
          ]),
        ),
        O(n, I(t, 0.08, e, `lp`, 1100, 0.7, 5e-4, 0.018), 0.45),
        A(n, 1.4),
        B(k(n, 0.9), t)
      );
    },
    gong: (e) => {
      let t = H,
        n = v(
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
        O(n, I(t, 0.2, e, `lp`, 900, 0.7, 0.002, 0.04), 0.4),
        E(n, t, [0, 0, 0.01, 1, 0.1, 0.8, 0.3, 1, 3, 1]),
        B(k(n, 0.85), t)
      );
    },
    opera_gong: (e) => {
      let t = H,
        n = V(1.1, t),
        r = _(n, t, (e) => 620 * (1 + 0.2 * (1 - Math.exp(-e / 0.12))), `sine`);
      return (
        O(
          r,
          _(n, t, (e) => 923.8 * (1 + 0.2 * (1 - Math.exp(-e / 0.12))), `sine`),
          0.4,
        ),
        O(
          r,
          _(
            n,
            t,
            (e) => 1432.2 * (1 + 0.15 * (1 - Math.exp(-e / 0.1))),
            `sine`,
          ),
          0.2,
        ),
        D(r, t, 0.001, 0.3),
        O(r, I(t, 0.03, e, `hp`, 2e3, 0.7, 1e-4, 0.003), 0.2),
        B(k(r, 0.85), t)
      );
    },
    cymbal_bo: (e) => {
      let t = H,
        n = V(1.2, t),
        r = me(n, t, 1.45, e);
      return (
        O(r, p(n, e), 1),
        S(r, t, 1800),
        w(r, t, 4200, 1.5, 5),
        D(r, t, 0.001, 0.32),
        B(k(r, 0.8), t)
      );
    },
    woodblock: (e) => {
      let t = nt;
      return B(
        k(
          T(I(t, 0.2, e, `lp`, 3500, 0.7, 1e-4, 0.0015), t, [
            [900, 1, 0.04],
            [2400, 0.4, 0.015],
          ]),
          0.8,
        ),
        t,
      );
    },
    riser: (e) => {
      let t = 22050,
        n = V(4, t),
        r = p(n, e);
      C(r, t, (e) => 400 * 20 ** (e / 4), 1.5);
      let i = _(n, t, (e) => 110 * 8 ** (e / 4), `saw`);
      return (
        x(i, t, 5e3),
        O(r, i, 0.12),
        E(r, t, [0, 0, 3.8, 1, 4, 0]),
        B(k(r, 0.7), t)
      );
    },
    impact: (e) => {
      let t = H,
        n = F(t, 2, 70, 30, 0.12, 0.5),
        r = m(V(2, t), e);
      return (
        x(r, t, (e) => 5e3 * Math.exp(-e / 0.3) + 200),
        D(r, t, 0.002, 0.4),
        O(n, r, 0.6),
        A(n, 1.8),
        B(k(n, 0.9), t)
      );
    },
    vox_hey: (e) => {
      let t = H,
        n = 0.32,
        r = fe(
          V(n, t),
          t,
          (e) => 260 - (e / n) * 60,
          pe([
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
      return (A(r, 2), S(r, t, 200), B(k(r, 0.85), t));
    },
  };
function it(e, t, n, r) {
  return v(V(t, e), e, n, [[1, 1, r]]);
}
var at = [],
  ot = [
    { rh: `76 75 76 71 74 72` },
    { rh: `69:2 r 60 64 69`, lh: `Am` },
    { rh: `71:2 r 64 68 71`, lh: `E` },
    { rh: `72:2 r 64 76 75`, lh: `Am` },
    { rh: `76 75 76 71 74 72` },
    { rh: `69:2 r 60 64 69`, lh: `Am` },
    { rh: `71:2 r 64 72 71`, lh: `E` },
  ];
(at.push(...ot, { rh: `69:2 r:2 76 75`, lh: `Am` }),
  at.push(...ot, { rh: `69:2 r 71 72 74`, lh: `Am` }),
  at.push(
    { rh: `76:3 67 77 76`, lh: `C` },
    { rh: `74:3 65 76 74`, lh: `G` },
    { rh: `72:3 64 74 72`, lh: `Am` },
    { rh: `71:2 64 64 76 64`, lh: `E` },
    { rh: `76 76 88 75 76 75` },
    { rh: `76 75 76 75 76 75` },
  ),
  at.push(...ot, { rh: `69:6`, lh: `Am` }));
