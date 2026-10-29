// tokyo/assets/characters-p5grEi98 23 — math
// Lines 6673-6968 of readable/tokyo/assets/characters-p5grEi98.pretty.js (statement-aligned).
function Gi(e, t, n, r, i, a, o, s, c) {
  let { h: l, b: u, m: d, lod: f } = e,
    p = t.curtain,
    m = l.hh / 0.23,
    h = p.span0,
    g = f === 0 ? 12 : 6,
    _ = p.endY > 0 ? p.endY * u.H : l.crownY + p.endY * l.hh,
    v = (e) => l.crownY - n(e) * l.hh,
    y = f === 0 ? 6 : 3,
    b = p.th * m,
    x = [];
  for (let e = 0; e <= g; e++) x.push(h + (e / g) * (Ti - 2 * h));
  let S = (t, n) => {
      let i = (l.crownY - n) / l.hh,
        a = 0;
      return (
        i <= 1 &&
          (a = Math.max(
            a,
            Math.max(
              _n(l, t, Math.max(0, i), !1),
              i > 0.3 ? _n(l, t, Math.min(0.99, i), !0) + 0.002 * m : 0,
            ) +
              r(t, Math.min(i, 0.9)) * 0.9,
          )),
        n < u.torsoTop &&
          (a = Math.max(
            a,
            Vt(u, t, n, !0) +
              0.01 +
              (e.fit.top ? e.fit.top.off + 0.004 : 0) +
              (e.fit.outer ? e.fit.outer.off + 0.006 : 0),
          )),
        (a = Math.max(a, u.neckR + 0.016 * m)),
        a
      );
    },
    C = (e) => {
      let t = (l.crownY - e) / l.hh;
      return t < 0.85
        ? on(l, Math.max(0, t))
        : e < u.torsoTop
          ? H(u, e)
          : Ei(on(l, 0.85), H(u, u.torsoTop), V(0.85, 1.25, t));
    },
    w = x.map((e) => {
      let t = v(e) + 0.05 * l.hh,
        n = [],
        r = 0,
        i = t;
      for (let a = 0; a <= y; a++) {
        let o = a / y,
          s = Ei(t, _, o ** 0.9),
          c = S(e, s);
        (a > 0 && (c = Math.max(c, r - 0.28 * (i - s))),
          p.wave &&
            (c +=
              p.wave *
              0.006 *
              m *
              Math.sin((t - s) * 38 + e * 2) *
              V(0, 0.2, o)),
          p.curl && a === y && (c -= p.curl * 0.012 * m),
          (r = c),
          (i = s));
        let l =
          a === y
            ? (0.012 + 0.018 * Math.abs(Math.sin(e * 7.3 + 1.1))) *
              m *
              (p.curl ? 0.3 : 1)
            : 0;
        n.push([s - l, c]);
      }
      return n;
    }),
    T = (y + 1) * 2 - 1,
    E = (e) => (e === 0 || e === g ? 0.15 : e === 1 || e === g - 1 ? 0.7 : 1);
  d.grid(
    {
      nu: g,
      nv: T,
      closed: !1,
      point: (e, t, n) => {
        let r = Math.round(e * g),
          i = Math.round(t * T),
          a = x[r],
          o = i <= y,
          s = o ? i : T - i,
          [c, l] = w[r][s],
          u = o ? l : l - b * E(r) * (s === 0 ? 0.3 : 1),
          d = s === y && p.curl ? c + 0.01 * p.curl * m : c,
          f = C(d);
        return n.set(Math.sin(a) * u, d, f - Math.cos(a) * u);
      },
    },
    {
      color: (e, t, n, r, s, c) => {
        let l = Math.round(s * T),
          u = l <= y,
          d = (u ? l : T - l) / y;
        return (
          c.setHex(i).lerp(Ui.setHex(a), V(0.4, 1, d)),
          u
            ? c.multiplyScalar(
                1 - 0.12 * d * (1 - Math.cos(x[Math.round(r * g)])) * 0.5,
              )
            : c.setHex(o).lerp(Ui.setHex(i), 0.3 * d),
          c
        );
      },
      skin: (e, t, n, r, i, a) => {
        let o = (l.crownY - t) / l.hh;
        (B(a, L.head, L.chest, V(0.95, 1.6, o)),
          o > 1.2 && Ct(a, L.spine, 0.1 * V(1.2, 2.5, o)));
      },
      kind: z.hair,
      rough: 0.55,
      bump: (e, t, n, r, i) => {
        Math.round(r * g);
        let a = Math.round(i * T),
          o = a <= y ? a : T - a;
        return o === y ? 0.56 : o === y - 1 ? 0.12 : 0;
      },
      tex: s
        ? {
            rect: s,
            mode: 3,
            uv: (e, t, n, r, i, a) => {
              ((a[0] = r * 9), (a[1] = -t * 2.6));
            },
          }
        : void 0,
    },
  );
}
function Ki(e, t, n, r, i, a, o, s = 1) {
  let { h: c, m: l } = e,
    d = c.hh / 0.23,
    f = (e.desc.seed * 7 + 3) >>> 0,
    p = () => (f = (f * 1664525 + 1013904223) >>> 0) / 4294967296,
    m = Math.round(
      (t === `fringe` ? (s < 0.8 ? 6 : 9) : 11) *
        ((e.trim ?? 0) >= 2 ? 0.6 : 1),
    ),
    h = new D(),
    g = new u();
  for (let e = 0; e < m; e++) {
    let u, f, _, v, y;
    if (t === `fringe`) {
      let t = -s * 0.9 + (e / (m - 1)) * s * 1.8 + (p() - 0.5) * 0.06,
        r = n(t);
      ((u = t - 0.02),
        (f = r - 0.13),
        (_ = t + (p() - 0.5) * 0.08 + 0.03 * Math.sin(t)),
        (v = r + 0.012 + 0.02 * p()),
        (y = 0.1 + 0.05 * p()));
    } else {
      let e = (p() * 2 - 1) * 1.05,
        r = 0.04 + p() * 0.24,
        i = 0.12 + 0.08 * p();
      (t === `front`
        ? ((u = e * 0.7), (f = r), (_ = e), (v = Math.min(n(e) - 0.02, r + i)))
        : t === `back`
          ? ((u = e),
            (f = r + 0.03),
            (_ = e * 1.1),
            (v = Math.max(0, r - i * 0.9)))
          : ((u = -0.5 + (e + 1.05) * 0.4),
            (f = 0.05 + r * 0.5),
            (_ = u + i * 2.2),
            (v = f + i * 0.35)),
        (y = 0.16 + 0.08 * p()));
    }
    let b = [0, 0.5, 1],
      x = (t === `fringe` ? 0.0025 : 0.0055) * d;
    g.setHex(i).lerp(Ui.setHex(a), 0.2 + 0.3 * p());
    let S = g.getHex();
    l.grid(
      {
        nu: 2,
        nv: 2,
        closed: !1,
        point: (e, t, n) => {
          let i = b[Math.round(t * 2)],
            a = Ei(u, _, i),
            o = Ei(f, v, i),
            s = (_ - u) * 0.4,
            l = v - f,
            d = Math.hypot(s, l) || 1,
            p = -l / d / 0.4,
            m = s / d,
            g = (y * 0.5 * (1 - i) ** 0.8 + 0.004) * (e - 0.5) * 2,
            S = a + p * g * 0.4,
            C = Math.max(0, o + m * g * 0.4),
            w = +(e === 0.5);
          return (
            Pi(
              c,
              S,
              C,
              r(S, Math.min(C, 0.99)) * 0.92 + x * (0.4 + w) * (1 - 0.6 * i),
              h,
            ),
            n.copy(h)
          );
        },
        invert: !1,
      },
      {
        color: (e, t, n, r, i, a) =>
          a.setHex(S).multiplyScalar(r === 0.5 ? 1.1 : 0.8 + 0.1 * i),
        skin: L.head,
        kind: z.hair,
        rough: 0.55,
        bump: (e, t, n, r, i) => (r === 0.5 ? 0.05 : 0.5) + 0.4 * i * i,
        tex: o
          ? {
              rect: o,
              mode: 3,
              uv: (t, n, r, i, a, o) => (
                (o[0] = i * 0.6 + e * 0.37),
                (o[1] = a * 0.8)
              ),
            }
          : void 0,
      },
    );
  }
}
function qi(e, t, n, r, i, a) {
  let { h: o, m: s } = e,
    c = o.hh / 0.23,
    l = new D(),
    u = [0, 0.3, 0.6, 0.85, 1],
    d = u.length - 1;
  for (let e of [-1, 1])
    for (let f = 0; f < 1; f++) {
      let p = e * (0.98 + 0.12 * f),
        m = e * (1.12 + 0.1 * f),
        h = t(p) - 0.08,
        g = 0.78 + 0.1 * f,
        _ = 0.12 - 0.015 * f;
      for (let t of [!1, !0])
        s.grid(
          {
            nu: 2,
            nv: d,
            closed: !1,
            point: (r, i, a) => {
              let s = u[Math.round(i * d)],
                f =
                  Ei(p, m, s) +
                  e * 0.04 * Math.sin(s * Math.PI) +
                  (r - 0.5) * _ * (1 - 0.75 * s),
                v = Ei(h, g, s ** 0.9),
                y =
                  s < 0.25
                    ? n(f, Math.min(v, 0.9)) * 0.9 + 0.001
                    : 0.006 * c + 0.004 * c * Math.sin(s * Math.PI);
              return (
                Pi(
                  o,
                  f,
                  Math.min(v, 0.97),
                  y + (r === 0.5 ? 0.0015 * c : 0) + (t ? -8e-4 : 0),
                  l,
                ),
                a.copy(l)
              );
            },
            invert: e > 0 ? !t : t,
          },
          {
            color: (e, n, a, o, s, c) =>
              c
                .setHex(r)
                .lerp(Ui.setHex(i), 0.3 * u[Math.round(s * d)])
                .multiplyScalar(t ? 0.6 : 1),
            skin: L.head,
            kind: z.hair,
            rough: 0.55,
            bump: (e, t, n, r, i) => (r === 0.5 ? 0.1 : 0.45) + 0.45 * i * i,
            tex: a
              ? {
                  rect: a,
                  mode: 3,
                  uv: (e, t, n, r, i, a) => (
                    (a[0] = r * 0.5 + f * 0.3),
                    (a[1] = i)
                  ),
                }
              : void 0,
          },
        );
    }
}
