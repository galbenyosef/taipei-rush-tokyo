// tokyo/assets/lab-DxV2kalD 01 — auntie
// Lines 1-51 of readable/tokyo/assets/lab-DxV2kalD.pretty.js (statement-aligned).
import { t as e } from "./ja-anaGONx4.js";
import {
  Dt as t,
  Et as n,
  Mt as r,
  On as i,
  Tt as a,
  W as o,
  Y as s,
  g as c,
  k as l,
  rt as u,
  v as d,
} from "./three-C4coU-vx.js";
import { pn as f } from "./engine-14d5lda2.js";
import {
  P as p,
  a as m,
  d as h,
  g,
  l as _,
  m as v,
  r as y,
  s as b,
  u as x,
} from "./characters-p5grEi98.js";
import { in as S } from "./actors-bknSEpf2.js";
import { a as C, i as w, l as T, n as E, r as D } from "./avatar-Cm3dja-U.js";
var O = { x: -757, z: -226 },
  k = -1,
  A = {
    office: `office-m`,
    "office-f": `office-f`,
    student: `student-m`,
    "student-f": `student-f`,
    auntie: `auntie`,
    uncle: `uncle`,
    elder: `agong`,
    "elder-f": `ama`,
    vendor: `vendor`,
    police: `police`,
  };
function j(e, t) {
  if (e === `jie`) return m;
  if (e === `wen`) return b;
  let n = Object.keys(A).find((t) => e.startsWith(t));
  return (
    _(n ? A[n] : t ? `office-f` : `office-m`) ??
    x(e.length * 7, t ? `office-f` : `office-m`)
  );
}
