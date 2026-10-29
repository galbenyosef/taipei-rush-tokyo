// tokyo/assets/region-tokyo-d-nihonbashi-D7vTBNTZ 01 — addcolorstop
// Lines 1-313 of readable/tokyo/assets/region-tokyo-d-nihonbashi-D7vTBNTZ.pretty.js (statement-aligned).
import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { J as t, Tt as n } from "./three-x0mFGRTI.js";
import { B as r, ln as i, on as a } from "./engine-wUBYs8Z3.js";
import { K as o, Z as s, et as c } from "./world-CAmHK742.js";
import {
  En as l,
  Tn as u,
  _t as d,
  dn as f,
  fn as p,
  gn as m,
  hn as h,
  in as g,
  ln as _,
  pn as v,
  un as y,
  wn as b,
  xn as x,
  xt as S,
} from "./region-tokyo-55J_WESF.js";
import { n as C, r as w, t as ee } from "./region-tokyo-d-shared-C5O1aoRa.js";
var T = 2048,
  te = 2048,
  E = Math.PI * 2;
function D(e, t, n, r, i) {
  ((e.fillStyle = i), e.beginPath(), e.arc(t, n, r, 0, E), e.fill());
}
function ne(e, t, n, r, i, a) {
  let o = e.createRadialGradient(t, n, 0, t, n, r);
  (o.addColorStop(0, i),
    o.addColorStop(1, a),
    (e.fillStyle = o),
    e.fillRect(t - r, n - r, r * 2, r * 2));
}
function O(e, t, n, r, i = 0.35) {
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
function k(e, t, n, r, i = 6) {
  y(e, 0, n - i, t, i, r);
}
function A(e, t, n, r, i, a = 32, o = 64) {
  y(e, 0, 0, t, n, r);
  for (let r = 0, s = 0; r < n; r += a, s++) {
    y(e, 0, r, t, 1.5, i);
    for (let n = s % 2 ? o / 2 : 0; n < t; n += o) y(e, n, r, 1.5, a, i);
  }
}
function j(e, t, n, r, i, a, o, s = {}) {
  (y(e, t - 4, n - 4, r + 8, i + 8, a),
    s.cool
      ? m(
          e,
          t,
          n,
          r,
          i,
          f(214 * o, 228 * o, 236 * o),
          f(170 * o, 196 * o, 214 * o),
        )
      : m(
          e,
          t,
          n,
          r,
          i,
          f(255 * o, 236 * o, 196 * o),
          f(246 * o, 200 * o, 136 * o),
        ));
  let c = s.mull ?? 1;
  for (let o = 1; o <= c; o++) y(e, t + (r * o) / (c + 1) - 1.5, n, 3, i, a);
  s.transom && y(e, t, n + i * s.transom, r, 3, a);
}
function re(e, t, n, r, i, a = {}) {
  let o = a.px ?? r * 0.62,
    s = a.serif ? v() : p(),
    c = a.spacing ?? 0;
  if (!c) {
    _(e, t, n / 2, r / 2 + 1, n * 0.9, o, i, s, a.weight ?? `bold`);
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
var ie = (e, t, n, r) => {
    A(e, t, n, `#ddd0b4`, `rgba(110,90,60,0.22)`, 32, 128);
    for (let r of [0, t - 26])
      (y(e, r, 0, 26, n, `#e6dcc4`),
        y(e, r + (r ? 0 : 24), 0, 2, n, `rgba(90,70,40,0.25)`));
    (j(e, 58, 30, 140, 168, `#5a4a30`, 0.74 + r.next() * 0.1, {
      mull: 2,
      transom: 0.28,
    }),
      y(e, 62, 204, 132, 22, `#6e5a3a`));
    for (let t = 0; t < 6; t++) y(e, 70 + t * 21, 208, 12, 14, `#8a7450`);
    k(e, t, n, `#c2b496`, 8);
  },
  ae = (e, t, n, r) => {
    A(e, t, n, `#ddd0b4`, `rgba(110,90,60,0.22)`, 32, 128);
    for (let r of [0, t - 26]) y(e, r, 0, 26, n, `#e6dcc4`);
    let i = 0.74 + r.next() * 0.1;
    ((e.fillStyle = `#5a4a30`),
      e.beginPath(),
      e.moveTo(54, 236),
      e.lineTo(54, 110),
      e.arc(128, 110, 74, Math.PI, 0),
      e.lineTo(202, 236),
      e.closePath(),
      e.fill());
    let a = e.createLinearGradient(0, 40, 0, 230);
    (a.addColorStop(0, f(255 * i, 236 * i, 196 * i)),
      a.addColorStop(1, f(246 * i, 196 * i, 130 * i)),
      (e.fillStyle = a),
      e.beginPath(),
      e.moveTo(60, 230),
      e.lineTo(60, 110),
      e.arc(128, 110, 68, Math.PI, 0),
      e.lineTo(196, 230),
      e.closePath(),
      e.fill(),
      y(e, 126, 44, 4, 186, `#5a4a30`),
      y(e, 60, 128, 136, 3, `#5a4a30`),
      y(e, 116, 30, 24, 22, `#efe6d0`));
    for (let t of [28, 228]) D(e, t, 40, 10, `#cdbd98`);
    k(e, t, n, `#c2b496`, 8);
  },
  oe = (e, t, n, r) => {
    (A(e, t, n, `#c4beb0`, `rgba(70,64,56,0.25)`, 42, 96),
      j(e, 72, 26, 112, 150, `#3e3a32`, 0.7 + r.next() * 0.3, {
        mull: 1,
        transom: 0.3,
        cool: r.next() < 0.5,
      }),
      y(e, 70, 186, 116, 40, `#4e4636`),
      y(e, 80, 194, 96, 24, `#6a5c42`),
      k(e, t, n, `#a8a294`, 6));
  },
  se = (e, t, n, r) => {
    A(e, t, n, `#cfc4ae`, `rgba(90,76,56,0.22)`, 28, 84);
    let i = 0.72 + r.next() * 0.1;
    for (let t of [40, 140])
      j(e, t, 34, 76, 156, `#4a4030`, i, { mull: 1, transom: 0.25 });
    y(e, 36, 198, 184, 20, `#b8aa8e`);
    for (let t = 0; t < 8; t++) D(e, 48 + t * 23, 208, 5, `#a29274`);
    k(e, t, n, `#b4a78c`, 8);
  },
  ce = (e, t, n, r) => {
    A(e, t, n, `#cfc4ae`, `rgba(90,76,56,0.22)`, 28, 84);
    let i = 0.72 + r.next() * 0.1;
    for (let t of [78, 178]) {
      ((e.fillStyle = `#4a4030`),
        e.beginPath(),
        e.moveTo(t - 42, 230),
        e.lineTo(t - 42, 96),
        e.arc(t, 96, 42, Math.PI, 0),
        e.lineTo(t + 42, 230),
        e.closePath(),
        e.fill());
      let n = e.createLinearGradient(0, 56, 0, 226);
      (n.addColorStop(0, f(255 * i, 236 * i, 196 * i)),
        n.addColorStop(1, f(240 * i, 190 * i, 120 * i)),
        (e.fillStyle = n),
        e.beginPath(),
        e.moveTo(t - 37, 226),
        e.lineTo(t - 37, 96),
        e.arc(t, 96, 37, Math.PI, 0),
        e.lineTo(t + 37, 226),
        e.closePath(),
        e.fill(),
        y(e, t - 1.5, 60, 3, 166, `#4a4030`));
    }
    for (let n = 4; n < t; n += 22) y(e, n, 0, 12, 18, `#b0a286`);
    k(e, t, n, `#b4a78c`, 8);
  },
  le = (e, t, n, r) => {
    A(e, t, n, `#cfc4ae`, `rgba(90,76,56,0.22)`, 28, 84);
    let i = 0.72 + r.next() * 0.1;
    for (let t of [40, 140])
      j(e, t, 92, 76, 128, `#4a4030`, i, { mull: 1, transom: 0.3 });
    (y(e, 0, 18, t, 12, `#a8987a`), y(e, 0, 60, t, 10, `#a8987a`));
    for (let t of [6, 116, 226])
      (y(e, t, 30, 24, 30, `#9a8a6c`),
        y(e, t - 4, 30, 32, 6, `#b8a888`),
        y(e, t + 4, 44, 16, 6, `#b8a888`));
    for (let t of [73, 183])
      ((e.fillStyle = `#9a8a6c`),
        e.beginPath(),
        e.moveTo(t - 30, 60),
        e.quadraticCurveTo(t - 24, 34, t, 32),
        e.quadraticCurveTo(t + 24, 34, t + 30, 60),
        e.closePath(),
        e.fill(),
        D(e, t, 46, 6, `#c8b898`));
    k(e, t, n, `#b4a78c`, 8);
  },
  ue = (e, t, n, r) => {
    (m(e, 0, 0, t, n, `#7c96aa`, `#5c768c`),
      y(e, 0, 10, t, 12, `rgba(240,244,236,0.85)`));
    for (let t = 0; t < 4; t++)
      y(e, 8 + t * 64, 26, 40, 3, f(255, 250, 230, 0.6 + r.next() * 0.3));
    for (let i = 0; i < 3; i++)
      y(e, 20 + r.next() * (t - 60), n * 0.62, 40, 8, `rgba(40,50,60,0.4)`);
    let i = e.createLinearGradient(0, 0, t, n);
    (i.addColorStop(0, `rgba(220,235,245,0.25)`),
      i.addColorStop(0.5, `rgba(220,235,245,0.05)`),
      i.addColorStop(1, `rgba(220,235,245,0.2)`),
      (e.fillStyle = i),
      e.fillRect(0, 0, t, n));
    for (let t of [0, 85, 170]) y(e, t, 0, 10, n, `#eef2f2`);
    k(e, t, n, `#3c4a56`, 18);
  },
  de = (e, t, n, r) => {
    (m(e, 0, 0, t, n, `#f2d8a8`, `#c89a60`), y(e, 0, 0, t, 14, `#3a2a1e`));
    for (let i = 6; i < t; i += 19) {
      let t = 0.85 + r.next() * 0.2;
      y(e, i, 14, 9, n - 30, f(92 * t, 62 * t, 40 * t));
    }
    k(e, t, n, `#2a1e16`, 16);
  },
  fe = (e, t, n, r) => {
    y(e, 0, 0, t, n, `#d8d4cc`);
    for (let t = 0; t < 2; t++) {
      let n = 0.75 + r.next() * 0.25;
      (y(e, 22 + t * 120, 24, 96, 176, `#5a5e60`),
        m(
          e,
          28 + t * 120,
          30,
          84,
          164,
          f(232 * n, 236 * n, 236 * n),
          f(190 * n, 200 * n, 206 * n),
        ),
        y(e, 68 + t * 120, 30, 3, 164, `#5a5e60`));
    }
    k(e, t, n, `#bdb8ae`, 10);
  },
  pe = (e, t, n, r) => {
    y(e, 0, 0, t, n, `#7c807c`);
    let i = t / 4;
    for (let t = 0; t < 4; t++) {
      let a = 0.9 + r.next() * 0.1;
      m(
        e,
        t * i + 2,
        2,
        i - 4,
        n - 4,
        f(214 * a, 218 * a, 214 * a),
        f(192 * a, 196 * a, 192 * a),
      );
    }
    for (let r = 0; r < n; r += 5) y(e, 0, r, t, 1, `rgba(0,0,0,0.06)`);
    (y(e, 0, n * 0.45, t, 4, `rgba(60,64,60,0.5)`),
      y(e, 0, n - 10, t, 6, `rgba(60,64,60,0.6)`),
      r.next() < 0.5 &&
        ne(
          e,
          t * 0.3,
          n * 0.35,
          34,
          `rgba(255,244,214,0.7)`,
          `rgba(255,244,214,0)`,
        ));
  },
  me = (e, t, n, r) => {
    y(e, 0, 0, t, n, `#4a4844`);
    for (let r = 0; r < n; r += 40) y(e, 0, r, t, 1.5, `rgba(0,0,0,0.25)`);
    let i = 0.8 + r.next() * 0.2;
    for (let t of [40, 152]) j(e, t, 30, 64, 180, `#26241f`, i, { mull: 0 });
    k(e, t, n, `#33312d`, 8);
  };
function M(e, t, n, r, i) {
  (m(e, 0, 0, t, n * 0.78, r, r),
    m(e, 0, n * 0.78, t, n * 0.22, i, `#000000`),
    (e.strokeStyle = `#141414`),
    (e.lineWidth = 8),
    e.strokeRect(4, 4, t - 8, n - 8));
}
function N(e, t, n) {
  let r = e.createLinearGradient(0, 0, t, n);
  (r.addColorStop(0, `rgba(210,225,235,0.22)`),
    r.addColorStop(0.35, `rgba(210,225,235,0.05)`),
    r.addColorStop(0.55, `rgba(210,225,235,0.16)`),
    r.addColorStop(1, `rgba(210,225,235,0.02)`),
    (e.fillStyle = r),
    e.fillRect(8, 8, t - 16, n - 16));
}
function he(e, t, n, r = `#6a4a2a`) {
  (M(e, t, n, `#3a2a1c`, `#2a1e14`),
    y(e, 10, n * 0.66, t - 20, n * 0.24, r),
    y(e, 10, n * 0.66, t - 20, 5, `#8a6a42`));
}
