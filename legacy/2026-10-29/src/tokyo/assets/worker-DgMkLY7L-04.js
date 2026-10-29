// tokyo/assets/worker-DgMkLY7L 04 — math
// Lines 735-2776 of readable/tokyo/assets/worker-DgMkLY7L.pretty.js (statement-aligned).
const be = {
    ui_click: (e) => {
      let t = A,
        n = F(t, 0.06, 2300, 0.007);
      return (
        S(n, F(t, 0.06, 3450, 0.004), 0.4),
        S(n, P(t, 0.01, e, `hp`, 3500, 0.7, 3e-4, 0.0015), 0.3),
        o(C(n, 0.8), t)
      );
    },
    ui_hover: (e) => {
      let t = A,
        n = F(t, 0.04, 3100, 0.004);
      return (
        S(n, P(t, 0.01, e, `hp`, 5e3, 0.7, 3e-4, 0.001), 0.2),
        o(C(n, 0.5), t)
      );
    },
    ui_back: () => {
      let e = A,
        t = a(0.35, e);
      return (
        S(t, me(e, n(79), 0.3, 0.09)),
        S(t, me(e, n(74), 0.28, 0.1), 0.9, 0.065 * e),
        o(C(t, 0.7), e)
      );
    },
    ui_confirm: (e) => {
      let t = A,
        r = a(0.6, t);
      return (
        S(r, I(t, n(84), 0.5, 0.25)),
        S(r, I(t, n(91), 0.5, 0.3), 0.9, 0.06 * t),
        S(r, P(t, 0.3, e, `hp`, 7e3, 0.7, 0.01, 0.06, 0.06), 0.05),
        o(C(r, 0.75), t)
      );
    },
    phone_open: (e) => {
      let t = A,
        r = a(0.5, t),
        i = s(8820, e);
      return (
        _(i, t, (e) => 700 + (e / 0.2) * 4e3, 1.2),
        b(i, t, [0, 0, 0.12, 1, 0.2, 0]),
        S(r, i, 0.25),
        [88, 92, 95].forEach((e, i) =>
          S(r, me(t, n(e), 0.25, 0.07), 0.7, (0.1 + i * 0.055) * t),
        ),
        o(C(r, 0.7), t)
      );
    },
    phone_ring: () => {
      let e = j,
        t = a(2.6, e),
        r = [76, 79, 83, 81, 79, 76, 74, 76];
      for (let i = 0; i < 2; i++)
        r.forEach((r, a) =>
          S(t, me(e, n(r), 0.45, 0.14), 0.8, (i * 1.25 + a * 0.13) * e),
        );
      return o(C(t, 0.75), e);
    },
    phone_notify: () => {
      let e = A,
        t = a(0.6, e);
      return (
        S(t, I(e, n(88), 0.5, 0.2)),
        S(t, I(e, n(95), 0.5, 0.25), 0.8, 0.09 * e),
        o(C(t, 0.7), e)
      );
    },
    money: (e) => {
      let t = j,
        [n, r] = ye(t, 1.1),
        i = P(t, 0.08, e, `bp`, 1400, 2, 5e-4, 0.012);
      (S(i, F(t, 0.08, 620, 0.02), 0.5),
        T(n, r, i, 0, 0.8),
        T(
          n,
          r,
          f(28800, t, 2637, [
            [1, 1, 0.45],
            [2.41, 0.5, 0.25],
            [3.87, 0.3, 0.12],
            [5.3, 0.15, 0.06],
          ]),
          0.1,
          0.55,
          0.05 * t,
        ));
      for (let i = 0; i < 9; i++)
        T(
          n,
          r,
          f(3840, t, e.range(3200, 7200), [
            [1, 1, 0.03],
            [1.52, 0.5, 0.02],
          ]),
          e.bi() * 0.6,
          e.range(0.1, 0.25),
          (0.08 + e.next() * 0.3) * t,
        );
      return C({ sr: t, ch: [n, r] }, 0.85);
    },
    coin: (e) => {
      let t = A,
        n = a(0.35, t),
        r = 4200 + e.bi() * 300,
        i = () =>
          f(8820, t, r, [
            [1, 1, 0.06],
            [1.62, 0.6, 0.04],
            [2.9, 0.3, 0.02],
          ]);
      return (
        S(n, i()),
        S(n, i(), 0.35, 0.07 * t),
        S(n, i(), 0.12, 0.12 * t),
        o(C(n, 0.7), t)
      );
    },
    pickup: (e) => {
      let t = A,
        r = a(0.8, t);
      return (
        [72, 76, 79, 84, 88].forEach((e, i) =>
          S(r, I(t, n(e), 0.5, 0.18), 0.7, i * 0.045 * t),
        ),
        S(r, P(t, 0.5, e, `hp`, 8e3, 0.7, 0.05, 0.12), 0.04),
        re(r, t, 0.11, 0.3, 0.25),
        o(C(r, 0.75), t)
      );
    },
    checkpoint: () => {
      let e = A,
        t = a(0.9, e);
      return (
        S(t, he(e, n(88), 0.8, 0.35), 0.7),
        S(t, he(e, n(95), 0.8, 0.4), 0.6, 0.07 * e),
        S(t, I(e, n(100), 0.6, 0.3), 0.4, 0.14 * e),
        o(C(t, 0.8), e)
      );
    },
    mission_start: (e) => {
      let t = j,
        r = 83200,
        i = new Float32Array(r),
        a = new Float32Array(r),
        o = N(t, 1.2, 110, 58, 0.05, 0.35);
      (S(o, P(t, 0.2, e, `lp`, 900, 0.8, 0.001, 0.04), 0.5), T(i, a, o, 0, 1));
      let s = f(
        r,
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
      (b(s, t, [0, 0, 0.35, 1, 2.6, 1]), T(i, a, s, 0, 0.35));
      let c = ge(t, [n(57), n(64), n(69), n(71), n(76)], 2.4, e, 1400, 0.5);
      return (
        S(i, c.ch[0], 0.5),
        S(a, c.ch[1], 0.5),
        [69, 72, 74, 76, 79, 81].forEach((e, r) => {
          let o = me(t, n(e), 0.6, 0.2);
          T(i, a, o, -0.3 + r * 0.12, 0.5, (0.12 + r * 0.07) * t);
        }),
        C(D({ sr: t, ch: [i, a] }, { size: 0.8, wet: 0.35, tail: 1 }), 0.9)
      );
    },
    mission_pass: (e) => {
      let t = j,
        r = 134400,
        i = new Float32Array(r),
        a = new Float32Array(r);
      for (let [r, o, s] of [
        [[53, 57, 60, 65], 0, 0.42],
        [[55, 59, 62, 67], 0.42, 0.42],
        [[48, 55, 60, 64, 67, 74], 0.9, 3],
      ])
        r.forEach((c, l) =>
          T(
            i,
            a,
            L(t, n(c), s, e, o > 0.8 ? 1.2 : 0.8),
            (l / r.length - 0.5) * 0.8,
            0.22,
            o * t,
          ),
        );
      for (let [r, o, s] of [
        [81, 0, 0.4],
        [83, 0.42, 0.3],
        [79, 0.72, 0.06],
        [81, 0.78, 0.06],
        [84, 0.84, 0.06],
        [86, 0.87, 0.05],
        [88, 0.9, 2.6],
      ])
        T(i, a, L(t, n(r), s, e, 1.3), 0.15, 0.2, o * t);
      for (let [e, r] of [
        [91, 0.9],
        [96, 1.05],
        [100, 1.2],
      ])
        T(i, a, he(t, n(e), 2, 0.8), 0.4, 0.1, r * t);
      (T(i, a, _e(t, n(36), 2, e), 0, 0.9, 0.9 * t),
        T(i, a, _e(t, n(43), 1, e), 0, 0.5, 0.42 * t),
        T(i, a, ve(t, 2.5, e), -0.3, 0.25, 0.9 * t));
      let o = [0, 1, 3, 1, 4.2, 0];
      return (
        b(i, t, o),
        b(a, t, o),
        C(D({ sr: t, ch: [i, a] }, { size: 0.75, wet: 0.3, tail: 1.2 }), 0.92)
      );
    },
    mission_fail: (e) => {
      let t = M,
        r = 61740,
        i = new Float32Array(r),
        a = new Float32Array(r);
      [
        [63, 0],
        [62, 0.3],
        [61, 0.6],
        [60, 0.9],
      ].forEach(([r, o], s) => {
        let c = L(t, n(r - 12), s === 3 ? 1.8 : 0.34, e, 0.35);
        T(i, a, c, 0, 0.5, o * t);
      });
      let o = ge(t, [n(48), n(49), n(55), n(61)], 1.9, e, 900, 0.1);
      return (
        S(i, o.ch[0], 0.35, 0.9 * t),
        S(a, o.ch[1], 0.35, 0.9 * t),
        T(i, a, N(t, 1.5, 80, 38, 0.1, 0.5), 0, 0.9, 0.9 * t),
        C(D({ sr: t, ch: [i, a] }, { size: 0.8, wet: 0.35, tail: 1 }), 0.88)
      );
    },
    wasted: (e) => {
      let t = M,
        n = 88200,
        i = new Float32Array(n),
        a = new Float32Array(n);
      T(i, a, ve(t, 0.6, e).reverse(), 0, 0.35);
      let o = 0.55,
        s = N(t, 2.5, 90, 30, 0.2, 0.8);
      (w(s, 2),
        T(i, a, s, 0, 1, o * t),
        T(i, a, P(t, 0.3, e, `lp`, 3e3, 0.7, 0.001, 0.05), 0, 0.5, o * t));
      for (let n = 0; n < 3; n++) {
        let s = d(
          72765,
          t,
          (e) => (110 - 55 * Math.min(1, e / 3)) * r((n - 1) * 14),
          `saw`,
          e.next(),
        );
        (h(s, t, (e) => 1200 * Math.exp(-e / 1.2) + 150, 0.8),
          b(s, t, [0, 0, 0.2, 1, 3.3, 0]),
          T(i, a, s, (n - 1) * 0.7, 0.18, o * t));
      }
      return (
        T(i, a, he(t, 220, 3, 1.4), 0.2, 0.12, o * t),
        C(D({ sr: t, ch: [i, a] }, { size: 0.9, wet: 0.4, tail: 1.2 }), 0.92)
      );
    },
    busted: (e) => {
      let t = M,
        r = 74970,
        i = new Float32Array(r),
        a = new Float32Array(r),
        o = d(
          11025,
          t,
          (e) => (e < 0.2 ? 960 : 740) * (1 - 0.3 * Math.max(0, e - 0.25)),
          `square`,
        );
      (h(o, t, 3e3),
        b(o, t, [0, 0, 0.01, 1, 0.45, 0.8, 0.5, 0]),
        T(i, a, o, 0, 0.25));
      let s = 0.5,
        c = N(t, 2.2, 85, 32, 0.15, 0.7);
      (w(c, 2), T(i, a, c, 0, 1, s * t));
      let l = ge(t, [n(45), n(51), n(56), n(62)], 2.6, e, 1100, 0.05);
      return (
        S(i, l.ch[0], 0.4, s * t),
        S(a, l.ch[1], 0.4, s * t),
        T(i, a, ve(t, 2, e), 0, 0.2, s * t),
        C(D({ sr: t, ch: [i, a] }, { size: 0.85, wet: 0.35, tail: 1 }), 0.9)
      );
    },
    wanted_up: (e) => {
      let t = j,
        r = 41600,
        i = new Float32Array(r),
        a = new Float32Array(r);
      [0, 0.14].forEach((r, o) => {
        let s = L(t, n(50 + o), 0.18, e, 1.4);
        (S(s, L(t, n(56 + o), 0.18, e, 1.4), 0.8),
          T(i, a, s, 0, 0.5, r * t),
          T(i, a, N(t, 0.4, 120, 50, 0.03, 0.12), 0, 0.7, r * t));
      });
      let o = s(16e3, e);
      (_(o, t, (e) => 800 + 5e3 * e * 2, 2),
        b(o, t, [0, 0, 0.45, 1, 0.5, 0]),
        T(i, a, o, 0, 0.15, 0.25 * t));
      let c = L(t, n(62), 0.5, e, 1.6);
      return (
        S(c, L(t, n(68), 0.5, e, 1.6), 0.8),
        T(i, a, c, 0, 0.5, 0.75 * t),
        C(D({ sr: t, ch: [i, a] }, { size: 0.6, wet: 0.25, tail: 0.6 }), 0.85)
      );
    },
    wanted_lost: (e) => {
      let t = j,
        r = ge(t, [n(60), n(64), n(67), n(71), n(74)], 2, e, 2400, 0.35),
        [i, a] = r.ch;
      return (
        [79, 83, 86].forEach((e, r) =>
          T(
            i,
            a,
            I(t, n(e), 1.2, 0.6),
            r * 0.3 - 0.3,
            0.2,
            (0.2 + r * 0.12) * t,
          ),
        ),
        C(D(r, { size: 0.8, wet: 0.35, tail: 1 }), 0.8)
      );
    },
    punch: (e, t) => {
      let n = A,
        r = N(n, 0.25, 160 + t * 25, 55, 0.02, 0.07);
      return (
        S(r, P(n, 0.1, e, `lp`, 2500, 0.7, 5e-4, 0.012), 0.7),
        S(r, P(n, 0.05, e, `bp`, 900, 1.5, 3e-4, 0.006), 0.5),
        w(r, 2.5),
        o(C(r, 0.9), n)
      );
    },
    punch_whoosh: (e, t) => {
      let n = A,
        r = 0.22 + t * 0.04,
        i = s(Math.round(r * n), e);
      return (
        _(
          i,
          n,
          (e) => 450 + 2200 * Math.sin(Math.PI * Math.min(1, e / r)),
          1.4,
        ),
        b(i, n, [0, 0, r * 0.55, 1, r, 0]),
        o(C(i, 0.7), n)
      );
    },
    gunshot: (e, t) => {
      let n = A,
        r = 48510,
        i = new Float32Array(r);
      (S(i, P(n, 0.02, e, `hp`, 2500, 0.7, 1e-4, 0.0015), 1.2),
        S(i, P(n, 0.25, e, `lp`, 5200 - t * 600, 0.7, 3e-4, 0.028), 1),
        S(i, N(n, 0.3, 140, 48, 0.012, 0.06), 0.9),
        S(i, F(n, 0.05, 3400 + t * 200, 0.006), 0.15),
        w(i, 3.5));
      let a = i.slice(0, 13230),
        o = new Float32Array(r),
        s = new Float32Array(r);
      T(o, s, i, 0, 1);
      let c = [
        [0.065 + t * 0.01, 0.34, -0.6],
        [0.12, 0.26, 0.7],
        [0.21, 0.2, -0.3],
        [0.33, 0.13, 0.5],
        [0.5, 0.08, -0.7],
      ];
      for (let [e, t, r] of c) {
        let i = a.slice();
        (h(i, n, 3500 - e * 4e3), T(o, s, i, r, t, e * n));
      }
      return C({ sr: n, ch: [o, s] }, 0.95);
    },
    reload: (e) => {
      let t = A,
        n = a(1, t),
        r = (r, i, a, o = 0.008) => {
          let s = P(t, 0.06, e, `bp`, r, 2.5, 2e-4, o);
          (S(s, F(t, 0.06, r * 1.3, o * 1.5), 0.4), S(n, s, i, a * t));
        };
      r(2600, 0.6, 0);
      let i = s(5292, e);
      return (
        _(i, t, 2200, 2),
        b(i, t, [0, 0, 0.02, 1, 0.12, 0]),
        S(n, i, 0.18, 0.04 * t),
        r(900, 0.9, 0.42, 0.015),
        S(n, N(t, 0.1, 300, 180, 0.01, 0.02), 0.5, 0.42 * t),
        r(3100, 0.7, 0.68),
        r(2200, 0.9, 0.78, 0.012),
        o(C(n, 0.8), t)
      );
    },
    empty_click: (e) => {
      let t = A,
        n = P(t, 0.06, e, `bp`, 2800, 3, 1e-4, 0.004);
      return (S(n, F(t, 0.06, 2800, 0.008), 0.5), o(C(n, 0.7), t));
    },
    bullet_impact: (e, t) => {
      let n = A,
        r = a(0.5, n);
      (S(r, P(n, 0.15, e, `bp`, 2400, 1.2, 2e-4, 0.012)),
        S(r, P(n, 0.1, e, `lp`, 900, 0.8, 5e-4, 0.02), 0.6));
      for (let t = 0; t < 5; t++)
        S(
          r,
          P(n, 0.02, e, `hp`, 3e3, 0.7, 2e-4, 0.002),
          0.25,
          e.range(0.02, 0.18) * n,
        );
      if (t === 2) {
        let e = d(15435, n, (e) => 3800 - (e / 0.35) * 2200, `sine`);
        (b(e, n, [0, 0, 0.01, 1, 0.35, 0]), S(r, e, 0.25, 0.01 * n));
      }
      return o(C(r, 0.85), n);
    },
    explosion: (e, t) => {
      let n = M,
        r = 92610,
        i = new Float32Array(r),
        a = new Float32Array(r);
      T(i, a, P(n, 0.1, e, `hp`, 1500, 0.7, 2e-4, 0.01), 0, 0.9);
      let o = N(n, 2.5, 62, 26, 0.25, 0.65, 0.003);
      (w(o, 2.5), T(i, a, o, 0, 1.2));
      for (let t of [-1, 1]) {
        let o = l(r, e);
        (h(o, n, (e) => 3500 * Math.exp(-e / 0.5) + 180, 0.7),
          x(o, n, 0.004, 0.9),
          T(i, a, o, t * 0.6, 1.4));
        let s = l(r, e);
        (h(s, n, 160, 0.7),
          b(s, n, [0, 0, 0.3, 1, 4.2, 0]),
          T(i, a, s, t * 0.8, 0.9));
      }
      for (let r = 0; r < 16 + t * 4; r++) {
        let t = e.range(0.25, 2.6);
        T(
          i,
          a,
          y(P(n, 0.4, e, `hp`, 800, 0.7, 3e-4, 0.004), n, [
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
        T(
          i,
          a,
          P(n, 0.05, e, `bp`, e.range(1500, 5e3), 1, 2e-4, 0.003),
          e.bi(),
          e.range(0.05, 0.25),
          t * n,
        );
      }
      return C({ sr: n, ch: [i, a] }, 0.97);
    },
    car_door: (e, t) => {
      let n = A,
        r = a(0.45, n);
      return (
        t === 0
          ? (S(r, P(n, 0.05, e, `bp`, 2200, 2, 2e-4, 0.006), 0.5),
            S(r, N(n, 0.3, 120, 70, 0.02, 0.07), 1, 0.004 * n),
            S(r, P(n, 0.2, e, `lp`, 500, 0.7, 0.001, 0.05), 0.8, 0.004 * n),
            S(r, P(n, 0.1, e, `bp`, 1400, 3, 0.001, 0.02), 0.12, 0.05 * n))
          : (S(r, P(n, 0.05, e, `bp`, 1800, 2.5, 2e-4, 0.008), 0.7),
            S(r, P(n, 0.05, e, `bp`, 2600, 2.5, 2e-4, 0.006), 0.5, 0.09 * n),
            S(r, N(n, 0.2, 180, 110, 0.02, 0.04), 0.4, 0.09 * n)),
        o(C(r, 0.85), n)
      );
    },
    crash_light: (e, t) => {
      let n = A,
        r = a(0.7, n);
      S(r, N(n, 0.3, 110 + t * 20, 55, 0.03, 0.06), 0.9);
      let i = P(n, 0.2, e, `bp`, 1200, 0.8, 3e-4, 0.03);
      return (
        S(r, i, 0.7),
        S(
          r,
          y(i, n, [
            [e.range(600, 900), 0.6, 0.12],
            [e.range(1100, 1500), 0.5, 0.08],
            [e.range(1800, 2600), 0.4, 0.05],
          ]),
          0.9,
        ),
        w(r, 1.8),
        o(C(r, 0.9), n)
      );
    },
    crash_heavy: (e, t) => {
      let n = j,
        r = 60800,
        i = new Float32Array(r),
        a = new Float32Array(r),
        o = N(n, 0.6, 95, 38, 0.04, 0.15);
      (w(o, 2.5), T(i, a, o, 0, 1));
      let c = s(19200, e),
        l = 0;
      for (let t = 0; t < c.length; t++)
        (t & 127 ||
          (l =
            Math.max(0, l * 0.6 + (e.next() < 0.35 ? e.next() : 0)) *
            Math.exp(-t / n / 0.25)),
          (c[t] *= l));
      (_(c, n, 1600, 0.6), T(i, a, c, -0.2, 1.2));
      let u = [];
      for (let t = 0; t < 9; t++)
        u.push([e.range(280, 3200), e.range(0.3, 1), e.range(0.15, 0.7)]);
      T(i, a, y(c, n, u), 0.25, 0.8);
      for (let r = 0; r < 10 + t * 6; r++) {
        let t = e.range(0.03, 0.5);
        T(
          i,
          a,
          F(n, 0.1, e.range(3500, 8500), e.range(0.01, 0.04)),
          e.bi() * 0.8,
          e.range(0.05, 0.18),
          t * n,
        );
      }
      let d = s(38400, e);
      return (
        _(d, n, (e) => 1800 - 900 * e, 3),
        b(d, n, [0, 0, 0.1, 1, 1.2, 0]),
        T(i, a, d, 0.3, 0.12, 0.25 * n),
        C({ sr: n, ch: [i, a] }, 0.95)
      );
    },
    glass: (e) => {
      let t = j,
        n = 51200,
        r = new Float32Array(n),
        i = new Float32Array(n);
      T(r, i, P(t, 0.1, e, `hp`, 2500, 0.7, 2e-4, 0.012), 0, 0.9);
      for (let n = 0; n < 70; n++) {
        let n = e.next() ** 2.2 * 1.2;
        T(
          r,
          i,
          f(4800, t, e.range(2600, 9500), [
            [1, 1, e.range(0.01, 0.05)],
            [2.3, 0.4, 0.01],
          ]),
          e.bi() * 0.9,
          e.range(0.08, 0.4) * Math.exp(-n / 0.6),
          n * t,
        );
      }
      return C({ sr: t, ch: [r, i] }, 0.85);
    },
    horn_car: (e, t) => {
      let n = A,
        [r, i] = [
          [415, 510],
          [440, 554],
          [392, 494],
        ][t % 3],
        a = t === 1 ? 0.22 : t === 2 ? 0.75 : 0.48,
        s = Math.round((a + 0.06) * n),
        c = new Float32Array(s);
      for (let t of [r, i])
        S(
          c,
          d(
            s,
            n,
            (e) => t * (1 - 0.035 * Math.exp(-e / 0.02)),
            `pulse`,
            e.next(),
            0.32,
          ),
          0.5,
        );
      return (
        w(c, 2.2),
        g(c, n, 280),
        v(c, n, 2300, 1.2, 7),
        h(c, n, 5200),
        b(c, n, [0, 0, 0.012, 1, a, 0.95, a + 0.05, 0]),
        o(C(c, 0.9), n)
      );
    },
    horn_scooter: (e, t) => {
      let n = A,
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
        s = Math.round(a * n),
        c = new Float32Array(s);
      for (let [e, t] of i) {
        let i = d(Math.round((t - e + 0.03) * n), n, r, `pulse`, 0, 0.22);
        (S(i, d(i.length, n, r * 2.01, `square`), 0.15),
          b(i, n, [0, 0, 0.008, 1, t - e, 0.9, t - e + 0.025, 0]),
          S(c, i, 1, e * n));
      }
      return (
        w(c, 2.5),
        g(c, n, 400),
        v(c, n, 1800, 1.5, 6),
        h(c, n, 4200),
        o(C(c, 0.85), n)
      );
    },
    horn_bus: (e, t) => {
      let n = A,
        r = t ? 0.5 : 0.95,
        i = Math.round((r + 0.1) * n),
        a = new Float32Array(i);
      for (let t of [233, 294, 349])
        S(
          a,
          d(
            i,
            n,
            (e) => t * (0.9 + 0.1 * Math.min(1, e / 0.08)),
            `saw`,
            e.next(),
          ),
          0.35,
        );
      (w(a, 1.8), v(a, n, 850, 1, 6), h(a, n, 3200));
      let c = s(i, e);
      return (
        g(c, n, 1500),
        S(a, c, 0.04),
        b(a, n, [0, 0, 0.07, 1, r, 0.9, r + 0.08, 0]),
        o(C(a, 0.9), n)
      );
    },
    tire_screech: (e, n) => {
      let r = A,
        i = 57330,
        a = 1050 + n * 180,
        c = 0,
        l = new Float32Array(i);
      for (let o = 0; o < i; o++)
        (o & 255 || (c = c * 0.9 + e.bi() * 0.1),
          (l[o] = a * (1 + 0.06 * Math.sin((t * 0.8 * o) / r + n) + c * 0.05)));
      let u = (e) => l[Math.min(57329, Math.floor(e * r))],
        f = d(i, r, u, `saw`);
      _(f, r, u, 9);
      let p = d(i, r, (e) => u(e) * 2.02, `saw`);
      _(p, r, (e) => u(e) * 2.02, 10);
      let m = s(i, e);
      _(m, r, u, 14);
      let h = new Float32Array(i);
      (S(h, f, 1), S(h, p, 0.4), S(h, m, 2.2));
      for (let e = 0; e < i; e++)
        h[e] *=
          0.75 +
          0.25 *
            Math.sin((t * (34 + n * 7) * e) / r + Math.sin((t * 3 * e) / r));
      return (b(h, r, [0, 0, 0.04, 1, 1, 0.9, 1.3, 0]), o(C(h, 0.8), r));
    },
    scooter_start: (e) => {
      let n = j,
        r = 1.4,
        i = a(r, n),
        s = d(14400, n, (e) => 38 + 25 * e, `saw`);
      for (let e = 0; e < s.length; e++)
        s[e] *= 0.6 + 0.4 * Math.sin((t * 9 * e) / n);
      (S(s, d(s.length, n, 880, `sine`), 0.15),
        _(s, n, 700, 0.8),
        b(s, n, [0, 0, 0.03, 1, 0.42, 1, 0.45, 0]),
        S(i, s, 0.6));
      let c = 0.42,
        l = 0.09;
      for (; c < 1.3499999999999999;) {
        let t = P(n, 0.08, e, `bp`, 420, 1.2, 0.001, 0.012);
        (S(t, N(n, 0.08, 120, 70, 0.01, 0.015), 0.6),
          S(i, t, 0.9 * Math.min(1, (r - c) * 3), c * n),
          (c += l),
          (l = Math.max(0.055, l * (c < 0.7 ? 0.8 : 1.05))));
      }
      return (w(i, 1.8), o(C(i, 0.8), n));
    },
    car_start: (e) => {
      let n = j,
        r = a(1.8, n),
        i = d(22400, n, 95, `saw`);
      for (let e = 0; e < i.length; e++)
        i[e] *= 0.45 + 0.55 * Math.max(0, Math.sin((t * 5.5 * e) / n));
      (_(i, n, 600, 0.7),
        b(i, n, [0, 0, 0.03, 1, 0.68, 1, 0.7, 0]),
        S(r, i, 0.5));
      let c = 0,
        l = s(38400, e),
        u = new Float32Array(l.length);
      for (let e = 0; e < u.length; e++) {
        let r = e / n,
          i =
            25 + 40 * Math.exp(-(((r - 0.35) / 0.2) ** 2)) + 5 * Math.min(1, r);
        ((c += i / n), (u[e] = (0.5 + 0.5 * Math.cos(t * c)) ** 6));
      }
      for (let e = 0; e < u.length; e++) l[e] *= u[e];
      return (
        h(l, n, 700, 1.5),
        S(
          l,
          d(
            l.length,
            n,
            (e) => 2 * (25 + 40 * Math.exp(-(((e - 0.35) / 0.2) ** 2))),
            `saw`,
          ),
          0.05,
        ),
        b(l, n, [0, 0, 0.05, 1, 0.9, 0.8, 1.2, 0]),
        S(r, l, 1, 0.66 * n),
        w(r, 1.5),
        o(C(r, 0.8), n)
      );
    },
    air_brake: (e) => {
      let t = j,
        n = s(32e3, e);
      return (
        g(n, t, 1400),
        h(n, t, (e) => 9e3 - 4e3 * e, 0.7),
        x(n, t, 0.008, 0.3),
        o(C(n, 0.7), t)
      );
    },
    footstep_concrete: (e, t) => {
      let n = A,
        r = a(0.2, n),
        i = P(n, 0.08, e, `bp`, 1600 + t * 120, 0.9, 4e-4, 0.01);
      return (
        h(i, n, 6e3),
        S(r, i, 1),
        S(r, N(n, 0.08, 120, 75, 0.01, 0.018), 0.55),
        S(
          r,
          P(n, 0.08, e, `bp`, 2400 + e.range(-300, 300), 1, 6e-4, 0.015),
          0.55,
          e.range(0.035, 0.06) * n,
        ),
        S(r, P(n, 0.1, e, `bp`, 4200, 1.2, 0.01, 0.02), 0.12, 0.03 * n),
        o(C(r, 0.85), n)
      );
    },
    footstep_grass: (e) => {
      let t = A,
        n = a(0.22, t);
      for (let r = 0; r < 26; r++)
        S(
          n,
          P(t, 0.01, e, `hp`, 2500, 0.7, 2e-4, 0.0015),
          e.range(0.1, 0.35),
          e.range(0, 0.12) * t,
        );
      return (
        h(n, t, 7e3),
        S(n, N(t, 0.1, 90, 60, 0.01, 0.025), 0.45),
        o(C(n, 0.7), t)
      );
    },
    footstep_wet: (e) => {
      let t = A,
        n = a(0.25, t);
      S(n, P(t, 0.1, e, `bp`, 1200, 0.7, 8e-4, 0.025), 1);
      for (let r = 0; r < 4; r++) {
        let r = e.range(0.005, 0.08),
          i = d(1323, t, (e) => 650 + (e / 0.03) * 900, `sine`);
        (x(i, t, 0.001, 0.008), S(n, i, e.range(0.15, 0.35), r * t));
      }
      return (
        S(n, P(t, 0.06, e, `bp`, 1900, 1, 5e-4, 0.008), 0.4),
        o(C(n, 0.8), t)
      );
    },
    footstep_tile: (e, t) => {
      let n = A,
        r = a(0.2, n),
        i = P(n, 0.03, e, `bp`, 3e3 + t * 260, 1.1, 2e-4, 0.004);
      return (
        S(
          r,
          y(i, n, [
            [e.range(1800, 2300), 0.35, 0.012],
            [e.range(4200, 5200), 0.25, 0.008],
          ]),
          1,
        ),
        S(r, i, 0.6),
        S(r, N(n, 0.06, 160, 90, 0.006, 0.012), 0.35),
        S(
          r,
          P(n, 0.05, e, `bp`, 1400, 0.9, 0.001, 0.01),
          0.3,
          e.range(0.03, 0.05) * n,
        ),
        o(C(r, 0.85), n)
      );
    },
    footstep_metal: (e) => {
      let t = A,
        n = P(t, 0.3, e, `hp`, 600, 0.7, 3e-4, 0.004),
        r = y(n, t, [
          [e.range(380, 460), 0.8, 0.08],
          [e.range(900, 1100), 0.6, 0.05],
          [e.range(2100, 2500), 0.4, 0.03],
        ]);
      return (S(r, n, 0.3), o(C(r, 0.8), t));
    },
    jump: (e) => {
      let t = A,
        n = s(11025, e);
      return (
        _(n, t, (e) => 600 + 1800 * e * 4, 1),
        b(n, t, [0, 0, 0.06, 1, 0.25, 0]),
        S(
          n,
          O(
            8820,
            t,
            (e) => 190 - 60 * e,
            k([
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
        o(C(n, 0.6), t)
      );
    },
    land: (e) => {
      let t = A,
        n = N(t, 0.3, 100, 55, 0.02, 0.06);
      S(n, P(t, 0.2, e, `bp`, 1800, 0.8, 5e-4, 0.03), 0.6);
      for (let r = 0; r < 8; r++)
        S(
          n,
          P(t, 0.01, e, `hp`, 3e3, 0.7, 2e-4, 0.0015),
          0.15,
          e.range(0.01, 0.1) * t,
        );
      return o(C(n, 0.85), t);
    },
    splash: (e) => {
      let t = j,
        n = 44800,
        r = new Float32Array(n),
        i = new Float32Array(n);
      for (let a of [-1, 1]) {
        let o = s(n, e);
        (_(o, t, (e) => 900 + 2500 * Math.exp(-e / 0.2), 0.6),
          x(o, t, 0.004, 0.25),
          T(r, i, o, a * 0.5, 1));
      }
      for (let n = 0; n < 40; n++) {
        let n = e.range(0.05, 1),
          a = e.range(350, 900),
          o = d(1280, t, (e) => a * (1 + (2.5 * e) / 0.04), `sine`);
        (x(o, t, 0.001, 0.01),
          T(
            r,
            i,
            o,
            e.bi() * 0.7,
            e.range(0.05, 0.25) * Math.exp(-n / 0.5),
            n * t,
          ));
      }
      return (
        T(r, i, N(t, 0.3, 90, 50, 0.03, 0.08), 0, 0.6),
        C({ sr: t, ch: [r, i] }, 0.85)
      );
    },
    ped_scream: (e, n) => {
      let r = j,
        i = n === 2,
        a = i ? 0.95 : 1.2 + n * 0.15,
        s = Math.round(a * r),
        c = i ? 420 : 780 + n * 60,
        l = O(
          s,
          r,
          (e) =>
            c *
            (0.72 + 0.28 * Math.min(1, e / 0.12)) *
            (1 - 0.18 * Math.max(0, (e - a * 0.6) / (a * 0.4))) *
            (1 + 0.025 * Math.sin(t * 7 * e)),
          k([
            [0, `a`],
            [0.3, `æ`],
            [a, `a`],
          ]),
          e,
          {
            breath: 0.18,
            rough: i ? 0.45 : 0.25,
            scale: i ? 1 : 1.22,
            jitter: 0.03,
            amp: (e) =>
              Math.min(1, e / 0.04) *
              (e > a - 0.25 ? Math.max(0, (a - e) / 0.25) : 1),
          },
        );
      return (w(l, 2), g(l, r, 280), o(C(l, 0.9), r));
    },
    ped_hey: (e, t) => {
      let n = j,
        r = t % 2 == 1,
        i = t === 2,
        a = t === 3,
        s = Math.round((a ? 0.55 : 0.34) * n),
        c = r ? 390 : 235,
        l = r ? 250 : 150,
        u = (e) => (a && e > 0.22 ? e - 0.22 : e),
        d = O(
          s,
          n,
          (e) => {
            let t = u(e);
            return c - (c - l) * Math.min(1, t / 0.22);
          },
          k(
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
              let t = u(e);
              return (a ? e < 0.2 || (e > 0.22 && e < 0.44) : e < 0.3)
                ? Math.min(1, t / 0.015) *
                    Math.max(0, 1 - Math.max(0, t - 0.12) / 0.12)
                : 0;
            },
          },
        );
      return (g(d, n, 150), o(C(d, 0.85), n));
    },
    police_whistle: (e) => {
      let n = A,
        r = 52920,
        i = d(r, n, (e) => 2950 + 170 * Math.sin(t * 29 * e), `sine`);
      S(
        i,
        d(r, n, (e) => 2 * (2950 + 170 * Math.sin(t * 29 * e)), `sine`),
        0.12,
      );
      for (let e = 0; e < r; e++)
        i[e] *= 0.7 + 0.3 * Math.sin((t * 29 * e) / n);
      let a = s(r, e);
      return (
        _(a, n, 3e3, 3),
        S(i, a, 0.25),
        b(
          i,
          n,
          [0, 0, 0.02, 1, 0.52, 1, 0.56, 0, 0.68, 0, 0.7, 1, 1.05, 1, 1.1, 0],
        ),
        o(C(i, 0.8), n)
      );
    },
    police_megaphone: (e, t) => {
      let n = M,
        r = /* @__PURE__ */ new Float32Array(41895),
        i = [`a`, `o`, `e`, `i`, `u`, `ə`, `a`, `e`],
        a = 0.08,
        s = 7 + t;
      for (let t = 0; t < s && a < 1.65; t++) {
        let o = e.range(0.11, 0.2) * (t === s - 1 ? 1.8 : 1);
        e.chance(0.5) &&
          (S(
            r,
            P(
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
        (S(
          r,
          O(
            Math.round(o * n),
            n,
            (e) => u * (1.1 - (e / o) * 0.25),
            k([
              [0, c],
              [o, l],
            ]),
            e,
            {
              breath: 0.06,
              rough: 0.2,
              amp: (e) => Math.min(1, e / 0.012) * Math.min(1, (o - e) / 0.03),
            },
          ),
          1,
          a * n,
        ),
          (a += o + e.range(0.01, 0.06)));
      }
      return (
        g(r, n, 520),
        v(r, n, 1150, 1.4, 9),
        v(r, n, 2500, 2, 6),
        h(r, n, 3600),
        C(r, 1),
        w(r, 1.5),
        re(r, n, 0.0023, 0.45, 0.4, 5e3),
        S(r, P(n, 0.02, e, `bp`, 1500, 1, 2e-4, 0.003), 0.5),
        S(
          r,
          P(n, 0.02, e, `bp`, 1500, 1, 2e-4, 0.003),
          0.4,
          1.8499999999999999 * n,
        ),
        o(C(r, 0.85), n)
      );
    },
    police_squelch: (e, n) => {
      let r = M,
        i = 7056,
        a = s(i, e);
      (_(a, r, n ? 1900 : 1600, 0.6),
        b(a, r, [0, 0, 0.006, 1, 0.04, 0.45, 0.2, 0.3, 0.26, 0]));
      let c = e.range(2100, 2500),
        l = d(i, r, (e) => c * (1 + 0.006 * Math.sin(t * 6 * e)), `sine`);
      return (
        b(l, r, [0, 0, 0.03, 0.3, 0.2, 0.18, 0.26, 0]),
        S(a, l, 0.5),
        g(a, r, 520),
        v(a, r, 1150, 1.4, 6),
        h(a, r, 3600),
        C(a, 1),
        w(a, 1.5),
        S(a, P(r, 0.02, e, `bp`, 1500, 1, 2e-4, 0.003), 0.7),
        S(a, P(r, 0.02, e, `bp`, 1800, 1, 2e-4, 0.003), 0.5, 0.27 * r),
        o(C(a, 0.8), r)
      );
    },
    vendor_call: (e, n) => {
      let r = M,
        i = n === 1,
        a = 1.05,
        s = i ? 1.55 : 1,
        c = O(
          23153,
          r,
          (e) =>
            s *
            (e < 0.3
              ? 150 + (e / 0.3) * 60
              : 205 - 30 * Math.min(1, (e - 0.3) / 0.7)) *
            (1 + (e > 0.45 ? 0.03 * Math.sin(t * 5.5 * e) : 0)),
          k([
            [0, `a`],
            [0.18, `a`],
            [0.3, `i`],
            [0.38, `o`],
            [a, `o`],
          ]),
          e,
          {
            breath: 0.12,
            rough: 0.18,
            scale: i ? 1.18 : 1,
            amp: (e) =>
              Math.min(1, e / 0.03) *
              (e > 0.28 && e < 0.34 ? 0.55 : 1) *
              Math.min(1, (a - e) / 0.25),
          },
        );
      return (g(c, r, 160), o(C(c, 0.8), r));
    },
    mahjong: (e) => {
      let t = j,
        n = 83200,
        r = new Float32Array(n),
        i = new Float32Array(n),
        a = 0.02;
      for (; a < 2.5;) {
        let n = e.range(0.25, 0.7),
          o = Math.min(2.5, a + n);
        for (; a < o;) {
          let n = P(t, 0.03, e, `hp`, 1500, 0.7, 1e-4, 8e-4),
            o = e.range(2400, 4200);
          (T(
            r,
            i,
            y(n, t, [
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
      return C(
        D({ sr: t, ch: [r, i] }, { size: 0.35, wet: 0.18, tail: 0.3 }),
        0.8,
      );
    },
    loudspeaker_vendor: (e) => {
      let n = M,
        r = /* @__PURE__ */ new Float32Array(74970),
        i = [
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
        a = 0.1;
      for (let o of i) {
        for (let [i, s, c] of o)
          (S(
            r,
            P(
              n,
              0.05,
              e,
              e.chance(0.5) ? `hp` : `bp`,
              e.chance(0.5) ? 3e3 : 1600,
              1,
              0.002,
              0.012,
            ),
            0.25,
            a * n,
          ),
            (a += 0.03),
            S(
              r,
              O(
                Math.round(c * n),
                n,
                (e) =>
                  s * (1 + 0.04 * Math.sin(t * 5 * e) * Math.min(1, e / 0.15)),
                k([
                  [0, i],
                  [c, i === `i` ? `e` : i],
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
              a * n,
            ),
            (a += c + 0.02));
        a += 0.28;
      }
      return (
        g(r, n, 480),
        v(r, n, 1250, 1.3, 9),
        v(r, n, 2600, 2, 5),
        h(r, n, 3500),
        C(r, 1),
        w(r, 3.5),
        re(r, n, 0.19, 0.3, 0.35, 2500),
        o(C(r, 0.8), n)
      );
    },
    dog_bark: (e, t) => {
      let n = M,
        r = a(0.75, n),
        i = () => {
          let r = 0.16;
          return O(
            3528,
            n,
            (e) => (t ? 520 : 380) * (1.15 - (0.4 * e) / r),
            k([
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
        S(r, i(), 1, 0.01 * n),
        S(r, i(), 0.85, 0.3 * n),
        w(r, 1.5),
        o(C(r, 0.8), n)
      );
    },
    mrt_door_chime: (e) => {
      let t = j,
        r = 92800,
        i = new Float32Array(r),
        a = new Float32Array(r);
      [88, 84, 79, 84].forEach((e, r) => {
        let o = I(t, n(e), 1.4, r === 3 ? 1.1 : 0.6);
        (S(o, I(t, n(e - 12), 1.2, 0.5), 0.25),
          T(i, a, o, 0, 0.55, r * 0.3 * t));
      });
      for (let e = 0; e < 6; e++) {
        let n = d(4160, t, 1480, `square`);
        (h(n, t, 3500),
          b(n, t, [0, 0, 0.005, 1, 0.11, 1, 0.12, 0]),
          T(i, a, n, 0, 0.12, (1.45 + e * 0.22) * t));
      }
      return C(
        D({ sr: t, ch: [i, a] }, { size: 0.55, wet: 0.2, tail: 0.5 }),
        0.8,
      );
    },
    mrt_arrival: (e) => {
      let n = j,
        r = 4.2,
        i = 134400,
        a = new Float32Array(i),
        o = new Float32Array(i);
      for (let t of [-1, 1]) {
        let c = l(i, e);
        (h(c, n, 380),
          b(c, n, [0, 0, 0.5, 1, 3.4, 0.35, r, 0]),
          T(a, o, c, t * 0.5, 1.1));
        let u = s(i, e);
        (_(u, n, 900, 0.8),
          b(u, n, [0, 0, 0.6, 1, 3.3, 0.1, r, 0]),
          T(a, o, u, t * 0.5, 0.2));
      }
      let c = (e) => 250 + 1300 * Math.exp(-e / 1.3),
        u = d(i, n, c, `sine`);
      (S(
        u,
        d(i, n, (e) => c(e) * 3, `sine`),
        0.25,
      ),
        S(
          u,
          d(i, n, (e) => c(e) * 1.5, `sine`),
          0.2,
        ),
        b(u, n, [0, 0, 0.4, 1, 3, 0.5, 3.4, 0]),
        T(a, o, u, 0, 0.09));
      let f = d(44800, n, (e) => 2400 + 45 * Math.sin(t * 6 * e), `sine`);
      (b(f, n, [0, 0, 0.4, 1, 1.1, 0.8, 1.4, 0]),
        T(a, o, f, 0.2, 0.05, 2.1 * n));
      for (let t of [0.35, 0.5, 1, 1.18, 1.9, 2.15]) {
        let r = P(n, 0.1, e, `bp`, 700, 1.2, 5e-4, 0.018);
        (S(r, N(n, 0.1, 140, 80, 0.01, 0.02), 0.5),
          T(a, o, r, e.bi() * 0.3, 0.45, t * n));
      }
      let p = s(22400, e);
      return (
        g(p, n, 2e3),
        x(p, n, 0.005, 0.2),
        T(a, o, p, -0.2, 0.3, 3.5 * n),
        C({ sr: n, ch: [a, o] }, 0.85)
      );
    },
    crosswalk_tick: (e) => {
      let t = A,
        n = d(2205, t, 880, `square`);
      return (
        h(n, t, 2200),
        x(n, t, 5e-4, 0.006),
        S(n, F(t, 0.05, 440, 0.01), 0.5),
        o(C(n, 0.7), t)
      );
    },
    crosswalk_bird: (e, n) => {
      let r = A,
        i = a(0.34, r);
      if (n === 0)
        for (let e of [0, 0.13]) {
          let n = 0.075,
            a = d(
              3308,
              r,
              (e) => 2400 + 1800 * (e / n) ** 0.7 + 120 * Math.sin(t * 90 * e),
              `sine`,
            );
          (S(
            a,
            d(a.length, r, (e) => 2 * (2400 + 1800 * (e / n) ** 0.7), `sine`),
            0.12,
          ),
            b(a, r, [0, 0, 0.006, 1, 0.05499999999999999, 0.8, n, 0]),
            S(i, a, 1, e * r));
        }
      else
        for (let [e, t] of [
          [740, 0],
          [590, 0.17],
        ]) {
          let n = d(6615, r, e, `sine`);
          (S(n, d(n.length, r, e * 2, `sine`), 0.08),
            b(n, r, [0, 0, 0.02, 1, 0.12, 0.7, 0.15, 0]),
            S(i, n, 1, t * r));
        }
      return o(C(i, 0.75), r);
    },
    store_chime: (e, t) => {
      let r = j,
        i = a(1.8, r),
        s =
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
      for (let [e, a] of s)
        S(i, I(r, n(e), 1.2, t === 0 ? 0.9 : 0.5), 0.6, a * r);
      return o(C(i, 0.75), r);
    },
    tinnitus: () => {
      let e = j,
        t = 115200,
        n = d(t, e, 3720, `sine`);
      return (
        S(n, d(t, e, 3765, `sine`), 0.55),
        b(n, e, [0, 0, 0.12, 1, 1.2, 0.6, 3.6, 0]),
        o(C(n, 0.5), e)
      );
    },
    radio_static: (e) => {
      let t = j,
        n = 0.9,
        r = 28800,
        i = s(r, e);
      _(i, t, 2200, 0.4);
      let a = 1;
      for (let t = 0; t < r; t++)
        (t & 511 || (a = 0.4 + 0.6 * e.next()), (i[t] *= a));
      for (let a = 0; a < 3; a++) {
        let a = e.range(400, 3e3),
          o = e.range(400, 3e3);
        S(
          i,
          d(r, t, (e) => a + (o - a) * (e / n), `sine`),
          0.12,
        );
      }
      for (let r = 0; r < 30; r++)
        S(
          i,
          P(t, 0.01, e, `hp`, 2e3, 0.7, 1e-4, 0.001),
          e.range(0.3, 1),
          e.range(0, n) * t,
        );
      return (te(i, t, 0.02, 0.15), o(C(i, 0.6), t));
    },
    passby_scooter: (e, n) => {
      let r = 16e3,
        i = 51200,
        a = 3.2 / 2,
        o = 11 + n * 3,
        c = 4 + n * 2,
        l = 72 + n * 8,
        u = (e) => {
          let t = (e - a) * o;
          return 343 / (343 + (o * t) / Math.hypot(t, c));
        },
        d = 0,
        f = new Float32Array(i),
        p = s(i, e);
      for (let e = 0; e < i; e++) {
        let n = e / r;
        d += (l * u(n)) / r;
        let i = (0.5 + 0.5 * Math.cos(t * d)) ** 6;
        f[e] = i * (1 + 0.25 * p[e]) + 0.25 * ((d % 1) * 2 - 1);
      }
      w(f, 2);
      let m = f.slice();
      _(m, r, 480, 1.4);
      let g = f.slice();
      (_(g, r, 1500, 2.2), f.set(m), S(f, g, 0.5));
      let v = new Float32Array(i),
        y = new Float32Array(i);
      for (let e = 0; e < i; e++) {
        let t = (e / r - a) * o,
          n = c / Math.hypot(t, c),
          i = ((Math.max(-1, Math.min(1, t / 12)) + 1) * Math.PI) / 4;
        ((v[e] = f[e] * n * Math.cos(i)), (y[e] = f[e] * n * Math.sin(i)));
      }
      return (
        h(v, r, 6e3),
        h(y, r, 6e3),
        te(v, r, 0.3, 0.3),
        te(y, r, 0.3, 0.3),
        C({ sr: r, ch: [v, y] }, 0.8)
      );
    },
    passby_car: (e, t) => {
      let n = 16e3,
        r = 57600,
        i = 3.6 / 2,
        a = 13 + t * 4,
        o = c(r, e);
      h(o, n, 900);
      let s = d(
        r,
        n,
        (e) => {
          let t = (e - i) * a;
          return 55 * (343 / (343 + (a * t) / Math.hypot(t, 5)));
        },
        `saw`,
      );
      (h(s, n, 400), S(o, s, 0.35));
      let l = new Float32Array(r),
        u = new Float32Array(r);
      for (let e = 0; e < r; e++) {
        let t = (e / n - i) * a,
          r = 5 / Math.hypot(t, 5),
          s = ((Math.max(-1, Math.min(1, t / 14)) + 1) * Math.PI) / 4;
        ((l[e] = o[e] * r * Math.cos(s)), (u[e] = o[e] * r * Math.sin(s)));
      }
      return (
        te(l, n, 0.4, 0.4),
        te(u, n, 0.4, 0.4),
        C({ sr: n, ch: [l, u] }, 0.8)
      );
    },
    distant_siren: (e) => {
      let n = 16e3,
        r = 72e3,
        i = d(r, n, (e) => 900 + 420 * Math.sin(t * 0.3 * e - 1), `square`);
      (h(i, n, 1400), g(i, n, 400), b(i, n, [0, 0, 1.2, 1, 3.2, 1, 4.5, 0]));
      let [a, o] = E(i, n, { size: 0.9, wet: 0.7, dry: 0.4, tail: 0.1 });
      return C({ sr: n, ch: [a.slice(0, r), o.slice(0, r)] }, 0.6);
    },
    bird_chirp: (e, n) => {
      let r = j,
        i = a(0.9, r),
        s = 0,
        c = n === 2 ? 6 : 3 + n;
      for (let a = 0; a < c; a++) {
        let a = n === 2 ? 0.035 : e.range(0.06, 0.13),
          o = e.range(1900, 3300),
          c = o * e.range(0.75, 1.35),
          l = d(
            Math.round(a * r),
            r,
            (e) => o + (c - o) * (e / a) + 80 * Math.sin(t * 60 * e),
            `sine`,
          );
        (b(l, r, [0, 0, 0.008, 1, a - 0.012, 0.8, a, 0]),
          S(i, l, e.range(0.6, 1), s * r),
          (s += a + (n === 2 ? 0.05 : e.range(0.02, 0.09))));
      }
      return o(C(i, 0.7), r);
    },
    wood_fish: (e) => {
      let t = A,
        n = P(t, 0.25, e, `lp`, 3e3, 0.7, 2e-4, 0.002),
        r = y(n, t, [
          [485, 1, 0.06],
          [1330, 0.5, 0.025],
          [2710, 0.2, 0.012],
        ]);
      return (S(r, n, 0.15), o(C(r, 0.8), t));
    },
    firecracker: (e, t) => {
      let n = M,
        r = 70560,
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
          f = P(
            n,
            d,
            e,
            `bp`,
            r ? 1400 : e.range(1800, 3600),
            0.6,
            2e-4,
            r ? 0.014 : e.range(0.004, 0.008),
          );
        (S(f, P(n, d, e, `hp`, 4e3, 0.7, 1e-4, 0.0015), 0.5),
          S(
            f,
            N(n, d, r ? 190 : 260, 90, 0.004, r ? 0.014 : 0.006),
            r ? 0.8 : 0.35,
          ),
          (l = Math.max(-0.8, Math.min(0.8, l + e.bi() * 0.08))),
          T(i, a, f, l + e.bi() * 0.15, u, o * n),
          o > c
            ? ((o += e.range(0.05, 0.18)), (c = o + e.range(0.35, 0.9)))
            : (o += e.range(0.018, 0.045) * (t ? 1.15 : 1)));
      }
      return C(
        D({ sr: n, ch: [i, a] }, { size: 0.55, wet: 0.2, tail: 0.6 }),
        0.95,
      );
    },
    temple_bell: (e) => {
      let t = M,
        n = f(
          143325,
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
      (S(n, P(t, 0.3, e, `lp`, 700, 0.7, 0.002, 0.03), 0.6),
        S(n, N(t, 0.3, 70, 50, 0.03, 0.06), 0.5));
      for (let e = 0; e < 132; e++) n[e] *= e / (0.006 * t);
      let [r, i] = E(n, t, { size: 0.7, wet: 0.25, tail: 0.5 });
      return C({ sr: t, ch: [r, i] }, 0.9);
    },
    temple_drum: (e, t) => {
      let n = M,
        r = t === 2 ? [0, 0.22, 0.4, 0.55] : [0],
        i = a(1.6, n);
      (r.forEach((a, o) => {
        let s = 72 + (t === 1 ? 8 : 0) + o * 2,
          c = N(n, 1.2, s * 1.35, s, 0.03, 0.34);
        (S(
          c,
          f(22050, n, s * 1.59, [
            [1, 0.35, 0.18],
            [1.33, 0.15, 0.12],
          ]),
        ),
          S(c, P(n, 0.1, e, `lp`, 1100, 0.7, 5e-4, 0.02), 0.45),
          S(i, c, o === r.length - 1 ? 1 : 0.8, a * n));
      }),
        w(i, 1.3));
      let [o, s] = E(i, n, { size: 0.6, wet: 0.2, tail: 0.3 });
      return C({ sr: n, ch: [o, s] }, 0.9);
    },
    gong: (e) => {
      let t = M,
        n = f(
          77175,
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
      (S(n, P(t, 0.3, e, `lp`, 900, 0.7, 0.002, 0.04), 0.4),
        b(n, t, [0, 0, 0.01, 1, 0.1, 0.8, 0.35, 1, 3.5, 1]));
      let [r, i] = E(n, t, { size: 0.7, wet: 0.25, tail: 0.4 });
      return C({ sr: t, ch: [r, i] }, 0.85);
    },
    thunder: (e, t) => {
      let n = M,
        r = 165375,
        i = new Float32Array(r),
        a = new Float32Array(r),
        o = t === 0;
      if (o) {
        let t = P(n, 0.5, e, `hp`, 800, 0.7, 0.001, 0.07);
        (S(t, P(n, 0.5, e, `lp`, 3e3, 0.7, 0.002, 0.12), 0.8),
          T(i, a, t, e.bi() * 0.4, 1.3));
      }
      for (let t of [-1, 1]) {
        let s = l(r, e);
        h(s, n, o ? 420 : 240, 0.7);
        let c = new Float32Array(r),
          u = 7 + e.int(4);
        for (let t = 0; t < u; t++) {
          let t = (o ? 0.1 : 0.4) + e.next() ** 1.3 * 5.5,
            i = e.range(0.25, 1.1),
            a = e.range(0.4, 1) * Math.exp(-t / 3.5);
          for (let e = 0; e < r; e++) {
            let r = (e / n - t) / i;
            r > -3 && r < 3 && (c[e] += a * Math.exp(-r * r));
          }
        }
        for (let e = 0; e < r; e++) s[e] *= c[e];
        T(i, a, s, t * 0.55, 1);
      }
      let s = l(r, e);
      return (
        h(s, n, 70),
        b(s, n, [0, 0, 0.3, 1, 4, 0.4, 7.5, 0]),
        T(i, a, s, 0, 0.8),
        C({ sr: n, ch: [i, a] }, 0.95)
      );
    },
    firework_launch: (e) => {
      let t = j,
        n = 1.6,
        r = 51200,
        i = d(r, t, (e) => 900 + 1700 * (e / n) ** 0.8, `sine`);
      (S(
        i,
        d(r, t, (e) => 2 * (900 + 1700 * (e / n) ** 0.8), `sine`),
        0.15,
      ),
        b(i, t, [0, 0, 0.1, 0.7, 1.5, 1, n, 0]));
      let a = s(r, e);
      return (
        _(a, t, 3500, 0.8),
        b(a, t, [0, 1, 0.3, 0.3, n, 0.1]),
        S(i, a, 0.3),
        o(C(i, 0.6), t)
      );
    },
    firework_boom: (e) => {
      let t = M,
        n = 77175,
        r = new Float32Array(n),
        i = new Float32Array(n),
        a = N(t, 1.5, 80, 35, 0.08, 0.35);
      (S(a, P(t, 0.5, e, `lp`, 1500, 0.7, 0.001, 0.08), 0.8),
        w(a, 2),
        T(r, i, a, 0, 1));
      for (let n = 0; n < 90; n++) {
        let n = 0.15 + e.next() ** 1.5 * 2.6;
        T(
          r,
          i,
          P(t, 0.02, e, `hp`, 2500, 0.7, 1e-4, 0.0015),
          e.bi() * 0.9,
          e.range(0.1, 0.35) * Math.exp(-n / 1.5),
          n * t,
        );
      }
      return C(
        D({ sr: t, ch: [r, i] }, { size: 0.85, wet: 0.35, tail: 1.2 }),
        0.9,
      );
    },
    firework_whistle: (e, n) => {
      let r = j,
        i = 1.9 + n * 0.3,
        a = Math.round(i * r),
        c = 1150 + n * 200,
        l = 3300 - n * 500,
        u = (e) => {
          let r = e / i,
            a = c + (l - c) * r ** 0.65;
          return (
            (n ? a * (1 - (0.18 * Math.max(0, r - 0.7)) / 0.3) : a) *
            (1 + 0.012 * Math.sin(t * 23 * e))
          );
        },
        f = d(a, r, u, `sine`);
      S(
        f,
        d(a, r, (e) => u(e) * 2, `sine`),
        0.12,
      );
      let p = s(a, e);
      (_(p, r, u, 18),
        S(f, p, 1.6),
        b(f, r, [0, 0, 0.06, 0.75, i * 0.6, 1, i - 0.08, 0.85, i, 0]));
      let m = s(a, e);
      return (
        g(m, r, 2500),
        b(m, r, [0, 0, 0.02, 1, 0.5, 0.35, i, 0.05]),
        S(f, m, 0.12),
        o(C(f, 0.6), r)
      );
    },
    firework_crackle: (e, t) => {
      let n = j,
        r = a(2.8, n),
        i = 170 + t * 60;
      for (let t = 0; t < i; t++) {
        let t = 0.05 + e.next() ** 1.7 * 2.4,
          i = e.chance(0.12);
        S(
          r,
          P(
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
      let s = E(r, n, { size: 0.5, wet: 0.18, tail: 0.4 }),
        c = new Float32Array(s[0].length);
      for (let e = 0; e < c.length; e++) c[e] = (s[0][e] + s[1][e]) * 0.5;
      return o(C(c, 0.85), n);
    },
    backfire: (e, t) => {
      let n = A,
        r = a(0.7, n);
      return (
        (t === 1 ? [0, 0.11] : [0]).forEach((t, i) => {
          let a = Math.round(t * n),
            o = i ? 0.7 : 1;
          (S(r, P(n, 0.08, e, `bp`, 1600, 0.6, 15e-5, 0.007), 1 * o, a),
            S(r, N(n, 0.35, 170, 55, 0.012, 0.05, 5e-4), 1.1 * o, a),
            S(
              r,
              y(P(n, 0.05, e, `hp`, 1500, 0.7, 2e-4, 0.003), n, [
                [e.range(520, 700), 0.5, 0.06],
                [e.range(1300, 1700), 0.3, 0.035],
              ]),
              0.35 * o,
              a,
            ));
        }),
        w(r, 2.2),
        o(C(r, 0.95), n)
      );
    },
    motorcycle_start: (e) => {
      let n = j,
        r = a(1.9, n),
        i = d(12800, n, (e) => 55 + 30 * e, `saw`);
      for (let e = 0; e < i.length; e++)
        i[e] *= 0.55 + 0.45 * Math.sin((t * 11 * e) / n);
      (_(i, n, 900, 0.9),
        b(i, n, [0, 0, 0.02, 1, 0.38, 1, 0.4, 0]),
        S(r, i, 0.5));
      let c = 0,
        l = 48640,
        u = (e) =>
          20 +
          95 * Math.exp(-(((e - 0.45) / 0.18) ** 2)) +
          22 * Math.min(1, e / 0.2),
        f = s(l, e),
        p = new Float32Array(l);
      for (let e = 0; e < l; e++) {
        let r = e / n;
        c += u(r) / n;
        let i = (0.5 + 0.5 * Math.cos(t * c)) ** 5;
        ((f[e] *= i), (p[e] = i));
      }
      return (
        h(f, n, 1400, 1.2),
        S(f, p, 0.35),
        h(f, n, 2200, 0.8),
        b(f, n, [0, 0, 0.03, 1, 1.32, 0.8, 1.52, 0]),
        S(r, f, 1, 12160),
        w(r, 2),
        o(C(r, 0.85), n)
      );
    },
    ev_start: () => {
      let e = j,
        t = a(1, e);
      (S(t, I(e, n(79), 0.8, 0.35), 0.6),
        S(t, I(e, n(86), 0.8, 0.5), 0.7, 4480));
      let r = d(11200, e, (e) => 600 + 5200 * e, `sine`);
      return (
        b(r, e, [0, 0, 0.02, 1, 0.3, 0.5, 0.35, 0]),
        S(t, r, 0.08, 9600),
        o(C(t, 0.7), e)
      );
    },
    microwave_beep: () => {
      let e = j,
        t = a(1.1, e);
      for (let n = 0; n < 3; n++) {
        let r = d(5120, e, 2050, `square`);
        (h(r, e, 4200),
          b(r, e, [0, 0, 0.004, 1, 0.15, 1, 0.16, 0]),
          S(t, r, 0.5, Math.round(n * 0.32 * e)));
      }
      return o(C(t, 0.6), e);
    },
    fridge_door: (e) => {
      let t = j,
        n = a(0.9, t);
      (S(n, P(t, 0.12, e, `bp`, 700, 0.8, 0.004, 0.03), 0.5),
        S(n, N(t, 0.3, 95, 60, 0.02, 0.06), 0.9, 13440),
        S(n, P(t, 0.15, e, `lp`, 450, 0.7, 0.002, 0.04), 0.6, 13440));
      for (let r of [0.47, 0.5])
        S(n, F(t, 0.4, e.range(2400, 3300), 0.09), 0.18, Math.round(r * t));
      return o(C(n, 0.7), t);
    },
    camera_shutter: (e) => {
      let t = A,
        n = a(0.2, t),
        r = P(t, 0.03, e, `hp`, 2500, 0.7, 1e-4, 0.0035);
      (S(
        n,
        y(r, t, [
          [3150, 1, 0.012],
          [5200, 0.5, 0.006],
          [1450, 0.4, 0.01],
        ]),
        0.9,
      ),
        S(n, r, 0.5),
        S(n, P(t, 0.06, e, `bp`, 900, 1.4, 5e-4, 0.014), 0.45));
      let i = 3175,
        s = P(t, 0.03, e, `bp`, 2200, 1.2, 1e-4, 0.005);
      return (
        S(
          n,
          y(s, t, [
            [2450, 1, 0.01],
            [4100, 0.45, 0.005],
            [1100, 0.35, 0.012],
          ]),
          0.75,
          i,
        ),
        S(n, s, 0.4, i),
        S(n, P(t, 0.05, e, `lp`, 600, 0.7, 5e-4, 0.01), 0.3, i),
        o(C(n, 0.8), t)
      );
    },
    moon_blocks: (e) => {
      let t = A,
        n = a(0.85, t);
      for (let r = 0; r < 2; r++) {
        let i = e.range(760, 960) * (r ? 1.08 : 1),
          a = 0.02 + r * e.range(0.012, 0.045),
          o = 1,
          s = e.range(0.12, 0.18),
          c = (r, a, o) => {
            let s = P(
                t,
                0.05,
                e,
                `lp`,
                2200 + 3200 * o,
                0.7,
                1e-4,
                0.0012 + 0.0012 * o,
              ),
              c = y(s, t, [
                [i * e.range(0.98, 1.02), 1, 0.028],
                [i * 2.31, 0.55, 0.013],
                [i * 3.93, 0.28, 0.006],
                [i * 0.52, 0.22, 0.02],
              ]);
            (S(c, s, 0.35), S(n, c, a, Math.round(r * t)));
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
        S(n, N(t, 0.2, 170, 90, 0.015, 0.03), 0.35, 882),
        o(C(n, 0.85), t)
      );
    },
    alarm: (e) => {
      let t = j,
        n = 2.6,
        r = 83200,
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
        s = y(i, t, [
          [a, 1, 0.075],
          [a * 2.33, 0.62, 0.055],
          [a * 3.91, 0.34, 0.04],
          [a * 5.97, 0.18, 0.03],
          [a * 0.502, 0.22, 0.09],
        ]),
        c = d(r, t, 60, `saw`);
      return (
        h(c, t, 900),
        S(s, c, 0.006),
        S(s, P(t, n, e, `bp`, 3400, 1.2, 0.003, 0.02), 0.05),
        b(s, t, [
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
        o(C(s, 0.8), t)
      );
    },
  },
  xe = {
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
    police_squelch: 2,
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
