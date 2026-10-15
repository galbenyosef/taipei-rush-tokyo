// tokyo/assets/region-tokyo-sites-kit-CgUCzK9Y 02 — fillstyle
// Lines 286-633 of readable/tokyo/assets/region-tokyo-sites-kit-CgUCzK9Y.pretty.js (statement-aligned).
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
