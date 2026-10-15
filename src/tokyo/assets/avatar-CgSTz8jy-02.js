// tokyo/assets/avatar-CgSTz8jy 02 — register
// Lines 184-401 of readable/tokyo/assets/avatar-CgSTz8jy.pretty.js (statement-aligned).
var vt = class extends it {
  constructor(e) {
    (super(e),
      (this.dracoLoader = null),
      (this.ktx2Loader = null),
      (this.meshoptDecoder = null),
      (this.pluginCallbacks = []),
      this.register(function (e) {
        return new Ct(e);
      }),
      this.register(function (e) {
        return new wt(e);
      }),
      this.register(function (e) {
        return new Nt(e);
      }),
      this.register(function (e) {
        return new Pt(e);
      }),
      this.register(function (e) {
        return new Ft(e);
      }),
      this.register(function (e) {
        return new Et(e);
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
        return new St(e);
      }),
      this.register(function (e) {
        return new At(e);
      }),
      this.register(function (e) {
        return new Tt(e);
      }),
      this.register(function (e) {
        return new Mt(e);
      }),
      this.register(function (e) {
        return new jt(e);
      }),
      this.register(function (e) {
        return new bt(e);
      }),
      this.register(function (e) {
        return new It(e, R.EXT_MESHOPT_COMPRESSION);
      }),
      this.register(function (e) {
        return new It(e, R.KHR_MESHOPT_COMPRESSION);
      }),
      this.register(function (e) {
        return new Lt(e);
      }));
  }
  load(e, t, n, r) {
    let i = this,
      a;
    if (this.resourcePath !== ``) a = this.resourcePath;
    else if (this.path !== ``) {
      let t = F.extractUrlBase(e);
      a = F.resolveURL(t, this.path);
    } else a = F.extractUrlBase(e);
    this.manager.itemStart(e);
    let o = function (t) {
        (r ? r(t) : console.error(t),
          i.manager.itemError(e),
          i.manager.itemEnd(e));
      },
      s = new C(this.manager);
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
      if (s.decode(new Uint8Array(e, 0, 4)) === Rt) {
        try {
          a[R.KHR_BINARY_GLTF] = new Bt(e);
        } catch (e) {
          r && r(e);
          return;
        }
        i = JSON.parse(a[R.KHR_BINARY_GLTF].content);
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
    let c = new cn(i, {
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
          case R.KHR_MATERIALS_UNLIT:
            a[t] = new xt();
            break;
          case R.KHR_DRACO_MESH_COMPRESSION:
            a[t] = new Vt(i, this.dracoLoader);
            break;
          case R.KHR_TEXTURE_TRANSFORM:
            a[t] = new Ht();
            break;
          case R.KHR_MESH_QUANTIZATION:
            a[t] = new Ut();
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
function yt() {
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
function L(e, t, n) {
  let r = e.json.materials[t];
  return r.extensions && r.extensions[n] ? r.extensions[n] : null;
}
