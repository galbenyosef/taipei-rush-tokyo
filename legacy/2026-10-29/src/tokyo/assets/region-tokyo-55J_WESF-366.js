// tokyo/assets/region-tokyo-55J_WESF 366 — math
// Lines 133246-133533 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var rQ = 4.4,
  MMe = [
    {
      id: `edobashi-c1-r1`,
      cps: [
        [196, -184.6, 11, 0],
        [314, -184.6, 11, 52],
        [314, -292, 10.67, 0],
      ],
    },
    {
      id: `edobashi-r1-c1`,
      cps: [
        [325.4, -262, 10.75, 0],
        [325.4, -150, 10.3, 40],
        [305.6, -118, 9.45, 40],
        [305.6, -70, 8.5, 0],
      ],
    },
  ],
  iQ = { minX: 311, maxX: 329, minZ: -510, maxZ: -180 },
  NMe = null;
function aQ() {
  return (NMe ??= MMe.map((e) => ({ id: e.id, L: Vo(e.cps, !1, !0) })));
}
function oQ(e, t, n = 0) {
  if (e > iQ.minX - n && e < iQ.maxX + n && t > iQ.minZ && t < iQ.maxZ + n)
    return !0;
  let r = Go(e, t, 12);
  return !!r && Math.abs(r.lat) < 9 + n;
}
function PMe(e, t, n = 0) {
  for (let { L: r } of aQ())
    for (let i = 0; i < r.n - 1; i++) {
      let a = r.x[i],
        o = r.z[i],
        s = r.x[i + 1] - a,
        c = r.z[i + 1] - o,
        l = s * s + c * c || 1,
        u = Math.max(0, Math.min(1, ((e - a) * s + (t - o) * c) / l)),
        d = a + s * u - e,
        f = o + c * u - t;
      if (d * d + f * f < (4.4 + n) ** 2) return !0;
    }
  return !1;
}
function sQ(e, t, n, r) {
  let i = (e, t) => e > 150 && e < 360 && t > -320 && t < -20;
  if (!i(e, t) && !i(n, r) && !i((e + n) / 2, (t + r) / 2)) return [];
  let a = Math.hypot(n - e, r - t),
    o = Math.max(2, Math.ceil(a)),
    s = [],
    c = -1;
  for (let i = 0; i <= o; i++) {
    let a = i / o,
      l = PMe(e + (n - e) * a, t + (r - t) * a, 0.3);
    (l && c < 0 && (c = Math.max(0, a - 0.5 / o)),
      (!l || i === o) &&
        c >= 0 &&
        (s.push([c, l ? 1 : Math.min(1, a)]), (c = -1)));
  }
  return s;
}
function cQ(e) {
  let t = [],
    n = 0;
  for (let [r, i] of e) (r - n > 0.001 && t.push([n, r]), (n = Math.max(n, i)));
  return (1 - n > 0.001 && t.push([n, 1]), t);
}
var lQ = new Uint8Array(256);
for (let e = 0; e < 256; e++) lQ[e] = Math.round(255 * (e / 255) ** 2.2);
var uQ = (e) => lQ[Math.max(0, Math.min(255, Math.round(e)))],
  dQ = (e, t, n, r) => e.setColor(uQ(t), uQ(n), uQ(r)),
  fQ = (e, t, n) => t >= e.minX && t < e.maxX && n >= e.minZ && n < e.maxZ,
  pQ = {
    slab: 0.5,
    girder: 1.5,
    parapet: 1.05,
    wall: 2,
    cap: 1.7,
    pier: 1.1,
    fascia: 1.9,
  };
function mQ(e, t, n, r, i) {
  let a = t[1][0] - t[0][0],
    o = t[1][1] - t[0][1],
    s = t[1][2] - t[0][2],
    c = t[3][0] - t[0][0],
    l = t[3][1] - t[0][1],
    u = t[3][2] - t[0][2];
  (o * u - s * l) * n + (s * c - a * u) * r + (a * l - o * c) * i >= 0
    ? e.quad(
        t[0][0],
        t[0][1],
        t[0][2],
        t[1][0],
        t[1][1],
        t[1][2],
        t[2][0],
        t[2][1],
        t[2][2],
        t[3][0],
        t[3][1],
        t[3][2],
      )
    : e.quad(
        t[0][0],
        t[0][1],
        t[0][2],
        t[3][0],
        t[3][1],
        t[3][2],
        t[2][0],
        t[2][1],
        t[2][2],
        t[1][0],
        t[1][1],
        t[1][2],
      );
}
function hQ(e, t, n, r, i, a, o) {
  let s = t.bx - t.ax,
    c = t.bz - t.az,
    l = Math.hypot(s, c) || 1,
    u = -c / l,
    d = s / l,
    f = (e, n, r) => {
      let i = e === `a` ? t.ax : t.bx,
        a = e === `a` ? t.az : t.bz,
        o = e === `a` ? t.ya : t.yb;
      return [i + u * n, o + r, a + d * n];
    };
  (o.top &&
    mQ(e, [f(`a`, n, a), f(`a`, r, a), f(`b`, r, a), f(`b`, n, a)], 0, 1, 0),
    o.bottom &&
      mQ(e, [f(`a`, n, i), f(`a`, r, i), f(`b`, r, i), f(`b`, n, i)], 0, -1, 0),
    o.s1 &&
      mQ(e, [f(`a`, r, i), f(`b`, r, i), f(`b`, r, a), f(`a`, r, a)], u, 0, d),
    o.s0 &&
      mQ(
        e,
        [f(`a`, n, i), f(`b`, n, i), f(`b`, n, a), f(`a`, n, a)],
        -u,
        0,
        -d,
      ));
}
function FMe(e, t, n, r) {
  let i = _Q(t),
    a = Ao(t);
  for (let t of n.pieces)
    t.kind === `expressway` &&
      fQ(r, (t.ax + t.bx) / 2, (t.az + t.bz) / 2) &&
      IMe(e, t, i, a, !bQ(n, t));
  for (let t of a) VMe(e, t, r);
  for (let t of n.portals) fQ(r, t.x, t.z) && RMe(e, t);
  let o = t.dataset.expressways ?? [];
  for (let t of o)
    if (!t.loop)
      for (let n = 1; n + 1 < t.path.length; n++) {
        let [i, a] = t.path[n],
          o = t.levels[n];
        o > 2.5 && fQ(r, i, a) && BMe(e, i, a, o, t.halfWidth);
      }
}
var gQ = new WeakMap();
function _Q(e) {
  let t = gQ.get(e);
  if (t) return t;
  t = [];
  let n = e.dataset.expressways ?? [];
  for (let e of n)
    if (!e.loop)
      for (let n = 1; n + 1 < e.path.length; n++) {
        let [r, i] = e.path[n - 1],
          [a, o] = e.path[n],
          [s, c] = e.path[n + 1],
          l = Math.hypot(a - r, o - i) || 1,
          u = Math.hypot(s - a, c - o) || 1,
          d = (a - r) / l,
          f = (o - i) / l,
          p = (s - a) / u,
          m = (c - o) / u;
        Math.abs(d * m - f * p) < 0.3 ||
          !(Math.min(e.levels[n - 1], e.levels[n], e.levels[n + 1]) > 2.5) ||
          t.push({ x: a, z: o, ix: d, iz: f, ox: p, oz: m });
      }
  return (gQ.set(e, t), t);
}
function vQ(e, t, n) {
  if (!n.length) return e;
  let r = e.bx - e.ax,
    i = e.bz - e.az,
    a = Math.hypot(r, i) || 1,
    o = r / a,
    s = i / a,
    c = -s,
    l = o,
    u = e.ax,
    d = e.az,
    f = e.bx,
    p = e.bz;
  for (let r of n) {
    if (Math.abs(r.x - e.bx) < 0.5 && Math.abs(r.z - e.bz) < 0.5) {
      let n = Math.sign(r.ox * c + r.oz * l) === t;
      ((f += o * (n ? -e.half : e.half)), (p += s * (n ? -e.half : e.half)));
    }
    if (Math.abs(r.x - e.ax) < 0.5 && Math.abs(r.z - e.az) < 0.5) {
      let n = Math.sign(-(r.ix * c + r.iz * l)) === t;
      ((u += o * (n ? e.half : -e.half)), (d += s * (n ? e.half : -e.half)));
    }
  }
  return u === e.ax && d === e.az && f === e.bx && p === e.bz
    ? e
    : { ...e, ax: u, az: d, bx: f, bz: p };
}
function yQ(e, t, n) {
  let r = e.bx - e.ax,
    i = e.bz - e.az,
    a = Math.hypot(r, i) || 1,
    o = -i / a,
    s = r / a,
    c = [],
    l = t * (e.half - 0.2);
  for (let t of sQ(e.ax + o * l, e.az + s * l, e.bx + o * l, e.bz + s * l))
    c.push(t);
  for (let r of n) {
    if (
      !(r.axis === `z`
        ? Math.abs(e.ax - r.at) < 0.5 && Math.abs(e.bx - r.at) < 0.5
        : Math.abs(e.az - r.at) < 0.5 && Math.abs(e.bz - r.at) < 0.5) ||
      Math.sign(r.axis === `z` ? r.side * o : r.side * s) !== t
    )
      continue;
    let n = r.axis === `z` ? e.az : e.ax,
      i = r.axis === `z` ? e.bz : e.bx;
    if (Math.abs(i - n) < 1e-6) continue;
    let a = Math.min(r.top, r.gore),
      l = Math.max(r.top, r.gore),
      u = (a - n) / (i - n),
      d = (l - n) / (i - n);
    (u > d && ([u, d] = [d, u]),
      d > 0 && u < 1 && c.push([Math.max(0, u), Math.min(1, d)]));
  }
  if (!c.length) return [e];
  c.sort((e, t) => e[0] - t[0]);
  let u = (t) => ({
      x: e.ax + r * t,
      z: e.az + i * t,
      y: e.ya + (e.yb - e.ya) * t,
    }),
    d = [],
    f = 0;
  for (let [t, n] of [...c, [1, 1]]) {
    if (t - f > 0.001) {
      let n = u(f),
        r = u(t);
      d.push({
        ...e,
        ax: n.x,
        az: n.z,
        ya: n.y,
        bx: r.x,
        bz: r.z,
        yb: r.y,
        pier: !1,
      });
    }
    f = Math.max(f, n);
  }
  return d;
}
function bQ(e, t) {
  if (Math.min(t.ya, t.yb) > 9 || !e.rail.length) return !1;
  for (let n = 0; n <= 4; n++) {
    let r = n / 4;
    if (
      Bl(
        e.rail,
        t.ax + (t.bx - t.ax) * r,
        t.az + (t.bz - t.az) * r,
        t.half + 0.5,
      )
    )
      return !0;
  }
  return !1;
}
