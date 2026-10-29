// tokyo/assets/region-tokyo-d-akihabara-UGh9Bzey 04 — fillstyle
// Lines 774-928 of readable/tokyo/assets/region-tokyo-d-akihabara-UGh9Bzey.pretty.js (statement-aligned).
function ke(e, r, i) {
  return (a, o, s, c, l) => {
    let u = new t(n(`akiba-wrap`, e)),
      d = [
        [`#1b2a6b`, `#5b8de0`, `#ffd34d`],
        [`#3a0d4f`, `#d94f9b`, `#ffe0f0`],
        [`#0d3b2e`, `#46c6a3`, `#f4ff8a`],
        [`#4a0e0e`, `#e05a2b`, `#ffe3a1`],
        [`#101820`, `#2a5fa8`, `#7ff0ff`],
      ],
      [f, p, m] = d[e % d.length],
      h = a.createLinearGradient(o, s, o + c * 0.3, s + l);
    (h.addColorStop(0, f),
      h.addColorStop(0.65, p),
      h.addColorStop(1, m),
      (a.globalAlpha = 1),
      (a.fillStyle = h),
      a.fillRect(o, s, c, l));
    for (let e = 0; e < 26; e++) {
      ((a.globalAlpha = 0.18 + u.next() * 0.25), (a.fillStyle = m));
      let e = o + u.next() * c,
        t = s + u.next() * l * 0.7;
      a.fillRect(
        e,
        t,
        c * (0.004 + u.next() * 0.01),
        l * (0.03 + u.next() * 0.1),
      );
    }
    a.globalAlpha = 1;
    let g = o + c * (0.5 + (u.next() - 0.5) * 0.2),
      _ = s + l * 0.36,
      v = c * 0.2,
      y = [`#2b2b3a`, `#f2c14e`, `#e86aa6`, `#4fb6e8`, `#f2f2f2`][e % 5];
    ((a.fillStyle = `#ffe6d5`),
      a.beginPath(),
      a.ellipse(g, _, v * 0.82, v, 0, 0, Math.PI * 2),
      a.fill(),
      (a.fillStyle = y),
      a.beginPath(),
      a.moveTo(g - v * 1.15, _ + v * 0.9));
    for (let e = 0; e <= 9; e++) {
      let t = Math.PI + (e / 9) * Math.PI,
        n = v * (1.05 + (e % 2) * 0.32);
      a.lineTo(g + Math.cos(t) * n, _ - v * 0.05 + Math.sin(t) * n);
    }
    (a.lineTo(g + v * 1.15, _ + v * 0.9),
      a.lineTo(g + v * 0.75, _ + v * 0.1),
      a.lineTo(g - v * 0.75, _ + v * 0.1),
      a.closePath(),
      a.fill());
    for (let t of [-1, 1])
      ((a.fillStyle = [`#3060c0`, `#c03070`, `#30a070`, `#c06020`, `#20a0c0`][
        e % 5
      ]),
        a.beginPath(),
        a.ellipse(
          g + t * v * 0.36,
          _ + v * 0.2,
          v * 0.17,
          v * 0.24,
          0,
          0,
          Math.PI * 2,
        ),
        a.fill(),
        (a.fillStyle = `#ffffff`),
        a.beginPath(),
        a.arc(
          g + t * v * 0.36 - v * 0.06,
          _ + v * 0.1,
          v * 0.06,
          0,
          Math.PI * 2,
        ),
        a.fill());
    ((a.fillStyle = [`#e8e8f0`, `#1a1a2a`, `#c02838`, `#2a4a8a`, `#f0d040`][
      e % 5
    ]),
      a.beginPath(),
      a.moveTo(g - v * 2, s + l * 0.78),
      a.quadraticCurveTo(g, _ + v * 0.9, g + v * 2, s + l * 0.78),
      a.lineTo(g + v * 2.2, s + l),
      a.lineTo(g - v * 2.2, s + l),
      a.fill(),
      e % 2 == 0 &&
        (a.save(),
        a.translate(g + v * 0.8, _ + v * 2.2),
        a.rotate(-0.7),
        (a.fillStyle = `#e8f4ff`),
        a.fillRect(-c * 0.01, -l * 0.32, c * 0.025, l * 0.5),
        (a.fillStyle = `#806020`),
        a.fillRect(-c * 0.03, l * 0.16, c * 0.06, l * 0.015),
        a.restore()),
      we(
        a,
        N(r),
        o + c / 2,
        s + l * 0.84,
        c * 0.92,
        l * 0.07,
        `#ffffff`,
        `#101010`,
      ),
      D(a, o + c * 0.62, s + l * 0.92, c * 0.34, l * 0.05, `#e60012`),
      I(
        a,
        N(i),
        o + c * 0.79,
        s + l * 0.945,
        c * 0.32,
        l * 0.035,
        `#ffffff`,
        `800`,
      ));
  };
}
function Ae(e, n) {
  return (r, i, a, o, s) => {
    let c = new t(n),
      l = [`#0a1a4a`, `#3a0a3a`, `#0a3a2a`, `#2a1a0a`];
    D(r, i, a, o, s, l[n % l.length]);
    for (let e = 0; e < 4; e++) {
      let t = o * 0.2,
        l = i + o * 0.04 + e * o * 0.24;
      (D(
        r,
        l,
        a + s * 0.42,
        t,
        s * 0.46,
        [`#e8e8f0`, `#ffcf30`, `#ff5a8a`, `#40d0ff`][(e + n) % 4],
      ),
        D(
          r,
          l + t * 0.15,
          a + s * 0.5,
          t * 0.7,
          s * 0.26,
          [`#30304a`, `#a03030`, `#304a90`, `#208050`][(e * 3 + n) % 4],
        ),
        I(
          r,
          `¥${(c.int(3, 98) * 100).toLocaleString(`en-US`)}`,
          l + t / 2,
          a + s * 0.82,
          t * 0.9,
          s * 0.1,
          `#101010`,
          `900`,
        ));
    }
    I(r, N(e), i + o / 2, a + s * 0.2, o * 0.92, s * 0.26, `#ffffff`, `900`);
  };
}
