// tokyo__assets__region-tokyo-BcM3fReU 134 — coarse
// Lines 59204-59471 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function vM(e, t) {
  let n = (e) => e * t;
  oM(e);
  let r = e.coarse ? 5 : 7;
  if (
    (fM(e, 0, n(0.3), n(0.2), n(0.33), n(0.3), r),
    e.rod(
      0,
      n(0.4),
      n(0.15),
      0,
      n(0.95),
      n(-0.12),
      n(0.24),
      e.coarse ? 5 : 7,
      n(0.2),
    ),
    fM(e, 0, n(0.95), n(-0.14), n(0.23), n(0.2), r),
    !e.coarse)
  )
    for (let t of [-1, 1])
      (e.rod(
        n(t * 0.13),
        n(0.85),
        n(-0.22),
        n(t * 0.14),
        n(0.06),
        n(-0.34),
        n(0.075),
        5,
        n(0.06),
      ),
        e.box(
          n(t * 0.14) - n(0.08),
          0,
          n(-0.46),
          n(t * 0.14) + n(0.08),
          n(0.08),
          n(-0.26),
        ),
        e.coarse ||
          e.box(
            n(t * 0.27) - n(0.09),
            0,
            n(-0.1),
            n(t * 0.27) + n(0.09),
            n(0.12),
            n(0.2),
          ));
  if (
    (e.rod(0, n(1.02), n(-0.15), 0, n(1.5), n(-0.27), n(0.15), 6, n(0.11)),
    fM(e, 0, n(1.58), n(-0.31), n(0.19), n(0.16), r),
    e.rod(0, n(1.62), n(-0.38), 0, n(1.57), n(-0.74), n(0.13), 6, n(0.08)),
    e.rod(0, n(1.47), n(-0.38), 0, n(1.45), n(-0.68), n(0.075), 5, n(0.05)),
    !e.coarse)
  ) {
    for (let t of [-1, 1])
      (e.rod(
        n(t * 0.06),
        n(1.67),
        n(-0.28),
        n(t * 0.12),
        n(1.92),
        n(-0.08),
        n(0.025),
        4,
        n(0.01),
      ),
        e.rod(
          n(t * 0.05),
          n(1.52),
          n(-0.64),
          n(t * 0.22),
          n(1.44),
          n(-0.74),
          n(0.012),
          3,
          n(0.006),
        ));
    for (let t = 0; t < 4; t++)
      uM(
        e,
        [0, n(1.48 - t * 0.12), n(-0.22 + t * 0.05)],
        [n(0.02), n(1.2 - t * 0.12), n(-0.04 + t * 0.05)],
        [n(-0.02), n(1.36 - t * 0.12), n(0.02 + t * 0.05)],
      );
    (e.rod(0, n(0.2), n(0.5), 0, n(0.55), n(0.68), n(0.06), 5, n(0.04)),
      uM(
        e,
        [0, n(0.5), n(0.62)],
        [0, n(1), n(0.75)],
        [n(0.05), n(0.7), n(0.5)],
      ));
  }
  for (let t of [-1, 1]) {
    let r = [n(t * 0.17), n(1.08), n(-0.04)],
      i = [n(t * 0.42), n(2.15), n(0.3)],
      a = [n(t * 0.62), n(1.5), n(0.66)],
      o = [n(t * 0.36), n(0.98), n(0.58)],
      s = [n(t * 0.6), n(1.9), n(0.55)];
    if (
      (oM(e, !0), uM(e, r, i, s), uM(e, r, s, a), uM(e, r, a, o), !e.coarse)
    ) {
      oM(e);
      for (let t of [i, s, a, o])
        e.rod(r[0], r[1], r[2], t[0], t[1], t[2], n(0.03), 3, n(0.012));
      (uM(e, s, [n(t * 0.68), n(1.68), n(0.7)], a),
        uM(e, a, [n(t * 0.52), n(1.2), n(0.76)], o));
    }
  }
}
function yM(e, t) {
  let n = (e) => e * t,
    r = e.coarse ? 5 : 7;
  if (
    (oM(e),
    fM(e, 0, n(0.3), n(0.18), n(0.34), n(0.3), r),
    e.rod(
      0,
      n(0.4),
      n(0.12),
      0,
      n(0.9),
      n(-0.08),
      n(0.26),
      e.coarse ? 5 : 7,
      n(0.22),
    ),
    fM(e, 0, n(1.06), n(-0.1), n(0.31), n(0.27), r, 0.3),
    !e.coarse)
  ) {
    (fM(e, 0, n(1.08), n(-0.3), n(0.17), n(0.16), r),
      e.rod(0, n(1.04), n(-0.38), 0, n(1), n(-0.48), n(0.1), 5, n(0.08)));
    for (let t of [-1, 0, 1])
      uM(
        e,
        [n(t * 0.18), n(0.92), n(-0.22)],
        [n(t * 0.14 - 0.06), n(0.66), n(-0.3)],
        [n(t * 0.14 + 0.06), n(0.66), n(-0.3)],
      );
  }
  if (!e.coarse)
    for (let t of [-1, 1])
      (e.rod(
        n(t * 0.15),
        n(0.8),
        n(-0.16),
        n(t * 0.16),
        n(0.05),
        n(-0.3),
        n(0.08),
        5,
        n(0.065),
      ),
        e.box(
          n(t * 0.16) - n(0.08),
          0,
          n(-0.42),
          n(t * 0.16) + n(0.08),
          n(0.08),
          n(-0.24),
        ),
        e.coarse ||
          e.box(
            n(t * 0.29) - n(0.09),
            0,
            n(-0.08),
            n(t * 0.29) + n(0.09),
            n(0.12),
            n(0.22),
          ));
  let i = n(0.62),
    a = n(-0.46);
  if (
    (oM(e, !0),
    e.rod(
      n(0.12),
      i,
      a + n(0.04),
      n(0.12),
      i,
      a - n(0.04),
      n(0.36),
      e.coarse ? 6 : 12,
    ),
    dM(e, n(0.12), i, a - n(0.04), n(0.36), e.coarse ? 6 : 12),
    !e.coarse)
  ) {
    (oM(e),
      e.rod(n(0.12), i, a - n(0.04), n(0.12), i, a - n(0.1), n(0.2), 10),
      dM(e, n(0.12), i, a - n(0.1), n(0.12), 8));
    for (let t = 0; t < 6; t++) {
      let r = (t / 6) * Math.PI * 2 + Math.PI / 2,
        o = n(0.39);
      e.box(
        n(0.12) + Math.cos(r) * o - n(0.05),
        i + Math.sin(r) * o - n(0.05),
        a - n(0.08),
        n(0.12) + Math.cos(r) * o + n(0.05),
        i + Math.sin(r) * o + n(0.05),
        a,
      );
    }
  }
}
function bM(e, t, n, r, i, a, o, s) {
  e.col(16777215).mat(0.62, 0.12, 0.035, 1);
  let c = t.c(`nbRelief`),
    l = (i + a) / 2,
    u = (o + s) / 2;
  for (let [t, d, f, p] of [
    [i, l, o, u],
    [l, a, u, s],
  ])
    for (let [i, a] of [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ]) {
      let o = -a,
        s = i;
      lM(
        e,
        [
          [n + i * f - o * f, t, r + a * f - s * f],
          [n + i * f + o * f, t, r + a * f + s * f],
          [n + i * p + o * p, d, r + a * p + s * p],
          [n + i * p - o * p, d, r + a * p - s * p],
        ],
        [i, (f - p) / (d - t), a],
        c,
      );
    }
  if ((oM(e), !e.coarse))
    for (let t of [0, 0.42]) {
      let c = i + (a - i) * t,
        l = o + (s - o) * t;
      pM(e, n, r, [l + 0.05, c, l + 0.06, c + 0.1, l + 0.02, c + 0.16]);
    }
  if (!e.coarse) {
    oM(e, !0);
    let t = a - 0.35,
      c = s + (o - s) * (0.35 / (a - i)) + 0.02;
    for (let [i, a] of [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ]) {
      let o = e.sub(n + i * c, 0, r + a * c, Math.atan2(i, -a));
      (dM(e, 0, t, 0, Math.min(0.16, s * 0.75), 7), e.leave(o));
    }
    oM(e);
  }
  pM(e, n, r, [
    s,
    a,
    s + 0.03,
    a + 0.06,
    s + 0.15,
    a + 0.2,
    s + 0.15,
    a + 0.3,
    s * 0.55,
    a + 0.4,
  ]);
}
