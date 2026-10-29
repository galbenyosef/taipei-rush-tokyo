// tokyo/assets/region-tokyo-interiorsWorker-CQjw7WYB 12 — array
// Lines 4792-5050 of readable/tokyo/assets/region-tokyo-interiorsWorker-CQjw7WYB.pretty.js (statement-aligned).
const vt = [
    /*@__PURE__*/ new N(),
    /*@__PURE__*/ new N(),
    /*@__PURE__*/ new N(),
    /*@__PURE__*/ new N(),
    /*@__PURE__*/ new N(),
    /*@__PURE__*/ new N(),
    /*@__PURE__*/ new N(),
    /*@__PURE__*/ new N(),
  ],
  yt = /*@__PURE__*/ new N(),
  bt = /*@__PURE__*/ new _t(),
  xt = /*@__PURE__*/ new N(),
  St = /*@__PURE__*/ new N(),
  Ct = /*@__PURE__*/ new N(),
  wt = /*@__PURE__*/ new N(),
  Tt = /*@__PURE__*/ new N(),
  Et = /*@__PURE__*/ new N(),
  Dt = /*@__PURE__*/ new N(),
  Ot = /*@__PURE__*/ new N(),
  kt = /*@__PURE__*/ new N(),
  At = /*@__PURE__*/ new N();
function jt(e, t, n, r, i) {
  for (let a = 0, o = e.length - 3; a <= o; a += 3) {
    At.fromArray(e, a);
    let o = i.x * Math.abs(At.x) + i.y * Math.abs(At.y) + i.z * Math.abs(At.z),
      s = t.dot(At),
      c = n.dot(At),
      l = r.dot(At);
    if (Math.max(-Math.max(s, c, l), Math.min(s, c, l)) > o) return !1;
  }
  return !0;
}
const Mt = /*@__PURE__*/ new N(),
  Nt = /*@__PURE__*/ new M();
let Pt = 0;
var Ft = class extends O {
    constructor(e, t, n = !1) {
      if ((super(), Array.isArray(e)))
        throw TypeError(
          `THREE.BufferAttribute: array should be a Typed Array.`,
        );
      ((this.isBufferAttribute = !0),
        Object.defineProperty(this, "id", { value: Pt++ }),
        (this.name = ``),
        (this.array = e),
        (this.itemSize = t),
        (this.count = e === void 0 ? 0 : e.length / t),
        (this.normalized = n),
        (this.usage = 35044),
        (this.updateRanges = []),
        (this.gpuType = o),
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
          (Nt.fromBufferAttribute(this, t),
            Nt.applyMatrix3(e),
            this.setXY(t, Nt.x, Nt.y));
      else if (this.itemSize === 3)
        for (let t = 0, n = this.count; t < n; t++)
          (Mt.fromBufferAttribute(this, t),
            Mt.applyMatrix3(e),
            this.setXYZ(t, Mt.x, Mt.y, Mt.z));
      return this;
    }
    applyMatrix4(e) {
      for (let t = 0, n = this.count; t < n; t++)
        (Mt.fromBufferAttribute(this, t),
          Mt.applyMatrix4(e),
          this.setXYZ(t, Mt.x, Mt.y, Mt.z));
      return this;
    }
    applyNormalMatrix(e) {
      for (let t = 0, n = this.count; t < n; t++)
        (Mt.fromBufferAttribute(this, t),
          Mt.applyNormalMatrix(e),
          this.setXYZ(t, Mt.x, Mt.y, Mt.z));
      return this;
    }
    transformDirection(e) {
      for (let t = 0, n = this.count; t < n; t++)
        (Mt.fromBufferAttribute(this, t),
          Mt.transformDirection(e),
          this.setXYZ(t, Mt.x, Mt.y, Mt.z));
      return this;
    }
    set(e, t = 0) {
      return (this.array.set(e, t), this);
    }
    getComponent(e, t) {
      let n = this.array[e * this.itemSize + t];
      return (this.normalized && (n = ne(n, this.array)), n);
    }
    setComponent(e, t, n) {
      return (
        this.normalized && (n = re(n, this.array)),
        (this.array[e * this.itemSize + t] = n),
        this
      );
    }
    getX(e) {
      let t = this.array[e * this.itemSize];
      return (this.normalized && (t = ne(t, this.array)), t);
    }
    setX(e, t) {
      return (
        this.normalized && (t = re(t, this.array)),
        (this.array[e * this.itemSize] = t),
        this
      );
    }
    getY(e) {
      let t = this.array[e * this.itemSize + 1];
      return (this.normalized && (t = ne(t, this.array)), t);
    }
    setY(e, t) {
      return (
        this.normalized && (t = re(t, this.array)),
        (this.array[e * this.itemSize + 1] = t),
        this
      );
    }
    getZ(e) {
      let t = this.array[e * this.itemSize + 2];
      return (this.normalized && (t = ne(t, this.array)), t);
    }
    setZ(e, t) {
      return (
        this.normalized && (t = re(t, this.array)),
        (this.array[e * this.itemSize + 2] = t),
        this
      );
    }
    getW(e) {
      let t = this.array[e * this.itemSize + 3];
      return (this.normalized && (t = ne(t, this.array)), t);
    }
    setW(e, t) {
      return (
        this.normalized && (t = re(t, this.array)),
        (this.array[e * this.itemSize + 3] = t),
        this
      );
    }
    setXY(e, t, n) {
      return (
        (e *= this.itemSize),
        this.normalized && ((t = re(t, this.array)), (n = re(n, this.array))),
        (this.array[e + 0] = t),
        (this.array[e + 1] = n),
        this
      );
    }
    setXYZ(e, t, n, r) {
      return (
        (e *= this.itemSize),
        this.normalized &&
          ((t = re(t, this.array)),
          (n = re(n, this.array)),
          (r = re(r, this.array))),
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
          ((t = re(t, this.array)),
          (n = re(n, this.array)),
          (r = re(r, this.array)),
          (i = re(i, this.array))),
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
  It = class extends Ft {
    constructor(e, t, n) {
      super(new Uint16Array(e), t, n);
    }
  },
  Lt = class extends Ft {
    constructor(e, t, n) {
      super(new Uint32Array(e), t, n);
    }
  },
  Rt = class extends Ft {
    constructor(e, t, n) {
      super(new Float32Array(e), t, n);
    }
  };
const zt = /*@__PURE__*/ new _t(),
  Bt = /*@__PURE__*/ new N(),
  Vt = /*@__PURE__*/ new N();
