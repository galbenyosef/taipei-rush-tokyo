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
var ge = (e, t, n, r) => {
    (M(e, t, n, `#4a3a30`, `#2e2218`),
      O(e, t / 2, t * 0.8, n * 0.8, 0.3),
      (e.fillStyle = `#7a1e2a`),
      e.beginPath(),
      e.moveTo(t * 0.18, n * 0.22),
      e.lineTo(t * 0.82, n * 0.22),
      e.lineTo(t * 0.7, n * 0.36),
      e.lineTo(t * 0.66, n * 0.82),
      e.lineTo(t * 0.34, n * 0.82),
      e.lineTo(t * 0.3, n * 0.36),
      e.closePath(),
      e.fill(),
      y(e, t * 0.34, n * 0.46, t * 0.32, 14, `#d8b060`));
    for (let i = 0; i < 14; i++)
      D(
        e,
        t * 0.3 + r.next() * t * 0.4,
        n * 0.3 + r.next() * n * 0.5,
        5,
        [`#e0902a`, `#f0c040`, `#c8501e`][i % 3],
      );
    (y(e, t * 0.14, n * 0.2, t * 0.72, 5, `#2a1a10`), N(e, t, n));
  },
  _e = (e, t, n, r) => {
    M(e, t, n, `#5a4430`, `#3a2a1a`);
    for (let i = 0; i < 20; i++)
      D(
        e,
        r.next() * t,
        r.next() * n * 0.5,
        4 + r.next() * 5,
        [`#c8501e`, `#e0902a`, `#a8321a`][i % 3],
      );
    y(e, t * 0.16, n * 0.62, t * 0.68, n * 0.18, `#a8804a`);
    for (let r = 0; r < 6; r++)
      D(e, t * (0.24 + r * 0.1), n * 0.6, 12, r % 2 ? `#e8701e` : `#6a3a1a`);
    N(e, t, n);
  },
  ve = (e, t, n) => {
    he(e, t, n);
    for (let t = 0; t < 4; t++) {
      let r = 22 + t * 56;
      (y(e, r, n * 0.4, 44, n * 0.26, `#1a2a1a`),
        y(e, r + 4, n * 0.46, 36, 12, `#c8101a`),
        y(e, r + 10, n * 0.48, 24, 6, `#f0e0b0`));
    }
    for (let t = 0; t < 3; t++)
      y(
        e,
        30 + t * 74,
        n * 0.18,
        56,
        n * 0.16,
        [`#e8dcc0`, `#1a2a1a`, `#c8a050`][t],
      );
    N(e, t, n);
  },
  ye = (e, t, n) => {
    (he(e, t, n, `#4a3a2a`), y(e, 20, 30, t - 40, n * 0.56, `#1a2430`));
    for (let t = 0; t < 7; t++) {
      let r = 34 + t * 28;
      (y(e, r, 46, 10, n * 0.32, `#d8dde2`),
        y(e, r + 2, 46, 3, n * 0.32, `#f8faff`),
        y(e, r - 1, 46 + n * 0.32, 12, 26, `#5a3a22`));
    }
    N(e, t, n);
  },
  be = (e, t, n, r) => {
    he(e, t, n, `#7a5a34`);
    for (let t = 0; t < 5; t++) {
      let i = 30 + t * 40 + r.next() * 6,
        a = n * 0.5 + (t % 2) * 8;
      ((e.fillStyle = `#4a2e1a`),
        e.beginPath(),
        e.ellipse(i, a, 17, 9, -0.3, 0, E),
        e.fill(),
        D(e, i - 4, a - 2, 3, `rgba(200,180,140,0.5)`));
    }
    (y(e, t * 0.62, n * 0.24, 64, 44, `#c89a60`),
      y(e, t * 0.62, n * 0.24, 64, 6, `#8a6a42`));
    for (let t = 0; t < 3; t++) y(e, 24 + t * 40, n * 0.2, 30, 44, `#f0e6d0`);
    N(e, t, n);
  },
  xe = (e, t, n, r) => {
    M(e, t, n, `#efe8dc`, `#c8bca8`);
    for (let t = 0; t < 2; t++)
      for (let n = 0; n < 6; n++) {
        let i = [
          `#c8402a`,
          `#e8b030`,
          `#3a6a9a`,
          `#6a9a4a`,
          `#d87aa0`,
          `#f4efe0`,
        ][Math.floor(r.next() * 6)];
        y(e, 16 + n * 38, 22 + t * 90, 32, 80, i);
        for (let r = 0; r < 6; r++)
          y(
            e,
            16 + n * 38,
            26 + t * 90 + r * 13,
            32,
            1,
            `rgba(255,255,255,0.3)`,
          );
      }
    N(e, t, n);
  },
  Se = (e, t, n) => {
    he(e, t, n, `#5a3a22`);
    for (let t = 0; t < 5; t++) {
      let r = 28 + t * 42;
      (y(e, r, n * 0.52, 34, 18, `#e8e0d0`),
        y(
          e,
          r + 3,
          n * 0.52,
          28,
          7,
          [`#2a1a10`, `#4a2a10`, `#1a1a0a`, `#5a3a1a`, `#3a2010`][t],
        ),
        y(e, r + 6, n * 0.45, 22, 8, `#ffffff`));
    }
    N(e, t, n);
  },
  Ce = (e, t, n) => {
    he(e, t, n, `#6a4a2a`);
    for (let t = 0; t < 6; t++)
      D(
        e,
        28 + t * 34,
        n * 0.58,
        12,
        [`#f4e8f0`, `#8a4a5a`, `#f0f0e8`, `#6a8a4a`, `#e8a8b8`, `#c89a60`][t],
      );
    y(e, 30, n * 0.2, t - 60, n * 0.26, `#2a1a10`);
    for (let t = 0; t < 4; t++)
      y(e, 40 + t * 44, n * 0.24, 34, n * 0.18, `#a8321a`);
    N(e, t, n);
  },
  we = (e, t, n) => {
    (M(e, t, n, `#d8d0c0`, `#8a7a62`),
      O(e, t * 0.4, t * 0.5, n * 0.8, 0.35),
      y(e, t * 0.26, 16, t * 0.28, n * 0.72, `#5a6a5a`),
      y(e, t * 0.29, 30, t * 0.22, n * 0.6, `#f0ead8`),
      (e.fillStyle = `rgba(40,40,40,0.6)`),
      e.beginPath(),
      e.moveTo(t * 0.3, n * 0.5),
      e.lineTo(t * 0.36, n * 0.3),
      e.lineTo(t * 0.42, n * 0.46),
      e.lineTo(t * 0.47, n * 0.36),
      e.lineTo(t * 0.5, n * 0.55),
      e.closePath(),
      e.fill(),
      y(e, t * 0.66, n * 0.7, t * 0.18, 10, `#3a2a1a`),
      (e.fillStyle = `#a8c8b0`),
      e.beginPath(),
      e.ellipse(t * 0.75, n * 0.58, 20, 30, 0, 0, E),
      e.fill(),
      y(e, t * 0.75 - 6, n * 0.36, 12, 18, `#a8c8b0`),
      N(e, t, n));
  },
  Te = (e, t, n) => {
    (M(e, t, n, `#2a2622`, `#1a1612`), O(e, t / 2, t * 0.8, n * 0.8, 0.4));
    for (let r = 0; r < 3; r++) {
      let i = t * (0.22 + r * 0.28);
      (y(e, i - 22, n * 0.62, 44, n * 0.2, `#d8d0c0`),
        (e.fillStyle = [`#3a2a1e`, `#a8c8b0`, `#c8a878`][r]),
        e.beginPath(),
        r === 1
          ? e.ellipse(i, n * 0.5, 22, 30, 0, 0, E)
          : e.ellipse(i, n * 0.58, 20, 12, 0, 0, Math.PI),
        e.fill());
    }
    N(e, t, n);
  },
  Ee = (e, t, n, r) => {
    (M(e, t, n, `#ecebe6`, `#bdb8ae`),
      O(e, t / 2, t * 0.8, n * 0.8, 0.25),
      y(e, t * 0.2, n * 0.14, t * 0.6, n * 0.48, `#b8902c`),
      m(e, t * 0.24, n * 0.18, t * 0.52, n * 0.4, `#8ab0c8`, `#d8c890`));
    for (let i = 0; i < 8; i++)
      D(
        e,
        t * 0.26 + r.next() * t * 0.48,
        n * 0.4 + r.next() * n * 0.16,
        6,
        [`#4a7a3a`, `#c86a2a`, `#e8d070`][i % 3],
      );
    (y(e, t * 0.48, n * 0.62, 8, n * 0.24, `#5a3a22`), N(e, t, n));
  },
  De = (e, t, n) => {
    M(e, t, n, `#f4f2ea`, `#c8c0b0`);
    for (let r = 0; r < 3; r++) {
      let i = t * (0.2 + r * 0.3);
      (y(e, i - 30, n * 0.6, 60, 26, `#c8a070`),
        D(e, i, n * 0.54, 24, `#a8c87a`));
      for (let t = 0; t < 6; t++)
        y(e, i - 20, n * 0.46 + t * 6, 40, 1, `rgba(240,240,220,0.6)`);
      y(e, i - 1, n * 0.4, 3, 10, `#6a7a3a`);
    }
    for (let r = 0; r < 8; r++)
      D(
        e,
        t * 0.4 + (r % 4) * 9,
        n * 0.2 + Math.floor(r / 4) * 9,
        5,
        `#5a2a6a`,
      );
    N(e, t, n);
  },
  Oe = (e, t, n, r) => {
    M(e, t, n, `#efe8da`, `#b8a888`);
    for (let n = 0; n < 3; n++) {
      y(e, 14, 40 + n * 60, t - 28, 4, `#6a4a2a`);
      for (let i = 18; i < t - 22;) {
        let t = 8 + r.next() * 12;
        (y(
          e,
          i,
          40 + n * 60 - 44,
          t - 1,
          44,
          [`#2a3a6a`, `#8a2a1a`, `#e8dcc0`, `#3a5a3a`, `#c8a050`][
            Math.floor(r.next() * 5)
          ],
        ),
          (i += t));
      }
    }
    N(e, t, n);
  },
  ke = {
    yotsukoshi: {
      key: `brand.yotsukoshi`,
      bg: `#ddd0b4`,
      fg: C,
      serif: !0,
      spacing: 0.35,
    },
    takayamaya: {
      key: `brand.takayamaya`,
      bg: `#cfc4ae`,
      fg: `#00603e`,
      serif: !0,
      spacing: 0.35,
    },
    soredo: {
      key: `nihonbashi.mark.soredo`,
      bg: `#2a1e16`,
      fg: `#f0dcb0`,
      spacing: 0.12,
    },
    soredonb: {
      key: `nihonbashi.mark.soredo-nihonbashi`,
      bg: `#1e1e22`,
      fg: `#e8e4dc`,
      spacing: 0.12,
    },
    ninpen: {
      key: `nihonbashi.mark.ninpen`,
      bg: `#f4ecd8`,
      fg: `#1a1a1a`,
      serif: !0,
      spacing: 0.2,
      band: `#c8101a`,
    },
    moriya: {
      key: `nihonbashi.mark.moriya`,
      bg: `#1a1a1a`,
      fg: `#e8e0c8`,
      serif: !0,
      spacing: 0.25,
    },
    yamanaka: {
      key: `nihonbashi.mark.yamanaka`,
      bg: `#14201a`,
      fg: `#e8d6a0`,
      serif: !0,
      spacing: 0.2,
    },
    kawamotoyama: {
      key: `nihonbashi.mark.kawamotoyama`,
      bg: `#f0e8d4`,
      fg: `#2a5a2a`,
      serif: !0,
      spacing: 0.3,
    },
    koisa: {
      key: `nihonbashi.mark.koisa`,
      bg: `#2a1a10`,
      fg: `#f0e2c0`,
      serif: !0,
      spacing: 0.25,
    },
    otsu: {
      key: `nihonbashi.mark.otsu`,
      bg: `#f6f0e2`,
      fg: `#3a2a1a`,
      serif: !0,
      spacing: 0.25,
    },
    manbikiya: {
      key: `nihonbashi.mark.manbikiya`,
      bg: `#2a3a2a`,
      fg: `#f0e8d0`,
      serif: !0,
      spacing: 0.15,
    },
    eijudo: {
      key: `nihonbashi.mark.eijudo`,
      bg: `#4a1a24`,
      fg: `#f4e6d0`,
      serif: !0,
      spacing: 0.25,
    },
    bank: {
      key: `nihonbashi.mark.bank`,
      bg: `#c4beb0`,
      fg: `#3a3628`,
      serif: !0,
      spacing: 0.4,
    },
    gallery1: {
      key: `nihonbashi.gallery.1`,
      bg: `#1a1a1a`,
      fg: `#e8dcc0`,
      serif: !0,
      spacing: 0.2,
    },
    gallery2: {
      key: `nihonbashi.gallery.2`,
      bg: `#f2efe8`,
      fg: `#2a2a2a`,
      serif: !0,
      spacing: 0.2,
    },
    gallery3: {
      key: `nihonbashi.gallery.3`,
      bg: `#3a2e22`,
      fg: `#e8d8b0`,
      serif: !0,
      spacing: 0.2,
    },
    museum: {
      key: `nihonbashi.mark.museum`,
      bg: `#e8e6e0`,
      fg: `#2a2a2a`,
      spacing: 0.3,
    },
    busterm: {
      key: `nihonbashi.bus.name`,
      bg: `#1a3a6a`,
      fg: `#ffffff`,
      spacing: 0.08,
    },
  },
  Ae = (e) => (t, n, r) => {
    (y(t, 0, 0, n, r, e.bg),
      e.band && y(t, 0, r - 6, n, 6, e.band),
      re(t, g(e.key), n, r, e.fg, { serif: e.serif, spacing: e.spacing }));
  },
  je = {
    yotsukoshi: { key: `brand.yotsukoshi`, bg: C, fg: `#ffffff`, serif: !0 },
    takayamaya: {
      key: `brand.takayamaya`,
      bg: `#00603e`,
      fg: `#ffffff`,
      serif: !0,
    },
    yamanaka: {
      key: `nihonbashi.mark.yamanaka`,
      bg: `#14201a`,
      fg: `#e8d6a0`,
      serif: !0,
    },
    koisa: {
      key: `nihonbashi.mark.koisa`,
      bg: `#f0e2c0`,
      fg: `#2a1a10`,
      serif: !0,
    },
    otsu: {
      key: `nihonbashi.mark.otsu`,
      bg: `#2a1e14`,
      fg: `#f6f0e2`,
      serif: !0,
    },
    eijudo: {
      key: `nihonbashi.mark.eijudo`,
      bg: `#f4e6d0`,
      fg: `#4a1a24`,
      serif: !0,
    },
  },
  Me = (e) => (t, n, r) => {
    (y(t, 0, 0, n, r, e.bg),
      (t.strokeStyle = e.fg),
      (t.lineWidth = 3),
      t.strokeRect(6, 6, n - 12, r - 12),
      h(t, g(e.key), n / 2, 18, r - 18, n * 0.62, e.fg, e.serif ? v() : p()));
  },
  Ne = {
    nori: {
      key: `trade.nori-tea.sign.nori`,
      bg: `#1c2a4a`,
      fg: `#f4efe4`,
      panels: 3,
    },
    katsuo: {
      key: `trade.katsuobushi.sign.katsuobushi`,
      bg: `#5a3418`,
      fg: `#f4efe4`,
      panels: 3,
    },
    hamono: {
      key: `trade.knives.sign.hamono`,
      bg: `#f0ece2`,
      fg: `#1a1a1a`,
      panels: 3,
    },
    washi: {
      key: `nihonbashi.noren.washi`,
      bg: `#e8e0cc`,
      fg: `#3a2a1a`,
      panels: 3,
    },
    tsukudani: {
      key: `nihonbashi.noren.tsukudani`,
      bg: `#20283a`,
      fg: `#f4efe4`,
      panels: 3,
    },
    kashi: {
      key: `trade.wagashi.sign.wagashi`,
      bg: `#4a2050`,
      fg: `#f4efe4`,
      panels: 4,
    },
    soba: {
      key: `trade.soba.sign.kisoba`,
      bg: `#1a1a1a`,
      fg: `#f4efe4`,
      panels: 3,
    },
  },
  Pe = (e) => (t, n, r) => {
    let i = n / e.panels;
    for (let n = 0; n < e.panels; n++) {
      y(t, n * i + 1.5, 0, i - 3, r, e.bg);
      let a = t.createLinearGradient(n * i, 0, (n + 1) * i, 0);
      (a.addColorStop(0, `rgba(0,0,0,0.12)`),
        a.addColorStop(0.5, `rgba(255,255,255,0.06)`),
        a.addColorStop(1, `rgba(0,0,0,0.12)`),
        (t.fillStyle = a),
        t.fillRect(n * i + 1.5, 0, i - 3, r));
    }
    y(t, 0, 0, n, 10, e.bg);
    let a = g(e.key),
      o = [...a];
    o.length === e.panels
      ? o.forEach((n, a) =>
          _(t, n, (a + 0.5) * i, r * 0.5, i * 0.8, r * 0.4, e.fg, v()),
        )
      : _(t, a, n / 2, r * 0.5, n * 0.84, r * 0.36, e.fg, v());
  },
  Fe = (e, t, n) => (r, i, a) => {
    (y(r, 0, 0, i, a, t),
      y(r, 0, 0, i, 8, `#c8a050`),
      h(r, g(e), i / 2, 18, a - 12, i * 0.6, n, v()));
  },
  Ie = (e, t) => (n, r, i) => {
    (y(n, 0, 0, r, i, `#f6f0e2`),
      y(n, 0, 0, r, 14, t),
      y(n, 0, i - 14, r, 14, t),
      h(n, g(e), r / 2, 22, i - 22, r * 0.7, `#1a1a1a`, v()));
  },
  Le = (e, t, n) => {
    (m(e, 0, 0, t, n, `#f6f6f2`, `#e6e6e0`),
      y(e, 0, 0, t, 14, `#1e4f9a`),
      _(
        e,
        g(`nihonbashi.works.title`),
        t / 2,
        7.5,
        t * 0.92,
        11,
        `#ffffff`,
        p(),
        `bold`,
      ),
      m(e, 16, 22, t - 32, n * 0.5, `#9fc8ea`, `#dceaf4`),
      y(e, 16, 22 + n * 0.5, t - 32, n * 0.12, `#5a8aa0`),
      (e.fillStyle = `#d8d2c4`),
      e.fillRect(t * 0.28, 22 + n * 0.38, t * 0.44, n * 0.13),
      (e.fillStyle = `#5a8aa0`));
    for (let r of [t * 0.4, t * 0.6])
      (e.beginPath(),
        e.ellipse(r, 22 + n * 0.51, t * 0.07, n * 0.08, 0, Math.PI, 0),
        e.fill());
    for (let t = 0; t < 6; t++) D(e, 30 + t * 18, 22 + n * 0.42, 9, `#6a9a5a`);
    for (let r = 0; r < 5; r++)
      D(e, t - 30 - r * 18, 22 + n * 0.42, 9, `#6a9a5a`);
    (_(
      e,
      g(`nihonbashi.works.vision`),
      t / 2,
      22 + n * 0.12,
      t * 0.6,
      12,
      `#1e3f6a`,
      v(),
      `bold`,
    ),
      y(e, 0, n - 16, t, 16, `#1e4f9a`),
      _(
        e,
        g(`nihonbashi.works.operator`),
        t / 2,
        n - 8,
        t * 0.9,
        10,
        `#ffffff`,
        p(),
        `bold`,
      ));
    for (let r = 0; r < t; r += 64)
      y(e, r, 14, 1.5, n - 30, `rgba(0,0,0,0.12)`);
  },
  Re = (e, t, n) => {
    (m(e, 0, 0, t, n, `#f4f4f0`, `#e4e4de`),
      y(e, 0, n * 0.7, t, n * 0.08, `#2a8a4a`));
    for (let r = 0; r < t; r += 64) y(e, r, 0, 2, n, `rgba(0,0,0,0.12)`);
    y(e, 0, n - 8, t, 8, `#9a9a94`);
  },
  ze = (e, t, n) => {
    (y(e, 0, 0, t, n, `#ffffff`),
      y(e, 0, 0, t, n * 0.14, `#1e4f9a`),
      _(
        e,
        g(`nihonbashi.works.notice`),
        t / 2,
        n * 0.07,
        t * 0.86,
        n * 0.08,
        `#ffffff`,
        p(),
        `bold`,
      ));
    for (let r = 0; r < 7; r++)
      (y(e, 10, n * 0.22 + r * n * 0.09, t * 0.28, 1.5, `#1a1a1a`),
        y(
          e,
          10 + t * 0.32,
          n * 0.22 + r * n * 0.09 - 5,
          t * 0.56 * (0.5 + ((r * 37) % 10) / 20),
          3,
          `#6a6a6a`,
        ));
    _(
      e,
      g(`nihonbashi.works.hours`),
      t / 2,
      n * 0.88,
      t * 0.86,
      n * 0.06,
      `#c8101a`,
      p(),
      `bold`,
    );
  },
  Be = (e, t, n) => {
    (y(e, 0, 0, t, n, `#ffffff`),
      (e.strokeStyle = `#1a1a1a`),
      (e.lineWidth = 3),
      e.strokeRect(3, 3, t - 6, n - 6),
      _(
        e,
        g(`nihonbashi.site.notice`),
        t / 2,
        n * 0.1,
        t * 0.86,
        n * 0.07,
        `#1a1a1a`,
        p(),
        `bold`,
      ));
    for (let r = 0; r < 9; r++)
      (y(e, 12, n * 0.2 + r * n * 0.075, t * 0.3, 1.5, `#1a1a1a`),
        y(
          e,
          12 + t * 0.34,
          n * 0.2 + r * n * 0.075 - 6,
          t * 0.5 * (0.5 + ((r * 37) % 10) / 20),
          3,
          `#6a6a6a`,
        ));
    e.strokeRect(t * 0.6, n * 0.62, t * 0.3, n * 0.32);
  },
  Ve = (e, t, n) => {
    (y(e, 0, 0, t, n, `#ffffff`),
      y(e, 0, 0, t, n * 0.2, `#f0d000`),
      _(
        e,
        g(`common.safety.koji-chu`),
        t / 2,
        n * 0.1,
        t * 0.8,
        n * 0.13,
        `#1a1a1a`,
        p(),
        `900`,
      ),
      D(e, t * 0.36, n * 0.42, t * 0.08, `#f0d000`),
      y(e, t * 0.4, n * 0.42, t * 0.2, n * 0.12, `#2a5aa8`),
      y(e, t * 0.56, n * 0.5, t * 0.08, n * 0.24, `#2a5aa8`),
      _(
        e,
        g(`common.safety.koji-owabi`),
        t / 2,
        n * 0.86,
        t * 0.92,
        n * 0.08,
        `#1a1a1a`,
        p(),
        `bold`,
      ));
  },
  He = (e) => (t, n, r) => {
    (y(t, 0, 0, n, r, `#1a1410`),
      (t.strokeStyle = `#c8a050`),
      (t.lineWidth = 4),
      t.strokeRect(4, 4, n - 8, r - 8),
      h(t, g(e), n / 2, 10, r - 10, n * 0.6, `#e8c870`, v()));
  },
  Ue = (e, t, n) => {
    (y(e, 0, 0, t, n, `#d0201a`),
      y(e, 0, 0, t, 10, `#ffffff`),
      h(
        e,
        g(`nihonbashi.shrine.nobori`),
        t / 2,
        16,
        n - 10,
        t * 0.6,
        `#ffffff`,
        v(),
      ));
  },
  We = (e, t, n) => {
    (y(e, 0, 0, t, n, `#1a1a1a`),
      ne(e, t / 2, n / 2, t * 0.5, `#fff0c0`, `#d8401a`),
      y(e, 0, 0, t, 8, `#1a1a1a`),
      y(e, 0, n - 8, t, 8, `#1a1a1a`));
  },
  Ge = (e, t, n) => {
    (y(e, 0, 0, t, n, `#1a1a1a`),
      m(e, 2, 8, t - 4, n - 16, `#fffaf0`, `#f2e6cc`));
    for (let r = 14; r < n - 10; r += 7)
      y(e, 2, r, t - 4, 1, `rgba(120,100,70,0.25)`);
    (y(e, 2, n - 22, t - 4, 8, `#c8101a`),
      h(
        e,
        g(`nihonbashi.chochin`),
        t / 2,
        14,
        n - 26,
        t * 0.58,
        `#1a1a1a`,
        v(),
      ));
  },
  Ke = (e) => (t, n, r) => {
    y(t, 0, 0, n, r, `#bdb6a8`);
    for (let e = 0; e < 40; e++)
      y(t, (e * 53) % n, (e * 97) % r, 2, 2, `rgba(60,56,50,0.25)`);
    ((t.strokeStyle = `rgba(70,64,56,0.5)`),
      (t.lineWidth = 3),
      t.strokeRect(8, 8, n - 16, r - 16),
      h(
        t,
        g(e),
        n / 2 + 1.5,
        18,
        r - 16,
        n * 0.56,
        `rgba(255,255,255,0.35)`,
        v(),
      ),
      h(t, g(e), n / 2, 16, r - 18, n * 0.56, `#3e3a32`, v()));
  },
  qe = (e, t, n) => {
    (y(e, 0, 0, t, n, `#f6f4ee`),
      y(e, 0, n - 8, t, 8, `#5a3a24`),
      (e.strokeStyle = `#6a4228`),
      (e.lineWidth = 6),
      e.beginPath(),
      e.arc(36, n * 0.62, 22, Math.PI, 0),
      e.stroke(),
      y(e, 10, n * 0.62, 52, 5, `#6a4228`),
      y(e, 14, n * 0.62 + 9, 44, 3, `#2a6ab0`),
      y(e, 20, n * 0.62 + 15, 32, 3, `#2a6ab0`),
      _(
        e,
        g(`nihonbashi.chikagai`),
        t * 0.6,
        n * 0.36,
        t * 0.66,
        n * 0.34,
        `#3a2a1c`,
        p(),
        `900`,
      ),
      _(
        e,
        g(`nihonbashi.chikagai.en`),
        t * 0.6,
        n * 0.72,
        t * 0.66,
        n * 0.15,
        `#2a5a9a`,
        p(),
        `bold`,
      ),
      (e.fillStyle = `#3a2a1c`));
    for (let r = 0; r < 4; r++)
      e.fillRect(t - 44 + r * 7, n * 0.24 + r * 7, 10, 3);
  },
  Je = (e, t) => (n, r, i) => {
    (y(n, 0, 0, r, i, `#fbfaf6`),
      y(n, 0, 0, r, 6, t),
      _(n, g(e), r / 2, i * 0.14, r * 0.86, i * 0.08, `#1a1a1a`, p(), `bold`));
    for (let e = 0; e < 8; e++)
      y(
        n,
        14,
        i * 0.3 + e * i * 0.075,
        (r - 28) * (0.55 + ((e * 41) % 10) / 22),
        2.5,
        `#4a4a4a`,
      );
    y(n, r * 0.5, i * 0.9, r * 0.38, 2.5, `#4a4a4a`);
  },
  Ye = (e, t, n) => {
    (y(e, 0, 0, t, n, `#fbf8ee`),
      (e.strokeStyle = `#c8101a`),
      (e.lineWidth = 3),
      e.strokeRect(3, 3, t - 6, n - 6),
      _(
        e,
        g(`nihonbashi.bettara.zuke`),
        t / 2,
        n * 0.38,
        t * 0.84,
        n * 0.34,
        `#c8101a`,
        v(),
        `900`,
      ),
      _(
        e,
        g(`nihonbashi.bettara.price`),
        t / 2,
        n * 0.76,
        t * 0.7,
        n * 0.2,
        `#1a1a1a`,
        p(),
        `bold`,
      ));
  },
  Xe = (e, t, n) => {
    let r = t / 8;
    for (let t = 0; t < 8; t++)
      y(e, t * r, 0, r, n, t % 2 ? `#f6f4ee` : `#c8101a`);
    y(e, 0, 0, t, 3, `#1a1a1a`);
  },
  Ze = (e, t, n) => {
    (y(e, 0, 0, t, n, `#4a3a26`),
      (e.strokeStyle = `#c8a050`),
      (e.lineWidth = 3),
      e.strokeRect(5, 5, t - 10, n - 10),
      (e.fillStyle = `#8a6a3a`),
      e.beginPath(),
      e.moveTo(t * 0.22, n * 0.5),
      e.lineTo(t * 0.78, n * 0.5),
      e.lineTo(t * 0.7, n * 0.62),
      e.lineTo(t * 0.3, n * 0.62),
      e.closePath(),
      e.fill());
    for (let r of [0.36, 0.5, 0.64])
      (y(e, t * r - 1, n * 0.2, 2, n * 0.3, `#8a6a3a`),
        y(e, t * r - 8, n * 0.24, 16, n * 0.1, `#a8885a`));
    _(
      e,
      g(`nihonbashi.joosten`),
      t / 2,
      n * 0.8,
      t * 0.84,
      n * 0.13,
      `#e8d6a0`,
      v(),
      `bold`,
    );
  },
  Qe = (e, t, n) => {
    (y(e, 0, 0, t, n, `#1a3a6a`),
      y(e, 0, 0, t, 6, `#f0b818`),
      y(e, 12, n * 0.3, 40, 26, `#ffffff`),
      y(e, 16, n * 0.34, 32, 9, `#1a3a6a`),
      D(e, 22, n * 0.3 + 28, 5, `#ffffff`),
      D(e, 42, n * 0.3 + 28, 5, `#ffffff`),
      _(
        e,
        g(`nihonbashi.bus.name`),
        t * 0.6,
        n * 0.36,
        t * 0.7,
        n * 0.3,
        `#ffffff`,
        p(),
        `bold`,
      ),
      _(
        e,
        g(`nihonbashi.bus.sub`),
        t * 0.6,
        n * 0.72,
        t * 0.7,
        n * 0.18,
        `#f0d890`,
        p(),
        `bold`,
      ));
  },
  $e = (e) => (t, n, r) => {
    (y(t, 0, 0, n, r, `#6e6a62`),
      (t.strokeStyle = `rgba(30,28,24,0.5)`),
      (t.lineWidth = 2),
      t.strokeRect(6, 6, n - 12, r - 12),
      h(t, g(e), n / 2, 14, r - 14, n * 0.5, `#e8e2d2`, v()));
  },
  et = [
    [`white`, `#f4f4f0`],
    [`black`, `#141414`],
    [`gold`, `#c8a050`],
    [`bronze`, `#6a5434`],
    [`steel`, `#8a9096`],
    [`vermilion`, `#d23a1e`],
    [`wood`, `#6a4428`],
    [`granite`, `#8a857c`],
    [`cream`, `#efe6d2`],
    [`red`, `#c8101a`],
    [`green`, `#2a5a3a`],
    [`navy`, `#1a2440`],
    [`warm`, `#ffe8b0`],
    [`glass`, `#3a4a52`],
    [`stone`, `#ece4d4`],
    [`stonedark`, `#b8ae98`],
    [`copper`, `#6a8a74`],
    [`indigo`, `#1c2a4a`],
    [`orange`, `#f08a1a`],
    [`blue`, `#1e4f9a`],
    [`leaf`, `#4a7040`],
    [`leafdark`, `#2e4a2a`],
    [`yellow`, `#f0c818`],
    [`verdigris`, `#52705f`],
  ],
  tt = (e, t, n) => {
    let r = t / et.length;
    et.forEach(([, t], i) => y(e, i * r, 0, r, n, t));
  },
  nt = {
    mitsu: ie,
    honkan: oe,
    taka: se,
    finglass: ue,
    louvre: de,
    stonegrid: fe,
    sheet: pe,
    darkstone: me,
  },
  rt = { mitsu: ae, taka: ce },
  it = {
    kimono: ge,
    autumn: _e,
    nori: ve,
    knives: ye,
    katsuo: be,
    washi: xe,
    tsukudani: Se,
    scroll: we,
    celadon: Te,
    painting: Ee,
    fruit: De,
    wagashi: Ce,
    books: Oe,
  },
  at = [
    ...Object.keys(nt).flatMap((e) =>
      [0, 1].map((t) => ({
        id: `skin.${e}.${t}`,
        w: 168,
        h: 168,
        dw: 256,
        paint: nt[e],
      })),
    ),
    ...Object.keys(rt).map((e) => ({
      id: `skin.${e}.arch`,
      w: 168,
      h: 168,
      dw: 256,
      paint: rt[e],
    })),
    { id: `skin.taka.first`, w: 168, h: 168, dw: 256, paint: le },
    ...Object.keys(it).map((e) => ({
      id: `vit.${e}`,
      w: 168,
      h: 168,
      dw: 256,
      paint: it[e],
    })),
    ...Object.entries(ke).map(([e, t]) => ({
      id: `mark.${e}`,
      w: 328,
      h: 62,
      paint: Ae(t),
    })),
    ...Object.entries(je).map(([e, t]) => ({
      id: `vmark.${e}`,
      w: 72,
      h: 288,
      paint: Me(t),
    })),
    ...Object.entries(Ne).map(([e, t]) => ({
      id: `noren.${e}`,
      w: 160,
      h: 72,
      paint: Pe(t),
    })),
    {
      id: `flag.yotsukoshi`,
      w: 48,
      h: 176,
      paint: Fe(`brand.yotsukoshi`, C, `#ffffff`),
    },
    {
      id: `flag.takayamaya`,
      w: 48,
      h: 176,
      paint: Fe(`brand.takayamaya`, `#00603e`, `#ffffff`),
    },
    {
      id: `tare.kyoto`,
      w: 64,
      h: 384,
      paint: Ie(`nihonbashi.ad.kyoto`, `#6a2a7a`),
    },
    {
      id: `tare.kyushu`,
      w: 64,
      h: 384,
      paint: Ie(`nihonbashi.ad.kyushu`, `#00603e`),
    },
    { id: `hoarding.c1`, w: 384, h: 128, paint: Le },
    { id: `hoarding`, w: 256, h: 96, paint: Re },
    { id: `koji`, w: 128, h: 176, paint: ze },
    { id: `kenchiku`, w: 128, h: 176, paint: Be },
    { id: `owabi`, w: 96, h: 176, paint: Ve },
    {
      id: `gaku.fukutoku`,
      w: 64,
      h: 160,
      paint: He(`nihonbashi.shrine.fukutoku`),
    },
    { id: `gaku.ebisu`, w: 64, h: 160, paint: He(`nihonbashi.shrine.ebisu`) },
    { id: `nobori`, w: 48, h: 224, paint: Ue },
    { id: `lantern`, w: 48, h: 64, paint: We },
    { id: `chochin`, w: 56, h: 112, paint: Ge },
    {
      id: `pillar.kanji`,
      w: 64,
      h: 192,
      paint: Ke(`nihonbashi.kyobashi.kanji`),
    },
    { id: `pillar.kana`, w: 64, h: 192, paint: Ke(`nihonbashi.kyobashi.kana`) },
    {
      id: `monument.kabuki`,
      w: 64,
      h: 224,
      paint: $e(`nihonbashi.kyobashi.kabuki`),
    },
    {
      id: `monument.daikon`,
      w: 64,
      h: 224,
      paint: $e(`nihonbashi.kyobashi.daikon`),
    },
    { id: `chikagai`, w: 256, h: 72, paint: qe },
    {
      id: `notice.kyugyo`,
      w: 128,
      h: 176,
      paint: Je(`nihonbashi.notice.kyugyo`, `#6a1a24`),
    },
    {
      id: `notice.opening`,
      w: 128,
      h: 176,
      paint: Je(`nihonbashi.notice.opening`, `#1a1a1a`),
    },
    {
      id: `tare.closing`,
      w: 64,
      h: 384,
      paint: Ie(`nihonbashi.ad.closing`, `#1e1e22`),
    },
    { id: `bettara`, w: 96, h: 64, paint: Ye },
    { id: `kohaku`, w: 128, h: 32, paint: Xe },
    { id: `joosten`, w: 128, h: 96, paint: Ze },
    { id: `busterm`, w: 320, h: 80, paint: Qe },
    { id: `swatches`, w: 768, h: 16, paint: tt },
  ],
  ot = 4,
  st = (() => {
    let e = new Map(),
      t = [...at].sort((e, t) => t.h - e.h || t.w - e.w),
      n = 0,
      r = 0,
      i = 0,
      a = [];
    for (let o of t) {
      let t = o.w + 8,
        s = o.h + 8,
        c = a.find((e) => e.w >= t && i - e.used >= s);
      if (c) {
        (e.set(o.id, [c.x + ot, r + c.used + ot, o.w, o.h]), (c.used += s));
        continue;
      }
      (n + t > 2048 && ((n = 0), (r += i), (i = 0), (a.length = 0)),
        (i ||= s),
        e.set(o.id, [n + ot, r + ot, o.w, o.h]),
        a.push({ x: n, w: t, used: s }),
        (n += t));
    }
    if (r + i > te)
      throw Error(`[nihonbashi] atlas overflow: ${r + i} > ${te}`);
    return e;
  })(),
  ct =
    Math.ceil(
      Math.max(...[...st.values()].map(([, e, , t]) => e + t + ot)) / 64,
    ) * 64;
function P(e, t = 1) {
  let n = st.get(e);
  if (!n) throw Error(`[nihonbashi] no atlas cell '${e}'`);
  let [r, i, a, o] = n;
  return {
    u0: (r + t) / T,
    u1: (r + a - t) / T,
    v1: 1 - (i + t) / ct,
    v0: 1 - (i + o - t) / ct,
  };
}
function lt(e) {
  let t = et.findIndex(([t]) => t === e);
  if (t < 0) throw Error(`[nihonbashi] no swatch '${e}'`);
  let [n, r, i, a] = st.get(`swatches`),
    o = i / et.length;
  return { u: (n + (t + 0.5) * o) / T, v: 1 - (r + a / 2) / ct };
}
function* ut(e, t, n) {
  (b(e, t),
    t.save(),
    t.setTransform(n, 0, 0, n, 0, 0),
    y(t, 0, 0, T, ct, `#202020`),
    t.restore());
  for (let e of at) {
    let [i, a, o, s] = st.get(e.id);
    (t.save(),
      t.setTransform(n, 0, 0, n, i * n, a * n),
      t.beginPath(),
      t.rect(0, 0, o, s),
      t.clip());
    let c = e.dw ? o / e.dw : 1;
    (t.scale(c, c),
      e.paint(t, o / c, s / c, new r(dt(e.id))),
      t.restore(),
      yield);
  }
}
function dt(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    t = Math.imul(t ^ e.charCodeAt(n), 16777619);
  return t >>> 0;
}
function ft(e = 8192) {
  let t = new c(e, e * 1.5);
  return ((t.remap = o.SIGN), { body: new c(e, e * 1.5), sign: t });
}
function F(e, t) {
  switch (t) {
    case 0:
      return {
        px: e.x1,
        pz: e.z0,
        tx: -1,
        tz: 0,
        nx: 0,
        nz: -1,
        L: e.x1 - e.x0,
      };
    case 1:
      return {
        px: e.x1,
        pz: e.z1,
        tx: 0,
        tz: -1,
        nx: 1,
        nz: 0,
        L: e.z1 - e.z0,
      };
    case 2:
      return { px: e.x0, pz: e.z1, tx: 1, tz: 0, nx: 0, nz: 1, L: e.x1 - e.x0 };
    default:
      return {
        px: e.x0,
        pz: e.z0,
        tx: 0,
        tz: 1,
        nx: -1,
        nz: 0,
        L: e.z1 - e.z0,
      };
  }
}
function I(e, t, n, r) {
  let i = Math.sin(n),
    a = -Math.cos(n),
    o = a,
    s = -i;
  return {
    px: e - (r / 2) * o,
    pz: t - (r / 2) * s,
    tx: o,
    tz: s,
    nx: i,
    nz: a,
    L: r,
  };
}
var L = (e, t, n) => [e.px + e.tx * t + e.nx * n, e.pz + e.tz * t + e.nz * n],
  R = (e, t, n, r, i, a) => e.setInfo(t, (n & 15) | (r << 4), i & 255, a & 255);
function z(e, t, n, r, i, a, o, s, c, l, u) {
  e.wall(
    t.px + t.tx * r + t.nx * n,
    t.pz + t.tz * r + t.nz * n,
    t.tx,
    t.tz,
    i - r,
    a,
    o,
    s,
    c,
    l,
    u,
  );
}
function pt(e, t, n, r, i, a, o, s, c, l) {
  i - r < 0.05 ||
    o - a < 0.05 ||
    z(
      e,
      t,
      n,
      r,
      i,
      a,
      o,
      0,
      Math.max(1, Math.round((i - r) / s)),
      (a - l) / c,
      (o - l) / c,
    );
}
function B(e, t, n, r, i, a, o, s) {
  let c = t.px + t.tx * r + t.nx * n,
    l = t.pz + t.tz * r + t.nz * n,
    u = t.px + t.tx * i + t.nx * n,
    d = t.pz + t.tz * i + t.nz * n;
  e.quad4(
    c,
    a,
    l,
    u,
    a,
    d,
    u,
    o,
    d,
    c,
    o,
    l,
    t.nx,
    0,
    t.nz,
    s.u0,
    s.v0,
    s.u1,
    s.v0,
    s.u1,
    s.v1,
    s.u0,
    s.v1,
  );
}
function V(e, t, n, r, i, a, o, s) {
  let c = lt(s);
  e.solidBox(t, n, r, i, a, o, c.u, c.v);
}
function H(e, t, n, r, i, a, o, s, c) {
  let [l, u] = L(t, n, r),
    d = Math.abs(t.tx) * i + Math.abs(t.nx) * a,
    f = Math.abs(t.tz) * i + Math.abs(t.nz) * a;
  V(e, l - d, o, u - f, l + d, s, u + f, c);
}
function mt(e) {
  let t = lt(e);
  return { u0: t.u, u1: t.u, v0: t.v, v1: t.v };
}
function ht(e, t, n, r, i, a, o, s) {
  let c = lt(s);
  e.cylinder(t, n, r, i, a, o, 1, !1, c.u, c.v);
}
var gt = (e, t) => {
    let n =
      Math.imul(e ^ 2654435769, 2246822507) ^
      Math.imul(t + 2135587861, 3266489909);
    return ((n ^= n >>> 13), (Math.imul(n, 668265261) >>> 0) / 4294967296);
  },
  _t = {
    mitsu: 0.42,
    honkan: 0.3,
    taka: 0.4,
    finglass: 0.45,
    louvre: 0.6,
    stonegrid: 0.4,
    sheet: 0.25,
    darkstone: 0.5,
  };
function vt(e, t, n, r, i, a) {
  let { body: c, sign: l } = e,
    u = r + n.h,
    d = u - 1.1,
    f = r + n.gH,
    p = r + (n.skinTop ?? n.h - 1.6),
    m = n.hours ? s(n.hours) : 0;
  a.push({ x0: n.x0, z0: n.z0, x1: n.x1, z1: n.z1, h: r + n.h });
  for (let a = 0; a < 4; a++) {
    let s = F(n, a),
      h = n.faces.includes(a),
      g = a === n.faces[0];
    if (!h) {
      (c.setTint(n.wallTint),
        R(c, S.SIDE, 3, o.RES, i + a, 0),
        pt(c, s, 0, 0, s.L, 0, f, 3.2, 3.2, 0),
        R(c, n.wall, n.wall === S.CURTAIN ? 3 : 1, n.wallMode, i + a, 90),
        pt(c, s, 0, 0, s.L, f, d, 3.2, n.fh, f),
        R(c, S.CONCRETE, 1, o.NONE, 0, 0),
        pt(c, s, 0, 0, s.L, d, u, 3.2, 3.2, d));
      continue;
    }
    (r + (n.rustic && g ? Math.min(n.rustic, n.gH) : 0.45),
      c.setTint(n.rustic ? 12103842 : 9078400),
      R(c, S.STONE, 1, o.NONE, 0, 0),
      n.rustic && g
        ? z(c, s, 0, 0, s.L, 0, r + 0.6, 0, s.L / 3.2, 0, 0.2)
        : z(c, s, 0, 0, s.L, 0, r + 0.45, 0, s.L / 3.2, 0, 0.14));
    let _ = Math.max(1, Math.round(s.L / 3.6)),
      v = s.L / _,
      y = g
        ? Math.min(
            _ - 1,
            n.door == null
              ? Math.floor(_ / 2 + (gt(i, a) > 0.5 ? 0 : -0.5))
              : Math.floor(n.door * _),
          )
        : -1,
      b = n.vitrines ?? [],
      x = (e) =>
        g
          ? n.shops?.find((t) => Math.min(_ - 1, Math.floor(t.s * _)) === e)
          : void 0,
      C = r + (n.rustic && g ? 0.6 : 0.45),
      w = Math.min(f - 0.5, C + 3.3);
    for (let e = 0; e < _; e++) {
      let r = e * v + (n.oldFront ? 0.08 : 0.16),
        a = (e + 1) * v - (n.oldFront ? 0.08 : 0.16);
      if (
        (c.setTint(n.oldFront ? 3811868 : n.rustic ? 13156012 : 14209734),
        R(c, n.oldFront ? S.BOARDS : S.STONE_PLAIN, 1, o.NONE, 0, 0),
        z(c, s, 0, e * v, r, C, f, 0, 0.1, 0, 1),
        z(c, s, 0, a, (e + 1) * v, C, f, 0, 0.1, 0, 1),
        n.closed && g)
      ) {
        (c.setTint(16777215),
          R(c, S.SHUTTER, 1, o.NONE, 0, 0),
          z(c, s, 0, r, a, C, w, 0, 1, 0, 1),
          e === y &&
            (l.setTint(16777215).setInfo(0, 0, 30, 0),
            B(
              l,
              s,
              0.03,
              (r + a) / 2 - 0.42,
              (r + a) / 2 + 0.42,
              C + 1,
              C + 1 + 1.155,
              P(n.closed, 2),
            )));
        continue;
      }
      let u = x(e);
      if (u && e !== y) {
        if (
          (u.vit
            ? (l
                .setTint(16777215)
                .setInfo(
                  0,
                  i + e,
                  Math.round(Math.min(170, (n.bright ?? 120) * 0.72)),
                  0,
                ),
              B(l, s, 0.02, r, a, C, w, P(`vit.${u.vit}`, 2)))
            : (c.setTint(16777215),
              R(
                c,
                u.room ?? n.room ?? S.BOUTIQUE,
                1,
                o.SHOP,
                m,
                n.bright ?? 120,
              ),
              z(c, s, 0, r, a, C, w, 0, 1, 0, 1)),
          u.noren && t && Tt(t, s, r, a, w - 0.02, u.noren),
          u.mark)
        ) {
          let t = Math.min(a - r + 0.2, 3.6),
            n = (62 / 328) * t;
          (l.setTint(16777215).setInfo(0, i + e, 140, 0),
            B(
              l,
              s,
              0.07,
              (r + a) / 2 - t / 2,
              (r + a) / 2 + t / 2,
              f - 0.3 - n / 2,
              f - 0.3 + n / 2,
              P(`mark.${u.mark}`, 2),
            ));
        }
        continue;
      }
      if (e === y) {
        (c.setTint(16777215),
          n.oldFront
            ? R(c, S.LATTICE_DOOR, 1, o.SHOP, m, Math.min(200, n.bright ?? 120))
            : R(
                c,
                S.GLASS_DOOR,
                1,
                o.SHOP,
                m,
                Math.min(200, (n.bright ?? 120) - 20),
              ),
          z(c, s, 0, r, a, C, w, 0, 1, 0, 1),
          n.canopy &&
            V(
              l.setTint(16777215).setInfo(0, 0, 0, 0),
              ...xt(s, r - 0.3, a + 0.3, w + 0.05, 1.4, n.canopy),
            ),
          n.noren && t && Tt(t, s, r, a, w - 0.02, n.noren));
        continue;
      }
      let d =
        b.length && (n.allVitrines || (e + +(gt(i, e) > 0.7)) % 2 == 0)
          ? b[(n.allVitrines ? e : e >> 1) % b.length]
          : null;
      d
        ? (l
            .setTint(16777215)
            .setInfo(
              0,
              i + e,
              Math.round(Math.min(170, (n.bright ?? 120) * 0.72)),
              0,
            ),
          B(l, s, 0.02, r, a, C, w, P(`vit.${d}`, 2)))
        : (c.setTint(16777215),
          R(
            c,
            n.oldFront && e % 2 ? S.LATTICE_WIN : (n.room ?? S.BOUTIQUE),
            1,
            o.SHOP,
            m,
            n.bright ?? 120,
          ),
          z(c, s, 0, r, a, C, w, 0, 1, 0, 1));
    }
    if (
      (w < f - 0.65 &&
        (c.setTint(n.rustic ? 13156012 : 13617340),
        R(c, S.STONE_PLAIN, 1, o.NONE, 0, 0),
        z(
          c,
          s,
          0.01,
          0,
          s.L,
          w,
          f - 0.6,
          0,
          s.L / 3.2,
          0,
          (f - 0.6 - w) / 3.2,
        )),
      n.oldFront
        ? (c.setTint(2760728),
          R(c, S.BOARDS, 1, o.NONE, 0, 0),
          z(c, s, 0, 0, s.L, f - 0.6, f, 0, s.L / 3.2, 0, 0.2),
          wt(c, s, f + 0.05, 0.9))
        : (c.setTint(n.rustic ? 10130052 : 2762790),
          R(c, S.STONE_PLAIN, 1, o.NONE, 0, 0),
          z(c, s, 0, 0, s.L, f - 0.6, f, 0, s.L / 3.2, 0, 0.2)),
      n.belt && Ct(l, s, f, 0.35, n.corniceTint ?? 14208180),
      n.colonnade && g && Dt(e, s, n, r, i),
      n.skin && (!n.skinPrimaryOnly || g))
    ) {
      let e = Math.max(1, Math.round(s.L / 3.4)),
        t = s.L / e,
        r = Math.max(1, Math.round((p - f) / n.fh)),
        d = (p - f) / r;
      l.setTint(n.skinTint ?? 16777215);
      for (let o = 0; o < r; o++)
        for (let c = 0; c < e; c++) {
          let e = +(gt(i + o * 31, c + a * 17) > 0.5),
            u = o === r - 1 && bt(n.skin),
            p = o === 0 && n.skin === `taka` && g;
          (l.setInfo(
            0,
            (i + o * 23) & 255,
            Math.round(n.level * _t[n.skin]),
            0,
          ),
            B(
              l,
              s,
              0.01,
              c * t,
              (c + 1) * t,
              f + o * d,
              f + (o + 1) * d,
              P(
                u
                  ? `skin.${n.skin}.arch`
                  : p
                    ? `skin.taka.first`
                    : `skin.${n.skin}.${e}`,
                3,
              ),
            ));
        }
      (c.setTint(n.wallTint),
        R(c, S.STONE_PLAIN, 1, o.NONE, 0, 0),
        z(c, s, 0, 0, s.L, p, u, 0, s.L / 3.2, 0, 1));
    } else
      (c.setTint(n.wallTint),
        R(c, n.wall, n.wall === S.CURTAIN ? 3 : 1, n.wallMode, i + a, 120),
        pt(c, s, 0, 0, s.L, f, d, n.wall === S.DEPATO ? 2.4 : 3.2, n.fh, f),
        R(c, S.CONCRETE, 1, o.NONE, 0, 0),
        pt(c, s, 0, 0, s.L, d, u, 3.2, 3.2, d));
    if (
      (n.cornice && St(l, s, p, n.cornice, n.corniceTint ?? 14208180),
      n.mark && (n.markFascia ?? g))
    ) {
      let e = Math.min(s.L * 0.62, n.oldFront ? 4.6 : 9),
        t = (62 / 328) * e,
        r = s.L / 2;
      (l.setTint(16777215).setInfo(0, i, 150, 0),
        B(
          l,
          s,
          0.06,
          r - e / 2,
          r + e / 2,
          f - 0.55 + (0.5 - t) / 2,
          f - 0.55 + (0.5 + t) / 2,
          P(`mark.${n.mark}`, 2),
        ));
    }
    if (n.mark && n.markCrown && g) {
      let e = Math.min(s.L * 0.7, 14),
        t = (62 / 328) * e,
        r = s.L / 2,
        a = Math.min(u - 0.25 - t, p - 0.6 - t);
      (l.setTint(16777215).setInfo(0, i, 175, 0),
        B(
          l,
          s,
          (n.cornice ?? 0) + 0.12,
          r - e / 2,
          r + e / 2,
          a,
          a + t,
          P(`mark.${n.mark}`, 2),
        ));
    }
    if (n.vmark && g) {
      let e = Math.min(p - f - 1.2, n.oldFront ? 8 : 10),
        t = e / 4,
        r = (n.vmarkAt ?? 0) * s.L + 0.5;
      (l.setTint(16777215).setInfo(0, i, 180, 0),
        B(
          l,
          s,
          0.35,
          r,
          r + t,
          f + 0.8,
          f + 0.8 + e,
          P(`vmark.${n.vmark}`, 2),
        ));
      let [a, o] = L(s, r + t / 2, 0.18);
      V(
        l.setInfo(0, 0, 0, 0),
        a - 0.06,
        f + 0.6,
        o - 0.06,
        a + 0.06,
        f + 1.2 + e,
        o + 0.06,
        `steel`,
      );
    }
    if (n.tare && n.tare.side === a) {
      let e = 1.6,
        t = Math.min(p - f - 2, 16),
        r = s.L * n.tare.s;
      (l.setTint(16777215).setInfo(0, i, 110, 0),
        B(
          l,
          s,
          (n.cornice ? 0.05 : 0) + 0.25,
          r - e / 2,
          r + e / 2,
          p - 0.8 - t,
          p - 0.8,
          P(`tare.${n.tare.id}`, 2),
        ));
    }
    n.flags &&
      g &&
      Et(l, s, f, n.flags.id, n.flags.n, y >= 0 ? (y + 0.5) * v : s.L / 2);
  }
  if (
    (n.tower && Ot(e, n.tower, u, i + 101, r, a),
    c.setTint(12104876),
    R(c, S.ROOF_FLAT, 1, o.NONE, 0, 0),
    c.hrect(
      n.x0,
      n.z0,
      n.x1,
      n.z1,
      d,
      !0,
      0,
      0,
      (n.x1 - n.x0) / 6,
      (n.z1 - n.z0) / 6,
    ),
    R(c, S.CONCRETE, 1, o.NONE, 0, 0),
    yt(c, n, u),
    n.pavilion)
  ) {
    let e = n.pavilion,
      t = F(n, n.faces[0]),
      [r, a] = L(t, t.L / 2, -e.d / 2 - 1.5),
      s = (Math.abs(t.tx) * e.w) / 2 + (Math.abs(t.nx) * e.d) / 2,
      u = (Math.abs(t.tz) * e.w) / 2 + (Math.abs(t.nz) * e.d) / 2;
    (c.setTint(e.tint),
      R(c, S.STONE_WIN, 1, o.OFFICE, i, 60),
      c.box(
        r - s,
        d,
        a - u,
        r + s,
        d + e.h,
        a + u,
        Math.max(1, Math.round(e.w / 3.2)),
        Math.max(1, Math.round(e.h / 3.4)),
        1,
        15,
      ),
      R(c, S.KAWARA, 1, o.NONE, 0, 0),
      c.setTint(6978156),
      c.hrect(
        r - s - 0.4,
        a - u - 0.4,
        r + s + 0.4,
        a + u + 0.4,
        d + e.h,
        !0,
        0,
        0,
        1,
        1,
      ),
      V(
        l.setTint(6982260).setInfo(0, 0, 0, 0),
        r - 0.12,
        d + e.h,
        a - 0.12,
        r + 0.12,
        d + e.h + 3.2,
        a + 0.12,
        `copper`,
      ));
  } else if (!n.tower) {
    let e = Math.min(6, (n.x1 - n.x0) * 0.4),
      t = Math.min(5, (n.z1 - n.z0) * 0.4),
      r = (n.x0 + n.x1) / 2 + (gt(i, 9) - 0.5) * 2,
      a = (n.z0 + n.z1) / 2 + (gt(i, 7) - 0.5) * 2;
    (R(c, S.LOUVRE, 1, o.NONE, 0, 0),
      c.box(
        r - e / 2,
        d,
        a - t / 2,
        r + e / 2,
        d + 2.6,
        a + t / 2,
        2,
        1,
        1,
        31,
      ));
  }
}
function yt(e, t, n) {
  let r = 0.3;
  (e.hrect(t.x0, t.z0, t.x1, t.z0 + r, n, !0, 0, 0, 1, 0.1),
    e.hrect(t.x0, t.z1 - r, t.x1, t.z1, n, !0, 0, 0, 1, 0.1),
    e.hrect(t.x0, t.z0 + r, t.x0 + r, t.z1 - r, n, !0, 0, 0, 0.1, 1),
    e.hrect(t.x1 - r, t.z0 + r, t.x1, t.z1 - r, n, !0, 0, 0, 0.1, 1));
}
var bt = (e) => e === `mitsu` || e === `taka`;
function xt(e, t, n, r, i, a) {
  let o = e.px + e.tx * t,
    s = e.pz + e.tz * t,
    c = e.px + e.tx * n + e.nx * i,
    l = e.pz + e.tz * n + e.nz * i;
  return [
    Math.min(o, c),
    r,
    Math.min(s, l),
    Math.max(o, c),
    r + 0.22,
    Math.max(s, l),
    a,
  ];
}
function St(e, t, n, r, i) {
  e.setTint(i).setInfo(0, 0, 0, 0);
  let [a, o] = L(t, -r * 0.6, 0),
    [s, c] = L(t, t.L + r * 0.6, r);
  V(
    e,
    Math.min(a, s),
    n,
    Math.min(o, c),
    Math.max(a, s),
    n + 0.55,
    Math.max(o, c),
    `stone`,
  );
  let [l, u] = L(t, -r * 0.3, 0),
    [d, f] = L(t, t.L + r * 0.3, r * 0.55);
  (e.setTint(Math.max(0, i - 1315860)),
    V(
      e,
      Math.min(l, d),
      n - 0.35,
      Math.min(u, f),
      Math.max(l, d),
      n,
      Math.max(u, f),
      `stone`,
    ),
    e.setTint(16777215));
}
function Ct(e, t, n, r, i) {
  e.setTint(i).setInfo(0, 0, 0, 0);
  let [a, o] = L(t, 0, 0),
    [s, c] = L(t, t.L, r);
  (V(
    e,
    Math.min(a, s),
    n,
    Math.min(o, c),
    Math.max(a, s),
    n + 0.3,
    Math.max(o, c),
    `stone`,
  ),
    e.setTint(16777215));
}
function wt(e, t, n, r) {
  (e.setTint(5921374), R(e, S.KAWARA, 1, o.NONE, 0, 0));
  let [i, a] = L(t, 0, 0),
    [s, c] = L(t, t.L, 0),
    [l, u] = L(t, t.L, r),
    [d, f] = L(t, 0, r);
  e.quad4(
    d,
    n,
    f,
    l,
    n,
    u,
    s,
    n + 0.45,
    c,
    i,
    n + 0.45,
    a,
    t.nx * 0.45,
    0.9,
    t.nz * 0.45,
    0,
    0,
    t.L / 2,
    0,
    t.L / 2,
    1,
    0,
    1,
  );
}
function Tt(e, t, n, r, i, a) {
  let o = e.sign,
    s = Math.min(r - n, 2.4),
    c = (n + r) / 2;
  (o.setTint(16777215).setInfo(0, 0, 18, 0),
    B(o, t, 0.12, c - s / 2, c + s / 2, i - 1.05, i, P(`noren.${a}`, 2)),
    B(
      o,
      {
        px: t.px + t.tx * (c + s / 2) + t.nx * 0.115,
        pz: t.pz + t.tz * (c + s / 2) + t.nz * 0.115,
        tx: -t.tx,
        tz: -t.tz,
        nx: -t.nx,
        nz: -t.nz,
        L: s,
      },
      0,
      0,
      s,
      i - 1.05,
      i,
      mt(`indigo`),
    ),
    o.setInfo(0, 0, 0, 0),
    H(o, t, c, 0.12, s / 2 + 0.08, 0.02, i, i + 0.04, `wood`));
}
function Et(e, t, n, r, i, a) {
  let o = P(`flag.${r}`, 2);
  for (let r = 0; r < i; r++) {
    let s = a + (r - (i - 1) / 2) * 2.2,
      [c, l] = L(t, s, 0.1);
    e.setTint(16777215).setInfo(0, 0, 0, 0);
    let [u, d] = L(t, s, 1.6);
    V(
      e,
      Math.min(c, u) - 0.03,
      n + 2.95,
      Math.min(l, d) - 0.03,
      Math.max(c, u) + 0.03,
      n + 3.05,
      Math.max(l, d) + 0.03,
      `gold`,
    );
    let f = I(...L(t, s, 0.9), Math.atan2(t.tx, -t.tz), 1.4);
    (e.setInfo(0, 0, 40, 0),
      B(e, f, 0, 0, 1.4, n + 0.6, n + 2.95, o),
      B(
        e,
        {
          px: f.px + f.tx * 1.4,
          pz: f.pz + f.tz * 1.4,
          tx: -f.tx,
          tz: -f.tz,
          nx: -f.nx,
          nz: -f.nz,
          L: 1.4,
        },
        0,
        0,
        1.4,
        n + 0.6,
        n + 2.95,
        o,
      ));
  }
}
function Dt(e, t, n, r, i) {
  let a = n.colonnade,
    o = e.sign,
    s = r + 0.6,
    c = r + a.top,
    l = a.n,
    u = t.L / l;
  o.setTint(13814456).setInfo(0, 0, 0, 0);
  for (let e = 0; e < l; e++) {
    let [n, i] = L(t, (e + 0.5) * u, a.depth);
    (V(
      o,
      n - a.r * 1.25,
      r,
      i - a.r * 1.25,
      n + a.r * 1.25,
      s + 0.35,
      i + a.r * 1.25,
      `stone`,
    ),
      ht(o, n, i, a.r, s + 0.35, c - 1.1, 16, `stone`),
      ht(o, n, i, a.r * 1.08, c - 1.1, c - 0.55, 12, `stonedark`),
      V(
        o,
        n - a.r * 1.35,
        c - 0.55,
        i - a.r * 1.35,
        n + a.r * 1.35,
        c - 0.25,
        i + a.r * 1.35,
        `stone`,
      ));
  }
  let [d, f] = L(t, 0, 0),
    [p, m] = L(t, t.L, a.depth + a.r * 1.5);
  V(
    o,
    Math.min(d, p),
    c - 0.25,
    Math.min(f, m),
    Math.max(d, p),
    c + 1.4,
    Math.max(f, m),
    `stone`,
  );
  let [h, g] = L(t, -0.3, 0),
    [_, v] = L(t, t.L + 0.3, a.depth + a.r * 1.5 + 0.5);
  (V(
    o,
    Math.min(h, _),
    c + 1.4,
    Math.min(g, v),
    Math.max(h, _),
    c + 1.9,
    Math.max(g, v),
    `stone`,
  ),
    o.setTint(16777215));
}
function Ot(e, t, n, r, i, a) {
  let { body: s, sign: c } = e,
    l = i + t.h,
    u = t.crown ? 6 : 1.4;
  a.push({ x0: t.x0, z0: t.z0, x1: t.x1, z1: t.z1, h: l });
  for (let e = 0; e < 4; e++) {
    let i = F(t, e),
      a = 4.2;
    if (t.skin) {
      let o = Math.max(1, Math.round(i.L / 3.6)),
        s = i.L / o,
        d = Math.max(1, Math.round((l - u - n) / a)),
        f = (l - u - n) / d;
      c.setTint(t.tint ?? 16777215);
      for (let a = 0; a < d; a++)
        for (let l = 0; l < o; l++) {
          let o = +(gt(r + a * 13, l + e * 7) > 0.5);
          (c.setInfo(0, (r + a * 7) & 255, Math.round(t.level * _t[t.skin]), 0),
            B(
              c,
              i,
              0.01,
              l * s,
              (l + 1) * s,
              n + a * f,
              n + (a + 1) * f,
              P(`skin.${t.skin}.${o}`, 3),
            ));
        }
    } else
      (s.setTint(t.tint ?? 13161692),
        R(
          s,
          t.wall ?? S.CURTAIN,
          t.wall && t.wall !== S.CURTAIN ? 1 : 3,
          o.OFFICE,
          r + e,
          t.level,
        ),
        pt(s, i, 0, 0, i.L, n, l - u, 3.2, a, n));
    (s.setTint(t.crown ? 15265006 : 13159630),
      R(s, t.crown ? S.LOUVRE : S.STONE_PLAIN, 1, o.NONE, 0, 0),
      z(
        s,
        i,
        -0.2,
        0,
        i.L,
        l - u,
        l,
        0,
        Math.max(1, i.L / 3.2),
        0,
        t.crown ? u / 3 : 0.5,
      ),
      t.crown &&
        (c.setTint(16777215).setInfo(0, r, 120, 0),
        B(c, i, 0.05, 0, i.L, l - u - 0.35, l - u, mt(`warm`))));
  }
  (s.setTint(12104876),
    R(s, S.ROOF_FLAT, 1, o.NONE, 0, 0),
    s.hrect(
      t.x0,
      t.z0,
      t.x1,
      t.z1,
      l - 0.6,
      !0,
      0,
      0,
      (t.x1 - t.x0) / 6,
      (t.z1 - t.z0) / 6,
    ),
    R(s, S.CONCRETE, 1, o.NONE, 0, 0),
    yt(s, t, l),
    c.setTint(16777215).setInfo(2, r & 255, 255, 0));
  let d = (t.x0 + t.x1) / 2,
    f = (t.z0 + t.z1) / 2;
  V(c, d - 0.25, l, f - 0.25, d + 0.25, l + 0.5, f + 0.25, `red`);
}
var kt = [
  { id: `muromachi`, test: (e, t) => e >= 140 && t < -190 },
  { id: `bridge`, test: (e, t) => e >= 140 && t < -5 },
  { id: `kyobashi`, test: (e) => e >= 140 },
  { id: `yaesu`, test: () => !0 },
];
function U(e, t, n, r) {
  let i = (e + n) / 2,
    a = (t + r) / 2;
  for (let e = 0; e < kt.length; e++) if (kt[e].test(i, a)) return e;
  return kt.length - 1;
}
var W = 0,
  G = 1,
  K = 2,
  q = 3,
  J = { wall: S.STONE_WIN, wallTint: 14866628, wallMode: o.OFFICE },
  Y = { wall: S.CURTAIN, wallTint: 13161692, wallMode: o.OFFICE },
  At = { wall: S.DEPATO, wallTint: 15129800, wallMode: o.LIT },
  jt = { wall: S.ZWIN, wallTint: 12098156, wallMode: o.OFFICE },
  X = (e, t, n, r, i, a, o) => ({
    id: e,
    x0: t,
    z0: n,
    x1: r,
    z1: i,
    faces: a,
    ...o,
  }),
  Z = Math.PI,
  Mt = [
    X(`yotsukoshi-shinkan`, 182.6, -213.4, 231.1, -201.6, [G, K], {
      ...At,
      h: 40,
      gH: 5.6,
      fh: 4.2,
      skin: `stonegrid`,
      skinTint: 15788248,
      level: 90,
      mark: `yotsukoshi`,
      markFascia: !0,
      vitrines: [`autumn`, `kimono`],
      room: S.BOUTIQUE,
      bright: 150,
      hours: `10:00-19:00`,
    }),
    X(`yotsukoshi`, 182.6, -251.2, 231.1, -213.8, [G, W], {
      ...At,
      wallTint: 14536884,
      h: 31,
      gH: 6.2,
      fh: 3.9,
      skin: `mitsu`,
      level: 150,
      rustic: 6.2,
      belt: !0,
      cornice: 1.3,
      corniceTint: 14866108,
      mark: `yotsukoshi`,
      markCrown: !0,
      markFascia: !1,
      door: 0.5,
      vitrines: [`kimono`, `autumn`],
      room: S.BOUTIQUE,
      bright: 160,
      canopy: `bronze`,
      flags: { id: `yotsukoshi`, n: 2 },
      tare: { id: `kyoto`, side: W, s: 0.3 },
      hours: `10:00-19:00`,
      pavilion: { w: 10, d: 9, h: 17, tint: 14536884 },
    }),
    X(`bank`, 182.6, -292.6, 228.6, -257.2, [G, K], {
      ...J,
      wallTint: 12893872,
      h: 31,
      gH: 4.6,
      fh: 4.2,
      skin: `honkan`,
      level: 70,
      rustic: 4.6,
      cornice: 1.1,
      corniceTint: 13683388,
      colonnade: { n: 10, r: 0.78, depth: 1.5, top: 23 },
      door: 0.5,
      vitrines: [],
      room: S.LOBBY_GLASS,
      bright: 90,
      hours: `9:00-17:00`,
    }),
    X(`mitsui-tower-base`, 182.6, -299.6, 231.1, -293, [W, G], {
      ...Y,
      h: 14,
      gH: 5.6,
      fh: 4.2,
      skin: null,
      level: 0,
      vitrines: [`fruit`],
      allVitrines: !1,
      room: S.CAFE,
      bright: 150,
      mark: `manbikiya`,
      markFascia: !0,
      hours: `10:00-21:00`,
      tower: {
        x0: 184,
        z0: -299.4,
        x1: 207,
        z1: -266,
        h: 195,
        level: 120,
        tint: 12110036,
        crown: !0,
      },
    }),
    X(`koisa`, 268.2, -212.8, 285.6, -201.6, [q, K], {
      ...jt,
      h: 11.5,
      gH: 3.8,
      fh: 3.4,
      skin: null,
      level: 0,
      oldFront: !0,
      mark: `koisa`,
      markFascia: !0,
      vmark: `koisa`,
      vmarkAt: 0.05,
      noren: `tsukudani`,
      vitrines: [`tsukudani`],
      room: S.OLDSHOP,
      bright: 140,
      hours: `10:00-18:00`,
    }),
    X(`yamanaka`, 268.2, -227.6, 285.6, -213.2, [q], {
      ...jt,
      wallTint: 11045472,
      h: 17.5,
      gH: 4,
      fh: 3.4,
      skin: null,
      level: 0,
      oldFront: !0,
      mark: `yamanaka`,
      markFascia: !0,
      markCrown: !0,
      vmark: `yamanaka`,
      vmarkAt: 0.04,
      noren: `nori`,
      vitrines: [`nori`],
      room: S.OLDSHOP,
      bright: 150,
      hours: `10:00-18:00`,
    }),
    X(`soredo1`, 268.2, -262, 299.9, -228, [q, W, G], {
      ...Y,
      wallTint: 5916214,
      h: 31,
      gH: 5.4,
      fh: 5,
      skin: `louvre`,
      level: 150,
      mark: `soredo`,
      markCrown: !0,
      markFascia: !1,
      door: 0.5,
      shops: [
        { s: 0.2, mark: `ninpen`, noren: `katsuo`, vit: `katsuo` },
        { s: 0.36, mark: `moriya`, noren: `hamono`, vit: `knives` },
        { s: 0.82, mark: `kawamotoyama`, vit: `nori` },
      ],
      room: S.BOUTIQUE,
      bright: 160,
      hours: `10:00-21:00`,
      tower: {
        x0: 274,
        z0: -258,
        x1: 296,
        z1: -234,
        h: 104,
        level: 110,
        wall: S.STONE_WIN,
        tint: 14208184,
        crown: !0,
      },
    }),
    X(`soredo2`, 268.2, -299.6, 283.6, -266.8, [q, K, W], {
      ...Y,
      wallTint: 5916214,
      h: 27,
      gH: 5.4,
      fh: 5,
      skin: `louvre`,
      level: 140,
      mark: `soredo`,
      markFascia: !0,
      vitrines: [`wagashi`],
      room: S.CAFE,
      bright: 150,
      hours: `10:00-22:00`,
      tower: {
        x0: 269.5,
        z0: -298,
        x1: 282.5,
        z1: -270,
        h: 100,
        level: 110,
        wall: S.STONE_WIN,
        tint: 13155496,
      },
    }),
    X(`soredo2-n`, 284, -299.6, 299.9, -292, [W, G], {
      ...Y,
      wallTint: 5916214,
      h: 18,
      gH: 5,
      fh: 4.4,
      skin: `louvre`,
      level: 120,
      vitrines: [],
      room: S.FOOD,
      bright: 140,
      hours: `11:00-23:00`,
    }),
    X(`otsu`, 268.2, -339.6, 299.9, -326, [q, G], {
      ...J,
      wallTint: 14209216,
      h: 30,
      gH: 4.6,
      fh: 3.6,
      skin: null,
      level: 0,
      mark: `otsu`,
      markFascia: !0,
      vmark: `otsu`,
      vmarkAt: 0.04,
      noren: `washi`,
      vitrines: [`washi`],
      room: S.OLDSHOP,
      bright: 150,
      hours: `10:00-18:00`,
    }),
    X(`honcho-office`, 268.2, -377.2, 299.9, -340, [q, G], {
      ...Y,
      h: 72,
      gH: 6,
      fh: 4,
      skin: null,
      level: 0,
      vitrines: [],
      room: S.LOBBY_GLASS,
      bright: 100,
      hours: `8:00-21:00`,
    }),
    X(`honcho-sw`, 268.2, -325.6, 283.6, -314.6, [q, K], {
      ...J,
      wallTint: 13156528,
      h: 26,
      gH: 4.4,
      fh: 3.4,
      skin: null,
      level: 0,
      vitrines: [],
      room: S.CAFE,
      bright: 140,
      hours: `7:00-20:00`,
    }),
    X(`honcho-se`, 292, -325.6, 299.9, -314.6, [K, G], {
      ...J,
      wallTint: 12103844,
      h: 22,
      gH: 4,
      fh: 3.4,
      skin: null,
      level: 0,
      vitrines: [],
      room: S.FOOD,
      bright: 130,
      hours: `11:00-22:00`,
    }),
    X(`eijudo`, 219, -157.6, 231.1, -146, [G, W], {
      ...J,
      wallTint: 14208180,
      h: 12,
      gH: 4.4,
      fh: 3.6,
      skin: null,
      level: 0,
      oldFront: !0,
      mark: `eijudo`,
      markFascia: !0,
      vmark: `eijudo`,
      vmarkAt: 0.05,
      closed: `notice.kyugyo`,
      vitrines: [],
      room: S.OLDSHOP,
      bright: 120,
    }),
    X(`nb1-office`, 198.8, -157.6, 218.6, -141, [W, K], {
      ...J,
      h: 34,
      gH: 4.6,
      fh: 3.6,
      skin: null,
      level: 0,
      vitrines: [],
      room: S.LOBBY,
      bright: 120,
      hours: `8:00-20:00`,
    }),
    X(`eijudo-s`, 219, -145.6, 231.1, -141, [G, K], {
      ...J,
      wallTint: 13156532,
      h: 26,
      gH: 4.4,
      fh: 3.4,
      skin: null,
      level: 0,
      vitrines: [],
      room: S.CAFE,
      bright: 130,
      hours: `8:00-20:00`,
    }),
    X(`nomura`, 268.2, -158.6, 279.6, -145.2, [q, W], {
      ...J,
      wallTint: 13945008,
      h: 20,
      gH: 5.2,
      fh: 3.7,
      skin: `honkan`,
      skinTint: 15788248,
      level: 60,
      rustic: 5.2,
      cornice: 0.9,
      corniceTint: 14208180,
      closed: `notice.opening`,
      vitrines: [],
      room: S.LOBBY,
      bright: 120,
    }),
    X(`books`, 268.2, -93.8, 279.6, -70.6, [q, W], {
      ...J,
      wallTint: 14209220,
      h: 30,
      gH: 5,
      fh: 3.6,
      skin: `stonegrid`,
      level: 70,
      vitrines: [`books`],
      allVitrines: !0,
      room: S.BOOKS,
      bright: 150,
      hours: `9:30-21:00`,
    }),
    X(`takayamaya`, 268.2, -70.2, 279.6, -18.3, [q, K, W], {
      ...At,
      wallTint: 13616302,
      h: 31,
      gH: 6,
      fh: 3.4,
      skin: `taka`,
      level: 140,
      rustic: 6,
      belt: !0,
      cornice: 1.2,
      corniceTint: 14077108,
      mark: `takayamaya`,
      markCrown: !0,
      markFascia: !1,
      vmark: `takayamaya`,
      vmarkAt: 0.88,
      door: 0.5,
      vitrines: [`kimono`, `fruit`, `autumn`],
      room: S.BOUTIQUE,
      bright: 160,
      canopy: `bronze`,
      flags: { id: `takayamaya`, n: 2 },
      tare: { id: `kyushu`, side: K, s: 0.5 },
      hours: `10:30-19:30`,
      pavilion: { w: 9, d: 7, h: 12, tint: 13616302 },
    }),
    X(`museum`, 200.2, 18.4, 231.1, 45.2, [G, W], {
      ...J,
      wallTint: 14473424,
      h: 30,
      gH: 6,
      fh: 4.6,
      skin: `stonegrid`,
      level: 70,
      mark: `museum`,
      markFascia: !0,
      vitrines: [`painting`, `celadon`],
      room: S.GYM,
      bright: 150,
      hours: `10:00-18:00`,
      tower: {
        x0: 203,
        z0: 20.5,
        x1: 229,
        z1: 43,
        h: 149,
        level: 110,
        tint: 12897490,
        crown: !0,
      },
    }),
    X(`k-office1`, 182.6, 18.4, 199.8, 45.2, [W, q], {
      ...J,
      h: 36,
      gH: 4.6,
      fh: 3.6,
      skin: null,
      level: 0,
      vitrines: [],
      room: S.CAFE,
      bright: 140,
      hours: `7:00-21:00`,
    }),
    X(`gal1`, 182.6, 45.6, 195, 56.4, [K, q], {
      ...J,
      wallTint: 9078140,
      h: 22,
      gH: 4.2,
      fh: 3.4,
      skin: `darkstone`,
      level: 70,
      vitrines: [`scroll`, `celadon`],
      allVitrines: !0,
      room: S.GYM,
      bright: 140,
      mark: `gallery1`,
      markFascia: !0,
      hours: `11:00-19:00`,
    }),
    X(`gal2`, 195.4, 45.6, 207.6, 56.4, [K], {
      ...J,
      wallTint: 15262940,
      h: 18,
      gH: 4.2,
      fh: 3.4,
      skin: null,
      level: 0,
      vitrines: [`painting`],
      allVitrines: !0,
      room: S.GYM,
      bright: 150,
      mark: `gallery2`,
      markFascia: !0,
      hours: `11:00-19:00`,
    }),
    X(`gal3`, 208, 45.6, 219.6, 56.4, [K], {
      ...jt,
      h: 15,
      gH: 3.8,
      fh: 3.3,
      skin: null,
      level: 0,
      vitrines: [`celadon`, `scroll`],
      allVitrines: !0,
      room: S.GYM,
      bright: 140,
      mark: `gallery3`,
      markFascia: !0,
      hours: `11:00-18:00`,
    }),
    X(`gal4`, 220, 45.6, 231.1, 56.4, [K, G], {
      ...J,
      h: 28,
      gH: 4.4,
      fh: 3.4,
      skin: null,
      level: 0,
      vitrines: [],
      room: S.CAFE,
      bright: 140,
      hours: `8:00-20:00`,
    }),
    X(`gal5`, 183.6, 70.4, 197, 80, [W, q], {
      ...jt,
      wallTint: 10127986,
      h: 16,
      gH: 4,
      fh: 3.3,
      skin: `darkstone`,
      level: 70,
      vitrines: [`scroll`],
      allVitrines: !0,
      room: S.GYM,
      bright: 140,
      mark: `gallery2`,
      markFascia: !0,
      hours: `11:00-19:00`,
    }),
    X(`gal6`, 197.4, 70.4, 211, 80, [W], {
      ...J,
      h: 24,
      gH: 4.2,
      fh: 3.4,
      skin: null,
      level: 0,
      vitrines: [`painting`, `celadon`],
      allVitrines: !0,
      room: S.GYM,
      bright: 150,
      mark: `gallery1`,
      markFascia: !0,
      hours: `11:00-19:00`,
    }),
    X(`gal7`, 211.4, 70.4, 231.1, 80, [W, G], {
      ...J,
      wallTint: 13682872,
      h: 30,
      gH: 4.6,
      fh: 3.6,
      skin: null,
      level: 0,
      vitrines: [],
      room: S.FOOD,
      bright: 140,
      hours: `11:00-23:00`,
    }),
    X(`k-office2`, 183.6, 80.4, 221.4, 107.6, [K, q, G], {
      ...J,
      h: 64,
      gH: 6,
      fh: 4,
      skin: null,
      level: 0,
      vitrines: [],
      room: S.LOBBY_GLASS,
      bright: 110,
      hours: `8:00-21:00`,
    }),
    X(`k-corner`, 221.8, 80.4, 231.1, 91.4, [G, K], {
      ...J,
      wallTint: 13156528,
      h: 22,
      gH: 4.4,
      fh: 3.4,
      skin: null,
      level: 0,
      vitrines: [],
      room: S.CAFE,
      bright: 140,
      hours: `7:00-21:00`,
    }),
    X(`tofrom`, 88.6, -93, 120.6, -27, [q, W, G, K], {
      ...J,
      wallTint: 14210252,
      h: 30,
      gH: 6.4,
      fh: 4.4,
      skin: `stonegrid`,
      skinTint: 15657698,
      level: 80,
      vitrines: [],
      room: S.BOUTIQUE,
      bright: 150,
      hours: `10:00-21:00`,
      tower: {
        x0: 92,
        z0: -89,
        x1: 117,
        z1: -52,
        h: 250,
        level: 120,
        tint: 13687004,
        crown: !0,
      },
    }),
    X(`gofukubashi`, 88.6, -158.4, 120.6, -126.4, [q, W, G, K], {
      ...J,
      wallTint: 13683392,
      h: 46,
      gH: 5,
      fh: 3.8,
      skin: null,
      level: 0,
      vitrines: [],
      room: S.CAFE,
      bright: 140,
      hours: `7:00-21:00`,
    }),
    X(`kyobashi1`, 135.6, 70.6, 166.6, 106.8, [q, W, G, K], {
      ...Y,
      wallTint: 11846862,
      h: 58,
      gH: 5.6,
      fh: 4,
      skin: null,
      level: 0,
      vitrines: [],
      room: S.LOBBY_GLASS,
      bright: 110,
      hours: `8:00-21:00`,
    }),
    X(`midtown`, 88.6, 25, 120.6, 55.4, [q, K, G], {
      ...Y,
      wallTint: 9085104,
      h: 30,
      gH: 7,
      fh: 4.6,
      skin: `finglass`,
      level: 140,
      mark: `busterm`,
      markFascia: !0,
      door: 0.45,
      vitrines: [],
      room: S.LOBBY_GLASS,
      bright: 160,
      hours: `6:00-24:00`,
      tower: {
        x0: 93,
        z0: 28,
        x1: 117,
        z1: 52.5,
        h: 240,
        level: 120,
        tint: 11058380,
        crown: !0,
      },
    }),
  ],
  Nt = {
    x0: 88.6,
    z0: 70.6,
    x1: 120.6,
    z1: 107,
    core: { x0: 95, z0: 78, x1: 114, z1: 100, h: 38 },
    craneX: 104.5,
    craneZ: 89,
    craneH: 58,
  },
  Pt = { x0: 286, z0: -227.6, x1: 299.9, z1: -201.6 },
  Ft = [
    { x: 233.4, z: -230.5, heading: Z / 2 },
    { x: 233.4, z: -238.3, heading: Z / 2 },
  ],
  It = {
    x0: 284,
    z0: -291.6,
    x1: 299.9,
    z1: -266.8,
    toriiX: 289.5,
    toriiZ: -267.4,
    hallX: 289.5,
    hallZ: -288.6,
  },
  Lt = { x0: 268.2, z0: -266.6, x1: 299.9, z1: -262.4 },
  Rt = { x0: 284, z0: -325.6, x1: 291.6, z1: -314.6 },
  zt = { z: -307, x0: 270, x1: 318, sidewalk: 3 },
  Bt = [
    { x: 229.6, z: 104.6, kind: `taisho` },
    { x: 224.2, z: 104.8, kind: `meiji` },
  ],
  Vt = [
    { x: 226.6, z: 95, cell: `monument.kabuki`, heading: Z / 2 },
    { x: 223.6, z: 95, cell: `monument.daikon`, heading: Z / 2 },
  ],
  Ht = [
    { x: 92, z: -23, heading: -Z / 2 },
    { x: 92, z: 21.6, heading: -Z / 2 },
    { x: 116, z: 21.6, heading: Z / 2 },
  ],
  Ut = [
    { x: 104, z: -23.6, heading: 0 },
    { x: 86.4, z: 33, heading: -Z / 2 },
  ],
  Wt = { x: 205, z: 0, heading: Z / 2 },
  Gt = [
    { x: 267.4, z0: -261, z1: -229, y: 4.6 },
    { x: 267.4, z0: -299, z1: -268, y: 4.6 },
  ],
  Kt = [
    { x: 190, z: -254.2 },
    { x: 205, z: -254.2 },
    { x: 220, z: -254.2 },
  ],
  qt = { x0: 280.8, x1: 299.2, z0: -40, z1: 110 },
  Q = Math.PI,
  Jt = (e) => ({
    px: e.px + e.tx * e.L,
    pz: e.pz + e.tz * e.L,
    tx: -e.tx,
    tz: -e.tz,
    nx: -e.nx,
    nz: -e.nz,
    L: e.L,
  });
function Yt(e, t, n, r, i, a) {
  let o = n[0] - t[0],
    s = n[1] - t[1],
    c = n[2] - t[2],
    l = r[0] - t[0],
    u = r[1] - t[1],
    d = r[2] - t[2],
    f = s * d - c * u,
    p = c * l - o * d,
    m = o * u - s * l,
    h = Math.hypot(f, p, m) || 1;
  ((f /= h),
    (p /= h),
    (m /= h),
    e.quad4(
      t[0],
      t[1],
      t[2],
      n[0],
      n[1],
      n[2],
      r[0],
      r[1],
      r[2],
      r[0],
      r[1],
      r[2],
      f,
      p,
      m,
      i,
      a,
      i,
      a,
      i,
      a,
      i,
      a,
    ));
}
function Xt(e, t, n, r, i, a, o, s) {
  let c = lt(s),
    l = (e, s) => {
      let c = (e / 8) * Math.PI * 2,
        l = -Math.PI / 2 + (s / 4) * Math.PI;
      return [
        t + Math.cos(c) * Math.cos(l) * i,
        n + Math.sin(l) * a,
        r + Math.sin(c) * Math.cos(l) * o,
      ];
    };
  for (let t = 0; t < 4; t++)
    for (let n = 0; n < 8; n++) {
      let r = l(n, t),
        i = l(n + 1, t),
        a = l(n + 1, t + 1),
        o = l(n, t + 1);
      t === 0
        ? Yt(e, r, a, o, c.u, c.v)
        : t === 3
          ? Yt(e, r, i, o, c.u, c.v)
          : (Yt(e, r, a, o, c.u, c.v), Yt(e, r, i, a, c.u, c.v));
    }
}
function Zt(e, t, n) {
  for (let r of Ft)
    n.push(w(e[U(r.x - 2, r.z - 2, r.x + 2, r.z + 2)].sign, lt, r, t));
}
function Qt(e, t, n, r, i, a, o) {
  let s = P(i, 2);
  e.setTint(16777215).setInfo(0, 0, 0, 0);
  for (let i = 0; i < 4; i++) {
    let a = F(t, i),
      c = Math.max(1, Math.round(a.L / 6));
    for (let t = 0; t < c; t++) {
      let l = (t * a.L) / c,
        u = ((t + 1) * a.L) / c;
      if (o && o.side === i && u > o.s - o.w / 2 && l < o.s + o.w / 2) {
        (l < o.s - o.w / 2 && B(e, a, 0, l, o.s - o.w / 2, n, n + r, s),
          u > o.s + o.w / 2 && B(e, a, 0, o.s + o.w / 2, u, n, n + r, s));
        continue;
      }
      B(e, a, 0, l, u, n, n + r, s);
    }
    B(e, Jt(a), 0.02, 0, a.L, n, n + r, mt(`white`));
    for (let t = 0; t < c; t++)
      (e.setInfo(2, (i * 31 + t * 17) & 255, 210, 0),
        H(
          e,
          a,
          ((t + 0.5) * a.L) / c,
          0.08,
          0.09,
          0.09,
          n + r,
          n + r + 0.18,
          `orange`,
        ));
    e.setInfo(0, 0, 0, 0);
  }
  let c = 0.15;
  (a.push({ x0: t.x0, z0: t.z0, x1: t.x1, z1: t.z0 + c, h: n + r }),
    a.push({ x0: t.x0, z0: t.z1 - c, x1: t.x1, z1: t.z1, h: n + r }),
    a.push({ x0: t.x0, z0: t.z0, x1: t.x0 + c, z1: t.z1, h: n + r }),
    a.push({ x0: t.x1 - c, z0: t.z0, x1: t.x1, z1: t.z1, h: n + r }));
}
function $t(e, t, n, r) {
  e.setTint(16777215).setInfo(0, 0, 60, 0);
  for (let i of r)
    B(e, t, 0.04, i.s, i.s + i.w, n + i.y, n + i.y + i.h, P(i.c, 2));
}
function en(e, t, n, r, i) {
  (e.setTint(16777215).setInfo(0, 0, 0, 0),
    H(e, t, n - r / 2, 0.1, 0.15, 0.15, i, i + 3.6, `steel`),
    H(e, t, n + r / 2, 0.1, 0.15, 0.15, i, i + 3.6, `steel`),
    H(e, t, n, 0.05, r / 2, 0.06, i + 3.4, i + 3.6, `steel`),
    e.setInfo(2, 0, 200, 0),
    H(e, t, n + r / 2, 0.1, 0.12, 0.12, i + 3.6, i + 3.85, `orange`));
}
function tn(e, t, n, r, i, a) {
  (e.setTint(16777215).setInfo(0, 0, 0, 0),
    V(e, t - 0.8, r, n - 0.8, t + 0.8, i, n + 0.8, `orange`),
    V(e, t - 0.9, i, n - 0.9, t + 0.9, i + 2.2, n + 0.9, `white`));
  let o = I(t, n, a, 1);
  (H(e, o, 0, 13, 0.6, 13.5, i + 1.6, i + 2.6, `orange`),
    H(e, o, 0, -5, 0.8, 4.5, i + 1.4, i + 2.4, `orange`),
    H(e, o, 0, -7.5, 1.2, 1.5, i + 0.2, i + 1.4, `granite`),
    V(e, t - 0.1, i + 2.6, n - 0.1, t + 0.1, i + 5.4, n + 0.1, `orange`),
    e.setInfo(2, 7, 255, 0),
    V(e, t - 0.2, i + 5.4, n - 0.2, t + 0.2, i + 5.8, n + 0.2, `red`),
    H(e, o, 0, 26.2, 0.2, 0.2, i + 2.6, i + 3, `red`));
}
function nn(e, t, n) {
  let r = Pt,
    i = e[U(r.x0, r.z0, r.x1, r.z1)],
    a = i.sign,
    s = i.body;
  Qt(a, r, t, 3, `hoarding.c1`, n, { side: 2, s: 4, w: 4.4 });
  let c = F(r, 1),
    l = F(r, 2),
    u = F(r, 3);
  ($t(a, c, t, [
    { s: 2, c: `koji`, w: 1, h: 1.375, y: 0.9 },
    { s: 3.4, c: `owabi`, w: 0.75, h: 1.375, y: 0.85 },
  ]),
    $t(a, l, t, [
      { s: 8.6, c: `koji`, w: 1, h: 1.375, y: 0.9 },
      { s: 10, c: `owabi`, w: 0.75, h: 1.375, y: 0.85 },
    ]),
    $t(a, u, t, [{ s: 10.5, c: `owabi`, w: 0.75, h: 1.375, y: 0.85 }]),
    en(a, l, 4, 4.4, t));
  let d = r.x0 + 0.6,
    f = r.x0 + 8.6,
    p = r.z0 + 0.6,
    m = r.z0 + 4;
  (s.setTint(15790834),
    R(s, S.ZWIN, 3, o.OFFICE, 7, 160),
    s.box(d, t, p, f, t + 5.6, m, 3, 2, 1, 31),
    a.setTint(16777215).setInfo(0, 0, 0, 0),
    V(a, d - 0.05, t + 2.7, p - 0.05, f + 0.05, t + 2.95, m + 0.05, `blue`),
    n.push({ x0: d, z0: p, x1: f, z1: m, h: t + 5.6 }));
  let h = r.x0 + 7.5,
    g = r.z0 + 15;
  (V(a, h - 2.4, t, g - 1.8, h + 2.4, t + 0.9, g - 0.9, `black`),
    V(a, h - 2.4, t, g + 0.9, h + 2.4, t + 0.9, g + 1.8, `black`),
    V(a, h - 1.8, t + 0.9, g - 1.4, h + 1.6, t + 3, g + 1.4, `blue`),
    V(a, h - 1.6, t + 3, g - 1.2, h - 0.2, t + 4.2, g + 0.2, `blue`),
    V(a, h + 1.6, t + 0.6, g - 0.5, h + 2.4, t + 18.5, g + 0.5, `blue`),
    V(a, h + 1.75, t + 18.5, g - 0.35, h + 2.25, t + 19.6, g + 0.35, `yellow`),
    V(a, h + 2.5, t, g - 0.35, h + 3.2, t + 9, g + 0.35, `steel`),
    a.setInfo(2, 3, 220, 0),
    V(a, h - 1, t + 4.2, g - 0.6, h - 0.6, t + 4.5, g - 0.2, `orange`),
    n.push({ x0: h - 2.4, z0: g - 1.8, x1: h + 3.2, z1: g + 1.8, h: t + 4.2 }),
    a.setInfo(0, 0, 0, 0));
  for (let e = 0; e < 3; e++) {
    let n = r.z1 - 2 - e * 0.62;
    V(a, r.x0 + 1.2, t, n - 0.28, r.x1 - 1.4, t + 0.56, n + 0.28, `steel`);
  }
  (a.setInfo(0, 0, 0, 0),
    V(a, r.x1 - 1.2, t, r.z0 + 6, r.x1 - 1, t + 6.5, r.z0 + 6.2, `steel`),
    a.setInfo(0, 0, 230, 0),
    V(
      a,
      r.x1 - 1.6,
      t + 6.5,
      r.z0 + 5.8,
      r.x1 - 0.6,
      t + 6.9,
      r.z0 + 6.6,
      `warm`,
    ));
}
function rn(e, t, n) {
  let r = Nt,
    i = e[U(r.x0, r.z0, r.x1, r.z1)],
    a = i.sign,
    s = i.body;
  Qt(a, r, t, 3, `hoarding`, n, { side: 3, s: 14, w: 5 });
  let c = F(r, 3),
    l = F(r, 0);
  ($t(a, c, t, [
    { s: 4, c: `kenchiku`, w: 1.1, h: (176 / 128) * 1.1, y: 0.9 },
    { s: 6.2, c: `owabi`, w: 0.75, h: 1.375, y: 0.85 },
  ]),
    $t(a, l, t, [
      { s: 6, c: `kenchiku`, w: 1.1, h: (176 / 128) * 1.1, y: 0.9 },
    ]),
    en(a, c, 14, 5, t));
  let u = r.core;
  for (let e = 0; e < 4; e++) {
    let n = F(u, e),
      r = Math.max(1, Math.round(n.L / 3.4)),
      i = n.L / r,
      o = Math.round(u.h / 4.2),
      s = u.h / o;
    for (let e = 0; e < o; e++)
      for (let o = 0; o < r; o++)
        (a.setTint(16777215).setInfo(0, (o * 7 + e) & 255, 12, 0),
          B(
            a,
            n,
            0,
            o * i,
            (o + 1) * i,
            t + e * s,
            t + (e + 1) * s,
            P(`skin.sheet.${(o + e) % 2}`, 3),
          ));
  }
  a.setTint(16777215).setInfo(0, 0, 0, 0);
  for (let e = 0; e <= 4; e++)
    for (let n of [u.z0, u.z1]) {
      let r = u.x0 + ((u.x1 - u.x0) * e) / 4;
      V(
        a,
        r - 0.35,
        t + u.h,
        n - 0.35,
        r + 0.35,
        t + u.h + 4.2,
        n + 0.35,
        `steel`,
      );
    }
  (s.setTint(10132116),
    R(s, S.CONCRETE, 1, o.NONE, 0, 0),
    s.hrect(u.x0, u.z0, u.x1, u.z1, t + u.h, !0, 0, 0, 4, 4),
    n.push({ x0: u.x0, z0: u.z0, x1: u.x1, z1: u.z1, h: t + u.h }),
    tn(a, r.craneX, r.craneZ, t + u.h, t + r.craneH, Q * 1.2));
}
function an(e, t, n, r, i, a, o, s, c) {
  let l = I(t, n, r, i);
  e.setTint(16777215).setInfo(0, 0, 0, 0);
  for (let t of [0, i]) {
    let [n, r] = L(l, t, 0);
    (ht(e, n, r, 0.14, o, o + a, 10, `vermilion`),
      V(e, n - 0.2, o, r - 0.2, n + 0.2, o + 0.3, r + 0.2, `black`),
      c.push({ x0: n - 0.2, z0: r - 0.2, x1: n + 0.2, z1: r + 0.2, h: o + a }));
  }
  (H(e, l, i / 2, 0, i / 2 + 0.55, 0.18, o + a, o + a + 0.22, `black`),
    H(e, l, i / 2, 0, i / 2 + 0.4, 0.14, o + a - 0.22, o + a, `vermilion`),
    H(
      e,
      l,
      i / 2,
      0,
      i / 2 + 0.25,
      0.1,
      o + a - 0.75,
      o + a - 0.58,
      `vermilion`,
    ),
    e.setInfo(0, 0, 70, 0),
    B(
      e,
      l,
      0.12,
      i / 2 - 0.2,
      i / 2 + 0.2,
      o + a - 0.6 - 0.5,
      o + a - 0.6 + 0.5 - 0.5,
      P(s, 2),
    ));
}
function on(e, t, n, r, i, a, s, c, l = 6982260) {
  let u = e.sign,
    d = e.body,
    f = I(t, n, r, i);
  (u.setTint(16777215).setInfo(0, 0, 0, 0),
    H(u, f, i / 2, -a / 2, i / 2 + 0.2, a / 2 + 0.2, s, s + 0.5, `granite`),
    H(u, f, i / 2, -a / 2, i / 2, a / 2, s + 0.5, s + 2.4, `wood`),
    d.setTint(16777215),
    R(d, S.LATTICE_DOOR, 1, o.SHOP, 0, 80));
  let p = { ...f, px: f.px + f.nx * 0.01, pz: f.pz + f.nz * 0.01 };
  d.wall(
    p.px + p.tx * 0.3,
    p.pz + p.tz * 0.3,
    p.tx,
    p.tz,
    i - 0.6,
    s + 0.5,
    s + 2.2,
    0,
    1,
    0,
    1,
  );
  let m = 0.6,
    h = s + 2.4,
    g = s + 2.4 + a * 0.42,
    _ = (e, t) => L(f, e, t),
    [v, y] = _(-0.6, m),
    [b, x] = _(i + m, m),
    [C, w] = _(i + m, -a / 2),
    [ee, T] = _(-0.6, -a / 2),
    [te, E] = _(-0.6, -a - m),
    [D, ne] = _(i + m, -a - m);
  (d.setTint(l),
    R(d, S.TIN_ROOF, 1, o.NONE, 0, 0),
    d.quad4(
      v,
      h,
      y,
      b,
      h,
      x,
      C,
      g,
      w,
      ee,
      g,
      T,
      f.nx * 0.6,
      0.8,
      f.nz * 0.6,
      0,
      0,
      2,
      0,
      2,
      1,
      0,
      1,
    ),
    d.quad4(
      D,
      h,
      ne,
      te,
      h,
      E,
      ee,
      g,
      T,
      C,
      g,
      w,
      -f.nx * 0.6,
      0.8,
      -f.nz * 0.6,
      0,
      0,
      2,
      0,
      2,
      1,
      0,
      1,
    ),
    d.quad4(
      ee,
      g - 0.05,
      T,
      C,
      g - 0.05,
      w,
      b,
      h - 0.05,
      x,
      v,
      h - 0.05,
      y,
      -f.nx * 0.6,
      -0.8,
      -f.nz * 0.6,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      1,
    ),
    H(u, f, i / 2, 0.45, 0.4, 0.22, s, s + 0.6, `wood`),
    H(u, f, i / 2, 0.2, 0.025, 0.025, s + 1, s + 2.3, `vermilion`),
    u.setInfo(0, 0, 120, 0));
  for (let e of [-0.5, i + 0.5]) {
    let t = I(..._(e, 0.6), r, 0.3);
    (H(u, t, 0.15, 0, 0.05, 0.05, s, s + 1.1, `granite`),
      B(u, t, 0, 0, 0.3, s + 1.1, s + 1.5, P(`lantern`, 2)));
  }
  let [O, k] = _(i / 2, -a / 2),
    A = Math.abs(f.tx) * (i / 2 + 0.2) + Math.abs(f.nx) * (a / 2 + 0.2),
    j = Math.abs(f.tz) * (i / 2 + 0.2) + Math.abs(f.nz) * (a / 2 + 0.2);
  c.push({ x0: O - A, z0: k - j, x1: O + A, z1: k + j, h: s + 3.4 });
}
function sn(e, t, n) {
  let r = It,
    i = e[U(r.x0, r.z0, r.x1, r.z1)],
    a = i.sign;
  (an(a, r.toriiX, r.toriiZ, Q, 3, 3.9, t, `gaku.fukutoku`, n),
    a.setTint(16777215).setInfo(0, 0, 0, 0),
    V(
      a,
      r.toriiX - 1.1,
      t - 0.1,
      r.hallZ + 2.4,
      r.toriiX + 1.1,
      t + 0.03,
      r.toriiZ - 0.4,
      `granite`,
    ),
    on(i, r.hallX, r.hallZ + 1.6, Q, 3.6, 3.4, t, n),
    a.setInfo(0, 0, 40, 0));
  for (let e = 0; e < 5; e++) {
    let n = r.toriiZ - 2 - e * 2.6,
      i = I(r.toriiX - 1.7, n, Q / 2, 0.45);
    (B(a, i, 0, 0, 0.45, t + 0.3, t + 2.4, P(`nobori`, 2)),
      B(a, Jt(i), 0, 0, 0.45, t + 0.3, t + 2.4, P(`nobori`, 2)),
      a.setInfo(0, 0, 0, 0),
      V(
        a,
        r.toriiX - 1.95,
        t,
        n - 0.02,
        r.toriiX - 1.91,
        t + 2.5,
        n + 0.02,
        `black`,
      ),
      a.setInfo(0, 0, 40, 0));
  }
  (a.setInfo(0, 0, 0, 0),
    V(
      a,
      r.toriiX + 2,
      t,
      r.z0 + 1,
      r.toriiX + 2.25,
      t + 0.4,
      r.z1 - 1.2,
      `granite`,
    ));
  for (let [e, n, r] of [
    [294.5, -270, 3.2],
    [297.5, -274, 3.8],
    [293.8, -277.5, 2.8],
    [297.8, -281, 3.4],
    [294.6, -285, 3],
    [298, -288, 2.6],
  ])
    hn(a, e, n, t, r, !0);
  V(a, 296.4, t + 0.42, -279.2, 297.2, t + 0.48, -277.2, `wood`);
  let o = Lt;
  a.setInfo(0, 0, 0, 0);
  for (let e = o.x0 + 4; e < o.x1 - 2; e += 5.5)
    V(a, e - 0.01, t + 4.1, o.z0, e + 0.01, t + 4.12, o.z1, `black`);
  a.setInfo(0, 0, 110, 0);
  for (let e = o.x0 + 4; e < o.x1 - 2; e += 5.5)
    for (let n of [o.z0 + 1.2, o.z1 - 1.2]) {
      let r = I(e, n, Q / 2, 0.36);
      (B(a, r, 0, 0, 0.36, t + 3.3, t + 4, P(`chochin`, 2)),
        B(a, Jt(r), 0, 0, 0.36, t + 3.3, t + 4, P(`chochin`, 2)));
    }
}
function cn(e, t, n) {
  let r = Rt,
    i = e[U(r.x0, r.z0, r.x1, r.z1)],
    a = (r.x0 + r.x1) / 2;
  (an(i.sign, a, r.z1 - 0.6, Q, 2.6, 3.2, t, `gaku.ebisu`, n),
    on(i, a, r.z0 + 4.4, Q, 3.2, 3.2, t, n, 8024168),
    i.sign.setTint(16777215).setInfo(0, 0, 40, 0));
  for (let e of [r.x0 + 0.6, r.x1 - 0.6]) {
    let n = I(e, r.z1 - 3, Q, 0.45);
    B(i.sign, n, 0, 0, 0.45, t + 0.3, t + 2.4, P(`nobori`, 2));
  }
}
function ln(e, t) {
  let n = e.sign,
    r = zt;
  for (let e of [-1, 1]) {
    let i = r.z + e * 4.85,
      a = e < 0 ? Q : 0;
    for (let o = r.x0 + 1.5; o + 3 < r.x1; o += 3.4) {
      if (e > 0 && o > 282 && o < 293) continue;
      let r = I(o + 3 / 2, i - (e < 0 ? -0.9 : 0.9) * 0, a, 3);
      n.setTint(16777215).setInfo(0, 0, 0, 0);
      for (let e of [0, 3])
        for (let i of [0.6, -0.9])
          H(n, r, e, i, 0.03, 0.03, t, t + 2.3, `steel`);
      (H(n, r, 3 / 2, -0.15, 3 / 2, 0.85, t + 2.3, t + 2.36, `white`),
        B(
          n,
          I(...L(r, 3 / 2, -0.88), a, 3),
          0,
          0,
          3,
          t + 0,
          t + 2.3,
          P(`kohaku`, 1),
        ),
        B(n, r, 0.62, 0, 3, t + 2, t + 2.3, P(`kohaku`, 1)),
        H(n, r, 3 / 2, 0.35, 3 / 2 - 0.1, 0.3, t, t + 0.85, `wood`));
      for (let e = 0; e < 4; e++)
        H(
          n,
          r,
          0.45 + e * 0.7,
          0.35,
          0.22,
          0.16,
          t + 0.85,
          t + 1,
          e % 2 ? `cream` : `white`,
        );
      (n.setInfo(0, 0, 90, 0),
        B(
          n,
          r,
          0.66,
          3 / 2 - 0.55,
          2.05,
          t + 1.2,
          t + 1.2 + (64 / 96) * 1.1,
          P(`bettara`, 2),
        ),
        n.setInfo(0, 0, 140, 0),
        B(
          n,
          I(...L(r, 0.3, 0.62), a, 0.3),
          0,
          0,
          0.3,
          t + 1.75,
          t + 2.25,
          P(`chochin`, 2),
        ));
    }
  }
}
function un(e, t, n) {
  let r = e[U(220, 90, 232, 108)].sign;
  for (let e of Bt)
    (r.setTint(16777215).setInfo(0, 0, 0, 0),
      e.kind === `taisho`
        ? (V(
            r,
            e.x - 0.75,
            t,
            e.z - 0.75,
            e.x + 0.75,
            t + 0.4,
            e.z + 0.75,
            `granite`,
          ),
          V(
            r,
            e.x - 0.48,
            t + 0.4,
            e.z - 0.48,
            e.x + 0.48,
            t + 3,
            e.z + 0.48,
            `stonedark`,
          ),
          V(
            r,
            e.x - 0.6,
            t + 3,
            e.z - 0.6,
            e.x + 0.6,
            t + 3.3,
            e.z + 0.6,
            `granite`,
          ),
          V(
            r,
            e.x - 0.4,
            t + 3.3,
            e.z - 0.4,
            e.x + 0.4,
            t + 3.6,
            e.z + 0.4,
            `stonedark`,
          ),
          B(
            r,
            I(e.x + 0.485, e.z, Q / 2, 0.6),
            0,
            0,
            0.6,
            t + 0.9,
            t + 2.7,
            P(`pillar.kanji`, 2),
          ),
          B(
            r,
            I(e.x, e.z + 0.485, Q, 0.6),
            0,
            0,
            0.6,
            t + 0.9,
            t + 2.7,
            P(`pillar.kana`, 2),
          ),
          r.setInfo(0, 0, 0, 0),
          V(
            r,
            e.x - 0.08,
            t + 3.6,
            e.z - 0.08,
            e.x + 0.08,
            t + 4.3,
            e.z + 0.08,
            `bronze`,
          ),
          r.setInfo(0, 0, 200, 0),
          V(
            r,
            e.x - 0.28,
            t + 4.3,
            e.z - 0.28,
            e.x + 0.28,
            t + 4.95,
            e.z + 0.28,
            `warm`,
          ),
          r.setInfo(0, 0, 0, 0),
          V(
            r,
            e.x - 0.33,
            t + 4.95,
            e.z - 0.33,
            e.x + 0.33,
            t + 5.05,
            e.z + 0.33,
            `bronze`,
          ),
          n.push({
            x0: e.x - 0.75,
            z0: e.z - 0.75,
            x1: e.x + 0.75,
            z1: e.z + 0.75,
            h: t + 4,
          }))
        : (V(
            r,
            e.x - 0.42,
            t,
            e.z - 0.42,
            e.x + 0.42,
            t + 1.75,
            e.z + 0.42,
            `granite`,
          ),
          V(
            r,
            e.x - 0.48,
            t + 1.75,
            e.z - 0.48,
            e.x + 0.48,
            t + 1.9,
            e.z + 0.48,
            `stonedark`,
          ),
          Xt(r, e.x, t + 2.15, e.z, 0.36, 0.28, 0.36, `granite`),
          Xt(r, e.x, t + 2.48, e.z, 0.12, 0.2, 0.12, `granite`),
          B(
            r,
            I(e.x + 0.425, e.z, Q / 2, 0.5),
            0,
            0,
            0.5,
            t + 0.3,
            t + 1.6,
            P(`pillar.kanji`, 2),
          ),
          n.push({
            x0: e.x - 0.5,
            z0: e.z - 0.5,
            x1: e.x + 0.5,
            z1: e.z + 0.5,
            h: t + 2.4,
          })));
  for (let e of Vt)
    (r.setTint(16777215).setInfo(0, 0, 0, 0),
      V(r, e.x - 0.7, t, e.z - 0.45, e.x + 0.7, t + 0.3, e.z + 0.45, `granite`),
      V(
        r,
        e.x - 0.38,
        t + 0.3,
        e.z - 0.18,
        e.x + 0.38,
        t + 2.1,
        e.z + 0.18,
        `granite`,
      ),
      r.setInfo(0, 0, 20, 0),
      B(
        r,
        I(e.x + 0.385, e.z, e.heading, 0.6),
        0,
        0,
        0.6,
        t + 0.4,
        t + 2,
        P(e.cell, 2),
      ),
      n.push({
        x0: e.x - 0.7,
        z0: e.z - 0.45,
        x1: e.x + 0.7,
        z1: e.z + 0.45,
        h: t + 2.1,
      }));
  (r.setTint(16777215).setInfo(0, 0, 0, 0),
    V(r, 221.9, t - 0.08, 91.8, 231.2, t + 0.02, 108.2, `stonedark`),
    V(r, 221.9, t, 91.8, 231.2, t + 0.45, 92.4, `granite`),
    hn(r, 223.2, 100.4, t, 2.6, !1));
}
function dn(e, t, n) {
  for (let r of Ht) {
    let i = e[U(r.x - 3, r.z - 3, r.x + 3, r.z + 3)].sign,
      a = I(r.x, r.z, r.heading, 2.4);
    (i.setTint(16777215).setInfo(0, 0, 0, 0),
      H(i, a, 1.2, -2.3, 1.45, 2.6, t + 2.6, t + 2.85, `glass`),
      i.setInfo(0, 0, 150, 0),
      B(
        i,
        a,
        0.31,
        -0.25,
        2.65,
        t + 2.6,
        t + 2.6 + (72 / 256) * 2.9,
        P(`chikagai`, 2),
      ),
      i.setInfo(0, 0, 0, 0));
    for (let e of [-0.22, 2.62]) {
      (H(i, a, e, -2.3, 0.03, 2.55, t, t + 1.1, `glass`),
        H(i, a, e, -2.3, 0.04, 2.55, t + 1.1, t + 1.16, `steel`));
      for (let n of [0.25, -4.8])
        H(i, a, e, n, 0.05, 0.05, t, t + 2.6, `steel`);
    }
    (H(i, a, 1.2, -4.85, 1.45, 0.03, t, t + 1.1, `glass`),
      H(i, a, 1.2, -2.2, 1.15, 2.2, t - 0.02, t + 0.012, `black`));
    for (let e of [0.1, 2.3])
      H(i, a, e, -2.2, 0.03, 2.2, t + 0.9, t + 0.95, `steel`);
    let [o, s] = L(a, -0.3, 0.3),
      [c, l] = L(a, 2.7, -4.9),
      u = Math.min(o, c),
      d = Math.max(o, c),
      f = Math.min(s, l),
      p = Math.max(s, l),
      m = 0.12,
      h = t + 1.16;
    Math.abs(a.nx) > 0.5
      ? (n.push(
          { x0: u, z0: f, x1: d, z1: f + m, h },
          { x0: u, z0: p - m, x1: d, z1: p, h },
        ),
        n.push(
          a.nx > 0
            ? { x0: u, z0: f, x1: u + m, z1: p, h }
            : { x0: d - m, z0: f, x1: d, z1: p, h },
        ))
      : (n.push(
          { x0: u, z0: f, x1: u + m, z1: p, h },
          { x0: d - m, z0: f, x1: d, z1: p, h },
        ),
        n.push(
          a.nz > 0
            ? { x0: u, z0: f, x1: d, z1: f + m, h }
            : { x0: u, z0: p - m, x1: d, z1: p, h },
        ));
  }
}
function fn(e, t, n) {
  for (let r of Ut) {
    let i = e[U(r.x - 2, r.z - 2, r.x + 2, r.z + 2)].sign,
      a = 2.6,
      o = (80 / 320) * a,
      s = I(r.x, r.z, r.heading, a);
    i.setTint(16777215).setInfo(0, 0, 0, 0);
    for (let e of [0.15, 2.45])
      H(i, s, e, 0, 0.05, 0.05, t, t + 2.2 + o, `steel`);
    (i.setInfo(0, 0, 150, 0),
      B(i, s, 0.04, 0, a, t + 2.2, t + 2.2 + o, P(`busterm`, 2)),
      B(i, Jt(s), 0.04, 0, a, t + 2.2, t + 2.2 + o, P(`busterm`, 2)));
    let [c, l] = L(s, 0, 0),
      [u, d] = L(s, a, 0);
    n.push({
      x0: Math.min(c, u) - 0.08,
      z0: Math.min(l, d) - 0.08,
      x1: Math.max(c, u) + 0.08,
      z1: Math.max(l, d) + 0.08,
      h: t + 0.9,
    });
  }
}
function pn(e, t, n) {
  let r = Wt,
    i = e[U(r.x - 1, r.z - 1, r.x + 1, r.z + 1)].sign;
  (i.setTint(16777215).setInfo(0, 0, 0, 0),
    V(i, r.x - 0.9, t, r.z - 0.4, r.x + 0.9, t + 1.2, r.z + 0.4, `granite`),
    i.setInfo(0, 0, 25, 0),
    B(
      i,
      I(r.x, r.z - 0.405, 0, 1.4),
      0,
      0,
      1.4,
      t + 0.15,
      t + 0.15 + (96 / 128) * 1.4,
      P(`joosten`, 2),
    ),
    B(
      i,
      I(r.x, r.z + 0.405, Q, 1.4),
      0,
      0,
      1.4,
      t + 0.15,
      t + 0.15 + (96 / 128) * 1.4,
      P(`joosten`, 2),
    ),
    n.push({
      x0: r.x - 0.9,
      z0: r.z - 0.4,
      x1: r.x + 0.9,
      z1: r.z + 0.4,
      h: t + 1.2,
    }));
}
function mn(e, t) {
  for (let n of Gt) {
    let r = e[U(n.x - 1, n.z0, n.x + 1, n.z1)].sign;
    for (let e = n.z0; e <= n.z1; e += 2.6) {
      (r.setTint(16777215).setInfo(0, 0, 0, 0),
        V(
          r,
          n.x - 0.05,
          t + n.y + 0.75,
          e - 0.02,
          n.x + 0.75,
          t + n.y + 0.8,
          e + 0.02,
          `black`,
        ),
        r.setInfo(0, (e * 3) & 255, 120, 0));
      let i = I(n.x - 0.05, e, -Q / 2, 0.38);
      (B(r, i, 0, 0, 0.38, t + n.y, t + n.y + 0.72, P(`chochin`, 2)),
        B(r, Jt(i), 0, 0, 0.38, t + n.y, t + n.y + 0.72, P(`chochin`, 2)));
      let a = I(n.x - 0.05, e, 0, 0.38);
      (B(r, a, 0, 0, 0.38, t + n.y, t + n.y + 0.72, P(`chochin`, 2)),
        B(r, Jt(a), 0, 0, 0.38, t + n.y, t + n.y + 0.72, P(`chochin`, 2)));
    }
  }
}
function hn(e, t, n, r, i, a) {
  (e.setTint(16777215).setInfo(0, 0, 0, 0),
    ht(e, t, n, 0.12 * i * 0.6, r, r + i * 1.1, 6, `wood`),
    e.setTint(a ? 16777215 : 15251600),
    Xt(
      e,
      t,
      r + i * 1.35,
      n,
      i * 0.62,
      i * 0.48,
      i * 0.62,
      a ? `leafdark` : `leaf`,
    ),
    Xt(
      e,
      t + i * 0.3,
      r + i * 1.6,
      n - i * 0.2,
      i * 0.45,
      i * 0.38,
      i * 0.45,
      `leaf`,
    ),
    Xt(
      e,
      t - i * 0.25,
      r + i * 1.55,
      n + i * 0.25,
      i * 0.42,
      i * 0.36,
      i * 0.42,
      a ? `leaf` : `leafdark`,
    ),
    e.setTint(16777215));
}
function gn(e, t, n) {
  for (let r of Kt)
    (hn(e[U(r.x - 1, r.z - 1, r.x + 1, r.z + 1)].sign, r.x, r.z, t, 3, !1),
      n.push({
        x0: r.x - 0.2,
        z0: r.z - 0.2,
        x1: r.x + 0.2,
        z1: r.z + 0.2,
        h: t + 3,
      }));
}
function _n(e, t, n) {
  let r = qt,
    i = [
      [r.z0, -18.4],
      [18.4, 56.4],
      [69.6, r.z1],
    ];
  for (let [a, o] of i) {
    let i = e[U(r.x0, a, r.x1, o)].sign;
    (i.setTint(16777215).setInfo(0, 0, 0, 0),
      V(i, r.x0 + 0.3, t - 0.1, a, r.x1 - 0.3, t + 0.02, o, `black`));
    for (let e of [r.x0, r.x1]) {
      for (let n = a; n < o; n += 3) {
        let r = Math.min(o, n + 3);
        (V(i, e - 0.06, t, n - 0.06, e + 0.06, t + 1.9, n + 0.06, `steel`),
          i.setTint(6982234),
          V(i, e - 0.015, t + 0.25, n, e + 0.015, t + 1.8, r, `green`),
          i.setTint(16777215));
      }
      (V(i, e - 0.2, t, a, e + 0.2, t + 0.25, o, `granite`),
        n.push({ x0: e - 0.2, z0: a, x1: e + 0.2, z1: o, h: t + 1.9 }));
    }
    for (let e of [a, o])
      (i.setTint(6982234),
        V(i, r.x0, t + 0.25, e - 0.015, r.x1, t + 1.8, e + 0.015, `green`),
        i.setTint(16777215),
        n.push({ x0: r.x0, z0: e - 0.1, x1: r.x1, z1: e + 0.1, h: t + 1.9 }));
  }
}
function vn(e, t, n) {
  let r = e.sign,
    i = lt(`white`),
    a = r.info,
    o = t + 0.014,
    s = 4.6;
  r.setTint(6051408);
  for (let e of Mt) {
    if ((e.bright ?? 0) < 140 || e.closed || (n && !n(e))) continue;
    let t = Math.min(190, 40 + (e.bright ?? 100) * 0.5);
    for (let n of e.faces.slice(0, 2)) {
      let c = F(e, n),
        l = Math.max(2, Math.round(c.L / 2.5));
      for (let e = 0; e < 4; e++)
        for (let n = 0; n < l; n++) {
          let u = (n * c.L) / l,
            d = ((n + 1) * c.L) / l,
            f = (e * s) / 4 + 0.05,
            p = ((e + 1) * s) / 4 + 0.05,
            m = (e, t) => [
              c.px + c.tx * e + c.nx * t,
              c.pz + c.tz * e + c.nz * t,
            ],
            [h, g] = m(u, f),
            [_, v] = m(d, f),
            [y, b] = m(d, p),
            [x, S] = m(u, p);
          r.setInfo(0, 0, 0, 0);
          let C = c.tx * c.nz - c.tz * c.nx < 0;
          C
            ? r.quad4(
                h,
                o,
                g,
                _,
                o,
                v,
                y,
                o,
                b,
                x,
                o,
                S,
                0,
                1,
                0,
                i.u,
                i.v,
                i.u,
                i.v,
                i.u,
                i.v,
                i.u,
                i.v,
              )
            : r.quad4(
                h,
                o,
                g,
                x,
                o,
                S,
                y,
                o,
                b,
                _,
                o,
                v,
                0,
                1,
                0,
                i.u,
                i.v,
                i.u,
                i.v,
                i.u,
                i.v,
                i.u,
                i.v,
              );
          let w = (e, n) => {
              let r = Math.max(0, 1 - n / s),
                i = Math.min(1, e / 2.5, (c.L - e) / 2.5);
              return Math.round(t * r * r * r * (0.35 + 0.65 * Math.max(0, i)));
            },
            ee = r.vc - 4,
            T = C
              ? [w(u, f), w(d, f), w(d, p), w(u, p)]
              : [w(u, f), w(u, p), w(d, p), w(d, f)];
          for (let e = 0; e < 4; e++) a[(ee + e) * 4 + 3] = T[e];
        }
    }
  }
}
var yn = e({
    init: () => On,
    keepResident: () => jn,
    start: () => kn,
    unload: () => Mn,
    update: () => An,
  }),
  bn = 1.5,
  $ = {
    built: null,
    building: !1,
    gen: 0,
    atlasTex: null,
    canvas: null,
    mats: new Map(),
    offQuality: null,
    lifeT: 0,
    crowds: [],
  },
  xn = (e) => e.quality.materials === `lambert` || e.quality.level === `low`;
function Sn(e) {
  let t = d();
  if (!t || !$.atlasTex) return null;
  let n = xn(e) ? `L` : `P`,
    r = $.mats.get(n);
  return (
    r ||
      ((r = t({ signs: $.atlasTex }, n === `L`)),
      (r.name = `nihonbashi-hero${n === `L` ? `-l` : ``}`),
      $.mats.set(n, r)),
    r
  );
}
function Cn(e, t, r, i, o, s = !0) {
  let c = new n(e, t);
  return (
    (c.name = r),
    (c.castShadow = o),
    (c.receiveShadow = i.quality.shadows),
    (c.matrixAutoUpdate = !1),
    c.updateMatrix(),
    (c.raycast = () => {}),
    (c.visible = s),
    a(c),
    c
  );
}
async function wn(e) {
  let n = performance.now(),
    r = $.gen,
    o = performance.now(),
    s = async () => {
      performance.now() - o < bn ||
        (await e.yieldFrame(), (o = performance.now()));
    };
  if (!d()) return;
  let f = e.quality.level === `low` || !!e.quality.mobile,
    p = f ? 0.5 : 1;
  if (
    (await Promise.race([x, new Promise((e) => setTimeout(e, 2500))]),
    r !== $.gen)
  )
    return;
  let m = document.createElement(`canvas`);
  ((m.width = Math.round(T * p)), (m.height = Math.round(ct * p)));
  let h = m.getContext(`2d`);
  for (let e of ut(m, h, p)) await s();
  if (r !== $.gen) return;
  let g = i(m, { anisotropy: f ? 2 : 4 });
  ((g.name = `nihonbashi-signs`),
    ($.atlasTex = g),
    u === `pending`
      ? (($.canvas = m),
        l(() => {
          let e = $.canvas;
          if (!e || $.atlasTex !== g) return;
          let t = ut(e, e.getContext(`2d`), p);
          for (; !t.next().done;);
          ((g.needsUpdate = !0), ($.canvas = null), a(g));
        }))
      : a(g),
    await s());
  let _ = Sn(e);
  if (!_) return;
  await s();
  let v = e.plan.sidewalkHeight ?? 0.15,
    y = kt.map(() => ft(8192)),
    b = (e) => (e < 2 ? 0 : 1),
    S = [
      { id: `north`, chunks: [0, 1] },
      { id: `south`, chunks: [2, 3] },
    ],
    C = S.map(() => ft(1024)),
    w = [],
    te = 23;
  for (let e of Mt) {
    let t = U(e.x0, e.z0, e.x1, e.z1);
    (vt(y[t], C[b(t)], e, v, (te += 41) & 255, w), await s());
  }
  if (
    (Zt(y, v, w),
    nn(y, v, w),
    await s(),
    rn(y, v, w),
    sn(y, v, w),
    cn(y, v, w),
    await s(),
    un(y, v, w),
    dn(y, v, w),
    fn(y, v, w),
    pn(y, v, w),
    mn(y, v),
    gn(y, v, w),
    _n(y, v, w),
    await s(),
    r !== $.gen)
  )
    return;
  let E = new t();
  E.name = `nihonbashi`;
  let D = [],
    ne = [],
    O = 0;
  for (let t = 0; t < S.length; t++) {
    let n = ft(4096);
    vn(n, v, (e) => b(U(e.x0, e.z0, e.x1, e.z1)) === t);
    let r = S[t].chunks.flatMap((e) => [y[e].body, y[e].sign]),
      i = [C[t].body, C[t].sign, ...r, n.body, n.sign],
      o = c.concat(i);
    if ((await s(), !o)) continue;
    let l = new ee(
      o.geo,
      _,
      `nihonbashi-hero-${S[t].id}`,
      o.starts[2],
      o.starts[2 + r.length],
      { castShadow: !0, receiveShadow: e.quality.shadows },
    );
    l.tris.body <= 0 ||
      (a(l.mesh),
      E.add(l.mesh),
      D.push(l.mesh),
      ne.push(l),
      (O += o.geo.index.count / 3));
  }
  await s();
  let k = (t, n, r) => {
      let i = c.concat([t.body, t.sign]);
      if (!i) return null;
      let a = Cn(i.geo, _, n, e, r, !1);
      return (E.add(a), (O += i.geo.index.count / 3), a);
    },
    A = ft(4096);
  ln(A, v);
  let j = k(A, `nihonbashi-fair`, !0);
  (e.scene.add(E), E.updateMatrixWorld(!0), (E.matrixAutoUpdate = !1));
  for (let t of w) e.statics.addBox(t.x0, t.z0, t.x1, t.z1, 0, t.h, `building`);
  (($.built = {
    root: E,
    meshes: D,
    parts: ne,
    fair: j,
    cols: w.length,
    tris: Math.round(O),
    ms: Math.round(performance.now() - n),
    atlas: `${m.width}x${m.height}`,
  }),
    console.log(
      `[test] nihonbashi built`,
      JSON.stringify({
        cols: w.length,
        tris: Math.round(O),
        ms: $.built.ms,
        atlas: $.built.atlas,
        meshes: D.length,
      }),
    ));
}
function Tn(e) {
  let t = e.time.date;
  return !!t && t.m === 10 && (t.d === 19 || t.d === 20);
}
function En() {
  $.crowds.length = 0;
  let e = Ft[0],
    t = Ft[1];
  ($.crowds.push({
    on: !1,
    release: null,
    x: (e.x + t.x) / 2 + 1.6,
    z: (e.z + t.z) / 2,
    r: 2.4,
    n: 4,
    kinds: [`office`, `tourist`, `auntie`],
    lookX: 250,
    lookZ: (e.z + t.z) / 2,
    mode: `watch`,
    when: (e) => e >= 10 && e < 20,
  }),
    $.crowds.push({
      on: !1,
      release: null,
      x: 290.5,
      z: -200.2,
      r: 0.4,
      n: 1,
      kinds: [`office`],
      lookX: 290.5,
      lookZ: -195,
      mode: `watch`,
      when: (e) => e >= 8 && e < 18,
    }),
    $.crowds.push({
      on: !1,
      release: null,
      x: 294,
      z: -307,
      r: 5,
      n: 10,
      kinds: [`auntie`, `elder`, `office`, `tourist`, `uncle`],
      lookX: 294,
      lookZ: -313,
      mode: `watch`,
      when: (e, t) => t && e >= 10 && e < 21,
    }));
}
function Dn(e, t) {
  let n = e.player.position,
    r = Tn(e);
  for (let i of $.crowds) {
    let a = i.when(t, r) && Math.hypot(n.x - i.x, n.z - i.z) < 140;
    if (a && !i.on) {
      try {
        let t = e.peds.crowd(i.x, i.z, i.r, i.n, i.kinds, {
          mode: i.mode,
          lookX: i.lookX,
          lookZ: i.lookZ,
          poses: [`idle`, `phone`],
        });
        i.release = typeof t == `function` ? t : null;
      } catch {
        i.release = null;
      }
      i.on = !0;
    } else if (!a && i.on) {
      try {
        i.release?.();
      } catch {}
      ((i.release = null), (i.on = !1));
    }
  }
}
async function On(e) {
  if (e.params.get(`nihonbashi`) !== `0` && !($.built || $.building)) {
    $.building = !0;
    try {
      await wn(e);
    } catch (e) {
      console.error(`[nihonbashi] build failed`, e);
    } finally {
      $.building = !1;
    }
  }
}
function kn(e) {
  if ($.built) {
    En();
    try {
      $.offQuality = e.events.on(`quality:changed`, () => {
        let t = Sn(e);
        if (t && $.built) {
          for (let n of $.built.meshes)
            ((n.material = t), (n.receiveShadow = e.quality.shadows));
          $.built.fair && ($.built.fair.material = t);
        }
      });
    } catch {}
    (e.params.has(`debug`) || e.params.has(`nihonbashitest`)) &&
      (window.__nihonbashi = {
        stats: () => ({
          cols: $.built?.cols,
          tris: $.built?.tris,
          ms: $.built?.ms,
          atlas: $.built?.atlas,
          meshes: $.built?.meshes.length ?? 0,
        }),
        state: $,
      });
  }
}
function An(e, t) {
  let n = $.built;
  if (!n || (($.lifeT -= e), $.lifeT > 0)) return;
  $.lifeT = 1;
  let r = t.env?.hour ?? 12,
    i = r >= 9.75 && r < 18.5,
    a = r >= 17.25 || r < 5.5;
  for (let e of n.parts) e.set(i, a);
  let o = Tn(t) && r >= 9.5 && r < 21.5;
  (n.fair && n.fair.visible !== o && (n.fair.visible = o), Dn(t, r));
}
function jn() {
  return !1;
}
function Mn(e) {
  $.gen++;
  for (let e of $.crowds)
    if (e.on)
      try {
        e.release?.();
      } catch {}
  $.crowds.length = 0;
  try {
    $.offQuality?.();
  } catch {}
  $.offQuality = null;
  let t = $.built;
  (t &&
    ((t.root.parent ?? e.scene).remove(t.root),
    t.root.traverse((e) => e.geometry?.dispose()),
    t.root.clear()),
    $.atlasTex?.dispose());
  for (let e of $.mats.values()) e.dispose();
  ($.mats.clear(),
    Object.assign($, { built: null, atlasTex: null, canvas: null, lifeT: 0 }));
}
export { yn as t };
