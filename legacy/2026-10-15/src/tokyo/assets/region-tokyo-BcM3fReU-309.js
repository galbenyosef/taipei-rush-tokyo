// tokyo/assets/region-tokyo-BcM3fReU 309 — math
// Lines 122235-122319 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function B9(e, t, n) {
  return !e.districts?.packs?.some((e) =>
    e.claims?.some(
      (e) =>
        e.scope !== `buildings` &&
        e.minX < t + 0.5 &&
        e.maxX > t - 0.5 &&
        e.minZ < n + 0.5 &&
        e.maxZ > n - 0.5,
    ),
  );
}
function V9(e) {
  let t = T0(`tokyo:ueno:koenguchi`, -153.4, -1241.5),
    n = null,
    r = 1 / 0;
  try {
    for (let i of $T(e.plan).items) {
      if (i.kind !== `bench` || !B9(e, i.x, i.z)) continue;
      let a = Math.hypot(i.x - t.x, i.z - t.z);
      a < r && ((r = a), (n = { x: i.x, z: i.z, y: i.y, fx: i.fx, fz: i.fz }));
    }
  } catch {}
  if (n && r < 60) return n;
  let i = C0(e, t.x - 12, t.z, 8);
  return { x: i.x, z: i.z, y: e.plan.groundHeight(i.x, i.z), fx: 1, fz: 0 };
}
var H9 = (e, t, n) => ({
  x: e.x + e.fz * t + e.fx * n,
  z: e.z - e.fx * t + e.fz * n,
});
function Ure(e, t) {
  let n = typeof window < `u` ? window.__koban?.sites : void 0,
    r = null,
    i = 1 / 0;
  for (let a of n ?? []) {
    let n = Math.hypot(a.x - e, a.z - t);
    n < i && ((i = n), (r = a));
  }
  if (r) return r;
  for (let n of EC) {
    let a = Math.hypot(n.x - e, n.z - t);
    if (a >= i) continue;
    i = a;
    let o = Math.sin(n.facing),
      s = -Math.cos(n.facing);
    r = {
      name: { zh: n.name.zh, en: n.name.en, ja: n.name.ja ?? n.name.zh },
      x: n.x,
      z: n.z,
      fx: o,
      fz: s,
      dx: n.x + o * 3.1,
      dz: n.z + s * 3.1,
    };
  }
  return r;
}
var Wre = [
  {
    id: Lre,
    title: F(`失物招領`, `Lost and Found`, `落とし物`),
    description: F(
      `上野公園口旁的長椅上有個被遺忘的錢包。在日本，撿到東西就送去交番。`,
      `A wallet left on a bench by Ueno Park Exit. In Japan, what you find goes to the koban.`,
      `上野・公園口そばのベンチに財布の忘れ物。日本では、拾ったものは交番へ。`,
    ),
    category: `side`,
    reward: R9,
    icon: `wallet`,
    glyph: `拾`,
    blip: `mission`,
    color: F9,
    order: 310,
    giverName: L9.owner.name,
    hours: [7, 22],
    skipTo: 12,
    start(e) {
      let t = V9(e),
        n = C0(e, t.x + t.fx * 1.4, t.z + t.fz * 1.4, 3);
      return { x: n.x, z: n.z, heading: Math.atan2(t.fx, -t.fz) };
    },
    run: Gre,
  },
];
