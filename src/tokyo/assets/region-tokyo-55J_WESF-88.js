// tokyo/assets/region-tokyo-55J_WESF 88 — setattribute
// Lines 39236-39275 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function _le(e) {
  let t = `${e.quality.materials}|${e.quality.shadows ? `s` : ``}`,
    n = Ym.get(t);
  if (n) return n;
  Jm ||
    ((Jm = new w(new Uint8Array([255, 255, 255, 255]), 1, 1)),
    (Jm.needsUpdate = !0),
    (Jm.name = `akihabara-proto`));
  let r = new y();
  (r.setAttribute(
    `position`,
    new b(new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0]), 3),
  ),
    r.setAttribute(
      `normal`,
      new b(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]), 3),
    ),
    r.setAttribute(`uv`, new b(new Float32Array(6), 2)),
    r.setAttribute(`color`, new b(new Uint8Array(12).fill(255), 4, !0)),
    r.setAttribute(`aCity`, new b(new Uint8Array(12), 4, !0)),
    r.setIndex(new b(new Uint32Array([0, 1, 2]), 1)));
  let i = Fe(`opaque`, {
      policy: e.quality.materials,
      map: Jm,
      batched: !0,
      name: `akihabara`,
    }),
    a = new _(2, 3, 3, i);
  a.name = `akihabara:prewarm`;
  let o = a.addGeometry(r);
  return (
    a.addInstance(o),
    (a.castShadow = !!e.quality.shadows),
    (a.receiveShadow = !0),
    (a.frustumCulled = !1),
    (n = [a]),
    Ym.set(t, n),
    n
  );
}
