// tokyo__assets__region-tokyo-BcM3fReU 279 — math
// Lines 110715-111061 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var U6 = {
    cautious: {
      self: 1,
      deny: 0.8,
      expose: 0.9,
      noise: 0.45,
      brights: 1,
      isc: 1,
      akatan: 1,
      aotan: 1,
      sake: 1,
    },
    bold: {
      self: 1.1,
      deny: 0.35,
      expose: 0.35,
      noise: 0.35,
      brights: 1.5,
      isc: 1.1,
      akatan: 1,
      aotan: 1,
      sake: 1.2,
    },
    boss: {
      self: 1,
      deny: 0.9,
      expose: 0.85,
      noise: 0.04,
      brights: 1,
      isc: 1.7,
      akatan: 1.7,
      aotan: 1,
      sake: 1,
    },
    expert: {
      self: 1,
      deny: 0.9,
      expose: 0.85,
      noise: 0.03,
      brights: 1,
      isc: 1,
      akatan: 1,
      aotan: 1,
      sake: 1,
    },
  },
  W6 = [1, 0.45, 0.2, 0.08, 0.03, 0.012],
  G6 = (e) => (e <= 0 ? 1 : (W6[e] ?? 0.005)),
  K6 = [p6.crane, p6.curtain, p6.moon, p6.phoenix],
  q6 = [
    { ids: K6, k: 3, pts: 5, w: `brights` },
    { ids: K6, k: 4, pts: 3, w: `brights` },
    { ids: [...K6, p6.rainman], k: 5, pts: 2, w: `brights` },
    { ids: [p6.boar, p6.deer, p6.butterfly], k: 3, pts: 5, w: `isc` },
    { ids: p6.akatan, k: 3, pts: 5, w: `akatan` },
    { ids: p6.aotan, k: 3, pts: 5, w: `aotan` },
    { ids: [p6.curtain, p6.cup], k: 2, pts: 5, w: `sake` },
    { ids: [p6.moon, p6.cup], k: 2, pts: 5, w: `sake` },
  ],
  J6 = f6.filter((e) => e.kind === `tane`).map((e) => e.id),
  Y6 = f6.filter((e) => e.kind === `tan`).map((e) => e.id);
function X6(e, t, n = U6.expert) {
  let r = new Set(e),
    i = new Set(t),
    a = 0;
  for (let e of q6) {
    let t = 0,
      o = 0;
    for (let n of e.ids) (r.has(n) && t++, i.has(n) || o++);
    o < e.k || (a += e.pts * G6(e.k - t) * (e.w ? n[e.w] : 1));
  }
  let o = x6(e),
    s = x6(t),
    c = (e, t, n, r) =>
      t - n < r
        ? e >= r
          ? e - r + 1
          : 0
        : e >= r
          ? e - r + 1 + 0.45
          : G6(r - e);
  return (
    (a +=
      c(o.tane, J6.length, s.tane, 5) +
      c(o.tan, Y6.length, s.tan, 5) +
      c(o.kasu, 25, s.kasu, 10)),
    (a += o.hikari * 0.25 + o.tane * 0.08 + o.tan * 0.08 + o.kasu * 0.03),
    a
  );
}
function Z6(e, t) {
  let n = new Set([...e.hands[t], ...e.field, ...e.caps[0], ...e.caps[1]]);
  return (
    e.drawn !== null && n.add(e.drawn),
    f6.map((e) => e.id).filter((e) => !n.has(e))
  );
}
function Q6(e, t, n) {
  if (e <= 0 || t <= 0 || n <= 0) return 0;
  let r = 1;
  for (let i = 0; i < t; i++) r *= Math.max(0, (n - e - i) / (n - i));
  return 1 - r;
}
function $6(e, t, n, r, i, a) {
  let o = new Map();
  for (let t of e) {
    let e = m6(t),
      n = o.get(e);
    n ? n.push(t) : o.set(e, [t]);
  }
  let s = X6(n, t, a),
    c = 0;
  for (let [e, l] of o) {
    let o = r.filter((t) => m6(t) === e).length;
    if (!o) continue;
    let u = 0;
    if (l.length === 3) u = X6([...n, ...l], t, a) - s;
    else for (let e of l) u = Math.max(u, X6([...n, e], t, a) - s);
    let d = Math.min(1, Q6(o, i, r.length) + o / Math.max(1, r.length));
    c += u * d;
  }
  return c;
}
function e8(e, t, n, r, i, a) {
  let o = e.caps[t],
    s = e.caps[_6(t)],
    c = n.length ? [...o, ...n] : o,
    l = X6(c, s, i) - X6(o, s, i),
    u = X6(s, o, i) - X6(s, c, i),
    d = $6(r, c, s, a, e.hands[_6(t)].length, i);
  return i.self * l + i.deny * u - i.expose * d;
}
function t8(e, t, n, r) {
  let i = U6[n],
    a = Z6(e, t),
    o = [];
  for (let n of e.hands[t]) {
    let s = A6(e, n),
      c = s.length ? s : [void 0];
    for (let s of c) {
      let c = j6(e, n, s),
        l = e8(
          e,
          t,
          c,
          c.length ? e.field.filter((e) => !c.includes(e)) : [...e.field, n],
          i,
          a,
        );
      if (!c.length) {
        let r = e.hands[t].filter((e) => e !== n && m6(e) === m6(n)).length;
        ((l += r ? 0.15 : 0), (l -= f6[n].kind === `kasu` ? 0 : 0.12));
      }
      (r && i.noise && (l += (r.next() - 0.5) * i.noise),
        o.push({ card: n, target: s, value: l }));
    }
  }
  return o.sort((e, t) => t.value - e.value);
}
function n8(e, t, n, r) {
  return t8(e, t, n, r)[0];
}
function r8(e, t, n) {
  if (e.drawn === null) return;
  let r = A6(e, e.drawn);
  if (!r.length) return;
  let i = U6[n],
    a = Z6(e, t),
    o = r[0],
    s = -1 / 0;
  for (let n of r) {
    let r = j6(e, e.drawn, n),
      c = e8(
        e,
        t,
        r,
        e.field.filter((e) => !r.includes(e)),
        i,
        a,
      );
    c > s && ((s = c), (o = n));
  }
  return o;
}
function i8(e, t) {
  let n = new Set(e),
    r = new Set(t),
    i = 99;
  for (let e of q6) {
    let t = 0,
      a = 0;
    for (let i of e.ids) (n.has(i) && t++, r.has(i) || a++);
    a < e.k || t >= e.k || (i = Math.min(i, e.k - t));
  }
  let a = x6(e),
    o = x6(t),
    s = (e, t, n, r) =>
      e >= r ? (t - n > e ? 1 : 99) : t - n >= r ? r - e : 99;
  return (
    (i = Math.min(
      i,
      s(a.tane, 9, o.tane, 5),
      s(a.tan, 10, o.tan, 5),
      s(a.kasu, 25, o.kasu, 10),
    )),
    i
  );
}
function a8(e, t, n, r = 0) {
  let i = _6(t),
    a = e.hands[t].length,
    o = R6(e, t).base,
    s = i8(e.caps[i], e.caps[t]),
    c = i8(e.caps[t], e.caps[i]);
  if (e.koi[i] > 0 || a < 2) return !1;
  switch (n) {
    case `cautious`:
      return o <= 1 && a >= 5 && s >= 3 && c <= 1;
    case `bold`:
      return a >= 3 && o < 7 && s >= 2;
    case `boss`:
      return (
        r + o > 0 &&
        X6(e.caps[t], e.caps[i]) >= X6(e.caps[i], e.caps[t]) + 1 &&
        s >= 2 &&
        a >= 3 &&
        o < 7 &&
        c <= 1
      );
    case `expert`:
      return o < 4 && a >= 4 && s >= 3 && c <= 1;
  }
}
var o8 = 100 / 163,
  s8 = `#17110d`,
  c8 = `#f4ead2`,
  l8 = `#cf2f22`,
  u8 = `#9c1d17`,
  d8 = `#2f7a3a`,
  f8 = `#1d5229`,
  p8 = `#e2ad2a`,
  m8 = `#2a4c9c`,
  h8 = `#6d3fa0`,
  g8 = `#f1b3c2`,
  _8 = `#7b4a22`;
function v8(e, t, n = !0) {
  (e.beginPath(), e.moveTo(t[0], t[1]));
  for (let n = 2; n < t.length; n += 2) e.lineTo(t[n], t[n + 1]);
  n && e.closePath();
}
function y8(e, t, n = s8, r = 1.2) {
  (t && ((e.fillStyle = t), e.fill()),
    n && ((e.strokeStyle = n), (e.lineWidth = r), e.stroke()));
}
function b8(e, t, n, r, i, a = 0) {
  (e.beginPath(),
    e.ellipse(t, n, Math.max(0.01, r), Math.max(0.01, i), a, 0, Math.PI * 2));
}
function x8(e, t, n, r, i, a = s8, o = 1.2) {
  (b8(e, t, n, r, r), y8(e, i, a, o));
}
function S8(e, t, n, r) {
  (e.beginPath(), e.moveTo(t[0], t[1]));
  for (let n = 2; n + 3 < t.length; n += 4)
    e.quadraticCurveTo(t[n], t[n + 1], t[n + 2], t[n + 3]);
  ((e.strokeStyle = n),
    (e.lineWidth = r),
    (e.lineCap = `round`),
    (e.lineJoin = `round`),
    e.stroke());
}
var C8 = (e, t) => {
  let n = Math.sin(e * 12.9898 + t * 78.233) * 43758.5453;
  return n - Math.floor(n);
};
function w8(e, t, n, r = l8, i = !0) {
  if ((e.beginPath(), i)) {
    (e.moveTo(0, 0), e.lineTo(100, 0), e.lineTo(100, n));
    for (let t = 100; t >= 0; t -= 12.5)
      e.quadraticCurveTo(t - 6, n + (t % 25 ? 5 : -5), t - 12.5, n);
  } else {
    (e.moveTo(0, 163), e.lineTo(100, 163), e.lineTo(100, t));
    for (let n = 100; n >= 0; n -= 12.5)
      e.quadraticCurveTo(n - 6, t + (n % 25 ? 5 : -5), n - 12.5, t);
  }
  (e.closePath(), (e.fillStyle = r), e.fill());
}
function T8(e, t, n, r, i, a, o = p8) {
  for (let o = 0; o < 5; o++) {
    let s = (o / 5) * Math.PI * 2 - Math.PI / 2;
    x8(
      e,
      t + Math.cos(s) * r * 0.62,
      n + Math.sin(s) * r * 0.62,
      r * 0.48,
      i,
      a,
      0.7,
    );
  }
  x8(e, t, n, r * 0.26, o, null);
}
function E8(e, t, n, r, i, a) {
  (e.save(), e.translate(n, r), e.rotate(i));
  let o = t === `ao` ? m8 : l8;
  if (
    (e.beginPath(),
    e.moveTo(-17 / 2, -37),
    e.lineTo(17 / 2, -37),
    e.lineTo(17 / 2, 34),
    e.lineTo(0, 39),
    e.lineTo(-17 / 2, 34),
    e.closePath(),
    y8(e, o, s8, 1.6),
    (e.strokeStyle = t === `ao` ? `#9fb6e6` : `#f2c27a`),
    (e.lineWidth = 0.9),
    e.strokeRect(-6.3, -34.8, 12.6, 65),
    S8(e, [0, -37, -4, -43, 2, -47], s8, 1.2),
    a)
  ) {
    ((e.fillStyle = s8),
      (e.font = `700 11px ${Ui}`),
      (e.textAlign = `center`),
      (e.textBaseline = `middle`));
    let t = [...a],
      n = Math.min(12.5, 60 / t.length);
    t.forEach((t, r) => e.fillText(t, 0, -28 + n * (r + 0.5)));
  }
  e.restore();
}
function D8(e, t, n, r) {
  (e.beginPath(),
    e.moveTo(t - r, n),
    e.quadraticCurveTo(t - r, n - r * 0.95, t, n - r * 0.95),
    e.quadraticCurveTo(t + r, n - r * 0.95, t + r, n),
    e.closePath(),
    y8(e, d8, s8, 1.3),
    (e.strokeStyle = f8),
    (e.lineWidth = 0.8));
  for (let i = 1; i < 8; i++) {
    let a = Math.PI + (i / 8) * Math.PI;
    (e.beginPath(),
      e.moveTo(t, n),
      e.lineTo(t + Math.cos(a) * r * 0.85, n + Math.sin(a) * r * 0.82),
      e.stroke());
  }
}
