// tokyo__assets__region-tokyo-d-shimbashi-CU0USnvn 07 — need
// Lines 1955-2267 of readable/tokyo__assets__region-tokyo-d-shimbashi-CU0USnvn.pretty.js (statement-aligned).
function ut(e) {
  return (t, n, r, i, a) => {
    let [o, s] = e.board,
      c = o === `#ffffff` || o.startsWith(`#f`) ? e.awn[0] : o;
    (N(t, n, r, i, a, c),
      N(t, n, r, i * 0.12, a, `#ffffff`),
      j(
        t,
        H(e.cat),
        n + i * 0.56,
        r + a * 0.06,
        r + a * 0.94,
        i * 0.7,
        c === s || s === o ? `#ffffff` : o === c ? s : `#ffffff`,
        _(),
        `900`,
      ));
  };
}
function dt(e, t, n, r, i) {
  (N(e, t, n, r, i, `#ffffff`),
    N(e, t, n, r, i * 0.16, `#1d5a2a`),
    N(e, t, n + i * 0.84, r, i * 0.16, `#1d5a2a`),
    U(
      e,
      H(`shim.kosho.name`),
      t + r * 0.4,
      n + i * 0.5,
      r * 0.62,
      i * 0.5,
      `#1d5a2a`,
      `900`,
      v(),
    ),
    U(
      e,
      H(`shim.kosho.sub`),
      t + r * 0.84,
      n + i * 0.5,
      r * 0.28,
      i * 0.26,
      `#3a3a3a`,
      `700`,
    ));
}
function ft(e, t, r, a, o) {
  N(e, t, r, a, o, `#8a6a44`);
  let s = new n(i(`shim-books`, 1));
  for (let n = 0; n < 2; n++)
    for (let i = 0; i < 40; i++) {
      let c = [
        `#e8dcc0`,
        `#7a2a1a`,
        `#2a3a5a`,
        `#c8b080`,
        `#3a5a3a`,
        `#f0ece0`,
        `#5a4030`,
      ][Math.floor(s.next() * 7)];
      N(
        e,
        t + (i / 40) * a + 1,
        r + o * (0.04 + n * 0.5),
        a / 40 - 2,
        o * 0.42,
        c,
      );
    }
  (N(e, t + a * 0.4, r + o * 0.38, a * 0.2, o * 0.24, `#ffffff`),
    U(
      e,
      H(`shim.kosho.price`),
      t + a * 0.5,
      r + o * 0.5,
      a * 0.18,
      o * 0.16,
      `#c8161c`,
      `800`,
    ));
}
function pt(e) {
  (e.need(`sl:plate`, 160, 48, ye),
    e.need(`sl:smokebox`, 192, 192, be),
    e.need(`sl:cab`, 256, 160, xe),
    e.need(`sl:tank`, 384, 128, Se),
    e.need(`sl:wheel`, 128, 128, mt),
    e.need(`sl:board`, 320, 200, Ce),
    e.need(`sl:stones`, 384, 64, we),
    e.need(`sl:stoneplaque`, 224, 96, Te),
    e.need(`sl:flowers`, 128, 48, Ee),
    e.need(`tv:flag`, 64, 64, De),
    e.need(`tv:cam`, 96, 32, Oe),
    e.need(`d51:wheel`, 160, 160, ke),
    e.need(`d51:plate`, 256, 48, Ae),
    e.need(`shoka`, 128, 224, je),
    e.need(`kosho:banner`, 384, 64, dt),
    e.need(`kosho:books`, 256, 64, ft));
}
function mt(e, t, n, r, i) {
  ((e.globalAlpha = 1), (e.fillStyle = `#121212`), e.fillRect(t, n, r, i));
  let a = t + r / 2,
    o = n + i / 2,
    s = r * 0.48;
  ((e.fillStyle = `#e8e8e4`),
    e.beginPath(),
    e.arc(a, o, s, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#161616`),
    e.beginPath(),
    e.arc(a, o, s * 0.9, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#2a2a2c`),
    e.beginPath(),
    e.arc(a, o, s * 0.84, 0, Math.PI * 2),
    e.fill(),
    (e.strokeStyle = `#141414`),
    (e.lineWidth = r * 0.045));
  for (let t = 0; t < 16; t++) {
    let n = (t / 16) * Math.PI * 2;
    (e.beginPath(),
      e.moveTo(a, o),
      e.lineTo(a + Math.cos(n) * s * 0.84, o + Math.sin(n) * s * 0.84),
      e.stroke());
  }
  ((e.fillStyle = `#101010`),
    e.beginPath(),
    e.arc(a, o, s * 0.82, Math.PI * 0.2, Math.PI * 0.8),
    e.closePath(),
    e.fill(),
    (e.fillStyle = `#1c1c1c`),
    e.beginPath(),
    e.arc(a, o, s * 0.22, 0, Math.PI * 2),
    e.fill());
}
var G = 1776412,
  ht = 11015695,
  gt = 9212052,
  _t = 15526886;
function vt(e, t, n, r, i, a) {
  let o = t.white(),
    s = (t, a, s, c, l, u, d = o) =>
      L(e, n + t, r + a, i + s, n + c, r + l, i + u, d),
    c = a >= 2 ? 16 : a >= 1 ? 12 : 10;
  (e.setMaterial(0.45, 0.3, 0, 0),
    P(e, G),
    s(-0.55, 0.42, -6, 0.55, 1.16, 6),
    s(-1.36, 1.16, -1.62, 1.36, 1.24, 6.02),
    e.setMaterial(0.6, 0, 0, 0),
    P(e, _t));
  for (let t of [-1, 1])
    F(
      e,
      n + t * 1.365,
      i + (t > 0 ? 6.02 : -1.62),
      n + t * 1.365,
      i + (t > 0 ? -1.62 : 6.02),
      r + 1.17,
      r + 1.235,
      o,
    );
  (e.setMaterial(0.5, 0.1, 0, 0),
    P(e, ht),
    s(-1.36, 0.74, 5.94, 1.36, 1.2, 6.2),
    s(-1.36, 0.74, -6.2, 1.36, 1.2, -5.94),
    e.setMaterial(0.4, 0.5, 0, 0),
    P(e, G),
    s(-0.2, 0.82, 6.2, 0.2, 1.06, 6.36),
    s(-0.2, 0.82, -6.36, 0.2, 1.06, -6.2));
  for (let t of [-1, 1])
    (V(e, n + t * 1, r + 0.95, i + 4.62, 0, 1, 1.05, 0.33, o, c, !0),
      s(t * 0.84 - 0.18, 1.24, 4.2, t * 0.84 + 0.18, 1.62, 5));
  let l = t.uv(`sl:wheel`),
    u = (t, a) => {
      for (let s of [-1, 1])
        (e.setMaterial(0.5, 0.35, 0, 0),
          P(e, 16777215),
          V(e, n + s * 0.63, r + a, i + t, 1, 0, 0.13, a, o, c, !0, l));
      (e.setMaterial(0.5, 0.5, 0, 0),
        P(e, 2763306),
        V(e, n, r + a, i + t, 1, 0, 1.12, 0.08, o, 6, !1));
    };
  for (let e of [2.85, 1.25, -0.35]) u(e, 0.76);
  for (let e of [4.75, -3.7, -5.1]) u(e, 0.43);
  (e.setMaterial(0.35, 0.8, 0, 0), P(e, gt));
  for (let t of [-1, 1]) {
    let a = n + t * 0.75;
    (B(e, a, r + 0.98, i - 0.35, a, r + 0.98, i + 2.85, 0.05, o),
      B(
        e,
        a + t * 0.06,
        r + 0.95,
        i + 4.05,
        a + t * 0.06,
        r + 0.6,
        i + 1.25,
        0.045,
        o,
      ),
      B(
        e,
        a + t * 0.06,
        r + 1.02,
        i + 4.1,
        a + t * 0.06,
        r + 1.02,
        i + 3.2,
        0.03,
        o,
      ),
      B(
        e,
        a + t * 0.12,
        r + 1.5,
        i + 2.2,
        a + t * 0.12,
        r + 1.1,
        i + 3.9,
        0.025,
        o,
      ));
  }
  (e.setMaterial(0.25, 0.35, 0, 0),
    P(e, G),
    V(e, n, r + 2.45, i + 1.3, 0, 1, 5.8, 0.78, o, c + 4, !1),
    P(e, 2763307));
  for (let t of [-0.9, 0.8, 2.6])
    V(e, n, r + 2.45, i + t, 0, 1, 0.07, 0.795, o, c + 4, !1);
  (P(e, 16777215),
    V(
      e,
      n,
      r + 2.45,
      i + 4.98,
      0,
      1,
      1.56,
      0.86,
      o,
      c + 4,
      !0,
      t.uv(`sl:smokebox`),
    ),
    P(e, G),
    s(-0.62, 1.2, 4.3, 0.62, 1.95, 5.6),
    z(e, n, i + 5.05, r + 3.2, r + 3.78, 0.27, o, c),
    z(e, n, i + 5.05, r + 3.72, r + 3.86, 0.33, o, c),
    e.setMaterial(0.3, 0.3, 0, 0),
    s(-0.36, 3.05, 2.85, 0.36, 3.55, 3.65),
    s(-0.33, 3.5, 2.9, 0.33, 3.62, 3.6),
    s(-0.4, 3.05, 1.15, 0.4, 3.62, 2.05),
    s(-0.36, 3.6, 1.2, 0.36, 3.7, 2),
    z(e, n, i + 0.35, r + 3.1, r + 3.45, 0.09, o, 6),
    e.setMaterial(0.3, 0.8, 0, 0),
    P(e, 13214270),
    z(e, n + 0.18, i + 0.05, r + 3.1, r + 3.55, 0.05, o, 6),
    e.setMaterial(0.3, 0.3, 0, 0),
    P(e, G),
    s(-0.2, 3.28, 5.62, 0.2, 3.66, 5.98),
    e.setMaterial(0.2, 0, 0.55, 1),
    P(e, 16773836),
    F(e, n - 0.13, i + 5.985, n + 0.13, i + 5.985, r + 3.34, r + 3.6, o),
    e.setMaterial(0.35, 0.3, 0, 0),
    P(e, G));
  for (let e of [-1, 1])
    s(e * 1.27 - 0.02, 1.6, 4.4, e * 1.27 + 0.02, 3.25, 5.9);
  let d = t.uv(`sl:tank`),
    f = t.uv(`sl:cab`);
  e.setMaterial(0.25, 0.3, 0, 0);
  for (let t of [-1, 1])
    (P(e, G),
      s(t > 0 ? 0.8 : -1.34, 1.24, -1.5, t > 0 ? 1.34 : -0.8, 2.72, 3.55),
      P(e, 16777215),
      t > 0
        ? F(e, n + 1.345, i + 3.55, n + 1.345, i - 1.5, r + 1.26, r + 2.7, d)
        : F(e, n - 1.345, i - 1.5, n - 1.345, i + 3.55, r + 1.26, r + 2.7, d));
  (P(e, G),
    s(-1.38, 1.24, -4.05, 1.38, 3.55, -1.5),
    P(e, 16777215),
    F(e, n + 1.385, i - 1.5, n + 1.385, i - 4.05, r + 1.26, r + 3.5, f),
    F(e, n - 1.385, i - 4.05, n - 1.385, i - 1.5, r + 1.26, r + 3.5, f),
    P(e, 1315860),
    s(-1.5, 3.55, -4.22, 1.5, 3.66, -1.33),
    s(-1.1, 3.66, -4.22, 1.1, 3.76, -1.33),
    P(e, G),
    s(-1.3, 1.24, -6, 1.3, 3.05, -4.05),
    P(e, 2500136),
    s(-1.12, 3.05, -5.85, 1.12, 3.2, -4.2),
    P(e, 2765368));
  for (let t of [-1, 1])
    F(
      e,
      n + t * 0.95 - 0.22,
      i - 1.495,
      n + t * 0.95 + 0.22,
      i - 1.495,
      r + 2.95,
      r + 3.3,
      o,
    );
  if ((e.setMaterial(0.35, 0.8, 0, 0), P(e, gt), a >= 1))
    for (let t of [-1, 1])
      B(
        e,
        n + t * 0.84,
        r + 2.95,
        i - 1.4,
        n + t * 0.84,
        r + 2.95,
        i + 4.2,
        0.02,
        o,
      );
}
