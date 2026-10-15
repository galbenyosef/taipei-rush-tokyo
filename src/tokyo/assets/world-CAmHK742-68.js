// tokyo/assets/world-CAmHK742 68 — math
// Lines 22235-22580 of readable/tokyo/assets/world-CAmHK742.pretty.js (statement-aligned).
var ah = class {
    pos = [];
    uv = [];
    col = [];
    idx = [];
    add(e, t, n, r, i, a, o, s) {
      let c = this.pos.length / 3;
      for (let [c, l] of [
        [-1, -1],
        [1, -1],
        [1, 1],
        [-1, 1],
      ])
        (this.pos.push(e + c * r, t, n + l * r),
          this.uv.push(c, l),
          this.col.push(i * s, a * s, o * s));
      this.idx.push(c, c + 3, c + 2, c, c + 2, c + 1);
    }
    get count() {
      return this.pos.length / 12;
    }
    build() {
      let e = new V();
      (e.setAttribute(`position`, new N(this.pos, 3)),
        e.setAttribute(`uv`, new N(this.uv, 2)),
        e.setAttribute(`color`, new N(this.col, 3)),
        e.setIndex(this.idx),
        e.computeBoundingSphere(),
        (this.pos = []),
        (this.uv = []),
        (this.col = []),
        (this.idx = []));
      let t = new E({
          name: `env-light-pools`,
          uniforms: { uNight: q.uNight, uWet: q.uWet },
          vertexShader: `
        attribute vec3 color;
        varying vec2 vUv;
        varying vec3 vCol;
        void main() {
          vUv = uv;
          vCol = color;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
          fragmentShader: `
        uniform float uNight;
        uniform float uWet;
        varying vec2 vUv;
        varying vec3 vCol;
        void main() {
          float r2 = dot(vUv, vUv);
          if (r2 > 1.0) discard;
          float f = (1.0 - r2);
          f = f * f * (0.6 + 0.4 * f);
          gl_FragColor = vec4(vCol * f * 0.55 * uNight * smoothstep(0.08, 0.22, uNight) * (1.0 + 0.8 * uWet), 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
          transparent: !0,
          blending: 2,
          depthWrite: !1,
          polygonOffset: !0,
          polygonOffsetFactor: -2,
          polygonOffsetUnits: -2,
          fog: !1,
        }),
        n = new M(e, t);
      return ((n.name = `env-light-pools`), (n.renderOrder = 5), n);
    }
  },
  oh = `
uniform vec3 uCam;
uniform vec3 uCamVel;
uniform float uRTime;
uniform float uFall;
uniform vec2 uWind;
uniform vec3 uBox;
uniform float uGroundY;
uniform float uIntensity;
// roofed areas (arcades, market roofs): xz rect (minX, minZ, maxX, maxZ) + roof height per slot
uniform vec4 uOcc[4];
uniform vec4 uOccY;
attribute vec4 aSeed;
varying float vAlpha;
varying vec2 vUv;
float rainOcc(vec3 p) {
  float o = 0.0;
  for (int i = 0; i < 4; i++) {
    vec4 r = uOcc[i];
    if (p.x > r.x && p.x < r.z && p.z > r.y && p.z < r.w && p.y < uOccY[i]) o = 1.0;
  }
  return o;
}
void main() {
  vec3 wp;
  if (aSeed.w < 2.0) {
    vec3 vel = vec3(uWind.x, -uFall * (0.82 + 0.36 * aSeed.w), uWind.y);
    vec3 p = aSeed.xyz * uBox + vel * uRTime;
    vec3 origin = uCam - vec3(uBox.x * 0.5, uBox.y * 0.38, uBox.z * 0.5);
    p = origin + mod(p - origin, uBox);
    vec3 rel = vel - uCamVel;
    float speed = length(rel);
    vec3 dir = rel / max(speed, 0.001);
    float len = clamp(speed * 0.032, 0.35, 1.6);
    vec3 toCam = uCam - p;
    float dist = length(toCam);
    vec3 side = normalize(cross(dir, toCam / max(dist, 0.001)) + vec3(1e-5));
    float w = 0.0022 + dist * 0.00095;
    wp = p + dir * (position.y - 0.5) * len + side * position.x * w;
    vAlpha = uIntensity * smoothstep(0.5, 2.5, dist) * (1.0 - smoothstep(uBox.x * 0.32, uBox.x * 0.5, dist));
    vAlpha *= step(uGroundY - 0.2, p.y) * (1.0 - rainOcc(p));
    vUv = position.xy;
  } else {
    float tt = uRTime * 2.4 + aSeed.w * 7.13;
    float cyc = floor(tt);
    float ph = fract(tt);
    vec2 rnd = vec2(
      fract(sin(cyc * 12.9898 + aSeed.x * 311.7) * 43758.5453),
      fract(sin(cyc * 78.233 + aSeed.y * 183.3) * 24634.6345));
    vec2 off = (rnd - 0.5) * 30.0;
    vec3 base = vec3(uCam.x + off.x, uGroundY + 0.03, uCam.z + off.y);
    vec3 tc = uCam - base;
    vec3 right = normalize(vec3(-tc.z, 0.0, tc.x) + vec3(1e-5, 0.0, 0.0));
    float s = 0.05 + ph * 0.2;
    wp = base + right * position.x * s + vec3(0.0, position.y * s * 0.9, 0.0);
    vAlpha = uIntensity * (1.0 - ph) * smoothstep(15.0, 6.0, length(off)) * (1.0 - rainOcc(base));
    vUv = vec2(position.x, position.y + 2.0);
  }
  gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
}
`,
  sh = `
uniform vec3 uRainCol;
varying float vAlpha;
varying vec2 vUv;
void main() {
  float a;
  if (vUv.y > 1.5) {
    vec2 q = vec2(vUv.x, vUv.y - 2.0);
    float r = length(vec2(q.x, (q.y - 0.1) * 1.6));
    a = smoothstep(1.0, 0.75, r) * smoothstep(0.35, 0.7, r) * 0.9;
  } else {
    a = (1.0 - abs(vUv.x)) * smoothstep(0.0, 0.3, vUv.y) * smoothstep(1.0, 0.55, vUv.y);
  }
  a *= vAlpha;
  if (a < 0.004) discard;
  gl_FragColor = vec4(uRainCol, a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,
  ch = class {
    mesh;
    uniforms = {
      uCam: { value: new U() },
      uCamVel: { value: new U() },
      uRTime: { value: 0 },
      uFall: { value: 11 },
      uWind: { value: new ve(1, 0.5) },
      uBox: { value: new U(34, 20, 34) },
      uGroundY: { value: 0 },
      uIntensity: { value: 0 },
      uRainCol: { value: new W(0.6, 0.62, 0.66) },
      uOcc: { value: [0, 1, 2, 3].map(() => new de(1e9, 1e9, -1e9, -1e9)) },
      uOccY: { value: new de(-1e9, -1e9, -1e9, -1e9) },
    };
    occ = [];
    occId = 0;
    occBest = [-1, -1, -1, -1];
    occBestD = [0, 0, 0, 0];
    sheltered = !1;
    geo;
    maxStreaks = 0;
    splashes = 0;
    lastCam = new U();
    vel = new U();
    hasLast = !1;
    constructor(e) {
      this.geo = new se();
      let t = new Float32Array([-1, 0, 0, 1, 0, 0, 1, 1, 0, -1, 1, 0]);
      (this.geo.setAttribute(`position`, new H(t, 3)),
        this.geo.setIndex([0, 1, 2, 0, 2, 3]),
        this.allocate(e));
      let n = new E({
        name: `env-rain`,
        uniforms: this.uniforms,
        vertexShader: oh,
        fragmentShader: sh,
        transparent: !0,
        depthWrite: !1,
        fog: !1,
      });
      ((this.mesh = new M(this.geo, n)),
        (this.mesh.frustumCulled = !1),
        (this.mesh.renderOrder = 50),
        (this.mesh.visible = !1),
        (this.mesh.name = `env-rain`));
    }
    addOccluder(e, t) {
      let n = ++this.occId;
      return (
        this.occ.push({
          id: n,
          minX: Math.min(e.minX, e.maxX),
          minZ: Math.min(e.minZ, e.maxZ),
          maxX: Math.max(e.minX, e.maxX),
          maxZ: Math.max(e.minZ, e.maxZ),
          y: t,
        }),
        n
      );
    }
    covered(e, t, n) {
      for (let r = 0; r < this.occ.length; r++) {
        let i = this.occ[r];
        if (e > i.minX && e < i.maxX && t > i.minZ && t < i.maxZ && n < i.y)
          return !0;
      }
      return !1;
    }
    removeOccluder(e) {
      let t = this.occ.findIndex((t) => t.id === e);
      (t >= 0 && this.occ.splice(t, 1),
        this.occ.length || this.pickOccluders(0, 0));
    }
    pickOccluders(e, t) {
      let n = this.occBest,
        r = this.occBestD;
      for (let e = 0; e < 4; e++) ((n[e] = -1), (r[e] = 0xde0b6b3a7640000));
      for (let i = 0; i < this.occ.length; i++) {
        let a = this.occ[i],
          o = Math.max(a.minX - e, 0, e - a.maxX),
          s = Math.max(a.minZ - t, 0, t - a.maxZ),
          c = o * o + s * s;
        if (c > 3600) continue;
        let l = 3;
        if (!(c >= r[l])) {
          for (; l > 0 && c < r[l - 1];)
            ((r[l] = r[l - 1]), (n[l] = n[l - 1]), l--);
          ((r[l] = c), (n[l] = i));
        }
      }
      let i = this.uniforms,
        a = i.uOccY.value;
      for (let e = 0; e < 4; e++) {
        let t = n[e] >= 0 ? this.occ[n[e]] : null;
        (t
          ? i.uOcc.value[e].set(t.minX, t.minZ, t.maxX, t.maxZ)
          : i.uOcc.value[e].set(1e9, 1e9, -1e9, -1e9),
          a.setComponent(e, t ? t.y : -1e9));
      }
    }
    allocate(e) {
      let t = Math.min(700, Math.floor(e * 0.18)),
        n = e - t;
      if (n === this.maxStreaks && t === this.splashes) return;
      ((this.maxStreaks = n), (this.splashes = t));
      let i = t + n,
        a = t,
        o = new Float32Array(i * 4),
        s = 625341585,
        c = () => (
          (s ^= s << 13),
          (s ^= s >>> 17),
          (s ^= s << 5),
          (s >>> 0) / 4294967296
        );
      for (let e = 0; e < i; e++)
        ((o[e * 4] = c()),
          (o[e * 4 + 1] = c()),
          (o[e * 4 + 2] = c()),
          (o[e * 4 + 3] = e < a ? 2 + c() : c()));
      (this.geo.setAttribute(`aSeed`, new r(o, 4)),
        (this.geo.instanceCount = 0));
    }
    preRender(e, t) {
      let n = this.uniforms,
        r = e.position;
      if (this.hasLast && t > 0) {
        let e = Math.min(1, t * 6);
        ((this.vel.x += ((r.x - this.lastCam.x) / t - this.vel.x) * e),
          (this.vel.y += ((r.y - this.lastCam.y) / t - this.vel.y) * e),
          (this.vel.z += ((r.z - this.lastCam.z) / t - this.vel.z) * e),
          this.vel.lengthSq() > 3600 && this.vel.set(0, 0, 0));
      }
      (this.lastCam.copy(r),
        (this.hasLast = !0),
        n.uCam.value.copy(r),
        n.uCamVel.value.copy(this.vel).multiplyScalar(0.85),
        this.mesh.visible && this.occ.length && this.pickOccluders(r.x, r.z));
    }
    update(e, t, n, r, i) {
      let a = this.uniforms;
      ((a.uRTime.value = t),
        (a.uIntensity.value = Math.min(1, e * 1.3) * 0.42),
        a.uWind.value.set(1.2 + n * 5.5, 0.6 + n * 2.5),
        (a.uFall.value = 9.5 + e * 3),
        (a.uGroundY.value = r),
        a.uRainCol.value.copy(i));
      let o = Math.floor(this.maxStreaks * Math.min(1, e * 1.15)),
        s = e > 0.02 && !this.sheltered;
      ((this.geo.instanceCount = s ? this.splashes + o : 0),
        (this.mesh.visible = s));
    }
  };
function lh(e) {
  let t = e >>> 0 || 1,
    n = () => (
      (t = (Math.imul(t, 1664525) + 1013904223) >>> 0),
      t / 4294967296
    ),
    r = [],
    i = [],
    a = (e, t, n) => {
      let a = r.length / 3;
      for (let o = 0; o < e.length; o++) {
        let s = o / (e.length - 1),
          c = t + (n - t) * s,
          [l, u] = e[o];
        if ((r.push(l - c, u, 0, l + c, u, 0), o > 0)) {
          let e = a + (o - 1) * 2;
          i.push(e, e + 1, e + 3, e, e + 3, e + 2);
        }
      }
    },
    o = [],
    s = 0;
  for (let e = 0; e <= 34; e++) {
    let t = 1 - e / 34;
    (o.push([s, t]), (s += (n() - 0.5) * 0.09));
  }
  a(o, 0.006, 0.003);
  for (let e = 0; e < 4; e++) {
    let [e, t] = o[3 + Math.floor(n() * 20.4)],
      r = n() < 0.5 ? -1 : 1,
      i = [[e, t]],
      s = 5 + Math.floor(n() * 9);
    for (let a = 0; a < s; a++)
      ((e += r * (0.01 + n() * 0.03)),
        (t -= 0.012 + n() * 0.02),
        i.push([e, t]));
    a(i, 0.0035, 0.001);
  }
  let c = new V();
  return (c.setAttribute(`position`, new N(r, 3)), c.setIndex(i), c);
}
