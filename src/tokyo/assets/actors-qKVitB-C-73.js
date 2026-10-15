// tokyo/assets/actors-qKVitB-C 73 — lineto
// Lines 35115-35128 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function _y(e) {
  return 1 + 2.70158 * (e - 1) ** 3 + 1.70158 * (e - 1) ** 2;
}
function vy(e, t, n, r, i, a) {
  (e.moveTo(t + a, n),
    e.lineTo(t + r - a, n),
    e.quadraticCurveTo(t + r, n, t + r, n + a),
    e.lineTo(t + r, n + i - a),
    e.quadraticCurveTo(t + r, n + i, t + r - a, n + i),
    e.lineTo(t + a, n + i),
    e.quadraticCurveTo(t, n + i, t, n + i - a),
    e.lineTo(t, n + a),
    e.quadraticCurveTo(t, n, t + a, n));
}
