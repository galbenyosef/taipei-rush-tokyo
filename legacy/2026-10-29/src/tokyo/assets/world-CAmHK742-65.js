// tokyo/assets/world-CAmHK742 65 — setcolor
// Lines 21246-21340 of readable/tokyo/assets/world-CAmHK742.pretty.js (statement-aligned).
function Zm(e, t, n) {
  let r = 0.2;
  (e.setColor(0.08, 0.26, 0.16), e.flat(t.x0, t.z0, t.x1, t.z1, r));
  let i = (t.x0 + t.x1) / 2,
    a = (t.z0 + t.z1) / 2,
    o = 7.5;
  (e.setColor(0.1, 0.22, 0.42),
    e.flat(i - o, a - 14, i + o, a + 14, 0.20400000000000001),
    e.setColor(0.55, 0.2, 0.1),
    e.flat(i - 2.45, a - 14, i + 2.45, a - 14 + 5.8, 0.20600000000000002),
    e.flat(i - 2.45, a + 14 - 5.8, i + 2.45, a + 14, 0.20600000000000002));
  let s = (t, n, r, i) => {
      (e.setColor(0.9, 0.9, 0.88), e.flat(t, n, r, i, 0.20800000000000002));
    },
    c = 0.06;
  (s(i - o, a - 14, i + o, a - 14 + c),
    s(i - o, a + 14 - c, i + o, a + 14),
    s(i - o, a - 14, i - o + c, a + 14),
    s(i + o - c, a - 14, i + o, a + 14),
    s(i - o, a - c / 2, i + o, a + c / 2));
  let l = (t, n, r, i, a, o) => {
    for (let s = 0; s < o; s++) {
      let l = i + ((a - i) * s) / o,
        u = i + ((a - i) * (s + 1)) / o,
        d = t + Math.cos(l) * r,
        f = n + Math.sin(l) * r,
        p = t + Math.cos(u) * r,
        m = n + Math.sin(u) * r;
      (e.setColor(0.9, 0.9, 0.88),
        e.beam(d, 0.20800000000000002, f, p, 0.20800000000000002, m, c, 0.004));
    }
  };
  (l(i, a, 1.8, 0, Math.PI * 2, 20),
    l(i, a - 14 + 1.6, 6.75, 0.15, Math.PI - 0.15, 18),
    l(i, a + 14 - 1.6, 6.75, Math.PI + 0.15, Math.PI * 2 - 0.15, 18));
  for (let t of [-1, 1]) {
    let o = a + t * 13.7;
    (e.setColor(0.2, 0.22, 0.25),
      e.boxMinMax(
        i - 0.1,
        r,
        o - 0.1 + t * 0.9,
        i + 0.1,
        3.5,
        o + 0.1 + t * 0.9,
      ),
      e.beam(i, 3.5, o + t * 0.9, i, 3.5, o - t * 0.1, 0.12, 0.12),
      e.setColor(0.95, 0.95, 0.93),
      e.boxMinMax(
        i - 0.9,
        3.1,
        o - 0.03 - t * 0.1,
        i + 0.9,
        4.15,
        o + 0.03 - t * 0.1,
      ),
      e.setColor(0.95, 0.4, 0.1),
      e.boxMinMax(
        i - 0.23,
        3.25,
        o - t * 0.62 - 0.23,
        i + 0.23,
        3.2800000000000002,
        o - t * 0.62 + 0.23,
        63,
      ),
      n?.addCircle(i, o + t * 0.9, 0.15, 0, 3.5, `pole`));
  }
  e.setColor(0.18, 0.35, 0.25);
  let u = 0.05;
  (e.boxMinMax(t.x0, r, t.z0, t.x1, 1.2, t.z0 + u, 55),
    e.boxMinMax(t.x0, r, t.z1 - u, t.x1, 1.2, t.z1, 55),
    e.boxMinMax(t.x0, r, t.z0, t.x0 + u, 1.2, a - 3, 55),
    e.boxMinMax(t.x0, r, a + 3, t.x0 + u, 1.2, t.z1, 55));
}
var Qm = 12.3,
  $m = [
    [1, 0.2, 0.35],
    [0.2, 0.85, 1],
    [1, 0.55, 0.1],
    [0.4, 1, 0.45],
    [1, 0.9, 0.3],
    [0.8, 0.35, 1],
    [1, 1, 1],
  ],
  eh = [
    [0.6, 0.58, 0.54],
    [0.66, 0.62, 0.55],
    [0.52, 0.54, 0.55],
    [0.72, 0.71, 0.67],
    [0.42, 0.47, 0.5],
    [0.6, 0.53, 0.48],
    [0.55, 0.56, 0.52],
    [0.36, 0.42, 0.46],
  ];
