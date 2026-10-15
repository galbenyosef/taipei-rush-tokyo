// tokyo/assets/bodyWorker-Bk4d3Tu3 12 — array
// Lines 4642-4972 of readable/tokyo/assets/bodyWorker-Bk4d3Tu3.pretty.js (statement-aligned).
var I = class extends S {
    constructor(e, t, n = !1) {
      if ((super(), Array.isArray(e)))
        throw TypeError(
          `THREE.BufferAttribute: array should be a Typed Array.`,
        );
      ((this.isBufferAttribute = !0),
        Object.defineProperty(this, "id", { value: pt++ }),
        (this.name = ``),
        (this.array = e),
        (this.itemSize = t),
        (this.count = e === void 0 ? 0 : e.length / t),
        (this.normalized = n),
        (this.usage = 35044),
        (this.updateRanges = []),
        (this.gpuType = 1015),
        (this.version = 0));
    }
    onUploadCallback() {}
    set needsUpdate(e) {
      e === !0 && this.version++;
    }
    setUsage(e) {
      return ((this.usage = e), this);
    }
    addUpdateRange(e, t) {
      this.updateRanges.push({ start: e, count: t });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    copy(e) {
      return (
        (this.name = e.name),
        (this.array = new e.array.constructor(e.array)),
        (this.itemSize = e.itemSize),
        (this.count = e.count),
        (this.normalized = e.normalized),
        (this.usage = e.usage),
        (this.gpuType = e.gpuType),
        this
      );
    }
    copyAt(e, t, n) {
      ((e *= this.itemSize), (n *= t.itemSize));
      for (let r = 0, i = this.itemSize; r < i; r++)
        this.array[e + r] = t.array[n + r];
      return this;
    }
    copyArray(e) {
      return (this.array.set(e), this);
    }
    applyMatrix3(e) {
      if (this.itemSize === 2)
        for (let t = 0, n = this.count; t < n; t++)
          (ft.fromBufferAttribute(this, t),
            ft.applyMatrix3(e),
            this.setXY(t, ft.x, ft.y));
      else if (this.itemSize === 3)
        for (let t = 0, n = this.count; t < n; t++)
          (F.fromBufferAttribute(this, t),
            F.applyMatrix3(e),
            this.setXYZ(t, F.x, F.y, F.z));
      return this;
    }
    applyMatrix4(e) {
      for (let t = 0, n = this.count; t < n; t++)
        (F.fromBufferAttribute(this, t),
          F.applyMatrix4(e),
          this.setXYZ(t, F.x, F.y, F.z));
      return this;
    }
    applyNormalMatrix(e) {
      for (let t = 0, n = this.count; t < n; t++)
        (F.fromBufferAttribute(this, t),
          F.applyNormalMatrix(e),
          this.setXYZ(t, F.x, F.y, F.z));
      return this;
    }
    transformDirection(e) {
      for (let t = 0, n = this.count; t < n; t++)
        (F.fromBufferAttribute(this, t),
          F.transformDirection(e),
          this.setXYZ(t, F.x, F.y, F.z));
      return this;
    }
    set(e, t = 0) {
      return (this.array.set(e, t), this);
    }
    getComponent(e, t) {
      let n = this.array[e * this.itemSize + t];
      return (this.normalized && (n = O(n, this.array)), n);
    }
    setComponent(e, t, n) {
      return (
        this.normalized && (n = k(n, this.array)),
        (this.array[e * this.itemSize + t] = n),
        this
      );
    }
    getX(e) {
      let t = this.array[e * this.itemSize];
      return (this.normalized && (t = O(t, this.array)), t);
    }
    setX(e, t) {
      return (
        this.normalized && (t = k(t, this.array)),
        (this.array[e * this.itemSize] = t),
        this
      );
    }
    getY(e) {
      let t = this.array[e * this.itemSize + 1];
      return (this.normalized && (t = O(t, this.array)), t);
    }
    setY(e, t) {
      return (
        this.normalized && (t = k(t, this.array)),
        (this.array[e * this.itemSize + 1] = t),
        this
      );
    }
    getZ(e) {
      let t = this.array[e * this.itemSize + 2];
      return (this.normalized && (t = O(t, this.array)), t);
    }
    setZ(e, t) {
      return (
        this.normalized && (t = k(t, this.array)),
        (this.array[e * this.itemSize + 2] = t),
        this
      );
    }
    getW(e) {
      let t = this.array[e * this.itemSize + 3];
      return (this.normalized && (t = O(t, this.array)), t);
    }
    setW(e, t) {
      return (
        this.normalized && (t = k(t, this.array)),
        (this.array[e * this.itemSize + 3] = t),
        this
      );
    }
    setXY(e, t, n) {
      return (
        (e *= this.itemSize),
        this.normalized && ((t = k(t, this.array)), (n = k(n, this.array))),
        (this.array[e + 0] = t),
        (this.array[e + 1] = n),
        this
      );
    }
    setXYZ(e, t, n, r) {
      return (
        (e *= this.itemSize),
        this.normalized &&
          ((t = k(t, this.array)),
          (n = k(n, this.array)),
          (r = k(r, this.array))),
        (this.array[e + 0] = t),
        (this.array[e + 1] = n),
        (this.array[e + 2] = r),
        this
      );
    }
    setXYZW(e, t, n, r, i) {
      return (
        (e *= this.itemSize),
        this.normalized &&
          ((t = k(t, this.array)),
          (n = k(n, this.array)),
          (r = k(r, this.array)),
          (i = k(i, this.array))),
        (this.array[e + 0] = t),
        (this.array[e + 1] = n),
        (this.array[e + 2] = r),
        (this.array[e + 3] = i),
        this
      );
    }
    onUpload(e) {
      return ((this.onUploadCallback = e), this);
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      let e = {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.from(this.array),
        normalized: this.normalized,
      };
      return (
        (e.name = this.name),
        (e.usage = this.usage),
        (e.gpuType = this.gpuType),
        e
      );
    }
    dispose() {
      this.dispatchEvent({ type: `dispose` });
    }
  },
  mt = class extends I {
    constructor(e, t, n) {
      super(new Uint16Array(e), t, n);
    }
  },
  ht = class extends I {
    constructor(e, t, n) {
      super(new Uint32Array(e), t, n);
    }
  },
  L = class extends I {
    constructor(e, t, n) {
      super(new Float32Array(e), t, n);
    }
  };
const gt = /*@__PURE__*/ new Ze(),
  _t = /*@__PURE__*/ new M(),
  vt = /*@__PURE__*/ new M();
var yt = class {
  constructor(e = new M(), t = -1) {
    ((this.isSphere = !0), (this.center = e), (this.radius = t));
  }
  set(e, t) {
    return (this.center.copy(e), (this.radius = t), this);
  }
  setFromPoints(e, t) {
    let n = this.center;
    t === void 0 ? gt.setFromPoints(e).getCenter(n) : n.copy(t);
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
    _t.subVectors(e, this.center);
    let t = _t.lengthSq();
    if (t > this.radius * this.radius) {
      let e = Math.sqrt(t),
        n = (e - this.radius) * 0.5;
      (this.center.addScaledVector(_t, n / e), (this.radius += n));
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
            : (vt.subVectors(e.center, this.center).setLength(e.radius),
              this.expandByPoint(_t.copy(e.center).add(vt)),
              this.expandByPoint(_t.copy(e.center).sub(vt))),
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
let bt = 0;
const xt = /*@__PURE__*/ new ye(),
  St = /*@__PURE__*/ new Ke(),
  Ct = /*@__PURE__*/ new M(),
  wt = /*@__PURE__*/ new Ze(),
  Tt = /*@__PURE__*/ new Ze(),
  R = /*@__PURE__*/ new M();
