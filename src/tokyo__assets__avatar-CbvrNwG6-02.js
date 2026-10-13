// tokyo__assets__avatar-CbvrNwG6 02 — register
// Lines 184-401 of readable/tokyo__assets__avatar-CbvrNwG6.pretty.js (statement-aligned).
var yt = class extends tt {
  constructor(e) {
    (super(e),
      (this.dracoLoader = null),
      (this.ktx2Loader = null),
      (this.meshoptDecoder = null),
      (this.pluginCallbacks = []),
      this.register(function (e) {
        return new wt(e);
      }),
      this.register(function (e) {
        return new Tt(e);
      }),
      this.register(function (e) {
        return new Pt(e);
      }),
      this.register(function (e) {
        return new Ft(e);
      }),
      this.register(function (e) {
        return new It(e);
      }),
      this.register(function (e) {
        return new Dt(e);
      }),
      this.register(function (e) {
        return new Ot(e);
      }),
      this.register(function (e) {
        return new kt(e);
      }),
      this.register(function (e) {
        return new At(e);
      }),
      this.register(function (e) {
        return new Ct(e);
      }),
      this.register(function (e) {
        return new jt(e);
      }),
      this.register(function (e) {
        return new Et(e);
      }),
      this.register(function (e) {
        return new Nt(e);
      }),
      this.register(function (e) {
        return new Mt(e);
      }),
      this.register(function (e) {
        return new xt(e);
      }),
      this.register(function (e) {
        return new Lt(e, L.EXT_MESHOPT_COMPRESSION);
      }),
      this.register(function (e) {
        return new Lt(e, L.KHR_MESHOPT_COMPRESSION);
      }),
      this.register(function (e) {
        return new Rt(e);
      }));
  }
  load(e, t, n, r) {
    let i = this,
      a;
    if (this.resourcePath !== ``) a = this.resourcePath;
    else if (this.path !== ``) {
      let t = P.extractUrlBase(e);
      a = P.resolveURL(t, this.path);
    } else a = P.extractUrlBase(e);
    this.manager.itemStart(e);
    let o = function (t) {
        (r ? r(t) : console.error(t),
          i.manager.itemError(e),
          i.manager.itemEnd(e));
      },
      s = new T(this.manager);
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
      if (s.decode(new Uint8Array(e, 0, 4)) === zt) {
        try {
          a[L.KHR_BINARY_GLTF] = new Vt(e);
        } catch (e) {
          r && r(e);
          return;
        }
        i = JSON.parse(a[L.KHR_BINARY_GLTF].content);
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
    let c = new ln(i, {
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
          case L.KHR_MATERIALS_UNLIT:
            a[t] = new St();
            break;
          case L.KHR_DRACO_MESH_COMPRESSION:
            a[t] = new Ht(i, this.dracoLoader);
            break;
          case L.KHR_TEXTURE_TRANSFORM:
            a[t] = new Ut();
            break;
          case L.KHR_MESH_QUANTIZATION:
            a[t] = new Wt();
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
function bt() {
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
function I(e, t, n) {
  let r = e.json.materials[t];
  return r.extensions && r.extensions[n] ? r.extensions[n] : null;
}
