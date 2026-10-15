// tokyo/assets/region-tokyo-55J_WESF 105 — add
// Lines 46825-47060 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function rue(e) {
  let t = ui(`マルパン`),
    n = t?.colors[0] ?? `#e60012`,
    r = t?.colors[1] ?? `#ffd400`;
  (e.add(`p-floor`, 128, 128, (e, t, n, r) => {
    W(e, 0, 0, t, n, `#3a2a4a`);
    for (let i = 0; i < 60; i++)
      ((e.fillStyle = [`#5a3a6a`, `#2a4a7a`, `#7a5a2a`, `#4a2a3a`][i % 4]),
        e.fillRect(r() * t, r() * n, 4 + r() * 10, 2 + r() * 4));
    Xh(e, t, n, r, 200, 0.12, 0.05, 2);
  }),
    e.add(`p-entry`, 128, 128, (e, t, n, r) =>
      Zh(e, t, n, r, `#d8d4cc`, `rgba(0,0,0,0.3)`, 2, 0.4),
    ),
    e.add(`p-wall`, 64, 64, (e, t, n, r) => {
      (Yh(e, 0, 0, t, n, `#f2ece0`, `#e0d8c8`),
        Xh(e, t, n, r, 30, 0.04, 0.02, 2));
    }),
    e.add(`p-ceil`, 64, 64, (e, t, n) => {
      (W(e, 0, 0, t, n, `#f4f0e8`),
        (e.fillStyle = `rgba(0,0,0,0.1)`),
        e.fillRect(0, n / 2 - 1, t, 2),
        e.fillRect(t / 2 - 1, 0, 2, n));
    }));
  let i = [
      `interior.pachinko.machine.1`,
      `interior.pachinko.machine.2`,
      `interior.pachinko.machine.3`,
    ],
    a = [
      [`#0a3a8a`, `#3ac0ff`],
      [`#3a0a0a`, `#ff6a2a`],
      [`#5a1a6a`, `#ff8ad8`],
    ];
  (i.forEach((t, n) =>
    e.add(`p-machine-${n}`, 96, 160, (e, r, i, o) => {
      (Yh(
        e,
        0,
        0,
        r,
        i,
        [`#c8c8d0`, `#d8b040`, `#e8e8f0`][n],
        [`#6a6a78`, `#8a5a10`, `#9a9aa8`][n],
      ),
        W(e, 8, 18, r - 16, i * 0.62, `#f4f0e8`),
        (e.fillStyle = `#9aa0a6`));
      for (let t = 0; t < 90; t++)
        e.fillRect(10 + o() * (r - 20), 20 + o() * i * 0.6, 1.2, 1.2);
      Yh(e, 18, 34, r - 36, i * 0.36, a[n][0], a[n][1]);
      for (let t = 0; t < 3; t++)
        (W(
          e,
          22 + t * ((r - 44) / 3),
          40,
          (r - 44) / 3 - 4,
          i * 0.2,
          `#ffffff`,
        ),
          U(
            e,
            String(1 + ((n * 3 + t * 4) % 7)),
            22 + t * ((r - 44) / 3) + (r - 44) / 6 - 2,
            40 + i * 0.1,
            20,
            20,
            `#c81818`,
          ));
      (U(e, L(t), r / 2, 10, r - 10, 10, `#1a1a1a`),
        W(e, 6, i * 0.82, r - 12, i * 0.1, `#2a2a30`),
        (e.fillStyle = `#c0c4c8`),
        e.beginPath(),
        e.arc(r * 0.82, i * 0.88, 7, 0, Math.PI * 2),
        e.fill());
    }),
  ),
    e.add(`p-lamp`, 96, 48, (e, t, r, i) => {
      (W(e, 0, 0, t, r, `#101014`),
        W(e, 2, 2, t - 4, r * 0.36, n),
        U(
          e,
          L(`interior.pachinko.oatari`),
          t / 2,
          r * 0.2,
          t - 10,
          r * 0.28,
          `#fff`,
        ));
      for (let t = 0; t < 3; t++)
        (W(e, 6 + t * 30, r * 0.5, 26, r * 0.4, `#1e1e24`),
          U(
            e,
            String(Math.floor(i() * 30)),
            19 + t * 30,
            r * 0.7,
            22,
            r * 0.32,
            [`#ff3a3a`, `#3aff6a`, `#ffd34a`][t],
          ));
    }),
    e.add(`p-unit`, 32, 96, (e, t, n) => {
      (W(e, 0, 0, t, n, `#2a2a30`),
        W(e, 6, 10, t - 12, 20, `#3a8ad0`),
        W(e, 8, 40, t - 16, 4, `#0a0a0a`),
        W(e, 8, 60, t - 16, 14, `#e8c040`));
    }),
    e.add(`p-tray`, 64, 32, (e, t, n) => {
      (W(e, 0, 0, t, n, `#1a1a1e`), W(e, 0, 0, t, 4, `#c8ccd0`));
    }),
    e.add(`p-stool`, 32, 32, (e, t, n) => W(e, 0, 0, t, n, `#1e1e24`)),
    e.add(`p-kinen`, 192, 64, (e, t, n) => {
      (W(e, 0, 0, t, n, `#ffffff`),
        (e.strokeStyle = `#d01818`),
        (e.lineWidth = 5),
        e.beginPath(),
        e.arc(32, n / 2, 22, 0, Math.PI * 2),
        e.stroke(),
        e.beginPath(),
        e.moveTo(16, n / 2 + 16),
        e.lineTo(48, n / 2 - 16),
        e.stroke(),
        U(
          e,
          L(`interior.pachinko.kinen`),
          t * 0.6,
          n / 2,
          t * 0.66,
          n * 0.4,
          `#d01818`,
        ));
    }),
    e.add(`p-nomeri`, 192, 128, (e, t, n) => {
      (W(e, 0, 0, t, n, `#fffef4`), W(e, 0, 0, t, 8, `#2a6ad0`));
      let r = L(`interior.pachinko.nomerikomi`),
        i = Math.ceil(r.length / 2);
      (U(e, r.slice(0, i), t / 2, n * 0.42, t - 16, 14, `#1a1a1a`, {
        weight: `600`,
      }),
        U(e, r.slice(i), t / 2, n * 0.66, t - 16, 14, `#1a1a1a`, {
          weight: `600`,
        }));
    }),
    e.add(`p-shindai`, 256, 64, (e, t, i) => {
      (Yh(e, 0, 0, t, i, n, `#8a0010`),
        U(
          e,
          L(`trade.pachinko.sign.shindai`),
          t / 2,
          i / 2,
          t - 20,
          i * 0.66,
          r,
        ));
    }),
    e.add(`p-yen4`, 192, 48, (e, t, r) =>
      ng(e, t, r, L(`interior.pachinko.yen4`), n, { fg: n }),
    ),
    e.add(`p-yen1`, 192, 48, (e, t, n) =>
      ng(e, t, n, L(`interior.pachinko.yen1`), `#2a6ad0`, { fg: `#2a6ad0` }),
    ),
    e.add(`p-keihin`, 256, 64, (e, t, n) => {
      (W(e, 0, 0, t, n, r),
        U(
          e,
          L(`interior.pachinko.keihin`),
          t / 2,
          n / 2,
          t - 20,
          n * 0.6,
          `#1a1a1a`,
        ));
    }),
    e.add(`p-prizes`, 256, 128, (e, t, n, r) => {
      Yh(e, 0, 0, t, n, `#f4f4f8`, `#d8dce4`);
      for (let i = 0; i < 4; i++) {
        let a = (i + 1) * (n / 4) - 3;
        W(e, 0, a, t, 3, `#9aa0a6`);
        let o = 3;
        for (; o < t - 8;) {
          let t = i === 0 ? 2 : Math.floor(r() * 2),
            s = t === 2 ? 14 + r() * 6 : t === 1 ? 22 + r() * 10 : 9 + r() * 6,
            c = (n / 4) * (t === 2 ? 0.75 : t === 1 ? 0.45 : 0.7),
            l = [
              `#e8302a`,
              `#f2c230`,
              `#2a6ad0`,
              `#3aa04a`,
              `#ffffff`,
              `#1a1a1a`,
              `#e85a9a`,
              `#f08a20`,
            ][Math.floor(r() * 8)];
          (t === 2
            ? ((e.fillStyle = [`#f0d8b0`, `#f8c8d8`, `#c8e0f8`, `#f4f4f0`][
                Math.floor(r() * 4)
              ]),
              e.beginPath(),
              e.ellipse(
                o + s / 2,
                a - c * 0.45,
                s / 2,
                c * 0.45,
                0,
                0,
                Math.PI * 2,
              ),
              e.fill(),
              W(e, o + s * 0.3, a - c * 0.62, 2, 2, `#1a1a1a`),
              W(e, o + s * 0.62, a - c * 0.62, 2, 2, `#1a1a1a`))
            : (W(e, o, a - c, s, c, l),
              W(e, o, a - c * 0.7, s, c * 0.18, `rgba(255,255,255,0.6)`)),
            (o += s + 2));
        }
      }
    }),
    e.add(`p-kitsuen`, 192, 48, (e, t, n) =>
      ng(e, t, n, L(`trade.pachinko.sign.kitsuen`), `#3a8a3a`),
    ),
    e.add(`p-under18`, 256, 48, (e, t, n) => {
      (W(e, 0, 0, t, n, `#ffffff`),
        U(
          e,
          L(`trade.pachinko.sign.under18`),
          t / 2,
          n / 2,
          t - 16,
          n * 0.32,
          `#c81818`,
          { weight: `600` },
        ));
    }),
    e.add(`p-logo`, 256, 64, (e, i, a) => {
      (W(e, 0, 0, i, a, n),
        U(e, t?.ja ?? `パチンコ`, i / 2, a / 2, i - 30, a * 0.7, r));
    }));
}
