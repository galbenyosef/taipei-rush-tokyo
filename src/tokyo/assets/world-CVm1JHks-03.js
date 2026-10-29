// tokyo/assets/world-CVm1JHks 03 — freeze
// Lines 1044-1225 of readable/tokyo/assets/world-CVm1JHks.pretty.js (statement-aligned).
function ft(e) {
  return e <= 0 ? 0 : e >= 1 ? 255 : (e * 255 + 0.5) | 0;
}
function pt(e, t) {
  let n = new e.constructor(t);
  return (n.set(e), n);
}
function mt(e, t, n, r) {
  return [e, r, e, t, n, t, n, r];
}
function ht(e, t, n, r, i = 0) {
  let a = [];
  for (let o = 0; o < r; o++) {
    let s = i + (o / r) * Math.PI * 2;
    a.push(e + Math.cos(s) * n, t + Math.sin(s) * n);
  }
  return a;
}
function gt(e, t, n, r) {
  let i = [];
  for (let a = 0; a < e.length; a += 2)
    i.push(t + (e[a] - t) * r, n + (e[a + 1] - n) * r);
  return i;
}
var X = {
  PLAIN: 0,
  LIT: 1,
  BRICK: 2,
  STONE: 3,
  ROOF_TILE: 4,
  WIN_OFFICE: 5,
  GLASS_101: 6,
  BRICK_ARCH_WIN: 7,
  BRICK_RECT_WIN: 8,
  LATTICE: 9,
  TEMPLE_DOOR: 10,
  PAINTED_BEAM: 11,
  PAVING: 12,
  PAVING_RED: 13,
  GRASS: 14,
  WATER: 15,
  GRAVEL: 16,
  CORRUGATED: 17,
  CONCRETE: 18,
  SMALL_TILE: 19,
  METAL_PANEL: 20,
  MARBLE: 21,
  GRANITE: 22,
  WOOD: 23,
  LEAVES: 24,
  BARK: 25,
  GLASS_MALL: 26,
  WIN_HOTEL: 27,
  WIN_STATION: 28,
  ROCK: 29,
  WIN_COLONIAL_WHITE: 30,
  DOOR_GOD: 31,
  WIN_HOSPITAL: 32,
  CUT_PORCELAIN: 33,
  FOLIAGE: 34,
  COUNT: 35,
};
function _t(e) {
  let t = e.atlas?.slots;
  return t === 1 || t === 2 ? t : e.interior === `full` ? 2 : 1;
}
function vt(e) {
  return e.atlas?.midArt === !0;
}
var yt = {
    high: {
      near: { calls: 6, tris: 6e4 },
      mid: { calls: 2, tris: 1e4 },
      interior: { calls: 3, tris: 4e4 },
    },
    low: {
      near: { calls: 3, tris: 25e3 },
      mid: { calls: 1, tris: 5e3 },
      interior: { calls: 2, tris: 2e4 },
    },
  },
  bt = {
    proxyTris: { high: 25e3, low: 12e3 },
    proxyCalls: 1,
    clusterNearCalls: 14,
    clusterNearCallsMobile: 10,
    clusterNearTris: 14e4,
    clusterRadius: 130,
    resolveMs: { desktop: 40, mobile: 60 },
    maxClaimRects: 80,
  },
  xt = {
    mid: { build: 260, drop: 305 },
    near: { build: 130, drop: 160 },
    interior: {
      desktop: { build: 35, drop: 47 },
      mobile: { build: 25, drop: 35 },
    },
    quality: { low: 0.6, medium: 0.8, high: 1, ultra: 1.3 },
    mobile: 0.6,
    hero: 1.25,
    dropFactor: 1.12,
    teleport: 70,
    lru: {
      nearMobile: 4,
      nearDesktop: 8,
      midMobile: 16,
      midDesktop: 32,
      nearMaxMobile: 6,
      nearMaxDesktop: 12,
      nearTrisMobile: 45e3,
      nearTrisDesktop: 14e4,
      nearCallsMobile: 12,
      nearCallsDesktop: 18,
    },
  },
  St = { desktop: 384, mobile: 256 },
  Ct = { desktop: St.desktop * 4, mobile: St.mobile * 4 },
  wt = 0.45;
function Tt(e) {
  return e;
}
var Et = Object.freeze([]),
  Dt = Et,
  Ot = new Map(),
  kt = null,
  At = new Set();
function jt(e) {
  return Ot.get(e) ?? null;
}
function Z() {
  for (let e of [...At])
    try {
      e(Dt);
    } catch (e) {
      console.warn(`[test] sites public listener failed`, e);
    }
}
function Mt(e, t, n) {
  let r = new Map();
  for (let e of n) r.set(e.id, e);
  let i = [];
  for (let e of t) {
    if (!e.ok) continue;
    let t = r.get(e.id);
    t &&
      i.push(
        Object.freeze({
          id: e.id,
          name: Object.freeze({ zh: t.name.zh, en: t.name.en }),
          category: t.category,
          district: t.district,
          cluster: t.cluster ?? null,
          icon: t.map.icon,
          minimap: !!t.map.minimap,
          hero: !!t.hero,
          interior: t.interior,
          x: e.x,
          z: e.z,
          y: e.y,
          w: e.w,
          d: e.d,
          facing: e.facing,
          rect: Object.freeze({
            minX: e.rect.minX,
            minZ: e.rect.minZ,
            maxX: e.rect.maxX,
            maxZ: e.rect.maxZ,
          }),
          address: Object.freeze({ zh: e.address.zh, en: e.address.en }),
          blurb: Object.freeze({ zh: t.blurb.zh, en: t.blurb.en }),
        }),
      );
  }
  ((kt = e), (Dt = Object.freeze(i)));
  let a = new Map();
  for (let e of i) a.set(e.id, e);
  ((Ot = a), Z());
}
function Nt(e) {
  kt === e && ((kt = null), (Dt = Et), (Ot = new Map()), Z());
}
