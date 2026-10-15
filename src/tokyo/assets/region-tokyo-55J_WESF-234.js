// tokyo/assets/region-tokyo-55J_WESF 234 — col
// Lines 89386-89675 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* $be(e, t) {
  let n = e.coarse ? 10 : 24,
    r = (e) => nF(n, e),
    i = t.c(`plaster`),
    a = r(YP);
  e.col(14672870).mat(0.4, 0.2, 0.22, G);
  for (let n = 0; n < a.length; n++) {
    let r = a[n],
      i = a[(n + 1) % a.length];
    e.wall(
      r[0],
      r[1],
      i[0],
      i[1],
      0,
      7.6000000000000005,
      t.c(`office`),
      3.6,
      7.6000000000000005,
    );
  }
  yield;
  let o = [JP, 15.6, 16.1, 23.6, 24.1, 30.8],
    s = (e) => e === 1 || e === 3,
    c = o.map((e) => r(dF(e))),
    l = o.map((e) => r(dF(e) - 0.22)),
    u = c[0].length,
    d = e.coarse ? new Set() : uF(nF(n));
  for (let t = 0; t + 1 < o.length; t++) {
    let n = s(t) ? l[t] : c[t],
      r = s(t) ? l[t + 1] : c[t + 1];
    e.col(s(t) ? Ybe : $P).mat(0.75, 0, s(t) ? 0.02 : 0.07 - t * 0.01, 1);
    for (let a = 0; a < u; a++) {
      if (t === 0 && d.has(a)) continue;
      let c = (a + 1) % u;
      e.quad(
        n[a][0],
        o[t],
        n[a][1],
        n[c][0],
        o[t],
        n[c][1],
        r[c][0],
        o[t + 1],
        r[c][1],
        r[a][0],
        o[t + 1],
        r[a][1],
        s(t) ? e.white : i,
      );
    }
    if (s(t))
      for (let [n, r, i, a] of [
        [o[t], c[t], l[t], !0],
        [o[t + 1], l[t + 1], c[t + 1], !1],
      ])
        for (let t = 0; t < u; t++) {
          let o = (t + 1) % u,
            s = a ? r : i,
            c = a ? i : r;
          tM(
            e,
            [s[t][0], n, s[t][1]],
            [s[o][0], n, s[o][1]],
            [c[o][0], n, c[o][1]],
            [c[t][0], n, c[t][1]],
            [0, a ? 1 : -1, 0],
          );
        }
  }
  if ((yield, !e.coarse)) {
    e.col(Jbe).mat(0.7, 0, 0.06, 1);
    let t = nF(n),
      r = cF.map(([e, t]) => sF(e, t, 0));
    for (let n = 0; n < t.length; n += 2) {
      if (r.some((e) => Math.hypot(e.x - t[n][0], e.z - t[n][1]) < 5.6))
        continue;
      let i = (n + 1) % t.length,
        a = (n - 1 + t.length) % t.length,
        o = t[i][0] - t[a][0],
        s = t[i][1] - t[a][1],
        c = Math.hypot(o, s) || 1;
      ((o /= c), (s /= c));
      let l = -s,
        u = o,
        d = (e, r, i) => {
          let a = dF(e) + r;
          return [t[n][0] + l * a + o * i, e, t[n][1] + u * a + s * i];
        },
        f = JP,
        p = 30.8,
        m = 0.45,
        h = 0.5;
      (tM(e, d(f, h, -0.45), d(f, h, m), d(p, h, m), d(p, h, -0.45), [l, 0, u]),
        tM(e, d(f, 0, m), d(f, h, m), d(p, h, m), d(p, 0, m), [o, 0, s]),
        tM(e, d(f, 0, -0.45), d(f, h, -0.45), d(p, h, -0.45), d(p, 0, -0.45), [
          -o,
          0,
          -s,
        ]),
        tM(
          e,
          d(p, 0, -0.45),
          d(p, 0, m),
          d(p, h, m),
          d(p, h, -0.45),
          [0, 1, 0],
        ));
    }
  }
  e.col(14868698).mat(0.6, 0.1, 0.05, 1);
  let f = dF(30.8);
  (e.sweep(
    nF(n).flat(),
    [f, 30.8, 0.9, 31.3, 1.2, 33.6, 1.2, 34.3, -1.6, 34.62],
    !0,
  ),
    yield);
  let p = r(dF(JP)),
    m = r(7),
    h = r(YP),
    g = r(6.75),
    _ = m.length;
  e.col(Xbe).mat(0.85, 0, 0, 0);
  for (let t = 0; t < _; t++) {
    let n = (t + 1) % _;
    tM(
      e,
      [p[t][0], JP, p[t][1]],
      [p[n][0], JP, p[n][1]],
      [m[n][0], JP, m[n][1]],
      [m[t][0], JP, m[t][1]],
      [0, 1, 0],
    );
  }
  e.col(15921386).mat(0.8, 0, 0.16, 1);
  for (let t = 0; t < _; t++) {
    let n = (t + 1) % _;
    tM(
      e,
      [h[t][0], 7.6000000000000005, h[t][1]],
      [h[n][0], 7.6000000000000005, h[n][1]],
      [m[n][0], 7.6000000000000005, m[n][1]],
      [m[t][0], 7.6000000000000005, m[t][1]],
      [0, -1, 0],
    );
  }
  for (let t = 0; t < _; t++) {
    let n = (t + 1) % _;
    (e.col(QP).mat(0.6, 0.1, 0.05, 1),
      e.quad(
        m[t][0],
        7.6000000000000005,
        m[t][1],
        m[n][0],
        7.6000000000000005,
        m[n][1],
        m[n][0],
        8.08,
        m[n][1],
        m[t][0],
        8.08,
        m[t][1],
      ),
      e.col(16054527).mat(0.3, 0, 0.75, 1),
      e.quad(
        m[t][0],
        8.08,
        m[t][1],
        m[n][0],
        8.08,
        m[n][1],
        m[n][0],
        8.22,
        m[n][1],
        m[t][0],
        8.22,
        m[t][1],
      ),
      e.col(QP).mat(0.6, 0.1, 0.05, 1),
      e.quad(
        m[t][0],
        8.22,
        m[t][1],
        m[n][0],
        8.22,
        m[n][1],
        m[n][0],
        JP,
        m[n][1],
        m[t][0],
        JP,
        m[t][1],
      ));
  }
  e.col(10466493).mat(0.15, 0.3, 0.04, 1);
  for (let t = 0; t < _; t++) {
    let n = (t + 1) % _;
    (e.quad(
      g[t][0],
      JP,
      g[t][1],
      g[n][0],
      JP,
      g[n][1],
      g[n][0],
      9.5,
      g[n][1],
      g[t][0],
      9.5,
      g[t][1],
    ),
      e.quad(
        g[n][0],
        JP,
        g[n][1],
        g[t][0],
        JP,
        g[t][1],
        g[t][0],
        9.5,
        g[t][1],
        g[n][0],
        9.5,
        g[n][1],
      ));
  }
  (e.col(14605526).mat(0.5, 0.4, 0, 0),
    e.sweep(
      g.flat(),
      [
        -0.06, 9.5, 0.06, 9.5, 0.06, 9.620000000000001, -0.06,
        9.620000000000001,
      ],
      !0,
    ),
    yield,
    e.col(14934491).mat(0.7, 0, 0.04, 1));
  let v = r(Gbe);
  for (let t = 0; t < v.length; t += e.coarse ? 4 : 2)
    (e.cylY(v[t][0], v[t][1], 0, 7.6000000000000005, 0.45, 8, 0.45, !1),
      e.pole(v[t][0], v[t][1], 0.5, 0, 7.6000000000000005));
  ((t, n, r) => {
    for (let i = 0; i < t.length; i += 2) {
      let a = t[i],
        o = t[(i + 2) % t.length],
        s = o[0] - a[0],
        c = o[1] - a[1],
        l = Math.hypot(s, c),
        u = c / l,
        d = -s / l;
      e.solidRot(
        (a[0] + o[0]) / 2 + u * 1.5,
        (a[1] + o[1]) / 2 + d * 1.5,
        l / 2 + 0.4,
        1.5,
        Math.atan2(c, s),
        n,
        r,
      );
    }
  })(nF(16, YP), 0, JP);
  let y = cF.filter((e) => lF.includes(e[2])).map(([e, t]) => sF(e, t, 0)),
    b = nF(16, dF(JP));
  for (let t = 0; t < b.length; t += 2) {
    let n = b[t],
      r = b[(t + 2) % b.length];
    if (
      y.some(
        (e) =>
          Math.hypot(e.x - (n[0] + r[0]) / 2, e.z - (n[1] + r[1]) / 2) < 12,
      )
    )
      continue;
    let i = r[0] - n[0],
      a = r[1] - n[1],
      o = Math.hypot(i, a),
      s = a / o,
      c = -i / o;
    e.solidRot(
      (n[0] + r[0]) / 2 + s * 1.5,
      (n[1] + r[1]) / 2 + c * 1.5,
      o / 2 + 0.4,
      1.5,
      Math.atan2(a, i),
      JP,
      34,
    );
  }
}
