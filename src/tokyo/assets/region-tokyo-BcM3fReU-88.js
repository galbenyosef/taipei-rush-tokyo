// tokyo/assets/region-tokyo-BcM3fReU 88 — math
// Lines 43498-43641 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var kx = [];
function Ax(e, t) {
  let n = new Map(Dx().map((e) => [e.id, e])),
    r = px(
      e.map((e) => n.get(e.id)).filter((e) => !!e),
      t.plan,
      t,
    ),
    i = new Map(e.map((e) => [e.id, e]));
  kx = [];
  let a = [];
  for (let e of r) {
    let t = i.get(e.def.id);
    (t && e.site.ok && gx(e.def, e.w, e.d, t),
      e.site.ok && kx.push({ def: e.def, site: e.site }));
    for (let t of e.site.errors) console.warn(`[sites] tokyo ${t}`);
    a.push(e.site);
  }
  return (
    typeof window < `u` &&
      (window.__tokyoSites = {
        sites: () => kx.map((e) => e.site),
        storefronts: Px,
        anchors: () => Nx(),
      }),
    a
  );
}
var jx = {
  metas: Ox,
  errors: Cx,
  hasScene: (e) => `./defs/${e}.scene.ts` in xx,
  hasInterior: () => !1,
  async loadScene(e) {
    let t = xx[`./defs/${e}.scene.ts`];
    if (!t) return null;
    try {
      return (await Qi, (await t()) ?? null);
    } catch (t) {
      return (
        Cx.push(
          `regions/tokyo/sites/defs/${e}.scene.ts: load failed: ${t?.message ?? String(t)}`,
        ),
        null
      );
    }
  },
  loadInterior: async () => null,
  resolve: Ax,
  gaps: null,
  look: vx,
};
function Mx(e, t) {
  return $n(e, { registerPack: t, catalog: jx });
}
function Nx(e = Dx()) {
  let t = [];
  for (let n of e) {
    let e = Fb[n.at.face],
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
function Px() {
  let e = [];
  for (let { def: t, site: n } of kx) {
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
var Fx = (e) => e.env?.hour ?? 12;
function Ix(e, t) {
  if (!e) return !0;
  let n = Fx(t),
    r = t.time?.weekday ?? 4;
  if (e.close > 24 && n < e.close - 24) {
    let t = (r + 6) % 7;
    return !e.closed?.includes(t);
  }
  return !e.closed?.includes(r) && n >= e.open && n < Math.min(24, e.close);
}
function Lx(e) {
  let t = e.time?.date;
  return { m: t?.m ?? 10, d: t?.d ?? 1 };
}
function Rx(e) {
  let { m: t, d: n } = Lx(e);
  return t === 12 && n >= 20;
}
function zx(e) {
  let { m: t, d: n } = Lx(e);
  return (
    (t === 11 && n >= 21) ||
    (t === 12 && n <= 23) ||
    (t === 7 && n >= 1 && n <= 31)
  );
}
var Bx = 0.04,
  Vx = 0.18,
  Hx = 600,
  Ux = [
    [`walkin.sento.milk.coffee`, 160, 25, `咖`],
    [`walkin.sento.milk.fruit`, 160, 25, `果`],
    [`walkin.sento.milk.plain`, 150, 25, `奶`],
  ];
