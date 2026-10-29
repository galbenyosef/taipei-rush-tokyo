// tokyo/assets/world-CVm1JHks 81 — replace
// Lines 27289-27469 of readable/tokyo/assets/world-CVm1JHks.pretty.js (statement-aligned).
function Jg(e, t, n, r) {
  let i = { m: [], c: [] },
    a = new u(),
    o = new U(),
    s = new U(),
    c = new U(0, 1, 0),
    l = 0;
  for (let u = n.z0; u < n.z1; u += r)
    for (let d = n.x0; d < n.x1; d += r) {
      l++;
      let n = d + (Mg(l, 1, 13) - 0.5) * r * 0.95,
        f = u + (Mg(l, 2, 13) - 0.5) * r * 0.95,
        p = e(n, f);
      if (!t(n, f, p)) continue;
      let m = 0.55 + Mg(l, 3, 13) * 0.75;
      (s.set(n, p - 0.15, f),
        a.setFromAxisAngle(c, Mg(l, 4, 13) * Math.PI * 2),
        o.set(
          m * (0.85 + Mg(l, 5, 13) * 0.35),
          m * (0.75 + Mg(l, 6, 13) * 0.5),
          m,
        ),
        i.m.push(new O().compose(s, a, o)));
      let h = 0.8 + Mg(l, 7, 13) * 0.4,
        g = Mg(l, 8, 13) < 0.2 ? 1.12 : 1;
      i.c.push(new E(h * g, h, h * (g > 1 ? 0.8 : 1)));
    }
  return i;
}
function Yg(e) {
  let t = new H({ vertexColors: !0, map: e, alphaTest: 0.45, side: 2 });
  return (
    (t.name = `env-trees-near`),
    (t.defines = { FOG_NO_CLIP: `` }),
    (t.onBeforeCompile = (e) => {
      ((e.uniforms.uTreeFade = lm.uTreeFade),
        (e.uniforms.uWindAmt = lm.uWindAmt),
        (e.uniforms.uTime = q.uTime),
        (e.uniforms.uWet = q.uWet),
        (e.uniforms.uNight = q.uNight),
        (e.uniforms.uSunDir = q.uSunDir),
        (e.vertexShader = e.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
uniform vec2 uTreeFade;
uniform float uWindAmt;
uniform float uTime;
varying vec3 vFW;`,
          )
          .replace(
            `#include <begin_vertex>`,
            `#include <begin_vertex>
        {
          #ifdef USE_INSTANCING
          mat4 tM = modelMatrix * instanceMatrix;
          #else
          mat4 tM = modelMatrix;
          #endif
          vec4 tiW = tM * vec4(0.0, 0.0, 0.0, 1.0);
          float tdist = distance(tiW.xyz, cameraPosition);
          float tk = 1.0 - smoothstep(uTreeFade.x, uTreeFade.y, tdist);
          float h = max(transformed.y - 2.5, 0.0) / 6.0;
          float sw = sin(uTime * 1.4 + tiW.x * 0.05 + tiW.z * 0.07) + 0.5 * sin(uTime * 2.3 + tiW.z * 0.11);
          // leaf flutter on top of the crown sway (cards only move at their own phase)
          float fl = sin(uTime * 4.1 + position.x * 1.7 + position.z * 1.3 + tiW.x) * 0.035 * uWindAmt * h;
          transformed.x += sw * 0.12 * uWindAmt * h + fl;
          transformed.z += sw * 0.07 * uWindAmt * h - fl;
          transformed *= tk;
          vFW = (tM * vec4(transformed, 1.0)).xyz;
        }`,
          )),
        (e.fragmentShader = e.fragmentShader
          .replace(
            `#include <common>`,
            `#include <common>
uniform float uWet;
uniform float uNight;
uniform vec3 uSunDir;
varying vec3 vFW;`,
          )
          .replace(
            `#include <map_fragment>`,
            `{
          // camera inside a crown (trail switchbacks): dither the leaves away within ~1.6 m of the eye
          float tcd = distance(vFW, cameraPosition);
          if (tcd < 1.6) {
            if (tcd < 1.1) discard;
            vec2 tq = mod(floor(gl_FragCoord.xy), 4.0);
            float tb = mod(tq.x * 4.0 + tq.y * 11.0 + tq.x * tq.y * 3.0, 16.0) / 16.0;
            if (tb > (tcd - 1.1) / 0.5) discard;
          }
        }
        vec4 fTex = texture2D(map, vMapUv);
        {
          // alpha-tested leaves thin out in the small mips: raise coverage with the mip level
          vec2 tdx = dFdx(vMapUv) * vec2(${Cg}.0, ${wg}.0), tdy = dFdy(vMapUv) * vec2(${Cg}.0, ${wg}.0);
          float mipL = max(0.0, 0.5 * log2(max(dot(tdx, tdx), dot(tdy, tdy))));
          fTex.rgb /= max(fTex.a, 1e-4);
          fTex.a = min(1.0, fTex.a * (1.0 + 0.3 * mipL));
        }
        diffuseColor *= fTex;`,
          )
          .replace(
            `#include <color_fragment>`,
            `#include <color_fragment>
diffuseColor.rgb *= 1.0 - 0.2 * uWet;`,
          )
          .replace(
            `#include <normal_fragment_begin>`,
            `float faceDirection = 1.0;
vec3 normal = normalize( vNormal );`,
          )
          .replace(
            `#include <emissivemap_fragment>`,
            `#include <emissivemap_fragment>
        {
          // sunlight through the leaves when the crown is backlit
          vec3 sdv = normalize((viewMatrix * vec4(uSunDir, 0.0)).xyz);
          float bl = pow(max(0.0, dot(normalize(-vViewPosition), sdv)), 3.0) * max(0.0, uSunDir.y + 0.05);
          totalEmissiveRadiance += diffuseColor.rgb * vec3(1.0, 0.9, 0.5) * bl * 0.9 * (1.0 - uNight);
        }`,
          )));
    }),
    (t.customProgramCacheKey = () => `env-trees-near-v1`),
    t
  );
}
var Xg = [`clear`, `cloudy`, `rain`, `storm`, `fog`],
  Zg = 0.35,
  Qg = 0.08,
  $g = 700,
  e_ = [
    { rect: { minX: -804.05, minZ: 446.5, maxX: -796.85, maxZ: 540 }, y: 7.3 },
  ];
function t_(e, t = !1) {
  if (
    typeof location > `u` ||
    new URLSearchParams(location.search).get(`gpumem`) !== `0`
  ) {
    e.setIndex(null);
    for (let n of Object.keys(e.attributes)) {
      if (t && n === `position`) continue;
      let r = e.attributes[n];
      r.isBufferAttribute &&
        r.usage === 35044 &&
        r.onUpload(function () {
          let e = this.array.constructor;
          this.array = new e(0);
        });
    }
  }
}
var n_ = [7e5, 104e4],
  r_ = [67e3, 100500];
function i_(e, t, n) {
  let r = e.attributes.aEmit.array,
    i = new U();
  return new vg(
    e,
    260,
    (e) => {
      if (Om(r[e * 4 + 2])) return `wheel`;
      let n = Mm(t, e);
      return n === 2 ? `detail` : n === 1 ? `main` : null;
    },
    (e, t) => {
      if (e !== `wheel`) return;
      let r =
        Math.max(t.max.x - n.x, n.x - t.min.x, t.max.y - n.y, n.y - t.min.y) +
        2;
      t.expandByPoint(i.set(n.x - r, n.y - r, t.min.z)).expandByPoint(
        i.set(n.x + r, n.y + r, t.max.z),
      );
    },
  );
}
var a_ = (e) => {
  let t = Math.sin(e * 127.1 + 311.7) * 43758.5453;
  return t - Math.floor(t);
};
