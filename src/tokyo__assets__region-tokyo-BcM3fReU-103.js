// tokyo__assets__region-tokyo-BcM3fReU 103 — math
// Lines 48483-48779 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function bw(e, t) {
  for (let n = 0; n < _w.length; n++) {
    let r = _w[n],
      i = e - r.x,
      a = t - r.z,
      o = i * r.dx + a * r.dz;
    if (o < -6 || o > r.len) continue;
    let s = -i * r.dz + a * r.dx;
    if (!(s < -r.half || s > r.half)) return o <= 0 ? 0 : (LC * o) / r.len;
  }
  return -1;
}
var xw = -30,
  Sw = WC[1] + 45 + 5;
function Cw(e, t) {
  if (e >= xw || t >= Sw) return 0;
  if (t >= dw - fw && t <= dw + fw && e > mw) return LC * gw(e);
  if (t > -1236 && t < -1179 && e > -240 && e < -131) {
    let n = bw(e, t);
    if (n >= 0) return n;
  }
  let n = yw(e, t);
  return n > 0 ? LC * n : 0;
}
function ww(e, t, n) {
  if (e.minX >= xw || e.minZ >= Sw) return !1;
  let r = (t) => t > e.minX && t < e.maxX,
    i = (t) => t > e.minZ && t < e.maxZ;
  for (let e of [RC, VC, HC, pw, -30, pw + hw, -55]) r(e) && t.push(e);
  for (let e of [zC, BC, UC]) i(e) && n.push(e);
  for (let e of _w) {
    let a = [-6, 0, e.len];
    if (e.dx === 0) {
      for (let n of [e.x - e.half, e.x + e.half]) r(n) && t.push(n);
      for (let t of a) i(e.z + t * e.dz) && n.push(e.z + t * e.dz);
    } else {
      for (let t of [e.z - e.half, e.z + e.half]) i(t) && n.push(t);
      for (let n of a) r(e.x + n * e.dx) && t.push(e.x + n * e.dx);
    }
  }
  let a = !1;
  for (let t = e.minZ + 4; t < e.maxZ && !a; t += 8)
    for (let n = e.minX + 4; n < e.maxX; n += 8) {
      let e = Cw(n, t);
      if (e > 0.01 && e < LC - 0.01) {
        a = !0;
        break;
      }
    }
  if (a)
    for (let r = 8; r < 256; r += 8) (t.push(e.minX + r), n.push(e.minZ + r));
  return !0;
}
var Tw = 4;
function Ew(e, t, n) {
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
      if (Math.max(l - c, d - u) > Tw * 1.5) {
        let t = n(o, s),
          i = n(c + r, u + r),
          f = n(l - r, d - r);
        if (
          i !== t ||
          f !== t ||
          n(c + r, d - r) !== t ||
          n(l - r, u + r) !== t
        ) {
          Dw(e, a, c, u, l, d, l - c >= d - u, n);
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
function Dw(e, t, n, r, i, a, o, s) {
  let c = t * 3,
    l = e.pos[c + 1],
    u = t * 8,
    d = [0, 1, 2, 3, 4, 5, 6, 7].map((t) => e.ca[u + t]),
    f = o ? i - n : a - r,
    p = Math.ceil(f / Tw),
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
function Ow(e, t, n, r, i) {
  let a = 0.02,
    o = e((t + r) / 2, (n + i) / 2),
    s = e(t + a, n + a),
    c = e(r - a, n + a),
    l = e(r - a, i - a),
    u = e(t + a, i - a);
  return s !== o || c !== o || l !== o || u !== o ? 1e3 : Math.round(o * 4);
}
function kw(e, t, n, r) {
  for (let i = t * 3 + 1; i < n * 3; i += 3) e[i] += r;
}
function Aw(e, t, n, r, i) {
  if (t >= xw || n >= Sw) return 0;
  let a = 1 / 0;
  for (let o = 0; o <= 2; o++)
    for (let s = 0; s <= 2; s++) {
      let c = e(t + ((r - t) * s) / 2, n + ((i - n) * o) / 2);
      c < a && (a = c);
    }
  return a;
}
var jw = {
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
(jw.bearingDeg * Math.PI) / 180;
var Mw = 20261001;
for (let e of nC) {
  if (!e.unnamed) continue;
  let t = (e.from + e.to) / 2,
    n = e.lanesPerDir * KS + e.median / 2 + e.sidewalk + 2;
  e.name = cC(e.axis === `x` ? t : e.at + n, e.axis === `x` ? e.at + n : t);
}
var Nw = {
    id: `ginza-hokoten`,
    name: G(`銀座 歩行者天国`, `銀座 步行者天國`, `Ginza Pedestrian Paradise`),
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
  Pw = {
    id: `akihabara-hokoten`,
    name: G(
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
  Fw = Og(nC, xC, KS),
  Iw = {
    regionId: `tokyo`,
    mapVersion: `tokyo-v1`,
    seed: Mw,
    drivingSide: `left`,
    bounds: GS,
    laneWidth: KS,
    sidewalkHeight: 0.15,
    majorRoads: nC,
    minorStreets: rC,
    districts: zS,
    districtExtras: BS,
    landmarks: xC,
    hills: mte,
    spawns: TC,
    stations: wC,
    namedPlaces: SC,
    water: { westX: -1 / 0, northZ: -1 / 0, level: bg, at: kg(Fw), levels: xg },
    labels: vC,
    pois: ote,
    rail: dte,
    expressways: fte,
    waterBodies: Cg,
    bridges: Fw,
    terrain: pte,
    terrainAt: Cw,
    closures: [Nw, Pw],
  },
  Lw = GS,
  Rw = 4,
  zw = 8,
  Bw = 260,
  Vw = -20,
  Hw = 2e3,
  Uw = 28;
function Ww() {
  let e = Lw.minX - zw,
    t = pg.minX + Rw,
    n = yg.farX - Rw,
    r = Lw.maxX + 15,
    i = Lw.minZ - zw - 2,
    a = Lw.maxZ + zw + 2;
  return [
    [t - Bw, pg.minZ, t, pg.maxZ],
    [e - Bw, i - Bw, e, a + Bw],
    [n, yg.northZ, n + Bw, a + Bw],
    [r, i - Bw, r + Bw, yg.northZ],
    [e - Bw, i - Bw, n + Bw, i],
    [e - Bw, a, n + Bw, a + Bw],
  ];
}
var Gw = class {
  ctx;
  slabs = Ww();
  warnT = 0;
  constructor(e) {
    this.ctx = e;
    for (let [t, n, r, i] of this.slabs)
      e.statics.addBox(t, n, r, i, Vw, Hw, `world-edge`);
  }
  distance(e, t) {
    let n = 1 / 0;
    for (let [r, i, a, o] of this.slabs) {
      let s = Math.max(r - e, 0, e - a),
        c = Math.max(i - t, 0, t - o),
        l =
          s === 0 && c === 0
            ? -Math.min(e - r, a - e, t - i, o - t)
            : Math.hypot(s, c);
      l < n && (n = l);
    }
    return n;
  }
  update(e) {
    if (((this.warnT -= e), this.warnT > 0)) return;
    let t = this.ctx.player?.position;
    t &&
      ((this.warnT = 0.5),
      !(this.distance(t.x, t.z) > Uw) &&
        ((this.warnT = 9),
        this.ctx.events.emit(`notify`, {
          text: { zh: `前方無路，請迴轉`, en: `Edge of the map — turn back` },
          duration: 3.5,
          kind: `info`,
        })));
  }
};
function Kw(e) {
  return new Gw(e);
}
