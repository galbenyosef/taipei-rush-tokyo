// tokyo__assets__region-tokyo-bodyWorker-CtngWad2 07 — math
// Lines 3167-3375 of readable/tokyo__assets__region-tokyo-bodyWorker-CtngWad2.pretty.js (statement-aligned).
const be = /*@__PURE__*/ new M(),
  xe = /*@__PURE__*/ new ye(),
  Se = /*@__PURE__*/ new M(0, 0, 0),
  Ce = /*@__PURE__*/ new M(1, 1, 1),
  we = /*@__PURE__*/ new M(),
  Te = /*@__PURE__*/ new M(),
  Ee = /*@__PURE__*/ new M(),
  De = /*@__PURE__*/ new ye(),
  Oe = /*@__PURE__*/ new j();
var ke = class e {
  constructor(t = 0, n = 0, r = 0, i = e.DEFAULT_ORDER) {
    ((this.isEuler = !0),
      (this._x = t),
      (this._y = n),
      (this._z = r),
      (this._order = i));
  }
  get x() {
    return this._x;
  }
  set x(e) {
    ((this._x = e), this._onChangeCallback());
  }
  get y() {
    return this._y;
  }
  set y(e) {
    ((this._y = e), this._onChangeCallback());
  }
  get z() {
    return this._z;
  }
  set z(e) {
    ((this._z = e), this._onChangeCallback());
  }
  get order() {
    return this._order;
  }
  set order(e) {
    ((this._order = e), this._onChangeCallback());
  }
  set(e, t, n, r = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    let r = e.elements,
      i = r[0],
      a = r[4],
      o = r[8],
      s = r[1],
      c = r[5],
      l = r[9],
      u = r[2],
      d = r[6],
      f = r[10];
    switch (t) {
      case `XYZ`:
        ((this._y = Math.asin(T(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(-l, f)), (this._z = Math.atan2(-a, i)))
            : ((this._x = Math.atan2(d, c)), (this._z = 0)));
        break;
      case `YXZ`:
        ((this._x = Math.asin(-T(l, -1, 1))),
          Math.abs(l) < 0.9999999
            ? ((this._y = Math.atan2(o, f)), (this._z = Math.atan2(s, c)))
            : ((this._y = Math.atan2(-u, i)), (this._z = 0)));
        break;
      case `ZXY`:
        ((this._x = Math.asin(T(d, -1, 1))),
          Math.abs(d) < 0.9999999
            ? ((this._y = Math.atan2(-u, f)), (this._z = Math.atan2(-a, c)))
            : ((this._y = 0), (this._z = Math.atan2(s, i))));
        break;
      case `ZYX`:
        ((this._y = Math.asin(-T(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._x = Math.atan2(d, f)), (this._z = Math.atan2(s, i)))
            : ((this._x = 0), (this._z = Math.atan2(-a, c))));
        break;
      case `YZX`:
        ((this._z = Math.asin(T(s, -1, 1))),
          Math.abs(s) < 0.9999999
            ? ((this._x = Math.atan2(-l, c)), (this._y = Math.atan2(-u, i)))
            : ((this._x = 0), (this._y = Math.atan2(o, f))));
        break;
      case `XZY`:
        ((this._z = Math.asin(-T(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(d, c)), (this._y = Math.atan2(o, i)))
            : ((this._x = Math.atan2(-l, f)), (this._y = 0)));
        break;
      default:
        y(`Euler: .setFromRotationMatrix() encountered an unknown order: ` + t);
    }
    return ((this._order = t), n === !0 && this._onChangeCallback(), this);
  }
  setFromQuaternion(e, t, n) {
    return (
      De.makeRotationFromQuaternion(e),
      this.setFromRotationMatrix(De, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return (Oe.setFromEuler(this), this.setFromQuaternion(Oe, e));
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return ((this._onChangeCallback = e), this);
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    (yield this._x, yield this._y, yield this._z, yield this._order);
  }
};
ke.DEFAULT_ORDER = `XYZ`;
var Ae = class {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return !!(this.mask & ((1 << e) | 0));
  }
};
let je = 0;
const Me = /*@__PURE__*/ new M(),
  Ne = /*@__PURE__*/ new j(),
  Pe = /*@__PURE__*/ new ye(),
  Fe = /*@__PURE__*/ new M(),
  Ie = /*@__PURE__*/ new M(),
  Le = /*@__PURE__*/ new M(),
  Re = /*@__PURE__*/ new j(),
  ze = /*@__PURE__*/ new M(1, 0, 0),
  Be = /*@__PURE__*/ new M(0, 1, 0),
  Ve = /*@__PURE__*/ new M(0, 0, 1),
  He = { type: `added` },
  Ue = { type: `removed` },
  We = { type: `childadded`, child: null },
  Ge = { type: `childremoved`, child: null };
