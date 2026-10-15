// tokyo/assets/charWorker-DPNUr-Eu 36 — math
// Lines 12694-12927 of readable/tokyo/assets/charWorker-DPNUr-Eu.pretty.js (statement-aligned).
const Ra = Math.PI * 2,
  za = (e, t, n) => e + (t - e) * n,
  Ba = (e, t) => Math.exp(-(e * e) / (t * t)),
  Va = [
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
  Ha = [
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
  Ua = [
    [0, 0.19],
    [0.55, 0.205],
    [0.84, 0.27],
    [1.04, 0.47],
    [1.6, 0.52],
    [2.2, 0.55],
    [Math.PI, 0.58],
  ];
function Wa(e, t) {
  let n = e.length;
  if (t <= e[0][0]) return e[0][1];
  for (let r = 0; r < n - 1; r++)
    if (t <= e[r + 1][0]) {
      let n = (t - e[r][0]) / (e[r + 1][0] - e[r][0]),
        i = n * n * (3 - 2 * n);
      return za(e[r][1], e[r + 1][1], i);
    }
  return e[n - 1][1];
}
const Ga = (e) => {
  let t = ((e % Ra) + Ra) % Ra;
  return (t > Math.PI && (t = Ra - t), t);
};
function Ka(e, t) {
  let n =
    (e, t, n = 0.32, r = 0.1) =>
    (i, a) =>
      za(e, t, H(n - r, n + r, a + 0.08 * (Ga(i) / Math.PI)));
  switch (e) {
    case `bald`:
      return null;
    case `buzz`:
      return { hl: Va, th: () => 0.0028, shave: 0.35 };
    case `fade`:
      return {
        hl: Va,
        th: (e, t) =>
          n(0.014, 0.0026, 0.3, 0.14)(e, t) +
          0.006 * Ba(Ga(e), 0.5) * Ba(t - 0.12, 0.1),
        shave: 0.45,
        tufts: `back`,
      };
    case `sidepart`:
      return {
        hl: Va,
        th: (e, t) =>
          n(0.014, 0.006, 0.36, 0.14)(e, t) +
          0.006 * H(-0.6, 0.6, Math.sin(e)) * H(0.35, 0.1, t) +
          0.004 * Ba(Ga(e), 0.5) * Ba(t - 0.15, 0.1),
        tufts: `side`,
      };
    case `twoblock`:
      return {
        hl: Va,
        th: (e, t) =>
          za(0.015, 0.0035, H(0.28, 0.42, t) * H(0.8, 1.1, Ga(e))) *
          (t > 0.3 && Ga(e) < 0.95 ? 0.6 : 1),
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
      return { hl: Va, th: n(0.012, 0.004, 0.32), spikes: 16, shave: 0.25 };
    case `undercut`:
      return {
        hl: Va,
        th: (e, t) =>
          Ga(e) < 1.05 && t < 0.33 + 0.1 * (1 - Ga(e) / 1.05)
            ? 0.022 + 0.012 * Ba(Ga(e), 0.45) * Ba(t - 0.12, 0.1)
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
        th: (e, t) => 0.02 + 0.006 * H(0.1, 0.4, t),
        curls: 1,
      };
    case `bob`:
      return {
        hl: Ua,
        th: (e, t) => 0.014 + 0.005 * H(0.2, 0.45, t),
        curtain: { span0: 0.92, endY: -0.95, th: 0.014, curl: 1, part: -0.35 },
        bangs: { d: 0.3, span: 0.7, jag: 0, th: 0.01, sweep: 0.12 },
      };
    case `long`:
      return {
        hl: Ua,
        th: (e, t) => 0.011 + 0.004 * H(0.2, 0.45, t),
        curtain: { span0: 0.86, endY: 0.7, th: 0.013, part: 0 },
      };
    case `wavy`:
      return {
        hl: Ua,
        th: (e, t) => 0.013 + 0.006 * H(0.2, 0.45, t),
        curtain: { span0: 0.88, endY: 0.76, th: 0.016, wave: 1, part: -0.4 },
      };
    case `bangs`:
      return {
        hl: Ua,
        th: () => 0.012,
        bangs: { d: 0.405, span: 1.02, jag: 0.006, th: 0.009 },
        curtain: { span0: 1.02, endY: 0.795, th: 0.014, curl: 0.4 },
      };
    case `ponytail`:
      return {
        hl: Ha,
        th: () => 0.0065,
        tail: `pony`,
        bangs: { d: 0.3, span: 0.72, jag: 0.022, th: 0.0055, sweep: 0.1 },
        locks: !0,
      };
    case `bun`:
      return { hl: Ha, th: () => 0.007, tail: `bun`, locks: !0 };
  }
  return null;
}
function qa(e, t, n, r, i) {
  if ((G(e, t, n, 0, i, !1), r === 0)) return i;
  let a = 1 - H(0, 0.35, n),
    o = H(0.75, 1, n),
    s = Math.sin(t) * (1 - a),
    c = -Math.cos(t) * (1 - a),
    l = a - 0.3 * o,
    u = Math.hypot(s, l, c) || 1;
  return i.set(i.x + (s / u) * r, i.y + (l / u) * r, i.z + (c / u) * r);
}
const Ja = (e) => Math.sin(e * 23.1) * 0.6 + Math.sin(e * 41.7 + 1.3) * 0.4;
function Ya(e) {
  let t = e.bangs;
  return (n) => {
    let r = Ga(n),
      i = Wa(e.hl, r) + 0.006 * Ja(n) * H(0.3, 0.9, r);
    if (t && r < t.span) {
      let e = H(t.span, t.span - 0.2, r),
        a = t.jag * Ja(n * 1.7),
        o = (t.sweep ?? 0) * Math.sin(n * 1.3);
      i = za(i, t.d + a + o, e);
    }
    return i;
  };
}
function Xa(e, t) {
  let n = Ka(e, t);
  return !n || n.crown ? null : Ya(n);
}
function Za(e, t) {
  let n = Ka(e, t);
  if (!n) return null;
  let r = Ya(n),
    i = 0.035,
    a = n.crown;
  return a === void 0
    ? (e, t) => t < r(e) - i
    : (e, t) => Ga(e) > 1.12 && t > a + i && t < r(e) - i;
}
function Qa(e, t) {
  let n = Ka(e, t);
  return !!n?.curtain && n.curtain.span0 < 1.4;
}
