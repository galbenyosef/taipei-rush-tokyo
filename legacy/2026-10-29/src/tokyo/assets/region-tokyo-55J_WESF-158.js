// tokyo/assets/region-tokyo-55J_WESF 158 — fillstyle
// Lines 66240-66506 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function ime(e, t, n, r, i, a, o) {
  ((e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.fillStyle = `#b8913a`),
    e.fillRect(t, n, 96, 160),
    (e.fillStyle = `#e2bd5a`));
  for (let r = 0; r < 10; r++)
    (e.beginPath(),
      e.arc(t + 4 + (r % 2) * 88, n + 8 + r * 16, 6, 0, Math.PI * 2),
      e.fill());
  ((e.fillStyle = `#18204a`),
    e.fillRect(t + 12, n + 12, 72, 136),
    (e.strokeStyle = `#e2bd5a`),
    (e.lineWidth = 2),
    e.strokeRect(t + 16, n + 16, 64, 128),
    (e.fillStyle = `#efcf6e`),
    (e.font = `700 30px ${o.serif}`),
    LS(e, yo(`landmark.kanda-myojin.gaku`).ja, t + 52, n + 20, 30),
    e.fillRect(t + 25, n + 30, 2, 100),
    NS(e, t + 96, n, 64, 160, 311, [196, 190, 178], 1),
    (e.fillStyle = `#3a3833`),
    (e.font = `700 30px ${o.serif}`),
    LS(e, yo(`landmark.kanda-myojin.shago`).ja, t + 128, n + 14, 34),
    (e.fillStyle = `#c4231c`),
    e.fillRect(t + 160, n, 48, 160),
    (e.fillStyle = `#ffffff`),
    (e.font = `700 26px ${o.serif}`),
    LS(e, yo(`landmark.kanda-myojin.amazake`).ja, t + 184, n + 14, 30),
    (e.fillStyle = `#f4f1e8`),
    e.fillRect(t + 208, n, 48, 160),
    (e.fillStyle = `#1a1a1a`),
    (e.font = `700 17px ${o.serif}`),
    LS(e, yo(`culture.matsuri.hono`).ja, t + 232, n + 8, 21),
    (e.fillStyle = `#f6f2e6`),
    e.fillRect(t, n + 160, 128, 96),
    (e.fillStyle = `rgba(150,140,120,0.35)`));
  for (let r = 1; r < 8; r++) e.fillRect(t, n + 160 + r * 12, 128, 1.2);
  ((e.fillStyle = `#141414`),
    e.fillRect(t, n + 160, 128, 8),
    e.fillRect(t, n + 248, 128, 8),
    (e.font = `700 19px ${o.serif}`));
  for (let r of [0.25, 0.75])
    LS(e, yo(`landmark.kanda-myojin.chochin`).ja, t + 128 * r, n + 170, 19);
  for (let r of [0, 0.5, 1])
    nme(e, t + 128 * r, n + 208, 13, `#1a1a1a`, `#f6f2e6`);
  ((e.fillStyle = `#3a2818`),
    e.fillRect(t + 128, n + 160, 128, 48),
    (e.strokeStyle = `#b8913a`),
    (e.lineWidth = 2),
    e.strokeRect(t + 132, n + 164, 120, 40),
    (e.fillStyle = `#d9b358`),
    (e.font = `700 30px ${o.serif}`),
    e.fillText(yo(`landmark.kanda-myojin.shop`).ja, t + 192, n + 185, 110),
    (e.fillStyle = `#22305a`),
    e.fillRect(t + 128, n + 208, 128, 48),
    (e.fillStyle = `#f2efe6`),
    (e.font = `700 22px ${o.serif}`),
    e.fillText(yo(`landmark.kanda-myojin.amazake`).ja, t + 192, n + 230, 112),
    (e.fillStyle = `#141c38`),
    e.fillRect(t + 170, n + 216, 2, 40),
    e.fillRect(t + 212, n + 216, 2, 40),
    a(t, n, r, 160, 0.25),
    a(t + 160, n, 48, 160, 0.6),
    a(t, n + 160, 128, 96, 1),
    a(t + 128, n + 160, 128, 96, 0.35));
}
function ame(e, t, n, r, i, a) {
  let o = kS(321);
  (e.save(),
    e.translate(t, n),
    e.scale(1, 0.75),
    (e.fillStyle = `#d5cab6`),
    e.fillRect(0, 0, r, 128));
  for (let t = 0; t < 16; t++)
    for (let n = 0; n < 6; n++) {
      let r = 0.95 + o() * 0.08;
      ((e.fillStyle = AS(214 * r, 203 * r, 184 * r)),
        e.fillRect(n * 44 + (t % 2) * 22 - 22, t * 8, 42, 7));
    }
  ((e.fillStyle = `#9fa3a6`), e.fillRect(28, 12, 200, 76));
  let s = e.createLinearGradient(0, 15, 0, 85);
  (s.addColorStop(0, `#5d6d78`),
    s.addColorStop(1, `#3a4650`),
    (e.fillStyle = s),
    e.fillRect(32, 16, 192, 68),
    (e.fillStyle = `#9fa3a6`),
    e.fillRect(126, 16, 4, 68),
    (e.fillStyle = `rgba(230,226,214,0.55)`),
    e.fillRect(36, 20, 40, 60),
    (e.fillStyle = `#c7c7c2`),
    e.fillRect(0, 92, r, 28),
    (e.fillStyle = `#a9aaa6`));
  for (let t = 0; t < 32; t++) e.fillRect(t * 8, 94, 2, 24);
  ((e.fillStyle = `#8c8d8a`),
    e.fillRect(0, 92, r, 3),
    e.restore(),
    (e.fillStyle = `#8cc4ae`),
    e.fillRect(t, n + 96, r, 32));
  for (let i = 0; i < 70; i++)
    ((e.fillStyle = `rgba(${o() < 0.5 ? `96,140,124` : `176,214,198`},${(0.08 + o() * 0.12).toFixed(2)})`),
      e.fillRect(t + o() * r, n + 96, 3 + o() * 10, 32));
  for (let i = 0; i < 3; i++) {
    let a = t + (r * i) / 3;
    ((e.fillStyle = `rgba(44,88,72,0.85)`),
      e.fillRect(a + 15, n + 96, 5, 32),
      (e.fillStyle = `#c4e6d6`),
      e.fillRect(a + 4, n + 96, 11, 32),
      (e.fillStyle = `#e2f4ea`),
      e.fillRect(a + 7, n + 96, 4, 32));
  }
  ((e.fillStyle = `#3b2a1c`),
    e.fillRect(t, n + 128, 128, 128),
    (e.fillStyle = `#5a4430`));
  for (let r = 0; r < 16; r++) e.fillRect(t + 4 + r * 7.5, n + 132, 3, 26);
  let c = e.createLinearGradient(0, n + 162, 0, n + 256);
  (c.addColorStop(0, `#f0d49a`),
    c.addColorStop(1, `#c79a5c`),
    (e.fillStyle = c),
    e.fillRect(t + 8, n + 164, 112, 88),
    (e.fillStyle = `#3b2a1c`),
    e.fillRect(t + 62, n + 164, 4, 88),
    (e.fillStyle = `#6a4a2a`),
    e.fillRect(t + 16, n + 214, 40, 14),
    e.fillRect(t + 74, n + 214, 40, 14),
    (e.fillStyle = `#22305a`),
    e.fillRect(t + 8, n + 164, 112, 26),
    (e.fillStyle = `#f2efe6`),
    e.beginPath(),
    e.arc(t + 64, n + 177, 7, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#6e6f6c`),
    e.fillRect(t + 128, n + 128, 128, 128),
    (e.fillStyle = `#ece8de`),
    e.fillRect(t + 132, n + 132, 120, 22),
    (e.fillStyle = `#b8321e`),
    e.fillRect(t + 136, n + 137, 30, 12),
    (e.fillStyle = `rgba(60,50,40,0.6)`),
    e.fillRect(t + 172, n + 140, 70, 6));
  let l = e.createLinearGradient(0, n + 158, 0, n + 256);
  (l.addColorStop(0, `#f3ead2`),
    l.addColorStop(1, `#cdb994`),
    (e.fillStyle = l),
    e.fillRect(t + 134, n + 158, 116, 96),
    (e.fillStyle = `#8a7a62`),
    e.fillRect(t + 142, n + 222, 56, 30));
  for (let r = 0; r < 2; r++) {
    ((e.fillStyle = `#9a8a70`), e.fillRect(t + 140, n + 180 + r * 18, 52, 2));
    for (let i = 0; i < 6; i++)
      ((e.fillStyle = [`#c84a3a`, `#e0c070`, `#5a8ac0`, `#f2efe6`, `#7aa060`][
        Math.floor(o() * 5)
      ]),
        e.fillRect(t + 142 + i * 8, n + 172 + r * 18, 6, 8));
  }
  ((e.fillStyle = `rgba(255,255,255,0.18)`),
    e.beginPath(),
    e.moveTo(t + 200, n + 158),
    e.lineTo(t + 222, n + 158),
    e.lineTo(t + 170, n + 254),
    e.lineTo(t + 148, n + 254),
    e.closePath(),
    e.fill(),
    (e.fillStyle = `#6e6f6c`),
    e.fillRect(t + 204, n + 158, 3, 96),
    e.fillRect(t + 134, n + 210, 70, 2),
    a(t, n, r, 128, 0),
    a(t + 32, n + 12, 192, 51, 1),
    a(t, n + 96, r, 32, 0.2),
    a(t, n + 128, r, 128, 0.1),
    a(t + 8, n + 164, 112, 88, 1),
    a(t + 134, n + 158, 116, 96, 1),
    a(t + 132, n + 132, 120, 22, 0.8));
}
var RS = {
    exitCentral: `landmark.station.exit.central`,
    exitNorth: `landmark.station.exit.north`,
    exitSouth: `landmark.station.exit.south`,
  },
  zS = 1024,
  BS = 108,
  ome = 8,
  VS = 1024,
  HS = 384;
function sme(e, t, n, r, i, a, o) {
  ((e.fillStyle = `#2b2620`),
    e.fillRect(t, n, r, i),
    (e.strokeStyle = `#8a7650`),
    (e.lineWidth = 4),
    e.strokeRect(t + 6, n + 6, r - 12, i - 12));
  let s = yo(o);
  ((e.fillStyle = `#f2efe6`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.font = `600 ${Math.round(i * 0.54)}px ${a}`),
    US(e, s.ja, t + r / 2, n + i * 0.41, r * 0.5, 0.6),
    (e.font = `500 ${Math.round(i * 0.2)}px Helvetica, Arial, ${a}`),
    US(e, s.en ?? ``, t + r / 2, n + i * 0.8, r * 0.5, 0.25));
}
function US(e, t, n, r, i, a) {
  let o = [...t];
  if (!o.length) return;
  let s = o.map((t) => e.measureText(t).width),
    c = s.reduce((e, t) => e + t, 0),
    l = e.measureText(`M`).width * 1.4,
    u =
      o.length > 1 ? Math.max(0, Math.min(a * l, (i - c) / (o.length - 1))) : 0,
    d = c + u * (o.length - 1),
    f = d > i * 1.6 ? (i * 1.6) / d : 1;
  (e.save(),
    e.translate(n - (d * f) / 2, r),
    e.scale(f, 1),
    (e.textAlign = `left`));
  let p = 0;
  (o.forEach((t, n) => {
    (e.fillText(t, p, 0), (p += s[n] + u));
  }),
    e.restore());
}
function cme(e, t, n) {
  let r = e ? 768 : VS,
    i = Math.round((r * HS) / VS),
    o = r / VS,
    s = document.createElement(`canvas`);
  ((s.width = r), (s.height = i));
  let c = s.getContext(`2d`, { willReadFrequently: !0 });
  (br(s, c), (c.fillStyle = `#2b2620`), c.fillRect(0, 0, r, i), c.scale(o, o));
  let l = new Map();
  Object.keys(RS).forEach((e, n) => {
    let r = ome + n * 124;
    (l.set(e, [0, r]), sme(c, 0, r, zS, BS, t.sans, RS[e]));
  });
  let u = c.getImageData(0, 0, r, i).data;
  for (let e = 3; e < u.length; e += 4) u[e] = 64;
  for (let [, [, e]] of l) {
    let t = Math.ceil((e + 10) * o),
      n = Math.floor((e + BS - 10) * o),
      i = Math.ceil(10 * o),
      a = Math.floor(1014 * o);
    for (let e = t; e < n; e++)
      for (let t = i; t < a; t++) u[(e * r + t) * 4 + 3] = 217;
  }
  let d = new Uint8Array(u.buffer.slice(0));
  s.width = s.height = 1;
  let f = new w(d, r, i, v);
  ((f.colorSpace = a),
    (f.flipY = !1),
    (f.generateMipmaps = !0),
    (f.minFilter = x),
    (f.magFilter = E),
    (f.anisotropy = n),
    (f.name = `tokyo-landmarks-plaques`),
    (f.needsUpdate = !0));
  let p = 0.5 / r,
    m = 0.5 / i;
  return {
    texture: f,
    cell: (e) => {
      let [t, n] = l.get(e);
      return {
        u0: t / VS + p,
        v0: (n + BS) / HS - m,
        u1: (t + zS) / VS - p,
        v1: n / HS + m,
      };
    },
    bytes: Math.round(r * i * 4 * (4 / 3)),
  };
}
