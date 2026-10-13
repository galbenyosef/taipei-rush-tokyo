// tokyo__assets__controllers-mah1C7rD 01 — revision
// Lines 1-124 of readable/tokyo__assets__controllers-mah1C7rD.pretty.js (statement-aligned).
import {
  $n as e,
  Bn as t,
  Cn as n,
  Hn as r,
  In as i,
  Jn as a,
  K as o,
  Ln as s,
  Nn as c,
  On as l,
  Pn as u,
  Rn as d,
  Sn as f,
  Tn as p,
  Xn as m,
  Yn as ee,
  Zn as h,
  er as g,
  jn as te,
  un as _,
  yn as v,
} from "./engine-BuS5QxN0.js";
import {
  _ as y,
  c as b,
  f as x,
  l as ne,
  p as S,
  s as C,
  u as w,
  v as T,
} from "./shared-DcD5mkpI.js";
import { i as E } from "./game-y-FF2uWA.js";
import { i as D, o as O } from "./session-CLv8PYlR.js";
function k(e) {
  return !!e && typeof e == `object` && !Array.isArray(e);
}
function A(e, t = 1) {
  return typeof e == `number` && Number.isSafeInteger(e) && e >= t;
}
function j(e) {
  return typeof e == `string` && Number.isFinite(Date.parse(e));
}
function M(e) {
  return e === null
    ? null
    : k(e) && k(e.data) && A(e.revision) && j(e.updated_at)
      ? e
      : void 0;
}
function N(e) {
  return k(e) &&
    ((e.status === `ok` &&
      A(e.revision) &&
      j(e.updated_at) &&
      (e.data === void 0 || k(e.data))) ||
      (e.status === `conflict` &&
        A(e.revision, 0) &&
        ((e.revision === 0 && e.data === null && e.updated_at === null) ||
          (e.revision > 0 && k(e.data) && j(e.updated_at)))) ||
      (e.status === `rate_limited` &&
        A(e.retry_after_s) &&
        Number(e.retry_after_s) <= 60))
    ? e
    : null;
}
var P = class extends Error {
    slot;
    constructor(e) {
      (super(`Cloud slot unavailable: ${e}`), (this.slot = e));
    }
  },
  F = 3e5,
  I = new Set();
function L(e) {
  return e.catch((e) => {
    if (e instanceof P) return null;
    throw e;
  });
}
var R = 12e4;
function z(e) {
  let t = e;
  return (
    e &&
      typeof e == `object` &&
      !Array.isArray(e) &&
      ((t = { ...e }), delete t.lastPlayedAt),
    JSON.stringify(t, (e, t) =>
      t && typeof t == `object` && !Array.isArray(t)
        ? Object.fromEntries(
            Object.keys(t)
              .sort()
              .map((e) => [e, t[e]]),
          )
        : t,
    )
  );
}
function B(e) {
  let t = e,
    n = Date.parse(t?.lastPlayedAt ?? ``);
  return Number.isFinite(n) ? n : 0;
}
function V(e) {
  let t = e;
  if (t?.travel?.arrivalOnly !== !0) return !1;
  let n = Number(t.stats?.playTime ?? 0),
    r = Array.isArray(t.completedMissions) ? t.completedMissions.length : 0;
  return !(n >= 120) && r === 0;
}
function H(e, t, n, r) {
  if (r && V(n)) return `apply`;
  if (!t || t.userId !== e) return r ? `apply` : n === null ? `none` : `upload`;
  if (!r) return n === null ? `none` : `upload`;
  let i = (r?.revision ?? 0) !== t.revision;
  if (i && t.dirty) {
    let e = B(n),
      i = B(r.data);
    return e > i || (e === i && t.revision > r.revision) ? `upload` : `apply`;
  }
  return i && r ? `apply` : t.dirty && n !== null ? `upload` : `none`;
}
