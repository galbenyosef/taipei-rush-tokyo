// tokyo/assets/peopleWorker-Cn7UVw8F 23 — elements
// Lines 8616-8687 of readable/tokyo/assets/peopleWorker-Cn7UVw8F.pretty.js (statement-aligned).
((yr.Composite = vr),
  (yr.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3,
  }),
  (yr.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2,
  }),
  (yr.prototype.GetterByBindingType = [
    yr.prototype._getValue_direct,
    yr.prototype._getValue_array,
    yr.prototype._getValue_arrayElement,
    yr.prototype._getValue_toArray,
  ]),
  (yr.prototype.SetterByBindingTypeAndVersioning = [
    [
      yr.prototype._setValue_direct,
      yr.prototype._setValue_direct_setNeedsUpdate,
      yr.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
    ],
    [
      yr.prototype._setValue_array,
      yr.prototype._setValue_array_setNeedsUpdate,
      yr.prototype._setValue_array_setMatrixWorldNeedsUpdate,
    ],
    [
      yr.prototype._setValue_arrayElement,
      yr.prototype._setValue_arrayElement_setNeedsUpdate,
      yr.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
    ],
    [
      yr.prototype._setValue_fromArray,
      yr.prototype._setValue_fromArray_setNeedsUpdate,
      yr.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
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
      ? T(`WARNING: Multiple instances of Three.js being imported.`)
      : (window.__THREE__ = `186`)));
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
