// tokyo/assets/region-tokyo-55J_WESF 138 — minz
// Lines 59177-59512 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function gfe(e, t) {
  for (let n = 0; n < Sb.length; n++) {
    let r = Sb[n],
      i = e - r.x,
      a = t - r.z,
      o = i * r.dx + a * r.dz;
    if (o < -6 || o > r.len) continue;
    let s = -i * r.dz + a * r.dx;
    if (!(s < -r.half || s > r.half)) return o <= 0 ? 0 : (Jy * o) / r.len;
  }
  return -1;
}
var wb = Np.inner,
  Tb = Gv.faceX,
  Eb = Gv.terrace,
  Db = { minX: -700, maxX: Tb, minZ: wb.minZ, maxZ: -20 },
  Ob = { minX: -600, maxX: Tb, minZ: -160, maxZ: -64 },
  kb = { x0: -560, x1: -600, minZ: -115, maxZ: -105 },
  Ab = -30,
  jb = tb[1] + 45 + 5,
  Mb = {
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
function Nb(e, t) {
  if (e <= Mb.x0 || e >= Mb.x1e || t <= Mb.n0 || t >= Mb.s1) return 0;
  let n =
      e < Mb.x1
        ? Cb((e - Mb.x0) / (Mb.x1 - Mb.x0))
        : e > Mb.x0e
          ? 1 - Cb((e - Mb.x0e) / (Mb.x1e - Mb.x0e))
          : 1,
    r =
      t < Mb.n1
        ? Cb((t - Mb.n0) / (Mb.n1 - Mb.n0))
        : t > Mb.s0
          ? 1 - Cb((t - Mb.s0) / (Mb.s1 - Mb.s0))
          : 1;
  return Mb.h * n * r;
}
var Pb = (e, t, n, r) => n > Mb.x0 && e < Mb.x1e && r > Mb.n0 && t < Mb.s1;
function Fb(e, t) {
  return e > dy.x0 && e < dy.x1 && t > dy.z0 && t < dy.z1
    ? Cy(e, t)
    : e > wy.x0 && e < wy.x1 && t > wy.z0 && t < wy.z1
      ? Wy(e, t)
      : t > ry.z0 && t < ry.z1 && e > ry.x0 && e < ry.x1
        ? ly(e, t)
        : Nb(e, t);
}
function Ib(e, t) {
  if (e > wb.minX && e < Tb && t > wb.minZ && t < wb.maxZ)
    return e > Ob.minX && t > Ob.minZ && t < Ob.maxZ
      ? e < kb.x0 && t > kb.minZ && t < kb.maxZ
        ? (Eb * (kb.x0 - e)) / (kb.x0 - kb.x1)
        : 0
      : Eb;
  if (e > dy.x0 && e < dy.x1 && t > dy.z0 && t < dy.z1) return Cy(e, t);
  if (e > wy.x0 && e < wy.x1 && t > wy.z0 && t < wy.z1) return Wy(e, t);
  if (t > Mb.n0 && e < Mb.x1e && e > Mb.x0) return Nb(e, t);
  if (t > ry.z0 && t < ry.z1 && e > ry.x0 && e < ry.x1) return ly(e, t);
  if (e >= Ab || t >= jb) return 0;
  if (t >= gb - _b && t <= gb + _b && e > yb) return Jy * xb(e);
  if (t > -1236 && t < -1179 && e > -240 && e < -131) {
    let n = gfe(e, t);
    if (n >= 0) return n;
  }
  let n = hfe(e, t);
  return n > 0 ? Jy * n : 0;
}
function _fe(e, t, n) {
  let r = (t) => t > e.minX && t < e.maxX,
    i = (t) => t > e.minZ && t < e.maxZ,
    a = e.maxX > wb.minX && e.minX < Tb && e.maxZ > wb.minZ && e.minZ < wb.maxZ;
  if (a) {
    for (let e of [wb.minX, Tb, Ob.minX, kb.x0]) r(e) && t.push(e);
    for (let e of [wb.minZ, wb.maxZ, Ob.minZ, Ob.maxZ, kb.minZ, kb.maxZ])
      i(e) && n.push(e);
  }
  if (
    (Ty(e.minX, e.minZ, e.maxX, e.maxZ) &&
      (ife(e, t, n), !Pb(e.minX, e.minZ, e.maxX, e.maxZ))) ||
    (fy(e.minX, e.minZ, e.maxX, e.maxZ) &&
      (Zde(e, t, n), !Pb(e.minX, e.minZ, e.maxX, e.maxZ)))
  )
    return !0;
  if (Pb(e.minX, e.minZ, e.maxX, e.maxZ)) {
    for (let r = 8; r < 256; r += 8) (t.push(e.minX + r), n.push(e.minZ + r));
    return !0;
  }
  if (uy(e.minX, e.minZ, e.maxX, e.maxZ)) {
    Gde(r, i, t, n);
    for (let r = 8; r < 256; r += 8) (t.push(e.minX + r), n.push(e.minZ + r));
    return !0;
  }
  if (e.minX >= Ab || e.minZ >= jb) return a;
  for (let e of [Yy, Qy, $y, vb, -30, vb + bb, -55]) r(e) && t.push(e);
  for (let e of [Xy, Zy, eb]) i(e) && n.push(e);
  for (let e of Sb) {
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
      let e = Ib(n, t);
      if (e > 0.01 && e < Jy - 0.01 && Math.abs(e - Eb) > 0.01) {
        o = !0;
        break;
      }
    }
  if (o)
    for (let r = 8; r < 256; r += 8) (t.push(e.minX + r), n.push(e.minZ + r));
  return !0;
}
var Lb = 4;
function vfe(e, t, n) {
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
      if (Math.max(l - c, d - u) > Lb * 1.5) {
        let t = n(o, s),
          i = n(c + r, u + r),
          f = n(l - r, d - r);
        if (
          i !== t ||
          f !== t ||
          n(c + r, d - r) !== t ||
          n(l - r, u + r) !== t
        ) {
          yfe(e, a, c, u, l, d, l - c >= d - u, n);
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
function yfe(e, t, n, r, i, a, o, s) {
  let c = t * 3,
    l = e.pos[c + 1],
    u = t * 8,
    d = [0, 1, 2, 3, 4, 5, 6, 7].map((t) => e.ca[u + t]),
    f = o ? i - n : a - r,
    p = Math.ceil(f / Lb),
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
function bfe(e, t, n, r, i) {
  let a = 0.02,
    o = e((t + r) / 2, (n + i) / 2),
    s = e(t + a, n + a),
    c = e(r - a, n + a),
    l = e(r - a, i - a),
    u = e(t + a, i - a);
  return s !== o || c !== o || l !== o || u !== o ? 1e3 : Math.round(o * 4);
}
function xfe(e, t, n, r) {
  for (let i = t * 3 + 1; i < n * 3; i += 3) e[i] += r;
}
function Sfe(e, t, n, r, i) {
  if (
    (t >= Ab || n >= jb) &&
    !Pb(t, n, r, i) &&
    !uy(t, n, r, i) &&
    !fy(t, n, r, i) &&
    !Ty(t, n, r, i)
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
var Rb = {
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
(Rb.bearingDeg * Math.PI) / 180;
var Cfe = 20261001;
for (let e of bv) {
  if (!e.unnamed) continue;
  let t = (e.from + e.to) / 2,
    n = e.lanesPerDir * gv + e.median / 2 + e.sidewalk + 2;
  e.name = wv(e.axis === `x` ? t : e.at + n, e.axis === `x` ? e.at + n : t);
}
var wfe = {
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
  Tfe = {
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
  zb = Ice(bv, kv, gv),
  Bb = {
    regionId: `tokyo`,
    mapVersion: `tokyo-v1`,
    seed: Cfe,
    drivingSide: `left`,
    bounds: cde,
    coreBounds: hv,
    sectors: [...bp, ...yc],
    laneWidth: gv,
    sidewalkHeight: 0.15,
    majorRoads: bv,
    minorStreets: dde,
    districts: lv,
    districtExtras: uv,
    landmarks: kv,
    hills: Ode,
    spawns: jv,
    stations: Sde,
    namedPlaces: xde,
    water: {
      westX: -1 / 0,
      northZ: -1 / 0,
      level: Ace,
      at: Lce(zb),
      levels: jce,
    },
    labels: bde,
    pois: Ede,
    rail: Are,
    expressways: jre,
    waterBodies: Mce,
    bridges: zb,
    terrain: Dde,
    terrainAt: Ib,
    hillCut: qy,
    closures: [wfe, Tfe],
  };
r.add({
  "皇居內苑：非開放區域（東御苑由大手門入園）": `皇居内：立入禁止（東御苑は大手門から）`,
});
var Vb = hv,
  Hb = Object.fromEntries(bp.map((e) => [e.id, e])),
  Ub = 4,
  Wb = 8,
  Efe = -20,
  Dfe = 2e3,
  Ofe = 28;
