// tokyo/assets/region-tokyo-sites-kit-DAwzVR8Q 01 — fillstyle
// Lines 1-285 of readable/tokyo/assets/region-tokyo-sites-kit-DAwzVR8Q.pretty.js (statement-aligned).
import { et as e, nt as t, rt as n } from "./world-CVm1JHks.js";
import { Cn as r, Sn as i, wn as a, yn as o } from "./region-tokyo-A7LxHjud.js";
import { i as s, n as c, r as l } from "./sites-kit-BhplXgcu.js";
function u(e) {
  a(e.canvas, e);
}
var d = (e, t = 700, n = !1) =>
  `${t} ${Math.max(4, Math.round(e))}px ${n ? r : i}`;
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
function h(e, t, n, r, i, a, s = 800, c = !1, l) {
  let u = o(t);
  if (!u.length) return;
  l && (e.fillStyle = l);
  let f = Math.min(a * 1.06, (i - r) / u.length),
    p = Math.min(a, f / 1.02);
  ((e.textAlign = `center`), (e.textBaseline = `middle`));
  let m = r + f / 2 + Math.max(0, (i - r - f * u.length) / 2);
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
