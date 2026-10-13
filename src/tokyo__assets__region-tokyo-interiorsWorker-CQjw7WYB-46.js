// tokyo__assets__region-tokyo-interiorsWorker-CQjw7WYB 46 — math
// Lines 19608-19918 of readable/tokyo__assets__region-tokyo-interiorsWorker-CQjw7WYB.pretty.js (statement-aligned).
function Ls(e, t) {
  let { m: n, b: r } = e,
    i = r.s,
    a = Ns(e, 1),
    o = new Vn(0.1 * i, 10);
  n.geo(
    o,
    Z(a.x + 0.02 * i, a.y - 0.14 * i, a.z - 0.02, 0, Math.PI / 2, 0),
    { color: t.color ?? 15852228, skin: R.handR, kind: B.cloth, rough: 0.8 },
    !0,
  );
  let s = new Vn(0.1 * i, 10);
  n.geo(
    s,
    Z(a.x + 0.018 * i, a.y - 0.14 * i, a.z - 0.02, 0, -Math.PI / 2, 0),
    { color: t.color2 ?? 12730415, skin: R.handR, kind: B.cloth, rough: 0.8 },
    !0,
  );
  let c = new Hn(0.004 * i, 0.004 * i, 0.1 * i, 4);
  n.geo(c, Z(a.x + 0.02 * i, a.y - 0.03 * i, a.z - 0.02), {
    color: 6965802,
    skin: R.handR,
    kind: B.gloss,
    rough: 0.5,
  });
}
function Rs(e, t) {
  let { m: n, b: r } = e,
    i = r.arms[0],
    a = r.s,
    o = i.c.clone().lerp(i.b, 0.06),
    s = new qn(0.029 * a, 0.006 * a, 3, 10);
  n.geo(s, Z(o.x, o.y, o.z, Math.PI / 2, 0, 0.05), {
    color: t.color ?? 1579034,
    skin: R.foreL,
    kind: B.gloss,
    rough: 0.3,
  });
  let c = new Hn(0.014 * a, 0.014 * a, 0.006 * a, 6);
  n.geo(c, Z(o.x - 0.031 * a, o.y, o.z, 0, 0, Math.PI / 2), {
    color: t.color2 ?? 14343384,
    skin: R.foreL,
    kind: B.metal,
    rough: 0.25,
  });
}
function zs(e, t) {
  let { m: n, b: r } = e,
    i = r.H,
    a = r.s,
    o = 0.72 * i,
    s = Ts(e, 0, o) + 0.008,
    c = new N(0, o, G(r, o) - s),
    l = t.color ?? 2777784;
  for (let t of [-1, 1])
    _s(
      e,
      new N(t * 0.06 * a, 0.845 * i, G(r, 0.845 * i) - 0.03 * a),
      c.clone().add(new N(t * 0.01, 0.045 * a, 0)),
      0.012 * a,
      l,
      R.chest,
    );
  let u = Ds(0.055 * a, 0.085 * a, 0.003, 0.004 * a, 1);
  n.geo(u, Z(c.x, c.y, c.z, -0.05, 0, 0), {
    color: (e, t, n, r, i, o) => o.setHex(t > c.y + 0.02 * a ? l : 16053490),
    skin: R.chest,
    kind: B.gloss,
    rough: 0.3,
  });
}
function Bs(e, t) {
  let { m: n, b: r } = e,
    i = 0.838 * r.H,
    a = new qn(r.neckR * 1.3, 0.0018, 3, 12);
  n.geo(a, Z(0, i, G(r, i) - 0.012, Math.PI / 2 - 0.35, 0, 0), {
    color: t.color ?? 14729328,
    skin: R.chest,
    kind: B.metal,
    rough: 0.2,
  });
}
function Vs(e, t) {
  let { b: n, m: r } = e,
    i = n.H,
    a = t.color ?? 2767450,
    o = 0.6 * i,
    s = 0.33 * i,
    c = e.lod === 0 ? 8 : 4,
    l = e.lod === 0 ? 6 : 3,
    u = (e, t) => {
      let r = n.legs[1].a.x,
        i = 0.095 * n.s,
        a = r + i,
        o = i * 1.15;
      return (
        1 / Math.sqrt((Math.sin(e) / a) ** 2 + (Math.cos(e) / o) ** 2) +
        0.02 +
        0 * t
      );
    };
  r.grid(
    {
      nu: c,
      nv: l,
      closed: !1,
      point: (t, r, i) => {
        let a = -1.05 + t * 1.05 * 2,
          c = is(s, o, r),
          l =
            Math.max(c > n.torsoBottom ? Ts(e, a, c) + 0.01 : 0, u(a, c)) +
            0.004 +
            (1 - r) * 0.02;
        return i.set(
          Math.sin(a) * l,
          c,
          G(n, Math.max(c, n.torsoBottom)) - Math.cos(a) * l,
        );
      },
      invert: !0,
    },
    {
      color: (e, t, n, r, i, s) =>
        s.setHex(a).multiplyScalar(t > o - 0.03 ? 0.85 : 1),
      skin: (e, t, r, i, a, o) => {
        Zr(o, R.hips, R.hips, 0);
        let c = V(n.torsoBottom, s, t);
        $r(o, i < 0.5 ? R.thighL : R.thighR, 0.4 * c);
      },
      kind: B.cloth,
      rough: 0.85,
    },
  );
}
const Hs = Math.PI * 2,
  Us = (e, t, n) => e + (t - e) * n,
  Ws = (e) => (e < 0 ? 0 : e > 1 ? 1 : e);
function Gs(e, t, n) {
  let r = e.fit.top;
  return r ? xo(e.b, t, n, r.off, r.loose) : ga(e.b, t, n, !0);
}
function Ks(e, t) {
  let { b: n, m: r, fit: i, lod: a } = e,
    o = n.H,
    s = n.s;
  if (i.outer && i.outer.gap === 0 && i.outer.style !== `vest`) return;
  let c = t.color ?? 1976900,
    l = (i.top ? i.top.neckF : 0.838 * o) - 0.016 * s,
    u = Math.max(i.bottom.waistY + 0.012, 0.565 * o),
    d = 0.042 * s,
    f = 0.02 * s,
    p = a === 0 ? [0, 0.05, 0.25, 0.5, 0.75, 0.92, 1] : [0, 0.08, 0.6, 1],
    m = p.length - 1,
    h = (e) =>
      e < 0.06
        ? Us(0.004 * s, d, e / 0.06)
        : Us(d, f, ((e - 0.06) / 0.94) ** 1.4);
  r.grid(
    {
      nu: 2,
      nv: m,
      closed: !1,
      point: (t, r, i) => {
        let a = p[Math.round(r * m)],
          o = Us(u, l, a),
          s = Gs(e, 0, o) + 0.0045,
          c = h(a) * (a === 0 ? 0 : 1),
          d = (t - 0.5) * 2 * c,
          f = s + (t === 0.5 ? 0.0025 : 0) + 0.004 * (1 - a);
        return i.set(d, o, G(n, o) - Math.sqrt(Math.max(0, f * f - d * d)));
      },
      invert: !0,
    },
    {
      color: (e, n, r, i, o, l) => {
        (l.setHex(c),
          t.color2 !== void 0 &&
            a === 0 &&
            Math.sin((n / (0.03 * s)) * Math.PI + i * 3) > 0.55 &&
            l.setHex(t.color2),
          l.multiplyScalar(i === 0.5 ? 1.06 : 0.92));
      },
      skin: (e, t, r, i, a, o) => va(n, 0, t, o),
      kind: B.satin,
      rough: 0.45,
    },
  );
  let g = l + 0.006 * s,
    _ = Gs(e, 0, g) + 0.008,
    v = new Hn(0.017 * s, 0.011 * s, 0.026 * s, a === 0 ? 6 : 4, 1);
  r.geo(v, Z(0, g, G(n, g) - _, -0.15, 0, 0, 1, 1, 0.62), {
    color: Y(c, 0.9),
    skin: R.chest,
    kind: B.satin,
    rough: 0.45,
  });
}
function qs(e, t) {
  let { b: n, m: r, fit: i, lod: a } = e,
    o = n.H,
    s = n.s,
    c = t.color ?? 1844288,
    l = t.color2 ?? 11739180,
    u = 0.728 * o,
    d = (e) => {
      let t = i.top,
        n = t ? t.neckF : 0.82 * o,
        r = t ? t.neckB : 0.85 * o;
      return Us(r, n, Math.max(0, Math.cos(e)) ** 1.5) + 0.004;
    },
    f = (e) => {
      let t = Math.abs(e);
      return t < 0.62 ? Us(u + 0.006, d(0.62), t / 0.62) : d(e);
    },
    p = (e) => {
      let t = Math.abs(e);
      return t < 1.25
        ? Us(u, 0.79 * o, t / 1.25)
        : t < 1.95
          ? Us(0.79 * o, 0.8 * o, (t - 1.25) / 0.7)
          : t < 2.15
            ? Us(0.8 * o, 0.688 * o, V(1.95, 2.15, t))
            : 0.688 * o;
    },
    m = a === 0 ? 28 : 14,
    h = a === 0 ? [0, 0.15, 0.5, 1] : [0, 1],
    g = h.length - 1,
    _ = (t, r) => Gs(e, t, Math.min(r, n.torsoTop - 0.004)) + 0.005,
    v = (e) => -Math.PI + e * Hs;
  r.grid(
    {
      nu: m,
      nv: g,
      closed: !0,
      point: (e, t, r) => {
        let i = v(e),
          a = h[Math.round(t * g)],
          o = Us(p(i), f(i), a),
          s = _(i, o) + 0.004 * (1 - a) + 0.002;
        return r.set(
          Math.sin(i) * s,
          o,
          G(n, Math.min(o, n.torsoTop)) - Math.cos(i) * s,
        );
      },
      invert: !0,
    },
    {
      color: (e, t, n, r, i, a) =>
        a.setHex(Math.round(i * g) === g ? Y(c, 0.85) : c),
      skin: (e, t, r, i, a, o) => va(n, v(i), t, o),
      kind: B.cloth,
      rough: 0.85,
    },
  );
  let y = a === 0 ? [0.012, 0.024] : [0.016];
  for (let e of y) {
    let t = 0.0035 * s * (a === 0 ? 1 : 1.6);
    r.grid(
      {
        nu: m,
        nv: 1,
        closed: !0,
        point: (r, i, a) => {
          let s = v(r),
            c = p(s),
            l = f(s),
            u = Math.min(l - 0.002, c + e * o * 0.6 + (i - 0.5) * t * 2),
            d =
              _(s, u) +
              0.0035 +
              0.0035 * (1 - Ws((u - c) / Math.max(0.01, l - c)));
          return a.set(
            Math.sin(s) * d,
            u,
            G(n, Math.min(u, n.torsoTop)) - Math.cos(s) * d,
          );
        },
        invert: !0,
      },
      {
        color: 15921902,
        skin: (e, t, r, i, a, o) => va(n, v(i), t, o),
        kind: B.cloth,
        rough: 0.8,
      },
    );
  }
  let b = u + 0.004,
    x = _(0, b) + 0.012,
    S = G(n, b) - x,
    C = a === 0 ? new Kn(0.02 * s, 6, 4) : new Wn(0.02 * s, 0);
  r.geo(C, Z(0, b, S, 0, 0, 0, 1.25, 0.8, 0.7), {
    color: l,
    skin: R.chest,
    kind: B.satin,
    rough: 0.5,
  });
  for (let t of [-1, 1]) {
    let r = new N(t * 0.008 * s, b - 0.012 * s, S - 0.004),
      i = b - 0.085 * s;
    _s(
      e,
      r,
      new N(t * 0.028 * s, i, G(n, i) - _(t * 0.08, i) - 0.007),
      0.024 * s,
      l,
      R.chest,
    );
  }
}
