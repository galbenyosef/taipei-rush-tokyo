// tokyo/assets/actors-Bnj6Q1ad 01 — math
// Lines 1-274 of readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js (statement-aligned).
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/animator-C4Q6-_Wy.js",
      "assets/three-CC5Mkdpe.js",
      "assets/rolldown-runtime-DK3Fl9T5.js",
      "assets/pose-hAXyTQQR.js",
      "assets/rig-BjRdQXtM.js",
      "assets/clips-B74kfFEX.js",
      "assets/api-tBXVzspF.js",
      "assets/avatar-CbvrNwG6.js",
      "assets/engine-BuS5QxN0.js",
      "assets/ja-Ci9Qv_M-.js",
      "assets/cities-8-O8IWPJ.js",
      "assets/shared-DcD5mkpI.js",
      "assets/characters-BvEb7Acx.js",
      "assets/tokyo-BZXVhKTn.js",
      "assets/game-y-FF2uWA.js",
      "assets/icons-DYNV7fxr.js",
      "assets/dom-BCt0vy2n.js",
      "assets/prefs-BioZODFl.js",
      "assets/audio-DzcbodvB.js",
      "assets/region-tokyo-BcM3fReU.js",
      "assets/world-Bo9wkXrT.js",
      "assets/region-tokyo-d-akihabara-BJsB2qLX.js",
      "assets/region-tokyo-d-ueno-CEorO8m2.js",
      "assets/region-tokyo-d-ameyoko-MDbcAvKx.js",
      "assets/region-tokyo-d-kanda-CYJun2NB.js",
      "assets/tokyo-CchLQfwP.css",
    ]),
) => i.map((i) => d[i]);
import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { a as t, n, r, t as i } from "./ja-Ci9Qv_M-.js";
import {
  $ as a,
  $t as o,
  B as s,
  Ct as c,
  Dn as l,
  Dt as u,
  E as d,
  Et as f,
  Fn as p,
  Gn as m,
  Hn as h,
  Ht as g,
  J as _,
  K as v,
  Kt as y,
  L as b,
  Lt as x,
  Mn as S,
  Nn as C,
  O as w,
  On as T,
  Ot as E,
  Pn as D,
  Qt as O,
  R as k,
  St as A,
  Tn as j,
  Tt as M,
  U as N,
  Un as P,
  Ut as F,
  Vn as ee,
  Vt as te,
  W as ne,
  Z as re,
  _t as ie,
  at as ae,
  bn as oe,
  d as se,
  dt as ce,
  er as le,
  et as ue,
  f as de,
  g as fe,
  h as I,
  ht as pe,
  i as me,
  j as he,
  jn as ge,
  jt as _e,
  kn as ve,
  lt as ye,
  m as L,
  mt as be,
  nr as xe,
  nt as Se,
  p as Ce,
  pt as we,
  r as Te,
  t as Ee,
  tr as R,
  tt as De,
  v as Oe,
  wt as ke,
  x as Ae,
  y as je,
  zn as Me,
} from "./three-CC5Mkdpe.js";
import {
  $ as z,
  A as Ne,
  B as Pe,
  D as Fe,
  E as Ie,
  F as Le,
  J as Re,
  M as ze,
  N as Be,
  O as Ve,
  P as He,
  Q as Ue,
  R as We,
  S as Ge,
  T as Ke,
  V as qe,
  X as Je,
  Y as Ye,
  Z as B,
  ar as Xe,
  b as Ze,
  cn as Qe,
  d as $e,
  en as et,
  et as tt,
  fn as nt,
  ft as rt,
  gn as it,
  ht as at,
  i as ot,
  ir as st,
  j as ct,
  k as lt,
  m as ut,
  n as dt,
  nn as ft,
  nt as pt,
  on as mt,
  p as ht,
  pn as gt,
  pt as _t,
  q as V,
  r as vt,
  rn as yt,
  rr as bt,
  sn as xt,
  sr as St,
  t as Ct,
  w as wt,
  x as Tt,
  y as Et,
  z as Dt,
} from "./engine-BuS5QxN0.js";
import { k as Ot } from "./shared-DcD5mkpI.js";
import {
  A as kt,
  C as At,
  D as jt,
  E as Mt,
  I as Nt,
  M as Pt,
  N as Ft,
  O as It,
  P as H,
  S as Lt,
  T as Rt,
  _ as zt,
  a as Bt,
  b as Vt,
  c as Ht,
  d as Ut,
  f as Wt,
  h as Gt,
  i as Kt,
  j as qt,
  k as Jt,
  l as Yt,
  m as Xt,
  n as Zt,
  o as Qt,
  p as $t,
  r as en,
  s as tn,
  u as nn,
  v as rn,
  w as an,
  x as on,
  y as sn,
} from "./characters-BvEb7Acx.js";
import { i as cn, n as ln, r as un, t as dn } from "./world-Bo9wkXrT.js";
import {
  M as fn,
  O as pn,
  a as mn,
  i as hn,
  k as gn,
  r as _n,
  w as vn,
} from "./tokyo-BZXVhKTn.js";
var yn = [
    -1, 0, 1, 2, 3, 30, 5, 6, 31, 8, 9, 0, 11, 12, 0, 14, 15, 4, 10, 10, 10, 7,
    7, 10, 4, 4, 7, 7, 4, 4, 2, 2, 4,
  ],
  bn = () => new Float32Array(102);
function U(e, t, n, r, i) {
  let a = t * 3;
  ((e[a] = n), (e[a + 1] = r), (e[a + 2] = i));
}
function xn(e, t, n, r, i) {
  let a = t * 3;
  ((e[a] += n), (e[a + 1] += r), (e[a + 2] += i));
}
var Sn = new Uint8Array(33),
  Cn = new Uint8Array(33),
  wn = new Uint8Array(33).fill(1);
for (let e of [
  1, 2, 3, 4, 30, 31, 5, 6, 7, 8, 9, 10, 18, 19, 20, 21, 26, 27, 32,
])
  Sn[e] = 1;
for (let e of [30, 31, 5, 6, 7, 8, 9, 10, 18, 19, 20, 21, 26, 27]) Cn[e] = 1;
function Tn(e, t, n, r) {
  if (!(n <= 0)) {
    if (n >= 1 && r === wn) {
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
function En(e, t) {
  let n = e.bones;
  for (let e = 0; e < 33; e++) {
    let r = e * 3;
    n[e].rotation.set(t[r], t[r + 1], t[r + 2]);
  }
  let r = e.rest[0];
  n[0].position.set(r.x + t[99], r.y + t[100], r.z + t[101]);
}
function Dn(e, t, n, r, i, a, o, s, c, l, u = 0, d = 0) {
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
