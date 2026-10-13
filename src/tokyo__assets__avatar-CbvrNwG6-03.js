// tokyo__assets__avatar-CbvrNwG6 03 — parser
// Lines 402-1261 of readable/tokyo__assets__avatar-CbvrNwG6.pretty.js (statement-aligned).
var L = {
    KHR_BINARY_GLTF: `KHR_binary_glTF`,
    KHR_DRACO_MESH_COMPRESSION: `KHR_draco_mesh_compression`,
    KHR_LIGHTS_PUNCTUAL: `KHR_lights_punctual`,
    KHR_MATERIALS_CLEARCOAT: `KHR_materials_clearcoat`,
    KHR_MATERIALS_DISPERSION: `KHR_materials_dispersion`,
    KHR_MATERIALS_IOR: `KHR_materials_ior`,
    KHR_MATERIALS_SHEEN: `KHR_materials_sheen`,
    KHR_MATERIALS_SPECULAR: `KHR_materials_specular`,
    KHR_MATERIALS_TRANSMISSION: `KHR_materials_transmission`,
    KHR_MATERIALS_IRIDESCENCE: `KHR_materials_iridescence`,
    KHR_MATERIALS_ANISOTROPY: `KHR_materials_anisotropy`,
    KHR_MATERIALS_UNLIT: `KHR_materials_unlit`,
    KHR_MATERIALS_VOLUME: `KHR_materials_volume`,
    KHR_TEXTURE_BASISU: `KHR_texture_basisu`,
    KHR_TEXTURE_TRANSFORM: `KHR_texture_transform`,
    KHR_MESH_QUANTIZATION: `KHR_mesh_quantization`,
    KHR_MATERIALS_EMISSIVE_STRENGTH: `KHR_materials_emissive_strength`,
    EXT_MATERIALS_BUMP: `EXT_materials_bump`,
    EXT_TEXTURE_WEBP: `EXT_texture_webp`,
    EXT_TEXTURE_AVIF: `EXT_texture_avif`,
    EXT_MESHOPT_COMPRESSION: `EXT_meshopt_compression`,
    KHR_MESHOPT_COMPRESSION: `KHR_meshopt_compression`,
    EXT_MESH_GPU_INSTANCING: `EXT_mesh_gpu_instancing`,
  },
  xt = class {
    constructor(e) {
      ((this.parser = e),
        (this.name = L.KHR_LIGHTS_PUNCTUAL),
        (this.cache = { refs: {}, uses: {} }));
    }
    _markDefs() {
      let e = this.parser,
        t = this.parser.json.nodes || [];
      for (let n = 0, r = t.length; n < r; n++) {
        let r = t[n];
        r.extensions &&
          r.extensions[this.name] &&
          r.extensions[this.name].light !== void 0 &&
          e._addNodeRef(this.cache, r.extensions[this.name].light);
      }
    }
    _loadLight(e) {
      let t = this.parser,
        n = `light:` + e,
        r = t.cache.get(n);
      if (r) return r;
      let i = t.json,
        a = (((i.extensions && i.extensions[this.name]) || {}).lights || [])[e],
        o,
        s = new N(16777215);
      a.color !== void 0 && s.setRGB(a.color[0], a.color[1], a.color[2], O);
      let l = a.range === void 0 ? 0 : a.range;
      switch (a.type) {
        case `directional`:
          ((o = new f(s)), o.target.position.set(0, 0, -1), o.add(o.target));
          break;
        case `point`:
          ((o = new d(s)), (o.distance = l));
          break;
        case `spot`:
          ((o = new c(s)),
            (o.distance = l),
            (a.spot = a.spot || {}),
            (a.spot.innerConeAngle =
              a.spot.innerConeAngle === void 0 ? 0 : a.spot.innerConeAngle),
            (a.spot.outerConeAngle =
              a.spot.outerConeAngle === void 0
                ? Math.PI / 4
                : a.spot.outerConeAngle),
            (o.angle = a.spot.outerConeAngle),
            (o.penumbra = 1 - a.spot.innerConeAngle / a.spot.outerConeAngle),
            o.target.position.set(0, 0, -1),
            o.add(o.target));
          break;
        default:
          throw Error(`THREE.GLTFLoader: Unexpected light type: ` + a.type);
      }
      return (
        o.position.set(0, 0, 0),
        U(o, a),
        a.intensity !== void 0 && (o.intensity = a.intensity),
        (o.name = t.createUniqueName(a.name || `light_` + e)),
        (r = Promise.resolve(o)),
        t.cache.add(n, r),
        r
      );
    }
    getDependency(e, t) {
      if (e === `light`) return this._loadLight(t);
    }
    createNodeAttachment(e) {
      let t = this,
        n = this.parser,
        r = n.json.nodes[e],
        i = ((r.extensions && r.extensions[this.name]) || {}).light;
      return i === void 0
        ? null
        : this._loadLight(i).then(function (e) {
            return n._getNodeRef(t.cache, i, e);
          });
    }
  },
  St = class {
    constructor() {
      this.name = L.KHR_MATERIALS_UNLIT;
    }
    getMaterialType() {
      return s;
    }
    extendParams(e, t, n) {
      let r = [];
      ((e.color = new N(1, 1, 1)), (e.opacity = 1));
      let i = t.pbrMetallicRoughness;
      if (i) {
        if (Array.isArray(i.baseColorFactor)) {
          let t = i.baseColorFactor;
          (e.color.setRGB(t[0], t[1], t[2], O), (e.opacity = t[3]));
        }
        i.baseColorTexture !== void 0 &&
          r.push(n.assignTexture(e, `map`, i.baseColorTexture, w));
      }
      return Promise.all(r);
    }
  },
  Ct = class {
    constructor(e) {
      ((this.parser = e), (this.name = L.KHR_MATERIALS_EMISSIVE_STRENGTH));
    }
    extendMaterialParams(e, t) {
      let n = I(this.parser, e, this.name);
      return (
        n === null ||
          (n.emissiveStrength !== void 0 &&
            (t.emissiveIntensity = n.emissiveStrength)),
        Promise.resolve()
      );
    }
  },
  wt = class {
    constructor(e) {
      ((this.parser = e), (this.name = L.KHR_MATERIALS_CLEARCOAT));
    }
    getMaterialType(e) {
      return I(this.parser, e, this.name) === null ? null : r;
    }
    extendMaterialParams(e, t) {
      let n = I(this.parser, e, this.name);
      if (n === null) return Promise.resolve();
      let r = [];
      if (
        (n.clearcoatFactor !== void 0 && (t.clearcoat = n.clearcoatFactor),
        n.clearcoatTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(t, `clearcoatMap`, n.clearcoatTexture),
          ),
        n.clearcoatRoughnessFactor !== void 0 &&
          (t.clearcoatRoughness = n.clearcoatRoughnessFactor),
        n.clearcoatRoughnessTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(
              t,
              `clearcoatRoughnessMap`,
              n.clearcoatRoughnessTexture,
            ),
          ),
        n.clearcoatNormalTexture !== void 0 &&
          (r.push(
            this.parser.assignTexture(
              t,
              `clearcoatNormalMap`,
              n.clearcoatNormalTexture,
            ),
          ),
          n.clearcoatNormalTexture.scale !== void 0))
      ) {
        let e = n.clearcoatNormalTexture.scale;
        t.clearcoatNormalScale = new Se(e, e);
      }
      return Promise.all(r);
    }
  },
  Tt = class {
    constructor(e) {
      ((this.parser = e), (this.name = L.KHR_MATERIALS_DISPERSION));
    }
    getMaterialType(e) {
      return I(this.parser, e, this.name) === null ? null : r;
    }
    extendMaterialParams(e, t) {
      let n = I(this.parser, e, this.name);
      return (
        n === null ||
          (t.dispersion = n.dispersion === void 0 ? 0 : n.dispersion),
        Promise.resolve()
      );
    }
  },
  Et = class {
    constructor(e) {
      ((this.parser = e), (this.name = L.KHR_MATERIALS_IRIDESCENCE));
    }
    getMaterialType(e) {
      return I(this.parser, e, this.name) === null ? null : r;
    }
    extendMaterialParams(e, t) {
      let n = I(this.parser, e, this.name);
      if (n === null) return Promise.resolve();
      let r = [];
      return (
        n.iridescenceFactor !== void 0 && (t.iridescence = n.iridescenceFactor),
        n.iridescenceTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(
              t,
              `iridescenceMap`,
              n.iridescenceTexture,
            ),
          ),
        n.iridescenceIor !== void 0 && (t.iridescenceIOR = n.iridescenceIor),
        t.iridescenceThicknessRange === void 0 &&
          (t.iridescenceThicknessRange = [100, 400]),
        n.iridescenceThicknessMinimum !== void 0 &&
          (t.iridescenceThicknessRange[0] = n.iridescenceThicknessMinimum),
        n.iridescenceThicknessMaximum !== void 0 &&
          (t.iridescenceThicknessRange[1] = n.iridescenceThicknessMaximum),
        n.iridescenceThicknessTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(
              t,
              `iridescenceThicknessMap`,
              n.iridescenceThicknessTexture,
            ),
          ),
        Promise.all(r)
      );
    }
  },
  Dt = class {
    constructor(e) {
      ((this.parser = e), (this.name = L.KHR_MATERIALS_SHEEN));
    }
    getMaterialType(e) {
      return I(this.parser, e, this.name) === null ? null : r;
    }
    extendMaterialParams(e, t) {
      let n = I(this.parser, e, this.name);
      if (n === null) return Promise.resolve();
      let r = [];
      if (
        ((t.sheenColor = new N(0, 0, 0)),
        (t.sheenRoughness = 0),
        (t.sheen = 1),
        n.sheenColorFactor !== void 0)
      ) {
        let e = n.sheenColorFactor;
        t.sheenColor.setRGB(e[0], e[1], e[2], O);
      }
      return (
        n.sheenRoughnessFactor !== void 0 &&
          (t.sheenRoughness = n.sheenRoughnessFactor),
        n.sheenColorTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(
              t,
              `sheenColorMap`,
              n.sheenColorTexture,
              w,
            ),
          ),
        n.sheenRoughnessTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(
              t,
              `sheenRoughnessMap`,
              n.sheenRoughnessTexture,
            ),
          ),
        Promise.all(r)
      );
    }
  },
  Ot = class {
    constructor(e) {
      ((this.parser = e), (this.name = L.KHR_MATERIALS_TRANSMISSION));
    }
    getMaterialType(e) {
      return I(this.parser, e, this.name) === null ? null : r;
    }
    extendMaterialParams(e, t) {
      let n = I(this.parser, e, this.name);
      if (n === null) return Promise.resolve();
      let r = [];
      return (
        n.transmissionFactor !== void 0 &&
          (t.transmission = n.transmissionFactor),
        n.transmissionTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(
              t,
              `transmissionMap`,
              n.transmissionTexture,
            ),
          ),
        Promise.all(r)
      );
    }
  },
  kt = class {
    constructor(e) {
      ((this.parser = e), (this.name = L.KHR_MATERIALS_VOLUME));
    }
    getMaterialType(e) {
      return I(this.parser, e, this.name) === null ? null : r;
    }
    extendMaterialParams(e, t) {
      let n = I(this.parser, e, this.name);
      if (n === null) return Promise.resolve();
      let r = [];
      ((t.thickness = n.thicknessFactor === void 0 ? 0 : n.thicknessFactor),
        n.thicknessTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(t, `thicknessMap`, n.thicknessTexture),
          ),
        (t.attenuationDistance = n.attenuationDistance || 1 / 0));
      let i = n.attenuationColor || [1, 1, 1];
      return (
        (t.attenuationColor = new N().setRGB(i[0], i[1], i[2], O)),
        Promise.all(r)
      );
    }
  },
  At = class {
    constructor(e) {
      ((this.parser = e), (this.name = L.KHR_MATERIALS_IOR));
    }
    getMaterialType(e) {
      return I(this.parser, e, this.name) === null ? null : r;
    }
    extendMaterialParams(e, t) {
      let n = I(this.parser, e, this.name);
      return n === null
        ? Promise.resolve()
        : ((t.ior = n.ior === void 0 ? 1.5 : n.ior),
          t.ior === 0 && (t.ior = 1e3),
          Promise.resolve());
    }
  },
  jt = class {
    constructor(e) {
      ((this.parser = e), (this.name = L.KHR_MATERIALS_SPECULAR));
    }
    getMaterialType(e) {
      return I(this.parser, e, this.name) === null ? null : r;
    }
    extendMaterialParams(e, t) {
      let n = I(this.parser, e, this.name);
      if (n === null) return Promise.resolve();
      let r = [];
      ((t.specularIntensity =
        n.specularFactor === void 0 ? 1 : n.specularFactor),
        n.specularTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(
              t,
              `specularIntensityMap`,
              n.specularTexture,
            ),
          ));
      let i = n.specularColorFactor || [1, 1, 1];
      return (
        (t.specularColor = new N().setRGB(i[0], i[1], i[2], O)),
        n.specularColorTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(
              t,
              `specularColorMap`,
              n.specularColorTexture,
              w,
            ),
          ),
        Promise.all(r)
      );
    }
  },
  Mt = class {
    constructor(e) {
      ((this.parser = e), (this.name = L.EXT_MATERIALS_BUMP));
    }
    getMaterialType(e) {
      return I(this.parser, e, this.name) === null ? null : r;
    }
    extendMaterialParams(e, t) {
      let n = I(this.parser, e, this.name);
      if (n === null) return Promise.resolve();
      let r = [];
      return (
        (t.bumpScale = n.bumpFactor === void 0 ? 1 : n.bumpFactor),
        n.bumpTexture !== void 0 &&
          r.push(this.parser.assignTexture(t, `bumpMap`, n.bumpTexture)),
        Promise.all(r)
      );
    }
  },
  Nt = class {
    constructor(e) {
      ((this.parser = e), (this.name = L.KHR_MATERIALS_ANISOTROPY));
    }
    getMaterialType(e) {
      return I(this.parser, e, this.name) === null ? null : r;
    }
    extendMaterialParams(e, t) {
      let n = I(this.parser, e, this.name);
      if (n === null) return Promise.resolve();
      let r = [];
      return (
        n.anisotropyStrength !== void 0 &&
          (t.anisotropy = n.anisotropyStrength),
        n.anisotropyRotation !== void 0 &&
          (t.anisotropyRotation = n.anisotropyRotation),
        n.anisotropyTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(t, `anisotropyMap`, n.anisotropyTexture),
          ),
        Promise.all(r)
      );
    }
  },
  Pt = class {
    constructor(e) {
      ((this.parser = e), (this.name = L.KHR_TEXTURE_BASISU));
    }
    loadTexture(e) {
      let t = this.parser,
        n = t.json,
        r = n.textures[e];
      if (!r.extensions || !r.extensions[this.name]) return null;
      let i = r.extensions[this.name],
        a = t.options.ktx2Loader;
      if (!a) {
        if (
          n.extensionsRequired &&
          n.extensionsRequired.indexOf(this.name) >= 0
        )
          throw Error(
            `THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`,
          );
        return null;
      }
      return t.loadTextureImage(e, i.source, a);
    }
  },
  Ft = class {
    constructor(e) {
      ((this.parser = e), (this.name = L.EXT_TEXTURE_WEBP));
    }
    loadTexture(e) {
      let t = this.name,
        n = this.parser,
        r = n.json,
        i = r.textures[e];
      if (!i.extensions || !i.extensions[t]) return null;
      let a = i.extensions[t],
        o = r.images[a.source],
        s = n.textureLoader;
      if (o.uri) {
        let e = n.options.manager.getHandler(o.uri);
        e !== null && (s = e);
      }
      return n.loadTextureImage(e, a.source, s);
    }
  },
  It = class {
    constructor(e) {
      ((this.parser = e), (this.name = L.EXT_TEXTURE_AVIF));
    }
    loadTexture(e) {
      let t = this.name,
        n = this.parser,
        r = n.json,
        i = r.textures[e];
      if (!i.extensions || !i.extensions[t]) return null;
      let a = i.extensions[t],
        o = r.images[a.source],
        s = n.textureLoader;
      if (o.uri) {
        let e = n.options.manager.getHandler(o.uri);
        e !== null && (s = e);
      }
      return n.loadTextureImage(e, a.source, s);
    }
  },
  Lt = class {
    constructor(e, t) {
      ((this.name = t), (this.parser = e));
    }
    loadBufferView(e) {
      let t = this.parser.json,
        n = t.bufferViews[e];
      if (n.extensions && n.extensions[this.name]) {
        let e = n.extensions[this.name],
          r = this.parser.getDependency(`buffer`, e.buffer),
          i = this.parser.options.meshoptDecoder;
        if (!i || !i.supported) {
          if (
            t.extensionsRequired &&
            t.extensionsRequired.indexOf(this.name) >= 0
          )
            throw Error(
              `THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`,
            );
          return null;
        }
        return r.then(function (t) {
          let n = e.byteOffset || 0,
            r = e.byteLength || 0,
            a = e.count,
            o = e.byteStride,
            s = new Uint8Array(t, n, r);
          return i.decodeGltfBufferAsync
            ? i
                .decodeGltfBufferAsync(a, o, s, e.mode, e.filter)
                .then(function (e) {
                  return e.buffer;
                })
            : i.ready.then(function () {
                let t = new ArrayBuffer(a * o);
                return (
                  i.decodeGltfBuffer(
                    new Uint8Array(t),
                    a,
                    o,
                    s,
                    e.mode,
                    e.filter,
                  ),
                  t
                );
              });
        });
      }
      return null;
    }
  },
  Rt = class {
    constructor(e) {
      ((this.name = L.EXT_MESH_GPU_INSTANCING), (this.parser = e));
    }
    createNodeMesh(t) {
      let n = this.parser.json,
        r = n.nodes[t];
      if (!r.extensions || !r.extensions[this.name] || r.mesh === void 0)
        return null;
      let i = n.meshes[r.mesh];
      for (let e of i.primitives)
        if (
          e.mode !== z.TRIANGLES &&
          e.mode !== z.TRIANGLE_STRIP &&
          e.mode !== z.TRIANGLE_FAN &&
          e.mode !== void 0
        )
          return null;
      let a = r.extensions[this.name].attributes,
        o = [],
        s = {};
      for (let e in a)
        o.push(
          this.parser
            .getDependency(`accessor`, a[e])
            .then((t) => ((s[e] = t), s[e])),
        );
      return o.length < 1
        ? null
        : (o.push(this.parser.createNodeMesh(t)),
          Promise.all(o).then((t) => {
            let n = t.pop(),
              r = n.isGroup ? n.children : [n],
              i = t[0].count,
              a = [];
            for (let t of r) {
              let n = new M(),
                r = new j(),
                o = new _(),
                c = new j(1, 1, 1),
                l = new Be(t.geometry, t.material, i);
              for (let e = 0; e < i; e++)
                (s.TRANSLATION && r.fromBufferAttribute(s.TRANSLATION, e),
                  s.ROTATION && o.fromBufferAttribute(s.ROTATION, e),
                  s.SCALE && c.fromBufferAttribute(s.SCALE, e),
                  l.setMatrixAt(e, n.compose(r, o, c)));
              let u = null;
              for (let t in s)
                if (t === `_COLOR_0`) {
                  let n = s[t];
                  l.instanceColor = new e(n.array, n.itemSize, n.normalized);
                } else if (
                  t !== `TRANSLATION` &&
                  t !== `ROTATION` &&
                  t !== `SCALE`
                ) {
                  if (u === null) {
                    let e = l.geometry;
                    ((u = new Ee()), (u.name = e.name));
                    for (let t in e.attributes)
                      u.setAttribute(t, e.attributes[t]);
                    for (let t in e.morphAttributes)
                      u.morphAttributes[t] = e.morphAttributes[t];
                    (e.index !== null && u.setIndex(e.index),
                      (u.morphTargetsRelative = e.morphTargetsRelative));
                    for (let t of e.groups)
                      u.addGroup(t.start, t.count, t.materialIndex);
                    (e.boundingBox !== null &&
                      (u.boundingBox = e.boundingBox.clone()),
                      e.boundingSphere !== null &&
                        (u.boundingSphere = e.boundingSphere.clone()),
                      (u.drawRange.start = e.drawRange.start),
                      (u.drawRange.count = e.drawRange.count),
                      (u.userData = Object.assign({}, e.userData)),
                      (l.geometry = u));
                  }
                  let n = s[t];
                  u.setAttribute(t, new e(n.array, n.itemSize, n.normalized));
                }
              (v.prototype.copy.call(l, t),
                this.parser.assignFinalMaterial(l),
                a.push(l));
            }
            return n.isGroup ? (n.clear(), n.add(...a), n) : a[0];
          }));
    }
  },
  zt = `glTF`,
  R = 12,
  Bt = { JSON: 1313821514, BIN: 5130562 },
  Vt = class {
    constructor(e) {
      ((this.name = L.KHR_BINARY_GLTF),
        (this.content = null),
        (this.body = null));
      let t = new DataView(e, 0, R),
        n = new TextDecoder();
      if (
        ((this.header = {
          magic: n.decode(new Uint8Array(e.slice(0, 4))),
          version: t.getUint32(4, !0),
          length: t.getUint32(8, !0),
        }),
        this.header.magic !== zt)
      )
        throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);
      if (this.header.version < 2)
        throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);
      let r = this.header.length - R,
        i = new DataView(e, R),
        a = 0;
      for (; a < r;) {
        let t = i.getUint32(a, !0);
        a += 4;
        let r = i.getUint32(a, !0);
        if (((a += 4), r === Bt.JSON)) {
          let r = new Uint8Array(e, R + a, t);
          this.content = n.decode(r);
        } else if (r === Bt.BIN) {
          let n = R + a;
          this.body = e.slice(n, n + t);
        }
        a += t;
      }
      if (this.content === null)
        throw Error(`THREE.GLTFLoader: JSON content not found.`);
    }
  },
  Ht = class {
    constructor(e, t) {
      if (!t)
        throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);
      ((this.name = L.KHR_DRACO_MESH_COMPRESSION),
        (this.json = e),
        (this.dracoLoader = t),
        this.dracoLoader.preload());
    }
    decodePrimitive(e, t) {
      let n = this.json,
        r = this.dracoLoader,
        i = e.extensions[this.name].bufferView,
        a = e.extensions[this.name].attributes,
        o = {},
        s = {},
        c = {};
      for (let e in a) {
        let t = Zt[e] || e.toLowerCase();
        o[t] = a[e];
      }
      for (let t in e.attributes) {
        let r = Zt[t] || t.toLowerCase();
        if (a[t] !== void 0) {
          let i = n.accessors[e.attributes[t]];
          ((c[r] = B[i.componentType].name), (s[r] = i.normalized === !0));
        }
      }
      return t.getDependency(`bufferView`, i).then(function (e) {
        return new Promise(function (t, n) {
          r.decodeDracoFile(
            e,
            function (e) {
              for (let t in e.attributes) {
                let n = e.attributes[t],
                  r = s[t];
                r !== void 0 && (n.normalized = r);
              }
              t(e);
            },
            o,
            c,
            O,
            n,
          );
        });
      });
    }
  },
  Ut = class {
    constructor() {
      this.name = L.KHR_TEXTURE_TRANSFORM;
    }
    extendTexture(e, t) {
      if (
        (t.texCoord === void 0 || t.texCoord === e.channel) &&
        t.offset === void 0 &&
        t.rotation === void 0 &&
        t.scale === void 0
      )
        return e;
      if (
        ((e = e.clone()),
        t.texCoord !== void 0 && (e.channel = t.texCoord),
        t.offset !== void 0 && e.offset.fromArray(t.offset),
        t.rotation !== void 0 && (e.rotation = t.rotation),
        t.scale !== void 0 && e.repeat.fromArray(t.scale),
        t.rotation !== void 0)
      ) {
        let t = Math.cos(e.rotation),
          n = Math.sin(e.rotation);
        (e.matrix.set(
          e.repeat.x * t,
          e.repeat.y * n,
          e.offset.x,
          -e.repeat.x * n,
          e.repeat.y * t,
          e.offset.y,
          0,
          0,
          1,
        ),
          (e.matrixAutoUpdate = !1));
      }
      return ((e.needsUpdate = !0), e);
    }
  },
  Wt = class {
    constructor() {
      this.name = L.KHR_MESH_QUANTIZATION;
    }
  },
  Gt = class extends He {
    constructor(e, t, n, r) {
      super(e, t, n, r);
    }
    copySampleValue_(e) {
      let t = this.resultBuffer,
        n = this.sampleValues,
        r = this.valueSize,
        i = e * r * 3 + r;
      for (let e = 0; e !== r; e++) t[e] = n[i + e];
      return t;
    }
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = o * 2,
        c = o * 3,
        l = r - t,
        u = (n - t) / l,
        d = u * u,
        f = d * u,
        p = e * c,
        m = p - c,
        h = -2 * f + 3 * d,
        g = f - d,
        _ = 1 - h,
        v = g - d + u;
      for (let e = 0; e !== o; e++) {
        let t = a[m + e + o],
          n = a[m + e + s] * l,
          r = a[p + e + o],
          c = a[p + e] * l;
        i[e] = _ * t + v * n + h * r + g * c;
      }
      return i;
    }
  },
  Kt = new _(),
  qt = class extends Gt {
    interpolate_(e, t, n, r) {
      let i = super.interpolate_(e, t, n, r);
      return (Kt.fromArray(i).normalize().toArray(i), i);
    }
  },
  z = {
    FLOAT: 5126,
    FLOAT_MAT3: 35675,
    FLOAT_MAT4: 35676,
    FLOAT_VEC2: 35664,
    FLOAT_VEC3: 35665,
    FLOAT_VEC4: 35666,
    LINEAR: 9729,
    REPEAT: 10497,
    SAMPLER_2D: 35678,
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
    UNSIGNED_BYTE: 5121,
    UNSIGNED_SHORT: 5123,
  },
  B = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array,
  },
  Jt = { 9728: S, 9729: A, 9984: l, 9985: De, 9986: C, 9987: ke },
  Yt = { 33071: ge, 33648: b, 10497: ot },
  Xt = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 },
  Zt = {
    POSITION: `position`,
    NORMAL: `normal`,
    TANGENT: `tangent`,
    TEXCOORD_0: `uv`,
    TEXCOORD_1: `uv1`,
    TEXCOORD_2: `uv2`,
    TEXCOORD_3: `uv3`,
    COLOR_0: `color`,
    WEIGHTS_0: `skinWeight`,
    JOINTS_0: `skinIndex`,
  },
  V = {
    scale: `scale`,
    translation: `position`,
    rotation: `quaternion`,
    weights: `morphTargetInfluences`,
  },
  Qt = { CUBICSPLINE: void 0, LINEAR: ve, STEP: Ze },
  $t = { OPAQUE: `OPAQUE`, MASK: `MASK`, BLEND: `BLEND` };
