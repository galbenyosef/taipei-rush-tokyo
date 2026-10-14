// tokyo/assets/region-tokyo-BcM3fReU 240 — inst
// Lines 96360-96707 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function V$(e, t) {
  let n = new br(Ar(`tk-idol/` + e)),
    r = n.pick([160, 164, 168, 172, 176]),
    i = n.pick([0, 2, 4, 5, 7, 9]),
    a = D$(i),
    o = n.pick(B$),
    s = B$[0],
    c = w$(
      [
        [`intro`, 8, s],
        [`verse`, 8, o],
        [`pre`, 4, [`ii`, `iii`, `IV`, `V`]],
        [`chorus`, 8, s],
        [`inter`, 4, s],
        [`verse`, 8, o],
        [`pre`, 4, [`ii`, `iii`, `IV`, `V`]],
        [`chorus`, 8, s],
        [`chorus2`, 8, s, 1],
        [`outro`, 4, s],
      ],
      i,
    ),
    l = Or(n, {
      chords: c[1].prog,
      key: i,
      scale: Er.major,
      lo: 67 + a,
      hi: 81 + a,
      inst: `vox`,
      vel: 0.8,
      rhythms: O$(`x-x-x-x-x-x-x---`, `x-x-x---x-x-x-x-`, `..x-x-x-x-x-x---`),
      cadence: O$(`x-x-x-----------`),
    }),
    u = Or(n, {
      chords: c[3].prog,
      key: i,
      scale: Er.pentaMaj,
      lo: 71 + a,
      hi: 86 + a,
      inst: `vox`,
      vel: 0.92,
      rhythms: O$(`x-x-x-x-x---x-x-`, `x---x-x-x-x-x---`, `x-x-x---x-x-x---`),
      cadence: O$(`x---x-----------`, `x-x-x-----------`),
    }),
    d = { v: null },
    f = { v: null },
    p = t(`audio.song.idol.${1 + n.int(6)}`),
    m = t(`audio.artist.${10 + n.int(3)}`),
    h = n.chance(0.5) ? t(`audio.radio.dj.next-cute`, { name: p.ja }) : void 0;
  return {
    title: { zh: p.zh, en: p.en },
    artist: m.ja && `${m.ja} ${m.en}`,
    bpm: r,
    swing: 0.5,
    beatsPerBar: 4,
    bars: E$(c),
    dj: h,
    bar(t) {
      let [n, r, i] = T$(c, t),
        o = n.prog[r];
      new br(Ar(`tk-idol/${e}/${t}`));
      let s = [],
        p = n.kind,
        m = r === n.bars - 1,
        h = p.startsWith(`chorus`) || p === `intro`;
      (Lr(`x...x...x...x...`, `kick`, s),
        Lr(`....x.......x...`, h ? `clap` : `snare`, s, `drums`, 0.25, 0.85),
        Lr(`..o...o...o...o.`, `hat_o`, s, `drums`, 0.25, 0.45),
        Lr(`gggggggggggggggg`, `tk_tamb`, s, `perc`, 0.25, h ? 0.6 : 0.4),
        h && r % 4 == 0 && Lr(`x`, `crash`, s, `drums`, 0.25, 0.7),
        p.startsWith(`chorus`) &&
          r % 4 == 3 &&
          s.push({
            t: 3,
            m: 60,
            d: 0.5,
            v: 0.9,
            inst: `drum:vox_hey`,
            ch: `fx`,
          }),
        m &&
          i?.kind.startsWith(`chorus`) &&
          Lr(`....x.x.xxxxxxxx`, `snare`, s, `drums`, 0.25, 0.8));
      let g = M$(o, 33 + a);
      for (let e = 0; e < 8; e++)
        s.push({
          t: e * 0.5,
          m: e % 2 ? g + 12 : g,
          d: 0.42,
          v: 0.85,
          inst: `synthbass`,
          ch: `bass`,
        });
      let _ = j$(o, 66 + a, 4, d);
      for (let e = 0; e < 4; e++)
        for (let t of _)
          s.push({
            t: e + 0.5,
            m: t,
            d: 0.4,
            v: h ? 0.6 : 0.45,
            inst: `supersaw`,
            ch: `keys`,
          });
      if (h || p === `pre`)
        for (let e of j$(o, 76 + a, 3, f))
          s.push({ t: 0, m: e, d: 3.9, v: 0.35, inst: `strings`, ch: `pad` });
      let v =
        p === `verse` || p === `pre`
          ? l[r % l.length]
          : p.startsWith(`chorus`) || p === `intro`
            ? u[r % u.length]
            : null;
      if (v) {
        p !== `intro` && s.push(...k$(v));
        for (let e of v)
          s.push({
            ...e,
            m: e.m + 12,
            v: e.v * (p === `intro` ? 0.75 : 0.4),
            inst: `tk_glock`,
            ch: `fx`,
          });
      }
      return A$(s, n.tr);
    },
    filter(e) {
      let [t, n] = T$(c, e);
      return t.kind === `intro` && n < 4
        ? [700 + n * 1200, 1900 + n * 1200]
        : null;
    },
    sidechain: (e) => (T$(c, e)[0].kind.startsWith(`chorus`) ? 0.35 : 0.15),
  };
}
var H$ = [
    `7twelve`,
    `familymark`,
    `lawsan`,
    `matsukiyoji`,
    `yodogawa`,
    `doncoyote`,
    `yoshidaya`,
    `karaoke`,
  ],
  U$ = {
    "tk-citypop": `epiano`,
    "tk-jrock": `distlead`,
    "tk-enka": `tk_koto`,
    "tk-idol": `tk_glock`,
  };
function W$(e, t, n, r) {
  let i = new br(Ar(`tk-spot/${e}/${t}`)),
    a = t % 6 == 4,
    o = a
      ? n(`audio.radio.ad.${H$[Math.floor(t / 6 + Ar(e)) % H$.length]}`)
      : r[Math.floor(t / 6) % r.length],
    s = e === `tk-enka` ? 9 : i.pick([0, 2, 5, 7]),
    c = [[], [], [], []],
    l = a ? `marimba` : (U$[e] ?? `vox`),
    u = e === `tk-enka` ? L$ : Er.pentaMaj,
    d = 67 + D$(s),
    f = Cr([e === `tk-enka` ? `i` : `I`], s)[0];
  [0, 1, 2, 4, 3, 2, 1, 0].forEach((e, t) =>
    c[t < 4 ? 0 : 1].push({
      t: (t % 4) * 0.5 + 0,
      m: d + u[e % u.length],
      d: 0.45,
      v: 0.7,
      inst: l,
      ch: `lead`,
    }),
  );
  for (let t = 0; t < 4; t++)
    for (let n of Tr(f, 62, 3, null))
      c[t].push({
        t: 0,
        m: n,
        d: 3.9,
        v: t < 2 ? 0.45 : 0.3,
        inst: e === `tk-jrock` ? `strings` : `pad`,
        ch: `pad`,
      });
  return (
    e === `tk-jrock` &&
      c[0].push(
        { t: 0, m: 60, d: 1, v: 0.8, inst: `drum:crash`, ch: `drums` },
        { t: 0, m: 40 + s, d: 1.8, v: 0.9, inst: `power`, ch: `keys` },
      ),
    e === `tk-idol` &&
      c[0].push(
        { t: 0, m: 60, d: 0.5, v: 0.8, inst: `drum:tk_tamb`, ch: `perc` },
        { t: 1.5, m: 60, d: 0.5, v: 0.9, inst: `drum:vox_hey`, ch: `fx` },
      ),
    {
      title: a
        ? { zh: `廣告`, en: `Commercial` }
        : { zh: `電台台呼`, en: `Station ID` },
      artist: ``,
      bpm: 108,
      swing: 0.5,
      beatsPerBar: 4,
      bars: 4,
      bar: (e) => (c[e] ?? []).map((e) => ({ ...e })),
      jingle: !0,
      dj: o,
    }
  );
}
function G$(e) {
  let t = (e, t, n, r, i, a = `lead`) => ({
      t: e,
      m: t,
      d: n,
      v: r,
      inst: i,
      ch: a,
    }),
    n = (e, n, r = 0.9) => t(e, 60, 1, r, `drum:` + n, `drums`);
  switch (e) {
    case `tk-citypop`:
      return [
        t(0, 69, 1.5, 0.55, `epiano`, `keys`),
        t(0, 72, 1.5, 0.5, `epiano`, `keys`),
        t(0, 76, 1.5, 0.5, `epiano`, `keys`),
        t(0, 79, 1.5, 0.5, `epiano`, `keys`),
        t(0.5, 81, 0.3, 0.6, `tk_brass`),
        t(0.75, 84, 1, 0.65, `tk_brass`),
        n(0, `kick`),
        n(0.5, `tk_tamb`, 0.6),
      ];
    case `tk-jrock`:
      return [
        t(0, 40, 0.45, 0.95, `power`, `keys`),
        t(0.5, 40, 0.45, 0.95, `power`, `keys`),
        t(1, 47, 1.6, 1, `power`, `keys`),
        t(1, 76, 1.4, 0.7, `distlead`),
        n(0, `kick`),
        n(1, `crash`, 0.8),
        n(1, `kick`),
      ];
    case `tk-enka`:
      return [
        t(0, 69, 0.4, 0.6, `tk_koto`, `keys`),
        t(0.25, 72, 0.4, 0.6, `tk_koto`, `keys`),
        t(0.5, 76, 0.4, 0.6, `tk_koto`, `keys`),
        t(0.75, 81, 1.5, 0.65, `tk_koto`, `keys`),
        t(0.5, 76, 1.8, 0.5, `tk_shaku`),
        n(0, `tk_taiko`, 0.8),
      ];
    default:
      return [
        t(0, 84, 0.25, 0.7, `tk_glock`, `fx`),
        t(0.25, 88, 0.25, 0.7, `tk_glock`, `fx`),
        t(0.5, 91, 0.25, 0.7, `tk_glock`, `fx`),
        t(0.75, 96, 1, 0.75, `tk_glock`, `fx`),
        n(0, `kick`),
        n(0.75, `crash`, 0.6),
        n(1, `vox_hey`, 0.9),
      ];
  }
}
function K$(e, t, n, r, i, a, o, s, c, l) {
  let u = new Map(),
    d = l(`audio.radio.${t}.name`),
    f = [];
  for (let e = 1; e <= c; e++) f.push(l(`audio.radio.${t}.id.${e}`));
  return {
    id: e,
    name: { zh: d.zh, en: d.en },
    genre: r,
    freq: n,
    fx: i,
    trim: a,
    mix: o,
    ids: f,
    ident: G$(e),
    item(t) {
      let n = u.get(t);
      return (
        n ||
          ((n = t % 3 == 1 ? W$(e, t, l, f) : s(Math.floor((t * 2) / 3), l)),
          u.set(t, n),
          u.size > 12 && u.delete(u.keys().next().value)),
        n
      );
    },
  };
}
function q$(e) {
  return [
    K$(
      `tk-citypop`,
      `citypop`,
      `FM 83.8`,
      `city pop`,
      `none`,
      0.55,
      { keys: 1.4, bass: 0.75, lead: 2.2, pad: 1.1 },
      P$,
      3,
      e,
    ),
    K$(
      `tk-jrock`,
      `jrock`,
      `FM 87.2`,
      `J-rock`,
      `none`,
      0.36,
      { keys: 3.2, bass: 0.6, lead: 2.6 },
      I$,
      3,
      e,
    ),
    K$(
      `tk-enka`,
      `enka`,
      `AM 1503`,
      `enka`,
      `hall`,
      0.9,
      { keys: 1.6, lead: 2.6, pad: 1.2, fx: 1.4 },
      z$,
      2,
      e,
    ),
    K$(
      `tk-idol`,
      `idol`,
      `FM 77.7`,
      `idol pop`,
      `none`,
      0.5,
      { keys: 2.2, lead: 3.2, pad: 1.1, fx: 1.4 },
      V$,
      3,
      e,
    ),
  ];
}
var J$ = (e, t, n) => (e < t ? t : e > n ? n : e),
  Y$ = (e) => {
    let t = 2166136261;
    for (let n = 0; n < e.length; n++)
      ((t ^= e.charCodeAt(n)), (t = Math.imul(t, 16777619)));
    return t >>> 0;
  };
