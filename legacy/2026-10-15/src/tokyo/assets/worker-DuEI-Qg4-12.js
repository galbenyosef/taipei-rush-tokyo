// tokyo/assets/worker-DuEI-Qg4 12 — math
// Lines 5265-5606 of readable/tokyo/assets/worker-DuEI-Qg4.pretty.js (statement-aligned).
function ht(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    ((t ^= e.charCodeAt(n)), (t = Math.imul(t, 16777619)));
  return t >>> 0;
}
function gt(e, t) {
  let n = xe[e] ?? 1;
  return t === `low` ? Math.min(n, 2) : n;
}
function _t(e) {
  let t = [],
    n = (e, n) => t.push({ id: e, pri: n });
  (n(`noise/white`, 0), n(`noise/pink`, 0));
  for (let e of pe) n(`ir/world/${e}`, 0);
  n(`amb/amb_city`, 0);
  for (let t of ft) for (let r = 0; r < gt(t, e); r++) n(`sfx/${t}/${r}`, 0);
  n(`amb/amb_wind`, 1);
  for (let e of lt) n(`drum/${e}`, 1);
  for (let t of Object.keys(be))
    if (!(ft.includes(t) || ut.has(t)))
      for (let r = 0; r < gt(t, e); r++) n(`sfx/${t}/${r}`, 1);
  return t;
}
function vt(e, t) {
  let n = [];
  for (let r of e)
    if (r.startsWith(`sfx/`) && r.endsWith(`/*`)) {
      let e = r.slice(4, -2);
      if (!be[e]) continue;
      for (let r = 0; r < gt(e, t); r++) n.push(`sfx/${e}/${r}`);
    } else n.push(r);
  return n;
}
function yt(e, t, n = !1) {
  let r = e.slice(0, e.indexOf(`/`)),
    i = St(e, t);
  if (r === `ir`) return i;
  i = xt(e, r, i);
  let a = i.ch[0].length / i.sr > 1.5;
  return (
    r === `sfx` && (i = bt(i)),
    t === `low`
      ? se(i, 22050, (r === `sfx` || r === `inst`) && a)
      : n
        ? se(i, 22050, !1)
        : i
  );
}
function bt(e) {
  let t = e.ch,
    n = t[0].length,
    r = 0;
  for (let e of t)
    for (let t = 0; t < n; t++) {
      let n = e[t] < 0 ? -e[t] : e[t];
      n > r && (r = n);
    }
  if (r <= 0) return e;
  let i = r * 10 ** -3,
    a = 0;
  for (let e of t)
    for (let t = n - 1; t > a; t--)
      if ((e[t] < 0 ? -e[t] : e[t]) > i) {
        a = t;
        break;
      }
  let o = Math.max(1, Math.round(0.02 * e.sr)),
    s = a + 1 + o;
  return n - s < 0.05 * e.sr
    ? e
    : {
        sr: e.sr,
        ch: t.map((e) => {
          let t = e.slice(0, s);
          for (let e = 0; e < o; e++) t[s - o + e] *= 1 - (e + 1) / o;
          return t;
        }),
      };
}
function xt(e, t, n) {
  if (n.ch.length !== 2) return n;
  let [r, i] = n.ch,
    a = e.split(`/`)[1],
    o = (t === `sfx` && !mt.has(a)) || (t === `amb` && pt.has(a)),
    s = !0;
  for (let e = 0; e < r.length; e += 7)
    if (Math.abs(r[e] - i[e]) > 1e-5) {
      s = !1;
      break;
    }
  if (!s && !o && t === `sfx`) {
    let e = 0,
      t = 0;
    for (let n = 0; n < r.length; n++) {
      let a = r[n],
        o = i[n];
      ((e += (a + o) * (a + o)), (t += (a - o) * (a - o)));
    }
    s = t <= e * 10 ** (-24 / 10);
  }
  if (!s && !o) return n;
  let c = o ? Math.SQRT1_2 : 0.5,
    l = new Float32Array(r.length);
  for (let e = 0; e < l.length; e++) l[e] = (r[e] + i[e]) * c;
  return { sr: n.sr, ch: [l] };
}
function St(t, n) {
  let r = new e(ht(t) ^ 8002364),
    [i, a, o] = t.split(`/`),
    s = n === `low` ? 0.6 : n === `medium` ? 0.8 : 1;
  switch (i) {
    case `sfx`: {
      let e = be[a];
      if (!e) throw Error(`no sfx ` + a);
      return e(r, Number(o ?? 0));
    }
    case `amb`: {
      let e = we[a];
      if (!e) throw Error(`no amb ` + a);
      return e(r, s);
    }
    case `noise`:
      return Te(a, r);
    case `ir`: {
      let [e, t, r] = fe(a, n);
      return ae(Number(o), e, t, r);
    }
    case `tune`:
      return st(a, r);
    case `drum`: {
      let e = Xe[a];
      if (!e) throw Error(`no drum ` + a);
      return e(r);
    }
    case `inst`: {
      let e = Ye[a];
      if (!e) throw Error(`no inst ` + a);
      let t = dt.has(a) ? 2 : 1,
        n = e.render(r, Number(o), e.sr * t, e.dur);
      return t > 1
        ? { sr: e.sr, ch: n.ch.map((n) => oe(n, e.sr * t, e.sr)) }
        : n;
    }
  }
  throw Error(`bad job ` + t);
}
const G = {
    major: [0, 2, 4, 5, 7, 9, 11],
    minor: [0, 2, 3, 5, 7, 8, 10],
    dorian: [0, 2, 3, 5, 7, 9, 10],
    mixo: [0, 2, 4, 5, 7, 9, 10],
    pentaMaj: [0, 2, 4, 7, 9],
    pentaMin: [0, 3, 5, 7, 10],
    blues: [0, 3, 5, 6, 7, 10],
  },
  Ct = { I: 0, II: 2, III: 4, IV: 5, V: 7, VI: 9, VII: 11 };
function wt(e, t) {
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
    u = (t + Ct[a.toUpperCase()] + r + 120) % 12,
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
function Tt(e, t) {
  return e.map((e) => wt(e, t));
}
function K(e, t, n = 0, r = 127) {
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
function Et(e) {
  return e.iv.map((t) => (e.root + t) % 12);
}
function Dt(e, t, n, r) {
  let i = e.iv.map((e) => e % 12);
  (i.length >= 4 && n <= i.length && (i = i.filter((e) => e !== 0)),
    (i = [...new Set(i)].sort((e, t) => e - t)));
  let a = i.map((t) => (e.root + t) % 12),
    o = [];
  for (let e = 0; e < a.length; e++) {
    let r = [],
      i = K(t - 5, [a[e]]);
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
function Ot(e, t, n, r) {
  let i = [];
  for (let a = n; a <= r; a++)
    t.includes((((a - e) % 12) + 12) % 12) && i.push(a);
  return i;
}
function kt(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    if (e[n] !== `x`) continue;
    let r = 1;
    for (; n + r < e.length && e[n + r] === `-`;) r++;
    t.push([n, r]);
  }
  return t;
}
function q(e, t, n, r = `drums`, i = 0.25, a = 1) {
  for (let o = 0; o < e.length; o++) {
    let s = e[o];
    if (s === `.` || s === ` `) continue;
    let c = s === `x` ? 1 : s === `o` ? 0.65 : s === `g` ? 0.32 : 0.8;
    n.push({ t: o * i, m: 60, d: i, v: c * a, inst: `drum:` + t, ch: r });
  }
}
function J(e, t) {
  let n = t.chords.length,
    r = t.beatsPerBar ?? 4,
    i = Ot(t.key, t.scale, t.lo, t.hi),
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
      v = (e) => Et(t.halfChords ? t.halfChords[f * 2 + +(e >= 8)] : g),
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
          f && (l = K(l, v(o), t.lo, t.hi)));
      else if (f || n === 0) {
        p >= 2 && e.chance(0.5) && (d = -1);
        let r = n === 0 && p === 0 ? e.pick([2, 3, 4]) : e.pick([1, 2, 3]);
        l = K(
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
          (l = K(l, [g.root, (g.root + g.iv[1]) % 12], t.lo, t.hi)),
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
function Y(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    ((t ^= e.charCodeAt(n)), (t = Math.imul(t, 16777619)));
  return t >>> 0;
}
