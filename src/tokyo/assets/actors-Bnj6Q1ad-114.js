// tokyo/assets/actors-Bnj6Q1ad 114 — map
// Lines 54753-55098 of readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js (statement-aligned).
function LO(e, t, n) {
  IO.set(e, { key: t, tint: n });
}
var RO = (e) => MO.includes(e);
function zO(e) {
  let t = e.sex === `f`;
  if (e.age === `elder`) return NO(t ? `elder-f` : `elder-m`);
  if (e.age === `student`) return NO(t ? `student-f` : `student-m`);
  let n =
    e.outer?.style === `blazer` ||
    e.top?.style === `shirt` ||
    e.top?.style === `blouse`;
  return NO(t ? (n ? `office-f` : `casual-f`) : n ? `office-m2` : `casual-m`);
}
function BO(e) {
  if (!e) return PO.uncle;
  if (typeof e == `string`) {
    if (PO[e]) return PO[e];
    let t = FO[e];
    return t ? PO[t] : RO(e) ? NO(e) : PO.uncle;
  }
  let t = IO.get(e);
  if (t) {
    let n = PO[t.key] ?? PO[FO[t.key] ?? ``] ?? zO(e);
    return t.tint
      ? { avatar: n.avatar, scale: n.scale, tint: { ...n.tint, ...t.tint } }
      : n;
  }
  return zO(e);
}
function VO(e) {
  let t = e.outer?.color ?? e.top?.color,
    n = e.bottom?.color,
    r = e.hair?.color;
  if (t !== void 0 || n !== void 0 || r !== void 0)
    return { top: t, bottom: n, hair: r };
}
function HO(e) {
  if (!e) return ``;
  let t = (e) => (e === void 0 ? `-` : e.toString(16));
  return `${t(e.top)}/${t(e.bottom)}/${t(e.hair)}/${e.amount ?? ``}`;
}
function UO(e) {
  return IO.get(e)?.key;
}
var WO = {
    api: null,
    Animator: null,
    bindRig: null,
    lib: null,
    ready: !1,
    failed: !1,
  },
  GO = null,
  KO = new Map(),
  qO = new Map(),
  JO = new Set();
function YO() {
  return (GO ??= (async () => {
    try {
      let [e, n, r, i] = await Promise.all([
          t(
            () => import(`./api-tBXVzspF.js`),
            __vite__mapDeps([
              6, 7, 1, 2, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
              22, 23, 24, 25,
            ]),
          ),
          t(
            () => import(`./animator-C4Q6-_Wy.js`),
            __vite__mapDeps([0, 1, 2, 3, 4]),
          ),
          t(() => import(`./rig-BjRdQXtM.js`), __vite__mapDeps([4, 3])),
          t(() => import(`./clips-B74kfFEX.js`), __vite__mapDeps([5, 3])),
        ]),
        a = await i.loadAnimLibrary();
      return (
        (WO.api = e),
        (WO.Animator = n.Animator),
        (WO.bindRig = r.bindRig),
        (WO.lib = a),
        (WO.ready = !0),
        !0
      );
    } catch (e) {
      return (
        console.warn(
          `[missions] Rocketbox actors unavailable, using character-library bodies`,
          e,
        ),
        (WO.failed = !0),
        !1
      );
    }
  })());
}
function XO(e) {
  return KO.get(e) ?? null;
}
var ZO = (e) => JO.has(e) || WO.failed;
function QO(e) {
  let t = KO.get(e);
  if (t) return Promise.resolve(t);
  let n = qO.get(e);
  return (
    n ||
      ((n = (async () => {
        if (!(await YO()) || !WO.api) return null;
        try {
          let t = await WO.api.loadAvatarAsset(e);
          return (KO.set(e, t), t);
        } catch (t) {
          return (
            console.warn(`[missions] avatar '${e}' failed to load`, t),
            JO.add(e),
            null
          );
        }
      })()),
      qO.set(e, n)),
    n
  );
}
function $O(e) {
  for (let t of e) !KO.has(t) && !qO.has(t) && QO(t);
}
var ek = () => ({
    loaded: [...KO.keys()],
    loading: qO.size - KO.size - JO.size,
    failed: [...JO],
  }),
  tk = `
uniform vec4 uMtUp;
uniform vec2 uMtHand;
varying float vMtY;
varying float vMtHand;
`,
  nk = `
vMtY = dot(uMtUp.xyz, position) + uMtUp.w;
#ifdef USE_SKINNING
  vMtHand = dot(skinWeight, vec4(equal(skinIndex, vec4(uMtHand.x)))) + dot(skinWeight, vec4(equal(skinIndex, vec4(uMtHand.y))));
#else
  vMtHand = 0.0;
#endif
`,
  rk = `
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
  ik = `
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
  ak = `gAlbedo = diffuseColor.rgb;`,
  ok = !1,
  sk = new Map(),
  ck = new Map(),
  lk = new R(),
  uk = new R();
function dk(e, t) {
  let n = ck.get(e.entry.id);
  if (!n) {
    e.root.updateMatrixWorld(!0);
    let r = t.geometry.attributes.position,
      i = 0,
      a = 0;
    for (let e = 1; e < r.count; e++) {
      let t = r.getY(e);
      (t < r.getY(i) && (i = e), t > r.getY(a) && (a = e));
    }
    (t.getVertexPosition(i, lk).applyMatrix4(t.matrixWorld),
      t.getVertexPosition(a, uk).applyMatrix4(t.matrixWorld));
    let o = r.getY(a) - r.getY(i),
      s = o > 1e-6 ? (uk.y - lk.y) / o : 1;
    ((n = new xe(0, s, 0, lk.y - s * r.getY(i))), ck.set(e.entry.id, n));
  }
  return n;
}
function fk(e) {
  let t = e.skeleton?.bones ?? [],
    n = (e) => t.findIndex((t) => e.test(t.name));
  return new le(n(/L[ _]Hand$/), n(/R[ _]Hand$/));
}
var pk = (e, t) => (e === void 0 ? t.setRGB(1, 1, 1) : t.setHex(e));
function mk(e, t, n, r) {
  let i = t.material;
  if (!i || i.name !== `rbx-atlas`) return i;
  let a = `${e.entry.id}|${i.uuid}|${HO(n)}`,
    o = sk.get(a);
  if (o) return o;
  ((o = new _e({
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
      uMtUp: { value: dk(e, t) },
      uMtHand: { value: fk(t) },
      uMtTop: { value: pk(n?.top, new Ae()) },
      uMtBot: { value: pk(n?.bottom, new Ae()) },
      uMtHair: { value: pk(n?.hair, new Ae()) },
      uMtAmt: {
        value: new xe(
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
        !e.fragmentShader.includes(ak))
      ) {
        (ok ||
          console.warn(
            `[missions] avatar shader changed: actor tints disabled`,
          ),
          (ok = !0));
        return;
      }
      ((e.vertexShader = e.vertexShader
        .replace(`#include <common>`, `#include <common>\n${tk}`)
        .replace(`#include <begin_vertex>`, `#include <begin_vertex>\n${nk}`)),
        (e.fragmentShader = e.fragmentShader
          .replace(`#include <common>`, `#include <common>\n${rk}`)
          .replace(ak, `${ik}\n  ${ak}`)));
    }),
    (o.customProgramCacheKey = () => `rbx-avatar-v2-atlas-mt`),
    Object.defineProperty(o.userData, "dye", { value: c, enumerable: !1 }),
    sk.set(a, o),
    o
  );
}
var hk = (e) => e.params.get(`actors`) !== `library` && !WO.failed,
  gk = new Map(),
  _k = 0;
function vk(e) {
  let t = e.quality;
  return t?.mobile || t?.level === `low` ? 1 : 0;
}
function yk(e, t) {
  let n = `${e.id}|${t}`,
    r = gk.get(n);
  if (!r) {
    let i = performance.now();
    ((r = t === 0 ? Xt(e) : Xt(e, { lod: 1, atlas: null })),
      (_k += performance.now() - i),
      gk.set(n, r));
  }
  return r;
}
function bk(e) {
  let t = _n(e.root),
    n = null;
  t.traverse((e) => {
    !n && e.isSkinnedMesh && (n = e);
  });
  let r = n;
  return (
    (r.boundingSphere = e.mesh.boundingSphere
      ? e.mesh.boundingSphere.clone()
      : new C(new R(0, 0.9, 0), 1.3)),
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
function xk(e, t) {
  if (hk(e)) {
    for (let e of t) QO(BO(e).avatar);
    return;
  }
  let n = vk(e);
  for (let e of t) {
    let t = typeof e == `string` ? ($k(e) ?? Zk.uncle) : e,
      r = `${t.id}|${n}`;
    gk.has(r) ||
      Sk.has(r) ||
      (Sk.add(r),
      Gt(t, n === 0 ? {} : { lod: 1, atlas: null })
        .then((e) => {
          gk.has(r) || gk.set(r, e);
        })
        .catch(() => {})
        .finally(() => Sk.delete(r)));
  }
}
var Sk = new Set();
