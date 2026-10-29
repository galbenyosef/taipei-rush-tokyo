// tokyo/assets/world-CVm1JHks 44 — math
// Lines 13926-14262 of readable/tokyo/assets/world-CVm1JHks.pretty.js (statement-aligned).
function ad(e, t, n = {}) {
  let r = n.inset ?? 0,
    i = n.low ?? 0,
    a = n.detail === `mid`,
    o = Math.max(0.1, t.w / 2 - r),
    s = Math.max(0.1, t.d / 2 - r),
    c = n.plain ? `flat` : (t.roof ?? `flat`),
    l = Math.max(0.2, t.h + (n.plain ? td(t) * 0.65 : 0)),
    u = t.y ?? 0,
    d = Gu(t.mat, t.color, l);
  if (
    (e.push(),
    e.translate(t.x, u, t.z),
    t.rot && e.rotateY(t.rot),
    e.setPaint(d),
    c === `flat`)
  ) {
    let n = l - i,
      r = o,
      c = s;
    if (
      (e.box(-r, 0, -c, r, n, c, 55, Ku(t.mat, t.color), -u),
      a && t.mat !== `green` && n > 3)
    ) {
      let t = 0.25,
        i = n + 0.7;
      (e.box(-r, n, -c, r, i, -c + t, 55, void 0, -u),
        e.box(-r, n, c - t, r, i, c, 55, void 0, -u),
        e.box(-r, n, -c + t, -r + t, i, c - t, 55, void 0, -u),
        e.box(r - t, n, -c + t, r, i, c - t, 55, void 0, -u));
    }
  } else {
    let n = td(t),
      a = l;
    e.box(-o, 0, -s, o, a, s, 51, void 0, -u);
    let f = qu(c),
      p = o,
      m = s;
    if (
      (e.push(),
      s > o && (e.rotateY(Math.PI / 2), (p = s), (m = o)),
      c === `gable`)
    ) {
      let t = 0.4 + r,
        o = a + n - i,
        s = -p - t,
        c = p + t,
        l = -m - t,
        u = m + t;
      (e.quad([c, a, l], [s, a, l], [s, o, 0], [c, o, 0], 0, 0, f),
        e.quad([s, a, u], [c, a, u], [c, o, 0], [s, o, 0], 0, 0, f),
        Qu(e, [p, a, m], [p, a, -m], [p, o, 0], d),
        Qu(e, [-p, a, -m], [-p, a, m], [-p, o, 0], d),
        e.quad([s, a, l], [c, a, l], [c, a, u], [s, a, u], 0, 0, Xu()));
    } else if (c === `hip`) {
      let t = 0.6 + r,
        o = { hx: p + t, hz: m + t, y: a };
      ($u(e, o, { hx: Math.max(0, o.hx - o.hz), hz: 0, y: a + n - i }, f),
        ed(e, o, 0.22));
    } else {
      let t = 1 + r,
        o = { hx: p + t, hz: m + t, y: a },
        s = { hx: o.hx - o.hz * 0.3, hz: o.hz * 0.68, y: a + n * 0.24 },
        c = a + n - i,
        l = Math.max(0.5, o.hx - o.hz * 0.95),
        u = { hx: l, hz: 0, y: c };
      ($u(e, o, s, f), $u(e, s, u, f), ed(e, o, 0.3));
      let h = Math.max(0.3, Math.min(0.5, n * 0.1)),
        g = Math.max(0.4, Math.min(0.9, n * 0.16));
      (e.setPaint(Ju()), e.box(-l, c - 0.15, -h / 2, l, c + g, h / 2));
      for (let t of [-1, 1]) {
        (e.push(), e.translate(t * l, c + g * 0.5, 0), e.rotateZ(t * 0.45));
        let r = Math.max(0.8, Math.min(2.2, n * 0.35));
        (e.box(t > 0 ? 0 : -r, -g * 0.5, -h / 2, t > 0 ? r : 0, g * 0.5, h / 2),
          e.pop());
      }
      e.setPaint(d);
    }
    (e.pop(), e.setPaint(d));
  }
  if (a && t.mat !== `green` && t.mat !== `glass` && l > 2.5) {
    let t = 0.06;
    (e.setPaint(Zu()),
      e.box(
        -o - t,
        0,
        -s - t,
        o + t,
        Math.min(0.9, l * 0.25),
        s + t,
        55,
        void 0,
        -u,
      ));
  }
  e.pop();
}
function od(e, t, n = `mid`) {
  for (let r of t)
    ad(e, r, {
      inset: n === `far` ? Lu : 0,
      low: n === `far` ? Ru : 0,
      detail: n,
    });
}
var sd = {
  wall: () =>
    Uu(`gap-wall`, () =>
      Y(13222322, X.CONCRETE, { su: 3, sv: 3, rough: 0.85 }),
    ),
  coping: () =>
    Uu(`gap-coping`, () => Y(9275520, X.GRANITE, { su: 2, sv: 2, rough: 0.6 })),
  planter: () =>
    Uu(`gap-planter`, () =>
      Y(10721932, X.SMALL_TILE, { su: 1.5, sv: 1.5, rough: 0.6 }),
    ),
  soil: () =>
    Uu(`gap-soil`, () => Y(4864556, X.GRAVEL, { su: 2, sv: 2, rough: 1 })),
  shrub: () =>
    Uu(`gap-shrub`, () => Y(5208634, X.LEAVES, { su: 2, sv: 2, rough: 0.95 })),
  shrub2: () =>
    Uu(`gap-shrub2`, () => Y(6983493, X.LEAVES, { su: 2, sv: 2, rough: 0.95 })),
  tin: () =>
    Uu(`gap-tin`, () =>
      Y(12041404, X.CORRUGATED, { su: 1.2, sv: 1.2, rough: 0.5, metal: 0.4 }),
    ),
  tinRoof: () =>
    Uu(`gap-tinroof`, () =>
      Y(6262696, X.CORRUGATED, { su: 1.2, sv: 1.2, rough: 0.5, metal: 0.4 }),
    ),
  party: () =>
    Uu(`gap-party`, () =>
      Y(11774618, X.CONCRETE, { su: 4, sv: 4, rough: 0.9 }),
    ),
};
function cd(e, t) {
  let { x0: n, z0: r, x1: i, z1: a, y0: o, y1: s } = t,
    c = i - n,
    l = a - r;
  switch (t.kind) {
    case `lowwall`:
      (e.setPaint(sd.wall()),
        e.box(n, o, r, i, s - 0.08, a, 55, void 0, o),
        e.setPaint(sd.coping()),
        e.box(n - 0.04, s - 0.08, r - 0.04, i + 0.04, s, a + 0.04, 63));
      break;
    case `planter`: {
      (e.setPaint(sd.planter()), e.box(n, o, r, i, s, a, 51, void 0, o));
      let u = Math.min(0.12, c * 0.2, l * 0.2);
      (e.setPaint(sd.soil()),
        e.box(n + u, o, r + u, i - u, s - 0.06, a - u, 4),
        e.setPaint(sd.planter()),
        e.box(n, s - 0.001, r, i, s, r + u, 4),
        e.box(n, s - 0.001, a - u, i, s, a, 4),
        e.box(n, s - 0.001, r + u, n + u, s, a - u, 4),
        e.box(i - u, s - 0.001, r + u, i, s, a - u, 4));
      let d = c >= l,
        f = d ? c : l,
        p = d ? l : c,
        m = Math.max(0.35, Math.min(0.8, p * 0.5)),
        h = Math.max(0.1, p - 2 * u - 0.08),
        g = Math.max(0.1, f - 2 * u - 0.08),
        _ = (t, o, c, l, u, f) => {
          (e.setPaint(f),
            d
              ? e.box(
                  n + t,
                  s - 0.06,
                  (r + a) / 2 - l,
                  n + o,
                  u,
                  (r + a) / 2 - c,
                  55,
                )
              : e.box(
                  (n + i) / 2 - l,
                  s - 0.06,
                  r + t,
                  (n + i) / 2 - c,
                  u,
                  r + o,
                  55,
                ));
        },
        v = (f - g) / 2;
      _(v, v + g, -h / 2, h / 2, s + m, sd.shrub());
      let y = Math.max(1, Math.min(3, Math.floor(g / 2.5)));
      for (let e = 0; e < y; e++) {
        let n = (e + 0.5) / y,
          r = Math.min(g / y, 1.6) * 0.8,
          i = h * 0.8,
          a = v + n * g,
          o = 0.15 + 0.2 * (((t.v * 97 + e * 37) % 10) / 10);
        _(a - r / 2, a + r / 2, -i / 2, i / 2, s + m + o, sd.shrub2());
      }
      break;
    }
    case `shed`: {
      let t = s - o;
      (e.setPaint(sd.tin()), e.box(n, o, r, i, s - 0.25, a, 51, void 0, o));
      let u = 0.25,
        d = Math.min(0.6, 0.08 * Math.max(c, l)),
        f = sd.tinRoof(),
        p = s - 0.25,
        m = s - 0.25 + d,
        h = sd.tin();
      if (
        (c >= l
          ? (e.quad(
              [i + u, p, a + u],
              [n - u, p, a + u],
              [n - u, m, r - u],
              [i + u, m, r - u],
              0,
              0,
              h,
            ),
            e.quad(
              [n - u, p, a + u],
              [i + u, p, a + u],
              [i + u, m, r - u],
              [n - u, m, r - u],
              0,
              0,
              f,
            ),
            Qu(e, [i, p, a], [i, p, r], [i, m, r], h),
            Qu(e, [n, p, r], [n, p, a], [n, m, r], h),
            e.quad([i, p, r], [n, p, r], [n, m, r], [i, m, r], 0, 0, h))
          : (e.quad(
              [i + u, p, r - u],
              [i + u, p, a + u],
              [n - u, m, a + u],
              [n - u, m, r - u],
              0,
              0,
              h,
            ),
            e.quad(
              [i + u, p, a + u],
              [i + u, p, r - u],
              [n - u, m, r - u],
              [n - u, m, a + u],
              0,
              0,
              f,
            ),
            Qu(e, [i, p, r], [n, p, r], [n, m, r], h),
            Qu(e, [n, p, a], [i, p, a], [n, m, a], h),
            e.quad([n, p, r], [n, p, a], [n, m, a], [n, m, r], 0, 0, h)),
        t > 4.5)
      ) {
        e.setPaint(
          Uu(`gap-win`, () =>
            Y(2961974, X.LIT, {
              rough: 0.3,
              metal: 0.3,
              er: 1,
              eg: 0.8,
              eb: 0.55,
              ei: 0.8,
              flags: at.WINDOWS,
              ex: 0.35,
            }),
          ),
        );
        let t = o + 2.4,
          c = Math.min(s - 0.8, t + 1.1);
        c > t + 0.4 &&
          (e.box(n + 0.6, t, r - 0.04, i - 0.6, c, r, 32),
          e.box(n + 0.6, t, a, i - 0.6, c, a + 0.04, 16));
      }
      break;
    }
    case `party`:
      (e.setPaint(sd.party()), e.box(n, o, r, i, s, a, 55, void 0, o));
  }
}
function ld(e, t) {
  let { x0: n, z0: r, x1: i, z1: a, y0: o, y1: s } = t;
  (e.setPaint(
    t.kind === `shed` ? sd.tin() : t.kind === `party` ? sd.party() : sd.wall(),
  ),
    e.box(n, o, r, i, s, a, 55, void 0, o));
}
function ud() {
  return typeof performance < `u` ? performance.now() : Date.now();
}
function dd(e, t) {
  let n = new Map();
  for (let t of e) {
    let e = `${Math.floor(t.x / 640)},${Math.floor(t.z / 640)}`,
      r = n.get(e);
    (r ||
      n.set(
        e,
        (r = {
          cx: 0,
          cz: 0,
          sites: [],
          gaps: [],
          mesh: null,
          orig: null,
          hiddenCount: 0,
          far: null,
          maxH: 0,
        }),
      ),
      r.sites.push(t));
  }
  let r = [...n.values()];
  for (let e of r)
    ((e.cx = e.sites.reduce((e, t) => e + t.x, 0) / e.sites.length),
      (e.cz = e.sites.reduce((e, t) => e + t.z, 0) / e.sites.length));
  for (; r.length > Iu;) {
    let e = 0,
      t = 1,
      n = 1 / 0;
    for (let i = 0; i < r.length; i++)
      for (let a = i + 1; a < r.length; a++) {
        let o = Math.hypot(r[i].cx - r[a].cx, r[i].cz - r[a].cz);
        o < n && ((n = o), (e = i), (t = a));
      }
    let i = r[e],
      a = r[t],
      o = i.sites.length,
      s = a.sites.length;
    ((i.cx = (i.cx * o + a.cx * s) / (o + s)),
      (i.cz = (i.cz * o + a.cz * s) / (o + s)),
      i.sites.push(...a.sites),
      r.splice(t, 1));
  }
  let i = new Map();
  for (let e of r) for (let t of e.sites) i.set(t.id, e);
  for (let e of t) i.get(e.site)?.gaps.push(e);
  return (r.sort((e, t) => e.cz - t.cz || e.cx - t.cx), r);
}
