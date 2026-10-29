// tokyo/assets/actors-qKVitB-C 140 — setvisible
// Lines 65277-65299 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function yP(e, t, n, r, i = 1, a = 0) {
  let o = e.prop(t);
  if (!o) return null;
  let s = new I().setFromEuler(new O(0, a, 0)),
    c = e.every(() => {
      let e = n();
      if (!e) {
        o.setVisible(!1);
        return;
      }
      (o.setVisible(!0),
        e.updateWorldMatrix(!0, !1),
        pP.compose(gP.set(r[0], r[1], r[2]), s, _P.set(i, i, i)),
        dP.multiplyMatrices(e.matrixWorld, pP),
        o.setMatrix(dP));
    });
  return {
    handle: o,
    stop() {
      (c(), o.remove());
    },
  };
}
