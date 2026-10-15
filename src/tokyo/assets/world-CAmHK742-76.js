// tokyo/assets/world-CAmHK742 76 — math
// Lines 24106-26067 of readable/tokyo/assets/world-CAmHK742.pretty.js (statement-aligned).
async function Yh(e, t, n, r, i, a = async () => {}) {
  let o = n.bounds,
    s = new Oe(973285),
    c = [],
    l = [];
  e.mainOnly(!0);
  let u = [],
    d = [],
    f = new xe(new U(o.maxX, -10, o.maxZ), new U(o.maxX, 400, o.maxZ)),
    p = 0,
    m = (e, n) => t.height(e, n),
    h = qe,
    g = (e) => {
      let t = 1 / 0,
        n = -1 / 0;
      for (let r = 0; r <= 2; r++)
        for (let i = 0; i <= 2; i++) {
          let a = m(
            e.x0 + ((e.x1 - e.x0) * r) / 2,
            e.z0 + ((e.z1 - e.z0) * i) / 2,
          );
          ((t = Math.min(t, a)), (n = Math.max(n, a)));
        }
      return [t, n];
    },
    _ = (e, t) => e < Hh && t < Uh,
    v = (e) => {
      (f.expandByPoint(new U(e.x0, 0, e.z0)),
        f.expandByPoint(new U(e.x1, 0, e.z1)));
    },
    y = (e, t, n, i, a, o, s = `building`) => {
      r &&
        _((e + n) / 2, (t + i) / 2) &&
        r.addBox(
          Math.min(e, n),
          Math.min(t, i),
          Math.max(e, n),
          Math.max(t, i),
          a,
          o,
          s,
        );
    },
    b = (e, t, n, r, i) => {
      let a = Math.sign(r - n),
        o = n,
        s = m(e === `x` ? n : t, e === `x` ? t : n);
      for (let c = n; a > 0 ? c <= r : c >= r; c += a * 6) {
        let n = m(e === `x` ? c : t, e === `x` ? t : c);
        if (n - h > i || n < h - 1.5 || Math.abs(n - s) > 0.66) break;
        ((s = n), (o = c));
      }
      return o;
    },
    x = (t) => {
      let { axis: n, at: a, halfWidth: o, halfTotal: l } = t,
        u = Math.min(t.from, t.to),
        f = Math.max(t.from, t.to);
      if (f - u < 4) return;
      let p = (e, t) => (n === `x` ? [e, a + t] : [a + t, e]),
        g = (e) => {
          let [t, n] = p(e, 0);
          return Math.max(m(t, n), h - 0.4) + 0.012;
        },
        b = (t, r, i, a, o, s) => {
          let [c, l] = p(t, i),
            [u, d] = p(r, i),
            [f, m] = p(r, a),
            [h, g] = p(t, a);
          n === `x`
            ? e.quad(h, o, g, f, s, m, u, s, d, c, o, l)
            : e.quad(c, o, l, u, s, d, f, s, m, h, o, g);
        },
        x = (t, r, i, a, o, s, c) => {
          let [l, u] = p(t, i),
            [d, f] = p(r, i);
          (n === `x` ? 1 : -1) * c < 0
            ? e.quad(d, o, f, l, a, u, l, a + s, u, d, o + s, f)
            : e.quad(l, a, u, d, o, f, d, o + s, f, l, a + s, u);
        },
        S = t.walk ? 12 : 30;
      for (let i = u; i < f - 0.01; i += S) {
        let a = Math.min(f, i + S),
          c = g(i),
          u = g(a),
          d = Math.abs(u - c) < 0.08,
          m = 0.95 + 0.1 * s.next();
        if (
          (e.setColor(0.17 * m, 0.17 * m, 0.175 * m).setEmit(0, 0, Bh),
          b(i, a, -o, o, c, u),
          e.noEmit(),
          e.detail(!0),
          e.setColor(0.78, 0.78, 0.74),
          b(i, a, -o + 0.3, -o + 0.45, c + 0.004, u + 0.004),
          b(i, a, o - 0.45, o - 0.3, c + 0.004, u + 0.004),
          t.median >= 2.5)
        ) {
          let r = t.median / 2;
          if (
            (e.setColor(0.55, 0.54, 0.5),
            x(i, a, r, c, u, 0.22, 1),
            x(i, a, -r, c, u, 0.22, -1),
            e.detail(!1),
            e.setColor(0.2, 0.3, 0.12),
            b(i, a, -r, r, c + 0.22, u + 0.22),
            t.walk && Math.round(i / S) % 2 == 0)
          ) {
            let [r, o] = p((i + a) / 2, 0);
            (e.detail(!0),
              e.setColor(0.13, 0.24, 0.08),
              e.box(
                r,
                (c + u) / 2 + 0.2,
                o,
                n === `x` ? 3 : t.median * 0.6,
                0.9,
                n === `x` ? t.median * 0.6 : 3,
              ));
          }
          let [o, s] = p(i, -r),
            [l, d] = p(a, r);
          y(
            Math.min(o, l),
            Math.min(s, d),
            Math.max(o, l),
            Math.max(s, d),
            Math.min(c, u),
            Math.max(c, u) + 0.4,
            `curb`,
          );
        } else
          (e.setColor(0.85, 0.66, 0.12),
            b(i, a, -0.25, -0.12, c + 0.004, u + 0.004),
            b(i, a, 0.12, 0.25, c + 0.004, u + 0.004));
        e.detail(!0);
        let h = Math.max(t.median / 2, 0.25);
        for (let n = 1; n < t.lanes; n++) {
          let r = h + n * ((o - h) / t.lanes),
            s = i + 1,
            l = Math.min(a, i + 5),
            d = c + ((u - c) * (s - i)) / (a - i) + 0.004,
            f = c + ((u - c) * (l - i)) / (a - i) + 0.004;
          e.setColor(0.8, 0.8, 0.76);
          for (let e of [-1, 1]) b(s, l, e * r - 0.07, e * r + 0.07, d, f);
        }
        let v = d ? 0.14 : 0.03;
        for (let n of [-1, 1]) {
          let s = n > 0 ? o : -l,
            f = n > 0 ? l : -o;
          (e.detail(!0),
            e.setColor(0.52, 0.5, 0.47),
            x(
              i,
              a,
              n > 0 ? o : -o,
              c - 0.05,
              u - 0.05,
              v + 0.05,
              n > 0 ? -1 : 1,
            ),
            e.detail(!1),
            e
              .setColor(
                0.6 + 0.04 * ((Math.round(i / S) + n + 2) % 2),
                0.57,
                0.53,
              )
              .setEmit(0, 0, zh),
            b(i, a, s, f, c + v, u + v),
            e.noEmit());
          let [m, h] = p(i, s),
            [g, y] = p(a, f);
          r &&
            t.walk &&
            d &&
            _((m + g) / 2, (h + y) / 2) &&
            r.addFloorRect(
              Math.min(m, g),
              Math.min(h, y),
              Math.max(m, g),
              Math.max(h, y),
              Math.max(c, u) + v,
              `sidewalk`,
            );
        }
      }
      e.detail(!0);
      let C = t.major ? 28 : 34,
        w = 0;
      for (let n = u + 10; n < f - 6; n += C, w++)
        for (let a of t.major ? [-1, 1] : [w % 2 ? 1 : -1]) {
          let s = n + (a > 0 ? C / 2 : 0);
          if (s > f - 4) continue;
          let [c, l] = p(s, a * (o + 0.6)),
            [u, d] = p(s, a * (o - 1.8)),
            m = g(s) + 0.1;
          t.walk && _(c, l)
            ? (e.setColor(0.36, 0.38, 0.38),
              e.boxMinMax(c - 0.1, m, l - 0.1, c + 0.1, m + 8.2, l + 0.1),
              e.beam(c, m + 8.1, l, u, m + 8.4, d, 0.12, 0.12),
              e.setColor(0.22, 0.23, 0.24),
              e.boxMinMax(
                u - 0.35,
                m + 8.25,
                d - 0.35,
                u + 0.35,
                m + 8.45,
                d + 0.35,
              ),
              e.setColor(1, 0.9, 0.74).setEmit(5, 0),
              e.boxMinMax(
                u - 0.28,
                m + 8.19,
                d - 0.28,
                u + 0.28,
                m + 8.25,
                d + 0.28,
                11,
              ),
              e.noEmit(),
              r?.addCircle(c, l, 0.14, m, m + 8.3, `pole`),
              i?.add(u, m - 0.06, d, 12, 1, 0.86, 0.66, 0.42))
            : (e.setColor(1, 0.86, 0.66).setEmit(5, 0),
              e.boxMinMax(
                u - 0.3,
                m + 8,
                d - 0.3,
                u + 0.3,
                m + 8.3,
                d + 0.3,
                15,
              ),
              e.noEmit());
        }
      e.detail(!1);
      for (let e = u; e < f - 1; e += 60) {
        let r = Math.min(f, e + 60);
        c.push({
          axis: n,
          at: a,
          from: e,
          to: r,
          halfWidth: o,
          lanesPerDir: r - e > 50 ? t.lanes : 1,
          median: t.median,
          major: t.major,
          y: (g(e) + g(r)) / 2,
          always: !0,
        });
      }
      let [T, E] = p(u, -l),
        [D, O] = p(f, l),
        k = {
          x0: Math.min(T, D),
          z0: Math.min(E, O),
          x1: Math.max(T, D),
          z1: Math.max(E, O),
        };
      (d.push(k), v(k));
    },
    S = (t, n, r, i, a) => {
      e.detail(!0);
      let o = Math.max(m(t === `x` ? r : n, t === `x` ? n : r), h) + 0.012,
        s = Math.ceil((i * 2) / 1.6);
      for (let a = 0; a < s; a++) {
        let c = -i + (a + 0.5) * ((i * 2) / s),
          [l, u] = t === `x` ? [r, n + c] : [n + c, r];
        (e.setColor(
          a % 2 ? 0.92 : 0.85,
          a % 2 ? 0.92 : 0.2,
          a % 2 ? 0.9 : 0.12,
        ),
          t === `x`
            ? e.frustum(l, o, u, 0.62, 1.5, 0.3, 1.4, 0.95)
            : e.frustum(l, o, u, 1.5, 0.62, 1.4, 0.3, 0.95),
          a % 3 == 1 &&
            (e.setColor(1, 0.7, 0.15).setEmit(3.5, 2, a * 7 + 3),
            e.box(l, o + 0.95, u, 0.22, 0.22, 0.22),
            e.noEmit()));
      }
      let [c, l] = t === `x` ? [r - 0.4, n - i] : [n - i, r - 0.4],
        [u, d] = t === `x` ? [r + 0.4, n + i] : [n + i, r + 0.4];
      y(c, l, u, d, o, o + 1.2, `barrier`);
      let [f, p] = t === `x` ? [r - a * 2.2, n] : [n, r - a * 2.2];
      e.setColor(0.25, 0.25, 0.26);
      for (let n of [-1.3, 1.3]) {
        let [r, i] = t === `x` ? [f, p + n] : [f + n, p];
        e.boxMinMax(r - 0.05, o, i - 0.05, r + 0.05, o + 2.1, i + 0.05);
      }
      e.setColor(1, 1, 1).setEmit(0.35, 0);
      let g = 1.55,
        _ = o + 0.9,
        v = o + 2.35;
      if (t === `x`) {
        let t = f - a * 0.06;
        a > 0
          ? e.quad(t, _, p - g, t, _, p + g, t, v, p + g, t, v, p - g, Rm)
          : e.quad(t, _, p + g, t, _, p - g, t, v, p - g, t, v, p + g, Rm);
      } else {
        let t = p - a * 0.06;
        a > 0
          ? e.quad(f + g, _, t, f - g, _, t, f - g, v, t, f + g, v, t, Rm)
          : e.quad(f - g, _, t, f + g, _, t, f + g, v, t, f - g, v, t, Rm);
      }
      (e.setColor(0.3, 0.3, 0.3).setEmit(0, 0),
        t === `x`
          ? e.boxMinMax(
              f + a * 0.02 - 0.03,
              _,
              p - g,
              f + a * 0.02 + 0.03,
              v,
              p + g,
              3,
            )
          : e.boxMinMax(
              f - g,
              _,
              p + a * 0.02 - 0.03,
              f + g,
              v,
              p + a * 0.02 + 0.03,
              48,
            ),
        e.noEmit(),
        y(f - 0.3, p - 0.3, f + 0.3, p + 0.3, o, o + 2.4, `sign`));
      for (let s = -2; s <= 2; s++) {
        let [c, l] =
          t === `x`
            ? [r - a * (5 + Math.abs(s) * 1.5), n + (i / 3) * s]
            : [n + (i / 3) * s, r - a * (5 + Math.abs(s) * 1.5)];
        (e.setColor(0.95, 0.35, 0.08),
          e.frustum(c, o, l, 0.38, 0.38, 0.06, 0.06, 0.7),
          e.setColor(0.95, 0.95, 0.92),
          e.frustum(c, o + 0.36, l, 0.22, 0.22, 0.16, 0.16, 0.12, !1));
      }
      e.detail(!1);
    },
    C = (t, n, i, a, o, s, c) => {
      let l = Math.hypot(i - t, a - n);
      if (l < 0.5) return;
      let u = (i - t) / l,
        d = (a - n) / l,
        f = Math.max(1, Math.round(l / (o === `hoard` ? 6 : 4))),
        p = l / f;
      for (let i = 0; i < f; i++) {
        let a = i * p,
          l = (i + 1) * p,
          f = (a + l) / 2;
        if (c && f > c[0] && f < c[1]) continue;
        let h = t + u * a,
          g = n + d * a,
          v = t + u * l,
          y = n + d * l,
          b = Math.min(m(h, g), m(v, y)) - 0.05,
          x =
            o === `hoard`
              ? Im(Math.floor(Zh(h * 0.13 + g * 0.71) * 4))
              : Lm(o === `corr` ? 0 : 1);
        if (
          (e.setColor(1, 1, 1),
          e.quad(h, b, g, v, b, y, v, b + s, y, h, b + s, g, x),
          e.setColor(
            o === `hoard` ? 0.7 : 0.5,
            o === `hoard` ? 0.72 : 0.52,
            o === `hoard` ? 0.7 : 0.55,
          ),
          e.quad(v, b, y, h, b, g, h, b + s, g, v, b + s, y),
          e.detail(!0),
          e.setColor(0.3, 0.32, 0.33),
          e.boxMinMax(h - 0.07, b, g - 0.07, h + 0.07, b + s + 0.1, g + 0.07),
          o === `hoard` &&
            i % 2 == 0 &&
            (e.setColor(1, 0.15, 0.08).setEmit(4, 2, Math.floor(h + g) & 255),
            e.box((h + v) / 2, b + s, (g + y) / 2, 0.16, 0.16, 0.16),
            e.noEmit()),
          e.detail(!1),
          r)
        ) {
          let e = (h + v) / 2,
            t = (g + y) / 2;
          _(e, t) &&
            r.addOBB(
              e,
              t,
              0.12,
              p / 2 + 0.05,
              Math.atan2(v - h, -(y - g)),
              b,
              b + s,
              `fence`,
            );
        }
      }
    },
    w = (e, t, n, r, i = 8) => {
      ((e.x0 + e.x1) / 2, (e.z0 + e.z1) / 2);
      let a = (e) => [e / 2 - i / 2, e / 2 + i / 2];
      (C(e.x0, e.z1, e.x1, e.z1, t, n, r === `s` ? a(e.x1 - e.x0) : void 0),
        C(e.x1, e.z1, e.x1, e.z0, t, n, r === `e` ? a(e.z1 - e.z0) : void 0),
        C(e.x1, e.z0, e.x0, e.z0, t, n, r === `n` ? a(e.x1 - e.x0) : void 0),
        C(e.x0, e.z0, e.x0, e.z1, t, n, r === `w` ? a(e.z1 - e.z0) : void 0));
    },
    T = (t, n, i, a, o, c) => {
      let [u, d] = g({ x0: t, z0: n, x1: i, z1: a }),
        f = Math.max(d, h) - 0.02;
      (d - u > 0.25 &&
        (e.setColor(0.46, 0.45, 0.42),
        e.boxMinMax(
          t - 0.15,
          u - 0.3,
          n - 0.15,
          i + 0.15,
          f + 0.02,
          a + 0.15,
          55,
        )),
        r &&
          _((t + i) / 2, (n + a) / 2) &&
          r.addFloorRect(t, n, i, a, f + 0.02, `floor`));
      let m = Kh[s.int(0, Kh.length - 1)],
        v = 0.9 + s.next() * 0.15,
        b = f + 3.6 + (c - 1) * 3.1,
        x = 3.2,
        S = { x0: t, z0: n, x1: i, z1: a };
      o === `n`
        ? (S.z0 += x)
        : o === `s`
          ? (S.z1 -= x)
          : o === `e`
            ? (S.x1 -= x)
            : (S.x0 += x);
      let C = s.chance(0.35);
      (e.setColor(0.3, 0.29, 0.28),
        e.boxMinMax(S.x0, f, S.z0, S.x1, f + 3.6, S.z1, 55));
      let w = o === `n` || o === `s` ? i - t : a - n,
        T = f + 0.05,
        E = f + 3,
        D = 0.6,
        O = (t) => {
          o === `n`
            ? e.quad(
                S.x1 - D,
                T,
                S.z0 - 0.02,
                S.x0 + D,
                T,
                S.z0 - 0.02,
                S.x0 + D,
                E,
                S.z0 - 0.02,
                S.x1 - D,
                E,
                S.z0 - 0.02,
                t,
              )
            : o === `s`
              ? e.quad(
                  S.x0 + D,
                  T,
                  S.z1 + 0.02,
                  S.x1 - D,
                  T,
                  S.z1 + 0.02,
                  S.x1 - D,
                  E,
                  S.z1 + 0.02,
                  S.x0 + D,
                  E,
                  S.z1 + 0.02,
                  t,
                )
              : o === `e`
                ? e.quad(
                    S.x1 + 0.02,
                    T,
                    S.z1 - D,
                    S.x1 + 0.02,
                    T,
                    S.z0 + D,
                    S.x1 + 0.02,
                    E,
                    S.z0 + D,
                    S.x1 + 0.02,
                    E,
                    S.z1 - D,
                    t,
                  )
                : e.quad(
                    S.x0 - 0.02,
                    T,
                    S.z0 + D,
                    S.x0 - 0.02,
                    T,
                    S.z1 - D,
                    S.x0 - 0.02,
                    E,
                    S.z1 - D,
                    S.x0 - 0.02,
                    E,
                    S.z0 + D,
                    t,
                  );
        };
      if (C) (e.setColor(0.92, 0.92, 0.9), O(Vm));
      else {
        let t = [
          [1, 0.86, 0.62],
          [0.95, 0.97, 1],
          [1, 0.78, 0.55],
        ][s.int(0, 2)];
        (e.setColor(t[0] * 0.55, t[1] * 0.55, t[2] * 0.55).setEmit(1, 0, Vh),
          O(),
          e.noEmit());
      }
      let k = 1 + s.int(0, 998);
      (e.setColor(m[0] * v, m[1] * v, m[2] * v).setEmit(0, 0, k),
        e.boxMinMax(t, f + 3.6, n, i, b, a, 63),
        e.noEmit(),
        e.detail(!0));
      let A = Math.max(2, Math.round(w / 4.5) + 1);
      e.setColor(m[0] * v * 0.92, m[1] * v * 0.92, m[2] * v * 0.92);
      for (let r = 0; r < A; r++) {
        let s = r / (A - 1),
          c,
          l;
        (o === `n`
          ? ((c = t + 0.3 + s * (i - t - 0.6)), (l = n + 0.3))
          : o === `s`
            ? ((c = t + 0.3 + s * (i - t - 0.6)), (l = a - 0.3))
            : o === `e`
              ? ((c = i - 0.3), (l = n + 0.3 + s * (a - n - 0.6)))
              : ((c = t + 0.3), (l = n + 0.3 + s * (a - n - 0.6))),
          e.boxMinMax(c - 0.3, f, l - 0.3, c + 0.3, f + 3.6, l + 0.3, 51),
          y(c - 0.3, l - 0.3, c + 0.3, l + 0.3, f, f + 3.6, `pillar`));
      }
      let j = Jh[s.int(0, Jh.length - 1)];
      e.setColor(j[0] * 0.8, j[1] * 0.8, j[2] * 0.8).setEmit(0.4, 0);
      let M = s.chance(0.6) ? 1.8 : 0.5,
        N = Fm(s.int(0, 15));
      if (o === `n` || o === `s`) {
        let r = o === `n` ? n - 0.08 : a + 0.08;
        e.boxMinMax(
          t + 0.8,
          f + 3.75,
          Math.min(r, r + (o === `n` ? 0.12 : -0.12)),
          i - 0.8,
          f + 4.75,
          Math.max(r, r + (o === `n` ? 0.12 : -0.12)),
          55,
        );
        let c = (t + i) / 2,
          l = Math.min((i - t) / 2 - 1.1, 2.3),
          u = o === `n` ? r - 0.02 : r + 0.02;
        if (
          (e.setColor(1, 1, 1).setEmit(M, 0),
          o === `n`
            ? e.quad(
                c + l,
                f + 3.8,
                u,
                c - l,
                f + 3.8,
                u,
                c - l,
                f + 4.7,
                u,
                c + l,
                f + 4.7,
                u,
                N,
              )
            : e.quad(
                c - l,
                f + 3.8,
                u,
                c + l,
                f + 3.8,
                u,
                c + l,
                f + 4.7,
                u,
                c - l,
                f + 4.7,
                u,
                N,
              ),
          e.setColor(j[0] * 0.8, j[1] * 0.8, j[2] * 0.8).setEmit(M, 0),
          s.chance(0.55))
        ) {
          let n = s.chance(0.5) ? t + 0.6 : i - 0.6;
          e.boxMinMax(
            n - 0.1,
            f + 4.8,
            r + (o === `n` ? -1.4 : 0.2),
            n + 0.1,
            f + 4.8 + s.range(3, 6),
            r + (o === `n` ? -0.2 : 1.4),
          );
        }
      } else {
        let r = o === `e` ? i + 0.08 : t - 0.08;
        e.boxMinMax(
          Math.min(r, r + (o === `w` ? 0.12 : -0.12)),
          f + 3.75,
          n + 0.8,
          Math.max(r, r + (o === `w` ? 0.12 : -0.12)),
          f + 4.75,
          a - 0.8,
          59,
        );
        let s = (n + a) / 2,
          c = Math.min((a - n) / 2 - 1.1, 2.3),
          l = o === `e` ? r + 0.02 : r - 0.02;
        (e.setColor(1, 1, 1).setEmit(M, 0),
          o === `e`
            ? e.quad(
                l,
                f + 3.8,
                s + c,
                l,
                f + 3.8,
                s - c,
                l,
                f + 4.7,
                s - c,
                l,
                f + 4.7,
                s + c,
                N,
              )
            : e.quad(
                l,
                f + 3.8,
                s - c,
                l,
                f + 3.8,
                s + c,
                l,
                f + 4.7,
                s + c,
                l,
                f + 4.7,
                s - c,
                N,
              ));
      }
      e.noEmit();
      for (let r = 1; r < c; r++) {
        let c = f + 3.6 + (r - 1) * 3.1 + 0.4;
        for (let r = 0; r < Math.max(1, Math.floor(w / 6)); r++) {
          if (!s.chance(0.45)) continue;
          let l = (r + 0.5) / Math.max(1, Math.floor(w / 5)),
            u = s.chance(0.35);
          if (o === `n` || o === `s`) {
            let r = t + l * (i - t),
              s = o === `n` ? n - 0.25 : a + 0.25;
            (e.setColor(0.86, 0.86, 0.84),
              e.box(r + 1.2, c, s, 0.8, 0.55, 0.45),
              u &&
                (e.setColor(0.32, 0.25, 0.2),
                e.box(
                  r - 0.6,
                  c + 0.3,
                  s + (o === `n` ? -0.2 : 0.2),
                  1.6,
                  1.6,
                  0.35,
                )));
          } else {
            let r = n + l * (a - n),
              s = o === `w` ? t - 0.25 : i + 0.25;
            (e.setColor(0.86, 0.86, 0.84),
              e.box(s, c, r + 1.2, 0.45, 0.55, 0.8),
              u &&
                (e.setColor(0.32, 0.25, 0.2),
                e.box(
                  s + (o === `w` ? -0.2 : 0.2),
                  c + 0.3,
                  r - 0.6,
                  0.35,
                  1.6,
                  1.6,
                )));
          }
        }
      }
      if ((e.detail(!1), s.chance(0.55))) {
        let r = [
          [0.25, 0.42, 0.6],
          [0.3, 0.5, 0.35],
          [0.62, 0.3, 0.2],
          [0.7, 0.7, 0.68],
        ][s.int(0, 3)];
        e.setColor(0.62, 0.6, 0.56);
        let o = t + 0.6,
          c = i - 0.6,
          l = n + 0.6,
          u = a - 0.6,
          d = s.range(0.35, 0.7),
          f = o + (c - o) * d;
        (e.boxMinMax(o, b, l, f, b + 2.4, u, 51),
          e.setColor(r[0], r[1], r[2]),
          e.boxMinMax(
            o - 0.3,
            b + 2.4,
            l - 0.3,
            f + 0.3,
            b + 2.6,
            u + 0.3,
            55,
          ));
      }
      (e.setColor(0.82, 0.84, 0.86),
        e.detail(!0),
        e.cyl(
          t + (i - t) * s.range(0.55, 0.85),
          b,
          n + (a - n) * s.range(0.3, 0.7),
          0.8,
          1.6,
          6,
          !1,
        ),
        e.setColor(0.55, 0.53, 0.5),
        e.boxMinMax(t, b, n, i, b + 1, n + 0.2, 23),
        e.boxMinMax(t, b, a - 0.2, i, b + 1, a, 39),
        e.detail(!1),
        y(S.x0, S.z0, S.x1, S.z1, f, b),
        l.push({
          x0: t,
          z0: n,
          x1: i,
          z1: a,
          y0: u - 0.3,
          y1: b + 0.8,
          r: m[0] * v,
          g: m[1] * v,
          b: m[2] * v,
          seed: k,
        }),
        p++);
    },
    E = (t, n, r, i) => {
      let a = Math.max(m(t, n), h);
      e.detail(!0);
      let o = [
          [0.85, 0.85, 0.82],
          [0.2, 0.42, 0.72],
          [0.82, 0.62, 0.12],
          [0.7, 0.18, 0.14],
          [0.3, 0.5, 0.32],
        ],
        s = o[i % o.length],
        c = e.vertexCount;
      (e.setColor(0.15, 0.15, 0.16),
        e.boxMinMax(-1.1, 0.35, -4.2, 1.1, 0.8, 4.2),
        e.setColor(s[0], s[1], s[2]),
        e.boxMinMax(-1.15, 0.8, -4.3, 1.15, 3, -2.6),
        e.setColor(0.08, 0.1, 0.12),
        e.quad(-1, 2, -4.32, 1, 2, -4.32, 1, 2.8, -4.32, -1, 2.8, -4.32),
        i % 3 == 0
          ? (e.setColor(0.9, 0.9, 0.88),
            e.boxMinMax(-1.25, 0.9, -2.4, 1.25, 3.6, 4.3))
          : i % 3 == 1
            ? (e.setColor(s[0] * 0.8, s[1] * 0.8, s[2] * 0.8),
              e.boxMinMax(-1.2, 0.9, -2.4, 1.2, 2.2, 4.2, 59),
              e.setColor(0.45, 0.4, 0.33),
              e.frustum(0, 2.2, 0.9, 2.2, 5.8, 1.2, 4, 0.6))
            : (e.setColor(0.9, 0.88, 0.8),
              e.beam(0, 2.2, -2.2, 0, 2.9, 3.6, 2.2, 2.2),
              e.setColor(s[0], s[1], s[2]),
              e.beam(0, 2.25, -1.2, 0, 2.8, 2.8, 2.3, 0.4)),
        e.setColor(0.07, 0.07, 0.07));
      for (let t of [-3.3, 1.2, 3.1])
        for (let n of [-1.2, 1.2]) e.box(n, 0, t, 0.4, 0.9, 0.9);
      let l = new De().makeRotationY(r).setPosition(t, a, n);
      e.transformSince(c, l);
      let u = Math.cos(r),
        d = Math.sin(r);
      e.detail(!1);
      let f = Math.abs(u) * 1.3 + Math.abs(d) * 4.4,
        p = Math.abs(d) * 1.3 + Math.abs(u) * 4.4;
      y(t - f, n - p, t + f, n + p, a, a + 3.6, `vehicle`);
    },
    D = (t, n, r) => {
      let i = Math.max(m(t, n), h);
      e.detail(!0);
      let a = [
          [0.9, 0.9, 0.9],
          [0.1, 0.1, 0.11],
          [0.55, 0.57, 0.6],
          [0.6, 0.1, 0.08],
          [0.15, 0.25, 0.45],
          [0.95, 0.8, 0.15],
        ],
        o = a[s.int(0, a.length - 1)],
        c = e.vertexCount;
      (e.setColor(o[0], o[1], o[2]),
        e.boxMinMax(-0.88, 0.3, -2.2, 0.88, 0.95, 2.2),
        e.frustum(0, 0.95, 0.15, 1.72, 2.4, 1.5, 1.6, 0.55),
        e.setColor(0.08, 0.1, 0.12),
        e.quad(
          -0.78,
          1,
          -1.04,
          0.78,
          1,
          -1.04,
          0.72,
          1.45,
          -0.62,
          -0.72,
          1.45,
          -0.62,
        ),
        e.setColor(0.06, 0.06, 0.06));
      for (let t of [-1.35, 1.35])
        for (let n of [-0.82, 0.82]) e.box(n, 0, t, 0.25, 0.62, 0.62);
      (e.transformSince(c, new De().makeRotationY(r).setPosition(t, i, n)),
        e.detail(!1));
      let l = Math.abs(Math.cos(r)),
        u = Math.abs(Math.sin(r));
      y(
        t - (l * 0.95 + u * 2.25),
        n - (u * 0.95 + l * 2.25),
        t + (l * 0.95 + u * 2.25),
        n + (u * 0.95 + l * 2.25),
        i,
        i + 1.5,
        `vehicle`,
      );
    },
    O = (t, n, r, i, a) => {
      e.mainOnly(!1);
      let o = e.vertexCount,
        c = s.chance(0.5) ? [0.88, 0.66, 0.1] : [0.85, 0.85, 0.82];
      (e.setColor(0.45, 0.45, 0.43),
        e.boxMinMax(-2.2, -0.5, -2.2, 2.2, 0.6, 2.2),
        e.setColor(c[0], c[1], c[2]));
      for (let [t, n] of [
        [-0.8, -0.8],
        [0.8, -0.8],
        [0.8, 0.8],
        [-0.8, 0.8],
      ])
        e.boxMinMax(t - 0.12, 0, n - 0.12, t + 0.12, r, n + 0.12, 51);
      e.detail(!0);
      for (let t = 3; t < r - 1; t += 3.2)
        (e.beam(-0.8, t, -0.8, 0.8, t + 3, -0.8, 0.09, 0.09),
          e.beam(0.8, t, 0.8, -0.8, t + 3, 0.8, 0.09, 0.09),
          e.beam(-0.8, t, 0.8, -0.8, t + 3, -0.8, 0.09, 0.09),
          e.beam(0.8, t, -0.8, 0.8, t + 3, 0.8, 0.09, 0.09));
      (e.detail(!1),
        e.setColor(0.3, 0.3, 0.3),
        e.boxMinMax(-1.2, r, -1.2, 1.2, r + 1.4, 1.2),
        e.setColor(0.85, 0.86, 0.86),
        e.boxMinMax(1.2, r + 0.2, -1.4, 3, r + 2.2, -0.2),
        e.setColor(c[0], c[1], c[2]));
      let l = r * 0.85;
      (e.beam(0, r + 1.4, -0.5, l, r + 1.4, -0.5, 0.18, 0.18),
        e.beam(0, r + 1.4, 0.5, l, r + 1.4, 0.5, 0.18, 0.18),
        e.beam(0, r + 2.6, 0, l, r + 1.6, 0, 0.16, 0.16),
        e.detail(!0));
      for (let t = 2; t < l; t += 4)
        e.beam(
          t,
          r + 1.4,
          0,
          t + 2,
          r + 1.4 + 1.2 * (1 - t / l),
          0,
          0.07,
          0.07,
        );
      (e.detail(!1),
        e.beam(0, r + 1.4, 0, -l * 0.3, r + 1.4, 0, 0.9, 0.3),
        e.setColor(0.55, 0.55, 0.52),
        e.boxMinMax(-l * 0.3, r - 0.6, -0.9, -l * 0.3 + 3.2, r + 1.4, 0.9),
        e.setColor(c[0], c[1], c[2]),
        e.boxMinMax(-0.3, r + 1.4, -0.3, 0.3, r + 7, 0.3),
        e.beam(0, r + 7, 0, l * 0.7, r + 1.5, 0, 0.06, 0.06),
        e.beam(0, r + 7, 0, -l * 0.3, r + 1.5, 0, 0.06, 0.06));
      let u = l * s.range(0.35, 0.8);
      (e.setColor(0.15, 0.15, 0.15),
        e.boxMinMax(u - 0.03, r * 0.45, -0.03, u + 0.03, r + 1.4, 0.03),
        e.setColor(0.9, 0.7, 0.1),
        e.boxMinMax(u - 0.35, r * 0.45 - 0.8, -0.2, u + 0.35, r * 0.45, 0.2),
        e.setColor(1, 0.1, 0.06).setEmit(9, 2, s.int(1, 99)),
        e.box(0, r + 7, 0, 0.4, 0.4, 0.4),
        e.box(l, r + 1.2, 0, 0.35, 0.35, 0.35),
        e.box(-l * 0.3, r + 1.4, 0, 0.35, 0.35, 0.35),
        e.noEmit(),
        e.transformSince(o, new De().makeRotationY(i).setPosition(t, a, n)),
        e.mainOnly(!0),
        y(t - 1.2, n - 1.2, t + 1.2, n + 1.2, a, a + r, `crane`));
    },
    k = (t, n, r) => {
      let i = Math.max(g(t)[1], h),
        a = 3.2,
        o = Math.max(2, Math.round((t.x1 - t.x0) / 7)),
        s = Math.max(2, Math.round((t.z1 - t.z0) / 7));
      for (let c = 0; c < n; c++) {
        let n = i + c * a;
        (e.setColor(0.62, 0.61, 0.58),
          e.boxMinMax(
            t.x0 - 0.3,
            n + a - 0.3,
            t.z0 - 0.3,
            t.x1 + 0.3,
            n + a,
            t.z1 + 0.3,
            63,
          ),
          e.setColor(0.56, 0.55, 0.52));
        for (let r = 0; r <= o; r++)
          for (let i = 0; i <= s; i++) {
            if (r > 0 && r < o && i > 0 && i < s && (r + i) % 2) continue;
            let c = t.x0 + ((t.x1 - t.x0) * r) / o,
              l = t.z0 + ((t.z1 - t.z0) * i) / s;
            e.boxMinMax(
              c - 0.35,
              n,
              l - 0.35,
              c + 0.35,
              n + a - 0.3,
              l + 0.35,
              51,
            );
          }
        c < r &&
          (e.setColor(0.7, 0.69, 0.66).setEmit(0, 0, 0),
          e.boxMinMax(
            t.x0 + 0.2,
            n,
            t.z0 + 0.2,
            t.x1 - 0.2,
            n + a - 0.3,
            t.z1 - 0.2,
            51,
          ));
      }
      e.detail(!0);
      let c = i + n * a;
      e.setColor(0.35, 0.22, 0.14);
      for (let n = 0; n <= o; n++)
        for (let r = 0; r <= s; r += s) {
          let i = t.x0 + ((t.x1 - t.x0) * n) / o,
            a = t.z0 + ((t.z1 - t.z0) * r) / s;
          e.boxMinMax(i - 0.2, c, a - 0.2, i + 0.2, c + 1.6, a + 0.2, 51);
        }
      (e.detail(!1), e.setColor(0.16, 0.42, 0.24));
      let u = Math.min(n, r + 2) * a;
      return (
        e.quad(
          t.x0 - 1.2,
          i,
          t.z1 + 1.2,
          t.x1 + 1.2,
          i,
          t.z1 + 1.2,
          t.x1 + 1.2,
          i + u,
          t.z1 + 1.2,
          t.x0 - 1.2,
          i + u,
          t.z1 + 1.2,
        ),
        e.quad(
          t.x1 + 1.2,
          i,
          t.z1 + 1.2,
          t.x1 + 1.2,
          i,
          t.z0 - 1.2,
          t.x1 + 1.2,
          i + u,
          t.z0 - 1.2,
          t.x1 + 1.2,
          i + u,
          t.z1 + 1.2,
        ),
        e.quad(
          t.x1 + 1.2,
          i,
          t.z0 - 1.2,
          t.x0 - 1.2,
          i,
          t.z0 - 1.2,
          t.x0 - 1.2,
          i + u,
          t.z0 - 1.2,
          t.x1 + 1.2,
          i + u,
          t.z0 - 1.2,
        ),
        e.quad(
          t.x0 - 1.2,
          i,
          t.z0 - 1.2,
          t.x0 - 1.2,
          i,
          t.z1 + 1.2,
          t.x0 - 1.2,
          i + u,
          t.z1 + 1.2,
          t.x0 - 1.2,
          i + u,
          t.z0 - 1.2,
        ),
        y(t.x0 - 1.2, t.z0 - 1.2, t.x1 + 1.2, t.z1 + 1.2, i, c, `building`),
        l.push({
          x0: t.x0 - 1.2,
          z0: t.z0 - 1.2,
          x1: t.x1 + 1.2,
          z1: t.z1 + 1.2,
          y0: i - 0.3,
          y1: c,
          r: 0.5,
          g: 0.54,
          b: 0.5,
          seed: 0,
        }),
        p++,
        c
      );
    },
    A = (t, n) => {
      let [r, i] = g(t);
      i - r > 1.2 ||
        (e.setColor(n[0], n[1], n[2]),
        e.flat(t.x0, t.z0, t.x1, t.z1, i + 0.02));
    },
    j = (e, t, n) => {
      let r = t === `n` || t === `s`,
        i = r ? e.x0 : e.z0,
        a = r ? e.x1 : e.z1,
        o = i + 0.5;
      for (; o < a - 6;) {
        let r = Math.min(a - 0.5 - o, s.range(8, 13));
        if (r < 6) break;
        let i = s.int(4, 6);
        (t === `n`
          ? T(o, e.z0 + 0.5, o + r, e.z0 + 0.5 + n, `n`, i)
          : t === `s`
            ? T(o, e.z1 - 0.5 - n, o + r, e.z1 - 0.5, `s`, i)
            : t === `w`
              ? T(e.x0 + 0.5, o, e.x0 + 0.5 + n, o + r, `w`, i)
              : T(e.x1 - 0.5 - n, o, e.x1 - 0.5, o + r, `e`, i),
          (o += r + (s.chance(0.18) ? 3 : 0.1)));
      }
    },
    M = (t, n, r, i, a) => {
      e.mainOnly(!0);
      let o = { x0: t - r / 2, z0: n - i / 2, x1: t + r / 2, z1: n + i / 2 },
        [c, u] = g(o),
        d = Kh[s.int(0, Kh.length - 1)],
        f = 0.85 + s.next() * 0.2;
      (e.setColor(0.46, 0.45, 0.42),
        u - c > 0.2 &&
          e.boxMinMax(
            o.x0 - 0.1,
            c - 0.3,
            o.z0 - 0.1,
            o.x1 + 0.1,
            u,
            o.z1 + 0.1,
            55,
          ));
      let m = u + a * 3.1,
        h = 1 + s.int(0, 998);
      if (
        (e.setColor(d[0] * f, d[1] * f, d[2] * f).setEmit(0, 0, h),
        e.boxMinMax(o.x0, u, o.z0, o.x1, m, o.z1, 55),
        e.noEmit(),
        s.chance(0.6))
      ) {
        let t = [
          [0.25, 0.42, 0.6],
          [0.3, 0.5, 0.35],
          [0.62, 0.3, 0.2],
          [0.7, 0.7, 0.68],
        ][s.int(0, 3)];
        (e.setColor(0.6, 0.58, 0.55),
          e.boxMinMax(
            o.x0 + 0.5,
            m,
            o.z0 + 0.5,
            o.x0 + r * 0.6,
            m + 2.3,
            o.z1 - 0.5,
            51,
          ),
          e.setColor(t[0], t[1], t[2]),
          e.boxMinMax(
            o.x0 + 0.2,
            m + 2.3,
            o.z0 + 0.2,
            o.x0 + r * 0.6 + 0.3,
            m + 2.5,
            o.z1 - 0.2,
            55,
          ));
      } else
        (e.setColor(0.82, 0.84, 0.86), e.cyl(t + r * 0.2, m, n, 0.7, 1.4, 6));
      (y(o.x0, o.z0, o.x1, o.z1, c - 0.3, m, `building`),
        l.push({
          x0: o.x0,
          z0: o.z0,
          x1: o.x1,
          z1: o.z1,
          y0: c - 0.3,
          y1: m,
          r: d[0] * f,
          g: d[1] * f,
          b: d[2] * f,
          seed: h,
        }),
        p++);
    },
    N = (t, n, r, i) => {
      let a = t.x1 - t.x0,
        o = t.z1 - t.z0;
      if (a < 14 || o < 14) return;
      let [c, l] = g(t);
      if (l - c > 16 || c > h + 36) return;
      (v(t), d.push(t));
      let u = l - c > 2.5,
        f = Math.min(14, Math.min(a, o) / 2 - 2),
        p = s.next(),
        m = !u && !r && p < 0.22,
        _ = { n: !1, s: !1, e: !1, w: !1 };
      if (!m) {
        for (let e of [`n`, `s`, `e`, `w`]) _[e] = n[e] && e !== i;
        (!_.n && !_.s && !_.e && !_.w && (_.s = !0),
          _.n && j({ x0: t.x0, z0: t.z0, x1: t.x1, z1: t.z0 + f + 1 }, `n`, f),
          _.s && j({ x0: t.x0, z0: t.z1 - f - 1, x1: t.x1, z1: t.z1 }, `s`, f));
        let e = t.z0 + (_.n ? f + 1.5 : 0),
          r = t.z1 - (_.s ? f + 1.5 : 0);
        (_.w &&
          r - e > 8 &&
          j({ x0: t.x0, z0: e, x1: t.x0 + f + 1, z1: r }, `w`, f),
          _.e &&
            r - e > 8 &&
            j({ x0: t.x1 - f - 1, z0: e, x1: t.x1, z1: r }, `e`, f));
      }
      let b = {
          x0: t.x0 + (_.w ? f + 2 : 0.5),
          z0: t.z0 + (_.n ? f + 2 : 0.5),
          x1: t.x1 - (_.e ? f + 2 : 0.5),
          z1: t.z1 - (_.s ? f + 2 : 0.5),
        },
        x = b.x1 - b.x0,
        S = b.z1 - b.z0;
      if (x < 12 || S < 12) return;
      let [C, T] = g(b),
        N =
          i ??
          (n.s && !_.s
            ? `s`
            : n.n && !_.n
              ? `n`
              : n.w && !_.w
                ? `w`
                : n.e && !_.e
                  ? `e`
                  : `s`);
      if (T - C > 2.5 || u) {
        for (let e = b.x0 + 6; e < b.x1 - 5; e += 13)
          for (let t = b.z0 + 6; t < b.z1 - 5; t += 13)
            s.chance(0.75) &&
              M(
                e + s.range(-1.5, 1.5),
                t + s.range(-1.5, 1.5),
                s.range(8, 10.5),
                s.range(8, 10.5),
                s.int(2, 4),
              );
        return;
      }
      let ee = s.next(),
        te = r
          ? ee < 0.45
            ? `site`
            : ee < 0.75
              ? `yard`
              : `parking`
          : ee < 0.6
            ? `parking`
            : `site`,
        F = b,
        I = T;
      if (te === `parking`) {
        (A(F, [0.2, 0.2, 0.21]), w(F, `corr2`, 1.9, N, 9));
        for (let t = F.x0 + 4; t < F.x1 - 4; t += 2.8)
          for (let n of [F.z0 + 5, F.z1 - 5])
            (F.z1 - F.z0 < 16 && n > F.z0 + 5) ||
              (e.setColor(0.8, 0.8, 0.75),
              e.flat(t - 0.06, n - 2.6, t + 0.06, n + 2.6, I + 0.03),
              s.chance(0.62) &&
                t + 2.8 < F.x1 - 4 &&
                D(t + 1.4, n, n < (F.z0 + F.z1) / 2 ? 0 : Math.PI));
        let t =
            N === `w`
              ? F.x0 + 1.5
              : N === `e`
                ? F.x1 - 1.5
                : (F.x0 + F.x1) / 2 + 6,
          n =
            N === `s`
              ? F.z1 - 1.5
              : N === `n`
                ? F.z0 + 1.5
                : (F.z0 + F.z1) / 2 + 6;
        (e.setColor(0.3, 0.3, 0.3),
          e.boxMinMax(t - 0.07, I, n - 0.07, t + 0.07, I + 3.6, n + 0.07),
          e.setColor(1, 1, 1).setEmit(0.8, 0));
        let r = zm;
        (e.quad(
          t - 0.65,
          I + 2.2,
          n + 0.06,
          t + 0.65,
          I + 2.2,
          n + 0.06,
          t + 0.65,
          I + 3.5,
          n + 0.06,
          t - 0.65,
          I + 3.5,
          n + 0.06,
          r,
        ),
          e.quad(
            t + 0.65,
            I + 2.2,
            n - 0.06,
            t - 0.65,
            I + 2.2,
            n - 0.06,
            t - 0.65,
            I + 3.5,
            n - 0.06,
            t + 0.65,
            I + 3.5,
            n - 0.06,
            r,
          ),
          e.quad(
            t - 0.06,
            I + 2.2,
            n - 0.65,
            t - 0.06,
            I + 2.2,
            n + 0.65,
            t - 0.06,
            I + 3.5,
            n + 0.65,
            t - 0.06,
            I + 3.5,
            n - 0.65,
            r,
          ),
          e.quad(
            t + 0.06,
            I + 2.2,
            n + 0.65,
            t + 0.06,
            I + 2.2,
            n - 0.65,
            t + 0.06,
            I + 3.5,
            n - 0.65,
            t + 0.06,
            I + 3.5,
            n + 0.65,
            r,
          ),
          e.noEmit(),
          y(t - 0.2, n - 0.2, t + 0.2, n + 0.2, I, I + 3.6, `pole`),
          P((F.x0 + F.x1) / 2, (F.z0 + F.z1) / 2, I, 7));
        return;
      }
      if (te === `yard`) {
        if (
          (A(F, [0.24, 0.23, 0.22]),
          w(F, `corr`, 2.6, N, 10),
          N === `n` || N === `s`)
        ) {
          let t = (F.x0 + F.x1) / 2,
            n = N === `n` ? F.z0 : F.z1;
          (e.setColor(0.3, 0.3, 0.32),
            e.boxMinMax(t - 5.2, I, n - 0.12, t - 4.9, I + 5.2, n + 0.12),
            e.boxMinMax(t + 4.9, I, n - 0.12, t + 5.2, I + 5.2, n + 0.12),
            e.setColor(1, 1, 1).setEmit(0.6, 0));
          let r = N === `n` ? n - 0.14 : n + 0.14;
          (N === `n`
            ? e.quad(
                t + 4.9,
                I + 4,
                r,
                t - 4.9,
                I + 4,
                r,
                t - 4.9,
                I + 5.4,
                r,
                t + 4.9,
                I + 5.4,
                r,
                Bm,
              )
            : e.quad(
                t - 4.9,
                I + 4,
                r,
                t + 4.9,
                I + 4,
                r,
                t + 4.9,
                I + 5.4,
                r,
                t - 4.9,
                I + 5.4,
                r,
                Bm,
              ),
            e.noEmit());
        } else {
          let t = (F.z0 + F.z1) / 2,
            n = N === `w` ? F.x0 : F.x1;
          (e.setColor(0.3, 0.3, 0.32),
            e.boxMinMax(n - 0.12, I, t - 5.2, n + 0.12, I + 5.2, t - 4.9),
            e.boxMinMax(n - 0.12, I, t + 4.9, n + 0.12, I + 5.2, t + 5.2),
            e.setColor(1, 1, 1).setEmit(0.6, 0));
          let r = N === `w` ? n - 0.14 : n + 0.14;
          (N === `w`
            ? e.quad(
                r,
                I + 4,
                t - 4.9,
                r,
                I + 4,
                t + 4.9,
                r,
                I + 5.4,
                t + 4.9,
                r,
                I + 5.4,
                t - 4.9,
                Bm,
              )
            : e.quad(
                r,
                I + 4,
                t + 4.9,
                r,
                I + 4,
                t - 4.9,
                r,
                I + 5.4,
                t - 4.9,
                r,
                I + 5.4,
                t + 4.9,
                Bm,
              ),
            e.noEmit());
        }
        let t = s.int(0, 5),
          n = x >= S,
          r = n ? F.x0 : F.z0,
          i = n ? F.x1 : F.z1;
        for (let e = r + 5; e < i - 5; e += 4.2)
          s.chance(0.3) ||
            (n
              ? (E(
                  e,
                  F.z0 + 7 + s.range(0, 1.5),
                  s.chance(0.5) ? 0 : Math.PI,
                  t++,
                ),
                S > 34 &&
                  s.chance(0.6) &&
                  E(
                    e,
                    F.z1 - 7 - s.range(0, 1.5),
                    s.chance(0.5) ? 0 : Math.PI,
                    t++,
                  ))
              : (E(
                  F.x0 + 7 + s.range(0, 1.5),
                  e,
                  Math.PI / 2 + (s.chance(0.5) ? 0 : Math.PI),
                  t++,
                ),
                x > 34 &&
                  s.chance(0.6) &&
                  E(
                    F.x1 - 7 - s.range(0, 1.5),
                    e,
                    Math.PI / 2 + (s.chance(0.5) ? 0 : Math.PI),
                    t++,
                  )));
        if (x > 30 && S > 30) {
          let t = (F.x0 + F.x1) / 2,
            n = (F.z0 + F.z1) / 2;
          for (let r = 0; r < 4; r++) {
            let i = [
                [0.7, 0.2, 0.15],
                [0.15, 0.35, 0.6],
                [0.25, 0.5, 0.35],
                [0.8, 0.6, 0.15],
              ][r % 4],
              a = I + (r === 3 ? 2.6 : 0),
              o = n - 2.6 + (r % 3) * 2.6;
            (e.setColor(i[0], i[1], i[2]),
              e.boxMinMax(t - 6, a, o - 1.2, t + 6, a + 2.6, o + 1.2),
              y(t - 6, o - 1.2, t + 6, o + 1.2, a, a + 2.6, `container`));
          }
        }
        (P(F.x0 + 3, F.z0 + 3, I, 9), P(F.x1 - 3, F.z1 - 3, I, 9));
        return;
      }
      (A(F, [0.36, 0.31, 0.25]), w(F, `hoard`, 3, N, 9));
      let L = {
        x0: F.x0 + Math.min(9, x * 0.2),
        z0: F.z0 + Math.min(10, S * 0.2),
        x1: F.x1 - Math.min(9, x * 0.2),
        z1: F.z1 - Math.min(10, S * 0.2),
      };
      if (L.x1 - L.x0 > 10 && L.z1 - L.z0 > 10) {
        let e = s.int(5, 14),
          t = k(L, e, Math.max(1, e - s.int(2, 5))),
          n =
            N === `e` || N === `w`
              ? { x: (L.x0 + L.x1) / 2, z: L.z1 + 4.5 }
              : { x: L.x1 + 4.5, z: (L.z0 + L.z1) / 2 };
        n.x < F.x1 - 2 &&
          n.z < F.z1 - 2 &&
          O(n.x, n.z, t + s.range(14, 24), s.range(0, Math.PI * 2), I);
      }
      let ne = F.x0 + 2,
        re = F.z0 + 2;
      (e.setColor(0.2, 0.4, 0.7),
        e.boxMinMax(ne, I, re, ne + 6, I + 2.6, re + 2.4),
        e.setColor(0.9, 0.9, 0.88),
        e.boxMinMax(ne, I + 2.6, re, ne + 6, I + 5.2, re + 2.4),
        y(ne, re, ne + 6, re + 2.4, I, I + 5.2, `container`),
        e.setColor(0.62, 0.55, 0.42),
        e.frustum(F.x1 - 5, I, F.z1 - 5, 6, 5, 1.2, 1, 2.2),
        P(F.x0 + 2, F.z1 - 2, I, 8));
    },
    P = (t, n, r, a) => {
      (e.detail(!0),
        e.setColor(0.3, 0.3, 0.3),
        e.boxMinMax(t - 0.08, r, n - 0.08, t + 0.08, r + a, n + 0.08),
        e.setColor(1, 0.92, 0.78).setEmit(6, 0),
        e.boxMinMax(t - 0.35, r + a - 0.3, n - 0.35, t + 0.35, r + a, n + 0.35),
        e.noEmit(),
        e.detail(!1),
        y(t - 0.12, n - 0.12, t + 0.12, n + 0.12, r, r + a, `pole`),
        i?.add(t, r + 0.08, n, 11, 1, 0.9, 0.75, 0.26));
    },
    ee = n.roads
      .filter((e) => e.axis === `x` && e.to >= o.maxX - 1 && !e.pedestrian)
      .sort((e, t) => e.at - t.at),
    te = 1960,
    F = [];
  for (let e of ee) {
    let t = b(`x`, e.at, o.maxX, te, 30);
    t <= o.maxX + 20 ||
      F.push({
        axis: `x`,
        at: e.at,
        from: o.maxX,
        to: t,
        halfWidth: e.halfWidth,
        halfTotal: e.halfTotal,
        lanes: e.lanesPerDir,
        median: e.median,
        major: !0,
        walk: !0,
      });
  }
  for (let e of F) {
    let t = Math.min(e.to, Wh - 1);
    (x({ ...e, to: t }),
      t < e.to - 2 &&
        (S(`x`, e.at, t - 0.8, e.halfTotal - 0.2, 1),
        x({ ...e, from: Hh + 12, walk: !1 })));
  }
  let I = [1004, 1190, 1370, 1550, 1730, 1910],
    L = o.minZ + 6;
  for (let e of I) {
    let t = e < Hh,
      n = t ? 3.6 : e === 1550 ? 12 : 8,
      r = n + (t ? 2.2 : 4.5),
      i = F.filter((t) => t.to >= e + r).map((e) => [
        e.at - e.halfTotal,
        e.at + e.halfTotal,
      ]),
      a = L,
      o = b(`z`, e, L, 200, t ? 25 : 40);
    for (let [s, c] of [...i, [1e9, 1e9]]) {
      let i = a,
        l = Math.min(s, o);
      if (
        (l - i > 8 &&
          x({
            axis: `z`,
            at: e,
            from: i,
            to: l,
            halfWidth: n,
            halfTotal: r,
            lanes: t ? 1 : n > 10 ? 3 : 2,
            median: n > 10 ? 4 : 0,
            major: !t,
            walk: t,
          }),
        (a = c),
        a >= o)
      )
        break;
    }
    if (t)
      for (let t of F)
        if (t.to >= e)
          u.push({
            x: e,
            z: t.at,
            halfX: n,
            halfZ: t.halfWidth,
            signal: !1,
            always: !0,
          });
        else
          for (let t of F)
            t.to >= e &&
              u.push({
                x: e,
                z: t.at,
                halfX: n,
                halfZ: t.halfWidth,
                signal: !0,
                always: !0,
                y: Math.max(m(e, t.at), h),
              });
  }
  {
    let t = o.minZ - 0.2 - 2.2,
      n = o.minZ - 0.2;
    (e.setColor(0.4, 0.395, 0.375),
      e.boxMinMax(o.maxX - 0.5, -0.6, t, Wh, 4.5, n, 21),
      e.setColor(0.52, 0.51, 0.49),
      e.boxMinMax(o.maxX - 0.5, 4.5, t - 0.25, Wh, 4.8, n + 0.15, 52),
      r?.addBox(o.maxX - 0.5, t, Wh, n, -1, 4.8, `wall`));
  }
  {
    let e = [],
      t = o.minZ + 0.5;
    for (let n of F)
      (e.push([t, n.at - n.halfTotal - 0.5]), (t = n.at + n.halfTotal + 0.5));
    e.push([t, t + 120]);
    for (let t = 0; t < e.length; t++) {
      let [n, r] = e[t];
      if (r - n < 16) continue;
      let i = { n: t > 0, s: t < e.length - 1 };
      (N(
        { x0: o.maxX + 6, z0: n, x1: 997.7, z1: r },
        { ...i, e: !0, w: !1 },
        !1,
      ),
        N(
          { x0: 1010.3, z0: n, x1: Wh - 0.5, z1: r },
          { ...i, e: !1, w: !0 },
          !0,
          `w`,
        ));
    }
  }
  {
    let e = o.minZ,
      t = [
        ...F.filter((e) => e.to > Wh).map((e) => [
          e.at - e.halfTotal,
          e.at + e.halfTotal,
        ]),
        [1e9, 1e9],
      ];
    for (let [n, r] of t) {
      let t = Math.min(n, 700),
        i = e;
      for (let n = e; n < t; n += 6)
        Math.abs(m(Wh, n) - h) < 1.2 ||
          (n - i > 6 && C(Wh, i, Wh, n, `hoard`, 3), (i = n + 6));
      if ((t - i > 6 && C(Wh, i, Wh, t, `hoard`, 3), (e = r), e > 700)) break;
    }
  }
  await a();
  let ne = n.roads
      .filter((e) => e.axis === `z` && e.to >= o.maxZ - 1 && !e.pedestrian)
      .sort((e, t) => e.at - t.at),
    re = 1480,
    R = [];
  for (let e of ne) {
    let t = b(`z`, e.at, o.maxZ, re, 40);
    t <= o.maxZ + 16 ||
      R.push({
        axis: `z`,
        at: e.at,
        from: o.maxZ,
        to: t,
        halfWidth: e.halfWidth,
        halfTotal: e.halfTotal,
        lanes: e.lanesPerDir,
        median: e.median,
        major: !0,
        walk: !0,
      });
  }
  for (let e of R) {
    let t = Math.min(e.to, Gh - 1);
    (x({ ...e, to: t }),
      t < e.to - 2
        ? (S(`z`, e.at, t - 0.8, e.halfTotal - 0.2, 1),
          x({ ...e, from: Uh + 12, walk: !1 }))
        : e.to < Gh - 12 && S(`z`, e.at, e.to - 1, e.halfTotal - 0.2, 1));
  }
  let z = [664, 840, 1e3, 1160, 1320];
  for (let e of z) {
    let t = e < Uh,
      n = t ? 3.6 : e === 1e3 ? 12 : 8,
      r = n + (t ? 2.2 : 4.5),
      i = o.minX + 4,
      a = o.maxX + 60,
      s = R.filter((t) => t.to >= e + r).map((e) => [
        e.at - e.halfTotal,
        e.at + e.halfTotal,
      ]),
      c = i;
    for (let [i, o] of [...s, [1e9, 1e9]]) {
      let s = c,
        l = Math.min(i, a),
        u = m(c, e);
      for (let i = c; i <= l; i += 6) {
        let a = m(i, e),
          o = a - h < (t ? 30 : 45) && a > h - 1.5 && Math.abs(a - u) < 0.66;
        if (((u = a), !o || i + 6 > l)) {
          let a = o ? l : i - 1;
          (a - s > 14 &&
            x({
              axis: `x`,
              at: e,
              from: s,
              to: a,
              halfWidth: n,
              halfTotal: r,
              lanes: t ? 1 : n > 10 ? 3 : 2,
              median: n > 10 ? 4 : 0,
              major: !t,
              walk: t,
            }),
            (s = i + 6));
        }
      }
      if (((c = o), c >= a)) break;
    }
    for (let r of R)
      r.to >= e &&
        m(r.at, e) - h < 40 &&
        u.push({
          x: r.at,
          z: e,
          halfX: r.halfWidth,
          halfZ: n,
          signal: !t,
          always: !0,
          y: Math.max(m(r.at, e), h),
        });
  }
  {
    let e = [],
      t = o.minX + 0.5;
    for (let n of R)
      (e.push([t, n.at - n.halfTotal - 0.5]), (t = n.at + n.halfTotal + 0.5));
    e.push([t, o.maxX]);
    for (let t = 0; t < e.length; t++) {
      let [n, r] = e[t];
      if (r - n < 16) continue;
      let i = { w: t > 0, e: t < e.length - 1 };
      (N(
        { x0: n, z0: o.maxZ + 6, x1: r, z1: 657.7 },
        { ...i, n: !1, s: !0 },
        !1,
      ),
        N(
          { x0: n, z0: 670.3, x1: r, z1: Gh - 0.5 },
          { ...i, n: !0, s: !1 },
          !0,
          `n`,
        ));
    }
  }
  {
    let e = o.minX,
      t = [
        ...R.filter((e) => e.to > Gh).map((e) => [
          e.at - e.halfTotal,
          e.at + e.halfTotal,
        ]),
        [1e9, 1e9],
      ];
    for (let [n, r] of t) {
      let t = Math.min(n, o.maxX + 200),
        i = e;
      for (let n = e; n < t; n += 6)
        Math.abs(m(n, Gh) - h) < 1.2 ||
          (n - i > 6 && C(n, Gh, i, Gh, `hoard`, 3), (i = n + 6));
      if ((t - i > 6 && C(t, Gh, i, Gh, `hoard`, 3), (e = r), e > o.maxX + 200))
        break;
    }
  }
  await a();
  let ie = (t, n, r, i, a, o, c, l, u) => {
      e.mainOnly(!1);
      let d = c ? qh[4 + s.int(0, 1)] : qh[s.int(0, qh.length - 1)],
        f = 0.9 + s.next() * 0.2;
      if (
        (e
          .setColor(d[0] * f, d[1] * f, d[2] * f)
          .setEmit(0, 0, 1 + s.int(0, 998)),
        e.box(t, o, n, r, a, i, 0, 55),
        e.noEmit(),
        l)
      ) {
        if (
          (e.setColor(0.36, 0.36, 0.35),
          a < 45 && s.chance(0.6)
            ? (e.detail(!0),
              e.box(
                t + s.range(-r / 4, r / 4),
                o + a,
                n + s.range(-i / 4, i / 4),
                2.4,
                1.8,
                2.4,
              ),
              e.setColor(0.55, 0.62, 0.72),
              e.cyl(
                t + s.range(-r / 4, r / 4),
                o + a,
                n + s.range(-i / 4, i / 4),
                0.9,
                1.6,
                6,
              ),
              e.detail(!1))
            : a >= 45 && e.box(t, o + a, n, r * 0.55, 3.5, i * 0.55, 0, 55),
          a > 70 &&
            (e.setColor(1, 0.12, 0.08).setEmit(6, 2, s.int(1, 99)),
            e.box(t - r * 0.25, o + a + 3.5, n, 0.5, 0.5, 0.5),
            e.box(t + r * 0.25, o + a + 3.5, n, 0.5, 0.5, 0.5),
            e.noEmit()),
          a > 60 && s.chance(0.25))
        ) {
          let c = Jh[s.int(0, Jh.length - 1)];
          (e.setColor(c[0], c[1], c[2]).setEmit(2, 0),
            e.box(t, o + a - 2.2, n, r + 0.3, 1.1, i + 0.3, 0, 51),
            e.noEmit());
        }
        if (a < 60 && s.chance(0.16)) {
          let c = Math.min(r * 0.85, s.range(9, 15)),
            l = s.range(3, 5),
            d = t + u[0] * (r / 2 - 1),
            f = n + u[1] * (i / 2 - 1),
            p = o + a,
            m = Jh[s.int(0, Jh.length - 1)];
          (e.setColor(0.2, 0.2, 0.22),
            e.boxMinMax(d - 0.15, p, f - 0.15, d + 0.15, p + 2.2, f + 0.15),
            e.setColor(m[0], m[1], m[2]).setEmit(s.range(1.6, 3), 0),
            u[0] === 0
              ? e.boxMinMax(
                  d - c / 2,
                  p + 2.2,
                  f - 0.25,
                  d + c / 2,
                  p + 2.2 + l,
                  f + 0.25,
                )
              : e.boxMinMax(
                  d - 0.25,
                  p + 2.2,
                  f - c / 2,
                  d + 0.25,
                  p + 2.2 + l,
                  f + c / 2,
                ),
            e.noEmit());
        }
        p++;
      }
    },
    ae = (e, t, n) => {
      let [r, i] = g(e);
      if (i - r > 34 || r > 70) return;
      let a = i - r > 8;
      (v(e), d.push(e));
      let o = e.x1 - e.x0,
        c = e.z1 - e.z0,
        l = Math.max(1, Math.round(o / 34)),
        u = Math.max(1, Math.round(c / 30)),
        f = o / l,
        p = c / u,
        m = t === `nangang` ? e.x0 - Hh : e.z0 - Uh;
      for (let r = 0; r < l; r++)
        for (let i = 0; i < u; i++) {
          if (s.chance(0.08)) continue;
          let o = e.x0 + f * (r + 0.5) + s.range(-2, 2),
            c = e.z0 + p * (i + 0.5) + s.range(-2, 2),
            l = f * s.range(0.62, 0.9),
            u = p * s.range(0.62, 0.9),
            [d, h] = g({
              x0: o - l / 2,
              z0: c - u / 2,
              x1: o + l / 2,
              z1: c + u / 2,
            });
          if (h - d > 9) continue;
          let _ = d;
          if (a) {
            ie(
              o,
              c,
              l * 0.85,
              u * 0.85,
              s.range(9, 20),
              _ - 0.5,
              !1,
              m < 700,
              n,
            );
            continue;
          }
          let v;
          ((v =
            t === `nangang`
              ? Math.hypot(o - 1640, c + 520) < 330
                ? s.chance(0.55)
                  ? s.range(70, 160)
                  : s.range(30, 60)
                : s.chance(0.18)
                  ? s.range(50, 95)
                  : s.range(18, 45)
              : s.chance(0.1)
                ? s.range(50, 90)
                : s.range(14, 42)),
            m < 60 && (v = Math.min(v, s.range(20, 48))),
            ie(o, c, l, u, v, _ - 0.5, v > 80 && s.chance(0.6), m < 700, n));
        }
      s.chance(t === `nangang` ? 0.22 : 0.1) &&
        O(
          e.x0 + o * s.range(0.2, 0.8),
          e.z0 + c * s.range(0.2, 0.8),
          s.range(50, 90),
          s.range(0, 6.28),
          i,
        );
    };
  {
    let e = [o.minZ - 20, ...F.map((e) => e.at), 160],
      t = [Hh + 16, ...I.filter((e) => e > Hh), te];
    for (let n = 0; n + 1 < e.length; n++)
      for (let r = 0; r + 1 < t.length; r++) {
        let i = e[n] + (n === 0 ? 0 : 16),
          a = e[n + 1] - 16,
          s = t[r] + (r === 0 ? 0 : 12),
          c = t[r + 1] - 12;
        a - i < 20 ||
          c - s < 20 ||
          i < -1e3 ||
          ae(
            { x0: s, z0: Math.max(i, o.minZ + 4), x1: c, z1: a },
            `nangang`,
            [-1, 0],
          );
      }
  }
  {
    let e = [o.minX - 30, ...R.map((e) => e.at), o.maxX + 120],
      n = [Uh + 16, ...z.filter((e) => e > Uh), re];
    for (let r = 0; r + 1 < e.length; r++)
      for (let i = 0; i + 1 < n.length; i++) {
        let a = e[r] + (r === 0 ? 0 : 16),
          o = e[r + 1] - 16,
          s = n[i] + (i === 0 ? 0 : 12),
          c = n[i + 1] - 12;
        c - s < 20 ||
          o - a < 20 ||
          a < t.westBank(s) + 60 ||
          ae({ x0: Math.max(a, -950), z0: s, x1: o, z1: c }, `south`, [0, -1]);
      }
  }
  await a();
  {
    let e = [
      { x0: o.minX - 40, z0: Uh + 14, x1: o.maxX + 260, z1: 1320 },
      { x0: Hh + 14, z0: -120, x1: 1760, z1: 700 },
    ];
    for (let n of e)
      for (let e = n.z0; e < n.z1; e += 24)
        for (let r = n.x0; r < n.x1; r += 24) {
          let n = Zh(r * 0.37 + e * 1.13),
            i = Zh(r * 1.71 - e * 0.53),
            a = r + (n - 0.5) * 24 * 0.7,
            o = e + (i - 0.5) * 24 * 0.7;
          if (t.kind(a, o) !== `land`) continue;
          let s = m(a, o) - h;
          if (
            s < 3 ||
            s > 75 ||
            Math.hypot(m(a + 4, o) - m(a - 4, o), m(a, o + 4) - m(a, o - 4)) /
              8 >
              0.5
          )
            continue;
          let c = Zh(Math.floor(a / 90) * 3.1 + Math.floor(o / 90) * 7.7),
            l = (0.75 - s / 110) * (c < 0.55 ? 1 : 0.25);
          if (Zh(a * 0.91 + o * 0.29) > l) continue;
          let u = !1;
          for (let e of d)
            if (a > e.x0 - 8 && a < e.x1 + 8 && o > e.z0 - 8 && o < e.z1 + 8) {
              u = !0;
              break;
            }
          if (u) continue;
          let f = 7 + n * 4,
            p = 7 + i * 4;
          M(a, o, f, p, 2 + Math.floor(Zh(a + o) * 3));
          let g = {
            x0: a - f / 2 - 2,
            z0: o - p / 2 - 2,
            x1: a + f / 2 + 2,
            z1: o + p / 2 + 2,
          };
          (d.push(g), v(g));
        }
  }
  let oe = Xh(d);
  return (
    e.mainOnly(!1),
    {
      lightRoads: c,
      lightNodes: u,
      buildings: p,
      blocked: oe,
      bounds: f,
      lodBoxes: l,
    }
  );
}
