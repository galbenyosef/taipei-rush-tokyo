// tokyo/assets/region-tokyo-d-roppongi-Cv6Rgbh_ 02 — fillstyle
// Lines 338-638 of readable/tokyo/assets/region-tokyo-d-roppongi-Cv6Rgbh_.pretty.js (statement-aligned).
function de(e, t, n) {
  let r = (e) => [
      parseInt(e.slice(1, 3), 16),
      parseInt(e.slice(3, 5), 16),
      parseInt(e.slice(5, 7), 16),
    ],
    i = r(e),
    a = r(t);
  return (
    `#` +
    i
      .map((e, t) =>
        Math.round(e + (a[t] - e) * n)
          .toString(16)
          .padStart(2, `0`),
      )
      .join(``)
  );
}
var fe = [
  { bg: `#ffffff`, fg: `#c8102e` },
  { bg: `#ffffff`, fg: `#1d2088` },
  { bg: `#ffffff`, fg: `#111111` },
  { bg: `#101014`, fg: `#ff4fa3`, neon: !0 },
  { bg: `#101014`, fg: `#3fe0ff`, neon: !0 },
  { bg: `#140c1c`, fg: `#c77dff`, neon: !0 },
  { bg: `#101014`, fg: `#ffd84a`, neon: !0 },
  { bg: `#e60073`, fg: `#ffffff` },
  { bg: `#5b1a8a`, fg: `#ffffff` },
  { bg: `#0b2a5a`, fg: `#ffe9a8` },
  { bg: `#ffe100`, fg: `#111111` },
  { bg: `#101014`, fg: `#ffffff`, neon: !0 },
];
function pe(e, t, n, r, i, a) {
  (a.neon
    ? (te(e, t, n, r, i, a.bg, 0.5),
      (e.globalAlpha = 1),
      (e.strokeStyle = a.fg),
      (e.lineWidth = Math.max(1.5, i * 0.05)),
      e.save(),
      (e.shadowColor = a.fg),
      (e.shadowBlur = i * 0.15),
      e.strokeRect(t + i * 0.08, n + i * 0.08, r - i * 0.16, i - i * 0.16),
      e.restore(),
      le(e, P(a.key), t + r / 2, n + i / 2, r * 0.82, i * 0.5, a.fg))
    : (D(e, t, n, r, i, a.bg, 0.6),
      I(e, P(a.key), t + r / 2, n + i / 2, r * 0.84, i * 0.56, a.fg, `900`)),
    a.floor &&
      (O(e, t + r * 0.03, n + i * 0.06, i * 0.42, i * 0.3, (a.neon, a.fg)),
      I(
        e,
        `${a.floor}F`,
        t + r * 0.03 + i * 0.21,
        n + i * 0.21,
        i * 0.38,
        i * 0.24,
        a.neon ? `#101014` : a.bg,
        `900`,
      )));
}
function me(e, t) {
  return (n, r, i, a, o) => {
    O(n, r, i, a, o, t);
    let s = o / e.length;
    e.forEach((e, t) =>
      pe(n, r + a * 0.05, i + t * s + s * 0.06, a * 0.9, s * 0.88, e),
    );
  };
}
function he(e, t) {
  return (n, r, i, a, o) => {
    O(n, r, i, a, o, t);
    let s = o / e.length;
    e.forEach((e, t) => {
      let o = a / e.length;
      e.forEach((e, a) =>
        pe(
          n,
          r + a * o + o * 0.04,
          i + t * s + s * 0.08,
          o * 0.92,
          s * 0.84,
          e,
        ),
      );
    });
  };
}
function ge(e) {
  return (t, n, r, i, a) => {
    (D(t, n, r, i, a, e.bg, 0.6),
      e.acc &&
        (O(t, n, r, i, a * 0.014, e.acc),
        O(t, n, r + a - a * 0.014, i, a * 0.014, e.acc),
        te(t, n + i * 0.06, r, i * 0.05, a, e.acc, 0.7),
        te(t, n + i * 0.89, r, i * 0.05, a, e.acc, 0.7)));
    let o = r + a * 0.04;
    (e.top &&
      (O(t, n + i * 0.1, o, i * 0.8, a * 0.07, e.fg),
      I(
        t,
        P(e.top),
        n + i / 2,
        o + a * 0.035,
        i * 0.74,
        a * 0.055,
        e.bg,
        `900`,
      ),
      (o += a * 0.09)),
      _(t, P(e.main), n + i / 2, o, r + a * 0.96, i * 0.78, e.fg, g(), `900`));
  };
}
function _e(e) {
  return (t, n, r, i, a) => {
    (e.neon ? te(t, n, r, i, a, e.bg, 0.5) : D(t, n, r, i, a, e.bg, 0.58),
      e.acc &&
        (O(t, n, r, i, a * 0.08, e.acc),
        O(t, n, r + a * 0.92, i, a * 0.08, e.acc)));
    let o = n + a * 0.25,
      s = /\{n\}/.test(P(e.main));
    e.floor &&
      !s &&
      (O(t, o, r + a * 0.14, a * 1.1, a * 0.72, e.fg),
      I(t, `${e.floor}F`, o + a * 0.55, r + a / 2, a * 0.95, a * 0.6, e.bg),
      (o += a * 1.35));
    let c = n + i - a * 0.25,
      l = s ? se(e.main, { n: e.floor ?? 2 }) : P(e.main),
      u = e.serif ? y() : g();
    if (e.neon) {
      le(t, l, (o + c) / 2, r + a / 2, c - o, a * 0.62, e.fg, `800`, u);
      return;
    }
    e.sub
      ? (I(t, l, (o + c) / 2, r + a * 0.38, c - o, a * 0.5, e.fg, `900`, u),
        I(t, P(e.sub), (o + c) / 2, r + a * 0.78, c - o, a * 0.24, e.fg, `700`))
      : I(t, l, (o + c) / 2, r + a / 2, c - o, a * 0.66, e.fg, `900`, u);
  };
}
function ve(e) {
  return (t, n, r, i, a) => {
    (D(t, n, r, i, a, e.bg, 0.6),
      e.acc &&
        ((t.globalAlpha = 1),
        (t.fillStyle = e.acc),
        t.beginPath(),
        t.moveTo(n, r + a),
        t.lineTo(n + i * 0.3, r + a),
        t.lineTo(n + i * 0.18, r),
        t.lineTo(n, r),
        t.fill()),
      ue(
        t,
        P(e.main),
        n + i * 0.56,
        r + a * (e.sub ? 0.4 : 0.5),
        i * 0.8,
        a * (e.sub ? 0.56 : 0.72),
        e.fg,
        e.bg,
      ),
      e.sub &&
        I(
          t,
          P(e.sub),
          n + i * 0.56,
          r + a * 0.82,
          i * 0.8,
          a * 0.2,
          e.fg,
          `700`,
        ));
  };
}
function ye(e, t) {
  return (i, a, o, s, c) => {
    let l = new n(r(`rop-led`, t)),
      u = [
        [`#120a3a`, `#c2185b`],
        [`#03203a`, `#00a6c8`],
        [`#2a0a2a`, `#ff7a00`],
        [`#0a1a10`, `#2ec27e`],
      ],
      [d, f] = u[t % u.length],
      p = i.createLinearGradient(a, o, a + s, o + c);
    if (
      (p.addColorStop(0, d),
      p.addColorStop(1, f),
      (i.globalAlpha = 1),
      (i.fillStyle = p),
      i.fillRect(a, o, s, c),
      t % 2 == 0)
    ) {
      i.fillStyle = `rgba(0,0,0,0.55)`;
      let e = a;
      for (; e < a + s;) {
        let t = s * (0.04 + l.next() * 0.06),
          n = c * (0.15 + l.next() * 0.4);
        (i.fillRect(e, o + c - n, t, n), (e += t + s * 0.005));
      }
      ((i.fillStyle = `#ff6a2a`),
        i.beginPath(),
        i.moveTo(a + s * 0.7, o + c),
        i.lineTo(a + s * 0.74, o + c * 0.25),
        i.lineTo(a + s * 0.78, o + c),
        i.fill());
    } else {
      (O(i, a + s * 0.72, o + c * 0.22, s * 0.07, c * 0.66, `#d8a040`),
        O(i, a + s * 0.74, o + c * 0.1, s * 0.03, c * 0.14, `#d8a040`),
        O(
          i,
          a + s * 0.83,
          o + c * 0.5,
          s * 0.08,
          c * 0.38,
          `rgba(255,255,255,0.65)`,
        ));
      for (let e = 0; e < 18; e++)
        ((i.fillStyle = `rgba(255,255,255,0.8)`),
          i.fillRect(a + l.next() * s, o + l.next() * c, 2, 2));
    }
    ue(
      i,
      P(e),
      a + s * 0.38,
      o + c * 0.42,
      s * 0.68,
      c * 0.28,
      `#ffffff`,
      `#000000`,
    );
  };
}
function be(e, t, n, r, i) {
  D(e, t, n, r, i, `#ffe100`, 0.62);
  let a = t + r / 2,
    o = n + i * 0.42,
    s = Math.min(r, i) * 0.3;
  ((e.globalAlpha = 1),
    (e.fillStyle = `#1d4fb8`),
    e.beginPath(),
    e.ellipse(a, o + s * 0.25, s * 0.95, s * 1.15, 0, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#ffffff`),
    e.beginPath(),
    e.ellipse(a, o + s * 0.45, s * 0.62, s * 0.82, 0, 0, Math.PI * 2),
    e.fill());
  for (let t of [-1, 1])
    ((e.fillStyle = `#ffffff`),
      e.beginPath(),
      e.ellipse(
        a + t * s * 0.32,
        o - s * 0.35,
        s * 0.22,
        s * 0.26,
        0,
        0,
        Math.PI * 2,
      ),
      e.fill(),
      (e.fillStyle = `#101010`),
      e.beginPath(),
      e.arc(a + t * s * 0.28, o - s * 0.32, s * 0.1, 0, Math.PI * 2),
      e.fill());
  ((e.fillStyle = `#ffb000`),
    e.beginPath(),
    e.moveTo(a - s * 0.2, o - s * 0.08),
    e.lineTo(a + s * 0.2, o - s * 0.08),
    e.lineTo(a, o + s * 0.16),
    e.fill(),
    (e.fillStyle = `#e60012`),
    e.beginPath(),
    e.ellipse(
      a + s * 0.1,
      o - s * 0.92,
      s * 0.78,
      s * 0.3,
      -0.15,
      0,
      Math.PI * 2,
    ),
    e.fill(),
    (e.fillStyle = `#ffffff`),
    e.beginPath(),
    e.arc(a + s * 0.2, o - s * 1.18, s * 0.14, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#1d4fb8`),
    e.beginPath(),
    e.ellipse(a + s * 1, o - s * 0.05, s * 0.2, s * 0.55, -0.7, 0, Math.PI * 2),
    e.fill(),
    I(
      e,
      P(`roppongi.donco.mascot`),
      a,
      n + i * 0.9,
      r * 0.8,
      i * 0.13,
      `#e60012`,
      `900`,
    ));
}
