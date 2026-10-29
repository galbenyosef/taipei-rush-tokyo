// tokyo/assets/engine-wUBYs8Z3 01 — intervalms
// Lines 1-219 of readable/tokyo/assets/engine-wUBYs8Z3.pretty.js (statement-aligned).
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/boot-DzAWftFx.js",
      "assets/shared-DC9fKqx_.js",
      "assets/ja-DY7SMsVw.js",
      "assets/cities-8-O8IWPJ.js",
      "assets/game-CPWU_QWx.js",
      "assets/three-x0mFGRTI.js",
      "assets/rolldown-runtime-DK3Fl9T5.js",
      "assets/notice-DnIsya3-.js",
      "assets/session-B5ukzynC.js",
      "assets/controllers-DIi301oL.js",
      "assets/landing-BF9tCPAp.js",
      "assets/accounts-BNXdphZj.js",
      "assets/tabs-C1IhIOn4.js",
      "assets/dom-COFDPdeV.js",
      "assets/text-BwU1KB-o.js",
      "assets/coordinator-idJVRLyI.js",
      "assets/ui-wGTeK-Dn.js",
      "assets/icons-DYNV7fxr.js",
      "assets/profile-DIg-QXlP.js",
      "assets/profile-OY6SPQJJ.css",
      "assets/phone-T88fC2hD.js",
      "assets/panel-8FADH4GH.js",
      "assets/panel-DY3g4qQQ.css",
    ]),
) => i.map((i) => d[i]);
import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { a as t, i as n, t as r } from "./ja-DY7SMsVw.js";
import {
  $n as i,
  Bt as a,
  Dn as o,
  En as s,
  Et as c,
  F as l,
  Fn as u,
  J as d,
  Jn as f,
  K as p,
  Lt as m,
  Mn as h,
  N as g,
  Nt as _,
  Ot as v,
  P as y,
  S as b,
  St as x,
  Tt as S,
  U as C,
  Vn as w,
  W as ee,
  Xn as T,
  Y as te,
  Zn as E,
  _ as ne,
  _n as re,
  at as ie,
  bn as ae,
  c as oe,
  en as se,
  er as ce,
  g as le,
  gn as ue,
  h as de,
  hn as fe,
  ht as pe,
  ir as me,
  it as he,
  jt as ge,
  mt as _e,
  n as ve,
  nt as ye,
  o as be,
  or as xe,
  p as Se,
  q as Ce,
  qt as we,
  rr as Te,
  s as Ee,
  tr as De,
  v as Oe,
  vn as ke,
  wt as Ae,
  x as je,
  yn as Me,
} from "./three-x0mFGRTI.js";
import { n as Ne } from "./cities-8-O8IWPJ.js";
import { i as Pe, t as Fe } from "./shared-DC9fKqx_.js";
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
var Re = {
    ShiftLeft: [`sprint`],
    ShiftRight: [`sprint`],
    Space: [`jump`, `handbrake`],
    KeyF: [`enter`],
    KeyE: [`interact`],
    KeyH: [`horn`],
    Escape: [`pause`],
    KeyP: [`pause`],
    KeyM: [`map`],
    KeyT: [`phone`],
    KeyV: [`camera`],
    KeyC: [`lookBehind`],
    KeyQ: [`radio`],
    Tab: [`weaponNext`],
    KeyR: [`reload`],
  },
  ze = new Set([`CapsLock`, `NumLock`, `ScrollLock`]),
  Be = {
    ShiftLeft: `shiftKey`,
    ShiftRight: `shiftKey`,
    AltLeft: `altKey`,
    AltRight: `altKey`,
    ControlLeft: `ctrlKey`,
    ControlRight: `ctrlKey`,
    MetaLeft: `metaKey`,
    MetaRight: `metaKey`,
  },
  Ve = {
    " ": `Space`,
    Spacebar: `Space`,
    ArrowUp: `ArrowUp`,
    Up: `ArrowUp`,
    ArrowDown: `ArrowDown`,
    Down: `ArrowDown`,
    ArrowLeft: `ArrowLeft`,
    Left: `ArrowLeft`,
    ArrowRight: `ArrowRight`,
    Right: `ArrowRight`,
    Escape: `Escape`,
    Esc: `Escape`,
    Tab: `Tab`,
    Enter: `Enter`,
    CapsLock: `CapsLock`,
  },
  He = {
    9: `Tab`,
    13: `Enter`,
    16: `ShiftLeft`,
    17: `ControlLeft`,
    18: `AltLeft`,
    20: `CapsLock`,
    27: `Escape`,
    32: `Space`,
    37: `ArrowLeft`,
    38: `ArrowUp`,
    39: `ArrowRight`,
    40: `ArrowDown`,
    91: `MetaLeft`,
    92: `MetaRight`,
    93: `MetaRight`,
  };
function Ue(e) {
  if (e.code && e.code !== `Unidentified`) return e.code;
  let t = e.key ?? ``,
    n = e.location === 2 ? `Right` : `Left`;
  if (t.length === 1 && /[a-z]/i.test(t)) return `Key${t.toUpperCase()}`;
  if (t.length === 1 && t >= `0` && t <= `9`) return `Digit${t}`;
  if (t === `Shift` || t === `Alt` || t === `Control` || t === `Meta`)
    return t + n;
  if (Ve[t]) return Ve[t];
  let r = e.keyCode ?? 0;
  return r >= 65 && r <= 90
    ? `Key${String.fromCharCode(r)}`
    : r >= 48 && r <= 57
      ? `Digit${r - 48}`
      : r === 16 || r === 17 || r === 18
        ? He[r].replace(`Left`, n)
        : (He[r] ?? ``);
}
