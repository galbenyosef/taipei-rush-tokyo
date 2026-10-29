// tokyo/assets/avatar-CgSTz8jy 01 — push
// Lines 1-183 of readable/tokyo/assets/avatar-CgSTz8jy.pretty.js (statement-aligned).
import {
  $ as e,
  At as t,
  Bt as n,
  C as r,
  Cn as i,
  En as a,
  Et as o,
  Fn as s,
  Ft as c,
  Gt as l,
  Hn as u,
  I as d,
  It as f,
  J as p,
  Jn as m,
  Jt as h,
  Kt as g,
  Ln as _,
  Lt as v,
  Mt as y,
  Nn as b,
  Nt as x,
  Pn as S,
  Pt as ee,
  Q as te,
  Qt as ne,
  Rt as re,
  S as ie,
  Sn as ae,
  St as oe,
  T as se,
  Tn as ce,
  Tt as le,
  Ut as ue,
  V as C,
  Vn as de,
  W as fe,
  Wt as pe,
  Xt as me,
  Y as w,
  Yn as he,
  Yt as ge,
  Zn as _e,
  Zt as ve,
  _t as T,
  an as ye,
  ar as be,
  at as xe,
  b as Se,
  bn as Ce,
  cn as we,
  ct as Te,
  dn as Ee,
  dt as De,
  en as E,
  f as Oe,
  fn as ke,
  ft as Ae,
  g as je,
  gt as Me,
  h as Ne,
  hn as D,
  ht as Pe,
  in as Fe,
  it as Ie,
  j as Le,
  jt as Re,
  k as ze,
  l as Be,
  ln as Ve,
  mn as He,
  mt as O,
  n as Ue,
  nn as We,
  nr as Ge,
  nt as Ke,
  on as qe,
  ot as Je,
  p as Ye,
  pn as Xe,
  pt as Ze,
  qt as k,
  rn as Qe,
  rr as A,
  sn as $e,
  st as et,
  tn as j,
  tr as tt,
  un as nt,
  ut as rt,
  vn as M,
  vt as it,
  w as at,
  wn as ot,
  wt as N,
  x as P,
  xt as st,
  yt as F,
} from "./three-x0mFGRTI.js";
import { Er as ct, mn as lt, nt as ut, on as dt } from "./engine-wUBYs8Z3.js";
import { F as ft, L as pt, P as I } from "./characters-CbxAZUc_.js";
import { L as mt } from "./tokyo-_rNKO_Y7.js";
function ht(e, t) {
  if (t === 0)
    return (
      console.warn(
        `THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`,
      ),
      e
    );
  if (t === 2 || t === 1) {
    let n = e.getIndex();
    if (n === null) {
      let t = [],
        r = e.getAttribute(`position`);
      if (r !== void 0) {
        for (let e = 0; e < r.count; e++) t.push(e);
        (e.setIndex(t), (n = e.getIndex()));
      } else
        return (
          console.error(
            `THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`,
          ),
          e
        );
    }
    let r = n.count - 2,
      i = [];
    if (t === 2)
      for (let e = 1; e <= r; e++)
        (i.push(n.getX(0)), i.push(n.getX(e)), i.push(n.getX(e + 1)));
    else
      for (let e = 0; e < r; e++)
        e % 2 == 0
          ? (i.push(n.getX(e)), i.push(n.getX(e + 1)), i.push(n.getX(e + 2)))
          : (i.push(n.getX(e + 2)), i.push(n.getX(e + 1)), i.push(n.getX(e)));
    return (
      i.length / 3 !== r &&
        console.error(
          `THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`,
        ),
      e.setIndex(i),
      e.clearGroups(),
      e
    );
  }
  return (
    console.error(
      `THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,
      t,
    ),
    e
  );
}
function gt(e) {
  let t = new Map(),
    n = new Map(),
    r = e.clone();
  return (
    _t(e, r, function (e, r) {
      (t.set(r, e), n.set(e, r));
    }),
    r.traverse(function (e) {
      if (!e.isSkinnedMesh) return;
      let r = e,
        i = t.get(e),
        a = i.skeleton.bones;
      ((r.skeleton = i.skeleton.clone()),
        r.bindMatrix.copy(i.bindMatrix),
        (r.skeleton.bones = a.map(function (e) {
          return n.get(e);
        })),
        r.bind(r.skeleton, r.bindMatrix));
    }),
    r
  );
}
function _t(e, t, n) {
  n(e, t);
  for (let r = 0; r < e.children.length; r++)
    _t(e.children[r], t.children[r], n);
}
