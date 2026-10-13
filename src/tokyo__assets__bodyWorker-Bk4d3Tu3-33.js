// tokyo__assets__bodyWorker-Bk4d3Tu3 33 — math
// Lines 11651-11927 of readable/tokyo__assets__bodyWorker-Bk4d3Tu3.pretty.js (statement-aligned).
function ua(e) {
  let { b: t, fit: n, lod: r } = e,
    i = r === 0 ? Bi : Vi,
    a = e.nL,
    o = e.desc.skin,
    s = r === 0 ? 0.03 : 0.1,
    { bottom: c } = n,
    l = Math.min(2, n.shoeT);
  for (let r of t.legs) {
    let t = r.side,
      u = r.tMin;
    if (c.legT > 0) {
      let n = hi(e, c.pattern, c.color, c.patternColor),
        o = Math.min(c.legT, l + 0.02),
        d = Hi(i, r.tMin, o, s),
        f = c.style === `track` ? 0.008 : 0,
        p = Ui(d, !1, o < 1.99, 0, f),
        m = p.length - 1,
        h = n.rect ? Si(0.08, n.tileM) : 1;
      (Yi(
        e,
        {
          limb: r,
          rows: p,
          R: (e, t) => Fi(r, e, t, c.off, c.loose, c.flare),
          Ru: (e, t) => Bn(r, e, t) - 0.001,
          attrs: {
            color: (e, r, i, a, s, l) => {
              let u = Math.round(s * m),
                d = p[u].p,
                f = a * Z;
              l.setHex(n.vcol);
              let h = Math.sin(f) * t;
              if (
                (l.multiplyScalar(
                  1 -
                    0.18 * Math.max(0, -h) * W(0.5, 0, d) -
                    (u === m && o < 1.99 ? 0.25 : 0),
                ),
                c.pattern === `denim`)
              ) {
                let e = Math.max(0, Math.cos(f));
                l.multiplyScalar(
                  1 +
                    0.22 * e * Q(d - 0.4, 0.3) +
                    0.15 * e * Q(d - 1, 0.12) -
                    0.08 * Math.max(0, -h),
                );
              }
              c.style === `slacks` &&
                Math.abs(Ti(f, 0)) < 0.2 &&
                l.multiplyScalar(1.06);
              let g = Math.max(0, -Math.cos(f));
              (l.multiplyScalar(
                1 -
                  0.16 * g * Q(d - 1.02, 0.07) -
                  0.06 * Math.max(0, Math.cos(f)) * Q(d - 0.12, 0.08),
              ),
                o > 1.8 &&
                  d > 1.62 &&
                  l.multiplyScalar(
                    1 -
                      0.1 *
                        Math.abs(Math.sin((d - 1.62) * 26 + f * 2)) *
                        W(1.62, 1.8, d),
                  ),
                c.style === `track` &&
                  Math.abs(Ti(f, t > 0 ? Math.PI / 2 : -Math.PI / 2)) < 0.3 &&
                  l.setHex(c.color2));
            },
            skin: (e, t, n, i, a, o) => Gn(r, p[Math.round(a * m)].p, o),
            kind: H.cloth,
            rough: 0.88,
            tex: Xi(
              n,
              (e, t, r) => (
                (r[0] = e * h),
                (r[1] = (p[Math.round(t * m)].p * 0.42) / n.tileM)
              ),
            ),
          },
        },
        a,
      ),
        (u = o - 0.06));
    }
    if (u < l - 0.04) {
      let d = n.socks ? Math.max(u + 0.02, n.socks.topT) : 9,
        f = [];
      d < l
        ? (d > u + 0.05 && f.push([u, d + 0.01, o, H.skin]),
          f.push([Math.max(u, d - 0.01), l, n.socks.color, H.cloth]))
        : f.push([u, l, o, H.skin]);
      for (let [n, o, l, u] of f) {
        let d = Hi(i, n, o, s).map((e) => ({ p: e, k: 1 })),
          f = u === H.cloth,
          p = d.length - 1;
        Yi(
          e,
          {
            limb: r,
            rows: d,
            R: (e, t) =>
              Bn(r, e, t) +
              (f ? 0.002 + (t < n + 0.05 ? 0.001 : 0) : 0) +
              (c.style, 0),
            Ru: (e, t) => Bn(r, e, t),
            attrs: {
              color: (e, r, i, a, o, s) => {
                let c = d[Math.round(o * p)].p;
                (s.setHex(l),
                  !f && Math.abs(c - 1) < 0.12 && s.multiply(sa),
                  f &&
                    d[Math.round(o * p)].p < n + 0.04 &&
                    s.multiplyScalar(0.92),
                  ca(s, a, t, c, 0.06));
              },
              skin: (e, t, n, i, a, o) => Gn(r, d[Math.round(a * p)].p, o),
              kind: u,
              rough: f ? 0.9 : 0.6,
            },
          },
          a,
        );
      }
    }
  }
  c.skirt && fa(e);
}
function da(e) {
  let { b: t, fit: n } = e,
    r = n.bottom.skirt,
    i = n.bottom,
    a = n.top,
    o = a && !a.tucked ? Math.min(i.waistY, a.hemY + 0.03) : i.waistY,
    s = r.hemY,
    c = r.pleats,
    l = t.legs[1].a.x,
    u = t.torsoBottom,
    d = (e, n) => {
      let r = Math.max(
          0,
          (t.legs[1].a.y - n) / (t.legs[1].a.y - t.legs[1].b.y),
        ),
        i = Bn(t.legs[1], Math.PI / 2, Math.min(1.2, r)) + 0.012,
        a = l + i,
        o = i * 1.12,
        s = Math.sin(e),
        c = Math.cos(e);
      return 1 / Math.sqrt((s / a) ** 2 + (c / o) ** 2);
    },
    f = Mi(n);
  return (e, n) => {
    let a = n > u ? ji(t, e, n, i.off + 0.004, 0.3) : 0,
      l = Math.max(
        a,
        d(e, n),
        n < u + 0.06 ? ji(t, e, u + 0.06, i.off + 0.004, 0.3) * 0.98 : 0,
      ),
      p = Math.max(0, t.H * 0.56 - n),
      m = l + r.flare * p;
    if (c) {
      let r = ((((e / Z) * c) % 1) + 1) % 1;
      m += (Math.abs(r - 0.5) * 2 - 0.5) * 0.012 * W(o, s, n) * t.s;
    }
    return Ni(t, f, e, n, m);
  };
}
function fa(e) {
  let { b: t, fit: n, lod: r } = e;
  t.H;
  let i = n.bottom.skirt,
    a = n.bottom,
    o = n.top,
    s = o && !o.tucked ? Math.min(a.waistY, o.hemY + 0.03) : a.waistY,
    c = i.hemY,
    l = i.pleats,
    u = l ? (r === 0 ? l * 2 : l) : e.nT,
    d =
      r === 0
        ? Math.max(4, Math.ceil((s - c) / 0.065))
        : Math.max(2, Math.ceil((s - c) / 0.15)),
    f = hi(e, a.pattern, a.color, a.patternColor),
    p = t.torsoBottom,
    m = da(e),
    h = [];
  h.push({ y: s, k: 1 });
  for (let e = 1; e < d; e++) h.push({ y: wi(s, c, e / d), k: 1 });
  (h.push({ y: c, k: 1 }), h.push({ y: c + 0.004, k: 0.9 }));
  let g = h.length - 1,
    _ = f.rect ? Si(0.18, f.tileM) : 1;
  (e.m.grid(
    {
      nu: u,
      nv: g,
      closed: !0,
      point: (e, n, r) => {
        let i = h[Math.round(n * g)],
          a = e * Z,
          o = m(a, i.y) * i.k + (i.k, 0);
        return r.set(
          Math.sin(a) * o,
          i.y,
          G(t, Math.max(i.y, p)) - Math.cos(a) * o,
        );
      },
    },
    {
      color: (e, t, n, r, i, a) => {
        let o = Math.round(i * g);
        if ((a.setHex(o >= g - 1 ? X(f.vcol, 0.55) : f.vcol), l)) {
          let e = (((r * l) % 1) + 1) % 1;
          a.multiplyScalar(e < 0.5 ? 1 : 0.86);
        }
        a.multiplyScalar(1 - 0.08 * W(s - 0.05, s, t));
      },
      skin: (e, t, n, r, i, a) => {
        let o = r * Z,
          s = W(p + 0.05, c, t);
        U(a, B.hips, B.hips, 0);
        let l = 0.5 + 0.5 * Math.max(-1, Math.min(1, Math.sin(o) * 2.5));
        (On(a, B.thighR, 0.55 * s * l), On(a, B.thighL, 0.55 * s * (1 - l)));
      },
      kind: H.cloth,
      rough: 0.85,
      tex: Xi(
        f,
        (e, t, n) => (
          (n[0] = e * _),
          (n[1] = h[Math.round(t * g)].y / f.tileM)
        ),
      ),
    },
  ),
    e.m.grid(
      {
        nu: Math.max(8, u >> 1),
        nv: 2,
        closed: !0,
        point: (e, n, r) => {
          let i = wi(c + 0.004, wi(c, s, 0.5), n),
            a = e * Z,
            o = m(a, i) - 0.005;
          return r.set(
            Math.sin(a) * o,
            i,
            G(t, Math.max(i, p)) - Math.cos(a) * o,
          );
        },
      },
      {
        color: X(f.vcol, 0.45),
        skin: (e, t, n, r, i, a) => {
          let o = r * Z,
            s = W(p + 0.05, c, t);
          U(a, B.hips, B.hips, 0);
          let l = 0.5 + 0.5 * Math.max(-1, Math.min(1, Math.sin(o) * 2.5));
          (On(a, B.thighR, 0.55 * s * l), On(a, B.thighL, 0.55 * s * (1 - l)));
        },
        kind: H.cloth,
        rough: 0.9,
      },
    ));
  let v = !!n.outer && n.outer.gap === 0 && n.outer.hemY < a.waistY - 0.02;
  n.bottom.belt &&
    (!o || o.tucked) &&
    !v &&
    ta(e, a.waistY - 0.012, n.bottom.belt, a.off + 0.006);
}
const pa = Math.PI * 2,
  ma = (e, t, n) => e + (t - e) * n;
function ha(e, t, n, r, i) {
  let a = Math.sin(e),
    o = Math.cos(e);
  ((i[0] = t * Math.sign(a) * Math.abs(a) ** (2 / r)),
    (i[1] = n * Math.sign(o) * Math.abs(o) ** (2 / r)));
}
