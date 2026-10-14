// tokyo/assets/region-tokyo-BcM3fReU 113 — fillrect
// Lines 52026-52198 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var WE = (e, t, n) => t - e > 40 && t - n > 30,
  GE = 2048,
  KE = 2048,
  qE = 8,
  JE = {
    white: [32, 32],
    brick: [256, 256],
    ekiBay: [256, 320],
    ekiBay3: [256, 256],
    ekiArch: [256, 320],
    ekiDoor: [256, 320],
    slate: [256, 256],
    copper: [256, 256],
    granite: [256, 256],
    ishigaki: [256, 256],
    gravel: [256, 256],
    kawara: [256, 256],
    glass: [256, 256],
    forumGlass: [128, 128],
    forumWood: [128, 128],
    office: [256, 256],
    wakoBay: [256, 384],
    wakoShow: [256, 256],
    clock: [256, 256],
    kabukiWall: [256, 256],
    kabukiSign: [384, 128],
    nobori: [256, 384],
    forumSign: [512, 112],
    lantern: [128, 160],
    shoji: [128, 128],
    plaster: [256, 256],
    doors: [256, 256],
    paving: [256, 256],
    lawn: [128, 128],
    gtGlass: [256, 256],
    flag: [96, 64],
    signTaxi: [384, 96],
    signBus: [384, 96],
    signYaesu: [384, 96],
    nbPlaques: [96, 256],
    nbBoard: [320, 96],
    nbGenpyo: [128, 128],
    nbRelief: [128, 128],
    nbGate: [256, 48],
    nbCage: [96, 64],
    benWall: [256, 256],
    benRack: [256, 128],
    benMisc: [256, 256],
    akibaFront: [512, 144],
    akibaGlass: [320, 352],
    akibaSigns: [128, 64],
    myojinOrn: [256, 256],
    myojinSign: [256, 256],
    myojinShop: [256, 256],
    tnmBay: [256, 256],
    tnmKawara: [128, 256],
    tnmBanner: [128, 320],
    tnmPlaque: [256, 128],
    saigoPlaque: [128, 128],
    uenoWin: [96, 288],
    uenoBay: [192, 192],
    uenoSign: [512, 64],
    uenoMisc: [256, 128],
    uenoVision: [192, 64],
    lcMidGlass: [256, 256],
    lcTkGrid: [256, 256],
    lcNet: [256, 256],
    lcSigns: [320, 192],
  };
function YE() {
  let e = {},
    t = qE,
    n = qE,
    r = 0,
    i = Object.entries(JE).map((e, t) => [e, t]);
  i.sort((e, t) => t[0][1][1] - e[0][1][1] || e[1] - t[1]);
  for (let [[a, [o, s]]] of i) {
    if (
      (t + o + qE > 2048 && ((t = qE), (n += r + 16), (r = 0)),
      n + s + qE > 2048)
    )
      throw Error(`[landmarks atlas] page full at ${a}`);
    ((e[a] = [t, n, o, s]), (t += o + 16), (r = Math.max(r, s)));
  }
  return e;
}
function XE(e) {
  let t = e >>> 0;
  return () => {
    t = (t + 1831565813) >>> 0;
    let e = t;
    return (
      (e = Math.imul(e ^ (e >>> 15), e | 1)),
      (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
}
var ZE = (e, t, n) => `rgb(${e | 0},${t | 0},${n | 0})`;
function QE(e, t, n, r, i, a, o, s, c = !0) {
  let l = XE(a);
  for (let a = 0; a < o; a++) {
    let a = c ? 0 : 255;
    ((e.fillStyle = `rgba(${a},${a},${a},${(s * l()).toFixed(3)})`),
      e.fillRect(t + l() * r, n + l() * i, 1 + l() * 2, 1 + l() * 2));
  }
}
function $E(e, t, n, r, i, a, o, s, c = [146, 58, 40]) {
  let l = XE(s);
  ((e.fillStyle = `#b9ab98`), e.fillRect(t, n, r, i));
  let u = i / a,
    d = r / o;
  for (let i = 0; i < a; i++) {
    let a = i % 2 ? d / 2 : 0;
    for (let s = -1; s <= o; s++) {
      let o = t + a + s * d,
        f = 0.82 + l() * 0.3,
        p = l();
      e.fillStyle = ZE(c[0] * f + (p > 0.92 ? 18 : 0), c[1] * f, c[2] * f);
      let m = Math.max(t, o + 0.8),
        h = Math.min(t + r, o + d - 0.8);
      h > m && e.fillRect(m, n + i * u + 0.8, h - m, u - 1.6);
    }
  }
  QE(e, t, n, r, i, s + 1, (r * i) / 40, 0.18);
}
function eD(e, t, n, r, i, a, o = [222, 216, 202], s = 4) {
  let c = XE(a);
  ((e.fillStyle = ZE(o[0], o[1], o[2])),
    e.fillRect(t, n, r, i),
    (e.fillStyle = `rgba(90,80,70,0.35)`));
  for (let a = 1; a < s; a++)
    e.fillRect(t + (r * a) / s + (c() - 0.5) * 6, n, 1.2, i);
  (e.fillRect(t, n + i - 1.2, r, 1.2),
    QE(e, t, n, r, i, a + 7, (r * i) / 30, 0.12));
}
function tD(e, t, n, r, i, a, o = !1) {
  ((e.fillStyle = `#2b2622`),
    o
      ? (e.beginPath(),
        e.moveTo(t, n + i),
        e.lineTo(t, n + r / 2),
        e.arc(t + r / 2, n + r / 2, r / 2, Math.PI, 0),
        e.lineTo(t + r, n + i),
        e.closePath(),
        e.fill())
      : e.fillRect(t, n, r, i));
  let s = t + 3,
    c = n + 3,
    l = r - 6,
    u = i - 6,
    d = e.createLinearGradient(s, c, s, c + u);
  (d.addColorStop(0, `#d8d2c2`),
    d.addColorStop(1, `#b8b0a0`),
    (e.fillStyle = d),
    o
      ? (e.beginPath(),
        e.moveTo(s, c + u),
        e.lineTo(s, c + l / 2),
        e.arc(s + l / 2, c + l / 2, l / 2, Math.PI, 0),
        e.lineTo(s + l, c + u),
        e.closePath(),
        e.fill())
      : e.fillRect(s, c, l, u),
    (e.fillStyle = `rgba(120,110,95,0.25)`));
  for (let t = 1; t < 6; t++)
    e.fillRect(s + (l * t) / 6, c + (o ? l / 2 : 0), 1.5, u - (o ? l / 2 : 0));
  ((e.fillStyle = `#efece4`),
    e.fillRect(s + l / 2 - 1.5, c, 3, u),
    e.fillRect(s, c + u * 0.55, l, 3),
    e.fillRect(s, c + u * 0.25, l, 2),
    a(s, c, l, u, 1));
}
