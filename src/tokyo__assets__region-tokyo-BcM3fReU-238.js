// tokyo__assets__region-tokyo-BcM3fReU 238 — inst
// Lines 95790-96047 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function S$(e) {
  let t = e.lang || ``,
    n = e.name || ``,
    r =
      (b$.test(n) ? 3 : 0) - (x$.test(n) ? 5 : 0) + (e.localService ? 0.5 : 0);
  return /^ja[-_]JP/i.test(t) || /^jpn/i.test(t)
    ? 20 + r
    : /^ja$/i.test(t) || /日本語|Japanese/i.test(n)
      ? 10 + r
      : -1;
}
function C$(e) {
  if (typeof speechSynthesis > `u`) return;
  let t = () => {
    try {
      let t = null,
        n = -1;
      for (let e of speechSynthesis.getVoices()) {
        let r = S$(e);
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
function w$(e, t) {
  let n = 0;
  return e.map(([e, r, i, a]) => {
    let o = Cr(i, t),
      s = [];
    for (let e = 0; e < r; e++) s.push(o[e % o.length]);
    let c = { kind: e, bars: r, start: n, prog: s, tr: a ?? 0 };
    return ((n += r), c);
  });
}
function T$(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (t < r.start + r.bars) return [r, t - r.start, e[n + 1]];
  }
  let n = e[e.length - 1];
  return [n, n.bars - 1, void 0];
}
var E$ = (e) => e.reduce((e, t) => e + t.bars, 0),
  D$ = (e) => (e <= 6 ? e : e - 12),
  O$ = (...e) => e.map(Fr),
  k$ = (e, t = 0, n = 1) => e.map((e) => ({ ...e, m: e.m + t, v: e.v * n }));
function A$(e, t) {
  if (t) for (let n of e) n.inst.startsWith(`drum:`) || (n.m += t);
  return e;
}
function j$(e, t, n, r) {
  let i = Tr(e, t, n, r.v);
  return ((r.v = i), i);
}
function M$(e, t) {
  return Dr(t + 6, [e.bass], t, t + 11);
}
var N$ = {
  walk: [`IVmaj7`, `III7`, `vi7`, `v7`, `I7`],
  twofive: [`ii9`, `V9`, `Imaj9`, `vi9`],
  four: [`IVmaj7`, `iii7`, `vi9`, `V7sus4`],
  royal: [`IVmaj7`, `V7`, `iii7`, `vi7`],
};
function P$(e, t) {
  let n = new br(Ar(`tk-citypop/` + e)),
    r = n.pick([96, 100, 104, 108, 112]),
    i = n.pick([0, 2, 3, 5, 7, 8, 10]),
    a = D$(i),
    o = n.pick([N$.twofive, N$.four, N$.royal]),
    s = n.pick([N$.walk, N$.royal, N$.four].filter((e) => e !== o)),
    c = w$(
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
    l = Or(n, {
      chords: c[1].prog,
      key: i,
      scale: Er.major,
      lo: 62 + a,
      hi: 76 + a,
      inst: `vox`,
      vel: 0.72,
      rhythms: O$(
        `..x-x-x-x---x-..`,
        `x-x-x---..x-x---`,
        `....x-x-x-x-x---`,
        `x---x-x-..x-x-x-`,
      ),
      cadence: O$(`x---x---x-------`, `x-x-x-----------`),
    }),
    u = Or(n, {
      chords: c[3].prog,
      key: i,
      scale: Er.major,
      lo: 67 + a,
      hi: 81 + a,
      inst: `vox`,
      vel: 0.9,
      rhythms: O$(`x-x-x---x-x-x---`, `x---x-x-x---x-x-`, `..x-x-x-x---x---`),
      cadence: O$(`x---x-----------`, `x-x-x-----------`),
    }),
    d = Or(n, {
      chords: c[8].prog,
      key: i,
      scale: Er.major,
      lo: 60 + a,
      hi: 79 + a,
      inst: `tk_brass`,
      vel: 0.62,
      rhythms: O$(`x-x-xx-.x-x-x---`, `x.xx-x-.x---x-x-`, `xx-x-x--x-x-----`),
      cadence: O$(`x-x-x-----------`),
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
    bars: E$(c),
    dj: _,
    bar(t) {
      let [n, r, i] = T$(c, t),
        o = n.prog[r],
        s = new br(Ar(`tk-citypop/${e}/${t}`)),
        h = [],
        g = n.kind,
        _ = r === n.bars - 1,
        v = g.startsWith(`chorus`) || g === `solo`;
      if (
        ((g !== `intro` || r >= 2) &&
          (Lr(
            v ? `x.....x...x.....` : `x.......x.x.....`,
            `kick`,
            h,
            `drums`,
            0.25,
            0.9,
          ),
          Lr(`....x.......x...`, `snare`, h, `drums`, 0.25, 0.85),
          Lr(
            v ? `xgxgxgxoxgxgxgxo` : `xgxgxgxgxgxgxgxg`,
            `hat_c`,
            h,
            `drums`,
            0.25,
            0.5,
          ),
          v && r % 4 == 0 && Lr(`x`, `crash`, h, `drums`, 0.25, 0.5),
          (g === `verse` || g === `pre`) &&
            Lr(`..g...g...g...g.`, `tk_tamb`, h, `perc`, 0.25, 0.5)),
        _ &&
          i &&
          i.kind !== g &&
          g !== `outro` &&
          Lr(`..........x.x.xx`, `tom_h`, h, `drums`, 0.25, 0.7),
        g !== `intro` || r >= 2)
      ) {
        let e = M$(o, 33 + a),
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
      let y = j$(o, 64 + a, 4, f);
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
        for (let e of j$(o, 72 + a, 3, p))
          h.push({ t: 0, m: e, d: 3.9, v: 0.38, inst: `strings`, ch: `pad` });
      if (v && r % 2 == 1)
        for (let e of j$(o, 69 + a, 3, m))
          h.push({
            t: 3.5,
            m: e,
            d: 0.4,
            v: 0.6,
            inst: `tk_brass`,
            ch: `lead`,
          });
      if (
        (g === `verse` && h.push(...k$(l[r % l.length])),
        g.startsWith(`chorus`) && h.push(...k$(u[r % u.length])),
        g === `solo` && h.push(...k$(d[r % d.length])),
        g === `intro`)
      )
        for (let e of u[r % u.length])
          h.push({ ...e, inst: `tk_brass`, v: e.v * 0.55, ch: `lead` });
      return A$(h, n.tr);
    },
    filter(e) {
      let [t, n] = T$(c, e);
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
var F$ = [
  [`IV`, `V`, `iii`, `vi`],
  [`vi`, `IV`, `V`, `I`],
  [`I`, `V`, `vi`, `IV`],
  [`IV`, `V`, `vi`, `vi`],
  [`vi`, `V`, `IV`, `V`],
];
