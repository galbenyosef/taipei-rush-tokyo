// tokyo/assets/region-tokyo-A7LxHjud 442 — math
// Lines 157439-157603 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function d6(e, t, n, r) {
  let i = e.ctx,
    a = i.traffic,
    o = new Float32Array(1024),
    s = { s: 0, seg: 0, dist: 0 },
    c = 0,
    l = 0;
  return (u) => {
    if (
      typeof a?.claimNearest != `function` ||
      typeof a?.writePositions != `function` ||
      (c -= u) > 0
    )
      return;
    c = 0.25;
    let d = 0;
    try {
      d = a.writePositions(o);
    } catch {}
    let f = i.camera,
      p = f.position,
      m = -f.matrixWorld.elements[8],
      h = -f.matrixWorld.elements[10],
      g = Math.hypot(m, h) || 1,
      _ = n ? n() : -1 / 0,
      v = r ? r() : 1 / 0,
      y = 0;
    for (let n = 0; n < d && y < 6; n++) {
      let r = o[n * 4],
        i = o[n * 4 + 1];
      if ((t.project(r, i, s), s.dist > 9 || s.s < _ || s.s > v)) continue;
      let a = r - p.x,
        c = i - p.z,
        u = Math.hypot(a, c);
      (u < 55 && (a * m + c * h) / (u * g || 1) > 0.3) ||
        (u6(e, r, i, 2.5) && (y++, l++));
    }
    e.vars.kartSwept = l;
  };
}
function f6(e, t, n) {
  let r = new Set(t),
    i = t.length,
    a = [];
  for (let o = 0; o < i; o++) {
    let s = t[o],
      c = n ? t[(o - 1 + i) % i] : o > 0 ? t[o - 1] : -1,
      l = n ? t[(o + 1) % i] : o < i - 1 ? t[o + 1] : -1,
      u = e.nodes[s],
      d = [];
    for (let n of u.out) {
      let i = e.links[n];
      if (
        !i ||
        i.to === c ||
        i.to === l ||
        (r.has(i.to) && Math.abs(o - t.indexOf(i.to)) <= 1) ||
        i.pedestrian
      )
        continue;
      let a = Math.max(2.5, i.road.halfWidth - 0.8);
      for (let e = 0; e < 4; e++) {
        let t = -a + (2 * a * e) / 3;
        d.push({
          x: i.sx + i.dx * 1.5 + i.rx * t,
          z: i.sz + i.dz * 1.5 + i.rz * t,
          heading: i.heading,
        });
      }
    }
    d.length && a.push({ node: s, cones: d });
  }
  return a;
}
function tze(e, t) {
  let n = e.ctx.plan,
    r = [],
    i = a6(t.main, 20);
  for (let t of i) r.push(e.holdTraffic(t.x, t.z, 18));
  let a = 0;
  for (let n of a6(t.main, 25))
    for (let t = 0; t < 8 && a < 200 && u6(e, n.x, n.z, 22); t++) a++;
  e.vars.kartCleared = a;
  let o = d6(e, t.main),
    s = 0;
  for (let r of f6(n, t.nodes, !0))
    for (let t of r.cones) {
      if (s >= 72) break;
      e.prop(`cone`, t.x, n.groundHeight(t.x, t.z), t.z, t.heading) && s++;
    }
  return (
    (e.vars.kartCones = s),
    {
      release: () => {
        for (let e of r) e();
        r.length = 0;
      },
      sweep: o,
    }
  );
}
var nze = 200,
  rze = 30;
function ize(e, t) {
  let n = e.ctx,
    r = n.plan,
    i = 0;
  for (let a of r.dataset.closures ?? []) {
    let o = yse(r, a);
    if (!o) continue;
    let s = 0;
    for (let e = 0; e < t.length; e += 2)
      (t.pointAt(e, e6),
        !(e6.x < o.x0 || e6.x > o.x1 || e6.z < o.z0 || e6.z > o.z1) &&
          (t.dirAt(e, t6),
          Math.abs(o.axis === `x` ? t6.x : t6.z) > 0.7 && (s += 2)));
    if (s < rze) continue;
    let c = vse(a.id);
    (i++,
      e.onCleanup(() =>
        c(() => {
          let e = n.time;
          if (!e?.date || !ef(a, e.date, e.weekday, n.env?.hour ?? 12))
            return !0;
          let t = n.camera.position;
          return (
            Math.hypot(
              Math.max(o.x0 - t.x, 0, t.x - o.x1),
              Math.max(o.z0 - t.z, 0, t.z - o.z1),
            ) >= nze
          );
        }),
      ));
  }
  return ((e.vars.kartYielded = i), i);
}
async function p6(e, t, n) {
  let r = ize(e, t),
    i = performance.now();
  await n();
  let a = 1.3 - (performance.now() - i) / 1e3;
  r && a > 0 && e.alive && (await e.wait(a));
}
function m6(e, t, n, r, i) {
  let a = (de(`kart`, Math.round(t * 10), Math.round(n * 10), i) % 1e5) / 1e5;
  return e.vehicle(`kart`, t, n, r, { color: i, seed: a });
}
function aze(e) {
  return e?.kart ?? null;
}
function h6(e, t) {
  try {
    e.ctx.vehicles.putPlayerIn(t);
  } catch {}
  try {
    e.ctx.cameraRig?.snapBehind?.();
  } catch {}
}
var g6 = (e, t) => Ye(Ge(e.ctx), t),
  oze = (e, t) => t[Math.floor(e.next() * t.length) % t.length],
  _6 = N(
    `卡丁車毀了——比賽失敗`,
    `Your kart was wrecked — race lost`,
    `カートが大破した——レース失敗`,
  );
