// tokyo/assets/region-tokyo-55J_WESF 160 — math
// Lines 66846-67187 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function YS(e, t, n, r, i, a = !1) {
  let o = [];
  for (let e = 0; e <= r; e++)
    for (let i = 0; i <= n; i++) o.push(t(i / n, e / r));
  let s = (e, t) => o[t * (n + 1) + e];
  for (let t = 0; t < r; t++)
    for (let r = 0; r < n; r++) {
      let n = s(r, t),
        o = s(r + 1, t),
        c = s(r + 1, t + 1),
        l = s(r, t + 1);
      a
        ? e.quad(
            o[0],
            o[1],
            o[2],
            n[0],
            n[1],
            n[2],
            l[0],
            l[1],
            l[2],
            c[0],
            c[1],
            c[2],
            i,
          )
        : e.quad(
            n[0],
            n[1],
            n[2],
            o[0],
            o[1],
            o[2],
            c[0],
            c[1],
            c[2],
            l[0],
            l[1],
            l[2],
            i,
          );
    }
}
function XS(e, t, n, r) {
  let i = e.sub(t, 0, n, r);
  return () => void e.leave(i);
}
var ZS = (e, t, n) => e * n ** +t;
function QS(e, t, n, r, i, a, o, s, c) {
  let l = e.coarse ? Math.max(2, Math.ceil(r.rows / 2)) : r.rows,
    u = Math.max(1, Math.round(l * (o - a)));
  for (let l of [-1, 1]) {
    let d = (e, c) => {
        let u = a + (o - a) * c,
          d = i(u),
          f = (e * 2 - 1) * d,
          p = r.sori * Math.min(1, Math.abs(f) / s) ** 3 * (1 - u) ** 1.5;
        return [f * -l, n + ZS(r.rise, r.curve, u) + p, l * t * (1 - u)];
      },
      f = i(a) * 2;
    YS(
      e,
      d,
      Math.max(1, Math.ceil(f / (r.tile * (e.coarse ? 2 : 1)))),
      u,
      c,
      !0,
    );
  }
}
function $S(e, t, n, r, i, a, o, s) {
  let c = e.coarse ? Math.max(2, Math.ceil(r.rows / 2)) : r.rows,
    l = Math.max(1, Math.round(c * a));
  for (let o of [-1, 1])
    YS(
      e,
      (e, s) => {
        let c = a * s,
          l = (e * 2 - 1) * t * (1 - c),
          u = r.sori * Math.min(1, Math.abs(l) / t) ** 3 * (1 - c) ** 1.5;
        return [o * i(c), n + ZS(r.rise, r.curve, c) + u, l * o];
      },
      Math.max(1, Math.ceil((2 * t) / (r.tile * (e.coarse ? 2 : 1)))),
      l,
      s,
      !0,
    );
}
function eC(e, t, n, r, i, a, o, s, c, l, u) {
  e.push().col(l.band);
  for (let a = 0; a < u; a++) {
    let o = a / u,
      c = (a + 1) / u,
      d = t + (r - t) * o,
      f = n + (i - n) * o,
      p = s(o),
      m = t + (r - t) * c,
      h = n + (i - n) * c,
      g = s(c);
    e.quad(d, p - l.thick, f, m, g - l.thick, h, m, g, h, d, p, f);
  }
  if ((e.pop(), e.coarse)) return;
  e.push().col(l.soffit).mat(0.9, 0, 0, 0);
  let d = c * 0.3;
  for (let f = 0; f < u; f++) {
    let p = f / u,
      m = (f + 1) / u,
      h = t + (r - t) * p,
      g = n + (i - n) * p,
      _ = s(p) - l.thick,
      v = t + (r - t) * m,
      y = n + (i - n) * m,
      b = s(m) - l.thick;
    e.quad(
      v,
      b,
      y,
      h,
      _,
      g,
      h + a * c,
      _ + d,
      g + o * c,
      v + a * c,
      b + d,
      y + o * c,
    );
  }
  e.pop();
}
function tC(e, t, n, r, i) {
  let a = e.coarse ? 2 : 8,
    o = (e) => r + i.sori * Math.abs(e * 2 - 1) ** 3;
  (eC(e, t, -n, -t, -n, 0, 1, o, i.eave, i, a),
    eC(e, -t, -n, -t, n, 1, 0, o, i.eave, i, a),
    eC(e, -t, n, t, n, 0, -1, o, i.eave, i, a),
    eC(e, t, n, t, -n, -1, 0, o, i.eave, i, a));
}
function nC(e, t, n, r) {
  if (r.ridgeH <= 0) return;
  let i = r.ridgeH,
    a = Math.max(0.35, i * 0.55);
  if (
    (e.push().col(r.ridgeColor).mat(0.6, 0.1, 0, 0),
    e.box(-t, n - i * 0.4, -a / 2, t, n + i * 0.6, a / 2),
    !e.coarse)
  ) {
    for (let r of [-1, 1])
      e.box(
        r > 0 ? t - 0.5 : -t,
        n - i * 0.5,
        -a * 0.9,
        r > 0 ? t : -t + 0.5,
        n + i * 1.25,
        a * 0.9,
      );
    e.col(r.ridgeColor, 1.25).box(
      -t,
      n + i * 0.6,
      -a * 0.32,
      t,
      n + i * 0.75,
      a * 0.32,
    );
  }
  e.pop();
}
function rC(e, t) {
  return { ...lme, cell: t.white, ...e };
}
function iC(e, t, n, r, i, a, o, s = 0) {
  let c = rC(o, e),
    l = o.R ?? Math.max(0, i - a),
    u = XS(e, t, n, s);
  if (
    (e.push().col(c.color),
    QS(e, a, r, c, (e) => i + (l - i) * e, 0, 1, i, c.cell),
    $S(e, a, r, c, (e) => i + (l - i) * e, 1, i, c.cell),
    e.pop(),
    tC(e, i, a, r, c),
    nC(e, l, r + c.rise, c),
    !e.coarse && c.ridgeH > 0)
  ) {
    e.push().col(c.ridgeColor);
    for (let t of [-1, 1])
      for (let n of [-1, 1])
        e.rod(
          t * i * 0.98,
          r + c.sori + 0.25,
          n * a * 0.98,
          t * l,
          r + c.rise + 0.1,
          0,
          c.ridgeH * 0.22,
          4,
        );
    e.pop();
  }
  u();
}
function aC(e, t, n, r, i, a, o, s = 0) {
  let c = rC({ sori: 0.15, ...o }, e),
    l = XS(e, t, n, s);
  (e.push().col(c.color), QS(e, a, r, c, () => i, 0, 1, i, c.cell), e.pop());
  let u = e.coarse ? 2 : 8,
    d = (e) => r + c.sori * Math.abs(e * 2 - 1) ** 3;
  (eC(e, i, -a, -i, -a, 0, 1, d, c.eave, c, u),
    eC(e, -i, a, i, a, 0, -1, d, c.eave, c, u),
    nC(e, i, r + c.rise, c));
  let f = o.wallInset ?? c.eave,
    p = o.wallY ?? r,
    m = e.coarse ? 3 : 8;
  for (let t of [-1, 1]) {
    let n = t * (i - f),
      s = a - f;
    e.push().col(o.wallColor ?? 15657696);
    let l = o.wallCell ?? e.white;
    for (let i = 0; i < m; i++) {
      let o = -s + (2 * s * i) / m,
        u = -s + (2 * s * (i + 1)) / m,
        d = 1 - Math.abs(o) / a,
        f = 1 - Math.abs(u) / a,
        h = r + ZS(c.rise, c.curve, d) - c.thick,
        g = r + ZS(c.rise, c.curve, f) - c.thick;
      t > 0
        ? e.quad(n, p, u, n, p, o, n, h, o, n, g, u, l)
        : e.quad(n, p, o, n, p, u, n, g, u, n, h, o, l);
    }
    if ((e.pop(), !e.coarse)) {
      e.push().col(c.band);
      let n = t * i;
      for (let i = 0; i < m; i++) {
        let o = -a + (2 * a * i) / m,
          s = -a + (2 * a * (i + 1)) / m,
          l = 1 - Math.abs(o) / a,
          u = 1 - Math.abs(s) / a,
          d = r + ZS(c.rise, c.curve, l),
          f = r + ZS(c.rise, c.curve, u);
        t > 0
          ? e.quad(
              n,
              f - c.thick * 1.6,
              s,
              n,
              d - c.thick * 1.6,
              o,
              n,
              d + 0.08,
              o,
              n,
              f + 0.08,
              s,
            )
          : e.quad(
              n,
              d - c.thick * 1.6,
              o,
              n,
              f - c.thick * 1.6,
              s,
              n,
              f + 0.08,
              s,
              n,
              d + 0.08,
              o,
            );
      }
      e.pop();
    }
  }
  l();
}
function oC(e, t, n, r, i, a, o, s = 0) {
  let c = rC(o, e),
    l = o.tg ?? 0.42,
    u = o.xg ?? i - a * l * 1.05,
    d = o.og ?? Math.min(1.2, a * 0.12),
    f = XS(e, t, n, s),
    p = (e) => r + ZS(c.rise, c.curve, e);
  e.push().col(c.color);
  let m = (e) => i - (i - u) * Math.min(1, e / l);
  (QS(e, a, r, c, m, 0, l, i, c.cell),
    $S(e, a, r, c, m, l, i, c.cell),
    QS(e, a, r + 0.12, { ...c, sori: 0 }, () => u + d, l - 0.04, 1, i, c.cell),
    e.pop(),
    tC(e, i, a, r, c));
  let h = e.coarse ? 3 : 8,
    g = a * (1 - l);
  for (let t of [-1, 1]) {
    let n = t * u;
    e.push().col(o.gableColor ?? 15328472);
    let r = o.gableCell ?? e.white;
    for (let i = 0; i < h; i++) {
      let o = -g + (2 * g * i) / h,
        s = -g + (2 * g * (i + 1)) / h,
        c = p(1 - Math.abs(o) / a) + 0.05,
        u = p(1 - Math.abs(s) / a) + 0.05,
        d = p(l);
      t > 0
        ? e.quad(n, d, s, n, d, o, n, c, o, n, u, s, r)
        : e.quad(n, d, o, n, d, s, n, u, s, n, c, o, r);
    }
    if ((e.pop(), !e.coarse)) {
      e.push().col(c.band);
      let n = t * (u + d),
        r = h + 2;
      for (let i = 0; i < r; i++) {
        let o = -(g + 0.6) + (2 * (g + 0.6) * i) / r,
          s = -(g + 0.6) + (2 * (g + 0.6) * (i + 1)) / r,
          c = p(1 - Math.abs(o) / a) + 0.2,
          l = p(1 - Math.abs(s) / a) + 0.2;
        t > 0
          ? e.quad(n, l - 0.55, s, n, c - 0.55, o, n, c, o, n, l, s)
          : e.quad(n, c - 0.55, o, n, l - 0.55, s, n, l, s, n, c, o);
      }
      (o.gegyo !== !1 &&
        e
          .col(c.band, 0.95)
          .box(n - 0.07, p(1) - 1.6, -0.45, n + 0.07, p(1) - 0.2, 0.45),
        e.pop());
    }
  }
  if ((nC(e, u + d, p(1), c), !e.coarse && c.ridgeH > 0)) {
    e.push().col(c.ridgeColor);
    for (let t of [-1, 1])
      for (let n of [-1, 1])
        e.rod(
          t * i * 0.97,
          r + c.sori + 0.2,
          n * a * 0.97,
          t * u,
          p(l) + 0.15,
          n * g,
          c.ridgeH * 0.2,
          4,
        );
    e.pop();
  }
  f();
}
