// tokyo/assets/engine-wUBYs8Z3 29 — applymatrix4
// Lines 10966-10986 of readable/tokyo/assets/engine-wUBYs8Z3.pretty.js (statement-aligned).
function ll(e) {
  if (!cl) return;
  let t = e._instanceInfo;
  Array.isArray(t) &&
    ((e.frustumCulled = !0),
    (e.intersectsFrustum = (n) => {
      for (let r = 0; r < t.length; r++) {
        let i = t[r];
        if (
          i.active &&
          i.visible &&
          (!e.getBoundingSphereAt(i.geometryIndex, ol) ||
            (e.getMatrixAt(r, sl),
            ol.applyMatrix4(sl).applyMatrix4(e.matrixWorld),
            n.intersectsSphere(ol)))
        )
          return !0;
      }
      return !1;
    }));
}
