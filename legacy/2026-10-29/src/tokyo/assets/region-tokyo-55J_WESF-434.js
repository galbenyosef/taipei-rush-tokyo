// tokyo/assets/region-tokyo-55J_WESF 434 — entrances
// Lines 154913-154922 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function _Re(e, t, n) {
  let r = null,
    i = 1 / 0;
  for (let a of e.transit.entrances ?? []) {
    if (a.stationId !== gRe) continue;
    let e = Math.hypot(a.x - t, a.z - n);
    e < i && ((i = e), (r = a));
  }
  return r;
}
