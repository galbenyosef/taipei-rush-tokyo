// tokyo/assets/region-tokyo-A7LxHjud 134 — math
// Lines 58134-58407 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function Lde(e, t) {
  let n = `${e}|${t}`,
    r = Iv.get(n);
  if (!r) {
    let i = Fde[e];
    ((r = [...(i ? li(i, t).map(([e, t]) => [e.ja, t]) : []), ...Ide[e]]),
      Iv.set(n, r));
  }
  return r;
}
var Rde = (e, t) => {
    let n = [],
      r = new le(t ^ 28865);
    for (let t of e) {
      let e = (e) => r.weighted(Lde(e, t.district.id)),
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
  Lv = {
    id: `ueno-plateau`,
    name: z(`上野台地（上野山）`, `上野台地（上野山）`, `Ueno Plateau`),
    kind: `plateau`,
    height: 16,
    polygon: [
      [-139, -1520],
      [-139, -1192],
      [-175, -1188],
      [-232, -1200],
      [-300, -1228],
      [-420, -1262],
      [-480, -1290],
      [-480, -1520],
    ],
    edges: [
      { from: [-139, -1520], to: [-139, -1192], kind: `cliff`, width: 0 },
      { from: [-139, -1192], to: [-232, -1200], kind: `cliff`, width: 0 },
      { from: [-232, -1200], to: [-480, -1290], kind: `slope`, width: 45 },
    ],
    stairs: [
      {
        id: `ueno-park-south`,
        name: z(
          `上野公園 正面階段`,
          `上野公園 正面階梯`,
          `Ueno Park Main Stairs`,
        ),
        x: -168,
        z: -1186,
        heading: 0,
        width: 12,
        length: 26,
      },
      {
        id: `ueno-park-keisei`,
        x: -142,
        z: -1196,
        heading: -Math.PI / 2,
        width: 5,
        length: 24,
      },
      {
        id: `ueno-park-kiyomizu`,
        x: -230,
        z: -1197,
        heading: 0,
        width: 5,
        length: 24,
      },
    ],
  },
  zde = [Lv],
  Bde = [
    {
      x: -820,
      z: -1150,
      height: 18,
      radius: 380,
      name: z(`本郷台地`, `本鄉台地`, `Hongo Plateau`),
    },
    {
      x: -520,
      z: -1800,
      height: 18,
      radius: 360,
      name: z(`上野台地（谷中）`, `上野台地（谷中）`, `Yanaka Heights`),
    },
    {
      x: -800,
      z: -480,
      height: 14,
      radius: 280,
      name: z(`駿河台`, `駿河台`, `Surugadai`),
    },
  ],
  Rv = null;
function zv() {
  if (Rv === null) {
    let e = !0;
    try {
      e =
        new URLSearchParams(globalThis.location?.search ?? ``).get(
          `skyline`,
        ) !== `0`;
    } catch {}
    Rv = e;
  }
  return Rv;
}
var Bv = [
    [140, 920],
    [150, 1140],
    [375, 1302],
    [509, 1644],
    [239, 1707],
    [304, 2084],
    [423, 2299],
    [870, 2229],
    [1183, 2725],
    [1375, 3222],
    [1848, 3741],
    [2531, 3780],
    [3109, 4152],
    [2794, 4964],
    [2557, 5452],
    [1508, 6912],
    [470, 8074],
    [113, 9352],
    [2574, 13473],
    [13594, 9892],
    [10137, 189],
    [8073, -1007],
    [6202, -2079],
    [5457, -1090],
    [4767, 67],
    [4072, 741],
    [3350, 677],
    [2843, 1364],
    [2396, 2144],
    [1784, 2604],
    [1321, 2307],
    [986, 2117],
    [904, 1770],
    [871, 1482],
    [1185, 1231],
    [1191, 968],
    [1062, 990],
    [652, 990],
    [652, 872],
    [260, 872],
  ],
  Vv = null;
function Hv(e, t) {
  if (!Vv) {
    Vv = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    for (let [e, t] of Bv)
      ((Vv[0] = Math.min(Vv[0], e)),
        (Vv[1] = Math.min(Vv[1], t)),
        (Vv[2] = Math.max(Vv[2], e)),
        (Vv[3] = Math.max(Vv[3], t)));
  }
  if (e < Vv[0] || t < Vv[1] || e > Vv[2] || t > Vv[3]) return !1;
  let n = !1;
  for (let r = 0, i = Bv.length - 1; r < Bv.length; i = r++) {
    let [a, o] = Bv[r],
      [s, c] = Bv[i];
    o > t != c > t && e < ((s - a) * (t - o)) / (c - o) + a && (n = !n);
  }
  return n;
}
