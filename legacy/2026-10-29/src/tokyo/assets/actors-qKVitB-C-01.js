// tokyo/assets/actors-qKVitB-C 01 — math
// Lines 1-289 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/animator-B5fCfINc.js",
      "assets/three-x0mFGRTI.js",
      "assets/rolldown-runtime-DK3Fl9T5.js",
      "assets/engine-wUBYs8Z3.js",
      "assets/ja-DY7SMsVw.js",
      "assets/cities-8-O8IWPJ.js",
      "assets/shared-DC9fKqx_.js",
      "assets/pose-hAXyTQQR.js",
      "assets/rig-BjRdQXtM.js",
      "assets/clips-GNiXKOuW.js",
      "assets/api-C4Rqh13K.js",
      "assets/avatar-CgSTz8jy.js",
      "assets/characters-CbxAZUc_.js",
      "assets/tokyo-_rNKO_Y7.js",
      "assets/game-CPWU_QWx.js",
      "assets/icons-DYNV7fxr.js",
      "assets/dom-BCt0vy2n.js",
      "assets/prefs-BioZODFl.js",
      "assets/audio-CgR0uni4.js",
      "assets/region-tokyo-55J_WESF.js",
      "assets/world-CAmHK742.js",
      "assets/region-tokyo-d-akihabara-CilcTp8S.js",
      "assets/region-tokyo-d-ueno-CufCWRy0.js",
      "assets/region-tokyo-d-ameyoko-DgncIALb.js",
      "assets/region-tokyo-d-suidobashi-BBv4Djc2.js",
      "assets/region-tokyo-d-hongo-B0kKsWK8.js",
      "assets/region-tokyo-d-kanda-BOuhI6B0.js",
      "assets/region-tokyo-d-roppongi-Cv6Rgbh_.js",
      "assets/tokyo-CsxGFiHR.css",
    ]),
) => i.map((i) => d[i]);
import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { a as t, n, r, t as i } from "./ja-DY7SMsVw.js";
import {
  $ as a,
  $t as o,
  An as s,
  B as c,
  Ct as l,
  Dt as u,
  E as d,
  En as f,
  Et as p,
  Fn as m,
  Gn as h,
  Ht as g,
  In as _,
  J as v,
  K as y,
  L as b,
  Ln as x,
  Lt as S,
  Nn as C,
  O as w,
  On as T,
  Ot as E,
  Pn as D,
  R as O,
  St as k,
  Tt as A,
  U as j,
  Un as M,
  Ut as ee,
  Vn as te,
  W as ne,
  Wn as N,
  Wt as re,
  Z as ie,
  _t as ae,
  at as oe,
  bn as se,
  d as ce,
  dt as le,
  en as ue,
  et as de,
  f as fe,
  g as pe,
  h as P,
  ht as me,
  i as he,
  ir as ge,
  j as _e,
  jn as ve,
  jt as ye,
  kn as be,
  lt as xe,
  m as F,
  mt as Se,
  nr as Ce,
  nt as we,
  p as Te,
  pt as Ee,
  qn as De,
  qt as I,
  r as Oe,
  rr as L,
  t as ke,
  tt as Ae,
  v as je,
  wt as R,
  x as Me,
  xn as Ne,
  y as Pe,
  zt as Fe,
} from "./three-x0mFGRTI.js";
import {
  $ as z,
  $n as Ie,
  A as Le,
  An as Re,
  B as ze,
  C as Be,
  D as Ve,
  Dn as He,
  E as Ue,
  J as We,
  L as Ge,
  M as Ke,
  N as qe,
  O as Je,
  P as Ye,
  Q as Xe,
  R as Ze,
  Rt as Qe,
  Sr as $e,
  T as et,
  Tn as tt,
  V as nt,
  X as rt,
  Y as it,
  Z as B,
  b as at,
  br as ot,
  cn as st,
  et as ct,
  f as lt,
  fn as ut,
  fr as dt,
  ft,
  ht as pt,
  j as mt,
  jn as ht,
  jr as gt,
  k as _t,
  kn as vt,
  ln as yt,
  mn as bt,
  n as xt,
  nt as St,
  on as Ct,
  p as wt,
  pn as Tt,
  pt as Et,
  q as V,
  r as Dt,
  t as Ot,
  u as kt,
  v as At,
  vn as jt,
  w as Mt,
  wn as Nt,
  wr as Pt,
  x as Ft,
  xn as It,
  xr as Lt,
  y as Rt,
  z as zt,
} from "./engine-wUBYs8Z3.js";
import { k as Bt } from "./shared-DC9fKqx_.js";
import {
  A as Vt,
  C as Ht,
  D as Ut,
  E as Wt,
  I as Gt,
  M as Kt,
  N as qt,
  O as Jt,
  P as H,
  S as Yt,
  T as Xt,
  _ as Zt,
  a as Qt,
  b as $t,
  c as en,
  d as tn,
  f as nn,
  h as rn,
  i as an,
  j as on,
  k as sn,
  l as cn,
  m as ln,
  n as un,
  o as dn,
  p as fn,
  r as pn,
  s as mn,
  u as hn,
  v as gn,
  w as _n,
  x as vn,
  y as yn,
} from "./characters-CbxAZUc_.js";
import { i as bn, n as xn, r as Sn, t as Cn } from "./world-CAmHK742.js";
import {
  C as wn,
  M as Tn,
  O as En,
  i as Dn,
  k as On,
  r as kn,
  w as An,
} from "./tokyo-_rNKO_Y7.js";
var jn = [
    -1, 0, 1, 2, 3, 30, 5, 6, 31, 8, 9, 0, 11, 12, 0, 14, 15, 4, 10, 10, 10, 7,
    7, 10, 4, 4, 7, 7, 4, 4, 2, 2, 4,
  ],
  Mn = () => new Float32Array(102);
function U(e, t, n, r, i) {
  let a = t * 3;
  ((e[a] = n), (e[a + 1] = r), (e[a + 2] = i));
}
function Nn(e, t, n, r, i) {
  let a = t * 3;
  ((e[a] += n), (e[a + 1] += r), (e[a + 2] += i));
}
var Pn = new Uint8Array(33),
  Fn = new Uint8Array(33),
  In = new Uint8Array(33).fill(1);
for (let e of [
  1, 2, 3, 4, 30, 31, 5, 6, 7, 8, 9, 10, 18, 19, 20, 21, 26, 27, 32,
])
  Pn[e] = 1;
for (let e of [30, 31, 5, 6, 7, 8, 9, 10, 18, 19, 20, 21, 26, 27]) Fn[e] = 1;
function Ln(e, t, n, r) {
  if (!(n <= 0)) {
    if (n >= 1 && r === In) {
      e.set(t);
      return;
    }
    for (let i = 0; i < 33; i++) {
      if (!r[i]) continue;
      let a = i * 3;
      ((e[a] += (t[a] - e[a]) * n),
        (e[a + 1] += (t[a + 1] - e[a + 1]) * n),
        (e[a + 2] += (t[a + 2] - e[a + 2]) * n));
    }
    r[0] &&
      ((e[99] += (t[99] - e[99]) * n),
      (e[100] += (t[100] - e[100]) * n),
      (e[101] += (t[101] - e[101]) * n));
  }
}
function Rn(e, t) {
  let n = e.bones;
  for (let e = 0; e < 33; e++) {
    let r = e * 3;
    n[e].rotation.set(t[r], t[r + 1], t[r + 2]);
  }
  let r = e.rest[0];
  n[0].position.set(r.x + t[99], r.y + t[100], r.z + t[101]);
}
function zn(e, t, n, r, i, a, o, s, c, l, u = 0, d = 0) {
  let f = Math.hypot(s, c),
    p = (i + a) * 0.999;
  (f > p && (f = p), f < 0.05 && (f = 0.05));
  let m = Math.atan2(-c, -s),
    h = (i * i + a * a - f * f) / (2 * i * a),
    g = Math.PI - Math.acos(h < -1 ? -1 : h > 1 ? 1 : h),
    _ = (i * i + f * f - a * a) / (2 * i * f),
    v = m + Math.acos(_ < -1 ? -1 : _ > 1 ? 1 : _),
    y = Math.atan2(o, Math.max(0.2, -s)),
    b = t * 3;
  ((e[b] = v - u),
    (e[b + 1] = 0),
    (e[b + 2] = y),
    (e[n * 3] = -g - d + u),
    (e[n * 3 + 1] = 0),
    (e[n * 3 + 2] = 0),
    (e[r * 3] = -(v - g) + l + d),
    (e[r * 3 + 1] = 0),
    (e[r * 3 + 2] = -y));
}
