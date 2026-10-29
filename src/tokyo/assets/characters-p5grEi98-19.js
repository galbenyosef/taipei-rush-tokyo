// tokyo/assets/characters-p5grEi98 19 — math
// Lines 5491-5800 of readable/tokyo/assets/characters-p5grEi98.pretty.js (statement-aligned).
function mi(e) {
  let { b: t, m: n, lod: r } = e,
    i = e.desc.skin,
    a = t.joints.p,
    o = t.s * (t.female ? 0.93 : 1) * (t.student ? 0.95 : 1),
    s = F(i, 16771296, 0.45),
    c = K(i, 0.94),
    l = F(i, 15245456, 0.12),
    u = [0, 0];
  for (let e of [-1, 1]) {
    let t = e < 0 ? L.handL : L.handR,
      d = e < 0 ? L.fingersL : L.fingersR,
      f = a[t],
      p = a[d],
      m = new D().subVectors(p, f).normalize(),
      h = new D(e, 0, 0),
      g = new D().crossVectors(m, h).normalize();
    (g.z > 0 && g.negate(),
      h.crossVectors(g, m).normalize().multiplyScalar(-1),
      h.x * e < 0 && h.negate());
    let _ = f.distanceTo(p),
      v =
        r === 0
          ? [
              [-0.25, 0.025, 0.0148],
              [0.1, 0.034, 0.0138],
              [0.6, 0.042, 0.0122],
              [1, 0.04, 0.0106],
            ]
          : [
              [-0.2, 0.027, 0.021],
              [0.5, 0.042, 0.017],
              [1, 0.04, 0.015],
            ],
      y = v.length - 1,
      b = {
        color: (e, t, n, r, a, o) => {
          let s = Math.round(a * y);
          (o.setHex(s === y ? c : i),
            Math.sin(r * di) < -0.3 && o.lerp(hi.setHex(l), 0.6));
        },
        skin: (n, r, i, a, o, s) => {
          let c = Math.round(o * y);
          c === 0
            ? B(s, e < 0 ? L.foreL : L.foreR, t, 0.5)
            : B(s, t, d, c === y ? 0.2 : 0);
        },
        kind: z.skin,
        rough: 0.62,
      };
    n.grid(
      {
        nu: 6,
        nv: y,
        closed: !0,
        point: (e, t, n) => {
          let r = v[Math.round(t * y)];
          pi(e * di, r[2] * o, r[1] * o, 2.6, u);
          let i =
            u[0] < 0
              ? u[0] * (1.12 + 0.12 * Math.max(0, u[1] / (r[1] * o)))
              : u[0];
          return n
            .copy(f)
            .addScaledVector(m, r[0] * _)
            .addScaledVector(h, i)
            .addScaledVector(g, u[1]);
        },
        invert: e < 0,
      },
      b,
    );
    let x = r === 0 ? 4 : 1,
      S =
        r === 0
          ? [
              [0.74, 0.074, 0.0088, 0.3],
              [0.25, 0.082, 0.0092, 0.36],
              [-0.24, 0.077, 0.0088, 0.42],
              [-0.72, 0.061, 0.0078, 0.5],
            ]
          : [[0, 0.078, 0.034, 0.25]],
      C = r === 0 ? [0, 0.52, 1] : [0, 0.6, 1],
      w = C.length - 1,
      T = r === 0 ? 5 : 6,
      E = new D(),
      O = new D(),
      k = new D();
    for (let a = 0; a < x; a++) {
      let [c, l, f, _] = S[a],
        v = l * o,
        y = f * o,
        b = (r === 0 ? 0.0068 : 0.012) * o,
        x = 0.041 * o - y,
        D = c * 0.06,
        A = (e, t) => {
          let n = _ * 0.55,
            r = _ * 1.05,
            i = Math.min(e, 0.52),
            a = Math.max(0, e - 0.52);
          return (
            t
              .copy(p)
              .addScaledVector(g, c * x)
              .addScaledVector(m, -0.012 * o * (1 - e)),
            O.copy(m)
              .multiplyScalar(Math.cos(n))
              .addScaledVector(h, -Math.sin(n))
              .addScaledVector(g, D)
              .normalize(),
            t.addScaledVector(O, i * v),
            a > 0 &&
              (O.copy(m)
                .multiplyScalar(Math.cos(n + r))
                .addScaledVector(h, -Math.sin(n + r))
                .addScaledVector(g, D)
                .normalize(),
              t.addScaledVector(O, a * v)),
            t
          );
        };
      n.grid(
        {
          nu: T,
          nv: w,
          closed: !0,
          cap1: !0,
          point: (e, t, n) => {
            let r = Math.round(t * w),
              i = C[r];
            (A(i, E),
              A(Math.min(1, i + 0.05), k)
                .sub(E)
                .normalize(),
              i >= 1 && A(0.95, k).sub(E).negate().normalize());
            let a = gi.copy(h).addScaledVector(k, -h.dot(k)).normalize(),
              o = _i.crossVectors(k, a).normalize();
            o.dot(g) < 0 && o.negate();
            let s = e * di,
              c = i >= 1 ? 0.62 : 1 - 0.18 * i;
            return (
              pi(s, b * c, y * c, 2.8, u),
              n.copy(E).addScaledVector(a, u[0]).addScaledVector(o, u[1])
            );
          },
          invert: e < 0,
        },
        {
          color: (e, t, n, a, o, c) => {
            let l = Math.round(o * w);
            c.setHex(i);
            let u = Math.sin(a * di);
            l >= w && u > 0.3 && r === 0
              ? c.setHex(s)
              : l === 0 && c.multiplyScalar(0.96);
          },
          skin: (e, n, r, i, a, o) =>
            B(o, t, d, V(0, 0.2, C[Math.round(a * w)])),
          kind: z.skin,
          rough: 0.6,
        },
      );
    }
    if (r === 0) {
      let e = f
          .clone()
          .addScaledVector(m, 0.36 * _)
          .addScaledVector(g, 0.022 * o)
          .addScaledVector(h, -0.007 * o),
        r = m
          .clone()
          .multiplyScalar(0.84)
          .addScaledVector(g, 0.4)
          .addScaledVector(h, -0.36)
          .normalize(),
        a = new D().crossVectors(r, h).normalize(),
        c = new D().crossVectors(a, r).normalize(),
        l = 0.056 * o,
        u = [
          [-0.25, 0.0125],
          [0.45, 0.0094],
          [1, 0.0078],
        ];
      n.grid(
        {
          nu: 5,
          nv: u.length - 1,
          closed: !0,
          cap1: !0,
          point: (t, n, i) => {
            let s = u[Math.round(n * (u.length - 1))],
              d = t * di,
              f = -0.01 * o * s[0] * s[0];
            return i
              .copy(e)
              .addScaledVector(r, s[0] * l)
              .addScaledVector(a, Math.cos(d) * s[1] * o)
              .addScaledVector(c, Math.sin(d) * s[1] * 0.9 * o + f);
          },
          invert: !0,
        },
        {
          color: (e, t, n, r, a, o) =>
            o.setHex(Math.round(a * 2) === 2 && Math.sin(r * di) > 0.3 ? s : i),
          skin: t,
          kind: z.skin,
          rough: 0.6,
        },
      );
    }
  }
}
var hi = new u(),
  gi = new D(),
  _i = new D(),
  vi = {
    sneaker: {
      hc: 0.098,
      hi: 0.075,
      ht: 0.05,
      sole: 0.028,
      w: 1.02,
      toe: 1,
      gloss: !1,
      open: !1,
    },
    dress: {
      hc: 0.08,
      hi: 0.066,
      ht: 0.036,
      sole: 0.014,
      w: 0.94,
      toe: 0.7,
      gloss: !0,
      open: !1,
    },
    loafer: {
      hc: 0.074,
      hi: 0.064,
      ht: 0.036,
      sole: 0.016,
      w: 0.96,
      toe: 0.8,
      gloss: !0,
      open: !1,
    },
    flat: {
      hc: 0.05,
      hi: 0.035,
      ht: 0.028,
      sole: 0.008,
      w: 0.95,
      toe: 0.8,
      gloss: !1,
      open: !0,
    },
    heel: {
      hc: 0.055,
      hi: 0.035,
      ht: 0.026,
      sole: 0.008,
      w: 0.9,
      toe: 0.6,
      gloss: !0,
      open: !0,
    },
    boot: {
      hc: 0.1,
      hi: 0.07,
      ht: 0.04,
      sole: 0.02,
      w: 1.1,
      toe: 0.9,
      gloss: !1,
      open: !1,
    },
    rainboot: {
      hc: 0.1,
      hi: 0.075,
      ht: 0.045,
      sole: 0.018,
      w: 1.12,
      toe: 1,
      gloss: !0,
      open: !1,
    },
  };
function yi(e) {
  let t = e.desc.shoes.style;
  if (t === `slipper` || t === `sandal`) {
    for (let n of [-1, 1]) (Ci(e, n), wi(e, n, t === `sandal`));
    return;
  }
  let n = vi[t] ?? vi.sneaker;
  for (let r of [-1, 1])
    (xi(e, r, n),
      (t === `boot` || t === `rainboot`) && Si(e, r, t === `rainboot`));
}
function bi(e, t) {
  let n = e.b,
    r = n.joints.p[t < 0 ? L.footL : L.footR],
    i = t * 0.09;
  return {
    A: r,
    fwd: new D(Math.sin(i), 0, -Math.cos(i)),
    right: new D(Math.cos(i), 0, Math.sin(i)),
    heelZ: 0.058 * n.s,
    len: n.footLen,
  };
}
