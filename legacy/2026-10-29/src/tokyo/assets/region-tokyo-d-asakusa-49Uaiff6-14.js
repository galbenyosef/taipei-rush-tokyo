// tokyo/assets/region-tokyo-d-asakusa-49Uaiff6 14 — batch
// Lines 3819-3842 of readable/tokyo/assets/region-tokyo-d-asakusa-49Uaiff6.pretty.js (statement-aligned).
function sn(e) {
  Kt = !0;
  for (let e of Xt)
    try {
      e.release?.();
    } catch {}
  Xt = [];
  for (let e of nn)
    try {
      e.p?.release();
    } catch {}
  ((nn = []), (Zt = []));
  let t = Q;
  ((Q = null),
    (qt = -1),
    t &&
      (t.batch.mesh.parent?.remove(t.batch.mesh),
      t.batch.mesh.dispose(),
      t.batch.mesh.material.dispose(),
      t.tex.dispose()));
}
function cn() {
  return !1;
}
