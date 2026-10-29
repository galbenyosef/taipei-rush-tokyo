// tokyo/assets/actors-bknSEpf2 91 — heading
// Lines 41293-41302 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function dC(e, t) {
  let n = Math.sin(t.heading),
    r = -Math.cos(t.heading);
  return (e.x - t.x) * n + (e.z - t.z) * r > 0;
}
var fC = 5,
  pC = 0.35,
  mC = 3,
  hC = 15,
  gC = 5.5;
