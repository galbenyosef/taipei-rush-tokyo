// tokyo__assets__region-tokyo-BcM3fReU 04 — setattribute
// Lines 1250-1319 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function Si(e, t) {
  let n = e.n,
    r = new b();
  ((r.name = t),
    r.setAttribute(`position`, new x(e.pos.slice(0, n * 3), 3)),
    r.setAttribute(`normal`, new x(e.nor.slice(0, n * 3), 3)),
    r.setAttribute(`uv`, new x(e.uv.slice(0, n * 2), 2)));
  let i = new Uint8Array(n * 4),
    a = new Uint8Array(n * 4),
    o = e.ca;
  for (let e = 0, t = 0, r = 0; e < n; e++, t += 4, r += 8)
    ((i[t] = o[r]),
      (i[t + 1] = o[r + 1]),
      (i[t + 2] = o[r + 2]),
      (i[t + 3] = 255),
      (a[t] = o[r + 4]),
      (a[t + 1] = o[r + 5]),
      (a[t + 2] = o[r + 6]),
      (a[t + 3] = o[r + 7]));
  return (
    r.setAttribute(`color`, new x(i, 4, !0)),
    r.setAttribute(`aCity`, new x(a, 4, !0)),
    r.setIndex(new x(e.idx.slice(0, e.ni), 1)),
    r.computeBoundingBox(),
    r.computeBoundingSphere(),
    r
  );
}
function mee() {
  let e = new b();
  return (
    e.setAttribute(`position`, new x(new Float32Array(), 3)),
    e.setAttribute(`normal`, new x(new Float32Array(), 3)),
    e.setAttribute(`uv`, new x(new Float32Array(), 2)),
    e.setAttribute(`color`, new x(new Uint8Array(), 4, !0)),
    e.setAttribute(`aCity`, new x(new Uint8Array(), 4, !0)),
    e.setIndex(new x(new Uint32Array(), 1)),
    e
  );
}
var Ci = new M(),
  wi = new M(),
  Ti = new o(),
  Ei = new k(),
  Di = new k(),
  Oi = 6,
  ki = 20.25,
  Ai = (6 * Math.PI) / 180,
  ji = Math.sin(Ai),
  Mi = Math.cos(Ai * 0.75),
  Ni = 1.2,
  Pi =
    typeof location > `u` ||
    new URLSearchParams(location.search).get(`emptycull`) !== `0`;
function Fi(e, t) {
  (wi.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
    Ti.setFromProjectionMatrix(wi, t.coordinateSystem, t.reversedDepth));
  for (let t = 0; t < 6; t++) {
    let n = e.planes[t],
      r = Ti.planes[t];
    if (
      Math.abs(n.normal.x - r.normal.x) > 1e-5 ||
      Math.abs(n.normal.y - r.normal.y) > 1e-5 ||
      Math.abs(n.normal.z - r.normal.z) > 1e-5 ||
      Math.abs(n.constant - r.constant) > 0.001
    )
      return !1;
  }
  return !0;
}
