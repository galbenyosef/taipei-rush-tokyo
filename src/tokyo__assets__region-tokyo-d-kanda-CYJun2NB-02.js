// tokyo__assets__region-tokyo-d-kanda-CYJun2NB 02 — acc
// Lines 350-675 of readable/tokyo__assets__region-tokyo-d-kanda-CYJun2NB.pretty.js (statement-aligned).
function P(e, t, n, r, i, a, o, s, c) {
  let l = i - t,
    u = a - n,
    d = o - r,
    f = Math.hypot(l, u, d) || 1,
    p = l / f,
    m = u / f,
    h = d / f,
    g = -h,
    _ = 0,
    v = p;
  Math.abs(m) > 0.9 && ((g = 1), (_ = 0), (v = 0));
  let y = Math.hypot(g, _, v) || 1;
  ((g = (g / y) * s), (_ = (_ / y) * s), (v = (v / y) * s));
  let b = m * v - h * _,
    x = h * g - p * v,
    S = p * _ - m * g,
    C = [
      [g + b, _ + x, v + S],
      [-g + b, -_ + x, -v + S],
      [-g - b, -_ - x, -v - S],
      [g - b, _ - x, v - S],
    ];
  for (let s = 0; s < 4; s++) {
    let l = C[s],
      u = C[(s + 1) % 4];
    e.quad(
      t + l[0],
      n + l[1],
      r + l[2],
      t + u[0],
      n + u[1],
      r + u[2],
      i + u[0],
      a + u[1],
      o + u[2],
      i + l[0],
      a + l[1],
      o + l[2],
      c.u0,
      c.v0,
      c.u1,
      c.v1,
    );
  }
}
function F(e, t, n, r, i, a, o, s, c, l = !1, u = 0.6, d, f = !0) {
  ((t -= u),
    (r += u),
    (n -= u),
    (i += u),
    f && k(e, t, n, r, i, a - 0.02, d ?? c, !0));
  let p = (t + r) / 2,
    m = (n + i) / 2,
    h = a + o;
  if (s === `x`) {
    let o = l ? Math.min((i - n) / 2, (r - t) / 2 - 0.1) : 0,
      s = t + o,
      f = r - o;
    (e.quad(t, a, i, r, a, i, f, h, m, s, h, m, c.u0, c.v0, c.u1, c.v1),
      e.quad(r, a, n, t, a, n, s, h, m, f, h, m, c.u0, c.v0, c.u1, c.v1),
      l
        ? (pe(e, t, a, n, t, a, i, s, h, m, c),
          pe(e, r, a, i, r, a, n, f, h, m, c))
        : d &&
          (pe(e, t + u, a, n + u, t + u, a, i - u, t + u, h, m, d),
          pe(e, r - u, a, i - u, r - u, a, n + u, r - u, h, m, d)));
  } else {
    let o = l ? Math.min((r - t) / 2, (i - n) / 2 - 0.1) : 0,
      s = n + o,
      f = i - o;
    (e.quad(r, a, i, r, a, n, p, h, s, p, h, f, c.u0, c.v0, c.u1, c.v1),
      e.quad(t, a, n, t, a, i, p, h, f, p, h, s, c.u0, c.v0, c.u1, c.v1),
      l
        ? (pe(e, r, a, n, t, a, n, p, h, s, c),
          pe(e, t, a, i, r, a, i, p, h, f, c))
        : d &&
          (pe(e, r - u, a, n + u, t + u, a, n + u, p, h, n + u, d),
          pe(e, t + u, a, i - u, r - u, a, i - u, p, h, i - u, d)));
  }
}
function pe(e, t, n, r, i, a, o, s, c, l, u) {
  let d = i - t,
    f = a - n,
    p = o - r,
    m = s - t,
    h = c - n,
    g = l - r,
    _ = f * g - p * h,
    v = p * m - d * g,
    y = d * h - f * m,
    b = Math.hypot(_, v, y) || 1;
  ((_ /= b), (v /= b), (y /= b));
  let x = e.vertex(t, n, r, _, v, y, u.u0, u.v0),
    S = e.vertex(i, a, o, _, v, y, u.u1, u.v0),
    C = e.vertex(s, c, l, _, v, y, (u.u0 + u.u1) / 2, u.v1);
  e.tri(x, S, C);
}
var me = { E: [1, 0], W: [-1, 0], N: [0, -1], S: [0, 1] };
function he(e, t) {
  let [n, r] = me[t],
    i = r,
    a = -n;
  return {
    ox: n ? (n > 0 ? e.x1 : e.x0) : i > 0 ? e.x0 : e.x1,
    oz: r ? (r > 0 ? e.z1 : e.z0) : a > 0 ? e.z0 : e.z1,
    tx: i,
    tz: a,
    nx: n,
    nz: r,
    L: n ? e.z1 - e.z0 : e.x1 - e.x0,
  };
}
function I(e, t, n) {
  return [e.ox + e.tx * t + e.nx * n, e.oz + e.tz * t + e.nz * n];
}
function L(e, t, n, r, i, a, o, s) {
  let [c, l] = I(t, n, o),
    [u, d] = I(t, r, o);
  O(e, c, l, u, d, i, a, s);
}
function ge(e, t, n, r, i, a, o = 1) {
  return (
    (e[0] = a * o),
    (e[1] = 0),
    (e[2] = -i * o),
    (e[3] = 0),
    (e[4] = 0),
    (e[5] = o),
    (e[6] = 0),
    (e[7] = 0),
    (e[8] = i * o),
    (e[9] = 0),
    (e[10] = a * o),
    (e[11] = 0),
    (e[12] = t),
    (e[13] = n),
    (e[14] = r),
    (e[15] = 1),
    e
  );
}
var R = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
  z = (e) => u(e),
  _e = (e, t) => v(e, t);
function B(e, t, n, r, i, a, o = 1) {
  ((e.globalAlpha = o),
    (e.fillStyle = a),
    e.fillRect(t, n, r, i),
    (e.globalAlpha = 1));
}
function V(e, t, n, r, i, a, o) {
  (e.save(),
    (e.globalCompositeOperation = `copy`),
    (e.globalAlpha = o),
    (e.fillStyle = a),
    e.beginPath(),
    e.rect(t, n, r, i),
    e.clip(),
    e.fillRect(t, n, r, i),
    e.restore());
}
function ve(e, t, n, r, i, a) {
  e.font = `${a} 100px ${i}`;
  let o = e.measureText(t).width || 1;
  return Math.max(4, Math.min(r, (100 * n) / o));
}
function H(e, t, n, r, i, a, o, s = `900`, c = d()) {
  let l = ve(e, t, i, a, c, s);
  ((e.font = `${s} ${Math.min(l, a)}px ${c}`),
    (e.fillStyle = o),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.globalAlpha = 1),
    e.fillText(t, n, r + a * 0.04));
}
function ye(e, t, n, r, i, a, o, s = d(), c = `900`) {
  ((e.globalAlpha = 1), ee(e, t, n, r, i, a, o, s, c));
}
var be = (...e) => new n(i(`kanda-paint`, ...e)),
  U = (e) =>
    `b:${e.main}|${e.sub ?? ``}|${e.bg}|${e.fg}|${e.floor ?? ``}|${e.style ?? `lit`}`;
function xe(e) {
  return (t, n, r, i, a) => {
    let o = e.style ?? `lit`,
      s = e.serif || o === `wood` ? f() : d(),
      c = e.floor === void 0 ? z(e.main) : _e(e.main, { n: e.floor });
    (o === `wood`
      ? (Oe(t, n, r, i, a, e.bg, `h`),
        (t.strokeStyle = `#1a120a`),
        (t.lineWidth = a * 0.06),
        t.strokeRect(n + a * 0.06, r + a * 0.06, i - a * 0.12, a - a * 0.12))
      : o === `enamel`
        ? B(t, n, r, i, a, e.bg)
        : V(t, n, r, i, a, e.bg, 0.55),
      e.acc &&
        (o === `lit`
          ? V(t, n, r + a * 0.86, i, a * 0.14, e.acc, 0.6)
          : B(t, n, r + a * 0.86, i, a * 0.14, e.acc)),
      e.sub
        ? (H(
            t,
            c,
            n + i * 0.36,
            r + a * 0.45,
            i * 0.64,
            a * 0.7,
            e.fg,
            `900`,
            s,
          ),
          H(
            t,
            z(e.sub),
            n + i * 0.84,
            r + a * 0.45,
            i * 0.28,
            a * 0.36,
            e.fg,
            `700`,
            s,
          ))
        : H(t, c, n + i / 2, r + a * 0.45, i * 0.9, a * 0.72, e.fg, `900`, s));
  };
}
var Se = (e) =>
  `v:${e.main}|${e.top ?? ``}|${e.bg}|${e.fg}|${e.style ?? `lit`}`;
function Ce(e) {
  return (t, n, r, i, a) => {
    let o = e.style === `wood`;
    (o ? Oe(t, n, r, i, a, e.bg, `v`) : V(t, n, r, i, a, e.bg, 0.55),
      e.acc &&
        (o
          ? (B(t, n, r, i, a * 0.03, e.acc),
            B(t, n, r + a * 0.97, i, a * 0.03, e.acc))
          : (V(t, n, r, i, a * 0.03, e.acc, 0.6),
            V(t, n, r + a * 0.97, i, a * 0.03, e.acc, 0.6))));
    let s = r + a * 0.05;
    (e.top &&
      (H(t, z(e.top), n + i / 2, r + a * 0.07, i * 0.86, a * 0.06, e.fg, `800`),
      (s = r + a * 0.13)),
      ye(
        t,
        z(e.main),
        n + i / 2,
        s,
        r + a * 0.95,
        i * 0.74,
        e.fg,
        o ? f() : d(),
      ));
  };
}
function we(e, t, n, r = `#ffffff`) {
  return (i, a, o, s, c) => {
    (B(i, a, o, s, c, t), B(i, a, o, s, c * 0.06, r));
    for (let e = 0; e < 6; e++)
      B(i, a + s * 0.06 + (e * s) / 6, o + c * 0.015, s * 0.06, c * 0.03, t);
    ye(i, z(e), a + s / 2, o + c * 0.1, o + c * 0.95, s * 0.72, n);
  };
}
function Te(e, t = `#d8281e`) {
  return (n, r, i, a, o) => {
    (V(n, r, i, a, o, `#1a1410`, 0.5),
      V(n, r + a * 0.05, i + o * 0.1, a * 0.9, o * 0.8, t, 0.62));
    for (let e = 1; e < 9; e++)
      B(
        n,
        r + a * 0.05,
        i + o * 0.1 + (e * o * 0.8) / 9,
        a * 0.9,
        o * 0.008,
        `rgba(60,0,0,0.5)`,
      );
    (B(n, r + a * 0.18, i, a * 0.64, o * 0.1, `#141414`),
      B(n, r + a * 0.18, i + o * 0.9, a * 0.64, o * 0.1, `#141414`));
    let s = z(e);
    s.length <= 1
      ? H(
          n,
          s,
          r + a / 2,
          i + o * 0.5,
          a * 0.7,
          o * 0.56,
          `#121010`,
          `900`,
          f(),
        )
      : ye(
          n,
          s,
          r + a / 2,
          i + o * 0.16,
          i + o * 0.84,
          a * 0.5,
          `#121010`,
          f(),
        );
  };
}
function Ee(e, t, n, r = 3) {
  return (i, a, o, s, c) => {
    let l = s / r;
    for (let e = 0; e < r; e++)
      (B(i, a + e * l + 1, o, l - 2, c, t),
        B(i, a + e * l + 1, o, l - 2, c * 0.08, `rgba(0,0,0,0.25)`));
    let u = z(e),
      d = [...u];
    d.length <= r + 1
      ? d.forEach((e, t) =>
          H(
            i,
            e,
            a + (t + 0.5) * (s / d.length),
            o + c * 0.5,
            (s / d.length) * 0.8,
            c * 0.62,
            n,
            `900`,
            f(),
          ),
        )
      : H(i, u, a + s / 2, o + c * 0.5, s * 0.9, c * 0.5, n, `900`, f());
  };
}
