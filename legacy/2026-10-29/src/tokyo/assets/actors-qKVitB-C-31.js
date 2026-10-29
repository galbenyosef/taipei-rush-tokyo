// tokyo/assets/actors-qKVitB-C 31 — float32array
// Lines 14186-14221 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function Eu(e) {
  let t = new Fs(e),
    n = new fu(e, t);
  t.host = n;
  let r = new Tu(e, n),
    i = n.update.bind(n);
  n.update = (e) => {
    (i(e), r.update(e));
  };
  let a = n;
  return (
    (a.respawnNearby = (e) => r.respawnNearby(e)),
    { player: a, cameraRig: t }
  );
}
var Du = [16 / 1024, 1 - 16 / 1024],
  Ou = new Me(),
  ku = 2048,
  Au = 2,
  ju = [],
  Mu = !0,
  Nu = new Float32Array();
function Pu(e) {
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
function Fu() {
  ((Mu = !1), (ju.length = 0));
}
