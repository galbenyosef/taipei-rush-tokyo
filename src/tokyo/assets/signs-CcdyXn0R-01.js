// tokyo/assets/signs-CcdyXn0R 01 — layer
// Lines 1-126 of readable/tokyo/assets/signs-CcdyXn0R.pretty.js (statement-aligned).
import {
  $t as e,
  A as t,
  Kn as n,
  Tn as r,
  ht as i,
  mt as a,
  yn as o,
} from "./three-CC5Mkdpe.js";
import { sn as s } from "./engine-BuS5QxN0.js";
import "./world-Bo9wkXrT.js";
var c = 128,
  l = 4;
function cellTexels(e) {
  let t = e || 1;
  return t <= 0.5 ? 64 : t < 1 ? 96 : 128;
}
function d(e, t, n) {
  for (let r = 0; ; r++) {
    r === e.length && e.push(new Uint8Array(16));
    let i = e[r];
    for (let e = 0; e + n <= l; e++)
      for (let a = 0; a + t <= l; a++) {
        let o = !0;
        for (let r = e; r < e + n && o; r++)
          for (let e = a; e < a + t; e++) i[r * l + e] && (o = !1);
        if (o) {
          for (let r = e; r < e + n; r++)
            for (let e = a; e < a + t; e++) i[r * l + e] = 1;
          return [r, a, e];
        }
      }
  }
}
var f = { layer: 0, u0: 0, v0: 0, u1: 1, v1: 1, aspect: 1 },
  PackSigns = class PackSigns {
    rects = new Map();
    texture;
    layers = 0;
    bytes = 0;
    sign(e) {
      return (
        this.rects.get(e) ||
        (typeof console < `u` &&
          console.warn(`[pack-signs] missing sign '${e}'`),
        f)
      );
    }
    static async create(f, m, h, g, _, v = 2) {
      let y = new PackSigns(),
        b = cellTexels(m),
        x = b * l,
        S = b / c,
        C = Object.entries(f).map(([e, t]) => ({
          key: e,
          d: t,
          layer: 0,
          cx: 0,
          cy: 0,
        }));
      C.sort((e, t) => t.d.cw * t.d.ch - e.d.cw * e.d.ch || t.d.cw - e.d.cw);
      let w = [];
      for (let e of C) [e.layer, e.cx, e.cy] = d(w, e.d.cw, e.d.ch);
      let T = Math.max(1, w.length),
        E = new Uint8Array(x * x * 4 * T),
        [D, O] = s(x, x),
        k = performance.now();
      for (let { key: e, d: t, layer: n, cx: r, cy: i } of C) {
        performance.now() - k > v && (await g(), (k = performance.now()));
        let a = t.cw * c,
          o = t.ch * c,
          s = t.cw * b,
          l = t.ch * b;
        (O.setTransform(S, 0, 0, S, 0, 0),
          O.save(),
          O.clearRect(0, 0, a, o),
          (O.globalAlpha = 1),
          t.paint(O, a, o, !1),
          O.restore());
        let u = O.getImageData(0, 0, s, l).data;
        (O.save(),
          (O.globalAlpha = 1),
          (O.fillStyle = `#000`),
          O.fillRect(0, 0, a, o),
          t.paint(O, a, o, !0),
          O.restore());
        let d = O.getImageData(0, 0, s, l).data,
          f = n * x * x * 4;
        for (let e = 0; e < l; e++) {
          let t = f + ((x - 1 - (i * b + e)) * x + r * b) * 4;
          for (let n = e * s * 4, r = n + s * 4; n < r; n += 4, t += 4)
            ((E[t] = u[n]),
              (E[t + 1] = u[n + 1]),
              (E[t + 2] = u[n + 2]),
              (E[t + 3] = d[n]));
        }
        let p = 1.5 / x;
        y.rects.set(e, {
          layer: 128 + n,
          u0: (r * b) / x + p,
          u1: (r * b + s) / x - p,
          v1: 1 - (i * b) / x - p,
          v0: 1 - (i * b + l) / x + p,
          aspect: a / o,
        });
      }
      D.width = D.height = 1;
      let A = new t(E, x, x, T);
      return (
        (A.name = `pack-signs:${_}`),
        (A.format = e),
        (A.type = n),
        (A.colorSpace = r),
        (A.wrapS = A.wrapT = o),
        (A.magFilter = a),
        (A.minFilter = i),
        (A.generateMipmaps = !0),
        (A.anisotropy = h),
        (A.needsUpdate = !0),
        (y.texture = A),
        (y.layers = T),
        (y.bytes = E.byteLength),
        y
      );
    }
  };
