// tokyo__assets__worker-DuEI-Qg4 07 — dur
// Lines 3377-3704 of readable/tokyo__assets__worker-DuEI-Qg4.pretty.js (statement-aligned).
function Te(e, t) {
  let n = 44100,
    r = 70560;
  return { sr: n, ch: [C(ie(e === `white` ? s(r, t) : c(r, t), n, 0.1), 0.8)] };
}
const Ee = {
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
function De(e, t, r, i) {
  let a = n(t),
    o = V(i, r),
    s = 32e-5 * (t > 60 ? 1 + (t - 60) * 0.06 : 1),
    c = 3.2 * (t < 48 ? 1.35 : t > 72 ? 0.55 : 1),
    l = t < 48 ? 0.09 : t > 72 ? 0.2 : 0.13,
    u = [];
  for (let e = 1; e <= 22; e++) {
    let t = e * Math.sqrt(1 + s * e * e);
    if (a * t > 11e3) break;
    let n = e ** -1.05 * Math.exp(-(e - 1) * l),
      r = c / (1 + 0.28 * (e - 1));
    u.push([t, n * 0.6, r * 0.22], [t, n * 0.4, r]);
  }
  let d = f(o, r, a, u, 0.7, e);
  (S(d, f(o, r, a, u, 0.7, e), 0.7),
    S(d, P(r, 0.05, e, `lp`, 2200, 0.7, 5e-4, 0.005), 0.08));
  let p = V(0.002, r);
  for (let e = 0; e < p; e++) d[e] *= e / p;
  return (t > 76 && h(d, r, 9e3), B(C(d, 0.9), r));
}
function Oe(e, t, r, i) {
  let a = n(t),
    o = V(i, r),
    s = p(o, r, a, 1, (e) => 2 * Math.exp(-e / 0.22) + 0.3);
  return (
    S(
      s,
      p(o, r, a * 1, 13.9, (e) => 1.2 * Math.exp(-e / 0.015)),
      0.12,
    ),
    S(s, d(o, r, a * 0.5, `sine`), 0.12),
    x(s, r, 0.002, t < 55 ? 1.6 : t > 75 ? 0.8 : 1.2),
    w(s, 1.4),
    B(C(s, 0.85), r)
  );
}
function ke(e, t, r, i) {
  let a = n(t),
    o = ce(V(i, r), r, a, e, { decay: 0.9975, bright: 0.45, pick: 0.2 });
  return (
    v(o, r, 105, 2, 4),
    v(o, r, 230, 2, 3),
    h(o, r, 5200),
    x(o, r, 0.001, 1.2),
    B(C(o, 0.85), r)
  );
}
function Ae(e, t, r, i) {
  let a = n(t),
    o = V(i, r),
    s = d(o, r, a, `sine`),
    c = d(o, r, a, `saw`, 0.25);
  return (
    h(c, r, (e) => 350 + 700 * Math.exp(-e / 0.08), 0.9),
    S(s, c, 0.55),
    S(s, P(r, 0.03, e, `bp`, 900, 1, 5e-4, 0.004), 0.12),
    x(s, r, 0.004, 1),
    w(s, 1.6),
    B(C(s, 0.9), r)
  );
}
function je(e, t, i, a) {
  let o = n(t),
    s = V(a, i),
    c = d(s, i, o * r(-6), `saw`, e.next());
  return (
    S(c, d(s, i, o * r(6), `saw`, e.next()), 0.9),
    S(c, d(s, i, o * 0.5, `square`), 0.5),
    h(c, i, (e) => 380 + 900 * Math.exp(-e / 0.12), 1.2),
    w(c, 2),
    b(c, i, [0, 0, 0.004, 1, 0.15, 0.85, a, 0.6]),
    B(C(c, 0.9), i)
  );
}
function Me(e, t, i, a) {
  let o = n(t),
    s = V(a, i),
    c = new Float32Array(s),
    l = new Float32Array(s);
  for (let t = 0; t < 6; t++)
    T(
      c,
      l,
      d(s, i, o * r((t - 2.5) * 5 + e.bi() * 2), `saw`, e.next()),
      t % 2 ? 0.7 : -0.7,
      0.2,
    );
  T(c, l, d(s, i, o * 0.5, `sine`), 0, 0.15);
  for (let e of [c, l])
    (h(e, i, (e) => 900 + 700 * Math.min(1, e / 0.8), 0.5),
      b(e, i, [0, 0, 0.4, 1, a - 0.5, 0.8, a, 0]));
  return C({ sr: i, ch: [c, l] }, 0.8);
}
function Ne(e, i, a, o) {
  let s = n(i),
    c = V(o, a),
    l = new Float32Array(c),
    u = new Float32Array(c);
  for (let n = 0; n < 5; n++) {
    let i = e.next() * t,
      o = 5 + e.next(),
      f = r(e.bi() * 7);
    T(
      l,
      u,
      d(
        c,
        a,
        (e) =>
          s * f * (1 + 0.006 * Math.min(1, e / 0.4) * Math.sin(t * o * e + i)),
        `saw`,
        e.next(),
      ),
      (n / 4) * 1.6 - 0.8,
      0.22,
    );
  }
  for (let e of [l, u])
    (h(e, a, 3300, 0.6),
      v(e, a, 1150, 1.2, 3),
      g(e, a, 90),
      b(e, a, [0, 0, 0.28, 1, o - 0.5, 0.85, o, 0]));
  return C({ sr: a, ch: [l, u] }, 0.8);
}
function Pe(e, t, i, a) {
  let o = n(t),
    s = V(a, i),
    c = new Float32Array(s),
    l = new Float32Array(s);
  for (let t = 0; t < 7; t++)
    T(
      c,
      l,
      d(s, i, o * r((t - 3) * 7.5), `saw`, e.next()),
      ((t - 3) / 3) * 0.9,
      0.16,
    );
  for (let e of [c, l])
    (g(e, i, 170),
      h(e, i, 7e3, 0.6),
      b(e, i, [0, 0, 0.004, 1, 0.25, 0.6, a, 0.35]));
  return C({ sr: i, ch: [c, l] }, 0.8);
}
function Fe(e, t, i, a) {
  let o = n(t),
    s = V(a, i),
    c = d(s, i, o, `saw`, e.next());
  return (
    S(c, d(s, i, o * r(8), `saw`, e.next()), 0.8),
    S(c, d(s, i, o * 2, `square`), 0.18),
    h(c, i, (e) => 2200 + 3e3 * Math.exp(-e / 0.2), 1.1),
    b(c, i, [0, 0, 0.004, 1, 0.3, 0.75, a, 0.55]),
    B(C(c, 0.85), i)
  );
}
function Ie(e, i, a, o) {
  let c = n(i),
    l = V(o, a),
    u = (e) =>
      c *
      r(-85 * Math.exp(-e / 0.035)) *
      (1 +
        (e > 0.16
          ? 0.017 * Math.min(1, (e - 0.16) / 0.2) * Math.sin(t * 5.9 * e)
          : 0)),
    f = d(l, a, u, `pulse`, 0, 0.17);
  (S(
    f,
    d(l, a, (e) => u(e) * 2, `saw`),
    0.2,
  ),
    g(f, a, 420),
    v(f, a, 1250, 2, 9),
    v(f, a, 2950, 2.5, 7),
    h(f, a, 7500));
  let p = s(l, e);
  return (
    _(p, a, 2600, 1.5),
    S(f, p, 0.04),
    w(f, 2.2),
    b(f, a, [0, 0, 0.02, 1, o - 0.1, 0.85, o, 0.6]),
    B(C(f, 0.85), a)
  );
}
