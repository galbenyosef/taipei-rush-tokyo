// tokyo__assets__world-Bo9wkXrT 20 — col
// Lines 5849-6185 of readable/tokyo__assets__world-Bo9wkXrT.pretty.js (statement-aligned).
function xr(e, t, n, r, i, a, o, s, c = 0.35) {
  let l = o.tile ?? 0,
    u = Cr(t, r, l, c),
    d = Cr(n, i, l, c);
  o.reg ? e.tex(o.reg, o.hex, o.emit ?? 0) : e.col(o.hex, o.emit ?? 0);
  for (let o = 0; o + 1 < u.length; o++)
    for (let c = 0; c + 1 < d.length; c++) {
      let f = u[o],
        p = u[o + 1],
        m = d[c],
        h = d[c + 1],
        [g, _] = l
          ? wr(f - t, p - t, l)
          : [(f - t) / (r - t), (p - t) / (r - t)],
        [v, y] = l
          ? wr(m - n, h - n, l)
          : [(m - n) / (i - n), (h - n) / (i - n)];
      e.rectY(f, m, p, h, a, s ? 1 : -1, g, v, _, y);
    }
}
function Sr(e, t, n, r, i, a, o, s, c = 0.35, l = o) {
  let u = s.tile ?? 0,
    d = Cr(r, i, u, c),
    f = [a];
  for (let e of [0.3, l - 0.3]) e > a + 0.01 && e < o - 0.01 && f.push(e);
  if (u)
    for (let e = Math.ceil((a + 0.001) / u) * u; e < o - 0.001; e += u)
      f.push(e);
  (f.push(o),
    f.sort((e, t) => e - t),
    s.reg ? e.tex(s.reg, s.hex, s.emit ?? 0) : e.col(s.hex, s.emit ?? 0));
  for (let s = 0; s + 1 < d.length; s++)
    for (let c = 0; c + 1 < f.length; c++) {
      let l = d[s],
        p = d[s + 1],
        m = f[c],
        h = f[c + 1];
      if (h - m < 0.001) continue;
      let [g, _] = u
          ? wr(l - r, p - r, u)
          : [(l - r) / (i - r), (p - r) / (i - r)],
        [v, y] = u ? wr(m, h, u) : [(m - a) / (o - a), (h - a) / (o - a)];
      switch (t) {
        case `front`:
          e.rectZ(l, m, p, h, n, 1, g, v, _, y);
          break;
        case `back`:
          (([g, _] = [1 - _, 1 - g]), e.rectZ(l, m, p, h, n, -1, g, v, _, y));
          break;
        case `left`:
          (([g, _] = [1 - _, 1 - g]), e.rectX(l, m, p, h, n, 1, g, v, _, y));
          break;
        case `right`:
          e.rectX(l, m, p, h, n, -1, g, v, _, y);
      }
    }
}
function Cr(e, t, n, r) {
  let i = [e];
  if (n)
    for (let r = Math.ceil((e + 0.001) / n) * n; r < t - 0.001; r += n)
      i.push(r);
  (r > 0 && t - e > r * 2.5 && i.push(e + r, t - r),
    i.push(t),
    i.sort((e, t) => e - t));
  let a = [];
  for (let e of i) (!a.length || e - a[a.length - 1] > 0.001) && a.push(e);
  return a;
}
function wr(e, t, n) {
  let r = Math.floor((e + 1e-4) / n),
    i = e / n - r,
    a = t / n - r;
  return [i, Math.min(1, a)];
}
function Tr(e, t) {
  let n = e.vcount,
    { x0: r, z0: i, x1: a, z1: o, h: s } = t;
  (xr(e, r, i, a, o, 0, t.floor, !0),
    t.ceiling && xr(e, r, i, a, o, s, t.ceiling, !1));
  let c = t.openings ?? [],
    l = [
      [`front`, i, r, a],
      [`back`, o, r, a],
      [`left`, r, i, o],
      [`right`, a, i, o],
    ];
  for (let [n, r, i, a] of l) {
    let o = t.walls && n in t.walls ? t.walls[n] : t.wall;
    if (!o) continue;
    let l = c.filter((e) => e.wall === n).sort((e, t) => e.a - t.a),
      u = i;
    for (let t of l)
      (t.a > u + 0.001 && Sr(e, n, r, u, t.a, 0, s, o, 0.35, s),
        t.y0 > 0.01 && Sr(e, n, r, t.a, t.b, 0, t.y0, o, 0.35, s),
        t.y1 < s - 0.01 && Sr(e, n, r, t.a, t.b, t.y1, s, o, 0.35, s),
        (u = t.b));
    if ((a > u + 0.001 && Sr(e, n, r, u, a, 0, s, o, 0.35, s), t.baseboard)) {
      e.col(t.baseboard.hex);
      let o = t.baseboard.h,
        s = 0.015,
        c = i,
        u = [];
      for (let e of l) e.y0 < o && (e.a > c && u.push([c, e.a]), (c = e.b));
      a > c && u.push([c, a]);
      for (let [t, i] of u)
        n === `front`
          ? e.box(t, 0, r, i, o, r + s)
          : n === `back`
            ? e.box(t, 0, r - s, i, o, r)
            : n === `left`
              ? e.box(r, 0, t, r + s, o, i)
              : e.box(r - s, 0, t, r, o, i);
    }
  }
  let u = e.vcount,
    d = t.ao ?? 0.3;
  if (d > 0) {
    let t = [0, 0, 0, 0];
    e.shade(n, u, (e, n, c) => {
      if (
        ((t[0] = Math.abs(e - r)),
        (t[1] = Math.abs(a - e)),
        (t[2] = Math.abs(c - i)),
        (t[3] = Math.abs(o - c)),
        t.sort((e, t) => e - t),
        n < 0.01 || n > s - 0.01)
      ) {
        let e =
          Math.exp(-t[0] / 0.3) * (n < 0.01 ? 1 : 0.7) +
          Math.exp(-t[1] / 0.4) * 0.35 * Math.exp(-t[0] / 0.3);
        return 1 - d * Math.min(1, e);
      }
      let l = Math.exp(-Math.min(n, s - n) / 0.28),
        u = Math.exp(-t[1] / 0.35);
      return 1 - d * Math.min(1, Math.max(l * 0.75, u * 0.55) + l * u * 0.3);
    });
  }
  return [n, u];
}
function Er(e, t, n, r, i, a, o, s = {}) {
  let c = s.body ?? 15330284,
    l = s.back ?? 14014940,
    u = o.length;
  (e.col(4869973),
    e.box(t, 0, r, n, 0.12, r + i, 39),
    e.col(l),
    e.box(t, 0.12, r + i - 0.04, n, a, r + i, 39),
    e.col(c),
    e.box(t, 0, r, t + 0.04, a, r + i, 63),
    e.box(n - 0.04, 0, r, n, a, r + i, 63));
  let d = s.seg ?? 0.9,
    f = (a - 0.2) / u;
  for (let a = 0; a < u; a++) {
    let l = 0.12 + a * f;
    (e.col(c), e.box(t + 0.04, l, r, n - 0.04, l + 0.03, r + i - 0.04, 36));
    let u = Math.min(f - 0.07, 0.34 + (a === 0 ? 0.05 : 0)),
      p = Math.max(1, Math.round((n - t - 0.08) / d)),
      m = (n - t - 0.08) / p;
    for (let n = 0; n < p; n++) {
      let s = t + 0.04 + n * m,
        c = s + m,
        d = ((n * 7 + a * 3) % 5) * 0.012;
      (e.tex(o[a], 16777215, 0.02),
        e.rectZ(s, l + 0.03, c, l + 0.03 + u, r + 0.03 + d, -1),
        e.col(10133670),
        e.rectY(s, r + 0.03 + d, c, r + i - 0.05, l + 0.03 + u, 1));
    }
    s.edge &&
      (e.tex(s.edge, 16777215, 0.02),
      e.box(t + 0.04, l - 0.045, r - 0.012, n - 0.04, l + 0.03, r + 0.01, 36));
  }
  s.top !== !1 && (e.col(c), e.box(t, a, r, n, a + 0.03, r + i, 63));
}
function Dr(e, t, n, r, i, a, o, s = {}) {
  let c = 0.45;
  (e
    .push()
    .translate(t, 0, (n + r) / 2)
    .rotateY(Math.PI / 2),
    Er(e, -(r - n) / 2, (r - n) / 2, -0.45, c, i, a, {
      edge: s.edge,
      body: s.body,
      top: !1,
    }),
    e.pop(),
    e
      .push()
      .translate(t, 0, (n + r) / 2)
      .rotateY(-Math.PI / 2),
    Er(e, -(r - n) / 2, (r - n) / 2, -0.45, c, i, o, {
      edge: s.edge,
      body: s.body,
      top: !1,
    }),
    e.pop(),
    e.col(s.body ?? 15330284),
    e.box(t - c, i, n, t + c, i + 0.04, r, 63));
  for (let [a, o] of [
    [n, -1],
    [r, 1],
  ]) {
    e.col(13685976);
    let n = o < 0 ? a - 0.04 : a,
      r = o < 0 ? a : a + 0.04;
    (e.box(t - c, 0, n, t + c, i, r, 63),
      s.end &&
        (e.tex(s.end, 16777215, 0.05),
        o < 0
          ? e.rectZ(t - c + 0.04, 0.2, t + c - 0.04, i - 0.15, a - 0.045, -1)
          : e.rectZ(t - c + 0.04, 0.2, t + c - 0.04, i - 0.15, a + 0.045, 1)));
  }
}
function Or(e, t, n, r, i, a, o, s = {}) {
  let c = s.depth ?? 0.75,
    l = s.frame ?? 2764081,
    u = Math.max(1, Math.round((r - n) / 0.78)),
    d = (r - n) / u,
    f = i - c;
  (e.col(l),
    e.box(n, 0, f, r, 0.22, i, 36),
    e.box(n, a - 0.34, f, r, a, i, 44),
    e.box(n - 0.05, 0, f, n, a, i, 63),
    e.box(r, 0, f, r + 0.05, a, i, 63),
    s.header &&
      (e.tex(s.header, 16777215, 0.75, 1.1),
      e.rectZ(n + 0.02, a - 0.31, r - 0.02, a - 0.03, f - 0.012, -1)));
  for (let r = 0; r < u; r++) {
    let i = n + r * d,
      s = i + d;
    (e.tex(o[r % o.length], 16777215, 0.45, 1.08),
      e.rectZ(i + 0.03, 0.24, s - 0.03, a - 0.36, f + 0.18, -1),
      e.col(14674158, 0.35),
      e.rectX(f, 0.22, f + 0.18, a - 0.34, i + 0.03, 1),
      e.rectX(f, 0.22, f + 0.18, a - 0.34, s - 0.03, -1),
      e.col(16055295, 0.8, 1.6),
      e.rectY(i + 0.03, f, s - 0.03, f + 0.18, a - 0.36, -1),
      e.col(l),
      e.box(s - 0.025, 0.22, f - 0.03, s + 0.025, a - 0.34, f, 35),
      e.col(13225683),
      e.box(i + 0.07, 0.8, f - 0.07, i + 0.1, 1.55, f - 0.03, 63),
      t.col(14217460, 0.12),
      (t.both = !0),
      t.rectZ(i + 0.03, 0.24, s - 0.03, a - 0.36, f - 0.015, -1),
      (t.both = !1));
  }
}
function kr(e, t, n, r = 0.72, i = 12597547) {
  (e.col(9343896),
    e.cyl(t, n, 0.2, 0.18, 0, 0.03, 10, !0),
    e.cyl(t, n, 0.025, 0.025, 0.03, r - 0.05, 6, !1),
    e.col(i),
    e.cyl(t, n, 0.17, 0.17, r - 0.06, r, 12, !0));
}
function Ar(e, t, n, r, i, a, o, s, c, l, u, d = 3.2, f = 16777215) {
  for (let p = 0; p < o; p++)
    for (let m = 0; m < s; m++) {
      let h = t + ((p + 0.5) * (r - t)) / o,
        g = n + ((m + 0.5) * (i - n)) / s;
      (e.col(12172996),
        e.box(
          h - c / 2 - 0.03,
          a - 0.03,
          g - l / 2 - 0.03,
          h + c / 2 + 0.03,
          a - 0.005,
          g + l / 2 + 0.03,
          59,
        ),
        u ? e.tex(u, f, 1, d) : e.col(f, 1, d),
        e.rectY(h - c / 2, g - l / 2, h + c / 2, g + l / 2, a - 0.032, -1));
    }
}
function jr(e, t, n, r, i, a, o, s = 0, c = 0.15, l = 0.4) {
  (e.push().translate(n, r, i).rotateY(s),
    e.col(10133670),
    e.box(-a / 2 + 0.05, o / 2, -0.004, -a / 2 + 0.06, o / 2 + l, 0.004),
    e.box(a / 2 - 0.06, o / 2, -0.004, a / 2 - 0.05, o / 2 + l, 0.004),
    e.col(16777215, c),
    e.box(-a / 2, -o / 2, -0.012, a / 2, o / 2, 0.012, 15),
    e.tex(t, 16777215, c),
    e.rectZ(-a / 2, -o / 2, a / 2, o / 2, -0.013, -1),
    e.rectZ(-a / 2, -o / 2, a / 2, o / 2, 0.013, 1),
    e.pop());
}
function Mr(e, t, n, r = 1, i = 15262422, a = 4160058) {
  (e.col(i),
    e.lathe(t, n, [0.14 * r, 0, 0.19 * r, 0.34 * r, 0.2 * r, 0.38 * r], 10),
    e.col(3812127),
    e.disc(t, 0.36 * r, n, 0.18 * r, 10),
    e.col(a, 0.02));
  for (let i = 0; i < 7; i++) {
    let a = i * 2.4,
      o = (0.08 + (i % 3) * 0.05) * r;
    e.sphere(
      t + Math.cos(a) * o,
      (0.55 + (i % 4) * 0.13) * r,
      n + Math.sin(a) * o,
      (0.17 - (i % 3) * 0.02) * r,
      7,
      5,
      0.75,
    );
  }
}
function Nr(e, t, n, r = 0, i = 12597547, a = 9343896) {
  (e.push().translate(t, 0, n).rotateY(r), e.col(a));
  for (let [t, n] of [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ])
    e.box(
      t * 0.19 - 0.015,
      0,
      n * 0.19 - 0.015,
      t * 0.19 + 0.015,
      0.44,
      n * 0.19 + 0.015,
      51,
    );
  for (let t of [-1, 1])
    e.box(
      t * 0.19 - 0.015,
      0.44,
      0.175,
      t * 0.19 + 0.015,
      0.86,
      0.19 + 0.015,
      51,
    );
  (e.col(i),
    e.box(-0.21, 0.42, -0.21, 0.21, 0.46, 0.21, 63),
    e.box(-0.2, 0.62, 0.17, 0.2, 0.84, 0.2, 63),
    e.pop());
}
