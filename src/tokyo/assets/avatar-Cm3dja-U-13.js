// tokyo/assets/avatar-Cm3dja-U 13 — width
// Lines 4170-4517 of readable/tokyo/assets/avatar-Cm3dja-U.pretty.js (statement-aligned).
function ar(e, t) {
  ((e.onBeforeCompile = (n) => {
    ((n.uniforms.uNight = pt.uNight),
      (n.uniforms.uWet = pt.uWet),
      (n.uniforms.uSss = { value: 1 }),
      (e.userData.shader = n));
    let r = Ge.lights_physical_pars_fragment.replace(
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
          : ``) +
        (ir(t)
          ? `#define RBX_LOOK
`
          : ``);
    (ir(t) &&
      (n.vertexShader = n.vertexShader
        .replace(
          `#include <common>`,
          i +
            `#include <common>
` +
            Xn,
        )
        .replace(
          `#include <skinning_vertex>`,
          `#include <skinning_vertex>
` + Zn,
        )),
      (n.fragmentShader = n.fragmentShader
        .replace(
          `#include <common>`,
          i +
            `#include <common>
` +
            Yn,
        )
        .replace(
          `#include <lights_physical_pars_fragment>`,
          r +
            `
` +
            er,
        )
        .replace(
          `#include <map_fragment>`,
          `#include <map_fragment>
` + Qn,
        )
        .replace(
          `#include <roughnessmap_fragment>`,
          `#include <roughnessmap_fragment>
` + $n,
        )
        .replace(
          `#include <emissivemap_fragment>`,
          nr +
            `
#include <emissivemap_fragment>
` +
            tr,
        )
        .replace(
          `#include <aomap_fragment>`,
          `#include <aomap_fragment>
` + rr,
        )));
  }),
    (e.customProgramCacheKey = () =>
      `rbx-avatar-v2-${t === `head` ? `body` : t}${ir(t) ? `-look` : ``}`));
}
function or(e, t, n = {}) {
  let r = `rbx:${t}`,
    i = e.userData[r];
  if (i && n.shared !== !1) return i;
  let a = t === `hair` || t === `fringe`,
    o = new C({
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
    ar(o, t),
    n.shared !== !1 && (e.userData[r] = o),
    o
  );
}
function sr(e, t) {
  let n = e.userData.shader;
  n && (n.uniforms.uSss.value = t);
}
var cr = `/avatars/`,
  lr = null,
  ur = null,
  Y = new Map(),
  X = new Map(),
  dr = new Set(),
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
function fr() {
  return (
    (lr ||= fetch(`${cr}manifest.json`).then((e) => {
      if (!e.ok) throw Error(`avatars: manifest ${e.status}`);
      return e.json();
    })),
    lr
  );
}
function pr() {
  return (ur || ((ur = new xt()), ur.setMeshoptDecoder(In)), ur);
}
var mr = null,
  Q = null,
  $ = null,
  hr = null,
  gr = 0,
  _r = null,
  vr = 5e3,
  yr = [
    `WEBGL_compressed_texture_astc`,
    `WEBGL_compressed_texture_etc`,
    `WEBGL_compressed_texture_etc1`,
    `WEBGL_compressed_texture_s3tc`,
    `EXT_texture_compression_bptc`,
    `WEBGL_compressed_texture_pvrtc`,
    `WEBKIT_WEBGL_compressed_texture_pvrtc`,
  ];
function br(e) {
  mr = e;
}
var xr = () => mr ?? _t.renderer;
function Sr(e) {
  try {
    return typeof location < `u`
      ? new URLSearchParams(location.search).get(e)
      : null;
  } catch {
    return null;
  }
}
function Cr() {
  let e = xr();
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
function wr() {
  if (Q) return Q;
  let e = Sr(`avatartex`);
  if (e === `webp` || e === `ktx2`) return (Q = e);
  if (
    typeof WebAssembly != `object` ||
    typeof Worker > `u` ||
    typeof Blob > `u`
  )
    return (Q = `webp`);
  let t = Cr();
  if (!t) return (Q = `webp`);
  let n = yr.some((e) => t.src.extensions.has(e));
  return (n && Er(t.src), t.release(), (Q = n ? `ktx2` : `webp`));
}
function Tr() {
  if (_t.mobile !== null) return _t.mobile;
  try {
    return mt().mobile;
  } catch {
    return !1;
  }
}
function Er(e) {
  let t = new G();
  (t.setTranscoderPath(`${cr}basis/`),
    t.setWorkerLimit(Tr() ? 1 : 2),
    Z.ktx2Starts++,
    t.detectSupport(e));
  let n = Sr(`avatarktxfmt`),
    r = t.workerConfig;
  if (n && r) for (let e of Object.keys(r)) r[e] = e === `${n}Supported`;
  (($ = t), (hr = t.init()), hr.catch(() => {}));
}
function Dr() {
  if (!$ && Q === `ktx2`) {
    let e = Cr();
    e && (Er(e.src), e.release());
  }
  return $;
}
function Or() {
  (_r && clearTimeout(_r),
    (_r = setTimeout(() => {
      ((_r = null),
        !(gr > 0 || !$) &&
          ($.dispose(),
          ($ = null),
          (hr = null),
          ur?.setKTX2Loader(null),
          Z.ktx2Releases++));
    }, vr)));
}
var kr = {
    [Ke]: `ASTC 4×4`,
    [Re]: `BC7`,
    [Se]: `BC1`,
    [Ve]: `BC3`,
    [Xe]: `ETC2 RGB`,
    [_e]: `ETC2 RGBA`,
    [Ae]: `ETC1`,
    [Ue]: `PVRTC RGB`,
    [tt]: `PVRTC RGBA`,
    [M]: `RGBA8`,
  },
  Ar = 512,
  jr = 8;
function Mr(e) {
  let t = e;
  if (t.isCompressedTexture) {
    let e = 0;
    for (let n of t.mipmaps) e += n?.data?.byteLength ?? 0;
    return e;
  }
  let n = e.image;
  return (n?.width ?? 0) * (n?.height ?? 0) * 4;
}
function Nr(e) {
  let t = e;
  if (t.isCompressedTexture) {
    let n = t.mipmaps;
    if (!n || n.length < 2 || n[0].width < Ar) return 0;
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
    n.width < Ar ||
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
function Pr(e) {
  (Z.pendingMaps++, ut(e));
  let t = e.onUpdate,
    n = !1;
  e.onUpdate = (r) => {
    let i = n ? 0 : Mr(e);
    if ((t?.call(e, r), n)) return;
    ((n = !0), Z.pendingMaps--, (Z.releasedMB += i / 1048576));
    let a = e;
    a.isCompressedTexture && (a.mipmaps = []);
  };
}
function Fr(e, t, n) {
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
  let a = xr(),
    o = n.role === `hero`,
    s = !!a && o && _t.halveHeroMaps === !0,
    c = new Set(),
    l = 0;
  for (let [e, t] of r) {
    (s && (Z.halvedMB += Nr(e) / 1048576), o && t && a && (e.anisotropy = jr));
    let n = e;
    (n.isCompressedTexture
      ? ((l += Mr(e)), c.add(kr[n.format] ?? `format ${n.format}`))
      : ((l += Math.round(Mr(e) * (4 / 3))), c.add(`RGBA8`)),
      i.get(e.source) === 1 && Pr(e));
  }
  let u = 0;
  if (a) {
    let e = performance.now();
    for (let e of r.keys()) a.initTexture(e);
    u = performance.now() - e;
  }
  return { mode: t, gpuBytes: l, formats: [...c], uploadMs: u };
}
function Ir(e) {
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
