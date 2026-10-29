// tokyo/assets/region-tokyo-A7LxHjud 35 — math
// Lines 18789-19062 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var Ps = [
    Ns(`e1a`, `JB`, 0, As[0], 84, 200, 226),
    Ns(`e1b`, `JC`, 1, As[1], 84, 198, 230),
    Ns(`e2a`, `JC`, 2, As[2], 84, 226, 260),
    Ns(`e2b`, `JC`, 3, As[3], 84, 228, 262),
    Ns(`e3a`, `JA`, 4, As[4], 84, 238, 282),
    Ns(`e3b`, `JA`, 5, As[4], 236, 238, 282),
  ],
  Fs = (e, t) => Wre(e.keys, t),
  Is = (e, t, n, r, i) => ({
    id: e,
    x0: xs + ks[t] + Ds,
    x1: xs + ks[t + 1] - Ds,
    z0: n[0],
    z1: n[1],
    nums: r,
    line: i,
  }),
  Ls = [
    Is(`e1`, 0, Ms.e1, [12, 11], `JC`),
    Is(`e2`, 2, Ms.e2, [8, 7], `JC`),
    Is(`e3`, 4, Ms.e3, [2, 1], `JA`),
  ];
xs + ks[5] + 2.2;
var Rs = { west: -2215, eastN: -2100, eastS: -2048 },
  zs = { ome: 150, shinjuku: 225, chuo: 250, koshu: 345 },
  Bs = {
    ringN: 188,
    ringW: -2272,
    x0: -2267.25,
    x1: -2221.25,
    z0: 192.75,
    z1: 237.75,
  },
  Vs = { x0: -2264, x1: -2226, z0: 196, z1: 236 },
  Hs = { w: 7.5, n: 196, s: 236, x0: -2264, x1: -2232 },
  Us = { x0: -2205, x1: -2161, z0: 209, z1: 258, y: -12 },
  Ws = { x0: -2231.75, x1: -2084, xEnd: -2004 };
function Gs(e, t) {
  return t > 84 && t < 404 && e > -2175 && e < -2080;
}
var Yre = [
  { key: `e`, exit: `E`, x: -2072, z: 262, out: [0, -1] },
  { key: `w`, exit: `W`, x: -2226, z: 214, out: [-1, 0] },
  { key: `s`, exit: `S`, x: -2141, z: 328.25, out: [0, 1] },
  { key: `ns`, exit: `S`, x: -2122, z: 361.75, out: [0, -1] },
];
function Xre(e, t) {
  return t > 326 && t < 364 && e > -2234 && e < -2050;
}
var Ks = 90,
  qs = 0.55,
  Zre = 1.1,
  Js = { "jy-tokyo": [-92, 96] },
  Ys = 1.65,
  Xs = 36,
  Zs = (function (e) {
    return (
      (e[(e.None = 0)] = `None`),
      (e[(e.Frame = 1)] = `Frame`),
      (e[(e.Brick = 2)] = `Brick`),
      (e[(e.Girder = 3)] = `Girder`),
      (e[(e.Upper = 4)] = `Upper`),
      (e[(e.Cut = 5)] = `Cut`),
      (e[(e.Bank = 6)] = `Bank`),
      e
    );
  })({}),
  Qs = class e {
    k;
    constructor(e) {
      this.k = e;
    }
    at(e) {
      let t = this.k;
      if (t.length <= 2 || e <= t[0]) return t[1];
      for (let n = 2; n < t.length; n += 2)
        if (e <= t[n]) {
          let r = t[n - 2],
            i = t[n],
            a = i > r ? (e - r) / (i - r) : 1,
            o = a * a * (3 - 2 * a);
          return t[n - 1] + (t[n + 1] - t[n - 1]) * o;
        }
      return t[t.length - 1];
    }
    static c(t) {
      return new e([0, t]);
    }
  },
  $s = (e, t, n = 1) => ({ at: (r) => e.at(r) + n * t.at(r) }),
  ec = (e) => ({ at: (t) => -e.at(t) }),
  tc = class {
    len;
    s0;
    s1;
    S;
    n;
    constructor(e, t = Ks, n = 420) {
      let r = e.map((e) => [e[0], e[1]]),
        i = r.length - 1,
        a = nc(r[0][0] - r[1][0], r[0][1] - r[1][1]),
        o = nc(r[i][0] - r[i - 1][0], r[i][1] - r[i - 1][1]);
      (r.unshift([r[0][0] + a[0] * n, r[0][1] + a[1] * n]),
        r.push([r[i + 1][0] + o[0] * n, r[i + 1][1] + o[1] * n]));
      let s = Array(r.length).fill(0);
      for (let e = 1; e < r.length - 1; e++) {
        let n = nc(r[e][0] - r[e - 1][0], r[e][1] - r[e - 1][1]),
          i = nc(r[e + 1][0] - r[e][0], r[e + 1][1] - r[e][1]),
          a = Math.atan2(
            Math.abs(n[0] * i[1] - n[1] * i[0]),
            n[0] * i[0] + n[1] * i[1],
          );
        if (a < 0.001) continue;
        let o = Math.hypot(r[e][0] - r[e - 1][0], r[e][1] - r[e - 1][1]),
          c = Math.hypot(r[e + 1][0] - r[e][0], r[e + 1][1] - r[e][1]);
        s[e] = Math.max(
          0,
          Math.min(t * Math.tan(a / 2), 0.45 * Math.min(o - s[e - 1], c)),
        );
      }
      let c = [],
        l = r[0][0],
        u = r[0][1];
      for (let e = 1; e < r.length; e++) {
        let t = nc(r[e][0] - r[e - 1][0], r[e][1] - r[e - 1][1]),
          n = e < r.length - 1 ? s[e] : 0,
          i = r[e][0] - t[0] * n,
          a = r[e][1] - t[1] * n,
          o = Math.hypot(i - l, a - u);
        if (
          (o > 1e-6 && c.push({ arc: !1, x0: l, z0: u, x1: i, z1: a, len: o }),
          (l = i),
          (u = a),
          n > 0)
        ) {
          let i = nc(r[e + 1][0] - r[e][0], r[e + 1][1] - r[e][1]),
            a = t[0] * i[1] - t[1] * i[0],
            o = Math.atan2(Math.abs(a), t[0] * i[0] + t[1] * i[1]),
            s = n / Math.tan(o / 2),
            d = a > 0 ? 1 : -1,
            f = l - t[1] * s * d,
            p = u + t[0] * s * d;
          (c.push({
            arc: !0,
            cx: f,
            cz: p,
            vx: l - f,
            vz: u - p,
            ax: t[0],
            az: t[1],
            sg: d,
            r: s,
            len: o * s,
          }),
            (l = r[e][0] + i[0] * n),
            (u = r[e][1] + i[1] * n));
        }
      }
      let d = 0;
      for (let e of c) d += e.len;
      ((this.len = d), (this.s0 = n), (this.s1 = d - n));
      let f = (this.n = Math.floor(d) + 2),
        p = (this.S = new Float32Array(f * 4)),
        m = 0,
        h = 0;
      for (let e = 0; e < f; e++) {
        let t = Math.min(e, d);
        for (; m < c.length - 1 && t > h + c[m].len;) ((h += c[m].len), m++);
        let n = c[m],
          r = Math.max(0, Math.min(n.len, t - h)),
          i,
          a,
          o,
          s;
        if (n.arc) {
          let e = (r / n.r) * n.sg,
            t = Math.cos(e),
            c = Math.sin(e);
          ((i = n.cx + n.vx * t - n.vz * c),
            (a = n.cz + n.vx * c + n.vz * t),
            (o = n.ax * t - n.az * c),
            (s = n.ax * c + n.az * t));
        } else {
          let e = r / n.len;
          ((i = n.x0 + (n.x1 - n.x0) * e),
            (a = n.z0 + (n.z1 - n.z0) * e),
            (o = (n.x1 - n.x0) / n.len),
            (s = (n.z1 - n.z0) / n.len));
        }
        ((p[e * 4] = i),
          (p[e * 4 + 1] = a),
          (p[e * 4 + 2] = o),
          (p[e * 4 + 3] = s));
      }
    }
    at(e, t) {
      let n = this.S,
        r = Math.max(0, Math.min(this.n - 1.0001, e)),
        i = Math.floor(r),
        a = r - i,
        o = i * 4,
        s = o + 4;
      ((t.x = n[o] + (n[s] - n[o]) * a),
        (t.z = n[o + 1] + (n[s + 1] - n[o + 1]) * a));
      let c = n[o + 2] + (n[s + 2] - n[o + 2]) * a,
        l = n[o + 3] + (n[s + 3] - n[o + 3]) * a,
        u = Math.hypot(c, l) || 1;
      return ((t.tx = c / u), (t.tz = l / u), t);
    }
    pos(e, t, n) {
      let r = this.at(e, Qre);
      return ((n.x = r.x - r.tz * t), (n.z = r.z + r.tx * t), n);
    }
    projLimit = 1 / 0;
    project(e, t) {
      let n = this.S,
        r = 0,
        i = 1 / 0,
        a = Math.min(this.n, Math.floor(this.projLimit) + 1);
      for (let o = 0; o < a; o += 4) {
        let a = (n[o * 4] - e) ** 2 + (n[o * 4 + 1] - t) ** 2;
        a < i && ((i = a), (r = o));
      }
      for (let o = Math.max(0, r - 4); o <= Math.min(a - 1, r + 4); o++) {
        let a = (n[o * 4] - e) ** 2 + (n[o * 4 + 1] - t) ** 2;
        a < i && ((i = a), (r = o));
      }
      return { s: r, d: Math.sqrt(i) };
    }
  },
  Qre = { x: 0, z: 0, tx: 0, tz: 1 };
function nc(e, t) {
  let n = Math.hypot(e, t) || 1;
  return [e / n, t / n];
}
var rc = new WeakMap();
function ic(e, t) {
  let n = 0;
  for (let r = 0; r + 1 < e.length; r++) {
    let [i, a] = e[r],
      [o, s] = e[r + 1],
      c = Math.hypot(o - i, s - a);
    if (t <= n + c || r + 2 === e.length) {
      let e = Math.max(0, Math.min(1, (t - n) / (c || 1)));
      return [i + (o - i) * e, a + (s - a) * e];
    }
    n += c;
  }
  return e[e.length - 1];
}
function $re(e, t, n) {
  let r = [];
  for (let [t, i, a] of [
    [Ure, Gre, `新宿`],
    [fs, vs, `原宿`],
  ]) {
    if (t[1] !== n || t[t.length - 1] !== n)
      throw Error(`rail: ${a} deck keys must start and end at the deck`);
    for (let n = 0; n < t.length; n += 2) {
      let a = t[n];
      r.push(e.project(i(a), a).s, t[n + 1]);
    }
  }
  for (let e = 2; e < r.length; e += 2)
    if (r[e] <= r[e - 2])
      throw Error(`rail: 新宿 / 原宿 deck keys not ascending`);
  return new Qs([...r, ...r.map((e, n) => (n % 2 ? e : e + t))]);
}
function ac(e) {
  if (rc.has(e)) return rc.get(e);
  let t = eie(e);
  return (rc.set(e, t), t);
}
