// tokyo/assets/peopleWorker-Cn7UVw8F 38 — style
// Lines 17033-17294 of readable/tokyo/assets/peopleWorker-Cn7UVw8F.pretty.js (statement-aligned).
function vo(e, t) {
  let n = t.H,
    r = _o[e.bottom.style],
    i = {
      style: e.bottom.style,
      waistY: r.waist * n,
      legT: r.legT,
      off: r.off,
      loose: r.loose,
      flare: r.flare ?? 0,
      color: e.bottom.color,
      color2: e.bottom.color2 ?? e.bottom.color,
      pattern: e.bottom.pattern ?? r.pattern ?? `solid`,
      patternColor: e.bottom.patternColor ?? 16777215,
      belt: e.bottom.belt ?? 0,
      skirt: r.skirt
        ? {
            hemY: r.skirt.hem * n,
            flare: r.skirt.flare,
            pleats: r.skirt.pleats,
          }
        : null,
    },
    a = null;
  if (e.top.style !== `none`) {
    let t = ho[e.top.style],
      r = e.top.sleeve ?? t.sleeve,
      o = mo[r];
    r === `short` &&
      (e.top.style === `polo` || e.top.style === `uniform`) &&
      (o = 0.36);
    let s = e.top.tucked ?? e.top.style === `police`;
    ((a = {
      style: e.top.style,
      hemY: s ? i.waistY - 0.035 : (t.hem - (e.top.length ?? 0) / n) * n,
      neckF: t.neckF * n,
      neckB: t.neckB * n,
      sleeveT: o,
      off: t.off,
      loose: s ? t.loose * 0.6 : (e.top.fit ?? t.loose),
      tucked: s,
      armhole: !!t.armhole,
      collar: t.collar,
      rib: !!t.rib,
      color: e.top.color,
      color2: e.top.color2 ?? e.top.color,
      pattern:
        e.top.pattern ??
        (e.top.style === `sweater` || e.top.style === `tank`
          ? `knit`
          : `solid`),
      patternColor: e.top.patternColor ?? 16777215,
      print: e.top.print ?? `none`,
    }),
      e.top.style === `police` && (a.hemY = i.waistY - 0.035));
  }
  let o = null;
  if (e.outer) {
    let t = go[e.outer.style];
    a &&
      (e.outer.style === `vest` || e.outer.style === `poncho`) &&
      (a.hemY = Math.max(a.hemY, 0.74 * n));
    let r = e.outer.sleeve ?? t.sleeve;
    o = {
      style: e.outer.style,
      hemY: e.outer.length ? (t.hem - e.outer.length / n) * n : t.hem * n,
      neckY: t.neck * n,
      sleeveT: mo[r],
      off:
        t.off +
        (a && (a.style === `hoodie` || a.style === `sweater`) ? 0.006 : 0),
      loose: t.loose,
      gap: e.outer.closed ? 0 : t.gap,
      ...(e.outer.over ? { over: !0 } : null),
      collar: t.collar,
      ribHem: t.ribHem,
      color: e.outer.color,
      color2: e.outer.color2 ?? e.outer.color,
      pattern:
        e.outer.pattern ?? (e.outer.style === `cardigan` ? `knit` : `solid`),
      patternColor: e.outer.patternColor ?? 16777215,
      print: e.outer.print ?? `none`,
    };
  }
  let s = e.shoes.style,
    c =
      s === `boot` || s === `rainboot`
        ? 1.58
        : s === `slipper` || s === `sandal`
          ? 2.2
          : 1.97,
    l = null;
  e.socks &&
    s !== `slipper` &&
    s !== `sandal` &&
    (l = {
      color: e.socks,
      topT: e.age === `student` && i.skirt ? 1.52 : 1.74,
    });
  let u = t.torsoTop;
  return (
    !a && !o
      ? (u = (i.skirt, i.waistY - 0.03))
      : ((u = Math.min(a ? a.neckF : 1 / 0, o && !a ? o.neckY : 1 / 0) - 0.025),
        a?.armhole && (u = Math.min(u, 0.785 * n))),
    { top: a, outer: o, bottom: i, socks: l, shoeT: c, skinY0: u }
  );
}
function yo(e, t, n, r, i, a = !0) {
  let o = di(e, t, n, a);
  if (i > 0) {
    let r = uo(1.1, 0.08, Math.min(1, i)),
      a = e.H * 0.77;
    for (let i = 1; i <= 6; i++) {
      let s = n + i * 0.035;
      if (s > a) break;
      o = Math.max(o, di(e, t, s, !0) - r * (s - n));
    }
  }
  let s = Math.abs(po(t, 0)) - Math.PI / 2,
    c =
      V(e.H * 0.72, e.H * 0.77, n) *
      (1 - V(e.H * 0.785, e.H * 0.812, n)) *
      Math.exp(-(s * s) / 0.3);
  return o + (r + i * 0.006) * (1 - 0.75 * c);
}
function bo(e) {
  let { top: t, outer: n, bottom: r } = e;
  return t && !t.tucked && t.hemY < r.waistY
    ? { hemY: t.hemY, off: t.off, loose: t.loose }
    : n && (n.gap === 0 || n.over) && n.hemY < r.waistY
      ? { hemY: n.hemY, off: n.off, loose: n.loose }
      : null;
}
function xo(e, t, n, r, i) {
  if (!t || r < t.hemY - 0.005) return i;
  let a = V(t.hemY - 0.005, t.hemY + 0.012, r),
    o = yo(e, n, r, t.off, t.loose) - 0.006;
  return i > o ? uo(i, o, a) : i;
}
function So(e, t, n, r, i, a, o, s) {
  let c = li(e, t, n),
    l = 0.45 + 0.55 * V(-0.05, 0.4, n);
  return c + (r + i * 0.008) * l + s * V(a, o, n);
}
function Co(e, t, n, r, i, a) {
  let o = li(e, t, n);
  if (i > 0) {
    let r = li(e, t, 0.2) * 0.96;
    o = Math.max(o, uo(o, r, i * V(-0.1, 0.25, n)));
  }
  return o + r + a * V(1, 2, n);
}
const wo = [
    0.468, 0.492, 0.515, 0.54, 0.568, 0.598, 0.63, 0.665, 0.7, 0.735, 0.768,
    0.795, 0.818, 0.836, 0.853,
  ],
  To = [0.468, 0.5, 0.56, 0.625, 0.69, 0.76, 0.81, 0.853],
  Eo = [
    -0.2, -0.06, 0.12, 0.38, 0.65, 0.86, 0.97, 1.08, 1.25, 1.5, 1.75, 1.93, 2,
  ],
  Do = [-0.2, 0.1, 0.6, 0.95, 1.1, 1.6, 2],
  Oo = [
    -0.16, -0.02, 0.18, 0.42, 0.66, 0.86, 0.97, 1.08, 1.25, 1.5, 1.75, 1.93, 2,
  ],
  ko = [-0.16, 0.2, 0.7, 0.95, 1.1, 1.6, 2];
function Ao(e, t, n, r) {
  let i = [t];
  for (let a of e) a > t + r && a < n - r && i.push(a);
  return (i.push(n), i);
}
function jo(e, t, n, r = 0, i = 0) {
  let a = [];
  return (
    t && a.push({ p: e[0], k: 0 }),
    e.forEach((t, n) =>
      a.push({
        p: t,
        k: 1,
        tight:
          (n === 0 && r) || (r && t < e[0] + 0.03)
            ? r
            : i && t > e[e.length - 1] - 0.03
              ? i
              : 0,
      }),
    ),
    n && a.push({ p: e[e.length - 1], k: 0 }),
    a
  );
}
function Mo(e, t) {
  let n = e.b,
    r = t.thetas.length - 1,
    i = t.rows.length - 1,
    a = t.rows[0].p,
    o = t.rows[i].p,
    s = (e) => t.thetas[Math.round(e * r)],
    c = (e, n) => {
      let r = t.rows[Math.round(n * i)];
      if (!t.yLo || !t.yHi) return r.p;
      let c = s(e),
        l = o > a ? (r.p - a) / (o - a) : 0;
      return uo(t.yLo(c), t.yHi(c), l);
    };
  return (
    e.m.grid(
      {
        nu: r,
        nv: i,
        closed: !1,
        point: (e, a, o) => {
          let s = Math.round(e * r),
            l = Math.round(a * i),
            u = t.thetas[s],
            d = c(e, a),
            f = t.rows[l],
            p = f.k * (t.colK ? t.colK[s] : 1),
            m = t.R(u, d) + (t.bump ? t.bump(u, d) : 0) - (f.tight ?? 0),
            h = p >= 1 ? m : uo(t.Ru(u, d), m, p);
          return o.set(Math.sin(u) * h, d, H(n, d) - Math.cos(u) * h);
        },
        invert: !0,
      },
      t.attrs,
    ),
    { th: s, yy: c, nu: r, nv: i }
  );
}
const No = new N(),
  Po = new N(),
  Fo = new N(),
  Io = new N();
function Lo(e, t, n) {
  let r = t.rows.length - 1;
  e.m.grid(
    {
      nu: n,
      nv: r,
      closed: !0,
      cap0: t.rows[0].p <= t.limb.tMin + 1e-6 && t.limb.bones[0] !== R.hips,
      point: (e, n, i) => {
        let a = t.rows[Math.round(n * r)],
          o = e * X,
          s = t.R(o, a.p) - (a.tight ?? 0),
          c = a.k >= 1 ? s : uo(t.Ru(o, a.p), s, a.k);
        return (
          ci(t.limb, a.p, No, Po, Fo, Io),
          i
            .copy(No)
            .addScaledVector(Io, Math.sin(o) * c)
            .addScaledVector(Fo, Math.cos(o) * c)
        );
      },
    },
    t.attrs,
  );
}
function Ro(e, t) {
  if (e.rect)
    return { rect: e.rect, mode: 1, uv: (e, n, r, i, a, o) => t(i, a, o) };
}
