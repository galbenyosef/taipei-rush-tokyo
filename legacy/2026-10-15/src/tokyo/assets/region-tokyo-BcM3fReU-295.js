// tokyo/assets/region-tokyo-BcM3fReU 295 — label
// Lines 117092-117259 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
async function Lne(e) {
  let t = e.panel;
  if (
    (await jne(e, p7, `counter`, async () => {
      (t.say(null, f7.irasshai, !1), await t.beat(0.5 / e.pace));
      let n = 1 + Math.floor(e.rng.next() * (e.variant ? 3 : 2.4)),
        r = [];
      for (let t = 0; t < n; t++)
        r.push(
          e.pick(
            e.variant && e.rng.next() < 0.4
              ? d7.filter((e) => e.age || e.icon === `🍜`)
              : d7,
          ),
        );
      for (let n of r) {
        let r = 0.16 - Math.min(0.06, e.progress * 0.05),
          i = 0.35 + e.rng.next() * 0.4;
        if (
          (e.score(
            await t.timing({
              prompt: f7.scan(n.name),
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
            prompt: f7.heat,
            options: [
              { label: f7.heatQ },
              { label: f7.heatNo1 },
              { label: f7.heatNo2 },
            ],
            correct: 0,
            secs: 7,
          }),
        );
        let n = e.rng.next() < 0.7;
        if (
          (t.say(null, n ? f7.heatYes : f7.heatNo),
          n &&
            e.score(
              await t.timing({
                prompt: f7.micro,
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
            prompt: f7.age,
            options: [
              { label: f7.ageOk },
              { label: f7.ageSkip },
              { label: f7.ageCard },
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
          (t.say(null, f7.tabaco(i)),
          e.score(
            await t.pick({
              prompt: f7.tabacoQ,
              options: r.map((e) => ({
                label: F(`${e}號`, `No. ${e}`, `${e}番`),
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
        t.say(null, f7.cashSay);
        let n = Mne(e, i);
        t.say(null, f7.cash(n, i));
        let r = l7(e, n - i);
        e.score(
          await t.pick({
            prompt: f7.changeQ(n, i),
            options: r.map((e) => ({
              label: F(u7(e), u7(e), u7(e)),
              icon: `💴`,
            })),
            correct: r.indexOf(n - i),
            secs: 9 / e.pace + 2,
          }),
        );
      } else {
        let n = a < 0.8;
        (t.say(null, n ? f7.suica : f7.qr),
          e.score(
            await t.pick({
              prompt: f7.pay,
              options: [
                { label: f7.mCash, icon: `💴` },
                { label: f7.mIc, icon: `💳` },
                { label: f7.mQr, icon: `📱` },
              ],
              correct: n ? 1 : 2,
              secs: 6,
            }),
          ),
          e.over || t.say(null, f7.touch, !1));
      }
      e.over || (t.say(null, f7.thanks), e.served(), await t.beat(0.6));
    }),
    e.over)
  )
    return;
  let n = e.rng.next();
  if (n < 0.25) {
    let n = e.pick(d7);
    e.score(
      await t.pick({
        prompt: f7.restock(n.name),
        options: Nne.map((e, t) => ({
          label: e,
          icon: [`🧃`, `🍱`, `🍮`, `🍜`][t],
        })),
        correct: Pne(n),
        secs: 7,
      }),
    );
  } else
    n < 0.4 &&
      (t.say(null, f7.fryLine, !1),
      e.score(
        await t.timing({
          prompt: f7.fry,
          zone: [0.6, 0.82],
          perfect: [0.68, 0.76],
          speed: 0.28 * e.pace,
          fill: !0,
        }),
      ));
}
