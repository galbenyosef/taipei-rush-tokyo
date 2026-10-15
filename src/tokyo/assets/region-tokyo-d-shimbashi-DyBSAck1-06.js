// tokyo/assets/region-tokyo-d-shimbashi-DyBSAck1 06 — next
// Lines 1607-1954 of readable/tokyo/assets/region-tokyo-d-shimbashi-DyBSAck1.pretty.js (statement-aligned).
function Qe(e) {
  return (t, i, a, o, s) => {
    let c = new n(r(`shim-mkt-fac`, e)),
      l = [
        `#d8d2c4`,
        `#c9c2b2`,
        `#b9b8b0`,
        `#d6cdb8`,
        `#a8a49a`,
        `#cfc8bc`,
        `#e0dccf`,
        `#b0a690`,
        `#9aa0a0`,
        `#a89c8a`,
      ],
      u = l[e % l.length];
    if ((M(t, i, a, o, s, u), e >= 8)) {
      for (let n = 0; n < 28; n++)
        M(t, i + (o * n) / 28, a, o / 56, s, e === 8 ? `#8a9090` : `#968a78`);
      t.fillStyle = `rgba(120,60,30,0.22)`;
      for (let e = 0; e < 9; e++)
        t.fillRect(
          i + c.next() * o,
          a + c.next() * s * 0.4,
          3,
          s * (0.2 + c.next() * 0.4),
        );
    }
    if (e % 3 == 1) {
      t.fillStyle = `rgba(0,0,0,0.07)`;
      for (let e = 0; e < 24; e++) t.fillRect(i, a + (s * e) / 24, o, 1);
      for (let e = 0; e < 20; e++) t.fillRect(i + (o * e) / 20, a, 1, s);
    }
    let d = i + o * (0.12 + c.next() * 0.1),
      f = o * (0.48 + c.next() * 0.14),
      p = a + s * 0.22,
      m = s * 0.5;
    if (
      (M(t, d - 3, p - 3, f + 6, m + 6, `#9aa0a4`),
      M(t, d, p, f, m, e % 2 ? `#c8d0d4` : `#6f7c84`),
      M(t, d + f / 2 - 1.5, p, 3, m, `#9aa0a4`),
      e % 4 == 0)
    )
      for (let e = 0; e < 6; e++)
        M(t, d + (f * e) / 6, p, f / 14, m, `#e8e0cc`);
    let h = i + o * 0.72,
      g = a + s * 0.56;
    (M(t, h, g, o * 0.2, s * 0.28, `#e8e8e4`),
      U(t, h + o * 0.1, g + s * 0.14, o * 0.06, `#9a9c9e`),
      M(t, h + o * 0.18, a, 3, g - a, `#c8c8c4`),
      (t.fillStyle = `rgba(40,36,30,0.12)`));
    for (let e = 0; e < 6; e++)
      t.fillRect(d + c.next() * f, p + m + 3, 2, s * (0.1 + c.next() * 0.18));
    e % 5 == 2 &&
      (M(t, i + o * 0.06, a + s * 0.04, o * 0.4, s * 0.13, `#f4f0e4`),
      H(
        t,
        V(`shim.mkt.pro`),
        i + o * 0.26,
        a + s * 0.105,
        o * 0.36,
        s * 0.1,
        `#7a3a2a`,
        `800`,
      ));
  };
}
function $e(e) {
  return (t, n, r, i, a) => {
    (M(t, n, r, i, a, [`#9a9d9f`, `#8a8e90`, `#a8a49a`][e % 3]),
      (t.fillStyle = `rgba(0,0,0,0.12)`));
    for (let e = 0; e < 24; e++) t.fillRect(n, r + (a * e) / 24, i, a / 64);
    e === 1
      ? (M(t, n + i * 0.36, r + a * 0.36, i * 0.28, a * 0.2, `#ffffff`),
        H(
          t,
          V(`shim.mkt.kyushi`),
          n + i * 0.5,
          r + a * 0.46,
          i * 0.24,
          a * 0.12,
          `#c8161c`,
          `800`,
        ))
      : e === 2 &&
        (M(t, n + i * 0.4, r + a * 0.38, i * 0.2, a * 0.16, `#ffffff`),
        H(
          t,
          V(`shim.mkt.kyugyo`),
          n + i * 0.5,
          r + a * 0.46,
          i * 0.18,
          a * 0.1,
          `#1a1a1a`,
          `800`,
        ));
  };
}
function et(e, t, n, r, i) {
  (ue(e, t, n, r, i, `#ffffff`, 0.62),
    (e.globalAlpha = 1),
    M(e, t, n + i * 0.84, r, i * 0.16, `#c8161c`),
    H(
      e,
      V(`shim.mkt.name`),
      t + r / 2,
      n + i * 0.42,
      r * 0.9,
      i * 0.6,
      `#c8161c`,
      `900`,
    ),
    H(
      e,
      V(`shim.mkt.latin`),
      t + r / 2,
      n + i * 0.92,
      r * 0.6,
      i * 0.12,
      `#ffffff`,
      `800`,
    ));
}
function tt(e, t, n, r, i) {
  (M(e, t, n, r, i, `#0d3c8c`),
    M(e, t, n + i * 0.88, r, i * 0.12, `#c8161c`),
    C(
      e,
      V(`shim.mkt.name`),
      t + r / 2,
      n + i * 0.06,
      n + i * 0.84,
      r * 0.6,
      `#ffffff`,
      S(),
      `900`,
    ));
}
function nt(e, t, n, r, i) {
  (M(e, t, n, r, i, `#ffffff`),
    M(e, t, n, r, i * 0.2, `#e8780a`),
    H(
      e,
      V(`shim.mkt.name`),
      t + r / 2,
      n + i * 0.1,
      r * 0.84,
      i * 0.13,
      `#ffffff`,
      `900`,
    ),
    ye(e, t + r / 2, n + i * 0.48, r * 0.22, `#c8161c`, r * 0.05),
    M(e, t + r * 0.42, n + i * 0.4, r * 0.16, i * 0.16, `#3a3a3a`),
    (e.strokeStyle = `#c8161c`),
    (e.lineWidth = r * 0.05),
    e.beginPath(),
    e.moveTo(t + r * 0.35, n + i * 0.62),
    e.lineTo(t + r * 0.65, n + i * 0.34),
    e.stroke(),
    H(
      e,
      V(`shim.mkt.manners`),
      t + r / 2,
      n + i * 0.84,
      r * 0.92,
      i * 0.11,
      `#1a1a1a`,
      `800`,
    ));
}
function rt(e, t, n, r, i) {
  (M(e, t, n, r, i, `#ffffff`),
    M(e, t, n, r, i * 0.22, `#0d3c8c`),
    H(
      e,
      V(`shim.mkt.calendar`),
      t + r / 2,
      n + i * 0.11,
      r * 0.9,
      i * 0.14,
      `#ffffff`,
      `800`,
    ));
  for (let a = 0; a < 5; a++)
    for (let o = 0; o < 7; o++) {
      let s = t + r * (0.08 + o * 0.13),
        c = n + i * (0.32 + a * 0.14),
        l = o === 0 || (o === 3 && (a === 1 || a === 3));
      (l && U(e, s + r * 0.04, c + i * 0.05, i * 0.05, `#c8161c`),
        H(
          e,
          String(a * 7 + o + 1 > 31 ? `` : a * 7 + o + 1),
          s + r * 0.04,
          c + i * 0.05,
          r * 0.1,
          i * 0.08,
          l ? `#ffffff` : `#1a1a1a`,
          `700`,
        ));
    }
}
function it(e, t, n, r, i) {
  (ue(e, t, n, r, i, `#c8161c`, 0.66),
    (e.globalAlpha = 1),
    M(e, t, n + i * 0.78, r, i * 0.22, `#ffcc00`),
    H(
      e,
      V(`shim.mkt.sushi.short`),
      t + r * 0.5,
      n + i * 0.4,
      r * 0.8,
      i * 0.58,
      `#ffffff`,
      `900`,
    ),
    H(
      e,
      V(`shim.mkt.sushi.24h`),
      t + r * 0.5,
      n + i * 0.89,
      r * 0.6,
      i * 0.16,
      `#c8161c`,
      `900`,
    ));
}
function at(e, t, n, r, i) {
  (ue(e, t, n, r, i, `#c8161c`, 0.62), (e.globalAlpha = 1));
  let a = t + r / 2;
  ((e.strokeStyle = `#ffffff`),
    (e.lineCap = `round`),
    (e.lineWidth = r * 0.11),
    e.beginPath(),
    e.moveTo(a - r * 0.12, n + i * 0.42),
    e.lineTo(a - r * 0.42, n + i * 0.24),
    e.moveTo(a + r * 0.12, n + i * 0.42),
    e.lineTo(a + r * 0.42, n + i * 0.24),
    e.stroke(),
    U(e, a - r * 0.43, n + i * 0.23, r * 0.06, `#f2c8a0`),
    U(e, a + r * 0.43, n + i * 0.23, r * 0.06, `#f2c8a0`),
    M(e, a - r * 0.17, n + i * 0.38, r * 0.34, i * 0.46, `#ffffff`),
    M(e, a - r * 0.17, n + i * 0.84, r * 0.34, i * 0.12, `#1a1a1a`),
    U(e, a, n + i * 0.3, r * 0.13, `#f2c8a0`),
    M(e, a - r * 0.14, n + i * 0.2, r * 0.28, i * 0.04, `#ffffff`),
    (e.strokeStyle = `#5a2a1a`),
    (e.lineWidth = r * 0.02),
    e.beginPath(),
    e.arc(a, n + i * 0.31, r * 0.06, 0.2, Math.PI - 0.2),
    e.stroke(),
    U(e, a - r * 0.045, n + i * 0.28, r * 0.012, `#1a1a1a`),
    U(e, a + r * 0.045, n + i * 0.28, r * 0.012, `#1a1a1a`));
}
function ot(e, t, n, r, i) {
  (M(e, t, n, r, i, `#f4ead4`),
    M(e, t, n, r, i * 0.12, `#5a2a0a`),
    H(
      e,
      V(`shim.mkt.horumon`),
      t + r * 0.42,
      n + i * 0.56,
      r * 0.78,
      i * 0.6,
      `#5a2a0a`,
      `900`,
    ),
    M(e, t + r * 0.84, n + i * 0.18, r * 0.13, i * 0.76, `#c8161c`),
    C(
      e,
      V(`shim.mkt.horumon.niko`),
      t + r * 0.905,
      n + i * 0.22,
      n + i * 0.9,
      r * 0.08,
      `#ffffff`,
      S(),
      `900`,
    ));
}
function st(e, t, n, r, i) {
  (M(e, t, n, r, i, `#2a2c30`),
    H(
      e,
      V(`shim.uogashi.name`),
      t + r * 0.4,
      n + i / 2,
      r * 0.6,
      i * 0.66,
      `#f2f0ea`,
      `700`,
      D(),
    ),
    H(
      e,
      V(`shim.uogashi.wing`),
      t + r * 0.84,
      n + i / 2,
      r * 0.24,
      i * 0.36,
      `#c8c4b8`,
      `600`,
    ));
}
function ct(e, t, n, r, i) {
  (M(e, t, n, r, i, `#8a8e90`), M(e, t, n, r, i, `#3a4248`));
  for (let a = 0; a < 24; a++) M(e, t + (r * a) / 24, n, r / 48, i, `#c8ccce`);
  M(e, t, n + i * 0.48, r, i * 0.04, `#d8dcde`);
}
function lt(e, t, n, r, i) {
  (M(e, t, n, r, i, `#ffffff`),
    M(e, t, n, r, i * 0.3, `#2a2c30`),
    H(
      e,
      V(`shim.uogashi.shokudo`),
      t + r / 2,
      n + i * 0.15,
      r * 0.86,
      i * 0.2,
      `#ffffff`,
      `800`,
    ),
    H(
      e,
      V(`shim.uogashi.hours`),
      t + r / 2,
      n + i * 0.65,
      r * 0.92,
      i * 0.2,
      `#1a1a1a`,
      `700`,
    ));
}
function ut(e) {
  return (t, n, r, i, a) => {
    (M(t, n, r, i, a, `#7a6a4a`),
      M(t, n + 3, r + 3, i - 6, a - 6, `#4a3e2a`),
      H(
        t,
        V(e),
        n + i / 2,
        r + a / 2,
        i * 0.86,
        a * 0.66,
        `#e8d8a8`,
        `700`,
        D(),
      ));
  };
}
