// tokyo/assets/world-CVm1JHks 51 — math
// Lines 17023-17332 of readable/tokyo/assets/world-CVm1JHks.pretty.js (statement-aligned).
var mp = class {
  sunDir = new U(0, 1, 0);
  moonDir = new U(0, -1, 0);
  lightDir = new U(0, 1, 0);
  sunEl = 45;
  moonEl = -10;
  night = 0;
  dim = 0;
  zenith = new E();
  horizon = new E();
  sunset = new E();
  sunGlow = new E();
  sunDisk = new E();
  moonCol = new E();
  cloudLit = new E();
  cloudAmb = new E();
  stars = 0;
  lightColor = new E();
  lightIntensity = 3;
  shadowStrength = 1;
  moonLit = !1;
  hemiSky = new E();
  hemiGround = new E();
  hemiIntensity = 1.4;
  exposure = 1;
  hazeScale = 170;
  mistColor = new E(0.7, 0.72, 0.74);
  mist = 0;
  gloom = 0;
  envIntensity = 0.5;
  bloomNight = 0;
  sunVis = 1;
  golden = 0;
  tc = new E();
  region = null;
  compute(e, t) {
    let n = this.region;
    if (n) n.bodies(e, this.sunDir, this.moonDir);
    else {
      let t = ((e - 12) / 24) * Math.PI * 2;
      (fp(t, up, this.sunDir), fp(t + (200 * Math.PI) / 180, dp, this.moonDir));
    }
    let r = (Math.asin(Me(this.sunDir.y, -1, 1)) * 180) / Math.PI;
    ((this.sunEl = r),
      (this.moonEl = (Math.asin(Me(this.moonDir.y, -1, 1)) * 180) / Math.PI));
    let i = t.overcast,
      a = t.storm,
      o = n ? n.night(e, r) : pp(e);
    ((this.dim = Me(
      Math.max(o, 0.32 * a + 0.1 * i * (1 - o) + 0.08 * t.rain),
      0,
      1,
    )),
      (this.night = Me(Math.max(o, 0.42 * G(0.6, 1, a)), 0, 1)),
      np(qf, r, this.zenith),
      np(Jf, r, this.horizon),
      np(Yf, r, this.sunset).multiplyScalar(1 - 0.85 * i),
      np(Xf, r, this.sunGlow).multiplyScalar(Math.max(0.08, 1 - 0.9 * i)));
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
    ((this.golden = d), np(Zf, r, this.lightColor));
    let f = rp(sp, r) * (0.12 + 0.88 * t.sunOcc) * this.sunVis * (1 - 0.18 * d);
    (this.sunDisk
      .copy(this.lightColor)
      .multiplyScalar(
        40 * t.sunOcc * t.sunOcc * G(-1.5, 2, r) * (0.35 + 0.65 * this.sunVis),
      ),
      np(ep, r, this.cloudLit),
      np(tp, r, this.cloudAmb),
      this.tc.setRGB(s * 0.92, s * 0.94, s * 0.98),
      this.cloudLit.lerp(this.tc, i * 0.7),
      this.tc.multiplyScalar(0.72),
      this.cloudAmb.lerp(this.tc, i * 0.6));
    let p = 1 - 0.5 * a - 0.3 * t.rain;
    if (
      (this.cloudLit.multiplyScalar(p), this.cloudAmb.multiplyScalar(p), u > 0)
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
      np(Qf, r, this.hemiSky),
      np($f, r, this.hemiGround));
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
        (1 + ap * d)),
      t.mist > 0 && this.hemiSky.lerp(this.mistColor, t.mist * 0.4 * _),
      !this.moonLit)
    ) {
      let e = Me(f / 2.6, 0, 1) * (0.35 + 0.65 * t.sunOcc);
      (this.tc.copy(this.lightColor).multiply(ip),
        this.hemiGround.lerp(this.tc, 0.45 * e),
        this.hemiGround.multiplyScalar(1 + 0.25 * e));
    }
    ((this.exposure = rp(cp, r) * (1 + 0.06 * i * _ + 0.08 * a) * (1 + op * d)),
      (this.hazeScale = 330 / Math.max(0.2, t.haze)),
      (this.gloom = Me(i * 0.6 + a * 0.4, 0, 1)),
      (this.envIntensity = 0.26),
      (this.bloomNight = Me(Math.max(this.night, a * 0.6), 0, 1)),
      n && n.tone && n.tone(this, t, e));
  }
  skyBase(e, t, n, r, i = 1) {
    let a = Me(t, 0, 1),
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
};
function hp(e, t) {
  return e === `rain` || e === `storm` || t() <= 0.34;
}
function gp(e, t, n) {
  let r = t >= 13 && t <= 17,
    i = [
      [`clear`, e === `storm` ? 2 : 4],
      [`cloudy`, 3],
      [`rain`, 1.1],
      [`storm`, e === `clear` ? 0.3 + (r ? 1.2 : 0) : r ? 1.5 : 0.35],
      [`fog`, t >= 4 && t <= 8 ? 2 : 0.15],
    ],
    a = 0;
  for (let [t, n] of i) t !== e && (a += n);
  let o = n() * a;
  for (let [t, n] of i) if (t !== e && ((o -= n), o <= 0)) return t;
  return e === `clear` ? `cloudy` : `clear`;
}
function _p(e, t) {
  return e === `storm` ? 1 + t() : e === `rain` ? 1 + t() * 1.5 : 2 + t() * 3;
}
var vp = !1;
function yp() {
  if (vp) return;
  vp = !0;
  let e = fe;
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
function bp(e, t) {
  let n = Math.min(0.998, Math.max(0, (t - 90) / 500));
  return Math.max(1, Math.floor(e)) + n;
}
function xp(e, t, n, r) {
  let i = 0.25 / Math.max(Math.floor(e), 1),
    a = e - Math.floor(e),
    o = a > 0 ? 90 + a * 500 : 90,
    s = Math.max(-60, Math.min(60, r / o)),
    c = Math.abs(s) > 0.01 ? (1 - Math.exp(-s)) / s : 1 - 0.5 * s;
  return 1 - Math.exp(-i * t * Math.exp(-Math.max(0, n) / o) * c);
}
var Sp = (e, t) =>
  e.dir === t.dir &&
  e.dirShadow === t.dirShadow &&
  e.point === t.point &&
  e.spot === t.spot &&
  e.hemi === t.hemi &&
  e.unsupported === t.unsupported;
function Cp(e, t) {
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
