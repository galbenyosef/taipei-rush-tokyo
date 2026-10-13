// tokyo__assets__region-tokyo-d-kanda-CYJun2NB 03 — next
// Lines 676-816 of readable/tokyo__assets__region-tokyo-d-kanda-CYJun2NB.pretty.js (statement-aligned).
function De(e, t = !0) {
  return (n, r, i, a, o) => {
    (B(n, r, i, a, o, `#6a4a2a`),
      B(
        n,
        r + a * 0.06,
        i + o * 0.05,
        a * 0.88,
        o * 0.9,
        t ? `#1e2a24` : `#f4f2ec`,
      ));
    let s = e.length;
    e.forEach((e, c) => {
      let l = t
        ? [`#ffffff`, `#ffe066`, `#ff9a9a`, `#9adfff`][c % 4]
        : [`#c01818`, `#1a1a1a`, `#1a4aa8`][c % 3];
      H(
        n,
        z(e),
        r + a / 2,
        i + o * (0.14 + (0.78 * (c + 0.5)) / s),
        a * 0.8,
        (o * 0.7) / s,
        l,
        `800`,
      );
    });
  };
}
function Oe(e, t, n, r, i, a, o) {
  B(e, t, n, r, i, a);
  let s = be(`wood`, a, Math.round(r), Math.round(i));
  e.globalAlpha = 0.18;
  for (let a = 0; a < 40; a++)
    ((e.fillStyle = s.next() < 0.5 ? `#000000` : `#ffffff`),
      o === `h`
        ? e.fillRect(t, n + s.next() * i, r, 1 + s.next() * 1.5)
        : e.fillRect(t + s.next() * r, n, 1 + s.next() * 1.5, i));
  e.globalAlpha = 1;
}
function ke(e) {
  return (t, n, r, i, a) => {
    Oe(t, n, r, i, a, e, `v`);
    for (let e = n; e < n + i; e += i / 8) B(t, e, r, 2, a, `rgba(0,0,0,0.45)`);
  };
}
function Ae(e, t = `#a87e4a`, n = 24) {
  return (r, i, a, o, s) => {
    V(r, i, a, o, s, t, 1);
    let c = r.createLinearGradient(0, a, 0, a + s);
    (c.addColorStop(0, `rgba(255,230,180,0.25)`),
      c.addColorStop(1, `rgba(60,30,10,0.45)`),
      (r.fillStyle = c),
      r.fillRect(i, a, o, s));
    let l = o / n;
    for (let t = 0; t < n; t++) V(r, i + t * l, a, l * 0.58, s, e, 0);
    (V(r, i, a, o, s * 0.05, e, 0),
      V(r, i, a + s * 0.48, o, s * 0.03, e, 0),
      V(r, i, a + s * 0.95, o, s * 0.05, e, 0));
  };
}
function je(e = `#5c6064`) {
  return (t, n, r, i, a) => {
    B(t, n, r, i, a, e);
    for (let e = r; e < r + a; e += a / 8)
      B(t, n, e, i, a * 0.02, `rgba(0,0,0,0.35)`);
    for (let e = n; e < n + i; e += i / 12)
      (B(t, e, r, i / 24, a, `rgba(255,255,255,0.08)`),
        B(t, e + i / 24, r, 1.5, a, `rgba(0,0,0,0.3)`));
  };
}
function Me(e, t) {
  return (n, r, i, a, o) => {
    let s = be(`wall`, e, t);
    if ((B(n, r, i, a, o, t), e === `tile`)) {
      for (let e = i; e < i + o; e += 5) B(n, r, e, a, 1, `rgba(0,0,0,0.10)`);
      for (let e = i, t = 0; e < i + o; e += 5, t++)
        for (let i = r + (t % 2) * 6; i < r + a; i += 12)
          B(n, i, e, 1, 5, `rgba(0,0,0,0.07)`);
    } else if (e === `alc`)
      for (let e = i; e < i + o; e += o / 6)
        B(n, r, e, a, 1.5, `rgba(0,0,0,0.12)`);
    else if (e === `brick`)
      for (let e = i, t = 0; e < i + o; e += 6, t++) {
        B(n, r, e + 5, a, 1, `rgba(220,210,190,0.8)`);
        for (let i = r + (t % 2 ? 0 : 7); i < r + a; i += 14)
          B(n, i, e, 1, 5, `rgba(220,210,190,0.8)`);
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
function Ne(e, t, n = `#ffffff`) {
  return (r, i, a, o, s) => {
    let c = o / 4;
    B(r, i, a, o, s, `#2a2c30`);
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
          B(r, n, e, l, u * 0.02, `rgba(0,0,0,0.22)`);
      B(r, n + l * 0.1, o, l * 0.1, u, `rgba(255,255,255,0.14)`);
    }
    t && H(r, t, i + o / 2, a + s * 0.48, o * 0.48, s * 0.3, n, `900`);
  };
}
