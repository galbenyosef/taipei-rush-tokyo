// tokyo/assets/region-tokyo-A7LxHjud 296 — col
// Lines 108222-108399 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* dEe(e, t) {
  let [n, r] = oW(t.plan, `omote-terrace`),
    i = -n + OW.dj,
    a = n - i,
    o = -r + 0.4,
    s = -r - 0.5;
  uW(e, t, sW.terraceBack, 18, 12236719, $Te(t, sW.terraceBack));
  let c = 12170926,
    l = t.c(`glass`),
    u = [];
  for (let e = 0; e < OW.nSeg; e++) {
    let n = i + (a * e) / OW.nSeg,
      r = i + (a * (e + 1)) / OW.nSeg;
    u.push([n, r, Math.max(0, pW(t, r - 0.3, s))]);
  }
  let d = OW.h,
    f = d - 2.6;
  for (let a = 0; a < u.length; a++) {
    let [p, m, h] = u[a],
      g = e.sub(0, h, 0, 0);
    if (
      (e.col(c).mat(0.85, 0, 0, 0),
      e.panel(p, r, m, r, 0, d),
      e.col(11779521).mat(0.15, 0.45, 0.05, G),
      e.wall(m, o, p, o, OW.g0, f, l, e.coarse ? 12 : 6, OW.fl),
      e.col(13223615).mat(0.8, 0, 0.18, 1),
      e.flat(p, o, m, o + OW.shopIn, OW.g0, e.white, 0, 0, !1),
      e.coarse)
    )
      (e.col(15258278).mat(0.4, 0, 0.35, 1),
        e.panel(m, o + OW.shopIn, p, o + OW.shopIn, 0, OW.g0));
    else
      for (let n = 0; n < 2; n++) {
        let r = p + ((m - p) * n) / 2,
          i = p + ((m - p) * (n + 1)) / 2,
          a = Math.max(0, mW(t, r, i, s) - h);
        (e.push().col(16777215).mat(0.3, 0.2, 0.4, G),
          e.wall(
            i,
            o + OW.shopIn,
            r,
            o + OW.shopIn,
            a,
            OW.g0,
            t.c(`doors`),
            2.4,
            OW.g0 - a,
          ),
          e.pop(),
          a > 0.04 &&
            (e.col(9341572).mat(0.85, 0, 0, 0),
            e.panel(i, o, r, o, 0, a - 0.01),
            e.flat(r, o, i, o + OW.shopIn - 0.02, a - 0.01)));
      }
    if (
      (e.col(11121591).mat(0.15, 0.45, 0.05, G),
      e.wall(m, o + 1.6, p, o + 1.6, f, d, l, e.coarse ? 12 : 6, 2.6),
      e.col(13685458).mat(0.4, 0.6, 0, 0),
      e.flat(p, o, m, o + 1.6, f),
      e.col(6982222).mat(0.95, 0, 0, 0),
      e.flat(p, o + 1.6, m, r, d),
      !e.coarse)
    ) {
      (e.col(5206073).mat(0.95, 0, 0, 0),
        e.box(p + 0.4, f, o + 0.15, m - 0.4, f + 0.75, o + 0.9),
        e.col(13488336).mat(0.35, 0.7, 0.05, 1));
      let t = (t, n) => {
        (e.panel(m, o - 0.35, p, o - 0.35, t, n),
          e.flat(p, o - 0.35, m, o - 0.01, n),
          e.flat(p, o - 0.35, m, o - 0.01, t, e.white, 0, 0, !1));
      };
      for (let e = OW.g0; e < f - 1; e += OW.fl) t(e - 0.18, e + 0.18);
      t(f - 0.25, f);
    }
    let _ = a > 0 ? u[a - 1][2] - h : 0;
    (e.col(c).mat(0.85, 0, 0, 0),
      e.box(p - 0.45, 0, o - 0.45, p + 0.45, d + _ + 0.3, o + 1.8),
      _ > 0.02 &&
        (e.panel(p, r, p, o + 1.6, d, d + _),
        e.panel(p, o + 1.6, p, o, f, f + _)),
      a === u.length - 1 && e.box(n - 0.9, 0, o - 0.45, n, d + 0.3, r),
      a === 0 &&
        (e.col(10986653).mat(0.85, 0, 0, 0), e.panel(i, o + 1.6, i, r, f, d)),
      e.solid(p, o, m, r, 0, d),
      e.leave(g),
      a % 2 && (yield));
  }
  let p = e.sub(0, Math.max(0, pW(t, i - 0.3, s)), 0, 0);
  if (e.coarse) {
    (kW(e, n, r), e.leave(p));
    return;
  }
  e.leave(p);
  let m = u[2],
    h = e.sub(0, m[2], 0, 0);
  (fW(
    e,
    `表参道ヒルズ`,
    (m[0] + m[1]) / 2,
    OW.g0 + 0.32,
    o - 0.4,
    RB,
    0.75,
    15921902,
    0.8,
  ),
    e.leave(h),
    yield);
  let g = e.sub(0, Math.max(0, pW(t, i - 0.3, s)), 0, 0),
    _ = -n,
    v = i,
    y = -r,
    b = -r + OW.djD;
  (e.col(13287337).mat(0.9, 0, 0, 0),
    e.box(_, 0, y, v - 0.02, OW.djH, b),
    e.col(12037012).mat(0.9, 0, 0, 0),
    e.box(_ - 0, OW.djH, y - 0.25, v - 0.02, OW.djH + 0.45, b));
  for (let t = 0; t < 3; t++) {
    let n = t === 0 ? 0.6 : 0.9 + t * 3.4,
      r = t === 0 ? 3 : n + 1.7;
    for (let i = 0; i < 4; i++) {
      let a = v - 1.4 - i * 2.45,
        o = t === 0 ? 1 : 0.55;
      (e.col(4866104).mat(0.6, 0, 0, 0),
        e.panel(
          a + o + 0.12,
          y - 0.03,
          a - o - 0.12,
          y - 0.03,
          n - 0.12,
          r + 0.12,
        ),
        e.col(15255692).mat(0.3, 0.1, 0.45, 1),
        e.panel(a + o, y - 0.05, a - o, y - 0.05, n, r));
    }
  }
  (e.col(4679738).mat(0.95, 0, 0, 0),
    e.panel(_ + 4.1, y - 0.08, _, y - 0.08, 3.6, OW.djH - 0.2),
    e.panel(_ - 0.03, y - 0.04, _ - 0.03, y + 6, 0.2, OW.djH - 1.5),
    e.panel(v - 4.5, y - 0.08, v - 5.8, y - 0.08, 0.2, 8.5),
    e.solid(_, y, v, b, 0, OW.djH),
    e.col(c).mat(0.85, 0, 0, 0),
    e.box(_, 0, b, v, f, r),
    e.solid(_, b, v, r, 0, f),
    e.leave(g));
}
function kW(e, t, n) {
  (e.col(13287337).mat(0.9, 0, 0, 0),
    e.box(-t, 0, -n, -t + OW.dj - 0.02, OW.djH, -n + OW.djD),
    e.col(12170926).mat(0.85, 0, 0, 0),
    e.box(-t, 0, -n + OW.djD, -t + OW.dj, OW.h - 2.6, n));
}
function fEe(e, t) {
  let [n, r] = oW(t.plan, `omote-terrace`),
    i = -n + OW.dj,
    a = (i + n) / 2,
    o = -r - 0.5;
  (e.col(11779521).mat(0.15, 0.45, 0.12, 1), e.box(a, 0, -r + 0.4, n, OW.h, r));
  let s = Math.max(0, pW(t, a, o));
  e.box(i, s, -r + 0.4, a, s + OW.h, r);
  let c = e.sub(0, Math.max(0, pW(t, i - 0.3, o)), 0, 0);
  (kW(e, n, r), e.leave(c));
}
var AW = {
    shop: 9.4,
    y0: 22,
    dy: 4.5,
    top: 44,
    low: 30,
    step: 30,
    entW: 5.5,
    entD: 4,
    entH: 6,
  },
  jW = [-5, -2.8, -0.6, 1.6, 3.2, 5, 6.8],
  MW = [3, 1, 0, -1, 0, 2],
  NW = jW[jW.length - 1],
  PW = 3;
