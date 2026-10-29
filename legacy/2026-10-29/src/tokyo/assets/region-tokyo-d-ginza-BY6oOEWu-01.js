// tokyo/assets/region-tokyo-d-ginza-BY6oOEWu 01 — addcolorstop
// Lines 1-122 of readable/tokyo/assets/region-tokyo-d-ginza-BY6oOEWu.pretty.js (statement-aligned).
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/actors-qKVitB-C.js",
      "assets/rolldown-runtime-DK3Fl9T5.js",
      "assets/ja-DY7SMsVw.js",
      "assets/three-x0mFGRTI.js",
      "assets/engine-wUBYs8Z3.js",
      "assets/cities-8-O8IWPJ.js",
      "assets/shared-DC9fKqx_.js",
      "assets/characters-CbxAZUc_.js",
      "assets/world-CAmHK742.js",
      "assets/tokyo-_rNKO_Y7.js",
      "assets/game-CPWU_QWx.js",
      "assets/icons-DYNV7fxr.js",
      "assets/dom-BCt0vy2n.js",
      "assets/prefs-BioZODFl.js",
      "assets/audio-CgR0uni4.js",
      "assets/region-tokyo-55J_WESF.js",
      "assets/region-tokyo-d-akihabara-CilcTp8S.js",
      "assets/region-tokyo-d-ueno-CufCWRy0.js",
      "assets/region-tokyo-d-ameyoko-DgncIALb.js",
      "assets/region-tokyo-d-suidobashi-BBv4Djc2.js",
      "assets/region-tokyo-d-hongo-B0kKsWK8.js",
      "assets/region-tokyo-d-kanda-BOuhI6B0.js",
      "assets/region-tokyo-d-roppongi-Cv6Rgbh_.js",
      "assets/tokyo-CsxGFiHR.css",
    ]),
) => i.map((i) => d[i]);
import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { a as t, t as n } from "./ja-DY7SMsVw.js";
import { J as r } from "./three-x0mFGRTI.js";
import {
  B as i,
  bn as a,
  ht as o,
  ln as s,
  on as c,
  yn as l,
} from "./engine-wUBYs8Z3.js";
import { K as u, et as d } from "./world-CAmHK742.js";
import {
  En as f,
  Tn as p,
  _t as m,
  ct as h,
  dn as g,
  dt as _,
  fn as v,
  ft as y,
  gn as b,
  gt as x,
  hn as S,
  ht as C,
  in as w,
  ln as T,
  lt as E,
  mt as D,
  pn as O,
  pt as k,
  st as ee,
  un as A,
  ut as te,
  wn as ne,
  xn as re,
  xt as j,
  yt as M,
} from "./region-tokyo-55J_WESF.js";
import { n as N, r as ie, t as ae } from "./region-tokyo-d-shared-C5O1aoRa.js";
var P = 2048,
  F = 1536,
  oe = Math.PI * 2;
function I(e, t, n, r, i) {
  ((e.fillStyle = i), e.beginPath(), e.arc(t, n, r, 0, oe), e.fill());
}
function se(e, t, n, r, i, a) {
  let o = e.createRadialGradient(t, n, 0, t, n, r);
  (o.addColorStop(0, i),
    o.addColorStop(1, a),
    (e.fillStyle = o),
    e.fillRect(t - r, n - r, r * 2, r * 2));
}
function ce(e, t, n, r, i = 0.35) {
  let a = e.createLinearGradient(0, 0, 0, r);
  (a.addColorStop(0, `rgba(255,244,214,${i})`),
    a.addColorStop(1, `rgba(255,244,214,0)`),
    (e.fillStyle = a),
    e.beginPath(),
    e.moveTo(t - 6, 0),
    e.lineTo(t + 6, 0),
    e.lineTo(t + n / 2, r),
    e.lineTo(t - n / 2, r),
    e.closePath(),
    e.fill());
}
function L(e, t, n, r, i = 6) {
  A(e, 0, n - i, t, i, r);
}
function le(e, t, n, r, i, a = {}) {
  let o = a.px ?? r * 0.62,
    s = a.serif ? O() : v(),
    c = a.spacing ?? 0;
  if (!c) {
    T(e, t, n / 2, r / 2 + 1, n * 0.9, o, i, s, a.weight ?? `bold`);
    return;
  }
  let l = o,
    u = (n) => {
      e.font = `${a.weight ?? `bold`} ${n}px ${s}`;
      let r = 0;
      for (let i of t) r += e.measureText(i).width + n * c;
      return r - n * c;
    };
  for (; l > 6 && u(l) > n * 0.9;) l *= 0.93;
  let d = u(l);
  ((e.fillStyle = i), (e.textAlign = `left`), (e.textBaseline = `middle`));
  let f = (n - d) / 2;
  for (let n of t)
    (e.fillText(n, f, r / 2 + 1), (f += e.measureText(n).width + l * c));
}
