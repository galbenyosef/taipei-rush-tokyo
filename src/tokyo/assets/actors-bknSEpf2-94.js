// tokyo/assets/actors-bknSEpf2 94 — lineto
// Lines 42530-42543 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function AC(e) {
  return 1 + 2.70158 * (e - 1) ** 3 + 1.70158 * (e - 1) ** 2;
}
function jC(e, t, n, r, i, a) {
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
