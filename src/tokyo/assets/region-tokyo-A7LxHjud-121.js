// tokyo/assets/region-tokyo-A7LxHjud 121 — math
// Lines 53436-53617 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function S_() {
  if (x_) return x_;
  let e = [],
    t = new Set();
  for (let n of Object.keys(v_).sort()) {
    let r = n.slice(n.lastIndexOf(`/`) + 1).replace(/\.ts$/, ``),
      i = v_[n],
      a = `regions/tokyo/sites/defs/${r}.ts`;
    if (!i || typeof i != `object`) {
      b_.push(`${a}: no default export`);
      continue;
    }
    if (i.id !== r || !Hue.test(i.id)) {
      b_.push(
        `${a}: id '${String(i.id)}' must be the kebab-case file basename`,
      );
      continue;
    }
    if (t.has(i.id)) {
      b_.push(`${a}: duplicate id`);
      continue;
    }
    if (!i.name?.ja || !i.name?.zh || !i.name?.en) {
      b_.push(`${a}: name needs ja / zh / en`);
      continue;
    }
    i.id in Wue || (t.add(i.id), e.push(i));
  }
  return (
    e.sort(
      (e, t) => (t.priority ?? 0) - (e.priority ?? 0) || (e.id < t.id ? -1 : 1),
    ),
    (x_ = e)
  );
}
function Gue() {
  return (Uue ||= S_().map((e) => g_(e, e.lot.w, e.lot.d)));
}
var C_ = [];
function Kue(e, t) {
  let n = new Map(S_().map((e) => [e.id, e])),
    r = Lue(
      e.map((e) => n.get(e.id)).filter((e) => !!e),
      t.plan,
      t,
    ),
    i = new Map(e.map((e) => [e.id, e]));
  C_ = [];
  let a = [];
  for (let e of r) {
    let t = i.get(e.def.id);
    (t && e.site.ok && g_(e.def, e.w, e.d, t),
      e.site.ok && C_.push({ def: e.def, site: e.site }));
    for (let t of e.site.errors) console.warn(`[sites] tokyo ${t}`);
    a.push(e.site);
  }
  return (
    typeof window < `u` &&
      (window.__tokyoSites = {
        sites: () => C_.map((e) => e.site),
        storefronts: T_,
        anchors: () => w_(),
      }),
    a
  );
}
var que = {
  metas: Gue,
  errors: b_,
  hasScene: (e) => `./defs/${e}.scene.ts` in y_,
  hasInterior: () => !1,
  async loadScene(e) {
    let t = y_[`./defs/${e}.scene.ts`];
    if (!t) return null;
    try {
      return (await Tr, (await t()) ?? null);
    } catch (t) {
      return (
        b_.push(
          `regions/tokyo/sites/defs/${e}.scene.ts: load failed: ${t?.message ?? String(t)}`,
        ),
        null
      );
    }
  },
  loadInterior: async () => null,
  resolve: Kue,
  gaps: null,
  look: Vue,
};
function Jue(e, t) {
  return hte(e, { registerPack: t, catalog: que });
}
function w_(e = S_()) {
  let t = [];
  for (let n of e) {
    let e = Xg[n.at.face],
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
function T_() {
  let e = [];
  for (let { def: t, site: n } of C_) {
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
var E_ = (e) => e.env?.hour ?? 12;
function D_(e, t) {
  if (!e) return !0;
  let n = E_(t),
    r = t.time?.weekday ?? 4;
  if (e.close > 24 && n < e.close - 24) {
    let t = (r + 6) % 7;
    return !e.closed?.includes(t);
  }
  return !e.closed?.includes(r) && n >= e.open && n < Math.min(24, e.close);
}
function O_(e) {
  let t = e.time?.date;
  return { m: t?.m ?? 10, d: t?.d ?? 1 };
}
function Yue(e) {
  let { m: t, d: n } = O_(e);
  return t === 12 && n >= 20;
}
function Xue(e) {
  let { m: t, d: n } = O_(e);
  return (
    (t === 11 && n >= 21) ||
    (t === 12 && n <= 23) ||
    (t === 7 && n >= 1 && n <= 31)
  );
}
var k_ = 0.04,
  A_ = 0.18,
  j_ = 600,
  M_ = [
    [`walkin.sento.milk.coffee`, 160, 25, `咖`],
    [`walkin.sento.milk.fruit`, 160, 25, `果`],
    [`walkin.sento.milk.plain`, 150, 25, `奶`],
  ];
