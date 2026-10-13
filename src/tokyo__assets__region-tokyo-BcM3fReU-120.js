// tokyo__assets__region-tokyo-BcM3fReU 120 — math
// Lines 54860-55195 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function ID(e, t, n, r, i, a, o, s, c, l = 0) {
  let u = MD({ thick: 0.45, ...c }, e),
    d = TD(e, t, n, l),
    f = e.seg(16),
    p = (e) => r + s * (1 + Math.cos(Math.PI * e)) * 0.5 + 0.25 * e * e * e * e;
  e.push().col(u.color);
  let m = Math.abs(o - a),
    h = Math.max(1, Math.ceil(m / u.tile));
  for (let t = 0; t < f; t++) {
    let n = -1 + (2 * t) / f,
      r = -1 + (2 * (t + 1)) / f,
      s = n * i,
      c = r * i,
      l = p(n),
      d = p(r);
    for (let t = 0; t < h; t++) {
      let n = a + ((o - a) * t) / h,
        r = a + ((o - a) * (t + 1)) / h;
      e.quad(c, d, n, s, l, n, s, l, r, c, d, r, u.cell);
    }
  }
  if ((e.pop(), !e.coarse)) {
    e.push().col(u.soffit);
    for (let t = 0; t < f; t++) {
      let n = -1 + (2 * t) / f,
        r = -1 + (2 * (t + 1)) / f,
        s = n * i,
        c = r * i,
        l = p(n) - u.thick,
        d = p(r) - u.thick;
      e.quad(s, l, a, c, d, a, c, d, o, s, l, o);
    }
    e.pop();
  }
  e.push().col(c.boardColor ?? 15130575);
  let g = 0.6,
    _ = Math.min(a, o) - 0.12;
  for (let t = 0; t < f; t++) {
    let n = -1 + (2 * t) / f,
      r = -1 + (2 * (t + 1)) / f,
      a = n * i,
      o = r * i,
      s = p(n) + 0.15,
      c = p(r) + 0.15;
    (e.quad(o, c - g, _, a, s - g, _, a, s, _, o, c, _),
      e.quad(a, s, _, a, s, _ + 0.5, o, c, _ + 0.5, o, c, _),
      e.coarse ||
        e.quad(a, s - g, _ + 0.5, a, s - g, _, o, c - g, _, o, c - g, _ + 0.5));
  }
  if (!e.coarse) {
    if ((e.col(c.gilt ?? 13214282).mat(0.35, 0.8, 0, 0), c.fittings !== !1))
      for (let t of [-0.75, -0.4, 0, 0.4, 0.75]) {
        let n = p(t) - g * 0.45;
        e.box(t * i - 0.25, n - 0.2, _ - 0.05, t * i + 0.25, n + 0.2, _ + 0.02);
      }
    (e.mat(0.8, 0, 0, 0).col(c.boardColor ?? 15130575, 0.95),
      c.pendant === !1
        ? e.box(
            -0.32,
            p(0) - g - 0.45,
            _ + 0.02,
            0.32,
            p(0) - g + 0.05,
            _ + 0.2,
          )
        : e.box(-0.5, p(0) - g - 1.4, _ + 0.02, 0.5, p(0) - g + 0.05, _ + 0.2));
  }
  (e.pop(), d());
}
function LD(e, t, n, r, i, a, o) {
  let s = TD(e, t, n, r),
    c = o.type === `myojin`,
    l = Math.max(0.12, i * 0.065),
    u = c ? 0.035 : 0,
    d = o.color ?? (c ? 13123626 : 11569754),
    f = i / 2,
    p = a * 0.72;
  e.push().col(d).mat(0.7, 0, 0, 0);
  for (let t of [-1, 1]) {
    let n = t * f,
      r = t * (f - a * u);
    (e.rod(n, 0, 0, r, a * (c ? 0.86 : 0.9), 0, l, 10, l * 0.92),
      c &&
        !e.coarse &&
        e
          .push()
          .col(1842204)
          .rod(n, 0, 0, n, a * 0.09, 0, l * 1.12, 10)
          .pop(),
      e.pole(n, 0, l + 0.05, 0, a * 0.86));
  }
  let m = l * 0.9,
    h = l * 0.7,
    g = c ? f + l * 3.2 : f - l * 0.2;
  if ((e.box(-g, p - m / 2, -h / 2, g, p + m / 2, h / 2), c)) {
    let t = a * 0.86,
      n = l * 5.2,
      r = e.seg(10),
      i = (e) => 0.11 * a * Math.abs(e) ** 3;
    for (let a = 0; a < r; a++) {
      let s = -1 + (2 * a) / r,
        c = -1 + (2 * (a + 1)) / r,
        u = s * (f + n),
        p = c * (f + n);
      (e.col(d),
        RD(
          e,
          u,
          t + i(s),
          p,
          t + i(c),
          l * 1.1,
          l * 0.75,
          a === 0,
          a === r - 1,
        ),
        e.col(o.kasagiColor ?? 1973275),
        RD(
          e,
          u * 1.05,
          t + l * 1.1 + i(s) * 1.2,
          p * 1.05,
          t + l * 1.1 + i(c) * 1.2,
          l * 1.15,
          l * 0.95,
          a === 0,
          a === r - 1,
        ));
    }
    if (
      (e
        .col(d)
        .box(-l * 0.6, p + m / 2, -l * 0.45, l * 0.6, t - l * 0.4, l * 0.45),
      o.plaque && !e.coarse)
    ) {
      e.col(16777215).mat(0.6, 0, 0.12, 0);
      let n = Math.min(t - p - m, l * 6),
        r = n * 0.62,
        i = (p + t) / 2;
      (e.panel(
        r / 2,
        -l * 0.5,
        -r / 2,
        -l * 0.5,
        i - n / 2,
        i + n / 2,
        o.plaque,
      ),
        e.mat(0.7, 0, 0, 0));
    }
  } else
    e.col(o.kasagiColor ?? d).rod(
      -f - l * 2.5,
      a - l,
      0,
      f + l * 2.5,
      a - l,
      0,
      l * 1.05,
      10,
    );
  (e.pop(), s());
}
function RD(e, t, n, r, i, a, o, s = !1, c = !1) {
  let l = o / 2;
  (s && e.quad(t, n, -l, t, n, l, t, n + a, l, t, n + a, -l),
    c && e.quad(r, i, l, r, i, -l, r, i + a, -l, r, i + a, l),
    e.quad(r, i, -l, t, n, -l, t, n + a, -l, r, i + a, -l),
    e.quad(t, n, l, r, i, l, r, i + a, l, t, n + a, l),
    e.quad(t, n + a, l, r, i + a, l, r, i + a, -l, t, n + a, -l),
    e.coarse || e.quad(t, n, -l, r, i, -l, r, i, l, t, n, l));
}
function zD(e, t, n, r, i, a) {
  let o = MD(a, e),
    s = a.sides ?? 8,
    c = a.rot ?? Math.PI / s,
    l = Math.min(1, a.tTop ?? 1),
    u = Math.max(
      1,
      Math.round((e.coarse ? Math.max(2, Math.ceil(o.rows / 2)) : o.rows) * l),
    ),
    d = (e) => r + ED(o.rise, o.curve, e),
    f = (e, t) => o.sori * Math.abs(e * 2 - 1) ** 3 * (1 - t) ** 1.5,
    p = TD(e, t, n, 0),
    m = [];
  for (let e = 0; e <= s; e++) {
    let t = c + (e / s) * Math.PI * 2;
    m.push([Math.cos(t) * i, Math.sin(t) * i]);
  }
  let h = Math.hypot(m[1][0] - m[0][0], m[1][1] - m[0][1]),
    g = Math.max(1, Math.ceil(h / (o.tile * (e.coarse ? 2 : 1))));
  e.push().col(o.color);
  for (let t = 0; t < s; t++) {
    let [n, r] = m[t],
      [i, a] = m[t + 1],
      s = (e, t) => {
        let o = 1 - t;
        return [(n + (i - n) * e) * o, d(t) + f(e, t), (r + (a - r) * e) * o];
      };
    for (let t = 0; t < u; t++) {
      let n = (l * t) / u,
        r = (l * (t + 1)) / u;
      for (let t = 0; t < g; t++) {
        let i = s(t / g, n),
          a = s((t + 1) / g, n),
          c = s((t + 1) / g, r),
          l = s(t / g, r);
        e.quad(
          a[0],
          a[1],
          a[2],
          i[0],
          i[1],
          i[2],
          l[0],
          l[1],
          l[2],
          c[0],
          c[1],
          c[2],
          o.cell,
        );
      }
    }
  }
  e.pop();
  let _ = e.coarse ? 2 : 6;
  for (let t = 0; t < s; t++) {
    let [n, i] = m[t],
      [s, c] = m[t + 1],
      l = Math.hypot((n + s) / 2, (i + c) / 2) || 1,
      u = a.bandCell,
      d = u ? Math.max(1, Math.round(h / (a.bandTile ?? 1.5))) : 1,
      p = u ? d * (e.coarse ? 1 : 2) : _;
    e.push().col(u ? 16777215 : o.band);
    for (let t = 0; t < p; t++) {
      let a = t / p,
        l = (t + 1) / p,
        m = s + (n - s) * a,
        h = c + (i - c) * a,
        g = r + f(1 - a, 0),
        _ = s + (n - s) * l,
        v = c + (i - c) * l,
        y = r + f(1 - l, 0);
      if (u) {
        let t = (a * d) % 1,
          n = t + (l - a) * d;
        e.quad(
          m,
          g - o.thick,
          h,
          _,
          y - o.thick,
          v,
          _,
          y,
          v,
          m,
          g,
          h,
          u,
          t,
          0,
          n,
          1,
        );
      } else e.quad(m, g - o.thick, h, _, y - o.thick, v, _, y, v, m, g, h);
    }
    if ((e.pop(), !e.coarse && o.eave > 0)) {
      e.push().col(o.soffit).mat(0.9, 0, 0, 0);
      let t = o.eave * 0.35;
      for (let a = 0; a < _; a++) {
        let u = a / _,
          d = (a + 1) / _,
          p = s + (n - s) * u,
          m = c + (i - c) * u,
          h = r + f(1 - u, 0) - o.thick,
          g = s + (n - s) * d,
          v = c + (i - c) * d,
          y = r + f(1 - d, 0) - o.thick,
          b = Math.max(0, 1 - o.eave / (l || 1));
        e.quad(g, y, v, p, h, m, p * b, h + t, m * b, g * b, y + t, v * b);
      }
      e.pop();
    }
  }
  let v = e.coarse ? Math.min(1, a.hips ?? 3) : (a.hips ?? 3);
  if (v > 0 && o.ridgeH > 0) {
    e.push().col(o.ridgeColor).mat(0.6, 0.15, 0, 0);
    let t = Math.max(0.08, o.ridgeH * 0.22);
    for (let n = 0; n < s; n++) {
      let [i, s] = m[n];
      for (let n = 0; n < v; n++) {
        let r = 0.02 + ((l - 0.02) * n) / v,
          a = 0.02 + ((l - 0.02) * (n + 1)) / v;
        e.rod(
          i * (1 - r),
          d(r) + f(0, r) + t,
          s * (1 - r),
          i * (1 - a),
          d(a) + f(0, a) + t,
          s * (1 - a),
          t,
          4,
        );
      }
      if (!e.coarse && (a.curl ?? 0) > 0) {
        let n = a.curl;
        e.rod(
          i,
          r + o.sori,
          s,
          i * (1 + 0.08 * n),
          r + o.sori + n,
          s * (1 + 0.08 * n),
          t * 0.9,
          4,
          t * 0.5,
        );
      }
    }
    e.pop();
  }
  return (p(), d(l));
}
function BD(e, t, n, r, i, a, o = 0.16, s = 0.06, c = 0) {
  let l = a[a.length - 1].y1,
    u = a[0].y0;
  for (let d of a) {
    let a = o + ((s - o) * (d.y0 - u)) / (l - u || 1),
      f = o + ((s - o) * (d.y1 - u)) / (l - u || 1);
    (e.emis(a, Y),
      e.wall(t, n, r, i, d.y0, d.y1, d.cell, d.tw, d.y1 - d.y0, f, c));
  }
  e.emis(0, 0);
}
