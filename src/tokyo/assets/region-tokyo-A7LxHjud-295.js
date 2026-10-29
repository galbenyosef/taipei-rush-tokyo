// tokyo/assets/region-tokyo-A7LxHjud 295 — deck
// Lines 107890-108221 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* cEe(e, t) {
  let [n, r] = oW(t.plan, `omote-omokaku`),
    { O: i, B: a } = TW(n, r),
    o = t.c(`glass`);
  (uW(e, t, sW.omokakuBack, 24, 12174022),
    e.col(EW).mat(0.15, 0.4, 0.1, G),
    vW(
      e,
      a,
      0,
      wW.base,
      o,
      e.coarse ? 9 : 4.6,
      e.coarse ? 10.4 : 5.2,
      (t) => t === 4 && !e.coarse,
    ));
  let s = () => e.col(sEe).mat(0.5, 0.05, 0.04, 1),
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
      wW.base,
      r[1],
      o[0],
      wW.base,
      o[1],
      s[0],
      wW.flare,
      s[1],
      u[0],
      wW.flare,
      u[1],
      c,
      d,
      1,
    );
  }
  (e.push().col(6183769).mat(0.5, 0.05, 0.04, 1),
    e.triFace(
      -n,
      wW.base,
      -r + wW.e,
      -n,
      wW.flare,
      -r + wW.e,
      -n,
      wW.flare,
      -r,
    ),
    e.triFace(n - wW.e, wW.base, r, n, wW.flare, r, n - wW.e, wW.flare, r),
    e.pop(),
    e.wall(-n, -r + wW.e, -n, r, wW.base, wW.flare, c, l || 9, l || 10),
    e.wall(-n, r, n - wW.e, r, wW.base, wW.flare, c, l || 9, l || 10),
    vW(e, i, wW.flare, wW.deck, c, l || 9, l || 10.4));
  let u = aEe(n, r);
  for (let t of u.pieces)
    for (let i = 0; i < t.length; i++) {
      let a = t[i],
        u = t[(i + 1) % t.length];
      oEe(a, u, n, r)
        ? (s(),
          l
            ? e.wall(a[0], a[1], u[0], u[1], wW.deck, wW.top, c, l, l)
            : e.panel(a[0], a[1], u[0], u[1], wW.deck, wW.top, c))
        : (e.col(12832723).mat(0.12, 0.45, 0.16, G),
          e.coarse
            ? e.panel(a[0], a[1], u[0], u[1], wW.deck, wW.top)
            : e.wall(a[0], a[1], u[0], u[1], wW.deck, wW.top, o, 4.4, 4.7));
    }
  e.col(4013117).mat(0.6, 0.2, 0, 0);
  for (let t of u.lids) yW(e, t, wW.top);
  e.col(9402974).mat(0.85, 0, 0, 0);
  for (let t of u.deck) yW(e, t, wW.deck);
  yield;
  let d = t.season ?? `green`,
    f = new le(7311),
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
    GV(
      e,
      `keyaki`,
      n + f.range(-0.6, 0.6),
      r + f.range(-0.6, 0.6),
      i,
      7320 + t,
      d,
      wW.deck,
      !1,
    );
  }
  if (!e.coarse) {
    (GV(e, `maple`, -n + 11.2, -r + 3.4, 6, 7331, d, wW.deck, !1),
      GV(e, `maple`, -n + 25.2, -r + 3, 6.5, 7332, d, wW.deck, !1),
      GV(e, `maple`, n - 3.5, 1.2, 6, 7333, d, wW.deck, !1),
      e.col(8022095).mat(0.85, 0, 0, 0),
      e.box(-9.5, wW.deck, -6, -4.5, wW.deck + 0.9, -1),
      e.box(0.5, wW.deck, -6.5, 5.5, wW.deck + 0.9, -1.5),
      e.box(-4.5, wW.deck, 1, 3.5, wW.deck + 0.9, 7),
      e.box(6, wW.deck, -0.5, 10.5, wW.deck + 0.9, 4.5),
      e.col(14017254).mat(0.1, 0.5, 0.12, 1));
    for (let [t, n, r, i] of u.mouths) {
      let a = Math.abs(n - i) < 1e-6 ? 0 : 1,
        o = a ? 0 : -1;
      (e.panel(
        t - a * 0.15,
        n - o * 0.15,
        r - a * 0.15,
        i - o * 0.15,
        wW.deck,
        wW.deck + 1.1,
      ),
        e.panel(
          r - a * 0.2,
          i - o * 0.2,
          t - a * 0.2,
          n - o * 0.2,
          wW.deck,
          wW.deck + 1.1,
        ));
    }
  }
  if (e.coarse) return;
  (yield, yield* lEe(e, t, n, r));
  let h = -r + wW.e - 0.05,
    g = -n + 0.4,
    _ = a[0][0] - 0.3,
    v = Math.max(1, Math.round((_ - g) / 6));
  for (let n = 0; n < v; n++) {
    let i = g + ((_ - g) * n) / v,
      a = g + ((_ - g) * (n + 1)) / v,
      o = Math.max(0, mW(t, i, a, -r - 0.5));
    (e.push().col(16777215).mat(0.3, 0.2, 0.38, G),
      e.wall(a, h, i, h, o, 4.6, t.c(`doors`), 2.4, 4.6 - o),
      e.pop(),
      o > 0.04 &&
        (e.col(7828334).mat(0.85, 0, 0, 0),
        e.panel(a, h - 0.02, i, h - 0.02, 0, o)));
  }
  (e.push().col(16777215).mat(0.3, 0.2, 0.38, G),
    e.wall(
      n - wW.e + 0.05,
      r - 0.4,
      n - wW.e + 0.05,
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
  (fW(e, `TOKYU PLAZA`, 0, wW.portH + 0.95, -0.06, RB, 0.42, 16777215, 0.75),
    e.leave(y),
    fW(e, `オモカド`, -n + 6, 6.2, h - 0.05, RB, 0.9, 16777215, 0.7),
    e.solid(-n, -r + wW.e, 4, r, 0, wW.top),
    e.solid(4, 3, n - wW.e, r, 0, wW.top),
    e.solid(-n, -r, n, r, wW.base, wW.deck));
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
    e.solid(n, r, i, a, wW.deck, wW.top);
  }
  for (let t of u.deck)
    e.floor(t[1][0], t[0][1], t[0][0], t[2][1], wW.deck, wW.deck);
}
function* lEe(e, t, n, r) {
  let { B: i } = TW(n, r),
    a = (i[0][0] + i[4][0]) / 2,
    o = (i[0][1] + i[4][1]) / 2,
    s = Math.hypot(i[0][0] - i[4][0], i[0][1] - i[4][1]) / 2,
    c = e.sub(a, 0, o, Math.PI / 4),
    l = wW.portW,
    u = wW.portH,
    d = wW.tD,
    f = wW.backW,
    p = wW.backY0,
    m = wW.backY1,
    h = new le(7340),
    g = (t) => {
      let n = DW[(t * 7 + h.int(0, 12)) % DW.length];
      e.col(n).mat(0.06, 0.3, h.range(0.12, 0.5), 1);
    };
  (e.col(EW).mat(0.15, 0.4, 0.1, G),
    e.panel(s, 0, l + 0.9, 0, 0, wW.base, t.c(`glass`)),
    e.panel(-l - 0.9, 0, -s, 0, 0, wW.base, t.c(`glass`)),
    e.col(15330542).mat(0.3, 0.6, 0.2, 1),
    e.panel(l + 0.9, 0, -l - 0.9, 0, u + 0.9, wW.base));
  let _ = 0.9;
  (xW(
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
    xW(
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
    xW(
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
  (xW(e, h, v, y, b, x, 5, 3, 0.45, g),
    xW(e, h, C, S, T, w, 5, 3, 0.45, g),
    xW(e, h, x, b, w, T, 5, 3, 0.5, g),
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
    (e.solid(r, t, 5.2, n, 0, wW.base), e.solid(-5.2, t, -r, n, 0, wW.base));
  (e.solid(3.7, 3, 9, 12, 0, wW.base),
    e.solid(-9, 3, -3.7, 12, 0, wW.base),
    e.solid(-4, d + 0.1, 4, 14, 0, wW.base),
    e.floor(-l + 0.5, 0, l - 0.5, d, 0, p, `stairs`),
    e.leave(c));
}
function uEe(e, t) {
  let [n, r] = oW(t.plan, `omote-omokaku`),
    { O: i, B: a } = TW(n, r);
  (e.col(EW).mat(0.15, 0.4, 0.15, 1),
    vW(e, a, 0, wW.base),
    e.col(4868686).mat(0.42, 0.35, 0, 0),
    vW(e, i, wW.base, wW.top),
    yW(e, i, wW.top));
}
var OW = {
  shopIn: 1.3,
  g0: 4.6,
  fl: 4.4,
  dj: 10.4,
  djD: 16,
  djH: 10.8,
  h: 23.3,
  nSeg: 5,
};
