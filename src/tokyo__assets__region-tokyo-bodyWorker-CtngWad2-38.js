// tokyo__assets__region-tokyo-bodyWorker-CtngWad2 38 — math
// Lines 13329-13677 of readable/tokyo__assets__region-tokyo-bodyWorker-CtngWad2.pretty.js (statement-aligned).
function oo(e, t) {
  let { b: n, m: r, fit: i, lod: a } = e,
    o = n.H,
    s = n.s,
    c = t.color ?? 13215302,
    l = i.outer ? i.outer.hemY + 0.05 * s : 0.56 * o,
    u = (i.outer ? i.outer.neckY : 0.83 * o) - 0.03 * s;
  for (let t = 0; t < 5; t++) {
    let i = to(l, u, t / 4),
      o = La(e, 0, i) + 0.004,
      d = a === 0 ? new Pt(0.0105 * s, 6, 3) : new Mt(0.012 * s, 0);
    r.geo(d, $(0, i, q(n, i) - o, 0, 0, 0, 1, 1, 0.55), {
      color: c,
      skin: z.chest,
      kind: V.metal,
      rough: 0.3,
    });
  }
  let d = i.outer;
  if (d && d.style === `gakuran`) {
    let e = d.neckY - 0.01 + 0.055 * s;
    r.grid(
      {
        nu: a === 0 ? 14 : 8,
        nv: 1,
        closed: !0,
        point: (t, r, i) => {
          let a = t * eo,
            o =
              Math.max(n.neckR + 0.012, J(n, a, d.neckY - 0.01) * 0.95) +
              0.006 +
              d.off * 0.4;
          return i.set(
            Math.sin(a) * o,
            e - 0.004 + r * 0.006,
            q(n, d.neckY - 0.01) - Math.cos(a) * o,
          );
        },
        invert: !0,
      },
      {
        color: 16053488,
        skin: (e, t, n, r, i, a) => H(a, z.chest, z.neck, 0.5),
        kind: V.gloss,
        rough: 0.4,
      },
    );
  }
}
function so(e, t) {
  let { b: n, m: r, lod: i } = e,
    a = n.H,
    o = n.s,
    s = t.color ?? 10688554,
    c = X(s, 0.72),
    l = 0.33 * o,
    u = 0.42 * o,
    d = 0.2 * o,
    f = 0.655 * a,
    p = q(n, f) + La(e, Math.PI, f) + d / 2 + 0.008,
    m = (e, t, n, r, i, a) =>
      H(a, z.chest, z.spine, U(f, f - u * 0.5, t) * 0.35);
  r.geo(
    za(l * 0.94, u * 0.96, d, 0.03 * o, i === 0 ? 3 : 1),
    $(0, f, p, 0.05, 0, 0),
    {
      color: (e, t, n, r, i, a) => a.setHex(Math.abs(e) > l * 0.4 ? c : s),
      skin: m,
      kind: V.gloss,
      rough: 0.32,
    },
  );
  let h = p + d / 2 + 0.006 * o;
  (r.geo(
    za(l, u * 0.86, 0.016 * o, 0.05 * o, i === 0 ? 3 : 1),
    $(0, f - u * 0.04, h, 0.05, 0, 0),
    { color: s, skin: m, kind: V.gloss, rough: 0.28 },
  ),
    r.geo(
      za(l, 0.018 * o, d + 0.02 * o, 0.008 * o, 1),
      $(0, f + u * 0.48, p + 0.006 * o, 0.05, 0, 0),
      { color: s, skin: m, kind: V.gloss, rough: 0.28 },
    ),
    r.geo(
      new Ot(0.045 * o, 0.03 * o, 0.012 * o),
      $(0, f - u * 0.36, h + 0.012 * o, 0.05, 0, 0),
      { color: 13158596, skin: m, kind: V.metal, rough: 0.25 },
    ),
    Ra(e, c, f - u * 0.32));
}
function co(e, t) {
  let { b: n, m: r, fit: i, lod: a } = e,
    o = n.H,
    s = n.s,
    c = t.color ?? 16184817,
    l = X(c, 0.92),
    u = i.bottom.waistY,
    d = i.bottom.skirt ? pa(e) : null,
    f = i.bottom.skirt
      ? Math.max(i.bottom.skirt.hemY + 0.035 * o, 0.36 * o)
      : 0.4 * o,
    p = (t, r) =>
      d && r < u
        ? d(t, r)
        : r > n.torsoBottom
          ? La(e, t, r)
          : J(n, t, n.torsoBottom + 0.01, !0),
    m = a === 0 ? 16 : 6,
    h = a === 0 ? [0, 0.08, 0.3, 0.6, 1] : [0, 0.25, 1],
    g = h.length - 1;
  r.grid(
    {
      nu: m,
      nv: g,
      closed: !1,
      point: (e, t, r) => {
        let i = -1.15 + e * 1.15 * 2,
          o = h[Math.round(t * g)],
          c = to(f, u + 0.01, o),
          l =
            o < 0.1
              ? 0.008 * s * Math.sin(e * m * Math.PI) * (a === 0) + 0.006
              : 0,
          d = p(i, c) + 0.006 + l;
        return r.set(
          Math.sin(i) * d,
          c,
          q(n, Math.max(c, n.torsoBottom)) - Math.cos(i) * d,
        );
      },
      invert: !0,
    },
    {
      color: (e, t, n, r, i, a) => a.setHex(Math.round(i * g) === 0 ? l : c),
      skin: (e, t, r, i, a, o) => {
        H(o, z.hips, z.hips, 0);
        let s = U(n.torsoBottom, f, t);
        jn(o, i < 0.5 ? z.thighL : z.thighR, 0.45 * s);
      },
      kind: V.cloth,
      rough: 0.85,
    },
  );
  let _ = u - 0.005,
    v = 0.775 * o,
    y = (e) => to(0.62, 0.44, (e - _) / (v - _));
  r.grid(
    {
      nu: a === 0 ? 6 : 2,
      nv: a === 0 ? 3 : 1,
      closed: !1,
      point: (t, r, i) => {
        let a = to(_, v, r),
          o = (t - 0.5) * 2 * y(a),
          s = La(e, o, a) + 0.005;
        return i.set(Math.sin(o) * s, a, q(n, a) - Math.cos(o) * s);
      },
      invert: !0,
    },
    {
      color: c,
      skin: (e, t, r, i, a, o) => Yr(n, (i - 0.5) * 0.9, t, o),
      kind: V.cloth,
      rough: 0.85,
    },
  );
  for (let t of [-1, 1])
    Ua(
      e,
      [
        [t * 0.42, 0.775],
        [t * 0.62, 0.81],
        [t * 1.2, 0.835],
        [t * 1.85, 0.82],
        [t * 2.45, 0.74],
        [t * 2.7, 0.62],
      ],
      0.034 * s,
      c,
    );
  let b = u - 0.01,
    x = La(e, Math.PI, b) + 0.012;
  for (let e of [-1, 1]) {
    let t = a === 0 ? new Pt(0.045 * s, 6, 4) : new Mt(0.045 * s, 0);
    r.geo(
      t,
      $(e * 0.05 * s, b + 0.01 * s, q(n, b) + x, 0, 0, e * 0.5, 1.2, 0.7, 0.35),
      { color: c, skin: z.hips, kind: V.cloth, rough: 0.85 },
    );
  }
}
function lo(e, t) {
  let { h: n, m: r, lod: i } = e,
    a = n.hh / 0.23,
    o = wa(e),
    s = t.color ?? 16316403,
    c = t.color2 ?? 1447450;
  r.grid(
    {
      nu: i === 0 ? 16 : 8,
      nv: 1,
      closed: !0,
      point: (e, t, r) =>
        G(
          n,
          -Math.PI + e * eo,
          0.24 + (t - 0.5) * 0.035 + 0.1 * Math.max(0, -Math.cos(e * eo)),
          o + 0.002,
          r,
          !1,
        ),
    },
    { color: c, skin: z.head, kind: V.satin, rough: 0.5 },
  );
  let l = i === 0 ? 18 : 6;
  r.grid(
    {
      nu: l,
      nv: 1,
      closed: !1,
      point: (e, t, r) => {
        let s = -1.25 + e * 1.25 * 2,
          c = i === 0 ? 0.004 * a * Math.sin(e * l * Math.PI) : 0;
        return G(n, s, 0.21 - t * 0.09, o + 0.004 + t * 0.016 * a + c, r, !1);
      },
      invert: !0,
    },
    { color: s, skin: z.head, kind: V.cloth, rough: 0.8 },
  );
}
function uo(e, t) {
  let { b: n, m: r, lod: i, desc: a } = e,
    o = n.H,
    s = n.s,
    c = t.color ?? 12071482,
    l = a.sex === `f`,
    u = l ? 0.595 * o : 0.545 * o,
    d = l ? 0.085 * o : 0.04 * o,
    f = i === 0 ? 18 : 8,
    p = (t, r) =>
      Math.max(ro(e, t, r), J(n, t, Math.max(r, n.torsoBottom + 0.02), !0)) +
      0.007;
  r.grid(
    {
      nu: f,
      nv: 3,
      closed: !0,
      point: (e, t, r) => {
        let i = e * eo,
          a = Math.round(t * 3),
          o = u + (a < 2 ? -0.5 : 0.5) * d,
          s = p(i, o) + (a === 0 || a === 3 ? -0.003 : 0.002);
        return r.set(Math.sin(i) * s, o, q(n, o) - Math.cos(i) * s);
      },
      invert: !0,
    },
    {
      color: (e, t, n, r, i, a) =>
        a.setHex(Math.round(i * 3) === 3 ? X(c, 0.8) : c),
      skin: (e, t, r, i, a, o) => Yr(n, i * eo, t, o),
      kind: V.satin,
      rough: 0.55,
    },
  );
  let m = q(n, u) + p(Math.PI, u) + 0.02 * s;
  l
    ? (r.geo(
        za(0.3 * s, 0.11 * s, 0.05 * s, 0.02 * s, i === 0 ? 2 : 1),
        $(0, u + 0.01 * s, m + 0.01 * s),
        { color: c, skin: z.spine, kind: V.satin, rough: 0.55 },
      ),
      r.geo(
        za(0.06 * s, 0.14 * s, 0.06 * s, 0.015 * s, 1),
        $(0, u, m + 0.035 * s),
        { color: X(c, 0.85), skin: z.spine, kind: V.satin, rough: 0.55 },
      ))
    : r.geo(za(0.09 * s, 0.05 * s, 0.03 * s, 0.01 * s, 1), $(0.03 * s, u, m), {
        color: c,
        skin: z.hips,
        kind: V.satin,
        rough: 0.55,
      });
  let h = t.color2 ?? X(a.top.color, 0.72),
    g = u + d * 0.5;
  for (let t of [1, -1]) {
    let n = t < 0 ? 0.004 : 0;
    Ua(
      e,
      [
        [t * 2.9, 0.848],
        [t * 1.7, 0.852],
        [t * 0.95, 0.83],
        [t * 0.42, 0.775],
        [t * 0.12, 0.7],
        [-t * 0.16, g / o],
      ].map(([e, t]) => [e, t]),
      (0.028 + n) * s,
      h,
    );
  }
}
function fo(e, t) {
  let { b: n, fit: r } = e,
    i = n.H,
    a = n.s,
    o = t.color ?? 1710626,
    s = r.outer,
    c = s ? s.gap : 0.16,
    l = s ? s.hemY / i : 0.45;
  for (let t of [-1, 1]) {
    let n = t * (c + 0.06);
    Ua(
      e,
      [
        [n, l + 0.004],
        [n, 0.6],
        [n * 1.05, 0.72],
        [t * (c + 0.3), 0.8],
        [t * 1, 0.84],
        [t * 1.9, 0.85],
        [t * 3.1, 0.85],
      ],
      0.05 * a,
      o,
    );
  }
  if (t.color2 !== void 0) {
    let n = r.bottom.waistY / i - 0.01,
      o = [];
    for (let e = 0; e <= 12; e++) o.push([-Math.PI + (e / 12) * eo, n]);
    Ua(e, o, 0.04 * a, t.color2);
  }
}
(Ea.set(`tie`, io),
  Ea.set(`sailorCollar`, ao),
  Ea.set(`buttons`, oo),
  Ea.set(`randoseru`, so),
  Ea.set(`maidApron`, co),
  Ea.set(`maidCap`, lo),
  Ea.set(`obi`, uo),
  Ea.set(`happiTrim`, fo));
const po = Math.PI * 2,
  mo = (e, t, n) => e + (t - e) * n;
function ho(e, t, n, r, i) {
  let a = Math.sin(e),
    o = Math.cos(e);
  ((i[0] = t * Math.sign(a) * Math.abs(a) ** (2 / r)),
    (i[1] = n * Math.sign(o) * Math.abs(o) ** (2 / r)));
}
