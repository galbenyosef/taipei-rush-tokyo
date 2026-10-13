// tokyo__assets__region-tokyo-BcM3fReU 78 — add
// Lines 39080-39346 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function Gee(e) {
  (e.add(`m-floor`, 128, 128, (e, t, n, r) => {
    for (let r = 0; r < 2; r++)
      for (let i = 0; i < 2; i++)
        J(
          e,
          (r * t) / 2,
          (i * n) / 2,
          t / 2,
          n / 2,
          (r + i) % 2 ? `#f6d2de` : `#fbf6f2`,
        );
    xy(e, t, n, r, 90, 0.05, 0.05, 2);
  }),
    e.add(`m-wall`, 128, 128, (e, t, n, r) => {
      J(e, 0, 0, t, n, Sb);
      for (let r = 0; r < 8; r++)
        J(e, (r * t) / 8, 0, t / 16, n, `rgba(255,255,255,0.22)`);
      for (let i = 0; i < 10; i++)
        Eb(e, r() * t, r() * n, 6, `rgba(255,255,255,0.55)`);
    }),
    e.add(`m-wains`, 128, 64, (e, t, n) => {
      (J(e, 0, 0, t, n, `#fffaf4`),
        (e.strokeStyle = `rgba(190,160,150,0.6)`),
        (e.lineWidth = 2),
        e.strokeRect(8, 8, t / 2 - 14, n - 16),
        e.strokeRect(t / 2 + 6, 8, t / 2 - 14, n - 16),
        J(e, 0, 0, t, 4, `#d8b070`));
    }),
    e.add(`m-ceil`, 64, 64, (e, t, n, r) => {
      (J(e, 0, 0, t, n, `#fffaf6`), xy(e, t, n, r, 30, 0.04, 0.02, 3));
    }),
    e.add(`m-velvet`, 128, 64, (e, t, n, r) => {
      (by(e, 0, 0, t, n, `#f08aac`, `#d86890`),
        xy(e, t, n, r, 120, 0.06, 0.06, 2),
        (e.fillStyle = `rgba(255,255,255,0.5)`));
      for (let t = 0; t < 4; t++)
        for (let n = 0; n < 2; n++) e.fillRect(16 + t * 32, 16 + n * 32, 3, 3);
    }),
    e.add(`m-tabletop`, 64, 64, (e, t, n) => {
      (J(e, 0, 0, t, n, `#fffaf6`),
        (e.strokeStyle = Cb),
        (e.lineWidth = 3),
        e.strokeRect(4, 4, t - 8, n - 8),
        Eb(e, t / 2, n / 2 - 8, 14, `rgba(242,155,184,0.5)`));
    }),
    e.add(`m-logo`, 256, 128, (e, t, n) => {
      (J(e, 0, 0, t, n, wb),
        Wn(e, 6, 6, t - 12, n - 12, 18),
        (e.strokeStyle = Cb),
        (e.lineWidth = 5),
        e.stroke(),
        Eb(e, 34, 30, 34, Cb),
        Db(e, t - 30, 30, 14, `#f8c840`),
        q(
          e,
          B(`walkin.maid.logo`),
          t / 2 + 10,
          n * 0.42,
          t - 90,
          40,
          `#d0487a`,
          { serif: !1 },
        ),
        q(
          e,
          B(`walkin.maid.kind`),
          t / 2 + 10,
          n * 0.76,
          t - 90,
          18,
          `#7a5aa0`,
          { weight: `600` },
        ));
    }),
    e.add(`m-rules`, 128, 192, (e, t, n) => {
      (J(e, 0, 0, t, n, `#fffdf8`),
        J(e, 0, 0, t, 30, Cb),
        q(e, B(`walkin.maid.rules.title`), t / 2, 15, t - 16, 20, `#fff`),
        [
          `walkin.maid.rules.touch`,
          `walkin.maid.rules.photo`,
          `walkin.maid.rules.drink`,
          `walkin.maid.rules.charge`,
        ].forEach((n, r) => {
          (Eb(e, 12, 44 + r * 36, 9, Cb),
            q(e, B(n), t / 2 + 6, 50 + r * 36, t - 30, 11, `#333`, {
              weight: `600`,
            }));
        }),
        q(e, ea(xb), t / 2, n - 16, t - 30, 14, `#c8285a`));
    }),
    e.add(`m-menu`, 192, 128, (e, t, n) => {
      (J(e, 0, 0, t, n, `#fffaf2`),
        (e.strokeStyle = `#d8b070`),
        (e.lineWidth = 4),
        e.strokeRect(3, 3, t - 6, n - 6),
        q(e, B(`walkin.maid.menu.title`), t / 2, 18, t - 20, 18, `#c8285a`),
        bb.forEach(([n, r], i) => {
          (q(e, B(n), t * 0.42, 42 + i * 21, t * 0.66, 12, `#3a2a2a`, {
            weight: `600`,
          }),
            q(e, ea(r), t * 0.86, 42 + i * 21, t * 0.26, 12, `#c8285a`));
        }));
    }),
    e.add(`m-today`, 128, 160, (e, t, n) => {
      (J(e, 0, 0, t, n, `#2a2a2e`),
        (e.strokeStyle = `#d8b070`),
        (e.lineWidth = 5),
        e.strokeRect(2, 2, t - 4, n - 4),
        q(e, B(`walkin.maid.today`), t / 2, 20, t - 16, 14, `#ffe08a`),
        [
          `walkin.maid.cast.1`,
          `walkin.maid.cast.2`,
          `walkin.maid.cast.3`,
          `walkin.maid.cast.4`,
        ].forEach((n, r) => {
          let i = [`#ffb0c8`, `#b0e0ff`, `#fff0a0`, `#d0ffd0`][r];
          q(e, B(n), t / 2, 48 + r * 26, t - 20, 15, i, { weight: `600` });
        }),
        Eb(e, t - 20, n - 26, 10, `#ff8ab0`));
    }),
    e.add(`m-stage`, 256, 256, (e, t, n, r) => {
      by(e, 0, 0, t, n, `#b8a0e8`, `#f8b8d0`);
      for (let r = 0; r < 16; r++)
        J(e, (r * t) / 16, 0, t / 32, n, `rgba(255,255,255,0.14)`);
      for (let i = 0; i < 26; i++)
        Db(e, r() * t, r() * n * 0.8, 3 + r() * 6, `rgba(255,250,200,0.9)`);
      (Wn(e, t * 0.14, n * 0.18, t * 0.72, n * 0.3, 20),
        (e.fillStyle = `rgba(255,255,255,0.85)`),
        e.fill(),
        q(e, B(`walkin.maid.logo`), t / 2, n * 0.3, t * 0.62, 34, `#d0487a`),
        q(e, B(`walkin.maid.live`), t / 2, n * 0.41, t * 0.6, 16, `#7a5aa0`, {
          weight: `600`,
        }));
    }),
    e.add(`m-cheki`, 192, 128, (e, t, n, r) => {
      (J(e, 0, 0, t, n, `#f4ece0`),
        J(e, 0, 0, t, 22, Tb),
        q(e, B(`walkin.maid.cheki`), t / 2, 11, t - 16, 14, `#2a6a5a`));
      for (let t = 0; t < 12; t++) {
        let n = 8 + (t % 6) * 30 + (r() - 0.5) * 4,
          i = 28 + Math.floor(t / 6) * 48;
        (J(e, n, i, 24, 40, `#ffffff`),
          by(
            e,
            n + 2,
            i + 2,
            20,
            26,
            [Wee, Sb, Tb, `#ffe0a0`][t % 4],
            `#ffffff`,
          ),
          (e.fillStyle = `rgba(80,60,60,0.55)`),
          e.beginPath(),
          e.arc(n + 8, i + 18, 4, 0, Math.PI * 2),
          e.arc(n + 16, i + 17, 4, 0, Math.PI * 2),
          e.fill(),
          Eb(e, n + 18, i + 30, 5, `#e84a7a`));
      }
    }),
    e.add(`m-kitchen`, 128, 64, (e, t, n, r) => {
      by(e, 0, 0, t, n, `#e8eef0`, `#c8d0d4`);
      for (let n = 0; n < 3; n++) J(e, 0, 12 + n * 16, t, 3, `#9aa4aa`);
      for (let n = 0; n < 18; n++)
        J(
          e,
          r() * t,
          4 + Math.floor(r() * 3) * 16,
          6 + r() * 8,
          8,
          [`#f4f4f4`, `#e8c8a0`, `#d84a3a`, `#f8e070`][Math.floor(r() * 4)],
        );
    }),
    e.add(`m-aboard`, 128, 256, (e, t, n) => {
      (J(e, 0, 0, t, n, wb),
        J(e, 0, 0, t, 36, Cb),
        q(e, B(`walkin.maid.floor`), t / 2, 18, t - 20, 24, `#fff`),
        Eb(e, t / 2, 48, 26, Cb),
        q(e, B(`walkin.maid.logo`), t / 2, 102, t - 14, 18, `#d0487a`),
        q(e, B(`walkin.maid.kind`), t / 2, 124, t - 18, 11, `#7a5aa0`, {
          weight: `600`,
        }),
        q(
          e,
          B(`walkin.maid.board.welcome`),
          t / 2,
          150,
          t - 18,
          12,
          `#3a2a2a`,
          { weight: `600` },
        ),
        J(e, 10, 168, t - 20, 1, `#d8b070`),
        q(e, B(`walkin.maid.item.omurice`), t / 2, 186, t - 20, 11, `#3a2a2a`, {
          weight: `600`,
        }),
        q(e, ea(1650), t / 2, 204, t - 20, 13, `#c8285a`),
        q(e, B(`walkin.maid.hours`), t / 2, 232, t - 18, 11, `#555`, {
          weight: `600`,
        }));
    }),
    e.add(`m-film`, 128, 128, (e, t, n, r) => {
      J(e, 0, 0, t, n, `#fff0f6`);
      for (let i = 0; i < 14; i++)
        Eb(
          e,
          r() * t,
          r() * n,
          8 + r() * 8,
          `rgba(242,155,184,${0.4 + r() * 0.4})`,
        );
    }),
    e.add(`m-plush`, 128, 64, (e, t, n) => {
      J(e, 0, 0, t, n, `#f6e8e0`);
      let r = [`#f8d0dc`, `#ffffff`, `#c8b8f0`, `#fff0b0`, `#c0e8f8`];
      for (let t = 0; t < 6; t++) {
        let i = 12 + t * 20,
          a = n - 18;
        ((e.fillStyle = r[t % 5]),
          e.beginPath(),
          e.arc(i, a, 9, 0, Math.PI * 2),
          e.arc(i, a - 13, 7, 0, Math.PI * 2),
          e.arc(i - 5, a - 19, 3, 0, Math.PI * 2),
          e.arc(i + 5, a - 19, 3, 0, Math.PI * 2),
          e.fill(),
          J(e, i - 3, a - 14, 1.5, 1.5, `#222`),
          J(e, i + 2, a - 14, 1.5, 1.5, `#222`));
      }
    }),
    e.add(`m-garland`, 128, 32, (e, t, n) => {
      (J(e, 0, 0, t, n, Sb),
        (e.strokeStyle = `#d8b070`),
        (e.lineWidth = 1.5),
        e.beginPath(),
        e.moveTo(0, 6),
        e.quadraticCurveTo(t / 2, 14, t, 6),
        e.stroke());
      let r = [Cb, `#f8d040`, `#8ad0f0`, `#b890e8`];
      for (let t = 0; t < 8; t++) Eb(e, 8 + t * 16, 4, 12, r[t % 4]);
    }),
    e.add(`m-glow`, 32, 32, (e, t, n) =>
      by(e, 0, 0, t, n, `#fffaf0`, `#ffe0ec`),
    ));
}
function Ob(e, t) {
  return {
    dx: -(e / 2 - 0.8),
    doorHW: 0.55,
    lectern: { x: -0.6, z: 1.3 },
    benchR: { a: 1.9, b: 6.8 },
    benchL: { a: 2.4, b: 5.7 },
    tables: [
      { side: 1, z: 2.6 },
      { side: 1, z: 4.3 },
      { side: -1, z: 3.2 },
      { side: -1, z: 4.9 },
      { side: 1, z: 6.05 },
    ],
    tableX: e / 2 - 0.9,
    chairX: e / 2 - 1.55,
    counter: { x0: 0.7, x1: e / 2, z0: t - 2, z1: t - 1.5, h: 1 },
    stools: [1.3, 2.3],
    hatch: { x0: 1, x1: 2.3, y0: 1, y1: 1.62 },
    stage: { x0: -e / 2, x1: -0.8, z0: t - 2.1, z1: t, h: 0.2 },
  };
}
