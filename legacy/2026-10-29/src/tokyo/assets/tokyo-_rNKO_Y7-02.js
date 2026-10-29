// tokyo/assets/tokyo-_rNKO_Y7 02 — city
// Lines 323-634 of readable/tokyo/assets/tokyo-_rNKO_Y7.pretty.js (statement-aligned).
var Rt = [
    [1 / 5e4, 1e5, { zh: `特別獎`, en: `Special Prize` }],
    [1 / 1e4, 2e4, { zh: `特獎`, en: `Grand Prize` }],
    [1 / 2e3, 2e3, { zh: `頭獎`, en: `First Prize` }],
    [1 / 50, 200, { zh: `六獎`, en: `Sixth Prize` }],
  ],
  zt = [
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
  Bt = [
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
function Vt(e, t) {
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
function Ht(e, t) {
  let r = R[t];
  if (!r || !St(e, t))
    return { ok: !1, text: { zh: `背包裡沒有`, en: `Not in your bag` } };
  let i = Vt(e, r);
  if (!i.ok) return i;
  let a = r.effect,
    o = e.player,
    s,
    c;
  switch ((Nt(e, t), e.state.stat(`use_${t}`), a.kind)) {
    case `heal`:
      (o.heal(a.hp),
        Et(e, `ui_confirm`),
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
        Et(e, `ui_confirm`),
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
        Et(e, `temple_bell`),
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
        Et(e, `ui_confirm`),
        (s = {
          zh: `放上綠色乖寶，車子乖乖的不會壞了！`,
          en: `A green Guai-Bao on the dash — the car behaves again!`,
        }));
      break;
    case `draw`: {
      let t = Math.random(),
        r = 0,
        i = Rt.find(([e]) => t < (r += e));
      if (i) {
        let [, t, r] = i,
          a = Ot(t);
        (e.state.addMoney(a.v, `receipt`),
          e.state.stat(`receiptWins`),
          Et(e, t >= 2e3 ? `mission_pass` : `money`),
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
        (Et(e, `ui_back`),
          (s = { zh: `槓龜，下一張會更好`, en: `No luck. Next one!` }),
          (c = !1));
      break;
    }
    case `money`: {
      let t = Ot(
        Math.round((a.min + Math.random() * (a.max - a.min)) / 100) * 100,
      );
      (e.state.addMoney(t.v, `red-envelope`),
        Et(e, `money`),
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
      let [, t, i, a] = Pt(
        (r.city === `tokyo` ? Bt : zt).map((e) => [e, e[0]]),
      );
      (t && e.state.addMoney(Ot(t).v, `fortune`),
        Et(e, t ? `temple_bell` : `ui_back`),
        (s = {
          zh: n.on
            ? n.t(
                `${i.zh}：${a.zh}${t ? `（${Ot(t).label}）` : ``}`,
                `${n.jz(i.zh)}：${n.jz(a.zh)}${t ? `（${Ot(t).label}）` : ``}`,
              )
            : `${i.zh}：${a.zh}${t ? `（${Ot(t).label}）` : ``}`,
          en: `${i.en}: ${a.en}${t ? ` (${Ot(t).label})` : ``}`,
        }),
        t || (c = !1));
      break;
    }
    case `gacha`: {
      let t = Ct(e),
        i = (r.city === `tokyo` ? Se : xe).filter(
          (t) => (xt(e)[t] ?? 0) < R[t].max,
        ),
        a = i.filter((e) => !t.has(e)),
        o = a.length ? a : i,
        l = o.length ? o[Math.floor(Math.random() * o.length)] : null;
      l && jt(e, l, 1, { quiet: !0 })
        ? (Et(e, `pickup`),
          (s = {
            zh: n.on
              ? n.t(
                  `抽到「${R[l].name.zh}」！${a.length ? `圖鑑新收錄` : ``}`,
                  `「${n.jz(R[l].name.zh)}」が出た！${a.length ? `図鑑に新登録` : ``}`,
                )
              : `抽到「${R[l].name.zh}」！${a.length ? `圖鑑新收錄` : ``}`,
            en: `You got: ${R[l].name.en}!${a.length ? ` New in your book` : ``}`,
          }))
        : (Et(e, `ui_back`),
          (s = { zh: `銘謝惠顧`, en: `Better luck next time` }),
          (c = !1));
      break;
    }
  }
  return { ok: !0, text: s, luck: c };
}
