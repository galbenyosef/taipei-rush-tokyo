// tokyo/assets/region-tokyo-A7LxHjud 303 — col
// Lines 110369-110715 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function zG(e, t, n, r, i, a, o, s) {
  if (
    (e.push().col(xG).mat(0.9, 0, 0.04, 1),
    e.panel(t, n, r, i, a, o, s),
    e.pop(),
    e.coarse)
  )
    return;
  let c = Math.hypot(r - t, i - n),
    l = (r - t) / c,
    u = (i - n) / c,
    d = -u * 0.04,
    f = l * 0.04;
  e.push().col(bG).mat(0.85);
  let p = Math.max(2, Math.round(c / 1.6));
  for (let r = 0; r <= p; r++) {
    let i = (c * r) / p,
      s = t + l * i + d,
      m = n + u * i + f;
    e.panel(s - l * 0.11, m - u * 0.11, s + l * 0.11, m + u * 0.11, a, o);
  }
  for (let s of [a, (a + o) / 2, o - 0.18])
    e.panel(t + d, n + f, r + d, i + f, s, s + 0.18);
  for (let [r, i] of [
    [0, 1],
    [p - 1, -1],
  ]) {
    let s = (c * r) / p,
      m = (c * (r + 1)) / p,
      h = [t + l * s + d, n + u * s + f],
      g = [t + l * m + d, n + u * m + f],
      _ = (a + o) / 2,
      [v, y] = i > 0 ? [h, g] : [g, h];
    e.quad(
      v[0],
      a + 0.15,
      v[1],
      v[0] + l * 0.2 * i,
      a + 0.15,
      v[1] + u * 0.2 * i,
      y[0],
      _,
      y[1],
      y[0] - l * 0.2 * i,
      _,
      y[1] - u * 0.2 * i,
    );
  }
  e.pop();
}
function GEe(e, t, n, r, i, a, o, s, c) {
  (e.push().col(c).mat(0.6, 0.3),
    jG(
      e,
      [
        [t - n, a, r],
        [t, o, r],
        [t, o, i],
        [t - n, a, i],
      ],
      !0,
      s,
    ),
    jG(
      e,
      [
        [t + n, a, r],
        [t, o, r],
        [t, o, i],
        [t + n, a, i],
      ],
      !0,
      s,
    ),
    jG(
      e,
      [
        [t - n, a - 0.01, r],
        [t, o - 0.01, r],
        [t, o - 0.01, i],
        [t - n, a - 0.01, i],
      ],
      !1,
    ),
    jG(
      e,
      [
        [t + n, a - 0.01, r],
        [t, o - 0.01, r],
        [t, o - 0.01, i],
        [t + n, a - 0.01, i],
      ],
      !1,
    ),
    e.pop());
}
function* KEe(e, t, n) {
  let r = (lG.s0 + lG.s1) / 2,
    i = kG(e, n, r),
    a = lG.s0 - r,
    o = lG.s1 - r,
    s = lG.e0,
    c = lG.e1,
    l = Math.min(LG(n, lG.s0), LG(n, lG.s1)) - 0.3,
    u = LG(n, r) + 0.12,
    d = u + 3.8,
    f = d + 3.2,
    p = e.coarse ? e.white : t.c(`brick`),
    m = e.coarse ? e.white : t.c(`plaster`);
  (e.push().col(10836029).mat(0.9, 0, 0.03, 1),
    e.box(s, l, a, c, d, o, p, 3, 3),
    e.pop(),
    e.push().col(2498587).mat(0.4, 0.2, 0.3, G),
    e.panel(c + 0.03, 2.4, c + 0.03, -2.4, u, u + 3));
  for (let t of [a + 2.2, o - 2.2])
    e.panel(c + 0.03, t + 1.2, c + 0.03, t - 1.2, u + 0.9, u + 3);
  if (
    (e.pop(),
    e.push().col(16777215).mat(0.6, 0, 0.3, G),
    e.panel(c + 0.08, 2.2, c + 0.08, -2.2, u + 3.15, u + 3.7, IG(t, `old`)),
    e.pop(),
    zG(e, c, o, c, a, d, f, m),
    zG(e, s, a, s, o, d, f, m),
    zG(e, s, o, c, o, d, f, m),
    zG(e, c, a, s, a, d, f, m),
    !e.coarse)
  ) {
    e.push().col(2896438).mat(0.3, 0.3, 0.3, G);
    for (let t of [a + 2.4, a + 4.6, o - 4.6, o - 2.4])
      e.panel(c + 0.06, t + 0.6, c + 0.06, t - 0.6, d + 0.9, f - 0.7);
    e.pop();
  }
  yield;
  let h = e.white,
    g = (s + c) / 2,
    _ = (c - s) / 2 + 0.8;
  (GEe(e, g, _, a - 0.8, o + 0.8, f, f + _ * 1.1, h, SG),
    e.push().col(xG).mat(0.9));
  for (let [t, n] of [
    [a, -1],
    [o, 1],
  ])
    n < 0
      ? e.triFace(s, f, t, g, f + (_ - 0.8) * 1.1, t, c, f, t)
      : e.triFace(c, f, t, g, f + (_ - 0.8) * 1.1, t, s, f, t);
  e.pop();
  let v = f + 4.6;
  e.push().col(SG).mat(0.6, 0.3);
  for (let t of [-1, 1])
    jG(
      e,
      [
        [g, v, 0],
        [c + 1.2, v, 0],
        [c + 1.2, f + 0.2, t * 4.2],
        [g, f + 0.2, t * 4.2],
      ],
      !0,
      h,
    );
  if (
    (e.pop(),
    e.push().col(xG).mat(0.9, 0, 0.04, 1),
    e.triFace(
      c + 0.9,
      f + 0.3,
      -3.6,
      c + 0.9,
      v - 0.2,
      0,
      c + 0.9,
      f + 0.3,
      3.6,
    ),
    e.pop(),
    !e.coarse)
  ) {
    (e.push().col(bG).mat(0.85),
      e.panel(c + 0.94, 0.12, c + 0.94, -0.12, f + 0.3, v - 0.3),
      e.quad(
        c + 0.95,
        f + 0.3,
        3.4,
        c + 0.95,
        f + 0.3,
        3.15,
        c + 0.95,
        v - 0.4,
        0.12,
        c + 0.95,
        v - 0.3,
        0.3,
      ),
      e.quad(
        c + 0.95,
        f + 0.3,
        -3.15,
        c + 0.95,
        f + 0.3,
        -3.4,
        c + 0.95,
        v - 0.3,
        -0.3,
        c + 0.95,
        v - 0.4,
        -0.12,
      ),
      e.col(15986660).mat(0.4, 0, 0.5, 1));
    let t = e.sub(c + 0.97, f + 2, 0, -Math.PI / 2);
    (e.lathe(0, 0, [0.01, -0.02, 0.62, 0, 0.01, 0.02], 10),
      e.leave(t),
      e.pop());
  }
  yield;
  let y = f + _ * 1.1 - 0.4;
  (e.push().col(xG).mat(0.85),
    e.lathe(g, a + 3, [1, y, 1, y + 1.6], 8, Math.PI / 8),
    e.col(2764595).mat(0.4, 0.3, 0.3, 1),
    e.lathe(g, a + 3, [1.02, y + 0.4, 1.02, y + 1.3], 8, Math.PI / 8),
    e.col(5999222).mat(0.5, 0.5),
    e.lathe(
      g,
      a + 3,
      [
        1.25,
        y + 1.6,
        1.2,
        y + 1.8,
        0.95,
        y + 2.3,
        0.55,
        y + 2.75,
        0.15,
        y + 3,
        0.01,
        y + 3.05,
      ],
      8,
      Math.PI / 8,
    ),
    e.col(2960168).mat(0.5, 0.6),
    e.rod(g, y + 3, a + 3, g, y + 4.4, a + 3, 0.04, 4),
    e.coarse || e.box(g - 0.03, y + 3.9, a + 2.6, g + 0.03, y + 4.15, a + 3.5),
    e.pop(),
    e.leave(i));
  let b = kG(e, n, r);
  (e.solid(s, a, c, o, l, f), e.leave(b));
}
function* qEe(e, t, n) {
  let r = (uG.s0 + uG.s1) / 2,
    i = kG(e, n, r),
    a = uG.s0 - r,
    o = uG.s1 - r,
    s = uG.e0,
    c = uG.e1,
    l = Math.min(LG(n, uG.s0), LG(n, uG.s1)) - 0.3,
    u = LG(n, uG.s1) + 0.1;
  for (let n = 0; n < 4; n++) {
    let r = n === 0 ? l : u + 4 * n,
      i = u + 4 * (n + 1),
      d = c - n * 2.2;
    if (
      (e.push().col(10135210).mat(0.25, 0.4, 0.25, G),
      e.box(s, r, a, d, i - 0.35, o, e.coarse ? e.white : t.c(`glass`), 3, 4),
      e.col(13157046).mat(0.85),
      e.box(s - 0.2, i - 0.35, a - 0.2, d + 0.2, i, o + 0.2),
      e.pop(),
      !e.coarse)
    ) {
      e.push().col(10189397).mat(0.8);
      for (let t = a + 0.6; t < o; t += 1.5)
        e.box(d, r + (n === 0 ? 0 : 0.1), t - 0.05, d + 0.3, i - 0.4, t + 0.05);
      (e.pop(),
        n > 0 &&
          (e.push().col(5601343).mat(0.95),
          e.box(d + 0.3, r - 0.05, a + 0.4, d + 2.1, r + 0.45, o - 0.4),
          e.col(12833494).mat(0.15, 0.3),
          e.panel(d + 2.15, o - 0.4, d + 2.15, a + 0.4, r + 0.45, r + 1.15),
          e.pop()));
    }
  }
  (e.solid(s, a, c, o, l, u + 16),
    e.push().col(5930308).mat(0.95),
    e.flat(s, a, c - 6.6, o, u + 16 + 0.02),
    e.pop(),
    e.leave(i),
    yield);
}
function JEe(e, t, n) {
  let r = dG.x0 - n.ox,
    i = dG.x1 - n.ox,
    a = dG.z0 - n.oz,
    o = dG.z1 - n.oz,
    s = (a + o) / 2,
    c = sG + 4.6;
  if (
    (e.push().col(7172469).mat(0.7, 0.3),
    e.box(r, sG - 0.3, a, i, c, o),
    e.col(2369836).mat(0.2, 0.5, 0.25, G),
    e.panel(
      i + 0.03,
      o - 1,
      i + 0.03,
      a + 1,
      sG,
      sG + 3,
      e.coarse ? e.white : t.c(`glass`),
    ),
    e.col(16777215).mat(0.5, 0, 0.5, G),
    e.panel(
      i + 0.06,
      s + 4.2,
      i + 0.06,
      s - 2.2,
      sG + 3.2,
      sG + 4,
      IG(t, `station`),
    ),
    e.panel(
      i + 0.06,
      s - 3.2,
      i + 0.06,
      s - 6.4,
      sG + 3.25,
      sG + 3.95,
      IG(t, `takeshita`),
    ),
    e.pop(),
    e.push().col(12172736).mat(0.5, 0.5),
    e.box(i, sG + 3, a + 2, i + 1.6, sG + 3.2, o - 2, e.white, 0, 0, null, !0),
    e.pop(),
    !e.coarse)
  )
    for (let [n, r] of [
      [a + 4.2, `posterA`],
      [o - 4.2, `posterB`],
    ])
      (e.push().col(3816768).mat(0.6, 0.4),
        e.box(i - 1.2, c, n - 0.1, i - 0.9, c + 1, n + 0.1),
        e.box(i - 1, c + 1, n - 3.2, i - 0.8, c + 4.4, n + 3.2),
        e.col(16777215).mat(0.5, 0, 0.45, G),
        e.panel(i - 0.78, n + 3, i - 0.78, n - 3, c + 1.2, c + 4.2, IG(t, r)),
        e.pop());
  (e.solid(r, a, i - 0.3, o, sG - 0.3, c),
    e.solid(i - 0.3, a, i, s - 2.6, sG - 0.3, c),
    e.solid(i - 0.3, s + 2.6, i, o, sG - 0.3, c));
}
