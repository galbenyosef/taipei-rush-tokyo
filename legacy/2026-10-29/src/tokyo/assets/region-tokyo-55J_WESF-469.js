// tokyo/assets/region-tokyo-55J_WESF 469 — label
// Lines 169522-169689 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
async function BBe(e) {
  let t = e.panel;
  if (
    (await PBe(e, e7, `counter`, async () => {
      (t.say(null, $5.irasshai, !1), await t.beat(0.5 / e.pace));
      let n = 1 + Math.floor(e.rng.next() * (e.variant ? 3 : 2.4)),
        r = [];
      for (let t = 0; t < n; t++)
        r.push(
          e.pick(
            e.variant && e.rng.next() < 0.4
              ? Q5.filter((e) => e.age || e.icon === `🍜`)
              : Q5,
          ),
        );
      for (let n of r) {
        let r = 0.16 - Math.min(0.06, e.progress * 0.05),
          i = 0.35 + e.rng.next() * 0.4;
        if (
          (e.score(
            await t.timing({
              prompt: $5.scan(n.name),
              zone: [i, i + r],
              perfect: [i + r * 0.3, i + r * 0.7],
              speed: 0.9 * e.pace,
              secs: 6,
            }),
          ),
          e.over)
        )
          return;
      }
      let i = r.reduce((e, t) => e + t.price, 0);
      if (r.some((e) => e.warm)) {
        e.score(
          await t.pick({
            prompt: $5.heat,
            options: [
              { label: $5.heatQ },
              { label: $5.heatNo1 },
              { label: $5.heatNo2 },
            ],
            correct: 0,
            secs: 7,
          }),
        );
        let n = e.rng.next() < 0.7;
        if (
          (t.say(null, n ? $5.heatYes : $5.heatNo),
          n &&
            e.score(
              await t.timing({
                prompt: $5.micro,
                zone: [0.62, 0.8],
                perfect: [0.68, 0.74],
                speed: 0.32 * e.pace,
                fill: !0,
              }),
            ),
          e.over)
        )
          return;
      }
      if (
        r.some((e) => e.age) &&
        (e.score(
          await t.pick({
            prompt: $5.age,
            options: [
              { label: $5.ageOk },
              { label: $5.ageSkip },
              { label: $5.ageCard },
            ],
            correct: 0,
            secs: 7,
          }),
        ),
        e.over)
      )
        return;
      if (e.rng.next() < 0.3) {
        let n = new Set();
        for (; n.size < 4;) n.add(10 + Math.floor(e.rng.next() * 90));
        let r = [...n],
          i = r[Math.floor(e.rng.next() * 4)];
        if (
          (t.say(null, $5.tabaco(i)),
          e.score(
            await t.pick({
              prompt: $5.tabacoQ,
              options: r.map((e) => ({
                label: N(`${e}號`, `No. ${e}`, `${e}番`),
                icon: `🚬`,
              })),
              correct: r.indexOf(i),
              secs: 6 / e.pace + 2,
            }),
          ),
          e.over)
        )
          return;
      }
      let a = e.rng.next();
      if (a < 0.45) {
        t.say(null, $5.cashSay);
        let n = FBe(e, i);
        t.say(null, $5.cash(n, i));
        let r = X5(e, n - i);
        e.score(
          await t.pick({
            prompt: $5.changeQ(n, i),
            options: r.map((e) => ({
              label: N(Z5(e), Z5(e), Z5(e)),
              icon: `💴`,
            })),
            correct: r.indexOf(n - i),
            secs: 9 / e.pace + 2,
          }),
        );
      } else {
        let n = a < 0.8;
        (t.say(null, n ? $5.suica : $5.qr),
          e.score(
            await t.pick({
              prompt: $5.pay,
              options: [
                { label: $5.mCash, icon: `💴` },
                { label: $5.mIc, icon: `💳` },
                { label: $5.mQr, icon: `📱` },
              ],
              correct: n ? 1 : 2,
              secs: 6,
            }),
          ),
          e.over || t.say(null, $5.touch, !1));
      }
      e.over || (t.say(null, $5.thanks), e.served(), await t.beat(0.6));
    }),
    e.over)
  )
    return;
  let n = e.rng.next();
  if (n < 0.25) {
    let n = e.pick(Q5);
    e.score(
      await t.pick({
        prompt: $5.restock(n.name),
        options: IBe.map((e, t) => ({
          label: e,
          icon: [`🧃`, `🍱`, `🍮`, `🍜`][t],
        })),
        correct: LBe(n),
        secs: 7,
      }),
    );
  } else
    n < 0.4 &&
      (t.say(null, $5.fryLine, !1),
      e.score(
        await t.timing({
          prompt: $5.fry,
          zone: [0.6, 0.82],
          perfect: [0.68, 0.76],
          speed: 0.28 * e.pace,
          fill: !0,
        }),
      ));
}
