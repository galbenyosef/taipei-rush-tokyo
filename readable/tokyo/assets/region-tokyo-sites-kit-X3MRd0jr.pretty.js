import { et as e, nt as t, rt as n } from "./world-Bo9wkXrT.js";
import { Gt as r, Ht as i, Kt as a, qt as o } from "./region-tokyo-BcM3fReU.js";
import { i as s, n as c, r as l } from "./sites-kit-BhplXgcu.js";
function u(e) {
  o(e.canvas, e);
}
var d = (e, t = 700, n = !1) =>
  `${t} ${Math.max(4, Math.round(e))}px ${n ? a : r}`;
function f(e, t, n, r, i, a, o = 800, s = !1, c) {
  (c && (e.fillStyle = c), (e.font = d(a, o, s)));
  let l = e.measureText(t).width;
  (l > i && l > 0 && ((a *= i / l), (e.font = d(a, o, s))),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    e.fillText(t, n, r));
}
function p(e, t, n, r, i, a, o = 700, s = !1) {
  e.font = d(a, o, s);
  let c = e.measureText(t).width;
  (c > i && c > 0 && (e.font = d((a * i) / c, o, s)),
    (e.textAlign = `left`),
    (e.textBaseline = `middle`),
    e.fillText(t, n, r));
}
function m(e, t, n, r, i, a, o = 700, s = !1) {
  e.font = d(a, o, s);
  let c = e.measureText(t).width;
  (c > i && c > 0 && (e.font = d((a * i) / c, o, s)),
    (e.textAlign = `right`),
    (e.textBaseline = `middle`),
    e.fillText(t, n, r));
}
function h(e, t, n, r, a, o, s = 800, c = !1, l) {
  let u = i(t);
  if (!u.length) return;
  l && (e.fillStyle = l);
  let f = Math.min(o * 1.06, (a - r) / u.length),
    p = Math.min(o, f / 1.02);
  ((e.textAlign = `center`), (e.textBaseline = `middle`));
  let m = r + f / 2 + Math.max(0, (a - r - f * u.length) / 2);
  for (let t of u)
    (t.text &&
      (e.save(),
      e.translate(n + (t.shift ? p * 0.18 : 0), m - (t.shift ? p * 0.18 : 0)),
      t.rotate && e.rotate(Math.PI / 2),
      (e.font = d(t.tcy ? p * 0.62 : p, s, c)),
      e.fillText(t.text, 0, 0),
      e.restore()),
      (m += t.text ? f : f / 2));
}
function g(e, t, n, r, i, a, o, s, c = 18) {
  ((e.fillStyle = a),
    e.fillRect(t, n, r, i),
    (e.strokeStyle = o),
    (e.lineWidth = Math.max(1, i / 90)));
  for (let a = 0; a < c; a++) {
    let a = n + s.next() * i;
    ((e.globalAlpha = 0.18 + s.next() * 0.25),
      e.beginPath(),
      e.moveTo(t, a),
      e.bezierCurveTo(
        t + r * 0.3,
        a + (s.next() - 0.5) * i * 0.08,
        t + r * 0.7,
        a + (s.next() - 0.5) * i * 0.08,
        t + r,
        a + (s.next() - 0.5) * i * 0.05,
      ),
      e.stroke());
  }
  e.globalAlpha = 1;
}
function _(e, t, n, r, i, a, o = 1) {
  let s = e.createLinearGradient(0, n, 0, n + i);
  (s.addColorStop(0, `rgba(255,255,255,${0.08 * o})`),
    s.addColorStop(1, `rgba(0,0,0,${0.14 * o})`),
    (e.fillStyle = s),
    e.fillRect(t, n, r, i),
    (e.fillStyle = `rgba(40,30,20,${0.1 * o})`));
  for (let s = 0; s < 6 * o; s++)
    e.fillRect(
      t + a.next() * r,
      n + i * 0.3,
      Math.max(1, r * 0.004),
      i * (0.3 + a.next() * 0.7),
    );
}
function v(e, t, n, r, i) {
  u(e);
  let a = r.panels ?? (Array.isArray(r.text) ? r.text.length : 3);
  ((e.fillStyle = r.bg), e.fillRect(0, 0, t, n));
  let o = t / a;
  for (let t = 0; t < a; t++) {
    let r = e.createLinearGradient(t * o, 0, (t + 1) * o, 0);
    (r.addColorStop(0, `rgba(0,0,0,0.18)`),
      r.addColorStop(0.35, `rgba(255,255,255,0.06)`),
      r.addColorStop(1, `rgba(0,0,0,0.12)`),
      (e.fillStyle = r),
      e.fillRect(t * o, 0, o, n));
  }
  e.fillStyle = `rgba(0,0,0,0.55)`;
  for (let r = 1; r < a; r++)
    e.fillRect(
      r * o - Math.max(1, t * 0.004),
      n * 0.16,
      Math.max(2, t * 0.008),
      n,
    );
  if (
    ((e.fillStyle = `rgba(0,0,0,0.12)`),
    e.fillRect(0, 0, t, n * 0.12),
    r.hem && ((e.fillStyle = r.hem), e.fillRect(0, n * 0.93, t, n * 0.07)),
    (e.fillStyle = r.fg ?? `#f6f2e8`),
    r.top && f(e, r.top, t / 2, n * 0.07, t * 0.9, n * 0.08, 700, r.serif),
    Array.isArray(r.text))
  )
    for (let t = 0; t < a; t++) {
      let i = r.text[t] ?? ``;
      [...i].length > 1
        ? h(
            e,
            i,
            (t + 0.5) * o,
            n * 0.2,
            n * 0.9,
            Math.min(o * 0.7, n * 0.3),
            800,
            r.serif,
          )
        : f(
            e,
            i,
            (t + 0.5) * o,
            n * 0.55,
            o * 0.86,
            Math.min(o * 0.86, n * 0.62),
            900,
            r.serif,
          );
    }
  else {
    let i = r.text;
    f(e, i, t / 2, n * 0.56, t * 0.86, n * 0.6, 900, r.serif);
  }
  _(e, 0, 0, t, n, i, 0.6);
}
function y(e, t, n, r, i) {
  if (
    (u(e),
    r.style === `wood`
      ? g(e, 0, 0, t, n, r.bg, `rgba(40,20,5,0.9)`, i, 22)
      : ((e.fillStyle = r.bg), e.fillRect(0, 0, t, n)),
    r.style === `lightbox`)
  ) {
    let r = e.createLinearGradient(0, 0, 0, n);
    (r.addColorStop(0, `rgba(255,255,255,0.22)`),
      r.addColorStop(0.5, `rgba(255,255,255,0.05)`),
      r.addColorStop(1, `rgba(0,0,0,0.12)`),
      (e.fillStyle = r),
      e.fillRect(0, 0, t, n));
  } else
    r.style === `lacquer` &&
      ((e.fillStyle = `rgba(255,255,255,0.12)`),
      e.fillRect(0, n * 0.08, t, n * 0.1));
  r.border &&
    ((e.strokeStyle = r.border),
    (e.lineWidth = Math.max(2, n * 0.07)),
    e.strokeRect(
      e.lineWidth / 2,
      e.lineWidth / 2,
      t - e.lineWidth,
      n - e.lineWidth,
    ));
  let a = t * 0.04;
  if (r.mark) {
    let i = n * 0.36;
    ((e.fillStyle = r.markBg ?? r.fg),
      e.beginPath(),
      e.arc(n * 0.5 + t * 0.02, n / 2, i, 0, Math.PI * 2),
      e.fill(),
      f(
        e,
        r.mark,
        n * 0.5 + t * 0.02,
        n / 2 + i * 0.04,
        i * 1.5,
        i * 1.4,
        900,
        r.serif,
        r.bg,
      ),
      (a = n + t * 0.03));
  }
  let o = t - a - t * 0.04;
  ((e.fillStyle = r.fg),
    r.sub
      ? (f(
          e,
          r.text,
          a + o / 2,
          n * 0.4,
          o,
          n * 0.56,
          r.weight ?? 900,
          r.serif,
        ),
        (e.fillStyle = r.subColor ?? r.fg),
        f(e, r.sub, a + o / 2, n * 0.82, o, n * 0.2, 700, !1))
      : f(e, r.text, a + o / 2, n * 0.53, o, n * 0.7, r.weight ?? 900, r.serif),
    r.style !== `lightbox` && _(e, 0, 0, t, n, i, 0.8));
}
function b(e, t, n, r, i) {
  (u(e),
    r.style === `wood`
      ? g(e, 0, 0, t, n, r.bg, `rgba(40,20,5,0.9)`, i, 10)
      : ((e.fillStyle = r.bg), e.fillRect(0, 0, t, n)),
    r.border &&
      ((e.strokeStyle = r.border),
      (e.lineWidth = Math.max(2, t * 0.07)),
      e.strokeRect(
        e.lineWidth / 2,
        e.lineWidth / 2,
        t - e.lineWidth,
        n - e.lineWidth,
      )),
    (e.fillStyle = r.fg),
    r.sub
      ? (h(
          e,
          r.text,
          t * 0.58,
          n * 0.05,
          n * 0.95,
          t * 0.62,
          r.weight ?? 900,
          r.serif,
        ),
        (e.fillStyle = r.subColor ?? r.fg),
        h(e, r.sub, t * 0.2, n * 0.3, n * 0.95, t * 0.26, 700, !1))
      : h(
          e,
          r.text,
          t / 2,
          n * 0.05,
          n * 0.95,
          t * 0.74,
          r.weight ?? 900,
          r.serif,
        ),
    r.style !== `lightbox` && _(e, 0, 0, t, n, i, 0.6));
}
function x(e, t, n, r, i) {
  (u(e), (e.fillStyle = r.bg ?? `#c8261c`), e.fillRect(0, 0, t, n));
  for (let r of [0.25, 0.75]) {
    let i = e.createRadialGradient(t * r, n * 0.5, 0, t * r, n * 0.5, t * 0.3);
    (i.addColorStop(0, `rgba(255,220,160,0.35)`),
      i.addColorStop(1, `rgba(255,220,160,0)`),
      (e.fillStyle = i),
      e.fillRect(0, 0, t, n));
  }
  ((e.strokeStyle = `rgba(60,10,5,0.35)`), (e.lineWidth = Math.max(1, n / 64)));
  for (let r = 1; r < 12; r++)
    (e.beginPath(),
      e.moveTo(0, (r / 12) * n),
      e.lineTo(t, (r / 12) * n),
      e.stroke());
  ((e.fillStyle = r.band ?? `#1a1410`),
    e.fillRect(0, 0, t, n * 0.07),
    e.fillRect(0, n * 0.93, t, n * 0.07));
  let a = r.fg ?? `#15100c`;
  for (let i of [0.25, 0.75])
    [...r.text].length > 1
      ? h(
          e,
          r.text,
          t * i,
          n * 0.12,
          n * 0.88,
          Math.min(t * 0.36, n * 0.3),
          900,
          !0,
          a,
        )
      : f(e, r.text, t * i, n * 0.52, t * 0.4, n * 0.5, 900, !0, a);
}
function S(e, t, n, r, i) {
  u(e);
  let a = r.style ?? `white`,
    o =
      a === `wood`
        ? `#b98a52`
        : a === `black`
          ? `#17181a`
          : a === `yellow`
            ? `#f5d43a`
            : `#f6f3ea`,
    s = a === `black` ? `#f2efe6` : `#1b1712`;
  a === `wood`
    ? g(e, 0, 0, t, n, o, `rgba(50,25,8,0.9)`, i, 16)
    : ((e.fillStyle = o), e.fillRect(0, 0, t, n));
  let c = 0;
  r.title &&
    ((e.fillStyle = a === `yellow` || a === `black` ? `#c8261c` : `#1b1712`),
    e.fillRect(0, 0, t, n * 0.16),
    f(
      e,
      r.title,
      t / 2,
      n * 0.085,
      t * 0.9,
      n * 0.11,
      900,
      !1,
      a === `yellow` || a === `black` ? `#fff8e8` : `#f6f3ea`,
    ),
    (c = n * 0.17));
  let l = r.items.length;
  if (r.tanzaku) {
    let i = t / l;
    for (let t = 0; t < l; t++) {
      let [a, o] = r.items[t];
      ((e.fillStyle = t % 2 ? `rgba(0,0,0,0.05)` : `rgba(255,255,255,0.05)`),
        e.fillRect(t * i, c, i, n - c),
        (e.strokeStyle = `rgba(0,0,0,0.35)`),
        (e.lineWidth = 1),
        e.strokeRect(t * i + 1, c + 1, i - 2, n - c - 2),
        h(e, a, (t + 0.5) * i, c + n * 0.04, n * 0.74, i * 0.62, 800, !0, s),
        (e.fillStyle = `#b3241b`),
        f(e, o, (t + 0.5) * i, n * 0.86, i * 0.9, i * 0.4, 800, !1));
    }
  } else {
    let i = (n - c) / l;
    for (let o = 0; o < l; o++) {
      let [u, d] = r.items[o],
        f = c + (o + 0.5) * i;
      ((e.fillStyle = s),
        p(e, u, t * 0.06, f, t * 0.6, i * 0.58, 800),
        (e.fillStyle = a === `black` ? `#ffd24a` : `#b3241b`),
        m(e, d, t * 0.95, f, t * 0.34, i * 0.58, 800),
        o < l - 1 &&
          ((e.fillStyle = `rgba(0,0,0,0.18)`),
          e.fillRect(
            t * 0.05,
            c + (o + 1) * i,
            t * 0.9,
            Math.max(1, n * 0.004),
          )));
    }
  }
  _(e, 0, 0, t, n, i, 0.4);
}
function C(e, t, n, r, i) {
  (u(e), (e.fillStyle = r.frame ?? `#6b4a2a`), e.fillRect(0, 0, t, n));
  let a = Math.max(2, t * 0.06);
  ((e.fillStyle = `#1e2a24`), e.fillRect(a, a, t - 2 * a, n - 2 * a));
  let o = r.colors ?? [`#f4f1e6`, `#ffd75a`, `#ff8f8f`, `#9fe0ff`],
    s = r.lines.length,
    c = (n - 2 * a) / Math.max(s, 1);
  for (let n = 0; n < s; n++)
    ((e.fillStyle = o[n % o.length]),
      (e.globalAlpha = 0.9),
      f(
        e,
        r.lines[n],
        t / 2 + (i.next() - 0.5) * t * 0.03,
        a + (n + 0.5) * c,
        t - 3 * a,
        c * 0.6,
        700,
      ));
  ((e.globalAlpha = 1), (e.fillStyle = `rgba(255,255,255,0.06)`));
  for (let r = 0; r < 30; r++)
    e.fillRect(
      a + i.next() * (t - 2 * a),
      a + i.next() * (n - 2 * a),
      t * 0.08,
      Math.max(1, n * 0.004),
    );
}
function w(e, t, n, r, i) {
  (u(e), (e.fillStyle = r.bg ?? `#050505`), e.fillRect(0, 0, t, n));
  let a = r.lines.length,
    o = n / a,
    s = r.colors ?? [`#ff3a2a`, `#ffc21a`, `#3aff5a`];
  for (let n = 0; n < a; n++)
    f(
      e,
      r.lines[n],
      t / 2,
      (n + 0.5) * o,
      t * 0.96,
      o * 0.74,
      900,
      !1,
      s[n % s.length],
    );
  let c = Math.max(2, Math.round(n / 28));
  e.fillStyle = `rgba(0,0,0,0.55)`;
  for (let r = 0; r < t; r += c) e.fillRect(r, 0, Math.max(1, c * 0.3), n);
  for (let r = 0; r < n; r += c) e.fillRect(0, r, t, Math.max(1, c * 0.3));
}
function T(e, t, n, r, i) {
  (u(e),
    (e.fillStyle = r.bg),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = r.band ?? `rgba(255,255,255,0.9)`),
    e.fillRect(0, 0, t, n * 0.06),
    (e.fillStyle = `rgba(0,0,0,0.18)`),
    e.fillRect(0, 0, t * 0.08, n),
    (e.fillStyle = r.fg ?? `#ffffff`),
    h(
      e,
      r.text,
      t * 0.55,
      n * 0.08,
      r.sub ? n * 0.8 : n * 0.96,
      t * 0.66,
      900,
      !1,
    ),
    r.sub && h(e, r.sub, t * 0.55, n * 0.81, n * 0.98, t * 0.3, 700, !1),
    _(e, 0, 0, t, n, i, 0.3));
}
function E(e, t, n, r, i) {
  (u(e), (e.fillStyle = `#ffffff`), e.fillRect(0, 0, t, n));
  let a = r.colors ?? [`#ff6fa8`, `#ffd84a`, `#ff4d4d`, `#ffffff`, `#ff9bd0`],
    o = t / 2,
    s = n / 2,
    c = Math.min(t, n) * 0.5;
  for (let t = 0; t < 4; t++) {
    let n = c * (1 - t * 0.18),
      r = 26 - t * 4;
    for (let l = 0; l < r; l++) {
      let u = (l / r) * Math.PI * 2 + t * 0.2;
      ((e.fillStyle = a[(l + t) % a.length]),
        e.beginPath(),
        e.arc(
          o + Math.cos(u) * n * 0.86,
          s + Math.sin(u) * n * 0.86,
          c * 0.11 + i.next() * c * 0.03,
          0,
          Math.PI * 2,
        ),
        e.fill());
    }
  }
  ((e.fillStyle = `#f4f0e0`),
    e.beginPath(),
    e.arc(o, s, c * 0.34, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#c8261c`),
    e.fillRect(o - c * 0.12, s - c * 0.36, c * 0.24, c * 0.72),
    f(e, `祝`, o, s - c * 0.17, c * 0.22, c * 0.2, 900, !0, `#fff`),
    h(e, r.text, o, s - c * 0.04, s + c * 0.34, c * 0.14, 800, !0, `#fff`),
    r.from &&
      ((e.fillStyle = `#ffffff`),
      e.fillRect(t * 0.3, n * 0.9, t * 0.4, n * 0.1),
      f(e, r.from, t / 2, n * 0.95, t * 0.38, n * 0.07, 700, !0, `#222`)));
}
function D(e, t, n, r, i) {
  (u(e), (e.fillStyle = r.bg ?? `#3a2a1e`), e.fillRect(0, 0, t, n));
  let a = Math.ceil(r.items.length / 2),
    o = Math.ceil(r.items.length / a),
    s = n / o,
    c = t / a;
  for (let n = 0; n < o; n++) {
    ((e.fillStyle = `#e8e4da`),
      e.fillRect(0, (n + 1) * s - s * 0.1, t, s * 0.04));
    for (let t = 0; t < a; t++) {
      let o = r.items[n * a + t];
      if (!o) continue;
      let [l, u, d] = o,
        p = (t + 0.5) * c,
        m = n * s + s * 0.48;
      ((e.fillStyle = `#fbfbf6`),
        e.beginPath(),
        e.ellipse(p, m + s * 0.12, c * 0.38, s * 0.12, 0, 0, Math.PI * 2),
        e.fill(),
        ee(e, d, p, m, c * 0.32, s * 0.22, i),
        (e.fillStyle = `#ffffff`),
        e.fillRect(p - c * 0.42, n * s + s * 0.7, c * 0.84, s * 0.18),
        (e.fillStyle = `#1b1712`),
        f(e, l, p, n * s + s * 0.755, c * 0.8, s * 0.075, 800),
        (e.fillStyle = `#b3241b`),
        f(e, u, p, n * s + s * 0.835, c * 0.8, s * 0.075, 800));
    }
  }
  let l = e.createLinearGradient(0, 0, t, n);
  (l.addColorStop(0, `rgba(255,255,255,0.14)`),
    l.addColorStop(0.4, `rgba(255,255,255,0)`),
    l.addColorStop(0.6, `rgba(255,255,255,0.08)`),
    l.addColorStop(1, `rgba(255,255,255,0)`),
    (e.fillStyle = l),
    e.fillRect(0, 0, t, n));
}
function ee(e, t, n, r, i, a, o) {
  let s = (t, n, r, i, a) => {
    ((e.fillStyle = t),
      e.beginPath(),
      e.ellipse(n, r, i, a, 0, 0, Math.PI * 2),
      e.fill());
  };
  switch (t) {
    case `omurice`:
      (s(`#f4c33a`, n, r, i * 0.9, a * 0.8),
        (e.strokeStyle = `#c0301f`),
        (e.lineWidth = a * 0.18),
        e.beginPath(),
        e.moveTo(n - i * 0.6, r),
        e.quadraticCurveTo(n, r - a * 0.5, n + i * 0.6, r),
        e.stroke());
      break;
    case `napolitan`:
      s(`#e2622a`, n, r, i * 0.85, a * 0.75);
      for (let e = 0; e < 5; e++)
        s(
          `#3d8a3a`,
          n + (o.next() - 0.5) * i,
          r + (o.next() - 0.5) * a * 0.6,
          i * 0.08,
          a * 0.08,
        );
      break;
    case `curry`:
      (s(`#f7f3e8`, n - i * 0.3, r, i * 0.55, a * 0.7),
        s(`#8a4a12`, n + i * 0.3, r + a * 0.05, i * 0.55, a * 0.65),
        s(`#c46a1a`, n + i * 0.4, r - a * 0.1, i * 0.15, a * 0.15));
      break;
    case `katsu`:
      (s(`#f7f3e8`, n - i * 0.3, r, i * 0.5, a * 0.65),
        s(`#7a3e10`, n + i * 0.25, r, i * 0.6, a * 0.65),
        (e.fillStyle = `#d8902e`));
      for (let t = 0; t < 4; t++)
        e.fillRect(n + i * (t * 0.25 - 0.2), r - a * 0.45, i * 0.18, a * 0.9);
      break;
    case `cream-soda`:
      ((e.fillStyle = `#2fc46a`),
        e.fillRect(n - i * 0.25, r - a * 1.9, i * 0.5, a * 2.2),
        s(`#fff7e6`, n, r - a * 1.9, i * 0.3, a * 0.35),
        s(`#d8202a`, n + i * 0.08, r - a * 2.3, i * 0.08, a * 0.1));
      break;
    case `pudding`:
      ((e.fillStyle = `#f2c66a`),
        e.beginPath(),
        e.moveTo(n - i * 0.45, r + a * 0.3),
        e.lineTo(n + i * 0.45, r + a * 0.3),
        e.lineTo(n + i * 0.3, r - a * 0.7),
        e.lineTo(n - i * 0.3, r - a * 0.7),
        e.fill(),
        s(`#6a3410`, n, r - a * 0.72, i * 0.3, a * 0.18),
        s(`#ffffff`, n + i * 0.2, r - a * 0.95, i * 0.12, a * 0.14));
      break;
    case `sandwich`:
      for (let t = 0; t < 3; t++) {
        let o = n + (t - 1) * i * 0.55;
        ((e.fillStyle = `#f7ead0`),
          e.beginPath(),
          e.moveTo(o - i * 0.25, r + a * 0.4),
          e.lineTo(o + i * 0.25, r + a * 0.4),
          e.lineTo(o, r - a * 0.6),
          e.fill(),
          (e.fillStyle = t === 1 ? `#f4d23a` : `#5aa04a`),
          e.fillRect(o - i * 0.18, r + a * 0.05, i * 0.36, a * 0.12));
      }
      break;
    case `soba`:
    case `udon`:
      (s(`#2a1a12`, n, r, i * 0.85, a * 0.8),
        s(
          t === `soba` ? `#7a6248` : `#efe8d2`,
          n,
          r - a * 0.05,
          i * 0.7,
          a * 0.6,
        ),
        s(`#e9b04a`, n + i * 0.25, r - a * 0.15, i * 0.28, a * 0.25),
        s(`#4f9a3a`, n - i * 0.3, r - a * 0.1, i * 0.12, a * 0.1));
      break;
    case `ramen`:
      (s(`#c0301f`, n, r, i * 0.88, a * 0.82),
        s(`#d8a25a`, n, r - a * 0.05, i * 0.72, a * 0.62),
        s(`#f4e9c8`, n - i * 0.2, r, i * 0.25, a * 0.2),
        s(`#3d2a1a`, n + i * 0.3, r - a * 0.1, i * 0.2, a * 0.15));
      break;
    case `parfait`:
      ((e.fillStyle = `#f4e4ea`),
        e.fillRect(n - i * 0.2, r - a * 2, i * 0.4, a * 2.3),
        s(`#e2506a`, n, r - a * 2.1, i * 0.3, a * 0.3),
        s(`#ffffff`, n, r - a * 1.6, i * 0.25, a * 0.25),
        s(`#6a3410`, n, r - a * 0.9, i * 0.2, a * 0.2));
      break;
    case `coffee`:
      (s(`#ffffff`, n, r, i * 0.5, a * 0.45),
        s(`#3b2112`, n, r - a * 0.05, i * 0.4, a * 0.32));
      break;
    case `tamago`:
      ((e.fillStyle = `#f2c63a`),
        e.fillRect(n - i * 0.7, r - a * 0.5, i * 1.4, a * 0.9),
        (e.fillStyle = `rgba(160,90,10,0.45)`));
      for (let t = 0; t < 4; t++)
        e.fillRect(n - i * 0.7, r - a * 0.5 + t * a * 0.24, i * 1.4, a * 0.04);
      break;
    default:
      s(`#c99a5a`, n, r, i * 0.8, a * 0.7);
  }
}
function te(e, t, n, r, i) {
  (u(e),
    (e.fillStyle = `#d9dcdf`),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = `#1c3f8a`),
    e.fillRect(0, 0, t, n * 0.1),
    f(e, r.title, t / 2, n * 0.05, t * 0.9, n * 0.07, 900, !1, `#ffffff`));
  let a = Math.ceil(r.buttons.length / 4),
    o = (t * 0.9) / 4,
    s = (n * 0.62) / a;
  for (let i = 0; i < r.buttons.length; i++) {
    let a = i % 4,
      c = Math.floor(i / 4),
      l = t * 0.05 + a * o,
      u = n * 0.13 + c * s;
    ((e.fillStyle = c === 0 ? `#ffe9a8` : `#f4f6f8`),
      e.fillRect(l + 2, u + 2, o - 4, s - 4),
      (e.fillStyle = `#16181a`),
      f(e, r.buttons[i][0], l + o / 2, u + s * 0.38, o * 0.86, s * 0.3, 800),
      (e.fillStyle = `#b3241b`),
      f(e, r.buttons[i][1], l + o / 2, u + s * 0.74, o * 0.86, s * 0.24, 800));
  }
  ((e.fillStyle = `#2a2c2e`),
    e.fillRect(t * 0.1, n * 0.8, t * 0.25, n * 0.04),
    e.fillRect(t * 0.55, n * 0.8, t * 0.35, n * 0.05),
    e.fillRect(t * 0.3, n * 0.9, t * 0.4, n * 0.06));
}
function O(e, t, n, r, i) {
  u(e);
  let a = r.kind;
  if (
    ((e.fillStyle =
      a === `guitar`
        ? `#2a2420`
        : a === `jewel`
          ? `#14121a`
          : a === `fish`
            ? `#dfe7ea`
            : a === `parts`
              ? `#cfd3d6`
              : `#efe7d6`),
    e.fillRect(0, 0, t, n),
    a === `choco`)
  ) {
    let r = [
      `#5a2c14`,
      `#c8261c`,
      `#f2c63a`,
      `#2a7a4a`,
      `#2a4aa8`,
      `#f4f0e6`,
      `#8a2a8a`,
    ];
    for (let a = 0; a < 6; a++)
      for (let o = 0; o < 8; o++)
        ((e.fillStyle =
          r[(o * 3 + a * 5 + Math.floor(i.next() * 3)) % r.length]),
          e.fillRect((o / 8) * t + 2, (a / 6) * n + 2, t / 8 - 4, n / 6 - 5),
          (e.fillStyle = `rgba(255,255,255,0.5)`),
          e.fillRect(
            (o / 8) * t + 4,
            (a / 6) * n + n / 12,
            t / 8 - 8,
            Math.max(1, n / 60),
          ));
  } else if (a === `panda` || a === `souvenir`)
    for (let r = 0; r < 22; r++) {
      let o = (0.06 + (r % 6) * 0.17 + (i.next() - 0.5) * 0.03) * t,
        s = (0.14 + Math.floor(r / 6) * 0.23) * n,
        c = t * (0.045 + i.next() * 0.025);
      if (a === `panda` || r % 3) {
        ((e.fillStyle = `#fafafa`),
          e.beginPath(),
          e.arc(o, s, c, 0, Math.PI * 2),
          e.fill(),
          (e.fillStyle = `#121212`));
        for (let t of [-1, 1])
          (e.beginPath(),
            e.arc(o + t * c * 0.75, s - c * 0.75, c * 0.32, 0, Math.PI * 2),
            e.fill(),
            e.beginPath(),
            e.ellipse(
              o + t * c * 0.38,
              s - c * 0.05,
              c * 0.2,
              c * 0.27,
              t * 0.5,
              0,
              Math.PI * 2,
            ),
            e.fill());
      } else
        ((e.fillStyle = [`#c8261c`, `#2a4aa8`, `#f2c63a`, `#e85a9a`][r % 4]),
          e.fillRect(o - c, s - c, c * 2, c * 2));
    }
  else if (a === `guitar`)
    for (let r = 0; r < 7; r++) {
      let i = ((r + 0.5) / 7) * t,
        a = n * 0.05,
        o = [
          `#c8261c`,
          `#f2e2b8`,
          `#1a1a1a`,
          `#2a5aa8`,
          `#e2a24a`,
          `#f4f4f4`,
          `#7a2a1a`,
        ][r];
      ((e.fillStyle = `#3a2a1a`),
        e.fillRect(i - t * 0.006, a, t * 0.012, n * 0.45),
        (e.fillStyle = o),
        e.beginPath(),
        e.ellipse(i, n * 0.6, t * 0.05, n * 0.12, 0, 0, Math.PI * 2),
        e.ellipse(i, n * 0.78, t * 0.06, n * 0.14, 0, 0, Math.PI * 2),
        e.fill(),
        (e.fillStyle = `#111`),
        e.beginPath(),
        e.arc(i, n * 0.66, t * 0.015, 0, Math.PI * 2),
        e.fill(),
        (e.fillStyle = `#ffffff`),
        e.fillRect(i - t * 0.03, n * 0.93, t * 0.06, n * 0.05));
    }
  else if (a === `parts`)
    for (let r = 0; r < 8; r++)
      for (let i = 0; i < 10; i++)
        ((e.fillStyle = (i + r) % 3 ? `#e9ecef` : `#f7e3a0`),
          e.fillRect((i / 10) * t + 1, (r / 8) * n + 1, t / 10 - 2, n / 8 - 2),
          (e.fillStyle = [
            `#c8261c`,
            `#2a5aa8`,
            `#3a8a3a`,
            `#7a5a2a`,
            `#1a1a1a`,
          ][(i * 7 + r * 3) % 5]),
          e.fillRect(
            (i / 10) * t + t / 40,
            (r / 8) * n + n / 32,
            t / 20,
            n / 32,
          ));
  else if (a === `jewel`)
    for (let r = 0; r < 3; r++)
      for (let i = 0; i < 5; i++) {
        let a = ((i + 0.5) / 5) * t,
          o = ((r + 0.5) / 3) * n;
        ((e.fillStyle = `#2a2236`),
          e.fillRect(a - t * 0.08, o - n * 0.13, t * 0.16, n * 0.26),
          (e.strokeStyle = [`#f2c63a`, `#e6e6ee`, `#f2c63a`][r]),
          (e.lineWidth = Math.max(1, t / 160)));
        for (let n = 0; n < 3; n++)
          (e.beginPath(),
            e.arc(a + (n - 1) * t * 0.045, o, t * 0.018, 0, Math.PI * 2),
            e.stroke());
      }
  else if (a === `fish`)
    for (let i = 0; i < 6; i++) {
      let a = (((i % 3) + 0.5) / 3) * t,
        o = ((Math.floor(i / 3) + 0.5) / 2) * n;
      ((e.fillStyle = i % 2 ? `#a8142a` : `#c8384a`),
        e.fillRect(a - t * 0.13, o - n * 0.15, t * 0.26, n * 0.26),
        (e.fillStyle = `rgba(255,255,255,0.35)`));
      for (let r = 0; r < 4; r++)
        e.fillRect(
          a - t * 0.13,
          o - n * 0.12 + r * n * 0.06,
          t * 0.26,
          Math.max(1, n / 120),
        );
      ((e.fillStyle = `#ffffff`),
        e.fillRect(a - t * 0.08, o + n * 0.13, t * 0.16, n * 0.08),
        (e.fillStyle = `#b3241b`),
        f(e, r.price ?? ``, a, o + n * 0.17, t * 0.15, n * 0.06, 800));
    }
  else if (a === `tamago`)
    for (let r = 0; r < 3; r++)
      for (let i = 0; i < 4; i++) {
        ((e.fillStyle = `#f2c63a`),
          e.fillRect(
            (i / 4) * t + t * 0.02,
            (r / 3) * n + n * 0.06,
            t / 4 - t * 0.04,
            n / 3 - n * 0.14,
          ),
          (e.fillStyle = `rgba(150,80,10,0.4)`));
        for (let a = 0; a < 4; a++)
          e.fillRect(
            (i / 4) * t + t * 0.02,
            (r / 3) * n + n * 0.08 + a * n * 0.05,
            t / 4 - t * 0.04,
            Math.max(1, n / 150),
          );
      }
  else if (a === `books`)
    for (let r = 0; r < 4; r++) {
      let a = 0;
      for (; a < t;) {
        let o = t * (0.02 + i.next() * 0.03);
        ((e.fillStyle = [
          `#7a2a1a`,
          `#2a3a6a`,
          `#d8c8a0`,
          `#3a5a3a`,
          `#e8e0d0`,
          `#5a4a3a`,
        ][Math.floor(i.next() * 6)]),
          e.fillRect(a, (r / 4) * n + n * 0.03, o - 1, n / 4 - n * 0.05),
          (a += o));
      }
    }
  else if (a === `knives`) {
    ((e.fillStyle = `#2a2420`), e.fillRect(0, 0, t, n));
    for (let r = 0; r < 9; r++) {
      let i = ((r + 0.5) / 9) * n;
      ((e.fillStyle = `#d8dde2`),
        e.fillRect(t * 0.15, i - n * 0.02, t * 0.55, n * 0.04),
        (e.fillStyle = `#6a4a2a`),
        e.fillRect(t * 0.7, i - n * 0.018, t * 0.18, n * 0.036),
        (e.fillStyle = `#ffffff`),
        e.fillRect(t * 0.05, i - n * 0.02, t * 0.08, n * 0.04));
    }
  } else if (a === `dry`) {
    let r = [
      `#c89a5a`,
      `#7a4a22`,
      `#b8321c`,
      `#5a7a2a`,
      `#e8d29a`,
      `#3a2a1a`,
      `#d8a83a`,
    ];
    for (let a = 0; a < 4; a++) {
      ((e.fillStyle = `#8a6a44`),
        e.fillRect(0, ((a + 1) / 4) * n - n * 0.03, t, n * 0.03));
      for (let o = 0; o < 9; o++) {
        let s = (o / 9) * t + t * 0.008,
          c = (a / 4) * n + n * 0.04,
          l = t / 9 - t * 0.016,
          u = n / 4 - n * 0.09;
        ((e.fillStyle =
          r[(o * 5 + a * 3 + Math.floor(i.next() * 2)) % r.length]),
          e.fillRect(s, c + u * 0.15, l, u * 0.85),
          (e.fillStyle = `rgba(255,255,255,0.35)`),
          e.fillRect(s, c + u * 0.15, l * 0.2, u * 0.85),
          (e.fillStyle = `#ffffff`),
          e.fillRect(s + l * 0.2, c + u * 0.55, l * 0.6, u * 0.25),
          (e.fillStyle = `#c8161c`),
          e.fillRect(s + l * 0.3, c + u * 0.62, l * 0.4, u * 0.1));
      }
    }
  } else if (a === `window`) {
    let r = e.createLinearGradient(0, 0, 0, n);
    (r.addColorStop(0, `#fff6e2`),
      r.addColorStop(1, `#e8d8bc`),
      (e.fillStyle = r),
      e.fillRect(0, 0, t, n),
      (e.fillStyle = `#5a5048`),
      e.fillRect(0, n * 0.18, t, n * 0.02));
    for (let r = 0; r < 6; r++)
      ((e.fillStyle = [
        `#2a3a5a`,
        `#c8b89a`,
        `#7a2a2a`,
        `#3a5a4a`,
        `#e8e4dc`,
        `#4a4a52`,
      ][r]),
        e.fillRect(t * (0.05 + r * 0.08), n * 0.2, t * 0.065, n * 0.42));
    ((e.fillStyle = `#8a6a44`),
      e.fillRect(t * 0.58, n * 0.6, t * 0.36, n * 0.08),
      (e.fillStyle = `#d8c8a8`),
      e.fillRect(t * 0.6, n * 0.68, t * 0.04, n * 0.3),
      e.fillRect(t * 0.88, n * 0.68, t * 0.04, n * 0.3),
      (e.fillStyle = `#c8161c`),
      e.fillRect(t * 0.66, n * 0.15, t * 0.22, n * 0.36),
      (e.fillStyle = `#ffffff`),
      e.fillRect(t * 0.69, n * 0.2, t * 0.16, n * 0.04));
  } else if (a === `katsuobushi`)
    for (let r = 0; r < 12; r++) {
      let i = (((r % 4) + 0.5) / 4) * t,
        a = ((Math.floor(r / 4) + 0.5) / 3) * n;
      ((e.fillStyle = `#5a3a1e`),
        e.beginPath(),
        e.ellipse(i, a, t * 0.1, n * 0.06, 0.2, 0, Math.PI * 2),
        e.fill(),
        (e.fillStyle = `#f4ecd8`),
        e.fillRect(i - t * 0.09, a + n * 0.08, t * 0.18, n * 0.08));
    }
  r.label &&
    ((e.fillStyle = `#ffffff`),
    e.fillRect(t * 0.02, n * 0.86, t * 0.5, n * 0.12),
    (e.fillStyle = `#b3241b`),
    f(e, r.label, t * 0.27, n * 0.92, t * 0.46, n * 0.08, 900));
}
function k(e, t, n, r, i) {
  u(e);
  let a = t / r.cols,
    o = n / r.rows;
  for (let t = 0; t < r.cols * r.rows; t++) {
    let n = r.cells[t % r.cells.length],
      s = (t % r.cols) * a,
      c = Math.floor(t / r.cols) * o;
    (e.save(),
      e.translate(s, c),
      e.beginPath(),
      e.rect(0, 0, a, o),
      e.clip(),
      n.v
        ? b(
            e,
            a,
            o,
            {
              bg: n.bg,
              fg: n.fg,
              text: n.text,
              sub: n.sub,
              serif: n.serif,
              style: n.style,
            },
            i,
          )
        : y(
            e,
            a,
            o,
            {
              bg: n.bg,
              fg: n.fg,
              text: n.text,
              sub: n.sub,
              serif: n.serif,
              style: n.style,
            },
            i,
          ),
      e.restore());
  }
}
function A(e, t, n) {
  let r = e % t,
    i = Math.floor(e / t) % n,
    a = 0.004;
  return [r / t + a, 1 - (i + 1) / n + a, (r + 1) / t - a, 1 - i / n - a];
}
function j(e, t, n, r, i) {
  let a = r.items.length,
    o = t / a;
  for (let t = 0; t < a; t++)
    (e.save(),
      e.translate(t * o, 0),
      e.beginPath(),
      e.rect(0, 0, o, n),
      e.clip(),
      x(e, o, n, r.items[t], i),
      e.restore());
}
function M(e, t, n, r, i) {
  let a = [`#ffffff`, `#ffe066`, `#7ad8ff`, `#ff9a9a`];
  k(
    e,
    t,
    n,
    {
      cols: 4,
      rows: 2,
      cells: r.map((e, t) => ({
        bg: `#2c3a44`,
        fg: a[t % a.length],
        text: e,
        style: `plain`,
      })),
    },
    i,
  );
}
function ne(e) {
  return e.site.tokyo?.exposed ?? { negX: !1, posX: !1, back: !1 };
}
var N = new Map();
function P(e, t = 0.85, r = 0) {
  let i = `${e}|${t}|${r}`,
    a = N.get(i);
  return (a || N.set(i, (a = n(e, 0, { rough: t, metal: r }))), a);
}
function F(n, r = 1.6, i = !1) {
  let a = `L${n}|${r}|${i}`,
    o = N.get(a);
  return (o || N.set(a, (o = t(n, r, 0, i ? { flags: e.ALWAYS } : {}))), o);
}
function I(n = 6980756) {
  let r = `W${n}`,
    i = N.get(r);
  return (
    i ||
      N.set(
        r,
        (i = t(n, 1.2, 0, {
          flags: e.WINDOWS,
          rough: 0.12,
          metal: 0.45,
          er: 1,
          eg: 0.85,
          eb: 0.62,
        })),
      ),
    i
  );
}
var L = {
  concrete: 12104875,
  concreteDark: 9341570,
  tileBeige: 14207920,
  tileBrown: 9071186,
  tileWhite: 15328990,
  mortar: 11051674,
  alu: 12896460,
  aluDark: 7106678,
  steel: 5922402,
  wood: 8016434,
  woodDark: 4861466,
  woodLight: 11568216,
  black: 1842206,
  glass: 3029572,
  shopWarm: 16047280,
  red: 13116956,
  vermilion: 14173482,
  stone: 10131084,
  asphalt: 4868684,
};
function* R(e, t) {
  let { w: n, d: r } = e.frame,
    i = t.inset ?? 0.18,
    a = -n / 2 + i,
    o = n / 2 - i,
    s = -r / 2 + 0.05,
    c = r / 2 - i,
    l = t.groundH ?? 4.2,
    u = t.floorH ?? 3.1,
    d = l + (t.floors - 1) * u,
    f = e.lm,
    p = P(t.wall, 0.9),
    m = P(t.trim ?? L.concreteDark, 0.85);
  (f.setPaint(p),
    f.box(a, l, s, o, d, c, 23),
    f.box(a, 0, s + (t.recess ?? 0) + 0.3, o, l, c, 19),
    f.setPaint(m),
    f.box(a, l - 0.35, s - 0.12, o, l + 0.05, s + 0.3),
    yield);
  let h = t.bays ?? Math.max(1, Math.round((o - a) / 3.2)),
    g = (o - a) / h,
    _ = t.windows ?? `grid`;
  for (let n = 1; n < t.floors; n++) {
    let r = l + (n - 1) * u,
      i = r + u;
    if (_ === `band`) {
      if (
        (f.setPaint(p),
        f.box(a, r, s, o, r + 0.95, s + 0.02, 32),
        f.box(a, i - 0.45, s, o, i, s + 0.02, 32),
        f.setPaint(I()),
        f.box(a + 0.1, r + 0.95, s + 0.12, o - 0.1, i - 0.45, s + 0.14, 32),
        t.tenants && e.rng.next() < 0.5)
      ) {
        let n = (e.rng.next() * h) | 0;
        X(
          e,
          t.tenants,
          (e.rng.next() * 8) | 0,
          4,
          2,
          a + n * g + 0.3,
          r + 1.15,
          a + (n + 1) * g - 0.3,
          i - 0.65,
          s + 0.11,
          0,
        );
      }
      f.setPaint(P(L.alu, 0.4, 0.6));
      for (let e = 0; e <= h; e++)
        f.box(
          a + e * g - 0.04,
          r + 0.95,
          s + 0.02,
          a + e * g + 0.04,
          i - 0.45,
          s + 0.12,
        );
    } else
      for (let o = 0; o < h; o++) {
        let c = a + o * g,
          l = c + g,
          u = c + g * 0.18,
          d = l - g * 0.18,
          h = r + 0.8,
          v = i - 0.5;
        (f.setPaint(p),
          f.box(c, r, s, l, h, s + 0.02, 32),
          f.box(c, v, s, l, i, s + 0.02, 32),
          f.box(c, h, s, u, v, s + 0.02, 32),
          f.box(d, h, s, l, v, s + 0.02, 32),
          f.setPaint(m),
          f.box(u, h, s, d, h + 0.04, s + 0.16, 4),
          f.setPaint(I()),
          f.box(u, h, s + 0.16, d, v, s + 0.18, 32),
          t.tenants &&
            e.rng.next() < 0.35 &&
            X(
              e,
              t.tenants,
              (e.rng.next() * 8) | 0,
              4,
              2,
              u + 0.08,
              h + (v - h) * 0.55,
              d - 0.08,
              v - 0.12,
              s + 0.15,
              0,
            ),
          f.setPaint(P(L.alu, 0.4, 0.6)),
          f.box(
            (u + d) / 2 - 0.03,
            h,
            s + 0.1,
            (u + d) / 2 + 0.03,
            v,
            s + 0.16,
          ),
          _ === `balcony`
            ? (f.setPaint(P(L.concrete, 0.9)),
              f.box(c + 0.05, r - 0.1, s - 0.9, l - 0.05, r + 0.05, s),
              f.setPaint(P(10133670, 0.5, 0.5)),
              f.box(c + 0.05, r + 0.05, s - 0.92, l - 0.05, r + 1.05, s - 0.86))
            : ((o * 7 + n * 3 + e.rng.next() * 4) | 0) % 5 == 0 &&
              z(e, (u + d) / 2 + g * 0.25, h - 0.62, s - 0.3));
      }
    n % 3 == 0 && (yield);
  }
  _ === `none` && (f.setPaint(p), f.box(a, l, s, o, d, s + 0.02, 32));
  let v = ne(e);
  for (let [e, n] of [
    [-1, v.negX],
    [1, v.posX],
  ]) {
    if (!n) continue;
    let r = e < 0 ? a : o,
      i = Math.max(1, Math.round((c - s - 1) / 3.4)),
      d = (c - s - 1) / i;
    for (let n = 1; n < t.floors; n++) {
      let t = l + (n - 1) * u;
      for (let n = 0; n < i; n++) {
        let i = s + 0.5 + n * d + d * 0.2,
          a = i + d * 0.6;
        (f.setPaint(m),
          f.box(
            Math.min(r, r + e * 0.1),
            t + 0.75,
            i - 0.06,
            Math.max(r, r + e * 0.1),
            t + u - 0.45,
            a + 0.06,
          ),
          f.setPaint(I()),
          f.box(
            Math.min(r, r + e * 0.12),
            t + 0.8,
            i,
            Math.max(r, r + e * 0.12),
            t + u - 0.5,
            a,
            e < 0 ? 2 : 1,
          ));
      }
    }
    (f.setPaint(m),
      f.box(
        Math.min(r, r + e * 0.06),
        0,
        s + 0.5,
        Math.max(r, r + e * 0.06),
        0.9,
        c - 0.3,
        e < 0 ? 2 : 1,
      ));
  }
  if (
    (f.setPaint(m),
    f.box(a - 0.05, d, s - 0.05, o + 0.05, d + 0.9, s + 0.2),
    f.box(a - 0.05, d, c - 0.2, o + 0.05, d + 0.9, c + 0.05),
    f.box(a - 0.05, d, s, a + 0.2, d + 0.9, c),
    f.box(o - 0.2, d, s, o + 0.05, d + 0.9, c),
    t.roof !== !1 && e.q === `high`)
  ) {
    (f.setPaint(P(14210252, 0.6, 0.1)),
      f.cylinder(a + (o - a) * 0.3, (s + c) / 2, 0.9, 0.9, d, d + 2.2, 10),
      f.setPaint(P(L.steel, 0.5, 0.6)),
      f.box(
        a + (o - a) * 0.3 - 0.9,
        d,
        (s + c) / 2 - 0.9,
        a + (o - a) * 0.3 + 0.9,
        d + 0.3,
        (s + c) / 2 + 0.9,
      ));
    for (let t = 0; t < 3; t++)
      z(e, a + (o - a) * (0.55 + t * 0.12), d + 0.35, c - 1.5 - t * 0.3, !0);
  }
  return (yield, { front: s, x0: a, x1: o, top: d, groundH: l, floorH: u });
}
function* re(e) {
  let t = e.lm,
    n = -e.frame.d / 2;
  for (let r of e.meta.proxy) {
    let e = r.x - r.w / 2,
      i = r.x + r.w / 2,
      a = r.z - r.d / 2,
      o = r.z + r.d / 2,
      s = r.y ?? 0,
      c = s + r.h;
    if (
      (t.setPaint(P(r.color ?? 13157564, 0.9)),
      t.box(e, s, a, i, c, o),
      !(a - n > 1.5 || r.h < 5))
    ) {
      t.setPaint(I());
      for (let n = s + 4.6; n < c - 1.2; n += 3.1)
        t.box(e + 0.4, n, a - 0.04, i - 0.4, n + 1.4, a, 32);
      (t.setPaint(P(6973024, 0.8)),
        t.box(e - 0.05, c - 0.25, a - 0.06, i + 0.05, c + 0.6, a + 0.2));
    }
  }
  yield;
}
function z(e, t, n, r, i = !1) {
  let a = e.lm;
  (a.setPaint(P(15000284, 0.7)),
    a.box(t - 0.4, n, r - 0.15, t + 0.4, n + 0.6, r + 0.15),
    a.setPaint(P(5593180, 0.8)),
    a.cylinder(t - 0.08, r - 0.16, 0.2, 0.2, n + 0.3, n + 0.3, 8, !1),
    a.box(t - 0.3, n + 0.1, r - 0.17, t + 0.15, n + 0.5, r - 0.15, 32),
    i ||
      (a.setPaint(P(L.steel, 0.6, 0.5)),
      a.box(t - 0.42, n - 0.06, r - 0.18, t + 0.42, n, r + 0.18)));
}
function B(e, t) {
  let n = e.lm,
    r = e.art,
    i = t.depth ?? 2.4,
    a = t.z;
  (n.setPaint(P(t.post ?? L.black, 0.6, 0.2)),
    n.box(t.x0 - 0.18, 0, a - 0.04, t.x0, t.h + 0.2, a + 0.25),
    n.box(t.x1, 0, a - 0.04, t.x1 + 0.18, t.h + 0.2, a + 0.25),
    n.box(t.x0 - 0.18, t.h, a - 0.04, t.x1 + 0.18, t.h + 0.25, a + 0.25));
  let o = a + i;
  (t.backKey
    ? (r.tex(e.atlas.r(t.backKey), 16777215, 0.6),
      r.rectZ(t.x0, 0.05, t.x1, t.h, o, -1))
    : (r.col(t.light ?? L.shopWarm, 0.5, 0.8),
      r.rectZ(t.x0, 0.05, t.x1, t.h, o, -1)),
    r.col(t.light ?? L.shopWarm, 0.45, 0.75),
    r.rectX(a, 0, o, t.h, t.x0, 1),
    r.rectX(a, 0, o, t.h, t.x1, -1),
    r.col(t.floor ?? 9077880, 0),
    r.rectY(t.x0, a, t.x1, o, 0.03, 1),
    r.col(16773848, 0.9, 1.1),
    r.rectY(t.x0 + 0.3, a + 0.4, t.x1 - 0.3, o - 0.3, t.h - 0.02, -1),
    r.col(14209216, 0.3, 0.7),
    r.rectY(t.x0, a, t.x1, o, t.h, -1));
}
function V(e, t) {
  let n = e.lm,
    r = t.leaves ?? 2,
    i = (t.x1 - t.x0) / r,
    a = t.kind ?? `sash`;
  for (let e = 0; e < r; e++) {
    let o = t.x0 + e * i;
    t.open && e === r - 1 && (o -= i * 0.85);
    let s = o + i,
      c = t.z + (e % 2 ? 0.06 : 0),
      l = a === `lattice` ? P(L.woodDark, 0.7) : P(L.alu, 0.35, 0.7);
    if (
      (n.setPaint(l),
      n.box(o, 0, c, o + 0.06, t.h, c + 0.05),
      n.box(s - 0.06, 0, c, s, t.h, c + 0.05),
      n.box(o, t.h - 0.08, c, s, t.h, c + 0.05),
      n.box(o, 0, c, s, 0.12, c + 0.05),
      a === `lattice`)
    ) {
      for (let e = 1; e < 4; e++)
        n.box(
          o + (e * i) / 4 - 0.015,
          0.12,
          c,
          o + (e * i) / 4 + 0.015,
          t.h - 0.08,
          c + 0.04,
        );
      n.box(o, t.h * 0.55, c, s, t.h * 0.55 + 0.04, c + 0.04);
    }
    t.open ||
      (n.setPaint(P(3030084, 0.08, 0.5)),
      n.box(o + 0.06, 0.12, c + 0.02, s - 0.06, t.h - 0.08, c + 0.025, 32));
  }
}
function H(e, t) {
  let n = t.len ?? 0.9,
    r = e.lm,
    i = e.art;
  (r.setPaint(P(t.rod ?? L.woodDark, 0.6)),
    r.push(),
    r.translate(t.x0 - 0.1, t.y1 + 0.03, t.z - 0.08),
    r.rotateZ(-Math.PI / 2),
    r.cylinder(0, 0, 0.025, 0.025, 0, t.x1 - t.x0 + 0.2, 6, !0),
    r.pop());
  let a = e.atlas.r(t.key);
  (i.tex(a, 16777215, 0),
    i.quad(
      t.x1,
      t.y1 - n,
      t.z - 0.14,
      t.x0,
      t.y1 - n,
      t.z - 0.14,
      t.x0,
      t.y1,
      t.z - 0.08,
      t.x1,
      t.y1,
      t.z - 0.08,
      0,
      0,
      1,
      1,
    ),
    i.col(2762274, 0),
    i.quad(
      t.x0,
      t.y1 - n,
      t.z - 0.13,
      t.x1,
      t.y1 - n,
      t.z - 0.13,
      t.x1,
      t.y1,
      t.z - 0.07,
      t.x0,
      t.y1,
      t.z - 0.07,
    ));
}
function U(e, t) {
  let n = t.r ?? 0.22,
    r = t.h ?? 0.62,
    i = e.art;
  i.tex(e.atlas.r(t.key), 16777215, t.lit === !1 ? 0 : 1);
  let a = [
    n * 0.62,
    0,
    n * 0.92,
    r * 0.12,
    n,
    r * 0.5,
    n * 0.92,
    r * 0.88,
    n * 0.62,
    r,
  ];
  (i.push(), i.translate(t.x, t.y, t.z));
  let o = t.cell ? t.cell[0] / t.cell[1] : 0,
    s = t.cell ? (t.cell[0] + 1) / t.cell[1] : 1;
  (i.lathe(0, 0, a, e.q === `high` ? 12 : 8, s, o),
    i.pop(),
    i.col(1709072, 0),
    i.cyl(t.x, t.z, n * 0.62, n * 0.62, t.y - 0.04, t.y + 0.02, 8),
    i.cyl(t.x, t.z, n * 0.62, n * 0.62, t.y + r - 0.02, t.y + r + 0.05, 8),
    t.zWall !== void 0 &&
      (e.lm.setPaint(P(L.black, 0.6, 0.4)),
      e.lm.box(
        t.x - 0.015,
        t.y + r + 0.05,
        Math.min(t.z, t.zWall),
        t.x + 0.015,
        t.y + r + 0.09,
        Math.max(t.z, t.zWall),
      ),
      e.lm.box(
        t.x - 0.01,
        t.y + r + 0.05,
        t.z - 0.01,
        t.x + 0.01,
        t.y + r + 0.3,
        t.z + 0.01,
      )));
}
function W(e, t) {
  let n = t.depth ?? 0.25;
  if (
    (e.lm.setPaint(P(t.frame ?? L.black, 0.6, 0.2)),
    e.lm.box(
      t.x0 - 0.04,
      t.y0 - 0.04,
      t.z,
      t.x1 + 0.04,
      t.y1 + 0.04,
      t.z + n,
      31,
    ),
    t.cell)
  ) {
    X(
      e,
      t.key,
      t.cell[0],
      t.cell[1],
      t.cell[2],
      t.x0,
      t.y0,
      t.x1,
      t.y1,
      t.z - 0.02,
      t.lit ? (t.always ? 0.8 : 1) : 0,
    );
    return;
  }
  (e.art.tex(e.atlas.r(t.key), 16777215, t.lit ? (t.always ? 0.8 : 1) : 0),
    e.art.rectZ(t.x0, t.y0, t.x1, t.y1, t.z - 0.02, -1));
}
function ie(e, t) {
  let n = t.out ?? 0.75,
    r = t.thick ?? 0.18,
    i = t.z - n,
    a = t.z - 0.08;
  (e.lm.setPaint(P(L.black, 0.6, 0.3)),
    e.lm.box(
      t.x - r / 2,
      t.y0 - 0.05,
      i - 0.04,
      t.x + r / 2,
      t.y1 + 0.05,
      a,
      44,
    ),
    e.lm.setPaint(P(L.steel, 0.6, 0.5)),
    e.lm.box(t.x - 0.03, t.y1 - 0.1, a, t.x + 0.03, t.y1, t.z),
    e.lm.box(t.x - 0.03, t.y0, a, t.x + 0.03, t.y0 + 0.1, t.z));
  let o = +!!t.lit;
  (e.art.tex(e.atlas.r(t.key), 16777215, o),
    e.art.rectX(i, t.y0, a, t.y1, t.x + r / 2 + 0.01, 1),
    e.art.rectX(i, t.y0, a, t.y1, t.x - r / 2 - 0.01, -1));
}
function G(e, t) {
  let n = t.h ?? 0.95,
    r = t.w ?? 0.55,
    i = e.art;
  (i.push(),
    i.translate(t.x, 0, t.z),
    i.rotateY(-(t.rot ?? 0)),
    i.tex(e.atlas.r(t.key), 16777215, 0),
    i.quad(
      r / 2,
      0,
      -0.18,
      -r / 2,
      0,
      -0.18,
      -r / 2,
      n,
      -0.02,
      r / 2,
      n,
      -0.02,
      0,
      0,
      1,
      1,
    ),
    i.quad(
      -r / 2,
      0,
      0.18,
      r / 2,
      0,
      0.18,
      r / 2,
      n,
      0.02,
      -r / 2,
      n,
      0.02,
      0,
      0,
      1,
      1,
    ),
    i.col(4864554, 0),
    i.box(-r / 2 - 0.03, n - 0.04, -0.04, r / 2 + 0.03, n + 0.02, 0.04),
    i.pop(),
    t.collide !== !1 && e.circle(t.x, t.z, 0.32, 0, n));
}
function K(e, t) {
  let n = t.out ?? 1.2,
    r = t.drop ?? 0.45,
    i = e.art,
    a = t.z - n,
    o = t.y - r;
  if (
    (i.col(t.color, 0),
    i.quad(t.x1, o, a, t.x0, o, a, t.x0, t.y, t.z, t.x1, t.y, t.z),
    i.col(t.color, 0, 0.7),
    i.quad(t.x0, o, a, t.x1, o, a, t.x1, t.y, t.z, t.x0, t.y, t.z),
    t.stripe !== void 0)
  ) {
    let e = Math.max(2, Math.round((t.x1 - t.x0) / 0.5));
    i.col(t.stripe, 0);
    for (let n = 0; n < e; n += 2) {
      let r = t.x0 + ((t.x1 - t.x0) * n) / e,
        s = t.x0 + ((t.x1 - t.x0) * (n + 1)) / e;
      i.quad(
        s,
        o + 0.004,
        a - 0.004,
        r,
        o + 0.004,
        a - 0.004,
        r,
        t.y + 0.004,
        t.z - 0.004,
        s,
        t.y + 0.004,
        t.z - 0.004,
      );
    }
  }
  (t.key ? i.tex(e.atlas.r(t.key), 16777215, 0) : i.col(t.color, 0, 0.9),
    i.rectZ(t.x0, o - 0.32, t.x1, o, a, -1),
    i.col(t.color, 0, 0.6),
    i.rectX(a, o - 0.32, t.z, o, t.x0, -1),
    i.rectX(a, o - 0.32, t.z, o, t.x1, 1));
}
function q(e, t) {
  let n = e.lm;
  n.setPaint(P(t.color ?? 11054256, 0.55, 0.55));
  let r = Math.round(t.h / 0.09);
  for (let e = 0; e < r; e += 2)
    n.box(t.x0, (e * t.h) / r, t.z - 0.03, t.x1, ((e + 1) * t.h) / r, t.z, 32);
  n.setPaint(P((t.color ?? 11054256) - 1052688, 0.55, 0.55));
  for (let e = 1; e < r; e += 2)
    n.box(
      t.x0,
      (e * t.h) / r,
      t.z - 0.05,
      t.x1,
      ((e + 1) * t.h) / r,
      t.z - 0.02,
      36,
    );
  if (
    (n.setPaint(P(L.steel, 0.6, 0.5)),
    n.box(t.x0 - 0.05, t.h, t.z - 0.3, t.x1 + 0.05, t.h + 0.35, t.z),
    t.key)
  ) {
    e.art.tex(e.atlas.r(t.key), 16777215, 0);
    let n = (t.x0 + t.x1) / 2,
      r = Math.min(0.9, (t.x1 - t.x0) * 0.35);
    e.art.rectZ(n - r, t.h * 0.45, n + r, t.h * 0.45 + r * 0.8, t.z - 0.06, -1);
  }
}
function J(e, t) {
  let n = e.art;
  (n.push(),
    n.translate(t.x, 0, t.z),
    n.rotateY(-(t.rot ?? 0)),
    n.col(t.crate ?? 13116956, 0),
    n.box(-0.22, 0, -0.18, 0.22, 0.32, 0.18),
    n.box(-0.22, 0.32, -0.18, 0.22, 0.64, 0.18),
    n.col(9071172, 0),
    n.box(-0.45, 0.64, -0.32, 0.45, 0.68, 0.32));
  let r = t.stools ?? 3;
  for (let e = 0; e < r; e++) {
    let t = (e / r) * Math.PI * 2 + 0.4,
      i = Math.cos(t) * 0.62,
      a = Math.sin(t) * 0.55;
    (n.col(e % 2 ? 2775720 : 13116956, 0),
      n.box(i - 0.16, 0, a - 0.13, i + 0.16, 0.32, a + 0.13),
      n.col(9071172, 0),
      n.box(i - 0.18, 0.32, a - 0.15, i + 0.18, 0.35, a + 0.15));
  }
  (n.pop(), e.circle(t.x, t.z, 0.5, 0, 0.7));
}
function Y(e, t, n, r = 1) {
  let i = e.art;
  (i.col(6965810, 0),
    i.cyl(t, n, 0.2 * r, 0.16 * r, 0, 0.32 * r, 8),
    i.col(3828266, 0),
    i.sphere(t, 0.5 * r, n, 0.3 * r, 7, 5, 1.1),
    i.col(4880946, 0),
    i.sphere(t + 0.12 * r, 0.68 * r, n - 0.05, 0.2 * r, 6, 4));
}
function ae(e, t, n) {
  let r = e.art;
  (r.col(9080466, 0),
    r.cyl(t, n, 0.16, 0.16, 0, 0.5, 8, !1),
    r.col(15265006, 0));
  for (let e = 0; e < 4; e++)
    r.cyl(
      t + Math.cos(e * 1.6) * 0.06,
      n + Math.sin(e * 1.6) * 0.06,
      0.02,
      0.025,
      0.1,
      0.9,
      5,
      !1,
    );
}
function oe(e, t, n, r = 0, i = 9083560) {
  let a = e.art;
  (a.push(), a.translate(t, 0, n), a.rotateY(-r), a.col(1710618, 0));
  for (let e of [-0.55, 0.55])
    (a.push(),
      a.translate(0, 0.34, e),
      a.rotateZ(Math.PI / 2),
      a.cyl(0, 0, 0.34, 0.34, -0.02, 0.02, 10),
      a.pop());
  (a.col(i, 0),
    a.box(-0.02, 0.34, -0.5, 0.02, 0.4, 0.5),
    a.box(-0.02, 0.4, 0.1, 0.02, 0.85, 0.16),
    a.box(-0.02, 0.4, -0.45, 0.02, 1, -0.4),
    a.col(2763306, 0),
    a.box(-0.1, 0.86, 0.06, 0.1, 0.92, 0.26),
    a.box(-0.28, 0.98, -0.45, 0.28, 1.02, -0.41),
    a.col(10133670, 0),
    a.box(-0.16, 0.78, -0.72, 0.16, 0.98, -0.5),
    a.pop());
}
function se(e, t) {
  (e.lm.setPaint(P(t.color ?? 10131086, 0.9)),
    e.lm.box(t.x0, -0.2, t.z0, t.x1, t.y ?? 0.02, t.z1, 55));
}
function X(e, t, n, r, i, a, o, s, c, l, u = 0) {
  let d = n % r,
    f = Math.floor(n / r) % i,
    p = 0.004;
  (e.art.tex(e.atlas.r(t), 16777215, u),
    e.art.rectZ(
      a,
      o,
      s,
      c,
      l,
      -1,
      d / r + p,
      1 - (f + 1) / i + p,
      (d + 1) / r - p,
      1 - f / i - p,
    ));
}
function ce(e, t, n, r = 1) {
  let i = e.lm,
    a = P(16052972, 0.6),
    o = P(1579034, 0.6);
  i.setPaint(o);
  for (let e of [-0.2, 0.2])
    i.cylinder(t + e * r, n, 0.12 * r, 0.12 * r, 0, 0.35 * r, 8, !0);
  (i.setPaint(a), i.sphere(t, 0.62 * r, n, 0.36 * r, 10, 7), i.setPaint(o));
  for (let e of [-0.34, 0.34])
    i.sphere(t + e * r, 0.72 * r, n - 0.05 * r, 0.12 * r, 6, 4);
  (i.setPaint(a), i.sphere(t, 1.12 * r, n, 0.27 * r, 10, 7), i.setPaint(o));
  for (let e of [-0.19, 0.19])
    (i.sphere(t + e * r, 1.34 * r, n, 0.09 * r, 6, 4),
      i.sphere(t + e * 0.55 * r, 1.15 * r, n - 0.22 * r, 0.07 * r, 6, 4));
  (i.sphere(t, 1.05 * r, n - 0.26 * r, 0.04 * r, 5, 3),
    e.circle(t, n, 0.38 * r, 0, 1.4 * r));
}
function le(e, t, n, r, i, a = 9080466) {
  (e.lm.setPaint(P(a, 0.6, 0.3)), e.lm.cylinder(t, n, 0.05, 0.05, r, i, 6, !1));
}
function ue(e, t) {
  let n = e.lm,
    r = e.art,
    i = t.h ?? 2.6,
    a = t.z,
    o = t.x1 - t.x0;
  W(e, {
    x0: t.x0,
    x1: t.x1,
    y0: i + 0.15,
    y1: i + 0.95,
    z: a - 0.08,
    key: t.signKey,
    lit: !0,
    depth: 0.22,
    frame: 2763306,
  });
  let s = Math.min(1.2, o * 0.22);
  (n.setPaint(P(14210252, 0.6, 0.2)),
    n.box(t.x0, 0, a, t.x0 + s, i, a + 0.2),
    r.tex(e.atlas.r(t.menuKey), 16777215, t.open ? 0.8 : 0),
    r.rectZ(t.x0 + 0.08, 0.7, t.x0 + s - 0.08, i - 0.15, a - 0.01, -1));
  let l = t.x0 + s,
    u = t.x1;
  if (!t.open) {
    (q(e, { x0: l, x1: u, h: i, z: a + 0.02 }),
      e.box(t.x0, a, t.x1, a + 0.3, 0, i));
    return;
  }
  (B(e, {
    x0: l,
    x1: u,
    z: a + 0.02,
    h: i - 0.02,
    depth: 3.2,
    backKey: t.backKey,
    light: 16315626,
  }),
    V(e, {
      x0: l,
      x1: u,
      z: a + 0.04,
      h: i - 0.04,
      kind: `sash`,
      open: !0,
      leaves: 3,
    }),
    H(e, {
      x0: l + 0.1,
      x1: u - 0.1,
      y1: i - 0.04,
      z: a,
      len: 0.6,
      key: t.norenKey,
    }),
    n.setPaint(P(9071178, 0.7)),
    n.box(l + 0.3, 0, a + 2, u - 0.2, 1, a + 2.45),
    n.setPaint(P(14212319, 0.25, 0.8)),
    n.box(l + 0.25, 1, a + 1.95, u - 0.15, 1.04, a + 2.5));
  let d = Math.max(2, Math.floor((u - l - 0.8) / 0.75));
  for (let t = 0; t < d; t++)
    c(e, {
      x: l + 0.7 + t * 0.75,
      z: a + 1.6,
      rot: Math.PI,
      pose: t % 2 ? `stand` : `lean`,
      palette: `office`,
      hold: 3811866,
    });
  (n.setPaint(P(13159632, 0.4, 0.4)),
    n.box(l + 0.1, 0, a + 0.4, l + 0.85, 1.75, a + 1),
    r.tex(e.atlas.r(t.kioskKey), 16777215, 0.75),
    r.rectX(a + 0.42, 0.3, a + 0.98, 1.7, l + 0.86, 1),
    e.box(l + 0.1, a + 0.4, l + 0.85, a + 1, 0, 1.75),
    e.box(l + 0.25, a + 1.9, u - 0.15, a + 2.5, 0, 1.05));
}
function de(e, t) {
  let n = e.lm,
    r = e.art,
    i = t.h ?? 2.7,
    a = t.z;
  (n.setPaint(P(9062962, 0.85)),
    n.box(t.x0, 0, a, t.x1, i, a + 0.25, 32),
    n.setPaint(P(6961704, 0.85)));
  for (let e = 0.1; e < i; e += 0.22)
    n.box(t.x0, e, a - 0.005, t.x1, e + 0.02, a, 32);
  let o = t.doorX ?? t.x1 - 1;
  (n.setPaint(P(4860440, 0.6)),
    n.box(o - 0.5, 0, a - 0.06, o + 0.5, 2.15, a + 0.02),
    n.setPaint(t.open ? F(16042122, 1) : P(2761760, 0.3)),
    n.push(),
    n.translate(o, 1.45, a - 0.07),
    n.rotateX(Math.PI / 2),
    n.cylinder(0, 0, 0.18, 0.18, 0, 0.02, 12, !0),
    n.pop(),
    n.setPaint(P(13148234, 0.3, 0.9)),
    n.box(o + 0.32, 0.95, a - 0.12, o + 0.36, 1.2, a - 0.06));
  let s = t.x0 + 0.3,
    c = Math.min(o - 0.8, t.x0 + 2.6);
  (n.setPaint(P(5913122, 0.6)),
    n.box(s - 0.08, 0, a - 0.6, c + 0.08, 0.8, a),
    r.tex(e.atlas.r(t.samplesKey), 16777215, t.open ? 0.75 : 0.2),
    r.rectZ(s, 0.85, c, 1.85, a - 0.05, -1),
    r.col(16774368, t.open ? 0.8 : 0, 0.9),
    r.rectY(s, a - 0.55, c, a - 0.05, 0.82, 1),
    n.setPaint(P(13148234, 0.3, 0.8)),
    n.box(s - 0.05, 1.85, a - 0.62, c + 0.05, 1.92, a),
    e.box(s - 0.1, a - 0.62, c + 0.1, a, 0, 1.92),
    K(e, {
      x0: t.x0 + 0.1,
      x1: t.x1 - 0.1,
      y: i + 0.35,
      z: a - 0.02,
      out: 0.9,
      drop: 0.35,
      color: t.awningColor,
      key: t.awningKey,
    }));
  let l = Math.min(t.x1 - 0.4, o + 0.95);
  (n.setPaint(P(2763306, 0.5)),
    n.box(l - 0.22, 0, a - 0.9, l + 0.22, 0.12, a - 0.5),
    r.tex(e.atlas.r(t.standKey), 16777215, t.open ? 0.85 : 0),
    r.box(l - 0.2, 0.12, a - 0.88, l + 0.2, 1, a - 0.52, 55),
    e.box(l - 0.22, a - 0.9, l + 0.22, a - 0.5, 0, 1),
    e.box(t.x0, a, t.x1, a + 0.3, 0, i));
}
function fe(e, t) {
  let n = e.lm,
    r = e.art,
    i = t.z,
    a = (t.x0 + t.x1) / 2,
    o = Math.min(3.2, t.x1 - t.x0 - 1),
    s = a - o / 2,
    c = a + o / 2,
    l = 2.6;
  (n.setPaint(P(6978162, 0.6, 0.1)),
    n.box(t.x0, 0, i, s, 1.1, i + 0.2, 32),
    n.box(c, 0, i, t.x1, 1.1, i + 0.2, 32),
    n.setPaint(P(14867663, 0.9)),
    n.box(t.x0, 1.1, i, s, 3.8, i + 0.2, 32),
    n.box(c, 1.1, i, t.x1, 3.8, i + 0.2, 32),
    n.box(s, l, i, c, 3.8, i + 0.2, 32),
    B(e, {
      x0: s,
      x1: c,
      z: i + 0.02,
      h: l,
      depth: 2.6,
      light: 16773848,
      floor: 10127986,
    }),
    n.setPaint(P(9071172, 0.7)),
    n.box(s + 0.1, 0, i + 2, c - 0.1, 1.9, i + 2.55, 36),
    n.setPaint(P(5914664, 0.7)));
  for (let e = 1; e < 8; e++)
    n.box(
      s + 0.1 + ((o - 0.2) * e) / 8 - 0.01,
      0.1,
      i + 1.99,
      s + 0.1 + ((o - 0.2) * e) / 8 + 0.01,
      1.85,
      i + 2,
    );
  for (let e = 1; e < 5; e++)
    n.box(s + 0.1, 0.1 + e * 0.36, i + 1.99, c - 0.1, 0.12 + e * 0.36, i + 2);
  if (
    (t.open
      ? H(e, {
          x0: s + 0.1,
          x1: c - 0.1,
          y1: 2.58,
          z: i,
          len: 1.25,
          key: t.norenKey,
        })
      : q(e, { x0: s, x1: c, h: l, z: i + 0.02, color: 10133146 }),
    t.hood !== !1)
  ) {
    let t = 2.85,
      r = 1.1;
    (n.setPaint(P(5527644, 0.6, 0.2)),
      n.quad(
        [c + 0.5, t, i - r],
        [a, 3.75, i - r],
        [a, 3.75, i],
        [c + 0.5, t, i],
      ),
      n.quad(
        [a, 3.75, i - r],
        [s - 0.5, t, i - r],
        [s - 0.5, t, i],
        [a, 3.75, i],
      ),
      n.setPaint(P(3817026, 0.7)),
      n.quad(
        [s - 0.5, 2.8000000000000003, i - r],
        [a, 3.7, i - r],
        [a, 3.7, i],
        [s - 0.5, 2.8000000000000003, i],
      ),
      n.quad(
        [a, 3.7, i - r],
        [c + 0.5, 2.8000000000000003, i - r],
        [c + 0.5, 2.8000000000000003, i],
        [a, 3.7, i],
      ),
      n.setPaint(P(14209216, 0.8)),
      n.quad(
        [c + 0.45, 2.65, i - r - 0.02],
        [s - 0.45, 2.65, i - r - 0.02],
        [a, 3.55, i - r - 0.02],
        [a, 3.55, i - r - 0.02],
      ),
      n.setPaint(P(L.wood, 0.7)));
    for (let e of [s - 0.3, c + 0.3])
      n.box(e - 0.08, 0, i - r + 0.1, e + 0.08, t, i - r + 0.26);
    for (let n of [s - 0.3, c + 0.3]) e.circle(n, i - r + 0.18, 0.12, 0, t);
  }
  (W(e, {
    x0: a - 1.4,
    x1: a + 1.4,
    y0: 3.85,
    y1: 4.55,
    z: i - 0.05,
    key: t.signKey,
    depth: 0.12,
    frame: L.woodDark,
  }),
    r.tex(e.atlas.r(t.priceKey), 16777215, t.open ? 0.4 : 0),
    r.rectZ(c + 0.15, 1, c + 0.75, 1.85, i - 0.01, -1),
    e.box(t.x0, i, s, i + 0.3, 0, l),
    e.box(c, i, t.x1, i + 0.3, 0, l));
}
function pe(e, t, n, r, i) {
  let a = e.lm;
  (a.setPaint(P(12104358, 0.9)),
    a.cylinder(t, n, 0.85, 0.55, 0, r, 14, !0),
    a.setPaint(P(6974054, 0.8, 0.3)));
  for (let e of [r * 0.35, r * 0.62, r * 0.88])
    a.cylinder(
      t,
      n,
      0.75 - (e / r) * 0.3 + 0.08,
      0.75 - (e / r) * 0.3 + 0.08,
      e,
      e + 0.25,
      14,
      !1,
    );
  (a.setPaint(P(2763306, 0.9)),
    a.cylinder(t, n, 0.6, 0.6, r, r + 0.4, 14, !0),
    a.setPaint(P(5922402, 0.6, 0.5)),
    a.box(t + 0.62, 2, n - 0.15, t + 0.68, r - 1, n - 0.1),
    a.box(t + 0.62, 2, n + 0.1, t + 0.68, r - 1, n + 0.15),
    i &&
      (e.art.tex(e.atlas.r(i), 16777215, 0),
      e.art.rectZ(t - 0.35, r * 0.4, t + 0.35, r * 0.92, n - 0.72, -1)),
    e.circle(t, n, 0.9, 0, r));
}
function me(e, t) {
  let n = e.lm,
    r = e.art,
    i = t.z;
  if (
    (W(e, {
      x0: t.x0,
      x1: t.x1,
      y0: 3,
      y1: 3.65,
      z: i - 0.05,
      key: t.signKey,
      depth: 0.15,
      frame: 3815994,
      lit: !0,
      cell: t.signCell,
    }),
    K(e, {
      x0: t.x0 + 0.05,
      x1: t.x1 - 0.05,
      y: 2.95,
      z: i - 0.02,
      out: 1.4,
      drop: 0.5,
      color: t.awning,
      stripe: t.stripe,
    }),
    !t.open)
  ) {
    (q(e, { x0: t.x0 + 0.1, x1: t.x1 - 0.1, h: 2.8, z: i + 0.02 }),
      e.box(t.x0, i, t.x1, i + 0.3, 0, 2.5));
    return;
  }
  (B(e, {
    x0: t.x0 + 0.1,
    x1: t.x1 - 0.1,
    z: i + 0.02,
    h: 2.8,
    depth: 3,
    light: 16052454,
    floor: 6975606,
  }),
    n.setPaint(P(5925494, 0.5, 0.3)),
    n.box(t.x0 + 0.2, 0, i - 0.75, t.x1 - 0.2, 0.75, i + 0.25));
  let a = Math.max(2, Math.round((t.x1 - t.x0 - 0.4) / 0.62));
  for (let n = 0; n < a; n++) {
    let o = t.x0 + 0.22 + ((t.x1 - t.x0 - 0.44) * n) / a,
      s = o + (t.x1 - t.x0 - 0.44) / a - 0.04;
    if (
      (t.kind === `fish` &&
        (r.col(16053488, 0),
        r.box(o, 0.75, i - 0.7, s, 0.95, i + 0.1, 59),
        r.col(14543084, 0),
        r.rectY(o + 0.02, i - 0.68, s - 0.02, i + 0.08, 0.93, 1)),
      r.tex(e.atlas.r(t.goodsKey), 16777215, 0),
      r.rectY(
        o + 0.04,
        i - 0.66,
        s - 0.04,
        i + 0.06,
        t.kind === `fish` ? 0.94 : 0.77,
        1,
      ),
      t.cardKey)
    ) {
      let [a, s, c, l] = A(n, 4, 2);
      (r.tex(e.atlas.r(t.cardKey), 16777215, 0),
        r.rectZ(o + 0.05, 0.98, o + 0.3, 1.22, i - 0.72, -1, a, s, c, l));
    }
  }
  n.setPaint(F(16771256, 3));
  for (let e = 0; e < Math.max(2, Math.floor((t.x1 - t.x0) / 1.6)); e++) {
    let r = t.x0 + 0.8 + e * 1.6;
    (n.sphere(r, 2.35, i - 0.8, 0.06, 6, 4),
      n.setPaint(P(1710618, 0.8)),
      n.box(r - 0.005, 2.4, i - 0.805, r + 0.005, 2.75, i - 0.795),
      n.setPaint(F(16771256, 3)));
  }
  e.box(t.x0 + 0.2, i - 0.75, t.x1 - 0.2, i + 0.25, 0, 0.95);
}
function he(e, t) {
  let n = e.lm,
    r = e.art,
    i = t.z;
  (n.setPaint(P(15921386, 0.6)),
    n.box(t.x0, 0, i - 0.6, t.x1, 3.4, i, 63),
    W(e, {
      x0: t.x0 + 0.05,
      x1: t.x1 - 0.05,
      y0: 2.6,
      y1: 3.35,
      z: i - 0.62,
      key: t.signKey,
      lit: !0,
      depth: 0.1,
      frame: 13116956,
    }));
  let a = (t.x1 - t.x0 - 0.3) / t.windows;
  for (let o = 0; o < t.windows; o++) {
    let s = t.x0 + 0.15 + o * a,
      l = s + a - 0.12;
    (n.setPaint(P(13116956, 0.5)),
      n.box(s, 0.95, i - 0.75, l, 1.02, i - 0.6),
      r.tex(e.atlas.r(t.windowKey), 16777215, t.open ? 0.75 : 0));
    let [u, d, f, p] = A(o, 4, 2);
    (r.rectZ(s + 0.02, 1.05, l - 0.02, 2.2, i - 0.61, -1, u, d, f, p),
      t.open &&
        c(e, {
          x: (s + l) / 2,
          z: i - 0.35,
          rot: 0,
          pose: `stand`,
          palette: `office`,
          scale: 0.95,
        }));
  }
  (e.box(t.x0, i - 0.75, t.x1, i, 0, 3.4),
    t.queue &&
      t.open &&
      l(e, {
        path: t.queue.path,
        people: t.queue.people,
        palette: `casual`,
        spacing: 0.8,
      }));
}
function ge(e, t) {
  let n = e.lm,
    r = e.art,
    i = t.h ?? 2.4,
    a = t.side < 0 ? t.x0 : t.x1,
    o = t.z0,
    s = 0;
  for (; o < t.z1 - 1.2;) {
    let l = 1.3 + ((s * 37) % 5) * 0.12,
      u = o,
      d = Math.min(t.z1, o + l);
    (r.tex(
      e.atlas.r(t.drawersKey),
      [16777215, 15791359, 16774376][s % 3],
      t.open ? 0.25 : 0,
    ),
      r.rectX(
        u + 0.05,
        0.3,
        d - 0.05,
        i - 0.1,
        a + t.side * 0.02,
        t.side < 0 ? 1 : -1,
      ),
      n.setPaint(P(s % 2 ? 14212319 : 12633288, 0.5, 0.3)));
    let f = a - t.side * 1,
      p = a - t.side * 0.55;
    (n.box(Math.min(f, p), 0, u + 0.05, Math.max(f, p), 0.95, d - 0.05),
      n.setPaint(P(12112092, 0.05, 0.4)),
      n.box(Math.min(f, p), 0.95, u + 0.05, Math.max(f, p), 1, d - 0.05, 4),
      r.tex(e.atlas.r(t.tagsKey), 16777215, 0));
    let [m, h, g, _] = A(s, 4, 2);
    (r.rectX(
      u + 0.2,
      0.45,
      d - 0.2,
      0.9,
      Math.min(f, p) * (t.side < 0 ? 0 : 1) +
        Math.max(f, p) * +(t.side < 0) +
        (t.side < 0 ? 0.01 : -0.01),
      t.side < 0 ? 1 : -1,
      m,
      h,
      g,
      _,
    ),
      t.open
        ? (n.setPaint(F(15791871, 2.5)),
          n.box(
            Math.min(a, a - t.side * 0.8),
            i - 0.05,
            (u + d) / 2 - 0.5,
            Math.max(a, a - t.side * 0.8) - 0.6,
            i,
            (u + d) / 2 + 0.5,
            8,
          ),
          s % 3 == 1 &&
            c(e, {
              x: a - t.side * 0.3,
              z: (u + d) / 2,
              rot: t.side < 0 ? Math.PI / 2 : -Math.PI / 2,
              pose: `stand`,
              palette: `elder`,
            }))
        : (r.col(6978186, 0),
          r.rectX(
            u + 0.05,
            0,
            d - 0.05,
            1,
            Math.min(f, p) + (t.side < 0 ? 0.48 : -0.03),
            t.side < 0 ? 1 : -1,
          )),
      e.box(Math.min(a, f), u, Math.max(a, f), d, 0, 1),
      (o = d),
      s++);
  }
}
function* _e(e, t) {
  let n = e.lm,
    r = e.art,
    i = t.h ?? 7.6,
    a = t.z,
    o = t.x1 - t.x0,
    s = (t.x0 + t.x1) / 2;
  (n.setPaint(P(t.body ?? 1973802, 0.25, 0.4)),
    n.box(t.x0, 3.4, a - 0.3, t.x1, i, a, 39),
    n.setPaint(P(t.trim ?? 13148210, 0.3, 0.85)),
    n.box(t.x0 - 0.05, i, a - 0.4, t.x1 + 0.05, i + 0.25, a + 0.05),
    n.box(t.x0 - 0.05, 3.25, a - 0.45, t.x1 + 0.05, 3.45, a + 0.05),
    n.setPaint(F(16726618, 2.4, !0)),
    n.box(t.x0 + 0.05, i - 0.12, a - 0.42, t.x1 - 0.05, i - 0.04, a - 0.38, 32),
    n.setPaint(F(3856639, 2.4, !0)),
    n.box(t.x0 + 0.05, 3.5, a - 0.42, t.x1 - 0.05, 3.58, a - 0.38, 32));
  for (let e of [t.x0 + 0.15, t.x1 - 0.25])
    (n.setPaint(F(16765498, 2.2, !0)),
      n.box(e, 0.3, a - 0.42, e + 0.1, i - 0.2, a - 0.36, 32));
  let c = Math.min(o * 0.86, 14);
  (n.setPaint(P(L.black, 0.5, 0.3)),
    n.box(
      s - c / 2 - 0.1,
      i - 2.9,
      a - 0.7,
      s + c / 2 + 0.1,
      i - 0.4,
      a - 0.3,
      47,
    ),
    r.tex(e.atlas.r(t.name), 16777215, 0.85),
    r.rectZ(s - c / 2, i - 2.8, s + c / 2, i - 0.5, a - 0.72, -1));
  let l = Math.min(o * 0.8, 12);
  (n.setPaint(P(657930, 0.4, 0.2)),
    n.box(s - l / 2 - 0.08, 3.62, a - 0.55, s + l / 2 + 0.08, 4.62, a - 0.3),
    r.tex(e.atlas.r(t.led), 16777215, t.open ? 0.9 : 0),
    r.rectZ(s - l / 2, 3.68, s + l / 2, 4.56, a - 0.56, -1),
    yield,
    n.setPaint(P(2763312, 0.3, 0.5)),
    n.box(t.x0, 0, a - 0.2, t.x0 + 0.5, 3.3, a + 0.2),
    n.box(t.x1 - 0.5, 0, a - 0.2, t.x1, 3.3, a + 0.2),
    n.setPaint(P(15263980, 0.35, 0.3)),
    n.box(t.x0 + 0.5, 3, a - 1.6, t.x1 - 0.5, 3.25, a, 63),
    n.setPaint(F(16777215, 1.8, !0)));
  for (let e = t.x0 + 1.2; e < t.x1 - 1; e += 1.4)
    n.box(e, 2.98, a - 1.2, e + 0.5, 3, a - 0.8, 8);
  let u = t.x0 + 0.5,
    d = t.x1 - 0.5;
  (r.tex(e.atlas.r(t.hall ?? t.led), 16777215, t.open ? 0.7 : 0),
    r.rectZ(u, 0.02, d, 2.95, a + 3, -1),
    r.col(t.open ? 16054015 : 4211272, t.open ? 0.75 : 0, 0.9),
    r.rectX(a, 0, a + 3, 2.95, u, 1),
    r.rectX(a, 0, a + 3, 2.95, d, -1),
    r.rectY(u, a, d, a + 3, 2.95, -1),
    r.col(9054762, 0),
    r.rectY(u, a, d, a + 3, 0.02, 1),
    n.setPaint(P(L.alu, 0.3, 0.8)));
  let f = Math.max(2, Math.round((d - u) / 1.9));
  for (let e = 0; e <= f; e++) {
    let t = u + ((d - u) * e) / f;
    n.box(t - 0.05, 0, a - 0.05, t + 0.05, 2.95, a + 0.05);
  }
  (n.box(u, 2.4, a - 0.05, d, 2.5, a + 0.05),
    e.box(t.x0, a - 0.2, t.x1, a + 0.3, 0, 3.3),
    yield);
  let p = t.kerb ?? a - 2.2;
  if (t.nobori && t.open) {
    let i = t.nobori.n ?? Math.max(3, Math.floor(o / 2.2));
    for (let a = 0; a < i; a++) {
      let s = t.x0 + 0.8 + ((o - 1.6) * a) / Math.max(1, i - 1);
      (n.setPaint(P(14211288, 0.4, 0.6)),
        n.cylinder(s, p, 0.025, 0.025, 0, 2.6, 5, !0),
        n.setPaint(P(4210752, 0.6)),
        n.cylinder(s, p, 0.2, 0.22, 0, 0.12, 8, !0));
      let [c, l, u, d] = A(a, t.nobori.cols, t.nobori.rows);
      (r.tex(e.atlas.r(t.nobori.key), 16777215, 0),
        r.rectZ(s, 0.8, s + 0.45, 2.5, p, -1, c, l, u, d),
        r.rectZ(s, 0.8, s + 0.45, 2.5, p + 0.01, 1, u, l, c, d),
        e.circle(s, p, 0.2, 0, 2.6));
    }
  }
  if (t.hanawa && t.grand)
    for (let i = 0; i < t.hanawa.n; i++) {
      let s = t.x0 + 1 + ((o - 2) * (i + 0.5)) / t.hanawa.n,
        c = a - 1;
      n.setPaint(P(15262940, 0.6));
      for (let [e, t] of [
        [-0.35, 0.2],
        [0.35, 0.2],
        [0, -0.35],
      ])
        n.box(
          s + e - 0.02,
          0,
          c + t - 0.02,
          s + e * 0.2 + 0.02,
          1.6,
          c + t * 0.2 + 0.02,
        );
      (r.tex(e.atlas.r(t.hanawa.key), 16777215, 0),
        r.rectZ(s - 0.7, 1.4, s + 0.7, 2.8, c - 0.02, -1),
        r.rectZ(s - 0.7, 1.4, s + 0.7, 2.8, c + 0.02, 1),
        e.circle(s, c, 0.4, 0, 2.8));
    }
}
var ve = 3.9,
  Z = (e) => ve + 2.0000000000000004 * Math.sqrt(Math.max(0, 1 - e * e));
function* ye(e, t) {
  let n = e.lm,
    r = e.art,
    i = t.recess - 0.08,
    a = t.o1 - t.o0,
    o = (t.o0 + t.o1) / 2,
    l = 2.45;
  n.setPaint(P(t.wood ?? 3810326, 0.75));
  for (let e = 0; e < 10; e++) {
    let r = t.o0 + (a * e) / 10,
      o = t.o0 + (a * (e + 1)) / 10,
      s = Z(((r - t.o0) / a) * 2 - 1),
      c = Z(((o - t.o0) / a) * 2 - 1);
    n.quad([o, l, i], [r, l, i], [r, s - 0.02, i], [o, c - 0.02, i]);
  }
  n.setPaint(P(1971212, 0.7));
  for (let e = 1; e < 6; e++) {
    let r = t.o0 + (a * e) / 6;
    n.box(
      r - 0.03,
      l,
      i - 0.04,
      r + 0.03,
      Z(((r - t.o0) / a) * 2 - 1) - 0.05,
      i,
    );
  }
  n.box(t.o0, 2.37, i - 0.1, t.o1, 2.49, i);
  let u = Math.min(a - 0.6, 4.6);
  if (
    (n.setPaint(P(L.black, 0.6)),
    n.box(
      o - u / 2 - 0.06,
      2.75,
      i - 0.16,
      o + u / 2 + 0.06,
      3.6500000000000004,
      i - 0.04,
    ),
    r.tex(e.atlas.r(t.signKey), 16777215, t.open ? 1 : 0.3),
    t.signCell)
  ) {
    let [e, n, a] = t.signCell,
      s = e % n,
      c = Math.floor(e / n) % a,
      l = 0.004;
    r.rectZ(
      o - u / 2,
      2.81,
      o + u / 2,
      3.59,
      i - 0.17,
      -1,
      s / n + l,
      1 - (c + 1) / a + l,
      (s + 1) / n - l,
      1 - c / a - l,
    );
  } else r.rectZ(o - u / 2, 2.81, o + u / 2, 3.59, i - 0.17, -1);
  if ((yield, !t.open)) {
    (n.setPaint(P(10132632, 0.55, 0.5)),
      n.box(t.o0, 0, i - 0.02, t.o1, 2.37, i, 32));
    return;
  }
  if (
    (t.backKey
      ? r.tex(e.atlas.r(t.backKey), 16777215, 0.75)
      : r.col(16308392, 0.8, 0.95),
    r.rectZ(t.o0 + 0.05, 0.02, t.o1 - 0.05, 2.35, i - 0.005, -1),
    t.kind === `izakaya` || t.kind === `counter`)
  ) {
    n.setPaint(P(L.woodDark, 0.7));
    for (let e of [t.o0 + 0.05, o - 0.03, t.o1 - 0.11])
      n.box(e, 0, i - 0.06, e + 0.06, 2.35, i - 0.02);
    (n.box(t.o0, 0, i - 0.06, t.o1, 0.15, i - 0.02),
      t.kind === `counter` &&
        (n.setPaint(P(14212319, 0.3, 0.7)),
        n.box(t.o0 + 0.2, 0.95, i - 0.45, t.o1 - 0.2, 1, i - 0.02),
        n.setPaint(P(6965808, 0.7)),
        n.box(t.o0 + 0.2, 0, i - 0.4, t.o1 - 0.2, 0.95, i - 0.05),
        e.box(t.o0 + 0.2, i - 0.45, t.o1 - 0.2, i, 0, 1)));
  }
  if (
    (t.norenKey &&
      H(e, {
        x0: o - 1.2,
        x1: o + 1.2,
        y1: 2.33,
        z: i - 0.05,
        len: 0.75,
        key: t.norenKey,
      }),
    t.lanternKey)
  ) {
    if (t.bigLantern)
      U(e, {
        x: t.o1 - 0.9,
        y: 1.15,
        z: t.face - 0.45,
        r: 0.48,
        h: 1.25,
        key: t.lanternKey,
        cell: t.lanternCell,
        zWall: i,
      });
    else
      for (let n of [t.o0 + 0.55, t.o1 - 0.55])
        U(e, {
          x: n,
          y: 1.7300000000000002,
          z: i - 0.35,
          r: 0.2,
          h: 0.56,
          key: t.lanternKey,
          cell: t.lanternCell,
          zWall: i,
        });
  }
  yield;
  let d = t.face - 1;
  if (t.kind === `grill`) {
    (n.setPaint(P(5921372, 0.4, 0.7)),
      n.box(o - 1.3, 0, t.face - 0.55, o + 1.3, 0.92, t.face + 0.15),
      n.setPaint(F(16734746, 2.8, !0)),
      n.box(o - 1.15, 0.92, t.face - 0.45, o + 1.15, 0.95, t.face + 0.05, 4),
      r.col(9067050, 0));
    for (let e = 0; e < 12; e++) {
      let n = o - 1.05 + e * 0.19;
      (r.box(n - 0.012, 0.98, t.face - 0.42, n + 0.012, 1, t.face + 0.02),
        r.col(e % 3 ? 8010266 : 5909010, 0),
        r.box(n - 0.03, 0.97, t.face - 0.26, n + 0.03, 1.03, t.face - 0.12),
        r.col(9067050, 0));
    }
    (e.box(o - 1.3, t.face - 0.55, o + 1.3, t.face + 0.15, 0, 1.1),
      c(e, { x: o, z: t.face + 0.6, rot: 0, pose: `cook`, palette: `vendor` }),
      J(e, { x: t.o0 + 0.8, z: d - 0.2, stools: 3 }),
      s(e, {
        x0: o - 1,
        z0: t.face - 0.95,
        x1: o + 1,
        z1: t.face - 0.95,
        people: 3,
        rot: 0,
        seatH: 0.45,
        palette: `office`,
      }));
  } else if (t.kind === `izakaya`)
    (J(e, { x: t.o0 + 1.2, z: d, stools: 3 }),
      J(e, { x: t.o1 - 1.2, z: d, stools: 2, crate: 14721562 }),
      s(e, {
        x0: t.o0 + 0.6,
        z0: d - 0.55,
        x1: t.o0 + 1.8,
        z1: d - 0.55,
        people: 2,
        rot: 0,
        seatH: 0.38,
        palette: `office`,
      }));
  else if (t.kind === `stand`)
    for (let n of [t.o0 + 1.3, t.o1 - 1.3])
      (r.col(6964262, 0),
        r.cyl(n, d, 0.32, 0.32, 0, 1, 10),
        r.col(3810324, 0),
        r.cyl(n, d, 0.36, 0.36, 1, 1.04, 10),
        e.circle(n, d, 0.36, 0, 1.05),
        c(e, {
          x: n - 0.55,
          z: d,
          rot: Math.PI / 2,
          pose: `stand`,
          palette: `office`,
          hold: 16042058,
        }),
        c(e, {
          x: n + 0.5,
          z: d - 0.2,
          rot: -Math.PI / 2,
          pose: `lean`,
          palette: `office`,
          hold: 16042058,
        }));
  t.menuKey &&
    G(e, { x: t.o1 - 0.35, z: t.face - 0.4, key: t.menuKey, rot: -0.3 });
}
function* be(e, t) {
  let n = e.lm,
    r = e.art,
    i = t.barD ?? 3.2,
    a = t.gH ?? 2.6,
    o = t.uH ?? 2.5,
    s = t.palette ?? [6965810, 3814448, 9071178, 4864558, 8018490, 5917248],
    c = e.rng.fork(28864);
  (n.setPaint(P(7828332, 0.95)),
    n.box(t.x0, -0.2, t.z0, t.x1, 0.02, t.z1, 4),
    n.setPaint(P(5591628, 0.9)),
    n.box(
      (t.x0 + t.x1) / 2 - 0.12,
      -0.2,
      t.z0,
      (t.x0 + t.x1) / 2 + 0.12,
      0.025,
      t.z1,
      4,
    ),
    e.floor(t.x0, t.z0, t.x1, t.z1, 0));
  let l = 0,
    u = 0,
    d = 0;
  for (let f of t.sides ?? [-1, 1]) {
    let p = f < 0 ? t.x0 : t.x1,
      m = p + f * i;
    (n.setPaint(P(7235164, 0.9)),
      n.box(Math.min(p, m), a + o, t.z0, Math.max(p, m), a + o + 0.3, t.z1, 4),
      e.box(Math.min(p, m), t.z0, Math.max(p, m), t.z1, 0, a + o + 0.3));
    let h = t.z0;
    for (; h < t.z1 - 1.6;) {
      let i = Math.min(t.z1 - h, 2.2 + c.next() * 1.2),
        m = h,
        g = h + i,
        _ = (m + g) / 2,
        v = s[Math.floor(c.next() * s.length)];
      n.setPaint(P(v, 0.85));
      let y = p,
        b = f < 0 ? 1 : 2;
      (n.box(
        Math.min(y, y + f * 0.12),
        0,
        m,
        Math.max(y, y + f * 0.12),
        a + o,
        m + 0.14,
      ),
        n.box(
          Math.min(y, y + f * 0.12),
          a - 0.35,
          m,
          Math.max(y, y + f * 0.12),
          a,
          g,
        ),
        n.setPaint(P(v + 657930 > 16777215 ? v : v + 526344, 0.85)),
        n.box(
          Math.min(y, y + f * 0.1),
          a,
          m,
          Math.max(y, y + f * 0.1),
          a + o,
          g,
          b | 4,
        ),
        n.setPaint(c.next() < 0.5 ? F(16046240, 1.4) : P(2764854, 0.2, 0.4)));
      let x = m + i * 0.25,
        S = g - i * 0.25;
      f < 0
        ? n.box(y + 0.1, a + 0.7, x, y + 0.12, a + 1.8, S, 1)
        : n.box(y - 0.12, a + 0.7, x, y - 0.1, a + 1.8, S, 2);
      let C = y - f * 0.02;
      if (t.open) {
        (r.col(16176800, 0.85, 1.05),
          r.rectX(
            m + 0.15,
            0.02,
            g - 0.15,
            a - 0.38,
            y + f * 0.6,
            f < 0 ? 1 : -1,
          ),
          n.setPaint(P(L.woodDark, 0.7)));
        for (let e of [m + 0.15, g - 0.2])
          n.box(
            Math.min(C, C + f * 0.06),
            0,
            e,
            Math.max(C, C + f * 0.06),
            a - 0.35,
            e + 0.05,
          );
        r.col(c.next() < 0.5 ? 2767450 : 8002068, 0);
        let e = m + 0.2,
          t = g - 0.2,
          i = a - 0.4;
        f < 0
          ? r.quad(
              C + 0.14,
              i - 0.75,
              t,
              C + 0.14,
              i - 0.75,
              e,
              C + 0.1,
              i,
              e,
              C + 0.1,
              i,
              t,
            )
          : r.quad(
              C - 0.14,
              i - 0.75,
              e,
              C - 0.14,
              i - 0.75,
              t,
              C - 0.1,
              i,
              t,
              C - 0.1,
              i,
              e,
            );
      } else
        (n.setPaint(P(10132632, 0.55, 0.5)),
          n.box(
            Math.min(C, C + f * 0.04),
            0,
            m + 0.1,
            Math.max(C, C + f * 0.04),
            a - 0.36,
            g - 0.1,
          ));
      let [w, T, E, D] = A(l++, t.names.cols, t.names.rows);
      if (
        (r.tex(e.atlas.r(t.names.key), 16777215, +!!t.open),
        r.rectX(
          m + 0.12,
          a - 0.33,
          g - 0.12,
          a - 0.02,
          y - f * 0.04,
          f < 0 ? 1 : -1,
          w,
          T,
          E,
          D,
        ),
        U(e, {
          x: y - f * 0.42,
          y: a - 0.98,
          z: m + 0.38,
          r: 0.2,
          h: 0.56,
          key: t.lanterns.key,
          cell: [u++ % t.lanterns.n, t.lanterns.n],
          zWall: void 0,
          lit: t.open,
        }),
        n.setPaint(P(L.black, 0.6, 0.4)),
        n.box(
          Math.min(y, y - f * 0.42),
          a - 0.4,
          m + 0.36,
          Math.max(y, y - f * 0.42),
          a - 0.37,
          m + 0.4,
        ),
        t.menus)
      ) {
        let [n, i, a, o] = A(d++, t.menus.cols, t.menus.rows);
        (r.tex(e.atlas.r(t.menus.key), 16777215, t.open ? 0.6 : 0),
          r.rectX(
            g - 0.62,
            1,
            g - 0.18,
            1.6,
            y - f * 0.05,
            f < 0 ? 1 : -1,
            n,
            i,
            a,
            o,
          ));
      }
      (t.open &&
        c.next() < 0.45 &&
        Math.abs(t.x1 - t.x0) > 2.2 &&
        J(e, {
          x: y - f * 0.75,
          z: _,
          stools: 2,
          crate: c.next() < 0.5 ? 13116956 : 14721562,
        }),
        c.next() < 0.5 && z(e, y - f * 0.25, a + 0.25, _),
        (h = g));
    }
    yield;
  }
  n.setPaint(P(1842204, 0.8));
  for (let e = t.z0 + 1.5; e < t.z1; e += 2.6 + c.next() * 1.5)
    n.box(
      t.x0,
      a + o - 0.6 - c.next() * 0.4,
      e,
      t.x1,
      a + o - 0.58 - c.next() * 0.4,
      e + 0.03,
    );
  if (t.canopy) {
    n.setPaint(P(10133664, 0.5, 0.5));
    for (let e = t.z0 + 0.2; e < t.z1; e += 0.5)
      n.box(
        t.x0 - 0.1,
        a + o - 0.15 + ((e * 4) % 1) * 0.02,
        e,
        t.x1 + 0.1,
        a + o - 0.12,
        e + 0.25,
        12,
      );
  }
  if (t.gate) {
    let i = t.gate.h ?? a + 0.9;
    (n.setPaint(P(L.black, 0.6, 0.4)),
      n.box(
        t.x0 - 0.05,
        i - 0.05,
        t.z0 - 0.25,
        t.x1 + 0.05,
        i + 0.75,
        t.z0 - 0.05,
        31,
      ),
      r.tex(e.atlas.r(t.gate.key), 16777215, 1),
      r.rectZ(t.x0, i, t.x1, i + 0.7, t.z0 - 0.26, -1));
  }
}
var Q = 11052186,
  $ = 9078396,
  xe = 14207114,
  Se = 14173482;
function Ce(e, t) {
  let n = e.lm,
    r = t.color ?? 14173482,
    i = t.span * 0.055 + 0.08;
  (n.push(), n.translate(t.x, 0, t.z), t.rot && n.rotateY(-t.rot));
  let a = t.span / 2;
  n.setPaint(P(L.black, 0.6, 0.2));
  for (let e of [-1, 1])
    n.cylinder(e * a, 0, i * 1.25, i * 1.2, 0, 0.55, 12, !0);
  n.setPaint(P(r, 0.55));
  for (let e of [-1, 1])
    n.cylinder(e * a, 0, i, i * 0.92, 0.5, t.h - 0.25, 12, !1);
  let o = t.h * 0.72;
  if (
    (n.box(-a - i * 2.2, o, -i * 0.45, a + i * 2.2, o + i * 1.1, i * 0.45),
    (t.kind ?? `myojin`) === `myojin`)
  ) {
    (n.box(-a - i * 3.2, t.h - 0.3, -i * 0.7, a + i * 3.2, t.h - 0.05, i * 0.7),
      n.setPaint(P(L.black, 0.5, 0.2)),
      n.box(
        -a - i * 3.6,
        t.h - 0.05,
        -i * 0.85,
        a + i * 3.6,
        t.h + 0.22,
        i * 0.85,
      ));
    for (let e of [-1, 1])
      (n.push(),
        n.translate(e * (a + i * 3.6), t.h + 0.08, 0),
        n.rotateZ(e * 0.22),
        n.box(-i * 1.6, -0.1, -i * 0.85, i * 1.6, 0.18, i * 0.85),
        n.pop());
    if (
      (n.setPaint(P(r, 0.55)),
      n.box(-i * 0.6, o + i * 1.1, -i * 0.4, i * 0.6, t.h - 0.3, i * 0.4),
      t.gaku)
    ) {
      n.setPaint(P(L.black, 0.5));
      let r = Math.min(0.9, t.h - 0.3 - o - i * 1.1 - 0.1);
      (n.box(
        -i * 1.4,
        o + i * 1.2,
        -i * 0.55,
        i * 1.4,
        o + i * 1.2 + r,
        -i * 0.4,
      ),
        e.art.tex(e.atlas.r(t.gaku), 16777215, 0),
        e.art.rectZ(
          -i * 1.25,
          o + i * 1.25,
          i * 1.25,
          o + i * 1.2 + r - 0.05,
          -i * 0.56,
          -1,
        ));
    }
  } else
    n.box(-a - i * 2, t.h - 0.25, -i * 0.7, a + i * 2, t.h + 0.05, i * 0.7);
  n.pop();
  let s = Math.cos(t.rot ?? 0),
    c = Math.sin(t.rot ?? 0);
  for (let n of [-1, 1])
    e.circle(t.x + n * a * s, t.z + n * a * c, i * 1.3, 0, t.h);
}
function we(e, t, n, r, i = `a`) {
  let a = e.lm;
  (a.push(),
    a.translate(t, 0, n),
    a.rotateY(-r),
    a.setPaint(P($, 0.9)),
    a.box(-0.45, 0, -0.55, 0.45, 0.5, 0.55),
    a.setPaint(P(Q, 0.9)),
    a.box(-0.38, 0.5, -0.48, 0.38, 1.05, 0.48),
    a.box(-0.42, 1.05, -0.52, 0.42, 1.12, 0.52),
    a.setPaint(P(10131084, 0.92)),
    a.box(-0.24, 1.12, 0, 0.24, 1.5, 0.38));
  for (let e of [-0.15, 0.15])
    a.box(e - 0.07, 1.12, -0.32, e + 0.07, 1.62, -0.18);
  (a.box(-0.2, 1.4, -0.3, 0.2, 1.85, 0.1),
    a.sphere(0, 2, -0.18, 0.21, 8, 6),
    a.box(-0.12, 1.92, -0.42, 0.12, 2.04, -0.28),
    i === `a` &&
      (a.setPaint(P(5920334, 0.9)),
      a.box(-0.08, 1.9, -0.43, 0.08, 1.93, -0.36)),
    a.setPaint(P(9341568, 0.92)),
    a.sphere(0, 2.04, -0.08, 0.24, 7, 5, a.p, 0.9),
    a.box(-0.1, 1.5, 0.3, 0.1, 1.95, 0.42),
    a.pop(),
    e.box(t - 0.5, n - 0.6, t + 0.5, n + 0.6, 0, 2.2));
}
function Te(e, t, n, r) {
  let i = e.lm;
  (i.push(), i.translate(t, 0, n), i.rotateY(-r), i.setPaint(P(L.wood, 0.75)));
  for (let [e, t] of [
    [-1, -0.7],
    [1, -0.7],
    [-1, 0.7],
    [1, 0.7],
  ])
    i.box(e - 0.08, 0, t - 0.08, e + 0.08, 2.3, t + 0.08);
  (i.box(-1.15, 2.2, -0.8, 1.15, 2.32, 0.8),
    i.setPaint(P(4881002, 0.6, 0.3)),
    i.quad([1.4, 2.32, -1.15], [-1.4, 2.32, -1.15], [-1.4, 3, 0], [1.4, 3, 0]),
    i.quad([-1.4, 2.32, 1.15], [1.4, 2.32, 1.15], [1.4, 3, 0], [-1.4, 3, 0]),
    i.setPaint(P(3033664, 0.7, 0.2)),
    i.quad(
      [-1.4, 2.28, -1.15],
      [1.4, 2.28, -1.15],
      [1.4, 2.96, 0],
      [-1.4, 2.96, 0],
    ),
    i.quad(
      [1.4, 2.28, 1.15],
      [-1.4, 2.28, 1.15],
      [-1.4, 2.96, 0],
      [1.4, 2.96, 0],
    ),
    i.setPaint(P(3828314, 0.6, 0.3)),
    i.box(-1.45, 2.95, -0.08, 1.45, 3.08, 0.08),
    i.setPaint(P(L.woodDark, 0.8)));
  for (let e of [-1.38, 1.38])
    i.quad(
      [e, 2.32, e < 0 ? 1.1 : -1.1],
      [e, 2.32, e < 0 ? -1.1 : 1.1],
      [e, 2.95, 0],
      [e, 2.95, 0],
    );
  (i.setPaint(P(Q, 0.85)),
    i.box(-0.75, 0, -0.35, 0.75, 0.8, 0.35),
    i.setPaint(P(4876922, 0.05, 0.3)),
    i.box(-0.62, 0.74, -0.24, 0.62, 0.76, 0.24, 4),
    i.setPaint(P(13153402, 0.7)));
  for (let e = 0; e < 4; e++) {
    let t = -0.45 + e * 0.3;
    (i.box(t - 0.01, 0.82, -0.3, t + 0.01, 0.84, 0.1),
      i.cylinder(t, -0.3, 0.04, 0.04, 0.8, 0.86, 6, !0));
  }
  (i.pop(), e.box(t - 1.1, n - 0.9, t + 1.1, n + 0.9, 0, 3.1));
}
function Ee(e, t, n, r = 2) {
  let i = e.lm;
  (i.setPaint(P(Q, 0.9)),
    i.box(t - 0.32, 0, n - 0.32, t + 0.32, 0.25, n + 0.32),
    i.cylinder(t, n, 0.12, 0.1, 0.25, r * 0.55, 8, !1),
    i.box(t - 0.28, r * 0.55, n - 0.28, t + 0.28, r * 0.62, n + 0.28),
    i.setPaint(F(16769696, 0.8)),
    i.box(t - 0.18, r * 0.62, n - 0.18, t + 0.18, r * 0.8, n + 0.18),
    i.setPaint(P(Q, 0.9)),
    i.loft(
      [
        t - 0.38,
        n + 0.38,
        t + 0.38,
        n + 0.38,
        t + 0.38,
        n - 0.38,
        t - 0.38,
        n - 0.38,
      ],
      r * 0.8,
      [
        t - 0.02,
        n + 0.02,
        t + 0.02,
        n + 0.02,
        t + 0.02,
        n - 0.02,
        t - 0.02,
        n - 0.02,
      ],
      r * 0.96,
      {},
    ),
    i.sphere(t, r * 0.98, n, 0.07, 6, 4),
    e.circle(t, n, 0.34, 0, r));
}
function De(e, t, n, r, i, a = 0.9) {
  let o = e.lm,
    s = Math.hypot(r - t, i - n),
    c = Math.max(1, Math.round(s / 0.9));
  o.setPaint(P(Q, 0.9));
  for (let e = 0; e <= c; e++) {
    let s = e / c,
      l = t + (r - t) * s,
      u = n + (i - n) * s;
    o.box(l - 0.09, 0, u - 0.09, l + 0.09, a, u + 0.09);
  }
  o.setPaint(P($, 0.9));
  let l = (r - t) / s,
    u = (i - n) / s;
  for (let e of [a * 0.35, a * 0.85])
    (o.push(),
      o.translate((t + r) / 2, e, (n + i) / 2),
      o.rotateY(-Math.atan2(u, l)),
      o.box(-s / 2, -0.04, -0.05, s / 2, 0.04, 0.05),
      o.pop());
  e.obb((t + r) / 2, (n + i) / 2, s / 2, 0.12, Math.atan2(u, l), 0, a);
}
function Oe(e, t) {
  let n = e.lm,
    r = t.h ?? 3.2,
    i = t.x - t.w / 2,
    a = t.x + t.w / 2,
    o = t.z - t.d / 2,
    s = t.z + t.d / 2;
  (n.setPaint(P($, 0.9)),
    n.box(i - 0.3, 0, o - 0.3, a + 0.3, 0.45, s + 0.3),
    n.setPaint(P(L.wood, 0.75)),
    n.box(i, 0.45, o, a, 0.75, s),
    n.setPaint(P(t.color ?? 15261900, 0.85)),
    n.box(i + 0.1, 0.75, o + 0.4, a - 0.1, r, s - 0.1, 19),
    n.setPaint(P(L.woodDark, 0.75)),
    n.box(i + 0.1, 0.75, o + 0.4, a - 0.1, r - 0.1, o + 0.45, 32));
  for (let e = 1; e < 8; e++) {
    let t = i + 0.1 + ((a - i - 0.2) * e) / 8;
    n.box(t - 0.02, 0.75, o + 0.36, t + 0.02, r - 0.1, o + 0.4);
  }
  n.setPaint(P(Se, 0.6));
  for (let e of [i, i + (a - i) / 3, a - (a - i) / 3, a])
    n.cylinder(e, o + 0.1, 0.1, 0.1, 0.75, r, 8, !1);
  (n.box(i - 0.2, r - 0.25, o - 0.05, a + 0.2, r, o + 0.25),
    n.setPaint(P(Q, 0.9)),
    n.box(t.x - 0.9, 0, o - 0.9, t.x + 0.9, 0.22, o - 0.3),
    n.box(t.x - 0.9, 0.22, o - 0.6, t.x + 0.9, 0.45, o - 0.3));
  let c = r + 0.05,
    l = r + t.d * 0.42;
  (n.setPaint(P(4881002, 0.6, 0.3)),
    n.quad(
      [a + 1, c - 0.25, o - 1],
      [i - 1, c - 0.25, o - 1],
      [i - 0.8, l, t.z],
      [a + 0.8, l, t.z],
    ),
    n.quad(
      [i - 1, c - 0.25, s + 1],
      [a + 1, c - 0.25, s + 1],
      [a + 0.8, l, t.z],
      [i - 0.8, l, t.z],
    ),
    n.setPaint(P(3031096, 0.7)),
    n.quad(
      [i - 1, c - 0.3, o - 1],
      [a + 1, c - 0.3, o - 1],
      [a + 0.8, l - 0.06, t.z],
      [i - 0.8, l - 0.06, t.z],
    ),
    n.quad(
      [a + 1, c - 0.3, s + 1],
      [i - 1, c - 0.3, s + 1],
      [i - 0.8, l - 0.06, t.z],
      [a + 0.8, l - 0.06, t.z],
    ),
    n.setPaint(P(3828314, 0.6, 0.3)),
    n.box(i - 0.85, l - 0.05, t.z - 0.15, a + 0.85, l + 0.22, t.z + 0.15),
    n.setPaint(P(L.woodDark, 0.8)));
  for (let [e, r] of [
    [i - 0.05, -1],
    [a + 0.05, 1],
  ])
    r < 0
      ? n.quad([e, c, s], [e, c, o], [e, l - 0.1, t.z], [e, l - 0.1, t.z])
      : n.quad([e, c, o], [e, c, s], [e, l - 0.1, t.z], [e, l - 0.1, t.z]);
  if (
    (n.setPaint(P(L.woodDark, 0.7)),
    n.box(t.x - 0.7, 0.45, o - 0.25, t.x + 0.7, 1.15, o + 0.25),
    n.setPaint(P(14200906, 0.3, 0.9)),
    n.sphere(t.x, r - 0.45, o - 0.05, 0.16, 8, 6),
    n.setPaint(P(14174794, 0.8)),
    n.box(t.x - 0.04, 1.2, o - 0.08, t.x + 0.04, r - 0.6, o - 0.02),
    n.setPaint(P(xe, 0.9)),
    n.push(),
    n.translate(i + 0.2, r - 0.4, o - 0.12),
    n.rotateZ(-Math.PI / 2),
    n.cylinder(0, 0, 0.08, 0.08, 0, a - i - 0.4, 8, !0),
    n.pop(),
    t.shide)
  ) {
    e.art.tex(e.atlas.r(t.shide), 16777215, 0);
    for (let t = 0; t < 4; t++) {
      let n = i + 0.5 + ((a - i - 1) * t) / 3;
      e.art.rectZ(n - 0.1, r - 0.95, n + 0.1, r - 0.48, o - 0.21, -1);
    }
  }
  n.setPaint(F(16773328, 1.2));
  for (let e of [t.x - 1.4, t.x + 1.4])
    n.cylinder(e, o - 0.2, 0.2, 0.2, r - 1.2, r - 0.5, 8, !0);
  e.box(i - 0.3, o - 0.3, a + 0.3, s + 0.3, 0, r + 1);
}
export {
  Y as A,
  C as B,
  oe as C,
  B as D,
  V as E,
  K as F,
  S as G,
  E as H,
  re as I,
  D as J,
  T as K,
  ae as L,
  q as M,
  W as N,
  ce as O,
  se as P,
  y as R,
  z as S,
  X as T,
  j as U,
  O as V,
  w as W,
  te as X,
  M as Y,
  b as Z,
  L as _,
  Ce as a,
  I as b,
  ye as c,
  pe as d,
  de as f,
  ue as g,
  fe as h,
  De as i,
  ie as j,
  le as k,
  _e as l,
  ge as m,
  Oe as n,
  Ee as o,
  me as p,
  v as q,
  we as r,
  be as s,
  Te as t,
  he as u,
  F as v,
  R as w,
  G as x,
  P as y,
  k as z,
};
