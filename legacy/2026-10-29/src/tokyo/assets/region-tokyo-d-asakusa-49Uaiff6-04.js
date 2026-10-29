// tokyo/assets/region-tokyo-d-asakusa-49Uaiff6 04 — fillstyle
// Lines 805-1154 of readable/tokyo/assets/region-tokyo-d-asakusa-49Uaiff6.pretty.js (statement-aligned).
function Ie(e, t) {
  return (n, r, i, a, o) => {
    let [s, c] = e.board;
    P(n, r, i, a, o, s, 0.62);
    let l = e.mincho ? N() : M();
    e.mincho &&
      (I(n, r + 4, i + 4, a - 8, 2, c, 0.62),
      I(n, r + 4, i + o - 6, a - 8, 2, c, 0.62));
    let u = e.sub ? V(e.sub) : ``;
    u && a / o > 3.6
      ? (H(n, V(t), r + a * 0.4, i + o * 0.52, a * 0.62, o * 0.72, c, `900`, l),
        H(n, u, r + a * 0.84, i + o * 0.52, a * 0.27, o * 0.36, c, `700`, l))
      : H(n, V(t), r + a / 2, i + o * 0.52, a * 0.9, o * 0.74, c, `900`, l);
  };
}
function Le(e, t) {
  return (n, r, i, a, o) => {
    let [s, c] = e.board;
    (P(n, r, i, a, o, s, 0.6),
      I(n, r + 3, i + 3, a - 6, 3, c, 0.6),
      I(n, r + 3, i + o - 6, a - 6, 3, c, 0.6));
    let l = V(t).replace(/\s+/g, ``);
    ie(
      n,
      l,
      r + a / 2,
      i + o * 0.06,
      i + o * 0.94,
      a * 0.62,
      c,
      e.mincho ? N() : M(),
      `900`,
    );
  };
}
function Re(e) {
  return (r, i, a, o, s) => {
    let c = new t(n(`asa-int`, e.id));
    ((r.globalAlpha = 1), (r.fillStyle = e.wall), r.fillRect(i, a, o, s));
    let l = e.goods;
    if (
      e.front === `noren` ||
      (e.front === `glass` &&
        (e.sched === `eat` || e.sched === `bar` || e.id === `kissa`))
    ) {
      for (let e = 0; e < 10; e++) {
        let t = i + o * (0.05 + e * 0.09);
        ((r.fillStyle = e % 3 == 0 ? `#f6e6b0` : `#f8f2e2`),
          r.fillRect(t, a + s * 0.08, o * 0.07, s * 0.32),
          (r.fillStyle = `#2a1a10`));
        for (let e = 0; e < 4; e++)
          r.fillRect(
            t + o * 0.025,
            a + s * (0.12 + e * 0.06),
            o * 0.02,
            s * 0.035,
          );
      }
      ((r.fillStyle = `#8a5a30`),
        r.fillRect(i, a + s * 0.56, o, s * 0.08),
        (r.fillStyle = `#5c3a1e`),
        r.fillRect(i, a + s * 0.64, o, s * 0.36));
      for (let e = 0; e < 3; e++) {
        let t = i + o * (0.18 + e * 0.28 + c.next() * 0.08);
        ((r.fillStyle = [`#2a2e3a`, `#e8e8e8`, `#5a3a2a`][e % 3]),
          r.fillRect(t - o * 0.03, a + s * 0.46, o * 0.06, s * 0.32),
          Me(r, t, a + s * 0.42, o * 0.022, `#1a1410`));
      }
      return;
    }
    if (e.front === `kimono`) {
      for (let e = 0; e < 18; e++) {
        let t = i + o * (0.03 + e * 0.053);
        ((r.fillStyle = l[e % l.length]),
          r.fillRect(t, a + s * 0.12, o * 0.046, s * 0.6),
          (r.fillStyle = `rgba(255,255,255,0.35)`));
        for (let e = 0; e < 4; e++)
          Me(
            r,
            t + o * 0.023,
            a + s * (0.2 + e * 0.13),
            o * 0.008,
            `rgba(255,255,255,0.45)`,
          );
      }
      ((r.fillStyle = `#9a8a70`),
        r.fillRect(i, a + s * 0.1, o, s * 0.025),
        (r.fillStyle = `#d8d8dc`),
        r.fillRect(i + o * 0.8, a + s * 0.2, o * 0.1, s * 0.7));
      return;
    }
    if (
      e.front === `window` &&
      (e.id === `ningyoyaki` || e.id === `kibayashi`)
    ) {
      ((r.fillStyle = `#c8b090`), r.fillRect(i, a, o, s * 0.5));
      for (let e = 0; e < 6; e++)
        ((r.fillStyle = [`#e8d8b8`, `#d84a3a`, `#f4ecd8`][e % 3]),
          r.fillRect(
            i + o * (0.04 + e * 0.16),
            a + s * 0.1,
            o * 0.13,
            s * 0.16,
          ));
      ((r.fillStyle = `#3a3a3a`),
        r.fillRect(i + o * 0.1, a + s * 0.58, o * 0.8, s * 0.16));
      for (let e = 0; e < 12; e++)
        Me(r, i + o * (0.14 + e * 0.064), a + s * 0.66, o * 0.022, `#c8904a`);
      ((r.fillStyle = `#f4f4f4`),
        r.fillRect(i + o * 0.42, a + s * 0.3, o * 0.12, s * 0.3),
        Me(r, i + o * 0.48, a + s * 0.27, o * 0.03, `#2a1a10`),
        (r.fillStyle = `#ffffff`),
        r.fillRect(i + o * 0.45, a + s * 0.2, o * 0.06, s * 0.035),
        (r.fillStyle = `#8a6a4a`),
        r.fillRect(i, a + s * 0.74, o, s * 0.26));
      return;
    }
    for (let e = 0; e < 4; e++) {
      let t = a + s * (0.06 + e * 0.22);
      ((r.fillStyle = `#b8a888`), r.fillRect(i, t + s * 0.18, o, s * 0.02));
      for (let e = 0; e < 16; e++) {
        let n = i + o * (0.02 + e * 0.061);
        r.fillStyle = l[Math.floor(c.next() * l.length)];
        let a = s * (0.08 + c.next() * 0.09);
        r.fillRect(n, t + s * 0.18 - a, o * 0.05, a);
      }
    }
  };
}
function ze(e) {
  return (r, i, a, o, s) => {
    let c = new t(n(`asa-goods`, e.id));
    ((r.globalAlpha = 1), (r.fillStyle = `#e8e2d4`), r.fillRect(i, a, o, s));
    let l = e.goods;
    for (let t = 0; t < 3; t++)
      for (let n = 0; n < 9; n++) {
        let u = i + (o * n) / 9 + 2,
          d = a + (s * t) / 3 + 2,
          f = o / 9 - 4,
          p = s / 3 - 4;
        ((r.fillStyle = l[Math.floor(c.next() * l.length)]),
          r.fillRect(u, d, f, p),
          c.next() < 0.5 &&
            ((r.fillStyle = `rgba(255,255,255,0.55)`),
            r.fillRect(u + f * 0.15, d + p * 0.2, f * 0.7, p * 0.18)),
          e.id === `sensu` &&
            c.next() < 0.6 &&
            ((r.fillStyle = l[Math.floor(c.next() * l.length)]),
            r.beginPath(),
            r.moveTo(u + f / 2, d + p),
            r.arc(u + f / 2, d + p, p * 0.95, Math.PI * 1.1, Math.PI * 1.9),
            r.fill()));
      }
    for (let e = 0; e < 6; e++)
      ((r.fillStyle = `#ffffff`),
        r.fillRect(i + o * (0.05 + e * 0.16), a + s * 0.86, o * 0.09, s * 0.1),
        (r.fillStyle = `#c81a14`),
        r.fillRect(
          i + o * (0.06 + e * 0.16),
          a + s * 0.89,
          o * 0.06,
          s * 0.04,
        ));
  };
}
function Be(e, t) {
  return (n, r, i, a, o) => {
    ((n.globalAlpha = 1),
      (n.fillStyle = e.cloth),
      n.fillRect(r, i, a, o),
      (n.fillStyle = `rgba(0,0,0,0.35)`));
    for (let e = 1; e < 3; e++)
      n.fillRect(r + (a * e) / 3 - 1, i + o * 0.22, 2, o * 0.78);
    let s = parseInt(e.cloth.slice(1), 16) > 11579568;
    H(
      n,
      V(t).replace(/\s+/g, ``),
      r + a / 2,
      i + o * 0.5,
      a * 0.82,
      o * 0.56,
      s ? `#1a1a1a` : `#f6f2e8`,
      `900`,
      N(),
    );
  };
}
function Ve(e) {
  return (r, i, a, o, s) => {
    let c = new t(n(`asa-shut`, e));
    (F(r, i, a, o, s, [`#a8aaa8`, `#9a9e9c`, `#b4b2aa`, `#8e9294`][e % 4]),
      (r.fillStyle = `rgba(0,0,0,0.12)`));
    for (let e = 0; e < s; e += 5) r.fillRect(i, a + e, o, 1.5);
    if (e % 3 == 1) {
      ((r.fillStyle = `#1d2b5a`),
        r.fillRect(i + o * 0.05, a + s * 0.15, o * 0.9, s * 0.7),
        (r.strokeStyle = `#e8ecf2`),
        (r.lineWidth = 2));
      for (let e = 0; e < 4; e++)
        for (let t = 0; t < 6; t++)
          (r.beginPath(),
            r.arc(
              i + o * (0.12 + t * 0.15),
              a + s * (0.72 - e * 0.07),
              o * 0.06,
              Math.PI,
              Math.PI * 2,
            ),
            r.stroke());
      ((r.fillStyle = `#c8281e`),
        r.beginPath(),
        r.ellipse(
          i + o * 0.5,
          a + s * 0.4,
          o * 0.12,
          s * 0.17,
          0,
          0,
          Math.PI * 2,
        ),
        r.fill(),
        H(
          r,
          V(`asa.lantern.asakusa`),
          i + o * 0.5,
          a + s * 0.4,
          o * 0.14,
          s * 0.18,
          `#1a0a08`,
          `900`,
          N(),
        ));
    } else if (c.next() < 0.4) {
      ((r.fillStyle = `#f4f2ea`),
        r.fillRect(i + o * 0.62, a + s * 0.3, o * 0.22, s * 0.2),
        (r.fillStyle = `#5a5a5a`));
      for (let e = 0; e < 3; e++)
        r.fillRect(i + o * 0.65, a + s * (0.34 + e * 0.05), o * 0.16, 2);
    }
  };
}
function He(e) {
  return (r, i, a, o, s) => {
    let c = new t(n(`asa-fac`, e));
    r.globalAlpha = 1;
    let l = Math.floor(e / 3);
    if (l === 0) {
      (F(r, i, a, o, s, [`#3a2a1e`, `#4a3424`, `#2e241c`][e % 3]),
        F(r, i + o * 0.08, a + s * 0.18, o * 0.84, s * 0.58, `#5a4a3a`),
        (r.fillStyle = `#e8dcc0`),
        r.fillRect(i + o * 0.1, a + s * 0.2, o * 0.8, s * 0.54),
        (r.fillStyle = `#2a1e14`));
      for (let e = 0; e < 22; e++)
        r.fillRect(
          i + o * (0.1 + e * 0.0364),
          a + s * 0.2,
          o * 0.014,
          s * 0.54,
        );
      (r.fillRect(i + o * 0.1, a + s * 0.46, o * 0.8, 3),
        F(r, i, a + s * 0.86, o, s * 0.14, `#2a2420`));
    } else if (l === 1) {
      let t = [`#5a8a7a`, `#c8c0b0`, `#9a8a70`][e % 3];
      if ((F(r, i, a, o, s, t), e % 3 == 0)) {
        ((r.strokeStyle = `rgba(30,60,50,0.45)`), (r.lineWidth = 1.5));
        for (let e = 0; e < 8; e++)
          for (let t = 0; t < 10; t++)
            (r.beginPath(),
              r.arc(
                i + (t / 9) * o + (e % 2) * o * 0.055,
                a + s * (0.1 + e * 0.11),
                o * 0.05,
                Math.PI,
                Math.PI * 2,
              ),
              r.stroke());
      }
      for (let e of [0.14, 0.58])
        (F(r, i + o * e, a + s * 0.26, o * 0.28, s * 0.44, `#d8d4c8`),
          F(
            r,
            i + o * e + 4,
            a + s * 0.26 + 4,
            o * 0.28 - 8,
            s * 0.44 - 8,
            `#5a6a72`,
          ),
          (r.fillStyle = `rgba(255,255,255,0.18)`),
          r.fillRect(
            i + o * e + 4,
            a + s * 0.26 + 4,
            (o * 0.28 - 8) / 2,
            s * 0.44 - 8,
          ));
      F(r, i, a + s * 0.9, o, s * 0.1, `rgba(0,0,0,0.2)`);
    } else if (l === 2) {
      let t = [`#9a6a4a`, `#c8b494`, `#8a7a6a`][e % 3];
      (F(r, i, a, o, s, t), (r.fillStyle = `rgba(0,0,0,0.08)`));
      for (let e = 0; e < s; e += 6) r.fillRect(i, a + e, o, 1);
      for (let e = 0; e < o; e += 12) r.fillRect(i + e, a, 1, s);
      let n = 2 + (e % 2);
      for (let e = 0; e < n; e++) {
        let t = i + o * (0.08 + (e * 0.86) / n),
          l = (o * 0.86) / n - o * 0.06;
        (F(r, t, a + s * 0.2, l, s * 0.52, `#b8bcc0`),
          F(
            r,
            t + 3,
            a + s * 0.2 + 3,
            l - 6,
            s * 0.52 - 6,
            c.next() < 0.5 ? `#4a5a66` : `#6a7884`,
          ),
          (r.fillStyle = `#b8bcc0`),
          r.fillRect(t + l / 2 - 1, a + s * 0.2, 2, s * 0.52));
      }
      (F(r, i + o * 0.06, a + s * 0.76, o * 0.88, s * 0.05, `#7a7a78`),
        c.next() < 0.6 &&
          F(r, i + o * 0.72, a + s * 0.8, o * 0.16, s * 0.14, `#e4e4e0`));
    } else {
      F(r, i, a, o, s, [`#e8e6e0`, `#dcdad2`, `#f0ece4`][e % 3]);
      for (let e = 0; e < 3; e++) {
        let t = i + o * (0.06 + e * 0.31);
        (F(r, t, a + s * 0.18, o * 0.26, s * 0.56, `#3a4650`),
          (r.fillStyle = `rgba(255,255,255,0.12)`),
          r.fillRect(t, a + s * 0.18, o * 0.13, s * 0.56));
      }
      F(r, i, a + s * 0.84, o, s * 0.04, `#b8b6b0`);
    }
  };
}
function Ue(e, t = `#d01c14`) {
  return (n, r, i, a, o) => {
    (P(n, r, i, a, o, t, 0.8),
      (n.globalAlpha = 1),
      (n.fillStyle = `rgba(0,0,0,0.22)`));
    for (let e = 1; e < 8; e++) n.fillRect(r, i + (o * e) / 8, a, 1);
    ie(
      n,
      V(e),
      r + a / 2,
      i + o * 0.14,
      i + o * 0.86,
      a * 0.44,
      `#1a0a08`,
      N(),
      `900`,
    );
  };
}
