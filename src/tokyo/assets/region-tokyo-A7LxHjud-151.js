// tokyo/assets/region-tokyo-A7LxHjud 151 — fillstyle
// Lines 63592-63909 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function gS(e, t, n, r, i, a, o = 0) {
  ((e.fillStyle = a),
    e.beginPath(),
    e.ellipse(t, n, r, i, o, 0, Math.PI * 2),
    e.fill());
}
function _S(e, t, n, r, i) {
  e.fillStyle = `rgba(0,0,0,0.12)`;
  for (let a = n + 1; a < n + i; a += 2) e.fillRect(t, a, r, 0.5);
}
function Ype(e, t, n, r, i, a, o) {
  ((e.textAlign = `center`), (e.textBaseline = `middle`));
  let s = (e) => {
    let [r, i, a, o] = uS[e];
    return [t + r, n + i, a - r, o - i];
  };
  {
    let [t, n, r, i] = s(`v108`);
    ((e.fillStyle = `#26282c`), e.fillRect(t, n, r, i));
    let c = [...yo(`landmark.shibuya.108.digits`).ja];
    ((e.font = pS(900, 30, mS(o))),
      c.forEach((a, o) => {
        let s = n + (i / c.length) * (o + 0.5) + 1;
        ((e.fillStyle = `#d8283a`),
          hS(e, a, t + r / 2 + 1, s + 1, r - 4),
          (e.fillStyle = `#fbfbfb`),
          hS(e, a, t + r / 2, s, r - 4));
      }),
      a(t, n, r, i, 1));
  }
  {
    let [t, n, r, i] = s(`mark108`);
    ((e.fillStyle = `#eef0f2`), e.fillRect(t, n, r, i));
    let c = yo(`landmark.shibuya.108.mark`).ja,
      l = c.match(/^(\D+)(\d+)$/);
    if (((e.font = pS(800, 17, mS(o))), l)) {
      let a = e.measureText(l[1]).width,
        o = e.measureText(l[2]).width,
        s = Math.min(1, (r - 10) / (a + o));
      (e.save(),
        e.translate(t + r / 2 - ((a + o) * s) / 2, n + i / 2 + 1),
        e.scale(s, 1),
        (e.textAlign = `left`),
        (e.fillStyle = `#18191b`),
        e.fillText(l[1], 0, 0),
        (e.fillStyle = `#d8283a`),
        e.fillText(l[2], a, 0),
        e.restore(),
        (e.textAlign = `center`));
    } else
      ((e.fillStyle = `#18191b`), hS(e, c, t + r / 2, n + i / 2 + 1, r - 10));
    a(t, n, r, i, 1);
  }
  {
    let [t, n, r, i] = s(`tsutawa`);
    ((e.fillStyle = `#16307a`),
      e.fillRect(t, n, r, i),
      (e.fillStyle = `#f4c21a`),
      e.fillRect(t + 6, n + i - 6, r - 12, 3),
      (e.fillStyle = `#ffffff`),
      (e.font = pS(900, 16, mS(o))),
      hS(
        e,
        yo(`landmark.shibuya.tsutawa`).ja,
        t + r / 2,
        n + i / 2 - 1,
        r - 10,
      ),
      a(t, n, r, i, 1));
  }
  {
    let [t, n, r, i] = s(`qflat`);
    ((e.fillStyle = `#20262c`),
      e.fillRect(t, n, r, i),
      (e.fillStyle = `#f6f7f8`),
      (e.font = pS(700, 15, mS(o))),
      hS(e, yo(`landmark.shibuya.qflat`).ja, t + r / 2, n + i / 2 + 1, r - 8),
      a(t, n, r, i, 1));
  }
  {
    let [t, n, r, i] = s(`gate`);
    ((e.fillStyle = `#122a5c`),
      e.fillRect(t, n, r, i),
      (e.strokeStyle = `#e8eef8`),
      (e.lineWidth = 1.2),
      e.strokeRect(t + 1.5, n + 1.5, r - 3, i - 3));
    let c = yo(`landmark.shibuya.centergai`);
    ((e.fillStyle = `#ffffff`),
      (e.font = pS(800, 14, o.sans)),
      hS(e, c.ja, t + r / 2, n + 9.5, r - 14),
      (e.fillStyle = `#ffd23a`),
      (e.font = pS(700, 7, mS(o))),
      hS(e, (c.en ?? ``).toUpperCase(), t + r / 2, n + 19.5, r - 20),
      a(t, n, r, i, 1));
  }
  {
    let [t, n, r, i] = s(`hachiExit`);
    ((e.fillStyle = `#f7f7f4`),
      e.fillRect(t, n, r, i),
      (e.fillStyle = `#2f9a4a`),
      e.fillRect(t, n, r, 3),
      (e.fillStyle = `#1a1a1a`),
      (e.font = pS(700, 14, o.sans)),
      hS(
        e,
        yo(`landmark.shibuya.hachiko-exit`).ja,
        t + r / 2,
        n + i / 2 + 2,
        r - 8,
      ),
      a(t, n, r, i, 0.9));
  }
  {
    let [t, n, r, i] = s(`plaque`);
    ((e.fillStyle = `#8c8a86`), e.fillRect(t, n, r, i));
    let c = fS(1081);
    for (let a = 0; a < 160; a++)
      ((e.fillStyle = `rgba(${c() < 0.5 ? `40,40,40` : `230,230,230`},${(0.25 * c()).toFixed(2)})`),
        e.fillRect(t + c() * r, n + c() * i, 1, 1));
    let l = [...yo(`landmark.shibuya.hachiko`).ja];
    ((e.fillStyle = `#26221e`),
      (e.font = pS(700, 12, o.serif)),
      l.forEach((a, o) =>
        e.fillText(
          a,
          t + r / 2,
          n + 8 + (o * (i - 16)) / Math.max(1, l.length - 1),
        ),
      ),
      a(t, n, r, i, 0.3));
  }
  {
    let [t, n, r, i] = s(`ad108`),
      c = e.createLinearGradient(0, n, 0, n + i);
    (c.addColorStop(0, `#f6d3dc`),
      c.addColorStop(1, `#f9eef0`),
      (e.fillStyle = c),
      e.fillRect(t, n, r, i),
      gS(e, t + r * 0.42, n + i * 0.36, r * 0.34, i * 0.26, `#2a1d1a`),
      gS(e, t + r * 0.55, n + i * 0.38, r * 0.2, i * 0.18, `#f2cbb5`),
      gS(e, t + r * 0.66, n + i * 0.44, r * 0.045, i * 0.02, `#c8455a`),
      gS(e, t + r * 0.6, n + i * 0.33, r * 0.04, i * 0.012, `#3a2a28`),
      (e.fillStyle = `#d23d63`),
      e.fillRect(t + r * 0.4, n + i * 0.66, r * 0.2, i * 0.22),
      (e.fillStyle = `#e8e8ea`),
      e.fillRect(t + r * 0.44, n + i * 0.6, r * 0.12, i * 0.06),
      (e.fillStyle = `#b21e48`),
      (e.font = pS(800, 9, mS(o))),
      hS(e, `NEW`, t + r / 2, n + i * 0.94, r - 6),
      a(t, n, r, i, 1));
  }
  {
    let [t, n, r, i] = s(`screenA`),
      o = e.createRadialGradient(
        t + r * 0.55,
        n + i * 0.3,
        2,
        t + r * 0.55,
        n + i * 0.4,
        r * 0.7,
      );
    (o.addColorStop(0, `#9fd8ff`),
      o.addColorStop(0.35, `#2a5fd0`),
      o.addColorStop(1, `#0a0c28`),
      (e.fillStyle = o),
      e.fillRect(t, n, r, i),
      (e.fillStyle = `rgba(200,230,255,0.18)`));
    for (let [a, o] of [
      [0.2, 0.32],
      [0.48, 0.6],
      [0.78, 0.9],
    ])
      (e.beginPath(),
        e.moveTo(t + r * a, n),
        e.lineTo(t + r * o, n),
        e.lineTo(t + r * (0.55 + (o - 0.55) * 0.3), n + i),
        e.lineTo(t + r * (0.55 + (a - 0.55) * 0.3), n + i),
        e.fill());
    (gS(e, t + r * 0.55, n + i * 0.36, r * 0.055, i * 0.12, `#1a1424`),
      (e.fillStyle = `#1a1424`),
      e.beginPath(),
      e.moveTo(t + r * 0.46, n + i),
      e.lineTo(t + r * 0.5, n + i * 0.5),
      e.lineTo(t + r * 0.6, n + i * 0.5),
      e.lineTo(t + r * 0.66, n + i),
      e.fill(),
      e.fillRect(t + r * 0.58, n + i * 0.42, r * 0.06, i * 0.03));
    let c = fS(7741);
    for (let a = 0; a < 40; a++)
      ((e.fillStyle = [`#ff4f8b`, `#ffd23a`, `#5af0ff`, `#ffffff`][a % 4]),
        e.fillRect(t + c() * r, n + c() * i * 0.8, 1.6, 1.2));
    ((e.fillStyle = `rgba(255,255,255,0.9)`),
      e.fillRect(t + 4, n + i - 9, r * 0.38, 4),
      (e.fillStyle = `#ff4f8b`),
      e.fillRect(t + 4, n + i - 9, 4, 4),
      _S(e, t, n, r, i),
      a(t, n, r, i, 1));
  }
  {
    let [t, n, r, i] = s(`screenB`),
      o = e.createLinearGradient(0, n, 0, n + i);
    (o.addColorStop(0, `#3e8ef0`),
      o.addColorStop(0.7, `#a8dcff`),
      o.addColorStop(1, `#ffe0f0`),
      (e.fillStyle = o),
      e.fillRect(t, n, r, i));
    let c = fS(3301);
    for (let a = 0; a < 6; a++)
      gS(
        e,
        t + c() * r,
        n + i * (0.25 + c() * 0.4),
        8 + c() * 10,
        3 + c() * 3,
        `rgba(255,255,255,0.85)`,
      );
    let l = t + r * 0.66,
      u = n + i * 0.5;
    (gS(e, l, u + i * 0.06, r * 0.11, i * 0.42, `#2bb8b0`),
      gS(e, l, u - i * 0.08, r * 0.065, i * 0.15, `#fde3d2`),
      gS(e, l - r * 0.022, u - i * 0.09, r * 0.012, i * 0.03, `#2a4fd0`),
      gS(e, l + r * 0.022, u - i * 0.09, r * 0.012, i * 0.03, `#2a4fd0`),
      (e.fillStyle = `#f8f8fa`),
      e.fillRect(l - r * 0.07, u + i * 0.08, r * 0.14, i * 0.42),
      (e.fillStyle = `#d8283a`),
      e.fillRect(l - r * 0.02, u + i * 0.1, r * 0.04, i * 0.08),
      (e.strokeStyle = `#fde3d2`),
      (e.lineWidth = 3),
      e.beginPath(),
      e.moveTo(l - r * 0.06, u + i * 0.14),
      e.lineTo(l - r * 0.22, u - i * 0.05),
      e.stroke(),
      (e.fillStyle = `#ff5f9e`),
      e.fillRect(t + 6, n + 8, r * 0.36, 9),
      (e.fillStyle = `#ffffff`),
      e.fillRect(t + 6, n + 20, r * 0.26, 4),
      e.fillRect(t + 6, n + 27, r * 0.2, 4));
    for (let a = 0; a < 14; a++)
      gS(e, t + c() * r * 0.5, n + i * (0.5 + c() * 0.45), 1, 1, `#ffffff`);
    (_S(e, t, n, r, i), a(t, n, r, i, 1));
  }
}
var vS = {
  magnit: [0, 0, 128, 24],
  kuri: [128, 0, 192, 24],
  wrap: [0, 24, 32, 96],
  vision: [32, 24, 144, 80],
  taisei: [32, 80, 192, 96],
  bill1: [192, 0, 320, 48],
  bill2: [192, 48, 320, 96],
  bill3: [320, 0, 448, 48],
  vision2: [320, 48, 448, 96],
  blade0: [448, 0, 464, 96],
  blade1: [464, 0, 480, 96],
  blade2: [480, 0, 496, 96],
  blade3: [496, 0, 512, 96],
};
function Xpe(e, t) {
  let [n, r, i, a] = vS[t],
    o = e.u1 - e.u0,
    s = e.v1 - e.v0,
    c = 0.6;
  return {
    u0: e.u0 + o * ((n + c) / 512),
    u1: e.u0 + o * ((i - c) / 512),
    v0: e.v0 + s * (1 - (a - c) / 96),
    v1: e.v0 + s * (1 - (r + c) / 96),
  };
}
function yS(e) {
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
var bS = (e, t, n) => `${e} ${t}px ${n}`,
  Zpe = (e) => `Helvetica, Arial, ${e.sans}`;
function xS(e, t, n, r, i) {
  let a = e.measureText(t).width;
  (e.save(),
    e.translate(n, r),
    a > i && e.scale(i / a, 1),
    e.fillText(t, 0, 0),
    e.restore());
}
function SS(e, t, n, r, i, a) {
  ((e.fillStyle = a),
    e.beginPath(),
    e.ellipse(t, n, r, i, 0, 0, Math.PI * 2),
    e.fill());
}
function CS(e, t, n, r, i) {
  e.fillStyle = `rgba(0,0,0,0.12)`;
  for (let a = n + 1; a < n + i; a += 2) e.fillRect(t, a, r, 0.5);
}
function Qpe(e, t, n, r, i, a) {
  let o = [...t],
    s = Math.min(i * 1.15, (a - 6) / o.length);
  ((e.font = e.font.replace(
    /\d+px/,
    `${Math.floor(Math.min(i - 3, s * 0.92))}px`,
  )),
    o.forEach((t, c) =>
      xS(
        e,
        t,
        n + i / 2,
        r + (a - s * o.length) / 2 + s * (c + 0.5) + 1,
        i - 3,
      ),
    ));
}
