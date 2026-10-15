// tokyo/assets/world-Bo9wkXrT 41 — mesh
// Lines 13031-13136 of readable/tokyo/assets/world-Bo9wkXrT.pretty.js (statement-aligned).
var hu = class {
  scene;
  material;
  parts = new Map();
  dirty = !1;
  mesh = null;
  rebuilds = 0;
  constructor(e, t) {
    ((this.scene = e), (this.material = t));
  }
  add(e, t) {
    this.parts.get(e) !== t && (this.parts.set(e, t), (this.dirty = !0));
  }
  remove(e) {
    this.parts.delete(e) && (this.dirty = !0);
  }
  get size() {
    return this.parts.size;
  }
  flush() {
    if (!this.dirty) return;
    ((this.dirty = !1), this.rebuilds++);
    let e = this.mesh;
    if (
      (e && (e.parent?.remove(e), e.geometry.dispose(), (this.mesh = null)),
      this.parts.size === 0)
    )
      return;
    let t = gu(this.parts.values());
    if (!t) return;
    let n = new P(t, this.material);
    ((n.name = `sites:glass-batch`),
      (n.userData.owner = `sites`),
      (n.castShadow = !1),
      (n.receiveShadow = !1),
      (n.matrixAutoUpdate = !1),
      n.updateMatrix(),
      (n.frustumCulled = !1),
      (this.mesh = n),
      this.scene.add(n));
  }
  dispose() {
    ((this.mesh &&=
      (this.mesh.parent?.remove(this.mesh),
      this.mesh.geometry.dispose(),
      null)),
      this.parts.clear(),
      (this.dirty = !1));
  }
};
function gu(e) {
  let t = [],
    n = 0,
    r = 0;
  for (let i of e) {
    let e = i.getAttribute(`position`),
      a = i.getIndex();
    e && a && a.count !== 0 && (t.push(i), (n += e.count), (r += a.count));
  }
  if (!t.length) return null;
  let i = new V();
  for (let [e, r] of [
    [`position`, 3],
    [`normal`, 3],
    [`uv`, 2],
    [`color`, 4],
  ]) {
    let a = new Float32Array(n * r),
      o = 0;
    for (let n of t) {
      let t = n.getAttribute(e),
        i = n.getAttribute(`position`).count;
      if (t && t.itemSize === r) a.set(t.array, o);
      else if (e === `color`)
        for (let e = o; e < o + i * 4; e += 4)
          ((a[e] = 1), (a[e + 1] = 1), (a[e + 2] = 1));
      o += i * r;
    }
    i.setAttribute(e, new H(a, r));
  }
  let a = n > 65535 ? new Uint32Array(r) : new Uint16Array(r),
    o = 0,
    s = 0;
  for (let e of t) {
    let t = e.getIndex();
    for (let e = 0; e < t.count; e++) a[s++] = o + t.getX(e);
    o += e.getAttribute(`position`).count;
  }
  return (
    i.setIndex(new H(a, 1)),
    i.computeBoundingSphere(),
    i.computeBoundingBox(),
    i
  );
}
function _u(e, t, n) {
  let r = t ? new P(e, t) : new P(e);
  return (
    (r.name = n),
    (r.castShadow = !1),
    (r.receiveShadow = !1),
    (r.matrixAutoUpdate = !1),
    r.updateMatrix(),
    r
  );
}
