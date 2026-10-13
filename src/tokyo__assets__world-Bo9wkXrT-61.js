// tokyo__assets__world-Bo9wkXrT 61 — fillstyle
// Lines 19587-19923 of readable/tokyo__assets__world-Bo9wkXrT.pretty.js (statement-aligned).
function xm(e, t, n, r) {
  return [e / bm, 1 - (t + r) / 768, (e + n) / bm, 1 - t / 768];
}
function Sm(e) {
  let t = (e - 1) % 24;
  return xm((t % 8) * 128 + 2, Math.floor(t / 8) * 48 + 2, 124, 44);
}
var Cm = xm(0, 192, 512, 96),
  wm = xm(512, 192, 256, 96),
  Tm = xm(768, 192, 256, 96);
function Em(e) {
  let t = e % 12;
  return xm((t % 6) * 160 + 2, 288 + Math.floor(t / 6) * 80 + 2, 156, 76);
}
function Dm(e) {
  return xm((e % 8) * 124 + 2, 450, 120, 36);
}
function Om(e) {
  let t = e % 16;
  return t < 8 ? xm(t * 128 + 3, 147, 122, 42) : Dm(t - 8);
}
function km(e) {
  return xm((e % 4) * 256 + 1, 513, 254, 126);
}
function Am(e) {
  return xm((e % 2) * 128 + 1, 641, 126, 126);
}
var jm = xm(257, 641, 254, 126),
  Mm = xm(513, 641, 126, 126),
  Nm = xm(641, 641, 254, 62),
  Pm = xm(641, 705, 126, 62);
function Fm() {
  let [e, t] = We(bm, 768);
  ((t.fillStyle = `#ffffff`), t.fillRect(0, 0, bm, 768));
  for (let e = 1; e <= 24; e++) {
    let n = e - 1,
      r = (n % 8) * 128,
      i = Math.floor(n / 8) * 48;
    ((t.fillStyle = `#0f4d63`),
      t.fillRect(r, i, 128, 48),
      (t.strokeStyle = `#e8f1f2`),
      (t.lineWidth = 2),
      t.strokeRect(r + 4, i + 4, 120, 40),
      (t.fillStyle = `#ffffff`),
      (t.textAlign = `center`),
      (t.textBaseline = `middle`),
      (t.font = `bold 22px ${q}`),
      t.fillText(`第${e}號水門`, r + 64, i + 20),
      (t.font = `bold 10px ${q}`),
      t.fillText(`WATER GATE ${e}`, r + 64, i + 38));
  }
  {
    let e = [
      [`便當`, `#c0392b`, `#fff4d6`],
      [`五金行`, `#1f4e79`, `#ffffff`],
      [`藥局`, `#1d7a46`, `#ffffff`],
      [`牛肉麵`, `#7b2d12`, `#ffe0a8`],
      [`水電行`, `#f2c14e`, `#1b1b1b`],
      [`早餐店`, `#e67e22`, `#ffffff`],
      [`機車行`, `#2c3e50`, `#ffd400`],
      [`自助餐`, `#8e44ad`, `#ffffff`],
    ];
    for (let n = 0; n < e.length; n++) {
      let [r, i, a] = e[n],
        o = n * 128;
      ((t.fillStyle = i),
        t.fillRect(o + 1, 146, 126, 46),
        (t.strokeStyle = a),
        (t.globalAlpha = 0.5),
        (t.lineWidth = 2),
        t.strokeRect(o + 4, 149, 120, 40),
        (t.globalAlpha = 1),
        (t.fillStyle = a),
        (t.textAlign = `center`),
        (t.textBaseline = `middle`),
        (t.font = `900 30px ${q}`),
        t.fillText(r, o + 64, 170, 114));
    }
  }
  {
    let e = t.createLinearGradient(0, 192, 0, 288);
    (e.addColorStop(0, `#3a2518`),
      e.addColorStop(1, `#23160e`),
      (t.fillStyle = e),
      t.fillRect(0, 192, 512, 96),
      (t.strokeStyle = `#d9a95b`),
      (t.lineWidth = 4),
      t.strokeRect(5, 197, 502, 86),
      (t.fillStyle = `#ffe2a8`),
      (t.textAlign = `center`),
      (t.textBaseline = `middle`),
      (t.font = `900 50px ${q}`),
      t.fillText(`大稻埕碼頭`, 256, 232),
      (t.font = `bold 17px ${q}`),
      t.fillText(`DADAOCHENG WHARF  ·  1851`, 256, 270));
  }
  ((t.fillStyle = `#1f6b3a`),
    t.fillRect(512, 192, 256, 96),
    (t.fillStyle = `#fff`),
    (t.textAlign = `center`),
    (t.textBaseline = `middle`),
    (t.font = `900 40px ${q}`),
    t.fillText(`河濱公園`, 640, 230),
    (t.font = `bold 16px ${q}`),
    t.fillText(`RIVERSIDE PARK`, 640, 268),
    (t.fillStyle = `#b3122e`),
    t.fillRect(768, 192, 256, 96),
    (t.fillStyle = `#fff`),
    (t.textAlign = `center`),
    (t.textBaseline = `middle`),
    (t.font = `900 44px ${q}`),
    t.fillText(`美樂華`, 896, 230),
    (t.font = `bold 18px ${q}`),
    t.fillText(`MIRA HAPPY`, 896, 268));
  let n = new Oe(9771),
    r = [
      `#f2c14e`,
      `#f78154`,
      `#4d9078`,
      `#5fad56`,
      `#b4436c`,
      `#3c6997`,
      `#f5f0e1`,
      `#1e2749`,
      `#ef476f`,
      `#06d6a0`,
      `#118ab2`,
      `#ffd166`,
    ];
  for (let e = 0; e < 12; e++) {
    let i = (e % 6) * 160,
      a = 288 + Math.floor(e / 6) * 80;
    switch (
      (t.save(),
      t.beginPath(),
      t.rect(i, a, 160, 80),
      t.clip(),
      (t.fillStyle = r[e % r.length]),
      t.fillRect(i, a, 160, 80),
      e)
    ) {
      case 0:
      case 6: {
        let n = t.createLinearGradient(0, a, 0, a + 80);
        (n.addColorStop(0, e === 0 ? `#ff9a5a` : `#2b2f6b`),
          n.addColorStop(1, e === 0 ? `#ffd28a` : `#b04a7a`),
          (t.fillStyle = n),
          t.fillRect(i, a, 160, 80),
          (t.fillStyle = e === 0 ? `#ffef9a` : `#ffe8f0`),
          t.beginPath(),
          t.arc(i + 118, a + 44, 14, 0, Math.PI * 2),
          t.fill(),
          (t.fillStyle = `#243447`));
        let r = i + 50;
        t.fillRect(r - 1, a + 6, 2, 8);
        for (let e = 0; e < 8; e++) {
          let n = a + 14 + e * 5.5;
          (t.beginPath(),
            t.moveTo(r - 4, n),
            t.lineTo(r + 4, n),
            t.lineTo(r + 6, n + 5.5),
            t.lineTo(r - 6, n + 5.5),
            t.fill());
        }
        t.fillRect(r - 9, a + 58, 18, 10);
        for (let e = 0; e < 14; e++)
          t.fillRect(i + e * 12, a + 64 - ((e * 37) % 13), 10, 20);
        t.fillStyle = `#1b3d5c`;
        for (let e = 0; e < 3; e++) {
          t.beginPath();
          for (let n = 0; n <= 160; n += 8)
            t.lineTo(i + n, a + 70 + e * 4 + Math.sin(n * 0.15 + e) * 2);
          (t.lineTo(i + 160, a + 80), t.lineTo(i, a + 80), t.fill());
        }
        break;
      }
      case 1:
      case 7:
        ((t.fillStyle = `#fff4dc`),
          t.beginPath(),
          t.moveTo(i + 58, a + 14),
          t.lineTo(i + 102, a + 14),
          t.lineTo(i + 96, a + 72),
          t.lineTo(i + 64, a + 72),
          t.fill(),
          (t.fillStyle = `#c98b5a`),
          t.fillRect(i + 60, a + 34, 40, 34),
          (t.fillStyle = `#2a1a12`));
        for (let e = 0; e < 12; e++)
          (t.beginPath(),
            t.arc(
              i + 66 + (e % 5) * 7,
              a + 58 + Math.floor(e / 5) * 5,
              2.6,
              0,
              7,
            ),
            t.fill());
        ((t.fillStyle = `#e63946`),
          t.fillRect(i + 84, a + 2, 5, 30),
          (t.fillStyle = `#fff`),
          (t.font = `900 16px ${q}`),
          (t.textAlign = `left`),
          t.fillText(`珍奶`, i + 8, a + 26));
        break;
      case 2:
      case 8:
        for (let n = 0; n < 4; n++) {
          let o = i + 12 + n * 38,
            s = a + 50;
          ((t.fillStyle = r[(e + n * 3) % r.length]),
            t.beginPath(),
            t.ellipse(o + 14, s, 16, 8, 0, 0, 7),
            t.fill(),
            (t.fillStyle = `#222`),
            t.beginPath(),
            t.arc(o + 2, s + 10, 5, 0, 7),
            t.fill(),
            t.beginPath(),
            t.arc(o + 26, s + 10, 5, 0, 7),
            t.fill(),
            (t.fillStyle = `#333`),
            t.fillRect(o + 22, s - 20, 3, 14));
        }
        ((t.fillStyle = `#1e2749`),
          (t.font = `900 18px ${q}`),
          (t.textAlign = `left`),
          t.fillText(`機車瀑布`, i + 8, a + 22));
        break;
      case 3:
      case 9:
        ((t.fillStyle = e === 3 ? `#8c1c13` : `#1d3557`),
          t.fillRect(i, a, 160, 80));
        for (let n = 0; n < 3; n++)
          for (let r = 0; r < 9; r++) {
            let o = i + r * 20 + (n % 2) * 10,
              s = a + 14 + n * 26;
            ((t.fillStyle = [`#f4d35e`, `#fdfcdc`, `#ee964b`][(r + n) % 3]),
              t.beginPath(),
              t.moveTo(o, s - 9),
              t.lineTo(o + 9, s),
              t.lineTo(o, s + 9),
              t.lineTo(o - 9, s),
              t.fill(),
              (t.fillStyle = e === 3 ? `#8c1c13` : `#1d3557`),
              t.fillRect(o - 2.5, s - 2.5, 5, 5));
          }
        break;
      case 4:
      case 10:
        ((t.fillStyle = `#12355b`), t.fillRect(i, a, 160, 80));
        for (let e = 0; e < 5; e++) {
          let n = i + 16 + e * 32,
            r = a + 16 + (e % 2) * 8;
          ((t.fillStyle = `#d62828`),
            t.beginPath(),
            t.ellipse(n, r + 10, 10, 13, 0, 0, 7),
            t.fill(),
            (t.fillStyle = `#fcbf49`),
            t.fillRect(n - 6, r - 4, 12, 3),
            t.fillRect(n - 6, r + 22, 12, 3));
        }
        for (let e = 0; e < 3; e++) {
          let n = i + 30 + e * 50,
            r = a + 64;
          ((t.fillStyle = e === 1 ? `#fff` : `#f77f00`),
            t.beginPath(),
            t.ellipse(n, r, 14, 6, 0.2, 0, 7),
            t.fill(),
            t.beginPath(),
            t.moveTo(n - 12, r),
            t.lineTo(n - 22, r - 6),
            t.lineTo(n - 22, r + 6),
            t.fill());
        }
        break;
      default: {
        for (let e = 0; e < 7; e++)
          ((t.fillStyle = r[n.int(0, r.length - 1)]),
            t.fillRect(
              i + n.range(-20, 150),
              a + n.range(-20, 70),
              n.range(20, 70),
              n.range(15, 50),
            ));
        ((t.fillStyle = `#ffffff`),
          (t.strokeStyle = `#1e2749`),
          (t.lineWidth = 4),
          (t.textAlign = `center`),
          (t.textBaseline = `middle`),
          (t.font = `900 34px ${q}`));
        let o = e === 5 ? `台北` : `TAIPEI`;
        (t.strokeText(o, i + 80, a + 42), t.fillText(o, i + 80, a + 42));
      }
    }
    ((t.globalAlpha = 0.12), (t.fillStyle = `#000`));
    for (let e = 0; e < 10; e++)
      t.fillRect(
        i + n.range(0, 160),
        a + n.range(0, 30),
        n.range(1, 3),
        n.range(20, 60),
      );
    ((t.globalAlpha = 1), t.restore());
  }
  let i = [
      `雞排`,
      `珍珠奶茶`,
      `精釀啤酒`,
      `烤魷魚`,
      `鹹酥雞`,
      `芒果冰`,
      `烤玉米`,
      `咖啡`,
    ],
    a = [
      `#e63946`,
      `#8d5524`,
      `#f4a261`,
      `#264653`,
      `#e76f51`,
      `#ffb703`,
      `#2a9d8f`,
      `#3d405b`,
    ];
  for (let e = 0; e < 8; e++) {
    let n = e * 124;
    ((t.fillStyle = a[e]),
      t.fillRect(n, 448, 124, 40),
      (t.fillStyle = `#fff`),
      (t.textAlign = `center`),
      (t.textBaseline = `middle`),
      (t.font = `900 24px ${q}`),
      t.fillText(i[e], n + 62, 469));
  }
  return (Im(t), qe(e, { srgb: !0, mipmaps: !0, anisotropy: 4 }));
}
