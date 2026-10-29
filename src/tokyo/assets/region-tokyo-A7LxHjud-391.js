// tokyo/assets/region-tokyo-A7LxHjud 391 — math
// Lines 141909-142163 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var ZPe = class {
    main;
    far;
    mat;
    dayKey = -1;
    constructor(e) {
      let t = XPe(e.field.height(S1.x, S1.z));
      ((this.mat = e.propsMaterial(`skytree-lights`)),
        (this.main = new a(t, this.mat)),
        (this.main.name = `tokyo-skytree-lights`),
        (this.main.userData.noWarm = !0),
        (this.far = new a(t, this.mat)),
        (this.far.name = `tokyo-skytree-lights-far`),
        (this.far.frustumCulled = !1),
        e.scene.add(this.main),
        e.farScene.add(this.far));
    }
    update(e, t, n) {
      let r = e > 0.05 && t >= 12;
      if (((this.main.visible = r), (this.far.visible = r), !r)) return;
      let i = n.y * 400 + n.m * 32 + n.d;
      if (i !== this.dayKey) {
        this.dayKey = i;
        let e = Math.floor(Date.UTC(n.y, n.m - 1, n.d) / 864e5);
        this.mat.color.copy(e % 2 == 0 ? a0 : YPe);
      }
    }
    get design() {
      return this.mat.color.equals(a0) ? `iki` : `miyabi`;
    }
  },
  o0 = 30,
  QPe = 40,
  $Pe = 1400,
  s0 = [
    [0.7, 0.69, 0.66],
    [0.64, 0.62, 0.57],
    [0.57, 0.57, 0.56],
    [0.5, 0.44, 0.38],
    [0.62, 0.6, 0.55],
    [0.46, 0.47, 0.49],
  ];
function eFe(e, t) {
  return (n, r) => {
    let i = 0,
      a = (e, t, a, o, s, c, l) => {
        let u = (e + a) / 2,
          d = (t + o) / 2,
          f = a - e,
          p = o - t;
        if (f < 2 || p < 2 || s < 2) return;
        let m = r(u, d),
          h = s0[c % s0.length],
          g = 0.9 + ((c >>> 5) % 20) / 100;
        (n.setOwnerBox(u, m + s / 2, d, f / 2, s / 2, p / 2),
          l
            ? n.setColor(0.36 * g, 0.42 * g, 0.47 * g)
            : n.setColor(h[0] * g, h[1] * g, h[2] * g),
          n.setEmit(0, 0, 1 + (c % 998)));
        let _ = pn(i, 4);
        (n.box(
          u,
          m + 0.1,
          d,
          f - 2 * _.inset,
          s + _.dh,
          p - 2 * _.inset,
          0,
          55,
        ),
          n.noEmit(),
          i++);
      },
      o = [],
      s = e.blocks.map((n) => yu(e, n, t())),
      c = 0;
    for (let e of s) for (let t of e) t.h > o0 && c++;
    let l = c > $Pe ? QPe : o0;
    for (let e of s) {
      if (!e.length) continue;
      let t = 1 / 0,
        n = 1 / 0,
        r = -1 / 0,
        i = -1 / 0,
        s = 0;
      o.length = 0;
      for (let c of e) {
        if (c.h > l) {
          a(c.x0, c.z0, c.x1, c.z1, c.h, c.seed, c.h > 60);
          continue;
        }
        (o.push(c.h),
          c.x0 < t && (t = c.x0),
          c.z0 < n && (n = c.z0),
          c.x1 > r && (r = c.x1),
          c.z1 > i && (i = c.z1),
          (s = c.seed));
      }
      o.length &&
        (o.sort((e, t) => e - t), a(t, n, r, i, o[o.length >> 1], s, !1));
    }
    for (let t of COe(e)) {
      let e = (t.x0 + t.x1) / 2,
        r = (t.z0 + t.z1) / 2,
        a = Math.abs(t.x1 - t.x0),
        o = Math.abs(t.z1 - t.z0),
        s = t.y1 - t.y0;
      if (a < 1 || o < 1 || s < 1) continue;
      (n.setOwnerBox(e, t.y0 + s / 2, r, a / 2, s / 2, o / 2),
        n.setColor(t.rgb[0], t.rgb[1], t.rgb[2]),
        t.lit
          ? n.setEmit(0, 0, 1 + ((Math.round(e * 7 + r * 13) >>> 0) % 998))
          : t.glow && n.setEmit(t.glow, 0));
      let c = pn(i, 5);
      (n.box(e, t.y0, r, a - 2 * c.inset, s + c.dh, o - 2 * c.inset, 0, 55),
        n.noEmit(),
        i++);
    }
    return i;
  };
}
var tFe = 3500,
  nFe = 80,
  rFe = 1300,
  c0 = 14,
  l0 = [
    [0.72, 0.71, 0.68],
    [0.68, 0.65, 0.59],
    [0.6, 0.6, 0.59],
    [0.64, 0.62, 0.57],
    [0.56, 0.52, 0.46],
    [0.48, 0.42, 0.37],
    [0.46, 0.47, 0.49],
    [0.76, 0.75, 0.72],
    [0.7, 0.66, 0.58],
    [0.52, 0.36, 0.3],
    [0.4, 0.48, 0.5],
    [0.8, 0.79, 0.76],
  ],
  u0 = [
    [0.44, 0.44, 0.45],
    [0.38, 0.4, 0.44],
    [0.47, 0.42, 0.37],
    [0.6, 0.59, 0.56],
    [0.68, 0.67, 0.63],
    [0.52, 0.5, 0.47],
  ],
  d0 = [
    [0.16, 0.22, 0.13],
    [0.19, 0.25, 0.15],
    [0.14, 0.19, 0.12],
  ],
  f0 = [
    [0.36, 0.43, 0.5],
    [0.42, 0.47, 0.52],
    [0.3, 0.36, 0.42],
    [0.58, 0.58, 0.56],
    [0.5, 0.55, 0.58],
  ],
  p0 = [
    [0.78, 0.77, 0.73],
    [0.72, 0.7, 0.66],
    [0.66, 0.66, 0.66],
    [0.74, 0.7, 0.62],
  ],
  iFe = [
    [S1.x, S1.z, 80],
    [850, -765, 90],
    [C1.x, C1.z, 100],
    ...(x1.sunshine60 ? [[w1.x, w1.z, 40]] : []),
  ];
function aFe(e, t) {
  let n = Math.hypot(e + 600, t - 300),
    r = { lo: 4, hi: 12, house: 0.08, fill: 0.88, towers: 0.012 };
  (e > 900 && (r = { lo: 3, hi: 11, house: 0.3, fill: 0.86, towers: 0.012 }),
    t < -2e3 && (r = { lo: 3, hi: 9, house: 0.45, fill: 0.85, towers: 0.006 }),
    (e < -2600 || (t > 2300 && e < -600)) &&
      (r = { lo: 2, hi: 6, house: 0.68, fill: 0.9, towers: 0.004 }),
    n > 6e3 && (r = { lo: 2, hi: 6, house: 0.72, fill: 0.8, towers: 0.003 }));
  for (let n of Kv) {
    let i = Math.hypot(e - n.x, t - n.z);
    if (i < n.r * 2.4) {
      let e = 1 - i / (n.r * 2.4);
      r = {
        lo: Math.round(r.lo + 3 * e),
        hi: Math.round(r.hi + 6 * e),
        house: r.house * (1 - e),
        fill: Math.min(0.95, r.fill + 0.06 * e),
        towers: r.towers,
      };
    }
  }
  return r;
}
function m0(e, t, n, r) {
  let i = e / n,
    a = t / n,
    o = Math.floor(i),
    s = Math.floor(a),
    c = (e, t) => ((de(r, `vn`, e * 92821 + t) >>> 8) & 65535) / 65535,
    l = i - o,
    u = a - s,
    d = l * l * (3 - 2 * l),
    f = u * u * (3 - 2 * u),
    p = c(o, s),
    m = c(o + 1, s),
    h = c(o, s + 1),
    g = c(o + 1, s + 1);
  return p + (m - p) * d + (h - p) * f + (p - m - h + g) * d * f;
}
function h0(e, t, n) {
  return (
    (new le(
      de(n, `farcity-yaw`, Math.floor(e / 700) * 7919 + Math.floor(t / 700)),
    ).next() -
      0.5) *
    0.9
  );
}
function oFe(e, t) {
  return e < 800
    ? 30 * t
    : e < 1800
      ? 40 * t
      : e < 3500
        ? 56 * t * t
        : 80 * t * t;
}
var sFe = class {
  a = new Float32Array(c0 * 8192);
  n = 0;
  push(e, t, n, r, i, a, o, s, c, l, u, d) {
    if ((this.n + 1) * c0 > this.a.length) {
      let e = new Float32Array(this.a.length * 2);
      (e.set(this.a), (this.a = e));
    }
    let f = this.a,
      p = this.n * c0;
    ((f[p] = e),
      (f[p + 1] = t),
      (f[p + 2] = n),
      (f[p + 3] = r),
      (f[p + 4] = i),
      (f[p + 5] = a),
      (f[p + 6] = o),
      (f[p + 7] = s),
      (f[p + 8] = c[0]),
      (f[p + 9] = c[1]),
      (f[p + 10] = c[2]),
      (f[p + 11] = l),
      (f[p + 12] = u),
      (f[p + 13] = d),
      this.n++);
  }
};
