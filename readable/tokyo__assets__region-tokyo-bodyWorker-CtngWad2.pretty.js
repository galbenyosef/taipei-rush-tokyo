/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const e = 1e3,
  t = 1001,
  n = 1002,
  r = 2300,
  i = 2301,
  a = 2302,
  o = 2303,
  s = 2400,
  c = 2401,
  l = 2402,
  u = `srgb`,
  d = `srgb-linear`,
  f = `linear`,
  p = 2e3;
function m(e) {
  for (let t = e.length - 1; t >= 0; --t) if (e[t] >= 65535) return !0;
  return !1;
}
function h(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function g(e) {
  return document.createElementNS(`http://www.w3.org/1999/xhtml`, e);
}
const _ = {};
function v(e) {
  let t = e[0];
  if (typeof t == `string` && t.startsWith(`TSL:`)) {
    let t = e[1];
    t && t.isStackTrace
      ? (e[0] += ` ` + t.getLocation())
      : (e[1] = `Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`);
  }
  return e;
}
function y(...e) {
  e = v(e);
  let t = `THREE.` + e.shift();
  {
    let n = e[0];
    n && n.isStackTrace ? console.warn(n.getError(t)) : console.warn(t, ...e);
  }
}
function b(...e) {
  e = v(e);
  let t = `THREE.` + e.shift();
  {
    let n = e[0];
    n && n.isStackTrace ? console.error(n.getError(t)) : console.error(t, ...e);
  }
}
function x(...e) {
  let t = e.join(` `);
  t in _ || ((_[t] = !0), y(...e));
}
var S = class {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    let n = this._listeners;
    (n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t));
  }
  hasEventListener(e, t) {
    let n = this._listeners;
    return n !== void 0 && n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    let n = this._listeners;
    if (n === void 0) return;
    let r = n[e];
    if (r !== void 0) {
      let e = r.indexOf(t);
      e !== -1 && r.splice(e, 1);
    }
  }
  dispatchEvent(e) {
    let t = this._listeners;
    if (t === void 0) return;
    let n = t[e.type];
    if (n !== void 0) {
      e.target = this;
      let t = n.slice(0);
      for (let n = 0, r = t.length; n < r; n++) t[n].call(this, e);
      e.target = null;
    }
  }
};
const C =
  /* @__PURE__ */ `00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(
    `.`,
  );
function w() {
  let e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0,
    r = (Math.random() * 4294967295) | 0;
  return (
    C[e & 255] +
    C[(e >> 8) & 255] +
    C[(e >> 16) & 255] +
    C[(e >> 24) & 255] +
    `-` +
    C[t & 255] +
    C[(t >> 8) & 255] +
    `-` +
    C[((t >> 16) & 15) | 64] +
    C[(t >> 24) & 255] +
    `-` +
    C[(n & 63) | 128] +
    C[(n >> 8) & 255] +
    `-` +
    C[(n >> 16) & 255] +
    C[(n >> 24) & 255] +
    C[r & 255] +
    C[(r >> 8) & 255] +
    C[(r >> 16) & 255] +
    C[(r >> 24) & 255]
  ).toLowerCase();
}
function T(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function E(e, t) {
  return ((e % t) + t) % t;
}
function D(e, t, n) {
  return (1 - n) * e + n * t;
}
function O(e, t) {
  switch (t.constructor) {
    case Float32Array:
      return e;
    case Uint32Array:
      return e / 4294967295;
    case Uint16Array:
      return e / 65535;
    case Uint8Array:
    case Uint8ClampedArray:
      return e / 255;
    case Int32Array:
      return Math.max(e / 2147483647, -1);
    case Int16Array:
      return Math.max(e / 32767, -1);
    case Int8Array:
      return Math.max(e / 127, -1);
    default:
      throw Error(`THREE.MathUtils: Invalid component type.`);
  }
}
function k(e, t) {
  switch (t.constructor) {
    case Float32Array:
      return e;
    case Uint32Array:
      return Math.round(e * 4294967295);
    case Uint16Array:
      return Math.round(e * 65535);
    case Uint8Array:
    case Uint8ClampedArray:
      return Math.round(e * 255);
    case Int32Array:
      return Math.round(e * 2147483647);
    case Int16Array:
      return Math.round(e * 32767);
    case Int8Array:
      return Math.round(e * 127);
    default:
      throw Error(`THREE.MathUtils: Invalid component type.`);
  }
}
var A = class e {
    static {
      e.prototype.isVector2 = !0;
    }
    constructor(e = 0, t = 0) {
      ((this.x = e), (this.y = t));
    }
    get width() {
      return this.x;
    }
    set width(e) {
      this.x = e;
    }
    get height() {
      return this.y;
    }
    set height(e) {
      this.y = e;
    }
    set(e, t) {
      return ((this.x = e), (this.y = t), this);
    }
    setScalar(e) {
      return ((this.x = e), (this.y = e), this);
    }
    setX(e) {
      return ((this.x = e), this);
    }
    setY(e) {
      return ((this.y = e), this);
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        default:
          throw Error(`THREE.Vector2: index is out of range: ` + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw Error(`THREE.Vector2: index is out of range: ` + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(e) {
      return ((this.x = e.x), (this.y = e.y), this);
    }
    add(e) {
      return ((this.x += e.x), (this.y += e.y), this);
    }
    addScalar(e) {
      return ((this.x += e), (this.y += e), this);
    }
    addVectors(e, t) {
      return ((this.x = e.x + t.x), (this.y = e.y + t.y), this);
    }
    addScaledVector(e, t) {
      return ((this.x += e.x * t), (this.y += e.y * t), this);
    }
    sub(e) {
      return ((this.x -= e.x), (this.y -= e.y), this);
    }
    subScalar(e) {
      return ((this.x -= e), (this.y -= e), this);
    }
    subVectors(e, t) {
      return ((this.x = e.x - t.x), (this.y = e.y - t.y), this);
    }
    multiply(e) {
      return ((this.x *= e.x), (this.y *= e.y), this);
    }
    multiplyScalar(e) {
      return ((this.x *= e), (this.y *= e), this);
    }
    divide(e) {
      return ((this.x /= e.x), (this.y /= e.y), this);
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    applyMatrix3(e) {
      let t = this.x,
        n = this.y,
        r = e.elements;
      return (
        (this.x = r[0] * t + r[3] * n + r[6]),
        (this.y = r[1] * t + r[4] * n + r[7]),
        this
      );
    }
    min(e) {
      return (
        (this.x = Math.min(this.x, e.x)),
        (this.y = Math.min(this.y, e.y)),
        this
      );
    }
    max(e) {
      return (
        (this.x = Math.max(this.x, e.x)),
        (this.y = Math.max(this.y, e.y)),
        this
      );
    }
    clamp(e, t) {
      return (
        (this.x = T(this.x, e.x, t.x)),
        (this.y = T(this.y, e.y, t.y)),
        this
      );
    }
    clampScalar(e, t) {
      return ((this.x = T(this.x, e, t)), (this.y = T(this.y, e, t)), this);
    }
    clampLength(e, t) {
      let n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(T(n, e, t));
    }
    floor() {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        this
      );
    }
    ceil() {
      return ((this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this);
    }
    round() {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        this
      );
    }
    roundToZero() {
      return (
        (this.x = Math.trunc(this.x)),
        (this.y = Math.trunc(this.y)),
        this
      );
    }
    negate() {
      return ((this.x = -this.x), (this.y = -this.y), this);
    }
    dot(e) {
      return this.x * e.x + this.y * e.y;
    }
    cross(e) {
      return this.x * e.y - this.y * e.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    angleTo(e) {
      let t = Math.sqrt(this.lengthSq() * e.lengthSq());
      if (t === 0) return Math.PI / 2;
      let n = this.dot(e) / t;
      return Math.acos(T(n, -1, 1));
    }
    distanceTo(e) {
      return Math.sqrt(this.distanceToSquared(e));
    }
    distanceToSquared(e) {
      let t = this.x - e.x,
        n = this.y - e.y;
      return t * t + n * n;
    }
    manhattanDistanceTo(e) {
      return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return (
        (this.x += (e.x - this.x) * t),
        (this.y += (e.y - this.y) * t),
        this
      );
    }
    lerpVectors(e, t, n) {
      return (
        (this.x = e.x + (t.x - e.x) * n),
        (this.y = e.y + (t.y - e.y) * n),
        this
      );
    }
    equals(e) {
      return e.x === this.x && e.y === this.y;
    }
    fromArray(e, t = 0) {
      return ((this.x = e[t]), (this.y = e[t + 1]), this);
    }
    toArray(e = [], t = 0) {
      return ((e[t] = this.x), (e[t + 1] = this.y), e);
    }
    fromBufferAttribute(e, t) {
      return ((this.x = e.getX(t)), (this.y = e.getY(t)), this);
    }
    rotateAround(e, t) {
      let n = Math.cos(t),
        r = Math.sin(t),
        i = this.x - e.x,
        a = this.y - e.y;
      return (
        (this.x = i * n - a * r + e.x),
        (this.y = i * r + a * n + e.y),
        this
      );
    }
    random() {
      return ((this.x = Math.random()), (this.y = Math.random()), this);
    }
    *[Symbol.iterator]() {
      (yield this.x, yield this.y);
    }
  },
  j = class {
    constructor(e = 0, t = 0, n = 0, r = 1) {
      ((this.isQuaternion = !0),
        (this._x = e),
        (this._y = t),
        (this._z = n),
        (this._w = r));
    }
    static slerpFlat(e, t, n, r, i, a, o) {
      let s = n[r + 0],
        c = n[r + 1],
        l = n[r + 2],
        u = n[r + 3],
        d = i[a + 0],
        f = i[a + 1],
        p = i[a + 2],
        m = i[a + 3];
      if (u !== m || s !== d || c !== f || l !== p) {
        let e = s * d + c * f + l * p + u * m;
        e < 0 && ((d = -d), (f = -f), (p = -p), (m = -m), (e = -e));
        let t = 1 - o;
        if (e < 0.9995) {
          let n = Math.acos(e),
            r = Math.sin(n);
          ((t = Math.sin(t * n) / r),
            (o = Math.sin(o * n) / r),
            (s = s * t + d * o),
            (c = c * t + f * o),
            (l = l * t + p * o),
            (u = u * t + m * o));
        } else {
          ((s = s * t + d * o),
            (c = c * t + f * o),
            (l = l * t + p * o),
            (u = u * t + m * o));
          let e = 1 / Math.sqrt(s * s + c * c + l * l + u * u);
          ((s *= e), (c *= e), (l *= e), (u *= e));
        }
      }
      ((e[t] = s), (e[t + 1] = c), (e[t + 2] = l), (e[t + 3] = u));
    }
    static multiplyQuaternionsFlat(e, t, n, r, i, a) {
      let o = n[r],
        s = n[r + 1],
        c = n[r + 2],
        l = n[r + 3],
        u = i[a],
        d = i[a + 1],
        f = i[a + 2],
        p = i[a + 3];
      return (
        (e[t] = o * p + l * u + s * f - c * d),
        (e[t + 1] = s * p + l * d + c * u - o * f),
        (e[t + 2] = c * p + l * f + o * d - s * u),
        (e[t + 3] = l * p - o * u - s * d - c * f),
        e
      );
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
    get w() {
      return this._w;
    }
    set w(e) {
      ((this._w = e), this._onChangeCallback());
    }
    set(e, t, n, r) {
      return (
        (this._x = e),
        (this._y = t),
        (this._z = n),
        (this._w = r),
        this._onChangeCallback(),
        this
      );
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(e) {
      return (
        (this._x = e.x),
        (this._y = e.y),
        (this._z = e.z),
        (this._w = e.w),
        this._onChangeCallback(),
        this
      );
    }
    setFromEuler(e, t = !0) {
      let n = e._x,
        r = e._y,
        i = e._z,
        a = e._order,
        o = Math.cos,
        s = Math.sin,
        c = o(n / 2),
        l = o(r / 2),
        u = o(i / 2),
        d = s(n / 2),
        f = s(r / 2),
        p = s(i / 2);
      switch (a) {
        case `XYZ`:
          ((this._x = d * l * u + c * f * p),
            (this._y = c * f * u - d * l * p),
            (this._z = c * l * p + d * f * u),
            (this._w = c * l * u - d * f * p));
          break;
        case `YXZ`:
          ((this._x = d * l * u + c * f * p),
            (this._y = c * f * u - d * l * p),
            (this._z = c * l * p - d * f * u),
            (this._w = c * l * u + d * f * p));
          break;
        case `ZXY`:
          ((this._x = d * l * u - c * f * p),
            (this._y = c * f * u + d * l * p),
            (this._z = c * l * p + d * f * u),
            (this._w = c * l * u - d * f * p));
          break;
        case `ZYX`:
          ((this._x = d * l * u - c * f * p),
            (this._y = c * f * u + d * l * p),
            (this._z = c * l * p - d * f * u),
            (this._w = c * l * u + d * f * p));
          break;
        case `YZX`:
          ((this._x = d * l * u + c * f * p),
            (this._y = c * f * u + d * l * p),
            (this._z = c * l * p - d * f * u),
            (this._w = c * l * u - d * f * p));
          break;
        case `XZY`:
          ((this._x = d * l * u - c * f * p),
            (this._y = c * f * u - d * l * p),
            (this._z = c * l * p + d * f * u),
            (this._w = c * l * u + d * f * p));
          break;
        default:
          y(`Quaternion: .setFromEuler() encountered an unknown order: ` + a);
      }
      return (t === !0 && this._onChangeCallback(), this);
    }
    setFromAxisAngle(e, t) {
      let n = t / 2,
        r = Math.sin(n);
      return (
        (this._x = e.x * r),
        (this._y = e.y * r),
        (this._z = e.z * r),
        (this._w = Math.cos(n)),
        this._onChangeCallback(),
        this
      );
    }
    setFromRotationMatrix(e) {
      let t = e.elements,
        n = t[0],
        r = t[4],
        i = t[8],
        a = t[1],
        o = t[5],
        s = t[9],
        c = t[2],
        l = t[6],
        u = t[10],
        d = n + o + u;
      if (d > 0) {
        let e = 0.5 / Math.sqrt(d + 1);
        ((this._w = 0.25 / e),
          (this._x = (l - s) * e),
          (this._y = (i - c) * e),
          (this._z = (a - r) * e));
      } else if (n > o && n > u) {
        let e = 2 * Math.sqrt(1 + n - o - u);
        ((this._w = (l - s) / e),
          (this._x = 0.25 * e),
          (this._y = (r + a) / e),
          (this._z = (i + c) / e));
      } else if (o > u) {
        let e = 2 * Math.sqrt(1 + o - n - u);
        ((this._w = (i - c) / e),
          (this._x = (r + a) / e),
          (this._y = 0.25 * e),
          (this._z = (s + l) / e));
      } else {
        let e = 2 * Math.sqrt(1 + u - n - o);
        ((this._w = (a - r) / e),
          (this._x = (i + c) / e),
          (this._y = (s + l) / e),
          (this._z = 0.25 * e));
      }
      return (this._onChangeCallback(), this);
    }
    setFromUnitVectors(e, t) {
      let n = e.dot(t) + 1;
      return (
        n < 1e-8
          ? ((n = 0),
            Math.abs(e.x) > Math.abs(e.z)
              ? ((this._x = -e.y),
                (this._y = e.x),
                (this._z = 0),
                (this._w = n))
              : ((this._x = 0),
                (this._y = -e.z),
                (this._z = e.y),
                (this._w = n)))
          : ((this._x = e.y * t.z - e.z * t.y),
            (this._y = e.z * t.x - e.x * t.z),
            (this._z = e.x * t.y - e.y * t.x),
            (this._w = n)),
        this.normalize()
      );
    }
    angleTo(e) {
      return 2 * Math.acos(Math.abs(T(this.dot(e), -1, 1)));
    }
    rotateTowards(e, t) {
      let n = this.angleTo(e);
      if (n === 0) return this;
      let r = Math.min(1, t / n);
      return (this.slerp(e, r), this);
    }
    identity() {
      return this.set(0, 0, 0, 1);
    }
    invert() {
      return this.conjugate();
    }
    conjugate() {
      return (
        (this._x *= -1),
        (this._y *= -1),
        (this._z *= -1),
        this._onChangeCallback(),
        this
      );
    }
    dot(e) {
      return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
    }
    lengthSq() {
      return (
        this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
      );
    }
    length() {
      return Math.sqrt(
        this._x * this._x +
          this._y * this._y +
          this._z * this._z +
          this._w * this._w,
      );
    }
    normalize() {
      let e = this.length();
      return (
        e === 0
          ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
          : ((e = 1 / e),
            (this._x *= e),
            (this._y *= e),
            (this._z *= e),
            (this._w *= e)),
        this._onChangeCallback(),
        this
      );
    }
    multiply(e) {
      return this.multiplyQuaternions(this, e);
    }
    premultiply(e) {
      return this.multiplyQuaternions(e, this);
    }
    multiplyQuaternions(e, t) {
      let n = e._x,
        r = e._y,
        i = e._z,
        a = e._w,
        o = t._x,
        s = t._y,
        c = t._z,
        l = t._w;
      return (
        (this._x = n * l + a * o + r * c - i * s),
        (this._y = r * l + a * s + i * o - n * c),
        (this._z = i * l + a * c + n * s - r * o),
        (this._w = a * l - n * o - r * s - i * c),
        this._onChangeCallback(),
        this
      );
    }
    slerp(e, t) {
      let n = e._x,
        r = e._y,
        i = e._z,
        a = e._w,
        o = this.dot(e);
      o < 0 && ((n = -n), (r = -r), (i = -i), (a = -a), (o = -o));
      let s = 1 - t;
      if (o < 0.9995) {
        let e = Math.acos(o),
          c = Math.sin(e);
        ((s = Math.sin(s * e) / c),
          (t = Math.sin(t * e) / c),
          (this._x = this._x * s + n * t),
          (this._y = this._y * s + r * t),
          (this._z = this._z * s + i * t),
          (this._w = this._w * s + a * t),
          this._onChangeCallback());
      } else
        ((this._x = this._x * s + n * t),
          (this._y = this._y * s + r * t),
          (this._z = this._z * s + i * t),
          (this._w = this._w * s + a * t),
          this.normalize());
      return this;
    }
    slerpQuaternions(e, t, n) {
      return this.copy(e).slerp(t, n);
    }
    random() {
      let e = 2 * Math.PI * Math.random(),
        t = 2 * Math.PI * Math.random(),
        n = Math.random(),
        r = Math.sqrt(1 - n),
        i = Math.sqrt(n);
      return this.set(
        r * Math.sin(e),
        r * Math.cos(e),
        i * Math.sin(t),
        i * Math.cos(t),
      );
    }
    equals(e) {
      return (
        e._x === this._x &&
        e._y === this._y &&
        e._z === this._z &&
        e._w === this._w
      );
    }
    fromArray(e, t = 0) {
      return (
        (this._x = e[t]),
        (this._y = e[t + 1]),
        (this._z = e[t + 2]),
        (this._w = e[t + 3]),
        this._onChangeCallback(),
        this
      );
    }
    toArray(e = [], t = 0) {
      return (
        (e[t] = this._x),
        (e[t + 1] = this._y),
        (e[t + 2] = this._z),
        (e[t + 3] = this._w),
        e
      );
    }
    fromBufferAttribute(e, t) {
      return (
        (this._x = e.getX(t)),
        (this._y = e.getY(t)),
        (this._z = e.getZ(t)),
        (this._w = e.getW(t)),
        this._onChangeCallback(),
        this
      );
    }
    toJSON() {
      return this.toArray();
    }
    _onChange(e) {
      return ((this._onChangeCallback = e), this);
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
      (yield this._x, yield this._y, yield this._z, yield this._w);
    }
  },
  M = class e {
    static {
      e.prototype.isVector3 = !0;
    }
    constructor(e = 0, t = 0, n = 0) {
      ((this.x = e), (this.y = t), (this.z = n));
    }
    set(e, t, n) {
      return (
        n === void 0 && (n = this.z),
        (this.x = e),
        (this.y = t),
        (this.z = n),
        this
      );
    }
    setScalar(e) {
      return ((this.x = e), (this.y = e), (this.z = e), this);
    }
    setX(e) {
      return ((this.x = e), this);
    }
    setY(e) {
      return ((this.y = e), this);
    }
    setZ(e) {
      return ((this.z = e), this);
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        case 2:
          this.z = t;
          break;
        default:
          throw Error(`THREE.Vector3: index is out of range: ` + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw Error(`THREE.Vector3: index is out of range: ` + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    copy(e) {
      return ((this.x = e.x), (this.y = e.y), (this.z = e.z), this);
    }
    add(e) {
      return ((this.x += e.x), (this.y += e.y), (this.z += e.z), this);
    }
    addScalar(e) {
      return ((this.x += e), (this.y += e), (this.z += e), this);
    }
    addVectors(e, t) {
      return (
        (this.x = e.x + t.x),
        (this.y = e.y + t.y),
        (this.z = e.z + t.z),
        this
      );
    }
    addScaledVector(e, t) {
      return (
        (this.x += e.x * t),
        (this.y += e.y * t),
        (this.z += e.z * t),
        this
      );
    }
    sub(e) {
      return ((this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this);
    }
    subScalar(e) {
      return ((this.x -= e), (this.y -= e), (this.z -= e), this);
    }
    subVectors(e, t) {
      return (
        (this.x = e.x - t.x),
        (this.y = e.y - t.y),
        (this.z = e.z - t.z),
        this
      );
    }
    multiply(e) {
      return ((this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this);
    }
    multiplyScalar(e) {
      return ((this.x *= e), (this.y *= e), (this.z *= e), this);
    }
    multiplyVectors(e, t) {
      return (
        (this.x = e.x * t.x),
        (this.y = e.y * t.y),
        (this.z = e.z * t.z),
        this
      );
    }
    applyEuler(e) {
      return this.applyQuaternion(te.setFromEuler(e));
    }
    applyAxisAngle(e, t) {
      return this.applyQuaternion(te.setFromAxisAngle(e, t));
    }
    applyMatrix3(e) {
      let t = this.x,
        n = this.y,
        r = this.z,
        i = e.elements;
      return (
        (this.x = i[0] * t + i[3] * n + i[6] * r),
        (this.y = i[1] * t + i[4] * n + i[7] * r),
        (this.z = i[2] * t + i[5] * n + i[8] * r),
        this
      );
    }
    applyNormalMatrix(e) {
      return this.applyMatrix3(e).normalize();
    }
    applyMatrix4(e) {
      let t = this.x,
        n = this.y,
        r = this.z,
        i = e.elements,
        a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]);
      return (
        (this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a),
        (this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a),
        (this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a),
        this
      );
    }
    applyQuaternion(e) {
      let t = this.x,
        n = this.y,
        r = this.z,
        i = e.x,
        a = e.y,
        o = e.z,
        s = e.w,
        c = 2 * (a * r - o * n),
        l = 2 * (o * t - i * r),
        u = 2 * (i * n - a * t);
      return (
        (this.x = t + s * c + a * u - o * l),
        (this.y = n + s * l + o * c - i * u),
        (this.z = r + s * u + i * l - a * c),
        this
      );
    }
    project(e) {
      return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
        e.projectionMatrix,
      );
    }
    unproject(e) {
      return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
        e.matrixWorld,
      );
    }
    transformDirection(e) {
      let t = this.x,
        n = this.y,
        r = this.z,
        i = e.elements;
      return (
        (this.x = i[0] * t + i[4] * n + i[8] * r),
        (this.y = i[1] * t + i[5] * n + i[9] * r),
        (this.z = i[2] * t + i[6] * n + i[10] * r),
        this.normalize()
      );
    }
    divide(e) {
      return ((this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this);
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    min(e) {
      return (
        (this.x = Math.min(this.x, e.x)),
        (this.y = Math.min(this.y, e.y)),
        (this.z = Math.min(this.z, e.z)),
        this
      );
    }
    max(e) {
      return (
        (this.x = Math.max(this.x, e.x)),
        (this.y = Math.max(this.y, e.y)),
        (this.z = Math.max(this.z, e.z)),
        this
      );
    }
    clamp(e, t) {
      return (
        (this.x = T(this.x, e.x, t.x)),
        (this.y = T(this.y, e.y, t.y)),
        (this.z = T(this.z, e.z, t.z)),
        this
      );
    }
    clampScalar(e, t) {
      return (
        (this.x = T(this.x, e, t)),
        (this.y = T(this.y, e, t)),
        (this.z = T(this.z, e, t)),
        this
      );
    }
    clampLength(e, t) {
      let n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(T(n, e, t));
    }
    floor() {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        (this.z = Math.floor(this.z)),
        this
      );
    }
    ceil() {
      return (
        (this.x = Math.ceil(this.x)),
        (this.y = Math.ceil(this.y)),
        (this.z = Math.ceil(this.z)),
        this
      );
    }
    round() {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        (this.z = Math.round(this.z)),
        this
      );
    }
    roundToZero() {
      return (
        (this.x = Math.trunc(this.x)),
        (this.y = Math.trunc(this.y)),
        (this.z = Math.trunc(this.z)),
        this
      );
    }
    negate() {
      return ((this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this);
    }
    dot(e) {
      return this.x * e.x + this.y * e.y + this.z * e.z;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return (
        (this.x += (e.x - this.x) * t),
        (this.y += (e.y - this.y) * t),
        (this.z += (e.z - this.z) * t),
        this
      );
    }
    lerpVectors(e, t, n) {
      return (
        (this.x = e.x + (t.x - e.x) * n),
        (this.y = e.y + (t.y - e.y) * n),
        (this.z = e.z + (t.z - e.z) * n),
        this
      );
    }
    cross(e) {
      return this.crossVectors(this, e);
    }
    crossVectors(e, t) {
      let n = e.x,
        r = e.y,
        i = e.z,
        a = t.x,
        o = t.y,
        s = t.z;
      return (
        (this.x = r * s - i * o),
        (this.y = i * a - n * s),
        (this.z = n * o - r * a),
        this
      );
    }
    projectOnVector(e) {
      let t = e.lengthSq();
      if (t === 0) return this.set(0, 0, 0);
      let n = e.dot(this) / t;
      return this.copy(e).multiplyScalar(n);
    }
    projectOnPlane(e) {
      return (ee.copy(this).projectOnVector(e), this.sub(ee));
    }
    reflect(e) {
      return this.sub(ee.copy(e).multiplyScalar(2 * this.dot(e)));
    }
    angleTo(e) {
      let t = Math.sqrt(this.lengthSq() * e.lengthSq());
      if (t === 0) return Math.PI / 2;
      let n = this.dot(e) / t;
      return Math.acos(T(n, -1, 1));
    }
    distanceTo(e) {
      return Math.sqrt(this.distanceToSquared(e));
    }
    distanceToSquared(e) {
      let t = this.x - e.x,
        n = this.y - e.y,
        r = this.z - e.z;
      return t * t + n * n + r * r;
    }
    manhattanDistanceTo(e) {
      return (
        Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
      );
    }
    setFromSpherical(e) {
      return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
    }
    setFromSphericalCoords(e, t, n) {
      let r = Math.sin(t) * e;
      return (
        (this.x = r * Math.sin(n)),
        (this.y = Math.cos(t) * e),
        (this.z = r * Math.cos(n)),
        this
      );
    }
    setFromCylindrical(e) {
      return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
    }
    setFromCylindricalCoords(e, t, n) {
      return (
        (this.x = e * Math.sin(t)),
        (this.y = n),
        (this.z = e * Math.cos(t)),
        this
      );
    }
    setFromMatrixPosition(e) {
      let t = e.elements;
      return ((this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this);
    }
    setFromMatrixScale(e) {
      let t = this.setFromMatrixColumn(e, 0).length(),
        n = this.setFromMatrixColumn(e, 1).length(),
        r = this.setFromMatrixColumn(e, 2).length();
      return ((this.x = t), (this.y = n), (this.z = r), this);
    }
    setFromMatrixColumn(e, t) {
      return this.fromArray(e.elements, t * 4);
    }
    setFromMatrix3Column(e, t) {
      return this.fromArray(e.elements, t * 3);
    }
    setFromEuler(e) {
      return ((this.x = e._x), (this.y = e._y), (this.z = e._z), this);
    }
    setFromColor(e) {
      return ((this.x = e.r), (this.y = e.g), (this.z = e.b), this);
    }
    equals(e) {
      return e.x === this.x && e.y === this.y && e.z === this.z;
    }
    fromArray(e, t = 0) {
      return ((this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this);
    }
    toArray(e = [], t = 0) {
      return ((e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e);
    }
    fromBufferAttribute(e, t) {
      return (
        (this.x = e.getX(t)),
        (this.y = e.getY(t)),
        (this.z = e.getZ(t)),
        this
      );
    }
    random() {
      return (
        (this.x = Math.random()),
        (this.y = Math.random()),
        (this.z = Math.random()),
        this
      );
    }
    randomDirection() {
      let e = Math.random() * Math.PI * 2,
        t = Math.random() * 2 - 1,
        n = Math.sqrt(1 - t * t);
      return (
        (this.x = n * Math.cos(e)),
        (this.y = t),
        (this.z = n * Math.sin(e)),
        this
      );
    }
    *[Symbol.iterator]() {
      (yield this.x, yield this.y, yield this.z);
    }
  };
const ee = /*@__PURE__*/ new M(),
  te = /*@__PURE__*/ new j();
var ne = class e {
  static {
    e.prototype.isMatrix3 = !0;
  }
  constructor(e, t, n, r, i, a, o, s, c) {
    ((this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, r, i, a, o, s, c));
  }
  set(e, t, n, r, i, a, o, s, c) {
    let l = this.elements;
    return (
      (l[0] = e),
      (l[1] = r),
      (l[2] = o),
      (l[3] = t),
      (l[4] = i),
      (l[5] = s),
      (l[6] = n),
      (l[7] = a),
      (l[8] = c),
      this
    );
  }
  identity() {
    return (this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this);
  }
  copy(e) {
    let t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    let t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    let n = e.elements,
      r = t.elements,
      i = this.elements,
      a = n[0],
      o = n[3],
      s = n[6],
      c = n[1],
      l = n[4],
      u = n[7],
      d = n[2],
      f = n[5],
      p = n[8],
      m = r[0],
      h = r[3],
      g = r[6],
      _ = r[1],
      v = r[4],
      y = r[7],
      b = r[2],
      x = r[5],
      S = r[8];
    return (
      (i[0] = a * m + o * _ + s * b),
      (i[3] = a * h + o * v + s * x),
      (i[6] = a * g + o * y + s * S),
      (i[1] = c * m + l * _ + u * b),
      (i[4] = c * h + l * v + u * x),
      (i[7] = c * g + l * y + u * S),
      (i[2] = d * m + f * _ + p * b),
      (i[5] = d * h + f * v + p * x),
      (i[8] = d * g + f * y + p * S),
      this
    );
  }
  multiplyScalar(e) {
    let t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    let e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      i = e[3],
      a = e[4],
      o = e[5],
      s = e[6],
      c = e[7],
      l = e[8];
    return (
      t * a * l - t * o * c - n * i * l + n * o * s + r * i * c - r * a * s
    );
  }
  invert() {
    let e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      i = e[3],
      a = e[4],
      o = e[5],
      s = e[6],
      c = e[7],
      l = e[8],
      u = l * a - o * c,
      d = o * s - l * i,
      f = c * i - a * s,
      p = t * u + n * d + r * f;
    if (p === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    let m = 1 / p;
    return (
      (e[0] = u * m),
      (e[1] = (r * c - l * n) * m),
      (e[2] = (o * n - r * a) * m),
      (e[3] = d * m),
      (e[4] = (l * t - r * s) * m),
      (e[5] = (r * i - o * t) * m),
      (e[6] = f * m),
      (e[7] = (n * s - c * t) * m),
      (e[8] = (a * t - n * i) * m),
      this
    );
  }
  transpose() {
    let e,
      t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    let t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, r, i, a, o) {
    let s = Math.cos(i),
      c = Math.sin(i);
    return (
      this.set(
        n * s,
        n * c,
        -n * (s * a + c * o) + a + e,
        -r * c,
        r * s,
        -r * (-c * a + s * o) + o + t,
        0,
        0,
        1,
      ),
      this
    );
  }
  scale(e, t) {
    return (
      x(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),
      this.premultiply(re.makeScale(e, t)),
      this
    );
  }
  rotate(e) {
    return (
      x(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),
      this.premultiply(re.makeRotation(-e)),
      this
    );
  }
  translate(e, t) {
    return (
      x(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),
      this.premultiply(re.makeTranslation(e, t)),
      this
    );
  }
  makeTranslation(e, t) {
    return (
      e.isVector2
        ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1)
        : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
      this
    );
  }
  makeRotation(e) {
    let t = Math.cos(e),
      n = Math.sin(e);
    return (this.set(t, -n, 0, n, t, 0, 0, 0, 1), this);
  }
  makeScale(e, t) {
    return (this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this);
  }
  equals(e) {
    let t = this.elements,
      n = e.elements;
    for (let e = 0; e < 9; e++) if (t[e] !== n[e]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    let n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
};
const re = /*@__PURE__*/ new ne(),
  ie = /*@__PURE__*/ new ne().set(
    0.4123908,
    0.3575843,
    0.1804808,
    0.212639,
    0.7151687,
    0.0721923,
    0.0193308,
    0.1191948,
    0.9505322,
  ),
  ae = /*@__PURE__*/ new ne().set(
    3.2409699,
    -1.5373832,
    -0.4986108,
    -0.9692436,
    1.8759675,
    0.0415551,
    0.0556301,
    -0.203977,
    1.0569715,
  );
function oe() {
  let e = {
      enabled: !0,
      workingColorSpace: d,
      spaces: {},
      convert: function (e, t, n) {
        return this.enabled === !1 || t === n || !t || !n
          ? e
          : (this.spaces[t].transfer === `srgb` &&
              ((e.r = ce(e.r)), (e.g = ce(e.g)), (e.b = ce(e.b))),
            this.spaces[t].primaries !== this.spaces[n].primaries &&
              (e.applyMatrix3(this.spaces[t].toXYZ),
              e.applyMatrix3(this.spaces[n].fromXYZ)),
            this.spaces[n].transfer === `srgb` &&
              ((e.r = le(e.r)), (e.g = le(e.g)), (e.b = le(e.b))),
            e);
      },
      workingToColorSpace: function (e, t) {
        return this.convert(e, this.workingColorSpace, t);
      },
      colorSpaceToWorking: function (e, t) {
        return this.convert(e, t, this.workingColorSpace);
      },
      getPrimaries: function (e) {
        return this.spaces[e].primaries;
      },
      getTransfer: function (e) {
        return e === `` ? f : this.spaces[e].transfer;
      },
      getToneMappingMode: function (e) {
        return (
          this.spaces[e].outputColorSpaceConfig.toneMappingMode || `standard`
        );
      },
      getLuminanceCoefficients: function (e, t = this.workingColorSpace) {
        return e.fromArray(this.spaces[t].luminanceCoefficients);
      },
      define: function (e) {
        Object.assign(this.spaces, e);
      },
      _getMatrix: function (e, t, n) {
        return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ);
      },
      _getDrawingBufferColorSpace: function (e) {
        return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace;
      },
      _getUnpackColorSpace: function (e = this.workingColorSpace) {
        return this.spaces[e].workingColorSpaceConfig.unpackColorSpace;
      },
      fromWorkingColorSpace: function (t, n) {
        return (
          x(
            `ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`,
          ),
          e.workingToColorSpace(t, n)
        );
      },
      toWorkingColorSpace: function (t, n) {
        return (
          x(
            `ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`,
          ),
          e.colorSpaceToWorking(t, n)
        );
      },
    },
    t = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06],
    n = [0.2126, 0.7152, 0.0722],
    r = [0.3127, 0.329];
  return (
    e.define({
      [d]: {
        primaries: t,
        whitePoint: r,
        transfer: f,
        toXYZ: ie,
        fromXYZ: ae,
        luminanceCoefficients: n,
        workingColorSpaceConfig: { unpackColorSpace: u },
        outputColorSpaceConfig: { drawingBufferColorSpace: u },
      },
      [u]: {
        primaries: t,
        whitePoint: r,
        transfer: `srgb`,
        toXYZ: ie,
        fromXYZ: ae,
        luminanceCoefficients: n,
        outputColorSpaceConfig: { drawingBufferColorSpace: u },
      },
    }),
    e
  );
}
const se = /*@__PURE__*/ oe();
function ce(e) {
  return e < 0.04045
    ? e * 0.0773993808
    : (e * 0.9478672986 + 0.0521327014) ** 2.4;
}
function le(e) {
  return e < 0.0031308 ? e * 12.92 : 1.055 * e ** 0.41666 - 0.055;
}
let ue;
var de = class {
  static getDataURL(e, t = `image/png`) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > `u`) return e.src;
    let n;
    if (e instanceof HTMLCanvasElement) n = e;
    else {
      (ue === void 0 && (ue = g(`canvas`)),
        (ue.width = e.width),
        (ue.height = e.height));
      let t = ue.getContext(`2d`);
      (e instanceof ImageData
        ? t.putImageData(e, 0, 0)
        : t.drawImage(e, 0, 0, e.width, e.height),
        (n = ue));
    }
    return n.toDataURL(t);
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < `u` && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < `u` && e instanceof ImageBitmap)
    ) {
      let t = g(`canvas`);
      ((t.width = e.width), (t.height = e.height));
      let n = t.getContext(`2d`);
      n.drawImage(e, 0, 0, e.width, e.height);
      let r = n.getImageData(0, 0, e.width, e.height),
        i = r.data;
      for (let e = 0; e < i.length; e++) i[e] = ce(i[e] / 255) * 255;
      return (n.putImageData(r, 0, 0), t);
    }
    if (e.data) {
      let t = e.data.slice(0);
      for (let e = 0; e < t.length; e++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[e] = Math.floor(ce(t[e] / 255) * 255))
          : (t[e] = ce(t[e]));
      return { data: t, width: e.width, height: e.height };
    }
    return (
      y(
        `ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`,
      ),
      e
    );
  }
};
let fe = 0;
var pe = class {
  constructor(e = null) {
    ((this.isTextureSource = !0),
      Object.defineProperty(this, "id", { value: fe++ }),
      (this.uuid = w()),
      (this.data = e),
      (this.dataReady = !0),
      (this.version = 0));
  }
  getSize(e) {
    let t = this.data;
    return (
      typeof HTMLVideoElement < `u` && t instanceof HTMLVideoElement
        ? e.set(t.videoWidth, t.videoHeight, 0)
        : typeof VideoFrame < `u` && t instanceof VideoFrame
          ? e.set(t.displayWidth, t.displayHeight, 0)
          : t === null
            ? e.set(0, 0, 0)
            : e.set(t.width, t.height, t.depth || 0),
      e
    );
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    let t = e === void 0 || typeof e == `string`;
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    let n = { uuid: this.uuid, url: `` },
      r = this.data;
    if (r !== null) {
      let e;
      if (Array.isArray(r)) {
        e = [];
        for (let t = 0, n = r.length; t < n; t++)
          r[t].isDataTexture ? e.push(me(r[t].image)) : e.push(me(r[t]));
      } else e = me(r);
      n.url = e;
    }
    return (t || (e.images[this.uuid] = n), n);
  }
};
function me(e) {
  return (typeof HTMLImageElement < `u` && e instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < `u` && e instanceof ImageBitmap)
    ? de.getDataURL(e)
    : e.data
      ? {
          data: Array.from(e.data),
          width: e.width,
          height: e.height,
          type: e.data.constructor.name,
        }
      : (y(`Texture: Unable to serialize Texture.`), {});
}
let he = 0;
const ge = /*@__PURE__*/ new M();
var _e = class r extends S {
  constructor(
    e = r.DEFAULT_IMAGE,
    n = r.DEFAULT_MAPPING,
    i = t,
    a = t,
    o = 1006,
    s = 1008,
    c = 1023,
    l = 1009,
    u = r.DEFAULT_ANISOTROPY,
    d = ``,
  ) {
    (super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: he++ }),
      (this.uuid = w()),
      (this.name = ``),
      (this.source = new pe(e)),
      (this.mipmaps = []),
      (this.mapping = n),
      (this.channel = 0),
      (this.wrapS = i),
      (this.wrapT = a),
      (this.magFilter = o),
      (this.minFilter = s),
      (this.anisotropy = u),
      (this.format = c),
      (this.internalFormat = null),
      (this.type = l),
      (this.offset = new A(0, 0)),
      (this.repeat = new A(1, 1)),
      (this.center = new A(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new ne()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.colorSpace = d),
      (this.userData = {}),
      (this.updateRanges = []),
      (this.version = 0),
      (this.onUpdate = null),
      (this.renderTarget = null),
      (this.isRenderTargetTexture = !1),
      (this.isArrayTexture = !!(e && e.depth && e.depth > 1)),
      (this.pmremVersion = 0),
      (this.normalized = !1));
  }
  get width() {
    return this.source.getSize(ge).x;
  }
  get height() {
    return this.source.getSize(ge).y;
  }
  get depth() {
    return this.source.getSize(ge).z;
  }
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y,
    );
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      (this.normalized = e.normalized),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.colorSpace = e.colorSpace),
      (this.renderTarget = e.renderTarget),
      (this.isRenderTargetTexture = e.isRenderTargetTexture),
      (this.isArrayTexture = e.isArrayTexture),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  setValues(e) {
    for (let t in e) {
      let n = e[t];
      if (n === void 0) {
        y(`Texture.setValues(): parameter '${t}' has value of undefined.`);
        continue;
      }
      let r = this[t];
      if (r === void 0) {
        y(`Texture.setValues(): property '${t}' does not exist.`);
        continue;
      }
      (r && n && r.isVector2 && n.isVector2) ||
      (r && n && r.isVector3 && n.isVector3) ||
      (r && n && r.isMatrix3 && n.isMatrix3)
        ? r.copy(n)
        : (this[t] = n);
    }
  }
  toJSON(e) {
    let t = e === void 0 || typeof e == `string`;
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    let n = {
      metadata: { version: 4.7, type: `Texture`, generator: `Texture.toJSON` },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      normalized: this.normalized,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: `dispose` });
  }
  transformUv(r) {
    if (this.mapping !== 300) return r;
    if ((r.applyMatrix3(this.matrix), r.x < 0 || r.x > 1))
      switch (this.wrapS) {
        case e:
          r.x -= Math.floor(r.x);
          break;
        case t:
          r.x = r.x < 0 ? 0 : 1;
          break;
        case n:
          Math.abs(Math.floor(r.x) % 2) === 1
            ? (r.x = Math.ceil(r.x) - r.x)
            : (r.x -= Math.floor(r.x));
      }
    if (r.y < 0 || r.y > 1)
      switch (this.wrapT) {
        case e:
          r.y -= Math.floor(r.y);
          break;
        case t:
          r.y = r.y < 0 ? 0 : 1;
          break;
        case n:
          Math.abs(Math.floor(r.y) % 2) === 1
            ? (r.y = Math.ceil(r.y) - r.y)
            : (r.y -= Math.floor(r.y));
      }
    return (this.flipY && (r.y = 1 - r.y), r);
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
};
((_e.DEFAULT_IMAGE = null),
  (_e.DEFAULT_MAPPING = 300),
  (_e.DEFAULT_ANISOTROPY = 1));
var ve = class e {
    static {
      e.prototype.isVector4 = !0;
    }
    constructor(e = 0, t = 0, n = 0, r = 1) {
      ((this.x = e), (this.y = t), (this.z = n), (this.w = r));
    }
    get width() {
      return this.z;
    }
    set width(e) {
      this.z = e;
    }
    get height() {
      return this.w;
    }
    set height(e) {
      this.w = e;
    }
    set(e, t, n, r) {
      return ((this.x = e), (this.y = t), (this.z = n), (this.w = r), this);
    }
    setScalar(e) {
      return ((this.x = e), (this.y = e), (this.z = e), (this.w = e), this);
    }
    setX(e) {
      return ((this.x = e), this);
    }
    setY(e) {
      return ((this.y = e), this);
    }
    setZ(e) {
      return ((this.z = e), this);
    }
    setW(e) {
      return ((this.w = e), this);
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        case 2:
          this.z = t;
          break;
        case 3:
          this.w = t;
          break;
        default:
          throw Error(`THREE.Vector4: index is out of range: ` + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw Error(`THREE.Vector4: index is out of range: ` + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(e) {
      return (
        (this.x = e.x),
        (this.y = e.y),
        (this.z = e.z),
        (this.w = e.w === void 0 ? 1 : e.w),
        this
      );
    }
    add(e) {
      return (
        (this.x += e.x),
        (this.y += e.y),
        (this.z += e.z),
        (this.w += e.w),
        this
      );
    }
    addScalar(e) {
      return ((this.x += e), (this.y += e), (this.z += e), (this.w += e), this);
    }
    addVectors(e, t) {
      return (
        (this.x = e.x + t.x),
        (this.y = e.y + t.y),
        (this.z = e.z + t.z),
        (this.w = e.w + t.w),
        this
      );
    }
    addScaledVector(e, t) {
      return (
        (this.x += e.x * t),
        (this.y += e.y * t),
        (this.z += e.z * t),
        (this.w += e.w * t),
        this
      );
    }
    sub(e) {
      return (
        (this.x -= e.x),
        (this.y -= e.y),
        (this.z -= e.z),
        (this.w -= e.w),
        this
      );
    }
    subScalar(e) {
      return ((this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this);
    }
    subVectors(e, t) {
      return (
        (this.x = e.x - t.x),
        (this.y = e.y - t.y),
        (this.z = e.z - t.z),
        (this.w = e.w - t.w),
        this
      );
    }
    multiply(e) {
      return (
        (this.x *= e.x),
        (this.y *= e.y),
        (this.z *= e.z),
        (this.w *= e.w),
        this
      );
    }
    multiplyScalar(e) {
      return ((this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this);
    }
    applyMatrix4(e) {
      let t = this.x,
        n = this.y,
        r = this.z,
        i = this.w,
        a = e.elements;
      return (
        (this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i),
        (this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i),
        (this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i),
        (this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i),
        this
      );
    }
    divide(e) {
      return (
        (this.x /= e.x),
        (this.y /= e.y),
        (this.z /= e.z),
        (this.w /= e.w),
        this
      );
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    setAxisAngleFromQuaternion(e) {
      this.w = 2 * Math.acos(e.w);
      let t = Math.sqrt(1 - e.w * e.w);
      return (
        t < 1e-4
          ? ((this.x = 1), (this.y = 0), (this.z = 0))
          : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
        this
      );
    }
    setAxisAngleFromRotationMatrix(e) {
      let t,
        n,
        r,
        i,
        a = 0.01,
        o = 0.1,
        s = e.elements,
        c = s[0],
        l = s[4],
        u = s[8],
        d = s[1],
        f = s[5],
        p = s[9],
        m = s[2],
        h = s[6],
        g = s[10];
      if (Math.abs(l - d) < a && Math.abs(u - m) < a && Math.abs(p - h) < a) {
        if (
          Math.abs(l + d) < o &&
          Math.abs(u + m) < o &&
          Math.abs(p + h) < o &&
          Math.abs(c + f + g - 3) < o
        )
          return (this.set(1, 0, 0, 0), this);
        t = Math.PI;
        let e = (c + 1) / 2,
          s = (f + 1) / 2,
          _ = (g + 1) / 2,
          v = (l + d) / 4,
          y = (u + m) / 4,
          b = (p + h) / 4;
        return (
          e > s && e > _
            ? e < a
              ? ((n = 0), (r = 0.707106781), (i = 0.707106781))
              : ((n = Math.sqrt(e)), (r = v / n), (i = y / n))
            : s > _
              ? s < a
                ? ((n = 0.707106781), (r = 0), (i = 0.707106781))
                : ((r = Math.sqrt(s)), (n = v / r), (i = b / r))
              : _ < a
                ? ((n = 0.707106781), (r = 0.707106781), (i = 0))
                : ((i = Math.sqrt(_)), (n = y / i), (r = b / i)),
          this.set(n, r, i, t),
          this
        );
      }
      let _ = Math.sqrt(
        (h - p) * (h - p) + (u - m) * (u - m) + (d - l) * (d - l),
      );
      return (
        Math.abs(_) < 0.001 && (_ = 1),
        (this.x = (h - p) / _),
        (this.y = (u - m) / _),
        (this.z = (d - l) / _),
        (this.w = Math.acos((c + f + g - 1) / 2)),
        this
      );
    }
    setFromMatrixPosition(e) {
      let t = e.elements;
      return (
        (this.x = t[12]),
        (this.y = t[13]),
        (this.z = t[14]),
        (this.w = t[15]),
        this
      );
    }
    min(e) {
      return (
        (this.x = Math.min(this.x, e.x)),
        (this.y = Math.min(this.y, e.y)),
        (this.z = Math.min(this.z, e.z)),
        (this.w = Math.min(this.w, e.w)),
        this
      );
    }
    max(e) {
      return (
        (this.x = Math.max(this.x, e.x)),
        (this.y = Math.max(this.y, e.y)),
        (this.z = Math.max(this.z, e.z)),
        (this.w = Math.max(this.w, e.w)),
        this
      );
    }
    clamp(e, t) {
      return (
        (this.x = T(this.x, e.x, t.x)),
        (this.y = T(this.y, e.y, t.y)),
        (this.z = T(this.z, e.z, t.z)),
        (this.w = T(this.w, e.w, t.w)),
        this
      );
    }
    clampScalar(e, t) {
      return (
        (this.x = T(this.x, e, t)),
        (this.y = T(this.y, e, t)),
        (this.z = T(this.z, e, t)),
        (this.w = T(this.w, e, t)),
        this
      );
    }
    clampLength(e, t) {
      let n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(T(n, e, t));
    }
    floor() {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        (this.z = Math.floor(this.z)),
        (this.w = Math.floor(this.w)),
        this
      );
    }
    ceil() {
      return (
        (this.x = Math.ceil(this.x)),
        (this.y = Math.ceil(this.y)),
        (this.z = Math.ceil(this.z)),
        (this.w = Math.ceil(this.w)),
        this
      );
    }
    round() {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        (this.z = Math.round(this.z)),
        (this.w = Math.round(this.w)),
        this
      );
    }
    roundToZero() {
      return (
        (this.x = Math.trunc(this.x)),
        (this.y = Math.trunc(this.y)),
        (this.z = Math.trunc(this.z)),
        (this.w = Math.trunc(this.w)),
        this
      );
    }
    negate() {
      return (
        (this.x = -this.x),
        (this.y = -this.y),
        (this.z = -this.z),
        (this.w = -this.w),
        this
      );
    }
    dot(e) {
      return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
    }
    lengthSq() {
      return (
        this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
      );
    }
    length() {
      return Math.sqrt(
        this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w,
      );
    }
    manhattanLength() {
      return (
        Math.abs(this.x) +
        Math.abs(this.y) +
        Math.abs(this.z) +
        Math.abs(this.w)
      );
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return (
        (this.x += (e.x - this.x) * t),
        (this.y += (e.y - this.y) * t),
        (this.z += (e.z - this.z) * t),
        (this.w += (e.w - this.w) * t),
        this
      );
    }
    lerpVectors(e, t, n) {
      return (
        (this.x = e.x + (t.x - e.x) * n),
        (this.y = e.y + (t.y - e.y) * n),
        (this.z = e.z + (t.z - e.z) * n),
        (this.w = e.w + (t.w - e.w) * n),
        this
      );
    }
    equals(e) {
      return (
        e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
      );
    }
    fromArray(e, t = 0) {
      return (
        (this.x = e[t]),
        (this.y = e[t + 1]),
        (this.z = e[t + 2]),
        (this.w = e[t + 3]),
        this
      );
    }
    toArray(e = [], t = 0) {
      return (
        (e[t] = this.x),
        (e[t + 1] = this.y),
        (e[t + 2] = this.z),
        (e[t + 3] = this.w),
        e
      );
    }
    fromBufferAttribute(e, t) {
      return (
        (this.x = e.getX(t)),
        (this.y = e.getY(t)),
        (this.z = e.getZ(t)),
        (this.w = e.getW(t)),
        this
      );
    }
    random() {
      return (
        (this.x = Math.random()),
        (this.y = Math.random()),
        (this.z = Math.random()),
        (this.w = Math.random()),
        this
      );
    }
    *[Symbol.iterator]() {
      (yield this.x, yield this.y, yield this.z, yield this.w);
    }
  },
  ye = class e {
    static {
      e.prototype.isMatrix4 = !0;
    }
    constructor(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
      ((this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
        e !== void 0 &&
          this.set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h));
    }
    set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
      let g = this.elements;
      return (
        (g[0] = e),
        (g[4] = t),
        (g[8] = n),
        (g[12] = r),
        (g[1] = i),
        (g[5] = a),
        (g[9] = o),
        (g[13] = s),
        (g[2] = c),
        (g[6] = l),
        (g[10] = u),
        (g[14] = d),
        (g[3] = f),
        (g[7] = p),
        (g[11] = m),
        (g[15] = h),
        this
      );
    }
    identity() {
      return (this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
    }
    clone() {
      return new e().fromArray(this.elements);
    }
    copy(e) {
      let t = this.elements,
        n = e.elements;
      return (
        (t[0] = n[0]),
        (t[1] = n[1]),
        (t[2] = n[2]),
        (t[3] = n[3]),
        (t[4] = n[4]),
        (t[5] = n[5]),
        (t[6] = n[6]),
        (t[7] = n[7]),
        (t[8] = n[8]),
        (t[9] = n[9]),
        (t[10] = n[10]),
        (t[11] = n[11]),
        (t[12] = n[12]),
        (t[13] = n[13]),
        (t[14] = n[14]),
        (t[15] = n[15]),
        this
      );
    }
    copyPosition(e) {
      let t = this.elements,
        n = e.elements;
      return ((t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this);
    }
    setFromMatrix3(e) {
      let t = e.elements;
      return (
        this.set(
          t[0],
          t[3],
          t[6],
          0,
          t[1],
          t[4],
          t[7],
          0,
          t[2],
          t[5],
          t[8],
          0,
          0,
          0,
          0,
          1,
        ),
        this
      );
    }
    extractBasis(e, t, n) {
      return this.determinantAffine() === 0
        ? (e.set(1, 0, 0), t.set(0, 1, 0), n.set(0, 0, 1), this)
        : (e.setFromMatrixColumn(this, 0),
          t.setFromMatrixColumn(this, 1),
          n.setFromMatrixColumn(this, 2),
          this);
    }
    makeBasis(e, t, n) {
      return (
        this.set(
          e.x,
          t.x,
          n.x,
          0,
          e.y,
          t.y,
          n.y,
          0,
          e.z,
          t.z,
          n.z,
          0,
          0,
          0,
          0,
          1,
        ),
        this
      );
    }
    extractRotation(e) {
      if (e.determinantAffine() === 0) return this.identity();
      let t = this.elements,
        n = e.elements,
        r = 1 / be.setFromMatrixColumn(e, 0).length(),
        i = 1 / be.setFromMatrixColumn(e, 1).length(),
        a = 1 / be.setFromMatrixColumn(e, 2).length();
      return (
        (t[0] = n[0] * r),
        (t[1] = n[1] * r),
        (t[2] = n[2] * r),
        (t[3] = 0),
        (t[4] = n[4] * i),
        (t[5] = n[5] * i),
        (t[6] = n[6] * i),
        (t[7] = 0),
        (t[8] = n[8] * a),
        (t[9] = n[9] * a),
        (t[10] = n[10] * a),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        this
      );
    }
    makeRotationFromEuler(e) {
      let t = this.elements,
        n = e.x,
        r = e.y,
        i = e.z,
        a = Math.cos(n),
        o = Math.sin(n),
        s = Math.cos(r),
        c = Math.sin(r),
        l = Math.cos(i),
        u = Math.sin(i);
      if (e.order === `XYZ`) {
        let e = a * l,
          n = a * u,
          r = o * l,
          i = o * u;
        ((t[0] = s * l),
          (t[4] = -s * u),
          (t[8] = c),
          (t[1] = n + r * c),
          (t[5] = e - i * c),
          (t[9] = -o * s),
          (t[2] = i - e * c),
          (t[6] = r + n * c),
          (t[10] = a * s));
      } else if (e.order === `YXZ`) {
        let e = s * l,
          n = s * u,
          r = c * l,
          i = c * u;
        ((t[0] = e + i * o),
          (t[4] = r * o - n),
          (t[8] = a * c),
          (t[1] = a * u),
          (t[5] = a * l),
          (t[9] = -o),
          (t[2] = n * o - r),
          (t[6] = i + e * o),
          (t[10] = a * s));
      } else if (e.order === `ZXY`) {
        let e = s * l,
          n = s * u,
          r = c * l,
          i = c * u;
        ((t[0] = e - i * o),
          (t[4] = -a * u),
          (t[8] = r + n * o),
          (t[1] = n + r * o),
          (t[5] = a * l),
          (t[9] = i - e * o),
          (t[2] = -a * c),
          (t[6] = o),
          (t[10] = a * s));
      } else if (e.order === `ZYX`) {
        let e = a * l,
          n = a * u,
          r = o * l,
          i = o * u;
        ((t[0] = s * l),
          (t[4] = r * c - n),
          (t[8] = e * c + i),
          (t[1] = s * u),
          (t[5] = i * c + e),
          (t[9] = n * c - r),
          (t[2] = -c),
          (t[6] = o * s),
          (t[10] = a * s));
      } else if (e.order === `YZX`) {
        let e = a * s,
          n = a * c,
          r = o * s,
          i = o * c;
        ((t[0] = s * l),
          (t[4] = i - e * u),
          (t[8] = r * u + n),
          (t[1] = u),
          (t[5] = a * l),
          (t[9] = -o * l),
          (t[2] = -c * l),
          (t[6] = n * u + r),
          (t[10] = e - i * u));
      } else if (e.order === `XZY`) {
        let e = a * s,
          n = a * c,
          r = o * s,
          i = o * c;
        ((t[0] = s * l),
          (t[4] = -u),
          (t[8] = c * l),
          (t[1] = e * u + i),
          (t[5] = a * l),
          (t[9] = n * u - r),
          (t[2] = r * u - n),
          (t[6] = o * l),
          (t[10] = i * u + e));
      }
      return (
        (t[3] = 0),
        (t[7] = 0),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        this
      );
    }
    makeRotationFromQuaternion(e) {
      return this.compose(Se, e, Ce);
    }
    lookAt(e, t, n) {
      let r = this.elements;
      return (
        Ee.subVectors(e, t),
        Ee.lengthSq() === 0 && (Ee.z = 1),
        Ee.normalize(),
        we.crossVectors(n, Ee),
        we.lengthSq() === 0 &&
          (Math.abs(n.z) === 1 ? (Ee.x += 1e-4) : (Ee.z += 1e-4),
          Ee.normalize(),
          we.crossVectors(n, Ee)),
        we.normalize(),
        Te.crossVectors(Ee, we),
        (r[0] = we.x),
        (r[4] = Te.x),
        (r[8] = Ee.x),
        (r[1] = we.y),
        (r[5] = Te.y),
        (r[9] = Ee.y),
        (r[2] = we.z),
        (r[6] = Te.z),
        (r[10] = Ee.z),
        this
      );
    }
    multiply(e) {
      return this.multiplyMatrices(this, e);
    }
    premultiply(e) {
      return this.multiplyMatrices(e, this);
    }
    multiplyMatrices(e, t) {
      let n = e.elements,
        r = t.elements,
        i = this.elements,
        a = n[0],
        o = n[4],
        s = n[8],
        c = n[12],
        l = n[1],
        u = n[5],
        d = n[9],
        f = n[13],
        p = n[2],
        m = n[6],
        h = n[10],
        g = n[14],
        _ = n[3],
        v = n[7],
        y = n[11],
        b = n[15],
        x = r[0],
        S = r[4],
        C = r[8],
        w = r[12],
        T = r[1],
        E = r[5],
        D = r[9],
        O = r[13],
        k = r[2],
        A = r[6],
        j = r[10],
        M = r[14],
        ee = r[3],
        te = r[7],
        ne = r[11],
        re = r[15];
      return (
        (i[0] = a * x + o * T + s * k + c * ee),
        (i[4] = a * S + o * E + s * A + c * te),
        (i[8] = a * C + o * D + s * j + c * ne),
        (i[12] = a * w + o * O + s * M + c * re),
        (i[1] = l * x + u * T + d * k + f * ee),
        (i[5] = l * S + u * E + d * A + f * te),
        (i[9] = l * C + u * D + d * j + f * ne),
        (i[13] = l * w + u * O + d * M + f * re),
        (i[2] = p * x + m * T + h * k + g * ee),
        (i[6] = p * S + m * E + h * A + g * te),
        (i[10] = p * C + m * D + h * j + g * ne),
        (i[14] = p * w + m * O + h * M + g * re),
        (i[3] = _ * x + v * T + y * k + b * ee),
        (i[7] = _ * S + v * E + y * A + b * te),
        (i[11] = _ * C + v * D + y * j + b * ne),
        (i[15] = _ * w + v * O + y * M + b * re),
        this
      );
    }
    multiplyScalar(e) {
      let t = this.elements;
      return (
        (t[0] *= e),
        (t[4] *= e),
        (t[8] *= e),
        (t[12] *= e),
        (t[1] *= e),
        (t[5] *= e),
        (t[9] *= e),
        (t[13] *= e),
        (t[2] *= e),
        (t[6] *= e),
        (t[10] *= e),
        (t[14] *= e),
        (t[3] *= e),
        (t[7] *= e),
        (t[11] *= e),
        (t[15] *= e),
        this
      );
    }
    determinant() {
      let e = this.elements,
        t = e[0],
        n = e[4],
        r = e[8],
        i = e[12],
        a = e[1],
        o = e[5],
        s = e[9],
        c = e[13],
        l = e[2],
        u = e[6],
        d = e[10],
        f = e[14],
        p = e[3],
        m = e[7],
        h = e[11],
        g = e[15],
        _ = s * f - c * d,
        v = o * f - c * u,
        y = o * d - s * u,
        b = a * f - c * l,
        x = a * d - s * l,
        S = a * u - o * l;
      return (
        t * (m * _ - h * v + g * y) -
        n * (p * _ - h * b + g * x) +
        r * (p * v - m * b + g * S) -
        i * (p * y - m * x + h * S)
      );
    }
    determinantAffine() {
      let e = this.elements,
        t = e[0],
        n = e[4],
        r = e[8],
        i = e[1],
        a = e[5],
        o = e[9],
        s = e[2],
        c = e[6],
        l = e[10];
      return t * (a * l - o * c) - n * (i * l - o * s) + r * (i * c - a * s);
    }
    transpose() {
      let e = this.elements,
        t;
      return (
        (t = e[1]),
        (e[1] = e[4]),
        (e[4] = t),
        (t = e[2]),
        (e[2] = e[8]),
        (e[8] = t),
        (t = e[6]),
        (e[6] = e[9]),
        (e[9] = t),
        (t = e[3]),
        (e[3] = e[12]),
        (e[12] = t),
        (t = e[7]),
        (e[7] = e[13]),
        (e[13] = t),
        (t = e[11]),
        (e[11] = e[14]),
        (e[14] = t),
        this
      );
    }
    setPosition(e, t, n) {
      let r = this.elements;
      return (
        e.isVector3
          ? ((r[12] = e.x), (r[13] = e.y), (r[14] = e.z))
          : ((r[12] = e), (r[13] = t), (r[14] = n)),
        this
      );
    }
    invert() {
      let e = this.elements,
        t = e[0],
        n = e[1],
        r = e[2],
        i = e[3],
        a = e[4],
        o = e[5],
        s = e[6],
        c = e[7],
        l = e[8],
        u = e[9],
        d = e[10],
        f = e[11],
        p = e[12],
        m = e[13],
        h = e[14],
        g = e[15],
        _ = t * o - n * a,
        v = t * s - r * a,
        y = t * c - i * a,
        b = n * s - r * o,
        x = n * c - i * o,
        S = r * c - i * s,
        C = l * m - u * p,
        w = l * h - d * p,
        T = l * g - f * p,
        E = u * h - d * m,
        D = u * g - f * m,
        O = d * g - f * h,
        k = _ * O - v * D + y * E + b * T - x * w + S * C;
      if (k === 0)
        return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      let A = 1 / k;
      return (
        (e[0] = (o * O - s * D + c * E) * A),
        (e[1] = (r * D - n * O - i * E) * A),
        (e[2] = (m * S - h * x + g * b) * A),
        (e[3] = (d * x - u * S - f * b) * A),
        (e[4] = (s * T - a * O - c * w) * A),
        (e[5] = (t * O - r * T + i * w) * A),
        (e[6] = (h * y - p * S - g * v) * A),
        (e[7] = (l * S - d * y + f * v) * A),
        (e[8] = (a * D - o * T + c * C) * A),
        (e[9] = (n * T - t * D - i * C) * A),
        (e[10] = (p * x - m * y + g * _) * A),
        (e[11] = (u * y - l * x - f * _) * A),
        (e[12] = (o * w - a * E - s * C) * A),
        (e[13] = (t * E - n * w + r * C) * A),
        (e[14] = (m * v - p * b - h * _) * A),
        (e[15] = (l * b - u * v + d * _) * A),
        this
      );
    }
    scale(e) {
      let t = this.elements,
        n = e.x,
        r = e.y,
        i = e.z;
      return (
        (t[0] *= n),
        (t[4] *= r),
        (t[8] *= i),
        (t[1] *= n),
        (t[5] *= r),
        (t[9] *= i),
        (t[2] *= n),
        (t[6] *= r),
        (t[10] *= i),
        (t[3] *= n),
        (t[7] *= r),
        (t[11] *= i),
        this
      );
    }
    getMaxScaleOnAxis() {
      let e = this.elements,
        t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
        n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
        r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
      return Math.sqrt(Math.max(t, n, r));
    }
    makeTranslation(e, t, n) {
      return (
        e.isVector3
          ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
          : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
        this
      );
    }
    makeRotationX(e) {
      let t = Math.cos(e),
        n = Math.sin(e);
      return (this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this);
    }
    makeRotationY(e) {
      let t = Math.cos(e),
        n = Math.sin(e);
      return (this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this);
    }
    makeRotationZ(e) {
      let t = Math.cos(e),
        n = Math.sin(e);
      return (this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
    }
    makeRotationAxis(e, t) {
      let n = Math.cos(t),
        r = Math.sin(t),
        i = 1 - n,
        a = e.x,
        o = e.y,
        s = e.z,
        c = i * a,
        l = i * o;
      return (
        this.set(
          c * a + n,
          c * o - r * s,
          c * s + r * o,
          0,
          c * o + r * s,
          l * o + n,
          l * s - r * a,
          0,
          c * s - r * o,
          l * s + r * a,
          i * s * s + n,
          0,
          0,
          0,
          0,
          1,
        ),
        this
      );
    }
    makeScale(e, t, n) {
      return (this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this);
    }
    makeShear(e, t, n, r, i, a) {
      return (this.set(1, n, i, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this);
    }
    compose(e, t, n) {
      let r = this.elements,
        i = t._x,
        a = t._y,
        o = t._z,
        s = t._w,
        c = i + i,
        l = a + a,
        u = o + o,
        d = i * c,
        f = i * l,
        p = i * u,
        m = a * l,
        h = a * u,
        g = o * u,
        _ = s * c,
        v = s * l,
        y = s * u,
        b = n.x,
        x = n.y,
        S = n.z;
      return (
        (r[0] = (1 - (m + g)) * b),
        (r[1] = (f + y) * b),
        (r[2] = (p - v) * b),
        (r[3] = 0),
        (r[4] = (f - y) * x),
        (r[5] = (1 - (d + g)) * x),
        (r[6] = (h + _) * x),
        (r[7] = 0),
        (r[8] = (p + v) * S),
        (r[9] = (h - _) * S),
        (r[10] = (1 - (d + m)) * S),
        (r[11] = 0),
        (r[12] = e.x),
        (r[13] = e.y),
        (r[14] = e.z),
        (r[15] = 1),
        this
      );
    }
    decompose(e, t, n) {
      let r = this.elements;
      ((e.x = r[12]), (e.y = r[13]), (e.z = r[14]));
      let i = this.determinantAffine();
      if (i === 0) return (n.set(1, 1, 1), t.identity(), this);
      let a = be.set(r[0], r[1], r[2]).length(),
        o = be.set(r[4], r[5], r[6]).length(),
        s = be.set(r[8], r[9], r[10]).length();
      (i < 0 && (a = -a), xe.copy(this));
      let c = 1 / a,
        l = 1 / o,
        u = 1 / s;
      return (
        (xe.elements[0] *= c),
        (xe.elements[1] *= c),
        (xe.elements[2] *= c),
        (xe.elements[4] *= l),
        (xe.elements[5] *= l),
        (xe.elements[6] *= l),
        (xe.elements[8] *= u),
        (xe.elements[9] *= u),
        (xe.elements[10] *= u),
        t.setFromRotationMatrix(xe),
        (n.x = a),
        (n.y = o),
        (n.z = s),
        this
      );
    }
    makePerspective(e, t, n, r, i, a, o = p, s = !1) {
      let c = this.elements,
        l = (2 * i) / (t - e),
        u = (2 * i) / (n - r),
        d = (t + e) / (t - e),
        f = (n + r) / (n - r),
        m,
        h;
      if (s) ((m = i / (a - i)), (h = (a * i) / (a - i)));
      else if (o === 2e3)
        ((m = -(a + i) / (a - i)), (h = (-2 * a * i) / (a - i)));
      else if (o === 2001) ((m = -a / (a - i)), (h = (-a * i) / (a - i)));
      else
        throw Error(
          `THREE.Matrix4.makePerspective(): Invalid coordinate system: ` + o,
        );
      return (
        (c[0] = l),
        (c[4] = 0),
        (c[8] = d),
        (c[12] = 0),
        (c[1] = 0),
        (c[5] = u),
        (c[9] = f),
        (c[13] = 0),
        (c[2] = 0),
        (c[6] = 0),
        (c[10] = m),
        (c[14] = h),
        (c[3] = 0),
        (c[7] = 0),
        (c[11] = -1),
        (c[15] = 0),
        this
      );
    }
    makeOrthographic(e, t, n, r, i, a, o = p, s = !1) {
      let c = this.elements,
        l = 2 / (t - e),
        u = 2 / (n - r),
        d = -(t + e) / (t - e),
        f = -(n + r) / (n - r),
        m,
        h;
      if (s) ((m = 1 / (a - i)), (h = a / (a - i)));
      else if (o === 2e3) ((m = -2 / (a - i)), (h = -(a + i) / (a - i)));
      else if (o === 2001) ((m = -1 / (a - i)), (h = -i / (a - i)));
      else
        throw Error(
          `THREE.Matrix4.makeOrthographic(): Invalid coordinate system: ` + o,
        );
      return (
        (c[0] = l),
        (c[4] = 0),
        (c[8] = 0),
        (c[12] = d),
        (c[1] = 0),
        (c[5] = u),
        (c[9] = 0),
        (c[13] = f),
        (c[2] = 0),
        (c[6] = 0),
        (c[10] = m),
        (c[14] = h),
        (c[3] = 0),
        (c[7] = 0),
        (c[11] = 0),
        (c[15] = 1),
        this
      );
    }
    equals(e) {
      let t = this.elements,
        n = e.elements;
      for (let e = 0; e < 16; e++) if (t[e] !== n[e]) return !1;
      return !0;
    }
    fromArray(e, t = 0) {
      for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
      return this;
    }
    toArray(e = [], t = 0) {
      let n = this.elements;
      return (
        (e[t] = n[0]),
        (e[t + 1] = n[1]),
        (e[t + 2] = n[2]),
        (e[t + 3] = n[3]),
        (e[t + 4] = n[4]),
        (e[t + 5] = n[5]),
        (e[t + 6] = n[6]),
        (e[t + 7] = n[7]),
        (e[t + 8] = n[8]),
        (e[t + 9] = n[9]),
        (e[t + 10] = n[10]),
        (e[t + 11] = n[11]),
        (e[t + 12] = n[12]),
        (e[t + 13] = n[13]),
        (e[t + 14] = n[14]),
        (e[t + 15] = n[15]),
        e
      );
    }
  };
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
var Ke = class e extends S {
  constructor() {
    (super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: je++ }),
      (this.uuid = w()),
      (this.name = ``),
      (this.type = `Object3D`),
      (this.parent = null),
      (this.children = []),
      (this.up = e.DEFAULT_UP.clone()));
    let t = new M(),
      n = new ke(),
      r = new j(),
      i = new M(1, 1, 1);
    function a() {
      r.setFromEuler(n, !1);
    }
    function o() {
      n.setFromQuaternion(r, void 0, !1);
    }
    (n._onChange(a),
      r._onChange(o),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: t },
        rotation: { configurable: !0, enumerable: !0, value: n },
        quaternion: { configurable: !0, enumerable: !0, value: r },
        scale: { configurable: !0, enumerable: !0, value: i },
        modelViewMatrix: { value: new ye() },
        normalMatrix: { value: new ne() },
      }),
      (this.matrix = new ye()),
      (this.matrixWorld = new ye()),
      (this.matrixAutoUpdate = e.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new Ae()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.customDepthMaterial = void 0),
      (this.customDistanceMaterial = void 0),
      (this.static = !1),
      (this.userData = {}),
      (this.pivot = null));
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    (this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale));
  }
  applyQuaternion(e) {
    return (this.quaternion.premultiply(e), this);
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return (Ne.setFromAxisAngle(e, t), this.quaternion.multiply(Ne), this);
  }
  rotateOnWorldAxis(e, t) {
    return (Ne.setFromAxisAngle(e, t), this.quaternion.premultiply(Ne), this);
  }
  rotateX(e) {
    return this.rotateOnAxis(ze, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Be, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Ve, e);
  }
  translateOnAxis(e, t) {
    return (
      Me.copy(e).applyQuaternion(this.quaternion),
      this.position.add(Me.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(ze, e);
  }
  translateY(e) {
    return this.translateOnAxis(Be, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Ve, e);
  }
  localToWorld(e) {
    return (this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld));
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(Pe.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, n) {
    e.isVector3 ? Fe.copy(e) : Fe.set(e, t, n);
    let r = this.parent;
    (this.updateWorldMatrix(!0, !1),
      Ie.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? Pe.lookAt(Ie, Fe, this.up)
        : Pe.lookAt(Fe, Ie, this.up),
      this.quaternion.setFromRotationMatrix(Pe),
      r &&
        (Pe.extractRotation(r.matrixWorld),
        Ne.setFromRotationMatrix(Pe),
        this.quaternion.premultiply(Ne.invert())));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
      return this;
    }
    return e === this
      ? (b(`Object3D.add: object can't be added as a child of itself.`, e),
        this)
      : (e && e.isObject3D
          ? (e.removeFromParent(),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(He),
            (We.child = e),
            this.dispatchEvent(We),
            (We.child = null))
          : b(`Object3D.add: object not an instance of THREE.Object3D.`, e),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
      return this;
    }
    let t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null),
        this.children.splice(t, 1),
        e.dispatchEvent(Ue),
        (Ge.child = e),
        this.dispatchEvent(Ge),
        (Ge.child = null)),
      this
    );
  }
  removeFromParent() {
    let e = this.parent;
    return (e !== null && e.remove(this), this);
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      Pe.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), Pe.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(Pe),
      e.removeFromParent(),
      (e.parent = this),
      this.children.push(e),
      e.updateWorldMatrix(!1, !0),
      e.dispatchEvent(He),
      (We.child = e),
      this.dispatchEvent(We),
      (We.child = null),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty(`id`, e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty(`name`, e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      let r = this.children[n].getObjectByProperty(e, t);
      if (r !== void 0) return r;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    let r = this.children;
    for (let i = 0, a = r.length; i < a; i++)
      r[i].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(Ie, e, Le),
      e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(Ie, Re, e),
      e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    let t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  intersectsFrustum() {}
  traverse(e) {
    e(this);
    let t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    let t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    let t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    let e = this.pivot;
    if (e !== null) {
      let t = e.x,
        n = e.y,
        r = e.z,
        i = this.matrix.elements;
      ((i[12] += t - i[0] * t - i[4] * n - i[8] * r),
        (i[13] += n - i[1] * t - i[5] * n - i[9] * r),
        (i[14] += r - i[2] * t - i[6] * n - i[10] * r));
    }
    this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    (this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.matrixWorldAutoUpdate === !0 &&
          (this.parent === null
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix,
              )),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0)));
    let t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t, n = !1) {
    let r = this.parent;
    if (
      (e === !0 && r !== null && r.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || n) &&
        (this.matrixWorldAutoUpdate === !0 &&
          (this.parent === null
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix,
              )),
        (this.matrixWorldNeedsUpdate = !1),
        (n = !0)),
      t === !0)
    ) {
      let e = this.children;
      for (let t = 0, r = e.length; t < r; t++)
        e[t].updateWorldMatrix(!1, !0, n);
    }
  }
  toJSON(e) {
    let t = e === void 0 || typeof e == `string`,
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.7,
        type: `Object`,
        generator: `Object3D.toJSON`,
      }));
    let r = {};
    ((r.uuid = this.uuid),
      (r.type = this.type),
      (r.name = this.name),
      (r.castShadow = this.castShadow),
      (r.receiveShadow = this.receiveShadow),
      (r.visible = this.visible),
      (r.frustumCulled = this.frustumCulled),
      (r.renderOrder = this.renderOrder),
      (r.static = this.static),
      (r.matrixAutoUpdate = this.matrixAutoUpdate),
      Object.keys(this.userData).length > 0 && (r.userData = this.userData),
      (r.layers = this.layers.mask),
      (r.matrix = this.matrix.toArray()),
      (r.up = this.up.toArray()),
      this.pivot !== null && (r.pivot = this.pivot.toArray()),
      this.morphTargetDictionary !== void 0 &&
        (r.morphTargetDictionary = Object.assign(
          {},
          this.morphTargetDictionary,
        )),
      this.morphTargetInfluences !== void 0 &&
        (r.morphTargetInfluences = this.morphTargetInfluences.slice()),
      this.isInstancedMesh &&
        ((r.type = `InstancedMesh`),
        (r.count = this.count),
        (r.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (r.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((r.type = `BatchedMesh`),
        (r.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (r.sortObjects = this.sortObjects),
        (r.drawRanges = this._drawRanges),
        (r.reservedRanges = this._reservedRanges),
        (r.geometryInfo = this._geometryInfo.map((e) => ({
          ...e,
          boundingBox: e.boundingBox ? e.boundingBox.toJSON() : void 0,
          boundingSphere: e.boundingSphere ? e.boundingSphere.toJSON() : void 0,
        }))),
        (r.instanceInfo = this._instanceInfo.map((e) => ({ ...e }))),
        (r.availableInstanceIds = this._availableInstanceIds.slice()),
        (r.availableGeometryIds = this._availableGeometryIds.slice()),
        (r.nextIndexStart = this._nextIndexStart),
        (r.nextVertexStart = this._nextVertexStart),
        (r.geometryCount = this._geometryCount),
        (r.maxInstanceCount = this._maxInstanceCount),
        (r.maxVertexCount = this._maxVertexCount),
        (r.maxIndexCount = this._maxIndexCount),
        (r.geometryInitialized = this._geometryInitialized),
        (r.matricesTexture = this._matricesTexture.toJSON(e)),
        (r.indirectTexture = this._indirectTexture.toJSON(e)),
        this._colorsTexture !== null &&
          (r.colorsTexture = this._colorsTexture.toJSON(e)),
        this.boundingSphere !== null &&
          (r.boundingSphere = this.boundingSphere.toJSON()),
        this.boundingBox !== null &&
          (r.boundingBox = this.boundingBox.toJSON())));
    function i(t, n) {
      return (t[n.uuid] === void 0 && (t[n.uuid] = n.toJSON(e)), n.uuid);
    }
    if (this.isScene)
      (this.background &&
        (this.background.isColor
          ? (r.background = this.background.toJSON())
          : this.background.isTexture &&
            (r.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (r.environment = this.environment.toJSON(e).uuid));
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = i(e.geometries, this.geometry);
      let t = this.geometry.parameters;
      if (t !== void 0 && t.shapes !== void 0) {
        let n = t.shapes;
        if (Array.isArray(n))
          for (let t = 0, r = n.length; t < r; t++) {
            let r = n[t];
            i(e.shapes, r);
          }
        else i(e.shapes, n);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((r.bindMode = this.bindMode),
        (r.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (i(e.skeletons, this.skeleton), (r.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    ) {
      if (Array.isArray(this.material)) {
        let t = [];
        for (let n = 0, r = this.material.length; n < r; n++)
          t.push(i(e.materials, this.material[n]));
        r.material = t;
      } else r.material = i(e.materials, this.material);
    }
    if (this.children.length > 0) {
      r.children = [];
      for (let t = 0; t < this.children.length; t++)
        r.children.push(this.children[t].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let t = 0; t < this.animations.length; t++) {
        let n = this.animations[t];
        r.animations.push(i(e.animations, n));
      }
    }
    if (t) {
      let t = a(e.geometries),
        r = a(e.materials),
        i = a(e.textures),
        o = a(e.images),
        s = a(e.shapes),
        c = a(e.skeletons),
        l = a(e.animations),
        u = a(e.nodes);
      (t.length > 0 && (n.geometries = t),
        r.length > 0 && (n.materials = r),
        i.length > 0 && (n.textures = i),
        o.length > 0 && (n.images = o),
        s.length > 0 && (n.shapes = s),
        c.length > 0 && (n.skeletons = c),
        l.length > 0 && (n.animations = l),
        u.length > 0 && (n.nodes = u));
    }
    return ((n.object = r), n);
    function a(e) {
      let t = [];
      for (let n in e) {
        let r = e[n];
        (delete r.metadata, t.push(r));
      }
      return t;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      (this.pivot = e.pivot === null ? null : e.pivot.clone()),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.static = e.static),
      (this.animations = e.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let t = 0; t < e.children.length; t++) {
        let n = e.children[t];
        this.add(n.clone());
      }
    return this;
  }
  dispose() {
    this.dispatchEvent({ type: `dispose` });
  }
};
((Ke.DEFAULT_UP = /*@__PURE__*/ new M(0, 1, 0)),
  (Ke.DEFAULT_MATRIX_AUTO_UPDATE = !0),
  (Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0));
const qe = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  Je = { h: 0, s: 0, l: 0 },
  Ye = { h: 0, s: 0, l: 0 };
function Xe(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * 6 * (2 / 3 - n)
          : e
  );
}
var N = class {
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
  setHex(e, t = u) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      se.colorSpaceToWorking(this, t),
      this
    );
  }
  setRGB(e, t, n, r = se.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      se.colorSpaceToWorking(this, r),
      this
    );
  }
  setHSL(e, t, n, r = se.workingColorSpace) {
    if (((e = E(e, 1)), (t = T(t, 0, 1)), (n = T(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      let r = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        i = 2 * n - r;
      ((this.r = Xe(i, r, e + 1 / 3)),
        (this.g = Xe(i, r, e)),
        (this.b = Xe(i, r, e - 1 / 3)));
    }
    return (se.colorSpaceToWorking(this, r), this);
  }
  setStyle(e, t = u) {
    function n(t) {
      t !== void 0 &&
        parseFloat(t) < 1 &&
        y(`Color: Alpha component of ` + e + ` will be ignored.`);
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
          y(`Color: Unknown color model ` + e);
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
      y(`Color: Invalid hex color ` + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = u) {
    let n = qe[e.toLowerCase()];
    return (
      n === void 0 ? y(`Color: Unknown color ` + e) : this.setHex(n, t),
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
    return ((this.r = ce(e.r)), (this.g = ce(e.g)), (this.b = ce(e.b)), this);
  }
  copyLinearToSRGB(e) {
    return ((this.r = le(e.r)), (this.g = le(e.g)), (this.b = le(e.b)), this);
  }
  convertSRGBToLinear() {
    return (this.copySRGBToLinear(this), this);
  }
  convertLinearToSRGB() {
    return (this.copyLinearToSRGB(this), this);
  }
  getHex(e = u) {
    return (
      se.workingToColorSpace(Ze.copy(this), e),
      Math.round(T(Ze.r * 255, 0, 255)) * 65536 +
        Math.round(T(Ze.g * 255, 0, 255)) * 256 +
        Math.round(T(Ze.b * 255, 0, 255))
    );
  }
  getHexString(e = u) {
    return (`000000` + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = se.workingColorSpace) {
    se.workingToColorSpace(Ze.copy(this), t);
    let n = Ze.r,
      r = Ze.g,
      i = Ze.b,
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
  getRGB(e, t = se.workingColorSpace) {
    return (
      se.workingToColorSpace(Ze.copy(this), t),
      (e.r = Ze.r),
      (e.g = Ze.g),
      (e.b = Ze.b),
      e
    );
  }
  getStyle(e = u) {
    se.workingToColorSpace(Ze.copy(this), e);
    let t = Ze.r,
      n = Ze.g,
      r = Ze.b;
    return e === `srgb`
      ? `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`
      : `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`;
  }
  offsetHSL(e, t, n) {
    return (this.getHSL(Je), this.setHSL(Je.h + e, Je.s + t, Je.l + n));
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
    (this.getHSL(Je), e.getHSL(Ye));
    let n = D(Je.h, Ye.h, t),
      r = D(Je.s, Ye.s, t),
      i = D(Je.l, Ye.l, t);
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
const Ze = /*@__PURE__*/ new N();
N.NAMES = qe;
var Qe = class {
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
      this.expandByPoint(et.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(et.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    let n = et.copy(t).multiplyScalar(0.5);
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
            ? e.getVertexPosition(t, et)
            : et.fromBufferAttribute(r, t),
            et.applyMatrix4(e.matrixWorld),
            this.expandByPoint(et));
      else
        (e.boundingBox === void 0
          ? (n.boundingBox === null && n.computeBoundingBox(),
            tt.copy(n.boundingBox))
          : (e.boundingBox === null && e.computeBoundingBox(),
            tt.copy(e.boundingBox)),
          tt.applyMatrix4(e.matrixWorld),
          this.union(tt));
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
      this.clampPoint(e.center, et),
      et.distanceToSquared(e.center) <= e.radius * e.radius
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
    (this.getCenter(ct),
      lt.subVectors(this.max, ct),
      nt.subVectors(e.a, ct),
      rt.subVectors(e.b, ct),
      it.subVectors(e.c, ct),
      at.subVectors(rt, nt),
      ot.subVectors(it, rt),
      st.subVectors(nt, it));
    let t = [
      0,
      -at.z,
      at.y,
      0,
      -ot.z,
      ot.y,
      0,
      -st.z,
      st.y,
      at.z,
      0,
      -at.x,
      ot.z,
      0,
      -ot.x,
      st.z,
      0,
      -st.x,
      -at.y,
      at.x,
      0,
      -ot.y,
      ot.x,
      0,
      -st.y,
      st.x,
      0,
    ];
    return !ft(t, nt, rt, it, lt) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !ft(t, nt, rt, it, lt))
      ? !1
      : (ut.crossVectors(at, ot),
        (t = [ut.x, ut.y, ut.z]),
        ft(t, nt, rt, it, lt));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, et).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (this.getCenter(e.center),
          (e.radius = this.getSize(et).length() * 0.5)),
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
      : ($e[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        $e[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        $e[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        $e[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        $e[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        $e[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        $e[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        $e[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints($e),
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
const $e = [
    /*@__PURE__*/ new M(),
    /*@__PURE__*/ new M(),
    /*@__PURE__*/ new M(),
    /*@__PURE__*/ new M(),
    /*@__PURE__*/ new M(),
    /*@__PURE__*/ new M(),
    /*@__PURE__*/ new M(),
    /*@__PURE__*/ new M(),
  ],
  et = /*@__PURE__*/ new M(),
  tt = /*@__PURE__*/ new Qe(),
  nt = /*@__PURE__*/ new M(),
  rt = /*@__PURE__*/ new M(),
  it = /*@__PURE__*/ new M(),
  at = /*@__PURE__*/ new M(),
  ot = /*@__PURE__*/ new M(),
  st = /*@__PURE__*/ new M(),
  ct = /*@__PURE__*/ new M(),
  lt = /*@__PURE__*/ new M(),
  ut = /*@__PURE__*/ new M(),
  dt = /*@__PURE__*/ new M();
function ft(e, t, n, r, i) {
  for (let a = 0, o = e.length - 3; a <= o; a += 3) {
    dt.fromArray(e, a);
    let o = i.x * Math.abs(dt.x) + i.y * Math.abs(dt.y) + i.z * Math.abs(dt.z),
      s = t.dot(dt),
      c = n.dot(dt),
      l = r.dot(dt);
    if (Math.max(-Math.max(s, c, l), Math.min(s, c, l)) > o) return !1;
  }
  return !0;
}
const P = /*@__PURE__*/ new M(),
  pt = /*@__PURE__*/ new A();
let mt = 0;
var F = class extends S {
    constructor(e, t, n = !1) {
      if ((super(), Array.isArray(e)))
        throw TypeError(
          `THREE.BufferAttribute: array should be a Typed Array.`,
        );
      ((this.isBufferAttribute = !0),
        Object.defineProperty(this, "id", { value: mt++ }),
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
          (pt.fromBufferAttribute(this, t),
            pt.applyMatrix3(e),
            this.setXY(t, pt.x, pt.y));
      else if (this.itemSize === 3)
        for (let t = 0, n = this.count; t < n; t++)
          (P.fromBufferAttribute(this, t),
            P.applyMatrix3(e),
            this.setXYZ(t, P.x, P.y, P.z));
      return this;
    }
    applyMatrix4(e) {
      for (let t = 0, n = this.count; t < n; t++)
        (P.fromBufferAttribute(this, t),
          P.applyMatrix4(e),
          this.setXYZ(t, P.x, P.y, P.z));
      return this;
    }
    applyNormalMatrix(e) {
      for (let t = 0, n = this.count; t < n; t++)
        (P.fromBufferAttribute(this, t),
          P.applyNormalMatrix(e),
          this.setXYZ(t, P.x, P.y, P.z));
      return this;
    }
    transformDirection(e) {
      for (let t = 0, n = this.count; t < n; t++)
        (P.fromBufferAttribute(this, t),
          P.transformDirection(e),
          this.setXYZ(t, P.x, P.y, P.z));
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
  ht = class extends F {
    constructor(e, t, n) {
      super(new Uint16Array(e), t, n);
    }
  },
  gt = class extends F {
    constructor(e, t, n) {
      super(new Uint32Array(e), t, n);
    }
  },
  I = class extends F {
    constructor(e, t, n) {
      super(new Float32Array(e), t, n);
    }
  };
const _t = /*@__PURE__*/ new Qe(),
  vt = /*@__PURE__*/ new M(),
  yt = /*@__PURE__*/ new M();
var bt = class {
  constructor(e = new M(), t = -1) {
    ((this.isSphere = !0), (this.center = e), (this.radius = t));
  }
  set(e, t) {
    return (this.center.copy(e), (this.radius = t), this);
  }
  setFromPoints(e, t) {
    let n = this.center;
    t === void 0 ? _t.setFromPoints(e).getCenter(n) : n.copy(t);
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
    vt.subVectors(e, this.center);
    let t = vt.lengthSq();
    if (t > this.radius * this.radius) {
      let e = Math.sqrt(t),
        n = (e - this.radius) * 0.5;
      (this.center.addScaledVector(vt, n / e), (this.radius += n));
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
            : (yt.subVectors(e.center, this.center).setLength(e.radius),
              this.expandByPoint(vt.copy(e.center).add(yt)),
              this.expandByPoint(vt.copy(e.center).sub(yt))),
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
let xt = 0;
const St = /*@__PURE__*/ new ye(),
  Ct = /*@__PURE__*/ new Ke(),
  wt = /*@__PURE__*/ new M(),
  Tt = /*@__PURE__*/ new Qe(),
  Et = /*@__PURE__*/ new Qe(),
  L = /*@__PURE__*/ new M();
var Dt = class e extends S {
    constructor() {
      (super(),
        (this.isBufferGeometry = !0),
        Object.defineProperty(this, "id", { value: xt++ }),
        (this.uuid = w()),
        (this.name = ``),
        (this.type = `BufferGeometry`),
        (this.index = null),
        (this.indirect = null),
        (this.indirectOffset = 0),
        (this.attributes = {}),
        (this.morphAttributes = {}),
        (this.morphTargetsRelative = !1),
        (this.groups = []),
        (this.boundingBox = null),
        (this.boundingSphere = null),
        (this.drawRange = { start: 0, count: 1 / 0 }),
        (this.userData = {}),
        (this._transformed = !1));
    }
    getIndex() {
      return this.index;
    }
    setIndex(e) {
      return (
        (this.index = Array.isArray(e) ? new (m(e) ? gt : ht)(e, 1) : e),
        this
      );
    }
    setIndirect(e, t = 0) {
      return ((this.indirect = e), (this.indirectOffset = t), this);
    }
    getIndirect() {
      return this.indirect;
    }
    getAttribute(e) {
      return this.attributes[e];
    }
    setAttribute(e, t) {
      return ((this.attributes[e] = t), this);
    }
    deleteAttribute(e) {
      return (delete this.attributes[e], this);
    }
    hasAttribute(e) {
      return this.attributes[e] !== void 0;
    }
    addGroup(e, t, n = 0) {
      this.groups.push({ start: e, count: t, materialIndex: n });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(e, t) {
      ((this.drawRange.start = e), (this.drawRange.count = t));
    }
    applyMatrix4(e) {
      let t = this.attributes.position;
      t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
      let n = this.attributes.normal;
      if (n !== void 0) {
        let t = new ne().getNormalMatrix(e);
        (n.applyNormalMatrix(t), (n.needsUpdate = !0));
      }
      let r = this.attributes.tangent;
      return (
        r !== void 0 && (r.transformDirection(e), (r.needsUpdate = !0)),
        this.boundingBox !== null && this.computeBoundingBox(),
        this.boundingSphere !== null && this.computeBoundingSphere(),
        (this._transformed = !0),
        this
      );
    }
    applyQuaternion(e) {
      return (St.makeRotationFromQuaternion(e), this.applyMatrix4(St), this);
    }
    rotateX(e) {
      return (St.makeRotationX(e), this.applyMatrix4(St), this);
    }
    rotateY(e) {
      return (St.makeRotationY(e), this.applyMatrix4(St), this);
    }
    rotateZ(e) {
      return (St.makeRotationZ(e), this.applyMatrix4(St), this);
    }
    translate(e, t, n) {
      return (St.makeTranslation(e, t, n), this.applyMatrix4(St), this);
    }
    scale(e, t, n) {
      return (St.makeScale(e, t, n), this.applyMatrix4(St), this);
    }
    lookAt(e) {
      return (
        Ct.lookAt(e),
        Ct.updateMatrix(),
        this.applyMatrix4(Ct.matrix),
        this
      );
    }
    center() {
      return (
        this.computeBoundingBox(),
        this.boundingBox.getCenter(wt).negate(),
        this.translate(wt.x, wt.y, wt.z),
        this
      );
    }
    setFromPoints(e) {
      let t = this.getAttribute(`position`);
      if (t === void 0) {
        let t = [];
        for (let n = 0, r = e.length; n < r; n++) {
          let r = e[n];
          t.push(r.x, r.y, r.z || 0);
        }
        this.setAttribute(`position`, new I(t, 3));
      } else {
        let n = Math.min(e.length, t.count);
        for (let r = 0; r < n; r++) {
          let n = e[r];
          t.setXYZ(r, n.x, n.y, n.z || 0);
        }
        (e.length > t.count &&
          y(
            `BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`,
          ),
          (t.needsUpdate = !0));
      }
      return this;
    }
    computeBoundingBox() {
      this.boundingBox === null && (this.boundingBox = new Qe());
      let e = this.attributes.position,
        t = this.morphAttributes.position;
      if (e && e.isGLBufferAttribute) {
        (b(
          `BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,
          this,
        ),
          this.boundingBox.set(
            new M(-1 / 0, -1 / 0, -1 / 0),
            new M(1 / 0, 1 / 0, 1 / 0),
          ));
        return;
      }
      if (e !== void 0) {
        if ((this.boundingBox.setFromBufferAttribute(e), t))
          for (let e = 0, n = t.length; e < n; e++) {
            let n = t[e];
            (Tt.setFromBufferAttribute(n),
              this.morphTargetsRelative
                ? (L.addVectors(this.boundingBox.min, Tt.min),
                  this.boundingBox.expandByPoint(L),
                  L.addVectors(this.boundingBox.max, Tt.max),
                  this.boundingBox.expandByPoint(L))
                : (this.boundingBox.expandByPoint(Tt.min),
                  this.boundingBox.expandByPoint(Tt.max)));
          }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) ||
        isNaN(this.boundingBox.min.y) ||
        isNaN(this.boundingBox.min.z)) &&
        b(
          `BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,
          this,
        );
    }
    computeBoundingSphere() {
      this.boundingSphere === null && (this.boundingSphere = new bt());
      let e = this.attributes.position,
        t = this.morphAttributes.position;
      if (e && e.isGLBufferAttribute) {
        (b(
          `BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,
          this,
        ),
          this.boundingSphere.set(new M(), 1 / 0));
        return;
      }
      if (e) {
        let n = this.boundingSphere.center;
        if ((Tt.setFromBufferAttribute(e), t))
          for (let e = 0, n = t.length; e < n; e++) {
            let n = t[e];
            (Et.setFromBufferAttribute(n),
              this.morphTargetsRelative
                ? (L.addVectors(Tt.min, Et.min),
                  Tt.expandByPoint(L),
                  L.addVectors(Tt.max, Et.max),
                  Tt.expandByPoint(L))
                : (Tt.expandByPoint(Et.min), Tt.expandByPoint(Et.max)));
          }
        Tt.getCenter(n);
        let r = 0;
        for (let t = 0, i = e.count; t < i; t++)
          (L.fromBufferAttribute(e, t),
            (r = Math.max(r, n.distanceToSquared(L))));
        if (t)
          for (let i = 0, a = t.length; i < a; i++) {
            let a = t[i],
              o = this.morphTargetsRelative;
            for (let t = 0, i = a.count; t < i; t++)
              (L.fromBufferAttribute(a, t),
                o && (wt.fromBufferAttribute(e, t), L.add(wt)),
                (r = Math.max(r, n.distanceToSquared(L))));
          }
        ((this.boundingSphere.radius = Math.sqrt(r)),
          isNaN(this.boundingSphere.radius) &&
            b(
              `BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,
              this,
            ));
      }
    }
    computeTangents() {
      let e = this.index,
        t = this.attributes;
      if (
        e === null ||
        t.position === void 0 ||
        t.normal === void 0 ||
        t.uv === void 0
      ) {
        b(
          `BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`,
        );
        return;
      }
      let n = t.position,
        r = t.normal,
        i = t.uv,
        a = this.getAttribute(`tangent`);
      (a === void 0 || a.count !== n.count) &&
        ((a = new F(new Float32Array(4 * n.count), 4)),
        this.setAttribute(`tangent`, a));
      let o = [],
        s = [];
      for (let e = 0; e < n.count; e++) ((o[e] = new M()), (s[e] = new M()));
      let c = new M(),
        l = new M(),
        u = new M(),
        d = new A(),
        f = new A(),
        p = new A(),
        m = new M(),
        h = new M();
      function g(e, t, r) {
        (c.fromBufferAttribute(n, e),
          l.fromBufferAttribute(n, t),
          u.fromBufferAttribute(n, r),
          d.fromBufferAttribute(i, e),
          f.fromBufferAttribute(i, t),
          p.fromBufferAttribute(i, r),
          l.sub(c),
          u.sub(c),
          f.sub(d),
          p.sub(d));
        let a = 1 / (f.x * p.y - p.x * f.y);
        isFinite(a) &&
          (m
            .copy(l)
            .multiplyScalar(p.y)
            .addScaledVector(u, -f.y)
            .multiplyScalar(a),
          h
            .copy(u)
            .multiplyScalar(f.x)
            .addScaledVector(l, -p.x)
            .multiplyScalar(a),
          o[e].add(m),
          o[t].add(m),
          o[r].add(m),
          s[e].add(h),
          s[t].add(h),
          s[r].add(h));
      }
      let _ = this.groups;
      _.length === 0 && (_ = [{ start: 0, count: e.count }]);
      for (let t = 0, n = _.length; t < n; ++t) {
        let n = _[t],
          r = n.start,
          i = n.count;
        for (let t = r, n = r + i; t < n; t += 3)
          g(e.getX(t + 0), e.getX(t + 1), e.getX(t + 2));
      }
      let v = new M(),
        y = new M(),
        x = new M(),
        S = new M();
      function C(e) {
        (x.fromBufferAttribute(r, e), S.copy(x));
        let t = o[e];
        (v.copy(t),
          v.sub(x.multiplyScalar(x.dot(t))).normalize(),
          y.crossVectors(S, t));
        let n = y.dot(s[e]) < 0 ? -1 : 1;
        a.setXYZW(e, v.x, v.y, v.z, n);
      }
      for (let t = 0, n = _.length; t < n; ++t) {
        let n = _[t],
          r = n.start,
          i = n.count;
        for (let t = r, n = r + i; t < n; t += 3)
          (C(e.getX(t + 0)), C(e.getX(t + 1)), C(e.getX(t + 2)));
      }
      this._transformed = !0;
    }
    computeVertexNormals() {
      let e = this.index,
        t = this.getAttribute(`position`);
      if (t !== void 0) {
        let n = this.getAttribute(`normal`);
        if (n === void 0 || n.count !== t.count)
          ((n = new F(new Float32Array(t.count * 3), 3)),
            this.setAttribute(`normal`, n));
        else for (let e = 0, t = n.count; e < t; e++) n.setXYZ(e, 0, 0, 0);
        let r = new M(),
          i = new M(),
          a = new M(),
          o = new M(),
          s = new M(),
          c = new M(),
          l = new M(),
          u = new M();
        if (e)
          for (let d = 0, f = e.count; d < f; d += 3) {
            let f = e.getX(d + 0),
              p = e.getX(d + 1),
              m = e.getX(d + 2);
            (r.fromBufferAttribute(t, f),
              i.fromBufferAttribute(t, p),
              a.fromBufferAttribute(t, m),
              l.subVectors(a, i),
              u.subVectors(r, i),
              l.cross(u),
              o.fromBufferAttribute(n, f),
              s.fromBufferAttribute(n, p),
              c.fromBufferAttribute(n, m),
              o.add(l),
              s.add(l),
              c.add(l),
              n.setXYZ(f, o.x, o.y, o.z),
              n.setXYZ(p, s.x, s.y, s.z),
              n.setXYZ(m, c.x, c.y, c.z));
          }
        else
          for (let e = 0, o = t.count; e < o; e += 3)
            (r.fromBufferAttribute(t, e + 0),
              i.fromBufferAttribute(t, e + 1),
              a.fromBufferAttribute(t, e + 2),
              l.subVectors(a, i),
              u.subVectors(r, i),
              l.cross(u),
              n.setXYZ(e + 0, l.x, l.y, l.z),
              n.setXYZ(e + 1, l.x, l.y, l.z),
              n.setXYZ(e + 2, l.x, l.y, l.z));
        (this.normalizeNormals(), (n.needsUpdate = !0));
      }
    }
    normalizeNormals() {
      let e = this.attributes.normal;
      for (let t = 0, n = e.count; t < n; t++)
        (L.fromBufferAttribute(e, t),
          L.normalize(),
          e.setXYZ(t, L.x, L.y, L.z));
    }
    toNonIndexed() {
      function t(e, t) {
        let n = e.array,
          r = e.itemSize,
          i = e.normalized,
          a = new n.constructor(t.length * r),
          o = 0,
          s = 0;
        for (let i = 0, c = t.length; i < c; i++) {
          o = e.isInterleavedBufferAttribute
            ? t[i] * e.data.stride + e.offset
            : t[i] * r;
          for (let e = 0; e < r; e++) a[s++] = n[o++];
        }
        return new F(a, r, i);
      }
      if (this.index === null)
        return (
          y(
            `BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`,
          ),
          this
        );
      let n = new e(),
        r = this.index.array,
        i = this.attributes;
      for (let e in i) {
        let a = i[e],
          o = t(a, r);
        n.setAttribute(e, o);
      }
      let a = this.morphAttributes;
      for (let e in a) {
        let i = [],
          o = a[e];
        for (let e = 0, n = o.length; e < n; e++) {
          let n = o[e],
            a = t(n, r);
          i.push(a);
        }
        n.morphAttributes[e] = i;
      }
      n.morphTargetsRelative = this.morphTargetsRelative;
      let o = this.groups;
      for (let e = 0, t = o.length; e < t; e++) {
        let t = o[e];
        n.addGroup(t.start, t.count, t.materialIndex);
      }
      return n;
    }
    toJSON() {
      let e = {
        metadata: {
          version: 4.7,
          type: `BufferGeometry`,
          generator: `BufferGeometry.toJSON`,
        },
      };
      if (
        ((e.uuid = this.uuid),
        (e.type =
          this.parameters !== void 0 && this._transformed === !0
            ? `BufferGeometry`
            : this.type),
        (e.name = this.name),
        Object.keys(this.userData).length > 0 && (e.userData = this.userData),
        this.parameters !== void 0 && this._transformed !== !0)
      ) {
        let t = this.parameters;
        for (let n in t) t[n] !== void 0 && (e[n] = t[n]);
        return e;
      }
      e.data = { attributes: {} };
      let t = this.index;
      t !== null &&
        (e.data.index = {
          type: t.array.constructor.name,
          array: Array.prototype.slice.call(t.array),
        });
      let n = this.attributes;
      for (let t in n) {
        let r = n[t];
        e.data.attributes[t] = r.toJSON(e.data);
      }
      let r = {},
        i = !1;
      for (let t in this.morphAttributes) {
        let n = this.morphAttributes[t],
          a = [];
        for (let t = 0, r = n.length; t < r; t++) {
          let r = n[t];
          a.push(r.toJSON(e.data));
        }
        a.length > 0 && ((r[t] = a), (i = !0));
      }
      i &&
        ((e.data.morphAttributes = r),
        (e.data.morphTargetsRelative = this.morphTargetsRelative));
      let a = this.groups;
      a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
      let o = this.boundingSphere;
      return (o !== null && (e.data.boundingSphere = o.toJSON()), e);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      ((this.index = null),
        (this.attributes = {}),
        (this.morphAttributes = {}),
        (this.groups = []),
        (this.boundingBox = null),
        (this.boundingSphere = null));
      let t = {};
      this.name = e.name;
      let n = e.index;
      n !== null && this.setIndex(n.clone());
      let r = e.attributes;
      for (let e in r) {
        let n = r[e];
        this.setAttribute(e, n.clone(t));
      }
      let i = e.morphAttributes;
      for (let e in i) {
        let n = [],
          r = i[e];
        for (let e = 0, i = r.length; e < i; e++) n.push(r[e].clone(t));
        this.morphAttributes[e] = n;
      }
      this.morphTargetsRelative = e.morphTargetsRelative;
      let a = e.groups;
      for (let e = 0, t = a.length; e < t; e++) {
        let t = a[e];
        this.addGroup(t.start, t.count, t.materialIndex);
      }
      let o = e.boundingBox;
      o !== null && (this.boundingBox = o.clone());
      let s = e.boundingSphere;
      return (
        s !== null && (this.boundingSphere = s.clone()),
        (this.drawRange.start = e.drawRange.start),
        (this.drawRange.count = e.drawRange.count),
        (this.userData = e.userData),
        (this._transformed = e._transformed),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: `dispose` });
    }
  },
  Ot = class e extends Dt {
    constructor(e = 1, t = 1, n = 1, r = 1, i = 1, a = 1) {
      (super(),
        (this.type = `BoxGeometry`),
        (this.parameters = {
          width: e,
          height: t,
          depth: n,
          widthSegments: r,
          heightSegments: i,
          depthSegments: a,
        }));
      let o = this;
      ((r = Math.floor(r)), (i = Math.floor(i)), (a = Math.floor(a)));
      let s = [],
        c = [],
        l = [],
        u = [],
        d = 0,
        f = 0;
      (p(`z`, `y`, `x`, -1, -1, n, t, e, a, i, 0),
        p(`z`, `y`, `x`, 1, -1, n, t, -e, a, i, 1),
        p(`x`, `z`, `y`, 1, 1, e, n, t, r, a, 2),
        p(`x`, `z`, `y`, 1, -1, e, n, -t, r, a, 3),
        p(`x`, `y`, `z`, 1, -1, e, t, n, r, i, 4),
        p(`x`, `y`, `z`, -1, -1, e, t, -n, r, i, 5),
        this.setIndex(s),
        this.setAttribute(`position`, new I(c, 3)),
        this.setAttribute(`normal`, new I(l, 3)),
        this.setAttribute(`uv`, new I(u, 2)));
      function p(e, t, n, r, i, a, p, m, h, g, _) {
        let v = a / h,
          y = p / g,
          b = a / 2,
          x = p / 2,
          S = m / 2,
          C = h + 1,
          w = g + 1,
          T = 0,
          E = 0,
          D = new M();
        for (let a = 0; a < w; a++) {
          let o = a * y - x;
          for (let s = 0; s < C; s++)
            ((D[e] = (s * v - b) * r),
              (D[t] = o * i),
              (D[n] = S),
              c.push(D.x, D.y, D.z),
              (D[e] = 0),
              (D[t] = 0),
              (D[n] = m > 0 ? 1 : -1),
              l.push(D.x, D.y, D.z),
              u.push(s / h),
              u.push(1 - a / g),
              (T += 1));
        }
        for (let e = 0; e < g; e++)
          for (let t = 0; t < h; t++) {
            let n = d + t + C * e,
              r = d + t + C * (e + 1),
              i = d + (t + 1) + C * (e + 1),
              a = d + (t + 1) + C * e;
            (s.push(n, r, a), s.push(r, i, a), (E += 6));
          }
        (o.addGroup(f, E, _), (f += E), (d += T));
      }
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(
        t.width,
        t.height,
        t.depth,
        t.widthSegments,
        t.heightSegments,
        t.depthSegments,
      );
    }
  },
  kt = class e extends Dt {
    constructor(e = 1, t = 32, n = 0, r = Math.PI * 2) {
      (super(),
        (this.type = `CircleGeometry`),
        (this.parameters = {
          radius: e,
          segments: t,
          thetaStart: n,
          thetaLength: r,
        }),
        (t = Math.max(3, t)));
      let i = [],
        a = [],
        o = [],
        s = [],
        c = new M(),
        l = new A();
      (a.push(0, 0, 0), o.push(0, 0, 1), s.push(0.5, 0.5));
      for (let i = 0, u = 3; i <= t; i++, u += 3) {
        let d = n + (i / t) * r;
        ((c.x = e * Math.cos(d)),
          (c.y = e * Math.sin(d)),
          a.push(c.x, c.y, c.z),
          o.push(0, 0, 1),
          (l.x = (a[u] / e + 1) / 2),
          (l.y = (a[u + 1] / e + 1) / 2),
          s.push(l.x, l.y));
      }
      for (let e = 1; e <= t; e++) i.push(e, e + 1, 0);
      (this.setIndex(i),
        this.setAttribute(`position`, new I(a, 3)),
        this.setAttribute(`normal`, new I(o, 3)),
        this.setAttribute(`uv`, new I(s, 2)));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(t.radius, t.segments, t.thetaStart, t.thetaLength);
    }
  },
  At = class e extends Dt {
    constructor(
      e = 1,
      t = 1,
      n = 1,
      r = 32,
      i = 1,
      a = !1,
      o = 0,
      s = Math.PI * 2,
    ) {
      (super(),
        (this.type = `CylinderGeometry`),
        (this.parameters = {
          radiusTop: e,
          radiusBottom: t,
          height: n,
          radialSegments: r,
          heightSegments: i,
          openEnded: a,
          thetaStart: o,
          thetaLength: s,
        }));
      let c = this;
      ((r = Math.floor(r)), (i = Math.floor(i)));
      let l = [],
        u = [],
        d = [],
        f = [],
        p = 0,
        m = [],
        h = n / 2,
        g = 0;
      (_(),
        a === !1 && (e > 0 && v(!0), t > 0 && v(!1)),
        this.setIndex(l),
        this.setAttribute(`position`, new I(u, 3)),
        this.setAttribute(`normal`, new I(d, 3)),
        this.setAttribute(`uv`, new I(f, 2)));
      function _() {
        let a = new M(),
          _ = new M(),
          v = 0,
          y = (t - e) / n;
        for (let c = 0; c <= i; c++) {
          let l = [],
            g = c / i,
            v = g * (t - e) + e;
          for (let e = 0; e <= r; e++) {
            let t = e / r,
              i = t * s + o,
              c = Math.sin(i),
              m = Math.cos(i);
            ((_.x = v * c),
              (_.y = -g * n + h),
              (_.z = v * m),
              u.push(_.x, _.y, _.z),
              a.set(c, y, m).normalize(),
              d.push(a.x, a.y, a.z),
              f.push(t, 1 - g),
              l.push(p++));
          }
          m.push(l);
        }
        for (let n = 0; n < r; n++)
          for (let r = 0; r < i; r++) {
            let a = m[r][n],
              o = m[r + 1][n],
              s = m[r + 1][n + 1],
              c = m[r][n + 1];
            ((e > 0 || r !== 0) && (l.push(a, o, c), (v += 3)),
              (t > 0 || r !== i - 1) && (l.push(o, s, c), (v += 3)));
          }
        (c.addGroup(g, v, 0), (g += v));
      }
      function v(n) {
        let i = p,
          a = new A(),
          m = new M(),
          _ = 0,
          v = n === !0 ? e : t,
          y = n === !0 ? 1 : -1;
        for (let e = 1; e <= r; e++)
          (u.push(0, h * y, 0), d.push(0, y, 0), f.push(0.5, 0.5), p++);
        let b = p;
        for (let e = 0; e <= r; e++) {
          let t = (e / r) * s + o,
            n = Math.cos(t),
            i = Math.sin(t);
          ((m.x = v * i),
            (m.y = h * y),
            (m.z = v * n),
            u.push(m.x, m.y, m.z),
            d.push(0, y, 0),
            (a.x = n * 0.5 + 0.5),
            (a.y = i * 0.5 * y + 0.5),
            f.push(a.x, a.y),
            p++);
        }
        for (let e = 0; e < r; e++) {
          let t = i + e,
            r = b + e;
          (n === !0 ? l.push(r, r + 1, t) : l.push(r + 1, r, t), (_ += 3));
        }
        (c.addGroup(g, _, n === !0 ? 1 : 2), (g += _));
      }
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(
        t.radiusTop,
        t.radiusBottom,
        t.height,
        t.radialSegments,
        t.heightSegments,
        t.openEnded,
        t.thetaStart,
        t.thetaLength,
      );
    }
  },
  jt = class e extends Dt {
    constructor(e = [], t = [], n = 1, r = 0) {
      (super(),
        (this.type = `PolyhedronGeometry`),
        (this.parameters = { vertices: e, indices: t, radius: n, detail: r }));
      let i = [],
        a = [];
      (o(r),
        c(n),
        l(),
        this.setAttribute(`position`, new I(i, 3)),
        this.setAttribute(`normal`, new I(i.slice(), 3)),
        this.setAttribute(`uv`, new I(a, 2)),
        r === 0 ? this.computeVertexNormals() : this.normalizeNormals());
      function o(e) {
        let n = new M(),
          r = new M(),
          i = new M();
        for (let a = 0; a < t.length; a += 3)
          (f(t[a + 0], n), f(t[a + 1], r), f(t[a + 2], i), s(n, r, i, e));
      }
      function s(e, t, n, r) {
        let i = r + 1,
          a = [];
        for (let r = 0; r <= i; r++) {
          a[r] = [];
          let o = e.clone().lerp(n, r / i),
            s = t.clone().lerp(n, r / i),
            c = i - r;
          for (let e = 0; e <= c; e++)
            e === 0 && r === i
              ? (a[r][e] = o)
              : (a[r][e] = o.clone().lerp(s, e / c));
        }
        for (let e = 0; e < i; e++)
          for (let t = 0; t < 2 * (i - e) - 1; t++) {
            let n = Math.floor(t / 2);
            t % 2 == 0
              ? (d(a[e][n + 1]), d(a[e + 1][n]), d(a[e][n]))
              : (d(a[e][n + 1]), d(a[e + 1][n + 1]), d(a[e + 1][n]));
          }
      }
      function c(e) {
        let t = new M();
        for (let n = 0; n < i.length; n += 3)
          ((t.x = i[n + 0]),
            (t.y = i[n + 1]),
            (t.z = i[n + 2]),
            t.normalize().multiplyScalar(e),
            (i[n + 0] = t.x),
            (i[n + 1] = t.y),
            (i[n + 2] = t.z));
      }
      function l() {
        let e = new M();
        for (let t = 0; t < i.length; t += 3) {
          ((e.x = i[t + 0]), (e.y = i[t + 1]), (e.z = i[t + 2]));
          let n = h(e) / 2 / Math.PI + 0.5,
            r = g(e) / Math.PI + 0.5;
          a.push(n, 1 - r);
        }
        (p(), u());
      }
      function u() {
        for (let e = 0; e < a.length; e += 6) {
          let t = a[e + 0],
            n = a[e + 2],
            r = a[e + 4];
          Math.max(t, n, r) > 0.9 &&
            Math.min(t, n, r) < 0.1 &&
            (t < 0.2 && (a[e + 0] += 1),
            n < 0.2 && (a[e + 2] += 1),
            r < 0.2 && (a[e + 4] += 1));
        }
      }
      function d(e) {
        i.push(e.x, e.y, e.z);
      }
      function f(t, n) {
        let r = t * 3;
        ((n.x = e[r + 0]), (n.y = e[r + 1]), (n.z = e[r + 2]));
      }
      function p() {
        let e = new M(),
          t = new M(),
          n = new M(),
          r = new M(),
          o = new A(),
          s = new A(),
          c = new A();
        for (let l = 0, u = 0; l < i.length; l += 9, u += 6) {
          (e.set(i[l + 0], i[l + 1], i[l + 2]),
            t.set(i[l + 3], i[l + 4], i[l + 5]),
            n.set(i[l + 6], i[l + 7], i[l + 8]),
            o.set(a[u + 0], a[u + 1]),
            s.set(a[u + 2], a[u + 3]),
            c.set(a[u + 4], a[u + 5]),
            r.copy(e).add(t).add(n).divideScalar(3));
          let d = h(r);
          (m(o, u + 0, e, d), m(s, u + 2, t, d), m(c, u + 4, n, d));
        }
      }
      function m(e, t, n, r) {
        (r < 0 && e.x === 1 && (a[t] = e.x - 1),
          n.x === 0 && n.z === 0 && (a[t] = r / 2 / Math.PI + 0.5));
      }
      function h(e) {
        return Math.atan2(e.z, -e.x);
      }
      function g(e) {
        return Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z));
      }
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(t.vertices, t.indices, t.radius, t.detail);
    }
  },
  Mt = class e extends jt {
    constructor(e = 1, t = 0) {
      (super(
        [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
        [
          0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4,
          2,
        ],
        e,
        t,
      ),
        (this.type = `OctahedronGeometry`),
        (this.parameters = { radius: e, detail: t }));
    }
    static fromJSON(t) {
      return new e(t.radius, t.detail);
    }
  },
  Nt = class e extends Dt {
    constructor(e = 1, t = 1, n = 1, r = 1) {
      (super(),
        (this.type = `PlaneGeometry`),
        (this.parameters = {
          width: e,
          height: t,
          widthSegments: n,
          heightSegments: r,
        }));
      let i = e / 2,
        a = t / 2,
        o = Math.floor(n),
        s = Math.floor(r),
        c = o + 1,
        l = s + 1,
        u = e / o,
        d = t / s,
        f = [],
        p = [],
        m = [],
        h = [];
      for (let e = 0; e < l; e++) {
        let t = e * d - a;
        for (let n = 0; n < c; n++) {
          let r = n * u - i;
          (p.push(r, -t, 0), m.push(0, 0, 1), h.push(n / o), h.push(1 - e / s));
        }
      }
      for (let e = 0; e < s; e++)
        for (let t = 0; t < o; t++) {
          let n = t + c * e,
            r = t + c * (e + 1),
            i = t + 1 + c * (e + 1),
            a = t + 1 + c * e;
          (f.push(n, r, a), f.push(r, i, a));
        }
      (this.setIndex(f),
        this.setAttribute(`position`, new I(p, 3)),
        this.setAttribute(`normal`, new I(m, 3)),
        this.setAttribute(`uv`, new I(h, 2)));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(t.width, t.height, t.widthSegments, t.heightSegments);
    }
  },
  Pt = class e extends Dt {
    constructor(
      e = 1,
      t = 32,
      n = 16,
      r = 0,
      i = Math.PI * 2,
      a = 0,
      o = Math.PI,
    ) {
      (super(),
        (this.type = `SphereGeometry`),
        (this.parameters = {
          radius: e,
          widthSegments: t,
          heightSegments: n,
          phiStart: r,
          phiLength: i,
          thetaStart: a,
          thetaLength: o,
        }),
        (t = Math.max(3, Math.floor(t))),
        (n = Math.max(2, Math.floor(n))));
      let s = Math.min(a + o, Math.PI),
        c = 0,
        l = [],
        u = new M(),
        d = new M(),
        f = [],
        p = [],
        m = [],
        h = [];
      for (let f = 0; f <= n; f++) {
        let g = [],
          _ = f / n,
          v = a + _ * o,
          y = e * Math.cos(v),
          b = Math.sqrt(e * e - y * y),
          x = 0;
        f === 0 && a === 0
          ? (x = 0.5 / t)
          : f === n && s === Math.PI && (x = -0.5 / t);
        for (let e = 0; e <= t; e++) {
          let n = e / t,
            a = r + n * i;
          ((u.x = -b * Math.cos(a)),
            (u.y = y),
            (u.z = b * Math.sin(a)),
            p.push(u.x, u.y, u.z),
            d.copy(u).normalize(),
            m.push(d.x, d.y, d.z),
            h.push(n + x, 1 - _),
            g.push(c++));
        }
        l.push(g);
      }
      for (let e = 0; e < n; e++)
        for (let r = 0; r < t; r++) {
          let t = l[e][r + 1],
            i = l[e][r],
            o = l[e + 1][r],
            c = l[e + 1][r + 1];
          ((e !== 0 || a > 0) && f.push(t, i, c),
            (e !== n - 1 || s < Math.PI) && f.push(i, o, c));
        }
      (this.setIndex(f),
        this.setAttribute(`position`, new I(p, 3)),
        this.setAttribute(`normal`, new I(m, 3)),
        this.setAttribute(`uv`, new I(h, 2)));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(
        t.radius,
        t.widthSegments,
        t.heightSegments,
        t.phiStart,
        t.phiLength,
        t.thetaStart,
        t.thetaLength,
      );
    }
  },
  Ft = class e extends Dt {
    constructor(
      e = 1,
      t = 0.4,
      n = 12,
      r = 48,
      i = Math.PI * 2,
      a = 0,
      o = Math.PI * 2,
    ) {
      (super(),
        (this.type = `TorusGeometry`),
        (this.parameters = {
          radius: e,
          tube: t,
          radialSegments: n,
          tubularSegments: r,
          arc: i,
          thetaStart: a,
          thetaLength: o,
        }),
        (n = Math.floor(n)),
        (r = Math.floor(r)));
      let s = [],
        c = [],
        l = [],
        u = [],
        d = new M(),
        f = new M(),
        p = new M();
      for (let s = 0; s <= n; s++) {
        let m = a + (s / n) * o;
        for (let a = 0; a <= r; a++) {
          let o = (a / r) * i;
          ((f.x = (e + t * Math.cos(m)) * Math.cos(o)),
            (f.y = (e + t * Math.cos(m)) * Math.sin(o)),
            (f.z = t * Math.sin(m)),
            c.push(f.x, f.y, f.z),
            (d.x = e * Math.cos(o)),
            (d.y = e * Math.sin(o)),
            p.subVectors(f, d).normalize(),
            l.push(p.x, p.y, p.z),
            u.push(a / r),
            u.push(s / n));
        }
      }
      for (let e = 1; e <= n; e++)
        for (let t = 1; t <= r; t++) {
          let n = (r + 1) * e + t - 1,
            i = (r + 1) * (e - 1) + t - 1,
            a = (r + 1) * (e - 1) + t,
            o = (r + 1) * e + t;
          (s.push(n, i, o), s.push(i, a, o));
        }
      (this.setIndex(s),
        this.setAttribute(`position`, new I(c, 3)),
        this.setAttribute(`normal`, new I(l, 3)),
        this.setAttribute(`uv`, new I(u, 2)));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(
        t.radius,
        t.tube,
        t.radialSegments,
        t.tubularSegments,
        t.arc,
        t.thetaStart,
        t.thetaLength,
      );
    }
  };
function It(e, t) {
  return !e || e.constructor === t
    ? e
    : typeof t.BYTES_PER_ELEMENT == `number`
      ? new t(e)
      : Array.prototype.slice.call(e);
}
function Lt(e) {
  return e !== void 0 && e.inTangents !== void 0 && e.outTangents !== void 0;
}
var Rt = class {
    constructor(e, t, n, r) {
      ((this.parameterPositions = e),
        (this._cachedIndex = 0),
        (this.resultBuffer = r === void 0 ? new t.constructor(n) : r),
        (this.sampleValues = t),
        (this.valueSize = n),
        (this.settings = null),
        (this.DefaultSettings_ = {}));
    }
    evaluate(e) {
      let t = this.parameterPositions,
        n = this._cachedIndex,
        r = t[n],
        i = t[n - 1];
      validate_interval: {
        seek: {
          let a;
          linear_scan: {
            forward_scan: if (!(e < r)) {
              for (let a = n + 2; ;) {
                if (r === void 0) {
                  if (e < i) break forward_scan;
                  return (
                    (n = t.length),
                    (this._cachedIndex = n),
                    this.copySampleValue_(n - 1)
                  );
                }
                if (n === a) break;
                if (((i = r), (r = t[++n]), e < r)) break seek;
              }
              a = t.length;
              break linear_scan;
            }
            if (!(e >= i)) {
              let o = t[1];
              e < o && ((n = 2), (i = o));
              for (let a = n - 2; ;) {
                if (i === void 0)
                  return ((this._cachedIndex = 0), this.copySampleValue_(0));
                if (n === a) break;
                if (((r = i), (i = t[--n - 1]), e >= i)) break seek;
              }
              ((a = n), (n = 0));
              break linear_scan;
            }
            break validate_interval;
          }
          for (; n < a;) {
            let r = (n + a) >>> 1;
            e < t[r] ? (a = r) : (n = r + 1);
          }
          if (((r = t[n]), (i = t[n - 1]), i === void 0))
            return ((this._cachedIndex = 0), this.copySampleValue_(0));
          if (r === void 0)
            return (
              (n = t.length),
              (this._cachedIndex = n),
              this.copySampleValue_(n - 1)
            );
        }
        ((this._cachedIndex = n), this.intervalChanged_(n, i, r));
      }
      return this.interpolate_(n, i, e, r);
    }
    getSettings_() {
      return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(e) {
      let t = this.resultBuffer,
        n = this.sampleValues,
        r = this.valueSize,
        i = e * r;
      for (let e = 0; e !== r; ++e) t[e] = n[i + e];
      return t;
    }
    interpolate_() {
      throw Error(`THREE.Interpolant: Call to abstract method.`);
    }
    intervalChanged_() {}
  },
  zt = class extends Rt {
    constructor(e, t, n, r) {
      (super(e, t, n, r),
        (this._weightPrev = -0),
        (this._offsetPrev = -0),
        (this._weightNext = -0),
        (this._offsetNext = -0),
        (this.DefaultSettings_ = { endingStart: s, endingEnd: s }));
    }
    intervalChanged_(e, t, n) {
      let r = this.parameterPositions,
        i = e - 2,
        a = e + 1,
        o = r[i],
        s = r[a];
      if (o === void 0)
        switch (this.getSettings_().endingStart) {
          case c:
            ((i = e), (o = 2 * t - n));
            break;
          case l:
            ((i = r.length - 2), (o = t + r[i] - r[i + 1]));
            break;
          default:
            ((i = e), (o = n));
        }
      if (s === void 0)
        switch (this.getSettings_().endingEnd) {
          case c:
            ((a = e), (s = 2 * n - t));
            break;
          case l:
            ((a = 1), (s = n + r[1] - r[0]));
            break;
          default:
            ((a = e - 1), (s = t));
        }
      let u = (n - t) * 0.5,
        d = this.valueSize;
      ((this._weightPrev = u / (t - o)),
        (this._weightNext = u / (s - n)),
        (this._offsetPrev = i * d),
        (this._offsetNext = a * d));
    }
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = e * o,
        c = s - o,
        l = this._offsetPrev,
        u = this._offsetNext,
        d = this._weightPrev,
        f = this._weightNext,
        p = (n - t) / (r - t),
        m = p * p,
        h = m * p,
        g = -d * h + 2 * d * m - d * p,
        _ = (1 + d) * h + (-1.5 - 2 * d) * m + (-0.5 + d) * p + 1,
        v = (-1 - f) * h + (1.5 + f) * m + 0.5 * p,
        y = f * h - f * m;
      for (let e = 0; e !== o; ++e)
        i[e] = g * a[l + e] + _ * a[c + e] + v * a[s + e] + y * a[u + e];
      return i;
    }
  },
  Bt = class extends Rt {
    constructor(e, t, n, r) {
      super(e, t, n, r);
    }
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = e * o,
        c = s - o,
        l = (n - t) / (r - t),
        u = 1 - l;
      for (let e = 0; e !== o; ++e) i[e] = a[c + e] * u + a[s + e] * l;
      return i;
    }
  },
  Vt = class extends Rt {
    constructor(e, t, n, r) {
      super(e, t, n, r);
    }
    interpolate_(e) {
      return this.copySampleValue_(e - 1);
    }
  },
  Ht = class extends Rt {
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = e * o,
        c = s - o,
        l = this.inTangents,
        u = this.outTangents;
      if (!l || !u) {
        let e = (n - t) / (r - t),
          l = 1 - e;
        for (let t = 0; t !== o; ++t) i[t] = a[c + t] * l + a[s + t] * e;
        return i;
      }
      let d = o * 2,
        f = e - 1;
      for (let p = 0; p !== o; ++p) {
        let o = a[c + p],
          m = a[s + p],
          h = f * d + p * 2,
          g = u[h],
          _ = u[h + 1],
          v = e * d + p * 2,
          y = l[v],
          b = l[v + 1],
          x = Gt(n, t, g, y, r);
        i[p] = Ut(x, o, _, b, m);
      }
      return i;
    }
  };
function Ut(e, t, n, r, i) {
  let a = 1 - e;
  return a * a * a * t + 3 * a * a * e * n + 3 * a * e * e * r + e * e * e * i;
}
function Wt(e, t, n, r, i) {
  let a = 1 - e;
  return 3 * a * a * (n - t) + 6 * a * e * (r - n) + 3 * e * e * (i - r);
}
function Gt(e, t, n, r, i) {
  let a = (e - t) / (i - t);
  for (let o = 0; o < 8; o++) {
    let o = Ut(a, t, n, r, i) - e;
    if (Math.abs(o) < 1e-10) break;
    let s = Wt(a, t, n, r, i);
    if (Math.abs(s) < 1e-10) break;
    a = Math.max(0, Math.min(1, a - o / s));
  }
  return a;
}
var Kt = class {
  constructor(e, t, n, r) {
    if (e === void 0)
      throw Error(`THREE.KeyframeTrack: track name is undefined`);
    if (t === void 0 || t.length === 0)
      throw Error(`THREE.KeyframeTrack: no keyframes in track named ` + e);
    ((this.name = e),
      (this.times = It(t, this.TimeBufferType)),
      (this.values = It(n, this.ValueBufferType)),
      this.setInterpolation(r || this.DefaultInterpolation));
  }
  static toJSON(e) {
    let t = e.constructor,
      n;
    if (t.toJSON !== this.toJSON) n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: It(e.times, Array),
        values: It(e.values, Array),
      };
      let t = e.getInterpolation();
      (t !== e.DefaultInterpolation && (n.interpolation = t),
        Lt(e.settings) &&
          (n.settings = {
            inTangents: It(e.settings.inTangents, Array),
            outTangents: It(e.settings.outTangents, Array),
          }));
    }
    return ((n.type = e.ValueTypeName), n);
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Vt(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Bt(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new zt(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodBezier(e) {
    let t = new Ht(this.times, this.values, this.getValueSize(), e);
    return (
      this.settings &&
        ((t.inTangents = this.settings.inTangents),
        (t.outTangents = this.settings.outTangents)),
      t
    );
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case r:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case i:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case a:
        t = this.InterpolantFactoryMethodSmooth;
        break;
      case o:
        t = this.InterpolantFactoryMethodBezier;
    }
    if (t === void 0) {
      let t =
        `unsupported interpolation for ` +
        this.ValueTypeName +
        ` keyframe track named ` +
        this.name;
      if (this.createInterpolant === void 0) {
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else throw Error(t);
      }
      return (y(`KeyframeTrack:`, t), this);
    }
    return ((this.createInterpolant = t), this);
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return r;
      case this.InterpolantFactoryMethodLinear:
        return i;
      case this.InterpolantFactoryMethodSmooth:
        return a;
      case this.InterpolantFactoryMethodBezier:
        return o;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      let t = this.times;
      for (let n = 0, r = t.length; n !== r; ++n) t[n] += e;
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      let t = this.times;
      for (let n = 0, r = t.length; n !== r; ++n) t[n] *= e;
      Lt(this.settings) &&
        (qt(this.settings.inTangents, e), qt(this.settings.outTangents, e));
    }
    return this;
  }
  trim(e, t) {
    let n = this.times,
      r = n.length,
      i = 0,
      a = r - 1;
    for (; i !== r && n[i] < e;) ++i;
    for (; a !== -1 && n[a] > t;) --a;
    if ((++a, i !== 0 || a !== r)) {
      i >= a && ((a = Math.max(a, 1)), (i = a - 1));
      let e = this.getValueSize();
      ((this.times = n.slice(i, a)),
        (this.values = this.values.slice(i * e, a * e)));
    }
    return this;
  }
  validate() {
    let e = !0,
      t = this.getValueSize();
    t - Math.floor(t) !== 0 &&
      (b(`KeyframeTrack: Invalid value size in track.`, this), (e = !1));
    let n = this.times,
      r = this.values,
      i = n.length;
    i === 0 && (b(`KeyframeTrack: Track is empty.`, this), (e = !1));
    let a = null;
    for (let t = 0; t !== i; t++) {
      let r = n[t];
      if (typeof r == `number` && isNaN(r)) {
        (b(`KeyframeTrack: Time is not a valid number.`, this, t, r), (e = !1));
        break;
      }
      if (a !== null && a > r) {
        (b(`KeyframeTrack: Out of order keys.`, this, t, r, a), (e = !1));
        break;
      }
      a = r;
    }
    if (r !== void 0 && h(r))
      for (let t = 0, n = r.length; t !== n; ++t) {
        let n = r[t];
        if (isNaN(n)) {
          (b(`KeyframeTrack: Value is not a valid number.`, this, t, n),
            (e = !1));
          break;
        }
      }
    return e;
  }
  optimize() {
    let e = this.times.slice(),
      t = this.values.slice(),
      n = this.getValueSize(),
      r = this.getInterpolation() === a,
      i = e.length - 1,
      o = 1;
    for (let a = 1; a < i; ++a) {
      let i = !1,
        s = e[a];
      if (s !== e[a + 1] && (a !== 1 || s !== e[0])) {
        if (r) i = !0;
        else {
          let e = a * n,
            r = e - n,
            o = e + n;
          for (let a = 0; a !== n; ++a) {
            let n = t[e + a];
            if (n !== t[r + a] || n !== t[o + a]) {
              i = !0;
              break;
            }
          }
        }
      }
      if (i) {
        if (a !== o) {
          e[o] = e[a];
          let r = a * n,
            i = o * n;
          for (let e = 0; e !== n; ++e) t[i + e] = t[r + e];
        }
        ++o;
      }
    }
    if (i > 0) {
      e[o] = e[i];
      for (let e = i * n, r = o * n, a = 0; a !== n; ++a) t[r + a] = t[e + a];
      ++o;
    }
    return (
      o === e.length
        ? ((this.times = e), (this.values = t))
        : ((this.times = e.slice(0, o)), (this.values = t.slice(0, o * n))),
      this
    );
  }
  clone() {
    let e = this.times.slice(),
      t = this.values.slice(),
      n = this.constructor,
      r = new n(this.name, e, t);
    return (
      (r.createInterpolant = this.createInterpolant),
      Lt(this.settings) &&
        (r.settings = {
          inTangents: this.settings.inTangents.slice(),
          outTangents: this.settings.outTangents.slice(),
        }),
      r
    );
  }
};
function qt(e, t) {
  for (let n = 0, r = e.length; n !== r; n += 2) e[n] *= t;
}
((Kt.prototype.ValueTypeName = ``),
  (Kt.prototype.TimeBufferType = Float32Array),
  (Kt.prototype.ValueBufferType = Float32Array),
  (Kt.prototype.DefaultInterpolation = i));
var Jt = class extends Kt {
  constructor(e, t, n) {
    super(e, t, n);
  }
};
((Jt.prototype.ValueTypeName = `bool`),
  (Jt.prototype.ValueBufferType = Array),
  (Jt.prototype.DefaultInterpolation = r),
  (Jt.prototype.InterpolantFactoryMethodLinear = void 0),
  (Jt.prototype.InterpolantFactoryMethodSmooth = void 0));
var Yt = class extends Kt {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
};
Yt.prototype.ValueTypeName = `color`;
var Xt = class extends Kt {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
};
Xt.prototype.ValueTypeName = `number`;
var Zt = class extends Rt {
    constructor(e, t, n, r) {
      super(e, t, n, r);
    }
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = (n - t) / (r - t),
        c = e * o;
      for (let e = c + o; c !== e; c += 4) j.slerpFlat(i, 0, a, c - o, a, c, s);
      return i;
    }
  },
  Qt = class extends Kt {
    constructor(e, t, n, r) {
      super(e, t, n, r);
    }
    InterpolantFactoryMethodLinear(e) {
      return new Zt(this.times, this.values, this.getValueSize(), e);
    }
  };
((Qt.prototype.ValueTypeName = `quaternion`),
  (Qt.prototype.InterpolantFactoryMethodSmooth = void 0));
var $t = class extends Kt {
  constructor(e, t, n) {
    super(e, t, n);
  }
};
(($t.prototype.ValueTypeName = `string`),
  ($t.prototype.ValueBufferType = Array),
  ($t.prototype.DefaultInterpolation = r),
  ($t.prototype.InterpolantFactoryMethodLinear = void 0),
  ($t.prototype.InterpolantFactoryMethodSmooth = void 0));
var en = class extends Kt {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
};
en.prototype.ValueTypeName = `vector`;
const tn = /* @__PURE__ */ RegExp(`[\\[\\]\\.:\\/]`, `g`),
  nn = /* @__PURE__ */ RegExp(
    `^((?:[^\\[\\]\\.:\\/]+[\\/:])*)([^\\[\\]:\\/]+)?(?:\\.([^\\[\\]\\.:\\/]+)(?:\\[(.+)\\])?)?\\.([^\\[\\]\\.:\\/]+)(?:\\[(.+)\\])?$`,
  ),
  rn = [`material`, `materials`, `bones`, `map`];
var an = class {
    constructor(e, t, n) {
      let r = n || R.parseTrackName(t);
      ((this._targetGroup = e), (this._bindings = e.subscribe_(t, r)));
    }
    getValue(e, t) {
      this.bind();
      let n = this._targetGroup.nCachedObjects_,
        r = this._bindings[n];
      r !== void 0 && r.getValue(e, t);
    }
    setValue(e, t) {
      let n = this._bindings;
      for (
        let r = this._targetGroup.nCachedObjects_, i = n.length;
        r !== i;
        ++r
      )
        n[r].setValue(e, t);
    }
    bind() {
      let e = this._bindings;
      for (
        let t = this._targetGroup.nCachedObjects_, n = e.length;
        t !== n;
        ++t
      )
        e[t].bind();
    }
    unbind() {
      let e = this._bindings;
      for (
        let t = this._targetGroup.nCachedObjects_, n = e.length;
        t !== n;
        ++t
      )
        e[t].unbind();
    }
  },
  R = class e {
    constructor(t, n, r) {
      ((this.path = n),
        (this.parsedPath = r || e.parseTrackName(n)),
        (this.node = e.findNode(t, this.parsedPath.nodeName)),
        (this.rootNode = t),
        (this.getValue = this._getValue_unbound),
        (this.setValue = this._setValue_unbound));
    }
    static create(t, n, r) {
      return t && t.isAnimationObjectGroup
        ? new e.Composite(t, n, r)
        : new e(t, n, r);
    }
    static sanitizeNodeName(e) {
      return e.replace(/\s/g, `_`).replace(tn, ``);
    }
    static parseTrackName(e) {
      let t = nn.exec(e);
      if (t === null)
        throw Error(`THREE.PropertyBinding: Cannot parse trackName: ` + e);
      let n = {
          nodeName: t[2],
          objectName: t[3],
          objectIndex: t[4],
          propertyName: t[5],
          propertyIndex: t[6],
        },
        r = n.nodeName && n.nodeName.lastIndexOf(`.`);
      if (r !== void 0 && r !== -1) {
        let e = n.nodeName.substring(r + 1);
        rn.indexOf(e) !== -1 &&
          ((n.nodeName = n.nodeName.substring(0, r)), (n.objectName = e));
      }
      if (n.propertyName === null || n.propertyName.length === 0)
        throw Error(
          `THREE.PropertyBinding: can not parse propertyName from trackName: ` +
            e,
        );
      return n;
    }
    static findNode(e, t) {
      if (
        t === void 0 ||
        t === `` ||
        t === `.` ||
        t === -1 ||
        t === e.name ||
        t === e.uuid
      )
        return e;
      if (e.skeleton) {
        let n = e.skeleton.getBoneByName(t);
        if (n !== void 0) return n;
      }
      if (e.children) {
        let n = function (e) {
            for (let r = 0; r < e.length; r++) {
              let i = e[r];
              if (i.name === t || i.uuid === t) return i;
              let a = n(i.children);
              if (a) return a;
            }
            return null;
          },
          r = n(e.children);
        if (r) return r;
      }
      return null;
    }
    _getValue_unavailable() {}
    _setValue_unavailable() {}
    _getValue_direct(e, t) {
      e[t] = this.targetObject[this.propertyName];
    }
    _getValue_array(e, t) {
      let n = this.resolvedProperty;
      for (let r = 0, i = n.length; r !== i; ++r) e[t++] = n[r];
    }
    _getValue_arrayElement(e, t) {
      e[t] = this.resolvedProperty[this.propertyIndex];
    }
    _getValue_toArray(e, t) {
      this.resolvedProperty.toArray(e, t);
    }
    _setValue_direct(e, t) {
      this.targetObject[this.propertyName] = e[t];
    }
    _setValue_direct_setNeedsUpdate(e, t) {
      ((this.targetObject[this.propertyName] = e[t]),
        (this.targetObject.needsUpdate = !0));
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
      ((this.targetObject[this.propertyName] = e[t]),
        (this.targetObject.matrixWorldNeedsUpdate = !0));
    }
    _setValue_array(e, t) {
      let n = this.resolvedProperty;
      for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
    }
    _setValue_array_setNeedsUpdate(e, t) {
      let n = this.resolvedProperty;
      for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
      this.targetObject.needsUpdate = !0;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
      let n = this.resolvedProperty;
      for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
      this.targetObject.matrixWorldNeedsUpdate = !0;
    }
    _setValue_arrayElement(e, t) {
      this.resolvedProperty[this.propertyIndex] = e[t];
    }
    _setValue_arrayElement_setNeedsUpdate(e, t) {
      ((this.resolvedProperty[this.propertyIndex] = e[t]),
        (this.targetObject.needsUpdate = !0));
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
      ((this.resolvedProperty[this.propertyIndex] = e[t]),
        (this.targetObject.matrixWorldNeedsUpdate = !0));
    }
    _setValue_fromArray(e, t) {
      this.resolvedProperty.fromArray(e, t);
    }
    _setValue_fromArray_setNeedsUpdate(e, t) {
      (this.resolvedProperty.fromArray(e, t),
        (this.targetObject.needsUpdate = !0));
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
      (this.resolvedProperty.fromArray(e, t),
        (this.targetObject.matrixWorldNeedsUpdate = !0));
    }
    _getValue_unbound(e, t) {
      (this.bind(), this.getValue(e, t));
    }
    _setValue_unbound(e, t) {
      (this.bind(), this.setValue(e, t));
    }
    bind() {
      let t = this.node,
        n = this.parsedPath,
        r = n.objectName,
        i = n.propertyName,
        a = n.propertyIndex;
      if (
        (t || ((t = e.findNode(this.rootNode, n.nodeName)), (this.node = t)),
        (this.getValue = this._getValue_unavailable),
        (this.setValue = this._setValue_unavailable),
        !t)
      ) {
        y(
          `PropertyBinding: No target node found for track: ` + this.path + `.`,
        );
        return;
      }
      if (r) {
        let e = n.objectIndex;
        switch (r) {
          case `materials`:
            if (!t.material) {
              b(
                `PropertyBinding: Can not bind to material as node does not have a material.`,
                this,
              );
              return;
            }
            if (!t.material.materials) {
              b(
                `PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,
                this,
              );
              return;
            }
            t = t.material.materials;
            break;
          case `bones`:
            if (!t.skeleton) {
              b(
                `PropertyBinding: Can not bind to bones as node does not have a skeleton.`,
                this,
              );
              return;
            }
            t = t.skeleton.bones;
            for (let n = 0; n < t.length; n++)
              if (t[n].name === e) {
                e = n;
                break;
              }
            break;
          case `map`:
            if (`map` in t) {
              t = t.map;
              break;
            }
            if (!t.material) {
              b(
                `PropertyBinding: Can not bind to material as node does not have a material.`,
                this,
              );
              return;
            }
            if (!t.material.map) {
              b(
                `PropertyBinding: Can not bind to material.map as node.material does not have a map.`,
                this,
              );
              return;
            }
            t = t.material.map;
            break;
          default:
            if (t[r] === void 0) {
              b(
                `PropertyBinding: Can not bind to objectName of node undefined.`,
                this,
              );
              return;
            }
            t = t[r];
        }
        if (e !== void 0) {
          if (t[e] === void 0) {
            b(
              `PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,
              this,
              t,
            );
            return;
          }
          t = t[e];
        }
      }
      let o = t[i];
      if (o === void 0) {
        let e = n.nodeName;
        b(
          `PropertyBinding: Trying to update property for track: ` +
            e +
            `.` +
            i +
            ` but it wasn't found.`,
          t,
        );
        return;
      }
      let s = this.Versioning.None;
      ((this.targetObject = t),
        t.isMaterial === !0
          ? (s = this.Versioning.NeedsUpdate)
          : t.isObject3D === !0 &&
            (s = this.Versioning.MatrixWorldNeedsUpdate));
      let c = this.BindingType.Direct;
      if (a !== void 0) {
        if (i === `morphTargetInfluences`) {
          if (!t.geometry) {
            b(
              `PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,
              this,
            );
            return;
          }
          if (!t.geometry.morphAttributes) {
            b(
              `PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,
              this,
            );
            return;
          }
          t.morphTargetDictionary[a] !== void 0 &&
            (a = t.morphTargetDictionary[a]);
        }
        ((c = this.BindingType.ArrayElement),
          (this.resolvedProperty = o),
          (this.propertyIndex = a));
      } else
        o.fromArray !== void 0 && o.toArray !== void 0
          ? ((c = this.BindingType.HasFromToArray), (this.resolvedProperty = o))
          : Array.isArray(o)
            ? ((c = this.BindingType.EntireArray), (this.resolvedProperty = o))
            : (this.propertyName = i);
      ((this.getValue = this.GetterByBindingType[c]),
        (this.setValue = this.SetterByBindingTypeAndVersioning[c][s]));
    }
    unbind() {
      ((this.node = null),
        (this.getValue = this._getValue_unbound),
        (this.setValue = this._setValue_unbound));
    }
  };
((R.Composite = an),
  (R.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3,
  }),
  (R.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2,
  }),
  (R.prototype.GetterByBindingType = [
    R.prototype._getValue_direct,
    R.prototype._getValue_array,
    R.prototype._getValue_arrayElement,
    R.prototype._getValue_toArray,
  ]),
  (R.prototype.SetterByBindingTypeAndVersioning = [
    [
      R.prototype._setValue_direct,
      R.prototype._setValue_direct_setNeedsUpdate,
      R.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
    ],
    [
      R.prototype._setValue_array,
      R.prototype._setValue_array_setNeedsUpdate,
      R.prototype._setValue_array_setMatrixWorldNeedsUpdate,
    ],
    [
      R.prototype._setValue_arrayElement,
      R.prototype._setValue_arrayElement_setNeedsUpdate,
      R.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
    ],
    [
      R.prototype._setValue_fromArray,
      R.prototype._setValue_fromArray_setNeedsUpdate,
      R.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
    ],
  ]),
  class e {
    static {
      e.prototype.isMatrix2 = !0;
    }
    constructor(e, t, n, r) {
      ((this.elements = [1, 0, 0, 1]), e !== void 0 && this.set(e, t, n, r));
    }
    identity() {
      return (this.set(1, 0, 0, 1), this);
    }
    fromArray(e, t = 0) {
      for (let n = 0; n < 4; n++) this.elements[n] = e[n + t];
      return this;
    }
    set(e, t, n, r) {
      let i = this.elements;
      return ((i[0] = e), (i[2] = t), (i[1] = n), (i[3] = r), this);
    }
  },
  typeof __THREE_DEVTOOLS__ < `u` &&
    __THREE_DEVTOOLS__.dispatchEvent(
      new CustomEvent(`register`, { detail: { revision: `186` } }),
    ),
  typeof window < `u` &&
    (window.__THREE__
      ? y(`WARNING: Multiple instances of Three.js being imported.`)
      : (window.__THREE__ = `186`)));
const z = {
  hips: 0,
  spine: 1,
  chest: 2,
  neck: 3,
  head: 4,
  armL: 5,
  foreL: 6,
  handL: 7,
  armR: 8,
  foreR: 9,
  handR: 10,
  thighL: 11,
  shinL: 12,
  footL: 13,
  thighR: 14,
  shinR: 15,
  footR: 16,
  shoulderL: 17,
  shoulderR: 18,
  fingersL: 19,
  fingersR: 20,
  hair: 21,
  lidL: 22,
  lidR: 23,
  jaw: 24,
  eyeL: 25,
  eyeR: 26,
};
(Object.keys(z).sort((e, t) => z[e] - z[t]),
  z.hips,
  z.spine,
  z.chest,
  z.neck,
  z.shoulderL,
  z.armL,
  z.foreL,
  z.shoulderR,
  z.armR,
  z.foreR,
  z.hips,
  z.thighL,
  z.shinL,
  z.hips,
  z.thighR,
  z.shinR,
  z.chest,
  z.chest,
  z.handL,
  z.handR,
  z.head,
  z.head,
  z.head,
  z.head,
  z.head,
  z.head);
const B = {
    pelvis: 0,
    torso: 1,
    head: 2,
    lUpper: 3,
    lFore: 4,
    rUpper: 5,
    rFore: 6,
    lThigh: 7,
    lShin: 8,
    rThigh: 9,
    rShin: 10,
    rItem: 11,
    lItem: 12,
    static: 13,
  },
  on = [
    B.pelvis,
    B.torso,
    B.torso,
    B.head,
    B.head,
    B.lUpper,
    B.lFore,
    B.lFore,
    B.rUpper,
    B.rFore,
    B.rFore,
    B.lThigh,
    B.lShin,
    B.lShin,
    B.rThigh,
    B.rShin,
    B.rShin,
    B.torso,
    B.torso,
    B.lFore,
    B.rFore,
    B.head,
    B.head,
    B.head,
    B.head,
    B.head,
    B.head,
  ],
  V = {
    cloth: 0,
    skin: 1,
    hair: 2,
    eye: 3,
    gloss: 4,
    metal: 5,
    screen: 6,
    reflect: 7,
    lens: 8,
    satin: 9,
  },
  sn = new N(),
  cn = new M(),
  ln = new M(),
  un = new ne(),
  dn = [0, 0],
  fn = { i: [0, 0, 0, 0], w: [1, 0, 0, 0] },
  pn = { x: 0, y: 0, w: 0, h: 0 };
let mn = /* @__PURE__ */ new Float64Array(3072),
  hn = /* @__PURE__ */ new Float64Array(64),
  gn = /* @__PURE__ */ new Float64Array(64),
  _n = /* @__PURE__ */ new Int32Array(6144),
  vn = /* @__PURE__ */ new Float64Array(3072),
  yn = /* @__PURE__ */ new Int32Array(1024),
  bn = /* @__PURE__ */ new Int32Array(3072),
  xn = /* @__PURE__ */ new Int32Array(2048);
function Sn(e, t) {
  return e.length >= t ? e : new Float64Array(Math.max(t, e.length * 2));
}
function Cn(e, t) {
  return e.length >= t ? e : new Int32Array(Math.max(t, e.length * 2));
}
let wn = -1,
  Tn = 0,
  En = 0,
  Dn = 0;
var On = class {
  blank = pn;
  textured = !0;
  nv = 0;
  n0 = 0;
  n1 = 0;
  cap;
  _pos;
  _nor;
  _col;
  _uv;
  _rect;
  _surf;
  _si;
  _sw;
  _part;
  _glow;
  _i0;
  _i1;
  views = {};
  _idxV = null;
  constructor(e = 2048) {
    let t = (this.cap = Math.max(64, e | 0));
    ((this._pos = new Float32Array(t * 3)),
      (this._nor = new Float32Array(t * 3)),
      (this._col = new Float32Array(t * 3)),
      (this._uv = new Float32Array(t * 2)),
      (this._rect = new Float32Array(t * 4)),
      (this._surf = new Float32Array(t * 4)),
      (this._si = new Uint16Array(t * 4)),
      (this._sw = new Float32Array(t * 4)),
      (this._part = new Float32Array(t)),
      (this._glow = new Float32Array(t)),
      (this._i0 = new Uint32Array(t * 3)),
      (this._i1 = /* @__PURE__ */ new Uint32Array(256)));
  }
  reset() {
    ((this.nv = this.n0 = this.n1 = 0), (this._idxV = null));
  }
  mark() {
    return [this.nv, this.n0, this.n1];
  }
  rollback(e) {
    ((this.nv = e[0]), (this.n0 = e[1]), (this.n1 = e[2]), (this._idxV = null));
  }
  get vertexCount() {
    return this.nv;
  }
  get triangleCount() {
    return (this.n0 + this.n1) / 3;
  }
  view(e, t, n) {
    let r = this.views[e];
    if (r && r.length === n && r.buffer === t.buffer) return r;
    let i = t.subarray(0, n);
    return ((this.views[e] = i), i);
  }
  get pos() {
    return this.view(`pos`, this._pos, this.nv * 3);
  }
  get nor() {
    return this.view(`nor`, this._nor, this.nv * 3);
  }
  get col() {
    return this.view(`col`, this._col, this.nv * 3);
  }
  get uv() {
    return this.view(`uv`, this._uv, this.nv * 2);
  }
  get rect() {
    return this.view(`rect`, this._rect, this.nv * 4);
  }
  get surf() {
    return this.view(`surf`, this._surf, this.nv * 4);
  }
  get si() {
    return this.view(`si`, this._si, this.nv * 4);
  }
  get sw() {
    return this.view(`sw`, this._sw, this.nv * 4);
  }
  get part() {
    return this.view(`part`, this._part, this.nv);
  }
  get glow() {
    return this.view(`glow`, this._glow, this.nv);
  }
  get idx() {
    let e = this._idxV;
    return e &&
      e[0].length === this.n0 &&
      e[1].length === this.n1 &&
      e[0].buffer === this._i0.buffer &&
      e[1].buffer === this._i1.buffer
      ? e
      : (this._idxV = [
          this._i0.subarray(0, this.n0),
          this._i1.subarray(0, this.n1),
        ]);
  }
  reserve(e) {
    let t = this.nv + e;
    if (t <= this.cap) return;
    let n = this.cap;
    for (; n < t;) n *= 2;
    let r = (e, t) => {
      let r = new e.constructor(n * t);
      return (r.set(e.subarray(0, this.nv * t)), r);
    };
    ((this._pos = r(this._pos, 3)),
      (this._nor = r(this._nor, 3)),
      (this._col = r(this._col, 3)),
      (this._uv = r(this._uv, 2)),
      (this._rect = r(this._rect, 4)),
      (this._surf = r(this._surf, 4)),
      (this._si = r(this._si, 4)),
      (this._sw = r(this._sw, 4)),
      (this._part = r(this._part, 1)),
      (this._glow = r(this._glow, 1)),
      (this.cap = n));
  }
  pushTris(e, t, n) {
    let r = n ? this._i1 : this._i0,
      i = n ? this.n1 : this.n0;
    if (i + t > r.length) {
      let e = r.length;
      for (; e < i + t;) e *= 2;
      let a = new Uint32Array(e);
      (a.set(r.subarray(0, i)), (r = a), n ? (this._i1 = a) : (this._i0 = a));
    }
    for (let n = 0; n < t; n++) r[i + n] = e[n];
    n ? (this.n1 += t) : (this.n0 += t);
  }
  pushVertex(e, t, n, r, i, a, o) {
    let s = this.nv++,
      c = s * 2,
      l = s * 3,
      u = s * 4,
      d = this._pos;
    ((d[l] = e), (d[l + 1] = t), (d[l + 2] = n));
    let f, p, m;
    typeof a.color == `number`
      ? (a.color !== wn &&
          (sn.setHex(a.color),
          (wn = a.color),
          (Tn = sn.r),
          (En = sn.g),
          (Dn = sn.b)),
        (f = Tn),
        (p = En),
        (m = Dn))
      : (a.color(e, t, n, r, i, sn), (f = sn.r), (p = sn.g), (m = sn.b));
    let h = this._col;
    ((h[l] = f * o), (h[l + 1] = p * o), (h[l + 2] = m * o));
    let g = fn;
    typeof a.skin == `number`
      ? ((g.i[0] = a.skin),
        (g.i[1] = g.i[2] = g.i[3] = 0),
        (g.w[0] = 1),
        (g.w[1] = g.w[2] = g.w[3] = 0))
      : ((g.i[0] = g.i[1] = g.i[2] = g.i[3] = 0),
        (g.w[0] = 1),
        (g.w[1] = g.w[2] = g.w[3] = 0),
        a.skin(e, t, n, r, i, g));
    let _ = g.w[0] + g.w[1] + g.w[2] + g.w[3];
    _ > 1e-6 || ((g.w[0] = 1), (g.w[1] = g.w[2] = g.w[3] = 0), (_ = 1));
    let v = 0;
    for (let e = 0; e < 4; e++)
      ((g.i[e] < 0 || g.i[e] >= 27) && (g.i[e] = 0),
        g.w[e] > g.w[v] && (v = e));
    let y = this._si,
      b = this._sw;
    ((y[u] = g.i[0]),
      (y[u + 1] = g.i[1]),
      (y[u + 2] = g.i[2]),
      (y[u + 3] = g.i[3]),
      (b[u] = g.w[0] / _),
      (b[u + 1] = g.w[1] / _),
      (b[u + 2] = g.w[2] / _),
      (b[u + 3] = g.w[3] / _),
      (this._part[s] = a.part ?? on[g.i[v]]),
      (this._glow[s] = a.glow ?? 0));
    let x =
        a.rough === void 0
          ? 0.8
          : typeof a.rough == `number`
            ? a.rough
            : a.rough(e, t, n, r, i),
      S =
        a.emissive ??
        (typeof a.bump == `function` ? a.bump(e, t, n, r, i) : a.bump) ??
        0,
      C = this._uv,
      w = this._rect,
      T = this._surf,
      E = this.textured ? a.tex : void 0,
      D = E ? E.rect : this.blank;
    (E
      ? (E.uv(e, t, n, r, i, dn), (C[c] = dn[0]), (C[c + 1] = dn[1]))
      : ((C[c] = 0.5), (C[c + 1] = 0.5)),
      (w[u] = D.x),
      (w[u + 1] = D.y),
      (w[u + 2] = D.w),
      (w[u + 3] = D.h),
      (T[u] = a.kind ?? 0),
      (T[u + 1] = x),
      (T[u + 2] = E ? E.mode : 0),
      (T[u + 3] = S));
  }
  grid(e, t) {
    let { nu: n, nv: r, closed: i } = e,
      a = n + 1,
      o = this.nv,
      s = (r + 1) * a;
    this.reserve(s + 2);
    let c = (mn = Sn(mn, s * 3)),
      l = (hn = Sn(hn, a)),
      u = (gn = Sn(gn, r + 1));
    for (let t = 0; t <= r; t++) {
      let n = t / r;
      u[t] = e.vWarp ? e.vWarp(n) : n;
    }
    for (let t = 0; t < a; t++) {
      let r = t / n;
      l[t] = e.uWarp ? e.uWarp(r) : r;
    }
    for (let t = 0, o = 0; t <= r; t++)
      for (let r = 0; r < a; r++, o += 3)
        (e.point(i && r === n ? l[0] : l[r], u[t], cn),
          (c[o] = cn.x),
          (c[o + 1] = cn.y),
          (c[o + 2] = cn.z));
    let d = t.shade ?? 0;
    for (let e = 0; e <= r; e++)
      for (let r = 0; r < a; r++) {
        let o = (e * a + r) * 3,
          s = i && r === n ? 1 : l[r];
        this.pushVertex(
          c[o],
          c[o + 1],
          c[o + 2],
          s,
          u[e],
          t,
          1 - d * (1 - u[e]),
        );
      }
    let f = (_n = Cn(_n, n * r * 6 + n * 6)),
      p = 0,
      m = !!e.invert != !!t.flip;
    for (let t = 0; t < r; t++)
      for (let r = 0; r < n; r++) {
        if (e.skip && e.skip(r, t)) continue;
        let n = o + t * a + r,
          i = n + 1,
          s = n + a,
          c = s + 1;
        m
          ? ((f[p++] = n),
            (f[p++] = s),
            (f[p++] = i),
            (f[p++] = i),
            (f[p++] = s),
            (f[p++] = c))
          : ((f[p++] = n),
            (f[p++] = i),
            (f[p++] = s),
            (f[p++] = i),
            (f[p++] = c),
            (f[p++] = s));
      }
    let h = (e, r) => {
      let i = 0,
        s = 0,
        l = 0;
      for (let t = 0; t < n; t++) {
        let n = (e * a + t) * 3;
        ((i += c[n]), (s += c[n + 1]), (l += c[n + 2]));
      }
      ((i /= n), (s /= n), (l /= n));
      let u = this.nv;
      this.pushVertex(i, s, l, 0.5, +!!r, t, 1 - d * +!r);
      for (let t = 0; t < n; t++) {
        let n = o + e * a + t,
          i = n + 1;
        ((f[p++] = u),
          r === m
            ? ((f[p++] = n), (f[p++] = i))
            : ((f[p++] = i), (f[p++] = n)));
      }
    };
    return (
      e.cap0 && h(0, !1),
      e.cap1 && h(r, !0),
      this.computeNormals(o, this.nv, f, p),
      this.pushTris(f, p, +!!t.transparent),
      o
    );
  }
  geo(e, t, n, r = !1) {
    let i = e.attributes.position,
      a = e.attributes.normal,
      o = e.attributes.uv,
      s = this.nv,
      c = i.count;
    this.reserve(c);
    let l = 1 / 0,
      u = -1 / 0,
      d = (mn = Sn(mn, c * 3));
    for (let e = 0; e < c; e++)
      (cn.fromBufferAttribute(i, e),
        t && cn.applyMatrix4(t),
        (d[e * 3] = cn.x),
        (d[e * 3 + 1] = cn.y),
        (d[e * 3 + 2] = cn.z),
        cn.y < l && (l = cn.y),
        cn.y > u && (u = cn.y));
    let f = n.shade ?? 0;
    for (let e = 0; e < c; e++) {
      let t = d[e * 3],
        r = d[e * 3 + 1],
        i = d[e * 3 + 2],
        a = u > l ? (r - l) / (u - l) : 1,
        s = o ? o.getX(e) : 0,
        c = o ? o.getY(e) : 0;
      this.pushVertex(t, r, i, s, c, n, 1 - f * (1 - a));
    }
    let p = e.index ? e.index.array : null,
      m = p ? p.length : c - (c % 3),
      h = (_n = Cn(_n, m)),
      g = 0;
    for (let e = 0; e < m; e += 3) {
      let t = p ? p[e] : e,
        r = p ? p[e + 1] : e + 1,
        i = p ? p[e + 2] : e + 2;
      ((h[g++] = s + t),
        (h[g++] = s + (n.flip ? i : r)),
        (h[g++] = s + (n.flip ? r : i)));
    }
    if (r && a) {
      t && un.getNormalMatrix(t);
      let e = this._nor;
      for (let r = 0; r < a.count; r++) {
        (ln.fromBufferAttribute(a, r),
          t && ln.applyMatrix3(un),
          ln.normalize(),
          n.flip && ln.negate());
        let i = (s + r) * 3;
        ((e[i] = ln.x), (e[i + 1] = ln.y), (e[i + 2] = ln.z));
      }
    } else this.computeNormals(s, this.nv, h, g);
    (this.pushTris(h, g, +!!n.transparent), e.dispose());
  }
  computeNormals(e, t, n, r) {
    let i = t - e,
      a = this._pos,
      o = (bn = Cn(bn, i * 3)),
      s = (yn = Cn(yn, i)),
      c = 16;
    for (; c < i * 2;) c <<= 1;
    let l = (xn = Cn(xn, c));
    l.fill(-1, 0, c);
    let u = c - 1;
    for (let t = 0; t < i; t++) {
      let n = (e + t) * 3,
        r = Math.round(a[n] * 2e4),
        i = Math.round(a[n + 1] * 2e4),
        c = Math.round(a[n + 2] * 2e4);
      ((o[t * 3] = r), (o[t * 3 + 1] = i), (o[t * 3 + 2] = c));
      let d =
          (Math.imul(r, 73856093) ^
            Math.imul(i, 19349663) ^
            Math.imul(c, 83492791)) &
          u,
        f = -1;
      for (;;) {
        let e = l[d];
        if (e < 0) {
          ((l[d] = t), (f = t));
          break;
        }
        if (o[e * 3] === r && o[e * 3 + 1] === i && o[e * 3 + 2] === c) {
          f = e;
          break;
        }
        d = (d + 1) & u;
      }
      s[t] = f;
    }
    let d = (vn = Sn(vn, i * 3));
    d.fill(0, 0, i * 3);
    for (let t = 0; t < r; t += 3) {
      let r = n[t],
        i = n[t + 1],
        o = n[t + 2],
        c = a[r * 3],
        l = a[r * 3 + 1],
        u = a[r * 3 + 2],
        f = a[i * 3] - c,
        p = a[i * 3 + 1] - l,
        m = a[i * 3 + 2] - u,
        h = a[o * 3] - c,
        g = a[o * 3 + 1] - l,
        _ = a[o * 3 + 2] - u,
        v = p * _ - m * g,
        y = m * h - f * _,
        b = f * g - p * h,
        x = s[r - e] * 3;
      ((d[x] += v),
        (d[x + 1] += y),
        (d[x + 2] += b),
        (x = s[i - e] * 3),
        (d[x] += v),
        (d[x + 1] += y),
        (d[x + 2] += b),
        (x = s[o - e] * 3),
        (d[x] += v),
        (d[x + 1] += y),
        (d[x + 2] += b));
    }
    let f = this._nor;
    for (let t = 0; t < i; t++) {
      let n = s[t] * 3,
        r = d[n],
        i = d[n + 1],
        a = d[n + 2],
        o = Math.sqrt(r * r + i * i + a * a) || 1,
        c = (e + t) * 3;
      ((f[c] = r / o), (f[c + 1] = i / o), (f[c + 2] = a / o));
    }
  }
  tint(e, t, n) {
    let r = this._pos;
    for (let i = e; i < t; i++)
      n(r[i * 3], r[i * 3 + 1], r[i * 3 + 2], this._col, i * 3);
  }
  heroArrays() {
    let e = this.nv,
      t = this.n0 + this.n1,
      n = e > 65535 ? new Uint32Array(t) : new Uint16Array(t);
    return (
      n.set(this._i0.subarray(0, this.n0)),
      n.set(this._i1.subarray(0, this.n1), this.n0),
      {
        pos: this._pos.slice(0, e * 3),
        nor: this._nor.slice(0, e * 3),
        col: this._col.slice(0, e * 3),
        uv: this._uv.slice(0, e * 2),
        rect: this._rect.slice(0, e * 4),
        surf: this._surf.slice(0, e * 4),
        si: this._si.slice(0, e * 4),
        sw: this._sw.slice(0, e * 4),
        idx: n,
        n0: this.n0,
      }
    );
  }
  buildHero() {
    return kn(this.heroArrays());
  }
  buildCrowd() {
    let e = new Dt(),
      t = this.nv;
    (e.setAttribute(`position`, new F(this._pos.slice(0, t * 3), 3)),
      e.setAttribute(`normal`, new F(this._nor.slice(0, t * 3), 3)),
      e.setAttribute(`color`, new F(this._col.slice(0, t * 3), 3)));
    let n = this._part.slice(0, t),
      r = new Float32Array(t * 4);
    for (let e = 0; e < t; e++)
      ((r[e * 4] = n[e]),
        (r[e * 4 + 1] = 7),
        (r[e * 4 + 2] = 0),
        (r[e * 4 + 3] = this._glow[e]));
    (e.setAttribute(`part`, new F(n, 1)), e.setAttribute(`aInfo`, new F(r, 4)));
    let i = this.n0 + this.n1,
      a = t > 65535 ? new Uint32Array(i) : new Uint16Array(i);
    return (
      a.set(this._i0.subarray(0, this.n0)),
      a.set(this._i1.subarray(0, this.n1), this.n0),
      e.setIndex(new F(a, 1)),
      e.computeBoundingSphere(),
      e.computeBoundingBox(),
      e
    );
  }
};
function kn(e) {
  let t = new Dt();
  (t.setAttribute(`position`, new F(e.pos, 3)),
    t.setAttribute(`normal`, new F(e.nor, 3)),
    t.setAttribute(`color`, new F(e.col, 3)),
    t.setAttribute(`uv`, new F(e.uv, 2)),
    t.setAttribute(`uvRect`, new F(e.rect, 4)),
    t.setAttribute(`surf`, new F(e.surf, 4)),
    t.setAttribute(`skinIndex`, new F(e.si, 4)),
    t.setAttribute(`skinWeight`, new F(e.sw, 4)),
    t.setIndex(new F(e.idx, 1)),
    t.addGroup(0, e.n0, 0),
    e.idx.length > e.n0 && t.addGroup(e.n0, e.idx.length - e.n0, 1));
  let n = e.bounds;
  return (
    n && n.length >= 10
      ? ((t.boundingSphere = new bt(new M(n[0], n[1], n[2]), n[3])),
        (t.boundingBox = new Qe(
          new M(n[4], n[5], n[6]),
          new M(n[7], n[8], n[9]),
        )))
      : (t.computeBoundingSphere(), t.computeBoundingBox()),
    t
  );
}
function H(e, t, n, r) {
  ((e.i[0] = t),
    (e.i[1] = n),
    (e.w[0] = 1 - r),
    (e.w[1] = r),
    (e.i[2] = e.i[3] = 0),
    (e.w[2] = e.w[3] = 0));
}
function U(e, t, n) {
  let r = Math.min(1, Math.max(0, (n - e) / (t - e)));
  return r * r * (3 - 2 * r);
}
function An(e, t, n, r, i) {
  let a = 0;
  for (; a < n.length && i < n[a];) a++;
  let o = -1,
    s = 1 / 0;
  if (a - 1 >= 0) {
    let e = Math.abs(i - n[a - 1]);
    e < s && ((s = e), (o = a - 1));
  }
  if (a < n.length) {
    let e = Math.abs(i - n[a]);
    e < s && ((s = e), (o = a));
  }
  if (o < 0 || s > r) {
    H(e, t[a], t[a], 0);
    return;
  }
  let c = (n[o] + r - i) / (2 * r),
    l = c < 0 ? 0 : c > 1 ? 1 : c * c * (3 - 2 * c);
  H(e, t[o], t[o + 1], l);
}
function jn(e, t, n) {
  if (n <= 0) return;
  for (let t = 0; t < 4; t++) e.w[t] *= 1 - n;
  for (let r = 0; r < 4; r++)
    if (e.i[r] === t && e.w[r] > 0) {
      e.w[r] += n;
      return;
    }
  let r = 0;
  for (let t = 1; t < 4; t++) e.w[t] < e.w[r] && (r = t);
  ((e.i[r] = t), (e.w[r] = n));
}
const Mn = Math.PI * 2,
  W = (e, t) => Math.exp(-(e * e) / (t * t)),
  Nn = (e, t, n) => e + (t - e) * n,
  Pn = (e, t, n) => (e < t ? t : e > n ? n : e);
function Fn(e, t) {
  let n = Math.max(0, 1 - t * t);
  return e.eyeD - e.eyeH * n ** 0.62 * (1 - 0.14 * t) - e.tilt * t;
}
function In(e, t) {
  let n = Math.max(0, 1 - t * t);
  return e.eyeD + e.eyeH * 0.62 * n ** 0.9 * (1 + 0.12 * t) - e.tilt * t;
}
function Ln(e, t) {
  return e.mouthD - e.smile * 0.011 * t * t + 0.0015 * W(t, 0.35);
}
function Rn(e, t) {
  let n = Math.min(1, Math.abs(t));
  return (
    e.full *
    (0.02 * (1 - n * n) ** 0.55 +
      0.0042 * W(n - 0.3, 0.16) -
      0.0034 * W(t, 0.09)) *
    (1 - U(0.92, 1, n) * 0)
  );
}
function zn(e, t) {
  let n = Math.min(1, Math.abs(t));
  return e.full * 0.029 * (1 - n * n) ** 0.62;
}
function Bn(e, t) {
  let n = e.face,
    r = t.female,
    i = t.headH * (0.975 + 0.05 * n.length),
    a = n.jaw,
    o = +!!t.student,
    s = i / 0.23,
    c = !r,
    l = (r ? 0.86 : 0.93) + 0.16 * a,
    u = 0.37 + 0.012 * a,
    d = [
      [0, 0, 0, 0, 0],
      [0.02, 0.13, 0.12, 0.15, 0.006],
      [0.06, 0.225, 0.212, 0.27, 0.006],
      [0.13, 0.292, 0.296, 0.36, 0.005],
      [0.22, 0.322, 0.345, 0.41, 0.003],
      [0.31, 0.333, 0.377, 0.43, 0.001],
      [0.4, 0.33, 0.399, 0.425, 0],
      [0.47, 0.327, 0.406, 0.4, 0],
      [0.53, 0.33, 0.399, 0.372, 0],
      [0.6, 0.326 + 0.012 * (n.cheek - 0.5), 0.396, 0.325, 0],
      [0.67, 0.312 - 0.008 * (1 - a), 0.4, 0.255, 0],
      [0.75, 0.286 * Nn(1, l, 0.5), 0.404, 0.17, 0.002],
      [0.83, 0.25 * l, 0.396, 0.1, 0.006],
      [0.9, 0.206 * l, u + 0.008, 0.055, 0.013],
      [0.95, 0.156 * Nn(0.92, 1.12, a), u - 0.012, 0.035, 0.019],
      [0.985, 0.092 * Nn(0.92, 1.15, a), u - 0.058, 0.025, 0.025],
      [1, 0.035, u - 0.12, 0.018, 0.03],
    ],
    f = +!!r + 0.5 * o,
    p = d.map((e) => {
      let n = U(0.55, 0.95, e[0]),
        r = 1 - f * (0.045 * n + 0.06 * U(0.82, 0.97, e[0]));
      return [
        e[0],
        e[1] * i * (1 + 0.02 * (t.mass - 1)) * r,
        e[2] * i,
        e[3] * i,
        e[4] * i,
      ];
    });
  if (t.mass > 1)
    for (let e of p)
      e[0] > 0.6 && (e[1] *= 1 + 0.06 * (t.mass - 1) * U(0.6, 0.9, e[0]));
  let m = n.eyeSize,
    h = 0.7 + 0.6 * n.lips,
    g = {
      eyeT: 0.355 * n.eyeGap,
      eyeD: 0.52 + 0.01 * (n.length - 0.5),
      eyeW: 0.158 * m * (r ? 1.04 : 1),
      eyeH:
        0.0235 *
        m *
        (0.82 + 0.34 * n.lid) *
        (t.elder ? 0.85 : 1) *
        (r ? 1.06 : 1),
      tilt: n.eyeTilt * 0.05,
      irisR: 0.0058 * s * (0.95 + 0.1 * m),
      irisDrop: 0.004,
      browD: 0.448 - 0.012 * n.browArch,
      browIn: 0.1,
      browOut: 0.56,
      noseTipD: 0.665 + 0.03 * n.noseL,
      noseBaseD: 0.695 + 0.025 * n.noseL,
      noseW: 0.135 * (0.85 + 0.35 * n.noseW),
      mouthD: 0.782 + 0.012 * n.noseL,
      mouthW: 0.232 * n.mouthW * (r ? 0.96 : 1),
      chinD: 0.975,
      Theta: 1.15,
      d0: 0.1,
      d1: 1.06,
      mPerRad: 0.4 * i,
      mPerD: i,
      full: h,
      smile: n.smile,
    },
    _ = 1 - Pn((n.lid - 0.2) / 0.5, 0, 1),
    v = {
      crownY: t.H,
      cz: t.headC.z,
      hh: i,
      s,
      keys: p,
      nF: 2.25,
      lay: g,
      face: n,
      female: r,
      male: c,
      elder: t.elder,
      sock: 0.0034 * s,
      browRidge:
        (r ? 0.0012 : 0.0026) * s * (t.elder ? 1.25 : 1) * (o ? 0.7 : 1),
      frontal: (8e-4 + 8e-4 * o + (r ? 6e-4 : 0)) * s,
      temple: 0.0026 * s * (t.mass > 1.5 ? 0.4 : 1),
      cheekBone: (0.0028 + 0.0036 * n.cheek) * s,
      cheekFat:
        (0.0015 +
          0.003 * o +
          (r ? 0.0012 : 0) +
          0.0022 * Math.max(0, t.mass - 1)) *
        s,
      buccal:
        (t.mass > 1.4 || o
          ? 3e-4
          : 0.0014 + (t.elder ? 0.001 : 0) + (t.mass < 0.5 ? 6e-4 : 0)) * s,
      muzzle: 0.0036 * s,
      naso:
        (35e-5 +
          0.0012 * n.wrinkles +
          (t.elder ? 6e-4 : 0) +
          4e-4 * Math.max(0, n.smile)) *
        s,
      lipUp: (0.0014 + 0.0016 * n.lips) * s,
      lipLo: (0.0019 + 0.0022 * n.lips) * s,
      crease: 9e-4 * s,
      chin: (r ? 0.0024 : 0.0034) * s,
      chinSq: c ? 8e-4 * s * (0.5 + a) : 0,
      jawAngle: (c ? 0.0022 * (0.5 + a) : 6e-4) * s,
      lidTm: 0.00105 * s,
      lidUpMax: (0.0024 + 0.0014 * _ + (t.elder ? 8e-4 : 0)) * s,
      lidLoMax: 0.0017 * s,
      lidCrease: (1 - _) * 55e-5 * s,
      lidCreaseD: 0.009 + 0.008 * n.lid,
      aegyo: r && !t.elder ? 6e-4 * s : 2e-4 * s,
      eyes: [
        { c: new M(), r: 0.0122 * s * (0.94 + 0.06 * m), side: -1 },
        { c: new M(), r: 0.0122 * s * (0.94 + 0.06 * m), side: 1 },
      ],
    };
  for (let e of v.eyes) {
    let t = e.side * g.eyeT,
      n = g.eyeD + 0.003,
      r = Un(v, t, n) - 0.0011 * s,
      a = v.crownY - n * i;
    e.c.set(Math.sin(t) * r, a, Kn(v, n) - Math.cos(t) * r + e.r);
  }
  return v;
}
function Vn(e, t, n) {
  let r = e.length;
  if (n <= e[0][0]) return e[0][t];
  if (n >= e[r - 1][0]) return e[r - 1][t];
  let i = 0;
  for (; i < r - 2 && n > e[i + 1][0];) i++;
  let a = e[Math.max(0, i - 1)],
    o = e[i],
    s = e[i + 1],
    c = e[Math.min(r - 1, i + 2)],
    l = (n - o[0]) / (s[0] - o[0]),
    u = s[0] - o[0],
    d = ((s[t] - a[t]) / Math.max(1e-6, s[0] - a[0])) * u,
    f = ((c[t] - o[t]) / Math.max(1e-6, c[0] - o[0])) * u,
    p = l * l,
    m = p * l;
  return (
    (2 * m - 3 * p + 1) * o[t] +
    (m - 2 * p + l) * d +
    (-2 * m + 3 * p) * s[t] +
    (m - p) * f
  );
}
const Hn = (e, t) => {
  let n = (e - t) % Mn;
  return (n > Math.PI && (n -= Mn), n < -Math.PI && (n += Mn), n);
};
function Un(e, t, n) {
  let r = e.keys,
    i = Vn(r, 1, n),
    a = Vn(r, 2, n),
    o = Vn(r, 3, n),
    s = Math.sin(t),
    c = Math.cos(t),
    l = c >= 0 ? a : o;
  if (i < 1e-5 || l < 1e-5) return 0;
  let u = c >= 0 ? e.nF - 0.2 * U(0.35, 0.62, n) - 0.33 * U(0.62, 0.9, n) : 2,
    d = Math.abs(s) / i,
    f = Math.abs(c) / l;
  return 1 / (d ** +u + f ** +u) ** (1 / u);
}
function Wn(e, t, n) {
  let r = e.lay,
    i = t / r.mouthW,
    a = Math.abs(i);
  if (a > 1.8) return 0;
  let o = Ln(r, Math.min(1.2, a)),
    s = n - o,
    c = 1 - U(0.8, 1.22, a),
    l = 0;
  if (s < 0) {
    let t = Math.max(0.004, Rn(r, i)),
      n = -s / t,
      a;
    ((a =
      n <= 1
        ? 0.32 +
          0.68 *
            Math.sin(Math.min(1, n / 0.78) * Math.PI * 0.5) ** 0.8 *
            (n > 0.78 ? 1 - (0.1 * (n - 0.78)) / 0.22 : 1)
        : 0.9 * (1 - U(1, 2.3, n)) - 0.18 * W(n - 1.9, 0.5)),
      (l += e.lipUp * a * c));
  } else {
    let t = s / Math.max(0.005, zn(r, i)),
      n;
    ((n =
      t <= 1
        ? 0.3 +
          0.7 *
            Math.sin(Math.min(1, t / 0.5) * Math.PI * 0.5) *
            (t > 0.5 ? 1 - 0.42 * U(0.5, 1, t) : 1)
        : 0.58 * (1 - U(1, 1.75, t)) - 0.55 * W(t - 2, 0.55)),
      (l += e.lipLo * n * c));
  }
  ((l -= e.crease * W(s, 0.0022) * (1 - U(0.75, 1.1, a))),
    (l -= 0.0011 * e.s * W(a - 1.02, 0.14) * W(s, 0.012)));
  let u = r.noseBaseD + 0.006,
    d = o - Rn(r, i);
  if (n > u - 0.01 && n < d + 0.004) {
    let r = U(u - 0.01, u + 0.012, n) * (1 - U(d - 0.002, d + 0.004, n));
    l +=
      r * e.s * (-55e-5 * W(t, 0.024) + 35e-5 * W(Math.abs(t) - 0.052, 0.02));
  }
  return l;
}
function Gn(e, t, n) {
  let r = Un(e, t, n);
  if (Math.cos(t) <= 0) return r;
  let i = e.lay,
    a = e.s,
    o = Hn(t, 0),
    s = Math.abs(o),
    c = i.mPerRad;
  {
    let t = ((s - i.eyeT) * c) / (i.eyeW * c * 1.45),
      o =
        ((n - (i.eyeD - 0.004)) * e.hh) / (n < i.eyeD ? 0.017 * a : 0.013 * a);
    r -= e.sock * Math.exp(-(t * t + o * o));
  }
  if (
    ((r +=
      e.browRidge *
      W(s - (i.eyeT - 0.03), 0.27) *
      W(n - (i.browD + 0.012), 0.032)),
    (r += e.browRidge * 0.6 * W(o, 0.1) * W(n - 0.462, 0.03)),
    (r += e.frontal * W(s - 0.34, 0.24) * W(n - 0.27, 0.08)),
    (r -= e.temple * W(s - 1.18, 0.22) * W(n - 0.38, 0.09)),
    (r += e.cheekBone * W(s - 0.74, 0.22) * W(n - 0.6, 0.05)),
    (r += e.cheekBone * 0.35 * W(s - 1.15, 0.2) * W(n - 0.58, 0.035)),
    (r -= e.buccal * W(s - 0.9, 0.22) * W(n - 0.765, 0.07)),
    (r += e.cheekFat * W(s - 0.55, 0.28) * W(n - 0.72, 0.075)),
    (r += e.muzzle * W(o, 0.42) * W(n - 0.785, 0.075)),
    s < 0.6 && n > 0.62 && n < 0.9)
  ) {
    let t = i.noseW * 1.18 * c,
      o = (i.noseBaseD - 0.012) * e.hh,
      l = i.mouthW * 1.32 * c,
      u = (i.mouthD + 0.04) * e.hh,
      d = s * c,
      f = n * e.hh,
      p = l - t,
      m = u - o,
      h = Pn(((d - t) * p + (f - o) * m) / (p * p + m * m), 0, 1),
      g = t + p * h,
      _ = o + m * h,
      v = (d - g) * m - (f - _) * p > 0 ? 1 : -1,
      y = Math.hypot(d - g, f - _),
      b = U(-0.05, 0.1, h) * (1 - U(0.85, 1.15, h));
    ((r -= e.naso * W(y, 0.0022 * a) * b),
      v > 0 && (r += e.naso * 0.9 * W(y - 0.0042 * a, 0.0038 * a) * b));
  }
  return (
    (r += Wn(e, o, n)),
    (r += e.chin * W(o, 0.27) * W(n - 0.935, 0.042)),
    e.chinSq && (r += e.chinSq * W(s - 0.13, 0.085) * W(n - 0.95, 0.03)),
    (r += e.jawAngle * W(s - 1.22, 0.2) * W(n - 0.885, 0.05)),
    r
  );
}
function Kn(e, t) {
  return e.cz + Vn(e.keys, 4, t);
}
function qn(e, t) {
  let n = e.lay,
    r = Hn(t, 0);
  return {
    e: r < 0 ? e.eyes[0] : e.eyes[1],
    q: (Math.abs(r) - n.eyeT) / n.eyeW,
  };
}
function Jn(e, t, n) {
  let r = e.lay,
    i = Pn(t, -1, 1),
    a = Fn(r, i),
    o = In(r, i);
  if (n <= a) {
    let r = a - n,
      o = e.lidTm + (e.lidUpMax - e.lidTm) * U(0, 0.03, r);
    return (
      (o -=
        e.lidCrease *
        W(r - e.lidCreaseD * (1 - 0.25 * i * i), 0.0045) *
        (1 - U(0.7, 1.05, Math.abs(t)))),
      o
    );
  }
  if (n >= o) {
    let r = n - o;
    return (
      e.lidTm * 0.9 +
      (e.lidLoMax - e.lidTm * 0.9) * U(0, 0.03, r) +
      e.aegyo * W(r - 0.009, 0.007) * (1 - U(0.6, 1.05, Math.abs(t)))
    );
  }
  return 0;
}
function Yn(e, t, n) {
  let r = n - (e.lay.eyeD - 0.002),
    i = r < 0 ? 0.046 : 0.036;
  return 1 - U(0.78, 1.18, Math.hypot(t / (t < 0 ? 1.28 : 1.35), r / i));
}
const Xn = new M(),
  Zn = new M();
function Qn(e, t, n, r, i) {
  let a = Un(e, n, r);
  return (
    Zn.set(Math.sin(n) * a, e.crownY - r * e.hh, Kn(e, r) - Math.cos(n) * a),
    i.subVectors(Zn, t.c).normalize()
  );
}
function $n(e, t, n, r, i, a) {
  return (Qn(e, t, n, r, Xn), a.copy(t.c).addScaledVector(Xn, t.r + i));
}
const er = new M(),
  tr = new M();
function nr(e, t, n, r) {
  let i = Gn(e, t, n),
    a = e.crownY - n * e.hh;
  if (
    (er.set(Math.sin(t) * i, a, Kn(e, n) - Math.cos(t) * i), Math.cos(t) > 0.3)
  ) {
    let { e: a, q: o } = qn(e, t),
      s = Yn(e, o, n);
    if (s > 0) {
      $n(e, a, t, n, Jn(e, o, n), tr);
      let c = Kn(e, n),
        l = Math.hypot(tr.x, tr.z - c) >= i ? s : s * U(0.55, 1, s);
      r.lerpVectors(er, tr, l);
      let u = a.r + e.lidTm * 0.85,
        d = r.x - a.c.x,
        f = r.y - a.c.y,
        p = r.z - a.c.z,
        m = Math.hypot(d, f, p);
      return (
        m < u &&
          p < 0 &&
          r.set(a.c.x + (d / m) * u, a.c.y + (f / m) * u, a.c.z + (p / m) * u),
        r
      );
    }
  }
  return r.copy(er);
}
function rr(e, t, n, r = !0) {
  return r ? (nr(e, t, n, ir), Math.hypot(ir.x, ir.z - Kn(e, n))) : Un(e, t, n);
}
const ir = new M();
function G(e, t, n, r, i, a = !0) {
  let o = e.crownY - n * e.hh;
  if (!a) {
    let a = Un(e, t, n) + r;
    return i.set(
      Math.sin(t) * a,
      o + (r > 0 && n < 0.05 ? r * (1 - n / 0.05) : 0),
      Kn(e, n) - Math.cos(t) * a,
    );
  }
  return (
    nr(e, t, n, i),
    r !== 0 && ((i.x += Math.sin(t) * r), (i.z -= Math.cos(t) * r)),
    i
  );
}
function ar(e, t, n, r) {
  ((r[0] = 0.5 + Hn(t, 0) / (2 * e.Theta)),
    (r[1] = 1 - (n - e.d0) / (e.d1 - e.d0)));
}
const or = new M(),
  sr = new M(),
  cr = new M(),
  lr = new M();
function ur(e, t, n, r, i = 0) {
  let a = 0.004,
    o = 0.0035;
  (G(e, t - a, n, 0, or), G(e, t + a, n, 0, sr), sr.sub(or));
  let s = i > 0 ? n : Math.max(0, n - o),
    c = i < 0 ? n : Math.min(1, n + o);
  (G(e, t, s, 0, lr),
    G(e, t, c, 0, cr),
    cr.sub(lr),
    r.crossVectors(cr, sr).normalize(),
    G(e, t, n, 0, or));
  let l = or.x,
    u = or.z - Kn(e, n);
  return (r.x * l + r.z * u < 0 && l * l + u * u > 1e-8 && r.negate(), r);
}
function dr(e) {
  let t = [];
  if (e === 0) {
    for (let e = 0; e < 3; e++) t.push(-Math.PI + (e / 3) * (Math.PI - 1.2));
    for (let e = -1.2; e < 1.199999; e += 0.1715) t.push(e);
    for (let e = 0; e <= 3; e++) t.push(1.2 + (e / 3) * (Math.PI - 1.2));
  } else {
    for (let e = 0; e < 2; e++) t.push(-Math.PI + (e / 2) * (Math.PI - 1));
    for (let e = -1; e < 1 - 1e-6; e += 0.4) t.push(e);
    for (let e = 0; e <= 2; e++) t.push(1 + (e / 2) * (Math.PI - 1));
  }
  return t;
}
function fr(e) {
  return e === 0
    ? [
        0, 0.06, 0.17, 0.3, 0.41, 0.48, 0.525, 0.57, 0.62, 0.67, 0.72, 0.765,
        0.8, 0.845, 0.9, 0.955, 1,
      ]
    : [0, 0.12, 0.3, 0.46, 0.6, 0.72, 0.84, 0.94, 1];
}
const pr = [
    0, 0.08, 0.17, 0.26, 0.34, 0.4, 0.445, 0.475, 0.495, 0.505, 0.51, 0.515,
    0.525, 0.555, 0.6, 0.645, 0.705, 0.74, 0.76, 0.78, 0.78, 0.795, 0.815, 0.85,
    0.9, 0.945, 0.978, 1,
  ],
  mr = [0, 1, 2, 3, 4, 5, 6, 13, 14, 15, 16, 17, 22, 23, 24, 25, 26, 27],
  hr = [0, 2, 4, 6, 13, 15, 17, 23, 25, 27],
  gr = 1.95;
function _r(e, t) {
  let n = e.lay,
    r = Math.abs(t),
    i = pr.slice();
  i[16] = n.noseBaseD + 0.006;
  let a = (r - n.eyeT) / n.eyeW,
    o = Math.abs(a),
    s = o <= 1 ? 1 : 1 - U(1, a > 0 ? 2.7 : 2.25, o);
  if (s > 0) {
    let t = Pn(a, -1, 1),
      r = Fn(n, t),
      o = In(n, t),
      c = [
        Math.max(r - (0.029 + 0.008 * e.face.lid), i[6] + 0.006),
        r - 0.012,
        r - 0.0035,
        r,
        o,
        o + 0.0035,
        o + 0.026,
      ];
    for (let e = 0; e < 7; e++) i[7 + e] = Nn(i[7 + e], c[e], s);
  }
  let c = t / n.mouthW,
    l = Math.abs(c),
    u = l <= 1 ? 1 : 1 - U(1, 1.75, l);
  if (u > 0) {
    let e = Pn(c, -1, 1),
      t = Ln(n, e),
      r = Rn(n, e),
      a = zn(n, e),
      o = [0, t - r, t, t, t + a * 0.5, t + a, t + a + 0.032];
    o[0] = Nn(i[16], o[1], 0.5);
    for (let e = 0; e < 7; e++) i[17 + e] = Nn(i[17 + e], o[e], u);
    i[17] = Math.max(i[17], i[16] + 0.008);
  }
  for (let e = 1; e < i.length; e++) i[e] < i[e - 1] && (i[e] = i[e - 1]);
  return i;
}
function vr(e) {
  let t = e.lay,
    n = t.eyeT - t.eyeW,
    r = t.eyeT + t.eyeW,
    i = [n * 0.36, n * 0.7];
  for (let e of [-1, -0.5, 0.05, 0.55, 1]) i.push(t.eyeT + e * t.eyeW);
  for (let e = 1; e <= 6; e++) i.push(r + (gr - r) * (e / 6) ** 0.92);
  let a = [...i.map((e) => -e).reverse(), 0, ...i];
  return {
    th: a,
    eyeCol: a.map((e) => {
      let n = (Math.abs(e) - t.eyeT) / t.eyeW;
      return n >= -1.0001 && n <= 1.0001;
    }),
  };
}
const yr = new M(),
  K = new M(),
  br = new N();
function xr(e, t, n, r, i = !1, a = !1) {
  let o = e.lay,
    s = Math.max(0, Math.cos(t)),
    c = Math.abs(t) / o.mouthW,
    l = Ln(o, Math.min(1, c)),
    u = U(l - 0.004, l + 0.05, n) * U(0.1, 0.5, s) * (1 - U(0.985, 1, n) * 0.3);
  (i && (u = Math.max(u, 1 - U(0.9, 1.4, c))),
    a && (u = 0),
    H(r, z.head, z.jaw, u));
}
function Sr(e, t, n, r, i) {
  i.setHex(t);
  let a = Math.abs(Hn(n, 0)),
    o =
      W(a - 0.6, 0.3) * W(r - 0.66, 0.08) * 0.1 +
      W(a, 0.12) * W(r - 0.66, 0.05) * 0.08 +
      W(a, 0.25) * W(r - 0.93, 0.04) * 0.04;
  ((i.r += o * 0.32), (i.g -= o * 0.1), (i.b -= o * 0.08));
  let s = U(0.93, 1, r) * (1 - Math.cos(n) * 0.3) * 0.16;
  if (e) {
    let t = e.lay;
    ((s += 0.16 * W(a - (t.eyeT - t.eyeW * 0.95), 0.06) * W(r - t.eyeD, 0.03)),
      (s += 0.08 * W(a - t.eyeT, 0.2) * W(r - (Fn(t, 0) - 0.03), 0.014)),
      (s += 0.1 * W(a, 0.09) * W(r - (t.noseBaseD + 0.01), 0.012)));
    let n = a / t.mouthW;
    if (
      ((s += 0.14 * W(n - 1.03, 0.14) * W(r - Ln(t, 1), 0.012)),
      (s += 0.08 * W(a, 0.25) * W(r - (t.mouthD + 0.065), 0.014)),
      (s += 0.06 * W(a - 1.55, 0.18) * W(r - 0.58, 0.1)),
      e.male && !e.elder)
    ) {
      let e =
        U(0.7, 0.8, r) * W(a, 1) * (1 - W(n, 0.9) * W(r - t.mouthD, 0.03));
      ((i.r -= 0.03 * e), (i.g -= 0.015 * e));
    }
  }
  return (i.multiplyScalar(1 - Math.min(0.45, s)), i);
}
function Cr(e, t, n) {
  let r = e.lay,
    i = Math.abs(t),
    a = 0.54;
  ((a -= 0.1 * W(i, 0.45) * W(n - 0.33, 0.12)),
    (a -= 0.12 * W(i, 0.12) * W(n - 0.62, 0.08)),
    (a -= 0.05 * W(i, 0.3) * W(n - 0.94, 0.04)));
  let o = i / r.mouthW,
    s = Ln(r, Math.min(1, o));
  return (
    (1 - U(0.85, 1.1, o)) *
      (n > s - Rn(r, o) - 0.003 && n < s + zn(r, o) + 0.003) &&
      (a = e.face.lipColor ? 0.24 : 0.36),
    a
  );
}
function wr(e) {
  if (e.lod === 0) {
    let t = Tr(e);
    for (; !t.next().done;);
  } else Mr(e);
}
function* Tr(e) {
  let { m: t, h: n, faceRect: r, cover: i } = e,
    a = n.lay,
    { th: o, eyeCol: s } = vr(n),
    c = o.length - 1,
    l = o.map((e) => _r(n, e)),
    u = pr.length - 1,
    d = (e) => (e < 0 ? n.eyes[0] : n.eyes[1]),
    f = [];
  for (let e = 0; e <= c; e++) {
    let t = o[e],
      r = [];
    for (let i = 0; i <= u; i++) {
      let a = l[e][i],
        o = new M();
      if (s[e] && i >= 9 && i <= 12) {
        let e =
          i === 10 || i === 11
            ? 35e-5 * n.s
            : i === 9
              ? n.lidTm
              : n.lidTm * 0.9;
        $n(n, d(t), t, a, e, o);
      } else nr(n, t, a, o);
      r.push(o);
    }
    f.push(r);
  }
  let p = o.findIndex((e) => e > a.eyeT + a.eyeW + 0.1),
    m = c - p,
    h = pr.map((e, t) => t),
    g = (e) => (e < 0.52 || e > a.noseBaseD - 0.012 ? -1 : 0.09),
    _ = (c, u, d, p) => {
      let m = [];
      for (let e = c; e <= u; e++) m.push(e);
      let h = m.map((e) => d.map((t) => f[e][t].clone()));
      for (let [e, t] of p) {
        let n = m.indexOf(e);
        if (!(n < 0))
          for (let r = 0; r < d.length; r++) {
            if (t.includes(d[r])) continue;
            let i = r,
              a = r;
            for (; i > 0 && !t.includes(d[i]);) i--;
            for (; a < d.length - 1 && !t.includes(d[a]);) a++;
            let o = l[e][d[i]],
              s = l[e][d[a]],
              c = (l[e][d[r]] - o) / Math.max(1e-6, s - o);
            h[n][r].lerpVectors(h[n][i], h[n][a], c);
          }
      }
      let _ = m.length - 1,
        v = d.length - 1,
        y = (e, t) => !!i && i(o[m[e]], l[m[e]][d[t]]),
        b = (e, t) => {
          let n = l[m[e]][d[t]],
            r = g(n);
          return r > 0 && Math.abs(o[m[e]]) < r - 0.012;
        },
        x = (e, t) =>
          !!(
            (s[m[e]] && s[m[e + 1]] && d[t] === 10 && d[t + 1] === 11) ||
            (y(e, t) && y(e + 1, t) && y(e, t + 1) && y(e + 1, t + 1)) ||
            (b(e, t) && b(e + 1, t) && b(e, t + 1) && b(e + 1, t + 1))
          ),
        S = [0, 0],
        C = (e, t) => [Math.round(e * _), Math.round(t * v)],
        w = t.grid(
          {
            nu: _,
            nv: v,
            closed: !1,
            point: (e, t, n) => {
              let [r, i] = C(e, t);
              return n.copy(h[r][i]);
            },
            skip: x,
          },
          {
            color: (t, r, i, c, u, f) => {
              let [p, h] = C(c, u),
                g = m[p],
                _ = d[h],
                v = o[g],
                y = l[g][_];
              if ((Sr(n, e.skin, v, y, f), _ === 19 || _ === 20)) {
                let e = Math.abs(v) / a.mouthW;
                e < 1 && f.lerp(br.setHex(5905954), 0.55 * (1 - e * e));
              }
              if (s[g] && (_ === 10 || _ === 11)) {
                let e = (Math.abs(v) - a.eyeT) / a.eyeW;
                (f.multiplyScalar(_ === 10 ? 0.55 : 0.85),
                  _ === 11 && f.lerp(br.setHex(14191238), 0.35),
                  e < -0.9 && f.lerp(br.setHex(13662840), 0.6));
              }
              return (s[g] && _ === 9 && f.multiplyScalar(0.8), f);
            },
            skin: (e, t, r, i, a, s) => {
              let [c, u] = C(i, a),
                f = d[u];
              xr(
                n,
                o[m[c]],
                l[m[c]][f],
                s,
                f >= 20 && f <= 22,
                f >= 18 && f <= 19,
              );
            },
            kind: V.skin,
            rough: (e, t, r, i, a) => {
              let [c, u] = C(i, a),
                f = m[c],
                p = d[u];
              return s[f] && (p === 11 || p === 12)
                ? 0.16
                : Cr(n, o[f], l[f][p]);
            },
            bump: 1,
            tex: r
              ? {
                  rect: r,
                  mode: 0,
                  uv: (e, t, n, r, i, s) => {
                    let [c, u] = C(r, i);
                    (ar(a, o[m[c]], l[m[c]][d[u]], S),
                      (s[0] = S[0]),
                      (s[1] = S[1]));
                  },
                }
              : void 0,
          },
        ),
        T = t.nor;
      for (let e = 0; e <= v; e++)
        for (let t = 0; t <= _; t++) {
          let r = m[t],
            i = d[e];
          if (s[r] && i >= 9 && i <= 12) continue;
          let a = (w + e * (_ + 1) + t) * 3,
            c = l[r][i];
          (c < 0.02
            ? K.set(0, 1, 0)
            : (ur(n, o[r], Math.min(0.995, c), K, i === 19 ? -1 : +(i === 20)),
              c > 0.97 &&
                K.lerp(
                  yr.set(0, -1, 0.3).normalize(),
                  U(0.97, 1, c),
                ).normalize()),
            (T[a] = K.x),
            (T[a + 1] = K.y),
            (T[a + 2] = K.z));
        }
    };
  (yield,
    _(m, p, h, [
      [m, mr],
      [p, mr],
    ]),
    yield,
    _(0, m, mr, [[0, hr]]),
    _(p, c, mr, [[c, hr]]),
    Er(e, l[0]),
    yield,
    Dr(e),
    Ar(e),
    yield,
    jr(e),
    Pr(e));
}
function Er(e, t) {
  let { m: n, h: r, cover: i } = e,
    a = (e) => gr + e * (Mn - 2 * gr),
    o = hr.map((e) => t[e]),
    s = o.length - 1,
    c = (e, t) => !!i && i(a(e), o[Math.round(t * s)]),
    l = n.grid(
      {
        nu: 6,
        nv: s,
        closed: !1,
        point: (e, t, n) => nr(r, a(e), o[Math.round(t * s)], n),
        skip: (e, t) =>
          c(e / 6, t / s) &&
          c((e + 1) / 6, t / s) &&
          c(e / 6, (t + 1) / s) &&
          c((e + 1) / 6, (t + 1) / s),
      },
      {
        color: (t, n, i, c, l, u) =>
          Sr(r, e.skin, a(c), o[Math.round(l * s)], u),
        skin: z.head,
        kind: V.skin,
        rough: 0.55,
        bump: 0.6,
      },
    ),
    u = n.nor;
  for (let e = 0; e <= s; e++)
    for (let t = 0; t <= 6; t++) {
      let n = (l + e * 7 + t) * 3,
        i = o[e];
      (i < 0.02
        ? K.set(0, 1, 0)
        : (ur(r, a(t / 6), Math.min(0.995, i), K),
          i > 0.97 &&
            K.lerp(yr.set(0, -1, 0.3).normalize(), U(0.97, 1, i)).normalize()),
        (u[n] = K.x),
        (u[n + 1] = K.y),
        (u[n + 2] = K.z));
    }
}
function Dr(e) {
  let { m: t, h: n, b: r } = e,
    i = n.lay,
    a = n.s,
    o = br.setHex(e.skin).multiplyScalar(0.9).getHex(),
    s = e.lashColor ?? 1182472,
    c = e.lashLen ?? 0.3;
  for (let l of n.eyes) {
    let u = l.side,
      d = u < 0 ? z.eyeL : z.eyeR,
      f = u < 0 ? z.lidL : z.lidR;
    r.joints.p[d].copy(l.c);
    let p = (Math.PI / 180) * 75,
      m = (Math.PI / 180) * 44,
      h = Math.cos(0.62),
      g = (e, t, n) => {
        let r = (e * 2 - 1) * p,
          i = (t * 2 - 1) * m;
        return n.set(
          Math.sin(r) * Math.cos(i),
          Math.sin(i),
          -Math.cos(r) * Math.cos(i),
        );
      },
      _ = t.grid(
        {
          nu: 6,
          nv: 3,
          closed: !1,
          point: (e, t, n) => {
            g(e, t, K);
            let r = -K.z,
              i = r > h ? ((r - h) / (1 - h)) ** 1.4 * 7e-4 * a : 0;
            return n.copy(l.c).addScaledVector(K, l.r + i);
          },
          invert: !0,
        },
        {
          color: (e, t, n, r, i, a) => {
            g(r, i, K);
            let o = 1 - Math.max(0, -K.z) ** 0.8;
            return (
              a
                .setRGB(1, 1, 1)
                .multiplyScalar(1 - 0.5 * o - 0.22 * U(0.1, 0.55, K.y)),
              a
            );
          },
          skin: d,
          kind: V.eye,
          rough: 0.05,
          tex: e.eyeRect
            ? {
                rect: e.eyeRect,
                mode: 2,
                uv: (e, t, n, r, i, a) => {
                  let o = (r * 2 - 1) * p,
                    s = (i * 2 - 1) * m;
                  ((a[0] = 0.5 + o / Math.PI),
                    (a[1] = 0.5 + s / (Math.PI / 2)));
                },
              }
            : void 0,
        },
      );
    for (let e = 0; e <= 3; e++)
      for (let n = 0; n <= 6; n++) {
        g(n / 6, e / 3, K);
        let r = (_ + e * 7 + n) * 3;
        ((t.nor[r] = K.x), (t.nor[r + 1] = K.y), (t.nor[r + 2] = K.z));
      }
    let v = [-1, -0.5, 0.05, 0.55, 1],
      y = (e) => u * (i.eyeT + e * i.eyeW);
    if (
      ($n(n, l, y(0), Fn(i, 0) - 0.001, 0.0012 * a, r.joints.p[f]),
      t.grid(
        {
          nu: v.length - 1,
          nv: 2,
          closed: !1,
          point: (e, t, r) => {
            let o = v[Math.round(e * (v.length - 1))],
              s = Nn(Fn(i, o) - 0.002, In(i, o) + 0.001, t);
            return $n(
              n,
              l,
              y(o),
              s,
              8e-4 * a + 4e-4 * a * Math.sin(t * Math.PI),
              r,
            );
          },
          invert: u < 0,
        },
        {
          color: (e, t, n, r, i, a) => a.setHex(i > 0.9 ? Or(o, s, 0.6) : o),
          skin: f,
          kind: V.skin,
          rough: 0.5,
        },
      ),
      e.lashRect)
    ) {
      let r = [-0.8, -0.35, 0.1, 0.55, 1.02],
        o = (0.0042 + 0.0048 * c) * a,
        d = new M(),
        f = new M(),
        p = new M();
      t.grid(
        {
          nu: r.length - 1,
          nv: 2,
          closed: !1,
          point: (e, t, s) => {
            let c = r[Math.round(e * (r.length - 1))],
              m = Pn(c, -1, 1),
              h = Fn(i, m) - 0.0028;
            ($n(n, l, y(m), h, n.lidTm + 2e-4 * a, d),
              f.subVectors(d, l.c).normalize(),
              p.set(0, 1, 0).addScaledVector(f, -f.y).normalize());
            let g = t,
              _ =
                o *
                (0.55 + 0.45 * Math.sin(((m + 1) / 2) * Math.PI * 0.9)) *
                (c > 1 ? 0.85 : 1);
            return (
              s
                .copy(d)
                .addScaledVector(f, _ * (0.55 * g - 0.1 * g * g))
                .addScaledVector(p, _ * (0.3 * g + 0.55 * g * g)),
              (s.x += u * _ * 0.35 * g * Math.max(0, m)),
              s
            );
          },
          invert: u > 0,
        },
        {
          color: s,
          skin: z.head,
          kind: V.hair,
          rough: 0.6,
          tex: {
            rect: e.lashRect,
            mode: 2,
            uv: (e, t, n, r, i, a) => ((a[0] = r), (a[1] = i)),
          },
        },
      );
    }
  }
}
function Or(e, t, n) {
  return br.setHex(e).lerp(kr.setHex(t), n).getHex();
}
const kr = new N();
function Ar(e) {
  let { m: t, h: n, lod: r, faceRect: i } = e,
    a = n.lay,
    o = n.face,
    s = n.s,
    c = o.bridge,
    l = 0.85 + 0.35 * o.noseW,
    u = 0.9 + 0.2 * o.noseL,
    d = (0.0125 + 0.004 * c) * s * u,
    f = [
      [0.46, 0.085, 3e-4 * s, 0, 0],
      [0.515, 0.11, (0.0016 + 0.0018 * c) * s, 0, 0],
      [0.567, 0.13, (0.0034 + 0.0032 * c) * s, 0, 0],
      [0.617, 0.15, (0.0058 + 0.004 * c) * s * u, 0, 0],
      [a.noseTipD - 0.022, 0.172 * l, d * 0.84, 1, 0],
      [a.noseTipD, 0.185 * l, d, 1, -0.004],
      [a.noseTipD + 0.013, 0.19 * l, d * 0.9, 1, -0.008],
      [a.noseBaseD - 0.009, 0.188 * l, d * 0.55, 2, -0.014],
      [a.noseBaseD + 0.004, 0.182 * l, 0, 3, -0.024],
    ],
    p = r === 0 ? f : [f[0], f[2], f[4], f[5], f[8]],
    m =
      r === 0
        ? [-1, -0.76, -0.5, -0.24, 0, 0.24, 0.5, 0.76, 1]
        : [-1, -0.4, 0, 0.4, 1],
    h = m.length - 1,
    g = p.length - 1,
    _ = [0, 0],
    v = (e, t, n) => {
      let r = Math.max(0, Math.min(1, 0.5 + (0.5 * (e - t)) / n));
      return t + (e - t) * r + n * r * (1 - r);
    },
    y = (e, t) => {
      let n = Math.abs(e);
      if (n >= 1) return 0;
      let r = (1 - n * n) * (1 - n * n),
        i = t[2];
      if (t[3] === 0) return i * (0.55 * W(e, 0.3) + 0.45 * r);
      if (t[3] === 1) {
        let t = i * Math.max(0, 1 - (e / 0.5) * (e / 0.5)) ** 0.6,
          a = i * 0.95 * W(n - 0.55, 0.2);
        return v(t, a, i * 0.18) * r;
      }
      if (t[3] === 2) {
        let t = i * W(e, 0.14),
          a = i * 1.05 * W(n - 0.55, 0.18),
          o = i * 0.35 * W(n - 0.3, 0.11);
        return Math.max(0, (Math.max(t, a) - o) * r);
      }
      return 0;
    },
    b = (e, t) => e[0] + e[4] * t * t,
    x = (e) => {
      let t = Math.abs(e);
      return 45e-5 * s * (1 - U(0.62, 0.95, t)) - 5e-4 * s * U(0.8, 1, t);
    },
    S = (e, t, r) => {
      let i = Math.round(t * g),
        a = Math.round(e * h),
        o = p[i],
        c = m[a];
      return G(n, c * o[1], b(o, c), y(c, o) + (i === 0 ? -4e-4 * s : x(c)), r);
    },
    C = t.vertexCount;
  t.grid(
    { nu: h, nv: g, closed: !1, point: S },
    {
      color: (t, r, i, a, o, s) => {
        let c = Math.round(o * g),
          l = Math.round(a * h),
          u = m[l],
          d = Math.abs(u);
        Sr(n, e.skin, u * p[c][1], b(p[c], u), s);
        let f = p[c][3];
        return (
          f >= 2 &&
            s.multiplyScalar(1 - (f === 3 ? 0.55 : 0.4) * W(d - 0.3, 0.12)),
          f >= 1 && c >= g - 3 && s.multiplyScalar(1 - 0.1 * W(d - 0.78, 0.1)),
          f === 1 &&
            d < 0.5 &&
            ((s.r = Math.min(1, s.r * 1.04)), (s.g *= 0.985)),
          s
        );
      },
      skin: z.head,
      kind: V.skin,
      rough: (e, t, n, r, i) =>
        p[Math.round(i * g)][3] >= 2
          ? 0.55
          : 0.38 + 0.12 * Math.abs(m[Math.round(r * h)]),
      bump: 0.8,
      tex: i
        ? {
            rect: i,
            mode: 0,
            uv: (e, t, r, i, a, o) => {
              let s = Math.round(a * g),
                c = Math.round(i * h);
              (ar(n.lay, m[c] * p[s][1], b(p[s], m[c]), _),
                (o[0] = _[0]),
                (o[1] = _[1]));
            },
          }
        : void 0,
    },
  );
  let w = t.nor;
  for (let e = 0; e <= g; e++)
    for (let t = 0; t <= h; t++) {
      let r = U(0.95, 0.45, Math.abs(m[t])) * (e === 0 ? 0 : e === 1 ? 0.6 : 1);
      if (r >= 0.999) continue;
      let i = (C + e * (h + 1) + t) * 3;
      (ur(n, m[t] * p[e][1], b(p[e], m[t]), K),
        yr.set(w[i], w[i + 1], w[i + 2]),
        K.lerp(yr, r).normalize(),
        (w[i] = K.x),
        (w[i + 1] = K.y),
        (w[i + 2] = K.z));
    }
}
function jr(e) {
  let { m: t, h: n, lod: r } = e;
  if (e.earsHidden) return;
  let i = n.s,
    a = 0.058 * i,
    o = 0.032 * i,
    s = br
      .setHex(e.skin)
      .multiply(new N(1.03, 0.92, 0.88))
      .getHex(),
    c = br
      .setHex(e.skin)
      .multiply(new N(0.78, 0.66, 0.64))
      .getHex(),
    l = br
      .setHex(e.skin)
      .multiply(new N(1.04, 0.9, 0.86))
      .getHex();
  for (let e of [-1, 1]) {
    let u = G(n, e * 1.6, 0.585, -0.001, new M(), !1),
      d = new M(e, 0, 0.12).normalize(),
      f = new M(0, 1, 0),
      p = new M();
    (f.applyAxisAngle(d, e * 0.2),
      p.crossVectors(d, f).multiplyScalar(-e),
      p.z > 0 && p.negate());
    let m = r === 0 ? 8 : 5,
      h =
        r === 0
          ? [
              [1, 0.45],
              [1.03, 1],
              [0.84, 0.9],
              [0.62, 0.72],
              [0.3, 0.15],
            ]
          : [
              [1, 0.5],
              [0.9, 0.9],
              [0.2, 0.1],
            ],
      g = h.length - 1,
      _ = (e, t) => {
        let n = e * Mn,
          r = Math.max(0, Math.cos(n));
        ((t[0] = Math.sin(n) * o * (0.5 + 0.12 * r) + o * 0.18),
          (t[1] =
            Math.cos(n) *
            a *
            0.5 *
            (n > Math.PI * 0.8 && n < Math.PI * 1.2 ? 0.95 : 1)));
      },
      v = [0, 0];
    (t.grid(
      {
        nu: m,
        nv: g,
        closed: !0,
        point: (e, t, n) => {
          let r = Math.round(t * g),
            [a, s] = h[r];
          _(e, v);
          let c = v[0] < 0 ? 0.7 : 1,
            l = v[0] * a * (r >= 3 ? c : 1),
            m = v[1] * a,
            y = (0.004 + 0.012 * Math.max(0, v[0] / o)) * i * s;
          return (
            n
              .copy(u)
              .addScaledVector(p, -l)
              .addScaledVector(f, m)
              .addScaledVector(d, y),
            n
          );
        },
        invert: e < 0,
        cap1: !0,
      },
      {
        color: (e, t, n, r, i, a) => {
          let o = Math.round(i * g);
          return a.setHex(o >= g - 1 ? c : o === 1 ? l : s);
        },
        skin: z.head,
        kind: V.skin,
        rough: 0.55,
        bump: 0.5,
      },
    ),
      t.grid(
        {
          nu: m,
          nv: 1,
          closed: !0,
          point: (e, t, n) => {
            _(e, v);
            let r = (0.004 + 0.012 * Math.max(0, v[0] / o)) * i * 0.45,
              a = t < 0.5 ? 1 : 0.7;
            return (
              n
                .copy(u)
                .addScaledVector(p, -v[0] * a)
                .addScaledVector(f, v[1] * a)
                .addScaledVector(d, t < 0.5 ? r : -0.004 * i),
              n
            );
          },
          invert: e > 0,
        },
        {
          color: br.setHex(s).multiplyScalar(0.85).getHex(),
          skin: z.head,
          kind: V.skin,
          rough: 0.6,
        },
      ));
  }
}
function Mr(e) {
  let { m: t, h: n, lod: r } = e,
    i = dr(r),
    a = fr(r),
    o = i.length - 1,
    s = a.length - 1,
    c = i.slice();
  c[o] = i[0] + Mn;
  let l = (e) => c[Math.round(e * o)],
    u = (e) => a[Math.round(e * s)],
    d = {
      color: (t, r, i, a, o, s) => Sr(n, e.skin, l(a), u(o), s),
      skin: (e, t, r, i, a, o) => xr(n, l(i), u(a), o),
      kind: V.skin,
      rough: 0.58,
    },
    f = t.grid(
      { nu: o, nv: s, closed: !1, point: (e, t, r) => G(n, l(e), u(t), 0, r) },
      d,
    ),
    p = t.nor;
  for (let e = 0; e <= s; e++)
    for (let t = 0; t <= o; t++) {
      let r = (f + e * (o + 1) + t) * 3,
        i = a[e];
      (i < 0.03
        ? K.set(0, 1, 0)
        : (ur(n, c[t], Math.min(0.995, i), K),
          i > 0.97 &&
            K.lerp(yr.set(0, -1, 0.3).normalize(), U(0.97, 1, i)).normalize()),
        (p[r] = K.x),
        (p[r + 1] = K.y),
        (p[r + 2] = K.z));
    }
  (Ar(e), Nr(e), Pr(e));
}
function Nr(e) {
  let { m: t, h: n } = e,
    r = n.lay,
    i = n.face,
    a = (e, r, i, a, o, s, c) =>
      t.grid(
        {
          nu: 2,
          nv: 1,
          closed: !1,
          point: (t, s, c) =>
            G(
              n,
              Nn(e, r, t),
              Nn(i, a, s) + (t === 0.5 ? (s < 0.5 ? -0.006 : 0.004) : 0),
              o,
              c,
            ),
        },
        { color: s, skin: c, kind: V.skin, rough: 0.6 },
      ),
    o = e.b.elder ? 10130572 : 2760215;
  for (let e of [-1, 1]) {
    let t = e * r.eyeT,
      n = t - e * r.eyeW * 0.85,
      s = t + e * r.eyeW * 0.9;
    a(
      Math.min(n, s),
      Math.max(n, s),
      r.eyeD - r.eyeH * 0.9,
      r.eyeD + r.eyeH * 0.5,
      0.0022,
      2102799,
      z.head,
    );
    let c = e * 0.12,
      l = e * 0.52;
    a(
      Math.min(c, l),
      Math.max(c, l),
      r.browD - 0.012 * (0.6 + i.brow),
      r.browD + 0.008,
      0.0024,
      o,
      z.head,
    );
  }
  let s =
    i.lipColor ||
    br
      .setHex(e.skin)
      .multiply(new N(0.92, 0.62, 0.6))
      .getHex();
  a(-r.mouthW, r.mouthW, r.mouthD - 0.012, r.mouthD + 0.016, 0.0025, s, z.jaw);
}
function Pr(e) {
  let { m: t, h: n, b: r, lod: i } = e,
    a = i === 0 ? 10 : 6,
    o = r.H * 0.808,
    s = n.crownY - 0.8 * n.hh,
    c = Kn(n, 0.8) + 0.035 * n.hh,
    l = r.neckBase.z,
    u = r.neckR,
    d = i === 0 ? [0, 0.22, 0.48, 0.74, 1] : [0, 0.5, 1],
    f = d.length - 1,
    p = !r.female,
    m = new M(),
    h = (e) => Nn(0.8, 0.7, U(0, 0.8, -Math.cos(e)));
  t.grid(
    {
      nu: a,
      nv: f,
      closed: !0,
      point: (e, t, i) => {
        let a = d[Math.round(t * f)],
          s = e * Mn,
          g = n.crownY - h(s) * n.hh,
          _ = Nn(o, g, a),
          v = Nn(l, c, a * a),
          y = Math.sin(s),
          b = Math.cos(s),
          x = u * (1 - 0.1 * a) * (1 + 0.16 * (1 - a) * (1 - a)),
          S = u * (0.9 + 0.08 * (1 - a)),
          C = u * (1.02 + 0.08 * (1 - a)),
          w = b > 0 ? S : C,
          T = 1 / Math.sqrt((y / x) ** 2 + (b / w) ** 2),
          E = Nn(0.95, 0.55, a);
        ((T +=
          (p ? 0.0035 : 0.002) *
          r.s *
          (W(Hn(s, E), 0.3) + W(Hn(s, -E), 0.3)) *
          Math.sin(a * Math.PI)),
          (T -= 0.002 * r.s * W(Hn(s, 0), 0.22) * (1 - a) * 0.6));
        let D =
          p && !r.student
            ? 0.0042 * r.s * W(y, 0.25) * Math.max(0, b) * W(a - 0.58, 0.18)
            : 0;
        ((T += D), i.set(y * T, _, v - b * T));
        let O = U(0, 0.6, -b) * U(0.45, 1, a);
        return (O > 0 && i.lerp(G(n, s, h(s), -0.0015 * n.s, m, !1), O), i);
      },
      invert: !0,
    },
    {
      color: (t, n, r, i, a, o) => {
        o.setHex(e.skin);
        let c = i * Mn;
        return (
          o.multiplyScalar(
            1 - 0.12 * U(s - 0.06, s, n) * Math.max(0, Math.cos(c)),
          ),
          o
        );
      },
      skin: (e, t, n, r, i, a) =>
        H(a, z.neck, z.head, U(Nn(o, s, 0.45), Nn(o, s, 0.95), t)),
      kind: V.skin,
      rough: 0.56,
      bump: 0.6,
    },
  );
}
const Fr = Math.PI * 2;
function Ir(e, t, n) {
  let r = e.length;
  if (n <= e[0][0]) return e[0][t];
  if (n >= e[r - 1][0]) return e[r - 1][t];
  let i = 0;
  for (; i < r - 2 && n > e[i + 1][0];) i++;
  let a = e[Math.max(0, i - 1)],
    o = e[i],
    s = e[i + 1],
    c = e[Math.min(r - 1, i + 2)],
    l = (n - o[0]) / (s[0] - o[0]),
    u = s[0] - o[0],
    d = ((s[t] - a[t]) / Math.max(1e-6, s[0] - a[0])) * u,
    f = ((c[t] - o[t]) / Math.max(1e-6, c[0] - o[0])) * u,
    p = l * l,
    m = p * l;
  return (
    (2 * m - 3 * p + 1) * o[t] +
    (m - 2 * p + l) * d +
    (-2 * m + 3 * p) * s[t] +
    (m - p) * f
  );
}
function Lr(e, t, n, r, i, a = 2) {
  let o = Math.sin(e),
    s = Math.cos(e),
    c = o >= 0 ? t : n,
    l = s >= 0 ? r : i,
    u = Math.abs(o) / c,
    d = Math.abs(s) / l;
  return a === 2
    ? 1 / Math.sqrt(u * u + d * d)
    : 1 / (u ** +a + d ** +a) ** (1 / a);
}
const Rr = (e, t) => Math.exp(-(e * e) / (t * t)),
  zr = (e, t) => {
    let n = (e - t) % Fr;
    return (n > Math.PI && (n -= Fr), n < -Math.PI && (n += Fr), n);
  };
(new M(), new M(), new M());
const Br = new M(),
  Vr = new M(),
  Hr = new M(),
  Ur = new M(),
  Wr = new M(0, 0, -1);
function Gr(e, t, n, r, i, a) {
  (Br.subVectors(e.b, e.a),
    Vr.subVectors(e.c, e.b),
    t <= 1
      ? n.copy(e.a).addScaledVector(Br, t)
      : n.copy(e.b).addScaledVector(Vr, t - 1));
  let o = Hr.copy(Br).normalize(),
    s = Ur.copy(Vr).normalize(),
    c = U(0.8, 1.2, t);
  (r
    .copy(o)
    .multiplyScalar(1 - c)
    .addScaledVector(s, c)
    .normalize(),
    i.copy(Wr).addScaledVector(r, -Wr.dot(r)).normalize(),
    a.crossVectors(r, i).normalize());
}
function Kr(e, t, n, r = 0) {
  return Lr(
    t,
    Ir(e.keys, 1, n) + r,
    Ir(e.keys, 2, n) + r,
    Ir(e.keys, 3, n) + r,
    Ir(e.keys, 4, n) + r,
  );
}
function qr(e) {
  let t = e.sex === `f`,
    n = e.height,
    r = n / 1.72,
    i = e.build === `slim` ? 0 : e.build === `avg` ? 1 : 2,
    a = e.age === `elder`,
    o = e.age === `student`,
    s = e.stoop ?? (a ? 0.45 : 0),
    c = Math.max(0, i - 1),
    l = Math.max(0, 1 - i),
    u = 1 + 0.16 * c - 0.07 * l - (o ? 0.04 : 0),
    d =
      (t ? 0.88 : 1) *
      (1 + 0.05 * c - 0.03 * l) *
      (o ? 0.95 : 1) *
      (a ? 0.96 : 1),
    f = (t ? 1.07 : 1) * (1 + 0.1 * c - 0.04 * l),
    p = (t ? 0.86 : 1) * (1 + 0.3 * c - 0.06 * l) * (a ? 1.1 : 1),
    m = (0.045 * c + (a && !t ? 0.03 : 0) + (a && t ? 0.02 : 0)) * r,
    h = t ? (o ? 0.022 : a ? 0.026 : 0.032) * r * (1 + 0.3 * c) : 0,
    g = t ? 0 : (0.01 + 0.004 * c) * r,
    _ = (t ? 0.03 : 0.02) * r * (1 + 0.3 * c),
    v = [];
  for (let e = 0; e < 27; e++) v.push(new M());
  let y = n / (o ? 7 : a ? 7.15 : t ? 7.25 : 7.4),
    b = 0.185 * r * d,
    x = (t ? 0.093 : 0.09) * r * (1 + 0.08 * c),
    S = -0.05 * s * r;
  (v[z.hips].set(0, 0.555 * n, 0),
    v[z.spine].set(0, 0.625 * n, 0),
    v[z.chest].set(0, 0.73 * n, S * 0.3),
    v[z.neck].set(0, 0.848 * n, 0.012 * r + S),
    v[z.head].set(0, n - y * 0.93, -0.004 * r + S * 1.4),
    v[z.shoulderL].set(-0.03 * r, 0.83 * n, -0.02 * r + S * 0.6),
    v[z.shoulderR].set(0.03 * r, 0.83 * n, -0.02 * r + S * 0.6));
  let C = 0.792 * n,
    w = 0.643 * n,
    T = 0.5 * n;
  for (let e of [-1, 1]) {
    let i = e < 0 ? z.armL : z.armR,
      a = e < 0 ? z.foreL : z.foreR,
      o = e < 0 ? z.handL : z.handR;
    (v[i].set(e * b, C, S * 0.6),
      v[a].set(e * (b + 0.024 * r + 0.01 * c * r), w, 0.012 * r + S * 0.4),
      v[o].set(e * (b + 0.04 * r + 0.018 * c * r), T, -0.012 * r),
      v[e < 0 ? z.fingersL : z.fingersR]
        .copy(v[o])
        .add(new M(e * 0.004 * r, -0.098 * r * (t ? 0.93 : 1), -0.004 * r)));
    let s = e < 0 ? z.thighL : z.thighR,
      l = e < 0 ? z.shinL : z.shinR,
      u = e < 0 ? z.footL : z.footR;
    (v[s].set(e * x, 0.53 * n, 0),
      v[l].set(e * x * 0.97, 0.287 * n, -0.006 * r),
      v[u].set(e * x * 0.95, 0.05 * n, 0.012 * r));
  }
  let E = new M(0, n - y * 0.455, -0.008 * r + S * 1.5),
    D = y * (t ? 0.315 : 0.325) * (1 + 0.03 * c),
    O = new M(D, y * 0.455, y * 0.39);
  (v[z.hair].set(0, E.y + O.y * 0.2, E.z + O.z * 0.9),
    v[z.jaw].set(0, E.y - O.y * 0.25, E.z + O.z * 0.1),
    v[z.lidL].set(-D * 0.4, E.y - y * 0.05, E.z - O.z * 0.9),
    v[z.lidR].set(D * 0.4, E.y - y * 0.05, E.z - O.z * 0.9),
    v[z.eyeL].set(-D * 0.4, E.y - y * 0.06, E.z - O.z * 0.75),
    v[z.eyeR].set(D * 0.4, E.y - y * 0.06, E.z - O.z * 0.75));
  let k = (e) => e * n,
    A = (e) => e * r,
    j = [
      [k(0.468), A(0.022) * f, A(0.018) * u, A(0.028) * u, A(0.01)],
      [k(0.492), A(0.082) * f, A(0.042) * u, A(0.078) * u, A(0.008)],
      [k(0.515), A(0.152) * f, A(0.062) * u, A(0.1) * u, A(0.005)],
      [k(0.54), A(0.166) * f, A(0.072) * u, A(0.103) * u, A(0.002)],
      [k(0.56), A(0.163) * f, A(0.09) * u, A(0.093) * u, 0],
      [
        k(0.6),
        A(0.15) * (f * 0.5 + p * 0.5),
        A(0.092) * u,
        A(0.083) * u,
        A(-0.003),
      ],
      [k(0.625), A(0.143) * p, A(0.094) * u, A(0.08) * u, A(-0.004)],
      [
        k(0.665),
        A(0.148) * (p * 0.4 + d * 0.6),
        A(0.1) * u,
        A(0.085) * u,
        A(-0.004),
      ],
      [
        k(0.72),
        A(0.16) * d * u,
        A(0.108) * u,
        A(0.093) * u,
        A(-0.008) + S * 0.4,
      ],
      [k(0.77), A(0.168) * d * u, A(0.102) * u, A(0.1) * u, A(-0.01) + S * 0.6],
      [k(0.8), A(0.17) * d * u, A(0.09) * u, A(0.1) * u, A(-0.006) + S * 0.8],
      [k(0.818), A(0.162) * d, A(0.076) * u, A(0.09) * u, A(0) + S * 0.9],
      [k(0.836), A(0.132) * d, A(0.061), A(0.075), A(0.006) + S],
      [k(0.848), A(0.095), A(0.052), A(0.06), A(0.011) + S],
      [k(0.855), A(0.064), A(0.047), A(0.052), A(0.014) + S],
    ];
  if (t) for (let e of j) e[0] > k(0.64) && e[0] < k(0.82) && (e[2] *= 0.95);
  let ee =
      (1 + 0.14 * c - 0.08 * l) *
      (t ? 0.86 : 1) *
      (o ? 0.92 : 1) *
      (a ? 0.94 : 1),
    te = (e) => e * r * ee,
    ne = [];
  for (let e of [-1, 1]) {
    let t = e < 0 ? z.armL : z.armR,
      n = e < 0 ? z.foreL : z.foreR,
      r = e < 0 ? z.handL : z.handR,
      i = (t, n) => (e > 0 ? [t, n] : [n, t]),
      a = (e, t, n, r, a) => [e, ...i(te(t), te(n)), te(r), te(a)];
    ne.push({
      side: e,
      a: v[t].clone(),
      b: v[n].clone(),
      c: v[r].clone(),
      tMin: -0.2,
      keys: [
        a(-0.2, 0.03, 0.03, 0.035, 0.035),
        a(-0.1, 0.04, 0.032, 0.044, 0.045),
        a(0.02, 0.046, 0.037, 0.048, 0.05),
        a(0.25, 0.048, 0.04, 0.046, 0.05),
        a(0.55, 0.04, 0.039, 0.046, 0.043),
        a(0.85, 0.036, 0.035, 0.036, 0.038),
        a(1, 0.035, 0.034, 0.034, 0.038),
        a(1.18, 0.039, 0.037, 0.038, 0.036),
        a(1.5, 0.032, 0.031, 0.031, 0.029),
        a(1.85, 0.021, 0.021, 0.028, 0.027),
        a(2, 0.019, 0.019, 0.027, 0.026),
      ],
      bones: [e < 0 ? z.shoulderL : z.shoulderR, t, n, r],
    });
  }
  let re =
      (1 + 0.15 * c - 0.08 * l) *
      (t ? 0.97 : 1) *
      (o ? 0.93 : 1) *
      (a ? 0.92 : 1),
    ie = (e) => e * r * re,
    ae = [];
  for (let e of [-1, 1]) {
    let n = e < 0 ? z.thighL : z.thighR,
      r = e < 0 ? z.shinL : z.shinR,
      i = e < 0 ? z.footL : z.footR,
      a = (t, n) => (e > 0 ? [t, n] : [n, t]),
      o = (e, t, n, r, i) => [e, ...a(ie(t), ie(n)), ie(r), ie(i)],
      s = t ? 1.06 : 1;
    ae.push({
      side: e,
      a: v[n].clone(),
      b: v[r].clone(),
      c: v[i].clone(),
      tMin: -0.16,
      keys: [
        o(-0.16, 0.078 * s, 0.05, 0.082, 0.088),
        o(0, 0.086 * s, 0.058, 0.084, 0.088 * s),
        o(0.15, 0.083 * s, 0.064 * s, 0.08, 0.082),
        o(0.45, 0.07, 0.064, 0.07, 0.068),
        o(0.78, 0.054, 0.053, 0.058, 0.052),
        o(0.98, 0.048, 0.047, 0.056, 0.046),
        o(1.12, 0.047, 0.045, 0.048, 0.05),
        o(1.3, 0.05, 0.047, 0.044, 0.064),
        o(1.55, 0.042, 0.039, 0.036, 0.048),
        o(1.8, 0.031, 0.03, 0.03, 0.033),
        o(2, 0.03, 0.028, 0.03, 0.032),
      ],
      bones: [z.hips, n, r, i],
    });
  }
  let oe = (t ? 0.047 : 0.056) * r * (1 + 0.1 * c),
    se = new M(0, 0.815 * n, 0.012 * r + S * 0.9),
    ce = new M(0, E.y - O.y * 0.35, E.z + O.z * 0.28);
  return {
    H: n,
    s: r,
    female: t,
    mass: i,
    elder: a,
    student: o,
    stoop: s,
    joints: { p: v, height: n, headC: E, headR: O },
    torsoKeys: j,
    torsoBottom: j[0][0],
    torsoTop: j[j.length - 1][0],
    bust: h,
    belly: m,
    glutes: _,
    pecs: g,
    arms: [ne[0], ne[1]],
    legs: [ae[0], ae[1]],
    neckBase: se,
    neckTop: ce,
    neckR: oe,
    headC: E,
    headR: O,
    headH: y,
    handLen: 0.19 * r * (t ? 0.92 : 1),
    handW: 0.085 * r * (t ? 0.9 : 1) * (1 + 0.05 * c),
    footLen: 0.255 * r * (t ? 0.92 : 1),
    footW: 0.095 * r * (t ? 0.92 : 1),
  };
}
function q(e, t) {
  return Ir(e.torsoKeys, 4, t);
}
function J(e, t, n, r = !1) {
  let i = e.torsoKeys,
    a = Ir(i, 1, n),
    o = Lr(
      t,
      a,
      a,
      Ir(i, 2, n),
      Ir(i, 3, n),
      2 + 0.45 * U(e.H * 0.5, e.H * 0.6, n) * (1 - U(e.H * 0.8, e.H * 0.84, n)),
    ),
    s = e.H,
    c = Math.cos(t);
  if (e.bust > 0 || e.pecs > 0) {
    let i = n - s * (e.female ? 0.735 : 0.76),
      a = i > 0 ? Rr(i, s * 0.045) : Rr(i, s * (e.female ? 0.022 : 0.03)),
      c = e.female ? 0.44 : 0.5,
      l = Rr(zr(t, c), 0.34) + Rr(zr(t, -c), 0.34);
    (r && Math.abs(zr(t, 0)) < c && (l = Math.max(l, Rr(0, 1) * 0.98)),
      (o += (e.bust + e.pecs) * a * l));
  }
  if (e.belly > 0) {
    let t = Rr(n - s * 0.6, s * 0.06);
    o += e.belly * t * Math.max(0, c) ** 1.5;
  }
  {
    let r = n - s * 0.49,
      i = r > 0 ? Rr(r, s * 0.035) : Rr(r, s * 0.02),
      a = Rr(zr(t, Math.PI - 0.5), 0.45) + Rr(zr(t, Math.PI + 0.5), 0.45);
    o += e.glutes * i * a;
  }
  r ||
    (o -= 0.005 * e.s * Rr(zr(t, Math.PI), 0.12) * Rr(n - s * 0.68, s * 0.1));
  {
    let r = Rr(n - s * 0.775, s * 0.04),
      i = Rr(zr(t, Math.PI - 0.55), 0.3) + Rr(zr(t, Math.PI + 0.55), 0.3);
    o += 0.008 * e.s * r * i;
  }
  if (r && n < s * 0.61) {
    let r = Jr(e, t, n) + 0.006 * e.s;
    o += Math.max(0, r - o) * U(s * 0.61, s * 0.545, n);
  }
  return o;
}
function Jr(e, t, n) {
  let r = Math.sin(t),
    i = -Math.cos(t),
    a = q(e, n),
    o = 0;
  for (let t of e.legs) {
    let e = t.a.y - t.b.y,
      s = (t.a.y - n) / e;
    if (s < -0.2 || s > 1.1) continue;
    let c = Ir(t.keys, t.side > 0 ? 1 : 2, s),
      l = Ir(t.keys, 3, s),
      u = Ir(t.keys, 4, s),
      d =
        Math.abs(r) * c +
        Math.max(0, -i) * l * 0 +
        (i < 0 ? l : u) * Math.abs(i),
      f = Math.max(0.01, d / Math.max(0.7, Math.abs(r) + Math.abs(i))),
      p = t.a.x + (t.b.x - t.a.x) * Math.max(0, s),
      m = t.a.z + (t.b.z - t.a.z) * Math.max(0, s) - a,
      h = p * r + m * i,
      g = p - h * r,
      _ = m - h * i,
      v = f * f - (g * g + _ * _);
    v <= 0 || (o = Math.max(o, h + Math.sqrt(v)));
  }
  return o;
}
function Yr(e, t, n, r) {
  let i = e.joints.p,
    a = (i[z.hips].y + i[z.spine].y) * 0.5 + 0.02 * e.s,
    o = (i[z.spine].y + i[z.chest].y) * 0.5,
    s = e.neckBase.y + 0.02 * e.s;
  An(r, [z.neck, z.chest, z.spine, z.hips], [s, o, a], 0.06 * e.s, n);
  let c = Math.sin(t),
    l = U(0.3, 0.95, Math.abs(c)) * U(e.H * 0.72, e.H * 0.81, n);
  l > 0 && jn(r, c > 0 ? z.shoulderR : z.shoulderL, l * 0.55);
  let u = U(e.H * 0.54, e.H * 0.47, n) * (0.25 + 0.2 * Math.abs(Math.cos(t)));
  u > 0 &&
    jn(r, c > 0 ? z.thighR : z.thighL, u * U(0.05, 0.4, Math.abs(c) + 0.2));
}
function Xr(e, t, n) {
  let [r, i, a, o] = e.bones;
  t < 0.4
    ? H(n, r, i, U(-0.2, 0.12, t))
    : t < 1.6
      ? H(n, i, a, U(0.88, 1.12, t))
      : H(n, a, o, U(1.9, 2.05, t));
}
(new M(0.4, 0.8, 0.3).normalize(), new ve(0, 0, 0, 0));
const Zr = {};
(typeof window < `u` && (window.__materialLint = () => Zr), new A());
const Qr = /* @__PURE__ */ new Map(),
  Y = (e, t = 1) => {
    let n = t >= 1 ? 1e3 : t <= 0 ? 0 : Math.round(t * 1e3),
      r = (e & 16777215) * 1001 + n,
      i = Qr.get(r);
    if (i === void 0) {
      let n = (e >> 16) & 255,
        a = (e >> 8) & 255,
        o = e & 255;
      ((i =
        t >= 1
          ? `rgb(${n},${a},${o})`
          : `rgba(${n},${a},${o},${t.toFixed(3)})`),
        Qr.size >= 4096 && Qr.clear(),
        Qr.set(r, i));
    }
    return i;
  };
function $r(e, t, n) {
  let r = (e >> 16) & 255,
    i = (e >> 8) & 255,
    a = e & 255,
    o = (t >> 16) & 255,
    s = (t >> 8) & 255,
    c = t & 255;
  return (
    (Math.round(r + (o - r) * n) << 16) |
    (Math.round(i + (s - i) * n) << 8) |
    Math.round(a + (c - a) * n)
  );
}
function ei(e, t) {
  return t >= 1
    ? $r(e, 16777215, Math.min(1, t - 1))
    : $r(0, e, Math.max(0, t));
}
function ti(e) {
  let t = e >>> 0 || 1;
  return () => {
    ((t |= 0), (t = (t + 1831565813) | 0));
    let e = Math.imul(t ^ (t >>> 15), 1 | t);
    return (
      (e = (e + Math.imul(e ^ (e >>> 7), 61 | e)) ^ e),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
}
function ni(e, t, n) {
  for (let r = -1; r <= 1; r++) for (let i = -1; i <= 1; i++) n(i * e, r * t);
}
const ri = (e, t, n, r, i) => {
    let a = ti(77);
    ((e.fillStyle = `rgb(236,236,236)`), e.fillRect(t, n, r, i));
    for (let o = 0; o < r; o += 2)
      ((e.fillStyle = `rgba(255,255,255,${(0.1 + a() * 0.16).toFixed(3)})`),
        e.fillRect(t + o, n, 1, i));
    for (let o = 0; o < i; o += 2)
      ((e.fillStyle = `rgba(0,0,0,${(0.02 + a() * 0.05).toFixed(3)})`),
        e.fillRect(t, n + o, r, 1));
    for (let o = 0; o < 90; o++)
      ((e.fillStyle =
        a() < 0.5 ? `rgba(255,255,255,0.18)` : `rgba(0,0,0,0.06)`),
        e.fillRect(t + a() * r, n + a() * i, 2 + a() * 5, 1));
  },
  ii = (e, t, n, r, i) => {
    let a = ti(4242),
      o = new Float32Array(r * i).fill(0.34),
      s = new Float32Array(r * i),
      c = (e, t, n, i, a, c) => {
        let l = Math.floor(e - n - 1),
          u = Math.ceil(e + n + 1);
        for (let d = l; d <= u; d++) {
          let l = Math.max(0, 1 - Math.abs(d + 0.5 - e) / n);
          if (l <= 0) continue;
          let u = t * r + (((d % r) + r) % r);
          ((s[u] = Math.max(s[u], l * a)), (o[u] += (i - o[u]) * l * c));
        }
      };
    for (let e = 0; e < 8; e++) {
      let t = ((e + 0.2 + a() * 0.6) / 8) * r,
        n = (r / 8) * (0.75 + 0.5 * a()),
        o = 1 + Math.floor(a() * 2),
        s = a() * Math.PI * 2,
        l = (0.6 + a() * 1.6) * (r / 128);
      for (let e = 0; e < 22; e++) {
        let e = (a() - 0.5) * n * (0.35 + 0.65 * a()),
          r = 1 - 0.75 * (Math.abs(e) / (n * 0.5)) ** 1.6,
          u =
            a() < 0.2 ? 0.95 : a() < 0.5 ? 0.25 + 0.2 * a() : 0.55 + 0.3 * a(),
          d = 1 + Math.floor(a() * 3),
          f = a() * Math.PI * 2,
          p = a() * 0.8,
          m = 0.7 + a() * 0.9;
        for (let n = 0; n < i; n++) {
          let h = (n / i) * Math.PI * 2;
          c(
            t + e + l * Math.sin(h * o + s) + p * Math.sin(h * d + f),
            n,
            m,
            u,
            Math.max(0.15, r) * (0.8 + 0.2 * a()),
            0.55,
          );
        }
      }
    }
    for (let e = 0; e < 26; e++) {
      let e = a() * r,
        t = 1 + Math.floor(a() * 2),
        n = a() * Math.PI * 2,
        o = (1 + a() * 4) * (r / 128),
        s = 0.4 + 0.5 * a();
      for (let r = 0; r < i; r++)
        c(
          e + o * Math.sin((r / i) * Math.PI * 2 * t + n),
          r,
          0.6,
          s,
          0.3 + 0.25 * a(),
          0.5,
        );
    }
    let l = e.createImageData(r, i);
    for (let e = 0; e < r * i; e++) {
      let t = Math.min(1, Math.max(0, o[e]));
      ((l.data[e * 4] = Math.round(t * 255)),
        (l.data[e * 4 + 1] = Math.round(Math.min(1, s[e]) ** (1 / 2.2) * 255)),
        (l.data[e * 4 + 2] = Math.round(t * 230)),
        (l.data[e * 4 + 3] = 255));
    }
    e.putImageData(l, t, n);
  };
function ai(e, t, n, r) {
  return (i, a, o, s, c) => {
    let l = ti(r);
    switch (((i.fillStyle = Y(t)), i.fillRect(a, o, s, c), e)) {
      case `stripes`:
        i.fillStyle = Y(n);
        for (let e = 0; e < 4; e++)
          i.fillRect(a, o + (e * c) / 4, s, c / 4 / 2.6);
        break;
      case `plaid`: {
        let e = $r(n, 16777215, 0.55);
        ((i.globalAlpha = 0.55),
          (i.fillStyle = Y(n)),
          i.fillRect(a, o + c * 0.1, s, c * 0.34),
          i.fillRect(a + s * 0.1, o, s * 0.34, c),
          (i.globalAlpha = 0.35),
          i.fillRect(a, o + c * 0.62, s, c * 0.12),
          i.fillRect(a + s * 0.62, o, s * 0.12, c),
          (i.globalAlpha = 0.9),
          (i.fillStyle = Y(e)),
          i.fillRect(a, o + c * 0.54, s, c * 0.025),
          i.fillRect(a + s * 0.54, o, s * 0.025, c),
          (i.fillStyle = Y($r(t, 0, 0.5))),
          i.fillRect(a, o + c * 0.26, s, c * 0.02),
          i.fillRect(a + s * 0.26, o, s * 0.02, c),
          (i.globalAlpha = 1),
          oi(i, a, o, s, c, 0.07));
        break;
      }
      case `check`: {
        let e = s / 4;
        ((i.globalAlpha = 0.5), (i.fillStyle = Y(n)));
        for (let t = 0; t < 4; t++)
          (i.fillRect(a + t * e, o, e / 2, c),
            i.fillRect(a, o + t * e, s, e / 2));
        i.globalAlpha = 1;
        break;
      }
      case `dots`: {
        i.fillStyle = Y(n);
        let e = s / 3;
        for (let t = 0; t < 3; t++)
          for (let n = 0; n < 3; n++) {
            let r = a + (n + 0.5 + (t % 2) * 0.5) * e,
              l = o + (t + 0.5) * e;
            ni(s, c, (t, n) => {
              (i.beginPath(),
                i.arc(r + t, l + n, e * 0.16, 0, Math.PI * 2),
                i.fill());
            });
          }
        break;
      }
      case `floral`: {
        let e = [n, $r(n, 16777215, 0.45), $r(n, 16724821, 0.4), 16773832],
          r = $r(3111482, t, 0.25);
        for (let e = 0; e < 16; e++) {
          let e = a + l() * s,
            t = o + l() * c,
            n = l() * Math.PI,
            u = s * (0.05 + l() * 0.05);
          ((i.fillStyle = Y(r)),
            ni(s, c, (r, a) => {
              (i.beginPath(),
                i.ellipse(e + r, t + a, u, u * 0.38, n, 0, Math.PI * 2),
                i.fill());
            }));
        }
        for (let t = 0; t < 9; t++) {
          let t = a + l() * s,
            n = o + l() * c,
            r = s * (0.06 + l() * 0.06),
            u = l() * 6,
            d = e[Math.floor(l() * e.length)];
          ni(s, c, (e, a) => {
            i.fillStyle = Y(d);
            for (let o = 0; o < 5; o++) {
              let s = u + (o * Math.PI * 2) / 5;
              (i.beginPath(),
                i.ellipse(
                  t + e + Math.cos(s) * r * 0.55,
                  n + a + Math.sin(s) * r * 0.55,
                  r * 0.52,
                  r * 0.36,
                  s,
                  0,
                  Math.PI * 2,
                ),
                i.fill());
            }
            ((i.fillStyle = Y($r(d, 0, 0.35), 0.8)),
              i.beginPath(),
              i.arc(t + e, n + a, r * 0.22, 0, Math.PI * 2),
              i.fill(),
              (i.fillStyle = `rgba(255,236,150,0.95)`),
              i.beginPath(),
              i.arc(t + e, n + a, r * 0.11, 0, Math.PI * 2),
              i.fill());
          });
        }
        for (let t = 0; t < 22; t++) {
          let n = a + l() * s,
            r = o + l() * c;
          ((i.fillStyle = Y(e[t % 3], 0.9)),
            ni(s, c, (e, t) => {
              (i.beginPath(),
                i.arc(n + e, r + t, s * 0.012 + l() * s * 0.01, 0, Math.PI * 2),
                i.fill());
            }));
        }
        break;
      }
      case `camo`: {
        let e = [n, $r(t, 0, 0.35), $r(n, 14207136, 0.5)];
        for (let t = 0; t < 26; t++) {
          let n = a + l() * s,
            r = o + l() * c,
            u = s * (0.06 + l() * 0.08);
          ((i.fillStyle = Y(e[t % 3])),
            ni(s, c, (e, t) => {
              i.beginPath();
              for (let a = 0; a < 7; a++) {
                let o = (a / 7) * Math.PI * 2,
                  s = u * (0.6 + l() * 0.6),
                  c = n + e + Math.cos(o) * s * 1.4,
                  d = r + t + Math.sin(o) * s;
                a === 0 ? i.moveTo(c, d) : i.lineTo(c, d);
              }
              (i.closePath(), i.fill());
            }));
        }
        break;
      }
      case `denim`:
        oi(i, a, o, s, c, 0.22);
        for (let e = 0; e < 70; e++)
          ((i.fillStyle = `rgba(255,255,255,${(0.05 + l() * 0.1).toFixed(3)})`),
            i.fillRect(a + l() * s, o + l() * c, 1, 4 + l() * 12));
        break;
      case `knit`: {
        let e = s / 8;
        for (let t = 0; t < 8; t++) {
          ((i.fillStyle = `rgba(0,0,0,0.16)`),
            i.fillRect(a + t * e, o, 1.5, c));
          for (let n = 0; n < 8; n++) {
            let r = o + (n * c) / 8;
            ((i.strokeStyle = `rgba(255,255,255,0.18)`),
              (i.lineWidth = 1.4),
              i.beginPath(),
              i.moveTo(a + t * e + 2, r + 1),
              i.lineTo(a + t * e + e / 2, r + c / 8 - 2),
              i.lineTo(a + t * e + e - 2, r + 1),
              i.stroke());
          }
        }
        break;
      }
      default:
        oi(i, a, o, s, c, 0.05);
    }
  };
}
function oi(e, t, n, r, i, a) {
  (e.save(), (e.strokeStyle = `rgba(0,0,0,${a})`), (e.lineWidth = 1));
  for (let a = -i; a < r + i; a += 3)
    (e.beginPath(), e.moveTo(t + a, n), e.lineTo(t + a + i, n + i), e.stroke());
  e.strokeStyle = `rgba(255,255,255,${a * 0.6})`;
  for (let a = -i + 1; a < r + i; a += 6)
    (e.beginPath(), e.moveTo(t + a, n), e.lineTo(t + a + i, n + i), e.stroke());
  e.restore();
}
function si(e, t, n) {
  return (r, i, a, o, s) => {
    (r.clearRect(i, a, o, s),
      (r.fillStyle = Y(e)),
      r.fillRect(i + o * 0.3, a, o * 0.4, s),
      (r.fillStyle = Y(ei(e, 0.78))),
      r.fillRect(i + o * 0.3, a, 1.5, s),
      r.fillRect(i + o * 0.7 - 1.5, a, 1.5, s));
    for (let e = 0; e < n; e++) {
      let c = a + ((e + 0.5) / n) * s;
      ((r.fillStyle = Y(ei(t, 0.7))),
        r.beginPath(),
        r.arc(i + o / 2, c + 0.8, o * 0.17, 0, Math.PI * 2),
        r.fill(),
        (r.fillStyle = Y(t)),
        r.beginPath(),
        r.arc(i + o / 2, c, o * 0.16, 0, Math.PI * 2),
        r.fill(),
        (r.fillStyle = `rgba(0,0,0,0.35)`));
      for (let [e, t] of [
        [-1, -1],
        [1, -1],
        [-1, 1],
        [1, 1],
      ])
        r.fillRect(
          i + o / 2 + e * o * 0.05 - 0.6,
          c + t * o * 0.05 - 0.6,
          1.3,
          1.3,
        );
    }
  };
}
function ci(e, t) {
  return (n, r, i, a, o) => {
    (n.clearRect(r, i, a, o),
      (n.fillStyle = Y(e)),
      n.fillRect(r + a * 0.25, i, a * 0.5, o),
      (n.fillStyle = Y(t)));
    for (let e = 0; e < o; e += 3)
      n.fillRect(r + a * 0.4 + ((e / 3) % 2) * a * 0.08, i + e, a * 0.14, 2);
    ((n.fillStyle = Y(ei(t, 0.85))),
      n.fillRect(r + a * 0.38, i + o * 0.04, a * 0.24, o * 0.05));
  };
}
function li(e, t, n) {
  return (r, i, a, o, s) => {
    (r.clearRect(i, a, o, s),
      r.save(),
      r.beginPath(),
      n === `jeans`
        ? (r.moveTo(i + o * 0.08, a + s * 0.06),
          r.lineTo(i + o * 0.92, a + s * 0.06),
          r.lineTo(i + o * 0.88, a + s * 0.72),
          r.lineTo(i + o * 0.5, a + s * 0.94),
          r.lineTo(i + o * 0.12, a + s * 0.72))
        : n === `chest`
          ? r.rect(i + o * 0.08, a + s * 0.08, o * 0.84, s * 0.84)
          : (r.moveTo(i + o * 0.22, a + s * 0.05),
            r.lineTo(i + o * 0.78, a + s * 0.05),
            r.lineTo(i + o * 0.95, a + s * 0.6),
            r.lineTo(i + o * 0.95, a + s * 0.95),
            r.lineTo(i + o * 0.05, a + s * 0.95),
            r.lineTo(i + o * 0.05, a + s * 0.6)),
      r.closePath(),
      (r.fillStyle = Y(ei(e, 0.96))),
      r.fill(),
      (r.lineWidth = Math.max(2, o * 0.03)),
      (r.strokeStyle = Y(ei(e, 0.72))),
      r.stroke(),
      r.setLineDash([o * 0.035, o * 0.025]),
      (r.lineWidth = Math.max(1, o * 0.014)),
      (r.strokeStyle = Y(t)),
      r.stroke(),
      n === `pouch` &&
        (r.setLineDash([]),
        (r.strokeStyle = Y(ei(e, 0.55))),
        (r.lineWidth = o * 0.03),
        r.beginPath(),
        r.moveTo(i + o * 0.22, a + s * 0.05),
        r.lineTo(i + o * 0.06, a + s * 0.58),
        r.moveTo(i + o * 0.78, a + s * 0.05),
        r.lineTo(i + o * 0.94, a + s * 0.58),
        r.stroke()),
      r.restore());
  };
}
function ui(e, t, n) {
  return (r, i, a, o, s) => {
    ((r.fillStyle = Y(e)), r.fillRect(i, a, o, s));
    for (let e = 0; e < 16; e++)
      ((r.fillStyle = `rgba(0,0,0,0.14)`),
        r.fillRect(i + (e * o) / 16, a, o / 16 / 3, s));
    n &&
      ((r.fillStyle = Y(t)),
      r.fillRect(i, a + s * 0.3, o, s * 0.12),
      r.fillRect(i, a + s * 0.55, o, s * 0.12));
  };
}
function di(e, t, n) {
  return (r, i, a, o, s) => {
    r.clearRect(i, a, o, s);
    let c = i + o / 2,
      l = a + s / 2,
      u = (e, t = !0) =>
        `${t ? `900` : `600`} ${Math.round(e)}px "PingFang TC","Noto Sans TC","Microsoft JhengHei","Heiti TC","Noto Sans CJK TC",system-ui,sans-serif`;
    switch (((r.textAlign = `center`), (r.textBaseline = `middle`), e)) {
      case `jie`: {
        let e = `#e8b54a`,
          t = `#f3e6c4`;
        ((r.fillStyle = Y(n)),
          r.beginPath(),
          r.arc(c, l - s * 0.04, o * 0.4, 0, Math.PI * 2),
          r.fill(),
          (r.strokeStyle = e),
          (r.lineWidth = o * 0.022),
          r.stroke(),
          (r.fillStyle = `#c8202c`),
          r.beginPath(),
          r.arc(c, l - s * 0.02, o * 0.25, Math.PI, 0),
          r.fill(),
          (r.strokeStyle = `#f07a1e`),
          (r.lineWidth = o * 0.012));
        for (let e = 0; e <= 8; e++) {
          let t = Math.PI + (e / 8) * Math.PI;
          (r.beginPath(),
            r.moveTo(
              c + Math.cos(t) * o * 0.27,
              l - s * 0.02 + Math.sin(t) * o * 0.27,
            ),
            r.lineTo(
              c + Math.cos(t) * o * 0.36,
              l - s * 0.02 + Math.sin(t) * o * 0.36,
            ),
            r.stroke());
        }
        r.fillStyle = t;
        let i = l + s * 0.1,
          a = s * 0.045;
        for (let e = 0; e < 8; e++) {
          let t = i - (e + 1) * a;
          (r.beginPath(),
            r.moveTo(c - o * 0.035, t + a),
            r.lineTo(c - o * 0.05, t + a * 0.1),
            r.lineTo(c + o * 0.05, t + a * 0.1),
            r.lineTo(c + o * 0.035, t + a),
            r.fill());
        }
        (r.fillRect(c - o * 0.04, i, o * 0.08, s * 0.05),
          r.fillRect(c - o * 0.006, i - 8 * a - s * 0.08, o * 0.012, s * 0.08),
          (r.fillStyle = `#ffffff`));
        for (let [e, t] of [
          [-0.2, 1],
          [0.19, 0.9],
          [-0.05, 0.7],
        ])
          for (let n = 0; n < 3; n++)
            (r.beginPath(),
              r.arc(
                c + (e + (n - 1) * 0.05 * t) * o,
                i + s * 0.03 - (n === 1 ? s * 0.02 : 0),
                o * 0.045 * t,
                0,
                Math.PI * 2,
              ),
              r.fill());
        ((r.font = u(s * 0.2)),
          (r.fillStyle = e),
          (r.strokeStyle = `#3a2410`),
          (r.lineWidth = o * 0.014),
          r.strokeText(`台北`, c, l + s * 0.27),
          r.fillText(`台北`, c, l + s * 0.27),
          (r.font = u(s * 0.07)),
          (r.fillStyle = t),
          fi(
            r,
            `TAIPEI  RUSH`,
            c,
            l - s * 0.04,
            o * 0.44,
            -Math.PI / 2,
            s * 0.07,
          ));
        break;
      }
      case `wen`: {
        ((r.fillStyle = Y(t)),
          r.beginPath(),
          r.moveTo(c - o * 0.42, l - s * 0.05),
          r.quadraticCurveTo(c - o * 0.2, l - s * 0.32, c, l - s * 0.12),
          r.quadraticCurveTo(
            c + o * 0.2,
            l - s * 0.32,
            c + o * 0.42,
            l - s * 0.05,
          ),
          r.quadraticCurveTo(c + o * 0.2, l - s * 0.1, c, l + s * 0.02),
          r.quadraticCurveTo(
            c - o * 0.2,
            l - s * 0.1,
            c - o * 0.42,
            l - s * 0.05,
          ),
          r.fill());
        let e = o * 0.035;
        for (let t = 0; t < 3; t++)
          for (let i = -6; i < 6; i++)
            (i + t) % 2 ||
              ((r.fillStyle = Y(n)),
              r.fillRect(c + i * e, l - s * 0.2 + t * e, e, e));
        ((r.fillStyle = `#ff6f61`),
          r.beginPath(),
          r.ellipse(c, l + s * 0.1, o * 0.07, s * 0.09, 0, 0, Math.PI * 2),
          r.fill(),
          (r.fillStyle = `#ffd98a`),
          r.fillRect(c - o * 0.05, l + s * 0.005, o * 0.1, s * 0.02),
          r.fillRect(c - o * 0.05, l + s * 0.18, o * 0.1, s * 0.02),
          (r.font = u(s * 0.12)),
          (r.fillStyle = Y(t)),
          r.fillText(`夜市車神`, c, l + s * 0.33));
        break;
      }
      case `taipei`:
        ((r.fillStyle = Y(t)),
          (r.font = u(s * 0.24)),
          r.fillText(`TAIPEI`, c, l - s * 0.06),
          (r.font = u(s * 0.12, !1)),
          r.fillText(`臺 北 · 101`, c, l + s * 0.16),
          r.fillRect(i + o * 0.15, l + s * 0.06, o * 0.7, s * 0.015));
        break;
      case `logo`:
        ((r.fillStyle = Y(t)),
          r.beginPath(),
          r.moveTo(c - o * 0.2, l + s * 0.16),
          r.lineTo(c, l - s * 0.24),
          r.lineTo(c + o * 0.2, l + s * 0.16),
          r.closePath(),
          r.fill(),
          (r.fillStyle = Y(n)),
          r.beginPath(),
          r.moveTo(c - o * 0.08, l + s * 0.16),
          r.lineTo(c + o * 0.02, l - s * 0.04),
          r.lineTo(c + o * 0.12, l + s * 0.16),
          r.closePath(),
          r.fill(),
          (r.fillStyle = Y(t)),
          (r.font = u(s * 0.13)),
          r.fillText(`SUMMIT`, c, l + s * 0.33));
        break;
      case `band`:
        ((r.fillStyle = Y(t)),
          (r.font = u(s * 0.16)),
          r.fillText(`臺北雜音`, c, l - s * 0.28),
          r.beginPath(),
          r.moveTo(c + o * 0.06, l - s * 0.16),
          r.lineTo(c - o * 0.12, l + s * 0.06),
          r.lineTo(c, l + s * 0.06),
          r.lineTo(c - o * 0.08, l + s * 0.26),
          r.lineTo(c + o * 0.14, l - s * 0.02),
          r.lineTo(c + o * 0.02, l - s * 0.02),
          r.closePath(),
          r.fill(),
          (r.font = u(s * 0.1)),
          r.fillText(`TAIPEI NOISE`, c, l + s * 0.38));
        break;
      case `rider-pink`:
      case `rider-green`: {
        let t = e === `rider-pink`;
        if (
          ((r.fillStyle = t ? `#ffffff` : `#111111`),
          r.beginPath(),
          r.arc(c, l - s * 0.12, o * 0.19, 0, Math.PI * 2),
          r.fill(),
          (r.fillStyle = t ? Y(n) : `#3ce07a`),
          t)
        ) {
          (r.beginPath(),
            r.arc(c, l - s * 0.1, o * 0.11, 0, Math.PI * 2),
            r.fill());
          for (let e of [-1, 1])
            (r.beginPath(),
              r.arc(c + e * o * 0.09, l - s * 0.2, o * 0.045, 0, Math.PI * 2),
              r.fill());
          r.fillStyle = `#ffffff`;
          for (let e of [-1, 1])
            (r.beginPath(),
              r.arc(c + e * o * 0.04, l - s * 0.12, o * 0.017, 0, Math.PI * 2),
              r.fill());
          (r.beginPath(),
            r.ellipse(c, l - s * 0.06, o * 0.035, s * 0.022, 0, 0, Math.PI * 2),
            r.fill());
        } else ((r.font = u(s * 0.2)), r.fillText(`食`, c, l - s * 0.11));
        ((r.fillStyle = t ? `#ffffff` : `#111111`),
          (r.font = u(s * 0.14)),
          r.fillText(t ? `餓熊外送` : `快食GO`, c, l + s * 0.16),
          (r.font = u(s * 0.08)),
          r.fillText(t ? `FOODBEAR` : `EATZ GO`, c, l + s * 0.3));
        break;
      }
      case `police`:
        ((r.fillStyle = Y(t)),
          (r.font = u(s * 0.2)),
          r.fillText(`警 察`, c, l - s * 0.12),
          (r.font = u(s * 0.16)),
          r.fillText(`POLICE`, c, l + s * 0.12));
        break;
      case `school`:
        ((r.fillStyle = Y(t)),
          (r.font = u(s * 0.2, !1)),
          r.fillText(`北城高中`, c, l - s * 0.14),
          (r.font = u(s * 0.17, !1)),
          r.fillText(`110521`, c, l + s * 0.14));
    }
  };
}
function fi(e, t, n, r, i, a, o) {
  let s = t.length,
    c = (s * o * 0.62) / i;
  for (let o = 0; o < s; o++) {
    let l = a - c / 2 + (o + 0.5) * (c / s);
    (e.save(),
      e.translate(n + Math.cos(l) * i, r + Math.sin(l) * i),
      e.rotate(l + Math.PI / 2),
      e.fillText(t[o], 0, 0),
      e.restore());
  }
}
function pi(e, t, n, r, i) {
  return (a, o, s, c, l) => {
    let u = ti(e.length * 31 + (t & 255)),
      d = (e) => s + e * l,
      f = (e) => o + e * c,
      p = e === `sneaker` || e === `boot`,
      m = e === `dress` || e === `loafer` || e === `heel` || e === `flat`;
    (a.clearRect(o, s, c, l), (a.fillStyle = Y(t)), a.fillRect(o, s, c, l));
    for (let e = 0; e < 40; e++)
      ((a.fillStyle = m
        ? `rgba(255,255,255,${(0.03 + u() * 0.05).toFixed(3)})`
        : `rgba(0,0,0,${(0.02 + u() * 0.03).toFixed(3)})`),
        a.fillRect(f(u()), d(u()), c * (0.05 + u() * 0.2), 1));
    let h = p ? 0.2 : e === `rainboot` ? 0.13 : 0.11;
    if (
      ((a.fillStyle = Y(r)),
      a.fillRect(o, d(0), c, h * l),
      a.fillRect(o, d(1 - h), c, h * l),
      (a.fillStyle = Y(ei(r, 0.72))),
      a.fillRect(o, d(h) - 1.5, c, 2),
      a.fillRect(o, d(1 - h) - 0.5, c, 2),
      p)
    ) {
      a.fillStyle = Y(ei(r, 0.85));
      for (let e = 0; e < 18; e++)
        (a.fillRect(f(e / 18), d(0), 1, h * l * 0.5),
          a.fillRect(f(e / 18), d(1 - h * 0.5), 1, h * l * 0.5));
      ((a.fillStyle = Y(ei(r, 0.9))),
        a.fillRect(o, d(h * 0.6), c, 1.5),
        a.fillRect(o, d(1 - h * 0.6), c, 1.5));
    }
    if (p) {
      ((a.fillStyle = Y(ei(t, 0.94))),
        a.fillRect(f(0.84), d(h), c * 0.16, l * (1 - 2 * h)),
        (a.strokeStyle = Y(ei(t, 0.75))),
        a.setLineDash([3, 2]),
        (a.lineWidth = 1),
        a.beginPath(),
        a.moveTo(f(0.84), d(h)),
        a.lineTo(f(0.84), d(1 - h)),
        a.stroke(),
        a.setLineDash([]),
        (a.fillStyle = Y(n)),
        a.fillRect(o, d(0.36), c * 0.1, l * 0.28));
      for (let e of [0.27, 0.73])
        ((a.fillStyle = Y(n)),
          a.beginPath(),
          a.moveTo(f(0.18), d(e + 0.1 * (e < 0.5 ? -1 : 1) * 0)),
          a.bezierCurveTo(
            f(0.35),
            d(e + 0.07),
            f(0.55),
            d(e + 0.02),
            f(0.72),
            d(e - 0.1),
          ),
          a.lineTo(f(0.7), d(e - 0.04)),
          a.bezierCurveTo(
            f(0.52),
            d(e + 0.07),
            f(0.34),
            d(e + 0.12),
            f(0.18),
            d(e + 0.08),
          ),
          a.closePath(),
          a.fill());
      ((a.fillStyle = Y(ei(t, 0.9))),
        a.fillRect(f(0.34), d(0.42), c * 0.34, l * 0.16),
        (a.strokeStyle = Y(e === `boot` ? 3811866 : 16185074)),
        (a.lineWidth = 2.2));
      for (let e = 0; e < 6; e++) {
        let t = 0.36 + e * 0.05;
        (a.beginPath(),
          a.moveTo(f(t), d(0.43)),
          a.lineTo(f(t + 0.035), d(0.57)),
          a.moveTo(f(t), d(0.57)),
          a.lineTo(f(t + 0.035), d(0.43)),
          a.stroke());
      }
      a.fillStyle = Y(ei(t, 0.6));
      for (let e = 0; e < 7; e++)
        (a.fillRect(f(0.355 + e * 0.05), d(0.425), 2, 2),
          a.fillRect(f(0.355 + e * 0.05), d(0.565), 2, 2));
      ((a.fillStyle = `rgba(20,18,16,0.95)`),
        a.fillRect(o, d(0.46), c * 0.28, l * 0.08));
    } else if (m) {
      if (
        ((a.strokeStyle = Y(ei(t, 0.6))),
        (a.lineWidth = 1.2),
        a.beginPath(),
        a.ellipse(
          f(0.83),
          d(0.5),
          c * 0.1,
          l * 0.22,
          0,
          Math.PI * 0.5,
          Math.PI * 1.5,
        ),
        a.stroke(),
        e === `loafer` &&
          ((a.fillStyle = Y(ei(t, 0.82))),
          a.fillRect(f(0.52), d(0.4), c * 0.06, l * 0.2)),
        e === `dress`)
      ) {
        ((a.strokeStyle = Y(ei(t, 0.45))), (a.lineWidth = 1.5));
        for (let e = 0; e < 4; e++)
          (a.beginPath(),
            a.moveTo(f(0.46 + e * 0.045), d(0.46)),
            a.lineTo(f(0.46 + e * 0.045), d(0.54)),
            a.stroke());
      }
      ((a.fillStyle = `rgba(16,14,12,0.95)`),
        a.fillRect(o, d(0.47), c * 0.26, l * 0.06),
        i && a.clearRect(f(0.18), d(0.36), c * 0.55, l * 0.28));
    } else
      e === `rainboot` &&
        ((a.fillStyle = `rgba(255,255,255,0.12)`),
        a.fillRect(o, d(0.3), c, l * 0.05),
        (a.fillStyle = `rgba(16,14,12,0.9)`),
        a.fillRect(o, d(0.46), c * 0.2, l * 0.08));
  };
}
function mi(e, t) {
  return (n, r, i, a, o) => {
    let s = [e, 16052974, t, 16052974, e, 16052974],
      c = a / s.length;
    s.forEach((e, t) => {
      ((n.fillStyle = Y(e)), n.fillRect(r + t * c, i, c + 1, o));
    });
    for (let e = 0; e < o; e += 4)
      for (let t = 0; t < a; t += 4)
        ((n.fillStyle =
          ((t + e) / 4) % 2 ? `rgba(0,0,0,0.12)` : `rgba(255,255,255,0.1)`),
          n.fillRect(r + t, i + e, 4, 2));
  };
}
function hi(e) {
  return !!e.tiles || !!(e.atlas && e.page);
}
function gi(e, t, n, r, i, a) {
  return e.tiles
    ? e.tiles.tile(t, n, r, i, a)
    : e.atlas && e.page
      ? e.atlas.tile(e.page, t, n, r, i, a)
      : null;
}
function _i(e, t, n, r = 16777215) {
  let i = t ?? `solid`;
  return hi(e)
    ? i === `solid` || i === `knit`
      ? {
          vcol: n,
          rect:
            i === `knit`
              ? gi(
                  e,
                  `knit:ffffff`,
                  128,
                  128,
                  !0,
                  ai(`knit`, 15921906, 16777215, 5),
                )
              : gi(e, `weave`, 128, 128, !0, ri),
          tileM: i === `knit` ? 0.06 : 0.045,
        }
      : i === `denim`
        ? {
            vcol: n,
            rect: gi(
              e,
              `denim`,
              128,
              128,
              !0,
              ai(`denim`, 15790320, 16777215, 9),
            ),
            tileM: 0.05,
          }
        : {
            vcol: 16777215,
            rect: gi(
              e,
              `pat:${i}:${n.toString(16)}:${r.toString(16)}`,
              128,
              128,
              !0,
              ai(i, n, r, (n ^ (r << 3)) & 65535),
            ),
            tileM: i === `stripes` ? 0.09 : 0.11,
          }
    : {
        vcol: $r(
          n,
          r,
          {
            stripes: 0.3,
            floral: 0.4,
            plaid: 0.35,
            check: 0.3,
            dots: 0.12,
            camo: 0.4,
            knit: 0,
            denim: 0,
            solid: 0,
          }[i] ?? 0,
        ),
        rect: null,
        tileM: 1,
      };
}
function vi(e) {
  return gi(e, `hair3`, 128, 128, !0, ii);
}
function yi(e, t, n, r) {
  return gi(e, `rib:${t}:${n}:${r}`, 128, 64, !0, ui(t, n, r));
}
function bi(e, t, n, r) {
  return t === `none`
    ? null
    : gi(e, `print:${t}:${n}:${r}`, 256, 256, !1, di(t, n, r));
}
function xi(e, t, n) {
  return gi(e, `placket:${t}:${n}`, 32, 256, !1, si(t, n, 6));
}
function Si(e, t, n) {
  return gi(e, `zip:${t}:${n}`, 16, 256, !1, ci(t, n));
}
function Ci(e, t, n, r) {
  return gi(e, `pocket:${r}:${t}:${n}`, 96, 96, !1, li(t, n, r));
}
function wi(e, t) {
  return Math.max(1, Math.round((Math.PI * 2 * e) / t));
}
const Ti = new N();
function X(e, t) {
  return Ti.setHex(e).multiplyScalar(t).getHex();
}
const Z = Math.PI * 2,
  Ei = (e, t, n) => e + (t - e) * n,
  Q = (e, t) => Math.exp(-(e * e) / (t * t)),
  Di = (e, t) => {
    let n = (e - t) % Z;
    return (n > Math.PI && (n -= Z), n < -Math.PI && (n += Z), n);
  },
  Oi = { none: -1, short: 0.4, elbow: 0.95, long: 1.93 },
  ki = {
    tee: {
      hem: 0.502,
      sleeve: `short`,
      off: 0.004,
      loose: 0.45,
      collar: `crew`,
      neckF: 0.834,
      neckB: 0.846,
    },
    polo: {
      hem: 0.506,
      sleeve: `short`,
      off: 0.005,
      loose: 0.4,
      collar: `polo`,
      neckF: 0.838,
      neckB: 0.85,
    },
    shirt: {
      hem: 0.49,
      sleeve: `long`,
      off: 0.0045,
      loose: 0.32,
      collar: `shirt`,
      neckF: 0.838,
      neckB: 0.852,
    },
    uniform: {
      hem: 0.5,
      sleeve: `short`,
      off: 0.0045,
      loose: 0.38,
      collar: `shirt`,
      neckF: 0.838,
      neckB: 0.852,
    },
    blouse: {
      hem: 0.53,
      sleeve: `short`,
      off: 0.004,
      loose: 0.62,
      collar: `crew`,
      neckF: 0.818,
      neckB: 0.842,
    },
    tank: {
      hem: 0.505,
      sleeve: `none`,
      off: 0.003,
      loose: 0.25,
      collar: `crew`,
      neckF: 0.795,
      neckB: 0.828,
      armhole: !0,
    },
    hoodie: {
      hem: 0.49,
      sleeve: `long`,
      off: 0.011,
      loose: 0.8,
      collar: `hood`,
      neckF: 0.836,
      neckB: 0.85,
      rib: !0,
    },
    sweater: {
      hem: 0.5,
      sleeve: `long`,
      off: 0.009,
      loose: 0.6,
      collar: `crew`,
      neckF: 0.836,
      neckB: 0.848,
      rib: !0,
    },
    police: {
      hem: 0.5,
      sleeve: `long`,
      off: 0.005,
      loose: 0.38,
      collar: `shirt`,
      neckF: 0.838,
      neckB: 0.852,
    },
    rider: {
      hem: 0.49,
      sleeve: `long`,
      off: 0.012,
      loose: 0.72,
      collar: `high`,
      neckF: 0.842,
      neckB: 0.855,
      rib: !0,
    },
    sailor: {
      hem: 0.515,
      sleeve: `long`,
      off: 0.0045,
      loose: 0.5,
      collar: `none`,
      neckF: 0.812,
      neckB: 0.85,
    },
    yukata: {
      hem: 0.5,
      sleeve: `elbow`,
      off: 0.006,
      loose: 0.45,
      collar: `none`,
      neckF: 0.79,
      neckB: 0.852,
    },
  },
  Ai = {
    bomber: {
      hem: 0.52,
      sleeve: `long`,
      off: 0.02,
      loose: 0.85,
      gap: 0.2,
      collar: `rib`,
      ribHem: !0,
      neck: 0.848,
    },
    cropped: {
      hem: 0.632,
      sleeve: `long`,
      off: 0.013,
      loose: 0.6,
      gap: 0.26,
      collar: `rib`,
      ribHem: !0,
      neck: 0.846,
    },
    blazer: {
      hem: 0.455,
      sleeve: `long`,
      off: 0.012,
      loose: 0.3,
      gap: 0.24,
      collar: `lapel`,
      ribHem: !1,
      neck: 0.85,
    },
    cardigan: {
      hem: 0.47,
      sleeve: `long`,
      off: 0.009,
      loose: 0.5,
      gap: 0.26,
      collar: `v`,
      ribHem: !0,
      neck: 0.845,
    },
    vest: {
      hem: 0.5,
      sleeve: `none`,
      off: 0.012,
      loose: 0.25,
      gap: 0,
      collar: `v`,
      ribHem: !1,
      neck: 0.84,
    },
    windbreaker: {
      hem: 0.49,
      sleeve: `long`,
      off: 0.016,
      loose: 0.8,
      gap: 0,
      collar: `high`,
      ribHem: !1,
      neck: 0.855,
    },
    poncho: {
      hem: 0.44,
      sleeve: `none`,
      off: 0.03,
      loose: 1,
      gap: 0,
      collar: `none`,
      ribHem: !1,
      neck: 0.85,
    },
    jacket: {
      hem: 0.505,
      sleeve: `long`,
      off: 0.011,
      loose: 0.3,
      gap: 0.2,
      collar: `lapel`,
      ribHem: !1,
      neck: 0.85,
    },
    gakuran: {
      hem: 0.475,
      sleeve: `long`,
      off: 0.012,
      loose: 0.32,
      gap: 0,
      collar: `high`,
      ribHem: !1,
      neck: 0.852,
    },
    happi: {
      hem: 0.45,
      sleeve: `elbow`,
      off: 0.012,
      loose: 0.55,
      gap: 0.16,
      collar: `none`,
      ribHem: !1,
      neck: 0.846,
    },
  },
  ji = {
    jeans: {
      waist: 0.572,
      legT: 1.93,
      off: 0.006,
      loose: 0.22,
      pattern: `denim`,
    },
    slacks: { waist: 0.585, legT: 1.96, off: 0.005, loose: 0.45 },
    shorts: { waist: 0.575, legT: 0.55, off: 0.006, loose: 0.55 },
    skirt: {
      waist: 0.605,
      legT: -1,
      off: 0.004,
      loose: 0,
      skirt: { hem: 0.33, flare: 0.13, pleats: 12 },
    },
    pencil: {
      waist: 0.6,
      legT: -1,
      off: 0.004,
      loose: 0,
      skirt: { hem: 0.3, flare: -0.01, pleats: 0 },
    },
    longskirt: {
      waist: 0.6,
      legT: -1,
      off: 0.004,
      loose: 0,
      skirt: { hem: 0.075, flare: 0.22, pleats: 0 },
    },
    wide: { waist: 0.62, legT: 1.985, off: 0.005, loose: 1, flare: 0.012 },
    track: { waist: 0.58, legT: 1.9, off: 0.007, loose: 0.5 },
    leggings: { waist: 0.6, legT: 1.92, off: 0.0018, loose: 0 },
    robe: {
      waist: 0.6,
      legT: -1,
      off: 0.005,
      loose: 0,
      skirt: { hem: 0.07, flare: 0.035, pleats: 0 },
    },
  };
function Mi(e, t) {
  let n = t.H,
    r = ji[e.bottom.style],
    i = {
      style: e.bottom.style,
      waistY: r.waist * n,
      legT: r.legT,
      off: r.off,
      loose: r.loose,
      flare: r.flare ?? 0,
      color: e.bottom.color,
      color2: e.bottom.color2 ?? e.bottom.color,
      pattern: e.bottom.pattern ?? r.pattern ?? `solid`,
      patternColor: e.bottom.patternColor ?? 16777215,
      belt: e.bottom.belt ?? 0,
      skirt: r.skirt
        ? {
            hemY: r.skirt.hem * n,
            flare: r.skirt.flare,
            pleats: r.skirt.pleats,
          }
        : null,
    },
    a = null;
  if (e.top.style !== `none`) {
    let t = ki[e.top.style],
      r = e.top.sleeve ?? t.sleeve,
      o = Oi[r];
    r === `short` &&
      (e.top.style === `polo` || e.top.style === `uniform`) &&
      (o = 0.36);
    let s = e.top.tucked ?? e.top.style === `police`;
    ((a = {
      style: e.top.style,
      hemY: s ? i.waistY - 0.035 : (t.hem - (e.top.length ?? 0) / n) * n,
      neckF: t.neckF * n,
      neckB: t.neckB * n,
      sleeveT: o,
      off: t.off,
      loose: s ? t.loose * 0.6 : (e.top.fit ?? t.loose),
      tucked: s,
      armhole: !!t.armhole,
      collar: t.collar,
      rib: !!t.rib,
      color: e.top.color,
      color2: e.top.color2 ?? e.top.color,
      pattern:
        e.top.pattern ??
        (e.top.style === `sweater` || e.top.style === `tank`
          ? `knit`
          : `solid`),
      patternColor: e.top.patternColor ?? 16777215,
      print: e.top.print ?? `none`,
    }),
      e.top.style === `police` && (a.hemY = i.waistY - 0.035));
  }
  let o = null;
  if (e.outer) {
    let t = Ai[e.outer.style];
    a &&
      (e.outer.style === `vest` || e.outer.style === `poncho`) &&
      (a.hemY = Math.max(a.hemY, 0.74 * n));
    let r = e.outer.sleeve ?? t.sleeve;
    o = {
      style: e.outer.style,
      hemY: e.outer.length ? (t.hem - e.outer.length / n) * n : t.hem * n,
      neckY: t.neck * n,
      sleeveT: Oi[r],
      off:
        t.off +
        (a && (a.style === `hoodie` || a.style === `sweater`) ? 0.006 : 0),
      loose: t.loose,
      gap: e.outer.closed ? 0 : t.gap,
      ...(e.outer.over ? { over: !0 } : null),
      collar: t.collar,
      ribHem: t.ribHem,
      color: e.outer.color,
      color2: e.outer.color2 ?? e.outer.color,
      pattern:
        e.outer.pattern ?? (e.outer.style === `cardigan` ? `knit` : `solid`),
      patternColor: e.outer.patternColor ?? 16777215,
      print: e.outer.print ?? `none`,
    };
  }
  let s = e.shoes.style,
    c =
      s === `boot` || s === `rainboot`
        ? 1.58
        : s === `slipper` || s === `sandal`
          ? 2.2
          : 1.97,
    l = null;
  e.socks &&
    s !== `slipper` &&
    s !== `sandal` &&
    (l = {
      color: e.socks,
      topT: e.age === `student` && i.skirt ? 1.52 : 1.74,
    });
  let u = t.torsoTop;
  return (
    !a && !o
      ? (u = (i.skirt, i.waistY - 0.03))
      : ((u = Math.min(a ? a.neckF : 1 / 0, o && !a ? o.neckY : 1 / 0) - 0.025),
        a?.armhole && (u = Math.min(u, 0.785 * n))),
    { top: a, outer: o, bottom: i, socks: l, shoeT: c, skinY0: u }
  );
}
function Ni(e, t, n, r, i, a = !0) {
  let o = J(e, t, n, a);
  if (i > 0) {
    let r = Ei(1.1, 0.08, Math.min(1, i)),
      a = e.H * 0.77;
    for (let i = 1; i <= 6; i++) {
      let s = n + i * 0.035;
      if (s > a) break;
      o = Math.max(o, J(e, t, s, !0) - r * (s - n));
    }
  }
  let s = Math.abs(Di(t, 0)) - Math.PI / 2,
    c =
      U(e.H * 0.72, e.H * 0.77, n) *
      (1 - U(e.H * 0.785, e.H * 0.812, n)) *
      Math.exp(-(s * s) / 0.3);
  return o + (r + i * 0.006) * (1 - 0.75 * c);
}
function Pi(e) {
  let { top: t, outer: n, bottom: r } = e;
  return t && !t.tucked && t.hemY < r.waistY
    ? { hemY: t.hemY, off: t.off, loose: t.loose }
    : n && (n.gap === 0 || n.over) && n.hemY < r.waistY
      ? { hemY: n.hemY, off: n.off, loose: n.loose }
      : null;
}
function Fi(e, t, n, r, i) {
  if (!t || r < t.hemY - 0.005) return i;
  let a = U(t.hemY - 0.005, t.hemY + 0.012, r),
    o = Ni(e, n, r, t.off, t.loose) - 0.006;
  return i > o ? Ei(i, o, a) : i;
}
function Ii(e, t, n, r, i, a, o, s) {
  let c = Kr(e, t, n),
    l = 0.45 + 0.55 * U(-0.05, 0.4, n);
  return c + (r + i * 0.008) * l + s * U(a, o, n);
}
function Li(e, t, n, r, i, a) {
  let o = Kr(e, t, n);
  if (i > 0) {
    let r = Kr(e, t, 0.2) * 0.96;
    o = Math.max(o, Ei(o, r, i * U(-0.1, 0.25, n)));
  }
  return o + r + a * U(1, 2, n);
}
const Ri = [
    0.468, 0.492, 0.515, 0.54, 0.568, 0.598, 0.63, 0.665, 0.7, 0.735, 0.768,
    0.795, 0.818, 0.836, 0.853,
  ],
  zi = [0.468, 0.5, 0.56, 0.625, 0.69, 0.76, 0.81, 0.853],
  Bi = [
    -0.2, -0.06, 0.12, 0.38, 0.65, 0.86, 0.97, 1.08, 1.25, 1.5, 1.75, 1.93, 2,
  ],
  Vi = [-0.2, 0.1, 0.6, 0.95, 1.1, 1.6, 2],
  Hi = [
    -0.16, -0.02, 0.18, 0.42, 0.66, 0.86, 0.97, 1.08, 1.25, 1.5, 1.75, 1.93, 2,
  ],
  Ui = [-0.16, 0.2, 0.7, 0.95, 1.1, 1.6, 2];
function Wi(e, t, n, r) {
  let i = [t];
  for (let a of e) a > t + r && a < n - r && i.push(a);
  return (i.push(n), i);
}
function Gi(e, t, n, r = 0, i = 0) {
  let a = [];
  return (
    t && a.push({ p: e[0], k: 0 }),
    e.forEach((t, n) =>
      a.push({
        p: t,
        k: 1,
        tight:
          (n === 0 && r) || (r && t < e[0] + 0.03)
            ? r
            : i && t > e[e.length - 1] - 0.03
              ? i
              : 0,
      }),
    ),
    n && a.push({ p: e[e.length - 1], k: 0 }),
    a
  );
}
function Ki(e, t) {
  let n = e.b,
    r = t.thetas.length - 1,
    i = t.rows.length - 1,
    a = t.rows[0].p,
    o = t.rows[i].p,
    s = (e) => t.thetas[Math.round(e * r)],
    c = (e, n) => {
      let r = t.rows[Math.round(n * i)];
      if (!t.yLo || !t.yHi) return r.p;
      let c = s(e),
        l = o > a ? (r.p - a) / (o - a) : 0;
      return Ei(t.yLo(c), t.yHi(c), l);
    };
  return (
    e.m.grid(
      {
        nu: r,
        nv: i,
        closed: !1,
        point: (e, a, o) => {
          let s = Math.round(e * r),
            l = Math.round(a * i),
            u = t.thetas[s],
            d = c(e, a),
            f = t.rows[l],
            p = f.k * (t.colK ? t.colK[s] : 1),
            m = t.R(u, d) + (t.bump ? t.bump(u, d) : 0) - (f.tight ?? 0),
            h = p >= 1 ? m : Ei(t.Ru(u, d), m, p);
          return o.set(Math.sin(u) * h, d, q(n, d) - Math.cos(u) * h);
        },
        invert: !0,
      },
      t.attrs,
    ),
    { th: s, yy: c, nu: r, nv: i }
  );
}
const qi = new M(),
  Ji = new M(),
  Yi = new M(),
  Xi = new M();
function Zi(e, t, n) {
  let r = t.rows.length - 1;
  e.m.grid(
    {
      nu: n,
      nv: r,
      closed: !0,
      cap0: t.rows[0].p <= t.limb.tMin + 1e-6 && t.limb.bones[0] !== z.hips,
      point: (e, n, i) => {
        let a = t.rows[Math.round(n * r)],
          o = e * Z,
          s = t.R(o, a.p) - (a.tight ?? 0),
          c = a.k >= 1 ? s : Ei(t.Ru(o, a.p), s, a.k);
        return (
          Gr(t.limb, a.p, qi, Ji, Yi, Xi),
          i
            .copy(qi)
            .addScaledVector(Xi, Math.sin(o) * c)
            .addScaledVector(Yi, Math.cos(o) * c)
        );
      },
    },
    t.attrs,
  );
}
function Qi(e, t) {
  if (e.rect)
    return { rect: e.rect, mode: 1, uv: (e, n, r, i, a, o) => t(i, a, o) };
}
function $i(e) {
  let { b: t, fit: n, lod: r } = e,
    i = t.H,
    a = r === 0 ? Ri : zi,
    o = e.nT,
    s = [];
  for (let e = 0; e <= o; e++) s.push(-Math.PI + (e / o) * Z);
  let { top: c, outer: l, bottom: u } = n,
    d = e.desc.skin,
    f = r === 0 ? 0.006 : 0.02,
    p = t.torsoTop;
  n.skinY0 < p - 0.005 &&
    Ki(e, {
      thetas: s,
      closed: !0,
      rows: Wi(
        a.map((e) => e * i),
        n.skinY0,
        p,
        f,
      ).map((e) => ({ p: e, k: 1 })),
      R: (e, n) => J(t, e, n),
      Ru: (e, n) => J(t, e, n),
      attrs: {
        color: (e, t, n, r, a, c) => {
          c.setHex(d);
          let l = s[Math.round(r * o)];
          c.multiplyScalar(
            1 -
              0.08 *
                Q(Math.abs(l) - Math.PI / 2, 0.35) *
                Q(t - 0.76 * i, 0.03 * i),
          );
        },
        skin: (e, n, r, i, a, c) => Yr(t, s[Math.round(i * o)], n, c),
        kind: V.skin,
        rough: 0.62,
      },
    });
  {
    let r =
        c && !c.tucked
          ? Math.min(u.waistY, c.hemY + 0.025)
          : l && l.hemY < u.waistY && l.gap === 0
            ? l.hemY + 0.025
            : u.waistY,
      d = u.skirt ? Math.max(t.torsoBottom, u.skirt.hemY) : t.torsoBottom;
    if ((!u.skirt || (u.skirt.hemY, t.torsoBottom), !u.skirt)) {
      let p = Wi(
          a.map((e) => e * i),
          d,
          r,
          f,
        ),
        m = _i(e, u.pattern, u.color, u.patternColor),
        h = m.rect ? wi(0.15, m.tileM) : 1,
        g = Gi(p, !1, !(c && !c.tucked && r < u.waistY)),
        _ = Pi(n);
      Ki(e, {
        thetas: s,
        closed: !0,
        rows: g,
        R: (e, n) =>
          Fi(
            t,
            _,
            e,
            n,
            Ni(t, e, n, u.off, 0, n > t.H * 0.54) +
              (n > u.waistY - 0.04 ? 0.002 : 0),
          ),
        Ru: (e, n) => J(t, e, n, !0),
        attrs: {
          color: (e, n, r, a, c, l) => {
            let f = s[Math.round(a * o)];
            l.setHex(m.vcol);
            let p =
              U(d + 0.07, d, n) * 0.28 +
              0.16 * Q(Di(f, 0), 0.45) * U(t.H * 0.56, t.H * 0.49, n);
            (l.multiplyScalar(
              1 -
                p -
                (Math.round(c * (g.length - 1)) === g.length - 1 ? 0.2 : 0),
            ),
              u.pattern === `denim` &&
                l.multiplyScalar(
                  1 +
                    0.12 * Math.max(0, Math.cos(f)) * Q(n - 0.5 * i, 0.05 * i),
                ));
          },
          skin: (e, n, r, i, a, c) => Yr(t, s[Math.round(i * o)], n, c),
          kind: V.cloth,
          rough: u.pattern === `denim` ? 0.9 : 0.85,
          tex: Qi(m, (e, t, n) => {
            ((n[0] = (e - 0.5) * h),
              (n[1] = g[Math.round(t * (g.length - 1))].p / m.tileM));
          }),
        },
      });
      let v = !!l && l.gap === 0 && l.hemY < u.waistY - 0.02;
      if (
        (u.belt &&
          (!c || c.tucked) &&
          !v &&
          ra(e, u.waistY - 0.012, u.belt, u.off + 0.003),
        e.lod === 0 &&
          u.pattern === `denim` &&
          (!c || c.tucked || c.hemY > 0.53 * i))
      ) {
        let n = Ci(e, u.color, 13933114, `jeans`);
        for (let r of [-1, 1])
          n &&
            ta(
              e,
              (e, n) => Ni(t, e, n, u.off, 0),
              Math.PI + r * 0.62,
              0.36,
              0.495 * i,
              0.555 * i,
              n,
              V.cloth,
              0.9,
              2,
            );
      }
    }
  }
  if (c) {
    let n =
      l && l.gap === 0 && l.sleeveT > 0
        ? `all`
        : l && l.gap > 0
          ? `front`
          : `none`;
    if (n !== `all` || l?.style === `vest`) {
      let r = _i(e, c.pattern, c.color, c.patternColor),
        d = r.rect ? wi(0.16, r.tileM) : 1,
        p = s,
        m = !0;
      if (n === `front` && l) {
        let e = Math.min(Math.PI * 0.9, l.gap + 0.55),
          t = Math.max(4, Math.round((e * 2) / (Z / o)));
        p = [];
        for (let n = 0; n <= t; n++) p.push(-e + (n / t) * e * 2);
        m = !1;
      }
      let h = (e) => {
          let t = Math.max(0, Math.cos(e)),
            n = Ei(c.neckB, c.neckF, t ** 1.5);
          return (
            c.armhole &&
              (n -=
                0.018 * i * Q(Math.abs(Di(e, 0)), 0.5) +
                0.01 * i * Q(Math.abs(Di(e, Math.PI)), 0.6)),
            n
          );
        },
        g = (e) =>
          c.hemY +
          (c.style === `shirt` && !c.tucked
            ? 0.012 * Q(Math.abs(e) - Math.PI / 2, 0.5)
            : 0),
        _ = Wi(
          a.map((e) => e * i),
          c.hemY,
          c.neckB,
          f,
        ),
        v = c.rib ? 0.004 : 0,
        y = Gi(_, !c.tucked, !0, v, 0),
        b = y.length - 1,
        x = y[0].p,
        S = y[b].p,
        C = X(r.vcol, 0.9);
      Ki(e, {
        thetas: p,
        closed: m,
        rows: y,
        yLo: g,
        yHi: h,
        R: (e, n) => Ni(t, e, n, c.off, c.loose),
        Ru: (e, n) =>
          n > 0.7 * i ? J(t, e, n) - 0.001 : Ni(t, e, n, u.off, 0) - 0.002,
        attrs: {
          color: (e, t, n, a, o, s) => {
            let l = p[Math.round(a * (p.length - 1))],
              u = Math.round(o * b);
            (s.setHex(u === b || u === 0 ? C : r.vcol),
              c.rib && t < c.hemY + 0.035 && s.setHex(X(r.vcol, 0.93)));
            let d = Q(Math.abs(l) - Math.PI / 2, 0.4);
            (s.multiplyScalar(
              1 -
                0.12 * d * Q(t - 0.73 * i, 0.05 * i) -
                0.05 * U(0.62 * i, 0.52 * i, t),
            ),
              c.tucked &&
                s.multiplyScalar(
                  1 - 0.12 * U(c.hemY + 0.08, c.hemY + 0.035, t),
                ));
          },
          skin: (e, n, r, i, a, o) =>
            Yr(t, p[Math.round(i * (p.length - 1))], n, o),
          kind:
            c.style === `police` || c.style === `rider`
              ? V.cloth
              : c.style === `blouse`
                ? V.satin
                : V.cloth,
          rough: c.style === `blouse` ? 0.55 : c.style === `rider` ? 0.6 : 0.88,
          tex: Qi(r, (e, t, n) => {
            let i = p[Math.round(e * (p.length - 1))];
            n[0] = ((i + Math.PI) / Z) * d;
            let a = S > x ? (y[Math.round(t * b)].p - x) / (S - x) : 0;
            n[1] = Ei(g(i), h(i), a) / r.tileM;
          }),
        },
      });
      let w = (e, n) => Ni(t, e, n, c.off, c.loose);
      if (c.print !== `none` && e.lod === 0 && n !== `all`) {
        let t = bi(
          e,
          c.print,
          c.color2 === c.color
            ? ea(c.color) > 0.5
              ? 1842210
              : 16052714
            : c.color2,
          c.color,
        );
        t &&
          (c.print === `school`
            ? ta(e, w, 0.42, 0.14, 0.742 * i, 0.772 * i, t, V.cloth, 0.8, 2)
            : ta(e, w, 0, 0.52, 0.64 * i, 0.77 * i, t, V.cloth, 0.85, 2));
      }
      if (
        e.lod === 0 &&
        (c.collar === `shirt` || c.collar === `polo`) &&
        n !== `all`
      ) {
        let t = xi(e, c.color, c.style === `police` ? 13214785 : 15855592),
          n = c.collar === `polo` ? 0.745 * i : c.hemY + 0.01;
        if (
          (t && ta(e, w, 0, 0.07, n, c.neckF - 0.004, t, V.cloth, 0.85, 2),
          c.style === `uniform` || c.style === `police` || c.style === `shirt`)
        ) {
          let t = Ci(e, c.color, X(c.color, 0.8), `chest`);
          t && ta(e, w, -0.48, 0.3, 0.7 * i, 0.745 * i, t, V.cloth, 0.85, 2);
        }
      }
      if (e.lod === 0 && c.style === `hoodie` && n !== `all`) {
        let t = Ci(e, c.color, X(c.color, 0.75), `pouch`);
        t && ta(e, w, 0, 0.95, c.hemY + 0.04, 0.6 * i, t, V.cloth, 0.9, 2);
      }
      let T =
        r.rect &&
        c.pattern &&
        c.pattern !== `solid` &&
        c.pattern !== `knit` &&
        c.pattern !== `denim`
          ? c.color
          : r.vcol;
      (n !== `all` || c.collar === `hood`) &&
        ia(e, c.collar, c, w, h, T, c.color2);
    }
  }
  if (l && l.style !== `poncho`) {
    let r = _i(e, l.pattern, l.color, l.patternColor),
      c = r.rect ? wi(0.17, r.tileM) : 1,
      d = l.gap,
      p = s,
      m;
    if (d > 0) {
      let e = o;
      ((p = [d, d]), (m = [0, 1]));
      for (let t = 1; t < e; t++)
        (p.push(d + (t / e) * (Z - 2 * d)), m.push(1));
      (p.push(Z - d, Z - d), m.push(1, 0));
    }
    let h = (e) =>
        d +
        (l.collar === `lapel` || l.collar === `v`
          ? 0.35 * U(0.66 * i, 0.83 * i, e)
          : 0.05 * U(0.78 * i, 0.84 * i, e)),
      g = Gi(
        Wi(
          a.map((e) => e * i),
          l.hemY,
          l.neckY,
          f,
        ),
        !0,
        !0,
        l.ribHem ? 0.008 : 0,
        0,
      ),
      _ = g.length - 1,
      v = (e, r) => {
        let i =
          r < u.waistY + 0.01 && !u.skirt
            ? Ni(t, e, r, u.off + 0.004, 0)
            : J(t, e, r, !0);
        return n.top && r >= n.top.hemY - 0.005
          ? Math.max(i, Ni(t, e, r, n.top.off, n.top.loose))
          : i;
      },
      y = (e, n) => Ni(t, e, n, l.off, l.loose),
      b = (e, t) => {
        if (d <= 0) return p[e];
        let n = h(t);
        return n + ((p[e] - d) / (Z - 2 * d)) * (Z - 2 * n);
      },
      x = p.length - 1,
      S = (e) =>
        l.hemY + (l.style === `blazer` ? 0.03 * i * Q(Di(e, 0), 0.5) * 0 : 0);
    if (
      (e.m.grid(
        {
          nu: x,
          nv: _,
          closed: !1,
          point: (e, n, r) => {
            let i = Math.round(e * x),
              a = Math.round(n * _),
              o = g[a],
              s = o.p === g[0].p ? S(p[i]) : o.p,
              c = b(i, s),
              l = o.k * (m ? m[i] : 1),
              u = y(c, s) - (o.tight ?? 0),
              d = l >= 1 ? u : Ei(v(c, s) - 0.001, u, l);
            return r.set(Math.sin(c) * d, s, q(t, s) - Math.cos(c) * d);
          },
          invert: !0,
        },
        {
          color: (e, t, n, a, o, s) => {
            let c = Math.round(a * x),
              u = Math.round(o * _),
              d = b(c, t),
              f = l.ribHem && t < l.hemY + 0.05;
            (s.setHex(f ? l.color2 : r.vcol),
              m && m[c] === 0 && s.setHex(X(r.vcol, 0.8)),
              (u === 0 || u === _) && s.setHex(X(r.vcol, 0.82)));
            let p = Q(Math.abs(Di(d, 0)) - Math.PI / 2, 0.4);
            (s.multiplyScalar(1 - 0.14 * p * Q(t - 0.72 * i, 0.06 * i)),
              (l.style === `bomber` || l.style === `windbreaker`) &&
                s.multiplyScalar(
                  1 -
                    0.05 * Math.abs(Math.sin((t / (0.07 * i)) * Math.PI)) ** 6,
                ));
          },
          skin: (e, n, r, i, a, o) => Yr(t, b(Math.round(i * x), n), n, o),
          kind:
            l.style === `bomber` || l.style === `windbreaker`
              ? V.satin
              : V.cloth,
          rough:
            l.style === `bomber`
              ? 0.5
              : l.style === `windbreaker`
                ? 0.45
                : 0.85,
          tex: Qi(r, (e, t, n) => {
            let i = Math.round(e * x),
              a = g[Math.round(t * _)].p;
            ((n[0] = (b(i, a) / Z) * c), (n[1] = a / r.tileM));
          }),
        },
      ),
      e.lod === 0 && d === 0 && l.style !== `vest` && l.style !== `gakuran`)
    ) {
      let t = Si(e, X(l.color, 0.8), 12172482);
      t &&
        ta(e, y, 0, 0.05, l.hemY + 0.005, l.neckY - 0.006, t, V.cloth, 0.6, 2);
    }
    if (l.print !== `none` && e.lod === 0) {
      let t = bi(e, l.print, l.color2, l.color);
      t && ta(e, y, Math.PI, 1.05, 0.6 * i, 0.8 * i, t, V.cloth, 0.7, 2);
    }
    if (l.style === `vest`) {
      for (let t of [0.63 * i, 0.705 * i]) na(e, y, t, 0.022, 14673642);
      if (e.lod === 0) {
        let t = bi(e, `police`, 15922679, l.color);
        t &&
          e.desc.top.style === `police` &&
          ta(e, y, Math.PI, 0.9, 0.735 * i, 0.8 * i, t, V.reflect, 0.5, 2);
      }
    }
    l.collar !== `none` && oa(e, l, y);
  } else l && l.style === `poncho` && sa(e, l);
}
function ea(e) {
  return (
    (0.299 * ((e >> 16) & 255) + 0.587 * ((e >> 8) & 255) + 0.114 * (e & 255)) /
    255
  );
}
function ta(e, t, n, r, i, a, o, s, c, l) {
  let u = e.b,
    d = Math.max(2, Math.ceil(r / 0.2)),
    f = Math.max(2, Math.ceil((a - i) / 0.09));
  e.m.grid(
    {
      nu: d,
      nv: f,
      closed: !1,
      point: (e, o, s) => {
        let c = n + (e - 0.5) * r,
          l = Ei(i, a, o),
          d = t(c, l) + 0.0016;
        return s.set(Math.sin(c) * d, l, q(u, l) - Math.cos(c) * d);
      },
      invert: !0,
    },
    {
      color: 16777215,
      skin: (e, t, i, a, o, s) => Yr(u, n + (a - 0.5) * r, t, s),
      kind: s,
      rough: c,
      tex: {
        rect: o,
        mode: l,
        uv: (e, t, n, r, i, a) => ((a[0] = 1 - r), (a[1] = i)),
      },
    },
  );
}
function na(e, t, n, r, i) {
  let a = e.b,
    o = e.nT;
  e.m.grid(
    {
      nu: o,
      nv: 1,
      closed: !0,
      point: (e, i, o) => {
        let s = e * Z,
          c = n + (i - 0.5) * r,
          l = t(s, c) + 0.0015;
        return o.set(Math.sin(s) * l, c, q(a, c) - Math.cos(s) * l);
      },
      invert: !0,
    },
    {
      color: i,
      skin: (e, t, n, r, i, o) => Yr(a, r * Z, t, o),
      kind: V.reflect,
      rough: 0.4,
      emissive: 1,
    },
  );
}
function ra(e, t, n, r) {
  let i = e.b,
    a = 0.032 * i.s;
  e.m.grid(
    {
      nu: e.nT,
      nv: 3,
      closed: !0,
      point: (e, n, o) => {
        let s = e * Z,
          c = Math.round(n * 3),
          l = t + (c < 2 ? -0.5 : 0.5) * a,
          u = J(i, s, l, !0) + r + (c === 0 || c === 3 ? 0 : 0.004);
        return o.set(Math.sin(s) * u, l, q(i, l) - Math.cos(s) * u);
      },
      invert: !0,
    },
    {
      color: n,
      skin: (e, t, n, r, a, o) => Yr(i, r * Z, t, o),
      kind: V.gloss,
      rough: 0.45,
    },
  );
  let o = J(i, 0, t, !0) + r + 0.006,
    s = new Ot(0.045 * i.s, a * 1.15, 0.006);
  e.m.geo(s, new ye().makeTranslation(0, t, q(i, t) - o), {
    color: 13157044,
    skin: z.hips,
    kind: V.metal,
    rough: 0.3,
  });
}
function ia(e, t, n, r, i, a, o) {
  let s = e.b,
    c = s.H,
    l = e.lod === 0 ? 16 : 8;
  if (t === `crew` || t === `rib` || t === `high`) {
    let r = t === `high` ? 0.05 * s.s : 0.012 * s.s,
      c = yi(e, n.rib || t !== `crew` ? o : a, a, !1);
    e.m.grid(
      {
        nu: l,
        nv: 2,
        closed: !0,
        point: (e, n, a) => {
          let o = e * Z - Math.PI,
            c = i(o),
            l = Math.round(n * 2),
            u = c + (l === 0 ? -0.004 : l === 1 ? r * 0.6 : r),
            d =
              (t === `high`
                ? Math.max(s.neckR * 1.18, J(s, o, c) * 0.9)
                : J(s, o, c)) +
              (t === `high` ? 0.008 : 0.004) +
              (l === 2 ? -0.001 : 0.002);
          return a.set(Math.sin(o) * d, u, q(s, c) - Math.cos(o) * d);
        },
        invert: !0,
      },
      {
        color: n.rib || t !== `crew` ? o : X(a, 0.94),
        skin: (e, t, n, r, i, a) => Yr(s, r * Z - Math.PI, t, a),
        kind: V.cloth,
        rough: 0.9,
        tex: c
          ? {
              rect: c,
              mode: 1,
              uv: (e, t, n, r, i, a) => ((a[0] = r * 6), (a[1] = i)),
            }
          : void 0,
      },
    );
    return;
  }
  if (t === `shirt` || t === `polo`) {
    let o = (t === `polo` ? 0.022 : 0.028) * s.s,
      u = (t === `polo` ? 0.034 : 0.04) * s.s,
      d = 0.16,
      f = l,
      p = t === `polo` && n.color2 !== n.color ? n.color2 : a;
    e.m.grid(
      {
        nu: f,
        nv: 3,
        closed: !1,
        point: (e, t, n) => {
          let a = d + e * (Z - 2 * d) - 0,
            l = Di(a, 0),
            f = Math.max(0, Math.cos(l)),
            p = i(l) + 0.002,
            m = Math.max(s.neckR + 0.006, J(s, l, p) * 0.92),
            h = Math.round(t * 3),
            g = m,
            _ = p;
          if (h === 1) ((_ = p + o), (g = m + 0.002));
          else if (h === 2) ((_ = p + o + 0.004), (g = m + 0.009));
          else if (h === 3) {
            let e = Q(Math.abs(l) - d, 0.25);
            ((_ = p + o - u * (1 + 0.8 * e) + 0.004),
              (g = r(l, Math.max(_, 0.78 * c)) + 0.004 + 0.012 * f));
          }
          return n.set(Math.sin(l) * g, _, q(s, p) - Math.cos(l) * g);
        },
        invert: !1,
      },
      {
        color: (e, t, n, r, i, a) =>
          a.setHex(Math.round(i * 3) === 0 ? X(p, 0.8) : p),
        skin: (e, t, n, r, i, a) => {
          (Yr(s, Di(d + r * (Z - 2 * d), 0), t, a), jn(a, z.neck, 0.3));
        },
        kind: V.cloth,
        rough: 0.85,
      },
    );
    return;
  }
  t === `hood` && aa(e, n, r, i, a);
}
function aa(e, t, n, r, i) {
  let a = e.b,
    o = e.lod === 0 ? 14 : 7,
    s = e.lod === 0 ? 8 : 4,
    c = X(i, 0.7);
  if (
    (e.m.grid(
      {
        nu: o,
        nv: s,
        closed: !0,
        point: (e, t, n) => {
          let i = t * 2 - 1,
            o = Math.PI + i * 2.3 * 0.5,
            s = Math.cos(i * Math.PI * 0.5),
            c = r(o) + 0.004,
            l = (0.018 + 0.038 * s) * a.s,
            u = e * Z,
            d =
              Math.max(a.neckR + 0.02, J(a, o, c) * 0.95) +
              l * 0.9 +
              Math.cos(u) * l,
            f = c + Math.sin(u) * l * 0.55 - s * 0.03 * a.s;
          return n.set(Math.sin(o) * d, f, q(a, c) - Math.cos(o) * d);
        },
      },
      {
        color: (e, t, n, r, a, o) => o.setHex(r < 0.25 ? c : i),
        skin: (e, t, n, r, i, a) => {
          H(a, z.chest, z.neck, 0.25);
        },
        kind: V.cloth,
        rough: 0.92,
      },
    ),
    e.lod === 0)
  )
    for (let t of [-1, 1]) {
      let i = t * 0.28,
        o = r(i) - 0.005,
        s = n(i, o) + 0.004,
        c = 0.16 * a.s,
        l = new At(0.0022, 0.0022, c, 4, 1, !1),
        u = new ye().makeTranslation(
          Math.sin(i) * s,
          o - c / 2,
          q(a, o) - Math.cos(i) * s - 0.004,
        );
      e.m.geo(l, u, {
        color: 15855592,
        skin: z.chest,
        kind: V.cloth,
        rough: 0.8,
      });
    }
}
function oa(e, t, n) {
  let r = e.b,
    i = e.lod === 0 ? 16 : 8;
  if (t.collar === `rib` || t.collar === `high`) {
    let n = (t.collar === `high` ? 0.055 : 0.028) * r.s,
      a = t.gap > 0 ? t.gap + 0.08 : 0;
    e.m.grid(
      {
        nu: i,
        nv: 2,
        closed: a === 0,
        point: (e, i, o) => {
          let s = a + e * (Z - 2 * a),
            c = Math.round(i * 2),
            l = t.neckY - 0.01,
            u = l + (c === 0 ? 0 : c === 1 ? n * 0.6 : n),
            d =
              Math.max(r.neckR + 0.012, J(r, s, l) * 0.95) +
              (c === 0 ? 0.012 : 0.009) +
              t.off * 0.4;
          return o.set(Math.sin(s) * d, u, q(r, l) - Math.cos(s) * d);
        },
        invert: !0,
      },
      {
        color: t.color2,
        skin: (e, t, n, r, i, a) => (H(a, z.chest, z.neck, 0.35), void 0),
        kind: V.cloth,
        rough: 0.85,
      },
    );
    return;
  }
  if (t.collar === `lapel` || t.collar === `v`) {
    let i = r.H;
    for (let a of [-1, 1])
      e.m.grid(
        {
          nu: 1,
          nv: 4,
          closed: !1,
          point: (e, o, s) => {
            let c = Ei(0.66 * i, t.neckY + 0.005, o),
              l = t.gap + 0.35 * U(0.66 * i, 0.83 * i, c),
              u =
                t.collar === `lapel`
                  ? (0.06 + 0.4 * Math.sin(o * Math.PI * 0.85)) * 0.5
                  : 0.08,
              d = a * (l + e * u),
              f = n(d, c) + 0.004 + 0.003 * (1 - e);
            return s.set(Math.sin(d) * f, c, q(r, c) - Math.cos(d) * f);
          },
          invert: a > 0,
        },
        {
          color: X(t.color, 0.92),
          skin: (e, t, n, i, o, s) => Yr(r, a * 0.4, t, s),
          kind: V.cloth,
          rough: 0.8,
        },
      );
  }
}
function sa(e, t) {
  let n = e.b,
    r = n.H,
    i = e.lod === 0 ? 16 : 8,
    a =
      e.lod === 0
        ? [0.86, 0.835, 0.8, 0.74, 0.64, 0.54, 0.46, 0.44]
        : [0.86, 0.81, 0.7, 0.55, 0.44],
    o = a.length - 1,
    s = (e, t) => {
      let i = t * r,
        a = U(0.86 * r, 0.79 * r, i),
        o =
          Ei(
            n.neckR + 0.02,
            0.3 * n.s * (0.8 + 0.2 * Math.abs(Math.sin(e))),
            a,
          ) + (0.79 * r - i > 0 ? (0.79 * r - i) * 0.25 : 0);
      return Math.max(o, J(n, e, Math.max(i, n.torsoBottom), !0) + 0.04);
    };
  (e.m.grid(
    {
      nu: i,
      nv: o,
      closed: !0,
      point: (e, t, i) => {
        let c = e * Z,
          l = a[Math.round(t * o)],
          u = l * r,
          d = s(c, l) * (1 + 0.03 * Math.sin(c * 7) * U(0.7, 0.44, l));
        return i.set(
          Math.sin(c) * d,
          u,
          q(n, Math.max(u, n.torsoBottom)) - Math.cos(c) * d,
        );
      },
    },
    {
      color: (e, n, i, a, o, s) =>
        s.setHex(X(t.color, 0.92 + 0.08 * U(0.5 * r, 0.8 * r, n))),
      skin: (e, t, n, i, a, o) => {
        H(o, z.chest, z.spine, U(0.75 * r, 0.55 * r, t));
        let s = Math.sin(i * Z);
        Math.abs(s) > 0.6 &&
          t < 0.78 * r &&
          jn(o, s > 0 ? z.armR : z.armL, 0.35 * U(0.78 * r, 0.6 * r, t));
      },
      kind: V.gloss,
      rough: 0.3,
      transparent: !1,
    },
  ),
    e.m.grid(
      {
        nu: i,
        nv: o,
        closed: !0,
        point: (e, t, i) => {
          let c = e * Z,
            l = a[Math.round(t * o)],
            u = l * r,
            d =
              s(c, l) * (1 + 0.03 * Math.sin(c * 7) * U(0.7, 0.44, l)) - 0.004;
          return i.set(
            Math.sin(c) * d,
            u,
            q(n, Math.max(u, n.torsoBottom)) - Math.cos(c) * d,
          );
        },
        invert: !0,
      },
      { color: X(t.color, 0.6), skin: z.chest, kind: V.gloss, rough: 0.4 },
    ));
}
function ca(e) {
  let { b: t, fit: n, lod: r } = e,
    i = r === 0 ? Bi : Vi,
    a = e.nL,
    o = e.desc.skin,
    s = r === 0 ? 0.03 : 0.1,
    { top: c, outer: l } = n,
    u = l && l.sleeveT > 0 && l.style !== `poncho` ? l : null,
    d = c && c.sleeveT > 0 ? c : null,
    f = e.desc.acc.find((e) => e.kind === `armSleeves`);
  for (let n of t.arms) {
    let t = n.side,
      c = n.tMin;
    if (u) {
      let r = _i(e, u.pattern, u.color, u.patternColor),
        o = u.sleeveT,
        l = Wi(i, n.tMin, o, s),
        f = u.style === `bomber` || u.style === `cropped` ? 0.006 : 0,
        p = Gi(l, !1, !0, 0, f),
        m =
          d && d.sleeveT >= o - 0.05
            ? (e, t) => Ii(n, e, t, d.off, d.loose, 0, 1, 0)
            : (e, t) => Kr(n, e, t) - 0.001,
        h = r.rect ? wi(0.06, r.tileM) : 1;
      (Zi(
        e,
        {
          limb: n,
          rows: p,
          R:
            u.style === `happi`
              ? (e, t) => Ii(n, e, t, u.off * 0.8, u.loose, 0.3, 0.95, 0.045)
              : (e, t) => Ii(n, e, t, u.off * 0.8, u.loose, 1.4, 1.9, 0.004),
          Ru: m,
          attrs: {
            color: (e, n, i, a, s, c) => {
              let l = p[Math.round(s * (p.length - 1))].p;
              (c.setHex(f && l > o - 0.12 ? u.color2 : r.vcol),
                ua(c, a, t, l),
                u.style === `bomber` &&
                  c.multiplyScalar(1 - 0.05 * Math.abs(Math.sin(l * 7)) ** 6));
            },
            skin: (e, t, r, i, a, o) =>
              Xr(n, p[Math.round(a * (p.length - 1))].p, o),
            kind:
              u.style === `bomber` || u.style === `windbreaker`
                ? V.satin
                : V.cloth,
            rough: u.style === `bomber` ? 0.5 : 0.85,
            tex: Qi(
              r,
              (e, t, n) => (
                (n[0] = e * h),
                (n[1] = (p[Math.round(t * (p.length - 1))].p * 0.3) / r.tileM)
              ),
            ),
          },
        },
        a,
      ),
        (c = o - 0.06),
        d &&
          d.sleeveT > o + 0.05 &&
          (da(e, n, d, o - 0.05, d.sleeveT), (c = d.sleeveT - 0.06)));
    } else d && (da(e, n, d, n.tMin, d.sleeveT), (c = d.sleeveT - 0.06));
    let l = f && r === 0 ? Math.max(c + 0.02, 0.55) : 9,
      p = l < 9 ? l + 0.08 : 1.99;
    if (c < p - 0.05) {
      let l = Wi(i, c, p, s).map((e) => ({ p: e, k: 1 }));
      if (
        (Zi(
          e,
          {
            limb: n,
            rows: l,
            R: (e, t) => Kr(n, e, t),
            Ru: (e, t) => Kr(n, e, t),
            attrs: {
              color: (e, n, i, a, s, c) => {
                let u = l[Math.round(s * (l.length - 1))].p;
                (c.setHex(f && r === 1 && u > 0.6 ? (f.color ?? 15921906) : o),
                  Math.abs(u - 1) < 0.1 && c.multiply(la),
                  ua(c, a, t, u, -0.04));
              },
              skin: (e, t, r, i, a, o) =>
                Xr(n, l[Math.round(a * (l.length - 1))].p, o),
              kind: V.skin,
              rough: 0.6,
            },
          },
          a,
        ),
        f && r === 0)
      ) {
        let r = Math.max(c + 0.02, 0.55),
          i = Gi(Wi(Vi, r, 1.96, s), !0, !0, 0, 0);
        Zi(
          e,
          {
            limb: n,
            rows: i,
            R: (e, t) => Kr(n, e, t) + 0.004 + 0.004 * Q(t - 1.95, 0.08),
            Ru: (e, t) => Kr(n, e, t) - 0.001,
            attrs: {
              color: (e, n, r, a, o, s) => {
                (s.setHex(f.color ?? 15921906),
                  ua(s, a, t, i[Math.round(o * (i.length - 1))].p));
              },
              skin: (e, t, r, a, o, s) =>
                Xr(n, i[Math.round(o * (i.length - 1))].p, s),
              kind: V.satin,
              rough: 0.55,
            },
          },
          a,
        );
      }
    }
  }
}
const la = new N(1.03, 0.97, 0.95);
function ua(e, t, n, r, i = 0.1) {
  let a = Math.sin(t * Z) * n;
  e.multiplyScalar(1 - i * Math.max(0, -a) * (r < 1.1 ? 1 : 0.5));
}
function da(e, t, n, r, i) {
  let a = e.lod === 0 ? Bi : Vi,
    o = e.lod === 0 ? 0.03 : 0.1,
    s = _i(e, n.pattern, n.color, n.patternColor),
    c = Wi(a, r, i, o),
    l = i > 1.8,
    u = l && n.rib ? 0.006 : 0,
    d = Gi(c, !1, !0, 0, u),
    f = l
      ? 0.002
      : n.style === `blouse`
        ? 0.014
        : n.style === `yukata`
          ? 0.05
          : 0.009,
    p = s.rect ? wi(0.06, s.tileM) : 1,
    m = d.length - 1;
  Zi(
    e,
    {
      limb: t,
      rows: d,
      R: (e, a) => Ii(t, e, a, n.off, n.loose * 0.8, l ? 1.4 : r + 0.2, i, f),
      Ru: (e, n) => Kr(t, e, n) - 0.001,
      attrs: {
        color: (e, r, a, o, c, f) => {
          let p = Math.round(c * m);
          if (
            (f.setHex(
              p === m
                ? X(s.vcol, 0.8)
                : u && d[p].p > i - 0.1
                  ? X(n.color2, 0.95)
                  : s.vcol,
            ),
            l)
          ) {
            let e = o * Z,
              n =
                Math.max(0, Math.cos(e)) * 0.6 +
                Math.max(0, -Math.sin(e) * t.side) * 0.4;
            f.multiplyScalar(
              1 - 0.18 * n * Q(d[p].p - 1, 0.08) - 0.07 * Q(d[p].p - 1.78, 0.1),
            );
          }
          ua(f, o, t.side, d[p].p);
        },
        skin: (e, n, r, i, a, o) => Xr(t, d[Math.round(a * m)].p, o),
        kind: n.style === `blouse` ? V.satin : V.cloth,
        rough: n.style === `blouse` ? 0.55 : 0.88,
        tex: Qi(
          s,
          (e, t, n) => (
            (n[0] = e * p),
            (n[1] = (d[Math.round(t * m)].p * 0.3) / s.tileM)
          ),
        ),
      },
    },
    e.nL,
  );
}
function fa(e) {
  let { b: t, fit: n, lod: r } = e,
    i = r === 0 ? Hi : Ui,
    a = e.nL,
    o = e.desc.skin,
    s = r === 0 ? 0.03 : 0.1,
    { bottom: c } = n,
    l = Math.min(2, n.shoeT);
  for (let r of t.legs) {
    let t = r.side,
      u = r.tMin;
    if (c.legT > 0) {
      let n = _i(e, c.pattern, c.color, c.patternColor),
        o = Math.min(c.legT, l + 0.02),
        d = Wi(i, r.tMin, o, s),
        f = c.style === `track` ? 0.008 : 0,
        p = Gi(d, !1, o < 1.99, 0, f),
        m = p.length - 1,
        h = n.rect ? wi(0.08, n.tileM) : 1;
      (Zi(
        e,
        {
          limb: r,
          rows: p,
          R: (e, t) => Li(r, e, t, c.off, c.loose, c.flare),
          Ru: (e, t) => Kr(r, e, t) - 0.001,
          attrs: {
            color: (e, r, i, a, s, l) => {
              let u = Math.round(s * m),
                d = p[u].p,
                f = a * Z;
              l.setHex(n.vcol);
              let h = Math.sin(f) * t;
              if (
                (l.multiplyScalar(
                  1 -
                    0.18 * Math.max(0, -h) * U(0.5, 0, d) -
                    (u === m && o < 1.99 ? 0.25 : 0),
                ),
                c.pattern === `denim`)
              ) {
                let e = Math.max(0, Math.cos(f));
                l.multiplyScalar(
                  1 +
                    0.22 * e * Q(d - 0.4, 0.3) +
                    0.15 * e * Q(d - 1, 0.12) -
                    0.08 * Math.max(0, -h),
                );
              }
              c.style === `slacks` &&
                Math.abs(Di(f, 0)) < 0.2 &&
                l.multiplyScalar(1.06);
              let g = Math.max(0, -Math.cos(f));
              (l.multiplyScalar(
                1 -
                  0.16 * g * Q(d - 1.02, 0.07) -
                  0.06 * Math.max(0, Math.cos(f)) * Q(d - 0.12, 0.08),
              ),
                o > 1.8 &&
                  d > 1.62 &&
                  l.multiplyScalar(
                    1 -
                      0.1 *
                        Math.abs(Math.sin((d - 1.62) * 26 + f * 2)) *
                        U(1.62, 1.8, d),
                  ),
                c.style === `track` &&
                  Math.abs(Di(f, t > 0 ? Math.PI / 2 : -Math.PI / 2)) < 0.3 &&
                  l.setHex(c.color2));
            },
            skin: (e, t, n, i, a, o) => Xr(r, p[Math.round(a * m)].p, o),
            kind: V.cloth,
            rough: 0.88,
            tex: Qi(
              n,
              (e, t, r) => (
                (r[0] = e * h),
                (r[1] = (p[Math.round(t * m)].p * 0.42) / n.tileM)
              ),
            ),
          },
        },
        a,
      ),
        (u = o - 0.06));
    }
    if (u < l - 0.04) {
      let d = n.socks ? Math.max(u + 0.02, n.socks.topT) : 9,
        f = [];
      d < l
        ? (d > u + 0.05 && f.push([u, d + 0.01, o, V.skin]),
          f.push([Math.max(u, d - 0.01), l, n.socks.color, V.cloth]))
        : f.push([u, l, o, V.skin]);
      for (let [n, o, l, u] of f) {
        let d = Wi(i, n, o, s).map((e) => ({ p: e, k: 1 })),
          f = u === V.cloth,
          p = d.length - 1;
        Zi(
          e,
          {
            limb: r,
            rows: d,
            R: (e, t) =>
              Kr(r, e, t) +
              (f ? 0.002 + (t < n + 0.05 ? 0.001 : 0) : 0) +
              (c.style, 0),
            Ru: (e, t) => Kr(r, e, t),
            attrs: {
              color: (e, r, i, a, o, s) => {
                let c = d[Math.round(o * p)].p;
                (s.setHex(l),
                  !f && Math.abs(c - 1) < 0.12 && s.multiply(la),
                  f &&
                    d[Math.round(o * p)].p < n + 0.04 &&
                    s.multiplyScalar(0.92),
                  ua(s, a, t, c, 0.06));
              },
              skin: (e, t, n, i, a, o) => Xr(r, d[Math.round(a * p)].p, o),
              kind: u,
              rough: f ? 0.9 : 0.6,
            },
          },
          a,
        );
      }
    }
  }
  c.skirt && ma(e);
}
function pa(e) {
  let { b: t, fit: n } = e,
    r = n.bottom.skirt,
    i = n.bottom,
    a = n.top,
    o = a && !a.tucked ? Math.min(i.waistY, a.hemY + 0.03) : i.waistY,
    s = r.hemY,
    c = r.pleats,
    l = t.legs[1].a.x,
    u = t.torsoBottom,
    d = (e, n) => {
      let r = Math.max(
          0,
          (t.legs[1].a.y - n) / (t.legs[1].a.y - t.legs[1].b.y),
        ),
        i = Kr(t.legs[1], Math.PI / 2, Math.min(1.2, r)) + 0.012,
        a = l + i,
        o = i * 1.12,
        s = Math.sin(e),
        c = Math.cos(e);
      return 1 / Math.sqrt((s / a) ** 2 + (c / o) ** 2);
    },
    f = Pi(n);
  return (e, n) => {
    let a = n > u ? Ni(t, e, n, i.off + 0.004, 0.3) : 0,
      l = Math.max(
        a,
        d(e, n),
        n < u + 0.06 ? Ni(t, e, u + 0.06, i.off + 0.004, 0.3) * 0.98 : 0,
      ),
      p = Math.max(0, t.H * 0.56 - n),
      m = l + r.flare * p;
    if (c) {
      let r = ((((e / Z) * c) % 1) + 1) % 1;
      m += (Math.abs(r - 0.5) * 2 - 0.5) * 0.012 * U(o, s, n) * t.s;
    }
    return Fi(t, f, e, n, m);
  };
}
function ma(e) {
  let { b: t, fit: n, lod: r } = e;
  t.H;
  let i = n.bottom.skirt,
    a = n.bottom,
    o = n.top,
    s = o && !o.tucked ? Math.min(a.waistY, o.hemY + 0.03) : a.waistY,
    c = i.hemY,
    l = i.pleats,
    u = l ? (r === 0 ? l * 2 : l) : e.nT,
    d =
      r === 0
        ? Math.max(4, Math.ceil((s - c) / 0.065))
        : Math.max(2, Math.ceil((s - c) / 0.15)),
    f = _i(e, a.pattern, a.color, a.patternColor),
    p = t.torsoBottom,
    m = pa(e),
    h = [];
  h.push({ y: s, k: 1 });
  for (let e = 1; e < d; e++) h.push({ y: Ei(s, c, e / d), k: 1 });
  (h.push({ y: c, k: 1 }), h.push({ y: c + 0.004, k: 0.9 }));
  let g = h.length - 1,
    _ = f.rect ? wi(0.18, f.tileM) : 1;
  (e.m.grid(
    {
      nu: u,
      nv: g,
      closed: !0,
      point: (e, n, r) => {
        let i = h[Math.round(n * g)],
          a = e * Z,
          o = m(a, i.y) * i.k + (i.k, 0);
        return r.set(
          Math.sin(a) * o,
          i.y,
          q(t, Math.max(i.y, p)) - Math.cos(a) * o,
        );
      },
    },
    {
      color: (e, t, n, r, i, a) => {
        let o = Math.round(i * g);
        if ((a.setHex(o >= g - 1 ? X(f.vcol, 0.55) : f.vcol), l)) {
          let e = (((r * l) % 1) + 1) % 1;
          a.multiplyScalar(e < 0.5 ? 1 : 0.86);
        }
        a.multiplyScalar(1 - 0.08 * U(s - 0.05, s, t));
      },
      skin: (e, t, n, r, i, a) => {
        let o = r * Z,
          s = U(p + 0.05, c, t);
        H(a, z.hips, z.hips, 0);
        let l = 0.5 + 0.5 * Math.max(-1, Math.min(1, Math.sin(o) * 2.5));
        (jn(a, z.thighR, 0.55 * s * l), jn(a, z.thighL, 0.55 * s * (1 - l)));
      },
      kind: V.cloth,
      rough: 0.85,
      tex: Qi(
        f,
        (e, t, n) => (
          (n[0] = e * _),
          (n[1] = h[Math.round(t * g)].y / f.tileM)
        ),
      ),
    },
  ),
    e.m.grid(
      {
        nu: Math.max(8, u >> 1),
        nv: 2,
        closed: !0,
        point: (e, n, r) => {
          let i = Ei(c + 0.004, Ei(c, s, 0.5), n),
            a = e * Z,
            o = m(a, i) - 0.005;
          return r.set(
            Math.sin(a) * o,
            i,
            q(t, Math.max(i, p)) - Math.cos(a) * o,
          );
        },
      },
      {
        color: X(f.vcol, 0.45),
        skin: (e, t, n, r, i, a) => {
          let o = r * Z,
            s = U(p + 0.05, c, t);
          H(a, z.hips, z.hips, 0);
          let l = 0.5 + 0.5 * Math.max(-1, Math.min(1, Math.sin(o) * 2.5));
          (jn(a, z.thighR, 0.55 * s * l), jn(a, z.thighL, 0.55 * s * (1 - l)));
        },
        kind: V.cloth,
        rough: 0.9,
      },
    ));
  let v = !!n.outer && n.outer.gap === 0 && n.outer.hemY < a.waistY - 0.02;
  n.bottom.belt &&
    (!o || o.tucked) &&
    !v &&
    ra(e, a.waistY - 0.012, n.bottom.belt, a.off + 0.006);
}
const ha = Math.PI * 2,
  ga = (e, t, n) => e + (t - e) * n,
  _a = (e, t) => Math.exp(-(e * e) / (t * t)),
  va = new ye(),
  ya = new j(),
  ba = new ke(),
  xa = new M(),
  Sa = new M(1, 1, 1);
function $(e, t, n, r = 0, i = 0, a = 0, o = 1, s = 1, c = 1) {
  return va
    .compose(xa.set(e, t, n), ya.setFromEuler(ba.set(r, i, a)), Sa.set(o, s, c))
    .clone();
}
function Ca(e) {
  for (let t of e) {
    if (t.kind === `helmet`) return { d: 0.5, squash: 0.25 };
    if (t.kind === `cap` || t.kind === `policeCap`)
      return { d: 0.3, squash: 0.35 };
    if (t.kind === `bucket`) return { d: 0.34, squash: 0.35 };
  }
  return { d: 0, squash: 1 };
}
function wa(e) {
  let t = e.desc.hair.style,
    n = e.h.hh / 0.23;
  return (
    ({
      bald: 0,
      buzz: 0.003,
      balding: 0.006,
      elder: 0.008,
      perm: 0.012,
      bowl: 0.008,
      undercut: 0.01,
      spiky: 0.008,
    }[t] ?? 0.007) *
      n +
    0.006 * n
  );
}
const Ta = /* @__PURE__ */ new Set([`lanyard`, `watch`, `earbuds`, `necklace`]),
  Ea = /* @__PURE__ */ new Map();
function Da(e) {
  for (let t of e.desc.acc)
    if (!(e.lod === 1 && Ta.has(t.kind)))
      switch (t.kind) {
        case `mask`:
          Oa(e, t);
          break;
        case `glasses`:
        case `sunglasses`:
          Aa(e, t, t.kind === `sunglasses`);
          break;
        case `cap`:
        case `bucket`:
        case `policeCap`:
        case `visor`:
          ja(e, t);
          break;
        case `helmet`:
          Pa(e, t);
          break;
        case `backpack`:
        case `schoolbag`:
          Ba(e, t, t.kind === `schoolbag`);
          break;
        case `deliveryBox`:
          Va(e, t);
          break;
        case `tote`:
        case `shoulderBag`:
          Ha(e, t);
          break;
        case `marketBag`:
          Wa(e, t);
          break;
        case `cup`:
          Ka(e, t);
          break;
        case `phone`:
          qa(e, t);
          break;
        case `umbrella`:
          Ja(e, t);
          break;
        case `lanyard`:
          Za(e, t);
          break;
        case `watch`:
          Xa(e, t);
          break;
        case `earbuds`:
          Ia(e);
          break;
        case `headband`:
          Fa(e, t);
          break;
        case `apron`:
          $a(e, t);
          break;
        case `necklace`:
          Qa(e, t);
          break;
        case `fan`:
          Ya(e, t);
          break;
        default:
          Ea.get(t.kind)?.(e, t);
      }
}
function Oa(e, t) {
  let { h: n, m: r, lod: i } = e,
    a = n.hh / 0.23,
    o = n.lay,
    s = t.color ?? 12573166,
    c = i === 0 ? 10 : 6,
    l = i === 0 ? 5 : 3,
    u = (o.eyeD + o.noseBaseD) * 0.5 + 0.035;
  if (
    (r.grid(
      {
        nu: c,
        nv: l,
        closed: !1,
        point: (e, t, r) => {
          let i = ga(-1.28, 1.28, e),
            s = ga(u, 1, t),
            c =
              (0.004 +
                0.014 * _a(i, 0.35) * _a(s - o.noseTipD, 0.14) +
                0.006 * _a(i, 0.7)) *
              a,
            l = Math.abs(e * 2 - 1) ** 6;
          return (
            G(n, i, Math.min(1, s), c * (1 - l) + 0.0015, r),
            s > 0.97 && (r.y -= (s - 0.97) * n.hh * 0.6),
            r
          );
        },
      },
      {
        color: (e, t, n, r, i, a) => {
          a.setHex(s);
          let o = Math.abs(Math.sin(i * Math.PI * 3.2));
          return (a.multiplyScalar(0.93 + 0.07 * o), a);
        },
        skin: (e, t, n, r, i, a) => H(a, z.head, z.jaw, U(0.55, 0.9, i) * 0.6),
        kind: V.cloth,
        rough: 0.9,
      },
    ),
    i === 0)
  ) {
    let t =
        (((s >> 16) & 255) * 0.3 + ((s >> 8) & 255) * 0.59 + (s & 255) * 0.11) /
          255 <
        0.45
          ? X(s, 0.8)
          : 14079183,
      r = [new M(), new M(), new M()];
    for (let i of [-1, 1])
      for (let [o, s, c] of [
        [0.15, 1.62, 0.5],
        [0.85, 1.7, 0.7],
      ]) {
        let l = ga(u, 1, o);
        for (let e = 0; e <= 2; e++) {
          let t = e / 2;
          G(
            n,
            i * ga(1.28, s, t),
            ga(l, c, t),
            (0.004 - 0.001 * t + 0.0015 * Math.sin(t * Math.PI)) * a,
            r[e],
          );
        }
        (ka(e, r[0], r[1], 0.0022, t, z.head),
          ka(e, r[1], r[2], 0.0022, t, z.head));
      }
  }
}
function ka(e, t, n, r, i, a) {
  let o = new M().subVectors(n, t),
    s = new Ot(r, o.length(), r * 0.6),
    c = t.clone().add(n).multiplyScalar(0.5),
    l = new j().setFromUnitVectors(new M(0, 1, 0), o.normalize());
  e.m.geo(s, new ye().compose(c, l, new M(1, 1, 1)), {
    color: i,
    skin: a,
    kind: V.cloth,
    rough: 0.8,
  });
}
function Aa(e, t, n) {
  let { h: r, m: i, lod: a } = e,
    o = r.hh / 0.23,
    s = r.lay,
    c = t.color ?? (n ? 1381655 : 2761760),
    l = s.eyeW * 1.32,
    u = (n ? 0.07 : 0.058) * (r.hh / r.hh),
    d = 0.012 * o,
    f = a === 0 ? 12 : 6;
  for (let t of [-1, 1]) {
    let p = t * s.eyeT,
      m = s.eyeD + 0.004,
      h = (e, t, i) => {
        let a = (e / f) * ha,
          o = Math.sign(Math.cos(a)) * Math.abs(Math.cos(a)) ** 0.7,
          s = Math.sign(Math.sin(a)) * Math.abs(Math.sin(a)) ** 0.7,
          c = p + o * (l + i),
          h = m + s * (u * 0.5 + i * 0.3) + (n && s > 0 ? 0.01 : 0),
          g = rr(r, p, m) + d,
          _ = r.crownY - h * r.hh;
        return t.set(
          Math.sin(c) * g,
          _,
          Kn(r, h) - Math.cos(c) * g * (1 - 0.02 * Math.abs(o)),
        );
      };
    if (
      (i.grid(
        {
          nu: f,
          nv: 1,
          closed: !0,
          point: (e, t, n) => h(Math.round(e * f), n, t < 0.5 ? 0.012 : 0),
          invert: !1,
        },
        { color: c, skin: z.head, kind: V.gloss, rough: 0.25 },
      ),
      h(0, new M(), 0),
      i.grid(
        {
          nu: f,
          nv: 1,
          closed: !0,
          point: (e, t, n) =>
            t < 0.5
              ? h(Math.round(e * f), n, 0.001)
              : n.set(
                  Math.sin(p) * (rr(r, p, m) + d),
                  r.crownY - m * r.hh,
                  Kn(r, m) - Math.cos(p) * (rr(r, p, m) + d),
                ),
          invert: !0,
        },
        n
          ? {
              color: 1184790,
              skin: z.head,
              kind: V.lens,
              rough: 0.05,
              emissive: 0.9,
              transparent: !0,
            }
          : {
              color: 14674158,
              skin: z.head,
              kind: V.lens,
              rough: 0.05,
              emissive: 0.18,
              transparent: !0,
            },
      ),
      a === 0)
    ) {
      let n = h(0, new M(), 0.012);
      t < 0 && h(f / 2, n, 0.012);
      let i = G(r, t * 1.55, 0.47, 0.004 * o, new M());
      ka(e, h(t > 0 ? 0 : f / 2, new M(), 0.01), i, 0.004, c, z.head);
    }
  }
  ka(
    e,
    G(r, -s.eyeT + s.eyeW * 1.3, s.eyeD - 0.02, 0.013 * o, new M()),
    G(r, s.eyeT - s.eyeW * 1.3, s.eyeD - 0.02, 0.013 * o, new M()),
    0.004,
    c,
    z.head,
  );
}
function ja(e, t) {
  let { h: n, m: r, lod: i } = e,
    a = n.hh / 0.23,
    o = t.kind,
    s =
      t.color ??
      (o === `policeCap` ? 1778742 : o === `visor` ? 15755914 : 2237998),
    c = t.color2 ?? (o === `policeCap` ? 921362 : X(s, 0.85)),
    l = wa(e),
    u = i === 0 ? 18 : 8;
  if (o !== `visor`) {
    let e = (e) =>
        o === `bucket`
          ? 0.34
          : o === `policeCap`
            ? 0.3
            : ga(0.42, 0.28, (Math.cos(e) + 1) / 2),
      t = i === 0 ? [0, 0.18, 0.4, 0.62, 0.82, 1] : [0, 0.5, 1],
      c = t.length - 1,
      d = o === `policeCap`;
    if (
      (r.grid(
        {
          nu: u,
          nv: c,
          closed: !1,
          point: (r, i, o) => {
            let s = -Math.PI + r * ha,
              u = t[Math.round(i * c)],
              f = e(s) * u;
            return (
              G(n, s, f, l + (d ? 0.02 * a * (1 - u) + 0.01 * a : 0), o, !1),
              d &&
                ((o.y = Math.min(o.y, n.crownY + l + 0.028 * a)),
                (o.z -= 0.012 * a * (1 - u))),
              f < 0.02 && (o.y += l),
              o
            );
          },
        },
        {
          color: (e, n, r, a, o, l) => {
            if ((l.setHex(s), !d && i === 0)) {
              let e = Math.abs(Math.sin(a * Math.PI * 6));
              l.multiplyScalar(0.92 + 0.08 * Math.min(1, e * 4));
            }
            return (d && t[Math.round(o * c)] > 0.75 && l.setHex(921362), l);
          },
          skin: z.head,
          kind: V.cloth,
          rough: 0.8,
        },
      ),
      d)
    ) {
      let e = new kt(0.012 * a, 8),
        t = G(n, 0, 0.18, l + 0.024 * a, new M(), !1);
      r.geo(e, $(t.x, t.y, t.z - 0.004, 0.1, Math.PI, 0), {
        color: 14201418,
        skin: z.head,
        kind: V.metal,
        rough: 0.3,
      });
    }
  } else
    r.grid(
      {
        nu: u,
        nv: 1,
        closed: !0,
        point: (e, t, r) =>
          G(
            n,
            -Math.PI + e * ha,
            0.3 + (t - 0.5) * 0.09,
            l * 0.6 + 0.002,
            r,
            !1,
          ),
      },
      { color: c, skin: z.head, kind: V.cloth, rough: 0.8 },
    );
  let d = o === `bucket` ? `round` : o === `policeCap` ? `peak` : `bill`,
    f = o === `bucket` ? 0.34 : o === `visor` ? 0.3 : 0.28,
    p =
      (o === `visor`
        ? 0.095
        : o === `policeCap`
          ? 0.05
          : o === `bucket`
            ? 0.045
            : 0.075) * a,
    m = d === `round` ? Math.PI : o === `visor` ? 1.25 : 1,
    h = i === 0 ? 12 : 6,
    g = (e, t, r, i) => {
      let a = d === `round` ? -Math.PI + e * ha : -m + e * m * 2,
        s = d === `round` ? 1 : Math.cos((a / m) * Math.PI * 0.5) ** 0.6;
      G(n, a, f, l + 0.002, r, !1);
      let c = Math.sin(a),
        u = -Math.cos(a),
        h = p * s * t,
        g =
          d === `round`
            ? 0.35
            : o === `policeCap`
              ? 0.55
              : o === `visor`
                ? 0.12
                : 0.22;
      return (
        (r.x += c * h),
        (r.z += u * h),
        (r.y -= h * g + (i ? 0 : 0.003)),
        r
      );
    };
  for (let e of [!0, !1])
    r.grid(
      {
        nu: d === `round` ? u : h,
        nv: 1,
        closed: !1,
        point: (t, n, r) => g(t, n, r, e),
        invert: !e,
      },
      {
        color: e
          ? o === `policeCap`
            ? c
            : o === `visor`
              ? s
              : X(s, 0.95)
          : o === `visor`
            ? X(s, 0.7)
            : X(c, 0.6),
        skin: z.head,
        kind: o === `policeCap` || o === `visor` ? V.gloss : V.cloth,
        rough: o === `policeCap` ? 0.2 : 0.75,
      },
    );
}
const Ma = new M(),
  Na = new M();
function Pa(e, t) {
  let { h: n, m: r, lod: i } = e,
    a = n.hh / 0.23,
    o = t.color ?? 15921904,
    s = t.color2 ?? 2237480,
    c = 0.028 * a,
    l = i === 0 ? 16 : 12,
    u =
      i === 0
        ? [0, 0.15, 0.36, 0.58, 0.78, 0.92, 1]
        : [0, 0.22, 0.48, 0.74, 0.92, 1],
    d = u.length - 1,
    f = (e) => {
      let t = Math.abs(Math.atan2(Math.sin(e), Math.cos(e)));
      return t < 0.9
        ? 0.27
        : t < 1.9
          ? ga(0.27, 0.62, (t - 0.9) / 1)
          : ga(0.62, 0.66, (t - 1.9) / 1.24);
    },
    p = Ma.set(0, n.crownY - 0.45 * n.hh, Kn(n, 0.45)),
    m = (e, t, r, i) => {
      (G(n, e, t, 0, i, !1), Na.subVectors(i, p));
      let a = Na.length() || 1;
      return i.addScaledVector(Na, r / a);
    };
  (r.grid(
    {
      nu: l,
      nv: d,
      closed: !1,
      point: (e, t, n) => {
        let r = -Math.PI + e * ha,
          i = u[Math.round(t * d)];
        return m(r, f(r) * i, c * (1 - 0.15 * i * i), n);
      },
    },
    {
      color: (e, n, r, a, c, l) => {
        let f = u[Math.round(c * d)];
        return (
          l.setHex(f > 0.93 ? s : o),
          i === 0 &&
            Math.abs(a - 0.5) < 0.03 &&
            f < 0.9 &&
            l.setHex(X(t.color2 ?? 14169132, 1)),
          l
        );
      },
      skin: z.head,
      kind: V.gloss,
      rough: 0.22,
    },
  ),
    r.grid(
      {
        nu: l,
        nv: 1,
        closed: !1,
        point: (e, t, r) => {
          let i = -Math.PI + e * ha;
          return t < 0.5
            ? m(i, f(i), c * 0.85, r)
            : G(n, i, f(i), 0.004, r, !1);
        },
        invert: !0,
      },
      { color: 1710620, skin: z.head, kind: V.cloth, rough: 0.9 },
    ));
  let h = 0.8;
  for (let e of [!0, !1])
    r.grid(
      {
        nu: 8,
        nv: 1,
        closed: !1,
        point: (t, r, i) => {
          let o = -0.8 + t * h * 2;
          G(n, o, 0.27, c + 0.002, i, !1);
          let s = Math.cos((o / h) * Math.PI * 0.5);
          return (
            (i.x += Math.sin(o) * 0.035 * a * s * r),
            (i.z += -Math.cos(o) * 0.035 * a * s * r),
            (i.y += 0.004 * a * r - (e ? 0 : 0.003)),
            i
          );
        },
        invert: !e,
      },
      { color: e ? o : s, skin: z.head, kind: V.gloss, rough: 0.3 },
    );
  if (i === 0)
    for (let t of [-1, 1])
      ka(
        e,
        G(n, t * 1.45, 0.55, c * 0.7, new M(), !1),
        G(n, t * 0.9, 1, 0.004 * a, new M()),
        0.006,
        1579034,
        z.head,
      );
}
function Fa(e, t) {
  let { h: n, m: r } = e,
    i = wa(e);
  r.grid(
    {
      nu: e.lod === 0 ? 18 : 8,
      nv: 1,
      closed: !0,
      point: (e, t, r) =>
        G(
          n,
          -Math.PI + e * ha,
          0.2 + (t - 0.5) * 0.06 + 0.08 * Math.max(0, -Math.cos(e * ha)),
          i + 0.002,
          r,
          !1,
        ),
    },
    { color: t.color ?? 14826074, skin: z.head, kind: V.satin, rough: 0.5 },
  );
}
function Ia(e) {
  let { h: t, m: n } = e,
    r = t.hh / 0.23;
  for (let e of [-1, 1]) {
    let i = G(t, e * 1.57, 0.585, 0.005 * r, new M(), !1),
      a = new Pt(0.0055 * r, 5, 3);
    n.geo(a, $(i.x, i.y, i.z), {
      color: 16185078,
      skin: z.head,
      kind: V.gloss,
      rough: 0.2,
    });
    let o = new At(0.0022 * r, 0.0022 * r, 0.02 * r, 5, 1, !0);
    n.geo(o, $(i.x, i.y - 0.012 * r, i.z + 0.002), {
      color: 16185078,
      skin: z.head,
      kind: V.gloss,
      rough: 0.2,
    });
  }
}
function La(e, t, n) {
  let r = e.fit,
    i = r.outer ? r.outer.off : r.top ? r.top.off : 0,
    a = r.outer ? r.outer.loose : r.top ? r.top.loose : 0;
  return Ni(e.b, t, n, i, a);
}
function Ra(e, t, n) {
  let { b: r, m: i } = e,
    a = r.H;
  for (let o of [-1, 1]) {
    let s = o * 0.3,
      c = [
        { t: o * (Math.PI - 0.45), y: 0.79 * a },
        { t: o * (Math.PI / 2 + 0.25), y: 0.835 * a },
        { t: o * 0.9, y: 0.83 * a },
        { t: o * 0.55, y: 0.78 * a },
        { t: o * 0.45, y: 0.7 * a },
        { t: o * 0.55, y: n },
      ],
      l = c.length - 1;
    i.grid(
      {
        nu: 1,
        nv: l,
        closed: !1,
        point: (t, n, i) => {
          let o = c[Math.round(n * l)],
            s = o.t + (t - 0.5) * 0.34 * (o.y > 0.82 * a ? 0.45 : 1),
            u = o.y,
            d =
              La(e, s, Math.min(u, r.torsoTop - 0.01)) +
              0.006 +
              (u > 0.82 * a ? 0.008 : 0);
          return i.set(
            Math.sin(s) * d,
            u + (o.y > 0.82 * a ? 0.012 : 0),
            q(r, Math.min(u, r.torsoTop)) - Math.cos(s) * d,
          );
        },
        invert: o < 0,
      },
      {
        color: t,
        skin: (e, t, n, i, a, o) => Yr(r, s, t, o),
        kind: V.cloth,
        rough: 0.8,
      },
    );
  }
}
function za(e, t, n, r, i = 2) {
  let a = new Ot(e, t, n, i, i, i),
    o = a.attributes.position,
    s = e / 2 - r,
    c = t / 2 - r,
    l = n / 2 - r,
    u = new M(),
    d = new M();
  for (let e = 0; e < o.count; e++)
    (u.fromBufferAttribute(o, e),
      d.set(
        Math.max(-s, Math.min(s, u.x)),
        Math.max(-c, Math.min(c, u.y)),
        Math.max(-l, Math.min(l, u.z)),
      ),
      u.sub(d),
      u.lengthSq() > 1e-10 && u.setLength(r),
      u.add(d),
      o.setXYZ(e, u.x, u.y, u.z));
  return (a.deleteAttribute(`normal`), a);
}
function Ba(e, t, n) {
  let { b: r, m: i } = e,
    a = r.H,
    o = r.s,
    s = t.color ?? (n ? 2306639 : 2961203),
    c = t.color2 ?? X(s, 0.75),
    l = (n ? 0.28 : 0.3) * o,
    u = (n ? 0.34 : 0.4) * o,
    d = (n ? 0.1 : 0.13) * o,
    f = 0.68 * a,
    p = q(r, f) + La(e, Math.PI, f) + d / 2 + 0.01,
    m = za(l, u, d, 0.035 * o, e.lod === 0 ? 3 : 1);
  if (
    (i.geo(m, $(0, f, p, 0.06, 0, 0), {
      color: (e, t, n, r, i, a) => (
        a.setHex(s),
        n > p + d * 0.3 && t < f && a.setHex(c),
        t < f - u * 0.46 && a.multiplyScalar(0.8),
        a
      ),
      skin: (e, t, n, r, i, a) =>
        H(a, z.chest, z.spine, U(f, f - u * 0.5, t) * 0.4),
      kind: V.cloth,
      rough: 0.75,
    }),
    e.lod === 0)
  ) {
    let e = za(l * 0.75, u * 0.38, d * 0.35, 0.02 * o, 2);
    i.geo(e, $(0, f - u * 0.2, p + d * 0.55, 0.06, 0, 0), {
      color: c,
      skin: z.chest,
      kind: V.cloth,
      rough: 0.75,
    });
  }
  Ra(e, X(s, 0.7), f - u * 0.35);
}
function Va(e, t) {
  let { b: n, m: r } = e,
    i = n.H,
    a = n.s,
    o = t.color ?? 15217276,
    s = 0.4 * a,
    c = 0.42 * a,
    l = 0.3 * a,
    u = 0.7 * i,
    d = q(n, u) + La(e, Math.PI, u) + l / 2 + 0.012,
    f = za(s, c, l, 0.025 * a, e.lod === 0 ? 2 : 1);
  r.geo(f, $(0, u, d), {
    color: (e, t, n, r, i, a) => a.setHex(t > u + c * 0.46 ? X(o, 0.8) : o),
    skin: z.chest,
    kind: V.gloss,
    rough: 0.45,
  });
  let p = bi(
    e,
    ((o >> 8) & 255) > ((o >> 16) & 255) ? `rider-green` : `rider-pink`,
    16777215,
    o,
  );
  if (p) {
    let e = new Nt(s * 0.8, c * 0.8);
    r.geo(
      e,
      $(0, u, d + l / 2 + 0.002),
      {
        color: 16777215,
        skin: z.chest,
        kind: V.cloth,
        rough: 0.6,
        tex: {
          rect: p,
          mode: 2,
          uv: (e, t, n, r, i, a) => ((a[0] = r), (a[1] = i)),
        },
      },
      !0,
    );
  }
  Ra(e, 2763310, u - c * 0.3);
}
function Ha(e, t) {
  let { b: n, m: r } = e,
    i = n.H,
    a = n.s,
    o = t.kind === `tote`,
    s = t.color ?? (o ? 15327695 : 3812388),
    c = (o ? 0.3 : 0.2) * a,
    l = (o ? 0.32 : 0.16) * a,
    u = 0.06 * a,
    d = (o ? 0.5 : 0.53) * i,
    f = 1.35,
    p = La(e, f, Math.max(d, n.torsoBottom + 0.02)) + u / 2 + 0.01,
    m = Math.sin(f) * p + 0.03 * a,
    h = q(n, d) - Math.cos(f) * p,
    g = za(u, l, c, (o ? 0.012 : 0.02) * a, e.lod === 0 ? 2 : 1);
  (r.geo(g, $(m, d, h, 0, 0, 0.04), {
    color: (e, t, n, r, i, a) =>
      a.setHex(s).multiplyScalar(t > d + l * 0.3 && !o ? 0.85 : 1),
    skin: (e, t, n, r, i, a) => {
      H(a, z.hips, z.chest, 0.5);
    },
    kind: o ? V.cloth : V.gloss,
    rough: o ? 0.9 : 0.4,
  }),
    Ua(
      e,
      o
        ? [
            [1.12, 0.585],
            [1, 0.68],
            [1.05, 0.78],
            [1.4, 0.842],
            [1.85, 0.8],
            [2.02, 0.69],
            [1.92, 0.585],
          ]
        : [
            [1.3, 0.575],
            [0.75, 0.64],
            [0.1, 0.71],
            [-0.55, 0.775],
            [-1.15, 0.83],
            [-1.57, 0.848],
            [-2.05, 0.82],
            [-2.6, 0.76],
            [Math.PI, 0.7],
            [2.55, 0.635],
            [1.85, 0.585],
          ],
      (o ? 0.03 : 0.026) * a,
      o ? X(s, 0.85) : 2760730,
    ));
}
function Ua(e, t, n, r) {
  let { b: i, m: a } = e,
    o = i.H,
    s = t.length - 1;
  for (let c of [!1, !0])
    a.grid(
      {
        nu: 1,
        nv: s,
        closed: !1,
        point: (r, a, c) => {
          let [l, u] = t[Math.round(a * s)],
            d = Math.min(i.torsoTop - 0.004, u * o + (r - 0.5) * n),
            f = U(0.8 * o, 0.845 * o, d),
            p = La(e, l, d) + 0.005 + 0.006 * f;
          return c.set(
            Math.sin(l) * p,
            d + 0.006 * f,
            q(i, d) - Math.cos(l) * p,
          );
        },
        invert: c,
      },
      {
        color: c ? X(r, 0.7) : r,
        skin: (e, n, r, a, o, c) => Yr(i, t[Math.round(o * s)][0], n, c),
        kind: V.cloth,
        rough: 0.7,
      },
    );
}
function Wa(e, t) {
  let { b: n, m: r } = e,
    i = n.s,
    a = n.joints.p[z.handL],
    o = 0.3 * i,
    s = 0.26 * i,
    c = 0.12 * i,
    l = new M(a.x - 0.02 * i, a.y - 0.09 * i - s / 2, a.z),
    u = za(c, s, o, 0.02 * i, e.lod === 0 ? 3 : 1),
    d = [t.color ?? 14168620, 15921902, t.color2 ?? 2772904, 15921902],
    f = gi(e, `marketbag:${d[0]}:${d[2]}`, 128, 128, !0, mi(d[0], d[2]));
  (r.geo(u, $(l.x, l.y, l.z), {
    color: f ? 16777215 : d[0],
    skin: z.handL,
    kind: V.gloss,
    rough: 0.5,
    part: B.lItem,
    tex: f
      ? {
          rect: f,
          mode: 1,
          uv: (e, t, n, r, i, a) => ((a[0] = r * 2), (a[1] = i * 2)),
        }
      : void 0,
  }),
    ka(
      e,
      new M(l.x, l.y + s / 2, l.z - o * 0.3),
      new M(a.x, a.y - 0.06 * i, a.z),
      0.018 * i,
      d[0],
      z.handL,
    ),
    ka(
      e,
      new M(l.x, l.y + s / 2, l.z + o * 0.3),
      new M(a.x, a.y - 0.06 * i, a.z),
      0.018 * i,
      d[0],
      z.handL,
    ));
}
function Ga(e, t) {
  let n = e.b.joints.p,
    r = n[t < 0 ? z.handL : z.handR],
    i = n[t < 0 ? z.fingersL : z.fingersR];
  return r
    .clone()
    .lerp(i, 0.85)
    .add(new M(-t * 0.012 * e.b.s, 0, -0.008 * e.b.s));
}
function Ka(e, t) {
  let { m: n, b: r, lod: i } = e,
    a = r.s,
    o = Ga(e, 1),
    s = 0.15 * a,
    c = 0.037 * a,
    l = 0.043 * a,
    u = t.color ?? 13081194,
    d = new At(l, c, s, i === 0 ? 12 : 6, 1, !1),
    f = o.y + 0.02 * a;
  n.geo(d, $(o.x + 0.012 * a, f, o.z), {
    color: (e, t, n, r, i, a) => {
      let o = (t - (f - s / 2)) / s;
      return (
        a.setHex(u),
        o < 0.22 && a.setHex(2759186),
        o > 0.86 && a.setHex(15921128),
        o > 0.4 && o < 0.62 && a.setHex(16052972),
        a
      );
    },
    skin: z.handR,
    kind: V.gloss,
    rough: 0.2,
  });
  let p = new At(0.0055 * a, 0.0055 * a, 0.1 * a, 5);
  n.geo(
    p,
    $(o.x + 0.02 * a, f + s / 2 + 0.035 * a, o.z + 0.004, 0.12, 0, -0.1),
    { color: t.color2 ?? 3116906, skin: z.handR, kind: V.gloss, rough: 0.3 },
  );
}
function qa(e, t) {
  let { m: n, b: r } = e,
    i = r.s,
    a = Ga(e, -1),
    o = za(0.009 * i, 0.15 * i, 0.072 * i, 0.004 * i, 1);
  n.geo(o, $(a.x + 0.015 * i, a.y, a.z - 0.01 * i, 0, 0, 0), {
    color: t.color ?? 1842466,
    skin: z.handL,
    kind: V.gloss,
    rough: 0.25,
  });
  let s = new Nt(0.066 * i, 0.138 * i);
  n.geo(
    s,
    $(a.x + 0.015 * i + 0.0048 * i, a.y, a.z - 0.01 * i, 0, Math.PI / 2, 0),
    { color: 9423103, skin: z.handL, kind: V.screen, rough: 0.1, emissive: 1 },
    !0,
  );
}
function Ja(e, t) {
  let { m: n, b: r, lod: i } = e,
    a = r.s,
    o = Ga(e, 1),
    s = 0.78 * a,
    c = t.color ?? 2842526,
    l = t.color2 ?? X(c, 0.8),
    u = new At(0.006 * a, 0.006 * a, s, 5);
  n.geo(u, $(o.x, o.y - s / 2 + 0.05 * a, o.z), {
    color: 2763310,
    skin: z.handR,
    kind: V.metal,
    rough: 0.3,
  });
  let d = 0.52 * a,
    f = new M(o.x, o.y - s + 0.05 * a, o.z),
    p = i === 0 ? 16 : 8;
  for (let e of [!0, !1])
    n.grid(
      {
        nu: p,
        nv: 2,
        closed: !0,
        point: (t, n, r) => {
          let i = t * ha,
            o = Math.round(n * 2) / 2,
            s = 1 - 0.04 * Math.abs(Math.cos(i * 4)),
            c = d * o * s,
            l = 0.2 * a * o * o;
          return r.set(
            f.x + Math.cos(i) * c,
            f.y + l + (e ? 0 : 0.004),
            f.z + Math.sin(i) * c,
          );
        },
        invert: e,
      },
      {
        color: (t, n, r, i, a, o) =>
          o.setHex(Math.floor(i * 8) % 2 ? c : l).multiplyScalar(e ? 1 : 0.7),
        skin: z.handR,
        kind: V.gloss,
        rough: 0.35,
      },
    );
}
function Ya(e, t) {
  let { m: n, b: r } = e,
    i = r.s,
    a = Ga(e, 1),
    o = new kt(0.1 * i, 10);
  n.geo(
    o,
    $(a.x + 0.02 * i, a.y - 0.14 * i, a.z - 0.02, 0, Math.PI / 2, 0),
    { color: t.color ?? 15852228, skin: z.handR, kind: V.cloth, rough: 0.8 },
    !0,
  );
  let s = new kt(0.1 * i, 10);
  n.geo(
    s,
    $(a.x + 0.018 * i, a.y - 0.14 * i, a.z - 0.02, 0, -Math.PI / 2, 0),
    { color: t.color2 ?? 12730415, skin: z.handR, kind: V.cloth, rough: 0.8 },
    !0,
  );
  let c = new At(0.004 * i, 0.004 * i, 0.1 * i, 4);
  n.geo(c, $(a.x + 0.02 * i, a.y - 0.03 * i, a.z - 0.02), {
    color: 6965802,
    skin: z.handR,
    kind: V.gloss,
    rough: 0.5,
  });
}
function Xa(e, t) {
  let { m: n, b: r } = e,
    i = r.arms[0],
    a = r.s,
    o = i.c.clone().lerp(i.b, 0.06),
    s = new Ft(0.029 * a, 0.006 * a, 3, 10);
  n.geo(s, $(o.x, o.y, o.z, Math.PI / 2, 0, 0.05), {
    color: t.color ?? 1579034,
    skin: z.foreL,
    kind: V.gloss,
    rough: 0.3,
  });
  let c = new At(0.014 * a, 0.014 * a, 0.006 * a, 6);
  n.geo(c, $(o.x - 0.031 * a, o.y, o.z, 0, 0, Math.PI / 2), {
    color: t.color2 ?? 14343384,
    skin: z.foreL,
    kind: V.metal,
    rough: 0.25,
  });
}
function Za(e, t) {
  let { m: n, b: r } = e,
    i = r.H,
    a = r.s,
    o = 0.72 * i,
    s = La(e, 0, o) + 0.008,
    c = new M(0, o, q(r, o) - s),
    l = t.color ?? 2777784;
  for (let t of [-1, 1])
    ka(
      e,
      new M(t * 0.06 * a, 0.845 * i, q(r, 0.845 * i) - 0.03 * a),
      c.clone().add(new M(t * 0.01, 0.045 * a, 0)),
      0.012 * a,
      l,
      z.chest,
    );
  let u = za(0.055 * a, 0.085 * a, 0.003, 0.004 * a, 1);
  n.geo(u, $(c.x, c.y, c.z, -0.05, 0, 0), {
    color: (e, t, n, r, i, o) => o.setHex(t > c.y + 0.02 * a ? l : 16053490),
    skin: z.chest,
    kind: V.gloss,
    rough: 0.3,
  });
}
function Qa(e, t) {
  let { m: n, b: r } = e,
    i = 0.838 * r.H,
    a = new Ft(r.neckR * 1.3, 0.0018, 3, 12);
  n.geo(a, $(0, i, q(r, i) - 0.012, Math.PI / 2 - 0.35, 0, 0), {
    color: t.color ?? 14729328,
    skin: z.chest,
    kind: V.metal,
    rough: 0.2,
  });
}
function $a(e, t) {
  let { b: n, m: r } = e,
    i = n.H,
    a = t.color ?? 2767450,
    o = 0.6 * i,
    s = 0.33 * i,
    c = e.lod === 0 ? 8 : 4,
    l = e.lod === 0 ? 6 : 3,
    u = (e, t) => {
      let r = n.legs[1].a.x,
        i = 0.095 * n.s,
        a = r + i,
        o = i * 1.15;
      return (
        1 / Math.sqrt((Math.sin(e) / a) ** 2 + (Math.cos(e) / o) ** 2) +
        0.02 +
        0 * t
      );
    };
  r.grid(
    {
      nu: c,
      nv: l,
      closed: !1,
      point: (t, r, i) => {
        let a = -1.05 + t * 1.05 * 2,
          c = ga(s, o, r),
          l =
            Math.max(c > n.torsoBottom ? La(e, a, c) + 0.01 : 0, u(a, c)) +
            0.004 +
            (1 - r) * 0.02;
        return i.set(
          Math.sin(a) * l,
          c,
          q(n, Math.max(c, n.torsoBottom)) - Math.cos(a) * l,
        );
      },
      invert: !0,
    },
    {
      color: (e, t, n, r, i, s) =>
        s.setHex(a).multiplyScalar(t > o - 0.03 ? 0.85 : 1),
      skin: (e, t, r, i, a, o) => {
        H(o, z.hips, z.hips, 0);
        let c = U(n.torsoBottom, s, t);
        jn(o, i < 0.5 ? z.thighL : z.thighR, 0.4 * c);
      },
      kind: V.cloth,
      rough: 0.85,
    },
  );
}
const eo = Math.PI * 2,
  to = (e, t, n) => e + (t - e) * n,
  no = (e) => (e < 0 ? 0 : e > 1 ? 1 : e);
function ro(e, t, n) {
  let r = e.fit.top;
  return r ? Ni(e.b, t, n, r.off, r.loose) : J(e.b, t, n, !0);
}
function io(e, t) {
  let { b: n, m: r, fit: i, lod: a } = e,
    o = n.H,
    s = n.s;
  if (i.outer && i.outer.gap === 0 && i.outer.style !== `vest`) return;
  let c = t.color ?? 1976900,
    l = (i.top ? i.top.neckF : 0.838 * o) - 0.016 * s,
    u = Math.max(i.bottom.waistY + 0.012, 0.565 * o),
    d = 0.042 * s,
    f = 0.02 * s,
    p = a === 0 ? [0, 0.05, 0.25, 0.5, 0.75, 0.92, 1] : [0, 0.08, 0.6, 1],
    m = p.length - 1,
    h = (e) =>
      e < 0.06
        ? to(0.004 * s, d, e / 0.06)
        : to(d, f, ((e - 0.06) / 0.94) ** 1.4);
  r.grid(
    {
      nu: 2,
      nv: m,
      closed: !1,
      point: (t, r, i) => {
        let a = p[Math.round(r * m)],
          o = to(u, l, a),
          s = ro(e, 0, o) + 0.0045,
          c = h(a) * (a === 0 ? 0 : 1),
          d = (t - 0.5) * 2 * c,
          f = s + (t === 0.5 ? 0.0025 : 0) + 0.004 * (1 - a);
        return i.set(d, o, q(n, o) - Math.sqrt(Math.max(0, f * f - d * d)));
      },
      invert: !0,
    },
    {
      color: (e, n, r, i, o, l) => {
        (l.setHex(c),
          t.color2 !== void 0 &&
            a === 0 &&
            Math.sin((n / (0.03 * s)) * Math.PI + i * 3) > 0.55 &&
            l.setHex(t.color2),
          l.multiplyScalar(i === 0.5 ? 1.06 : 0.92));
      },
      skin: (e, t, r, i, a, o) => Yr(n, 0, t, o),
      kind: V.satin,
      rough: 0.45,
    },
  );
  let g = l + 0.006 * s,
    _ = ro(e, 0, g) + 0.008,
    v = new At(0.017 * s, 0.011 * s, 0.026 * s, a === 0 ? 6 : 4, 1);
  r.geo(v, $(0, g, q(n, g) - _, -0.15, 0, 0, 1, 1, 0.62), {
    color: X(c, 0.9),
    skin: z.chest,
    kind: V.satin,
    rough: 0.45,
  });
}
function ao(e, t) {
  let { b: n, m: r, fit: i, lod: a } = e,
    o = n.H,
    s = n.s,
    c = t.color ?? 1844288,
    l = t.color2 ?? 11739180,
    u = 0.728 * o,
    d = (e) => {
      let t = i.top,
        n = t ? t.neckF : 0.82 * o,
        r = t ? t.neckB : 0.85 * o;
      return to(r, n, Math.max(0, Math.cos(e)) ** 1.5) + 0.004;
    },
    f = (e) => {
      let t = Math.abs(e);
      return t < 0.62 ? to(u + 0.006, d(0.62), t / 0.62) : d(e);
    },
    p = (e) => {
      let t = Math.abs(e);
      return t < 1.25
        ? to(u, 0.79 * o, t / 1.25)
        : t < 1.95
          ? to(0.79 * o, 0.8 * o, (t - 1.25) / 0.7)
          : t < 2.15
            ? to(0.8 * o, 0.688 * o, U(1.95, 2.15, t))
            : 0.688 * o;
    },
    m = a === 0 ? 28 : 14,
    h = a === 0 ? [0, 0.15, 0.5, 1] : [0, 1],
    g = h.length - 1,
    _ = (t, r) => ro(e, t, Math.min(r, n.torsoTop - 0.004)) + 0.005,
    v = (e) => -Math.PI + e * eo;
  r.grid(
    {
      nu: m,
      nv: g,
      closed: !0,
      point: (e, t, r) => {
        let i = v(e),
          a = h[Math.round(t * g)],
          o = to(p(i), f(i), a),
          s = _(i, o) + 0.004 * (1 - a) + 0.002;
        return r.set(
          Math.sin(i) * s,
          o,
          q(n, Math.min(o, n.torsoTop)) - Math.cos(i) * s,
        );
      },
      invert: !0,
    },
    {
      color: (e, t, n, r, i, a) =>
        a.setHex(Math.round(i * g) === g ? X(c, 0.85) : c),
      skin: (e, t, r, i, a, o) => Yr(n, v(i), t, o),
      kind: V.cloth,
      rough: 0.85,
    },
  );
  let y = a === 0 ? [0.012, 0.024] : [0.016];
  for (let e of y) {
    let t = 0.0035 * s * (a === 0 ? 1 : 1.6);
    r.grid(
      {
        nu: m,
        nv: 1,
        closed: !0,
        point: (r, i, a) => {
          let s = v(r),
            c = p(s),
            l = f(s),
            u = Math.min(l - 0.002, c + e * o * 0.6 + (i - 0.5) * t * 2),
            d =
              _(s, u) +
              0.0035 +
              0.0035 * (1 - no((u - c) / Math.max(0.01, l - c)));
          return a.set(
            Math.sin(s) * d,
            u,
            q(n, Math.min(u, n.torsoTop)) - Math.cos(s) * d,
          );
        },
        invert: !0,
      },
      {
        color: 15921902,
        skin: (e, t, r, i, a, o) => Yr(n, v(i), t, o),
        kind: V.cloth,
        rough: 0.8,
      },
    );
  }
  let b = u + 0.004,
    x = _(0, b) + 0.012,
    S = q(n, b) - x,
    C = a === 0 ? new Pt(0.02 * s, 6, 4) : new Mt(0.02 * s, 0);
  r.geo(C, $(0, b, S, 0, 0, 0, 1.25, 0.8, 0.7), {
    color: l,
    skin: z.chest,
    kind: V.satin,
    rough: 0.5,
  });
  for (let t of [-1, 1]) {
    let r = new M(t * 0.008 * s, b - 0.012 * s, S - 0.004),
      i = b - 0.085 * s;
    ka(
      e,
      r,
      new M(t * 0.028 * s, i, q(n, i) - _(t * 0.08, i) - 0.007),
      0.024 * s,
      l,
      z.chest,
    );
  }
}
function oo(e, t) {
  let { b: n, m: r, fit: i, lod: a } = e,
    o = n.H,
    s = n.s,
    c = t.color ?? 13215302,
    l = i.outer ? i.outer.hemY + 0.05 * s : 0.56 * o,
    u = (i.outer ? i.outer.neckY : 0.83 * o) - 0.03 * s;
  for (let t = 0; t < 5; t++) {
    let i = to(l, u, t / 4),
      o = La(e, 0, i) + 0.004,
      d = a === 0 ? new Pt(0.0105 * s, 6, 3) : new Mt(0.012 * s, 0);
    r.geo(d, $(0, i, q(n, i) - o, 0, 0, 0, 1, 1, 0.55), {
      color: c,
      skin: z.chest,
      kind: V.metal,
      rough: 0.3,
    });
  }
  let d = i.outer;
  if (d && d.style === `gakuran`) {
    let e = d.neckY - 0.01 + 0.055 * s;
    r.grid(
      {
        nu: a === 0 ? 14 : 8,
        nv: 1,
        closed: !0,
        point: (t, r, i) => {
          let a = t * eo,
            o =
              Math.max(n.neckR + 0.012, J(n, a, d.neckY - 0.01) * 0.95) +
              0.006 +
              d.off * 0.4;
          return i.set(
            Math.sin(a) * o,
            e - 0.004 + r * 0.006,
            q(n, d.neckY - 0.01) - Math.cos(a) * o,
          );
        },
        invert: !0,
      },
      {
        color: 16053488,
        skin: (e, t, n, r, i, a) => H(a, z.chest, z.neck, 0.5),
        kind: V.gloss,
        rough: 0.4,
      },
    );
  }
}
function so(e, t) {
  let { b: n, m: r, lod: i } = e,
    a = n.H,
    o = n.s,
    s = t.color ?? 10688554,
    c = X(s, 0.72),
    l = 0.33 * o,
    u = 0.42 * o,
    d = 0.2 * o,
    f = 0.655 * a,
    p = q(n, f) + La(e, Math.PI, f) + d / 2 + 0.008,
    m = (e, t, n, r, i, a) =>
      H(a, z.chest, z.spine, U(f, f - u * 0.5, t) * 0.35);
  r.geo(
    za(l * 0.94, u * 0.96, d, 0.03 * o, i === 0 ? 3 : 1),
    $(0, f, p, 0.05, 0, 0),
    {
      color: (e, t, n, r, i, a) => a.setHex(Math.abs(e) > l * 0.4 ? c : s),
      skin: m,
      kind: V.gloss,
      rough: 0.32,
    },
  );
  let h = p + d / 2 + 0.006 * o;
  (r.geo(
    za(l, u * 0.86, 0.016 * o, 0.05 * o, i === 0 ? 3 : 1),
    $(0, f - u * 0.04, h, 0.05, 0, 0),
    { color: s, skin: m, kind: V.gloss, rough: 0.28 },
  ),
    r.geo(
      za(l, 0.018 * o, d + 0.02 * o, 0.008 * o, 1),
      $(0, f + u * 0.48, p + 0.006 * o, 0.05, 0, 0),
      { color: s, skin: m, kind: V.gloss, rough: 0.28 },
    ),
    r.geo(
      new Ot(0.045 * o, 0.03 * o, 0.012 * o),
      $(0, f - u * 0.36, h + 0.012 * o, 0.05, 0, 0),
      { color: 13158596, skin: m, kind: V.metal, rough: 0.25 },
    ),
    Ra(e, c, f - u * 0.32));
}
function co(e, t) {
  let { b: n, m: r, fit: i, lod: a } = e,
    o = n.H,
    s = n.s,
    c = t.color ?? 16184817,
    l = X(c, 0.92),
    u = i.bottom.waistY,
    d = i.bottom.skirt ? pa(e) : null,
    f = i.bottom.skirt
      ? Math.max(i.bottom.skirt.hemY + 0.035 * o, 0.36 * o)
      : 0.4 * o,
    p = (t, r) =>
      d && r < u
        ? d(t, r)
        : r > n.torsoBottom
          ? La(e, t, r)
          : J(n, t, n.torsoBottom + 0.01, !0),
    m = a === 0 ? 16 : 6,
    h = a === 0 ? [0, 0.08, 0.3, 0.6, 1] : [0, 0.25, 1],
    g = h.length - 1;
  r.grid(
    {
      nu: m,
      nv: g,
      closed: !1,
      point: (e, t, r) => {
        let i = -1.15 + e * 1.15 * 2,
          o = h[Math.round(t * g)],
          c = to(f, u + 0.01, o),
          l =
            o < 0.1
              ? 0.008 * s * Math.sin(e * m * Math.PI) * (a === 0) + 0.006
              : 0,
          d = p(i, c) + 0.006 + l;
        return r.set(
          Math.sin(i) * d,
          c,
          q(n, Math.max(c, n.torsoBottom)) - Math.cos(i) * d,
        );
      },
      invert: !0,
    },
    {
      color: (e, t, n, r, i, a) => a.setHex(Math.round(i * g) === 0 ? l : c),
      skin: (e, t, r, i, a, o) => {
        H(o, z.hips, z.hips, 0);
        let s = U(n.torsoBottom, f, t);
        jn(o, i < 0.5 ? z.thighL : z.thighR, 0.45 * s);
      },
      kind: V.cloth,
      rough: 0.85,
    },
  );
  let _ = u - 0.005,
    v = 0.775 * o,
    y = (e) => to(0.62, 0.44, (e - _) / (v - _));
  r.grid(
    {
      nu: a === 0 ? 6 : 2,
      nv: a === 0 ? 3 : 1,
      closed: !1,
      point: (t, r, i) => {
        let a = to(_, v, r),
          o = (t - 0.5) * 2 * y(a),
          s = La(e, o, a) + 0.005;
        return i.set(Math.sin(o) * s, a, q(n, a) - Math.cos(o) * s);
      },
      invert: !0,
    },
    {
      color: c,
      skin: (e, t, r, i, a, o) => Yr(n, (i - 0.5) * 0.9, t, o),
      kind: V.cloth,
      rough: 0.85,
    },
  );
  for (let t of [-1, 1])
    Ua(
      e,
      [
        [t * 0.42, 0.775],
        [t * 0.62, 0.81],
        [t * 1.2, 0.835],
        [t * 1.85, 0.82],
        [t * 2.45, 0.74],
        [t * 2.7, 0.62],
      ],
      0.034 * s,
      c,
    );
  let b = u - 0.01,
    x = La(e, Math.PI, b) + 0.012;
  for (let e of [-1, 1]) {
    let t = a === 0 ? new Pt(0.045 * s, 6, 4) : new Mt(0.045 * s, 0);
    r.geo(
      t,
      $(e * 0.05 * s, b + 0.01 * s, q(n, b) + x, 0, 0, e * 0.5, 1.2, 0.7, 0.35),
      { color: c, skin: z.hips, kind: V.cloth, rough: 0.85 },
    );
  }
}
function lo(e, t) {
  let { h: n, m: r, lod: i } = e,
    a = n.hh / 0.23,
    o = wa(e),
    s = t.color ?? 16316403,
    c = t.color2 ?? 1447450;
  r.grid(
    {
      nu: i === 0 ? 16 : 8,
      nv: 1,
      closed: !0,
      point: (e, t, r) =>
        G(
          n,
          -Math.PI + e * eo,
          0.24 + (t - 0.5) * 0.035 + 0.1 * Math.max(0, -Math.cos(e * eo)),
          o + 0.002,
          r,
          !1,
        ),
    },
    { color: c, skin: z.head, kind: V.satin, rough: 0.5 },
  );
  let l = i === 0 ? 18 : 6;
  r.grid(
    {
      nu: l,
      nv: 1,
      closed: !1,
      point: (e, t, r) => {
        let s = -1.25 + e * 1.25 * 2,
          c = i === 0 ? 0.004 * a * Math.sin(e * l * Math.PI) : 0;
        return G(n, s, 0.21 - t * 0.09, o + 0.004 + t * 0.016 * a + c, r, !1);
      },
      invert: !0,
    },
    { color: s, skin: z.head, kind: V.cloth, rough: 0.8 },
  );
}
function uo(e, t) {
  let { b: n, m: r, lod: i, desc: a } = e,
    o = n.H,
    s = n.s,
    c = t.color ?? 12071482,
    l = a.sex === `f`,
    u = l ? 0.595 * o : 0.545 * o,
    d = l ? 0.085 * o : 0.04 * o,
    f = i === 0 ? 18 : 8,
    p = (t, r) =>
      Math.max(ro(e, t, r), J(n, t, Math.max(r, n.torsoBottom + 0.02), !0)) +
      0.007;
  r.grid(
    {
      nu: f,
      nv: 3,
      closed: !0,
      point: (e, t, r) => {
        let i = e * eo,
          a = Math.round(t * 3),
          o = u + (a < 2 ? -0.5 : 0.5) * d,
          s = p(i, o) + (a === 0 || a === 3 ? -0.003 : 0.002);
        return r.set(Math.sin(i) * s, o, q(n, o) - Math.cos(i) * s);
      },
      invert: !0,
    },
    {
      color: (e, t, n, r, i, a) =>
        a.setHex(Math.round(i * 3) === 3 ? X(c, 0.8) : c),
      skin: (e, t, r, i, a, o) => Yr(n, i * eo, t, o),
      kind: V.satin,
      rough: 0.55,
    },
  );
  let m = q(n, u) + p(Math.PI, u) + 0.02 * s;
  l
    ? (r.geo(
        za(0.3 * s, 0.11 * s, 0.05 * s, 0.02 * s, i === 0 ? 2 : 1),
        $(0, u + 0.01 * s, m + 0.01 * s),
        { color: c, skin: z.spine, kind: V.satin, rough: 0.55 },
      ),
      r.geo(
        za(0.06 * s, 0.14 * s, 0.06 * s, 0.015 * s, 1),
        $(0, u, m + 0.035 * s),
        { color: X(c, 0.85), skin: z.spine, kind: V.satin, rough: 0.55 },
      ))
    : r.geo(za(0.09 * s, 0.05 * s, 0.03 * s, 0.01 * s, 1), $(0.03 * s, u, m), {
        color: c,
        skin: z.hips,
        kind: V.satin,
        rough: 0.55,
      });
  let h = t.color2 ?? X(a.top.color, 0.72),
    g = u + d * 0.5;
  for (let t of [1, -1]) {
    let n = t < 0 ? 0.004 : 0;
    Ua(
      e,
      [
        [t * 2.9, 0.848],
        [t * 1.7, 0.852],
        [t * 0.95, 0.83],
        [t * 0.42, 0.775],
        [t * 0.12, 0.7],
        [-t * 0.16, g / o],
      ].map(([e, t]) => [e, t]),
      (0.028 + n) * s,
      h,
    );
  }
}
function fo(e, t) {
  let { b: n, fit: r } = e,
    i = n.H,
    a = n.s,
    o = t.color ?? 1710626,
    s = r.outer,
    c = s ? s.gap : 0.16,
    l = s ? s.hemY / i : 0.45;
  for (let t of [-1, 1]) {
    let n = t * (c + 0.06);
    Ua(
      e,
      [
        [n, l + 0.004],
        [n, 0.6],
        [n * 1.05, 0.72],
        [t * (c + 0.3), 0.8],
        [t * 1, 0.84],
        [t * 1.9, 0.85],
        [t * 3.1, 0.85],
      ],
      0.05 * a,
      o,
    );
  }
  if (t.color2 !== void 0) {
    let n = r.bottom.waistY / i - 0.01,
      o = [];
    for (let e = 0; e <= 12; e++) o.push([-Math.PI + (e / 12) * eo, n]);
    Ua(e, o, 0.04 * a, t.color2);
  }
}
(Ea.set(`tie`, io),
  Ea.set(`sailorCollar`, ao),
  Ea.set(`buttons`, oo),
  Ea.set(`randoseru`, so),
  Ea.set(`maidApron`, co),
  Ea.set(`maidCap`, lo),
  Ea.set(`obi`, uo),
  Ea.set(`happiTrim`, fo));
const po = Math.PI * 2,
  mo = (e, t, n) => e + (t - e) * n;
function ho(e, t, n, r, i) {
  let a = Math.sin(e),
    o = Math.cos(e);
  ((i[0] = t * Math.sign(a) * Math.abs(a) ** (2 / r)),
    (i[1] = n * Math.sign(o) * Math.abs(o) ** (2 / r)));
}
function go(e) {
  let { b: t, m: n, lod: r } = e,
    i = e.desc.skin,
    a = t.joints.p,
    o = t.s * (t.female ? 0.93 : 1) * (t.student ? 0.95 : 1),
    s = $r(i, 16771296, 0.45),
    c = X(i, 0.94),
    l = $r(i, 15245456, 0.12),
    u = [0, 0];
  for (let e of [-1, 1]) {
    let t = e < 0 ? z.handL : z.handR,
      d = e < 0 ? z.fingersL : z.fingersR,
      f = a[t],
      p = a[d],
      m = new M().subVectors(p, f).normalize(),
      h = new M(e, 0, 0),
      g = new M().crossVectors(m, h).normalize();
    (g.z > 0 && g.negate(),
      h.crossVectors(g, m).normalize().multiplyScalar(-1),
      h.x * e < 0 && h.negate());
    let _ = f.distanceTo(p),
      v =
        r === 0
          ? [
              [-0.25, 0.025, 0.0148],
              [0.1, 0.034, 0.0138],
              [0.6, 0.042, 0.0122],
              [1, 0.04, 0.0106],
            ]
          : [
              [-0.2, 0.027, 0.021],
              [0.5, 0.042, 0.017],
              [1, 0.04, 0.015],
            ],
      y = v.length - 1,
      b = {
        color: (e, t, n, r, a, o) => {
          let s = Math.round(a * y);
          (o.setHex(s === y ? c : i),
            Math.sin(r * po) < -0.3 && o.lerp(_o.setHex(l), 0.6));
        },
        skin: (n, r, i, a, o, s) => {
          let c = Math.round(o * y);
          c === 0
            ? H(s, e < 0 ? z.foreL : z.foreR, t, 0.5)
            : H(s, t, d, c === y ? 0.2 : 0);
        },
        kind: V.skin,
        rough: 0.62,
      };
    n.grid(
      {
        nu: 6,
        nv: y,
        closed: !0,
        point: (e, t, n) => {
          let r = v[Math.round(t * y)];
          ho(e * po, r[2] * o, r[1] * o, 2.6, u);
          let i =
            u[0] < 0
              ? u[0] * (1.12 + 0.12 * Math.max(0, u[1] / (r[1] * o)))
              : u[0];
          return n
            .copy(f)
            .addScaledVector(m, r[0] * _)
            .addScaledVector(h, i)
            .addScaledVector(g, u[1]);
        },
        invert: e < 0,
      },
      b,
    );
    let x = r === 0 ? 4 : 1,
      S =
        r === 0
          ? [
              [0.74, 0.074, 0.0088, 0.3],
              [0.25, 0.082, 0.0092, 0.36],
              [-0.24, 0.077, 0.0088, 0.42],
              [-0.72, 0.061, 0.0078, 0.5],
            ]
          : [[0, 0.078, 0.034, 0.25]],
      C = r === 0 ? [0, 0.52, 1] : [0, 0.6, 1],
      w = C.length - 1,
      T = r === 0 ? 5 : 6,
      E = new M(),
      D = new M(),
      O = new M();
    for (let a = 0; a < x; a++) {
      let [c, l, f, _] = S[a],
        v = l * o,
        y = f * o,
        b = (r === 0 ? 0.0068 : 0.012) * o,
        x = 0.041 * o - y,
        k = c * 0.06,
        A = (e, t) => {
          let n = _ * 0.55,
            r = _ * 1.05,
            i = Math.min(e, 0.52),
            a = Math.max(0, e - 0.52);
          return (
            t
              .copy(p)
              .addScaledVector(g, c * x)
              .addScaledVector(m, -0.012 * o * (1 - e)),
            D.copy(m)
              .multiplyScalar(Math.cos(n))
              .addScaledVector(h, -Math.sin(n))
              .addScaledVector(g, k)
              .normalize(),
            t.addScaledVector(D, i * v),
            a > 0 &&
              (D.copy(m)
                .multiplyScalar(Math.cos(n + r))
                .addScaledVector(h, -Math.sin(n + r))
                .addScaledVector(g, k)
                .normalize(),
              t.addScaledVector(D, a * v)),
            t
          );
        };
      n.grid(
        {
          nu: T,
          nv: w,
          closed: !0,
          cap1: !0,
          point: (e, t, n) => {
            let r = Math.round(t * w),
              i = C[r];
            (A(i, E),
              A(Math.min(1, i + 0.05), O)
                .sub(E)
                .normalize(),
              i >= 1 && A(0.95, O).sub(E).negate().normalize());
            let a = vo.copy(h).addScaledVector(O, -h.dot(O)).normalize(),
              o = yo.crossVectors(O, a).normalize();
            o.dot(g) < 0 && o.negate();
            let s = e * po,
              c = i >= 1 ? 0.62 : 1 - 0.18 * i;
            return (
              ho(s, b * c, y * c, 2.8, u),
              n.copy(E).addScaledVector(a, u[0]).addScaledVector(o, u[1])
            );
          },
          invert: e < 0,
        },
        {
          color: (e, t, n, a, o, c) => {
            let l = Math.round(o * w);
            c.setHex(i);
            let u = Math.sin(a * po);
            l >= w && u > 0.3 && r === 0
              ? c.setHex(s)
              : l === 0 && c.multiplyScalar(0.96);
          },
          skin: (e, n, r, i, a, o) =>
            H(o, t, d, U(0, 0.2, C[Math.round(a * w)])),
          kind: V.skin,
          rough: 0.6,
        },
      );
    }
    if (r === 0) {
      let e = f
          .clone()
          .addScaledVector(m, 0.36 * _)
          .addScaledVector(g, 0.022 * o)
          .addScaledVector(h, -0.007 * o),
        r = m
          .clone()
          .multiplyScalar(0.84)
          .addScaledVector(g, 0.4)
          .addScaledVector(h, -0.36)
          .normalize(),
        a = new M().crossVectors(r, h).normalize(),
        c = new M().crossVectors(a, r).normalize(),
        l = 0.056 * o,
        u = [
          [-0.25, 0.0125],
          [0.45, 0.0094],
          [1, 0.0078],
        ];
      n.grid(
        {
          nu: 5,
          nv: u.length - 1,
          closed: !0,
          cap1: !0,
          point: (t, n, i) => {
            let s = u[Math.round(n * (u.length - 1))],
              d = t * po,
              f = -0.01 * o * s[0] * s[0];
            return i
              .copy(e)
              .addScaledVector(r, s[0] * l)
              .addScaledVector(a, Math.cos(d) * s[1] * o)
              .addScaledVector(c, Math.sin(d) * s[1] * 0.9 * o + f);
          },
          invert: !0,
        },
        {
          color: (e, t, n, r, a, o) =>
            o.setHex(Math.round(a * 2) === 2 && Math.sin(r * po) > 0.3 ? s : i),
          skin: t,
          kind: V.skin,
          rough: 0.6,
        },
      );
    }
  }
}
const _o = new N(),
  vo = new M(),
  yo = new M(),
  bo = {
    sneaker: {
      hc: 0.098,
      hi: 0.075,
      ht: 0.05,
      sole: 0.028,
      w: 1.02,
      toe: 1,
      gloss: !1,
      open: !1,
    },
    dress: {
      hc: 0.08,
      hi: 0.066,
      ht: 0.036,
      sole: 0.014,
      w: 0.94,
      toe: 0.7,
      gloss: !0,
      open: !1,
    },
    loafer: {
      hc: 0.074,
      hi: 0.064,
      ht: 0.036,
      sole: 0.016,
      w: 0.96,
      toe: 0.8,
      gloss: !0,
      open: !1,
    },
    flat: {
      hc: 0.05,
      hi: 0.035,
      ht: 0.028,
      sole: 0.008,
      w: 0.95,
      toe: 0.8,
      gloss: !1,
      open: !0,
    },
    heel: {
      hc: 0.055,
      hi: 0.035,
      ht: 0.026,
      sole: 0.008,
      w: 0.9,
      toe: 0.6,
      gloss: !0,
      open: !0,
    },
    boot: {
      hc: 0.1,
      hi: 0.07,
      ht: 0.04,
      sole: 0.02,
      w: 1.1,
      toe: 0.9,
      gloss: !1,
      open: !1,
    },
    rainboot: {
      hc: 0.1,
      hi: 0.075,
      ht: 0.045,
      sole: 0.018,
      w: 1.12,
      toe: 1,
      gloss: !0,
      open: !1,
    },
  };
function xo(e) {
  let t = e.desc.shoes.style;
  if (t === `slipper` || t === `sandal`) {
    for (let n of [-1, 1]) (To(e, n), Eo(e, n, t === `sandal`));
    return;
  }
  let n = bo[t] ?? bo.sneaker;
  for (let r of [-1, 1])
    (Co(e, r, n),
      (t === `boot` || t === `rainboot`) && wo(e, r, t === `rainboot`));
}
function So(e, t) {
  let n = e.b,
    r = n.joints.p[t < 0 ? z.footL : z.footR],
    i = t * 0.09;
  return {
    A: r,
    fwd: new M(Math.sin(i), 0, -Math.cos(i)),
    right: new M(Math.cos(i), 0, Math.sin(i)),
    heelZ: 0.058 * n.s,
    len: n.footLen,
  };
}
function Co(e, t, n) {
  let { b: r, m: i, lod: a, desc: o } = e,
    s = r.s * (r.female ? 0.95 : 1),
    { A: c, fwd: l, right: u, heelZ: d, len: f } = So(e, t),
    p = o.shoes.color,
    m = o.shoes.color2 ?? p,
    h =
      o.shoes.sole ??
      (n.gloss
        ? o.shoes.style === `rainboot`
          ? X(o.shoes.color, 0.8)
          : 4863014
        : 15855593),
    g =
      a === 0
        ? [0, 0.07, 0.25, 0.45, 0.65, 0.82, 0.94, 1]
        : [0, 0.2, 0.55, 0.85, 1],
    _ = g.length - 1,
    v = a === 0 ? 12 : 6,
    y = [0, 0],
    b = 0.047 * s * n.w,
    x = (e) => {
      let t = 0.62 + 0.38 * Math.sin(Math.min(1, e / 0.3) * Math.PI * 0.5),
        r =
          e > 0.75
            ? Math.max(0, 1 - (e - 0.75) / 0.25) ** (0.5 * n.toe + 0.2)
            : 1,
        i = 1 + 0.08 * Math.exp(-((e - 0.68) ** 2) / 0.02);
      return b * t * Math.max(0.12, r) * i;
    },
    S = (e) => {
      let t =
          e < 0.3
            ? n.hc
            : e < 0.62
              ? mo(n.hc, n.hi, (e - 0.3) / 0.32)
              : mo(n.hi, n.ht, (e - 0.62) / 0.38),
        r =
          e < 0.04
            ? 0.75 + 6 * e
            : e > 0.95
              ? Math.max(0.25, 1 - (e - 0.95) * 14)
              : 1;
      return t * s * r;
    },
    C = (e) => -t * 0.006 * s * Math.sin(e * Math.PI),
    w = (e, t, r) => {
      let i = g[Math.round(t * _)],
        a = e * po,
        o = x(i),
        p = S(i);
      ho(a, o, 1, 3.4, y);
      let m = 0.5 - 0.5 * y[1],
        h = m * p;
      y[0] *= 1 - 0.3 * (Math.max(0, m - 0.25) / 0.75) ** 1.6;
      let v = -d + i * f,
        b = i > 0.85 ? (i - 0.85) * 0.05 * s : 0;
      return r
        .set(c.x, 0, c.z)
        .addScaledVector(u, C(i) + y[0])
        .addScaledVector(l, v)
        .setY(h + b + (n.gloss && n.hc < 0.06 && i < 0.25 && y[1], 0));
    },
    T = o.shoes.style,
    E = gi(e, `shoe:${T}:${p}:${m}:${h}`, 256, 128, !1, pi(T, p, m, h, n.open));
  if (
    (i.grid(
      { nu: v, nv: _, closed: !0, cap0: !0, cap1: !0, point: w, invert: !0 },
      {
        tex: E
          ? {
              rect: E,
              mode: 0,
              uv: (e, t, n, r, i, a) => {
                ((a[0] = g[Math.round(i * _)]), (a[1] = 1 - r));
              },
            }
          : void 0,
        color: (e, t, r, i, c, l) => {
          let u = g[Math.round(c * _)];
          ho(i * po, 1, 1, 2.8, y);
          let d = 0.5 - 0.5 * y[1],
            f = S(u);
          (t < n.sole * s * 0.95 || (d < 0.2 && f > 0)
            ? l.setHex(h)
            : l.setHex(p),
            !n.gloss &&
              !n.open &&
              t > n.sole * s &&
              Math.abs(y[0]) > 0.7 &&
              u > 0.3 &&
              u < 0.62 &&
              d > 0.3 &&
              d < 0.62 &&
              l.setHex(m),
            !n.gloss && u < 0.12 && d > 0.45 && l.setHex(m),
            n.open && d > 0.8 && u > 0.2 && u < 0.72 && l.setHex(o.skin),
            !n.gloss &&
              !n.open &&
              d > 0.9 &&
              u > 0.36 &&
              u < 0.62 &&
              a === 0 &&
              l.setHex(X(m === p ? 16053488 : m, 1)),
            u <= 0.3 && d > 0.92 && l.multiplyScalar(0.35));
        },
        skin: (e, n, r, i, a, o) => {
          let c = g[Math.round(a * _)];
          H(
            o,
            t < 0 ? z.footL : z.footR,
            t < 0 ? z.shinL : z.shinR,
            c < 0.35 && n > 0.06 * s ? 0.35 : 0,
          );
        },
        kind: n.gloss ? V.gloss : V.cloth,
        rough: n.gloss ? 0.28 : 0.75,
      },
    ),
    o.shoes.style === `heel`)
  ) {
    let e = new Ot(0.022 * s, 0.03, 0.026 * s),
      n = new M(c.x, 0.015, c.z).addScaledVector(l, -d + 0.02 * s);
    i.geo(e, new ye().makeTranslation(n.x, n.y, n.z), {
      color: 1380882,
      skin: t < 0 ? z.footL : z.footR,
      kind: V.gloss,
      rough: 0.3,
    });
  }
}
function wo(e, t, n) {
  let { b: r, m: i, desc: a } = e,
    o = r.legs[t < 0 ? 0 : 1],
    s = n ? 1.45 : 1.55,
    c = [s, s + 0.02, 1.7, 1.85, 2],
    l = new M(),
    u = new M(),
    d = new M(),
    f = new M(),
    p = e.nL;
  i.grid(
    {
      nu: p,
      nv: c.length - 1,
      closed: !0,
      point: (e, t, r) => {
        let i = Math.round(t * (c.length - 1)),
          a = c[i],
          s = e * po,
          p = Kr(o, s, a) + (i === 0 ? 0.002 : n ? 0.016 : 0.01);
        return (
          Gr(o, a, l, u, d, f),
          r
            .copy(l)
            .addScaledVector(f, Math.sin(s) * p)
            .addScaledVector(d, Math.cos(s) * p)
        );
      },
    },
    {
      color: (e, t, n, r, i, o) =>
        o.setHex(
          Math.round(i * (c.length - 1)) <= 1
            ? X(a.shoes.color, 0.8)
            : a.shoes.color,
        ),
      skin: (e, t, n, r, i, a) => Xr(o, c[Math.round(i * (c.length - 1))], a),
      kind: n ? V.gloss : V.cloth,
      rough: n ? 0.25 : 0.7,
    },
  );
}
function To(e, t) {
  let { b: n, m: r, lod: i, desc: a } = e,
    o = n.s * (n.female ? 0.93 : 1),
    { A: s, fwd: c, right: l, heelZ: u, len: d } = So(e, t),
    f = 0.012 * o,
    p = i === 0 ? [0, 0.12, 0.35, 0.6, 0.8, 0.9, 1] : [0, 0.4, 1],
    m = p.length - 1,
    h = i === 0 ? 10 : 5,
    g = [0, 0],
    _ = $r(a.skin, 16771296, 0.4),
    v = (e) => {
      let n = (e * -t + 1) / 2;
      return 1 - 0.14 * n * n - 0.02 * n;
    };
  r.grid(
    {
      nu: h,
      nv: m,
      closed: !0,
      cap0: !0,
      cap1: !0,
      point: (e, t, n) => {
        let r = Math.round(t * m),
          a = p[r],
          h =
            0.044 *
            o *
            (0.6 + 0.4 * Math.sin(Math.min(1, a / 0.35) * Math.PI * 0.5)) *
            (a > 0.8 ? Math.max(0.55, 1 - (a - 0.8) * 1.6) : 1),
          _ =
            (a < 0.35
              ? mo(0.085, 0.062, a / 0.35)
              : a < 0.75
                ? mo(0.062, 0.028, (a - 0.35) / 0.4)
                : mo(0.028, 0.016, (a - 0.75) / 0.25)) * o;
        ho(e * po, h, 1, 2.6, g);
        let y = 0.5 - 0.5 * g[1],
          b = g[0] / h,
          x = -u + a * d * 0.98;
        a > 0.8 && i === 0 && (x = -u + d * (0.8 + (a - 0.8) * v(b)) * 0.98);
        let S =
          a > 0.82 && y > 0.5 && i === 0
            ? 0.0025 * o * Math.abs(Math.cos(b * Math.PI * 2.5)) ** 6
            : 0;
        return n
          .set(s.x, 0, s.z)
          .addScaledVector(l, g[0])
          .addScaledVector(c, x)
          .setY(f + y * _ - S);
      },
      invert: !0,
    },
    {
      color: (e, t, n, r, o, s) => {
        let c = p[Math.round(o * m)];
        (s.setHex(a.skin),
          ho(r * po, 1, 1, 2.6, g),
          c >= 0.93 && g[1] < -0.3 && i === 0 && s.setHex(_),
          0.5 - 0.5 * g[1] < 0.15 && s.multiplyScalar(0.85));
      },
      skin: t < 0 ? z.footL : z.footR,
      kind: V.skin,
      rough: 0.6,
    },
  );
}
function Eo(e, t, n) {
  let { b: r, m: i, desc: a } = e,
    o = r.s * (r.female ? 0.95 : 1),
    { A: s, fwd: c, right: l, heelZ: u, len: d } = So(e, t),
    f = t < 0 ? z.footL : z.footR,
    p = a.shoes.color2 ?? 16053492,
    m = a.shoes.color,
    h = a.shoes.sole ?? m,
    g = e.lod === 0 ? [0, 0.12, 0.45, 0.8, 1] : [0, 0.5, 1],
    _ = g.length - 1,
    v = e.lod === 0 ? 8 : 5,
    y = [0, 0],
    b = 0.014 * o;
  i.grid(
    {
      nu: v,
      nv: _,
      closed: !0,
      cap0: !0,
      cap1: !0,
      point: (e, t, n) => {
        let r = g[Math.round(t * _)],
          i =
            0.05 *
            o *
            (0.75 + 0.25 * Math.sin(Math.min(1, r / 0.4) * Math.PI * 0.5)) *
            (r > 0.85 ? Math.max(0.35, 1 - (r - 0.85) * 4) : 1) *
            (r < 0.05 ? 0.8 : 1);
        ho(e * po, i, 1, 4, y);
        let a = 0.5 - 0.5 * y[1];
        return n
          .set(s.x, 0, s.z)
          .addScaledVector(l, y[0])
          .addScaledVector(c, -u - 0.012 * o + r * (d + 0.03 * o))
          .setY(a * b);
      },
      invert: !0,
    },
    {
      color: (e, t, n, r, i, a) => a.setHex(t > b * 0.8 ? p : h),
      skin: f,
      kind: V.gloss,
      rough: 0.55,
    },
  );
  let x = n ? [0.45, 0.72] : [0.62];
  for (let t of x) {
    let r = -u + t * d,
      a = 0.052 * o,
      p = (n ? 0.03 : 0.036) * o,
      h = (n ? 0.012 : 0.05) * o,
      g = e.lod === 0 ? 6 : 3;
    (i.grid(
      {
        nu: g,
        nv: 1,
        closed: !1,
        point: (e, t, n) => {
          let i = Math.PI * e,
            o = -Math.cos(i) * a,
            u = b + Math.sin(i) * p + 0.002,
            d = r + (t - 0.5) * h;
          return n
            .set(s.x, 0, s.z)
            .addScaledVector(l, o)
            .addScaledVector(c, d)
            .setY(u);
        },
        invert: !1,
      },
      { color: m, skin: f, kind: V.gloss, rough: 0.5 },
    ),
      i.grid(
        {
          nu: g,
          nv: 1,
          closed: !1,
          point: (e, t, n) => {
            let i = Math.PI * e,
              o = -Math.cos(i) * (a - 0.003),
              u = b + Math.sin(i) * (p - 0.003) + 0.002,
              d = r + (t - 0.5) * h;
            return n
              .set(s.x, 0, s.z)
              .addScaledVector(l, o)
              .addScaledVector(c, d)
              .setY(u);
          },
          invert: !0,
        },
        { color: X(m, 0.6), skin: f, kind: V.gloss, rough: 0.5 },
      ));
  }
}
const Do = Math.PI * 2,
  Oo = (e, t, n) => e + (t - e) * n,
  ko = (e, t) => Math.exp(-(e * e) / (t * t)),
  Ao = [
    [0, 0.2],
    [0.5, 0.215],
    [0.95, 0.3],
    [1.28, 0.52],
    [1.45, 0.5],
    [1.62, 0.42],
    [1.9, 0.5],
    [2.4, 0.64],
    [Math.PI, 0.72],
  ],
  jo = [
    [0, 0.19],
    [0.55, 0.205],
    [0.95, 0.27],
    [1.28, 0.5],
    [1.45, 0.5],
    [1.62, 0.44],
    [1.9, 0.52],
    [2.4, 0.66],
    [Math.PI, 0.74],
  ],
  Mo = [
    [0, 0.19],
    [0.55, 0.205],
    [0.84, 0.27],
    [1.04, 0.47],
    [1.6, 0.52],
    [2.2, 0.55],
    [Math.PI, 0.58],
  ];
function No(e, t) {
  let n = e.length;
  if (t <= e[0][0]) return e[0][1];
  for (let r = 0; r < n - 1; r++)
    if (t <= e[r + 1][0]) {
      let n = (t - e[r][0]) / (e[r + 1][0] - e[r][0]),
        i = n * n * (3 - 2 * n);
      return Oo(e[r][1], e[r + 1][1], i);
    }
  return e[n - 1][1];
}
const Po = (e) => {
  let t = ((e % Do) + Do) % Do;
  return (t > Math.PI && (t = Do - t), t);
};
function Fo(e, t) {
  let n =
    (e, t, n = 0.32, r = 0.1) =>
    (i, a) =>
      Oo(e, t, U(n - r, n + r, a + 0.08 * (Po(i) / Math.PI)));
  switch (e) {
    case `bald`:
      return null;
    case `buzz`:
      return { hl: Ao, th: () => 0.0028, shave: 0.35 };
    case `fade`:
      return {
        hl: Ao,
        th: (e, t) =>
          n(0.014, 0.0026, 0.3, 0.14)(e, t) +
          0.006 * ko(Po(e), 0.5) * ko(t - 0.12, 0.1),
        shave: 0.45,
        tufts: `back`,
      };
    case `sidepart`:
      return {
        hl: Ao,
        th: (e, t) =>
          n(0.014, 0.006, 0.36, 0.14)(e, t) +
          0.006 * U(-0.6, 0.6, Math.sin(e)) * U(0.35, 0.1, t) +
          0.004 * ko(Po(e), 0.5) * ko(t - 0.15, 0.1),
        tufts: `side`,
      };
    case `twoblock`:
      return {
        hl: Ao,
        th: (e, t) =>
          Oo(0.015, 0.0035, U(0.28, 0.42, t) * U(0.8, 1.1, Po(e))) *
          (t > 0.3 && Po(e) < 0.95 ? 0.6 : 1),
        bangs: { d: 0.36, span: 0.95, jag: 0.03, th: 0.007, sweep: 0.03 },
        shave: 0.35,
        tufts: `front`,
      };
    case `bowl`:
      return {
        hl: [
          [0, 0.4],
          [0.9, 0.42],
          [1.35, 0.5],
          [1.62, 0.46],
          [2.2, 0.56],
          [Math.PI, 0.62],
        ],
        th: () => 0.017,
        bangs: { d: 0.4, span: 1.15, jag: 0.004, th: 0.013 },
      };
    case `spiky`:
      return { hl: Ao, th: n(0.012, 0.004, 0.32), spikes: 16, shave: 0.25 };
    case `undercut`:
      return {
        hl: Ao,
        th: (e, t) =>
          Po(e) < 1.05 && t < 0.33 + 0.1 * (1 - Po(e) / 1.05)
            ? 0.022 + 0.012 * ko(Po(e), 0.45) * ko(t - 0.12, 0.1)
            : 0.0022,
        shave: 0.6,
        tufts: `back`,
      };
    case `elder`:
      return {
        hl: [
          [0, 0.24],
          [0.5, 0.26],
          [0.95, 0.33],
          [1.28, 0.52],
          [1.62, 0.44],
          [2.4, 0.64],
          [Math.PI, 0.7],
        ],
        th: n(0.009, 0.005, 0.35),
      };
    case `balding`:
      return {
        hl: [
          [0, 0.3],
          [0.95, 0.36],
          [1.28, 0.52],
          [1.62, 0.44],
          [2.4, 0.64],
          [Math.PI, 0.7],
        ],
        th: () => 0.006,
        crown: 0.3,
        shave: 0.2,
      };
    case `perm`:
      return {
        hl: [
          [0, 0.19],
          [0.95, 0.27],
          [1.3, 0.48],
          [1.62, 0.44],
          [2.4, 0.6],
          [Math.PI, 0.66],
        ],
        th: (e, t) => 0.02 + 0.006 * U(0.1, 0.4, t),
        curls: 1,
      };
    case `bob`:
      return {
        hl: Mo,
        th: (e, t) => 0.014 + 0.005 * U(0.2, 0.45, t),
        curtain: { span0: 0.92, endY: -0.95, th: 0.014, curl: 1, part: -0.35 },
        bangs: { d: 0.3, span: 0.7, jag: 0, th: 0.01, sweep: 0.12 },
      };
    case `long`:
      return {
        hl: Mo,
        th: (e, t) => 0.011 + 0.004 * U(0.2, 0.45, t),
        curtain: { span0: 0.86, endY: 0.7, th: 0.013, part: 0 },
      };
    case `wavy`:
      return {
        hl: Mo,
        th: (e, t) => 0.013 + 0.006 * U(0.2, 0.45, t),
        curtain: { span0: 0.88, endY: 0.76, th: 0.016, wave: 1, part: -0.4 },
      };
    case `bangs`:
      return {
        hl: Mo,
        th: () => 0.012,
        bangs: { d: 0.405, span: 1.02, jag: 0.006, th: 0.009 },
        curtain: { span0: 1.02, endY: 0.795, th: 0.014, curl: 0.4 },
      };
    case `ponytail`:
      return {
        hl: jo,
        th: () => 0.0065,
        tail: `pony`,
        bangs: { d: 0.3, span: 0.72, jag: 0.022, th: 0.0055, sweep: 0.1 },
        locks: !0,
      };
    case `bun`:
      return { hl: jo, th: () => 0.007, tail: `bun`, locks: !0 };
  }
  return null;
}
function Io(e, t, n, r, i) {
  if ((G(e, t, n, 0, i, !1), r === 0)) return i;
  let a = 1 - U(0, 0.35, n),
    o = U(0.75, 1, n),
    s = Math.sin(t) * (1 - a),
    c = -Math.cos(t) * (1 - a),
    l = a - 0.3 * o,
    u = Math.hypot(s, l, c) || 1;
  return i.set(i.x + (s / u) * r, i.y + (l / u) * r, i.z + (c / u) * r);
}
const Lo = (e) => Math.sin(e * 23.1) * 0.6 + Math.sin(e * 41.7 + 1.3) * 0.4;
function Ro(e) {
  let t = e.bangs;
  return (n) => {
    let r = Po(n),
      i = No(e.hl, r) + 0.006 * Lo(n) * U(0.3, 0.9, r);
    if (t && r < t.span) {
      let e = U(t.span, t.span - 0.2, r),
        a = t.jag * Lo(n * 1.7),
        o = (t.sweep ?? 0) * Math.sin(n * 1.3);
      i = Oo(i, t.d + a + o, e);
    }
    return i;
  };
}
function zo(e, t) {
  let { desc: n, h: r, b: i, m: a, lod: o } = e,
    s = Fo(n.hair.style, i.female);
  if (!s) return;
  let c = r.hh / 0.23,
    l = n.hair.color,
    u = n.hair.color2 ?? l,
    d = X(l, 0.62),
    f = n.skin,
    p = vi(e),
    m = V.hair,
    h = 0.55,
    g = s.bangs,
    _ = Ro(s),
    v = (e) => t.d > 0 && e < t.d,
    y = s.bangs || n.hair.style === `bowl` || n.hair.style === `bob`,
    b = [
      `twoblock`,
      `sidepart`,
      `fade`,
      `undercut`,
      `spiky`,
      `bowl`,
      `elder`,
    ].includes(n.hair.style),
    x = !!s.curtain || s.tail !== void 0,
    S = (e) =>
      (s.th(0, e) +
        s.th(Math.PI / 2, e) +
        s.th(Math.PI, e) +
        s.th(-Math.PI / 2, e)) *
      0.25,
    C = (e, n) => {
      let r = (n < 0.16 ? Oo(S(n), s.th(e, n), U(0, 0.16, n)) : s.th(e, n)) * c;
      return (
        b &&
          (r *=
            1 +
            0.32 *
              Math.sin(e * 12 + 2.2 * Math.sin(n * 9)) *
              U(0.04, 0.2, n) *
              U(0.004 * c, 0.012 * c, r)),
        (!y || Po(e) > (s.bangs?.span ?? 0) + 0.1) &&
          (r *= 0.22 + 0.78 * U(_(e), _(e) - 0.16, n)),
        b && (r *= 1 - 0.45 * U(0.22, 0.42, n) * U(0.7, 1.3, Po(e))),
        g &&
          Po(e) < g.span &&
          n > 0.24 &&
          (r = Oo(r, g.th * c, U(0.24, 0.3, n))),
        s.curls &&
          (r +=
            s.curls *
            0.005 *
            c *
            (0.5 +
              0.5 * Math.sin(e * 9 + n * 21) * Math.sin(n * 27 - e * 6.5))),
        v(n) && (r *= t.squash),
        r
      );
    },
    w = s.crown ?? 0,
    T = [];
  if (s.crown) {
    let e = o === 0 ? 20 : 10;
    for (let t = 0; t <= e; t++) T.push(1 + (t / e) * (Do - 2));
  } else if (o === 0) {
    for (let e = 0; e < 5; e++) T.push(-Math.PI + (e / 5) * (Math.PI - 1.25));
    for (let e = -1.25; e < 1.249999; e += 1.25 / 7) T.push(e);
    for (let e = 0; e <= 5; e++) T.push(1.25 + (e / 5) * (Math.PI - 1.25));
  } else for (let e = 0, t = 10; e <= 10; e++) T.push(-Math.PI + (e / 10) * Do);
  let E = T.length - 1,
    D = (
      o === 0
        ? s.curls
          ? [0, 0.14, 0.3, 0.46, 0.62, 0.8, 1]
          : [0, 0.22, 0.48, 0.74, 1]
        : [0, 0.45, 1]
    ).map((e) => ({ f: e, band: -1, k: 1, cut: 0 }));
  (s.crown && o === 0 && (D[0].cut = 0.6),
    o === 0 && D.push({ f: 1, band: 0.02, k: 1, cut: 0.3 }),
    D.push({ f: 1, band: 0, k: 1, cut: o === 0 ? 0.62 : 0 }),
    D.push({ f: 1, band: 0, k: 0, cut: o === 0 ? 0.85 : 0 }));
  let O = D.length - 1,
    k = (e, t) => {
      let n = _(e);
      return t.band >= 0 ? n - t.band : Oo(w, n - (o === 0 ? 0.045 : 0), t.f);
    },
    A = x ? 9 : 12,
    j = (e, t, n, r, i, a) => {
      let o = T[Math.round(r * E)];
      ((a[0] = ((o + Math.PI) / Do) * A),
        (a[1] = k(o, D[Math.round(i * O)]) * 2.4));
    },
    M = (e, t, n, r, i) => {
      i.setHex(l);
      let a = 1.08 - 0.28 * U(0.3, 0.75, t);
      (i.multiplyScalar(a), r && i.setHex(d));
      let o =
        (s.shave
          ? Math.min(1, s.shave * 1.6) * U(0.007 * c, 0.0025 * c, n)
          : 0) + (b ? 0.25 * U(0.35, 0.55, t) * U(0.9, 1.4, Po(e)) : 0);
      return (o > 0 && i.lerp(Ho.setHex(f), o * 0.62), i);
    };
  a.grid(
    {
      nu: E,
      nv: O,
      closed: !1,
      point: (e, t, n) => {
        let i = T[Math.round(e * E)],
          a = D[Math.round(t * O)],
          o = k(i, a);
        return Io(r, i, o, a.k > 0 ? C(i, o) : 6e-4, n);
      },
    },
    {
      color: (e, t, n, r, i, a) => {
        let o = T[Math.round(r * E)],
          s = D[Math.round(i * O)],
          c = k(o, s);
        return M(o, c, C(o, c), s.k === 0, a);
      },
      skin: z.head,
      kind: m,
      rough: h,
      bump: (e, t, n, r, i) => (p ? D[Math.round(i * O)].cut : 0),
      tex: p ? { rect: p, mode: 3, uv: j } : void 0,
    },
  );
  let ee = e.trim ?? 0;
  if (
    o === 0 &&
    ee < 2 &&
    p &&
    !s.crown &&
    !v(0.2) &&
    S(0.2) * c > 0.0045 * c
  ) {
    let e = T.filter((e, t) => t % 2 == 0 || t === E),
      t = e.length - 1,
      n = [0, 0.3, 0.62, 0.9],
      i = n.length - 1,
      o = (0.0022 + 0.0014 * !!x) * c,
      s = (e, t) => Oo(0, _(e) - (x ? 0.02 : 0.055), t);
    a.grid(
      {
        nu: t,
        nv: i,
        closed: !1,
        point: (a, c, l) => {
          let u = e[Math.round(a * t)],
            d = s(u, n[Math.round(c * i)]);
          return Io(r, u, d, C(u, d) + o * (1 - 0.5 * n[Math.round(c * i)]), l);
        },
      },
      {
        color: (r, a, o, c, l, d) => {
          let f = e[Math.round(c * t)],
            p = s(f, n[Math.round(l * i)]);
          return M(f, p, C(f, p), !1, d)
            .multiplyScalar(1.06)
            .lerp(Ho.setHex(u), 0.25);
        },
        skin: z.head,
        kind: m,
        rough: h,
        bump: (e, t, n, r, a) =>
          Math.round(a * i) === i ? 0.8 : Math.round(a * i) === 0 ? 0.55 : 0.46,
        tex: {
          rect: p,
          mode: 3,
          uv: (r, a, o, c, l, u) => {
            let d = e[Math.round(c * t)];
            ((u[0] = ((d + Math.PI) / Do) * A * 1.15 + 0.37),
              (u[1] = s(d, n[Math.round(l * i)]) * 2.4 + 0.21));
          },
        },
      },
    );
  }
  (s.curtain && Wo(e, s, _, C, l, u, d, p, t),
    o === 0 &&
      !v(0.1) &&
      (s.tufts && Go(e, s.tufts, _, C, l, u, p),
      s.bangs &&
        s.bangs.jag > 0.01 &&
        Go(e, `fringe`, _, C, l, u, p, s.bangs.span),
      s.locks && Ko(e, _, C, l, u, p),
      p && (Bo(e, s, _, C, l, u, p), ee < 2 && Vo(e, s, _, C, l, u, p))),
    s.tail === `pony` && qo(e, l, u, d, p),
    s.tail === `bun` && Jo(e, l, d, p),
    s.spikes && o === 0 && Yo(e, s.spikes, C, l));
}
function Bo(e, t, n, r, i, a, o) {
  let { h: s, m: c } = e,
    l = s.hh / 0.23,
    u = (e.desc.seed * 13 + 5) >>> 0,
    d = () => (u = (u * 1664525 + 1013904223) >>> 0) / 4294967296,
    f = t.bangs && t.bangs.jag <= 0.01 ? t.bangs.span : (t.bangs, 0),
    p = t.curtain ? t.curtain.span0 : 99,
    m = [],
    h = (e.trim ?? 0) >= 3 ? 0.28 : 0.19;
  for (let e = -Math.PI + 0.08; e < Math.PI; e += h * (Po(e) > 2.2 ? 1.6 : 1)) {
    let n = Po(e);
    n < f ||
      n > p - 0.05 ||
      (t.crown !== void 0 && n < 1.05) ||
      m.push(e + (d() - 0.5) * 0.05);
  }
  let g = new M(),
    _ = new N(),
    v = new N();
  for (let t of m) {
    let u = Po(t),
      f = n(t),
      p = (u < 0.9 ? 0.06 : u < 1.7 ? 0.07 : 0.065) * (0.8 + 0.4 * d()),
      m = f - p * 0.8,
      h = f + p * 0.22,
      y = (u < 1 ? 0.06 : 0.02) * Math.sign(t) * (0.5 + d()),
      b = 0.1 + 0.05 * d();
    (_.setHex(i).multiplyScalar(0.92),
      v.setHex(i).lerp(Ho.setHex(a), 0.3).lerp(Ho.setHex(e.desc.skin), 0.12));
    let x = [0, 0.55, 1];
    c.grid(
      {
        nu: 1,
        nv: 2,
        closed: !1,
        point: (e, n, i) => {
          let a = x[Math.round(n * 2)],
            o = Oo(m, h, a),
            c = t + (e - 0.5) * b * (1 - 0.35 * a) + y * a * a,
            u = r(c, Math.min(o, f)) * (o < f ? 0.95 : 0.15),
            d = Math.max(u, 8e-4 * l) + 4e-4 * l * Math.sin(a * Math.PI);
          return (Io(s, c, Math.min(o, 0.99), d, g), i.copy(g));
        },
        invert: !1,
      },
      {
        color: (e, t, n, r, i, a) => a.copy(_).lerp(v, i),
        skin: z.head,
        kind: V.hair,
        rough: 0.55,
        bump: (e, t, n, r, i) => 0.12 + 0.72 * i * i,
        tex: {
          rect: o,
          mode: 3,
          uv: (e, n, r, i, a, o) => (
            (o[0] = i * 0.9 + t * 3.1),
            (o[1] = a * 0.5 + t)
          ),
        },
      },
    );
  }
}
function Vo(e, t, n, r, i, a, o) {
  let { h: s, m: c } = e,
    l = s.hh / 0.23,
    u = (e.desc.seed * 29 + 11) >>> 0,
    d = () => (u = (u * 1664525 + 1013904223) >>> 0) / 4294967296,
    f = t.curtain || t.tail ? 6 : 4,
    p = new M(),
    m = new M(),
    h = new M(),
    g = Uo.setHex(i).lerp(Ho.setHex(a), 0.4).getHex();
  for (let e = 0; e < f; e++) {
    let i = (d() * 2 - 1) * Math.PI,
      a = 0.05 + d() * Math.max(0.05, Math.min(0.5, n(i) - 0.12));
    if (t.crown !== void 0 && a < t.crown + 0.05) continue;
    let u = r(i, a) * 0.85;
    (Io(s, i, a, u, p), Io(s, i, a, u + 0.01, m), m.sub(p).normalize());
    let f = (0.03 + 0.03 * d()) * l,
      _ = new M(Math.cos(i), 0, Math.sin(i)),
      v = new M(0, -1, 0).addScaledVector(m, 0.9).normalize();
    c.grid(
      {
        nu: 1,
        nv: 2,
        closed: !1,
        point: (e, t, n) => {
          let r = t;
          return (
            h
              .copy(p)
              .addScaledVector(m, f * (0.35 * r + 0.25 * r * r))
              .addScaledVector(v, f * 0.8 * r * r)
              .addScaledVector(_, (e - 0.5) * 0.009 * l * (1 - 0.5 * r)),
            n.copy(h)
          );
        },
      },
      {
        color: (e, t, n, r, i, a) => a.setHex(g).multiplyScalar(0.85 + 0.2 * i),
        skin: z.head,
        kind: V.hair,
        rough: 0.55,
        bump: (e, t, n, r, i) => 0.55 + 0.3 * i,
        tex: {
          rect: o,
          mode: 3,
          uv: (t, n, r, i, a, o) => (
            (o[0] = i * 0.3 + e * 0.29),
            (o[1] = a * 0.4 + e * 0.13)
          ),
        },
      },
    );
  }
}
const Ho = new N(),
  Uo = new N();
function Wo(e, t, n, r, i, a, o, s, c) {
  let { h: l, b: u, m: d, lod: f } = e,
    p = t.curtain,
    m = l.hh / 0.23,
    h = p.span0,
    g = f === 0 ? 12 : 6,
    _ = p.endY > 0 ? p.endY * u.H : l.crownY + p.endY * l.hh,
    v = (e) => l.crownY - n(e) * l.hh,
    y = f === 0 ? 6 : 3,
    b = p.th * m,
    x = [];
  for (let e = 0; e <= g; e++) x.push(h + (e / g) * (Do - 2 * h));
  let S = (t, n) => {
      let i = (l.crownY - n) / l.hh,
        a = 0;
      return (
        i <= 1 &&
          (a = Math.max(
            a,
            Math.max(
              rr(l, t, Math.max(0, i), !1),
              i > 0.3 ? rr(l, t, Math.min(0.99, i), !0) + 0.002 * m : 0,
            ) +
              r(t, Math.min(i, 0.9)) * 0.9,
          )),
        n < u.torsoTop &&
          (a = Math.max(
            a,
            J(u, t, n, !0) +
              0.01 +
              (e.fit.top ? e.fit.top.off + 0.004 : 0) +
              (e.fit.outer ? e.fit.outer.off + 0.006 : 0),
          )),
        (a = Math.max(a, u.neckR + 0.016 * m)),
        a
      );
    },
    C = (e) => {
      let t = (l.crownY - e) / l.hh;
      return t < 0.85
        ? Kn(l, Math.max(0, t))
        : e < u.torsoTop
          ? q(u, e)
          : Oo(Kn(l, 0.85), q(u, u.torsoTop), U(0.85, 1.25, t));
    },
    w = x.map((e) => {
      let t = v(e) + 0.05 * l.hh,
        n = [],
        r = 0,
        i = t;
      for (let a = 0; a <= y; a++) {
        let o = a / y,
          s = Oo(t, _, o ** 0.9),
          c = S(e, s);
        (a > 0 && (c = Math.max(c, r - 0.28 * (i - s))),
          p.wave &&
            (c +=
              p.wave *
              0.006 *
              m *
              Math.sin((t - s) * 38 + e * 2) *
              U(0, 0.2, o)),
          p.curl && a === y && (c -= p.curl * 0.012 * m),
          (r = c),
          (i = s));
        let l =
          a === y
            ? (0.012 + 0.018 * Math.abs(Math.sin(e * 7.3 + 1.1))) *
              m *
              (p.curl ? 0.3 : 1)
            : 0;
        n.push([s - l, c]);
      }
      return n;
    }),
    T = (y + 1) * 2 - 1,
    E = (e) => (e === 0 || e === g ? 0.15 : e === 1 || e === g - 1 ? 0.7 : 1);
  d.grid(
    {
      nu: g,
      nv: T,
      closed: !1,
      point: (e, t, n) => {
        let r = Math.round(e * g),
          i = Math.round(t * T),
          a = x[r],
          o = i <= y,
          s = o ? i : T - i,
          [c, l] = w[r][s],
          u = o ? l : l - b * E(r) * (s === 0 ? 0.3 : 1),
          d = s === y && p.curl ? c + 0.01 * p.curl * m : c,
          f = C(d);
        return n.set(Math.sin(a) * u, d, f - Math.cos(a) * u);
      },
    },
    {
      color: (e, t, n, r, s, c) => {
        let l = Math.round(s * T),
          u = l <= y,
          d = (u ? l : T - l) / y;
        return (
          c.setHex(i).lerp(Ho.setHex(a), U(0.4, 1, d)),
          u
            ? c.multiplyScalar(
                1 - 0.12 * d * (1 - Math.cos(x[Math.round(r * g)])) * 0.5,
              )
            : c.setHex(o).lerp(Ho.setHex(i), 0.3 * d),
          c
        );
      },
      skin: (e, t, n, r, i, a) => {
        let o = (l.crownY - t) / l.hh;
        (H(a, z.head, z.chest, U(0.95, 1.6, o)),
          o > 1.2 && jn(a, z.spine, 0.1 * U(1.2, 2.5, o)));
      },
      kind: V.hair,
      rough: 0.55,
      bump: (e, t, n, r, i) => {
        Math.round(r * g);
        let a = Math.round(i * T),
          o = a <= y ? a : T - a;
        return o === y ? 0.56 : o === y - 1 ? 0.12 : 0;
      },
      tex: s
        ? {
            rect: s,
            mode: 3,
            uv: (e, t, n, r, i, a) => {
              ((a[0] = r * 9), (a[1] = -t * 2.6));
            },
          }
        : void 0,
    },
  );
}
function Go(e, t, n, r, i, a, o, s = 1) {
  let { h: c, m: l } = e,
    u = c.hh / 0.23,
    d = (e.desc.seed * 7 + 3) >>> 0,
    f = () => (d = (d * 1664525 + 1013904223) >>> 0) / 4294967296,
    p = Math.round(
      (t === `fringe` ? (s < 0.8 ? 6 : 9) : 11) *
        ((e.trim ?? 0) >= 2 ? 0.6 : 1),
    ),
    m = new M(),
    h = new N();
  for (let e = 0; e < p; e++) {
    let d, g, _, v, y;
    if (t === `fringe`) {
      let t = -s * 0.9 + (e / (p - 1)) * s * 1.8 + (f() - 0.5) * 0.06,
        r = n(t);
      ((d = t - 0.02),
        (g = r - 0.13),
        (_ = t + (f() - 0.5) * 0.08 + 0.03 * Math.sin(t)),
        (v = r + 0.012 + 0.02 * f()),
        (y = 0.1 + 0.05 * f()));
    } else {
      let e = (f() * 2 - 1) * 1.05,
        r = 0.04 + f() * 0.24,
        i = 0.12 + 0.08 * f();
      (t === `front`
        ? ((d = e * 0.7), (g = r), (_ = e), (v = Math.min(n(e) - 0.02, r + i)))
        : t === `back`
          ? ((d = e),
            (g = r + 0.03),
            (_ = e * 1.1),
            (v = Math.max(0, r - i * 0.9)))
          : ((d = -0.5 + (e + 1.05) * 0.4),
            (g = 0.05 + r * 0.5),
            (_ = d + i * 2.2),
            (v = g + i * 0.35)),
        (y = 0.16 + 0.08 * f()));
    }
    let b = [0, 0.5, 1],
      x = (t === `fringe` ? 0.0025 : 0.0055) * u;
    h.setHex(i).lerp(Ho.setHex(a), 0.2 + 0.3 * f());
    let S = h.getHex();
    l.grid(
      {
        nu: 2,
        nv: 2,
        closed: !1,
        point: (e, t, n) => {
          let i = b[Math.round(t * 2)],
            a = Oo(d, _, i),
            o = Oo(g, v, i),
            s = (_ - d) * 0.4,
            l = v - g,
            u = Math.hypot(s, l) || 1,
            f = -l / u / 0.4,
            p = s / u,
            h = (y * 0.5 * (1 - i) ** 0.8 + 0.004) * (e - 0.5) * 2,
            S = a + f * h * 0.4,
            C = Math.max(0, o + p * h * 0.4),
            w = +(e === 0.5);
          return (
            Io(
              c,
              S,
              C,
              r(S, Math.min(C, 0.99)) * 0.92 + x * (0.4 + w) * (1 - 0.6 * i),
              m,
            ),
            n.copy(m)
          );
        },
        invert: !1,
      },
      {
        color: (e, t, n, r, i, a) =>
          a.setHex(S).multiplyScalar(r === 0.5 ? 1.1 : 0.8 + 0.1 * i),
        skin: z.head,
        kind: V.hair,
        rough: 0.55,
        bump: (e, t, n, r, i) => (r === 0.5 ? 0.05 : 0.5) + 0.4 * i * i,
        tex: o
          ? {
              rect: o,
              mode: 3,
              uv: (t, n, r, i, a, o) => (
                (o[0] = i * 0.6 + e * 0.37),
                (o[1] = a * 0.8)
              ),
            }
          : void 0,
      },
    );
  }
}
function Ko(e, t, n, r, i, a) {
  let { h: o, m: s } = e,
    c = o.hh / 0.23,
    l = new M(),
    u = [0, 0.3, 0.6, 0.85, 1],
    d = u.length - 1;
  for (let e of [-1, 1])
    for (let f = 0; f < 1; f++) {
      let p = e * (0.98 + 0.12 * f),
        m = e * (1.12 + 0.1 * f),
        h = t(p) - 0.08,
        g = 0.78 + 0.1 * f,
        _ = 0.12 - 0.015 * f;
      for (let t of [!1, !0])
        s.grid(
          {
            nu: 2,
            nv: d,
            closed: !1,
            point: (r, i, a) => {
              let s = u[Math.round(i * d)],
                f =
                  Oo(p, m, s) +
                  e * 0.04 * Math.sin(s * Math.PI) +
                  (r - 0.5) * _ * (1 - 0.75 * s),
                v = Oo(h, g, s ** 0.9),
                y =
                  s < 0.25
                    ? n(f, Math.min(v, 0.9)) * 0.9 + 0.001
                    : 0.006 * c + 0.004 * c * Math.sin(s * Math.PI);
              return (
                Io(
                  o,
                  f,
                  Math.min(v, 0.97),
                  y + (r === 0.5 ? 0.0015 * c : 0) + (t ? -8e-4 : 0),
                  l,
                ),
                a.copy(l)
              );
            },
            invert: e > 0 ? !t : t,
          },
          {
            color: (e, n, a, o, s, c) =>
              c
                .setHex(r)
                .lerp(Ho.setHex(i), 0.3 * u[Math.round(s * d)])
                .multiplyScalar(t ? 0.6 : 1),
            skin: z.head,
            kind: V.hair,
            rough: 0.55,
            bump: (e, t, n, r, i) => (r === 0.5 ? 0.1 : 0.45) + 0.45 * i * i,
            tex: a
              ? {
                  rect: a,
                  mode: 3,
                  uv: (e, t, n, r, i, a) => (
                    (a[0] = r * 0.5 + f * 0.3),
                    (a[1] = i)
                  ),
                }
              : void 0,
          },
        );
    }
}
function qo(e, t, n, r, i) {
  let { h: a, b: o, m: s, lod: c } = e,
    l = a.hh / 0.23,
    u = Io(a, Math.PI, 0.3, 0.004 * l, new M());
  o.joints.p[z.hair].copy(u);
  let d = 0.3 * l,
    f = c === 0 ? [0, 0.03, 0.08, 0.25, 0.5, 0.75, 1] : [0, 0.1, 0.5, 1],
    p = f.length - 1,
    m = c === 0 ? 7 : 5,
    h = (e, t) =>
      t.set(
        0.008 * l * Math.sin(e * 3),
        u.y + 0.012 * l * Math.sin(e * 3) - d * e ** 1.1,
        u.z +
          0.018 * l +
          0.03 * l * Math.sin(Math.min(1, e * 1.6) * Math.PI * 0.5) -
          0.018 * l * e * e,
      ),
    g = new M(),
    _ = new M(),
    v = new M(),
    y = new M(1, 0, 0),
    b = new M(),
    x = (e) =>
      (e < 0.03
        ? 0.02
        : e < 0.08
          ? 0.016
          : 0.022 * (1 - e) +
            0.006 +
            0.012 * Math.sin(Math.min(1, e * 1.4) * Math.PI)) * l;
  s.grid(
    {
      nu: m,
      nv: p,
      closed: !0,
      cap0: !0,
      cap1: !0,
      point: (e, t, n) => {
        let r = f[Math.round(t * p)];
        (h(r, g),
          h(Math.min(1, r + 0.02), _),
          v.subVectors(_, g).normalize(),
          b.crossVectors(v, y).normalize());
        let i = e * Do,
          a = x(r);
        return n
          .copy(g)
          .addScaledVector(y, Math.cos(i) * a)
          .addScaledVector(b, Math.sin(i) * a * 0.95);
      },
    },
    {
      color: (r, i, a, o, s, c) => {
        let l = f[Math.round(s * p)];
        return l > 0.02 && l < 0.07
          ? c.setHex(e.desc.hair.color2 === void 0 ? 2763312 : 12597320)
          : c
              .setHex(t)
              .lerp(Ho.setHex(n), U(0.3, 1, l))
              .multiplyScalar(l < 0.1 ? 0.8 : 1);
      },
      skin: (e, t, n, r, i, a) =>
        H(a, z.head, z.hair, U(0.05, 0.3, f[Math.round(i * p)])),
      kind: V.hair,
      rough: 0.55,
      bump: (e, t, n, r, i) =>
        f[Math.round(i * p)] >= 1 ? 0.8 : f[Math.round(i * p)] >= 0.8 ? 0.3 : 0,
      tex: i
        ? {
            rect: i,
            mode: 3,
            uv: (e, t, n, r, i, a) => ((a[0] = r * 3), (a[1] = i * 3)),
          }
        : void 0,
    },
  );
}
function Jo(e, t, n, r) {
  let { h: i, m: a, lod: o } = e,
    s = i.hh / 0.23,
    c = Io(i, Math.PI, 0.2, 0.03 * s, new M()),
    l = new Pt(0.042 * s, o === 0 ? 10 : 6, o === 0 ? 7 : 4);
  (l.scale(1, 0.85, 0.8),
    a.geo(l, new ye().makeTranslation(c.x, c.y, c.z), {
      color: (e, n, r, i, a, o) =>
        o.setHex(t).multiplyScalar(0.85 + 0.2 * U(c.y - 0.03, c.y + 0.03, n)),
      skin: z.head,
      kind: V.hair,
      rough: 0.55,
      tex: r
        ? {
            rect: r,
            mode: 3,
            uv: (e, t, n, r, i, a) => ((a[0] = r * 4), (a[1] = i * 2)),
          }
        : void 0,
    }));
}
function Yo(e, t, n, r) {
  let { h: i, m: a } = e,
    o = i.hh / 0.23,
    s = (t) => {
      let n = Math.sin(t * 91.7 + e.desc.seed) * 43758.5453;
      return n - Math.floor(n);
    },
    c = new M(),
    l = new M(),
    u = new M(),
    d = new M(),
    f = new M();
  for (let e = 0; e < t; e++) {
    let t = (s(e) * 2 - 1) * Math.PI * 0.9,
      p = 0.04 + s(e + 50) * 0.26;
    (Io(i, t, p, n(t, p) * 0.7, c),
      Io(i, t, p, n(t, p) * 0.7 + 0.03 * o, l),
      u.subVectors(l, c).normalize(),
      l
        .copy(c)
        .addScaledVector(u, (0.022 + 0.018 * s(e + 9)) * o)
        .add(new M(0, 0.006 * o, 0.012 * o)),
      d.set(0, 1, 0).cross(u).normalize(),
      d.lengthSq() < 0.1 && d.set(1, 0, 0),
      f.crossVectors(u, d).normalize());
    let m = 0.011 * o,
      h = [0, 1, 2, 3].map((e) =>
        c
          .clone()
          .addScaledVector(d, Math.cos((e * Math.PI) / 2) * m)
          .addScaledVector(f, Math.sin((e * Math.PI) / 2) * m),
      ),
      g = [];
    for (let e = 0; e < 4; e++) {
      let t = h[e],
        n = h[(e + 1) % 4];
      g.push(t.x, t.y, t.z, n.x, n.y, n.z, l.x, l.y, l.z);
    }
    let _ = new Dt();
    (_.setAttribute(`position`, new I(g, 3)),
      a.geo(_, null, {
        color: (e, t, n, i, a, o) =>
          o.setHex(r).multiplyScalar(t > c.y + 0.01 ? 1.1 : 0.8),
        skin: z.head,
        kind: V.hair,
        rough: 0.5,
      }));
  }
}
const Xo = { x: 0, y: 0, w: 1, h: 1 };
function Zo(e) {
  let t = e.joints.p;
  for (let n of [-1, 1]) {
    let r = n < 0 ? 0 : 1,
      i = n < 0 ? z.thighL : z.thighR,
      a = n < 0 ? z.shinL : z.shinR,
      o = n < 0 ? z.footL : z.footR;
    (t[i].set(n * 0.095, 0.92, 0),
      t[a].set(n * 0.095, 0.5, -0.006),
      t[o].set(n * 0.095, 0.086, 0.012));
    let s = n < 0 ? z.armL : z.armR,
      c = n < 0 ? z.foreL : z.foreR,
      l = n < 0 ? z.handL : z.handR,
      u = n < 0 ? z.fingersL : z.fingersR;
    (t[s].set(n * 0.205, 1.4, 0),
      t[c].set(n * 0.215, 1.115, 0.012),
      t[l].set(n * 0.222, 0.865, -0.01),
      t[u]
        .copy(t[l])
        .add(new M(n * 0.004, -0.098 * (e.female ? 0.93 : 1), -0.004)));
    let d = e.arms[r],
      f = e.legs[r];
    (d.a.copy(t[s]),
      d.b.copy(t[c]),
      d.c.copy(t[l]),
      f.a.copy(t[i]),
      f.b.copy(t[a]),
      f.c.copy(t[o]));
  }
}
function Qo(e, t, n) {
  let r = { ...e, height: 1.72 },
    i = qr(r);
  Zo(i);
  let a = Bn(r, i),
    o = Mi(r, i),
    s = new On();
  ((s.blank = pn), (s.textured = n));
  let c = r.seed >>> 0 || 1,
    l = {
      desc: r,
      b: i,
      h: a,
      m: s,
      lod: t,
      atlas: null,
      page: null,
      rnd: () => ((c = (c * 1664525 + 1013904223) >>> 0), c / 4294967296),
      nT: t === 0 ? 16 : 8,
      nL: t === 0 ? 10 : 6,
      fit: o,
    };
  return (
    wr({ m: s, h: a, b: i, lod: t, skin: r.skin, faceRect: n ? Xo : null }),
    zo(l, Ca(r.acc)),
    $i(l),
    ca(l),
    go(l),
    fa(l),
    xo(l),
    Da(l),
    { m: s, b: i, h: a, desc: r }
  );
}
function $o(e) {
  let t = JSON.parse(JSON.stringify(e));
  return (
    (t.top.color = 16711680),
    (t.bottom.color = 65280),
    t.outer && (t.outer.color = 255),
    t
  );
}
const es = /* @__PURE__ */ new Float32Array(16),
  ts = new N();
function ns(e, t, n) {
  return is(rs(e, t), n);
}
function rs(e, t) {
  return { desc: e, lod: t, A: Qo(e, t, t === 0) };
}
function is(e, t) {
  let { desc: n, lod: r, A: i } = e,
    a = r === 0,
    o = i.m,
    s = o.vertexCount,
    c = null;
  t && ((c = Qo($o(n), r, !1).m), c.vertexCount !== s && (c = null));
  let l = new Float32Array(o.pos),
    u = new Float32Array(o.nor),
    d = new Float32Array(s * 3),
    f = new Float32Array(s * 4),
    p = new Float32Array(s * 4),
    m = [0, 0, 0],
    h = i.b.joints.p[z.lidL].y,
    g = i.b.joints.p[z.lidR].y;
  for (let e = 0; e < s; e++) {
    let t = e * 3,
      n = e * 4,
      r = 7,
      i = o.col[t],
      s = o.col[t + 1],
      l = o.col[t + 2];
    if (c) {
      let e = c.col[t],
        n = c.col[t + 1],
        a = c.col[t + 2];
      if (Math.abs(e - i) + Math.abs(n - s) + Math.abs(a - l) > 2e-4) {
        let t = Math.max(e, n, a);
        t > 1e-4 &&
          ((r = e >= n && e >= a ? 2 : n >= a ? 3 : 4),
          (i = s = l = Math.min(1.2, t)),
          m[r === 2 ? 0 : r === 3 ? 1 : 2]++);
      }
    }
    ((d[t] = i), (d[t + 1] = s), (d[t + 2] = l));
    let u = o.part[e],
      _ = 0;
    for (let e = 1; e < 4; e++) o.sw[n + e] > o.sw[n + _] && (_ = e);
    let v = o.si[n + _],
      y = 0,
      b = 0;
    if (v === z.lidL || v === z.lidR) y = 30 + ((v === z.lidL ? h : g) - 1);
    else if (on[v] === u) {
      es.fill(0);
      for (let e = 0; e < 4; e++) {
        let t = o.sw[n + e];
        t > 0 && (es[on[o.si[n + e]]] += t);
      }
      let e = -1,
        t = 0,
        r = -1,
        i = 0;
      for (let n = 0; n < 14; n++) {
        if (n === u) continue;
        let a = es[n];
        a > t
          ? ((r = e), (i = t), (e = n), (t = a))
          : a > i && ((r = n), (i = a));
      }
      let a = es[u];
      if (r >= 0 && i > 0.03) {
        let n = a + t + i;
        ((y = e + 1 + Math.min(0.999, t / n)),
          (b = r + 1 + Math.min(0.999, i / n)));
      } else if (e >= 0 && t > 0.02) {
        let n = Math.min(0.999, t / (a + t));
        y = e + 1 + n;
      }
    }
    ((f[n] = u), (f[n + 1] = r), (f[n + 2] = b), (f[n + 3] = o.glow[e]));
    let x = a && o.rect[n + 2] > 0;
    ((p[n] = y),
      (p[n + 1] = x ? o.uv[e * 2] : -10),
      (p[n + 2] = x ? o.uv[e * 2 + 1] : -10),
      (p[n + 3] = o.surf[n] + Math.min(0.99, Math.max(0, o.surf[n + 1]))));
  }
  if (c && !n.top.tucked) {
    let e = 9;
    for (let t = 0; t < s; t++) {
      let n = f[t * 4 + 1],
        r = f[t * 4];
      (n === 2 || n === 4) && r <= 1 && (e = Math.min(e, l[t * 3 + 1]));
    }
    if (e < 1.2)
      for (let t = 0; t < s; t++) {
        let n = t * 3,
          r = f[t * 4];
        if (f[t * 4 + 1] !== 3 || !(r <= 1 || r === 7 || r === 9)) continue;
        let i = l[n + 1];
        if (i < e - 0.015) continue;
        let a = l[n],
          o = l[n + 2],
          s = Math.sqrt(a * a + o * o);
        if (s < 0.05) continue;
        let c = Math.min(0.016, s * 0.1) * Math.min(1, (i - e + 0.015) / 0.02);
        ((l[n] -= (a / s) * c), (l[n + 2] -= (o / s) * c));
      }
  }
  if (c)
    for (let e = 0; e < s; e++) {
      let t = e * 3,
        n = f[e * 4],
        r = f[e * 4 + 1];
      if ((n !== 3 && n !== 5) || (r !== 2 && r !== 4)) continue;
      let i = l[t + 1];
      if (i < 1.35) continue;
      let a = Math.min(1, (i - 1.35) / 0.1),
        o = a * a * (3 - 2 * a);
      l[t + 1] = i - o * 0.03;
      let s = l[t];
      l[t] = s - Math.sign(s) * o * 0.018;
    }
  let _ = null;
  if (
    c &&
    (n.bottom.style === `skirt` ||
      n.bottom.style === `pencil` ||
      n.bottom.style === `longskirt`)
  ) {
    _ = new Uint8Array(s);
    for (let e = 0; e < s; e++)
      f[e * 4 + 1] === 3 &&
        Math.abs(d[e * 3] - 0.45) < 0.02 &&
        l[e * 3 + 1] < 0.95 &&
        (_[e] = 1);
  }
  let v = [],
    y = o.idx[0];
  for (let e = 0; e < y.length; e += 3) {
    let t = y[e],
      n = y[e + 1],
      r = y[e + 2];
    (_ && _[t] && _[n] && _[r]) || v.push(t, n, r);
  }
  let b = o.idx[1];
  for (let e = 0; e < b.length; e += 3) {
    let t = b[e];
    (ts.setRGB(o.col[t * 3], o.col[t * 3 + 1], o.col[t * 3 + 2]),
      ts.r * 0.3 + ts.g * 0.59 + ts.b * 0.11 < 0.12 &&
        v.push(b[e], b[e + 1], b[e + 2]));
  }
  return {
    pos: l,
    nor: u,
    col: d,
    info: f,
    ext: p,
    idx: s > 65535 ? new Uint32Array(v) : new Uint16Array(v),
    triangles: v.length / 3,
    recolour: m,
  };
}
const as = (e, t = []) => self.postMessage(e, t);
self.onmessage = (e) => {
  let { id: t, desc: n, lod: r, recolour: i } = e.data;
  try {
    let e = performance.now(),
      a = ns(n, r, i);
    as({ id: t, data: a, ms: performance.now() - e }, [
      a.pos.buffer,
      a.nor.buffer,
      a.col.buffer,
      a.info.buffer,
      a.ext.buffer,
      a.idx.buffer,
    ]);
  } catch (e) {
    as({ id: t, error: String(e?.stack ?? e) });
  }
};
