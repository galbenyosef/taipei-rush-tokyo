// tokyo__assets__region-tokyo-audioWorker-GAP5c6S0 08 — inst
// Lines 2312-2501 of readable/tokyo__assets__region-tokyo-audioWorker-GAP5c6S0.pretty.js (statement-aligned).
function nt(t, n) {
  let r = new e(U(`tk-citypop/` + t)),
    i = r.pick([96, 100, 104, 108, 112]),
    a = r.pick([0, 2, 3, 5, 7, 8, 10]),
    o = K(a),
    s = r.pick([Z.twofive, Z.four, Z.royal]),
    c = r.pick([Z.walk, Z.royal, Z.four].filter((e) => e !== s)),
    l = et(
      [
        [`intro`, 4, c],
        [`verse`, 8, s],
        [`pre`, 4, [`ii7`, `iii7`, `IVmaj7`, `V7sus4`]],
        [`chorus`, 8, c],
        [`inter`, 4, s],
        [`verse`, 8, s],
        [`pre`, 4, [`ii7`, `iii7`, `IVmaj7`, `V7sus4`]],
        [`chorus`, 8, c],
        [`solo`, 8, s],
        [`chorus2`, 8, c, 1],
        [`outro`, 4, c],
      ],
      a,
    ),
    u = H(r, {
      chords: l[1].prog,
      key: a,
      scale: z.major,
      lo: 62 + o,
      hi: 76 + o,
      inst: `vox`,
      vel: 0.72,
      rhythms: q(
        `..x-x-x-x---x-..`,
        `x-x-x---..x-x---`,
        `....x-x-x-x-x---`,
        `x---x-x-..x-x-x-`,
      ),
      cadence: q(`x---x---x-------`, `x-x-x-----------`),
    }),
    d = H(r, {
      chords: l[3].prog,
      key: a,
      scale: z.major,
      lo: 67 + o,
      hi: 81 + o,
      inst: `vox`,
      vel: 0.9,
      rhythms: q(`x-x-x---x-x-x---`, `x---x-x-x---x-x-`, `..x-x-x-x---x---`),
      cadence: q(`x---x-----------`, `x-x-x-----------`),
    }),
    f = H(r, {
      chords: l[8].prog,
      key: a,
      scale: z.major,
      lo: 60 + o,
      hi: 79 + o,
      inst: `tk_brass`,
      vel: 0.62,
      rhythms: q(`x-x-xx-.x-x-x---`, `x.xx-x-.x---x-x-`, `xx-x-x--x-x-----`),
      cadence: q(`x-x-x-----------`),
    }),
    p = { v: null },
    m = { v: null },
    h = { v: null },
    g = n(`audio.song.citypop.${1 + r.int(8)}`),
    _ = n(`audio.artist.${1 + r.int(3)}`),
    v = r.chance(0.4)
      ? n(r.chance(0.5) ? `audio.radio.dj.next` : `audio.radio.dj.next2`, {
          name: g.ja,
        })
      : void 0;
  return {
    title: { zh: g.zh, en: g.en },
    artist: _.ja && `${_.ja} ${_.en}`,
    bpm: i,
    swing: 0.54,
    beatsPerBar: 4,
    bars: G(l),
    dj: v,
    bar(n) {
      let [r, i, a] = W(l, n),
        s = r.prog[i],
        c = new e(U(`tk-citypop/${t}/${n}`)),
        g = [],
        _ = r.kind,
        v = i === r.bars - 1,
        y = _.startsWith(`chorus`) || _ === `solo`;
      if (
        ((_ !== `intro` || i >= 2) &&
          (V(
            y ? `x.....x...x.....` : `x.......x.x.....`,
            `kick`,
            g,
            `drums`,
            0.25,
            0.9,
          ),
          V(`....x.......x...`, `snare`, g, `drums`, 0.25, 0.85),
          V(
            y ? `xgxgxgxoxgxgxgxo` : `xgxgxgxgxgxgxgxg`,
            `hat_c`,
            g,
            `drums`,
            0.25,
            0.5,
          ),
          y && i % 4 == 0 && V(`x`, `crash`, g, `drums`, 0.25, 0.5),
          (_ === `verse` || _ === `pre`) &&
            V(`..g...g...g...g.`, `tk_tamb`, g, `perc`, 0.25, 0.5)),
        v &&
          a &&
          a.kind !== _ &&
          _ !== `outro` &&
          V(`..........x.x.xx`, `tom_h`, g, `drums`, 0.25, 0.7),
        _ !== `intro` || i >= 2)
      ) {
        let e = X(s, 33 + o),
          t = c.pick([
            `x..xo.x.x..xo.x.`,
            `x.ox..x.x.ox..xo`,
            `x..x..xox..x.ox.`,
          ]);
        for (let n = 0; n < 16; n++) {
          let r = t[n];
          r !== `.` &&
            g.push({
              t: n * 0.25,
              m: r === `o` ? e + 12 : e,
              d: 0.22,
              v: r === `o` ? 0.75 : 0.9,
              inst: `tk_slap`,
              ch: `bass`,
            });
        }
      }
      let b = Y(s, 64 + o, 4, p);
      if (_ === `intro` || _ === `outro`)
        for (let e of b)
          g.push({ t: 0, m: e, d: 3.8, v: 0.5, inst: `epiano`, ch: `keys` });
      else
        for (let e of c.pick([
          [0, 1.5, 2.5, 3.75],
          [0.75, 1.5, 3, 3.5],
          [0, 0.75, 2, 2.75],
        ]))
          for (let t of b)
            g.push({ t: e, m: t, d: 0.6, v: 0.55, inst: `epiano`, ch: `keys` });
      if (_ === `pre` || y)
        for (let e of Y(s, 72 + o, 3, m))
          g.push({ t: 0, m: e, d: 3.9, v: 0.38, inst: `strings`, ch: `pad` });
      if (y && i % 2 == 1)
        for (let e of Y(s, 69 + o, 3, h))
          g.push({
            t: 3.5,
            m: e,
            d: 0.4,
            v: 0.6,
            inst: `tk_brass`,
            ch: `lead`,
          });
      if (
        (_ === `verse` && g.push(...J(u[i % u.length])),
        _.startsWith(`chorus`) && g.push(...J(d[i % d.length])),
        _ === `solo` && g.push(...J(f[i % f.length])),
        _ === `intro`)
      )
        for (let e of d[i % d.length])
          g.push({ ...e, inst: `tk_brass`, v: e.v * 0.55, ch: `lead` });
      return tt(g, r.tr);
    },
    filter(e) {
      let [t, n] = W(l, e);
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
const rt = [
  [`IV`, `V`, `iii`, `vi`],
  [`vi`, `IV`, `V`, `I`],
  [`I`, `V`, `vi`, `IV`],
  [`IV`, `V`, `vi`, `vi`],
  [`vi`, `V`, `IV`, `V`],
];
