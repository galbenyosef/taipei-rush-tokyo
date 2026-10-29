// tokyo/assets/bodyWorker-Bk4d3Tu3 17 — head
// Lines 6825-7029 of readable/tokyo/assets/bodyWorker-Bk4d3Tu3.pretty.js (statement-aligned).
((z.Composite = tn),
  (z.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3,
  }),
  (z.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2,
  }),
  (z.prototype.GetterByBindingType = [
    z.prototype._getValue_direct,
    z.prototype._getValue_array,
    z.prototype._getValue_arrayElement,
    z.prototype._getValue_toArray,
  ]),
  (z.prototype.SetterByBindingTypeAndVersioning = [
    [
      z.prototype._setValue_direct,
      z.prototype._setValue_direct_setNeedsUpdate,
      z.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
    ],
    [
      z.prototype._setValue_array,
      z.prototype._setValue_array_setNeedsUpdate,
      z.prototype._setValue_array_setMatrixWorldNeedsUpdate,
    ],
    [
      z.prototype._setValue_arrayElement,
      z.prototype._setValue_arrayElement_setNeedsUpdate,
      z.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
    ],
    [
      z.prototype._setValue_fromArray,
      z.prototype._setValue_fromArray_setNeedsUpdate,
      z.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
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
const B = {
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
(Object.keys(B).sort((e, t) => B[e] - B[t]),
  B.hips,
  B.spine,
  B.chest,
  B.neck,
  B.shoulderL,
  B.armL,
  B.foreL,
  B.shoulderR,
  B.armR,
  B.foreR,
  B.hips,
  B.thighL,
  B.shinL,
  B.hips,
  B.thighR,
  B.shinR,
  B.chest,
  B.chest,
  B.handL,
  B.handR,
  B.head,
  B.head,
  B.head,
  B.head,
  B.head,
  B.head);
const V = {
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
  nn = [
    V.pelvis,
    V.torso,
    V.torso,
    V.head,
    V.head,
    V.lUpper,
    V.lFore,
    V.lFore,
    V.rUpper,
    V.rFore,
    V.rFore,
    V.lThigh,
    V.lShin,
    V.lShin,
    V.rThigh,
    V.rShin,
    V.rShin,
    V.torso,
    V.torso,
    V.lFore,
    V.rFore,
    V.head,
    V.head,
    V.head,
    V.head,
    V.head,
    V.head,
  ],
  H = {
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
  rn = new N(),
  an = new M(),
  on = new M(),
  sn = new ne(),
  cn = [0, 0],
  ln = { i: [0, 0, 0, 0], w: [1, 0, 0, 0] },
  un = { x: 0, y: 0, w: 0, h: 0 };
let dn = /* @__PURE__ */ new Float64Array(3072),
  fn = /* @__PURE__ */ new Float64Array(64),
  pn = /* @__PURE__ */ new Float64Array(64),
  mn = /* @__PURE__ */ new Int32Array(6144),
  hn = /* @__PURE__ */ new Float64Array(3072),
  gn = /* @__PURE__ */ new Int32Array(1024),
  _n = /* @__PURE__ */ new Int32Array(3072),
  vn = /* @__PURE__ */ new Int32Array(2048);
function yn(e, t) {
  return e.length >= t ? e : new Float64Array(Math.max(t, e.length * 2));
}
function bn(e, t) {
  return e.length >= t ? e : new Int32Array(Math.max(t, e.length * 2));
}
let xn = -1,
  Sn = 0,
  Cn = 0,
  wn = 0;
