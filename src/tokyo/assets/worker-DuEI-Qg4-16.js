// tokyo/assets/worker-DuEI-Qg4 16 — push
// Lines 6337-6658 of readable/tokyo/assets/worker-DuEI-Qg4.pretty.js (statement-aligned).
function Zt(t) {
  let n = new e(Y(`rock/` + t)),
    r = n.pick([132, 140, 148, 156]),
    i = n.pick([4, 9, 2, 7]),
    a = 40 + ((i - 4 + 12) % 12),
    o = Pt(i),
    s = n.pick(Xt),
    c = n.pick(Xt.filter((e) => e !== s)),
    l = At(
      [
        [`intro`, 4, c],
        [`verse`, 8, s],
        [`pre`, 4, [`IV`, `V`, `IV`, `V`]],
        [`chorus`, 8, c],
        [`verse`, 8, s],
        [`chorus`, 8, c],
        [`solo`, 8, s],
        [`chorus`, 8, c],
        [`outro`, 4, c],
      ],
      i,
    ),
    u = n.chance(0.55),
    d = J(n, {
      chords: l[3].prog,
      key: i,
      scale: G.pentaMaj,
      lo: 64 + o,
      hi: 81 + o,
      inst: u ? `organ` : `distlead`,
      vel: 0.8,
      rhythms: Q(`x-x-x---x-x-x---`, `x---x-x-x---x-x-`, `x-x-x-x-x-------`),
      cadence: Q(`x---x---x-------`, `x-x-x-----------`),
    }),
    f = J(n, {
      chords: l[6].prog,
      key: i,
      scale: G.blues,
      lo: 62 + o,
      hi: 84 + o,
      inst: `distlead`,
      vel: 0.85,
      rhythms: Q(
        `x-x-x-x-xxxxx---`,
        `x.xxx.x-x-x-x---`,
        `xxxxx---x-x-x---`,
        `x---x-xxx-x-x---`,
      ),
      cadence: Q(`x-x-x-----------`),
    }),
    [p, m] = n.pick(Jt);
  return {
    title: { zh: p, en: m },
    artist: n.pick(Yt),
    bpm: r,
    swing: 0.5,
    beatsPerBar: 4,
    bars: Mt(l),
    bar(n) {
      let [r, i, o] = jt(l, n),
        s = r.prog[i],
        c = i + 1 < r.bars ? r.prog[i + 1] : (o?.prog[0] ?? s),
        u = new e(Y(`rock/${t}/${n}`)),
        p = [],
        m = r.kind,
        h = i === r.bars - 1,
        g = K(a + 5, [s.root], a, a + 11),
        _ = (e, t, n, r) =>
          p.push({ t: e, m: g, d: n, v: r, inst: t, ch: `keys` });
      if (m === `intro` && i < 2)
        for (let e = 0; e < 8; e++)
          _(e * 0.5, e % 4 == 0 ? `power` : `chug`, 0.45, 0.8);
      else if (m === `verse`) {
        for (let e = 0; e < 8; e++) _(e * 0.5, `chug`, 0.45, e % 2 ? 0.7 : 0.9);
        (q(`x.....x.x.......`, `kick`, p),
          q(`....x.......x...`, `snare`, p),
          q(`x.x.x.x.x.x.x.x.`, `hat_c`, p, `drums`, 0.25, 0.6),
          X(s, c, `eighths`, p, u, `bass`, a - 12));
      } else if (m === `pre`)
        (_(0, `power`, 1.9, 0.9),
          _(2, `power`, 1.9, 0.8),
          q(`x.x.x.x.x.x.x.x.`, `kick`, p, `drums`, 0.25, 0.8),
          q(`....x.......x...`, `snare`, p),
          q(i === 0 ? `x` : `.`, `crash`, p),
          h && Ft(`snare`, p, u),
          X(s, c, `eighths`, p, u, `bass`, a - 12));
      else {
        let e = m === `chorus` || m === `solo` || (m === `intro` && i >= 2);
        for (let e = 0; e < 8; e++)
          _(e * 0.5, `power`, 0.48, e % 2 ? 0.75 : 0.95);
        (q(`x.x...x.x.x.....`, `kick`, p),
          q(`....x.......x...`, `snare`, p),
          q(
            e ? `x.x.x.x.x.x.x.x.` : `x...x...x...x...`,
            `ride`,
            p,
            `drums`,
            0.25,
            0.5,
          ),
          i % 4 == 0 && q(`x`, `crash`, p, `drums`, 0.25, 0.8),
          X(s, c, `eighths`, p, u, `bass`, a - 12),
          m === `chorus` && p.push(...d[i % d.length].map((e) => ({ ...e }))),
          m === `solo` && p.push(...f[i % f.length].map((e) => ({ ...e }))),
          m === `outro` &&
            h &&
            ((p.length = 0),
            _(0, `power`, 3.9, 1),
            q(`x`, `crash`, p),
            q(`x`, `kick`, p)));
      }
      return (
        h &&
          o &&
          o.kind !== m &&
          m !== `pre` &&
          m !== `outro` &&
          Ft(`tom`, p, u),
        p
      );
    },
    sidechain: () => 0,
  };
}
function Qt(e, t, n, r, i) {
  let a = i.reduce((e, t) => Math.max(e, t.t + t.d), 0),
    o = Math.ceil(a / r) + 1,
    s = [];
  for (let e = 0; e < o; e++) s.push([]);
  for (let e of i) {
    let t = Math.floor(e.t / r + 1e-6);
    s[Math.min(o - 1, t)].push({
      t: e.t - t * r,
      m: e.m,
      d: e.d,
      v: e.v,
      inst: e.inst,
      ch: e.ch,
    });
  }
  return {
    title: { zh: e[0], en: e[1] },
    artist: t,
    bpm: n,
    swing: 0.5,
    beatsPerBar: r,
    bars: o,
    bar: (e) => (s[e] ?? []).map((e) => ({ ...e })),
  };
}
function $t() {
  let e = [50, 45, 47, 42, 43, 38, 43, 45],
    t = Tt([`I`, `V`, `vi`, `iii`, `IV`, `I`, `IV`, `V`], 2),
    n = [78, 76, 74, 73, 71, 69, 71, 73],
    r = [74, 73, 71, 69, 67, 66, 67, 64],
    i = [],
    a = (e, t) =>
      e.map((e, n) => ({
        t: n * t,
        m: e,
        d: t * 0.95,
        v: 0.7,
        inst: ``,
        ch: `lead`,
      }));
  i.push(a(n, 1), a(r, 1));
  let o = [];
  (t.forEach((e, t) => {
    let r = K(n[t] + 2, Et(e), 66, 86);
    o.push(r, K(r - 4, Et(e), 62, 84));
  }),
    i.push(a(o, 0.5)));
  let s = [];
  (t.forEach((e) => {
    let t = K(74, [e.root], 69, 80),
      n = Et(e);
    s.push(t, K(t + 3, n, t + 1, t + 6), K(t + 7, n, t + 5, t + 9), t + 12);
  }),
    i.push(a(s, 0.25)));
  let c = [];
  (n.forEach((e, t) =>
    c.push(e, t < 7 ? Math.round((e + n[t + 1]) / 2) : e - 2),
  ),
    i.push(
      a(c, 0.5),
      a(
        n.map((e) => e + 12),
        1,
      ),
    ));
  let l = [];
  for (let n = 0; n < 11; n++) {
    let r = n * 8;
    (e.forEach((e, t) =>
      l.push({ t: r + t, m: e, d: 0.95, v: 0.75, inst: `strings`, ch: `bass` }),
    ),
      t.forEach((e, t) => {
        for (let n of Dt(e, 62, 3, null))
          l.push({
            t: r + t,
            m: n,
            d: 0.5,
            v: 0.28,
            inst: `harpsi`,
            ch: `keys`,
          });
      }));
    for (let e = 0; e < 3; e++) {
      let t = n - 1 - e * 1;
      if (t < 0 || t >= i.length) continue;
      let a = e === 0 || e === 1 ? `strings` : `harpsi`;
      for (let n of i[t])
        l.push({
          ...n,
          t: r + n.t,
          inst: a,
          v: e === 0 ? 0.62 : e === 1 ? 0.5 : 0.45,
          m: n.m - (e === 1 ? 12 : 0),
        });
    }
  }
  l.push({ t: 88, m: 38, d: 4, v: 0.7, inst: `strings`, ch: `bass` });
  for (let e of [62, 66, 69, 74])
    l.push({ t: 88, m: e, d: 4, v: 0.5, inst: `strings`, ch: `pad` });
  return Qt([`卡農`, `Canon in D`], `J. Pachelbel`, 66, 4, l);
}
function en() {
  let e = [
      [
        [74, 1],
        [67, 0.5],
        [69, 0.5],
        [71, 0.5],
        [72, 0.5],
      ],
      [
        [74, 1],
        [67, 1],
        [67, 1],
      ],
      [
        [76, 1],
        [72, 0.5],
        [74, 0.5],
        [76, 0.5],
        [78, 0.5],
      ],
      [
        [79, 1],
        [67, 1],
        [67, 1],
      ],
      [
        [72, 1],
        [74, 0.5],
        [72, 0.5],
        [71, 0.5],
        [69, 0.5],
      ],
      [
        [71, 1],
        [72, 0.5],
        [71, 0.5],
        [69, 0.5],
        [67, 0.5],
      ],
      [
        [66, 1],
        [67, 0.5],
        [69, 0.5],
        [71, 0.5],
        [67, 0.5],
      ],
      [[69, 3]],
    ],
    t = [
      ...e.slice(0, 6),
      [
        [69, 1],
        [71, 0.5],
        [69, 0.5],
        [67, 0.5],
        [66, 0.5],
      ],
      [[67, 3]],
    ],
    n = [43, 47, 48, 47, 45, 43, 50, 50],
    r = [43, 47, 48, 47, 45, 43, 50, 43],
    i = [],
    a = 0,
    o = (e, t, n, r) => {
      e.forEach((e, o) => {
        let s = 0;
        for (let [t, o] of e)
          (i.push({
            t: a + s,
            m: t + n,
            d: o * 0.92,
            v: 0.7,
            inst: r,
            ch: `lead`,
          }),
            (s += o));
        (i.push({
          t: a,
          m: t[o] - 12 + 12,
          d: 1.9,
          v: 0.55,
          inst: r,
          ch: `bass`,
        }),
          (a += 3));
      });
    };
  return (
    o(e, n, 0, `harpsi`),
    o(t, r, 0, `harpsi`),
    o(e, n, 0, `piano`),
    o(t, r, 0, `piano`),
    Qt([`小步舞曲 G 大調`, `Minuet in G`], `C. Petzold`, 126, 3, i)
  );
}
