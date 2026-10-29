// tokyo/assets/region-tokyo-A7LxHjud 327 — fillstyle
// Lines 118004-118311 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function PJ(e, t, n, r, i, a, o, s = 900, c = !1, l = 64) {
  let u = Ar(t);
  if (!u.length) return;
  let d = Math.min(l, i * 0.86, a / u.length);
  ((e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.font = MJ(o, d, s, c)));
  let f = r + (a - d * u.length) / 2 + d / 2;
  u.forEach((t, r) => {
    let a = f + r * d;
    t.text &&
      (e.save(),
      e.translate(
        n + i / 2 + (t.shift ? d * 0.12 : 0),
        a - (t.shift ? d * 0.12 : 0),
      ),
      t.rotate && e.rotate(Math.PI / 2),
      t.tcy && e.scale(Math.min(1, 1.4 / t.text.length), 1),
      e.fillText(t.text, 0, 0),
      e.restore());
  });
}
function FJ(e) {
  let t = e >>> 0 || 1;
  return () => (t = (t * 1664525 + 1013904223) >>> 0) / 4294967296;
}
function IJ(e, t, n, r, i, a) {
  ((e.fillStyle = r), e.fillRect(0, 0, t, n));
  let o = FJ(a);
  for (let r = 0; r < (t * n) / 6; r++)
    ((e.fillStyle =
      o() < 0.5 ? `rgba(0,0,0,${i * o()})` : `rgba(255,255,255,${i * o()})`),
      e.fillRect(o() * t, o() * n, 1 + o() * 2, 1 + o() * 2));
}
function LJ(e, t, n, r = `#7a5634`) {
  ((e.fillStyle = r), e.fillRect(0, 0, t, n));
  let i = FJ(t * 7 + n);
  for (let r = 0; r < n; r += 2)
    ((e.fillStyle = `rgba(30,16,4,${0.05 + 0.12 * i()})`),
      e.fillRect(0, r, t, 1));
}
function RJ(e, t, n, r, i, a) {
  (e.beginPath(),
    e.moveTo(t + a, n),
    e.arcTo(t + r, n, t + r, n + i, a),
    e.arcTo(t + r, n + i, t, n + i, a),
    e.arcTo(t, n + i, t, n, a),
    e.arcTo(t, n, t + r, n, a),
    e.closePath());
}
function uke(e, t, n, r, i) {
  for (let a = 0; a < 6; a++)
    ((e.fillStyle = a % 2 ? i : r), e.fillRect((a * t) / 6, 0, t / 6 + 0.5, n));
  ((e.fillStyle = `rgba(0,0,0,0.18)`), e.fillRect(0, n - 6, t, 6));
  let a = e.createLinearGradient(0, 0, 0, n);
  (a.addColorStop(0, `rgba(0,0,0,0.12)`),
    a.addColorStop(0.5, `rgba(0,0,0,0)`),
    a.addColorStop(1, `rgba(0,0,0,0.1)`),
    (e.fillStyle = a),
    e.fillRect(0, 0, t, n));
}
function zJ(e, t, n, r, i) {
  let a = FJ(i);
  ((e.fillStyle = `#dfe9ee`), e.fillRect(0, 0, t, n));
  for (let r = 0; r < 400; r++)
    ((e.fillStyle = `rgba(255,255,255,${0.5 * a()})`),
      e.fillRect(a() * t, a() * n, 2, 2),
      (e.fillStyle = `rgba(120,150,170,${0.25 * a()})`),
      e.fillRect(a() * t, a() * n, 1, 1));
  if (r === `silver`)
    for (let t = 0; t < 3; t++)
      for (let n = 0; n < 6; n++) {
        let r = 12 + n * 20 + (t % 2) * 6,
          i = 12 + t * 20;
        (e.save(), e.translate(r, i), e.rotate(-0.5 + a() * 0.2));
        let o = e.createLinearGradient(0, -5, 0, 5);
        (o.addColorStop(0, `#4a6a86`),
          o.addColorStop(0.5, `#c8d4dc`),
          o.addColorStop(1, `#e8eef2`),
          (e.fillStyle = o),
          e.beginPath(),
          e.ellipse(0, 0, 11, 4.5, 0, 0, Math.PI * 2),
          e.fill(),
          e.beginPath(),
          e.moveTo(10, 0),
          e.lineTo(15, -4),
          e.lineTo(15, 4),
          e.fill(),
          (e.fillStyle = `#111`),
          e.fillRect(-8, -1.5, 2, 2),
          e.restore());
      }
  else if (r === `tuna`)
    for (let t = 0; t < 6; t++) {
      let n = 6 + (t % 3) * 40,
        r = 6 + Math.floor(t / 3) * 28;
      ((e.fillStyle = `#fff`),
        e.fillRect(n - 2, r - 2, 36, 24),
        (e.fillStyle = t % 2 ? `#b8102a` : `#e85a6a`),
        e.fillRect(n, r, 32, 20),
        (e.fillStyle = `rgba(255,255,255,0.35)`));
      for (let t = 0; t < 4; t++) e.fillRect(n, r + 3 + t * 5, 32, 1);
      ((e.fillStyle = `#2a8a3a`), e.fillRect(n + 22, r + 14, 8, 4));
    }
  else if (r === `crab`)
    for (let t = 0; t < 5; t++) {
      let n = 14 + t * 25,
        r = 32 + (t % 2 ? -8 : 8);
      ((e.fillStyle = `#e0501a`),
        e.beginPath(),
        e.ellipse(n, r, 11, 9, 0, 0, Math.PI * 2),
        e.fill(),
        (e.strokeStyle = `#d0401a`),
        (e.lineWidth = 2.5));
      for (let t = -2; t <= 2; t++)
        (e.beginPath(),
          e.moveTo(n, r),
          e.lineTo(n + 15, r + t * 5),
          e.moveTo(n, r),
          e.lineTo(n - 15, r + t * 5),
          e.stroke());
      ((e.fillStyle = `rgba(255,220,180,0.4)`),
        e.beginPath(),
        e.ellipse(n - 2, r - 3, 5, 3, 0, 0, Math.PI * 2),
        e.fill());
    }
  else {
    for (let t = 0; t < 4; t++) {
      let n = 4 + t * 31;
      ((e.fillStyle = t % 2 ? `#f07a40` : `#e86a30`),
        e.beginPath(),
        e.moveTo(n, 8),
        e.lineTo(n + 26, 4),
        e.lineTo(n + 28, 56),
        e.lineTo(n + 2, 60),
        e.closePath(),
        e.fill(),
        (e.strokeStyle = `rgba(255,240,220,0.6)`),
        (e.lineWidth = 1.2));
      for (let t = 0; t < 6; t++)
        (e.beginPath(),
          e.moveTo(n + 2, 12 + t * 8),
          e.lineTo(n + 26, 8 + t * 8),
          e.stroke());
    }
    ((e.fillStyle = `#fff`), e.fillRect(t - 34, 34, 30, 26));
    for (let n = 0; n < 40; n++)
      ((e.fillStyle = a() < 0.5 ? `#ff5a1a` : `#e8400a`),
        e.beginPath(),
        e.arc(t - 31 + a() * 24, 37 + a() * 20, 2, 0, Math.PI * 2),
        e.fill());
  }
  for (let t = 0; t < 2; t++)
    ((e.fillStyle = `#fff36a`),
      e.fillRect(8 + t * 64 + a() * 20, n - 16, 26, 12),
      (e.fillStyle = `#d0101a`),
      e.fillRect(11 + t * 64 + a() * 20, n - 12, 18, 3));
}
function BJ(e, t, n, r, i, a) {
  let o = FJ(i);
  ((e.fillStyle = a ? `#6a4a2a` : `#3a2a1a`), e.fillRect(0, 0, t, n));
  let s = a ? 18 : 20,
    c = a ? 20 : 15;
  for (let i = 0; i < n; i += c)
    for (let n = (i / c) % 2 ? -s / 2 : 0; n < t; n += s)
      ((e.fillStyle = r[Math.floor(o() * r.length)]),
        a
          ? (RJ(e, n + 1, i + 1, s - 2, c - 2, 4),
            e.fill(),
            (e.fillStyle = `rgba(255,255,255,0.35)`),
            e.fillRect(n + 3, i + 3, s - 8, 3),
            (e.fillStyle = `rgba(255,255,255,0.8)`),
            e.fillRect(n + 4, i + c - 9, s - 8, 5))
          : (e.fillRect(n + 1, i + 1, s - 2, c - 2),
            (e.fillStyle = `rgba(255,255,255,0.55)`),
            e.fillRect(n + 3, i + 4, s - 6, 3),
            (e.fillStyle = `rgba(0,0,0,0.25)`),
            e.fillRect(n + 1, i + c - 3, s - 2, 2)));
}
function dke(e, t, n) {
  ((e.fillStyle = `#e8f2f4`), e.fillRect(0, 0, t, n));
  let r = [
    [`#ffd23a`, `#f2b81a`],
    [`#a8d870`, `#7ab84a`],
    [`#ff6a8a`, `#e8405a`],
    [`#ffb03a`, `#f08a1a`],
  ];
  for (let t = 0; t < 4; t++) {
    let [n, i] = r[t];
    for (let r = 0; r < 5; r++) {
      let a = 6 + t * 31 + (r % 2) * 12,
        o = 6 + Math.floor(r / 2) * 18;
      ((e.fillStyle = n),
        e.fillRect(a, o, 10, 15),
        (e.fillStyle = i),
        e.fillRect(a, o + 11, 10, 4),
        (e.fillStyle = `#d8c8a0`),
        e.fillRect(a + 4, o + 15, 2, 4));
    }
  }
  ((e.fillStyle = `rgba(255,255,255,0.35)`), e.fillRect(0, 0, t, 6));
}
function VJ(e, t, n, r, i) {
  let a = FJ(i);
  ((e.fillStyle = `#2a2a2a`),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = `#b8b8b0`),
    e.fillRect(0, 2, t, 3));
  for (let i = 0; i < t; i += 9) {
    let t = r[Math.floor(a() * r.length)];
    ((e.fillStyle = `#c8c8c0`),
      e.fillRect(i + 4, 2, 1, 6),
      (e.fillStyle = t),
      e.beginPath(),
      e.moveTo(i, 8),
      e.lineTo(i + 9, 8),
      e.lineTo(i + 9 + (a() - 0.5) * 2, n - 4 - a() * 14),
      e.lineTo(i + (a() - 0.5) * 2, n - 4 - a() * 14),
      e.closePath(),
      e.fill(),
      (e.fillStyle = `rgba(0,0,0,0.3)`),
      e.fillRect(i + 8, 8, 1, n - 20));
  }
}
function fke(e, t, n) {
  let r = FJ(55);
  ((e.fillStyle = `#5a3a1c`),
    e.fillRect(0, 0, t, n),
    [
      [`#ff8a1a`, 7],
      [`#e8141e`, 6],
      [`#f2d21a`, 7],
      [`#5aa83a`, 6],
    ].forEach(([t, i], a) => {
      let o = a * 32;
      ((e.fillStyle = `#c8a070`), e.fillRect(o + 1, 1, 30, n - 2));
      for (let a = 0; a < 14; a++)
        ((e.fillStyle = t),
          e.beginPath(),
          e.arc(o + 6 + r() * 20, 6 + r() * (n - 12), i, 0, Math.PI * 2),
          e.fill(),
          (e.fillStyle = `rgba(255,255,255,0.3)`),
          e.beginPath(),
          e.arc(o + 5 + r() * 20, 5 + r() * (n - 12), 2, 0, Math.PI * 2),
          e.fill());
    }));
}
function pke(e, t, n, r) {
  ((e.fillStyle = `#f4f4f0`), e.fillRect(0, 0, t, n));
  let i = FJ(61);
  for (let r = 0; r < 300; r++)
    ((e.fillStyle = `rgba(0,0,0,${0.05 * i()})`),
      e.fillRect(i() * t, i() * n, 2, 2));
  ((e.fillStyle = `rgba(0,0,0,0.12)`),
    e.fillRect(0, n / 2 - 1, t, 2),
    (e.fillStyle = `#2a4aa8`),
    (e.font = MJ(r, 18, 900)),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    NJ(e, jJ(`trade.fish.sign.sengyo`), t * 0.3, n * 0.27, t * 0.5),
    (e.fillStyle = `#d0101a`),
    NJ(e, jJ(`trade.dried-goods.sign.konbu`), t * 0.72, n * 0.77, t * 0.45));
}
function mke(e, t, n, r, i, a, o, s) {
  ((e.fillStyle = `#222`),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = i),
    RJ(e, 2, 2, t - 4, n - 4, 4),
    e.fill(),
    s % 3 == 0 &&
      ((e.fillStyle = `rgba(255,255,255,0.35)`), e.fillRect(4, 4, 14, 4)),
    (e.fillStyle = a),
    (e.font = MJ(o, Math.round(n * 0.62), 900)),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    NJ(e, r, t / 2, n / 2 + 1, t - 12));
}
function hke(e, t, n, r, i, a, o) {
  ((e.fillStyle = i),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = `rgba(255,255,255,0.9)`));
  for (let t = 6; t < n; t += 28) e.fillRect(0, t, 5, 8);
  ((e.fillStyle = `rgba(0,0,0,0.12)`),
    e.fillRect(0, 0, t, 10),
    (e.fillStyle = a),
    PJ(e, r, 6, 14, t - 10, n - 26, o, 900, !0, 40));
}
function gke(e, t, n, r, i, a, o) {
  ((e.fillStyle = i),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = `rgba(0,0,0,0.13)`));
  for (let r = 4; r < n; r += 9) e.fillRect(0, r, t, 1.5);
  let s = e.createLinearGradient(0, 0, t, 0);
  (s.addColorStop(0, `rgba(0,0,0,0.25)`),
    s.addColorStop(0.5, `rgba(255,255,255,0.12)`),
    s.addColorStop(1, `rgba(0,0,0,0.25)`),
    (e.fillStyle = s),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = a),
    PJ(e, r, t * 0.2, 10, t * 0.6, n - 20, o, 900, !0, 40));
}
function HJ(e, t, n, r, i, a, o) {
  (LJ(e, t, n, `#4a3018`),
    (e.fillStyle = i),
    e.fillRect(4, 4, t - 8, n - 8),
    (e.fillStyle = a),
    PJ(e, r, 6, 8, t - 12, n - 16, o, 700, !0, 30));
}
