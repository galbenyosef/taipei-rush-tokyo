// tokyo/assets/world-CAmHK742 24 — map
// Lines 7347-7529 of readable/tokyo/assets/world-CAmHK742.pretty.js (statement-aligned).
var Ya = [],
  Xa = 0.5,
  Za = 1e5,
  Qa = 0.2,
  $a = pt.clusterRadius,
  eo = { desktop: mt.lru.nearDesktop, mobile: mt.lru.nearMobile };
function to(e) {
  return e.placement ?? {};
}
function no(e) {
  return e.cluster ?? null;
}
function ro(e) {
  (Ia(e), fa(e));
}
function io(e) {
  return e && /v2\b|compressed-v2/.test(e) ? 0.25 : 0.4;
}
function ao(e, t, n) {
  let r = Math.cos(e.facing),
    i = Math.sin(e.facing);
  return { x: e.x + t * r - n * i, z: e.z + t * i + n * r };
}
function oo(e, t, n, r, i) {
  let a = { minX: 1 / 0, minZ: 1 / 0, maxX: -1 / 0, maxZ: -1 / 0 };
  for (let [o, s] of [
    [t, n],
    [r, n],
    [t, i],
    [r, i],
  ]) {
    let t = ao(e, o, s);
    ((a.minX = Math.min(a.minX, t.x)),
      (a.maxX = Math.max(a.maxX, t.x)),
      (a.minZ = Math.min(a.minZ, t.z)),
      (a.maxZ = Math.max(a.maxZ, t.z)));
  }
  return (
    (a.minX = Io(a.minX)),
    (a.maxX = Io(a.maxX)),
    (a.minZ = Io(a.minZ)),
    (a.maxZ = Io(a.maxZ)),
    a
  );
}
function so(e, t) {
  Fa(t.plan);
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
    ((u = s.has(c.id) ? No(c, [`duplicate-id ${c.id}`], []) : go(c, t, o, i)),
      s.add(c.id),
      (a[l] = u),
      i.has(c.id) || i.set(c.id, u),
      u.ok && o.push(u));
  }
  return (lo(e, a), a);
}
function co(e, t) {
  let n = new Map(e.map((e) => [e.id, e])),
    r = t.filter((e) => e.ok),
    i = [];
  for (let e = 0; e < r.length; e++)
    for (let t = e + 1; t < r.length; t++) {
      let n = r[e],
        a = r[t];
      if (wa(n.rect, a.rect) > 41) continue;
      let o = wa(n.rect, a.rect);
      for (let e of a.claims) o = Math.min(o, wa(n.rect, e));
      for (let e of n.claims) o = Math.min(o, wa(a.rect, e));
      o < 1 && i.push({ a: n.id, b: a.id, gap: o });
    }
  let a = new Map();
  for (let e of r) {
    let t = no(n.get(e.id) ?? {}) ?? `(none)`;
    (a.get(t) ?? (a.set(t, []), a.get(t))).push(e);
  }
  let o = [];
  for (let [e, t] of [...a].sort((e, t) => (e[0] < t[0] ? -1 : 1))) {
    let n = 0,
      i = t[0]?.id ?? ``;
    for (let e of t) {
      let t = 0;
      for (let n of r) Math.hypot(n.x - e.x, n.z - e.z) <= $a && t++;
      t > n && ((n = t), (i = e.id));
    }
    o.push({
      cluster: e,
      sites: t.length,
      densest: n,
      at: i,
      overDesktopLru: n > eo.desktop,
      overMobileLru: n > eo.mobile,
    });
  }
  return { placed: r.length, spacing: i, clusters: o };
}
function lo(e, t) {
  let n = co(e, t),
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
    (uo(r.get(e.a), e.a, `spacing ${t}`), uo(r.get(e.b), e.b, `spacing ${n}`));
  }
  for (let e of n.clusters) {
    if (e.cluster === `(none)` || !e.overMobileLru) continue;
    let t = e.overDesktopLru
      ? `${eo.desktop} desktop / ${eo.mobile} mobile`
      : `${eo.mobile} mobile`;
    uo(
      r.get(e.at),
      e.at,
      `cluster '${e.cluster}' packs ${e.densest} sites inside ${$a} m of here — over the near LRU (${t}), so walking it rebuilds near tiers`,
    );
  }
  return n;
}
function uo(e, t, n) {
  if (!e) return;
  let r = fo(t, n);
  e.warnings.includes(r) || e.warnings.push(r);
}
function fo(e, t) {
  return `[${e}] ${t}`;
}
var po = {},
  mo = [
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
function ho(e, t, n) {
  return !!(
    (e.wide && !t.wide) ||
    (e.offBlock && !t.offBlock && n.has(`block`)) ||
    (e.offFrontage && !t.offFrontage && n.has(`off-frontage`)) ||
    (e.sidewalk && !t.sidewalk && n.has(`sidewalk`))
  );
}
function go(e, t, n = [], r) {
  try {
    return _o(e, t, n, r ?? new Map(n.map((e) => [e.id, e])));
  } catch (t) {
    return No(e, [`internal-error ${t?.message ?? String(t)}`], []);
  }
}
