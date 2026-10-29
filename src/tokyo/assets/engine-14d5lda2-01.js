// tokyo/assets/engine-14d5lda2 01 — intervalms
// Lines 1-221 of readable/tokyo/assets/engine-14d5lda2.pretty.js (statement-aligned).
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/boot-BYKah_CW.js",
      "assets/notice-DnIsya3-.js",
      "assets/session-DVEw0yxj.js",
      "assets/rolldown-runtime-DK3Fl9T5.js",
      "assets/controllers-DHBZ_k07.js",
      "assets/shared-BaQwRjes.js",
      "assets/ja-anaGONx4.js",
      "assets/preload-helper-DZce6yc-.js",
      "assets/cities-tfcRdmsJ.js",
      "assets/game-DQ7TeBJx.js",
      "assets/three-C4coU-vx.js",
      "assets/landing-CD9ntJhH.js",
      "assets/accounts-DSoNIbxN.js",
      "assets/tabs-C1IhIOn4.js",
      "assets/dom-CivB7fIR.js",
      "assets/text-Dz2IP1v8.js",
      "assets/coordinator-Brhh9B6T.js",
      "assets/ui-P-VyG5rz.js",
      "assets/icons-Md4jzY0j.js",
      "assets/profile-DAhvJU_P.js",
      "assets/profile-DrLTezeU.css",
      "assets/phone-Crnwgx7Y.js",
      "assets/panel-z7F7sGKE.js",
      "assets/panel-DY3g4qQQ.css",
    ]),
) => i.map((i) => d[i]);
import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { t } from "./preload-helper-DZce6yc-.js";
import { i as n, t as r } from "./ja-anaGONx4.js";
import {
  $n as i,
  C as a,
  Ct as o,
  Dt as s,
  Et as c,
  F as l,
  G as u,
  I as d,
  J as f,
  Jt as p,
  Ln as m,
  Mt as h,
  On as g,
  P as _,
  Pn as v,
  Pt as y,
  Rt as b,
  S as ee,
  Sn as x,
  Tt as S,
  Un as C,
  Vt as te,
  W as w,
  X as ne,
  Y as T,
  Zn as E,
  _ as re,
  _n as ie,
  at as ae,
  bn as oe,
  c as se,
  er as ce,
  g as le,
  gn as ue,
  gt as de,
  h as fe,
  ht as pe,
  ir as me,
  kn as he,
  kt as ge,
  lr as _e,
  n as ve,
  nr as ye,
  o as be,
  or as xe,
  ot as Se,
  p as Ce,
  q as we,
  rr as Te,
  rt as Ee,
  s as De,
  sr as Oe,
  tn as ke,
  v as Ae,
  vn as je,
  xn as Me,
} from "./three-C4coU-vx.js";
import { n as Ne } from "./cities-tfcRdmsJ.js";
import { f as Pe, i as Fe, t as Ie } from "./shared-BaQwRjes.js";
var Le = class {
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
function Re(e) {
  return (
    e instanceof HTMLElement &&
    (!!e.closest(`input,textarea,select`) || e.isContentEditable)
  );
}
var ze = {
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
  Be = new Set([`CapsLock`, `NumLock`, `ScrollLock`]),
  Ve = {
    ShiftLeft: `shiftKey`,
    ShiftRight: `shiftKey`,
    AltLeft: `altKey`,
    AltRight: `altKey`,
    ControlLeft: `ctrlKey`,
    ControlRight: `ctrlKey`,
    MetaLeft: `metaKey`,
    MetaRight: `metaKey`,
  },
  He = {
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
  Ue = {
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
function We(e) {
  if (e.code && e.code !== `Unidentified`) return e.code;
  let t = e.key ?? ``,
    n = e.location === 2 ? `Right` : `Left`;
  if (t.length === 1 && /[a-z]/i.test(t)) return `Key${t.toUpperCase()}`;
  if (t.length === 1 && t >= `0` && t <= `9`) return `Digit${t}`;
  if (t === `Shift` || t === `Alt` || t === `Control` || t === `Meta`)
    return t + n;
  if (He[t]) return He[t];
  let r = e.keyCode ?? 0;
  return r >= 65 && r <= 90
    ? `Key${String.fromCharCode(r)}`
    : r >= 48 && r <= 57
      ? `Digit${r - 48}`
      : r === 16 || r === 17 || r === 18
        ? Ue[r].replace(`Left`, n)
        : (Ue[r] ?? ``);
}
