// tokyo__assets__actors-Bnj6Q1ad 81 — replace
// Lines 40943-41011 of readable/tokyo__assets__actors-Bnj6Q1ad.pretty.js (statement-aligned).
function ex(e, t) {
  let n = new _e({
    name: `peds-rbx`,
    map: e.map,
    normalMap: e.normalMap,
    roughnessMap: e.roughnessMap,
    roughness: e.roughness,
    metalness: 0,
    envMapIntensity: e.envMapIntensity,
    side: e.side,
    alphaTest: e.alphaTest,
  });
  n.normalScale.copy(e.normalScale);
  let r = e.onBeforeCompile;
  return (
    (n.onBeforeCompile = (n, i) => {
      (r.call(e, n, i), Object.assign(n.uniforms, t), F_(n.uniforms));
      let a = C_()
        ? `#define PED_CHARFILL
`
        : ``;
      ((n.vertexShader = n.vertexShader
        .replace(
          `#include <common>`,
          `#include <common>
` +
            Xb +
            `varying vec2 vPedLamp;
`,
        )
        .replace(
          `#include <begin_vertex>`,
          `#include <begin_vertex>
  vAvBind = position;`,
        )
        .replace(
          `#include <project_vertex>`,
          `#include <project_vertex>
` + w_,
        )),
        (n.fragmentShader = n.fragmentShader
          .replace(
            `#include <common>`,
            `#include <common>
` +
              a +
              Zb +
              T_,
          )
          .replace(
            `#include <clipping_planes_fragment>`,
            `#include <clipping_planes_fragment>
` + Qb,
          )
          .replace(
            `#include <map_fragment>`,
            `#include <map_fragment>
` + $b,
          )
          .replace(
            `#include <emissivemap_fragment>`,
            `#include <emissivemap_fragment>
  totalEmissiveRadiance += pedLampLight(diffuseColor.rgb, normal, uNight);`,
          )));
    }),
    (n.customProgramCacheKey = () => `peds-rbx-crowd-v2` + (C_() ? `-cf` : ``)),
    n
  );
}
