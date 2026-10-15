// tokyo/assets/region-tokyo-55J_WESF 76 — lce
// Lines 35273-35283 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var lce = { minX: -5, minZ: 185, maxX: 160, maxZ: 605 },
  sp = [
    { id: `north`, z1: 300 },
    { id: `crossing`, z1: 412 },
    { id: `south`, z1: 1 / 0 },
  ];
function uce(e, t, n, r) {
  let i = (t + r) / 2;
  for (let e = 0; e < sp.length; e++) if (i < sp[e].z1) return e;
  return sp.length - 1;
}
