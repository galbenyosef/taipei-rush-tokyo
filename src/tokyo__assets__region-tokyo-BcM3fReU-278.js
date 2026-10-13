// tokyo__assets__region-tokyo-BcM3fReU 278 — points
// Lines 110404-110714 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function b6(e, t = g6) {
  let n = new Set(e),
    r = [],
    i = v6.filter((e) => n.has(e)).length,
    a = n.has(p6.rainman);
  (i === 5
    ? r.push({ id: `goko`, points: 10 })
    : i === 4
      ? r.push(a ? { id: `ameshiko`, points: 7 } : { id: `shiko`, points: 8 })
      : i === 3 && !a && r.push({ id: `sanko`, points: 5 }),
    y6.every((e) => n.has(e)) && r.push({ id: `inoshikacho`, points: 5 }),
    n.has(p6.curtain) && n.has(p6.cup) && r.push({ id: `hanami`, points: 5 }),
    n.has(p6.moon) && n.has(p6.cup) && r.push({ id: `tsukimi`, points: 5 }),
    p6.akatan.every((e) => n.has(e)) && r.push({ id: `akatan`, points: 5 }),
    p6.aotan.every((e) => n.has(e)) && r.push({ id: `aotan`, points: 5 }));
  let o = x6(e, t);
  return (
    o.tane >= 5 && r.push({ id: `tane`, points: o.tane - 4 }),
    o.tan >= 5 && r.push({ id: `tan`, points: o.tan - 4 }),
    o.kasu >= 10 && r.push({ id: `kasu`, points: o.kasu - 9 }),
    r
  );
}
function x6(e, t = g6) {
  let n = 0,
    r = 0,
    i = 0,
    a = 0;
  for (let o of e) {
    let e = f6[o].kind;
    (e === `hikari` ? n++ : e === `tane` ? r++ : e === `tan` ? i++ : a++,
      o === p6.cup && t.cupAsKasu && a++);
  }
  return { hikari: n, tane: r, tan: i, kasu: a };
}
var S6 = (e) => e.reduce((e, t) => e + t.points, 0);
function C6(e, t) {
  return t.filter((t) => {
    let n = e.find((e) => e.id === t.id);
    return !n || n.points < t.points;
  });
}
function w6(e, t, n = g6) {
  let r = new Set(e),
    i = new Set(t),
    a = (e, t, n, a) => ({
      id: e,
      have: t.filter((e) => r.has(e)).length,
      need: n,
      live: t.filter((e) => !i.has(e)).length >= n,
      points: a,
    }),
    o = b6(e, n),
    s = (e) => o.find((t) => t.id === e)?.points ?? 0,
    c = x6(e, n),
    l = x6(t, n),
    u = v6.filter((e) => r.has(e)).length,
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
      live: v6.filter((e) => !i.has(e)).length >= 3,
      points: d?.points ?? 0,
    },
    a(`inoshikacho`, y6, 3, s(`inoshikacho`)),
    a(`akatan`, p6.akatan, 3, s(`akatan`)),
    a(`aotan`, p6.aotan, 3, s(`aotan`)),
    a(`hanami`, [p6.curtain, p6.cup], 2, s(`hanami`)),
    a(`tsukimi`, [p6.moon, p6.cup], 2, s(`tsukimi`)),
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
function T6(e, t) {
  for (let n = t.length - 1; n > 0; n--) {
    let r = Math.floor(e.next() * (n + 1)),
      i = t[n];
    ((t[n] = t[r]), (t[r] = i));
  }
  return t;
}
var E6 = (e) => {
  let t = Array(13).fill(0);
  for (let n of e) t[m6(n)]++;
  return t;
};
function D6(e, t) {
  if (E6(e).some((e) => e === 4)) return !0;
  for (let e of t) {
    let t = E6(e);
    if (t.some((e) => e === 4) || t.every((e) => e === 0 || e === 2)) return !0;
  }
  return !1;
}
function O6(e, t, n = g6) {
  let r = 0;
  for (;;) {
    let i = T6(
        e,
        f6.map((e) => e.id),
      ),
      a = [[], []],
      o = [];
    for (let e = 0; e < 4; e++)
      (a[_6(t)].push(i.pop(), i.pop()),
        o.push(i.pop(), i.pop()),
        a[t].push(i.pop(), i.pop()));
    if (D6(o, a) && r < 64) {
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
var k6 = (e, t) => e.field.filter((e) => m6(e) === m6(t));
function A6(e, t) {
  let n = k6(e, t);
  return n.length === 2 ? n : [];
}
function j6(e, t, n) {
  let r = k6(e, t);
  return r.length === 0
    ? []
    : r.length === 2
      ? [t, n !== void 0 && r.includes(n) ? n : r[0]]
      : [t, ...r];
}
function M6(e, t, n, r) {
  let i = k6(e, n);
  if (i.length === 2 && (r === void 0 || !i.includes(r)))
    throw Error(`koikoi: card ${n} needs a target (${i.join(`,`)})`);
  let a = j6(e, n, r);
  if (a.length === 0) return (e.field.push(n), []);
  for (let t of a) {
    let n = e.field.indexOf(t);
    n >= 0 && e.field.splice(n, 1);
  }
  return (e.caps[t].push(...a), a);
}
function N6(e, t, n) {
  if (e.phase !== `play`) throw Error(`koikoi: play in phase ${e.phase}`);
  let r = e.hands[e.turn],
    i = r.indexOf(t);
  if (i < 0) throw Error(`koikoi: card ${t} not in hand ${e.turn}`);
  let a = k6(e, t);
  if (a.length === 2 && (n === void 0 || !a.includes(n)))
    throw Error(`koikoi: card ${t} needs a target`);
  r.splice(i, 1);
  let o = M6(e, e.turn, t, n);
  return ((e.phase = `flip`), { card: t, captured: o });
}
function P6(e) {
  if (e.phase !== `flip`) throw Error(`koikoi: flip in phase ${e.phase}`);
  let t = e.deck.pop();
  if (t === void 0) throw Error(`koikoi: the draw pile is empty`);
  return ((e.drawn = t), (e.phase = `drawn`), t);
}
function F6(e, t) {
  if (e.phase !== `drawn` || e.drawn === null)
    throw Error(`koikoi: resolveDrawn in phase ${e.phase}`);
  let n = e.drawn,
    r = e.turn,
    i = M6(e, r, n, t);
  ((e.drawn = null), e.moves++);
  let a = b6(e.caps[r], e.rules),
    o = S6(a),
    s = C6(e.seen[r], a);
  return (
    (e.seen[r] = a),
    o > e.best[e.turn] && s.length
      ? ((e.best[e.turn] = o),
        e.hands[e.turn].length === 0
          ? z6(e, e.turn, `last`)
          : (e.phase = `decide`))
      : L6(e),
    { card: n, captured: i, newYaku: s.length && o > 0 ? s : void 0 }
  );
}
function I6(e, t) {
  if (e.phase !== `decide`) throw Error(`koikoi: decide in phase ${e.phase}`);
  t ? (e.koi[e.turn]++, L6(e)) : z6(e, e.turn, `stop`);
}
function L6(e) {
  if (
    ((e.turn = _6(e.turn)), e.hands[0].length === 0 && e.hands[1].length === 0)
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
function R6(e, t) {
  let n = b6(e.caps[t], e.rules),
    r = S6(n),
    i = e.rules.double7 && r >= 7,
    a = e.rules.koiDouble && e.koi[_6(t)] > 0;
  return {
    yaku: n,
    base: r,
    doubled7: i,
    koiDoubled: a,
    points: r * (i ? 2 : 1) * (a ? 2 : 1),
  };
}
function z6(e, t, n) {
  let r = R6(e, t);
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
function B6(e, t = 1, n = g6, r = 0, i = 2) {
  let a = new ne(e);
  return {
    rounds: Math.max(1, t | 0),
    maxExtra: i,
    scores: [0, 0],
    history: [],
    round: O6(a, r, n),
    rng: a,
    rules: n,
  };
}
function V6(e) {
  let t = e.round;
  if (t.phase !== `over` || !t.result)
    throw Error(`koikoi: the round is not over`);
  return (
    (e.history.length === 0 || e.history[e.history.length - 1] !== t.result) &&
      (e.history.push(t.result),
      t.result.winner !== null &&
        (e.scores[t.result.winner] += t.result.points)),
    !H6(e) && ((e.round = O6(e.rng, t.result.winner ?? t.oya, e.rules)), !0)
  );
}
function H6(e) {
  let t = e.history.length;
  return t < e.rounds
    ? !1
    : e.scores[0] !== e.scores[1] || t >= e.rounds + e.maxExtra;
}
