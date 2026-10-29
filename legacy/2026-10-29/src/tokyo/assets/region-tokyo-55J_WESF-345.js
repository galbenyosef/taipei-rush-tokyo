// tokyo/assets/region-tokyo-55J_WESF 345 — fillrect
// Lines 124772-125092 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function VY(e, t, n, r, i) {
  let a = new ie(
    r === `gates` ? 11 : r === `tickets` ? 12 : r === `shop` ? 13 : 14,
  );
  ((e.fillStyle = `#b9bcb8`),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = `#e9e9e2`),
    e.fillRect(0, 0, t, 14),
    (e.fillStyle = `#ffffff`));
  for (let n = 6; n < t; n += 40) e.fillRect(n, 4, 26, 5);
  if (
    ((e.fillStyle = `#8e918d`),
    e.fillRect(0, n - 22, t, 22),
    (e.fillStyle = `rgba(255,255,255,0.18)`),
    e.fillRect(0, n - 22, t, 3),
    r === `gates`)
  ) {
    ((e.fillStyle = `#16181a`),
      e.fillRect(8, 20, t - 16, 30),
      (e.font = `700 8px ${i}`),
      (e.textBaseline = `middle`));
    for (let n = 0; n < 3; n++)
      ((e.fillStyle = n === 0 ? `#ffb21a` : `#7be36c`),
        e.fillText(HY(`transit.conc.departures`, `発車`), 12, 26 + n * 9),
        (e.fillStyle = `#ffb21a`),
        e.fillRect(40, 23 + n * 9, 14 + a.next() * 30, 5),
        e.fillRect(t - 34, 23 + n * 9, 22, 5));
    ((e.fillStyle = `#1d2a33`),
      e.fillRect(t / 2 - 26, 56, 52, 14),
      (e.fillStyle = `#ffffff`),
      (e.font = `700 10px ${i}`),
      (e.textAlign = `center`),
      e.fillText(HY(`transit.conc.gates`, `改札`), t / 2, 63),
      (e.textAlign = `left`));
    for (let t = 0; t < 4; t++) {
      let r = 4 + t * 32;
      ((e.fillStyle = `#e4e6e6`),
        e.fillRect(r, n - 64, 12, 42),
        (e.fillStyle = `#9ea3a4`),
        e.fillRect(r, n - 64, 12, 3),
        (e.fillStyle = `#2a6fd0`),
        e.fillRect(r + 2, n - 60, 8, 5),
        (e.fillStyle = t % 2 ? `#3ad06a` : `#e23a2a`),
        e.fillRect(r + 3, n - 50, 3, 3),
        a.next() < 0.6 &&
          ((e.fillStyle = `#3c4044`),
          e.beginPath(),
          e.arc(r + 22, n - 82, 5, 0, Math.PI * 2),
          e.fill(),
          e.fillRect(r + 16, n - 77, 12, 55)));
    }
  } else if (r === `tickets`) {
    ((e.fillStyle = `#1d3d2c`),
      e.fillRect(8, 20, t - 16, 14),
      (e.fillStyle = `#ffffff`),
      (e.font = `700 10px ${i}`),
      (e.textBaseline = `middle`),
      (e.textAlign = `center`),
      e.fillText(HY(`transit.conc.tickets`, `きっぷうりば`), t / 2, 27),
      (e.textAlign = `left`),
      (e.fillStyle = `#f6f6f0`),
      e.fillRect(8, 38, t - 16, 44));
    for (let n = 0; n < 7; n++)
      ((e.strokeStyle = [
        `#80C241`,
        `#00B2E5`,
        `#F15A22`,
        `#FFD400`,
        `#FF9500`,
        `#F62E36`,
        `#B5B5AC`,
      ][n]),
        (e.lineWidth = 2),
        e.beginPath(),
        e.moveTo(10 + a.next() * 30, 40 + a.next() * 40),
        e.lineTo(t / 2 + (a.next() - 0.5) * 40, 42 + a.next() * 36),
        e.lineTo(t - 10 - a.next() * 30, 40 + a.next() * 40),
        e.stroke());
    for (let t = 0; t < 3; t++) {
      let r = 6 + t * 41;
      ((e.fillStyle = `#d6d9d9`),
        e.fillRect(r, n - 82, 36, 60),
        (e.fillStyle = `#1f3448`),
        e.fillRect(r + 4, n - 76, 28, 20),
        (e.fillStyle = `#5aa0e0`),
        e.fillRect(r + 6, n - 74, 24, 3),
        (e.fillStyle = `#5c6062`),
        e.fillRect(r + 6, n - 50, 10, 3),
        e.fillRect(r + 20, n - 50, 10, 3),
        (e.fillStyle = `#2a6fd0`),
        e.fillRect(r + 12, n - 42, 12, 6));
    }
  } else if (r === `shop`) {
    ((e.fillStyle = `#f4f2ea`), e.fillRect(0, 16, t, n - 38));
    for (let n = 0; n < 6; n++) {
      let r = 24 + n * 18;
      ((e.fillStyle = `#9a9a96`), e.fillRect(0, r + 13, t, 2));
      for (let n = 2; n < t - 4; n += 5 + a.next() * 4)
        ((e.fillStyle = [
          `#d23a2e`,
          `#f0c020`,
          `#2f7fd0`,
          `#3aa056`,
          `#f4f4f4`,
          `#e07a20`,
          `#7a4ad0`,
        ][Math.floor(a.next() * 7)]),
          e.fillRect(n, r + 2 + a.next() * 3, 3 + a.next() * 2, 10));
    }
    ((e.fillStyle = `#5a6066`),
      e.fillRect(t * 0.55, n - 50, t * 0.45, 28),
      (e.fillStyle = `#e8e8e2`),
      e.fillRect(t * 0.55, n - 52, t * 0.45, 3));
  } else {
    ((e.fillStyle = `#d6d6d0`),
      e.fillRect(0, 16, t, n - 38),
      (e.fillStyle = `rgba(120,120,116,0.35)`));
    for (let r = 0; r < t; r += 8) e.fillRect(r, 16, 1, n - 38);
    for (let r = 16; r < n - 22; r += 8) e.fillRect(0, r, t, 1);
    for (let t = 0; t < 2; t++) {
      let n = 14 + t * 58;
      ((e.fillStyle = `#3a3e40`),
        e.fillRect(n - 2, 60, 44, 58),
        (e.fillStyle = [`#e8607a`, `#3a8ad0`, `#f0c84a`, `#5ab070`][
          Math.floor(a.next() * 4)
        ]),
        e.fillRect(n, 62, 40, 54),
        (e.fillStyle = `rgba(255,255,255,0.6)`),
        e.fillRect(n + 4, 66, 22, 8));
    }
    ((e.fillStyle = `#1d2a33`),
      e.fillRect(10, 22, t - 20, 14),
      (e.fillStyle = `#ffd400`),
      e.fillRect(12, 24, 10, 10),
      (e.fillStyle = `#ffffff`),
      (e.font = `700 9px ${i}`),
      (e.textBaseline = `middle`),
      e.fillText(HY(`transit.conc.platforms`, `のりば`), 28, 29));
    for (let t = 0; t < 3; t++) {
      if (a.next() < 0.4) continue;
      let r = 12 + t * 40 + a.next() * 10;
      ((e.fillStyle = `#3c4044`),
        e.beginPath(),
        e.arc(r, n - 80, 5, 0, Math.PI * 2),
        e.fill(),
        e.fillRect(r - 6, n - 75, 12, 53));
    }
  }
}
function FAe(e, t, n, r) {
  ((e.fillStyle = `#dfe2e2`),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = `#1d6a3c`),
    e.fillRect(0, 0, t, 14),
    (e.fillStyle = `#ffffff`),
    (e.font = `700 8px ${r}`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    e.fillText(HY(`transit.conc.ticket`, `きっぷ`), t / 2, 7),
    (e.fillStyle = `#1b2b3b`),
    e.fillRect(6, 20, t - 12, 38),
    (e.fillStyle = `#4c8ed0`));
  for (let t = 0; t < 4; t++)
    e.fillRect(10 + (t % 2) * 23, 26 + Math.floor(t / 2) * 15, 19, 11);
  ((e.fillStyle = `#5c6062`),
    e.fillRect(8, 64, 18, 4),
    e.fillRect(36, 64, 20, 4),
    (e.fillStyle = `#2a6fd0`),
    e.fillRect(22, 74, 20, 10),
    (e.fillStyle = `#ffffff`),
    (e.font = `700 6px ${r}`),
    e.fillText(HY(`transit.conc.charge`, `チャージ`), t / 2, 79),
    (e.fillStyle = `#3a3e40`),
    e.fillRect(14, 92, t - 28, 8),
    (e.fillStyle = `#b8bcbc`),
    e.fillRect(0, n - 6, t, 6),
    (e.textAlign = `left`));
}
function IAe(e, t, n, r) {
  let i = new ie(4711);
  ((e.fillStyle = `#ffffff`),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = `#1d6a3c`),
    e.fillRect(0, 0, t, 18),
    (e.fillStyle = `#ffffff`),
    (e.font = `700 12px ${r}`),
    (e.textBaseline = `middle`),
    e.fillText(HY(`transit.conc.tickets`, `きっぷうりば`), 8, 9),
    (e.textAlign = `right`),
    (e.font = `600 10px ${r}`),
    e.fillText(HY(`transit.conc.fare`, `運賃表`), t - 8, 9),
    (e.textAlign = `left`));
  let a = [`#80C241`, `#00B2E5`, `#F15A22`, `#FFD400`, `#FF9500`, `#F62E36`];
  for (let n = 0; n < a.length; n++) {
    let r = 28 + n * 11 + i.next() * 4;
    ((e.strokeStyle = a[n]),
      (e.lineWidth = 3),
      e.beginPath(),
      e.moveTo(8, r),
      e.lineTo(t * (0.3 + i.next() * 0.4), r + (i.next() - 0.5) * 20),
      e.lineTo(t - 8, r + (i.next() - 0.5) * 16),
      e.stroke(),
      (e.fillStyle = `#333`));
    for (let n = 16; n < t - 10; n += 22 + i.next() * 10)
      e.fillRect(n, r - 6 + (i.next() - 0.5) * 6, 9, 3);
  }
  ((e.fillStyle = `#e23a2a`),
    e.beginPath(),
    e.arc(t * 0.5, n * 0.62, 4, 0, Math.PI * 2),
    e.fill());
}
function LAe(e, t, n) {
  ((e.fillStyle = `#8e9a9e`), e.fillRect(0, 0, t, n));
  let r = e.createLinearGradient(0, 0, 0, n);
  (r.addColorStop(0, `rgba(255,255,255,0.35)`),
    r.addColorStop(1, `rgba(255,255,255,0)`),
    (e.fillStyle = r),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = `#2a3034`));
  for (let r = 0; r <= t; r += t / 8) e.fillRect(r - 1.5, 0, 3, n);
  for (let r = 0; r <= n; r += n / 3) e.fillRect(0, r - 1.5, t, 3);
  e.fillRect(0, n - 6, t, 6);
}
function RAe(e, t, n, r) {
  ((e.fillStyle = `#ffffff`),
    e.fillRect(0, 0, t, n),
    (e.strokeStyle = `#111`),
    (e.lineWidth = 5),
    e.strokeRect(2.5, 2.5, t - 5, n - 5),
    (e.fillStyle = `#111`),
    (e.font = `900 40px ${r}`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    e.fillText(`11`, t / 2, n / 2 + 2));
}
function zAe(e, t, n) {
  let r = new ie(5150);
  ((e.fillStyle = `#9fa2a0`),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = `#6e7270`),
    e.fillRect(0, 0, t, 16),
    (e.fillStyle = `#585c5a`),
    e.fillRect(0, 15, t, 2));
  for (let r = 20; r < n - 10; r += 6)
    ((e.fillStyle = `#8b8f8d`),
      e.fillRect(4, r, t - 8, 1),
      (e.fillStyle = `#b3b6b4`),
      e.fillRect(4, r + 1, t - 8, 1));
  ((e.fillStyle = `#5e6260`),
    e.fillRect(0, 16, 4, n),
    e.fillRect(t - 4, 16, 4, n),
    e.fillRect(4, n - 10, t - 8, 6));
  let i = e.createLinearGradient(0, n - 50, 0, n);
  (i.addColorStop(0, `rgba(60,58,52,0)`),
    i.addColorStop(1, `rgba(60,58,52,0.4)`),
    (e.fillStyle = i),
    e.fillRect(0, n - 50, t, 50),
    (e.fillStyle = `rgba(120,80,48,0.25)`),
    e.fillRect(3, 20, 3, n - 30),
    e.fillRect(t - 6, 20, 3, n - 30),
    (e.strokeStyle = [`#2a4fa0`, `#a02a4a`, `#2a2a2a`][
      Math.floor(r.next() * 3)
    ]),
    (e.lineWidth = 3),
    e.beginPath(),
    e.moveTo(t * 0.3, n * 0.7));
  for (let r = 0; r < 6; r++)
    e.lineTo(t * (0.3 + r * 0.07), n * (0.62 + (r % 2) * 0.1));
  e.stroke();
}
function BAe(e, t, n) {
  let r = new ie(3301);
  for (let i = 0; i < n; i += 8)
    for (let n = 0; n < t; n += 8) {
      let t = 222 + r.next() * 16;
      ((e.fillStyle = `rgb(${t | 0},${(t - 4) | 0},${(t - 12) | 0})`),
        e.fillRect(n + 0.6, i + 0.6, 6.8, 6.8));
    }
  for (let i = 0; i < 10; i++)
    ((e.fillStyle = `rgba(90,70,50,${0.05 + r.next() * 0.08})`),
      e.fillRect(
        r.next() * t,
        0,
        2 + r.next() * 5,
        n * (0.2 + r.next() * 0.5),
      ));
  ((e.fillStyle = `#5a5e60`),
    e.fillRect(t / 2 - 22, n * 0.28, 44, 26),
    (e.fillStyle = `#7d8284`));
  for (let r = n * 0.28 + 3; r < n * 0.28 + 24; r += 4)
    e.fillRect(t / 2 - 20, r, 40, 1.5);
  ((e.fillStyle = `#8e9294`),
    e.fillRect(0, n - 16, t, 16),
    (e.fillStyle = `#6a6e70`),
    e.fillRect(0, n - 16, t, 2));
}
function HY(e, t = ``) {
  try {
    return yo(e).ja || t;
  } catch {
    return t;
  }
}
var VAe = (e) => e.replace(/^[A-Z]+/, ``),
  HAe = (e) => e.replace(/[0-9]+$/, ``);
function UY(e) {
  return e.line === `JB`
    ? e.id === `jb-akihabara`
      ? [`6`, `5`]
      : [`2`, `1`]
    : e.line === `JC`
      ? [`1`, `2`]
      : e.id === `jy-tokyo`
        ? [`4`, `5`]
        : [`2`, `3`];
}
var WY = {
  JY: { lo: `JY28`, hi: `JY07` },
  JB: { lo: `JB17`, hi: `JB20` },
  JC: { lo: `JC04` },
};
