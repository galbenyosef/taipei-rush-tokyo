// tokyo/assets/peopleWorker-Cn7UVw8F 15 — normal
// Lines 5677-5766 of readable/tokyo/assets/peopleWorker-Cn7UVw8F.pretty.js (statement-aligned).
const Zt = /*@__PURE__*/ new N(),
  Qt = /*@__PURE__*/ new N(),
  $t = /*@__PURE__*/ new P();
var en = class {
  constructor(e = new N(1, 0, 0), t = 0) {
    ((this.isPlane = !0), (this.normal = e), (this.constant = t));
  }
  set(e, t) {
    return (this.normal.copy(e), (this.constant = t), this);
  }
  setComponents(e, t, n, r) {
    return (this.normal.set(e, t, n), (this.constant = r), this);
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return (this.normal.copy(e), (this.constant = -t.dot(this.normal)), this);
  }
  setFromCoplanarPoints(e, t, n) {
    let r = Zt.subVectors(n, t).cross(Qt.subVectors(e, t)).normalize();
    return (this.setFromNormalAndCoplanarPoint(r, e), this);
  }
  copy(e) {
    return (this.normal.copy(e.normal), (this.constant = e.constant), this);
  }
  normalize() {
    let e = 1 / this.normal.length();
    return (this.normal.multiplyScalar(e), (this.constant *= e), this);
  }
  negate() {
    return ((this.constant *= -1), this.normal.negate(), this);
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t, n = !0) {
    let r = e.delta(Zt),
      i = this.normal.dot(r);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    let a = -(e.start.dot(this.normal) + this.constant) / i;
    return n === !0 && (a < 0 || a > 1)
      ? null
      : t.copy(e.start).addScaledVector(r, a);
  }
  intersectsLine(e) {
    let t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    let n = t || $t.getNormalMatrix(e),
      r = this.coplanarPoint(Zt).applyMatrix4(e),
      i = this.normal.applyMatrix3(n).normalize();
    return ((this.constant = -r.dot(i)), this);
  }
  translate(e) {
    return ((this.constant -= e.dot(this.normal)), this);
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return { normal: this.normal.toArray(), constant: this.constant };
  }
  fromJSON(e) {
    return (
      this.normal.fromArray(e.normal),
      (this.constant = e.constant),
      this
    );
  }
};
let tn = 0;
