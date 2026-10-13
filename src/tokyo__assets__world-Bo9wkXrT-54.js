// tokyo__assets__world-Bo9wkXrT 54 — math
// Lines 17484-17798 of readable/tokyo__assets__world-Bo9wkXrT.pretty.js (statement-aligned).
var _p = `
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * vec4(mat3(viewMatrix) * position, 1.0);
#ifdef USE_REVERSED_DEPTH_BUFFER
  gl_Position = vec4(p.xy, 0.0, p.w); // reversed-Z: the far plane is depth 0
#else
  gl_Position = p.xyww;
#endif
}
`,
  vp = `
${mp}
uniform vec3 uSunDisk;
uniform vec3 uMoonDir;
uniform vec3 uMoonCol;
uniform vec3 uCloudLit;
uniform vec3 uCloudAmb;
uniform float uCloudCover;
uniform float uStars;
uniform float uFlash;
uniform vec3 uFlashDir;
uniform vec2 uWindOff;
uniform float uSkyTime;
uniform vec3 uGround;
uniform float uEnvMode;
uniform float uRainbow;
uniform float uShafts;
varying vec3 vDir;
vec3 skyHue(float h) { return clamp(abs(mod(h * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0); }
${pp}
${hp}

void main() {
  vec3 dir = normalize(vDir);
  float y = dir.y;
  vec3 col = skyBase(dir);
  float mu = dot(dir, uSkySun);
  float mm = dot(dir, uMoonDir);

  // ---- stars (few: Taipei light pollution)
  if (uStars > 0.002 && y > 0.03 && uEnvMode < 0.5) {
    vec3 sp = dir * 120.0;
    vec3 ci = floor(sp);
    float h = eHash13(ci);
    if (h > 0.9952) {
      vec3 jit = vec3(eHash13(ci + 1.7), eHash13(ci + 3.1), eHash13(ci + 5.3)) * 0.6 + 0.2;
      float d = length(fract(sp) - jit);
      float mag = (h - 0.9952) / 0.0048;
      float tw = 0.7 + 0.3 * sin(uSkyTime * (1.5 + h * 30.0) + h * 400.0);
      col += vec3(0.85, 0.92, 1.0) * smoothstep(0.17, 0.0, d) * (0.15 + mag * mag * 1.6) * tw * uStars * smoothstep(0.03, 0.3, y);
    }
  }

  // ---- moon
  if (mm > 0.95 && uEnvMode < 0.5) {
    float disk = smoothstep(0.999905, 0.99993, mm);
    vec3 mr = (dir - uMoonDir) * 2600.0;
    float mottle = 0.7 + 0.3 * eNoise(mr.xy + mr.zx * 0.7);
    col += uMoonCol * (disk * mottle * 0.75);
  }
  col += uMoonCol * (0.012 * pow(max(mm, 0.0), 1500.0) + 0.01 * pow(max(mm, 0.0), 60.0));

  // ---- clouds
  float dens = 0.0;
  if (uEnvMode > 0.5) {
    // env-map capture: no per-pixel clouds (cheap); overcast is already in the gradient colours
    col = mix(col, mix(uCloudLit, uCloudAmb, 0.55), uCloudCover * uCloudCover * 0.5 * smoothstep(0.0, 0.3, y));
  } else if (y > -0.04 && uCloudCover > 0.01) {
    float yy = max(y, 0.0);
    vec2 cp = dir.xz / (yy + 0.085) * 0.4 + uWindOff;
    #ifdef SKY_LOW
    float n = eFbm4(cp * 1.8);
    #else
    float n = eFbm5(cp * 1.8);
    #endif
    float n2 = eNoise(cp * 0.31 + 7.3);
    float base = n * 0.9 + n2 * 0.38 - 0.12;
    float cov = uCloudCover;
    float lo = 0.98 - cov * 1.02;
    dens = smoothstep(lo, lo + 0.2 + cov * 0.3, base);
    float thick = clamp((base - lo) * 1.5 + cov * 0.35, 0.0, 1.0);
    // self-shadowing: compare with the density one step towards the sun (lit edges face the sun,
    // backs and bases fall into shadow) → clouds read as volumes, not decals
    float shade = clamp(0.2 + thick * 0.5 + (0.5 - n) * 0.95, 0.0, 1.0);
    #ifndef SKY_LOW
    if (dens > 0.01) {
      float sl = length(uSkySun.xz);
      vec2 sxz = sl > 1e-3 ? uSkySun.xz / sl : vec2(0.0, 1.0);
      float ns = eFbm4(cp * 1.8 + sxz * (0.1 + 0.1 * (1.0 - max(uSkySun.y, 0.0))));
      float ds = (n - ns) * 0.9;
      float lit = clamp(0.5 + ds * 3.2, 0.0, 1.0);
      shade = clamp(shade * 0.6 + (1.0 - lit) * 0.55 - 0.08, 0.0, 1.0);
    }
    #endif
    vec3 cc = mix(uCloudLit, uCloudAmb, shade);
    // heavy overcast: broad darker cells / rain shafts so the sky isn't a flat sheet
    cc *= 1.0 - smoothstep(0.7, 1.0, cov) * 0.4 * smoothstep(0.3, 0.75, n2);
    cc += uSunGlow * 0.6 * pow(max(mu, 0.0), 5.0) * (1.0 - 0.55 * thick);
    cc += uMoonCol * 0.05 * pow(max(mm, 0.0), 24.0);
    cc += vec3(0.8, 0.85, 1.0) * uFlash * (0.6 + thick) * (0.4 + 0.6 * pow(max(dot(dir, uFlashDir), 0.0), 3.0));
    dens *= smoothstep(-0.03, 0.2, y);
    col = mix(col, cc, dens);
  }

  // ---- rainbow after a shower (primary 40–42°, faint reversed secondary ~51°)
  if (uRainbow > 0.001 && uEnvMode < 0.5 && y > -0.02) {
    float ang = acos(clamp(dot(dir, -uSkySun), -1.0, 1.0));
    float t1 = (ang - 0.700) / 0.036;
    float t2 = (0.905 - ang) / 0.05;
    float bow = 0.0;
    vec3 rc = vec3(0.0);
    if (t1 > -0.3 && t1 < 1.3) {
      float w = smoothstep(-0.3, 0.2, t1) * smoothstep(1.3, 0.8, t1);
      rc += skyHue(0.78 * (1.0 - clamp(t1, 0.0, 1.0))) * w;
      bow = 1.0;
    }
    if (t2 > -0.3 && t2 < 1.3) {
      float w = smoothstep(-0.3, 0.2, t2) * smoothstep(1.3, 0.8, t2) * 0.35;
      rc += skyHue(0.78 * (1.0 - clamp(t2, 0.0, 1.0))) * w;
    }
    // Alexander's dark band between the bows, brighter sky inside the primary
    float inside = smoothstep(0.72, 0.66, ang) * 0.06;
    col = col * (1.0 + inside * uRainbow) + rc * uRainbow * 0.3 * (1.0 - dens * 0.7) * smoothstep(-0.02, 0.08, y) * (0.5 + 0.5 * bow);
  }

  // ---- distant rain shafts under heavy clouds (storms / showers seen across the basin)
  if (uShafts > 0.01 && uEnvMode < 0.5 && y > -0.03 && y < 0.3) {
    float az = atan(dir.z, dir.x);
    float cols = smoothstep(0.52, 0.85, eNoise(vec2(az * 9.0 + 3.0, 0.0)) * 0.7 + eNoise(vec2(az * 23.0, 5.0)) * 0.3);
    float streak = 0.75 + 0.25 * eNoise(vec2(az * 140.0, y * 6.0 - uSkyTime * 0.8));
    float h = smoothstep(0.3, 0.02, y) * smoothstep(-0.03, 0.02, y);
    vec3 shaftCol = mix(uCloudAmb, uHorizon, 0.35) * 0.8;
    col = mix(col, shaftCol, cols * streak * h * uShafts * 0.75);
  }

  // ---- sun disk
  float sd = smoothstep(0.99988, 0.99993, mu);
  col += uSunDisk * sd * (1.0 - dens);

  // ---- lightning glow in open sky
  col += vec3(0.55, 0.6, 0.8) * uFlash * 0.25 * (0.3 + 0.7 * pow(max(dot(dir, uFlashDir), 0.0), 4.0));

  // ---- below horizon
  if (y < 0.0) {
    if (uEnvMode > 0.5) col = mix(col, uGround, smoothstep(0.0, -0.2, y));
    else col *= 1.0 - 0.12 * smoothstep(0.0, -0.25, y);
  }

  // multiplicative dither against banding in the gradient
  col *= 1.0 + (eHash12(gl_FragCoord.xy + fract(uSkyTime * 7.0) * 91.0) - 0.5) * 0.018;
  gl_FragColor = vec4(max(col, vec3(0.0)), 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function yp(e, t, n = !1, r) {
  let i = t ? { ...e, uEnvMode: { value: 1 } } : e,
    a = vp;
  return (
    r &&
      ((i = { ...i, ...r.uniforms }),
      (a = a
        .replace(`void main() {`, `${r.pars}\nvoid main() {`)
        .replace(`  // ---- sun disk`, `${r.main}\n  // ---- sun disk`))),
    new c({
      defines: n ? { SKY_LOW: `` } : {},
      name: t ? `env-sky-capture` : `env-sky`,
      uniforms: i,
      vertexShader: _p,
      fragmentShader: a,
      side: 1,
      depthWrite: !1,
      depthTest: !0,
      fog: !1,
    })
  );
}
function bp(e) {
  let t = new k(1, 48, 24),
    n = new P(t, e);
  return (
    (n.frustumCulled = !1),
    (n.renderOrder = 1e4),
    (n.name = `env-sky`),
    n
  );
}
var xp = class {
  cell;
  x0;
  z0;
  nx;
  nz;
  bits;
  count;
  constructor(e, t = 8, n = 640, r) {
    this.cell = t;
    let i = e.bounds,
      a = e.dataset.water;
    ((this.x0 = Math.floor((i.minX - n) / t) * t),
      (this.z0 = Math.floor((i.minZ - n) / t) * t),
      (this.nx = Math.ceil((i.maxX + n - this.x0) / t)),
      (this.nz = Math.ceil((i.maxZ + n - this.z0) / t)),
      (this.bits = new Uint8Array(this.nx * this.nz)));
    let o = a.at,
      s = 0;
    for (let e = 0; e < this.nz; e++) {
      let n = this.z0 + (e + 0.5) * t;
      for (let i = 0; i < this.nx; i++) {
        let c = this.x0 + (i + 0.5) * t;
        (c < a.westX || n < a.northZ || (o && o(c, n)) || (r && r(c, n))) &&
          ((this.bits[e * this.nx + i] = 1), s++);
      }
    }
    this.count = s;
  }
  at(e, t) {
    let n = Math.floor((e - this.x0) / this.cell),
      r = Math.floor((t - this.z0) / this.cell);
    return n < 0 || r < 0 || n >= this.nx || r >= this.nz
      ? !1
      : this.bits[r * this.nx + n] === 1;
  }
  rects(e = 4) {
    let t = [],
      n = new Map();
    for (let r = 0; r <= this.nz; r++) {
      let i = new Set();
      if (r < this.nz) {
        let e = 0;
        for (; e < this.nx;) {
          if (!this.bits[r * this.nx + e]) {
            e++;
            continue;
          }
          let t = e + 1;
          for (; t < this.nx && this.bits[r * this.nx + t];) t++;
          let a = e * 65536 + t,
            o = n.get(a);
          (o
            ? (o.z1 = this.z0 + (r + 1) * this.cell)
            : n.set(a, {
                x0: this.x0 + e * this.cell,
                x1: this.x0 + t * this.cell,
                z0: this.z0 + r * this.cell,
                z1: this.z0 + (r + 1) * this.cell,
              }),
            i.add(a),
            (e = t));
        }
      }
      for (let [r, a] of n)
        i.has(r) ||
          (t.push({ x0: a.x0 - e, z0: a.z0 - e, x1: a.x1 + e, z1: a.z1 + e }),
          n.delete(r));
    }
    return t;
  }
};
function Sp(e, t) {
  let n = Math.imul(e | 0, 374761393) ^ Math.imul(t | 0, 668265263);
  return (
    (n = Math.imul(n ^ (n >>> 13), 1274126177)),
    (n ^= n >>> 16),
    (n >>> 0) / 4294967296
  );
}
function Cp(e, t = 0) {
  return { inset: 0.01 + 0.04 * Sp(e, 7919 + t), dh: 0.05 * Sp(e, 104729 + t) };
}
function wp(e, t) {
  let n = Math.floor(e),
    r = Math.floor(t),
    i = e - n,
    a = t - r,
    o = i * i * (3 - 2 * i),
    s = a * a * (3 - 2 * a),
    c = Sp(n, r),
    l = Sp(n + 1, r),
    u = Sp(n, r + 1),
    d = Sp(n + 1, r + 1);
  return c + (l - c) * o + (u - c) * s + (c - l - u + d) * o * s;
}
function Tp(e, t, n = 4) {
  let r = 0,
    i = 0.5,
    a = 0;
  for (let o = 0; o < n; o++)
    ((r += i * wp(e, t)),
      (a += i),
      (e = e * 2.03 + 17.1),
      (t = t * 2.03 + 9.3),
      (i *= 0.5));
  return r / a;
}
function Ep(e, t, n = 4) {
  let r = 0,
    i = 0.5,
    a = 0,
    o = 1;
  for (let s = 0; s < n; s++) {
    let n = 1 - Math.abs(wp(e, t) * 2 - 1);
    ((n *= n),
      (n *= o),
      (o = Math.min(1, n * 1.6)),
      (r += i * n),
      (a += i),
      (e = e * 2.1 + 5.3),
      (t = t * 2.1 + 11.9),
      (i *= 0.5));
  }
  return r / a;
}
