// tokyo/assets/worker-DgMkLY7L 17 — inst
// Lines 6691-6970 of readable/tokyo/assets/worker-DgMkLY7L.pretty.js (statement-aligned).
function tn() {
  let e = [
      [66, 1],
      [66, 1],
      [67, 1],
      [69, 1],
      [69, 1],
      [67, 1],
      [66, 1],
      [64, 1],
      [62, 1],
      [62, 1],
      [64, 1],
      [66, 1],
      [66, 1.5],
      [64, 0.5],
      [64, 2],
      [66, 1],
      [66, 1],
      [67, 1],
      [69, 1],
      [69, 1],
      [67, 1],
      [66, 1],
      [64, 1],
      [62, 1],
      [62, 1],
      [64, 1],
      [66, 1],
      [64, 1.5],
      [62, 0.5],
      [62, 2],
      [64, 1],
      [64, 1],
      [66, 1],
      [62, 1],
      [64, 1],
      [66, 0.5],
      [67, 0.5],
      [66, 1],
      [62, 1],
      [64, 1],
      [66, 0.5],
      [67, 0.5],
      [66, 1],
      [64, 1],
      [62, 1],
      [64, 1],
      [57, 2],
      [66, 1],
      [66, 1],
      [67, 1],
      [69, 1],
      [69, 1],
      [67, 1],
      [66, 1],
      [64, 1],
      [62, 1],
      [62, 1],
      [64, 1],
      [66, 1],
      [64, 1.5],
      [62, 0.5],
      [62, 2],
    ],
    t = [
      `I`,
      `V`,
      `I`,
      `V`,
      `I`,
      `V`,
      `I`,
      `I`,
      `V`,
      `V`,
      `V`,
      `V`,
      `I`,
      `V`,
      `I`,
      `I`,
    ],
    n = [];
  for (let r = 0; r < 2; r++) {
    let i = r * 64,
      a = 0;
    for (let [t, o] of e)
      (n.push({
        t: i + a,
        m: t + 12,
        d: o * 0.92,
        v: 0.72,
        inst: r ? `strings` : `piano`,
        ch: `lead`,
      }),
        r &&
          n.push({
            t: i + a,
            m: t,
            d: o * 0.92,
            v: 0.4,
            inst: `flute`,
            ch: `lead`,
          }),
        (a += o));
    t.forEach((e, t) => {
      let a = wt(e, 2),
        o = i + t * 4;
      (n.push({
        t: o,
        m: K(43, [a.root], 38, 49),
        d: 1.9,
        v: 0.6,
        inst: r ? `strings` : `piano`,
        ch: `bass`,
      }),
        n.push({
          t: o + 2,
          m: K(43, [a.root], 38, 49) + 7,
          d: 1.9,
          v: 0.5,
          inst: r ? `strings` : `piano`,
          ch: `bass`,
        }));
      for (let e of Dt(a, 62, 3, null))
        n.push({
          t: o,
          m: e,
          d: 3.9,
          v: r ? 0.35 : 0.3,
          inst: r ? `pad` : `piano`,
          ch: `pad`,
        });
    });
  }
  return Qt([`快樂頌`, `Ode to Joy`], `L. v. Beethoven`, 104, 4, n);
}
function nn() {
  let e = [];
  for (let t = 0; t < 30; t++) {
    let n = t % 2 == 0,
      r = t * 3;
    e.push({
      t: r,
      m: n ? 43 : 38,
      d: 2.9,
      v: 0.55,
      inst: `piano`,
      ch: `bass`,
    });
    for (let t of n ? [59, 62, 66] : [57, 61, 66])
      e.push({ t: r + 1, m: t, d: 1.9, v: 0.36, inst: `piano`, ch: `keys` });
  }
  for (let [t, n, r, i] of [
    [4, 1, 78, 1],
    [4, 2, 81, 1],
    [5, 0, 79, 1],
    [5, 1, 78, 1],
    [5, 2, 73, 1],
    [6, 0, 71, 1],
    [6, 1, 73, 1],
    [6, 2, 74, 1],
    [7, 0, 69, 3],
    [8, 0, 66, 6],
    [12, 1, 78, 1],
    [12, 2, 81, 1],
    [13, 0, 79, 1],
    [13, 1, 78, 1],
    [13, 2, 73, 1],
    [14, 0, 71, 1],
    [14, 1, 73, 1],
    [14, 2, 74, 1],
    [15, 0, 69, 3],
    [16, 0, 73, 3],
    [17, 0, 78, 3],
    [18, 0, 76, 5],
    [20, 1, 69, 1],
    [20, 2, 71, 1],
    [21, 0, 72, 1],
    [21, 1, 74, 1],
    [21, 2, 76, 1],
    [22, 0, 74, 3],
    [23, 0, 71, 1],
    [23, 1, 74, 1],
    [23, 2, 71, 1],
    [24, 0, 69, 3],
    [25, 0, 66, 3],
    [26, 0, 64, 6],
  ])
    e.push({ t: t * 3 + n, m: r, d: i, v: 0.62, inst: `piano`, ch: `lead` });
  return Qt([`吉諾佩第一號`, `Gymnopédie No. 1`], `E. Satie`, 72, 3, e);
}
function rn(e, t, n, r) {
  return Qt(
    t,
    n,
    r,
    3,
    e.notes.map((e) => ({
      t: e.t,
      m: e.m,
      d: e.d,
      v: e.v * 0.8,
      inst: `piano`,
      ch: e.m < 60 ? `bass` : `lead`,
    })),
  );
}
const an = [
    $t,
    en,
    () => rn(tt(), [`給愛麗絲`, `Für Elise`], `L. v. Beethoven`, 66),
    tn,
    nn,
    () => rn(ot(), [`少女的祈禱`, `A Maiden's Prayer`], `T. Bądarzewska`, 80),
  ],
  on = /* @__PURE__ */ new Map();
function sn(t, n, r) {
  let i = new e(Y(`jingle/${t}/${n}`)),
    a = [[], []],
    o =
      t === `edm`
        ? `suona`
        : t === `rock`
          ? `distlead`
          : t === `lofi`
            ? `musicbox`
            : t === `classical`
              ? `harpsi`
              : `vox`,
    s = t === `edm` ? 9 : t === `rock` ? 4 : 0,
    c = t === `edm` ? G.pentaMin : G.pentaMaj,
    l = 67 + Pt(s);
  [0, 1, 2, 4, 3]
    .map((e) => l + c[e % c.length] - c[0])
    .forEach((e, t) =>
      a[0].push({
        t: t * 0.5,
        m: e,
        d: t === 4 ? 2 : 0.45,
        v: 0.8,
        inst: o,
        ch: `lead`,
      }),
    );
  let u = wt(t === `edm` ? `i` : `I`, s),
    d =
      t === `rock`
        ? `power`
        : t === `lofi`
          ? `epiano`
          : t === `classical`
            ? `strings`
            : `pad`;
  for (let e of t === `rock` ? [40 + s] : Dt(u, 60, 4, null))
    a[0].push({ t: 0, m: e, d: 3.5, v: 0.6, inst: d, ch: `pad` });
  return (
    t !== `classical` &&
      t !== `lofi` &&
      (a[0].push(
        { t: 0, m: 60, d: 1, v: 0.8, inst: `drum:crash`, ch: `drums` },
        { t: 0, m: 60, d: 1, v: 0.9, inst: `drum:kick`, ch: `drums` },
      ),
      Ft(`tom`, a[1], i)),
    t === `edm` &&
      a[0].push({ t: 0, m: 60, d: 2, v: 0.8, inst: `drum:gong`, ch: `perc` }),
    {
      title: { zh: `電台台呼`, en: `Station ID` },
      artist: ``,
      bpm: t === `rock` ? 140 : t === `edm` ? 128 : 96,
      swing: 0.5,
      beatsPerBar: 4,
      bars: 2,
      bar: (e) => (a[e] ?? []).map((e) => ({ ...e })),
      jingle: !0,
      dj: r,
    }
  );
}
