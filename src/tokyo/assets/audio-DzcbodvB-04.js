// tokyo/assets/audio-DzcbodvB 04 — math
// Lines 740-2789 of readable/tokyo/assets/audio-DzcbodvB.pretty.js (statement-aligned).
var Ee = {
    ui_click: (e) => {
      let t = M,
        n = L(t, 0.06, 2300, 0.007);
      return (
        O(n, L(t, 0.06, 3450, 0.004), 0.4),
        O(n, I(t, 0.01, e, `hp`, 3500, 0.7, 3e-4, 0.0015), 0.3),
        f(k(n, 0.8), t)
      );
    },
    ui_hover: (e) => {
      let t = M,
        n = L(t, 0.04, 3100, 0.004);
      return (
        O(n, I(t, 0.01, e, `hp`, 5e3, 0.7, 3e-4, 0.001), 0.2),
        f(k(n, 0.5), t)
      );
    },
    ui_back: () => {
      let e = M,
        t = d(0.35, e);
      return (
        O(t, ve(e, c(79), 0.3, 0.09)),
        O(t, ve(e, c(74), 0.28, 0.1), 0.9, 0.065 * e),
        f(k(t, 0.7), e)
      );
    },
    ui_confirm: (e) => {
      let t = M,
        n = d(0.6, t);
      return (
        O(n, ye(t, c(84), 0.5, 0.25)),
        O(n, ye(t, c(91), 0.5, 0.3), 0.9, 0.06 * t),
        O(n, I(t, 0.3, e, `hp`, 7e3, 0.7, 0.01, 0.06, 0.06), 0.05),
        f(k(n, 0.75), t)
      );
    },
    phone_open: (e) => {
      let t = M,
        n = d(0.5, t),
        r = p(Math.round(0.2 * t), e);
      return (
        C(r, t, (e) => 700 + (e / 0.2) * 4e3, 1.2),
        E(r, t, [0, 0, 0.12, 1, 0.2, 0]),
        O(n, r, 0.25),
        [88, 92, 95].forEach((e, r) =>
          O(n, ve(t, c(e), 0.25, 0.07), 0.7, (0.1 + r * 0.055) * t),
        ),
        f(k(n, 0.7), t)
      );
    },
    phone_ring: () => {
      let e = N,
        t = d(2.6, e),
        n = [76, 79, 83, 81, 79, 76, 74, 76];
      for (let r = 0; r < 2; r++)
        n.forEach((n, i) =>
          O(t, ve(e, c(n), 0.45, 0.14), 0.8, (r * 1.25 + i * 0.13) * e),
        );
      return f(k(t, 0.75), e);
    },
    phone_notify: () => {
      let e = M,
        t = d(0.6, e);
      return (
        O(t, ye(e, c(88), 0.5, 0.2)),
        O(t, ye(e, c(95), 0.5, 0.25), 0.8, 0.09 * e),
        f(k(t, 0.7), e)
      );
    },
    money: (e) => {
      let t = N,
        [n, r] = Te(t, 1.1),
        i = I(t, 0.08, e, `bp`, 1400, 2, 5e-4, 0.012);
      (O(i, L(t, 0.08, 620, 0.02), 0.5),
        j(n, r, i, 0, 0.8),
        j(
          n,
          r,
          v(Math.round(0.9 * t), t, 2637, [
            [1, 1, 0.45],
            [2.41, 0.5, 0.25],
            [3.87, 0.3, 0.12],
            [5.3, 0.15, 0.06],
          ]),
          0.1,
          0.55,
          0.05 * t,
        ));
      for (let i = 0; i < 9; i++) {
        let i = e.range(3200, 7200);
        j(
          n,
          r,
          v(Math.round(0.12 * t), t, i, [
            [1, 1, 0.03],
            [1.52, 0.5, 0.02],
          ]),
          e.bi() * 0.6,
          e.range(0.1, 0.25),
          (0.08 + e.next() * 0.3) * t,
        );
      }
      return k({ sr: t, ch: [n, r] }, 0.85);
    },
    coin: (e) => {
      let t = M,
        n = d(0.35, t),
        r = 4200 + e.bi() * 300,
        i = () =>
          v(Math.round(0.2 * t), t, r, [
            [1, 1, 0.06],
            [1.62, 0.6, 0.04],
            [2.9, 0.3, 0.02],
          ]);
      return (
        O(n, i()),
        O(n, i(), 0.35, 0.07 * t),
        O(n, i(), 0.12, 0.12 * t),
        f(k(n, 0.7), t)
      );
    },
    pickup: (e) => {
      let t = M,
        n = d(0.8, t);
      return (
        [72, 76, 79, 84, 88].forEach((e, r) =>
          O(n, ye(t, c(e), 0.5, 0.18), 0.7, r * 0.045 * t),
        ),
        O(n, I(t, 0.5, e, `hp`, 8e3, 0.7, 0.05, 0.12), 0.04),
        re(n, t, 0.11, 0.3, 0.25),
        f(k(n, 0.75), t)
      );
    },
    checkpoint: () => {
      let e = M,
        t = d(0.9, e);
      return (
        O(t, be(e, c(88), 0.8, 0.35), 0.7),
        O(t, be(e, c(95), 0.8, 0.4), 0.6, 0.07 * e),
        O(t, ye(e, c(100), 0.6, 0.3), 0.4, 0.14 * e),
        f(k(t, 0.8), e)
      );
    },
    mission_start: (e) => {
      let t = N,
        n = Math.round(2.6 * t),
        r = new Float32Array(n),
        i = new Float32Array(n),
        a = F(t, 1.2, 110, 58, 0.05, 0.35);
      (O(a, I(t, 0.2, e, `lp`, 900, 0.8, 0.001, 0.04), 0.5), j(r, i, a, 0, 1));
      let o = v(
        n,
        t,
        130,
        [
          [1, 1, 1.4],
          [1.47, 0.6, 1],
          [2.09, 0.5, 0.8],
          [2.76, 0.3, 0.6],
          [3.58, 0.2, 0.4],
        ],
        3,
        e,
      );
      (E(o, t, [0, 0, 0.35, 1, 2.6, 1]), j(r, i, o, 0, 0.35));
      let s = Se(t, [c(57), c(64), c(69), c(71), c(76)], 2.4, e, 1400, 0.5);
      return (
        O(r, s.ch[0], 0.5),
        O(i, s.ch[1], 0.5),
        [69, 72, 74, 76, 79, 81].forEach((e, n) => {
          let a = ve(t, c(e), 0.6, 0.2);
          j(r, i, a, -0.3 + n * 0.12, 0.5, (0.12 + n * 0.07) * t);
        }),
        k(ae({ sr: t, ch: [r, i] }, { size: 0.8, wet: 0.35, tail: 1 }), 0.9)
      );
    },
    mission_pass: (e) => {
      let t = N,
        n = 4.2,
        r = Math.round(n * t),
        i = new Float32Array(r),
        a = new Float32Array(r);
      for (let [n, r, o] of [
        [[53, 57, 60, 65], 0, 0.42],
        [[55, 59, 62, 67], 0.42, 0.42],
        [[48, 55, 60, 64, 67, 74], 0.9, 3],
      ])
        n.forEach((s, l) =>
          j(
            i,
            a,
            xe(t, c(s), o, e, r > 0.8 ? 1.2 : 0.8),
            (l / n.length - 0.5) * 0.8,
            0.22,
            r * t,
          ),
        );
      for (let [n, r, o] of [
        [81, 0, 0.4],
        [83, 0.42, 0.3],
        [79, 0.72, 0.06],
        [81, 0.78, 0.06],
        [84, 0.84, 0.06],
        [86, 0.87, 0.05],
        [88, 0.9, 2.6],
      ])
        j(i, a, xe(t, c(n), o, e, 1.3), 0.15, 0.2, r * t);
      for (let [e, n] of [
        [91, 0.9],
        [96, 1.05],
        [100, 1.2],
      ])
        j(i, a, be(t, c(e), 2, 0.8), 0.4, 0.1, n * t);
      (j(i, a, Ce(t, c(36), 2, e), 0, 0.9, 0.9 * t),
        j(i, a, Ce(t, c(43), 1, e), 0, 0.5, 0.42 * t),
        j(i, a, we(t, 2.5, e), -0.3, 0.25, 0.9 * t));
      let o = [0, 1, 3, 1, n, 0];
      return (
        E(i, t, o),
        E(a, t, o),
        k(ae({ sr: t, ch: [i, a] }, { size: 0.75, wet: 0.3, tail: 1.2 }), 0.92)
      );
    },
    mission_fail: (e) => {
      let t = P,
        n = Math.round(2.8 * t),
        r = new Float32Array(n),
        i = new Float32Array(n);
      [
        [63, 0],
        [62, 0.3],
        [61, 0.6],
        [60, 0.9],
      ].forEach(([n, a], o) => {
        let s = xe(t, c(n - 12), o === 3 ? 1.8 : 0.34, e, 0.35);
        j(r, i, s, 0, 0.5, a * t);
      });
      let a = Se(t, [c(48), c(49), c(55), c(61)], 1.9, e, 900, 0.1);
      return (
        O(r, a.ch[0], 0.35, 0.9 * t),
        O(i, a.ch[1], 0.35, 0.9 * t),
        j(r, i, F(t, 1.5, 80, 38, 0.1, 0.5), 0, 0.9, 0.9 * t),
        k(ae({ sr: t, ch: [r, i] }, { size: 0.8, wet: 0.35, tail: 1 }), 0.88)
      );
    },
    wasted: (e) => {
      let t = P,
        n = Math.round(4 * t),
        r = new Float32Array(n),
        i = new Float32Array(n);
      j(r, i, we(t, 0.6, e).reverse(), 0, 0.35);
      let a = 0.55,
        o = F(t, 2.5, 90, 30, 0.2, 0.8);
      (A(o, 2),
        j(r, i, o, 0, 1, a * t),
        j(r, i, I(t, 0.3, e, `lp`, 3e3, 0.7, 0.001, 0.05), 0, 0.5, a * t));
      for (let n = 0; n < 3; n++) {
        let o = _(
          Math.round(3.3 * t),
          t,
          (e) => (110 - 55 * Math.min(1, e / 3)) * l((n - 1) * 14),
          `saw`,
          e.next(),
        );
        (x(o, t, (e) => 1200 * Math.exp(-e / 1.2) + 150, 0.8),
          E(o, t, [0, 0, 0.2, 1, 3.3, 0]),
          j(r, i, o, (n - 1) * 0.7, 0.18, a * t));
      }
      return (
        j(r, i, be(t, 220, 3, 1.4), 0.2, 0.12, a * t),
        k(ae({ sr: t, ch: [r, i] }, { size: 0.9, wet: 0.4, tail: 1.2 }), 0.92)
      );
    },
    busted: (e) => {
      let t = P,
        n = Math.round(3.4 * t),
        r = new Float32Array(n),
        i = new Float32Array(n),
        a = _(
          Math.round(0.5 * t),
          t,
          (e) => (e < 0.2 ? 960 : 740) * (1 - 0.3 * Math.max(0, e - 0.25)),
          `square`,
        );
      (x(a, t, 3e3),
        E(a, t, [0, 0, 0.01, 1, 0.45, 0.8, 0.5, 0]),
        j(r, i, a, 0, 0.25));
      let o = 0.5,
        s = F(t, 2.2, 85, 32, 0.15, 0.7);
      (A(s, 2), j(r, i, s, 0, 1, o * t));
      let l = Se(t, [c(45), c(51), c(56), c(62)], 2.6, e, 1100, 0.05);
      return (
        O(r, l.ch[0], 0.4, o * t),
        O(i, l.ch[1], 0.4, o * t),
        j(r, i, we(t, 2, e), 0, 0.2, o * t),
        k(ae({ sr: t, ch: [r, i] }, { size: 0.85, wet: 0.35, tail: 1 }), 0.9)
      );
    },
    wanted_up: (e) => {
      let t = N,
        n = Math.round(1.3 * t),
        r = new Float32Array(n),
        i = new Float32Array(n);
      [0, 0.14].forEach((n, a) => {
        let o = xe(t, c(50 + a), 0.18, e, 1.4);
        (O(o, xe(t, c(56 + a), 0.18, e, 1.4), 0.8),
          j(r, i, o, 0, 0.5, n * t),
          j(r, i, F(t, 0.4, 120, 50, 0.03, 0.12), 0, 0.7, n * t));
      });
      let a = p(Math.round(0.5 * t), e);
      (C(a, t, (e) => 800 + 5e3 * e * 2, 2),
        E(a, t, [0, 0, 0.45, 1, 0.5, 0]),
        j(r, i, a, 0, 0.15, 0.25 * t));
      let o = xe(t, c(62), 0.5, e, 1.6);
      return (
        O(o, xe(t, c(68), 0.5, e, 1.6), 0.8),
        j(r, i, o, 0, 0.5, 0.75 * t),
        k(ae({ sr: t, ch: [r, i] }, { size: 0.6, wet: 0.25, tail: 0.6 }), 0.85)
      );
    },
    wanted_lost: (e) => {
      let t = N,
        n = Se(t, [c(60), c(64), c(67), c(71), c(74)], 2, e, 2400, 0.35),
        [r, i] = n.ch;
      return (
        [79, 83, 86].forEach((e, n) =>
          j(
            r,
            i,
            ye(t, c(e), 1.2, 0.6),
            n * 0.3 - 0.3,
            0.2,
            (0.2 + n * 0.12) * t,
          ),
        ),
        k(ae(n, { size: 0.8, wet: 0.35, tail: 1 }), 0.8)
      );
    },
    punch: (e, t) => {
      let n = M,
        r = F(n, 0.25, 160 + t * 25, 55, 0.02, 0.07);
      return (
        O(r, I(n, 0.1, e, `lp`, 2500, 0.7, 5e-4, 0.012), 0.7),
        O(r, I(n, 0.05, e, `bp`, 900, 1.5, 3e-4, 0.006), 0.5),
        A(r, 2.5),
        f(k(r, 0.9), n)
      );
    },
    punch_whoosh: (e, t) => {
      let n = M,
        r = 0.22 + t * 0.04,
        i = p(Math.round(r * n), e);
      return (
        C(
          i,
          n,
          (e) => 450 + 2200 * Math.sin(Math.PI * Math.min(1, e / r)),
          1.4,
        ),
        E(i, n, [0, 0, r * 0.55, 1, r, 0]),
        f(k(i, 0.7), n)
      );
    },
    gunshot: (e, t) => {
      let n = M,
        r = Math.round(1.1 * n),
        i = new Float32Array(r);
      (O(i, I(n, 0.02, e, `hp`, 2500, 0.7, 1e-4, 0.0015), 1.2),
        O(i, I(n, 0.25, e, `lp`, 5200 - t * 600, 0.7, 3e-4, 0.028), 1),
        O(i, F(n, 0.3, 140, 48, 0.012, 0.06), 0.9),
        O(i, L(n, 0.05, 3400 + t * 200, 0.006), 0.15),
        A(i, 3.5));
      let a = i.slice(0, Math.round(0.3 * n)),
        o = new Float32Array(r),
        s = new Float32Array(r);
      j(o, s, i, 0, 1);
      let c = [
        [0.065 + t * 0.01, 0.34, -0.6],
        [0.12, 0.26, 0.7],
        [0.21, 0.2, -0.3],
        [0.33, 0.13, 0.5],
        [0.5, 0.08, -0.7],
      ];
      for (let [e, t, r] of c) {
        let i = a.slice();
        (x(i, n, 3500 - e * 4e3), j(o, s, i, r, t, e * n));
      }
      return k({ sr: n, ch: [o, s] }, 0.95);
    },
    reload: (e) => {
      let t = M,
        n = d(1, t),
        r = (r, i, a, o = 0.008) => {
          let s = I(t, 0.06, e, `bp`, r, 2.5, 2e-4, o);
          (O(s, L(t, 0.06, r * 1.3, o * 1.5), 0.4), O(n, s, i, a * t));
        };
      r(2600, 0.6, 0);
      let i = p(Math.round(0.12 * t), e);
      return (
        C(i, t, 2200, 2),
        E(i, t, [0, 0, 0.02, 1, 0.12, 0]),
        O(n, i, 0.18, 0.04 * t),
        r(900, 0.9, 0.42, 0.015),
        O(n, F(t, 0.1, 300, 180, 0.01, 0.02), 0.5, 0.42 * t),
        r(3100, 0.7, 0.68),
        r(2200, 0.9, 0.78, 0.012),
        f(k(n, 0.8), t)
      );
    },
    empty_click: (e) => {
      let t = M,
        n = I(t, 0.06, e, `bp`, 2800, 3, 1e-4, 0.004);
      return (O(n, L(t, 0.06, 2800, 0.008), 0.5), f(k(n, 0.7), t));
    },
    bullet_impact: (e, t) => {
      let n = M,
        r = d(0.5, n);
      (O(r, I(n, 0.15, e, `bp`, 2400, 1.2, 2e-4, 0.012)),
        O(r, I(n, 0.1, e, `lp`, 900, 0.8, 5e-4, 0.02), 0.6));
      for (let t = 0; t < 5; t++)
        O(
          r,
          I(n, 0.02, e, `hp`, 3e3, 0.7, 2e-4, 0.002),
          0.25,
          e.range(0.02, 0.18) * n,
        );
      if (t === 2) {
        let e = _(
          Math.round(0.35 * n),
          n,
          (e) => 3800 - (e / 0.35) * 2200,
          `sine`,
        );
        (E(e, n, [0, 0, 0.01, 1, 0.35, 0]), O(r, e, 0.25, 0.01 * n));
      }
      return f(k(r, 0.85), n);
    },
    explosion: (e, t) => {
      let n = P,
        r = 4.2,
        i = Math.round(r * n),
        a = new Float32Array(i),
        o = new Float32Array(i);
      j(a, o, I(n, 0.1, e, `hp`, 1500, 0.7, 2e-4, 0.01), 0, 0.9);
      let s = F(n, 2.5, 62, 26, 0.25, 0.65, 0.003);
      (A(s, 2.5), j(a, o, s, 0, 1.2));
      for (let t of [-1, 1]) {
        let s = h(i, e);
        (x(s, n, (e) => 3500 * Math.exp(-e / 0.5) + 180, 0.7),
          D(s, n, 0.004, 0.9),
          j(a, o, s, t * 0.6, 1.4));
        let c = h(i, e);
        (x(c, n, 160, 0.7),
          E(c, n, [0, 0, 0.3, 1, r, 0]),
          j(a, o, c, t * 0.8, 0.9));
      }
      for (let r = 0; r < 16 + t * 4; r++) {
        let t = e.range(0.25, 2.6);
        j(
          a,
          o,
          T(I(n, 0.4, e, `hp`, 800, 0.7, 3e-4, 0.004), n, [
            [e.range(500, 2500), 1, e.range(0.05, 0.25)],
            [e.range(900, 4e3), 0.6, e.range(0.03, 0.1)],
          ]),
          e.bi() * 0.9,
          e.range(0.2, 0.7) * Math.exp(-t / 1.5),
          t * n,
        );
      }
      for (let t = 0; t < 40; t++) {
        let t = e.range(0.1, 2);
        j(
          a,
          o,
          I(n, 0.05, e, `bp`, e.range(1500, 5e3), 1, 2e-4, 0.003),
          e.bi(),
          e.range(0.05, 0.25),
          t * n,
        );
      }
      return k({ sr: n, ch: [a, o] }, 0.97);
    },
    car_door: (e, t) => {
      let n = M,
        r = d(0.45, n);
      return (
        t === 0
          ? (O(r, I(n, 0.05, e, `bp`, 2200, 2, 2e-4, 0.006), 0.5),
            O(r, F(n, 0.3, 120, 70, 0.02, 0.07), 1, 0.004 * n),
            O(r, I(n, 0.2, e, `lp`, 500, 0.7, 0.001, 0.05), 0.8, 0.004 * n),
            O(r, I(n, 0.1, e, `bp`, 1400, 3, 0.001, 0.02), 0.12, 0.05 * n))
          : (O(r, I(n, 0.05, e, `bp`, 1800, 2.5, 2e-4, 0.008), 0.7),
            O(r, I(n, 0.05, e, `bp`, 2600, 2.5, 2e-4, 0.006), 0.5, 0.09 * n),
            O(r, F(n, 0.2, 180, 110, 0.02, 0.04), 0.4, 0.09 * n)),
        f(k(r, 0.85), n)
      );
    },
    crash_light: (e, t) => {
      let n = M,
        r = d(0.7, n);
      O(r, F(n, 0.3, 110 + t * 20, 55, 0.03, 0.06), 0.9);
      let i = I(n, 0.2, e, `bp`, 1200, 0.8, 3e-4, 0.03);
      return (
        O(r, i, 0.7),
        O(
          r,
          T(i, n, [
            [e.range(600, 900), 0.6, 0.12],
            [e.range(1100, 1500), 0.5, 0.08],
            [e.range(1800, 2600), 0.4, 0.05],
          ]),
          0.9,
        ),
        A(r, 1.8),
        f(k(r, 0.9), n)
      );
    },
    crash_heavy: (e, t) => {
      let n = N,
        r = Math.round(1.9 * n),
        i = new Float32Array(r),
        a = new Float32Array(r),
        o = F(n, 0.6, 95, 38, 0.04, 0.15);
      (A(o, 2.5), j(i, a, o, 0, 1));
      let s = p(Math.round(0.6 * n), e),
        c = 0;
      for (let t = 0; t < s.length; t++)
        (t & 127 ||
          (c =
            Math.max(0, c * 0.6 + (e.next() < 0.35 ? e.next() : 0)) *
            Math.exp(-t / n / 0.25)),
          (s[t] *= c));
      (C(s, n, 1600, 0.6), j(i, a, s, -0.2, 1.2));
      let l = [];
      for (let t = 0; t < 9; t++)
        l.push([e.range(280, 3200), e.range(0.3, 1), e.range(0.15, 0.7)]);
      j(i, a, T(s, n, l), 0.25, 0.8);
      for (let r = 0; r < 10 + t * 6; r++) {
        let t = e.range(0.03, 0.5);
        j(
          i,
          a,
          L(n, 0.1, e.range(3500, 8500), e.range(0.01, 0.04)),
          e.bi() * 0.8,
          e.range(0.05, 0.18),
          t * n,
        );
      }
      let u = p(Math.round(1.2 * n), e);
      return (
        C(u, n, (e) => 1800 - 900 * e, 3),
        E(u, n, [0, 0, 0.1, 1, 1.2, 0]),
        j(i, a, u, 0.3, 0.12, 0.25 * n),
        k({ sr: n, ch: [i, a] }, 0.95)
      );
    },
    glass: (e) => {
      let t = N,
        n = Math.round(1.6 * t),
        r = new Float32Array(n),
        i = new Float32Array(n);
      j(r, i, I(t, 0.1, e, `hp`, 2500, 0.7, 2e-4, 0.012), 0, 0.9);
      for (let n = 0; n < 70; n++) {
        let n = e.next() ** 2.2 * 1.2,
          a = e.range(2600, 9500);
        j(
          r,
          i,
          v(Math.round(0.15 * t), t, a, [
            [1, 1, e.range(0.01, 0.05)],
            [2.3, 0.4, 0.01],
          ]),
          e.bi() * 0.9,
          e.range(0.08, 0.4) * Math.exp(-n / 0.6),
          n * t,
        );
      }
      return k({ sr: t, ch: [r, i] }, 0.85);
    },
    horn_car: (e, t) => {
      let n = M,
        [r, i] = [
          [415, 510],
          [440, 554],
          [392, 494],
        ][t % 3],
        a = t === 1 ? 0.22 : t === 2 ? 0.75 : 0.48,
        o = Math.round((a + 0.06) * n),
        s = new Float32Array(o);
      for (let t of [r, i])
        O(
          s,
          _(
            o,
            n,
            (e) => t * (1 - 0.035 * Math.exp(-e / 0.02)),
            `pulse`,
            e.next(),
            0.32,
          ),
          0.5,
        );
      return (
        A(s, 2.2),
        S(s, n, 280),
        w(s, n, 2300, 1.2, 7),
        x(s, n, 5200),
        E(s, n, [0, 0, 0.012, 1, a, 0.95, a + 0.05, 0]),
        f(k(s, 0.9), n)
      );
    },
    horn_scooter: (e, t) => {
      let n = M,
        r = [375, 410, 350][t % 3],
        i =
          t === 1
            ? [
                [0, 0.1],
                [0.16, 0.3],
              ]
            : t === 2
              ? [[0, 0.42]]
              : [[0, 0.2]],
        a = i[i.length - 1][1] + 0.05,
        o = Math.round(a * n),
        s = new Float32Array(o);
      for (let [e, t] of i) {
        let i = _(Math.round((t - e + 0.03) * n), n, r, `pulse`, 0, 0.22);
        (O(i, _(i.length, n, r * 2.01, `square`), 0.15),
          E(i, n, [0, 0, 0.008, 1, t - e, 0.9, t - e + 0.025, 0]),
          O(s, i, 1, e * n));
      }
      return (
        A(s, 2.5),
        S(s, n, 400),
        w(s, n, 1800, 1.5, 6),
        x(s, n, 4200),
        f(k(s, 0.85), n)
      );
    },
    horn_bus: (e, t) => {
      let n = M,
        r = t ? 0.5 : 0.95,
        i = Math.round((r + 0.1) * n),
        a = new Float32Array(i);
      for (let t of [233, 294, 349])
        O(
          a,
          _(
            i,
            n,
            (e) => t * (0.9 + 0.1 * Math.min(1, e / 0.08)),
            `saw`,
            e.next(),
          ),
          0.35,
        );
      (A(a, 1.8), w(a, n, 850, 1, 6), x(a, n, 3200));
      let o = p(i, e);
      return (
        S(o, n, 1500),
        O(a, o, 0.04),
        E(a, n, [0, 0, 0.07, 1, r, 0.9, r + 0.08, 0]),
        f(k(a, 0.9), n)
      );
    },
    tire_screech: (e, t) => {
      let n = M,
        r = 1.3,
        i = Math.round(r * n),
        a = 1050 + t * 180,
        o = 0,
        c = new Float32Array(i);
      for (let r = 0; r < i; r++)
        (r & 255 || (o = o * 0.9 + e.bi() * 0.1),
          (c[r] = a * (1 + 0.06 * Math.sin((s * 0.8 * r) / n + t) + o * 0.05)));
      let l = (e) => c[Math.min(57329, Math.floor(e * n))],
        u = _(i, n, l, `saw`);
      C(u, n, l, 9);
      let d = _(i, n, (e) => l(e) * 2.02, `saw`);
      C(d, n, (e) => l(e) * 2.02, 10);
      let m = p(i, e);
      C(m, n, l, 14);
      let h = new Float32Array(i);
      (O(h, u, 1), O(h, d, 0.4), O(h, m, 2.2));
      for (let e = 0; e < i; e++)
        h[e] *=
          0.75 +
          0.25 *
            Math.sin((s * (34 + t * 7) * e) / n + Math.sin((s * 3 * e) / n));
      return (E(h, n, [0, 0, 0.04, 1, 1, 0.9, r, 0]), f(k(h, 0.8), n));
    },
    scooter_start: (e) => {
      let t = N,
        n = 1.4,
        r = d(n, t),
        i = _(Math.round(0.45 * t), t, (e) => 38 + 25 * e, `saw`);
      for (let e = 0; e < i.length; e++)
        i[e] *= 0.6 + 0.4 * Math.sin((s * 9 * e) / t);
      (O(i, _(i.length, t, 880, `sine`), 0.15),
        C(i, t, 700, 0.8),
        E(i, t, [0, 0, 0.03, 1, 0.42, 1, 0.45, 0]),
        O(r, i, 0.6));
      let a = 0.42,
        o = 0.09;
      for (; a < 1.3499999999999999;) {
        let i = I(t, 0.08, e, `bp`, 420, 1.2, 0.001, 0.012);
        (O(i, F(t, 0.08, 120, 70, 0.01, 0.015), 0.6),
          O(r, i, 0.9 * Math.min(1, (n - a) * 3), a * t),
          (a += o),
          (o = Math.max(0.055, o * (a < 0.7 ? 0.8 : 1.05))));
      }
      return (A(r, 1.8), f(k(r, 0.8), t));
    },
    car_start: (e) => {
      let t = N,
        n = d(1.8, t),
        r = _(Math.round(0.7 * t), t, 95, `saw`);
      for (let e = 0; e < r.length; e++)
        r[e] *= 0.45 + 0.55 * Math.max(0, Math.sin((s * 5.5 * e) / t));
      (C(r, t, 600, 0.7),
        E(r, t, [0, 0, 0.03, 1, 0.68, 1, 0.7, 0]),
        O(n, r, 0.5));
      let i = 0,
        a = p(Math.round(1.2 * t), e),
        o = new Float32Array(a.length);
      for (let e = 0; e < o.length; e++) {
        let n = e / t,
          r =
            25 + 40 * Math.exp(-(((n - 0.35) / 0.2) ** 2)) + 5 * Math.min(1, n);
        ((i += r / t), (o[e] = (0.5 + 0.5 * Math.cos(s * i)) ** 6));
      }
      for (let e = 0; e < o.length; e++) a[e] *= o[e];
      return (
        x(a, t, 700, 1.5),
        O(
          a,
          _(
            a.length,
            t,
            (e) => 2 * (25 + 40 * Math.exp(-(((e - 0.35) / 0.2) ** 2))),
            `saw`,
          ),
          0.05,
        ),
        E(a, t, [0, 0, 0.05, 1, 0.9, 0.8, 1.2, 0]),
        O(n, a, 1, 0.66 * t),
        A(n, 1.5),
        f(k(n, 0.8), t)
      );
    },
    air_brake: (e) => {
      let t = N,
        n = p(Math.round(1 * t), e);
      return (
        S(n, t, 1400),
        x(n, t, (e) => 9e3 - 4e3 * e, 0.7),
        D(n, t, 0.008, 0.3),
        f(k(n, 0.7), t)
      );
    },
    footstep_concrete: (e, t) => {
      let n = M,
        r = d(0.2, n),
        i = I(n, 0.08, e, `bp`, 1600 + t * 120, 0.9, 4e-4, 0.01);
      return (
        x(i, n, 6e3),
        O(r, i, 1),
        O(r, F(n, 0.08, 120, 75, 0.01, 0.018), 0.55),
        O(
          r,
          I(n, 0.08, e, `bp`, 2400 + e.range(-300, 300), 1, 6e-4, 0.015),
          0.55,
          e.range(0.035, 0.06) * n,
        ),
        O(r, I(n, 0.1, e, `bp`, 4200, 1.2, 0.01, 0.02), 0.12, 0.03 * n),
        f(k(r, 0.85), n)
      );
    },
    footstep_grass: (e) => {
      let t = M,
        n = d(0.22, t);
      for (let r = 0; r < 26; r++)
        O(
          n,
          I(t, 0.01, e, `hp`, 2500, 0.7, 2e-4, 0.0015),
          e.range(0.1, 0.35),
          e.range(0, 0.12) * t,
        );
      return (
        x(n, t, 7e3),
        O(n, F(t, 0.1, 90, 60, 0.01, 0.025), 0.45),
        f(k(n, 0.7), t)
      );
    },
    footstep_wet: (e) => {
      let t = M,
        n = d(0.25, t);
      O(n, I(t, 0.1, e, `bp`, 1200, 0.7, 8e-4, 0.025), 1);
      for (let r = 0; r < 4; r++) {
        let r = e.range(0.005, 0.08),
          i = _(Math.round(0.03 * t), t, (e) => 650 + (e / 0.03) * 900, `sine`);
        (D(i, t, 0.001, 0.008), O(n, i, e.range(0.15, 0.35), r * t));
      }
      return (
        O(n, I(t, 0.06, e, `bp`, 1900, 1, 5e-4, 0.008), 0.4),
        f(k(n, 0.8), t)
      );
    },
    footstep_tile: (e, t) => {
      let n = M,
        r = d(0.2, n),
        i = I(n, 0.03, e, `bp`, 3e3 + t * 260, 1.1, 2e-4, 0.004);
      return (
        O(
          r,
          T(i, n, [
            [e.range(1800, 2300), 0.35, 0.012],
            [e.range(4200, 5200), 0.25, 0.008],
          ]),
          1,
        ),
        O(r, i, 0.6),
        O(r, F(n, 0.06, 160, 90, 0.006, 0.012), 0.35),
        O(
          r,
          I(n, 0.05, e, `bp`, 1400, 0.9, 0.001, 0.01),
          0.3,
          e.range(0.03, 0.05) * n,
        ),
        f(k(r, 0.85), n)
      );
    },
    footstep_metal: (e) => {
      let t = M,
        n = I(t, 0.3, e, `hp`, 600, 0.7, 3e-4, 0.004),
        r = T(n, t, [
          [e.range(380, 460), 0.8, 0.08],
          [e.range(900, 1100), 0.6, 0.05],
          [e.range(2100, 2500), 0.4, 0.03],
        ]);
      return (O(r, n, 0.3), f(k(r, 0.8), t));
    },
    jump: (e) => {
      let t = M,
        n = p(Math.round(0.25 * t), e);
      return (
        C(n, t, (e) => 600 + 1800 * e * 4, 1),
        E(n, t, [0, 0, 0.06, 1, 0.25, 0]),
        O(
          n,
          fe(
            Math.round(0.2 * t),
            t,
            (e) => 190 - 60 * e,
            pe([
              [0, `ə`],
              [0.2, `a`],
            ]),
            e,
            {
              breath: 0.5,
              amp: (e) => Math.sin(Math.PI * Math.min(1, e / 0.2)),
            },
          ),
          0.25,
        ),
        f(k(n, 0.6), t)
      );
    },
    land: (e) => {
      let t = M,
        n = F(t, 0.3, 100, 55, 0.02, 0.06);
      O(n, I(t, 0.2, e, `bp`, 1800, 0.8, 5e-4, 0.03), 0.6);
      for (let r = 0; r < 8; r++)
        O(
          n,
          I(t, 0.01, e, `hp`, 3e3, 0.7, 2e-4, 0.0015),
          0.15,
          e.range(0.01, 0.1) * t,
        );
      return f(k(n, 0.85), t);
    },
    splash: (e) => {
      let t = N,
        n = Math.round(1.4 * t),
        r = new Float32Array(n),
        i = new Float32Array(n);
      for (let a of [-1, 1]) {
        let o = p(n, e);
        (C(o, t, (e) => 900 + 2500 * Math.exp(-e / 0.2), 0.6),
          D(o, t, 0.004, 0.25),
          j(r, i, o, a * 0.5, 1));
      }
      for (let n = 0; n < 40; n++) {
        let n = e.range(0.05, 1),
          a = e.range(350, 900),
          o = _(
            Math.round(0.04 * t),
            t,
            (e) => a * (1 + (2.5 * e) / 0.04),
            `sine`,
          );
        (D(o, t, 0.001, 0.01),
          j(
            r,
            i,
            o,
            e.bi() * 0.7,
            e.range(0.05, 0.25) * Math.exp(-n / 0.5),
            n * t,
          ));
      }
      return (
        j(r, i, F(t, 0.3, 90, 50, 0.03, 0.08), 0, 0.6),
        k({ sr: t, ch: [r, i] }, 0.85)
      );
    },
    ped_scream: (e, t) => {
      let n = N,
        r = t === 2,
        i = r ? 0.95 : 1.2 + t * 0.15,
        a = Math.round(i * n),
        o = r ? 420 : 780 + t * 60,
        c = fe(
          a,
          n,
          (e) =>
            o *
            (0.72 + 0.28 * Math.min(1, e / 0.12)) *
            (1 - 0.18 * Math.max(0, (e - i * 0.6) / (i * 0.4))) *
            (1 + 0.025 * Math.sin(s * 7 * e)),
          pe([
            [0, `a`],
            [0.3, `æ`],
            [i, `a`],
          ]),
          e,
          {
            breath: 0.18,
            rough: r ? 0.45 : 0.25,
            scale: r ? 1 : 1.22,
            jitter: 0.03,
            amp: (e) =>
              Math.min(1, e / 0.04) *
              (e > i - 0.25 ? Math.max(0, (i - e) / 0.25) : 1),
          },
        );
      return (A(c, 2), S(c, n, 280), f(k(c, 0.9), n));
    },
    ped_hey: (e, t) => {
      let n = N,
        r = t % 2 == 1,
        i = t === 2,
        a = t === 3,
        o = Math.round((a ? 0.55 : 0.34) * n),
        s = r ? 390 : 235,
        c = r ? 250 : 150,
        l = (e) => (a && e > 0.22 ? e - 0.22 : e),
        u = fe(
          o,
          n,
          (e) => {
            let t = l(e);
            return s - (s - c) * Math.min(1, t / 0.22);
          },
          pe(
            i
              ? [
                  [0, `u`],
                  [0.06, `e`],
                  [0.24, `e`],
                  [0.32, `i`],
                ]
              : [
                  [0, `e`],
                  [0.2, `e`],
                  [0.3, `i`],
                  [0.34, `e`],
                  [0.5, `i`],
                ],
          ),
          e,
          {
            breath: 0.1,
            scale: r ? 1.18 : 1,
            jitter: 0.015,
            rough: 0.12,
            amp: (e) => {
              let t = l(e);
              return (a ? e < 0.2 || (e > 0.22 && e < 0.44) : e < 0.3)
                ? Math.min(1, t / 0.015) *
                    Math.max(0, 1 - Math.max(0, t - 0.12) / 0.12)
                : 0;
            },
          },
        );
      return (S(u, n, 150), f(k(u, 0.85), n));
    },
    police_whistle: (e) => {
      let t = M,
        n = Math.round(1.2 * t),
        r = _(n, t, (e) => 2950 + 170 * Math.sin(s * 29 * e), `sine`);
      O(
        r,
        _(n, t, (e) => 2 * (2950 + 170 * Math.sin(s * 29 * e)), `sine`),
        0.12,
      );
      for (let e = 0; e < n; e++)
        r[e] *= 0.7 + 0.3 * Math.sin((s * 29 * e) / t);
      let i = p(n, e);
      return (
        C(i, t, 3e3, 3),
        O(r, i, 0.25),
        E(
          r,
          t,
          [0, 0, 0.02, 1, 0.52, 1, 0.56, 0, 0.68, 0, 0.7, 1, 1.05, 1, 1.1, 0],
        ),
        f(k(r, 0.8), t)
      );
    },
    police_megaphone: (e, t) => {
      let n = P,
        r = new Float32Array(Math.round(1.9 * n)),
        i = [`a`, `o`, `e`, `i`, `u`, `ə`, `a`, `e`],
        a = 0.08,
        o = 7 + t;
      for (let t = 0; t < o && a < 1.65; t++) {
        let s = e.range(0.11, 0.2) * (t === o - 1 ? 1.8 : 1);
        e.chance(0.5) &&
          (O(
            r,
            I(
              n,
              0.05,
              e,
              e.chance(0.5) ? `hp` : `bp`,
              e.chance(0.5) ? 3200 : 1500,
              1,
              0.002,
              0.012,
            ),
            0.3,
            a * n,
          ),
          (a += 0.03));
        let c = e.pick(i),
          l = e.pick(i),
          u = 150 * (t === 0 ? 1.25 : 1) * (1 + e.bi() * 0.12);
        (O(
          r,
          fe(
            Math.round(s * n),
            n,
            (e) => u * (1.1 - (e / s) * 0.25),
            pe([
              [0, c],
              [s, l],
            ]),
            e,
            {
              breath: 0.06,
              rough: 0.2,
              amp: (e) => Math.min(1, e / 0.012) * Math.min(1, (s - e) / 0.03),
            },
          ),
          1,
          a * n,
        ),
          (a += s + e.range(0.01, 0.06)));
      }
      return (
        S(r, n, 520),
        w(r, n, 1150, 1.4, 9),
        w(r, n, 2500, 2, 6),
        x(r, n, 3600),
        k(r, 1),
        A(r, 4),
        re(r, n, 0.0023, 0.45, 0.4, 5e3),
        O(r, I(n, 0.02, e, `bp`, 1500, 1, 2e-4, 0.003), 0.5),
        O(
          r,
          I(n, 0.02, e, `bp`, 1500, 1, 2e-4, 0.003),
          0.4,
          1.8499999999999999 * n,
        ),
        f(k(r, 0.85), n)
      );
    },
    vendor_call: (e, t) => {
      let n = P,
        r = t === 1,
        i = 1.05,
        a = Math.round(i * n),
        o = r ? 1.55 : 1,
        c = fe(
          a,
          n,
          (e) =>
            o *
            (e < 0.3
              ? 150 + (e / 0.3) * 60
              : 205 - 30 * Math.min(1, (e - 0.3) / 0.7)) *
            (1 + (e > 0.45 ? 0.03 * Math.sin(s * 5.5 * e) : 0)),
          pe([
            [0, `a`],
            [0.18, `a`],
            [0.3, `i`],
            [0.38, `o`],
            [i, `o`],
          ]),
          e,
          {
            breath: 0.12,
            rough: 0.18,
            scale: r ? 1.18 : 1,
            amp: (e) =>
              Math.min(1, e / 0.03) *
              (e > 0.28 && e < 0.34 ? 0.55 : 1) *
              Math.min(1, (i - e) / 0.25),
          },
        );
      return (S(c, n, 160), f(k(c, 0.8), n));
    },
    mahjong: (e) => {
      let t = N,
        n = Math.round(2.6 * t),
        r = new Float32Array(n),
        i = new Float32Array(n),
        a = 0.02;
      for (; a < 2.5;) {
        let n = e.range(0.25, 0.7),
          o = Math.min(2.5, a + n);
        for (; a < o;) {
          let n = I(t, 0.03, e, `hp`, 1500, 0.7, 1e-4, 8e-4),
            o = e.range(2400, 4200);
          (j(
            r,
            i,
            T(n, t, [
              [o, 1, e.range(0.01, 0.025)],
              [o * 1.57, 0.5, 0.008],
              [o * 0.52, 0.3, 0.012],
            ]),
            e.bi() * 0.6,
            e.range(0.3, 1),
            a * t,
          ),
            (a += e.range(0.008, 0.035)));
        }
        a += e.range(0.08, 0.3);
      }
      return k(
        ae({ sr: t, ch: [r, i] }, { size: 0.35, wet: 0.18, tail: 0.3 }),
        0.8,
      );
    },
    loudspeaker_vendor: (e) => {
      let t = P,
        n = new Float32Array(Math.round(3.4 * t)),
        r = [
          [
            [`i`, 190, 0.2],
            [`i`, 205, 0.2],
            [`a`, 230, 0.24],
            [`a`, 200, 0.42],
          ],
          [
            [`a`, 215, 0.22],
            [`o`, 196, 0.22],
            [`i`, 176, 0.75],
          ],
        ],
        i = 0.1;
      for (let a of r) {
        for (let [r, o, c] of a)
          (O(
            n,
            I(
              t,
              0.05,
              e,
              e.chance(0.5) ? `hp` : `bp`,
              e.chance(0.5) ? 3e3 : 1600,
              1,
              0.002,
              0.012,
            ),
            0.25,
            i * t,
          ),
            (i += 0.03),
            O(
              n,
              fe(
                Math.round(c * t),
                t,
                (e) =>
                  o * (1 + 0.04 * Math.sin(s * 5 * e) * Math.min(1, e / 0.15)),
                pe([
                  [0, r],
                  [c, r === `i` ? `e` : r],
                ]),
                e,
                {
                  breath: 0.05,
                  rough: 0.1,
                  amp: (e) =>
                    Math.min(1, e / 0.02) * Math.min(1, (c - e) / 0.05),
                },
              ),
              1,
              i * t,
            ),
            (i += c + 0.02));
        i += 0.28;
      }
      return (
        S(n, t, 480),
        w(n, t, 1250, 1.3, 9),
        w(n, t, 2600, 2, 5),
        x(n, t, 3500),
        k(n, 1),
        A(n, 3.5),
        re(n, t, 0.19, 0.3, 0.35, 2500),
        f(k(n, 0.8), t)
      );
    },
    dog_bark: (e, t) => {
      let n = P,
        r = d(0.75, n),
        i = () => {
          let r = 0.16;
          return fe(
            Math.round(r * n),
            n,
            (e) => (t ? 520 : 380) * (1.15 - (0.4 * e) / r),
            pe([
              [0, `a`],
              [r, `o`],
            ]),
            e,
            {
              breath: 0.35,
              rough: 0.7,
              scale: t ? 1.4 : 1.1,
              amp: (e) => Math.min(1, e / 0.008) * Math.exp(-e / 0.06),
            },
          );
        };
      return (
        O(r, i(), 1, 0.01 * n),
        O(r, i(), 0.85, 0.3 * n),
        A(r, 1.5),
        f(k(r, 0.8), n)
      );
    },
    mrt_door_chime: (e) => {
      let t = N,
        n = Math.round(2.9 * t),
        r = new Float32Array(n),
        i = new Float32Array(n);
      [88, 84, 79, 84].forEach((e, n) => {
        let a = ye(t, c(e), 1.4, n === 3 ? 1.1 : 0.6);
        (O(a, ye(t, c(e - 12), 1.2, 0.5), 0.25),
          j(r, i, a, 0, 0.55, n * 0.3 * t));
      });
      for (let e = 0; e < 6; e++) {
        let n = _(Math.round(0.13 * t), t, 1480, `square`);
        (x(n, t, 3500),
          E(n, t, [0, 0, 0.005, 1, 0.11, 1, 0.12, 0]),
          j(r, i, n, 0, 0.12, (1.45 + e * 0.22) * t));
      }
      return k(
        ae({ sr: t, ch: [r, i] }, { size: 0.55, wet: 0.2, tail: 0.5 }),
        0.8,
      );
    },
    mrt_arrival: (e) => {
      let t = N,
        n = 4.2,
        r = Math.round(n * t),
        i = new Float32Array(r),
        a = new Float32Array(r);
      for (let o of [-1, 1]) {
        let s = h(r, e);
        (x(s, t, 380),
          E(s, t, [0, 0, 0.5, 1, 3.4, 0.35, n, 0]),
          j(i, a, s, o * 0.5, 1.1));
        let c = p(r, e);
        (C(c, t, 900, 0.8),
          E(c, t, [0, 0, 0.6, 1, 3.3, 0.1, n, 0]),
          j(i, a, c, o * 0.5, 0.2));
      }
      let o = (e) => 250 + 1300 * Math.exp(-e / 1.3),
        c = _(r, t, o, `sine`);
      (O(
        c,
        _(r, t, (e) => o(e) * 3, `sine`),
        0.25,
      ),
        O(
          c,
          _(r, t, (e) => o(e) * 1.5, `sine`),
          0.2,
        ),
        E(c, t, [0, 0, 0.4, 1, 3, 0.5, 3.4, 0]),
        j(i, a, c, 0, 0.09));
      let l = _(
        Math.round(1.4 * t),
        t,
        (e) => 2400 + 45 * Math.sin(s * 6 * e),
        `sine`,
      );
      (E(l, t, [0, 0, 0.4, 1, 1.1, 0.8, 1.4, 0]),
        j(i, a, l, 0.2, 0.05, 2.1 * t));
      for (let n of [0.35, 0.5, 1, 1.18, 1.9, 2.15]) {
        let r = I(t, 0.1, e, `bp`, 700, 1.2, 5e-4, 0.018);
        (O(r, F(t, 0.1, 140, 80, 0.01, 0.02), 0.5),
          j(i, a, r, e.bi() * 0.3, 0.45, n * t));
      }
      let u = p(Math.round(0.7 * t), e);
      return (
        S(u, t, 2e3),
        D(u, t, 0.005, 0.2),
        j(i, a, u, -0.2, 0.3, 3.5 * t),
        k({ sr: t, ch: [i, a] }, 0.85)
      );
    },
    crosswalk_tick: (e) => {
      let t = M,
        n = _(Math.round(0.05 * t), t, 880, `square`);
      return (
        x(n, t, 2200),
        D(n, t, 5e-4, 0.006),
        O(n, L(t, 0.05, 440, 0.01), 0.5),
        f(k(n, 0.7), t)
      );
    },
    crosswalk_bird: (e, t) => {
      let n = M,
        r = d(0.34, n);
      if (t === 0)
        for (let e of [0, 0.13]) {
          let t = 0.075,
            i = _(
              Math.round(t * n),
              n,
              (e) => 2400 + 1800 * (e / t) ** 0.7 + 120 * Math.sin(s * 90 * e),
              `sine`,
            );
          (O(
            i,
            _(i.length, n, (e) => 2 * (2400 + 1800 * (e / t) ** 0.7), `sine`),
            0.12,
          ),
            E(i, n, [0, 0, 0.006, 1, 0.05499999999999999, 0.8, t, 0]),
            O(r, i, 1, e * n));
        }
      else
        for (let [e, t] of [
          [740, 0],
          [590, 0.17],
        ]) {
          let i = _(Math.round(0.15 * n), n, e, `sine`);
          (O(i, _(i.length, n, e * 2, `sine`), 0.08),
            E(i, n, [0, 0, 0.02, 1, 0.12, 0.7, 0.15, 0]),
            O(r, i, 1, t * n));
        }
      return f(k(r, 0.75), n);
    },
    store_chime: (e, t) => {
      let n = N,
        r = d(1.8, n),
        i =
          t === 0
            ? [
                [76, 0],
                [72, 0.28],
              ]
            : [
                [72, 0],
                [76, 0.14],
                [79, 0.28],
                [84, 0.42],
                [79, 0.56],
                [84, 0.7],
              ];
      for (let [e, a] of i)
        O(r, ye(n, c(e), 1.2, t === 0 ? 0.9 : 0.5), 0.6, a * n);
      return f(k(r, 0.75), n);
    },
    tinnitus: () => {
      let e = N,
        t = 3.6,
        n = Math.round(t * e),
        r = _(n, e, 3720, `sine`);
      return (
        O(r, _(n, e, 3765, `sine`), 0.55),
        E(r, e, [0, 0, 0.12, 1, 1.2, 0.6, t, 0]),
        f(k(r, 0.5), e)
      );
    },
    radio_static: (e) => {
      let t = N,
        n = 0.9,
        r = Math.round(n * t),
        i = p(r, e);
      C(i, t, 2200, 0.4);
      let a = 1;
      for (let t = 0; t < r; t++)
        (t & 511 || (a = 0.4 + 0.6 * e.next()), (i[t] *= a));
      for (let a = 0; a < 3; a++) {
        let a = e.range(400, 3e3),
          o = e.range(400, 3e3);
        O(
          i,
          _(r, t, (e) => a + (o - a) * (e / n), `sine`),
          0.12,
        );
      }
      for (let r = 0; r < 30; r++)
        O(
          i,
          I(t, 0.01, e, `hp`, 2e3, 0.7, 1e-4, 0.001),
          e.range(0.3, 1),
          e.range(0, n) * t,
        );
      return (te(i, t, 0.02, 0.15), f(k(i, 0.6), t));
    },
    passby_scooter: (e, t) => {
      let n = 16e3,
        r = 51200,
        i = 3.2 / 2,
        a = 11 + t * 3,
        o = 4 + t * 2,
        c = 72 + t * 8,
        l = (e) => {
          let t = (e - i) * a;
          return 343 / (343 + (a * t) / Math.hypot(t, o));
        },
        u = 0,
        d = new Float32Array(r),
        f = p(r, e);
      for (let e = 0; e < r; e++) {
        let t = e / n;
        u += (c * l(t)) / n;
        let r = (0.5 + 0.5 * Math.cos(s * u)) ** 6;
        d[e] = r * (1 + 0.25 * f[e]) + 0.25 * ((u % 1) * 2 - 1);
      }
      A(d, 2);
      let m = d.slice();
      C(m, n, 480, 1.4);
      let h = d.slice();
      (C(h, n, 1500, 2.2), d.set(m), O(d, h, 0.5));
      let g = new Float32Array(r),
        _ = new Float32Array(r);
      for (let e = 0; e < r; e++) {
        let t = (e / n - i) * a,
          r = o / Math.hypot(t, o),
          s = ((Math.max(-1, Math.min(1, t / 12)) + 1) * Math.PI) / 4;
        ((g[e] = d[e] * r * Math.cos(s)), (_[e] = d[e] * r * Math.sin(s)));
      }
      return (
        x(g, n, 6e3),
        x(_, n, 6e3),
        te(g, n, 0.3, 0.3),
        te(_, n, 0.3, 0.3),
        k({ sr: n, ch: [g, _] }, 0.8)
      );
    },
    passby_car: (e, t) => {
      let n = 16e3,
        r = 57600,
        i = 3.6 / 2,
        a = 13 + t * 4,
        o = m(r, e);
      x(o, n, 900);
      let s = _(
        r,
        n,
        (e) => {
          let t = (e - i) * a;
          return 55 * (343 / (343 + (a * t) / Math.hypot(t, 5)));
        },
        `saw`,
      );
      (x(s, n, 400), O(o, s, 0.35));
      let c = new Float32Array(r),
        l = new Float32Array(r);
      for (let e = 0; e < r; e++) {
        let t = (e / n - i) * a,
          r = 5 / Math.hypot(t, 5),
          s = ((Math.max(-1, Math.min(1, t / 14)) + 1) * Math.PI) / 4;
        ((c[e] = o[e] * r * Math.cos(s)), (l[e] = o[e] * r * Math.sin(s)));
      }
      return (
        te(c, n, 0.4, 0.4),
        te(l, n, 0.4, 0.4),
        k({ sr: n, ch: [c, l] }, 0.8)
      );
    },
    distant_siren: (e) => {
      let t = 16e3,
        n = 72e3,
        r = _(n, t, (e) => 900 + 420 * Math.sin(s * 0.3 * e - 1), `square`);
      (x(r, t, 1400), S(r, t, 400), E(r, t, [0, 0, 1.2, 1, 3.2, 1, 4.5, 0]));
      let [i, a] = ie(r, t, { size: 0.9, wet: 0.7, dry: 0.4, tail: 0.1 });
      return k({ sr: t, ch: [i.slice(0, n), a.slice(0, n)] }, 0.6);
    },
    bird_chirp: (e, t) => {
      let n = N,
        r = d(0.9, n),
        i = 0,
        a = t === 2 ? 6 : 3 + t;
      for (let o = 0; o < a; o++) {
        let a = t === 2 ? 0.035 : e.range(0.06, 0.13),
          o = e.range(1900, 3300),
          c = o * e.range(0.75, 1.35),
          l = _(
            Math.round(a * n),
            n,
            (e) => o + (c - o) * (e / a) + 80 * Math.sin(s * 60 * e),
            `sine`,
          );
        (E(l, n, [0, 0, 0.008, 1, a - 0.012, 0.8, a, 0]),
          O(r, l, e.range(0.6, 1), i * n),
          (i += a + (t === 2 ? 0.05 : e.range(0.02, 0.09))));
      }
      return f(k(r, 0.7), n);
    },
    wood_fish: (e) => {
      let t = M,
        n = I(t, 0.25, e, `lp`, 3e3, 0.7, 2e-4, 0.002),
        r = T(n, t, [
          [485, 1, 0.06],
          [1330, 0.5, 0.025],
          [2710, 0.2, 0.012],
        ]);
      return (O(r, n, 0.15), f(k(r, 0.8), t));
    },
    firecracker: (e, t) => {
      let n = P,
        r = Math.round(3.2 * n),
        i = new Float32Array(r),
        a = new Float32Array(r),
        o = 0.01,
        s = 0.3,
        c = e.range(0.4, 0.9),
        l = e.bi() * 0.5;
      for (; o < 2.75;) {
        let r = o > s;
        r && (s = o + e.range(0.3, 0.7));
        let u = r ? 1 : e.range(0.45, 0.85),
          d = r ? 0.07 : 0.03,
          f = I(
            n,
            d,
            e,
            `bp`,
            r ? 1400 : e.range(1800, 3600),
            0.6,
            2e-4,
            r ? 0.014 : e.range(0.004, 0.008),
          );
        (O(f, I(n, d, e, `hp`, 4e3, 0.7, 1e-4, 0.0015), 0.5),
          O(
            f,
            F(n, d, r ? 190 : 260, 90, 0.004, r ? 0.014 : 0.006),
            r ? 0.8 : 0.35,
          ),
          (l = Math.max(-0.8, Math.min(0.8, l + e.bi() * 0.08))),
          j(i, a, f, l + e.bi() * 0.15, u, o * n),
          o > c
            ? ((o += e.range(0.05, 0.18)), (c = o + e.range(0.35, 0.9)))
            : (o += e.range(0.018, 0.045) * (t ? 1.15 : 1)));
      }
      return k(
        ae({ sr: n, ch: [i, a] }, { size: 0.55, wet: 0.2, tail: 0.6 }),
        0.95,
      );
    },
    temple_bell: (e) => {
      let t = P,
        n = v(
          Math.round(6.5 * t),
          t,
          98,
          [
            [0.5, 0.35, 6],
            [0.503, 0.25, 6],
            [1, 1, 5],
            [1.006, 0.7, 5],
            [2.02, 0.55, 3.2],
            [2.03, 0.3, 3.2],
            [2.76, 0.4, 2.2],
            [3.9, 0.28, 1.5],
            [5.3, 0.18, 0.9],
            [6.8, 0.1, 0.5],
            [8.4, 0.06, 0.3],
          ],
          0,
          e,
        );
      (O(n, I(t, 0.3, e, `lp`, 700, 0.7, 0.002, 0.03), 0.6),
        O(n, F(t, 0.3, 70, 50, 0.03, 0.06), 0.5));
      for (let e = 0; e < Math.round(0.006 * t); e++) n[e] *= e / (0.006 * t);
      let [r, i] = ie(n, t, { size: 0.7, wet: 0.25, tail: 0.5 });
      return k({ sr: t, ch: [r, i] }, 0.9);
    },
    temple_drum: (e, t) => {
      let n = P,
        r = t === 2 ? [0, 0.22, 0.4, 0.55] : [0],
        i = d(1.6, n);
      (r.forEach((a, o) => {
        let s = 72 + (t === 1 ? 8 : 0) + o * 2,
          c = F(n, 1.2, s * 1.35, s, 0.03, 0.34);
        (O(
          c,
          v(Math.round(1 * n), n, s * 1.59, [
            [1, 0.35, 0.18],
            [1.33, 0.15, 0.12],
          ]),
        ),
          O(c, I(n, 0.1, e, `lp`, 1100, 0.7, 5e-4, 0.02), 0.45),
          O(i, c, o === r.length - 1 ? 1 : 0.8, a * n));
      }),
        A(i, 1.3));
      let [a, o] = ie(i, n, { size: 0.6, wet: 0.2, tail: 0.3 });
      return k({ sr: n, ch: [a, o] }, 0.9);
    },
    gong: (e) => {
      let t = P,
        n = 3.5,
        r = v(
          Math.round(n * t),
          t,
          118,
          [
            [1, 1, 2.2],
            [1.52, 0.7, 1.6],
            [2.03, 0.55, 1.2],
            [2.59, 0.4, 0.9],
            [3.21, 0.3, 0.6],
            [4.4, 0.2, 0.4],
            [5.9, 0.12, 0.25],
          ],
          4,
          e,
        );
      (O(r, I(t, 0.3, e, `lp`, 900, 0.7, 0.002, 0.04), 0.4),
        E(r, t, [0, 0, 0.01, 1, 0.1, 0.8, 0.35, 1, n, 1]));
      let [i, a] = ie(r, t, { size: 0.7, wet: 0.25, tail: 0.4 });
      return k({ sr: t, ch: [i, a] }, 0.85);
    },
    thunder: (e, t) => {
      let n = P,
        r = 7.5,
        i = Math.round(r * n),
        a = new Float32Array(i),
        o = new Float32Array(i),
        s = t === 0;
      if (s) {
        let t = I(n, 0.5, e, `hp`, 800, 0.7, 0.001, 0.07);
        (O(t, I(n, 0.5, e, `lp`, 3e3, 0.7, 0.002, 0.12), 0.8),
          j(a, o, t, e.bi() * 0.4, 1.3));
      }
      for (let t of [-1, 1]) {
        let r = h(i, e);
        x(r, n, s ? 420 : 240, 0.7);
        let c = new Float32Array(i),
          l = 7 + e.int(4);
        for (let t = 0; t < l; t++) {
          let t = (s ? 0.1 : 0.4) + e.next() ** 1.3 * 5.5,
            r = e.range(0.25, 1.1),
            a = e.range(0.4, 1) * Math.exp(-t / 3.5);
          for (let e = 0; e < i; e++) {
            let i = (e / n - t) / r;
            i > -3 && i < 3 && (c[e] += a * Math.exp(-i * i));
          }
        }
        for (let e = 0; e < i; e++) r[e] *= c[e];
        j(a, o, r, t * 0.55, 1);
      }
      let c = h(i, e);
      return (
        x(c, n, 70),
        E(c, n, [0, 0, 0.3, 1, 4, 0.4, r, 0]),
        j(a, o, c, 0, 0.8),
        k({ sr: n, ch: [a, o] }, 0.95)
      );
    },
    firework_launch: (e) => {
      let t = N,
        n = 1.6,
        r = Math.round(n * t),
        i = _(r, t, (e) => 900 + 1700 * (e / n) ** 0.8, `sine`);
      (O(
        i,
        _(r, t, (e) => 2 * (900 + 1700 * (e / n) ** 0.8), `sine`),
        0.15,
      ),
        E(i, t, [0, 0, 0.1, 0.7, 1.5, 1, n, 0]));
      let a = p(r, e);
      return (
        C(a, t, 3500, 0.8),
        E(a, t, [0, 1, 0.3, 0.3, n, 0.1]),
        O(i, a, 0.3),
        f(k(i, 0.6), t)
      );
    },
    firework_boom: (e) => {
      let t = P,
        n = Math.round(3.5 * t),
        r = new Float32Array(n),
        i = new Float32Array(n),
        a = F(t, 1.5, 80, 35, 0.08, 0.35);
      (O(a, I(t, 0.5, e, `lp`, 1500, 0.7, 0.001, 0.08), 0.8),
        A(a, 2),
        j(r, i, a, 0, 1));
      for (let n = 0; n < 90; n++) {
        let n = 0.15 + e.next() ** 1.5 * 2.6;
        j(
          r,
          i,
          I(t, 0.02, e, `hp`, 2500, 0.7, 1e-4, 0.0015),
          e.bi() * 0.9,
          e.range(0.1, 0.35) * Math.exp(-n / 1.5),
          n * t,
        );
      }
      return k(
        ae({ sr: t, ch: [r, i] }, { size: 0.85, wet: 0.35, tail: 1.2 }),
        0.9,
      );
    },
    firework_whistle: (e, t) => {
      let n = N,
        r = 1.9 + t * 0.3,
        i = Math.round(r * n),
        a = 1150 + t * 200,
        o = 3300 - t * 500,
        c = (e) => {
          let n = e / r,
            i = a + (o - a) * n ** 0.65;
          return (
            (t ? i * (1 - (0.18 * Math.max(0, n - 0.7)) / 0.3) : i) *
            (1 + 0.012 * Math.sin(s * 23 * e))
          );
        },
        l = _(i, n, c, `sine`);
      O(
        l,
        _(i, n, (e) => c(e) * 2, `sine`),
        0.12,
      );
      let u = p(i, e);
      (C(u, n, c, 18),
        O(l, u, 1.6),
        E(l, n, [0, 0, 0.06, 0.75, r * 0.6, 1, r - 0.08, 0.85, r, 0]));
      let d = p(i, e);
      return (
        S(d, n, 2500),
        E(d, n, [0, 0, 0.02, 1, 0.5, 0.35, r, 0.05]),
        O(l, d, 0.12),
        f(k(l, 0.6), n)
      );
    },
    firework_crackle: (e, t) => {
      let n = N,
        r = d(2.8, n),
        i = 170 + t * 60;
      for (let t = 0; t < i; t++) {
        let t = 0.05 + e.next() ** 1.7 * 2.4,
          i = e.chance(0.12);
        O(
          r,
          I(
            n,
            i ? 0.03 : 0.012,
            e,
            i ? `bp` : `hp`,
            i ? e.range(1800, 3200) : e.range(3500, 6500),
            0.8,
            1e-4,
            i ? 0.004 : e.range(8e-4, 0.002),
          ),
          (i ? 0.9 : e.range(0.25, 0.6)) * Math.exp(-t / 1.6),
          Math.round(t * n),
        );
      }
      let a = ie(r, n, { size: 0.5, wet: 0.18, tail: 0.4 }),
        o = new Float32Array(a[0].length);
      for (let e = 0; e < o.length; e++) o[e] = (a[0][e] + a[1][e]) * 0.5;
      return f(k(o, 0.85), n);
    },
    backfire: (e, t) => {
      let n = M,
        r = d(0.7, n);
      return (
        (t === 1 ? [0, 0.11] : [0]).forEach((t, i) => {
          let a = Math.round(t * n),
            o = i ? 0.7 : 1;
          (O(r, I(n, 0.08, e, `bp`, 1600, 0.6, 15e-5, 0.007), 1 * o, a),
            O(r, F(n, 0.35, 170, 55, 0.012, 0.05, 5e-4), 1.1 * o, a),
            O(
              r,
              T(I(n, 0.05, e, `hp`, 1500, 0.7, 2e-4, 0.003), n, [
                [e.range(520, 700), 0.5, 0.06],
                [e.range(1300, 1700), 0.3, 0.035],
              ]),
              0.35 * o,
              a,
            ));
        }),
        A(r, 2.2),
        f(k(r, 0.95), n)
      );
    },
    motorcycle_start: (e) => {
      let t = N,
        n = d(1.9, t),
        r = _(Math.round(0.4 * t), t, (e) => 55 + 30 * e, `saw`);
      for (let e = 0; e < r.length; e++)
        r[e] *= 0.55 + 0.45 * Math.sin((s * 11 * e) / t);
      (C(r, t, 900, 0.9),
        E(r, t, [0, 0, 0.02, 1, 0.38, 1, 0.4, 0]),
        O(n, r, 0.5));
      let i = 0,
        a = Math.round(1.52 * t),
        o = (e) =>
          20 +
          95 * Math.exp(-(((e - 0.45) / 0.18) ** 2)) +
          22 * Math.min(1, e / 0.2),
        c = p(a, e),
        l = new Float32Array(a);
      for (let e = 0; e < a; e++) {
        let n = e / t;
        i += o(n) / t;
        let r = (0.5 + 0.5 * Math.cos(s * i)) ** 5;
        ((c[e] *= r), (l[e] = r));
      }
      return (
        x(c, t, 1400, 1.2),
        O(c, l, 0.35),
        x(c, t, 2200, 0.8),
        E(c, t, [0, 0, 0.03, 1, 1.32, 0.8, 1.52, 0]),
        O(n, c, 1, Math.round(0.38 * t)),
        A(n, 2),
        f(k(n, 0.85), t)
      );
    },
    ev_start: () => {
      let e = N,
        t = d(1, e);
      (O(t, ye(e, c(79), 0.8, 0.35), 0.6),
        O(t, ye(e, c(86), 0.8, 0.5), 0.7, Math.round(0.14 * e)));
      let n = _(Math.round(0.35 * e), e, (e) => 600 + 5200 * e, `sine`);
      return (
        E(n, e, [0, 0, 0.02, 1, 0.3, 0.5, 0.35, 0]),
        O(t, n, 0.08, Math.round(0.3 * e)),
        f(k(t, 0.7), e)
      );
    },
    microwave_beep: () => {
      let e = N,
        t = d(1.1, e);
      for (let n = 0; n < 3; n++) {
        let r = _(Math.round(0.16 * e), e, 2050, `square`);
        (x(r, e, 4200),
          E(r, e, [0, 0, 0.004, 1, 0.15, 1, 0.16, 0]),
          O(t, r, 0.5, Math.round(n * 0.32 * e)));
      }
      return f(k(t, 0.6), e);
    },
    fridge_door: (e) => {
      let t = N,
        n = d(0.9, t);
      (O(n, I(t, 0.12, e, `bp`, 700, 0.8, 0.004, 0.03), 0.5),
        O(n, F(t, 0.3, 95, 60, 0.02, 0.06), 0.9, Math.round(0.42 * t)),
        O(
          n,
          I(t, 0.15, e, `lp`, 450, 0.7, 0.002, 0.04),
          0.6,
          Math.round(0.42 * t),
        ));
      for (let r of [0.47, 0.5])
        O(n, L(t, 0.4, e.range(2400, 3300), 0.09), 0.18, Math.round(r * t));
      return f(k(n, 0.7), t);
    },
    camera_shutter: (e) => {
      let t = M,
        n = d(0.2, t),
        r = I(t, 0.03, e, `hp`, 2500, 0.7, 1e-4, 0.0035);
      (O(
        n,
        T(r, t, [
          [3150, 1, 0.012],
          [5200, 0.5, 0.006],
          [1450, 0.4, 0.01],
        ]),
        0.9,
      ),
        O(n, r, 0.5),
        O(n, I(t, 0.06, e, `bp`, 900, 1.4, 5e-4, 0.014), 0.45));
      let i = Math.round(0.072 * t),
        a = I(t, 0.03, e, `bp`, 2200, 1.2, 1e-4, 0.005);
      return (
        O(
          n,
          T(a, t, [
            [2450, 1, 0.01],
            [4100, 0.45, 0.005],
            [1100, 0.35, 0.012],
          ]),
          0.75,
          i,
        ),
        O(n, a, 0.4, i),
        O(n, I(t, 0.05, e, `lp`, 600, 0.7, 5e-4, 0.01), 0.3, i),
        f(k(n, 0.8), t)
      );
    },
    moon_blocks: (e) => {
      let t = M,
        n = d(0.85, t);
      for (let r = 0; r < 2; r++) {
        let i = e.range(760, 960) * (r ? 1.08 : 1),
          a = 0.02 + r * e.range(0.012, 0.045),
          o = 1,
          s = e.range(0.12, 0.18),
          c = (r, a, o) => {
            let s = I(
                t,
                0.05,
                e,
                `lp`,
                2200 + 3200 * o,
                0.7,
                1e-4,
                0.0012 + 0.0012 * o,
              ),
              c = T(s, t, [
                [i * e.range(0.98, 1.02), 1, 0.028],
                [i * 2.31, 0.55, 0.013],
                [i * 3.93, 0.28, 0.006],
                [i * 0.52, 0.22, 0.02],
              ]);
            (O(c, s, 0.35), O(n, c, a, Math.round(r * t)));
          };
        for (let t = 0; t < 5 && a < 0.5; t++)
          (c(a, o, 1 - t * 0.15),
            (a += s),
            (s *= e.range(0.52, 0.66)),
            (o *= e.range(0.42, 0.58)));
        let l = e.range(0.026, 0.038),
          u = 4 + e.int(5);
        for (let t = 0; t < u && a < 0.73; t++)
          (c(a, o * 0.9 * (1 - t / (u + 1)), 0.25),
            (a += l),
            (l *= e.range(1.04, 1.16)));
      }
      return (
        O(n, F(t, 0.2, 170, 90, 0.015, 0.03), 0.35, Math.round(0.02 * t)),
        f(k(n, 0.85), t)
      );
    },
    alarm: (e) => {
      let t = N,
        n = 2.6,
        r = Math.round(n * t),
        i = new Float32Array(r);
      for (
        let n = 0.004;
        n < 2.3000000000000003;
        n += (1 / 19) * (1 + e.bi() * 0.04)
      ) {
        let a = Math.round(n * t),
          o = 0.75 + e.next() * 0.25;
        for (let t = 0; t < 28 && a + t < r; t++)
          i[a + t] += o * e.bi() * Math.exp(-t / 6);
      }
      let a = 1210,
        o = T(i, t, [
          [a, 1, 0.075],
          [a * 2.33, 0.62, 0.055],
          [a * 3.91, 0.34, 0.04],
          [a * 5.97, 0.18, 0.03],
          [a * 0.502, 0.22, 0.09],
        ]),
        s = _(r, t, 60, `saw`);
      return (
        x(s, t, 900),
        O(o, s, 0.006),
        O(o, I(t, n, e, `bp`, 3400, 1.2, 0.003, 0.02), 0.05),
        E(o, t, [
          0,
          0,
          0.006,
          1,
          2.2800000000000002,
          1,
          2.5500000000000003,
          0.08,
          n,
          0,
        ]),
        f(k(o, 0.8), t)
      );
    },
  },
  De = {
    punch: 3,
    punch_whoosh: 2,
    gunshot: 3,
    bullet_impact: 3,
    explosion: 2,
    car_door: 2,
    crash_light: 3,
    crash_heavy: 3,
    horn_car: 3,
    horn_scooter: 3,
    horn_bus: 2,
    tire_screech: 2,
    footstep_concrete: 5,
    footstep_grass: 3,
    footstep_wet: 3,
    footstep_tile: 3,
    footstep_metal: 2,
    ped_scream: 3,
    ped_hey: 4,
    police_megaphone: 2,
    crosswalk_bird: 2,
    store_chime: 2,
    passby_scooter: 3,
    passby_car: 2,
    bird_chirp: 3,
    firecracker: 2,
    temple_drum: 3,
    thunder: 2,
    dog_bark: 2,
    vendor_call: 2,
    firework_whistle: 2,
    firework_crackle: 2,
    backfire: 2,
    moon_blocks: 3,
  };
