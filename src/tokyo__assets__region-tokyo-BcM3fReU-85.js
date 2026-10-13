// tokyo__assets__region-tokyo-BcM3fReU 85 — maxx
// Lines 42735-42874 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function ox(e, t) {
  switch (t) {
    case `N`:
      return {
        line: e.minZ,
        a0: e.minX,
        a1: e.maxX,
        road: e.north,
        alongX: !0,
        out: -1,
      };
    case `S`:
      return {
        line: e.maxZ,
        a0: e.minX,
        a1: e.maxX,
        road: e.south,
        alongX: !0,
        out: 1,
      };
    case `E`:
      return {
        line: e.maxX,
        a0: e.minZ,
        a1: e.maxZ,
        road: e.east,
        alongX: !1,
        out: 1,
      };
    default:
      return {
        line: e.minX,
        a0: e.minZ,
        a1: e.maxZ,
        road: e.west,
        alongX: !1,
        out: -1,
      };
  }
}
function sx(e, t, n, r) {
  let i = null,
    a = 1 / 0;
  for (let o of e.blocks) {
    let e = ox(o, r);
    if (!e.road) continue;
    let s = e.alongX ? t : n,
      c = e.alongX ? n : t;
    if (s < e.a0 - 1 || s > e.a1 + 1) continue;
    let l = (c - e.line) * e.out;
    if (l < -10 || l > 22) continue;
    let u = Math.abs(l);
    u < a && ((a = u), (i = o));
  }
  return i;
}
function cx(e, t, n, r, i) {
  let a = Math.cos(n),
    o = Math.sin(n);
  return [e + r * a - i * o, t + r * o + i * a];
}
function lx(e, t, n, r, i, a, o) {
  let s = { minX: 1 / 0, minZ: 1 / 0, maxX: -1 / 0, maxZ: -1 / 0 };
  for (let [c, l] of [
    [r, i],
    [a, i],
    [r, o],
    [a, o],
  ]) {
    let [r, i] = cx(e, t, n, c, l);
    ((s.minX = Math.min(s.minX, r)),
      (s.maxX = Math.max(s.maxX, r)),
      (s.minZ = Math.min(s.minZ, i)),
      (s.maxZ = Math.max(s.maxZ, i)));
  }
  let c = (e) => Math.round(e * 1e3) / 1e3;
  return (
    (s.minX = c(s.minX)),
    (s.maxX = c(s.maxX)),
    (s.minZ = c(s.minZ)),
    (s.maxZ = c(s.maxZ)),
    s
  );
}
function ux(e, t, n) {
  let r = ox(t, n),
    i = Yee[n],
    a = [];
  for (let r of e)
    r.street & i &&
      ((n === `N`
        ? r.z0 - t.minZ
        : n === `S`
          ? t.maxZ - r.z1
          : n === `E`
            ? t.maxX - r.x1
            : r.x0 - t.minX) > 1.5 ||
        a.push(r));
  return (a.sort((e, t) => (r.alongX ? e.x0 - t.x0 : e.z0 - t.z0)), a);
}
var dx = (e, t) => (t ? e.x0 : e.z0),
  fx = (e, t) => (t ? e.x1 : e.z1);
function px(e, t, n = {}) {
  let r = [],
    i = [],
    a = new Map(),
    o = (e) => {
      let n = a.get(e.id);
      return (n || a.set(e.id, (n = Yb(t, e, null))), n);
    },
    s = [...e].sort(
      (e, t) => (t.priority ?? 0) - (e.priority ?? 0) || (e.id < t.id ? -1 : 1),
    );
  for (let e of s) r.push(hx(e, t, n, i, o));
  return r;
}
function mx(e, t, n = []) {
  return {
    def: e,
    site: {
      id: e.id,
      ok: !1,
      x: e.at.x,
      z: e.at.z,
      y: 0,
      facing: Fb[e.at.face],
      w: e.lot.w,
      d: e.lot.d,
      rect: { minX: e.at.x, minZ: e.at.z, maxX: e.at.x, maxZ: e.at.z },
      address: { zh: ``, en: `` },
      claims: [],
      anchors: [],
      replaces: [],
      warnings: n,
      errors: [`${e.id}: ${t}`],
    },
    w: e.lot.w,
    d: e.lot.d,
  };
}
