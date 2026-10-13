// tokyo__assets__region-tokyo-BcM3fReU 267 — math
// Lines 104409-104486 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function W4(e, t, n) {
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
function G4(e, t) {
  let n = e.ctx.plan,
    r = [],
    i = L4(t.main, 20);
  for (let t of i) r.push(e.holdTraffic(t.x, t.z, 18));
  let a = 0;
  for (let n of L4(t.main, 25))
    for (let t = 0; t < 8 && a < 200 && H4(e, n.x, n.z, 22); t++) a++;
  e.vars.kartCleared = a;
  let o = U4(e, t.main),
    s = 0;
  for (let r of W4(n, t.nodes, !0))
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
function K4(e, t, n, r, i) {
  let a = (P(`kart`, Math.round(t * 10), Math.round(n * 10), i) % 1e5) / 1e5;
  return e.vehicle(`kart`, t, n, r, { color: i, seed: a });
}
function q4(e) {
  return e?.kart ?? null;
}
function J4(e, t) {
  try {
    e.ctx.vehicles.putPlayerIn(t);
  } catch {}
  try {
    e.ctx.cameraRig?.snapBehind?.();
  } catch {}
}
var Y4 = (e, t) => Ae(Ie(e.ctx), t),
  X4 = (e, t) => t[Math.floor(e.next() * t.length) % t.length];
