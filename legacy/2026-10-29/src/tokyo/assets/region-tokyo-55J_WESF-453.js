// tokyo/assets/region-tokyo-55J_WESF 453 — math
// Lines 163112-163458 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var A8 = {
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
  dze = [1, 0.45, 0.2, 0.08, 0.03, 0.012],
  j8 = (e) => (e <= 0 ? 1 : (dze[e] ?? 0.005)),
  M8 = [i8.crane, i8.curtain, i8.moon, i8.phoenix],
  N8 = [
    { ids: M8, k: 3, pts: 5, w: `brights` },
    { ids: M8, k: 4, pts: 3, w: `brights` },
    { ids: [...M8, i8.rainman], k: 5, pts: 2, w: `brights` },
    { ids: [i8.boar, i8.deer, i8.butterfly], k: 3, pts: 5, w: `isc` },
    { ids: i8.akatan, k: 3, pts: 5, w: `akatan` },
    { ids: i8.aotan, k: 3, pts: 5, w: `aotan` },
    { ids: [i8.curtain, i8.cup], k: 2, pts: 5, w: `sake` },
    { ids: [i8.moon, i8.cup], k: 2, pts: 5, w: `sake` },
  ],
  fze = r8.filter((e) => e.kind === `tane`).map((e) => e.id),
  pze = r8.filter((e) => e.kind === `tan`).map((e) => e.id);
function P8(e, t, n = A8.expert) {
  let r = new Set(e),
    i = new Set(t),
    a = 0;
  for (let e of N8) {
    let t = 0,
      o = 0;
    for (let n of e.ids) (r.has(n) && t++, i.has(n) || o++);
    o < e.k || (a += e.pts * j8(e.k - t) * (e.w ? n[e.w] : 1));
  }
  let o = f8(e),
    s = f8(t),
    c = (e, t, n, r) =>
      t - n < r
        ? e >= r
          ? e - r + 1
          : 0
        : e >= r
          ? e - r + 1 + 0.45
          : j8(r - e);
  return (
    (a +=
      c(o.tane, fze.length, s.tane, 5) +
      c(o.tan, pze.length, s.tan, 5) +
      c(o.kasu, 25, s.kasu, 10)),
    (a += o.hikari * 0.25 + o.tane * 0.08 + o.tan * 0.08 + o.kasu * 0.03),
    a
  );
}
function F8(e, t) {
  let n = new Set([...e.hands[t], ...e.field, ...e.caps[0], ...e.caps[1]]);
  return (
    e.drawn !== null && n.add(e.drawn),
    r8.map((e) => e.id).filter((e) => !n.has(e))
  );
}
function mze(e, t, n) {
  if (e <= 0 || t <= 0 || n <= 0) return 0;
  let r = 1;
  for (let i = 0; i < t; i++) r *= Math.max(0, (n - e - i) / (n - i));
  return 1 - r;
}
function hze(e, t, n, r, i, a) {
  let o = new Map();
  for (let t of e) {
    let e = a8(t),
      n = o.get(e);
    n ? n.push(t) : o.set(e, [t]);
  }
  let s = P8(n, t, a),
    c = 0;
  for (let [e, l] of o) {
    let o = r.filter((t) => a8(t) === e).length;
    if (!o) continue;
    let u = 0;
    if (l.length === 3) u = P8([...n, ...l], t, a) - s;
    else for (let e of l) u = Math.max(u, P8([...n, e], t, a) - s);
    let d = Math.min(1, mze(o, i, r.length) + o / Math.max(1, r.length));
    c += u * d;
  }
  return c;
}
function I8(e, t, n, r, i, a) {
  let o = e.caps[t],
    s = e.caps[c8(t)],
    c = n.length ? [...o, ...n] : o,
    l = P8(c, s, i) - P8(o, s, i),
    u = P8(s, o, i) - P8(s, c, i),
    d = hze(r, c, s, a, e.hands[c8(t)].length, i);
  return i.self * l + i.deny * u - i.expose * d;
}
function gze(e, t, n, r) {
  let i = A8[n],
    a = F8(e, t),
    o = [];
  for (let n of e.hands[t]) {
    let s = _8(e, n),
      c = s.length ? s : [void 0];
    for (let s of c) {
      let c = v8(e, n, s),
        l = I8(
          e,
          t,
          c,
          c.length ? e.field.filter((e) => !c.includes(e)) : [...e.field, n],
          i,
          a,
        );
      if (!c.length) {
        let r = e.hands[t].filter((e) => e !== n && a8(e) === a8(n)).length;
        ((l += r ? 0.15 : 0), (l -= r8[n].kind === `kasu` ? 0 : 0.12));
      }
      (r && i.noise && (l += (r.next() - 0.5) * i.noise),
        o.push({ card: n, target: s, value: l }));
    }
  }
  return o.sort((e, t) => t.value - e.value);
}
function L8(e, t, n, r) {
  return gze(e, t, n, r)[0];
}
function R8(e, t, n) {
  if (e.drawn === null) return;
  let r = _8(e, e.drawn);
  if (!r.length) return;
  let i = A8[n],
    a = F8(e, t),
    o = r[0],
    s = -1 / 0;
  for (let n of r) {
    let r = v8(e, e.drawn, n),
      c = I8(
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
function z8(e, t) {
  let n = new Set(e),
    r = new Set(t),
    i = 99;
  for (let e of N8) {
    let t = 0,
      a = 0;
    for (let i of e.ids) (n.has(i) && t++, r.has(i) || a++);
    a < e.k || t >= e.k || (i = Math.min(i, e.k - t));
  }
  let a = f8(e),
    o = f8(t),
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
function B8(e, t, n, r = 0) {
  let i = c8(t),
    a = e.hands[t].length,
    o = T8(e, t).base,
    s = z8(e.caps[i], e.caps[t]),
    c = z8(e.caps[t], e.caps[i]);
  if (e.koi[i] > 0 || a < 2) return !1;
  switch (n) {
    case `cautious`:
      return o <= 1 && a >= 5 && s >= 3 && c <= 1;
    case `bold`:
      return a >= 3 && o < 7 && s >= 2;
    case `boss`:
      return (
        r + o > 0 &&
        P8(e.caps[t], e.caps[i]) >= P8(e.caps[i], e.caps[t]) + 1 &&
        s >= 2 &&
        a >= 3 &&
        o < 7 &&
        c <= 1
      );
    case `expert`:
      return o < 4 && a >= 4 && s >= 3 && c <= 1;
  }
}
var V8 = 100 / 163,
  H8 = `#17110d`,
  U8 = `#f4ead2`,
  W8 = `#cf2f22`,
  G8 = `#9c1d17`,
  K8 = `#2f7a3a`,
  q8 = `#1d5229`,
  J8 = `#e2ad2a`,
  Y8 = `#2a4c9c`,
  X8 = `#6d3fa0`,
  _ze = `#f1b3c2`,
  vze = `#7b4a22`;
function Z8(e, t, n = !0) {
  (e.beginPath(), e.moveTo(t[0], t[1]));
  for (let n = 2; n < t.length; n += 2) e.lineTo(t[n], t[n + 1]);
  n && e.closePath();
}
function Q8(e, t, n = H8, r = 1.2) {
  (t && ((e.fillStyle = t), e.fill()),
    n && ((e.strokeStyle = n), (e.lineWidth = r), e.stroke()));
}
function $8(e, t, n, r, i, a = 0) {
  (e.beginPath(),
    e.ellipse(t, n, Math.max(0.01, r), Math.max(0.01, i), a, 0, Math.PI * 2));
}
function e5(e, t, n, r, i, a = H8, o = 1.2) {
  ($8(e, t, n, r, r), Q8(e, i, a, o));
}
function t5(e, t, n, r) {
  (e.beginPath(), e.moveTo(t[0], t[1]));
  for (let n = 2; n + 3 < t.length; n += 4)
    e.quadraticCurveTo(t[n], t[n + 1], t[n + 2], t[n + 3]);
  ((e.strokeStyle = n),
    (e.lineWidth = r),
    (e.lineCap = `round`),
    (e.lineJoin = `round`),
    e.stroke());
}
var n5 = (e, t) => {
  let n = Math.sin(e * 12.9898 + t * 78.233) * 43758.5453;
  return n - Math.floor(n);
};
function r5(e, t, n, r = W8, i = !0) {
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
function i5(e, t, n, r, i, a, o = J8) {
  for (let o = 0; o < 5; o++) {
    let s = (o / 5) * Math.PI * 2 - Math.PI / 2;
    e5(
      e,
      t + Math.cos(s) * r * 0.62,
      n + Math.sin(s) * r * 0.62,
      r * 0.48,
      i,
      a,
      0.7,
    );
  }
  e5(e, t, n, r * 0.26, o, null);
}
function yze(e, t, n, r, i, a) {
  (e.save(), e.translate(n, r), e.rotate(i));
  let o = t === `ao` ? Y8 : W8;
  if (
    (e.beginPath(),
    e.moveTo(-17 / 2, -37),
    e.lineTo(17 / 2, -37),
    e.lineTo(17 / 2, 34),
    e.lineTo(0, 39),
    e.lineTo(-17 / 2, 34),
    e.closePath(),
    Q8(e, o, H8, 1.6),
    (e.strokeStyle = t === `ao` ? `#9fb6e6` : `#f2c27a`),
    (e.lineWidth = 0.9),
    e.strokeRect(-6.3, -34.8, 12.6, 65),
    t5(e, [0, -37, -4, -43, 2, -47], H8, 1.2),
    a)
  ) {
    ((e.fillStyle = H8),
      (e.font = `700 11px ${yr}`),
      (e.textAlign = `center`),
      (e.textBaseline = `middle`));
    let t = [...a],
      n = Math.min(12.5, 60 / t.length);
    t.forEach((t, r) => e.fillText(t, 0, -28 + n * (r + 0.5)));
  }
  e.restore();
}
function bze(e, t, n, r) {
  (e.beginPath(),
    e.moveTo(t - r, n),
    e.quadraticCurveTo(t - r, n - r * 0.95, t, n - r * 0.95),
    e.quadraticCurveTo(t + r, n - r * 0.95, t + r, n),
    e.closePath(),
    Q8(e, K8, H8, 1.3),
    (e.strokeStyle = q8),
    (e.lineWidth = 0.8));
  for (let i = 1; i < 8; i++) {
    let a = Math.PI + (i / 8) * Math.PI;
    (e.beginPath(),
      e.moveTo(t, n),
      e.lineTo(t + Math.cos(a) * r * 0.85, n + Math.sin(a) * r * 0.82),
      e.stroke());
  }
}
