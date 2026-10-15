// tokyo/assets/region-tokyo-BcM3fReU 260 — entrances
// Lines 102514-102523 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function G2(e, t, n) {
  let r = null,
    i = 1 / 0;
  for (let a of e.transit.entrances ?? []) {
    if (a.stationId !== W2) continue;
    let e = Math.hypot(a.x - t, a.z - n);
    e < i && ((i = e), (r = a));
  }
  return r;
}
