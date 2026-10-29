// tokyo/assets/region-tokyo-A7LxHjud 301 — math
// Lines 109732-110055 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var LEe = {
  id: `vod-land`,
  site: MEe,
  name: { ja: `VOD LAND`, zh: `VOD LAND`, en: `VOD LAND` },
  near: 220,
  build: FEe,
  far: IEe,
  bounds: () => [qW.x + YW.x0, qW.z + YW.z0, qW.x + Y.x1 + 2.6, qW.z + Y.z1],
  farBoxes: (e, t) => [
    {
      x0: qW.x + Y.x0,
      x1: qW.x + Y.x1,
      z0: qW.z + Y.z0,
      z1: qW.z + Y.z1,
      y0: t.gy,
      y1: t.gy + Y.par,
      rgb: [0.12, 0.09, 0.14],
      lit: !0,
      glow: 0.12,
    },
    {
      x0: qW.x + YW.x0,
      x1: qW.x + YW.x1,
      z0: qW.z + YW.z0,
      z1: qW.z + YW.z1,
      y0: t.gy,
      y1: t.gy + YW.h,
      rgb: [0.58, 0.54, 0.48],
      lit: !0,
    },
  ],
  roofs: [
    { lx0: Y.x1, lz0: JW.z0 - 2.5, lx1: Y.x1 + 2.6, lz1: JW.z1 + 2.5, y: Y.gf },
  ],
};
r.add({ 原宿站: `原宿駅` });
var rG = ds.H + 0.15,
  iG = ds.DECK - 0.02,
  aG = ds.DECK + 0.55 + 1.1,
  oG = ds.H - 1.05,
  sG = ds.TK + 0.15,
  cG = { s0: 40, s1: 66.5, e0: -11, e1: 17.6 },
  lG = { s0: 25, s1: 39, e0: 10.6, e1: 17.6 },
  uG = { s0: -3, s1: 24, e0: 10.6, e1: 17.6 },
  dG = { x0: vs(890) + 10.6, x1: ms - 6.4, z0: 882, z1: 898 },
  fG = -7,
  pG = 10.4,
  mG = { e0: 1.35, e1: 6.95 },
  hG = { e0: -6.6, e1: -1.95 },
  gG = 64,
  _G = 11184031,
  vG = 9276035,
  REe = 13883096,
  zEe = 11121590,
  BEe = 5988452,
  VEe = 8087118,
  yG = 12433581,
  bG = 3877407,
  xG = 15789023,
  SG = 6261360,
  CG = 6122082;
function wG(e, t, n) {
  let r = ac(e)?.platforms.find((e) => e.id === `jy-harajuku`);
  return r ? { co: r.corridor, sc: r.sc, ox: t, oz: n } : null;
}
var TG = { x: 0, z: 0 },
  EG = { x: 0, z: 0, tx: 0, tz: 1 };
function DG(e, t, n) {
  return (e.co.path.pos(e.sc + t, -n, TG), [TG.x - e.ox, TG.z - e.oz]);
}
function OG(e, t, n) {
  return (e.co.path.pos(e.sc + t, -n, TG), [TG.x, TG.z]);
}
function kG(e, t, n) {
  t.co.path.at(t.sc + n, EG);
  let [r, i] = DG(t, n, 0);
  return e.sub(r, 0, i, Math.atan2(-EG.tx, EG.tz));
}
function AG(e, t, n, r, i, a, o, s, c, l) {
  let u = n[0] - t[0];
  -(n[1] - t[1]) * s + u * c >= 0
    ? e.quad(t[0], r, t[1], n[0], a, n[1], n[0], o, n[1], t[0], i, t[1], l)
    : e.quad(n[0], a, n[1], t[0], r, t[1], t[0], i, t[1], n[0], o, n[1], l);
}
function jG(e, t, n = !0, r) {
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
function MG(e, t, n, r, i, a, o, s = !0, c, l = 8) {
  for (let u = n; u < r - 0.001; u += l) {
    let n = Math.min(r, u + l),
      d = DG(t, u, i),
      f = DG(t, u, a),
      p = DG(t, n, a),
      m = DG(t, n, i);
    jG(
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
function NG(e, t, n, r, i, a, o, s, c, l = 6) {
  for (let u = n; u < r - 0.001; u += l) {
    let n = Math.min(r, u + l),
      d = DG(t, u, i),
      f = DG(t, n, i),
      p = DG(t, u, i + s);
    AG(e, d, f, a(u), o(u), a(n), o(n), p[0] - d[0], p[1] - d[1], c);
  }
}
function PG(e, t, n, r, i, a, o, s = 8) {
  for (let c = n; c < r - 0.001; c += s) {
    let n = Math.min(r, c + s),
      l = kG(e, t, c);
    (e.floor(i, 0, a, n - c, o(c), o(n)), e.leave(l));
  }
}
function FG(e, t, n, r, i, a, o, s, c = 8) {
  for (let l = n; l < r - 0.001; l += c) {
    let n = Math.min(r, l + c),
      u = kG(e, t, l);
    (e.solid(i, 0, a, n - l, o, s, `wall`), e.leave(u));
  }
}
var IG = (e, t) => e.A.sub(`hjSigns`, TS[t][0] / ES, 0, TS[t][1] / ES, 1);
function LG(e, t) {
  let [n, r] = OG(e, t, 17.5);
  return wy(n, r) + 0.15;
}
function RG(e, t) {
  let [n, r] = OG(e, t, -gy - 1.5);
  return Ty(n, r) + 0.15;
}
function* HEe(e, t, n) {
  (e.push().col(7828331).mat(0.98),
    MG(
      e,
      n,
      -70,
      104,
      -gy,
      16,
      () => iG + 0.02,
      !0,
      e.coarse ? e.white : t.c(`gravel`),
      12,
    ),
    e.pop(),
    yield,
    e.push().col(_G).mat(0.9),
    NG(
      e,
      n,
      -70,
      104,
      fG,
      () => iG,
      (e) => RG(n, e),
      1,
      e.coarse ? e.white : t.c(`paving`),
    ),
    e.col(5599306).mat(0.95),
    MG(e, n, -70, 104, -gy - 0.6, fG, (e) => RG(n, e) + 0.03, !0, e.white, 8),
    e.col(vG).mat(0.9),
    MG(e, n, -70, 104, -7.3, fG, (e) => RG(n, e) + 0.06, !0, e.white, 8),
    e.coarse ||
      (e.col(CG).mat(0.6, 0.4),
      NG(
        e,
        n,
        -70,
        cG.s0,
        -7.25,
        (e) => RG(n, e) + 0.06,
        (e) => RG(n, e) + 1.6,
        1,
      ),
      NG(
        e,
        n,
        -70,
        cG.s0,
        -7.25,
        (e) => RG(n, e) + 0.06,
        (e) => RG(n, e) + 1.6,
        -1,
      )),
    e.pop(),
    PG(e, n, -70, cG.s0, -gy - 0.6, fG, (e) => RG(n, e)),
    FG(e, n, -70, cG.s0, -7.35, -7.15, iG, rG + 1.6),
    yield);
  let r = (e) => LG(n, e) > iG + 0.6,
    i = -70;
  for (; i < 104 && !r(i);) i += 1;
  if (
    (e.push().col(_G).mat(0.9),
    NG(
      e,
      n,
      i,
      104,
      pG,
      () => iG,
      (e) => Math.max(iG + 0.6, LG(n, e)),
      -1,
      e.coarse ? e.white : t.c(`paving`),
    ),
    e.col(11775910).mat(0.9),
    MG(
      e,
      n,
      i,
      cG.s0,
      pG,
      16.6,
      (e) => Math.max(iG + 0.6, LG(n, e)) + 0.03,
      !0,
      e.white,
      6,
    ),
    e.col(_G).mat(0.9),
    NG(
      e,
      n,
      -70,
      i + 1,
      16,
      (e) => Math.min(iG, LG(n, e)) - 0.3,
      () => iG + 0.35,
      1,
      e.coarse ? e.white : t.c(`paving`),
    ),
    e.pop(),
    PG(e, n, i, cG.s0, pG, 16.6, (e) => Math.max(iG + 0.6, LG(n, e))),
    !e.coarse)
  ) {
    e.push().col(CG).mat(0.6, 0.4);
    let t = (t, r, i, a) => {
      (NG(e, n, t, r, i, a, (e) => a(e) + 1.5, 1),
        NG(e, n, t, r, i, a, (e) => a(e) + 1.5, -1));
    };
    (t(i, uG.s0, 10.55, (e) => Math.max(iG + 0.6, LG(n, e)) + 0.03),
      t(-70, i, 16.1, () => iG + 0.35),
      e.pop());
  }
  if (
    (FG(e, n, i, uG.s0, 10.450000000000001, 10.700000000000001, iG, rG + 1.5),
    FG(e, n, -70, i, 15.9, 16.2, iG - 1, iG + 1.9),
    yield,
    !e.coarse)
  )
    for (let r = 0, a = Math.max(i + 4, -40); a < cG.s0 - 8; a += 13, r++) {
      let i = Math.max(iG + 0.6, LG(n, a + 3)) - 0.5;
      if (i - iG < 3.2) continue;
      let o = i - 2.6,
        s = i - 0.2,
        c = DG(n, a, 10.280000000000001),
        l = DG(n, a + 5.5, 10.280000000000001),
        u = DG(n, a, 9.4);
      (e.push().col(2895667).mat(0.6, 0.3),
        AG(
          e,
          DG(n, a - 0.15, 10.34),
          DG(n, a + 5.65, 10.34),
          o - 0.15,
          s + 0.15,
          o - 0.15,
          s + 0.15,
          u[0] - c[0],
          u[1] - c[1],
        ),
        e.col(16777215).mat(0.5, 0, 0.35, G),
        AG(
          e,
          c,
          l,
          o,
          s,
          o,
          s,
          u[0] - c[0],
          u[1] - c[1],
          IG(t, r % 2 ? `posterA` : `posterB`),
        ),
        e.pop());
    }
}
