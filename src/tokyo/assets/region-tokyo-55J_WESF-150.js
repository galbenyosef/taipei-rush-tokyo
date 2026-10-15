// tokyo/assets/region-tokyo-55J_WESF 150 — fillstyle
// Lines 63156-63500 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function Xx(e) {
  let t = e >>> 0;
  return () => {
    t = (t + 1831565813) >>> 0;
    let e = t;
    return (
      (e = Math.imul(e ^ (e >>> 15), e | 1)),
      (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
}
var kpe = (e, t, n) => `rgb(${e | 0},${t | 0},${n | 0})`;
function Zx(e, t, n, r, i, a, o) {
  let s = Xx(a);
  ((e.fillStyle = `#7a6656`), e.fillRect(t, n, r, i));
  let c = i / o,
    l = Math.max(3, Math.round(r / (c * 3.4))),
    u = r / l;
  for (let i = 0; i < o; i++) {
    let a = i % 2 ? u / 2 : 0;
    for (let o = -1; o <= l; o++) {
      let l = t + a + o * u,
        d = 0.8 + s() * 0.32,
        f = s() > 0.9 ? 14 : 0;
      e.fillStyle = kpe(142 * d + f, 98 * d, 66 * d);
      let p = Math.max(t, l + 0.6),
        m = Math.min(t + r, l + u - 0.6);
      m > p && e.fillRect(p, n + i * c + 0.6, m - p, c - 1.2);
    }
  }
  e.fillStyle = `rgba(40,24,14,0.22)`;
  for (let a = 0; a < r * 1.4; a++)
    e.fillRect(t + s() * r, n + s() * i, 0.6, c * (0.4 + s() * 0.5));
  Qx(e, t, n, r, i, a + 3, (r * i) / 50, 0.16);
}
function Qx(e, t, n, r, i, a, o, s, c = !0) {
  let l = Xx(a);
  for (let a = 0; a < o; a++) {
    let a = c ? 0 : 255;
    ((e.fillStyle = `rgba(${a},${a},${a},${(s * l()).toFixed(3)})`),
      e.fillRect(t + l() * r, n + l() * i, 1 + l() * 1.5, 1 + l() * 1.5));
  }
}
function $x(e, t, n, r, i, a) {
  ((e.fillStyle = `#d6c4a2`),
    e.fillRect(t, n, r, i),
    (e.fillStyle = `rgba(90,70,50,0.35)`),
    e.fillRect(t, n + i - 1.2, r, 1.2),
    Qx(e, t, n, r, i, a, (r * i) / 26, 0.14));
}
function eS(e, t, n, r, i, a = 0.85) {
  let o = n - t,
    s = o * a;
  (e.beginPath(), e.moveTo(t, r), e.lineTo(t, i));
  let c = o / (2 * s);
  (e.arc(t + s, i, s, Math.PI, 2 * Math.PI - Math.acos(c - 1), !1),
    e.arc(n - s, i, s, 2 * Math.PI - Math.acos(1 - c), 2 * Math.PI, !1),
    e.lineTo(n, r),
    e.closePath());
}
function tS(e, t, n, r, i, a, o = 1) {
  let s = r * 0.75;
  ((e.fillStyle = `#2a201a`), eS(e, t, t + r, n + i, n + s), e.fill());
  let c = t + 2,
    l = r - 4,
    u = e.createLinearGradient(0, n, 0, n + i);
  (u.addColorStop(0, `#a9b4b8`),
    u.addColorStop(1, `#6f7a80`),
    (e.fillStyle = u),
    eS(e, c, c + l, n + i - 2, n + s + 1),
    e.fill(),
    (e.fillStyle = `#3a3430`));
  for (let t = 1; t < o; t++)
    e.fillRect(c + (l * t) / o - 1, n + s * 0.4, 2, i - s * 0.4);
  for (let t = 1; t < 5; t++) e.fillRect(c, n + s + ((i - s) * t) / 5, l, 1.4);
  a(c, n + s * 0.5, l, i - s * 0.5 - 2, 1);
}
function Ape(e, t, n, r, i, a) {
  (Zx(e, t, n, r, i, 61, 48),
    a(t, n, r, i, 0.3),
    $x(e, t, n + i - 8, r, 8, 62),
    a(t, n + i - 8, r, 8, 0.38));
  let o = r * 0.22,
    s = r * 0.09,
    c = t + (r - o * 2 - s) / 2,
    l = n + i * 0.17,
    u = i * 0.66;
  $x(e, c - 4, l + u, o * 2 + s + 8, 5, 63);
  for (let t of [c, c + o + s])
    ((e.fillStyle = `#cdb994`),
      eS(e, t - 3, t + o + 3, l + u, l - 2 + (o + 6) * 0.75),
      e.fill());
  (tS(e, c, l, o, u, a, 2), tS(e, c + o + s, l, o, u, a, 2));
}
function jpe(e, t, n, r, i, a) {
  let o = r / 4;
  {
    let r = o * 2;
    (Zx(e, t, n, r, i, 71, 30), a(t, n, r, i, 0.3));
    let s = t + r * 0.14,
      c = t + r * 0.86,
      l = n + i * 0.62;
    ((e.fillStyle = `#d3bf9c`),
      eS(e, s - 5, c + 5, n + i, l - 5, 0.62),
      e.fill(),
      (e.fillStyle = `rgba(90,70,50,0.45)`));
    for (let t = 0; t < 9; t++)
      e.fillRect(s - 5 + ((c - s + 10) * t) / 8, n + i * 0.1, 1, i * 0.5);
    ((e.fillStyle = `#1b1612`), eS(e, s, c, n + i, l, 0.62), e.fill());
    let u = s + 4,
      d = c - 4,
      f = e.createLinearGradient(0, l, 0, n + i);
    (f.addColorStop(0, `#e8cf98`),
      f.addColorStop(1, `#b89a62`),
      (e.fillStyle = f),
      eS(e, u, d, n + i - 1, l + 3, 0.62),
      e.fill(),
      (e.fillStyle = `#3b2c20`),
      e.fillRect(u, l + i * 0.04, d - u, 3));
    for (let t = 0; t <= 4; t++)
      e.fillRect(
        u + ((d - u) * t) / 4 - 1.5,
        l + i * 0.04,
        3,
        n + i - l - i * 0.04,
      );
    for (let t = 1; t < 4; t++)
      e.fillRect(
        u,
        l + i * 0.04 + ((n + i - l - i * 0.04) * t) / 4,
        d - u,
        1.5,
      );
    a(u, l - i * 0.4, d - u, n + i - l + i * 0.4, 1);
  }
  {
    let r = t + o * 2;
    (Zx(e, r, n, o, i, 81, 30),
      a(r, n, o, i, 0.3),
      (e.fillStyle = `#cdb994`),
      eS(
        e,
        r + o * 0.12,
        r + o * 0.88,
        n + i * 0.94,
        n + i * 0.06 - 4 + o * 0.76 * 0.75,
      ),
      e.fill(),
      tS(e, r + o * 0.18, n + i * 0.06, o * 0.64, i * 0.86, a, 3),
      (e.fillStyle = `#cdb994`),
      e.fillRect(r + o * 0.18, n + i * 0.46, o * 0.64, 3));
  }
  (Zx(e, t + o * 3, n, o, i, 91, 30), a(t + o * 3, n, o, i, 0.3));
}
var nS = {
    kaminarimon: [0, 104],
    furaijin: [104, 232],
    kobuna: [232, 340],
    shinbashi: [340, 448],
  },
  Mpe = {
    kaminarimon: `landmark.sensoji.kaminarimon`,
    furaijin: `landmark.sensoji.furaijinmon`,
    kobuna: `landmark.sensoji.kobunacho`,
    shinbashi: `landmark.sensoji.shinbashi`,
  },
  rS = [0, 1, 2, 3, 4, 5].map((e) => [
    (e % 3) * 96,
    Math.floor(e / 3) * 32,
    (e % 3) * 96 + 96,
    Math.floor(e / 3) * 32 + 32,
  ]),
  iS = { kinryuzan: [288, 0, 384, 32], semui: [288, 32, 384, 64] },
  aS = 0.75,
  Npe = { kaminarimon: 1, furaijin: 0.75, kobuna: 1, shinbashi: 1 },
  Ppe = [
    {
      key: `landmark.nakamise.ningyoyaki`,
      bg: `#f1e7d2`,
      fg: `#5a2810`,
      edge: `#3a2416`,
      serif: !0,
    },
    {
      key: `landmark.nakamise.okoshi`,
      bg: `#b8241c`,
      fg: `#ffffff`,
      edge: `#2a1a14`,
      serif: !0,
    },
    {
      key: `landmark.nakamise.sensu`,
      bg: `#1d1a17`,
      fg: `#e0b95a`,
      edge: `#8a6a30`,
      serif: !0,
    },
    {
      key: `landmark.nakamise.kibidango`,
      bg: `#efc840`,
      fg: `#1a1a1a`,
      edge: `#3a2a10`,
    },
    {
      key: `landmark.nakamise.agemanju`,
      bg: `#2d4a35`,
      fg: `#f3efe4`,
      edge: `#1a2a1e`,
      serif: !0,
    },
    {
      key: `landmark.nakamise.omiyage`,
      bg: `#22407a`,
      fg: `#ffffff`,
      edge: `#141e3a`,
    },
  ],
  oS = (e, t, n) => `${e} ${t}px ${n}`;
function Fpe(e, t, n, r, i, a, o) {
  for (let r of Object.keys(nS)) {
    let [s, c] = nS[r],
      l = t + s,
      u = c - s;
    ((e.fillStyle = `#c4231c`), e.fillRect(l, n, u, i));
    let d = e.createLinearGradient(0, n, 0, n + i);
    (d.addColorStop(0, `rgba(60,0,0,0.25)`),
      d.addColorStop(0.5, `rgba(255,90,60,0.08)`),
      d.addColorStop(1, `rgba(60,0,0,0.25)`),
      (e.fillStyle = d),
      e.fillRect(l, n, u, i),
      (e.fillStyle = `rgba(70,0,0,0.38)`));
    for (let t = 0; t < u; t += 7) e.fillRect(l + t, n, 1.6, i);
    let f = [...yo(Mpe[r]).ja],
      p = u / f.length,
      m = Math.min(p * 0.92, i * 0.8);
    ((e.fillStyle = `#14100e`),
      (e.font = oS(800, Math.round(m), o.serif)),
      (e.textAlign = `center`),
      (e.textBaseline = `middle`),
      f.forEach((t, a) => {
        (e.save(),
          e.translate(l + p * (a + 0.5), n + i / 2),
          e.rotate(-Math.PI / 2),
          e.scale(Npe[r], 1),
          (e.lineWidth = m * 0.05),
          (e.strokeStyle = `#14100e`),
          e.strokeText(t, 0, 0),
          e.fillText(t, 0, 0),
          e.restore());
      }),
      a(l, n, u, i, 1));
  }
}
function Ipe(e, t, n, r, i, a, o) {
  ((e.textAlign = `center`),
    (e.textBaseline = `middle`),
    Ppe.forEach((r, i) => {
      let [s, c, l] = rS[i],
        u = t + s,
        d = n + c,
        f = l - s;
      ((e.fillStyle = r.edge),
        e.fillRect(u, d, f, 32),
        (e.fillStyle = r.bg),
        e.fillRect(u + 2.5, d + 2.5, f - 5, 27),
        (e.fillStyle = r.fg),
        (e.font = oS(800, 22, r.serif ? o.serif : o.sans)),
        e.save(),
        e.translate(u + f / 2, d + 16 + 1),
        e.scale(aS, 1),
        e.fillText(yo(r.key).ja, 0, 0, (f - 10) / aS),
        e.restore(),
        a(u, d, f, 32, 0.8));
    }));
  for (let [r, i] of [
    [`kinryuzan`, `landmark.sensoji.kinryuzan`],
    [`semui`, `landmark.sensoji.semui`],
  ]) {
    let [s, c] = iS[r],
      l = t + s,
      u = n + c;
    ((e.fillStyle = `#c9a24a`),
      e.fillRect(l, u, 96, 32),
      (e.fillStyle = `#16120f`),
      e.fillRect(l + 3, u + 3, 90, 26),
      (e.fillStyle = `#e3c062`),
      (e.font = oS(800, 21, o.serif)));
    let d = [...yo(i).ja].reverse();
    (d.forEach((t, n) => {
      (e.save(),
        e.translate(l + 48 + (n - (d.length - 1) / 2) * 25, u + 17),
        e.scale(aS, 1),
        e.fillText(t, 0, 0),
        e.restore());
    }),
      a(l, u, 96, 32, 0.45));
  }
}
var sS = {
  v108: [0, 0, 32, 96],
  mark108: [32, 0, 160, 24],
  tsutawa: [160, 0, 256, 24],
  qflat: [256, 0, 320, 24],
  gate: [32, 24, 176, 48],
  hachiExit: [176, 24, 240, 48],
  plaque: [240, 24, 264, 96],
  ad108: [264, 24, 320, 96],
  screenA: [32, 48, 128, 96],
  screenB: [128, 48, 240, 96],
};
function cS(e, t) {
  let [n, r, i, a] = sS[t],
    o = e.u1 - e.u0,
    s = e.v1 - e.v0,
    c = 0.6;
  return {
    u0: e.u0 + o * ((n + c) / 320),
    u1: e.u0 + o * ((i - c) / 320),
    v0: e.v0 + s * (1 - (a - c) / 96),
    v1: e.v0 + s * (1 - (r + c) / 96),
  };
}
function lS(e) {
  let t = e >>> 0;
  return () => {
    t = (t + 1831565813) >>> 0;
    let e = t;
    return (
      (e = Math.imul(e ^ (e >>> 15), e | 1)),
      (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
}
var uS = (e, t, n) => `${e} ${t}px ${n}`,
  dS = (e) => `Helvetica, Arial, ${e.sans}`;
function fS(e, t, n, r, i) {
  let a = e.measureText(t).width;
  (e.save(),
    e.translate(n, r),
    a > i && e.scale(i / a, 1),
    e.fillText(t, 0, 0),
    e.restore());
}
