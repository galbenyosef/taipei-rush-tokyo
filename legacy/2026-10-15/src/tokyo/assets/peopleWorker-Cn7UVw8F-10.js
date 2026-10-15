// tokyo/assets/peopleWorker-Cn7UVw8F 10 — math
// Lines 4052-4376 of readable/tokyo/assets/peopleWorker-Cn7UVw8F.pretty.js (statement-aligned).
var F = class {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(e, t, n)
    );
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      let t = e;
      t && t.isColor
        ? this.copy(t)
        : typeof t == `number`
          ? this.setHex(t)
          : typeof t == `string` && this.setStyle(t);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return ((this.r = e), (this.g = e), (this.b = e), this);
  }
  setHex(e, t = h) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      de.colorSpaceToWorking(this, t),
      this
    );
  }
  setRGB(e, t, n, r = de.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      de.colorSpaceToWorking(this, r),
      this
    );
  }
  setHSL(e, t, n, r = de.workingColorSpace) {
    if (((e = ee(e, 1)), (t = j(t, 0, 1)), (n = j(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      let r = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        i = 2 * n - r;
      ((this.r = tt(i, r, e + 1 / 3)),
        (this.g = tt(i, r, e)),
        (this.b = tt(i, r, e - 1 / 3)));
    }
    return (de.colorSpaceToWorking(this, r), this);
  }
  setStyle(e, t = h) {
    function n(t) {
      t !== void 0 &&
        parseFloat(t) < 1 &&
        T(`Color: Alpha component of ` + e + ` will be ignored.`);
    }
    let r;
    if ((r = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let i,
        a = r[1],
        o = r[2];
      switch (a) {
        case `rgb`:
        case `rgba`:
          if (
            (i =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o,
              ))
          )
            return (
              n(i[4]),
              this.setRGB(
                Math.min(255, parseInt(i[1], 10)) / 255,
                Math.min(255, parseInt(i[2], 10)) / 255,
                Math.min(255, parseInt(i[3], 10)) / 255,
                t,
              )
            );
          if (
            (i =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o,
              ))
          )
            return (
              n(i[4]),
              this.setRGB(
                Math.min(100, parseInt(i[1], 10)) / 100,
                Math.min(100, parseInt(i[2], 10)) / 100,
                Math.min(100, parseInt(i[3], 10)) / 100,
                t,
              )
            );
          break;
        case `hsl`:
        case `hsla`:
          if (
            (i =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o,
              ))
          )
            return (
              n(i[4]),
              this.setHSL(
                parseFloat(i[1]) / 360,
                parseFloat(i[2]) / 100,
                parseFloat(i[3]) / 100,
                t,
              )
            );
          break;
        default:
          T(`Color: Unknown color model ` + e);
      }
    } else if ((r = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      let n = r[1],
        i = n.length;
      if (i === 3)
        return this.setRGB(
          parseInt(n.charAt(0), 16) / 15,
          parseInt(n.charAt(1), 16) / 15,
          parseInt(n.charAt(2), 16) / 15,
          t,
        );
      if (i === 6) return this.setHex(parseInt(n, 16), t);
      T(`Color: Invalid hex color ` + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = h) {
    let n = Qe[e.toLowerCase()];
    return (
      n === void 0 ? T(`Color: Unknown color ` + e) : this.setHex(n, t),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return ((this.r = e.r), (this.g = e.g), (this.b = e.b), this);
  }
  copySRGBToLinear(e) {
    return ((this.r = fe(e.r)), (this.g = fe(e.g)), (this.b = fe(e.b)), this);
  }
  copyLinearToSRGB(e) {
    return ((this.r = pe(e.r)), (this.g = pe(e.g)), (this.b = pe(e.b)), this);
  }
  convertSRGBToLinear() {
    return (this.copySRGBToLinear(this), this);
  }
  convertLinearToSRGB() {
    return (this.copyLinearToSRGB(this), this);
  }
  getHex(e = h) {
    return (
      de.workingToColorSpace(nt.copy(this), e),
      Math.round(j(nt.r * 255, 0, 255)) * 65536 +
        Math.round(j(nt.g * 255, 0, 255)) * 256 +
        Math.round(j(nt.b * 255, 0, 255))
    );
  }
  getHexString(e = h) {
    return (`000000` + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = de.workingColorSpace) {
    de.workingToColorSpace(nt.copy(this), t);
    let n = nt.r,
      r = nt.g,
      i = nt.b,
      a = Math.max(n, r, i),
      o = Math.min(n, r, i),
      s,
      c,
      l = (o + a) / 2;
    if (o === a) ((s = 0), (c = 0));
    else {
      let e = a - o;
      switch (((c = l <= 0.5 ? e / (a + o) : e / (2 - a - o)), a)) {
        case n:
          s = (r - i) / e + (r < i ? 6 : 0);
          break;
        case r:
          s = (i - n) / e + 2;
          break;
        case i:
          s = (n - r) / e + 4;
      }
      s /= 6;
    }
    return ((e.h = s), (e.s = c), (e.l = l), e);
  }
  getRGB(e, t = de.workingColorSpace) {
    return (
      de.workingToColorSpace(nt.copy(this), t),
      (e.r = nt.r),
      (e.g = nt.g),
      (e.b = nt.b),
      e
    );
  }
  getStyle(e = h) {
    de.workingToColorSpace(nt.copy(this), e);
    let t = nt.r,
      n = nt.g,
      r = nt.b;
    return e === `srgb`
      ? `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`
      : `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`;
  }
  offsetHSL(e, t, n) {
    return (this.getHSL($e), this.setHSL($e.h + e, $e.s + t, $e.l + n));
  }
  add(e) {
    return ((this.r += e.r), (this.g += e.g), (this.b += e.b), this);
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r),
      (this.g = e.g + t.g),
      (this.b = e.b + t.b),
      this
    );
  }
  addScalar(e) {
    return ((this.r += e), (this.g += e), (this.b += e), this);
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return ((this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this);
  }
  multiplyScalar(e) {
    return ((this.r *= e), (this.g *= e), (this.b *= e), this);
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    (this.getHSL($e), e.getHSL(et));
    let n = te($e.h, et.h, t),
      r = te($e.s, et.s, t),
      i = te($e.l, et.l, t);
    return (this.setHSL(n, r, i), this);
  }
  setFromVector3(e) {
    return ((this.r = e.x), (this.g = e.y), (this.b = e.z), this);
  }
  applyMatrix3(e) {
    let t = this.r,
      n = this.g,
      r = this.b,
      i = e.elements;
    return (
      (this.r = i[0] * t + i[3] * n + i[6] * r),
      (this.g = i[1] * t + i[4] * n + i[7] * r),
      (this.b = i[2] * t + i[5] * n + i[8] * r),
      this
    );
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return ((this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this);
  }
  toArray(e = [], t = 0) {
    return ((e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e);
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)),
      (this.g = e.getY(t)),
      (this.b = e.getZ(t)),
      this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    (yield this.r, yield this.g, yield this.b);
  }
};
const nt = /*@__PURE__*/ new F();
F.NAMES = Qe;
const rt = /*@__PURE__*/ new N(),
  it = /*@__PURE__*/ new N(),
  at = /*@__PURE__*/ new N(),
  ot = /*@__PURE__*/ new N(),
  st = /*@__PURE__*/ new N(),
  ct = /*@__PURE__*/ new N(),
  lt = /*@__PURE__*/ new N(),
  ut = /*@__PURE__*/ new N(),
  dt = /*@__PURE__*/ new N(),
  ft = /*@__PURE__*/ new N(),
  pt = /*@__PURE__*/ new Se(),
  mt = /*@__PURE__*/ new Se(),
  ht = /*@__PURE__*/ new Se();
