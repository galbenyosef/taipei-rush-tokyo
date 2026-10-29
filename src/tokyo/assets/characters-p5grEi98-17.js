// tokyo/assets/characters-p5grEi98 17 — math
// Lines 4952-5213 of readable/tokyo/assets/characters-p5grEi98.pretty.js (statement-aligned).
function ri(e, t) {
  let n = e.b,
    r = n.H,
    i = e.lod === 0 ? 16 : 8,
    a =
      e.lod === 0
        ? [0.86, 0.835, 0.8, 0.74, 0.64, 0.54, 0.46, 0.44]
        : [0.86, 0.81, 0.7, 0.55, 0.44],
    o = a.length - 1,
    s = (e, t) => {
      let i = t * r,
        a = V(0.86 * r, 0.79 * r, i),
        o =
          xr(
            n.neckR + 0.02,
            0.3 * n.s * (0.8 + 0.2 * Math.abs(Math.sin(e))),
            a,
          ) + (0.79 * r - i > 0 ? (0.79 * r - i) * 0.25 : 0);
      return Math.max(o, Vt(n, e, Math.max(i, n.torsoBottom), !0) + 0.04);
    };
  (e.m.grid(
    {
      nu: i,
      nv: o,
      closed: !0,
      point: (e, t, i) => {
        let c = e * q,
          l = a[Math.round(t * o)],
          u = l * r,
          d = s(c, l) * (1 + 0.03 * Math.sin(c * 7) * V(0.7, 0.44, l));
        return i.set(
          Math.sin(c) * d,
          u,
          H(n, Math.max(u, n.torsoBottom)) - Math.cos(c) * d,
        );
      },
    },
    {
      color: (e, n, i, a, o, s) =>
        s.setHex(K(t.color, 0.92 + 0.08 * V(0.5 * r, 0.8 * r, n))),
      skin: (e, t, n, i, a, o) => {
        B(o, L.chest, L.spine, V(0.75 * r, 0.55 * r, t));
        let s = Math.sin(i * q);
        Math.abs(s) > 0.6 &&
          t < 0.78 * r &&
          Ct(o, s > 0 ? L.armR : L.armL, 0.35 * V(0.78 * r, 0.6 * r, t));
      },
      kind: z.gloss,
      rough: 0.3,
      transparent: !1,
    },
  ),
    e.m.grid(
      {
        nu: i,
        nv: o,
        closed: !0,
        point: (e, t, i) => {
          let c = e * q,
            l = a[Math.round(t * o)],
            u = l * r,
            d =
              s(c, l) * (1 + 0.03 * Math.sin(c * 7) * V(0.7, 0.44, l)) - 0.004;
          return i.set(
            Math.sin(c) * d,
            u,
            H(n, Math.max(u, n.torsoBottom)) - Math.cos(c) * d,
          );
        },
        invert: !0,
      },
      { color: K(t.color, 0.6), skin: L.chest, kind: z.gloss, rough: 0.4 },
    ));
}
function ii(e) {
  let { b: t, fit: n, lod: r } = e,
    i = r === 0 ? Ir : Lr,
    a = e.nL,
    o = e.desc.skin,
    s = r === 0 ? 0.03 : 0.1,
    { top: c, outer: l } = n,
    u = l && l.sleeveT > 0 && l.style !== `poncho` ? l : null,
    d = c && c.sleeveT > 0 ? c : null,
    f = e.desc.acc.find((e) => e.kind === `armSleeves`);
  for (let n of t.arms) {
    let t = n.side,
      c = n.tMin;
    if (u) {
      let r = fr(e, u.pattern, u.color, u.patternColor),
        o = u.sleeveT,
        l = Br(i, n.tMin, o, s),
        f = u.style === `bomber` || u.style === `cropped` ? 0.006 : 0,
        p = Vr(l, !1, !0, 0, f),
        m =
          d && d.sleeveT >= o - 0.05
            ? (e, t) => Mr(n, e, t, d.off, d.loose, 0, 1, 0)
            : (e, t) => Rt(n, e, t) - 0.001,
        h = r.rect ? yr(0.06, r.tileM) : 1;
      (qr(
        e,
        {
          limb: n,
          rows: p,
          R:
            u.style === `happi`
              ? (e, t) => Mr(n, e, t, u.off * 0.8, u.loose, 0.3, 0.95, 0.045)
              : (e, t) => Mr(n, e, t, u.off * 0.8, u.loose, 1.4, 1.9, 0.004),
          Ru: m,
          attrs: {
            color: (e, n, i, a, s, c) => {
              let l = p[Math.round(s * (p.length - 1))].p;
              (c.setHex(f && l > o - 0.12 ? u.color2 : r.vcol),
                oi(c, a, t, l),
                u.style === `bomber` &&
                  c.multiplyScalar(1 - 0.05 * Math.abs(Math.sin(l * 7)) ** 6));
            },
            skin: (e, t, r, i, a, o) =>
              Wt(n, p[Math.round(a * (p.length - 1))].p, o),
            kind:
              u.style === `bomber` || u.style === `windbreaker`
                ? z.satin
                : z.cloth,
            rough: u.style === `bomber` ? 0.5 : 0.85,
            tex: Jr(
              r,
              (e, t, n) => (
                (n[0] = e * h),
                (n[1] = (p[Math.round(t * (p.length - 1))].p * 0.3) / r.tileM)
              ),
            ),
          },
        },
        a,
      ),
        (c = o - 0.06),
        d &&
          d.sleeveT > o + 0.05 &&
          (si(e, n, d, o - 0.05, d.sleeveT), (c = d.sleeveT - 0.06)));
    } else d && (si(e, n, d, n.tMin, d.sleeveT), (c = d.sleeveT - 0.06));
    let l = f && r === 0 ? Math.max(c + 0.02, 0.55) : 9,
      p = l < 9 ? l + 0.08 : 1.99;
    if (c < p - 0.05) {
      let l = Br(i, c, p, s).map((e) => ({ p: e, k: 1 }));
      if (
        (qr(
          e,
          {
            limb: n,
            rows: l,
            R: (e, t) => Rt(n, e, t),
            Ru: (e, t) => Rt(n, e, t),
            attrs: {
              color: (e, n, i, a, s, c) => {
                let u = l[Math.round(s * (l.length - 1))].p;
                (c.setHex(f && r === 1 && u > 0.6 ? (f.color ?? 15921906) : o),
                  Math.abs(u - 1) < 0.1 && c.multiply(ai),
                  oi(c, a, t, u, -0.04));
              },
              skin: (e, t, r, i, a, o) =>
                Wt(n, l[Math.round(a * (l.length - 1))].p, o),
              kind: z.skin,
              rough: 0.6,
            },
          },
          a,
        ),
        f && r === 0)
      ) {
        let r = Vr(Br(Lr, Math.max(c + 0.02, 0.55), 1.96, s), !0, !0, 0, 0);
        qr(
          e,
          {
            limb: n,
            rows: r,
            R: (e, t) => Rt(n, e, t) + 0.004 + 0.004 * Sr(t - 1.95, 0.08),
            Ru: (e, t) => Rt(n, e, t) - 0.001,
            attrs: {
              color: (e, n, i, a, o, s) => {
                (s.setHex(f.color ?? 15921906),
                  oi(s, a, t, r[Math.round(o * (r.length - 1))].p));
              },
              skin: (e, t, i, a, o, s) =>
                Wt(n, r[Math.round(o * (r.length - 1))].p, s),
              kind: z.satin,
              rough: 0.55,
            },
          },
          a,
        );
      }
    }
  }
}
var ai = new u(1.03, 0.97, 0.95);
function oi(e, t, n, r, i = 0.1) {
  let a = Math.sin(t * q) * n;
  e.multiplyScalar(1 - i * Math.max(0, -a) * (r < 1.1 ? 1 : 0.5));
}
function si(e, t, n, r, i) {
  let a = e.lod === 0 ? Ir : Lr,
    o = e.lod === 0 ? 0.03 : 0.1,
    s = fr(e, n.pattern, n.color, n.patternColor),
    c = Br(a, r, i, o),
    l = i > 1.8,
    u = l && n.rib ? 0.006 : 0,
    d = Vr(c, !1, !0, 0, u),
    f = l
      ? 0.002
      : n.style === `blouse`
        ? 0.014
        : n.style === `yukata`
          ? 0.05
          : 0.009,
    p = s.rect ? yr(0.06, s.tileM) : 1,
    m = d.length - 1;
  qr(
    e,
    {
      limb: t,
      rows: d,
      R: (e, a) => Mr(t, e, a, n.off, n.loose * 0.8, l ? 1.4 : r + 0.2, i, f),
      Ru: (e, n) => Rt(t, e, n) - 0.001,
      attrs: {
        color: (e, r, a, o, c, f) => {
          let p = Math.round(c * m);
          if (
            (f.setHex(
              p === m
                ? K(s.vcol, 0.8)
                : u && d[p].p > i - 0.1
                  ? K(n.color2, 0.95)
                  : s.vcol,
            ),
            l)
          ) {
            let e = o * q,
              n =
                Math.max(0, Math.cos(e)) * 0.6 +
                Math.max(0, -Math.sin(e) * t.side) * 0.4;
            f.multiplyScalar(
              1 -
                0.18 * n * Sr(d[p].p - 1, 0.08) -
                0.07 * Sr(d[p].p - 1.78, 0.1),
            );
          }
          oi(f, o, t.side, d[p].p);
        },
        skin: (e, n, r, i, a, o) => Wt(t, d[Math.round(a * m)].p, o),
        kind: n.style === `blouse` ? z.satin : z.cloth,
        rough: n.style === `blouse` ? 0.55 : 0.88,
        tex: Jr(
          s,
          (e, t, n) => (
            (n[0] = e * p),
            (n[1] = (d[Math.round(t * m)].p * 0.3) / s.tileM)
          ),
        ),
      },
    },
    e.nL,
  );
}
