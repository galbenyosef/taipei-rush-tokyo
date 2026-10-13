// tokyo__assets__region-tokyo-d-marunouchi-BoijeA75 03 — clearrect
// Lines 668-1011 of readable/tokyo__assets__region-tokyo-d-marunouchi-BoijeA75.pretty.js (statement-aligned).
function Ae(e, n, i, a, o) {
  let s = new t(r(`maru-pod`, `en`));
  (e.clearRect(n, i, a, o),
    e.save(),
    (e.globalAlpha = 1),
    E(e, s, n, i, a, o, z(12096622), 48, 30),
    e.restore());
  let c = a / 4,
    l = o / 2;
  for (let t = 0; t < 2; t++)
    for (let r = 0; r < 4; r++)
      F(
        e,
        n + r * c + c * 0.2 - 3,
        i + t * l + l * 0.2 - 3,
        c * 0.6 + 6,
        l * 0.6 + 6,
        `#6e5640`,
      );
  De(e, n, i, a, o);
  for (let t = 0; t < 2; t++)
    for (let r = 0; r < 4; r++) {
      let a = n + r * c + c * 0.2,
        o = i + t * l + l * 0.2;
      (e.clearRect(a, o, c * 0.6, l * 0.6),
        V(e, s, a, o, c * 0.6, l * 0.6, 7109252, 2765368));
    }
}
function je(e, n, i, a, o) {
  let s = new t(r(`maru-pod`, `shinen`));
  (e.clearRect(n, i, a, o),
    e.save(),
    E(e, s, n, i, a, o, z(14208440), 64, 40),
    e.restore());
  let c = a / 8,
    l = o / 2;
  for (let t = 0; t < 2; t++)
    F(e, n, i + t * l + l * 0.92, a, l * 0.04, `#bcae96`);
  De(e, n, i, a, o);
  for (let t = 0; t < 2; t++)
    for (let r = 0; r < 8; r++) {
      let a = n + r * c + c * 0.22,
        o = i + t * l + l * 0.12;
      (e.clearRect(a, o, c * 0.56, l * 0.76),
        V(e, s, a, o, c * 0.56, l * 0.76, 7240840, 2896956));
    }
}
function Me(e, n, i, a, o) {
  let s = new t(r(`maru-post`));
  (e.clearRect(n, i, a, o), F(e, n, i, a, o, `#eeece6`));
  for (let t = i; t < i + o; t += 5) F(e, n, t, a, 0.8, `rgba(0,0,0,0.06)`);
  for (let t = i, r = 0; t < i + o; t += 5, r++)
    for (let i = n + (r % 2) * 5; i < n + a; i += 10)
      F(e, i, t, 0.8, 5, `rgba(0,0,0,0.05)`);
  let c = a / 2;
  for (let t = 0; t < 2; t++)
    F(
      e,
      n + t * c + c * 0.17 - 2.5,
      i + o * 0.22 - 2.5,
      c * 0.66 + 5,
      o * 0.56 + 5,
      `#1a1c1e`,
    );
  for (let t = 0; t < 6; t++)
    F(e, n + s.next() * a, i + o * 0.86, 2, o * 0.14, `rgba(90,86,80,0.10)`);
  De(e, n, i, a, o);
  for (let t = 0; t < 2; t++) {
    let r = n + t * c + c * 0.17,
      a = i + o * 0.22,
      l = c * 0.66,
      u = o * 0.56;
    for (let t = 0; t < 3; t++)
      for (let n = 0; n < 2; n++) {
        let i = r + (t * l) / 3 + 1.5,
          o = a + (n * u) / 2 + 1.5;
        (e.clearRect(i, o, l / 3 - 3, u / 2 - 3),
          V(e, s, i, o, l / 3 - 3, u / 2 - 3, 8029838, 3423298));
      }
  }
}
function Ne(e, t, n, r, i) {
  F(e, t, n, r, i, `#eeece6`);
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
function Pe(e, t, n, r, i, a, o = 1) {
  F(e, n, r, i, a, `#d8cfc0`);
  for (let s = r, c = 0; s < r + a; s += 5.2, c++) {
    let r = c % 2 ? 6 : 12;
    for (let a = n - (c % 4 == 1 ? 3 : 0); a < n + i; a += r) {
      let n = 0.86 + t.next() * 0.22;
      ((e.fillStyle = `rgb(${(168 * n * o) | 0},${(70 * n * o) | 0},${(52 * n * o) | 0})`),
        e.fillRect(a + 0.6, s + 0.6, r - 1.2, 4));
    }
  }
}
function Fe(e, n, i, a, o) {
  let s = new t(r(`maru-brick`, `bay`));
  (e.clearRect(n, i, a, o), Pe(e, s, n, i, a, o));
  let c = n + a * 0.3,
    l = i + o * 0.2,
    u = a * 0.4,
    d = o * 0.6;
  (F(e, c - 5, l - 9, u + 10, 9, `#ece6da`),
    F(e, c - 6, l + d, u + 12, 6, `#ece6da`),
    F(e, c - 4, l, 4, d, `#e2dbcd`),
    F(e, c + u, l, 4, d, `#e2dbcd`),
    F(e, c, l, u, d, `#f2f0ea`),
    F(e, n, i + o - 4, a, 4, `#e8e1d3`),
    De(e, n, i, a, o));
  for (let t = 0; t < 2; t++)
    for (let n = 0; n < 3; n++) {
      let r = c + 2 + (t * (u - 2)) / 2,
        i = l + 2 + (n * (d - 2)) / 3;
      (e.clearRect(r, i, (u - 2) / 2 - 2, (d - 2) / 3 - 2),
        V(e, s, r, i, (u - 2) / 2 - 2, (d - 2) / 3 - 2, 9080456, 3816502));
    }
}
function Ie(e, n, i, a, o) {
  Pe(e, new t(r(`maru-brick`, `plain`)), n, i, a, o);
}
function Le(e, n, i, a, o) {
  let s = new t(r(`maru-slate`));
  F(e, n, i, a, o, `#3c4044`);
  for (let t = i, r = 0; t < i + o; t += 6, r++)
    for (let i = n - (r % 2) * 5; i < n + a; i += 10) {
      let n = 0.85 + s.next() * 0.25;
      ((e.fillStyle = `rgb(${(66 * n) | 0},${(72 * n) | 0},${(78 * n) | 0})`),
        e.fillRect(i + 0.5, t + 0.5, 9, 5));
    }
}
function Re(e, n, i, a, o) {
  E(e, new t(r(`maru-granite`)), n, i, a, o, z(14077890), 64, 32);
}
function ze(e, n, i, a, o) {
  let s = new t(r(`maru-colwin`));
  (e.clearRect(n, i, a, o), E(e, s, n, i, a, o, z(13156530), 64, 32));
  let c = n + a * 0.22,
    l = i + o * 0.18,
    u = a * 0.56,
    d = o * 0.66;
  (F(e, c - 3, l - 3, u + 6, d + 6, `#3c3428`),
    De(e, n, i, a, o),
    e.clearRect(c, l, u, d),
    V(e, s, c, l, u, d, 10132108, 3947572),
    I(e, c + u / 2 - 1.5, l, 3, d, `#3c3428`, 0.2));
}
function Be(e, n = 0) {
  return (i, a, o, s, c) => {
    let l = new t(r(`maru-shop`, e, n));
    (i.clearRect(a, o, s, c),
      I(
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
      let r = a + t * u + u * 0.06,
        s = o + c * 0.1,
        d = u * 0.88,
        f = c * 0.86;
      if (e === `lobby`) {
        let e = i.createLinearGradient(0, s, 0, s + f);
        (e.addColorStop(0, `#f2eee4`),
          e.addColorStop(1, `#b8b0a2`),
          (i.fillStyle = e),
          i.fillRect(r, s, d, f),
          F(i, r, s + f * 0.1, d, f * 0.5, `#d8cebc`));
        for (let e = 0; e < 4; e++)
          F(
            i,
            r + d * (0.12 + e * 0.22),
            s + f * 0.66,
            d * 0.05,
            f * 0.22,
            `#7a7c80`,
          );
        F(i, r + d * 0.62, s + f * 0.62, d * 0.32, f * 0.18, `#5a4a3a`);
      } else if (e === `mall`) {
        let e = i.createLinearGradient(0, s, 0, s + f);
        (e.addColorStop(0, `#fbeed6`),
          e.addColorStop(1, `#b8a084`),
          (i.fillStyle = e),
          i.fillRect(r, s, d, f));
        for (let e = 0; e < 4; e++)
          F(
            i,
            r + d * (0.1 + e * 0.22),
            s + f * 0.05,
            d * 0.12,
            f * 0.025,
            `#ffffff`,
          );
        for (let e = 0; e < 2; e++) {
          let t = e ? r + d * 0.66 : r + d * 0.04;
          (F(
            i,
            t,
            s + f * 0.22,
            d * 0.3,
            f * 0.56,
            [`#4a3e34`, `#34404a`, `#5a3434`][(e + n) % 3],
          ),
            F(
              i,
              t + d * 0.03,
              s + f * 0.3,
              d * 0.24,
              f * 0.4,
              [`#f2e2c4`, `#e4ecf0`, `#f4e0dc`][(e + n) % 3],
            ));
        }
        for (let e = 0; e < 3; e++) {
          let t = r + d * (0.38 + e * 0.1 + l.next() * 0.04);
          (F(i, t, s + f * 0.5, d * 0.035, f * 0.3, `#3a3634`),
            F(i, t + d * 0.005, s + f * 0.44, d * 0.025, f * 0.06, `#c8a890`));
        }
        F(i, r, s + f * 0.86, d, f * 0.14, `#8a7a68`);
      } else if (e === `cafe`) {
        let e = i.createLinearGradient(0, s, 0, s + f);
        (e.addColorStop(0, `#f6d8a8`),
          e.addColorStop(1, `#8a5a38`),
          (i.fillStyle = e),
          i.fillRect(r, s, d, f));
        for (let e = 0; e < 3; e++)
          F(
            i,
            r + d * (0.1 + e * 0.3),
            s + f * 0.62,
            d * 0.16,
            f * 0.04,
            `#4a3020`,
          );
        F(i, r, s + f * 0.08, d, f * 0.03, `#ffe8c0`);
      } else {
        let e = i.createRadialGradient(
          r + d / 2,
          s + f * 0.3,
          2,
          r + d / 2,
          s + f * 0.4,
          d * 0.8,
        );
        (e.addColorStop(0, `#fff4dc`),
          e.addColorStop(1, [`#a89070`, `#7c8a96`, `#a08a8a`][n % 3]),
          (i.fillStyle = e),
          i.fillRect(r, s, d, f),
          F(i, r + d * 0.15, s + f * 0.78, d * 0.7, f * 0.08, `#e8e2d6`));
        let t = 1 + Math.floor(l.next() * 2);
        for (let e = 0; e < t; e++) {
          let a = r + d * (t === 1 ? 0.5 : 0.33 + e * 0.34);
          (F(
            i,
            a - d * 0.06,
            s + f * 0.3,
            d * 0.12,
            f * 0.48,
            [`#2a2a2e`, `#c8b090`, `#8a2a2a`, `#f0ece4`][(e + n) % 4],
          ),
            F(i, a - d * 0.03, s + f * 0.2, d * 0.06, f * 0.1, `#d8c8b0`));
        }
      }
      ((i.fillStyle = `rgba(255,255,255,0.10)`),
        i.fillRect(r + d * 0.1, s, d * 0.1, f));
    }
  };
}
function Ve(e, t, n, r = {}) {
  return (i, a, o, s, c) => {
    (i.clearRect(a, o, s, c), I(i, a, o, s, c, t, r.lit ?? 0.2));
    let l = r.serif ? b() : g();
    (R(
      i,
      u(e),
      a + s / 2,
      o + c * (r.sub ? 0.4 : 0.52),
      s * 0.9,
      c * (r.sub ? 0.56 : 0.72),
      n,
      l,
      `600`,
    ),
      r.sub &&
        R(
          i,
          u(r.sub),
          a + s / 2,
          o + c * 0.82,
          s * 0.8,
          c * 0.22,
          n,
          g(),
          `500`,
        ));
  };
}
function He(e, t, n, r, i) {
  (ue(e, t, n, r, i, `#ffffff`, 0.55),
    (e.fillStyle = `#e60012`),
    (e.font = `bold ${i * 0.7}px ${g()}`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    e.fillText(`〒`, t + i * 0.5, n + i * 0.52),
    R(
      e,
      u(`common.facility.yubinkyoku`),
      t + r * 0.6,
      n + i * 0.52,
      r * 0.6,
      i * 0.6,
      `#e60012`,
      g(),
      `700`,
    ));
}
