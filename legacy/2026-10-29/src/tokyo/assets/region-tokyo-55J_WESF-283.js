// tokyo/assets/region-tokyo-55J_WESF 283 — math
// Lines 104383-104713 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function qwe(e, t, n) {
  let r = 0.3,
    i = 0.55,
    a = Math.floor(n / 0.64),
    o = VV(4401);
  (e.push(),
    e.col(3878436).mat(0.9, 0, 0, 0),
    e.box(-n / 2 - 0.3, 0, -0.1, n / 2 + 0.3, 0.35, 1.76),
    e.solid(-n / 2 - 0.3, -0.1, n / 2 + 0.3, 1.76, 0, 3.9000000000000004),
    e.col(14207394).mat(0.95),
    e.panel(n / 2, 0.6, -n / 2, 0.6, 0.35, 3.6500000000000004),
    e
      .col(3089693)
      .box(-n / 2 - 0.2, 0.35, 1.56, n / 2 + 0.2, 3.8500000000000005, 1.71));
  for (let t = 0; t < 6; t++) {
    let s = 0.35 + t * i,
      c = t * 0.16;
    for (let t = 0; t < a; t++) {
      let l = -n / 2 + (t + 0.5) * (n / a),
        u = HH[Math.floor(o.next() * HH.length)];
      if (
        (e
          .col(o.next() < 0.1 ? u : 15854816, o.range(0.9, 1.03))
          .mat(0.88, 0, 0.1, 1),
        e.quad(
          l + r,
          s,
          c,
          l - r,
          s,
          c,
          l - r,
          s + i - 0.03,
          c,
          l + r,
          s + i - 0.03,
          c,
        ),
        e.coarse)
      )
        continue;
      e.col(o.next() < 0.8 ? 1841688 : u);
      let d = r * o.range(0.12, 0.2),
        f = l + o.range(-0.05, 0.05);
      e.panel(
        f + d,
        c - 0.025,
        f - d,
        c - 0.025,
        s + i * o.range(0.18, 0.26),
        s + i * o.range(0.66, 0.76),
      );
    }
  }
  (e.pop(), UH(e, t, n / 2 + 0.6, 2.16, 4.9, 4.300000000000001));
}
function Jwe(e, t, n) {
  let r = 0.36,
    i = Math.floor(n / 0.82);
  e.push().col(4864556).mat(0.9, 0, 0, 0);
  for (let t = 0; t <= 3; t++)
    e.box(-n / 2 - 0.3, t * 0.9, -0.05, n / 2 + 0.3, t * 0.9 + 0.12, 1.1);
  for (let t = -n / 2 - 0.2; t <= n / 2 + 0.25; t += n / 6)
    e.box(t - 0.08, 0, -0.05, t + 0.08, 2.8200000000000003, 0.1);
  for (let t = 0; t < 3; t++) {
    let a = 0.48 + t * 0.9;
    for (let o = 0; o < i; o++) {
      let s = -n / 2 + (o + 0.5) * (n / i);
      if (
        (e
          .col(9068090, 0.9 + ((o * 7 + t * 3) % 5) * 0.04)
          .mat(0.85, 0, 0.05, 1),
        e.rod(s, a, 1, s, a, 0, r, e.coarse ? 4 : 5, r),
        !e.coarse)
      ) {
        e.col(6965808);
        let t = e.sub(s, a, -0.01, 0);
        (WH(e, r * 0.95, 5), e.leave(t));
      }
    }
  }
  (e.pop(),
    e.solid(-n / 2 - 0.3, -0.1, n / 2 + 0.3, 1.1, 0, 3.2),
    UH(e, t, n / 2 + 0.6, 1.5, 4.4, 3.8000000000000003));
}
function WH(e, t, n) {
  let r = e.white,
    i = e.v(0, 0, 0, 0, 0, -1, r.u0, r.v0);
  for (let i = 0; i < n; i++) {
    let a = (i / n) * Math.PI * 2;
    e.v(Math.cos(a) * t, Math.sin(a) * t, 0, 0, 0, -1, r.u0, r.v0);
  }
  for (let t = 0; t < n; t++) e.tri(i, i + 1 + t, i + 1 + ((t + 1) % n));
}
function GH(e, t, n, r, i, a, o) {
  let s = t.length,
    c = n / 2,
    l = [],
    u = [];
  for (let e = 0; e < s; e++) {
    let n = t[e],
      r = t[Math.max(0, e - 1)],
      i = t[Math.min(s - 1, e + 1)],
      a = n[0] - r[0],
      o = n[1] - r[1],
      d = i[0] - n[0],
      f = i[1] - n[1],
      p = Math.hypot(a, o) || 1,
      m = Math.hypot(d, f) || 1,
      h = (e ? a / p : 0) + (e < s - 1 ? d / m : 0),
      g = (e ? o / p : 0) + (e < s - 1 ? f / m : 0),
      _ = Math.hypot(h, g) || 1;
    ((h /= _), (g /= _));
    let v = e < s - 1 ? d / m : a / p,
      y = e < s - 1 ? f / m : o / p,
      b = 1 / Math.max(0.5, h * v + g * y);
    (l.push([n[0] - g * c * b, n[1] + h * c * b]),
      u.push([n[0] + g * c * b, n[1] - h * c * b]));
  }
  e.push().col(i).mat(0.95, 0, 0, 0);
  for (let i = 0; i + 1 < s; i++) {
    let s = Math.hypot(t[i + 1][0] - t[i][0], t[i + 1][1] - t[i][1]),
      c = Math.max(1, Math.ceil(s / (e.coarse ? 12 : 4)));
    for (let t = 0; t < c; t++) {
      let d = t / c,
        f = (t + 1) / c,
        p = (e, t) => {
          let n = e[i][0] + (e[i + 1][0] - e[i][0]) * t,
            a = e[i][1] + (e[i + 1][1] - e[i][1]) * t;
          return [n, o(n, a) + r, a];
        },
        m = p(l, d),
        h = p(u, d),
        g = p(u, f),
        _ = p(l, f);
      (h[2] - m[2]) * (g[0] - h[0]) - (h[0] - m[0]) * (g[2] - h[2]) > 0
        ? e.quad(
            m[0],
            m[1],
            m[2],
            h[0],
            h[1],
            h[2],
            g[0],
            g[1],
            g[2],
            _[0],
            _[1],
            _[2],
            a,
            0,
            0,
            n / 4,
            s / c / 4,
          )
        : e.quad(
            _[0],
            _[1],
            _[2],
            g[0],
            g[1],
            g[2],
            h[0],
            h[1],
            h[2],
            m[0],
            m[1],
            m[2],
            a,
            0,
            0,
            n / 4,
            s / c / 4,
          );
    }
  }
  e.pop();
}
function Ywe(e, t, n, r, i, a, o) {
  let s = Math.hypot(r - t, i - n);
  if (s < 0.5) return;
  e.push().col(9402962).mat(0.85, 0, 0, 0);
  let c = e.coarse ? [0.85] : [0.45, 0.85];
  for (let s of c)
    (e.quad(
      t,
      a + s - 0.05,
      n,
      r,
      o + s - 0.05,
      i,
      r,
      o + s + 0.03,
      i,
      t,
      a + s + 0.03,
      n,
    ),
      e.quad(
        r,
        o + s - 0.05,
        i,
        t,
        a + s - 0.05,
        n,
        t,
        a + s + 0.03,
        n,
        r,
        o + s + 0.03,
        i,
      ));
  (e.pop(),
    e.solidRot(
      (t + r) / 2,
      (n + i) / 2,
      s / 2,
      0.2,
      Math.atan2(i - n, r - t),
      Math.min(a, o),
      Math.max(a, o) + 1.1,
      `fence`,
    ));
}
function Xwe(e, t, n, r, i, a, o, s, c, l) {
  if (e.coarse) return;
  let u = VV(l),
    d = 0.9 + u.next() * 0.8,
    f = 0.9 + u.next() * 0.8;
  e.push().col(4153136, u.range(0.85, 1.1)).mat(0.97);
  let p = s * 0.3,
    m = c * 0.3,
    h = 1.6,
    g = (i - n) * s - (r - t) * c > 0,
    _ = (t) =>
      g
        ? e.quad(
            t[0][0],
            t[0][1],
            t[0][2],
            t[1][0],
            t[1][1],
            t[1][2],
            t[2][0],
            t[2][1],
            t[2][2],
            t[3][0],
            t[3][1],
            t[3][2],
          )
        : e.quad(
            t[1][0],
            t[1][1],
            t[1][2],
            t[0][0],
            t[0][1],
            t[0][2],
            t[3][0],
            t[3][1],
            t[3][2],
            t[2][0],
            t[2][1],
            t[2][2],
          );
  (_([
    [t + p, a, n + m],
    [r + p, o, i + m],
    [r + p, o + f, i + m],
    [t + p, a + d, n + m],
  ]),
    e.col(5601851, u.range(0.85, 1.1)),
    _([
      [t + p, a + d, n + m],
      [r + p, o + f, i + m],
      [r + s * h, o + f + 0.3, i + c * h],
      [t + s * h, a + d + 0.3, n + c * h],
    ]),
    e.pop());
}
function Zwe(e, t, n, r) {
  (e
    .push()
    .col(EH)
    .mat(0.9)
    .box(t - 0.32, r, n - 0.32, t + 0.32, r + 0.45, n + 0.32),
    e
      .col(SH)
      .mat(0.85)
      .box(t - 0.09, r + 0.45, n - 0.09, t + 0.09, r + 2.6, n + 0.09),
    e
      .col(6178354)
      .box(t - 0.36, r + 2.55, n - 0.36, t + 0.36, r + 2.65, n + 0.36),
    e
      .col(16773846)
      .mat(0.6, 0, 0.75, 1)
      .box(t - 0.3, r + 2.65, n - 0.3, t + 0.3, r + 3.3, n + 0.3),
    e.col(5597535).mat(0.55, 0.4),
    e.lathe(
      t,
      n,
      [0.55, r + 3.3, 0.52, r + 3.4, 0.12, r + 3.75, 0.01, r + 3.85],
      4,
      Math.PI / 4,
    ),
    e.pop(),
    e.pole(t, n, 0.3, r, r + 3));
}
function KH(e, t, n, r, i, a, o, s, c, l) {
  if (e.coarse) return;
  let u = Math.hypot(r - t, i - n),
    d = Math.max(1, Math.round(u / a)),
    f = VV(o);
  for (let a = 0; a <= d; a++) {
    let o = (a + f.range(-0.3, 0.3)) / d,
      u = t + (r - t) * o + f.range(-1.2, 1.2),
      p = n + (i - n) * o + f.range(-1.2, 1.2);
    if (MH(u, p, -1)) continue;
    let m = c[Math.floor(f.next() * c.length)];
    WV(
      e,
      m,
      u,
      p,
      f.range(18, 26),
      Math.floor(f.next() * 1e6),
      s ?? `green`,
      l(u, p),
      !1,
    );
  }
}
