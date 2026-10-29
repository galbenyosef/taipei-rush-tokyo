// tokyo/assets/region-tokyo-55J_WESF 214 — math
// Lines 83644-83993 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function tM(e, t, n, r, i, a) {
  let o = n[0] - t[0],
    s = n[1] - t[1],
    c = n[2] - t[2],
    l = i[0] - t[0],
    u = i[1] - t[1],
    d = i[2] - t[2],
    f = s * d - c * u,
    p = c * l - o * d,
    m = o * u - s * l;
  f * a[0] + p * a[1] + m * a[2] >= 0
    ? e.quad(
        t[0],
        t[1],
        t[2],
        n[0],
        n[1],
        n[2],
        r[0],
        r[1],
        r[2],
        i[0],
        i[1],
        i[2],
      )
    : e.quad(
        t[0],
        t[1],
        t[2],
        i[0],
        i[1],
        i[2],
        r[0],
        r[1],
        r[2],
        n[0],
        n[1],
        n[2],
      );
}
var nM = (e, t, n, r) => [
    [e, t],
    [n, t],
    [n, r],
    [e, r],
  ],
  rM = (e, t, n, r, i) => [
    [e - i / 2, t],
    [e + i / 2, t],
    [n + i / 2, r],
    [n - i / 2, r],
  ],
  vye = {
    a: nM(0, 5, 4, 6),
    b: nM(3, 3, 4, 6),
    c: nM(3, 0, 4, 3),
    d: nM(0, 0, 4, 1),
    e: nM(0, 0, 1, 3),
    f: nM(0, 3, 1, 6),
    g: nM(0, 2.5, 4, 3.5),
  },
  iM = (e) => [...e].map((e) => vye[e]),
  aM = {
    T: [nM(0, 5, 4, 6), nM(1.5, 0, 2.5, 5)],
    O: [nM(0, 0, 1, 6), nM(3, 0, 4, 6), nM(1, 0, 3, 1), nM(1, 5, 3, 6)],
    K: [
      nM(0, 0, 1, 6),
      rM(1.65, 2.4, 3.35, 6, 1.3),
      rM(1.65, 3.6, 3.35, 0, 1.3),
    ],
    Y: [rM(0.65, 6, 2, 3, 1.3), rM(3.35, 6, 2, 3, 1.3), nM(1.5, 0, 2.5, 3.2)],
    D: [
      nM(0, 0, 1, 6),
      nM(1, 0, 2.6, 1),
      nM(1, 5, 2.6, 6),
      nM(3, 1.4, 4, 4.6),
      [
        [2.6, 0],
        [4, 1.4],
        [3, 1.4],
        [2.6, 1],
      ],
      [
        [2.6, 6],
        [2.6, 5],
        [3, 4.6],
        [4, 4.6],
      ],
    ],
    M: [
      nM(0, 0, 1, 6),
      nM(3, 0, 4, 6),
      [
        [1, 4.4],
        [2, 2.4],
        [2, 4],
        [1, 6],
      ],
      [
        [3, 4.4],
        [3, 6],
        [2, 4],
        [2, 2.4],
      ],
    ],
    E: [nM(0, 0, 1, 6), nM(1, 5, 4, 6), nM(1, 2.5, 3.3, 3.5), nM(1, 0, 4, 1)],
    L: [nM(0, 0, 1, 6), nM(1, 0, 3.6, 1)],
    a: [
      nM(0.3, 3.2, 3, 4.2),
      nM(3, 0, 4, 3.8),
      nM(0, 1.6, 3, 2.6),
      nM(0, 0, 1, 1.6),
      nM(1, 0, 3, 1),
    ],
    Q: [
      nM(0, 0, 1, 6),
      nM(3, 0, 4, 6),
      nM(1, 0, 3, 1),
      nM(1, 5, 3, 6),
      rM(2.7, 1.6, 4.1, -0.7, 1.1),
    ],
    u: [nM(0, 1, 1, 4.2), nM(3, 0, 4, 4.2), nM(1, 0, 3, 1)],
    0: iM(`abcdef`),
    1: [nM(2.2, 0, 3.2, 6), nM(1, 4.6, 2.2, 5.6)],
    2: iM(`abged`),
    3: iM(`abgcd`),
    4: iM(`fgbc`),
    5: iM(`afgcd`),
    6: iM(`afgecd`),
    7: iM(`abc`),
    8: iM(`abcdefg`),
    9: iM(`abcdfg`),
  },
  oM = 5.2,
  sM = 3;
function yye(e) {
  let t = 0;
  for (let n of e) t += n === ` ` ? sM : oM;
  return Math.max(0, t - 1.2000000000000002);
}
function cM(e, t, n, r, i, a, o) {
  let s = a / 6,
    c = n + (yye(t) * s) / 2;
  for (let n of t) {
    if (n === ` `) {
      c -= sM * s;
      continue;
    }
    for (let t of aM[n] ?? []) {
      let n = t.map(([e, t]) => [c - e * s, r + t * s]),
        a = n.length,
        l = (e) => [n[e][0], n[e][1], i],
        u = (e) => [n[e][0], n[e][1], i + o];
      if ((tM(e, l(0), l(1), l(2), l(3), [0, 0, -1]), o > 0)) {
        let t = n.reduce((e, t) => e + t[0], 0) / a,
          r = n.reduce((e, t) => e + t[1], 0) / a;
        for (let i = 0; i < a; i++) {
          let o = (i + 1) % a,
            s = (n[i][0] + n[o][0]) / 2 - t,
            c = (n[i][1] + n[o][1]) / 2 - r;
          tM(e, l(i), l(o), u(o), u(i), [s, c, 0]);
        }
      }
    }
    c -= oM * s;
  }
}
function bye(e, t) {
  let n = e.length,
    r = [];
  for (let t = 0; t < n; t++) {
    let i = e[(t - 1 + n) % n],
      a = e[t],
      o = e[(t + 1) % n],
      s = e[(t + 2) % n],
      c = (e, t) =>
        Math.hypot(t[0] - e[0], t[1] - e[1], t[2] - e[2]) ** 0.5 || 0.001,
      l = 0 + c(i, a),
      u = l + c(a, o),
      d = u + c(o, s);
    for (let e = 0; e < 24; e++) {
      let t = l + ((u - l) * e) / 24,
        n = (e, n, r, i) => {
          let a = (t - r) / (i - r);
          return [
            e[0] + (n[0] - e[0]) * a,
            e[1] + (n[1] - e[1]) * a,
            e[2] + (n[2] - e[2]) * a,
          ];
        },
        c = n(i, a, 0, l),
        f = n(a, o, l, u),
        p = n(o, s, u, d),
        m = n(c, f, 0, u),
        h = n(f, p, l, d);
      r.push(n(m, h, l, u));
    }
  }
  let i = [r[0]],
    a = 0;
  for (let e = 1; e <= r.length; e++) {
    let n = r[e - 1],
      o = r[e % r.length];
    ((a += Math.hypot(o[0] - n[0], o[1] - n[1], o[2] - n[2])),
      a >= t && e < r.length && (i.push(o), (a = 0)));
  }
  return i;
}
function xye(e) {
  let t = e.length;
  return e.map((n, r) => {
    let i = e[(r - 1 + t) % t],
      a = e[(r + 1) % t],
      o = a[0] - i[0],
      s = a[1] - i[1],
      c = a[2] - i[2],
      l = Math.hypot(o, s, c) || 1;
    ((o /= l), (s /= l), (c /= l));
    let u = -c,
      d = o,
      f = Math.hypot(u, d) || 1;
    ((u /= f), (d /= f));
    let p = 0 * c - d * s,
      m = d * o - u * c,
      h = u * s - 0 * o,
      g = Math.hypot(p, m, h) || 1;
    return { t: [o, s, c], s: [u, 0, d], u: [p / g, m / g, h / g] };
  });
}
function lM(e, t, n, r, i, a, o, s = () => !0) {
  let c = t.length,
    l = (e, s, c) => {
      let l = t[e],
        u = n[e],
        d = r + s * a,
        f = i + c * o;
      return [
        l[0] + u.s[0] * d + u.u[0] * f,
        l[1] + u.s[1] * d + u.u[1] * f,
        l[2] + u.s[2] * d + u.u[2] * f,
      ];
    },
    u = [
      [-1, 1, 1, 1, `u`, 1],
      [1, 1, 1, -1, `s`, 1],
      [1, -1, -1, -1, `u`, -1],
      [-1, -1, -1, 1, `s`, -1],
    ];
  for (let t = 0; t < c; t++) {
    if (!s(t)) continue;
    let r = (t + 1) % c;
    for (let [i, a, o, s, c, d] of u) {
      let u = n[t],
        f = c === `u` ? u.u : u.s;
      tM(e, l(t, i, a), l(t, o, s), l(r, o, s), l(r, i, a), [
        f[0] * d,
        f[1] * d,
        f[2] * d,
      ]);
    }
  }
}
r.add({ "澀谷 Hikario": `渋谷ヒカリオ`, "澀谷 PARGO": `渋谷パルゴ` });
var uM = (e, t) => (n) => ({ x: e, z: t, gy: n.groundHeight(e, t), facing: 0 }),
  dM = (e, t, n, r) => Lk(e, t, n, r, 0),
  fM = (e, t, n, r, i, a) => Lk(e - n, t - r, e + n, t + r, i, a);
function pM(e, t, n, r, i, a, o = 1.1) {
  (e.push().col(11125708).mat(0.1, 0.5, 0.04, 1),
    e.panel(t, n, r, i, a, a + o),
    e.panel(r, i, t, n, a, a + o),
    e.coarse ||
      (e.col(14212318).mat(0.4, 0.6, 0, 0),
      e.rod(t, a + o, n, r, a + o, i, 0.05, 4)),
    e.pop());
}
function mM(e, t, n, r, i, a, o, s, c = !0) {
  let l = Math.max(1, Math.round((r - n) / i)),
    u = (r - n) / l,
    d = t.length,
    f = 0;
  for (let r = 0; r < (c ? d : d - 1); r++) {
    let i = t[r],
      c = t[(r + 1) % d],
      p = Math.hypot(c[0] - i[0], c[1] - i[1]);
    if (p < 0.001) continue;
    let m = (c[0] - i[0]) / p,
      h = (c[1] - i[1]) / p,
      g = -h,
      _ = m;
    for (let t = (a - (f % a)) % a; t < p; t += a) {
      if (t < s || t > p - s) continue;
      let r = Math.floor((f + t) / a + 1e-6),
        c = i[0] + m * t + g * o,
        d = i[1] + h * t + _ * o,
        v = 0;
      for (; v < l;) {
        if ((r + 2 * v) % 6 >= 4) {
          v++;
          continue;
        }
        let t = v;
        for (; t + 1 < l && (r + 2 * (t + 1)) % 6 < 4;) t++;
        (e.panel(
          c - m * s * 0.5,
          d - h * s * 0.5,
          c + m * s * 0.5,
          d + h * s * 0.5,
          n + v * u + 0.15,
          n + (t + 1) * u - 0.15,
        ),
          (v = t + 1));
      }
    }
    f += p;
  }
}
function Sye(e, t, n, r, i, a, o, s, c, l) {
  let u = Math.hypot(n[0] - t[0], n[1] - t[1]);
  if (u < 0.001 || i - r < 0.5) return;
  let d = -(n[1] - t[1]) / u,
    f = (n[0] - t[0]) / u,
    p = d * o,
    m = f * o,
    h = Math.max(1, Math.round(u / c));
  for (let o = r; o < i - 0.05; o += a) {
    let r = Math.min(i, o + a),
      c = o + (r - o) * 0.8;
    (e.grid(
      t[0],
      o,
      t[1],
      n[0],
      o,
      n[1],
      n[0] + p,
      c,
      n[1] + m,
      t[0] + p,
      c,
      t[1] + m,
      s,
      h,
      1,
    ),
      e.push().col(l).mat(0.5, 0.3, 0.14, 1),
      e.panel(t[0] + p, t[1] + m, n[0] + p, n[1] + m, c, r),
      Tj(e, [t, n, [n[0] + p, n[1] + m], [t[0] + p, t[1] + m]], r),
      e.pop());
  }
}
