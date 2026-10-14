// tokyo/assets/world-Bo9wkXrT 23 — math
// Lines 6883-7224 of readable/tokyo/assets/world-Bo9wkXrT.pretty.js (statement-aligned).
function ta(e, t, n) {
  let r = [],
    i = new Set();
  for (let a of t) {
    let t = Ei(a.road) ? 30 : 0;
    for (let o of Qi(e, a.road))
      if (
        o.node.kind !== `end` &&
        !(o.s < a.s0 - o.half - 1 - t || o.s > a.s1 + o.half + 1 + t)
      )
        for (let t of o.node.roads) {
          if (t === a.road) continue;
          let s = `${a.road.index}:${o.node.id}`;
          i.has(s) ||
            (na(e, t, o.node, n) &&
              (i.add(s), r.push({ ...o, road: a.road, crossRoad: t })));
        }
  }
  return r;
}
function na(e, t, n, r) {
  let i = hi(t, n.x, n.z),
    a = t.axis === `x` ? n.halfX : n.halfZ;
  for (let n of [0, -(a + 4), a + 4]) {
    let a = i + n;
    if (!(a < t.from - 0.01 || a > t.to + 0.01) && di(Pi(e, t, a), r))
      return !0;
  }
  return !1;
}
function ra(e) {
  (Ti.delete(e),
    Ri.delete(e),
    Bi.delete(e),
    Vi.delete(e),
    Zi.delete(e),
    ea.delete(e));
}
var ia = 0.5,
  aa = new Set([`lot`, `plaza`, `park`]),
  oa = 1.2;
function sa(e) {
  if (!e || !e.length) return aa;
  let t = new Set(aa);
  for (let n of e) t.add(n);
  return t;
}
var ca = new Set([
  `convenience`,
  `bubbletea`,
  `breakfast`,
  `claw`,
  `pharmacy`,
  `lottery`,
]);
function la(e, t, n = 0) {
  return (
    e.maxX + n > t.minX &&
    e.minX - n < t.maxX &&
    e.maxZ + n > t.minZ &&
    e.minZ - n < t.maxZ
  );
}
function ua(e, t, n = 0) {
  return (
    e.minX >= t.minX - n &&
    e.maxX <= t.maxX + n &&
    e.minZ >= t.minZ - n &&
    e.maxZ <= t.maxZ + n
  );
}
function da(e, t) {
  return {
    minX: e.minX + t,
    minZ: e.minZ + t,
    maxX: e.maxX - t,
    maxZ: e.maxZ - t,
  };
}
function fa(e, t, n = 0) {
  let r = e.hw + n,
    i = e.hl + n,
    a = Math.sin(e.heading),
    o = -Math.cos(e.heading),
    s = Math.cos(e.heading),
    c = Math.sin(e.heading),
    l = Math.abs(s) * r + Math.abs(a) * i,
    u = Math.abs(c) * r + Math.abs(o) * i;
  if (
    e.cx + l <= t.minX ||
    e.cx - l >= t.maxX ||
    e.cz + u <= t.minZ ||
    e.cz - u >= t.maxZ
  )
    return !1;
  let d = (t.minX + t.maxX) / 2,
    f = (t.minZ + t.maxZ) / 2,
    p = (t.maxX - t.minX) / 2,
    m = (t.maxZ - t.minZ) / 2,
    h = d - e.cx,
    g = f - e.cz;
  return !(
    Math.abs(h * s + g * c) >= r + Math.abs(s) * p + Math.abs(c) * m ||
    Math.abs(h * a + g * o) >= i + Math.abs(a) * p + Math.abs(o) * m
  );
}
function pa(e, t, n, r) {
  let i = Math.max(r.minX, Math.min(e, r.maxX)),
    a = Math.max(r.minZ, Math.min(t, r.maxZ));
  return (e - i) ** 2 + (t - a) ** 2 < n * n;
}
function ma(e, t, n = aa) {
  let r = t.minX + 0.3,
    i = t.maxX - 0.3,
    a = t.minZ + 0.3,
    o = t.maxZ - 0.3,
    s = (t.minX + t.maxX) / 2,
    c = (t.minZ + t.maxZ) / 2;
  for (let t of [r, s, i])
    for (let r of [a, c, o]) {
      let i = e.surfaceAt(t, r);
      if (!n.has(i)) return i;
    }
  return null;
}
function ha(e, t) {
  let n = Math.max(e.minX - t.maxX, t.minX - e.maxX),
    r = Math.max(e.minZ - t.maxZ, t.minZ - e.maxZ);
  return n >= 0 && r >= 0 ? Math.hypot(n, r) : Math.max(n, r);
}
function ga(e, t) {
  let n = [],
    r = e.bounds,
    i = Math.min(
      t.minX - r.minX,
      r.maxX - t.maxX,
      t.minZ - r.minZ,
      r.maxZ - t.maxZ,
    );
  i < 10 &&
    n.push(
      `fringe-bounds lot is ${Math.max(0, i).toFixed(1)} m from the world edge (needs 10 m: the edge walls and the unbuilt apron are out there)`,
    );
  let a = (t.minX + t.maxX) / 2,
    o = (t.minZ + t.maxZ) / 2;
  return (
    typeof e.inCity == `function` &&
      !e.inCity(a, o) &&
      n.push(
        `fringe-outside-city lot centre is outside plan.inCity() — no streets, peds or traffic reach it`,
      ),
    n
  );
}
function _a(e) {
  return {
    minX: e.x - e.w / 2,
    maxX: e.x + e.w / 2,
    minZ: e.z - e.d / 2,
    maxZ: e.z + e.d / 2,
  };
}
var va = 96,
  ya = new WeakMap(),
  ba = 0;
function xa(e, t, n = va) {
  let r = 1 / 0,
    i = 1 / 0,
    a = -1 / 0,
    o = -1 / 0,
    s = [];
  for (let n of e) {
    let e = t(n);
    (s.push(e),
      Number.isFinite(e.minX) &&
        Number.isFinite(e.minZ) &&
        ((r = Math.min(r, e.minX)),
        (i = Math.min(i, e.minZ)),
        (a = Math.max(a, e.maxX)),
        (o = Math.max(o, e.maxZ))));
  }
  Number.isFinite(r) || ((r = i = 0), (a = o = 0));
  let c = Math.max(1, Math.min(512, Math.ceil((a - r) / n) + 1)),
    l = Math.max(1, Math.min(512, Math.ceil((o - i) / n) + 1)),
    u = {
      minX: r,
      minZ: i,
      nx: c,
      nz: l,
      cell: n,
      cells: Array(c * l),
      all: e.slice(),
    };
  for (let t = 0; t < e.length; t++) {
    let a = s[t];
    if (!Number.isFinite(a.minX)) continue;
    let o = Sa((a.minX - r) / n, c),
      d = Sa((a.maxX - r) / n, c),
      f = Sa((a.minZ - i) / n, l),
      p = Sa((a.maxZ - i) / n, l);
    for (let n = f; n <= p; n++)
      for (let r = o; r <= d; r++) {
        let i = n * c + r;
        (u.cells[i] ??= []).push(e[t]);
      }
  }
  return u;
}
function Sa(e, t) {
  let n = Math.floor(e);
  return n < 0 ? 0 : n >= t ? t - 1 : n;
}
function Ca(e, t, n, r) {
  let i = ++ba,
    a = Sa((t.minX - n - e.minX) / e.cell, e.nx),
    o = Sa((t.maxX + n - e.minX) / e.cell, e.nx),
    s = Sa((t.minZ - n - e.minZ) / e.cell, e.nz),
    c = Sa((t.maxZ + n - e.minZ) / e.cell, e.nz);
  for (let t = s; t <= c; t++)
    for (let n = a; n <= o; n++) {
      let a = e.cells[t * e.nx + n];
      if (a) for (let e of a) ya.get(e) !== i && (ya.set(e, i), r.push(e));
    }
  return r;
}
var wa = new WeakMap();
function Ta(e) {
  let t = wa.get(e);
  if (t) return t;
  let n = e.roads.map((e) => ({ road: e, rect: bi(e), way: Ni(e) })),
    r = [];
  for (let t of e.landmarks)
    t.zone !== `pedestrian` && r.push({ id: t.id, rect: _a(t) });
  let i = e.mrtStations.map((e) => ({ id: e.id, x: e.ex, z: e.ez })),
    a = [];
  for (let t of e.pois)
    ca.has(t.kind) &&
      a.push({ id: String(t.id), kind: t.kind, x: t.x, z: t.z });
  let o = (e) => ({ minX: e.x, maxX: e.x, minZ: e.z, maxZ: e.z });
  return (
    (t = {
      roads: xa(n, (e) => e.rect),
      blocks: xa(e.blocks, (e) => e),
      landmarks: xa(r, (e) => e.rect),
      mrt: xa(i, o),
      pois: xa(a, o),
    }),
    wa.set(e, t),
    t
  );
}
function Ea(e) {
  Ta(e);
}
function Da(e) {
  wa.delete(e);
}
function Oa(e, t, n) {
  let r = e.plan,
    i = Ta(r),
    a = [];
  for (let e of Ca(i.roads, t, 0, ka)) la(e.rect, t) && a.push(e);
  ka.length = 0;
  let o = [];
  for (let e of Ca(i.blocks, t, ia, Aa)) la(e, t, 0.5) && o.push(e);
  Aa.length = 0;
  let s = [];
  for (let e of Ca(i.landmarks, t, 2, ja)) la(e.rect, t, 2) && s.push(e);
  ja.length = 0;
  let c = [];
  for (let n of [e.entrances, e.obstacles])
    if (n)
      for (let e of n) {
        let n = Math.max(e.hw, e.hl) * 1.5 + 3;
        e.cx + n > t.minX &&
          e.cx - n < t.maxX &&
          e.cz + n > t.minZ &&
          e.cz - n < t.maxZ &&
          c.push(e);
      }
  let l = [];
  for (let e of Ca(i.mrt, t, 4, Ma)) pa(e.x, e.z, 4, t) && l.push(e);
  return (
    (Ma.length = 0),
    {
      plan: r,
      env: e,
      roads: a,
      blocks: o,
      landmarks: s,
      transit: c,
      mrt: l,
      placed: n.filter((e) => la(e.rect, t, 1)),
    }
  );
}
var ka = [],
  Aa = [],
  ja = [],
  Ma = [],
  Na = {};
function Pa(e, t, n = Na) {
  let r = e.plan.bounds;
  if (t.minX < r.minX || t.maxX > r.maxX || t.minZ < r.minZ || t.maxZ > r.maxZ)
    return `bounds`;
  for (let r of e.roads)
    if (r.road !== n.host && la(r.rect, t, -0.05)) {
      if (la(r.way, t, -0.05)) return `road`;
      if (!n.allowSidewalk) return `sidewalk`;
    }
  if (n.requireBlock !== !1) {
    let n = !1;
    for (let r of e.blocks)
      if (ua(t, r, 0.5)) {
        n = !0;
        break;
      }
    if (!n) return `block`;
  }
  for (let n of e.landmarks) if (la(n.rect, t, 2)) return `landmark:${n.id}`;
  for (let n of e.transit) if (fa(n, t, 3)) return `transit`;
  for (let n of e.mrt) if (pa(n.x, n.z, 4, t)) return `mrt:${n.id}`;
  for (let n of e.placed) if (la(n.rect, t, 1)) return `site:${n.id}`;
  if (e.env.claimed) {
    let n = da(t, 0.2);
    if (e.env.claimed(n.minX, n.minZ, n.maxX, n.maxZ, `buildings`))
      return `district-claim`;
  }
  let i = ma(e.plan, t, n.surfaces ?? aa);
  return i ? `surface:${i}` : null;
}
var Fa = [
  `road`,
  `sidewalk`,
  `claim`,
  `landmark`,
  `mrt`,
  `site`,
  `block`,
  `surface`,
  `other`,
];
