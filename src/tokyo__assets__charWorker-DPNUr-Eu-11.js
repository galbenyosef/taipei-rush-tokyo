// tokyo__assets__charWorker-DPNUr-Eu 11 — min
// Lines 4353-4641 of readable/tokyo__assets__charWorker-DPNUr-Eu.pretty.js (statement-aligned).
var $e = class {
  constructor(
    e = new M(1 / 0, 1 / 0, 1 / 0),
    t = new M(-1 / 0, -1 / 0, -1 / 0),
  ) {
    ((this.isBox3 = !0), (this.min = e), (this.max = t));
  }
  set(e, t) {
    return (this.min.copy(e), this.max.copy(t), this);
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(tt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(tt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    let n = tt.copy(t).multiplyScalar(0.5);
    return (this.min.copy(e).sub(n), this.max.copy(e).add(n), this);
  }
  setFromObject(e, t = !1) {
    return (this.makeEmpty(), this.expandByObject(e, t));
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (this.min.copy(e.min), this.max.copy(e.max), this);
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return (this.min.min(e), this.max.max(e), this);
  }
  expandByVector(e) {
    return (this.min.sub(e), this.max.add(e), this);
  }
  expandByScalar(e) {
    return (this.min.addScalar(-e), this.max.addScalar(e), this);
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    let n = e.geometry;
    if (n !== void 0) {
      let r = n.getAttribute(`position`);
      if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0)
        for (let t = 0, n = r.count; t < n; t++)
          (e.isMesh === !0
            ? e.getVertexPosition(t, tt)
            : tt.fromBufferAttribute(r, t),
            tt.applyMatrix4(e.matrixWorld),
            this.expandByPoint(tt));
      else
        (e.boundingBox === void 0
          ? (n.boundingBox === null && n.computeBoundingBox(),
            nt.copy(n.boundingBox))
          : (e.boundingBox === null && e.computeBoundingBox(),
            nt.copy(e.boundingBox)),
          nt.applyMatrix4(e.matrixWorld),
          this.union(nt));
    }
    let r = e.children;
    for (let e = 0, n = r.length; e < n; e++) this.expandByObject(r[e], t);
    return this;
  }
  containsPoint(e) {
    return (
      e.x >= this.min.x &&
      e.x <= this.max.x &&
      e.y >= this.min.y &&
      e.y <= this.max.y &&
      e.z >= this.min.z &&
      e.z <= this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z),
    );
  }
  intersectsBox(e) {
    return (
      e.max.x >= this.min.x &&
      e.min.x <= this.max.x &&
      e.max.y >= this.min.y &&
      e.min.y <= this.max.y &&
      e.max.z >= this.min.z &&
      e.min.z <= this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, tt),
      tt.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    (this.getCenter(lt),
      ut.subVectors(this.max, lt),
      rt.subVectors(e.a, lt),
      it.subVectors(e.b, lt),
      at.subVectors(e.c, lt),
      ot.subVectors(it, rt),
      st.subVectors(at, it),
      ct.subVectors(rt, at));
    let t = [
      0,
      -ot.z,
      ot.y,
      0,
      -st.z,
      st.y,
      0,
      -ct.z,
      ct.y,
      ot.z,
      0,
      -ot.x,
      st.z,
      0,
      -st.x,
      ct.z,
      0,
      -ct.x,
      -ot.y,
      ot.x,
      0,
      -st.y,
      st.x,
      0,
      -ct.y,
      ct.x,
      0,
    ];
    return !pt(t, rt, it, at, ut) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !pt(t, rt, it, at, ut))
      ? !1
      : (dt.crossVectors(ot, st),
        (t = [dt.x, dt.y, dt.z]),
        pt(t, rt, it, at, ut));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, tt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (this.getCenter(e.center),
          (e.radius = this.getSize(tt).length() * 0.5)),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return (this.min.min(e.min), this.max.max(e.max), this);
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (et[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        et[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        et[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        et[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        et[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        et[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        et[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        et[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(et),
        this);
  }
  translate(e) {
    return (this.min.add(e), this.max.add(e), this);
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
  toJSON() {
    return { min: this.min.toArray(), max: this.max.toArray() };
  }
  fromJSON(e) {
    return (this.min.fromArray(e.min), this.max.fromArray(e.max), this);
  }
};
const et = [
    /*@__PURE__*/ new M(),
    /*@__PURE__*/ new M(),
    /*@__PURE__*/ new M(),
    /*@__PURE__*/ new M(),
    /*@__PURE__*/ new M(),
    /*@__PURE__*/ new M(),
    /*@__PURE__*/ new M(),
    /*@__PURE__*/ new M(),
  ],
  tt = /*@__PURE__*/ new M(),
  nt = /*@__PURE__*/ new $e(),
  rt = /*@__PURE__*/ new M(),
  it = /*@__PURE__*/ new M(),
  at = /*@__PURE__*/ new M(),
  ot = /*@__PURE__*/ new M(),
  st = /*@__PURE__*/ new M(),
  ct = /*@__PURE__*/ new M(),
  lt = /*@__PURE__*/ new M(),
  ut = /*@__PURE__*/ new M(),
  dt = /*@__PURE__*/ new M(),
  ft = /*@__PURE__*/ new M();
function pt(e, t, n, r, i) {
  for (let a = 0, o = e.length - 3; a <= o; a += 3) {
    ft.fromArray(e, a);
    let o = i.x * Math.abs(ft.x) + i.y * Math.abs(ft.y) + i.z * Math.abs(ft.z),
      s = t.dot(ft),
      c = n.dot(ft),
      l = r.dot(ft);
    if (Math.max(-Math.max(s, c, l), Math.min(s, c, l)) > o) return !1;
  }
  return !0;
}
const N = /*@__PURE__*/ new M(),
  mt = /*@__PURE__*/ new A();
let ht = 0;
