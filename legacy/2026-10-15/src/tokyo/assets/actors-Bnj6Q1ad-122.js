// tokyo/assets/actors-Bnj6Q1ad 122 — brand
// Lines 57797-57891 of readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js (statement-aligned).
function jA(e, t) {
  try {
    return e?.buildings?.storefront?.(t.id);
  } catch {
    return;
  }
}
function MA(e, t) {
  let n = `${e.id}|${e.kind}|${e.brand}`,
    r = kA.get(n);
  if (!r) {
    let i = AA?.(e),
      a =
        !i && (e.kind === `convenience` || e.kind === `bubbletea`)
          ? ut(e.brand)
          : void 0;
    r =
      i ??
      (a
        ? { zh: a.zh, en: a.en }
        : (OA[e.kind] ?? { zh: e.brand, en: e.brand }));
    let o = jA(t, e)?.name;
    (o && (r = { zh: o, en: r.en }), t && kA.set(n, r));
  }
  return r;
}
function NA(e) {
  let t = e?.hours;
  if (!t) return;
  if (/24\s*H/i.test(t)) return null;
  let n = /(\d{1,2}):(\d{2})\s*[-–~]\s*(\d{1,2}):(\d{2})/.exec(t);
  if (n) return [+n[1] + n[2] / 60, +n[3] + n[4] / 60];
}
var PA = (e) =>
    `${String(Math.floor(e) % 24).padStart(2, `0`)}:${String(Math.round((e % 1) * 60)).padStart(2, `0`)}`,
  FA = (e, t) => (e[0] <= e[1] ? t >= e[0] && t < e[1] : t >= e[0] || t < e[1]),
  IA = (e) => e.replace(/^the /, ``).replace(/^./, (e) => e.toUpperCase()),
  LA = [
    { zh: `三太子娃娃`, en: `a Third Prince plush` },
    { zh: `珍奶抱枕`, en: `a bubble-tea pillow` },
    { zh: `台灣黑熊玩偶`, en: `a Formosan black bear plush` },
    { zh: `石虎娃娃`, en: `a leopard-cat plush` },
    { zh: `雞排造型抱枕`, en: `a fried-chicken-cutlet cushion` },
  ],
  RA = 32,
  zA = 5;
function BA() {
  let e = {};
  for (let t of Object.keys(DA)) e[t] = [DA[t]];
  return {
    items: e,
    prizes: LA,
    clawMiss: [
      { zh: `差一點點…爪子好鬆！`, en: `So close… the claw is so weak!` },
      { zh: `娃娃掉下去了…再一次？`, en: `It slipped… one more try?` },
      {
        zh: `保夾還要再投 490 元…`,
        en: `Only ${at(490, rt)} more until a guaranteed win…`,
      },
    ],
    lottery: {
      prizes: [
        [2e-5, 2e5],
        [0.00202, 5e3],
        [0.01202, 1e3],
        [0.09202, 200],
        [0.29202, 100],
      ],
      cap: zA,
      big: 5e3,
      lose: { zh: `銘謝惠顧`, en: `Better luck next time` },
      soldOut: {
        zh: i.on
          ? i.t(
              `今天這家的刮刮樂賣完了（每天 ${zA} 張），明天再來！`,
              `この店のスクラッチくじは今日は売り切れ（1日 ${zA} 枚まで）。また明日！`,
            )
          : `今天這家的刮刮樂賣完了（每天 ${zA} 張），明天再來！`,
        en: `Sold out here for today (${zA} per day) — come back tomorrow!`,
      },
    },
    shrine: {
      offering: { zh: `香油錢`, en: `offering` },
      blessed: {
        zh: `土地公保佑！任務報酬 +10%，持續 5 分鐘`,
        en: `Blessed by the Earth God! +10% mission pay for 5 min`,
      },
      faded: {
        zh: `土地公的保佑結束了`,
        en: `The Earth God's blessing has faded`,
      },
      own: !1,
    },
  };
}
