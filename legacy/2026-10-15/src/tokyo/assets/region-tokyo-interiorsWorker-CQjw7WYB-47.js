// tokyo/assets/region-tokyo-interiorsWorker-CQjw7WYB 47 — math
// Lines 19919-20267 of readable/tokyo/assets/region-tokyo-interiorsWorker-CQjw7WYB.pretty.js (statement-aligned).
function Js(e, t) {
  let { b: n, m: r, fit: i, lod: a } = e,
    o = n.H,
    s = n.s,
    c = t.color ?? 13215302,
    l = i.outer ? i.outer.hemY + 0.05 * s : 0.56 * o,
    u = (i.outer ? i.outer.neckY : 0.83 * o) - 0.03 * s;
  for (let t = 0; t < 5; t++) {
    let i = Us(l, u, t / 4),
      o = Ts(e, 0, i) + 0.004,
      d = a === 0 ? new Kn(0.0105 * s, 6, 3) : new Wn(0.012 * s, 0);
    r.geo(d, Z(0, i, G(n, i) - o, 0, 0, 0, 1, 1, 0.55), {
      color: c,
      skin: R.chest,
      kind: B.metal,
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
          let a = t * Hs,
            o =
              Math.max(n.neckR + 0.012, ga(n, a, d.neckY - 0.01) * 0.95) +
              0.006 +
              d.off * 0.4;
          return i.set(
            Math.sin(a) * o,
            e - 0.004 + r * 0.006,
            G(n, d.neckY - 0.01) - Math.cos(a) * o,
          );
        },
        invert: !0,
      },
      {
        color: 16053488,
        skin: (e, t, n, r, i, a) => Zr(a, R.chest, R.neck, 0.5),
        kind: B.gloss,
        rough: 0.4,
      },
    );
  }
}
function Ys(e, t) {
  let { b: n, m: r, lod: i } = e,
    a = n.H,
    o = n.s,
    s = t.color ?? 10688554,
    c = Y(s, 0.72),
    l = 0.33 * o,
    u = 0.42 * o,
    d = 0.2 * o,
    f = 0.655 * a,
    p = G(n, f) + Ts(e, Math.PI, f) + d / 2 + 0.008,
    m = (e, t, n, r, i, a) =>
      Zr(a, R.chest, R.spine, V(f, f - u * 0.5, t) * 0.35);
  r.geo(
    Ds(l * 0.94, u * 0.96, d, 0.03 * o, i === 0 ? 3 : 1),
    Z(0, f, p, 0.05, 0, 0),
    {
      color: (e, t, n, r, i, a) => a.setHex(Math.abs(e) > l * 0.4 ? c : s),
      skin: m,
      kind: B.gloss,
      rough: 0.32,
    },
  );
  let h = p + d / 2 + 0.006 * o;
  (r.geo(
    Ds(l, u * 0.86, 0.016 * o, 0.05 * o, i === 0 ? 3 : 1),
    Z(0, f - u * 0.04, h, 0.05, 0, 0),
    { color: s, skin: m, kind: B.gloss, rough: 0.28 },
  ),
    r.geo(
      Ds(l, 0.018 * o, d + 0.02 * o, 0.008 * o, 1),
      Z(0, f + u * 0.48, p + 0.006 * o, 0.05, 0, 0),
      { color: s, skin: m, kind: B.gloss, rough: 0.28 },
    ),
    r.geo(
      new Bn(0.045 * o, 0.03 * o, 0.012 * o),
      Z(0, f - u * 0.36, h + 0.012 * o, 0.05, 0, 0),
      { color: 13158596, skin: m, kind: B.metal, rough: 0.25 },
    ),
    Es(e, c, f - u * 0.32));
}
function Xs(e, t) {
  let { b: n, m: r, fit: i, lod: a } = e,
    o = n.H,
    s = n.s,
    c = t.color ?? 16184817,
    l = Y(c, 0.92),
    u = i.bottom.waistY,
    d = i.bottom.skirt ? ts(e) : null,
    f = i.bottom.skirt
      ? Math.max(i.bottom.skirt.hemY + 0.035 * o, 0.36 * o)
      : 0.4 * o,
    p = (t, r) =>
      d && r < u
        ? d(t, r)
        : r > n.torsoBottom
          ? Ts(e, t, r)
          : ga(n, t, n.torsoBottom + 0.01, !0),
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
          c = Us(f, u + 0.01, o),
          l =
            o < 0.1
              ? 0.008 * s * Math.sin(e * m * Math.PI) * (a === 0) + 0.006
              : 0,
          d = p(i, c) + 0.006 + l;
        return r.set(
          Math.sin(i) * d,
          c,
          G(n, Math.max(c, n.torsoBottom)) - Math.cos(i) * d,
        );
      },
      invert: !0,
    },
    {
      color: (e, t, n, r, i, a) => a.setHex(Math.round(i * g) === 0 ? l : c),
      skin: (e, t, r, i, a, o) => {
        Zr(o, R.hips, R.hips, 0);
        let s = V(n.torsoBottom, f, t);
        $r(o, i < 0.5 ? R.thighL : R.thighR, 0.45 * s);
      },
      kind: B.cloth,
      rough: 0.85,
    },
  );
  let _ = u - 0.005,
    v = 0.775 * o,
    y = (e) => Us(0.62, 0.44, (e - _) / (v - _));
  r.grid(
    {
      nu: a === 0 ? 6 : 2,
      nv: a === 0 ? 3 : 1,
      closed: !1,
      point: (t, r, i) => {
        let a = Us(_, v, r),
          o = (t - 0.5) * 2 * y(a),
          s = Ts(e, o, a) + 0.005;
        return i.set(Math.sin(o) * s, a, G(n, a) - Math.cos(o) * s);
      },
      invert: !0,
    },
    {
      color: c,
      skin: (e, t, r, i, a, o) => va(n, (i - 0.5) * 0.9, t, o),
      kind: B.cloth,
      rough: 0.85,
    },
  );
  for (let t of [-1, 1])
    js(
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
    x = Ts(e, Math.PI, b) + 0.012;
  for (let e of [-1, 1]) {
    let t = a === 0 ? new Kn(0.045 * s, 6, 4) : new Wn(0.045 * s, 0);
    r.geo(
      t,
      Z(e * 0.05 * s, b + 0.01 * s, G(n, b) + x, 0, 0, e * 0.5, 1.2, 0.7, 0.35),
      { color: c, skin: R.hips, kind: B.cloth, rough: 0.85 },
    );
  }
}
function Zs(e, t) {
  let { h: n, m: r, lod: i } = e,
    a = n.hh / 0.23,
    o = fs(e),
    s = t.color ?? 16316403,
    c = t.color2 ?? 1447450;
  r.grid(
    {
      nu: i === 0 ? 16 : 8,
      nv: 1,
      closed: !0,
      point: (e, t, r) =>
        U(
          n,
          -Math.PI + e * Hs,
          0.24 + (t - 0.5) * 0.035 + 0.1 * Math.max(0, -Math.cos(e * Hs)),
          o + 0.002,
          r,
          !1,
        ),
    },
    { color: c, skin: R.head, kind: B.satin, rough: 0.5 },
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
        return U(n, s, 0.21 - t * 0.09, o + 0.004 + t * 0.016 * a + c, r, !1);
      },
      invert: !0,
    },
    { color: s, skin: R.head, kind: B.cloth, rough: 0.8 },
  );
}
function Qs(e, t) {
  let { b: n, m: r, lod: i, desc: a } = e,
    o = n.H,
    s = n.s,
    c = t.color ?? 12071482,
    l = a.sex === `f`,
    u = l ? 0.595 * o : 0.545 * o,
    d = l ? 0.085 * o : 0.04 * o,
    f = i === 0 ? 18 : 8,
    p = (t, r) =>
      Math.max(Gs(e, t, r), ga(n, t, Math.max(r, n.torsoBottom + 0.02), !0)) +
      0.007;
  r.grid(
    {
      nu: f,
      nv: 3,
      closed: !0,
      point: (e, t, r) => {
        let i = e * Hs,
          a = Math.round(t * 3),
          o = u + (a < 2 ? -0.5 : 0.5) * d,
          s = p(i, o) + (a === 0 || a === 3 ? -0.003 : 0.002);
        return r.set(Math.sin(i) * s, o, G(n, o) - Math.cos(i) * s);
      },
      invert: !0,
    },
    {
      color: (e, t, n, r, i, a) =>
        a.setHex(Math.round(i * 3) === 3 ? Y(c, 0.8) : c),
      skin: (e, t, r, i, a, o) => va(n, i * Hs, t, o),
      kind: B.satin,
      rough: 0.55,
    },
  );
  let m = G(n, u) + p(Math.PI, u) + 0.02 * s;
  l
    ? (r.geo(
        Ds(0.3 * s, 0.11 * s, 0.05 * s, 0.02 * s, i === 0 ? 2 : 1),
        Z(0, u + 0.01 * s, m + 0.01 * s),
        { color: c, skin: R.spine, kind: B.satin, rough: 0.55 },
      ),
      r.geo(
        Ds(0.06 * s, 0.14 * s, 0.06 * s, 0.015 * s, 1),
        Z(0, u, m + 0.035 * s),
        { color: Y(c, 0.85), skin: R.spine, kind: B.satin, rough: 0.55 },
      ))
    : r.geo(Ds(0.09 * s, 0.05 * s, 0.03 * s, 0.01 * s, 1), Z(0.03 * s, u, m), {
        color: c,
        skin: R.hips,
        kind: B.satin,
        rough: 0.55,
      });
  let h = t.color2 ?? Y(a.top.color, 0.72),
    g = u + d * 0.5;
  for (let t of [1, -1]) {
    let n = t < 0 ? 0.004 : 0;
    js(
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
function $s(e, t) {
  let { b: n, fit: r } = e,
    i = n.H,
    a = n.s,
    o = t.color ?? 1710626,
    s = r.outer,
    c = s ? s.gap : 0.16,
    l = s ? s.hemY / i : 0.45;
  for (let t of [-1, 1]) {
    let n = t * (c + 0.06);
    js(
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
    for (let e = 0; e <= 12; e++) o.push([-Math.PI + (e / 12) * Hs, n]);
    js(e, o, 0.04 * a, t.color2);
  }
}
(ms.set(`tie`, Ks),
  ms.set(`sailorCollar`, qs),
  ms.set(`buttons`, Js),
  ms.set(`randoseru`, Ys),
  ms.set(`maidApron`, Xs),
  ms.set(`maidCap`, Zs),
  ms.set(`obi`, Qs),
  ms.set(`happiTrim`, $s));
const ec = Math.PI * 2,
  tc = (e, t, n) => e + (t - e) * n;
function nc(e, t, n, r, i) {
  let a = Math.sin(e),
    o = Math.cos(e);
  ((i[0] = t * Math.sign(a) * Math.abs(a) ** (2 / r)),
    (i[1] = n * Math.sign(o) * Math.abs(o) ** (2 / r)));
}
