// tokyo__assets__region-tokyo-BcM3fReU 35 — next
// Lines 19560-19830 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
((bf[U.FOOD] = Kd),
  (bf[U.GOODS] = Jd),
  (bf[U.NOODLE] = qd),
  (bf[U.CLINIC] = Yd),
  (bf[U.LOBBY] = Xd),
  (bf[U.CONV] = Zd),
  (bf[U.TEA] = Qd),
  (bf[U.GAME] = $d),
  (bf[U.DRUG] = ef),
  (bf[U.BENTO] = tf),
  (bf[U.LOTTERY] = nf),
  (bf[U.BICYCLE] = rf),
  (bf[U.OLDSHOP] = af),
  (bf[U.SALON] = of),
  (bf[U.PHONE] = sf),
  (bf[U.CAFE] = cf),
  (bf[U.BOUTIQUE] = lf),
  (bf[U.ESTATE] = uf),
  (bf[U.BAKERY] = See),
  (bf[U.CONV_DOOR] = df),
  (bf[U.BOOKS] = ff),
  (bf[U.PARTS] = pf),
  (bf[U.GROCER] = mf),
  (bf[U.GRILL] = hf),
  (bf[U.FLORIST] = gf),
  (bf[U.LOUNGE] = _f),
  (bf[U.GYM] = vf),
  (bf[U.LAUNDRY] = yf));
function xf(e, t, n) {
  let r = bf[t];
  r &&
    (e.save(),
    e.beginPath(),
    e.rect(Dd, kd, jd, Md),
    e.clip(),
    r(e, n),
    e.restore());
}
var Sf = [232, 228, 220],
  W = 256;
function Cf(e, t, n = Sf) {
  ha(e, t, 0, 0, W, W, n, 12, 6);
}
function wf(e, t = 242, n = 14, r = `#d8d6d0`) {
  (I(e, 0, t, W, n, r),
    I(e, 0, t, W, 1.5, `rgba(255,255,255,0.3)`),
    I(e, 0, t + n - 2, W, 2, `rgba(0,0,0,0.18)`));
}
var Tf = [`lace`, `curtain`, `blind`, `frosted`],
  Ef = (e) => (t, n, r, i) => {
    (Cf(t, i),
      wa(t, n, i, 40, 52, 176, 122, { look: Tf[e], tone: e * 2 }),
      e === 1 && I(t, 186, 34, 34, 10, `#c4c6c4`),
      ba(t, i, 40, 216, 186, 60, 3, 0.14),
      xa(t, i, 0.06));
  },
  Df = (e) => (t, n, r, i) => {
    (Cf(t, i),
      wa(t, n, i, 92, 64, 72, 58, { look: `frosted`, panes: 1 }),
      (t.fillStyle = `#c8cac8`),
      t.beginPath(),
      t.arc(e ? 200 : 56, 92, 13, 0, Math.PI * 2),
      t.fill(),
      I(t, (e ? 200 : 56) - 13, 92, 26, 6, `#a8aaa8`),
      I(t, e ? 18 : 230, 0, 8, W, `#b4b6b2`),
      ba(t, i, 80, 170, 130, 70, 3, 0.18));
  },
  Of = (e, t) => (n, r, i, a) => {
    (I(n, 0, 0, W, W, `#3e3c38`),
      I(n, 0, 0, W, 18, `#d4d2cc`),
      I(n, 10, 22, 236, 218, `#a8acae`));
    for (let i = 0; i < 2; i++)
      (Ca(n, a, 14 + i * 114 + 3, 29, 108, 208, t, e * 3 + i),
        pa(r, 14 + i * 114 + 3, 29, 108, 208, !1));
    if ((I(n, 125, 26, 6, 214, `#a8acae`), e === 1)) {
      I(n, 4, 52, 248, 3, `#d8dcd8`);
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
        (I(n, e, 55, t, i, o),
          I(n, e, 55, t, 3, `rgba(0,0,0,0.12)`),
          pa(r, e, 55, t, i, !0),
          (e += t + 4 + a.next() * 10));
      }
    }
    if (e === 2) {
      I(n, 40, 150, 120, 70, `#e8e2f0`);
      for (let e = 0; e < 6; e++) I(n, 40, 156 + e * 11, 120, 2, `#b8b0d0`);
      pa(r, 40, 150, 120, 70, !0);
    }
    (I(n, 170, 200, 60, 40, `#ecebe6`),
      (n.fillStyle = `#9a9c9a`),
      n.beginPath(),
      n.arc(195, 220, 14, 0, Math.PI * 2),
      n.fill(),
      pa(r, 170, 200, 60, 40, !0));
  },
  kf = (e, t, n, r) => {
    (ga(e, r, 0, 0, W, W, [214, 212, 206]), I(e, 96, 20, 64, 216, `#9aa6aa`));
    for (let t = 22; t < 234; t += 16)
      for (let n = 98; n < 158; n += 16)
        ma(e, n, t, 14, 14, `#dfe8ea`, `#b8c6ca`);
    pa(t, 98, 22, 60, 212, !1);
  },
  Af = (e) => (t, n, r, i) => {
    (Cf(t, i, [226, 222, 214]),
      wf(t, 210, 46, `#c8c4bc`),
      I(t, 8, 16, 240, 180, `#a0a4a6`));
    let a = e === 0 ? `office` : e === 1 ? `blind` : `dark`;
    for (let e = 0; e < 2; e++)
      (Ca(t, i, 10 + e * 118 + 3, 21, 112, 170, a, e),
        pa(n, 10 + e * 118 + 3, 21, 112, 170, !1));
    (I(t, 125, 18, 6, 176, `#a0a4a6`), I(t, 10, 144.72, 236, 4, `#a0a4a6`));
  },
  jf = (e) => (t, n, r, i) => {
    I(t, 0, 0, W, W, la(212, 210, 204));
    for (let e = 0; e < W; e += 32) I(t, 0, e, W, 1.5, `rgba(0,0,0,0.1)`);
    if ((Ca(t, i, 0, 30, W, 150, `office`), e))
      for (let e = 0; e < 4; e++)
        i.chance(0.5) &&
          I(t, e * 64 + 4, 30, 56, 150 * (0.25 + i.next() * 0.4), `#c8ccc8`);
    pa(n, 0, 30, W, 150, !1);
    for (let e = 0; e <= 4; e++)
      (I(t, e * 64 - 3, 30, 6, 150, `#7a8288`),
        pa(n, e * 64 - 3, 30, 6, 150, !0));
    (I(t, 0, 26, W, 4, `#7a8288`),
      I(t, 0, 180, W, 5, `#6a7278`),
      ba(t, i, 0, W, 186, 50, 4, 0.12));
  },
  Mf = (e) => (t, n, r, i) => {
    (ma(t, 0, 0, W, W, `#a4bccb`, `#3c566a`),
      e === 2 && I(t, 0, 0, W, W * 0.3, `rgba(210,214,212,0.55)`));
    for (let e = 0; e < 3; e++)
      ((t.fillStyle = `rgba(255,255,255,0.08)`),
        t.beginPath(),
        t.ellipse(
          i.next() * W,
          i.next() * W * 0.6,
          40 + i.next() * 50,
          12 + i.next() * 10,
          0,
          0,
          Math.PI * 2,
        ),
        t.fill());
    (pa(n, 0, 0, W, W, !1),
      I(t, 0, 226, W, 30, `#4a5660`),
      pa(n, 0, 226, W, 30, !0));
    for (let e = 0; e <= 2; e++)
      (I(t, e * 128 - 4, 0, 8, W, `#7a848c`), pa(n, e * 128 - 4, 0, 8, W, !0));
  },
  Nf = (e, t, n, r) => {
    (va(e, r, 0, 0, W, W, [206, 198, 186]),
      ma(e, 10, 14, 236, 234, `#8a8070`, `#4a4238`),
      I(e, 50, 198, 140, 30, `#3a3028`),
      I(e, 160, 54, 60, 80, `#a07a50`));
    for (let t of [24, 220])
      (I(e, t, 208, 14, 40, `#3a3a36`),
        (e.fillStyle = `#3a6a34`),
        e.beginPath(),
        e.arc(t + 7, 196, 16, 0, Math.PI * 2),
        e.fill());
    for (let t = 0; t < 5; t++) I(e, 20 + t * 48, 22, 26, 3, `#fff4dc`);
    (ma(e, 10, 14, 236, 105.3, `rgba(200,214,226,0.35)`, `rgba(200,214,226,0)`),
      pa(t, 10, 14, 236, 234, !1));
    for (let n = 0; n <= 3; n++)
      (I(e, 10 + (n * 236) / 3 - 3, 14, 6, 234, `#5a5e62`),
        pa(t, 10 + (n * 236) / 3 - 3, 14, 6, 234, !0));
  },
  Pf = (e, t, n, r) => {
    (va(e, r, 0, 0, W, W, [222, 214, 200], 64, 32),
      I(e, 58, 26, 140, 192, `#a89c8a`),
      I(e, 62, 30, 132, 184, `#5a5650`),
      Ca(e, r, 66, 34, 124, 176, `office`),
      pa(t, 66, 34, 124, 176, !1),
      I(e, 125, 34, 6, 176, `#4a4844`),
      I(e, 66, 86.8, 124, 5, `#4a4844`),
      I(e, 54, 218, 148, 8, `#c8bca8`));
  },
  Ff = (e) => (t, n, r, i) => {
    (e === 0
      ? (_a(t, i, 0, 0, W, W, [222, 222, 216]), ba(t, i, 0, W, 0, 120, 5, 0.12))
      : e === 1
        ? (ga(t, i, 0, 0, W, W, [204, 202, 196]),
          ba(t, i, 0, W, 0, 120, 4, 0.1))
        : (Cf(t, i),
          wa(t, n, i, 104, 80, 48, 70, { look: `frosted`, panes: 1 }),
          ba(t, i, 90, 170, 160, 60, 2, 0.16)),
      xa(t, i, 0.08));
  },
  If = (e) => (t, n, r, i) => {
    (I(t, 0, 0, W, W, e ? `#cfcab8` : `#b8bcbe`),
      I(t, 0, 0, W, 30, e ? `#a8a494` : `#9a9ea0`));
    for (let e = 32; e < W; e += 7)
      (I(t, 0, e, W, 1.5, `rgba(0,0,0,0.16)`),
        I(t, 0, e + 1.5, W, 1, `rgba(255,255,255,0.18)`));
    (I(t, 0, 248, W, 8, `#6a6e70`),
      I(t, 60, 232, 20, 5, `#5a5e60`),
      I(t, 176, 232, 20, 5, `#5a5e60`),
      e && I(t, 30 + i.next() * 150, 120, 26, 34, `#f4f0e0`),
      ba(t, i, 0, W, 30, 80, 4, 0.1),
      I(t, 0, 0, 6, W, `#7a7e80`),
      I(t, 250, 0, 6, W, `#7a7e80`));
  },
  Lf = (e, t, n, r) => {
    (If(0)(e, t, n, r),
      I(e, 150, 110, 56, 138, `#a4a8aa`),
      I(e, 150, 110, 56, 2, `rgba(0,0,0,0.3)`),
      I(e, 195, 175, 6, 12, `#4a4e50`));
  },
  Rf = (e, t, n, r) => {
    (Cf(e, r, [214, 208, 198]),
      I(e, 70, 30, 100, 218, `#8a8072`),
      I(e, 76, 36, 88, 212, `#b8ad9c`),
      I(e, 148, 140, 8, 20, `#4a4440`),
      I(e, 180, 40, 30, 200, `#9aa0a4`),
      Ca(e, r, 184, 44, 22, 192, `frosted`),
      pa(t, 184, 44, 22, 192, !1),
      I(e, 30, 120, 14, 20, `#3a3e42`),
      I(e, 112, 12, 20, 12, `#fff4d8`),
      pa(t, 112, 12, 20, 12, !1));
  },
  zf = [Yn.x0, Yn.y0, Yn.x1 - Yn.x0, Yn.y1 - Yn.y0],
  Bf =
    (e = `#8e9294`, t = `#c4c8ca`) =>
    (n, r) => {
      (I(n, 0, 0, W, W, e),
        ma(n, 6, 3, 244, 20, t, da([150, 154, 156], 0.8)),
        I(n, 0, 248, W, 8, `#4a4744`),
        ba(n, r, 0, W, 24, 40, 2, 0.08));
    },
  Vf =
    (e = `#4a3020`) =>
    (t, n) => {
      I(t, 0, 0, W, W, e);
      for (let e = 0; e < W; e += 5) I(t, 0, e, W, 1, `rgba(0,0,0,0.1)`);
      (I(t, 0, 0, W, 24, `#2a1a10`),
        I(t, 0, 248, W, 8, `#3a3632`),
        ba(t, n, 0, W, 24, 30, 2, 0.06));
    },
  Hf = (e) => {
    (I(e, 0, 0, W, W, `#e6e8e8`),
      I(e, 0, 0, W, 20, `#cfd3d5`),
      I(e, 0, 250, W, 6, `#9aa0a4`));
  },
  Uf =
    (e, t, n, r = zf) =>
    (i, a, o, s) => {
      (I(i, r[0], r[1], r[2], r[3], `#9a9690`), xf(i, e, s), i.save());
      let c = new Path2D();
      (c.rect(0, 0, W, W),
        c.rect(r[0], r[1], r[2], r[3]),
        i.clip(c, `evenodd`),
        t(i, s),
        i.restore(),
        pa(a, r[0], r[1], r[2], r[3], !1),
        n?.(i, a, o, s));
    };
function Wf(e, t, n, r, i, a, o) {
  (I(e, n, r, i, a, o), pa(t, n, r, i, a, !0));
}
