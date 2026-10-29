// tokyo/assets/region-tokyo-55J_WESF 364 — fillstyle
// Lines 132562-132906 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function hMe(e, t, n, r, i, a, o, s) {
  let c = qZ(77 + a * 13);
  ((e.fillStyle = r),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = i),
    e.fillRect(6, 6, t - 12, 18),
    (e.fillStyle = r),
    (e.font = `800 12px "Helvetica Neue",Arial,${o.sans}`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    s && GZ(e, s, t / 2, 15.5, t - 20));
  let l = t - 16,
    u = e.createLinearGradient(0, 28, 0, 156);
  (u.addColorStop(0, `#f8fbff`),
    u.addColorStop(1, `#dfe8f2`),
    (e.fillStyle = u),
    e.fillRect(8, 28, l, 128));
  let d = [
    `#e8392f`,
    `#2d6fd1`,
    `#f2b81e`,
    `#1f9a52`,
    `#f0f0f0`,
    `#7a3b1f`,
    `#ff7a1a`,
    `#c8102e`,
    `#3fb3e6`,
    `#202020`,
    `#9ac43a`,
    `#e85aa0`,
  ];
  for (let t = 0; t < 3; t++) {
    let n = 32 + t * 42;
    for (let t = 0; t < 6; t++) {
      let r = 11 + t * ((l - 6) / 6),
        i = (l - 6) / 6 - 3,
        a = d[Math.floor(c() * d.length)],
        o = c() < 0.4,
        s = o ? 18 : 26;
      ((e.fillStyle = a),
        KZ(e, r + 1, n + 30 - s, i - 2, s, o ? 2 : 4),
        e.fill(),
        (e.fillStyle = `rgba(255,255,255,0.75)`),
        e.fillRect(r + 2, n + 30 - s * 0.6, i - 4, s * 0.22),
        (e.fillStyle = o ? `#c0c0c0` : `#ffffff`),
        e.fillRect(r + i / 2 - 2, n + 30 - s - (o ? 1 : 4), 4, o ? 2 : 4));
    }
    let r = t >= 3 - JZ && a !== 2;
    ((e.fillStyle = r ? `#d81e2a` : `#1a5fd0`),
      e.fillRect(9, n + 31, l - 2, 7),
      (e.fillStyle = `#ffffff`),
      (e.font = WZ(o, 6, 700)));
    for (let t = 0; t < 3; t++)
      GZ(
        e,
        L(r ? `streets.vending.hot` : `streets.vending.cold`),
        9 + ((l - 2) * (t + 0.5)) / 3,
        n + 34.6,
        (l - 2) / 3 - 2,
      );
  }
  ((e.fillStyle = `rgba(255,255,255,0.18)`),
    e.beginPath(),
    e.moveTo(8, 28),
    e.lineTo(8 + l * 0.45, 28),
    e.lineTo(8, 117.6),
    e.closePath(),
    e.fill(),
    (e.fillStyle = i === `#f2f2f2` || i === `#f4f4f4` ? `#e9e9e9` : `#d8d8d8`),
    e.fillRect(8, 162, l, 64),
    (e.fillStyle = `#26282c`),
    e.fillRect(t - 40, 168, 22, 10),
    e.fillRect(t - 34, 184, 10, 14),
    (e.fillStyle = `#1a6fd8`),
    e.fillRect(14, 168, 30, 22),
    (e.fillStyle = `#ffffff`),
    (e.font = WZ(o, 5, 700)),
    GZ(e, L(`streets.vending.ic`), 29, 196, 34),
    (e.fillStyle = `#30343a`),
    e.fillRect(14, n - 34, l - 12, 22),
    (e.fillStyle = `#16181b`),
    e.fillRect(16, n - 31, l - 16, 16),
    (e.fillStyle = `#1c1c1c`),
    e.fillRect(0, n - 8, t, 8));
}
function gMe(e, t, n) {
  let r = e.createLinearGradient(0, 0, t, 0);
  (r.addColorStop(0, `#d8d8d8`),
    r.addColorStop(1, `#f2f2f2`),
    (e.fillStyle = r),
    e.fillRect(0, 0, t, n));
}
function _Me(e, t, n, r, i, a, o) {
  let s = a % 2 == 0;
  ((e.fillStyle = s ? `#f6d21a` : `#fbfbf6`),
    e.fillRect(0, 0, t, n),
    (e.strokeStyle = s ? `#c8a200` : `#1d4a9b`),
    (e.lineWidth = 2),
    e.strokeRect(2, 2, t - 4, n - 4),
    (e.fillStyle = s ? `#1b1b1b` : `#1d4a9b`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`));
  let c = [...r],
    l = n - 70,
    u = Math.min(30, l / c.length);
  ((e.font = WZ(o, Math.min(26, u * 0.95), 800)),
    c.forEach((n, r) => e.fillText(n, t / 2, 8 + u * (r + 0.5))),
    (e.fillStyle = a % 2 ? RZ.red : `#c0201a`),
    e.fillRect(4, n - 56, t - 8, 50),
    (e.fillStyle = `#ffffff`));
  let d = [...i],
    f = Math.min(16, 46 / Math.max(1, Math.ceil(d.length / 2)));
  e.font = WZ(o, f, 800);
  let p = Math.ceil(d.length / 2);
  d.forEach((r, i) => {
    let a = i < p ? 0 : 1,
      o = i < p ? i : i - p;
    e.fillText(r, t / 2 + (a === 0 ? 8 : -8), n - 50 + f * (o + 0.5));
  });
}
function vMe(e, t, n, r) {
  ((e.fillStyle = `#ffffff`),
    e.beginPath(),
    e.moveTo(0, 0),
    e.lineTo(t, 0),
    e.lineTo(t / 2, n),
    e.closePath(),
    e.fill(),
    (e.fillStyle = RZ.red),
    e.beginPath(),
    e.moveTo(9, 5),
    e.lineTo(t - 9, 5),
    e.lineTo(t / 2, n - 10),
    e.closePath(),
    e.fill(),
    (e.fillStyle = `#ffffff`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.font = WZ(r, 30, 800)),
    GZ(e, UZ(`common.safety.tomare`, `止まれ`), t / 2, 34, t * 0.62),
    (e.font = `800 15px "Helvetica Neue",Arial,sans-serif`),
    GZ(e, L(`streets.sign.tomare-en`), t / 2, 60, t * 0.3));
}
function YZ(e, t, n, r, i, a) {
  ((e.fillStyle = `#ffffff`),
    e.beginPath(),
    e.arc(t / 2, n / 2, t / 2, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = i),
    e.beginPath(),
    e.arc(t / 2, n / 2, t / 2 - 3, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = r),
    e.beginPath(),
    e.arc(t / 2, n / 2, t / 2 - 3 - a, 0, Math.PI * 2),
    e.fill());
}
function XZ(e, t, n, r) {
  (YZ(e, t, n, RZ.blue, RZ.red, 11),
    (e.strokeStyle = RZ.red),
    (e.lineWidth = 11),
    (e.lineCap = `butt`));
  let i = (t / 2 - 12) * Math.SQRT1_2;
  (e.beginPath(),
    e.moveTo(t / 2 - i, n / 2 - i),
    e.lineTo(t / 2 + i, n / 2 + i),
    r === 2 && (e.moveTo(t / 2 + i, n / 2 - i), e.lineTo(t / 2 - i, n / 2 + i)),
    e.stroke());
}
function ZZ(e, t, n, r, i) {
  (YZ(e, t, n, `#ffffff`, RZ.red, 10),
    (e.fillStyle = RZ.blue),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.font = `800 56px "Helvetica Neue","Arial Narrow",Arial,${i.sans}`),
    GZ(e, r, t / 2, n / 2 + 3, t * 0.6));
}
function yMe(e, t, n) {
  ((e.fillStyle = `#ffffff`),
    e.beginPath(),
    e.arc(t / 2, n / 2, t / 2, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = RZ.red),
    e.beginPath(),
    e.arc(t / 2, n / 2, t / 2 - 3, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#ffffff`),
    e.fillRect(t * 0.18, n / 2 - 10, t * 0.64, 20));
}
function bMe(e, t, n) {
  ((e.fillStyle = `#ffffff`),
    KZ(e, 0, 0, t, n, 10),
    e.fill(),
    (e.fillStyle = RZ.blue),
    KZ(e, 4, 4, t - 8, n - 8, 8),
    e.fill(),
    (e.fillStyle = `#ffffff`),
    e.beginPath(),
    e.moveTo(t / 2, 14),
    e.lineTo(t - 12, n - 16),
    e.lineTo(12, n - 16),
    e.closePath(),
    e.fill(),
    (e.fillStyle = `#1a1a1a`));
  for (let t = 0; t < 5; t++) e.fillRect(28 + t * 15, n - 30, 9, 8);
  let r = t / 2,
    i = n / 2 + 4;
  (e.beginPath(),
    e.arc(r + 2, i - 22, 6, 0, Math.PI * 2),
    e.fill(),
    (e.lineWidth = 6),
    (e.lineCap = `round`),
    (e.strokeStyle = `#1a1a1a`),
    e.beginPath(),
    e.moveTo(r + 1, i - 14),
    e.lineTo(r - 2, i + 4),
    e.moveTo(r - 2, i + 4),
    e.lineTo(r - 12, i + 18),
    e.moveTo(r - 2, i + 4),
    e.lineTo(r + 9, i + 18),
    e.moveTo(r, i - 10),
    e.lineTo(r - 11, i - 1),
    e.moveTo(r, i - 10),
    e.lineTo(r + 12, i - 3),
    e.stroke());
}
function xMe(e, t, n, r) {
  ((e.fillStyle = `#ffffff`),
    e.beginPath(),
    e.arc(t / 2, n / 2, t / 2, 0, Math.PI * 2),
    e.fill(),
    (e.strokeStyle = `#1a8a46`),
    (e.lineWidth = 8),
    e.beginPath(),
    e.arc(t / 2, n / 2, t / 2 - 6, 0, Math.PI * 2),
    e.stroke(),
    (e.fillStyle = `#1a8a46`),
    e.beginPath(),
    e.arc(t / 2, n / 2 - 14, 22, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#ffffff`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.font = `800 22px "Helvetica Neue",Arial,sans-serif`),
    e.fillText(`BUS`, t / 2, n / 2 - 13),
    (e.fillStyle = `#1a1a1a`),
    (e.font = WZ(r, 17, 800)),
    GZ(e, L(`streets.bus.operator`), t / 2, n / 2 + 22, t * 0.7),
    (e.font = WZ(r, 11, 700)),
    GZ(e, L(`streets.bus.stop-suffix`), t / 2, n / 2 + 40, t * 0.5));
}
function SMe(e, t, n, r) {
  ((e.fillStyle = `#ffffff`),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = RZ.blue),
    e.fillRect(3, 3, t - 6, n - 6),
    (e.fillStyle = `#ffffff`),
    e.beginPath(),
    e.moveTo(10, n / 2 - 11),
    e.lineTo(t - 34, n / 2 - 11),
    e.lineTo(t - 34, n / 2 - 22),
    e.lineTo(t - 8, n / 2),
    e.lineTo(t - 34, n / 2 + 22),
    e.lineTo(t - 34, n / 2 + 11),
    e.lineTo(10, n / 2 + 11),
    e.closePath(),
    e.fill(),
    (e.fillStyle = RZ.blue),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.font = WZ(r, 16, 800)),
    GZ(
      e,
      UZ(`common.safety.ippo-tsuko`, `一方通行`),
      (t - 30) / 2 + 4,
      n / 2 + 1,
      t - 52,
    ));
}
function QZ(e, t, n, r, i, a, o, s = !1) {
  if (
    ((e.fillStyle = i),
    e.fillRect(0, 0, t, n),
    (e.strokeStyle = a),
    (e.lineWidth = 3),
    e.strokeRect(3, 3, t - 6, n - 6),
    (e.fillStyle = a),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    s && [...r].length === 3)
  ) {
    let i = [...r];
    ((e.font = WZ(o, n * 0.36, 800)),
      GZ(e, i[0] + i[1], t / 2, n * 0.32, t - 10),
      GZ(e, i[2], t / 2, n * 0.7, t - 10));
    return;
  }
  ((e.font = WZ(o, n * 0.58, 800)), GZ(e, r, t / 2, n / 2 + 1, t - 12));
}
function CMe(e, t, n, r) {
  ((e.fillStyle = `#fbfbf8`),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = `#1a8a46`),
    e.fillRect(0, 0, t, 16),
    (e.fillStyle = `#ffffff`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.font = WZ(r, 10, 800)),
    GZ(e, L(`streets.bus.timetable`), t / 2, 8.5, t - 8),
    (e.fillStyle = `#1a1a1a`),
    (e.font = WZ(r, 7, 700)),
    [
      L(`streets.bus.weekday`),
      L(`streets.bus.saturday`),
      L(`streets.bus.holiday`),
    ].forEach((t, n) => GZ(e, t, 16 + n * 32, 23, 28)),
    (e.font = `600 6px "Helvetica Neue",Arial,sans-serif`));
  let i = qZ(5);
  for (let t = 0; t < 14; t++) {
    let n = 32 + t * 6.6;
    ((e.fillStyle = `#1a1a1a`), e.fillText(String(6 + t), 4, n));
    for (let t = 0; t < 3; t++) {
      let r = ``;
      for (let e = 0; e < 3; e++)
        i() < 0.75 &&
          (r += `${String(Math.floor(i() * 6) * 10 + Math.floor(i() * 10)).padStart(2, `0`)} `);
      e.fillText(r, 18 + t * 32, n);
    }
  }
}
function $Z(e, t, n, r, i) {
  ((e.fillStyle = `#101214`), e.fillRect(0, 0, t, n));
  let a = e.createRadialGradient(t / 2, n / 2, 2, t / 2, n / 2, t / 2);
  (a.addColorStop(0, i),
    a.addColorStop(0.55, r),
    a.addColorStop(1, r),
    (e.fillStyle = a),
    e.beginPath(),
    e.arc(t / 2, n / 2, t / 2 - 1, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `rgba(0,0,0,0.16)`));
  for (let r = 4; r < n; r += 5)
    for (let n = 4 + ((r / 5) % 2) * 2.5; n < t; n += 5)
      e.fillRect(n, r, 1.4, 1.4);
}
