// tokyo/assets/game-y-FF2uWA 01 — integrity
// Lines 1-153 of readable/tokyo/assets/game-y-FF2uWA.pretty.js (statement-aligned).
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/world-Bo9wkXrT.js",
      "assets/rolldown-runtime-DK3Fl9T5.js",
      "assets/ja-Ci9Qv_M-.js",
      "assets/three-CC5Mkdpe.js",
      "assets/engine-BuS5QxN0.js",
      "assets/cities-8-O8IWPJ.js",
      "assets/shared-DcD5mkpI.js",
      "assets/characters-BvEb7Acx.js",
      "assets/tokyo-BZXVhKTn.js",
      "assets/icons-DYNV7fxr.js",
      "assets/dom-BCt0vy2n.js",
      "assets/prefs-BioZODFl.js",
      "assets/audio-DzcbodvB.js",
      "assets/region-tokyo-BcM3fReU.js",
      "assets/actors-Bnj6Q1ad.js",
      "assets/region-tokyo-d-akihabara-BJsB2qLX.js",
      "assets/region-tokyo-d-ueno-CEorO8m2.js",
      "assets/region-tokyo-d-ameyoko-MDbcAvKx.js",
      "assets/region-tokyo-d-kanda-CYJun2NB.js",
      "assets/tokyo-CchLQfwP.css",
      "assets/signs-CcdyXn0R.js",
      "assets/batch-CN-kL9Gb.js",
      "assets/material-3lv29trB.js",
      "assets/airliner-Bx-acqWB.js",
    ]),
) => i.map((i) => d[i]);
import { a as e, i as t, r as n, t as r } from "./ja-Ci9Qv_M-.js";
import {
  Kt as i,
  Nn as a,
  R as o,
  p as s,
  s as c,
  tr as l,
  wt as u,
} from "./three-CC5Mkdpe.js";
import {
  $t as d,
  At as f,
  Bt as p,
  Ct as m,
  Dt as h,
  Ft as g,
  Gt as _,
  Ht as v,
  It as y,
  Jt as b,
  Kt as ee,
  Mt as x,
  Nt as S,
  Ot as C,
  Pt as w,
  Qt as T,
  Rt as te,
  St as ne,
  Tt as re,
  Ut as ie,
  Vt as E,
  Wt as ae,
  Xt as D,
  Yt as oe,
  Zt as se,
  an as ce,
  bt as le,
  cn as ue,
  cr as de,
  dn as O,
  dr as fe,
  dt as pe,
  fr as me,
  hr as he,
  in as ge,
  it as _e,
  jt as k,
  kt as ve,
  lt as ye,
  mt as be,
  nr as xe,
  or as A,
  pr as Se,
  qt as Ce,
  tr as we,
  un as Te,
  ur as Ee,
  ut as De,
  vt as Oe,
  wt as ke,
  xt as Ae,
  yt as je,
} from "./engine-BuS5QxN0.js";
import { r as Me } from "./shared-DcD5mkpI.js";
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes)
          e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      (t.credentials =
        e.crossOrigin === `use-credentials`
          ? `include`
          : e.crossOrigin === `anonymous`
            ? `omit`
            : `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var j = (e, t, n) => (n ? { zh: e, en: t, ja: n } : { zh: e, en: t }),
  Ne = `tokyo-rush-story-sub`,
  M;
function Pe(e) {
  let t = e.params?.get(`storysub`);
  if (t === `ja` || t === `zh` || t === `en`) return t;
  if (M === void 0) {
    M = null;
    try {
      let e = localStorage.getItem(Ne);
      (e === `ja` || e === `zh` || e === `en`) && (M = e);
    } catch {}
  }
  return (
    M ?? (e.state.lang === `en` ? `en` : e.state.lang === `ja` ? `ja` : `zh`)
  );
}
function Fe(e, t) {
  return e === `ja` && t.ja
    ? { zh: t.ja, en: t.ja, ja: t.ja }
    : e === `zh`
      ? { zh: t.zh, en: t.zh, ja: t.zh }
      : e === `en`
        ? { zh: t.en, en: t.en, ja: t.en }
        : t;
}
