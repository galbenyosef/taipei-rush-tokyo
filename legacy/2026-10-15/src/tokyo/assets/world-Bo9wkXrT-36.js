// tokyo/assets/world-Bo9wkXrT 36 — math
// Lines 11315-11364 of readable/tokyo/assets/world-Bo9wkXrT.pretty.js (statement-aligned).
var ul = new Set([
    `convenience`,
    `bubbletea`,
    `breakfast`,
    `claw`,
    `pharmacy`,
    `lottery`,
  ]),
  dl = new Set([`shrine`, `betelnut`]),
  fl = [
    { x0: 470, x1: 655, z0: 118, z1: 178, maxFloors: 8 },
    { x0: 470, x1: 655, z0: 178, z1: 240, maxFloors: 16 },
  ],
  pl = (e, t) => fl.find((n) => e > n.x0 && e < n.x1 && t > n.z0 && t < n.z1),
  ml = 10,
  hl = 150,
  gl = 320,
  _l = new Set([`temple`, `landmark`, `market`, `station`, `plaza`]),
  vl = (e, t) =>
    Math.hypot(
      Math.max(0, e.x0 - t.x1, t.x0 - e.x1),
      Math.max(0, e.z0 - t.z1, t.z0 - e.z1),
    );
function yl(e) {
  return (
    Math.round(
      (((e.facing % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)) /
        (Math.PI / 2),
    ) % 4
  );
}
function bl(e, t) {
  return t === 0 || t === 2 ? e.x : e.z;
}
function xl(e, t) {
  let n = [e];
  for (let e of t) {
    let t = [];
    for (let r of n) {
      if (e.b <= r.a || e.a >= r.b) {
        t.push(r);
        continue;
      }
      (e.a > r.a && t.push({ a: r.a, b: e.a }),
        e.b < r.b && t.push({ a: e.b, b: r.b }));
    }
    n = t;
  }
  return n.filter((e) => e.b - e.a > 0.5);
}
