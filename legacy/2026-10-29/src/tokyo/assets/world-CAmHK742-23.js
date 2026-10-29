// tokyo/assets/world-CAmHK742 23 — math
// Lines 6998-7346 of readable/tokyo/assets/world-CAmHK742.pretty.js (statement-aligned).
function va(e, t, n = 0) {
  return (
    e.maxX + n > t.minX &&
    e.minX - n < t.maxX &&
    e.maxZ + n > t.minZ &&
    e.minZ - n < t.maxZ
  );
}
function ya(e, t, n = 0) {
  return (
    e.minX >= t.minX - n &&
    e.maxX <= t.maxX + n &&
    e.minZ >= t.minZ - n &&
    e.maxZ <= t.maxZ + n
  );
}
function ba(e, t) {
  return {
    minX: e.minX + t,
    minZ: e.minZ + t,
    maxX: e.maxX - t,
    maxZ: e.maxZ - t,
  };
}
function xa(e, t, n = 0) {
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
function Sa(e, t, n, r) {
  let i = Math.max(r.minX, Math.min(e, r.maxX)),
    a = Math.max(r.minZ, Math.min(t, r.maxZ));
  return (e - i) ** 2 + (t - a) ** 2 < n * n;
}
function Ca(e, t, n = ma) {
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
function wa(e, t) {
  let n = Math.max(e.minX - t.maxX, t.minX - e.maxX),
    r = Math.max(e.minZ - t.maxZ, t.minZ - e.maxZ);
  return n >= 0 && r >= 0 ? Math.hypot(n, r) : Math.max(n, r);
}
function Ta(e, t) {
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
function Ea(e) {
  return {
    minX: e.x - e.w / 2,
    maxX: e.x + e.w / 2,
    minZ: e.z - e.d / 2,
    maxZ: e.z + e.d / 2,
  };
}
var Da = 96,
  Oa = new WeakMap(),
  ka = 0;
function Aa(e, t, n = Da) {
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
    let o = ja((a.minX - r) / n, c),
      d = ja((a.maxX - r) / n, c),
      f = ja((a.minZ - i) / n, l),
      p = ja((a.maxZ - i) / n, l);
    for (let n = f; n <= p; n++)
      for (let r = o; r <= d; r++) {
        let i = n * c + r;
        (u.cells[i] ??= []).push(e[t]);
      }
  }
  return u;
}
function ja(e, t) {
  let n = Math.floor(e);
  return n < 0 ? 0 : n >= t ? t - 1 : n;
}
function Ma(e, t, n, r) {
  let i = ++ka,
    a = ja((t.minX - n - e.minX) / e.cell, e.nx),
    o = ja((t.maxX + n - e.minX) / e.cell, e.nx),
    s = ja((t.minZ - n - e.minZ) / e.cell, e.nz),
    c = ja((t.maxZ + n - e.minZ) / e.cell, e.nz);
  for (let t = s; t <= c; t++)
    for (let n = a; n <= o; n++) {
      let a = e.cells[t * e.nx + n];
      if (a) for (let e of a) Oa.get(e) !== i && (Oa.set(e, i), r.push(e));
    }
  return r;
}
var Na = new WeakMap();
function Pa(e) {
  let t = Na.get(e);
  if (t) return t;
  let n = e.roads.map((e) => ({ road: e, rect: ki(e), way: Hi(e) })),
    r = [];
  for (let t of e.landmarks)
    t.zone !== `pedestrian` && r.push({ id: t.id, rect: Ea(t) });
  let i = e.mrtStations.map((e) => ({ id: e.id, x: e.ex, z: e.ez })),
    a = [];
  for (let t of e.pois)
    _a.has(t.kind) &&
      a.push({ id: String(t.id), kind: t.kind, x: t.x, z: t.z });
  let o = (e) => ({ minX: e.x, maxX: e.x, minZ: e.z, maxZ: e.z });
  return (
    (t = {
      roads: Aa(n, (e) => e.rect),
      blocks: Aa(e.blocks, (e) => e),
      landmarks: Aa(r, (e) => e.rect),
      mrt: Aa(i, o),
      pois: Aa(a, o),
    }),
    Na.set(e, t),
    t
  );
}
function Fa(e) {
  Pa(e);
}
function Ia(e) {
  Na.delete(e);
}
function La(e, t, n) {
  let r = e.plan,
    i = Pa(r),
    a = [];
  for (let e of Ma(i.roads, t, 0, Ra)) va(e.rect, t) && a.push(e);
  Ra.length = 0;
  let o = [];
  for (let e of Ma(i.blocks, t, pa, za)) va(e, t, 0.5) && o.push(e);
  za.length = 0;
  let s = [];
  for (let e of Ma(i.landmarks, t, 2, Ba)) va(e.rect, t, 2) && s.push(e);
  Ba.length = 0;
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
  for (let e of Ma(i.mrt, t, 4, Va)) Sa(e.x, e.z, 4, t) && l.push(e);
  return (
    (Va.length = 0),
    {
      plan: r,
      env: e,
      roads: a,
      blocks: o,
      landmarks: s,
      transit: c,
      mrt: l,
      placed: n.filter((e) => va(e.rect, t, 1)),
    }
  );
}
var Ra = [],
  za = [],
  Ba = [],
  Va = [],
  Ha = {};
function Ua(e, t, n = Ha) {
  let r = e.plan.bounds;
  if (t.minX < r.minX || t.maxX > r.maxX || t.minZ < r.minZ || t.maxZ > r.maxZ)
    return `bounds`;
  for (let r of e.roads)
    if (r.road !== n.host && va(r.rect, t, -0.05)) {
      if (va(r.way, t, -0.05)) return `road`;
      if (!n.allowSidewalk) return `sidewalk`;
    }
  if (n.requireBlock !== !1) {
    let n = !1;
    for (let r of e.blocks)
      if (ya(t, r, 0.5)) {
        n = !0;
        break;
      }
    if (!n) return `block`;
  }
  for (let n of e.landmarks) if (va(n.rect, t, 2)) return `landmark:${n.id}`;
  for (let n of e.transit) if (xa(n, t, 3)) return `transit`;
  for (let n of e.mrt) if (Sa(n.x, n.z, 4, t)) return `mrt:${n.id}`;
  for (let n of e.placed) if (va(n.rect, t, 1)) return `site:${n.id}`;
  if (e.env.claimed) {
    let n = ba(t, 0.2);
    if (e.env.claimed(n.minX, n.minZ, n.maxX, n.maxZ, `buildings`))
      return `district-claim`;
  }
  let i = Ca(e.plan, t, n.surfaces ?? ma);
  return i ? `surface:${i}` : null;
}
var Wa = [
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
function Ga(e) {
  let t = e.split(`:`)[0];
  switch (t) {
    case `road`:
    case `sidewalk`:
    case `block`:
    case `surface`:
    case `mrt`:
    case `site`:
      return t;
    case `transit`:
      return `mrt`;
    case `landmark`:
      return `landmark`;
    case `district-claim`:
      return `claim`;
    default:
      return `other`;
  }
}
function Ka(e, t = 3) {
  let n = {},
    r = 0;
  for (let [t, i] of e) {
    let e = Ga(t);
    ((n[e] = (n[e] ?? 0) + i), (r += i));
  }
  let i = {};
  for (let e of Wa) n[e] && (i[e] = n[e]);
  let a = [...e]
    .sort((e, t) => t[1] - e[1] || (e[0] < t[0] ? -1 : 1))
    .slice(0, t)
    .map(([e, t]) => `${e}×${t}`);
  return { total: r, by: i, top: a };
}
function qa(e) {
  let t = Object.entries(e.by).map(([e, t]) => `${e}×${t}`);
  return t.length
    ? `${t.join(` `)}${e.top.length ? ` · top ${e.top.join(`, `)}` : ``}`
    : `none`;
}
function Ja(e, t) {
  let n = [],
    r = Ma(Pa(e).pois, t, 1, Ya);
  for (let e of r)
    e.x >= t.minX - 1 &&
      e.x <= t.maxX + 1 &&
      e.z >= t.minZ - 1 &&
      e.z <= t.maxZ + 1 &&
      n.push(
        `poi-in-lot ${e.kind}:${e.id} — a generated walk-in storefront stands inside the lot (the site must cover or replace it)`,
      );
  if (((Ya.length = 0), n.sort(), n.length > 2)) {
    let e = [...new Set(n.map((e) => e.split(` `)[1].split(`:`)[0]))]
      .sort()
      .join(`, `);
    return [
      `poi-in-lot ${n.length} generated walk-in storefronts stand inside the lot (${e}) — the site must cover or replace them`,
    ];
  }
  return n;
}
