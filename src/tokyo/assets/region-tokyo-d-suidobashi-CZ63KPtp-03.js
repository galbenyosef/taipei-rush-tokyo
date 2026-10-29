// tokyo/assets/region-tokyo-d-suidobashi-CZ63KPtp 03 — next
// Lines 674-764 of readable/tokyo/assets/region-tokyo-d-suidobashi-CZ63KPtp.pretty.js (statement-aligned).
function Se(e, t) {
  return (n, r, i, a, o) => {
    let s = ue(`wall`, e, t);
    if ((z(n, r, i, a, o, t), e === `tile`)) {
      for (let e = i; e < i + o; e += 5) z(n, r, e, a, 1, `rgba(0,0,0,0.10)`);
      for (let e = i, t = 0; e < i + o; e += 5, t++)
        for (let i = r + (t % 2) * 6; i < r + a; i += 12)
          z(n, i, e, 1, 5, `rgba(0,0,0,0.07)`);
    } else if (e === `alc`)
      for (let e = i; e < i + o; e += o / 6)
        z(n, r, e, a, 1.5, `rgba(0,0,0,0.12)`);
    else if (e === `ivy`) {
      for (let e = i, t = 0; e < i + o; e += 6, t++)
        z(n, r, e + 5, a, 1, `rgba(200,180,160,0.6)`);
      Me(n, r, i, a, o, s, 0.86);
    } else if (e === `boards`) {
      for (let e = i; e < i + o; e += 5)
        (z(n, r, e, a, 1.2, `rgba(0,0,0,0.32)`),
          z(n, r, e + 1.2, a, 0.8, `rgba(255,255,255,0.06)`));
      for (let e = r + 20; e < r + a; e += 21)
        z(n, e, i, 1.5, o, `rgba(0,0,0,0.25)`);
    } else if (e === `mortar`) {
      n.globalAlpha = 0.08;
      for (let e = 0; e < 120; e++)
        ((n.fillStyle = s.next() < 0.5 ? `#000000` : `#ffffff`),
          n.fillRect(
            r + s.next() * a,
            i + s.next() * o,
            1 + s.next() * 3,
            1 + s.next() * 3,
          ));
      n.globalAlpha = 1;
    } else if (e === `brick`)
      for (let e = i, t = 0; e < i + o; e += 6, t++) {
        z(n, r, e + 5, a, 1, `rgba(220,210,190,0.8)`);
        for (let i = r + (t % 2 ? 0 : 7); i < r + a; i += 14)
          z(n, i, e, 1, 5, `rgba(220,210,190,0.8)`);
      }
    n.globalAlpha = 0.06;
    for (let e = 0; e < 18; e++)
      ((n.fillStyle = `#000000`),
        n.fillRect(
          r + s.next() * a,
          i + s.next() * o * 0.6,
          1 + s.next() * 2,
          o * (0.1 + s.next() * 0.4),
        ));
    n.globalAlpha = 1;
  };
}
function Ce(e, t, n = `#ffffff`) {
  return (r, i, a, o, s) => {
    let c = o / 4;
    z(r, i, a, o, s, `#2a2c30`);
    for (let t = 0; t < 4; t++) {
      let n = i + t * c + c * 0.07,
        o = a + s * 0.07,
        l = c * 0.86,
        u = s * 0.86,
        d =
          e === `dark`
            ? `#55606c`
            : e === `office`
              ? `#9aa6b0`
              : e === `warm`
                ? `#e8d4a8`
                : `#c4c8c4`,
        f =
          e === `dark`
            ? `#1c242c`
            : e === `office`
              ? `#4a545c`
              : e === `warm`
                ? `#a07848`
                : `#80847f`,
        p = r.createLinearGradient(0, o, 0, o + u);
      if (
        (p.addColorStop(0, d),
        p.addColorStop(1, f),
        (r.globalAlpha = 1),
        (r.fillStyle = p),
        r.fillRect(n, o, l, u),
        e === `office`)
      )
        for (let e = o; e < o + u; e += u / 10)
          z(r, n, e, l, u * 0.02, `rgba(0,0,0,0.22)`);
      z(r, n + l * 0.1, o, l * 0.1, u, `rgba(255,255,255,0.14)`);
    }
    t && V(r, t, i + o / 2, a + s * 0.48, o * 0.48, s * 0.3, n, `900`);
  };
}
