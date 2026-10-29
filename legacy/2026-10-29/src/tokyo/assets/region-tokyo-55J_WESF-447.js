// tokyo/assets/region-tokyo-55J_WESF 447 — stock
// Lines 158553-158898 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
r.add({
  ネオンリンク的辦公室在卡拉OK大樓八樓: `ネオンリンクの事務所はカラオケビルの8階`,
});
var WRe = (e) => ({ x: Math.sin(e), z: -Math.cos(e) }),
  T6 = () =>
    I4(`tokyo:site:akiba-denshi-center:aisle`, -80, -644, -Math.PI / 2),
  E6 = [
    {
      id: `gps`,
      label: `GPSモジュール（UART・3.3V）`,
      gloss: N(`GPS 模組（3.3V）`, `GPS module (3.3 V)`),
      price: 2800,
    },
    {
      id: `mcu`,
      label: `マイコンボード ESP32`,
      gloss: N(`ESP32 微控制器板`, `ESP32 microcontroller board`),
      price: 1600,
    },
    {
      id: `lipo`,
      label: `リポ電池 3.7V 1000mAh`,
      gloss: N(`鋰聚合物電池 3.7V`, `LiPo battery 3.7 V`),
      price: 1200,
    },
    {
      id: `sma`,
      label: `SMAコネクタ（メス）`,
      gloss: N(`SMA 接頭（母）`, `SMA connector (female)`),
      price: 350,
    },
    {
      id: `ldo`,
      label: `3端子レギュレータ 3.3V`,
      gloss: N(`3.3V 穩壓器`, `3.3 V regulator`),
      price: 80,
    },
  ],
  D6 = {
    gps: [`GPSモジュール（UART・5V）`, `GPSアンテナ（オス）`],
    mcu: [`マイコンボード Arduino Uno`, `マイコンボード ESP8266`],
    lipo: [`リポ電池 7.4V 1000mAh`, `ニッケル水素電池 1.2V`],
    sma: [`SMAコネクタ（オス）`, `BNCコネクタ（メス）`],
    ldo: [`3端子レギュレータ 5V`, `ツェナーダイオード 3.3V`],
  },
  GRe = [
    `小松電機`,
    `山辺無線`,
    `ミツワ電子`,
    `鈴乃パーツ`,
    `大成無線`,
    `丸十電子`,
    `トモエ電機`,
    `昭栄電材`,
  ],
  KRe = _3(`tokyo:s2_parts`, {
    description: N(
      `小晴的手機訊號還在秋葉原出現。ミコ能做追蹤器——只要在攤位打烊前湊齊零件。`,
      `Hsiao-Ching's phone still pings around Akihabara. Miko can build a tracker — if you find the parts before the stalls close.`,
    ),
    glyph: `電`,
    giver: { outfit: `v:t3-miko`, dx: 1.4, dz: 0.6, anim: `phone` },
    giverName: Q.miko,
    noPolice: !0,
    start: () => {
      let e = T6();
      return { x: e.x, z: e.z, heading: e.heading + Math.PI };
    },
    async run(e) {
      let t = e.ctx,
        n = T6(),
        i = I4(`tokyo:site:akiba-denshi-center:deep`, n.x - 14, n.z, n.heading),
        a = await J4(e);
      await Y4(e, { window: [10, 18.5], at: n });
      let o = Z4(t),
        s = WRe(n.heading + Math.PI),
        c = n3(
          e,
          Q.miko,
          j4.miko,
          n.x + s.x * 1.6 + 1.2,
          n.z + s.z * 1.6,
          n.heading,
        );
      (c.faceTo(e.px, e.pz),
        a.from < 1 &&
          (await d3(
            e,
            async (e) => {
              (await e.call(
                Q.gen,
                N(
                  `（電話）到了嗎？那個女孩叫ミコ，小晴常去她的店。……我在外面等。`,
                  `(phone) There yet? The girl's called Miko — Hsiao-Ching was a regular at her café. …I'll wait outside.`,
                  `（電話）着いたか？その子はミコ。小晴ちゃんはあの子の店の常連だった。……俺は外で待ってる。`,
                ),
              ),
                await e.say(
                  Q.miko,
                  N(
                    `你就是小晴的……！她每個禮拜都來店裡，說她表親很宅。`,
                    `You're Hsiao-Ching's…! She came to the café every week. Said her cousin was a total train nerd.`,
                    `あなたが小晴ちゃんの……！毎週お店に来てくれてたよ。いとこが電車オタクだって言ってた。`,
                  ),
                  c,
                ),
                await e.say(
                  Q.miko,
                  N(
                    `她的手機還開著，只是被關了定位。我可以做一個追蹤器去抓它的訊號——零件清單給你。`,
                    `Her phone's still on, just with location off. I can build a tracker to catch its signal — here's the parts list.`,
                    `携帯はまだ生きてる。位置情報を切られてるだけ。電波を拾う追跡機なら作れるよ——はい、パーツのリスト。`,
                  ),
                  c,
                ),
                await e.say(
                  Q.miko,
                  N(
                    `攤位七點就收了，規格要看清楚喔。3.3V 跟 5V 差一個字，燒掉就沒了。`,
                    `The stalls close at seven, and read the specs carefully. 3.3 V and 5 V are one character apart — get it wrong and it's toast.`,
                    `お店は七時で閉まるから。型番はよく見てね。3.3Vと5V、一文字違いで燃えちゃうから。`,
                  ),
                  c,
                ));
            },
            { thin: !1 },
          ),
          a.mark(1, { x: n.x, z: n.z, heading: n.heading })));
      let l = n.x,
        u = n.z,
        d = i.x - n.x,
        f = i.z - n.z,
        p = Math.hypot(d, f) || 14,
        m = d / p,
        h = f / p,
        g = -h,
        _ = m,
        v = [4.5, 9.3, 13.9, 18.5],
        y = GRe.map((e, t) => {
          let n = v[Math.floor(t / 2)],
            r = t % 2 ? 1.6 : -1.6;
          return {
            name: e,
            x: l + m * n + g * r,
            z: u + h * n + _ * r,
            stock: [],
            has: null,
          };
        }),
        b = [5, 2, 7, 0, 4];
      E6.forEach((e, t) => {
        let n = y[b[t]];
        ((n.has = e), (n.stock = [e.label, ...D6[e.id]]));
      });
      for (let e of y) e.has || (e.stock = [D6.gps[0], D6.mcu[1], D6.sma[0]]);
      y.forEach((e, t) => {
        for (let n = e.stock.length - 1; n > 0; n--) {
          let r = (t * 7 + n * 3) % (n + 1);
          [e.stock[n], e.stock[r]] = [e.stock[r], e.stock[n]];
        }
      });
      let x = new Set(),
        S = 0;
      (e.objective(
        N(
          `在攤位打烊前找齊清單上的 5 個零件（到攤位前看抽屜）`,
          `Find the 5 parts on the list before the stalls close (look through the stalls’ drawers)`,
        ),
      ),
        e.progress(N(`零件`, `Parts`), 0));
      let C = !1;
      e.setTimer(240, N(`打烊`, `Closing`), () => (C = !0));
      let w = () => {
          let t = null,
            n = 1.7;
          for (let r of y) {
            let i = e.dist(r.x, r.z);
            i < n && ((t = r), (n = i));
          }
          return t;
        },
        T = { kind: `pressE`, x: y[b[0]].x, z: y[b[0]].z, onFoot: !0 };
      for (; x.size < E6.length;) {
        if (C) {
          e.fail(N(`攤位打烊了`, `The stalls have closed`));
          return;
        }
        let n = y.find((e) => e.has && !x.has(e.has.id));
        (n && ((T.x = n.x), (T.z = n.z)), (e.waitFor = T));
        let i = null;
        await e.until(() =>
          C
            ? !0
            : ((i = w()),
              i
                ? e.hud.prompt(
                    N(
                      r.on
                        ? r.t(
                            `按 {interact} 看「${i.name}」的抽屜`,
                            `{interact} で「${i.name}」の引き出しを見る`,
                          )
                        : `按 {interact} 看「${i.name}」的抽屜`,
                      `Press {interact}: look through ${i.name}'s drawers`,
                    ),
                  ) && t.input.pressed(`interact`)
                : !1),
        );
        let a = i;
        if (!a || C) continue;
        e.waitFor = null;
        let s = a.stock.map((e) => {
          let t = E6.find((t) => t.label === e);
          return {
            text: { zh: e, en: e, ja: e },
            score: t && !x.has(t.id) ? 2 : -1,
          };
        });
        s.push({ text: N(`這攤沒有`, `Not here`, `ここにはない`), score: 0 });
        let c = E6.filter((e) => !x.has(e.id)).map((e) =>
            r.on ? r.t(`・${e.label}`, `・${e.label}`) : `・${e.label}`,
          ).join(`
`),
          l = await m3(e, {
            prompt: {
              zh: `ミコ的清單：\n${c}`,
              en: `Miko's list:\n${c}`,
              ja: `ミコのリスト：\n${c}`,
            },
            options: s,
            secs: 25,
            shuffle: !1,
          });
        if (l.index < 0 || l.index >= a.stock.length) continue;
        let u = a.stock[l.index],
          d = E6.find((e) => e.label === u && !x.has(e.id));
        d
          ? (x.add(d.id),
            t.money?.canAfford?.(d.price) && t.money.spend(d.price, `JPY`),
            $4(
              e,
              Q.passer,
              N(
                `（老闆）${d.price.toLocaleString(`en-US`)} 日圓，謝謝。`,
                `(stall keeper) ¥${d.price.toLocaleString(`en-US`)}, thank you.`,
                `（店主）${d.price.toLocaleString(`en-US`)}円ね、まいど。`,
              ),
              2.2,
            ),
            e.progress(N(`零件`, `Parts`), x.size / E6.length))
          : (S++,
            e.addTime?.(-15),
            $4(
              e,
              o,
              N(
                `……不對，這個規格不一樣。`,
                `…No, that spec is wrong.`,
                `……違う、型番が違う。`,
              ),
              2,
            ));
      }
      (e.clearTimer(),
        e.progress(null),
        a.mark(2, { x: n.x, z: n.z, heading: n.heading }),
        await e.goto(
          { x: c.x, z: c.z },
          {
            objective: N(`把零件拿給ミコ`, `Bring the parts to Miko`),
            label: Q.miko.name,
            radius: 2.4,
            onFoot: !0,
            color: N4,
          },
        ),
        c.faceTo(e.px, e.pz),
        await d3(e, async (e) => {
          (await e.say(
            Q.miko,
            N(
              `全對！你比小晴說的還會看規格耶。`,
              `All correct! You read specs better than Hsiao-Ching said.`,
              `全部正解！小晴ちゃんが言ってたより型番読めるじゃん。`,
            ),
            c,
          ),
            (c.anim = `phone`),
            await e.wait(1.2),
            await e.say(
              Q.miko,
              N(
                `……好了，有反應了。訊號在秋葉原附近移動——是一個人帶著她的手機。`,
                `…Done. It's picking her up. The signal moves around Akihabara — someone's carrying her phone.`,
                `……よし、反応あり。秋葉原のあたりを動いてる——誰かが彼女の携帯を持ち歩いてる。`,
              ),
              c,
            ),
            await e.say(
              Q.miko,
              N(
                `下禮拜天中午，步行者天國。那個人一定會出現。我開直播幫你盯——我的觀眾眼睛可多了。`,
                `Next Sunday afternoon, the pedestrian paradise. They'll show up for sure. I'll stream and watch with you — my viewers have a lot of eyes.`,
                `来週の日曜、歩行者天国。そいつは絶対来る。私が配信して一緒に見張るよ——うちの視聴者、目がいっぱいあるから。`,
              ),
              c,
            ));
        }),
        e.pass({
          bonus: Math.max(0, 3 - S) * 1e3,
          note: N(`追蹤器完成`, `The tracker works`),
        }));
    },
  }),
  O6 = () => I4(`tokyo:akihabara:hokoten`, -145, -691),
  k6 = { x: -205.6, z: -923.8 },
  A6 = {
    name: N(`跑腿的少年`, `The runner`, `運び屋の少年`),
    voice: `ja`,
    pitch: 1.14,
  },
  j6 = [
    { bag: !0, light: !0, brown: !0, black: !1 },
    { bag: !0, light: !0, brown: !1, black: !0 },
    { bag: !0, light: !1, brown: !0, black: !1 },
    { bag: !1, light: !0, brown: !0, black: !1 },
    { bag: !0, light: !1, brown: !1, black: !0 },
    { bag: !1, light: !0, brown: !1, black: !1 },
  ],
  M6 = [0, 0, 2, 2, 1, 1],
  qRe = [`fade`, `twoblock`, `bowl`, `sidepart`, `undercut`, `buzz`],
  N6 = (e) => () => {
    let t = j6[e];
    return jt(`hipster`, `t3-akiba-look${e}`, {
      hair: { style: qRe[e], color: t.brown ? 8013346 : 1315344 },
      top: { style: `tee`, color: 15658730 },
      outer: {
        style: `bomber`,
        color: t.black ? 1184276 : 2042442,
        color2: 1317940,
      },
      bottom: { style: `jeans`, color: t.light ? 8823496 : 1710622 },
      shoes: { style: `sneaker`, color: 2763310, color2: 1842208 },
      acc: Ot({ kind: `backpack`, color: 1579034 }),
    });
  };
