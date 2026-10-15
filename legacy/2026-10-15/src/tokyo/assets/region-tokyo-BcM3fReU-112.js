// tokyo/assets/region-tokyo-BcM3fReU 112 — fillstyle
// Lines 51683-52025 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function AE(e, t, n, r, i, a, o) {
  let s = [`#1d3a6a`, `#7a4a2a`, `#b0202a`, `#e8a020`, `#d86a8a`, `#2a5a3a`];
  for (let r = 0; r < 6; r++) {
    let a = n + (i / 6) * r;
    ((e.fillStyle = s[r]),
      e.fillRect(t, a, 24, i / 6),
      (e.fillStyle = `rgba(255,255,255,0.85)`),
      e.fillRect(t + 1, a + 0.5, 22, 0.8),
      SE(
        e,
        bE(`north.t${r + 1}`),
        t + 12,
        a + i / 12,
        6,
        CE(800, o.sans),
        `#ffffff`,
        21,
      ));
  }
  a(t, n, 24, i, 0.9);
  let c = e.createLinearGradient(t + 24, n, t + 24, n + 40);
  (c.addColorStop(0, `#fff6dc`),
    c.addColorStop(1, `#ffe2a0`),
    (e.fillStyle = c),
    e.fillRect(t + 24, n, 16, 40),
    (e.fillStyle = `#7a6a50`),
    e.fillRect(t + 24, n, 16, 2),
    e.fillRect(t + 24, n + 38, 16, 2),
    a(t + 24, n, 16, 40, 1),
    (e.fillStyle = `#4a4d52`),
    e.fillRect(t + 24, n + 40, 16, 40),
    a(t + 24, n + 40, 16, 40, 0));
  let l = yE(4301),
    u = (r - 40) / 3,
    d = [
      [`#2a2a3a`, `#ff6a9a`, `#8ad0ff`],
      [`#ffffff`, `#3a7ae0`, `#f2c230`],
      [`#ffe0ec`, `#e0304a`, `#4a3a5a`],
    ];
  for (let r = 0; r < 3; r++) {
    let a = t + 40 + r * u;
    ((e.fillStyle = d[r][0]),
      e.fillRect(a, n, u, i),
      TE(e, a + u / 2, n + 26, 11, d[r][1], d[r][2], (l() - 0.5) * 0.6),
      EE(e, a + u / 2, n + 26, 11, d[r][2], `#ffffff`),
      (e.fillStyle = d[r][1]),
      e.fillRect(a + 3, n + i - 16, u - 6, 10),
      SE(
        e,
        bE(`north.poster`),
        a + u / 2,
        n + i - 11,
        7,
        CE(800, o.sans),
        `#ffffff`,
        u - 8,
      ));
  }
  a(t + 40, n, r - 40, i, 0.85);
}
function jE(e) {
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
function ME(e, t, n, r, i, a, o, s, c = !0) {
  let l = jE(a);
  for (let a = 0; a < o; a++) {
    let a = c ? 0 : 255;
    ((e.fillStyle = `rgba(${a},${a},${a},${(s * l()).toFixed(3)})`),
      e.fillRect(t + l() * r, n + l() * i, 1 + l() * 2, 1 + l() * 2));
  }
}
var NE = `#d6c4b6`;
function PE(e, t, n, r, i, a) {
  ((e.fillStyle = NE), e.fillRect(t, n, r, i));
  let o = jE(a);
  for (let a = n + 3; a < n + i; a += 5)
    ((e.fillStyle = `rgba(120,96,84,${(0.02 + o() * 0.03).toFixed(3)})`),
      e.fillRect(t, a, r, 1));
  (ME(e, t, n, r, i, a + 1, (r * i) / 26, 0.1),
    ME(e, t, n, r, i, a + 2, (r * i) / 60, 0.12, !1));
}
function FE(e, t, n, r, i, a, o, s, c = 1) {
  ((e.fillStyle = `#343a37`), e.fillRect(t, n, r, i));
  let l = t + 3,
    u = n + 3,
    d = r - 6,
    f = i - 6,
    p = e.createLinearGradient(0, u, 0, u + f);
  (p.addColorStop(0, `#8c8a84`),
    p.addColorStop(0.45, `#5f5c55`),
    p.addColorStop(1, `#3b3934`),
    (e.fillStyle = p),
    e.fillRect(l, u, d, f),
    (e.fillStyle = `rgba(232,214,170,0.16)`),
    e.fillRect(l, u + f * 0.06, d, f * 0.1),
    (e.fillStyle = `#2e3431`));
  for (let t = 1; t < a; t++) e.fillRect(l + (d * t) / a - 1.5, u, 3, f);
  for (let t of o) e.fillRect(l, u + f * t - 1.5, d, 3);
  e.fillStyle = `rgba(40,46,43,0.75)`;
  for (let t = 0; t < a; t++)
    for (let n = 0.04; n < 1; n += 0.085)
      e.fillRect(l + (d * t) / a, u + f * n, d / a, 1);
  s(l, u, d, f, c);
}
function IE(e, t, n, r, i, a) {
  FE(e, t, n, r, i, 3, [0.16, 0.6], a, 1);
}
function LE(e, t, n, r, i, a) {
  (PE(e, t, n, r, i, 311), a(t, n, r, i, 0.32));
  let o = r * 0.42,
    s = i * 0.52,
    c = t + (r - o) / 2,
    l = n + i * 0.2;
  ((e.fillStyle = `rgba(70,52,44,0.35)`),
    e.fillRect(c - 5, l - 5, o + 10, s + 8),
    FE(e, c, l, o, s, 2, [0.28], a, 1),
    (e.fillStyle = `#e4d8cc`),
    e.fillRect(c - 8, l + s, o + 16, 7),
    (e.fillStyle = `rgba(90,70,60,0.35)`),
    e.fillRect(c - 8, l + s + 7, o + 16, 2));
}
var RE = `#3f9a3c`;
function zE(e, t, n, r, i, a, o) {
  ((e.fillStyle = `#f1f1ec`), e.fillRect(t, n, r, i), a(t, n, r, i, 0.5));
  let s = rc(`landmark.ueno.name`);
  ((e.fillStyle = RE),
    (e.textBaseline = `alphabetic`),
    (e.textAlign = `left`),
    (e.font = `700 54px ${o.sans}`));
  let c = Math.min(r * 0.36, e.measureText(s.ja).width);
  (e.fillText(s.ja, t + 6, n + i - 8, r * 0.36),
    (e.font = `700 44px ${o.sans}`),
    e.fillText(
      (s.en ?? ``).toUpperCase(),
      t + 6 + c + r * 0.045,
      n + i - 10,
      r - c - r * 0.045 - 12,
    ));
}
function BE(e, t, n, r, i, a) {
  (PE(e, t, n, 64, i, 331),
    a(t, n, 64, i, 0.3),
    (e.fillStyle = `#cbb6a6`),
    e.fillRect(t + 4, n + 10, 56, i - 20));
  for (let r of [t + 6, t + 50]) {
    ((e.fillStyle = `#b9a291`),
      e.fillRect(r, n + 12, 8, i - 24),
      (e.fillStyle = `#e6d8ca`));
    for (let t = n + 14; t < n + i - 14; t += 8)
      (e.beginPath(),
        e.moveTo(r + 4, t),
        e.lineTo(r + 8, t + 4),
        e.lineTo(r + 4, t + 8),
        e.lineTo(r, t + 4),
        e.closePath(),
        e.fill());
  }
  FE(e, t + 16, n + 14, 32, i - 30, 2, [0.3], a, 0.9);
  let o = t + 96,
    s = n + 32;
  ((e.fillStyle = NE),
    e.fillRect(t + 64, n, 64, 64),
    (e.fillStyle = `#8f8a84`),
    e.beginPath(),
    e.arc(o, s, 30.5, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#f6f6f2`),
    e.beginPath(),
    e.arc(o, s, 28, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#1c1c1c`));
  for (let t = 0; t < 12; t++) {
    let n = (t / 12) * Math.PI * 2,
      r = t % 3 ? 28 * 0.8 : 20.16;
    (e.save(),
      e.translate(
        o + Math.sin(n) * (r + 28 * 0.1),
        s - Math.cos(n) * (r + 28 * 0.1),
      ),
      e.rotate(n),
      e.fillRect(-1, -28 * 0.1, 2, 28 * 0.2),
      e.restore());
  }
  ((e.font = `600 9px sans-serif`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`));
  for (let [t, n] of [
    [`12`, 0],
    [`3`, 0.25],
    [`6`, 0.5],
    [`9`, 0.75],
  ])
    e.fillText(
      t,
      o + Math.sin(n * Math.PI * 2) * 28 * 0.55,
      s - Math.cos(n * Math.PI * 2) * 28 * 0.55,
    );
  (a(t + 64, n, 64, 64, 0.3),
    a(o - 28 * 0.7, s - 28 * 0.7, 28 * 1.4, 28 * 1.4, 0.85),
    (e.fillStyle = `#b9bbba`),
    e.fillRect(t + 64, n + 64, 64, 64));
  for (let r = n + 66; r < n + 128; r += 3)
    ((e.fillStyle = `rgba(60,62,64,0.35)`), e.fillRect(t + 64, r, 64, 1));
  ME(e, t + 64, n + 64, 64, 64, 341, 60, 0.12);
  let c = t + 128;
  ((e.fillStyle = `#3a3633`), e.fillRect(c, n, 128, 18));
  let l = e.createLinearGradient(0, n + 18, 0, n + i);
  (l.addColorStop(0, `#f3e6c8`),
    l.addColorStop(1, `#cdb894`),
    (e.fillStyle = l),
    e.fillRect(c, n + 18, 128, i - 18));
  let u = jE(351);
  for (let t = 0; t < 5; t++) {
    let r = c + 14 + t * 25;
    ((e.fillStyle = `rgba(255,236,190,0.9)`),
      e.beginPath(),
      e.arc(r, n + 30, 4, 0, Math.PI * 2),
      e.fill());
  }
  ((e.fillStyle = `#9a7e62`), e.fillRect(c + 4, n + 74, 120, 10));
  for (let t = 0; t < 2; t++) {
    let r = n + 46 + t * 14;
    ((e.fillStyle = `rgba(120,96,72,0.8)`), e.fillRect(c + 6, r, 116, 2));
    for (let t = 0; t < 12; t++) {
      let n = [
        [176, 132, 96],
        [150, 120, 92],
        [200, 170, 120],
        [128, 104, 84],
        [214, 196, 160],
      ][Math.floor(u() * 5)];
      ((e.fillStyle = `rgb(${n[0]},${n[1]},${n[2]})`),
        e.fillRect(c + 9 + t * 9.6, r - 7 - u() * 3, 5 + u() * 2, 7 + u() * 3));
    }
  }
  for (let t = 0; t < 4; t++) {
    let t = c + 12 + u() * 104,
      r = 26 + u() * 8;
    ((e.fillStyle = `rgba(${(50 + u() * 40) | 0},${(44 + u() * 30) | 0},${(40 + u() * 30) | 0},0.85)`),
      e.fillRect(t - 4, n + i - r - 4, 8, r),
      e.beginPath(),
      e.arc(t, n + i - r - 8, 4.5, 0, Math.PI * 2),
      e.fill());
  }
  e.fillStyle = `rgba(40,36,33,0.85)`;
  for (let t of [c, c + 64 - 1.5, c + 128 - 3])
    e.fillRect(t, n + 18, 3, i - 18);
  (a(c, n, 128, 18, 0.25), a(c, n + 18, 128, i - 18, 1));
}
function VE(e, t, n, r, i, a) {
  let o = e.createLinearGradient(0, n, 0, n + i);
  (o.addColorStop(0, `#7fc4f0`),
    o.addColorStop(1, `#d9f0c8`),
    (e.fillStyle = o),
    e.fillRect(t, n, r, i));
  let s = jE(361);
  for (let a = 0; a < 16; a++) {
    let a = t + s() * r,
      o = 2 + s() * 2;
    ((e.fillStyle = `rgb(${(60 + s() * 40) | 0},${(140 + s() * 50) | 0},${(60 + s() * 30) | 0})`),
      e.fillRect(a, n, o, i),
      (e.fillStyle = `rgba(30,80,30,0.6)`));
    for (let t = n + 6 + s() * 8; t < n + i; t += 12) e.fillRect(a, t, o, 1.2);
  }
  let c = t + r * 0.62,
    l = n + i * 0.58,
    u = i * 0.36,
    d = (t, n, r, i, a, o = 0) => {
      ((e.fillStyle = a),
        e.beginPath(),
        e.ellipse(t, n, r, i, o, 0, Math.PI * 2),
        e.fill());
    };
  (d(c, l + u * 1.05, u * 1.25, u * 0.8, `#f4f4f0`),
    d(c - u * 0.78, l - u * 0.78, u * 0.34, u * 0.34, `#1b1b1d`),
    d(c + u * 0.78, l - u * 0.78, u * 0.34, u * 0.34, `#1b1b1d`),
    d(c, l, u, u * 0.9, `#f7f7f3`),
    d(c - u * 0.38, l - u * 0.05, u * 0.24, u * 0.32, `#1b1b1d`, 0.5),
    d(c + u * 0.38, l - u * 0.05, u * 0.24, u * 0.32, `#1b1b1d`, -0.5),
    d(c - u * 0.34, l - u * 0.1, u * 0.07, u * 0.07, `#ffffff`),
    d(c + u * 0.42, l - u * 0.1, u * 0.07, u * 0.07, `#ffffff`),
    d(c, l + u * 0.3, u * 0.14, u * 0.1, `#1b1b1d`),
    d(c - u * 1.05, l + u * 0.95, u * 0.32, u * 0.42, `#1b1b1d`, 0.3),
    d(c + u * 1.05, l + u * 0.95, u * 0.32, u * 0.42, `#1b1b1d`, -0.3),
    (e.fillStyle = `rgba(0,0,0,0.08)`));
  for (let a = n; a < n + i; a += 2) e.fillRect(t, a, r, 0.6);
  a(t, n, r, i, 1);
}
var HE = {
  decoWindow: [0, 0, 0.25, 1],
  clock: [0.25, 0.5, 0.5, 1],
  shutter: [0.25, 0, 0.5, 0.5],
  shop: [0.5, 0, 1, 1],
};
function UE(e, t, n, r, i, a) {
  let [o, s, c, l] = r,
    u = Math.max(1, Math.floor(c / i)),
    d = Math.max(1, Math.floor(l / i)),
    f = [],
    p = new Map();
  for (let r = 0; r < d; r++) {
    let m = Math.min(
        Math.floor((s + (r + 0.5) * i) * n),
        Math.floor((s + l) * n) - 1,
      ),
      h = new Map(),
      g = 0;
    for (; g < u;) {
      let s = (r) => {
        let s = Math.min(
            Math.floor((o + (r + 0.5) * i) * n),
            Math.floor((o + c) * n) - 1,
          ),
          l = (m * t + s) * 4;
        return a(e[l], e[l + 1], e[l + 2]);
      };
      if (!s(g)) {
        g++;
        continue;
      }
      let l = g;
      for (; l + 1 < u && s(l + 1);) l++;
      let _ = `${g},${l}`,
        v = p.get(_);
      (v === void 0
        ? (f.push([g / u, r / d, (l + 1) / u, (r + 1) / d]),
          h.set(_, f.length - 1))
        : ((f[v][3] = (r + 1) / d), h.set(_, v)),
        (g = l + 1));
    }
    p = h;
  }
  return f;
}
