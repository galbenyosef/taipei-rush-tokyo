// tokyo/assets/actors-qKVitB-C 117 — glyph
// Lines 55506-55850 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
var _O = {
    tutorial: 0,
    delivery: 1,
    taxi: 2,
    garbage: 3,
    tea: 4,
    race: 5,
    thief: 6,
    newyear: 7,
    temple: 8,
    chevron: 9,
    glow: 10,
    ring: 11,
    sparkle: 12,
    flag: 13,
    person: 14,
    lantern: 15,
    cash: 16,
    shop: 17,
    star: 18,
    bag: 19,
    cup: 20,
    wallet: 21,
    firework: 22,
    home: 23,
    chase: 24,
    escort: 25,
    tail: 26,
    dash: 27,
    photo: 28,
    stunt: 29,
    parking: 30,
    food: 31,
    fortune: 32,
    mrt: 33,
    story: 34,
  },
  vO = 128,
  yO = {
    [_O.tutorial]: { glyph: `明`, c0: `#ffd35a`, c1: `#e08a12` },
    [_O.delivery]: { glyph: `送`, c0: `#ff6fa8`, c1: `#c21c62` },
    [_O.taxi]: { glyph: `載`, c0: `#ffe14d`, c1: `#d4a100` },
    [_O.garbage]: { glyph: `垃`, c0: `#9be15d`, c1: `#2f9a3a` },
    [_O.tea]: { glyph: `珍`, c0: `#e6b67a`, c1: `#8a5a2b` },
    [_O.race]: { glyph: `飆`, c0: `#ff5a5a`, c1: `#b3122b` },
    [_O.thief]: { glyph: `賊`, c0: `#b98cff`, c1: `#5b2bb3` },
    [_O.newyear]: { glyph: `年`, c0: `#ff5d4a`, c1: `#a8121e` },
    [_O.temple]: { glyph: `廟`, c0: `#ff8a3d`, c1: `#b8360f` },
    [_O.chase]: { glyph: `搶`, c0: `#ff7a4d`, c1: `#b3321a` },
    [_O.escort]: { glyph: `囍`, c0: `#ff4d6d`, c1: `#a8102e` },
    [_O.tail]: { glyph: `偵`, c0: `#8aa0b8`, c1: `#34485e` },
    [_O.dash]: { glyph: `急`, c0: `#4dd2ff`, c1: `#136f9e` },
    [_O.photo]: { glyph: `拍`, c0: `#ff8ad8`, c1: `#a3287f` },
    [_O.stunt]: { glyph: `技`, c0: `#ffb03d`, c1: `#b35a00` },
    [_O.parking]: { glyph: `停`, c0: `#5d9dff`, c1: `#1c4fb3` },
    [_O.food]: { glyph: `吃`, c0: `#ffcf4d`, c1: `#c26a0f` },
    [_O.fortune]: { glyph: `籤`, c0: `#ff6a4d`, c1: `#a3121e` },
    [_O.mrt]: { glyph: `捷`, c0: `#4d8dff`, c1: `#123f9e` },
    [_O.story]: { glyph: `劇`, c0: `#ffd35a`, c1: `#b3620f` },
  };
function bO(e) {
  return yO[e]?.glyph;
}
function xO(e) {
  return [(e % 12) * vO, Math.floor(e / 12) * vO];
}
function SO(e, t, n) {
  let [r, i] = xO(t),
    a = r + vO / 2,
    o = i + vO / 2,
    s = vO * 0.44;
  e.save();
  let c = e.createRadialGradient(a, o, s * 0.8, a, o, vO * 0.5);
  (c.addColorStop(0, n.c0 + `aa`),
    c.addColorStop(1, n.c0 + `00`),
    (e.fillStyle = c),
    e.fillRect(r, i, vO, vO));
  let l = e.createLinearGradient(a, o - s, a, o + s);
  (l.addColorStop(0, n.c0),
    l.addColorStop(1, n.c1),
    e.beginPath(),
    e.arc(a, o, s, 0, Math.PI * 2),
    (e.fillStyle = l),
    e.fill(),
    (e.lineWidth = 6),
    (e.strokeStyle = `#fff`),
    e.stroke(),
    e.beginPath(),
    e.arc(a, o, 49.32, 0, Math.PI * 2),
    (e.lineWidth = 2),
    (e.strokeStyle = `rgba(0,0,0,.35)`),
    e.stroke(),
    e.beginPath(),
    e.ellipse(a, o - s * 0.45, s * 0.62, s * 0.3, 0, 0, Math.PI * 2),
    (e.fillStyle = `rgba(255,255,255,.18)`),
    e.fill(),
    (e.font = `900 ${Math.round(vO * 0.5)}px ${st}`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.lineJoin = `round`),
    (e.lineWidth = 7),
    (e.strokeStyle = `rgba(40,10,10,.55)`),
    e.strokeText(n.glyph, a, o + 3),
    (e.fillStyle = `#fff`),
    e.fillText(n.glyph, a, o + 3),
    e.restore());
}
function CO(e, t) {
  let [n, r] = xO(t);
  (e.save(),
    e.beginPath(),
    e.moveTo(n + 18, r + 34),
    e.lineTo(n + 64, r + 76),
    e.lineTo(n + 110, r + 34),
    e.lineTo(n + 110, r + 62),
    e.lineTo(n + 64, r + 104),
    e.lineTo(n + 18, r + 62),
    e.closePath(),
    (e.lineJoin = `round`),
    (e.lineWidth = 10),
    (e.strokeStyle = `rgba(0,0,0,.55)`),
    e.stroke());
  let i = e.createLinearGradient(0, r + 30, 0, r + 104);
  (i.addColorStop(0, `#ffffff`),
    i.addColorStop(1, `#d8d8d8`),
    (e.fillStyle = i),
    e.fill(),
    e.restore());
}
function wO(e, t) {
  let [n, r] = xO(t),
    i = n + vO / 2,
    a = r + vO / 2,
    o = e.createRadialGradient(i, a, 0, i, a, vO / 2);
  (o.addColorStop(0, `rgba(255,255,255,1)`),
    o.addColorStop(0.18, `rgba(255,255,255,.75)`),
    o.addColorStop(0.5, `rgba(255,255,255,.18)`),
    o.addColorStop(1, `rgba(255,255,255,0)`),
    (e.fillStyle = o),
    e.fillRect(n, r, vO, vO));
}
function TO(e, t) {
  let [n, r] = xO(t),
    i = n + vO / 2,
    a = r + vO / 2,
    o = e.createRadialGradient(i, a, vO * 0.28, i, a, vO * 0.5);
  (o.addColorStop(0, `rgba(255,255,255,0)`),
    o.addColorStop(0.5, `rgba(255,255,255,.9)`),
    o.addColorStop(1, `rgba(255,255,255,0)`),
    (e.fillStyle = o),
    e.fillRect(n, r, vO, vO));
}
function EO(e, t) {
  let [n, r] = xO(t),
    i = n + vO / 2,
    a = r + vO / 2;
  (e.save(), e.translate(i, a));
  let o = e.createRadialGradient(0, 0, 0, 0, 0, vO / 2);
  (o.addColorStop(0, `rgba(255,255,255,1)`),
    o.addColorStop(1, `rgba(255,255,255,0)`),
    (e.fillStyle = o));
  for (let t = 0; t < 2; t++)
    (e.beginPath(),
      e.ellipse(0, 0, vO * 0.5, vO * 0.06, (t * Math.PI) / 2, 0, Math.PI * 2),
      e.fill());
  (e.beginPath(),
    e.arc(0, 0, vO * 0.14, 0, Math.PI * 2),
    e.fill(),
    e.restore());
}
function DO(e, t) {
  let [n, r] = xO(t);
  (e.save(), (e.fillStyle = `#2a2a2a`), e.fillRect(n + 22, r + 14, 7, 104));
  let i = n + 29,
    a = r + 16;
  ((e.strokeStyle = `rgba(0,0,0,.6)`),
    (e.lineWidth = 4),
    e.strokeRect(i, a, 80, 56));
  for (let t = 0; t < 4; t++)
    for (let n = 0; n < 5; n++)
      ((e.fillStyle = (t + n) % 2 ? `#111` : `#fff`),
        e.fillRect(i + (n * 80) / 5, a + (t * 56) / 4, 16.5, 14.5));
  e.restore();
}
function OO(e, t) {
  let [n, r] = xO(t);
  (e.save(),
    e.translate(n, r),
    (e.fillStyle = `#fff`),
    (e.strokeStyle = `rgba(0,0,0,.55)`),
    (e.lineWidth = 6),
    e.beginPath(),
    e.arc(64, 30, 15, 0, Math.PI * 2),
    e.moveTo(44, 52),
    e.lineTo(84, 52),
    e.lineTo(106, 18),
    e.lineTo(116, 26),
    e.lineTo(90, 68),
    e.lineTo(88, 116),
    e.lineTo(70, 116),
    e.lineTo(64, 86),
    e.lineTo(58, 116),
    e.lineTo(40, 116),
    e.lineTo(38, 70),
    e.lineTo(28, 94),
    e.lineTo(16, 88),
    e.closePath(),
    e.stroke(),
    e.fill(),
    e.restore());
}
function kO(e, t) {
  let [n, r] = xO(t),
    i = n + 64,
    a = r + 66;
  e.save();
  let o = e.createRadialGradient(i - 10, a - 14, 6, i, a, 52);
  (o.addColorStop(0, `#ff9a6a`),
    o.addColorStop(0.6, `#e0201c`),
    o.addColorStop(1, `#8a0a0a`),
    (e.fillStyle = `#d9a520`),
    e.fillRect(i - 22, a - 50, 44, 10),
    e.fillRect(i - 22, a + 40, 44, 10),
    e.beginPath(),
    e.ellipse(i, a, 44, 42, 0, 0, Math.PI * 2),
    (e.fillStyle = o),
    e.fill(),
    (e.strokeStyle = `rgba(80,0,0,.5)`),
    (e.lineWidth = 2));
  for (let t = -2; t <= 2; t++)
    (e.beginPath(),
      e.ellipse(i, a, Math.abs(t) * 11 + 2, 42, 0, 0, Math.PI * 2),
      e.stroke());
  ((e.font = `900 40px ${st}`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.fillStyle = `#ffd766`),
    e.fillText(`福`, i, a + 2),
    (e.fillStyle = `#d9a520`),
    e.fillRect(i - 3, a + 50, 6, 18),
    e.restore());
}
function AO(e, t, n, r) {
  let [i, a] = xO(t);
  (e.save(),
    (e.font = `900 ${r}px ${st}`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.lineJoin = `round`),
    (e.lineWidth = 8),
    (e.strokeStyle = `rgba(0,0,0,.6)`),
    e.strokeText(n, i + 64, a + 68),
    (e.fillStyle = `#fff`),
    e.fillText(n, i + 64, a + 68),
    e.restore());
}
function jO(e, t) {
  let [n, r] = xO(t);
  (e.save(), e.translate(n + 64, r + 66), e.beginPath());
  for (let t = 0; t < 10; t++) {
    let n = t % 2 ? 22 : 54,
      r = -Math.PI / 2 + (t * Math.PI) / 5;
    e.lineTo(Math.cos(r) * n, Math.sin(r) * n);
  }
  (e.closePath(),
    (e.lineWidth = 8),
    (e.lineJoin = `round`),
    (e.strokeStyle = `rgba(0,0,0,.55)`),
    e.stroke(),
    (e.fillStyle = `#fff`),
    e.fill(),
    e.restore());
}
function MO(e, t) {
  let [n, r] = xO(t);
  (e.save(), e.translate(n + 64, r + 64));
  let i = [`#ffd54a`, `#ff4d6d`, `#6de0ff`, `#b98cff`];
  for (let t = 0; t < 16; t++) {
    let n = (t / 16) * Math.PI * 2;
    ((e.strokeStyle = i[t % 4]),
      (e.lineWidth = 6),
      (e.lineCap = `round`),
      e.beginPath(),
      e.moveTo(Math.cos(n) * 16, Math.sin(n) * 16),
      e.lineTo(Math.cos(n) * 54, Math.sin(n) * 54),
      e.stroke());
  }
  e.restore();
}
var NO = 40,
  PO = new Map(),
  FO = new Map(),
  IO = !1,
  LO = vO,
  RO = 1536,
  zO = null,
  BO = null,
  VO = null,
  HO = null,
  UO = null,
  WO = new Ce(),
  GO = { value: null };
function KO(e, t) {
  zO = t;
  let n = Math.max(8, Math.floor(Pt(1536, e) / 12));
  if (n === LO || ((LO = n), (RO = n * 12), !BO)) return !1;
  let r = BO;
  return ((BO = null), (VO = null), $O(), r.dispose(), !0);
}
function qO(e, t) {
  let n = yO[t] ?? FO.get(t);
  if (n) return SO(e, t, n);
  switch (t) {
    case _O.chevron:
      return CO(e, t);
    case _O.glow:
      return wO(e, t);
    case _O.ring:
      return TO(e, t);
    case _O.sparkle:
      return EO(e, t);
    case _O.flag:
      return DO(e, t);
    case _O.person:
      return OO(e, t);
    case _O.lantern:
      return kO(e, t);
    case _O.cash:
      return AO(e, t, `$`, 96);
    case _O.shop:
      return AO(e, t, `店`, 80);
    case _O.star:
      return jO(e, t);
    case _O.bag:
      return AO(e, t, `餐`, 80);
    case _O.cup:
      return AO(e, t, `茶`, 80);
    case _O.wallet:
      return AO(e, t, `包`, 80);
    case _O.firework:
      return MO(e, t);
    case _O.home:
      return AO(e, t, `家`, 80);
  }
}
