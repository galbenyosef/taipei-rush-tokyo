// tokyo__assets__region-tokyo-BcM3fReU 75 — add
// Lines 38051-38267 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function sb(e) {
  (e.add(`c-doma`, 128, 128, (e, t, n, r) =>
    Sy(e, t, n, r, `#8a8680`, `rgba(30,30,30,0.4)`, 2, 0.8),
  ),
    e.add(`c-floor`, 128, 128, (e, t, n, r) => {
      (J(e, 0, 0, t, n, `#5a5a6a`), xy(e, t, n, r, 300, 0.1, 0.04, 2));
    }),
    e.add(`c-wall`, 64, 64, (e, t, n, r) => {
      (J(e, 0, 0, t, n, `#ece6d8`), xy(e, t, n, r, 40, 0.05, 0.02, 2));
    }),
    e.add(`c-ceil`, 64, 64, (e, t, n) => J(e, 0, 0, t, n, `#f0ece4`)),
    e.add(`c-wood`, 128, 64, (e, t, n, r) => Cy(e, t, n, r, [170, 130, 86], 3)),
    e.add(`c-getabako`, 192, 192, (e, t, n) => {
      J(e, 0, 0, t, n, `#c8b48a`);
      let r = t / 6,
        i = n / 6,
        a = 1;
      for (let t = 0; t < 6; t++)
        for (let n = 0; n < 6; n++) {
          let o = n * r,
            s = t * i;
          (J(e, o + 2, s + 2, r - 4, i - 4, `#e8dcc0`),
            J(e, o + r * 0.3, s + i * 0.25, r * 0.4, i * 0.5, `#8a5a2a`),
            q(
              e,
              String(a++),
              o + r / 2,
              s + i * 0.5,
              r * 0.36,
              i * 0.28,
              `#f4ecd8`,
            ));
        }
    }),
    e.add(`c-locker`, 128, 192, (e, t, n, r) => {
      J(e, 0, 0, t, n, `#4a5a6a`);
      let i = t / 4;
      for (let t = 0; t < 4; t++) {
        by(e, t * i + 1, 2, i - 2, n - 4, `#8a98a8`, `#6a7888`);
        for (let n = 0; n < 3; n++)
          J(e, t * i + i * 0.2, 14 + n * 5, i * 0.6, 2, `#3a4450`);
        (J(e, t * i + i * 0.7, n * 0.48, 4, 12, `#c8ccd0`),
          q(
            e,
            String(200 + t + Math.floor(r() * 3) * 4),
            t * i + i / 2,
            n * 0.28,
            i * 0.6,
            10,
            `#f4f4f4`,
          ));
      }
    }));
  for (let [t, n] of [
    [`open`, 0.15],
    [`half`, 0.55],
    [`shut`, 0.95],
  ])
    e.add(`c-pod-${t}`, 128, 128, (e, t, r) => {
      (J(e, 0, 0, t, r, `#f0ece2`),
        by(e, 12, 16, t - 24, r - 24, `#fff4dc`, `#d8c8a8`),
        J(e, 20, r - 36, 34, 14, `#ffffff`),
        J(e, t - 44, 28, 26, 16, `#1a1a1e`),
        J(e, t - 40, 32, 10, 8, `#3a8ad0`),
        J(e, 12, 16, t - 24, (r - 24) * n, `#7a6a5a`));
      for (let i = 16; i < 16 + (r - 24) * n; i += 6)
        J(e, 12, i, t - 24, 1, `rgba(0,0,0,0.2)`);
      ((e.strokeStyle = `#c8c0b0`),
        (e.lineWidth = 6),
        e.strokeRect(9, 13, t - 18, r - 18));
    });
  for (let t = 0; t < 24; t++)
    e.add(`c-no-${t}`, 48, 24, (e, n, r) => {
      (J(e, 0, 0, n, r, `#1a1a1e`),
        q(
          e,
          String((t % 12 < 6 ? 100 : 200) + (t % 6) + 1 + (t >= 12 ? 6 : 0)),
          n / 2,
          r / 2,
          n - 6,
          r * 0.7,
          `#f4f0e0`,
        ));
    });
  (e.add(`c-front`, 256, 96, (e, t, n) => {
    (J(e, 0, 0, t, n, `#1c2a52`),
      q(
        e,
        B(`interior.capsule.name`),
        t / 2,
        n * 0.38,
        t - 24,
        n * 0.32,
        `#f4f0e6`,
        { serif: !0 },
      ),
      q(
        e,
        B(`interior.capsule.front`),
        t / 2,
        n * 0.76,
        t * 0.4,
        n * 0.22,
        `#e8c860`,
      ));
  }),
    e.add(`c-price`, 160, 192, (e, t, n) => {
      (J(e, 0, 0, t, n, `#fffef6`),
        J(e, 0, 0, t, 26, `#1c2a52`),
        q(e, B(`trade.hotel.sign.capsule`), t / 2, 13, t - 16, 15, `#fff`),
        q(
          e,
          ic(`interior.capsule.ryokin`, { price: ea(ab) }),
          t / 2,
          52,
          t - 14,
          15,
          `#1a1a1a`,
        ),
        q(e, B(`interior.capsule.checkin`), t / 2, 86, t - 10, 10, `#1a1a1a`, {
          weight: `600`,
        }),
        q(e, B(`interior.capsule.sauna`), t / 2, 116, t - 20, 13, `#2a5ab0`),
        q(e, B(`interior.capsule.josei`), t / 2, 150, t - 30, 15, `#c8286a`));
    }),
    e.add(`c-dosoku`, 192, 64, (e, t, n) => {
      (J(e, 0, 0, t, n, `#ffffff`),
        J(e, 0, 0, t, 6, `#c81818`),
        q(
          e,
          B(`interior.capsule.dosoku`),
          t / 2,
          n * 0.42,
          t - 30,
          n * 0.42,
          `#c81818`,
        ),
        q(
          e,
          B(`interior.capsule.kutsu`),
          t / 2,
          n * 0.8,
          t - 20,
          n * 0.2,
          `#1a1a1a`,
          { weight: `600` },
        ));
    }),
    e.add(`c-shizuka`, 192, 48, (e, t, n) =>
      Dy(e, t, n, B(`interior.capsule.shizuka`), `#2a6ad0`),
    ),
    e.add(`c-kinen`, 128, 48, (e, t, n) =>
      Dy(e, t, n, B(`common.safety.kinen`), `#c81818`, { fg: `#c81818` }),
    ),
    e.add(`c-kyukei`, 128, 48, (e, t, n) =>
      Dy(e, t, n, B(`interior.capsule.kyukei`), `#3a8a3a`),
    ),
    e.add(`c-jodan`, 96, 32, (e, t, n) =>
      Dy(
        e,
        t,
        n,
        r.on
          ? r.t(
              `${B(`interior.capsule.jodan`)} 201〜`,
              `${B(`interior.capsule.jodan`)} 201〜`,
            )
          : `${B(`interior.capsule.jodan`)} 201〜`,
        `#555`,
      ),
    ),
    e.add(`c-gedan`, 96, 32, (e, t, n) =>
      Dy(
        e,
        t,
        n,
        r.on
          ? r.t(
              `${B(`interior.capsule.gedan`)} 101〜`,
              `${B(`interior.capsule.gedan`)} 101〜`,
            )
          : `${B(`interior.capsule.gedan`)} 101〜`,
        `#555`,
      ),
    ),
    e.add(`c-manga`, 256, 64, (e, t, n, r) => {
      J(e, 0, 0, t, n, `#2a2420`);
      let i = 1;
      for (; i < t - 2;) {
        let t = 4 + r() * 2.5;
        (J(
          e,
          i,
          n * 0.1,
          t - 0.6,
          n * 0.86,
          `hsl(${Math.floor(r() * 360)},45%,${40 + Math.floor(r() * 30)}%)`,
        ),
          (i += t));
      }
    }),
    e.add(`c-vend`, 64, 128, (e, t, n, r) => {
      (J(e, 0, 0, t, n, `#e8eaec`), J(e, 4, 6, t - 8, n * 0.55, `#f8fbff`));
      for (let t = 0; t < 3; t++)
        for (let n = 0; n < 4; n++)
          J(
            e,
            7 + n * 13,
            10 + t * 22,
            10,
            18,
            [`#3a8a3a`, `#c8a040`, `#2a6ad0`, `#e8302a`][Math.floor(r() * 4)],
          );
      (J(e, 6, n * 0.66, t - 12, 6, `#1a1a1a`),
        J(e, 6, n * 0.82, t - 12, 14, `#2a2a2e`));
    }));
}
