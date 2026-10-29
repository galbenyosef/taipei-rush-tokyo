// tokyo/assets/actors-bknSEpf2 155 — setvisible
// Lines 71207-71229 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function BL(e, t, n, r, i = 1, a = 0) {
  let o = e.prop(t);
  if (!o) return null;
  let s = new v().setFromEuler(new Pe(0, a, 0)),
    c = e.every(() => {
      let e = n();
      if (!e) {
        o.setVisible(!1);
        return;
      }
      (o.setVisible(!0),
        e.updateWorldMatrix(!0, !1),
        PL.compose(LL.set(r[0], r[1], r[2]), s, RL.set(i, i, i)),
        ML.multiplyMatrices(e.matrixWorld, PL),
        o.setMatrix(ML));
    });
  return {
    handle: o,
    stop() {
      (c(), o.remove());
    },
  };
}
