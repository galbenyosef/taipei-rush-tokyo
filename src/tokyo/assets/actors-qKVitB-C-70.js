// tokyo/assets/actors-qKVitB-C 70 — heading
// Lines 33874-33883 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function Qv(e, t) {
  let n = Math.sin(t.heading),
    r = -Math.cos(t.heading);
  return (e.x - t.x) * n + (e.z - t.z) * r > 0;
}
var $v = 5,
  ey = 0.35,
  ty = 3,
  ny = 15,
  ry = 5.5;
