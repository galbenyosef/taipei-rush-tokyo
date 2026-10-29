// tokyo/assets/actors-bknSEpf2 133 — attributes
// Lines 61738-62075 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function hM(e) {
  if (!oM || !sM) return !1;
  if (!lM || lM.canvas.width !== iM) {
    let [e, t] = ht(iM, iM);
    ((lM = t), (uM = new ee(e)));
  }
  let t = lM,
    n = iM / zj,
    [r, i] = Hj(e);
  (t.setTransform(1, 0, 0, 1, 0, 0),
    t.clearRect(0, 0, iM, iM),
    t.setTransform(n, 0, 0, n, -r * n, -i * n),
    mM(t, e),
    dM.set((e % 12) * iM, aM - (Math.floor(e / 12) + 1) * iM));
  try {
    oM.copyTextureToTexture(uM, sM, null, dM);
  } catch (e) {
    return (console.warn(`[missions] late badge upload failed`, e), !1);
  }
  return !0;
}
var gM = (e) =>
  `#` + Math.max(0, Math.min(16777215, e)).toString(16).padStart(6, `0`);
function _M(e, t) {
  let n = (e >> 16) & 255,
    r = (e >> 8) & 255,
    i = e & 255,
    a = (e) => Math.round(t >= 1 ? e + (255 - e) * (t - 1) : e * t);
  return gM((a(n) << 16) | (a(r) << 8) | a(i));
}
function vM(e, t, n) {
  let r = `${e}|${t}`,
    i = tM.get(r);
  if (i !== void 0) return i;
  if ((bM(), eM >= 144))
    return (
      rM ||
        ((rM = !0),
        console.warn(
          `[missions] badge atlas full (104 dynamic cells): '${e}' falls back to the category badge`,
        )),
      n
    );
  let a = eM;
  if (
    (nM.set(a, { glyph: [...e][0] ?? `任`, c0: _M(t, 1.18), c1: _M(t, 0.62) }),
    cM)
  ) {
    let e = iM / zj,
      [t, n] = Hj(a);
    (cM.setTransform(e, 0, 0, e, 0, 0),
      cM.clearRect(t, n, zj, zj),
      mM(cM, a),
      (sM.needsUpdate = !0));
  } else if (!hM(a)) return (nM.delete(a), n);
  return (eM++, tM.set(r, a), a);
}
function yM() {
  return [...Object.values(Rj), ...tM.values()];
}
function bM() {
  if (sM) return sM;
  let [e, t] = ht(aM, aM),
    n = iM / zj;
  t.setTransform(n, 0, 0, n, 0, 0);
  for (let e of Object.values(Rj)) mM(t, e);
  for (let e of nM.keys()) mM(t, e);
  let r = Ot(e, { mipmaps: !0, anisotropy: 4 });
  return (
    (r.name = `missions-icons`),
    (sM = r),
    (cM = t),
    (fM.value = r),
    (r.onUpdate = () => {
      sM === r && (cM = null);
    }),
    yt(r),
    r
  );
}
var xM = (function (e) {
    return (
      (e[(e.Ring = 0)] = `Ring`),
      (e[(e.Beam = 1)] = `Beam`),
      (e[(e.Gate = 2)] = `Gate`),
      (e[(e.Icon = 3)] = `Icon`),
      (e[(e.Glow = 4)] = `Glow`),
      e
    );
  })(xM || {}),
  SM = [`ring`, `beam`, `gate`, `icon`, `glow`],
  CM = `
      // (a destination chevron — negative iParam.w — shrinks sooner up close: never a big sign across the road ahead)
      float size = min(iParam.y, dist * (iParam.w < 0.0 ? 0.091 : 0.13));
      // pull toward the camera so nearby ground / walls don't slice the sprite
      mvPosition.xyz += (-mvPosition.xyz / max(dist, 0.001)) * min(size * 0.5, dist * 0.5);
      mvPosition.xy += position.xy * size * (1.0 - min(size * 0.5, dist * 0.5) / max(dist, 0.001));`,
  wM = `
  #include <common>
  #include <fog_pars_vertex>
  attribute vec4 iColor;
  attribute vec4 iParam;
  attribute float iKind;
  attribute float aShape;
  uniform float uTime;
  uniform float uNight;
  varying vec4 vColor;
  varying vec4 vParam;
  varying vec2 vUv;
  varying vec2 vLocal;
  varying float vY;
  varying vec3 vN;
  varying vec3 vV;
  varying float vKind;
  varying float vFade;
  void main() {
    float kind = iKind;
    vKind = kind;
    vFade = 1.0;
    vColor = iColor;
    vParam = iParam;
    vUv = uv;
    vLocal = uv;
    vY = position.y;
    vN = vec3(0.0, 0.0, 1.0);
    vV = vec3(0.0, 0.0, 1.0);
    float shape = kind > 2.5 || kind < 0.5 ? 0.0 : kind < 1.5 ? 1.0 : 2.0;
    if (iColor.a <= 0.0 || abs(aShape - shape) > 0.5) {
      // hidden instance (faded part) or another shape's vertex: outside the clip volume, no fragments
      gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
      return;
    }
    mat4 m = modelMatrix * instanceMatrix;
    vec4 mvPosition;
    if (kind > 2.5) {
      // camera-facing billboard (icons, glows)
      vec4 center = m * vec4(0.0, 0.0, 0.0, 1.0);
      center.y += sin(uTime * 2.3 + iParam.z) * abs(iParam.w);
      mvPosition = viewMatrix * center;
      float dist = length(mvPosition.xyz);
      if (iParam.w < 0.0) {
        // destination chevron: see-through near the middle of the view (r in half screen heights) and up close
        vec4 cc = projectionMatrix * mvPosition;
        vec2 ndc = cc.xy / max(cc.w, 0.001);
        float r = length(vec2(ndc.x * projectionMatrix[1][1] / projectionMatrix[0][0], ndc.y));
        vFade = mix(0.4, 1.0, min(smoothstep(0.1, 0.5, r), smoothstep(8.0, 30.0, dist)));
      }
      MARKER_BADGE_SIZE
      float cell = iParam.x;
      vec2 cellUv = vec2(mod(cell, CELLS_F), CELLS_F - 1.0 - floor(cell / CELLS_F));
      vUv = (cellUv + (uv * 0.94 + 0.03)) / CELLS_F;
    } else {
      vec3 lp = position;
      vec3 nrm = normal;
      // ring: the unit quad laid flat (the former 2 × 2 plane rotated −90° about x: (x, y, 0) → (2x, 0, −2y))
      if (kind < 0.5) {
        lp = vec3(position.x * 2.0, 0.0, -position.y * 2.0);
        nrm = vec3(0.0, 1.0, 0.0);
      }
      if (kind > 0.5 && iParam.y > 0.5) {
        // tall pillars keep a readable width far away
        vec3 base = (m * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
        float d = length(base.xz - cameraPosition.xz);
        lp.xz *= max(1.0, d / 140.0);
        // a far beacon: up close it is a bright bar down the middle of the view — fade it as the player arrives
        vFade = mix(0.05, 1.0, smoothstep(25.0, 120.0, d));
      } else if (kind > 0.5 && kind < 1.5 && iParam.w < 0.0) {
        // destination corona: see-through once the player is almost in it (the ground ring still shows the spot)
        vec3 base = (m * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
        vFade = mix(0.3, 1.0, smoothstep(12.0, 45.0, length(base.xz - cameraPosition.xz)));
      }
      mvPosition = viewMatrix * (m * vec4(lp, 1.0));
      vN = normalize(mat3(viewMatrix) * normalize(mat3(m) * nrm));
      vV = -mvPosition.xyz;
    }
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }
`,
  TM = `
  #include <common>
  #include <fog_pars_fragment>
  uniform float uTime;
  uniform float uNight;
  uniform sampler2D uMap;
  varying vec4 vColor;
  varying vec4 vParam;
  varying vec2 vUv;
  varying vec2 vLocal;
  varying float vY;
  varying vec3 vN;
  varying vec3 vV;
  varying float vKind;
  varying float vFade;
  void main() {
    vec3 col;
    float a;
    if (vKind < 0.5) {
      // ring
      vec2 p = vUv * 2.0 - 1.0;
      float r = length(p);
      if (r > 1.0) discard;
      if (vParam.y > 0.5) {
        // soft light pool on the ground
        float k = (1.0 - r);
        a = k * k * (0.14 + 0.5 * uNight) * vParam.z * vColor.a;
        col = vColor.rgb * mix(1.0, 2.0, uNight);
      } else {
        float ang = atan(p.y, p.x) / 6.2831853;
        float rim = smoothstep(0.80, 0.90, r) * smoothstep(1.0, 0.94, r);
        float dash = step(0.42, fract(ang * 16.0 + uTime * 0.12 + vParam.x));
        float inner = smoothstep(0.64, 0.67, r) * smoothstep(0.74, 0.71, r) * dash;
        float fill = (1.0 - smoothstep(0.0, 0.85, r)) * 0.22;
        float wave = fract(uTime * 0.55 + vParam.x * 0.13);
        float pulse = smoothstep(0.07, 0.0, abs(r - wave)) * (1.0 - wave) * 0.8;
        a = clamp((rim + inner * 0.75 + fill + pulse) * vParam.z * vColor.a, 0.0, 1.0);
        col = vColor.rgb * mix(1.25, 2.4, uNight);
      }
    } else if (vKind < 2.5) {
      float fres = 1.0 - abs(dot(normalize(vN), normalize(vV)));
      if (vKind < 1.5) {
        // beam
        float h = clamp(vY, 0.0, 1.0);
        if (vParam.y < 0.5) {
          // corona: dense at the bottom, fading up, rim-lit, gentle shimmer + rising bands
          a = pow(1.0 - h, 1.35) * (0.28 + 0.95 * fres * fres);
          a *= 0.82 + 0.18 * sin(uTime * 3.1 + vParam.x);
          a *= 0.8 + 0.2 * smoothstep(0.3, 0.7, fract(h * 3.0 - uTime * 0.6));
          a += smoothstep(0.06, 0.0, h) * 0.55;
        } else {
          // tall pillar: faint, streaky
          a = pow(1.0 - h, 1.8) * (0.2 + 0.8 * fres);
          a *= 0.7 + 0.3 * sin(h * 60.0 - uTime * 5.0 + vParam.x);
        }
        a *= vParam.z * vColor.a;
        col = vColor.rgb * mix(1.2, 2.3, uNight);
      } else {
        // race gate
        float dash = smoothstep(0.35, 0.5, fract(vUv.x * 20.0 - uTime * 1.4 + vParam.x));
        a = (0.45 + 0.55 * dash) * (0.55 + 0.45 * fres) * vParam.z * vColor.a;
        col = vColor.rgb * mix(1.4, 2.6, uNight) * (0.8 + 0.4 * dash);
      }
      a = clamp(a, 0.0, 1.0);
    } else {
      vec4 t = texture2D(uMap, vUv);
      if (vKind < 3.5) {
        // icon
        a = t.a * vColor.a;
        if (a < 0.02) discard;
        col = t.rgb * vColor.rgb * mix(1.05, 1.5, uNight);
      } else {
        // glow: hard circular falloff so no quad edge ever shows (additive + sRGB makes tiny alphas visible)
        float edge = 1.0 - smoothstep(0.3, 0.48, length(vLocal - 0.5));
        t.a *= edge * edge;
        float pulse = 0.85 + 0.15 * sin(uTime * 3.0 + vParam.z * 1.7);
        a = t.a * vColor.a * pulse * mix(0.42, 1.0, uNight);
        if (a < 0.01) discard;
        col = vColor.rgb * t.rgb * 1.6;
      }
      a = clamp(a, 0.0, 1.0);
    }
    // fog + output colour space on the straight colour, THEN premultiply (blend ONE, ONE_MINUS_SRC_ALPHA): the same
    // result as the former per-layer blending — normal layers (rgb·a, a), the additive glow (rgb·a, 0)
    a *= vFade;
    gl_FragColor = vec4(col, 1.0);
    #include <fog_fragment>
    #include <colorspace_fragment>
    gl_FragColor = vec4(gl_FragColor.rgb * a, vKind > 3.5 ? 0.0 : a);
  }
`;
function EM(e) {
  let t = ne.merge([fe.fog]);
  ((t.uTime = Gt.uTime), (t.uNight = Gt.uNight), (t.uMap = fM));
  let n = new a({
    name: e,
    uniforms: t,
    vertexShader: wM
      .replace(`MARKER_BADGE_SIZE`, CM)
      .replace(/CELLS_F/g, `12.0`),
    fragmentShader: TM,
    transparent: !0,
    depthWrite: !1,
    fog: !0,
    toneMapped: !1,
    side: 2,
    blending: 5,
    blendEquation: 100,
    blendSrc: 201,
    blendDst: 205,
    blendSrcAlpha: 201,
    blendDstAlpha: 205,
  });
  return ((n.forceSinglePass = !0), n);
}
var DM = {
    [xM.Ring]: 320,
    [xM.Beam]: 256,
    [xM.Gate]: 32,
    [xM.Icon]: 192,
    [xM.Glow]: 256,
  },
  OM = [xM.Ring, xM.Beam, xM.Glow, xM.Icon],
  kM = 120;
function AM() {
  let e = new P(1, 1),
    t = new me(1, 1, 1, 28, 1, !0);
  t.translate(0, 0.5, 0);
  let n = [e, t],
    r = 0,
    i = 0;
  for (let e of n) ((r += e.attributes.position.count), (i += e.index.count));
  let a = new Float32Array(r * 3),
    o = new Float32Array(r * 3),
    s = new Float32Array(r * 2),
    c = new Float32Array(r),
    l = new Uint16Array(i),
    u = 0,
    d = 0;
  n.forEach((e, t) => {
    let n = e.attributes.position.count;
    (a.set(e.attributes.position.array, u * 3),
      o.set(e.attributes.normal.array, u * 3),
      s.set(e.attributes.uv.array, u * 2),
      c.fill(t, u, u + n));
    let r = e.index.array;
    for (let e = 0; e < r.length; e++) l[d + e] = r[e] + u;
    ((u += n), (d += r.length), e.dispose());
  });
  let f = new le();
  return (
    f.setAttribute(`position`, new z(a, 3)),
    f.setAttribute(`normal`, new z(o, 3)),
    f.setAttribute(`uv`, new z(s, 2)),
    f.setAttribute(`aShape`, new z(c, 1)),
    f.setIndex(new z(l, 1)),
    f
  );
}
