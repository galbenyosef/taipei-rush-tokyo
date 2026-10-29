// tokyo/assets/region-tokyo-audioWorker-GAP5c6S0 10 — inst
// Lines 2810-3158 of readable/tokyo/assets/region-tokyo-audioWorker-GAP5c6S0.pretty.js (statement-aligned).
function ct(t, n) {
  let r = new e(U(`tk-idol/` + t)),
    i = r.pick([160, 164, 168, 172, 176]),
    a = r.pick([0, 2, 4, 5, 7, 9]),
    o = K(a),
    s = r.pick(st),
    c = st[0],
    l = et(
      [
        [`intro`, 8, c],
        [`verse`, 8, s],
        [`pre`, 4, [`ii`, `iii`, `IV`, `V`]],
        [`chorus`, 8, c],
        [`inter`, 4, c],
        [`verse`, 8, s],
        [`pre`, 4, [`ii`, `iii`, `IV`, `V`]],
        [`chorus`, 8, c],
        [`chorus2`, 8, c, 1],
        [`outro`, 4, c],
      ],
      a,
    ),
    u = H(r, {
      chords: l[1].prog,
      key: a,
      scale: z.major,
      lo: 67 + o,
      hi: 81 + o,
      inst: `vox`,
      vel: 0.8,
      rhythms: q(`x-x-x-x-x-x-x---`, `x-x-x---x-x-x-x-`, `..x-x-x-x-x-x---`),
      cadence: q(`x-x-x-----------`),
    }),
    d = H(r, {
      chords: l[3].prog,
      key: a,
      scale: z.pentaMaj,
      lo: 71 + o,
      hi: 86 + o,
      inst: `vox`,
      vel: 0.92,
      rhythms: q(`x-x-x-x-x---x-x-`, `x---x-x-x-x-x---`, `x-x-x---x-x-x---`),
      cadence: q(`x---x-----------`, `x-x-x-----------`),
    }),
    f = { v: null },
    p = { v: null },
    m = n(`audio.song.idol.${1 + r.int(6)}`),
    h = n(`audio.artist.${10 + r.int(3)}`),
    g = r.chance(0.5) ? n(`audio.radio.dj.next-cute`, { name: m.ja }) : void 0;
  return {
    title: { zh: m.zh, en: m.en },
    artist: h.ja && `${h.ja} ${h.en}`,
    bpm: i,
    swing: 0.5,
    beatsPerBar: 4,
    bars: G(l),
    dj: g,
    bar(n) {
      let [r, i, a] = W(l, n),
        s = r.prog[i];
      new e(U(`tk-idol/${t}/${n}`));
      let c = [],
        m = r.kind,
        h = i === r.bars - 1,
        g = m.startsWith(`chorus`) || m === `intro`;
      (V(`x...x...x...x...`, `kick`, c),
        V(`....x.......x...`, g ? `clap` : `snare`, c, `drums`, 0.25, 0.85),
        V(`..o...o...o...o.`, `hat_o`, c, `drums`, 0.25, 0.45),
        V(`gggggggggggggggg`, `tk_tamb`, c, `perc`, 0.25, g ? 0.6 : 0.4),
        g && i % 4 == 0 && V(`x`, `crash`, c, `drums`, 0.25, 0.7),
        m.startsWith(`chorus`) &&
          i % 4 == 3 &&
          c.push({
            t: 3,
            m: 60,
            d: 0.5,
            v: 0.9,
            inst: `drum:vox_hey`,
            ch: `fx`,
          }),
        h &&
          a?.kind.startsWith(`chorus`) &&
          V(`....x.x.xxxxxxxx`, `snare`, c, `drums`, 0.25, 0.8));
      let _ = X(s, 33 + o);
      for (let e = 0; e < 8; e++)
        c.push({
          t: e * 0.5,
          m: e % 2 ? _ + 12 : _,
          d: 0.42,
          v: 0.85,
          inst: `synthbass`,
          ch: `bass`,
        });
      let v = Y(s, 66 + o, 4, f);
      for (let e = 0; e < 4; e++)
        for (let t of v)
          c.push({
            t: e + 0.5,
            m: t,
            d: 0.4,
            v: g ? 0.6 : 0.45,
            inst: `supersaw`,
            ch: `keys`,
          });
      if (g || m === `pre`)
        for (let e of Y(s, 76 + o, 3, p))
          c.push({ t: 0, m: e, d: 3.9, v: 0.35, inst: `strings`, ch: `pad` });
      let y =
        m === `verse` || m === `pre`
          ? u[i % u.length]
          : m.startsWith(`chorus`) || m === `intro`
            ? d[i % d.length]
            : null;
      if (y) {
        m !== `intro` && c.push(...J(y));
        for (let e of y)
          c.push({
            ...e,
            m: e.m + 12,
            v: e.v * (m === `intro` ? 0.75 : 0.4),
            inst: `tk_glock`,
            ch: `fx`,
          });
      }
      return tt(c, r.tr);
    },
    filter(e) {
      let [t, n] = W(l, e);
      return t.kind === `intro` && n < 4
        ? [700 + n * 1200, 1900 + n * 1200]
        : null;
    },
    sidechain: (e) => (W(l, e)[0].kind.startsWith(`chorus`) ? 0.35 : 0.15),
  };
}
const lt = [
    `7twelve`,
    `familymark`,
    `lawsan`,
    `matsukiyoji`,
    `yodogawa`,
    `doncoyote`,
    `yoshidaya`,
    `karaoke`,
  ],
  ut = {
    "tk-citypop": `epiano`,
    "tk-jrock": `distlead`,
    "tk-enka": `tk_koto`,
    "tk-idol": `tk_glock`,
  };
function dt(t, n, r, i) {
  let a = new e(U(`tk-spot/${t}/${n}`)),
    o = n % 6 == 4,
    s = o
      ? r(`audio.radio.ad.${lt[Math.floor(n / 6 + U(t)) % lt.length]}`)
      : i[Math.floor(n / 6) % i.length],
    c = t === `tk-enka` ? 9 : a.pick([0, 2, 5, 7]),
    l = [[], [], [], []],
    u = o ? `marimba` : (ut[t] ?? `vox`),
    d = t === `tk-enka` ? Q : z.pentaMaj,
    f = 67 + K(c),
    p = Ye([t === `tk-enka` ? `i` : `I`], c)[0];
  [0, 1, 2, 4, 3, 2, 1, 0].forEach((e, t) =>
    l[t < 4 ? 0 : 1].push({
      t: (t % 4) * 0.5 + 0,
      m: f + d[e % d.length],
      d: 0.45,
      v: 0.7,
      inst: u,
      ch: `lead`,
    }),
  );
  for (let e = 0; e < 4; e++)
    for (let n of Ze(p, 62, 3, null))
      l[e].push({
        t: 0,
        m: n,
        d: 3.9,
        v: e < 2 ? 0.45 : 0.3,
        inst: t === `tk-jrock` ? `strings` : `pad`,
        ch: `pad`,
      });
  return (
    t === `tk-jrock` &&
      l[0].push(
        { t: 0, m: 60, d: 1, v: 0.8, inst: `drum:crash`, ch: `drums` },
        { t: 0, m: 40 + c, d: 1.8, v: 0.9, inst: `power`, ch: `keys` },
      ),
    t === `tk-idol` &&
      l[0].push(
        { t: 0, m: 60, d: 0.5, v: 0.8, inst: `drum:tk_tamb`, ch: `perc` },
        { t: 1.5, m: 60, d: 0.5, v: 0.9, inst: `drum:vox_hey`, ch: `fx` },
      ),
    {
      title: o
        ? { zh: `廣告`, en: `Commercial` }
        : { zh: `電台台呼`, en: `Station ID` },
      artist: ``,
      bpm: 108,
      swing: 0.5,
      beatsPerBar: 4,
      bars: 4,
      bar: (e) => (l[e] ?? []).map((e) => ({ ...e })),
      jingle: !0,
      dj: s,
    }
  );
}
function ft(e) {
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
function pt(e, t, n, r, i, a, o, s, c, l) {
  let u = /* @__PURE__ */ new Map(),
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
    ident: ft(e),
    item(t) {
      let n = u.get(t);
      return (
        n ||
          ((n = t % 3 == 1 ? dt(e, t, l, f) : s(Math.floor((t * 2) / 3), l)),
          u.set(t, n),
          u.size > 12 && u.delete(u.keys().next().value)),
        n
      );
    },
  };
}
function mt(e) {
  return [
    pt(
      `tk-citypop`,
      `citypop`,
      `FM 83.8`,
      `city pop`,
      `none`,
      0.55,
      { keys: 1.4, bass: 0.75, lead: 2.2, pad: 1.1 },
      nt,
      3,
      e,
    ),
    pt(
      `tk-jrock`,
      `jrock`,
      `FM 87.2`,
      `J-rock`,
      `none`,
      0.36,
      { keys: 3.2, bass: 0.6, lead: 2.6 },
      it,
      3,
      e,
    ),
    pt(
      `tk-enka`,
      `enka`,
      `AM 1503`,
      `enka`,
      `hall`,
      0.9,
      { keys: 1.6, lead: 2.6, pad: 1.2, fx: 1.4 },
      ot,
      2,
      e,
    ),
    pt(
      `tk-idol`,
      `idol`,
      `FM 77.7`,
      `idol pop`,
      `none`,
      0.5,
      { keys: 2.2, lead: 3.2, pad: 1.1, fx: 1.4 },
      ct,
      3,
      e,
    ),
  ];
}
const ht = { ...ce, ...ue },
  $ = (e, t = []) => self.postMessage(e, t);
function gt(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    ((t ^= e.charCodeAt(n)), (t = Math.imul(t, 16777619)));
  return t >>> 0;
}
