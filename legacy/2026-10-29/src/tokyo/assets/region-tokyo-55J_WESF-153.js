// tokyo/assets/region-tokyo-55J_WESF 153 — fillstyle
// Lines 64116-64451 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function Gpe(e, t, n, r, i, a, o) {
  ((e.textAlign = `center`), (e.textBaseline = `middle`));
  let s = (e) => {
    let [n, r] = SS[e];
    return [t + n, r - n];
  };
  {
    let [t, r] = s(`station`);
    ((e.fillStyle = `#f7f7f4`),
      e.fillRect(t, n, r, i),
      a(t, n, r, i, 0.6),
      (e.fillStyle = `#2e8b3a`),
      e.fillRect(t + 3, n + 3, i - 6, i - 6),
      (e.fillStyle = `#ffffff`),
      (e.font = `900 ${Math.round(i * 0.42)}px Helvetica, Arial, ${o.sans}`),
      wS(e, `JR`, t + i / 2, n + i / 2 + 1, i - 10));
    let c = yo(`landmark.hj.station`);
    ((e.fillStyle = `#151515`),
      (e.font = `700 ${Math.round(i * 0.66)}px ${o.sans}`),
      wS(e, c.ja, t + i + 58, n + i / 2 + 1, 104),
      (e.font = `600 ${Math.round(i * 0.3)}px Helvetica, Arial, ${o.sans}`),
      wS(e, c.en ?? ``, t + i + 168, n + i / 2 + 1, 84),
      a(t + i, n + 3, r - i - 3, i - 6, 1));
  }
  for (let [t, r] of [
    [`omotesando`, `landmark.hj.exitOmotesando`],
    [`takeshita`, `landmark.hj.exitTakeshita`],
    [`west`, `landmark.hj.exitWest`],
  ]) {
    let [c, l] = s(t);
    ((e.fillStyle = `#26282a`),
      e.fillRect(c, n, l, i),
      (e.fillStyle = `#f4c21a`),
      e.fillRect(c + 2, n + 2, l - 4, i - 4),
      a(c, n, l, i, 0.6),
      (e.fillStyle = `#111111`),
      (e.font = `700 ${Math.round(i * 0.66)}px ${o.sans}`),
      wS(e, yo(r).ja, c + l / 2, n + i / 2 + 1, l - 10),
      a(c + 3, n + 3, l - 6, i - 6, 0.9));
  }
  {
    let [t, r] = s(`bridge`);
    ((e.fillStyle = `#b9b5ac`),
      e.fillRect(t, n, r, i),
      (e.fillStyle = `#a9a59b`));
    for (let a = 0; a < 40; a++)
      e.fillRect(t + ((a * 37) % r), n + ((a * 13) % i), 2, 1);
    (a(t, n, r, i, 0),
      (e.font = `700 ${Math.round(i * 0.7)}px ${o.serif}`),
      (e.fillStyle = `#e0ddd5`),
      wS(
        e,
        yo(`landmark.hj.jingubashi`).ja,
        t + r / 2 + 1,
        n + i / 2 + 2,
        r - 12,
      ),
      (e.fillStyle = `#4d4a44`),
      wS(e, yo(`landmark.hj.jingubashi`).ja, t + r / 2, n + i / 2 + 1, r - 12));
  }
  {
    let [t, r] = s(`old`);
    ((e.fillStyle = `#3a2618`),
      e.fillRect(t, n, r, i),
      (e.strokeStyle = `#c9a76a`),
      (e.lineWidth = 2),
      e.strokeRect(t + 3, n + 3, r - 6, i - 6),
      a(t, n, r, i, 0.35),
      (e.fillStyle = `#f1e6c8`),
      (e.font = `700 ${Math.round(i * 0.62)}px ${o.serif}`),
      wS(e, yo(`landmark.hj.oldStation`).ja, t + r / 2, n + i / 2 + 1, r - 16),
      a(t + 6, n + 6, r - 12, i - 12, 0.8));
  }
  {
    let [t, r] = s(`tkStreet`);
    ((e.fillStyle = `#ffffff`),
      e.fillRect(t, n, r, i),
      a(t, n, r, i, 0.7),
      (e.fillStyle = `#ff4f9a`),
      (e.font = `800 ${Math.round(i * 0.56)}px Helvetica, Arial, ${o.sans}`),
      wS(
        e,
        yo(`landmark.hj.takeshitaStreet`).ja,
        t + r / 2,
        n + i / 2 + 1,
        r - 10,
      ));
  }
  for (let [t, r, o, c] of [
    [`posterA`, `#f3d7e4`, `#2b2b38`, `#e85a8f`],
    [`posterB`, `#cfe6ee`, `#3a2a24`, `#f2b13a`],
  ]) {
    let [l, u] = s(t);
    ((e.fillStyle = r),
      e.fillRect(l, n, u, i),
      (e.fillStyle = c),
      e.fillRect(l + 4, n + i * 0.55, u - 8, i * 0.3),
      (e.fillStyle = o),
      e.beginPath(),
      e.arc(l + u * 0.42, n + i * 0.33, i * 0.16, 0, Math.PI * 2),
      e.fill(),
      e.fillRect(l + u * 0.27, n + i * 0.5, u * 0.3, i * 0.5),
      a(l, n, u, i, 0.55));
  }
}
var TS = {
    odakichi: [32, 0, 48, 64],
    keigyoku: [48, 0, 64, 32],
    takayamaya: [48, 32, 64, 64],
  },
  Kpe = {
    odakichi: {
      key: `landmark.nishiShinjuku.odakichi`,
      bg: `#0d5aa7`,
      fg: `#ffffff`,
      edge: `#e8eef4`,
    },
    keigyoku: {
      key: `landmark.nishiShinjuku.keigyoku`,
      bg: `#f6f4ee`,
      fg: `#b3122e`,
      edge: `#9aa0a6`,
    },
    takayamaya: {
      key: `landmark.nishiShinjuku.takayamaya`,
      bg: `#efe6d2`,
      fg: `#3a2416`,
      edge: `#6e5a44`,
    },
  };
function qpe(e, t, n, r, i, a, o) {
  (Jpe(e, t, n, 32, i, a), Ype(e, t, n, a, o));
}
function Jpe(e, t, n, r, i, a) {
  let o = r / 2,
    s = i / 4;
  ((e.fillStyle = `#e9e7e1`), e.fillRect(t, n, r, i), a(t, n, r, i, 0));
  for (let i = 0; i < 4; i++) {
    let c = n + i * s;
    ((e.fillStyle = `#d7d4cd`),
      e.fillRect(t, c + s * 0.72, r, s * 0.2),
      (e.fillStyle = `rgba(90,86,80,0.35)`),
      e.fillRect(t, c + s - 0.8, r, 0.8));
    for (let n = 0; n < 2; n++) {
      let r = t + n * o;
      ((e.fillStyle = `rgba(110,104,96,0.3)`), e.fillRect(r, c, 0.8, s));
      let i = r + o * 0.25,
        l = o * 0.5,
        u = c + s * 0.14,
        d = s * 0.54,
        f = e.createLinearGradient(i, u, i, u + d);
      (f.addColorStop(0, `#73879a`),
        f.addColorStop(0.5, `#47586a`),
        f.addColorStop(1, `#384656`),
        (e.fillStyle = f),
        e.fillRect(i, u, l, d),
        (e.fillStyle = `rgba(220,226,230,0.6)`),
        e.fillRect(i + l / 2 - 0.4, u, 0.8, d),
        a(i, u, l, d, 0.9));
    }
  }
}
function Ype(e, t, n, r, i) {
  ((e.textAlign = `center`), (e.textBaseline = `middle`));
  for (let a of Object.keys(TS)) {
    let o = Kpe[a],
      [s, c, l, u] = TS[a],
      d = t + s,
      f = n + c,
      p = l - s,
      m = u - c;
    ((e.fillStyle = o.edge),
      e.fillRect(d, f, p, m),
      (e.fillStyle = o.bg),
      e.fillRect(d + 1.5, f + 1.5, p - 3, m - 3));
    let h = [...yo(o.key).ja],
      g = (m - 4) / h.length,
      _ = Math.min(p - 3, g * 0.92);
    ((e.fillStyle = o.fg),
      (e.font = `800 ${Math.round(_)}px ${i.sans}`),
      h.forEach((t, n) => {
        (e.save(),
          e.translate(d + p / 2, f + 2 + g * (n + 0.5)),
          e.scale(1, Math.min(1.35, g / _)),
          e.fillText(t, 0, 0.5),
          e.restore());
      }),
      r(d, f, p, m, 0.85));
  }
}
var ES = 2048,
  DS = 2160,
  OS = 8,
  Xpe = {
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
    todaiBay: [128, 160],
    todaiMisc: [192, 96],
    sjText: [448, 64],
    sjSigns: [384, 64],
    sbyArt: [320, 96],
    sbyArt2: [512, 96],
    p3hiSigns: [640, 32],
    hjSigns: [1024, 32],
    nsArt: [64, 64],
    forumStone: [256, 32],
    forumPlate: [384, 32],
  };
function Zpe() {
  let e = {},
    t = OS,
    n = OS,
    r = 0,
    i = Object.entries(Xpe).map((e, t) => [e, t]);
  i.sort((e, t) => t[0][1][1] - e[0][1][1] || e[1] - t[1]);
  for (let [[a, [o, s]]] of i) {
    if (
      (t + o + OS > 2048 && ((t = OS), (n += r + 16), (r = 0)),
      n + s + OS > 2160)
    )
      throw Error(`[landmarks atlas] page full at ${a}`);
    ((e[a] = [t, n, o, s]), (t += o + 16), (r = Math.max(r, s)));
  }
  return e;
}
function kS(e) {
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
var AS = (e, t, n) => `rgb(${e | 0},${t | 0},${n | 0})`;
function jS(e, t, n, r, i, a, o, s, c = !0) {
  let l = kS(a);
  for (let a = 0; a < o; a++) {
    let a = c ? 0 : 255;
    ((e.fillStyle = `rgba(${a},${a},${a},${(s * l()).toFixed(3)})`),
      e.fillRect(t + l() * r, n + l() * i, 1 + l() * 2, 1 + l() * 2));
  }
}
function MS(e, t, n, r, i, a, o, s, c = [146, 58, 40]) {
  let l = kS(s);
  ((e.fillStyle = `#b9ab98`), e.fillRect(t, n, r, i));
  let u = i / a,
    d = r / o;
  for (let i = 0; i < a; i++) {
    let a = i % 2 ? d / 2 : 0;
    for (let s = -1; s <= o; s++) {
      let o = t + a + s * d,
        f = 0.82 + l() * 0.3,
        p = l();
      e.fillStyle = AS(c[0] * f + (p > 0.92 ? 18 : 0), c[1] * f, c[2] * f);
      let m = Math.max(t, o + 0.8),
        h = Math.min(t + r, o + d - 0.8);
      h > m && e.fillRect(m, n + i * u + 0.8, h - m, u - 1.6);
    }
  }
  jS(e, t, n, r, i, s + 1, (r * i) / 40, 0.18);
}
function NS(e, t, n, r, i, a, o = [222, 216, 202], s = 4) {
  let c = kS(a);
  ((e.fillStyle = AS(o[0], o[1], o[2])),
    e.fillRect(t, n, r, i),
    (e.fillStyle = `rgba(90,80,70,0.35)`));
  for (let a = 1; a < s; a++)
    e.fillRect(t + (r * a) / s + (c() - 0.5) * 6, n, 1.2, i);
  (e.fillRect(t, n + i - 1.2, r, 1.2),
    jS(e, t, n, r, i, a + 7, (r * i) / 30, 0.12));
}
