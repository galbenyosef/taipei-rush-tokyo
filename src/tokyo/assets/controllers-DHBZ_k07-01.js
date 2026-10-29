// tokyo/assets/controllers-DHBZ_k07 01 — revision
// Lines 1-124 of readable/tokyo/assets/controllers-DHBZ_k07.pretty.js (statement-aligned).
import {
  $n as e,
  Ar as t,
  Gn as n,
  Vn as r,
  Wn as i,
  Xn as a,
  _r as o,
  ar as s,
  br as c,
  cr as l,
  dr as u,
  ir as d,
  kr as f,
  nr as p,
  or as m,
  q as ee,
  qn as h,
  tr as g,
  vr as _,
  xn as v,
  yr as y,
} from "./engine-14d5lda2.js";
import {
  _ as te,
  c as b,
  f as x,
  l as S,
  p as C,
  s as w,
  u as T,
  v as ne,
} from "./shared-BaQwRjes.js";
import { f as re } from "./game-DQ7TeBJx.js";
import { i as E, o as D } from "./session-DVEw0yxj.js";
function O(e) {
  return !!e && typeof e == `object` && !Array.isArray(e);
}
function k(e, t = 1) {
  return typeof e == `number` && Number.isSafeInteger(e) && e >= t;
}
function A(e) {
  return typeof e == `string` && Number.isFinite(Date.parse(e));
}
function j(e) {
  return e === null
    ? null
    : O(e) && O(e.data) && k(e.revision) && A(e.updated_at)
      ? e
      : void 0;
}
function M(e) {
  return O(e) &&
    ((e.status === `ok` &&
      k(e.revision) &&
      A(e.updated_at) &&
      (e.data === void 0 || O(e.data))) ||
      (e.status === `conflict` &&
        k(e.revision, 0) &&
        ((e.revision === 0 && e.data === null && e.updated_at === null) ||
          (e.revision > 0 && O(e.data) && A(e.updated_at)))) ||
      (e.status === `rate_limited` &&
        k(e.retry_after_s) &&
        Number(e.retry_after_s) <= 60))
    ? e
    : null;
}
var N = class extends Error {
    slot;
    constructor(e) {
      (super(`Cloud slot unavailable: ${e}`), (this.slot = e));
    }
  },
  P = 3e5,
  F = new Set();
function I(e) {
  return e.catch((e) => {
    if (e instanceof N) return null;
    throw e;
  });
}
var L = 3e5;
function R(e) {
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
function z(e) {
  let t = e,
    n = Date.parse(t?.lastPlayedAt ?? ``);
  return Number.isFinite(n) ? n : 0;
}
function B(e) {
  let t = e;
  if (t?.travel?.arrivalOnly !== !0) return !1;
  let n = Number(t.stats?.playTime ?? 0),
    r = Array.isArray(t.completedMissions) ? t.completedMissions.length : 0;
  return !(n >= 120) && r === 0;
}
function V(e, t, n, r) {
  if (r && B(n)) return `apply`;
  if (!t || t.userId !== e) return r ? `apply` : n === null ? `none` : `upload`;
  if (!r) return n === null ? `none` : `upload`;
  let i = (r?.revision ?? 0) !== t.revision;
  if (i && t.dirty) {
    let e = z(n),
      i = z(r.data);
    return e > i || (e === i && t.revision > r.revision) ? `upload` : `apply`;
  }
  return i && r ? `apply` : t.dirty && n !== null ? `upload` : `none`;
}
