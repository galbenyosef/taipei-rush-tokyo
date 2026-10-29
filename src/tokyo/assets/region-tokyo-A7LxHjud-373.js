// tokyo/assets/region-tokyo-A7LxHjud 373 — quad
// Lines 135643-135838 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function SNe(e, t, n, r, i, a, o) {
  let s = WQ(t, n, r),
    c = (e, n, r) => [
      s[0] + t.ux * e + t.rx * n,
      s[1] + r,
      s[2] + t.uz * e + t.rz * n,
    ],
    l = (t, n, r, i) => HQ(e, t, n, r, i, 0, -1, 0);
  (l(c(-a, -i, -o), c(a, -i, -o), c(a, i, -o), c(-a, i, -o)),
    l(c(-a, -i, -o), c(-a, -i, o), c(a, -i, o), c(a, -i, -o)),
    l(c(-a, i, -o), c(a, i, -o), c(a, i, o), c(-a, i, o)),
    l(c(-a, -i, -o), c(-a, i, -o), c(-a, i, o), c(-a, -i, o)),
    l(c(a, -i, -o), c(a, -i, o), c(a, i, o), c(a, i, -o)));
}
function r$(e, t, n) {
  let r = Ro.half + qo,
    i = zQ + Ro.coping,
    a = t.y + Ro.clear;
  if (i - a < 0.05) return;
  let o = t.ux * n,
    s = t.uz * n;
  (e.setMaterial(0.9, 0, 0, 0), RQ(e, 184, 182, 174));
  let c = (e, r, i) => [
    t.x + t.rx * e + t.ux * i * n,
    r,
    t.z + t.rz * e + t.uz * i * n,
  ];
  (VQ(e, c(-r, a, 0.02), c(r, a, 0.02), c(r, i, 0.02), c(-r, i, 0.02), o, 0, s),
    RQ(e, 160, 158, 150),
    VQ(
      e,
      c(-r - 0.2, i, 0.4),
      c(r + 0.2, i, 0.4),
      c(r + 0.2, i, -0.6),
      c(-r - 0.2, i, -0.6),
      0,
      1,
      0,
    ),
    RQ(e, 46, 64, 58),
    e.setMaterial(0.6, 0, 0.15, 0));
  let l = Math.min(i - 0.3, a + 1.9);
  l - a > 0.7 &&
    VQ(
      e,
      c(-4.5, a + 0.5, 0.05),
      c(4.5, a + 0.5, 0.05),
      c(4.5, l, 0.05),
      c(-4.5, l, 0.05),
      o,
      0,
      s,
    );
}
function i$(e, t) {
  let n = t.rz,
    r = -t.rx,
    i = (t.half ?? Ro.half) - 0.8,
    a = 0.8,
    o = t.top + 1.4,
    s = t.top,
    c = (e, i, a) => [t.x + t.rx * e + n * i, a, t.z + t.rz * e + r * i];
  (e.setMaterial(0.9, 0, 0, 0),
    RQ(e, 176, 174, 166),
    VQ(e, c(-i, a, s), c(i, a, s), c(i, a, o), c(-i, a, o), n, 0, r),
    VQ(
      e,
      c(i, -0.8, s),
      c(-i, -0.8, s),
      c(-i, -0.8, o),
      c(i, -0.8, o),
      -n,
      0,
      -r,
    ),
    VQ(e, c(-i, -0.8, s), c(i, -0.8, s), c(i, a, s), c(-i, a, s), 0, -1, 0),
    VQ(e, c(i, -0.8, s), c(i, -0.8, o), c(i, a, o), c(i, a, s), t.rx, 0, t.rz),
    VQ(
      e,
      c(-i, a, s),
      c(-i, a, o),
      c(-i, -0.8, o),
      c(-i, -0.8, s),
      -t.rx,
      0,
      -t.rz,
    ),
    RQ(e, 168, 166, 158));
  let l = 1.1,
    u = 1.25,
    d = (e, i, a, o) => [
      t.x + t.rx * e * o + n * i * o,
      a,
      t.z + t.rz * e * o + r * i * o,
    ],
    f = t.y0,
    p = s;
  (VQ(
    e,
    d(-1.1, l, f, 1),
    d(l, l, f, 1),
    d(l, l, p, u),
    d(-1.1, l, p, u),
    n,
    0,
    r,
  ),
    VQ(
      e,
      d(l, -1.1, f, 1),
      d(-1.1, -1.1, f, 1),
      d(-1.1, -1.1, p, u),
      d(l, -1.1, p, u),
      -n,
      0,
      -r,
    ),
    VQ(
      e,
      d(l, l, f, 1),
      d(l, -1.1, f, 1),
      d(l, -1.1, p, u),
      d(l, l, p, u),
      t.rx,
      0,
      t.rz,
    ),
    VQ(
      e,
      d(-1.1, -1.1, f, 1),
      d(-1.1, l, f, 1),
      d(-1.1, l, p, u),
      d(-1.1, -1.1, p, u),
      -t.rx,
      0,
      -t.rz,
    ));
}
var a$ = (function (e) {
    return (
      (e[(e.Road = 0)] = `Road`),
      (e[(e.Plaza = 1)] = `Plaza`),
      (e[(e.Sidewalk = 2)] = `Sidewalk`),
      (e[(e.Lot = 3)] = `Lot`),
      (e[(e.Park = 4)] = `Park`),
      (e[(e.Water = 5)] = `Water`),
      (e[(e.Outside = 6)] = `Outside`),
      (e[(e.Flush = 7)] = `Flush`),
      e
    );
  })(a$ || {}),
  CNe = -1.7;
function o$(e, t, n) {
  let r = e.surfaceAt(t, n);
  if (r !== `road` && r !== `crosswalk` && r !== `water`) {
    let e = ts(t, n);
    if (e && (r !== `sidewalk` || e.walk)) return a$.Outside;
  }
  switch (r) {
    case `road`:
    case `crosswalk`:
      return a$.Road;
    case `plaza`:
      return a$.Plaza;
    case `sidewalk`:
      return e.isFlush(t, n) ? a$.Flush : a$.Sidewalk;
    case `park`:
      return a$.Park;
    case `water`:
      return a$.Water;
    case `terrain`:
      return a$.Outside;
    default:
      return a$.Lot;
  }
}
function wNe(e, t, n, r, i, a) {
  e.quad(t, a, i, r, a, i, r, a, n, t, a, n);
}
function TNe(e, t, n, r, i, a, o) {
  o > 0
    ? e.quad(t, i, r, t, i, n, t, a, n, t, a, r)
    : e.quad(t, i, n, t, i, r, t, a, r, t, a, n);
}
function ENe(e, t, n, r, i, a, o) {
  o > 0
    ? e.quad(n, i, t, r, i, t, r, a, t, n, a, t)
    : e.quad(r, i, t, n, i, t, n, a, t, r, a, t);
}
var s$ = (e) => {
  e.sort((e, t) => e - t);
  let t = 0;
  for (let n = 0; n < e.length; n++)
    (t === 0 || e[n] - e[t - 1] > 0.05) && (e[t++] = e[n]);
  return ((e.length = t), e);
};
