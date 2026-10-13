// tokyo__assets__peopleWorker-Cn7UVw8F 32 — math
// Lines 15316-15658 of readable/tokyo__assets__peopleWorker-Cn7UVw8F.pretty.js (statement-aligned).
function ma(e) {
  let { m: t, h: n, lod: r } = e;
  if (e.earsHidden) return;
  let i = n.s,
    a = 0.058 * i,
    o = 0.032 * i,
    s = ra
      .setHex(e.skin)
      .multiply(new F(1.03, 0.92, 0.88))
      .getHex(),
    c = ra
      .setHex(e.skin)
      .multiply(new F(0.78, 0.66, 0.64))
      .getHex(),
    l = ra
      .setHex(e.skin)
      .multiply(new F(1.04, 0.9, 0.86))
      .getHex();
  for (let e of [-1, 1]) {
    let u = W(n, e * 1.6, 0.585, -0.001, new N(), !1),
      d = new N(e, 0, 0.12).normalize(),
      f = new N(0, 1, 0),
      p = new N();
    (f.applyAxisAngle(d, e * 0.2),
      p.crossVectors(d, f).multiplyScalar(-e),
      p.z > 0 && p.negate());
    let m = r === 0 ? 8 : 5,
      h =
        r === 0
          ? [
              [1, 0.45],
              [1.03, 1],
              [0.84, 0.9],
              [0.62, 0.72],
              [0.3, 0.15],
            ]
          : [
              [1, 0.5],
              [0.9, 0.9],
              [0.2, 0.1],
            ],
      g = h.length - 1,
      _ = (e, t) => {
        let n = e * hi,
          r = Math.max(0, Math.cos(n));
        ((t[0] = Math.sin(n) * o * (0.5 + 0.12 * r) + o * 0.18),
          (t[1] =
            Math.cos(n) *
            a *
            0.5 *
            (n > Math.PI * 0.8 && n < Math.PI * 1.2 ? 0.95 : 1)));
      },
      v = [0, 0];
    (t.grid(
      {
        nu: m,
        nv: g,
        closed: !0,
        point: (e, t, n) => {
          let r = Math.round(t * g),
            [a, s] = h[r];
          _(e, v);
          let c = v[0] < 0 ? 0.7 : 1,
            l = v[0] * a * (r >= 3 ? c : 1),
            m = v[1] * a,
            y = (0.004 + 0.012 * Math.max(0, v[0] / o)) * i * s;
          return (
            n
              .copy(u)
              .addScaledVector(p, -l)
              .addScaledVector(f, m)
              .addScaledVector(d, y),
            n
          );
        },
        invert: e < 0,
        cap1: !0,
      },
      {
        color: (e, t, n, r, i, a) => {
          let o = Math.round(i * g);
          return a.setHex(o >= g - 1 ? c : o === 1 ? l : s);
        },
        skin: R.head,
        kind: B.skin,
        rough: 0.55,
        bump: 0.5,
      },
    ),
      t.grid(
        {
          nu: m,
          nv: 1,
          closed: !0,
          point: (e, t, n) => {
            _(e, v);
            let r = (0.004 + 0.012 * Math.max(0, v[0] / o)) * i * 0.45,
              a = t < 0.5 ? 1 : 0.7;
            return (
              n
                .copy(u)
                .addScaledVector(p, -v[0] * a)
                .addScaledVector(f, v[1] * a)
                .addScaledVector(d, t < 0.5 ? r : -0.004 * i),
              n
            );
          },
          invert: e > 0,
        },
        {
          color: ra.setHex(s).multiplyScalar(0.85).getHex(),
          skin: R.head,
          kind: B.skin,
          rough: 0.6,
        },
      ));
  }
}
function ha(e) {
  let { m: t, h: n, lod: r } = e,
    i = Ji(r),
    a = Yi(r),
    o = i.length - 1,
    s = a.length - 1,
    c = i.slice();
  c[o] = i[0] + hi;
  let l = (e) => c[Math.round(e * o)],
    u = (e) => a[Math.round(e * s)],
    d = {
      color: (t, r, i, a, o, s) => aa(n, e.skin, l(a), u(o), s),
      skin: (e, t, r, i, a, o) => ia(n, l(i), u(a), o),
      kind: B.skin,
      rough: 0.58,
    },
    f = t.grid(
      { nu: o, nv: s, closed: !1, point: (e, t, r) => W(n, l(e), u(t), 0, r) },
      d,
    ),
    p = t.nor;
  for (let e = 0; e <= s; e++)
    for (let t = 0; t <= o; t++) {
      let r = (f + e * (o + 1) + t) * 3,
        i = a[e];
      (i < 0.03
        ? G.set(0, 1, 0)
        : (qi(n, c[t], Math.min(0.995, i), G),
          i > 0.97 &&
            G.lerp(na.set(0, -1, 0.3).normalize(), V(0.97, 1, i)).normalize()),
        (p[r] = G.x),
        (p[r + 1] = G.y),
        (p[r + 2] = G.z));
    }
  (pa(e), ga(e), _a(e));
}
function ga(e) {
  let { m: t, h: n } = e,
    r = n.lay,
    i = n.face,
    a = (e, r, i, a, o, s, c) =>
      t.grid(
        {
          nu: 2,
          nv: 1,
          closed: !1,
          point: (t, s, c) =>
            W(
              n,
              gi(e, r, t),
              gi(i, a, s) + (t === 0.5 ? (s < 0.5 ? -0.006 : 0.004) : 0),
              o,
              c,
            ),
        },
        { color: s, skin: c, kind: B.skin, rough: 0.6 },
      ),
    o = e.b.elder ? 10130572 : 2760215;
  for (let e of [-1, 1]) {
    let t = e * r.eyeT,
      n = t - e * r.eyeW * 0.85,
      s = t + e * r.eyeW * 0.9;
    a(
      Math.min(n, s),
      Math.max(n, s),
      r.eyeD - r.eyeH * 0.9,
      r.eyeD + r.eyeH * 0.5,
      0.0022,
      2102799,
      R.head,
    );
    let c = e * 0.12,
      l = e * 0.52;
    a(
      Math.min(c, l),
      Math.max(c, l),
      r.browD - 0.012 * (0.6 + i.brow),
      r.browD + 0.008,
      0.0024,
      o,
      R.head,
    );
  }
  let s =
    i.lipColor ||
    ra
      .setHex(e.skin)
      .multiply(new F(0.92, 0.62, 0.6))
      .getHex();
  a(-r.mouthW, r.mouthW, r.mouthD - 0.012, r.mouthD + 0.016, 0.0025, s, R.jaw);
}
function _a(e) {
  let { m: t, h: n, b: r, lod: i } = e,
    a = i === 0 ? 10 : 6,
    o = r.H * 0.808,
    s = n.crownY - 0.8 * n.hh,
    c = ki(n, 0.8) + 0.035 * n.hh,
    l = r.neckBase.z,
    u = r.neckR,
    d = i === 0 ? [0, 0.22, 0.48, 0.74, 1] : [0, 0.5, 1],
    f = d.length - 1,
    p = !r.female,
    m = new N(),
    h = (e) => gi(0.8, 0.7, V(0, 0.8, -Math.cos(e)));
  t.grid(
    {
      nu: a,
      nv: f,
      closed: !0,
      point: (e, t, i) => {
        let a = d[Math.round(t * f)],
          s = e * hi,
          g = n.crownY - h(s) * n.hh,
          _ = gi(o, g, a),
          v = gi(l, c, a * a),
          y = Math.sin(s),
          b = Math.cos(s),
          x = u * (1 - 0.1 * a) * (1 + 0.16 * (1 - a) * (1 - a)),
          S = u * (0.9 + 0.08 * (1 - a)),
          C = u * (1.02 + 0.08 * (1 - a)),
          w = b > 0 ? S : C,
          T = 1 / Math.sqrt((y / x) ** 2 + (b / w) ** 2),
          E = gi(0.95, 0.55, a);
        ((T +=
          (p ? 0.0035 : 0.002) *
          r.s *
          (U(Ti(s, E), 0.3) + U(Ti(s, -E), 0.3)) *
          Math.sin(a * Math.PI)),
          (T -= 0.002 * r.s * U(Ti(s, 0), 0.22) * (1 - a) * 0.6));
        let D =
          p && !r.student
            ? 0.0042 * r.s * U(y, 0.25) * Math.max(0, b) * U(a - 0.58, 0.18)
            : 0;
        ((T += D), i.set(y * T, _, v - b * T));
        let O = V(0, 0.6, -b) * V(0.45, 1, a);
        return (O > 0 && i.lerp(W(n, s, h(s), -0.0015 * n.s, m, !1), O), i);
      },
      invert: !0,
    },
    {
      color: (t, n, r, i, a, o) => {
        o.setHex(e.skin);
        let c = i * hi;
        return (
          o.multiplyScalar(
            1 - 0.12 * V(s - 0.06, s, n) * Math.max(0, Math.cos(c)),
          ),
          o
        );
      },
      skin: (e, t, n, r, i, a) =>
        Yr(a, R.neck, R.head, V(gi(o, s, 0.45), gi(o, s, 0.95), t)),
      kind: B.skin,
      rough: 0.56,
      bump: 0.6,
    },
  );
}
const va = {
    uTime: { value: 0 },
    uNight: { value: 0 },
    uWet: { value: 0 },
    uSunDir: { value: new N(0.4, 0.8, 0.3).normalize() },
    uCharFill: { value: new Se(0, 0, 0, 0) },
  },
  ya = {};
typeof window < `u` && (window.__materialLint = () => ya);
var ba = class {
  reqs = [];
  byKey = /* @__PURE__ */ new Map();
  tile(e, t, n, r, i, a = 8) {
    let o = this.byKey.get(e);
    if (o) return o;
    let s = this.reqs.length;
    this.reqs.push({ key: e, w: t, h: n, repeat: r, gutter: a, paint: i });
    let c = { x: -(s + 1), y: 0, w: 1, h: 1 };
    return (this.byKey.set(e, c), c);
  }
  reset() {
    ((this.reqs.length = 0), this.byKey.clear());
  }
  rollback(e) {
    for (let t = e; t < this.reqs.length; t++)
      this.byKey.delete(this.reqs[t].key);
    this.reqs.length = Math.min(e, this.reqs.length);
  }
  get area() {
    let e = 0;
    for (let t of this.reqs) e += (t.w + t.gutter * 2) * (t.h + t.gutter * 2);
    return e;
  }
};
function xa(e, t) {
  for (let n = 0; n < e.length; n += 4) {
    let r = e[n];
    if (r >= 0) continue;
    let i = t[-r - 1];
    if (!i) {
      e[n] = e[n + 1] = e[n + 2] = e[n + 3] = 0;
      continue;
    }
    ((e[n] = i.x), (e[n + 1] = i.y), (e[n + 2] = i.w), (e[n + 3] = i.h));
  }
}
const Sa = typeof document < `u`;
function Ca(e, t) {
  if (Sa) {
    let n = document.createElement(`canvas`);
    return ((n.width = e), (n.height = t), [n, n.getContext(`2d`)]);
  }
  let n = new OffscreenCanvas(e, t);
  return [n, n.getContext(`2d`)];
}
let wa = null;
function Ta(e, t) {
  wa ??= Ca(e, t);
  let [n, r] = wa;
  return (
    (n.width !== e || n.height !== t) && ((n.width = e), (n.height = t)),
    r.setTransform(1, 0, 0, 1, 0, 0),
    wa
  );
}
const Ea = /* @__PURE__ */ new Map();
let Da = 0;
