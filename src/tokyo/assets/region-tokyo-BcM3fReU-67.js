// tokyo/assets/region-tokyo-BcM3fReU 67 — add
// Lines 34868-35034 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function Uy(e) {
  (e.add(`i-floor`, 128, 128, (e, t, n, r) => {
    (J(e, 0, 0, t, n, `#5a5650`),
      xy(e, t, n, r, 260, 0.16, 0.05, 3),
      (e.strokeStyle = `rgba(0,0,0,0.25)`),
      e.beginPath(),
      e.moveTo(0, n * 0.5),
      e.lineTo(t, n * 0.52),
      e.stroke());
  }),
    e.add(`i-brick`, 128, 128, (e, t, n, r) => {
      J(e, 0, 0, t, n, `#4a3a30`);
      let i = n / 16;
      for (let n = 0; n < 16; n++) {
        let a = n % 2 == 0,
          o = a ? t / 16 : t / 8;
        for (let s = a ? 0 : -o / 2; s < t; s += o) {
          let t = 0.75 + r() * 0.3;
          ((e.fillStyle = `rgb(${Math.round(132 * t)},${Math.round(76 * t)},${Math.round(56 * t)})`),
            e.fillRect(s + 1, n * i + 1, o - 2, i - 2));
        }
      }
      (by(e, 0, 0, t, n, `rgba(20,14,10,0.45)`, `rgba(20,14,10,0.05)`),
        xy(e, t, n, r, 160, 0.12, 0.03, 3));
    }),
    e.add(`i-plaster`, 64, 64, (e, t, n, r) => {
      (J(e, 0, 0, t, n, `#d8cbb0`),
        xy(e, t, n, r, 80, 0.08, 0.03, 3),
        by(e, 0, 0, t, n, `rgba(60,40,20,0.18)`, `rgba(60,40,20,0)`));
    }),
    e.add(`i-wood`, 128, 64, (e, t, n, r) => Cy(e, t, n, r, [96, 62, 38], 3)),
    e.add(`i-counter`, 256, 64, (e, t, n, r) =>
      Cy(e, t, n, r, [150, 104, 62], 2),
    ),
    e.add(`i-ply`, 64, 64, (e, t, n, r) => Cy(e, t, n, r, [196, 160, 112], 2)));
  for (let [t, n] of [
    [`y`, `#e8c020`],
    [`r`, `#c82818`],
    [`b`, `#2a5ab0`],
  ])
    e.add(`i-crate-${t}`, 64, 48, (e, t, r) => {
      J(e, 0, 0, t, r, n);
      for (let t = 0; t < 4; t++)
        J(e, 6 + t * 14, 8, 8, r - 16, `rgba(0,0,0,0.35)`);
      J(e, 0, 0, t, 5, `rgba(255,255,255,0.25)`);
    });
  (By.forEach(([t, n], r) =>
    e.add(`i-tan-${r}`, 40, 192, (e, i, a, o) => {
      (J(e, 0, 0, i, a, r < 4 ? `#f6e8a8` : `#f4efe2`),
        xy(e, i, a, o, 30, 0.06, 0.02, 2),
        yy(e, B(t), i / 2, 8, a * 0.74, 28, `#141210`),
        q(e, ea(n), i / 2, a * 0.88, i - 4, 11, `#b01010`));
    }),
  ),
    e.add(`i-osusume`, 192, 128, (e, t, n, r) => {
      (J(e, 0, 0, t, n, `#1e2a22`),
        xy(e, t, n, r, 120, 0.05, 0.08, 2),
        (e.strokeStyle = `#6a4a2a`),
        (e.lineWidth = 6),
        e.strokeRect(3, 3, t - 6, n - 6),
        q(e, B(`interior.izakaya.osusume`), t / 2, 22, t - 30, 18, `#f4f0e0`),
        [
          `trade.izakaya.item.sashimi`,
          `interior.izakaya.item.nikomi`,
          `trade.izakaya.item.karaage`,
        ].forEach((n, r) =>
          q(e, B(n), t * 0.42, 52 + r * 24, t * 0.6, 15, `#f4f0e0`, {
            weight: `600`,
          }),
        ),
        [1280, 500, 580].forEach((n, r) =>
          q(e, ea(n), t * 0.84, 52 + r * 24, t * 0.24, 13, `#ffd34a`),
        ));
    }),
    e.add(`i-yureru`, 128, 64, (e, t, n) => {
      (J(e, 0, 0, t, n, `#fffef6`),
        q(e, B(`interior.izakaya.yureru`), t / 2, n / 2, t - 12, 13, `#222`, {
          weight: `600`,
        }),
        J(e, 0, 0, t, 3, `#c81818`));
    }),
    e.add(`i-since`, 128, 48, (e, t, n, r) => {
      (Cy(e, t, n, r, [70, 46, 28], 1),
        q(e, B(`interior.izakaya.since`), t / 2, n / 2, t - 16, 16, `#e8d8a8`, {
          serif: !0,
        }));
    }),
    e.add(`i-sign`, 256, 64, (e, t, n, r) => {
      (Cy(e, t, n, r, [62, 40, 24], 2),
        q(e, B(`interior.izakaya.name`), t / 2, n / 2, t - 24, 34, `#f4ecd8`, {
          serif: !0,
        }));
    }),
    e.add(`i-coals`, 64, 32, (e, t, n, r) => {
      J(e, 0, 0, t, n, `#2a0a04`);
      for (let i = 0; i < 40; i++)
        ((e.fillStyle = `rgb(${200 + Math.floor(r() * 55)},${60 + Math.floor(r() * 80)},10)`),
          e.fillRect(r() * t, r() * n, 3 + r() * 4, 2 + r() * 3));
    }),
    e.add(`i-skewers`, 128, 32, (e, t, n, r) => {
      J(e, 0, 0, t, n, `#3a2a1a`);
      for (let t = 0; t < 9; t++) {
        let i = 6 + t * 13;
        J(e, i + 4, 0, 2, n, `#d8c8a0`);
        for (let t = 0; t < 3; t++)
          J(
            e,
            i,
            4 + t * 8,
            10,
            7,
            [`#c88a4a`, `#a85a2a`, `#e8b878`][Math.floor(r() * 3)],
          );
      }
    }),
    e.add(`i-tv`, 96, 64, (e, t, n) => {
      (by(e, 0, 0, t, n, `#3a8a3a`, `#2a6a2a`),
        J(e, t * 0.45, n * 0.3, 3, 3, `#ffffff`),
        J(e, 0, n - 14, t, 14, `#101418`),
        q(e, `3 - 2`, t * 0.3, n - 7, 30, 10, `#ffd34a`),
        q(e, `7回裏`, t * 0.72, n - 7, 34, 9, `#ffffff`));
    }),
    e.add(`i-poster`, 96, 160, (e, t, n) => {
      (by(e, 0, 0, t, n, `#f6d88a`, `#e8a040`),
        (e.fillStyle = `#f4f0e0`),
        e.fillRect(t * 0.3, n * 0.25, t * 0.4, n * 0.5),
        (e.fillStyle = `#e8b020`),
        e.fillRect(t * 0.32, n * 0.38, t * 0.36, n * 0.35),
        q(
          e,
          B(`common.promo.nama-beer`),
          t / 2,
          n * 0.12,
          t - 10,
          18,
          `#8a1a10`,
          { serif: !0 },
        ),
        q(e, ea(550), t / 2, n * 0.88, t - 20, 18, `#8a1a10`));
    }),
    e.add(`i-lantern`, 64, 64, (e, t, n) => {
      (by(e, 0, 0, t, n, `#ff5a3a`, `#c81818`),
        yy(
          e,
          B(`trade.yakitori.sign.yakitori`),
          t / 2,
          6,
          n - 6,
          22,
          `#141210`,
        ));
    }),
    e.add(`i-beer`, 32, 64, (e, t, n) => {
      (by(e, 0, 0, t, n, `#f8f8f0`, `#f0f0e8`),
        J(e, 0, n * 0.2, t, n * 0.8, `#e8b020`));
    }),
    e.add(`i-shelf-bottles`, 128, 64, (e, t, n, r) => {
      J(e, 0, 0, t, n, `#2a1e16`);
      for (let t = 0; t < 10; t++) {
        let i = 4 + t * 12,
          a = [`#1a3a1a`, `#3a2a1a`, `#e8e4d8`, `#1a1a3a`][Math.floor(r() * 4)];
        (J(e, i, n * 0.25, 9, n * 0.72, a),
          J(e, i + 3, n * 0.08, 3, n * 0.2, a),
          J(e, i + 1, n * 0.5, 7, n * 0.2, `#f4ecd8`));
      }
    }));
}
