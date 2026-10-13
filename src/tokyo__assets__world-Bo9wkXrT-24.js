// tokyo__assets__world-Bo9wkXrT 24 — map
// Lines 7225-7469 of readable/tokyo__assets__world-Bo9wkXrT.pretty.js (statement-aligned).
function Ia(e) {
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
function La(e, t = 3) {
  let n = {},
    r = 0;
  for (let [t, i] of e) {
    let e = Ia(t);
    ((n[e] = (n[e] ?? 0) + i), (r += i));
  }
  let i = {};
  for (let e of Fa) n[e] && (i[e] = n[e]);
  let a = [...e]
    .sort((e, t) => t[1] - e[1] || (e[0] < t[0] ? -1 : 1))
    .slice(0, t)
    .map(([e, t]) => `${e}×${t}`);
  return { total: r, by: i, top: a };
}
function Ra(e) {
  let t = Object.entries(e.by).map(([e, t]) => `${e}×${t}`);
  return t.length
    ? `${t.join(` `)}${e.top.length ? ` · top ${e.top.join(`, `)}` : ``}`
    : `none`;
}
function za(e, t) {
  let n = [],
    r = Ca(Ta(e).pois, t, 1, Ba);
  for (let e of r)
    e.x >= t.minX - 1 &&
      e.x <= t.maxX + 1 &&
      e.z >= t.minZ - 1 &&
      e.z <= t.maxZ + 1 &&
      n.push(
        `poi-in-lot ${e.kind}:${e.id} — a generated walk-in storefront stands inside the lot (the site must cover or replace it)`,
      );
  if (((Ba.length = 0), n.sort(), n.length > 2)) {
    let e = [...new Set(n.map((e) => e.split(` `)[1].split(`:`)[0]))]
      .sort()
      .join(`, `);
    return [
      `poi-in-lot ${n.length} generated walk-in storefronts stand inside the lot (${e}) — the site must cover or replace them`,
    ];
  }
  return n;
}
var Ba = [],
  Va = 0.5,
  Ha = 1e5,
  Ua = 0.2,
  Wa = Ur.clusterRadius,
  Ga = { desktop: Wr.lru.nearDesktop, mobile: Wr.lru.nearMobile };
function Ka(e) {
  return e.placement ?? {};
}
function qa(e) {
  return e.cluster ?? null;
}
function Ja(e) {
  (Da(e), ra(e));
}
function Ya(e) {
  return e && /v2\b|compressed-v2/.test(e) ? 0.25 : 0.4;
}
function Xa(e, t, n) {
  let r = Math.cos(e.facing),
    i = Math.sin(e.facing);
  return { x: e.x + t * r - n * i, z: e.z + t * i + n * r };
}
function Za(e, t, n, r, i) {
  let a = { minX: 1 / 0, minZ: 1 / 0, maxX: -1 / 0, maxZ: -1 / 0 };
  for (let [o, s] of [
    [t, n],
    [r, n],
    [t, i],
    [r, i],
  ]) {
    let t = Xa(e, o, s);
    ((a.minX = Math.min(a.minX, t.x)),
      (a.maxX = Math.max(a.maxX, t.x)),
      (a.minZ = Math.min(a.minZ, t.z)),
      (a.maxZ = Math.max(a.maxZ, t.z)));
  }
  return (
    (a.minX = Do(a.minX)),
    (a.maxX = Do(a.maxX)),
    (a.minZ = Do(a.minZ)),
    (a.maxZ = Do(a.maxZ)),
    a
  );
}
function Qa(e, t) {
  Ea(t.plan);
  let n = new Set(e.map((e) => e.id)),
    r = e.map((e, t) => ({ m: e, i: t })),
    i = new Map(),
    a = Array(e.length),
    o = [],
    s = new Set();
  for (; r.length;) {
    let e = r.findIndex(({ m: e }) =>
      (e.placement?.anchors ?? []).every(
        (t) =>
          t.kind !== `site` || t.id === e.id || !n.has(t.id) || i.has(t.id),
      ),
    );
    e < 0 && (e = 0);
    let { m: c, i: l } = r.splice(e, 1)[0],
      u;
    ((u = s.has(c.id) ? wo(c, [`duplicate-id ${c.id}`], []) : oo(c, t, o, i)),
      s.add(c.id),
      (a[l] = u),
      i.has(c.id) || i.set(c.id, u),
      u.ok && o.push(u));
  }
  return (eo(e, a), a);
}
function $a(e, t) {
  let n = new Map(e.map((e) => [e.id, e])),
    r = t.filter((e) => e.ok),
    i = [];
  for (let e = 0; e < r.length; e++)
    for (let t = e + 1; t < r.length; t++) {
      let n = r[e],
        a = r[t];
      if (ha(n.rect, a.rect) > 41) continue;
      let o = ha(n.rect, a.rect);
      for (let e of a.claims) o = Math.min(o, ha(n.rect, e));
      for (let e of n.claims) o = Math.min(o, ha(a.rect, e));
      o < 1 && i.push({ a: n.id, b: a.id, gap: o });
    }
  let a = new Map();
  for (let e of r) {
    let t = qa(n.get(e.id) ?? {}) ?? `(none)`;
    (a.get(t) ?? (a.set(t, []), a.get(t))).push(e);
  }
  let o = [];
  for (let [e, t] of [...a].sort((e, t) => (e[0] < t[0] ? -1 : 1))) {
    let n = 0,
      i = t[0]?.id ?? ``;
    for (let e of t) {
      let t = 0;
      for (let n of r) Math.hypot(n.x - e.x, n.z - e.z) <= Wa && t++;
      t > n && ((n = t), (i = e.id));
    }
    o.push({
      cluster: e,
      sites: t.length,
      densest: n,
      at: i,
      overDesktopLru: n > Ga.desktop,
      overMobileLru: n > Ga.mobile,
    });
  }
  return { placed: r.length, spacing: i, clusters: o };
}
function eo(e, t) {
  let n = $a(e, t),
    r = new Map(t.map((e) => [e.id, e]));
  for (let e of n.spacing) {
    let t =
        e.gap < 0
          ? `overlaps '${e.b}' by ${(-e.gap).toFixed(2)} m`
          : `stands ${e.gap.toFixed(2)} m from '${e.b}' (min 1 m) — that slot is too narrow to walk down and will z-fight`,
      n =
        e.gap < 0
          ? `overlaps '${e.a}' by ${(-e.gap).toFixed(2)} m`
          : `stands ${e.gap.toFixed(2)} m from '${e.a}' (min 1 m) — that slot is too narrow to walk down and will z-fight`;
    (to(r.get(e.a), e.a, `spacing ${t}`), to(r.get(e.b), e.b, `spacing ${n}`));
  }
  for (let e of n.clusters) {
    if (e.cluster === `(none)` || !e.overMobileLru) continue;
    let t = e.overDesktopLru
      ? `${Ga.desktop} desktop / ${Ga.mobile} mobile`
      : `${Ga.mobile} mobile`;
    to(
      r.get(e.at),
      e.at,
      `cluster '${e.cluster}' packs ${e.densest} sites inside ${Wa} m of here — over the near LRU (${t}), so walking it rebuilds near tiers`,
    );
  }
  return n;
}
function to(e, t, n) {
  if (!e) return;
  let r = no(t, n);
  e.warnings.includes(r) || e.warnings.push(r);
}
function no(e, t) {
  return `[${e}] ${t}`;
}
var ro = {},
  io = [
    {
      id: `off-block`,
      why: `no city block on this map version has room for this lot — placed kerbside outside the block grid (road / pavement / landmark / MRT / district-claim / surface clearances all still hold)`,
      relax: { offBlock: !0 },
    },
    {
      id: `wide-search`,
      why: `the addressed stretch is blocked on this map version — doubled placement.search to find the nearest free lot on the same frontage`,
      relax: { offBlock: !0, wide: !0 },
    },
    {
      id: `off-frontage`,
      why: `the street-plate interval over the addressed block is too short on this map version — slid past the end of the plate but stayed on the SAME road (the plate in the dossier is the one actually under the lot)`,
      relax: { offBlock: !0, wide: !0, offFrontage: !0 },
    },
    {
      id: `kerb-overlap`,
      why: `nothing clears the pavement band here on this map version — the lot front overlaps the walking band like a 騎樓 arcade; the carriageway itself is still clear`,
      relax: { offBlock: !0, wide: !0, offFrontage: !0, sidewalk: !0 },
    },
  ];
function ao(e, t, n) {
  return !!(
    (e.wide && !t.wide) ||
    (e.offBlock && !t.offBlock && n.has(`block`)) ||
    (e.offFrontage && !t.offFrontage && n.has(`off-frontage`)) ||
    (e.sidewalk && !t.sidewalk && n.has(`sidewalk`))
  );
}
function oo(e, t, n = [], r) {
  try {
    return so(e, t, n, r ?? new Map(n.map((e) => [e.id, e])));
  } catch (t) {
    return wo(e, [`internal-error ${t?.message ?? String(t)}`], []);
  }
}
