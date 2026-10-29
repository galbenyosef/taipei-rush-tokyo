// tokyo/assets/worker-DgMkLY7L 13 — push
// Lines 5639-5979 of readable/tokyo/assets/worker-DgMkLY7L.pretty.js (statement-aligned).
function At(e, t) {
  let n = 0;
  return e.map(([e, r, i, a]) => {
    let o = Tt(i, t),
      s = [];
    for (let e = 0; e < r; e++) s.push(o[e % o.length]);
    let c = { kind: e, bars: r, start: n, prog: s, tr: a ?? 0 };
    return ((n += r), c);
  });
}
function jt(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (t < r.start + r.bars) return [r, t - r.start, e[n + 1]];
  }
  let n = e[e.length - 1];
  return [n, n.bars - 1, void 0];
}
const Mt = (e) => e.reduce((e, t) => e + t.bars, 0);
function Nt(e, t) {
  if (t) for (let n of e) n.inst.startsWith(`drum:`) || (n.m += t);
  return e;
}
const Pt = (e) => (e <= 6 ? e : e - 12);
function X(e, t, n, r, i, a = `bass`, o = 33) {
  let s = K(o + 6, [e.bass], o, o + 11),
    c = s + 7,
    l = K(s, [t.bass], s - 7, s + 7),
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
function Z(e, t, n, r, i, a, o = 64, s = 0.7, c = `keys`) {
  let l = Dt(e, o, n === `lofi` ? 5 : 4, t.v);
  t.v = l;
  let u = K(o - 18, [e.bass], o - 24, o - 13),
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
function Ft(e, t, n) {
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
const It = [
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
  Lt = [
    `晴天娃娃 Sunny Doll`,
    `阿翔 A-Xiang`,
    `藍色公路 Blue Highway`,
    `小雨 Drizzle`,
    `捷運人 MRT People`,
    `夏天樂團 Summer Band`,
  ],
  Rt = {
    canon: [`I`, `V`, `vi`, `iii`, `IV`, `I`, `IV`, `V`],
    royal: [`IVmaj7`, `V7`, `iii7`, `vi`],
    pop: [`I`, `V`, `vi`, `IV`],
    fifties: [`I`, `vi`, `IV`, `V`],
    sad: [`vi`, `IV`, `I`, `V`],
  },
  Q = (...e) => e.map(kt);
function zt(t) {
  let n = new e(Y(`pop/` + t)),
    r = n.pick([72, 76, 80, 84, 88, 96]),
    i = n.pick([0, 2, 3, 4, 5, 7, 9]),
    a = Pt(i),
    o = n.pick([Rt.canon, Rt.pop, Rt.fifties]),
    s = n.pick([Rt.royal, Rt.sad, Rt.canon, Rt.pop].filter((e) => e !== o)),
    c = n.pick([
      [`ii7`, `iii7`, `IVmaj7`, `V7sus4`],
      [`IV`, `V`, `iii`, `vi`],
      [`IV`, `V/3`, `vi`, `V`],
    ]),
    l = [`vi`, `iii`, `IV`, `V`],
    u = n.chance(0.7) ? n.pick([1, 2]) : 0,
    d = At(
      [
        [`intro`, 4, s],
        [`verse`, 8, o],
        [`pre`, 4, c],
        [`chorus`, 8, s],
        [`inter`, 4, o],
        [`verse`, 8, o],
        [`pre`, 4, c],
        [`chorus`, 8, s],
        [`bridge`, 4, l],
        [`chorus2`, 8, s, u],
        [`outro`, 4, s],
      ],
      i,
    ),
    f = d[1].prog,
    p = d[3].prog,
    m = J(n, {
      chords: f,
      key: i,
      scale: G.major,
      lo: 60 + a,
      hi: 74 + a,
      inst: `vox`,
      vel: 0.75,
      rhythms: Q(
        `x-x-x---x-x-x---`,
        `..x-x-x-x---x---`,
        `x---x-x-x-x-x---`,
        `x-x-x-x---..x-x-`,
      ),
      cadence: Q(`x---x---x-------`, `x-x-x-----------`, `x-------x-------`),
    }),
    h = J(n, {
      chords: p,
      key: i,
      scale: G.pentaMaj,
      lo: 65 + a,
      hi: 81 + a,
      inst: `vox`,
      vel: 0.9,
      rhythms: Q(
        `x---x---x-x-x---`,
        `x-x---x-x---x---`,
        `x-----x-x---x---`,
        `x-x-x---x---x-x-`,
      ),
      cadence: Q(`x---x-----------`, `x-x-x-----------`),
    }),
    g = J(n, {
      chords: p,
      key: i,
      scale: G.pentaMaj,
      lo: 69 + a,
      hi: 86 + a,
      inst: `erhu`,
      vel: 0.55,
      rhythms: Q(`x-------x-------`, `........x---x---`, `x-----------x---`),
      cadence: Q(`x---------------`),
    }),
    _ = { v: null },
    v = { v: null },
    y = { v: null },
    [b, x] = n.pick(It);
  return {
    title: { zh: b, en: x },
    artist: n.pick(Lt),
    bpm: r,
    swing: 0.5,
    beatsPerBar: 4,
    bars: Mt(d),
    bar(n) {
      let [r, i, o] = jt(d, n),
        s = r.prog[i],
        c = i + 1 < r.bars ? r.prog[i + 1] : (o?.prog[0] ?? s),
        l = new e(Y(`pop/${t}/${n}`)),
        u = [],
        f = i === r.bars - 1,
        p = r.kind;
      if (
        (p === `verse` || p === `inter`
          ? (q(`x.......x.x.....`, `kick`, u),
            q(`....x.......x...`, `rim`, u, `drums`, 0.25, 0.8),
            q(`x.g.x.g.x.g.x.g.`, `hat_c`, u, `drums`, 0.25, 0.6))
          : p === `pre`
            ? (q(`x.......x.x.....`, `kick`, u),
              q(f ? `....o...x.o.xxxx` : `....o.......o...`, `snare`, u),
              q(`x.x.x.x.x.x.x.x.`, `hat_c`, u, `drums`, 0.25, 0.6))
            : (p.startsWith(`chorus`) || p === `bridge`) &&
              (q(
                p === `bridge` ? `x.......x.......` : `x.....x.x.x.....`,
                `kick`,
                u,
              ),
              q(`....x.......x...`, `snare`, u),
              q(`x.x.x.x.x.x.x.o.`, `hat_c`, u, `drums`, 0.25, 0.7),
              i % 4 == 0 && q(`x`, `crash`, u, `drums`, 0.25, 0.6),
              q(`g.g.g.g.g.g.g.g.`, `shaker`, u, `perc`, 0.25, 0.5)),
        f &&
          o &&
          (o.kind.startsWith(`chorus`) || o.kind === `verse`) &&
          p !== `intro` &&
          Ft(`tom`, u, l),
        p !== `intro` &&
          p !== `outro` &&
          X(
            s,
            c,
            p.startsWith(`chorus`) ? `pop` : `ballad`,
            u,
            l,
            `bass`,
            33 + a,
          ),
        p === `intro` || p === `outro`)
      ) {
        if ((Z(s, _, `arp`, u, l, `piano`, 64 + a, 0.55), p === `intro`))
          for (let e of h[i % h.length])
            u.push({
              ...e,
              inst: `piano`,
              m: e.m + 12,
              v: e.v * 0.6,
              ch: `keys`,
            });
      } else
        p.startsWith(`chorus`)
          ? Z(s, _, `block`, u, l, `piano`, 66 + a, 0.55)
          : p === `bridge`
            ? Z(s, _, `whole`, u, l, `piano`, 64 + a, 0.6)
            : Z(s, _, `arp`, u, l, `piano`, 64 + a, 0.6);
      if (
        ((p === `pre` || p.startsWith(`chorus`) || p === `bridge`) &&
          Z(s, v, `whole`, u, l, `pad`, 60 + a, 0.5, `pad`),
        (p === `chorus2` ||
          p === `bridge` ||
          (p === `chorus` && r.start > 30)) &&
          Z(s, y, `whole`, u, l, `strings`, 72 + a, 0.45, `pad`),
        p === `verse` && u.push(...m[i % m.length].map((e) => ({ ...e }))),
        p.startsWith(`chorus`) &&
          (u.push(...h[i % h.length].map((e) => ({ ...e }))),
          p === `chorus2` || r.start > 30))
      )
        for (let e of g[i % g.length]) u.push({ ...e });
      if (p === `inter` || p === `bridge`)
        for (let e of g[i % g.length]) u.push({ ...e, v: e.v * 1.2 });
      if (p === `outro` && f)
        for (let e of Dt(s, 64 + a, 4, null))
          u.push({ t: 0, m: e, d: 4, v: 0.5, inst: `pad`, ch: `pad` });
      return Nt(u, r.tr);
    },
    sidechain: () => 0.15,
  };
}
