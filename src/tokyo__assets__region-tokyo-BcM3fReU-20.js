// tokyo__assets__region-tokyo-BcM3fReU 20 — math
// Lines 14994-15338 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function zc(e, t, n) {
  let r = t.kinds,
    i = { x: 0, z: 0 },
    a = r.length,
    o = new Uint8Array(a),
    s = new Uint8Array(a),
    c = [];
  for (let e of n) {
    if (e === t) continue;
    let n = [],
      r = { x: 0, z: 0, tx: 0, tz: 1 };
    for (let t = e.draw0; t <= e.draw1; t += 2)
      (e.path.at(t, r),
        n.push(
          r.x,
          r.z,
          Math.max(-e.edge0.at(t), e.edge1.at(t)),
          e.deck.at(t),
        ));
    c.push(new Float32Array(n));
  }
  let l = { x: 0, z: 0, tx: 0, tz: 1 };
  for (let n = 0; n < a; n++) {
    let a = n;
    if (a < t.draw0 || a > t.draw1) {
      r[n] = Oc.None;
      continue;
    }
    let u = !1,
      d = !1,
      f = 0,
      p = t.edge0.at(a),
      m = t.edge1.at(a);
    for (let n = 1; n <= 7; n++) {
      t.path.pos(a, p + ((m - p) * n) / 8, i);
      let r = e.surfaceAt(i.x, i.z);
      r === `road` || r === `crosswalk`
        ? (u = !0)
        : r === `sidewalk`
          ? f++
          : r === `water` && (d = !0);
    }
    (f >= 2 && (u = !0), t.path.at(a, l));
    let h = (m - p) / 2,
      g = !1,
      _ = t.deck.at(a);
    for (let e of c) {
      for (let t = 0; t < e.length; t += 4) {
        if (e[t + 3] > _ - 3) continue;
        let n = e[t] - l.x,
          r = e[t + 1] - l.z,
          i = e[t + 2] + h * 0.2 + 3;
        if (n * n + r * r < i * i) {
          g = !0;
          break;
        }
      }
      if (g) break;
    }
    let v = 0;
    for (let n = 1; n <= 7; n++) {
      t.path.pos(a, p + ((m - p) * n) / 8, i);
      let r = e.surfaceAt(i.x, i.z);
      r !== `road` &&
        r !== `crosswalk` &&
        r !== `sidewalk` &&
        r !== `water` &&
        v++;
    }
    ((o[n] = +!!d),
      (s[n] = +(!g && v >= 3)),
      (r[n] = g && t.upper ? Oc.Upper : u || d || g ? Oc.Girder : Oc.Frame));
  }
  let u = 0;
  for (; u < a;)
    if (r[u] !== Oc.Girder) {
      let e = u;
      for (; e < a && r[e] !== Oc.Girder;) e++;
      if (u > 0 && e < a && e - u < 8 && r[u - 1] === Oc.Girder)
        for (let t = u; t < e; t++) r[t] = Oc.Girder;
      u = e;
    } else u++;
  let d = r.slice();
  for (let e = 0; e < a; e++)
    if (d[e] === Oc.Girder)
      for (let t of [-2, -1, 1, 2])
        e + t >= 0 &&
          e + t < a &&
          d[e + t] === Oc.Frame &&
          (r[e + t] = Oc.Girder);
  let f = [];
  for (u = 0; u < a;) {
    if (r[u] !== Oc.Girder) {
      u++;
      continue;
    }
    let e = u,
      t = !1;
    for (; e < a && r[e] === Oc.Girder;) ((t ||= o[e] === 1), e++);
    let n = u;
    for (; e - n > Dc;) {
      let r = -1,
        i = 1 / 0;
      for (let t = n + 10; t < e - 10; t++) {
        if (!s[t]) continue;
        let e = Math.abs(t - (n + Dc * 0.85));
        e < i && ((i = e), (r = t));
      }
      if (r < 0 || r - n > Dc * 1.6) break;
      (f.push({ s0: n, s1: r, water: t }), (n = r));
    }
    (f.push({ s0: n, s1: e, water: t }), (u = e));
  }
  t.girders = f;
  for (let [e, n] of t.brick)
    for (
      let t = Math.max(0, Math.floor(e));
      t <= Math.min(a - 1, Math.ceil(n));
      t++
    )
      r[t] === Oc.Frame && (r[t] = Oc.Brick);
}
var Bc = -2560,
  Vc = -2560,
  Hc = (e) => Math.floor((e - Bc) / 256),
  Uc = (e) => Math.floor((e - Vc) / 256),
  Wc = (e, t) => t * 32 + e,
  Gc = (e, t) => Wc(Hc(e), Uc(t));
function Kc(e) {
  let t = e % 32,
    n = Math.floor(e / 32),
    r = Bc + t * 256,
    i = Vc + n * 256;
  return {
    key: e,
    ix: t,
    iz: n,
    minX: r,
    minZ: i,
    maxX: r + 256,
    maxZ: i + 256,
  };
}
function qc(e, t = 32) {
  let n = e.bounds,
    r = Math.max(0, Hc(n.minX - t)),
    i = Math.min(31, Hc(n.maxX + t)),
    a = Math.max(0, Uc(n.minZ - t)),
    o = Uc(n.maxZ + t),
    s = [];
  for (let e = a; e <= o; e++) for (let t = r; t <= i; t++) s.push(Wc(t, e));
  return s;
}
var Jc = (e, t, n) => t >= e.minX && t < e.maxX && n >= e.minZ && n < e.maxZ,
  Yc = { id: `kabukiza-tower`, x0: 196, z0: 417.5, x1: 243, z1: 458.5 },
  Xc = [
    {
      id: `akiba-gateway-south`,
      x0: -110.75,
      z0: -638,
      x1: -86.25,
      z1: -618.25,
    },
    {
      id: `akiba-gateway-north`,
      x0: -110.75,
      z0: -684.75,
      x1: -86.25,
      z1: -650.2,
    },
  ],
  Zc = {
    wallX: -119.7,
    west: { x0: -119.7, x1: -101, zb: -1232, zf: -1199 },
    hall: { x0: -119.7, x1: -107.5, zb: -1213.5, zf: -1199 },
    central: { x0: -101, x1: -65.5, zb: -1232, zf: -1204, base: -1201 },
    east: { x0: -65.5, x1: -48, zb: -1225, zf: -1206 },
    lotZ: -1182.25,
    deck: { x0: -76, x1: -68 },
    vision: { x0: -119.7, x1: -114.6, z0: -1187.6, z1: -1182.6 },
  },
  Qc = [
    {
      id: `ueno-station-east-wing`,
      x0: -75.5,
      z0: -1225.5,
      x1: -47,
      z1: -1182.4,
    },
  ],
  $c = [
    {
      id: `ueno-station-west-wing`,
      x0: Zc.hall.x1,
      z0: Zc.west.zb,
      x1: Zc.west.x1,
      z1: Zc.west.zf,
    },
    {
      id: `ueno-station-west-back`,
      x0: Zc.west.x0,
      z0: Zc.west.zb,
      x1: Zc.hall.x1,
      z1: Zc.hall.zb,
    },
    {
      id: `ueno-station-central`,
      x0: Zc.central.x0,
      z0: Zc.central.zb,
      x1: Zc.central.x1,
      z1: Zc.central.base,
    },
    {
      id: `ueno-station-east`,
      x0: Zc.east.x0,
      z0: Zc.east.zb,
      x1: Zc.east.x1,
      z1: Zc.east.zf,
    },
    { id: `ueno-station-vision`, ...Zc.vision },
  ],
  el = [
    {
      id: `ueno-station-west-wing`,
      x0: -123,
      z0: Zc.west.zb - 0.5,
      x1: -116,
      z1: Zc.west.zf,
    },
  ];
function tl(e, t) {
  for (let n of el) if (e > n.x0 && e < n.x1 && t > n.z0 && t < n.z1) return !0;
  return !1;
}
var nl = [
    {
      id: `midtown-nihonbashi-podium`,
      x0: 268.2,
      z0: -144.8,
      x1: 279.6,
      z1: -126.4,
    },
    {
      id: `midtown-nihonbashi-riverside`,
      x0: 279.8,
      z0: -158.6,
      x1: 288,
      z1: -148.6,
    },
    { id: `tokyo-beacon-east`, x0: 35.25, z0: -158.75, x1: 62.75, z1: -125.75 },
    { id: `tokyo-beacon-west`, x0: -9.75, z0: -158.75, x1: 24.75, z1: -125.75 },
  ],
  rl = [Yc, ...Xc, ...Qc, ...nl];
function il(e, t, n, r) {
  for (let i of rl) if (n > i.x0 && e < i.x1 && r > i.z0 && t < i.z1) return !0;
  return !1;
}
var al = [
    { id: `tokyo-station-marunouchi-n`, x0: -37, z0: -99, x1: -13, z1: -20.2 },
    { id: `tokyo-station-marunouchi-s`, x0: -37, z0: -12, x1: -13, z1: 99 },
    { id: `tokyo-station-dome-n`, x0: -40.5, z0: -82, x1: -37, z1: -60 },
    { id: `tokyo-station-dome-s`, x0: -40.5, z0: 60, x1: -37, z1: 82 },
    { id: `yaesu-deck-columns`, x0: 29.8, z0: -58, x1: 33.6, z1: 72 },
    { id: `yaesu-tower-north`, x0: 24, z0: -92, x1: 60, z1: -61 },
    { id: `yaesu-tower-south`, x0: 24, z0: 75, x1: 60, z1: 108 },
    {
      id: `nihonbashi-oyabashira-nw`,
      x0: 231.1,
      z0: -190.7,
      x1: 233.2,
      z1: -188.6,
    },
    {
      id: `nihonbashi-oyabashira-ne`,
      x0: 266.8,
      z0: -190.7,
      x1: 268.9,
      z1: -188.6,
    },
    {
      id: `nihonbashi-oyabashira-sw`,
      x0: 231.1,
      z0: -171.4,
      x1: 233.2,
      z1: -169.3,
    },
    {
      id: `nihonbashi-oyabashira-se`,
      x0: 266.8,
      z0: -171.4,
      x1: 268.9,
      z1: -169.3,
    },
    { id: `nihonbashi-genpyo`, x0: 228.5, z0: -188.8, x1: 231.1, z1: -187.8 },
    { id: `nihonbashi-otohime`, x0: 269.5, z0: -188.8, x1: 271.4, z1: -187.8 },
    {
      id: `nihonbashi-pier-gate`,
      x0: 270.4,
      z0: -172.9,
      x1: 270.8,
      z1: -171.1,
    },
    { id: `akiba-tvkaikan`, x0: -110.5, z0: -632.2, x1: -86.5, z1: -618.75 },
    { id: `akiba-north-glass`, x0: -110.5, z0: -684.5, x1: -86.5, z1: -655 },
    ...$c,
    {
      id: `midtown-nihonbashi-podium`,
      x0: 268.2,
      z0: -144.8,
      x1: 279.6,
      z1: -126.4,
    },
    {
      id: `midtown-nihonbashi-riverside`,
      x0: 279.8,
      z0: -158.6,
      x1: 288,
      z1: -148.6,
    },
    { id: `tokiwabashi-beacon`, x0: 46.4, z0: -157, x1: 62.6, z1: -126.8 },
    { id: `beacon-tower-site`, x0: 3.4, z0: -158.8, x1: 24.9, z1: -125.8 },
  ],
  ol = [
    {
      id: `tokyo-station-central-passage`,
      x0: -34,
      z0: -20,
      x1: -13,
      z1: -12.2,
    },
    {
      id: `akiba-denshi-center-aisle`,
      x0: -106.2,
      z0: -645.3,
      x1: -85.5,
      z1: -642.7,
    },
  ];
function sl(e, t) {
  for (let n of ol) if (e > n.x0 && e < n.x1 && t > n.z0 && t < n.z1) return !0;
  return !1;
}
var cl = [
  { id: `nihonbashi-deck-sides`, x0: 231, z0: -188, x1: 269, z1: -172 },
];
