// tokyo/assets/world-CVm1JHks 01 — rough
// Lines 1-227 of readable/tokyo/assets/world-CVm1JHks.pretty.js (statement-aligned).
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/postfx-nRzeP0Gz.js",
      "assets/rolldown-runtime-DK3Fl9T5.js",
      "assets/three-C4coU-vx.js",
    ]),
) => i.map((i) => d[i]);
import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { t } from "./preload-helper-DZce6yc-.js";
import { t as n } from "./ja-anaGONx4.js";
import {
  An as r,
  Ct as i,
  Dt as a,
  Et as o,
  G as s,
  Ht as c,
  I as l,
  Jt as u,
  K as d,
  L as f,
  Ln as p,
  M as m,
  Mt as h,
  N as g,
  Nn as _,
  O as v,
  On as y,
  P as b,
  Pt as x,
  Q as S,
  Qn as C,
  R as w,
  Rn as T,
  S as E,
  Sn as D,
  Tt as O,
  U as k,
  Un as A,
  Vt as j,
  W as M,
  Wt as ee,
  X as te,
  Xn as N,
  Y as ne,
  Yn as P,
  Z as F,
  Zn as I,
  a as re,
  ar as L,
  bn as ie,
  d as R,
  et as ae,
  g as z,
  gn as oe,
  gt as se,
  h as B,
  ht as ce,
  i as V,
  k as le,
  kn as ue,
  kt as H,
  lr as de,
  n as fe,
  or as U,
  p as pe,
  q as me,
  rt as he,
  sr as ge,
  t as _e,
  tn as ve,
  tr as ye,
  tt as be,
  un as xe,
  v as W,
  vt as Se,
  wt as Ce,
  x as we,
  z as Te,
  zn as Ee,
  zt as De,
} from "./three-C4coU-vx.js";
import {
  $ as G,
  B as Oe,
  F as ke,
  Gr as Ae,
  I as je,
  J as Me,
  L as Ne,
  P as Pe,
  R as Fe,
  S as Ie,
  Ut as Le,
  V as Re,
  _n as ze,
  _t as Be,
  bn as Ve,
  bt as He,
  dn as Ue,
  hn as We,
  l as Ge,
  mn as Ke,
  nt as qe,
  pn as K,
  rt as Je,
  yn as q,
  z as Ye,
} from "./engine-14d5lda2.js";
import { P as J, m as Xe } from "./characters-p5grEi98.js";
import "./tokyo-CqLdAwml.js";
var Ze = 3,
  Qe = 3,
  $e = {
    uStreetLm: { value: null },
    uLmXf: { value: new ge(0, 0, 0, 0) },
    uLmGain: { value: 1.3 },
    uLmNight: q.uNight,
    uLmWet: q.uWet,
  },
  et = `varying vec3 vLmW;
varying float vLmNy;`,
  tt = `
  {
    vec4 lmw = vec4(transformed, 1.0);
    vec3 lmn = objectNormal;
    #ifdef USE_BATCHING
    lmw = batchingMatrix * lmw;
    lmn = mat3(batchingMatrix) * lmn;
    #endif
    #ifdef USE_INSTANCING
    lmw = instanceMatrix * lmw;
    lmn = mat3(instanceMatrix) * lmn;
    #endif
    lmw = modelMatrix * lmw;
    vLmW = lmw.xyz;
    vLmNy = normalize(mat3(modelMatrix) * lmn).y;
  }`,
  nt = `
  uniform sampler2D uStreetLm;
  uniform vec4 uLmXf;
  uniform float uLmGain;
  uniform float uLmNight;
  uniform float uLmWet;
  varying vec3 vLmW;
  varying float vLmNy;
  vec4 lmSample() {
    vec2 luv = (vLmW.xz - uLmXf.xy) * uLmXf.zw;
    if (luv.x < 0.0 || luv.y < 0.0 || luv.x > 1.0 || luv.y > 1.0) return vec4(0.0);
    return texture2D(uStreetLm, luv) * ${Ze.toFixed(1)};
  }
  float lmNightK() { return smoothstep(0.25, 0.75, uLmNight); }
  // overlapping pools (junction floods, rows of shop fronts) compress instead of blowing out to white
  vec3 lmCompress(vec3 L) { return L * uLmGain / (1.0 + 0.35 * L); }
  // lamp-lit radiance of an albedo, with a soft knee: dark asphalt reads lit, white paint / pale granite under a
  // junction flood stays below the daylight white point
  vec3 lmLit(vec3 alb, vec3 L) { vec3 c = alb * L; return c / (1.0 + 2.6 * c); }
  vec3 lmStreet() {
    float k = lmNightK();
    if (k <= 0.0) return vec3(0.0);
    vec4 s = lmSample();
    vec3 L = vLmW.y < ${Qe.toFixed(1)} ? s.rgb : s.aaa * vec3(1.0, 0.72, 0.42);
    return lmCompress(L) * smoothstep(-0.15, 0.55, vLmNy) * k;
  }
  vec3 lmProp() {
    float k = lmNightK();
    if (k <= 0.0) return vec3(0.0);
    vec3 L = lmSample().rgb;
    float hk = 1.0 - smoothstep(8.5, 13.0, vLmW.y);
    return lmCompress(L) * hk * (0.3 + 0.7 * max(vLmNy, 0.0)) * k;
  }`;
function rt(e) {
  Object.assign(e, $e);
}
var it = e({
    F: () => at,
    MeshBuilder: () => ut,
    glow: () => st,
    ngon: () => ht,
    paint: () => Y,
    rectPoly: () => mt,
    scalePoly: () => gt,
    withP: () => ot,
  }),
  at = {
    TOWER: 1,
    BLINK: 2,
    SCROLL: 4,
    TEXCOL: 8,
    ALWAYS: 16,
    WINDOWS: 32,
    SWAY: 64,
    WATER: 128,
  };
function Y(e, t = 0, n = {}) {
  let r = new E(e);
  return {
    r: r.r,
    g: r.g,
    b: r.b,
    ao: 1,
    layer: t,
    su: 4,
    sv: 4,
    rough: 0.85,
    metal: 0,
    flags: 0,
    flood: 0,
    ex: 0,
    er: 0,
    eg: 0,
    eb: 0,
    ei: 0,
    cw: 1,
    ...n,
  };
}
function ot(e, t) {
  return { ...e, ...t };
}
function st(e, t, n = 0, r = {}) {
  let i = new E(e);
  return Y(e, n, { er: i.r, eg: i.g, eb: i.b, ei: t, rough: 0.6, ...r });
}
