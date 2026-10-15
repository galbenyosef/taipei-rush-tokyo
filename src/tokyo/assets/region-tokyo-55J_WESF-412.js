// tokyo/assets/region-tokyo-55J_WESF 412 — inst
// Lines 147847-148158 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function kIe(e, t) {
  let n = new En(Pn(`tk-jrock/` + e)),
    r = n.pick([150, 160, 168, 176, 184]),
    i = n.pick([4, 9, 2, 11, 7]),
    a = 40 + ((i - 4 + 12) % 12),
    o = I2(i),
    s = n.pick(U2),
    c = U2[0],
    l = N2(
      [
        [`intro`, 4, c],
        [`verse`, 8, s],
        [`pre`, 4, [`ii`, `iii`, `IV`, `V`]],
        [`chorus`, 8, c],
        [`verse`, 8, s],
        [`pre`, 4, [`ii`, `iii`, `IV`, `V`]],
        [`chorus`, 8, c],
        [`solo`, 8, s],
        [`break`, 4, [`vi`, `IV`, `V`, `V`]],
        [`chorus2`, 8, c, 1],
        [`outro`, 4, c],
      ],
      i,
    ),
    u = Mn(n, {
      chords: l[1].prog,
      key: i,
      scale: An.major,
      lo: 62 + o,
      hi: 76 + o,
      inst: `vox`,
      vel: 0.8,
      rhythms: L2(`x-x-x-x-x---x---`, `x-x-x---x-x-x---`, `..x-x-x-x-x-x---`),
      cadence: L2(`x---x---x-------`),
    }),
    d = Mn(n, {
      chords: l[3].prog,
      key: i,
      scale: An.pentaMaj,
      lo: 66 + o,
      hi: 81 + o,
      inst: `distlead`,
      vel: 0.85,
      rhythms: L2(`x-x-x---x-x-x-x-`, `x---x-x-x---x-x-`, `x-x-x-x-x-------`),
      cadence: L2(`x---x-----------`, `x-x-x-----------`),
    }),
    f = Mn(n, {
      chords: l[7].prog,
      key: i,
      scale: An.major,
      lo: 64 + o,
      hi: 86 + o,
      inst: `distlead`,
      vel: 0.9,
      rhythms: L2(`xxxxx-x-x-x-xxxx`, `x.xxx.x-x-xxxx--`, `xxxx-x-xxxx-x---`),
      cadence: L2(`x-x-x-----------`),
    }),
    p = { v: null },
    m = t(`audio.song.jrock.${1 + n.int(6)}`),
    h = t(`audio.artist.${4 + n.int(3)}`),
    g = n.chance(0.4)
      ? t(`audio.radio.dj.next-casual`, { name: m.ja })
      : void 0;
  return {
    title: { zh: m.zh, en: m.en },
    artist: h.ja && `${h.ja} ${h.en}`,
    bpm: r,
    swing: 0.5,
    beatsPerBar: 4,
    bars: F2(l),
    dj: g,
    bar(t) {
      let [n, r, i] = P2(l, t),
        s = n.prog[r];
      new En(Pn(`tk-jrock/${e}/${t}`));
      let c = [],
        m = n.kind,
        h = r === n.bars - 1,
        g = jn(a + 5, [s.root], a, a + 11),
        _ = (e, t, n, r) =>
          c.push({ t: e, m: g, d: n, v: r, inst: t, ch: `keys` }),
        v = () => {
          let e = V2(s, a - 12);
          for (let t = 0; t < 8; t++)
            c.push({
              t: t * 0.5,
              m: e,
              d: 0.45,
              v: t % 2 ? 0.75 : 0.9,
              inst: `bass`,
              ch: `bass`,
            });
        };
      if (m === `intro`) {
        for (let e = 0; e < 8; e++)
          _(e * 0.5, e % 4 == 0 ? `power` : `chug`, 0.45, 0.85);
        r >= 2 &&
          (Rn(`x.x...x.x.x...x.`, `kick`, c),
          Rn(`....x.......x...`, `snare`, c),
          Rn(`x.x.x.x.x.x.x.x.`, `hat_c`, c, `drums`, 0.25, 0.6),
          v());
        for (let e of d[r % d.length]) c.push({ ...e, v: e.v * 0.9 });
      } else if (m === `verse`) {
        for (let e = 0; e < 8; e++)
          _(e * 0.5, `chug`, 0.45, e % 2 ? 0.7 : 0.85);
        (Rn(`x.....x.x.......`, `kick`, c),
          Rn(`....x.......x...`, `snare`, c),
          Rn(`x.x.x.x.x.x.x.x.`, `hat_c`, c, `drums`, 0.25, 0.55),
          v(),
          c.push(...R2(u[r % u.length])));
      } else if (m === `pre` || m === `break`) {
        (_(0, `power`, 1.9, 0.9),
          _(2, `power`, 1.9, 0.85),
          Rn(`x.x.x.x.x.x.x.x.`, `kick`, c, `drums`, 0.25, 0.8),
          Rn(h ? `....x...x.x.xxxx` : `....x.......x...`, `snare`, c),
          r === 0 && Rn(`x`, `crash`, c),
          v());
        for (let e of B2(s, 74 + o, 3, p))
          c.push({ t: 0, m: e, d: 3.9, v: 0.35, inst: `strings`, ch: `pad` });
        m === `pre` && c.push(...R2(u[(r + 4) % u.length], 0, 0.9));
      } else {
        for (let e = 0; e < 8; e++)
          _(e * 0.5, `power`, 0.48, e % 2 ? 0.78 : 0.95);
        if (
          (Rn(`x.x...x.x.x...x.`, `kick`, c),
          Rn(`....x.......x...`, `snare`, c),
          Rn(`x.x.x.x.x.x.x.x.`, `ride`, c, `drums`, 0.25, 0.5),
          r % 4 == 0 && Rn(`x`, `crash`, c, `drums`, 0.25, 0.8),
          v(),
          m.startsWith(`chorus`))
        ) {
          c.push(
            ...R2(d[r % d.length]).map((e) => ({
              ...e,
              inst: `vox`,
              v: e.v * 0.95,
            })),
          );
          for (let e of B2(s, 74 + o, 3, p))
            c.push({ t: 0, m: e, d: 3.9, v: 0.3, inst: `strings`, ch: `pad` });
        }
        (m === `solo` && c.push(...R2(f[r % f.length])),
          m === `outro` &&
            h &&
            ((c.length = 0),
            _(0, `power`, 3.9, 1),
            Rn(`x`, `crash`, c),
            Rn(`x`, `kick`, c)));
      }
      return (
        h &&
          i &&
          i.kind !== m &&
          m !== `pre` &&
          m !== `outro` &&
          Rn(`........xxxxxxxx`, `tom_l`, c, `drums`, 0.25, 0.8),
        z2(c, n.tr)
      );
    },
    sidechain: () => 0,
  };
}
var W2 = [0, 2, 3, 7, 8],
  G2 = [
    [`i`, `iv`, `V7`, `i`],
    [`i`, `bVI`, `iv`, `V7`],
    [`iv`, `i`, `V7`, `i`],
    [`i`, `i`, `iv`, `V7`],
  ];
function AIe(e, t) {
  let n = new En(Pn(`tk-enka/` + e)),
    r = n.pick([66, 70, 72, 76, 80]),
    i = n.pick([9, 4, 2, 7, 0]),
    a = I2(i),
    o = n.pick(G2),
    s = n.pick(G2.filter((e) => e !== o)),
    c = N2(
      [
        [`intro`, 4, o],
        [`verse`, 8, o],
        [`chorus`, 8, s],
        [`inter`, 4, o],
        [`verse`, 8, o],
        [`chorus`, 8, s],
        [`outro`, 4, s],
      ],
      i,
    ),
    l = Mn(n, {
      chords: c[1].prog,
      key: i,
      scale: W2,
      lo: 62 + a,
      hi: 77 + a,
      inst: `vox`,
      vel: 0.82,
      rhythms: L2(
        `x-------x---x-x-`,
        `x---x-x-x-------`,
        `x-x-x-----------`,
        `....x---x-x-x---`,
      ),
      cadence: L2(`x---------------`, `x-------x-------`),
    }),
    u = Mn(n, {
      chords: c[2].prog,
      key: i,
      scale: W2,
      lo: 67 + a,
      hi: 81 + a,
      inst: `vox`,
      vel: 0.92,
      rhythms: L2(`x-----------x-x-`, `x---x---x-------`, `x-x-x-x-x-------`),
      cadence: L2(`x---------------`),
    }),
    d = Mn(n, {
      chords: c[0].prog,
      key: i,
      scale: W2,
      lo: 69 + a,
      hi: 84 + a,
      inst: `tk_shaku`,
      vel: 0.7,
      rhythms: L2(`x-----------x---`, `x-------x-------`, `........x-------`),
      cadence: L2(`x---------------`),
    }),
    f = { v: null },
    p = t(`audio.song.enka.${1 + n.int(6)}`),
    m = t(`audio.artist.${7 + n.int(3)}`),
    h = n.chance(0.5) ? t(`audio.radio.dj.next2`, { name: p.ja }) : void 0;
  return {
    title: { zh: p.zh, en: p.en },
    artist: m.ja && `${m.ja} ${m.en}`,
    bpm: r,
    swing: 0.5,
    beatsPerBar: 4,
    bars: F2(c),
    dj: h,
    bar(t) {
      let [n, r] = P2(c, t),
        o = n.prog[r];
      new En(Pn(`tk-enka/${e}/${t}`));
      let s = [],
        p = n.kind,
        m = V2(o, 31 + a);
      (s.push(
        { t: 0, m, d: 1.8, v: 0.85, inst: `bass`, ch: `bass` },
        { t: 2, m: m + 7, d: 1.8, v: 0.7, inst: `bass`, ch: `bass` },
      ),
        p !== `intro` &&
          (Rn(`x.......x.......`, `kick`, s, `drums`, 0.25, 0.7),
          Rn(`....x.......x...`, `rim`, s, `drums`, 0.25, 0.6),
          Rn(`x...x...x...x...`, `ride`, s, `drums`, 0.25, 0.3)),
        p === `chorus` &&
          r % 2 == 0 &&
          Rn(`x`, `tk_taiko`, s, `perc`, 0.25, 0.8));
      let h = vte(o),
        g = [
          jn(55 + a, h, 50, 62),
          jn(60 + a, h, 56, 66),
          jn(64 + a, h, 60, 70),
        ];
      for (let e = 0; e < 16; e++)
        s.push({
          t: e * 0.25,
          m: g[[0, 1, 2, 1][e % 4]],
          d: 0.3,
          v: e % 4 == 0 ? 0.55 : 0.38,
          inst: `nylon`,
          ch: `keys`,
        });
      for (let e of B2(o, 67 + a, 3, f))
        s.push({
          t: 0,
          m: e,
          d: 3.9,
          v: p === `chorus` ? 0.5 : 0.38,
          inst: `strings`,
          ch: `pad`,
        });
      if (
        ((p === `intro` || p === `inter` || p === `outro`) &&
          s.push(...R2(d[r % d.length])),
        r === n.bars - 1 && p === `verse`)
      ) {
        let e = jn(57, [i], 52, 63);
        [0, 2, 3, 7, 8, 12, 14, 15].forEach((t, n) =>
          s.push({
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
        p === `verse` && s.push(...R2(l[r % l.length])),
        p === `chorus` && s.push(...R2(u[r % u.length])),
        s
      );
    },
    sidechain: () => 0,
  };
}
var K2 = [
  [`IV`, `V`, `iii`, `vi`],
  [`I`, `V`, `vi`, `IV`],
  [`vi`, `IV`, `V`, `I`],
  [`IV`, `V`, `I`, `vi`],
];
