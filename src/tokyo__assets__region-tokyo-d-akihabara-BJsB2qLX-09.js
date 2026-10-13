// tokyo__assets__region-tokyo-d-akihabara-BJsB2qLX 09 — math
// Lines 2372-2667 of readable/tokyo__assets__region-tokyo-d-akihabara-BJsB2qLX.pretty.js (statement-aligned).
function Ke(e, t, n, r, i, a, o) {
  let s = i.white(),
    c = t.poi && t.poi.dir === (a ? t.dir : t.corner) ? t.poi : null,
    l = 3.1999999999999997;
  (e.setMaterial(0.25, 0.2, 0.16, 17), A(e, 16053492));
  let u = Math.max(1, Math.round(r.L / 3.2));
  for (let n = 0; n < u; n++) {
    let o = (r.L * n) / u,
      s = (r.L * (n + 1)) / u,
      d = (o + s) / 2,
      f = c && Math.abs(d - c.at) <= c.width / 2 + 0.2 ? c.kind : t.shop,
      [p, m] = V(r, o + 0.1, -0.35),
      [h, g] = V(r, s - 0.1, -0.35),
      _ = ((n + +!a) % 2) / 2,
      v = _ + 1 / 2;
    _e(e, p, m, h, g, 0, l, i.uv(`shop:${f}`), _, v, 0, 1);
  }
  (e.setMaterial(0.85, 0, 0, 0), A(e, n.wall, 0.8));
  {
    let [t, n] = V(r, 0, 0),
      [i, a] = V(r, 0, -0.35);
    j(e, i, a, t, n, 0, l, s);
    let [o, c] = V(r, r.L, 0),
      [u, d] = V(r, r.L, -0.35);
    j(e, o, c, u, d, 0, l, s);
  }
  (e.setMaterial(0.6, 0.4, 0, 0), A(e, 3816512));
  for (let t = 0; t <= u; t++) {
    let n = (r.L * t) / u;
    H(e, r, Math.max(0, n - 0.1), Math.min(r.L, n + 0.1), 0, l, 0, s);
  }
  (e.setMaterial(0.85, 0, 0, 0), A(e, 14211284));
  let [d, f] = V(r, 0, -0.35),
    [p, m] = V(r, r.L, 0);
  if (
    (ve(
      e,
      Math.min(d, p),
      Math.min(f, m),
      Math.max(d, p),
      Math.max(f, m),
      l,
      s,
      !0,
    ),
    e.setMaterial(0.5, 0, 0.3, W),
    A(e, 16777215),
    H(e, r, 0, r.L, l, L, 0.05, i.uv(U(Ue(t, n)))),
    !n.closedFront && o.next() < 0.35 && r.L < 12)
  ) {
    (e.setMaterial(0.8, 0, 0, 0),
      A(e, [12589080, 1723048, 2787914, 15763968][Math.floor(o.next() * 4)]));
    let [t, n] = V(r, 0.1, 0),
      [i, a] = V(r, r.L - 0.1, 0),
      [c, l] = V(r, 0.1, 1.2),
      [u, d] = V(r, r.L - 0.1, 1.2);
    e.quad(
      c,
      2.6499999999999995,
      l,
      u,
      2.6499999999999995,
      d,
      i,
      3.15,
      a,
      t,
      3.15,
      n,
      s.u0,
      s.v0,
      s.u1,
      s.v1,
    );
  }
}
function qe(e) {
  for (let t of [0, 1, 2]) e.need(`banner:${t}`, 64, 192, Je(t));
  (e.need(`kyakuhiki`, 96, 128, Ye),
    e.need(`rojo`, 96, 128, Xe),
    e.need(`gachafront`, 128, 160, Ze),
    e.need(`cranefront`, 96, 192, Qe),
    e.need(`aboard:maid`, 96, 128, $e(`maid`)),
    e.need(`aboard:junk`, 96, 128, $e(`junk`)),
    e.need(`junkbox`, 128, 64, et),
    e.need(`vendcan`, 96, 192, tt),
    e.need(`hokoten`, 256, 160, nt),
    e.need(`bridgeplate`, 128, 48, rt),
    e.need(`shop:junk-out`, 320, 160, je(`junk`, 7)));
}
function Je(e) {
  return (t, n, r, i, a) => {
    if (
      (E(t, n, r, i, a, [`#e60012`, `#1d2088`, `#ff8a00`][e % 3], 0.62),
      D(t, n, r, i, a * 0.06, `#ffffff`),
      D(t, n, r + a * 0.94, i, a * 0.06, `#ffffff`),
      e === 2)
    ) {
      S(
        t,
        N(`akiba.street.welcome`),
        n + i / 2,
        r + a * 0.1,
        r + a * 0.9,
        i * 0.62,
        `#ffffff`,
        f(),
        `900`,
      );
      return;
    }
    (S(
      t,
      N(`akiba.street.denkigai`),
      n + i * 0.42,
      r + a * 0.1,
      r + a * 0.9,
      i * 0.56,
      `#ffffff`,
      f(),
      `900`,
    ),
      t.save(),
      t.translate(n + i * 0.84, r + a / 2),
      t.rotate(Math.PI / 2),
      I(
        t,
        N(`akiba.street.akihabara`),
        0,
        0,
        a * 0.8,
        i * 0.22,
        `#ffe100`,
        `900`,
      ),
      t.restore());
  };
}
function Ye(e, t, n, r, i) {
  (D(e, t, n, r, i, `#ffe100`),
    D(e, t + r * 0.05, n + i * 0.04, r * 0.9, i * 0.36, `#e60012`),
    I(
      e,
      N(`akiba.street.kyakuhiki`),
      t + r / 2,
      n + i * 0.22,
      r * 0.84,
      i * 0.26,
      `#ffffff`,
      `900`,
    ),
    (e.globalAlpha = 1),
    (e.strokeStyle = `#e60012`),
    (e.lineWidth = r * 0.05),
    e.beginPath(),
    e.arc(t + r * 0.28, n + i * 0.6, r * 0.16, 0, Math.PI * 2),
    e.moveTo(t + r * 0.17, n + i * 0.69),
    e.lineTo(t + r * 0.39, n + i * 0.51),
    e.stroke(),
    (e.fillStyle = `#202020`),
    e.beginPath(),
    e.arc(t + r * 0.28, n + i * 0.56, r * 0.04, 0, Math.PI * 2),
    e.fill(),
    e.fillRect(t + r * 0.25, n + i * 0.6, r * 0.06, i * 0.08),
    I(
      e,
      N(`akiba.street.kyakuhiki-sub`),
      t + r * 0.7,
      n + i * 0.6,
      r * 0.52,
      i * 0.1,
      `#202020`,
      `800`,
    ),
    I(
      e,
      N(`akiba.street.kyakuhiki-ward`),
      t + r / 2,
      n + i * 0.88,
      r * 0.5,
      i * 0.11,
      `#202020`,
      `900`,
    ));
}
function Xe(e, t, n, r, i) {
  (D(e, t, n, r, i, `#ffffff`),
    D(e, t, n, r, i * 0.3, `#008a4a`),
    I(
      e,
      N(`common.safety.rojo-kinen`),
      t + r / 2,
      n + i * 0.15,
      r * 0.9,
      i * 0.2,
      `#ffffff`,
      `900`,
    ),
    (e.globalAlpha = 1),
    (e.strokeStyle = `#e60012`),
    (e.lineWidth = r * 0.05),
    e.beginPath(),
    e.arc(t + r / 2, n + i * 0.58, r * 0.2, 0, Math.PI * 2),
    e.moveTo(t + r * 0.36, n + i * 0.69),
    e.lineTo(t + r * 0.64, n + i * 0.47),
    e.stroke(),
    D(e, t + r * 0.36, n + i * 0.56, r * 0.24, i * 0.04, `#404040`),
    I(
      e,
      N(`akiba.street.kyakuhiki-ward`),
      t + r / 2,
      n + i * 0.9,
      r * 0.5,
      i * 0.1,
      `#202020`,
      `900`,
    ));
}
function Ze(e, n, i, a, o) {
  for (let s = 0; s < 2; s++) {
    let c = i + (o / 2) * s,
      l = o / 2,
      u = s ? `#ffd6e6` : `#f4f4f6`;
    (D(e, n + a * 0.04, c + l * 0.03, a * 0.92, l * 0.94, u),
      D(e, n + a * 0.12, c + l * 0.08, a * 0.76, l * 0.42, `#d8eef6`));
    let d = new t(r(`gf`, s));
    for (let t = 0; t < 12; t++)
      ((e.fillStyle = [
        `#ff4060`,
        `#40a0ff`,
        `#ffd040`,
        `#60d060`,
        `#ffffff`,
        `#c060ff`,
      ][t % 6]),
        e.beginPath(),
        e.arc(
          n + a * (0.2 + d.next() * 0.6),
          c + l * (0.18 + d.next() * 0.28),
          a * 0.07,
          0,
          Math.PI * 2,
        ),
        e.fill());
    (D(
      e,
      n + a * 0.12,
      c + l * 0.54,
      a * 0.76,
      l * 0.22,
      s ? `#3a8aff` : `#ff7a3a`,
    ),
      I(
        e,
        s ? `¥400` : `¥300`,
        n + a * 0.5,
        c + l * 0.65,
        a * 0.5,
        l * 0.14,
        `#ffffff`,
        `900`,
      ),
      (e.fillStyle = `#7a7a84`),
      e.beginPath(),
      e.arc(n + a * 0.5, c + l * 0.86, a * 0.09, 0, Math.PI * 2),
      e.fill());
  }
}
function Qe(e, n, r, i, a) {
  (D(e, n, r, i, a, `#ff2d87`),
    D(e, n + i * 0.08, r + a * 0.1, i * 0.84, a * 0.5, `#f8fcff`));
  let o = new t(77);
  for (let t = 0; t < 9; t++)
    ((e.fillStyle = [
      `#ffb0c8`,
      `#ffe080`,
      `#a0d8ff`,
      `#c8a0ff`,
      `#ffffff`,
      `#ff8060`,
    ][t % 6]),
      e.beginPath(),
      e.arc(
        n + i * (0.2 + o.next() * 0.6),
        r + a * (0.45 + o.next() * 0.12),
        i * 0.09,
        0,
        Math.PI * 2,
      ),
      e.fill());
  (D(e, n + i * 0.47, r + a * 0.1, i * 0.06, a * 0.12, `#c8c8d0`),
    D(e, n + i * 0.38, r + a * 0.21, i * 0.24, a * 0.025, `#c8c8d0`),
    D(e, n + i * 0.08, r + a * 0.64, i * 0.84, a * 0.1, `#202028`),
    I(e, `¥100`, n + i / 2, r + a * 0.69, i * 0.6, a * 0.07, `#ffe100`, `900`),
    D(e, n, r, i, a * 0.06, `#ffe100`));
}
