// tokyo/assets/actors-qKVitB-C 28 — bones
// Lines 10398-10700 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
var il = {
    uCharFill: { value: new ge(1, 1, 1, 0) },
    uCharLm: { value: 1 },
    uHeroWet: { value: 0 },
  },
  al = `
${Cn}
uniform vec4 uCharFill;
uniform float uCharLm;
`,
  ol = `
  {
    vec3 hUp = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
    float hNy = dot(normal, hUp);
    float hTop = max(hNy, 0.0);
    // street lamps (additive; the pool under the hero's feet = the light around them)
    float hK = lmNightK() * uCharLm;
    if (hK > 0.0) {
      vec3 hL = lmCompress(lmSample().rgb) * (1.0 - smoothstep(8.5, 13.0, vLmW.y)) * hK;
      // where is the lamp? the pool's gradient around the feet points at it (±2 m): faces turned toward the brighter
      // side catch more of it, so the body keeps its form instead of a flat wash
      vec2 hUv = (vLmW.xz - uLmXf.xy) * uLmXf.zw;
      vec2 hD = 2.0 * uLmXf.zw;
      const vec3 hW = vec3(0.3, 0.5, 0.2);
      float hC = dot(texture2D(uStreetLm, hUv).rgb, hW) + 0.004;
      float hGx = dot(texture2D(uStreetLm, hUv + vec2(hD.x, 0.0)).rgb - texture2D(uStreetLm, hUv - vec2(hD.x, 0.0)).rgb, hW);
      float hGz = dot(texture2D(uStreetLm, hUv + vec2(0.0, hD.y)).rgb - texture2D(uStreetLm, hUv - vec2(0.0, hD.y)).rgb, hW);
      vec3 hG = vec3(hGx, 0.0, hGz) / hC;
      float hDir = clamp(length(hG) * 1.6, 0.0, 1.0);
      float hFace = hDir > 0.01 ? max(dot(normal, normalize((viewMatrix * vec4(hG, 0.0)).xyz)), 0.0) : 0.0;
      float hSide = 0.24 + 0.2 * (1.0 - hDir) + 0.5 * hDir * hFace;
      vec3 hE = hL * (hSide + (0.56 - hSide * 0.5) * hTop) + hL * vec3(1.0, 0.82, 0.62) * 0.18 * (1.0 - hTop) * (0.6 - 0.4 * hNy);
      totalEmissiveRadiance += lmLit(diffuseColor.rgb, hE);
    }
    // interior / concourse fill (soft, a little stronger from above)
    totalEmissiveRadiance += diffuseColor.rgb * uCharFill.rgb * (uCharFill.a * (0.32 + 0.14 * (hNy * 0.5 + 0.5)));
  }
`;
function sl(e) {
  if (e.userData.heroLit) return;
  ((e.userData.heroLit = !0),
    e.transparent && e.side === 2 && (e.forceSinglePass = !0));
  let t = e.onBeforeCompile;
  e.onBeforeCompile = (n, r) => {
    (t.call(e, n, r),
      bn(n.uniforms),
      (n.uniforms.uCharFill = il.uCharFill),
      (n.uniforms.uCharLm = il.uCharLm),
      (n.uniforms.uWet = il.uHeroWet),
      (n.vertexShader = n.vertexShader
        .replace(`#include <common>`, `#include <common>\n${Sn}`)
        .replace(
          `#include <project_vertex>`,
          `#include <project_vertex>\n${xn}`,
        )),
      (n.fragmentShader = n.fragmentShader
        .replace(`#include <common>`, `#include <common>\n${al}`)
        .replace(
          `#include <emissivemap_fragment>`,
          `#include <emissivemap_fragment>\n${ol}`,
        )));
  };
  let n = e.customProgramCacheKey.bind(e);
  e.customProgramCacheKey = () => `${n()}|hero-lit-v1`;
}
var cl = new Me(0.84, 0.9, 1),
  ll = class {
    fillK = 0;
    fill = new Me(1, 1, 1);
    reqK = 0;
    req = new Me(1, 1, 1);
    tmp = new Me();
    want(e, t) {
      t > this.reqK && ((this.reqK = Math.min(1.5, t)), this.req.setHex(e));
    }
    update(e, t, n, r, i, a, o) {
      let s = t && t.intensity > 0.002 ? t.intensity : 0,
        c = 0,
        l = Math.min(1, e * 3);
      (s > 0
        ? this.fill.setRGB(t.color.r, t.color.g, t.color.b)
        : this.reqK > 0
          ? ((c = this.reqK), this.fill.lerp(this.req, l))
          : n &&
            ((c = 0.55 + 0.35 * bt.uNight.value),
            this.fill.lerp(this.tmp.copy(cl), l)),
        (this.reqK = 0),
        (this.fillK = s > 0 ? s : this.fillK + (c - this.fillK) * l),
        this.fillK < 0.002 && c === 0 && s === 0 && (this.fillK = 0),
        il.uCharFill.value.set(
          this.fill.r,
          this.fill.g,
          this.fill.b,
          this.fillK,
        ));
      let u = il.uHeroWet,
        d = bt.uWet.value;
      if (o) {
        u.value = d;
        return;
      }
      let f = a > 0.05 ? Math.min(d, r ? 0 : i ? 0.3 : 1) : 0;
      u.value =
        f > u.value
          ? Math.min(f, u.value + e * 0.12)
          : Math.max(f, u.value - e * (r ? 0.03 : 0.012));
    }
  },
  ul = null;
function dl() {
  return (ul ??= t(
    () => import(`./api-C4Rqh13K.js`),
    __vite__mapDeps([
      10, 11, 1, 2, 3, 4, 5, 6, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
      24, 25, 26, 27, 28,
    ]),
  ));
}
function fl(e) {
  dl()
    .then((t) => t.preloadAvatars(e))
    .catch(() => {});
}
function pl(e) {
  dl()
    .then((t) => t.releaseAvatarAsset(e))
    .catch(() => {});
}
var ml = [
    [26, 0.03, -0.004, -0.006],
    [27, 0.014, -0.004, 0],
    [21, -0.004, 0, -0.01],
    [18, -0.008, -0.006, -0.004],
    [19, -0.008, -0.006, -0.004],
    [20, -0.008, -0.006, -0.004],
  ],
  hl = new L(),
  gl = new R();
function _l(e, t) {
  let n = new L(1 / 0, 1 / 0, 1 / 0),
    r = new L(-1 / 0, -1 / 0, -1 / 0);
  (e.root.updateMatrixWorld(!0), gl.copy(e.root.matrixWorld).invert());
  for (let i of e.meshes) {
    if (!/-(head|hair)$/.test(i.name)) continue;
    let e = i.geometry.attributes.position.count;
    for (let a = 0; a < e; a++)
      (i.getVertexPosition(a, hl),
        hl.applyMatrix4(i.matrixWorld).applyMatrix4(gl),
        !(hl.y < t - 0.015) && (n.min(hl), r.max(hl)));
  }
  return { min: n, max: r };
}
function vl(e, t) {
  let n = e.skeleton,
    r = t.skeleton;
  if (n.bones.length !== r.bones.length || !e.bindMatrix.equals(t.bindMatrix))
    return !1;
  for (let e = 0; e < n.bones.length; e++)
    if (
      n.bones[e] !== r.bones[e] ||
      !n.boneInverses[e].equals(r.boneInverses[e])
    )
      return !1;
  return !0;
}
function yl(e) {
  return (
    (typeof ImageBitmap < `u` && e instanceof ImageBitmap) ||
    (typeof HTMLImageElement < `u` && e instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement)
  );
}
function bl(e) {
  return !!e.quality.mobile && Qe() >= 1;
}
var xl = { textures: 0, compressed: 0, halved: 0, halvedMB: 0, reuploaded: 0 };
function Sl(e, t) {
  let n = bl(e),
    r = e.renderer?.gl?.properties,
    i = (e) => !!r && r.get(e).__webglTexture !== void 0;
  for (let e of t.meshes) {
    let t = e.material;
    for (let e of [t.map, t.normalMap, t.roughnessMap, t.metalnessMap]) {
      if (!e || e.userData.playerTrim) continue;
      ((e.userData.playerTrim = 1), xl.textures++);
      let t = i(e),
        r = e;
      if (r.isCompressedTexture) {
        xl.compressed++;
        let i = r.mipmaps;
        if (!i || !i.length) continue;
        if (n && i.length > 1 && i[0].width >= 512) {
          t && e.dispose();
          let n = i.shift();
          (xl.halved++,
            (xl.halvedMB += (n.data?.byteLength ?? 0) / 1048576),
            (e.image = { width: i[0].width, height: i[0].height }),
            (e.needsUpdate = !0));
        } else t && ((e.needsUpdate = !0), xl.reuploaded++);
        Ct(e);
        continue;
      }
      let a = e.image;
      if (yl(a) && a.width) {
        if (n && a.width >= 512) {
          let n = document.createElement(`canvas`);
          ((n.width = a.width >> 1), (n.height = a.height >> 1));
          let r = n.getContext(`2d`);
          if (r) {
            ((r.imageSmoothingQuality = `high`),
              r.drawImage(a, 0, 0, n.width, n.height),
              t && e.dispose(),
              a.close?.(),
              (e.image = n),
              (e.needsUpdate = !0),
              xl.halved++,
              Ct(e));
            continue;
          }
        }
        (t &&
          typeof ImageBitmap < `u` &&
          a instanceof ImageBitmap &&
          ((e.needsUpdate = !0), xl.reuploaded++),
          Ct(e));
      }
    }
  }
}
async function Cl(e, t) {
  let n = await (
      await dl()
    ).createAvatar(t, { castShadow: !0, receiveShadow: !0, fringe: !bl(e) }),
    r = n.meshes[0];
  for (let e of n.meshes)
    (sl(e.material),
      /-hair$/.test(e.name) && (e.castShadow = !1),
      e !== r &&
        e.skeleton !== r.skeleton &&
        vl(e, r) &&
        e.bind(r.skeleton, e.bindMatrix));
  let i = n.toPlayerRig(),
    a = n.adapter.proxy.joints,
    o = (a[H.lidL].y + a[H.lidR].y) / 2;
  Sl(e, n);
  let s = Uc(_l(n, o), n.height, o, a[H.head].z),
    c = rl({
      id: t,
      kind: `rocketbox`,
      root: n.root,
      meshes: n.meshes,
      bones: i.bones.slice(),
      joints: i.joints.map((e) => e.clone()),
      lib: a,
      rc: { bones: n.bones, joints: a },
      height: n.height,
      thighLen: i.thighLen,
      shinLen: i.shinLen,
      hipHeight: i.hipHeight,
      head: s,
      propMaterial: nl(),
      nudges: ml,
      update: () => n.update(),
      dispose: () => n.dispose(),
    });
  try {
    let t = {
      eyeL: a[H.lidL],
      eyeR: a[H.lidR],
      chest: a[H.chest],
      neck: a[H.neck],
      armL: a[H.armL],
      armR: a[H.armR],
      hips: a[H.hips],
    };
    Oo(e, c, Qa(n.root, n.meshes, t, s, n.entry.sex === `f`));
  } catch (e) {
    console.warn(`[wardrobe] could not dress`, t, e);
  }
  return c;
}
function wl(e, t, n, r) {
  let i = Promise.all(t.map((t) => Cl(e, t))).then((e) => {
    let t = {};
    return (e.forEach((e) => (t[e.id] = e)), t);
  });
  return new Promise((e, t) => {
    let a = !1,
      o = setTimeout(() => {
        ((a = !0), t(Error(`heroes: not loaded after ${n} ms`)));
      }, n);
    i.then(
      (t) => {
        if (!a) (clearTimeout(o), e(t));
        else if (r) r(t);
        else for (let e of Object.values(t)) e.dispose();
      },
      (e) => {
        (clearTimeout(o), t(e));
      },
    );
  });
}
