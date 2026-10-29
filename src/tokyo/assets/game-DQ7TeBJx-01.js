// tokyo/assets/game-DQ7TeBJx 01 — integrity
// Lines 1-164 of readable/tokyo/assets/game-DQ7TeBJx.pretty.js (statement-aligned).
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/world-CVm1JHks.js",
      "assets/rolldown-runtime-DK3Fl9T5.js",
      "assets/preload-helper-DZce6yc-.js",
      "assets/ja-anaGONx4.js",
      "assets/three-C4coU-vx.js",
      "assets/engine-14d5lda2.js",
      "assets/cities-tfcRdmsJ.js",
      "assets/shared-BaQwRjes.js",
      "assets/characters-p5grEi98.js",
      "assets/tokyo-CqLdAwml.js",
      "assets/actors-bknSEpf2.js",
      "assets/prefs-zGhi31Iu.js",
      "assets/icons-Md4jzY0j.js",
      "assets/dom-BCt0vy2n.js",
      "assets/strings-nmBOf9Pn.js",
      "assets/audio-BTLLtCvZ.js",
      "assets/region-tokyo-A7LxHjud.js",
      "assets/region-tokyo-d-akihabara-UGh9Bzey.js",
      "assets/region-tokyo-d-ueno-DfmWW0p_.js",
      "assets/region-tokyo-d-ameyoko-CVt_89lm.js",
      "assets/region-tokyo-d-suidobashi-CZ63KPtp.js",
      "assets/region-tokyo-d-hongo-D07gR5X4.js",
      "assets/region-tokyo-d-kanda-DcnnktoK.js",
      "assets/region-tokyo-d-roppongi-Cde5Mv3w.js",
      "assets/tokyo-CAUNbJt2.css",
      "assets/signs-3K830yjj.js",
      "assets/batch-BDY_w07r.js",
      "assets/material-BqlUQJHC.js",
      "assets/airliner-DaSovv5j.js",
    ]),
) => i.map((i) => d[i]);
import { t as e } from "./preload-helper-DZce6yc-.js";
import { i as t, r as n, t as r } from "./ja-anaGONx4.js";
import {
  Jt as i,
  Ln as a,
  Tt as o,
  or as s,
  p as c,
  s as l,
  z as u,
} from "./three-C4coU-vx.js";
import {
  $t as d,
  At as f,
  Br as p,
  Bt as m,
  Ct as h,
  Et as g,
  Ft as _,
  Gt as v,
  Hr as y,
  Ht as ee,
  Ir as b,
  It as te,
  Jt as x,
  Kr as ne,
  Kt as S,
  Lt as C,
  Mr as re,
  Mt as w,
  Pt as T,
  Qt as ie,
  Rr as ae,
  Rt as E,
  Sn as D,
  Tt as oe,
  Ur as se,
  Ut as O,
  Vr as ce,
  Vt as le,
  Xt as k,
  Yt as ue,
  Zt as de,
  an as A,
  cn as fe,
  en as j,
  gn as pe,
  gt as me,
  hn as he,
  ht as ge,
  in as _e,
  jn as ve,
  jr as ye,
  jt as be,
  kt as xe,
  ln as M,
  mt as Se,
  on as Ce,
  rn as we,
  sn as N,
  st as Te,
  tn as Ee,
  un as De,
  ur as Oe,
  wt as ke,
  xn as Ae,
  yn as je,
  yt as Me,
  zt as Ne,
} from "./engine-14d5lda2.js";
import { r as Pe } from "./shared-BaQwRjes.js";
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
  Fe = `tokyo-rush-story-sub`,
  F;
function Ie(e) {
  let t = e.params?.get(`storysub`);
  if (t === `ja` || t === `zh` || t === `en`) return t;
  if (F === void 0) {
    F = null;
    try {
      let e = localStorage.getItem(Fe);
      (e === `ja` || e === `zh` || e === `en`) && (F = e);
    } catch {}
  }
  return (
    F ?? (e.state.lang === `en` ? `en` : e.state.lang === `ja` ? `ja` : `zh`)
  );
}
function Le(e, t) {
  return e === `ja` && t.ja
    ? { zh: t.ja, en: t.ja, ja: t.ja }
    : e === `zh`
      ? { zh: t.zh, en: t.zh, ja: t.zh }
      : e === `en`
        ? { zh: t.en, en: t.en, ja: t.en }
        : t;
}
