// tokyo/assets/world-CAmHK742 43 — math
// Lines 13543-13858 of readable/tokyo/assets/world-CAmHK742.pretty.js (statement-aligned).
function Ru(e, t, n) {
  let r = n >= 6.5;
  return Iu(`${e}|${t ?? -1}|${+!!r}`, () => {
    switch (e) {
      case `brick`:
        return r
          ? Y(t ?? 16777215, X.BRICK_RECT_WIN, {
              su: 4.2,
              sv: 3.6,
              rough: 0.8,
              flood: 0.6,
              ...Lu(1, 0.85, 0.6, 0.35),
            })
          : Y(t ?? 11034687, X.BRICK, {
              su: 1.1,
              sv: 1.1,
              rough: 0.85,
              flood: 0.5,
            });
      case `redbrick`:
        return r
          ? Y(t ?? 16777215, X.BRICK_ARCH_WIN, {
              su: 4.2,
              sv: 5.5,
              rough: 0.82,
              flood: 0.8,
              ...Lu(1, 0.82, 0.55, 0.45),
            })
          : Y(t ?? 12140846, X.BRICK, {
              su: 1.1,
              sv: 1.1,
              rough: 0.85,
              flood: 0.6,
            });
      case `concrete`:
        return r
          ? Y(t ?? 15789024, X.WIN_OFFICE, {
              su: 3.4,
              sv: 3.4,
              rough: 0.6,
              flood: 0.3,
              ...Lu(1, 0.95, 0.85, 0.5),
            })
          : Y(t ?? 12104358, X.CONCRETE, { su: 4, sv: 4 });
      case `tile`:
        return r
          ? Y(t ?? 15920868, X.WIN_HOTEL, {
              su: 2.8,
              sv: 3.2,
              rough: 0.6,
              flood: 0.3,
              ...Lu(1, 0.78, 0.5, 0.4),
            })
          : Y(t ?? 14275784, X.SMALL_TILE, { su: 2, sv: 2, rough: 0.5 });
      case `stone`:
        return Y(t ?? 15130576, X.STONE, {
          su: 2.5,
          sv: 1.2,
          rough: 0.65,
          flood: 0.9,
        });
      case `glass`:
        return Y(t ?? 16777215, X.GLASS_MALL, {
          su: 4,
          sv: 4,
          rough: 0.15,
          metal: 0.35,
          ...Lu(0.95, 0.9, 0.8, 0.55),
        });
      case `wood`:
        return Y(t ?? 12094042, X.WOOD, { su: 2, sv: 2, rough: 0.75 });
      case `white`:
        return r
          ? Y(t ?? 16182490, X.WIN_COLONIAL_WHITE, {
              su: 4,
              sv: 5,
              rough: 0.65,
              flood: 0.6,
              ...Lu(1, 0.88, 0.65, 0.5),
            })
          : Y(t ?? 15855076, X.PLAIN, { rough: 0.6, flood: 0.5 });
      case `green`:
        return Y(t ?? 5603391, X.LEAVES, { su: 3, sv: 3, rough: 0.95 });
      default:
        return Y(t ?? 13157046, X.CONCRETE, { su: 4, sv: 4 });
    }
  });
}
function zu(e, t) {
  return e === `green`
    ? Ru(`green`, t, 0)
    : e === `glass`
      ? Iu(`top-glass`, () =>
          Y(8227474, X.METAL_PANEL, { su: 3, sv: 3, rough: 0.4, metal: 0.4 }),
        )
      : Iu(`top-concrete`, () => Y(9407622, X.CONCRETE, { su: 6, sv: 6 }));
}
function Bu(e) {
  switch (e) {
    case `temple`:
      return Iu(`roof-temple`, () =>
        Y(13593148, X.ROOF_TILE, { su: 1.6, sv: 1.6, rough: 0.55, flood: 0.8 }),
      );
    case `hip`:
      return Iu(`roof-hip`, () =>
        Y(7235682, X.ROOF_TILE, { su: 1.6, sv: 1.6, rough: 0.7 }),
      );
    default:
      return Iu(`roof-gable`, () =>
        Y(10115909, X.ROOF_TILE, { su: 1.6, sv: 1.6, rough: 0.7 }),
      );
  }
}
var Vu = () =>
    Iu(`ridge-temple`, () => Y(12072234, X.PLAIN, { rough: 0.45, flood: 0.8 })),
  Hu = () => Iu(`fascia`, () => Y(3812904, X.PLAIN, { rough: 0.7 })),
  Uu = () =>
    Iu(`soffit`, () => Y(5982784, X.WOOD, { su: 2, sv: 2, rough: 0.8 })),
  Wu = () =>
    Iu(`plinth`, () => Y(9341572, X.GRANITE, { su: 2, sv: 2, rough: 0.6 }));
function Gu(e, t, n, r, i) {
  let a = n[0] - t[0],
    o = n[1] - t[1],
    s = n[2] - t[2],
    c = r[0] - t[0],
    l = r[1] - t[1],
    u = r[2] - t[2],
    d = o * u - s * l,
    f = s * c - a * u,
    p = a * l - o * c,
    m = Math.hypot(d, f, p) || 1;
  ((d /= m), (f /= m), (p /= m));
  let h = Math.abs(d) > Math.abs(p),
    g = (e) => (h ? e[2] : e[0]) / i.su,
    _ = e.vert(t[0], t[1], t[2], d, f, p, g(t), t[1] / i.sv, i);
  (e.vert(n[0], n[1], n[2], d, f, p, g(n), n[1] / i.sv, i),
    e.vert(r[0], r[1], r[2], d, f, p, g(r), r[1] / i.sv, i),
    e.tri(_, _ + 1, _ + 2));
}
function Ku(e, t, n, r) {
  (e.quad(
    [t.hx, t.y, -t.hz],
    [-t.hx, t.y, -t.hz],
    [-n.hx, n.y, -n.hz],
    [n.hx, n.y, -n.hz],
    0,
    0,
    r,
  ),
    e.quad(
      [-t.hx, t.y, t.hz],
      [t.hx, t.y, t.hz],
      [n.hx, n.y, n.hz],
      [-n.hx, n.y, n.hz],
      0,
      0,
      r,
    ),
    e.quad(
      [t.hx, t.y, t.hz],
      [t.hx, t.y, -t.hz],
      [n.hx, n.y, -n.hz],
      [n.hx, n.y, n.hz],
      0,
      0,
      r,
    ),
    e.quad(
      [-t.hx, t.y, -t.hz],
      [-t.hx, t.y, t.hz],
      [-n.hx, n.y, n.hz],
      [-n.hx, n.y, -n.hz],
      0,
      0,
      r,
    ));
}
function qu(e, t, n) {
  let r = t.y - n,
    i = t.y;
  e.quad(
    [-t.hx, i, -t.hz],
    [t.hx, i, -t.hz],
    [t.hx, i, t.hz],
    [-t.hx, i, t.hz],
    0,
    0,
    Uu(),
  );
  let a = Hu();
  (e.quad(
    [t.hx, r, -t.hz],
    [-t.hx, r, -t.hz],
    [-t.hx, i, -t.hz],
    [t.hx, i, -t.hz],
    0,
    0,
    a,
  ),
    e.quad(
      [-t.hx, r, t.hz],
      [t.hx, r, t.hz],
      [t.hx, i, t.hz],
      [-t.hx, i, t.hz],
      0,
      0,
      a,
    ),
    e.quad(
      [t.hx, r, t.hz],
      [t.hx, r, -t.hz],
      [t.hx, i, -t.hz],
      [t.hx, i, t.hz],
      0,
      0,
      a,
    ),
    e.quad(
      [-t.hx, r, -t.hz],
      [-t.hx, r, t.hz],
      [-t.hx, i, t.hz],
      [-t.hx, i, -t.hz],
      0,
      0,
      a,
    ));
}
function Ju(e) {
  return !e.roof || e.roof === `flat`
    ? 0
    : e.roofH === void 0
      ? Math.min(6, Math.max(1.2, Math.min(e.w, e.d) * 0.35))
      : Math.max(0, e.roofH);
}
function Yu(e) {
  return (e.y ?? 0) + e.h + (e.roof && e.roof !== `flat` ? Ju(e) : 0);
}
function Xu(e, t) {
  let { nx: n, nz: r, d0: i, half: a } = t;
  if (!(a > 0)) return null;
  let o = e.rot ?? 0,
    s = Math.cos(o),
    c = Math.sin(o),
    l = Math.abs(s * n - c * r),
    u = Math.abs(c * n + s * r),
    d = Math.max(0, e.w / 2),
    f = Math.max(0, e.d / 2),
    p = d * l + f * u,
    m = e.x * n + e.z * r + i;
  if (Math.abs(m) + p <= a + 1e-4) return null;
  let h = { ...e },
    g = Math.sign(m) * Math.max(0, Math.min(Math.abs(m), a - Math.min(p, a)));
  g !== m && ((h.x = e.x + (g - m) * n), (h.z = e.z + (g - m) * r), (m = g));
  let _ = Math.max(0, a - Math.abs(m));
  if (p > _ + 1e-4) {
    if (u <= 0.001)
      h.w = Math.min(e.w, Math.max(0.2, (2 * _) / Math.max(l, 0.001)));
    else if (l <= 0.001) h.d = Math.min(e.d, Math.max(0.2, (2 * _) / u));
    else {
      let t = Math.max(0.02, _ / p);
      ((h.w = Math.min(e.w, Math.max(0.2, e.w * t))),
        (h.d = Math.min(e.d, Math.max(0.2, e.d * t))));
    }
  }
  return h;
}
function Zu(e, t, n, r) {
  r.length = 0;
  let i = Math.cos(t.facing),
    a = Math.sin(t.facing),
    o = (e, t) => [e * i + t * a, -e * a + t * i];
  if (n.placement?.mode === `undercroft` && t.frontage) {
    let n = e.plan?.roads?.find((e) => e.index === t.frontage.roadIndex);
    if (n) {
      let e = Bi(n, ha) / 2,
        i = t.warnings.some((e) => e.includes(`undercroft-fallback`));
      if (e > 0 && !i) {
        let [i, a] = n.axis === `x` ? o(0, 1) : o(1, 0),
          s = n.axis === `x` ? t.z - n.at : t.x - n.at;
        r.push({
          nx: i,
          nz: a,
          d0: s,
          half: e,
          why: `the free median under road#${n.index}`,
        });
      }
    }
  }
  let s = 1 / 0,
    c = -1 / 0,
    l = 1 / 0,
    u = -1 / 0;
  for (let e of t.claims)
    (e.minX < s && (s = e.minX),
      e.maxX > c && (c = e.maxX),
      e.minZ < l && (l = e.minZ),
      e.maxZ > u && (u = e.maxZ));
  if (s > c) return;
  let [d, f] = o(1, 0);
  r.push({
    nx: d,
    nz: f,
    d0: t.x - (s + c) / 2,
    half: (c - s) / 2 + 0.6,
    why: `the site claim rect (X)`,
  });
  let [p, m] = o(0, 1);
  r.push({
    nx: p,
    nz: m,
    d0: t.z - (l + u) / 2,
    half: (u - l) / 2 + 0.6,
    why: `the site claim rect (Z)`,
  });
}
