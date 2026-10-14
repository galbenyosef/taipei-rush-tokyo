// tokyo/assets/actors-Bnj6Q1ad 31 — style
// Lines 14339-14562 of readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js (statement-aligned).
function Hu(e, t) {
  let n = Ks[t];
  if (t !== `scooter`) {
    for (let t of [n.frontAxle, n.rearAxle])
      (zu(e, n.track, n.wheelR, t, n.wheelR, n.wheelW, 1),
        zu(e, -n.track, n.wheelR, t, n.wheelR, n.wheelW, -1));
    (t === `bus` || t === `garbage`) &&
      (e.style(Pl),
      e.cylX(
        n.track - n.wheelW,
        n.wheelR,
        n.rearAxle,
        n.wheelR * 0.98,
        n.wheelW * 0.9,
        12,
        !1,
      ),
      e.cylX(
        -n.track + n.wheelW,
        n.wheelR,
        n.rearAxle,
        n.wheelR * 0.98,
        n.wheelW * 0.9,
        12,
        !1,
      ));
  }
}
function Uu(e, t, n, r, i = !1) {
  e.style(Ml);
  let a = i ? 1.6 : 1;
  for (let i of [-1, 1])
    (e.box(i * (t + 0.05 * a), n, r, 0.1 * a, 0.03, 0.05, ``),
      e.style(Il),
      e.cbox(
        i * (t + 0.12 * a),
        n + 0.02,
        r + 0.02,
        0.1 * a,
        0.1 * a,
        0.07 * a,
        0.02,
      ),
      e.style(jl),
      e.box(
        i * (t + 0.12 * a),
        n + 0.02,
        r + 0.058 * a,
        0.08 * a,
        0.075 * a,
        0.01,
        ``,
      ),
      e.style(Ml));
}
function Wu(e, t, n, r, i) {
  e.style({ color: 1710877, rough: 0.8 });
  for (let a of n)
    for (let n of [-1, 1]) {
      let o = n * (t(a, r) + 0.004),
        s = n * (t(a, i) + 0.004);
      e.quad(
        [o, r, a - 0.008],
        [o, r, a + 0.008],
        [s, i, a + 0.008],
        [s, i, a - 0.008],
        [n, 0, 0],
      );
    }
}
function Gu(e, t, n, r) {
  e.style({ color: 3816512, rough: 0.35, metal: 0.6 });
  for (let i of n)
    for (let n of [-1, 1])
      e.box(n * (t(i, r) + 0.012), r, i, 0.02, 0.035, 0.16, ``);
}
function Ku(e, t, n) {
  let r = [[e, t]];
  for (let [e, t] of n) {
    let n = [];
    for (let [i, a] of r)
      t <= i || e >= a
        ? n.push([i, a])
        : (e > i && n.push([i, e]), t < a && n.push([t, a]));
    r = n;
  }
  return r.filter(([e, t]) => t - e > 0.02);
}
var qu = (e, t) => {
  let n = Ks[e];
  return [
    [n.frontAxle - t, n.frontAxle + t],
    [n.rearAxle - t, n.rearAxle + t],
  ];
};
function Ju(e, t, n, r, i, a, o, s = [], c = 0, l = 0.01) {
  e.style(t);
  for (let t of c === 0 ? [-1, 1] : [c]) {
    let c = (e, r) => t * (n(e, r) + l);
    for (let [n, l] of Ku(r, i, s))
      e.quad(
        [c(n, a), a, n],
        [c(l, a), a, l],
        [c(l, o), o, l],
        [c(n, o), o, n],
        [t, 0, 0],
      );
  }
}
function Yu(e, t, n, r, i, a, o, s, c = -0.36) {
  let l = i - n,
    u = a - r,
    d = Math.hypot(l, u),
    f = -u / d,
    p = l / d,
    m = 0.016,
    h = (e, t) => [t, r + u * e + p * m, n + l * e + f * m],
    g = [0, p, f];
  (e.style({ color: 658189, rough: 0.85 }),
    e.quad(h(0.02, -o), h(0.02, o), h(0.13, o * 0.96), h(0.13, -o * 0.96), g));
  let _ = c,
    v = 0.14,
    y = v / d;
  for (let t = 0; t < 12; t++) {
    let n = (t / 12) * Math.PI * 2,
      r = ((t + 1) / 12) * Math.PI * 2,
      i = (e, t) => h(0.24 + Math.sin(e) * y * t, _ + Math.cos(e) * v * t);
    e.quad(i(n, 0.78), i(n, 1), i(r, 1), i(r, 0.78), g);
  }
  for (let [n, r] of s)
    for (let i of [-1, 1]) {
      let a = (e, n) => i * (t(e, n) + 0.016),
        o = n - 0.1,
        s = n + 0.08,
        c = r - 0.17,
        l = r;
      e.quad(
        [a(o, c), c, o],
        [a(s, c), c, s],
        [a(s, l - 0.03), l - 0.03, s],
        [a(o, l), l, o],
        [i, 0, 0],
      );
    }
}
function Xu(e, t, n, r, i, a) {
  let o = r - t,
    s = i - n,
    c = Math.hypot(o, s),
    l = -s / c,
    u = o / c,
    d = 0.014,
    f = (e, r) => [r, n + s * e + u * d, t + o * e + l * d];
  e.style({ color: 921361, rough: 0.6 });
  for (let [t, n] of [
    [-a, -0.06],
    [0.02, a - 0.1],
  ])
    e.quad(f(0.045, t), f(0.13, n), f(0.15, n), f(0.065, t), [0, u, l]);
}
function Zu(e, t, n) {
  (e.style({ color: 1316120, rough: 0.35, metal: 0.3 }),
    e.extrude(
      [
        [n - 0.09, t],
        [n + 0.08, t],
        [n + 0.06, t + 0.035],
        [n - 0.05, t + 0.07],
      ],
      () => 0.022,
      0.008,
    ));
}
function Qu(e, t, n, r, i, a) {
  (e.style(Hl),
    e.box(-(t(n, r) + 0.006), r, n, 0.012, 0.03, 0.07, ``),
    e.style(Ul),
    e.box(t(n, r) + 0.006, r, n, 0.012, 0.03, 0.07, ``),
    e.style({ color: 1710877, rough: 0.8 }));
  let o = t(i, a) + 0.005,
    s = 0.075;
  for (let [t, n] of [
    [
      [a - s, i - s],
      [a - s, i + s],
    ],
    [
      [a + s, i - s],
      [a + s, i + s],
    ],
    [
      [a - s, i - s],
      [a + s, i - s],
    ],
    [
      [a - s, i + s],
      [a + s, i + s],
    ],
  ]) {
    let r = t[0] !== n[0],
      i = 0.006;
    e.quad(
      [o, t[0] - (r ? 0 : i), t[1] - (r ? i : 0)],
      [o, n[0] - (r ? 0 : i), n[1] - (r ? i : 0)],
      [o, n[0] + (r ? 0 : i), n[1] + (r ? i : 0)],
      [o, t[0] + (r ? 0 : i), t[1] + (r ? i : 0)],
      [1, 0, 0],
    );
  }
}
function $u(e, t, n, r, i, a = !1) {
  Ju(
    e,
    a ? Nl : { color: 1184533, rough: 0.5 },
    t,
    n,
    r,
    i - 0.014,
    i + 0.01,
    [],
    0,
    0.013,
  );
}
