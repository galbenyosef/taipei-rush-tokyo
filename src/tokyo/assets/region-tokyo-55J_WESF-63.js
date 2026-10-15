// tokyo/assets/region-tokyo-55J_WESF 63 — addcolorstop
// Lines 28193-28476 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var qoe = (e, t, n, r) => {
    P(e, 0, 0, H, H, cd.kawara[3]);
    for (let t = 0; t < H; t += 21)
      for (let n = 0; n < H; n += 24) {
        let r = e.createLinearGradient(n, 0, n + 24, 0);
        (r.addColorStop(0, cd.kawara[1]),
          r.addColorStop(0.5, cd.kawara[0]),
          r.addColorStop(1, cd.kawara[2]),
          (e.fillStyle = r),
          e.fillRect(n, t, 24, 18),
          P(e, n, t + 18, 24, 3, `rgba(0,0,0,0.45)`));
      }
    ud(e, r, 0.08);
  },
  Joe = (e, t, n, r) => {
    Vr(e, r, 0, 0, H, H, [150, 154, 150], !1);
    for (let t = 0; t < H; t += 64) P(e, t, 0, 2, H, `rgba(0,0,0,0.12)`);
    for (let t = 0; t < H; t += 64) P(e, 0, t, H, 2, `rgba(0,0,0,0.12)`);
    ud(e, r, 0.14);
  },
  Od = (e, t, n, r) => {
    P(e, 0, 0, H, H, Pr(...r));
    for (let t = 0; t < H; t += 8)
      n
        ? (P(e, t, 0, 3, H, `rgba(255,255,255,0.16)`),
          P(e, t + 5, 0, 2, H, `rgba(0,0,0,0.18)`))
        : (P(e, 0, t, H, 3, `rgba(255,255,255,0.16)`),
          P(e, 0, t + 5, H, 2, `rgba(0,0,0,0.18)`));
    for (let n = 0; n < 8; n++) {
      let n = t.next() * H,
        r = t.next() * H,
        i = e.createRadialGradient(n, r, 0, n, r, 10 + t.next() * 30);
      (i.addColorStop(0, `rgba(120,60,30,0.25)`),
        i.addColorStop(1, `rgba(120,60,30,0)`),
        (e.fillStyle = i),
        e.fillRect(0, 0, H, H));
    }
  },
  kd = [
    fd(0),
    fd(1),
    fd(2),
    fd(3),
    pd(0),
    pd(1),
    md(0, `lace`),
    md(1, `curtain`),
    Foe,
    hd(0),
    hd(1),
    hd(2),
    md(2, `curtain`),
    md(0, `blind`),
    gd(0),
    gd(1),
    _d(0),
    _d(1),
    _d(2),
    Ioe,
    Loe,
    vd(0),
    vd(1),
    vd(2),
    yd(0),
    yd(1),
    wd(V.FOOD, Sd(`#5a3a22`)),
    wd(V.GOODS, xd()),
    wd(V.NOODLE, Sd(`#2a1612`), Ed(`#3a2a20`)),
    wd(V.CLINIC, Cd, Ed()),
    wd(V.LOBBY, xd(`#6a6e72`, `#9a9ea2`), Ed(`#5a5e62`)),
    Boe,
    wd(V.CONV, Cd, void 0, [5, 16, 246, 234]),
    wd(V.TEA, Sd(`#3a2a1a`)),
    wd(V.GAME, xd(`#1a1420`, `#ff40a0`)),
    wd(V.DRUG, xd(`#f0d800`, `#fff6a0`)),
    wd(V.BENTO, xd(`#e8e4dc`, `#d02a1a`)),
    wd(V.LOTTERY, xd(`#c01010`, `#ffe000`)),
    zoe,
    wd(V.BICYCLE, xd(`#5a5e60`)),
    Voe,
    Dd(0),
    Dd(1),
    Hoe,
    Uoe,
    Woe,
    wd(V.OLDSHOP, Sd(`#2a1a10`)),
    Goe,
    qoe,
    Joe,
    (e, t, n, r) => Od(e, r, !0, cd.tin),
    (e, t, n, r) => {
      (Od(e, r, !0, cd.tin),
        qr(e, t, r, 70, 60, 116, 90, {
          look: `lace`,
          tone: 4 + cd.tone,
          frame: cd.frame,
        }));
    },
    (e, t, n, r) => Od(e, r, !1, [230, 230, 228]),
    (e, t, n, r) => {
      P(e, 0, 0, H, H, `#f2f0ec`);
      for (let t = 0; t < H; t += 4) P(e, 0, t, H, 1, `rgba(0,0,0,0.03)`);
      (P(e, 0, 216, H, 40, `#e0ded8`), P(e, 0, 216, H, 2, `rgba(0,0,0,0.15)`));
    },
    (e, t, n, r) => Ur(e, r, 0, 0, H, H, cd.stone.panel, 128, 64),
    (e, t, n, r) => Vr(e, r, 0, 0, H, H, cd.concrete),
    (e, t, n, r) => {
      P(e, 0, 0, H, H, `#5a5c5a`);
      let i = `#e6e6e0`;
      (P(e, 0, 226, H, 10, i),
        (e.strokeStyle = i),
        (e.lineWidth = 10),
        e.beginPath(),
        e.moveTo(10, 226),
        e.lineTo(246, 30),
        e.stroke(),
        (e.lineWidth = 4));
      for (let t = 0; t < H; t += 22)
        (e.beginPath(), e.moveTo(t, 226), e.lineTo(t, 146), e.stroke());
      (P(e, 0, 144, H, 5, i),
        P(e, 0, 18, H, 8, i),
        ld(e, r, 0, H, 236, 30, 4, 0.2));
    },
    (e, t, n, r) => {
      P(e, 0, 0, H, H, `#62645f`);
      let i = `#e6e6e0`;
      for (let t = 0; t < 2; t++) {
        P(e, 0, t * 128 + 112, H, 10, i);
        for (let n = 4; n < H; n += 20) P(e, n, t * 128 + 30, 3, 82, i);
        P(e, 0, t * 128 + 28, H, 5, i);
      }
    },
    (e, t, n, r) => {
      (P(e, 0, 0, H, H, `#ecebe6`),
        P(e, 0, 0, H, 6, `#d4d2cc`),
        (e.fillStyle = `#9a9c9a`),
        e.beginPath(),
        e.arc(96, 128, 84, 0, Math.PI * 2),
        e.fill(),
        (e.strokeStyle = `#6a6c6a`),
        (e.lineWidth = 3));
      for (let t = 20; t < 84; t += 12)
        (e.beginPath(), e.arc(96, 128, t, 0, Math.PI * 2), e.stroke());
      (P(e, 196, 40, 46, 176, `#dcdbd6`), ld(e, r, 0, H, 236, 20, 3, 0.14));
    },
    (e, t, n, r) => {
      P(e, 0, 0, H, H, `#e0dfda`);
      for (let t = 20; t < 236; t += 8) P(e, 20, t, 216, 3, `#b8b8b4`);
    },
    (e, t, n, r) => {
      P(e, 0, 0, H, H, `#d8d0b8`);
      for (let t = 0; t < H; t += 64)
        for (let n = 0; n < H; n += 64)
          (zr(e, n + 3, t + 3, 58, 58, `#e8e2cc`, `#c8c0a6`),
            P(e, n + 14, t + 14, 36, 36, `rgba(255,255,255,0.12)`));
      ud(e, r, 0.12);
    },
    (e, t, n, r) => {
      P(e, 0, 0, H, H, `#b4b8b8`);
      for (let t = 6; t < H; t += 12)
        (P(e, 4, t, 248, 7, `#d0d4d4`), P(e, 4, t + 7, 248, 3, `#5a5e5e`));
    },
    (e, t, n, r) => {
      (P(e, 0, 0, H, H, `#b8bcbe`),
        zr(e, 6, 22, 244, 226, `#d8e0e4`, `#b4c0c6`),
        P(e, 0, 0, H, 16, `#a4a8aa`),
        P(e, 0, 248, H, 8, `#8a8e90`));
      for (let t = 0; t < H; t += 128) P(e, t, 0, 6, H, `#9a9ea0`);
    },
    (e, t, n, r) => {
      (Vr(e, r, 0, 0, H, H, [226, 224, 218], !1),
        P(e, 0, 0, H, 14, `#b4b8ba`),
        P(e, 0, 14, H, 3, `rgba(0,0,0,0.2)`),
        ld(e, r, 0, H, 18, 160, 6, 0.18),
        P(e, 200, 216, 10, 14, `#8a8e90`));
    },
    wd(V.SALON, xd(`#2a2a2e`), Ed(`#2a2a2e`)),
    wd(V.PHONE, xd(`#3a2c1e`)),
    wd(V.CAFE, Sd(`#3a2414`)),
    wd(V.BOUTIQUE, xd(`#1e1e20`)),
    wd(V.ESTATE, xd(`#3a3e42`), (e, t, n, r) => {
      for (let n = 0; n < 2; n++)
        for (let i = 0; i < 6; i++) {
          if (r.chance(0.2)) continue;
          let a = 16 + i * 38,
            o = 40 + n * 44;
          (Td(e, t, a, o, 32, 38, `#fbfbf6`),
            P(e, a, o, 32, 7, r.chance(0.5) ? `#d4231a` : `#1c4fa3`),
            P(e, a + 4, o + 11, 24, 12, `#c8d0d8`));
        }
    }),
    wd(V.BAKERY, Sd(`#6a4a2a`)),
    wd(V.CONV_DOOR, Cd, Ed(`#8f989d`), [5, 16, 246, 234]),
    (e, t, n, r) => {
      Ur(e, r, 0, 0, H, H, cd.stone.plinth, 128, 64);
    },
    wd(V.BOOKS, xd(`#3a2a1e`)),
    wd(V.PARTS, xd(`#3a4a5a`)),
    wd(V.GROCER, xd(`#4a3f35`)),
    wd(V.GRILL, Sd(`#3a2014`)),
    wd(V.FLORIST, xd(`#2f4a34`)),
    wd(V.LOUNGE, Sd(`#120b12`)),
    wd(V.GYM, xd(`#141414`)),
    wd(V.LAUNDRY, Cd),
    (e, t, n, r) => {
      (P(e, 0, 0, H, H, cd.corridor.wall),
        P(e, 0, 0, H, 22, `#e2ded6`),
        P(e, 120, 6, 24, 8, `#fff6dc`),
        P(e, 20, 40, 84, 200, cd.corridor.door),
        P(e, 24, 44, 76, 196, `#a8957e`),
        P(e, 86, 140, 6, 14, `#3a3430`),
        qr(e, t, r, 140, 70, 90, 56, {
          look: `frosted`,
          panes: 2,
          sill: !1,
          frame: cd.frame,
        }));
      for (let t = 144; t < 230; t += 10) P(e, t, 66, 3, 64, `#8a8e90`);
      (P(e, 110, 60, 22, 40, `#e8e6e0`),
        P(e, 0, 168, H, 88, `#d8d4cc`),
        P(e, 0, 164, H, 6, `#a8acae`),
        Rr(t, 0, 164, H, 92, !0),
        ld(e, r, 0, H, 170, 70, 5, 0.16));
    },
    (e, t, n, r) => {
      P(e, 0, 0, H, H, `#e6e0d4`);
      for (let t = 0; t < H; t += 32)
        (zr(e, t + 2, 0, 22, H, cd.depato[0], cd.depato[1]),
          P(e, t + 24, 0, 8, H, cd.depato[2]));
      P(e, 0, 244, H, 12, `#c8c0b0`);
    },
    (e, t, n, r) => {
      (P(e, 0, 0, H, H, `#9aa0a4`),
        zr(e, 8, 10, 240, 240, `#7a8a94`, `#3a444a`),
        P(e, 38, 190, 180, 40, `#5a6064`));
      for (let t = 0; t < 4; t++) P(e, 28 + t * 56, 18, 30, 3, `#f0f4f4`);
      (zr(e, 8, 10, 240, 120, `rgba(210,222,232,0.4)`, `rgba(210,222,232,0)`),
        Rr(t, 8, 10, 240, 240, !1));
      for (let n of [8, 125, 242])
        (P(e, n, 10, 6, 240, `#6a7074`), Rr(t, n, 10, 6, 240, !0));
      (P(e, 8, 10, 240, 8, `#6a7074`), Rr(t, 8, 10, 240, 8, !0));
    },
    (e, t, n, r) => {
      hd(0)(e, t, n, r);
      let i = cd.letters;
      for (let n = 0; n < 2; n++) {
        let a = i[Math.floor(r.next() * i.length)];
        for (let r = 0; r < 4; r++)
          Td(e, t, 22 + n * 118 + r * 24, 70, 18, 22, a);
      }
    },
    (e, t, n, r) => Ur(e, r, 0, 0, H, H, cd.stone.plain, 128, 42),
    (e, t, n, r) => {
      P(e, 0, 0, H, H, `#a8aaa8`);
      for (let t = 0; t < H; t += 8) P(e, 0, t, H, 4, `#3a3c3a`);
      (P(e, 0, 0, 8, H, `#8a8c8a`), P(e, 248, 0, 8, H, `#8a8c8a`));
    },
    (e, t, n, r) => {
      P(e, 0, 0, H, H, `#a0a8aa`);
      for (let t = 2; t < H; t += 32)
        for (let n = 2; n < H; n += 32)
          zr(e, n, t, 29, 29, `#e4ecee`, `#bccacc`);
      Rr(t, 0, 0, H, H, !1);
    },
    (e, t, n, r) => {
      for (let t = 0; t < H; t += 32)
        for (let n = 0; n < H; n += 32)
          P(e, n + 1, t + 1, 30, 30, Lr(r, [176, 160, 140], 0.1));
    },
  ];
function Yoe(e, t, n = Vu) {
  let r = Ad(e, t, n, () => !1);
  for (;;) {
    let e = r.next();
    if (e.done) return e.value;
  }
}
function Xoe(e, t) {
  if (t.id === Vu.id) return e;
  let n = e >>> 0;
  for (let e = 0; e < t.id.length; e++)
    n = Math.imul(n ^ t.id.charCodeAt(e), 16777619) >>> 0;
  return n;
}
