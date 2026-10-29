// tokyo/assets/region-tokyo-A7LxHjud 247 — math
// Lines 93263-93465 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* ySe(e, t, n) {
  let r = new le(369889),
    i = EI,
    a = e.coarse ? 24 : 56,
    o = (i.x1 - i.x0) / 2,
    s = (i.z1 - i.z0) / 2,
    c = [];
  for (let e = 0; e < a; e++) {
    let t = (e / a) * Math.PI * 2;
    c.push(
      0.62 +
        0.1 * Math.sin(t * 3 + 0.7) +
        0.06 * Math.sin(t * 5 + 2.1) +
        (Math.cos(t) < -0.6 ? -0.08 : 0),
    );
  }
  let l = (e) => {
    let t = Math.cos(e),
      n = Math.sin(e),
      r = Math.min(
        o / Math.max(1e-6, Math.abs(t)),
        s / Math.max(1e-6, Math.abs(n)),
      );
    return [DI.x + t * r, DI.z + n * r];
  };
  e.col(7235152).mat(0.97, 0, 0, 0);
  let u = t.c(`lawn`);
  for (let t = 0; t < a; t++) {
    let n = (t + 1) % a,
      r = (t / a) * Math.PI * 2,
      i = (n / a) * Math.PI * 2,
      [o, s] = l(r),
      [d, f] = l(i),
      p = DI.x + (o - DI.x) * c[t],
      m = DI.z + (s - DI.z) * c[t],
      h = DI.x + (d - DI.x) * c[n],
      g = DI.z + (f - DI.z) * c[n],
      _ = (o + p) / 2,
      v = (s + m) / 2,
      y = (d + h) / 2,
      b = (f + g) / 2;
    (e.col(8227416).mat(0.97, 0, 0, 0),
      e.quad(o, MI, s, _, -0.68, v, y, -0.68, b, d, MI, f, u),
      e.col(6181954).mat(0.97, 0, 0, 0),
      e.quad(_, -0.68, v, p, -1.6, m, h, -1.6, g, y, -0.68, b));
  }
  yield;
  let d = (e, t) => {
      let n = Math.round((e / (Math.PI * 2)) * a) % a,
        [r, i] = l(e),
        o = c[(n + a) % a] + (1 - c[(n + a) % a]) * t;
      return [DI.x + (r - DI.x) * o, DI.z + (i - DI.z) * o];
    },
    f = e.coarse ? 0 : 16;
  for (let t = 0; t < f; t++) {
    let [n, i] = d((t / f) * Math.PI * 2 + r.range(-0.08, 0.08), 0.42),
      a = r.range(0.6, 1.4),
      o = r.range(0.35, 0.9);
    (e.col(9078138, r.range(0.8, 1.1)).mat(0.9, 0, 0, 0),
      e.lathe(
        n,
        i,
        [
          a,
          -0.9,
          a * 0.95,
          -0.75 + o * 0.8,
          a * 0.35,
          -0.62 + o * 1.2,
          0.02,
          -0.6 + o * 1.25,
        ],
        5,
        r.next() * 3,
      ));
  }
  let p = DI.x + 6,
    m = DI.z + 1.5;
  (e.col(6181954).mat(0.97, 0, 0, 0),
    e.lathe(
      p,
      m,
      [3.2, -1.5, 2.6, -0.7, 1.9, -0.4, 0.6, -0.25, 0.02, -0.2],
      e.seg(9),
      0.4,
    ),
    e.col(7306572).mat(0.97, 0, 0, 0),
    e.lathe(p, m, [2, -0.41, 1.2, -0.28, 0.02, -0.15], e.seg(9), 0.1));
  {
    let t = e.sub(p, -0.3, m, 0);
    (GC(e, 0, 0, 5.5, 47), e.leave(t));
  }
  let h = new le(28849),
    g = [];
  for (let e = 0; e <= 6; e++) {
    let t = e / 6;
    g.push([
      i.x0 + 2.2 + Math.sin(t * Math.PI) * 4.5 + h.range(-0.3, 0.3),
      i.z0 + 4 + t * (i.z1 - i.z0 - 8),
    ]);
  }
  e.col(10130570).mat(0.85, 0, 0, 0);
  for (let [t, n] of g) {
    let r = h.range(0.45, 0.6);
    (e.lathe(
      t,
      n,
      [r * 0.9, -1.2, r, -0.6, r * 0.95, -0.48, 0.02, -0.45],
      e.coarse ? 4 : 6,
      h.next(),
    ),
      e.floor(t - r * 0.7, n - r * 0.7, t + r * 0.7, n + r * 0.7, -0.45));
  }
  yield;
  let _ = new le(512691),
    v = [];
  for (let e = 0; e < 30; e++) {
    let t = e % 3,
      n = _.next() * Math.PI * 2,
      r = t === 0 ? _.range(0.8, 0.88) : t === 1 ? _.range(1.18, 1.6) : 0,
      a = t < 2 ? DI.x + 23 * r * Math.cos(n) : _.range(-668, -630),
      o = t < 2 ? DI.z + 21 * r * Math.sin(n) : _.range(-934, -900);
    if (a > i.x0 - 1.5 && a < i.x1 + 1.5 && o > i.z0 - 1.5 && o < i.z1 + 1.5)
      continue;
    let s = ((a - DI.x) / 23) ** 2 + ((o - DI.z) / 21) ** 2;
    if (
      (s > 0.88 && s < 1.14) ||
      a > -627 ||
      a < -669 ||
      o < -986 ||
      (a > -634 && o < -966) ||
      o > -890
    )
      continue;
    let c = s < 1.6,
      l = _.weighted(
        c
          ? [
              [`ever`, 3],
              [`broad`, 2],
              [`maple`, 3],
              [`pine`, 1],
            ]
          : [
              [`ever`, 3],
              [`broad`, 3],
              [`maple`, 1],
              [`pine`, 0.4],
            ],
      );
    v.push([a, o, l, _.range(12, 18), _.int(1, 1e6)]);
  }
  for (let [t, r, i, a, o] of v)
    if (i === `pine`) {
      let n = e.sub(t, 0, r, 0);
      (GC(e, 0, 0, a * 0.55, o), e.leave(n), e.pole(t, r, 0.35, 0, 3));
    } else
      i === `maple`
        ? eL(e, t, r, a * 0.5, n, lSe, o)
        : eL(e, t, r, a, n, i === `ever` ? null : HI, o);
}
function aL(e, t, n, r, i, a, o) {
  let s = t.c(`office`),
    c = G | 32,
    l = e.coarse ? 14.4 : 7.2,
    u = e.coarse || o > 40 ? 8.2 : 4.1;
  (e.col(16184300).mat(0.8, 0, 0, 0),
    WI(e, i, r, n, r, 5, o, s, l, u, 0.22, 0.22, c),
    WI(e, n, a, i, a, 5, o, s, l, u, 0.22, 0.22, c),
    WI(e, n, r, n, a, 5, o, s, l, u, 0.22, 0.22, c),
    WI(e, i, a, i, r, 5, o, s, l, u, 0.22, 0.22, c),
    e.col(16777215).mat(0.3, 0.1, 0.3, G));
  let d = t.c(`glass`),
    f = e.coarse ? 12 : 8;
  if (
    (e
      .wall(i, r, n, r, 0, 5, d, f, 5)
      .wall(n, a, i, a, 0, 5, d, f, 5)
      .wall(n, r, n, a, 0, 5, d, f, 5)
      .wall(i, a, i, r, 0, 5, d, f, 5),
    e.emis(0, 0).col(14275787).mat(0.8, 0, 0, 0),
    e.sweep([n, r, i, r, i, a, n, a], _C(4.85, 0.6, 0.3), !0),
    e.col(9342088).mat(0.9, 0, 0, 0).flat(n, r, i, a, o),
    e.col(14999768).mat(0.85, 0, 0, 0),
    e.box(
      n + (i - n) * 0.25,
      o,
      r + (a - r) * 0.3,
      n + (i - n) * 0.6,
      o + 4,
      r + (a - r) * 0.7,
    ),
    !e.coarse && o > 40)
  ) {
    e.col(16726570).mat(0.4, 0, 0.9, 1);
    for (let [t, s] of [
      [n + 0.4, r + 0.4],
      [i - 0.4, a - 0.4],
    ])
      e.box(t - 0.15, o, s - 0.15, t + 0.15, o + 0.3, s + 0.15);
  }
  (e.col(16777215).mat(0.85, 0, 0, 0).emis(0, 0), e.solid(n, r, i, a, 0, o));
}
