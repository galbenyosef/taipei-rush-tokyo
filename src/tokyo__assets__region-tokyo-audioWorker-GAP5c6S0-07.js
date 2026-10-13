// tokyo__assets__region-tokyo-audioWorker-GAP5c6S0 07 — includes
// Lines 2047-2311 of readable/tokyo__assets__region-tokyo-audioWorker-GAP5c6S0.pretty.js (statement-aligned).
function Ge(e) {
  let t = M,
    n = a(e ? 1.3 : 1, t),
    r = () =>
      P(t, 1880, 0.95, [
        [1, 1, 0.42],
        [2.76, 0.35, 0.14],
        [5.4, 0.12, 0.05],
        [0.5, 0.08, 0.3],
      ]);
  return (S(n, r(), 0.8, 160), e && S(n, r(), 0.75, 7680), o(C(n, 0.7), t));
}
function Ke(e, t) {
  let [n, r, i] = e.split(`/`);
  if (n === `sfx`) {
    let e = Be[r];
    if (!e) throw Error(`no tokyo sfx ` + r);
    return e(t, Number(i ?? 0));
  }
  if (n === `amb`) {
    let e = He[r];
    if (!e) throw Error(`no tokyo amb ` + r);
    return e(t);
  }
  if (n === `drum`) {
    let e = We[r];
    if (!e) throw Error(`no tokyo drum ` + r);
    return e(t);
  }
  throw Error(`bad tokyo id ` + e);
}
const z = {
    major: [0, 2, 4, 5, 7, 9, 11],
    minor: [0, 2, 3, 5, 7, 8, 10],
    dorian: [0, 2, 3, 5, 7, 9, 10],
    mixo: [0, 2, 4, 5, 7, 9, 10],
    pentaMaj: [0, 2, 4, 7, 9],
    pentaMin: [0, 3, 5, 7, 10],
    blues: [0, 3, 5, 6, 7, 10],
  },
  qe = { I: 0, II: 2, III: 4, IV: 5, V: 7, VI: 9, VII: 11 };
function Je(e, t) {
  let n = e,
    r = 0;
  for (; n[0] === `b`;) (r--, (n = n.slice(1)));
  n[0] === `#` && (r++, (n = n.slice(1)));
  let i = /^(VII|VI|IV|V|III|II|I|vii|vi|iv|v|iii|ii|i)(.*)$/.exec(n);
  if (!i) return { sym: e, root: t, iv: [0, 4, 7], bass: t };
  let a = i[1],
    o = i[2],
    s = ``,
    c = o.indexOf(`/`);
  c >= 0 && ((s = o.slice(c + 1)), (o = o.slice(0, c)));
  let l = a === a.toLowerCase(),
    u = (t + qe[a.toUpperCase()] + r + 120) % 12,
    d = l ? [0, 3, 7] : [0, 4, 7];
  ((o.includes(`°`) || o.includes(`dim`)) && (d = [0, 3, 6]),
    o.includes(`sus4`) && (d = [0, 5, 7]),
    o.includes(`sus2`) && (d = [0, 2, 7]),
    o.includes(`maj7`) || o.includes(`maj9`)
      ? (d = [...d, 11])
      : (o.includes(`7`) || o.includes(`9`) || o.includes(`11`)) &&
        (d = [...d, o.includes(`°`) ? 9 : 10]),
    (o.includes(`9`) || o.includes(`add9`)) && (d = [...d, 14]),
    o.includes(`11`) && (d = [...d, 17]),
    o.includes(`6`) && !o.includes(`/6`) && (d = [...d, 9]));
  let f = u;
  return (
    s === `3` ? (f = (u + d[1]) % 12) : s === `5` && (f = (u + 7) % 12),
    { sym: e, root: u, iv: d, bass: f }
  );
}
function Ye(e, t) {
  return e.map((e) => Je(e, t));
}
function B(e, t, n = 0, r = 127) {
  let i = e,
    a = 1e9;
  for (let o = Math.max(n, e - 12); o <= Math.min(r, e + 12); o++) {
    let n = ((o % 12) + 12) % 12;
    if (!t.includes(n)) continue;
    let r = Math.abs(o - e);
    r < a && ((a = r), (i = o));
  }
  return i;
}
function Xe(e) {
  return e.iv.map((t) => (e.root + t) % 12);
}
function Ze(e, t, n, r) {
  let i = e.iv.map((e) => e % 12);
  (i.length >= 4 && n <= i.length && (i = i.filter((e) => e !== 0)),
    (i = [...new Set(i)].sort((e, t) => e - t)));
  let a = i.map((t) => (e.root + t) % 12),
    o = [];
  for (let e = 0; e < a.length; e++) {
    let r = [],
      i = B(t - 5, [a[e]]);
    r.push(i);
    let s = e;
    for (; r.length < n;) {
      s = (s + 1) % a.length;
      let e = i + 1;
      for (; ((e % 12) + 12) % 12 !== a[s];) e++;
      (r.push(e), (i = e));
    }
    o.push(r);
  }
  let s = o[0],
    c = 1e9;
  for (let e of o) {
    let n = 0;
    if (r && r.length)
      for (let t = 0; t < e.length; t++)
        n += Math.abs(e[t] - (r[t] ?? r[r.length - 1]));
    else n = Math.abs(e[0] + e[e.length - 1] - 2 * t);
    ((n += Math.abs((e[0] + e[e.length - 1]) / 2 - t) * 0.6),
      n < c && ((c = n), (s = e)));
  }
  return s;
}
function Qe(e, t, n, r) {
  let i = [];
  for (let a = n; a <= r; a++)
    t.includes((((a - e) % 12) + 12) % 12) && i.push(a);
  return i;
}
function $e(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    if (e[n] !== `x`) continue;
    let r = 1;
    for (; n + r < e.length && e[n + r] === `-`;) r++;
    t.push([n, r]);
  }
  return t;
}
function V(e, t, n, r = `drums`, i = 0.25, a = 1) {
  for (let o = 0; o < e.length; o++) {
    let s = e[o];
    if (s === `.` || s === ` `) continue;
    let c = s === `x` ? 1 : s === `o` ? 0.65 : s === `g` ? 0.32 : 0.8;
    n.push({ t: o * i, m: 60, d: i, v: c * a, inst: `drum:` + t, ch: r });
  }
}
function H(e, t) {
  let n = t.chords.length,
    r = t.beatsPerBar ?? 4,
    i = Qe(t.key, t.scale, t.lo, t.hi),
    a = (e) => {
      let t = 0,
        n = 1e9;
      for (let r = 0; r < i.length; r++) {
        let a = Math.abs(i[r] - e);
        a < n && ((n = a), (t = r));
      }
      return t;
    },
    o = [],
    s = t.start ?? Math.round((t.lo + t.hi) / 2),
    c = e.pick(t.rhythms),
    l = e.pick(t.rhythms),
    u = null,
    d = e.chance(0.5) ? 1 : -1;
  for (let f = 0; f < n; f++) {
    let p = f % 4,
      m = p === 3 || f === n - 1,
      h = m ? e.pick(t.cadence) : p === 1 ? l : c,
      g = t.chords[f],
      _ = [],
      v = (e) => Xe(t.halfChords ? t.halfChords[f * 2 + +(e >= 8)] : g),
      y = p === 2 && u && u.length === h.length,
      b = [],
      x = a(s);
    for (let n = 0; n < h.length; n++) {
      let [o, c] = h[n],
        l,
        f = o % 8 == 0 || (o % 4 == 0 && c >= 3);
      if (y && n > 0)
        ((x = Math.max(0, Math.min(i.length - 1, x + u[n]))),
          (l = i[x]),
          f && (l = B(l, v(o), t.lo, t.hi)));
      else if (f || n === 0) {
        p >= 2 && e.chance(0.5) && (d = -1);
        let r = n === 0 && p === 0 ? e.pick([2, 3, 4]) : e.pick([1, 2, 3]);
        l = B(
          s + d * r,
          v(o).filter((t) => t !== ((s % 12) + 12) % 12 || e.chance(0.3)),
          t.lo,
          t.hi,
        );
      } else {
        let t = e.chance(0.1) ? 0 : d * (e.chance(0.72) ? 1 : 2);
        ((x = Math.max(0, Math.min(i.length - 1, a(s) + t))), (l = i[x]));
      }
      (l >= t.hi - 1
        ? (d = -1)
        : l <= t.lo + 1
          ? (d = 1)
          : e.chance(0.22) && (d = -d),
        m &&
          n === h.length - 1 &&
          (l = B(l, [g.root, (g.root + g.iv[1]) % 12], t.lo, t.hi)),
        b.push(a(l) - a(s)),
        (x = a(l)),
        (s = l));
      let ee = (o / 16) * r;
      _.push({
        t: ee,
        m: l,
        d: (c / 16) * r,
        v: (t.vel ?? 0.85) * (f ? 1 : 0.85),
        inst: t.inst,
        ch: `lead`,
      });
    }
    (p === 0 && (u = b), o.push(_));
  }
  return o;
}
function U(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    ((t ^= e.charCodeAt(n)), (t = Math.imul(t, 16777619)));
  return t >>> 0;
}
function et(e, t) {
  let n = 0;
  return e.map(([e, r, i, a]) => {
    let o = Ye(i, t),
      s = [];
    for (let e = 0; e < r; e++) s.push(o[e % o.length]);
    let c = { kind: e, bars: r, start: n, prog: s, tr: a ?? 0 };
    return ((n += r), c);
  });
}
function W(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (t < r.start + r.bars) return [r, t - r.start, e[n + 1]];
  }
  let n = e[e.length - 1];
  return [n, n.bars - 1, void 0];
}
const G = (e) => e.reduce((e, t) => e + t.bars, 0),
  K = (e) => (e <= 6 ? e : e - 12),
  q = (...e) => e.map($e),
  J = (e, t = 0, n = 1) => e.map((e) => ({ ...e, m: e.m + t, v: e.v * n }));
function tt(e, t) {
  if (t) for (let n of e) n.inst.startsWith(`drum:`) || (n.m += t);
  return e;
}
function Y(e, t, n, r) {
  let i = Ze(e, t, n, r.v);
  return ((r.v = i), i);
}
function X(e, t) {
  return B(t + 6, [e.bass], t, t + 11);
}
const Z = {
  walk: [`IVmaj7`, `III7`, `vi7`, `v7`, `I7`],
  twofive: [`ii9`, `V9`, `Imaj9`, `vi9`],
  four: [`IVmaj7`, `iii7`, `vi9`, `V7sus4`],
  royal: [`IVmaj7`, `V7`, `iii7`, `vi7`],
};
