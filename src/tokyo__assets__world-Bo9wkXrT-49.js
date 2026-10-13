// tokyo__assets__world-Bo9wkXrT 49 — errors
// Lines 16302-16326 of readable/tokyo__assets__world-Bo9wkXrT.pretty.js (statement-aligned).
function Nf(e, t, n, r, i, a, o) {
  let s = {},
    c = {},
    l = [],
    u = 0;
  for (let e of t) {
    e.ok ? u++ : (s[e.id] = e.errors[0] ?? `no placement found`);
    let t = e.rejections?.by;
    if (t) for (let e in t) c[e] = (c[e] ?? 0) + (t[e] ?? 0);
    for (let t of e.replaces ?? []) l.push({ site: e.id, ...t });
  }
  return {
    metas: e.length,
    ok: u,
    failed: e.length - u,
    claims: i,
    claimsRaw: a,
    ms: Math.round(r * 100) / 100,
    failures: s,
    rejects: c,
    errors: n,
    landmarkRequests: l,
    claimedPois: o,
  };
}
