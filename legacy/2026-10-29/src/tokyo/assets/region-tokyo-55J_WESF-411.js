// tokyo/assets/region-tokyo-55J_WESF 411 — inst
// Lines 147587-147846 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function EIe(e) {
  let t = e.lang || ``,
    n = e.name || ``,
    r =
      (wIe.test(n) ? 3 : 0) -
      (TIe.test(n) ? 5 : 0) +
      (e.localService ? 0.5 : 0);
  return /^ja[-_]JP/i.test(t) || /^jpn/i.test(t)
    ? 20 + r
    : /^ja$/i.test(t) || /日本語|Japanese/i.test(n)
      ? 10 + r
      : -1;
}
function DIe(e) {
  if (typeof speechSynthesis > `u`) return;
  let t = () => {
    try {
      let t = null,
        n = -1;
      for (let e of speechSynthesis.getVoices()) {
        let r = EIe(e);
        r > n && ((n = r), (t = e));
      }
      e.ja = n >= 0 ? t : null;
    } catch {}
  };
  t();
  try {
    speechSynthesis.addEventListener?.(`voiceschanged`, t);
  } catch {}
}
function N2(e, t) {
  let n = 0;
  return e.map(([e, r, i, a]) => {
    let o = Dn(i, t),
      s = [];
    for (let e = 0; e < r; e++) s.push(o[e % o.length]);
    let c = { kind: e, bars: r, start: n, prog: s, tr: a ?? 0 };
    return ((n += r), c);
  });
}
function P2(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (t < r.start + r.bars) return [r, t - r.start, e[n + 1]];
  }
  let n = e[e.length - 1];
  return [n, n.bars - 1, void 0];
}
var F2 = (e) => e.reduce((e, t) => e + t.bars, 0),
  I2 = (e) => (e <= 6 ? e : e - 12),
  L2 = (...e) => e.map(bte),
  R2 = (e, t = 0, n = 1) => e.map((e) => ({ ...e, m: e.m + t, v: e.v * n }));
function z2(e, t) {
  if (t) for (let n of e) n.inst.startsWith(`drum:`) || (n.m += t);
  return e;
}
function B2(e, t, n, r) {
  let i = kn(e, t, n, r.v);
  return ((r.v = i), i);
}
function V2(e, t) {
  return jn(t + 6, [e.bass], t, t + 11);
}
var H2 = {
  walk: [`IVmaj7`, `III7`, `vi7`, `v7`, `I7`],
  twofive: [`ii9`, `V9`, `Imaj9`, `vi9`],
  four: [`IVmaj7`, `iii7`, `vi9`, `V7sus4`],
  royal: [`IVmaj7`, `V7`, `iii7`, `vi7`],
};
function OIe(e, t) {
  let n = new En(Pn(`tk-citypop/` + e)),
    r = n.pick([96, 100, 104, 108, 112]),
    i = n.pick([0, 2, 3, 5, 7, 8, 10]),
    a = I2(i),
    o = n.pick([H2.twofive, H2.four, H2.royal]),
    s = n.pick([H2.walk, H2.royal, H2.four].filter((e) => e !== o)),
    c = N2(
      [
        [`intro`, 4, s],
        [`verse`, 8, o],
        [`pre`, 4, [`ii7`, `iii7`, `IVmaj7`, `V7sus4`]],
        [`chorus`, 8, s],
        [`inter`, 4, o],
        [`verse`, 8, o],
        [`pre`, 4, [`ii7`, `iii7`, `IVmaj7`, `V7sus4`]],
        [`chorus`, 8, s],
        [`solo`, 8, o],
        [`chorus2`, 8, s, 1],
        [`outro`, 4, s],
      ],
      i,
    ),
    l = Mn(n, {
      chords: c[1].prog,
      key: i,
      scale: An.major,
      lo: 62 + a,
      hi: 76 + a,
      inst: `vox`,
      vel: 0.72,
      rhythms: L2(
        `..x-x-x-x---x-..`,
        `x-x-x---..x-x---`,
        `....x-x-x-x-x---`,
        `x---x-x-..x-x-x-`,
      ),
      cadence: L2(`x---x---x-------`, `x-x-x-----------`),
    }),
    u = Mn(n, {
      chords: c[3].prog,
      key: i,
      scale: An.major,
      lo: 67 + a,
      hi: 81 + a,
      inst: `vox`,
      vel: 0.9,
      rhythms: L2(`x-x-x---x-x-x---`, `x---x-x-x---x-x-`, `..x-x-x-x---x---`),
      cadence: L2(`x---x-----------`, `x-x-x-----------`),
    }),
    d = Mn(n, {
      chords: c[8].prog,
      key: i,
      scale: An.major,
      lo: 60 + a,
      hi: 79 + a,
      inst: `tk_brass`,
      vel: 0.62,
      rhythms: L2(`x-x-xx-.x-x-x---`, `x.xx-x-.x---x-x-`, `xx-x-x--x-x-----`),
      cadence: L2(`x-x-x-----------`),
    }),
    f = { v: null },
    p = { v: null },
    m = { v: null },
    h = t(`audio.song.citypop.${1 + n.int(8)}`),
    g = t(`audio.artist.${1 + n.int(3)}`),
    _ = n.chance(0.4)
      ? t(n.chance(0.5) ? `audio.radio.dj.next` : `audio.radio.dj.next2`, {
          name: h.ja,
        })
      : void 0;
  return {
    title: { zh: h.zh, en: h.en },
    artist: g.ja && `${g.ja} ${g.en}`,
    bpm: r,
    swing: 0.54,
    beatsPerBar: 4,
    bars: F2(c),
    dj: _,
    bar(t) {
      let [n, r, i] = P2(c, t),
        o = n.prog[r],
        s = new En(Pn(`tk-citypop/${e}/${t}`)),
        h = [],
        g = n.kind,
        _ = r === n.bars - 1,
        v = g.startsWith(`chorus`) || g === `solo`;
      if (
        ((g !== `intro` || r >= 2) &&
          (Rn(
            v ? `x.....x...x.....` : `x.......x.x.....`,
            `kick`,
            h,
            `drums`,
            0.25,
            0.9,
          ),
          Rn(`....x.......x...`, `snare`, h, `drums`, 0.25, 0.85),
          Rn(
            v ? `xgxgxgxoxgxgxgxo` : `xgxgxgxgxgxgxgxg`,
            `hat_c`,
            h,
            `drums`,
            0.25,
            0.5,
          ),
          v && r % 4 == 0 && Rn(`x`, `crash`, h, `drums`, 0.25, 0.5),
          (g === `verse` || g === `pre`) &&
            Rn(`..g...g...g...g.`, `tk_tamb`, h, `perc`, 0.25, 0.5)),
        _ &&
          i &&
          i.kind !== g &&
          g !== `outro` &&
          Rn(`..........x.x.xx`, `tom_h`, h, `drums`, 0.25, 0.7),
        g !== `intro` || r >= 2)
      ) {
        let e = V2(o, 33 + a),
          t = s.pick([
            `x..xo.x.x..xo.x.`,
            `x.ox..x.x.ox..xo`,
            `x..x..xox..x.ox.`,
          ]);
        for (let n = 0; n < 16; n++) {
          let r = t[n];
          r !== `.` &&
            h.push({
              t: n * 0.25,
              m: r === `o` ? e + 12 : e,
              d: 0.22,
              v: r === `o` ? 0.75 : 0.9,
              inst: `tk_slap`,
              ch: `bass`,
            });
        }
      }
      let y = B2(o, 64 + a, 4, f);
      if (g === `intro` || g === `outro`)
        for (let e of y)
          h.push({ t: 0, m: e, d: 3.8, v: 0.5, inst: `epiano`, ch: `keys` });
      else
        for (let e of s.pick([
          [0, 1.5, 2.5, 3.75],
          [0.75, 1.5, 3, 3.5],
          [0, 0.75, 2, 2.75],
        ]))
          for (let t of y)
            h.push({ t: e, m: t, d: 0.6, v: 0.55, inst: `epiano`, ch: `keys` });
      if (g === `pre` || v)
        for (let e of B2(o, 72 + a, 3, p))
          h.push({ t: 0, m: e, d: 3.9, v: 0.38, inst: `strings`, ch: `pad` });
      if (v && r % 2 == 1)
        for (let e of B2(o, 69 + a, 3, m))
          h.push({
            t: 3.5,
            m: e,
            d: 0.4,
            v: 0.6,
            inst: `tk_brass`,
            ch: `lead`,
          });
      if (
        (g === `verse` && h.push(...R2(l[r % l.length])),
        g.startsWith(`chorus`) && h.push(...R2(u[r % u.length])),
        g === `solo` && h.push(...R2(d[r % d.length])),
        g === `intro`)
      )
        for (let e of u[r % u.length])
          h.push({ ...e, inst: `tk_brass`, v: e.v * 0.55, ch: `lead` });
      return z2(h, n.tr);
    },
    filter(e) {
      let [t, n] = P2(c, e);
      return t.kind === `intro`
        ? n < 2
          ? [1800, 1800]
          : [1800, 16e3]
        : t.kind === `outro`
          ? [16e3 - n * 3e3, 13e3 - n * 3e3]
          : null;
    },
    sidechain: () => 0.1,
  };
}
var U2 = [
  [`IV`, `V`, `iii`, `vi`],
  [`vi`, `IV`, `V`, `I`],
  [`I`, `V`, `vi`, `IV`],
  [`IV`, `V`, `vi`, `vi`],
  [`vi`, `V`, `IV`, `V`],
];
