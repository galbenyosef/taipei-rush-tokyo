// tokyo__assets__region-tokyo-bodyWorker-CtngWad2 08 — children
// Lines 3376-3872 of readable/tokyo__assets__region-tokyo-bodyWorker-CtngWad2.pretty.js (statement-aligned).
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
