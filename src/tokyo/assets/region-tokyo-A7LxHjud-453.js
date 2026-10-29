// tokyo/assets/region-tokyo-A7LxHjud 453 — points
// Lines 163596-163906 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function _8(e, t = p8) {
  let n = new Set(e),
    r = [],
    i = h8.filter((e) => n.has(e)).length,
    a = n.has(u8.rainman);
  (i === 5
    ? r.push({ id: `goko`, points: 10 })
    : i === 4
      ? r.push(a ? { id: `ameshiko`, points: 7 } : { id: `shiko`, points: 8 })
      : i === 3 && !a && r.push({ id: `sanko`, points: 5 }),
    g8.every((e) => n.has(e)) && r.push({ id: `inoshikacho`, points: 5 }),
    n.has(u8.curtain) && n.has(u8.cup) && r.push({ id: `hanami`, points: 5 }),
    n.has(u8.moon) && n.has(u8.cup) && r.push({ id: `tsukimi`, points: 5 }),
    u8.akatan.every((e) => n.has(e)) && r.push({ id: `akatan`, points: 5 }),
    u8.aotan.every((e) => n.has(e)) && r.push({ id: `aotan`, points: 5 }));
  let o = v8(e, t);
  return (
    o.tane >= 5 && r.push({ id: `tane`, points: o.tane - 4 }),
    o.tan >= 5 && r.push({ id: `tan`, points: o.tan - 4 }),
    o.kasu >= 10 && r.push({ id: `kasu`, points: o.kasu - 9 }),
    r
  );
}
function v8(e, t = p8) {
  let n = 0,
    r = 0,
    i = 0,
    a = 0;
  for (let o of e) {
    let e = l8[o].kind;
    (e === `hikari` ? n++ : e === `tane` ? r++ : e === `tan` ? i++ : a++,
      o === u8.cup && t.cupAsKasu && a++);
  }
  return { hikari: n, tane: r, tan: i, kasu: a };
}
var y8 = (e) => e.reduce((e, t) => e + t.points, 0);
function jze(e, t) {
  return t.filter((t) => {
    let n = e.find((e) => e.id === t.id);
    return !n || n.points < t.points;
  });
}
function Mze(e, t, n = p8) {
  let r = new Set(e),
    i = new Set(t),
    a = (e, t, n, a) => ({
      id: e,
      have: t.filter((e) => r.has(e)).length,
      need: n,
      live: t.filter((e) => !i.has(e)).length >= n,
      points: a,
    }),
    o = _8(e, n),
    s = (e) => o.find((t) => t.id === e)?.points ?? 0,
    c = v8(e, n),
    l = v8(t, n),
    u = h8.filter((e) => r.has(e)).length,
    d = o.find(
      (e) =>
        e.id === `goko` ||
        e.id === `shiko` ||
        e.id === `ameshiko` ||
        e.id === `sanko`,
    );
  return [
    {
      id: d?.id ?? `sanko`,
      have: u,
      need: u >= 3 ? Math.min(5, u + 1) : 3,
      live: h8.filter((e) => !i.has(e)).length >= 3,
      points: d?.points ?? 0,
    },
    a(`inoshikacho`, g8, 3, s(`inoshikacho`)),
    a(`akatan`, u8.akatan, 3, s(`akatan`)),
    a(`aotan`, u8.aotan, 3, s(`aotan`)),
    a(`hanami`, [u8.curtain, u8.cup], 2, s(`hanami`)),
    a(`tsukimi`, [u8.moon, u8.cup], 2, s(`tsukimi`)),
    {
      id: `tane`,
      have: c.tane,
      need: 5,
      live: 9 - l.tane >= 5,
      points: s(`tane`),
    },
    {
      id: `tan`,
      have: c.tan,
      need: 5,
      live: 10 - l.tan >= 5,
      points: s(`tan`),
    },
    {
      id: `kasu`,
      have: c.kasu,
      need: 10,
      live: 25 - l.kasu >= 10,
      points: s(`kasu`),
    },
  ];
}
function Nze(e, t) {
  for (let n = t.length - 1; n > 0; n--) {
    let r = Math.floor(e.next() * (n + 1)),
      i = t[n];
    ((t[n] = t[r]), (t[r] = i));
  }
  return t;
}
var b8 = (e) => {
  let t = Array(13).fill(0);
  for (let n of e) t[d8(n)]++;
  return t;
};
function Pze(e, t) {
  if (b8(e).some((e) => e === 4)) return !0;
  for (let e of t) {
    let t = b8(e);
    if (t.some((e) => e === 4) || t.every((e) => e === 0 || e === 2)) return !0;
  }
  return !1;
}
function x8(e, t, n = p8) {
  let r = 0;
  for (;;) {
    let i = Nze(
        e,
        l8.map((e) => e.id),
      ),
      a = [[], []],
      o = [];
    for (let e = 0; e < 4; e++)
      (a[m8(t)].push(i.pop(), i.pop()),
        o.push(i.pop(), i.pop()),
        a[t].push(i.pop(), i.pop()));
    if (Pze(o, a) && r < 64) {
      r++;
      continue;
    }
    for (let e of a) e.sort((e, t) => e - t);
    return {
      deck: i,
      field: o,
      hands: a,
      caps: [[], []],
      oya: t,
      turn: t,
      phase: `play`,
      drawn: null,
      koi: [0, 0],
      best: [0, 0],
      seen: [[], []],
      result: null,
      moves: 0,
      redeals: r,
      rules: n,
    };
  }
}
var S8 = (e, t) => e.field.filter((e) => d8(e) === d8(t));
function C8(e, t) {
  let n = S8(e, t);
  return n.length === 2 ? n : [];
}
function w8(e, t, n) {
  let r = S8(e, t);
  return r.length === 0
    ? []
    : r.length === 2
      ? [t, n !== void 0 && r.includes(n) ? n : r[0]]
      : [t, ...r];
}
function T8(e, t, n, r) {
  let i = S8(e, n);
  if (i.length === 2 && (r === void 0 || !i.includes(r)))
    throw Error(`koikoi: card ${n} needs a target (${i.join(`,`)})`);
  let a = w8(e, n, r);
  if (a.length === 0) return (e.field.push(n), []);
  for (let t of a) {
    let n = e.field.indexOf(t);
    n >= 0 && e.field.splice(n, 1);
  }
  return (e.caps[t].push(...a), a);
}
function E8(e, t, n) {
  if (e.phase !== `play`) throw Error(`koikoi: play in phase ${e.phase}`);
  let r = e.hands[e.turn],
    i = r.indexOf(t);
  if (i < 0) throw Error(`koikoi: card ${t} not in hand ${e.turn}`);
  let a = S8(e, t);
  if (a.length === 2 && (n === void 0 || !a.includes(n)))
    throw Error(`koikoi: card ${t} needs a target`);
  r.splice(i, 1);
  let o = T8(e, e.turn, t, n);
  return ((e.phase = `flip`), { card: t, captured: o });
}
function D8(e) {
  if (e.phase !== `flip`) throw Error(`koikoi: flip in phase ${e.phase}`);
  let t = e.deck.pop();
  if (t === void 0) throw Error(`koikoi: the draw pile is empty`);
  return ((e.drawn = t), (e.phase = `drawn`), t);
}
function O8(e, t) {
  if (e.phase !== `drawn` || e.drawn === null)
    throw Error(`koikoi: resolveDrawn in phase ${e.phase}`);
  let n = e.drawn,
    r = e.turn,
    i = T8(e, r, n, t);
  ((e.drawn = null), e.moves++);
  let a = _8(e.caps[r], e.rules),
    o = y8(a),
    s = jze(e.seen[r], a);
  return (
    (e.seen[r] = a),
    o > e.best[e.turn] && s.length
      ? ((e.best[e.turn] = o),
        e.hands[e.turn].length === 0
          ? M8(e, e.turn, `last`)
          : (e.phase = `decide`))
      : A8(e),
    { card: n, captured: i, newYaku: s.length && o > 0 ? s : void 0 }
  );
}
function k8(e, t) {
  if (e.phase !== `decide`) throw Error(`koikoi: decide in phase ${e.phase}`);
  t ? (e.koi[e.turn]++, A8(e)) : M8(e, e.turn, `stop`);
}
function A8(e) {
  if (
    ((e.turn = m8(e.turn)), e.hands[0].length === 0 && e.hands[1].length === 0)
  ) {
    ((e.result =
      e.rules.oyaken > 0
        ? {
            winner: e.oya,
            points: e.rules.oyaken,
            base: e.rules.oyaken,
            yaku: [],
            reason: `oyaken`,
            doubled7: !1,
            koiDoubled: !1,
          }
        : {
            winner: null,
            points: 0,
            base: 0,
            yaku: [],
            reason: `exhausted`,
            doubled7: !1,
            koiDoubled: !1,
          }),
      (e.phase = `over`));
    return;
  }
  e.phase = `play`;
}
function j8(e, t) {
  let n = _8(e.caps[t], e.rules),
    r = y8(n),
    i = e.rules.double7 && r >= 7,
    a = e.rules.koiDouble && e.koi[m8(t)] > 0;
  return {
    yaku: n,
    base: r,
    doubled7: i,
    koiDoubled: a,
    points: r * (i ? 2 : 1) * (a ? 2 : 1),
  };
}
function M8(e, t, n) {
  let r = j8(e, t);
  ((e.result = {
    winner: t,
    points: r.points,
    base: r.base,
    yaku: r.yaku,
    reason: n,
    doubled7: r.doubled7,
    koiDoubled: r.koiDoubled,
  }),
    (e.phase = `over`));
}
function N8(e, t = 1, n = p8, r = 0, i = 2) {
  let a = new le(e);
  return {
    rounds: Math.max(1, t | 0),
    maxExtra: i,
    scores: [0, 0],
    history: [],
    round: x8(a, r, n),
    rng: a,
    rules: n,
  };
}
function P8(e) {
  let t = e.round;
  if (t.phase !== `over` || !t.result)
    throw Error(`koikoi: the round is not over`);
  return (
    (e.history.length === 0 || e.history[e.history.length - 1] !== t.result) &&
      (e.history.push(t.result),
      t.result.winner !== null &&
        (e.scores[t.result.winner] += t.result.points)),
    !F8(e) && ((e.round = x8(e.rng, t.result.winner ?? t.oya, e.rules)), !0)
  );
}
function F8(e) {
  let t = e.history.length;
  return t < e.rounds
    ? !1
    : e.scores[0] !== e.scores[1] || t >= e.rounds + e.maxExtra;
}
