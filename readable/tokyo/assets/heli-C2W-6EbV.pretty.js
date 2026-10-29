import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { t } from "./ja-anaGONx4.js";
import {
  Ct as n,
  Dt as r,
  Et as i,
  Ln as a,
  Nn as o,
  On as s,
  Rt as c,
  Tt as l,
  Y as u,
  ar as d,
  b as f,
  gt as p,
  ht as m,
  or as h,
  q as g,
  v as _,
  yn as v,
} from "./three-C4coU-vx.js";
import {
  $ as y,
  F as b,
  Fr as x,
  J as S,
  Nr as C,
  Q as w,
  Y as T,
  _n as ee,
  et as te,
  pn as ne,
  yn as re,
} from "./engine-14d5lda2.js";
import {
  At as ie,
  Dt as E,
  Et as D,
  Lt as ae,
  Ot as O,
  jt as oe,
  kt as se,
} from "./actors-bknSEpf2.js";
var ce = {
    private: {
      id: `private`,
      name: { zh: `燕鷗直升機`, en: `Tern helicopter` },
      paint: 15987957,
      reg: `B-31058`,
      varB: [0, 0, 1, 0],
    },
    news: {
      id: `news`,
      name: { zh: `狂飆新聞直升機`, en: `RUSH NEWS chopper` },
      paint: 1585258,
      reg: `B-31726`,
      varB: [1, 0, 0, 0],
    },
    ambulance: {
      id: `ambulance`,
      name: { zh: `空中救護直升機`, en: `Air ambulance` },
      paint: 16053490,
      reg: `B-77011`,
      varB: [0, 1, 0, 0],
    },
  },
  k = [`臺北飛行俱樂部`, `TAIPEI FLYING CLUB`];
function le(e) {
  if (e) {
    e.club && (k = e.club);
    for (let t of Object.keys(ce)) {
      let n = e.reg?.[t],
        r = e.names?.[t];
      (n && (ce[t].reg = n), r && (ce[t].name = r));
    }
  }
}
var ue = 1024,
  de = (e, t, n, r) => ({
    u0: e / ue,
    u1: (e + n) / ue,
    v1: 1 - t / 512,
    v0: 1 - (t + r) / 512,
  }),
  A = { z0: -4, z1: 3, y0: 0.5, y1: 2.35, ...de(0, 32, 1024, 272) },
  j = { x: 0, y: 32, w: 1024, h: 272 },
  M = { z0: 2.7, z1: 7, ...de(0, 320, 1024, 96) },
  fe = { x: 0, y: 320, w: 1024, h: 96 },
  N = { z0: 6.25, z1: 7.35, y0: 1.95, y1: 3.15, ...de(0, 424, 256, 80) },
  pe = { x: 0, y: 424, w: 256, h: 80 },
  P = (e) => j.x + ((e - A.z0) / (A.z1 - A.z0)) * j.w,
  F = (e) => j.y + ((A.y1 - e) / (A.y1 - A.y0)) * j.h,
  me = new Map();
function I(e, t, n, r, i, a, o, s = 800, c = ne, l = `center`) {
  (e.save(), (e.fillStyle = o), (e.textAlign = l), (e.textBaseline = `middle`));
  let u = a;
  e.font = `${s} ${u}px ${c}`;
  let d = e.measureText(t).width;
  (d > i && ((u *= i / d), (e.font = `${s} ${u}px ${c}`)),
    e.fillText(
      t,
      l === `center` ? n + i / 2 : l === `left` ? n : n + i,
      r + a / 2 + u * 0.04,
    ),
    e.restore());
}
function he(e, t) {
  (e.save(), (e.strokeStyle = t), (e.lineWidth = 2), (e.globalAlpha = 0.55));
  for (let [t, n] of [
    [-2.38, -1.22],
    [-1.14, 0.32],
  ]) {
    let r = P(t),
      i = P(n),
      a = F(2.04),
      o = F(0.66);
    (e.beginPath(),
      typeof e.roundRect == `function`
        ? e.roundRect(r, a, i - r, o - a, 10)
        : e.rect(r, a, i - r, o - a),
      e.stroke());
  }
  ((e.globalAlpha = 0.8),
    (e.fillStyle = t),
    e.fillRect(P(-1.42), F(1.07), 20, 5),
    e.fillRect(P(0.1), F(1.07), 20, 5),
    (e.globalAlpha = 0.45),
    e.fillRect(P(-1.1), F(0.68), P(0.9) - P(-1.1), 3),
    (e.globalAlpha = 0.4),
    e.strokeRect(P(0.55), F(1.95), P(1.5) - P(0.55), F(1) - F(1.95)),
    e.restore());
}
function ge(e, t, n, r) {
  (e.save(), e.translate(t, n), (e.fillStyle = `#1d5fbf`));
  for (let t = 0; t < 3; t++)
    (e.save(),
      e.rotate((t * Math.PI) / 3),
      e.fillRect(-r * 0.22, -r, r * 0.44, r * 2),
      e.restore());
  ((e.fillStyle = `#ffffff`),
    e.fillRect(-r * 0.05, -r * 0.7, r * 0.1, r * 1.4),
    e.beginPath(),
    e.arc(0, -r * 0.45, r * 0.12, 0, Math.PI * 2),
    e.fill(),
    e.restore());
}
function _e(e) {
  let t = me.get(e);
  if (t) return t;
  let [n, r] = ee(ue, 512);
  r.clearRect(0, 0, ue, 512);
  let i = ce[e];
  (j.w,
    e === `private`
      ? ((r.fillStyle = `#163a7a`),
        r.beginPath(),
        r.moveTo(P(-4), F(0.92)),
        r.lineTo(P(-3.2), F(0.98)),
        r.bezierCurveTo(P(-1), F(1.02), P(1.2), F(1.06), P(3), F(1.62)),
        r.lineTo(P(3), F(1.32)),
        r.bezierCurveTo(P(1.2), F(0.8), P(-1), F(0.74), P(-3.2), F(0.72)),
        r.lineTo(P(-4), F(0.7)),
        r.closePath(),
        r.fill(),
        (r.strokeStyle = `#4fb3ff`),
        (r.lineWidth = 7),
        r.beginPath(),
        r.moveTo(P(-3.4), F(1.07)),
        r.bezierCurveTo(P(-1), F(1.12), P(1.2), F(1.18), P(3), F(1.74)),
        r.stroke(),
        I(
          r,
          k[0],
          P(-0.98),
          F(0.98) - 2,
          P(0.22) - P(-0.98),
          26,
          `#ffffff`,
          800,
        ),
        I(
          r,
          k[1],
          P(-0.98),
          F(0.86) - 2,
          P(0.22) - P(-0.98),
          15,
          `#cfe6ff`,
          700,
        ))
      : e === `news`
        ? ((r.fillStyle = `#ffffff`),
          r.beginPath(),
          r.moveTo(P(-4), F(1.05)),
          r.bezierCurveTo(P(-1.5), F(1.1), P(1), F(1.18), P(3), F(1.72)),
          r.lineTo(P(3), F(1.56)),
          r.bezierCurveTo(P(1), F(1), P(-1.5), F(0.94), P(-4), F(0.9)),
          r.closePath(),
          r.fill(),
          (r.fillStyle = `#ff7a1a`),
          r.beginPath(),
          r.moveTo(P(-3.6), F(0.86)),
          r.bezierCurveTo(P(-1.5), F(0.88), P(1), F(0.95), P(3), F(1.48)),
          r.lineTo(P(3), F(1.3)),
          r.bezierCurveTo(P(1), F(0.78), P(-1.5), F(0.7), P(-3.6), F(0.69)),
          r.closePath(),
          r.fill(),
          I(
            r,
            `狂飆新聞`,
            P(-1.1),
            F(1.9),
            P(0.3) - P(-1.1),
            52,
            `#ffffff`,
            900,
          ),
          I(
            r,
            `RUSH NEWS 24`,
            P(-1.1),
            F(1.42),
            P(0.3) - P(-1.1),
            26,
            `#ffd14a`,
            900,
            `Arial Black, Helvetica, sans-serif`,
          ),
          I(
            r,
            `LIVE`,
            P(0.5),
            F(0.9) - 6,
            P(1.4) - P(0.5),
            24,
            `#ffffff`,
            900,
            `Arial Black, Helvetica, sans-serif`,
          ))
        : ((r.fillStyle = `#d4202a`),
          r.beginPath(),
          r.moveTo(P(-4), F(0.8)),
          r.bezierCurveTo(P(-1.5), F(0.8), P(1), F(0.86), P(3), F(1.3)),
          r.lineTo(P(3), F(0.5)),
          r.lineTo(P(-4), F(0.5)),
          r.closePath(),
          r.fill(),
          r.fillRect(P(-2.6), F(2.07), P(3) - P(-2.6), F(1.99) - F(2.07)),
          I(
            r,
            `空中救護`,
            P(-1.08),
            F(1.12),
            P(0.22) - P(-1.08),
            F(0.86) - F(1.12),
            `#d4202a`,
            900,
          ),
          I(
            r,
            `AIR AMBULANCE`,
            P(-1.6),
            F(0.79),
            P(0.4) - P(-1.6),
            F(0.62) - F(0.79),
            `#ffffff`,
            800,
            `Arial Black, Helvetica, sans-serif`,
          ),
          ge(r, P(0.95), F(1.45), 34)),
    he(r, e === `news` ? `#06122e` : `#3b4148`));
  {
    let { x: t, y: n, w: a, h: o } = fe,
      s = (e) => t + ((e - M.z0) / (M.z1 - M.z0)) * a;
    e === `private`
      ? ((r.fillStyle = `#163a7a`),
        r.fillRect(t, n + o * 0.55, a, o * 0.22),
        (r.fillStyle = `#4fb3ff`),
        r.fillRect(t, n + o * 0.45, a, o * 0.05),
        I(
          r,
          i.reg,
          s(3.2),
          n + o * 0.12,
          s(5.6) - s(3.2),
          o * 0.3,
          `#163a7a`,
          900,
          `Arial Black, Helvetica, sans-serif`,
        ))
      : e === `news`
        ? ((r.fillStyle = `#ff7a1a`),
          r.fillRect(t, n + o * 0.4, a, o * 0.16),
          I(
            r,
            `RUSH NEWS`,
            s(3),
            n + o * 0.08,
            s(5.8) - s(3),
            o * 0.3,
            `#ffffff`,
            900,
            `Arial Black, Helvetica, sans-serif`,
          ),
          I(
            r,
            i.reg,
            s(3.4),
            n + o * 0.62,
            s(5.4) - s(3.4),
            o * 0.22,
            `#ffd14a`,
            800,
            `Arial Black, Helvetica, sans-serif`,
          ))
        : ((r.fillStyle = `#d4202a`),
          r.fillRect(t, n + o * 0.5, a, o * 0.3),
          I(
            r,
            i.reg,
            s(3.2),
            n + o * 0.12,
            s(5.6) - s(3.2),
            o * 0.3,
            `#2b2f36`,
            900,
            `Arial Black, Helvetica, sans-serif`,
          ));
  }
  {
    let { x: t, y: n, w: i, h: a } = pe;
    e === `private`
      ? ((r.fillStyle = `#163a7a`),
        r.fillRect(t, n + a * 0.62, i, a * 0.38),
        (r.fillStyle = `#4fb3ff`),
        r.fillRect(t, n + a * 0.54, i, a * 0.06))
      : e === `news`
        ? ((r.fillStyle = `#ff7a1a`),
          r.fillRect(t, n, i, a * 0.3),
          I(
            r,
            `24`,
            t + i * 0.25,
            n + a * 0.36,
            i * 0.5,
            a * 0.5,
            `#ffffff`,
            900,
            `Arial Black, Helvetica, sans-serif`,
          ))
        : ((r.fillStyle = `#d4202a`),
          r.fillRect(t, n + a * 0.66, i, a * 0.34),
          (r.fillStyle = `#d4202a`),
          r.fillRect(t + i * 0.5 - 7, n + a * 0.12, 14, 38),
          r.fillRect(t + i * 0.5 - 19, n + a * 0.12 + 12, 38, 14));
  }
  return ((t = be(n)), me.set(e, t), t);
}
var L = null,
  ve = { u0: 64 / 512, v0: 1 - 448 / 512, u1: 448 / 512, v1: 1 - 64 / 512 };
function ye() {
  if (L) return L;
  let [e, t] = ee(512, 512);
  (t.clearRect(0, 0, 512, 512),
    (t.strokeStyle = `#f4f4f0`),
    (t.lineWidth = 10),
    t.strokeRect(74, 74, 364, 364),
    t.setLineDash([22, 16]),
    (t.lineWidth = 4),
    t.strokeRect(92, 92, 328, 328),
    t.setLineDash([]),
    (t.strokeStyle = `#f2c200`),
    (t.lineWidth = 18),
    t.beginPath(),
    t.arc(256, 256, 138.24, 0, Math.PI * 2),
    t.stroke(),
    (t.fillStyle = `#f4f4f0`));
  let n = 99.84,
    r = 138.24,
    i = 384 * 0.075;
  return (
    t.fillRect(256 - n / 2, 256 - r / 2, i, r),
    t.fillRect(277.12, 256 - r / 2, i, r),
    t.fillRect(256 - n / 2, 256 - i / 2, n, i),
    (L = be(e)),
    L
  );
}
function be(e) {
  let t = new _(e);
  return (
    (t.colorSpace = s),
    (t.premultiplyAlpha = !0),
    (t.anisotropy = 8),
    (t.generateMipmaps = !0),
    (t.minFilter = p),
    (t.magFilter = m),
    (t.needsUpdate = !0),
    (t.name = `vehicle-heli-atlas`),
    (t.onUpdate = () => {
      t.onUpdate = null;
      let e = t.image;
      ((e.width = 1), (e.height = 1));
    }),
    t
  );
}
var xe = new h(0, 3.12, 0),
  Se = new h(-0.36, 2.38, 6.95),
  Ce = 5.35,
  we = new h(0.42, 0.98, -1.8),
  Te = { halfW: 1.2, front: -3.98, back: 2.9, height: 2.75 },
  R = [0, 0, 0],
  z = [0, 0, 0],
  B = [0, 0, 0],
  V = [0, 0, 0],
  H = [0, 0, 0],
  U = [0, 0, 0],
  W = [0, 0, 0],
  G = [0, 0, 0],
  Ee = [0, 0, 0, 0, 0, 0, 0, 0],
  K = (e, t, n, r) => ((e[0] = t), (e[1] = n), (e[2] = r), e),
  De = { color: 16777215, paint: 1, rough: 0.3, metal: 0.05 },
  Oe = { color: 1450027, rough: 0.04, metal: 0.25 },
  ke = { color: 2369323, rough: 0.55, metal: 0.25 },
  Ae = { color: 9212825, rough: 0.35, metal: 0.8 },
  je = { color: 10133927, rough: 0.4, metal: 0.7 },
  Me = { color: 2763823, rough: 0.5, metal: 0.2 },
  Ne = { color: 15909376, rough: 0.5 },
  Pe = { color: 1579291, rough: 0.85 };
function Fe(e, t, n) {
  let r = e.length;
  if (n <= e[0][0]) return e[0][t];
  if (n >= e[r - 1][0]) return e[r - 1][t];
  let i = 0;
  for (; i < r - 2 && e[i + 1][0] < n;) i++;
  let a = e[Math.max(0, i - 1)],
    o = e[i],
    s = e[i + 1],
    c = e[Math.min(r - 1, i + 2)],
    l = (n - o[0]) / (s[0] - o[0]),
    u = a[t],
    d = o[t],
    f = s[t],
    p = c[t],
    m = l * l,
    h = m * l;
  return (
    0.5 *
    (2 * d +
      (-u + f) * l +
      (2 * u - 5 * d + 4 * f - p) * m +
      (-u + 3 * d - 3 * f + p) * h)
  );
}
function Ie(e, t, n, r, i, a, o, s) {
  let c = Math.sin(a),
    l = -Math.cos(a),
    u = 2 / (l > 0 ? o : s);
  return K(
    e,
    n * Math.sign(c) * Math.abs(c) ** +u,
    (r + i) / 2 + ((i - r) / 2) * Math.sign(l) * Math.abs(l) ** +u,
    t,
  );
}
function Le(e, t) {
  let n = t.zs.length,
    r = t.ring,
    i = new Float64Array(n * r * 3),
    a = new Float64Array(n * r * 3),
    o = [0, 0, 0],
    s = [0, 0, 0];
  for (let e = 0; e < n; e++) {
    let n = t.zs[e];
    t.sec(n, o);
    for (let a = 0; a < r; a++) {
      Ie(s, n, o[0], o[1], o[2], (a / r) * Math.PI * 2, t.nUp, t.nDn);
      let c = (e * r + a) * 3;
      ((i[c] = s[0]), (i[c + 1] = s[1]), (i[c + 2] = s[2]));
    }
  }
  for (let e = 0; e < n; e++)
    for (let s = 0; s < r; s++) {
      let c = Math.max(0, e - 1),
        l = Math.min(n - 1, e + 1),
        u = (s - 1 + r) % r,
        d = (s + 1) % r,
        f = [
          i[(l * r + s) * 3] - i[(c * r + s) * 3],
          i[(l * r + s) * 3 + 1] - i[(c * r + s) * 3 + 1],
          i[(l * r + s) * 3 + 2] - i[(c * r + s) * 3 + 2],
        ],
        p = [
          i[(e * r + d) * 3] - i[(e * r + u) * 3],
          i[(e * r + d) * 3 + 1] - i[(e * r + u) * 3 + 1],
          i[(e * r + d) * 3 + 2] - i[(e * r + u) * 3 + 2],
        ],
        m = p[1] * f[2] - p[2] * f[1],
        h = p[2] * f[0] - p[0] * f[2],
        g = p[0] * f[1] - p[1] * f[0],
        _ = Math.hypot(m, h, g) || 1;
      ((m /= _), (h /= _), (g /= _));
      let v = (e * r + s) * 3;
      t.sec(t.zs[e], o);
      let y = (o[1] + o[2]) / 2;
      (m * i[v] + h * (i[v + 1] - y) < 0 && ((m = -m), (h = -h), (g = -g)),
        (a[v] = m),
        (a[v + 1] = h),
        (a[v + 2] = g));
    }
  let c = (e, t, n) =>
      K(e, i[(t * r + n) * 3], i[(t * r + n) * 3 + 1], i[(t * r + n) * 3 + 2]),
    l = (e, t, n) =>
      K(e, a[(t * r + n) * 3], a[(t * r + n) * 3 + 1], a[(t * r + n) * 3 + 2]);
  for (let i = 0; i < n - 1; i++)
    for (let n = 0; n < r; n++) {
      let a = (n + 1) % r;
      (c(R, i, n),
        c(z, i, a),
        c(B, i + 1, a),
        c(V, i + 1, n),
        l(H, i, n),
        l(U, i, a),
        l(W, i + 1, a),
        l(G, i + 1, n));
      let o = (R[0] + z[0] + B[0] + V[0]) / 4,
        s = (R[1] + z[1] + B[1] + V[1]) / 4,
        u = (R[2] + z[2] + B[2] + V[2]) / 4,
        d = (H[0] + U[0] + W[0] + G[0]) / 4,
        f = (H[1] + U[1] + W[1] + G[1]) / 4,
        p = (H[2] + U[2] + W[2] + G[2]) / 4;
      e.style(t.style(o, s, u, d, f, p));
      let m = t.uv
        ? t.uv(
            R[0],
            R[1],
            R[2],
            z[0],
            z[1],
            z[2],
            B[0],
            B[1],
            B[2],
            V[0],
            V[1],
            V[2],
            d,
          )
        : !1;
      e.smoothQuadUV(R, z, B, V, H, U, W, G, m ? Ee : void 0);
    }
  let u = (n, i, a) => {
    for (let o = 0; o < r; o++) {
      let s = (o + 1) % r;
      (c(R, n, o), c(z, n, s));
      let l = (R[0] + z[0] + i[0]) / 3,
        u = (R[1] + z[1] + i[1]) / 3,
        d = (R[2] + z[2] + i[2]) / 3;
      (e.style(t.style(l, u, d, 0, 0, a)), K(H, 0, 0, a), e.tri(R, z, i, H));
    }
  };
  (t.capFront && u(0, t.capFront, -1), t.capBack && u(n - 1, t.capBack, 1));
}
function Re(e, t, n, r) {
  let i = [],
    a = Math.max(1, Math.ceil((t - e) / n));
  for (let n = 0; n <= a; n++) i.push(e + ((t - e) * n) / a);
  for (let n of r) n > e && n < t && i.push(n);
  return (
    i.sort((e, t) => e - t),
    i.filter((e, t) => t === 0 || e - i[t - 1] > 0.02)
  );
}
function q(e, t, n, r, i, a, o, s, c = s, l = 8, u = !1) {
  let d = i - t,
    f = a - n,
    p = o - r,
    m = Math.hypot(d, f, p) || 1;
  ((d /= m), (f /= m), (p /= m));
  let h = -p,
    g = 0,
    _ = d;
  Math.abs(f) > 0.9 && ((h = 1), (g = 0), (_ = 0));
  let v = Math.hypot(h, g, _);
  ((h /= v), (g /= v), (_ /= v));
  let y = f * _ - p * g,
    b = p * h - d * _,
    x = d * g - f * h;
  ((v = Math.hypot(y, b, x)), (y /= v), (b /= v), (x /= v));
  for (let m = 0; m < l; m++) {
    let v = (m / l) * Math.PI * 2,
      S = ((m + 1) / l) * Math.PI * 2,
      C = Math.cos(v),
      w = Math.sin(v),
      T = Math.cos(S),
      ee = Math.sin(S),
      te = h * C + y * w,
      ne = g * C + b * w,
      re = _ * C + x * w,
      ie = h * T + y * ee,
      E = g * T + b * ee,
      D = _ * T + x * ee;
    (K(R, t + te * s, n + ne * s, r + re * s),
      K(z, t + ie * s, n + E * s, r + D * s),
      K(B, i + ie * c, a + E * c, o + D * c),
      K(V, i + te * c, a + ne * c, o + re * c),
      K(H, te, ne, re),
      K(U, ie, E, D),
      K(W, ie, E, D),
      K(G, te, ne, re),
      e.smoothQuadUV(R, z, B, V, H, U, W, G),
      u &&
        (K(W, -d, -f, -p),
        e.tri(K(B, t, n, r), R, z, W),
        K(W, d, f, p),
        e.tri(
          K(B, i, a, o),
          K(R, i + te * c, a + ne * c, o + re * c),
          K(z, i + ie * c, a + E * c, o + D * c),
          W,
        )));
  }
}
function ze(e, t, n, r, i, a = 8, o = 5, s = 1) {
  for (let c = 0; c < o; c++) {
    let l = (c / o) * Math.PI,
      u = ((c + 1) / o) * Math.PI;
    for (let o = 0; o < a; o++) {
      let c = (o / a) * Math.PI * 2,
        d = ((o + 1) / a) * Math.PI * 2,
        f = [
          [l, c],
          [l, d],
          [u, d],
          [u, c],
        ],
        p = [R, z, B, V],
        m = [H, U, W, G];
      for (let e = 0; e < 4; e++) {
        let [a, o] = f[e],
          c = Math.sin(a) * Math.cos(o),
          l = Math.cos(a),
          u = Math.sin(a) * Math.sin(o);
        (K(p[e], t + c * i, n + l * i * s, r + u * i), K(m[e], c, l, u));
      }
      e.smoothQuadUV(R, z, B, V, H, U, W, G);
    }
  }
}
function Be(e, t, r, i, a) {
  let s = t.length,
    c = t.map(([e, t]) => new d(e, t)),
    l = o.triangulateShape(c, []),
    u = (e, t, r) => {
      let i = n.clamp((e - N.z0) / (N.z1 - N.z0), 0, 1);
      return [
        r ? N.u1 - i * (N.u1 - N.u0) : N.u0 + i * (N.u1 - N.u0),
        N.v0 + n.clamp((t - N.y0) / (N.y1 - N.y0), 0, 1) * (N.v1 - N.v0),
      ];
    };
  for (let n of [-1, 1]) {
    let o = n < 0 ? r : i;
    for (let r of l) {
      let [i, s] = t[r[0]],
        [c, l] = t[r[1]],
        [d, f] = t[r[2]];
      (K(H, n, 0, 0),
        a
          ? e.tri(
              K(R, o, s, i),
              K(z, o, l, c),
              K(B, o, f, d),
              H,
              u(i, s, n > 0),
              u(c, l, n > 0),
              u(d, f, n > 0),
            )
          : e.tri(K(R, o, s, i), K(z, o, l, c), K(B, o, f, d), H));
    }
  }
  for (let n = 0; n < s; n++) {
    let [a, o] = t[n],
      [c, l] = t[(n + 1) % s],
      u = l - o,
      d = -(c - a),
      f = Math.hypot(u, d) || 1;
    ((u /= f), (d /= f));
    let p = 0,
      m = 0;
    for (let [e, n] of t) ((p += e / s), (m += n / s));
    (u * ((a + c) / 2 - p) + d * ((o + l) / 2 - m) < 0 && ((u = -u), (d = -d)),
      e.quad(
        K(R, r, o, a),
        K(z, i, o, a),
        K(B, i, l, c),
        K(V, r, l, c),
        K(H, 0, d, u),
      ));
  }
}
var Ve = [
    [-3.98, 0.05, 1.04, 1.14],
    [-3.9, 0.36, 0.88, 1.36],
    [-3.72, 0.6, 0.74, 1.6],
    [-3.42, 0.77, 0.65, 1.83],
    [-3, 0.88, 0.6, 2.01],
    [-2.45, 0.93, 0.575, 2.13],
    [-1.8, 0.95, 0.565, 2.18],
    [-1, 0.95, 0.565, 2.2],
    [-0.2, 0.94, 0.575, 2.2],
    [0.5, 0.91, 0.605, 2.18],
    [1.1, 0.84, 0.675, 2.12],
    [1.6, 0.71, 0.8, 2.05],
    [2.1, 0.53, 0.98, 1.98],
    [2.55, 0.39, 1.19, 1.92],
    [2.9, 0.31, 1.35, 1.89],
  ],
  He = 2.9,
  Ue = 7.05,
  J = (e) => 0.31 + -0.16 * ((e - He) / 4.15),
  We = (e) => 1.62 + (1.8 - 1.62) * ((e - He) / 4.15);
function Y(e, t, r, i, a, o, s, c, l, u, d, f, p) {
  if (Math.abs(p) < 0.28) return !1;
  let m = p > 0,
    h = (e, t, r) => {
      let i = n.clamp((t - A.z0) / (A.z1 - A.z0), 0, 1);
      ((Ee[e * 2] = m ? A.u1 - i * (A.u1 - A.u0) : A.u0 + i * (A.u1 - A.u0)),
        (Ee[e * 2 + 1] =
          A.v0 + n.clamp((r - A.y0) / (A.y1 - A.y0), 0, 1) * (A.v1 - A.v0)));
    };
  return (h(0, r, t), h(1, o, a), h(2, l, c), h(3, f, d), !0);
}
function Ge(e, t, n, r, i) {
  let a = Math.abs(r);
  return (n < -2.42 && t > 1 && t < Fe(Ve, 3, n) - 0.06) ||
    (n < -2.9 && t > 0.68 && t <= 1 && i > -0.75) ||
    (a > 0.55 &&
      t > 1.14 &&
      t < 1.98 &&
      ((n > -2.32 && n < -1.3) || (n > -1.06 && n < 0.24)))
    ? Oe
    : De;
}
function Ke(e) {
  (Le(e, {
    zs: Re(
      -3.9,
      2.9,
      0.18,
      [
        -3.72, -3.42, -3, -2.9, -2.42, -2.32, -1.62, -1.3, -1.06, 0.24, 1.1,
        1.6, 2.1, 2.55,
      ],
    ),
    ring: 28,
    sec: (e, t) => K(t, Fe(Ve, 1, e), Fe(Ve, 2, e), Fe(Ve, 3, e)),
    nUp: 2.5,
    nDn: 3.2,
    style: Ge,
    uv: Y,
    capFront: [0, 1.06, -3.99],
    capBack: null,
  }),
    Le(e, {
      zs: Re(2.86, Ue, 0.45, []),
      ring: 14,
      sec: (e, t) => K(t, J(e), We(e) - J(e), We(e) + J(e)),
      nUp: 2,
      nDn: 2,
      style: () => De,
      uv: (e, t, r, i, a, o, s, c, l, u, d, f, p) => {
        if (Math.abs(p) < 0.35) return !1;
        let m = p > 0,
          h = (e, t, r) => {
            let i = n.clamp((t - M.z0) / (M.z1 - M.z0), 0, 1);
            Ee[e * 2] = m ? M.u1 - i * (M.u1 - M.u0) : M.u0 + i * (M.u1 - M.u0);
            let a = n.clamp((r - We(t)) / J(t), -1, 1) * 0.5 + 0.5;
            Ee[e * 2 + 1] = M.v0 + a * (M.v1 - M.v0);
          };
        return (h(0, r, t), h(1, o, a), h(2, l, c), h(3, f, d), !0);
      },
      capBack: [0, 1.8, 7.109999999999999],
    }));
  {
    let t = [
      [-1.05, 0.12, 1.7, 2.2],
      [-0.75, 0.42, 1.7, 2.46],
      [-0.35, 0.53, 1.7, 2.68],
      [0.3, 0.56, 1.7, 2.74],
      [1, 0.55, 1.7, 2.72],
      [1.6, 0.5, 1.7, 2.62],
      [2.05, 0.4, 1.7, 2.42],
      [2.35, 0.2, 1.7, 2.18],
    ];
    (Le(e, {
      zs: Re(-1.05, 2.35, 0.22, [-0.15, 0.45]),
      ring: 20,
      sec: (e, n) => K(n, Fe(t, 1, e), Fe(t, 2, e), Fe(t, 3, e)),
      nUp: 3,
      nDn: 5,
      style: (e, t, n, r) =>
        Math.abs(r) > 0.6 && t > 2.28 && t < 2.6 && n > -0.15 && n < 0.45
          ? ke
          : De,
      capFront: [0, 1.95, -1.1],
      capBack: [0, 1.95, 2.4],
    }),
      e.style(Ae),
      q(e, 0.2, 2.4, 1.75, 0.27, 2.5, 2.25, 0.1, 0.09, 10, !1),
      e.style(ke),
      q(e, 0.27, 2.5, 2.25, 0.29, 2.53, 2.36, 0.09, 0.085, 10, !0),
      e.style(Ae),
      e.cylY(0, 2.86, 0, 0.11, 0.42, 10, !1),
      e.style(De),
      e.cylY(0, 2.74, 0, 0.32, 0.12, 14, !0, 0.2));
  }
  (e.style(De),
    Be(
      e,
      [
        [6.28, 1.88],
        [6.95, 3.15],
        [7.32, 3.15],
        [7.22, 1.86],
      ],
      -0.065,
      0.065,
      !0,
    ),
    Be(
      e,
      [
        [6.38, 1.66],
        [6.98, 0.98],
        [7.24, 1.02],
        [7.16, 1.68],
      ],
      -0.055,
      0.055,
      !1,
    ),
    e.style(je),
    q(e, 0, 1, 6.95, 0, 0.82, 7.2, 0.025, 0.025, 6, !0),
    e.style(De),
    e.cbox(0, 1.73, 5.55, 2.3, 0.08, 0.55, 0.03, !1));
  for (let t of [-1, 1])
    Be(
      e,
      [
        [5.28, 1.5],
        [5.42, 2.08],
        [5.86, 2.08],
        [5.86, 1.52],
      ],
      t * 1.15 - 0.03,
      t * 1.15 + 0.03,
      !1,
    );
  (e.style(ke), e.cylX(-0.16, 2.38, 6.95, 0.13, 0.24, 10, !0), e.style(je));
  for (let t of [-1, 1]) {
    let n = t * 1.12;
    (q(e, n, 0.05, -2.15, n, 0.05, 1.55, 0.05, 0.05, 8),
      q(e, n, 0.05, -2.15, n, 0.16, -2.5, 0.05, 0.05, 8),
      q(e, n, 0.16, -2.5, n, 0.34, -2.66, 0.05, 0.045, 8, !0),
      q(e, n, 0.05, 1.55, n, 0.1, 1.72, 0.05, 0.045, 8, !0));
    for (let r of [-1.22, 0.78])
      (q(e, n, 0.07, r, t * 0.98, 0.46, r, 0.045, 0.045, 8),
        q(e, t * 0.98, 0.46, r, t * 0.62, 0.6, r, 0.045, 0.045, 8));
    (e.style(Pe),
      e.box(t * 1.18, 0.14, -1.78, 0.2, 0.04, 0.42, ``),
      e.box(t * 1.18, 0.14, -0.4, 0.2, 0.04, 0.42, ``),
      e.style(je));
  }
  for (let t of [-1.22, 0.78]) e.cylX(0, 0.6, t, 0.045, 1.24, 8, !1);
  (e.style(ke),
    e.box(0, 2.24, -1.05, 0.02, 0.22, 0.16, `b`),
    e.box(0, 0.48, -0.6, 0.02, 0.2, 0.18, `t`),
    q(e, 0.32, 1.72, -3.62, 0.36, 1.78, -4, 0.012, 0.012, 5, !0),
    e.style({ color: 16722458, light: O.HEAD, rough: 0.2 }),
    e.box(-1.19, 1.72, 5.58, 0.04, 0.08, 0.14, ``),
    e.style({ color: 1769306, light: O.HEAD, rough: 0.2 }),
    e.box(1.19, 1.72, 5.58, 0.04, 0.08, 0.14, ``),
    e.style({ color: 16777215, light: O.HEAD, rough: 0.2 }),
    e.box(0, 1.98, 7.29, 0.06, 0.08, 0.05, ``),
    e.style({ color: 16720916, light: O.IND_L, rough: 0.2 }),
    ze(e, 0, 2.76, 1.72, 0.07, 8, 4),
    ze(e, 0, 0.6, 0.55, 0.07, 8, 4),
    e.style({ color: 16777215, light: O.BRAKE, rough: 0.2 }),
    e.box(-1.19, 2.06, 5.7, 0.05, 0.06, 0.12, ``),
    e.box(1.19, 2.06, 5.7, 0.05, 0.06, 0.12, ``),
    e.style({ color: 16774365, light: O.REVERSE, rough: 0.1 }),
    e.discZ(0, 0.72, -3.42, 0.11, -1, 10),
    e.style(ke),
    e.cylZ(0, 0.72, -3.36, 0.12, 0.14, 10, !1),
    e.style({ ...ke, variant: 5 }),
    e.box(0, 0.5, -3.08, 0.12, 0.14, 0.12, `t`),
    e.style({ color: 3817286, rough: 0.35, metal: 0.4, variant: 5 }),
    ze(e, 0, 0.38, -3.08, 0.19, 10, 6),
    e.style({ ...Oe, variant: 5 }),
    e.discZ(0, 0.36, -3.26, 0.07, -1, 8),
    e.style({ ...Ae, variant: 6 }),
    e.cylZ(0.55, 0.46, -0.9, 0.13, 0.26, 10, !0),
    e.style({ color: 16774880, light: O.REVERSE, rough: 0.1, variant: 6 }),
    e.discZ(0.55, 0.46, -1.04, 0.11, -1, 10),
    e.style({ ...Ae, variant: 6 }),
    e.box(1.02, 2.1, -0.65, 0.12, 0.12, 0.9, ``),
    e.box(1.3, 2.08, -0.65, 0.52, 0.1, 0.1, ``),
    e.style({ ...ke, variant: 6 }),
    e.cylX(1.5, 2, -0.65, 0.12, 0.22, 10, !0));
}
function qe(e, t, n, r, i, a, o, s, c) {
  let l = (e, c, l) => {
      let u = (e - t) / (n - t),
        d = r + (i - r) * u,
        f = a + (o - a) * u,
        p = -s * u * u,
        m = c === 0 ? -d * 0.35 : c === 2 ? d * 0.65 : -d * 0.05;
      return K(l, e, (c === 1 ? f / 2 : c === 3 ? -f / 2 : 0) + p, m);
    },
    u = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
    d = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
  for (let r = 0; r < 6; r++) {
    let i = t + ((n - t) * r) / 6,
      a = t + ((n - t) * (r + 1)) / 6;
    e.style(a > n - c + 0.001 ? Ne : Me);
    for (let e = 0; e < 4; e++) (l(i, e, u[e]), l(a, e, d[e]));
    let o = (u[0][1] + u[1][1] + u[2][1] + u[3][1]) / 4,
      s = (u[0][2] + u[1][2] + u[2][2] + u[3][2]) / 4;
    for (let t = 0; t < 4; t++) {
      let n = (t + 1) % 4;
      (K(H, 0, (u[t][1] + u[n][1]) / 2 - o, (u[t][2] + u[n][2]) / 2 - s),
        e.quad(u[t], u[n], d[n], d[t], H));
    }
  }
  e.style(Ne);
  for (let e = 0; e < 4; e++) d[e] = l(n, e, d[e]);
  (K(H, 1, 0, 0), e.tri(d[0], d[1], d[2], H), e.tri(d[0], d[2], d[3], H));
}
function Je(e) {
  for (let t = 0; t < 3; t++) {
    let n = new E();
    (qe(n, 0.52, Ce, 0.36, 0.3, 0.07, 0.04, 0.1, 0.22),
      n.style(Ae),
      n.box(0.42, 0, 0.02, 0.32, 0.09, 0.16, ``));
    let r = new l().makeRotationY((t * Math.PI * 2) / 3 + 0.35);
    (e.append(n, r), n.release());
  }
  (e.style(Ae),
    e.cylY(0, 0, 0, 0.3, 0.07, 3, !0),
    e.style(ke),
    e.cylY(0, 0, 0, 0.17, 0.2, 12, !0),
    e.style(Ae),
    Ye(e, 0, 0.1, 0, 0.17));
}
function Ye(e, t, n, r, i) {
  for (let a = 0; a < 3; a++) {
    let o = (a / 3) * (Math.PI / 2),
      s = ((a + 1) / 3) * (Math.PI / 2);
    for (let a = 0; a < 12; a++) {
      let c = (a / 12) * Math.PI * 2,
        l = ((a + 1) / 12) * Math.PI * 2,
        u = [
          [o, c],
          [o, l],
          [s, l],
          [s, c],
        ],
        d = [R, z, B, V],
        f = [H, U, W, G];
      for (let e = 0; e < 4; e++) {
        let [a, o] = u[e],
          s = Math.sin(a) * Math.cos(o),
          c = Math.cos(a),
          l = Math.sin(a) * Math.sin(o);
        (K(d[e], t + s * i, n + c * i * 0.6, r + l * i), K(f[e], s, c, l));
      }
      e.smoothQuadUV(R, z, B, V, H, U, W, G);
    }
  }
}
function Xe(e) {
  for (let t = 0; t < 2; t++) {
    let n = new E();
    qe(n, 0.1, 0.93, 0.14, 0.12, 0.03, 0.02, 0, 0.1);
    let r = new l()
      .makeRotationX(t * Math.PI)
      .multiply(new l().makeRotationZ(Math.PI / 2));
    (e.append(n, r), n.release());
  }
  (e.style(Ae), e.cylX(-0.03, 0, 0, 0.09, 0.12, 10, !0));
}
var Ze = null;
function Qe() {
  if (Ze) return Ze;
  let e = (e) => ((e.userData.keepCpu = !0), e),
    t = new E();
  Ke(t);
  let n = new E();
  Je(n);
  let r = new E();
  Xe(r);
  let i = new E();
  (i.append(t),
    i.append(n, new l().makeTranslation(xe.x, xe.y, xe.z)),
    i.append(r, new l().makeTranslation(Se.x, Se.y, Se.z)));
  let a = i.buildGeometry(),
    o = e(D(a, 0.16));
  a.dispose();
  let s = e(t.buildGeometry()),
    c = e(n.buildGeometry()),
    u = e(r.buildGeometry());
  return (
    (s.name = `vehicle-heli-body`),
    (c.name = `vehicle-heli-rotor`),
    (u.name = `vehicle-heli-tail-rotor`),
    (o.name = `vehicle-heli-far`),
    (Ze = {
      body: s,
      rotor: c,
      tail: u,
      far: o,
      tris:
        (s.attributes.position.count +
          c.attributes.position.count +
          u.attributes.position.count) /
        3,
    }),
    Ze
  );
}
function $e(e, t, n, r = 0) {
  let i = new E(),
    a = t / 2,
    o =
      e === `slab`
        ? { color: 9276806, rough: 0.85 }
        : { color: 4869973, rough: 0.6, metal: 0.3 };
  if (
    (i.style(o),
    i.quadUV(
      [-a, 0, a],
      [a, 0, a],
      [a, 0, -a],
      [-a, 0, -a],
      ve.u0,
      ve.v0,
      ve.u1,
      ve.v1,
    ),
    i.box(0, -n / 2, 0, t, n, t, e === `deck` ? `t` : `tb`),
    e === `deck`)
  ) {
    i.style({ color: 6054247, rough: 0.5, metal: 0.6 });
    let e = a - 0.6;
    for (let [t, a] of [
      [-e, -e],
      [e, -e],
      [e, e],
      [-e, e],
      [0, -e],
      [0, e],
      [-e, 0],
      [e, 0],
    ])
      i.box(t, -n - r / 2, a, 0.22, r, 0.22, `tb`);
    i.style({ color: 8028295, rough: 0.6, metal: 0.5 });
    for (let e of [-1, 1])
      (i.quad(
        [-a - 0.8, -0.22, e * (a + 0.8)],
        [a + 0.8, -0.22, e * (a + 0.8)],
        [a, -0.06, e * a],
        [-a, -0.06, e * a],
        [0, 1, 0],
      ),
        i.quad(
          [e * (a + 0.8), -0.22, -a - 0.8],
          [e * (a + 0.8), -0.22, a + 0.8],
          [e * a, -0.06, a],
          [e * a, -0.06, -a],
          [0, 1, 0],
        ));
  }
  i.style({ color: 3735402, light: O.SIGN, rough: 0.2 });
  for (let e = 0; e <= 4; e++) {
    let n = -a + 0.25 + ((t - 0.5) * e) / 4;
    for (let [e, t] of [
      [n, -a + 0.25],
      [n, a - 0.25],
      [-a + 0.25, n],
      [a - 0.25, n],
    ])
      i.box(e, 0.04, t, 0.14, 0.08, 0.14, `b`);
  }
  let s = i.buildGeometry();
  return ((s.userData.keepCpu = !0), (s.name = `vehicle-heli-pad-${e}`), s);
}
function et() {
  let e = new E();
  (e.style({ color: 4014664, rough: 0.6, metal: 0.4 }),
    e.box(0, 1.35, 0, 0.36, 2.7, 0.36, `b`),
    e.style({ color: 16777215, rough: 0.5 }));
  let t = 0.45,
    n = 1.55,
    r = 2.45,
    i = 0.2,
    a = ve;
  (e.quadUV(
    [-0.45, n, i],
    [t, n, i],
    [t, r, i],
    [-0.45, r, i],
    a.u0,
    a.v0,
    a.u1,
    a.v1,
  ),
    e.quadUV(
      [t, n, -0.2],
      [-0.45, n, -0.2],
      [-0.45, r, -0.2],
      [t, r, -0.2],
      a.u0,
      a.v0,
      a.u1,
      a.v1,
    ),
    e.quadUV(
      [i, n, t],
      [i, n, -0.45],
      [i, r, -0.45],
      [i, r, t],
      a.u0,
      a.v0,
      a.u1,
      a.v1,
    ),
    e.quadUV(
      [-0.2, n, -0.45],
      [-0.2, n, t],
      [-0.2, r, t],
      [-0.2, r, -0.45],
      a.u0,
      a.v0,
      a.u1,
      a.v1,
    ),
    e.style({ color: 3735402, light: O.SIGN, rough: 0.2 }),
    e.box(0, 2.76, 0, 0.3, 0.12, 0.3, `b`));
  let o = e.buildGeometry();
  return ((o.userData.keepCpu = !0), (o.name = `vehicle-heli-lift-sign`), o);
}
var X = {
    SPOOL: 2.5,
    SPOOL_DOWN: 9,
    VMAX: 52,
    VBACK: 11,
    ACCEL: 7,
    DECEL: 5,
    BRAKE: 9,
    SIDE_DAMP: 1.7,
    YAW_HOVER: 1.45,
    YAW_FAST: 0.72,
    YAW_RESP: 5,
    CLIMB: 8,
    DESCEND: 7,
    VACC: 8,
    CEILING: 420,
    AUTOROT: 9.5,
    G: 9.8,
    HP: 1e3,
    FIRE_HP: 150,
    SMOKE_HP: 450,
    FIRE_FUSE: 8,
  },
  tt = C(),
  nt = { x: 0, y: 0, z: 0 },
  Z = new h(),
  rt = [],
  it = new Set([`world-edge`, `tree`, `pole`, `hedge`]),
  at = new Set([`world-edge`]),
  ot = 1;
function st(e, t, n, r, i) {
  let a = e.groundAt(t, n, r + 0.3, 0.5),
    o = e.statics.query(t - 0.25, n - 0.25, t + 0.25, n + 0.25, rt);
  for (let e = 0; e < o; e++) {
    let i = rt[e];
    i.maxY > r + 0.6 ||
      i.maxY <= a ||
      it.has(i.tag) ||
      i.tag.startsWith(`invisible`) ||
      (ct(i, t, n) && (a = i.maxY));
  }
  i.water = !1;
  let s = e.plan.waterLevel;
  return (
    a <= s + 0.05 &&
      e.plan.surfaceAt(t, n) === `water` &&
      ((a = s), (i.water = !0)),
    (i.y = a),
    i
  );
}
function ct(e, t, n) {
  let r = e.kind;
  if (r === 2) return Math.hypot(t - e.cx, n - e.cz) <= e.hx;
  let i = t - e.cx,
    a = n - e.cz;
  if (r === 1) {
    let t = i * e.cos + a * e.sin;
    ((a = -i * e.sin + a * e.cos), (i = t));
  }
  return Math.abs(i) <= e.hx && Math.abs(a) <= e.hz;
}
var lt = { y: 0, water: !1 },
  ut = [
    [-1.12, -2],
    [1.12, -2],
    [-1.12, 1.35],
    [1.12, 1.35],
    [0, -0.3],
  ],
  dt = class {
    env;
    id = 1e6 + ot++;
    kind = `helicopter`;
    livery;
    spec;
    object = new u();
    seat = new c();
    body;
    maxHealth = X.HP;
    health = X.HP;
    color;
    driver = `none`;
    sirenOn = !1;
    locked = !1;
    controls = { throttle: 0, brake: 0, steer: 0, handbrake: !1 };
    inPitch = 0;
    inYaw = 0;
    inColl = 0;
    vx = 0;
    vy = 0;
    vz = 0;
    heading = 0;
    yawRate = 0;
    pitch = 0;
    bank = 0;
    rpm = 0;
    rotorA = 0;
    grounded = !0;
    agl = 0;
    ground = 0;
    overWater = !1;
    destroyed = !1;
    destroyedAt = -1;
    onFire = !1;
    fireFuse = 1 / 0;
    sinking = 0;
    used = !1;
    reported = !1;
    strikeT = -10;
    hitT = -10;
    smokeT = 0;
    dustT = 0;
    loop = null;
    thrustA = 0.4;
    lastY = 0;
    wobT = Math.random() * 10;
    mats;
    bodyMesh;
    rotorMesh;
    tailMesh;
    farMesh;
    disc;
    discMat;
    near = !0;
    constructor(e, t, n, r, a, o) {
      this.env = e;
      let s = (this.livery = ce[t]);
      ((this.color = s.paint),
        (this.spec = {
          kind: `helicopter`,
          name: s.name,
          halfW: 1.2,
          halfL: 3.5,
          height: 3.2,
          mass: 2250,
          maxSpeed: X.VMAX,
          accel: X.ACCEL,
          twoWheeler: !1,
          seats: 6,
          colors: [s.paint],
        }));
      let c = e.geos;
      this.mats = e.material(s);
      let l = (e, t, n) => {
        let r = new i(e, this.mats.mat);
        return (
          (r.name = t),
          (r.castShadow = n),
          (r.receiveShadow = !0),
          (r.customDepthMaterial = this.mats.depth),
          r
        );
      };
      ((this.bodyMesh = l(c.body, `vehicle-heli-body`, !0)),
        (this.rotorMesh = l(c.rotor, `vehicle-heli-rotor`, !0)),
        this.rotorMesh.position.copy(xe),
        (this.rotorMesh.rotation.y = Math.random() * Math.PI * 2),
        (this.tailMesh = l(c.tail, `vehicle-heli-tail-rotor`, !1)),
        this.tailMesh.position.copy(Se),
        (this.farMesh = l(c.far, `vehicle-heli-far`, !0)),
        (this.farMesh.visible = !1),
        (this.discMat = e.discMaterial()),
        (this.disc = new i(mt(), this.discMat)),
        (this.disc.name = `vehicle-heli-disc`),
        this.disc.position.set(xe.x, xe.y + 0.03, xe.z),
        (this.disc.renderOrder = 5),
        (this.disc.visible = !1),
        this.seat.position.copy(we),
        (this.seat.userData = { kind: `helicopter`, pelvis: [0, 0, 0] }),
        (this.object.name = `heli-${t}`),
        this.object.add(
          this.bodyMesh,
          this.rotorMesh,
          this.tailMesh,
          this.farMesh,
          this.disc,
          this.seat,
        ),
        (this.body = {
          id: x(),
          kind: `vehicle`,
          owner: `vehicles-heli`,
          x: n,
          y: r,
          z: a,
          heading: o,
          halfW: 1.25,
          halfL: 3.55,
          radius: 3.8,
          height: Te.height,
          vx: 0,
          vz: 0,
          mass: 2250,
          active: !0,
          userData: { heli: this, noJack: !0, kind: `helicopter` },
          onDamage: (e) => this.onDamage(e),
          onImpact: (e, t) => this.onImpact(e, t),
        }));
      let u = this.mats.mat.vu;
      (u.uPaint.value.setHex(s.paint),
        u.uVarA.value.set(0, 0, 0, 0),
        u.uVarB.value.set(...s.varB),
        u.uState.value.set(0, 0, 0, 0),
        u.uSig.value.set(0, 0, 0, 0.5),
        this.place(n, r, a, o),
        e.ctx.dynamics.add(this.body));
    }
    get x() {
      return this.object.position.x;
    }
    get y() {
      return this.object.position.y;
    }
    get z() {
      return this.object.position.z;
    }
    get speed() {
      return (
        this.vx * Math.sin(this.heading) - this.vz * Math.cos(this.heading)
      );
    }
    get kmh() {
      return Math.hypot(this.vx, this.vz) * 3.6;
    }
    get hSpeed() {
      return Math.hypot(this.vx, this.vz);
    }
    get piloted() {
      return this.driver === `player`;
    }
    place(e, t, n, r) {
      (this.object.position.set(e, t, n),
        (this.heading = r),
        (this.vx = this.vy = this.vz = 0),
        (this.yawRate = 0),
        (this.pitch = this.bank = 0),
        (this.grounded = !0),
        (this.lastY = t),
        (this.ground = t),
        (this.agl = 0),
        this.syncBody(),
        this.object.rotation.set(0, -r, 0, `YXZ`),
        this.object.updateMatrixWorld(!0));
    }
    hits = [];
    hurt(e, t = ``) {
      if (!(this.destroyed || e <= 0)) {
        if (
          (this.hits.push({
            t: Math.round(this.env.ctx.time.elapsed * 10) / 10,
            why: t,
            dmg: Math.round(e),
          }),
          this.hits.length > 8 && this.hits.shift(),
          (this.health -= e),
          this.health <= 0)
        ) {
          ((this.health = 0), this.explode());
          return;
        }
        this.health <= X.FIRE_HP &&
          !this.onFire &&
          ((this.onFire = !0), (this.fireFuse = X.FIRE_FUSE));
      }
    }
    onDamage(e) {
      let t =
        e.source === `explosion` ? 1.4 : e.source === `vehicle` ? 0.5 : 0.6;
      this.hurt(e.amount * t, e.source);
    }
    onImpact(e, t) {
      let n = Math.hypot(e, t) / this.spec.mass;
      (n > 2 && this.hurt(0.8 * (n * n - 4), `rammed`),
        this.grounded &&
          !this.destroyed &&
          ((this.vx += (e / this.spec.mass) * 0.3),
          (this.vz += (t / this.spec.mass) * 0.3)));
    }
    explode() {
      if (this.destroyed) return;
      let e = this.env.ctx;
      ((this.destroyed = !0),
        (this.destroyedAt = e.time.elapsed),
        (this.health = 0),
        (this.onFire = !1),
        (this.fireFuse = 1 / 0),
        this.mats.mat.vu.uState.value.set(0, 0, 0, 1),
        (this.mats.mat.vu.uSig.value.x = 0));
      let t = this.x,
        n = this.y,
        r = this.z;
      (this.env.fx.explosion(t, n + 0.6, r, 1.5, this.livery.paint),
        this.env.onDestroyed(this));
    }
    repair() {
      this.destroyed ||
        ((this.health = X.HP), (this.onFire = !1), (this.fireFuse = 1 / 0));
    }
    update(e, t, n, r, i) {
      let a = this.piloted && !this.destroyed;
      if (
        ((this.rpm = a
          ? Math.min(1, this.rpm + e / X.SPOOL)
          : Math.max(0, this.rpm - e / (this.destroyed ? 1.2 : X.SPOOL_DOWN))),
        this.onFire &&
          !this.destroyed &&
          ((this.fireFuse -= e), this.fireFuse <= 0 && this.explode()),
        !this.grounded ||
          this.rpm > 0 ||
          this.hSpeed > 0.05 ||
          Math.abs(this.vy) > 0.05 ||
          this.sinking > 0)
      ) {
        let t = Math.hypot(this.vx, this.vy, this.vz),
          n = S(Math.ceil((t * e) / 0.4), 1, 8),
          r = e / n;
        for (let e = 0; e < n; e++) this.step(r, a);
        this.syncBody();
      }
      (this.sinking > 0 && (this.sinking += e),
        this.visuals(e, t, n, r, i),
        this.sound(e, t, n, r));
    }
    step(e, t) {
      let n = this.env.ctx,
        r = X,
        i = this.object.position,
        a = this.destroyed
          ? 0
          : t
            ? y(0.72, 1, this.rpm)
            : y(0.25, 0.85, this.rpm),
        o = Math.sin(this.heading),
        s = -Math.cos(this.heading),
        c = Math.cos(this.heading),
        l = Math.sin(this.heading),
        u = this.vx * o + this.vz * s,
        d = this.vx * c + this.vz * l;
      if (this.grounded) {
        let n = Math.exp(-6 * e);
        ((u *= n),
          (d *= n),
          (this.yawRate = 0),
          (this.vy = Math.min(this.vy, 0)),
          t &&
            this.inColl > 0.05 &&
            a > 0.97 &&
            ((this.grounded = !1), (this.vy = 0.8)));
      } else {
        let n = t ? this.inPitch : 0,
          o = n >= 0 ? n * r.VMAX : n * r.VBACK,
          s;
        s =
          Math.abs(o) > Math.abs(u) && o * u >= 0
            ? r.ACCEL * (1 - 0.55 * (u / r.VMAX) ** 2)
            : n === 0
              ? r.DECEL
              : r.BRAKE;
        let c = o - u,
          l = s * e * (t ? a : 0.15 * a);
        ((u += S(c, -l, l)), a < 0.5 && (u *= 1 - 0.12 * e));
        let f = d * Math.exp(-r.SIDE_DAMP * e);
        (Math.abs(u) > 1 &&
          (u += Math.sign(u) * (Math.abs(d) - Math.abs(f)) * 0.5),
          (d = f));
        let p = w(r.YAW_HOVER, r.YAW_FAST, S(Math.abs(u) / r.VMAX, 0, 1)),
          m = t
            ? this.inYaw * p
            : this.destroyed
              ? this.yawRate
              : 1.1 * (1 - 0.6 * a);
        ((this.yawRate += (m - this.yawRate) * Math.min(1, r.YAW_RESP * e)),
          (this.heading = te(this.heading + this.yawRate * e)));
        let h;
        if (t) {
          let e = this.inColl;
          ((h = e > 0 ? e * r.CLIMB : e < 0 ? e * r.DESCEND : 0),
            e < 0
              ? (h = Math.max(h, -(0.9 + this.agl * 0.85)))
              : e === 0 &&
                this.agl < 0.7 &&
                Math.hypot(u, d) < 2.5 &&
                (h = -0.6),
            (h = Math.min(h, ((this.env.ceiling ?? r.CEILING) - i.y) * 0.6)));
        } else h = this.destroyed ? -40 : -3;
        let g = this.vy + S(h - this.vy, -r.VACC * e, r.VACC * e),
          _ = this.vy - r.G * e;
        this.vy = w(_, g, a);
        let v = this.destroyed ? 40 : this.rpm > 0.15 ? r.AUTOROT : 30;
        this.vy < -v && (this.vy = -v);
      }
      ((this.vx = o * u + c * d),
        (this.vz = s * u + l * d),
        (i.x += this.vx * e),
        (i.y += this.vy * e),
        (i.z += this.vz * e),
        this.collide(o, s),
        this.separate(o, s));
      let f = -1 / 0,
        p = !1,
        m = Math.cos(this.heading),
        h = Math.sin(this.heading);
      for (let e = 0; e < ut.length; e++) {
        let [t, r] = ut[e];
        (st(n, i.x + t * m - r * h, i.z + t * h + r * m, i.y, lt),
          lt.y > f && ((f = lt.y), (p = lt.water)));
      }
      if (
        ((this.ground = f),
        (this.overWater = p),
        (this.agl = Math.max(0, i.y - f)),
        i.y <= f + 0.001)
      ) {
        let e = -this.vy;
        if (((i.y = f), !this.grounded)) {
          this.grounded = !0;
          let n = Math.hypot(this.vx, this.vz),
            r = 0;
          (e > 3.5 && (r += 7 * (e * e - 12)),
            n > 9 && (r += 1.2 * (n * n - 81)),
            r > 0 &&
              (this.hitFx(i.x, f + 0.2, i.z, 0, 0, Math.min(1, r / 300)),
              this.collision(e, `ground`),
              !t && e > 11
                ? this.hurt(X.HP, `crash`)
                : this.hurt(r, `landing ${e.toFixed(1)} m/s`)));
        }
        ((this.vy = 0),
          p && !this.destroyed && this.sinking === 0 && (this.sinking = 0.001));
      } else this.grounded && i.y > f + 0.06 && (this.grounded = !1);
      this.sinking > 0 &&
        ((i.y = f - Math.min(3.2, this.sinking * 0.6)),
        (this.vx *= 0.95),
        (this.vz *= 0.95));
    }
    collide(e, t) {
      let n = this.env.ctx,
        r = this.object.position,
        i = n.time.elapsed,
        a = ft;
      for (let o = 0; o < a.length; o++) {
        let [s, c, l, u, d] = a[o];
        if (d === 2 && this.rpm < 0.02 && this.grounded) continue;
        ((nt.x = r.x + e * -s), (nt.y = r.y + l), (nt.z = r.z + t * -s));
        let f = nt.x,
          p = nt.z;
        if ((n.statics.resolveCircle(nt, c, u, tt), !tt.hit && tt.depth <= 0))
          continue;
        let m = nt.x - f,
          h = nt.z - p,
          g = Math.hypot(m, h);
        if (g < 1e-5) continue;
        let _ = m / g,
          v = h / g;
        ((r.x += m), (r.z += h));
        let y = this.vx * _ + this.vz * v,
          b = tt.tag;
        if (y < 0) {
          let e = d === 2 ? 0.6 : 0.25;
          ((this.vx -= (1 + e) * y * _), (this.vz -= (1 + e) * y * v));
        }
        let x = Math.max(0, -y);
        if (!(at.has(b) || b.startsWith(`invisible`))) {
          if (d === 2) {
            if (this.rpm > 0.3 && i - this.strikeT > 0.25) {
              ((this.strikeT = i),
                (this.vx += _ * 3),
                (this.vz += v * 3),
                (this.yawRate += (Math.random() < 0.5 ? -1 : 1) * 1.2));
              let e = r.x - _ * Ce,
                t = r.z - v * Ce;
              (this.env.fx.sparks(e, r.y + xe.y, t, _, v, 22, 9),
                this.collision(6 + x, b),
                this.hurt(
                  40 + 3 * Math.hypot(this.vx, this.vz) + 14 * x,
                  `rotor strike (${b})`,
                ),
                this.env.onRotorStrike?.(this));
            }
          } else
            x > 3.5 &&
              i - this.hitT > 0.2 &&
              ((this.hitT = i),
              this.hitFx(
                nt.x - _ * c,
                r.y + l + u * 0.4,
                nt.z - v * c,
                _,
                v,
                Math.min(1, x / 20),
              ),
              this.collision(x, b),
              this.hurt(1.6 * (x * x - 12), `hit ${b} ${x.toFixed(1)} m/s`));
        }
      }
    }
    separate(e, t) {
      let n = this.object.position,
        r = n.x + e * 0.55,
        i = n.z + t * 0.55;
      for (let e of this.env.helis()) {
        if (e === this || Math.abs(e.y - n.y) > 3.2) continue;
        let t = r - e.body.x,
          a = i - e.body.z,
          o = Math.hypot(t, a);
        if (o >= 3.4 || o < 1e-4) continue;
        let s = t / o,
          c = a / o,
          l = 3.4 - o;
        ((n.x += s * l), (n.z += c * l));
        let u = this.vx * s + this.vz * c;
        u < 0 &&
          ((this.vx -= 1.3 * u * s),
          (this.vz -= 1.3 * u * c),
          -u > 3.5 &&
            (this.hurt(1.6 * (u * u - 12), `helicopter`),
            e.hurt(1 * (u * u - 12), `helicopter`)));
      }
    }
    collision(e, t) {
      let n = this.env.ctx;
      try {
        n.events.emit(`vehicle:collision`, {
          pos: new h(this.x, this.y + 1, this.z),
          impulse: Math.round(e * 100) / 100,
          vehicleId: this.id,
          other: t,
        });
      } catch {}
      if (this.piloted)
        try {
          (n.cameraRig.shake(S(e * 0.05, 0.1, 1)),
            n.input.rumble(S(e / 18, 0.2, 1), 160));
        } catch {}
    }
    hitFx(e, t, n, r, i, a) {
      let o = this.env.fx;
      o.sparks(e, t, n, r, i, Math.round(6 + 14 * a), 4 + 6 * a);
      for (let s = 0; s < 2 + 4 * a; s++)
        o.smokePuff(
          e,
          t,
          n,
          r * 2,
          1,
          i * 2,
          0.6,
          2.4,
          1.2,
          0.55,
          0.55,
          0.55,
          0.4,
          2,
          0.4,
        );
    }
    syncBody() {
      let e = this.body,
        t = this.object.position,
        n = Math.sin(this.heading),
        r = -Math.cos(this.heading);
      ((e.x = t.x + n * 0.55),
        (e.z = t.z + r * 0.55),
        (e.y = t.y),
        (e.heading = this.heading),
        (e.vx = this.vx),
        (e.vz = this.vz));
    }
    visuals(e, t, n, r, i) {
      let a = this.env.ctx,
        o = this.object;
      if (this.grounded)
        ((this.pitch = T(this.pitch, 0, 8, e)),
          (this.bank = T(this.bank, 0, 8, e)));
      else {
        let t = Math.sin(this.heading),
          n = -Math.cos(this.heading),
          r = Math.cos(this.heading),
          i = Math.sin(this.heading),
          a = this.vx * t + this.vz * n,
          o = this.vx * r + this.vz * i,
          s = e > 0 ? (a - this.vFa) / e : 0,
          c = e > 0 ? (o - this.vSa) / e : 0;
        ((this.vFa = a),
          (this.vSa = o),
          (this.aFs = T(this.aFs, S(s, -12, 12), 4, e)),
          (this.aSs = T(this.aSs, S(c, -12, 12), 4, e)));
        let l = S(-0.032 * this.aFs - 0.0021 * a, -0.3, 0.24),
          u = S(
            -this.yawRate * Math.abs(a) * 0.021 - 0.03 * this.aSs,
            -0.55,
            0.55,
          );
        this.wobT += e;
        let d =
          this.rpm > 0.9 && !this.grounded
            ? 1 - S(Math.hypot(a, o) / 8, 0, 1)
            : 0;
        ((this.pitch = T(
          this.pitch,
          l + d * 0.012 * Math.sin(this.wobT * 1.3),
          3,
          e,
        )),
          (this.bank = T(
            this.bank,
            u + d * 0.014 * Math.sin(this.wobT * 0.9 + 1),
            3.5,
            e,
          )),
          this.destroyed && (this.bank = T(this.bank, 0.35, 1, e)));
      }
      (o.rotation.set(this.pitch, -this.heading, this.bank, `YXZ`),
        (this.rotorA += this.rpm * 31 * e),
        this.rotorA > 1e4 && (this.rotorA -= Math.PI * 2 * 1e3),
        (this.rotorMesh.rotation.y = -this.rotorA),
        (this.tailMesh.rotation.x = this.rotorA * 4.6));
      let s = y(0.35, 1, this.rpm);
      ((this.disc.visible = s > 0.01 && !this.destroyed),
        this.disc.visible &&
          ((this.discMat.opacity = 0.5 * s),
          (this.disc.rotation.y = -this.rotorA * 0.13)));
      let c = Math.hypot(o.position.x - t, o.position.y - n, o.position.z - r),
        l = this.rpm > 0 || this.piloted || c < 95;
      (l !== this.near &&
        ((this.near = l),
        (this.bodyMesh.visible = this.rotorMesh.visible = l),
        (this.farMesh.visible = !l)),
        (this.tailMesh.visible = l && c < 70));
      let u = this.mats.mat.vu,
        d = this.rpm > 0.04 && !this.destroyed,
        f = a.time.elapsed,
        p = (f + (this.id % 7) * 0.13) % 1.3,
        m = d && (p < 0.05 || (p > 0.16 && p < 0.21)) ? 1 : 0,
        h = d && (i > 0.25 || this.agl < 30) ? 1 : 0;
      if (
        (u.uState.value.set(+!!d, m, h, +!!this.destroyed),
        (u.uSig.value.x = +!!d),
        (this.mats.mat.envMapIntensity = this.env.ownEnv() ? 1 - 0.8 * i : 1),
        c > 260)
      )
        return;
      let g = this.env.fx,
        _ = o.position;
      if (i > 0.2 && d) {
        if ((o.updateMatrixWorld(), m))
          for (let e of [-1.19, 1.19])
            (Z.set(e, 2.06, 5.7).applyMatrix4(o.matrixWorld),
              g.sprite(Z.x, Z.y, Z.z, 1.2, 1, 1, 1, 1.1 * i));
        if (
          ((f * 1.45 + 0) % 1 < 0.5 &&
            (Z.set(0, 2.76, 1.72).applyMatrix4(o.matrixWorld),
            g.sprite(Z.x, Z.y, Z.z, 0.55, 1, 0.15, 0.08, 0.7 * i)),
          h && this.agl < 45)
        ) {
          Z.set(0, 0, -3.4 - this.agl * 0.35).applyMatrix4(o.matrixWorld);
          let e = 3 + this.agl * 0.25;
          g.pool(
            Z.x,
            this.ground + 0.03,
            Z.z,
            this.heading,
            e,
            e * 1.3,
            1,
            0.95,
            0.85,
            0.55 * i * (1 - this.agl / 50),
          );
        }
      }
      let v = g.density;
      if (this.rpm > 0.45 && this.agl < 14 && !this.destroyed) {
        let t = (1 - this.agl / 14) * this.rpm;
        for (this.dustT -= e * t * 40 * v; this.dustT < 0;) {
          this.dustT += 1;
          let e = Math.random() * Math.PI * 2,
            n = 2.5 + Math.random() * 3.5,
            r = Math.cos(e),
            i = Math.sin(e),
            a = this.overWater,
            o = a ? 0.86 : 0.6 + Math.random() * 0.08;
          g.smokePuff(
            _.x + r * n,
            this.ground + 0.25,
            _.z + i * n,
            r * (7 + Math.random() * 5),
            0.4 + Math.random(),
            i * (7 + Math.random() * 5),
            0.8,
            3.2 + Math.random() * 1.5,
            0.9 + Math.random() * 0.6,
            o,
            a ? 0.9 : o * 0.93,
            a ? 0.95 : o * 0.82,
            (a ? 0.38 : 0.22) * t,
            1.6,
            0.2,
          );
        }
      }
      if (
        (this.health < X.SMOKE_HP || this.destroyed) &&
        ((this.smokeT -= e), this.smokeT <= 0)
      ) {
        ((this.smokeT = this.destroyed ? 0.09 : this.onFire ? 0.05 : 0.11),
          o.updateMatrixWorld(),
          Z.set(0, 2.65, 2.55).applyMatrix4(o.matrixWorld));
        let e =
          this.onFire || this.destroyed
            ? 0.08
            : 0.32 * (this.health / X.SMOKE_HP) + 0.08;
        (g.smokePuff(
          Z.x,
          Z.y,
          Z.z,
          this.vx * 0.3 + (Math.random() - 0.5),
          1.5 + Math.random(),
          this.vz * 0.3 + (Math.random() - 0.5),
          0.6,
          3.5,
          2.2,
          e,
          e,
          e,
          0.7,
          0.8,
          1.2,
        ),
          (this.onFire || (this.destroyed && f - this.destroyedAt < 25)) &&
            g.glowParticle(
              0,
              Z.x + (Math.random() - 0.5) * 0.6,
              Z.y,
              Z.z + (Math.random() - 0.5) * 0.6,
              this.vx * 0.2,
              1.5,
              this.vz * 0.2,
              1.1,
              1.8,
              0.45,
              1,
              0.5 + Math.random() * 0.2,
              0.15,
              2.2,
            ));
      }
    }
    vFa = 0;
    vSa = 0;
    aFs = 0;
    aSs = 0;
    sound(e, t, n, r) {
      let i = this.env.ctx,
        a = this.object.position,
        o = Math.hypot(a.x - t, a.y - n, a.z - r),
        s = this.rpm > 0.01 && o < 320 && !this.destroyed;
      if (s && !this.loop)
        try {
          this.loop = i.audio.loop(`helicopter`, {
            x: a.x,
            y: a.y + 2,
            z: a.z,
            volume: 1,
          });
        } catch {
          this.loop = null;
        }
      else if (!s && this.loop) {
        try {
          this.loop.stop();
        } catch {}
        this.loop = null;
      }
      let c = this.loop;
      if (!c) return;
      let l = (a.y - this.lastY) / Math.max(e, 0.001);
      this.lastY = a.y;
      let u =
        S(
          0.32 +
            Math.abs(this.inColl) * 0.28 +
            Math.max(0, l) * 0.03 +
            Math.abs(this.aFs) * 0.03 +
            this.hSpeed * 0.004,
          0.25,
          1,
        ) * this.rpm;
      this.thrustA += (u - this.thrustA) * Math.min(1, e * 2.5);
      try {
        (c.setParam(`rpm`, this.rpm),
          c.setParam(`thrust`, this.thrustA),
          c.setPosition(a.x, a.y + 2, a.z));
      } catch {}
    }
    dispose() {
      let e = this.env.ctx;
      try {
        this.loop?.stop();
      } catch {}
      ((this.loop = null),
        e.dynamics.remove(this.body),
        (this.body.active = !1),
        this.object.removeFromParent(),
        this.env.releaseMaterial(this.mats),
        this.discMat.dispose());
    }
  },
  ft = [
    [-1.1, 1.45, 0.25, 2.5, 0],
    [4.4, 0.55, 1.2, 1.5, 1],
    [6.6, 0.7, 1, 2.2, 1],
    [0, Ce - 0.15, xe.y - 0.15, 0.32, 2],
  ],
  pt = null;
function mt() {
  return (
    pt ||
      ((pt = new f(Ce + 0.05, 40)),
      pt.rotateX(-Math.PI / 2),
      (pt.userData.keepCpu = !0),
      (pt.name = `vehicle-heli-disc`)),
    pt
  );
}
var ht = 0.14,
  gt = 0.45,
  _t = 0.3;
t.add({
  燕鷗直升機: `ターン・ヘリコプター`,
  狂飆新聞直升機: `ラッシュニュース取材ヘリ`,
  空中救護直升機: `ドクターヘリ`,
  "旋翼轉速正常 — 可以起飛": `ローター回転数OK — 離陸できます`,
  "已到城市邊界 — 請掉頭": `市街地の端です — 引き返してください`,
  "直升機：左搖桿 前後飛行／轉向 · RT 上升 · LT 下降 · 放開即懸停 · {enter} 下機": `ヘリ：左スティック 前後・旋回 · RT 上昇 · LT 下降 · 離すとホバリング · {enter} 降りる`,
  "直升機：搖桿 前後飛行／轉向 · 油門踏板 上升 · 煞車踏板 下降 · 放開即懸停": `ヘリ：スティック 前後・旋回 · アクセル 上昇 · ブレーキ 下降 · 離すとホバリング`,
  "直升機：W／S 前進後退 · A／D 轉向 · {handbrake} 上升 · {sprint} 下降 · 放開即懸停 · {enter} 下機": `ヘリ：W／S 前進・後退 · A／D 旋回 · {handbrake} 上昇 · {sprint} 下降 · 離すとホバリング · {enter} 降りる`,
  "按 {interact} 搭電梯到頂樓停機坪": `{interact} でエレベーター：屋上ヘリポートへ`,
  "按 {interact} 搭電梯下樓": `{interact} でエレベーター：地上へ`,
  頂樓停機坪電梯: `屋上ヘリポート用エレベーター`,
  "澀谷 SCRAMBLE SQUARE 頂樓停機坪": `渋谷スクランブルスクエア屋上ヘリポート`,
  代代木公園停機坪: `代々木公園ヘリポート`,
  六本木之丘森大樓頂樓停機坪: `六本木ヒルズ森タワー屋上ヘリポート`,
});
var vt = {
    city: `tokyo`,
    ceiling: 480,
    livery: {
      club: [`東京飛行クラブ`, `TOKYO FLYING CLUB`],
      reg: { private: `JA31TK`, news: `JA24RN`, ambulance: `JA119D` },
      names: {
        private: {
          zh: `燕鷗直升機`,
          en: `Tern helicopter`,
          ja: `ターン・ヘリコプター`,
        },
        news: {
          zh: `狂飆新聞直升機`,
          en: `RUSH NEWS chopper`,
          ja: `ラッシュニュース取材ヘリ`,
        },
        ambulance: {
          zh: `空中救護直升機`,
          en: `Air ambulance`,
          ja: `ドクターヘリ`,
        },
      },
    },
    text: {
      spool: (e) => ({
        zh: `旋翼加速中… ${e}%`,
        en: `Rotor spooling up… ${e}%`,
        ja: `ローター回転上昇中… ${e}%`,
      }),
      ready: {
        zh: `旋翼轉速正常 — 可以起飛`,
        en: `Rotor at speed — ready to lift off`,
        ja: `ローター回転数OK — 離陸できます`,
      },
      jumpWarn: (e) => ({
        zh: `離地 ${e} 公尺！再按一次 {enter} 跳機`,
        en: `${e} m up! Press {enter} again to jump out`,
        ja: `高度 ${e} m！もう一度 {enter} で飛び降りる`,
      }),
      fire: (e) => ({
        zh: `🔥 直升機起火了！快降落並按 {enter} 下機（${e} 秒）`,
        en: `🔥 ON FIRE — land and press {enter} to get out (${e} s)`,
        ja: `🔥 機体火災！着陸して {enter} で降りる（${e} 秒）`,
      }),
      edge: {
        zh: `已到城市邊界 — 請掉頭`,
        en: `City limit — turn back`,
        ja: `市街地の端です — 引き返してください`,
      },
      board: (e) => ({
        zh: `按 {enter} 駕駛${e.zh}`,
        en: `Press {enter} to fly the ${e.en}`,
        ja: `{enter} で${e.ja ?? e.zh}を操縦`,
      }),
      hint: (e) =>
        e === `gamepad`
          ? {
              zh: `直升機：左搖桿 前後飛行／轉向 · RT 上升 · LT 下降 · 放開即懸停 · {enter} 下機`,
              en: `Helicopter: left stick fly / turn · RT climb · LT descend · let go to hover · {enter} get out`,
              ja: `ヘリ：左スティック 前後・旋回 · RT 上昇 · LT 下降 · 離すとホバリング · {enter} 降りる`,
            }
          : e === `touch`
            ? {
                zh: `直升機：搖桿 前後飛行／轉向 · 油門踏板 上升 · 煞車踏板 下降 · 放開即懸停`,
                en: `Helicopter: stick fly / turn · gas pedal climb · brake pedal descend · let go to hover`,
                ja: `ヘリ：スティック 前後・旋回 · アクセル 上昇 · ブレーキ 下降 · 離すとホバリング`,
              }
            : {
                zh: `直升機：W／S 前進後退 · A／D 轉向 · {handbrake} 上升 · {sprint} 下降 · 放開即懸停 · {enter} 下機`,
                en: `Helicopter: W/S fly forward / back · A/D turn · {handbrake} climb · {sprint} descend · let go to hover · {enter} get out`,
                ja: `ヘリ：W／S 前進・後退 · A／D 旋回 · {handbrake} 上昇 · {sprint} 下降 · 離すとホバリング · {enter} 降りる`,
              },
      liftUp: {
        zh: `按 {interact} 搭電梯到頂樓停機坪`,
        en: `Press {interact}: lift to the rooftop helipad`,
        ja: `{interact} でエレベーター：屋上ヘリポートへ`,
      },
      liftDown: {
        zh: `按 {interact} 搭電梯下樓`,
        en: `Press {interact}: lift down to the street`,
        ja: `{interact} でエレベーター：地上へ`,
      },
      liftName: {
        zh: `頂樓停機坪電梯`,
        en: `Rooftop helipad lift`,
        ja: `屋上ヘリポート用エレベーター`,
      },
      alt: { zh: `高度`, en: `ALT`, ja: `高度` },
      spd: { zh: `速度`, en: `SPD`, ja: `速度` },
    },
    pads: [
      {
        id: `shibuya`,
        name: {
          zh: `澀谷 SCRAMBLE SQUARE 頂樓停機坪`,
          en: `Shibuya Scramble Square heliport`,
          ja: `渋谷スクランブルスクエア屋上ヘリポート`,
        },
        lat: 35.6585,
        lon: 139.7022,
        x: -1736.25,
        z: 1381.5,
        heading: 0,
        kind: `painted`,
        y: 225.15,
        size: 14,
        liveries: [`news`, `private`],
      },
      {
        id: `yoyogi`,
        name: {
          zh: `代代木公園停機坪`,
          en: `Yoyogi Park helipad`,
          ja: `代々木公園ヘリポート`,
        },
        lat: 35.672,
        lon: 139.696,
        x: -2122,
        z: 1071,
        heading: 0,
        kind: `slab`,
        size: 15,
        liveries: [`private`, `news`],
      },
      {
        id: `mori`,
        name: {
          zh: `六本木之丘森大樓頂樓停機坪`,
          en: `Roppongi Hills Mori Tower heliport`,
          ja: `六本木ヒルズ森タワー屋上ヘリポート`,
        },
        lat: 35.6604,
        lon: 139.7292,
        x: -1045,
        z: 1042,
        heading: 0,
        kind: `deck`,
        y: 239.95,
        roofY: 238.55,
        size: 14,
        liveries: [`private`, `ambulance`],
      },
    ],
  },
  yt = `
.heli-panel{position:absolute;right:2.2em;bottom:2.4em;display:none;align-items:center;gap:.9em;padding:.55em 1.1em .55em .7em;
border-radius:1.1em;background:rgba(8,10,16,.68);color:#fff;font:600 15px/1.1 system-ui,-apple-system,'PingFang TC','Noto Sans TC',sans-serif;
pointer-events:none;z-index:3;box-shadow:0 4px 18px rgba(0,0,0,.35);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}
.heli-panel.show{display:flex}
.heli-panel .hp-h{width:2.1em;height:2.1em;border-radius:50%;border:2px solid #ffd23f;color:#ffd23f;display:flex;align-items:center;
justify-content:center;font-weight:900;font-size:1.05em}
.heli-panel .hp-c{display:flex;flex-direction:column;align-items:flex-start;min-width:4.6em}
.heli-panel .hp-n{font-size:1.75em;font-weight:800;font-variant-numeric:tabular-nums;letter-spacing:-.02em}
.heli-panel .hp-u{font-size:.7em;opacity:.7;margin-top:.15em;white-space:nowrap}
.heli-panel .hp-bar{width:4.2em;height:.42em;border-radius:.3em;background:rgba(255,255,255,.18);overflow:hidden;margin-top:.35em}
.heli-panel .hp-bar i{display:block;height:100%;background:linear-gradient(90deg,#4fe08a,#b6f36b);transform-origin:left}
.heli-panel.low .hp-bar i{background:linear-gradient(90deg,#ff2d3c,#ff7b5c)}
.heli-panel.fire{background:rgba(160,20,16,.85)}
body.tr-is-touch .heli-panel{bottom:auto;right:calc(env(safe-area-inset-right,0px) + 12px);top:calc(env(safe-area-inset-top,0px) + 66px);
font-size:11px;padding:.4em .9em .4em .5em}
`,
  bt = class {
    ctx;
    labels;
    el = null;
    spd;
    alt;
    spdU;
    altU;
    bar;
    acc = 1;
    shown = !1;
    lang = ``;
    constructor(e, t) {
      ((this.ctx = e), (this.labels = t));
    }
    build() {
      if (typeof document > `u`) return;
      let e = document.createElement(`style`);
      ((e.textContent = yt), document.head.appendChild(e));
      let t = document.querySelector(`.tr-ui`) ?? document.body,
        n = document.createElement(`div`);
      ((n.className = `heli-panel`),
        (n.innerHTML = `<div class="hp-h">H</div><div class="hp-c"><b class="hp-n">0</b><span class="hp-u"></span></div><div class="hp-c"><b class="hp-n">0</b><span class="hp-u"></span><div class="hp-bar"><i></i></div></div>`));
      let r = n.querySelectorAll(`.hp-n`),
        i = n.querySelectorAll(`.hp-u`);
      ((this.spd = r[0]),
        (this.alt = r[1]),
        (this.spdU = i[0]),
        (this.altU = i[1]),
        (this.bar = n.querySelector(`.hp-bar i`)),
        t.appendChild(n),
        (this.el = n));
    }
    t(e) {
      try {
        return this.ctx.t(e);
      } catch {
        return e.zh;
      }
    }
    update(e, t) {
      if (!t) {
        (this.shown && this.el && this.el.classList.remove(`show`),
          (this.shown = !1));
        return;
      }
      this.el || this.build();
      let n = this.el;
      if (
        !n ||
        (this.shown ||
          (n.classList.add(`show`), (this.shown = !0), (this.acc = 1)),
        (this.acc += e),
        this.acc < 0.1)
      )
        return;
      this.acc = 0;
      let r = String(this.ctx.state?.settings?.lang ?? ``);
      ((r !== this.lang || !this.spdU.textContent) &&
        ((this.lang = r),
        (this.spdU.textContent = `${this.t(this.labels.spd)} km/h`),
        (this.altU.textContent = `${this.t(this.labels.alt)} m`)),
        (this.spd.textContent = String(Math.round(t.kmh))),
        (this.alt.textContent = String(Math.max(0, Math.round(t.altitude)))));
      let i = Math.max(0, Math.min(1, t.health / (t.maxHealth || 1e3)));
      ((this.bar.style.transform = `scaleX(${i.toFixed(3)})`),
        n.classList.toggle(`low`, i < 0.4),
        n.classList.toggle(`fire`, t.onFire));
    }
    dispose() {
      (this.el?.remove(), (this.el = null));
    }
  },
  xt = e({ installHeli: () => St }),
  Q = {
    spool: (e) => ({ zh: `旋翼加速中… ${e}%`, en: `Rotor spooling up… ${e}%` }),
    ready: {
      zh: `旋翼轉速正常 — 可以起飛`,
      en: `Rotor at speed — ready to lift off`,
    },
    jumpWarn: (e) => ({
      zh: `離地 ${e} 公尺！再按一次 {enter} 跳機`,
      en: `${e} m up! Press {enter} again to jump out`,
    }),
    fire: (e) => ({
      zh: `🔥 直升機起火了！快降落並按 {enter} 下機（${e} 秒）`,
      en: `🔥 ON FIRE — land and press {enter} to get out (${e} s)`,
    }),
    edge: { zh: `已到城市邊界 — 請掉頭`, en: `City limit — turn back` },
    board: (e) => ({
      zh: `按 {enter} 駕駛${e.zh}`,
      en: `Press {enter} to fly the ${e.en}`,
    }),
    hint: (e) =>
      e === `gamepad`
        ? {
            zh: `直升機：左搖桿 前後飛行／轉向 · RT 上升 · LT 下降 · 放開即懸停 · {enter} 下機`,
            en: `Helicopter: left stick fly / turn · RT climb · LT descend · let go to hover · {enter} get out`,
          }
        : e === `touch`
          ? {
              zh: `直升機：搖桿 前後飛行／轉向 · 油門踏板 上升 · 煞車踏板 下降 · 放開即懸停`,
              en: `Helicopter: stick fly / turn · gas pedal climb · brake pedal descend · let go to hover`,
            }
          : {
              zh: `直升機：W／S 前進後退 · A／D 轉向 · {handbrake} 上升 · {sprint} 下降 · 放開即懸停 · {enter} 下機`,
              en: `Helicopter: W/S fly forward / back · A/D turn · {handbrake} climb · {sprint} descend · let go to hover · {enter} get out`,
            },
    liftUp: {
      zh: `按 {interact} 搭電梯到頂樓停機坪`,
      en: `Press {interact}: lift to the rooftop helipad`,
    },
    liftDown: {
      zh: `按 {interact} 搭電梯下樓`,
      en: `Press {interact}: lift down to the street`,
    },
    liftName: { zh: `頂樓停機坪電梯`, en: `Rooftop helipad lift` },
    alt: { zh: `高度`, en: `ALT` },
    spd: { zh: `速度`, en: `SPD` },
    ...vt.text,
  };
function St(e) {
  let t = e.params,
    n = e.plan.world ?? 1,
    o = null,
    d = new bt(e, Q),
    p = -10,
    m = 0,
    y = 0,
    x = [],
    C = [],
    w = null,
    T = -10,
    ee = -10,
    te = -1e9,
    ne = !1,
    E = null,
    D = null,
    O = new c();
  O.name = `heli-camera-anchor`;
  let k = 0,
    ue = 0,
    de = 0,
    A = 0,
    j = null,
    M = [],
    fe = null,
    N = null,
    pe = null,
    P = () => !e.scene.environment,
    F = (t) => {
      let n = oe({ instanced: !1 });
      return (
        (n.name = `vehicle-heli`),
        (n.map = t),
        (n.envMap = P() ? se(e.renderer.gl) : null),
        { mat: n, depth: ie(n.vu, !1) }
      );
    },
    me = (t) => {
      let n = M.findIndex((e) => e.mat.map === _e(t.id)),
        r = n >= 0 ? M.splice(n, 1)[0] : F(_e(t.id));
      return ((r.mat.envMap = P() ? se(e.renderer.gl) : null), r);
    },
    I = (e) => {
      M.length < 6 ? M.push(e) : (e.mat.dispose(), e.depth.dispose());
    },
    he = () => {
      if (!fe) {
        let e = document.createElement(`canvas`);
        e.width = e.height = 256;
        let t = e.getContext(`2d`),
          n = t.createRadialGradient(128, 128, 6, 128, 128, 128);
        (n.addColorStop(0, `rgba(255,255,255,0)`),
          n.addColorStop(0.1, `rgba(255,255,255,0.18)`),
          n.addColorStop(0.55, `rgba(255,255,255,0.32)`),
          n.addColorStop(0.9, `rgba(255,255,255,0.5)`),
          n.addColorStop(0.97, `rgba(255,255,255,0.62)`),
          n.addColorStop(1, `rgba(255,255,255,0)`),
          (t.fillStyle = n),
          t.fillRect(0, 0, 256, 256),
          (t.globalCompositeOperation = `source-over`));
        for (let e = 0; e < 3; e++) {
          let n = (e * Math.PI * 2) / 3;
          (t.beginPath(),
            t.moveTo(128, 128),
            t.arc(128, 128, 124, n, n + 0.55),
            t.closePath(),
            (t.fillStyle = `rgba(255,255,255,0.16)`),
            t.fill());
        }
        ((t.strokeStyle = `rgba(255,214,60,0.35)`),
          (t.lineWidth = 4),
          t.beginPath(),
          t.arc(128, 128, 121, 0, Math.PI * 2),
          t.stroke());
        let r = new _(e);
        ((r.colorSpace = s), (r.name = `vehicle-heli-disc`), (fe = r));
      }
      let e = new r({
        color: 1316378,
        map: fe,
        transparent: !0,
        depthWrite: !1,
        opacity: 0.5,
        side: 2,
      });
      return ((e.forceSinglePass = !0), (e.name = `vehicle-heli-disc`), e);
    },
    ge = {
      ctx: e,
      get fx() {
        return o;
      },
      get geos() {
        return Qe();
      },
      material: me,
      releaseMaterial: I,
      discMaterial: he,
      ownEnv: P,
      onDestroyed: (e) => Ce(e),
      helis: () => x,
      ceiling: vt.ceiling,
    },
    L = (e) => {
      try {
        e();
      } catch {}
    };
  function ve() {
    for (let t of vt.pads) {
      if (t.world && t.world !== n) continue;
      let r = t.y ?? 0;
      t.y === void 0 && (r = e.groundAt(t.x, t.z, 100, 0.5) + ht);
      let a = {
        def: t,
        y: r,
        heli: null,
        takenAt: -1,
        spawns: 0,
        mesh: null,
        ready: t.kind !== `deck`,
        lift: null,
      };
      if (t.kind !== `slab`) {
        let e = t.size / 2 - 1;
        ((a.lift = {
          gx: 0,
          gz: 0,
          gy: 0,
          found: !1,
          tries: 0,
          rx: t.x - e,
          rz: t.z + e,
          ground: null,
          roof: null,
        }),
          t.lift &&
            Object.assign(a.lift, { gx: t.lift.x, gz: t.lift.z, found: !0 }));
      }
      let o = t.size / 2;
      if (t.kind !== `painted`) {
        j ??= F(ye());
        let n =
            t.kind === `deck` ? Math.max(0.2, r - _t - (t.roofY ?? r - 1)) : 0,
          o = $e(t.kind, t.size, t.kind === `deck` ? _t : gt, n),
          s = new i(o, j.mat);
        ((s.name = `vehicle-heli-pad-${t.id}`),
          s.position.set(t.x, r, t.z),
          (s.rotation.y = -t.heading),
          (s.receiveShadow = !0),
          (s.castShadow = t.kind === `deck`),
          (s.customDepthMaterial = j.depth),
          (s.matrixAutoUpdate = !1),
          s.updateMatrix(),
          (s.visible = !1),
          e.scene.add(s),
          (a.mesh = s));
      }
      (L(
        () =>
          void e.statics.addFloorRect(
            t.x - o,
            t.z - o,
            t.x + o,
            t.z + o,
            r,
            `helipad`,
          ),
      ),
        C.push(a));
    }
  }
  function be() {
    for (let t of C)
      L(() =>
        e.ui.addBlip(`helipad:${t.def.id}`, {
          x: t.def.x,
          z: t.def.z,
          icon: `vehicle`,
          glyph: `H`,
          color: `#ffd23f`,
          label: t.def.name,
        }),
      );
  }
  function xe(t) {
    let n = new b(wt(t.def.id) + t.spawns * 7919);
    t.spawns++;
    let r = n.pick(t.def.liveries),
      i = new dt(ge, r, t.def.x, t.y, t.def.z, t.def.heading);
    return (e.scene.add(i.object), x.push(i), (t.heli = i), i);
  }
  function Se(e) {
    let t = x.indexOf(e);
    if (!(t < 0)) {
      (w === e && Ee(), x.splice(t, 1));
      for (let t of C) t.heli === e && (t.heli = null);
      e.dispose();
    }
  }
  function Ce(t) {
    let n = t.x,
      r = t.y,
      i = t.z;
    (L(() => e.audio.play(`explosion`, { x: n, y: r + 1, z: i, volume: 1 })),
      L(() =>
        e.events.emit(`vehicle:destroyed`, {
          pos: new h(n, r, i),
          vehicleId: t.id,
        }),
      ),
      L(() => e.peds.panic(n, i, 45)),
      L(() => e.traffic.panic(n, i, 45)));
    let a = e.camera.position,
      o = Math.hypot(a.x - n, a.z - i);
    (o < 80 && L(() => e.cameraRig.shake(S(1.3 - o / 60, 0.1, 1))),
      w === t && K(t));
    let s = e.dynamics.query(n, i, 11, Te);
    for (let a = 0; a < s; a++) {
      let o = Te[a];
      if (
        o === t.body ||
        !o.active ||
        Math.abs((o.y ?? 0) - r) > 8 ||
        (o === e.player.body && e.time.elapsed - R < 0.2)
      )
        continue;
      let s = o.x - n,
        c = o.z - i,
        l = Math.hypot(s, c),
        u = 1 - S(l / 11, 0, 1);
      if (u <= 0) continue;
      let d = new h(s / (l || 1), 0.35, c / (l || 1)).normalize();
      (L(() =>
        o.onDamage?.({
          amount: 40 + 260 * u * u,
          source: `explosion`,
          point: new h(o.x, o.y + 1, o.z),
          dir: d,
        }),
      ),
        o.owner !== `vehicles` &&
          L(() =>
            o.onImpact?.(
              d.x * 900 * u * Math.min(4, o.mass / 80),
              d.z * 900 * u * Math.min(4, o.mass / 80),
              t.body,
            ),
          ));
    }
    for (let n of C)
      n.heli === t && ((n.heli = null), (n.takenAt = e.time.elapsed));
  }
  let Te = [],
    R = -10;
  function z(e, t, n) {
    if (E) return 0;
    D = null;
    let r = 3.4;
    for (let i of x) {
      if (
        i.destroyed ||
        i.sinking > 0 ||
        i.locked ||
        !i.grounded ||
        i.hSpeed > 1.5 ||
        w === i ||
        Math.abs(i.y - t) > 1.7
      )
        continue;
      let a = Tt(
        e,
        n,
        i.body.x,
        i.body.z,
        i.heading,
        i.body.halfW,
        i.body.halfL,
      );
      a < r && ((r = a), (D = i));
    }
    return D ? r : 1 / 0;
  }
  function B() {
    D = null;
    let t = e.player;
    E ||
      w ||
      t.mode !== `foot` ||
      t.controlEnabled === !1 ||
      (z(t.position.x, t.position.y, t.position.z) !== 1 / 0 &&
        e.input.pressed(`enter`) &&
        V());
  }
  function V() {
    let t = D;
    if (!t || E) return;
    let n = e.player.position,
      r = Math.sin(t.heading),
      i = -Math.cos(t.heading),
      a = Math.cos(t.heading),
      o = Math.sin(t.heading),
      s = Math.hypot(
        t.x - a * 1.6 + r * 1.8 - n.x,
        t.z - o * 1.6 + i * 1.8 - n.z,
      ),
      c = Math.hypot(
        t.x + a * 1.6 + r * 1.8 - n.x,
        t.z + o * 1.6 + i * 1.8 - n.z,
      ),
      l = c < s ? 1 : -1;
    ((E = {
      h: t,
      t: 0,
      dur: S(Math.min(s, c) / 4.5, 0.25, 0.8),
      fx: n.x,
      fz: n.z,
      side: l,
    }),
      L(() => e.player.setControlEnabled(!1)));
  }
  function H(t) {
    let n = E,
      r = n.h;
    if (r.destroyed || !x.includes(r)) {
      ((E = null), L(() => e.player.setControlEnabled(!0)));
      return;
    }
    let i = Math.sin(r.heading),
      a = -Math.cos(r.heading),
      o = Math.cos(r.heading),
      s = Math.sin(r.heading),
      c = r.x + o * n.side * 1.6 + i * 1.8,
      l = r.z + s * n.side * 1.6 + a * 1.8;
    n.t += t;
    let u = S(n.t / n.dur, 0, 1),
      d = u * u * (3 - 2 * u),
      f = n.fx + (c - n.fx) * d,
      p = n.fz + (l - n.fz) * d,
      m =
        u >= 1
          ? Math.atan2(r.x - f, -(r.z - p))
          : Math.atan2(c - n.fx, -(l - n.fz));
    (L(() => e.player.teleport(f, p, m, r.y + 0.3)),
      e.player.mode === `foot` &&
        (e.player.position.y = Math.max(
          e.player.position.y,
          st(e, f, p, r.y + 0.5, $).y,
        )),
      u >= 1 && ((E = null), L(() => e.player.setControlEnabled(!0)), U(r)));
  }
  function U(t) {
    if (
      (w && w !== t && W(w, !1),
      (w = t),
      (t.driver = `player`),
      (t.locked = !1),
      (T = e.time.elapsed),
      (ee = -10),
      (ne = t.rpm >= 1),
      (k = ue = de = 0),
      !t.used)
    ) {
      t.used = !0;
      for (let n of C)
        n.heli === t && ((n.heli = null), (n.takenAt = e.time.elapsed));
    }
    (Ae(t),
      L(() => e.player.enterVehicle(t.id, t.seat, `drive`, `bus`)),
      L(() => e.player.setSeatVisible?.(!1)),
      L(() => e.cameraRig.follow(O, `bus`)),
      L(() =>
        e.events.emit(`player:enterVehicle`, {
          vehicleId: t.id,
          kind: `helicopter`,
        }),
      ));
    let n = e.time.elapsed;
    n - te > 120 &&
      ((te = n),
      L(() =>
        e.ui.notify(Q.hint(e.input.device), { duration: 7, kind: `info` }),
      ));
  }
  function W(t, n) {
    let r = Math.sin(t.heading),
      i = -Math.cos(t.heading),
      a = Math.cos(t.heading),
      o = Math.sin(t.heading),
      s = t.x - a * 1.6 + r * 1.8,
      c = t.z - o * 1.6 + i * 1.8,
      l = t.y;
    if (!n) {
      let n = [
          [-1, 1.8],
          [1, 1.8],
          [-1, 0.1],
          [1, 0.1],
          [-1, -3.5],
        ],
        u = !1;
      for (let [d, f] of n) {
        let n = t.x + a * d * 1.6 + r * f,
          p = t.z + o * d * 1.6 + i * f;
        if (
          (st(e, n, p, t.y + 0.4, $),
          !(Math.abs($.y - t.y) > 0.8 || $.water) &&
            !e.statics.overlapsRect(
              n - 0.3,
              p - 0.3,
              n + 0.3,
              p + 0.3,
              $.y + 0.6,
            ))
        ) {
          ((s = n), (c = p), (l = $.y), (u = !0));
          break;
        }
      }
      u || (st(e, s, c, t.y + 0.4, $), (l = $.y));
    }
    (G(t),
      L(() => e.player.exitVehicle(s, c, t.heading, { noTumbleDamage: !0 })));
    let u = e.player.position;
    (e.player.mode === `foot` &&
      (u.y = n ? t.y + 0.5 : Math.max(u.y, l + 0.02)),
      L(() =>
        e.events.emit(`player:exitVehicle`, {
          vehicleId: t.id,
          kind: `helicopter`,
        }),
      ));
  }
  function G(t) {
    w === t &&
      ((w = null),
      (t.driver = `none`),
      (t.inPitch = t.inYaw = t.inColl = 0),
      L(() => e.audio.setRadioActive(!1)));
  }
  function Ee() {
    let t = w;
    t &&
      (G(t),
      L(() =>
        e.events.emit(`player:exitVehicle`, {
          vehicleId: t.id,
          kind: `helicopter`,
        }),
      ));
  }
  function K(t) {
    R = e.time.elapsed;
    let n = t.agl > 2;
    W(t, n);
    let r = e.player,
      i = t.heading - Math.PI / 2;
    (L(() => r.knockdown?.(Math.sin(i) * 7, -Math.cos(i) * 7, 4.5)),
      n &&
        r.mode !== `vehicle` &&
        (r.position.y = Math.max(r.position.y, t.y + 0.5)));
    let a = r.health ?? 100,
      o = Math.min(50, Math.max(0, a - 8));
    o > 0 && L(() => r.damage({ amount: o, source: `explosion` }));
  }
  function De(t, n) {
    let r = e.input,
      i = e.player.controlEnabled !== !1,
      a = 0,
      o = 0,
      s = 0;
    if (i) {
      let e = r.device;
      if (((o = r.axis(`steer`)), e === `gamepad`))
        ((a = r.axis(`moveY`)),
          (s =
            r.axis(`throttle`) -
            r.axis(`brake`) +
            +!!r.down(`handbrake`) -
            +!!r.down(`sprint`)));
      else if (e === `touch`) {
        let e = r.virtual;
        ((a = e.moveY), (s = e.throttle - e.brake + +!!r.down(`handbrake`)));
      } else
        ((a = r.axis(`throttle`) - r.axis(`brake`)),
          (s = +!!r.down(`handbrake`) - !!r.down(`sprint`)));
    }
    ((a = S(a, -1, 1)), (o = S(o, -1, 1)), (s = S(s, -1, 1)));
    let c = (e, t, r) => e + S(t - e, -r * n * 1.6, r * n);
    ((k = c(k, a, 3)),
      (ue = c(ue, o, 5)),
      (de = Math.abs(s) < 0.02 ? 0 : c(de, s, 4)),
      Math.abs(de) < 0.02 && s === 0 && (de = 0),
      a === 0 && Math.abs(k) < 0.03 && (k = 0),
      (t.inPitch = k),
      (t.inYaw = ue),
      (t.inColl = de),
      (t.controls.steer = ue),
      (t.controls.throttle = Math.max(0, k)),
      (t.controls.brake = Math.max(0, -k)));
  }
  function Oe(t, n) {
    let r = e.input,
      i = e.time.elapsed;
    if (e.player.mode !== `vehicle` || e.player.vehicleId !== t.id) {
      Ee();
      return;
    }
    if (t.sinking > 1.2) {
      W(t, !1);
      return;
    }
    if ((De(t, n), r.pressed(`enter`) && i - T > 0.5)) {
      t.grounded || (t.agl < 0.8 && t.hSpeed < 4)
        ? W(t, !1)
        : i - ee < 2.5
          ? W(t, !0)
          : ((ee = i),
            L(() =>
              e.ui.notify(Q.jumpWarn(Math.round(t.agl)), {
                duration: 2.5,
                kind: `bad`,
              }),
            ));
      return;
    }
    (r.pressed(`radio`) && L(() => e.audio.nextStation()),
      t.onFire
        ? L(() => e.ui.prompt(Q.fire(Math.max(0, t.fireFuse).toFixed(1))))
        : t.rpm < 1
          ? L(() => e.ui.prompt(Q.spool(Math.floor(t.rpm * 100))))
          : ne ||
            ((ne = !0),
            L(() => e.ui.notify(Q.ready, { duration: 2, kind: `good` }))),
      ke(t),
      e.player.position.set(t.x, t.y, t.z),
      (e.player.heading = t.heading));
  }
  function ke(t) {
    let n = e.plan,
      r = !0;
    try {
      r =
        typeof n.playable == `function`
          ? n.playable(t.x, t.z)
          : typeof n.inCity != `function` || n.inCity(t.x, t.z);
    } catch {}
    if (r) {
      ((m = t.x), (y = t.z));
      return;
    }
    let i = t.x - m,
      a = t.z - y,
      o = Math.hypot(i, a) || 1,
      s = (t.vx * i + t.vz * a) / o;
    (s > 0 && ((t.vx -= (i / o) * s * 1.4), (t.vz -= (a / o) * s * 1.4)),
      (t.object.position.x = m),
      (t.object.position.z = y));
    let c = e.time.elapsed;
    c - p > 3 &&
      ((p = c), L(() => e.ui.notify(Q.edge, { duration: 2.5, kind: `bad` })));
  }
  function Ae(e) {
    (O.position.set(e.x, e.y + 0.4, e.z),
      O.rotation.set(0, -e.heading, 0),
      O.updateMatrixWorld());
  }
  function je() {
    let t = e.player.position,
      n = e.time.elapsed;
    for (let e of C) {
      let r = Math.hypot(t.x - e.def.x, t.z - e.def.z);
      if (
        (!e.ready && r < 900 && (e.ready = Ue(e)),
        e.lift && Ie(e, r),
        e.mesh && (e.mesh.visible = r < 900 && e.ready),
        e.ready)
      ) {
        if (e.heli) !e.heli.used && r > 650 && Se(e.heli);
        else {
          let t = e.takenAt < 0,
            i = n < 10 || r > 140 || !Fe(e);
          if (w && r < 600) continue;
          r < 450 &&
            i &&
            (t || (n - e.takenAt > 60 && r > 180)) &&
            We(e) &&
            xe(e);
        }
      }
    }
    for (let e = x.length - 1; e >= 0; e--) {
      let r = x[e];
      if (r === w || !r.used || E?.h === r) continue;
      let i = Math.hypot(t.x - r.x, t.z - r.z);
      ((r.destroyed && n - r.destroyedAt > 40 && i > 120) ||
        (!r.destroyed && i > 650) ||
        (r.sinking > 6 && i > 40)) &&
        Se(r);
    }
    let r = x.filter((e) => e.used && e !== w);
    for (; r.length > 3;)
      (r.sort(
        (e, n) =>
          Math.hypot(t.x - n.x, t.z - n.z) - Math.hypot(t.x - e.x, t.z - e.z),
      ),
        Se(r.shift()));
  }
  let Me = new g(),
    Ne = new l(),
    Pe = new a();
  function Fe(t) {
    let n = e.camera;
    return (
      Ne.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
      Me.setFromProjectionMatrix(Ne, n.coordinateSystem, n.reversedDepth),
      Pe.center.set(t.def.x, t.y + 2, t.def.z),
      (Pe.radius = 9),
      Me.intersectsSphere(Pe)
    );
  }
  function Ie(t, n) {
    let r = t.lift;
    if (!r.found && n < 320 && r.tries < 30) {
      r.tries++;
      let e = q(t, !0) ?? (r.tries > 6 ? q(t, !1) : null);
      e && ((r.gx = e.x), (r.gz = e.z), (r.found = !0));
    }
    (r.found &&
      !r.ground &&
      ((r.gy = e.groundAt(r.gx, r.gz, 2.5, 0.5)),
      (r.ground = Le(r.gx, r.gy, r.gz)),
      (r.roof = Le(r.rx, t.y, r.rz)),
      L(() =>
        e.ui.addBlip(`helipad-lift:${t.def.id}`, {
          x: r.gx,
          z: r.gz,
          icon: `vehicle`,
          glyph: `⇡`,
          color: `#7fd8ff`,
          label: Q.liftName,
        }),
      )),
      r.ground && (r.ground.visible = n < 260),
      r.roof && (r.roof.visible = n < 400 && t.ready));
  }
  function Le(t, n, r) {
    ((j ??= F(ye())), (Re ??= et()));
    let a = new i(Re, j.mat);
    return (
      (a.name = `vehicle-heli-lift-sign`),
      a.position.set(t, n, r),
      (a.castShadow = !0),
      (a.receiveShadow = !0),
      (a.customDepthMaterial = j.depth),
      (a.matrixAutoUpdate = !1),
      a.updateMatrix(),
      (a.visible = !1),
      e.scene.add(a),
      a
    );
  }
  let Re = null;
  function q(t, n) {
    let r = t.def,
      i = r.kind === `deck` ? (r.roofY ?? t.y - 1.4) : t.y - 2;
    for (let t = 6; t <= 90; t += 2) {
      let a = Math.max(12, Math.round(t * 1.2)),
        o = null;
      for (let s = 0; s < a; s++) {
        let c = (s / a) * Math.PI * 2,
          l = r.x + Math.sin(c) * t,
          u = r.z - Math.cos(c) * t,
          d = e.plan.surfaceAt(l, u);
        if (d === `water` || d === `road` || (n && d !== `sidewalk`)) continue;
        let f = e.groundAt(l, u, 2.5, 0.5);
        if (
          f > i - 3 ||
          f > 6 ||
          e.statics.overlapsRect(l - 0.6, u - 0.6, l + 0.6, u + 0.6, f + 0.4)
        )
          continue;
        let p = e.statics.query(l - 0.6, u - 0.6, l + 0.6, u + 0.6, J),
          m = !1;
        for (let e = 0; e < p && !m; e++)
          J[e].maxY > f + 2.2 && !Ct.has(J[e].tag) && (m = !0);
        if (m) continue;
        let h = Math.hypot(l - r.x, u - r.z);
        (!o || h < o.s) && (o = { x: l, z: u, s: h });
      }
      if (o) return o;
    }
    return null;
  }
  let ze = !1;
  function Be() {
    if (ze || E || w) return;
    let t = e.player;
    if (t.mode !== `foot` || t.controlEnabled === !1) return;
    let n = t.position;
    for (let r of C) {
      let i = r.lift;
      if (!i) continue;
      if (
        i.found &&
        Math.hypot(n.x - i.gx, n.z - i.gz) < 1.9 &&
        Math.abs(n.y - i.gy) < 2
      ) {
        (t.aiming || L(() => e.ui.prompt(Q.liftUp)),
          e.input.pressed(`interact`) && r.ready && Ve(r, !0));
        return;
      }
      if (D) continue;
      let a = r.def.kind === `deck` ? (r.def.roofY ?? r.y - 1.4) - 1 : r.y - 3;
      if (
        n.y > a &&
        n.y < r.y + 2.5 &&
        n.y > 4 &&
        Math.hypot(n.x - r.def.x, n.z - r.def.z) < r.def.size / 2 + 26
      ) {
        (t.aiming || L(() => e.ui.prompt(Q.liftDown)),
          e.input.pressed(`interact`) && Ve(r, !1));
        return;
      }
    }
  }
  async function Ve(t, n) {
    let r = t.lift;
    if (ze) return;
    if (!n && !r.found) {
      let n = q(t, !0) ?? q(t, !1);
      if (!n) return;
      Object.assign(r, {
        gx: n.x,
        gz: n.z,
        found: !0,
        gy: e.groundAt(n.x, n.z, 2.5, 0.5),
      });
    }
    ze = !0;
    let i = e.player;
    L(() => i.setControlEnabled(!1));
    try {
      (await Promise.race([e.ui.fade(1, 0.35), He(600)]).catch(() => {}),
        L(() => e.audio.play(`store_chime`, { ui: !0, volume: 0.5 })));
      let a = Math.atan2(
        t.def.x - (n ? r.rx : r.gx),
        -(t.def.z - (n ? r.rz : r.gz)),
      );
      (n
        ? (L(() => i.teleport(r.rx, r.rz, a, t.y + 0.05)),
          i.position.y < t.y - 0.5 && (i.position.y = t.y + 0.02))
        : L(() => i.teleport(r.gx, r.gz, a + Math.PI, r.gy)),
        await He(650));
    } finally {
      (L(() => i.setControlEnabled(!0)),
        i.mode === `foot` &&
          n &&
          i.position.y < t.y - 0.5 &&
          (i.position.y = t.y + 0.02),
        await Promise.race([e.ui.fade(0, 0.35), He(600)]).catch(() => {}),
        (ze = !1));
    }
  }
  let He = (e) => new Promise((t) => setTimeout(t, e));
  function Ue(t) {
    let n = t.def,
      r = n.roofY ?? t.y - 1,
      i = n.size + 8,
      a = e.statics.query(n.x - i, n.z - i, n.x + i, n.z + i, J);
    for (let e = 0; e < a; e++) if (Math.abs(J[e].maxY - r) < 1.2) return !0;
    return !1;
  }
  let J = [];
  function We(t) {
    for (let e of x)
      if (
        Math.hypot(e.x - t.def.x, e.z - t.def.z) < 10 &&
        Math.abs(e.y - t.y) < 6
      )
        return !1;
    return (
      e.dynamics.query(
        t.def.x,
        t.def.z,
        6,
        Te,
        (e) => e.kind === `vehicle` && Math.abs((e.y ?? 0) - t.y) < 3,
      ) === 0
    );
  }
  let Y = {
      id: -1,
      kind: `helicopter`,
      spec: { name: ce.private.name, maxSpeed: X.VMAX },
      speed: 0,
      health: 0,
      maxHealth: X.HP,
      onFire: !1,
      destroyed: !1,
      altitude: 0,
      heading: 0,
      kmh: 0,
    },
    Ge = {
      get target() {
        return E ? E.h.body : (D?.body ?? null);
      },
      get entering() {
        return !!E;
      },
      get aircraft() {
        let e = w;
        return e
          ? ((Y.id = e.id),
            (Y.spec.name = e.livery.name),
            (Y.speed = e.hSpeed),
            (Y.kmh = e.hSpeed * 3.6),
            (Y.health = e.health),
            (Y.onFire = e.onFire),
            (Y.destroyed = e.destroyed),
            (Y.altitude = e.agl),
            (Y.heading = e.heading),
            Y)
          : null;
      },
      async init() {
        ((o = new ae((t, n, r) =>
          e.groundAt ? e.groundAt(t, n, r, 0.3) : e.plan.groundHeight(t, n),
        )),
          (o.group.name = `vehicle-heli-fx`));
        let t = e.scene.getObjectByName(`vehicle-fx-debris`);
        (t &&
          t.material?.name === `vehicle-instanced-debris` &&
          o.useDebrisMaterial(t.material),
          (o.density =
            e.quality.level === `low`
              ? 0.5
              : e.quality.level === `medium`
                ? 0.75
                : 1),
          e.scene.add(o.group),
          le(vt.livery),
          Qe(),
          await e.yieldFrame());
        for (let e of Object.keys(ce)) _e(e);
        (ve(),
          e.scene.add(O),
          console.info(
            `[init] heli (${vt.city}): ${Qe().tris} tris, ${C.length} pads`,
          ),
          (window.__heli = Ke));
      },
      start() {
        if ((be(), !P())) {
          for (let e of [...M, ...(j ? [j] : []), ...(N ? [N] : [])])
            e.mat.envMap = null;
          for (let e of x) e.mats.mat.envMap = null;
        }
      },
      prewarm() {
        if (!pe) {
          let e = Qe();
          pe = [];
          for (let t of Object.keys(ce)) {
            let n = F(_e(t));
            t === `private` ? (N = n) : M.push(n);
            let r = new u();
            r.name = `vehicle-heli-prewarm-${t}`;
            let a =
              t === `private` ? [e.body, e.rotor, e.tail, e.far] : [e.rotor];
            for (let e of a) {
              let t = new i(e, n.mat);
              ((t.castShadow = !0),
                (t.receiveShadow = !0),
                (t.customDepthMaterial = n.depth),
                (t.frustumCulled = !1),
                r.add(t));
            }
            pe.push(r);
          }
          let t = new i(new f(1, 8), he());
          ((t.name = `vehicle-heli-prewarm-disc`),
            (t.frustumCulled = !1),
            pe.push(t));
        }
        return pe.filter((e) => !e.parent);
      },
      pre(e) {
        B();
      },
      post(t) {
        let n = e.camera.position,
          r = re.uNight?.value ?? 0;
        (E && H(t), w && Oe(w, t));
        for (let e = 0; e < x.length; e++) x[e].update(t, n.x, n.y, n.z, r);
        w && (Ae(w), w.destroyed && Ee());
        let i = D;
        (i &&
          !E &&
          !w &&
          e.player.mode === `foot` &&
          !e.player.aiming &&
          L(() => e.ui.prompt(Q.board(i.livery.name))),
          (A += t) > 0.5 && ((A = 0), je()),
          Be(),
          d.update(t, w ? Ge.aircraft : null),
          o?.update(t, e.time.elapsed));
      },
      get(e) {
        for (let t of x) if (t.id === e) return t;
      },
      owns(e) {
        return e instanceof dt && x.includes(e);
      },
      teleport(t, n, r, i, a) {
        if (!(t instanceof dt)) return !1;
        let o = a ?? st(e, n, r, 500, $).y;
        return (t.place(n, o, r, i), !0);
      },
      eject() {
        let e = w;
        return e ? (W(e, !1), !0) : !1;
      },
      release: Ee,
      repair(e) {
        return e instanceof dt && (e.repair(), !0);
      },
      explode(e) {
        return e instanceof dt && (e.explode(), !0);
      },
    },
    Ke = {
      pads: () =>
        C.map((e) => ({
          id: e.def.id,
          kind: e.def.kind,
          x: e.def.x,
          z: e.def.z,
          y: e.y,
          heli: e.heli?.id ?? null,
          takenAt: e.takenAt,
          lift: e.lift
            ? {
                found: e.lift.found,
                gx: +e.lift.gx.toFixed(1),
                gz: +e.lift.gz.toFixed(1),
                gy: +e.lift.gy.toFixed(2),
                rx: e.lift.rx,
                rz: e.lift.rz,
              }
            : null,
        })),
      get riding() {
        return ze;
      },
      list: () => x,
      get current() {
        return w;
      },
      tune: X,
      spawn(t, n, r = 0, i = `private`) {
        let a = st(e, t, n, 500, $).y,
          o = new dt(ge, i, t, a, n, r);
        return ((o.used = !0), e.scene.add(o.object), x.push(o), o);
      },
      board: (e) => U(e),
      exit: (e = !1) => w && W(w, e),
      seat: we,
      params: t,
      roof(t, n) {
        let r = new v(new h(t, 900, n), new h(0, -1, 0), 0, 1e3);
        r.camera = e.camera;
        let i = [];
        return (
          e.scene.traverseVisible((e) => {
            if (
              !e.isMesh ||
              /heli|sky|cloud|fx|traffic|ped|crowd/i.test(e.name)
            )
              return;
            let t = [];
            try {
              r.intersectObject(e, !1, t);
            } catch {}
            for (let e of t) e.point && Number.isFinite(e.point.y) && i.push(e);
          }),
          i.sort((e, t) => t.point.y - e.point.y),
          i.slice(0, 4).map((e) => ({
            y: +e.point.y.toFixed(2),
            name: e.object.name || e.object.type,
            ny: +(e.face?.normal.y ?? 0).toFixed(2),
          }))
        );
      },
      open(t, n, r = 120, i = 17) {
        let a = i / 2,
          o = null;
        for (let i = -r; i <= r; i += 4)
          for (let s = -r; s <= r; s += 4) {
            let c = Math.hypot(s, i);
            if (c > r || (o && c >= o.d)) continue;
            let l = t + s,
              u = n + i,
              d = (t, n) => {
                let r = e.plan.surfaceAt(t, n);
                return r === `water` || r === `road` || r === `sidewalk`;
              };
            if (d(l, u)) continue;
            let f = e.groundAt(l, u, 800, 0.5),
              p = !0;
            for (let [t, n] of [
              [-a, -a],
              [a, -a],
              [-a, a],
              [a, a],
              [0, -a],
              [0, a],
              [-a, 0],
              [a, 0],
            ])
              (Math.abs(e.groundAt(l + t, u + n, 800, 0.5) - f) > 0.4 ||
                d(l + t, u + n)) &&
                (p = !1);
            if (!p) continue;
            let m = e.statics.query(l - a, u - a, l + a, u + a, J),
              h = !0;
            for (let e = 0; e < m && h; e++)
              J[e].maxY > f + 0.3 &&
                !J[e].tag.startsWith(`invisible`) &&
                (h = !1);
            h && (o = { x: l, z: u, y: +f.toFixed(2), d: c });
          }
        return o;
      },
      probe(t, n, r = 4) {
        let i = e.statics.query(t - r, n - r, t + r, n + r, J),
          a = [];
        for (let e = 0; e < i; e++) {
          let t = J[e];
          a.push({
            tag: t.tag,
            top: +t.maxY.toFixed(2),
            cx: +t.cx.toFixed(1),
            cz: +t.cz.toFixed(1),
            hx: +t.hx.toFixed(1),
            hz: +(t.hz ?? 0).toFixed(1),
          });
        }
        return (
          a.sort((e, t) => t.top - e.top),
          {
            ground: +e.groundAt(t, n, 800, 0.5).toFixed(2),
            support: +st(e, t, n, 800, $).y.toFixed(2),
            water: $.water,
            cols: a.slice(0, 8),
          }
        );
      },
    };
  return Ge;
}
var $ = { y: 0, water: !1 },
  Ct = new Set([`tree`, `pole`, `lamp`, `sign`]);
function wt(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    t = Math.imul(t ^ e.charCodeAt(n), 16777619);
  return t >>> 0;
}
function Tt(e, t, n, r, i, a, o) {
  let s = e - n,
    c = t - r,
    l = Math.cos(i),
    u = Math.sin(i),
    d = s * l + c * u,
    f = -s * u + c * l;
  return Math.hypot(Math.max(Math.abs(d) - a, 0), Math.max(Math.abs(f) - o, 0));
}
export { xt as t };
