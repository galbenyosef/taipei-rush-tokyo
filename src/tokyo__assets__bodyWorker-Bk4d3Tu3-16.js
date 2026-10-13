// tokyo__assets__bodyWorker-Bk4d3Tu3 16 — resolvedproperty
// Lines 6496-6824 of readable/tokyo__assets__bodyWorker-Bk4d3Tu3.pretty.js (statement-aligned).
var tn = class {
    constructor(e, t, n) {
      let r = n || z.parseTrackName(t);
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
  z = class e {
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
      return e.replace(/\s/g, `_`).replace(Qt, ``);
    }
    static parseTrackName(e) {
      let t = $t.exec(e);
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
        en.indexOf(e) !== -1 &&
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
