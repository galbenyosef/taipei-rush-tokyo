// tokyo/assets/region-tokyo-BcM3fReU 165 — fillstyle
// Lines 69522-69858 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function Vz(e, t, n, r) {
  ((e.fillStyle = `#f6f6f2`),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = `#1f7a3a`),
    e.fillRect(0, 0, t, 34),
    (e.fillStyle = `#ffffff`),
    (e.font = Cz(r, 24, 900)),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    wz(e, Sz(`culture.gomi.title`), t / 2, 18, t - 16));
  let i = [
    [
      Sz(`culture.gomi.weekly`, {
        item: Sz(`common.facility.moeru`),
        day: `${ta[1]}・${ta[4]}`,
      }),
      `#d0101a`,
      ``,
    ],
    [
      Sz(`culture.gomi.weekly`, {
        item: Sz(`common.facility.shigen`),
        day: ta[3],
      }),
      `#1d4aa8`,
      ``,
    ],
    [
      Sz(`culture.gomi.biweekly`, {
        item: Sz(`common.facility.moenai`),
        day: ta[6],
      }),
      `#2a2a2a`,
      ``,
    ],
  ];
  ((e.textAlign = `left`),
    i.forEach(([n, i], a) => {
      let o = 50 + a * 22;
      ((e.fillStyle = i),
        e.fillRect(10, o - 7, 10, 14),
        (e.fillStyle = `#1a1a1a`),
        (e.font = Cz(r, 16, 700)),
        Hz(e, n, 26, o, t - 36));
    }),
    (e.fillStyle = `#444`),
    (e.font = Cz(r, 12, 700)),
    (e.textAlign = `center`),
    wz(e, Sz(`culture.gomi.office`, { ward: r.ward }), t / 2, n - 10, t - 20));
}
function Hz(e, t, n, r, i) {
  let a = e.measureText(t).width;
  if (a <= i || a === 0) return e.fillText(t, n, r);
  (e.save(),
    e.translate(n, r),
    e.scale(i / a, 1),
    e.fillText(t, 0, 0),
    e.restore());
}
function Uz(e, t, n, r) {
  ((e.fillStyle = `#8a8a84`),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = `#ffe600`),
    e.fillRect(3, 3, t - 6, n / 2 - 5),
    (e.fillStyle = `#ffffff`),
    e.fillRect(3, n / 2 + 2, t - 6, n / 2 - 5),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.fillStyle = `#c00010`),
    (e.font = Cz(r, 15, 900)),
    Wz(e, Sz(`culture.gomi.net`), t / 2, n / 4, t - 16, 18),
    (e.fillStyle = `#1a1a1a`),
    (e.font = Cz(r, 14, 700)),
    Wz(e, `${Sz(`culture.gomi.deadline`)}`, t / 2, (n * 3) / 4 - 8, t - 16, 17),
    (e.font = Cz(r, 12, 700)),
    wz(e, Sz(`culture.gomi.sorted`), t / 2, n - 12, t - 20));
}
function Wz(e, t, n, r, i, a) {
  if (e.measureText(t).width <= i) return wz(e, t, n, r, i);
  let o = [...t],
    s = Math.ceil(o.length / 2);
  (wz(e, o.slice(0, s).join(``), n, r - a / 2, i),
    wz(e, o.slice(s).join(``), n, r + a / 2, i));
}
function Gz(e, t, n, r) {
  let i = Ez(r ? 71 : 72);
  ((e.fillStyle = `#9aa0a4`), e.fillRect(0, 0, t, n));
  for (let r = 0; r < 26; r++) {
    let r = i() * t,
      a = i() * n,
      o = 14 + i() * 14,
      s = i();
    ((e.fillStyle = s < 0.6 ? `#e8ecee` : s < 0.85 ? `#d8dee4` : `#f2e8b8`),
      e.beginPath(),
      e.ellipse(r, a, o, o * 0.8, i() * 3, 0, Math.PI * 2),
      e.fill(),
      (e.fillStyle = `rgba(${80 + i() * 120},${60 + i() * 100},${40 + i() * 80},0.25)`),
      e.beginPath(),
      e.ellipse(r + 3, a + 2, o * 0.5, o * 0.35, 0, 0, Math.PI * 2),
      e.fill(),
      (e.fillStyle = `rgba(255,255,255,0.6)`),
      e.fillRect(r - o * 0.4, a - o * 0.5, o * 0.5, 2),
      (e.fillStyle = `#f4f4f2`),
      e.fillRect(r - 2, a - o * 0.8, 4, 5));
  }
  r && Kz(e, t, n, `#1f5ac8`, 9);
}
function Kz(e, t, n, r, i) {
  ((e.strokeStyle = r), (e.lineWidth = 1.6), (e.globalAlpha = 0.9));
  for (let r = -n; r < t + n; r += i)
    (e.beginPath(),
      e.moveTo(r, 0),
      e.lineTo(r + n, n),
      e.stroke(),
      e.beginPath(),
      e.moveTo(r + n, 0),
      e.lineTo(r, n),
      e.stroke());
  e.globalAlpha = 1;
}
function qz(e, t, n, r, i) {
  ((e.fillStyle = `#1a2a6a`),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = r),
    (e.globalAlpha = 0.6),
    e.fillRect(0, 0, t, n),
    (e.globalAlpha = 1),
    Kz(e, t, n, `#0a1440`, i));
}
function Jz(e, t, n, r) {
  ((e.fillStyle = `#ffffff`),
    e.fillRect(0, 0, t, n),
    (e.strokeStyle = `#1d4aa8`),
    (e.lineWidth = 6),
    e.strokeRect(4, 4, t - 8, n - 8),
    (e.fillStyle = `#1d4aa8`),
    (e.font = Cz(r, 34, 900)),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    wz(e, Sz(`common.safety.hokoten`), t / 2, n * 0.36, t - 24),
    (e.fillStyle = `#c00010`),
    (e.font = Cz(r, 20, 900)),
    wz(e, Sz(`common.safety.sharyo-tsukodome`), t / 2, n * 0.7, t - 24),
    (e.fillStyle = `#1a1a1a`),
    (e.font = Cz(r, 14, 700)),
    wz(e, Sz(`culture.hokoten.days`), t / 2, n - 13, t - 24));
}
function Yz(e, t, n, r, i, a) {
  ((e.fillStyle = r),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = `rgba(0,0,0,0.28)`),
    kz(e, t * 0.32, 5, t * 0.36, 8, 3),
    e.fill());
  for (let r = 6; r < t; r += 12) e.fillRect(r, 18, 2, n - 22);
  ((e.fillStyle = i),
    (e.font = Cz(a, 13, 900)),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    wz(e, Wa(`YUHI`)?.ja ?? `YUHI`, t / 2, n * 0.62, t - 10));
}
function Xz(e, t, n, r, i, a, o) {
  ((e.fillStyle = i),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = `rgba(0,0,0,0.1)`),
    e.fillRect(0, n - 6, t, 6));
  for (let n = 0; n < t; n += 16)
    ((e.fillStyle = (n / 16) % 2 ? `#ffffff` : `#d01a1a`),
      e.fillRect(n, 0, 16, 6));
  ((e.fillStyle = a),
    (e.font = Cz(o, Math.round(n * 0.62), 900)),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    wz(e, r, t / 2, n / 2 + 4, t - 24));
}
function Zz(e, t, n, r, i) {
  ((e.fillStyle = `#1c2a52`),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = `#0a0a10`));
  for (let r = 1; r < 4; r++) e.fillRect((r * t) / 4 - 1, 10, 2, n);
  ((e.fillStyle = `#f4f0e6`),
    (e.font = Cz(i, Math.round(n * 0.6), 900, !0)),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`));
  let a = [...r];
  a.forEach((r, i) => e.fillText(r, ((i + 0.5) * t) / a.length, n * 0.55));
}
function Qz(e, t, n, i) {
  (Oz(e, t, n, `#3a2a1a`),
    (e.fillStyle = `#16201a`),
    e.fillRect(6, 6, t - 12, n - 12),
    (e.textBaseline = `middle`),
    [
      [`trade.izakaya.item.nama`, 580],
      [`trade.yakitori.item.negima`, 220],
      [`trade.tachinomi.item.nikomi`, 400],
      [`trade.tachinomi.item.lemonsour`, 350],
      [`trade.izakaya.item.edamame`, 380],
    ].forEach(([n, a], o) => {
      let s = 22 + o * 21;
      ((e.fillStyle = o === 0 ? `#ffe86a` : `#f4f4ee`),
        (e.font = Cz(i, 13, 700)),
        (e.textAlign = `left`),
        Hz(e, Sz(n), 12, s, t * 0.58),
        (e.textAlign = `right`),
        (e.fillStyle = `#ff9a8a`),
        e.fillText(r.on ? r.t(`${a}円`, `${a}円`) : `${a}円`, t - 12, s));
    }));
}
function $z(e, t, n, r) {
  ((e.fillStyle = `#f8f8f2`),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = `#d0101a`),
    e.fillRect(0, 0, t, 8),
    e.fillRect(0, n - 8, t, 8),
    (e.fillStyle = `#1d2a8a`),
    (e.font = Cz(r, 64, 900)),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    wz(e, Sz(`culture.market.gate`), t * 0.36, n / 2 + 2, t * 0.5),
    (e.fillStyle = `#d0101a`),
    (e.font = Cz(r, 22, 900)),
    wz(e, Sz(`culture.market.gate-sub`), t * 0.8, n / 2 + 2, t * 0.34));
}
function eB(e, t, n, r) {
  ((e.fillStyle = `#f6f0e0`),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = `#5a1a8a`),
    e.fillRect(0, 0, t, 10),
    e.fillRect(0, n - 10, t, 10),
    (e.fillStyle = `#1a1a1a`),
    (e.font = Cz(r, 46, 900, !0)),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    wz(e, Sz(`culture.matsuri.reitaisai`), t / 2, n / 2 + 2, t - 24));
}
function tB(e, t, n) {
  ((e.fillStyle = `#3a3c40`), e.fillRect(0, 0, t, n));
  for (let r = 0; r < t; r += 8)
    ((e.fillStyle = `rgba(255,255,255,0.08)`),
      e.fillRect(r, 0, 3, n),
      (e.fillStyle = `rgba(0,0,0,0.25)`),
      e.fillRect(r + 6, 0, 2, n));
  for (let r = 0; r < n; r += 12)
    ((e.fillStyle = `rgba(0,0,0,0.2)`), e.fillRect(0, r, t, 2));
}
function nB(e, t, n, r, i, a) {
  ((e.fillStyle = `#d42018`),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = `rgba(0,0,0,0.12)`));
  for (let r = 3; r < n; r += 5) e.fillRect(0, r, t, 1);
  let o = e.createLinearGradient(0, 0, t, 0);
  (o.addColorStop(0, `rgba(0,0,0,0.3)`),
    o.addColorStop(0.5, `rgba(255,230,200,0.14)`),
    o.addColorStop(1, `rgba(0,0,0,0.3)`),
    (e.fillStyle = o),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = `#141414`),
    e.fillRect(0, 0, t, n * 0.17),
    e.fillRect(0, n * 0.83, t, n * 0.17),
    r &&
      ((e.fillStyle = `#111111`),
      (e.textAlign = `center`),
      (e.textBaseline = `middle`),
      a
        ? ((e.font = Cz(i, Math.round(n * 0.6), 900, !0)),
          wz(e, r, t / 2, n / 2 + 1, t * 0.3))
        : Tz(e, r, t * 0.4, n * 0.17, t * 0.2, n * 0.66, i, 900, !1, 40)));
}
function rB(e, t, n, r) {
  ((e.fillStyle = `#1f4a32`),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = `#ffffff`),
    (e.font = Cz(r, 15, 900)),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    wz(e, Sz(`culture.park.map`), t / 2, 12, t - 16));
  let i = t - 12,
    a = n - 30;
  ((e.fillStyle = `#efe9d6`),
    e.fillRect(6, 24, i, a),
    (e.fillStyle = `#9cc48a`),
    e.fillRect(6 + i * 0.3, 28, i * 0.66, a * 0.62),
    (e.fillStyle = `#7fb0d8`),
    e.beginPath(),
    e.ellipse(
      6 + i * 0.17,
      24 + a * 0.68,
      i * 0.14,
      a * 0.26,
      0,
      0,
      Math.PI * 2,
    ),
    e.fill(),
    (e.fillStyle = `#c8b89a`),
    e.fillRect(6 + i * 0.62, 30, i * 0.22, a * 0.2),
    (e.fillStyle = `#b8d0a0`),
    e.fillRect(6 + i * 0.33, 30, i * 0.22, a * 0.24),
    (e.strokeStyle = `#d8c49a`),
    (e.lineWidth = 4),
    e.beginPath(),
    e.moveTo(6 + i * 0.78, 24 + a * 0.95),
    e.lineTo(6 + i * 0.72, 24 + a * 0.3),
    e.lineTo(6 + i * 0.45, 24 + a * 0.3),
    e.moveTo(6 + i * 0.72, 24 + a * 0.55),
    e.lineTo(6 + i * 0.32, 24 + a * 0.55),
    e.stroke(),
    (e.fillStyle = `#d01a1a`),
    e.beginPath(),
    e.arc(6 + i * 0.74, 24 + a * 0.78, 5, 0, Math.PI * 2),
    e.fill(),
    (e.font = Cz(r, 11, 900)),
    (e.textAlign = `left`),
    wz(e, Sz(`culture.park.here`), 6 + i * 0.74 + 8, 24 + a * 0.78, i * 0.24));
}
function iB(e, t, n, r, i) {
  let a = Ez(i);
  ((e.fillStyle = r), e.fillRect(0, 0, t, n));
  for (let r = 0; r < 14; r++) {
    let r = a() * t,
      i = e.createLinearGradient(r - 8, 0, r + 8, 0);
    (i.addColorStop(0, `rgba(0,0,0,0)`),
      i.addColorStop(
        0.5,
        a() < 0.5 ? `rgba(0,0,0,0.22)` : `rgba(255,255,255,0.16)`,
      ),
      i.addColorStop(1, `rgba(0,0,0,0)`),
      (e.fillStyle = i),
      e.fillRect(r - 8, 0, 16, n));
  }
  ((e.strokeStyle = `rgba(235,225,200,0.85)`),
    (e.lineWidth = 1.5),
    e.beginPath(),
    e.moveTo(0, n * 0.3));
  for (let r = 0; r <= t; r += 16) e.lineTo(r, n * 0.3 + Math.sin(r * 0.2) * 2);
  (e.stroke(), (e.fillStyle = `rgba(0,0,0,0.25)`), e.fillRect(0, n - 5, t, 5));
}
