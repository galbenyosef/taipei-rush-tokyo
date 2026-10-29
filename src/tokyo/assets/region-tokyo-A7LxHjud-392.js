// tokyo/assets/region-tokyo-A7LxHjud 392 — math
// Lines 142164-142470 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* cFe(e, t, n, r) {
  let i = yn,
    a = r.recs,
    o = n ? 1.3 : 1,
    s = (t, n) => !!e.water?.at(t, n) || Hv(t, n) || !!Wv(t, n),
    c = (e, t, n) => {
      for (let [r, i, a] of iFe)
        if (Math.abs(e - r) < a + n && Math.abs(t - i) < a + n) return !0;
      return !1;
    },
    l = (e, t, n) =>
      !s(e, t) &&
      !s(e + n, t + n) &&
      !s(e - n, t - n) &&
      !s(e + n, t - n) &&
      !s(e - n, t + n) &&
      !Ude(e, t, n) &&
      !i0(e, t, n * Math.SQRT2) &&
      !c(e, t, n),
    u = (t, n, r) => {
      let i = e.height(t, n);
      return i < 0.6
        ? i - 0.4
        : Math.min(
            i,
            e.height(t + r, n + r),
            e.height(t - r, n - r),
            e.height(t + r, n - r),
            e.height(t - r, n + r),
          ) - 0.4;
    };
  for (let [e, n] of [
    [300, 800],
    [800, 1800],
    [1800, 3500],
    [3500, 1 / 0],
  ]) {
    let r = oFe(e, o),
      s = new le(de(t, `farcity`, e));
    for (let o = -i + r / 2; o < i; o += r, yield)
      for (let c = -i + r / 2; c < i; c += r) {
        let i = s.next(),
          d = s.next(),
          f = s.next(),
          p = s.next(),
          m = s.next(),
          h = s.next(),
          g = s.next(),
          _ = s.next(),
          v = b1(c, o);
        if (v < e || v >= n) continue;
        let y = aFe(c, o);
        if (i > y.fill) continue;
        let b = h0(c, o, t),
          x = c + (d - 0.5) * r * 0.22,
          S = o + (f - 0.5) * r * 0.22,
          C = 1 + Math.floor(_ * 997);
        if (g < (y.house > 0.5 ? 0.11 : 0.04) && _ < 0.5) {
          let e = r * (0.6 + 0.3 * m),
            t = r * (0.6 + 0.3 * h);
          l(x, S, Math.max(e, t) / 2) &&
            a.push(
              x,
              u(x, S, Math.max(e, t) / 2),
              S,
              e,
              7 + 6 * d,
              t,
              b + f,
              0,
              d0[Math.floor(p * 31) % d0.length],
              0,
              0,
              0,
            );
          continue;
        }
        if (p < y.house) {
          let e = r * (0.72 + 0.22 * m),
            n = r * (0.72 + 0.22 * h),
            i = 6.2 + 3.4 * g * (0.6 + 0.8 * m0(x, S, 420, t));
          if (!l(x, S, Math.max(e, n) / 2)) continue;
          let o = u0[Math.floor(g * 9973) % u0.length],
            s = 0.9 + 0.2 * d;
          if (
            (a.push(
              x,
              u(x, S, Math.max(e, n) / 2),
              S,
              e,
              i,
              n,
              b,
              0,
              [o[0] * s, o[1] * s, o[2] * s],
              0,
              0,
              C,
            ),
            m > 0.72)
          ) {
            let e = r * (0.28 + 0.18 * h),
              t = r * (0.22 + 0.16 * d),
              n = (4 + Math.floor(f * 5)) * 3.1 + 1,
              i = x + (h - 0.5) * r * 0.4,
              o = S + (g - 0.5) * r * 0.4,
              s = l0[Math.floor(m * 7919) % l0.length];
            a.push(
              i,
              u(i, o, Math.max(e, t) / 2),
              o,
              e,
              n,
              t,
              b,
              0,
              s,
              0,
              0,
              1 + ((C * 7) % 997),
            );
          }
          continue;
        }
        let w = m < y.towers * 1.6 && v > 500,
          T = 0.65 + 0.8 * m0(x, S, 420, t),
          E = Math.max(2, Math.round((y.lo + (y.hi - y.lo) * h * h) * T));
        w && (E = Math.round(14 + 20 * g * g));
        let D = r * (w ? 0.6 : 0.5 + 0.34 * m),
          O = r * (w ? 0.6 : 0.5 + 0.34 * g);
        if (!l(x, S, Math.max(D, O) / 2)) continue;
        let k = E * 3.3 + 1 + d * 1.5,
          A = w
            ? p0[Math.floor(h * 7919) % p0.length]
            : l0[Math.floor(h * 7919) % l0.length],
          j = 0.88 + 0.2 * f;
        if (
          (a.push(
            x,
            u(x, S, Math.max(D, O) / 2),
            S,
            D,
            k,
            O,
            b,
            0,
            [A[0] * j, A[1] * j, A[2] * j],
            0,
            0,
            C,
          ),
          !w && _ > 0.5 && r < 70)
        ) {
          let e = x + (p - 0.5) * r * 0.5,
            t = S + (_ - 0.75) * r * 0.9,
            n = r * (0.25 + 0.2 * f),
            i = r * (0.25 + 0.2 * p);
          if (l(e, t, Math.max(n, i) / 2)) {
            let r = l0[Math.floor(p * 7919) % l0.length];
            a.push(
              e,
              u(e, t, Math.max(n, i) / 2),
              t,
              n,
              Math.max(7, k * (0.35 + 0.4 * d)),
              i,
              b,
              0,
              r,
              0,
              0,
              1 + ((C * 13) % 997),
            );
          }
        }
      }
  }
  for (let n of Kv)
    r.towers += lFe(
      a,
      e,
      n,
      t,
      (e, t, n) =>
        b1(e, t) > 30 &&
        l(e, t, n) &&
        (Math.abs(e) > i || Math.abs(t) > i || !s(e, t)),
    );
  uFe(a, e);
}
function g0(e, t, n, r, i, a, o, s, c, l) {
  let u = l % 3,
    d = o;
  if (u === 1 && o > 80) {
    let u = o * 0.72;
    (e.push(t, n, r, i, u, a, s, 0, c, 0, 0, l),
      e.push(t, n + u, r, i * 0.78, o - u, a * 0.78, s, 0, c, 0, 0, l));
  } else e.push(t, n, r, i, o, a, s, 0, c, 0, 0, l);
  let f = 3 + (l % 5),
    p = u === 1 ? 0.78 * 0.62 : 0.62;
  (e.push(
    t,
    n + d,
    r,
    i * p,
    f,
    a * p,
    s,
    0,
    [c[0] * 0.8, c[1] * 0.8, c[2] * 0.8],
    0,
    0,
    0,
  ),
    (d += f),
    o > 100 && e.push(t, n + d, r, 3, 3, 3, 0, 0, [0.3, 0.035, 0.02], 6, 0, 0));
}
function lFe(e, t, n, r, i) {
  let a = new le(de(r, `farcity-cluster`, n.id)),
    o = h0(n.x, n.z, r),
    s = [],
    c = 0;
  for (let r of n.hero ?? []) {
    let n = r.tint ?? 14210252,
      i = [
        (((n >> 16) & 255) / 255) * 0.8,
        (((n >> 8) & 255) / 255) * 0.8,
        ((n & 255) / 255) * 0.8,
      ],
      a = Math.abs(r.x) > 5200 || Math.abs(r.z) > 5200 ? 0 : t.height(r.x, r.z);
    (e.push(
      r.x,
      a,
      r.z,
      r.w,
      r.h * 0.68,
      r.d,
      o,
      0,
      i,
      0,
      0,
      1 + ((c * 37) % 997),
    ),
      g0(
        e,
        r.x,
        a + r.h * 0.68,
        r.z,
        r.w * 0.72,
        r.d * 0.72,
        r.h * 0.32,
        o,
        i,
        1 + ((c * 53) % 997),
      ),
      s.push([r.x, r.z, r.w * 0.7]),
      c++);
  }
  for (let r = 0; c < n.n + (n.hero?.length ?? 0) && r < n.n * 12; r++) {
    let r = a.next() * Math.PI * 2,
      l = Math.sqrt(a.next()) * n.r,
      u = n.x + Math.cos(r) * l,
      d = n.z + Math.sin(r) * l,
      f = Math.round(n.floors[0] + (n.floors[1] - n.floors[0]) * a.next()),
      p = n.homes ? a.next() < 0.8 : a.next() < 0.2,
      m = a.next(),
      h = p
        ? m < 0.3
          ? 24 + 4 * a.next()
          : 30 + 10 * a.next()
        : m < 0.4
          ? 55 + 20 * a.next()
          : 40 + 15 * a.next(),
      g = p
        ? h * (0.9 + 0.2 * a.next())
        : m < 0.4
          ? 26 + 8 * a.next()
          : h * (0.8 + 0.3 * a.next());
    a.next() < 0.5 && ([h, g] = [g, h]);
    let _ = Math.max(h, g) / 2;
    if (
      s.some(([e, t, n]) => Math.hypot(e - u, t - d) < n + _ + 6) ||
      !i(u, d, _)
    )
      continue;
    let v = f * (p ? 3.3 : 4.2) + 2,
      y = p
        ? p0[Math.floor(a.next() * p0.length)]
        : f0[Math.floor(a.next() * f0.length)];
    (g0(
      e,
      u,
      Math.abs(u) > 5200 || Math.abs(d) > 5200 ? 0 : t.height(u, d) - 0.4,
      d,
      h,
      g,
      v,
      o + (a.next() - 0.5) * 0.3,
      y,
      1 + Math.floor(a.next() * 997),
    ),
      s.push([u, d, _]),
      c++);
  }
  return c;
}
