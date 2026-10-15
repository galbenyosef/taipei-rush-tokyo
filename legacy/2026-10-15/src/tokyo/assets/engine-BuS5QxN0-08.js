// tokyo/assets/engine-BuS5QxN0 08 — replace
// Lines 2404-2750 of readable/tokyo/assets/engine-BuS5QxN0.pretty.js (statement-aligned).
function Vn(e, t = 0, n = 0) {
  let r = e.onBeforeCompile;
  e.onBeforeCompile = (i, a) => {
    (r?.call(e, i, a),
      (i.uniforms.uNight = zn.uNight),
      (i.uniforms.uTime = zn.uTime),
      (i.fragmentShader = i.fragmentShader
        .replace(
          `#include <common>`,
          `#include <common>
uniform float uNight;
uniform float uTime;`,
        )
        .replace(
          `#include <emissivemap_fragment>`,
          `#include <emissivemap_fragment>
        float nightK = mix(${t.toFixed(3)}, 1.0, uNight);
        ${n > 0 ? `nightK *= 1.0 - ${n.toFixed(3)} * step(0.93, fract(sin(floor(uTime * 12.0) * 12.9898 + vViewPosition.x * 0.1) * 43758.5453));` : ``}
        totalEmissiveRadiance *= nightK;`,
        )));
  };
  let i = `night:${t}:${n}`,
    a = e.customProgramCacheKey?.bind(e);
  return ((e.customProgramCacheKey = () => (a ? a() : ``) + i), e);
}
function Hn(e, t, n) {
  n.addEventListener(`dispose`, function r() {
    (n.removeEventListener(`dispose`, r), e.get(t) === n && e.delete(t));
  });
}
function Un(e, t) {
  let n = document.createElement(`canvas`);
  return ((n.width = e), (n.height = t), [n, n.getContext(`2d`)]);
}
function Wn(e, t = {}) {
  let n = new Ee(e);
  return (
    t.srgb !== !1 && (n.colorSpace = C),
    t.repeat && (n.wrapS = n.wrapT = Ae),
    (n.generateMipmaps = t.mipmaps !== !1),
    (n.minFilter = t.mipmaps === !1 ? _e : fe),
    (n.anisotropy = t.anisotropy ?? 4),
    (n.needsUpdate = !0),
    n
  );
}
function Gn(e, t) {
  let n = document.createElement(`canvas`);
  return (
    (n.width = e),
    (n.height = t),
    [n, n.getContext(`2d`, { willReadFrequently: !0 })]
  );
}
var Kn = `
attribute vec4 aCity;
varying vec4 vCity;
varying float vCityUp;
varying vec3 vCityW;
uniform float uTime;
`,
  qn = `
varying vec4 vCity;
varying float vCityUp;
varying vec3 vCityW;
uniform float uNight;
uniform float uTime;
uniform float uWet;
float cityHash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
`;
function Jn(e, t) {
  ((e.uniforms.uNight = zn.uNight),
    (e.uniforms.uTime = zn.uTime),
    (e.uniforms.uWet = zn.uWet),
    (e.vertexShader = e.vertexShader
      .replace(
        `#include <common>`,
        `#include <common>
` + Kn,
      )
      .replace(
        `#include <beginnormal_vertex>`,
        `#include <beginnormal_vertex>
      {
        vec3 cn = objectNormal;
        #ifdef USE_INSTANCING
          cn = mat3( instanceMatrix ) * cn;
        #endif
        vCityUp = normalize( mat3( modelMatrix ) * cn ).y;
      }`,
      )
      .replace(
        `#include <worldpos_vertex>`,
        `#include <worldpos_vertex>
      {
        vec4 cw = vec4( transformed, 1.0 );
        #ifdef USE_INSTANCING
          cw = instanceMatrix * cw;
        #endif
        vCityW = ( modelMatrix * cw ).xyz;
      }`,
      )
      .replace(
        `#include <uv_vertex>`,
        `#include <uv_vertex>
      vCity = aCity;
      #ifdef USE_MAP
        if ( ( int( aCity.w * 255.0 + 0.5 ) & 8 ) != 0 ) vMapUv.x += uTime * 0.035;
      #endif`,
      )));
  let n = e.fragmentShader
    .replace(
      `#include <common>`,
      `#include <common>
` + qn,
    )
    .replace(
      `#include <color_fragment>`,
      `#include <color_fragment>
      int cityF = int( vCity.w * 255.0 + 0.5 );
      float cityWet = ( cityF & 16 ) != 0 ? 0.0 : uWet;
      float cityMask = 1.0;
      #ifdef USE_MAP
        cityMask = sampledDiffuseColor.a;
      #endif
      diffuseColor.rgb *= 1.0 - 0.28 * cityWet;`,
    );
  (t ||
    (n = n
      .replace(
        `#include <roughnessmap_fragment>`,
        `#include <roughnessmap_fragment>
        roughnessFactor *= vCity.x;
        roughnessFactor = mix( roughnessFactor, 0.14, cityWet * smoothstep( 0.6, 0.9, vCityUp ) );`,
      )
      .replace(
        `#include <metalnessmap_fragment>`,
        `#include <metalnessmap_fragment>
 metalnessFactor *= vCity.y;`,
      )),
    (n = n.replace(
      `#include <emissivemap_fragment>`,
      `#include <emissivemap_fragment>
    {
      float eK = vCity.z * 4.0;
      if ( ( cityF & 1 ) != 0 ) eK *= uNight;
      if ( ( cityF & 2 ) != 0 ) eK *= cityMask;
      #ifdef USE_MAP
        if ( ( cityF & 32 ) != 0 ) { vec3 cc = floor( ( vCityW + 0.37 ) / 3.2 ); eK *= step( 0.45, cityHash( cc.xz + cc.y * 17.13 ) ); }
      #endif
      if ( ( cityF & 4 ) != 0 )
        eK *= 1.0 - 0.35 * step( 0.93, fract( sin( floor( uTime * 12.0 ) * 12.9898 + vCity.z * 91.7 ) * 43758.5453 ) );
      totalEmissiveRadiance += diffuseColor.rgb * eK;
    }`,
    )),
    (e.fragmentShader = n));
}
var Yn = new Map();
function Xn(e, t = {}) {
  let n = (t.policy ?? `pbr`) === `lambert` && e !== `glass`,
    r = `${e}|${t.map?.uuid ?? `-`}|${t.instanced ? `i` : ``}${t.batched ? `b` : ``}|${n ? `L` : `P`}|${t.opacity ?? ``}`,
    i = Yn.get(r);
  if (i) return i;
  let a = { map: t.map ?? null, vertexColors: !0, emissive: new ke(0) };
  ((i = n ? new y(a) : new he({ ...a, roughness: 1, metalness: 1 })),
    e === `cutout`
      ? ((i.alphaTest = 0.5), (i.side = 2))
      : e === `glass` &&
        ((i.transparent = !0),
        (i.opacity = t.opacity ?? 0.45),
        (i.depthWrite = !1),
        (i.forceSinglePass = !0)),
    (i.name = `city-${e}${t.instanced ? `-inst` : ``}${t.batched ? `-batch` : ``}${t.name ? `:` + t.name : ``}`),
    (i.onBeforeCompile = (e) => Jn(e, n)));
  let o = `city-v1:${e === `glass` ? `glass` : `solid`}:${n ? `L` : `P`}`;
  return ((i.customProgramCacheKey = () => o), Yn.set(r, i), Hn(Yn, r, i), i);
}
var Zn = {};
typeof window < `u` && (window.__materialLint = () => Zn);
function Qn(e, t) {
  let n = {
      twoPass: [],
      sharedInstanced: [],
      unnamed: 0,
      fixedSinglePass: 0,
      autoNamed: 0,
      misaligned: { count: 0, mb: 0, names: [] },
    },
    r = new Map(),
    i = new Set(),
    a = new Set();
  for (let o of e)
    o.traverse((e) => {
      let o = e;
      if (!o.material || !(o.isMesh || e.isPoints || e.isLine || e.isSprite))
        return;
      let s = o.geometry;
      if (s && !a.has(s)) {
        a.add(s);
        for (let t in s.attributes) {
          let r = s.attributes[t],
            i =
              (r.isInterleavedBufferAttribute ? r.data?.array : r.array)
                ?.BYTES_PER_ELEMENT ?? 4,
            a = r.isInterleavedBufferAttribute
              ? (r.data?.stride ?? 0) * i
              : r.itemSize * i;
          if (a % 4 == 0) continue;
          (n.misaligned.count++, (n.misaligned.mb += (r.count * a) / 1048576));
          let c = `${e.name || (Array.isArray(o.material) ? `` : o.material.name) || `?`}.${t}`;
          n.misaligned.names.length < 8 &&
            !n.misaligned.names.includes(c) &&
            n.misaligned.names.push(c);
        }
      }
      let c = e.isInstancedMesh
          ? 2
          : e.isSkinnedMesh || e.isBatchedMesh
            ? 4
            : 1,
        l = Array.isArray(o.material) ? o.material : [o.material];
      for (let e of l)
        (r.set(e, (r.get(e) ?? 0) | c),
          !i.has(e) &&
            (i.add(e),
            e.name ||
              (n.unnamed++,
              (e.name = `${t}:${e.type.replace(/Material$/, ``)}`),
              n.autoNamed++),
            e.transparent &&
              e.side === 2 &&
              !e.forceSinglePass &&
              ((e.blending === 2 || e.blending === 4) && !e.depthWrite
                ? ((e.forceSinglePass = !0), n.fixedSinglePass++)
                : n.twoPass.push(e.name || e.type))));
    });
  for (let [e, t] of r)
    (t & 3) == 3 && n.sharedInstanced.push(e.name || e.type);
  return (
    (Zn[t] = n),
    (n.misaligned.mb = Math.round(n.misaligned.mb * 10) / 10),
    n
  );
}
var $n = new Set([
    `environment`,
    `streets`,
    `buildings`,
    `landmarks`,
    `districts`,
    `culture`,
    `transit`,
  ]),
  er = 32768,
  tr = 4 << 20,
  nr =
    typeof location > `u` ||
    new URLSearchParams(location.search).get(`gpumem`) !== `0`,
  rr = function () {
    this.__gpu = 1;
  };
((ue.prototype.onUploadCallback = rr), (me.prototype.onUploadCallback = rr));
var ir = { configurable: !0, enumerable: !1, get: () => !1, set: () => {} },
  L = {
    geoMB: 0,
    texMB: 0,
    clampedMB: 0,
    pendingGeo: 0,
    pendingTex: 0,
    blocked: 0,
    blockedAt: [],
    passMs: 0,
    passMeshes: 0,
    detached: 0,
    paddedMB: 0,
    droppedTexMB: 0,
    clampedAt: [],
  };
function ar(e) {
  if ((L.blocked++, L.blockedAt.length < 6)) {
    let t = (Error().stack ?? ``)
      .split(
        `
`,
      )
      .slice(3, 6)
      .map((e) => e.trim().replace(/https?:\/\/[^/]+/, ``))
      .join(` < `);
    L.blockedAt.push(`${e}: ${t}`);
  }
}
typeof window < `u` && (window.__gpuMem = L);
var R = (e) =>
    !!e &&
    ((typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement) ||
      (typeof OffscreenCanvas < `u` && e instanceof OffscreenCanvas)),
  or = (e) => typeof ImageBitmap < `u` && e instanceof ImageBitmap;
function sr(e) {
  let t = e.isCompressedTexture ? e.mipmaps : null;
  if (t && t.length) {
    let e = 0;
    for (let n of t) e += n?.data?.byteLength ?? 0;
    return e;
  }
  let n = e.image;
  return n
    ? R(n) || or(n)
      ? (n.width || 0) * (n.height || 0) * 4
      : n.data && n.data.byteLength
        ? n.data.byteLength
        : 0
    : 0;
}
function cr(e, t) {
  let n = 4;
  switch (e) {
    case se:
    case ae:
    case De:
    case g:
      n = 1;
      break;
    case ge:
    case de:
      n = 2;
      break;
    case b:
      return 4;
  }
  switch (t) {
    case re:
    case ee:
      return 2;
    case d:
    case ne:
      return 4;
    case ie:
    case p:
      return n;
    case o:
    case i:
    case E:
      return n * 2;
    default:
      return n * 4;
  }
}
