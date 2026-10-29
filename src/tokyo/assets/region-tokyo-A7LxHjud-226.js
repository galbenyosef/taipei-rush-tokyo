// tokyo/assets/region-tokyo-A7LxHjud 226 — col
// Lines 87401-87745 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function BP(e, t, n, r, i, a, o, s, c) {
  let l = e.sub(t, n, r, i);
  (e.push().col(4867652).mat(0.9, 0, 0.05, lP),
    e.box(-0.7 * a, 0, -0.55 * a, 0.7 * a, 0.75 * a, 0.55 * a));
  let u = 0.75 * a,
    d = () => e.col(o).mat(0.55, 0.15, 0.12, lP),
    f = () => e.col(s).mat(0.6, 0.25, 0.14, lP),
    p = e.seg(8);
  (d(),
    e.rod(
      -0.28 * a,
      u,
      0.05 * a,
      -0.22 * a,
      u + 0.75 * a,
      -0.05 * a,
      0.13 * a,
      6,
    ),
    e.rod(0.28 * a, u, -0.15 * a, 0.22 * a, u + 0.75 * a, 0, 0.13 * a, 6),
    f(),
    e.lathe(
      0,
      0,
      [0.42 * a, u + 0.55 * a, 0.4 * a, u + 0.95 * a, 0.32 * a, u + 1.05 * a],
      p,
      0,
      e.white,
      !1,
      !0,
    ),
    c === `deity` &&
      e.lathe(
        0,
        0,
        [
          0.5 * a,
          u,
          0.44 * a,
          u + 0.6 * a,
          0.36 * a,
          u + 1.3 * a,
          0.3 * a,
          u + 1.5 * a,
        ],
        p,
        0,
        e.white,
        !1,
        !0,
      ),
    (c === `nio` || c === `raijin` || c === `fujin`) && d(),
    e.lathe(
      0,
      0,
      [
        0.3 * a,
        u + 1 * a,
        0.38 * a,
        u + 1.25 * a,
        0.4 * a,
        u + 1.5 * a,
        0.22 * a,
        u + 1.62 * a,
      ],
      p,
      0,
      e.white,
      !1,
      !0,
    ),
    d(),
    e.lathe(
      0,
      -0.03 * a,
      [
        0.06 * a,
        u + 1.6 * a,
        0.2 * a,
        u + 1.7 * a,
        0.21 * a,
        u + 1.86 * a,
        0.13 * a,
        u + 1.98 * a,
      ],
      p,
      0,
      e.white,
      !1,
      !0,
    ),
    e.coarse ||
      (e.push().col(1841688).mat(0.7, 0, 0, 0),
      e.lathe(
        0,
        0.04 * a,
        [
          0.18 * a,
          u + 1.86 * a,
          0.24 * a,
          u + 1.95 * a,
          0.05 * a,
          u + 2.15 * a,
        ],
        6,
      ),
      e.pop()),
    d(),
    c === `deity` && f());
  let m = u + 1.42 * a;
  if (
    (c === `nio`
      ? (e.rod(0.36 * a, m, 0, 0.62 * a, m + 0.3 * a, -0.25 * a, 0.1 * a, 5),
        e.rod(-0.36 * a, m, 0, -0.7 * a, m - 0.35 * a, -0.1 * a, 0.1 * a, 5),
        e.rod(
          0.62 * a,
          m + 0.3 * a,
          -0.25 * a,
          0.55 * a,
          m + 0.65 * a,
          -0.35 * a,
          0.09 * a,
          5,
        ))
      : (e.rod(0.36 * a, m, 0, 0.55 * a, m + 0.35 * a, -0.1 * a, 0.09 * a, 5),
        e.rod(-0.36 * a, m, 0, -0.55 * a, m + 0.35 * a, -0.1 * a, 0.09 * a, 5)),
    e.pop(),
    !e.coarse)
  ) {
    if (c === `fujin`) {
      e.push().col(14275263).mat(0.8, 0, 0.12, lP);
      for (let t = 0; t < 8; t++) {
        let n = (t / 8) * cP,
          r = cP * ((t + 1) / 8);
        e.rod(
          Math.cos(n) * 0.62 * a,
          m + 0.4 * a + Math.sin(n) * 0.75 * a,
          0.05 * a,
          Math.cos(r) * 0.62 * a,
          m + 0.4 * a + Math.sin(r) * 0.75 * a,
          0.05 * a,
          0.17 * a,
          6,
        );
      }
      e.pop();
    } else if (c === `raijin`) {
      e.push().col(pP).mat(0.4, 0.7, 0.1, lP);
      let t = 0.85 * a,
        n = m + 0.25 * a,
        r = 0.35 * a;
      for (let i = 0; i < 8; i++) {
        let o = -0.15 * cP + (1.3 * cP * i) / 7,
          s = Math.cos(o) * t,
          c = Math.sin(o) * t;
        if (
          (e
            .col(9054748)
            .rod(s, n + c, r - 0.08 * a, s, n + c, r + 0.08 * a, 0.16 * a, 8),
          i < 7)
        ) {
          let o = -0.15 * cP + (1.3 * cP * (i + 1)) / 7;
          e.col(pP).rod(
            s,
            n + c,
            r,
            Math.cos(o) * t,
            n + Math.sin(o) * t,
            r,
            0.03 * a,
            4,
          );
        }
      }
      e.pop();
    }
  }
  e.leave(l);
}
function Fbe(e, t, n) {
  e.coarse || (qC(e, t, 0, n, 3.6), e.pole(t, n, 0.12, 0, 4.2));
}
function Ibe(e, t, n, r, i) {
  let a = new le(de(`sj-ginkgo`, i));
  (e.push().col(6181704).mat(0.95, 0, 0, 0),
    e.rod(t, 0, n, t, r * 0.55, n, r * 0.04, 6, r * 0.025));
  let o = e.coarse ? 5 : 8;
  if (
    (e.col(7113782, 0.88 + a.next() * 0.15),
    e.lathe(
      t,
      n,
      [
        0.3,
        r * 0.25,
        r * 0.26,
        r * 0.34,
        r * 0.3,
        r * 0.5,
        r * 0.22,
        r * 0.7,
        r * 0.12,
        r * 0.88,
        0.05,
        r,
      ],
      o,
      a.next(),
    ),
    !e.coarse)
  ) {
    e.col(9086534, 0.95);
    for (let i = 0; i < 3; i++) {
      let o = a.next() * cP * 2,
        s = r * 0.2,
        c = r * (0.42 + i * 0.13);
      e.lathe(
        t + Math.cos(o) * s,
        n + Math.sin(o) * s,
        [
          0.05,
          c - r * 0.08,
          r * 0.13,
          c,
          r * 0.08,
          c + r * 0.1,
          0.03,
          c + r * 0.14,
        ],
        6,
        o,
      );
    }
  }
  (e.pop(), e.pole(t, n, r * 0.05, 0, r * 0.5));
}
function* Lbe(e, t) {
  let n = e.sub(0, 0, SP, 0),
    r = 5.7,
    i = 2.4;
  (e.col(mP).mat(0.9, 0, 0.05, lP),
    e.box(-6.5, 0, -3.8, 6.5, 0.2, 3.8, t.granite, 2, 0.2),
    e.floor(-6.5, -3.8, 6.5, 3.8, 0.2));
  for (let t of [-5.7, -2.4, i, r]) {
    (zP(e, t, 0, 0.2, 6, 0.34, 0.2), e.pole(t, 0, 0.38, 0, 6));
    for (let n of [-3, 3])
      (zP(e, t, n, 0.2, 6, 0.26, 0.2), e.pole(t, n, 0.3, 0, 6));
  }
  NP(e, 0.15);
  for (let t of [-3, 0, 3])
    e.box(-5.7 - 0.4, 6, t - 0.22, 6.1000000000000005, 6.6, t + 0.22);
  for (let t of [-5.7, -2.4, i, r]) e.box(t - 0.2, 6, -3.3, t + 0.2, 6.6, 3.3);
  yield;
  for (let n of [-1, 1]) {
    let a = Math.min(n * i, n * r),
      o = Math.max(n * i, n * r),
      s = n * r;
    if (
      (NP(e, 0.2, 0.95),
      e.box(s - 0.12, 0.2, -3, s + 0.12, 2.6, 3),
      e
        .col(fP)
        .mat(0.85, 0, 0.12, lP)
        .box(s - 0.1, 2.6, -3, s + 0.1, 6, 3, t.plaster, 2, 3.4),
      NP(e, 0.2, 0.95).box(a, 0.2, -0.12, o, 2.6, 0.12),
      e
        .col(fP)
        .mat(0.85, 0, 0.12, lP)
        .box(a, 2.6, -0.1, o, 6, 0.1, t.plaster, 2, 3.4),
      e.col(2837050).mat(0.7, 0, 0.08, lP),
      e.box(a + 0.15, 0.2, -2.8, o - 0.15, 0.95, -0.12),
      e.box(a + 0.15, 0.2, 0.12, o - 0.15, 0.95, 2.8),
      !e.coarse)
    ) {
      e.col(2044712).mat(0.6, 0.3, 0, 0);
      for (let t of [-3.02, 3.02]) {
        (e.box(a + 0.1, 0.95, t - 0.04, o - 0.1, 1.05, t + 0.04),
          e.box(a + 0.1, 4.6, t - 0.04, o - 0.1, 4.7, t + 0.04));
        for (let n = a + 0.45; n < o - 0.3; n += 0.55)
          e.box(n - 0.025, 0.95, t - 0.03, n + 0.025, 4.6, t + 0.03);
      }
    }
    let c = (a + o) / 2;
    (BP(
      e,
      c,
      0.95,
      -1.45,
      0,
      1.05,
      n < 0 ? 4160088 : 11748654,
      6969914,
      n < 0 ? `fujin` : `raijin`,
    ),
      BP(
        e,
        c,
        0.95,
        1.45,
        cP,
        0.95,
        14862756,
        n < 0 ? 3103370 : 13148746,
        `deity`,
      ),
      e.solid(
        n > 0 ? i : -5.7 - 0.15,
        -3.35,
        n > 0 ? 5.8500000000000005 : -2.4,
        3.35,
        0,
        6.6,
      ));
  }
  (yield,
    RP(e, -5.7 - 0.4, -3.3, 6.1000000000000005, 3.3, 6.6, 7.5, 0.7),
    LP(e, -7.4, -4.5, 7.4, 4.5, 7.45),
    e.col(dP).mat(0.7, 0, 0.3, lP).flat(-2.4, -3, i, 3, 6, e.white, 0, 0, !1),
    e
      .push()
      .col(2761244)
      .mat(0.6, 0.2, 0, 0)
      .box(-1.55, 6.62, -4.18, 1.55, 7.42, -4)
      .pop(),
    e.push().col(16777215).mat(0.45, 0.3, 0.3, G),
    e.panel(1.45, -4.2, -1.45, -4.2, 6.66, 7.38, t.kinryuzan),
    e.pop(),
    MP(e),
    cC(e, 0, 0, 7.2, 8.6, 5.9, {
      ...jP(t, gP),
      rise: 3.9,
      curve: 1.35,
      sori: 0.35,
      thick: 0.42,
      eave: 2.4,
      ridgeH: 0.8,
      wallY: 7.2,
      wallInset: 1.9,
      wallColor: uP,
      rows: 7,
    }),
    yield,
    PP(e, t, 0, 5.95, 0, 3.9, 1.65, t.kaminarimon, t.furaijin),
    e.leave(n));
}
