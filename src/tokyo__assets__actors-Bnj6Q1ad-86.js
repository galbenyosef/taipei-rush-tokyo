// tokyo__assets__actors-Bnj6Q1ad 86 — float32array
// Lines 42221-42612 of readable/tokyo__assets__actors-Bnj6Q1ad.pretty.js (statement-aligned).
var Tx = {
    damage: 6,
    range: 110,
    spread: 0.042,
    burst: [1, 3],
    shotGap: 0.26,
    burstGap: [1.1, 2.1],
  },
  Ex = {
    damage: 7,
    range: 140,
    spread: 0.03,
    burst: [3, 4],
    shotGap: 0.1,
    burstGap: [0.9, 1.6],
  },
  Dx = {
    damage: 6,
    range: 190,
    spread: 0.035,
    burst: [2, 3],
    shotGap: 0.16,
    burstGap: [2.2, 3.6],
  },
  Ox = 5.5,
  kx = 1.7,
  Ax = 5.1,
  jx = { car: 1800, scooter: 900 },
  Mx = { min: 200, max: 330, farOk: 265 },
  Nx = 192,
  Px = 40,
  Fx = 24,
  Ix = 2,
  Lx = 258,
  Rx = 48,
  zx = 11,
  Bx = `
attribute vec4 aP0; // glare / pool: xyz + size (m) | radius (m); tracer: start xyz + alpha; beam: lamp xyz + intensity; disc: local centre + radius
attribute vec4 aP1; // pool: (stretch, heading); tracer / beam: end xyz; disc: x = alpha
attribute vec4 aCol; // rgb + kind (0 glare, 1 pool, 2 tracer, 3 beam, 4 disc); beam: rg = half-width at the lamp / the spot
uniform float uPx;
uniform float uFar;
uniform vec2 uRes;
varying vec2 vQ;
varying vec4 vC;
varying float vKind;
void main() {
  float kind = aCol.w;
  vKind = kind;
  vec3 col = aCol.rgb;
  if (kind < 0.5) {
    // glare: billboard of the old point-sprite size (perspective-attenuated, never balloons right next to a light)
    vec2 corner = vec2(position.x * 2.0 - 1.0, position.y);
    vec4 mv = modelViewMatrix * vec4(aP0.xyz, 1.0);
    float z = max(0.2, -mv.z);
    float size = aP0.w;
    // pull the sprite toward the camera so the surface it sits on (roof, light bar) doesn't clip it
    mv.xyz += normalize(-mv.xyz) * min(size * 0.45, min(0.7, z * 0.5));
    gl_Position = projectionMatrix * mv;
    float px = clamp(size * uPx / max(z, 7.0 + size * 2.0), 1.5, 220.0);
    gl_Position.xy += corner * (px / uRes) * gl_Position.w;
    vQ = corner;
    vC = vec4(col * (1.0 - smoothstep(uFar * 0.45, uFar * 0.95, z)), 1.0);
  } else if (kind < 1.5) {
    // ground pool: rotated / stretched quad just above the surface
    vec2 corner = vec2(position.x * 2.0 - 1.0, position.y);
    float c = cos(-aP1.y), s = sin(-aP1.y);
    float sx = aP0.w, sz = aP0.w * aP1.x;
    vec3 wp = vec3(aP0.x + c * sx * corner.x + s * sz * corner.y, aP0.y + 0.03, aP0.z - s * sx * corner.x + c * sz * corner.y);
    vec4 mv = modelViewMatrix * vec4(wp, 1.0);
    gl_Position = projectionMatrix * mv;
    vQ = corner;
    vC = vec4(col * (1.0 - smoothstep(uFar * 0.4, uFar * 0.9, -mv.z)), 1.0);
  } else if (kind < 3.5) {
    // tracer ribbon / searchlight beam from aP0.xyz to aP1.xyz, x = along (0..1), y = across (-1..1)
    float t = position.x;
    vec4 vs = modelViewMatrix * vec4(aP0.xyz, 1.0);
    vec4 ve = modelViewMatrix * vec4(aP1.xyz, 1.0);
    vec4 mv = mix(vs, ve, t);
    vec3 dir = ve.xyz - vs.xyz;
    dir = length(dir) > 1e-4 ? normalize(dir) : vec3(1.0, 0.0, 0.0);
    vec3 side = cross(dir, normalize(mv.xyz));
    side = length(side) > 1e-4 ? normalize(side) : vec3(0.0, 1.0, 0.0);
    if (kind < 2.5) {
      float w = aP0.w > 0.001 ? 0.035 * (0.5 + 0.5 * t) * max(1.0, -mv.z * 0.02) : 0.0;
      mv.xyz += side * position.y * w;
      vQ = vec2(t, position.y);
      vC = vec4(col, aP0.w);
    } else {
      float w = mix(aCol.r, aCol.g, t);
      mv.xyz += side * position.y * w;
      // (across · w, w): divided per fragment → exact across coordinate on the trapezoid
      vQ = vec2(t, position.y * w);
      vC = vec4(w, 0.0, 0.0, aP0.w);
    }
    gl_Position = projectionMatrix * mv;
  } else {
    // rotor disc in its mesh's local XZ plane (the mesh rides the helicopter)
    vec2 corner = vec2(position.x * 2.0 - 1.0, position.y);
    vec4 mv = modelViewMatrix * vec4(aP0.xyz + vec3(corner.x * aP0.w, 0.0, corner.y * aP0.w), 1.0);
    gl_Position = projectionMatrix * mv;
    vQ = corner;
    // haze: the disc thins with distance (the MeshBasicMaterial it replaces was fogged)
    vC = vec4(col, aP1.x * exp(-0.0022 * max(0.0, -mv.z - 40.0)) * (1.0 - smoothstep(uFar * 0.45, uFar * 0.95, -mv.z)));
  }
}`,
  Vx = `
varying vec2 vQ;
varying vec4 vC;
varying float vKind;
void main() {
  vec3 o;
  float alpha = 1.0;
  if (vKind < 0.5) {
    float r2 = dot(vQ, vQ);
    if (r2 > 1.0) discard;
    float core = exp(-r2 * 18.0) * 1.8;
    float halo = exp(-r2 * 4.0) * 0.38;
    float streak = exp(-abs(vQ.y) * 26.0) * (1.0 - abs(vQ.x)) * 0.7;
    o = vC.rgb * (core + halo + streak);
  } else if (vKind < 1.5) {
    float d = length(vQ);
    o = vC.rgb * pow(max(0.0, 1.0 - d), 1.8);
  } else if (vKind < 2.5) {
    float edge = 1.0 - abs(vQ.y);
    o = vC.rgb * (vC.w * edge * edge * (0.15 + 0.85 * vQ.x * vQ.x));
  } else if (vKind < 3.5) {
    // searchlight: front + back face of a cone (x2), fresnel-soft edges, bright at the lamp, fading to the ground
    float t = vQ.x;
    float y = vQ.y / max(vC.r, 1e-4);
    float a = vC.w * pow(max(0.0, 1.0 - t), 1.4) * pow(max(0.0, 1.0 - y * y), 0.8) * (0.35 + 0.65 * smoothstep(0.0, 0.08, t));
    o = vec3(1.0, 0.96, 0.86) * (2.0 * a);
  } else {
    // rotor blur: radial gradient (0 → .55 → .35 → 0) with four lighter blade sectors
    float r = length(vQ);
    if (r >= 1.0) discard;
    float g = clamp((r - 0.078) / 0.922, 0.0, 1.0);
    float a = g < 0.18 ? 0.55 * g / 0.18 : g < 0.9 ? mix(0.55, 0.35, (g - 0.18) / 0.72) : 0.35 * (1.0 - g) / 0.1;
    float ang = mod(atan(vQ.y, vQ.x), 1.5708);
    a *= 1.0 - 0.45 * smoothstep(0.27, 0.33, ang) * (1.0 - smoothstep(1.07, 1.13, ang));
    o = vC.rgb;
    // the MeshBasicMaterial it replaces was double-sided transparent drawn in two passes (back, then front faces):
    // the same colour blended twice → 1 − (1 − α)²
    float a1 = a * vC.w;
    alpha = a1 * (2.0 - a1);
  }
  gl_FragColor = vec4(o, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,
  Hx = class {
    ctx;
    group = new _();
    geo = new ue();
    p0 = new Float32Array(Lx * 4);
    p1 = new Float32Array(Lx * 4);
    cl = new Float32Array(Lx * 4);
    aP0;
    aP1;
    aCol;
    attrs;
    mat;
    mesh;
    n = 0;
    gCount = 0;
    pCount = 0;
    tStart = new Float32Array(72);
    tEnd = new Float32Array(72);
    tCol = new Float32Array(72);
    tLife = new Float32Array(Fx);
    tMax = new Float32Array(Fx);
    tNext = 0;
    tr = new Float32Array(528);
    trNext = 0;
    pv = new ke();
    fr = new v();
    sph = new C();
    uniforms = {
      uPx: { value: 600 },
      uFar: { value: 900 },
      uRes: { value: new le(1280, 720) },
    };
    discMat = null;
    constructor(e) {
      ((this.ctx = e),
        this.geo.setAttribute(
          `position`,
          new N([0, -1, 0, 0, 1, 0, 1, -1, 0, 1, 1, 0], 3),
        ),
        this.geo.setIndex([0, 2, 1, 1, 2, 3]),
        (this.aP0 = new a(this.p0, 4).setUsage(b)),
        (this.aP1 = new a(this.p1, 4).setUsage(b)),
        (this.aCol = new a(this.cl, 4).setUsage(b)),
        this.geo.setAttribute(`aP0`, this.aP0),
        this.geo.setAttribute(`aP1`, this.aP1),
        this.geo.setAttribute(`aCol`, this.aCol),
        (this.attrs = [this.aP0, this.aP1, this.aCol]),
        (this.geo.instanceCount = 0),
        (this.mat = Ux(`police-fx`, this.uniforms, 2)),
        (this.mat.polygonOffset = !0),
        (this.mat.polygonOffsetFactor = -2),
        (this.mat.polygonOffsetUnits = -2),
        (this.mesh = new M(this.geo, this.mat)),
        (this.mesh.frustumCulled = !1),
        (this.mesh.renderOrder = 10),
        (this.mesh.visible = !1),
        (this.mesh.name = `police-fx-layer`),
        this.group.add(this.mesh));
    }
    prewarm() {
      this.mesh.visible = !0;
    }
    get night() {
      return Qe.uNight.value;
    }
    begin() {
      ((this.n = 0), (this.gCount = 0), (this.pCount = 0), (this.bCount = 0));
      let e = this.ctx.camera;
      (this.pv.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
        this.fr.setFromProjectionMatrix(
          this.pv,
          e.coordinateSystem,
          e.reversedDepth,
        ),
        (this.uniforms.uFar.value = e.far));
    }
    bCount = 0;
    rotorDisc(e, t, n) {
      let r = new fe();
      (r.setAttribute(
        `position`,
        new N([0, -1, 0, 0, 1, 0, 1, -1, 0, 1, 1, 0], 3),
      ),
        r.setIndex([0, 2, 1, 1, 2, 3]));
      let i = (e, t, n, r) =>
        new N([e, t, n, r, e, t, n, r, e, t, n, r, e, t, n, r], 4);
      (r.setAttribute(`aP0`, i(0, t, 0, e)),
        r.setAttribute(`aP1`, i(n, 0, 0, 0)),
        r.setAttribute(`aCol`, i(0.00699, 0.00699, 0.00913, 4)),
        (r.boundingSphere = new C(new R(0, t, 0), e * 1.42)),
        (this.discMat ??= Ux(`police-fx-disc`, this.uniforms, 1)));
      let a = new M(r, this.discMat);
      return ((a.name = `police-heli-disc`), a);
    }
    beam(e, t, n, r, i, a, o, s, c) {
      if (this.bCount >= Ix || this.n >= 234 || c <= 0.002) return;
      let l = Math.hypot(r - e, i - t, a - n);
      this.inView((e + r) / 2, (t + i) / 2, (n + a) / 2, l / 2 + s) &&
        (this.bCount++, this.put(e, t, n, c, r, i, a, o, s, 0, 3));
    }
    inView(e, t, n, r) {
      return (
        this.sph.center.set(e, t, n),
        (this.sph.radius = r + 2),
        this.fr.intersectsSphere(this.sph)
      );
    }
    put(e, t, n, r, i, a, o, s, c, l, u) {
      let d = this.n++ * 4,
        f = this.p0,
        p = this.p1,
        m = this.cl;
      ((f[d] = e),
        (f[d + 1] = t),
        (f[d + 2] = n),
        (f[d + 3] = r),
        (p[d] = i),
        (p[d + 1] = a),
        (p[d + 2] = o),
        (m[d] = s),
        (m[d + 1] = c),
        (m[d + 2] = l),
        (m[d + 3] = u));
    }
    glare(e, t, n, r, i, a, o) {
      this.gCount >= Nx ||
        this.n >= 234 ||
        !this.inView(e, t, n, o) ||
        (this.gCount++, this.put(e, t, n, o, 0, 0, 0, r, i, a, 0));
    }
    pool(e, t, n, r, i, a, o, s = 1, c = 0) {
      this.pCount >= Px ||
        this.n >= 234 ||
        i + a + o < 0.003 ||
        (this.inView(e, t, n, r * Math.max(1, s)) &&
          (this.pCount++, this.put(e, t, n, r, s, c, 0, i, a, o, 1)));
    }
    flash(e, t, n, r, i, a, o, s, c = 0, l = 0) {
      let u = this.trNext;
      this.trNext = (this.trNext + 1) % Rx;
      let d = u * zx,
        f = this.tr;
      ((f[d] = e),
        (f[d + 1] = t),
        (f[d + 2] = n),
        (f[d + 3] = r),
        (f[d + 4] = i),
        (f[d + 5] = a),
        (f[d + 6] = o),
        (f[d + 7] = s),
        (f[d + 8] = s),
        (f[d + 9] = c),
        (f[d + 10] = l));
    }
    tracer(e, t, n, r, i, a, o = 3.2, s = 2.4, c = 1.1, l = 0.09) {
      let u = this.tNext;
      ((this.tNext = (this.tNext + 1) % Fx),
        (this.tStart[u * 3] = e),
        (this.tStart[u * 3 + 1] = t),
        (this.tStart[u * 3 + 2] = n),
        (this.tEnd[u * 3] = r),
        (this.tEnd[u * 3 + 1] = i),
        (this.tEnd[u * 3 + 2] = a),
        (this.tCol[u * 3] = o),
        (this.tCol[u * 3 + 1] = s),
        (this.tCol[u * 3 + 2] = c),
        (this.tLife[u] = l),
        (this.tMax[u] = l));
    }
    end(e) {
      let t = this.tr,
        n = this.night;
      for (let r = 0; r < Rx; r++) {
        let i = r * zx;
        if (t[i + 7] <= 0) continue;
        t[i + 7] -= e;
        let a = Math.max(0, t[i + 7] / t[i + 8]);
        if (
          (this.glare(
            t[i],
            t[i + 1],
            t[i + 2],
            t[i + 3] * a,
            t[i + 4] * a,
            t[i + 5] * a,
            t[i + 6] * (0.6 + 0.4 * a),
          ),
          t[i + 9] > 0 && n > 0.1)
        ) {
          let e = a * (0.25 + n * 0.75) * 0.22;
          this.pool(
            t[i],
            t[i + 10],
            t[i + 2],
            t[i + 9],
            t[i + 3] * e,
            t[i + 4] * e,
            t[i + 5] * e,
          );
        }
      }
      for (let t = 0; t < Fx; t++) {
        if (this.tLife[t] <= 0) continue;
        this.tLife[t] -= e;
        let n = Math.max(0, this.tLife[t] / this.tMax[t]);
        if (n <= 0) continue;
        let r = t * 3;
        this.put(
          this.tStart[r],
          this.tStart[r + 1],
          this.tStart[r + 2],
          n,
          this.tEnd[r],
          this.tEnd[r + 1],
          this.tEnd[r + 2],
          this.tCol[r],
          this.tCol[r + 1],
          this.tCol[r + 2],
          2,
        );
      }
      let r = this.n;
      if (((this.geo.instanceCount = r), (this.mesh.visible = r > 0), !r))
        return;
      let i = this.ctx.renderer,
        a = this.ctx.camera,
        o = this.uniforms;
      ((o.uPx.value =
        (i.height * i.pixelRatio) / (2 * Math.tan((a.fov * Math.PI) / 360))),
        o.uRes.value.set(
          Math.max(1, i.width * i.pixelRatio),
          Math.max(1, i.height * i.pixelRatio),
        ));
      for (let e of this.attrs)
        (e.clearUpdateRanges(),
          e.addUpdateRange(0, r * 4),
          (e.needsUpdate = !0));
    }
    get glareCount() {
      return this.gCount;
    }
  };
