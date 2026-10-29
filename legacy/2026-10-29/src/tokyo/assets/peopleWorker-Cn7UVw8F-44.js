// tokyo/assets/peopleWorker-Cn7UVw8F 44 — math
// Lines 18836-19168 of readable/tokyo/assets/peopleWorker-Cn7UVw8F.pretty.js (statement-aligned).
function ds(e, t, n) {
  let { b: r, m: i, lod: a, desc: o } = e,
    s = r.s * (r.female ? 0.95 : 1),
    { A: c, fwd: l, right: u, heelZ: d, len: f } = us(e, t),
    p = o.shoes.color,
    m = o.shoes.color2 ?? p,
    h =
      o.shoes.sole ??
      (n.gloss
        ? o.shoes.style === `rainboot`
          ? Y(o.shoes.color, 0.8)
          : 4863014
        : 15855593),
    g =
      a === 0
        ? [0, 0.07, 0.25, 0.45, 0.65, 0.82, 0.94, 1]
        : [0, 0.2, 0.55, 0.85, 1],
    _ = g.length - 1,
    v = a === 0 ? 12 : 6,
    y = [0, 0],
    b = 0.047 * s * n.w,
    x = (e) => {
      let t = 0.62 + 0.38 * Math.sin(Math.min(1, e / 0.3) * Math.PI * 0.5),
        r =
          e > 0.75
            ? Math.max(0, 1 - (e - 0.75) / 0.25) ** (0.5 * n.toe + 0.2)
            : 1,
        i = 1 + 0.08 * Math.exp(-((e - 0.68) ** 2) / 0.02);
      return b * t * Math.max(0.12, r) * i;
    },
    S = (e) => {
      let t =
          e < 0.3
            ? n.hc
            : e < 0.62
              ? ns(n.hc, n.hi, (e - 0.3) / 0.32)
              : ns(n.hi, n.ht, (e - 0.62) / 0.38),
        r =
          e < 0.04
            ? 0.75 + 6 * e
            : e > 0.95
              ? Math.max(0.25, 1 - (e - 0.95) * 14)
              : 1;
      return t * s * r;
    },
    C = (e) => -t * 0.006 * s * Math.sin(e * Math.PI),
    w = (e, t, r) => {
      let i = g[Math.round(t * _)],
        a = e * ts,
        o = x(i),
        p = S(i);
      rs(a, o, 1, 3.4, y);
      let m = 0.5 - 0.5 * y[1],
        h = m * p;
      y[0] *= 1 - 0.3 * (Math.max(0, m - 0.25) / 0.75) ** 1.6;
      let v = -d + i * f,
        b = i > 0.85 ? (i - 0.85) * 0.05 * s : 0;
      return r
        .set(c.x, 0, c.z)
        .addScaledVector(u, C(i) + y[0])
        .addScaledVector(l, v)
        .setY(h + b + (n.gloss && n.hc < 0.06 && i < 0.25 && y[1], 0));
    },
    T = o.shoes.style,
    E = eo(e, `shoe:${T}:${p}:${m}:${h}`, 256, 128, !1, Za(T, p, m, h, n.open));
  if (
    (i.grid(
      { nu: v, nv: _, closed: !0, cap0: !0, cap1: !0, point: w, invert: !0 },
      {
        tex: E
          ? {
              rect: E,
              mode: 0,
              uv: (e, t, n, r, i, a) => {
                ((a[0] = g[Math.round(i * _)]), (a[1] = 1 - r));
              },
            }
          : void 0,
        color: (e, t, r, i, c, l) => {
          let u = g[Math.round(c * _)];
          rs(i * ts, 1, 1, 2.8, y);
          let d = 0.5 - 0.5 * y[1],
            f = S(u);
          (t < n.sole * s * 0.95 || (d < 0.2 && f > 0)
            ? l.setHex(h)
            : l.setHex(p),
            !n.gloss &&
              !n.open &&
              t > n.sole * s &&
              Math.abs(y[0]) > 0.7 &&
              u > 0.3 &&
              u < 0.62 &&
              d > 0.3 &&
              d < 0.62 &&
              l.setHex(m),
            !n.gloss && u < 0.12 && d > 0.45 && l.setHex(m),
            n.open && d > 0.8 && u > 0.2 && u < 0.72 && l.setHex(o.skin),
            !n.gloss &&
              !n.open &&
              d > 0.9 &&
              u > 0.36 &&
              u < 0.62 &&
              a === 0 &&
              l.setHex(Y(m === p ? 16053488 : m, 1)),
            u <= 0.3 && d > 0.92 && l.multiplyScalar(0.35));
        },
        skin: (e, n, r, i, a, o) => {
          let c = g[Math.round(a * _)];
          Yr(
            o,
            t < 0 ? R.footL : R.footR,
            t < 0 ? R.shinL : R.shinR,
            c < 0.35 && n > 0.06 * s ? 0.35 : 0,
          );
        },
        kind: n.gloss ? B.gloss : B.cloth,
        rough: n.gloss ? 0.28 : 0.75,
      },
    ),
    o.shoes.style === `heel`)
  ) {
    let e = new Bn(0.022 * s, 0.03, 0.026 * s),
      n = new N(c.x, 0.015, c.z).addScaledVector(l, -d + 0.02 * s);
    i.geo(e, new Ce().makeTranslation(n.x, n.y, n.z), {
      color: 1380882,
      skin: t < 0 ? R.footL : R.footR,
      kind: B.gloss,
      rough: 0.3,
    });
  }
}
function fs(e, t, n) {
  let { b: r, m: i, desc: a } = e,
    o = r.legs[t < 0 ? 0 : 1],
    s = n ? 1.45 : 1.55,
    c = [s, s + 0.02, 1.7, 1.85, 2],
    l = new N(),
    u = new N(),
    d = new N(),
    f = new N(),
    p = e.nL;
  i.grid(
    {
      nu: p,
      nv: c.length - 1,
      closed: !0,
      point: (e, t, r) => {
        let i = Math.round(t * (c.length - 1)),
          a = c[i],
          s = e * ts,
          p = li(o, s, a) + (i === 0 ? 0.002 : n ? 0.016 : 0.01);
        return (
          ci(o, a, l, u, d, f),
          r
            .copy(l)
            .addScaledVector(f, Math.sin(s) * p)
            .addScaledVector(d, Math.cos(s) * p)
        );
      },
    },
    {
      color: (e, t, n, r, i, o) =>
        o.setHex(
          Math.round(i * (c.length - 1)) <= 1
            ? Y(a.shoes.color, 0.8)
            : a.shoes.color,
        ),
      skin: (e, t, n, r, i, a) => mi(o, c[Math.round(i * (c.length - 1))], a),
      kind: n ? B.gloss : B.cloth,
      rough: n ? 0.25 : 0.7,
    },
  );
}
function ps(e, t) {
  let { b: n, m: r, lod: i, desc: a } = e,
    o = n.s * (n.female ? 0.93 : 1),
    { A: s, fwd: c, right: l, heelZ: u, len: d } = us(e, t),
    f = 0.012 * o,
    p = i === 0 ? [0, 0.12, 0.35, 0.6, 0.8, 0.9, 1] : [0, 0.4, 1],
    m = p.length - 1,
    h = i === 0 ? 10 : 5,
    g = [0, 0],
    _ = q(a.skin, 16771296, 0.4),
    v = (e) => {
      let n = (e * -t + 1) / 2;
      return 1 - 0.14 * n * n - 0.02 * n;
    };
  r.grid(
    {
      nu: h,
      nv: m,
      closed: !0,
      cap0: !0,
      cap1: !0,
      point: (e, t, n) => {
        let r = Math.round(t * m),
          a = p[r],
          h =
            0.044 *
            o *
            (0.6 + 0.4 * Math.sin(Math.min(1, a / 0.35) * Math.PI * 0.5)) *
            (a > 0.8 ? Math.max(0.55, 1 - (a - 0.8) * 1.6) : 1),
          _ =
            (a < 0.35
              ? ns(0.085, 0.062, a / 0.35)
              : a < 0.75
                ? ns(0.062, 0.028, (a - 0.35) / 0.4)
                : ns(0.028, 0.016, (a - 0.75) / 0.25)) * o;
        rs(e * ts, h, 1, 2.6, g);
        let y = 0.5 - 0.5 * g[1],
          b = g[0] / h,
          x = -u + a * d * 0.98;
        a > 0.8 && i === 0 && (x = -u + d * (0.8 + (a - 0.8) * v(b)) * 0.98);
        let S =
          a > 0.82 && y > 0.5 && i === 0
            ? 0.0025 * o * Math.abs(Math.cos(b * Math.PI * 2.5)) ** 6
            : 0;
        return n
          .set(s.x, 0, s.z)
          .addScaledVector(l, g[0])
          .addScaledVector(c, x)
          .setY(f + y * _ - S);
      },
      invert: !0,
    },
    {
      color: (e, t, n, r, o, s) => {
        let c = p[Math.round(o * m)];
        (s.setHex(a.skin),
          rs(r * ts, 1, 1, 2.6, g),
          c >= 0.93 && g[1] < -0.3 && i === 0 && s.setHex(_),
          0.5 - 0.5 * g[1] < 0.15 && s.multiplyScalar(0.85));
      },
      skin: t < 0 ? R.footL : R.footR,
      kind: B.skin,
      rough: 0.6,
    },
  );
}
function ms(e, t, n) {
  let { b: r, m: i, desc: a } = e,
    o = r.s * (r.female ? 0.95 : 1),
    { A: s, fwd: c, right: l, heelZ: u, len: d } = us(e, t),
    f = t < 0 ? R.footL : R.footR,
    p = a.shoes.color2 ?? 16053492,
    m = a.shoes.color,
    h = a.shoes.sole ?? m,
    g = e.lod === 0 ? [0, 0.12, 0.45, 0.8, 1] : [0, 0.5, 1],
    _ = g.length - 1,
    v = e.lod === 0 ? 8 : 5,
    y = [0, 0],
    b = 0.014 * o;
  i.grid(
    {
      nu: v,
      nv: _,
      closed: !0,
      cap0: !0,
      cap1: !0,
      point: (e, t, n) => {
        let r = g[Math.round(t * _)],
          i =
            0.05 *
            o *
            (0.75 + 0.25 * Math.sin(Math.min(1, r / 0.4) * Math.PI * 0.5)) *
            (r > 0.85 ? Math.max(0.35, 1 - (r - 0.85) * 4) : 1) *
            (r < 0.05 ? 0.8 : 1);
        rs(e * ts, i, 1, 4, y);
        let a = 0.5 - 0.5 * y[1];
        return n
          .set(s.x, 0, s.z)
          .addScaledVector(l, y[0])
          .addScaledVector(c, -u - 0.012 * o + r * (d + 0.03 * o))
          .setY(a * b);
      },
      invert: !0,
    },
    {
      color: (e, t, n, r, i, a) => a.setHex(t > b * 0.8 ? p : h),
      skin: f,
      kind: B.gloss,
      rough: 0.55,
    },
  );
  let x = n ? [0.45, 0.72] : [0.62];
  for (let t of x) {
    let r = -u + t * d,
      a = 0.052 * o,
      p = (n ? 0.03 : 0.036) * o,
      h = (n ? 0.012 : 0.05) * o,
      g = e.lod === 0 ? 6 : 3;
    (i.grid(
      {
        nu: g,
        nv: 1,
        closed: !1,
        point: (e, t, n) => {
          let i = Math.PI * e,
            o = -Math.cos(i) * a,
            u = b + Math.sin(i) * p + 0.002,
            d = r + (t - 0.5) * h;
          return n
            .set(s.x, 0, s.z)
            .addScaledVector(l, o)
            .addScaledVector(c, d)
            .setY(u);
        },
        invert: !1,
      },
      { color: m, skin: f, kind: B.gloss, rough: 0.5 },
    ),
      i.grid(
        {
          nu: g,
          nv: 1,
          closed: !1,
          point: (e, t, n) => {
            let i = Math.PI * e,
              o = -Math.cos(i) * (a - 0.003),
              u = b + Math.sin(i) * (p - 0.003) + 0.002,
              d = r + (t - 0.5) * h;
            return n
              .set(s.x, 0, s.z)
              .addScaledVector(l, o)
              .addScaledVector(c, d)
              .setY(u);
          },
          invert: !0,
        },
        { color: Y(m, 0.6), skin: f, kind: B.gloss, rough: 0.5 },
      ));
  }
}
