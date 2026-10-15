// tokyo/assets/world-CAmHK742 73 — uniforms
// Lines 23444-23688 of readable/tokyo/assets/world-CAmHK742.pretty.js (statement-aligned).
var Th = `
uniform float uExposure;
uniform vec3 uLift;
uniform vec3 uGain;
uniform float uSat;
uniform float uContrast;
uniform float uToe;
uniform float uVignette;
uniform float uGrain;
uniform float uGTime;
uniform vec3 uShadowTint;
uniform vec3 uHighTint;
#ifdef USE_AO
uniform sampler2D tAO;
uniform float uAOAmount;
uniform float uAODebug;
#endif

vec3 gRRT(vec3 v) {
  vec3 a = v * (v + 0.0245786) - 0.000090537;
  vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081;
  return a / b;
}
vec3 gACES(vec3 color) {
  const mat3 IN = mat3(vec3(0.59719, 0.07600, 0.02840), vec3(0.35458, 0.90834, 0.13383), vec3(0.04823, 0.01566, 0.83777));
  const mat3 OUT = mat3(vec3(1.60475, -0.10208, -0.00327), vec3(-0.53108, 1.10813, -0.07276), vec3(-0.07367, -0.00605, 1.07602));
  color = IN * color;
  color = gRRT(color);
  color = OUT * color;
  return clamp(color, 0.0, 1.0);
}
float gHash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  // NaN / Inf guard: a non-finite scene pixel came out of ACES as NaN = a BLACK pixel (a black block once bloom spread
  // it). NaN is rejected by its bits (exponent all ones + mantissa ≠ 0): min / max with a NaN operand are undefined in
  // GLSL ES (ANGLE-Vulkan / Android GL may return the NaN) and fast-math may fold x != x away — an integer test can't
  // be. ±Inf then clamps like any value (well-defined); ACES saturates far below 1e4 → invisible
  vec3 hdr = inputColor.rgb;
  if (any(greaterThan(floatBitsToUint(hdr) & uvec3(0x7fffffffu), uvec3(0x7f800000u)))) hdr = vec3(0.0);
  hdr = min(max(hdr, vec3(0.0)), vec3(1e4));
  #ifdef USE_AO
  {
    // ambient occlusion on the HDR colour; emissive / very bright pixels (neon, lamps, sky glints) are spared
    float ao = texture2D(tAO, uv).r;
    float lin = dot(hdr, vec3(0.2126, 0.7152, 0.0722)) * uExposure;
    ao = mix(ao, 1.0, smoothstep(0.6, 2.4, lin));
    hdr *= mix(1.0, ao, uAOAmount);
    if (uAODebug > 0.5) { outputColor = vec4(vec3(texture2D(tAO, uv).r), 1.0); return; }
  }
  #endif
  vec3 c = gACES(hdr * (uExposure / 0.6));
  c = pow(c, vec3(1.0 / 2.2));
  c = c * uGain + uLift * (1.0 - c);
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  // split toning: tint shadows and highlights separately (film-like colour separation instead of a flat CG grade)
  c *= mix(uShadowTint, uHighTint, smoothstep(0.08, 0.75, l));
  l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = mix(vec3(l), c, uSat);
  // contrast around mid-grey; at night the toe is protected (uToe): the pivot curve would otherwise crush
  // everything below ~sRGB 12 to black — unlit asphalt, lawns and shadowed walls must stay dimly readable
  vec3 cc = (c - 0.5) * uContrast + 0.5;
  c = mix(cc, mix(c, cc, smoothstep(0.03, 0.3, c)), uToe);
  vec2 d = uv - 0.5;
  c *= 1.0 - dot(d, d) * uVignette;
  float n = gHash(uv * 1733.0 + fract(uGTime) * 97.0) + gHash(uv * 917.0 - fract(uGTime * 1.37) * 53.0) - 1.0;
  c += n * uGrain + (gHash(uv * 3113.0 + uGTime) - 0.5) / 255.0;
  c = pow(max(c, vec3(0.0)), vec3(2.2));
  outputColor = vec4(c, inputColor.a);
}
`,
  Eh = `
uniform sampler2D inputBuffer;
uniform float threshold;
uniform float smoothing;
varying vec2 vUv;
varying vec2 vUv00; varying vec2 vUv01; varying vec2 vUv02; varying vec2 vUv03;
varying vec2 vUv04; varying vec2 vUv05; varying vec2 vUv06; varying vec2 vUv07;
varying vec2 vUv08; varying vec2 vUv09; varying vec2 vUv10; varying vec2 vUv11;
float cb(const in vec2 uv) { return float(uv.s >= 0.0 && uv.s <= 1.0 && uv.t >= 0.0 && uv.t <= 1.0); }
vec4 pf(const in vec2 uv) {
  // firefly / Inf / NaN clamp: one non-finite scene pixel poisoned a whole 8×8 (then 16, 32…) block of the mip chain
  // — black squares around bright highlights at night. 256 is far above any lamp / neon / sign emission.
  vec4 t = texture2D(inputBuffer, uv);
  // NaN → 0 by its bits, THEN the clamp (portable: min / max with a NaN operand are undefined in GLSL ES — ANGLE's
  // Vulkan / GL backends on Android make no promise — while ±Inf clamps like any value)
  if (any(greaterThan(floatBitsToUint(t) & uvec4(0x7fffffffu), uvec4(0x7f800000u)))) return vec4(0.0);
  t = min(max(t, vec4(0.0)), vec4(256.0));
  float l = dot(t.rgb, vec3(0.2126, 0.7152, 0.0722));
  return t * (smoothstep(threshold, threshold + smoothing, l) * cb(uv));
}
void main() {
  vec4 c = 0.125 * (pf(vUv00) + pf(vUv01) + pf(vUv02) + pf(vUv03));
  c += 0.05556 * (pf(vUv04) + pf(vUv05) + pf(vUv06) + pf(vUv07) + pf(vUv08) + pf(vUv09) + pf(vUv10) + pf(vUv11) + pf(vUv));
  gl_FragColor = c;
  #include <colorspace_fragment>
}
`;
function Dh(e) {
  let t = e.mipmapBlurPass,
    n = e.luminanceMaterial,
    r = new E({
      name: `env-bloom-prefilter`,
      uniforms: {
        inputBuffer: new y(null),
        texelSize: new y(new ve()),
        threshold: n.uniforms.threshold,
        smoothing: n.uniforms.smoothing,
      },
      blending: 0,
      toneMapped: !1,
      depthWrite: !1,
      depthTest: !1,
      vertexShader: t.downsamplingMaterial.vertexShader,
      fragmentShader: Eh,
    });
  return (
    (e.luminancePass.enabled = !1),
    (t.render = function (e, t) {
      let {
          scene: n,
          camera: i,
          downsamplingMaterial: a,
          upsamplingMaterial: o,
          downsamplingMipmaps: s,
          upsamplingMipmaps: c,
        } = this,
        l = s[0];
      ((this.fullscreenMaterial = r),
        (r.uniforms.inputBuffer.value = t.texture),
        r.uniforms.texelSize.value.set(
          0.5 / Math.max(1, l.width),
          0.5 / Math.max(1, l.height),
        ),
        e.setRenderTarget(l),
        e.render(n, i));
      let u = l;
      this.fullscreenMaterial = a;
      for (let t = 1; t < s.length; t++) {
        let r = s[t];
        (a.setSize(u.width, u.height),
          (a.inputBuffer = u.texture),
          e.setRenderTarget(r),
          e.render(n, i),
          (u = r));
      }
      this.fullscreenMaterial = o;
      for (let t = c.length - 1; t >= 0; --t) {
        let r = c[t];
        (o.setSize(u.width, u.height),
          (o.inputBuffer = u.texture),
          (o.supportBuffer = s[t].texture),
          e.setRenderTarget(r),
          e.render(n, i),
          (u = r));
      }
    }),
    r
  );
}
function Oh(e) {
  class t extends e.Effect {
    constructor() {
      super(`TaipeiGrade`, Th, {
        blendFunction: e.BlendFunction.SRC,
        uniforms: new Map([
          [`uExposure`, new y(1)],
          [`uLift`, new y(new U(0, 0, 0))],
          [`uGain`, new y(new U(1, 1, 1))],
          [`uSat`, new y(1.05)],
          [`uContrast`, new y(1.04)],
          [`uToe`, new y(0)],
          [`uVignette`, new y(0.55)],
          [`uGrain`, new y(0.012)],
          [`uGTime`, new y(0)],
          [`uShadowTint`, new y(new U(1, 1, 1))],
          [`uHighTint`, new y(new U(1, 1, 1))],
          [`tAO`, new y(null)],
          [`uAOAmount`, new y(1)],
          [`uAODebug`, new y(0)],
        ]),
      });
    }
    setAO(e) {
      (this.defines.set(`USE_AO`, `1`), (this.u(`tAO`).value = e));
    }
    u(e) {
      return this.uniforms.get(e);
    }
  }
  return new t();
}
function kh(e) {
  let t = e.extensions,
    n = t.has(`EXT_color_buffer_float`);
  return { half: n || t.has(`EXT_color_buffer_half_float`), r11: n };
}
function Ah(e, t) {
  let n = e.getContext(),
    r = e.getRenderTarget(),
    i = !0;
  try {
    for (let r of t)
      if (
        r &&
        (e.setRenderTarget(r),
        n.checkFramebufferStatus(n.FRAMEBUFFER) !== n.FRAMEBUFFER_COMPLETE)
      ) {
        i = !1;
        break;
      }
  } catch {
    i = !1;
  } finally {
    e.setRenderTarget(r);
  }
  return i;
}
async function jh(e, t, n, r) {
  let i = await wh(),
    a = kh(e);
  if (!a.half)
    throw Error(
      `no renderable float colour buffer (EXT_color_buffer_half_float / EXT_color_buffer_float)`,
    );
  let o = r.frameFormat ?? `r11`;
  o === `r11` && !a.r11 && (o = `16f`);
  let s = Mh(i, e, t, n, r, o);
  if (!Ah(e, s.targets)) {
    if ((s.fx.dispose(), o === `16f`))
      throw Error(`post-processing targets are not renderable`);
    if (
      (console.warn(
        `[environment] R11F_G11F_B10F scene target incomplete — using RGBA16F`,
      ),
      (s = Mh(i, e, t, n, r, `16f`)),
      !Ah(e, s.targets))
    )
      throw (
        s.fx.dispose(),
        Error(`post-processing targets are not renderable`)
      );
  }
  return s;
}
