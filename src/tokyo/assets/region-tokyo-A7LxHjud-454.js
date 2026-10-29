// tokyo/assets/region-tokyo-A7LxHjud 454 — math
// Lines 163907-164253 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var I8 = {
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
  Fze = [1, 0.45, 0.2, 0.08, 0.03, 0.012],
  L8 = (e) => (e <= 0 ? 1 : (Fze[e] ?? 0.005)),
  R8 = [u8.crane, u8.curtain, u8.moon, u8.phoenix],
  z8 = [
    { ids: R8, k: 3, pts: 5, w: `brights` },
    { ids: R8, k: 4, pts: 3, w: `brights` },
    { ids: [...R8, u8.rainman], k: 5, pts: 2, w: `brights` },
    { ids: [u8.boar, u8.deer, u8.butterfly], k: 3, pts: 5, w: `isc` },
    { ids: u8.akatan, k: 3, pts: 5, w: `akatan` },
    { ids: u8.aotan, k: 3, pts: 5, w: `aotan` },
    { ids: [u8.curtain, u8.cup], k: 2, pts: 5, w: `sake` },
    { ids: [u8.moon, u8.cup], k: 2, pts: 5, w: `sake` },
  ],
  Ize = l8.filter((e) => e.kind === `tane`).map((e) => e.id),
  Lze = l8.filter((e) => e.kind === `tan`).map((e) => e.id);
function B8(e, t, n = I8.expert) {
  let r = new Set(e),
    i = new Set(t),
    a = 0;
  for (let e of z8) {
    let t = 0,
      o = 0;
    for (let n of e.ids) (r.has(n) && t++, i.has(n) || o++);
    o < e.k || (a += e.pts * L8(e.k - t) * (e.w ? n[e.w] : 1));
  }
  let o = v8(e),
    s = v8(t),
    c = (e, t, n, r) =>
      t - n < r
        ? e >= r
          ? e - r + 1
          : 0
        : e >= r
          ? e - r + 1 + 0.45
          : L8(r - e);
  return (
    (a +=
      c(o.tane, Ize.length, s.tane, 5) +
      c(o.tan, Lze.length, s.tan, 5) +
      c(o.kasu, 25, s.kasu, 10)),
    (a += o.hikari * 0.25 + o.tane * 0.08 + o.tan * 0.08 + o.kasu * 0.03),
    a
  );
}
function V8(e, t) {
  let n = new Set([...e.hands[t], ...e.field, ...e.caps[0], ...e.caps[1]]);
  return (
    e.drawn !== null && n.add(e.drawn),
    l8.map((e) => e.id).filter((e) => !n.has(e))
  );
}
function Rze(e, t, n) {
  if (e <= 0 || t <= 0 || n <= 0) return 0;
  let r = 1;
  for (let i = 0; i < t; i++) r *= Math.max(0, (n - e - i) / (n - i));
  return 1 - r;
}
function zze(e, t, n, r, i, a) {
  let o = new Map();
  for (let t of e) {
    let e = d8(t),
      n = o.get(e);
    n ? n.push(t) : o.set(e, [t]);
  }
  let s = B8(n, t, a),
    c = 0;
  for (let [e, l] of o) {
    let o = r.filter((t) => d8(t) === e).length;
    if (!o) continue;
    let u = 0;
    if (l.length === 3) u = B8([...n, ...l], t, a) - s;
    else for (let e of l) u = Math.max(u, B8([...n, e], t, a) - s);
    let d = Math.min(1, Rze(o, i, r.length) + o / Math.max(1, r.length));
    c += u * d;
  }
  return c;
}
function H8(e, t, n, r, i, a) {
  let o = e.caps[t],
    s = e.caps[m8(t)],
    c = n.length ? [...o, ...n] : o,
    l = B8(c, s, i) - B8(o, s, i),
    u = B8(s, o, i) - B8(s, c, i),
    d = zze(r, c, s, a, e.hands[m8(t)].length, i);
  return i.self * l + i.deny * u - i.expose * d;
}
function Bze(e, t, n, r) {
  let i = I8[n],
    a = V8(e, t),
    o = [];
  for (let n of e.hands[t]) {
    let s = C8(e, n),
      c = s.length ? s : [void 0];
    for (let s of c) {
      let c = w8(e, n, s),
        l = H8(
          e,
          t,
          c,
          c.length ? e.field.filter((e) => !c.includes(e)) : [...e.field, n],
          i,
          a,
        );
      if (!c.length) {
        let r = e.hands[t].filter((e) => e !== n && d8(e) === d8(n)).length;
        ((l += r ? 0.15 : 0), (l -= l8[n].kind === `kasu` ? 0 : 0.12));
      }
      (r && i.noise && (l += (r.next() - 0.5) * i.noise),
        o.push({ card: n, target: s, value: l }));
    }
  }
  return o.sort((e, t) => t.value - e.value);
}
function U8(e, t, n, r) {
  return Bze(e, t, n, r)[0];
}
function W8(e, t, n) {
  if (e.drawn === null) return;
  let r = C8(e, e.drawn);
  if (!r.length) return;
  let i = I8[n],
    a = V8(e, t),
    o = r[0],
    s = -1 / 0;
  for (let n of r) {
    let r = w8(e, e.drawn, n),
      c = H8(
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
function G8(e, t) {
  let n = new Set(e),
    r = new Set(t),
    i = 99;
  for (let e of z8) {
    let t = 0,
      a = 0;
    for (let i of e.ids) (n.has(i) && t++, r.has(i) || a++);
    a < e.k || t >= e.k || (i = Math.min(i, e.k - t));
  }
  let a = v8(e),
    o = v8(t),
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
function K8(e, t, n, r = 0) {
  let i = m8(t),
    a = e.hands[t].length,
    o = j8(e, t).base,
    s = G8(e.caps[i], e.caps[t]),
    c = G8(e.caps[t], e.caps[i]);
  if (e.koi[i] > 0 || a < 2) return !1;
  switch (n) {
    case `cautious`:
      return o <= 1 && a >= 5 && s >= 3 && c <= 1;
    case `bold`:
      return a >= 3 && o < 7 && s >= 2;
    case `boss`:
      return (
        r + o > 0 &&
        B8(e.caps[t], e.caps[i]) >= B8(e.caps[i], e.caps[t]) + 1 &&
        s >= 2 &&
        a >= 3 &&
        o < 7 &&
        c <= 1
      );
    case `expert`:
      return o < 4 && a >= 4 && s >= 3 && c <= 1;
  }
}
var q8 = 100 / 163,
  J8 = `#17110d`,
  Y8 = `#f4ead2`,
  X8 = `#cf2f22`,
  Z8 = `#9c1d17`,
  Q8 = `#2f7a3a`,
  $8 = `#1d5229`,
  e5 = `#e2ad2a`,
  t5 = `#2a4c9c`,
  n5 = `#6d3fa0`,
  Vze = `#f1b3c2`,
  Hze = `#7b4a22`;
function r5(e, t, n = !0) {
  (e.beginPath(), e.moveTo(t[0], t[1]));
  for (let n = 2; n < t.length; n += 2) e.lineTo(t[n], t[n + 1]);
  n && e.closePath();
}
function i5(e, t, n = J8, r = 1.2) {
  (t && ((e.fillStyle = t), e.fill()),
    n && ((e.strokeStyle = n), (e.lineWidth = r), e.stroke()));
}
function a5(e, t, n, r, i, a = 0) {
  (e.beginPath(),
    e.ellipse(t, n, Math.max(0.01, r), Math.max(0.01, i), a, 0, Math.PI * 2));
}
function o5(e, t, n, r, i, a = J8, o = 1.2) {
  (a5(e, t, n, r, r), i5(e, i, a, o));
}
function s5(e, t, n, r) {
  (e.beginPath(), e.moveTo(t[0], t[1]));
  for (let n = 2; n + 3 < t.length; n += 4)
    e.quadraticCurveTo(t[n], t[n + 1], t[n + 2], t[n + 3]);
  ((e.strokeStyle = n),
    (e.lineWidth = r),
    (e.lineCap = `round`),
    (e.lineJoin = `round`),
    e.stroke());
}
var c5 = (e, t) => {
  let n = Math.sin(e * 12.9898 + t * 78.233) * 43758.5453;
  return n - Math.floor(n);
};
function l5(e, t, n, r = X8, i = !0) {
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
function u5(e, t, n, r, i, a, o = e5) {
  for (let o = 0; o < 5; o++) {
    let s = (o / 5) * Math.PI * 2 - Math.PI / 2;
    o5(
      e,
      t + Math.cos(s) * r * 0.62,
      n + Math.sin(s) * r * 0.62,
      r * 0.48,
      i,
      a,
      0.7,
    );
  }
  o5(e, t, n, r * 0.26, o, null);
}
function Uze(e, t, n, r, i, a) {
  (e.save(), e.translate(n, r), e.rotate(i));
  let o = t === `ao` ? t5 : X8;
  if (
    (e.beginPath(),
    e.moveTo(-17 / 2, -37),
    e.lineTo(17 / 2, -37),
    e.lineTo(17 / 2, 34),
    e.lineTo(0, 39),
    e.lineTo(-17 / 2, 34),
    e.closePath(),
    i5(e, o, J8, 1.6),
    (e.strokeStyle = t === `ao` ? `#9fb6e6` : `#f2c27a`),
    (e.lineWidth = 0.9),
    e.strokeRect(-6.3, -34.8, 12.6, 65),
    s5(e, [0, -37, -4, -43, 2, -47], J8, 1.2),
    a)
  ) {
    ((e.fillStyle = J8),
      (e.font = `700 11px ${yr}`),
      (e.textAlign = `center`),
      (e.textBaseline = `middle`));
    let t = [...a],
      n = Math.min(12.5, 60 / t.length);
    t.forEach((t, r) => e.fillText(t, 0, -28 + n * (r + 0.5)));
  }
  e.restore();
}
function Wze(e, t, n, r) {
  (e.beginPath(),
    e.moveTo(t - r, n),
    e.quadraticCurveTo(t - r, n - r * 0.95, t, n - r * 0.95),
    e.quadraticCurveTo(t + r, n - r * 0.95, t + r, n),
    e.closePath(),
    i5(e, Q8, J8, 1.3),
    (e.strokeStyle = $8),
    (e.lineWidth = 0.8));
  for (let i = 1; i < 8; i++) {
    let a = Math.PI + (i / 8) * Math.PI;
    (e.beginPath(),
      e.moveTo(t, n),
      e.lineTo(t + Math.cos(a) * r * 0.85, n + Math.sin(a) * r * 0.82),
      e.stroke());
  }
}
