// tokyo/assets/world-Bo9wkXrT 76 — setcolor
// Lines 23965-24044 of readable/tokyo/assets/world-Bo9wkXrT.pretty.js (statement-aligned).
function Ah(e, t, n) {
  let r = Eh[new Date().getDay()];
  (e.setColor(0.6, 0.62, 0.6), e.box(t, 0.1, n - 38, 96, 30, 34, 0, 55));
  let i = () => e.setColor(0.2, 0.31, 0.3).setEmit(0, 0, 101);
  (i(), e.frustum(t, 0.1, n, 64, 64, 52, 52, 92));
  let a = 92;
  for (let o = 0; o < 8; o++)
    (i(),
      e.frustum(t, a, n, 42, 42, 54, 54, 33),
      e.noEmit(),
      e.setColor(r[0], r[1], r[2]).setEmit(3.2, 0),
      e.box(t, a + 31.5, n, 54.6, 1.2, 54.6, 0, 51),
      e.noEmit(),
      (a += 33));
  (i(),
    e.frustum(t, a, n, 38, 38, 28, 28, 22),
    e.frustum(t, a + 22, n, 24, 24, 16, 16, 18),
    e.frustum(t, a + 40, n, 14, 14, 9, 9, 22),
    e.noEmit(),
    e.setColor(0.7, 0.72, 0.72),
    e.frustum(t, a + 62, n, 5, 5, 1.2, 1.2, 63),
    e.setColor(1, 0.95, 0.85).setEmit(5, 0),
    e.box(t, a + 60, n, 9.4, 1.2, 9.4, 0, 51),
    e.setColor(1, 0.15, 0.1).setEmit(10, 2, 11),
    e.box(t, a + 124, n, 1.4, 1.4, 1.4),
    e.noEmit());
}
function jh(e, t, n, r) {
  (e.setColor(0.6, 0.1, 0.07).setEmit(0.25, 0, 0),
    e.box(t, r - 4, n, 96, 38, 30),
    e.setColor(0.92, 0.88, 0.8).setEmit(0.2, 0));
  for (let i = 0; i < 12; i++)
    e.box(t - 48 + 4 + i * 8, r, n + 15 + 0.2, 1.6, 32, 0.6);
  (e.noEmit(),
    e.setColor(0.85, 0.55, 0.12).setEmit(0.3, 0),
    e.frustum(t, r + 34, n, 102, 38, 69.12, 4, 14),
    e.setColor(0.72, 0.1, 0.08),
    e.box(t, r + 34 + 14, n, 69.12, 1.4, 4),
    e.noEmit(),
    e.setColor(0.6, 0.1, 0.07),
    e.box(t, r + 34, n, 20, 10, 21),
    e.setColor(0.85, 0.55, 0.12).setEmit(0.3, 0),
    e.frustum(t, r + 34 + 10, n, 26, 24, 6, 2, 10),
    e.noEmit());
}
var Mh = 1001,
  Nh = 1002,
  Ph = 1003,
  Fh = Be.maxX + 210,
  Ih = Be.maxZ + 200,
  Lh = Fh - 9,
  Rh = Ih - 9,
  zh = [
    [0.54, 0.52, 0.48],
    [0.5, 0.48, 0.44],
    [0.56, 0.5, 0.44],
    [0.46, 0.48, 0.47],
    [0.52, 0.5, 0.42],
    [0.43, 0.41, 0.39],
    [0.6, 0.58, 0.54],
    [0.44, 0.5, 0.45],
    [0.58, 0.47, 0.4],
  ],
  Bh = [
    [0.6, 0.58, 0.54],
    [0.66, 0.62, 0.55],
    [0.52, 0.54, 0.55],
    [0.72, 0.71, 0.67],
    [0.42, 0.47, 0.5],
    [0.36, 0.42, 0.46],
    [0.55, 0.56, 0.52],
  ],
  Vh = [
    [1, 0.25, 0.4],
    [0.25, 0.85, 1],
    [1, 0.6, 0.15],
    [0.45, 1, 0.5],
    [1, 0.9, 0.35],
    [0.9, 0.9, 1],
  ];
