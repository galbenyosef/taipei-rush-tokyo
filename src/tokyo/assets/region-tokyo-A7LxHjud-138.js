// tokyo/assets/region-tokyo-A7LxHjud 138 — minz
// Lines 59268-59603 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function Ofe(e, t) {
  for (let n = 0; n < Tb.length; n++) {
    let r = Tb[n],
      i = e - r.x,
      a = t - r.z,
      o = i * r.dx + a * r.dz;
    if (o < -6 || o > r.len) continue;
    let s = -i * r.dz + a * r.dx;
    if (!(s < -r.half || s > r.half)) return o <= 0 ? 0 : (Zy * o) / r.len;
  }
  return -1;
}
var Db = Ip.inner,
  Ob = Jv.faceX,
  kb = Jv.terrace,
  Ab = { minX: -700, maxX: Ob, minZ: Db.minZ, maxZ: -20 },
  jb = { minX: -600, maxX: Ob, minZ: -160, maxZ: -64 },
  Mb = { x0: -560, x1: -600, minZ: -115, maxZ: -105 },
  Nb = -30,
  Pb = ib[1] + 45 + 5,
  Fb = {
    h: 7,
    x0: -1690,
    x1: -1560,
    x0e: -1340,
    x1e: -1240,
    n0: 820,
    n1: 880,
    s0: 1440,
    s1: 1500,
  };
function Ib(e, t) {
  if (e <= Fb.x0 || e >= Fb.x1e || t <= Fb.n0 || t >= Fb.s1) return 0;
  let n =
      e < Fb.x1
        ? Eb((e - Fb.x0) / (Fb.x1 - Fb.x0))
        : e > Fb.x0e
          ? 1 - Eb((e - Fb.x0e) / (Fb.x1e - Fb.x0e))
          : 1,
    r =
      t < Fb.n1
        ? Eb((t - Fb.n0) / (Fb.n1 - Fb.n0))
        : t > Fb.s0
          ? 1 - Eb((t - Fb.s0) / (Fb.s1 - Fb.s0))
          : 1;
  return Fb.h * n * r;
}
var Lb = (e, t, n, r) => n > Fb.x0 && e < Fb.x1e && r > Fb.n0 && t < Fb.s1;
function Rb(e, t) {
  return e > my.x0 && e < my.x1 && t > my.z0 && t < my.z1
    ? Ey(e, t)
    : e > Dy.x0 && e < Dy.x1 && t > Dy.z0 && t < Dy.z1
      ? qy(e, t)
      : t > oy.z0 && t < oy.z1 && e > oy.x0 && e < oy.x1
        ? fy(e, t)
        : Ib(e, t);
}
function zb(e, t) {
  if (e > Db.minX && e < Ob && t > Db.minZ && t < Db.maxZ)
    return e > jb.minX && t > jb.minZ && t < jb.maxZ
      ? e < Mb.x0 && t > Mb.minZ && t < Mb.maxZ
        ? (kb * (Mb.x0 - e)) / (Mb.x0 - Mb.x1)
        : 0
      : kb;
  if (e > my.x0 && e < my.x1 && t > my.z0 && t < my.z1) return Ey(e, t);
  if (e > Dy.x0 && e < Dy.x1 && t > Dy.z0 && t < Dy.z1) return qy(e, t);
  if (t > Fb.n0 && e < Fb.x1e && e > Fb.x0) return Ib(e, t);
  if (t > oy.z0 && t < oy.z1 && e > oy.x0 && e < oy.x1) return fy(e, t);
  if (e >= Nb || t >= Pb) return 0;
  if (t >= yb - bb && t <= yb + bb && e > Sb) return Zy * wb(e);
  if (t > -1236 && t < -1179 && e > -240 && e < -131) {
    let n = Ofe(e, t);
    if (n >= 0) return n;
  }
  let n = Dfe(e, t);
  return n > 0 ? Zy * n : 0;
}
function kfe(e, t, n) {
  let r = (t) => t > e.minX && t < e.maxX,
    i = (t) => t > e.minZ && t < e.maxZ,
    a = e.maxX > Db.minX && e.minX < Ob && e.maxZ > Db.minZ && e.minZ < Db.maxZ;
  if (a) {
    for (let e of [Db.minX, Ob, jb.minX, Mb.x0]) r(e) && t.push(e);
    for (let e of [Db.minZ, Db.maxZ, jb.minZ, jb.maxZ, Mb.minZ, Mb.maxZ])
      i(e) && n.push(e);
  }
  if (
    (Oy(e.minX, e.minZ, e.maxX, e.maxZ) &&
      (gfe(e, t, n), !Lb(e.minX, e.minZ, e.maxX, e.maxZ))) ||
    (hy(e.minX, e.minZ, e.maxX, e.maxZ) &&
      (lfe(e, t, n), !Lb(e.minX, e.minZ, e.maxX, e.maxZ)))
  )
    return !0;
  if (Lb(e.minX, e.minZ, e.maxX, e.maxZ)) {
    for (let r = 8; r < 256; r += 8) (t.push(e.minX + r), n.push(e.minZ + r));
    return !0;
  }
  if (py(e.minX, e.minZ, e.maxX, e.maxZ)) {
    rfe(r, i, t, n);
    for (let r = 8; r < 256; r += 8) (t.push(e.minX + r), n.push(e.minZ + r));
    return !0;
  }
  if (e.minX >= Nb || e.minZ >= Pb) return a;
  for (let e of [Qy, tb, nb, xb, -30, xb + Cb, -55]) r(e) && t.push(e);
  for (let e of [$y, eb, rb]) i(e) && n.push(e);
  for (let e of Tb) {
    let a = [-6, 0, e.len];
    if (e.dx === 0) {
      for (let n of [e.x - e.half, e.x + e.half]) r(n) && t.push(n);
      for (let t of a) i(e.z + t * e.dz) && n.push(e.z + t * e.dz);
    } else {
      for (let t of [e.z - e.half, e.z + e.half]) i(t) && n.push(t);
      for (let n of a) r(e.x + n * e.dx) && t.push(e.x + n * e.dx);
    }
  }
  let o = !1;
  for (let t = e.minZ + 4; t < e.maxZ && !o; t += 8)
    for (let n = e.minX + 4; n < e.maxX; n += 8) {
      let e = zb(n, t);
      if (e > 0.01 && e < Zy - 0.01 && Math.abs(e - kb) > 0.01) {
        o = !0;
        break;
      }
    }
  if (o)
    for (let r = 8; r < 256; r += 8) (t.push(e.minX + r), n.push(e.minZ + r));
  return !0;
}
var Bb = 4;
function Afe(e, t, n) {
  let r = 0.05,
    i = e.n;
  for (let a = t; a + 3 < i; a += 4) {
    let t = e.pos,
      i = a * 3,
      o = (t[i] + t[i + 3] + t[i + 6] + t[i + 9]) * 0.25,
      s = (t[i + 2] + t[i + 5] + t[i + 8] + t[i + 11]) * 0.25;
    if (
      t[i + 1] === t[i + 4] &&
      t[i + 1] === t[i + 7] &&
      t[i + 1] === t[i + 10]
    ) {
      let c = Math.min(t[i], t[i + 3], t[i + 6], t[i + 9]),
        l = Math.max(t[i], t[i + 3], t[i + 6], t[i + 9]),
        u = Math.min(t[i + 2], t[i + 5], t[i + 8], t[i + 11]),
        d = Math.max(t[i + 2], t[i + 5], t[i + 8], t[i + 11]);
      if (Math.max(l - c, d - u) > Bb * 1.5) {
        let t = n(o, s),
          i = n(c + r, u + r),
          f = n(l - r, d - r);
        if (
          i !== t ||
          f !== t ||
          n(c + r, d - r) !== t ||
          n(l - r, u + r) !== t
        ) {
          jfe(e, a, c, u, l, d, l - c >= d - u, n);
          continue;
        }
      }
    }
    for (let e = 0; e < 4; e++) {
      let a = i + e * 3,
        c = t[a],
        l = t[a + 2],
        u = o - c,
        d = s - l,
        f = Math.sqrt(u * u + d * d),
        p = f > r ? r / f : 0,
        m = n(c + u * p, l + d * p);
      m !== 0 && (t[a + 1] += m);
    }
  }
}
function jfe(e, t, n, r, i, a, o, s) {
  let c = t * 3,
    l = e.pos[c + 1],
    u = t * 8,
    d = [0, 1, 2, 3, 4, 5, 6, 7].map((t) => e.ca[u + t]),
    f = o ? i - n : a - r,
    p = Math.ceil(f / Bb),
    m = 0.05,
    h = (t, n, r, i) => {
      let a = r - t,
        o = i - n,
        c = Math.sqrt(a * a + o * o),
        u = c > m ? m / c : 0,
        f = e.vertex(t, l + s(t + a * u, n + o * u), n, 0, 1, 0, 0, 0),
        p = f * 8;
      for (let t = 0; t < 8; t++) e.ca[p + t] = d[t];
      return f;
    };
  for (let t = 0; t < p; t++) {
    let s = (o ? n : r) + (f * t) / p,
      c = (o ? n : r) + (f * (t + 1)) / p,
      [l, u, d, m] = o ? [s, r, c, a] : [n, s, i, c],
      g = (l + d) / 2,
      _ = (u + m) / 2,
      v = h(l, m, g, _),
      y = h(d, m, g, _),
      b = h(d, u, g, _),
      x = h(l, u, g, _);
    (e.tri(v, y, b), e.tri(v, b, x));
  }
  let g = e.pos;
  for (let e = 1; e < 4; e++)
    ((g[c + e * 3] = g[c]),
      (g[c + e * 3 + 1] = g[c + 1]),
      (g[c + e * 3 + 2] = g[c + 2]));
}
function Mfe(e, t, n, r, i) {
  let a = 0.02,
    o = e((t + r) / 2, (n + i) / 2),
    s = e(t + a, n + a),
    c = e(r - a, n + a),
    l = e(r - a, i - a),
    u = e(t + a, i - a);
  return s !== o || c !== o || l !== o || u !== o ? 1e3 : Math.round(o * 4);
}
function Nfe(e, t, n, r) {
  for (let i = t * 3 + 1; i < n * 3; i += 3) e[i] += r;
}
function Pfe(e, t, n, r, i) {
  if (
    (t >= Nb || n >= Pb) &&
    !Lb(t, n, r, i) &&
    !py(t, n, r, i) &&
    !hy(t, n, r, i) &&
    !Oy(t, n, r, i)
  )
    return 0;
  let a = 1 / 0;
  for (let o = 0; o <= 2; o++)
    for (let s = 0; s <= 2; s++) {
      let c = e(t + ((r - t) * s) / 2, n + ((i - n) * o) / 2);
      c < a && (a = c);
    }
  return a;
}
var Vb = {
  originLat: 35.6812,
  originLon: 139.7671,
  bearingDeg: 18,
  scaleNS: 0.32,
  stretch: 1.4,
  corridorMin: -450,
  corridorMax: 600,
  metresPerDegLat: 110953.07896367273,
  metresPerDegLon: 90525.14652241119,
};
(Vb.bearingDeg * Math.PI) / 180;
var Ffe = 20261001;
for (let e of Cv) {
  if (!e.unnamed) continue;
  let t = (e.from + e.to) / 2,
    n = e.lanesPerDir * yv + e.median / 2 + e.sidewalk + 2;
  e.name = Dv(e.axis === `x` ? t : e.at + n, e.axis === `x` ? e.at + n : t);
}
var Ife = {
    id: `ginza-hokoten`,
    name: z(`銀座 歩行者天国`, `銀座 步行者天國`, `Ginza Pedestrian Paradise`),
    road: `chuo-ginza`,
    from: 137,
    to: 608,
    days: [0, 6],
    holidays: !0,
    hours: [
      { months: [4, 9], start: 12, end: 18 },
      { months: [10, 3], start: 12, end: 17 },
    ],
  },
  Lfe = {
    id: `akihabara-hokoten`,
    name: z(
      `秋葉原 歩行者天国`,
      `秋葉原 步行者天國`,
      `Akihabara Pedestrian Paradise`,
    ),
    road: `chuo-akihabara`,
    from: -770,
    to: -612,
    days: [0],
    holidays: !1,
    hours: [
      { months: [4, 9], start: 13, end: 18 },
      { months: [10, 3], start: 13, end: 17 },
    ],
  },
  Hb = Jce(Cv, Mv, yv),
  Ub = {
    regionId: `tokyo`,
    mapVersion: `tokyo-v1`,
    seed: Ffe,
    drivingSide: `left`,
    bounds: bde,
    coreBounds: vv,
    sectors: [...Cp, ...yc],
    laneWidth: yv,
    sidewalkHeight: 0.15,
    majorRoads: Cv,
    minorStreets: Cde,
    districts: fv,
    districtExtras: pv,
    landmarks: Mv,
    hills: Bde,
    spawns: Pv,
    stations: Pde,
    namedPlaces: Nde,
    water: {
      westX: -1 / 0,
      northZ: -1 / 0,
      level: Hce,
      at: Yce(Hb),
      levels: Uce,
    },
    labels: Mde,
    pois: Rde,
    rail: Rre,
    expressways: zre,
    waterBodies: Wce,
    bridges: Hb,
    terrain: zde,
    terrainAt: zb,
    hillCut: Xy,
    closures: [Ife, Lfe],
  };
r.add({
  "皇居內苑：非開放區域（東御苑由大手門入園）": `皇居内：立入禁止（東御苑は大手門から）`,
});
var Wb = vv,
  Gb = Object.fromEntries(Cp.map((e) => [e.id, e])),
  Kb = 4,
  qb = 8,
  Rfe = -20,
  zfe = 2e3,
  Bfe = 28;
