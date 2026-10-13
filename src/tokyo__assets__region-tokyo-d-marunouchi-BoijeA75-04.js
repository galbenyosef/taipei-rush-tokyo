// tokyo__assets__region-tokyo-d-marunouchi-BoijeA75 04 — math
// Lines 1012-1336 of readable/tokyo__assets__region-tokyo-d-marunouchi-BoijeA75.pretty.js (statement-aligned).
function Ue(e, t, n, r, i) {
  (F(e, t, n, r, i, `#5a1c22`),
    ae(
      e,
      u(`maru.museum.banner`),
      t + r / 2,
      n + i * 0.06,
      n + i * 0.7,
      r * 0.6,
      `#f4ece0`,
      b(),
      `600`,
    ),
    ae(
      e,
      u(`maru.museum.name`),
      t + r / 2,
      n + i * 0.74,
      n + i * 0.96,
      r * 0.42,
      `#e8d8b8`,
      b(),
      `500`,
    ));
}
function We(e, n, i, a, o) {
  let s = new t(r(`maru-masa-stone`));
  (E(e, s, n, i, a, o, z(9080448), a, o),
    ae(
      e,
      u(`maru.masakado.stone`),
      n + a / 2,
      i + o * 0.08,
      i + o * 0.92,
      a * 0.62,
      `#2e302a`,
      b(),
      `700`,
    ));
}
function Ge(e, t, n, r, i) {
  (F(e, t, n, r, i, `#3a3428`),
    F(e, t + 4, n + 4, r - 8, i - 8, `#f2eee2`),
    R(
      e,
      u(`maru.masakado.board`),
      t + r / 2,
      n + i * 0.16,
      r * 0.8,
      i * 0.14,
      `#2a2620`,
      b(),
      `700`,
    ));
  for (let a = 0; a < 7; a++)
    F(
      e,
      t + r * 0.1,
      n + i * (0.32 + a * 0.08),
      r * (0.8 - (a === 6 ? 0.3 : 0)),
      i * 0.025,
      `rgba(40,36,30,0.55)`,
    );
  R(
    e,
    u(`maru.masakado.manner`),
    t + r / 2,
    n + i * 0.92,
    r * 0.86,
    i * 0.07,
    `#5a2a20`,
    g(),
    `600`,
  );
}
function Ke(e, t, n, r, i) {
  (e.clearRect(t, n, r, i),
    I(e, t, n, r, i, `#dfe2dc`, 0.6),
    F(e, t, n, r, 3, `#6a5634`),
    F(e, t, n + i - 3, r, 3, `#6a5634`));
  let a = t + r / 2,
    o = n + i * 0.42,
    s = Math.min(r, i) * 0.16,
    c = s * 0.36;
  ((e.globalAlpha = 1),
    (e.fillStyle = `#9a9a8c`),
    e.beginPath(),
    e.arc(a, o, c * 1.25, 0, Math.PI * 2),
    e.fill());
  for (let t = 0; t < 8; t++) {
    let n = (t / 8) * Math.PI * 2;
    (e.beginPath(),
      e.arc(a + Math.cos(n) * s, o + Math.sin(n) * s, c, 0, Math.PI * 2),
      e.fill());
  }
}
function qe(e, t, n, r, i) {
  e.clearRect(t, n, r, i);
  for (let a = 0; a < 12; a++)
    F(e, t + (a * r) / 12 + 1, n, r / 12 - 3, i, a % 2 ? `#c8a478` : `#d2b084`);
  F(e, t, n, r, i * 0.06, `#b8946a`);
}
function Je(e, t, n, r, i) {
  (F(e, t, n, r, i, `#2f4a3e`),
    F(e, t + 3, n + 3, r - 6, i - 6, `#f4f2ea`),
    F(e, t + 3, n + 3, r - 6, i * 0.18, `#2f4a3e`),
    R(
      e,
      u(`maru.run.title`),
      t + r / 2,
      n + i * 0.12,
      r * 0.86,
      i * 0.09,
      `#ffffff`,
      g(),
      `700`,
    ));
  let a = t + r / 2,
    o = n + i * 0.42,
    s = r * 0.22;
  ((e.strokeStyle = `#2f6a50`),
    (e.lineWidth = r * 0.05),
    e.beginPath(),
    e.arc(a, o, s, -0.3, Math.PI * 1.6, !1),
    e.stroke(),
    (e.fillStyle = `#2f6a50`),
    e.beginPath());
  let c = a + Math.cos(-0.3) * s,
    l = o + Math.sin(-0.3) * s;
  (e.moveTo(c - r * 0.07, l + r * 0.02),
    e.lineTo(c + r * 0.07, l + r * 0.02),
    e.lineTo(c, l + r * 0.11),
    e.closePath(),
    e.fill(),
    R(
      e,
      u(`maru.run.ccw`),
      t + r / 2,
      n + i * 0.66,
      r * 0.86,
      i * 0.08,
      `#1a2a22`,
      g(),
      `700`,
    ),
    R(
      e,
      u(`maru.run.walker`),
      t + r / 2,
      n + i * 0.77,
      r * 0.6,
      i * 0.08,
      `#c0302a`,
      g(),
      `800`,
    ),
    R(
      e,
      u(`maru.run.distance`),
      t + r / 2,
      n + i * 0.89,
      r * 0.8,
      i * 0.06,
      `#3a3a36`,
      g(),
      `600`,
    ));
}
function Ye(e) {
  return (t, n, r, i, a) => {
    (F(t, n, r, i, a, `#2c2a26`),
      F(t, n + 2, r + 2, i - 4, a - 4, `#8a7a5a`),
      R(
        t,
        u(`maru.gallery.work.${e}`),
        n + i / 2,
        r + a * 0.4,
        i * 0.8,
        a * 0.4,
        `#1c1a16`,
        b(),
        `700`,
      ),
      R(
        t,
        u(`maru.gallery.title`),
        n + i / 2,
        r + a * 0.78,
        i * 0.86,
        a * 0.2,
        `#2c2a26`,
        g(),
        `500`,
      ));
  };
}
function Xe(e, t, n, r, i) {
  (F(e, t, n, r, i, `#1e3a32`),
    R(
      e,
      u(`maru.terrace.sign`),
      t + r / 2,
      n + i * 0.38,
      r * 0.9,
      i * 0.28,
      `#f4f0e4`,
      g(),
      `700`,
    ),
    R(
      e,
      u(`maru.terrace.hours`),
      t + r / 2,
      n + i * 0.74,
      r * 0.9,
      i * 0.18,
      `#d8e8d0`,
      g(),
      `500`,
    ));
}
function Ze(e) {
  return (n, i, a, o, s) => {
    (E(n, new t(r(`maru-ss`, e)), i, a, o, s, z(9210500), o, s),
      R(
        n,
        u(e),
        i + o / 2,
        a + s / 2,
        o * 0.86,
        s * 0.56,
        `#efeae0`,
        b(),
        `700`,
      ));
  };
}
var Qe = [
  { body: `#e8a020`, band: `#7a3a10`, fg: `#ffffff` },
  { body: `#4ab0c8`, band: `#f4e8c8`, fg: `#1a3a48` },
  { body: `#f4f0e4`, band: `#c0302a`, fg: `#c0302a` },
  { body: `#2e6a3c`, band: `#f0d040`, fg: `#ffffff` },
];
function $e(e) {
  let t = Qe[(e - 1) % Qe.length];
  return (n, r, i, a, o) => {
    (n.clearRect(r, i, a, o),
      F(n, r, i, a, o, t.body),
      F(n, r, i + o * 0.86, a, o * 0.14, t.band));
    let s = r + a * 0.3,
      c = i + o * 0.22,
      l = a * 0.42,
      d = o * 0.42,
      f = n.createLinearGradient(0, c, 0, c + d);
    (f.addColorStop(0, `#fff2d4`),
      f.addColorStop(1, `#c8a070`),
      (n.fillStyle = f),
      n.fillRect(s, c, l, d),
      F(n, s, c + d * 0.86, l, d * 0.14, `#9a9c9e`),
      F(n, s + l * 0.1, c + d * 0.2, l * 0.12, d * 0.5, `#3a3a3a`),
      R(
        n,
        u(`maru.truck.${e}.name`),
        r + a * 0.15,
        i + o * 0.42,
        a * 0.26,
        o * 0.3,
        t.fg,
        g(),
        `900`,
      ),
      F(n, r + a * 0.76, i + o * 0.22, a * 0.2, o * 0.5, `#1e1e1e`),
      R(
        n,
        u(`maru.truck.${e}.menu`),
        r + a * 0.86,
        i + o * 0.4,
        a * 0.18,
        o * 0.12,
        `#ffffff`,
        g(),
        `700`,
      ),
      R(
        n,
        u(`maru.truck.lunch`),
        r + a * 0.86,
        i + o * 0.6,
        a * 0.18,
        o * 0.1,
        `#ffd84a`,
        g(),
        `700`,
      ),
      R(
        n,
        u(`maru.truck.${e}.name`),
        r + a * 0.5,
        i + o * 0.93,
        a * 0.5,
        o * 0.1,
        t.fg === `#ffffff`
          ? `#ffffff`
          : t.band === `#f4e8c8`
            ? `#1a3a48`
            : `#ffffff`,
        g(),
        `700`,
      ));
  };
}
function et(e, t, n, r, i) {
  (F(e, t, n, r, i, `#ffe24a`),
    R(
      e,
      u(`maru.truck.queue`),
      t + r / 2,
      n + i / 2,
      r * 0.86,
      i * 0.6,
      `#1a1a1a`,
      g(),
      `900`,
    ));
}
