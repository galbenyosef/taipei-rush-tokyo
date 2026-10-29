// tokyo/assets/region-tokyo-A7LxHjud 96 — add
// Lines 42773-43320 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function aue(e) {
  (e.add(`k-floor`, 128, 128, (e, t, n, r) =>
    eg(e, t, n, r, `#dcd9d2`, `rgba(120,118,112,0.35)`, 2, 0.6),
  ),
    e.add(`k-wall`, 64, 64, (e, t, n, r) => {
      (W(e, 0, 0, t, n, `#f3f3f0`), $h(e, t, n, r, 30, 0.03, 0.02, 2));
    }),
    e.add(`k-ceil`, 128, 128, (e, t, n) => {
      (W(e, 0, 0, t, n, `#f2f2ef`), (e.fillStyle = `rgba(0,0,0,0.12)`));
      for (let r = 0; r <= 2; r++)
        (e.fillRect((r * t) / 2 - 1, 0, 2, n),
          e.fillRect(0, (r * n) / 2 - 1, t, 2));
      e.fillStyle = `rgba(0,0,0,0.06)`;
      for (let r = 4; r < n; r += 6)
        for (let n = 4; n < t; n += 6) e.fillRect(n, r, 1, 1);
    }),
    e.add(`k-onigiri`, 256, 64, (e, t, n, r) => {
      Qh(e, 0, 0, t, n, `#4a5860`, `#2e3a40`);
      let i = [`sake`, `tunamayo`, `ume`, `konbu`, `mentai`],
        a = {
          sake: `#e05a3a`,
          tunamayo: `#2a6ad0`,
          ume: `#c8204a`,
          konbu: `#3a8a3a`,
          mentai: `#e8508a`,
        },
        o = t / 10;
      for (let t = 0; t < 10; t++) {
        let r = i[Math.floor(t / 2) % i.length],
          s = t * o;
        ((e.fillStyle = `#f6f4ee`),
          e.beginPath(),
          e.moveTo(s + o / 2, n * 0.2),
          e.lineTo(s + o - 3, n - 6),
          e.lineTo(s + 3, n - 6),
          e.closePath(),
          e.fill(),
          W(e, s + o * 0.32, n * 0.62, o * 0.36, n * 0.32, `#1c2a1e`),
          W(e, s + o * 0.3, n * 0.36, o * 0.4, n * 0.12, a[r]),
          U(
            e,
            L(`interior.konbini.onigiri.${r}`),
            s + o / 2,
            n * 0.42,
            o * 0.4,
            n * 0.1,
            `#fff`,
          ),
          (e.strokeStyle = `rgba(255,255,255,0.7)`),
          e.beginPath(),
          e.moveTo(s + o / 2, n * 0.2),
          e.lineTo(s + o / 2, n - 6),
          e.stroke());
      }
      sg(e, t, n, r, [180, 160, 150, 160, 190]);
    }),
    e.add(`k-sandwich`, 256, 64, (e, t, n, r) => {
      Qh(e, 0, 0, t, n, `#4a5860`, `#2e3a40`);
      let i = t / 8;
      for (let t = 0; t < 8; t++) {
        let r = t * i;
        ((e.fillStyle = `#e8d8b0`),
          e.beginPath(),
          e.moveTo(r + 4, n - 6),
          e.lineTo(r + i - 4, n - 6),
          e.lineTo(r + i / 2, n * 0.25),
          e.closePath(),
          e.fill(),
          W(
            e,
            r + i * 0.25,
            n * 0.6,
            i * 0.5,
            n * 0.1,
            [`#f2c230`, `#e86a6a`, `#7ac84a`, `#f2f0e0`][t % 4],
          ),
          W(e, r + i * 0.25, n * 0.4, i * 0.5, n * 0.08, `#1a6ad0`));
      }
      sg(e, t, n, r, [298, 340, 380, 260]);
    }),
    e.add(`k-bento`, 256, 64, (e, t, n, r) => {
      Qh(e, 0, 0, t, n, `#4a5860`, `#2e3a40`);
      let i = t / 5;
      for (let t = 0; t < 5; t++) {
        let r = t * i + 2;
        (W(e, r, n * 0.3, i - 4, n * 0.64, `#1a1a1a`),
          W(e, r + 2, n * 0.33, (i - 8) * 0.55, n * 0.56, `#f6f4ee`));
        for (let a = 0; a < 4; a++)
          W(
            e,
            r + 4 + (i - 8) * 0.55 + (a % 2) * (i - 8) * 0.22,
            n * 0.34 + Math.floor(a / 2) * n * 0.28,
            (i - 8) * 0.2,
            n * 0.25,
            [`#c8702a`, `#e8c040`, `#5aa040`, `#d84a3a`][(a + t) % 4],
          );
        W(e, r + 4, n * 0.34, 8, 6, `#c8202a`);
      }
      sg(e, t, n, r, [598, 540, 650, 498]);
    }),
    e.add(`k-sweets`, 256, 64, (e, t, n, r) => {
      Qh(e, 0, 0, t, n, `#4a5860`, `#2e3a40`);
      let i = t / 9;
      for (let t = 0; t < 9; t++) {
        let r = t * i + 2,
          a = [`#f4e6c8`, `#6a3a22`, `#f0c8d8`, `#fff6e0`, `#e8b84a`][t % 5];
        (W(e, r, n * 0.45, i - 4, n * 0.48, `rgba(255,255,255,0.8)`),
          W(e, r + 2, n * 0.52, i - 8, n * 0.36, a),
          W(e, r + 2, n * 0.5, i - 8, n * 0.06, `#ffffff`));
      }
      sg(e, t, n, r, [250, 298, 320, 198]);
    }));
  let t = [
    `#e8302a`,
    `#f2c230`,
    `#2a6ad0`,
    `#f08a20`,
    `#3aa04a`,
    `#8a3ac0`,
    `#e85a9a`,
    `#1a1a1a`,
  ];
  (e.add(`k-snacks`, 256, 64, (e, n, r, i) => {
    (rg(e, n, r, i, t, { min: 14, max: 26, tall: 0.62 }),
      sg(e, n, r, i, [158, 178, 198, 138]));
  }),
    e.add(`k-cupmen`, 256, 64, (e, t, n, r) => {
      W(e, 0, 0, t, n, `#2a2a2c`);
      let i = t / 9;
      for (let t = 0; t < 9; t++) {
        let a = t * i;
        ((e.fillStyle = [
          `#e8302a`,
          `#f2c230`,
          `#2a6ad0`,
          `#f08a20`,
          `#ffffff`,
          `#1a1a1a`,
        ][Math.floor(r() * 6)]),
          e.beginPath(),
          e.moveTo(a + 3, n * 0.3),
          e.lineTo(a + i - 3, n * 0.3),
          e.lineTo(a + i - 6, n - 6),
          e.lineTo(a + 6, n - 6),
          e.closePath(),
          e.fill(),
          W(e, a + 3, n * 0.26, i - 6, n * 0.06, `#f4f0e6`),
          W(e, a + 8, n * 0.5, i - 16, n * 0.16, `rgba(255,255,255,0.75)`));
      }
      sg(e, t, n, r, [248, 228, 298, 198]);
    }),
    e.add(`k-daily`, 256, 64, (e, t, n, r) => {
      (rg(
        e,
        t,
        n,
        r,
        [
          `#f4f4f0`,
          `#9ad0f0`,
          `#f0f0f8`,
          `#3a8ad0`,
          `#e8e0d0`,
          `#c8e0c8`,
          `#f0d0e0`,
        ],
        { min: 12, max: 22, tall: 0.7 },
      ),
        sg(e, t, n, r, [330, 198, 428, 550]));
    }),
    e.add(`k-sweets-dry`, 256, 64, (e, t, n, r) => {
      (rg(
        e,
        t,
        n,
        r,
        [`#6a3a22`, `#e8302a`, `#f2c230`, `#f0c8d8`, `#ffffff`, `#3a2a6a`],
        { min: 10, max: 18, tall: 0.55 },
      ),
        sg(e, t, n, r, [128, 150, 216, 108]));
    }),
    e.add(`k-drinks-tea`, 128, 320, (e, t, n, r) =>
      ig(
        e,
        t,
        n,
        r,
        [
          [`#c8d478`, `#2a7a3a`],
          [`#d8b860`, `#6a4a20`],
          [`#e8f0f4`, `#2a6ad0`],
          [`#b8c860`, `#ffffff`],
          [`#5a3a20`, `#1a1a1a`],
          [`#d8c070`, `#c81818`],
        ],
        5,
      ),
    ),
    e.add(`k-drinks-color`, 128, 320, (e, t, n, r) =>
      ig(
        e,
        t,
        n,
        r,
        [
          [`#f0a030`, `#f08a20`],
          [`#e8f0f8`, `#2a6ad0`],
          [`#f8e070`, `#f2c230`],
          [`#c8e8f8`, `#1a4aa8`],
          [`#e85a3a`, `#ffffff`],
          [`#3a1a10`, `#c81818`],
        ],
        5,
      ),
    ),
    e.add(`k-beer`, 128, 320, (e, t, n, r) =>
      ig(
        e,
        t,
        n,
        r,
        [
          [`#e8c040`, `#d8dce0`],
          [`#e8c040`, `#c8a040`],
          [`#f0f0f0`, `#1a3a8a`],
          [`#f8e8a0`, `#c82a2a`],
          [`#e8f4f8`, `#2a8a4a`],
          [`#f8f0e0`, `#8a1a3a`],
        ],
        6,
        !0,
      ),
    ),
    e.add(`k-cooler-head`, 1024, 32, (e, t, n) => {
      Qh(e, 0, 0, t, n, `#ffffff`, `#e8eef2`);
      for (let r = 0; r < 4; r++)
        U(
          e,
          L(`interior.konbini.aisle.drink`),
          t * (0.1 + r * 0.18),
          n / 2,
          t * 0.14,
          n * 0.6,
          `#1a4aa8`,
        );
      U(
        e,
        L(`interior.konbini.aisle.osake`),
        t * 0.88,
        n / 2,
        t * 0.1,
        n * 0.62,
        `#c81818`,
      );
      for (let r = 1; r < 6; r++)
        W(e, (r * t) / 6 - 1, 3, 2, n - 6, `rgba(0,0,0,0.1)`);
    }),
    e.add(`k-mags`, 256, 96, (e, t, n, r) => {
      W(e, 0, 0, t, n, `#2a2a2c`);
      let i = t / 8;
      for (let t = 0; t < 8; t++) {
        let a = t * i + 1,
          o = [
            `#e8302a`,
            `#f2f2f0`,
            `#2a6ad0`,
            `#f2c230`,
            `#1a1a1a`,
            `#e85a9a`,
          ][Math.floor(r() * 6)];
        (W(e, a, 4, i - 2, n - 8, o),
          W(
            e,
            a + 3,
            14,
            i - 8,
            n * 0.45,
            `hsl(${Math.floor(r() * 360)},45%,60%)`,
          ),
          U(
            e,
            L(`interior.konbini.zasshi-title.${1 + (t % 4)}`),
            a + i / 2,
            9,
            i - 4,
            8,
            o === `#f2f2f0` || o === `#f2c230` ? `#c81818` : `#ffffff`,
          ));
        for (let t = 0; t < 3; t++)
          W(
            e,
            a + 3,
            n * 0.66 + t * 7,
            (i - 8) * (0.5 + r() * 0.5),
            4,
            `rgba(255,255,255,0.7)`,
          );
      }
    }),
    e.add(`k-tabako`, 256, 128, (e, t, n, r) => {
      W(e, 0, 0, t, n, `#1c1c20`);
      let i = t / 12,
        a = n / 5,
        o = 1;
      for (let t = 0; t < 5; t++)
        for (let n = 0; n < 12; n++) {
          let s = n * i,
            c = t * a;
          (W(
            e,
            s + 2,
            c + 3,
            i - 4,
            a * 0.62,
            [`#f4f4f0`, `#1a1a1a`, `#2a4aa8`, `#c8b070`, `#e8e8e8`, `#8a1a1a`][
              Math.floor(r() * 6)
            ],
          ),
            W(
              e,
              s + 2,
              c + 3 + a * 0.2,
              i - 4,
              3,
              [`#c81818`, `#e8c040`, `#2a6ad0`][Math.floor(r() * 3)],
            ),
            W(e, s + 2, c + a * 0.7, i - 4, a * 0.24, `#f6f6f2`),
            U(e, String(o++), s + i / 2, c + a * 0.82, i - 6, a * 0.2, `#111`));
        }
    }),
    e.add(`k-hotsnack`, 128, 64, (e, t, n, r) => {
      Qh(e, 0, 0, t, n, `#fff2d8`, `#e8b060`);
      for (let r = 0; r < 9; r++) {
        let i = 6 + (r % 5) * (t / 5.2),
          a = n * 0.45 + Math.floor(r / 5) * n * 0.26;
        ((e.fillStyle = [`#c87a2a`, `#d89a3a`, `#b8682a`][r % 3]),
          e.beginPath(),
          e.ellipse(i + 10, a, 11, 7, 0, 0, Math.PI * 2),
          e.fill());
      }
      (W(e, 0, 0, t, n * 0.24, `#c81818`),
        U(
          e,
          L(`interior.konbini.hotsnack`),
          t / 2,
          n * 0.12,
          t * 0.9,
          n * 0.17,
          `#fff`,
        ));
    }),
    e.add(`k-chukaman`, 128, 64, (e, t, n) => {
      Qh(e, 0, 0, t, n, `#c8b898`, `#8a7458`);
      for (let t = 0; t < 6; t++) {
        let r = 14 + (t % 3) * 38,
          i = n * 0.45 + Math.floor(t / 3) * n * 0.3;
        ((e.fillStyle = t % 3 == 2 ? `#f2d8a8` : `#fbf6ee`),
          e.beginPath(),
          e.ellipse(r + 6, i, 15, 9, 0, 0, Math.PI * 2),
          e.fill());
      }
      (W(e, 0, 0, t, n * 0.22, `#e8302a`),
        U(
          e,
          L(`interior.konbini.chukaman`),
          t / 2,
          n * 0.11,
          t * 0.9,
          n * 0.16,
          `#fff`,
        ));
    }),
    e.add(`k-oden`, 128, 64, (e, t, n) => {
      W(e, 0, 0, t, n, `#b8bcc0`);
      let r = t / 4,
        i = n / 2;
      for (let t = 0; t < 8; t++) {
        let n = (t % 4) * r,
          a = Math.floor(t / 4) * i;
        (W(e, n + 2, a + 2, r - 4, i - 4, `#c8963a`),
          (e.fillStyle = [`#f4ead0`, `#f8f4e8`, `#d8a860`, `#f0e0b0`][t % 4]),
          e.beginPath(),
          e.ellipse(n + r / 2, a + i / 2, r * 0.32, i * 0.3, 0, 0, Math.PI * 2),
          e.fill());
      }
    }),
    e.add(`k-coffee`, 64, 96, (e, t, n) => {
      (W(e, 0, 0, t, n, `#1e1e22`),
        W(e, 4, 6, t - 8, n * 0.3, `#f4f4f0`),
        U(
          e,
          L(`interior.konbini.coffee`),
          t / 2,
          n * 0.14,
          t - 12,
          n * 0.1,
          `#6a3a1a`,
        ),
        W(e, 10, n * 0.42, t - 20, n * 0.06, `#3a8ad0`),
        W(e, t * 0.3, n * 0.58, t * 0.4, n * 0.3, `#0e0e10`));
    }),
    e.add(`k-atm`, 64, 128, (e, t, n) => {
      (W(e, 0, 0, t, n, `#e8eaec`),
        W(e, 0, 0, t, n * 0.16, `#1a4aa8`),
        U(
          e,
          L(`common.facility.atm`),
          t / 2,
          n * 0.08,
          t - 8,
          n * 0.11,
          `#fff`,
        ),
        W(e, 8, n * 0.25, t - 16, n * 0.28, `#2a6ad0`),
        W(e, 10, n * 0.27, t - 20, n * 0.24, `#9ad0f0`),
        W(e, 8, n * 0.6, t - 16, n * 0.14, `#c8ccd0`));
      for (let t = 0; t < 9; t++)
        W(
          e,
          12 + (t % 3) * 14,
          n * 0.62 + Math.floor(t / 3) * 6,
          10,
          4,
          `#f4f4f4`,
        );
      W(e, 10, n * 0.8, t - 20, 4, `#1a1a1a`);
    }),
    e.add(`k-copy`, 128, 96, (e, t, n) => {
      (W(e, 0, 0, t, n, `#eceeee`),
        W(e, 0, 0, t, n * 0.2, `#3a3a40`),
        U(
          e,
          L(`interior.konbini.copy`),
          t / 2,
          n * 0.1,
          t - 10,
          n * 0.13,
          `#fff`,
        ),
        W(e, 10, n * 0.3, t * 0.45, n * 0.32, `#1a1a1a`),
        W(e, 12, n * 0.32, t * 0.45 - 4, n * 0.28, `#5ab0e8`),
        W(e, t * 0.62, n * 0.3, t * 0.3, n * 0.08, `#c8ccd0`),
        W(e, 6, n * 0.72, t - 12, 5, `#9aa0a6`));
    }),
    e.add(`k-pos`, 64, 32, (e, t, n) => {
      (W(e, 0, 0, t, n, `#0e2a4a`),
        W(e, 3, 3, t - 6, n * 0.3, `#2a8ad0`),
        W(e, 3, n * 0.45, t * 0.55, n * 0.45, `#f4f4f4`),
        W(e, t * 0.65, n * 0.45, t * 0.3, n * 0.45, `#f2c230`));
    }),
    e.add(`k-counter-front`, 256, 64, (e, t, n, r) => {
      (W(e, 0, 0, t, n, `#f4f4f2`),
        $h(e, t, n, r, 40, 0.03, 0.02, 2),
        W(e, t * 0.05, n * 0.3, t * 0.42, n * 0.44, `#ffffff`),
        W(e, t * 0.05, n * 0.3, t * 0.42, n * 0.08, `#c81818`),
        U(
          e,
          L(`interior.konbini.nenrei`),
          t * 0.26,
          n * 0.56,
          t * 0.4,
          n * 0.13,
          `#222`,
          { weight: `600` },
        ),
        W(e, t * 0.55, n * 0.3, t * 0.38, n * 0.44, `#fff8d0`),
        U(
          e,
          L(`interior.konbini.fukuro`),
          t * 0.74,
          n * 0.52,
          t * 0.34,
          n * 0.18,
          `#222`,
        ));
    }));
  for (let t of iue)
    e.add(`k-aisle-${t}`, 192, 48, (e, n, r) =>
      ag(e, n, r, L(`interior.konbini.aisle.${t}`), `#2a2a2c`),
    );
  (e.add(`k-n-tabako`, 160, 48, (e, t, n) =>
    ag(e, t, n, L(`interior.konbini.tabako`), `#c81818`),
  ),
    e.add(`k-n-toilet`, 160, 48, (e, t, n) =>
      ag(e, t, n, L(`interior.konbini.toilet`), `#2a6ad0`),
    ),
    e.add(`k-n-oden`, 128, 64, (e, t, n) =>
      ag(e, t, n, L(`trade.konbini.sign.oden`), `#c8963a`, { fg: `#6a2a0a` }),
    ),
    e.add(`k-n-shinhatsubai`, 96, 48, (e, t, n) =>
      ag(e, t, n, L(`common.promo.shinhatsubai`), `#e8302a`, { fg: `#e8302a` }),
    ),
    e.add(`k-staffdoor`, 64, 128, (e, t, n, r) => {
      (W(e, 0, 0, t, n, `#c8ccd0`),
        $h(e, t, n, r, 30, 0.04, 0.02, 2),
        W(e, t * 0.15, n * 0.25, t * 0.7, n * 0.12, `#f4f4f0`),
        U(
          e,
          L(`interior.konbini.staffonly`),
          t / 2,
          n * 0.31,
          t * 0.62,
          n * 0.07,
          `#c81818`,
        ),
        W(e, t * 0.78, n * 0.5, t * 0.08, n * 0.04, `#7a8086`));
    }),
    [
      `common.facility.moeru`,
      `common.facility.kan-bin`,
      `common.facility.petbottle`,
    ].forEach((t, n) =>
      e.add(`k-bin-${n}`, 64, 96, (e, r, i) => {
        (W(e, 0, 0, r, i, [`#e85a3a`, `#2a6ad0`, `#3aa04a`][n]),
          W(e, 6, 6, r - 12, i * 0.3, `#1a1a1a`),
          U(e, L(t), r / 2, i * 0.62, r - 6, 13, `#ffffff`));
      }),
    ),
    e.add(`k-jido`, 96, 32, (e, t, n) => {
      (e.clearRect(-4, -4, t + 8, n + 8),
        cn(e, 1, 1, t - 2, n - 2, 6),
        (e.fillStyle = `rgba(30,60,160,0.92)`),
        e.fill(),
        U(e, L(`common.door.jido`), t / 2, n / 2, t - 10, n * 0.62, `#fff`));
    }));
  for (let t of og)
    (e.add(`k-stripe-${t.id}`, 256, 32, (e, n, r) => {
      let [i, a, o] = t.colors;
      (W(e, 0, 0, n, r, `#f6f6f4`),
        W(e, 0, r * 0.18, n, r * 0.2, i),
        W(e, 0, r * 0.42, n, r * 0.16, a === `#ffffff` ? o : a),
        W(e, 0, r * 0.62, n, r * 0.2, o === `#ffffff` ? i : o));
    }),
      e.add(`k-logo-${t.id}`, 192, 64, (e, n, r) => {
        let [i, a] = t.colors;
        (W(e, 0, 0, n, r, `#ffffff`),
          W(e, 0, r - 8, n, 8, i),
          U(
            e,
            t.ja,
            n / 2,
            r * 0.45,
            n * 0.9,
            r * 0.5,
            a === `#ffffff` ? i : a,
          ));
      }));
}
