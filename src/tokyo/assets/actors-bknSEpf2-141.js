// tokyo/assets/actors-bknSEpf2 141 — map
// Lines 64577-64922 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function HP(e, t, n) {
  VP.set(e, { key: t, tint: n });
}
var UP = (e) => LP.includes(e);
function WP(e) {
  let t = e.sex === `f`;
  if (e.age === `elder`) return RP(t ? `elder-f` : `elder-m`);
  if (e.age === `student`) return RP(t ? `student-f` : `student-m`);
  let n =
    e.outer?.style === `blazer` ||
    e.top?.style === `shirt` ||
    e.top?.style === `blouse`;
  return RP(t ? (n ? `office-f` : `casual-f`) : n ? `office-m2` : `casual-m`);
}
function GP(e) {
  if (!e) return zP.uncle;
  if (typeof e == `string`) {
    if (zP[e]) return zP[e];
    let t = BP[e];
    return t ? zP[t] : UP(e) ? RP(e) : zP.uncle;
  }
  let t = VP.get(e);
  if (t) {
    let n = zP[t.key] ?? zP[BP[t.key] ?? ``] ?? WP(e);
    return t.tint
      ? { avatar: n.avatar, scale: n.scale, tint: { ...n.tint, ...t.tint } }
      : n;
  }
  return WP(e);
}
function KP(e) {
  let t = e.outer?.color ?? e.top?.color,
    n = e.bottom?.color,
    r = e.hair?.color;
  if (t !== void 0 || n !== void 0 || r !== void 0)
    return { top: t, bottom: n, hair: r };
}
function qP(e) {
  if (!e) return ``;
  let t = (e) => (e === void 0 ? `-` : e.toString(16));
  return `${t(e.top)}/${t(e.bottom)}/${t(e.hair)}/${e.amount ?? ``}`;
}
function JP(e) {
  return VP.get(e)?.key;
}
var YP = {
    api: null,
    Animator: null,
    bindRig: null,
    lib: null,
    ready: !1,
    failed: !1,
  },
  XP = null,
  ZP = new Map(),
  QP = new Map(),
  $P = new Set();
function eF() {
  return (XP ??= (async () => {
    try {
      let [e, n, r, i] = await Promise.all([
          t(
            () => import(`./api-CqQ1pZ52.js`),
            __vite__mapDeps([
              11, 12, 1, 2, 3, 4, 5, 6, 7, 13, 14, 15, 16, 17, 18, 19, 20, 21,
              22, 23, 24, 25, 26, 27, 28, 29, 30,
            ]),
          ),
          t(
            () => import(`./animator-ZoMjw9Jq.js`),
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
          ),
          t(() => import(`./rig-BjRdQXtM.js`), __vite__mapDeps([9, 8])),
          t(() => import(`./clips-GNiXKOuW.js`), __vite__mapDeps([10, 8])),
        ]),
        a = await i.loadAnimLibrary();
      return (
        (YP.api = e),
        (YP.Animator = n.Animator),
        (YP.bindRig = r.bindRig),
        (YP.lib = a),
        (YP.ready = !0),
        !0
      );
    } catch (e) {
      return (
        console.warn(
          `[missions] Rocketbox actors unavailable, using character-library bodies`,
          e,
        ),
        (YP.failed = !0),
        !1
      );
    }
  })());
}
function tF(e) {
  return ZP.get(e) ?? null;
}
var nF = (e) => $P.has(e) || YP.failed;
function rF(e) {
  let t = ZP.get(e);
  if (t) return Promise.resolve(t);
  let n = QP.get(e);
  return (
    n ||
      ((n = (async () => {
        if (!(await eF()) || !YP.api) return null;
        try {
          let t = await YP.api.loadAvatarAsset(e);
          return (ZP.set(e, t), t);
        } catch (t) {
          return (
            console.warn(`[missions] avatar '${e}' failed to load`, t),
            $P.add(e),
            null
          );
        }
      })()),
      QP.set(e, n)),
    n
  );
}
function iF(e) {
  for (let t of e) !ZP.has(t) && !QP.has(t) && rF(t);
}
var aF = () => ({
    loaded: [...ZP.keys()],
    loading: QP.size - ZP.size - $P.size,
    failed: [...$P],
  }),
  oF = `
uniform vec4 uMtUp;
uniform vec2 uMtHand;
varying float vMtY;
varying float vMtHand;
`,
  sF = `
vMtY = dot(uMtUp.xyz, position) + uMtUp.w;
#ifdef USE_SKINNING
  vMtHand = dot(skinWeight, vec4(equal(skinIndex, vec4(uMtHand.x)))) + dot(skinWeight, vec4(equal(skinIndex, vec4(uMtHand.y))));
#else
  vMtHand = 0.0;
#endif
`,
  cF = `
uniform vec3 uMtTop;
uniform vec3 uMtBot;
uniform vec3 uMtHair;
uniform vec4 uMtAmt;
varying float vMtY;
varying float vMtHand;
float mtSkinTest(vec3 c, float l, float slack) {
  float r = max(c.r, 1e-4);
  float gr = c.g / r, br = c.b / r, d = gr - br;
  return smoothstep(0.4 - slack, 0.46 - slack, gr) * (1.0 - smoothstep(0.66 + slack, 0.72 + slack, gr))
    * smoothstep(0.17 - slack, 0.23 - slack, br) * (1.0 - smoothstep(0.58 + slack, 0.64 + slack, br))
    * smoothstep(0.06 - slack, 0.1 - slack, d) * (1.0 - smoothstep(0.26 + slack, 0.31 + slack, d))
    * smoothstep(0.12 - slack, 0.18 - slack, l);
}
`,
  lF = `
  if (uMtAmt.x + uMtAmt.y + uMtAmt.z > 0.001) {
    vec3 mtC = diffuseColor.rgb;
    const vec3 mtW = vec3(0.2126, 0.7152, 0.0722);
    float mtL = dot(mtC, mtW);
    // local mean of the garment (a coarse mip): the dye keeps the fabric's detail RELATIVE to it (folds, stripes,
    // prints, seams) and takes the new colour at its own brightness — a black tee can become a pink courier jacket
    vec3 mtMeanC = textureLod(map, vMapUv, 4.0).rgb;
    float mtMean = max(dot(mtMeanC, mtW), 0.012);
    // (compressed: a light dye over a dark, noisy fabric must not turn mottled)
    float mtDetail = clamp(1.0 + (mtL / mtMean - 1.0) * 0.6, 0.45, 1.4);
    float mtBody = 1.0 - step(0.3334, vMapUv.x);
    // skin never takes the dye: hands (skin weights), the mask's skin weight, and skin-coloured texels whose
    // neighbourhood is skin-coloured too (bare arms, legs, necklines) — chromaticity AND albedo brightness, so khaki /
    // brown fabrics still dye
    float mtSkinC = mtSkinTest(mtC, mtL, 0.0) * mtSkinTest(mtMeanC, mtMean, 0.05);
    float mtSkin = max(max(smoothstep(0.2, 0.55, gSkin), mtSkinC), smoothstep(0.3, 0.7, vMtHand));
    float mtCloth = mtBody * (1.0 - mtSkin) * (1.0 - gHair);
    float mtTop = smoothstep(uMtAmt.w - 0.035, uMtAmt.w + 0.035, vMtY);
    float mtShoe = 1.0 - smoothstep(0.11, 0.15, vMtY);
    mtC = mix(mtC, uMtTop * mtDetail, mtCloth * mtTop * uMtAmt.x);
    mtC = mix(mtC, uMtBot * mtDetail, mtCloth * (1.0 - mtTop) * (1.0 - mtShoe) * uMtAmt.y);
    float mtHairW = gHair * (1.0 - mtBody) * uMtAmt.z;
    mtC = mix(mtC, uMtHair * mtDetail, mtHairW);
    diffuseColor.rgb = mtC;
  }
`,
  uF = `gAlbedo = diffuseColor.rgb;`,
  dF = !1,
  fF = new Map(),
  pF = new Map(),
  mF = new V(),
  hF = new V();
function gF(e, t) {
  let n = pF.get(e.entry.id);
  if (!n) {
    e.root.updateMatrixWorld(!0);
    let r = t.geometry.attributes.position,
      i = 0,
      a = 0;
    for (let e = 1; e < r.count; e++) {
      let t = r.getY(e);
      (t < r.getY(i) && (i = e), t > r.getY(a) && (a = e));
    }
    (t.getVertexPosition(i, mF).applyMatrix4(t.matrixWorld),
      t.getVertexPosition(a, hF).applyMatrix4(t.matrixWorld));
    let o = r.getY(a) - r.getY(i),
      s = o > 1e-6 ? (hF.y - mF.y) / o : 1;
    ((n = new we(0, s, 0, mF.y - s * r.getY(i))), pF.set(e.entry.id, n));
  }
  return n;
}
function _F(e) {
  let t = e.skeleton?.bones ?? [],
    n = (e) => t.findIndex((t) => e.test(t.name));
  return new ie(n(/L[ _]Hand$/), n(/R[ _]Hand$/));
}
var vF = (e, t) => (e === void 0 ? t.setRGB(1, 1, 1) : t.setHex(e));
function yF(e, t, n, r) {
  let i = t.material;
  if (!i || i.name !== `rbx-atlas`) return i;
  let a = `${e.entry.id}|${i.uuid}|${qP(n)}`,
    o = fF.get(a);
  if (o) return o;
  ((o = new C({
    name: `rbx-atlas-mt`,
    map: i.map,
    normalMap: i.normalMap,
    roughnessMap: i.roughnessMap,
    roughness: i.roughness,
    metalness: i.metalness,
    envMapIntensity: i.envMapIntensity,
    side: i.side,
    alphaTest: i.alphaTest,
    transparent: i.transparent,
    depthWrite: i.depthWrite,
  })),
    i.normalMap && o.normalScale.copy(i.normalScale));
  let s = n?.amount ?? 0.9,
    c = {
      uMtUp: { value: gF(e, t) },
      uMtHand: { value: _F(t) },
      uMtTop: { value: vF(n?.top, new j()) },
      uMtBot: { value: vF(n?.bottom, new j()) },
      uMtHair: { value: vF(n?.hair, new j()) },
      uMtAmt: {
        value: new we(
          n?.top === void 0 ? 0 : s,
          n?.bottom === void 0 ? 0 : s,
          n?.hair === void 0 ? 0 : Math.min(1, s + 0.05),
          r,
        ),
      },
    },
    l = i.onBeforeCompile;
  return (
    (o.onBeforeCompile = (e, t) => {
      if (
        (l.call(i, e, t),
        Object.assign(e.uniforms, c),
        !e.fragmentShader.includes(uF))
      ) {
        (dF ||
          console.warn(
            `[missions] avatar shader changed: actor tints disabled`,
          ),
          (dF = !0));
        return;
      }
      ((e.vertexShader = e.vertexShader
        .replace(`#include <common>`, `#include <common>\n${oF}`)
        .replace(`#include <begin_vertex>`, `#include <begin_vertex>\n${sF}`)),
        (e.fragmentShader = e.fragmentShader
          .replace(`#include <common>`, `#include <common>\n${cF}`)
          .replace(uF, `${lF}\n  ${uF}`)));
    }),
    (o.customProgramCacheKey = () => `rbx-avatar-v2-atlas-mt`),
    Object.defineProperty(o.userData, "dye", { value: c, enumerable: !1 }),
    fF.set(a, o),
    o
  );
}
var bF = (e) => e.params.get(`actors`) !== `library` && !YP.failed,
  xF = new Map(),
  SF = 0;
function CF(e) {
  let t = e.quality;
  return t?.mobile || t?.level === `low` ? 1 : 0;
}
function wF(e, t) {
  let n = `${e.id}|${t}`,
    r = xF.get(n);
  if (!r) {
    let i = performance.now();
    ((r = t === 0 ? _n(e) : _n(e, { lod: 1, atlas: null })),
      (SF += performance.now() - i),
      xF.set(n, r));
  }
  return r;
}
function TF(e) {
  let t = zn(e.root),
    n = null;
  t.traverse((e) => {
    !n && e.isSkinnedMesh && (n = e);
  });
  let r = n;
  return (
    (r.boundingSphere = e.mesh.boundingSphere
      ? e.mesh.boundingSphere.clone()
      : new b(new V(0, 0.9, 0), 1.3)),
    (r.frustumCulled = !0),
    {
      ...e,
      root: t,
      mesh: r,
      bones: r.skeleton.bones,
      skeleton: r.skeleton,
      dispose() {
        r.skeleton.dispose();
      },
    }
  );
}
function EF(e, t) {
  if (bF(e)) {
    for (let e of t) rF(GP(e).avatar);
    return;
  }
  let n = CF(e);
  for (let e of t) {
    let t = typeof e == `string` ? (iI(e) ?? nI.uncle) : e,
      r = `${t.id}|${n}`;
    xF.has(r) ||
      DF.has(r) ||
      (DF.add(r),
      fn(t, n === 0 ? {} : { lod: 1, atlas: null })
        .then((e) => {
          xF.has(r) || xF.set(r, e);
        })
        .catch(() => {})
        .finally(() => DF.delete(r)));
  }
}
var DF = new Set();
