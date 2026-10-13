// tokyo__assets__region-tokyo-d-ginza-B8PkMMHp 01 — addcolorstop
// Lines 1-83 of readable/tokyo__assets__region-tokyo-d-ginza-B8PkMMHp.pretty.js (statement-aligned).
import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { J as t } from "./three-CC5Mkdpe.js";
import { B as n, en as r, rn as i } from "./engine-BuS5QxN0.js";
import { Q as a, W as o } from "./world-Bo9wkXrT.js";
import {
  At as s,
  Bt as c,
  Ft as l,
  It as u,
  Jt as d,
  Lt as f,
  Nt as p,
  Pt as m,
  Wt as h,
  Yt as g,
  _t as _,
  ct as v,
  dt as y,
  ft as b,
  gt as x,
  ht as S,
  lt as C,
  mt as w,
  pt as T,
  qt as E,
  st as ee,
  ut as te,
  xt as D,
  yt as O,
  zt as k,
} from "./region-tokyo-BcM3fReU.js";
import { n as A, r as ne, t as re } from "./region-tokyo-d-shared-Cox87eLC.js";
var j = 2048,
  M = 1536,
  N = Math.PI * 2;
function P(e, t, n, r, i) {
  ((e.fillStyle = i), e.beginPath(), e.arc(t, n, r, 0, N), e.fill());
}
function F(e, t, n, r, i, a) {
  let o = e.createRadialGradient(t, n, 0, t, n, r);
  (o.addColorStop(0, i),
    o.addColorStop(1, a),
    (e.fillStyle = o),
    e.fillRect(t - r, n - r, r * 2, r * 2));
}
function I(e, t, n, r, i = 0.35) {
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
  m(e, 0, n - i, t, i, r);
}
function ie(e, t, n, r, i, a = {}) {
  let o = a.px ?? r * 0.62,
    s = a.serif ? f() : u(),
    c = a.spacing ?? 0;
  if (!c) {
    p(e, t, n / 2, r / 2 + 1, n * 0.9, o, i, s, a.weight ?? `bold`);
    return;
  }
  let l = o,
    d = (n) => {
      e.font = `${a.weight ?? `bold`} ${n}px ${s}`;
      let r = 0;
      for (let i of t) r += e.measureText(i).width + n * c;
      return r - n * c;
    };
  for (; l > 6 && d(l) > n * 0.9;) l *= 0.93;
  let m = d(l);
  ((e.fillStyle = i), (e.textAlign = `left`), (e.textBaseline = `middle`));
  let h = (n - m) / 2;
  for (let n of t)
    (e.fillText(n, h, r / 2 + 1), (h += e.measureText(n).width + l * c));
}
