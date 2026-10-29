// tokyo/assets/region-tokyo-55J_WESF 208 — col
// Lines 81875-82200 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function Dj(e, t, n, r, i, a, o, s, c = !1) {
  let l = t.length,
    u = 0;
  for (let d = 0; d < l; d++) {
    let f = t[d],
      p = t[(d + 1) % l],
      m = Math.hypot(p[0] - f[0], p[1] - f[1]);
    if (m < 0.001) continue;
    if (s?.(d)) {
      u += m;
      continue;
    }
    let h = (p[0] - f[0]) / m,
      g = (p[1] - f[1]) / m,
      [_, v] = wj(f, p);
    for (let t = (i - (u % i)) % i; t < m; t += i) {
      if (t < o || t > m - o) continue;
      let i = f[0] + h * t,
        s = f[1] + g * t,
        l = i - h * o * 0.5,
        u = s - g * o * 0.5,
        d = i + h * o * 0.5,
        p = s + g * o * 0.5,
        y = l + _ * a,
        b = u + v * a,
        x = d + _ * a,
        S = p + v * a;
      (e.panel(y, b, x, S, n, r),
        e.panel(l, u, y, b, n, r),
        e.panel(x, S, d, p, n, r),
        c &&
          Tj(
            e,
            [
              [l, u],
              [d, p],
              [x, S],
              [y, b],
            ],
            r,
          ));
    }
    u += m;
  }
}
function Oj(e, t, n, r, i) {
  let a = t.length;
  for (let o = 0; o < a; o++) {
    let s = t[o],
      c = t[(o + 1) % a],
      l = n[(o + 1) % a],
      u = n[o];
    (Math.hypot(c[0] - s[0], c[1] - s[1]) > 0.001 &&
      e.panel(s[0], s[1], c[0], c[1], r, i),
      Math.hypot(l[0] - u[0], l[1] - u[1]) > 0.001 &&
        e.panel(l[0], l[1], u[0], u[1], r, i),
      Tj(e, [s, c, l, u], i, !0),
      Tj(e, [s, c, l, u], r, !1));
  }
}
function kj(e, t, n, r, i, a) {
  let o = 0,
    s = t.length;
  for (let c = 0; c < s; c++) {
    let l = t[c],
      u = t[(c + 1) % s],
      d = Math.hypot(u[0] - l[0], u[1] - l[1]);
    if (d < 0.001) continue;
    let f = i(c);
    (f
      ? e.wall(l[0], l[1], u[0], u[1], n, r, f.cell, f.tw, f.th, a, o)
      : f === null && e.panel(l[0], l[1], u[0], u[1], n, r),
      (o += d));
  }
}
function Wve(e, t, n, r, i, a = 0) {
  let o = [],
    s = Math.cos(a),
    c = Math.sin(a);
  for (let a = 0; a < i; a++) {
    let l = -(a / i) * Math.PI * 2,
      u = Math.cos(l) * n,
      d = Math.sin(l) * r;
    o.push([e + u * s - d * c, t + u * c + d * s]);
  }
  return o;
}
function Aj(e, t, n, r, i, a) {
  let o = e.white,
    s = a ?? (() => n),
    c = e.v(r, s(r, i), i, 0, 1, 0, o.u0, o.v0),
    l = t.map((t) => e.v(t[0], s(t[0], t[1]), t[1], 0, 1, 0, o.u0, o.v0));
  for (let t = 0; t < l.length; t++) e.tri(c, l[t], l[(t + 1) % l.length]);
}
r.add({ 櫸木坂: `けやき坂` });
var jj = { x: -1045, z: 1046 },
  Mj = (e) => ({ x: jj.x, z: jj.z, gy: e.groundHeight(jj.x, jj.z), facing: 0 }),
  Nj = 0.03,
  Pj = { x: -1045, z: 1042, S: 23.5, C: 7, B: 2.2, D: 2.4 },
  Fj = {
    lobby: 9,
    shaft: 210,
    deck: 212.5,
    crown: 228,
    brim: 230,
    roof: 235.5,
    top: 238.4,
  };
function Ij() {
  let { x: e, z: t, S: n, C: r, B: i, D: a } = Pj,
    o = [];
  for (let s of [270, 180, 90, 0]) {
    let c = (s * Math.PI) / 180,
      l = Math.cos(c),
      u = Math.sin(c),
      d = Math.sin(c),
      f = -Math.cos(c),
      p = (n, r) => [e + d * n + l * r, t + f * n + u * r],
      m = n - r;
    o.push(
      p(-m, n),
      p(-m / 2, n + i * 0.72),
      p(0, n + i),
      p(m / 2, n + i * 0.72),
      p(m, n),
    );
    let h = n - r / 2 - a * Math.SQRT1_2;
    o.push(p(m + r * 0.3, n - r * 0.3), p(h, h), p(m + r * 0.7, n - r * 0.7));
  }
  return o;
}
var Lj = (e) => e % 8 < 4;
function* Gve(e, t) {
  let n = Ij(),
    r = t.c(`gtGlass`),
    i = t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1);
  if (
    (e.col(14673126).mat(0.3, 0.5, 0.34, G),
    kj(e, n, 0, Fj.lobby, (e) =>
      Lj(e) ? { cell: i, tw: 3.2, th: Fj.lobby } : !1,
    ),
    e.col(13686231).mat(0.45, 0.35, 0, 0),
    kj(e, n, 0, Fj.shaft, (e) => !Lj(e) && null),
    e.col(13225680).mat(0.45, 0.6, 0.05, 1),
    Hk(e, n, 0.35, Fj.lobby - 0.2, Fj.lobby + 0.6),
    yield,
    e.col(14210770).mat(0.34, 0.3, 0.15, G | 32),
    kj(e, n, Fj.lobby + 0.6, Fj.shaft, (e) =>
      Lj(e) ? { cell: r, tw: 12.8, th: 12.6 } : !1,
    ),
    yield,
    !e.coarse)
  ) {
    (e.col(14870248).mat(0.45, 0.4, 0.03, 1),
      Dj(e, n, Fj.lobby + 0.6, Fj.shaft, 2.6, 0.75, 0.3, (e) => !Lj(e)),
      e.col(9344924).mat(0.5, 0.5, 0, 0));
    for (let t of [76, 142]) Hk(e, n, 0.62, t, t + 2.2);
  }
  (yield,
    e.col(14870248).mat(0.4, 0.6, 0.08, 1),
    Hk(e, n, 0.6, Fj.shaft, Fj.deck));
  let a = Rk(n, -1.1);
  (e.col(15266036).mat(0.12, 0.35, 0.3, G),
    zk(
      e,
      a,
      Fj.deck,
      Fj.crown,
      t.c(`glass`),
      e.coarse ? 12 : 6,
      (Fj.crown - Fj.deck) / (e.coarse ? 1 : 2),
    ),
    e.col(15265006).mat(0.4, 0.6, 0.1, 1),
    Hk(e, n, 1.5, Fj.crown, Fj.brim));
  let o = Rk(n, -2.2);
  if (
    (e.col(7238776).mat(0.7, 0.3, 0, 0),
    zk(e, o, Fj.brim, Fj.roof, e.white, 8, 8),
    e.col(5922659).mat(0.85, 0, 0, 0),
    Vk(e, o, Fj.roof),
    e.col(15659764).mat(0.35, 0.6, 0.32, 1),
    Dj(
      e,
      Rk(n, -0.6),
      Fj.brim,
      Fj.top,
      e.coarse ? 6 : 2.2,
      1.3,
      0.3,
      void 0,
      !0,
    ),
    Oj(e, Rk(n, 0.75), Rk(n, 0.15), Fj.top - 0.7, Fj.top),
    yield,
    !e.coarse)
  ) {
    let { x: t, z: r } = Pj;
    (e.col(4080198).mat(0.8, 0, 0, 0),
      e.box(t - 9, Fj.roof, r - 9, t + 9, Fj.roof + 0.3, r + 9),
      e.col(15921902).mat(0.6, 0, 0.2, 1));
    let i = Fj.roof + 0.32;
    (e.flat(t - 3, r - 4, t - 1.8, r + 4, i),
      e.flat(t + 1.8, r - 4, t + 3, r + 4, i),
      e.flat(t - 1.8, r - 0.6, t + 1.8, r + 0.6, i),
      e.col(16771488).mat(0.4, 0, 0.9, 1));
    for (let n = 0; n < 12; n++) {
      let a = (n / 12) * Math.PI * 2;
      e.obox(
        t + Math.cos(a) * 7.6,
        i + 0.12,
        r + Math.sin(a) * 7.6,
        0.18,
        0.12,
        0.18,
      );
    }
    (e.col(13162718).mat(0.1, 0.4, 0.05, 0),
      zk(e, Rk(n, -2.9), Fj.roof, Fj.roof + 1.2, e.white, 8, 8));
  }
  for (let t of [5, 13, 21, 29]) Wk(e, n[t + 1][0], Fj.top, n[t + 1][1], 0.45);
  if (
    (e.col(14212318).mat(0.4, 0.6, 0.12, 1),
    e.box(
      Pj.x - 11,
      6.6,
      Pj.z - Pj.S - Pj.B - 6.5,
      Pj.x + 11,
      7,
      Pj.z - Pj.S - Pj.B + 0.6,
    ),
    !e.coarse)
  ) {
    e.col(16773334).mat(0.3, 0, 0.8, 1);
    for (let t = Pj.x - 9; t <= Pj.x + 9; t += 3)
      e.flat(
        t - 0.3,
        Pj.z - Pj.S - 7.6,
        t + 0.3,
        Pj.z - Pj.S - 7,
        6.58,
        e.white,
        0,
        0,
        !1,
      );
    e.col(9344666).mat(0.4, 0.6, 0, 0);
    for (let t of [Pj.x - 10, Pj.x + 10])
      (e.cylY(t, Pj.z - Pj.S - Pj.B - 6, 0, 6.6, 0.18, 8),
        e.pole(t, Pj.z - Pj.S - Pj.B - 6, 0.2, 0, 6.6));
  }
  let { x: s, z: c, S: l } = Pj;
  (e.solid(s - l, c - l - 1.5, s + l, c + l + 1.5, 0, Fj.top),
    e.solid(s - l - 1.5, c - l + 4, s + l + 1.5, c + l - 4, 0, Fj.top));
}
function Rj(e, t, n, r, i, a, o, s) {
  let c = t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1),
    l = t.c(`office`),
    u = 0;
  for (let t = 0; t < o.length; t++) {
    let d = o[t],
      f = n + d.w,
      p = i - d.e,
      m = r + d.n,
      h = a - d.s;
    (t === 0 &&
      (e.col(15392716).mat(0.35, 0.3, 0.36, G),
      Ej(e, f, m, p, h, 0, 5.4, c, e.coarse ? 9.6 : 3.2, 5.4),
      e.col(13616046).mat(0.7, 0, 0.05, 1),
      e.box(f - 0.3, 5.4, m - 0.3, p + 0.3, 6.2, h + 0.3),
      (u = 6.2)),
      e.col(14273718).mat(0.6, 0.1, 0.12, G | 32));
    let g = t === o.length - 1,
      _ = e.coarse ? 3 : 1;
    (Ej(
      e,
      f,
      m,
      p,
      h,
      u,
      d.y,
      l,
      3.6 * _,
      4 * _,
      g && s !== null ? void 0 : 10263186,
    ),
      e.col(12892322).mat(0.7, 0, 0, 0),
      e.coarse ||
        Hk(
          e,
          [
            [p, m],
            [f, m],
            [f, h],
            [p, h],
          ],
          0.25,
          d.y - 0.1,
          d.y + 0.5,
        ));
    let v = o[t + 1];
    if (v && !e.coarse) {
      e.col(5208638).mat(0.95, 0, 0, 0);
      let t = d.y + (e.coarse ? 0 : 0.5);
      (v.n - d.n > 2 && e.box(f + 0.6, t, m + 0.6, p - 0.6, t + 0.9, m + 1.8),
        v.s - d.s > 2 && e.box(f + 0.6, t, h - 1.8, p - 0.6, t + 0.9, h - 0.6),
        v.w - d.w > 2 && e.box(f + 0.6, t, m + 1.8, f + 1.8, t + 0.9, h - 1.8),
        v.e - d.e > 2 && e.box(p - 1.8, t, m + 1.8, p - 0.6, t + 0.9, h - 1.8));
    }
    (e.solid(f, m, p, h, 0, d.y + 0.5), (u = e.coarse ? d.y : d.y + 0.5));
  }
  if (s !== null) {
    let c = o[o.length - 1];
    (e.col(s).mat(0.95, 0, 0, 0),
      e.flat(
        n + c.w,
        r + c.n,
        i - c.e,
        a - c.s,
        e.coarse ? c.y : c.y + 0.52,
        t.c(`lawn`),
        6,
        6,
      ));
  }
}
