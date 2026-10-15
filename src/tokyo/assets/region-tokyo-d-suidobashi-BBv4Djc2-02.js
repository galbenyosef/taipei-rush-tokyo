// tokyo/assets/region-tokyo-d-suidobashi-BBv4Djc2 02 — acc
// Lines 332-673 of readable/tokyo/assets/region-tokyo-d-suidobashi-BBv4Djc2.pretty.js (statement-aligned).
function ae(e, t, n, r, i, a, o, s, c, l = !1, u = 0.6, d, f = !0) {
  ((t -= u),
    (r += u),
    (n -= u),
    (i += u),
    f && O(e, t, n, r, i, a - 0.02, d ?? c, !0));
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
        ? (N(e, t, a, n, t, a, i, s, h, m, c),
          N(e, r, a, i, r, a, n, f, h, m, c))
        : d &&
          (N(e, t + u, a, n + u, t + u, a, i - u, t + u, h, m, d),
          N(e, r - u, a, i - u, r - u, a, n + u, r - u, h, m, d)));
  } else {
    let o = l ? Math.min((r - t) / 2, (i - n) / 2 - 0.1) : 0,
      s = n + o,
      f = i - o;
    (e.quad(r, a, i, r, a, n, p, h, s, p, h, f, c.u0, c.v0, c.u1, c.v1),
      e.quad(t, a, n, t, a, i, p, h, f, p, h, s, c.u0, c.v0, c.u1, c.v1),
      l
        ? (N(e, r, a, n, t, a, n, p, h, s, c),
          N(e, t, a, i, r, a, i, p, h, f, c))
        : d &&
          (N(e, r - u, a, n + u, t + u, a, n + u, p, h, n + u, d),
          N(e, t + u, a, i - u, r - u, a, i - u, p, h, i - u, d)));
  }
}
function N(e, t, n, r, i, a, o, s, c, l, u) {
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
var oe = { E: [1, 0], W: [-1, 0], N: [0, -1], S: [0, 1] };
function P(e, t) {
  let [n, r] = oe[t],
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
function F(e, t, n) {
  return [e.ox + e.tx * t + e.nx * n, e.oz + e.tz * t + e.nz * n];
}
function I(e, t, n, r, i, a, o, s) {
  let [c, l] = F(t, n, o),
    [u, d] = F(t, r, o);
  D(e, c, l, u, d, i, a, s);
}
function se(e, t, n, r, i, a, o = 1) {
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
var L = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
  R = (e) => b(e),
  ce = (e, t) => _(e, t);
function z(e, t, n, r, i, a, o = 1) {
  ((e.globalAlpha = o),
    (e.fillStyle = a),
    e.fillRect(t, n, r, i),
    (e.globalAlpha = 1));
}
function B(e, t, n, r, i, a, o) {
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
function le(e, t, n, r, i, a) {
  e.font = `${a} 100px ${i}`;
  let o = e.measureText(t).width || 1;
  return Math.max(4, Math.min(r, (100 * n) / o));
}
function V(e, t, n, r, i, a, o, s = `900`, c = v()) {
  let l = le(e, t, i, a, c, s);
  ((e.font = `${s} ${Math.min(l, a)}px ${c}`),
    (e.fillStyle = o),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.globalAlpha = 1),
    e.fillText(t, n, r + a * 0.04));
}
function H(e, t, n, r, i, a, o, s = v(), c = `900`) {
  ((e.globalAlpha = 1), y(e, t, n, r, i, a, o, s, c));
}
var ue = (...e) => new o(s(`street-paint`, ...e)),
  U = (e) =>
    `b:${e.main}|${e.sub ?? ``}|${e.bg}|${e.fg}|${e.floor ?? ``}|${e.style ?? `lit`}`;
function de(e) {
  return (t, n, r, i, a) => {
    let o = e.style ?? `lit`,
      s = e.serif || o === `wood` ? x() : v(),
      c = e.floor === void 0 ? R(e.main) : ce(e.main, { n: e.floor });
    (o === `wood`
      ? (ve(t, n, r, i, a, e.bg, `h`),
        (t.strokeStyle = `#1a120a`),
        (t.lineWidth = a * 0.06),
        t.strokeRect(n + a * 0.06, r + a * 0.06, i - a * 0.12, a - a * 0.12))
      : o === `enamel`
        ? z(t, n, r, i, a, e.bg)
        : B(t, n, r, i, a, e.bg, 0.55),
      e.acc &&
        (o === `lit`
          ? B(t, n, r + a * 0.86, i, a * 0.14, e.acc, 0.6)
          : z(t, n, r + a * 0.86, i, a * 0.14, e.acc)),
      e.sub
        ? (V(
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
          V(
            t,
            R(e.sub),
            n + i * 0.84,
            r + a * 0.45,
            i * 0.28,
            a * 0.36,
            e.fg,
            `700`,
            s,
          ))
        : V(t, c, n + i / 2, r + a * 0.45, i * 0.9, a * 0.72, e.fg, `900`, s));
  };
}
var fe = (e) =>
  `v:${e.main}|${e.top ?? ``}|${e.bg}|${e.fg}|${e.style ?? `lit`}`;
function pe(e) {
  return (t, n, r, i, a) => {
    let o = e.style === `wood`;
    (o ? ve(t, n, r, i, a, e.bg, `v`) : B(t, n, r, i, a, e.bg, 0.55),
      e.acc &&
        (o
          ? (z(t, n, r, i, a * 0.03, e.acc),
            z(t, n, r + a * 0.97, i, a * 0.03, e.acc))
          : (B(t, n, r, i, a * 0.03, e.acc, 0.6),
            B(t, n, r + a * 0.97, i, a * 0.03, e.acc, 0.6))));
    let s = r + a * 0.05;
    (e.top &&
      (V(t, R(e.top), n + i / 2, r + a * 0.07, i * 0.86, a * 0.06, e.fg, `800`),
      (s = r + a * 0.13)),
      H(
        t,
        R(e.main),
        n + i / 2,
        s,
        r + a * 0.95,
        i * 0.74,
        e.fg,
        o ? x() : v(),
      ));
  };
}
function me(e, t, n, r = `#ffffff`) {
  return (i, a, o, s, c) => {
    (z(i, a, o, s, c, t), z(i, a, o, s, c * 0.06, r));
    for (let e = 0; e < 6; e++)
      z(i, a + s * 0.06 + (e * s) / 6, o + c * 0.015, s * 0.06, c * 0.03, t);
    H(i, R(e), a + s / 2, o + c * 0.1, o + c * 0.95, s * 0.72, n);
  };
}
function he(e, t = `#d8281e`) {
  return (n, r, i, a, o) => {
    (B(n, r, i, a, o, `#1a1410`, 0.5),
      B(n, r + a * 0.05, i + o * 0.1, a * 0.9, o * 0.8, t, 0.62));
    for (let e = 1; e < 9; e++)
      z(
        n,
        r + a * 0.05,
        i + o * 0.1 + (e * o * 0.8) / 9,
        a * 0.9,
        o * 0.008,
        `rgba(60,0,0,0.5)`,
      );
    (z(n, r + a * 0.18, i, a * 0.64, o * 0.1, `#141414`),
      z(n, r + a * 0.18, i + o * 0.9, a * 0.64, o * 0.1, `#141414`));
    let s = R(e);
    s.length <= 1
      ? V(
          n,
          s,
          r + a / 2,
          i + o * 0.5,
          a * 0.7,
          o * 0.56,
          `#121010`,
          `900`,
          x(),
        )
      : H(n, s, r + a / 2, i + o * 0.16, i + o * 0.84, a * 0.5, `#121010`, x());
  };
}
function ge(e, t, n, r = 3) {
  return (i, a, o, s, c) => {
    let l = s / r;
    for (let e = 0; e < r; e++)
      (z(i, a + e * l + 1, o, l - 2, c, t),
        z(i, a + e * l + 1, o, l - 2, c * 0.08, `rgba(0,0,0,0.25)`));
    let u = R(e),
      d = [...u];
    d.length <= r + 1
      ? d.forEach((e, t) =>
          V(
            i,
            e,
            a + (t + 0.5) * (s / d.length),
            o + c * 0.5,
            (s / d.length) * 0.8,
            c * 0.62,
            n,
            `900`,
            x(),
          ),
        )
      : V(i, u, a + s / 2, o + c * 0.5, s * 0.9, c * 0.5, n, `900`, x());
  };
}
function _e(e, t = !0) {
  return (n, r, i, a, o) => {
    (z(n, r, i, a, o, `#6a4a2a`),
      z(
        n,
        r + a * 0.06,
        i + o * 0.05,
        a * 0.88,
        o * 0.9,
        t ? `#1e2a24` : `#f4f2ec`,
      ));
    let s = e.length;
    e.forEach((e, c) => {
      let l = t
        ? [`#ffffff`, `#ffe066`, `#ff9a9a`, `#9adfff`][c % 4]
        : [`#c01818`, `#1a1a1a`, `#1a4aa8`][c % 3];
      V(
        n,
        R(e),
        r + a / 2,
        i + o * (0.14 + (0.78 * (c + 0.5)) / s),
        a * 0.8,
        (o * 0.7) / s,
        l,
        `800`,
      );
    });
  };
}
function ve(e, t, n, r, i, a, o) {
  z(e, t, n, r, i, a);
  let s = ue(`wood`, a, Math.round(r), Math.round(i));
  e.globalAlpha = 0.18;
  for (let a = 0; a < 40; a++)
    ((e.fillStyle = s.next() < 0.5 ? `#000000` : `#ffffff`),
      o === `h`
        ? e.fillRect(t, n + s.next() * i, r, 1 + s.next() * 1.5)
        : e.fillRect(t + s.next() * r, n, 1 + s.next() * 1.5, i));
  e.globalAlpha = 1;
}
function ye(e) {
  return (t, n, r, i, a) => {
    ve(t, n, r, i, a, e, `v`);
    for (let e = n; e < n + i; e += i / 8) z(t, e, r, 2, a, `rgba(0,0,0,0.45)`);
  };
}
function be(e, t = `#a87e4a`, n = 24) {
  return (r, i, a, o, s) => {
    B(r, i, a, o, s, t, 1);
    let c = r.createLinearGradient(0, a, 0, a + s);
    (c.addColorStop(0, `rgba(255,230,180,0.25)`),
      c.addColorStop(1, `rgba(60,30,10,0.45)`),
      (r.fillStyle = c),
      r.fillRect(i, a, o, s));
    let l = o / n;
    for (let t = 0; t < n; t++) B(r, i + t * l, a, l * 0.58, s, e, 0);
    (B(r, i, a, o, s * 0.05, e, 0),
      B(r, i, a + s * 0.48, o, s * 0.03, e, 0),
      B(r, i, a + s * 0.95, o, s * 0.05, e, 0));
  };
}
function xe(e = `#5c6064`) {
  return (t, n, r, i, a) => {
    z(t, n, r, i, a, e);
    for (let e = r; e < r + a; e += a / 8)
      z(t, n, e, i, a * 0.02, `rgba(0,0,0,0.35)`);
    for (let e = n; e < n + i; e += i / 12)
      (z(t, e, r, i / 24, a, `rgba(255,255,255,0.08)`),
        z(t, e + i / 24, r, 1.5, a, `rgba(0,0,0,0.3)`));
  };
}
