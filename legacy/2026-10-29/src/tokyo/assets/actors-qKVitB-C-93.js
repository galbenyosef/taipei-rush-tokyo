// tokyo/assets/actors-qKVitB-C 93 — replace
// Lines 44835-44903 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function RC(e, t) {
  let n = new ye({
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
      (r.call(e, n, i), Object.assign(n.uniforms, t), yb(n.uniforms));
      let a = sb()
        ? `#define PED_CHARFILL
`
        : ``;
      ((n.vertexShader = n.vertexShader
        .replace(
          `#include <common>`,
          `#include <common>
` +
            PC +
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
` + cb,
        )),
        (n.fragmentShader = n.fragmentShader
          .replace(
            `#include <common>`,
            `#include <common>
` +
              a +
              FC +
              lb,
          )
          .replace(
            `#include <clipping_planes_fragment>`,
            `#include <clipping_planes_fragment>
` + IC,
          )
          .replace(
            `#include <map_fragment>`,
            `#include <map_fragment>
` + LC,
          )
          .replace(
            `#include <emissivemap_fragment>`,
            `#include <emissivemap_fragment>
  totalEmissiveRadiance += pedLampLight(diffuseColor.rgb, normal, uNight);`,
          )));
    }),
    (n.customProgramCacheKey = () => `peds-rbx-crowd-v2` + (sb() ? `-cf` : ``)),
    n
  );
}
