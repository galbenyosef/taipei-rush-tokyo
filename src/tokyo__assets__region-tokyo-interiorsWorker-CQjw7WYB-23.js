// tokyo__assets__region-tokyo-interiorsWorker-CQjw7WYB 23 — elements
// Lines 8758-8829 of readable/tokyo__assets__region-tokyo-interiorsWorker-CQjw7WYB.pretty.js (statement-aligned).
((xr.Composite = br),
  (xr.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3,
  }),
  (xr.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2,
  }),
  (xr.prototype.GetterByBindingType = [
    xr.prototype._getValue_direct,
    xr.prototype._getValue_array,
    xr.prototype._getValue_arrayElement,
    xr.prototype._getValue_toArray,
  ]),
  (xr.prototype.SetterByBindingTypeAndVersioning = [
    [
      xr.prototype._setValue_direct,
      xr.prototype._setValue_direct_setNeedsUpdate,
      xr.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
    ],
    [
      xr.prototype._setValue_array,
      xr.prototype._setValue_array_setNeedsUpdate,
      xr.prototype._setValue_array_setMatrixWorldNeedsUpdate,
    ],
    [
      xr.prototype._setValue_arrayElement,
      xr.prototype._setValue_arrayElement_setNeedsUpdate,
      xr.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
    ],
    [
      xr.prototype._setValue_fromArray,
      xr.prototype._setValue_fromArray_setNeedsUpdate,
      xr.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
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
