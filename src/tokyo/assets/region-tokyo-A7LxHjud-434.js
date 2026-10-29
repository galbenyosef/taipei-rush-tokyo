// tokyo/assets/region-tokyo-A7LxHjud 434 — are
// Lines 155015-155024 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function jRe(e, t, n) {
  let r = null,
    i = 1 / 0;
  for (let a of e.transit.entrances ?? []) {
    if (a.stationId !== ARe) continue;
    let e = Math.hypot(a.x - t, a.z - n);
    e < i && ((i = e), (r = a));
  }
  return r;
}
