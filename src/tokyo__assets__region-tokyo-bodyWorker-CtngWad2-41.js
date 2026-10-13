// tokyo__assets__region-tokyo-bodyWorker-CtngWad2 41 — math
// Lines 14321-14536 of readable/tokyo__assets__region-tokyo-bodyWorker-CtngWad2.pretty.js (statement-aligned).
const Do = Math.PI * 2,
  Oo = (e, t, n) => e + (t - e) * n,
  ko = (e, t) => Math.exp(-(e * e) / (t * t)),
  Ao = [
    [0, 0.2],
    [0.5, 0.215],
    [0.95, 0.3],
    [1.28, 0.52],
    [1.45, 0.5],
    [1.62, 0.42],
    [1.9, 0.5],
    [2.4, 0.64],
    [Math.PI, 0.72],
  ],
  jo = [
    [0, 0.19],
    [0.55, 0.205],
    [0.95, 0.27],
    [1.28, 0.5],
    [1.45, 0.5],
    [1.62, 0.44],
    [1.9, 0.52],
    [2.4, 0.66],
    [Math.PI, 0.74],
  ],
  Mo = [
    [0, 0.19],
    [0.55, 0.205],
    [0.84, 0.27],
    [1.04, 0.47],
    [1.6, 0.52],
    [2.2, 0.55],
    [Math.PI, 0.58],
  ];
function No(e, t) {
  let n = e.length;
  if (t <= e[0][0]) return e[0][1];
  for (let r = 0; r < n - 1; r++)
    if (t <= e[r + 1][0]) {
      let n = (t - e[r][0]) / (e[r + 1][0] - e[r][0]),
        i = n * n * (3 - 2 * n);
      return Oo(e[r][1], e[r + 1][1], i);
    }
  return e[n - 1][1];
}
const Po = (e) => {
  let t = ((e % Do) + Do) % Do;
  return (t > Math.PI && (t = Do - t), t);
};
function Fo(e, t) {
  let n =
    (e, t, n = 0.32, r = 0.1) =>
    (i, a) =>
      Oo(e, t, U(n - r, n + r, a + 0.08 * (Po(i) / Math.PI)));
  switch (e) {
    case `bald`:
      return null;
    case `buzz`:
      return { hl: Ao, th: () => 0.0028, shave: 0.35 };
    case `fade`:
      return {
        hl: Ao,
        th: (e, t) =>
          n(0.014, 0.0026, 0.3, 0.14)(e, t) +
          0.006 * ko(Po(e), 0.5) * ko(t - 0.12, 0.1),
        shave: 0.45,
        tufts: `back`,
      };
    case `sidepart`:
      return {
        hl: Ao,
        th: (e, t) =>
          n(0.014, 0.006, 0.36, 0.14)(e, t) +
          0.006 * U(-0.6, 0.6, Math.sin(e)) * U(0.35, 0.1, t) +
          0.004 * ko(Po(e), 0.5) * ko(t - 0.15, 0.1),
        tufts: `side`,
      };
    case `twoblock`:
      return {
        hl: Ao,
        th: (e, t) =>
          Oo(0.015, 0.0035, U(0.28, 0.42, t) * U(0.8, 1.1, Po(e))) *
          (t > 0.3 && Po(e) < 0.95 ? 0.6 : 1),
        bangs: { d: 0.36, span: 0.95, jag: 0.03, th: 0.007, sweep: 0.03 },
        shave: 0.35,
        tufts: `front`,
      };
    case `bowl`:
      return {
        hl: [
          [0, 0.4],
          [0.9, 0.42],
          [1.35, 0.5],
          [1.62, 0.46],
          [2.2, 0.56],
          [Math.PI, 0.62],
        ],
        th: () => 0.017,
        bangs: { d: 0.4, span: 1.15, jag: 0.004, th: 0.013 },
      };
    case `spiky`:
      return { hl: Ao, th: n(0.012, 0.004, 0.32), spikes: 16, shave: 0.25 };
    case `undercut`:
      return {
        hl: Ao,
        th: (e, t) =>
          Po(e) < 1.05 && t < 0.33 + 0.1 * (1 - Po(e) / 1.05)
            ? 0.022 + 0.012 * ko(Po(e), 0.45) * ko(t - 0.12, 0.1)
            : 0.0022,
        shave: 0.6,
        tufts: `back`,
      };
    case `elder`:
      return {
        hl: [
          [0, 0.24],
          [0.5, 0.26],
          [0.95, 0.33],
          [1.28, 0.52],
          [1.62, 0.44],
          [2.4, 0.64],
          [Math.PI, 0.7],
        ],
        th: n(0.009, 0.005, 0.35),
      };
    case `balding`:
      return {
        hl: [
          [0, 0.3],
          [0.95, 0.36],
          [1.28, 0.52],
          [1.62, 0.44],
          [2.4, 0.64],
          [Math.PI, 0.7],
        ],
        th: () => 0.006,
        crown: 0.3,
        shave: 0.2,
      };
    case `perm`:
      return {
        hl: [
          [0, 0.19],
          [0.95, 0.27],
          [1.3, 0.48],
          [1.62, 0.44],
          [2.4, 0.6],
          [Math.PI, 0.66],
        ],
        th: (e, t) => 0.02 + 0.006 * U(0.1, 0.4, t),
        curls: 1,
      };
    case `bob`:
      return {
        hl: Mo,
        th: (e, t) => 0.014 + 0.005 * U(0.2, 0.45, t),
        curtain: { span0: 0.92, endY: -0.95, th: 0.014, curl: 1, part: -0.35 },
        bangs: { d: 0.3, span: 0.7, jag: 0, th: 0.01, sweep: 0.12 },
      };
    case `long`:
      return {
        hl: Mo,
        th: (e, t) => 0.011 + 0.004 * U(0.2, 0.45, t),
        curtain: { span0: 0.86, endY: 0.7, th: 0.013, part: 0 },
      };
    case `wavy`:
      return {
        hl: Mo,
        th: (e, t) => 0.013 + 0.006 * U(0.2, 0.45, t),
        curtain: { span0: 0.88, endY: 0.76, th: 0.016, wave: 1, part: -0.4 },
      };
    case `bangs`:
      return {
        hl: Mo,
        th: () => 0.012,
        bangs: { d: 0.405, span: 1.02, jag: 0.006, th: 0.009 },
        curtain: { span0: 1.02, endY: 0.795, th: 0.014, curl: 0.4 },
      };
    case `ponytail`:
      return {
        hl: jo,
        th: () => 0.0065,
        tail: `pony`,
        bangs: { d: 0.3, span: 0.72, jag: 0.022, th: 0.0055, sweep: 0.1 },
        locks: !0,
      };
    case `bun`:
      return { hl: jo, th: () => 0.007, tail: `bun`, locks: !0 };
  }
  return null;
}
function Io(e, t, n, r, i) {
  if ((G(e, t, n, 0, i, !1), r === 0)) return i;
  let a = 1 - U(0, 0.35, n),
    o = U(0.75, 1, n),
    s = Math.sin(t) * (1 - a),
    c = -Math.cos(t) * (1 - a),
    l = a - 0.3 * o,
    u = Math.hypot(s, l, c) || 1;
  return i.set(i.x + (s / u) * r, i.y + (l / u) * r, i.z + (c / u) * r);
}
const Lo = (e) => Math.sin(e * 23.1) * 0.6 + Math.sin(e * 41.7 + 1.3) * 0.4;
function Ro(e) {
  let t = e.bangs;
  return (n) => {
    let r = Po(n),
      i = No(e.hl, r) + 0.006 * Lo(n) * U(0.3, 0.9, r);
    if (t && r < t.span) {
      let e = U(t.span, t.span - 0.2, r),
        a = t.jag * Lo(n * 1.7),
        o = (t.sweep ?? 0) * Math.sin(n * 1.3);
      i = Oo(i, t.d + a + o, e);
    }
    return i;
  };
}
