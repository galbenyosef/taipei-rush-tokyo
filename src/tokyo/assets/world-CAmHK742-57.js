// tokyo/assets/world-CAmHK742 57 — math
// Lines 18857-19167 of readable/tokyo/assets/world-CAmHK742.pretty.js (statement-aligned).
var cm = `
varying vec3 vWPos;
#include <common>
#include <fog_pars_vertex>
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWPos = wp.xyz;
  vec4 mvPosition = viewMatrix * wp;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}
`,
  lm = (e) => {
    let t = Number.isFinite(e.westX) ? e.westX : -1e7;
    return `
${bp}
uniform vec3 uMoonDir;
uniform vec3 uMoonCol;
uniform float uFlash;
uniform sampler2D uNormalMap;
uniform vec3 uLightDir;
uniform vec3 uLightCol;
uniform vec3 uAmbient;
uniform vec3 uDeep;
uniform float uWTime;
uniform float uWNight;
uniform float uWRain;
uniform float uCloudShade;
varying vec3 vWPos;
#include <common>
#include <fog_pars_fragment>
${yp}
${xp}

void main() {
  vec3 toCam = cameraPosition - vWPos;
  float dist = length(toCam);
  vec3 V = toCam / dist;
  vec2 p = vWPos.xz;
  float t = uWTime;
  // river current flows north / downstream: bias scroll along -z (Tamsui) and -x (Keelung)
  vec2 flow = vWPos.x < ${t.toFixed(1)} ? vec2(0.0, -1.0) : vec2(-1.0, 0.0);
  vec3 n1 = texture2D(uNormalMap, p * 0.043 + flow * t * 0.018 + vec2(t * 0.004, 0.0)).xyz * 2.0 - 1.0;
  vec3 n2 = texture2D(uNormalMap, p * 0.117 + vec2(-t * 0.011, t * 0.017)).xyz * 2.0 - 1.0;
  vec3 n3 = texture2D(uNormalMap, p * 0.0115 + flow * t * 0.006).xyz * 2.0 - 1.0;
  float farF = smoothstep(40.0, 1400.0, dist);
  vec2 d = n1.xy * 0.55 + n2.xy * 0.18 * (1.0 - farF) + n3.xy * 0.75;
  float str = mix(0.2, 0.075, farF) * (1.0 + uWRain * 0.9);
  // rain ripple rings near the camera
  if (uWRain > 0.01 && dist < 70.0) {
    vec2 rp = p * 0.55;
    vec2 ci = floor(rp);
    vec2 cf = fract(rp);
    float h = eHash12(ci);
    float ph = fract(t * 1.1 + h);
    vec2 c0 = vec2(eHash12(ci + 3.1), eHash12(ci + 7.7)) * 0.6 + 0.2;
    vec2 dv = cf - c0;
    float r = length(dv);
    float ring = exp(-abs(r - ph * 0.42) * 38.0) * (1.0 - ph);
    d += (dv / max(r, 1e-3)) * ring * 1.6 * uWRain * (1.0 - smoothstep(30.0, 70.0, dist));
  }
  vec3 N = normalize(vec3(d.x * str, 1.0, d.y * str));
  float NdV = max(dot(N, V), 0.0);
  float F = 0.02 + 0.98 * pow(1.0 - NdV, 5.0);
  vec3 R = reflect(-V, N);
  R.y = abs(R.y) + 0.002;
  vec3 refl = skyBase(R);
  // overcast skies reflect flatter / greyer
  refl = mix(refl, vec3(dot(refl, vec3(0.2126, 0.7152, 0.0722))), uCloudShade * 0.5);
  vec3 body = uDeep * (uAmbient + uLightCol * max(uLightDir.y, 0.0) * 0.3);
  // murky Tamsui: reflections are muted by suspended silt
  vec3 col = mix(body, refl * 0.85, F * 0.9);
  float rs = max(dot(R, uLightDir), 0.0);
  col += uLightCol * (pow(rs, 420.0) * 7.0 + pow(rs, 36.0) * 0.12) * (1.0 - 0.75 * uCloudShade);
  col += uMoonCol * (pow(max(dot(R, uMoonDir), 0.0), 900.0) * 1.2 + pow(max(dot(R, uMoonDir), 0.0), 60.0) * 0.05);
  // night: the far bank's skyline mirrored in the river. The (rippled) reflection ray is traced to the far bank's
  // building wall (Tamsui: New Taipei at x ≈ -1225; Keelung: Shilin / Dazhi at z ≈ -1150) and picks up light
  // where it meets the skyline's height band: window rows, street-level lamps / shop fronts and the odd muted
  // neon, all anchored to positions ALONG the bank. Ripples stretch them into broken streaks; from high above
  // the rays pass over the rooftops, so an aerial view never shows a painted-on sheet of colour.
  if (${e.banks ? `uWNight > 0.01` : `false`}) {
    bool tam = vWPos.x < ${(t - 2).toFixed(1)};
    float bankD = tam ? vWPos.x + 1225.0 : vWPos.z + 1150.0;
    float rd = tam ? -R.x : -R.z;
    if (rd > 0.03 && bankD > 0.0) {
      vec3 H = vWPos + R * (bankD / rd);
      float along = tam ? H.z : H.x;
      float hy = H.y;
      float mass = smoothstep(0.3, 0.55, eNoise(vec2(along * 0.03, 2.7)));
      float top = 24.0 + 75.0 * eNoise(vec2(along * 0.011, 5.3));
      float band = smoothstep(2.0, 6.0, hy) * (1.0 - smoothstep(top * 0.8, top, hy)) * mass;
      float win = pow(eNoise(vec2(along * 0.55, hy * 0.3)), 3.0) * 2.2;
      float street = (1.0 - smoothstep(1.0, 10.0, hy)) * smoothstep(-2.0, 1.5, hy) * pow(eNoise(vec2(along * 0.22, 9.1)), 2.0) * 2.6;
      vec3 lc = mix(vec3(1.0, 0.62, 0.3), vec3(0.75, 0.85, 1.0), eNoise(vec2(along * 0.05, 4.0)));
      float neon = step(0.93, eNoise(vec2(along * 0.021, 8.0)));
      lc = mix(lc, vec3(0.82, 0.55, 0.66), neon * 0.8);
      // ripples break every streak into short glints: wave crests (along the view distance) + the normal-map slope
      float seg = eNoise(vec2(dist * 0.42 - t * 0.9, along * 0.35)) * 0.65 + eNoise(vec2(dist * 1.3 + t * 1.7, along * 0.9)) * 0.35;
      float glint = smoothstep(0.38, 0.72, seg + d.y * 0.45);
      float hFade = 1.0 - 0.5 * smoothstep(40.0, 220.0, cameraPosition.y);
      vec3 add = lc * (win * band + street * mass) * uWNight * (0.35 + F * 2.4) * smoothstep(6.0, 60.0, dist) * (0.3 + 0.9 * glint) * hFade;
      col += min(add, vec3(0.6));
    }
  }
  col += vec3(0.7, 0.75, 0.95) * uFlash * F * 0.9;
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}
`;
  };
function um(e, t, n, r) {
  let i = lm(n),
    a = { ...Se.clone(ue.fog), ...e };
  return (
    r &&
      !n.banks &&
      ((a = { ...a, ...r.uniforms }),
      (i = i
        .replace(`void main() {`, `${r.pars}\nvoid main() {`)
        .replace(
          `  col += vec3(0.7, 0.75, 0.95) * uFlash * F * 0.9;`,
          `${r.main}\n  col += vec3(0.7, 0.75, 0.95) * uFlash * F * 0.9;`,
        ))),
    new E({
      name: t ? `env-water-far` : `env-water`,
      uniforms: a,
      vertexShader: cm,
      fragmentShader: i,
      fog: !0,
      defines: { FOG_NO_CLIP: `` },
    })
  );
}
function dm(e, t, n = 4) {
  let r = e.rects(n).map((e) => ({ ...e, y: NaN }));
  for (let e of t ?? []) {
    let t = e.minX - n,
      i = e.maxX,
      a = e.minZ - n,
      o = e.maxZ + n,
      s = [];
    for (let e of r) {
      if (e.x1 <= t || e.x0 >= i || e.z1 <= a || e.z0 >= o) {
        s.push(e);
        continue;
      }
      (e.z0 < a && s.push({ ...e, z1: a }),
        e.z1 > o && s.push({ ...e, z0: o }));
      let n = Math.max(e.z0, a),
        r = Math.min(e.z1, o);
      (e.x0 < t && s.push({ ...e, x1: t, z0: n, z1: r }),
        e.x1 > i && s.push({ ...e, x0: i, z0: n, z1: r }));
    }
    (s.push({ x0: t, x1: i, z0: a, z1: o, y: e.level }), (r = s));
  }
  return r;
}
function fm(e, t, n, r) {
  let i = Vp,
    a = t.westX,
    o = t.northZ,
    s = (
      n
        ? dm(n, r)
        : [
            { x0: -i, x1: a - 1.5, z0: -i, z1: i, y: e },
            { x0: a - 1.5, x1: i, z0: -i, z1: o - 1.5, y: e },
          ]
    ).map((t) => [t.x0, t.x1, t.z0, t.z1, Number.isFinite(t.y) ? t.y : e]),
    c = [],
    l = [];
  for (let [e, t, r, i, a] of s) {
    let o = n ? 1 : 8,
      s = n ? 1 : 8,
      u = c.length / 3;
    for (let n = 0; n <= s; n++)
      for (let l = 0; l <= o; l++)
        c.push(e + ((t - e) * l) / o, a, r + ((i - r) * n) / s);
    for (let e = 0; e < s; e++)
      for (let t = 0; t < o; t++) {
        let n = u + e * (o + 1) + t;
        l.push(n, n + o + 1, n + 1, n + 1, n + o + 1, n + o + 2);
      }
  }
  let u = new V();
  return (
    u.setAttribute(`position`, new N(c, 3)),
    u.setIndex(l),
    (u.boundingSphere = new d(new U(), i * 1.5)),
    u
  );
}
var pm = [0.998, 0.004],
  mm = new Float32Array(),
  hm = new Uint32Array(),
  gm = 0.85,
  _m = class {
    a;
    n = 0;
    constructor(e = 16384) {
      this.a = new Float32Array(Math.max(16, Math.ceil(e)));
    }
    reserve(e) {
      if (this.n + e <= this.a.length) return;
      let t = new Float32Array(
        Math.max(Math.ceil(this.a.length * 1.5), this.n + e),
      );
      (t.set(this.a.subarray(0, this.n)), (this.a = t));
    }
    p3(e, t, n) {
      this.reserve(3);
      let r = this.a,
        i = this.n;
      ((r[i] = e), (r[i + 1] = t), (r[i + 2] = n), (this.n = i + 3));
    }
    p2(e, t) {
      (this.reserve(2),
        (this.a[this.n] = e),
        (this.a[this.n + 1] = t),
        (this.n += 2));
    }
    out() {
      return this.n >= this.a.length * gm
        ? this.a.subarray(0, this.n)
        : this.a.slice(0, this.n);
    }
    free() {
      ((this.a = mm), (this.n = 0));
    }
  },
  vm = class {
    a;
    n = 0;
    constructor(e = 16384) {
      this.a = new Uint32Array(Math.max(16, Math.ceil(e)));
    }
    reserve(e) {
      if (this.n + e <= this.a.length) return;
      let t = new Uint32Array(
        Math.max(Math.ceil(this.a.length * 1.5), this.n + e),
      );
      (t.set(this.a.subarray(0, this.n)), (this.a = t));
    }
    p3(e, t, n) {
      this.reserve(3);
      let r = this.a,
        i = this.n;
      ((r[i] = e), (r[i + 1] = t), (r[i + 2] = n), (this.n = i + 3));
    }
    out() {
      return this.n >= this.a.length * gm
        ? this.a.subarray(0, this.n)
        : this.a.slice(0, this.n);
    }
    free() {
      ((this.a = hm), (this.n = 0));
    }
  },
  ym = class {
    a;
    n = 0;
    lx = NaN;
    ly = NaN;
    lz = NaN;
    lw = NaN;
    hx = 0;
    hy = 0;
    hz = 0;
    hw = 0;
    constructor(e = 16384) {
      this.a = new Uint16Array(Math.max(16, Math.ceil(e)));
    }
    reserve(e) {
      if (this.n + e <= this.a.length) return;
      let t = new Uint16Array(
        Math.max(Math.ceil(this.a.length * 1.5), this.n + e),
      );
      (t.set(this.a.subarray(0, this.n)), (this.a = t));
    }
    p4(e, t, n, r) {
      (this.reserve(4),
        e !== this.lx && (this.hx = S.toHalfFloat((this.lx = e))),
        t !== this.ly && (this.hy = S.toHalfFloat((this.ly = t))),
        n !== this.lz && (this.hz = S.toHalfFloat((this.lz = n))),
        r !== this.lw && (this.hw = S.toHalfFloat((this.lw = r))));
      let i = this.a,
        a = this.n;
      ((i[a] = this.hx),
        (i[a + 1] = this.hy),
        (i[a + 2] = this.hz),
        (i[a + 3] = this.hw),
        (this.n = a + 4));
    }
    attribute() {
      let e =
          this.n >= this.a.length * gm
            ? this.a.subarray(0, this.n)
            : this.a.slice(0, this.n),
        t = new p(bm, 4);
      return ((t.array = e), (t.count = e.length / 4), t);
    }
    free() {
      ((this.a = bm), (this.n = 0));
    }
  },
  bm = new Uint16Array();
function xm(e) {
  return !!(e & 32768) && (e & 32767) > 14336;
}
