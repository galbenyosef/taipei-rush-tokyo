// tokyo/assets/region-tokyo-55J_WESF 05 — setattribute
// Lines 1285-1354 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function ar(e, t) {
  let n = e.n,
    r = new y();
  ((r.name = t),
    r.setAttribute(`position`, new b(e.pos.slice(0, n * 3), 3)),
    r.setAttribute(`normal`, new b(e.nor.slice(0, n * 3), 3)),
    r.setAttribute(`uv`, new b(e.uv.slice(0, n * 2), 2)));
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
    r.setAttribute(`color`, new b(i, 4, !0)),
    r.setAttribute(`aCity`, new b(a, 4, !0)),
    r.setIndex(new b(e.idx.slice(0, e.ni), 1)),
    r.computeBoundingBox(),
    r.computeBoundingSphere(),
    r
  );
}
function ene() {
  let e = new y();
  return (
    e.setAttribute(`position`, new b(new Float32Array(), 3)),
    e.setAttribute(`normal`, new b(new Float32Array(), 3)),
    e.setAttribute(`uv`, new b(new Float32Array(), 2)),
    e.setAttribute(`color`, new b(new Uint8Array(), 4, !0)),
    e.setAttribute(`aCity`, new b(new Uint8Array(), 4, !0)),
    e.setIndex(new b(new Uint32Array(), 1)),
    e
  );
}
var or = new M(),
  sr = new M(),
  cr = new l(),
  lr = new j(),
  ur = new j(),
  dr = 6,
  fr = 20.25,
  pr = (6 * Math.PI) / 180,
  mr = Math.sin(pr),
  tne = Math.cos(pr * 0.75),
  nne = 1.2,
  rne =
    typeof location > `u` ||
    new URLSearchParams(location.search).get(`emptycull`) !== `0`;
function ine(e, t) {
  (sr.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
    cr.setFromProjectionMatrix(sr, t.coordinateSystem, t.reversedDepth));
  for (let t = 0; t < 6; t++) {
    let n = e.planes[t],
      r = cr.planes[t];
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
