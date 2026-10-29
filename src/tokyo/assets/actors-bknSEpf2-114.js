// tokyo/assets/actors-bknSEpf2 114 — replace
// Lines 52250-52318 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function QD(e, t) {
  let n = new C({
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
      (r.call(e, n, i), Object.assign(n.uniforms, t), Mw(n.uniforms));
      let a = bw()
        ? `#define PED_CHARFILL
`
        : ``;
      ((n.vertexShader = n.vertexShader
        .replace(
          `#include <common>`,
          `#include <common>
` +
            JD +
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
` + xw,
        )),
        (n.fragmentShader = n.fragmentShader
          .replace(
            `#include <common>`,
            `#include <common>
` +
              a +
              YD +
              Sw,
          )
          .replace(
            `#include <clipping_planes_fragment>`,
            `#include <clipping_planes_fragment>
` + XD,
          )
          .replace(
            `#include <map_fragment>`,
            `#include <map_fragment>
` + ZD,
          )
          .replace(
            `#include <emissivemap_fragment>`,
            `#include <emissivemap_fragment>
  totalEmissiveRadiance += pedLampLight(diffuseColor.rgb, normal, uNight);`,
          )));
    }),
    (n.customProgramCacheKey = () => `peds-rbx-crowd-v2` + (bw() ? `-cf` : ``)),
    n
  );
}
