// tokyo/assets/region-tokyo-BcM3fReU 25 — math
// Lines 16505-16811 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function hu(e, t, n, r, i, a, o, s = o, c = o, l = [], u = o, d = []) {
  let f = 3.9,
    p = 1.6,
    m = bl;
  for (let h = Math.floor(n / 8) * 8; h < r; h += 8) {
    let g = Math.max(n, h),
      _ = Math.min(r, h + 8);
    if (_ - g < 0.05) continue;
    let v = t.deck.at(h) - hl,
      y = i < 0 ? t.edge0.at(g) : t.edge1.at(g),
      b = y - i * m,
      x = (e) => (e - h) / 8,
      S = (e) => e / 4,
      C = Math.max(g, h),
      w = Math.min(_, h + p);
    (El(e, Tl.brick),
      e.setMaterial(0.95, 0, 0, 0),
      w > C &&
        (jl(
          e,
          t,
          C,
          w,
          y,
          y,
          0,
          Math.min(4, v),
          0,
          Math.min(4, v),
          i,
          a,
          x(C),
          x(w),
          0,
          S(Math.min(4, v)),
        ),
        v > 4 &&
          jl(e, t, C, w, y, y, 4, v, 4, v, i, a, x(C), x(w), 0, S(v - 4))));
    let T = h + p,
      E = h + 8,
      D = E - T,
      O = (e) => {
        let t = ((e - T) / D) * 2 - 1;
        return f + 2.0000000000000004 * Math.sqrt(Math.max(0, 1 - t * t));
      },
      k = xl(t, h, i),
      A = Sl(t, h),
      j = A || k.next() < 0.45,
      M = 0.7 + k.next() * 0.5;
    for (let n = 0; n < 8; n++) {
      let r = T + (D * n) / 8,
        f = T + (D * (n + 1)) / 8;
      if (f <= g || r >= _) continue;
      let p = Math.max(r, g),
        m = Math.min(f, _),
        C = O(p),
        w = O(m);
      if ((El(e, Tl.brick), e.setMaterial(0.95, 0, 0, 0), Math.min(C, w) < 4)) {
        let n = Math.min(C, 4),
          r = Math.min(w, 4);
        jl(
          e,
          t,
          p,
          m,
          y,
          y,
          n,
          4,
          r,
          4,
          i,
          a,
          x(p),
          x(m),
          S(Math.min(n, r)),
          1,
        );
      }
      let E = Math.max(C, 4),
        k = Math.max(w, 4);
      if (
        (jl(
          e,
          t,
          p,
          m,
          y,
          y,
          E,
          v,
          k,
          v,
          i,
          a,
          x(p),
          x(m),
          S(Math.min(E, k) - 4),
          S(v - 4),
        ),
        El(e, Tl.brickDark),
        _u(e, t, p, m, y, b, C, w, i),
        A)
      ) {
        let r = 2.7;
        e.setMaterial(0.25, 0.3, 0.15, 1);
        let a = n % 2 ? 1 : 0.94;
        if (l.length) {
          e.setColor(V(168 * a), V(174 * a), V(176 * a));
          let o = Du(d, h + 4, i)
              ? l[P(t.id, `conc`, i, Math.round(h)) % l.length]
              : u,
            s = Math.floor(n / 2),
            c = ((p - T) / D) * 4 - s,
            f = ((m - T) / D) * 4 - s;
          jl(
            e,
            t,
            p,
            m,
            b,
            b,
            0,
            Math.min(r, C),
            0,
            Math.min(r, w),
            i,
            o,
            i < 0 ? 1 - c : c,
            i < 0 ? 1 - f : f,
          );
        } else
          (e.setColor(V(132 * a), V(138 * a), V(138 * a)),
            jl(e, t, p, m, b, b, 0, Math.min(r, C), 0, Math.min(r, w), i, o));
        (C > r || w > r) &&
          (e.setMaterial(0.3, 0.4, 0.12, 1),
          El(e, [200, 206, 208]),
          jl(
            e,
            t,
            p,
            m,
            b,
            b,
            r,
            Math.max(r, C),
            r,
            Math.max(r, w),
            i,
            s,
            (p - T) / D,
            (m - T) / D,
            0,
            Math.min(1, (Math.max(C, w) - r) / 3.2),
          ));
        continue;
      }
      if (j) {
        let r = 2.35;
        (e.setMaterial(0.5, 0.1, 0.2, 1),
          e.setColor(V(206 * M), V(162 * M), V(110 * M)),
          jl(e, t, p, m, b, b, 0, Math.min(r, C), 0, Math.min(r, w), i, o),
          e.setMaterial(0.8, 0, 0, 0),
          n % 2 == 1 &&
            (e.setColor(V(40), V(30), V(24)),
            jl(
              e,
              t,
              p,
              p + 0.08,
              b + i * 0.02,
              b + i * 0.02,
              0,
              Math.min(r, C),
              0,
              Math.min(r, C),
              i,
              o,
            )),
          n >= 2 &&
            n <= 5 &&
            (e.setColor(V(30), V(38), V(70)),
            jl(e, t, p, m, b + i * 0.05, b + i * 0.05, 1.8, r, 1.8, r, i, o)),
          (C > r || w > r) &&
            (e.setMaterial(0.8, 0, 0, 0),
            e.setColor(V(58 * M), V(40 * M), V(30 * M)),
            jl(e, t, p, m, b, b, r, Math.max(r, C), r, Math.max(r, w), i, o)));
        continue;
      }
      {
        let n = 2.75;
        (e.setMaterial(0.7, 0.3, 0, 0),
          El(e, Tl.shutter, M),
          jl(e, t, p, m, b, b, 0, Math.min(n, C), 0, Math.min(n, w), i, o),
          (C > n || w > n) &&
            (e.setMaterial(0.6, 0, 0, 0),
            El(e, [236, 234, 228]),
            jl(
              e,
              t,
              p,
              m,
              b,
              b,
              n,
              Math.max(n, C),
              n,
              Math.max(n, w),
              i,
              c,
              (p - T) / D,
              (m - T) / D,
              0,
              Math.min(1, (Math.max(C, w) - n) / 3.1500000000000004),
            )));
        continue;
      }
    }
    if (
      (El(e, Tl.brickDark),
      e.setMaterial(0.95, 0, 0, 0),
      T >= g && T < _ && Fl(e, t, T, Math.min(y, b), Math.max(y, b), 0, f, 1),
      E > g &&
        E <= _ &&
        E < r &&
        Fl(e, t, E - 0.001, Math.min(y, b), Math.max(y, b), 0, f, -1),
      j && !A && T + D / 2 >= g && T + D / 2 < _)
    )
      for (let n of [-1.25, 1.25])
        (t.path.pos(T + D / 2 + n, y - i * 0.45, H), gu(e, H.x, 2.42, H.z, o));
  }
}
function gu(e, t, n, r, i) {
  let a = 0.19,
    o = 0.46,
    s = [
      [0.6, 0],
      [0.92, 0.12],
      [1, 0.5],
      [0.92, 0.88],
      [0.6, 1],
    ];
  (e.setMaterial(0.6, 0, 0.32, 1), e.setColor(V(214), V(48), V(36)));
  for (let c = 0; c < 8; c++) {
    let l = (c / 8) * Math.PI * 2,
      u = ((c + 1) / 8) * Math.PI * 2;
    for (let c = 0; c + 1 < s.length; c++) {
      let [d, f] = s[c],
        [p, m] = s[c + 1],
        h = [t + Math.cos(l) * a * d, n + f * o, r + Math.sin(l) * a * d],
        g = [t + Math.cos(u) * a * d, n + f * o, r + Math.sin(u) * a * d],
        _ = [t + Math.cos(u) * a * p, n + m * o, r + Math.sin(u) * a * p],
        v = [t + Math.cos(l) * a * p, n + m * o, r + Math.sin(l) * a * p];
      e.quad(
        g[0],
        g[1],
        g[2],
        h[0],
        h[1],
        h[2],
        v[0],
        v[1],
        v[2],
        _[0],
        _[1],
        _[2],
        i.u0,
        i.v0,
        i.u1,
        i.v1,
      );
    }
  }
  (e.setMaterial(0.8, 0, 0, 0),
    e.setColor(V(20), V(20), V(22)),
    e.box(t, n - 0.03, r, a * 0.62, 0.03, a * 0.62, i.u0, i.v0, i.u1, i.v1),
    e.box(
      t,
      n + o + 0.03,
      r,
      a * 0.62,
      0.03,
      a * 0.62,
      i.u0,
      i.v0,
      i.u1,
      i.v1,
    ));
}
function _u(e, t, n, r, i, a, o, s, c) {
  t.path.pos(n, i, H);
  let l = H.x,
    u = H.z;
  t.path.pos(n, a, H);
  let d = H.x,
    f = H.z;
  t.path.pos(r, i, H);
  let p = H.x,
    m = H.z;
  t.path.pos(r, a, H);
  let h = H.x,
    g = H.z,
    _ = kl;
  c > 0
    ? e.quad(d, o, f, h, s, g, p, s, m, l, o, u, _.u0, _.v0, _.u1, _.v1)
    : e.quad(l, o, u, p, s, m, h, s, g, d, o, f, _.u0, _.v0, _.u1, _.v1);
}
