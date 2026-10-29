// tokyo/assets/region-tokyo-A7LxHjud 99 — add
// Lines 44369-44573 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function sue(e) {
  (e.add(`r-floor`, 128, 128, (e, t, n, r) => {
    (eg(e, t, n, r, `#8a7a6a`, `rgba(40,30,20,0.35)`, 2, 0.8),
      $h(e, t, n, r, 120, 0.12, 0.03, 3));
  }),
    e.add(`r-tile`, 128, 128, (e, t, n, r) =>
      eg(e, t, n, r, `#f2f0ea`, `rgba(150,145,135,0.5)`, 4, 0.4),
    ),
    e.add(`r-wall`, 64, 64, (e, t, n, r) => {
      (W(e, 0, 0, t, n, `#e8dcc4`), $h(e, t, n, r, 60, 0.06, 0.03, 3));
    }),
    e.add(`r-ceil`, 64, 64, (e, t, n, r) => {
      (W(e, 0, 0, t, n, `#e4dcd0`), $h(e, t, n, r, 40, 0.07, 0.02, 3));
    }),
    e.add(`r-wood`, 128, 64, (e, t, n, r) => tg(e, t, n, r, [148, 98, 58], 3)),
    e.add(`r-counter`, 256, 64, (e, t, n, r) =>
      tg(e, t, n, r, [120, 76, 44], 2),
    ),
    e.add(`r-kenbaiki`, 192, 440, (e, t, n) => {
      (W(e, 0, 0, t, n, `#d8dce0`),
        W(e, 0, 0, t, 40, `#c81818`),
        U(e, L(`interior.ramen.kenbaiki`), t / 2, 20, t * 0.6, 26, `#fff`));
      let r = (t - 24) / 2,
        i = [
          ...cg.map(([e, t]) => [e, t]),
          [`interior.ramen.topping.omori`, 100],
          [`interior.ramen.topping.nori`, 100],
          [`interior.ramen.topping.chashu`, 300],
          [`interior.ramen.topping.ajitama`, 150],
        ];
      for (let t = 0; t < 16; t++) {
        let n = i[t],
          a = 12 + (t % 2) * r,
          o = 52 + Math.floor(t / 2) * 32;
        (cn(e, a + 2, o, r - 4, 26, 4),
          (e.fillStyle = n ? (t < 4 ? `#fff6c8` : `#ffffff`) : `#c8ccd0`),
          e.fill(),
          n &&
            (U(e, L(n[0]), a + r / 2, o + 9.36, r - 10, 9.36, `#111`),
            U(e, Dr(n[1]), a + r / 2, o + 19.76, r - 10, 7.8, `#c81818`)),
          W(e, a + r - 12, o + 3, 6, 6, n ? `#3ac04a` : `#8a8a8a`));
      }
      (W(e, 14, 314, t - 28, 60, `#2a2c30`),
        W(e, 26, 326, t * 0.4, 8, `#0a0a0a`),
        W(e, t * 0.62, 324, t * 0.24, 14, `#0a0a0a`),
        U(e, L(`interior.ramen.senen`), t / 2, 358, t - 36, 11, `#ffd34a`, {
          weight: `600`,
        }),
        W(e, 30, n - 30, t - 60, 10, `#1a1a1a`));
    }));
  for (let t = 0; t < 5; t++) {
    let [n, r] = cg[t];
    e.add(`r-fuda-${t}`, 48, 192, (e, t, i, a) => {
      (tg(e, t, i, a, [214, 186, 140], 1),
        (e.strokeStyle = `rgba(60,40,20,0.6)`),
        (e.lineWidth = 2),
        e.strokeRect(2, 2, t - 4, i - 4),
        Zh(e, L(n), t / 2, 10, i * 0.72, 30, `#141210`),
        Zh(
          e,
          Dr(r).replace(`¥`, ``),
          t / 2,
          i * 0.74,
          i - 8,
          16,
          `#b01010`,
          !1,
        ));
    });
  }
  (e.add(`r-ohiya`, 192, 48, (e, t, n) => {
    (W(e, 0, 0, t, n, `#ffffff`),
      W(e, 0, 0, 8, n, `#2a6ad0`),
      U(
        e,
        L(`interior.ramen.ohiya`),
        t / 2 + 4,
        n / 2,
        t - 20,
        n * 0.36,
        `#1a1a1a`,
      ));
  }),
    e.add(`r-katasa`, 256, 48, (e, t, n) => {
      (W(e, 0, 0, t, n, `#fff8dc`),
        U(
          e,
          L(`interior.ramen.katasa`),
          t / 2,
          n / 2,
          t - 16,
          n * 0.34,
          `#4a1a0a`,
          { weight: `600` },
        ));
    }),
    e.add(`r-kaedama`, 128, 128, (e, t, n) => {
      (W(e, 0, 0, t, n, `#f8d030`),
        W(e, 6, 6, t - 12, n - 12, `#c81818`),
        U(
          e,
          L(`trade.ramen.sign.ramen`),
          t / 2,
          n * 0.36,
          t - 24,
          30,
          `#ffffff`,
          { serif: !0 },
        ),
        U(
          e,
          L(`trade.ramen.sign.shoyu`),
          t / 2,
          n * 0.68,
          t - 30,
          22,
          `#ffe08a`,
          { serif: !0 },
        ));
    }),
    e.add(`r-steel`, 64, 64, (e, t, n, r) => {
      (Qh(e, 0, 0, t, n, `#d8dcdf`, `#9aa0a6`),
        $h(e, t, n, r, 40, 0.06, 0.08, 2));
    }),
    e.add(`r-bowls`, 128, 64, (e, t, n) => {
      W(e, 0, 0, t, n, `#2a2a2c`);
      for (let t = 0; t < 4; t++) {
        let r = 4 + t * 31;
        for (let t = 0; t < 5; t++)
          (W(e, r, n - 12 - t * 10, 26, 9, t % 2 ? `#e8e4dc` : `#f6f2ea`),
            W(e, r, n - 12 - t * 10, 26, 2, `#b01818`));
      }
    }),
    e.add(`r-trays`, 128, 64, (e, t, n) => {
      W(e, 0, 0, t, n, `#c8ccd0`);
      let r = [
        `#f0e8d8`,
        `#c87a4a`,
        `#3a6a2a`,
        `#f8f0d0`,
        `#1a1a1a`,
        `#d84a3a`,
      ];
      for (let i = 0; i < 6; i++) {
        let a = (i % 3) * (t / 3),
          o = Math.floor(i / 3) * (n / 2);
        (W(e, a + 3, o + 3, t / 3 - 6, n / 2 - 6, `#e8eaec`),
          W(e, a + 6, o + 6, t / 3 - 12, n / 2 - 12, r[i]));
      }
    }),
    e.add(`r-noodles`, 64, 64, (e, t, n, r) => {
      (W(e, 0, 0, t, n, `#c87a2a`),
        (e.strokeStyle = `#f2d08a`),
        (e.lineWidth = 2));
      for (let i = 0; i < 24; i++)
        (e.beginPath(),
          e.arc(
            t / 2 + (r() - 0.5) * 20,
            n / 2 + (r() - 0.5) * 20,
            6 + r() * 18,
            r() * 6,
            r() * 6 + 2,
          ),
          e.stroke());
      (W(e, t * 0.55, n * 0.2, 16, 10, `#7a3a1a`),
        (e.fillStyle = `#f8f4e8`),
        e.beginPath(),
        e.ellipse(t * 0.3, n * 0.3, 9, 7, 0, 0, Math.PI * 2),
        e.fill(),
        W(e, t * 0.15, n * 0.62, 20, 4, `#3a7a2a`));
    }),
    e.add(`r-poster`, 128, 192, (e, t, n) => {
      (Qh(e, 0, 0, t, n, `#1a1a1a`, `#3a1a10`),
        (e.fillStyle = `#c8803a`),
        e.beginPath(),
        e.ellipse(t / 2, n * 0.55, t * 0.38, t * 0.28, 0, 0, Math.PI * 2),
        e.fill(),
        (e.fillStyle = `#f2d08a`),
        e.beginPath(),
        e.ellipse(t / 2, n * 0.53, t * 0.3, t * 0.2, 0, 0, Math.PI * 2),
        e.fill(),
        Zh(
          e,
          L(`trade.ramen.sign.chukasoba`),
          t * 0.82,
          14,
          n * 0.45,
          26,
          `#f4ecd8`,
        ),
        U(e, L(`interior.ramen.name`), t / 2, n * 0.9, t - 16, 16, `#f4ecd8`, {
          serif: !0,
        }));
    }),
    e.add(`r-pendant`, 32, 32, (e, t, n) => {
      Qh(e, 0, 0, t, n, `#fff4d8`, `#ffc870`);
    }),
    e.add(`r-condiments`, 64, 32, (e, t, n) => {
      W(e, 0, 0, t, n, `#2a2a2c`);
      let r = [`#e8e4dc`, `#c82818`, `#2a2a2a`, `#f2e8c8`];
      for (let t = 0; t < 4; t++)
        (W(e, 2 + t * 15, 6, 12, n - 8, r[t]),
          W(e, 4 + t * 15, 2, 8, 6, `#d82020`));
    }));
}
