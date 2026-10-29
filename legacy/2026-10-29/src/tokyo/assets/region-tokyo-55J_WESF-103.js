// tokyo/assets/region-tokyo-55J_WESF 103 — add
// Lines 45905-46114 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function tue(e) {
  let t = ui(`カラオケまねきいぬ`),
    n = t?.colors[0] ?? `#ffffff`,
    r = t?.colors[1] ?? `#e60012`,
    i = t?.colors[2] ?? `#f39800`;
  (e.add(`ka-floor`, 128, 128, (e, t, n, r) => {
    W(e, 0, 0, t, n, `#2a2240`);
    for (let i = 0; i < 40; i++)
      ((e.fillStyle = [`#4a3a7a`, `#7a3a6a`, `#3a5a8a`, `#c8a030`][i % 4]),
        e.beginPath(),
        e.arc(r() * t, r() * n, 2 + r() * 4, 0, Math.PI * 2),
        e.fill());
    Xh(e, t, n, r, 200, 0.12, 0.05, 2);
  }),
    e.add(`ka-lobby-floor`, 128, 128, (e, t, n, r) =>
      Zh(e, t, n, r, `#3a3a40`, `rgba(0,0,0,0.4)`, 2, 0.4),
    ),
    e.add(`ka-wall`, 64, 64, (e, t, n, r) => {
      (Yh(e, 0, 0, t, n, `#3a2e52`, `#241c36`),
        Xh(e, t, n, r, 40, 0.06, 0.04, 2));
    }),
    e.add(`ka-room-wall`, 64, 64, (e, t, n, r) => {
      W(e, 0, 0, t, n, `#3a3050`);
      for (let t = 0; t < 10; t++)
        ((e.fillStyle = `rgba(200,170,255,0.18)`),
          e.beginPath(),
          e.arc(
            (t % 4) * 16 + 8,
            Math.floor(t / 4) * 22 + 10,
            5,
            0,
            Math.PI * 2,
          ),
          e.fill());
      Xh(e, t, n, r, 30, 0.05, 0.04, 2);
    }),
    e.add(`ka-ceil`, 64, 64, (e, t, n) => W(e, 0, 0, t, n, `#18161e`)),
    e.add(`ka-back`, 384, 128, (e, a, o) => {
      Yh(e, 0, 0, a, o, r, `#7a0010`);
      for (let t = 0; t < 12; t++)
        W(e, (a / 12) * t, 0, 2, o, `rgba(255,255,255,0.12)`);
      (U(
        e,
        t?.ja ?? `カラオケ`,
        a / 2,
        o * 0.45,
        a * 0.86,
        o * 0.42,
        n === `#ffffff` ? `#ffffff` : n,
      ),
        U(
          e,
          L(`trade.karaoke.sign.karaoke`),
          a / 2,
          o * 0.82,
          a * 0.4,
          o * 0.16,
          i,
        ));
    }),
    e.add(`ka-band`, 768, 48, (e, n, i) => {
      Yh(e, 0, 0, n, i, r, `#9a0010`);
      for (let r = 0; r < 3; r++)
        U(
          e,
          t?.ja ?? `カラオケ`,
          n * (0.17 + r * 0.33),
          i / 2,
          n * 0.28,
          i * 0.62,
          `#ffffff`,
        );
    }),
    e.add(`ka-price`, 192, 256, (e, t, n) => {
      (W(e, 0, 0, t, n, `#101018`),
        W(e, 0, 0, t, 34, r),
        U(e, L(`interior.karaoke.front`), t / 2, 17, t * 0.6, 20, `#fff`),
        U(
          e,
          bo(`interior.karaoke.ryokin`, { price: Dr(fg) }),
          t / 2,
          62,
          t - 16,
          15,
          `#ffd34a`,
        ),
        U(e, L(`trade.karaoke.sign.freetime`), t / 2, 100, t - 30, 18, `#fff`),
        U(e, Dr(1500), t / 2, 126, t * 0.5, 18, `#ffd34a`),
        U(e, L(`interior.karaoke.onedrink`), t / 2, 168, t - 30, 16, `#ff8ac8`),
        U(e, L(`interior.karaoke.hitokara`), t / 2, 206, t - 20, 15, `#8ae0ff`),
        U(e, L(`common.door.24h`), t / 2, 236, t - 50, 14, `#fff`));
    }),
    e.add(`ka-drinkbar`, 128, 160, (e, t, n) => {
      (W(e, 0, 0, t, n, `#e8eaec`),
        W(e, 0, 0, t, 30, `#2a6ad0`),
        U(e, L(`interior.karaoke.drinkbar`), t / 2, 15, t - 16, 17, `#fff`));
      for (let t = 0; t < 6; t++)
        (W(
          e,
          8 + (t % 3) * 38,
          40 + Math.floor(t / 3) * 48,
          32,
          40,
          [`#e8302a`, `#f2c230`, `#3a8a3a`, `#6a3a22`, `#f08a20`, `#f4f4f4`][t],
        ),
          W(
            e,
            18 + (t % 3) * 38,
            70 + Math.floor(t / 3) * 48,
            12,
            6,
            `#1a1a1a`,
          ));
      W(e, 10, n - 26, t - 20, 16, `#9aa0a6`);
    }),
    e.add(`ka-door`, 64, 128, (e, t, n, r) => {
      (W(e, 0, 0, t, n, `#2a2430`),
        Xh(e, t, n, r, 30, 0.06, 0.04, 2),
        W(e, t * 0.3, n * 0.15, t * 0.4, n * 0.45, `#0a0a10`),
        W(e, t * 0.78, n * 0.5, 6, 18, `#c8ccd0`));
    }));
  for (let t = 1; t <= 8; t++)
    e.add(`ka-no-${t}`, 64, 32, (e, n, r) => {
      (W(e, 0, 0, n, r, `#f4f0e0`),
        U(
          e,
          bo(`interior.karaoke.room`, { n: 100 + t }),
          n / 2,
          r / 2,
          n - 6,
          r * 0.6,
          `#1a1a1a`,
        ));
    });
  for (let t = 0; t < mg; t++)
    e.add(`ka-lyric-${t}`, 256, 144, (e, n, r, i) => {
      Yh(e, 0, 0, n, r, `#1a2050`, `#3a1a40`);
      for (let t = 0; t < 30; t++)
        ((e.fillStyle = `rgba(${200 + Math.floor(i() * 55)},${150 + Math.floor(i() * 100)},${100 + Math.floor(i() * 150)},0.6)`),
          e.fillRect(
            i() * n,
            r * 0.35 + i() * r * 0.3,
            2 + i() * 3,
            2 + i() * 3,
          ));
      (W(e, 0, r * 0.62, n, r * 0.38, `rgba(0,0,0,0.35)`),
        U(e, L(`interior.karaoke.song`), n * 0.3, 14, n * 0.55, 11, `#ffffff`, {
          weight: `600`,
        }));
      let a = L(`interior.karaoke.lyric.${t + 1}`);
      (U(e, a, n / 2, r * 0.74, n - 24, 20, `#ffffff`),
        e.save(),
        e.beginPath(),
        e.rect(0, r * 0.62, n * (0.25 + 0.2 * t), r * 0.25),
        e.clip(),
        U(e, a, n / 2, r * 0.74, n - 24, 20, `#4ad8ff`),
        e.restore(),
        U(
          e,
          L(`interior.karaoke.lyric.${((t + 1) % mg) + 1}`),
          n / 2,
          r * 0.9,
          n - 40,
          14,
          `#e8e8e8`,
          { weight: `500` },
        ));
    });
  (e.add(`ka-sofa`, 64, 64, (e, t, n, r) => {
    (W(e, 0, 0, t, n, `#5a1a3a`),
      Xh(e, t, n, r, 40, 0.12, 0.06, 2),
      W(e, 0, n / 2 - 1, t, 2, `rgba(0,0,0,0.3)`));
  }),
    e.add(`ka-denmoku`, 48, 64, (e, t, n) => {
      (W(e, 0, 0, t, n, `#1a1a1e`), W(e, 3, 3, t - 6, n - 12, `#2a8ad0`));
      for (let n = 0; n < 5; n++)
        W(e, 6, 8 + n * 9, t - 12, 5, `rgba(255,255,255,0.7)`);
    }),
    e.add(`ka-poster`, 128, 192, (e, i, a) => {
      (Yh(e, 0, 0, i, a, r, `#4a0010`),
        U(
          e,
          L(`trade.karaoke.sign.freetime`),
          i / 2,
          a * 0.2,
          i - 16,
          22,
          `#ffd34a`,
        ),
        U(e, Dr(1500), i / 2, a * 0.36, i - 30, 26, `#ffffff`),
        U(
          e,
          L(`interior.karaoke.hitokara`),
          i / 2,
          a * 0.62,
          i - 16,
          14,
          `#ffffff`,
        ),
        U(
          e,
          t?.ja ?? ``,
          i / 2,
          a * 0.88,
          i - 20,
          13,
          n === `#ffffff` ? `#ffffff` : n,
        ));
    }));
}
