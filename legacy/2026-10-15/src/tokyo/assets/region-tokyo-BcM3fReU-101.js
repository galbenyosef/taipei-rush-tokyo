// tokyo/assets/region-tokyo-BcM3fReU 101 — chance
// Lines 47995-48142 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function AC(e, t) {
  let n = `${e}|${t}`,
    r = kC.get(n);
  if (!r) {
    let i = DC[e];
    ((r = [...(i ? Ha(i, t).map(([e, t]) => [e.ja, t]) : []), ...OC[e]]),
      kC.set(n, r));
  }
  return r;
}
var ote = (e, t) => {
    let n = [],
      r = new ne(t ^ 28865);
    for (let t of e) {
      let e = (e) => r.weighted(AC(e, t.district.id)),
        i = t.district.style;
      if (
        i.shops <= 0 ||
        t.reserved.some(
          (e) =>
            e.x - e.w / 2 <= t.minX &&
            e.x + e.w / 2 >= t.maxX &&
            e.z - e.d / 2 <= t.minZ &&
            e.z + e.d / 2 >= t.maxZ,
        )
      )
        continue;
      let a = [];
      if (
        (t.north &&
          a.push({
            road: t.north,
            facing: 0,
            along: `x`,
            at: t.minZ,
            from: t.minX,
            to: t.maxX,
          }),
        t.south &&
          a.push({
            road: t.south,
            facing: Math.PI,
            along: `x`,
            at: t.maxZ,
            from: t.minX,
            to: t.maxX,
          }),
        t.west &&
          a.push({
            road: t.west,
            facing: -Math.PI / 2,
            along: `z`,
            at: t.minX,
            from: t.minZ,
            to: t.maxZ,
          }),
        t.east &&
          a.push({
            road: t.east,
            facing: Math.PI / 2,
            along: `z`,
            at: t.maxX,
            from: t.minZ,
            to: t.maxZ,
          }),
        !a.length)
      )
        continue;
      let o = [],
        s = (e, i, s, c, l) => {
          for (let u = 0; u < 6; u++) {
            let u = r.weighted(a.map((e, t) => [t, l && e.road.major ? 3 : 1])),
              d = a[u];
            if (
              (d.road.pedestrian && e === `convenience` && r.chance(0.5)) ||
              d.to - d.from < s + 6
            )
              continue;
            let f = c
                ? r.chance(0.5)
                  ? d.from + 1 + s / 2
                  : d.to - 1 - s / 2
                : r.range(d.from + s / 2 + 3, d.to - s / 2 - 3),
              p = f - s / 2,
              m = f + s / 2;
            if (o.some((e) => e.side === u && p < e.b + 1 && m > e.a - 1))
              continue;
            let h = d.along === `x` ? f : d.at,
              g = d.along === `x` ? d.at : f;
            if (
              !t.reserved.some(
                (e) =>
                  Math.abs(h - e.x) <= e.w / 2 + s / 2 + 3 &&
                  Math.abs(g - e.z) <= e.d / 2 + s / 2 + 3,
              )
            ) {
              (o.push({ side: u, a: p, b: m }),
                n.push({
                  id: `${e}-${n.length}`,
                  kind: e,
                  brand: i,
                  x: h,
                  z: g,
                  facing: d.facing,
                  blockId: t.id,
                  width: s,
                }));
              return;
            }
          }
        };
      (r.chance(0.55 * (0.4 + i.shops)) &&
        s(`convenience`, e(`convenience`), 8, !0, !0),
        r.chance(0.2 * i.shops) && s(`pharmacy`, e(`pharmacy`), 7, !1, !0),
        r.chance(0.03 + 0.22 * i.neon * i.shops) &&
          s(`claw`, e(`claw`), 8, !1, !0),
        r.chance(0.04) && s(`lottery`, e(`lottery`), 3, !0, !0),
        r.chance(0.05 + 0.12 * i.old) && s(`shrine`, e(`shrine`), 3, !1, !1),
        r.chance(0.04 * i.shops * i.neon) &&
          s(`bubbletea`, e(`bubbletea`), 4, !1, !1));
    }
    return n;
  },
  jC = [
    [-125, 820],
    [-125, 511],
    [-58, 361],
    [-58, 190],
    [0, 105],
    [0, -105],
    [-35, -205],
    [-35, -700],
    [-125, -840],
    [-125, -1250],
    [-190, -1440],
    [-215, -1520],
  ];
function MC(e, t) {
  let n = 0;
  for (let r = 0; r + 1 < e.length; r++) {
    let [i, a] = e[r],
      [o, s] = e[r + 1],
      c = Math.hypot(o - i, s - a);
    if ((t - a) * (t - s) <= 0 && a !== s) return n + (c * (t - a)) / (s - a);
    n += c;
  }
  return n;
}
