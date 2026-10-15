// tokyo/assets/avatar-CgSTz8jy 05 — push
// Lines 1408-2409 of readable/tokyo/assets/avatar-CgSTz8jy.pretty.js (statement-aligned).
var sn = new N(),
  cn = class {
    constructor(e = {}, t = {}) {
      ((this.json = e),
        (this.extensions = {}),
        (this.plugins = {}),
        (this.options = t),
        (this.cache = new yt()),
        (this.associations = new Map()),
        (this.primitiveCache = {}),
        (this.nodeCache = {}),
        (this.meshCache = { refs: {}, uses: {} }),
        (this.cameraCache = { refs: {}, uses: {} }),
        (this.lightCache = { refs: {}, uses: {} }),
        (this.sourceCache = {}),
        (this.textureCache = {}),
        (this.nodeNamesUsed = {}));
      let n = !1,
        r = -1,
        i = !1,
        a = -1;
      if (typeof navigator < `u` && navigator.userAgent !== void 0) {
        let e = navigator.userAgent;
        n = /^((?!chrome|android).)*safari/i.test(e) === !0;
        let t = e.match(/Version\/(\d+)/);
        ((r = n && t ? parseInt(t[1], 10) : -1),
          (i = e.indexOf(`Firefox`) > -1),
          (a = i ? e.match(/Firefox\/([0-9]+)\./)[1] : -1));
      }
      ((this.textureLoader =
        typeof createImageBitmap > `u` || (n && r < 17) || (i && a < 98)
          ? new u(this.options.manager)
          : new te(this.options.manager)),
        this.textureLoader.setCrossOrigin(this.options.crossOrigin),
        this.textureLoader.setRequestHeader(this.options.requestHeader),
        (this.fileLoader = new C(this.options.manager)),
        this.fileLoader.setResponseType(`arraybuffer`),
        this.options.crossOrigin === `use-credentials` &&
          this.fileLoader.setWithCredentials(!0));
    }
    setExtensions(e) {
      this.extensions = e;
    }
    setPlugins(e) {
      this.plugins = e;
    }
    parse(e, t) {
      let n = this,
        r = this.json,
        i = this.extensions;
      (this.cache.removeAll(),
        (this.nodeCache = {}),
        this._invokeAll(function (e) {
          return e._markDefs && e._markDefs();
        }),
        Promise.all(
          this._invokeAll(function (e) {
            return e.beforeRoot && e.beforeRoot();
          }),
        )
          .then(function () {
            return Promise.all([
              n.getDependencies(`scene`),
              n.getDependencies(`animation`),
              n.getDependencies(`camera`),
            ]);
          })
          .then(function (t) {
            let a = {
              scene: t[0][r.scene || 0],
              scenes: t[0],
              animations: t[1],
              cameras: t[2],
              asset: r.asset,
              parser: n,
              userData: {},
            };
            return (
              U(i, a, r),
              W(a, r),
              Promise.all(
                n._invokeAll(function (e) {
                  return e.afterRoot && e.afterRoot(a);
                }),
              ).then(function () {
                for (let e of a.scenes) e.updateMatrixWorld();
                e(a);
              })
            );
          })
          .catch(t));
    }
    _markDefs() {
      let e = this.json.nodes || [],
        t = this.json.skins || [],
        n = this.json.meshes || [];
      for (let n = 0, r = t.length; n < r; n++) {
        let r = t[n].joints;
        for (let t = 0, n = r.length; t < n; t++) e[r[t]].isBone = !0;
      }
      for (let t = 0, r = e.length; t < r; t++) {
        let r = e[t];
        (r.mesh !== void 0 &&
          (this._addNodeRef(this.meshCache, r.mesh),
          r.skin !== void 0 && (n[r.mesh].isSkinnedMesh = !0)),
          r.camera !== void 0 && this._addNodeRef(this.cameraCache, r.camera));
      }
    }
    _addNodeRef(e, t) {
      t !== void 0 &&
        (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
    }
    _getNodeRef(e, t, n) {
      if (e.refs[t] <= 1) return n;
      let r = n.clone(),
        i = (e, t) => {
          let n = this.associations.get(e);
          n != null && this.associations.set(t, n);
          for (let [n, r] of e.children.entries()) i(r, t.children[n]);
        };
      return (i(n, r), (r.name += `_instance_` + e.uses[t]++), r);
    }
    _invokeOne(e) {
      let t = Object.values(this.plugins);
      t.push(this);
      for (let n = 0; n < t.length; n++) {
        let r = e(t[n]);
        if (r) return r;
      }
      return null;
    }
    _invokeAll(e) {
      let t = Object.values(this.plugins);
      t.unshift(this);
      let n = [];
      for (let r = 0; r < t.length; r++) {
        let i = e(t[r]);
        i && n.push(i);
      }
      return n;
    }
    getDependency(e, t) {
      let n = e + `:` + t,
        r = this.cache.get(n);
      if (!r) {
        switch (e) {
          case `scene`:
            r = this.loadScene(t);
            break;
          case `node`:
            r = this._invokeOne(function (e) {
              return e.loadNode && e.loadNode(t);
            });
            break;
          case `mesh`:
            r = this._invokeOne(function (e) {
              return e.loadMesh && e.loadMesh(t);
            });
            break;
          case `accessor`:
            r = this.loadAccessor(t);
            break;
          case `bufferView`:
            r = this._invokeOne(function (e) {
              return e.loadBufferView && e.loadBufferView(t);
            });
            break;
          case `buffer`:
            r = this.loadBuffer(t);
            break;
          case `material`:
            r = this._invokeOne(function (e) {
              return e.loadMaterial && e.loadMaterial(t);
            });
            break;
          case `texture`:
            r = this._invokeOne(function (e) {
              return e.loadTexture && e.loadTexture(t);
            });
            break;
          case `skin`:
            r = this.loadSkin(t);
            break;
          case `animation`:
            r = this._invokeOne(function (e) {
              return e.loadAnimation && e.loadAnimation(t);
            });
            break;
          case `camera`:
            r = this.loadCamera(t);
            break;
          default:
            if (
              ((r = this._invokeOne(function (n) {
                return n != this && n.getDependency && n.getDependency(e, t);
              })),
              !r)
            )
              throw Error(`Unknown type: ` + e);
        }
        this.cache.add(n, r);
      }
      return r;
    }
    getDependencies(e) {
      let t = this.cache.get(e);
      if (!t) {
        let n = this,
          r = this.json[e + (e === `mesh` ? `es` : `s`)] || [];
        ((t = Promise.all(
          r.map(function (t, r) {
            return n.getDependency(e, r);
          }),
        )),
          this.cache.add(e, t));
      }
      return t;
    }
    loadBuffer(e) {
      let t = this.json.buffers[e],
        n = this.fileLoader;
      if (t.type && t.type !== `arraybuffer`)
        throw Error(
          `THREE.GLTFLoader: ` + t.type + ` buffer type is not supported.`,
        );
      if (t.uri === void 0 && e === 0)
        return Promise.resolve(this.extensions[R.KHR_BINARY_GLTF].body);
      let r = this.options;
      return new Promise(function (e, i) {
        n.load(F.resolveURL(t.uri, r.path), e, void 0, function () {
          i(Error(`THREE.GLTFLoader: Failed to load buffer "` + t.uri + `".`));
        });
      });
    }
    loadBufferView(e) {
      let t = this.json.bufferViews[e];
      return this.getDependency(`buffer`, t.buffer).then(function (e) {
        let n = t.byteLength || 0,
          r = t.byteOffset || 0;
        return e.slice(r, r + n);
      });
    }
    loadAccessor(e) {
      let t = this,
        n = this.json,
        r = this.json.accessors[e];
      if (r.bufferView === void 0 && r.sparse === void 0) {
        let e = Yt[r.type],
          t = V[r.componentType],
          n = r.normalized === !0,
          i = new t(r.count * e);
        return Promise.resolve(new Ne(i, e, n));
      }
      let i = [];
      return (
        r.bufferView === void 0
          ? i.push(null)
          : i.push(this.getDependency(`bufferView`, r.bufferView)),
        r.sparse !== void 0 &&
          (i.push(
            this.getDependency(`bufferView`, r.sparse.indices.bufferView),
          ),
          i.push(this.getDependency(`bufferView`, r.sparse.values.bufferView))),
        Promise.all(i).then(function (e) {
          let i = e[0],
            a = Yt[r.type],
            o = V[r.componentType],
            s = o.BYTES_PER_ELEMENT,
            c = s * a,
            l = r.byteOffset || 0,
            u =
              r.bufferView === void 0
                ? void 0
                : n.bufferViews[r.bufferView].byteStride,
            d = r.normalized === !0,
            f,
            p;
          if (u && u !== c) {
            let e = Math.floor(l / u),
              n =
                `InterleavedBuffer:` +
                r.bufferView +
                `:` +
                r.componentType +
                `:` +
                e +
                `:` +
                r.count,
              c = t.cache.get(n);
            (c ||
              ((f = new o(i, e * u, (r.count * u) / s)),
              (c = new Ie(f, u / s)),
              t.cache.add(n, c)),
              (p = new xe(c, a, (l % u) / s, d)));
          } else
            ((f = i === null ? new o(r.count * a) : new o(i, l, r.count * a)),
              (p = new Ne(f, a, d)));
          if (r.sparse !== void 0) {
            let t = Yt.SCALAR,
              n = V[r.sparse.indices.componentType],
              s = r.sparse.indices.byteOffset || 0,
              c = r.sparse.values.byteOffset || 0,
              l = new n(e[1], s, r.sparse.count * t),
              u = new o(e[2], c, r.sparse.count * a);
            (i !== null &&
              (p = new Ne(p.array.slice(), p.itemSize, p.normalized)),
              (p.normalized = !1));
            for (let e = 0, t = l.length; e < t; e++) {
              let t = l[e];
              if (
                (p.setX(t, u[e * a]),
                a >= 2 && p.setY(t, u[e * a + 1]),
                a >= 3 && p.setZ(t, u[e * a + 2]),
                a >= 4 && p.setW(t, u[e * a + 3]),
                a >= 5)
              )
                throw Error(
                  `THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`,
                );
            }
            p.normalized = d;
          }
          return p;
        })
      );
    }
    loadTexture(e) {
      let t = this.json,
        n = this.options,
        r = t.textures[e].source,
        i = t.images[r],
        a = this.textureLoader;
      if (i.uri) {
        let e = n.manager.getHandler(i.uri);
        e !== null && (a = e);
      }
      return this.loadTextureImage(e, r, a);
    }
    loadTextureImage(e, t, n) {
      let r = this,
        i = this.json,
        a = i.textures[e],
        o = i.images[t],
        s = (o.uri || o.bufferView) + `:` + a.sampler;
      if (this.textureCache[s]) return this.textureCache[s];
      let c = this.loadImageSource(t, n)
        .then(function (t) {
          ((t.flipY = !1),
            (t.name = a.name || o.name || ``),
            t.name === `` &&
              typeof o.uri == `string` &&
              o.uri.startsWith(`data:image/`) === !1 &&
              (t.name = o.uri));
          let n = (i.samplers || {})[a.sampler] || {};
          return (
            (t.magFilter = qt[n.magFilter] || 1006),
            (t.minFilter = qt[n.minFilter] || 1008),
            (t.wrapS = Jt[n.wrapS] || 1e3),
            (t.wrapT = Jt[n.wrapT] || 1e3),
            (t.generateMipmaps =
              !t.isCompressedTexture &&
              t.minFilter !== 1003 &&
              t.minFilter !== 1006),
            r.associations.set(t, { textures: e }),
            t
          );
        })
        .catch(function () {
          return null;
        });
      return ((this.textureCache[s] = c), c);
    }
    loadImageSource(e, t) {
      let n = this,
        r = this.json,
        i = this.options;
      if (this.sourceCache[e] !== void 0)
        return this.sourceCache[e].then((e) => e.clone());
      let a = r.images[e],
        o = self.URL || self.webkitURL,
        s = a.uri || ``,
        c = !1;
      if (a.bufferView !== void 0)
        s = n.getDependency(`bufferView`, a.bufferView).then(function (e) {
          c = !0;
          let t = new Blob([e], { type: a.mimeType });
          return ((s = o.createObjectURL(t)), s);
        });
      else if (a.uri === void 0)
        throw Error(
          `THREE.GLTFLoader: Image ` + e + ` is missing URI and bufferView`,
        );
      let l = Promise.resolve(s)
        .then(function (e) {
          return new Promise(function (n, r) {
            let a = n;
            (t.isImageBitmapLoader === !0 &&
              (a = function (e) {
                let t = new de(e);
                ((t.needsUpdate = !0), n(t));
              }),
              t.load(F.resolveURL(e, i.path), a, void 0, r));
          });
        })
        .then(function (e) {
          return (
            c === !0 && o.revokeObjectURL(s),
            W(e, a),
            (e.userData.mimeType = a.mimeType || on(a.uri)),
            e
          );
        })
        .catch(function (e) {
          throw (
            console.error(`THREE.GLTFLoader: Couldn't load texture`, s),
            e
          );
        });
      return ((this.sourceCache[e] = l), l);
    }
    assignTexture(e, t, n, r) {
      let i = this;
      return this.getDependency(`texture`, n.index).then(function (a) {
        if (!a) return null;
        if (
          (n.texCoord !== void 0 &&
            n.texCoord > 0 &&
            ((a = a.clone()), (a.channel = n.texCoord)),
          i.extensions[R.KHR_TEXTURE_TRANSFORM])
        ) {
          let e =
            n.extensions === void 0
              ? void 0
              : n.extensions[R.KHR_TEXTURE_TRANSFORM];
          if (e) {
            let t = i.associations.get(a);
            ((a = i.extensions[R.KHR_TEXTURE_TRANSFORM].extendTexture(a, e)),
              i.associations.set(a, t));
          }
        }
        return (r !== void 0 && (a.colorSpace = r), (e[t] = a), a);
      });
    }
    assignFinalMaterial(e) {
      let t = e.geometry,
        n = e.material,
        r = t.attributes.tangent === void 0,
        i = t.attributes.color !== void 0,
        a = t.attributes.normal === void 0;
      if (e.isPoints) {
        let e = `PointsMaterial:` + n.uuid,
          t = this.cache.get(e);
        (t ||
          ((t = new l()),
          st.prototype.copy.call(t, n),
          t.color.copy(n.color),
          (t.map = n.map),
          (t.sizeAttenuation = !1),
          this.cache.add(e, t)),
          (n = t));
      } else if (e.isLine) {
        let e = `LineBasicMaterial:` + n.uuid,
          t = this.cache.get(e);
        (t ||
          ((t = new De()),
          st.prototype.copy.call(t, n),
          t.color.copy(n.color),
          (t.map = n.map),
          this.cache.add(e, t)),
          (n = t));
      }
      if (r || i || a) {
        let e = `ClonedMaterial:` + n.uuid + `:`;
        (r && (e += `derivative-tangents:`),
          i && (e += `vertex-colors:`),
          a && (e += `flat-shading:`));
        let t = this.cache.get(e);
        (t ||
          ((t = n.clone()),
          i && (t.vertexColors = !0),
          a && (t.flatShading = !0),
          r &&
            (t.normalScale && (t.normalScale.y *= -1),
            t.clearcoatNormalScale && (t.clearcoatNormalScale.y *= -1)),
          this.cache.add(e, t),
          this.associations.set(t, this.associations.get(n))),
          (n = t));
      }
      e.material = n;
    }
    getMaterialType() {
      return Re;
    }
    loadMaterial(e) {
      let t = this,
        n = this.json,
        r = this.extensions,
        i = n.materials[e],
        s,
        c = {},
        l = i.extensions || {},
        u = [];
      if (l[R.KHR_MATERIALS_UNLIT]) {
        let e = r[R.KHR_MATERIALS_UNLIT];
        ((s = e.getMaterialType()), u.push(e.extendParams(c, i, t)));
      } else {
        let n = i.pbrMetallicRoughness || {};
        if (
          ((c.color = new P(1, 1, 1)),
          (c.opacity = 1),
          Array.isArray(n.baseColorFactor))
        ) {
          let e = n.baseColorFactor;
          (c.color.setRGB(e[0], e[1], e[2], T), (c.opacity = e[3]));
        }
        (n.baseColorTexture !== void 0 &&
          u.push(t.assignTexture(c, `map`, n.baseColorTexture, a)),
          (c.metalness = n.metallicFactor === void 0 ? 1 : n.metallicFactor),
          (c.roughness = n.roughnessFactor === void 0 ? 1 : n.roughnessFactor),
          n.metallicRoughnessTexture !== void 0 &&
            (u.push(
              t.assignTexture(c, `metalnessMap`, n.metallicRoughnessTexture),
            ),
            u.push(
              t.assignTexture(c, `roughnessMap`, n.metallicRoughnessTexture),
            )),
          (s = this._invokeOne(function (t) {
            return t.getMaterialType && t.getMaterialType(e);
          })),
          u.push(
            Promise.all(
              this._invokeAll(function (t) {
                return t.extendMaterialParams && t.extendMaterialParams(e, c);
              }),
            ),
          ));
      }
      i.doubleSided === !0 && (c.side = 2);
      let d = i.alphaMode || Qt.OPAQUE;
      if (
        (d === Qt.BLEND
          ? ((c.transparent = !0), (c.depthWrite = !1))
          : ((c.transparent = !1),
            d === Qt.MASK &&
              (c.alphaTest = i.alphaCutoff === void 0 ? 0.5 : i.alphaCutoff)),
        i.normalTexture !== void 0 &&
          s !== o &&
          (u.push(t.assignTexture(c, `normalMap`, i.normalTexture)),
          (c.normalScale = new Ge(1, 1)),
          i.normalTexture.scale !== void 0))
      ) {
        let e = i.normalTexture.scale;
        c.normalScale.set(e, e);
      }
      if (
        (i.occlusionTexture !== void 0 &&
          s !== o &&
          (u.push(t.assignTexture(c, `aoMap`, i.occlusionTexture)),
          i.occlusionTexture.strength !== void 0 &&
            (c.aoMapIntensity = i.occlusionTexture.strength)),
        i.emissiveFactor !== void 0 && s !== o)
      ) {
        let e = i.emissiveFactor;
        c.emissive = new P().setRGB(e[0], e[1], e[2], T);
      }
      return (
        i.emissiveTexture !== void 0 &&
          s !== o &&
          u.push(t.assignTexture(c, `emissiveMap`, i.emissiveTexture, a)),
        Promise.all(u).then(function () {
          let n = new s(c);
          return (
            i.name && (n.name = i.name),
            W(n, i),
            t.associations.set(n, { materials: e }),
            i.extensions && U(r, n, i),
            n
          );
        })
      );
    }
    createUniqueName(e) {
      let t = g.sanitizeNodeName(e || ``);
      return t in this.nodeNamesUsed
        ? t + `_` + ++this.nodeNamesUsed[t]
        : ((this.nodeNamesUsed[t] = 0), t);
    }
    loadGeometries(e) {
      let t = this,
        n = this.extensions,
        r = this.primitiveCache;
      function i(e) {
        return n[R.KHR_DRACO_MESH_COMPRESSION]
          .decodePrimitive(e, t)
          .then(function (n) {
            return un(n, e, t);
          });
      }
      let a = [];
      for (let n = 0, o = e.length; n < o; n++) {
        let o = e[n],
          s = nn(o),
          c = r[s];
        if (c) a.push(c.promise);
        else {
          let e;
          ((e =
            o.extensions && o.extensions[R.KHR_DRACO_MESH_COMPRESSION]
              ? i(o)
              : un(new je(), o, t)),
            o.mode === B.TRIANGLE_STRIP
              ? (e = e.then((e) => ht(e, 1)))
              : o.mode === B.TRIANGLE_FAN && (e = e.then((e) => ht(e, 2))),
            (r[s] = { primitive: o, promise: e }),
            a.push(e));
        }
      }
      return Promise.all(a);
    }
    loadMesh(e) {
      let t = this,
        n = this.json,
        r = this.extensions,
        i = n.meshes[e],
        a = i.primitives,
        o = [];
      for (let e = 0, t = a.length; e < t; e++) {
        let t =
          a[e].material === void 0
            ? $t(this.cache)
            : this.getDependency(`material`, a[e].material);
        o.push(t);
      }
      return (
        o.push(t.loadGeometries(a)),
        Promise.all(o).then(async function (n) {
          let o = n.slice(0, n.length - 1),
            s = n[n.length - 1],
            c = [];
          for (let n = 0, l = s.length; n < l; n++) {
            let l = s[n],
              u = a[n],
              d,
              f = o[n];
            if (
              u.mode === B.TRIANGLES ||
              u.mode === B.TRIANGLE_STRIP ||
              u.mode === B.TRIANGLE_FAN ||
              u.mode === void 0
            ) {
              let e = i.isSkinnedMesh === !0,
                t = l.hasAttribute(`skinIndex`) && l.hasAttribute(`skinWeight`);
              (e &&
                t === !1 &&
                console.warn(
                  `THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.`,
                ),
                (d = e && t ? new S(l, f) : new le(l, f)),
                d.isSkinnedMesh === !0 && d.normalizeSkinWeights());
            } else if (u.mode === B.LINES) d = new Ze(l, f);
            else if (u.mode === B.LINE_STRIP) d = new rt(l, f);
            else if (u.mode === B.LINE_LOOP) d = new Ae(l, f);
            else if (u.mode === B.POINTS) d = new pe(l, f);
            else
              throw Error(
                `THREE.GLTFLoader: Primitive mode unsupported: ` + u.mode,
              );
            (Object.keys(d.geometry.morphAttributes).length > 0 && tn(d, i),
              (d.name = t.createUniqueName(i.name || `mesh_` + e)),
              W(d, i),
              u.extensions && U(r, d, u),
              t.assignFinalMaterial(d),
              c.push(d));
          }
          for (let n = 0, r = c.length; n < r; n++)
            t.associations.set(c[n], { meshes: e, primitives: n });
          if (c.length === 1) return (i.extensions && U(r, c[0], i), c[0]);
          let l = new p();
          (i.extensions && U(r, l, i), t.associations.set(l, { meshes: e }));
          for (let e = 0, t = c.length; e < t; e++) l.add(c[e]);
          return l;
        })
      );
    }
    loadCamera(e) {
      let t,
        r = this.json.cameras[e],
        i = r[r.type];
      if (!i) {
        console.warn(`THREE.GLTFLoader: Missing camera parameters.`);
        return;
      }
      return (
        r.type === `perspective`
          ? (t = new n(
              oe.radToDeg(i.yfov),
              i.aspectRatio || 1,
              i.znear || 1,
              i.zfar || 2e6,
            ))
          : r.type === `orthographic` &&
            (t = new re(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)),
        r.name && (t.name = this.createUniqueName(r.name)),
        W(t, r),
        Promise.resolve(t)
      );
    }
    loadSkin(e) {
      let t = this.json.skins[e],
        n = [];
      for (let e = 0, r = t.joints.length; e < r; e++)
        n.push(this._loadNodeShallow(t.joints[e]));
      return (
        t.inverseBindMatrices === void 0
          ? n.push(null)
          : n.push(this.getDependency(`accessor`, t.inverseBindMatrices)),
        Promise.all(n).then(function (e) {
          let n = e.pop(),
            r = e,
            i = [],
            a = [];
          for (let e = 0, o = r.length; e < o; e++) {
            let o = r[e];
            if (o) {
              i.push(o);
              let t = new N();
              (n !== null && t.fromArray(n.array, e * 16), a.push(t));
            } else
              console.warn(
                `THREE.GLTFLoader: Joint "%s" could not be found.`,
                t.joints[e],
              );
          }
          return new b(i, a);
        })
      );
    }
    loadAnimation(e) {
      let t = this.json,
        n = this,
        r = t.animations[e],
        i = r.name ? r.name : `animation_` + e,
        a = [],
        o = [],
        s = [],
        c = [],
        l = [];
      for (let e = 0, t = r.channels.length; e < t; e++) {
        let t = r.channels[e],
          n = r.samplers[t.sampler],
          i = t.target,
          u = i.node,
          d = r.parameters === void 0 ? n.input : r.parameters[n.input],
          f = r.parameters === void 0 ? n.output : r.parameters[n.output];
        i.node !== void 0 &&
          (a.push(this.getDependency(`node`, u)),
          o.push(this.getDependency(`accessor`, d)),
          s.push(this.getDependency(`accessor`, f)),
          c.push(n),
          l.push(i));
      }
      return Promise.all([
        Promise.all(a),
        Promise.all(o),
        Promise.all(s),
        Promise.all(c),
        Promise.all(l),
      ]).then(function (e) {
        let t = e[0],
          a = e[1],
          o = e[2],
          s = e[3],
          c = e[4],
          l = [];
        for (let e = 0, r = t.length; e < r; e++) {
          let r = t[e],
            i = a[e],
            u = o[e],
            d = s[e],
            f = c[e];
          if (r === void 0) continue;
          r.updateMatrix && r.updateMatrix();
          let p = n._createAnimationTracks(r, i, u, d, f);
          if (p) for (let e = 0; e < p.length; e++) l.push(p[e]);
        }
        let u = new Be(i, void 0, l);
        return (W(u, r), u);
      });
    }
    createNodeMesh(e) {
      let t = this.json,
        n = this,
        r = t.nodes[e];
      return r.mesh === void 0
        ? null
        : n.getDependency(`mesh`, r.mesh).then(function (e) {
            let t = n._getNodeRef(n.meshCache, r.mesh, e);
            return (
              r.weights !== void 0 &&
                t.traverse(function (e) {
                  if (e.isMesh)
                    for (let t = 0, n = r.weights.length; t < n; t++)
                      e.morphTargetInfluences[t] = r.weights[t];
                }),
              t
            );
          });
    }
    loadNode(e) {
      let t = this.json,
        n = this,
        r = t.nodes[e],
        i = n._loadNodeShallow(e),
        a = [],
        o = r.children || [];
      for (let e = 0, t = o.length; e < t; e++)
        a.push(n.getDependency(`node`, o[e]));
      let s =
        r.skin === void 0
          ? Promise.resolve(null)
          : n.getDependency(`skin`, r.skin);
      return Promise.all([i, Promise.all(a), s]).then(function (e) {
        let t = e[0],
          n = e[1],
          r = e[2];
        r !== null &&
          t.traverse(function (e) {
            e.isSkinnedMesh && e.bind(r, sn);
          });
        for (let e = 0, r = n.length; e < r; e++) t.add(n[e]);
        if (t.userData.pivot !== void 0 && n.length > 0) {
          let e = t.userData.pivot,
            r = n[0];
          ((t.pivot = new A().fromArray(e)),
            (t.position.x -= e[0]),
            (t.position.y -= e[1]),
            (t.position.z -= e[2]),
            r.position.set(0, 0, 0),
            delete t.userData.pivot);
        }
        return t;
      });
    }
    _loadNodeShallow(e) {
      let t = this.json,
        n = this.extensions,
        r = this;
      if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
      let i = t.nodes[e],
        a = i.name ? r.createUniqueName(i.name) : ``,
        o = [],
        s = r._invokeOne(function (t) {
          return t.createNodeMesh && t.createNodeMesh(e);
        });
      return (
        s && o.push(s),
        i.camera !== void 0 &&
          o.push(
            r.getDependency(`camera`, i.camera).then(function (e) {
              return r._getNodeRef(r.cameraCache, i.camera, e);
            }),
          ),
        r
          ._invokeAll(function (t) {
            return t.createNodeAttachment && t.createNodeAttachment(e);
          })
          .forEach(function (e) {
            o.push(e);
          }),
        (this.nodeCache[e] = Promise.all(o).then(function (t) {
          let o;
          if (
            ((o =
              i.isBone === !0
                ? new Oe()
                : t.length > 1
                  ? new p()
                  : t.length === 1
                    ? t[0]
                    : new v()),
            o !== t[0])
          )
            for (let e = 0, n = t.length; e < n; e++) o.add(t[e]);
          if (
            (i.name && ((o.userData.name = i.name), (o.name = a)),
            W(o, i),
            i.extensions && U(n, o, i),
            i.matrix !== void 0)
          ) {
            let e = new N();
            (e.fromArray(i.matrix), o.applyMatrix4(e));
          } else
            (i.translation !== void 0 && o.position.fromArray(i.translation),
              i.rotation !== void 0 && o.quaternion.fromArray(i.rotation),
              i.scale !== void 0 && o.scale.fromArray(i.scale));
          if (!r.associations.has(o)) r.associations.set(o, {});
          else if (i.mesh !== void 0 && r.meshCache.refs[i.mesh] > 1) {
            let e = r.associations.get(o);
            r.associations.set(o, { ...e });
          }
          return ((r.associations.get(o).nodes = e), o);
        })),
        this.nodeCache[e]
      );
    }
    loadScene(e) {
      let t = this.extensions,
        n = this.json.scenes[e],
        r = this,
        i = new p();
      (n.name && (i.name = r.createUniqueName(n.name)),
        W(i, n),
        n.extensions && U(t, i, n));
      let a = n.nodes || [],
        o = [];
      for (let e = 0, t = a.length; e < t; e++)
        o.push(r.getDependency(`node`, a[e]));
      return Promise.all(o).then(function (e) {
        for (let t = 0, n = e.length; t < n; t++) {
          let n = e[t];
          n.parent === null ? i.add(n) : i.add(gt(n));
        }
        return (
          (r.associations = ((e) => {
            let t = new Map();
            for (let [e, n] of r.associations)
              (e instanceof st || e instanceof de) && t.set(e, n);
            return (
              e.traverse((e) => {
                let n = r.associations.get(e);
                n != null && t.set(e, n);
              }),
              t
            );
          })(i)),
          i
        );
      });
    }
    _createAnimationTracks(e, t, n, r, i) {
      let a = [],
        o = e.name ? e.name : e.uuid,
        s = [];
      function c(e) {
        e.morphTargetInfluences && s.push(e.name ? e.name : e.uuid);
      }
      H[i.path] === H.weights
        ? (c(e), e.isGroup && e.children.forEach(c))
        : s.push(o);
      let l;
      switch (H[i.path]) {
        case H.weights:
          l = f;
          break;
        case H.rotation:
          l = h;
          break;
        case H.translation:
        case H.scale:
          l = be;
          break;
        default:
          switch (n.itemSize) {
            case 1:
              l = f;
              break;
            default:
              l = be;
          }
      }
      let u = r.interpolation === void 0 ? Te : Zt[r.interpolation],
        d = this._getArrayFromAccessor(n);
      for (let e = 0, n = s.length; e < n; e++) {
        let n = new l(s[e] + `.` + H[i.path], t.array, d, u);
        (r.interpolation === `CUBICSPLINE` &&
          this._createCubicSplineTrackInterpolant(n),
          a.push(n));
      }
      return a;
    }
    _getArrayFromAccessor(e) {
      let t = e.array;
      if (e.normalized) {
        let e = an(t.constructor),
          n = new Float32Array(t.length);
        for (let r = 0, i = t.length; r < i; r++) n[r] = t[r] * e;
        t = n;
      }
      return t;
    }
    _createCubicSplineTrackInterpolant(e) {
      ((e.createInterpolant = function (e) {
        return new (this instanceof h ? Kt : Wt)(
          this.times,
          this.values,
          this.getValueSize() / 3,
          e,
        );
      }),
        (e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0));
    }
  };
