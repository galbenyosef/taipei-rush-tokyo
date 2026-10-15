// tokyo/assets/region-tokyo-BcM3fReU 280 — math
// Lines 111062-111390 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function O8(e, t, n) {
  (n || w8(e, 0, 48),
    e.beginPath(),
    e.moveTo(0, 163),
    e.quadraticCurveTo(40, 128, 100, 150),
    e.lineTo(100, 163),
    e.closePath(),
    y8(e, s8, null),
    S8(e, [18, 160, 30, 120, 52, 104, 74, 88, 70, 62], _8, 7),
    S8(e, [18, 160, 30, 120, 52, 104, 74, 88, 70, 62], s8, 1.2));
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
  for (let [t, n, i] of r) D8(e, t, n, i);
}
function k8(e) {
  (x8(e, 60, 42, 27, l8, u8, 1.6),
    e.save(),
    b8(e, 40, 112, 21, 12, -0.3),
    y8(e, `#fbf7ee`, s8, 1.4),
    v8(e, [22, 120, 10, 132, 26, 126, 16, 140, 32, 124]),
    y8(e, s8, null),
    e.beginPath(),
    e.moveTo(52, 104),
    e.bezierCurveTo(62, 92, 44, 80, 54, 64),
    (e.strokeStyle = s8),
    (e.lineWidth = 6.5),
    (e.lineCap = `round`),
    e.stroke(),
    (e.strokeStyle = `#fbf7ee`),
    (e.lineWidth = 4),
    e.stroke(),
    S8(e, [53, 90, 56, 84, 54, 78], s8, 4),
    x8(e, 56, 62, 5, `#fbf7ee`, s8, 1.2),
    x8(e, 57, 58.5, 2.2, l8, null),
    v8(e, [60, 62, 74, 66, 60, 64.5]),
    y8(e, p8, s8, 0.6),
    S8(e, [38, 122, 36, 136, 34, 148], s8, 1.4),
    S8(e, [46, 121, 47, 136, 48, 147], s8, 1.4),
    S8(e, [28, 108, 40, 102, 54, 106], s8, 1),
    e.restore());
}
function A8(e) {
  (w8(e, 0, 38),
    S8(
      e,
      [
        6, 158, 26, 132, 22, 112, 18, 90, 40, 78, 64, 66, 60, 44, 58, 30, 76,
        18,
      ],
      s8,
      6,
    ),
    S8(e, [40, 78, 60, 86, 82, 74], s8, 3.4),
    S8(e, [22, 112, 44, 118, 60, 126], s8, 3));
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
    T8(e, t, n, 9, r ? l8 : `#fbf6ec`, r ? u8 : l8, r ? `#f6d36b` : p8);
}
function j8(e) {
  (e.save(),
    b8(e, 50, 98, 14, 9, -0.25),
    y8(e, `#8c9a2e`, s8, 1.3),
    b8(e, 52, 102, 8, 5, -0.2),
    y8(e, `#d8d07a`, null),
    x8(e, 63, 88, 6.5, `#8c9a2e`, s8, 1.3),
    x8(e, 65, 87, 1.2, s8, null),
    v8(e, [69, 88, 75, 89, 69, 90]),
    y8(e, s8, null),
    v8(e, [37, 100, 24, 108, 38, 104]),
    y8(e, `#5e6a1c`, s8, 1),
    S8(e, [46, 107, 46, 112, 44, 114], s8, 1.2),
    S8(e, [53, 107, 54, 112, 52, 114], s8, 1.2),
    e.restore());
}
function M8(e, t, n) {
  let r = n ? 16 : 22;
  for (let i = 0; i < r; i++)
    T8(
      e,
      8 + C8(t, i) * 84,
      10 + C8(t, i + 40) * (n ? 60 : 92),
      8 + C8(t, i + 80) * 3,
      g8,
      `#c4486a`,
      `#e0627e`,
    );
  (S8(e, [0, 40, 30, 54, 54, 30, 80, 46, 100, 30], s8, 2.8),
    n || w8(e, 128, 163, l8, !1));
}
function N8(e) {
  (e.beginPath(), e.moveTo(0, 84), e.lineTo(100, 84), e.lineTo(100, 150));
  for (let t = 100; t > 0; t -= 20)
    e.quadraticCurveTo(t - 10, 162, t - 20, 150);
  (e.closePath(),
    y8(e, `#b8222a`, s8, 1.6),
    (e.fillStyle = `#f7f0e2`),
    e.fillRect(0, 100, 100, 22),
    (e.strokeStyle = s8),
    (e.lineWidth = 0.8));
  for (let t = 10; t < 100; t += 20)
    (e.beginPath(), e.moveTo(t, 86), e.lineTo(t + 2, 150), e.stroke());
  for (let t of [25, 75]) {
    x8(e, t, 111, 8, `#f7f0e2`, s8, 1.4);
    for (let n = 0; n < 3; n++) {
      let r = (n / 3) * Math.PI * 2 - Math.PI / 2;
      x8(e, t + Math.cos(r) * 3.6, 111 + Math.sin(r) * 3.6, 2, s8, null);
    }
  }
  S8(e, [0, 84, 50, 90, 100, 84], s8, 2.4);
}
function P8(e, t) {
  (t === 15 ? [16, 44, 72, 92] : [10, 34, 60, 86]).forEach((n, r) => {
    let i = 52 + C8(t, r) * 34;
    S8(e, [n, 0, n + 6, 10, n + 2, 18], s8, 2);
    for (let t = 0; t < 9; t++) {
      let r = t / 9,
        a = 6.5 * (1 - r * 0.6);
      x8(
        e,
        n + 2 + Math.sin(t * 1.7) * 3,
        18 + r * i,
        a,
        t % 2 ? h8 : `#9a74c9`,
        `#3e2366`,
        0.8,
      );
    }
    (b8(e, n + 9, 14, 6, 2.6, 0.5), y8(e, d8, s8, 0.8));
  });
}
function F8(e) {
  (b8(e, 64, 120, 22, 22),
    y8(e, l8, u8, 1.4),
    b8(e, 72, 114, 19, 19),
    (e.fillStyle = c8),
    e.fill(),
    e.save(),
    e.translate(44, 118),
    e.rotate(-0.25),
    v8(e, [-22, -2, -6, -10, 8, -24, 4, -6, 18, -2, 6, 4, -8, 4]),
    y8(e, `#3a3530`, s8, 1.2),
    x8(e, 16, -3, 4, `#3a3530`, s8, 1),
    v8(e, [19, -3, 26, -2, 19, -1]),
    y8(e, p8, s8, 0.5),
    v8(e, [-22, -2, -32, -6, -30, 2]),
    y8(e, `#3a3530`, s8, 1),
    e.restore());
}
function I8(e, t, n) {
  for (let r = 0; r < 9; r++) {
    let i = 6 + r * 11 + C8(t, r) * 4,
      a = (n ? 70 : 50) + C8(t, r + 9) * 30;
    (v8(e, [i - 3, 163, i + 3, 163, i + 1 + (r % 2 ? 4 : -4), a]),
      y8(e, r % 2 ? d8 : f8, s8, 0.7));
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
    S8(e, [t, n + 6, t + 2, n + 40, t, n + 70], f8, 2.2);
    for (let r of [-1, 1])
      (b8(e, t + r * 7, n + 6, 7, 4, r * 0.7), y8(e, h8, `#2f1a5c`, 1));
    (b8(e, t, n + 10, 4, 8),
      y8(e, `#4b2c88`, `#2f1a5c`, 1),
      b8(e, t - 3, n - 3, 3, 7, -0.3),
      y8(e, `#8a63c4`, `#2f1a5c`, 0.8),
      b8(e, t + 3, n - 3, 3, 7, 0.3),
      y8(e, `#8a63c4`, `#2f1a5c`, 0.8),
      S8(e, [t - 1, n + 6, t, n + 12, t + 1, n + 16], p8, 1.2));
  }
}
function L8(e) {
  for (let [t, n, r, i] of [
    [-4, 120, 46, 104],
    [40, 104, 104, 126],
  ]) {
    (v8(e, [t, n, r, i, r, i + 12, t, n + 12]), y8(e, `#a86b34`, s8, 1.4));
    for (let a = 0.2; a < 1; a += 0.2) {
      let o = t + (r - t) * a,
        s = n + (i - n) * a;
      (e.beginPath(),
        e.moveTo(o, s),
        e.lineTo(o, s + 12),
        (e.strokeStyle = s8),
        (e.lineWidth = 0.6),
        e.stroke());
    }
    for (let a of [0.15, 0.85]) {
      let o = t + (r - t) * a,
        s = n + (i - n) * a;
      ((e.fillStyle = s8), e.fillRect(o - 1.5, s + 12, 3, 18));
    }
  }
}
function R8(e, t, n, r) {
  for (let i = 0; i < 3; i++) {
    let a = r * (1 - i * 0.28),
      o = 9 - i * 2;
    for (let r = 0; r < o; r++) {
      let s = (r / o) * Math.PI * 2 + i * 0.4;
      x8(
        e,
        t + Math.cos(s) * a * 0.55,
        n + Math.sin(s) * a * 0.55,
        a * 0.5,
        i === 2 ? `#e4554a` : i ? l8 : `#e8473b`,
        u8,
        0.8,
      );
    }
  }
  x8(e, t, n, r * 0.18, p8, u8, 0.6);
}
function z8(e, t, n, r, i) {
  (e.save(),
    e.translate(t, n),
    e.rotate(i),
    e.scale(r, r),
    v8(e, [0, 0, -8, -10, -4, -20, 0, -14, 4, -24, 8, -12, 12, -16, 10, -4]),
    y8(e, f8, s8, 1),
    e.restore());
}
function B8(e, t, n) {
  for (let [t, n, r, i] of [
    [20, 150, 1.4, -0.3],
    [80, 156, 1.5, 0.4],
    [50, 140, 1.2, 0],
    [12, 110, 1.1, -0.9],
    [90, 112, 1.1, 0.9],
  ])
    z8(e, t, n, r, i);
  n
    ? R8(e, 50, 118, 26)
    : (R8(e, t === 23 ? 62 : 38, 74, 26), R8(e, t === 23 ? 30 : 72, 124, 20));
}
function V8(e, t, n, r, i, a, o) {
  (e.save(),
    e.translate(t, n),
    e.rotate(i),
    e.scale(r, r),
    b8(e, -8, -6, 9, 7, -0.5),
    y8(e, a, s8, 1.2),
    b8(e, 8, -6, 9, 7, 0.5),
    y8(e, a, s8, 1.2),
    b8(e, -6, 6, 6, 5, 0.5),
    y8(e, o, s8, 1.2),
    b8(e, 6, 6, 6, 5, -0.5),
    y8(e, o, s8, 1.2),
    x8(e, -9, -7, 2.4, s8, null),
    x8(e, 9, -7, 2.4, s8, null),
    b8(e, 0, 0, 1.8, 10),
    y8(e, s8, null),
    S8(e, [0, -10, -3, -16, -6, -18], s8, 0.8),
    S8(e, [0, -10, 3, -16, 6, -18], s8, 0.8),
    e.restore());
}
function H8(e, t, n) {
  let r = n ? 4 : 6;
  for (let i = 0; i < r; i++) {
    let r = -6 + i * (n ? 24 : 15),
      a = [r, 163, r + 8, 30 + i * 4, r + 58, 52 + C8(t, i) * 40];
    S8(e, a, s8, 1.8);
    for (let t = 0; t < 12; t++) {
      let n = 0.3 + t * 0.06,
        r = (1 - n) * (1 - n) * a[0] + 2 * (1 - n) * n * a[2] + n * n * a[4],
        i = (1 - n) * (1 - n) * a[1] + 2 * (1 - n) * n * a[3] + n * n * a[5];
      t % 2
        ? (b8(e, r + 3, i + 3, 4.2, 2.2, 0.9), y8(e, f8, null))
        : x8(e, r - 2, i + 2, 3, `#c2185b`, `#7a0f3a`, 0.6);
    }
  }
  n || w8(e, 0, 26);
}
function U8(e) {
  (e.save(),
    e.translate(50, 124),
    b8(e, 0, 0, 30, 15),
    y8(e, `#5b3b20`, s8, 1.6),
    v8(e, [22, -10, 40, -2, 44, 4, 40, 8, 24, 12]),
    y8(e, `#5b3b20`, s8, 1.4),
    x8(e, 30, -3, 1.6, `#f4ead2`, null),
    v8(e, [40, 6, 46, 2, 43, 8]),
    y8(e, `#f4ead2`, s8, 0.6),
    v8(e, [20, -10, 24, -18, 27, -10]),
    y8(e, `#3d2614`, s8, 1),
    S8(e, [-26, -6, -6, -18, 20, -12], `#2a1a0c`, 2.6));
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
  (S8(e, [-30, -2, -36, -6, -34, 2], s8, 1.4), e.restore());
}
