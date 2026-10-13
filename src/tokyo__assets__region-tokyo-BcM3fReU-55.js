// tokyo__assets__region-tokyo-BcM3fReU 55 — setattribute
// Lines 29327-29366 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function uv(e) {
  let t = `${e.quality.materials}|${e.quality.shadows ? `s` : ``}`,
    n = lv.get(t);
  if (n) return n;
  cv ||
    ((cv = new w(new Uint8Array([255, 255, 255, 255]), 1, 1)),
    (cv.needsUpdate = !0),
    (cv.name = `akihabara-proto`));
  let r = new b();
  (r.setAttribute(
    `position`,
    new x(new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0]), 3),
  ),
    r.setAttribute(
      `normal`,
      new x(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]), 3),
    ),
    r.setAttribute(`uv`, new x(new Float32Array(6), 2)),
    r.setAttribute(`color`, new x(new Uint8Array(12).fill(255), 4, !0)),
    r.setAttribute(`aCity`, new x(new Uint8Array(12), 4, !0)),
    r.setIndex(new x(new Uint32Array([0, 1, 2]), 1)));
  let i = ge(`opaque`, {
      policy: e.quality.materials,
      map: cv,
      batched: !0,
      name: `akihabara`,
    }),
    a = new v(2, 3, 3, i);
  a.name = `akihabara:prewarm`;
  let o = a.addGeometry(r);
  return (
    a.addInstance(o),
    (a.castShadow = !!e.quality.shadows),
    (a.receiveShadow = !0),
    (a.frustumCulled = !1),
    (n = [a]),
    lv.set(t, n),
    n
  );
}
