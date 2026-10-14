// tokyo/assets/actors-Bnj6Q1ad 14 — bones
// Lines 6736-7021 of readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js (statement-aligned).
var ko = {
    uCharFill: { value: new xe(1, 1, 1, 0) },
    uCharLm: { value: 1 },
    uHeroWet: { value: 0 },
  },
  Ao = `
${dn}
uniform vec4 uCharFill;
uniform float uCharLm;
`,
  jo = `
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
function Mo(e) {
  if (e.userData.heroLit) return;
  ((e.userData.heroLit = !0),
    e.transparent && e.side === 2 && (e.forceSinglePass = !0));
  let t = e.onBeforeCompile;
  e.onBeforeCompile = (n, r) => {
    (t.call(e, n, r),
      cn(n.uniforms),
      (n.uniforms.uCharFill = ko.uCharFill),
      (n.uniforms.uCharLm = ko.uCharLm),
      (n.uniforms.uWet = ko.uHeroWet),
      (n.vertexShader = n.vertexShader
        .replace(`#include <common>`, `#include <common>\n${un}`)
        .replace(
          `#include <project_vertex>`,
          `#include <project_vertex>\n${ln}`,
        )),
      (n.fragmentShader = n.fragmentShader
        .replace(`#include <common>`, `#include <common>\n${Ao}`)
        .replace(
          `#include <emissivemap_fragment>`,
          `#include <emissivemap_fragment>\n${jo}`,
        )));
  };
  let n = e.customProgramCacheKey.bind(e);
  e.customProgramCacheKey = () => `${n()}|hero-lit-v1`;
}
var No = new Ae(0.84, 0.9, 1),
  Po = class {
    fillK = 0;
    fill = new Ae(1, 1, 1);
    reqK = 0;
    req = new Ae(1, 1, 1);
    tmp = new Ae();
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
            ((c = 0.55 + 0.35 * Qe.uNight.value),
            this.fill.lerp(this.tmp.copy(No), l)),
        (this.reqK = 0),
        (this.fillK = s > 0 ? s : this.fillK + (c - this.fillK) * l),
        this.fillK < 0.002 && c === 0 && s === 0 && (this.fillK = 0),
        ko.uCharFill.value.set(
          this.fill.r,
          this.fill.g,
          this.fill.b,
          this.fillK,
        ));
      let u = ko.uHeroWet,
        d = Qe.uWet.value;
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
  Fo = null;
function Io() {
  return (Fo ??= t(
    () => import(`./api-tBXVzspF.js`),
    __vite__mapDeps([
      6, 7, 1, 2, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
      24, 25,
    ]),
  ));
}
function Lo(e) {
  Io()
    .then((t) => t.preloadAvatars(e))
    .catch(() => {});
}
function Ro(e) {
  Io()
    .then((t) => t.releaseAvatarAsset(e))
    .catch(() => {});
}
var zo = [
    [26, 0.03, -0.004, -0.006],
    [27, 0.014, -0.004, 0],
    [21, -0.004, 0, -0.01],
    [18, -0.008, -0.006, -0.004],
    [19, -0.008, -0.006, -0.004],
    [20, -0.008, -0.006, -0.004],
  ],
  Bo = new R(),
  Vo = new ke();
function Ho(e, t) {
  let n = new R(1 / 0, 1 / 0, 1 / 0),
    r = new R(-1 / 0, -1 / 0, -1 / 0);
  (e.root.updateMatrixWorld(!0), Vo.copy(e.root.matrixWorld).invert());
  for (let i of e.meshes) {
    if (!/-(head|hair)$/.test(i.name)) continue;
    let e = i.geometry.attributes.position.count;
    for (let a = 0; a < e; a++)
      (i.getVertexPosition(a, Bo),
        Bo.applyMatrix4(i.matrixWorld).applyMatrix4(Vo),
        !(Bo.y < t - 0.015) && (n.min(Bo), r.max(Bo)));
  }
  return { min: n, max: r };
}
function Uo(e, t) {
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
function Wo(e) {
  return (
    (typeof ImageBitmap < `u` && e instanceof ImageBitmap) ||
    (typeof HTMLImageElement < `u` && e instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement)
  );
}
var Go = { textures: 0, compressed: 0, halved: 0, halvedMB: 0, reuploaded: 0 };
function Ko(e, t) {
  let n = e.quality,
    r = !!n.mobile || n.level === `low`,
    i = e.renderer?.gl?.properties,
    a = (e) => !!i && i.get(e).__webglTexture !== void 0;
  for (let e of t.meshes) {
    let t = e.material;
    for (let e of [t.map, t.normalMap, t.roughnessMap, t.metalnessMap]) {
      if (!e || e.userData.playerTrim) continue;
      ((e.userData.playerTrim = 1), Go.textures++);
      let t = a(e),
        n = e;
      if (n.isCompressedTexture) {
        Go.compressed++;
        let i = n.mipmaps;
        if (!i || !i.length) continue;
        if (r && i.length > 1 && i[0].width >= 512) {
          t && e.dispose();
          let n = i.shift();
          (Go.halved++,
            (Go.halvedMB += (n.data?.byteLength ?? 0) / 1048576),
            (e.image = { width: i[0].width, height: i[0].height }),
            (e.needsUpdate = !0));
        } else t && ((e.needsUpdate = !0), Go.reuploaded++);
        et(e);
        continue;
      }
      let i = e.image;
      if (Wo(i) && i.width) {
        if (r && i.width >= 512) {
          let n = document.createElement(`canvas`);
          ((n.width = i.width >> 1), (n.height = i.height >> 1));
          let r = n.getContext(`2d`);
          if (r) {
            ((r.imageSmoothingQuality = `high`),
              r.drawImage(i, 0, 0, n.width, n.height),
              t && e.dispose(),
              i.close?.(),
              (e.image = n),
              (e.needsUpdate = !0),
              Go.halved++,
              et(e));
            continue;
          }
        }
        (t &&
          typeof ImageBitmap < `u` &&
          i instanceof ImageBitmap &&
          ((e.needsUpdate = !0), Go.reuploaded++),
          et(e));
      }
    }
  }
}
async function qo(e, t) {
  let n = await Io(),
    r = e.quality,
    i = await n.createAvatar(t, {
      castShadow: !0,
      receiveShadow: !0,
      fringe: !(r.mobile || r.level === `low`),
    }),
    a = i.meshes[0];
  for (let e of i.meshes)
    (Mo(e.material),
      /-hair$/.test(e.name) && (e.castShadow = !1),
      e !== a &&
        e.skeleton !== a.skeleton &&
        Uo(e, a) &&
        e.bind(a.skeleton, e.bindMatrix));
  let o = i.toPlayerRig(),
    s = i.adapter.proxy.joints,
    c = (s[H.lidL].y + s[H.lidR].y) / 2;
  return (
    Ko(e, i),
    Oo({
      id: t,
      kind: `rocketbox`,
      root: i.root,
      meshes: i.meshes,
      bones: o.bones.slice(),
      joints: o.joints.map((e) => e.clone()),
      lib: s,
      rc: { bones: i.bones, joints: s },
      height: i.height,
      thighLen: o.thighLen,
      shinLen: o.shinLen,
      hipHeight: o.hipHeight,
      head: mo(Ho(i, c), i.height, c, s[H.head].z),
      propMaterial: Do(),
      nudges: zo,
      update: () => i.update(),
      dispose: () => i.dispose(),
    })
  );
}
function Jo(e, t, n) {
  let r = Promise.all(t.map((t) => qo(e, t))).then((e) => {
    let t = {};
    return (e.forEach((e) => (t[e.id] = e)), t);
  });
  return new Promise((e, t) => {
    let i = setTimeout(() => t(Error(`heroes: not loaded after ${n} ms`)), n);
    r.then(
      (t) => {
        (clearTimeout(i), e(t));
      },
      (e) => {
        (clearTimeout(i), t(e));
      },
    );
  });
}
