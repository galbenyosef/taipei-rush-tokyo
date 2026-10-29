// tokyo/assets/region-tokyo-A7LxHjud 05 — setattribute
// Lines 1298-1367 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function ar(e, t) {
  let n = e.n,
    r = new S();
  ((r.name = t),
    r.setAttribute(`position`, new w(e.pos.slice(0, n * 3), 3)),
    r.setAttribute(`normal`, new w(e.nor.slice(0, n * 3), 3)),
    r.setAttribute(`uv`, new w(e.uv.slice(0, n * 2), 2)));
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
    r.setAttribute(`color`, new w(i, 4, !0)),
    r.setAttribute(`aCity`, new w(a, 4, !0)),
    r.setIndex(new w(e.idx.slice(0, e.ni), 1)),
    r.computeBoundingBox(),
    r.computeBoundingSphere(),
    r
  );
}
function cne() {
  let e = new S();
  return (
    e.setAttribute(`position`, new w(new Float32Array(), 3)),
    e.setAttribute(`normal`, new w(new Float32Array(), 3)),
    e.setAttribute(`uv`, new w(new Float32Array(), 2)),
    e.setAttribute(`color`, new w(new Uint8Array(), 4, !0)),
    e.setAttribute(`aCity`, new w(new Uint8Array(), 4, !0)),
    e.setIndex(new w(new Uint32Array(), 1)),
    e
  );
}
var or = new p(),
  sr = new p(),
  cr = new k(),
  lr = new E(),
  ur = new E(),
  dr = 6,
  fr = 20.25,
  pr = (6 * Math.PI) / 180,
  mr = Math.sin(pr),
  lne = Math.cos(pr * 0.75),
  une = 1.2,
  dne =
    typeof location > `u` ||
    new URLSearchParams(location.search).get(`emptycull`) !== `0`;
function fne(e, t) {
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
