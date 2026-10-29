// tokyo/assets/region-tokyo-A7LxHjud 147 — fillstyle
// Lines 62363-62596 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function Ape(e, t, n, r, i, a, o) {
  let s = zx(4101),
    c = 27.6 / 16.7;
  ((e.fillStyle = `#efbe0e`), e.fillRect(t, n, 376, 80));
  for (let r = 0; r < 376; r += 6)
    ((e.fillStyle = `rgba(150,104,0,0.55)`),
      e.fillRect(t + r, n, 1.6, 80),
      (e.fillStyle = `rgba(255,240,150,0.45)`),
      e.fillRect(t + r + 2, n, 1, 80));
  ((e.fillStyle = `#d9a300`),
    e.fillRect(t, n, 376, 3),
    e.fillRect(t, n + 80 - 3, 376, 3),
    a(t, n, 376, 80, 0.1));
  for (let r of [t + 2, t + 376 - 16]) {
    ((e.fillStyle = `#ffd21a`),
      e.fillRect(r, n + 3, 14, 74),
      (e.fillStyle = `rgba(255,250,200,0.9)`));
    for (let t = n + 6; t < n + 80 - 5; t += 5)
      for (let n = r + 2; n < r + 13; n += 4) e.fillRect(n, t, 1.6, 1.6);
    a(r, n + 3, 14, 74, 1);
  }
  let l = Bx(`band.lead`),
    u = Bx(`band.name`),
    d = Bx(`band.place`),
    f = `#1546c8`,
    p = n + 44,
    m = (t, n, r, i, a, s) => {
      (e.save(),
        e.translate(n, p),
        e.scale(c, 1),
        (e.font = `${s} ${r}px ${o.sans}`),
        (e.textAlign = `center`),
        (e.textBaseline = `middle`),
        (e.lineJoin = `round`),
        (e.strokeStyle = `rgba(255,255,255,0.85)`),
        (e.lineWidth = r * 0.1),
        e.strokeText(t, 0, 0, a / c),
        (e.fillStyle = i),
        e.fillText(t, 0, 0, a / c),
        e.restore());
    };
  m(l, t + 47, 21, f, 63.92, 800);
  let h = t + 376 * 0.225,
    g = t + 306.44,
    _ = [...u],
    v = (g - h) / _.length;
  for (let t = 0; t < _.length; t++) {
    let n = _[t],
      r = h + v * (t + 0.5),
      i = n === `ビ` ? `ヒ` : n === `ジ` ? `シ` : n;
    if ((m(i, r, 50, `#e01a1f`, v * 1.02, 900), i !== n)) {
      e.fillStyle = `#ffffff`;
      for (let t of [0, 1])
        (e.beginPath(),
          e.arc(
            r + v * (0.24 + t * 0.2),
            p - 50 * 0.58 - t * 4,
            5.2,
            0,
            Math.PI * 2,
          ),
          e.fill());
      e.fillStyle = `#1f9a3a`;
      for (let t of [0, 1])
        (e.beginPath(),
          e.arc(
            r + v * (0.24 + t * 0.2),
            p - 50 * 0.58 - t * 4,
            4.2,
            0,
            Math.PI * 2,
          ),
          e.fill());
    }
  }
  (m(d, t + 336.52, 20, f, 376 * 0.14, 800),
    kpe(
      e,
      t + 18,
      n + 3,
      340,
      74,
      a,
      1,
      (e, t, n) =>
        (e > 150 && t < 110 && n < 110) ||
        (n > 140 && e < 110) ||
        (e > 225 && t > 225 && n > 200) ||
        (t > 120 && e < 90 && n < 110),
    ),
    (e.fillStyle = `rgba(255,255,255,0.18)`));
  for (let r = n + 8; r < n + 80 - 6; r += 4)
    for (let n = t + 82.72; n < t + 312.08; n += 4)
      s() < 0.5 && e.fillRect(n, r, 1, 1);
  let y = t + 376,
    b = r - 376,
    x = e.createLinearGradient(y, n, y + b, n + 80);
  (x.addColorStop(0, `#ff3d5e`),
    x.addColorStop(0.55, `#ffd0d8`),
    x.addColorStop(1, `#fff2f4`),
    (e.fillStyle = x),
    e.fillRect(y, n, b, 80),
    (e.fillStyle = `rgba(255,255,255,0.6)`));
  for (let t = 0; t < 6; t++) e.fillRect(y + 4 + t * 22, n + 4, 2, 72);
  (Wx(e, y + b * 0.3, n + 32, 17, `#f7d34a`, `#3a7be0`, 0.3, `#e23a5a`),
    Gx(e, y + b * 0.3, n + 32, 17, `#d23050`, `#ffffff`),
    (e.fillStyle = `#ffffff`),
    e.fillRect(y + b * 0.56, n + 8, b * 0.4, 40),
    (e.fillStyle = `#e01a3a`),
    e.fillRect(y + b * 0.56, n + 8, b * 0.4, 8));
  for (let t = 0; t < 4; t++)
    ((e.fillStyle = [`#ffcf3a`, `#56c2ff`, `#7ee08a`, `#ff8ac0`][t]),
      e.fillRect(
        y + b * 0.59 + (t % 2) * b * 0.18,
        n + 20 + Math.floor(t / 2) * 12,
        b * 0.15,
        9,
      ));
  ((e.fillStyle = `#c0102a`),
    e.fillRect(y, n + 80 - 20, b, 20),
    Hx(
      e,
      Bx(`led`),
      y + b / 2,
      n + 80 - 10,
      15,
      Ux(800, o.sans),
      `#ffffff`,
      b - 8,
    ),
    a(y, n, b, 80, 1));
  let S = n + 80,
    C = i - 80,
    w = 21.3 / 13.9,
    T = C * 0.3;
  ((e.fillStyle = `#f2efe8`), e.fillRect(t, S, r, T));
  let E = (t, n, r, i = !0) => {
    let o = zx(r),
      s = e.createLinearGradient(0, S + T, 0, S + C);
    (s.addColorStop(0, i ? `#ffe9c2` : `#eef4ff`),
      s.addColorStop(1, i ? `#d9b98a` : `#b9c6dc`),
      (e.fillStyle = s),
      e.fillRect(t, S + T, n, C - T));
    for (let r = 0; r < 3; r++) {
      let i = S + T + 6 + r * ((C - T - 8) / 3);
      for (let r = t + 2; r < t + n - 3; r += 3 + o() * 4)
        ((e.fillStyle = `hsl(${Math.floor(o() * 360)},70%,${50 + Math.floor(o() * 20)}%)`),
          e.fillRect(r, i, 2 + o() * 2, 5 + o() * 4));
      ((e.fillStyle = `rgba(80,60,40,0.5)`), e.fillRect(t, i + 10, n, 1));
    }
    e.fillStyle = `#c8ccd0`;
    for (let r = t; r <= t + n; r += 26) e.fillRect(r, S + T, 2, C - T);
    a(t, S + T, n, C - T, 1);
  };
  (E(t, 190, 4111),
    Hx(
      e,
      Vx(`gift.latin`),
      t + 34,
      S + T * 0.5,
      9,
      Ux(800, o.sans),
      `#e8601a`,
      60,
      w,
    ),
    Hx(
      e,
      Bx(`gift`),
      t + 120,
      S + T + 9,
      15,
      Ux(900, o.sans),
      `#f07a10`,
      120,
      w,
    ),
    a(t + 4, S + 2, 68, T - 4, 0.9),
    a(t + 60, S + T, 120, 17, 1),
    E(t + 190, 90, 4112, !1),
    (e.fillStyle = `#2d3138`),
    e.fillRect(t + 190 + 44, S + T, 2, C - T),
    (e.fillStyle = `#ffffff`),
    e.fillRect(t + 190, S, 90, T),
    Hx(
      e,
      Vx(`entrance`),
      t + 245,
      S + T * 0.52,
      8,
      Ux(800, o.sans),
      `#c8141e`,
      66,
      w,
    ),
    (e.fillStyle = `#1f3c8c`),
    e.fillRect(t + 193, S + 2, 14, T - 4),
    Hx(e, `ATM`, t + 200, S + T * 0.5, 6, Ux(700, o.sans), `#ffffff`, 12),
    a(t + 190, S, 90, T, 0.85),
    (e.fillStyle = `#ffffff`),
    e.fillRect(t + 280, S, r - 280, T),
    (e.fillStyle = `#e8262e`),
    e.fillRect(t + 280, S, 6, T),
    Hx(
      e,
      Bx(`cards`),
      t + 340,
      S + T * 0.52,
      10,
      Ux(900, o.sans),
      `#d0101a`,
      110,
      w,
    ),
    E(t + 280, r - 280, 4113, !1));
  for (let n = 0; n < 9; n++) {
    let r = t + 290 + n * 24 + s() * 4;
    ((e.fillStyle = [`#2a6ad8`, `#e0304a`, `#f2c230`, `#7a3ad0`, `#25a05a`][
      n % 5
    ]),
      e.fillRect(r, S + T + 4, 14, 20),
      (e.fillStyle = `#ffffff`),
      e.fillRect(r + 2, S + T + 6, 10, 9),
      Wx(
        e,
        r + 7,
        S + T + 11,
        3,
        [`#ff8ab0`, `#4a3a30`, `#f7e06a`, `#9ad0ff`][n % 4],
        `#2a60d0`,
      ));
  }
  a(t + 280, S, r - 280, T, 0.85);
}
