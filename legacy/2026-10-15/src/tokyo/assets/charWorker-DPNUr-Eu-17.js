// tokyo/assets/charWorker-DPNUr-Eu 17 — head
// Lines 6825-7060 of readable/tokyo/assets/charWorker-DPNUr-Eu.pretty.js (statement-aligned).
((L.Composite = rn),
  (L.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3,
  }),
  (L.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2,
  }),
  (L.prototype.GetterByBindingType = [
    L.prototype._getValue_direct,
    L.prototype._getValue_array,
    L.prototype._getValue_arrayElement,
    L.prototype._getValue_toArray,
  ]),
  (L.prototype.SetterByBindingTypeAndVersioning = [
    [
      L.prototype._setValue_direct,
      L.prototype._setValue_direct_setNeedsUpdate,
      L.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
    ],
    [
      L.prototype._setValue_array,
      L.prototype._setValue_array_setNeedsUpdate,
      L.prototype._setValue_array_setMatrixWorldNeedsUpdate,
    ],
    [
      L.prototype._setValue_arrayElement,
      L.prototype._setValue_arrayElement_setNeedsUpdate,
      L.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
    ],
    [
      L.prototype._setValue_fromArray,
      L.prototype._setValue_fromArray_setNeedsUpdate,
      L.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
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
const R = {
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
(Object.keys(R).sort((e, t) => R[e] - R[t]),
  R.hips,
  R.spine,
  R.chest,
  R.neck,
  R.shoulderL,
  R.armL,
  R.foreL,
  R.shoulderR,
  R.armR,
  R.foreR,
  R.hips,
  R.thighL,
  R.shinL,
  R.hips,
  R.thighR,
  R.shinR,
  R.chest,
  R.chest,
  R.handL,
  R.handR,
  R.head,
  R.head,
  R.head,
  R.head,
  R.head,
  R.head);
const z = {
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
  an = [
    z.pelvis,
    z.torso,
    z.torso,
    z.head,
    z.head,
    z.lUpper,
    z.lFore,
    z.lFore,
    z.rUpper,
    z.rFore,
    z.rFore,
    z.lThigh,
    z.lShin,
    z.lShin,
    z.rThigh,
    z.rShin,
    z.rShin,
    z.torso,
    z.torso,
    z.lFore,
    z.rFore,
    z.head,
    z.head,
    z.head,
    z.head,
    z.head,
    z.head,
  ],
  B = {
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
  on = new Ze(),
  sn = new M(),
  cn = new M(),
  ln = new ne(),
  un = [0, 0],
  dn = { i: [0, 0, 0, 0], w: [1, 0, 0, 0] },
  fn = { x: 0, y: 0, w: 0, h: 0 };
let pn = /* @__PURE__ */ new Float64Array(3072),
  mn = /* @__PURE__ */ new Float64Array(64),
  hn = /* @__PURE__ */ new Float64Array(64),
  gn = /* @__PURE__ */ new Int32Array(6144),
  _n = /* @__PURE__ */ new Float64Array(3072),
  vn = /* @__PURE__ */ new Int32Array(1024),
  yn = /* @__PURE__ */ new Int32Array(3072),
  bn = /* @__PURE__ */ new Int32Array(2048);
function xn(e, t) {
  return e.length >= t ? e : new Float64Array(Math.max(t, e.length * 2));
}
function Sn(e, t) {
  return e.length >= t ? e : new Int32Array(Math.max(t, e.length * 2));
}
let Cn = -1,
  wn = 0,
  Tn = 0,
  En = 0;
function Dn(e) {
  let t = 1 / 0,
    n = 1 / 0,
    r = 1 / 0,
    i = -1 / 0,
    a = -1 / 0,
    o = -1 / 0;
  for (let s = 0; s < e.length; s += 3) {
    let c = e[s],
      l = e[s + 1],
      u = e[s + 2];
    (c < t && (t = c),
      l < n && (n = l),
      u < r && (r = u),
      c > i && (i = c),
      l > a && (a = l),
      u > o && (o = u));
  }
  let s = (t + i) / 2,
    c = (n + a) / 2,
    l = (r + o) / 2,
    u = 0;
  for (let t = 0; t < e.length; t += 3) {
    let n = e[t] - s,
      r = e[t + 1] - c,
      i = e[t + 2] - l,
      a = n * n + r * r + i * i;
    a > u && (u = a);
  }
  return new Float32Array([s, c, l, Math.sqrt(u), t, n, r, i, a, o]);
}
