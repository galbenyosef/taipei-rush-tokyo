// tokyo/assets/engine-wUBYs8Z3 03 — mobile
// Lines 606-852 of readable/tokyo/assets/engine-wUBYs8Z3.pretty.js (statement-aligned).
function qe() {
  if (typeof navigator > `u`) return { mobile: !1, tablet: !1 };
  let e = navigator.userAgent || ``,
    t =
      ((navigator.maxTouchPoints || 0) > 1 && /Macintosh/.test(e)) ||
      /iPad|Tablet/i.test(e) ||
      (/Android/i.test(e) && !/Mobile/i.test(e));
  return { mobile: t || /Android|iPhone|iPod|Mobile/i.test(e), tablet: t };
}
var Je = {
  low: {
    level: `low`,
    maxPixelRatio: 1,
    minPixelRatio: 0.7,
    antialias: !1,
    shadows: !1,
    shadowMapSize: 1024,
    drawDistance: 420,
    propDensity: 0.45,
    maxTrafficVehicles: 26,
    maxPeds: 30,
    bloom: !1,
    postFx: !1,
    rainParticles: 1500,
    dynamicLights: 0,
    maxTextureSize: 2048,
    textureScale: 0.5,
    materials: `lambert`,
  },
  medium: {
    level: `medium`,
    maxPixelRatio: 1.25,
    minPixelRatio: 0.75,
    antialias: !1,
    shadows: !0,
    shadowMapSize: 1024,
    drawDistance: 650,
    propDensity: 0.7,
    maxTrafficVehicles: 40,
    maxPeds: 60,
    bloom: !0,
    postFx: !1,
    rainParticles: 4e3,
    dynamicLights: 1,
    maxTextureSize: 4096,
    textureScale: 0.75,
    materials: `pbr`,
  },
  high: {
    level: `high`,
    maxPixelRatio: 1.5,
    minPixelRatio: 0.8,
    antialias: !0,
    shadows: !0,
    shadowMapSize: 2048,
    drawDistance: 900,
    propDensity: 1,
    maxTrafficVehicles: 60,
    maxPeds: 90,
    bloom: !0,
    postFx: !0,
    rainParticles: 8e3,
    dynamicLights: 2,
    maxTextureSize: 8192,
    textureScale: 0.75,
    materials: `pbr`,
  },
  ultra: {
    level: `ultra`,
    maxPixelRatio: 2,
    minPixelRatio: 0.9,
    antialias: !0,
    shadows: !0,
    shadowMapSize: 4096,
    drawDistance: 1300,
    propDensity: 1,
    maxTrafficVehicles: 95,
    maxPeds: 120,
    bloom: !0,
    postFx: !0,
    rainParticles: 14e3,
    dynamicLights: 4,
    maxTextureSize: 8192,
    textureScale: 1,
    materials: `pbr`,
  },
};
function Ye(e, t) {
  let n = Math.min(t.maxTextureSize, e * (t.textureScale || 1));
  return Math.max(256, Math.round(n / 64) * 64);
}
var Xe = {
    low: {
      maxPixelRatio: 1.5,
      minPixelRatio: 0.9,
      antialias: !1,
      rainParticles: 1e3,
      maxTextureSize: 1024,
      maxSignTextureSize: 1536,
      textureScale: 0.375,
      materials: `lambert`,
    },
    medium: {
      maxPixelRatio: 2,
      minPixelRatio: 1,
      antialias: !1,
      shadowMapSize: 1024,
      drawDistance: 560,
      maxPeds: 45,
      maxTrafficVehicles: 34,
      maxTextureSize: 2048,
      textureScale: 0.5,
    },
    high: {
      maxPixelRatio: 2,
      minPixelRatio: 1,
      shadowMapSize: 1024,
      drawDistance: 700,
      maxTextureSize: 2048,
      textureScale: 0.75,
    },
    ultra: { maxPixelRatio: 2.5, minPixelRatio: 1.1, maxTextureSize: 4096 },
  },
  Ze = null;
function Qe() {
  if (Ze) return Ze;
  let { mobile: e, tablet: t } = qe(),
    n = ``;
  try {
    let e = document.createElement(`canvas`),
      t = e.getContext(`webgl2`) || e.getContext(`webgl`);
    if (t) {
      let e = t.getExtension(`WEBGL_debug_renderer_info`);
      ((n =
        String(
          e
            ? t.getParameter(e.UNMASKED_RENDERER_WEBGL)
            : t.getParameter(t.RENDERER),
        ) || ``),
        t.getExtension(`WEBGL_lose_context`)?.loseContext());
    }
  } catch {}
  return (
    (Ze = {
      mobile: e,
      tablet: t,
      gpu: n,
      cores: navigator.hardwareConcurrency || 4,
      memory: navigator.deviceMemory,
    }),
    Ze
  );
}
function $e(e = Qe()) {
  return !e.mobile || e.memory === void 0 || !(e.memory > 0)
    ? 0
    : e.memory <= 1
      ? 2
      : +(e.memory <= 2);
}
function et(e, t = Qe()) {
  let n = Je[e] ?? Je.medium;
  if (!t.mobile) return { ...n, mobile: !1 };
  let r = { ...n, ...Xe[n.level], mobile: !0 };
  return (
    t.tablet &&
      (n.level === `low` || n.level === `medium`) &&
      (r.maxPixelRatio = Math.min(r.maxPixelRatio, 1.5)),
    r
  );
}
function tt(e = Qe()) {
  let t = e.gpu.toLowerCase();
  if (/swiftshader|llvmpipe|softpipe|microsoft basic render/.test(t))
    return `low`;
  if (e.mobile) {
    if (e.tablet) return `medium`;
    let n = /adreno[^0-9]*(\d{3})/.exec(t);
    return (n && Number(n[1]) >= 730) ||
      /immortalis|mali-g7[1-9]0|mali-g9\d\d/.test(t)
      ? `medium`
      : `low`;
  }
  let n = e.cores <= 4 || (e.memory !== void 0 && e.memory <= 4);
  return /intel|uhd|iris|hd graphics|mali|adreno|powervr|videocore|vivante/.test(
    t,
  ) || /radeon\(tm\) graphics|radeon graphics|vega \d+ graphics/.test(t)
    ? `medium`
    : /apple m\d|apple gpu/.test(t)
      ? n || e.cores < 8
        ? `medium`
        : `high`
      : (/nvidia|geforce|rtx|gtx|quadro|radeon|amd|arc a\d/.test(t),
        n ? `medium` : `high`);
}
var D = (function (e) {
    return (
      (e[(e.AABB = 0)] = `AABB`),
      (e[(e.OBB = 1)] = `OBB`),
      (e[(e.Circle = 2)] = `Circle`),
      e
    );
  })({}),
  nt = 16,
  rt = 1792,
  it = Math.ceil((rt * 2) / nt);
function O(e) {
  let t = Math.floor((e + rt) / nt);
  return t < 0 ? 0 : t >= it ? 223 : t;
}
var at = class {
    bits;
    pages;
    pn;
    m;
    constructor(e, t) {
      ((this.bits = t),
        (this.pn = Math.ceil(e / (1 << t))),
        (this.m = (1 << t) - 1),
        (this.pages = Array(this.pn * this.pn)));
    }
    get(e, t) {
      let n = this.bits,
        r = this.pages[(t >> n) * this.pn + (e >> n)];
      return r === void 0 ? void 0 : r[((t & this.m) << n) | (e & this.m)];
    }
    getOr(e, t, n) {
      let r = this.bits,
        i = (t >> r) * this.pn + (e >> r),
        a = this.pages[i];
      a === void 0 && (this.pages[i] = a = Array(1 << (2 * r)));
      let o = ((t & this.m) << r) | (e & this.m),
        s = a[o];
      return (s === void 0 && (a[o] = s = n()), s);
    }
    get allocated() {
      let e = 0;
      for (let t = 0; t < this.pages.length; t++) this.pages[t] && e++;
      return e;
    }
  },
  ot = 4,
  st = () => [],
  ct = () => [];
function lt() {
  return { x: 0, z: 0, nx: 0, nz: 0, depth: 0, hit: !1, tag: `` };
}
