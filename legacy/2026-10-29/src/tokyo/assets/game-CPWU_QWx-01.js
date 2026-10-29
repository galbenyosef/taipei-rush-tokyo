// tokyo/assets/game-CPWU_QWx 01 — integrity
// Lines 1-160 of readable/tokyo/assets/game-CPWU_QWx.pretty.js (statement-aligned).
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/world-CAmHK742.js",
      "assets/rolldown-runtime-DK3Fl9T5.js",
      "assets/ja-DY7SMsVw.js",
      "assets/three-x0mFGRTI.js",
      "assets/engine-wUBYs8Z3.js",
      "assets/cities-8-O8IWPJ.js",
      "assets/shared-DC9fKqx_.js",
      "assets/characters-CbxAZUc_.js",
      "assets/tokyo-_rNKO_Y7.js",
      "assets/icons-DYNV7fxr.js",
      "assets/dom-BCt0vy2n.js",
      "assets/prefs-BioZODFl.js",
      "assets/audio-CgR0uni4.js",
      "assets/region-tokyo-55J_WESF.js",
      "assets/actors-qKVitB-C.js",
      "assets/region-tokyo-d-akihabara-CilcTp8S.js",
      "assets/region-tokyo-d-ueno-CufCWRy0.js",
      "assets/region-tokyo-d-ameyoko-DgncIALb.js",
      "assets/region-tokyo-d-suidobashi-BBv4Djc2.js",
      "assets/region-tokyo-d-hongo-B0kKsWK8.js",
      "assets/region-tokyo-d-kanda-BOuhI6B0.js",
      "assets/region-tokyo-d-roppongi-Cv6Rgbh_.js",
      "assets/tokyo-CsxGFiHR.css",
      "assets/signs-Co9BseyY.js",
      "assets/batch-BVai0hEO.js",
      "assets/material-GV-Cqvqp.js",
      "assets/airliner-BUXWdgFt.js",
    ]),
) => i.map((i) => d[i]);
import { a as e, i as t, r as n, t as r } from "./ja-DY7SMsVw.js";
import {
  Fn as i,
  R as a,
  p as o,
  qt as s,
  rr as c,
  s as l,
  wt as u,
} from "./three-x0mFGRTI.js";
import {
  $t as d,
  Ar as f,
  At as p,
  Bt as m,
  Cr as h,
  Dr as g,
  Dt as _,
  Et as v,
  Ft as y,
  Gt as b,
  It as x,
  Jt as S,
  Kt as ee,
  Lt as te,
  Mr as ne,
  Mt as C,
  Nt as w,
  Or as re,
  Pt as T,
  Qt as E,
  Rt as D,
  Tr as ie,
  Tt as O,
  Ut as ae,
  Vt as oe,
  Wt as se,
  Xt as ce,
  Yt as k,
  _n as A,
  an as le,
  bt as ue,
  dn as de,
  dt as fe,
  en as j,
  gn as pe,
  in as M,
  it as me,
  jt as he,
  kr as ge,
  kt as _e,
  lt as ve,
  mn as ye,
  mt as be,
  nn as N,
  qt as xe,
  rn as Se,
  rr as Ce,
  tn as we,
  un as Te,
  ut as Ee,
  vr as De,
  vt as Oe,
  wt as ke,
  xt as Ae,
  yr as je,
  yt as Me,
} from "./engine-wUBYs8Z3.js";
import { r as Ne } from "./shared-DC9fKqx_.js";
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
var P = (e, t, n) => (n ? { zh: e, en: t, ja: n } : { zh: e, en: t }),
  Pe = `tokyo-rush-story-sub`,
  F;
function Fe(e) {
  let t = e.params?.get(`storysub`);
  if (t === `ja` || t === `zh` || t === `en`) return t;
  if (F === void 0) {
    F = null;
    try {
      let e = localStorage.getItem(Pe);
      (e === `ja` || e === `zh` || e === `en`) && (F = e);
    } catch {}
  }
  return (
    F ?? (e.state.lang === `en` ? `en` : e.state.lang === `ja` ? `ja` : `zh`)
  );
}
function Ie(e, t) {
  return e === `ja` && t.ja
    ? { zh: t.ja, en: t.ja, ja: t.ja }
    : e === `zh`
      ? { zh: t.zh, en: t.zh, ja: t.zh }
      : e === `en`
        ? { zh: t.en, en: t.en, ja: t.en }
        : t;
}
