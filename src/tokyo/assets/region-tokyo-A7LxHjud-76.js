// tokyo/assets/region-tokyo-A7LxHjud 76 — maxx
// Lines 35346-35356 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var xce = { minX: -5, minZ: 185, maxX: 160, maxZ: 605 },
  up = [
    { id: `north`, z1: 300 },
    { id: `crossing`, z1: 412 },
    { id: `south`, z1: 1 / 0 },
  ];
function Sce(e, t, n, r) {
  let i = (t + r) / 2;
  for (let e = 0; e < up.length; e++) if (i < up[e].z1) return e;
  return up.length - 1;
}
