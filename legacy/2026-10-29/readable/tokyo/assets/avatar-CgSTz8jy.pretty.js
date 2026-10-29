import {
  $ as e,
  At as t,
  Bt as n,
  C as r,
  Cn as i,
  En as a,
  Et as o,
  Fn as s,
  Ft as c,
  Gt as l,
  Hn as u,
  I as d,
  It as f,
  J as p,
  Jn as m,
  Jt as h,
  Kt as g,
  Ln as _,
  Lt as v,
  Mt as y,
  Nn as b,
  Nt as x,
  Pn as S,
  Pt as ee,
  Q as te,
  Qt as ne,
  Rt as re,
  S as ie,
  Sn as ae,
  St as oe,
  T as se,
  Tn as ce,
  Tt as le,
  Ut as ue,
  V as C,
  Vn as de,
  W as fe,
  Wt as pe,
  Xt as me,
  Y as w,
  Yn as he,
  Yt as ge,
  Zn as _e,
  Zt as ve,
  _t as T,
  an as ye,
  ar as be,
  at as xe,
  b as Se,
  bn as Ce,
  cn as we,
  ct as Te,
  dn as Ee,
  dt as De,
  en as E,
  f as Oe,
  fn as ke,
  ft as Ae,
  g as je,
  gt as Me,
  h as Ne,
  hn as D,
  ht as Pe,
  in as Fe,
  it as Ie,
  j as Le,
  jt as Re,
  k as ze,
  l as Be,
  ln as Ve,
  mn as He,
  mt as O,
  n as Ue,
  nn as We,
  nr as Ge,
  nt as Ke,
  on as qe,
  ot as Je,
  p as Ye,
  pn as Xe,
  pt as Ze,
  qt as k,
  rn as Qe,
  rr as A,
  sn as $e,
  st as et,
  tn as j,
  tr as tt,
  un as nt,
  ut as rt,
  vn as M,
  vt as it,
  w as at,
  wn as ot,
  wt as N,
  x as P,
  xt as st,
  yt as F,
} from "./three-x0mFGRTI.js";
import { Er as ct, mn as lt, nt as ut, on as dt } from "./engine-wUBYs8Z3.js";
import { F as ft, L as pt, P as I } from "./characters-CbxAZUc_.js";
import { L as mt } from "./tokyo-_rNKO_Y7.js";
function ht(e, t) {
  if (t === 0)
    return (
      console.warn(
        `THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`,
      ),
      e
    );
  if (t === 2 || t === 1) {
    let n = e.getIndex();
    if (n === null) {
      let t = [],
        r = e.getAttribute(`position`);
      if (r !== void 0) {
        for (let e = 0; e < r.count; e++) t.push(e);
        (e.setIndex(t), (n = e.getIndex()));
      } else
        return (
          console.error(
            `THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`,
          ),
          e
        );
    }
    let r = n.count - 2,
      i = [];
    if (t === 2)
      for (let e = 1; e <= r; e++)
        (i.push(n.getX(0)), i.push(n.getX(e)), i.push(n.getX(e + 1)));
    else
      for (let e = 0; e < r; e++)
        e % 2 == 0
          ? (i.push(n.getX(e)), i.push(n.getX(e + 1)), i.push(n.getX(e + 2)))
          : (i.push(n.getX(e + 2)), i.push(n.getX(e + 1)), i.push(n.getX(e)));
    return (
      i.length / 3 !== r &&
        console.error(
          `THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`,
        ),
      e.setIndex(i),
      e.clearGroups(),
      e
    );
  }
  return (
    console.error(
      `THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,
      t,
    ),
    e
  );
}
function gt(e) {
  let t = new Map(),
    n = new Map(),
    r = e.clone();
  return (
    _t(e, r, function (e, r) {
      (t.set(r, e), n.set(e, r));
    }),
    r.traverse(function (e) {
      if (!e.isSkinnedMesh) return;
      let r = e,
        i = t.get(e),
        a = i.skeleton.bones;
      ((r.skeleton = i.skeleton.clone()),
        r.bindMatrix.copy(i.bindMatrix),
        (r.skeleton.bones = a.map(function (e) {
          return n.get(e);
        })),
        r.bind(r.skeleton, r.bindMatrix));
    }),
    r
  );
}
function _t(e, t, n) {
  n(e, t);
  for (let r = 0; r < e.children.length; r++)
    _t(e.children[r], t.children[r], n);
}
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
var R = {
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
  bt = class {
    constructor(e) {
      ((this.parser = e),
        (this.name = R.KHR_LIGHTS_PUNCTUAL),
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
        s = new P(16777215);
      a.color !== void 0 && s.setRGB(a.color[0], a.color[1], a.color[2], T);
      let c = a.range === void 0 ? 0 : a.range;
      switch (a.type) {
        case `directional`:
          ((o = new d(s)), o.target.position.set(0, 0, -1), o.add(o.target));
          break;
        case `point`:
          ((o = new ue(s)), (o.distance = c));
          break;
        case `spot`:
          ((o = new _(s)),
            (o.distance = c),
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
        W(o, a),
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
  xt = class {
    constructor() {
      this.name = R.KHR_MATERIALS_UNLIT;
    }
    getMaterialType() {
      return o;
    }
    extendParams(e, t, n) {
      let r = [];
      ((e.color = new P(1, 1, 1)), (e.opacity = 1));
      let i = t.pbrMetallicRoughness;
      if (i) {
        if (Array.isArray(i.baseColorFactor)) {
          let t = i.baseColorFactor;
          (e.color.setRGB(t[0], t[1], t[2], T), (e.opacity = t[3]));
        }
        i.baseColorTexture !== void 0 &&
          r.push(n.assignTexture(e, `map`, i.baseColorTexture, a));
      }
      return Promise.all(r);
    }
  },
  St = class {
    constructor(e) {
      ((this.parser = e), (this.name = R.KHR_MATERIALS_EMISSIVE_STRENGTH));
    }
    extendMaterialParams(e, t) {
      let n = L(this.parser, e, this.name);
      return (
        n === null ||
          (n.emissiveStrength !== void 0 &&
            (t.emissiveIntensity = n.emissiveStrength)),
        Promise.resolve()
      );
    }
  },
  Ct = class {
    constructor(e) {
      ((this.parser = e), (this.name = R.KHR_MATERIALS_CLEARCOAT));
    }
    getMaterialType(e) {
      return L(this.parser, e, this.name) === null ? null : t;
    }
    extendMaterialParams(e, t) {
      let n = L(this.parser, e, this.name);
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
        t.clearcoatNormalScale = new Ge(e, e);
      }
      return Promise.all(r);
    }
  },
  wt = class {
    constructor(e) {
      ((this.parser = e), (this.name = R.KHR_MATERIALS_DISPERSION));
    }
    getMaterialType(e) {
      return L(this.parser, e, this.name) === null ? null : t;
    }
    extendMaterialParams(e, t) {
      let n = L(this.parser, e, this.name);
      return (
        n === null ||
          (t.dispersion = n.dispersion === void 0 ? 0 : n.dispersion),
        Promise.resolve()
      );
    }
  },
  Tt = class {
    constructor(e) {
      ((this.parser = e), (this.name = R.KHR_MATERIALS_IRIDESCENCE));
    }
    getMaterialType(e) {
      return L(this.parser, e, this.name) === null ? null : t;
    }
    extendMaterialParams(e, t) {
      let n = L(this.parser, e, this.name);
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
  Et = class {
    constructor(e) {
      ((this.parser = e), (this.name = R.KHR_MATERIALS_SHEEN));
    }
    getMaterialType(e) {
      return L(this.parser, e, this.name) === null ? null : t;
    }
    extendMaterialParams(e, t) {
      let n = L(this.parser, e, this.name);
      if (n === null) return Promise.resolve();
      let r = [];
      if (
        ((t.sheenColor = new P(0, 0, 0)),
        (t.sheenRoughness = 0),
        (t.sheen = 1),
        n.sheenColorFactor !== void 0)
      ) {
        let e = n.sheenColorFactor;
        t.sheenColor.setRGB(e[0], e[1], e[2], T);
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
              a,
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
  Dt = class {
    constructor(e) {
      ((this.parser = e), (this.name = R.KHR_MATERIALS_TRANSMISSION));
    }
    getMaterialType(e) {
      return L(this.parser, e, this.name) === null ? null : t;
    }
    extendMaterialParams(e, t) {
      let n = L(this.parser, e, this.name);
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
  Ot = class {
    constructor(e) {
      ((this.parser = e), (this.name = R.KHR_MATERIALS_VOLUME));
    }
    getMaterialType(e) {
      return L(this.parser, e, this.name) === null ? null : t;
    }
    extendMaterialParams(e, t) {
      let n = L(this.parser, e, this.name);
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
        (t.attenuationColor = new P().setRGB(i[0], i[1], i[2], T)),
        Promise.all(r)
      );
    }
  },
  kt = class {
    constructor(e) {
      ((this.parser = e), (this.name = R.KHR_MATERIALS_IOR));
    }
    getMaterialType(e) {
      return L(this.parser, e, this.name) === null ? null : t;
    }
    extendMaterialParams(e, t) {
      let n = L(this.parser, e, this.name);
      return n === null
        ? Promise.resolve()
        : ((t.ior = n.ior === void 0 ? 1.5 : n.ior),
          t.ior === 0 && (t.ior = 1e3),
          Promise.resolve());
    }
  },
  At = class {
    constructor(e) {
      ((this.parser = e), (this.name = R.KHR_MATERIALS_SPECULAR));
    }
    getMaterialType(e) {
      return L(this.parser, e, this.name) === null ? null : t;
    }
    extendMaterialParams(e, t) {
      let n = L(this.parser, e, this.name);
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
        (t.specularColor = new P().setRGB(i[0], i[1], i[2], T)),
        n.specularColorTexture !== void 0 &&
          r.push(
            this.parser.assignTexture(
              t,
              `specularColorMap`,
              n.specularColorTexture,
              a,
            ),
          ),
        Promise.all(r)
      );
    }
  },
  jt = class {
    constructor(e) {
      ((this.parser = e), (this.name = R.EXT_MATERIALS_BUMP));
    }
    getMaterialType(e) {
      return L(this.parser, e, this.name) === null ? null : t;
    }
    extendMaterialParams(e, t) {
      let n = L(this.parser, e, this.name);
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
  Mt = class {
    constructor(e) {
      ((this.parser = e), (this.name = R.KHR_MATERIALS_ANISOTROPY));
    }
    getMaterialType(e) {
      return L(this.parser, e, this.name) === null ? null : t;
    }
    extendMaterialParams(e, t) {
      let n = L(this.parser, e, this.name);
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
  Nt = class {
    constructor(e) {
      ((this.parser = e), (this.name = R.KHR_TEXTURE_BASISU));
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
  Pt = class {
    constructor(e) {
      ((this.parser = e), (this.name = R.EXT_TEXTURE_WEBP));
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
  Ft = class {
    constructor(e) {
      ((this.parser = e), (this.name = R.EXT_TEXTURE_AVIF));
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
  Lt = class {
    constructor(e) {
      ((this.name = R.EXT_MESH_GPU_INSTANCING), (this.parser = e));
    }
    createNodeMesh(t) {
      let n = this.parser.json,
        r = n.nodes[t];
      if (!r.extensions || !r.extensions[this.name] || r.mesh === void 0)
        return null;
      let i = n.meshes[r.mesh];
      for (let e of i.primitives)
        if (
          e.mode !== B.TRIANGLES &&
          e.mode !== B.TRIANGLE_STRIP &&
          e.mode !== B.TRIANGLE_FAN &&
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
              let n = new N(),
                r = new A(),
                o = new k(),
                c = new A(1, 1, 1),
                l = new Ke(t.geometry, t.material, i);
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
                    ((u = new je()), (u.name = e.name));
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
  Rt = `glTF`,
  z = 12,
  zt = { JSON: 1313821514, BIN: 5130562 },
  Bt = class {
    constructor(e) {
      ((this.name = R.KHR_BINARY_GLTF),
        (this.content = null),
        (this.body = null));
      let t = new DataView(e, 0, z),
        n = new TextDecoder();
      if (
        ((this.header = {
          magic: n.decode(new Uint8Array(e.slice(0, 4))),
          version: t.getUint32(4, !0),
          length: t.getUint32(8, !0),
        }),
        this.header.magic !== Rt)
      )
        throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);
      if (this.header.version < 2)
        throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);
      let r = this.header.length - z,
        i = new DataView(e, z),
        a = 0;
      for (; a < r;) {
        let t = i.getUint32(a, !0);
        a += 4;
        let r = i.getUint32(a, !0);
        if (((a += 4), r === zt.JSON)) {
          let r = new Uint8Array(e, z + a, t);
          this.content = n.decode(r);
        } else if (r === zt.BIN) {
          let n = z + a;
          this.body = e.slice(n, n + t);
        }
        a += t;
      }
      if (this.content === null)
        throw Error(`THREE.GLTFLoader: JSON content not found.`);
    }
  },
  Vt = class {
    constructor(e, t) {
      if (!t)
        throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);
      ((this.name = R.KHR_DRACO_MESH_COMPRESSION),
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
        let t = Xt[e] || e.toLowerCase();
        o[t] = a[e];
      }
      for (let t in e.attributes) {
        let r = Xt[t] || t.toLowerCase();
        if (a[t] !== void 0) {
          let i = n.accessors[e.attributes[t]];
          ((c[r] = V[i.componentType].name), (s[r] = i.normalized === !0));
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
            T,
            n,
          );
        });
      });
    }
  },
  Ht = class {
    constructor() {
      this.name = R.KHR_TEXTURE_TRANSFORM;
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
  Ut = class {
    constructor() {
      this.name = R.KHR_MESH_QUANTIZATION;
    }
  },
  Wt = class extends Je {
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
  Gt = new k(),
  Kt = class extends Wt {
    interpolate_(e, t, n, r) {
      let i = super.interpolate_(e, t, n, r);
      return (Gt.fromArray(i).normalize().toArray(i), i);
    }
  },
  B = {
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
  V = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array,
  },
  qt = { 9728: x, 9729: O, 9984: c, 9985: Me, 9986: ee, 9987: Pe },
  Jt = { 33071: Se, 33648: y, 10497: Ce },
  Yt = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 },
  Xt = {
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
  H = {
    scale: `scale`,
    translation: `position`,
    rotation: `quaternion`,
    weights: `morphTargetInfluences`,
  },
  Zt = { CUBICSPLINE: void 0, LINEAR: Te, STEP: et },
  Qt = { OPAQUE: `OPAQUE`, MASK: `MASK`, BLEND: `BLEND` };
function $t(e) {
  return (
    e.DefaultMaterial === void 0 &&
      (e.DefaultMaterial = new Re({
        color: 16777215,
        emissive: 0,
        metalness: 1,
        roughness: 1,
        transparent: !1,
        depthTest: !0,
        side: 0,
      })),
    e.DefaultMaterial
  );
}
function U(e, t, n) {
  for (let r in n.extensions)
    e[r] === void 0 &&
      ((t.userData.gltfExtensions = t.userData.gltfExtensions || {}),
      (t.userData.gltfExtensions[r] = n.extensions[r]));
}
function W(e, t) {
  t.extras !== void 0 &&
    (typeof t.extras == `object`
      ? Object.assign(e.userData, t.extras)
      : console.warn(
          `THREE.GLTFLoader: Ignoring primitive type .extras, ` + t.extras,
        ));
}
function en(e, t, n) {
  let r = !1,
    i = !1,
    a = !1;
  for (let e = 0, n = t.length; e < n; e++) {
    let n = t[e];
    if (
      (n.POSITION !== void 0 && (r = !0),
      n.NORMAL !== void 0 && (i = !0),
      n.COLOR_0 !== void 0 && (a = !0),
      r && i && a)
    )
      break;
  }
  if (!r && !i && !a) return Promise.resolve(e);
  let o = [],
    s = [],
    c = [];
  for (let l = 0, u = t.length; l < u; l++) {
    let u = t[l];
    if (r) {
      let t =
        u.POSITION === void 0
          ? e.attributes.position
          : n.getDependency(`accessor`, u.POSITION);
      o.push(t);
    }
    if (i) {
      let t =
        u.NORMAL === void 0
          ? e.attributes.normal
          : n.getDependency(`accessor`, u.NORMAL);
      s.push(t);
    }
    if (a) {
      let t =
        u.COLOR_0 === void 0
          ? e.attributes.color
          : n.getDependency(`accessor`, u.COLOR_0);
      c.push(t);
    }
  }
  return Promise.all([Promise.all(o), Promise.all(s), Promise.all(c)]).then(
    function (t) {
      let n = t[0],
        o = t[1],
        s = t[2];
      return (
        r && (e.morphAttributes.position = n),
        i && (e.morphAttributes.normal = o),
        a && (e.morphAttributes.color = s),
        (e.morphTargetsRelative = !0),
        e
      );
    },
  );
}
function tn(e, t) {
  if ((e.updateMorphTargets(), t.weights !== void 0))
    for (let n = 0, r = t.weights.length; n < r; n++)
      e.morphTargetInfluences[n] = t.weights[n];
  if (t.extras && Array.isArray(t.extras.targetNames)) {
    let n = t.extras.targetNames;
    if (e.morphTargetInfluences.length === n.length) {
      e.morphTargetDictionary = {};
      for (let t = 0, r = n.length; t < r; t++)
        e.morphTargetDictionary[n[t]] = t;
    } else
      console.warn(
        `THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`,
      );
  }
}
function nn(e) {
  let t,
    n = e.extensions && e.extensions[R.KHR_DRACO_MESH_COMPRESSION];
  if (
    ((t = n
      ? `draco:` + n.bufferView + `:` + n.indices + `:` + rn(n.attributes)
      : e.indices + `:` + rn(e.attributes) + `:` + e.mode),
    e.targets !== void 0)
  )
    for (let n = 0, r = e.targets.length; n < r; n++)
      t += `:` + rn(e.targets[n]);
  return t;
}
function rn(e) {
  let t = ``,
    n = Object.keys(e).sort();
  for (let r = 0, i = n.length; r < i; r++) t += n[r] + `:` + e[n[r]] + `;`;
  return t;
}
function an(e) {
  switch (e) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw Error(
        `THREE.GLTFLoader: Unsupported normalized accessor component type.`,
      );
  }
}
function on(e) {
  return e.search(/\.jpe?g($|\?)/i) > 0 || e.search(/^data\:image\/jpeg/) === 0
    ? `image/jpeg`
    : e.search(/\.webp($|\?)/i) > 0 || e.search(/^data\:image\/webp/) === 0
      ? `image/webp`
      : e.search(/\.ktx2($|\?)/i) > 0 || e.search(/^data\:image\/ktx2/) === 0
        ? `image/ktx2`
        : `image/png`;
}
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
function ln(e, t, n) {
  let r = t.attributes,
    i = new Ye();
  if (r.POSITION !== void 0) {
    let e = n.json.accessors[r.POSITION],
      t = e.min,
      a = e.max;
    if (t !== void 0 && a !== void 0) {
      if (
        (i.set(new A(t[0], t[1], t[2]), new A(a[0], a[1], a[2])), e.normalized)
      ) {
        let t = an(V[e.componentType]);
        (i.min.multiplyScalar(t), i.max.multiplyScalar(t));
      }
    } else {
      console.warn(
        `THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`,
      );
      return;
    }
  } else return;
  let a = t.targets;
  if (a !== void 0) {
    let e = new A(),
      t = new A();
    for (let r = 0, i = a.length; r < i; r++) {
      let i = a[r];
      if (i.POSITION !== void 0) {
        let r = n.json.accessors[i.POSITION],
          a = r.min,
          o = r.max;
        if (a !== void 0 && o !== void 0) {
          if (
            (t.setX(Math.max(Math.abs(a[0]), Math.abs(o[0]))),
            t.setY(Math.max(Math.abs(a[1]), Math.abs(o[1]))),
            t.setZ(Math.max(Math.abs(a[2]), Math.abs(o[2]))),
            r.normalized)
          ) {
            let e = an(V[r.componentType]);
            t.multiplyScalar(e);
          }
          e.max(t);
        } else
          console.warn(
            `THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`,
          );
      }
    }
    i.expandByVector(e);
  }
  e.boundingBox = i;
  let o = new s();
  (i.getCenter(o.center),
    (o.radius = i.min.distanceTo(i.max) / 2),
    (e.boundingSphere = o));
}
function un(e, t, n) {
  let r = t.attributes,
    i = [];
  function a(t, r) {
    return n.getDependency(`accessor`, t).then(function (t) {
      e.setAttribute(r, t);
    });
  }
  for (let t in r) {
    let n = Xt[t] || t.toLowerCase();
    n in e.attributes || i.push(a(r[t], n));
  }
  if (t.indices !== void 0 && !e.index) {
    let r = n.getDependency(`accessor`, t.indices).then(function (t) {
      e.setIndex(t);
    });
    i.push(r);
  }
  return (
    ie.workingColorSpace !== `srgb-linear` &&
      `COLOR_0` in r &&
      console.warn(
        `THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ie.workingColorSpace}" not supported.`,
      ),
    W(e, t),
    ln(e, t, n),
    Promise.all(i).then(function () {
      return t.targets === void 0 ? e : en(e, t.targets, n);
    })
  );
}
var dn = class {
    constructor(e = 4) {
      ((this.pool = e),
        (this.queue = []),
        (this.workers = []),
        (this.workersResolve = []),
        (this.workerStatus = 0),
        (this.workerCreator = null));
    }
    _initWorker(e) {
      if (!this.workers[e]) {
        let t = this.workerCreator();
        (t.addEventListener(`message`, this._onMessage.bind(this, e)),
          (this.workers[e] = t));
      }
    }
    _getIdleWorker() {
      for (let e = 0; e < this.pool; e++)
        if (!(this.workerStatus & (1 << e))) return e;
      return -1;
    }
    _onMessage(e, t) {
      let n = this.workersResolve[e];
      if ((n && n(t), this.queue.length)) {
        let { resolve: t, msg: n, transfer: r } = this.queue.shift();
        ((this.workersResolve[e] = t), this.workers[e].postMessage(n, r));
      } else this.workerStatus ^= 1 << e;
    }
    setWorkerCreator(e) {
      this.workerCreator = e;
    }
    setWorkerLimit(e) {
      this.pool = e;
    }
    postMessage(e, t) {
      return new Promise((n) => {
        let r = this._getIdleWorker();
        r === -1
          ? this.queue.push({ resolve: n, msg: e, transfer: t })
          : (this._initWorker(r),
            (this.workerStatus |= 1 << r),
            (this.workersResolve[r] = n),
            this.workers[r].postMessage(e, t));
      });
    }
    dispose() {
      (this.workers.forEach((e) => e.terminate()),
        (this.workersResolve.length = 0),
        (this.workers.length = 0),
        (this.queue.length = 0),
        (this.workerStatus = 0));
    }
  },
  fn = 1000054e3,
  pn = 1000054001,
  mn = 1000054004,
  hn = 1000054005,
  gn = 1000066e3,
  _n = 1000066004,
  G = class {
    constructor(e, t, n, r) {
      ((this._dataView = void 0),
        (this._littleEndian = void 0),
        (this._offset = void 0),
        (this._dataView = new DataView(e.buffer, e.byteOffset + t, n)),
        (this._littleEndian = r),
        (this._offset = 0));
    }
    _nextUint8() {
      let e = this._dataView.getUint8(this._offset);
      return ((this._offset += 1), e);
    }
    _nextUint16() {
      let e = this._dataView.getUint16(this._offset, this._littleEndian);
      return ((this._offset += 2), e);
    }
    _nextUint32() {
      let e = this._dataView.getUint32(this._offset, this._littleEndian);
      return ((this._offset += 4), e);
    }
    _nextUint64() {
      let e =
        this._dataView.getUint32(this._offset, this._littleEndian) +
        2 ** 32 *
          this._dataView.getUint32(this._offset + 4, this._littleEndian);
      return ((this._offset += 8), e);
    }
    _nextInt32() {
      let e = this._dataView.getInt32(this._offset, this._littleEndian);
      return ((this._offset += 4), e);
    }
    _nextUint8Array(e) {
      let t = new Uint8Array(
        this._dataView.buffer,
        this._dataView.byteOffset + this._offset,
        e,
      );
      return ((this._offset += e), t);
    }
    _skip(e) {
      return ((this._offset += e), this);
    }
    _scan(e, t = 0) {
      let n = this._offset,
        r = 0;
      for (; this._dataView.getUint8(this._offset) !== t && r < e;)
        (r++, this._offset++);
      return (
        r < e && this._offset++,
        new Uint8Array(this._dataView.buffer, this._dataView.byteOffset + n, r)
      );
    }
  };
new Uint8Array([0]);
var K = [171, 75, 84, 88, 32, 50, 48, 187, 13, 10, 26, 10];
function vn(e) {
  return new TextDecoder().decode(e);
}
function yn(e) {
  let t = new Uint8Array(e.buffer, e.byteOffset, K.length);
  if (
    t[0] !== K[0] ||
    t[1] !== K[1] ||
    t[2] !== K[2] ||
    t[3] !== K[3] ||
    t[4] !== K[4] ||
    t[5] !== K[5] ||
    t[6] !== K[6] ||
    t[7] !== K[7] ||
    t[8] !== K[8] ||
    t[9] !== K[9] ||
    t[10] !== K[10] ||
    t[11] !== K[11]
  )
    throw Error(`Missing KTX 2.0 identifier.`);
  let n = {
      vkFormat: 0,
      typeSize: 1,
      pixelWidth: 0,
      pixelHeight: 0,
      pixelDepth: 0,
      layerCount: 0,
      faceCount: 1,
      levelCount: 0,
      supercompressionScheme: 0,
      levels: [],
      dataFormatDescriptor: [
        {
          vendorId: 0,
          descriptorType: 0,
          versionNumber: 2,
          colorModel: 0,
          colorPrimaries: 1,
          transferFunction: 2,
          flags: 0,
          texelBlockDimension: [0, 0, 0, 0],
          bytesPlane: [0, 0, 0, 0, 0, 0, 0, 0],
          samples: [],
        },
      ],
      keyValue: {},
      globalData: null,
    },
    r = 17 * Uint32Array.BYTES_PER_ELEMENT,
    i = new G(e, K.length, r, !0);
  ((n.vkFormat = i._nextUint32()),
    (n.typeSize = i._nextUint32()),
    (n.pixelWidth = i._nextUint32()),
    (n.pixelHeight = i._nextUint32()),
    (n.pixelDepth = i._nextUint32()),
    (n.layerCount = i._nextUint32()),
    (n.faceCount = i._nextUint32()),
    (n.levelCount = i._nextUint32()),
    (n.supercompressionScheme = i._nextUint32()));
  let a = i._nextUint32(),
    o = i._nextUint32(),
    s = i._nextUint32(),
    c = i._nextUint32(),
    l = i._nextUint64(),
    u = i._nextUint64(),
    d = 3 * Math.max(n.levelCount, 1) * 8,
    f = new G(e, K.length + r, d, !0);
  for (let t = 0, r = Math.max(n.levelCount, 1); t < r; t++)
    n.levels.push({
      levelData: new Uint8Array(
        e.buffer,
        e.byteOffset + f._nextUint64(),
        f._nextUint64(),
      ),
      uncompressedByteLength: f._nextUint64(),
    });
  let p = new G(e, a, o, !0);
  p._skip(4);
  let m = p._nextUint16(),
    h = p._nextUint16(),
    g = p._nextUint16(),
    _ = p._nextUint16(),
    v = {
      vendorId: m,
      descriptorType: h,
      versionNumber: g,
      colorModel: p._nextUint8(),
      colorPrimaries: p._nextUint8(),
      transferFunction: p._nextUint8(),
      flags: p._nextUint8(),
      texelBlockDimension: [
        p._nextUint8(),
        p._nextUint8(),
        p._nextUint8(),
        p._nextUint8(),
      ],
      bytesPlane: [
        p._nextUint8(),
        p._nextUint8(),
        p._nextUint8(),
        p._nextUint8(),
        p._nextUint8(),
        p._nextUint8(),
        p._nextUint8(),
        p._nextUint8(),
      ],
      samples: [],
    },
    y = (_ / 4 - 6) / 4;
  for (let e = 0; e < y; e++) {
    let t = {
      bitOffset: p._nextUint16(),
      bitLength: p._nextUint8(),
      channelType: p._nextUint8(),
      samplePosition: [
        p._nextUint8(),
        p._nextUint8(),
        p._nextUint8(),
        p._nextUint8(),
      ],
      sampleLower: -1 / 0,
      sampleUpper: 1 / 0,
    };
    (64 & t.channelType
      ? ((t.sampleLower = p._nextInt32()), (t.sampleUpper = p._nextInt32()))
      : ((t.sampleLower = p._nextUint32()), (t.sampleUpper = p._nextUint32())),
      (v.samples[e] = t));
  }
  ((n.dataFormatDescriptor.length = 0), n.dataFormatDescriptor.push(v));
  let b = new G(e, s, c, !0);
  for (; b._offset < c;) {
    let e = b._nextUint32(),
      t = b._scan(e),
      r = vn(t);
    if (
      ((n.keyValue[r] = b._nextUint8Array(e - t.byteLength - 1)),
      r.match(/^ktx/i))
    ) {
      let e = vn(n.keyValue[r]);
      n.keyValue[r] = e.substring(0, e.lastIndexOf(`\0`));
    }
    b._skip(e % 4 ? 4 - (e % 4) : 0);
  }
  if (u <= 0) return n;
  let x = new G(e, l, u, !0),
    S = x._nextUint16(),
    ee = x._nextUint16(),
    te = x._nextUint32(),
    ne = x._nextUint32(),
    re = x._nextUint32(),
    ie = x._nextUint32(),
    ae = [];
  for (let e = 0, t = Math.max(n.levelCount, 1); e < t; e++)
    ae.push({
      imageFlags: x._nextUint32(),
      rgbSliceByteOffset: x._nextUint32(),
      rgbSliceByteLength: x._nextUint32(),
      alphaSliceByteOffset: x._nextUint32(),
      alphaSliceByteLength: x._nextUint32(),
    });
  let oe = l + x._offset,
    se = oe + te,
    ce = se + ne,
    le = ce + re;
  return (
    (n.globalData = {
      endpointCount: S,
      selectorCount: ee,
      imageDescs: ae,
      endpointsData: new Uint8Array(e.buffer, e.byteOffset + oe, te),
      selectorsData: new Uint8Array(e.buffer, e.byteOffset + se, ne),
      tablesData: new Uint8Array(e.buffer, e.byteOffset + ce, re),
      extendedData: new Uint8Array(e.buffer, e.byteOffset + le, ie),
    }),
    n
  );
}
var bn = class {
    init() {
      return Promise.reject(
        Error(`KTX2Loader (avatars): raw zstd KTX2 is not supported`),
      );
    }
  },
  xn = `display-p3`,
  Sn = `display-p3-linear`,
  Cn = `basis_transcoder.wasm`,
  wn = `basis_transcoder.js`,
  Tn = new WeakMap(),
  En = 0,
  Dn,
  q = class e extends it {
    constructor(e) {
      (super(e),
        (this.transcoderPath = ``),
        (this.transcoderBinary = null),
        (this.transcoderPending = null),
        (this.workerPool = new dn()),
        (this.workerSourceURL = ``),
        (this.workerConfig = null),
        typeof MSC_TRANSCODER < `u` &&
          console.warn(
            `THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.`,
          ));
    }
    setTranscoderPath(e) {
      return ((this.transcoderPath = e), this);
    }
    setWorkerLimit(e) {
      return (this.workerPool.setWorkerLimit(e), this);
    }
    async detectSupportAsync(e) {
      return (
        console.warn(
          `KTX2Loader: "detectSupportAsync()" has been deprecated. Use "detectSupport()" and "await renderer.init();" when creating the renderer.`,
        ),
        await e.init(),
        this.detectSupport(e)
      );
    }
    detectSupport(e) {
      return (
        e.isWebGPURenderer === !0
          ? (this.workerConfig = {
              astcSupported: e.hasFeature(`texture-compression-astc`),
              astcHDRSupported: !1,
              etc1Supported: e.hasFeature(`texture-compression-etc1`),
              etc2Supported: e.hasFeature(`texture-compression-etc2`),
              dxtSupported: e.hasFeature(`texture-compression-s3tc`),
              bptcSupported: e.hasFeature(`texture-compression-bc`),
              pvrtcSupported: e.hasFeature(`texture-compression-pvrtc`),
            })
          : ((this.workerConfig = {
              astcSupported: e.extensions.has(`WEBGL_compressed_texture_astc`),
              astcHDRSupported:
                e.extensions.has(`WEBGL_compressed_texture_astc`) &&
                e.extensions
                  .get(`WEBGL_compressed_texture_astc`)
                  .getSupportedProfiles()
                  .includes(`hdr`),
              etc1Supported: e.extensions.has(`WEBGL_compressed_texture_etc1`),
              etc2Supported: e.extensions.has(`WEBGL_compressed_texture_etc`),
              dxtSupported: e.extensions.has(`WEBGL_compressed_texture_s3tc`),
              bptcSupported: e.extensions.has(`EXT_texture_compression_bptc`),
              pvrtcSupported:
                e.extensions.has(`WEBGL_compressed_texture_pvrtc`) ||
                e.extensions.has(`WEBKIT_WEBGL_compressed_texture_pvrtc`),
            }),
            typeof navigator < `u` &&
              navigator.platform !== void 0 &&
              navigator.userAgent !== void 0 &&
              navigator.platform.indexOf(`Linux`) >= 0 &&
              navigator.userAgent.indexOf(`Android`) < 0 &&
              this.workerConfig.astcSupported &&
              this.workerConfig.etc2Supported &&
              this.workerConfig.bptcSupported &&
              this.workerConfig.dxtSupported &&
              ((this.workerConfig.astcSupported = !1),
              (this.workerConfig.etc1Supported = !1),
              (this.workerConfig.etc2Supported = !1))),
        this
      );
    }
    init() {
      if (!this.transcoderPending) {
        let t = new C(this.manager);
        t.setWithCredentials(this.withCredentials);
        let n = new C(this.manager);
        (n.setWithCredentials(this.withCredentials),
          n.setResponseType(`arraybuffer`));
        let r, i;
        (this.transcoderPath === ``
          ? ((r = t.loadAsync(wn)), (i = n.loadAsync(Cn)))
          : (t.setPath(this.transcoderPath),
            (r = t.loadAsync(`basis_transcoder.js`)),
            n.setPath(this.transcoderPath),
            (i = n.loadAsync(`basis_transcoder.wasm`))),
          (this.transcoderPending = Promise.all([r, i]).then(([t, n]) => {
            let r = e.BasisWorker.toString(),
              i = [
                `/* constants */`,
                `let _EngineFormat = ` + JSON.stringify(e.EngineFormat),
                `let _EngineType = ` + JSON.stringify(e.EngineType),
                `let _TranscoderFormat = ` + JSON.stringify(e.TranscoderFormat),
                `let _BasisFormat = ` + JSON.stringify(e.BasisFormat),
                `/* basis_transcoder.js */`,
                t,
                `/* worker */`,
                r.substring(r.indexOf(`{`) + 1, r.lastIndexOf(`}`)),
              ].join(`
`);
            ((this.workerSourceURL = URL.createObjectURL(new Blob([i]))),
              (this.transcoderBinary = n),
              this.workerPool.setWorkerCreator(() => {
                let e = new Worker(this.workerSourceURL),
                  t = this.transcoderBinary.slice(0);
                return (
                  e.postMessage(
                    {
                      type: `init`,
                      config: this.workerConfig,
                      transcoderBinary: t,
                    },
                    [t],
                  ),
                  e
                );
              }));
          })),
          En > 0 &&
            console.warn(
              `THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances.`,
            ),
          En++);
      }
      return this.transcoderPending;
    }
    load(e, t, n, r) {
      if (this.workerConfig === null)
        throw Error(
          "THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.",
        );
      let i = new C(this.manager);
      (i.setPath(this.path),
        i.setCrossOrigin(this.crossOrigin),
        i.setWithCredentials(this.withCredentials),
        i.setRequestHeader(this.requestHeader),
        i.setResponseType(`arraybuffer`),
        i.load(
          e,
          (e) => {
            this.parse(e, t, r);
          },
          n,
          r,
        ));
    }
    parse(e, t, n) {
      if (this.workerConfig === null)
        throw Error(
          "THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.",
        );
      if (Tn.has(e)) return Tn.get(e).promise.then(t).catch(n);
      this._createTexture(e)
        .then((e) => (t ? t(e) : null))
        .catch(n);
    }
    _createTextureFrom(e, t) {
      let {
        type: n,
        error: i,
        data: {
          faces: a,
          width: o,
          height: s,
          format: c,
          type: l,
          dfdFlags: u,
        },
      } = e;
      if (n === `error`) return Promise.reject(i);
      let d;
      if (t.faceCount === 6) d = new at(a, c, l);
      else {
        let e = a[0].mipmaps;
        d =
          t.layerCount > 1
            ? new r(e, o, s, t.layerCount, c, l)
            : new se(e, o, s, c, l);
      }
      return (
        (d.minFilter = a[0].mipmaps.length === 1 ? O : Pe),
        (d.magFilter = O),
        (d.generateMipmaps = !1),
        (d.needsUpdate = !0),
        (d.colorSpace = Mn(t)),
        (d.premultiplyAlpha = !!(u & 1)),
        d
      );
    }
    async _createTexture(e, t = {}) {
      let n = yn(new Uint8Array(e)),
        r =
          n.vkFormat === 1000066e3 &&
          n.dataFormatDescriptor[0].colorModel === 167;
      if (!(n.vkFormat === 0 || (r && !this.workerConfig.astcHDRSupported)))
        return jn(n);
      let i = t,
        a = this.init()
          .then(() =>
            this.workerPool.postMessage(
              { type: `transcode`, buffer: e, taskConfig: i },
              [e],
            ),
          )
          .then((e) => this._createTextureFrom(e.data, n));
      return (Tn.set(e, { promise: a }), a);
    }
    dispose() {
      (this.workerPool.dispose(),
        this.workerSourceURL && URL.revokeObjectURL(this.workerSourceURL),
        En--);
    }
  };
((q.BasisFormat = { ETC1S: 0, UASTC: 1, UASTC_HDR: 2 }),
  (q.TranscoderFormat = {
    ETC1: 0,
    ETC2: 1,
    BC1: 2,
    BC3: 3,
    BC4: 4,
    BC5: 5,
    BC7_M6_OPAQUE_ONLY: 6,
    BC7_M5: 7,
    PVRTC1_4_RGB: 8,
    PVRTC1_4_RGBA: 9,
    ASTC_4x4: 10,
    ATC_RGB: 11,
    ATC_RGBA_INTERPOLATED_ALPHA: 12,
    RGBA32: 13,
    RGB565: 14,
    BGR565: 15,
    RGBA4444: 16,
    BC6H: 22,
    RGB_HALF: 24,
    RGBA_HALF: 25,
  }),
  (q.EngineFormat = {
    RGBAFormat: E,
    RGBA_ASTC_4x4_Format: j,
    RGB_BPTC_UNSIGNED_Format: nt,
    RGBA_BPTC_Format: Qe,
    RGBA_ETC2_EAC_Format: Fe,
    RGBA_PVRTC_4BPPV1_Format: qe,
    RGBA_S3TC_DXT5_Format: we,
    RGB_ETC1_Format: Ee,
    RGB_ETC2_Format: ke,
    RGB_PVRTC_4BPPV1_Format: Xe,
    RGBA_S3TC_DXT1_Format: $e,
  }),
  (q.EngineType = { UnsignedByteType: m, HalfFloatType: w, FloatType: fe }),
  (q.BasisWorker = function () {
    let e,
      t,
      n,
      r = _EngineFormat,
      i = _EngineType,
      a = _TranscoderFormat,
      o = _BasisFormat;
    self.addEventListener(`message`, function (n) {
      let r = n.data;
      switch (r.type) {
        case `init`:
          ((e = r.config), s(r.transcoderBinary));
          break;
        case `transcode`:
          t.then(() => {
            try {
              let {
                faces: e,
                buffers: t,
                width: n,
                height: i,
                hasAlpha: a,
                format: o,
                type: s,
                dfdFlags: l,
              } = c(r.buffer);
              self.postMessage(
                {
                  type: `transcode`,
                  id: r.id,
                  data: {
                    faces: e,
                    width: n,
                    height: i,
                    hasAlpha: a,
                    format: o,
                    type: s,
                    dfdFlags: l,
                  },
                },
                t,
              );
            } catch (e) {
              (console.error(e),
                self.postMessage({
                  type: `error`,
                  id: r.id,
                  error: e.message,
                }));
            }
          });
      }
    });
    function s(e) {
      t = new Promise((t) => {
        ((n = { wasmBinary: e, onRuntimeInitialized: t }), BASIS(n));
      }).then(() => {
        (n.initializeBasis(),
          n.KTX2File === void 0 &&
            console.warn(
              `THREE.KTX2Loader: Please update Basis Universal transcoder.`,
            ));
      });
    }
    function c(e) {
      let t = new n.KTX2File(new Uint8Array(e));
      function r() {
        (t.close(), t.delete());
      }
      if (!t.isValid())
        throw (
          r(),
          Error(`THREE.KTX2Loader:	Invalid or unsupported .ktx2 file`)
        );
      let a;
      if (t.isUASTC()) a = o.UASTC;
      else if (t.isETC1S()) a = o.ETC1S;
      else if (t.isHDR()) a = o.UASTC_HDR;
      else throw Error(`THREE.KTX2Loader: Unknown Basis encoding`);
      let s = t.getWidth(),
        c = t.getHeight(),
        l = t.getLayers() || 1,
        u = t.getLevels(),
        f = t.getFaces(),
        m = t.getHasAlpha(),
        h = t.getDFDFlags(),
        { transcoderFormat: g, engineFormat: _, engineType: v } = d(a, s, c, m);
      if (!s || !c || !u)
        throw (r(), Error(`THREE.KTX2Loader:	Invalid texture`));
      if (!t.startTranscoding())
        throw (r(), Error(`THREE.KTX2Loader: .startTranscoding failed`));
      let y = [],
        b = [];
      for (let e = 0; e < f; e++) {
        let n = [];
        for (let a = 0; a < u; a++) {
          let o = [],
            s,
            c;
          for (let n = 0; n < l; n++) {
            let l = t.getImageLevelInfo(a, n, e);
            (e === 0 &&
              a === 0 &&
              n === 0 &&
              (l.origWidth % 4 != 0 || l.origHeight % 4 != 0) &&
              console.warn(
                `THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions.`,
              ),
              u > 1
                ? ((s = l.origWidth), (c = l.origHeight))
                : ((s = l.width), (c = l.height)));
            let d = new Uint8Array(t.getImageTranscodedSizeInBytes(a, n, 0, g)),
              f = t.transcodeImage(d, a, n, e, g, 0, -1, -1);
            if (
              (v === i.HalfFloatType &&
                (d = new Uint16Array(
                  d.buffer,
                  d.byteOffset,
                  d.byteLength / Uint16Array.BYTES_PER_ELEMENT,
                )),
              !f)
            )
              throw (r(), Error(`THREE.KTX2Loader: .transcodeImage failed.`));
            o.push(d);
          }
          let d = p(o);
          (n.push({ data: d, width: s, height: c }), b.push(d.buffer));
        }
        y.push({ mipmaps: n, width: s, height: c, format: _, type: v });
      }
      return (
        r(),
        {
          faces: y,
          buffers: b,
          width: s,
          height: c,
          hasAlpha: m,
          dfdFlags: h,
          format: _,
          type: v,
        }
      );
    }
    let l = [
        {
          if: `astcSupported`,
          basisFormat: [o.UASTC],
          transcoderFormat: [a.ASTC_4x4, a.ASTC_4x4],
          engineFormat: [r.RGBA_ASTC_4x4_Format, r.RGBA_ASTC_4x4_Format],
          engineType: [i.UnsignedByteType],
          priorityETC1S: 1 / 0,
          priorityUASTC: 1,
          needsPowerOfTwo: !1,
        },
        {
          if: `bptcSupported`,
          basisFormat: [o.ETC1S, o.UASTC],
          transcoderFormat: [a.BC7_M5, a.BC7_M5],
          engineFormat: [r.RGBA_BPTC_Format, r.RGBA_BPTC_Format],
          engineType: [i.UnsignedByteType],
          priorityETC1S: 3,
          priorityUASTC: 2,
          needsPowerOfTwo: !1,
        },
        {
          if: `dxtSupported`,
          basisFormat: [o.ETC1S, o.UASTC],
          transcoderFormat: [a.BC1, a.BC3],
          engineFormat: [r.RGBA_S3TC_DXT1_Format, r.RGBA_S3TC_DXT5_Format],
          engineType: [i.UnsignedByteType],
          priorityETC1S: 4,
          priorityUASTC: 5,
          needsPowerOfTwo: !1,
        },
        {
          if: `etc2Supported`,
          basisFormat: [o.ETC1S, o.UASTC],
          transcoderFormat: [a.ETC1, a.ETC2],
          engineFormat: [r.RGB_ETC2_Format, r.RGBA_ETC2_EAC_Format],
          engineType: [i.UnsignedByteType],
          priorityETC1S: 1,
          priorityUASTC: 3,
          needsPowerOfTwo: !1,
        },
        {
          if: `etc1Supported`,
          basisFormat: [o.ETC1S, o.UASTC],
          transcoderFormat: [a.ETC1],
          engineFormat: [r.RGB_ETC1_Format],
          engineType: [i.UnsignedByteType],
          priorityETC1S: 2,
          priorityUASTC: 4,
          needsPowerOfTwo: !1,
        },
        {
          if: `pvrtcSupported`,
          basisFormat: [o.ETC1S, o.UASTC],
          transcoderFormat: [a.PVRTC1_4_RGB, a.PVRTC1_4_RGBA],
          engineFormat: [r.RGB_PVRTC_4BPPV1_Format, r.RGBA_PVRTC_4BPPV1_Format],
          engineType: [i.UnsignedByteType],
          priorityETC1S: 5,
          priorityUASTC: 6,
          needsPowerOfTwo: !0,
        },
        {
          if: `bptcSupported`,
          basisFormat: [o.UASTC_HDR],
          transcoderFormat: [a.BC6H],
          engineFormat: [r.RGB_BPTC_UNSIGNED_Format],
          engineType: [i.HalfFloatType],
          priorityHDR: 1,
          needsPowerOfTwo: !1,
        },
        {
          basisFormat: [o.ETC1S, o.UASTC],
          transcoderFormat: [a.RGBA32, a.RGBA32],
          engineFormat: [r.RGBAFormat, r.RGBAFormat],
          engineType: [i.UnsignedByteType, i.UnsignedByteType],
          priorityETC1S: 100,
          priorityUASTC: 100,
          needsPowerOfTwo: !1,
        },
        {
          basisFormat: [o.UASTC_HDR],
          transcoderFormat: [a.RGBA_HALF],
          engineFormat: [r.RGBAFormat],
          engineType: [i.HalfFloatType],
          priorityHDR: 100,
          needsPowerOfTwo: !1,
        },
      ],
      u = {
        [o.ETC1S]: l
          .filter((e) => e.basisFormat.includes(o.ETC1S))
          .sort((e, t) => e.priorityETC1S - t.priorityETC1S),
        [o.UASTC]: l
          .filter((e) => e.basisFormat.includes(o.UASTC))
          .sort((e, t) => e.priorityUASTC - t.priorityUASTC),
        [o.UASTC_HDR]: l
          .filter((e) => e.basisFormat.includes(o.UASTC_HDR))
          .sort((e, t) => e.priorityHDR - t.priorityHDR),
      };
    function d(t, n, r, i) {
      let a = u[t];
      for (let o = 0; o < a.length; o++) {
        let s = a[o];
        if (
          (!s.if || e[s.if]) &&
          s.basisFormat.includes(t) &&
          !(i && s.transcoderFormat.length < 2) &&
          (!s.needsPowerOfTwo || (f(n) && f(r)))
        )
          return {
            transcoderFormat: s.transcoderFormat[+!!i],
            engineFormat: s.engineFormat[+!!i],
            engineType: s.engineType[0],
          };
      }
      throw Error(`THREE.KTX2Loader: Failed to identify transcoding target.`);
    }
    function f(e) {
      return e <= 2 || (!(e & (e - 1)) && e !== 0);
    }
    function p(e) {
      if (e.length === 1) return e[0];
      let t = 0;
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        t += r.byteLength;
      }
      let n = new Uint8Array(t),
        r = 0;
      for (let t = 0; t < e.length; t++) {
        let i = e[t];
        (n.set(i, r), (r += i.byteLength));
      }
      return n;
    }
  }));
var On = new Set([E, Ve, D, M]),
  kn = new Set([91]),
  An = {
    109: E,
    103: D,
    100: M,
    97: E,
    83: D,
    76: M,
    91: E,
    43: E,
    37: E,
    22: D,
    16: D,
    15: M,
    9: M,
    123: Ve,
    122: Ve,
    152: Fe,
    148: ke,
    153: ge,
    154: ae,
    155: ne,
    156: ce,
    [gn]: j,
    158: j,
    157: j,
    [_n]: We,
    166: We,
    165: We,
    134: $e,
    133: $e,
    132: He,
    131: He,
    138: we,
    137: we,
    140: ot,
    139: ve,
    142: i,
    141: me,
    146: Qe,
    145: Qe,
    [hn]: qe,
    [pn]: qe,
    [mn]: ye,
    [fn]: ye,
  },
  J = {
    109: fe,
    103: fe,
    100: fe,
    97: w,
    83: w,
    76: w,
    91: tt,
    43: m,
    37: m,
    22: m,
    16: m,
    15: m,
    9: m,
    123: _e,
    122: he,
    152: m,
    148: m,
    153: m,
    154: m,
    155: m,
    156: m,
    [gn]: w,
    158: m,
    157: m,
    [_n]: w,
    166: m,
    165: m,
    134: m,
    133: m,
    132: m,
    131: m,
    138: m,
    137: m,
    140: m,
    139: m,
    142: m,
    141: m,
    146: m,
    145: m,
    [hn]: m,
    [pn]: m,
    [mn]: m,
    [fn]: m,
  };
async function jn(e) {
  let { vkFormat: t } = e;
  if (An[t] === void 0)
    throw Error(`THREE.KTX2Loader: Unsupported vkFormat: ` + t);
  J[t] === void 0 &&
    console.warn(`THREE.KTX2Loader: Missing ".type" for vkFormat: ` + t);
  let n;
  e.supercompressionScheme === 2 &&
    ((Dn ||= new Promise(async (e) => {
      let t = new bn();
      (await t.init(), e(t));
    })),
    (n = await Dn));
  let r = [];
  for (let i = 0; i < e.levels.length; i++) {
    let a = Math.max(1, e.pixelWidth >> i),
      o = Math.max(1, e.pixelHeight >> i),
      s = e.pixelDepth ? Math.max(1, e.pixelDepth >> i) : 0,
      c = e.levels[i],
      l;
    if (e.supercompressionScheme === 0) l = c.levelData;
    else if (e.supercompressionScheme === 2)
      l = n.decode(c.levelData, c.uncompressedByteLength);
    else throw Error(`THREE.KTX2Loader: Unsupported supercompressionScheme.`);
    let u;
    ((u =
      J[t] === 1015
        ? new Float32Array(
            l.buffer,
            l.byteOffset,
            l.byteLength / Float32Array.BYTES_PER_ELEMENT,
          )
        : J[t] === 1016 || J[t] === 1012
          ? new Uint16Array(
              l.buffer,
              l.byteOffset,
              l.byteLength / Uint16Array.BYTES_PER_ELEMENT,
            )
          : J[t] === 35902 || J[t] === 35899
            ? new Uint32Array(
                l.buffer,
                l.byteOffset,
                l.byteLength / Uint32Array.BYTES_PER_ELEMENT,
              )
            : l),
      r.push({ data: u, width: a, height: o, depth: s }));
  }
  let i = e.levelCount === 0 || r.length > 1,
    a;
  if (On.has(An[t]))
    ((a =
      e.pixelDepth === 0
        ? new Le(r[0].data, e.pixelWidth, e.pixelHeight)
        : new ze(r[0].data, e.pixelWidth, e.pixelHeight, e.pixelDepth)),
      (a.minFilter = i ? c : x),
      (a.magFilter = x),
      (a.generateMipmaps = e.levelCount === 0),
      (a.normalized = kn.has(t)));
  else {
    if (e.pixelDepth > 0)
      throw Error(`THREE.KTX2Loader: Unsupported pixelDepth.`);
    ((a = new se(r, e.pixelWidth, e.pixelHeight)),
      (a.minFilter = i ? Pe : O),
      (a.magFilter = O));
  }
  return (
    (a.mipmaps = r),
    (a.type = J[t]),
    (a.format = An[t]),
    (a.colorSpace = Mn(e)),
    (a.needsUpdate = !0),
    Promise.resolve(a)
  );
}
function Mn(e) {
  let t = e.dataFormatDescriptor[0];
  return t.colorPrimaries === 1
    ? t.transferFunction === 2
      ? a
      : T
    : t.colorPrimaries === 10
      ? t.transferFunction === 2
        ? xn
        : Sn
      : (t.colorPrimaries === 0 ||
          console.warn(
            `THREE.KTX2Loader: Unsupported color primaries, "${t.colorPrimaries}"`,
          ),
        ``);
}
var Nn = (function () {
    var e = `b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb`,
      t = `b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb`,
      n = new Uint8Array([
        0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2, 0, 0, 5, 3, 1,
        0, 1, 12, 1, 0, 10, 22, 2, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0,
        11, 7, 0, 65, 0, 253, 15, 26, 11,
      ]),
      r = new Uint8Array([
        32, 0, 65, 2, 1, 106, 34, 33, 3, 128, 11, 4, 13, 64, 6, 253, 10, 7, 15,
        116, 127, 5, 8, 12, 40, 16, 19, 54, 20, 9, 27, 255, 113, 17, 42, 67, 24,
        23, 146, 148, 18, 14, 22, 45, 70, 69, 56, 114, 101, 21, 25, 63, 75, 136,
        108, 28, 118, 29, 73, 115,
      ]);
    if (typeof WebAssembly != `object`) return { supported: !1 };
    var i = WebAssembly.validate(n) ? s(t) : s(e),
      a,
      o = WebAssembly.instantiate(i, {}).then(function (e) {
        ((a = e.instance), a.exports.__wasm_call_ctors());
      });
    function s(e) {
      for (var t = new Uint8Array(e.length), n = 0; n < e.length; ++n) {
        var i = e.charCodeAt(n);
        t[n] = i > 96 ? i - 97 : i > 64 ? i - 39 : i + 4;
      }
      for (var a = 0, n = 0; n < e.length; ++n)
        t[a++] = t[n] < 60 ? r[t[n]] : (t[n] - 60) * 64 + t[++n];
      return t.buffer.slice(0, a);
    }
    function c(e, t, n, r, i, a, o) {
      var s = e.exports.sbrk,
        c = (r + 3) & -4,
        l = s(c * i),
        u = s(a.length),
        d = new Uint8Array(e.exports.memory.buffer);
      d.set(a, u);
      var f = t(l, r, i, u, a.length);
      if (
        (f == 0 && o && o(l, c, i),
        n.set(d.subarray(l, l + r * i)),
        s(l - s(0)),
        f != 0)
      )
        throw Error(`Malformed buffer data: ` + f);
    }
    var l = {
        NONE: ``,
        OCTAHEDRAL: `meshopt_decodeFilterOct`,
        QUATERNION: `meshopt_decodeFilterQuat`,
        EXPONENTIAL: `meshopt_decodeFilterExp`,
        COLOR: `meshopt_decodeFilterColor`,
      },
      u = {
        ATTRIBUTES: `meshopt_decodeVertexBuffer`,
        TRIANGLES: `meshopt_decodeIndexBuffer`,
        INDICES: `meshopt_decodeIndexSequence`,
      },
      d = [],
      f = 0;
    function p(e) {
      var t = { object: new Worker(e), pending: 0, requests: {} };
      return (
        (t.object.onmessage = function (e) {
          var n = e.data;
          ((t.pending -= n.count),
            t.requests[n.id][n.action](n.value),
            delete t.requests[n.id]);
        }),
        t
      );
    }
    function m(e) {
      for (
        var t =
            `self.ready = WebAssembly.instantiate(new Uint8Array([` +
            new Uint8Array(i) +
            `]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = ` +
            g.name +
            `;` +
            c.toString() +
            g.toString(),
          n = new Blob([t], { type: `text/javascript` }),
          r = URL.createObjectURL(n),
          a = d.length;
        a < e;
        ++a
      )
        d[a] = p(r);
      for (var a = e; a < d.length; ++a) d[a].object.postMessage({});
      ((d.length = e), URL.revokeObjectURL(r));
    }
    function h(e, t, n, r, i) {
      for (var a = d[0], o = 1; o < d.length; ++o)
        d[o].pending < a.pending && (a = d[o]);
      return new Promise(function (o, s) {
        var c = new Uint8Array(n),
          l = ++f;
        ((a.pending += e),
          (a.requests[l] = { resolve: o, reject: s }),
          a.object.postMessage(
            { id: l, count: e, size: t, source: c, mode: r, filter: i },
            [c.buffer],
          ));
      });
    }
    function g(e) {
      var t = e.data;
      self.ready.then(function (e) {
        if (!t.id) return self.close();
        try {
          var n = new Uint8Array(t.count * t.size);
          (c(
            e,
            e.exports[t.mode],
            n,
            t.count,
            t.size,
            t.source,
            e.exports[t.filter],
          ),
            self.postMessage(
              { id: t.id, count: t.count, action: `resolve`, value: n },
              [n.buffer],
            ));
        } catch (e) {
          self.postMessage({
            id: t.id,
            count: t.count,
            action: `reject`,
            value: e,
          });
        }
      });
    }
    return {
      ready: o,
      supported: !0,
      useWorkers: function (e) {
        m(e);
      },
      decodeVertexBuffer: function (e, t, n, r, i) {
        c(a, a.exports.meshopt_decodeVertexBuffer, e, t, n, r, a.exports[l[i]]);
      },
      decodeIndexBuffer: function (e, t, n, r) {
        c(a, a.exports.meshopt_decodeIndexBuffer, e, t, n, r);
      },
      decodeIndexSequence: function (e, t, n, r) {
        c(a, a.exports.meshopt_decodeIndexSequence, e, t, n, r);
      },
      decodeGltfBuffer: function (e, t, n, r, i, o) {
        c(a, a.exports[u[i]], e, t, n, r, a.exports[l[o]]);
      },
      decodeGltfBufferAsync: function (e, t, n, r, i) {
        return d.length > 0
          ? h(e, t, n, u[r], l[i])
          : o.then(function () {
              var o = new Uint8Array(e * t);
              return (c(a, a.exports[u[r]], o, e, t, n, a.exports[l[i]]), o);
            });
      },
    };
  })(),
  Pn = {
    [I.hips]: `Bip01 Pelvis`,
    [I.spine]: `Bip01 Spine`,
    [I.chest]: `Bip01 Spine1`,
    [I.neck]: `Bip01 Neck`,
    [I.head]: `Bip01 Head`,
    [I.shoulderL]: `Bip01 L Clavicle`,
    [I.armL]: `Bip01 L UpperArm`,
    [I.foreL]: `Bip01 L Forearm`,
    [I.handL]: `Bip01 L Hand`,
    [I.shoulderR]: `Bip01 R Clavicle`,
    [I.armR]: `Bip01 R UpperArm`,
    [I.foreR]: `Bip01 R Forearm`,
    [I.handR]: `Bip01 R Hand`,
    [I.thighL]: `Bip01 L Thigh`,
    [I.shinL]: `Bip01 L Calf`,
    [I.footL]: `Bip01 L Foot`,
    [I.thighR]: `Bip01 R Thigh`,
    [I.shinR]: `Bip01 R Calf`,
    [I.footR]: `Bip01 R Foot`,
    [I.jaw]: `Bip01 MJaw`,
    [I.eyeL]: `Bip01 LEye`,
    [I.eyeR]: `Bip01 REye`,
  },
  Fn = 0.1,
  Y = 0.07,
  In = 1,
  Ln = 2,
  Rn = 3,
  zn = 4,
  X = new k(),
  Bn = new k(),
  Vn = new A(),
  Hn = new A();
function Un(e, t, n) {
  return n.setFromUnitVectors(Vn.copy(e).normalize(), Hn.copy(t).normalize());
}
function Wn(e, t, n) {
  let r = e.x * t.x + e.y * t.y + e.z * t.z;
  n.set(t.x * r, t.y * r, t.z * r, e.w);
  let i = Math.hypot(n.x, n.y, n.z, n.w);
  return i < 1e-8 ? n.identity() : n.set(n.x / i, n.y / i, n.z / i, n.w / i);
}
var Gn = class {
    proxy;
    bip = [];
    parentIdx;
    sem;
    role;
    fingerK;
    side;
    Qref = [];
    Pref = [];
    Lref = [];
    Oref = [];
    Q = [];
    P = [];
    Qs = [];
    Ps = [];
    qInv = new k();
    qTmp = new k();
    qTw = new k();
    vTmp = new A();
    lidTopOfs = new A();
    lidBotOfs = new A();
    armAxis = [new A(), new A()];
    constructor(e) {
      let t = [];
      (e.traverse((e) => {
        e.isBone && t.push(e);
      }),
        (this.bip = t));
      let n = t.length,
        r = new Map();
      (t.forEach((e, t) => r.set(e, t)),
        (this.parentIdx = new Int16Array(n)),
        (this.sem = new Int16Array(n).fill(-1)),
        (this.role = new Uint8Array(n)),
        (this.fingerK = new Float32Array(n)),
        (this.side = new Int8Array(n)));
      let i = new Map(t.map((e, t) => [e.name.replace(/_/g, ` `), t])),
        a = (e) => i.get(e) ?? -1;
      for (let e = 0; e < n; e++) {
        this.parentIdx[e] = r.get(t[e].parent) ?? -1;
        let n = t[e].name.replace(/_/g, ` `);
        this.side[e] = / L |LEye|^Bip01 L/.test(n)
          ? -1
          : +!!/ R |REye|^Bip01 R/.test(n);
        let i = n.match(/ (L|R) Finger(\d)(\d?)$/);
        (i &&
          ((this.role[e] = Ln),
          (this.fingerK[e] =
            (i[3] === `` ? 1 : Number(i[3]) + 1) + (i[2] === `0` ? 10 : 0))),
          n === `Bip01 Spine2` && (this.role[e] = In),
          /EyeBlinkTop$/.test(n) && (this.role[e] = Rn),
          /EyeBlinkBottom$/.test(n) && (this.role[e] = zn));
      }
      for (let [e, t] of Object.entries(Pn)) {
        let n = a(t);
        n >= 0 && (this.sem[n] = Number(e));
      }
      e.parent?.updateWorldMatrix(!0, !0);
      let o = new N().copy(e.parent.matrixWorld).invert(),
        s = [],
        c = [],
        l = new N(),
        u = new A();
      for (let e = 0; e < n; e++) {
        l.multiplyMatrices(o, t[e].matrixWorld);
        let n = new k(),
          r = new A();
        (l.decompose(r, n, u),
          s.push(n),
          c.push(r),
          this.Q.push(new k()),
          this.P.push(new A()));
      }
      let d = [],
        f = (e, t) => {
          let n = a(t);
          return (n >= 0 && this.parentIdx[n], n);
        },
        p = {
          "Bip01 L UpperArm": [
            `Bip01 L Forearm`,
            new A(-Math.sin(Fn), -Math.cos(Fn), 0),
          ],
          "Bip01 L Forearm": [
            `Bip01 L Hand`,
            new A(-Math.sin(Y), -Math.cos(Y), 0),
          ],
          "Bip01 L Hand": [
            `Bip01 L Finger2`,
            new A(-Math.sin(Y), -Math.cos(Y), -0.02),
          ],
          "Bip01 R UpperArm": [
            `Bip01 R Forearm`,
            new A(Math.sin(Fn), -Math.cos(Fn), 0),
          ],
          "Bip01 R Forearm": [
            `Bip01 R Hand`,
            new A(Math.sin(Y), -Math.cos(Y), 0),
          ],
          "Bip01 R Hand": [
            `Bip01 R Finger2`,
            new A(Math.sin(Y), -Math.cos(Y), -0.02),
          ],
          "Bip01 L Thigh": [`Bip01 L Calf`, new A(0.012, -1, 0)],
          "Bip01 L Calf": [`Bip01 L Foot`, new A(0, -1, 0)],
          "Bip01 R Thigh": [`Bip01 R Calf`, new A(-0.012, -1, 0)],
          "Bip01 R Calf": [`Bip01 R Foot`, new A(0, -1, 0)],
        };
      for (let e = 0; e < n; e++) {
        let n = this.parentIdx[e],
          r = new k();
        n >= 0 && r.copy(d[n]);
        let i = t[e].name.replace(/_/g, ` `),
          a = p[i];
        if (a) {
          let t = f(e, a[0]);
          t >= 0 &&
            (Un(new A().subVectors(c[t], c[e]).applyQuaternion(r), a[1], X),
            r.premultiply(X));
        }
        (/ (L|R) Foot$/.test(i) && r.identity(), d.push(r));
      }
      for (let e = 0; e < n; e++) {
        let t = this.parentIdx[e];
        (this.Qref.push(d[e].clone().multiply(s[e])),
          t < 0
            ? this.Pref.push(c[e].clone())
            : this.Pref.push(
                new A()
                  .subVectors(c[e], c[t])
                  .applyQuaternion(d[t])
                  .add(this.Pref[t]),
              ));
      }
      for (let e = 0; e < n; e++) {
        let t = this.parentIdx[e];
        if (t < 0)
          (this.Lref.push(this.Qref[e].clone()),
            this.Oref.push(this.Pref[e].clone()));
        else {
          let n = this.Qref[t].clone().invert();
          (this.Lref.push(n.clone().multiply(this.Qref[e])),
            this.Oref.push(
              new A().subVectors(this.Pref[e], this.Pref[t]).applyQuaternion(n),
            ));
        }
      }
      let m = a(`Bip01 LEye`),
        h = a(`Bip01 LEyeBlinkTop`),
        g = a(`Bip01 LEyeBlinkBottom`);
      if (m >= 0 && h >= 0 && g >= 0) {
        let e = Math.max(0.004, this.Pref[h].y - this.Pref[g].y);
        (this.lidTopOfs.set(0, -e * 0.82, -0.0015),
          this.lidBotOfs.set(0, e * 0.18, -5e-4));
      }
      let _ = [],
        v = (e) => (e >= 0 ? this.Pref[e].clone() : null);
      for (let e = 0; e < 27; e++) {
        let t = Pn[e];
        _.push(v(t ? a(t) : -1) ?? new A());
      }
      let y = _,
        b = (e, t) => {
          let n = a(t);
          y[e === I.handL ? I.fingersL : I.fingersR] =
            n >= 0
              ? this.Pref[n].clone()
              : y[e].clone().add(new A(0, -0.09, 0));
        };
      (b(I.handL, `Bip01 L Finger2`),
        b(I.handR, `Bip01 R Finger2`),
        a(`Bip01 MJaw`) < 0 &&
          (y[I.jaw] = y[I.head].clone().add(new A(0, 0.02, -0.02))),
        a(`Bip01 LEye`) < 0 &&
          (y[I.eyeL] = y[I.head].clone().add(new A(-0.032, 0.08, -0.09))),
        a(`Bip01 REye`) < 0 &&
          (y[I.eyeR] = y[I.head].clone().add(new A(0.032, 0.08, -0.09))),
        (y[I.lidL] = y[I.eyeL].clone()),
        (y[I.lidR] = y[I.eyeR].clone()),
        (y[I.hair] = y[I.head].clone().add(new A(0, 0.2, 0.02))));
      let x = [];
      for (let e = 0; e < 27; e++) {
        let t = new Oe();
        ((t.name = `sem:${ft[e]}`), x.push(t));
      }
      for (let e = 0; e < 27; e++) {
        let t = pt[e];
        (t >= 0
          ? (x[t].add(x[e]), x[e].position.subVectors(y[e], y[t]))
          : x[e].position.copy(y[e]),
          x[e].scale.set(1, e === I.lidL || e === I.lidR ? 0.001 : 1, 1));
      }
      let S = 0;
      for (let e of t) S = Math.max(S, e.position.y);
      this.proxy = {
        bones: x,
        rest: x.map((e) => e.position.clone()),
        joints: _,
        root: x[I.hips],
        height: S,
        thighLen: y[I.thighL].distanceTo(y[I.shinL]),
        shinLen: y[I.shinL].distanceTo(y[I.footL]),
      };
      for (let e = 0; e < 27; e++)
        (this.Qs.push(new k()), this.Ps.push(new A()));
      (this.armAxis[0].copy(y[I.handL]).sub(y[I.foreL]).normalize(),
        this.armAxis[1].copy(y[I.handR]).sub(y[I.foreR]).normalize());
    }
    get boneCount() {
      return this.bip.length;
    }
    reset() {
      for (let e of this.proxy.bones) e.rotation.set(0, 0, 0);
      for (let e = 0; e < 27; e++)
        this.proxy.bones[e].position.copy(this.proxy.rest[e]);
      this.update();
    }
    update() {
      let e = this.proxy.bones,
        t = this.Qs,
        n = this.Ps;
      for (let r = 0; r < 2; r++)
        for (let r = 0; r < 27; r++) {
          let i = pt[r],
            a = e[r];
          i < 0
            ? (t[r].copy(a.quaternion), n[r].copy(a.position))
            : (t[r].multiplyQuaternions(t[i], a.quaternion),
              n[r].copy(a.position).applyQuaternion(t[i]).add(n[i]));
        }
      let r = this.bip.length,
        i = this.Q,
        a = this.P,
        o = e[I.lidL].scale.y,
        s = e[I.lidR].scale.y;
      for (let c = 0; c < r; c++) {
        let r = this.parentIdx[c],
          l = this.sem[c];
        if (l >= 0) {
          if (l === I.chest)
            (this.qTmp.copy(e[I.chest].quaternion),
              X.identity().slerp(this.qTmp, 0.5),
              i[c].multiplyQuaternions(t[I.spine], X).multiply(this.Qref[c]));
          else if (l === I.foreL || l === I.foreR) {
            let n = this.armAxis[l === I.foreL ? 0 : 1];
            (Wn(e[l].quaternion, n, this.qTw),
              this.qInv.copy(this.qTw).invert(),
              X.copy(e[l].quaternion).multiply(this.qInv),
              Bn.identity().slerp(this.qTw, 0.5),
              X.multiply(Bn),
              i[c].multiplyQuaternions(t[pt[l]], X).multiply(this.Qref[c]));
          } else i[c].multiplyQuaternions(t[l], this.Qref[c]);
          a[c].copy(n[l]);
        } else if (r >= 0) {
          let n = this.role[c];
          if (n === In) i[c].multiplyQuaternions(t[I.chest], this.Qref[c]);
          else if (n === Ln) {
            let t = e[this.side[c] < 0 ? I.fingersL : I.fingersR].quaternion,
              n = this.fingerK[c],
              a = n > 10 ? 0.15 : n === 1 ? 0.5 : 0.6;
            (X.identity().slerp(t, a),
              this.qInv.copy(this.Qref[r]).invert(),
              i[c]
                .multiplyQuaternions(i[r], this.qInv)
                .multiply(X)
                .multiply(this.Qref[c]));
          } else i[c].multiplyQuaternions(i[r], this.Lref[c]);
          if (
            (a[c].copy(this.Oref[c]).applyQuaternion(i[r]).add(a[r]),
            n === Rn || n === zn)
          ) {
            let e = this.side[c] < 0 ? o : s,
              t = Math.max(0, Math.min(1, (e - 0.001) / 0.999));
            t > 0 &&
              (this.vTmp
                .copy(n === Rn ? this.lidTopOfs : this.lidBotOfs)
                .multiplyScalar(t),
              this.qTmp.copy(i[r]).multiply(Bn.copy(this.Qref[r]).invert()),
              a[c].add(this.vTmp.applyQuaternion(this.qTmp)));
          }
        } else (i[c].copy(this.Qref[c]), a[c].copy(this.Pref[c]));
      }
      for (let e = 0; e < r; e++) {
        let t = this.bip[e],
          n = this.parentIdx[e];
        n < 0
          ? (t.quaternion.copy(i[e]), t.position.copy(a[e]))
          : (this.qInv.copy(i[n]).invert(),
            t.quaternion.multiplyQuaternions(this.qInv, i[e]),
            t.position.subVectors(a[e], a[n]).applyQuaternion(this.qInv));
      }
    }
  },
  Kn = `
uniform float uNight;
uniform float uWet;
uniform float uSss;
float gSkin;
float gCloth;
float gHair;
vec3 gAlbedo;
`,
  qn = `
#ifdef RBX_CARDS
  gSkin = 0.0; gCloth = 0.0; gHair = 1.0;
  #ifdef RBX_FRINGE
    if (diffuseColor.a >= 0.5) discard;
    diffuseColor.a = smoothstep(0.04, 0.5, diffuseColor.a) * 0.9;
  #endif
#else
  {
    // mask: R skin · G roughness · B kind (0…0.5 cloth-sheen weight, 0.5…1 hair weight)
    vec4 rbxM = texture2D(roughnessMap, vRoughnessMapUv);
    gSkin = rbxM.r;
    gCloth = rbxM.b < 0.5 ? rbxM.b * 2.0 : 0.0;
    gHair = clamp((rbxM.b - 0.5) * 2.0, 0.0, 1.0);
  }
#endif
  diffuseColor.rgb *= 1.0 - uWet * (0.24 * gCloth + 0.12 * gHair + 0.03 * gSkin);
  gAlbedo = diffuseColor.rgb;
`,
  Jn = `
#ifdef RBX_CARDS
  roughnessFactor = 0.62;
#endif
  // rain: cloth soaks darker & glossier, skin and hair get a wet sheen
  roughnessFactor = mix(roughnessFactor, min(roughnessFactor, 0.28 + 0.2 * gCloth), uWet * 0.75);
`,
  Yn = `
void rbxDirect(const in IncidentLight directLight, const in vec3 N, const in vec3 V, inout ReflectedLight reflectedLight) {
  vec3 L = directLight.direction;
  float ndl = dot(N, L);
  float ndv = clamp(dot(N, V), 0.0, 1.0);
  if (gSkin > 0.01) {
    float wrapR = clamp((ndl + 0.55) / 1.55, 0.0, 1.0);
    float wrapG = clamp((ndl + 0.25) / 1.25, 0.0, 1.0);
    float lam = clamp(ndl, 0.0, 1.0);
    vec3 scatter = vec3(wrapR * wrapR, wrapG * wrapG, wrapG * wrapG * 0.92) - vec3(lam);
    reflectedLight.directDiffuse += directLight.color * gAlbedo * max(scatter, vec3(0.0)) * vec3(0.9, 0.42, 0.32) * RECIPROCAL_PI * gSkin * uSss;
    float back = pow(clamp(dot(V, -L), 0.0, 1.0), 4.0) * pow(1.0 - ndv, 2.0);
    reflectedLight.directDiffuse += directLight.color * gAlbedo * vec3(1.0, 0.3, 0.2) * back * 0.3 * gSkin * uSss;
  }
  if (gHair > 0.01) {
    // Kajiya-Kay along the strand direction ≈ "down the head" projected on the surface
    vec3 upV = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
    vec3 T = normalize(upV - N * dot(N, upV) + 1e-5);
    vec3 H = normalize(L + V);
    vec3 T1 = normalize(T + N * 0.1), T2 = normalize(T - N * 0.12);
    float th1 = dot(T1, H), th2 = dot(T2, H);
    float s1 = pow(sqrt(max(0.0, 1.0 - th1 * th1)), 90.0);
    float s2 = pow(sqrt(max(0.0, 1.0 - th2 * th2)), 18.0);
    float vis = smoothstep(-0.1, 0.4, ndl);
    reflectedLight.directSpecular += directLight.color * vis * gHair * (vec3(0.06) * s1 + min(gAlbedo, vec3(0.28)) * 0.8 * s2) * (1.0 + 1.5 * uWet);
    // strands light from any side: softer terminator
    float tl = dot(T, L);
    float kd = sqrt(max(0.0, 1.0 - tl * tl));
    reflectedLight.directDiffuse += directLight.color * gAlbedo * RECIPROCAL_PI * gHair * max(0.0, 0.3 * kd * smoothstep(-0.4, 0.3, ndl) - 0.22 * max(ndl, 0.0));
  }
  if (gCloth > 0.01) {
    float wrap = clamp((ndl + 0.3) / 1.3, 0.0, 1.0);
    float sheen = pow(1.0 - ndv, 4.0) * 0.5;
    reflectedLight.directSpecular += directLight.color * gAlbedo * sheen * wrap * RECIPROCAL_PI * gCloth;
  }
}
void RE_Direct_Physical(const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
  RE_Direct_Physical_Base(directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight);
  rbxDirect(directLight, geometryNormal, geometryViewDir, reflectedLight);
}
`,
  Xn = `
  {
    vec3 Vv = normalize(vViewPosition);
    float ndv = clamp(dot(normal, Vv), 0.0, 1.0);
    float rim = pow(1.0 - ndv, 3.0);
    vec3 upV = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
    float up = dot(normal, upV) * 0.5 + 0.5;
    float day = 1.0 - uNight;
    // night readability: soft overhead fill + cool city-light rim
    totalEmissiveRadiance += diffuseColor.rgb * uNight * (0.035 + 0.09 * up);
    totalEmissiveRadiance += vec3(0.62, 0.72, 1.0) * rim * (0.012 + 0.14 * uNight) * (0.35 + 0.65 * dot(diffuseColor.rgb, vec3(0.33)));
    // skin: warm bounce (light scattered inside skin never looks grey in shade)
    totalEmissiveRadiance += diffuseColor.rgb * vec3(1.0, 0.5, 0.4) * (0.008 + 0.014 * day) * (0.6 + 0.4 * up) * gSkin * uSss;
  }
`;
function Zn(e, t) {
  ((e.onBeforeCompile = (n) => {
    ((n.uniforms.uNight = lt.uNight),
      (n.uniforms.uWet = lt.uWet),
      (n.uniforms.uSss = { value: 1 }),
      (e.userData.shader = n));
    let r = Ue.lights_physical_pars_fragment.replace(
        `void RE_Direct_Physical(`,
        `void RE_Direct_Physical_Base(`,
      ),
      i =
        (t === `hair` || t === `fringe`
          ? `#define RBX_CARDS
`
          : ``) +
        (t === `fringe`
          ? `#define RBX_FRINGE
`
          : ``);
    n.fragmentShader = n.fragmentShader
      .replace(
        `#include <common>`,
        i +
          `#include <common>
` +
          Kn,
      )
      .replace(
        `#include <lights_physical_pars_fragment>`,
        r +
          `
` +
          Yn,
      )
      .replace(
        `#include <map_fragment>`,
        `#include <map_fragment>
` + qn,
      )
      .replace(
        `#include <roughnessmap_fragment>`,
        `#include <roughnessmap_fragment>
` + Jn,
      )
      .replace(
        `#include <emissivemap_fragment>`,
        `#include <emissivemap_fragment>
` + Xn,
      );
  }),
    (e.customProgramCacheKey = () =>
      `rbx-avatar-v2-${t === `head` ? `body` : t}`));
}
function Qn(e, t, n = {}) {
  let r = `rbx:${t}`,
    i = e.userData[r];
  if (i) return i;
  let a = t === `hair` || t === `fringe`,
    o = new Re({
      name: `rbx-${t}`,
      map: e.map,
      normalMap: a ? null : e.normalMap,
      roughnessMap: a ? null : e.roughnessMap,
      roughness: a ? 0.62 : 1,
      envMapIntensity: a ? 0.35 : 1,
      metalness: 0,
      side: a || t === `atlas` ? 2 : 0,
      alphaTest:
        t === `hair` || t === `atlas` ? 0.5 : t === `fringe` ? 0.04 : 0,
      transparent: t === `fringe`,
      depthWrite: t !== `fringe`,
    });
  return (
    o.normalMap &&
      (o.normalScale.copy(e.normalScale),
      n.flipNormalY && (o.normalScale.y *= -1)),
    o.map && (o.map.anisotropy = 8),
    Zn(o, t),
    (e.userData[r] = o),
    o
  );
}
function $n(e, t) {
  let n = e.userData.shader;
  n && (n.uniforms.uSss.value = t);
}
var er = `/avatars/`,
  tr = null,
  nr = null,
  rr = new Map(),
  Z = {
    files: 0,
    releasedMB: 0,
    pendingMaps: 0,
    halvedMB: 0,
    ktx2Starts: 0,
    ktx2Releases: 0,
    get ktx2Workers() {
      return $?.workerPool?.workers.length ?? 0;
    },
  };
typeof window < `u` && (window.__avatarMem = Z);
function ir() {
  return (
    (tr ||= fetch(`${er}manifest.json`).then((e) => {
      if (!e.ok) throw Error(`avatars: manifest ${e.status}`);
      return e.json();
    })),
    tr
  );
}
function ar() {
  return (nr || ((nr = new vt()), nr.setMeshoptDecoder(Nn)), nr);
}
var or = null,
  Q = null,
  $ = null,
  sr = null,
  cr = 0,
  lr = null,
  ur = 5e3,
  dr = [
    `WEBGL_compressed_texture_astc`,
    `WEBGL_compressed_texture_etc`,
    `WEBGL_compressed_texture_etc1`,
    `WEBGL_compressed_texture_s3tc`,
    `EXT_texture_compression_bptc`,
    `WEBGL_compressed_texture_pvrtc`,
    `WEBKIT_WEBGL_compressed_texture_pvrtc`,
  ];
function fr(e) {
  or = e;
}
var pr = () => or ?? mt.renderer;
function mr(e) {
  try {
    return typeof location < `u`
      ? new URLSearchParams(location.search).get(e)
      : null;
  } catch {
    return null;
  }
}
function hr() {
  let e = pr();
  if (e) return { src: e, release: () => {} };
  if (typeof document > `u`) return null;
  let t = document.createElement(`canvas`).getContext(`webgl2`);
  if (!t) return null;
  let n = new Set(t.getSupportedExtensions() ?? []);
  return {
    src: {
      extensions: { has: (e) => n.has(e), get: (e) => t.getExtension(e) },
    },
    release: () => t.getExtension(`WEBGL_lose_context`)?.loseContext(),
  };
}
function gr() {
  if (Q) return Q;
  let e = mr(`avatartex`);
  if (e === `webp` || e === `ktx2`) return (Q = e);
  if (
    typeof WebAssembly != `object` ||
    typeof Worker > `u` ||
    typeof Blob > `u`
  )
    return (Q = `webp`);
  let t = hr();
  if (!t) return (Q = `webp`);
  let n = dr.some((e) => t.src.extensions.has(e));
  return (n && vr(t.src), t.release(), (Q = n ? `ktx2` : `webp`));
}
function _r() {
  if (mt.mobile !== null) return mt.mobile;
  try {
    return ct().mobile;
  } catch {
    return !1;
  }
}
function vr(e) {
  let t = new q();
  (t.setTranscoderPath(`${er}basis/`),
    t.setWorkerLimit(_r() ? 1 : 2),
    Z.ktx2Starts++,
    t.detectSupport(e));
  let n = mr(`avatarktxfmt`),
    r = t.workerConfig;
  if (n && r) for (let e of Object.keys(r)) r[e] = e === `${n}Supported`;
  (($ = t), (sr = t.init()), sr.catch(() => {}));
}
function yr() {
  if (!$ && Q === `ktx2`) {
    let e = hr();
    e && (vr(e.src), e.release());
  }
  return $;
}
function br() {
  (lr && clearTimeout(lr),
    (lr = setTimeout(() => {
      ((lr = null),
        !(cr > 0 || !$) &&
          ($.dispose(),
          ($ = null),
          (sr = null),
          nr?.setKTX2Loader(null),
          Z.ktx2Releases++));
    }, ur)));
}
var xr = {
    [j]: `ASTC 4×4`,
    [Qe]: `BC7`,
    [$e]: `BC1`,
    [we]: `BC3`,
    [ke]: `ETC2 RGB`,
    [Fe]: `ETC2 RGBA`,
    [Ee]: `ETC1`,
    [Xe]: `PVRTC RGB`,
    [qe]: `PVRTC RGBA`,
    [E]: `RGBA8`,
  },
  Sr = 512,
  Cr = 8;
function wr(e) {
  let t = e;
  if (t.isCompressedTexture) {
    let e = 0;
    for (let n of t.mipmaps) e += n?.data?.byteLength ?? 0;
    return e;
  }
  let n = e.image;
  return (n?.width ?? 0) * (n?.height ?? 0) * 4;
}
function Tr(e) {
  let t = e;
  if (t.isCompressedTexture) {
    let n = t.mipmaps;
    if (!n || n.length < 2 || n[0].width < Sr) return 0;
    let r = n.shift();
    return (
      (e.image = { width: n[0].width, height: n[0].height }),
      r.data?.byteLength ?? 0
    );
  }
  let n = e.image;
  if (
    !(
      (typeof ImageBitmap < `u` && n instanceof ImageBitmap) ||
      (typeof HTMLImageElement < `u` && n instanceof HTMLImageElement)
    ) ||
    !n.width ||
    n.width < Sr ||
    typeof document > `u`
  )
    return 0;
  let r = document.createElement(`canvas`);
  ((r.width = n.width >> 1), (r.height = n.height >> 1));
  let i = r.getContext(`2d`);
  if (!i) return 0;
  ((i.imageSmoothingQuality = `high`), i.drawImage(n, 0, 0, r.width, r.height));
  let a = (n.width * n.height - r.width * r.height) * 4;
  return (n.close?.(), (e.image = r), a);
}
function Er(e) {
  (Z.pendingMaps++, dt(e));
  let t = e.onUpdate,
    n = !1;
  e.onUpdate = (r) => {
    let i = n ? 0 : wr(e);
    if ((t?.call(e, r), n)) return;
    ((n = !0), Z.pendingMaps--, (Z.releasedMB += i / 1048576));
    let a = e;
    a.isCompressedTexture && (a.mipmaps = []);
  };
}
function Dr(e, t, n) {
  let r = new Map(),
    i = new Map();
  e.traverse((e) => {
    let t = e.material;
    if (t && e.isMesh)
      for (let e of [t.map, t.normalMap, t.roughnessMap, t.metalnessMap])
        e &&
          (r.has(e) || i.set(e.source, (i.get(e.source) ?? 0) + 1),
          r.set(e, r.get(e) || e === t.map));
  });
  let a = pr(),
    o = n.role === `hero`,
    s = !!a && o && mt.halveHeroMaps === !0,
    c = new Set(),
    l = 0;
  for (let [e, t] of r) {
    (s && (Z.halvedMB += Tr(e) / 1048576), o && t && a && (e.anisotropy = Cr));
    let n = e;
    (n.isCompressedTexture
      ? ((l += wr(e)), c.add(xr[n.format] ?? `format ${n.format}`))
      : ((l += Math.round(wr(e) * (4 / 3))), c.add(`RGBA8`)),
      i.get(e.source) === 1 && Er(e));
  }
  let u = 0;
  if (a) {
    let e = performance.now();
    for (let e of r.keys()) a.initTexture(e);
    u = performance.now() - e;
  }
  return { mode: t, gpuBytes: l, formats: [...c], uploadMs: u };
}
function Or(e) {
  let t = e.parser;
  return (
    t &&
      (t.cache?.removeAll(),
      (t.textureCache = {}),
      (t.sourceCache = {}),
      t.associations?.clear(),
      (t.extensions = {})),
    { scene: e.scene }
  );
}
async function kr(e, t) {
  let n = ar();
  if (!t) return n.loadAsync(`${er}${e}`);
  let r = yr();
  if (!r) throw Error(`avatars: KTX2 loader unavailable`);
  cr++;
  try {
    return (
      await ut(Promise.resolve(sr), 1e4, `avatars: KTX2 transcoder`),
      n.setKTX2Loader(r),
      await n.loadAsync(`${er}${e}`)
    );
  } finally {
    (cr--, br());
  }
}
function Ar(e) {
  let t = rr.get(e);
  return (
    t ||
      ((t = (async () => {
        let t = (await ir()).avatars.find((t) => t.id === e);
        if (!t) throw Error(`avatars: unknown avatar ${e}`);
        let n = performance.now(),
          r = t.fallback ? gr() : `webp`,
          i;
        try {
          i = await kr(
            r === `ktx2` ? t.file : (t.fallback ?? t.file),
            r === `ktx2`,
          );
        } catch (n) {
          if (r !== `ktx2` || !t.fallback) throw n;
          (console.warn(
            `[avatars] KTX2 failed for ${e}, using WebP textures:`,
            n,
          ),
            (Q = r = `webp`),
            (i = await kr(t.fallback, !1)));
        }
        let a = Dr(i.scene, r, t);
        return (
          Z.files++,
          { entry: t, gltf: Or(i), loadMs: performance.now() - n, textures: a }
        );
      })()),
      rr.set(e, t)),
    t
  );
}
function jr(e) {
  let t = rr.get(e);
  t &&
    (rr.delete(e),
    t.then(
      (e) => {
        e.gltf.scene.traverse((e) => {
          let t = e;
          if (!t.isMesh) return;
          t.geometry?.dispose();
          let n = t.material;
          if (n) {
            for (let e of [n.map, n.normalMap, n.roughnessMap, n.metalnessMap])
              e?.dispose();
            for (let e of Object.keys(n.userData))
              e.startsWith(`rbx:`) && n.userData[e].dispose?.();
            n.dispose();
          }
        });
      },
      () => {},
    ));
}
function Mr(e) {
  for (let t of e)
    Ar(t).catch((e) => console.warn(`[avatars] preload failed`, t, e));
}
function Nr(e) {
  return e.startsWith(`hair`)
    ? `hair`
    : e.startsWith(`head`)
      ? `head`
      : e.startsWith(`atlas`)
        ? `atlas`
        : `body`;
}
var Pr = class {
  root = new p();
  meshes = [];
  adapter;
  entry;
  textures;
  bones;
  height;
  triangles;
  playerRig = null;
  skeletonParent;
  constructor(e, t = {}) {
    ((this.entry = e.entry),
      (this.textures = e.textures),
      (this.root.name = `avatar-${e.entry.id}`));
    let n = gt(e.gltf.scene);
    this.root.add(n);
    let r = null,
      i = 0,
      a = e.entry.role === `hero`,
      o = t.fringe ?? a,
      s = [];
    n.traverse((n) => {
      let a = n;
      a.isBone && !r && /Pelvis$/.test(a.name) && (r = a);
      let c = n;
      if (!c.isSkinnedMesh) return;
      let l = c.material,
        u = Nr(l.name);
      if (
        ((c.material = Qn(l, u)),
        (c.castShadow = t.castShadow ?? !0),
        (c.receiveShadow = t.receiveShadow ?? !0),
        (c.name = `${e.entry.id}-${u}`),
        this.meshes.push(c),
        (i +=
          (c.geometry.index
            ? c.geometry.index.count
            : c.geometry.attributes.position.count) / 3),
        u === `hair` && o)
      ) {
        let t = new S(c.geometry, Qn(l, `fringe`));
        ((t.name = `${e.entry.id}-fringe`),
          t.position.copy(c.position),
          t.quaternion.copy(c.quaternion),
          t.scale.copy(c.scale),
          (t.renderOrder = 2),
          (t.castShadow = !1),
          (t.receiveShadow = !0),
          s.push([c.parent, t]),
          this.meshes.push(t));
      }
    });
    for (let [e, t] of s) {
      e.add(t);
      let n = this.meshes.find((e) => e.geometry === t.geometry && e !== t);
      t.bind(n.skeleton, n.bindMatrix);
    }
    if (!r) throw Error(`avatars: no Bip01 Pelvis`);
    ((this.triangles = i),
      (this.adapter = new Gn(r)),
      (this.skeletonParent = r.parent),
      (this.bones = this.adapter.proxy.bones),
      (this.height = e.entry.height),
      (this.adapter.proxy.height = this.height),
      this.adapter.reset(),
      this.root.updateMatrixWorld(!0));
    for (let e of this.meshes)
      (e.computeBoundingSphere(), (e.boundingSphere.radius *= 1.35));
  }
  update() {
    this.adapter.update();
  }
  get drawCalls() {
    return this.meshes.length;
  }
  asRiggedCharacter(e) {
    let t = this.adapter.proxy;
    return {
      desc: e,
      lod: 0,
      root: this.root,
      mesh: this.meshes[0],
      bones: t.bones,
      skeleton: this.meshes[0].skeleton,
      rest: t.rest,
      joints: t.joints,
      triangles: this.triangles,
      breakdown: {},
      trim: 0,
      height: this.height,
      thighLen: t.thighLen,
      shinLen: t.shinLen,
      dispose: () => this.dispose(),
    };
  }
  toPlayerRig() {
    if (this.playerRig) return this.playerRig;
    this.skeletonParent.add(this.adapter.proxy.root);
    let e = this.adapter.proxy,
      t = e.joints,
      n = Array(33),
      r = Array(33);
    [
      I.hips,
      I.spine,
      I.chest,
      I.neck,
      I.head,
      I.armL,
      I.foreL,
      I.handL,
      I.armR,
      I.foreR,
      I.handR,
      I.thighL,
      I.shinL,
      I.footL,
      I.thighR,
      I.shinR,
      I.footR,
      I.hair,
    ].forEach((i, a) => {
      ((n[a] = e.bones[i]), (r[a] = t[i].clone()));
    });
    let i = [
      [22, I.fingersL],
      [23, I.fingersR],
      [28, I.lidL],
      [29, I.lidR],
      [30, I.shoulderL],
      [31, I.shoulderR],
      [32, I.jaw],
    ];
    for (let [a, o] of i) ((n[a] = e.bones[o]), (r[a] = t[o].clone()));
    let a = (e, n) => t[e].clone().lerp(t[n], 0.6),
      o = [
        [18, I.handR],
        [19, I.handR],
        [20, I.handR],
        [21, I.handL],
        [24, I.head],
        [25, I.head],
        [26, I.handL],
        [27, I.handL],
      ];
    for (let [i, s] of o) {
      let o = new Oe();
      o.name = `socket-${i}`;
      let c =
        s === I.head
          ? new A(0, t[I.hair].y, t[I.head].z)
          : a(s, s === I.handR ? I.fingersR : I.fingersL);
      ((r[i] = c.clone()),
        o.position.copy(c).sub(t[s]),
        e.bones[s].add(o),
        (n[i] = o));
    }
    let s = (e, t) => Math.atan2(-(t.z - e.z), -(t.y - e.y));
    return (
      (this.playerRig = {
        bones: n,
        rest: n.map((e) => e.position.clone()),
        joints: r,
        thighLen: e.thighLen,
        shinLen: e.shinLen,
        hipHeight: t[I.hips].y,
        thighRest: s(t[I.thighL], t[I.shinL]),
        shinRest: s(t[I.shinL], t[I.footL]),
      }),
      this.playerRig
    );
  }
  dispose() {
    this.root.removeFromParent();
  }
};
async function Fr(e, t = {}) {
  return new Pr(await Ar(e), t);
}
function Ir(e, t, n = 12) {
  return t > n && e.lod1 ? e.lod1 : e.id;
}
export {
  Ar as a,
  jr as c,
  $n as d,
  Pn as f,
  Fr as i,
  fr as l,
  ir as n,
  Ir as o,
  Gn as p,
  gr as r,
  Mr as s,
  Pr as t,
  Qn as u,
};
