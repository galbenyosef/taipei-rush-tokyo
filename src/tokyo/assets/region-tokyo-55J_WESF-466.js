// tokyo/assets/region-tokyo-55J_WESF 466 — variant
// Lines 168750-168940 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function yBe(e, t) {
  let n = [],
    r = 0;
  for (let t = 1; t < e.length; t++) {
    let i = Math.hypot(e[t][0] - e[t - 1][0], e[t][1] - e[t - 1][1]);
    (n.push(i), (r += i));
  }
  let i = [];
  for (let a = 0; a < t; a++) {
    let o = (a / (t - 1)) * r,
      s = 0;
    for (; s < n.length - 1 && o > n[s];) ((o -= n[s]), s++);
    let c = n[s] ? Math.min(1, o / n[s]) : 0;
    i.push([
      e[s][0] + (e[s + 1][0] - e[s][0]) * c,
      e[s][1] + (e[s + 1][1] - e[s][1]) * c,
    ]);
  }
  return i;
}
function bBe(e, t, n) {
  try {
    let r = e.ctx.input.device;
    Kn(t, n, r === `gamepad` || r === `touch` ? r : `kbm`, e.ctx.state.lang);
  } catch {
    t.textContent = n;
  }
}
r.add({ 一小時內重複同一份工作: `1時間以内に同じ仕事の繰り返し` });
var xBe = 4972682,
  H5 = [
    { xp: 0, name: N(`新人`, `Rookie`, `新人`) },
    { xp: 3, name: N(`熟手`, `Regular`, `一人前`) },
    { xp: 8, name: N(`老手`, `Veteran`, `ベテラン`) },
    { xp: 15, name: N(`代理店長`, `Acting manager`, `店長代理`) },
  ],
  U5 = [`C`, `B`, `A`, `S`],
  SBe = { S: 2e3, A: 1e3, B: 300, C: 0 },
  CBe = class {
    m;
    job;
    panel;
    rng;
    rank;
    variant;
    sum = 0;
    n = 0;
    progress = 0;
    get pace() {
      return (this.variant ? 1.25 : 1) * (1 + this.progress * 0.5);
    }
    constructor(e, t, n) {
      ((this.m = e),
        (this.job = t),
        (this.rank = n.rank),
        (this.variant = n.variant),
        (this.rng = new ie(
          ge(`baito`, t.key, n.shifts, Math.floor(e.ctx.time.elapsed)),
        )),
        (this.panel = new vBe(e, {
          name: n.variant && t.variant ? t.variant.name : t.title,
          startHour: n.startHour,
          hours: t.hours,
          lives: t.lives,
        })));
    }
    get ctx() {
      return this.m.ctx;
    }
    score(e) {
      return ((this.sum += e), this.n++, e <= 0.05 && this.panel.strike(), e);
    }
    served() {
      (this.panel.served++, this.panel.stats());
    }
    get quality() {
      return this.n ? this.sum / this.n : 0;
    }
    pick(e) {
      return e[Math.floor(this.rng.next() * e.length)];
    }
    customerActor(e, t, n, r = 0, i = 0) {
      let a = F3(e, t);
      if (!a) return null;
      try {
        let e = this.m.actor(n, a.x + r, a.z + i, a.heading + Math.PI);
        return ((e.y = a.y), z3(e.root), e);
      } catch {
        return null;
      }
    }
    get over() {
      return this.panel.quit || this.panel.lives <= 0;
    }
  };
function wBe(e, t, n) {
  let r = e * 0.8 + Math.min(1, t / Math.max(1, n)) * 0.2;
  return r >= 0.88 ? `S` : r >= 0.72 ? `A` : r >= 0.52 ? `B` : `C`;
}
var W5 = (e) => `tokyo:baito:${e}`,
  G5 = (e, t) => `baito_${e}_${t}`;
function K5(e, t) {
  let n = e.state.data.stats,
    r = n[G5(t, `xp`)] ?? 0,
    i = 0;
  for (let e = 0; e < H5.length; e++) r >= H5[e].xp && (i = e);
  let a = n[G5(t, `best`)] ?? 0;
  return {
    shifts: n[G5(t, `shifts`)] ?? 0,
    xp: r,
    rank: i,
    best: a > 0 ? U5[a - 1] : null,
    earned: n[G5(t, `earned`)] ?? 0,
  };
}
var TBe = (e, t, n) =>
  Math.round((e.wage + t * 50) * (n && e.variant ? e.variant.mult : 1));
function EBe(e) {
  return {
    id: W5(e.key),
    title: e.title,
    description: e.desc,
    category: `job`,
    reward: e.wage * e.hours,
    repeatable: !0,
    icon: `story`,
    glyph: e.glyph,
    blip: `delivery`,
    color: xBe,
    giver: {
      outfit: e.giverOutfit ?? `v:tk-baito-${e.key}`,
      dx: 1.3,
      dz: 0.5,
      anim: `idle`,
      ...e.giver,
    },
    giverName: {
      zh: e.manager.name.zh,
      en: e.manager.name.en,
      ja: e.manager.name.ja,
    },
    order: 400,
    requires: e.requires,
    hours: e.open,
    skipTo: e.skipTo,
    skipCaption: N(
      `等到開店……`,
      `Waiting for the shop to open…`,
      `開店まで待つ……`,
    ),
    start: (t) => e.door(t),
    run: (t) => DBe(t, e),
  };
}
var q5 = {
  wanted: N(
    `被通緝的人不能上班——不能給店長添麻煩。`,
    `You can't work while wanted — the manager doesn't need that trouble.`,
    `指名手配中は働けない。店長に迷惑はかけられない。`,
  ),
  closed: N(
    `今天店裡進不去……改天再來吧。`,
    `The shop can't take you today… come back another time.`,
    `今日は店に入れない……また今度。`,
  ),
  normal: N(`一般班`, `Regular shift`, `通常シフト`),
  which: N(`今天要排哪一班？`, `Which shift today?`, `今日はどのシフト？`),
  sentHome: N(
    `今天先回去吧……下次加油。`,
    `Go home for today… better luck next time.`,
    `今日はもう上がっていいよ……次は頑張って。`,
  ),
  otsukare: N(`辛苦了！`, `Good work today!`, `お疲れさまでした！`),
  later: N(`（四小時後）`, `(Four hours later)`, `（4時間後）`),
  slip: N(`薪資明細`, `Pay slip`, `給与明細`),
  hoursPay: N(`時薪`, `Hourly wage`, `時給`),
  bonus: N(`紅包（大入袋）`, `Bonus envelope (大入り袋)`, `大入り袋`),
  total: N(`合計`, `Total`, `合計`),
  grade: N(`評價`, `Grade`, `評価`),
  rank: N(`職級`, `Rank`, `ランク`),
  rankUp: N(`升級了！`, `Promoted!`, `昇格！`),
  next: N(`距離下一級`, `To the next rank`, `次のランクまで`),
  shifts: N(`班`, `shifts`, `シフト`),
  ok: N(`收下`, `Take it`, `受け取る`),
  early: N(`（提早下班）`, `(sent home early)`, `（早上がり）`),
  quitNote: N(
    `中途下班：沒有薪水。`,
    `Left mid-shift: no pay.`,
    `途中で上がった：給料なし。`,
  ),
};
