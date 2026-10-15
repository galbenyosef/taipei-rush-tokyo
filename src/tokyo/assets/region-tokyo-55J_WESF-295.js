// tokyo/assets/region-tokyo-55J_WESF 295 — deck
// Lines 107799-108130 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* JTe(e, t) {
  let [n, r] = aW(t.plan, `omote-omokaku`),
    { O: i, B: a } = wW(n, r),
    o = t.c(`glass`);
  (lW(e, t, oW.omokakuBack, 24, 12174022),
    e.col(TW).mat(0.15, 0.4, 0.1, G),
    _W(
      e,
      a,
      0,
      CW.base,
      o,
      e.coarse ? 9 : 4.6,
      e.coarse ? 10.4 : 5.2,
      (t) => t === 4 && !e.coarse,
    ));
  let s = () => e.col(qTe).mat(0.5, 0.05, 0.04, 1),
    c = t.c(`paving`),
    l = e.coarse ? 0 : 3;
  s();
  for (let [t, n] of [
    [0, 0],
    [4, 4],
    [3, 3],
  ]) {
    let r = a[t],
      o = a[(t + 1) % 5],
      s = i[(n + 1) % 5],
      u = i[n],
      d = l
        ? Math.max(1, Math.round(Math.hypot(o[0] - r[0], o[1] - r[1]) / l))
        : 1;
    e.grid(
      r[0],
      CW.base,
      r[1],
      o[0],
      CW.base,
      o[1],
      s[0],
      CW.flare,
      s[1],
      u[0],
      CW.flare,
      u[1],
      c,
      d,
      1,
    );
  }
  (e.push().col(6183769).mat(0.5, 0.05, 0.04, 1),
    e.triFace(
      -n,
      CW.base,
      -r + CW.e,
      -n,
      CW.flare,
      -r + CW.e,
      -n,
      CW.flare,
      -r,
    ),
    e.triFace(n - CW.e, CW.base, r, n, CW.flare, r, n - CW.e, CW.flare, r),
    e.pop(),
    e.wall(-n, -r + CW.e, -n, r, CW.base, CW.flare, c, l || 9, l || 10),
    e.wall(-n, r, n - CW.e, r, CW.base, CW.flare, c, l || 9, l || 10),
    _W(e, i, CW.flare, CW.deck, c, l || 9, l || 10.4));
  let u = GTe(n, r);
  for (let t of u.pieces)
    for (let i = 0; i < t.length; i++) {
      let a = t[i],
        u = t[(i + 1) % t.length];
      KTe(a, u, n, r)
        ? (s(),
          l
            ? e.wall(a[0], a[1], u[0], u[1], CW.deck, CW.top, c, l, l)
            : e.panel(a[0], a[1], u[0], u[1], CW.deck, CW.top, c))
        : (e.col(12832723).mat(0.12, 0.45, 0.16, G),
          e.coarse
            ? e.panel(a[0], a[1], u[0], u[1], CW.deck, CW.top)
            : e.wall(a[0], a[1], u[0], u[1], CW.deck, CW.top, o, 4.4, 4.7));
    }
  e.col(4013117).mat(0.6, 0.2, 0, 0);
  for (let t of u.lids) vW(e, t, CW.top);
  e.col(9402974).mat(0.85, 0, 0, 0);
  for (let t of u.deck) vW(e, t, CW.deck);
  yield;
  let d = t.season ?? `green`,
    f = new ie(7311),
    p = e.coarse ? 3 : 7,
    m = [
      [-7.8, -4.8, 17.5],
      [-1.5, 1.5, 16],
      [5.6, -5.2, 17],
      [9, 1.2, 15.5],
      [-6, 4.8, 15],
      [3, 5.6, 15.5],
      [-3.2, -5.6, 14.5],
    ];
  for (let t = 0; t < p; t++) {
    let [n, r, i] = m[t];
    WV(
      e,
      `keyaki`,
      n + f.range(-0.6, 0.6),
      r + f.range(-0.6, 0.6),
      i,
      7320 + t,
      d,
      CW.deck,
      !1,
    );
  }
  if (!e.coarse) {
    (WV(e, `maple`, -n + 11.2, -r + 3.4, 6, 7331, d, CW.deck, !1),
      WV(e, `maple`, -n + 25.2, -r + 3, 6.5, 7332, d, CW.deck, !1),
      WV(e, `maple`, n - 3.5, 1.2, 6, 7333, d, CW.deck, !1),
      e.col(8022095).mat(0.85, 0, 0, 0),
      e.box(-9.5, CW.deck, -6, -4.5, CW.deck + 0.9, -1),
      e.box(0.5, CW.deck, -6.5, 5.5, CW.deck + 0.9, -1.5),
      e.box(-4.5, CW.deck, 1, 3.5, CW.deck + 0.9, 7),
      e.box(6, CW.deck, -0.5, 10.5, CW.deck + 0.9, 4.5),
      e.col(14017254).mat(0.1, 0.5, 0.12, 1));
    for (let [t, n, r, i] of u.mouths) {
      let a = Math.abs(n - i) < 1e-6 ? 0 : 1,
        o = a ? 0 : -1;
      (e.panel(
        t - a * 0.15,
        n - o * 0.15,
        r - a * 0.15,
        i - o * 0.15,
        CW.deck,
        CW.deck + 1.1,
      ),
        e.panel(
          r - a * 0.2,
          i - o * 0.2,
          t - a * 0.2,
          n - o * 0.2,
          CW.deck,
          CW.deck + 1.1,
        ));
    }
  }
  if (e.coarse) return;
  (yield, yield* YTe(e, t, n, r));
  let h = -r + CW.e - 0.05,
    g = -n + 0.4,
    _ = a[0][0] - 0.3,
    v = Math.max(1, Math.round((_ - g) / 6));
  for (let n = 0; n < v; n++) {
    let i = g + ((_ - g) * n) / v,
      a = g + ((_ - g) * (n + 1)) / v,
      o = Math.max(0, pW(t, i, a, -r - 0.5));
    (e.push().col(16777215).mat(0.3, 0.2, 0.38, G),
      e.wall(a, h, i, h, o, 4.6, t.c(`doors`), 2.4, 4.6 - o),
      e.pop(),
      o > 0.04 &&
        (e.col(7828334).mat(0.85, 0, 0, 0),
        e.panel(a, h - 0.02, i, h - 0.02, 0, o)));
  }
  (e.push().col(16777215).mat(0.3, 0.2, 0.38, G),
    e.wall(
      n - CW.e + 0.05,
      r - 0.4,
      n - CW.e + 0.05,
      a[4][1] + 0.3,
      0,
      4.6,
      t.c(`doors`),
      2.4,
      4.6,
    ),
    e.pop());
  let y = e.sub(
    (a[0][0] + a[4][0]) / 2,
    0,
    (a[0][1] + a[4][1]) / 2,
    Math.PI / 4,
  );
  (dW(e, `TOKYU PLAZA`, 0, CW.portH + 0.95, -0.06, LB, 0.42, 16777215, 0.75),
    e.leave(y),
    dW(e, `オモカド`, -n + 6, 6.2, h - 0.05, LB, 0.9, 16777215, 0.7),
    e.solid(-n, -r + CW.e, 4, r, 0, CW.top),
    e.solid(4, 3, n - CW.e, r, 0, CW.top),
    e.solid(-n, -r, n, r, CW.base, CW.deck));
  for (let t of u.lids) {
    let n = 1 / 0,
      r = 1 / 0,
      i = -1 / 0,
      a = -1 / 0;
    for (let e of t)
      ((n = Math.min(n, e[0])),
        (r = Math.min(r, e[1])),
        (i = Math.max(i, e[0])),
        (a = Math.max(a, e[1])));
    e.solid(n, r, i, a, CW.deck, CW.top);
  }
  for (let t of u.deck)
    e.floor(t[1][0], t[0][1], t[0][0], t[2][1], CW.deck, CW.deck);
}
function* YTe(e, t, n, r) {
  let { B: i } = wW(n, r),
    a = (i[0][0] + i[4][0]) / 2,
    o = (i[0][1] + i[4][1]) / 2,
    s = Math.hypot(i[0][0] - i[4][0], i[0][1] - i[4][1]) / 2,
    c = e.sub(a, 0, o, Math.PI / 4),
    l = CW.portW,
    u = CW.portH,
    d = CW.tD,
    f = CW.backW,
    p = CW.backY0,
    m = CW.backY1,
    h = new ie(7340),
    g = (t) => {
      let n = EW[(t * 7 + h.int(0, 12)) % EW.length];
      e.col(n).mat(0.06, 0.3, h.range(0.12, 0.5), 1);
    };
  (e.col(TW).mat(0.15, 0.4, 0.1, G),
    e.panel(s, 0, l + 0.9, 0, 0, CW.base, t.c(`glass`)),
    e.panel(-l - 0.9, 0, -s, 0, 0, CW.base, t.c(`glass`)),
    e.col(15330542).mat(0.3, 0.6, 0.2, 1),
    e.panel(l + 0.9, 0, -l - 0.9, 0, u + 0.9, CW.base));
  let _ = 0.9;
  (bW(
    e,
    h,
    [l + _, 0, -0.25],
    [l, 0, -0.25],
    [l, u, -0.25],
    [l + _, u + _, -0.25],
    2,
    5,
    0.2,
    g,
  ),
    bW(
      e,
      h,
      [-l, 0, -0.25],
      [-l - _, 0, -0.25],
      [-l - _, u + _, -0.25],
      [-l, u, -0.25],
      2,
      5,
      0.2,
      g,
    ),
    bW(
      e,
      h,
      [l, u, -0.25],
      [-l, u, -0.25],
      [-l - _, u + _, -0.25],
      [l + _, u + _, -0.25],
      5,
      2,
      0.2,
      g,
    ));
  let v = [l, 0, 0],
    y = [f, p, d],
    b = [f, m, d],
    x = [l, u, 0],
    S = [-l, 0, 0],
    C = [-f, p, d],
    w = [-f, m, d],
    T = [-l, u, 0];
  (bW(e, h, v, y, b, x, 5, 3, 0.45, g),
    bW(e, h, C, S, T, w, 5, 3, 0.45, g),
    bW(e, h, x, b, w, T, 5, 3, 0.5, g),
    yield,
    e.push().col(16777215).mat(0.3, 0.2, 0.45, G),
    e.wall(f, d, -f, d, p, m, t.c(`doors`), 2.3, m - p),
    e.pop());
  let E = p / 20,
    D = (d - 0) / 20;
  e.col(14605011).mat(0.75, 0.05, 0.06, 1);
  for (let t = 0; t < 20; t++) {
    let n = 0 + t * D;
    (e.panel(0.9, n, -0.9, n, t * E, (t + 1) * E),
      e.flat(-0.9, n, 0.9, n + D, (t + 1) * E));
  }
  for (let t of [1, -1]) {
    let n = t * 0.95,
      r = t * 2.05,
      i = Math.min(n, r),
      a = Math.max(n, r);
    (e.col(2895667).mat(0.4, 0.6, 0, 0),
      e.quad(a, 0.02, 0, i, 0.02, 0, i, p, d, a, p, d),
      e.col(13225939).mat(0.3, 0.8, 0.12, 1));
    for (let t of [i, a])
      (e.quad(t, 0.02, 0, t, p, d, t, p + 1, d, t, 1, 0),
        e.quad(t, 1, 0, t, p + 1, d, t, p, d, t, 0.02, 0));
    e.col(3816768).mat(0.6, 0.3, 0, 0);
    let o = t * l,
      s = t * f;
    t > 0
      ? e.quad(o, 0.02, 0, a, 0.02, 0, a, p, d, s, p, d)
      : e.quad(i, 0.02, 0, o, 0.02, 0, s, p, d, i, p, d);
  }
  for (let [t, n, r] of [
    [0, 4, 3.4],
    [4, 8, 2.9],
    [8, 12, 2.4],
  ])
    (e.solid(r, t, 5.2, n, 0, CW.base), e.solid(-5.2, t, -r, n, 0, CW.base));
  (e.solid(3.7, 3, 9, 12, 0, CW.base),
    e.solid(-9, 3, -3.7, 12, 0, CW.base),
    e.solid(-4, d + 0.1, 4, 14, 0, CW.base),
    e.floor(-l + 0.5, 0, l - 0.5, d, 0, p, `stairs`),
    e.leave(c));
}
function XTe(e, t) {
  let [n, r] = aW(t.plan, `omote-omokaku`),
    { O: i, B: a } = wW(n, r);
  (e.col(TW).mat(0.15, 0.4, 0.15, 1),
    _W(e, a, 0, CW.base),
    e.col(4868686).mat(0.42, 0.35, 0, 0),
    _W(e, i, CW.base, CW.top),
    vW(e, i, CW.top));
}
var DW = {
  shopIn: 1.3,
  g0: 4.6,
  fl: 4.4,
  dj: 10.4,
  djD: 16,
  djH: 10.8,
  h: 23.3,
  nSeg: 5,
};
