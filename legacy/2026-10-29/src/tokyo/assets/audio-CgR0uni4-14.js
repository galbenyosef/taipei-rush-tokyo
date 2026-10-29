// tokyo/assets/audio-CgR0uni4 14 — pick
// Lines 5919-6233 of readable/tokyo/assets/audio-CgR0uni4.pretty.js (statement-aligned).
function cn(e) {
  let t = new o(Xt(`pop/` + e)),
    n = t.pick([72, 76, 80, 84, 88, 96]),
    r = t.pick([0, 2, 3, 4, 5, 7, 9]),
    i = tn(r),
    a = t.pick([sn.canon, sn.pop, sn.fifties]),
    s = t.pick([sn.royal, sn.sad, sn.canon, sn.pop].filter((e) => e !== a)),
    c = t.pick([
      [`ii7`, `iii7`, `IVmaj7`, `V7sus4`],
      [`IV`, `V`, `iii`, `vi`],
      [`IV`, `V/3`, `vi`, `V`],
    ]),
    l = [`vi`, `iii`, `IV`, `V`],
    u = t.chance(0.7) ? t.pick([1, 2]) : 0,
    d = Zt(
      [
        [`intro`, 4, s],
        [`verse`, 8, a],
        [`pre`, 4, c],
        [`chorus`, 8, s],
        [`inter`, 4, a],
        [`verse`, 8, a],
        [`pre`, 4, c],
        [`chorus`, 8, s],
        [`bridge`, 4, l],
        [`chorus2`, 8, s, u],
        [`outro`, 4, s],
      ],
      r,
    ),
    f = d[1].prog,
    p = d[3].prog,
    m = Yt(t, {
      chords: f,
      key: r,
      scale: Vt.major,
      lo: 60 + i,
      hi: 74 + i,
      inst: `vox`,
      vel: 0.75,
      rhythms: q(
        `x-x-x---x-x-x---`,
        `..x-x-x-x---x---`,
        `x---x-x-x-x-x---`,
        `x-x-x-x---..x-x-`,
      ),
      cadence: q(`x---x---x-------`, `x-x-x-----------`, `x-------x-------`),
    }),
    h = Yt(t, {
      chords: p,
      key: r,
      scale: Vt.pentaMaj,
      lo: 65 + i,
      hi: 81 + i,
      inst: `vox`,
      vel: 0.9,
      rhythms: q(
        `x---x---x-x-x---`,
        `x-x---x-x---x---`,
        `x-----x-x---x---`,
        `x-x-x---x---x-x-`,
      ),
      cadence: q(`x---x-----------`, `x-x-x-----------`),
    }),
    g = Yt(t, {
      chords: p,
      key: r,
      scale: Vt.pentaMaj,
      lo: 69 + i,
      hi: 86 + i,
      inst: `erhu`,
      vel: 0.55,
      rhythms: q(`x-------x-------`, `........x---x---`, `x-----------x---`),
      cadence: q(`x---------------`),
    }),
    _ = { v: null },
    v = { v: null },
    y = { v: null },
    [b, x] = t.pick(an);
  return {
    title: { zh: b, en: x },
    artist: t.pick(on),
    bpm: n,
    swing: 0.5,
    beatsPerBar: 4,
    bars: $t(d),
    bar(t) {
      let [n, r, a] = Qt(d, t),
        s = n.prog[r],
        c = r + 1 < n.bars ? n.prog[r + 1] : (a?.prog[0] ?? s),
        l = new o(Xt(`pop/${e}/${t}`)),
        u = [],
        f = r === n.bars - 1,
        p = n.kind;
      if (
        (p === `verse` || p === `inter`
          ? (G(`x.......x.x.....`, `kick`, u),
            G(`....x.......x...`, `rim`, u, `drums`, 0.25, 0.8),
            G(`x.g.x.g.x.g.x.g.`, `hat_c`, u, `drums`, 0.25, 0.6))
          : p === `pre`
            ? (G(`x.......x.x.....`, `kick`, u),
              G(f ? `....o...x.o.xxxx` : `....o.......o...`, `snare`, u),
              G(`x.x.x.x.x.x.x.x.`, `hat_c`, u, `drums`, 0.25, 0.6))
            : (p.startsWith(`chorus`) || p === `bridge`) &&
              (G(
                p === `bridge` ? `x.......x.......` : `x.....x.x.x.....`,
                `kick`,
                u,
              ),
              G(`....x.......x...`, `snare`, u),
              G(`x.x.x.x.x.x.x.o.`, `hat_c`, u, `drums`, 0.25, 0.7),
              r % 4 == 0 && G(`x`, `crash`, u, `drums`, 0.25, 0.6),
              G(`g.g.g.g.g.g.g.g.`, `shaker`, u, `perc`, 0.25, 0.5)),
        f &&
          a &&
          (a.kind.startsWith(`chorus`) || a.kind === `verse`) &&
          p !== `intro` &&
          rn(`tom`, u, l),
        p !== `intro` &&
          p !== `outro` &&
          nn(
            s,
            c,
            p.startsWith(`chorus`) ? `pop` : `ballad`,
            u,
            l,
            `bass`,
            33 + i,
          ),
        p === `intro` || p === `outro`)
      ) {
        if ((K(s, _, `arp`, u, l, `piano`, 64 + i, 0.55), p === `intro`))
          for (let e of h[r % h.length])
            u.push({
              ...e,
              inst: `piano`,
              m: e.m + 12,
              v: e.v * 0.6,
              ch: `keys`,
            });
      } else
        p.startsWith(`chorus`)
          ? K(s, _, `block`, u, l, `piano`, 66 + i, 0.55)
          : p === `bridge`
            ? K(s, _, `whole`, u, l, `piano`, 64 + i, 0.6)
            : K(s, _, `arp`, u, l, `piano`, 64 + i, 0.6);
      if (
        ((p === `pre` || p.startsWith(`chorus`) || p === `bridge`) &&
          K(s, v, `whole`, u, l, `pad`, 60 + i, 0.5, `pad`),
        (p === `chorus2` ||
          p === `bridge` ||
          (p === `chorus` && n.start > 30)) &&
          K(s, y, `whole`, u, l, `strings`, 72 + i, 0.45, `pad`),
        p === `verse` && u.push(...m[r % m.length].map((e) => ({ ...e }))),
        p.startsWith(`chorus`) &&
          (u.push(...h[r % h.length].map((e) => ({ ...e }))),
          p === `chorus2` || n.start > 30))
      )
        for (let e of g[r % g.length]) u.push({ ...e });
      if (p === `inter` || p === `bridge`)
        for (let e of g[r % g.length]) u.push({ ...e, v: e.v * 1.2 });
      if (p === `outro` && f)
        for (let e of Kt(s, 64 + i, 4, null))
          u.push({ t: 0, m: e, d: 4, v: 0.5, inst: `pad`, ch: `pad` });
      return en(u, n.tr);
    },
    sidechain: () => 0.15,
  };
}
var ln = [
    [`凌晨兩點的滷肉飯`, `2AM Braised Pork Rice`],
    [`騎樓雨聲`, `Arcade Rain`],
    [`臭豆腐夢`, `Stinky Tofu Dreams`],
    [`夜市打烊`, `Market Closing Time`],
    [`頂樓加蓋`, `Rooftop Addition`],
    [`鐵窗貓`, `Window-Cage Cat`],
    [`便利商店的光`, `Convenience Store Glow`],
    [`公館書店`, `Gongguan Bookshop`],
    [`豆花時間`, `Douhua Hour`],
  ],
  un = [
    `夜貓子 Night Owl`,
    `Beats by 阿嬤 Ama`,
    `lofi.tpe`,
    `溫州街 Wenzhou St.`,
    `雨天 Rainy Day`,
  ],
  dn = [
    [`ii9`, `V9`, `Imaj9`, `vi9`],
    [`IVmaj7`, `iii7`, `vi9`, `V7sus4`],
    [`Imaj7`, `vi7`, `ii9`, `V9`],
    [`IVmaj7`, `III7`, `vi9`, `I7`],
    [`vi9`, `ii9`, `Vsus4`, `Imaj7`],
  ];
function fn(e) {
  let t = new o(Xt(`lofi/` + e)),
    n = t.pick([70, 74, 78, 82, 86]),
    r = t.pick([0, 2, 3, 5, 7, 8, 10]),
    i = tn(r),
    a = t.pick(dn),
    s = Zt(
      [
        [`intro`, 4, a],
        [`a`, 8, a],
        [`b`, 8, a],
        [`a2`, 8, a],
        [`b`, 8, a],
        [`outro`, 4, a],
      ],
      r,
    ),
    c = t.pick([`flute`, `musicbox`, `erhu`, `epiano`]),
    l = Yt(t, {
      chords: s[2].prog,
      key: r,
      scale: Vt.pentaMaj,
      lo: 67 + i,
      hi: 84 + i,
      inst: c,
      vel: 0.6,
      rhythms: q(
        `x---x-----x-----`,
        `..x-x---x-------`,
        `x-------x-x-----`,
        `....x-x-x---x---`,
      ),
      cadence: q(`x---------------`, `x-----x---------`),
    }),
    u = t.pick([`x.....x...x.x...`, `x.......x.x.....`, `x..x......x.....`]),
    d = { v: null },
    [f, p] = t.pick(ln);
  return {
    title: { zh: f, en: p },
    artist: t.pick(un),
    bpm: n,
    swing: t.range(0.57, 0.63),
    beatsPerBar: 4,
    bars: $t(s),
    bar(t) {
      let [n, r, a] = Qt(s, t),
        c = n.prog[r],
        f = r + 1 < n.bars ? n.prog[r + 1] : (a?.prog[0] ?? c),
        p = new o(Xt(`lofi/${e}/${t}`)),
        m = [],
        h = n.kind;
      return (
        h !== `intro` &&
          h !== `outro` &&
          ((h === `a2` && r < 2) || G(u, `kick_lofi`, m),
          G(
            `....x.......x..` + (p.chance(0.3) ? `g` : `.`),
            p.chance(0.2) ? `rim` : `snare_lofi`,
            m,
          ),
          G(`x.xgx.x.x.xgx.xg`, `hat_c`, m, `drums`, 0.25, 0.45),
          h === `b` && G(`..g...g...g...g.`, `shaker`, m, `perc`, 0.25, 0.5)),
        h !== `intro` && nn(c, f, `lofi`, m, p, `bass`, 33 + i),
        K(
          c,
          d,
          `lofi`,
          m,
          p,
          `epiano`,
          62 + i,
          h === `intro` || h === `outro` ? 0.55 : 0.68,
        ),
        h === `b` && m.push(...l[r % l.length].map((e) => ({ ...e }))),
        h === `intro` &&
          r === 0 &&
          m.push({
            t: 0.5,
            m: 60,
            d: 2,
            v: 0.35,
            inst: `sfx:vendor_call`,
            ch: `fx`,
          }),
        m
      );
    },
    filter(e) {
      let [t, n] = Qt(s, e);
      return t.kind === `intro`
        ? n < 3
          ? [900, 900]
          : [900, 6500]
        : t.kind === `outro`
          ? [6500 - n * 1400, 5e3 - n * 1200]
          : [6500, 6500];
    },
    sidechain: () => 0.2,
  };
}
var pn = [
    [`三太子降臨`, `Third Prince Descends`],
    [`神明 Drop`, `Deity Drop`],
    [`遶境 Rave`, `Pilgrimage Rave`],
    [`鞭炮 Bass`, `Firecracker Bass`],
    [`八家將`, `Eight Generals`],
    [`霓虹廟埕`, `Neon Temple Square`],
    [`香爐 Trap`, `Incense Burner Trap`],
  ],
  mn = [
    `DJ 哪吒 Nezha`,
    `霓虹神明 Neon Gods Crew`,
    `廟口 Soundsystem`,
    `MC 三太子`,
  ],
  hn = [
    [`i`, `bVI`, `bIII`, `bVII`],
    [`i`, `bVII`, `bVI`, `bVII`],
    [`bVI`, `bVII`, `i`, `i`],
    [`i`, `bVI`, `bVII`, `v`],
  ];
