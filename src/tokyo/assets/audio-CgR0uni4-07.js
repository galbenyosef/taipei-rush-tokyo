// tokyo/assets/audio-CgR0uni4 07 — dur
// Lines 3434-3761 of readable/tokyo/assets/audio-CgR0uni4.pretty.js (statement-aligned).
function je(e, t) {
  let n = 44100,
    r = 70560;
  return { sr: n, ch: [k(oe(e === `white` ? p(r, t) : m(r, t), n, 0.1), 0.8)] };
}
var Me = {
    piano: {
      roots: [36, 48, 60, 72, 84],
      dur: 2.6,
      sr: 32e3,
      release: 0.12,
      sustain: !1,
    },
    epiano: {
      roots: [42, 54, 66, 78],
      dur: 2.2,
      sr: 32e3,
      release: 0.15,
      sustain: !1,
    },
    nylon: {
      roots: [45, 57, 69, 81],
      dur: 1.8,
      sr: 32e3,
      release: 0.1,
      sustain: !1,
    },
    bass: {
      roots: [28, 40, 52],
      dur: 1.5,
      sr: 22050,
      release: 0.05,
      sustain: !1,
    },
    synthbass: {
      roots: [28, 40, 52],
      dur: 1.2,
      sr: 22050,
      release: 0.04,
      sustain: !0,
    },
    pad: {
      roots: [48, 60, 72],
      dur: 3.8,
      sr: 22050,
      release: 0.5,
      sustain: !0,
    },
    strings: {
      roots: [43, 55, 67, 79],
      dur: 3.6,
      sr: 22050,
      release: 0.35,
      sustain: !0,
    },
    supersaw: {
      roots: [54, 66, 78],
      dur: 1.3,
      sr: 32e3,
      release: 0.12,
      sustain: !0,
    },
    lead: {
      roots: [60, 72, 84],
      dur: 1.3,
      sr: 32e3,
      release: 0.08,
      sustain: !0,
    },
    suona: {
      roots: [66, 72, 78, 84],
      dur: 1.7,
      sr: 22050,
      release: 0.08,
      sustain: !0,
    },
    erhu: {
      roots: [60, 66, 72, 78],
      dur: 2.2,
      sr: 22050,
      release: 0.15,
      sustain: !0,
    },
    vox: {
      roots: [60, 66, 72, 78],
      dur: 2.2,
      sr: 22050,
      release: 0.15,
      sustain: !0,
    },
    power: {
      roots: [40, 46, 52],
      dur: 1.7,
      sr: 32e3,
      release: 0.06,
      sustain: !0,
    },
    chug: {
      roots: [40, 46, 52],
      dur: 0.4,
      sr: 32e3,
      release: 0.03,
      sustain: !1,
    },
    distlead: {
      roots: [60, 66, 72, 78],
      dur: 1.8,
      sr: 32e3,
      release: 0.1,
      sustain: !0,
    },
    organ: {
      roots: [48, 60, 72],
      dur: 2.2,
      sr: 22050,
      release: 0.06,
      sustain: !0,
    },
    harpsi: {
      roots: [48, 60, 72, 84],
      dur: 1.6,
      sr: 32e3,
      release: 0.1,
      sustain: !1,
    },
    musicbox: { roots: [72, 84], dur: 2, sr: 32e3, release: 0.2, sustain: !1 },
    marimba: {
      roots: [60, 72, 84],
      dur: 1.2,
      sr: 32e3,
      release: 0.1,
      sustain: !1,
    },
    flute: {
      roots: [72, 78, 84],
      dur: 2,
      sr: 22050,
      release: 0.1,
      sustain: !0,
    },
  },
  B = (e, t) => ({ sr: t, ch: [e] }),
  V = (e, t) => Math.round(e * t);
function Ne(e, t, n, r) {
  let i = c(t),
    a = V(r, n),
    o = 32e-5 * (t > 60 ? 1 + (t - 60) * 0.06 : 1),
    s = 3.2 * (t < 48 ? 1.35 : t > 72 ? 0.55 : 1),
    l = t < 48 ? 0.09 : t > 72 ? 0.2 : 0.13,
    u = [];
  for (let e = 1; e <= 22; e++) {
    let t = e * Math.sqrt(1 + o * e * e);
    if (i * t > 11e3) break;
    let n = e ** -1.05 * Math.exp(-(e - 1) * l),
      r = s / (1 + 0.28 * (e - 1));
    u.push([t, n * 0.6, r * 0.22], [t, n * 0.4, r]);
  }
  let d = v(a, n, i, u, 0.7, e);
  (O(d, v(a, n, i, u, 0.7, e), 0.7),
    O(d, I(n, 0.05, e, `lp`, 2200, 0.7, 5e-4, 0.005), 0.08));
  let f = V(0.002, n);
  for (let e = 0; e < f; e++) d[e] *= e / f;
  return (t > 76 && x(d, n, 9e3), B(k(d, 0.9), n));
}
function Pe(e, t, n, r) {
  let i = c(t),
    a = V(r, n),
    o = y(a, n, i, 1, (e) => 2 * Math.exp(-e / 0.22) + 0.3);
  return (
    O(
      o,
      y(a, n, i * 1, 13.9, (e) => 1.2 * Math.exp(-e / 0.015)),
      0.12,
    ),
    O(o, _(a, n, i * 0.5, `sine`), 0.12),
    D(o, n, 0.002, t < 55 ? 1.6 : t > 75 ? 0.8 : 1.2),
    A(o, 1.4),
    B(k(o, 0.85), n)
  );
}
function Fe(e, t, n, r) {
  let i = c(t),
    a = ue(V(r, n), n, i, e, { decay: 0.9975, bright: 0.45, pick: 0.2 });
  return (
    w(a, n, 105, 2, 4),
    w(a, n, 230, 2, 3),
    x(a, n, 5200),
    D(a, n, 0.001, 1.2),
    B(k(a, 0.85), n)
  );
}
function Ie(e, t, n, r) {
  let i = c(t),
    a = V(r, n),
    o = _(a, n, i, `sine`),
    s = _(a, n, i, `saw`, 0.25);
  return (
    x(s, n, (e) => 350 + 700 * Math.exp(-e / 0.08), 0.9),
    O(o, s, 0.55),
    O(o, I(n, 0.03, e, `bp`, 900, 1, 5e-4, 0.004), 0.12),
    D(o, n, 0.004, 1),
    A(o, 1.6),
    B(k(o, 0.9), n)
  );
}
function Le(e, t, n, r) {
  let i = c(t),
    a = V(r, n),
    o = _(a, n, i * l(-6), `saw`, e.next());
  return (
    O(o, _(a, n, i * l(6), `saw`, e.next()), 0.9),
    O(o, _(a, n, i * 0.5, `square`), 0.5),
    x(o, n, (e) => 380 + 900 * Math.exp(-e / 0.12), 1.2),
    A(o, 2),
    E(o, n, [0, 0, 0.004, 1, 0.15, 0.85, r, 0.6]),
    B(k(o, 0.9), n)
  );
}
function Re(e, t, n, r) {
  let i = c(t),
    a = V(r, n),
    o = new Float32Array(a),
    s = new Float32Array(a);
  for (let t = 0; t < 6; t++)
    j(
      o,
      s,
      _(a, n, i * l((t - 2.5) * 5 + e.bi() * 2), `saw`, e.next()),
      t % 2 ? 0.7 : -0.7,
      0.2,
    );
  j(o, s, _(a, n, i * 0.5, `sine`), 0, 0.15);
  for (let e of [o, s])
    (x(e, n, (e) => 900 + 700 * Math.min(1, e / 0.8), 0.5),
      E(e, n, [0, 0, 0.4, 1, r - 0.5, 0.8, r, 0]));
  return k({ sr: n, ch: [o, s] }, 0.8);
}
function ze(e, t, n, r) {
  let i = c(t),
    a = V(r, n),
    o = new Float32Array(a),
    u = new Float32Array(a);
  for (let t = 0; t < 5; t++) {
    let r = e.next() * s,
      c = 5 + e.next(),
      d = l(e.bi() * 7);
    j(
      o,
      u,
      _(
        a,
        n,
        (e) =>
          i * d * (1 + 0.006 * Math.min(1, e / 0.4) * Math.sin(s * c * e + r)),
        `saw`,
        e.next(),
      ),
      (t / 4) * 1.6 - 0.8,
      0.22,
    );
  }
  for (let e of [o, u])
    (x(e, n, 3300, 0.6),
      w(e, n, 1150, 1.2, 3),
      S(e, n, 90),
      E(e, n, [0, 0, 0.28, 1, r - 0.5, 0.85, r, 0]));
  return k({ sr: n, ch: [o, u] }, 0.8);
}
function Be(e, t, n, r) {
  let i = c(t),
    a = V(r, n),
    o = new Float32Array(a),
    s = new Float32Array(a);
  for (let t = 0; t < 7; t++)
    j(
      o,
      s,
      _(a, n, i * l((t - 3) * 7.5), `saw`, e.next()),
      ((t - 3) / 3) * 0.9,
      0.16,
    );
  for (let e of [o, s])
    (S(e, n, 170),
      x(e, n, 7e3, 0.6),
      E(e, n, [0, 0, 0.004, 1, 0.25, 0.6, r, 0.35]));
  return k({ sr: n, ch: [o, s] }, 0.8);
}
function Ve(e, t, n, r) {
  let i = c(t),
    a = V(r, n),
    o = _(a, n, i, `saw`, e.next());
  return (
    O(o, _(a, n, i * l(8), `saw`, e.next()), 0.8),
    O(o, _(a, n, i * 2, `square`), 0.18),
    x(o, n, (e) => 2200 + 3e3 * Math.exp(-e / 0.2), 1.1),
    E(o, n, [0, 0, 0.004, 1, 0.3, 0.75, r, 0.55]),
    B(k(o, 0.85), n)
  );
}
function He(e, t, n, r) {
  let i = c(t),
    a = V(r, n),
    o = (e) =>
      i *
      l(-85 * Math.exp(-e / 0.035)) *
      (1 +
        (e > 0.16
          ? 0.017 * Math.min(1, (e - 0.16) / 0.2) * Math.sin(s * 5.9 * e)
          : 0)),
    u = _(a, n, o, `pulse`, 0, 0.17);
  (O(
    u,
    _(a, n, (e) => o(e) * 2, `saw`),
    0.2,
  ),
    S(u, n, 420),
    w(u, n, 1250, 2, 9),
    w(u, n, 2950, 2.5, 7),
    x(u, n, 7500));
  let d = p(a, e);
  return (
    C(d, n, 2600, 1.5),
    O(u, d, 0.04),
    A(u, 2.2),
    E(u, n, [0, 0, 0.02, 1, r - 0.1, 0.85, r, 0.6]),
    B(k(u, 0.85), n)
  );
}
