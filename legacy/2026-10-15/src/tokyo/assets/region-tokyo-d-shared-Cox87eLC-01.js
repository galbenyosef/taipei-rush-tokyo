// tokyo/assets/region-tokyo-d-shared-Cox87eLC 01 — math
// Lines 1-330 of readable/tokyo/assets/region-tokyo-d-shared-Cox87eLC.pretty.js (statement-aligned).
import { K as e, Tt as t, wt as n } from "./three-CC5Mkdpe.js";
import { Mt as r } from "./region-tokyo-BcM3fReU.js";
var i = r(`yotsukoshi`)?.colors[0] ?? `#e60012`,
  a = 3948626,
  o = 8157824,
  s = 10131608,
  c = 8026232,
  l = 12,
  u = 40,
  d = 1.55,
  f = 0.68;
function p(e, t, n, r, i = 0.62) {
  let p = Math.sin(n.heading),
    m = -Math.cos(n.heading),
    v = -m,
    y = p,
    b = r + i,
    x = (e, t, r) => [n.x + p * e + v * r, b + t, n.z + m * e + y * r],
    S = t(`gold`),
    C = t(`cream`);
  (e.setTint(s).setInfo(0, 0, 0, 0),
    h(e, x, -1.6, 1.6, -0.68 - 0.05, 0.7300000000000001, -i, -i + 0.12, C),
    h(e, x, -1.55, d, -0.68, f, -i + 0.12, -0.08, C),
    e.setTint(c),
    h(e, x, -1.6, 1.6, -0.68 - 0.05, 0.7300000000000001, -0.08, 0, C),
    e.setTint(16777215).setInfo(0, 0, u, 0),
    h(e, x, d, 1.57, -0.32, 0.32, -i + 0.24, -0.2, S),
    e.setTint(a).setInfo(0, 0, l, 0));
  let w = S;
  (_(
    e,
    x,
    [
      [-1.1, 0.3, 0, 0.2, 0.2],
      [-0.98, 0.36, 0, 0.3, 0.32],
      [-0.75, 0.37, 0, 0.34, 0.36],
      [-0.45, 0.35, 0, 0.31, 0.34],
      [-0.15, 0.38, 0, 0.3, 0.37],
      [0.15, 0.46, 0, 0.32, 0.44],
      [0.38, 0.52, 0, 0.3, 0.46],
      [0.52, 0.5, 0, 0.2, 0.36],
      [0.58, 0.48, 0, 0.07, 0.18],
    ],
    10,
    w,
  ),
    g(e, x, [0.34, 0.84, 0], [0.42, 0.5, 0.46], w, 12, 6),
    g(e, x, [0.5, 0.56, 0], [0.22, 0.4, 0.34], w, 10, 5),
    g(e, x, [0.52, 1, 0], [0.2, 0.36, 0.4], w, 10, 5),
    g(e, x, [0.65, 1.02, 0], [0.22, 0.25, 0.25], w, 10, 6),
    g(e, x, [0.8, 0.95, 0], [0.1, 0.11, 0.15], w, 10, 5),
    g(e, x, [0.7, 1.1, 0], [0.11, 0.07, 0.19], w, 8, 4));
  for (let t of [-0.17, 0.17])
    g(e, x, [0.52, 1.3, t], [0.05, 0.07, 0.05], w, 6, 3);
  g(e, x, [0.74, 0.86, 0], [0.11, 0.07, 0.13], w, 8, 4);
  for (let t of [-1, 1])
    (g(e, x, [-0.72, 0.38, 0.2 * t], [0.36, 0.32, 0.17], w, 10, 6),
      _(
        e,
        x,
        [
          [-0.62, 0.15, 0.33 * t, 0.1, 0.1],
          [-0.4, 0.08, 0.36 * t, 0.075, 0.075],
          [-0.26, 0.07, 0.36 * t, 0.07, 0.065],
        ],
        7,
        w,
      ));
  for (let t of [-1, 1])
    _(
      e,
      x,
      [
        [0.2, 0.44, 0.22 * t, 0.13, 0.16],
        [0.42, 0.2, 0.21 * t, 0.11, 0.12],
        [0.62, 0.09, 0.2 * t, 0.09, 0.09],
        [0.98, 0.08, 0.2 * t, 0.08, 0.075],
        [1.1, 0.07, 0.2 * t, 0.08, 0.07],
      ],
      8,
      w,
    );
  (_(
    e,
    x,
    [
      [-1.06, 0.26, 0, 0.055, 0.055],
      [-1.2, 0.12, 0.08, 0.05, 0.05],
      [-1.16, 0.045, 0.3, 0.045, 0.045],
      [-0.9, 0.04, 0.43, 0.045, 0.04],
      [-0.6, 0.04, 0.44, 0.04, 0.035],
    ],
    6,
    w,
  ),
    g(e, x, [-0.53, 0.05, 0.44], [0.09, 0.05, 0.06], w, 6, 3),
    e.setTint(o));
  for (let t of [-1, 1])
    (g(e, x, [1.17, 0.07, 0.2 * t], [0.15, 0.075, 0.11], w, 8, 4),
      g(e, x, [-0.17, 0.06, 0.35 * t], [0.13, 0.06, 0.09], w, 8, 4));
  (g(e, x, [0.89, 0.99, 0], [0.035, 0.04, 0.07], w, 6, 3),
    e.setTint(16777215).setInfo(0, 0, 0, 0));
  let T = 1 / 0,
    E = 1 / 0,
    D = -1 / 0,
    O = -1 / 0;
  for (let [e, t] of [
    [-1.6, -0.68 - 0.05],
    [1.6, -0.68 - 0.05],
    [1.6, 0.7300000000000001],
    [-1.6, 0.7300000000000001],
  ]) {
    let n = x(e, 0, t);
    ((T = Math.min(T, n[0])),
      (D = Math.max(D, n[0])),
      (E = Math.min(E, n[2])),
      (O = Math.max(O, n[2])));
  }
  return { x0: T, z0: E, x1: D, z1: O, h: b + 1.3 };
}
function m(e, t, n, r, i, a, o) {
  let s = r[0] - t[0],
    c = r[1] - t[1],
    l = r[2] - t[2],
    u = i[0] - n[0],
    d = i[1] - n[1],
    f = i[2] - n[2],
    p = c * f - l * d,
    m = l * u - s * f,
    h = s * d - c * u,
    g = Math.hypot(p, m, h);
  if (g < 1e-9) return;
  ((p /= g), (m /= g), (h /= g));
  let _ = (t[0] + n[0] + r[0] + i[0]) / 4 - a[0],
    v = (t[1] + n[1] + r[1] + i[1]) / 4 - a[1],
    y = (t[2] + n[2] + r[2] + i[2]) / 4 - a[2];
  if (p * _ + m * v + h * y < 0) {
    e.quad4(
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
      -p,
      -m,
      -h,
      o.u,
      o.v,
      o.u,
      o.v,
      o.u,
      o.v,
      o.u,
      o.v,
    );
    return;
  }
  e.quad4(
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
    p,
    m,
    h,
    o.u,
    o.v,
    o.u,
    o.v,
    o.u,
    o.v,
    o.u,
    o.v,
  );
}
function h(e, t, n, r, i, a, o, s, c) {
  let l = t((n + r) / 2, (o + s) / 2, (i + a) / 2),
    u = (e, c, l) => t(e ? r : n, l ? s : o, c ? a : i);
  (m(e, u(0, 0, 1), u(1, 0, 1), u(1, 1, 1), u(0, 1, 1), l, c),
    m(e, u(1, 0, 0), u(1, 1, 0), u(1, 1, 1), u(1, 0, 1), l, c),
    m(e, u(0, 0, 0), u(0, 1, 0), u(0, 1, 1), u(0, 0, 1), l, c),
    m(e, u(0, 0, 0), u(1, 0, 0), u(1, 0, 1), u(0, 0, 1), l, c),
    m(e, u(0, 1, 0), u(1, 1, 0), u(1, 1, 1), u(0, 1, 1), l, c));
}
function g(e, t, n, r, i, a, o) {
  let s = t(n[0], n[1], n[2]),
    c = (e, i) => {
      let s = (e / a) * Math.PI * 2,
        c = -Math.PI / 2 + (i / o) * Math.PI;
      return t(
        n[0] + Math.cos(s) * Math.cos(c) * r[0],
        n[1] + Math.sin(c) * r[1],
        n[2] + Math.sin(s) * Math.cos(c) * r[2],
      );
    };
  for (let t = 0; t < o; t++)
    for (let n = 0; n < a; n++)
      m(e, c(n, t), c(n + 1, t), c(n + 1, t + 1), c(n, t + 1), s, i);
}
function _(e, t, n, r, i) {
  let a = [],
    o = [];
  for (let e = 0; e < n.length; e++) {
    let [i, s, c, l, u] = n[e],
      d = n[Math.max(0, e - 1)],
      f = n[Math.min(n.length - 1, e + 1)],
      p = f[0] - d[0],
      m = f[1] - d[1],
      h = f[2] - d[2],
      g = Math.hypot(p, m, h) || 1;
    ((p /= g), (m /= g), (h /= g));
    let _ = -h,
      v = p,
      y = Math.hypot(_, v) || 1;
    ((_ /= y), (v /= y));
    let b = m * v,
      x = h * _ - p * v,
      S = -m * _,
      C = [];
    for (let e = 0; e < r; e++) {
      let n = (e / r) * Math.PI * 2,
        a = Math.cos(n) * l,
        o = Math.sin(n) * u;
      C.push(t(i + _ * a + b * o, s + x * o, c + v * a + S * o));
    }
    (a.push(C), o.push(t(i, s, c)));
  }
  for (let t = 0; t + 1 < a.length; t++) {
    let n = a[t],
      s = a[t + 1],
      c = [
        (o[t][0] + o[t + 1][0]) / 2,
        (o[t][1] + o[t + 1][1]) / 2,
        (o[t][2] + o[t + 1][2]) / 2,
      ];
    for (let t = 0; t < r; t++)
      m(e, n[t], n[(t + 1) % r], s[(t + 1) % r], s[t], c, i);
  }
  let s = (t, n) => {
    let s = a[t];
    for (let a = 0; a < r; a++)
      m(e, o[t], s[a], s[(a + 1) % r], s[(a + 1) % r], o[n], i);
  };
  (s(0, 1), s(a.length - 1, a.length - 2));
}
var v = new n(),
  y = new e(),
  b = class {
    a;
    b;
    opts;
    mesh;
    pre = !1;
    post = !1;
    end;
    chunks = null;
    constructor(e, n, r, i, a, o) {
      ((this.a = i),
        (this.b = a),
        (this.opts = o),
        (this.end = e.index ? e.index.count : 0));
      let s = (this.mesh = new t(e, n));
      ((s.name = r),
        (s.castShadow = o.castShadow),
        (s.receiveShadow = o.receiveShadow),
        (s.matrixAutoUpdate = !1),
        s.updateMatrix(),
        (s.raycast = () => {}),
        (s.onBeforeShadow = (e, t, n, r, i) => {
          let a = this.pre && this.opts.preCasts ? 0 : this.a,
            o = this.post && this.opts.postCasts ? this.end : this.b;
          i.setDrawRange(a, o - a);
        }),
        (s.onBeforeRender = (e, t, n, r) => this.mainRange(r, n)),
        this.mainRange(e));
    }
    setChunks(e) {
      this.chunks = e.length > 1 ? e : null;
    }
    mainRange(e, t) {
      let n = this.pre ? 0 : this.a,
        r = this.post ? this.end : this.b,
        i = this.chunks;
      if (t && i && !(this.pre && this.post)) {
        (v.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
          y.setFromProjectionMatrix(v, t.coordinateSystem, t.reversedDepth));
        let e = -1,
          a = -1;
        for (let t = 0; t < i.length; t++)
          y.intersectsBox(i[t].box) && (e < 0 && (e = t), (a = t));
        (this.pre || (n = e < 0 ? this.b : i[e].s),
          this.post || (r = e < 0 ? (this.pre ? this.a : n) : i[a].e));
      }
      e.setDrawRange(n, Math.max(0, r - n));
    }
    set(e, t) {
      (e !== this.pre || t !== this.post) &&
        ((this.pre = e),
        (this.post = t),
        this.mainRange(this.mesh.geometry),
        (this.mesh.visible =
          (e ? this.a : 0) + (this.b - this.a) + (t ? this.end - this.b : 0) >
          0));
    }
    get state() {
      return { pre: this.pre, post: this.post };
    }
    get tris() {
      return {
        pre: this.a / 3,
        body: (this.b - this.a) / 3,
        post: (this.end - this.b) / 3,
      };
    }
  };
