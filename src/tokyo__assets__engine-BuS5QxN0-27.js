// tokyo__assets__engine-BuS5QxN0 27 — applymatrix4
// Lines 10621-10641 of readable/tokyo__assets__engine-BuS5QxN0.pretty.js (statement-aligned).
function Lc(e) {
  if (!Ic) return;
  let t = e._instanceInfo;
  Array.isArray(t) &&
    ((e.frustumCulled = !0),
    (e.intersectsFrustum = (n) => {
      for (let r = 0; r < t.length; r++) {
        let i = t[r];
        if (
          i.active &&
          i.visible &&
          (!e.getBoundingSphereAt(i.geometryIndex, Pc) ||
            (e.getMatrixAt(r, Fc),
            Pc.applyMatrix4(Fc).applyMatrix4(e.matrixWorld),
            n.intersectsSphere(Pc)))
        )
          return !0;
      }
      return !1;
    }));
}
