// tokyo/assets/region-tokyo-A7LxHjud 456 — math
// Lines 164583-164908 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function iBe(e, t) {
  (e.beginPath(),
    e.moveTo(0, 163),
    e.lineTo(0, 92),
    e.quadraticCurveTo(50, 62, 100, 92),
    e.lineTo(100, 163),
    e.closePath(),
    i5(e, J8, null),
    (e.strokeStyle = `#efe4c8`),
    (e.lineWidth = 0.9));
  for (let n = 0; n < 14; n++) {
    let r = 4 + n * 7 + c5(t, n) * 3,
      i = 92 - Math.sin((r / 100) * Math.PI) * 26;
    (e.beginPath(),
      e.moveTo(r, i + 2),
      e.quadraticCurveTo(
        r + 6,
        i - 14,
        r + 12 + c5(t, n + 20) * 6,
        i - 22 - c5(t, n + 30) * 12,
      ),
      e.stroke());
  }
}
function aBe(e, t, n) {
  (n === `moon`
    ? ((e.fillStyle = X8),
      e.fillRect(0, 0, 100, 100),
      o5(e, 50, 58, 31, `#fbf3dc`, `#c9b98a`, 1.4))
    : n === `geese`
      ? ((e.fillStyle = `#e7c25a`), e.fillRect(0, 0, 100, 100), l5(e, 0, 30))
      : l5(e, 0, t === 31 ? 44 : 30),
    iBe(e, t));
}
function m5(e, t, n, r) {
  (e.save(),
    e.translate(t, n),
    e.scale(r, r),
    r5(
      e,
      [
        -14, 0, -4, -3, 2, -14, 6, -3, 14, -2, 18, -4, 16, 0, 6, 3, 0, 10, -4,
        3,
      ],
    ),
    i5(e, J8, null),
    e.restore());
}
function h5(e, t, n, r, i, a) {
  for (let o = 0; o < 18; o++) {
    let s = (o / 18) * Math.PI * 2;
    (a5(
      e,
      t + Math.cos(s) * r * 0.55,
      n + Math.sin(s) * r * 0.55,
      r * 0.48,
      r * 0.14,
      s,
    ),
      i5(e, i, a, 0.6));
  }
  o5(e, t, n, r * 0.3, i, a, 0.8);
}
function oBe(e, t, n) {
  for (let [t, n, r] of [
    [18, 150, 1],
    [84, 146, -1],
    [50, 160, 0],
  ])
    (e.save(),
      e.translate(t, n),
      e.rotate(r * 0.5),
      r5(e, [0, 0, -9, -8, -6, -18, 0, -12, 6, -20, 9, -8]),
      i5(e, $8, J8, 1),
      e.restore());
  n
    ? (h5(e, 22, 34, 15, e5, `#9a6a10`),
      h5(e, 80, 26, 13, `#f8f2e0`, `#a99b7a`))
    : (h5(e, t === 35 ? 64 : 34, 46, 20, e5, `#9a6a10`),
      h5(e, t === 35 ? 28 : 70, 98, 17, `#f8f2e0`, `#a99b7a`),
      h5(e, 50, 140, 12, X8, Z8));
}
function sBe(e) {
  (e.save(),
    e.translate(50, 104),
    r5(e, [-12, 22, 12, 22, 7, 10, -7, 10]),
    i5(e, Z8, J8, 1.4),
    e.beginPath(),
    e.moveTo(-32, -6),
    e.quadraticCurveTo(0, 30, 32, -6),
    e.closePath(),
    i5(e, X8, J8, 1.6),
    a5(e, 0, -6, 32, 9),
    i5(e, `#e04a36`, J8, 1.6),
    a5(e, 0, -6, 26, 6.5),
    i5(e, null, e5, 1.4),
    (e.fillStyle = e5),
    (e.font = `900 15px ${yr}`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    e.fillText(`寿`, 0, 6),
    e.restore());
}
function cBe(e, t, n, r, i, a) {
  (e.save(), e.translate(t, n), e.rotate(a), e.beginPath());
  for (let t = 0; t <= 14; t++) {
    let n = -Math.PI / 2 + (t / 14) * Math.PI * 1.6 - Math.PI * 0.3,
      i = t % 2 ? r * 0.42 : r * (t === 7 ? 1 : 0.82),
      a = Math.cos(n) * i,
      o = Math.sin(n) * i;
    t === 0 ? e.moveTo(a, o) : e.lineTo(a, o);
  }
  (e.lineTo(0, r * 0.2),
    e.closePath(),
    i5(e, i, J8, 0.9),
    s5(e, [0, r * 0.2, 0, r * 0.5, 1, r * 0.75], J8, 0.9),
    e.restore());
}
function lBe(e, t, n) {
  (s5(e, [100, 20, 60, 30, 40, 10], J8, 2.5),
    s5(e, [100, 70, 70, 76, 44, 60], J8, 2));
  let r = n ? 7 : 13;
  for (let i = 0; i < r; i++)
    cBe(
      e,
      10 + c5(t, i) * 80,
      10 + c5(t, i + 13) * (n ? 60 : 140),
      9 + c5(t, i + 26) * 5,
      i % 3 == 2 ? e5 : i % 3 ? X8 : `#e2602a`,
      c5(t, i + 39) * 6,
    );
}
function uBe(e) {
  (e.save(),
    e.translate(48, 116),
    a5(e, 0, 0, 24, 12),
    i5(e, `#a0612c`, J8, 1.5));
  for (let t = 0; t < 6; t++)
    o5(e, -14 + t * 5.5, -3 + (t % 2) * 4, 1.5, `#f6e7c4`, null);
  for (let t of [-16, -9, 12, 18])
    ((e.fillStyle = `#7c4720`),
      e.fillRect(t - 1.8, 8, 3.6, 22),
      (e.fillStyle = J8),
      e.fillRect(t - 1.8, 28, 3.6, 3));
  (r5(e, [16, -6, 22, -24, 30, -26, 26, -4]),
    i5(e, `#a0612c`, J8, 1.4),
    a5(e, 22, -30, 8, 5, 0.4),
    i5(e, `#a0612c`, J8, 1.4),
    o5(e, 19, -31, 1.3, J8, null),
    r5(e, [14, -30, 16, -27, 12, -28]),
    i5(e, J8, null),
    s5(e, [26, -34, 30, -46, 24, -54], `#5a3416`, 2),
    s5(e, [28, -42, 34, -46, 36, -52], `#5a3416`, 1.6),
    s5(e, [30, -33, 38, -40, 40, -48], `#5a3416`, 1.6),
    a5(e, 30, -33, 4, 2, 0.6),
    i5(e, `#a0612c`, J8, 0.8),
    s5(e, [-24, -2, -30, -6, -28, 2], J8, 1.4),
    e.restore());
}
function g5(e, t, n = 7) {
  for (let r = 0; r < n; r++) {
    let i = 6 + r * (90 / (n - 1)) + c5(t, r) * 4,
      a = 80 + c5(t, r + 9) * 50;
    s5(e, [i, 0, i + 10, a * 0.5, i - 4 + c5(t, r + 18) * 8, a], Q8, 1.6);
    for (let n = 1; n < 8; n++) {
      let o = n / 8;
      (a5(
        e,
        i + Math.sin(o * Math.PI) * 6 + (c5(t, r + 18) * 8 - 4) * o * o + 2,
        o * a,
        3.4,
        1.3,
        1.2,
      ),
        i5(e, `#4d9a3e`, null));
    }
  }
}
function _5(e) {
  (e.beginPath(),
    e.moveTo(0, 140),
    e.quadraticCurveTo(40, 128, 100, 146),
    e.lineTo(100, 163),
    e.lineTo(0, 163),
    e.closePath(),
    i5(e, J8, null),
    (e.strokeStyle = `#6f86a8`),
    (e.lineWidth = 1));
  for (let t = 0; t < 4; t++)
    s5(e, [6 + t * 22, 150, 16 + t * 22, 144, 26 + t * 22, 152], `#6f86a8`, 1);
}
function dBe(e) {
  (g5(e, 40, 5),
    _5(e),
    e.save(),
    e.translate(36, 70),
    e.rotate(-0.35),
    e.beginPath(),
    e.moveTo(-26, 6),
    e.quadraticCurveTo(0, -24, 26, 6));
  for (let t = 26; t > -26; t -= 8.66)
    e.quadraticCurveTo(t - 4.3, 10, t - 8.66, 6);
  (e.closePath(), i5(e, e5, J8, 1.4));
  for (let t = -2; t <= 2; t++)
    s5(e, [0, -9, t * 6, -2, t * 11, 7], `#9a6a10`, 0.8);
  (s5(e, [0, 6, 0, 24, 0, 40], J8, 1.6),
    e.restore(),
    r5(e, [40, 86, 58, 84, 68, 132, 30, 134]),
    i5(e, `#2a2a3a`, J8, 1.4),
    r5(e, [44, 96, 54, 96, 60, 130, 40, 130]),
    i5(e, X8, null),
    o5(e, 49, 80, 6.5, `#f1d9b5`, J8, 1.2),
    (e.fillStyle = J8),
    e.fillRect(43, 72, 12, 4),
    e.save(),
    e.translate(76, 128),
    e.rotate(-0.6),
    a5(e, 0, 0, 7, 4.5),
    i5(e, `#5aa03a`, J8, 1),
    s5(e, [-6, 2, -12, 6, -16, 4], `#5aa03a`, 2),
    s5(e, [5, 2, 9, 7, 12, 6], `#5aa03a`, 2),
    o5(e, 4, -3, 1.4, J8, null),
    e.restore(),
    (e.strokeStyle = `#3a4a6a`),
    (e.lineWidth = 0.6));
  for (let t = 0; t < 16; t++) {
    let n = 6 + c5(40, t) * 88,
      r = 8 + c5(40, t + 16) * 120;
    (e.beginPath(), e.moveTo(n, r), e.lineTo(n - 2.5, r + 7), e.stroke());
  }
}
function fBe(e) {
  (e.save(),
    e.translate(52, 92),
    e.rotate(0.5),
    r5(
      e,
      [
        -26, -8, -2, -4, 14, -22, 8, -2, 22, 4, 8, 6, 2, 22, -4, 6, -18, 10,
        -10, 2,
      ],
    ),
    i5(e, `#1d2440`, J8, 1.2),
    a5(e, 6, 2, 6, 3.6),
    i5(e, `#fbf3e4`, null),
    o5(e, 20, 3, 4.2, `#1d2440`, J8, 1),
    a5(e, 19, 6.5, 3, 1.8),
    i5(e, X8, null),
    e.restore());
}
function pBe(e) {
  ((e.fillStyle = X8), e.fillRect(0, 0, 100, 163));
  for (let [t, n, r] of [
    [14, 20, 18],
    [40, 10, 16],
    [70, 22, 20],
    [92, 8, 14],
    [26, 40, 12],
  ])
    o5(e, t, n, r, J8, null);
  for (let [t, n] of [
    [30, 66],
    [62, 52],
    [78, 84],
  ])
    (o5(e, t, n, 8, `#f2e6c8`, J8, 1.4), o5(e, t, n, 4, X8, J8, 1));
  for (let [t, n] of [
    [20, 1],
    [56, 0.9],
  ])
    (r5(e, [
      t,
      44,
      t + 14 * n,
      44,
      t + 6 * n,
      76,
      t + 18 * n,
      76,
      t - 2 * n,
      128,
      t + 4 * n,
      88,
      t - 6 * n,
      88,
    ]),
      i5(e, `#f6d24a`, J8, 1.4));
  s5(e, [96, 0, 88, 60, 94, 150], J8, 2.4);
}
function v5(e, t, n) {
  n || ((e.fillStyle = t === 47 ? `#f0d68a` : Y8), e.fillRect(0, 0, 100, 163));
  let r = n
    ? [
        [30, 104],
        [70, 104],
      ]
    : [
        [22, 78],
        [50, 60],
        [78, 78],
      ];
  for (let [t, n] of r) {
    s5(e, [t, n + 30, t + 2, n, t, n - 34], `#8a8a2a`, 2);
    for (let r = 0; r < 7; r++)
      o5(e, t + (r % 2 ? 4 : -4), n + 24 - r * 9, 3.6, n5, `#2f1a5c`, 0.7);
    o5(e, t, n - 36, 3, n5, `#2f1a5c`, 0.7);
  }
  for (let [t, n, r] of [
    [18, 150, 1.1],
    [82, 150, 1.1],
    [50, 144, 1.3],
  ])
    (e.save(),
      e.translate(t, n),
      e.scale(r, r),
      e.beginPath(),
      e.moveTo(0, 14),
      e.bezierCurveTo(-26, 6, -24, -22, 0, -20),
      e.bezierCurveTo(24, -22, 26, 6, 0, 14),
      i5(e, Q8, J8, 1.3),
      s5(e, [0, 14, 0, -2, 0, -18], $8, 1),
      s5(e, [0, 4, -8, -4, -14, -6], $8, 0.8),
      s5(e, [0, 4, 8, -4, 14, -6], $8, 0.8),
      e.restore());
  t === 47 && ((e.fillStyle = e5), e.fillRect(0, 134, 100, 8));
}
