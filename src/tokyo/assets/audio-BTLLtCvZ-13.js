// tokyo/assets/audio-BTLLtCvZ 13 — chance
// Lines 5667-5919 of readable/tokyo/assets/audio-BTLLtCvZ.pretty.js (statement-aligned).
function Yt(e, t) {
  let n = t.chords.length,
    r = t.beatsPerBar ?? 4,
    i = qt(t.key, t.scale, t.lo, t.hi),
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
      v = (e) => Gt(t.halfChords ? t.halfChords[f * 2 + +(e >= 8)] : g),
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
          f && (l = W(l, v(o), t.lo, t.hi)));
      else if (f || n === 0) {
        p >= 2 && e.chance(0.5) && (d = -1);
        let r = n === 0 && p === 0 ? e.pick([2, 3, 4]) : e.pick([1, 2, 3]);
        l = W(
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
          (l = W(l, [g.root, (g.root + g.iv[1]) % 12], t.lo, t.hi)),
        b.push(a(l) - a(s)),
        (x = a(l)),
        (s = l));
      let S = (o / 16) * r;
      _.push({
        t: S,
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
function Xt(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    ((t ^= e.charCodeAt(n)), (t = Math.imul(t, 16777619)));
  return t >>> 0;
}
function Zt(e, t) {
  let n = 0;
  return e.map(([e, r, i, a]) => {
    let o = Wt(i, t),
      s = [];
    for (let e = 0; e < r; e++) s.push(o[e % o.length]);
    let c = { kind: e, bars: r, start: n, prog: s, tr: a ?? 0 };
    return ((n += r), c);
  });
}
function Qt(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (t < r.start + r.bars) return [r, t - r.start, e[n + 1]];
  }
  let n = e[e.length - 1];
  return [n, n.bars - 1, void 0];
}
var $t = (e) => e.reduce((e, t) => e + t.bars, 0);
function en(e, t) {
  if (t) for (let n of e) n.inst.startsWith(`drum:`) || (n.m += t);
  return e;
}
var tn = (e) => (e <= 6 ? e : e - 12);
function nn(e, t, n, r, i, a = `bass`, o = 33) {
  let s = W(o + 6, [e.bass], o, o + 11),
    c = s + 7,
    l = W(s, [t.bass], s - 7, s + 7),
    u = l === s ? s + 7 : l + (l > s ? -1 : i.chance(0.5) ? 2 : 1),
    d = (e, t, n, i = 0.85) =>
      r.push({ t: e, m: t, d: n, v: i, inst: a, ch: `bass` });
  switch (n) {
    case `ballad`:
      (d(0, s, 1.9),
        d(2, i.chance(0.5) ? c : s, 1.4, 0.7),
        d(3.5, u, 0.45, 0.6));
      break;
    case `pop`:
      (d(0, s, 1.4),
        d(1.5, s, 0.45, 0.6),
        d(2, s + 12, 0.9, 0.7),
        d(3, c, 0.45, 0.65),
        d(3.5, u, 0.45, 0.6));
      break;
    case `eighths`:
      for (let e = 0; e < 8; e++)
        d(e * 0.5, e === 7 ? u : s, 0.42, e % 2 ? 0.7 : 0.9);
      break;
    case `lofi`:
      (d(0, s, 1.4),
        d(2.5, i.chance(0.6) ? s : c, 0.9, 0.7),
        d(3.5, u, 0.45, 0.55));
      break;
    case `edm`:
      for (let e = 0; e < 4; e++) d(e + 0.5, e % 2 ? s + 12 : s, 0.45, 0.9);
      break;
    default:
      d(0, s, 3.8);
  }
}
function K(e, t, n, r, i, a, o = 64, s = 0.7, c = `keys`) {
  let l = Kt(e, o, n === `lofi` ? 5 : 4, t.v);
  t.v = l;
  let u = W(o - 18, [e.bass], o - 24, o - 13),
    d = (e, t, n, i) => r.push({ t: e, m: t, d: n, v: i * s, inst: a, ch: c });
  switch (n) {
    case `arp`:
      [u, u + 7, l[0], l[1], l[2], l[1], l[0], u + 7].forEach((e, t) =>
        d(t * 0.5, e, 0.9, t === 0 ? 0.9 : 0.62),
      );
      break;
    case `arp16`: {
      let e = [l[0], l[1], l[2], l[3] ?? l[0] + 12];
      for (let t = 0; t < 16; t++)
        d(
          t * 0.25,
          e[t % 4] + (t >= 8 && t % 4, 0),
          0.3,
          t % 4 == 0 ? 0.8 : 0.55,
        );
      break;
    }
    case `block`:
      for (let [e, t, n] of [
        [0, 1, 0.85],
        [1.5, 0.45, 0.55],
        [2, 0.9, 0.7],
        [3, 0.45, 0.5],
        [3.5, 0.45, 0.6],
      ])
        for (let r of l) d(e, r, t, n);
      d(0, u, 1.9, 0.8);
      break;
    case `whole`:
      for (let e of l) d(0, e, 3.9, 0.7);
      break;
    case `lofi`: {
      let e = i.chance(0.5) ? 1.75 : 2.5;
      (l.forEach((t, n) => d(n * 0.025, t, e - 0.1, 0.62 + i.bi() * 0.05)),
        l.slice(1).forEach((t, n) => d(e + n * 0.02, t, 4 - e - 0.1, 0.45)));
      break;
    }
    case `stab`: {
      let e = i.chance(0.5) ? [0, 0.75, 1.5, 2.5, 3.25] : [0.5, 1.5, 2.5, 3.5];
      for (let t of e) for (let e of l) d(t, e, 0.35, 0.8);
      break;
    }
    case `offbeat`:
      for (let e = 0; e < 4; e++) for (let t of l) d(e + 0.5, t, 0.4, 0.75);
  }
}
function rn(e, t, n) {
  if (e === `tom`)
    [`tom_h`, `tom_h`, `tom_l`, `tom_l`].forEach((e, n) =>
      t.push({
        t: 3 + n * 0.25,
        m: 60,
        d: 0.25,
        v: 0.9,
        inst: `drum:` + e,
        ch: `drums`,
      }),
    );
  else if (e === `snare`)
    for (let e = 0; e < 8; e++)
      t.push({
        t: 2 + e * 0.25,
        m: 60,
        d: 0.25,
        v: 0.5 + e * 0.06,
        inst: `drum:snare`,
        ch: `drums`,
      });
  else
    for (let e = 0; e < 16; e++)
      t.push({
        t: e * 0.25,
        m: 60,
        d: 0.25,
        v: 0.35 + e * 0.04,
        inst: `drum:snare`,
        ch: `drums`,
      });
}
var an = [
    [`台北的雨`, `Taipei Rain`],
    [`最後一班捷運`, `Last MRT Home`],
    [`珍奶與你`, `Boba & You`],
    [`101 的煙火`, `Fireworks at 101`],
    [`西門町之戀`, `Ximending Love`],
    [`象山夕陽`, `Sunset on Elephant Mountain`],
    [`騎樓下`, `Under the Arcade`],
    [`悠悠卡的心`, `YOYO Card Heart`],
    [`淡水河邊`, `By the Tamsui`],
    [`便利商店的夜`, `Convenience Store Night`],
  ],
  on = [
    `晴天娃娃 Sunny Doll`,
    `阿翔 A-Xiang`,
    `藍色公路 Blue Highway`,
    `小雨 Drizzle`,
    `捷運人 MRT People`,
    `夏天樂團 Summer Band`,
  ],
  sn = {
    canon: [`I`, `V`, `vi`, `iii`, `IV`, `I`, `IV`, `V`],
    royal: [`IVmaj7`, `V7`, `iii7`, `vi`],
    pop: [`I`, `V`, `vi`, `IV`],
    fifties: [`I`, `vi`, `IV`, `V`],
    sad: [`vi`, `IV`, `I`, `V`],
  },
  q = (...e) => e.map(Jt);
