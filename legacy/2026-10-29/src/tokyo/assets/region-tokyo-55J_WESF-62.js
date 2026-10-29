// tokyo/assets/region-tokyo-55J_WESF 62 — beginpath
// Lines 28055-28192 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var zoe = (e, t, n, r) => {
    (yd(0)(e, t, n, r),
      P(e, 150, 110, 56, 138, `#a4a8aa`),
      P(e, 150, 110, 56, 2, `rgba(0,0,0,0.3)`),
      P(e, 195, 175, 6, 12, `#4a4e50`));
  },
  Boe = (e, t, n, r) => {
    (dd(e, r, [214, 208, 198]),
      P(e, 70, 30, 100, 218, `#8a8072`),
      P(e, 76, 36, 88, 212, `#b8ad9c`),
      P(e, 148, 140, 8, 20, `#4a4440`),
      P(e, 180, 40, 30, 200, `#9aa0a4`),
      Kr(e, r, 184, 44, 22, 192, `frosted`),
      Rr(t, 184, 44, 22, 192, !1),
      P(e, 30, 120, 14, 20, `#3a3e42`),
      P(e, 112, 12, 20, 12, `#fff4d8`),
      Rr(t, 112, 12, 20, 12, !1));
  },
  bd = [en.x0, en.y0, en.x1 - en.x0, en.y1 - en.y0],
  xd =
    (e = `#8e9294`, t = `#c4c8ca`) =>
    (n, r) => {
      (P(n, 0, 0, H, H, e),
        zr(n, 6, 3, 244, 20, t, Ir([150, 154, 156], 0.8)),
        P(n, 0, 248, H, 8, `#4a4744`),
        ld(n, r, 0, H, 24, 40, 2, 0.08));
    },
  Sd =
    (e = `#4a3020`) =>
    (t, n) => {
      P(t, 0, 0, H, H, e);
      for (let e = 0; e < H; e += 5) P(t, 0, e, H, 1, `rgba(0,0,0,0.1)`);
      (P(t, 0, 0, H, 24, `#2a1a10`),
        P(t, 0, 248, H, 8, `#3a3632`),
        ld(t, n, 0, H, 24, 30, 2, 0.06));
    },
  Cd = (e) => {
    (P(e, 0, 0, H, H, `#e6e8e8`),
      P(e, 0, 0, H, 20, `#cfd3d5`),
      P(e, 0, 250, H, 6, `#9aa0a4`));
  },
  wd =
    (e, t, n, r = bd) =>
    (i, a, o, s) => {
      (P(i, r[0], r[1], r[2], r[3], `#9a9690`), Moe(i, e, s), i.save());
      let c = new Path2D();
      (c.rect(0, 0, H, H),
        c.rect(r[0], r[1], r[2], r[3]),
        i.clip(c, `evenodd`),
        t(i, s),
        i.restore(),
        Rr(a, r[0], r[1], r[2], r[3], !1),
        n?.(i, a, o, s));
    };
function Td(e, t, n, r, i, a, o) {
  (P(e, n, r, i, a, o), Rr(t, n, r, i, a, !0));
}
var Ed =
    (e = `#8a9296`) =>
    (t, n) => {
      (Td(t, n, 125, bd[1], 6, bd[3], e),
        Td(t, n, bd[0], bd[1] + bd[3] * 0.45, bd[2], 4, e));
    },
  Voe = (e, t, n, r) => {
    (Wr(e, r, 0, 0, H, H, [44, 42, 40]),
      P(e, 50, 30, 156, 218, `#d8d2c4`),
      P(e, 60, 40, 136, 208, `#2a2826`),
      P(e, 66, 46, 60, 200, `#3a3632`),
      P(e, 130, 46, 60, 200, `#3a3632`));
    for (let t of [72, 136])
      for (let n = 60; n < 240; n += 40) P(e, t, n, 48, 3, `#1a1816`);
  },
  Dd = (e) => (t, n, r, i) => {
    (Wr(t, i, 0, 0, H, H, e ? [236, 232, 222] : [52, 50, 48]),
      P(t, 68, 50, 120, 112, e ? `#cfc8b8` : `#2a2826`),
      P(t, 86, 64, 84, 84, `#3a3632`),
      Kr(t, i, 90, 68, 76, 76, `shoji`),
      Rr(n, 90, 68, 76, 76, !1));
    for (let e = 1; e < 5; e++)
      P(t, 86 + (e * 84) / 5 - 1.5, 64, 3, 84, `#1a1816`);
    (P(t, 34, 56, 34, 100, `#3a3836`), P(t, 188, 56, 34, 100, `#3a3836`));
  },
  Hoe = (e, t, n, r) => {
    Wr(e, r, 0, 0, H, H * 0.55, [236, 232, 222]);
    let i = H * 0.55;
    (P(e, 0, i, H, 115.19999999999999, `#3a3c40`),
      e.save(),
      e.beginPath(),
      e.rect(0, i, H, 115.19999999999999),
      e.clip(),
      (e.strokeStyle = `#e8e4da`),
      (e.lineWidth = 5));
    for (let t = -256; t < H * 2; t += 32)
      (e.beginPath(),
        e.moveTo(t, i),
        e.lineTo(t + 115.19999999999999, H),
        e.stroke(),
        e.beginPath(),
        e.moveTo(t, H),
        e.lineTo(t + 115.19999999999999, i),
        e.stroke());
    (e.restore(), P(e, 0, 134.8, H, 6, `#2a2826`));
  },
  Uoe = (e, t, n, r) => {
    for (let t = 0; t < H; t += 18) P(e, 0, t, H, 17, Lr(r, [96, 70, 48], 0.1));
    (Kr(e, r, 40, 50, 176, 130, `shoji`), Rr(t, 40, 50, 176, 130, !1));
    for (let t = 40; t <= 216; t += 11) P(e, t, 50, 5, 130, `#5a3e26`);
    (P(e, 34, 42, 188, 8, `#4a3220`), P(e, 34, 180, 188, 10, `#4a3220`));
  },
  Woe = (e, t, n, r) => {
    for (let t = 0; t < H; t += 18) P(e, 0, t, H, 17, Lr(r, [90, 66, 44], 0.1));
    (P(e, 18, 22, 220, 226, `#3a2818`),
      Kr(e, r, 24, 28, 208, 220, `frosted`),
      Rr(t, 24, 28, 208, 220, !1));
    for (let t = 24; t <= 232; t += 9) P(e, t, 28, 3.5, 220, `#6a4a2c`);
    for (let t = 28; t <= 248; t += 55) P(e, 24, t, 208, 4, `#6a4a2c`);
    P(e, 125, 28, 6, 220, `#3a2818`);
  },
  Goe = (e, t, n, r) => {
    if (cd.boards === `copper`) return Koe(e, r);
    for (let t = 0; t < H; t += 16)
      (P(e, 0, t, H, 16, Lr(r, [92, 74, 58], 0.12)),
        P(e, 0, t + 13, H, 3, `rgba(0,0,0,0.3)`));
    for (let t = 30; t < H; t += 64) P(e, t, 0, 4, H, `rgba(0,0,0,0.25)`);
  };
function Koe(e, t) {
  P(e, 0, 0, H, H, `#5e8c7a`);
  for (let n = 0; n < H; n += 64)
    for (let r = 0; r < H; r += 64)
      P(e, r + 1, n + 1, 62, 62, Lr(t, [94, 140, 122], 0.12));
  ((e.strokeStyle = `rgba(30,60,50,0.35)`), (e.lineWidth = 2));
  for (let t = 8, n = 0; t < 272; t += 12, n++)
    for (let r = n % 2 ? 0 : 12; r < 280; r += 24)
      (e.beginPath(), e.arc(r, t, 11, Math.PI, 0), e.stroke());
  for (let t = 0; t < H; t += 64)
    zr(e, 0, t, H, 14, `rgba(110,70,40,0.45)`, `rgba(110,70,40,0)`);
  ud(e, t, 0.08);
}
