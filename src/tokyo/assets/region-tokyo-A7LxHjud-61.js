// tokyo/assets/region-tokyo-A7LxHjud 61 — next
// Lines 27731-28066 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
((ad[V.FOOD] = poe),
  (ad[V.GOODS] = hoe),
  (ad[V.NOODLE] = moe),
  (ad[V.CLINIC] = goe),
  (ad[V.LOBBY] = _oe),
  (ad[V.CONV] = voe),
  (ad[V.TEA] = yoe),
  (ad[V.GAME] = boe),
  (ad[V.DRUG] = xoe),
  (ad[V.BENTO] = Soe),
  (ad[V.LOTTERY] = Coe),
  (ad[V.BICYCLE] = woe),
  (ad[V.OLDSHOP] = Toe),
  (ad[V.SALON] = Eoe),
  (ad[V.PHONE] = Doe),
  (ad[V.CAFE] = Ooe),
  (ad[V.BOUTIQUE] = koe),
  (ad[V.ESTATE] = Aoe),
  (ad[V.BAKERY] = joe),
  (ad[V.CONV_DOOR] = Moe),
  (ad[V.BOOKS] = Noe),
  (ad[V.PARTS] = Poe),
  (ad[V.GROCER] = Foe),
  (ad[V.GRILL] = Ioe),
  (ad[V.FLORIST] = Loe),
  (ad[V.LOUNGE] = Roe),
  (ad[V.GYM] = zoe),
  (ad[V.LAUNDRY] = Boe));
function Voe(e, t, n) {
  let r = ad[t];
  r &&
    (e.save(),
    e.beginPath(),
    e.rect(Uu, Gu, qu, Ju),
    e.clip(),
    r(e, n),
    e.restore());
}
var od = [232, 228, 220],
  H = 256,
  sd = Bu,
  cd = (e, t, n, r, i, a, o, s = 0.16) =>
    xne(e, t, n, r, i, a, o, s * sd.streak),
  ld = (e, t, n = 0.1) => Sne(e, t, n * sd.dirt);
function ud(e, t, n = od) {
  let r = sd.wall.base;
  Hoe(
    e,
    t,
    n === od
      ? r
      : [(r[0] * n[0]) / od[0], (r[1] * n[1]) / od[1], (r[2] * n[2]) / od[2]],
    0,
    0,
    H,
    H,
  );
}
function Hoe(e, t, n, r, i, a, o) {
  let s = sd.wall;
  switch (s.kind) {
    case `tile`:
      Br(e, t, r, i, a, o, n, s.bw, s.bh, s.grout);
      break;
    case `scratch`:
      Br(e, t, r, i, a, o, n, s.bw, s.bh, s.grout);
      for (let n = r; n < r + a; n += 2.4)
        P(e, n, i, 0.9, o, `rgba(0,0,0,${0.05 + t.next() * 0.05})`);
      break;
    case `brick`:
      Br(e, t, r, i, a, o, n, s.bw, s.bh, s.grout);
      for (let n = 0; n < 40; n++)
        P(
          e,
          r + t.next() * a,
          i + t.next() * o,
          s.bw - 1.2,
          s.bh - 1.2,
          `rgba(${t.chance(0.5) ? `90,40,30` : `255,230,210`},${0.06 + t.next() * 0.08})`,
        );
      break;
    case `mosaic`:
      P(e, r, i, a, o, Ir(n, s.grout));
      for (let c = i; c < i + o; c += s.bh)
        for (let i = r; i < r + a; i += s.bw)
          P(e, i + 0.6, c + 0.6, s.bw - 1.2, s.bh - 1.2, Lr(t, n, 0.12));
      break;
    case `mortar`:
      P(e, r, i, a, o, Pr(n[0], n[1], n[2]));
      for (let n = 0; n < (a * o) / 90; n++) {
        let n = t.chance(0.5);
        P(
          e,
          r + t.next() * a,
          i + t.next() * o,
          1.5 + t.next() * 2,
          1.5 + t.next() * 2,
          n ? `rgba(255,255,255,0.10)` : `rgba(0,0,0,0.08)`,
        );
      }
      for (let n = 0; n < 6; n++)
        P(
          e,
          r + t.next() * a,
          i + t.next() * o,
          30 + t.next() * 60,
          10 + t.next() * 30,
          `rgba(0,0,0,${0.015 + t.next() * 0.02})`,
        );
      break;
    case `concrete`:
      Vr(e, t, r, i, a, o, n, !0);
      for (let t = r + 85; t < r + a; t += 85)
        P(e, t, i, 1.2, o, `rgba(0,0,0,0.10)`);
      P(e, r, i + o / 2, a, 1.2, `rgba(0,0,0,0.10)`);
      break;
    case `alc`:
      Hr(e, t, r, i, a, o, n, s.bh);
      break;
    case `stone`:
      Ur(e, t, r, i, a, o, n, s.bw, s.bh);
      break;
    case `panel`:
      zr(e, r, i, a, o, Ir(n, 1.04), Ir(n, 0.94));
      for (let t = r; t < r + a; t += s.bw)
        P(e, t, i, 2, o, `rgba(0,0,0,0.18)`);
      for (let t = i; t < i + o; t += s.bh)
        P(e, r, t, a, 2, `rgba(0,0,0,0.16)`);
  }
}
function Uoe(e, t = 242, n = 14, r = `#d8d6d0`) {
  (P(e, 0, t, H, n, r),
    P(e, 0, t, H, 1.5, `rgba(255,255,255,0.3)`),
    P(e, 0, t + n - 2, H, 2, `rgba(0,0,0,0.18)`));
}
var dd = (e) => (t, n, r, i) => {
    (ud(t, i),
      qr(t, n, i, 40, 52, 176, 122, {
        look: sd.looks[e],
        tone: e * 2 + sd.tone,
        frame: sd.frame,
      }),
      e === 1 && P(t, 186, 34, 34, 10, `#c4c6c4`),
      cd(t, i, 40, 216, 186, 60, 3, 0.14),
      ld(t, i, 0.06));
  },
  fd = (e) => (t, n, r, i) => {
    (ud(t, i),
      qr(t, n, i, 92, 64, 72, 58, {
        look: `frosted`,
        panes: 1,
        frame: sd.frame,
      }),
      (t.fillStyle = `#c8cac8`),
      t.beginPath(),
      t.arc(e ? 200 : 56, 92, 13, 0, Math.PI * 2),
      t.fill(),
      P(t, (e ? 200 : 56) - 13, 92, 26, 6, `#a8aaa8`),
      P(t, e ? 18 : 230, 0, 8, H, `#b4b6b2`),
      cd(t, i, 80, 170, 130, 70, 3, 0.18));
  },
  pd = (e, t) => (n, r, i, a) => {
    (P(n, 0, 0, H, H, `#3e3c38`),
      P(n, 0, 0, H, 18, `#d4d2cc`),
      P(n, 10, 22, 236, 218, sd.bframe));
    for (let i = 0; i < 2; i++)
      (Kr(n, a, 14 + i * 114 + 3, 29, 108, 208, t, e * 3 + i),
        Rr(r, 14 + i * 114 + 3, 29, 108, 208, !1));
    if ((P(n, 125, 26, 6, 214, sd.bframe), e === 1)) {
      P(n, 4, 52, 248, 3, `#d8dcd8`);
      let e = 16;
      for (; e < 226;) {
        let t = 14 + a.next() * 22,
          i = 34 + a.next() * 50,
          o = [
            `#f4f4f0`,
            `#a8c8e8`,
            `#e8b0b8`,
            `#3a4a6a`,
            `#f0e0a0`,
            `#d8d8d8`,
            `#6a8a5a`,
          ][Math.floor(a.next() * 7)];
        (P(n, e, 55, t, i, o),
          P(n, e, 55, t, 3, `rgba(0,0,0,0.12)`),
          Rr(r, e, 55, t, i, !0),
          (e += t + 4 + a.next() * 10));
      }
    }
    if (e === 2) {
      P(n, 40, 150, 120, 70, `#e8e2f0`);
      for (let e = 0; e < 6; e++) P(n, 40, 156 + e * 11, 120, 2, `#b8b0d0`);
      Rr(r, 40, 150, 120, 70, !0);
    }
    (P(n, 170, 200, 60, 40, `#ecebe6`),
      (n.fillStyle = `#9a9c9a`),
      n.beginPath(),
      n.arc(195, 220, 14, 0, Math.PI * 2),
      n.fill(),
      Rr(r, 170, 200, 60, 40, !0));
  },
  Woe = (e, t, n, r) => {
    (Vr(e, r, 0, 0, H, H, [214, 212, 206]), P(e, 96, 20, 64, 216, `#9aa6aa`));
    for (let t = 22; t < 234; t += 16)
      for (let n = 98; n < 158; n += 16)
        zr(e, n, t, 14, 14, `#dfe8ea`, `#b8c6ca`);
    Rr(t, 98, 22, 60, 212, !1);
  },
  md = (e) => (t, n, r, i) => {
    (ud(t, i, [226, 222, 214]),
      Uoe(t, 210, 46, `#c8c4bc`),
      P(t, 8, 16, 240, 180, sd.zframe));
    let a = sd.zlooks[e];
    for (let e = 0; e < 2; e++)
      (Kr(t, i, 10 + e * 118 + 3, 21, 112, 170, a, e),
        Rr(n, 10 + e * 118 + 3, 21, 112, 170, !1));
    (P(t, 125, 18, 6, 176, sd.zframe), P(t, 10, 144.72, 236, 4, sd.zframe));
  },
  hd = (e) => (t, n, r, i) => {
    let a = sd.ribbon.spandrel;
    P(t, 0, 0, H, H, Pr(...a));
    for (let e = 0; e < H; e += 32) P(t, 0, e, H, 1.5, `rgba(0,0,0,0.1)`);
    if ((Kr(t, i, 0, 30, H, 150, `office`), e))
      for (let e = 0; e < 4; e++)
        i.chance(0.5) &&
          P(t, e * 64 + 4, 30, 56, 150 * (0.25 + i.next() * 0.4), `#c8ccc8`);
    Rr(n, 0, 30, H, 150, !1);
    for (let e = 0; e <= 4; e++)
      (P(t, e * 64 - 3, 30, 6, 150, sd.ribbon.mullion),
        Rr(n, e * 64 - 3, 30, 6, 150, !0));
    (P(t, 0, 26, H, 4, sd.ribbon.mullion),
      P(t, 0, 180, H, 5, `#6a7278`),
      cd(t, i, 0, H, 186, 50, 4, 0.12));
  },
  gd = (e) => (t, n, r, i) => {
    (zr(t, 0, 0, H, H, sd.cw.top, sd.cw.bottom),
      e === 2 && P(t, 0, 0, H, H * 0.3, `rgba(210,214,212,0.55)`));
    for (let e = 0; e < 3; e++)
      ((t.fillStyle = `rgba(255,255,255,${sd.cw.refl})`),
        t.beginPath(),
        t.ellipse(
          i.next() * H,
          i.next() * H * 0.6,
          40 + i.next() * 50,
          12 + i.next() * 10,
          0,
          0,
          Math.PI * 2,
        ),
        t.fill());
    (Rr(n, 0, 0, H, H, !1),
      P(t, 0, 226, H, 30, sd.cw.slab),
      Rr(n, 0, 226, H, 30, !0));
    for (let e = 0; e <= 2; e++)
      (P(t, e * 128 - 4, 0, 8, H, sd.cw.mullion),
        Rr(n, e * 128 - 4, 0, 8, H, !0));
  },
  Goe = (e, t, n, r) => {
    (Ur(e, r, 0, 0, H, H, sd.stone.lobby),
      zr(e, 10, 14, 236, 234, `#8a8070`, `#4a4238`),
      P(e, 50, 198, 140, 30, `#3a3028`),
      P(e, 160, 54, 60, 80, `#a07a50`));
    for (let t of [24, 220])
      (P(e, t, 208, 14, 40, `#3a3a36`),
        (e.fillStyle = `#3a6a34`),
        e.beginPath(),
        e.arc(t + 7, 196, 16, 0, Math.PI * 2),
        e.fill());
    for (let t = 0; t < 5; t++) P(e, 20 + t * 48, 22, 26, 3, `#fff4dc`);
    (zr(e, 10, 14, 236, 105.3, `rgba(200,214,226,0.35)`, `rgba(200,214,226,0)`),
      Rr(t, 10, 14, 236, 234, !1));
    for (let n = 0; n <= 3; n++)
      (P(e, 10 + (n * 236) / 3 - 3, 14, 6, 234, `#5a5e62`),
        Rr(t, 10 + (n * 236) / 3 - 3, 14, 6, 234, !0));
  },
  Koe = (e, t, n, r) => {
    (Ur(e, r, 0, 0, H, H, sd.stone.win, 64, 32),
      P(e, 58, 26, 140, 192, `#a89c8a`),
      P(e, 62, 30, 132, 184, `#5a5650`),
      Kr(e, r, 66, 34, 124, 176, `office`),
      Rr(t, 66, 34, 124, 176, !1),
      P(e, 125, 34, 6, 176, `#4a4844`),
      P(e, 66, 86.8, 124, 5, `#4a4844`),
      P(e, 54, 218, 148, 8, `#c8bca8`));
  },
  _d = (e) => (t, n, r, i) => {
    (e === 0
      ? (Hr(t, i, 0, 0, H, H, sd.side.alc), cd(t, i, 0, H, 0, 120, 5, 0.12))
      : e === 1
        ? (Vr(t, i, 0, 0, H, H, sd.side.concrete),
          cd(t, i, 0, H, 0, 120, 4, 0.1))
        : (ud(t, i),
          qr(t, n, i, 104, 80, 48, 70, {
            look: `frosted`,
            panes: 1,
            frame: sd.frame,
          }),
          cd(t, i, 90, 170, 160, 60, 2, 0.16)),
      ld(t, i, 0.08));
  },
  vd = (e) => (t, n, r, i) => {
    let a = sd.shutter[+!!e];
    (P(t, 0, 0, H, H, a), P(t, 0, 0, H, 30, e ? `#a8a494` : `#9a9ea0`));
    for (let e = 32; e < H; e += 7)
      (P(t, 0, e, H, 1.5, `rgba(0,0,0,0.16)`),
        P(t, 0, e + 1.5, H, 1, `rgba(255,255,255,0.18)`));
    (P(t, 0, 248, H, 8, `#6a6e70`),
      P(t, 60, 232, 20, 5, `#5a5e60`),
      P(t, 176, 232, 20, 5, `#5a5e60`),
      e && P(t, 30 + i.next() * 150, 120, 26, 34, `#f4f0e0`),
      cd(t, i, 0, H, 30, 80, 4, 0.1),
      P(t, 0, 0, 6, H, `#7a7e80`),
      P(t, 250, 0, 6, H, `#7a7e80`),
      qoe(t, i, sd.graffiti));
  };
function qoe(e, t, n) {
  if (n <= 0) return;
  let r = t.fork(1958);
  if (!r.chance(n)) return;
  let i = [`#d8304a`, `#3070d8`, `#30b070`, `#a050d0`, `#f08030`];
  ((e.lineCap = `round`),
    (e.lineJoin = `round`),
    (e.strokeStyle = r.chance(0.5) ? `#141414` : i[r.int(0, i.length - 1)]),
    (e.lineWidth = 2.5 + r.next() * 2));
  let a = 30 + r.next() * 120,
    o = 60 + r.next() * 40;
  (e.beginPath(), e.moveTo(a, o));
  for (let t = 0; t < 6; t++)
    e.quadraticCurveTo(
      a + t * 14 + r.next() * 10,
      o - 18 + r.next() * 36,
      a + (t + 1) * 15,
      o + (r.next() - 0.5) * 20,
    );
  (e.stroke(), (e.lineCap = `butt`), (e.lineJoin = `miter`));
}
