// tokyo/assets/region-tokyo-d-roppongi-Cv6Rgbh_ 14 — math
// Lines 3829-4511 of readable/tokyo/assets/region-tokyo-d-roppongi-Cv6Rgbh_.pretty.js (statement-aligned).
function Mt(e, t, n) {
  let i = t.white(),
    a = { obbs: [], circles: [], floors: [], instances: [] },
    o = [0, 1, 2].map((e) => t.uv(`ishigaki:${e}`)),
    s = t.uv(`gravel`),
    c = [...new Set([...yt, ...bt].flatMap((e) => [e[0], e[2]]))].sort(
      (e, t) => e - t,
    ),
    l = [...new Set([...yt, ...bt].flatMap((e) => [e[1], e[3]]))].sort(
      (e, t) => e - t,
    ),
    d = (e, t, n) =>
      e.some((e) => t > e[0] && t < e[2] && n > e[1] && n < e[3]),
    f = (e, t) => d(yt, e, t) && !d(bt, e, t);
  (e.setMaterial(0.95, 0, 0, 0), A(e, 13947076));
  for (let t = 0; t + 1 < c.length; t++) {
    let n = c[t],
      r = c[t + 1],
      i = (n + r) / 2,
      o = -1;
    for (let t = 0; t + 1 <= l.length; t++) {
      let c = t + 1 < l.length && f(i, (l[t] + l[t + 1]) / 2);
      if ((c && o < 0 && (o = t), !c && o >= 0)) {
        let c = l[o],
          u = l[t],
          d = Math.max(1, Math.round((r - n) / 5)),
          f = Math.max(1, Math.round((u - c) / 5));
        A(e, 16777215);
        for (let t = 0; t < d; t++)
          for (let i = 0; i < f; i++)
            M(
              e,
              n + ((r - n) * t) / d,
              c + ((u - c) * i) / f,
              n + ((r - n) * (t + 1)) / d,
              c + ((u - c) * (i + 1)) / f,
              K,
              s,
            );
        (a.obbs.push({
          x: i,
          z: (c + u) / 2,
          hx: (r - n) / 2,
          hz: (u - c) / 2,
          y0: 0,
          y1: K,
        }),
          (o = -1));
      }
    }
  }
  for (let [e, t, n, r] of yt)
    a.floors.push({
      cx: (e + n) / 2,
      cz: (t + r) / 2,
      hx: (n - e) / 2,
      hz: (r - t) / 2,
      y0: K,
      y1: K,
      heading: 0,
    });
  (A(e, 15262938),
    M(e, J.xt, 542.5, -914, 547.5, K + u.GROUND, i),
    M(e, Z.x0 + 1, 568, Z.x1 - 1, Z.zt, K + u.GROUND, i),
    M(e, -896.5, X.z0 + 0.5, X.xt, X.z1 - 0.5, K + u.GROUND, i),
    e.setMaterial(0.92, 0, 0, 0));
  let p = [],
    m = [];
  for (let t = 0; t + 1 < c.length; t++)
    for (let n = 0; n + 1 < l.length; n++) {
      let i = c[t],
        a = c[t + 1],
        s = l[n],
        u = l[n + 1],
        h = (i + a) / 2,
        g = (s + u) / 2;
      if (!f(h, g)) continue;
      let _ = [
        [f(i - 0.01, g), -1, 0, i, s, i, u, i - 0.01, g],
        [f(a + 0.01, g), 1, 0, a, s, a, u, a + 0.01, g],
        [f(h, s - 0.01), 0, -1, i, s, a, s, h, s - 0.01],
        [f(h, u + 0.01), 0, 1, i, u, a, u, h, u + 0.01],
      ];
      for (let [t, n, i, a, s, c, l, u, f] of _) {
        if (t) continue;
        let h = Math.hypot(c - a, l - s),
          g = Math.max(1, Math.round(h / 3));
        A(e, 16777215);
        for (let t = 0; t < g; t++) {
          let u = t / g,
            d = (t + 1) / g,
            f = [a + (c - a) * u, s + (l - s) * u],
            p = [a + (c - a) * d, s + (l - s) * d];
          for (let [t, a] of [
            [G - 0.05, (G + K) / 2],
            [(G + K) / 2, K],
          ])
            Dt(
              e,
              [
                [f[0], t, f[1]],
                [p[0], t, p[1]],
                [p[0], a, p[1]],
                [f[0], a, f[1]],
              ],
              n,
              0,
              i,
              o[
                r(
                  `ishi`,
                  Math.round(f[0] * 3),
                  Math.round(f[1] * 3),
                  +(t > 2),
                ) % 3
              ],
            );
        }
        (d(bt, u, f) || m.push([a, s, c, l, n, i]),
          d(bt, u, f) || p.push([a, s, c, l]));
      }
    }
  e.setMaterial(0.95, 0, 0, 0);
  let h = [J, Y, X].map((e) => [e.z0 - 1, e.z1 + 1]);
  for (let [t, n, o, s, c, l] of m) {
    let u = c === 0 ? `x` : `z`,
      d = u === `z` ? Math.min(n, s) : Math.min(t, o),
      f = u === `z` ? Math.max(n, s) : Math.max(t, o),
      p = u === `z` ? h : [[Z.x0 - 1, Z.x1 + 1]],
      m = d,
      g = p.filter(([e, t]) => t > d && e < f).sort((e, t) => e[0] - t[0]),
      _ = [];
    for (let [e, t] of g) (e > m && _.push([m, e]), (m = Math.max(m, t)));
    m < f && _.push([m, f]);
    for (let [o, s] of _) {
      if (s - o < 1) continue;
      let d = u === `z` ? t + c * 0.4 : (o + s) / 2,
        f = u === `z` ? (o + s) / 2 : n + l * 0.4;
      (A(e, 3432494, 0.9 + (r(`hedge`, Math.round(o)) % 20) / 100),
        N(
          e,
          d,
          f,
          G - 0.02,
          G + 0.95,
          u === `z` ? 0.38 : (s - o) / 2,
          u === `z` ? (s - o) / 2 : 0.38,
          0,
          1,
          i,
        ),
        a.obbs.push({
          x: d,
          z: f,
          hx: u === `z` ? 0.38 : (s - o) / 2,
          hz: u === `z` ? (s - o) / 2 : 0.38,
          y0: 0,
          y1: G + 0.95,
        }));
    }
  }
  (e.setMaterial(0.92, 0, 0, 0), A(e, 9341568));
  for (let [t, n, r, a] of p) {
    let o = Math.min(t, r),
      s = Math.max(t, r),
      c = Math.min(n, a),
      l = Math.max(n, a),
      u = o === s;
    N(
      e,
      u ? o : (o + s) / 2,
      u ? (c + l) / 2 : c,
      K,
      K + 0.75,
      u ? 0.2 : (s - o) / 2,
      u ? (l - c) / 2 : 0.2,
      0,
      1,
      i,
    );
  }
  (Ot(e, t, J.xb, J.xt, J.z0, J.z1, G, K, 0.85, q.x0),
    Ot(e, t, Y.xb, Y.xt, Y.z0, Y.z1, G, K, 0.6, q.x0),
    Ot(e, t, X.xb, X.xt, X.z0, X.z1, G, K, 0.7, q.x1));
  for (let [e, t] of [
    [J, q.x0],
    [Y, q.x0],
    [X, q.x1],
  ]) {
    let n = Math.min(e.xb, e.xt),
      r = Math.max(e.xb, e.xt);
    a.floors.push({
      cx: (n + r) / 2,
      cz: (e.z0 + e.z1) / 2,
      hx: (e.z1 - e.z0) / 2,
      hz: (r - n) / 2,
      y0: e.xb < e.xt ? G : K,
      y1: e.xb < e.xt ? K : G,
      heading: -Math.PI / 2,
    });
    let i = Math.min(e.xb, t),
      o = Math.max(e.xb, t);
    for (let t of [e.z0 - 0.2, e.z1 + 0.2])
      a.obbs.push({
        x: (i + o) / 2,
        z: t,
        hx: (o - i) / 2,
        hz: 0.2,
        y0: 0,
        y1: K * 0.5,
      });
  }
  let g = Z.x0 + 0.2,
    _ = Z.x0 + 3.6,
    v = _ + 0.4,
    y = Z.x1 - 0.2,
    b = (e) => G + ((K - G) * (Z.zb - e)) / (Z.zb - Z.zt);
  (e.setMaterial(0.5, 0.5, 0, 0),
    A(e, 3816512),
    e.quad(
      g,
      b(Z.zb),
      Z.zb,
      _,
      b(Z.zb),
      Z.zb,
      _,
      b(Z.zt),
      Z.zt,
      g,
      b(Z.zt),
      Z.zt,
      i.u0,
      i.v0,
      i.u1,
      i.v1,
    ),
    e.setMaterial(0.15, 0.3, 0.12, 0),
    A(e, 12113116));
  for (let t of [g, _]) {
    let n = b(Z.zb),
      r = b(Z.zt);
    (e.quad(
      t,
      n,
      Z.zb,
      t,
      r,
      Z.zt,
      t,
      r + 1,
      Z.zt,
      t,
      n + 1,
      Z.zb,
      i.u0,
      i.v0,
      i.u1,
      i.v1,
    ),
      e.quad(
        t,
        r,
        Z.zt,
        t,
        n,
        Z.zb,
        t,
        n + 1,
        Z.zb,
        t,
        r + 1,
        Z.zt,
        i.u0,
        i.v0,
        i.u1,
        i.v1,
      ),
      a.obbs.push({
        x: t,
        z: (Z.zb + Z.zt) / 2,
        hx: 0.08,
        hz: (Z.zb - Z.zt) / 2,
        y0: 0,
        y1: K + 1,
      }));
  }
  (e.setMaterial(0.4, 0.3, 0, 0), A(e, 1315860));
  for (let t of [g, _])
    e.quad(
      t - 0.06,
      b(Z.zb) + 1.02,
      Z.zb,
      t + 0.06,
      b(Z.zb) + 1.02,
      Z.zb,
      t + 0.06,
      b(Z.zt) + 1.02,
      Z.zt,
      t - 0.06,
      b(Z.zt) + 1.02,
      Z.zt,
      i.u0,
      i.v0,
      i.u1,
      i.v1,
    );
  {
    let t = Math.round((K - G) / 0.17),
      n = (Z.zb - Z.zt) / t,
      r = (K - G) / t;
    e.setMaterial(0.9, 0, 0, 0);
    for (let a = 0; a < t; a++) {
      let t = Z.zb - a * n,
        o = G + a * r;
      (A(e, 12104358),
        j(e, v, t, y, t, o, o + r, i),
        A(e, 13288632),
        M(e, v, t - n, y, t, o + r, i));
    }
  }
  (a.floors.push({
    cx: (Z.x0 + Z.x1) / 2,
    cz: (Z.zb + Z.zt) / 2,
    hx: (Z.x1 - Z.x0) / 2,
    hz: (Z.zb - Z.zt) / 2,
    y0: K,
    y1: G,
    heading: 0,
  }),
    e.setMaterial(0.5, 0.6, 0, 0),
    A(e, 6975092));
  let x = Z.x0 - 0.15,
    S = Z.x1 + 0.15;
  for (let t = Z.zb; t >= Z.zt - 0.01; t -= (Z.zb - Z.zt) / 4) {
    for (let n of [x, S])
      (N(e, n, t, t > q.z1 ? G : K - 0.2, b(t) + 2.9, 0.08, 0.08, 0, 1, i),
        t > q.z1 && a.circles.push({ x: n, z: t, r: 0.1, h: b(t) + 2.9 }));
    N(e, (x + S) / 2, t, b(t) + 2.8, b(t) + 2.95, (S - x) / 2, 0.08, 0, 1, i);
  }
  (e.setMaterial(0.12, 0.4, 0.18, 1), A(e, 13164004));
  let C = Z.zb + 0.6,
    w = Z.zt - 0.4;
  for (let t of [0, 1]) {
    let n = (e) => b(Math.max(Z.zt, Math.min(Z.zb, e))) + 2.95 + t * 0.02;
    t === 0
      ? e.quad(
          x,
          n(C),
          C,
          S,
          n(C),
          C,
          S,
          n(w),
          w,
          x,
          n(w),
          w,
          i.u0,
          i.v0,
          i.u1,
          i.v1,
        )
      : e.quad(
          x,
          n(w) - 0.03,
          w,
          S,
          n(w) - 0.03,
          w,
          S,
          n(C) - 0.03,
          C,
          x,
          n(C) - 0.03,
          C,
          i.u0,
          i.v0,
          i.u1,
          i.v1,
        );
  }
  (kt(e, t, V.x0 + 0.9, (J.z0 + J.z1) / 2, 4.3, 7.2, G, !1, `gaku:hie`),
    a.circles.push(
      { x: V.x0 + 0.9, z: (J.z0 + J.z1) / 2 - 4.3, r: 0.4, h: 8 },
      { x: V.x0 + 0.9, z: (J.z0 + J.z1) / 2 + 4.3, r: 0.4, h: 8 },
    ),
    kt(e, t, (Z.x0 + Z.x1) / 2, V.z1 - 0.7, 4.6, 5.6, G, !0, `gaku:sannobashi`),
    kt(e, t, V.x1 - 0.65, (X.z0 + X.z1) / 2, 2.8, 4.6, G, !1, `gaku:hie`),
    a.circles.push(
      { x: V.x1 - 0.65, z: (X.z0 + X.z1) / 2 - 2.8, r: 0.3, h: 5.2 },
      { x: V.x1 - 0.65, z: (X.z0 + X.z1) / 2 + 2.8, r: 0.3, h: 5.2 },
    ),
    a.circles.push(
      { x: (Z.x0 + Z.x1) / 2 - 4.6, z: V.z1 - 0.7, r: 0.35, h: 6.4 },
      { x: (Z.x0 + Z.x1) / 2 + 4.6, z: V.z1 - 0.7, r: 0.35, h: 6.4 },
    ),
    e.setMaterial(0.85, 0, 0.05, 1),
    A(e, 16777215),
    N(
      e,
      V.x0 + 0.7,
      554.5,
      G,
      G + 2.6,
      0.3,
      0.3,
      -1,
      0,
      t.uv(`wall:ishigaki`),
      t.uv(`shagohyo`),
    ),
    a.obbs.push({
      x: V.x0 + 0.7,
      z: 554.5,
      hx: 0.3,
      hz: 0.3,
      y0: 0,
      y1: G + 2.6,
    }),
    e.setMaterial(0.6, 0, 0.1, 1),
    A(e, 16777215),
    N(
      e,
      V.x0 + 0.6,
      539.6,
      G + 1.2,
      G + 1.68,
      0.8,
      0.03,
      -1,
      0,
      i,
      t.uv(`otokozaka`),
      t.uv(`otokozaka`),
    ),
    e.setMaterial(0.6, 0.4, 0, 0),
    A(e, 4861464),
    N(e, V.x0 + 0.6, 539.6, G, G + 1.2, 0.05, 0.05, -1, 0, i));
  {
    let r = n > 0 ? 16 : 9,
      i = (Y.z0 + Y.z1) / 2;
    for (let a = 0; a < r; a++) {
      let o = Y.xb + 0.4 + ((Y.xt - Y.xb - 0.6) * a) / (r - 1);
      At(
        e,
        t,
        o,
        i,
        1.12,
        2.5,
        G + ((K - G) * (o - Y.xb)) / (Y.xt - Y.xb),
        a % 3 == 0 && n > 0,
      );
    }
    for (let n = 0; n < 4; n++)
      At(e, t, Y.xt + 0.8 + n * 0.9, i, 1.12, 2.5, K, !1);
    (jt(e, t, -918.6, 506.2, -914.8, 512.6, K, 2.4, 0.7, 1.4, !0),
      a.obbs.push({
        x: -916.7,
        z: 509.4,
        hx: 2.4,
        hz: 3.7,
        y0: 0,
        y1: K + 4.5,
      }));
  }
  {
    let n = -923.6,
      r = -919.6;
    e.setMaterial(0.8, 0, 0, 0);
    for (let [t, o] of [
      [536.5, 541.6],
      [548.4, 553.5],
    ]) {
      (A(e, 15920868),
        N(e, -1843.2 / 2, (t + o) / 2, K, K + 4.6, 2, (o - t) / 2, 0, 1, i),
        a.obbs.push({
          x: -1843.2 / 2,
          z: (t + o) / 2,
          hx: 2,
          hz: (o - t) / 2,
          y0: 0,
          y1: K + 4.6,
        }),
        A(e, Q));
      for (let a of [t, o])
        for (let t of [n, r]) N(e, t, a, K, K + 4.6, 0.24, 0.24, 0, 1, i);
    }
    (A(e, Q),
      N(e, -1843.2 / 2, 545, K + 4.1, K + 4.7, 2.2, 8.7, 0, 1, i),
      Nt(e, t, n, 536.5, r, 553.5, K + 4.7, 1.4, 2.2),
      e.setMaterial(0.6, 0, 0.5, 3),
      A(e, 16777215));
    let o = t.uv(`lantern:sanno`);
    for (let t of [542.3000000000001, 547.6999999999999])
      N(
        e,
        -924.3000000000001,
        t,
        K + 2.6,
        K + 3.5,
        0.28,
        0.28,
        -1,
        0,
        o,
        o,
        o,
        !1,
      );
  }
  for (let [n, r, o, s] of [
    [-921, -899, 522.6, 524.6],
    [-921, -916.5, 565.4, 567.4],
    [-907.5, -899, 565.4, 567.4],
  ]) {
    let c = (n + r) / 2,
      l = (r - n) / 2;
    (e.setMaterial(0.85, 0, 0, 0),
      A(e, 15920868),
      N(
        e,
        c,
        (o + s) / 2,
        K,
        K + 3,
        l,
        (s - o) / 2,
        0,
        1,
        i,
        void 0,
        void 0,
        !1,
      ),
      e.setMaterial(0.7, 0, 0, 0),
      A(e, Q));
    for (
      let t = n;
      t <= r + 0.01;
      t += (r - n) / Math.max(1, Math.round((r - n) / 2.75))
    )
      for (let n of [o - 0.05, s + 0.05])
        N(e, t, n, K, K + 3, 0.16, 0.16, 0, 1, i);
    (N(
      e,
      c,
      (o + s) / 2,
      K + 2.55,
      K + 3,
      l + 0.05,
      (s - o) / 2 + 0.1,
      0,
      1,
      i,
      void 0,
      void 0,
      !1,
    ),
      Nt(e, t, n, o, r, s, K + 3, 0.7, 1),
      a.obbs.push({
        x: c,
        z: (o + s) / 2,
        hx: l,
        hz: (s - o) / 2,
        y0: 0,
        y1: K + 4,
      }));
  }
  (jt(e, t, -914, 533.5, -905, 556.5, K, 4.8, 1.8, 3.8, !0),
    a.obbs.push({ x: -909.5, z: 545, hx: 4.5, hz: 11.5, y0: 0, y1: K + 9 }),
    jt(e, t, -903.6, 537.5, -898.4, 552.5, K + 0.4, 4.2, 1.2, 3, !1),
    a.obbs.push({ x: -901, z: 545, hx: 2.6, hz: 7.5, y0: 0, y1: K + 8 }),
    e.setMaterial(0.6, 0, 0.1, 1),
    A(e, 16777215));
  {
    let n = t.uv(`gaku:hie`);
    (j(e, -914.24, 543.8, -914.24, 546.2, K + 4.1, K + 5.3, n),
      e.setMaterial(0.8, 0, 0, 0),
      A(e, 5913120),
      N(e, -913.2, 545, K + 0.6, K + 1.4, 0.45, 1.4, -1, 0, i));
  }
  (e.setMaterial(0.7, 0, 0.08, 1),
    A(e, 16777215),
    N(
      e,
      -905.5,
      592.5,
      K + 0.7,
      K + 2,
      0.85,
      0.05,
      0,
      1,
      i,
      t.uv(`hieboard`),
      t.uv(`wall:concrete`),
    ),
    e.setMaterial(0.6, 0.4, 0, 0),
    A(e, 4861464));
  for (let t of [-906.2, -904.8])
    N(e, t, 592.5, K, K + 0.7, 0.05, 0.05, 0, 1, i);
  let T = [];
  for (let [e, t] of [
    [-927.5, 503],
    [-922.5, 501.5],
    [-913, 502],
    [-905, 503.5],
    [-900, 509],
    [-900.5, 518],
    [-927.5, 517],
    [-927.5, 527],
    [-927.5, 534],
    [-927.5, 556],
    [-927.5, 565],
    [-927.5, 575],
    [-924, 584],
    [-920, 591],
    [-925, 597],
    [-901, 572],
    [-900, 581],
    [-902, 592],
    [-888, 486],
    [-883, 492],
    [-892, 500],
    [-884, 507],
    [-885, 530],
    [-889, 541],
    [-884, 553],
    [-890, 563],
    [-884, 575],
    [-891, 586],
    [-884, 596],
  ])
    T.push([e, K, t]);
  for (let [e, t] of [
    [-935.2, 515],
    [-935.6, 528],
    [-935.2, 562],
    [-935.4, 576],
    [-935, 590],
    [-935.6, 600],
  ])
    T.push([e, G, t]);
  for (let e = 503; e < 597; e += 6.5)
    Math.abs(e - 545) < 9 ||
      Math.abs(e - 509.4) < 4 ||
      T.push([q.x0 + 1.6 + ((e * 7) % 3) * 0.4, K, e]);
  for (let e = q.x0 + 4; e < q.x1 - 2; e += 6.2)
    (e > Z.x0 - 2 && e < Z.x1 + 2) ||
      (T.push([e, K, q.z1 - 1.8 - ((e * 3) % 2) * 0.6]),
      e < -900 && T.push([e + 2.5, K, q.z0 + 1.8 + ((e * 5) % 2) * 0.5]));
  for (let [e, t, n] of T)
    a.instances.push({
      model: `tree:${Math.round(e * 3 + n) & 1}`,
      x: e,
      y: t,
      z: n,
      fx: 0,
      fz: 1,
      s: 1.15,
      range: 320,
    });
  for (let [e, t] of [
    [-918.2, 538.8],
    [-918.2, 551.2],
    [-916, 538.8],
    [-916, 551.2],
  ])
    (a.instances.push({
      model: `toro`,
      x: e,
      y: K,
      z: t,
      fx: 1,
      fz: 0,
      range: 120,
    }),
      a.circles.push({ x: e, z: t, r: 0.35, h: K + 2 }));
  return a;
}
