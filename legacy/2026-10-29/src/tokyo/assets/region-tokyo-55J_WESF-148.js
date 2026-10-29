// tokyo/assets/region-tokyo-55J_WESF 148 — fillstyle
// Lines 62506-62811 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function ype(e, t, n, r, i, a, o) {
  let s = Ix(4201),
    c = e.createLinearGradient(t, n, t, n + 352);
  (c.addColorStop(0, `#8fb0f0`),
    c.addColorStop(0.35, `#b796e6`),
    c.addColorStop(0.7, `#e49ad2`),
    c.addColorStop(1, `#f6c0a8`),
    (e.fillStyle = c),
    e.fillRect(t, n, 256, 352));
  for (let r = 0; r < 18; r++)
    ((e.fillStyle = `rgba(255,255,255,${(0.35 + s() * 0.4).toFixed(2)})`),
      e.beginPath(),
      e.ellipse(
        t + s() * 256,
        n + s() * 44 * 5,
        12 + s() * 30,
        5 + s() * 9,
        0,
        0,
        Math.PI * 2,
      ),
      e.fill());
  for (let r = 0; r < 26; r++) {
    let r = t + s() * 256,
      i = 8 + s() * 18,
      a = 30 + s() * 90,
      o = n + 352 - a + s() * 20;
    (e.save(),
      e.translate(r, o + a),
      e.rotate((s() - 0.5) * 0.5),
      (e.fillStyle = `hsl(${Math.floor(200 + s() * 140)},45%,${55 + Math.floor(s() * 25)}%)`),
      e.fillRect(-i / 2, -a, i, a));
    for (let t = 0; t < 5; t++)
      ((e.fillStyle = `hsl(${Math.floor(s() * 360)},85%,60%)`),
        e.fillRect(-i / 2 + 1, -a + 4 + (a / 5) * t, i - 2, 3));
    e.restore();
  }
  (Vx(e, t + 190, n + 105.6, 34, `#ff9ac8`, `#7a4ad8`, -0.4, `#5ac8ff`),
    Hx(e, t + 190, n + 105.6, 34, `#3a4a9a`, `#ffffff`),
    Vx(e, t + 62, n + 57.2, 24, `#7ad0ff`, `#e04a6a`, 0.5),
    Hx(e, t + 62, n + 57.2, 24, `#f2f2f2`, `#e04a6a`),
    Vx(e, t + 120, n + 44 * 4.6, 20, `#4a3a5a`, `#e0a020`, 0.2, `#ffd23a`),
    (e.fillStyle = `#f4f6fa`),
    e.beginPath(),
    e.moveTo(t + 10, n + 184.8),
    e.lineTo(t + 120, n + 149.6),
    e.lineTo(t + 150, n + 171.6),
    e.lineTo(t + 30, n + 44 * 4.9),
    e.closePath(),
    e.fill(),
    (e.fillStyle = `#e04a4a`),
    e.fillRect(t + 40, n + 44 * 4.1, 70, 4),
    (e.fillStyle = `#3a6ad8`),
    e.fillRect(t + 50, n + 187, 50, 3),
    Ux(e, t, n, 256, 352, 4202, 70));
  for (let r = 0; r < 8; r++) {
    let i = n + r * 44,
      a = e.createLinearGradient(t, i, t, i + 44);
    (a.addColorStop(0, `rgba(255,255,255,0.20)`),
      a.addColorStop(0.5, `rgba(255,255,255,0.0)`),
      a.addColorStop(1, `rgba(40,40,70,0.12)`),
      (e.fillStyle = a),
      e.fillRect(t, i, 256, 44),
      (e.fillStyle = `rgba(70,74,84,0.85)`),
      e.fillRect(t, i, 256, 1.2));
  }
  e.fillStyle = `rgba(214,218,224,0.95)`;
  for (let r = 0; r <= 256; r += 19.5) e.fillRect(t + r - 0.8, n, 1.6, 352);
  a(t, n, 256, 352, 0.85);
  let l = (e) => n + (10 - e) * 44;
  {
    let n = l(5);
    ((e.fillStyle = `#ffffff`),
      e.fillRect(t + 2, n + 3, 86, 38),
      (e.fillStyle = `#ff7a1a`),
      e.fillRect(t + 2, n + 3, 86, 10),
      zx(
        e,
        Lx(`floor.figure`),
        t + 45,
        n + 8,
        8,
        Bx(900, o.sans),
        `#ffffff`,
        82,
      ),
      Vx(e, t + 20, n + 26, 9, `#5ac0ff`, `#3a6ad8`, 0.3),
      Vx(e, t + 44, n + 26, 9, `#ff9a6a`, `#2a8a4a`, -0.2),
      zx(e, Lx(`floor.f5`), t + 72, n + 28, 13, Bx(900, o.sans), `#ff7a1a`, 30),
      a(t + 2, n + 3, 86, 38, 1));
  }
  {
    let n = l(4);
    ((e.fillStyle = `#121214`),
      e.fillRect(t + 2, n + 2, 88, 40),
      zx(
        e,
        Lx(`floor.comic`),
        t + 45,
        n + 13,
        12,
        Bx(900, o.sans),
        `#ffffff`,
        82,
      ),
      zx(
        e,
        Lx(`floor.honkan`),
        t + 45,
        n + 30,
        10,
        Bx(800, o.sans),
        `#f2f2f2`,
        80,
      ),
      (e.fillStyle = `rgba(255,255,255,0.7)`));
    for (let r = 1; r < 5; r++) e.fillRect(t + (90 * r) / 5, n + 2, 1, 40);
    a(t + 2, n + 2, 88, 40, 1);
  }
  {
    let n = l(3),
      r = 86 / 3;
    ((e.fillStyle = `#ffd6e8`),
      e.fillRect(t + 2, n + 2, 27.666666666666668, 40),
      Vx(e, t + 2 + r / 2, n + 15, 8, `#f2e08a`, `#5a8ae0`, 0, `#ff6aa0`),
      Hx(e, t + 2 + r / 2, n + 15, 8, `#ff7ab0`, `#ffffff`),
      zx(
        e,
        Lx(`floor.doll`),
        t + 2 + r / 2,
        n + 44 - 7,
        6,
        Bx(800, o.sans),
        `#d0306a`,
        25.666666666666668,
      ),
      (e.fillStyle = `#1c3c9a`),
      e.fillRect(t + 2 + r, n + 2, 27.666666666666668, 40),
      (e.fillStyle = `#ffe23a`),
      e.fillRect(t + 4 + r, n + 8, 23.666666666666668, 12),
      zx(
        e,
        Lx(`floor.cardgame`),
        t + 2 + r * 1.5,
        n + 14,
        6,
        Bx(900, o.sans),
        `#1c3c9a`,
        22.666666666666668,
      ),
      zx(
        e,
        Lx(`floor.hobby`),
        t + 2 + r * 1.5,
        n + 30,
        6,
        Bx(800, o.sans),
        `#ffffff`,
        24.666666666666668,
      ),
      (e.fillStyle = `#141414`),
      e.fillRect(t + 2 + r * 2, n + 2, 27.666666666666668, 40),
      (e.fillStyle = `#e01a22`),
      e.fillRect(t + 4 + r * 2, n + 22, 23.666666666666668, 14),
      zx(
        e,
        Lx(`floor.buy`),
        t + 2 + r * 2.5,
        n + 29,
        8,
        Bx(900, o.sans),
        `#ffffff`,
        22.666666666666668,
      ),
      zx(
        e,
        Lx(`floor.figure-short`),
        t + 2 + r * 2.5,
        n + 12,
        6,
        Bx(800, o.sans),
        `#ffffff`,
        24.666666666666668,
      ),
      a(t + 2, n + 2, 88, 40, 1));
  }
  {
    let n = t + Fx[0],
      r = Fx[1] - Fx[0],
      i = l(4),
      s = e.createLinearGradient(n, i, n, i + 88);
    (s.addColorStop(0, `#7ec4ff`),
      s.addColorStop(0.6, `#d8f0ff`),
      s.addColorStop(0.61, `#7ccf5a`),
      s.addColorStop(1, `#3f9a3a`),
      (e.fillStyle = s),
      e.fillRect(n, i, r * 0.58, 88));
    let c = [
      [`#c8743a`, `#3a6ad8`, `#2a3a8a`],
      [`#2a2a34`, `#d04040`, `#f2f2f2`],
      [`#e8e0f0`, `#8a5ad8`, `#3a3a5a`],
      [`#f2c84a`, `#2a9a5a`, `#d84a4a`],
      [`#8a4a2a`, `#e08a20`, `#2a5a3a`],
    ];
    for (let t = 0; t < 5; t++) {
      let r = n + 14 + t * 17 + (t % 2) * 4,
        a = i + 26 + (t % 2) * 10 - (t === 2 ? 8 : 0),
        o = 9 + (t === 2 ? 3 : 0);
      (Hx(e, r, a, o, c[t][2], `#ffffff`),
        Vx(
          e,
          r,
          a,
          o,
          c[t][0],
          c[t][1],
          (t - 2) * 0.2,
          t % 2 ? `#ff5a8a` : void 0,
        ));
    }
    Ux(e, n, i, r * 0.58, 44, 4203, 12);
    let u = n + r * 0.58,
      d = r * 0.42;
    ((e.fillStyle = `#ffffff`),
      e.fillRect(u, i, d, 88),
      (e.fillStyle = `#2a64d8`),
      e.fillRect(u + 4, i + 5, d * 0.6, 11),
      zx(
        e,
        Lx(`bb.tag`),
        u + 4 + d * 0.3,
        i + 10.5,
        8,
        Bx(900, o.sans),
        `#ffffff`,
        d * 0.6 - 4,
      ),
      zx(
        e,
        Rx(`bb.latin`),
        u + d / 2,
        i + 27,
        12,
        Bx(900, o.sans),
        `#1d3c8c`,
        d - 8,
      ),
      zx(
        e,
        Lx(`bb.sub`),
        u + d / 2,
        i + 42,
        8,
        Bx(800, o.sans),
        `#d0202a`,
        d - 8,
      ));
    for (let t = 0; t < 3; t++)
      ((e.fillStyle = [`#9ad0ff`, `#ffc0d0`, `#b8e8a0`][t]),
        e.fillRect(u + 4 + (t * (d - 8)) / 3, i + 54, (d - 14) / 3, 26),
        Vx(e, u + 4 + ((t + 0.5) * (d - 8)) / 3, i + 66, 6, c[t][0], c[t][1]));
    ((e.fillStyle = `rgba(40,40,40,0.5)`),
      e.fillRect(n, i, r, 2),
      a(n, i, r, 88, 0.9));
  }
  {
    let s = t + 256,
      c = r - 256;
    ((e.fillStyle = `#fff4f8`), e.fillRect(s, n, c, 275));
    let l = [`#2a5ad8`, `#f2c230`, `#3aa04a`, `#e8303a`];
    for (let t = 0; t < 4; t++)
      ((e.fillStyle = l[t]), e.fillRect(s + 4 + t * 9, n + 6, 8, 34));
    (Vx(e, s + 28, n + 92, 15, `#f7e3a0`, `#4a7ae0`, 0.1, `#ff6aa0`),
      (e.fillStyle = `#ff9ac8`),
      e.beginPath(),
      e.moveTo(s + 22, n + 108),
      e.lineTo(s + 6, n + 190),
      e.lineTo(s + 52, n + 190),
      e.lineTo(s + 36, n + 108),
      e.closePath(),
      e.fill(),
      (e.fillStyle = `#ffffff`));
    for (let t = 0; t < 6; t++) e.fillRect(s + 6, n + 150 + t * 7, 46, 2);
    let u = [...Lx(`side.doll`)];
    for (let t = 0; t < u.length; t++)
      zx(e, u[t], s + 54, n + 60 + t * 12, 10, Bx(900, o.sans), `#d0306a`, 12);
    ((e.fillStyle = `#e8306a`),
      e.beginPath(),
      e.arc(s + 46, n + 238, 12, 0, Math.PI * 2),
      e.fill(),
      zx(
        e,
        Lx(`side.floor`),
        s + 46,
        n + 238,
        11,
        Bx(900, o.sans),
        `#ffffff`,
        20,
      ),
      a(s, n, c, 275, 0.6),
      (e.fillStyle = `#eef0f0`),
      e.fillRect(s, n + 275, c, i - 275),
      a(s, n + 275, c, i - 275, 0.2));
  }
}
