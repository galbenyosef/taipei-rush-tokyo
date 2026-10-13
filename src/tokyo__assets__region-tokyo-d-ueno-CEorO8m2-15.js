// tokyo__assets__region-tokyo-d-ueno-CEorO8m2 15 — setattribute
// Lines 4470-4509 of readable/tokyo__assets__region-tokyo-d-ueno-CEorO8m2.pretty.js (statement-aligned).
function En(e, a) {
  let o = `${a}|${e.quality.materials}|${e.quality.shadows ? `s` : ``}`,
    s = Tn.get(o);
  if (s) return s;
  wn ||
    ((wn = new i(new Uint8Array([255, 255, 255, 255]), 1, 1)),
    (wn.needsUpdate = !0),
    (wn.name = `ueno-ameyoko-proto`));
  let c = new n();
  (c.setAttribute(
    `position`,
    new r(new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0]), 3),
  ),
    c.setAttribute(
      `normal`,
      new r(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]), 3),
    ),
    c.setAttribute(`uv`, new r(new Float32Array(6), 2)),
    c.setAttribute(`color`, new r(new Uint8Array(12).fill(255), 4, !0)),
    c.setAttribute(`aCity`, new r(new Uint8Array(12), 4, !0)),
    c.setIndex(new r(new Uint32Array([0, 1, 2]), 1)));
  let u = l(`opaque`, {
      policy: e.quality.materials,
      map: wn,
      batched: !0,
      name: a,
    }),
    d = new t(2, 3, 3, u);
  d.name = `${a}:prewarm`;
  let f = d.addGeometry(c);
  return (
    d.addInstance(f),
    (d.castShadow = !!e.quality.shadows),
    (d.receiveShadow = !0),
    (d.frustumCulled = !1),
    (s = [d]),
    Tn.set(o, s),
    s
  );
}
