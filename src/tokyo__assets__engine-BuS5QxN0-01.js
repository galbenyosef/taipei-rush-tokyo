// tokyo__assets__engine-BuS5QxN0 01 — intervalms
// Lines 1-139 of readable/tokyo__assets__engine-BuS5QxN0.pretty.js (statement-aligned).
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/boot-C6yF8B4X.js",
      "assets/shared-DcD5mkpI.js",
      "assets/ja-Ci9Qv_M-.js",
      "assets/cities-8-O8IWPJ.js",
      "assets/game-y-FF2uWA.js",
      "assets/three-CC5Mkdpe.js",
      "assets/rolldown-runtime-DK3Fl9T5.js",
      "assets/notice-DnIsya3-.js",
      "assets/session-CLv8PYlR.js",
      "assets/controllers-mah1C7rD.js",
      "assets/landing-DfZEUEhC.js",
      "assets/accounts-CpfgQQfK.js",
      "assets/tabs-C1IhIOn4.js",
      "assets/dom-BIQnAwky.js",
      "assets/text-0MpKmkwJ.js",
      "assets/coordinator-R8919moQ.js",
      "assets/ui-Bz5oqxsZ.js",
      "assets/icons-DYNV7fxr.js",
      "assets/profile-BmQKTAov.js",
      "assets/profile-OY6SPQJJ.css",
      "assets/phone-BvNRaOR5.js",
      "assets/panel-D9zvhD2V.js",
      "assets/panel-DY3g4qQQ.css",
    ]),
) => i.map((i) => d[i]);
import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { a as t, i as n, t as r } from "./ja-Ci9Qv_M-.js";
import {
  $n as i,
  $t as a,
  An as o,
  En as s,
  Et as c,
  F as l,
  J as u,
  Jn as d,
  K as f,
  Kn as p,
  Kt as m,
  Lt as h,
  N as g,
  Nn as _,
  Nt as v,
  Ot as y,
  P as b,
  Qn as ee,
  S as x,
  St as S,
  Tn as C,
  Tt as w,
  U as T,
  W as te,
  Y as E,
  Yn as ne,
  Zn as re,
  _ as ie,
  _n as ae,
  at as oe,
  c as se,
  g as ce,
  gn as le,
  h as ue,
  hn as de,
  ht as fe,
  ir as pe,
  it as me,
  jt as he,
  mn as ge,
  mt as _e,
  n as ve,
  nr as ye,
  nt as be,
  o as xe,
  p as Se,
  q as Ce,
  s as we,
  tr as Te,
  v as Ee,
  vn as De,
  wt as Oe,
  x as ke,
  yn as Ae,
  zn as je,
  zt as Me,
} from "./three-CC5Mkdpe.js";
import { n as Ne } from "./cities-8-O8IWPJ.js";
import { i as Pe, t as Fe } from "./shared-DcD5mkpI.js";
var Ie = class {
  intervalMs;
  last = 0;
  accumulator = 0;
  tickMs = 0;
  constructor(e) {
    this.intervalMs = e === `0` ? 0 : 1e3 / (e === `30` ? 30 : 60);
  }
  setFps(e) {
    let t = e === 0 ? 0 : 1e3 / e;
    t !== this.intervalMs && ((this.intervalMs = t), (this.accumulator = t));
  }
  reset(e) {
    ((this.last = e), (this.accumulator = 0));
  }
  ready(e) {
    return (
      (this.tickMs = Math.max(0, e - this.last)),
      (this.accumulator += this.tickMs),
      (this.last = e),
      this.intervalMs
        ? this.accumulator + 0.001 < this.intervalMs
          ? !1
          : ((this.accumulator = Math.max(
              0,
              this.accumulator -
                Math.floor((this.accumulator + 0.001) / this.intervalMs) *
                  this.intervalMs,
            )),
            !0)
        : !0
    );
  }
  adaptInterval(e) {
    return !this.intervalMs || this.tickMs > this.intervalMs + 0.001
      ? e
      : e <= this.intervalMs + this.tickMs + 0.001
        ? this.intervalMs
        : e;
  }
};
function Le(e) {
  return (
    e instanceof HTMLElement &&
    (!!e.closest(`input,textarea,select`) || e.isContentEditable)
  );
}
