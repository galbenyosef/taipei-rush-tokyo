// tokyo/assets/region-tokyo-audioWorker-GAP5c6S0 04 — math
// Lines 1170-1418 of readable/tokyo/assets/region-tokyo-audioWorker-GAP5c6S0.pretty.js (statement-aligned).
function P(e, t, n, r) {
  let i = f(Math.round(n * e), e, t, r),
    a = Math.round(0.002 * e);
  for (let e = 0; e < a && e < i.length; e++) i[e] *= e / a;
  return i;
}
const F = (e, t, n, r) =>
    P(e, t, n, [
      [1, 1, r],
      [4, 0.2, r * 0.18],
      [10.1, 0.04, r * 0.05],
    ]),
  De = (e, t, n, r) =>
    P(e, t, n, [
      [1, 1, r],
      [2.71, 0.32, r * 0.3],
      [5.06, 0.12, r * 0.12],
      [8.9, 0.05, r * 0.05],
    ]),
  Oe = (e, t, n, r) =>
    P(e, t, n, [
      [1, 1, r * 0.5],
      [3.93, 0.26, r * 0.12],
      [9.2, 0.05, r * 0.04],
    ]),
  ke = (e, t, n, r) =>
    P(e, t, n, [
      [1, 1, r],
      [2, 0.22, r * 0.4],
      [3, 0.08, r * 0.2],
      [4.1, 0.05, r * 0.1],
    ]);
function Ae(e, t, n, r) {
  let i = Math.round(n * e),
    a = p(i, e, t, 1, (e) => 1.6 * Math.exp(-e / 0.25) + 0.25);
  return (
    S(
      a,
      p(i, e, t, 14, (e) => 0.9 * Math.exp(-e / 0.02)),
      0.1,
    ),
    x(a, e, 0.002, r)
  );
}
function I(e, t, n, r, i, a, o, c) {
  let l = s(Math.round(t * e), n);
  return (
    r === `lp` ? h(l, e, i, a) : r === `hp` ? g(l, e, i, a) : _(l, e, i, a),
    x(l, e, o, c)
  );
}
function je(e, t, n, r) {
  let i = new Float32Array(Math.round(t * e));
  return (S(i, I(e, 0.004, n, `hp`, 3e3, 0.7, 2e-4, 8e-4), 1), y(i, e, r));
}
function L(e, t, n, r, i, a) {
  return x(
    d(Math.round(t * e), e, (e) => r + (n - r) * Math.exp(-e / i), `sine`),
    e,
    8e-4,
    a,
  );
}
function Me(e, t, n, r, i = 1500) {
  let a = Math.round(n * e),
    o = new Float32Array(a);
  for (let n of t)
    for (let i = 0; i < 2; i++)
      S(
        o,
        d(a, e, n * (1 + (i ? 0.004 : -0.004)), `saw`, r.next()),
        0.5 / t.length,
      );
  return (
    h(o, e, i, 0.6),
    b(o, e, [0, 0, 0.12, 1, Math.max(0.2, n - 0.25), 0.8, n, 0])
  );
}
function Ne(e, t, n, r = 1) {
  let i = e.length;
  for (let a = 0; a < t.length; a++) e[(n + a) % i] += t[a] * r;
}
function Pe(e, t, n, r, i) {
  let a = Math.min(1.4, 0.35 + r * i * 0.6),
    o = Math.min(2.6, r * i + 1.2);
  switch (e.voice) {
    case `glock`:
      return De(t, n, o, a * 0.8);
    case `marimba`:
      return Oe(t, n, o, a);
    case `celesta`:
      return ke(t, n, o, a);
    case `epiano`:
      return Ae(t, n, o, a);
    default:
      return F(t, n, o, a);
  }
}
function Fe(e, t, r) {
  let i = 24e3,
    s = 60 / e.bpm,
    c = (e.beats - r) * s + 1.4,
    l = a(c, i),
    u = (e) => Math.round((e - r) * s * i);
  for (let [t, a, o] of e.lead) {
    if (t < r) continue;
    let c = n(e.tonic + a);
    (S(l, Pe(e, i, c, o, s), 0.55, u(t)),
      S(l, Pe(e, i, c / 2, o, s), 0.12, u(t)));
  }
  for (let [a, o, c] of e.chords) {
    if (a + c <= r) continue;
    let d = Math.max(a, r);
    S(
      l,
      Me(
        i,
        o.map((t) => n(e.tonic - 12 + t)),
        (a + c - d) * s + 0.2,
        t,
      ),
      0.11,
      u(d),
    );
  }
  for (let n = Math.ceil(r); n < e.beats; n++)
    S(l, I(i, 0.08, t, `hp`, 6500, 0.7, 0.004, 0.025), 0.05, u(n + 0.5));
  b(l, i, [0, 1, c - 1, 1, c - 0.2, 0]);
  let [d] = E(l, i, {
    size: 0.45,
    damp: 0.5,
    wet: 0.16,
    dry: 1,
    tail: 0.6,
    predelay: 0.012,
  });
  return o(C(d, 0.8), i);
}
function Ie(e) {
  let t = 11025,
    r = 60 / Se.bpm,
    i = a(Se.beats * r + 5, t);
  for (let [e, a, o] of Se.notes) {
    let s = n(Se.tonic + a),
      c = P(t, s, Math.min(3, o * r + 1.4), [
        [1, 1, 0.9 + o * 0.5],
        [2, 0.35, 0.5],
        [3.01, 0.18, 0.25],
        [4.2, 0.08, 0.12],
        [5.43, 0.05, 0.08],
      ]),
      l = d(c.length, t, s, `tri`);
    (b(l, t, [0, 0, 0.04, 1, o * r * 0.9, 0.8, o * r + 0.25, 0]),
      S(c, l, 0.22),
      S(i, c, 0.5, Math.round(e * r * t)));
  }
  (g(i, t, 320, 0.8), h(i, t, 3400, 0.9), v(i, t, 1400, 1.2, 4), w(i, 1.6));
  let s = new Float32Array(i);
  for (let [e, n, r] of [
    [0.33, 0.55, 2400],
    [0.9, 0.38, 1700],
    [1.55, 0.24, 1200],
  ]) {
    let a = new Float32Array(i);
    (h(a, t, r, 0.7), S(s, a, n, Math.round(e * t)));
  }
  h(s, t, 2600, 0.7);
  let [l] = E(s, t, {
      size: 0.85,
      damp: 0.55,
      wet: 0.45,
      dry: 0.75,
      tail: 3.2,
      predelay: 0.05,
    }),
    u = c(l.length, e);
  return (
    _(u, t, 500, 0.5),
    S(l, u, 0.004),
    b(l, t, [0, 0, 0.3, 1, l.length / t - 1.5, 1, l.length / t, 0]),
    o(C(l, 0.8), t)
  );
}
function Le(e) {
  let t = 11025,
    r = 60 / j.bpm,
    i = a(j.beats * r + 3, t),
    s = (e) => Math.round(e * r * t);
  for (let [e, a, o] of j.notes) {
    let c = n(j.tonic + a),
      l = Math.min(3.2, o * r + 1.3),
      u = 0.45 + o * r * 0.45;
    (S(i, ke(t, c, l, u), 0.5, s(e)), S(i, ke(t, c / 2, l, u), 0.14, s(e)));
  }
  for (let [a, o, c] of j.chords)
    S(
      i,
      Me(
        t,
        o.map((e) => n(j.tonic - 12 + e)),
        c * r + 0.25,
        e,
        1100,
      ),
      0.13,
      s(a),
    );
  (g(i, t, 250, 0.7), h(i, t, 4e3, 0.7), v(i, t, 1800, 1, 3));
  let [c] = E(i, t, {
    size: 0.75,
    damp: 0.5,
    wet: 0.35,
    dry: 0.8,
    tail: 2.2,
    predelay: 0.02,
  });
  return (
    b(c, t, [0, 0, 0.05, 1, c.length / t - 1.2, 1, c.length / t, 0]),
    o(C(c, 0.8), t)
  );
}
function Re(e, n, r, i) {
  let a = new Float32Array(e),
    o = i.map(() => r.next() * t);
  for (let r = 0; r < e; r++) {
    let e = 0;
    for (let a = 0; a < i.length; a++) e += Math.sin((t * i[a] * r) / n + o[a]);
    a[r] = 0.5 + (0.5 * e) / i.length;
  }
  return a;
}
function R(e, t, n, r, i = 0.003) {
  return b(
    d(Math.round(t * e), e, (e) => n + (r - n) * (e / t), `sine`),
    e,
    [0, 0, i, 1, t * 0.6, 0.7, t, 0],
  );
}
function ze(e, t, n, r, i, a) {
  let o = e.length;
  for (let s of [e, t]) {
    let e = c(o, r);
    (g(e, n, 1800), h(e, n, 6500));
    let t = Re(o, n, r, [0.09, 0.21]),
      u = l(o, r);
    h(u, n, 190);
    for (let n = 0; n < o; n++) s[n] += e[n] * i * t[n] + u[n] * a;
  }
}
