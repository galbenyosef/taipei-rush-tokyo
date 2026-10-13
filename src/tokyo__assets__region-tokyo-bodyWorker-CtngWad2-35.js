// tokyo__assets__region-tokyo-bodyWorker-CtngWad2 35 — math
// Lines 12347-12683 of readable/tokyo__assets__region-tokyo-bodyWorker-CtngWad2.pretty.js (statement-aligned).
function ja(e, t) {
  let { h: n, m: r, lod: i } = e,
    a = n.hh / 0.23,
    o = t.kind,
    s =
      t.color ??
      (o === `policeCap` ? 1778742 : o === `visor` ? 15755914 : 2237998),
    c = t.color2 ?? (o === `policeCap` ? 921362 : X(s, 0.85)),
    l = wa(e),
    u = i === 0 ? 18 : 8;
  if (o !== `visor`) {
    let e = (e) =>
        o === `bucket`
          ? 0.34
          : o === `policeCap`
            ? 0.3
            : ga(0.42, 0.28, (Math.cos(e) + 1) / 2),
      t = i === 0 ? [0, 0.18, 0.4, 0.62, 0.82, 1] : [0, 0.5, 1],
      c = t.length - 1,
      d = o === `policeCap`;
    if (
      (r.grid(
        {
          nu: u,
          nv: c,
          closed: !1,
          point: (r, i, o) => {
            let s = -Math.PI + r * ha,
              u = t[Math.round(i * c)],
              f = e(s) * u;
            return (
              G(n, s, f, l + (d ? 0.02 * a * (1 - u) + 0.01 * a : 0), o, !1),
              d &&
                ((o.y = Math.min(o.y, n.crownY + l + 0.028 * a)),
                (o.z -= 0.012 * a * (1 - u))),
              f < 0.02 && (o.y += l),
              o
            );
          },
        },
        {
          color: (e, n, r, a, o, l) => {
            if ((l.setHex(s), !d && i === 0)) {
              let e = Math.abs(Math.sin(a * Math.PI * 6));
              l.multiplyScalar(0.92 + 0.08 * Math.min(1, e * 4));
            }
            return (d && t[Math.round(o * c)] > 0.75 && l.setHex(921362), l);
          },
          skin: z.head,
          kind: V.cloth,
          rough: 0.8,
        },
      ),
      d)
    ) {
      let e = new kt(0.012 * a, 8),
        t = G(n, 0, 0.18, l + 0.024 * a, new M(), !1);
      r.geo(e, $(t.x, t.y, t.z - 0.004, 0.1, Math.PI, 0), {
        color: 14201418,
        skin: z.head,
        kind: V.metal,
        rough: 0.3,
      });
    }
  } else
    r.grid(
      {
        nu: u,
        nv: 1,
        closed: !0,
        point: (e, t, r) =>
          G(
            n,
            -Math.PI + e * ha,
            0.3 + (t - 0.5) * 0.09,
            l * 0.6 + 0.002,
            r,
            !1,
          ),
      },
      { color: c, skin: z.head, kind: V.cloth, rough: 0.8 },
    );
  let d = o === `bucket` ? `round` : o === `policeCap` ? `peak` : `bill`,
    f = o === `bucket` ? 0.34 : o === `visor` ? 0.3 : 0.28,
    p =
      (o === `visor`
        ? 0.095
        : o === `policeCap`
          ? 0.05
          : o === `bucket`
            ? 0.045
            : 0.075) * a,
    m = d === `round` ? Math.PI : o === `visor` ? 1.25 : 1,
    h = i === 0 ? 12 : 6,
    g = (e, t, r, i) => {
      let a = d === `round` ? -Math.PI + e * ha : -m + e * m * 2,
        s = d === `round` ? 1 : Math.cos((a / m) * Math.PI * 0.5) ** 0.6;
      G(n, a, f, l + 0.002, r, !1);
      let c = Math.sin(a),
        u = -Math.cos(a),
        h = p * s * t,
        g =
          d === `round`
            ? 0.35
            : o === `policeCap`
              ? 0.55
              : o === `visor`
                ? 0.12
                : 0.22;
      return (
        (r.x += c * h),
        (r.z += u * h),
        (r.y -= h * g + (i ? 0 : 0.003)),
        r
      );
    };
  for (let e of [!0, !1])
    r.grid(
      {
        nu: d === `round` ? u : h,
        nv: 1,
        closed: !1,
        point: (t, n, r) => g(t, n, r, e),
        invert: !e,
      },
      {
        color: e
          ? o === `policeCap`
            ? c
            : o === `visor`
              ? s
              : X(s, 0.95)
          : o === `visor`
            ? X(s, 0.7)
            : X(c, 0.6),
        skin: z.head,
        kind: o === `policeCap` || o === `visor` ? V.gloss : V.cloth,
        rough: o === `policeCap` ? 0.2 : 0.75,
      },
    );
}
const Ma = new M(),
  Na = new M();
function Pa(e, t) {
  let { h: n, m: r, lod: i } = e,
    a = n.hh / 0.23,
    o = t.color ?? 15921904,
    s = t.color2 ?? 2237480,
    c = 0.028 * a,
    l = i === 0 ? 16 : 12,
    u =
      i === 0
        ? [0, 0.15, 0.36, 0.58, 0.78, 0.92, 1]
        : [0, 0.22, 0.48, 0.74, 0.92, 1],
    d = u.length - 1,
    f = (e) => {
      let t = Math.abs(Math.atan2(Math.sin(e), Math.cos(e)));
      return t < 0.9
        ? 0.27
        : t < 1.9
          ? ga(0.27, 0.62, (t - 0.9) / 1)
          : ga(0.62, 0.66, (t - 1.9) / 1.24);
    },
    p = Ma.set(0, n.crownY - 0.45 * n.hh, Kn(n, 0.45)),
    m = (e, t, r, i) => {
      (G(n, e, t, 0, i, !1), Na.subVectors(i, p));
      let a = Na.length() || 1;
      return i.addScaledVector(Na, r / a);
    };
  (r.grid(
    {
      nu: l,
      nv: d,
      closed: !1,
      point: (e, t, n) => {
        let r = -Math.PI + e * ha,
          i = u[Math.round(t * d)];
        return m(r, f(r) * i, c * (1 - 0.15 * i * i), n);
      },
    },
    {
      color: (e, n, r, a, c, l) => {
        let f = u[Math.round(c * d)];
        return (
          l.setHex(f > 0.93 ? s : o),
          i === 0 &&
            Math.abs(a - 0.5) < 0.03 &&
            f < 0.9 &&
            l.setHex(X(t.color2 ?? 14169132, 1)),
          l
        );
      },
      skin: z.head,
      kind: V.gloss,
      rough: 0.22,
    },
  ),
    r.grid(
      {
        nu: l,
        nv: 1,
        closed: !1,
        point: (e, t, r) => {
          let i = -Math.PI + e * ha;
          return t < 0.5
            ? m(i, f(i), c * 0.85, r)
            : G(n, i, f(i), 0.004, r, !1);
        },
        invert: !0,
      },
      { color: 1710620, skin: z.head, kind: V.cloth, rough: 0.9 },
    ));
  let h = 0.8;
  for (let e of [!0, !1])
    r.grid(
      {
        nu: 8,
        nv: 1,
        closed: !1,
        point: (t, r, i) => {
          let o = -0.8 + t * h * 2;
          G(n, o, 0.27, c + 0.002, i, !1);
          let s = Math.cos((o / h) * Math.PI * 0.5);
          return (
            (i.x += Math.sin(o) * 0.035 * a * s * r),
            (i.z += -Math.cos(o) * 0.035 * a * s * r),
            (i.y += 0.004 * a * r - (e ? 0 : 0.003)),
            i
          );
        },
        invert: !e,
      },
      { color: e ? o : s, skin: z.head, kind: V.gloss, rough: 0.3 },
    );
  if (i === 0)
    for (let t of [-1, 1])
      ka(
        e,
        G(n, t * 1.45, 0.55, c * 0.7, new M(), !1),
        G(n, t * 0.9, 1, 0.004 * a, new M()),
        0.006,
        1579034,
        z.head,
      );
}
function Fa(e, t) {
  let { h: n, m: r } = e,
    i = wa(e);
  r.grid(
    {
      nu: e.lod === 0 ? 18 : 8,
      nv: 1,
      closed: !0,
      point: (e, t, r) =>
        G(
          n,
          -Math.PI + e * ha,
          0.2 + (t - 0.5) * 0.06 + 0.08 * Math.max(0, -Math.cos(e * ha)),
          i + 0.002,
          r,
          !1,
        ),
    },
    { color: t.color ?? 14826074, skin: z.head, kind: V.satin, rough: 0.5 },
  );
}
function Ia(e) {
  let { h: t, m: n } = e,
    r = t.hh / 0.23;
  for (let e of [-1, 1]) {
    let i = G(t, e * 1.57, 0.585, 0.005 * r, new M(), !1),
      a = new Pt(0.0055 * r, 5, 3);
    n.geo(a, $(i.x, i.y, i.z), {
      color: 16185078,
      skin: z.head,
      kind: V.gloss,
      rough: 0.2,
    });
    let o = new At(0.0022 * r, 0.0022 * r, 0.02 * r, 5, 1, !0);
    n.geo(o, $(i.x, i.y - 0.012 * r, i.z + 0.002), {
      color: 16185078,
      skin: z.head,
      kind: V.gloss,
      rough: 0.2,
    });
  }
}
function La(e, t, n) {
  let r = e.fit,
    i = r.outer ? r.outer.off : r.top ? r.top.off : 0,
    a = r.outer ? r.outer.loose : r.top ? r.top.loose : 0;
  return Ni(e.b, t, n, i, a);
}
function Ra(e, t, n) {
  let { b: r, m: i } = e,
    a = r.H;
  for (let o of [-1, 1]) {
    let s = o * 0.3,
      c = [
        { t: o * (Math.PI - 0.45), y: 0.79 * a },
        { t: o * (Math.PI / 2 + 0.25), y: 0.835 * a },
        { t: o * 0.9, y: 0.83 * a },
        { t: o * 0.55, y: 0.78 * a },
        { t: o * 0.45, y: 0.7 * a },
        { t: o * 0.55, y: n },
      ],
      l = c.length - 1;
    i.grid(
      {
        nu: 1,
        nv: l,
        closed: !1,
        point: (t, n, i) => {
          let o = c[Math.round(n * l)],
            s = o.t + (t - 0.5) * 0.34 * (o.y > 0.82 * a ? 0.45 : 1),
            u = o.y,
            d =
              La(e, s, Math.min(u, r.torsoTop - 0.01)) +
              0.006 +
              (u > 0.82 * a ? 0.008 : 0);
          return i.set(
            Math.sin(s) * d,
            u + (o.y > 0.82 * a ? 0.012 : 0),
            q(r, Math.min(u, r.torsoTop)) - Math.cos(s) * d,
          );
        },
        invert: o < 0,
      },
      {
        color: t,
        skin: (e, t, n, i, a, o) => Yr(r, s, t, o),
        kind: V.cloth,
        rough: 0.8,
      },
    );
  }
}
