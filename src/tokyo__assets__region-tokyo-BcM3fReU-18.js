// tokyo__assets__region-tokyo-BcM3fReU 18 — math
// Lines 14420-14622 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var V = (e) => xc[e <= 0 ? 0 : e >= 255 ? 255 : Math.round(e)],
  Sc = 90,
  Cc = 0.55,
  wc = 1.1,
  Tc = { "jy-tokyo": [-92, 96] },
  Ec = 1.65,
  Dc = 36,
  Oc = (function (e) {
    return (
      (e[(e.None = 0)] = `None`),
      (e[(e.Frame = 1)] = `Frame`),
      (e[(e.Brick = 2)] = `Brick`),
      (e[(e.Girder = 3)] = `Girder`),
      (e[(e.Upper = 4)] = `Upper`),
      e
    );
  })({}),
  kc = class e {
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
  Ac = (e, t, n = 1) => ({ at: (r) => e.at(r) + n * t.at(r) }),
  jc = (e) => ({ at: (t) => -e.at(t) }),
  Mc = class {
    len;
    s0;
    s1;
    S;
    n;
    constructor(e, t = Sc, n = 420) {
      let r = e.map((e) => [e[0], e[1]]),
        i = r.length - 1,
        a = Pc(r[0][0] - r[1][0], r[0][1] - r[1][1]),
        o = Pc(r[i][0] - r[i - 1][0], r[i][1] - r[i - 1][1]);
      (r.unshift([r[0][0] + a[0] * n, r[0][1] + a[1] * n]),
        r.push([r[i + 1][0] + o[0] * n, r[i + 1][1] + o[1] * n]));
      let s = Array(r.length).fill(0);
      for (let e = 1; e < r.length - 1; e++) {
        let n = Pc(r[e][0] - r[e - 1][0], r[e][1] - r[e - 1][1]),
          i = Pc(r[e + 1][0] - r[e][0], r[e + 1][1] - r[e][1]),
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
        let t = Pc(r[e][0] - r[e - 1][0], r[e][1] - r[e - 1][1]),
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
          let i = Pc(r[e + 1][0] - r[e][0], r[e + 1][1] - r[e][1]),
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
      let r = this.at(e, Nc);
      return ((n.x = r.x - r.tz * t), (n.z = r.z + r.tx * t), n);
    }
    project(e, t) {
      let n = this.S,
        r = 0,
        i = 1 / 0;
      for (let a = 0; a < this.n; a += 4) {
        let o = (n[a * 4] - e) ** 2 + (n[a * 4 + 1] - t) ** 2;
        o < i && ((i = o), (r = a));
      }
      for (let a = Math.max(0, r - 4); a <= Math.min(this.n - 1, r + 4); a++) {
        let o = (n[a * 4] - e) ** 2 + (n[a * 4 + 1] - t) ** 2;
        o < i && ((i = o), (r = a));
      }
      return { s: r, d: Math.sqrt(i) };
    }
  },
  Nc = { x: 0, z: 0, tx: 0, tz: 1 };
function Pc(e, t) {
  let n = Math.hypot(e, t) || 1;
  return [e / n, t / n];
}
var Fc = new WeakMap();
function Ic(e, t) {
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
function Lc(e) {
  if (Fc.has(e)) return Fc.get(e);
  let t = Rc(e);
  return (Fc.set(e, t), t);
}
