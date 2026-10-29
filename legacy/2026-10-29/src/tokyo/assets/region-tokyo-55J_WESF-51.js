// tokyo/assets/region-tokyo-55J_WESF 51 — math
// Lines 24409-24739 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function Fl(e, t, n) {
  let r = { x: 0, z: 0 };
  for (let i of e.corridors) {
    if (!i.upper) continue;
    let e = i.path.project(t, n);
    if (!(e.d > 12)) {
      for (let a of [Math.floor(e.s / 12) * 12, Math.ceil(e.s / 12) * 12])
        if (
          i.kinds[Math.floor(a)] === Zs.Upper &&
          (i.path.pos(a, i.upper.colOnGround, r),
          !Fc(r.x, r.z) && (r.x - t) ** 2 + (r.z - n) ** 2 < 4)
        )
          return !0;
    }
  }
  return !1;
}
function Il(e, t, n) {
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
function rae(e, t) {
  let n = [],
    r = [],
    i = new Map(),
    a = { x: 0, z: 0 },
    o = { x: 0, z: 0, tx: 0, tz: 1 };
  for (let s of t.platforms) {
    if (!s.rideable) continue;
    let c = s.corridor;
    if (s.id === `jy-harajuku`) {
      for (let e of Pre) {
        (c.path.at(s.sc + e.sigma, o), c.path.pos(s.sc + e.sigma, -e.e, a));
        let t = a.x,
          r = a.z;
        c.path.pos(s.sc + e.sigma, -(e.e + e.out * 1.8), a);
        let i = e.out * -o.tz,
          l = e.out * o.tx,
          u = Math.atan2(i, -l),
          d = {
            kind: `jr`,
            sign: `jrexit:${s.id}:${e.key}`,
            x: a.x,
            z: a.z,
            heading: u,
            cx: t,
            cz: r,
            hw: 1.6,
            hl: 0.3,
            bare: !0,
          };
        n.push({
          stationId: s.id,
          kind: `elevated`,
          exit: e.exit,
          x: a.x,
          z: a.z,
          heading: u,
          cx: t,
          cz: r,
          hw: 1.8,
          hl: 0.4,
          geo: d,
          op: `jr`,
          exitKey: `transit.exit.${s.id}.${e.key}`,
        });
      }
      i.set(s.id, [NaN, NaN]);
      continue;
    }
    if (s.id === `jy-shinjuku`) {
      for (let e of Vre) {
        let t = e.x + e.out[0] * 1.8,
          r = e.z + e.out[1] * 1.8,
          i = Math.atan2(-e.out[0], e.out[1]),
          a = {
            kind: `jr`,
            sign: `jrexit:${s.id}:${e.key}`,
            x: t,
            z: r,
            heading: i,
            cx: e.x,
            cz: e.z,
            hw: 1.6,
            hl: 0.3,
            bare: !0,
          };
        n.push({
          stationId: s.id,
          kind: `elevated`,
          exit: e.exit,
          x: t,
          z: r,
          heading: i,
          cx: e.x,
          cz: e.z,
          hw: 1.8,
          hl: 0.4,
          geo: a,
          op: `jr`,
          exitKey: `transit.exit.${s.id}.${e.key}`,
        });
      }
      i.set(s.id, [NaN, NaN]);
      continue;
    }
    let l = s.id === `jy-shibuya`;
    if (l) {
      let e = jc.door,
        t = e.x - 1.8,
        r = Math.PI / 2,
        i = {
          kind: `jr`,
          sign: `jrexit:${s.id}:hachiko`,
          x: t,
          z: e.z,
          heading: r,
          cx: e.x,
          cz: e.z,
          hw: 1.6,
          hl: 0.3,
          bare: !0,
        };
      n.push({
        stationId: s.id,
        kind: `elevated`,
        exit: `W`,
        x: t,
        z: e.z,
        heading: r,
        cx: e.x,
        cz: e.z,
        hw: 1.8,
        hl: 0.4,
        geo: i,
        op: `jr`,
        exitKey: `transit.exit.${s.id}.hachiko`,
      });
    }
    let u = [NaN, NaN];
    for (let i of [-1, 1]) {
      if (l && i > 0) continue;
      let d = NaN;
      for (let t = 0.7; t <= 6.5; t += 0.6) {
        let n = 0,
          r = 0;
        for (let o = s.sc - 30; o <= s.sc + 30; o += 5) {
          if (c.kinds[Math.floor(o)] === Zs.Girder) continue;
          let s = i < 0 ? c.edge0.at(o) + t : c.edge1.at(o) - t;
          (c.path.pos(o, s, a), r++, Nl(e, a.x, a.z) && n++);
        }
        if (r > 0 && n >= r - 1) {
          d = i < 0 ? c.edge0.at(s.sc) + t : c.edge1.at(s.sc) - t;
          break;
        }
      }
      u[i < 0 ? 0 : 1] = d;
      let f = i < 0 ? `w` : `e`;
      for (let l of [0, 6, -6, 12, -12, 18, -18, 24, -24, 30, -30]) {
        let u = s.sc + l,
          p = c.kinds[Math.floor(u)],
          m = d;
        if (p === Zs.Brick) {
          if (
            ((u = Math.floor(u / 8) * 8 + 1.6 + 6.4 / 2),
            (m = i < 0 ? c.edge0.at(u) + Gc : c.edge1.at(u) - Gc),
            c.kinds[Math.floor(u - 3)] !== Zs.Brick ||
              c.kinds[Math.floor(u + 3)] !== Zs.Brick)
          )
            continue;
        } else if (!Number.isFinite(d)) continue;
        if (
          c.kinds[Math.floor(u)] === Zs.Girder ||
          c.kinds[Math.floor(u + 2)] === Zs.Girder ||
          c.kinds[Math.floor(u - 2)] === Zs.Girder
        )
          continue;
        let h = m;
        if ((c.path.pos(u, h, a), !Nl(e, a.x, a.z) || Il(e, a.x, a.z)))
          continue;
        let g = a.x,
          _ = a.z,
          v = p === Zs.Brick ? Gc + 1.8 : 1.8;
        if ((c.path.pos(u, h + i * v, a), !Pl(e, a.x, a.z) || Fl(t, a.x, a.z)))
          continue;
        c.path.at(u, o);
        let y = i * o.tz,
          b = -i * o.tx,
          x = Math.atan2(y, -b),
          S = {
            kind: `jr`,
            sign: `jrexit:${s.id}:${f}`,
            x: a.x,
            z: a.z,
            heading: x,
            cx: g,
            cz: _,
            hw: p === Zs.Brick ? 1.5 : 1.6,
            hl: 0.3,
          };
        p !== Zs.Brick && (S.tickets = nae(e, t, S));
        let C = {
          stationId: s.id,
          kind: `elevated`,
          exit: f === `w` ? `W` : `E`,
          x: a.x,
          z: a.z,
          heading: x,
          cx: g,
          cz: _,
          hw: 1.8,
          hl: 0.4,
          geo: S,
          op: `jr`,
          exitKey: `transit.exit.${s.id}.${f}`,
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
    i.set(s.id, u);
  }
  for (let t of e.mrtStations) {
    if (t.line === `JY` || t.elevated) continue;
    let i = iae(e, t);
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
function iae(e, t) {
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
var Ll = new WeakMap();
