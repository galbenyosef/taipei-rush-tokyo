// tokyo/assets/region-tokyo-A7LxHjud 455 — math
// Lines 164254-164582 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function d5(e, t, n) {
  (n || l5(e, 0, 48),
    e.beginPath(),
    e.moveTo(0, 163),
    e.quadraticCurveTo(40, 128, 100, 150),
    e.lineTo(100, 163),
    e.closePath(),
    i5(e, J8, null),
    s5(e, [18, 160, 30, 120, 52, 104, 74, 88, 70, 62], Hze, 7),
    s5(e, [18, 160, 30, 120, 52, 104, 74, 88, 70, 62], J8, 1.2));
  let r = n
    ? [
        [82, 112, 17],
        [66, 92, 15],
        [90, 86, 11],
      ]
    : [
        [30, 112, 19],
        [64, 92, 20],
        [80, 66, 16],
        [40, 84, 14],
        [86, 122, 14],
      ];
  for (let [t, n, i] of r) Wze(e, t, n, i);
}
function Gze(e) {
  (o5(e, 60, 42, 27, X8, Z8, 1.6),
    e.save(),
    a5(e, 40, 112, 21, 12, -0.3),
    i5(e, `#fbf7ee`, J8, 1.4),
    r5(e, [22, 120, 10, 132, 26, 126, 16, 140, 32, 124]),
    i5(e, J8, null),
    e.beginPath(),
    e.moveTo(52, 104),
    e.bezierCurveTo(62, 92, 44, 80, 54, 64),
    (e.strokeStyle = J8),
    (e.lineWidth = 6.5),
    (e.lineCap = `round`),
    e.stroke(),
    (e.strokeStyle = `#fbf7ee`),
    (e.lineWidth = 4),
    e.stroke(),
    s5(e, [53, 90, 56, 84, 54, 78], J8, 4),
    o5(e, 56, 62, 5, `#fbf7ee`, J8, 1.2),
    o5(e, 57, 58.5, 2.2, X8, null),
    r5(e, [60, 62, 74, 66, 60, 64.5]),
    i5(e, e5, J8, 0.6),
    s5(e, [38, 122, 36, 136, 34, 148], J8, 1.4),
    s5(e, [46, 121, 47, 136, 48, 147], J8, 1.4),
    s5(e, [28, 108, 40, 102, 54, 106], J8, 1),
    e.restore());
}
function Kze(e) {
  (l5(e, 0, 38),
    s5(
      e,
      [
        6, 158, 26, 132, 22, 112, 18, 90, 40, 78, 64, 66, 60, 44, 58, 30, 76,
        18,
      ],
      J8,
      6,
    ),
    s5(e, [40, 78, 60, 86, 82, 74], J8, 3.4),
    s5(e, [22, 112, 44, 118, 60, 126], J8, 3));
  for (let [t, n, r] of [
    [58, 30, 1],
    [76, 18, 0],
    [82, 74, 1],
    [40, 78, 1],
    [60, 126, 0],
    [24, 96, 1],
    [70, 50, 0],
    [12, 128, 1],
    [50, 112, 1],
    [88, 40, 0],
  ])
    u5(e, t, n, 9, r ? X8 : `#fbf6ec`, r ? Z8 : X8, r ? `#f6d36b` : e5);
}
function qze(e) {
  (e.save(),
    a5(e, 50, 98, 14, 9, -0.25),
    i5(e, `#8c9a2e`, J8, 1.3),
    a5(e, 52, 102, 8, 5, -0.2),
    i5(e, `#d8d07a`, null),
    o5(e, 63, 88, 6.5, `#8c9a2e`, J8, 1.3),
    o5(e, 65, 87, 1.2, J8, null),
    r5(e, [69, 88, 75, 89, 69, 90]),
    i5(e, J8, null),
    r5(e, [37, 100, 24, 108, 38, 104]),
    i5(e, `#5e6a1c`, J8, 1),
    s5(e, [46, 107, 46, 112, 44, 114], J8, 1.2),
    s5(e, [53, 107, 54, 112, 52, 114], J8, 1.2),
    e.restore());
}
function Jze(e, t, n) {
  let r = n ? 16 : 22;
  for (let i = 0; i < r; i++)
    u5(
      e,
      8 + c5(t, i) * 84,
      10 + c5(t, i + 40) * (n ? 60 : 92),
      8 + c5(t, i + 80) * 3,
      Vze,
      `#c4486a`,
      `#e0627e`,
    );
  (s5(e, [0, 40, 30, 54, 54, 30, 80, 46, 100, 30], J8, 2.8),
    n || l5(e, 128, 163, X8, !1));
}
function Yze(e) {
  (e.beginPath(), e.moveTo(0, 84), e.lineTo(100, 84), e.lineTo(100, 150));
  for (let t = 100; t > 0; t -= 20)
    e.quadraticCurveTo(t - 10, 162, t - 20, 150);
  (e.closePath(),
    i5(e, `#b8222a`, J8, 1.6),
    (e.fillStyle = `#f7f0e2`),
    e.fillRect(0, 100, 100, 22),
    (e.strokeStyle = J8),
    (e.lineWidth = 0.8));
  for (let t = 10; t < 100; t += 20)
    (e.beginPath(), e.moveTo(t, 86), e.lineTo(t + 2, 150), e.stroke());
  for (let t of [25, 75]) {
    o5(e, t, 111, 8, `#f7f0e2`, J8, 1.4);
    for (let n = 0; n < 3; n++) {
      let r = (n / 3) * Math.PI * 2 - Math.PI / 2;
      o5(e, t + Math.cos(r) * 3.6, 111 + Math.sin(r) * 3.6, 2, J8, null);
    }
  }
  s5(e, [0, 84, 50, 90, 100, 84], J8, 2.4);
}
function Xze(e, t) {
  (t === 15 ? [16, 44, 72, 92] : [10, 34, 60, 86]).forEach((n, r) => {
    let i = 52 + c5(t, r) * 34;
    s5(e, [n, 0, n + 6, 10, n + 2, 18], J8, 2);
    for (let t = 0; t < 9; t++) {
      let r = t / 9,
        a = 6.5 * (1 - r * 0.6);
      o5(
        e,
        n + 2 + Math.sin(t * 1.7) * 3,
        18 + r * i,
        a,
        t % 2 ? n5 : `#9a74c9`,
        `#3e2366`,
        0.8,
      );
    }
    (a5(e, n + 9, 14, 6, 2.6, 0.5), i5(e, Q8, J8, 0.8));
  });
}
function Zze(e) {
  (a5(e, 64, 120, 22, 22),
    i5(e, X8, Z8, 1.4),
    a5(e, 72, 114, 19, 19),
    (e.fillStyle = Y8),
    e.fill(),
    e.save(),
    e.translate(44, 118),
    e.rotate(-0.25),
    r5(e, [-22, -2, -6, -10, 8, -24, 4, -6, 18, -2, 6, 4, -8, 4]),
    i5(e, `#3a3530`, J8, 1.2),
    o5(e, 16, -3, 4, `#3a3530`, J8, 1),
    r5(e, [19, -3, 26, -2, 19, -1]),
    i5(e, e5, J8, 0.5),
    r5(e, [-22, -2, -32, -6, -30, 2]),
    i5(e, `#3a3530`, J8, 1),
    e.restore());
}
function Qze(e, t, n) {
  for (let r = 0; r < 9; r++) {
    let i = 6 + r * 11 + c5(t, r) * 4,
      a = (n ? 70 : 50) + c5(t, r + 9) * 30;
    (r5(e, [i - 3, 163, i + 3, 163, i + 1 + (r % 2 ? 4 : -4), a]),
      i5(e, r % 2 ? Q8 : $8, J8, 0.7));
  }
  let r = n
    ? [
        [22, 54],
        [78, 44],
      ]
    : [
        [20, 42],
        [52, 26],
        [80, 50],
        [38, 74],
      ];
  for (let [t, n] of r) {
    s5(e, [t, n + 6, t + 2, n + 40, t, n + 70], $8, 2.2);
    for (let r of [-1, 1])
      (a5(e, t + r * 7, n + 6, 7, 4, r * 0.7), i5(e, n5, `#2f1a5c`, 1));
    (a5(e, t, n + 10, 4, 8),
      i5(e, `#4b2c88`, `#2f1a5c`, 1),
      a5(e, t - 3, n - 3, 3, 7, -0.3),
      i5(e, `#8a63c4`, `#2f1a5c`, 0.8),
      a5(e, t + 3, n - 3, 3, 7, 0.3),
      i5(e, `#8a63c4`, `#2f1a5c`, 0.8),
      s5(e, [t - 1, n + 6, t, n + 12, t + 1, n + 16], e5, 1.2));
  }
}
function $ze(e) {
  for (let [t, n, r, i] of [
    [-4, 120, 46, 104],
    [40, 104, 104, 126],
  ]) {
    (r5(e, [t, n, r, i, r, i + 12, t, n + 12]), i5(e, `#a86b34`, J8, 1.4));
    for (let a = 0.2; a < 1; a += 0.2) {
      let o = t + (r - t) * a,
        s = n + (i - n) * a;
      (e.beginPath(),
        e.moveTo(o, s),
        e.lineTo(o, s + 12),
        (e.strokeStyle = J8),
        (e.lineWidth = 0.6),
        e.stroke());
    }
    for (let a of [0.15, 0.85]) {
      let o = t + (r - t) * a,
        s = n + (i - n) * a;
      ((e.fillStyle = J8), e.fillRect(o - 1.5, s + 12, 3, 18));
    }
  }
}
function f5(e, t, n, r) {
  for (let i = 0; i < 3; i++) {
    let a = r * (1 - i * 0.28),
      o = 9 - i * 2;
    for (let r = 0; r < o; r++) {
      let s = (r / o) * Math.PI * 2 + i * 0.4;
      o5(
        e,
        t + Math.cos(s) * a * 0.55,
        n + Math.sin(s) * a * 0.55,
        a * 0.5,
        i === 2 ? `#e4554a` : i ? X8 : `#e8473b`,
        Z8,
        0.8,
      );
    }
  }
  o5(e, t, n, r * 0.18, e5, Z8, 0.6);
}
function eBe(e, t, n, r, i) {
  (e.save(),
    e.translate(t, n),
    e.rotate(i),
    e.scale(r, r),
    r5(e, [0, 0, -8, -10, -4, -20, 0, -14, 4, -24, 8, -12, 12, -16, 10, -4]),
    i5(e, $8, J8, 1),
    e.restore());
}
function tBe(e, t, n) {
  for (let [t, n, r, i] of [
    [20, 150, 1.4, -0.3],
    [80, 156, 1.5, 0.4],
    [50, 140, 1.2, 0],
    [12, 110, 1.1, -0.9],
    [90, 112, 1.1, 0.9],
  ])
    eBe(e, t, n, r, i);
  n
    ? f5(e, 50, 118, 26)
    : (f5(e, t === 23 ? 62 : 38, 74, 26), f5(e, t === 23 ? 30 : 72, 124, 20));
}
function p5(e, t, n, r, i, a, o) {
  (e.save(),
    e.translate(t, n),
    e.rotate(i),
    e.scale(r, r),
    a5(e, -8, -6, 9, 7, -0.5),
    i5(e, a, J8, 1.2),
    a5(e, 8, -6, 9, 7, 0.5),
    i5(e, a, J8, 1.2),
    a5(e, -6, 6, 6, 5, 0.5),
    i5(e, o, J8, 1.2),
    a5(e, 6, 6, 6, 5, -0.5),
    i5(e, o, J8, 1.2),
    o5(e, -9, -7, 2.4, J8, null),
    o5(e, 9, -7, 2.4, J8, null),
    a5(e, 0, 0, 1.8, 10),
    i5(e, J8, null),
    s5(e, [0, -10, -3, -16, -6, -18], J8, 0.8),
    s5(e, [0, -10, 3, -16, 6, -18], J8, 0.8),
    e.restore());
}
function nBe(e, t, n) {
  let r = n ? 4 : 6;
  for (let i = 0; i < r; i++) {
    let r = -6 + i * (n ? 24 : 15),
      a = [r, 163, r + 8, 30 + i * 4, r + 58, 52 + c5(t, i) * 40];
    s5(e, a, J8, 1.8);
    for (let t = 0; t < 12; t++) {
      let n = 0.3 + t * 0.06,
        r = (1 - n) * (1 - n) * a[0] + 2 * (1 - n) * n * a[2] + n * n * a[4],
        i = (1 - n) * (1 - n) * a[1] + 2 * (1 - n) * n * a[3] + n * n * a[5];
      t % 2
        ? (a5(e, r + 3, i + 3, 4.2, 2.2, 0.9), i5(e, $8, null))
        : o5(e, r - 2, i + 2, 3, `#c2185b`, `#7a0f3a`, 0.6);
    }
  }
  n || l5(e, 0, 26);
}
function rBe(e) {
  (e.save(),
    e.translate(50, 124),
    a5(e, 0, 0, 30, 15),
    i5(e, `#5b3b20`, J8, 1.6),
    r5(e, [22, -10, 40, -2, 44, 4, 40, 8, 24, 12]),
    i5(e, `#5b3b20`, J8, 1.4),
    o5(e, 30, -3, 1.6, `#f4ead2`, null),
    r5(e, [40, 6, 46, 2, 43, 8]),
    i5(e, `#f4ead2`, J8, 0.6),
    r5(e, [20, -10, 24, -18, 27, -10]),
    i5(e, `#3d2614`, J8, 1),
    s5(e, [-26, -6, -6, -18, 20, -12], `#2a1a0c`, 2.6));
  for (let [t, n] of [
    [-20, -0.5],
    [-12, 0.4],
    [12, -0.4],
    [20, 0.5],
  ])
    (e.save(),
      e.translate(t, 10),
      e.rotate(n),
      (e.fillStyle = `#3d2614`),
      e.fillRect(-2.5, 0, 5, 14),
      e.restore());
  (s5(e, [-30, -2, -36, -6, -34, 2], J8, 1.4), e.restore());
}
