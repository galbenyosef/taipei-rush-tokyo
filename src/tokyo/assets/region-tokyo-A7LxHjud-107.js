// tokyo/assets/region-tokyo-A7LxHjud 107 — add
// Lines 47608-47854 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function _ue(e) {
  let t = ui(`ソフトナップ`),
    n = t?.colors[0] ?? `#00479d`,
    r = t?.colors[2] ?? `#ffd400`;
  (e.add(`a-floor`, 128, 128, (e, t, n, r) =>
    eg(e, t, n, r, `#cfd2d4`, `rgba(90,90,90,0.35)`, 2, 0.5),
  ),
    e.add(`a-wall`, 64, 64, (e, t, n, r) => {
      (W(e, 0, 0, t, n, `#f2f2f0`), $h(e, t, n, r, 30, 0.03, 0.02, 2));
    }),
    e.add(`a-ceil`, 64, 64, (e, t, n) => W(e, 0, 0, t, n, `#3a3a40`)),
    e.add(`a-peg`, 128, 128, (e, t, r, i) => {
      (W(e, 0, 0, t, r, `#e8e4dc`), (e.fillStyle = `rgba(0,0,0,0.25)`));
      for (let n = 4; n < r; n += 8)
        for (let r = 4; r < t; r += 8) e.fillRect(r, n, 1.5, 1.5);
      for (let t = 0; t < 4; t++)
        for (let r = 0; r < 5; r++) {
          let a = 4 + r * 25,
            o = 6 + t * 31;
          (W(e, a, o, 20, 26, `#f8f8f8`),
            W(
              e,
              a + 2,
              o + 6,
              16,
              14,
              [
                `#1a1a1a`,
                `#e8302a`,
                `#2a6ad0`,
                `#f2f2f2`,
                `#3aa04a`,
                `#e85a9a`,
              ][Math.floor(i() * 6)],
            ),
            W(e, a + 2, o + 2, 16, 3, n));
        }
    }),
    e.add(`a-earphones`, 192, 128, (e, t, n, i) => {
      W(e, 0, 0, t, n, `#1c1c22`);
      for (let t = 0; t < 3; t++)
        for (let n = 0; n < 6; n++) {
          let r = 6 + n * 31,
            a = 6 + t * 41;
          (W(e, r, a, 26, 36, `#f4f4f0`),
            (e.strokeStyle = [`#1a1a1a`, `#c81818`, `#2a6ad0`, `#c8a040`][
              Math.floor(i() * 4)
            ]),
            (e.lineWidth = 3),
            e.beginPath(),
            e.arc(r + 13, a + 18, 9, Math.PI, 0),
            e.stroke(),
            ng(
              e,
              r,
              a + 28,
              26,
              8,
              [3980, 12800, 7980, 24800][Math.floor(i() * 4)],
            ));
        }
      W(e, 0, 0, t, 4, r);
    }),
    e.add(`a-gpu`, 256, 64, (e, t, n, r) => {
      rg(
        e,
        t,
        n,
        r,
        [`#1a1a1a`, `#c81818`, `#2a2a6a`, `#3a3a3a`, `#f2f2f0`, `#0a6a3a`],
        { min: 26, max: 40, tall: 0.86 },
      );
    }),
    e.add(`a-manga`, 256, 64, (e, t, n, r) => {
      W(e, 0, 0, t, n, `#2a2420`);
      let i = 1,
        a = 0,
        o = `#f4f0e6`,
        s = `#c81818`;
      for (; i < t - 2;) {
        (a <= 0 &&
          ((a = 3 + Math.floor(r() * 9)),
          (o =
            r() < 0.7
              ? [`#f6f2ea`, `#efe8d8`, `#f8f8f8`][Math.floor(r() * 3)]
              : `hsl(${Math.floor(r() * 360)},45%,55%)`),
          (s = [
            `#c81818`,
            `#1a4aa8`,
            `#e8a020`,
            `#1a1a1a`,
            `#3a8a3a`,
            `#d04a8a`,
          ][Math.floor(r() * 6)])),
          a--);
        let t = 3.6 + r() * 0.8;
        (W(e, i, n * 0.1, t - 0.5, n * 0.86, o),
          W(e, i, n * 0.12, t - 0.5, n * 0.12, s));
        for (let r = 0; r < 4; r++)
          W(
            e,
            i + t * 0.3,
            n * (0.32 + r * 0.1),
            t * 0.35,
            n * 0.06,
            `rgba(20,20,20,0.75)`,
          );
        (W(e, i, n * 0.86, t - 0.5, n * 0.06, s), (i += t));
      }
    }),
    e.add(`a-flat`, 128, 64, (e, t, n, r) => {
      W(e, 0, 0, t, n, `#e8e4dc`);
      for (let t = 0; t < 8; t++) {
        let n = 4 + (t % 4) * 31,
          i = 4 + Math.floor(t / 4) * 30;
        (Qh(
          e,
          n,
          i,
          28,
          27,
          `hsl(${Math.floor(r() * 360)},60%,60%)`,
          `hsl(${Math.floor(r() * 360)},50%,35%)`,
        ),
          W(e, n + 2, i + 2, 24, 5, `#ffffff`));
      }
    }),
    e.add(`a-showcase`, 192, 192, (e, t, n, r) => {
      W(e, 0, 0, t, n, `#f8f8fa`);
      let i = t / 4;
      for (let t = 0; t < 4; t++)
        for (let n = 0; n < 4; n++) {
          let a = n * i,
            o = t * i;
          ((e.strokeStyle = `#b8c0c8`),
            (e.lineWidth = 2),
            e.strokeRect(a + 2, o + 2, i - 4, i - 4));
          for (let t = 0; t < 3; t++) {
            let n = a + 8 + t * 13,
              s = o + i - 10;
            ((e.fillStyle = `hsl(${Math.floor(r() * 360)},65%,60%)`),
              e.fillRect(n, s - 22, 9, 22),
              (e.fillStyle = `#f4d8c0`),
              e.beginPath(),
              e.arc(n + 4.5, s - 26, 5, 0, Math.PI * 2),
              e.fill());
          }
          W(e, a + 4, o + 4, 16, 6, `#ffd34a`);
        }
    }),
    e.add(`a-gacha`, 96, 192, (e, t, n, r) => {
      W(e, 0, 0, t, n, `#e8e8ec`);
      for (let i = 0; i < 2; i++) {
        let a = (n / 2) * i;
        W(e, 6, a + 8, t - 12, n * 0.28, `#d8eef8`);
        for (let i = 0; i < 14; i++)
          ((e.fillStyle = [
            `#e8302a`,
            `#f2c230`,
            `#2a6ad0`,
            `#3aa04a`,
            `#e85a9a`,
          ][Math.floor(r() * 5)]),
            e.beginPath(),
            e.arc(
              14 + r() * (t - 28),
              a + 14 + r() * n * 0.24,
              6,
              0,
              Math.PI * 2,
            ),
            e.fill());
        (W(
          e,
          10,
          a + n * 0.33,
          t - 20,
          n * 0.1,
          `hsl(${Math.floor(r() * 360)},70%,55%)`,
        ),
          (e.fillStyle = `#9aa0a6`),
          e.beginPath(),
          e.arc(t / 2, a + n * 0.46, 7, 0, Math.PI * 2),
          e.fill());
      }
    }));
  for (let t of [
    `earphone`,
    `smartphone`,
    `pcparts`,
    `comic`,
    `figure`,
    `game`,
  ])
    e.add(`a-aisle-${t}`, 192, 48, (e, r, i) =>
      ag(e, r, i, L(`interior.akiba.aisle.${t}`), n, { fg: n }),
    );
  (e.add(`a-shicho`, 128, 48, (e, t, n) =>
    ag(e, t, n, L(`interior.akiba.shicho`), `#e8302a`),
  ),
    e.add(`a-showcase-sign`, 192, 48, (e, t, n) =>
      ag(e, t, n, L(`interior.akiba.showcase`), `#7a3ac0`, { fg: `#7a3ac0` }),
    ),
    e.add(`a-gacha-sign`, 128, 48, (e, t, n) =>
      ag(e, t, n, L(`interior.akiba.gacha`), `#e85a9a`, { fg: `#e85a9a` }),
    ),
    e.add(`a-taxfree`, 128, 48, (e, t, n) =>
      ag(e, t, n, L(`common.door.tax-free`), `#c81818`, { fg: `#c81818` }),
    ),
    e.add(`a-shinkan`, 128, 48, (e, t, n) =>
      ag(e, t, n, L(`interior.akiba.shinkan`), `#2a6ad0`),
    ));
  for (let [t, n] of [
    `common.promo.gekiyasu`,
    `common.promo.suryo-gentei`,
    `interior.akiba.chuko`,
  ].entries())
    e.add(`a-star-${t}`, 64, 64, (e, t, r) => {
      (e.clearRect(-4, -4, t + 8, r + 8),
        (e.fillStyle = `#ffe23a`),
        e.beginPath());
      for (let n = 0; n < 20; n++) {
        let i = (n / 20) * Math.PI * 2,
          a = n % 2 ? t * 0.36 : t * 0.5;
        e.lineTo(t / 2 + Math.cos(i) * a, r / 2 + Math.sin(i) * a);
      }
      (e.closePath(),
        e.fill(),
        U(e, L(n), t / 2, r / 2, t * 0.6, r * 0.26, `#d01818`));
    });
  (e.add(`a-logo`, 256, 64, (e, i, a) => {
    (W(e, 0, 0, i, a, n),
      W(e, 0, a - 8, i, 8, r),
      U(
        e,
        t?.ja ?? `ソフトナップ`,
        i / 2,
        a * 0.45,
        i - 30,
        a * 0.6,
        `#ffffff`,
      ));
  }),
    e.add(`a-pos`, 64, 32, (e, t, n) => {
      (W(e, 0, 0, t, n, `#0e2a4a`), W(e, 3, 3, t - 6, n * 0.4, `#2a8ad0`));
    }));
}
