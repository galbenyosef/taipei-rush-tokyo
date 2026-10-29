// tokyo/assets/region-tokyo-55J_WESF 237 — math
// Lines 90095-90432 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* mxe(e) {
  MF(e, kF(8, mF), JP, kF(8, pF), JP, () => lxe, 0.22, !1);
  let t = uF(nF(24)),
    n = kF(24, pF);
  MF(
    e,
    n,
    JP,
    n,
    11.6,
    () => 15131352,
    0.26,
    !0,
    (e) => t.has(e),
  );
  let r = kF(24, -1.48),
    i = [15289148, 15968018, 2989275, 2600544, 10179040, 15423319];
  for (let n = 0; n < r.length; n += 3) {
    if (t.has(n) || t.has(n + 1) || t.has(n - 1)) continue;
    let a = r[n],
      o = r[(n + 1) % r.length],
      s = (a[0] + o[0]) / 2,
      c = (a[1] + o[1]) / 2,
      l = Math.hypot(s, c),
      u = [-s / l, 0, -c / l];
    (e.col(16773846).mat(0.4, 0, 0.9, TF),
      tM(
        e,
        jF(a, JP + 0.9),
        jF(o, JP + 0.9),
        jF(o, JP + 2.3),
        jF(a, JP + 2.3),
        u,
      ),
      e.col(i[(n / 3) % i.length]).mat(0.4, 0, 0.8, TF),
      tM(
        e,
        jF(a, JP + 2.4),
        jF(o, JP + 2.4),
        jF(o, JP + 2.9),
        jF(a, JP + 2.9),
        u,
      ));
  }
  let a = kF(16, -9.4 / 2);
  for (let t = 0; t < a.length; t++) {
    let n = a[t],
      r = a[(t + 1) % a.length],
      i = r[0] - n[0],
      o = r[1] - n[1],
      s = Math.hypot(i, o),
      c = e.sub((n[0] + r[0]) / 2, 0, (n[1] + r[1]) / 2, Math.atan2(o, i));
    (e.floor(-s / 2 - 0.8, -3.9, s / 2 + 0.8, 3.9, JP, JP, `platform`),
      e.leave(c));
  }
  let o = kF(16, -7.8);
  for (let t = 0; t < o.length; t++) {
    let n = o[t],
      r = o[(t + 1) % o.length];
    if (LF(n, r)) continue;
    let i = r[0] - n[0],
      a = r[1] - n[1],
      s = Math.hypot(i, a);
    e.solidRot(
      (n[0] + r[0]) / 2,
      (n[1] + r[1]) / 2,
      s / 2 + 0.3,
      0.2,
      Math.atan2(a, i),
      JP,
      JP + 1.1,
    );
  }
  (e.col(9080982).mat(0.5, 0.4, 0.15, TF),
    MF(e, kF(8, -7.9), JP + 1, kF(8, -7.75), JP + 1, () => 9080982, 0.15, !1));
  let s = kF(16, -0.9999999999999999),
    c = cF.filter((e) => lF.includes(e[2])).map(([e, t]) => sF(e, t, 0));
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
      e.solidRot(i, a, u / 2 + 0.3, 0.6, Math.atan2(l, o), JP, 34);
      continue;
    }
    let f = o / u,
      p = l / u,
      m = (d.x - n[0]) * f + (d.z - n[1]) * p;
    for (let [t, r] of [
      [0, m - RF],
      [m + RF, u],
    ]) {
      if (r - t < 0.5) continue;
      let i = n[0] + (f * (t + r)) / 2,
        a = n[1] + (p * (t + r)) / 2;
      e.solidRot(i, a, (r - t) / 2 + 0.3, 0.6, Math.atan2(l, o), JP, 34);
    }
  }
  yield;
  let l = nF(24),
    u = [...uF(l)].sort((e, t) => e - t),
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
      o = dF(JP) + 0.05,
      s = pF,
      c = a(r, o),
      u = a(i, o),
      d = a(r, s),
      f = a(i, s),
      p = JP + 4.4;
    (e.col(14078664).mat(0.85, 0, 0.25, TF),
      tM(
        e,
        jF(c, JP + 0.01),
        jF(u, JP + 0.01),
        jF(f, JP + 0.01),
        jF(d, JP + 0.01),
        [0, 1, 0],
      ),
      e.floor(
        Math.min(c[0], u[0], d[0], f[0]),
        Math.min(c[1], u[1], d[1], f[1]),
        Math.max(c[0], u[0], d[0], f[0]),
        Math.max(c[1], u[1], d[1], f[1]),
        JP,
        JP,
        `platform`,
      ),
      e.col(15526110).mat(0.8, 0, 0.3, TF),
      tM(e, jF(c, p), jF(u, p), jF(f, p), jF(d, p), [0, -1, 0]));
    for (let [t, n, a] of [
      [c, d, 1],
      [u, f, -1],
    ]) {
      let o = (i[0] - r[0]) * a,
        s = (i[1] - r[1]) * a;
      tM(e, jF(t, JP), jF(n, JP), jF(n, p), jF(t, p), [o, 0, s]);
    }
    let m = 15.6,
      h = (r[0] + i[0]) / 2,
      g = (r[1] + i[1]) / 2,
      _ = Math.hypot(h, g);
    (e.col(15329248).mat(0.75, 0, 0.07, 0),
      tM(e, jF(c, p), jF(u, p), jF(u, m), jF(c, m), [h / _, 0, g / _]),
      e.col(15131352).mat(0.85, 0, 0.26, TF),
      tM(e, jF(d, p), jF(f, p), jF(f, 11.6), jF(d, 11.6), [-h / _, 0, -g / _]),
      e.col(2047884).mat(0.5, 0, 0.5, TF));
    let v = a([(r[0] + i[0]) / 2, (r[1] + i[1]) / 2], -1.5);
    e.box(v[0] - 1.2, p + 0.3, v[1] - 1.2, v[0] + 1.2, p + 1.4, v[1] + 1.2);
  }
  let f = (e) => ((70 + e) ** 4 - Math.abs(FF) ** 4) ** 0.25,
    p = f(mF) + 0.2,
    m = f(hF) - 0.2,
    h = e.sub(0, 0, FF, -Math.PI / 2);
  (e.floor(-2.2, m, IF, p, _F, JP, `stairs`),
    e.floor(-2.2, m - 4, IF, m, 0, _F, `stairs`));
  for (let t of [-1, 1]) e.solid(t * IF, m - 4, t * 2.5, p, 0, JP + 1.2);
  (e.leave(h), e.col(EF).mat(0.85, 0, 0.2, TF));
  let g = xF;
  for (let t = 0; t < g; t++) {
    let n = m + ((p - m) * t) / g,
      r = m + ((p - m) * (t + 1)) / g,
      i = _F + ((JP - _F) * (t + 1)) / g + 0.03;
    e.flat(n, FF - IF, r, FF + IF, i);
  }
  for (let t = 0; t < 6; t++) {
    let n = m - 4 + (4 * t) / 6,
      r = m - 4 + (4 * (t + 1)) / 6;
    e.flat(n, FF - IF, r, FF + IF, (_F * (t + 1)) / 6 + 0.02);
  }
}
var RF = 5.4;
function* hxe(e, t) {
  let n = [],
    r = t.c(`white`);
  for (let t = 0; t <= 18; t++)
    for (let i = 0; i <= 18; i++) {
      let a = -1 + (2 * i) / 18,
        o = -1 + (2 * t) / 18,
        s = iF(a * 0.985, o * 0.985, 0.55),
        c = aF(a, o, 0.55),
        l = (Math.max(0, 1 - a * a) * Math.max(0, 1 - o * o)) ** 0.5;
      (e.col(15987178).mat(0.9, 0, 0.42 + 0.18 * l, TF),
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
  (yield, e.col(7041141).mat(0.6, 0.4, 0.05, TF));
  for (let t = 0; t < 2; t++)
    for (let n = 2; n < 16; n += 2) {
      let r = -1 + (n * 2) / 16;
      for (let n = 0; n < 8; n++) {
        let i = -0.985 + (1.97 * n) / 8,
          a = -0.985 + (1.97 * (n + 1)) / 8,
          [o, s] = t ? [i, r] : [r, i],
          [c, l] = t ? [a, r] : [r, a],
          u = iF(o * 0.985, s * 0.985, 0),
          d = iF(c * 0.985, l * 0.985, 0),
          f = t ? 0 : 0.18,
          p = t ? 0.18 : 0;
        tM(
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
function gxe(e) {
  let t = kF(24, -8),
    n = t.length / 4,
    r = [];
  for (let e = Math.round(n * 0.5); e < n; e++) r.push(e);
  for (let e = n; e < n + Math.round(n * 0.5); e++) r.push(e);
  let i = 20.5,
    a = 31.2;
  r.forEach((n, o) => {
    let s = AF(t, n),
      c = AF(t, n + 1),
      l = (s[0] + c[0]) / 2,
      u = (s[1] + c[1]) / 2,
      d = Math.hypot(l, u),
      f = [-l / d, 0, -u / d],
      p = o / (r.length - 1);
    (e.col(526604).mat(0.5, 0.2, 0.02, TF),
      tM(
        e,
        jF(s, 20.1),
        jF(c, 20.1),
        jF(c, 31.599999999999998),
        jF(s, 31.599999999999998),
        f,
      ),
      e.col(2764081).mat(0.6, 0.3, 0.06, TF),
      tM(
        e,
        jF(s, 20.1),
        jF(c, 20.1),
        jF(c, 31.599999999999998),
        jF(s, 31.599999999999998),
        [-f[0], 0, -f[2]],
      ),
      tM(
        e,
        jF(s, 20.1),
        jF(c, 20.1),
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
        (e.col(n).mat(0.4, 0, 1.4, TF),
          tM(e, jF(h, a), jF(g, a), jF(g, o), jF(h, o), f));
      });
    } else {
      (e.col(1053466).mat(0.4, 0, 0.3, TF),
        tM(e, jF(h, i), jF(g, i), jF(g, a), jF(h, a), f));
      for (let t = 0; t < 3; t++) {
        let n = 21.1 + t * 1.4,
          r = n + 0.8,
          i = t === 0 ? 16762426 : 16185074,
          a = 0.25,
          o = 0.75,
          s = [h[0] + (g[0] - h[0]) * a, h[1] + (g[1] - h[1]) * a],
          c = [h[0] + (g[0] - h[0]) * o, h[1] + (g[1] - h[1]) * o],
          l = (e) => [e[0] - (e[0] / d) * 0.05, e[1] - (e[1] / d) * 0.05];
        (e.col(i).mat(0.4, 0, 1.2, TF),
          tM(e, jF(l(s), n), jF(l(c), n), jF(l(c), r), jF(l(s), r), f));
      }
    }
  });
  let o = kF(8, -30.45),
    s = o.length / 4;
  for (let t = 0; t < 2 * s; t++) {
    let n = AF(o, t),
      r = AF(o, t + 1),
      i = (n[0] + r[0]) / 2,
      a = (n[1] + r[1]) / 2,
      s = Math.hypot(i, a);
    i > 20 ||
      a > 20 ||
      (e.col([2278399, 16777215, 16751138][t % 3]).mat(0.4, 0, 1.1, TF),
      tM(
        e,
        jF(n, 1.5),
        jF(r, 1.5),
        jF(r, 2.1999999999999997),
        jF(n, 2.1999999999999997),
        [-i / s, 0, -a / s],
      ));
  }
}
function* _xe(e, t) {
  if (e.coarse) {
    (e.col(DF).mat(1, 0, 0, TF), e.flat(-1, -1, 1, 1, 0.04));
    return;
  }
  (yield* fxe(e, t),
    yield,
    yield* pxe(e),
    yield,
    yield* mxe(e),
    yield,
    yield* hxe(e, t),
    yield,
    gxe(e));
}
