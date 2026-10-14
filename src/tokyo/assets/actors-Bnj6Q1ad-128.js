// tokyo/assets/actors-Bnj6Q1ad 128 — setvisible
// Lines 61336-61358 of readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js (statement-aligned).
function Fj(e, t, n, r, i = 1, a = 0) {
  let o = e.prop(t);
  if (!o) return null;
  let s = new y().setFromEuler(new k(0, a, 0)),
    c = e.every(() => {
      let e = n();
      if (!e) {
        o.setVisible(!1);
        return;
      }
      (o.setVisible(!0),
        e.updateWorldMatrix(!0, !1),
        kj.compose(Mj.set(r[0], r[1], r[2]), s, Nj.set(i, i, i)),
        Dj.multiplyMatrices(e.matrixWorld, kj),
        o.setMatrix(Dj));
    });
  return {
    handle: o,
    stop() {
      (c(), o.remove());
    },
  };
}
