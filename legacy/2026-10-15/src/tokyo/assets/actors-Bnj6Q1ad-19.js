// tokyo/assets/actors-Bnj6Q1ad 19 — float32array
// Lines 10628-10656 of readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js (statement-aligned).
function qs(e) {
  let t = zs[e],
    n = Ks[e],
    r = t.maxSpeed * 1.02,
    i = t.accel * (1 - (1.02 / Us) ** Ws);
  n.drag = Math.max(5e-5, (i - Gs) / (r * r));
}
for (let e of Is) qs(e);
var Js = [16 / 1024, 1 - 16 / 1024],
  Ys = new Ae(),
  Xs = 2048,
  Zs = 2,
  Qs = [],
  $s = !0,
  ec = new Float32Array();
function tc(e) {
  return {
    P: new Float32Array(e * 3),
    N: new Float32Array(e * 3),
    C: new Float32Array(e * 3),
    UV: new Float32Array(e * 2),
    D: new Float32Array(e * 4),
    VV: new Float32Array(e),
    cap: e,
  };
}
function nc() {
  (($s = !1), (Qs.length = 0));
}
