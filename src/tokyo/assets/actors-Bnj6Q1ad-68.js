// tokyo/assets/actors-Bnj6Q1ad 68 — color
// Lines 33301-33613 of readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js (statement-aligned).
function tv(e, t) {
  (X(e, [0.02, 1.2, -0.142], [0.11, 0.072, 0.055], {
    part: 1,
    slot: 7,
    color: 1710618,
    acc: 10,
    shade: 0,
  }),
    J_(e, [0.02, 1.2, -0.17], [0.02, 1.2, -0.2], 0.026, 0.026, 8, {
      part: 1,
      slot: 7,
      color: 3815994,
      acc: 10,
      shade: 0,
    }));
  for (let t of [-1, 1])
    X(
      e,
      [t * 0.06, 1.33, -0.105],
      [0.012, 0.24, 0.01],
      { part: 1, slot: 7, color: 1710618, acc: 10, shade: 0 },
      [0, 0, t * 0.3],
    );
  let n = Q_,
    r = $g;
  if (
    (J_(e, [n, r - 0.12, 0], [n, r + 1, 0], 0.009, 0.009, 5, {
      part: 11,
      slot: 7,
      color: 2829099,
      acc: 14,
      shade: 0,
    }),
    q_(e, [n, r - 0.12, 0], [0.018, 0.03, 0.018], 5, 3, {
      part: 11,
      slot: 7,
      color: 3811870,
      acc: 14,
      shade: 0,
    }),
    X_(
      e,
      [n, r + 0.95, 0],
      0.56,
      0.3,
      9,
      { part: 11, slot: 5, acc: 14, shade: 0.15 },
      { part: 11, slot: 5, acc: 14, color: 10132122, shade: 0, flip: !0 },
    ),
    q_(e, [n, r + 1.07, 0], [0.012, 0.03, 0.012], 4, 3, {
      part: 11,
      slot: 7,
      color: 2829099,
      acc: 14,
      shade: 0,
    }),
    t?.cup)
  )
    for (let i of t.cup)
      J_(e, [n, r + i[0], -0.02], [n, r + i[1], -0.02], i[2], i[3], 7, {
        part: 11,
        slot: 7,
        color: i[4],
        acc: 15,
        shade: i[5],
      });
  else
    (J_(e, [n, r - 0.13, -0.02], [n, r - 0.1, -0.02], 0.03, 0.031, 7, {
      part: 11,
      slot: 7,
      color: 2758672,
      acc: 15,
      shade: 0,
    }),
      J_(e, [n, r - 0.1, -0.02], [n, r + 0, -0.02], 0.031, 0.036, 7, {
        part: 11,
        slot: 7,
        color: 13214332,
        acc: 15,
        shade: 0.1,
      }),
      J_(e, [n, r + 0, -0.02], [n, r + 0.012, -0.02], 0.037, 0.037, 7, {
        part: 11,
        slot: 7,
        color: 15920356,
        acc: 15,
        shade: 0,
      }),
      J_(e, [n, r + 0, -0.02], [n + 0.012, r + 0.1, -0.02], 0.0065, 0.0065, 5, {
        part: 11,
        slot: 7,
        color: 3842280,
        acc: 15,
        shade: 0,
      }));
  (J_(e, [n, 0, -0.02], [n, r - 0.02, -0.02], 0.011, 0.012, 5, {
    part: 11,
    slot: 7,
    color: 5913122,
    acc: 19,
    shade: 0.2,
  }),
    X(e, [n - 0.03, r - 0.02, -0.02], [0.08, 0.02, 0.02], {
      part: 11,
      slot: 7,
      color: 5913122,
      acc: 19,
      shade: 0,
    }));
  for (let t = -1; t <= 1; t++)
    (J_(
      e,
      [n - 0.02 + t * 0.012, r - 0.02, -0.03],
      [n - 0.02 + t * 0.02, r + 0.3, -0.03 - 0.02 * t],
      0.003,
      0.003,
      3,
      { part: 11, slot: 7, color: 10250810, acc: 21, shade: 0 },
    ),
      q_(
        e,
        [n - 0.02 + t * 0.02, r + 0.3, -0.03 - 0.02 * t],
        [0.006, 0.012, 0.006],
        3,
        3,
        { part: 11, slot: 7, color: 16738848, acc: 21, shade: 0, glow: 1.5 },
      ));
  let i = -Q_;
  if (
    (X(e, [i + 0.005, r - 0.06, -0.028], [0.07, 0.14, 0.01], {
      part: 4,
      slot: 7,
      color: 1776930,
      acc: 16,
      shade: 0,
    }),
    X(e, [i + 0.005, r - 0.06, -0.0345], [0.062, 0.125, 0.004], {
      part: 4,
      slot: 7,
      color: 9417960,
      acc: 16,
      shade: 0,
      glow: 1,
    }),
    t?.bag)
  )
    for (let n of t.bag)
      X(
        e,
        [i + n[0], r + n[1], n[2]],
        [n[3], n[4], n[5]],
        { part: 12, slot: 7, color: n[6], acc: 17, shade: n[7] },
        [n[8], 0, 0],
      );
  else {
    let t = i - 0.02,
      n = r - 0.1;
    (X(e, [t, n - 0.045, 0], [0.3, 0.09, 0.13], {
      part: 12,
      slot: 7,
      color: 13120044,
      acc: 17,
      shade: 0,
    }),
      X(e, [t, n - 0.13, 0], [0.3, 0.08, 0.13], {
        part: 12,
        slot: 7,
        color: 15790057,
        acc: 17,
        shade: 0,
      }),
      X(e, [t, n - 0.215, 0], [0.3, 0.09, 0.13], {
        part: 12,
        slot: 7,
        color: 2775208,
        acc: 17,
        shade: 0,
      }),
      X(e, [t, n - 0.13, -0.066], [0.05, 0.26, 0.004], {
        part: 12,
        slot: 7,
        color: 2775208,
        acc: 17,
        shade: 0,
      }),
      X(e, [t, n - 0.13, 0.066], [0.05, 0.26, 0.004], {
        part: 12,
        slot: 7,
        color: 13120044,
        acc: 17,
        shade: 0,
      }));
    for (let t of [-1, 1])
      X(
        e,
        [i, n + 0.045, t * 0.03],
        [0.012, 0.11, 0.012],
        { part: 12, slot: 7, color: 13120044, acc: 17, shade: 0 },
        [t * 0.4, 0, 0],
      );
  }
  {
    let t = { part: 12, slot: 7, color: 15783646, acc: 28 },
      n = new re(1, 1),
      a = n.attributes.position;
    for (let e = 0; e < a.count; e++) {
      let t = a.getX(e),
        n = a.getY(e),
        r = a.getZ(e),
        i = 1 + 0.08 * Math.sin(t * 7.3 + r * 5.1 + n * 3.7),
        o = n > 0 ? 1 - 0.35 * n : 1;
      a.setXYZ(
        e,
        t * i * o,
        (n < -0.6 ? -0.6 - (n + 0.6) * 0.3 : n) * i,
        r * i * o,
      );
    }
    (n.scale(0.16, 0.2, 0.15),
      n.translate(i - 0.01, r - 0.3, 0),
      n.deleteAttribute(`normal`),
      n.computeVertexNormals(),
      e.add(n, { ...t, shade: 0.3 }),
      q_(e, [i, r - 0.075, 0], [0.035, 0.05, 0.03], 5, 3, {
        ...t,
        shade: 0.1,
      }));
  }
  (X(e, [i - 0.005, r - 0.19, 0], [0.08, 0.25, 0.36], {
    part: 12,
    slot: 7,
    color: 2760988,
    acc: 18,
    shade: 0.15,
  }),
    X(e, [i, r - 0.055, 0], [0.02, 0.03, 0.1], {
      part: 12,
      slot: 7,
      color: 1381653,
      acc: 18,
      shade: 0,
    }),
    J_(e, [0, 0.405, 0.03], [0, 0.44, 0.03], 0.155, 0.16, 8, {
      part: 13,
      slot: 7,
      color: 13577768,
      acc: 20,
      shade: 0.1,
    }));
  for (let [t, n] of [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ])
    J_(
      e,
      [t * 0.13, 0, 0.03 + n * 0.13],
      [t * 0.095, 0.41000000000000003, 0.03 + n * 0.095],
      0.016,
      0.02,
      4,
      { part: 13, slot: 7, color: 12068128, acc: 20, shade: 0.2 },
    );
  (J_(
    e,
    [Q_ + 0.01, $g - 0.05, -0.02],
    [Q_ + 0.01, $g - 0.12, -0.03],
    0.016,
    0.018,
    6,
    { part: 6, slot: 7, color: 1842204, acc: 23, shade: 0 },
  ),
    J_(
      e,
      [Q_ + 0.01, $g - 0.12, -0.03],
      [Q_ + 0.01, $g - 0.86, -0.1],
      0.018,
      0.034,
      7,
      { part: 6, slot: 7, color: 13146716, acc: 23, shade: 0.1 },
    ));
}
function nv(e) {
  let t = { part: 11, slot: 7, acc: 27, shade: 0 },
    n = Q_ - 0.2,
    r = $g + 0.27,
    i = -0.03;
  (X(e, [n, r, i], [0.64, 0.44, 0.018], {
    ...t,
    slot: 5,
    color: 16777215,
    shade: 0.05,
  }),
    X(e, [n, r, -0.040999999999999995], [0.56, 0.36, 0.006], {
      ...t,
      color: 16052712,
    }),
    X(e, [n, r, -0.019], [0.56, 0.36, 0.006], { ...t, color: 16052712 }));
  for (let a of [-1, 1])
    for (let o = 0; o < 4; o++)
      X(
        e,
        [n - 0.195 + o * 0.13, r + 0.07, i + a * 0.0155],
        [0.1, 0.1, 0.004],
        { ...t, color: o % 2 ? 13116956 : 1842204 },
      );
  for (let a of [-1, 1])
    X(e, [n, r - 0.1, i + a * 0.0155], [0.46, 0.05, 0.004], {
      ...t,
      color: 13116956,
    });
}
