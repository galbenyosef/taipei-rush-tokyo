// tokyo/assets/region-tokyo-sites-kit-CgUCzK9Y 04 — box
// Lines 982-1311 of readable/tokyo/assets/region-tokyo-sites-kit-CgUCzK9Y.pretty.js (statement-aligned).
function ne(e) {
  return e.site.tokyo?.exposed ?? { negX: !1, posX: !1, back: !1 };
}
var N = new Map();
function P(e, t = 0.85, r = 0) {
  let i = `${e}|${t}|${r}`,
    a = N.get(i);
  return (a || N.set(i, (a = n(e, 0, { rough: t, metal: r }))), a);
}
function F(n, r = 1.6, i = !1) {
  let a = `L${n}|${r}|${i}`,
    o = N.get(a);
  return (o || N.set(a, (o = t(n, r, 0, i ? { flags: e.ALWAYS } : {}))), o);
}
function I(n = 6980756) {
  let r = `W${n}`,
    i = N.get(r);
  return (
    i ||
      N.set(
        r,
        (i = t(n, 1.2, 0, {
          flags: e.WINDOWS,
          rough: 0.12,
          metal: 0.45,
          er: 1,
          eg: 0.85,
          eb: 0.62,
        })),
      ),
    i
  );
}
var L = {
  concrete: 12104875,
  concreteDark: 9341570,
  tileBeige: 14207920,
  tileBrown: 9071186,
  tileWhite: 15328990,
  mortar: 11051674,
  alu: 12896460,
  aluDark: 7106678,
  steel: 5922402,
  wood: 8016434,
  woodDark: 4861466,
  woodLight: 11568216,
  black: 1842206,
  glass: 3029572,
  shopWarm: 16047280,
  red: 13116956,
  vermilion: 14173482,
  stone: 10131084,
  asphalt: 4868684,
};
function* R(e, t) {
  let { w: n, d: r } = e.frame,
    i = t.inset ?? 0.18,
    a = -n / 2 + i,
    o = n / 2 - i,
    s = -r / 2 + 0.05,
    c = r / 2 - i,
    l = t.groundH ?? 4.2,
    u = t.floorH ?? 3.1,
    d = l + (t.floors - 1) * u,
    f = e.lm,
    p = P(t.wall, 0.9),
    m = P(t.trim ?? L.concreteDark, 0.85);
  (f.setPaint(p),
    f.box(a, l, s, o, d, c, 23),
    f.box(a, 0, s + (t.recess ?? 0) + 0.3, o, l, c, 19),
    f.setPaint(m),
    f.box(a, l - 0.35, s - 0.12, o, l + 0.05, s + 0.3),
    yield);
  let h = t.bays ?? Math.max(1, Math.round((o - a) / 3.2)),
    g = (o - a) / h,
    _ = t.windows ?? `grid`;
  for (let n = 1; n < t.floors; n++) {
    let r = l + (n - 1) * u,
      i = r + u;
    if (_ === `band`) {
      if (
        (f.setPaint(p),
        f.box(a, r, s, o, r + 0.95, s + 0.02, 32),
        f.box(a, i - 0.45, s, o, i, s + 0.02, 32),
        f.setPaint(I()),
        f.box(a + 0.1, r + 0.95, s + 0.12, o - 0.1, i - 0.45, s + 0.14, 32),
        t.tenants && e.rng.next() < 0.5)
      ) {
        let n = (e.rng.next() * h) | 0;
        X(
          e,
          t.tenants,
          (e.rng.next() * 8) | 0,
          4,
          2,
          a + n * g + 0.3,
          r + 1.15,
          a + (n + 1) * g - 0.3,
          i - 0.65,
          s + 0.11,
          0,
        );
      }
      f.setPaint(P(L.alu, 0.4, 0.6));
      for (let e = 0; e <= h; e++)
        f.box(
          a + e * g - 0.04,
          r + 0.95,
          s + 0.02,
          a + e * g + 0.04,
          i - 0.45,
          s + 0.12,
        );
    } else
      for (let o = 0; o < h; o++) {
        let c = a + o * g,
          l = c + g,
          u = c + g * 0.18,
          d = l - g * 0.18,
          h = r + 0.8,
          v = i - 0.5;
        (f.setPaint(p),
          f.box(c, r, s, l, h, s + 0.02, 32),
          f.box(c, v, s, l, i, s + 0.02, 32),
          f.box(c, h, s, u, v, s + 0.02, 32),
          f.box(d, h, s, l, v, s + 0.02, 32),
          f.setPaint(m),
          f.box(u, h, s, d, h + 0.04, s + 0.16, 4),
          f.setPaint(I()),
          f.box(u, h, s + 0.16, d, v, s + 0.18, 32),
          t.tenants &&
            e.rng.next() < 0.35 &&
            X(
              e,
              t.tenants,
              (e.rng.next() * 8) | 0,
              4,
              2,
              u + 0.08,
              h + (v - h) * 0.55,
              d - 0.08,
              v - 0.12,
              s + 0.15,
              0,
            ),
          f.setPaint(P(L.alu, 0.4, 0.6)),
          f.box(
            (u + d) / 2 - 0.03,
            h,
            s + 0.1,
            (u + d) / 2 + 0.03,
            v,
            s + 0.16,
          ),
          _ === `balcony`
            ? (f.setPaint(P(L.concrete, 0.9)),
              f.box(c + 0.05, r - 0.1, s - 0.9, l - 0.05, r + 0.05, s),
              f.setPaint(P(10133670, 0.5, 0.5)),
              f.box(c + 0.05, r + 0.05, s - 0.92, l - 0.05, r + 1.05, s - 0.86))
            : ((o * 7 + n * 3 + e.rng.next() * 4) | 0) % 5 == 0 &&
              z(e, (u + d) / 2 + g * 0.25, h - 0.62, s - 0.3));
      }
    n % 3 == 0 && (yield);
  }
  _ === `none` && (f.setPaint(p), f.box(a, l, s, o, d, s + 0.02, 32));
  let v = ne(e);
  for (let [e, n] of [
    [-1, v.negX],
    [1, v.posX],
  ]) {
    if (!n) continue;
    let r = e < 0 ? a : o,
      i = Math.max(1, Math.round((c - s - 1) / 3.4)),
      d = (c - s - 1) / i;
    for (let n = 1; n < t.floors; n++) {
      let t = l + (n - 1) * u;
      for (let n = 0; n < i; n++) {
        let i = s + 0.5 + n * d + d * 0.2,
          a = i + d * 0.6;
        (f.setPaint(m),
          f.box(
            Math.min(r, r + e * 0.1),
            t + 0.75,
            i - 0.06,
            Math.max(r, r + e * 0.1),
            t + u - 0.45,
            a + 0.06,
          ),
          f.setPaint(I()),
          f.box(
            Math.min(r, r + e * 0.12),
            t + 0.8,
            i,
            Math.max(r, r + e * 0.12),
            t + u - 0.5,
            a,
            e < 0 ? 2 : 1,
          ));
      }
    }
    (f.setPaint(m),
      f.box(
        Math.min(r, r + e * 0.06),
        0,
        s + 0.5,
        Math.max(r, r + e * 0.06),
        0.9,
        c - 0.3,
        e < 0 ? 2 : 1,
      ));
  }
  if (
    (f.setPaint(m),
    f.box(a - 0.05, d, s - 0.05, o + 0.05, d + 0.9, s + 0.2),
    f.box(a - 0.05, d, c - 0.2, o + 0.05, d + 0.9, c + 0.05),
    f.box(a - 0.05, d, s, a + 0.2, d + 0.9, c),
    f.box(o - 0.2, d, s, o + 0.05, d + 0.9, c),
    t.roof !== !1 && e.q === `high`)
  ) {
    (f.setPaint(P(14210252, 0.6, 0.1)),
      f.cylinder(a + (o - a) * 0.3, (s + c) / 2, 0.9, 0.9, d, d + 2.2, 10),
      f.setPaint(P(L.steel, 0.5, 0.6)),
      f.box(
        a + (o - a) * 0.3 - 0.9,
        d,
        (s + c) / 2 - 0.9,
        a + (o - a) * 0.3 + 0.9,
        d + 0.3,
        (s + c) / 2 + 0.9,
      ));
    for (let t = 0; t < 3; t++)
      z(e, a + (o - a) * (0.55 + t * 0.12), d + 0.35, c - 1.5 - t * 0.3, !0);
  }
  return (yield, { front: s, x0: a, x1: o, top: d, groundH: l, floorH: u });
}
function* re(e) {
  let t = e.lm,
    n = -e.frame.d / 2;
  for (let r of e.meta.proxy) {
    let e = r.x - r.w / 2,
      i = r.x + r.w / 2,
      a = r.z - r.d / 2,
      o = r.z + r.d / 2,
      s = r.y ?? 0,
      c = s + r.h;
    if (
      (t.setPaint(P(r.color ?? 13157564, 0.9)),
      t.box(e, s, a, i, c, o),
      !(a - n > 1.5 || r.h < 5))
    ) {
      t.setPaint(I());
      for (let n = s + 4.6; n < c - 1.2; n += 3.1)
        t.box(e + 0.4, n, a - 0.04, i - 0.4, n + 1.4, a, 32);
      (t.setPaint(P(6973024, 0.8)),
        t.box(e - 0.05, c - 0.25, a - 0.06, i + 0.05, c + 0.6, a + 0.2));
    }
  }
  yield;
}
function z(e, t, n, r, i = !1) {
  let a = e.lm;
  (a.setPaint(P(15000284, 0.7)),
    a.box(t - 0.4, n, r - 0.15, t + 0.4, n + 0.6, r + 0.15),
    a.setPaint(P(5593180, 0.8)),
    a.cylinder(t - 0.08, r - 0.16, 0.2, 0.2, n + 0.3, n + 0.3, 8, !1),
    a.box(t - 0.3, n + 0.1, r - 0.17, t + 0.15, n + 0.5, r - 0.15, 32),
    i ||
      (a.setPaint(P(L.steel, 0.6, 0.5)),
      a.box(t - 0.42, n - 0.06, r - 0.18, t + 0.42, n, r + 0.18)));
}
function B(e, t) {
  let n = e.lm,
    r = e.art,
    i = t.depth ?? 2.4,
    a = t.z;
  (n.setPaint(P(t.post ?? L.black, 0.6, 0.2)),
    n.box(t.x0 - 0.18, 0, a - 0.04, t.x0, t.h + 0.2, a + 0.25),
    n.box(t.x1, 0, a - 0.04, t.x1 + 0.18, t.h + 0.2, a + 0.25),
    n.box(t.x0 - 0.18, t.h, a - 0.04, t.x1 + 0.18, t.h + 0.25, a + 0.25));
  let o = a + i;
  (t.backKey
    ? (r.tex(e.atlas.r(t.backKey), 16777215, 0.6),
      r.rectZ(t.x0, 0.05, t.x1, t.h, o, -1))
    : (r.col(t.light ?? L.shopWarm, 0.5, 0.8),
      r.rectZ(t.x0, 0.05, t.x1, t.h, o, -1)),
    r.col(t.light ?? L.shopWarm, 0.45, 0.75),
    r.rectX(a, 0, o, t.h, t.x0, 1),
    r.rectX(a, 0, o, t.h, t.x1, -1),
    r.col(t.floor ?? 9077880, 0),
    r.rectY(t.x0, a, t.x1, o, 0.03, 1),
    r.col(16773848, 0.9, 1.1),
    r.rectY(t.x0 + 0.3, a + 0.4, t.x1 - 0.3, o - 0.3, t.h - 0.02, -1),
    r.col(14209216, 0.3, 0.7),
    r.rectY(t.x0, a, t.x1, o, t.h, -1));
}
function V(e, t) {
  let n = e.lm,
    r = t.leaves ?? 2,
    i = (t.x1 - t.x0) / r,
    a = t.kind ?? `sash`;
  for (let e = 0; e < r; e++) {
    let o = t.x0 + e * i;
    t.open && e === r - 1 && (o -= i * 0.85);
    let s = o + i,
      c = t.z + (e % 2 ? 0.06 : 0),
      l = a === `lattice` ? P(L.woodDark, 0.7) : P(L.alu, 0.35, 0.7);
    if (
      (n.setPaint(l),
      n.box(o, 0, c, o + 0.06, t.h, c + 0.05),
      n.box(s - 0.06, 0, c, s, t.h, c + 0.05),
      n.box(o, t.h - 0.08, c, s, t.h, c + 0.05),
      n.box(o, 0, c, s, 0.12, c + 0.05),
      a === `lattice`)
    ) {
      for (let e = 1; e < 4; e++)
        n.box(
          o + (e * i) / 4 - 0.015,
          0.12,
          c,
          o + (e * i) / 4 + 0.015,
          t.h - 0.08,
          c + 0.04,
        );
      n.box(o, t.h * 0.55, c, s, t.h * 0.55 + 0.04, c + 0.04);
    }
    t.open ||
      (n.setPaint(P(3030084, 0.08, 0.5)),
      n.box(o + 0.06, 0.12, c + 0.02, s - 0.06, t.h - 0.08, c + 0.025, 32));
  }
}
