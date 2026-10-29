// tokyo/assets/engine-14d5lda2 29 — applymatrix4
// Lines 11171-11191 of readable/tokyo/assets/engine-14d5lda2.pretty.js (statement-aligned).
function Bl(e) {
  if (!zl) return;
  let t = e._instanceInfo;
  Array.isArray(t) &&
    ((e.frustumCulled = !0),
    (e.intersectsFrustum = (n) => {
      for (let r = 0; r < t.length; r++) {
        let i = t[r];
        if (
          i.active &&
          i.visible &&
          (!e.getBoundingSphereAt(i.geometryIndex, Ll) ||
            (e.getMatrixAt(r, Rl),
            Ll.applyMatrix4(Rl).applyMatrix4(e.matrixWorld),
            n.intersectsSphere(Ll)))
        )
          return !0;
      }
      return !1;
    }));
}
