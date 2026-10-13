// tokyo__assets__region-tokyo-BcM3fReU 201 — fillstyle
// Lines 83734-84074 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function gK(e, t, n, r) {
  ((e.fillStyle = `#0d0f10`),
    e.fillRect(0, 0, t, n),
    e.save(),
    e.translate(t / 2, n / 2),
    e.rotate(r),
    (e.fillStyle = `#22e0a8`),
    e.beginPath(),
    e.moveTo(-22, -7),
    e.lineTo(4, -7),
    e.lineTo(4, -18),
    e.lineTo(24, 0),
    e.lineTo(4, 18),
    e.lineTo(4, 7),
    e.lineTo(-22, 7),
    e.closePath(),
    e.fill(),
    e.restore());
}
function _K(e, t, n, r) {
  ((e.fillStyle = `#0d0f10`), e.fillRect(0, 0, t, n));
  let i = r ? `#25dcb2` : `#ff3524`;
  ((e.fillStyle = i), (e.strokeStyle = i), (e.lineCap = `round`));
  let a = t / 2,
    o = n / 2;
  (e.beginPath(),
    e.arc(a + (r ? 3 : 0), o - 19, 6, 0, Math.PI * 2),
    e.fill(),
    (e.lineWidth = 8),
    e.beginPath(),
    r
      ? (e.moveTo(a + 2, o - 10),
        e.lineTo(a - 1, o + 6),
        e.moveTo(a - 1, o + 6),
        e.lineTo(a - 11, o + 22),
        e.moveTo(a - 1, o + 6),
        e.lineTo(a + 10, o + 22),
        e.stroke(),
        (e.lineWidth = 5),
        e.beginPath(),
        e.moveTo(a + 1, o - 7),
        e.lineTo(a - 12, o + 2),
        e.moveTo(a + 1, o - 7),
        e.lineTo(a + 13, o))
      : (e.moveTo(a, o - 10),
        e.lineTo(a, o + 6),
        e.moveTo(a - 4, o + 6),
        e.lineTo(a - 4, o + 23),
        e.moveTo(a + 4, o + 6),
        e.lineTo(a + 4, o + 23),
        e.stroke(),
        (e.lineWidth = 5),
        e.beginPath(),
        e.moveTo(a - 6, o - 8),
        e.lineTo(a - 9, o + 6),
        e.moveTo(a + 6, o - 8),
        e.lineTo(a + 9, o + 6)),
    e.stroke());
}
function vK(e, t, n) {
  ((e.fillStyle = `#0d0f10`),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = `#ff3524`));
  for (let n = 0; n < 8; n++) e.fillRect(6, 6 + n * 11, t - 12, 7);
}
function yK(e, t, n) {
  let r = $G(71),
    i = Math.round(n * 0.3),
    a = e.createLinearGradient(0, 0, 0, i);
  (a.addColorStop(0, `#dbe6ea`),
    a.addColorStop(1, `#b9c9cf`),
    (e.fillStyle = a),
    e.fillRect(0, 0, t, i),
    (e.fillStyle = `#9aa3a5`),
    e.fillRect(0, i, t, n - i));
  for (let r = i + 3; r < n; r += 5)
    ((e.fillStyle = `#868f92`),
      e.fillRect(0, r, t, 1),
      (e.fillStyle = `#aab3b5`),
      e.fillRect(0, r + 1, t, 1));
  e.fillStyle = `#7a8285`;
  for (let r of [t / 6, t / 2, (5 * t) / 6])
    e.fillRect(Math.round(r), i, 1, n - i);
  for (let a = 0; a < 14; a++) {
    let a = r() * t,
      o = 6 + r() * (n - i) * 0.6;
    ((e.fillStyle = `rgba(70,74,72,${0.08 + r() * 0.12})`),
      e.fillRect(a, i + 2, 1 + r() * 2, o));
  }
  let o = e.createLinearGradient(0, n - 14, 0, n);
  (o.addColorStop(0, `rgba(60,62,58,0)`),
    o.addColorStop(1, `rgba(60,62,58,0.35)`),
    (e.fillStyle = o),
    e.fillRect(0, n - 14, t, 14),
    (e.fillStyle = `#6a7275`),
    e.fillRect(0, i - 2, t, 4),
    e.fillRect(0, 0, t, 3),
    (e.fillStyle = `#5d6568`));
  for (let r of [0, t / 3, (2 * t) / 3, t])
    e.fillRect(Math.round(r) - 3, 0, 6, n);
  e.fillStyle = `#7d8689`;
  for (let r of [0, t / 3, (2 * t) / 3, t])
    e.fillRect(Math.round(r) - 1, 0, 1, n);
}
function bK(e, t, n) {
  let r = $G(29);
  ((e.fillStyle = `#a9a8a0`),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = `#96958d`));
  for (let r = 1; r < 4; r++) e.fillRect(Math.round((r * t) / 4), 0, 1, n);
  for (let i = 0; i < 18; i++) {
    let i = r() < 0.5 ? r() * t * 0.18 : t - r() * t * 0.18;
    ((e.fillStyle = `rgba(78,74,64,${0.06 + r() * 0.12})`),
      e.beginPath(),
      e.ellipse(i, r() * n, 6 + r() * 18, 3 + r() * 10, 0, 0, Math.PI * 2),
      e.fill());
  }
  ((e.fillStyle = `#6f7670`),
    e.fillRect(t / 2 - 7, 0, 14, n),
    (e.fillStyle = `#899089`),
    e.fillRect(t / 2 - 7, 0, 2, n),
    (e.fillStyle = `#78807a`),
    e.fillRect(0, 0, t, 7),
    e.fillRect(0, n - 7, t, 7));
  let i = Math.round(n * 0.26);
  ((e.fillStyle = `#4f5552`),
    e.fillRect(0, i, t, 4),
    (e.fillStyle = `#7b827e`),
    e.fillRect(0, i, t, 1));
  for (let n of [t * 0.25, t * 0.75]) e.fillRect(Math.round(n), i - 2, 3, 8);
}
function xK(e, t, n) {
  let r = $G(53),
    i = e.createLinearGradient(0, 0, 0, n);
  (i.addColorStop(0, `#c2c6bc`),
    i.addColorStop(1, `#a9aea4`),
    (e.fillStyle = i),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = `#d4d6ce`),
    e.fillRect(0, 0, t, 5),
    (e.fillStyle = `#8f948b`),
    e.fillRect(0, Math.round(n * 0.34), t, 2),
    (e.fillStyle = `#9ca197`));
  for (let r = 1; r < 4; r++)
    e.fillRect(Math.round((r * t) / 4) - 1, Math.round(n * 0.34), 2, n);
  ((e.fillStyle = `#6f746c`),
    e.fillRect(0, 0, 2, n),
    e.fillRect(t - 2, 0, 2, n));
  for (let i = 0; i < 16; i++) {
    let i = r() < 0.4 ? (r() < 0.5 ? 2 + r() * 10 : t - 2 - r() * 10) : r() * t;
    ((e.fillStyle =
      r() < 0.3
        ? `rgba(120,78,46,${0.1 + r() * 0.15})`
        : `rgba(66,70,64,${0.08 + r() * 0.14})`),
      e.fillRect(i, Math.round(n * 0.36), 1 + r() * 2, 8 + r() * n * 0.5));
  }
  ((e.fillStyle = `#5f645c`),
    e.fillRect(0, n - 9, t, 9),
    (e.fillStyle = `#8a8f86`),
    e.fillRect(0, n - 10, t, 1));
}
function SK(e, t, n) {
  ((e.fillStyle = `#4a4a48`), e.fillRect(0, 0, t, n));
  let r = t / 2,
    i = n / 2;
  ((e.strokeStyle = `#6e6c66`), (e.lineWidth = 2));
  for (let t of [30, 26, 12])
    (e.beginPath(), e.arc(r, i, t, 0, Math.PI * 2), e.stroke());
  e.fillStyle = `#76736b`;
  for (let t = 0; t < 5; t++) {
    let n = (t / 5) * Math.PI * 2 - Math.PI / 2;
    (e.beginPath(),
      e.ellipse(
        r + Math.cos(n) * 19,
        i + Math.sin(n) * 19,
        5,
        3,
        n,
        0,
        Math.PI * 2,
      ),
      e.fill());
  }
  (e.beginPath(), e.arc(r, i, 6, 0, Math.PI * 2), e.fill());
}
function CK(e, t, n, r, i) {
  switch (((e.textAlign = `center`), (e.textBaseline = `middle`), n.kind)) {
    case `plate`:
      ((e.fillStyle = UG.blue),
        e.fillRect(0, 0, r, i),
        (e.fillStyle = `#ffffff`),
        (e.font = XG(t, 7, 700)),
        ZG(e, n.ward, 13, 10, 22),
        (e.font = XG(t, 15, 800)),
        ZG(e, n.town, 62, 13, 72),
        (e.font = `800 20px "Helvetica Neue",Arial,${t.sans}`),
        ZG(e, n.ban, r - 15, 14, 24),
        (e.font = `600 7px "Helvetica Neue",Arial,sans-serif`),
        ZG(e, n.en, r / 2, 26.5, r - 10),
        (e.fillStyle = `rgba(255,255,255,0.85)`),
        e.fillRect(2, 21, r - 4, 0.8));
      break;
    case `cross`:
      ((e.fillStyle = `#ffffff`),
        e.fillRect(0, 0, r, i),
        (e.fillStyle = UG.blue),
        e.fillRect(2, 2, r - 4, i - 4),
        (e.fillStyle = `#ffffff`),
        (e.font = XG(t, 30, 800)),
        ZG(e, n.ja, r / 2, 24, r - 22),
        (e.font = `600 14px "Helvetica Neue",Arial,sans-serif`),
        ZG(e, n.en, r / 2, 50, r - 26));
      break;
    case `name`:
      (e.scale(r / 256, i / 64),
        (r = 256),
        (i = 64),
        (e.fillStyle = `#f7f7f2`),
        e.fillRect(0, 0, r, i),
        (e.fillStyle = `#1a8a46`),
        e.fillRect(0, 0, r, 6),
        (e.fillStyle = `#141414`),
        (e.font = XG(t, 28, 800)),
        ZG(e, n.ja, r / 2, 28, r - 20),
        (e.font = `600 13px "Helvetica Neue",Arial,sans-serif`),
        ZG(e, n.en, r / 2, 52, r - 24));
      break;
    case `guide`:
      (e.scale(r / 512, i / 224), wK(e, t, n, 512, 224));
      break;
    case `shuto`:
      (e.scale(r / 512, i / 224), EK(e, t, n, 512, 224));
  }
}
function wK(e, t, n, r, i) {
  ((e.fillStyle = `#ffffff`),
    QG(e, 0, 0, r, i, 10),
    e.fill(),
    (e.fillStyle = UG.blue),
    QG(e, 4, 4, r - 8, i - 8, 8),
    e.fill(),
    (e.fillStyle = `#ffffff`));
  let a = r / 2,
    o = i * 0.62;
  (e.fillRect(a - 8, o, 16, i - 14 - o),
    n.ahead &&
      (e.fillRect(a - 8, i * 0.3, 16, o - i * 0.3 + 8),
      TK(e, a, i * 0.3, 0, 16)));
  let s = n.left ? a - r * 0.2 : a,
    c = n.right ? a + r * 0.2 : a;
  (e.fillRect(s, o - 8, c - s, 16),
    n.left && TK(e, s, o, -Math.PI / 2, 16),
    n.right && TK(e, c, o, Math.PI / 2, 16));
  let l = (n, r, i, a) => {
    n &&
      ((e.font = XG(t, 34, 800)),
      ZG(e, n.ja, r, i, a),
      (e.font = `600 16px "Helvetica Neue",Arial,sans-serif`),
      ZG(e, n.en, r, i + 26, a));
  };
  if (
    (l(n.ahead, a, i * 0.12 + 6, r * 0.5),
    l(n.left, r * 0.15, o - 6, r * 0.24),
    l(n.right, r * 0.85, o - 6, r * 0.24),
    n.route)
  ) {
    let t = a,
      r = i - 34;
    ((e.fillStyle = `#ffffff`),
      e.beginPath(),
      e.moveTo(t - 20, r - 16),
      e.lineTo(t + 20, r - 16),
      e.lineTo(t + 20, r + 4),
      e.quadraticCurveTo(t + 18, r + 16, t, r + 22),
      e.quadraticCurveTo(t - 18, r + 16, t - 20, r + 4),
      e.closePath(),
      e.fill(),
      (e.fillStyle = UG.blue),
      (e.font = `800 22px "Helvetica Neue",Arial,sans-serif`),
      ZG(e, n.route, t, r + 1, 32));
  }
}
function TK(e, t, n, r, i) {
  (e.save(),
    e.translate(t, n),
    e.rotate(r),
    e.beginPath(),
    e.moveTo(-i * 1.3, i * 0.4),
    e.lineTo(0, -i * 1.4),
    e.lineTo(i * 1.3, i * 0.4),
    e.closePath(),
    e.fill(),
    e.restore());
}
function EK(e, t, n, r, i) {
  ((e.fillStyle = `#ffffff`),
    QG(e, 0, 0, r, i, 8),
    e.fill(),
    (e.fillStyle = UG.green),
    QG(e, 4, 4, r - 8, i - 8, 6),
    e.fill(),
    (e.fillStyle = `#ffffff`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`));
  let a = 20;
  (n.route
    ? ((e.fillStyle = `#ffffff`),
      QG(e, 18, i / 2 - 34, 72, 68, 10),
      e.fill(),
      (e.fillStyle = UG.green),
      (e.font = `800 38px "Helvetica Neue",Arial,sans-serif`),
      ZG(e, n.route, 54, i / 2 + 2, 60),
      (a = 100))
    : n.exit &&
      ((e.fillStyle = `#ffffff`),
      QG(e, 16, 16, 112, 64, 8),
      e.fill(),
      (e.fillStyle = UG.green),
      (e.font = XG(t, 30, 800)),
      ZG(e, YG(`common.facility.deguchi`, `出口`), 72, 40, 96),
      (e.font = `700 13px "Helvetica Neue",Arial,sans-serif`),
      ZG(e, B(`streets.shuto.exit-en`), 72, 66, 90),
      (a = 130)),
    (e.fillStyle = `#ffffff`));
  let o = (a + r - 16) / 2,
    s = r - 16 - a - 10;
  ((e.font = XG(t, 48, 800)),
    ZG(e, n.top.ja, o, i * 0.34, s),
    (e.font = `600 20px "Helvetica Neue",Arial,sans-serif`),
    ZG(e, n.top.en, o, i * 0.34 + 38, s),
    n.sub &&
      ((e.fillStyle = `rgba(255,255,255,0.9)`),
      e.fillRect(a + 6, i * 0.66, r - a - 28, 2),
      (e.fillStyle = `#ffffff`),
      (e.font = XG(t, 26, 800)),
      ZG(e, n.sub.ja, o, i * 0.78, s),
      (e.font = `600 13px "Helvetica Neue",Arial,sans-serif`),
      ZG(e, n.sub.en, o, i * 0.78 + 22, s)));
}
var DK = new Uint8Array(256);
for (let e = 0; e < 256; e++) DK[e] = Math.round(255 * (e / 255) ** 2.2);
