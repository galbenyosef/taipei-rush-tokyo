// tokyo/assets/avatar-Cm3dja-U 02 — register
// Lines 190-407 of readable/tokyo/assets/avatar-Cm3dja-U.pretty.js (statement-aligned).
var xt = class extends st {
  constructor(e) {
    (super(e),
      (this.dracoLoader = null),
      (this.ktx2Loader = null),
      (this.meshoptDecoder = null),
      (this.pluginCallbacks = []),
      this.register(function (e) {
        return new Et(e);
      }),
      this.register(function (e) {
        return new Dt(e);
      }),
      this.register(function (e) {
        return new It(e);
      }),
      this.register(function (e) {
        return new Lt(e);
      }),
      this.register(function (e) {
        return new Rt(e);
      }),
      this.register(function (e) {
        return new kt(e);
      }),
      this.register(function (e) {
        return new At(e);
      }),
      this.register(function (e) {
        return new jt(e);
      }),
      this.register(function (e) {
        return new Mt(e);
      }),
      this.register(function (e) {
        return new Tt(e);
      }),
      this.register(function (e) {
        return new Nt(e);
      }),
      this.register(function (e) {
        return new Ot(e);
      }),
      this.register(function (e) {
        return new Ft(e);
      }),
      this.register(function (e) {
        return new Pt(e);
      }),
      this.register(function (e) {
        return new Ct(e);
      }),
      this.register(function (e) {
        return new zt(e, I.EXT_MESHOPT_COMPRESSION);
      }),
      this.register(function (e) {
        return new zt(e, I.KHR_MESHOPT_COMPRESSION);
      }),
      this.register(function (e) {
        return new Bt(e);
      }));
  }
  load(e, t, n, r) {
    let i = this,
      a;
    if (this.resourcePath !== ``) a = this.resourcePath;
    else if (this.path !== ``) {
      let t = xe.extractUrlBase(e);
      a = xe.resolveURL(t, this.path);
    } else a = xe.extractUrlBase(e);
    this.manager.itemStart(e);
    let o = function (t) {
        (r ? r(t) : console.error(t),
          i.manager.itemError(e),
          i.manager.itemEnd(e));
      },
      s = new m(this.manager);
    (s.setPath(this.path),
      s.setResponseType(`arraybuffer`),
      s.setRequestHeader(this.requestHeader),
      s.setWithCredentials(this.withCredentials),
      s.load(
        e,
        function (n) {
          try {
            i.parse(
              n,
              a,
              function (n) {
                (t(n), i.manager.itemEnd(e));
              },
              o,
            );
          } catch (e) {
            o(e);
          }
        },
        n,
        o,
      ));
  }
  setDRACOLoader(e) {
    return ((this.dracoLoader = e), this);
  }
  setKTX2Loader(e) {
    return ((this.ktx2Loader = e), this);
  }
  setMeshoptDecoder(e) {
    return ((this.meshoptDecoder = e), this);
  }
  register(e) {
    return (
      this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e),
      this
    );
  }
  unregister(e) {
    return (
      this.pluginCallbacks.indexOf(e) !== -1 &&
        this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
      this
    );
  }
  parse(e, t, n, r) {
    let i,
      a = {},
      o = {},
      s = new TextDecoder();
    if (typeof e == `string`) i = JSON.parse(e);
    else if (e instanceof ArrayBuffer) {
      if (s.decode(new Uint8Array(e, 0, 4)) === Vt) {
        try {
          a[I.KHR_BINARY_GLTF] = new Ut(e);
        } catch (e) {
          r && r(e);
          return;
        }
        i = JSON.parse(a[I.KHR_BINARY_GLTF].content);
      } else i = JSON.parse(s.decode(e));
    } else i = e;
    if (i.asset === void 0 || i.asset.version[0] < 2) {
      r &&
        r(
          Error(
            `THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`,
          ),
        );
      return;
    }
    let c = new dn(i, {
      path: t || this.resourcePath || ``,
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder,
    });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let e = 0; e < this.pluginCallbacks.length; e++) {
      let t = this.pluginCallbacks[e](c);
      (t.name ||
        console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),
        (o[t.name] = t),
        (a[t.name] = !0));
    }
    if (i.extensionsUsed)
      for (let e = 0; e < i.extensionsUsed.length; ++e) {
        let t = i.extensionsUsed[e],
          n = i.extensionsRequired || [];
        switch (t) {
          case I.KHR_MATERIALS_UNLIT:
            a[t] = new wt();
            break;
          case I.KHR_DRACO_MESH_COMPRESSION:
            a[t] = new Wt(i, this.dracoLoader);
            break;
          case I.KHR_TEXTURE_TRANSFORM:
            a[t] = new Gt();
            break;
          case I.KHR_MESH_QUANTIZATION:
            a[t] = new Kt();
            break;
          default:
            n.indexOf(t) >= 0 &&
              o[t] === void 0 &&
              console.warn(`THREE.GLTFLoader: Unknown extension "` + t + `".`);
        }
      }
    (c.setExtensions(a), c.setPlugins(o), c.parse(n, r));
  }
  parseAsync(e, t) {
    let n = this;
    return new Promise(function (r, i) {
      n.parse(e, t, r, i);
    });
  }
};
function St() {
  let e = {};
  return {
    get: function (t) {
      return e[t];
    },
    add: function (t, n) {
      e[t] = n;
    },
    remove: function (t) {
      delete e[t];
    },
    removeAll: function () {
      e = {};
    },
  };
}
function F(e, t, n) {
  let r = e.json.materials[t];
  return r.extensions && r.extensions[n] ? r.extensions[n] : null;
}
