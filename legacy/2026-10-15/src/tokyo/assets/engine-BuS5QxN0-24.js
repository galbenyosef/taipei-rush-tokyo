// tokyo/assets/engine-BuS5QxN0 24 — math
// Lines 8654-8787 of readable/tokyo/assets/engine-BuS5QxN0.pretty.js (statement-aligned).
var oc = {
    streetLabel: ic,
    houseNumber: ac,
    laneName: (e, t) => ({
      zh: `${e.full.zh}${t}巷`,
      en: `Ln. ${t}, ${e.full.en}`,
    }),
    unnamedLane: () => ({ zh: `無名巷`, en: `Unnamed Ln.` }),
    address: (e, t) => ({
      zh: `${e.full.zh}${t}號`,
      en: `No. ${t}, ${e.full.en}`,
    }),
    cityAddress: () => ({ zh: `臺北市`, en: `Taipei City` }),
  },
  sc = (e, t) => {
    let n = [],
      r = new Qo(t ^ 24301),
      i = Ks.map((e) => [e.zh, e.weight]),
      a = Gs.map((e) => [e.zh, e.weight]);
    for (let t of e) {
      if (t.edge) continue;
      let e = t.district.style;
      if (e.shops <= 0) continue;
      let o = [];
      (t.north &&
        o.push({
          road: t.north,
          facing: 0,
          along: `x`,
          at: t.minZ,
          from: t.minX,
          to: t.maxX,
        }),
        t.south &&
          o.push({
            road: t.south,
            facing: Math.PI,
            along: `x`,
            at: t.maxZ,
            from: t.minX,
            to: t.maxX,
          }),
        t.west &&
          o.push({
            road: t.west,
            facing: -Math.PI / 2,
            along: `z`,
            at: t.minX,
            from: t.minZ,
            to: t.maxZ,
          }),
        t.east &&
          o.push({
            road: t.east,
            facing: Math.PI / 2,
            along: `z`,
            at: t.maxX,
            from: t.minZ,
            to: t.maxZ,
          }));
      let s = [],
        c = (e, i, a, c, l) => {
          for (let u = 0; u < 6; u++) {
            let u = o.map((e, t) => [t, l && e.road.major ? 3 : 1]),
              d = r.weighted(u),
              f = o[d];
            if (f.to - f.from < a + 6) continue;
            let p = c
                ? r.chance(0.5)
                  ? f.from + 1 + a / 2
                  : f.to - 1 - a / 2
                : r.range(f.from + a / 2 + 3, f.to - a / 2 - 3),
              m = p - a / 2,
              h = p + a / 2;
            if (s.some((e) => e.side === d && m < e.b + 1 && h > e.a - 1))
              continue;
            let g = f.along === `x` ? p : f.at,
              _ = f.along === `x` ? f.at : p;
            if (!t.reserved.some((e) => cc(e, t, g, _, a / 2 + 3))) {
              (s.push({ side: d, a: m, b: h }),
                n.push({
                  id: `${e}-${n.length}`,
                  kind: e,
                  brand: i,
                  x: g,
                  z: _,
                  facing: f.facing,
                  blockId: t.id,
                  width: a,
                }));
              return;
            }
          }
        },
        l = t.district.id,
        u = t.zones.length > 0;
      (r.chance(0.42 * (0.5 + e.shops)) &&
        c(`convenience`, r.weighted(i), 9, !0, !0),
        r.chance(Math.min(0.95, 0.3 * e.shops * (e.neon >= 0.7 ? 1.6 : 1))) &&
          c(`bubbletea`, r.weighted(a), 5, !1, !0),
        e.neon >= 0.7 &&
          r.chance(0.25 * e.shops) &&
          c(`bubbletea`, r.weighted(a), 5, !1, !1),
        r.chance(0.22 * e.shops) && c(`breakfast`, `早餐店`, 6, !1, !1),
        r.chance(0.05 + 0.1 * e.neon) && c(`claw`, `夾娃娃機`, 6, !1, !0),
        r.chance(0.12) && c(`pharmacy`, `藥局`, 6, !1, !1),
        r.chance(0.1) && c(`lottery`, `彩券行`, 4, !1, !1),
        !u &&
          l !== `daan` &&
          l !== `xinyi` &&
          r.chance(0.25 * e.old * e.old + (l === `wanhua` ? 0.25 : 0)) &&
          c(`betelnut`, `檳榔`, 3, !0, !0),
        r.chance(0.08 + 0.1 * e.old) && c(`shrine`, `土地公廟`, 3, !0, !1));
    }
    return n;
  };
function cc(e, t, n, r, i) {
  let a = e.x - e.w / 2 - i,
    o = e.x + e.w / 2 + i,
    s = e.z - e.d / 2 - i,
    c = e.z + e.d / 2 + i,
    l = ((e.facing % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI),
    u = (e) => Math.abs(l - e) < 0.4 || Math.abs(l - e - 2 * Math.PI) < 0.4;
  return (
    u(0)
      ? (s = Math.min(s, t.minZ - 1))
      : u(Math.PI)
        ? (c = Math.max(c, t.maxZ + 1))
        : u(Math.PI / 2)
          ? (o = Math.max(o, t.maxX + 1))
          : u((3 * Math.PI) / 2) && (a = Math.min(a, t.minX - 1)),
    n >= a && n <= o && r >= s && r <= c
  );
}
