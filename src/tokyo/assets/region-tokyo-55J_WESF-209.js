// tokyo/assets/region-tokyo-55J_WESF 209 — col
// Lines 82201-82434 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function Kve(e, t) {
  let n = -1063,
    r = 9.5,
    i = 6.5,
    a = Wve(n, 975, r, i, e.coarse ? 12 : 24),
    o = (e, t) => 5.6 + 4.2 * ((t - 968.5) / (2 * i)),
    s = t.c(`glass`);
  e.col(14674672).mat(0.12, 0.3, 0.25, G);
  for (let t = 0; t < a.length; t++) {
    let n = a[t],
      r = a[(t + 1) % a.length],
      i = o(n[0], n[1]),
      c = o(r[0], r[1]);
    e.quad(
      n[0],
      Nj,
      n[1],
      r[0],
      Nj,
      r[1],
      r[0],
      c,
      r[1],
      n[0],
      i,
      n[1],
      s,
      0,
      0,
      1,
      Math.min(1, i / 4.2),
    );
  }
  (e.col(13031134).mat(0.1, 0.45, 0.2, 1),
    Aj(e, a, 0, n, 975, (e, t) => o(e, t) + 0.05),
    e.col(15922420).mat(0.4, 0.4, 0.05, 1));
  for (let t = 0; t < a.length; t++) {
    let n = a[t],
      r = a[(t + 1) % a.length],
      i = o(n[0], n[1]),
      s = o(r[0], r[1]),
      [c, l] = wj(n, r);
    e.quad(
      n[0] + c * 0.12,
      i - 0.45,
      n[1] + l * 0.12,
      r[0] + c * 0.12,
      s - 0.45,
      r[1] + l * 0.12,
      r[0] + c * 0.12,
      s + 0.12,
      r[1] + l * 0.12,
      n[0] + c * 0.12,
      i + 0.12,
      n[1] + l * 0.12,
    );
  }
  if (!e.coarse)
    for (let t of [-4.5, 0, 4.5]) {
      let a = Math.sqrt(Math.max(0, 1 - (t / r) ** 2)) * i;
      e.rod(
        n + t,
        o(0, 975 - a) + 0.12,
        975 - a,
        n + t,
        o(0, 975 + a) + 0.12,
        975 + a,
        0.1,
        4,
      );
    }
  e.solid(n - r * 0.85, 975 - i * 0.85, -1054.925, 980.525, 0, 9);
}
function qve(e, t, n, r) {
  let i = Math.sin(r),
    a = -Math.cos(r),
    o = -a,
    s = i,
    c = (e, r, c) => [t + i * e + o * r, c, n + a * e + s * r],
    l = e.coarse ? 4 : 7,
    u = () => e.col(4865587).mat(0.5, 0.6, 0.28, 1);
  u();
  let d = c(0.55, 0, 7.85),
    f = c(-0.55, 0, 7.6);
  (e.lathe(
    d[0],
    d[2],
    [0.01, 7.4, 0.6, 7.55, 0.74, 7.85, 0.58, 8.15, 0.01, 8.3],
    e.coarse ? 5 : 9,
  ),
    e.lathe(
      f[0],
      f[2],
      [0.01, 6.95, 0.72, 7.15, 0.98, 7.6, 0.8, 8.05, 0.01, 8.25],
      e.coarse ? 5 : 9,
    ));
  let p = c(-0.35, 0, 0);
  if (e.coarse) e.lathe(p[0], p[2], [0.01, 5.7, 0.62, 6.4, 0.01, 7.15], 5);
  else {
    (e.col(15131094).mat(0.35, 0, 0.18, 1),
      e.lathe(
        p[0],
        p[2],
        [0.01, 5.75, 0.42, 5.95, 0.56, 6.4, 0.5, 6.85, 0.01, 7.15],
        8,
      ),
      u());
    for (let t = 0; t < 9; t++) {
      let n = (t / 9) * Math.PI * 2,
        r = Math.cos(n),
        i = Math.sin(n),
        a = [
          [0.15, 7.15],
          [0.5, 6.95],
          [0.68, 6.45],
          [0.6, 5.95],
          [0.2, 5.6],
        ];
      for (let t = 0; t + 1 < a.length; t++)
        e.rod(
          p[0] + r * a[t][0],
          a[t][1],
          p[2] + i * a[t][0],
          p[0] + r * a[t + 1][0],
          a[t + 1][1],
          p[2] + i * a[t + 1][0],
          0.045,
          3,
        );
    }
  }
  let m = [
    [28, 5.5],
    [62, 4.9],
    [108, 4.7],
    [150, 5.2],
  ];
  for (let t of [1, -1])
    for (let n = 0; n < m.length; n++) {
      let [r, o] = m[n],
        s = (r * Math.PI) / 180,
        u = Math.cos(s),
        d = Math.sin(s) * t,
        f = (e, t, n = 0) => c(u * e - d * n, d * e + u * n, t),
        p = t * (n < 2 ? 0.25 : -0.25),
        h = [
          [f(0.45, 7.75), 0.25],
          [f(1.6, 9, p * 0.4), 0.22],
          [f(2.6, 9.3 - n * 0.05, p), 0.2],
          [f(o * 0.72, 5.9, p * 1.4), 0.16],
          [f(o * 0.93, 1.6, p * 1.1), 0.1],
          [f(o, Nj, p), 0.035],
        ];
      for (let t = 0; t + 1 < h.length; t++) {
        let [n, r] = h[t],
          [i, a] = h[t + 1];
        e.rod(n[0], n[1], n[2], i[0], i[1], i[2], r, l, a);
      }
      if (!e.coarse)
        for (let t of [1, 2, 3]) {
          let [n, r] = h[t];
          e.lathe(
            n[0],
            n[2],
            [0.01, n[1] - r * 1.7, r * 1.75, n[1], 0.01, n[1] + r * 1.7],
            6,
          );
        }
      let g = h[h.length - 1][0];
      (e.pole(g[0], g[2], 0.22, 0, 2.4, `prop`),
        e.coarse ||
          (e.push().col(16773848).mat(0.4, 0, 0.5, 1),
          e.disc(g[0] - i * 0.6, 0.055, g[2] - a * 0.6, 1.5, 10),
          e.col(3815994).mat(0.5, 0.6, 0, 0),
          e.box(
            g[0] - i * 0.6 - 0.15,
            Nj,
            g[2] - a * 0.6 - 0.15,
            g[0] - i * 0.6 + 0.15,
            0.25,
            g[2] - a * 0.6 + 0.15,
          ),
          e.pop()));
    }
}
function Jve(e, t) {
  let n = -989,
    r = -970,
    i = 11.5;
  (e.col(16773364).mat(0.3, 0.2, 0.42, G),
    Ej(e, n, 963, r, 980, 0, 4.2, t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1), 3.2, 4.2),
    e.col(15764656).mat(0.55, 0, 0.12, G),
    Ej(
      e,
      n,
      963,
      r,
      980,
      4.2,
      i,
      t.c(`office`),
      e.coarse ? 7.2 : 3.6,
      3.65,
      14187164,
    ),
    e.col(16777215).mat(0.6, 0, 0.08, 1),
    Hk(
      e,
      [
        [r, 963],
        [n, 963],
        [n, 980],
        [r, 980],
      ],
      0.3,
      11.4,
      12.2,
    ));
  let a = e.coarse ? 6 : 24;
  for (let t = 0; t < a; t++) {
    e.col(t % 2 ? 16777215 : 15224714).mat(0.7, 0, 0.15, 1);
    let n = -988.5 + (18 * t) / a,
      i = -988.5 + (18 * (t + 1)) / a;
    e.quad(i, 3.4, 961.4, n, 3.4, 961.4, n, 4.3, 963, i, 4.3, 963);
    let o = 963.5 + (16 * t) / a,
      s = 963.5 + (16 * (t + 1)) / a;
    e.quad(-968.4, 3.4, s, -968.4, 3.4, o, r, 4.3, o, r, 4.3, s);
  }
  e.solid(n, 963, r, 980, 0, i);
}
var zj = { x0: -1080, x1: -1015, z0: 962, z1: 1013 },
  Bj = { x: -1030, z: 996 },
  Vj = { x0: -1028, x1: -1009, z0: 1071, z1: 1101 },
  Yve = 1003;
