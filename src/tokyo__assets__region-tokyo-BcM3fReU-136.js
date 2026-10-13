// tokyo__assets__region-tokyo-BcM3fReU 136 — math
// Lines 59817-60136 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function kM(e, t) {
  e.col(16777215).mat(0.4, 0.6, 0, 0);
  let n = t.c(`nbGenpyo`);
  e.quad(
    -0.25,
    0.012,
    0.25,
    0.25,
    0.012,
    0.25,
    0.25,
    0.012,
    -0.25,
    -0.25,
    0.012,
    -0.25,
    n,
  );
}
function AM(e, t, n) {
  let r = sM(n.x) - n.gy - 1.42,
    i = r + 1.25,
    a = 2.15,
    o = t.c(`nbBoard`);
  for (let t of [-1, 1]) {
    let n = t * 9,
      s = t * 9.12;
    (e.col(11118236).mat(0.7, 0.1, 0, 0),
      e.box(-2.25, r - 0.1, Math.min(n, s), 2.25, i + 0.1, Math.max(n, s)),
      e.col(16777215).mat(0.5, 0.2, 0, Y),
      t < 0
        ? e.panel(a, s - 0.005, -2.15, s - 0.005, r, i, o)
        : e.panel(-2.15, s + 0.005, a, s + 0.005, r, i, o));
  }
}
function* jM(e, t) {
  (wM(e), yield);
  let n = e.sub(Mj, 0, 0, Math.PI / 2);
  if (
    (yield* CM(e, t),
    e.leave(n),
    yield,
    (n = e.sub(-18.05, 0, 0, -Math.PI / 2)),
    yield* CM(e, t),
    e.leave(n),
    yield,
    OM(e, t),
    TM(e, t),
    EM(e),
    yield,
    DM(e, t),
    !e.coarse)
  ) {
    (kM(e, t), e.col(14867922).mat(0.85, 0, 0, 0));
    for (let n of [-1, 1])
      e.flat(
        n > 0 ? 10.95 : -17.15,
        -8.75,
        n > 0 ? 17.15 : -10.95,
        Jj,
        0.16999999999999998,
        t.c(`paving`),
        4,
        4,
      );
  }
  AM(e, t, t.site);
  for (let t of [-1, 1]) {
    let n = t * 18.35,
      r = t * 17.15;
    e.solid(Math.min(n, r), -8.75, Math.max(n, r), Jj, -2, Uj);
  }
}
function MM(e, t) {
  e.col($j).mat(0.85, 0, 0.05, Y);
  for (let n of [-1, 1]) {
    let r = n > 0 ? 17.15 : -18.35,
      i = n > 0 ? 18.35 : -17.15;
    (e.box(r, -1.6, -8.75, i, Uj, Jj, t.c(`granite`), 2, 2),
      oM(e),
      e.box(n * Mj - 0.3, qj, -0.3, n * Mj + 0.3, 6.6, 0.3));
    for (let t of [-1, 1])
      e.box(
        n * 17.650000000000002 - 0.2,
        Qj,
        t * 9.65 - 0.2,
        n * 17.650000000000002 + 0.2,
        6.9,
        t * 9.65 + 0.2,
      );
    e.col($j).mat(0.85, 0, 0.05, Y);
  }
}
function NM(e, t) {
  return [
    {
      x0: t.x - Mj - 0.3,
      x1: t.x - Nj + 0.6,
      z0: t.z - Yj,
      z1: t.z + Yj,
      y0: t.gy + Fj,
      y1: t.gy + Uj,
      rgb: [0.6, 0.58, 0.54],
    },
    {
      x0: t.x + Nj - 0.6,
      x1: t.x + Mj + 0.3,
      z0: t.z - Yj,
      z1: t.z + Yj,
      y0: t.gy + Fj,
      y1: t.gy + Uj,
      rgb: [0.6, 0.58, 0.54],
    },
  ];
}
var PM = {
    id: `nihonbashi`,
    name: { ja: `日本橋`, zh: `日本橋`, en: `Nihonbashi Bridge` },
    near: 220,
    build: jM,
    far: MM,
    farBoxes: NM,
    bounds: (e, t) => [t.x - 32, t.z - 25, t.x + 34, t.z + 25],
    blip: !0,
    anchors: [
      {
        key: `nihonbashi-postcard`,
        lx: 40,
        lz: 9.5,
        turn: -Math.PI / 2 + 0.25,
        name: { zh: `日本橋 船著場側`, en: `Nihonbashi from the pier side` },
      },
      {
        key: `nihonbashi-chuo`,
        lx: 0,
        lz: 48,
        turn: 0,
        name: { zh: `中央通 日本橋`, en: `Chuo-dori at Nihonbashi` },
      },
    ],
  },
  FM = 5.2,
  IM = 7.8,
  LM = 6.3,
  RM = 4.7,
  zM = 1.3,
  BM = 1.6,
  VM = 5.5,
  HM = 6.1,
  UM = 7.6,
  WM = 11.2,
  GM = 11.9,
  KM = 8.2,
  qM = -8,
  JM = 2,
  YM = 9.4,
  XM = -9.3,
  ZM = -11.9,
  QM = 3,
  $M = -10.5,
  eN = 11.2,
  tN = -124,
  nN = 12728868,
  rN = 10235936,
  iN = 15723489,
  aN = 16777215,
  oN = 13697023,
  sN = 14266949,
  cN = 10131343,
  lN = 13223098,
  uN = 4864556,
  dN = Math.PI / 8,
  fN = (e, t) => {
    let n = dN + (e * Math.PI) / 4;
    return [Math.cos(n) * t, FM + Math.sin(n) * t];
  };
function pN(e, t, n, r, i, a = 0, o = 0, s = !1) {
  for (let c = 0; c < 8; c++) {
    if (s && (c === 5 || c === 4 || c === 6)) continue;
    let [l, u] = fN(c + 1, t),
      [d, f] = fN(c, t);
    a > 0 ? e.wall(l, u, d, f, n, r, i, a, o) : e.panel(l, u, d, f, n, r, i);
  }
}
function mN(e, t, n, r = 1) {
  if (
    (e
      .push()
      .col(11118237, 0.95 + ((((t * 13 + n * 7) % 1) + 1) % 1) * 0.1)
      .mat(0.95, 0, 0, 0),
    e.coarse)
  ) {
    (e.box(t - 0.35 * r, 0, n - 0.35 * r, t + 0.35 * r, 2 * r, n + 0.35 * r),
      e.box(
        t - 0.55 * r,
        2 * r,
        n - 0.55 * r,
        t + 0.55 * r,
        2.35 * r,
        n + 0.55 * r,
      ),
      e.pop());
    return;
  }
  (e.box(t - 0.5 * r, 0, n - 0.5 * r, t + 0.5 * r, 0.3 * r, n + 0.5 * r),
    e.box(
      t - 0.15 * r,
      0.3 * r,
      n - 0.15 * r,
      t + 0.15 * r,
      1.3 * r,
      n + 0.15 * r,
    ),
    e.box(t - 0.4 * r, 1.3 * r, n - 0.4 * r, t + 0.4 * r, 1.5 * r, n + 0.4 * r),
    e
      .col(9407621)
      .box(
        t - 0.27 * r,
        1.5 * r,
        n - 0.27 * r,
        t + 0.27 * r,
        1.95 * r,
        n + 0.27 * r,
      ),
    e.col(11118237),
    e.lathe(
      t,
      n,
      [0.66 * r, 1.95 * r, 0.6 * r, 2.08 * r, 0.12 * r, 2.4 * r],
      6,
      Math.PI / 6,
    ),
    e.lathe(t, n, [0.12 * r, 2.4 * r, 0.13 * r, 2.55 * r, 0.01, 2.72 * r], 4),
    e.pop(),
    e.pole(t, n, 0.45 * r, 0, 2.4 * r));
}
function hN(e, t, n, r, i, a = 0) {
  let o = a ? 1.3 : 0.5 + (i % 3) * 0.3,
    s = a ? (a > 0 ? 0 : Math.PI) + 0.25 * Math.sin(i) : i * 1.7,
    c = t + Math.cos(s) * o,
    l = n + Math.sin(s) * o;
  if (
    (e.push().col(5918790).mat(0.95, 0, 0, 0),
    e.rod(t, 0, n, c, r * 0.58, l, 0.3, e.coarse ? 4 : 6, 0.2),
    !e.coarse)
  )
    for (let t of [1, -1])
      e.rod(
        c,
        r * 0.55,
        l,
        c + Math.cos(s + t * 1.9) * 1.6,
        r * 0.82,
        l + Math.sin(s + t * 1.9) * 1.6,
        0.14,
        4,
        0.08,
      );
  let u = r * (a ? 0.34 : 0.4),
    d = e.coarse ? 8 : 14;
  for (let t = 0; t < d; t++) {
    let n = (t / d) * Math.PI * 2 + i,
      a = ((t + 1) / d) * Math.PI * 2 + i,
      o = ((t * 7919 + i * 104729) % 1e3) / 1e3,
      s = (t % 2 ? 1.06 : 0.9) + 0.12 * (o - 0.5),
      f = r * (0.1 + 0.16 * o),
      p = e.coarse
        ? [
            [0.2, r],
            [0.85, r * 0.8],
            [1.1, f],
          ]
        : [
            [0.2, r],
            [0.6, r * 0.95],
            [0.86, r * 0.8],
            [1, r * 0.5],
            [1.12, f],
          ],
      m = e.coarse ? 1 : 2,
      h = (a - n) * 0.2;
    for (let r = 0; r + 1 < p.length; r++) {
      let [i, d] = p[r],
        [f, g] = p[r + 1],
        _ = r < m ? n : n + h * (0.6 + o),
        v = r < m ? a : a - h * (1.4 - o),
        y = (e, t) => [
          c + Math.cos(e) * u * t * s,
          l + Math.sin(e) * u * t * s,
        ],
        [b, x] = y(v, f),
        [S, C] = y(_, f),
        [w, T] = y(_, i),
        [E, D] = y(v, i),
        O = (0.86 + 0.14 * o) * (1.12 - (0.3 * r) / (p.length - 1));
      (e.col(t % 2 ? 10270824 : 8955480, O),
        e.quad(b, g, x, S, g, C, w, d, T, E, d, D),
        !e.coarse &&
          r >= m - 1 &&
          e.col(6717246, O).quad(S, g, C, b, g, x, E, d, D, w, d, T));
    }
  }
  (e.pop(), e.pole(t, n, 0.35, 0, r * 0.6));
}
function gN(e, t, n, r = 3.4) {
  (e.push().col(3816510).mat(0.5, 0.6, 0, 0),
    e.cylY(t, n, 0, r, 0.07, 6, 0.05, !1),
    e.coarse ||
      (e.col(16052192).mat(0.3, 0, 0.7, 1),
      e.lathe(
        t,
        n,
        [0.12, r, 0.17, r + 0.1, 0.17, r + 0.42, 0.12, r + 0.48],
        6,
      ),
      e.col(3816510).mat(0.5, 0.6, 0, 0),
      e.lathe(t, n, [0.27, r + 0.48, 0.04, r + 0.68], 6)),
    e.pop(),
    e.pole(t, n, 0.12, 0, r));
}
