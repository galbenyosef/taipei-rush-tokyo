// tokyo/assets/region-tokyo-A7LxHjud 63 — addcolorstop
// Lines 28205-28488 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var nse = (e, t, n, r) => {
    P(e, 0, 0, H, H, sd.kawara[3]);
    for (let t = 0; t < H; t += 21)
      for (let n = 0; n < H; n += 24) {
        let r = e.createLinearGradient(n, 0, n + 24, 0);
        (r.addColorStop(0, sd.kawara[1]),
          r.addColorStop(0.5, sd.kawara[0]),
          r.addColorStop(1, sd.kawara[2]),
          (e.fillStyle = r),
          e.fillRect(n, t, 24, 18),
          P(e, n, t + 18, 24, 3, `rgba(0,0,0,0.45)`));
      }
    ld(e, r, 0.08);
  },
  rse = (e, t, n, r) => {
    Vr(e, r, 0, 0, H, H, [150, 154, 150], !1);
    for (let t = 0; t < H; t += 64) P(e, t, 0, 2, H, `rgba(0,0,0,0.12)`);
    for (let t = 0; t < H; t += 64) P(e, 0, t, H, 2, `rgba(0,0,0,0.12)`);
    ld(e, r, 0.14);
  },
  Dd = (e, t, n, r) => {
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
  Od = [
    dd(0),
    dd(1),
    dd(2),
    dd(3),
    fd(0),
    fd(1),
    pd(0, `lace`),
    pd(1, `curtain`),
    Woe,
    md(0),
    md(1),
    md(2),
    pd(2, `curtain`),
    pd(0, `blind`),
    hd(0),
    hd(1),
    gd(0),
    gd(1),
    gd(2),
    Goe,
    Koe,
    _d(0),
    _d(1),
    _d(2),
    vd(0),
    vd(1),
    Cd(V.FOOD, xd(`#5a3a22`)),
    Cd(V.GOODS, bd()),
    Cd(V.NOODLE, xd(`#2a1612`), Td(`#3a2a20`)),
    Cd(V.CLINIC, Sd, Td()),
    Cd(V.LOBBY, bd(`#6a6e72`, `#9a9ea2`), Td(`#5a5e62`)),
    Yoe,
    Cd(V.CONV, Sd, void 0, [5, 16, 246, 234]),
    Cd(V.TEA, xd(`#3a2a1a`)),
    Cd(V.GAME, bd(`#1a1420`, `#ff40a0`)),
    Cd(V.DRUG, bd(`#f0d800`, `#fff6a0`)),
    Cd(V.BENTO, bd(`#e8e4dc`, `#d02a1a`)),
    Cd(V.LOTTERY, bd(`#c01010`, `#ffe000`)),
    Joe,
    Cd(V.BICYCLE, bd(`#5a5e60`)),
    Xoe,
    Ed(0),
    Ed(1),
    Zoe,
    Qoe,
    $oe,
    Cd(V.OLDSHOP, xd(`#2a1a10`)),
    ese,
    nse,
    rse,
    (e, t, n, r) => Dd(e, r, !0, sd.tin),
    (e, t, n, r) => {
      (Dd(e, r, !0, sd.tin),
        qr(e, t, r, 70, 60, 116, 90, {
          look: `lace`,
          tone: 4 + sd.tone,
          frame: sd.frame,
        }));
    },
    (e, t, n, r) => Dd(e, r, !1, [230, 230, 228]),
    (e, t, n, r) => {
      P(e, 0, 0, H, H, `#f2f0ec`);
      for (let t = 0; t < H; t += 4) P(e, 0, t, H, 1, `rgba(0,0,0,0.03)`);
      (P(e, 0, 216, H, 40, `#e0ded8`), P(e, 0, 216, H, 2, `rgba(0,0,0,0.15)`));
    },
    (e, t, n, r) => Ur(e, r, 0, 0, H, H, sd.stone.panel, 128, 64),
    (e, t, n, r) => Vr(e, r, 0, 0, H, H, sd.concrete),
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
        cd(e, r, 0, H, 236, 30, 4, 0.2));
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
      (P(e, 196, 40, 46, 176, `#dcdbd6`), cd(e, r, 0, H, 236, 20, 3, 0.14));
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
      ld(e, r, 0.12);
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
        cd(e, r, 0, H, 18, 160, 6, 0.18),
        P(e, 200, 216, 10, 14, `#8a8e90`));
    },
    Cd(V.SALON, bd(`#2a2a2e`), Td(`#2a2a2e`)),
    Cd(V.PHONE, bd(`#3a2c1e`)),
    Cd(V.CAFE, xd(`#3a2414`)),
    Cd(V.BOUTIQUE, bd(`#1e1e20`)),
    Cd(V.ESTATE, bd(`#3a3e42`), (e, t, n, r) => {
      for (let n = 0; n < 2; n++)
        for (let i = 0; i < 6; i++) {
          if (r.chance(0.2)) continue;
          let a = 16 + i * 38,
            o = 40 + n * 44;
          (wd(e, t, a, o, 32, 38, `#fbfbf6`),
            P(e, a, o, 32, 7, r.chance(0.5) ? `#d4231a` : `#1c4fa3`),
            P(e, a + 4, o + 11, 24, 12, `#c8d0d8`));
        }
    }),
    Cd(V.BAKERY, xd(`#6a4a2a`)),
    Cd(V.CONV_DOOR, Sd, Td(`#8f989d`), [5, 16, 246, 234]),
    (e, t, n, r) => {
      Ur(e, r, 0, 0, H, H, sd.stone.plinth, 128, 64);
    },
    Cd(V.BOOKS, bd(`#3a2a1e`)),
    Cd(V.PARTS, bd(`#3a4a5a`)),
    Cd(V.GROCER, bd(`#4a3f35`)),
    Cd(V.GRILL, xd(`#3a2014`)),
    Cd(V.FLORIST, bd(`#2f4a34`)),
    Cd(V.LOUNGE, xd(`#120b12`)),
    Cd(V.GYM, bd(`#141414`)),
    Cd(V.LAUNDRY, Sd),
    (e, t, n, r) => {
      (P(e, 0, 0, H, H, sd.corridor.wall),
        P(e, 0, 0, H, 22, `#e2ded6`),
        P(e, 120, 6, 24, 8, `#fff6dc`),
        P(e, 20, 40, 84, 200, sd.corridor.door),
        P(e, 24, 44, 76, 196, `#a8957e`),
        P(e, 86, 140, 6, 14, `#3a3430`),
        qr(e, t, r, 140, 70, 90, 56, {
          look: `frosted`,
          panes: 2,
          sill: !1,
          frame: sd.frame,
        }));
      for (let t = 144; t < 230; t += 10) P(e, t, 66, 3, 64, `#8a8e90`);
      (P(e, 110, 60, 22, 40, `#e8e6e0`),
        P(e, 0, 168, H, 88, `#d8d4cc`),
        P(e, 0, 164, H, 6, `#a8acae`),
        Rr(t, 0, 164, H, 92, !0),
        cd(e, r, 0, H, 170, 70, 5, 0.16));
    },
    (e, t, n, r) => {
      P(e, 0, 0, H, H, `#e6e0d4`);
      for (let t = 0; t < H; t += 32)
        (zr(e, t + 2, 0, 22, H, sd.depato[0], sd.depato[1]),
          P(e, t + 24, 0, 8, H, sd.depato[2]));
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
      md(0)(e, t, n, r);
      let i = sd.letters;
      for (let n = 0; n < 2; n++) {
        let a = i[Math.floor(r.next() * i.length)];
        for (let r = 0; r < 4; r++)
          wd(e, t, 22 + n * 118 + r * 24, 70, 18, 22, a);
      }
    },
    (e, t, n, r) => Ur(e, r, 0, 0, H, H, sd.stone.plain, 128, 42),
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
function ise(e, t, n = Bu) {
  let r = kd(e, t, n, () => !1);
  for (;;) {
    let e = r.next();
    if (e.done) return e.value;
  }
}
function ase(e, t) {
  if (t.id === Bu.id) return e;
  let n = e >>> 0;
  for (let e = 0; e < t.id.length; e++)
    n = Math.imul(n ^ t.id.charCodeAt(e), 16777619) >>> 0;
  return n;
}
