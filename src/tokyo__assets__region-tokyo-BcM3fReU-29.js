// tokyo__assets__region-tokyo-BcM3fReU 29 — math
// Lines 17754-18025 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function Ru(e, t, n) {
  let r = { x: 0, z: 0 };
  for (let i of e.corridors) {
    if (!i.upper) continue;
    let e = i.path.project(t, n);
    if (!(e.d > 12)) {
      for (let a of [Math.floor(e.s / 12) * 12, Math.ceil(e.s / 12) * 12])
        if (
          i.kinds[Math.floor(a)] === Oc.Upper &&
          (i.path.pos(a, i.upper.colOnGround, r),
          !sl(r.x, r.z) && (r.x - t) ** 2 + (r.z - n) ** 2 < 4)
        )
          return !0;
    }
  }
  return !1;
}
function zu(e, t, n) {
  let r = e.dataset.terrain ?? [];
  for (let e of r) {
    let r = e.polygon;
    if (!r || !(e.height > 1)) continue;
    let i = !1;
    for (let e = 0, a = r.length - 1; e < r.length; a = e++) {
      let [o, s] = r[e],
        [c, l] = r[a];
      s > n != l > n && t < ((c - o) * (n - s)) / (l - s) + o && (i = !i);
    }
    if (i) return !0;
    for (let e = 0, i = r.length - 1; e < r.length; i = e++) {
      let [a, o] = r[i],
        [s, c] = r[e],
        l = s - a,
        u = c - o,
        d = l * l + u * u || 1,
        f = Math.max(0, Math.min(1, ((t - a) * l + (n - o) * u) / d));
      if ((a + l * f - t) ** 2 + (o + u * f - n) ** 2 < 16) return !0;
    }
  }
  return !1;
}
function Bu(e, t) {
  let n = [],
    r = [],
    i = new Map(),
    a = { x: 0, z: 0 },
    o = { x: 0, z: 0, tx: 0, tz: 1 };
  for (let s of t.platforms) {
    if (!s.rideable) continue;
    let c = s.corridor,
      l = [NaN, NaN];
    for (let i of [-1, 1]) {
      let u = NaN;
      for (let t = 0.7; t <= 6.5; t += 0.6) {
        let n = 0,
          r = 0;
        for (let o = s.sc - 30; o <= s.sc + 30; o += 5) {
          if (c.kinds[Math.floor(o)] === Oc.Girder) continue;
          let s = i < 0 ? c.edge0.at(o) + t : c.edge1.at(o) - t;
          (c.path.pos(o, s, a), r++, Fu(e, a.x, a.z) && n++);
        }
        if (r > 0 && n >= r - 1) {
          u = i < 0 ? c.edge0.at(s.sc) + t : c.edge1.at(s.sc) - t;
          break;
        }
      }
      l[i < 0 ? 0 : 1] = u;
      let d = i < 0 ? `w` : `e`;
      for (let l of [0, 6, -6, 12, -12, 18, -18, 24, -24, 30, -30]) {
        let f = s.sc + l,
          p = c.kinds[Math.floor(f)],
          m = u;
        if (p === Oc.Brick) {
          if (
            ((f = Math.floor(f / 8) * 8 + 1.6 + 6.4 / 2),
            (m = i < 0 ? c.edge0.at(f) + bl : c.edge1.at(f) - bl),
            c.kinds[Math.floor(f - 3)] !== Oc.Brick ||
              c.kinds[Math.floor(f + 3)] !== Oc.Brick)
          )
            continue;
        } else if (!Number.isFinite(u)) continue;
        if (
          c.kinds[Math.floor(f)] === Oc.Girder ||
          c.kinds[Math.floor(f + 2)] === Oc.Girder ||
          c.kinds[Math.floor(f - 2)] === Oc.Girder
        )
          continue;
        let h = m;
        if ((c.path.pos(f, h, a), !Fu(e, a.x, a.z) || zu(e, a.x, a.z)))
          continue;
        let g = a.x,
          _ = a.z,
          v = p === Oc.Brick ? bl + 1.8 : 1.8;
        if ((c.path.pos(f, h + i * v, a), !Iu(e, a.x, a.z) || Ru(t, a.x, a.z)))
          continue;
        c.path.at(f, o);
        let y = i * o.tz,
          b = -i * o.tx,
          x = Math.atan2(y, -b),
          S = {
            kind: `jr`,
            sign: `jrexit:${s.id}:${d}`,
            x: a.x,
            z: a.z,
            heading: x,
            cx: g,
            cz: _,
            hw: p === Oc.Brick ? 1.5 : 1.6,
            hl: 0.3,
          };
        p !== Oc.Brick && (S.tickets = Lu(e, t, S));
        let C = {
          stationId: s.id,
          kind: `elevated`,
          exit: d === `w` ? `W` : `E`,
          x: a.x,
          z: a.z,
          heading: x,
          cx: g,
          cz: _,
          hw: 1.8,
          hl: 0.4,
          geo: S,
          op: `jr`,
          exitKey: `transit.exit.${s.id}.${d}`,
        };
        (n.push(C),
          r.push({
            x: g,
            z: _,
            hw: 1.9,
            hl: 0.5,
            heading: x,
            kind: `entrance`,
          }));
        break;
      }
    }
    i.set(s.id, l);
  }
  for (let t of e.mrtStations) {
    if (t.line === `JY` || t.elevated) continue;
    let i = Vu(e, t);
    i &&
      (n.push(i),
      r.push({
        x: i.cx,
        z: i.cz,
        hw: i.hw + 0.1,
        hl: i.hl + 0.1,
        heading: i.heading,
        kind: i.geo.hl > 1 ? `housing` : `entrance`,
      }));
  }
  let s = new Map();
  for (let e of n) {
    let t = s.get(e.stationId);
    (t || s.set(e.stationId, (t = [])), t.push(e));
  }
  return { list: n, byStation: s, obstacles: r, walls: i };
}
function Vu(e, t) {
  let n = e.roadAt(t.ex, t.ez) ?? e.snapToSidewalk(t.ex, t.ez).road ?? null;
  if (!n) return null;
  let r = e.laneWidth,
    i = n.lanesPerDir * r + n.median / 2,
    a = (n.axis === `x` ? t.ez - n.at : t.ex - n.at) >= 0 ? 1 : -1,
    o = n.at + a * i,
    s = n.at + a * (i + n.sidewalk),
    c = n.sidewalk,
    l = 1.1,
    u = 2.8,
    d = c >= 3.8000000000000003,
    f = d ? s - a * 1.25 : s - a * 0.35,
    p = n.axis === `x` ? t.ex : t.ez,
    m = (e, t) => (n.axis === `x` ? [e, t] : [t, e]),
    h = n.axis === `x` ? Math.PI / 2 : Math.PI;
  for (let r of [0, 4, -4, 8, -8, 12, -12, 16, -16]) {
    let i = p + r;
    if (i - u - 2 < n.from || i + u + 2 > n.to) continue;
    let [a, c] = m(i, f),
      g = !0;
    for (let t of [-2.8 - 1.4, -2.8, 0, u])
      for (let n of d ? [-1.1, l] : [-0.3, 0.3]) {
        let [r, a] = m(i + t, f + n);
        e.surfaceAt(r, a) !== `sidewalk` && (g = !1);
      }
    if (!g) continue;
    let _ = d ? u : 0.3,
      v = d ? l : 0.35,
      y = i - _ - 1.2,
      [b, x] = d ? m(y, f) : m(i, o + (s - o) * 0.5),
      S = {
        kind: `metro`,
        sign: `mexit:${t.id}`,
        x: b,
        z: x,
        heading: h,
        cx: a,
        cz: c,
        hw: v,
        hl: _,
      };
    return {
      stationId: t.id,
      kind: `underground`,
      exit: ``,
      x: b,
      z: x,
      heading: h,
      cx: a,
      cz: c,
      hw: v,
      hl: _,
      geo: S,
      op: `metro`,
    };
  }
  return null;
}
var Hu = new WeakMap();
function Uu(e) {
  if (Hu.has(e)) return Hu.get(e);
  let t = Lc(e),
    n = null;
  if (t) {
    let r = Bu(e, t);
    n = {
      m: t,
      entrances: r,
      geo: {
        m: t,
        plan: e,
        atlas: null,
        due: () => !1,
        entrances: r.list.map((e) => e.geo),
        walls: r.walls,
      },
    };
  }
  return (Hu.set(e, n), n);
}
function Wu(e, t, n) {
  let r = Uu(e);
  r && Pu(r.geo, t, n);
}
var Gu = { len: 12, h: 6.2, wall: 0.7, roof: 1 };
function Ku(e, t, n, r) {
  for (let i = 0; i < e.length; i += 3) {
    let a = t - e[i],
      o = n - e[i + 1],
      s = e[i + 2] - 2 + r;
    if (s > 0 && a * a + o * o < s * s) return !0;
  }
  return !1;
}
var qu = 24,
  Ju = new WeakMap(),
  Yu = (e) =>
    Array.isArray(e) &&
    e.length >= 2 &&
    e.every(
      (e) => Array.isArray(e) && Number.isFinite(e[0]) && Number.isFinite(e[1]),
    );
function Xu(e, t, n, r, i) {
  if (i && Ku(i, t, n, r + 1)) return !1;
  let a = e.surfaceAt(t, n);
  if (a === `water`) return !1;
  if (a !== `road` && a !== `plaza`) return !0;
  let o = e.roadAt(t, n);
  return o ? Math.abs((o.axis === `x` ? n : t) - o.at) <= o.median / 2 - r : !1;
}
