// tokyo/assets/tokyo-CqLdAwml 05 — city
// Lines 1224-1546 of readable/tokyo/assets/tokyo-CqLdAwml.pretty.js (statement-aligned).
var Vn = [
    [1 / 5e4, 1e5, { zh: `特別獎`, en: `Special Prize` }],
    [1 / 1e4, 2e4, { zh: `特獎`, en: `Grand Prize` }],
    [1 / 2e3, 2e3, { zh: `頭獎`, en: `First Prize` }],
    [1 / 50, 200, { zh: `六獎`, en: `Sixth Prize` }],
  ],
  Hn = [
    [
      0.1,
      600,
      { zh: `上上籤`, en: `Supreme fortune` },
      {
        zh: `貴人相助，財運亨通。`,
        en: `Help from above; money flows your way.`,
      },
    ],
    [
      0.25,
      200,
      { zh: `上籤`, en: `Good fortune` },
      { zh: `出門順利，小有收穫。`, en: `Smooth going, a little gain.` },
    ],
    [
      0.4,
      0,
      { zh: `中籤`, en: `Fair fortune` },
      { zh: `平平安安就是福。`, en: `Safe and sound is luck enough.` },
    ],
    [
      0.25,
      0,
      { zh: `下籤`, en: `Poor fortune` },
      {
        zh: `今天開車慢一點，別跟人吵架。`,
        en: `Drive slowly today. Do not pick fights.`,
      },
    ],
  ],
  Un = [
    [
      0.1,
      600,
      { zh: `大吉`, en: `Great blessing` },
      {
        zh: `願望會實現，走路小心別撞到電線桿。`,
        en: `Your wish comes true. Mind the lamp posts.`,
      },
    ],
    [
      0.25,
      200,
      { zh: `中吉`, en: `Middle blessing` },
      {
        zh: `等的電車馬上就來。`,
        en: `The train you wait for comes right away.`,
      },
    ],
    [
      0.4,
      0,
      { zh: `小吉`, en: `Small blessing` },
      {
        zh: `平平安安，便當還是熱的。`,
        en: `Safe and sound, and the bento is still warm.`,
      },
    ],
    [
      0.25,
      0,
      { zh: `凶`, en: `Bad luck` },
      {
        zh: `綁在神社的樹枝上，壞運氣就留在這裡。`,
        en: `Tie it to the shrine branch and leave the bad luck here.`,
      },
    ],
  ];
function Wn(e, t) {
  let r = t.effect;
  if (!r) return { ok: !1, text: { zh: `收藏品`, en: `A keepsake` } };
  let i = e.player;
  if (i.mode === `dead` || i.mode === `busted` || i.mode === `cutscene`)
    return { ok: !1, text: { zh: `現在不能用`, en: `Not now` } };
  switch (r.kind) {
    case `heal`:
      return i.health >= i.maxHealth
        ? { ok: !1, text: { zh: `體力已經滿了`, en: `Already at full health` } }
        : {
            ok: !0,
            text: {
              zh: n.on
                ? n.t(`體力 +${r.hp}`, `体力 +${r.hp}`)
                : `體力 +${r.hp}`,
              en: `+${r.hp} HP`,
            },
          };
    case `sprint`:
      return typeof i.buff == `function`
        ? {
            ok: !0,
            text: {
              zh: n.on
                ? n.t(`衝刺更快 ${r.sec} 秒`, `${r.sec} 秒間ダッシュが速くなる`)
                : `衝刺更快 ${r.sec} 秒`,
              en: `Faster sprint for ${r.sec} s`,
            },
          }
        : { ok: !1, text: { zh: `現在不能用`, en: `Not now` } };
    case `armor`:
      return i.armor >= 100
        ? { ok: !1, text: { zh: `防護已經滿了`, en: `Armor is full` } }
        : {
            ok: !0,
            text: {
              zh: n.on
                ? n.t(`防護 +${r.amount}`, `防御 +${r.amount}`)
                : `防護 +${r.amount}`,
              en: `+${r.amount} armor`,
            },
          };
    case `repair`: {
      let t = i.mode === `vehicle` ? e.vehicles.get(i.vehicleId) : void 0;
      if (!t)
        return {
          ok: !1,
          text: { zh: `要坐在車上才能用`, en: `Use it in a vehicle` },
        };
      let n = t.maxHealth ?? 1e3;
      return t.health >= n && !t.onFire
        ? { ok: !1, text: { zh: `車子好好的`, en: `The car is fine` } }
        : { ok: !0, text: { zh: `修好車子`, en: `Repairs the car` } };
    }
    case `draw`:
      return { ok: !0, text: { zh: `對獎`, en: `Check it` } };
    case `money`:
      return {
        ok: !0,
        text:
          t.city === `tokyo`
            ? { zh: `打開小紅包`, en: `Open it` }
            : { zh: `打開紅包`, en: `Open it` },
      };
    case `fortune`:
      return {
        ok: !0,
        text:
          t.city === `tokyo`
            ? { zh: `打開神籤`, en: `Read it` }
            : { zh: `看籤詩`, en: `Read it` },
      };
    case `gacha`:
      return {
        ok: !0,
        text:
          t.city === `tokyo`
            ? { zh: `轉一顆`, en: `Turn the handle` }
            : { zh: `戳一格`, en: `Punch one` },
      };
  }
}
function Gn(e, t) {
  let r = L[t];
  if (!r || !Sn(e, t))
    return { ok: !1, text: { zh: `背包裡沒有`, en: `Not in your bag` } };
  let i = Wn(e, r);
  if (!i.ok) return i;
  let a = r.effect,
    o = e.player,
    s,
    c;
  switch ((In(e, t), e.state.stat(`use_${t}`), a.kind)) {
    case `heal`:
      (o.heal(a.hp),
        En(e, `ui_confirm`),
        (s = {
          zh: n.on
            ? n.t(
                `${r.name.zh}：體力 +${a.hp}`,
                `${n.jz(r.name.zh)}：体力 +${a.hp}`,
              )
            : `${r.name.zh}：體力 +${a.hp}`,
          en: `${r.name.en}: +${a.hp} HP`,
        }));
      break;
    case `sprint`:
      (o.buff?.(`caffeine`, a.sec),
        En(e, `ui_confirm`),
        (s = {
          zh: n.on
            ? n.t(
                `${r.name.zh}：衝刺更快 ${a.sec} 秒`,
                `${n.jz(r.name.zh)}：${a.sec} 秒間ダッシュが速くなる`,
              )
            : `${r.name.zh}：衝刺更快 ${a.sec} 秒`,
          en: `${r.name.en}: faster sprint for ${a.sec} s`,
        }));
      break;
    case `armor`:
      ((o.armor = Math.min(100, o.armor + a.amount)),
        En(e, `temple_bell`),
        (s = {
          zh: n.on
            ? n.t(
                `神明保佑！防護 +${a.amount}`,
                `神様のご加護！防御 +${a.amount}`,
              )
            : `神明保佑！防護 +${a.amount}`,
          en: `The gods protect you! +${a.amount} armor`,
        }));
      break;
    case `repair`:
      (e.vehicles.repair?.(e.vehicles.get(o.vehicleId)),
        En(e, `ui_confirm`),
        (s = {
          zh: `放上綠色乖寶，車子乖乖的不會壞了！`,
          en: `A green Guai-Bao on the dash — the car behaves again!`,
        }));
      break;
    case `draw`: {
      let t = Math.random(),
        r = 0,
        i = Vn.find(([e]) => t < (r += e));
      if (i) {
        let [, t, r] = i,
          a = On(t);
        (e.state.addMoney(a.v, `receipt`),
          e.state.stat(`receiptWins`),
          En(e, t >= 2e3 ? `mission_pass` : `money`),
          (s = {
            zh: n.on
              ? n.t(
                  `對中${r.zh}！${a.label}`,
                  `${n.jz(r.zh)}に当選！${a.label}`,
                )
              : `對中${r.zh}！${a.label}`,
            en: `${r.en}! ${a.label}`,
          }));
      } else
        (En(e, `ui_back`),
          (s = { zh: `槓龜，下一張會更好`, en: `No luck. Next one!` }),
          (c = !1));
      break;
    }
    case `money`: {
      let t = On(
        Math.round((a.min + Math.random() * (a.max - a.min)) / 100) * 100,
      );
      (e.state.addMoney(t.v, `red-envelope`),
        En(e, `money`),
        (s =
          r.city === `tokyo`
            ? {
                zh: n.on
                  ? n.t(
                      `小紅包裡有 ${t.label}！`,
                      `ポチ袋に ${t.label} 入ってた！`,
                    )
                  : `小紅包裡有 ${t.label}！`,
                en: `${t.label} in the envelope!`,
              }
            : {
                zh: n.on
                  ? n.t(`紅包裡有 ${t.label}！`, `紅包に ${t.label} 入ってた！`)
                  : `紅包裡有 ${t.label}！`,
                en: `${t.label} in the envelope!`,
              }));
      break;
    }
    case `fortune`: {
      let [, t, i, a] = Ln(
        (r.city === `tokyo` ? Un : Hn).map((e) => [e, e[0]]),
      );
      (t && e.state.addMoney(On(t).v, `fortune`),
        En(e, t ? `temple_bell` : `ui_back`),
        (s = {
          zh: n.on
            ? n.t(
                `${i.zh}：${a.zh}${t ? `（${On(t).label}）` : ``}`,
                `${n.jz(i.zh)}：${n.jz(a.zh)}${t ? `（${On(t).label}）` : ``}`,
              )
            : `${i.zh}：${a.zh}${t ? `（${On(t).label}）` : ``}`,
          en: `${i.en}: ${a.en}${t ? ` (${On(t).label})` : ``}`,
        }),
        t || (c = !1));
      break;
    }
    case `gacha`: {
      let t = Cn(e),
        i = (r.city === `tokyo` ? we : Ie).filter(
          (t) => (xn(e)[t] ?? 0) < L[t].max,
        ),
        a = i.filter((e) => !t.has(e)),
        o = a.length ? a : i,
        l = o.length ? o[Math.floor(Math.random() * o.length)] : null;
      l && Pn(e, l, 1, { quiet: !0 })
        ? (En(e, `pickup`),
          (s = {
            zh: n.on
              ? n.t(
                  `抽到「${L[l].name.zh}」！${a.length ? `圖鑑新收錄` : ``}`,
                  `「${n.jz(L[l].name.zh)}」が出た！${a.length ? `図鑑に新登録` : ``}`,
                )
              : `抽到「${L[l].name.zh}」！${a.length ? `圖鑑新收錄` : ``}`,
            en: `You got: ${L[l].name.en}!${a.length ? ` New in your book` : ``}`,
          }))
        : (En(e, `ui_back`),
          (s = { zh: `銘謝惠顧`, en: `Better luck next time` }),
          (c = !1));
      break;
    }
  }
  return { ok: !0, text: s, luck: c };
}
var Kn = `<svg aria-hidden="true" focusable="false" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.263 11.097c-.03-3.486-1.92-5.586-5.111-5.586-2.13 0-3.922.963-4.863 2.499l2.062 1.438c.535-.843 1.272-1.543 2.628-1.543 1.528 0 2.318.85 2.544 2.431a15 15 0 0 0-2.236-.173c-4.125 0-6.068 1.867-6.068 4.336s1.943 3.99 4.804 3.99c3.139 0 5.013-2.115 5.781-4.735.798.361 1.348 1.204 1.348 2.47 0 3.387-3.907 5.232-7.22 5.232-4.885 0-8.077-3.207-8.077-8.424 0-6.392 4.223-10.487 9.9-10.487 3.808 0 5.69 1.671 6.97 3.914l2.108-1.475C21.44 2.078 18.331 0 13.663 0 6.227 0 1.168 5.277 1.168 12.934c0 7 4.953 11.066 10.856 11.066 4.878 0 9.809-2.846 9.809-7.716 0-2.545-1.46-4.231-3.569-5.187m-6.33 4.855c-1.077 0-2.026-.512-2.026-1.453 0-1.483 1.822-1.934 3.606-1.934.678 0 1.34.045 1.927.173-.422 1.927-1.671 3.215-3.508 3.214Z"/></svg>`;
async function qn(t) {
  let { loadAnimLibrary: n } = await e(
    async () => {
      let { loadAnimLibrary: e } = await import(`./clips-GNiXKOuW.js`);
      return { loadAnimLibrary: e };
    },
    __vite__mapDeps([0, 1]),
  );
  return n(t);
}
