// tokyo__assets__avatar-CbvrNwG6 13 — width
// Lines 4106-4441 of readable/tokyo__assets__avatar-CbvrNwG6.pretty.js (statement-aligned).
function Qn(e, t) {
  ((e.onBeforeCompile = (n) => {
    ((n.uniforms.uNight = lt.uNight),
      (n.uniforms.uWet = lt.uWet),
      (n.uniforms.uSss = { value: 1 }),
      (e.userData.shader = n));
    let r = Re.lights_physical_pars_fragment.replace(
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
          qn,
      )
      .replace(
        `#include <lights_physical_pars_fragment>`,
        r +
          `
` +
          Xn,
      )
      .replace(
        `#include <map_fragment>`,
        `#include <map_fragment>
` + Jn,
      )
      .replace(
        `#include <roughnessmap_fragment>`,
        `#include <roughnessmap_fragment>
` + Yn,
      )
      .replace(
        `#include <emissivemap_fragment>`,
        `#include <emissivemap_fragment>
` + Zn,
      );
  }),
    (e.customProgramCacheKey = () =>
      `rbx-avatar-v2-${t === `head` ? `body` : t}`));
}
function $n(e, t, n = {}) {
  let r = `rbx:${t}`,
    i = e.userData[r];
  if (i) return i;
  let a = t === `hair` || t === `fringe`,
    o = new Pe({
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
    Qn(o, t),
    (e.userData[r] = o),
    o
  );
}
function er(e, t) {
  let n = e.userData.shader;
  n && (n.uniforms.uSss.value = t);
}
var tr = `/avatars/`,
  nr = null,
  X = null,
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
    (nr ||= fetch(`${tr}manifest.json`).then((e) => {
      if (!e.ok) throw Error(`avatars: manifest ${e.status}`);
      return e.json();
    })),
    nr
  );
}
function ar() {
  return (X || ((X = new yt()), X.setMeshoptDecoder(Pn)), X);
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
var pr = () => or ?? ht.renderer;
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
  if (ht.mobile !== null) return ht.mobile;
  try {
    return dt().mobile;
  } catch {
    return !1;
  }
}
function vr(e) {
  let t = new K();
  (t.setTranscoderPath(`${tr}basis/`),
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
          X?.setKTX2Loader(null),
          Z.ktx2Releases++));
    }, ur)));
}
var xr = {
    [xe]: `ASTC 4×4`,
    [ze]: `BC7`,
    [Ve]: `BC1`,
    [Xe]: `BC3`,
    [ye]: `ETC2 RGB`,
    [Je]: `ETC2 RGBA`,
    [$e]: `ETC1`,
    [we]: `PVRTC RGB`,
    [me]: `PVRTC RGBA`,
    [n]: `RGBA8`,
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
  (Z.pendingMaps++, ut(e));
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
    s = !!a && o && ht.halveHeroMaps === !0,
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
  if (!t) return n.loadAsync(`${tr}${e}`);
  let r = yr();
  if (!r) throw Error(`avatars: KTX2 loader unavailable`);
  cr++;
  try {
    return (
      await ft(Promise.resolve(sr), 1e4, `avatars: KTX2 transcoder`),
      n.setKTX2Loader(r),
      await n.loadAsync(`${tr}${e}`)
    );
  } finally {
    (cr--, br());
  }
}
