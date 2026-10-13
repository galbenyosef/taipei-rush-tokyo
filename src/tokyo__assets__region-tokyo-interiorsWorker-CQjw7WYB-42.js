// tokyo__assets__region-tokyo-interiorsWorker-CQjw7WYB 42 — math
// Lines 18387-18697 of readable/tokyo__assets__region-tokyo-interiorsWorker-CQjw7WYB.pretty.js (statement-aligned).
function es(e) {
  let { b: t, fit: n, lod: r } = e,
    i = r === 0 ? Ao : jo,
    a = e.nL,
    o = e.desc.skin,
    s = r === 0 ? 0.03 : 0.1,
    { bottom: c } = n,
    l = Math.min(2, n.shoeT);
  for (let r of t.legs) {
    let t = r.side,
      u = r.tMin;
    if (c.legT > 0) {
      let n = ro(e, c.pattern, c.color, c.patternColor),
        o = Math.min(c.legT, l + 0.02),
        d = Mo(i, r.tMin, o, s),
        f = c.style === `track` ? 0.008 : 0,
        p = No(d, !1, o < 1.99, 0, f),
        m = p.length - 1,
        h = n.rect ? uo(0.08, n.tileM) : 1;
      (zo(
        e,
        {
          limb: r,
          rows: p,
          R: (e, t) => To(r, e, t, c.off, c.loose, c.flare),
          Ru: (e, t) => ma(r, e, t) - 0.001,
          attrs: {
            color: (e, r, i, a, s, l) => {
              let u = Math.round(s * m),
                d = p[u].p,
                f = a * X;
              l.setHex(n.vcol);
              let h = Math.sin(f) * t;
              if (
                (l.multiplyScalar(
                  1 -
                    0.18 * Math.max(0, -h) * V(0.5, 0, d) -
                    (u === m && o < 1.99 ? 0.25 : 0),
                ),
                c.pattern === `denim`)
              ) {
                let e = Math.max(0, Math.cos(f));
                l.multiplyScalar(
                  1 +
                    0.22 * e * mo(d - 0.4, 0.3) +
                    0.15 * e * mo(d - 1, 0.12) -
                    0.08 * Math.max(0, -h),
                );
              }
              c.style === `slacks` &&
                Math.abs(ho(f, 0)) < 0.2 &&
                l.multiplyScalar(1.06);
              let g = Math.max(0, -Math.cos(f));
              (l.multiplyScalar(
                1 -
                  0.16 * g * mo(d - 1.02, 0.07) -
                  0.06 * Math.max(0, Math.cos(f)) * mo(d - 0.12, 0.08),
              ),
                o > 1.8 &&
                  d > 1.62 &&
                  l.multiplyScalar(
                    1 -
                      0.1 *
                        Math.abs(Math.sin((d - 1.62) * 26 + f * 2)) *
                        V(1.62, 1.8, d),
                  ),
                c.style === `track` &&
                  Math.abs(ho(f, t > 0 ? Math.PI / 2 : -Math.PI / 2)) < 0.3 &&
                  l.setHex(c.color2));
            },
            skin: (e, t, n, i, a, o) => ya(r, p[Math.round(a * m)].p, o),
            kind: B.cloth,
            rough: 0.88,
            tex: Bo(
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
        ? (d > u + 0.05 && f.push([u, d + 0.01, o, B.skin]),
          f.push([Math.max(u, d - 0.01), l, n.socks.color, B.cloth]))
        : f.push([u, l, o, B.skin]);
      for (let [n, o, l, u] of f) {
        let d = Mo(i, n, o, s).map((e) => ({ p: e, k: 1 })),
          f = u === B.cloth,
          p = d.length - 1;
        zo(
          e,
          {
            limb: r,
            rows: d,
            R: (e, t) =>
              ma(r, e, t) +
              (f ? 0.002 + (t < n + 0.05 ? 0.001 : 0) : 0) +
              (c.style, 0),
            Ru: (e, t) => ma(r, e, t),
            attrs: {
              color: (e, r, i, a, o, s) => {
                let c = d[Math.round(o * p)].p;
                (s.setHex(l),
                  !f && Math.abs(c - 1) < 0.12 && s.multiply(Zo),
                  f &&
                    d[Math.round(o * p)].p < n + 0.04 &&
                    s.multiplyScalar(0.92),
                  Qo(s, a, t, c, 0.06));
              },
              skin: (e, t, n, i, a, o) => ya(r, d[Math.round(a * p)].p, o),
              kind: u,
              rough: f ? 0.9 : 0.6,
            },
          },
          a,
        );
      }
    }
  }
  c.skirt && ns(e);
}
function ts(e) {
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
        i = ma(t.legs[1], Math.PI / 2, Math.min(1.2, r)) + 0.012,
        a = l + i,
        o = i * 1.12,
        s = Math.sin(e),
        c = Math.cos(e);
      return 1 / Math.sqrt((s / a) ** 2 + (c / o) ** 2);
    },
    f = So(n);
  return (e, n) => {
    let a = n > u ? xo(t, e, n, i.off + 0.004, 0.3) : 0,
      l = Math.max(
        a,
        d(e, n),
        n < u + 0.06 ? xo(t, e, u + 0.06, i.off + 0.004, 0.3) * 0.98 : 0,
      ),
      p = Math.max(0, t.H * 0.56 - n),
      m = l + r.flare * p;
    if (c) {
      let r = ((((e / X) * c) % 1) + 1) % 1;
      m += (Math.abs(r - 0.5) * 2 - 0.5) * 0.012 * V(o, s, n) * t.s;
    }
    return Co(t, f, e, n, m);
  };
}
function ns(e) {
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
    f = ro(e, a.pattern, a.color, a.patternColor),
    p = t.torsoBottom,
    m = ts(e),
    h = [];
  h.push({ y: s, k: 1 });
  for (let e = 1; e < d; e++) h.push({ y: po(s, c, e / d), k: 1 });
  (h.push({ y: c, k: 1 }), h.push({ y: c + 0.004, k: 0.9 }));
  let g = h.length - 1,
    _ = f.rect ? uo(0.18, f.tileM) : 1;
  (e.m.grid(
    {
      nu: u,
      nv: g,
      closed: !0,
      point: (e, n, r) => {
        let i = h[Math.round(n * g)],
          a = e * X,
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
        if ((a.setHex(o >= g - 1 ? Y(f.vcol, 0.55) : f.vcol), l)) {
          let e = (((r * l) % 1) + 1) % 1;
          a.multiplyScalar(e < 0.5 ? 1 : 0.86);
        }
        a.multiplyScalar(1 - 0.08 * V(s - 0.05, s, t));
      },
      skin: (e, t, n, r, i, a) => {
        let o = r * X,
          s = V(p + 0.05, c, t);
        Zr(a, R.hips, R.hips, 0);
        let l = 0.5 + 0.5 * Math.max(-1, Math.min(1, Math.sin(o) * 2.5));
        ($r(a, R.thighR, 0.55 * s * l), $r(a, R.thighL, 0.55 * s * (1 - l)));
      },
      kind: B.cloth,
      rough: 0.85,
      tex: Bo(
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
          let i = po(c + 0.004, po(c, s, 0.5), n),
            a = e * X,
            o = m(a, i) - 0.005;
          return r.set(
            Math.sin(a) * o,
            i,
            G(t, Math.max(i, p)) - Math.cos(a) * o,
          );
        },
      },
      {
        color: Y(f.vcol, 0.45),
        skin: (e, t, n, r, i, a) => {
          let o = r * X,
            s = V(p + 0.05, c, t);
          Zr(a, R.hips, R.hips, 0);
          let l = 0.5 + 0.5 * Math.max(-1, Math.min(1, Math.sin(o) * 2.5));
          ($r(a, R.thighR, 0.55 * s * l), $r(a, R.thighL, 0.55 * s * (1 - l)));
        },
        kind: B.cloth,
        rough: 0.9,
      },
    ));
  let v = !!n.outer && n.outer.gap === 0 && n.outer.hemY < a.waistY - 0.02;
  n.bottom.belt &&
    (!o || o.tucked) &&
    !v &&
    Go(e, a.waistY - 0.012, n.bottom.belt, a.off + 0.006);
}
const rs = Math.PI * 2,
  is = (e, t, n) => e + (t - e) * n,
  as = (e, t) => Math.exp(-(e * e) / (t * t)),
  os = new Ce(),
  ss = new ie(),
  cs = new Ne(),
  ls = new N(),
  us = new N(1, 1, 1);
function Z(e, t, n, r = 0, i = 0, a = 0, o = 1, s = 1, c = 1) {
  return os
    .compose(ls.set(e, t, n), ss.setFromEuler(cs.set(r, i, a)), us.set(o, s, c))
    .clone();
}
function ds(e) {
  for (let t of e) {
    if (t.kind === `helmet`) return { d: 0.5, squash: 0.25 };
    if (t.kind === `cap` || t.kind === `policeCap`)
      return { d: 0.3, squash: 0.35 };
    if (t.kind === `bucket`) return { d: 0.34, squash: 0.35 };
  }
  return { d: 0, squash: 1 };
}
function fs(e) {
  let t = e.desc.hair.style,
    n = e.h.hh / 0.23;
  return (
    ({
      bald: 0,
      buzz: 0.003,
      balding: 0.006,
      elder: 0.008,
      perm: 0.012,
      bowl: 0.008,
      undercut: 0.01,
      spiky: 0.008,
    }[t] ?? 0.007) *
      n +
    0.006 * n
  );
}
const ps = /* @__PURE__ */ new Set([`lanyard`, `watch`, `earbuds`, `necklace`]),
  ms = /* @__PURE__ */ new Map();
