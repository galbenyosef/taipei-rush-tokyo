// tokyo/assets/region-tokyo-55J_WESF 122 — add
// Lines 53527-53816 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function zue(e) {
  (e.add(`s-doma`, 128, 128, (e, t, n, r) => {
    W(e, 0, 0, t, n, `#8a8478`);
    for (let i = 0; i < 900; i++) {
      let i = 90 + Math.floor(r() * 90);
      ((e.fillStyle = `rgb(${i},${i - 6},${i - 14})`),
        e.beginPath(),
        e.arc(r() * t, r() * n, 1 + r() * 2.2, 0, Math.PI * 2),
        e.fill());
    }
  }),
    e.add(`s-boards`, 128, 128, (e, t, n, r) =>
      Qh(e, t, n, r, [168, 120, 72], 6),
    ),
    e.add(`s-plaster`, 64, 64, (e, t, n, r) => {
      (W(e, 0, 0, t, n, `#ece4d2`), Xh(e, t, n, r, 50, 0.05, 0.03, 3));
    }),
    e.add(`s-wains`, 128, 64, (e, t, n, r) => {
      (Qh(e, t, n, r, [128, 84, 48], 1),
        (e.strokeStyle = `rgba(0,0,0,0.35)`),
        (e.lineWidth = 2));
      for (let r = 1; r < 4; r++)
        (e.beginPath(),
          e.moveTo((r * t) / 4, 0),
          e.lineTo((r * t) / 4, n),
          e.stroke());
    }),
    e.add(`s-ceil`, 128, 128, (e, t, n, r) => {
      W(e, 0, 0, t, n, `#5a3a20`);
      for (let r = 0; r < 2; r++)
        for (let i = 0; i < 2; i++)
          Yh(
            e,
            6 + (r * t) / 2,
            6 + (i * n) / 2,
            t / 2 - 12,
            n / 2 - 12,
            `#d8c4a0`,
            `#c8b088`,
          );
      Xh(e, t, n, r, 60, 0.06, 0.03, 3);
    }),
    e.add(`s-lockers`, 256, 256, (e, t, n, r) => {
      Qh(e, t, n, r, [150, 104, 60], 2);
      let i = t / 4,
        a = n / 6;
      for (let t = 0; t < 4; t++)
        for (let n = 0; n < 6; n++) {
          let o = t * i,
            s = n * a;
          ((e.strokeStyle = `rgba(40,20,8,0.75)`),
            (e.lineWidth = 3),
            e.strokeRect(o + 3, s + 3, i - 6, a - 6));
          let c = 1 + n * 4 + t + (r(), 0);
          U(
            e,
            String(c),
            o + i * 0.3,
            s + a * 0.5,
            i * 0.35,
            a * 0.42,
            `#2a1408`,
            { serif: !0 },
          );
          let l = r() < 0.35;
          (W(
            e,
            o + i * 0.58,
            s + a * 0.2,
            i * 0.22,
            a * 0.6,
            l ? `#2a1408` : `#e8d0a0`,
          ),
            l ||
              W(e, o + i * 0.63, s + a * 0.32, i * 0.12, a * 0.08, `#2a1408`));
        }
    }),
    e.add(`s-shoes`, 128, 32, (e, t, n) => {
      (W(e, 0, 0, t, n, `#ffffff`),
        W(e, 0, 0, t, 3, `#1a3a7a`),
        U(e, L(`walkin.sento.shoes`), t / 2, n * 0.55, t - 10, 14, `#1a1a1a`));
    }),
    e.add(`s-price`, 128, 192, (e, t, n, r) => {
      (Qh(e, t, n, r, [216, 190, 140], 1),
        (e.strokeStyle = `#3a2410`),
        (e.lineWidth = 4),
        e.strokeRect(3, 3, t - 6, n - 6),
        U(e, L(`walkin.sento.price.title`), t / 2, 22, t - 20, 20, `#1a1008`, {
          serif: !0,
        }),
        [
          [`walkin.sento.price.adult`, O_],
          [`walkin.sento.price.child`, 200],
          [`walkin.sento.price.infant`, 100],
        ].forEach(([n, r], i) => {
          (U(e, L(n), t * 0.36, 58 + i * 34, t * 0.6, 13, `#1a1008`, {
            weight: `600`,
          }),
            U(e, Dr(r), t * 0.8, 58 + i * 34, t * 0.34, 15, `#8a1010`));
        }),
        U(e, L(`walkin.sento.towel`), t / 2, n - 34, t - 18, 11, `#1a1008`, {
          weight: `600`,
        }),
        U(e, L(`walkin.sento.closed`), t / 2, n - 14, t - 18, 11, `#8a1010`, {
          weight: `600`,
        }));
    }),
    e.add(`s-manners`, 128, 192, (e, t, n) => {
      (W(e, 0, 0, t, n, `#f8fbff`),
        W(e, 0, 0, t, 30, `#2a6ab0`),
        U(e, L(`walkin.sento.manners.title`), t / 2, 15, t - 16, 18, `#fff`),
        [
          `walkin.sento.manners.kakeyu`,
          `walkin.sento.manners.towel`,
          `walkin.sento.manners.dry`,
        ].forEach((n, r) => {
          ((e.fillStyle = `#2a6ab0`),
            e.beginPath(),
            e.arc(16, 56 + r * 44, 9, 0, Math.PI * 2),
            e.fill(),
            U(e, String(r + 1), 16, 56 + r * 44, 12, 12, `#fff`),
            U(e, L(n), t / 2 + 8, 56 + r * 44, t - 36, 11, `#1a2a3a`, {
              weight: `600`,
            }));
        }));
    }),
    e.add(`s-noren-m`, 128, 128, (e, t, n, r) => {
      (W(e, 0, 0, t, n, `#1c2a5a`),
        Xh(e, t, n, r, 120, 0.08, 0.04, 2),
        W(e, t / 2 - 1, n * 0.12, 2, n * 0.88, `rgba(0,0,0,0.5)`),
        U(
          e,
          L(`walkin.sento.noren.men`),
          t / 2,
          n * 0.5,
          t * 0.6,
          54,
          `#f4f0e6`,
          { serif: !0 },
        ));
    }),
    e.add(`s-noren-f`, 128, 128, (e, t, n, r) => {
      (W(e, 0, 0, t, n, `#a8243a`),
        Xh(e, t, n, r, 120, 0.08, 0.04, 2),
        W(e, t / 2 - 1, n * 0.12, 2, n * 0.88, `rgba(0,0,0,0.5)`),
        U(
          e,
          L(`walkin.sento.noren.women`),
          t / 2,
          n * 0.5,
          t * 0.6,
          54,
          `#f4f0e6`,
          { serif: !0 },
        ));
    }),
    e.add(`s-passage`, 64, 128, (e, t, n) => {
      (Yh(e, 0, 0, t, n, `#3a3428`, `#1a1610`),
        W(e, t * 0.15, n * 0.08, t * 0.7, n * 0.8, `rgba(220,226,220,0.35)`),
        W(e, t / 2 - 1, n * 0.08, 2, n * 0.8, `rgba(60,50,40,0.6)`));
    }),
    e.add(`s-milk`, 128, 192, (e, t, n) => {
      Yh(e, 0, 0, t, n, `#e8f0f2`, `#c8d8dc`);
      let r = [`#9a6a3a`, `#f4c890`, `#f8f8f4`];
      for (let i = 0; i < 3; i++) {
        let a = (i + 1) * (n / 3) - 8;
        W(e, 0, a, t, 6, `#f4f4f0`);
        for (let t = 0; t < 7; t++) {
          let o = 6 + t * 17,
            s = n / 3 - 22;
          ((e.fillStyle = `rgba(255,255,255,0.6)`),
            e.fillRect(o, a - s, 12, s),
            (e.fillStyle = r[i]),
            e.fillRect(o + 1, a - s + 8, 10, s - 9),
            (e.fillStyle = [`#c83a2a`, `#e88a2a`, `#2a6ab0`][i]),
            e.fillRect(o + 1, a - s - 2, 10, 4));
        }
        U(e, L(k_[i][0]), t / 2, a + 3, t - 10, 6, `#c81818`, {
          weight: `600`,
        });
      }
    }),
    e.add(`s-milk-head`, 128, 32, (e, t, n) => {
      (W(e, 0, 0, t, n, `#2a6ab0`),
        U(
          e,
          L(`walkin.sento.milk.title`),
          t / 2,
          n / 2,
          t - 12,
          20,
          `#ffffff`,
          { serif: !0 },
        ));
    }),
    e.add(`s-tv`, 128, 80, (e, t, n, r) => {
      (Yh(e, 0, 0, t, n, `#3a7a3a`, `#2a5a2a`),
        (e.fillStyle = `#b89a6a`),
        e.beginPath(),
        e.moveTo(t * 0.5, n * 0.95),
        e.lineTo(t * 0.15, n * 0.55),
        e.lineTo(t * 0.5, n * 0.3),
        e.lineTo(t * 0.85, n * 0.55),
        e.closePath(),
        e.fill(),
        W(e, 4, 4, 52, 14, `rgba(0,0,0,0.6)`),
        U(e, L(`walkin.sento.tv.score`), 30, 11, 48, 9, `#ffffff`, {
          weight: `600`,
        }),
        Xh(e, t, n, r, 60, 0.05, 0.08, 1));
    }),
    e.add(`s-fuji`, 192, 96, (e, t, n) => {
      (Yh(e, 0, 0, t, n * 0.7, `#7ab0e0`, `#d8ecf8`),
        (e.fillStyle = `#4a6a9a`),
        e.beginPath(),
        e.moveTo(0, n * 0.85),
        e.lineTo(t * 0.42, n * 0.2),
        e.lineTo(t * 0.58, n * 0.2),
        e.lineTo(t, n * 0.85),
        e.fill(),
        (e.fillStyle = `#ffffff`),
        e.beginPath(),
        e.moveTo(t * 0.33, n * 0.34),
        e.lineTo(t * 0.42, n * 0.2),
        e.lineTo(t * 0.58, n * 0.2),
        e.lineTo(t * 0.67, n * 0.34),
        e.lineTo(t * 0.55, n * 0.3),
        e.lineTo(t * 0.5, n * 0.36),
        e.lineTo(t * 0.45, n * 0.3),
        e.fill(),
        Yh(e, 0, n * 0.82, t, n * 0.18, `#3a7ab8`, `#2a5a98`),
        (e.strokeStyle = `#5a3a20`),
        (e.lineWidth = 6),
        e.strokeRect(3, 3, t - 6, n - 6));
    }),
    e.add(`s-massage`, 64, 64, (e, t, n, r) => {
      (Yh(e, 0, 0, t, n, `#6a3a24`, `#4a2414`),
        Xh(e, t, n, r, 80, 0.1, 0.06, 2));
    }),
    e.add(`s-massage-sign`, 96, 48, (e, t, n) => {
      (W(e, 0, 0, t, n, `#fff8e8`),
        U(e, L(`walkin.sento.massage`), t / 2, n * 0.36, t - 8, 12, `#3a2010`, {
          weight: `600`,
        }),
        U(
          e,
          L(`walkin.sento.massage.price`),
          t / 2,
          n * 0.74,
          t - 8,
          12,
          `#a01010`,
        ));
    }),
    e.add(`s-yu`, 64, 64, (e, t, n) => {
      (W(e, 0, 0, t, n, `#f4f0e6`),
        U(e, L(`walkin.sento.yu`), t / 2, n / 2, t * 0.7, 44, `#1a2a5a`, {
          serif: !0,
        }));
    }),
    e.add(`s-panel`, 32, 32, (e, t, n) =>
      Yh(e, 0, 0, t, n, `#fffaf0`, `#f4ecd8`),
    ));
}
function A_(e, t) {
  return {
    e: 1.58,
    wing: 0.32,
    step: 2.35,
    siteLockers: { z0: 1.72, z1: 2.3, x: 1.52, h: 1.888 },
    soffit: 2.55,
    desk: {
      x0: -1.1,
      x1: 0.8,
      z0: t - 1.15,
      z1: t - 0.85,
      h: 0.92,
      seatY: 0.3,
    },
    norenM: { x0: -3.4, x1: -2.2 },
    norenF: { x0: 2.2, x1: 3.4 },
    tv: { z: 4.1 },
    benches: [
      { x: -2.75, z0: 3.3, z1: 4.9 },
      { x: -1.45, z0: 3.3, z1: 4.9 },
    ],
    fridge: { z0: 3.7, z1: 4.6 },
    massage: { x: -e / 2 + 0.55, z: t - 2 },
  };
}
