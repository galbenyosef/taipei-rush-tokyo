// tokyo__assets__region-tokyo-BcM3fReU 47 — maxx
// Lines 26578-26588 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var Lh = { minX: -5, minZ: 185, maxX: 160, maxZ: 605 },
  Rh = [
    { id: `north`, z1: 300 },
    { id: `crossing`, z1: 412 },
    { id: `south`, z1: 1 / 0 },
  ];
function zh(e, t, n, r) {
  let i = (t + r) / 2;
  for (let e = 0; e < Rh.length; e++) if (i < Rh[e].z1) return e;
  return Rh.length - 1;
}
