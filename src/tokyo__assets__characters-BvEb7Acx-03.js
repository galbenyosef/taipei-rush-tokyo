// tokyo__assets__characters-BvEb7Acx 03 — fillstyle
// Lines 688-1014 of readable/tokyo__assets__characters-BvEb7Acx.pretty.js (statement-aligned).
function ze(e, t, n) {
  return (r, i, a, o, s) => {
    (r.clearRect(i, a, o, s),
      (r.fillStyle = F(e)),
      r.fillRect(i + o * 0.3, a, o * 0.4, s),
      (r.fillStyle = F(L(e, 0.78))),
      r.fillRect(i + o * 0.3, a, 1.5, s),
      r.fillRect(i + o * 0.7 - 1.5, a, 1.5, s));
    for (let e = 0; e < n; e++) {
      let c = a + ((e + 0.5) / n) * s;
      ((r.fillStyle = F(L(t, 0.7))),
        r.beginPath(),
        r.arc(i + o / 2, c + 0.8, o * 0.17, 0, Math.PI * 2),
        r.fill(),
        (r.fillStyle = F(t)),
        r.beginPath(),
        r.arc(i + o / 2, c, o * 0.16, 0, Math.PI * 2),
        r.fill(),
        (r.fillStyle = `rgba(0,0,0,0.35)`));
      for (let [e, t] of [
        [-1, -1],
        [1, -1],
        [-1, 1],
        [1, 1],
      ])
        r.fillRect(
          i + o / 2 + e * o * 0.05 - 0.6,
          c + t * o * 0.05 - 0.6,
          1.3,
          1.3,
        );
    }
  };
}
function Be(e, t) {
  return (n, r, i, a, o) => {
    (n.clearRect(r, i, a, o),
      (n.fillStyle = F(e)),
      n.fillRect(r + a * 0.25, i, a * 0.5, o),
      (n.fillStyle = F(t)));
    for (let e = 0; e < o; e += 3)
      n.fillRect(r + a * 0.4 + ((e / 3) % 2) * a * 0.08, i + e, a * 0.14, 2);
    ((n.fillStyle = F(L(t, 0.85))),
      n.fillRect(r + a * 0.38, i + o * 0.04, a * 0.24, o * 0.05));
  };
}
function Ve(e, t, n) {
  return (r, i, a, o, s) => {
    (r.clearRect(i, a, o, s),
      r.save(),
      r.beginPath(),
      n === `jeans`
        ? (r.moveTo(i + o * 0.08, a + s * 0.06),
          r.lineTo(i + o * 0.92, a + s * 0.06),
          r.lineTo(i + o * 0.88, a + s * 0.72),
          r.lineTo(i + o * 0.5, a + s * 0.94),
          r.lineTo(i + o * 0.12, a + s * 0.72))
        : n === `chest`
          ? r.rect(i + o * 0.08, a + s * 0.08, o * 0.84, s * 0.84)
          : (r.moveTo(i + o * 0.22, a + s * 0.05),
            r.lineTo(i + o * 0.78, a + s * 0.05),
            r.lineTo(i + o * 0.95, a + s * 0.6),
            r.lineTo(i + o * 0.95, a + s * 0.95),
            r.lineTo(i + o * 0.05, a + s * 0.95),
            r.lineTo(i + o * 0.05, a + s * 0.6)),
      r.closePath(),
      (r.fillStyle = F(L(e, 0.96))),
      r.fill(),
      (r.lineWidth = Math.max(2, o * 0.03)),
      (r.strokeStyle = F(L(e, 0.72))),
      r.stroke(),
      r.setLineDash([o * 0.035, o * 0.025]),
      (r.lineWidth = Math.max(1, o * 0.014)),
      (r.strokeStyle = F(t)),
      r.stroke(),
      n === `pouch` &&
        (r.setLineDash([]),
        (r.strokeStyle = F(L(e, 0.55))),
        (r.lineWidth = o * 0.03),
        r.beginPath(),
        r.moveTo(i + o * 0.22, a + s * 0.05),
        r.lineTo(i + o * 0.06, a + s * 0.58),
        r.moveTo(i + o * 0.78, a + s * 0.05),
        r.lineTo(i + o * 0.94, a + s * 0.58),
        r.stroke()),
      r.restore());
  };
}
function He(e, t, n) {
  return (r, i, a, o, s) => {
    ((r.fillStyle = F(e)), r.fillRect(i, a, o, s));
    for (let e = 0; e < 16; e++)
      ((r.fillStyle = `rgba(0,0,0,0.14)`),
        r.fillRect(i + (e * o) / 16, a, o / 16 / 3, s));
    n &&
      ((r.fillStyle = F(t)),
      r.fillRect(i, a + s * 0.3, o, s * 0.12),
      r.fillRect(i, a + s * 0.55, o, s * 0.12));
  };
}
function Ue(e, t, n) {
  return (r, i, a, o, s) => {
    r.clearRect(i, a, o, s);
    let c = i + o / 2,
      l = a + s / 2,
      u = (e, t = !0) => `${t ? `900` : `600`} ${Math.round(e)}px ${ee}`;
    switch (((r.textAlign = `center`), (r.textBaseline = `middle`), e)) {
      case `jie`: {
        let e = `#e8b54a`,
          t = `#f3e6c4`;
        ((r.fillStyle = F(n)),
          r.beginPath(),
          r.arc(c, l - s * 0.04, o * 0.4, 0, Math.PI * 2),
          r.fill(),
          (r.strokeStyle = e),
          (r.lineWidth = o * 0.022),
          r.stroke(),
          (r.fillStyle = `#c8202c`),
          r.beginPath(),
          r.arc(c, l - s * 0.02, o * 0.25, Math.PI, 0),
          r.fill(),
          (r.strokeStyle = `#f07a1e`),
          (r.lineWidth = o * 0.012));
        for (let e = 0; e <= 8; e++) {
          let t = Math.PI + (e / 8) * Math.PI;
          (r.beginPath(),
            r.moveTo(
              c + Math.cos(t) * o * 0.27,
              l - s * 0.02 + Math.sin(t) * o * 0.27,
            ),
            r.lineTo(
              c + Math.cos(t) * o * 0.36,
              l - s * 0.02 + Math.sin(t) * o * 0.36,
            ),
            r.stroke());
        }
        r.fillStyle = t;
        let i = l + s * 0.1,
          a = s * 0.045;
        for (let e = 0; e < 8; e++) {
          let t = i - (e + 1) * a;
          (r.beginPath(),
            r.moveTo(c - o * 0.035, t + a),
            r.lineTo(c - o * 0.05, t + a * 0.1),
            r.lineTo(c + o * 0.05, t + a * 0.1),
            r.lineTo(c + o * 0.035, t + a),
            r.fill());
        }
        (r.fillRect(c - o * 0.04, i, o * 0.08, s * 0.05),
          r.fillRect(c - o * 0.006, i - 8 * a - s * 0.08, o * 0.012, s * 0.08),
          (r.fillStyle = `#ffffff`));
        for (let [e, t] of [
          [-0.2, 1],
          [0.19, 0.9],
          [-0.05, 0.7],
        ])
          for (let n = 0; n < 3; n++)
            (r.beginPath(),
              r.arc(
                c + (e + (n - 1) * 0.05 * t) * o,
                i + s * 0.03 - (n === 1 ? s * 0.02 : 0),
                o * 0.045 * t,
                0,
                Math.PI * 2,
              ),
              r.fill());
        ((r.font = u(s * 0.2)),
          (r.fillStyle = e),
          (r.strokeStyle = `#3a2410`),
          (r.lineWidth = o * 0.014),
          r.strokeText(`台北`, c, l + s * 0.27),
          r.fillText(`台北`, c, l + s * 0.27),
          (r.font = u(s * 0.07)),
          (r.fillStyle = t),
          We(
            r,
            `TAIPEI  RUSH`,
            c,
            l - s * 0.04,
            o * 0.44,
            -Math.PI / 2,
            s * 0.07,
          ));
        break;
      }
      case `wen`: {
        ((r.fillStyle = F(t)),
          r.beginPath(),
          r.moveTo(c - o * 0.42, l - s * 0.05),
          r.quadraticCurveTo(c - o * 0.2, l - s * 0.32, c, l - s * 0.12),
          r.quadraticCurveTo(
            c + o * 0.2,
            l - s * 0.32,
            c + o * 0.42,
            l - s * 0.05,
          ),
          r.quadraticCurveTo(c + o * 0.2, l - s * 0.1, c, l + s * 0.02),
          r.quadraticCurveTo(
            c - o * 0.2,
            l - s * 0.1,
            c - o * 0.42,
            l - s * 0.05,
          ),
          r.fill());
        let e = o * 0.035;
        for (let t = 0; t < 3; t++)
          for (let i = -6; i < 6; i++)
            (i + t) % 2 ||
              ((r.fillStyle = F(n)),
              r.fillRect(c + i * e, l - s * 0.2 + t * e, e, e));
        ((r.fillStyle = `#ff6f61`),
          r.beginPath(),
          r.ellipse(c, l + s * 0.1, o * 0.07, s * 0.09, 0, 0, Math.PI * 2),
          r.fill(),
          (r.fillStyle = `#ffd98a`),
          r.fillRect(c - o * 0.05, l + s * 0.005, o * 0.1, s * 0.02),
          r.fillRect(c - o * 0.05, l + s * 0.18, o * 0.1, s * 0.02),
          (r.font = u(s * 0.12)),
          (r.fillStyle = F(t)),
          r.fillText(`夜市車神`, c, l + s * 0.33));
        break;
      }
      case `taipei`:
        ((r.fillStyle = F(t)),
          (r.font = u(s * 0.24)),
          r.fillText(`TAIPEI`, c, l - s * 0.06),
          (r.font = u(s * 0.12, !1)),
          r.fillText(`臺 北 · 101`, c, l + s * 0.16),
          r.fillRect(i + o * 0.15, l + s * 0.06, o * 0.7, s * 0.015));
        break;
      case `logo`:
        ((r.fillStyle = F(t)),
          r.beginPath(),
          r.moveTo(c - o * 0.2, l + s * 0.16),
          r.lineTo(c, l - s * 0.24),
          r.lineTo(c + o * 0.2, l + s * 0.16),
          r.closePath(),
          r.fill(),
          (r.fillStyle = F(n)),
          r.beginPath(),
          r.moveTo(c - o * 0.08, l + s * 0.16),
          r.lineTo(c + o * 0.02, l - s * 0.04),
          r.lineTo(c + o * 0.12, l + s * 0.16),
          r.closePath(),
          r.fill(),
          (r.fillStyle = F(t)),
          (r.font = u(s * 0.13)),
          r.fillText(`SUMMIT`, c, l + s * 0.33));
        break;
      case `band`:
        ((r.fillStyle = F(t)),
          (r.font = u(s * 0.16)),
          r.fillText(`臺北雜音`, c, l - s * 0.28),
          r.beginPath(),
          r.moveTo(c + o * 0.06, l - s * 0.16),
          r.lineTo(c - o * 0.12, l + s * 0.06),
          r.lineTo(c, l + s * 0.06),
          r.lineTo(c - o * 0.08, l + s * 0.26),
          r.lineTo(c + o * 0.14, l - s * 0.02),
          r.lineTo(c + o * 0.02, l - s * 0.02),
          r.closePath(),
          r.fill(),
          (r.font = u(s * 0.1)),
          r.fillText(`TAIPEI NOISE`, c, l + s * 0.38));
        break;
      case `rider-pink`:
      case `rider-green`: {
        let t = e === `rider-pink`;
        if (
          ((r.fillStyle = t ? `#ffffff` : `#111111`),
          r.beginPath(),
          r.arc(c, l - s * 0.12, o * 0.19, 0, Math.PI * 2),
          r.fill(),
          (r.fillStyle = t ? F(n) : `#3ce07a`),
          t)
        ) {
          (r.beginPath(),
            r.arc(c, l - s * 0.1, o * 0.11, 0, Math.PI * 2),
            r.fill());
          for (let e of [-1, 1])
            (r.beginPath(),
              r.arc(c + e * o * 0.09, l - s * 0.2, o * 0.045, 0, Math.PI * 2),
              r.fill());
          r.fillStyle = `#ffffff`;
          for (let e of [-1, 1])
            (r.beginPath(),
              r.arc(c + e * o * 0.04, l - s * 0.12, o * 0.017, 0, Math.PI * 2),
              r.fill());
          (r.beginPath(),
            r.ellipse(c, l - s * 0.06, o * 0.035, s * 0.022, 0, 0, Math.PI * 2),
            r.fill());
        } else ((r.font = u(s * 0.2)), r.fillText(`食`, c, l - s * 0.11));
        ((r.fillStyle = t ? `#ffffff` : `#111111`),
          (r.font = u(s * 0.14)),
          r.fillText(t ? `餓熊外送` : `快食GO`, c, l + s * 0.16),
          (r.font = u(s * 0.08)),
          r.fillText(t ? `FOODBEAR` : `EATZ GO`, c, l + s * 0.3));
        break;
      }
      case `police`:
        ((r.fillStyle = F(t)),
          (r.font = u(s * 0.2)),
          r.fillText(`警 察`, c, l - s * 0.12),
          (r.font = u(s * 0.16)),
          r.fillText(`POLICE`, c, l + s * 0.12));
        break;
      case `school`:
        ((r.fillStyle = F(t)),
          (r.font = u(s * 0.2, !1)),
          r.fillText(`北城高中`, c, l - s * 0.14),
          (r.font = u(s * 0.17, !1)),
          r.fillText(`110521`, c, l + s * 0.14));
    }
  };
}
function We(e, t, n, r, i, a, o) {
  let s = t.length,
    c = (s * o * 0.62) / i;
  for (let o = 0; o < s; o++) {
    let l = a - c / 2 + (o + 0.5) * (c / s);
    (e.save(),
      e.translate(n + Math.cos(l) * i, r + Math.sin(l) * i),
      e.rotate(l + Math.PI / 2),
      e.fillText(t[o], 0, 0),
      e.restore());
  }
}
