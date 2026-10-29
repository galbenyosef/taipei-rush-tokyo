// tokyo/assets/characters-p5grEi98 25 — math
// Lines 7311-7643 of readable/tokyo/assets/characters-p5grEi98.pretty.js (statement-aligned).
function fa(e, t, n) {
  let { h: r, m: i, lod: a } = e,
    o = r.hh / 0.23,
    s = r.lay,
    c = t.color ?? (n ? 1381655 : 2761760),
    l = s.eyeW * 1.32,
    u = (n ? 0.07 : 0.058) * (r.hh / r.hh),
    d = 0.012 * o,
    f = a === 0 ? 12 : 6;
  for (let t of [-1, 1]) {
    let p = t * s.eyeT,
      m = s.eyeD + 0.004,
      h = (e, t, i) => {
        let a = (e / f) * Zi,
          o = Math.sign(Math.cos(a)) * Math.abs(Math.cos(a)) ** 0.7,
          s = Math.sign(Math.sin(a)) * Math.abs(Math.sin(a)) ** 0.7,
          c = p + o * (l + i),
          h = m + s * (u * 0.5 + i * 0.3) + (n && s > 0 ? 0.01 : 0),
          g = _n(r, p, m) + d,
          _ = r.crownY - h * r.hh;
        return t.set(
          Math.sin(c) * g,
          _,
          on(r, h) - Math.cos(c) * g * (1 - 0.02 * Math.abs(o)),
        );
      };
    if (
      (i.grid(
        {
          nu: f,
          nv: 1,
          closed: !0,
          point: (e, t, n) => h(Math.round(e * f), n, t < 0.5 ? 0.012 : 0),
          invert: !1,
        },
        { color: c, skin: L.head, kind: z.gloss, rough: 0.25 },
      ),
      h(0, new D(), 0),
      i.grid(
        {
          nu: f,
          nv: 1,
          closed: !0,
          point: (e, t, n) =>
            t < 0.5
              ? h(Math.round(e * f), n, 0.001)
              : n.set(
                  Math.sin(p) * (_n(r, p, m) + d),
                  r.crownY - m * r.hh,
                  on(r, m) - Math.cos(p) * (_n(r, p, m) + d),
                ),
          invert: !0,
        },
        n
          ? {
              color: 1184790,
              skin: L.head,
              kind: z.lens,
              rough: 0.05,
              emissive: 0.9,
              transparent: !0,
            }
          : {
              color: 14674158,
              skin: L.head,
              kind: z.lens,
              rough: 0.05,
              emissive: 0.18,
              transparent: !0,
            },
      ),
      a === 0)
    ) {
      let n = h(0, new D(), 0.012);
      t < 0 && h(f / 2, n, 0.012);
      let i = W(r, t * 1.55, 0.47, 0.004 * o, new D());
      da(e, h(t > 0 ? 0 : f / 2, new D(), 0.01), i, 0.004, c, L.head);
    }
  }
  da(
    e,
    W(r, -s.eyeT + s.eyeW * 1.3, s.eyeD - 0.02, 0.013 * o, new D()),
    W(r, s.eyeT - s.eyeW * 1.3, s.eyeD - 0.02, 0.013 * o, new D()),
    0.004,
    c,
    L.head,
  );
}
function pa(e, t) {
  let { h: n, m: r, lod: i } = e,
    a = n.hh / 0.23,
    o = t.kind,
    s =
      t.color ??
      (o === `policeCap` ? 1778742 : o === `visor` ? 15755914 : 2237998),
    c = t.color2 ?? (o === `policeCap` ? 921362 : K(s, 0.85)),
    l = oa(e),
    u = i === 0 ? 18 : 8;
  if (o !== `visor`) {
    let e = (e) =>
        o === `bucket`
          ? 0.34
          : o === `policeCap`
            ? 0.3
            : Qi(0.42, 0.28, (Math.cos(e) + 1) / 2),
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
            let s = -Math.PI + r * Zi,
              u = t[Math.round(i * c)],
              f = e(s) * u;
            return (
              W(n, s, f, l + (d ? 0.02 * a * (1 - u) + 0.01 * a : 0), o, !1),
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
          skin: L.head,
          kind: z.cloth,
          rough: 0.8,
        },
      ),
      d)
    ) {
      let e = new g(0.012 * a, 8),
        t = W(n, 0, 0.18, l + 0.024 * a, new D(), !1);
      r.geo(e, J(t.x, t.y, t.z - 0.004, 0.1, Math.PI, 0), {
        color: 14201418,
        skin: L.head,
        kind: z.metal,
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
          W(
            n,
            -Math.PI + e * Zi,
            0.3 + (t - 0.5) * 0.09,
            l * 0.6 + 0.002,
            r,
            !1,
          ),
      },
      { color: c, skin: L.head, kind: z.cloth, rough: 0.8 },
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
    _ = (e, t, r, i) => {
      let a = d === `round` ? -Math.PI + e * Zi : -m + e * m * 2,
        s = d === `round` ? 1 : Math.cos((a / m) * Math.PI * 0.5) ** 0.6;
      W(n, a, f, l + 0.002, r, !1);
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
        point: (t, n, r) => _(t, n, r, e),
        invert: !e,
      },
      {
        color: e
          ? o === `policeCap`
            ? c
            : o === `visor`
              ? s
              : K(s, 0.95)
          : o === `visor`
            ? K(s, 0.7)
            : K(c, 0.6),
        skin: L.head,
        kind: o === `policeCap` || o === `visor` ? z.gloss : z.cloth,
        rough: o === `policeCap` ? 0.2 : 0.75,
      },
    );
}
var ma = new D(),
  ha = new D();
function ga(e, t) {
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
          ? Qi(0.27, 0.62, (t - 0.9) / 1)
          : Qi(0.62, 0.66, (t - 1.9) / 1.24);
    },
    p = ma.set(0, n.crownY - 0.45 * n.hh, on(n, 0.45)),
    m = (e, t, r, i) => {
      (W(n, e, t, 0, i, !1), ha.subVectors(i, p));
      let a = ha.length() || 1;
      return i.addScaledVector(ha, r / a);
    };
  (r.grid(
    {
      nu: l,
      nv: d,
      closed: !1,
      point: (e, t, n) => {
        let r = -Math.PI + e * Zi,
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
            l.setHex(K(t.color2 ?? 14169132, 1)),
          l
        );
      },
      skin: L.head,
      kind: z.gloss,
      rough: 0.22,
    },
  ),
    r.grid(
      {
        nu: l,
        nv: 1,
        closed: !1,
        point: (e, t, r) => {
          let i = -Math.PI + e * Zi;
          return t < 0.5
            ? m(i, f(i), c * 0.85, r)
            : W(n, i, f(i), 0.004, r, !1);
        },
        invert: !0,
      },
      { color: 1710620, skin: L.head, kind: z.cloth, rough: 0.9 },
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
          W(n, o, 0.27, c + 0.002, i, !1);
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
      { color: e ? o : s, skin: L.head, kind: z.gloss, rough: 0.3 },
    );
  if (i === 0)
    for (let t of [-1, 1])
      da(
        e,
        W(n, t * 1.45, 0.55, c * 0.7, new D(), !1),
        W(n, t * 0.9, 1, 0.004 * a, new D()),
        0.006,
        1579034,
        L.head,
      );
}
