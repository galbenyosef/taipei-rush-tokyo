// tokyo/assets/region-tokyo-A7LxHjud 384 — math
// Lines 139778-140075 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var e1 = Math.PI / 180,
  uPe = 23.44 * e1,
  dPe = Date.UTC(2e3, 0, 6, 18, 14) / 864e5,
  t1 = 29.530588,
  n1 = (e, t, n) => {
    let r = Math.min(1, Math.max(0, (n - e) / (t - e)));
    return r * r * (3 - 2 * r);
  },
  fPe = class {
    date;
    sinLat;
    cosLat;
    cosB;
    sinB;
    lonH;
    dayKey = -1;
    decl = 0;
    eotH = 0;
    elong = Math.PI;
    moonDecl = 0;
    winter = 0;
    constructor(e, t, n) {
      ((this.date = n),
        (this.sinLat = Math.sin(e.latitudeDeg * e1)),
        (this.cosLat = Math.cos(e.latitudeDeg * e1)),
        (this.cosB = Math.cos(e.frameBearingDeg * e1)),
        (this.sinB = Math.sin(e.frameBearingDeg * e1)),
        (this.lonH = (e.longitudeDeg - 15 * t) / 15));
    }
    refresh() {
      let e = this.date(),
        t = e.y * 400 + e.m * 32 + e.d;
      if (t === this.dayKey) return;
      this.dayKey = t;
      let n = su(e.y, e.m, e.d),
        r = (2 * Math.PI * (n - 1)) / 365;
      this.decl =
        0.006918 -
        0.399912 * Math.cos(r) +
        0.070257 * Math.sin(r) -
        0.006758 * Math.cos(2 * r) +
        907e-6 * Math.sin(2 * r) -
        0.002697 * Math.cos(3 * r) +
        0.00148 * Math.sin(3 * r);
      let i = (2 * Math.PI * (n - 81)) / 364;
      this.eotH =
        (9.87 * Math.sin(2 * i) - 7.53 * Math.cos(i) - 1.5 * Math.sin(i)) / 60;
      let a = (((Date.UTC(e.y, e.m - 1, e.d, 3) / 864e5 - dPe) % t1) + t1) % t1;
      this.elong = (a / t1) * 2 * Math.PI;
      let o = (2 * Math.PI * (n - 80)) / 365.25;
      ((this.moonDecl = Math.asin(Math.sin(uPe) * Math.sin(o + this.elong))),
        (this.winter =
          0.5 + 0.5 * Math.cos(((n - 18) / 365.25) * Math.PI * 2)));
    }
    dir(e, t, n) {
      let r =
          this.sinLat * Math.sin(t) + this.cosLat * Math.cos(t) * Math.cos(e),
        i = -Math.cos(t) * Math.sin(e),
        a = this.cosLat * Math.sin(t) - this.sinLat * Math.cos(t) * Math.cos(e);
      n.set(
        i * this.cosB - a * this.sinB,
        r,
        -(a * this.cosB + i * this.sinB),
      ).normalize();
    }
    hourAngle(e) {
      return (
        this.refresh(),
        ((e + this.lonH + this.eotH - 12) / 24) * Math.PI * 2
      );
    }
    bodies(e, t, n) {
      let r = this.hourAngle(e);
      (this.dir(r, this.decl, t), this.dir(r - this.elong, this.moonDecl, n));
    }
    night(e, t) {
      return e >= 12 ? 1 - n1(-7, 8, t) : 1 - n1(-4, 9, t);
    }
    tone(e, t) {
      let n = e.sunEl,
        r = n1(-4, 6, n),
        i = (1 - t.overcast) * (1 - t.mist),
        a = this.winter * i * r,
        o = (1 - this.winter) * r;
      if (
        (a > 0 &&
          ((e.zenith.r *= 1 - 0.18 * a),
          (e.zenith.g *= 1 - 0.06 * a),
          (e.zenith.b *= 1 + 0.08 * a),
          (e.horizon.r *= 1 - 0.07 * a),
          (e.horizon.b *= 1 + 0.05 * a)),
        o > 0)
      ) {
        let t =
            e.horizon.r * 0.2126 + e.horizon.g * 0.7152 + e.horizon.b * 0.0722,
          n = 0.18 * o * i;
        ((e.horizon.r += (t * 1.02 - e.horizon.r) * n),
          (e.horizon.g += (t * 1.02 - e.horizon.g) * n),
          (e.horizon.b += (t * 1 - e.horizon.b) * n));
      }
      e.hazeScale *= 1 + 0.55 * this.winter * i - 0.12 * (1 - this.winter);
      let s = n1(-2, -9, n);
      if (s > 0) {
        let n = s * (0.25 + t.overcast);
        ((e.horizon.r -= 0.012 * n),
          (e.horizon.g -= 0.003 * n),
          (e.horizon.b += 0.007 * n));
        let r = s * (0.6 + t.overcast * 0.9);
        ((e.cloudLit.r -= 0.014 * r),
          (e.cloudLit.g -= 0.004 * r),
          (e.cloudLit.b += 0.01 * r));
      }
    }
  },
  pPe = 231.6,
  mPe = 1.8,
  r1 = 1.5,
  i1 = 732e4;
function hPe() {
  let e = (pPe * Math.PI) / 180,
    t = {
      uFujiDir: { value: new v(Math.sin(e), -Math.cos(e)) },
      uFuji: { value: 0 },
      uFujiSnow: { value: 1 },
      uFujiCol: { value: new f() },
      uFujiLit: { value: new f() },
      uFujiEye: { value: new j(2, 0, 0, r1) },
      uFujiFog: { value: new f() },
      uFujiLand: { value: new f() },
      uFujiHaze: { value: new j(0.65, 0.55, 0.45, 1) },
    },
    n = `
  float fjAA = max(fwidth(y), 1e-5);
  if (uEnvMode < 0.5 && y > -0.2 && y < 0.08) {
    float h = uFujiEye.x, dip = uFujiEye.y, S = uFujiEye.w;
    vec3 air = mix(uFujiFog, col, 0.5);          // the air light in front of the mountains
    float hl = length(dir.xz);
    vec2 hd = dir.xz / max(hl, 1e-4);
    float fa = atan(hd.x * uFujiDir.y - hd.y * uFujiDir.x, dot(hd, uFujiDir));
    float ft = fa / S;                            // true azimuths: the ranges are zoomed by S about Fuji, Fuji by SF
    const float SF = ${mPe.toFixed(3)};
    float ff = fa / SF;
    float k = uFuji * (1.0 - dens);
    if (abs(ft) < 1.75 && k > 0.002) {
      // Fuji (94 km): the farthest, so the lightest land; snow in season (a zig-zag lower edge, lower on the shaded
      // north side), sunlit on the south, blue-grey in shade; against a sunset it is a cut-out and the snow vanishes
      float ef = SF * fjFuji(ff) - h / 94000.0;
      float af = clamp(fwidth(y - ef), fjAA, 4.0 * fjAA);  // (the slope's share too: smooth flanks; clamped — this
      // branch's edge rows get no valid derivative)
      float mf = smoothstep(ef + af, ef - af, y) * step(abs(ff), 0.15);
      float hpx = (y + h / 94000.0) / SF * 94000.0 + 603.0;  // the pixel's height on Fuji, m
      float sl = mix(3480.0, 1900.0, uFujiSnow) + 230.0 * (eNoise(vec2(ff * 260.0, 0.5)) - 0.5) + 90.0 * sin(ff * 600.0) - 120.0 * smoothstep(0.004, -0.01, ff);
      float snow = smoothstep(sl - 25.0, sl + 25.0, hpx) * step(0.03, uFujiSnow);
      float shade = smoothstep(0.003, -0.008, ff) * uFujiHaze.w;
      vec3 sc = uFujiLit * mix(vec3(1.0), vec3(0.72, 0.82, 0.95), shade);
      vec3 fc = mix(mix(uFujiCol, air, uFujiHaze.x), sc, snow);
      col = mix(col, fc, mf * k);
      // the crest (~60 km): its foot sinks into the plain's haze
      float er = S * fjRange(ft) - h / 60000.0;
      float ar = clamp(fwidth(y - er), fjAA, 4.0 * fjAA);
      float mr = smoothstep(er + ar, er - ar, y);
      // (the fade goes by height, not by the crest's teeth: no vertical streaks)
      float hr = mix(uFujiHaze.y, 1.0, pow(clamp(1.0 - (y - dip) / (S * 0.022 + 0.004), 0.0, 1.0), 1.6) * 0.85);
      col = mix(col, mix(uFujiCol, air, hr), mr * k);
      // the front range (~40 km): nearer, so darker; its foot too in the haze
      float eh = S * fjFront(ft) - h / 40000.0;
      float ah = clamp(fwidth(y - eh), fjAA, 4.0 * fjAA);
      float mh = smoothstep(eh + ah, eh - ah, y);
      float hh = mix(uFujiHaze.z, 1.0, clamp(1.0 - (y - dip) / (S * 0.0095 + 0.004), 0.0, 1.0) * 0.8);
      col = mix(col, mix(uFujiCol, air, hh), mh * k);
      dens = max(dens, max(mf, max(mr, mh)));  // (the sun disk — 40× bright — sets behind the ridges, whatever the haze)
    }
    // the far plain from the terrain's edge out to the horizon (the terrain covers the near part): the ground under
    // the same height haze as the terrain (fog.ts), a light haze strip at the horizon
    if (y < dip + fjAA * 2.0) {
      float a = max(-y, -dip);
      float gd = ${i1.toFixed(1)} * (a - sqrt(max(a * a - dip * dip, 0.0)));  // (dip² = 2h / R)
      vec3 pc = mix(uFujiLand, uFujiFog, 1.0 - exp(-uFujiEye.z * gd));
      float mp = smoothstep(dip + fjAA * 1.5, dip - fjAA * 1.5, y);
      col = mix(col, pc, mp);
      dens = max(dens, mp);
    }
  }`,
    r = t.uFujiCol.value,
    i = t.uFujiLit.value,
    a = t.uFujiEye.value,
    o = t.uFujiFog.value,
    s = t.uFujiLand.value,
    c = new f(),
    l = new f();
  return {
    uniforms: t,
    pars: `
uniform vec2 uFujiDir;
uniform float uFuji;
uniform float uFujiSnow;
uniform vec3 uFujiCol;
uniform vec3 uFujiLit;
uniform vec4 uFujiEye;
uniform vec3 uFujiFog;
uniform vec3 uFujiLand;
uniform vec4 uFujiHaze;
float fjBump(float x, float c, float w) { float t = (x - c) / w; return exp(-t * t); }
// TRUE elevation angles from sea level (curvature drop included) at TRUE azimuth fa from Fuji (+ = left / south);
// numbers: tokyo/docs/fuji-reference.md
float fjFuji(float fa) {
  float r = max(abs(fa) * 94.0 - 0.42, 0.0);     // km from the crater plateau's edge (summit plateau ≈ 0.5° wide)
  // upper cone 26–30° flaring to ~16° (the north / right side a touch steeper at the top, with a longer tail)
  float drop = (fa < 0.0 ? 735.0 : 700.0) * pow(r, fa < 0.0 ? 0.72 : 0.75);
  drop -= 120.0 * fjBump(fa, 0.036, 0.008);      // 宝永山's shoulder on the south flank
  drop += 25.0 * fjBump(fa, 0.0, 0.0012);        // the crater's notch
  return (3776.0 - 603.0 - drop) / 94000.0;
}
float fjRange(float fa) {
  // the main crest, ~0.7 of Fuji's height above the plain: 丹沢 (~55 km) right in front of Fuji, 大山's pyramid at its
  // left end, 箱根 / 伊豆 lower further left, the long even 奥多摩 / 秩父 ridge (70–90 km) to the right; saw-toothed
  float t = 0.0233 * smoothstep(0.17, 0.07, fa) * smoothstep(-0.2, -0.09, fa) + 0.0016 * fjBump(fa, 0.045, 0.02) - 0.0015 * fjBump(fa, -0.008, 0.025);
  t = max(t, 0.0162 * pow(max(1.0 - abs(fa - 0.15) / 0.075, 0.0), 1.15));
  t = max(t, 0.0118 * fjBump(fa, 0.29, 0.08));
  t = max(t, (0.0185 - 0.003 * smoothstep(-0.3, -1.2, fa)) * smoothstep(-0.07, -0.2, fa) * smoothstep(-1.6, -1.05, fa));
  t = max(t, 0.005 * smoothstep(0.62, 0.36, fa) * smoothstep(-1.75, -1.3, fa));
  // saw teeth: ridged noise (sharp peaks, round saddles)
  return t + 0.0016 * (eNoise(vec2(fa * 40.0, 2.3)) - 0.5) + 0.0018 * (0.6 - abs(2.0 * eNoise(vec2(fa * 120.0, 7.1)) - 1.0)) + 0.0009 * (0.6 - abs(2.0 * eNoise(vec2(fa * 420.0, 3.7)) - 1.0));
}
float fjFront(float fa) {
  // the front range (高尾–陣馬, the 丹沢 front hills, 35–50 km): a softer band ~1/3 of the crest's height
  return (0.0058 + 0.0042 * eNoise(vec2(fa * 14.0, 4.1)) + 0.0012 * eNoise(vec2(fa * 60.0, 9.0)) + 0.0005 * (0.6 - abs(2.0 * eNoise(vec2(fa * 230.0, 1.9)) - 1.0))) * smoothstep(0.42, 0.25, fa) * smoothstep(-1.5, -1.1, fa);
}
`,
    main: n,
    update(e, n, u, d, f) {
      let p = e.sunEl,
        m =
          Math.max(0, 1 - n.overcast * 1.1) *
          (1 - n.rain) *
          (1 - n.mist) *
          (1 - 0.7 * Math.max(0, n.cloud - 0.35)),
        h = a1(u, 4.2, 5.4) * (1 - a1(u, 8.2, 10)),
        g = 0.1 + 0.9 * d ** 0.8,
        _ = a1(p, -3, -11);
      ((t.uFuji.value = m * Math.max(g, h * 0.85) * (1 - 0.92 * _)),
        (t.uFujiSnow.value = Math.min(1, Math.max(0, (d - 0.18) / 0.55))));
      let v = Math.max(1.5, f.y),
        y = pte(f.fogNear, 1e3, v, -v);
      (a.set(
        v,
        -Math.sqrt((2 * v) / i1),
        -Math.log(Math.max(1e-4, 1 - y)) / 1e3,
        r1,
      ),
        f.fogColor && o.copy(f.fogColor),
        e.skyBase(0, 0.25, -1, c, 0),
        s.copy(c).multiplyScalar(0.32),
        c
          .copy(e.lightColor)
          .multiplyScalar(0.035 * Math.min(e.lightIntensity, 3)),
        s.add(c).multiplyScalar(1 - 0.6 * f.night));
      let b = t.uFujiDir.value,
        x = e.sunDir,
        S = Math.hypot(x.x, x.z) || 1,
        C =
          Math.max(0, (x.x * b.x + x.z * b.y) / S) *
          a1(p, -10, -3.5) *
          (1 - a1(p, 14, 30));
      e.skyBase(b.x, 0.012, b.y, r, 0.6);
      let w = t.uFujiHaze.value;
      (w.set(
        0.3 - 0.2 * C,
        0.22 - 0.16 * C,
        0.26 - 0.12 * C,
        (1 - C) * a1(p, -2, 6),
      ),
        c.copy(r));
      let T = 0.45 - 0.38 * C,
        E = (r.r + r.g + r.b) / 3,
        D = 0.55 * C;
      r.setRGB(
        (r.r + (E - r.r) * D) * T * 0.84,
        (r.g + (E - r.g) * D) * T * 0.95,
        (r.b + (E - r.b) * D) * T * 1.15,
      );
      let O = Math.max(0, -(x.x * b.x + x.z * b.y) / S),
        k = a1(p, -1.5, 3),
        A = c.lerp(r, 1 - w.x);
      (e.skyBase(b.x, 0.03, b.y, i, 0.4), i.multiplyScalar(1.1));
      let j = l
        .copy(e.lightColor)
        .multiplyScalar(0.05 + 0.025 * Math.min(e.lightIntensity, 3));
      (i.lerp(j.add(i), (0.35 + 0.65 * O) * k * (1 - n.overcast)),
        i.lerp(A, 0.9 * C));
    },
  };
}
function a1(e, t, n) {
  let r = Math.min(1, Math.max(0, (e - t) / (n - t)));
  return r * r * (3 - 2 * r);
}
var gPe = -480;
