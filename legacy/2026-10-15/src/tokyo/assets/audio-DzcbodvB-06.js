// tokyo/assets/audio-DzcbodvB 06 — math
// Lines 2834-3411 of readable/tokyo/assets/audio-DzcbodvB.pretty.js (statement-aligned).
var Ae = {
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
      let r = h(i, e);
      x(r, n, 230, 0.7);
      let a = m(i, e);
      C(a, n, 520, 0.5);
      let o = p(i, e);
      S(o, n, 3500);
      let s = R(i, n, e, [0.05, 0.11, 0.23]);
      for (let e = 0; e < i; e++)
        t[e] =
          r[e] * 0.9 * (0.7 + 0.5 * s[e]) +
          a[e] * 0.22 * (0.6 + 0.6 * s[e]) +
          o[e] * 0.012;
    }
    for (let t = 0; t < 5; t++) {
      let t = e.range(55, 140),
        r = R(i, n, e, [0.07, 0.13]),
        s = _(
          i,
          n,
          (e) => t * (0.94 + 0.12 * r[Math.min(i - 1, Math.floor(e * n))]),
          `saw`,
          e.next(),
        );
      x(s, n, 320, 0.7);
      let c = R(i, n, e, [0.04, 0.09]);
      for (let e = 0; e < i; e++) s[e] *= c[e] * c[e];
      j(a, o, s, e.bi() * 0.8, 0.12);
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
      let r = p(i, e);
      (S(r, n, 1200), x(r, n, 6500));
      let a = m(i, e);
      (S(a, n, 300), x(a, n, 2400));
      let o = R(i, n, e, [0.09, 0.21]);
      for (let e = 0; e < i; e++)
        t[e] = (r[e] * 0.16 + a[e] * 0.07) * (0.85 + 0.25 * o[e]);
    }
    return (
      Oe(a, o, n, r, e, 900, 4e-4, 0.0014, 2500, 9e3, 0.35),
      ke(a, o, n, r, e, 5, 0.3),
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
      let r = m(i, e);
      (S(r, n, 250), x(r, n, 7e3));
      let a = p(i, e);
      (S(a, n, 3e3), x(a, n, 9500));
      let o = h(i, e);
      x(o, n, 180);
      let s = R(i, n, e, [0.13, 0.31, 0.7]);
      for (let e = 0; e < i; e++)
        t[e] = (r[e] * 0.5 + a[e] * 0.1) * (0.85 + 0.2 * s[e]) + o[e] * 0.1;
    }
    return (
      Oe(a, o, n, r, e, 3e3, 3e-4, 0.0012, 2e3, 9e3, 0.3),
      ke(a, o, n, r, e, 22, 0.35),
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
        i = p(165, e);
      (C(i, n, e.range(500, 1500), 1.4),
        D(i, n, 3e-4, 0.004),
        j(a, o, i, e.bi() * 0.9, e.range(0.2, 0.7), t * n));
    }
    for (let t of [a, o]) {
      let r = h(i, e);
      (x(r, n, 220), O(t, r, 0.35));
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
      let r = m(i, e),
        a = R(i, n, e, [0.05, 0.12, 0.27]),
        o = R(i, n, e, [0.08, 0.19, 0.41]);
      C(r, n, (e) => 220 + 700 * a[Math.min(i - 1, Math.floor(e * n))], 0.8);
      for (let e = 0; e < i; e++) t[e] = r[e] * (0.25 + 0.9 * o[e] * o[e]);
      for (let r of [690, 1130]) {
        let s = p(i, e);
        C(
          s,
          n,
          (e) => r * (0.9 + 0.2 * a[Math.min(i - 1, Math.floor(e * n))]),
          16,
        );
        for (let e = 0; e < i; e++) t[e] += s[e] * 0.5 * o[e] ** 3;
      }
    }
    return z(a, o, n, 2, 0.8);
  },
  amb_park_day: (e, t) => {
    let n = 22050,
      r = 10 * t + 2,
      i = Math.round(r * n),
      a = new Float32Array(i),
      o = new Float32Array(i);
    for (let t of [a, o]) {
      let r = p(i, e);
      C(r, n, 5200, 3);
      let a = R(i, n, e, [0.06, 0.15]);
      for (let e = 0; e < i; e++)
        t[e] +=
          r[e] *
          (0.6 + 0.4 * Math.sin((s * 96 * e) / n)) *
          0.25 *
          (0.5 + 0.5 * a[e]);
    }
    for (let t = 0; t < 3; t++) {
      let t = Math.round(e.range(4, 7) * n),
        i = e.next() * (r - t / n - 0.5),
        c = e.range(4300, 6600),
        l = e.range(110, 190),
        u = p(t, e);
      C(u, n, c, 5);
      for (let e = 0; e < t; e++) {
        let r = e / n,
          i = t / n,
          a = Math.min(1, r / 1.5) * Math.min(1, (i - r) / 0.8),
          o = (0.5 + 0.5 * Math.sin(s * l * r)) ** 3;
        u[e] *= o * a * (0.8 + 0.2 * Math.sin(s * 0.8 * r));
      }
      j(a, o, u, e.bi() * 0.9, 0.5, i * n);
    }
    for (let t = 0; t < 7; t++) {
      let t = e.next() * (r - 1.2),
        i = e.bi() * 0.9,
        c = e.range(0.12, 0.35),
        l = 2 + e.int(4);
      for (let r = 0; r < l; r++) {
        let r = e.range(0.05, 0.14),
          l = e.range(1700, 3400),
          u = l * e.range(0.7, 1.4),
          d = _(
            Math.round(r * n),
            n,
            (e) => l + (u - l) * (e / r) + 60 * Math.sin(s * 55 * e),
            `sine`,
          );
        (E(d, n, [0, 0, 0.01, 1, r - 0.015, 0.8, r, 0]),
          j(a, o, d, i, c, t * n),
          (t += r + e.range(0.02, 0.1)));
      }
    }
    for (let t = 0; t < 10; t++) {
      let t = e.next() * (r - 0.2),
        i = 0.035,
        s = _(772, n, (e) => 4200 - (e / i) * 1400, `sine`);
      (E(s, n, [0, 0, 0.004, 1, i, 0]),
        j(a, o, s, e.bi(), e.range(0.05, 0.15), t * n));
    }
    for (let t of [a, o]) {
      let r = m(i, e);
      (S(r, n, 1800), x(r, n, 7e3));
      let a = R(i, n, e, [0.09, 0.21]);
      for (let e = 0; e < i; e++) t[e] += r[e] * 0.06 * a[e];
    }
    return z(a, o, n, 2, 0.7);
  },
  amb_park_night: (e, t) => {
    let n = 22050,
      r = 9 * t + 2,
      i = Math.round(r * n),
      a = new Float32Array(i),
      o = new Float32Array(i);
    for (let t = 0; t < 4; t++) {
      let t = e.range(4e3, 5300),
        i = e.range(0.38, 0.75),
        s = 3 + e.int(2),
        c = e.bi() * 0.9,
        l = e.range(0.25, 0.6);
      for (let u = e.next() * i; u < r - 0.3; u += i * e.range(0.95, 1.05))
        for (let e = 0; e < s; e++)
          j(a, o, L(n, 0.03, t, 0.006), c, l, (u + e * 0.034) * n);
    }
    for (let t = 0; t < 3; t++) {
      let t = e.range(380, 620),
        i = e.bi() * 0.8,
        s = e.range(0.25, 0.5);
      for (let c = e.next() * 2; c < r - 0.6; c += e.range(1.4, 3.2)) {
        let r = 3 + e.int(6);
        for (let e = 0; e < r; e++)
          j(
            a,
            o,
            v(1103, n, t, [
              [1, 1, 0.012],
              [2, 0.5, 0.008],
              [3.1, 0.2, 0.006],
            ]),
            i,
            s,
            (c + e * 0.045) * n,
          );
      }
    }
    for (let t of [a, o]) {
      let r = p(i, e);
      C(r, n, 7200, 4);
      let a = h(i, e);
      x(a, n, 180);
      for (let e = 0; e < i; e++)
        t[e] +=
          r[e] * 0.05 * (0.5 + 0.5 * Math.sin((s * 45 * e) / n)) + a[e] * 0.25;
    }
    return z(a, o, n, 2, 0.65);
  },
  amb_river: (e, t) => {
    let n = 11025,
      r = 9 * t + 2,
      i = Math.round(r * n),
      a = new Float32Array(i),
      o = new Float32Array(i);
    for (let t of [a, o]) {
      let r = h(i, e);
      x(r, n, 650);
      let a = R(i, n, e, [0.31, 0.53, 0.87, 1.3]),
        o = m(i, e);
      C(o, n, 1500, 0.6);
      let s = m(i, e);
      x(s, n, 900);
      let c = R(i, n, e, [0.07, 0.17]);
      for (let e = 0; e < i; e++)
        t[e] = r[e] * a[e] ** 2 * 1.2 + o[e] * 0.08 * a[e] + s[e] * 0.2 * c[e];
    }
    for (let t = 0; t < r * 1.4; t++) {
      let t = e.next() * (r - 0.1),
        i = e.range(250, 520),
        s = _(662, n, (e) => i * (1 + (e / 0.06) * 1.8), `sine`);
      (D(s, n, 0.002, 0.015),
        j(a, o, s, e.bi() * 0.8, e.range(0.1, 0.25), t * n));
    }
    return z(a, o, n, 2, 0.7);
  },
  amb_temple: (e, t) => {
    let n = 22050,
      r = 0.3,
      i = Math.max(3, Math.round(4 * t)),
      a = i * 8 * r + 2,
      o = Math.round(a * n),
      c = new Float32Array(o),
      l = [`a`, `o`, `u`, `e`, `ə`, `i`, `o`, `a`],
      u = [0, 0, 0, 0, 0, 0, -2, -3],
      d = [
        { f: 118, g: 1, det: 0 },
        { f: 118 * 1.009, g: 0.8, det: 0.012 },
        { f: 116, g: 0.7, det: -0.01 },
        { f: 236, g: 0.35, det: 0.005 },
      ];
    for (let t = 0; t < i; t++)
      for (let i = 0; i < 8; i++) {
        let a = (t * 8 + i) * r,
          o = l[(t * 3 + i * 5) % l.length],
          f = l[(t * 7 + i * 3 + 1) % l.length],
          p = u[i] + (t % 3 == 2 && i > 5 ? 2 : 0);
        for (let t of d) {
          let i = e.bi() * 0.015,
            l = t.f * 2 ** (p / 12);
          O(
            c,
            fe(
              7056,
              n,
              (e) => l * (1 + 0.01 * Math.sin(s * 4 * e)),
              pe([
                [0, o],
                [r * 0.7, f],
              ]),
              e,
              {
                breath: 0.05,
                scale: t.f > 200 ? 1.15 : 1,
                amp: (e) =>
                  Math.min(1, e / 0.03) * Math.min(1, (0.32 - e) / 0.06),
              },
            ),
            t.g * 0.5,
            (a + i) * n,
          );
        }
        (O(
          c,
          T(I(n, 0.2, e, `lp`, 3e3, 0.7, 2e-4, 0.002), n, [
            [485, 1, 0.06],
            [1330, 0.5, 0.025],
          ]),
          1.6,
          a * n,
        ),
          i === 0 &&
            O(
              c,
              v(55125, n, 1046, [
                [1, 1, 1.4],
                [2.71, 0.4, 0.6],
                [5.1, 0.15, 0.3],
              ]),
              0.12,
              a * n,
            ));
      }
    let [f, p] = ie(c, n, { size: 0.75, wet: 0.4, dry: 0.8, tail: 0 });
    return z(f.slice(0, o), p.slice(0, o), n, 1.5, 0.7);
  },
  amb_market: (e, t) => {
    let n = 22050,
      r = 10 * t + 2,
      i = Math.round(r * n),
      a = new Float32Array(i),
      o = new Float32Array(i),
      s = Object.keys(de),
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
          (j(
            a,
            o,
            fe(
              Math.round(r * n),
              n,
              (e) => t * (p + (m - p) * (e / r)),
              pe([
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
    (x(a, n, 3800), x(o, n, 3800));
    for (let t = 0; t < 7; t++) {
      let t = e.next() * (r - 0.3);
      j(
        a,
        o,
        T(I(n, 0.25, e, `hp`, 1500, 0.7, 2e-4, 0.002), n, [
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
        let i = _(2646, n, 440 * 2 ** ((e - 69) / 12), `square`);
        (E(i, n, [0, 0, 0.005, 1, 0.1, 0.6, 0.12, 0]),
          x(i, n, 2500),
          j(a, o, i, 0.7, 0.04, (t + r * 0.13) * n));
      });
    }
    let [l, u] = ie(a, n, { size: 0.45, wet: 0.18, dry: 1, tail: 0 }),
      [d, f] = ie(o, n, { size: 0.45, wet: 0.18, dry: 1, tail: 0 });
    for (let e = 0; e < i; e++)
      ((a[e] = (l[e] + d[e] * 0.3) * 0.8), (o[e] = (f[e] + u[e] * 0.3) * 0.8));
    return z(a, o, n, 2, 0.4);
  },
  mrt_rumble: (e, t) => {
    let n = 8e3,
      r = 5 * t + 1.5,
      i = Math.round(r * n),
      a = new Float32Array(i),
      o = new Float32Array(i);
    for (let t of [a, o]) {
      let r = h(i, e);
      x(r, n, 320);
      let a = m(i, e);
      C(a, n, 850, 0.7);
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
      let a = m(i, e);
      (x(a, n, 700, 0.6), S(a, n, 90), O(t, a, 0.35));
      let o = _(i, n, 60 * (1 + r * 0.0015), `saw`, e.next());
      x(o, n, 260, 0.9);
      let s = R(i, n, e, [0.03, 0.07]);
      for (let e = 0; e < i; e++) t[e] += o[e] * 0.07 * (0.75 + 0.25 * s[e]);
    }
    let s = _(i, n, 120, `square`, e.next());
    (C(s, n, 2600, 2.5), j(a, o, s, 0.3, 0.012));
    let c = _(i, n, 29.5, `tri`, e.next());
    (O(c, _(i, n, 59, `sine`, e.next()), 0.6),
      E(c, n, [0, 0.2, r * 0.25, 1, r * 0.7, 1, r, 0.2]),
      j(a, o, c, -0.5, 0.12));
    let l = new Float32Array(i),
      u = [
        [60, 64, 67, 71],
        [57, 60, 64, 67],
        [62, 65, 69, 72],
        [55, 59, 62, 65],
      ],
      d = r / u.length;
    (u.forEach((t, r) => {
      for (let i of t) {
        let t = 440 * 2 ** ((i - 69) / 12),
          a = _(Math.round((d + 0.3) * n), n, t, `tri`, e.next());
        (E(a, n, [0, 0, 0.3, 1, d - 0.1, 0.9, d + 0.3, 0]),
          O(l, a, 0.12, Math.round(r * d * n)));
      }
      for (let e = 0; e < 4; e++) {
        let i = t[(e * 3 + r) % 4] + 12,
          a = L(n, 0.6, 440 * 2 ** ((i - 69) / 12), 0.25, 0.25);
        O(l, a, 1, Math.round((r * d + (e * d) / 4 + 0.05) * n));
      }
    }),
      S(l, n, 380, 0.7),
      x(l, n, 2600, 0.7));
    let [f, p] = ie(l, n, { size: 0.5, wet: 0.35, dry: 0.7, tail: 0 });
    return (
      O(a, f.subarray(0, i), 0.5),
      O(o, p.subarray(0, i), 0.45),
      z(a, o, n, 1.5, 0.6)
    );
  },
  amb_hall: (e, t) => {
    let n = 22050,
      r = 9 * t + 2,
      i = Math.round(r * n),
      a = new Float32Array(i),
      o = new Float32Array(i),
      s = new Float32Array(i);
    for (let t of [o, s]) {
      let r = m(i, e);
      (x(r, n, 420, 0.6), O(t, r, 0.45));
      let a = p(i, e);
      (C(a, n, 1800, 0.5), O(t, a, 0.012));
    }
    let c = Object.keys(de);
    for (let t = 0; t < 7; t++) {
      let t = e.chance(0.5) ? e.range(105, 150) : e.range(190, 250),
        i = e.next() * 2;
      for (; i < r - 0.5;) {
        let o = 2 + e.int(6);
        for (let s = 0; s < o && i < r - 0.3; s++) {
          let r = e.range(0.12, 0.24),
            o = e.pick(c),
            s = e.pick(c);
          (O(
            a,
            fe(
              Math.round(r * n),
              n,
              (e) => t * (1 + 0.1 * Math.sin(e * 9)),
              pe([
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
      O(
        a,
        I(n, 0.08, e, `bp`, e.range(900, 1600), 1, 0.001, 0.012),
        e.range(0.05, 0.12),
        t * n,
      );
    }
    x(a, n, 2400);
    let [l, u] = ie(a, n, { size: 0.92, wet: 0.8, dry: 0.15, tail: 0 });
    return (
      O(o, l.subarray(0, i), 0.6),
      O(s, u.subarray(0, i), 0.6),
      z(o, s, n, 2, 0.6)
    );
  },
  vinyl: (e) => {
    let t = 22050,
      n = 165375,
      r = new Float32Array(n),
      i = new Float32Array(n);
    for (let a of [r, i]) {
      let r = m(n, e);
      (S(r, t, 900), x(r, t, 6500), O(a, r, 0.05));
      let i = h(n, e);
      (x(i, t, 60), O(a, i, 0.08));
    }
    for (let n = 0; n < 105; n++) {
      let n = e.next() * 7.49,
        a = p(66, e);
      (S(a, t, 1200),
        D(a, t, 1e-4, 6e-4),
        j(r, i, a, e.bi() * 0.5, e.range(0.2, 1), n * t));
    }
    return z(r, i, t, 0.5, 0.5);
  },
};
