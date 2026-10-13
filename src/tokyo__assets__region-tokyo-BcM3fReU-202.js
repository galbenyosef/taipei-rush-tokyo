// tokyo__assets__region-tokyo-BcM3fReU 202 — math
// Lines 84075-84408 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var OK = (e) => DK[Math.max(0, Math.min(255, Math.round(e)))],
  kK = (e, t, n, r) => e.setColor(OK(t), OK(n), OK(r)),
  AK = (e, t, n) => t >= e.minX && t < e.maxX && n >= e.minZ && n < e.maxZ,
  jK = {
    slab: 0.5,
    girder: 1.5,
    parapet: 1.05,
    wall: 2,
    cap: 1.7,
    pier: 1.1,
    fascia: 1.9,
  };
function MK(e, t, n, r, i) {
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
function NK(e, t, n, r, i, a, o) {
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
    MK(e, [f(`a`, n, a), f(`a`, r, a), f(`b`, r, a), f(`b`, n, a)], 0, 1, 0),
    o.bottom &&
      MK(e, [f(`a`, n, i), f(`a`, r, i), f(`b`, r, i), f(`b`, n, i)], 0, -1, 0),
    o.s1 &&
      MK(e, [f(`a`, r, i), f(`b`, r, i), f(`b`, r, a), f(`a`, r, a)], u, 0, d),
    o.s0 &&
      MK(
        e,
        [f(`a`, n, i), f(`b`, n, i), f(`b`, n, a), f(`a`, n, a)],
        -u,
        0,
        -d,
      ));
}
function PK(e, t, n, r) {
  let i = IK(t),
    a = gc(t);
  for (let t of n.pieces)
    t.kind === `expressway` &&
      AK(r, (t.ax + t.bx) / 2, (t.az + t.bz) / 2) &&
      BK(e, t, i, a, !zK(n, t));
  for (let t of a) qK(e, t, r);
  for (let t of n.portals) AK(r, t.x, t.z) && HK(e, t);
  let o = t.dataset.expressways ?? [];
  for (let t of o)
    for (let n = 1; n + 1 < t.path.length; n++) {
      let [i, a] = t.path[n],
        o = t.levels[n];
      o > 2.5 && AK(r, i, a) && WK(e, i, a, o, t.halfWidth);
    }
}
var FK = new WeakMap();
function IK(e) {
  let t = FK.get(e);
  if (t) return t;
  t = [];
  let n = e.dataset.expressways ?? [];
  for (let e of n)
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
  return (FK.set(e, t), t);
}
function LK(e, t, n) {
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
function RK(e, t, n) {
  let r = e.bx - e.ax,
    i = e.bz - e.az,
    a = Math.hypot(r, i) || 1,
    o = -i / a,
    s = r / a,
    c = [];
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
  let l = (t) => ({
      x: e.ax + r * t,
      z: e.az + i * t,
      y: e.ya + (e.yb - e.ya) * t,
    }),
    u = [],
    d = 0;
  for (let [t, n] of [...c, [1, 1]]) {
    if (t - d > 0.001) {
      let n = l(d),
        r = l(t);
      u.push({
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
    d = Math.max(d, n);
  }
  return u;
}
function zK(e, t) {
  if (Math.min(t.ya, t.yb) > 9 || !e.rail.length) return !1;
  for (let n = 0; n <= 4; n++) {
    let r = n / 4;
    if (
      Ku(
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
function BK(e, t, n, r, i = !0) {
  if (t.solid) return VK(e, t, i);
  let a = t.half,
    o = jK,
    s = RK(LK(t, -1, n), -1, r),
    c = RK(LK(t, 1, n), 1, r);
  (e.setMaterial(0.88, 0, 0, 0),
    kK(e, 70, 70, 74),
    NK(e, t, -a + 0.4, a - 0.4, 0, 0, { top: !0 }),
    kK(e, 168, 166, 158),
    NK(e, t, -a, a, -o.slab, 0, { bottom: !0 }),
    kK(e, 150, 156, 148));
  for (let t of s) NK(e, t, -a, a, -o.fascia, o.parapet, { s0: !0 });
  for (let t of c) NK(e, t, -a, a, -o.fascia, o.parapet, { s1: !0 });
  kK(e, 120, 124, 118);
  for (let t of s)
    NK(e, t, -a, -a + 0.35, -o.fascia, -o.fascia, { bottom: !0 });
  for (let t of c) NK(e, t, a - 0.35, a, -o.fascia, -o.fascia, { bottom: !0 });
  kK(e, 190, 188, 180);
  for (let t of s) NK(e, t, -a, -a + 0.4, 0, o.parapet, { top: !0, s1: !0 });
  for (let t of c) NK(e, t, a - 0.4, a, 0, o.parapet, { top: !0, s0: !0 });
  if ((e.setMaterial(0.35, 0.1, 0, 0), kK(e, 170, 186, 190), i))
    for (let t of s)
      NK(e, t, -a, -a + 0.12, o.parapet, o.parapet + o.wall, {
        s0: !0,
        s1: !0,
        top: !0,
      });
  if (i)
    for (let t of c)
      NK(e, t, a - 0.12, a, o.parapet, o.parapet + o.wall, {
        s0: !0,
        s1: !0,
        top: !0,
      });
  (e.setMaterial(0.85, 0, 0, 0),
    kK(e, 196, 194, 186),
    NK(e, t, -0.3, 0.3, 0, 0.85, { top: !0, s0: !0, s1: !0 }),
    e.setMaterial(0.6, 0.3, 0, 0),
    kK(e, 150, 160, 152));
  for (let n of [-a * 0.6, 0, a * 0.6])
    NK(e, t, n - 1, n + 1, -o.slab - o.girder, -o.slab, {
      bottom: !0,
      s0: !0,
      s1: !0,
    });
  (e.setMaterial(0.6, 0, 0, 16), kK(e, 226, 226, 220));
  for (let n of [-a + 0.9, -0.75, 0.75, a - 0.9])
    for (let r of n < -1 ? s : n > 1 ? c : [t])
      NK(e, r, n - 0.08, n + 0.08, 0.02, 0.02, { top: !0 });
  if (Math.hypot(t.bx - t.ax, t.bz - t.az) > 8) {
    let n = {
      ...t,
      ax: t.ax + (t.bx - t.ax) * 0.35,
      az: t.az + (t.bz - t.az) * 0.35,
      bx: t.ax + (t.bx - t.ax) * 0.6,
      bz: t.az + (t.bz - t.az) * 0.6,
      ya: t.ya + (t.yb - t.ya) * 0.35,
      yb: t.ya + (t.yb - t.ya) * 0.6,
    };
    for (let t of [-(a * 0.5 + 0.2), a * 0.5 + 0.2])
      NK(e, n, t - 0.08, t + 0.08, 0.02, 0.02, { top: !0 });
  }
  t.pier && UK(e, t);
}
function VK(e, t, n) {
  let r = jK,
    i = t.half;
  (e.setMaterial(0.88, 0, 0, 0),
    kK(e, 70, 70, 74),
    NK(e, t, -i + 0.4, i - 0.4, 0, 0, { top: !0 }),
    kK(e, 168, 166, 158),
    KK(e, t, -i, -r.parapet, -1),
    KK(e, t, i, -r.parapet, 1));
  let a = t.bx - t.ax,
    o = t.bz - t.az,
    s = Math.hypot(a, o) || 1,
    c = a / s,
    l = o / s,
    u = -l,
    d = c,
    f = t.ya >= t.yb,
    p = f ? t.ax : t.bx,
    m = f ? t.az : t.bz,
    h = Math.max(t.ya, t.yb),
    g = f ? -1 : 1;
  (MK(
    e,
    [
      [p - u * i, 0, m - d * i],
      [p + u * i, 0, m + d * i],
      [p + u * i, h, m + d * i],
      [p - u * i, h, m - d * i],
    ],
    c * g,
    0,
    l * g,
  ),
    kK(e, 190, 188, 180),
    NK(e, t, -i, -i + 0.4, 0, r.parapet, { top: !0, s1: !0 }),
    NK(e, t, i - 0.4, i, 0, r.parapet, { top: !0, s0: !0 }),
    n &&
      (e.setMaterial(0.35, 0.1, 0, 0),
      kK(e, 170, 186, 190),
      NK(e, t, -i, -i + 0.12, r.parapet, r.parapet + r.wall, {
        s0: !0,
        s1: !0,
        top: !0,
      }),
      NK(e, t, i - 0.12, i, r.parapet, r.parapet + r.wall, {
        s0: !0,
        s1: !0,
        top: !0,
      })),
    e.setMaterial(0.85, 0, 0, 0),
    kK(e, 196, 194, 186),
    NK(e, t, -0.3, 0.3, 0, 0.85, { top: !0, s0: !0, s1: !0 }),
    e.setMaterial(0.6, 0, 0, 16),
    kK(e, 226, 226, 220));
  for (let n of [-i + 0.9, -0.75, 0.75, i - 0.9])
    NK(e, t, n - 0.08, n + 0.08, 0.02, 0.02, { top: !0 });
}
