// tokyo/assets/worker-DgMkLY7L 06 — math
// Lines 2821-3398 of readable/tokyo/assets/worker-DgMkLY7L.pretty.js (statement-aligned).
const we = {
  amb_city: (e, t) => {
    let n = 16e3,
      r = 10 * t + 2,
      i = Math.round(r * n),
      a = new Float32Array(i),
      o = new Float32Array(i);
    for (let [t, r] of [
      [a, -1],
      [o, 1],
    ]) {
      let r = l(i, e);
      h(r, n, 230, 0.7);
      let a = c(i, e);
      _(a, n, 520, 0.5);
      let o = s(i, e);
      g(o, n, 3500);
      let u = R(i, n, e, [0.05, 0.11, 0.23]);
      for (let e = 0; e < i; e++)
        t[e] =
          r[e] * 0.9 * (0.7 + 0.5 * u[e]) +
          a[e] * 0.22 * (0.6 + 0.6 * u[e]) +
          o[e] * 0.012;
    }
    for (let t = 0; t < 5; t++) {
      let t = e.range(55, 140),
        r = R(i, n, e, [0.07, 0.13]),
        s = d(
          i,
          n,
          (e) => t * (0.94 + 0.12 * r[Math.min(i - 1, Math.floor(e * n))]),
          `saw`,
          e.next(),
        );
      h(s, n, 320, 0.7);
      let c = R(i, n, e, [0.04, 0.09]);
      for (let e = 0; e < i; e++) s[e] *= c[e] * c[e];
      T(a, o, s, e.bi() * 0.8, 0.12);
    }
    return z(a, o, n, 2, 0.75);
  },
  amb_rain_light: (e, t) => {
    let n = 22050,
      r = 7 * t + 1.5,
      i = Math.round(r * n),
      a = new Float32Array(i),
      o = new Float32Array(i);
    for (let t of [a, o]) {
      let r = s(i, e);
      (g(r, n, 1200), h(r, n, 6500));
      let a = c(i, e);
      (g(a, n, 300), h(a, n, 2400));
      let o = R(i, n, e, [0.09, 0.21]);
      for (let e = 0; e < i; e++)
        t[e] = (r[e] * 0.16 + a[e] * 0.07) * (0.85 + 0.25 * o[e]);
    }
    return (
      Se(a, o, n, r, e, 900, 4e-4, 0.0014, 2500, 9e3, 0.35),
      Ce(a, o, n, r, e, 5, 0.3),
      z(a, o, n, 1.2, 0.7)
    );
  },
  amb_rain_heavy: (e, t) => {
    let n = 22050,
      r = 7 * t + 1.5,
      i = Math.round(r * n),
      a = new Float32Array(i),
      o = new Float32Array(i);
    for (let t of [a, o]) {
      let r = c(i, e);
      (g(r, n, 250), h(r, n, 7e3));
      let a = s(i, e);
      (g(a, n, 3e3), h(a, n, 9500));
      let o = l(i, e);
      h(o, n, 180);
      let u = R(i, n, e, [0.13, 0.31, 0.7]);
      for (let e = 0; e < i; e++)
        t[e] = (r[e] * 0.5 + a[e] * 0.1) * (0.85 + 0.2 * u[e]) + o[e] * 0.1;
    }
    return (
      Se(a, o, n, r, e, 3e3, 3e-4, 0.0012, 2e3, 9e3, 0.3),
      Ce(a, o, n, r, e, 22, 0.35),
      z(a, o, n, 1.2, 0.8)
    );
  },
  amb_rain_roof: (e, t) => {
    let n = 11025,
      r = 5 * t + 1.2,
      i = Math.round(r * n),
      a = new Float32Array(i),
      o = new Float32Array(i);
    for (let t = 0; t < r * 650; t++) {
      let t = e.next() * (r - 0.02),
        i = s(165, e);
      (_(i, n, e.range(500, 1500), 1.4),
        x(i, n, 3e-4, 0.004),
        T(a, o, i, e.bi() * 0.9, e.range(0.2, 0.7), t * n));
    }
    for (let t of [a, o]) {
      let r = l(i, e);
      (h(r, n, 220), S(t, r, 0.35));
    }
    return z(a, o, n, 1, 0.75);
  },
  amb_wind: (e, t) => {
    let n = 11025,
      r = 10 * t + 2,
      i = Math.round(r * n),
      a = new Float32Array(i),
      o = new Float32Array(i);
    for (let t of [a, o]) {
      let r = c(i, e),
        a = R(i, n, e, [0.05, 0.12, 0.27]),
        o = R(i, n, e, [0.08, 0.19, 0.41]);
      _(r, n, (e) => 220 + 700 * a[Math.min(i - 1, Math.floor(e * n))], 0.8);
      for (let e = 0; e < i; e++) t[e] = r[e] * (0.25 + 0.9 * o[e] * o[e]);
      for (let r of [690, 1130]) {
        let c = s(i, e);
        _(
          c,
          n,
          (e) => r * (0.9 + 0.2 * a[Math.min(i - 1, Math.floor(e * n))]),
          16,
        );
        for (let e = 0; e < i; e++) t[e] += c[e] * 0.5 * o[e] ** 3;
      }
    }
    return z(a, o, n, 2, 0.8);
  },
  amb_park_day: (e, n) => {
    let r = 22050,
      i = 10 * n + 2,
      a = Math.round(i * r),
      o = new Float32Array(a),
      l = new Float32Array(a);
    for (let n of [o, l]) {
      let i = s(a, e);
      _(i, r, 5200, 3);
      let o = R(a, r, e, [0.06, 0.15]);
      for (let e = 0; e < a; e++)
        n[e] +=
          i[e] *
          (0.6 + 0.4 * Math.sin((t * 96 * e) / r)) *
          0.25 *
          (0.5 + 0.5 * o[e]);
    }
    for (let n = 0; n < 3; n++) {
      let n = Math.round(e.range(4, 7) * r),
        a = e.next() * (i - n / r - 0.5),
        c = e.range(4300, 6600),
        u = e.range(110, 190),
        d = s(n, e);
      _(d, r, c, 5);
      for (let e = 0; e < n; e++) {
        let i = e / r,
          a = n / r,
          o = Math.min(1, i / 1.5) * Math.min(1, (a - i) / 0.8),
          s = (0.5 + 0.5 * Math.sin(t * u * i)) ** 3;
        d[e] *= s * o * (0.8 + 0.2 * Math.sin(t * 0.8 * i));
      }
      T(o, l, d, e.bi() * 0.9, 0.5, a * r);
    }
    for (let n = 0; n < 7; n++) {
      let n = e.next() * (i - 1.2),
        a = e.bi() * 0.9,
        s = e.range(0.12, 0.35),
        c = 2 + e.int(4);
      for (let i = 0; i < c; i++) {
        let i = e.range(0.05, 0.14),
          c = e.range(1700, 3400),
          u = c * e.range(0.7, 1.4),
          f = d(
            Math.round(i * r),
            r,
            (e) => c + (u - c) * (e / i) + 60 * Math.sin(t * 55 * e),
            `sine`,
          );
        (b(f, r, [0, 0, 0.01, 1, i - 0.015, 0.8, i, 0]),
          T(o, l, f, a, s, n * r),
          (n += i + e.range(0.02, 0.1)));
      }
    }
    for (let t = 0; t < 10; t++) {
      let t = e.next() * (i - 0.2),
        n = 0.035,
        a = d(772, r, (e) => 4200 - (e / n) * 1400, `sine`);
      (b(a, r, [0, 0, 0.004, 1, n, 0]),
        T(o, l, a, e.bi(), e.range(0.05, 0.15), t * r));
    }
    for (let t of [o, l]) {
      let n = c(a, e);
      (g(n, r, 1800), h(n, r, 7e3));
      let i = R(a, r, e, [0.09, 0.21]);
      for (let e = 0; e < a; e++) t[e] += n[e] * 0.06 * i[e];
    }
    return z(o, l, r, 2, 0.7);
  },
  amb_park_night: (e, n) => {
    let r = 22050,
      i = 9 * n + 2,
      a = Math.round(i * r),
      o = new Float32Array(a),
      c = new Float32Array(a);
    for (let t = 0; t < 4; t++) {
      let t = e.range(4e3, 5300),
        n = e.range(0.38, 0.75),
        a = 3 + e.int(2),
        s = e.bi() * 0.9,
        l = e.range(0.25, 0.6);
      for (let u = e.next() * n; u < i - 0.3; u += n * e.range(0.95, 1.05))
        for (let e = 0; e < a; e++)
          T(o, c, F(r, 0.03, t, 0.006), s, l, (u + e * 0.034) * r);
    }
    for (let t = 0; t < 3; t++) {
      let t = e.range(380, 620),
        n = e.bi() * 0.8,
        a = e.range(0.25, 0.5);
      for (let s = e.next() * 2; s < i - 0.6; s += e.range(1.4, 3.2)) {
        let i = 3 + e.int(6);
        for (let e = 0; e < i; e++)
          T(
            o,
            c,
            f(1103, r, t, [
              [1, 1, 0.012],
              [2, 0.5, 0.008],
              [3.1, 0.2, 0.006],
            ]),
            n,
            a,
            (s + e * 0.045) * r,
          );
      }
    }
    for (let n of [o, c]) {
      let i = s(a, e);
      _(i, r, 7200, 4);
      let o = l(a, e);
      h(o, r, 180);
      for (let e = 0; e < a; e++)
        n[e] +=
          i[e] * 0.05 * (0.5 + 0.5 * Math.sin((t * 45 * e) / r)) + o[e] * 0.25;
    }
    return z(o, c, r, 2, 0.65);
  },
  amb_river: (e, t) => {
    let n = 11025,
      r = 9 * t + 2,
      i = Math.round(r * n),
      a = new Float32Array(i),
      o = new Float32Array(i);
    for (let t of [a, o]) {
      let r = l(i, e);
      h(r, n, 650);
      let a = R(i, n, e, [0.31, 0.53, 0.87, 1.3]),
        o = c(i, e);
      _(o, n, 1500, 0.6);
      let s = c(i, e);
      h(s, n, 900);
      let u = R(i, n, e, [0.07, 0.17]);
      for (let e = 0; e < i; e++)
        t[e] = r[e] * a[e] ** 2 * 1.2 + o[e] * 0.08 * a[e] + s[e] * 0.2 * u[e];
    }
    for (let t = 0; t < r * 1.4; t++) {
      let t = e.next() * (r - 0.1),
        i = e.range(250, 520),
        s = d(662, n, (e) => i * (1 + (e / 0.06) * 1.8), `sine`);
      (x(s, n, 0.002, 0.015),
        T(a, o, s, e.bi() * 0.8, e.range(0.1, 0.25), t * n));
    }
    return z(a, o, n, 2, 0.7);
  },
  amb_temple: (e, n) => {
    let r = 22050,
      i = 0.3,
      a = Math.max(3, Math.round(4 * n)),
      o = a * 8 * i + 2,
      s = Math.round(o * r),
      c = new Float32Array(s),
      l = [`a`, `o`, `u`, `e`, `ə`, `i`, `o`, `a`],
      u = [0, 0, 0, 0, 0, 0, -2, -3],
      d = [
        { f: 118, g: 1, det: 0 },
        { f: 118 * 1.009, g: 0.8, det: 0.012 },
        { f: 116, g: 0.7, det: -0.01 },
        { f: 236, g: 0.35, det: 0.005 },
      ];
    for (let n = 0; n < a; n++)
      for (let a = 0; a < 8; a++) {
        let o = (n * 8 + a) * i,
          s = l[(n * 3 + a * 5) % l.length],
          p = l[(n * 7 + a * 3 + 1) % l.length],
          m = u[a] + (n % 3 == 2 && a > 5 ? 2 : 0);
        for (let n of d) {
          let a = e.bi() * 0.015,
            l = n.f * 2 ** (m / 12);
          S(
            c,
            O(
              7056,
              r,
              (e) => l * (1 + 0.01 * Math.sin(t * 4 * e)),
              k([
                [0, s],
                [i * 0.7, p],
              ]),
              e,
              {
                breath: 0.05,
                scale: n.f > 200 ? 1.15 : 1,
                amp: (e) =>
                  Math.min(1, e / 0.03) * Math.min(1, (0.32 - e) / 0.06),
              },
            ),
            n.g * 0.5,
            (o + a) * r,
          );
        }
        (S(
          c,
          y(P(r, 0.2, e, `lp`, 3e3, 0.7, 2e-4, 0.002), r, [
            [485, 1, 0.06],
            [1330, 0.5, 0.025],
          ]),
          1.6,
          o * r,
        ),
          a === 0 &&
            S(
              c,
              f(55125, r, 1046, [
                [1, 1, 1.4],
                [2.71, 0.4, 0.6],
                [5.1, 0.15, 0.3],
              ]),
              0.12,
              o * r,
            ));
      }
    let [p, m] = E(c, r, { size: 0.75, wet: 0.4, dry: 0.8, tail: 0 });
    return z(p.slice(0, s), m.slice(0, s), r, 1.5, 0.7);
  },
  amb_market: (e, t) => {
    let n = 22050,
      r = 10 * t + 2,
      i = Math.round(r * n),
      a = new Float32Array(i),
      o = new Float32Array(i),
      s = Object.keys(le),
      c = Math.round(10 + 6 * t);
    for (let t = 0; t < c; t++) {
      let t = e.chance(0.5) ? e.range(105, 150) : e.range(190, 260),
        i = t > 170 ? 1.17 : 1,
        c = e.bi() * 0.95,
        l = e.range(0.25, 0.7),
        u = e.next() * 2;
      for (; u < r - 0.5;) {
        let d = 3 + e.int(9);
        for (let f = 0; f < d && u < r - 0.3; f++) {
          let r = e.range(0.1, 0.22),
            d = e.pick(s),
            f = e.pick(s),
            p = e.range(0.85, 1.2),
            m = e.range(0.85, 1.2);
          (T(
            a,
            o,
            O(
              Math.round(r * n),
              n,
              (e) => t * (p + (m - p) * (e / r)),
              k([
                [0, d],
                [r, f],
              ]),
              e,
              {
                breath: 0.1,
                scale: i,
                amp: (e) =>
                  Math.min(1, e / 0.015) * Math.min(1, (r - e) / 0.03),
              },
            ),
            c,
            l,
            u * n,
          ),
            (u += r + e.range(0, 0.05)));
        }
        u += e.range(0.4, 2.2);
      }
    }
    (h(a, n, 3800), h(o, n, 3800));
    for (let t = 0; t < 7; t++) {
      let t = e.next() * (r - 0.3);
      T(
        a,
        o,
        y(P(n, 0.25, e, `hp`, 1500, 0.7, 2e-4, 0.002), n, [
          [e.range(1800, 3200), 1, 0.08],
          [e.range(3500, 5200), 0.6, 0.04],
        ]),
        e.bi() * 0.8,
        0.35,
        t * n,
      );
    }
    {
      let t = e.range(1, r - 4);
      [72, 76, 79, 84, 79, 76, 72, 67].forEach((e, r) => {
        let i = d(2646, n, 440 * 2 ** ((e - 69) / 12), `square`);
        (b(i, n, [0, 0, 0.005, 1, 0.1, 0.6, 0.12, 0]),
          h(i, n, 2500),
          T(a, o, i, 0.7, 0.04, (t + r * 0.13) * n));
      });
    }
    let [l, u] = E(a, n, { size: 0.45, wet: 0.18, dry: 1, tail: 0 }),
      [f, p] = E(o, n, { size: 0.45, wet: 0.18, dry: 1, tail: 0 });
    for (let e = 0; e < i; e++)
      ((a[e] = (l[e] + f[e] * 0.3) * 0.8), (o[e] = (p[e] + u[e] * 0.3) * 0.8));
    return z(a, o, n, 2, 0.4);
  },
  mrt_rumble: (e, t) => {
    let n = 8e3,
      r = 5 * t + 1.5,
      i = Math.round(r * n),
      a = new Float32Array(i),
      o = new Float32Array(i);
    for (let t of [a, o]) {
      let r = l(i, e);
      h(r, n, 320);
      let a = c(i, e);
      _(a, n, 850, 0.7);
      let o = R(i, n, e, [0.4, 0.9, 1.7]);
      for (let e = 0; e < i; e++)
        t[e] = r[e] + a[e] * 0.35 * (0.7 + 0.3 * o[e]);
    }
    return z(a, o, n, 1, 0.8);
  },
  amb_store: (e, t) => {
    let n = 22050,
      r = 8 * t + 2,
      i = Math.round(r * n),
      a = new Float32Array(i),
      o = new Float32Array(i);
    for (let [t, r] of [
      [a, -1],
      [o, 1],
    ]) {
      let a = c(i, e);
      (h(a, n, 700, 0.6), g(a, n, 90), S(t, a, 0.35));
      let o = d(i, n, 60 * (1 + r * 0.0015), `saw`, e.next());
      h(o, n, 260, 0.9);
      let s = R(i, n, e, [0.03, 0.07]);
      for (let e = 0; e < i; e++) t[e] += o[e] * 0.07 * (0.75 + 0.25 * s[e]);
    }
    let s = d(i, n, 120, `square`, e.next());
    (_(s, n, 2600, 2.5), T(a, o, s, 0.3, 0.012));
    let l = d(i, n, 29.5, `tri`, e.next());
    (S(l, d(i, n, 59, `sine`, e.next()), 0.6),
      b(l, n, [0, 0.2, r * 0.25, 1, r * 0.7, 1, r, 0.2]),
      T(a, o, l, -0.5, 0.12));
    let u = new Float32Array(i),
      f = [
        [60, 64, 67, 71],
        [57, 60, 64, 67],
        [62, 65, 69, 72],
        [55, 59, 62, 65],
      ],
      p = r / f.length;
    (f.forEach((t, r) => {
      for (let i of t) {
        let t = 440 * 2 ** ((i - 69) / 12),
          a = d(Math.round((p + 0.3) * n), n, t, `tri`, e.next());
        (b(a, n, [0, 0, 0.3, 1, p - 0.1, 0.9, p + 0.3, 0]),
          S(u, a, 0.12, Math.round(r * p * n)));
      }
      for (let e = 0; e < 4; e++) {
        let i = t[(e * 3 + r) % 4] + 12,
          a = F(n, 0.6, 440 * 2 ** ((i - 69) / 12), 0.25, 0.25);
        S(u, a, 1, Math.round((r * p + (e * p) / 4 + 0.05) * n));
      }
    }),
      g(u, n, 380, 0.7),
      h(u, n, 2600, 0.7));
    let [m, v] = E(u, n, { size: 0.5, wet: 0.35, dry: 0.7, tail: 0 });
    return (
      S(a, m.subarray(0, i), 0.5),
      S(o, v.subarray(0, i), 0.45),
      z(a, o, n, 1.5, 0.6)
    );
  },
  amb_hall: (e, t) => {
    let n = 22050,
      r = 9 * t + 2,
      i = Math.round(r * n),
      a = new Float32Array(i),
      o = new Float32Array(i),
      l = new Float32Array(i);
    for (let t of [o, l]) {
      let r = c(i, e);
      (h(r, n, 420, 0.6), S(t, r, 0.45));
      let a = s(i, e);
      (_(a, n, 1800, 0.5), S(t, a, 0.012));
    }
    let u = Object.keys(le);
    for (let t = 0; t < 7; t++) {
      let t = e.chance(0.5) ? e.range(105, 150) : e.range(190, 250),
        i = e.next() * 2;
      for (; i < r - 0.5;) {
        let o = 2 + e.int(6);
        for (let s = 0; s < o && i < r - 0.3; s++) {
          let r = e.range(0.12, 0.24),
            o = e.pick(u),
            s = e.pick(u);
          (S(
            a,
            O(
              Math.round(r * n),
              n,
              (e) => t * (1 + 0.1 * Math.sin(e * 9)),
              k([
                [0, o],
                [r, s],
              ]),
              e,
              {
                breath: 0.12,
                scale: t > 170 ? 1.17 : 1,
                amp: (e) => Math.min(1, e / 0.02) * Math.min(1, (r - e) / 0.03),
              },
            ),
            e.range(0.1, 0.25),
            i * n,
          ),
            (i += r + e.range(0, 0.06)));
        }
        i += e.range(0.8, 3);
      }
    }
    for (let t = 0; t < r * 1.3; t++) {
      let t = e.next() * (r - 0.3);
      S(
        a,
        P(n, 0.08, e, `bp`, e.range(900, 1600), 1, 0.001, 0.012),
        e.range(0.05, 0.12),
        t * n,
      );
    }
    h(a, n, 2400);
    let [d, f] = E(a, n, { size: 0.92, wet: 0.8, dry: 0.15, tail: 0 });
    return (
      S(o, d.subarray(0, i), 0.6),
      S(l, f.subarray(0, i), 0.6),
      z(o, l, n, 2, 0.6)
    );
  },
  vinyl: (e) => {
    let t = 22050,
      n = 165375,
      r = new Float32Array(n),
      i = new Float32Array(n);
    for (let a of [r, i]) {
      let r = c(n, e);
      (g(r, t, 900), h(r, t, 6500), S(a, r, 0.05));
      let i = l(n, e);
      (h(i, t, 60), S(a, i, 0.08));
    }
    for (let n = 0; n < 105; n++) {
      let n = e.next() * 7.49,
        a = s(66, e);
      (g(a, t, 1200),
        x(a, t, 1e-4, 6e-4),
        T(r, i, a, e.bi() * 0.5, e.range(0.2, 1), n * t));
    }
    return z(r, i, t, 0.5, 0.5);
  },
};
