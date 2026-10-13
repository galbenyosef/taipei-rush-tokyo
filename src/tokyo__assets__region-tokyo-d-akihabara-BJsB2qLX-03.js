// tokyo__assets__region-tokyo-d-akihabara-BJsB2qLX 03 — acc
// Lines 504-773 of readable/tokyo__assets__region-tokyo-d-akihabara-BJsB2qLX.pretty.js (statement-aligned).
function M(e, t, n, r, i, a, o, s, c, l, u, d, f = !0) {
  let p = c,
    m = -s,
    h = p * a,
    g = m * a,
    _ = s * o,
    v = c * o,
    y = [t - h + _, n - g + v],
    b = [t + h + _, n + g + v],
    x = [t - h - _, n - g - v],
    S = [t + h - _, n + g - v];
  (j(e, y[0], y[1], b[0], b[1], r, i, u ?? l),
    j(e, S[0], S[1], x[0], x[1], r, i, d ?? l),
    j(e, b[0], b[1], S[0], S[1], r, i, l),
    j(e, x[0], x[1], y[0], y[1], r, i, l),
    f &&
      e.quad(
        y[0],
        i,
        y[1],
        b[0],
        i,
        b[1],
        S[0],
        i,
        S[1],
        x[0],
        i,
        x[1],
        l.u0,
        l.v0,
        l.u1,
        l.v1,
      ));
}
function ye(e, t, n, r, i, a, o, s = 6) {
  let c = e.n;
  for (let c = 0; c <= s; c++) {
    let l = (c / s) * Math.PI * 2,
      u = Math.cos(l),
      d = Math.sin(l);
    (e.vertex(t + u * a, r, n + d * a, u, 0, d, o.u0, o.v0),
      e.vertex(t + u * a, i, n + d * a, u, 0, d, o.u0, o.v1));
  }
  for (let t = 0; t < s; t++) {
    let n = c + t * 2;
    e.tri(n, n + 1, n + 2).tri(n + 1, n + 3, n + 2);
  }
}
function be(e, t, n, r, i, a, o, s, c) {
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
function xe(e, t, n, r, i, a, o = 1) {
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
var Se = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
  N = (e) => (y(e) ? l(e) : e),
  P = (e, t) => (y(e) ? v(e, t) : e);
function F(e) {
  let t = m(e)?.colors ?? [`#e60012`, `#ffffff`, `#1d2088`];
  return [t[0], t[1], t[2]];
}
function Ce(e, t, n, r, i, a) {
  e.font = `${a} 100px ${i}`;
  let o = e.measureText(t).width || 1;
  return Math.max(4, Math.min(r, (100 * n) / o));
}
function I(e, t, n, r, i, a, o, s = `900`, c = f()) {
  let l = Ce(e, t, i, a, c, s);
  ((e.font = `${s} ${Math.min(l, a)}px ${c}`),
    (e.fillStyle = o),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.globalAlpha = 1),
    e.fillText(t, n, r + a * 0.04));
}
function we(e, t, n, r, i, a, o, s, c = `900`) {
  let l = f(),
    u = Ce(e, t, i, a, l, c);
  ((e.font = `${c} ${Math.min(u, a)}px ${l}`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.globalAlpha = 1),
    (e.lineJoin = `round`),
    (e.lineWidth = Math.max(2, u * 0.14)),
    (e.strokeStyle = s),
    e.strokeText(t, n, r + a * 0.04),
    (e.fillStyle = o),
    e.fillText(t, n, r + a * 0.04));
}
function Te(e) {
  return (t, n, r, i, a) => {
    (E(t, n, r, i, a, e.bg, 0.58),
      e.acc &&
        (D(t, n, r, i, a * 0.012, e.acc),
        D(t, n, r + a - a * 0.012, i, a * 0.012, e.acc),
        O(t, n + i * 0.06, r, i * 0.05, a, e.acc, 0.7),
        O(t, n + i * 0.89, r, i * 0.05, a, e.acc, 0.7)));
    let o = r + a * 0.04;
    e.top &&
      (D(t, n + i * 0.1, o, i * 0.8, a * 0.07, e.fg),
      I(
        t,
        N(e.top),
        n + i / 2,
        o + a * 0.035,
        i * 0.74,
        a * 0.055,
        e.bg,
        `900`,
      ),
      (o += a * 0.09));
    let s = N(e.main);
    (e.edge &&
      (t.save(),
      (t.shadowColor = e.edge),
      (t.shadowBlur = i * 0.08),
      S(t, s, n + i / 2, o, r + a * 0.96, i * 0.78, e.fg, f(), `900`),
      t.restore()),
      S(t, s, n + i / 2, o, r + a * 0.96, i * 0.78, e.fg, f(), `900`));
  };
}
function Ee(e) {
  return (t, n, r, i, a) => {
    (E(t, n, r, i, a, e.bg, 0.56),
      e.acc &&
        (D(t, n, r, i, a * 0.08, e.acc),
        D(t, n, r + a * 0.92, i, a * 0.08, e.acc)));
    let o = n + a * 0.25,
      s = /\{n\}/.test(N(e.main));
    e.floor &&
      !s &&
      (D(t, o, r + a * 0.14, a * 1.1, a * 0.72, e.fg),
      I(t, `${e.floor}F`, o + a * 0.55, r + a / 2, a * 0.95, a * 0.6, e.bg),
      (o += a * 1.35));
    let c = n + i - a * 0.25,
      l = s ? P(e.main, { n: e.floor ?? 2 }) : N(e.main);
    e.sub
      ? (I(t, l, (o + c) / 2, r + a * 0.38, c - o, a * 0.5, e.fg),
        I(t, N(e.sub), (o + c) / 2, r + a * 0.78, c - o, a * 0.24, e.fg, `700`))
      : I(t, l, (o + c) / 2, r + a / 2, c - o, a * 0.66, e.fg);
  };
}
function De(e, t) {
  return (n, r, i, a, o) => {
    D(n, r, i, a, o, t);
    let s = o / e.length;
    e.forEach((e, t) => {
      let o = i + t * s;
      (E(n, r + a * 0.08, o + s * 0.04, a * 0.84, s * 0.92, e.bg, 0.6),
        D(n, r + a * 0.14, o + s * 0.08, a * 0.72, a * 0.5, `#ffffff`),
        I(
          n,
          `${e.n}F`,
          r + a / 2,
          o + s * 0.08 + a * 0.25,
          a * 0.66,
          a * 0.42,
          e.bg,
        ),
        S(
          n,
          N(e.key),
          r + a / 2,
          o + s * 0.08 + a * 0.58,
          o + s * 0.92,
          a * 0.6,
          e.fg,
          f(),
          `900`,
        ));
    });
  };
}
function Oe(e) {
  return (t, n, r, i, a) => {
    (E(t, n, r, i, a, e.bg, 0.6),
      e.acc &&
        ((t.globalAlpha = 1),
        (t.fillStyle = e.acc),
        t.beginPath(),
        t.moveTo(n, r + a),
        t.lineTo(n + i * 0.3, r + a),
        t.lineTo(n + i * 0.18, r),
        t.lineTo(n, r),
        t.fill()),
      we(
        t,
        N(e.main),
        n + i * 0.56,
        r + a * (e.sub ? 0.4 : 0.5),
        i * 0.8,
        a * (e.sub ? 0.56 : 0.72),
        e.fg,
        e.bg,
      ),
      e.sub &&
        I(
          t,
          N(e.sub),
          n + i * 0.56,
          r + a * 0.82,
          i * 0.8,
          a * 0.2,
          e.fg,
          `700`,
        ));
  };
}
