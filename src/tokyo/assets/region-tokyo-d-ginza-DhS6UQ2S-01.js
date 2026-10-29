// tokyo/assets/region-tokyo-d-ginza-DhS6UQ2S 01 — addcolorstop
// Lines 1-125 of readable/tokyo/assets/region-tokyo-d-ginza-DhS6UQ2S.pretty.js (statement-aligned).
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/actors-bknSEpf2.js",
      "assets/rolldown-runtime-DK3Fl9T5.js",
      "assets/preload-helper-DZce6yc-.js",
      "assets/ja-anaGONx4.js",
      "assets/three-C4coU-vx.js",
      "assets/engine-14d5lda2.js",
      "assets/cities-tfcRdmsJ.js",
      "assets/shared-BaQwRjes.js",
      "assets/characters-p5grEi98.js",
      "assets/prefs-zGhi31Iu.js",
      "assets/world-CVm1JHks.js",
      "assets/tokyo-CqLdAwml.js",
      "assets/game-DQ7TeBJx.js",
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
    ]),
) => i.map((i) => d[i]);
import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { t } from "./preload-helper-DZce6yc-.js";
import { t as n } from "./ja-anaGONx4.js";
import { Y as r } from "./three-C4coU-vx.js";
import {
  F as i,
  Tn as a,
  bt as o,
  dn as s,
  mn as c,
  wn as l,
} from "./engine-14d5lda2.js";
import { H as u, X as d } from "./world-CVm1JHks.js";
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
} from "./region-tokyo-A7LxHjud.js";
import { n as N, r as ie, t as ae } from "./region-tokyo-d-shared-bvlYnkeu.js";
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
