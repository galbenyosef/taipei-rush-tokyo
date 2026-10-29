// tokyo/assets/engine-wUBYs8Z3 09 — replace
// Lines 2564-2911 of readable/tokyo/assets/engine-wUBYs8Z3.pretty.js (statement-aligned).
function ir(e, t = 0, n = 0) {
  let r = e.onBeforeCompile;
  e.onBeforeCompile = (i, a) => {
    (r?.call(e, i, a),
      (i.uniforms.uNight = nr.uNight),
      (i.uniforms.uTime = nr.uTime),
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
function ar(e, t, n) {
  n.addEventListener(`dispose`, function r() {
    (n.removeEventListener(`dispose`, r), e.get(t) === n && e.delete(t));
  });
}
function or(e, t) {
  let n = document.createElement(`canvas`);
  return ((n.width = e), (n.height = t), [n, n.getContext(`2d`)]);
}
function sr(e, t = {}) {
  let n = new Oe(e);
  return (
    t.srgb !== !1 && (n.colorSpace = s),
    t.repeat && (n.wrapS = n.wrapT = ae),
    (n.generateMipmaps = t.mipmaps !== !1),
    (n.minFilter = t.mipmaps === !1 ? _e : pe),
    (n.anisotropy = t.anisotropy ?? 4),
    (n.needsUpdate = !0),
    n
  );
}
function cr(e, t) {
  let n = document.createElement(`canvas`);
  return (
    (n.width = e),
    (n.height = t),
    [n, n.getContext(`2d`, { willReadFrequently: !0 })]
  );
}
var lr = `
attribute vec4 aCity;
varying vec4 vCity;
varying float vCityUp;
varying vec3 vCityW;
uniform float uTime;
`,
  ur = `
varying vec4 vCity;
varying float vCityUp;
varying vec3 vCityW;
uniform float uNight;
uniform float uTime;
uniform float uWet;
float cityHash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
`;
function dr(e, t) {
  ((e.uniforms.uNight = nr.uNight),
    (e.uniforms.uTime = nr.uTime),
    (e.uniforms.uWet = nr.uWet),
    (e.vertexShader = e.vertexShader
      .replace(
        `#include <common>`,
        `#include <common>
` + lr,
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
` + ur,
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
      diffuseColor.rgb *= 1.0 - 0.28 * cityWet;
      float cityWinLit = 0.0;
      vec3 cityWinCol = vec3( 0.0 );
      if ( ( cityF & 64 ) != 0 && abs( vCityUp ) < 0.5 ) {
        // (the far city's windows — the props shader's procedural window LOD, environment/props.ts)
        vec3 cfn = normalize( cross( dFdx( vCityW ), dFdy( vCityW ) ) );
        vec2 wc = vec2( ( abs( cfn.x ) > 0.5 ? vCityW.z : vCityW.x ) / 3.2, vCityW.y / 3.3 );
        vec2 wcell = floor( wc ), wf = fract( wc );
        float inWinS = step( 0.14, wf.x ) * step( wf.x, 0.86 ) * step( 0.26, wf.y ) * step( wf.y, 0.88 );
        float fwp = max( fwidth( wc.x ), fwidth( wc.y ) );
        float inWin = mix( inWinS, 0.45, smoothstep( 0.22, 0.55, fwp ) );
        diffuseColor.rgb = mix( diffuseColor.rgb, diffuseColor.rgb * 0.32 + vec3( 0.025, 0.035, 0.05 ), inWin * 0.9 );
        float wseed = 1.0 + vCity.z * 255.0;
        float bh = cityHash( vec2( wseed, 1.3 ) );
        float lf = 0.5 * ( 0.15 + 0.85 * bh * bh );
        float lvl = max( 0.0, ceil( log2( fwp * 3.5 ) ) );
        float scl = exp2( min( lvl, 5.0 ) );
        vec2 gc = wc / scl;
        vec2 gcell = floor( gc ), gf = fract( gc ) - 0.5;
        float wr = cityHash( ( lvl < 0.5 ? wcell : gcell * 7.31 + lvl ) + wseed * 13.7 );
        float pLit = lvl < 0.5 ? lf : 1.0 - pow( 1.0 - lf, scl * 0.9 );
        if ( lvl < 0.5 ) pLit = cityHash( vec2( wcell.y, wseed * 1.7 + 0.3 ) ) < lf ? 0.85 : 0.1;
        float shape = lvl < 0.5 ? inWinS : smoothstep( 0.42, 0.18, length( gf ) );
        cityWinLit = shape * step( wr, pLit ) * ( lvl < 0.5 ? 1.0 : 0.9 );
        float wch = cityHash( vec2( wseed, 2.7 ) );
        if ( cityHash( ( lvl < 0.5 ? wcell : gcell ) + 5.3 ) < 0.2 ) wch = fract( wch + 0.5 );
        cityWinCol = wch < 0.5 ? vec3( 1.0, 0.68, 0.36 ) : ( wch < 0.8 ? vec3( 0.8, 0.9, 1.0 ) : vec3( 0.85, 1.0, 0.82 ) );
      }`,
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
      float eK = ( cityF & 64 ) != 0 ? 0.0 : vCity.z * 4.0;
      totalEmissiveRadiance += cityWinCol * cityWinLit * 1.25 * mix( 0.08, 1.0, uNight );
      if ( ( cityF & 1 ) != 0 ) eK *= uNight;
      if ( ( cityF & 2 ) != 0 ) eK *= cityMask;
      #ifdef USE_MAP
        if ( ( cityF & 32 ) != 0 ) {
          vec3 cq = ( vCityW + 0.37 ) / 3.2, cc = floor( cq );
          // (《東京狂飆》 a cell under ~1 px averages out instead of sparkling — the far city's light points)
          float cfw = max( fwidth( cq.y ), max( fwidth( cq.x ), fwidth( cq.z ) ) );
          // (whole floors lit or dark, a few odd cells either way: offices at night, not confetti)
          float cOn = cityHash( vec2( cc.y, floor( ( cc.x + cc.z ) / 9.0 ) * 0.37 + 4.1 ) ) < 0.55 ? step( cityHash( cc.xz + cc.y * 17.13 ), 0.88 ) : step( cityHash( cc.xz + cc.y * 17.13 ), 0.08 );
          eK *= mix( cOn, 0.55, smoothstep( 0.35, 0.9, cfw ) );
        }
      #endif
      if ( ( cityF & 4 ) != 0 )
        eK *= 1.0 - 0.35 * step( 0.93, fract( sin( floor( uTime * 12.0 ) * 12.9898 + vCity.z * 91.7 ) * 43758.5453 ) );
      totalEmissiveRadiance += diffuseColor.rgb * eK;
    }`,
    )),
    (e.fragmentShader = n));
}
var fr = new Map();
function pr(e, t = {}) {
  let n = (t.policy ?? `pbr`) === `lambert` && e !== `glass`,
    r = `${e}|${t.map?.uuid ?? `-`}|${t.instanced ? `i` : ``}${t.batched ? `b` : ``}|${n ? `L` : `P`}|${t.opacity ?? ``}`,
    i = fr.get(r);
  if (i) return i;
  let a = { map: t.map ?? null, vertexColors: !0, emissive: new je(0) };
  ((i = n ? new v(a) : new ge({ ...a, roughness: 1, metalness: 1 })),
    e === `cutout`
      ? ((i.alphaTest = 0.5), (i.side = 2))
      : e === `glass` &&
        ((i.transparent = !0),
        (i.opacity = t.opacity ?? 0.45),
        (i.depthWrite = !1),
        (i.forceSinglePass = !0)),
    (i.name = `city-${e}${t.instanced ? `-inst` : ``}${t.batched ? `-batch` : ``}${t.name ? `:` + t.name : ``}`),
    (i.onBeforeCompile = (e) => dr(e, n)));
  let o = `city-v1:${e === `glass` ? `glass` : `solid`}:${n ? `L` : `P`}`;
  return ((i.customProgramCacheKey = () => o), fr.set(r, i), ar(fr, r, i), i);
}
var mr = {};
typeof window < `u` && (window.__materialLint = () => mr);
function hr(e, t) {
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
    (mr[t] = n),
    (n.misaligned.mb = Math.round(n.misaligned.mb * 10) / 10),
    n
  );
}
var gr = new Set([
    `environment`,
    `streets`,
    `buildings`,
    `landmarks`,
    `districts`,
    `culture`,
    `transit`,
  ]),
  _r = 32768,
  vr = 4 << 20,
  yr =
    typeof location > `u` ||
    new URLSearchParams(location.search).get(`gpumem`) !== `0`,
  br = function () {
    this.__gpu = 1;
  };
((de.prototype.onUploadCallback = br), (he.prototype.onUploadCallback = br));
var xr = { configurable: !0, enumerable: !1, get: () => !1, set: () => {} },
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
function Sr(e) {
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
  Cr = (e) => typeof ImageBitmap < `u` && e instanceof ImageBitmap;
function wr(e) {
  let t = e.isCompressedTexture ? e.mipmaps : null;
  if (t && t.length) {
    let e = 0;
    for (let n of t) e += n?.data?.byteLength ?? 0;
    return e;
  }
  let n = e.image;
  return n
    ? R(n) || Cr(n)
      ? (n.width || 0) * (n.height || 0) * 4
      : n.data && n.data.byteLength
        ? n.data.byteLength
        : 0
    : 0;
}
