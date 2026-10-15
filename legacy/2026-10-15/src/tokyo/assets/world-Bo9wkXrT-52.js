// tokyo/assets/world-Bo9wkXrT 52 — math
// Lines 16952-17241 of readable/tokyo/assets/world-Bo9wkXrT.pretty.js (statement-aligned).
var ap = class {
    sunDir = new U(0, 1, 0);
    moonDir = new U(0, -1, 0);
    lightDir = new U(0, 1, 0);
    sunEl = 45;
    moonEl = -10;
    night = 0;
    dim = 0;
    zenith = new W();
    horizon = new W();
    sunset = new W();
    sunGlow = new W();
    sunDisk = new W();
    moonCol = new W();
    cloudLit = new W();
    cloudAmb = new W();
    stars = 0;
    lightColor = new W();
    lightIntensity = 3;
    shadowStrength = 1;
    moonLit = !1;
    hemiSky = new W();
    hemiGround = new W();
    hemiIntensity = 1.4;
    exposure = 1;
    hazeScale = 170;
    mistColor = new W(0.7, 0.72, 0.74);
    mist = 0;
    gloom = 0;
    envIntensity = 0.5;
    bloomNight = 0;
    sunVis = 1;
    golden = 0;
    tc = new W();
    region = null;
    compute(e, t) {
      let n = this.region;
      if (n) n.bodies(e, this.sunDir, this.moonDir);
      else {
        let t = ((e - 12) / 24) * Math.PI * 2;
        (rp(t, tp, this.sunDir),
          rp(t + (200 * Math.PI) / 180, np, this.moonDir));
      }
      let r = (Math.asin(Ke(this.sunDir.y, -1, 1)) * 180) / Math.PI;
      ((this.sunEl = r),
        (this.moonEl = (Math.asin(Ke(this.moonDir.y, -1, 1)) * 180) / Math.PI));
      let i = t.overcast,
        a = t.storm,
        o = n ? n.night(e, r) : ip(e);
      ((this.dim = Ke(
        Math.max(o, 0.32 * a + 0.1 * i * (1 - o) + 0.08 * t.rain),
        0,
        1,
      )),
        (this.night = Ke(Math.max(o, 0.42 * G(0.6, 1, a)), 0, 1)),
        qf(Rf, r, this.zenith),
        qf(zf, r, this.horizon),
        qf(Bf, r, this.sunset).multiplyScalar(1 - 0.85 * i),
        qf(Vf, r, this.sunGlow).multiplyScalar(Math.max(0.08, 1 - 0.9 * i)));
      let s =
          this.horizon.r * 0.2126 +
          this.horizon.g * 0.7152 +
          this.horizon.b * 0.0722,
        c = i * 0.85;
      (this.tc.setRGB(s * 0.95, s * 0.98, s * 1.03),
        this.horizon.lerp(this.tc, c),
        this.tc.multiplyScalar(0.8),
        this.zenith.lerp(this.tc, i * 0.92));
      let l = 1 - 0.45 * a - 0.22 * t.rain;
      (this.horizon.multiplyScalar(l), this.zenith.multiplyScalar(l));
      let u = G(-2, -9, r);
      if (u > 0) {
        let e = u * (0.25 + i);
        ((this.horizon.r += 0.03 * e),
          (this.horizon.g += 0.017 * e),
          (this.horizon.b += 0.011 * e),
          (this.zenith.r += 0.008 * e * i),
          (this.zenith.g += 0.005 * e * i),
          (this.zenith.b += 0.004 * e * i));
      }
      if (((this.mist = t.mist), t.mist > 0)) {
        let e = Math.max(0.05, s * (1 - 0.5 * u));
        (this.mistColor.setRGB(e * 0.97, e * 0.99, e * 1.02),
          u > 0 && this.mistColor.lerp(this.tc.setRGB(0.11, 0.08, 0.065), u),
          this.horizon.lerp(this.mistColor, t.mist * 0.75),
          this.zenith.lerp(this.mistColor, t.mist * 0.45));
      }
      this.sunVis = G(2.5, 6, r);
      let d = G(-3, 3, r) * (1 - G(12, 26, r)) * (1 - 0.75 * i);
      ((this.golden = d), qf(Hf, r, this.lightColor));
      let f =
        Jf(Qf, r) * (0.12 + 0.88 * t.sunOcc) * this.sunVis * (1 - 0.18 * d);
      (this.sunDisk
        .copy(this.lightColor)
        .multiplyScalar(
          40 *
            t.sunOcc *
            t.sunOcc *
            G(-1.5, 2, r) *
            (0.35 + 0.65 * this.sunVis),
        ),
        qf(Gf, r, this.cloudLit),
        qf(Kf, r, this.cloudAmb),
        this.tc.setRGB(s * 0.92, s * 0.94, s * 0.98),
        this.cloudLit.lerp(this.tc, i * 0.7),
        this.tc.multiplyScalar(0.72),
        this.cloudAmb.lerp(this.tc, i * 0.6));
      let p = 1 - 0.5 * a - 0.3 * t.rain;
      if (
        (this.cloudLit.multiplyScalar(p),
        this.cloudAmb.multiplyScalar(p),
        u > 0)
      ) {
        let e = u * (0.6 + i * 0.9);
        ((this.cloudLit.r += 0.035 * e),
          (this.cloudLit.g += 0.02 * e),
          (this.cloudLit.b += 0.012 * e),
          (this.cloudAmb.r += 0.012 * e),
          (this.cloudAmb.g += 0.008 * e),
          (this.cloudAmb.b += 0.006 * e));
      }
      let m = G(-2, 6, this.moonEl),
        h = 0.12 * G(-3, -9, r) * m * (0.25 + 0.75 * t.sunOcc);
      (this.moonCol
        .setRGB(1.25, 1.3, 1.42)
        .multiplyScalar(G(-1, -7, r) * m * (1 - 0.85 * t.cloud * i)),
        (this.stars = G(-7, -14, r) * (1 - 0.9 * i) * (1 - t.mist)),
        (this.moonLit = f < h),
        f >= h
          ? (this.lightDir.copy(this.sunDir),
            (this.lightIntensity = f),
            (this.shadowStrength =
              0.92 * G(0.05, 0.9, f) * (0.15 + 0.85 * t.sunOcc * t.sunOcc)))
          : (this.lightDir.copy(this.moonDir),
            this.lightColor.setRGB(0.8, 0.84, 0.95),
            (this.lightIntensity = h),
            (this.shadowStrength = 0.4 * G(0.02, 0.2, h))),
        qf(Uf, r, this.hemiSky),
        qf(Wf, r, this.hemiGround));
      let g =
        this.hemiSky.r * 0.2126 +
        this.hemiSky.g * 0.7152 +
        this.hemiSky.b * 0.0722;
      (this.tc.setRGB(g * 0.96, g, g * 1.05),
        this.hemiSky.lerp(this.tc, i * 0.7));
      let _ = 1 - u;
      if (
        ((this.hemiIntensity =
          (1.25 + 0.35 * i * _) *
          (1 - 0.35 * a) *
          (1 - 0.1 * t.rain) *
          (1 + Xf * d)),
        t.mist > 0 && this.hemiSky.lerp(this.mistColor, t.mist * 0.4 * _),
        !this.moonLit)
      ) {
        let e = Ke(f / 2.6, 0, 1) * (0.35 + 0.65 * t.sunOcc);
        (this.tc.copy(this.lightColor).multiply(Yf),
          this.hemiGround.lerp(this.tc, 0.45 * e),
          this.hemiGround.multiplyScalar(1 + 0.25 * e));
      }
      ((this.exposure =
        Jf($f, r) * (1 + 0.06 * i * _ + 0.08 * a) * (1 + Zf * d)),
        (this.hazeScale = 330 / Math.max(0.2, t.haze)),
        (this.gloom = Ke(i * 0.6 + a * 0.4, 0, 1)),
        (this.envIntensity = 0.26),
        (this.bloomNight = Ke(Math.max(this.night, a * 0.6), 0, 1)),
        n && n.tone && n.tone(this, t, e));
    }
    skyBase(e, t, n, r, i = 1) {
      let a = Ke(t, 0, 1),
        o = 1 - (1 - a) ** 2.6;
      r.copy(this.horizon).lerp(this.zenith, o);
      let s = Math.hypot(e, n),
        c = this.sunDir,
        l = Math.hypot(c.x, c.z),
        u =
          s > 1e-4 && l > 1e-4
            ? ((e * c.x + n * c.z) / (s * l)) * 0.5 + 0.5
            : 0.5,
        d = Math.exp(-a * 5.5) * u * u;
      ((r.r += this.sunset.r * d),
        (r.g += this.sunset.g * d),
        (r.b += this.sunset.b * d));
      let f = Math.max(0, e * c.x + t * c.y + n * c.z),
        p = (0.16 * f ** 5 + 0.85 * f ** 42) * i;
      return (
        (r.r += this.sunGlow.r * p),
        (r.g += this.sunGlow.g * p),
        (r.b += this.sunGlow.b * p),
        r
      );
    }
  },
  op = !1;
function sp() {
  if (op) return;
  op = !0;
  let e = _e;
  ((e.fog_pars_vertex = `
#ifdef USE_FOG
  varying float vFogDepth;
  varying vec3 vFogRel;
#endif`),
    (e.fog_vertex = `
#ifdef USE_FOG
  vFogDepth = - mvPosition.z;
  vFogRel = mvPosition.xyz * mat3( viewMatrix );
#endif`),
    (e.fog_pars_fragment = `
#ifdef USE_FOG
  uniform vec3 fogColor;
  varying float vFogDepth;
  varying vec3 vFogRel;
  #ifdef FOG_EXP2
    uniform float fogDensity;
  #else
    uniform float fogNear;
    uniform float fogFar;
  #endif
  float taipeiHaze( float dist, float relY ) {
    // fogNear = haze scale (integer part) + height-scale code (fraction, see fog.ts)
    float dens = 0.25 / max( floor( fogNear ), 1.0 );
    float fh = fract( fogNear );
    float H = fh > 0.0 ? ${(90).toFixed(1)} + fh * 500.0 : ${(90).toFixed(1)};
    float camY = max( cameraPosition.y, 0.0 );
    float k = clamp( relY / H, -60.0, 60.0 );
    float ht = 1.0 - 0.5 * k;
    if ( abs( k ) > 0.01 ) ht = ( 1.0 - exp( - k ) ) / k;
    float tau = dens * dist * exp( - camY / H ) * ht;
    return 1.0 - exp( - tau );
  }
#endif`),
    (e.fog_fragment = `
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = taipeiHaze( length( vFogRel ), vFogRel.y );
    #ifndef FOG_NO_CLIP
      // near the far plane: dissolve (ordered dither) into the far layer's LOD instead of a fog wall
      float fogClip = smoothstep( fogFar * 0.91, fogFar * 0.985, vFogDepth );
      if ( fogClip > 0.0 ) {
        vec2 fq = mod( floor( gl_FragCoord.xy ), 4.0 );
        vec2 f0 = mod( fq, 2.0 );
        vec2 f1 = floor( fq * 0.5 );
        float th = ( 4.0 * mod( 2.0 * f0.x + 3.0 * f0.y, 4.0 ) + mod( 2.0 * f1.x + 3.0 * f1.y, 4.0 ) + 0.5 ) / 16.0;
        if ( fogClip > th ) discard;
      }
    #endif
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`));
}
function cp(e, t) {
  let n = Math.min(0.998, Math.max(0, (t - 90) / 500));
  return Math.max(1, Math.floor(e)) + n;
}
var lp = (e, t) =>
  e.dir === t.dir &&
  e.dirShadow === t.dirShadow &&
  e.point === t.point &&
  e.spot === t.spot &&
  e.hemi === t.hemi &&
  e.unsupported === t.unsupported;
function up(e, t) {
  let n = { dir: 0, dirShadow: 0, point: 0, spot: 0, hemi: 0, unsupported: !1 };
  return (
    e.traverseVisible((e) => {
      let r = e;
      r.isLight &&
        e !== t &&
        (r.isDirectionalLight
          ? r.castShadow
            ? n.dirShadow++
            : n.dir++
          : r.isPointLight
            ? r.castShadow
              ? (n.unsupported = !0)
              : n.point++
            : r.isSpotLight
              ? r.castShadow || r.map
                ? (n.unsupported = !0)
                : n.spot++
              : r.isHemisphereLight
                ? n.hemi++
                : r.isAmbientLight || (n.unsupported = !0));
    }),
    n
  );
}
