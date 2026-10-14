// tokyo/assets/region-tokyo-BcM3fReU 216 — math
// Lines 89196-89536 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var JJ = Math.PI / 180,
  YJ = 23.44 * JJ,
  XJ = Date.UTC(2e3, 0, 6, 18, 14) / 864e5,
  ZJ = 29.530588,
  QJ = (e, t, n) => {
    let r = Math.min(1, Math.max(0, (n - e) / (t - e)));
    return r * r * (3 - 2 * r);
  },
  $J = class {
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
        (this.sinLat = Math.sin(e.latitudeDeg * JJ)),
        (this.cosLat = Math.cos(e.latitudeDeg * JJ)),
        (this.cosB = Math.cos(e.frameBearingDeg * JJ)),
        (this.sinB = Math.sin(e.frameBearingDeg * JJ)),
        (this.lonH = (e.longitudeDeg - 15 * t) / 15));
    }
    refresh() {
      let e = this.date(),
        t = e.y * 400 + e.m * 32 + e.d;
      if (t === this.dayKey) return;
      this.dayKey = t;
      let n = wd(e.y, e.m, e.d),
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
      let a = (((Date.UTC(e.y, e.m - 1, e.d, 3) / 864e5 - XJ) % ZJ) + ZJ) % ZJ;
      this.elong = (a / ZJ) * 2 * Math.PI;
      let o = (2 * Math.PI * (n - 80)) / 365.25;
      ((this.moonDecl = Math.asin(Math.sin(YJ) * Math.sin(o + this.elong))),
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
      return e >= 12 ? 1 - QJ(-7, 8, t) : 1 - QJ(-4, 9, t);
    }
    tone(e, t) {
      let n = e.sunEl,
        r = QJ(-4, 6, n),
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
      let s = QJ(-2, -9, n);
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
  eY = 231.6;
function tY() {
  let e = (eY * Math.PI) / 180,
    t = {
      uFujiDir: { value: new y(Math.sin(e), -Math.cos(e)) },
      uFuji: { value: 0 },
      uFujiSnow: { value: 1 },
      uFujiCol: { value: new ee() },
      uFujiLit: { value: new ee() },
    },
    n = t.uFujiCol.value,
    r = t.uFujiLit.value,
    i = new ee();
  return {
    uniforms: t,
    pars: `
uniform vec2 uFujiDir;
uniform float uFuji;
uniform float uFujiSnow;
uniform vec3 uFujiCol;
uniform vec3 uFujiLit;
`,
    main: `
  if (uFuji > 0.002 && uEnvMode < 0.5 && y > -0.01 && y < 0.06) {
    float hl = length(dir.xz);
    vec2 hd = dir.xz / max(hl, 1e-4);
    float fa = atan(hd.x * uFujiDir.y - hd.y * uFujiDir.x, dot(hd, uFujiDir));
    float ax = abs(fa);
    if (ax < 0.42) {
      float aa = max(fwidth(y), 1e-5);
      // the cone: concave flanks, a short flat summit (the crater rim), the 宝永山 shoulder on the south (left) flank
      float e = 0.05 * pow(max(1.0 - max(ax, 0.006) / 0.17, 0.0), 1.7);
      e += 0.0022 * exp(-pow((fa - 0.06) / 0.014, 2.0));
      float m = smoothstep(e + aa, e - aa, y) * step(0.0001, e);
      // 丹沢 / 箱根 foothills in front: low ragged ridges, a little darker (nearer)
      float tz = (0.003 + 0.004 * eNoise(vec2(fa * 16.0, 3.7)) + 0.002 * eNoise(vec2(fa * 57.0, 1.3))) * smoothstep(0.34, 0.16, ax);
      float mt = smoothstep(tz + aa, tz - aa, y) * (1.0 - m) * smoothstep(0.34, 0.26, ax);
      // snow cap: down to ~55 % of the height in deep winter, a streaky lower edge (gullies)
      float sl = mix(0.04, 0.024, uFujiSnow) + 0.003 * (eNoise(vec2(fa * 140.0, 0.5)) - 0.5) + 0.0015 * sin(fa * 420.0);
      float snow = smoothstep(sl - 0.0008, sl + 0.0008, y) * step(0.05, uFujiSnow) * m;
      vec3 fc = mix(uFujiCol, uFujiLit, snow);
      float k = uFuji * (1.0 - dens);
      col = mix(col, fc, m * k);
      col = mix(col, mix(col, uFujiCol, 0.6), mt * k * 0.8);
    }
  }`,
    update(e, a, o, s) {
      let c = e.sunEl,
        l =
          Math.max(0, 1 - a.overcast * 1.1) *
          (1 - a.rain) *
          (1 - a.mist) *
          (1 - 0.7 * Math.max(0, a.cloud - 0.35)),
        u = nY(o, 4.2, 5.4) * (1 - nY(o, 8.2, 10)),
        d = 0.1 + 0.9 * s ** 0.8,
        f = nY(c, -3, -11);
      ((t.uFuji.value = l * Math.max(d, u * 0.85) * (1 - 0.92 * f)),
        (t.uFujiSnow.value = Math.min(1, Math.max(0, (s - 0.18) / 0.55))));
      let p = t.uFujiDir.value,
        m = e.sunDir,
        h = Math.hypot(m.x, m.z) || 1,
        g =
          Math.max(0, (m.x * p.x + m.z * p.y) / h) *
          nY(c, -6, 2) *
          (1 - nY(c, 14, 30));
      e.skyBase(p.x, 0.012, p.y, n, 0.6);
      let _ = 0.66 - 0.36 * g;
      n.setRGB(n.r * _ * 0.86, n.g * _ * 0.95, n.b * _ * 1.1);
      let v = Math.max(0, -(m.x * p.x + m.z * p.y) / h),
        y = nY(c, -1.5, 3);
      (e.skyBase(p.x, 0.03, p.y, i, 0.4),
        r.copy(i).multiplyScalar(1.12),
        i
          .copy(e.lightColor)
          .multiplyScalar(0.1 + 0.06 * Math.min(e.lightIntensity, 3)),
        r.lerp(i.add(r), (0.4 + 0.6 * v) * y * (1 - a.overcast)),
        r.lerp(n, 0.55 * g));
    },
  };
}
function nY(e, t, n) {
  let r = Math.min(1, Math.max(0, (e - t) / (n - t)));
  return r * r * (3 - 2 * r);
}
var rY = -480;
function iY() {
  let e = {
      uLotus: { value: 0 },
      uLotusBloom: { value: 0 },
      uLotusDead: { value: 0 },
    },
    t = (e) => e.toFixed(1);
  return {
    uniforms: e,
    pars: `
uniform float uLotus;
uniform float uLotusBloom;
uniform float uLotusDead;
float tkIn(vec2 p, vec4 r) { return step(r.x, p.x) * step(p.x, r.z) * step(r.y, p.y) * step(p.y, r.w); }
`,
    main: `
  {
    float canal = max(tkIn(p, vec4(${t(ug.west)}, ${t(ug.top - 1)}, ${t(ug.mouth)}, ${t(ug.bottom + 1)})),
                      tkIn(p, vec4(${t(fg.west)}, ${t(fg.top - 1)}, ${t(fg.mouth)}, ${t(fg.bottom + 1)})));
    float moat = max(tkIn(p, vec4(${t(pg.minX - 1)}, ${t(pg.minZ - 1)}, ${t(pg.maxX + 1)}, ${t(pg.maxZ + 1)})), step(p.x, ${t(rY)}) * step(-700.0, p.y) * step(p.y, 700.0));
    float pond = tkIn(p, vec4(${t(mg.minX - 1)}, ${t(mg.minZ - 1)}, ${t(mg.maxX + 1)}, ${t(mg.maxZ + 1)}));
    vec3 lightK = uAmbient + uLightCol * max(uLightDir.y, 0.0) * 0.3;
    vec3 tint = uDeep * vec3(1.0, 1.08, 1.12);
    tint = mix(tint, vec3(0.03, 0.052, 0.038), canal);
    tint = mix(tint, vec3(0.018, 0.04, 0.028), moat);
    tint = mix(tint, vec3(0.045, 0.05, 0.03), pond);
    col += (tint * lightK - body) * (1.0 - F * 0.9);
    // the お茶の水 gorge: 8.5 m down between green walls — the banks fill most of the reflection, the sky only straight up
    float gorge = tkIn(p, vec4(${t(ug.west)}, ${t(dg.top - 1)}, ${t(dg.east)}, ${t(dg.bottom + 1)}));
    if (gorge > 0.0) {
      float open = smoothstep(0.55, 0.95, abs(R.y));
      vec3 bank = vec3(0.022, 0.036, 0.018) * (uAmbient * 2.2 + uLightCol * max(uLightDir.y, 0.0) * 0.5);
      col = mix(col, bank + tint * lightK * 0.6, (1.0 - open) * 0.85);
    }
    // the moats (and the pond) lie still: a calmer normal for the sky reflection
    float still = max(moat * 0.75, pond * 0.45);
    if (still > 0.0) {
      vec3 Ns = normalize(mix(N, vec3(0.0, 1.0, 0.0), still));
      vec3 Rs = reflect(-V, Ns);
      Rs.y = abs(Rs.y) + 0.002;
      vec3 rs2 = skyBase(Rs);
      rs2 = mix(rs2, vec3(dot(rs2, vec3(0.2126, 0.7152, 0.0722))), uCloudShade * 0.5);
      col += (rs2 - refl) * 0.85 * F * 0.9 * still;
    }
    // 不忍池's lotus field (east of the south causeway)
    float lotusZone = pond * step(-350.0, p.x);
    float cover = max(uLotus, uLotusDead * 0.8) * lotusZone;
    if (cover > 0.01 && dist < 900.0) {
      vec2 q = p / 0.85;
      vec2 ci = floor(q);
      vec2 cf = fract(q);
      float h1 = eHash12(ci), h2 = eHash12(ci + 17.3), h3 = eHash12(ci + 5.1);
      vec2 c0 = vec2(0.25 + 0.5 * h2, 0.25 + 0.5 * h3);
      float r = length(cf - c0);
      float rad = 0.28 + 0.2 * h1;
      // patchy edges of the field (open water lanes)
      float patchK = smoothstep(0.25, 0.55, eNoise(p * 0.045) * 0.7 + eNoise(p * 0.13) * 0.3 + cover * 0.45 - 0.2);
      float aaL = fwidth(r) * 1.5 + 0.02;
      float leaf = smoothstep(rad + aaL, rad - aaL, r) * step(h1 * 0.6, cover) * patchK;
      // far: the leaves merge into a green carpet
      leaf = mix(leaf, cover * patchK * 0.85, smoothstep(60.0, 260.0, dist));
      vec3 green = mix(vec3(0.05, 0.11, 0.03), vec3(0.09, 0.16, 0.05), h2) * (0.85 + 0.3 * eNoise(p * 3.1));
      vec3 dead = mix(vec3(0.07, 0.05, 0.03), vec3(0.11, 0.08, 0.045), h3);
      vec3 lc = mix(green, dead, uLotusDead * (1.0 - uLotus));
      // the leaves are matte: lit like the ground (sun + sky), a faint wet sheen
      vec3 lit = lc * (uAmbient * 1.6 + uLightCol * max(uLightDir.y, 0.0) * 0.9);
      // withered stalks: thin dark strokes across the cells in winter
      float stalk = uLotusDead * (1.0 - uLotus) * smoothstep(0.035, 0.0, abs(dot(cf - c0, normalize(vec2(h2 - 0.5, h3 - 0.5) + 0.01)))) * step(r, 0.5) * (1.0 - smoothstep(40.0, 120.0, dist));
      lit = mix(lit, vec3(0.03, 0.025, 0.02), stalk);
      col = mix(col, lit, leaf * (1.0 - 0.25 * F));
      // flowers: pink buds / blooms on some leaves (summer)
      if (uLotusBloom > 0.01) {
        float fl = step(0.82, h3) * step(h2, uLotusBloom) * smoothstep(0.09, 0.05, length(cf - c0 - vec2(0.1, 0.06))) * patchK;
        fl = mix(fl, 0.12 * uLotusBloom * patchK, smoothstep(50.0, 200.0, dist));
        col = mix(col, vec3(0.95, 0.42, 0.55) * (uAmbient * 1.4 + uLightCol * 0.8), fl);
      }
    }
  }`,
    update(t) {
      ((e.uLotus.value = t.lotus),
        (e.uLotusBloom.value = t.lotusBloom),
        (e.uLotusDead.value = t.lotusDead));
    },
  };
}
var aY = {
    faceX: -505,
    moatX0: -503,
    moatX1: -486,
    minZ: -330,
    maxZ: 300,
    westX: -980,
    terrace: 13,
  },
  oY = [
    [790, -1020],
    [772, -1140],
    [752, -1250],
    [772, -1380],
    [790, -1520],
    [800, -1800],
    [820, -2200],
  ],
  sY = [
    [880, -1020],
    [856, -1140],
    [834, -1250],
    [852, -1380],
    [872, -1520],
    [884, -1800],
    [904, -2200],
  ],
  cY = 872,
  lY = { minX: 652, maxX: 1062, minZ: 230, maxZ: 990 };
function uY(e, t) {
  for (let n = 0; n + 1 < e.length; n++) {
    let [r, i] = e[n],
      [a, o] = e[n + 1];
    if (t <= i && t >= o) return r + ((a - r) * (t - i)) / (o - i);
  }
  return NaN;
}
function dY(e) {
  return e > -1020 || e < -2200 ? null : [uY(oY, e), uY(sY, e)];
}
function fY(e, t) {
  if (e >= aY.moatX0 && e <= aY.moatX1 && t >= aY.minZ && t <= aY.maxZ)
    return !0;
  if (t <= -1020 && e > 700 && e < 960) {
    let n = dY(t);
    if (n && e >= n[0] && e <= n[1]) return !0;
  }
  return t >= cY && e >= 140 && e <= 2400
    ? e >= lY.minX && e <= lY.maxX && t <= lY.maxZ
      ? !1
      : t >= cY + Math.max(0, 260 - e) * 0.4
    : !1;
}
var pY = (e, t, n) => {
  let r = Math.min(1, Math.max(0, (n - e) / (t - e)));
  return r * r * (3 - 2 * r);
};
