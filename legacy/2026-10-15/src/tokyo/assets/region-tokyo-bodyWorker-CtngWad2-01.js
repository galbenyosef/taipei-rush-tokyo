// tokyo/assets/region-tokyo-bodyWorker-CtngWad2 01 — math
// Lines 1-174 of readable/tokyo/assets/region-tokyo-bodyWorker-CtngWad2.pretty.js (statement-aligned).
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
