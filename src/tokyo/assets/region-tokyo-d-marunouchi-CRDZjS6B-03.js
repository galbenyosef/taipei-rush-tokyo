// tokyo/assets/region-tokyo-d-marunouchi-CRDZjS6B 03 — clearrect
// Lines 668-1011 of readable/tokyo/assets/region-tokyo-d-marunouchi-CRDZjS6B.pretty.js (statement-aligned).
function Oe(e, r, i, a, o) {
  let s = new t(n(`maru-pod`, `en`));
  (e.clearRect(r, i, a, o),
    e.save(),
    (e.globalAlpha = 1),
    P(e, s, r, i, a, o, H(12096622), 48, 30),
    e.restore());
  let c = a / 4,
    l = o / 2;
  for (let t = 0; t < 2; t++)
    for (let n = 0; n < 4; n++)
      R(
        e,
        r + n * c + c * 0.2 - 3,
        i + t * l + l * 0.2 - 3,
        c * 0.6 + 6,
        l * 0.6 + 6,
        `#6e5640`,
      );
  Te(e, r, i, a, o);
  for (let t = 0; t < 2; t++)
    for (let n = 0; n < 4; n++) {
      let a = r + n * c + c * 0.2,
        o = i + t * l + l * 0.2;
      (e.clearRect(a, o, c * 0.6, l * 0.6),
        U(e, s, a, o, c * 0.6, l * 0.6, 7109252, 2765368));
    }
}
function ke(e, r, i, a, o) {
  let s = new t(n(`maru-pod`, `shinen`));
  (e.clearRect(r, i, a, o),
    e.save(),
    P(e, s, r, i, a, o, H(14208440), 64, 40),
    e.restore());
  let c = a / 8,
    l = o / 2;
  for (let t = 0; t < 2; t++)
    R(e, r, i + t * l + l * 0.92, a, l * 0.04, `#bcae96`);
  Te(e, r, i, a, o);
  for (let t = 0; t < 2; t++)
    for (let n = 0; n < 8; n++) {
      let a = r + n * c + c * 0.22,
        o = i + t * l + l * 0.12;
      (e.clearRect(a, o, c * 0.56, l * 0.76),
        U(e, s, a, o, c * 0.56, l * 0.76, 7240840, 2896956));
    }
}
function Ae(e, r, i, a, o) {
  let s = new t(n(`maru-post`));
  (e.clearRect(r, i, a, o), R(e, r, i, a, o, `#eeece6`));
  for (let t = i; t < i + o; t += 5) R(e, r, t, a, 0.8, `rgba(0,0,0,0.06)`);
  for (let t = i, n = 0; t < i + o; t += 5, n++)
    for (let i = r + (n % 2) * 5; i < r + a; i += 10)
      R(e, i, t, 0.8, 5, `rgba(0,0,0,0.05)`);
  let c = a / 2;
  for (let t = 0; t < 2; t++)
    R(
      e,
      r + t * c + c * 0.17 - 2.5,
      i + o * 0.22 - 2.5,
      c * 0.66 + 5,
      o * 0.56 + 5,
      `#1a1c1e`,
    );
  for (let t = 0; t < 6; t++)
    R(e, r + s.next() * a, i + o * 0.86, 2, o * 0.14, `rgba(90,86,80,0.10)`);
  Te(e, r, i, a, o);
  for (let t = 0; t < 2; t++) {
    let n = r + t * c + c * 0.17,
      a = i + o * 0.22,
      l = c * 0.66,
      u = o * 0.56;
    for (let t = 0; t < 3; t++)
      for (let r = 0; r < 2; r++) {
        let i = n + (t * l) / 3 + 1.5,
          o = a + (r * u) / 2 + 1.5;
        (e.clearRect(i, o, l / 3 - 3, u / 2 - 3),
          U(e, s, i, o, l / 3 - 3, u / 2 - 3, 8029838, 3423298));
      }
  }
}
function je(e, t, n, r, i) {
  R(e, t, n, r, i, `#eeece6`);
  let a = t + r / 2,
    o = n + i / 2,
    s = Math.min(r, i) * 0.44;
  ((e.fillStyle = `#f8f8f4`),
    e.beginPath(),
    e.arc(a, o, s, 0, Math.PI * 2),
    e.fill(),
    (e.strokeStyle = `#1a1c1e`),
    (e.lineWidth = s * 0.06),
    e.stroke());
  for (let t = 0; t < 12; t++) {
    let n = (t / 12) * Math.PI * 2;
    ((e.lineWidth = s * (t % 3 == 0 ? 0.08 : 0.04)),
      e.beginPath(),
      e.moveTo(a + Math.sin(n) * s * 0.72, o - Math.cos(n) * s * 0.72),
      e.lineTo(a + Math.sin(n) * s * 0.88, o - Math.cos(n) * s * 0.88),
      e.stroke());
  }
  ((e.lineWidth = s * 0.07),
    e.beginPath(),
    e.moveTo(a, o),
    e.lineTo(a + Math.sin(-1.05) * s * 0.5, o - Math.cos(-1.05) * s * 0.5),
    e.moveTo(a, o),
    e.lineTo(a + Math.sin(1.05) * s * 0.75, o - Math.cos(1.05) * s * 0.75),
    e.stroke());
}
function Me(e, t, n, r, i, a, o = 1) {
  R(e, n, r, i, a, `#d8cfc0`);
  for (let s = r, c = 0; s < r + a; s += 5.2, c++) {
    let r = c % 2 ? 6 : 12;
    for (let a = n - (c % 4 == 1 ? 3 : 0); a < n + i; a += r) {
      let n = 0.86 + t.next() * 0.22;
      ((e.fillStyle = `rgb(${(168 * n * o) | 0},${(70 * n * o) | 0},${(52 * n * o) | 0})`),
        e.fillRect(a + 0.6, s + 0.6, r - 1.2, 4));
    }
  }
}
function Ne(e, r, i, a, o) {
  let s = new t(n(`maru-brick`, `bay`));
  (e.clearRect(r, i, a, o), Me(e, s, r, i, a, o));
  let c = r + a * 0.3,
    l = i + o * 0.2,
    u = a * 0.4,
    d = o * 0.6;
  (R(e, c - 5, l - 9, u + 10, 9, `#ece6da`),
    R(e, c - 6, l + d, u + 12, 6, `#ece6da`),
    R(e, c - 4, l, 4, d, `#e2dbcd`),
    R(e, c + u, l, 4, d, `#e2dbcd`),
    R(e, c, l, u, d, `#f2f0ea`),
    R(e, r, i + o - 4, a, 4, `#e8e1d3`),
    Te(e, r, i, a, o));
  for (let t = 0; t < 2; t++)
    for (let n = 0; n < 3; n++) {
      let r = c + 2 + (t * (u - 2)) / 2,
        i = l + 2 + (n * (d - 2)) / 3;
      (e.clearRect(r, i, (u - 2) / 2 - 2, (d - 2) / 3 - 2),
        U(e, s, r, i, (u - 2) / 2 - 2, (d - 2) / 3 - 2, 9080456, 3816502));
    }
}
function Pe(e, r, i, a, o) {
  Me(e, new t(n(`maru-brick`, `plain`)), r, i, a, o);
}
function Fe(e, r, i, a, o) {
  let s = new t(n(`maru-slate`));
  R(e, r, i, a, o, `#3c4044`);
  for (let t = i, n = 0; t < i + o; t += 6, n++)
    for (let i = r - (n % 2) * 5; i < r + a; i += 10) {
      let n = 0.85 + s.next() * 0.25;
      ((e.fillStyle = `rgb(${(66 * n) | 0},${(72 * n) | 0},${(78 * n) | 0})`),
        e.fillRect(i + 0.5, t + 0.5, 9, 5));
    }
}
function Ie(e, r, i, a, o) {
  P(e, new t(n(`maru-granite`)), r, i, a, o, H(14077890), 64, 32);
}
function Le(e, r, i, a, o) {
  let s = new t(n(`maru-colwin`));
  (e.clearRect(r, i, a, o), P(e, s, r, i, a, o, H(13156530), 64, 32));
  let c = r + a * 0.22,
    l = i + o * 0.18,
    u = a * 0.56,
    d = o * 0.66;
  (R(e, c - 3, l - 3, u + 6, d + 6, `#3c3428`),
    Te(e, r, i, a, o),
    e.clearRect(c, l, u, d),
    U(e, s, c, l, u, d, 10132108, 3947572),
    z(e, c + u / 2 - 1.5, l, 3, d, `#3c3428`, 0.2));
}
function Re(e, r = 0) {
  return (i, a, o, s, c) => {
    let l = new t(n(`maru-shop`, e, r));
    (i.clearRect(a, o, s, c),
      z(
        i,
        a,
        o,
        s,
        c,
        e === `boutique` ? `#2a2826` : e === `cafe` ? `#3a3026` : `#6a6660`,
        0.2,
      ));
    let u = s / 2;
    for (let t = 0; t < 2; t++) {
      let n = a + t * u + u * 0.06,
        s = o + c * 0.1,
        d = u * 0.88,
        f = c * 0.86;
      if (e === `lobby`) {
        let e = i.createLinearGradient(0, s, 0, s + f);
        (e.addColorStop(0, `#f2eee4`),
          e.addColorStop(1, `#b8b0a2`),
          (i.fillStyle = e),
          i.fillRect(n, s, d, f),
          R(i, n, s + f * 0.1, d, f * 0.5, `#d8cebc`));
        for (let e = 0; e < 4; e++)
          R(
            i,
            n + d * (0.12 + e * 0.22),
            s + f * 0.66,
            d * 0.05,
            f * 0.22,
            `#7a7c80`,
          );
        R(i, n + d * 0.62, s + f * 0.62, d * 0.32, f * 0.18, `#5a4a3a`);
      } else if (e === `mall`) {
        let e = i.createLinearGradient(0, s, 0, s + f);
        (e.addColorStop(0, `#fbeed6`),
          e.addColorStop(1, `#b8a084`),
          (i.fillStyle = e),
          i.fillRect(n, s, d, f));
        for (let e = 0; e < 4; e++)
          R(
            i,
            n + d * (0.1 + e * 0.22),
            s + f * 0.05,
            d * 0.12,
            f * 0.025,
            `#ffffff`,
          );
        for (let e = 0; e < 2; e++) {
          let t = e ? n + d * 0.66 : n + d * 0.04;
          (R(
            i,
            t,
            s + f * 0.22,
            d * 0.3,
            f * 0.56,
            [`#4a3e34`, `#34404a`, `#5a3434`][(e + r) % 3],
          ),
            R(
              i,
              t + d * 0.03,
              s + f * 0.3,
              d * 0.24,
              f * 0.4,
              [`#f2e2c4`, `#e4ecf0`, `#f4e0dc`][(e + r) % 3],
            ));
        }
        for (let e = 0; e < 3; e++) {
          let t = n + d * (0.38 + e * 0.1 + l.next() * 0.04);
          (R(i, t, s + f * 0.5, d * 0.035, f * 0.3, `#3a3634`),
            R(i, t + d * 0.005, s + f * 0.44, d * 0.025, f * 0.06, `#c8a890`));
        }
        R(i, n, s + f * 0.86, d, f * 0.14, `#8a7a68`);
      } else if (e === `cafe`) {
        let e = i.createLinearGradient(0, s, 0, s + f);
        (e.addColorStop(0, `#f6d8a8`),
          e.addColorStop(1, `#8a5a38`),
          (i.fillStyle = e),
          i.fillRect(n, s, d, f));
        for (let e = 0; e < 3; e++)
          R(
            i,
            n + d * (0.1 + e * 0.3),
            s + f * 0.62,
            d * 0.16,
            f * 0.04,
            `#4a3020`,
          );
        R(i, n, s + f * 0.08, d, f * 0.03, `#ffe8c0`);
      } else {
        let e = i.createRadialGradient(
          n + d / 2,
          s + f * 0.3,
          2,
          n + d / 2,
          s + f * 0.4,
          d * 0.8,
        );
        (e.addColorStop(0, `#fff4dc`),
          e.addColorStop(1, [`#a89070`, `#7c8a96`, `#a08a8a`][r % 3]),
          (i.fillStyle = e),
          i.fillRect(n, s, d, f),
          R(i, n + d * 0.15, s + f * 0.78, d * 0.7, f * 0.08, `#e8e2d6`));
        let t = 1 + Math.floor(l.next() * 2);
        for (let e = 0; e < t; e++) {
          let a = n + d * (t === 1 ? 0.5 : 0.33 + e * 0.34);
          (R(
            i,
            a - d * 0.06,
            s + f * 0.3,
            d * 0.12,
            f * 0.48,
            [`#2a2a2e`, `#c8b090`, `#8a2a2a`, `#f0ece4`][(e + r) % 4],
          ),
            R(i, a - d * 0.03, s + f * 0.2, d * 0.06, f * 0.1, `#d8c8b0`));
        }
      }
      ((i.fillStyle = `rgba(255,255,255,0.10)`),
        i.fillRect(n + d * 0.1, s, d * 0.1, f));
    }
  };
}
function ze(e, t, n, r = {}) {
  return (i, a, o, s, c) => {
    (i.clearRect(a, o, s, c), z(i, a, o, s, c, t, r.lit ?? 0.2));
    let l = r.serif ? F() : j();
    (V(
      i,
      N(e),
      a + s / 2,
      o + c * (r.sub ? 0.4 : 0.52),
      s * 0.9,
      c * (r.sub ? 0.56 : 0.72),
      n,
      l,
      `600`,
    ),
      r.sub &&
        V(
          i,
          N(r.sub),
          a + s / 2,
          o + c * 0.82,
          s * 0.8,
          c * 0.22,
          n,
          j(),
          `500`,
        ));
  };
}
function Be(e, t, n, r, i) {
  (se(e, t, n, r, i, `#ffffff`, 0.55),
    (e.fillStyle = `#e60012`),
    (e.font = `bold ${i * 0.7}px ${j()}`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    e.fillText(`〒`, t + i * 0.5, n + i * 0.52),
    V(
      e,
      N(`common.facility.yubinkyoku`),
      t + r * 0.6,
      n + i * 0.52,
      r * 0.6,
      i * 0.6,
      `#e60012`,
      j(),
      `700`,
    ));
}
