// tokyo__assets__world-Bo9wkXrT 13 — replace
// Lines 3857-3949 of readable/tokyo__assets__world-Bo9wkXrT.pretty.js (statement-aligned).
function gn(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    t = Math.imul(t ^ e.charCodeAt(n), 16777619);
  return t >>> 0;
}
function _n(e, t, n, r, i, a) {
  (e.beginPath(),
    e.moveTo(t + a, n),
    e.lineTo(t + r - a, n),
    e.quadraticCurveTo(t + r, n, t + r, n + a),
    e.lineTo(t + r, n + i - a),
    e.quadraticCurveTo(t + r, n + i, t + r - a, n + i),
    e.lineTo(t + a, n + i),
    e.quadraticCurveTo(t, n + i, t, n + i - a),
    e.lineTo(t, n + a),
    e.quadraticCurveTo(t, n, t + a, n),
    e.closePath());
}
function vn(e, t = 1) {
  let n = new u({ name: `interior-room`, map: e, vertexColors: !0, fog: !1 });
  return (
    (n.userData = {
      uLight: { value: new W(t, t, t) },
      uFlicker: { value: 0 },
    }),
    (n.onBeforeCompile = (e) => {
      ((e.uniforms.uLight = n.userData.uLight),
        (e.uniforms.uFlicker = n.userData.uFlicker),
        (e.uniforms.uTime = K.uTime),
        (e.vertexShader = e.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
varying vec3 vIWorld;`,
          )
          .replace(
            `#include <worldpos_vertex>`,
            `#include <worldpos_vertex>
vIWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`,
          )),
        (e.fragmentShader = e.fragmentShader
          .replace(
            `#include <common>`,
            `#include <common>
uniform vec3 uLight;
uniform float uFlicker;
uniform float uTime;
varying vec3 vIWorld;`,
          )
          .replace(
            `#include <color_fragment>`,
            `#if defined( USE_COLOR_ALPHA )
          float em = vColor.a;
          // candle / lantern flicker on strongly emissive parts (uFlicker = amount)
          float fl = 1.0 + uFlicker * em * (0.10 * sin(uTime * 9.0 + vIWorld.x * 3.1 + vIWorld.z * 2.3) + 0.06 * sin(uTime * 23.0 + vIWorld.y * 7.0));
          diffuseColor.rgb *= vColor.rgb * mix(uLight, vec3(1.0), em) * fl;
        #elif defined( USE_COLOR )
          diffuseColor.rgb *= vColor.rgb * uLight;
        #endif`,
          )),
        (e.fragmentShader = e.fragmentShader.replace(
          `#include <opaque_fragment>`,
          `diffuseColor.a = opacity;
#include <opaque_fragment>`,
        )));
    }),
    (n.customProgramCacheKey = () => `interior-room-v2`),
    n
  );
}
function yn() {
  return new pe({
    name: `interior-glass`,
    vertexColors: !0,
    transparent: !0,
    depthWrite: !1,
    roughness: 0.05,
    metalness: 0.15,
    envMapIntensity: 1.1,
    side: 0,
  });
}
function bn() {
  let e = new u({
    name: `interior-portal`,
    colorWrite: !1,
    depthWrite: !0,
    depthTest: !0,
    fog: !1,
  });
  return ((e.side = 0), e);
}
