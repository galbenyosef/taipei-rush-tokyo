// tokyo/assets/region-tokyo-55J_WESF 121 — math
// Lines 53383-53526 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var b_ = [];
function Pue(e, t) {
  let n = new Map(y_().map((e) => [e.id, e])),
    r = Tue(
      e.map((e) => n.get(e.id)).filter((e) => !!e),
      t.plan,
      t,
    ),
    i = new Map(e.map((e) => [e.id, e]));
  b_ = [];
  let a = [];
  for (let e of r) {
    let t = i.get(e.def.id);
    (t && e.site.ok && p_(e.def, e.w, e.d, t),
      e.site.ok && b_.push({ def: e.def, site: e.site }));
    for (let t of e.site.errors) console.warn(`[sites] tokyo ${t}`);
    a.push(e.site);
  }
  return (
    typeof window < `u` &&
      (window.__tokyoSites = {
        sites: () => b_.map((e) => e.site),
        storefronts: S_,
        anchors: () => x_(),
      }),
    a
  );
}
var Fue = {
  metas: Nue,
  errors: __,
  hasScene: (e) => `./defs/${e}.scene.ts` in g_,
  hasInterior: () => !1,
  async loadScene(e) {
    let t = g_[`./defs/${e}.scene.ts`];
    if (!t) return null;
    try {
      return (await Tr, (await t()) ?? null);
    } catch (t) {
      return (
        __.push(
          `regions/tokyo/sites/defs/${e}.scene.ts: load failed: ${t?.message ?? String(t)}`,
        ),
        null
      );
    }
  },
  loadInterior: async () => null,
  resolve: Pue,
  gaps: null,
  look: kue,
};
function Iue(e, t) {
  return cte(e, { registerPack: t, catalog: Fue });
}
function x_(e = y_()) {
  let t = [];
  for (let n of e) {
    let e = qg[n.at.face],
      r = Math.sin(e),
      i = -Math.cos(e),
      a = -Math.cos(e),
      o = -Math.sin(e),
      s = n.at.game?.x ?? n.at.x,
      c = n.at.game?.z ?? n.at.z;
    for (let l of n.anchors) {
      let u = s + a * l.along + r * l.out,
        d = c + o * l.along + i * l.out,
        f =
          (((e + Math.PI + (l.rel ?? 0)) % (2 * Math.PI)) + 2 * Math.PI) %
          (2 * Math.PI),
        p = {
          id: `tokyo:site:${n.id}:${l.name}`,
          kind: l.kind,
          label: l.label,
          x: Math.round(u * 10) / 10,
          z: Math.round(d * 10) / 10,
          heading: Math.round(f * 1e3) / 1e3,
          radius: l.radius,
        };
      (l.copyKey && (p.copyKey = l.copyKey),
        l.hours && (p.hours = l.hours),
        l.note && (p.note = l.note),
        t.push(p));
    }
  }
  return t;
}
function S_() {
  let e = [];
  for (let { def: t, site: n } of b_) {
    let r = t.storefront;
    if (!r) continue;
    let i = Math.cos(n.facing),
      a = Math.sin(n.facing),
      o = r.doorX,
      s = -n.d / 2;
    e.push({
      site: t.id,
      trade: r.trade,
      x: n.x + o * i - s * a,
      z: n.z + o * a + s * i,
      heading: n.facing,
      w: r.doorW,
      hours: t.hours,
    });
  }
  return e;
}
var C_ = (e) => e.env?.hour ?? 12;
function w_(e, t) {
  if (!e) return !0;
  let n = C_(t),
    r = t.time?.weekday ?? 4;
  if (e.close > 24 && n < e.close - 24) {
    let t = (r + 6) % 7;
    return !e.closed?.includes(t);
  }
  return !e.closed?.includes(r) && n >= e.open && n < Math.min(24, e.close);
}
function T_(e) {
  let t = e.time?.date;
  return { m: t?.m ?? 10, d: t?.d ?? 1 };
}
function Lue(e) {
  let { m: t, d: n } = T_(e);
  return t === 12 && n >= 20;
}
function Rue(e) {
  let { m: t, d: n } = T_(e);
  return (
    (t === 11 && n >= 21) ||
    (t === 12 && n <= 23) ||
    (t === 7 && n >= 1 && n <= 31)
  );
}
var E_ = 0.04,
  D_ = 0.18,
  O_ = 600,
  k_ = [
    [`walkin.sento.milk.coffee`, 160, 25, `咖`],
    [`walkin.sento.milk.fruit`, 160, 25, `果`],
    [`walkin.sento.milk.plain`, 150, 25, `奶`],
  ];
