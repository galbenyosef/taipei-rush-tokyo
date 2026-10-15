// tokyo/assets/world-CAmHK742 64 — setcolor
// Lines 20914-21245 of readable/tokyo/assets/world-CAmHK742.pretty.js (statement-aligned).
function Ym(e) {
  return (t, n) => {
    for (let [r, i, a, o] of e) if (t > r && t < a && n > i && n < o) return !0;
    return !1;
  };
}
function Xm(e, t, n, r, i, a, o, s) {
  let c = Be,
    l = 0.22;
  {
    let t = c + 6,
      a = i - 0.1;
    (e.setColor(0.24, 0.23, 0.21), e.flat(t, n, a, r, 0.216));
    for (let i = n; i < r - 0.1; i += 4)
      for (let n = t; n < a - 0.1; n += 4) {
        let t =
          0.3 +
          o.next() * 0.06 +
          ((Math.floor(n / 4) + Math.floor(i / 4)) % 2 == 0 ? 0.02 : 0);
        (e.setColor(t * 1.04, t, t * 0.92),
          e.flat(
            n + 0.06,
            i + 0.06,
            Math.min(a, n + 4) - 0.06,
            Math.min(r, i + 4) - 0.06,
            l,
          ));
      }
  }
  (e.setColor(0.33, 0.22, 0.13), e.flat(c, n, c + 6, r, 0.24));
  for (let t = n; t < r; t += 1.2)
    (e.setColor(0.27, 0.18, 0.1), e.flat(c, t, c + 6, t + 0.06, 0.245));
  (e.setColor(0.23, 0.22, 0.2),
    e.quad(c, -2.2, n, c, -2.2, r, c, l, r, c, l, n),
    e.setColor(0.12, 0.13, 0.14),
    e.boxMinMax(c + 0.3, 1.05, n, c + 0.4, 1.12, r, 7));
  for (let t = n; t < r; t += 2.5)
    e.boxMinMax(c + 0.31, l, t - 0.04, c + 0.39, 1.1, t + 0.04, 55);
  (a?.addBox(c + 0.2, n, c + 0.5, t.z - 8, -1, 1.2, `wall`),
    a?.addBox(c + 0.2, t.z + 8, c + 0.5, r, -1, 1.2, `wall`));
  let u = t.z - 6,
    d = t.z + 6;
  (e.setColor(0.3, 0.2, 0.12),
    e.boxMinMax(c - 30, -0.55, u, c, -0.25, d),
    e.setColor(0.2, 0.2, 0.21));
  for (let t = c - 28; t < c; t += 7)
    (e.cyl(t, -2.5, u - 0.3, 0.3, 3.6, 6),
      e.cyl(t, -2.5, d + 0.3, 0.3, 3.6, 6));
  (e.setColor(0.75, 0.75, 0.72),
    e.boxMinMax(c - 30, 0.55, u - 0.05, c, 0.62, u + 0.05, 7),
    e.boxMinMax(c - 30, 0.55, d - 0.05, c, 0.62, d + 0.05, 7));
  {
    let n = c - 42,
      r = t.z - 12;
    (e.setColor(0.9, 0.9, 0.88),
      e.boxMinMax(n - 10, -1.4, r - 2.8, n + 10, 0.4, r + 2.8),
      e.setColor(0.1, 0.33, 0.58),
      e.boxMinMax(n - 10.05, -0.5, r - 2.85, n + 10.05, -0.1, r + 2.85, 51),
      e.setColor(0.93, 0.93, 0.9).setEmit(0, 0, 7),
      e.boxMinMax(n - 6, 0.4, r - 2.2, n + 6, 2.9, r + 2.2),
      e.noEmit(),
      e.setColor(0.85, 0.2, 0.15),
      e.boxMinMax(n - 6.3, 2.9, r - 2.5, n + 6.3, 3.15, r + 2.5),
      e.setColor(1, 0.3, 0.2).setEmit(3, 5),
      e.boxMinMax(n - 0.15, 3.15, r - 0.15, n + 0.15, 3.6, r + 0.15),
      e.noEmit());
  }
  let f = [
    [0.62, 0.08, 0.09],
    [0.85, 0.42, 0.12],
    [0.05, 0.36, 0.34],
    [0.06, 0.15, 0.24],
    [0.85, 0.66, 0.08],
    [0.2, 0.42, 0.62],
  ];
  [t.z - 52, t.z - 45, t.z - 38, t.z + 38, t.z + 45, t.z + 52].forEach(
    (t, n) => {
      let r = i - 9,
        o = 6.1,
        c = 2.45,
        u = f[n % f.length];
      (e.setColor(u[0], u[1], u[2]),
        e.boxMinMax(
          r - c / 2,
          l,
          t - o / 2,
          r + c / 2,
          2.8200000000000003,
          t + o / 2,
          53,
        ),
        e.setColor(u[0] * 0.8, u[1] * 0.8, u[2] * 0.8));
      for (let n = -2.75; n < o / 2; n += 0.6)
        e.boxMinMax(
          r + c / 2,
          0.32,
          t + n - 0.05,
          r + c / 2 + 0.05,
          2.72,
          t + n + 0.05,
          1,
        );
      (e.setColor(1, 0.82, 0.55).setEmit(1.8, 0),
        e.quad(
          r + c / 2 - 0.05,
          l,
          t - o / 2 + 0.1,
          r + c / 2 - 0.05,
          l,
          t + o / 2 - 0.1,
          r + c / 2 - 0.05,
          2.72,
          t + o / 2 - 0.1,
          r + c / 2 - 0.05,
          2.72,
          t - o / 2 + 0.1,
        ),
        e.noEmit(),
        e.setColor(0.85, 0.83, 0.78),
        e.boxMinMax(
          r - c / 2 - 0.1,
          l,
          t - o / 2 + 0.2,
          r - c / 2 + 0.5,
          1.27,
          t + o / 2 - 0.2,
        ),
        e.setColor(0.92, 0.92, 0.88),
        e.quad(
          r - c / 2 - 1.6,
          2.52,
          t - o / 2,
          r - c / 2 - 1.6,
          2.52,
          t + o / 2,
          r - c / 2,
          2.8200000000000003,
          t + o / 2,
          r - c / 2,
          2.8200000000000003,
          t - o / 2,
        ),
        e.setColor(1, 1, 1).setEmit(0.9, 0),
        e.quad(
          r - c / 2 - 0.02,
          2.8000000000000003,
          t - o / 2 + 0.3,
          r - c / 2 - 0.02,
          2.8000000000000003,
          t + o / 2 - 0.3,
          r - c / 2 - 0.02,
          3.62,
          t + o / 2 - 0.3,
          r - c / 2 - 0.02,
          3.62,
          t - o / 2 + 0.3,
          Pm(n + (n > 2 ? 2 : 0)),
        ),
        e.noEmit(),
        a?.addBox(
          r - c / 2,
          t - o / 2,
          r + c / 2,
          t + o / 2,
          0,
          2.8200000000000003,
          `building`,
        ),
        s?.add(r - c / 2 - 1.8, 0.27, t, 3.6, 1, 0.78, 0.5, 0.42));
    },
  );
  for (let n = 0; n < 10; n++) {
    let r = t.z + (n < 5 ? -1 : 1) * o.range(14, 34),
      s = o.range(c + 10, i - 16);
    (e.setColor(0.85, 0.85, 0.82),
      e.cyl(s, l, r, 0.45, 0.75, 8),
      e.setColor(0.2, 0.2, 0.2),
      e.boxMinMax(s - 0.03, l, r - 0.03, s + 0.03, 2.62, r + 0.03));
    let u = [
      [0.8, 0.15, 0.12],
      [0.95, 0.75, 0.2],
      [0.15, 0.45, 0.35],
      [0.95, 0.95, 0.9],
    ][n % 4];
    (e.setColor(u[0], u[1], u[2]),
      e.cyl(s, 2.27, r, 1.4, 0.45, 8, !1, 0.05),
      a?.addCircle(s, r, 0.5, 0, 1.02, `pole`));
  }
  let p = [
    [c + 7, n + 4],
    [i - 5, n + 4],
    [c + 7, t.z - 20],
    [i - 5, t.z - 20],
    [c + 7, t.z + 20],
    [i - 5, t.z + 20],
    [c + 7, r - 4],
    [i - 5, r - 4],
  ];
  for (let [t, n] of p)
    (e.setColor(0.15, 0.15, 0.16),
      e.boxMinMax(t - 0.08, l, n - 0.08, t + 0.08, 6.22, n + 0.08),
      a?.addCircle(t, n, 0.12, 0, 6.22, `pole`));
  for (let [t, n] of [
    [0, 3],
    [1, 2],
    [2, 5],
    [3, 4],
    [4, 7],
    [5, 6],
    [0, 2],
    [1, 3],
    [4, 6],
    [5, 7],
  ]) {
    let [r, i] = p[t],
      [a, o] = p[n],
      c = Math.hypot(a - r, o - i),
      l = Math.max(6, Math.floor(c / 1.4));
    (s?.add(
      (r + a) / 2,
      0.27,
      (i + o) / 2,
      Math.min(9, c * 0.35),
      1,
      0.72,
      0.42,
      0.2,
    ),
      e.noEmit().setColor(0.08, 0.08, 0.08));
    let u = r,
      d = i,
      f = 6.02;
    for (let t = 1; t <= l; t++) {
      let n = t / l,
        s = r + (a - r) * n,
        c = i + (o - i) * n,
        p = 6.02 - Math.sin(n * Math.PI) * 1.4;
      (e.beam(u, f, d, s, p, c, 0.025, 0.025), (u = s), (d = c), (f = p));
    }
    for (let t = 1; t < l; t++) {
      let n = t / l,
        s = r + (a - r) * n,
        c = i + (o - i) * n,
        u = 6.02 - Math.sin(n * Math.PI) * 1.4 - 0.08,
        d = t % 5 == 0;
      (e.setColor(1, d ? 0.6 : 0.86, d ? 0.35 : 0.62).setEmit(8, 0),
        e.boxMinMax(
          s - 0.045,
          u - 0.1,
          c - 0.045,
          s + 0.045,
          u,
          c + 0.045,
          63,
        ));
    }
    e.noEmit();
  }
  {
    let n = c + 3.2,
      r = t.z,
      i = 4.4;
    (e.setColor(0.14, 0.14, 0.15),
      e.boxMinMax(n - 0.15, l, r - 6 - 0.4, n + 0.15, 6.95, r - 6 - 0.1),
      e.boxMinMax(n - 0.15, l, r + 6 + 0.1, n + 0.15, 6.95, r + 6 + 0.4),
      e.boxMinMax(
        n - 0.12,
        4.28,
        r - 6 - 0.1,
        n + 0.12,
        6.65 + 0.12,
        r + 6 + 0.1,
      ),
      e.setColor(1, 1, 1).setEmit(1.4, 0),
      e.quad(
        n + 0.14,
        i,
        r + 6,
        n + 0.14,
        i,
        r - 6,
        n + 0.14,
        6.65,
        r - 6,
        n + 0.14,
        6.65,
        r + 6,
        Am,
      ),
      e.quad(
        n - 0.14,
        i,
        r - 6,
        n - 0.14,
        i,
        r + 6,
        n - 0.14,
        6.65,
        r + 6,
        n - 0.14,
        6.65,
        r - 6,
        Am,
      ),
      e.noEmit(),
      a?.addBox(n - 0.2, r - 6 - 0.4, n + 0.2, r - 6 - 0.1, 0, 6.65, `pole`),
      a?.addBox(n - 0.2, r + 6 + 0.1, n + 0.2, r + 6 + 0.4, 0, 6.65, `pole`));
  }
  {
    let n = i - 3,
      r = t.z + 22;
    (e.setColor(0.15, 0.3, 0.2),
      e.boxMinMax(n - 0.1, l, r - 1.4, n + 0.1, 2.8200000000000003, r + 1.4),
      e.setColor(1, 1, 1).setEmit(0.6, 0),
      e.quad(
        n - 0.12,
        1.42,
        r - 1.3,
        n - 0.12,
        1.42,
        r + 1.3,
        n - 0.12,
        2.62,
        r + 1.3,
        n - 0.12,
        2.62,
        r - 1.3,
        jm,
      ),
      e.noEmit());
  }
}
