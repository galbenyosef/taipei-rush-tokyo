// tokyo__assets__avatar-CbvrNwG6 01 — push
// Lines 1-183 of readable/tokyo__assets__avatar-CbvrNwG6.pretty.js (statement-aligned).
import {
  $ as e,
  $n as t,
  $t as n,
  At as r,
  Bn as i,
  C as a,
  Cn as o,
  Et as s,
  Fn as c,
  Ft as l,
  Gt as u,
  Ht as d,
  I as f,
  It as p,
  J as m,
  Jt as h,
  Kn as g,
  Kt as _,
  Lt as v,
  Mn as y,
  Mt as b,
  Nn as x,
  Nt as S,
  Pt as C,
  Q as ee,
  Rt as te,
  S as ne,
  Sn as re,
  St as ie,
  T as ae,
  Tn as w,
  Tt as oe,
  Ut as se,
  V as T,
  W as ce,
  Wt as le,
  Xt as ue,
  Y as E,
  Yn as de,
  Yt as fe,
  Zt as pe,
  _n as D,
  _t as O,
  an as me,
  at as he,
  b as ge,
  cn as _e,
  ct as ve,
  dn as ye,
  dt as be,
  en as xe,
  er as Se,
  f as Ce,
  fn as we,
  ft as Te,
  g as Ee,
  gt as De,
  h as Oe,
  ht as ke,
  in as Ae,
  it as je,
  j as Me,
  jn as Ne,
  jt as Pe,
  k as Fe,
  l as Ie,
  ln as Le,
  mn as k,
  mt as A,
  n as Re,
  nn as ze,
  nt as Be,
  on as Ve,
  ot as He,
  p as Ue,
  pn as We,
  pt as Ge,
  qn as Ke,
  qt as qe,
  rn as Je,
  rr as Ye,
  sn as Xe,
  st as Ze,
  tn as Qe,
  tr as j,
  un as $e,
  ut as et,
  vt as tt,
  w as nt,
  wn as rt,
  wt as M,
  x as N,
  xn as it,
  xt as at,
  yn as ot,
  yt as P,
  zn as st,
  zt as ct,
} from "./three-CC5Mkdpe.js";
import { cn as lt, en as ut, lr as dt, nt as ft } from "./engine-BuS5QxN0.js";
import { F as pt, L as mt, P as F } from "./characters-BvEb7Acx.js";
import { F as ht } from "./tokyo-BZXVhKTn.js";
function gt(e, t) {
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
function _t(e) {
  let t = new Map(),
    n = new Map(),
    r = e.clone();
  return (
    vt(e, r, function (e, r) {
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
function vt(e, t, n) {
  n(e, t);
  for (let r = 0; r < e.children.length; r++)
    vt(e.children[r], t.children[r], n);
}
