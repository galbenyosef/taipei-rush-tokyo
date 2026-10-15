// tokyo/assets/engine-wUBYs8Z3 10 — data
// Lines 2912-3215 of readable/tokyo/assets/engine-wUBYs8Z3.pretty.js (statement-aligned).
function Tr(e, t) {
  let n = 4;
  switch (e) {
    case oe:
    case ke:
    case Me:
    case g:
      n = 1;
      break;
    case fe:
    case ue:
      n = 2;
      break;
    case y:
      return 4;
  }
  switch (t) {
    case i:
    case ce:
      return 2;
    case T:
    case E:
      return 4;
    case ne:
    case f:
      return n;
    case h:
    case De:
    case te:
      return n * 2;
    default:
      return n * 4;
  }
}
function Er(e) {
  let t = e.userData?.gpuBytes;
  return typeof t == `number` && t > 0 ? t : Dr(e);
}
function Dr(e) {
  let t = e;
  if (t.isCompressedTexture) {
    let e = 0;
    for (let n of t.mipmaps ?? []) e += n?.data?.byteLength ?? 0;
    return e;
  }
  let n = e.image;
  if (!n) return 0;
  let r = e.isCubeTexture,
    i = r && Array.isArray(e.image) ? e.image[0] : n,
    a = i?.width ?? 0,
    o = i?.height ?? 0,
    s = e.isDataArrayTexture || e.isData3DTexture ? (n.depth ?? 1) : r ? 6 : 1,
    c =
      R(n) ||
      Cr(n) ||
      (typeof HTMLImageElement < `u` && n instanceof HTMLImageElement)
        ? 4
        : Tr(e.format, e.type),
    l = e.generateMipmaps && e.minFilter !== 1006 && e.minFilter !== 1003;
  return a * o * s * c * (l ? 4 / 3 : 1);
}
function Or(e) {
  let t = e.userData;
  if (!t || t.__gbV === e.version) return;
  let n = Dr(e);
  n > 0 && ((t.gpuBytes = Math.round(n)), (t.__gbV = e.version));
}
var kr = Symbol(`tgta.onUpdate`);
{
  let e = w.prototype;
  Object.getOwnPropertyDescriptor(e, `onUpdate`)?.get ||
    Object.defineProperty(e, "onUpdate", {
      configurable: !0,
      enumerable: !1,
      get() {
        let e = this[kr];
        return function (t) {
          (t && t.isTexture && Or(t), e && e.call(this, t));
        };
      },
      set(e) {
        this[kr] = e;
      },
    });
}
function Ar(e) {
  let t = Object.getOwnPropertyDescriptor(e, `onUpdate`),
    n = e,
    r;
  if (t && `value` in t) {
    let e = t.value;
    ((n.onUpdate = null), (r = () => void (n.onUpdate = e)));
  } else {
    let e = n[kr];
    ((n[kr] = null), (r = () => void (n[kr] = e)));
  }
  let i = !1;
  return (t) => {
    if (!i && ((i = !0), r(), t))
      try {
        n.onUpdate?.call(e, e);
      } catch (e) {
        console.warn(`[gpuMem] texture onUpdate hook failed`, e);
      }
  };
}
function jr(e) {
  if (e.__rel) return;
  let t = e.array;
  ((L.geoMB += t.byteLength / 1048576),
    (e.__rel = 1),
    (e.array = new t.constructor(0)),
    Object.defineProperty(e, "needsUpdate", {
      ...xr,
      set: (t) => {
        t && Sr(`attribute(${e.count}×${e.itemSize ?? e.stride})`);
      },
    }));
}
function Mr(e) {
  if (e.__rel) return;
  let t = e.image,
    n = e.isCompressedTexture ? e.mipmaps : null;
  if (!t && !n?.length) return;
  if (((L.texMB += wr(e) / 1048576), Or(e), (e.__rel = 1), n && n.length))
    for (let e of n) {
      let t = e?.data;
      if (t && t.byteLength) {
        let n = t.constructor;
        e.data = new n(0);
      }
    }
  else if (R(t)) ((t.width = 1), (t.height = 1));
  else if (Cr(t))
    try {
      t.close();
    } catch {}
  else if (t && t.data && t.data.byteLength) {
    let e = t.data.constructor;
    t.data = new e(0);
  }
  let r = {
    ...xr,
    set: (t) => {
      t && Sr(`texture '${e.name}' ${e.image?.width ?? `?`}`);
    },
  };
  (Object.defineProperty(e, "needsUpdate", r),
    e.source && Object.defineProperty(e.source, "needsUpdate", r));
}
function Nr(e, t = ``) {
  if (!yr) return;
  let n = e.image,
    r = e.isCompressedTexture ? e.mipmaps : null,
    i = e.__rel ? 0 : wr(e);
  if (r && r.length)
    for (let e of r) {
      let t = e?.data;
      t && t.byteLength && (e.data = new t.constructor(0));
    }
  else if (R(n))
    ((n.width > 1 || n.height > 1) && ((n.width = 1), (n.height = 1)),
      (n.__tgtaDropped = t || `?`));
  else if (Cr(n))
    try {
      n.close();
    } catch {}
  else n && n.data && n.data.byteLength && (n.data = new n.data.constructor(0));
  L.droppedTexMB += i / 1048576;
}
function Pr(e) {
  e.__gm ||
    ((e.__gm = 1),
    (e.__up = +!!e.__gpu),
    (e.__v = e.version),
    (e.onUploadCallback = function () {
      ((this.__gpu = 1), (this.__up = (this.__up ?? 0) + 1));
    }));
}
function Fr(e, t) {
  if (e.__gm) return;
  ((e.__gm = 1), (e.__up = +!!t), (e.__v = e.version));
  let n = e.onUpdate;
  e.onUpdate = (t) => {
    ((e.__up = (e.__up ?? 0) + 1), n?.call(e, t));
  };
}
var Ir = function () {
  ((this.__gpu = 1), jr(this));
};
function Lr(e) {
  if (!yr) return;
  if (e.isTexture) {
    let t = e;
    Fr(t, !1);
    let n = t.onUpdate;
    t.onUpdate = (e) => {
      (n?.call(t, e), Mr(t));
    };
    return;
  }
  let t = e.isBufferGeometry ? e : e.geometry;
  if (!t) return;
  Hr(t);
  let n = !!e.isBatchedMesh;
  for (let e of Rr(t, n)) e.__gpu ? jr(e) : (e.onUploadCallback = Ir);
}
function Rr(e, t = !1) {
  let n = [];
  for (let t in e.attributes) {
    let r = e.attributes[t];
    if (!(!r || r.isGLBufferAttribute || r.userData?.keepCpu)) {
      if (r.isInterleavedBufferAttribute) {
        let e = r.data;
        if (
          !e ||
          e.isInstancedInterleavedBuffer ||
          !e.array ||
          e.userData?.keepCpu ||
          n.includes(e)
        )
          continue;
        n.push(e);
        continue;
      }
      !r.isInstancedBufferAttribute && r.array && n.push(r);
    }
  }
  let r = e.index;
  return (r && !t && !r.userData?.keepCpu && n.push(r), n);
}
var zr =
    typeof location > `u` ||
    new URLSearchParams(location.search).get(`pad`) !== `0`,
  Br = new WeakMap();
function Vr(e) {
  for (let t in e.attributes) {
    let n = e.attributes[t];
    if (
      !n ||
      n.isInterleavedBufferAttribute ||
      n.isInstancedBufferAttribute ||
      n.isGLBufferAttribute ||
      n.__gpu ||
      n.userData?.keepCpu
    )
      continue;
    let r = n.array,
      i = r?.BYTES_PER_ELEMENT ?? 4;
    if (i >= 4 || !((n.itemSize * i) & 3)) continue;
    let a = Br.get(n);
    if (a) {
      e.setAttribute(t, a);
      continue;
    }
    if (
      n.usage !== 35044 ||
      n.version > 1 ||
      n.gpuType === 1013 ||
      n.updateRanges?.length
    )
      continue;
    let o = n.itemSize,
      s = (Math.ceil((o * i) / 4) * 4) / i,
      c = n.count;
    if (!(c > 0) || r.length < c * o) continue;
    let l = new r.constructor(c * s);
    for (let e = 0, t = 0, n = 0; e < c; e++, t += o, n += s)
      for (let e = 0; e < o; e++) l[n + e] = r[t + e];
    let u = new he(l, s),
      d = new ie(u, o, 0, n.normalized);
    ((d.name = n.name),
      Br.set(n, d),
      e.setAttribute(t, d),
      (L.paddedMB += (c * o * i) / 1048576));
  }
}
function Hr(e) {
  if (e.boundingSphere && e.boundingBox) return;
  let t = e.attributes.position,
    n = t ? (t.isInterleavedBufferAttribute ? t.data.array : t.array) : null;
  n &&
    n.length &&
    (e.boundingSphere || e.computeBoundingSphere(),
    e.boundingBox || e.computeBoundingBox());
}
var Ur = (e) => {
    let t = e;
    return !t.isMesh ||
      e.isSkinnedMesh ||
      e.userData?.keepCpu ||
      t.geometry.userData?.keepCpu ||
      (e.isBatchedMesh && e.userData?.static !== !0)
      ? !1
      : !Gr(t.geometry.morphAttributes) &&
          !(Array.isArray(t.material)
            ? t.material.some((e) => e.wireframe)
            : t.material.wireframe);
  },
  Wr = (e) => !!e.isBatchedMesh;
function Gr(e) {
  for (let t in e) return !0;
  return !1;
}
