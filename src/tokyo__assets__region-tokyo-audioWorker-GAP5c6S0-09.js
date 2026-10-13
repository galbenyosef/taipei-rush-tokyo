// tokyo__assets__region-tokyo-audioWorker-GAP5c6S0 09 — inst
// Lines 2502-2809 of readable/tokyo__assets__region-tokyo-audioWorker-GAP5c6S0.pretty.js (statement-aligned).
function it(t, n) {
  let r = new e(U(`tk-jrock/` + t)),
    i = r.pick([150, 160, 168, 176, 184]),
    a = r.pick([4, 9, 2, 11, 7]),
    o = 40 + ((a - 4 + 12) % 12),
    s = K(a),
    c = r.pick(rt),
    l = rt[0],
    u = et(
      [
        [`intro`, 4, l],
        [`verse`, 8, c],
        [`pre`, 4, [`ii`, `iii`, `IV`, `V`]],
        [`chorus`, 8, l],
        [`verse`, 8, c],
        [`pre`, 4, [`ii`, `iii`, `IV`, `V`]],
        [`chorus`, 8, l],
        [`solo`, 8, c],
        [`break`, 4, [`vi`, `IV`, `V`, `V`]],
        [`chorus2`, 8, l, 1],
        [`outro`, 4, l],
      ],
      a,
    ),
    d = H(r, {
      chords: u[1].prog,
      key: a,
      scale: z.major,
      lo: 62 + s,
      hi: 76 + s,
      inst: `vox`,
      vel: 0.8,
      rhythms: q(`x-x-x-x-x---x---`, `x-x-x---x-x-x---`, `..x-x-x-x-x-x---`),
      cadence: q(`x---x---x-------`),
    }),
    f = H(r, {
      chords: u[3].prog,
      key: a,
      scale: z.pentaMaj,
      lo: 66 + s,
      hi: 81 + s,
      inst: `distlead`,
      vel: 0.85,
      rhythms: q(`x-x-x---x-x-x-x-`, `x---x-x-x---x-x-`, `x-x-x-x-x-------`),
      cadence: q(`x---x-----------`, `x-x-x-----------`),
    }),
    p = H(r, {
      chords: u[7].prog,
      key: a,
      scale: z.major,
      lo: 64 + s,
      hi: 86 + s,
      inst: `distlead`,
      vel: 0.9,
      rhythms: q(`xxxxx-x-x-x-xxxx`, `x.xxx.x-x-xxxx--`, `xxxx-x-xxxx-x---`),
      cadence: q(`x-x-x-----------`),
    }),
    m = { v: null },
    h = n(`audio.song.jrock.${1 + r.int(6)}`),
    g = n(`audio.artist.${4 + r.int(3)}`),
    _ = r.chance(0.4)
      ? n(`audio.radio.dj.next-casual`, { name: h.ja })
      : void 0;
  return {
    title: { zh: h.zh, en: h.en },
    artist: g.ja && `${g.ja} ${g.en}`,
    bpm: i,
    swing: 0.5,
    beatsPerBar: 4,
    bars: G(u),
    dj: _,
    bar(n) {
      let [r, i, a] = W(u, n),
        c = r.prog[i];
      new e(U(`tk-jrock/${t}/${n}`));
      let l = [],
        h = r.kind,
        g = i === r.bars - 1,
        _ = B(o + 5, [c.root], o, o + 11),
        v = (e, t, n, r) =>
          l.push({ t: e, m: _, d: n, v: r, inst: t, ch: `keys` }),
        y = () => {
          let e = X(c, o - 12);
          for (let t = 0; t < 8; t++)
            l.push({
              t: t * 0.5,
              m: e,
              d: 0.45,
              v: t % 2 ? 0.75 : 0.9,
              inst: `bass`,
              ch: `bass`,
            });
        };
      if (h === `intro`) {
        for (let e = 0; e < 8; e++)
          v(e * 0.5, e % 4 == 0 ? `power` : `chug`, 0.45, 0.85);
        i >= 2 &&
          (V(`x.x...x.x.x...x.`, `kick`, l),
          V(`....x.......x...`, `snare`, l),
          V(`x.x.x.x.x.x.x.x.`, `hat_c`, l, `drums`, 0.25, 0.6),
          y());
        for (let e of f[i % f.length]) l.push({ ...e, v: e.v * 0.9 });
      } else if (h === `verse`) {
        for (let e = 0; e < 8; e++)
          v(e * 0.5, `chug`, 0.45, e % 2 ? 0.7 : 0.85);
        (V(`x.....x.x.......`, `kick`, l),
          V(`....x.......x...`, `snare`, l),
          V(`x.x.x.x.x.x.x.x.`, `hat_c`, l, `drums`, 0.25, 0.55),
          y(),
          l.push(...J(d[i % d.length])));
      } else if (h === `pre` || h === `break`) {
        (v(0, `power`, 1.9, 0.9),
          v(2, `power`, 1.9, 0.85),
          V(`x.x.x.x.x.x.x.x.`, `kick`, l, `drums`, 0.25, 0.8),
          V(g ? `....x...x.x.xxxx` : `....x.......x...`, `snare`, l),
          i === 0 && V(`x`, `crash`, l),
          y());
        for (let e of Y(c, 74 + s, 3, m))
          l.push({ t: 0, m: e, d: 3.9, v: 0.35, inst: `strings`, ch: `pad` });
        h === `pre` && l.push(...J(d[(i + 4) % d.length], 0, 0.9));
      } else {
        for (let e = 0; e < 8; e++)
          v(e * 0.5, `power`, 0.48, e % 2 ? 0.78 : 0.95);
        if (
          (V(`x.x...x.x.x...x.`, `kick`, l),
          V(`....x.......x...`, `snare`, l),
          V(`x.x.x.x.x.x.x.x.`, `ride`, l, `drums`, 0.25, 0.5),
          i % 4 == 0 && V(`x`, `crash`, l, `drums`, 0.25, 0.8),
          y(),
          h.startsWith(`chorus`))
        ) {
          l.push(
            ...J(f[i % f.length]).map((e) => ({
              ...e,
              inst: `vox`,
              v: e.v * 0.95,
            })),
          );
          for (let e of Y(c, 74 + s, 3, m))
            l.push({ t: 0, m: e, d: 3.9, v: 0.3, inst: `strings`, ch: `pad` });
        }
        (h === `solo` && l.push(...J(p[i % p.length])),
          h === `outro` &&
            g &&
            ((l.length = 0),
            v(0, `power`, 3.9, 1),
            V(`x`, `crash`, l),
            V(`x`, `kick`, l)));
      }
      return (
        g &&
          a &&
          a.kind !== h &&
          h !== `pre` &&
          h !== `outro` &&
          V(`........xxxxxxxx`, `tom_l`, l, `drums`, 0.25, 0.8),
        tt(l, r.tr)
      );
    },
    sidechain: () => 0,
  };
}
const Q = [0, 2, 3, 7, 8],
  at = [
    [`i`, `iv`, `V7`, `i`],
    [`i`, `bVI`, `iv`, `V7`],
    [`iv`, `i`, `V7`, `i`],
    [`i`, `i`, `iv`, `V7`],
  ];
function ot(t, n) {
  let r = new e(U(`tk-enka/` + t)),
    i = r.pick([66, 70, 72, 76, 80]),
    a = r.pick([9, 4, 2, 7, 0]),
    o = K(a),
    s = r.pick(at),
    c = r.pick(at.filter((e) => e !== s)),
    l = et(
      [
        [`intro`, 4, s],
        [`verse`, 8, s],
        [`chorus`, 8, c],
        [`inter`, 4, s],
        [`verse`, 8, s],
        [`chorus`, 8, c],
        [`outro`, 4, c],
      ],
      a,
    ),
    u = H(r, {
      chords: l[1].prog,
      key: a,
      scale: Q,
      lo: 62 + o,
      hi: 77 + o,
      inst: `vox`,
      vel: 0.82,
      rhythms: q(
        `x-------x---x-x-`,
        `x---x-x-x-------`,
        `x-x-x-----------`,
        `....x---x-x-x---`,
      ),
      cadence: q(`x---------------`, `x-------x-------`),
    }),
    d = H(r, {
      chords: l[2].prog,
      key: a,
      scale: Q,
      lo: 67 + o,
      hi: 81 + o,
      inst: `vox`,
      vel: 0.92,
      rhythms: q(`x-----------x-x-`, `x---x---x-------`, `x-x-x-x-x-------`),
      cadence: q(`x---------------`),
    }),
    f = H(r, {
      chords: l[0].prog,
      key: a,
      scale: Q,
      lo: 69 + o,
      hi: 84 + o,
      inst: `tk_shaku`,
      vel: 0.7,
      rhythms: q(`x-----------x---`, `x-------x-------`, `........x-------`),
      cadence: q(`x---------------`),
    }),
    p = { v: null },
    m = n(`audio.song.enka.${1 + r.int(6)}`),
    h = n(`audio.artist.${7 + r.int(3)}`),
    g = r.chance(0.5) ? n(`audio.radio.dj.next2`, { name: m.ja }) : void 0;
  return {
    title: { zh: m.zh, en: m.en },
    artist: h.ja && `${h.ja} ${h.en}`,
    bpm: i,
    swing: 0.5,
    beatsPerBar: 4,
    bars: G(l),
    dj: g,
    bar(n) {
      let [r, i] = W(l, n),
        s = r.prog[i];
      new e(U(`tk-enka/${t}/${n}`));
      let c = [],
        m = r.kind,
        h = X(s, 31 + o);
      (c.push(
        { t: 0, m: h, d: 1.8, v: 0.85, inst: `bass`, ch: `bass` },
        { t: 2, m: h + 7, d: 1.8, v: 0.7, inst: `bass`, ch: `bass` },
      ),
        m !== `intro` &&
          (V(`x.......x.......`, `kick`, c, `drums`, 0.25, 0.7),
          V(`....x.......x...`, `rim`, c, `drums`, 0.25, 0.6),
          V(`x...x...x...x...`, `ride`, c, `drums`, 0.25, 0.3)),
        m === `chorus` &&
          i % 2 == 0 &&
          V(`x`, `tk_taiko`, c, `perc`, 0.25, 0.8));
      let g = Xe(s),
        _ = [B(55 + o, g, 50, 62), B(60 + o, g, 56, 66), B(64 + o, g, 60, 70)];
      for (let e = 0; e < 16; e++)
        c.push({
          t: e * 0.25,
          m: _[[0, 1, 2, 1][e % 4]],
          d: 0.3,
          v: e % 4 == 0 ? 0.55 : 0.38,
          inst: `nylon`,
          ch: `keys`,
        });
      for (let e of Y(s, 67 + o, 3, p))
        c.push({
          t: 0,
          m: e,
          d: 3.9,
          v: m === `chorus` ? 0.5 : 0.38,
          inst: `strings`,
          ch: `pad`,
        });
      if (
        ((m === `intro` || m === `inter` || m === `outro`) &&
          c.push(...J(f[i % f.length])),
        i === r.bars - 1 && m === `verse`)
      ) {
        let e = B(57, [a], 52, 63);
        [0, 2, 3, 7, 8, 12, 14, 15].forEach((t, n) =>
          c.push({
            t: 2 + n * 0.25,
            m: e + 12 + t,
            d: 0.6,
            v: 0.5,
            inst: `tk_koto`,
            ch: `fx`,
          }),
        );
      }
      return (
        m === `verse` && c.push(...J(u[i % u.length])),
        m === `chorus` && c.push(...J(d[i % d.length])),
        c
      );
    },
    sidechain: () => 0,
  };
}
const st = [
  [`IV`, `V`, `iii`, `vi`],
  [`I`, `V`, `vi`, `IV`],
  [`vi`, `IV`, `V`, `I`],
  [`IV`, `V`, `I`, `vi`],
];
