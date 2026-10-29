// tokyo/assets/region-tokyo-A7LxHjud 237 — math
// Lines 90186-90523 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* Dxe(e) {
  PF(e, jF(8, gF), XP, jF(8, hF), XP, () => Sxe, 0.22, !1);
  let t = fF(iF(24)),
    n = jF(24, hF);
  PF(
    e,
    n,
    XP,
    n,
    11.6,
    () => 15131352,
    0.26,
    !0,
    (e) => t.has(e),
  );
  let r = jF(24, -1.48),
    i = [15289148, 15968018, 2989275, 2600544, 10179040, 15423319];
  for (let n = 0; n < r.length; n += 3) {
    if (t.has(n) || t.has(n + 1) || t.has(n - 1)) continue;
    let a = r[n],
      o = r[(n + 1) % r.length],
      s = (a[0] + o[0]) / 2,
      c = (a[1] + o[1]) / 2,
      l = Math.hypot(s, c),
      u = [-s / l, 0, -c / l];
    (e.col(16773846).mat(0.4, 0, 0.9, DF),
      rM(
        e,
        NF(a, XP + 0.9),
        NF(o, XP + 0.9),
        NF(o, XP + 2.3),
        NF(a, XP + 2.3),
        u,
      ),
      e.col(i[(n / 3) % i.length]).mat(0.4, 0, 0.8, DF),
      rM(
        e,
        NF(a, XP + 2.4),
        NF(o, XP + 2.4),
        NF(o, XP + 2.9),
        NF(a, XP + 2.9),
        u,
      ));
  }
  let a = jF(16, -9.4 / 2);
  for (let t = 0; t < a.length; t++) {
    let n = a[t],
      r = a[(t + 1) % a.length],
      i = r[0] - n[0],
      o = r[1] - n[1],
      s = Math.hypot(i, o),
      c = e.sub((n[0] + r[0]) / 2, 0, (n[1] + r[1]) / 2, Math.atan2(o, i));
    (e.floor(-s / 2 - 0.8, -3.9, s / 2 + 0.8, 3.9, XP, XP, `platform`),
      e.leave(c));
  }
  let o = jF(16, -7.8);
  for (let t = 0; t < o.length; t++) {
    let n = o[t],
      r = o[(t + 1) % o.length];
    if (zF(n, r)) continue;
    let i = r[0] - n[0],
      a = r[1] - n[1],
      s = Math.hypot(i, a);
    e.solidRot(
      (n[0] + r[0]) / 2,
      (n[1] + r[1]) / 2,
      s / 2 + 0.3,
      0.2,
      Math.atan2(a, i),
      XP,
      XP + 1.1,
    );
  }
  (e.col(9080982).mat(0.5, 0.4, 0.15, DF),
    PF(e, jF(8, -7.9), XP + 1, jF(8, -7.75), XP + 1, () => 9080982, 0.15, !1));
  let s = jF(16, -0.9999999999999999),
    c = uF.filter((e) => dF.includes(e[2])).map(([e, t]) => lF(e, t, 0));
  for (let t = 0; t < s.length; t++) {
    let n = s[t],
      r = s[(t + 1) % s.length],
      i = (n[0] + r[0]) / 2,
      a = (n[1] + r[1]) / 2,
      o = r[0] - n[0],
      l = r[1] - n[1],
      u = Math.hypot(o, l),
      d = c.find((e) => Math.hypot(e.x - i, e.z - a) < 14);
    if (!d) {
      e.solidRot(i, a, u / 2 + 0.3, 0.6, Math.atan2(l, o), XP, 34);
      continue;
    }
    let f = o / u,
      p = l / u,
      m = (d.x - n[0]) * f + (d.z - n[1]) * p;
    for (let [t, r] of [
      [0, m - BF],
      [m + BF, u],
    ]) {
      if (r - t < 0.5) continue;
      let i = n[0] + (f * (t + r)) / 2,
        a = n[1] + (p * (t + r)) / 2;
      e.solidRot(i, a, (r - t) / 2 + 0.3, 0.6, Math.atan2(l, o), XP, 34);
    }
  }
  yield;
  let l = iF(24),
    u = [...fF(l)].sort((e, t) => e - t),
    d = [];
  for (let e of u) {
    let t = d[d.length - 1];
    t && t[1] === e ? (t[1] = e + 1) : d.push([e, e + 1]);
  }
  for (let [t, n] of d) {
    let r = l[t],
      i = l[n % l.length],
      a = (e, t) => {
        let n = Math.hypot(e[0], e[1]) || 1;
        return [e[0] + (e[0] / n) * t, e[1] + (e[1] / n) * t];
      },
      o = pF(XP) + 0.05,
      s = hF,
      c = a(r, o),
      u = a(i, o),
      d = a(r, s),
      f = a(i, s),
      p = XP + 4.4;
    (e.col(14078664).mat(0.85, 0, 0.25, DF),
      rM(
        e,
        NF(c, XP + 0.01),
        NF(u, XP + 0.01),
        NF(f, XP + 0.01),
        NF(d, XP + 0.01),
        [0, 1, 0],
      ),
      e.floor(
        Math.min(c[0], u[0], d[0], f[0]),
        Math.min(c[1], u[1], d[1], f[1]),
        Math.max(c[0], u[0], d[0], f[0]),
        Math.max(c[1], u[1], d[1], f[1]),
        XP,
        XP,
        `platform`,
      ),
      e.col(15526110).mat(0.8, 0, 0.3, DF),
      rM(e, NF(c, p), NF(u, p), NF(f, p), NF(d, p), [0, -1, 0]));
    for (let [t, n, a] of [
      [c, d, 1],
      [u, f, -1],
    ]) {
      let o = (i[0] - r[0]) * a,
        s = (i[1] - r[1]) * a;
      rM(e, NF(t, XP), NF(n, XP), NF(n, p), NF(t, p), [o, 0, s]);
    }
    let m = 15.6,
      h = (r[0] + i[0]) / 2,
      g = (r[1] + i[1]) / 2,
      _ = Math.hypot(h, g);
    (e.col(15329248).mat(0.75, 0, 0.07, 0),
      rM(e, NF(c, p), NF(u, p), NF(u, m), NF(c, m), [h / _, 0, g / _]),
      e.col(15131352).mat(0.85, 0, 0.26, DF),
      rM(e, NF(d, p), NF(f, p), NF(f, 11.6), NF(d, 11.6), [-h / _, 0, -g / _]),
      e.col(2047884).mat(0.5, 0, 0.5, DF));
    let v = a([(r[0] + i[0]) / 2, (r[1] + i[1]) / 2], -1.5);
    e.box(v[0] - 1.2, p + 0.3, v[1] - 1.2, v[0] + 1.2, p + 1.4, v[1] + 1.2);
  }
  let f = (e) => ((70 + e) ** 4 - Math.abs(LF) ** 4) ** 0.25,
    p = f(gF) + 0.2,
    m = f(_F) - 0.2,
    h = e.sub(0, 0, LF, -Math.PI / 2);
  (e.floor(-2.2, m, RF, p, yF, XP, `stairs`),
    e.floor(-2.2, m - 4, RF, m, 0, yF, `stairs`));
  for (let t of [-1, 1]) e.solid(t * RF, m - 4, t * 2.5, p, 0, XP + 1.2);
  (e.leave(h), e.col(OF).mat(0.85, 0, 0.2, DF));
  let g = CF;
  for (let t = 0; t < g; t++) {
    let n = m + ((p - m) * t) / g,
      r = m + ((p - m) * (t + 1)) / g,
      i = yF + ((XP - yF) * (t + 1)) / g + 0.03;
    e.flat(n, LF - RF, r, LF + RF, i);
  }
  for (let t = 0; t < 6; t++) {
    let n = m - 4 + (4 * t) / 6,
      r = m - 4 + (4 * (t + 1)) / 6;
    e.flat(n, LF - RF, r, LF + RF, (yF * (t + 1)) / 6 + 0.02);
  }
}
var BF = 5.4;
function* Oxe(e, t) {
  let n = [],
    r = t.c(`white`);
  for (let t = 0; t <= 18; t++)
    for (let i = 0; i <= 18; i++) {
      let a = -1 + (2 * i) / 18,
        o = -1 + (2 * t) / 18,
        s = oF(a * 0.985, o * 0.985, 0.55),
        c = sF(a, o, 0.55),
        l = (Math.max(0, 1 - a * a) * Math.max(0, 1 - o * o)) ** 0.5;
      (e.col(15987178).mat(0.9, 0, 0.42 + 0.18 * l, DF),
        n.push(e.v(s[0], s[1] - 0.6, s[2], -c[0], -c[1], -c[2], r.u0, r.v0)));
    }
  for (let t = 0; t < 18; t++)
    for (let r = 0; r < 18; r++) {
      let i = n[t * 19 + r],
        a = n[t * 19 + r + 1],
        o = n[(t + 1) * 19 + r + 1],
        s = n[(t + 1) * 19 + r];
      (e.tri(i, o, s), e.tri(i, a, o));
    }
  (yield, e.col(7041141).mat(0.6, 0.4, 0.05, DF));
  for (let t = 0; t < 2; t++)
    for (let n = 2; n < 16; n += 2) {
      let r = -1 + (n * 2) / 16;
      for (let n = 0; n < 8; n++) {
        let i = -0.985 + (1.97 * n) / 8,
          a = -0.985 + (1.97 * (n + 1)) / 8,
          [o, s] = t ? [i, r] : [r, i],
          [c, l] = t ? [a, r] : [r, a],
          u = oF(o * 0.985, s * 0.985, 0),
          d = oF(c * 0.985, l * 0.985, 0),
          f = t ? 0 : 0.18,
          p = t ? 0.18 : 0;
        rM(
          e,
          [u[0] - f, u[1] - 0.75, u[2] - p],
          [d[0] - f, d[1] - 0.75, d[2] - p],
          [d[0] + f, d[1] - 0.75, d[2] + p],
          [u[0] + f, u[1] - 0.75, u[2] + p],
          [0, -1, 0],
        );
      }
    }
}
function kxe(e) {
  let t = jF(24, -8),
    n = t.length / 4,
    r = [];
  for (let e = Math.round(n * 0.5); e < n; e++) r.push(e);
  for (let e = n; e < n + Math.round(n * 0.5); e++) r.push(e);
  let i = 20.5,
    a = 31.2;
  r.forEach((n, o) => {
    let s = MF(t, n),
      c = MF(t, n + 1),
      l = (s[0] + c[0]) / 2,
      u = (s[1] + c[1]) / 2,
      d = Math.hypot(l, u),
      f = [-l / d, 0, -u / d],
      p = o / (r.length - 1);
    (e.col(526604).mat(0.5, 0.2, 0.02, DF),
      rM(
        e,
        NF(s, 20.1),
        NF(c, 20.1),
        NF(c, 31.599999999999998),
        NF(s, 31.599999999999998),
        f,
      ),
      e.col(2764081).mat(0.6, 0.3, 0.06, DF),
      rM(
        e,
        NF(s, 20.1),
        NF(c, 20.1),
        NF(c, 31.599999999999998),
        NF(s, 31.599999999999998),
        [-f[0], 0, -f[2]],
      ),
      rM(
        e,
        NF(s, 20.1),
        NF(c, 20.1),
        [c[0] + (c[0] / d) * 0.6, 20.1, c[1] + (c[1] / d) * 0.6],
        [s[0] + (s[0] / d) * 0.6, 20.1, s[1] + (s[1] / d) * 0.6],
        [0, -1, 0],
      ));
    let m = (e) => [e[0] - (e[0] / d) * 0.08, e[1] - (e[1] / d) * 0.08],
      h = m(s),
      g = m(c);
    if (p > 0.3 && p < 0.7) {
      let t = [1862446, 3115580, 15331061, 2775720, 9418728];
      t.forEach((n, r) => {
        let a = i + (10.7 * r) / t.length,
          o = i + (10.7 * (r + 1)) / t.length;
        (e.col(n).mat(0.4, 0, 1.4, DF),
          rM(e, NF(h, a), NF(g, a), NF(g, o), NF(h, o), f));
      });
    } else {
      (e.col(1053466).mat(0.4, 0, 0.3, DF),
        rM(e, NF(h, i), NF(g, i), NF(g, a), NF(h, a), f));
      for (let t = 0; t < 3; t++) {
        let n = 21.1 + t * 1.4,
          r = n + 0.8,
          i = t === 0 ? 16762426 : 16185074,
          a = 0.25,
          o = 0.75,
          s = [h[0] + (g[0] - h[0]) * a, h[1] + (g[1] - h[1]) * a],
          c = [h[0] + (g[0] - h[0]) * o, h[1] + (g[1] - h[1]) * o],
          l = (e) => [e[0] - (e[0] / d) * 0.05, e[1] - (e[1] / d) * 0.05];
        (e.col(i).mat(0.4, 0, 1.2, DF),
          rM(e, NF(l(s), n), NF(l(c), n), NF(l(c), r), NF(l(s), r), f));
      }
    }
  });
  let o = jF(8, -30.45),
    s = o.length / 4;
  for (let t = 0; t < 2 * s; t++) {
    let n = MF(o, t),
      r = MF(o, t + 1),
      i = (n[0] + r[0]) / 2,
      a = (n[1] + r[1]) / 2,
      s = Math.hypot(i, a);
    i > 20 ||
      a > 20 ||
      (e.col([2278399, 16777215, 16751138][t % 3]).mat(0.4, 0, 1.1, DF),
      rM(
        e,
        NF(n, 1.5),
        NF(r, 1.5),
        NF(r, 2.1999999999999997),
        NF(n, 2.1999999999999997),
        [-i / s, 0, -a / s],
      ));
  }
}
function* Axe(e, t) {
  if (e.coarse) {
    (e.col(kF).mat(1, 0, 0, DF), e.flat(-1, -1, 1, 1, 0.04));
    return;
  }
  (yield* Txe(e, t),
    yield,
    yield* Exe(e),
    yield,
    yield* Dxe(e),
    yield,
    yield* Oxe(e, t),
    yield,
    kxe(e));
}
