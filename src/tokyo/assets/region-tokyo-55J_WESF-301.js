// tokyo/assets/region-tokyo-55J_WESF 301 — math
// Lines 109641-109964 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var CEe = {
  id: `vod-land`,
  site: vEe,
  name: { ja: `VOD LAND`, zh: `VOD LAND`, en: `VOD LAND` },
  near: 220,
  build: xEe,
  far: SEe,
  bounds: () => [KW.x + JW.x0, KW.z + JW.z0, KW.x + Y.x1 + 2.6, KW.z + Y.z1],
  farBoxes: (e, t) => [
    {
      x0: KW.x + Y.x0,
      x1: KW.x + Y.x1,
      z0: KW.z + Y.z0,
      z1: KW.z + Y.z1,
      y0: t.gy,
      y1: t.gy + Y.par,
      rgb: [0.12, 0.09, 0.14],
      lit: !0,
      glow: 0.12,
    },
    {
      x0: KW.x + JW.x0,
      x1: KW.x + JW.x1,
      z0: KW.z + JW.z0,
      z1: KW.z + JW.z1,
      y0: t.gy,
      y1: t.gy + JW.h,
      rgb: [0.58, 0.54, 0.48],
      lit: !0,
    },
  ],
  roofs: [
    { lx0: Y.x1, lz0: qW.z0 - 2.5, lx1: Y.x1 + 2.6, lz1: qW.z1 + 2.5, y: Y.gf },
  ],
};
r.add({ 原宿站: `原宿駅` });
var nG = ds.H + 0.15,
  rG = ds.DECK - 0.02,
  iG = ds.DECK + 0.55 + 1.1,
  aG = ds.H - 1.05,
  oG = ds.TK + 0.15,
  sG = { s0: 40, s1: 66.5, e0: -11, e1: 17.6 },
  cG = { s0: 25, s1: 39, e0: 10.6, e1: 17.6 },
  lG = { s0: -3, s1: 24, e0: 10.6, e1: 17.6 },
  uG = { x0: vs(890) + 10.6, x1: ms - 6.4, z0: 882, z1: 898 },
  dG = -7,
  fG = 10.4,
  pG = { e0: 1.35, e1: 6.95 },
  mG = { e0: -6.6, e1: -1.95 },
  hG = 64,
  gG = 11184031,
  _G = 9276035,
  wEe = 13883096,
  TEe = 11121590,
  EEe = 5988452,
  DEe = 8087118,
  vG = 12433581,
  yG = 3877407,
  bG = 15789023,
  xG = 6261360,
  SG = 6122082;
function CG(e, t, n) {
  let r = ac(e)?.platforms.find((e) => e.id === `jy-harajuku`);
  return r ? { co: r.corridor, sc: r.sc, ox: t, oz: n } : null;
}
var wG = { x: 0, z: 0 },
  TG = { x: 0, z: 0, tx: 0, tz: 1 };
function EG(e, t, n) {
  return (e.co.path.pos(e.sc + t, -n, wG), [wG.x - e.ox, wG.z - e.oz]);
}
function DG(e, t, n) {
  return (e.co.path.pos(e.sc + t, -n, wG), [wG.x, wG.z]);
}
function OG(e, t, n) {
  t.co.path.at(t.sc + n, TG);
  let [r, i] = EG(t, n, 0);
  return e.sub(r, 0, i, Math.atan2(-TG.tx, TG.tz));
}
function kG(e, t, n, r, i, a, o, s, c, l) {
  let u = n[0] - t[0];
  -(n[1] - t[1]) * s + u * c >= 0
    ? e.quad(t[0], r, t[1], n[0], a, n[1], n[0], o, n[1], t[0], i, t[1], l)
    : e.quad(n[0], a, n[1], t[0], r, t[1], t[0], i, t[1], n[0], o, n[1], l);
}
function AG(e, t, n = !0, r) {
  let [i, a, o, s] = t;
  (a[2] - i[2]) * (o[0] - a[0]) - (a[0] - i[0]) * (o[2] - a[2]) > 0 === n
    ? e.quad(
        i[0],
        i[1],
        i[2],
        a[0],
        a[1],
        a[2],
        o[0],
        o[1],
        o[2],
        s[0],
        s[1],
        s[2],
        r,
      )
    : e.quad(
        s[0],
        s[1],
        s[2],
        o[0],
        o[1],
        o[2],
        a[0],
        a[1],
        a[2],
        i[0],
        i[1],
        i[2],
        r,
      );
}
function jG(e, t, n, r, i, a, o, s = !0, c, l = 8) {
  for (let u = n; u < r - 0.001; u += l) {
    let n = Math.min(r, u + l),
      d = EG(t, u, i),
      f = EG(t, u, a),
      p = EG(t, n, a),
      m = EG(t, n, i);
    AG(
      e,
      [
        [d[0], o(u), d[1]],
        [f[0], o(u), f[1]],
        [p[0], o(n), p[1]],
        [m[0], o(n), m[1]],
      ],
      s,
      c,
    );
  }
}
function MG(e, t, n, r, i, a, o, s, c, l = 6) {
  for (let u = n; u < r - 0.001; u += l) {
    let n = Math.min(r, u + l),
      d = EG(t, u, i),
      f = EG(t, n, i),
      p = EG(t, u, i + s);
    kG(e, d, f, a(u), o(u), a(n), o(n), p[0] - d[0], p[1] - d[1], c);
  }
}
function NG(e, t, n, r, i, a, o, s = 8) {
  for (let c = n; c < r - 0.001; c += s) {
    let n = Math.min(r, c + s),
      l = OG(e, t, c);
    (e.floor(i, 0, a, n - c, o(c), o(n)), e.leave(l));
  }
}
function PG(e, t, n, r, i, a, o, s, c = 8) {
  for (let l = n; l < r - 0.001; l += c) {
    let n = Math.min(r, l + c),
      u = OG(e, t, l);
    (e.solid(i, 0, a, n - l, o, s, `wall`), e.leave(u));
  }
}
var FG = (e, t) => e.A.sub(`hjSigns`, SS[t][0] / CS, 0, SS[t][1] / CS, 1);
function IG(e, t) {
  let [n, r] = DG(e, t, 17.5);
  return xy(n, r) + 0.15;
}
function LG(e, t) {
  let [n, r] = DG(e, t, -py - 1.5);
  return Sy(n, r) + 0.15;
}
function* OEe(e, t, n) {
  (e.push().col(7828331).mat(0.98),
    jG(
      e,
      n,
      -70,
      104,
      -py,
      16,
      () => rG + 0.02,
      !0,
      e.coarse ? e.white : t.c(`gravel`),
      12,
    ),
    e.pop(),
    yield,
    e.push().col(gG).mat(0.9),
    MG(
      e,
      n,
      -70,
      104,
      dG,
      () => rG,
      (e) => LG(n, e),
      1,
      e.coarse ? e.white : t.c(`paving`),
    ),
    e.col(5599306).mat(0.95),
    jG(e, n, -70, 104, -py - 0.6, dG, (e) => LG(n, e) + 0.03, !0, e.white, 8),
    e.col(_G).mat(0.9),
    jG(e, n, -70, 104, -7.3, dG, (e) => LG(n, e) + 0.06, !0, e.white, 8),
    e.coarse ||
      (e.col(SG).mat(0.6, 0.4),
      MG(
        e,
        n,
        -70,
        sG.s0,
        -7.25,
        (e) => LG(n, e) + 0.06,
        (e) => LG(n, e) + 1.6,
        1,
      ),
      MG(
        e,
        n,
        -70,
        sG.s0,
        -7.25,
        (e) => LG(n, e) + 0.06,
        (e) => LG(n, e) + 1.6,
        -1,
      )),
    e.pop(),
    NG(e, n, -70, sG.s0, -py - 0.6, dG, (e) => LG(n, e)),
    PG(e, n, -70, sG.s0, -7.35, -7.15, rG, nG + 1.6),
    yield);
  let r = (e) => IG(n, e) > rG + 0.6,
    i = -70;
  for (; i < 104 && !r(i);) i += 1;
  if (
    (e.push().col(gG).mat(0.9),
    MG(
      e,
      n,
      i,
      104,
      fG,
      () => rG,
      (e) => Math.max(rG + 0.6, IG(n, e)),
      -1,
      e.coarse ? e.white : t.c(`paving`),
    ),
    e.col(11775910).mat(0.9),
    jG(
      e,
      n,
      i,
      sG.s0,
      fG,
      16.6,
      (e) => Math.max(rG + 0.6, IG(n, e)) + 0.03,
      !0,
      e.white,
      6,
    ),
    e.col(gG).mat(0.9),
    MG(
      e,
      n,
      -70,
      i + 1,
      16,
      (e) => Math.min(rG, IG(n, e)) - 0.3,
      () => rG + 0.35,
      1,
      e.coarse ? e.white : t.c(`paving`),
    ),
    e.pop(),
    NG(e, n, i, sG.s0, fG, 16.6, (e) => Math.max(rG + 0.6, IG(n, e))),
    !e.coarse)
  ) {
    e.push().col(SG).mat(0.6, 0.4);
    let t = (t, r, i, a) => {
      (MG(e, n, t, r, i, a, (e) => a(e) + 1.5, 1),
        MG(e, n, t, r, i, a, (e) => a(e) + 1.5, -1));
    };
    (t(i, lG.s0, 10.55, (e) => Math.max(rG + 0.6, IG(n, e)) + 0.03),
      t(-70, i, 16.1, () => rG + 0.35),
      e.pop());
  }
  if (
    (PG(e, n, i, lG.s0, 10.450000000000001, 10.700000000000001, rG, nG + 1.5),
    PG(e, n, -70, i, 15.9, 16.2, rG - 1, rG + 1.9),
    yield,
    !e.coarse)
  )
    for (let r = 0, a = Math.max(i + 4, -40); a < sG.s0 - 8; a += 13, r++) {
      let i = Math.max(rG + 0.6, IG(n, a + 3)) - 0.5;
      if (i - rG < 3.2) continue;
      let o = i - 2.6,
        s = i - 0.2,
        c = EG(n, a, 10.280000000000001),
        l = EG(n, a + 5.5, 10.280000000000001),
        u = EG(n, a, 9.4);
      (e.push().col(2895667).mat(0.6, 0.3),
        kG(
          e,
          EG(n, a - 0.15, 10.34),
          EG(n, a + 5.65, 10.34),
          o - 0.15,
          s + 0.15,
          o - 0.15,
          s + 0.15,
          u[0] - c[0],
          u[1] - c[1],
        ),
        e.col(16777215).mat(0.5, 0, 0.35, G),
        kG(
          e,
          c,
          l,
          o,
          s,
          o,
          s,
          u[0] - c[0],
          u[1] - c[1],
          FG(t, r % 2 ? `posterA` : `posterB`),
        ),
        e.pop());
    }
}
