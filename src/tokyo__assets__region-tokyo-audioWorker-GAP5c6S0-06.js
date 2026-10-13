// tokyo__assets__region-tokyo-audioWorker-GAP5c6S0 06 — range
// Lines 1705-2046 of readable/tokyo__assets__region-tokyo-audioWorker-GAP5c6S0.pretty.js (statement-aligned).
const He = {
    tk_mushi: (e) => {
      let n = N,
        r = 286650,
        i = new Float32Array(r),
        a = new Float32Array(r),
        o = (e, r, i) => {
          let a = d(
            Math.round(r * n),
            n,
            (t) => e * (1 - (t / r) * 0.025),
            `sine`,
          );
          for (let e = 0; e < a.length; e++)
            a[e] *= (0.5 + 0.5 * Math.sin((t * i * e) / n)) ** 2;
          return b(a, n, [0, 0, 0.02, 1, r - 0.04, 0.85, r, 0]);
        };
      for (let t = 0; t < 3; t++) {
        let t = e.range(4100, 4650),
          r = e.bi() * 0.85,
          s = e.range(0.35, 0.6),
          c = e.range(38, 50);
        for (let l = e.next() * 1.5; l < 12.2; l += e.range(0.9, 2.6)) {
          let u = 2 + e.int(5);
          for (let d = 0; d < u && l < 12.4; d++) {
            let u = e.range(0.22, 0.4);
            (T(i, a, o(t * e.range(0.995, 1.005), u, c), r, s, l * n),
              (l += u + e.range(0.12, 0.3)));
          }
        }
      }
      for (let t = 0; t < 2; t++) {
        let t = e.range(4350, 4900),
          r = e.bi() * 0.9,
          o = e.range(0.25, 0.42);
        for (let s = e.next() * 2; s < 11.8; s += e.range(1.7, 3.4)) {
          let c = s,
            l = 2 + e.int(2);
          for (let e = 0; e < l; e++, c += 0.14)
            for (let e = 0; e < 4; e++)
              T(
                i,
                a,
                R(n, 0.014, t, t * 0.99),
                r,
                o * 0.8,
                (c + e * 0.022) * n,
              );
          for (let e = 0; e < 10; e++)
            T(i, a, R(n, 0.014, t * 0.98, t * 0.97), r, o, (c + e * 0.02) * n);
        }
      }
      {
        let t = e.range(3800, 4e3),
          r = e.bi() * 0.7;
        for (let o = e.next() * 2; o < 12; o += e.range(2.2, 3.8)) {
          T(i, a, R(n, 0.06, t, t * 1.02, 0.004), r, 0.22, o * n);
          for (let e = 0; e < 3; e++)
            T(
              i,
              a,
              R(n, 0.045, t * (1 + 0.03 * e), t * (1.01 + 0.03 * e), 0.004),
              r,
              0.2,
              (o + 0.17 + e * 0.06) * n,
            );
        }
      }
      for (let t = e.next(); t < 12.5; t += e.range(0.9, 2.2)) {
        let r = e.bi() * 0.9;
        for (let o = 0; o < 2 + e.int(3); o++)
          T(i, a, R(n, 0.02, 6400, 6300, 0.001), r, 0.08, (t + o * 0.3) * n);
      }
      for (let o of [i, a]) {
        let i = s(r, e);
        _(i, n, 4400, 3);
        let a = Re(r, n, e, [0.05, 0.13]);
        for (let e = 0; e < r; e++)
          o[e] += i[e] * 0.07 * (0.6 + 0.4 * Math.sin((t * 42 * e) / n)) * a[e];
      }
      return (
        ze(i, a, n, e, 0.015, 0.22),
        C({ sr: n, ch: [D(i, n, 1.5), D(a, n, 1.5)] }, 0.7)
      );
    },
    tk_park_day: (e) => {
      let n = N,
        r = 286650,
        i = new Float32Array(r),
        a = new Float32Array(r);
      for (let r = 0; r < 3; r++) {
        let r = e.range(0.3, 11.5),
          o = e.bi() * 0.9,
          s = e.range(0.3, 0.5),
          c = 1 + e.int(2);
        for (let l = 0; l < c; l++) {
          let c = R(n, 0.2, e.range(2500, 2800), e.range(3500, 3800), 0.01),
            u = d(
              5733,
              n,
              (e) => 3600 - (e / 0.26) * 1300 + 90 * Math.sin(t * 32 * e),
              `sine`,
            );
          (b(u, n, [0, 0, 0.01, 1, 0.18, 0.7, 0.26, 0]),
            w(c, 1.3),
            w(u, 1.3),
            T(i, a, c, o, s, (r + l * 0.65) * n),
            T(i, a, u, o, s * 0.9, (r + l * 0.65 + 0.21) * n));
        }
      }
      for (let t = 0; t < 9; t++) {
        let t = e.next() * 12.2,
          r = e.bi() * 0.9,
          o = e.range(0.08, 0.2);
        for (let s = 0; s < 2 + e.int(3); s++)
          T(
            i,
            a,
            R(n, 0.05, e.range(4300, 5e3), e.range(3200, 3700)),
            r,
            o,
            (t + s * e.range(0.1, 0.16)) * n,
          );
      }
      for (let t = 0; t < 2; t++) {
        let t = e.range(0.5, 10.5),
          r = e.bi() * 0.8,
          o = e.range(5e3, 5500);
        for (let e = 0; e < 3; e++) {
          let s = t + e * 0.55;
          (T(i, a, R(n, 0.05, o, o * 0.95), r, 0.18, s * n),
            T(i, a, R(n, 0.05, o, o * 0.95), r, 0.18, (s + 0.09) * n),
            T(
              i,
              a,
              R(n, 0.2, o * 0.8, o * 0.78, 0.01),
              r,
              0.2,
              (s + 0.19) * n,
            ));
        }
      }
      return (
        ze(i, a, n, e, 0.07, 0.25),
        C({ sr: n, ch: [D(i, n, 1.5), D(a, n, 1.5)] }, 0.7)
      );
    },
    tk_shrine: (e) => {
      let n = 16e3,
        r = 224e3,
        i = new Float32Array(r),
        a = c(r, e);
      _(a, n, 700, 0.5);
      let u = new Float32Array(r),
        d = [e.next() * t, e.next() * t];
      for (let e = 0; e < r; e++) {
        let r = e / n;
        u[e] =
          0.55 +
          0.3 * Math.sin((t * r) / 7 + d[0]) +
          0.15 * Math.sin((t * r) / 3.1 + d[1]);
      }
      for (let e = 0; e < r; e++) i[e] = a[e] * u[e] * 0.6;
      let f = s(r, e);
      g(f, n, 3200);
      for (let e = 0; e < r; e++)
        f[e] *=
          Math.max(0, u[e] - 0.5) * (0.5 + 0.5 * Math.sin(e * 7e-4 + d[1]));
      S(i, f, 0.12);
      let p = l(r, e);
      return (h(p, n, 200), S(i, p, 0.5), o(C(D(i, n, 2), 0.7), n));
    },
    tk_packer: (e) => {
      let t = 8e3,
        n = 84e3,
        r = new Float32Array(n),
        i = d(n, t, 28, `pulse`, 0, 0.12);
      (h(i, t, 380, 0.9), S(r, i, 0.5));
      let a = (e) => {
          let t = (e % 5.25) / 5.25;
          return t < 0.7 ? 260 + 140 * Math.sin((t / 0.7) * Math.PI) : 0;
        },
        s = d(n, t, (e) => Math.max(60, a(e)), `saw`);
      h(s, t, 1400);
      for (let e = 0; e < n; e++) s[e] *= a(e / t) > 0 ? 0.25 : 0;
      S(r, s, 0.35);
      for (let n of [3.7, 8.95])
        (S(r, L(t, 0.4, 90, 45, 0.04, 0.15), 0.7, Math.round(n * t)),
          S(
            r,
            I(t, 0.35, e, `bp`, 600, 2, 0.05, 0.12),
            0.3,
            Math.round((n - 0.3) * t),
          ));
      let c = l(n, e);
      return (
        h(c, t, 150),
        S(r, c, 0.4),
        g(r, t, 22, 0.7),
        o(C(D(r, t, 0.5), 0.75), t)
      );
    },
    tk_crossing: (e) => {
      let t = N,
        n = /* @__PURE__ */ new Float32Array(39690);
      for (let r = 0; r < 4; r++)
        Ne(
          n,
          Ve(t, r % 2 ? 742 : 730, e),
          Math.round(r * 0.45 * t),
          r % 2 ? 0.92 : 1,
        );
      return o(C(n, 0.8), t);
    },
  },
  Ue = {
    tk_koto: (e, t, r, i) => {
      let a = ie(Math.round(i * r), r, n(t), e, {
        decay: 0.9975,
        bright: 0.88,
        pick: 0.11,
      });
      return (
        S(a, I(r, 0.006, e, `hp`, 4200, 0.7, 1e-4, 0.0012), 0.35),
        v(a, r, 380, 1.1, 3),
        v(a, r, 1600, 1.4, 2.5),
        x(a, r, 0.001, t > 72 ? 0.9 : 1.4),
        o(C(a, 0.85), r)
      );
    },
    tk_shaku: (e, r, i, a) => {
      let c = Math.round(a * i),
        l = n(r),
        u = (e) =>
          l *
          (1 +
            (e > 0.35
              ? 0.0075 * Math.min(1, (e - 0.35) / 0.4) * Math.sin(t * 5.2 * e)
              : 0)),
        f = d(c, i, u, `sine`);
      (S(
        f,
        d(c, i, (e) => 2 * u(e), `sine`),
        0.22,
      ),
        S(
          f,
          d(c, i, (e) => 3 * u(e), `sine`),
          0.07,
        ));
      let p = s(c, e);
      (_(p, i, l * 1.02, 6), S(f, p, 1.6));
      let m = s(c, e);
      return (
        _(m, i, 2200, 0.8),
        b(m, i, [0, 0, 0.02, 1, 0.15, 0.25, a, 0.15]),
        S(f, m, 0.25),
        b(f, i, [0, 0, 0.07, 1, 0.3, 0.85, a - 0.1, 0.8, a, 0]),
        o(C(f, 0.8), i)
      );
    },
    tk_brass: (e, r, i, a) => {
      let s = Math.round(a * i),
        c = n(r),
        l = new Float32Array(s);
      for (let n = 0; n < 4; n++) {
        let r = 1 + (n - 1.5) * 0.0035 + e.bi() * 0.001;
        S(
          l,
          d(
            s,
            i,
            (e) => c * r * (1 + 0.003 * Math.sin(t * 5.4 * e + n)),
            `saw`,
            e.next(),
          ),
          0.25,
        );
      }
      return (
        h(
          l,
          i,
          (e) => 500 + 4200 * Math.min(1, e / 0.035) * Math.exp(-e / 0.5) + 900,
          1.1,
        ),
        w(l, 1.5),
        b(l, i, [0, 0, 0.025, 1, 0.12, 0.75, a - 0.1, 0.65, a, 0]),
        o(C(l, 0.85), i)
      );
    },
    tk_slap: (e, t, r, i) => {
      let a = Math.round(i * r),
        s = n(t),
        c = ie(a, r, s, e, { decay: 0.994, bright: 0.95, pick: 0.06 });
      return (
        S(c, d(a, r, s, `sine`), 0.25),
        S(c, I(r, 0.012, e, `bp`, 2600, 1, 2e-4, 0.003), 0.4),
        w(c, 2),
        h(c, r, 5e3),
        x(c, r, 0.001, 0.45),
        o(C(c, 0.9), r)
      );
    },
    tk_glock: (e, t, r, i) => {
      let a = De(r, n(t), i, 0.7);
      return (
        S(a, I(r, 0.004, e, `hp`, 5e3, 0.7, 1e-4, 8e-4), 0.15),
        o(C(a, 0.8), r)
      );
    },
  },
  We = {
    tk_taiko: (e) => {
      let t = M,
        n = L(t, 1.3, 92, 52, 0.06, 0.45);
      return (
        S(n, I(t, 0.05, e, `bp`, 900, 1, 5e-4, 0.012), 0.35),
        S(n, L(t, 0.4, 180, 120, 0.02, 0.08), 0.3),
        w(n, 1.6),
        o(C(n, 0.95), t)
      );
    },
    tk_tamb: (e) => {
      let t = M,
        n = a(0.4, t);
      for (let r = 0; r < 8; r++)
        S(
          n,
          P(t, e.range(5200, 9800), 0.3, [
            [1, 1, 0.07],
            [1.42, 0.5, 0.04],
          ]),
          0.3,
          Math.round(e.range(0, 0.02) * t),
        );
      return (
        S(n, I(t, 0.05, e, `bp`, 700, 1, 5e-4, 0.012), 0.4),
        o(C(n, 0.85), t)
      );
    },
  };
