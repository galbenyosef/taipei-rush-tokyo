// tokyo/assets/region-tokyo-A7LxHjud 88 — setattribute
// Lines 39309-39348 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function kle(e) {
  let t = `${e.quality.materials}|${e.quality.shadows ? `s` : ``}`,
    n = Qm.get(t);
  if (n) return n;
  Zm ||
    ((Zm = new c(new Uint8Array([255, 255, 255, 255]), 1, 1)),
    (Zm.needsUpdate = !0),
    (Zm.name = `akihabara-proto`));
  let r = new S();
  (r.setAttribute(
    `position`,
    new w(new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0]), 3),
  ),
    r.setAttribute(
      `normal`,
      new w(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]), 3),
    ),
    r.setAttribute(`uv`, new w(new Float32Array(6), 2)),
    r.setAttribute(`color`, new w(new Uint8Array(12).fill(255), 4, !0)),
    r.setAttribute(`aCity`, new w(new Uint8Array(12), 4, !0)),
    r.setIndex(new w(new Uint32Array([0, 1, 2]), 1)));
  let i = ke(`opaque`, {
      policy: e.quality.materials,
      map: Zm,
      batched: !0,
      name: `akihabara`,
    }),
    a = new b(2, 3, 3, i);
  a.name = `akihabara:prewarm`;
  let o = a.addGeometry(r);
  return (
    a.addInstance(o),
    (a.castShadow = !!e.quality.shadows),
    (a.receiveShadow = !0),
    (a.frustumCulled = !1),
    (n = [a]),
    Qm.set(t, n),
    n
  );
}
