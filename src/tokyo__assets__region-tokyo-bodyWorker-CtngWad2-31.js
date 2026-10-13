// tokyo__assets__region-tokyo-bodyWorker-CtngWad2 31 — math
// Lines 11235-11535 of readable/tokyo__assets__region-tokyo-bodyWorker-CtngWad2.pretty.js (statement-aligned).
function ea(e) {
  return (
    (0.299 * ((e >> 16) & 255) + 0.587 * ((e >> 8) & 255) + 0.114 * (e & 255)) /
    255
  );
}
function ta(e, t, n, r, i, a, o, s, c, l) {
  let u = e.b,
    d = Math.max(2, Math.ceil(r / 0.2)),
    f = Math.max(2, Math.ceil((a - i) / 0.09));
  e.m.grid(
    {
      nu: d,
      nv: f,
      closed: !1,
      point: (e, o, s) => {
        let c = n + (e - 0.5) * r,
          l = Ei(i, a, o),
          d = t(c, l) + 0.0016;
        return s.set(Math.sin(c) * d, l, q(u, l) - Math.cos(c) * d);
      },
      invert: !0,
    },
    {
      color: 16777215,
      skin: (e, t, i, a, o, s) => Yr(u, n + (a - 0.5) * r, t, s),
      kind: s,
      rough: c,
      tex: {
        rect: o,
        mode: l,
        uv: (e, t, n, r, i, a) => ((a[0] = 1 - r), (a[1] = i)),
      },
    },
  );
}
function na(e, t, n, r, i) {
  let a = e.b,
    o = e.nT;
  e.m.grid(
    {
      nu: o,
      nv: 1,
      closed: !0,
      point: (e, i, o) => {
        let s = e * Z,
          c = n + (i - 0.5) * r,
          l = t(s, c) + 0.0015;
        return o.set(Math.sin(s) * l, c, q(a, c) - Math.cos(s) * l);
      },
      invert: !0,
    },
    {
      color: i,
      skin: (e, t, n, r, i, o) => Yr(a, r * Z, t, o),
      kind: V.reflect,
      rough: 0.4,
      emissive: 1,
    },
  );
}
function ra(e, t, n, r) {
  let i = e.b,
    a = 0.032 * i.s;
  e.m.grid(
    {
      nu: e.nT,
      nv: 3,
      closed: !0,
      point: (e, n, o) => {
        let s = e * Z,
          c = Math.round(n * 3),
          l = t + (c < 2 ? -0.5 : 0.5) * a,
          u = J(i, s, l, !0) + r + (c === 0 || c === 3 ? 0 : 0.004);
        return o.set(Math.sin(s) * u, l, q(i, l) - Math.cos(s) * u);
      },
      invert: !0,
    },
    {
      color: n,
      skin: (e, t, n, r, a, o) => Yr(i, r * Z, t, o),
      kind: V.gloss,
      rough: 0.45,
    },
  );
  let o = J(i, 0, t, !0) + r + 0.006,
    s = new Ot(0.045 * i.s, a * 1.15, 0.006);
  e.m.geo(s, new ye().makeTranslation(0, t, q(i, t) - o), {
    color: 13157044,
    skin: z.hips,
    kind: V.metal,
    rough: 0.3,
  });
}
function ia(e, t, n, r, i, a, o) {
  let s = e.b,
    c = s.H,
    l = e.lod === 0 ? 16 : 8;
  if (t === `crew` || t === `rib` || t === `high`) {
    let r = t === `high` ? 0.05 * s.s : 0.012 * s.s,
      c = yi(e, n.rib || t !== `crew` ? o : a, a, !1);
    e.m.grid(
      {
        nu: l,
        nv: 2,
        closed: !0,
        point: (e, n, a) => {
          let o = e * Z - Math.PI,
            c = i(o),
            l = Math.round(n * 2),
            u = c + (l === 0 ? -0.004 : l === 1 ? r * 0.6 : r),
            d =
              (t === `high`
                ? Math.max(s.neckR * 1.18, J(s, o, c) * 0.9)
                : J(s, o, c)) +
              (t === `high` ? 0.008 : 0.004) +
              (l === 2 ? -0.001 : 0.002);
          return a.set(Math.sin(o) * d, u, q(s, c) - Math.cos(o) * d);
        },
        invert: !0,
      },
      {
        color: n.rib || t !== `crew` ? o : X(a, 0.94),
        skin: (e, t, n, r, i, a) => Yr(s, r * Z - Math.PI, t, a),
        kind: V.cloth,
        rough: 0.9,
        tex: c
          ? {
              rect: c,
              mode: 1,
              uv: (e, t, n, r, i, a) => ((a[0] = r * 6), (a[1] = i)),
            }
          : void 0,
      },
    );
    return;
  }
  if (t === `shirt` || t === `polo`) {
    let o = (t === `polo` ? 0.022 : 0.028) * s.s,
      u = (t === `polo` ? 0.034 : 0.04) * s.s,
      d = 0.16,
      f = l,
      p = t === `polo` && n.color2 !== n.color ? n.color2 : a;
    e.m.grid(
      {
        nu: f,
        nv: 3,
        closed: !1,
        point: (e, t, n) => {
          let a = d + e * (Z - 2 * d) - 0,
            l = Di(a, 0),
            f = Math.max(0, Math.cos(l)),
            p = i(l) + 0.002,
            m = Math.max(s.neckR + 0.006, J(s, l, p) * 0.92),
            h = Math.round(t * 3),
            g = m,
            _ = p;
          if (h === 1) ((_ = p + o), (g = m + 0.002));
          else if (h === 2) ((_ = p + o + 0.004), (g = m + 0.009));
          else if (h === 3) {
            let e = Q(Math.abs(l) - d, 0.25);
            ((_ = p + o - u * (1 + 0.8 * e) + 0.004),
              (g = r(l, Math.max(_, 0.78 * c)) + 0.004 + 0.012 * f));
          }
          return n.set(Math.sin(l) * g, _, q(s, p) - Math.cos(l) * g);
        },
        invert: !1,
      },
      {
        color: (e, t, n, r, i, a) =>
          a.setHex(Math.round(i * 3) === 0 ? X(p, 0.8) : p),
        skin: (e, t, n, r, i, a) => {
          (Yr(s, Di(d + r * (Z - 2 * d), 0), t, a), jn(a, z.neck, 0.3));
        },
        kind: V.cloth,
        rough: 0.85,
      },
    );
    return;
  }
  t === `hood` && aa(e, n, r, i, a);
}
function aa(e, t, n, r, i) {
  let a = e.b,
    o = e.lod === 0 ? 14 : 7,
    s = e.lod === 0 ? 8 : 4,
    c = X(i, 0.7);
  if (
    (e.m.grid(
      {
        nu: o,
        nv: s,
        closed: !0,
        point: (e, t, n) => {
          let i = t * 2 - 1,
            o = Math.PI + i * 2.3 * 0.5,
            s = Math.cos(i * Math.PI * 0.5),
            c = r(o) + 0.004,
            l = (0.018 + 0.038 * s) * a.s,
            u = e * Z,
            d =
              Math.max(a.neckR + 0.02, J(a, o, c) * 0.95) +
              l * 0.9 +
              Math.cos(u) * l,
            f = c + Math.sin(u) * l * 0.55 - s * 0.03 * a.s;
          return n.set(Math.sin(o) * d, f, q(a, c) - Math.cos(o) * d);
        },
      },
      {
        color: (e, t, n, r, a, o) => o.setHex(r < 0.25 ? c : i),
        skin: (e, t, n, r, i, a) => {
          H(a, z.chest, z.neck, 0.25);
        },
        kind: V.cloth,
        rough: 0.92,
      },
    ),
    e.lod === 0)
  )
    for (let t of [-1, 1]) {
      let i = t * 0.28,
        o = r(i) - 0.005,
        s = n(i, o) + 0.004,
        c = 0.16 * a.s,
        l = new At(0.0022, 0.0022, c, 4, 1, !1),
        u = new ye().makeTranslation(
          Math.sin(i) * s,
          o - c / 2,
          q(a, o) - Math.cos(i) * s - 0.004,
        );
      e.m.geo(l, u, {
        color: 15855592,
        skin: z.chest,
        kind: V.cloth,
        rough: 0.8,
      });
    }
}
function oa(e, t, n) {
  let r = e.b,
    i = e.lod === 0 ? 16 : 8;
  if (t.collar === `rib` || t.collar === `high`) {
    let n = (t.collar === `high` ? 0.055 : 0.028) * r.s,
      a = t.gap > 0 ? t.gap + 0.08 : 0;
    e.m.grid(
      {
        nu: i,
        nv: 2,
        closed: a === 0,
        point: (e, i, o) => {
          let s = a + e * (Z - 2 * a),
            c = Math.round(i * 2),
            l = t.neckY - 0.01,
            u = l + (c === 0 ? 0 : c === 1 ? n * 0.6 : n),
            d =
              Math.max(r.neckR + 0.012, J(r, s, l) * 0.95) +
              (c === 0 ? 0.012 : 0.009) +
              t.off * 0.4;
          return o.set(Math.sin(s) * d, u, q(r, l) - Math.cos(s) * d);
        },
        invert: !0,
      },
      {
        color: t.color2,
        skin: (e, t, n, r, i, a) => (H(a, z.chest, z.neck, 0.35), void 0),
        kind: V.cloth,
        rough: 0.85,
      },
    );
    return;
  }
  if (t.collar === `lapel` || t.collar === `v`) {
    let i = r.H;
    for (let a of [-1, 1])
      e.m.grid(
        {
          nu: 1,
          nv: 4,
          closed: !1,
          point: (e, o, s) => {
            let c = Ei(0.66 * i, t.neckY + 0.005, o),
              l = t.gap + 0.35 * U(0.66 * i, 0.83 * i, c),
              u =
                t.collar === `lapel`
                  ? (0.06 + 0.4 * Math.sin(o * Math.PI * 0.85)) * 0.5
                  : 0.08,
              d = a * (l + e * u),
              f = n(d, c) + 0.004 + 0.003 * (1 - e);
            return s.set(Math.sin(d) * f, c, q(r, c) - Math.cos(d) * f);
          },
          invert: a > 0,
        },
        {
          color: X(t.color, 0.92),
          skin: (e, t, n, i, o, s) => Yr(r, a * 0.4, t, s),
          kind: V.cloth,
          rough: 0.8,
        },
      );
  }
}
