// tokyo__assets__region-tokyo-BcM3fReU 36 — beginpath
// Lines 19831-20158 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var Gf =
    (e = `#8a9296`) =>
    (t, n) => {
      (Wf(t, n, 125, zf[1], 6, zf[3], e),
        Wf(t, n, zf[0], zf[1] + zf[3] * 0.45, zf[2], 4, e));
    },
  Kf = (e, t, n, r) => {
    (ya(e, r, 0, 0, W, W, [44, 42, 40]),
      I(e, 50, 30, 156, 218, `#d8d2c4`),
      I(e, 60, 40, 136, 208, `#2a2826`),
      I(e, 66, 46, 60, 200, `#3a3632`),
      I(e, 130, 46, 60, 200, `#3a3632`));
    for (let t of [72, 136])
      for (let n = 60; n < 240; n += 40) I(e, t, n, 48, 3, `#1a1816`);
  },
  qf = (e) => (t, n, r, i) => {
    (ya(t, i, 0, 0, W, W, e ? [236, 232, 222] : [52, 50, 48]),
      I(t, 68, 50, 120, 112, e ? `#cfc8b8` : `#2a2826`),
      I(t, 86, 64, 84, 84, `#3a3632`),
      Ca(t, i, 90, 68, 76, 76, `shoji`),
      pa(n, 90, 68, 76, 76, !1));
    for (let e = 1; e < 5; e++)
      I(t, 86 + (e * 84) / 5 - 1.5, 64, 3, 84, `#1a1816`);
    (I(t, 34, 56, 34, 100, `#3a3836`), I(t, 188, 56, 34, 100, `#3a3836`));
  },
  Jf = (e, t, n, r) => {
    ya(e, r, 0, 0, W, W * 0.55, [236, 232, 222]);
    let i = W * 0.55;
    (I(e, 0, i, W, 115.19999999999999, `#3a3c40`),
      e.save(),
      e.beginPath(),
      e.rect(0, i, W, 115.19999999999999),
      e.clip(),
      (e.strokeStyle = `#e8e4da`),
      (e.lineWidth = 5));
    for (let t = -256; t < W * 2; t += 32)
      (e.beginPath(),
        e.moveTo(t, i),
        e.lineTo(t + 115.19999999999999, W),
        e.stroke(),
        e.beginPath(),
        e.moveTo(t, W),
        e.lineTo(t + 115.19999999999999, i),
        e.stroke());
    (e.restore(), I(e, 0, 134.8, W, 6, `#2a2826`));
  },
  Yf = (e, t, n, r) => {
    for (let t = 0; t < W; t += 18) I(e, 0, t, W, 17, fa(r, [96, 70, 48], 0.1));
    (Ca(e, r, 40, 50, 176, 130, `shoji`), pa(t, 40, 50, 176, 130, !1));
    for (let t = 40; t <= 216; t += 11) I(e, t, 50, 5, 130, `#5a3e26`);
    (I(e, 34, 42, 188, 8, `#4a3220`), I(e, 34, 180, 188, 10, `#4a3220`));
  },
  Xf = (e, t, n, r) => {
    for (let t = 0; t < W; t += 18) I(e, 0, t, W, 17, fa(r, [90, 66, 44], 0.1));
    (I(e, 18, 22, 220, 226, `#3a2818`),
      Ca(e, r, 24, 28, 208, 220, `frosted`),
      pa(t, 24, 28, 208, 220, !1));
    for (let t = 24; t <= 232; t += 9) I(e, t, 28, 3.5, 220, `#6a4a2c`);
    for (let t = 28; t <= 248; t += 55) I(e, 24, t, 208, 4, `#6a4a2c`);
    I(e, 125, 28, 6, 220, `#3a2818`);
  },
  Zf = (e, t, n, r) => {
    for (let t = 0; t < W; t += 16)
      (I(e, 0, t, W, 16, fa(r, [92, 74, 58], 0.12)),
        I(e, 0, t + 13, W, 3, `rgba(0,0,0,0.3)`));
    for (let t = 30; t < W; t += 64) I(e, t, 0, 4, W, `rgba(0,0,0,0.25)`);
  },
  Qf = (e, t, n, r) => {
    I(e, 0, 0, W, W, `#6a6e74`);
    for (let t = 0; t < W; t += 21)
      for (let n = 0; n < W; n += 24) {
        let r = e.createLinearGradient(n, 0, n + 24, 0);
        (r.addColorStop(0, `#7e848c`),
          r.addColorStop(0.5, `#a6acb4`),
          r.addColorStop(1, `#5a5e66`),
          (e.fillStyle = r),
          e.fillRect(n, t, 24, 18),
          I(e, n, t + 18, 24, 3, `rgba(0,0,0,0.45)`));
      }
    xa(e, r, 0.08);
  },
  $f = (e, t, n, r) => {
    ga(e, r, 0, 0, W, W, [150, 154, 150], !1);
    for (let t = 0; t < W; t += 64) I(e, t, 0, 2, W, `rgba(0,0,0,0.12)`);
    for (let t = 0; t < W; t += 64) I(e, 0, t, W, 2, `rgba(0,0,0,0.12)`);
    xa(e, r, 0.14);
  },
  ep = (e, t, n, r) => {
    I(e, 0, 0, W, W, la(...r));
    for (let t = 0; t < W; t += 8)
      n
        ? (I(e, t, 0, 3, W, `rgba(255,255,255,0.16)`),
          I(e, t + 5, 0, 2, W, `rgba(0,0,0,0.18)`))
        : (I(e, 0, t, W, 3, `rgba(255,255,255,0.16)`),
          I(e, 0, t + 5, W, 2, `rgba(0,0,0,0.18)`));
    for (let n = 0; n < 8; n++) {
      let n = t.next() * W,
        r = t.next() * W,
        i = e.createRadialGradient(n, r, 0, n, r, 10 + t.next() * 30);
      (i.addColorStop(0, `rgba(120,60,30,0.25)`),
        i.addColorStop(1, `rgba(120,60,30,0)`),
        (e.fillStyle = i),
        e.fillRect(0, 0, W, W));
    }
  },
  tp = [
    Ef(0),
    Ef(1),
    Ef(2),
    Ef(3),
    Df(0),
    Df(1),
    Of(0, `lace`),
    Of(1, `curtain`),
    kf,
    Af(0),
    Af(1),
    Af(2),
    Of(2, `curtain`),
    Of(0, `blind`),
    jf(0),
    jf(1),
    Mf(0),
    Mf(1),
    Mf(2),
    Nf,
    Pf,
    Ff(0),
    Ff(1),
    Ff(2),
    If(0),
    If(1),
    Uf(U.FOOD, Vf(`#5a3a22`)),
    Uf(U.GOODS, Bf()),
    Uf(U.NOODLE, Vf(`#2a1612`), Gf(`#3a2a20`)),
    Uf(U.CLINIC, Hf, Gf()),
    Uf(U.LOBBY, Bf(`#6a6e72`, `#9a9ea2`), Gf(`#5a5e62`)),
    Rf,
    Uf(U.CONV, Hf, void 0, [5, 16, 246, 234]),
    Uf(U.TEA, Vf(`#3a2a1a`)),
    Uf(U.GAME, Bf(`#1a1420`, `#ff40a0`)),
    Uf(U.DRUG, Bf(`#f0d800`, `#fff6a0`)),
    Uf(U.BENTO, Bf(`#e8e4dc`, `#d02a1a`)),
    Uf(U.LOTTERY, Bf(`#c01010`, `#ffe000`)),
    Lf,
    Uf(U.BICYCLE, Bf(`#5a5e60`)),
    Kf,
    qf(0),
    qf(1),
    Jf,
    Yf,
    Xf,
    Uf(U.OLDSHOP, Vf(`#2a1a10`)),
    Zf,
    Qf,
    $f,
    (e, t, n, r) => ep(e, r, !0, [220, 222, 220]),
    (e, t, n, r) => {
      (ep(e, r, !0, [220, 222, 220]),
        wa(e, t, r, 70, 60, 116, 90, { look: `lace`, tone: 4 }));
    },
    (e, t, n, r) => ep(e, r, !1, [230, 230, 228]),
    (e, t, n, r) => {
      I(e, 0, 0, W, W, `#f2f0ec`);
      for (let t = 0; t < W; t += 4) I(e, 0, t, W, 1, `rgba(0,0,0,0.03)`);
      (I(e, 0, 216, W, 40, `#e0ded8`), I(e, 0, 216, W, 2, `rgba(0,0,0,0.15)`));
    },
    (e, t, n, r) => va(e, r, 0, 0, W, W, [214, 208, 198], 128, 64),
    (e, t, n, r) => ga(e, r, 0, 0, W, W, [210, 208, 202]),
    (e, t, n, r) => {
      I(e, 0, 0, W, W, `#5a5c5a`);
      let i = `#e6e6e0`;
      (I(e, 0, 226, W, 10, i),
        (e.strokeStyle = i),
        (e.lineWidth = 10),
        e.beginPath(),
        e.moveTo(10, 226),
        e.lineTo(246, 30),
        e.stroke(),
        (e.lineWidth = 4));
      for (let t = 0; t < W; t += 22)
        (e.beginPath(), e.moveTo(t, 226), e.lineTo(t, 146), e.stroke());
      (I(e, 0, 144, W, 5, i),
        I(e, 0, 18, W, 8, i),
        ba(e, r, 0, W, 236, 30, 4, 0.2));
    },
    (e, t, n, r) => {
      I(e, 0, 0, W, W, `#62645f`);
      let i = `#e6e6e0`;
      for (let t = 0; t < 2; t++) {
        I(e, 0, t * 128 + 112, W, 10, i);
        for (let n = 4; n < W; n += 20) I(e, n, t * 128 + 30, 3, 82, i);
        I(e, 0, t * 128 + 28, W, 5, i);
      }
    },
    (e, t, n, r) => {
      (I(e, 0, 0, W, W, `#ecebe6`),
        I(e, 0, 0, W, 6, `#d4d2cc`),
        (e.fillStyle = `#9a9c9a`),
        e.beginPath(),
        e.arc(96, 128, 84, 0, Math.PI * 2),
        e.fill(),
        (e.strokeStyle = `#6a6c6a`),
        (e.lineWidth = 3));
      for (let t = 20; t < 84; t += 12)
        (e.beginPath(), e.arc(96, 128, t, 0, Math.PI * 2), e.stroke());
      (I(e, 196, 40, 46, 176, `#dcdbd6`), ba(e, r, 0, W, 236, 20, 3, 0.14));
    },
    (e, t, n, r) => {
      I(e, 0, 0, W, W, `#e0dfda`);
      for (let t = 20; t < 236; t += 8) I(e, 20, t, 216, 3, `#b8b8b4`);
    },
    (e, t, n, r) => {
      I(e, 0, 0, W, W, `#d8d0b8`);
      for (let t = 0; t < W; t += 64)
        for (let n = 0; n < W; n += 64)
          (ma(e, n + 3, t + 3, 58, 58, `#e8e2cc`, `#c8c0a6`),
            I(e, n + 14, t + 14, 36, 36, `rgba(255,255,255,0.12)`));
      xa(e, r, 0.12);
    },
    (e, t, n, r) => {
      I(e, 0, 0, W, W, `#b4b8b8`);
      for (let t = 6; t < W; t += 12)
        (I(e, 4, t, 248, 7, `#d0d4d4`), I(e, 4, t + 7, 248, 3, `#5a5e5e`));
    },
    (e, t, n, r) => {
      (I(e, 0, 0, W, W, `#b8bcbe`),
        ma(e, 6, 22, 244, 226, `#d8e0e4`, `#b4c0c6`),
        I(e, 0, 0, W, 16, `#a4a8aa`),
        I(e, 0, 248, W, 8, `#8a8e90`));
      for (let t = 0; t < W; t += 128) I(e, t, 0, 6, W, `#9a9ea0`);
    },
    (e, t, n, r) => {
      (ga(e, r, 0, 0, W, W, [226, 224, 218], !1),
        I(e, 0, 0, W, 14, `#b4b8ba`),
        I(e, 0, 14, W, 3, `rgba(0,0,0,0.2)`),
        ba(e, r, 0, W, 18, 160, 6, 0.18),
        I(e, 200, 216, 10, 14, `#8a8e90`));
    },
    Uf(U.SALON, Bf(`#2a2a2e`), Gf(`#2a2a2e`)),
    Uf(U.PHONE, Bf(`#3a2c1e`)),
    Uf(U.CAFE, Vf(`#3a2414`)),
    Uf(U.BOUTIQUE, Bf(`#1e1e20`)),
    Uf(U.ESTATE, Bf(`#3a3e42`), (e, t, n, r) => {
      for (let n = 0; n < 2; n++)
        for (let i = 0; i < 6; i++) {
          if (r.chance(0.2)) continue;
          let a = 16 + i * 38,
            o = 40 + n * 44;
          (Wf(e, t, a, o, 32, 38, `#fbfbf6`),
            I(e, a, o, 32, 7, r.chance(0.5) ? `#d4231a` : `#1c4fa3`),
            I(e, a + 4, o + 11, 24, 12, `#c8d0d8`));
        }
    }),
    Uf(U.BAKERY, Vf(`#6a4a2a`)),
    Uf(U.CONV_DOOR, Hf, Gf(`#8f989d`), [5, 16, 246, 234]),
    (e, t, n, r) => {
      va(e, r, 0, 0, W, W, [120, 114, 108], 128, 64);
    },
    Uf(U.BOOKS, Bf(`#3a2a1e`)),
    Uf(U.PARTS, Bf(`#3a4a5a`)),
    Uf(U.GROCER, Bf(`#4a3f35`)),
    Uf(U.GRILL, Vf(`#3a2014`)),
    Uf(U.FLORIST, Bf(`#2f4a34`)),
    Uf(U.LOUNGE, Vf(`#120b12`)),
    Uf(U.GYM, Bf(`#141414`)),
    Uf(U.LAUNDRY, Hf),
    (e, t, n, r) => {
      (I(e, 0, 0, W, W, `#cfcac0`),
        I(e, 0, 0, W, 22, `#e2ded6`),
        I(e, 120, 6, 24, 8, `#fff6dc`),
        I(e, 20, 40, 84, 200, `#8a7a68`),
        I(e, 24, 44, 76, 196, `#a8957e`),
        I(e, 86, 140, 6, 14, `#3a3430`),
        wa(e, t, r, 140, 70, 90, 56, { look: `frosted`, panes: 2, sill: !1 }));
      for (let t = 144; t < 230; t += 10) I(e, t, 66, 3, 64, `#8a8e90`);
      (I(e, 110, 60, 22, 40, `#e8e6e0`),
        I(e, 0, 168, W, 88, `#d8d4cc`),
        I(e, 0, 164, W, 6, `#a8acae`),
        pa(t, 0, 164, W, 92, !0),
        ba(e, r, 0, W, 170, 70, 5, 0.16));
    },
    (e, t, n, r) => {
      I(e, 0, 0, W, W, `#e6e0d4`);
      for (let t = 0; t < W; t += 32)
        (ma(e, t + 2, 0, 22, W, `#f2eee6`, `#d4ccbc`),
          I(e, t + 24, 0, 8, W, `#bcb4a4`));
      I(e, 0, 244, W, 12, `#c8c0b0`);
    },
    (e, t, n, r) => {
      (I(e, 0, 0, W, W, `#9aa0a4`),
        ma(e, 8, 10, 240, 240, `#7a8a94`, `#3a444a`),
        I(e, 38, 190, 180, 40, `#5a6064`));
      for (let t = 0; t < 4; t++) I(e, 28 + t * 56, 18, 30, 3, `#f0f4f4`);
      (ma(e, 8, 10, 240, 120, `rgba(210,222,232,0.4)`, `rgba(210,222,232,0)`),
        pa(t, 8, 10, 240, 240, !1));
      for (let n of [8, 125, 242])
        (I(e, n, 10, 6, 240, `#6a7074`), pa(t, n, 10, 6, 240, !0));
      (I(e, 8, 10, 240, 8, `#6a7074`), pa(t, 8, 10, 240, 8, !0));
    },
    (e, t, n, r) => {
      Af(0)(e, t, n, r);
      let i = [`#d81b1b`, `#1a4aa0`, `#f0c000`, `#ffffff`];
      for (let n = 0; n < 2; n++) {
        let a = i[Math.floor(r.next() * i.length)];
        for (let r = 0; r < 4; r++)
          Wf(e, t, 22 + n * 118 + r * 24, 70, 18, 22, a);
      }
    },
    (e, t, n, r) => va(e, r, 0, 0, W, W, [204, 196, 182], 128, 42),
    (e, t, n, r) => {
      I(e, 0, 0, W, W, `#a8aaa8`);
      for (let t = 0; t < W; t += 8) I(e, 0, t, W, 4, `#3a3c3a`);
      (I(e, 0, 0, 8, W, `#8a8c8a`), I(e, 248, 0, 8, W, `#8a8c8a`));
    },
    (e, t, n, r) => {
      I(e, 0, 0, W, W, `#a0a8aa`);
      for (let t = 2; t < W; t += 32)
        for (let n = 2; n < W; n += 32)
          ma(e, n, t, 29, 29, `#e4ecee`, `#bccacc`);
      pa(t, 0, 0, W, W, !1);
    },
    (e, t, n, r) => {
      for (let t = 0; t < W; t += 32)
        for (let n = 0; n < W; n += 32)
          I(e, n + 1, t + 1, 30, 30, fa(r, [176, 160, 140], 0.1));
    },
  ];
