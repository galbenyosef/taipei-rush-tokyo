// tokyo/assets/world-CAmHK742 54 — math
// Lines 17853-18192 of readable/tokyo/assets/world-CAmHK742.pretty.js (statement-aligned).
var Pp = (e) => (e < 0 ? 0 : e > 1 ? 1 : e),
  Fp = -3.2,
  Ip = { x: -330, z: -1130 },
  Lp = 55,
  Rp = 110,
  zp = 300,
  Bp = -0.04,
  Vp = 5200,
  Hp = class {
    plan;
    B;
    hotelPad = Lp;
    basin;
    riverX;
    riverNorthZ;
    sw;
    gapY;
    water;
    rt;
    constructor(e, t) {
      ((this.plan = e), (this.B = e.bounds));
      let n = e.dataset.water;
      ((this.riverX = n.westX),
        (this.riverNorthZ = n.northZ),
        (this.sw = e.sidewalkHeight),
        (this.basin = Number.isFinite(n.westX) && Number.isFinite(n.northZ)),
        (this.rt = this.basin ? null : (t ?? null)),
        (this.water = this.basin
          ? null
          : new Dp(e, 8, 640, this.rt?.water, this.rt?.waterExtent ?? 0)),
        (this.gapY = this.basin
          ? Bp
          : Math.min(Fp, ...(n.levels ?? []).map((e) => e.level - 2.5))));
    }
    raised(e, t) {
      return !this.basin && this.plan.terrainLift(e, t) > 0.5;
    }
    westBank(e) {
      return (
        -1212 +
        22 * Math.sin(e * 0.0021 + 1.3) +
        12 * Math.sin(e * 0.0063 + 0.4)
      );
    }
    northBank(e) {
      return (
        -1135 +
        16 * Math.sin(e * 0.0027 + 0.6) +
        10 * Math.sin(e * 0.0071) +
        48 * Math.exp(-(((e + 330) / 170) ** 2))
      );
    }
    outside(e, t) {
      let n = this.B,
        r = Math.max(n.minX - e, 0, e - n.maxX),
        i = Math.max(n.minZ - t, 0, t - n.maxZ);
      return Math.hypot(r, i);
    }
    inCity(e, t) {
      let n = this.B;
      return e >= n.minX && e <= n.maxX && t >= n.minZ && t <= n.maxZ;
    }
    reachable(e, t) {
      return e >= this.riverX && t >= this.riverNorthZ;
    }
    bankDist(e, t) {
      let n = this.westBank(t) - e,
        r = e > this.riverX - 4 ? this.northBank(e) - t : -1e9;
      return Math.max(n, r);
    }
    dazhiPlain(e, t) {
      if (!this.basin || e < this.riverX - 4 || e > 2400) return 0;
      let n = this.northBank(e) - t,
        r = 700 - 380 * G(200, 900, e),
        i = this.knoll(e, t);
      return (
        (1 - G(2e3, 2400, e)) * (1 - G(r - 90, r, n)) * (1 - G(0.2, 0.55, i))
      );
    }
    knoll(e, t) {
      let n = (e - Ip.x) / 250,
        r = (t - Ip.z + 90) / 190;
      return Math.exp(-1.6 * (n * n + r * r));
    }
    yuanshan(e, t) {
      let n = e - Ip.x,
        r = t - Ip.z,
        i = n / 230,
        a = (r + 110) / 165,
        o =
          Rp *
          Math.exp(-2 * (i * i + a * a)) *
          (1 + 0.1 * (Mp(e / 80 + 2.1, t / 80 - 0.7, 2) - 0.5)),
        s = Lp * (1 - G(58, 120, Math.hypot(n * 0.85, r))),
        c = Pp(0.5 + (0.5 * (o - s)) / 14);
      return s + (o - s) * c + 14 * c * (1 - c) * 0.5;
    }
    northLand(e, t) {
      let n = this.northBank(e) - t,
        r = G(250, 900, e),
        i =
          2.2 +
          20 *
            G(420, 1250, n) *
            (0.55 + 0.45 * Mp(e / 700 + 1.3, t / 700 - 4.1, 2)),
        a = 1350 - 650 * r,
        o = G(a, a + 1300, n);
      if (o > 0) {
        let n = Mp(e / 1100 + 3.1, t / 1100 - 1.7, 4),
          a = Np(e / 800 - 7.3, t / 800 + 2.9, 3),
          s = G(0.25, 0.8, n * 0.75 + a * 0.35) ** 1.2;
        ((i += o * ((1 - r) * (230 + 600 * s) + r * (130 + 300 * s))),
          (i += o * (Mp(e / 520, t / 520, 3) - 0.5) * 0.12 * i));
      }
      return (
        Math.hypot(e - Ip.x, t - Ip.z) < zp * 1.5 &&
          (i = Math.max(i, this.yuanshan(e, t))),
        i
      );
    }
    edgeUrban(e, t) {
      if (!this.basin)
        return this.rt && this.rt.forest ? 1 - this.rt.forest(e, t) : 1;
      let n = this.B,
        r = 0;
      return (
        e > n.maxX - 4 &&
          e < 1990 &&
          t > n.minZ - 40 &&
          t < 170 &&
          (r =
            G(1990, 1930, e) * G(170, 120, t) * G(n.maxX - 4, n.maxX + 4, e)),
        t > n.maxZ - 4 &&
          t < 1500 &&
          e > -990 &&
          e < 1100 &&
          (r = Math.max(
            r,
            G(1500, 1440, t) * G(1100, 1040, e) * G(n.maxZ - 4, n.maxZ + 4, t),
          )),
        r
      );
    }
    relief(e, t, n) {
      let r = Math.hypot(e - 100, t + 250),
        i = G(1750, 3300, r),
        a = Math.atan2(t + 250, e - 100) - -2.2;
      a = Math.atan2(Math.sin(a), Math.cos(a));
      let o = Math.exp(-(a * a) / 0.05),
        s = Mp(e / 1300 + 3.1, t / 1300 - 1.7, 4),
        c = Np(e / 900 - 7.3, t / 900 + 2.9, 3),
        l = Mp(e / 3e3, t / 3e3, 2);
      return (
        i *
          (120 +
            430 * G(0.25, 0.8, s * 0.75 + c * 0.35) ** 1.3 * (0.6 + 0.8 * l)) *
          (1 - 0.9 * o) +
        (n > 20
          ? (Mp(e / 520, t / 520, 3) - 0.5) * Math.min(1, n / 150) * 0.16 * n
          : 0)
      );
    }
    height(e, t) {
      let n = this.plan;
      if (!this.basin) {
        if (this.water.at(e, t))
          return Math.min(Fp, n.waterLevelAt(e, t) - 1.7);
        let r = this.rt;
        return (
          this.sw +
          n.hillHeight(e, t) +
          n.terrainLift(e, t) +
          (r && r.height ? r.height(e, t) : 0)
        );
      }
      if (this.inCity(e, t)) return Bp;
      if (this.reachable(e, t)) {
        let r =
            this.sw +
            n.hillHeight(
              Math.max(e, this.riverX + 0.01),
              Math.max(t, this.riverNorthZ + 0.01),
            ),
          i = G(750, 1350, this.outside(e, t));
        return i <= 0 ? r : r + i * this.relief(e, t, r);
      }
      let r = this.westBank(t) - e,
        i = e > this.riverX - 4 ? this.northBank(e) - t : -1e9,
        a;
      if (i > r) a = this.northLand(e, t);
      else {
        let r = n.hillHeight(e, t),
          i = r > 160 ? 160 + (r - 160) * 0.62 : r;
        a = Math.max(2.2, i + this.relief(e, t, i));
      }
      let o = Math.max(r, i),
        s = 10 + 1.1 * Math.min(a, 120),
        c = G(-8, s, o);
      if (i > r) {
        let n = G(0.25, 0.5, this.knoll(e, t)) * G(10, 40, a);
        n > 0 && (c = Math.max(c, n * G(-4, 24, o)));
      }
      return Fp + (a - Fp) * c;
    }
    kind(e, t) {
      return this.inCity(e, t)
        ? this.basin || !this.raised(e, t)
          ? `city`
          : `land`
        : this.basin
          ? this.reachable(e, t)
            ? `land`
            : this.bankDist(e, t) > 6
              ? `farbank`
              : `water`
          : this.water.at(e, t)
            ? `water`
            : `land`;
    }
  };
function Up(e, t) {
  let n = [];
  for (let [t, r, i] of e) {
    let e = Math.max(1, Math.round((r - t) / i));
    for (let i = 0; i <= e; i++) n.push(t + ((r - t) * i) / e);
  }
  (n.push(...t), n.sort((e, t) => e - t));
  let r = [];
  for (let e of n) (!r.length || e - r[r.length - 1] > 0.6) && r.push(e);
  for (let e of t) {
    let t = 0;
    for (let n = 1; n < r.length; n++)
      Math.abs(r[n] - e) < Math.abs(r[t] - e) && (t = n);
    r[t] = e;
  }
  return r;
}
var Wp = (e, t, n) => new W(e, t, n),
  Gp = {
    forestDark: Wp(0.03, 0.066, 0.028),
    forest: Wp(0.052, 0.105, 0.036),
    forestLight: Wp(0.11, 0.17, 0.05),
    bamboo: Wp(0.14, 0.2, 0.06),
    lawn: Wp(0.12, 0.2, 0.06),
    rock: Wp(0.15, 0.135, 0.11),
    mud: Wp(0.075, 0.068, 0.05),
    urban: Wp(0.16, 0.155, 0.145),
    gap: Wp(0.09, 0.088, 0.085),
    distant: Wp(0.05, 0.085, 0.05),
  },
  Kp = { x0: 892, x1: 1052, z0: 274, z1: 412, step: 2.5 };
function qp(e, t, n, r) {
  let i = t.length,
    a = n.length,
    o = i * a,
    s = new Float32Array(o * 3),
    c = new Float32Array(o * 3),
    l = new Float32Array(o * 3),
    u = new Float32Array(o * 2),
    d = new W(),
    f = new W();
  for (let o = 0; o < a; o++)
    for (let p = 0; p < i; p++) {
      let m = o * i + p,
        h = t[p],
        g = n[o],
        _ = r[m];
      ((s[m * 3] = h), (s[m * 3 + 1] = _), (s[m * 3 + 2] = g));
      let v = Math.max(0, p - 1),
        y = Math.min(i - 1, p + 1),
        b = Math.max(0, o - 1),
        x = Math.min(a - 1, o + 1),
        S = (r[o * i + y] - r[o * i + v]) / (t[y] - t[v]),
        C = (r[x * i + p] - r[b * i + p]) / (n[x] - n[b]),
        w = Math.hypot(S, 1, C);
      ((c[m * 3] = -S / w), (c[m * 3 + 1] = 1 / w), (c[m * 3 + 2] = -C / w));
      let T = Math.hypot(S, C),
        E = 0;
      if (p > 0 && p < i - 1 && o > 0 && o < a - 1) {
        let e = r[o * i + p - 1],
          a = r[o * i + p + 1],
          s = r[(o - 1) * i + p],
          c = r[(o + 1) * i + p],
          l = t[p] - t[p - 1],
          u = t[p + 1] - t[p],
          d = n[o] - n[o - 1],
          f = n[o + 1] - n[o];
        E =
          (2 * ((a - _) / u - (_ - e) / l)) / (l + u) +
          (2 * ((c - _) / f - (_ - s) / d)) / (d + f);
      }
      let D = e.kind(h, g),
        O = 1;
      if (D === `city`) (d.copy(Gp.gap), (O = 0), (u[m * 2 + 1] = 1));
      else {
        let t = jp(h / 900 + 3.3, g / 900 - 1.1);
        (d.copy(Gp.forestDark).lerp(Gp.forest, 0.35 + 0.65 * t),
          t > 0.66 && d.lerp(Gp.bamboo, (t - 0.66) * 1.4));
        let n = 1 - G(1.5, 9, _ - (D === `farbank` ? 2.2 : e.sw));
        (d.lerp(Gp.lawn, n * 0.85), (O *= 1 - n * 0.75));
        let r = D === `land` ? e.edgeUrban(h, g) * (1 - G(5, 14, _ - e.sw)) : 0;
        (r > 0 && (d.lerp(Gp.urban, r * 0.9), (O *= 1 - r)),
          T > 1.25 && d.lerp(Gp.rock, G(1.25, 2.6, T) * (0.6 - 0.42 * O)));
        let i = G(0.002, 0.02, E) * G(0.08, 0.4, T),
          a = G(0.004, 0.03, -E) * G(0.08, 0.4, T);
        if ((d.multiplyScalar(1 - 0.38 * i + 0.12 * a), D === `farbank`)) {
          let t = e.dazhiPlain(h, g),
            n = (1 - G(4, 18, _)) * (e.bankDist(h, g) > 50 ? 1 : 0.3);
          (d.lerp(Gp.urban, Math.max(n, t) * 0.85), (O *= 1 - Math.max(n, t)));
        }
        (D === `water` || D === `farbank`) &&
          _ < 0.6 &&
          (d.copy(Gp.mud).lerp(f.setRGB(0.1, 0.12, 0.06), G(-2, 0.6, _)),
          (O = 0));
        let o = G(2600, 4500, Math.hypot(h, g));
        d.lerp(Gp.distant, o * 0.5);
      }
      ((l[m * 3] = d.r),
        (l[m * 3 + 1] = d.g),
        (l[m * 3 + 2] = d.b),
        (u[m * 2] = O));
    }
  return { pos: s, nrm: c, col: l, ter: u };
}
function Jp(e, t, n, r) {
  let i = [],
    a = Math.max(1, Math.round((t - e) / n));
  for (let n = 0; n <= a; n++) i.push(e + ((t - e) * n) / a);
  for (let n of r) n > e && n < t && i.push(n);
  i.sort((e, t) => e - t);
  let o = [];
  for (let e of i) (!o.length || e - o[o.length - 1] > 0.05) && o.push(e);
  return o;
}
function Yp(e, t, n) {
  let r = 0;
  for (; r + 1 < e.length - 1 && e[r + 1] < t;) r++;
  let i = (t - e[r]) / Math.max(1e-6, e[r + 1] - e[r]);
  return n(r) + (n(r + 1) - n(r)) * Math.min(1, Math.max(0, i));
}
