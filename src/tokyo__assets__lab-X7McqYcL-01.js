// tokyo__assets__lab-X7McqYcL 01 — auntie
// Lines 1-51 of readable/tokyo__assets__lab-X7McqYcL.pretty.js (statement-aligned).
import { t as e } from "./ja-Ci9Qv_M-.js";
import {
  Et as t,
  J as n,
  O as r,
  Tn as i,
  Tt as a,
  U as o,
  g as s,
  jt as c,
  nt as l,
  v as u,
  wt as d,
} from "./three-CC5Mkdpe.js";
import { nn as f } from "./engine-BuS5QxN0.js";
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
} from "./characters-BvEb7Acx.js";
import { Ut as S } from "./actors-Bnj6Q1ad.js";
import { a as C, i as w, l as T, n as E, r as D } from "./avatar-CbvrNwG6.js";
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
