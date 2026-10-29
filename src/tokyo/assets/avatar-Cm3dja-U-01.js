// tokyo/assets/avatar-Cm3dja-U 01 — push
// Lines 1-189 of readable/tokyo/assets/avatar-Cm3dja-U.pretty.js (statement-aligned).
import {
  $ as e,
  $t as t,
  A as n,
  C as r,
  Ct as i,
  Dn as a,
  Dt as o,
  E as s,
  En as c,
  Et as l,
  Fn as u,
  Ft as d,
  G as f,
  Gt as p,
  H as m,
  In as h,
  It as g,
  Jt as _,
  Kt as v,
  L as y,
  Ln as b,
  Lt as x,
  M as S,
  Mt as C,
  Nt as ee,
  On as w,
  Pt as T,
  Qn as te,
  Qt as ne,
  Rt as re,
  S as E,
  Sn as ie,
  St as ae,
  T as oe,
  Tn as se,
  Tt as D,
  Un as ce,
  Vt as le,
  Wn as ue,
  Wt as de,
  X as O,
  Xt as fe,
  Y as pe,
  Yt as me,
  Zn as k,
  Zt as he,
  _t as ge,
  an as _e,
  ar as ve,
  at as ye,
  bn as be,
  bt as xe,
  cn as Se,
  cr as Ce,
  ct as we,
  dn as Te,
  dt as Ee,
  er as De,
  et as Oe,
  f as ke,
  fn as Ae,
  ft as je,
  g as Me,
  gn as Ne,
  gt as Pe,
  h as Fe,
  hn as Ie,
  ht as Le,
  in as Re,
  ir as ze,
  jt as A,
  l as Be,
  ln as Ve,
  lt as He,
  mn as Ue,
  mt as We,
  n as Ge,
  nn as Ke,
  on as qe,
  or as j,
  ot as Je,
  p as Ye,
  pn as Xe,
  pt as Ze,
  qt as Qe,
  rn as $e,
  rt as et,
  sn as tt,
  st as nt,
  tn as M,
  un as rt,
  vt as N,
  w as it,
  wn as at,
  x as ot,
  yt as st,
  zn as ct,
  zt as lt,
} from "./three-C4coU-vx.js";
import {
  dn as ut,
  rt as dt,
  wr as ft,
  yn as pt,
  zr as mt,
} from "./engine-14d5lda2.js";
import { F as ht, L as gt, P } from "./characters-p5grEi98.js";
import { K as _t } from "./tokyo-CqLdAwml.js";
function vt(e, t) {
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
function yt(e) {
  let t = new Map(),
    n = new Map(),
    r = e.clone();
  return (
    bt(e, r, function (e, r) {
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
function bt(e, t, n) {
  n(e, t);
  for (let r = 0; r < e.children.length; r++)
    bt(e.children[r], t.children[r], n);
}
