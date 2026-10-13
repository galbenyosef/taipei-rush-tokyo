// tokyo__assets__region-tokyo-bodyWorker-CtngWad2 17 — head
// Lines 6967-7171 of readable/tokyo__assets__region-tokyo-bodyWorker-CtngWad2.pretty.js (statement-aligned).
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
