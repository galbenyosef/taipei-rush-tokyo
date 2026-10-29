// tokyo/assets/world-CVm1JHks 36 — math
// Lines 11442-11491 of readable/tokyo/assets/world-CVm1JHks.pretty.js (statement-aligned).
var El = new Set([
    `convenience`,
    `bubbletea`,
    `breakfast`,
    `claw`,
    `pharmacy`,
    `lottery`,
  ]),
  Dl = new Set([`shrine`, `betelnut`]),
  Ol = [
    { x0: 470, x1: 655, z0: 118, z1: 178, maxFloors: 8 },
    { x0: 470, x1: 655, z0: 178, z1: 240, maxFloors: 16 },
  ],
  kl = (e, t) => Ol.find((n) => e > n.x0 && e < n.x1 && t > n.z0 && t < n.z1),
  Al = 10,
  jl = 150,
  Ml = 320,
  Nl = new Set([`temple`, `landmark`, `market`, `station`, `plaza`]),
  Pl = (e, t) =>
    Math.hypot(
      Math.max(0, e.x0 - t.x1, t.x0 - e.x1),
      Math.max(0, e.z0 - t.z1, t.z0 - e.z1),
    );
function Fl(e) {
  return (
    Math.round(
      (((e.facing % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)) /
        (Math.PI / 2),
    ) % 4
  );
}
function Il(e, t) {
  return t === 0 || t === 2 ? e.x : e.z;
}
function Ll(e, t) {
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
