// tokyo__assets__peopleWorker-Cn7UVw8F 13 — center
// Lines 5051-5158 of readable/tokyo__assets__peopleWorker-Cn7UVw8F.pretty.js (statement-aligned).
var Ht = class {
  constructor(e = new N(), t = -1) {
    ((this.isSphere = !0), (this.center = e), (this.radius = t));
  }
  set(e, t) {
    return (this.center.copy(e), (this.radius = t), this);
  }
  setFromPoints(e, t) {
    let n = this.center;
    t === void 0 ? zt.setFromPoints(e).getCenter(n) : n.copy(t);
    let r = 0;
    for (let t = 0, i = e.length; t < i; t++)
      r = Math.max(r, n.distanceToSquared(e[t]));
    return ((this.radius = Math.sqrt(r)), this);
  }
  copy(e) {
    return (this.center.copy(e.center), (this.radius = e.radius), this);
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return (this.center.set(0, 0, 0), (this.radius = -1), this);
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    let t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    let n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius *= e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return (this.center.add(e), this);
  }
  expandByPoint(e) {
    if (this.isEmpty()) return (this.center.copy(e), (this.radius = 0), this);
    Bt.subVectors(e, this.center);
    let t = Bt.lengthSq();
    if (t > this.radius * this.radius) {
      let e = Math.sqrt(t),
        n = (e - this.radius) * 0.5;
      (this.center.addScaledVector(Bt, n / e), (this.radius += n));
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
        ? (this.copy(e), this)
        : (this.center.equals(e.center) === !0
            ? (this.radius = Math.max(this.radius, e.radius))
            : (Vt.subVectors(e.center, this.center).setLength(e.radius),
              this.expandByPoint(Bt.copy(e.center).add(Vt)),
              this.expandByPoint(Bt.copy(e.center).sub(Vt))),
          this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return { radius: this.radius, center: this.center.toArray() };
  }
  fromJSON(e) {
    return ((this.radius = e.radius), this.center.fromArray(e.center), this);
  }
};
let Ut = 0;
const Wt = /*@__PURE__*/ new Ce(),
  Gt = /*@__PURE__*/ new Xe(),
  Kt = /*@__PURE__*/ new N(),
  qt = /*@__PURE__*/ new _t(),
  Jt = /*@__PURE__*/ new _t(),
  Yt = /*@__PURE__*/ new N();
