// tokyo__assets__bodyWorker-Bk4d3Tu3 34 — math
// Lines 11928-12237 of readable/tokyo__assets__bodyWorker-Bk4d3Tu3.pretty.js (statement-aligned).
function ga(e) {
  let { b: t, m: n, lod: r } = e,
    i = e.desc.skin,
    a = t.joints.p,
    o = t.s * (t.female ? 0.93 : 1) * (t.student ? 0.95 : 1),
    s = Zr(i, 16771296, 0.45),
    c = X(i, 0.94),
    l = Zr(i, 15245456, 0.12),
    u = [0, 0];
  for (let e of [-1, 1]) {
    let t = e < 0 ? B.handL : B.handR,
      d = e < 0 ? B.fingersL : B.fingersR,
      f = a[t],
      p = a[d],
      m = new M().subVectors(p, f).normalize(),
      h = new M(e, 0, 0),
      g = new M().crossVectors(m, h).normalize();
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
            Math.sin(r * pa) < -0.3 && o.lerp(_a.setHex(l), 0.6));
        },
        skin: (n, r, i, a, o, s) => {
          let c = Math.round(o * y);
          c === 0
            ? U(s, e < 0 ? B.foreL : B.foreR, t, 0.5)
            : U(s, t, d, c === y ? 0.2 : 0);
        },
        kind: H.skin,
        rough: 0.62,
      };
    n.grid(
      {
        nu: 6,
        nv: y,
        closed: !0,
        point: (e, t, n) => {
          let r = v[Math.round(t * y)];
          ha(e * pa, r[2] * o, r[1] * o, 2.6, u);
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
      E = new M(),
      D = new M(),
      O = new M();
    for (let a = 0; a < x; a++) {
      let [c, l, f, _] = S[a],
        v = l * o,
        y = f * o,
        b = (r === 0 ? 0.0068 : 0.012) * o,
        x = 0.041 * o - y,
        k = c * 0.06,
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
            D.copy(m)
              .multiplyScalar(Math.cos(n))
              .addScaledVector(h, -Math.sin(n))
              .addScaledVector(g, k)
              .normalize(),
            t.addScaledVector(D, i * v),
            a > 0 &&
              (D.copy(m)
                .multiplyScalar(Math.cos(n + r))
                .addScaledVector(h, -Math.sin(n + r))
                .addScaledVector(g, k)
                .normalize(),
              t.addScaledVector(D, a * v)),
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
              A(Math.min(1, i + 0.05), O)
                .sub(E)
                .normalize(),
              i >= 1 && A(0.95, O).sub(E).negate().normalize());
            let a = va.copy(h).addScaledVector(O, -h.dot(O)).normalize(),
              o = ya.crossVectors(O, a).normalize();
            o.dot(g) < 0 && o.negate();
            let s = e * pa,
              c = i >= 1 ? 0.62 : 1 - 0.18 * i;
            return (
              ha(s, b * c, y * c, 2.8, u),
              n.copy(E).addScaledVector(a, u[0]).addScaledVector(o, u[1])
            );
          },
          invert: e < 0,
        },
        {
          color: (e, t, n, a, o, c) => {
            let l = Math.round(o * w);
            c.setHex(i);
            let u = Math.sin(a * pa);
            l >= w && u > 0.3 && r === 0
              ? c.setHex(s)
              : l === 0 && c.multiplyScalar(0.96);
          },
          skin: (e, n, r, i, a, o) =>
            U(o, t, d, W(0, 0.2, C[Math.round(a * w)])),
          kind: H.skin,
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
        a = new M().crossVectors(r, h).normalize(),
        c = new M().crossVectors(a, r).normalize(),
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
              d = t * pa,
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
            o.setHex(Math.round(a * 2) === 2 && Math.sin(r * pa) > 0.3 ? s : i),
          skin: t,
          kind: H.skin,
          rough: 0.6,
        },
      );
    }
  }
}
const _a = new N(),
  va = new M(),
  ya = new M(),
  ba = {
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
function xa(e) {
  let t = e.desc.shoes.style;
  if (t === `slipper` || t === `sandal`) {
    for (let n of [-1, 1]) (Ta(e, n), Ea(e, n, t === `sandal`));
    return;
  }
  let n = ba[t] ?? ba.sneaker;
  for (let r of [-1, 1])
    (Ca(e, r, n),
      (t === `boot` || t === `rainboot`) && wa(e, r, t === `rainboot`));
}
function Sa(e, t) {
  let n = e.b,
    r = n.joints.p[t < 0 ? B.footL : B.footR],
    i = t * 0.09;
  return {
    A: r,
    fwd: new M(Math.sin(i), 0, -Math.cos(i)),
    right: new M(Math.cos(i), 0, Math.sin(i)),
    heelZ: 0.058 * n.s,
    len: n.footLen,
  };
}
