// tokyo/assets/actors-qKVitB-C 126 — map
// Lines 58656-59001 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function xj(e, t, n) {
  bj.set(e, { key: t, tint: n });
}
var Sj = (e) => gj.includes(e);
function Cj(e) {
  let t = e.sex === `f`;
  if (e.age === `elder`) return _j(t ? `elder-f` : `elder-m`);
  if (e.age === `student`) return _j(t ? `student-f` : `student-m`);
  let n =
    e.outer?.style === `blazer` ||
    e.top?.style === `shirt` ||
    e.top?.style === `blouse`;
  return _j(t ? (n ? `office-f` : `casual-f`) : n ? `office-m2` : `casual-m`);
}
function wj(e) {
  if (!e) return vj.uncle;
  if (typeof e == `string`) {
    if (vj[e]) return vj[e];
    let t = yj[e];
    return t ? vj[t] : Sj(e) ? _j(e) : vj.uncle;
  }
  let t = bj.get(e);
  if (t) {
    let n = vj[t.key] ?? vj[yj[t.key] ?? ``] ?? Cj(e);
    return t.tint
      ? { avatar: n.avatar, scale: n.scale, tint: { ...n.tint, ...t.tint } }
      : n;
  }
  return Cj(e);
}
function Tj(e) {
  let t = e.outer?.color ?? e.top?.color,
    n = e.bottom?.color,
    r = e.hair?.color;
  if (t !== void 0 || n !== void 0 || r !== void 0)
    return { top: t, bottom: n, hair: r };
}
function Ej(e) {
  if (!e) return ``;
  let t = (e) => (e === void 0 ? `-` : e.toString(16));
  return `${t(e.top)}/${t(e.bottom)}/${t(e.hair)}/${e.amount ?? ``}`;
}
function Dj(e) {
  return bj.get(e)?.key;
}
var Oj = {
    api: null,
    Animator: null,
    bindRig: null,
    lib: null,
    ready: !1,
    failed: !1,
  },
  kj = null,
  Aj = new Map(),
  jj = new Map(),
  Mj = new Set();
function Nj() {
  return (kj ??= (async () => {
    try {
      let [e, n, r, i] = await Promise.all([
          t(
            () => import(`./api-C4Rqh13K.js`),
            __vite__mapDeps([
              10, 11, 1, 2, 3, 4, 5, 6, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
              22, 23, 24, 25, 26, 27, 28,
            ]),
          ),
          t(
            () => import(`./animator-B5fCfINc.js`),
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
          ),
          t(() => import(`./rig-BjRdQXtM.js`), __vite__mapDeps([8, 7])),
          t(() => import(`./clips-GNiXKOuW.js`), __vite__mapDeps([9, 7])),
        ]),
        a = await i.loadAnimLibrary();
      return (
        (Oj.api = e),
        (Oj.Animator = n.Animator),
        (Oj.bindRig = r.bindRig),
        (Oj.lib = a),
        (Oj.ready = !0),
        !0
      );
    } catch (e) {
      return (
        console.warn(
          `[missions] Rocketbox actors unavailable, using character-library bodies`,
          e,
        ),
        (Oj.failed = !0),
        !1
      );
    }
  })());
}
function Pj(e) {
  return Aj.get(e) ?? null;
}
var Fj = (e) => Mj.has(e) || Oj.failed;
function Ij(e) {
  let t = Aj.get(e);
  if (t) return Promise.resolve(t);
  let n = jj.get(e);
  return (
    n ||
      ((n = (async () => {
        if (!(await Nj()) || !Oj.api) return null;
        try {
          let t = await Oj.api.loadAvatarAsset(e);
          return (Aj.set(e, t), t);
        } catch (t) {
          return (
            console.warn(`[missions] avatar '${e}' failed to load`, t),
            Mj.add(e),
            null
          );
        }
      })()),
      jj.set(e, n)),
    n
  );
}
function Lj(e) {
  for (let t of e) !Aj.has(t) && !jj.has(t) && Ij(t);
}
var Rj = () => ({
    loaded: [...Aj.keys()],
    loading: jj.size - Aj.size - Mj.size,
    failed: [...Mj],
  }),
  zj = `
uniform vec4 uMtUp;
uniform vec2 uMtHand;
varying float vMtY;
varying float vMtHand;
`,
  Bj = `
vMtY = dot(uMtUp.xyz, position) + uMtUp.w;
#ifdef USE_SKINNING
  vMtHand = dot(skinWeight, vec4(equal(skinIndex, vec4(uMtHand.x)))) + dot(skinWeight, vec4(equal(skinIndex, vec4(uMtHand.y))));
#else
  vMtHand = 0.0;
#endif
`,
  Vj = `
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
  Hj = `
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
  Uj = `gAlbedo = diffuseColor.rgb;`,
  Wj = !1,
  Gj = new Map(),
  Kj = new Map(),
  qj = new L(),
  Jj = new L();
function Yj(e, t) {
  let n = Kj.get(e.entry.id);
  if (!n) {
    e.root.updateMatrixWorld(!0);
    let r = t.geometry.attributes.position,
      i = 0,
      a = 0;
    for (let e = 1; e < r.count; e++) {
      let t = r.getY(e);
      (t < r.getY(i) && (i = e), t > r.getY(a) && (a = e));
    }
    (t.getVertexPosition(i, qj).applyMatrix4(t.matrixWorld),
      t.getVertexPosition(a, Jj).applyMatrix4(t.matrixWorld));
    let o = r.getY(a) - r.getY(i),
      s = o > 1e-6 ? (Jj.y - qj.y) / o : 1;
    ((n = new ge(0, s, 0, qj.y - s * r.getY(i))), Kj.set(e.entry.id, n));
  }
  return n;
}
function Xj(e) {
  let t = e.skeleton?.bones ?? [],
    n = (e) => t.findIndex((t) => e.test(t.name));
  return new Ce(n(/L[ _]Hand$/), n(/R[ _]Hand$/));
}
var Zj = (e, t) => (e === void 0 ? t.setRGB(1, 1, 1) : t.setHex(e));
function Qj(e, t, n, r) {
  let i = t.material;
  if (!i || i.name !== `rbx-atlas`) return i;
  let a = `${e.entry.id}|${i.uuid}|${Ej(n)}`,
    o = Gj.get(a);
  if (o) return o;
  ((o = new ye({
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
      uMtUp: { value: Yj(e, t) },
      uMtHand: { value: Xj(t) },
      uMtTop: { value: Zj(n?.top, new Me()) },
      uMtBot: { value: Zj(n?.bottom, new Me()) },
      uMtHair: { value: Zj(n?.hair, new Me()) },
      uMtAmt: {
        value: new ge(
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
        !e.fragmentShader.includes(Uj))
      ) {
        (Wj ||
          console.warn(
            `[missions] avatar shader changed: actor tints disabled`,
          ),
          (Wj = !0));
        return;
      }
      ((e.vertexShader = e.vertexShader
        .replace(`#include <common>`, `#include <common>\n${zj}`)
        .replace(`#include <begin_vertex>`, `#include <begin_vertex>\n${Bj}`)),
        (e.fragmentShader = e.fragmentShader
          .replace(`#include <common>`, `#include <common>\n${Vj}`)
          .replace(Uj, `${Hj}\n  ${Uj}`)));
    }),
    (o.customProgramCacheKey = () => `rbx-avatar-v2-atlas-mt`),
    Object.defineProperty(o.userData, "dye", { value: c, enumerable: !1 }),
    Gj.set(a, o),
    o
  );
}
var $j = (e) => e.params.get(`actors`) !== `library` && !Oj.failed,
  eM = new Map(),
  tM = 0;
function nM(e) {
  let t = e.quality;
  return t?.mobile || t?.level === `low` ? 1 : 0;
}
function rM(e, t) {
  let n = `${e.id}|${t}`,
    r = eM.get(n);
  if (!r) {
    let i = performance.now();
    ((r = t === 0 ? ln(e) : ln(e, { lod: 1, atlas: null })),
      (tM += performance.now() - i),
      eM.set(n, r));
  }
  return r;
}
function iM(e) {
  let t = kn(e.root),
    n = null;
  t.traverse((e) => {
    !n && e.isSkinnedMesh && (n = e);
  });
  let r = n;
  return (
    (r.boundingSphere = e.mesh.boundingSphere
      ? e.mesh.boundingSphere.clone()
      : new m(new L(0, 0.9, 0), 1.3)),
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
function aM(e, t) {
  if ($j(e)) {
    for (let e of t) Ij(wj(e).avatar);
    return;
  }
  let n = nM(e);
  for (let e of t) {
    let t = typeof e == `string` ? (LM(e) ?? FM.uncle) : e,
      r = `${t.id}|${n}`;
    eM.has(r) ||
      oM.has(r) ||
      (oM.add(r),
      rn(t, n === 0 ? {} : { lod: 1, atlas: null })
        .then((e) => {
          eM.has(r) || eM.set(r, e);
        })
        .catch(() => {})
        .finally(() => oM.delete(r)));
  }
}
var oM = new Set();
