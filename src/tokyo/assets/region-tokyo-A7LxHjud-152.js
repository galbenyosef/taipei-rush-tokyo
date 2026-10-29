// tokyo/assets/region-tokyo-A7LxHjud 152 — fillstyle
// Lines 63910-64206 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function $pe(e, t, n, r, i, a, o) {
  ((e.textAlign = `center`), (e.textBaseline = `middle`));
  let s = (e) => {
    let [r, i, a, o] = vS[e];
    return [t + r, n + i, a - r, o - i];
  };
  {
    let [t, n, r, i] = s(`magnit`);
    ((e.fillStyle = `#16181c`),
      e.fillRect(t, n, r, i),
      (e.fillStyle = `#e0222f`),
      e.fillRect(t + 3, n + 3, r - 6, i - 6),
      (e.fillStyle = `#ffffff`),
      (e.font = bS(900, 15, Zpe(o))),
      xS(e, yo(`landmark.shibuya.magnit`).ja, t + r / 2, n + i / 2 + 1, r - 14),
      a(t, n, r, i, 1));
  }
  {
    let [t, n, r, i] = s(`kuri`);
    ((e.fillStyle = `#c4161c`),
      e.fillRect(t, n, r, i),
      (e.fillStyle = `#ffe14a`),
      (e.font = bS(900, 15, o.sans)),
      xS(e, yo(`landmark.shibuya.kuri`).ja, t + r / 2, n + i / 2 + 1, r - 6),
      a(t, n, r, i, 1));
  }
  {
    let [t, n, r, i] = s(`wrap`),
      o = e.createLinearGradient(0, n, 0, n + i);
    (o.addColorStop(0, `#f7c6d6`),
      o.addColorStop(1, `#e8a0bc`),
      (e.fillStyle = o),
      e.fillRect(t, n, r, i));
    let c = t + r * 0.5;
    (SS(e, c, n + i * 0.24, r * 0.36, i * 0.17, `#2a1d1a`),
      SS(e, c + 1, n + i * 0.26, r * 0.2, i * 0.1, `#f4d0bf`),
      SS(e, c - 2.5, n + i * 0.25, 1, 0.8, `#3a2a28`),
      SS(e, c + 4.5, n + i * 0.25, 1, 0.8, `#3a2a28`),
      SS(e, c + 1, n + i * 0.31, 1.6, 0.7, `#c8455a`),
      (e.fillStyle = `#c4162a`),
      e.beginPath(),
      e.moveTo(t + r * 0.1, n + i * 0.8),
      e.lineTo(t + r * 0.22, n + i * 0.4),
      e.lineTo(t + r * 0.78, n + i * 0.4),
      e.lineTo(t + r * 0.9, n + i * 0.8),
      e.fill(),
      (e.fillStyle = `#ffffff`),
      e.fillRect(t + 2, n + i * 0.84, r - 4, i * 0.1),
      (e.fillStyle = `#c4162a`),
      e.fillRect(t + 5, n + i * 0.875, r - 10, 1.4),
      a(t, n, r, i, 1));
  }
  {
    let [t, n, r, i] = s(`vision`);
    ((e.fillStyle = `#0d0a10`),
      e.fillRect(t, n, r, i),
      (e.strokeStyle = `#3a2420`),
      (e.lineWidth = 3),
      e.beginPath(),
      e.moveTo(t + r * 0.05, n + i * 0.95),
      e.quadraticCurveTo(
        t + r * 0.35,
        n + i * 0.55,
        t + r * 0.95,
        n + i * 0.18,
      ),
      e.stroke(),
      (e.lineWidth = 1.6),
      e.beginPath(),
      e.moveTo(t + r * 0.45, n + i * 0.5),
      e.quadraticCurveTo(t + r * 0.55, n + i * 0.8, t + r * 0.75, n + i * 0.92),
      e.stroke());
    let o = yS(2203);
    for (let a = 0; a < 26; a++) {
      let s = o(),
        c = t + r * (0.08 + s * 0.85),
        l = n + i * (0.9 - s * 0.7) + (o() - 0.5) * 12;
      (SS(e, c, l, 3.2, 3.2, a % 3 ? `#f2a2c4` : `#ffd6e6`),
        SS(e, c, l, 1, 1, `#ffe58a`));
    }
    (CS(e, t, n, r, i), a(t, n, r, i, 1));
  }
  {
    let [t, n, r, i] = s(`taisei`);
    ((e.fillStyle = `#f6f7f8`),
      e.fillRect(t, n, r, i),
      (e.fillStyle = `#1d4fa8`),
      e.fillRect(t, n + i - 3, r, 3),
      (e.font = bS(800, 12, o.sans)),
      xS(e, yo(`landmark.shibuya.taisei`).ja, t + r / 2, n + i / 2, r - 10),
      a(t, n, r, i, 1));
  }
  {
    let [t, n, r, i] = s(`bill1`);
    ((e.fillStyle = `#f7e43c`),
      e.fillRect(t, n, r, i),
      SS(e, t + r * 0.2, n + i * 0.55, 15, 12, `#c8d82a`),
      SS(e, t + r * 0.2, n + i * 0.55, 11, 8.5, `#f9f6c8`),
      SS(e, t + r * 0.34, n + i * 0.3, 9, 7, `#e8c81a`),
      (e.fillStyle = `#dfe6ea`),
      e.fillRect(t + r * 0.8, n + i * 0.18, 13, 30),
      (e.fillStyle = `#2b9a4a`),
      e.fillRect(t + r * 0.8, n + i * 0.36, 13, 8),
      (e.fillStyle = `#1a3a7a`),
      (e.font = bS(900, 14, o.sans)),
      xS(
        e,
        yo(`landmark.shibuya.ad.soda`).ja,
        t + r * 0.56,
        n + i * 0.42,
        r * 0.42,
      ),
      a(t, n, r, i, 1));
  }
  {
    let [t, n, r, i] = s(`bill2`);
    ((e.fillStyle = `#ffffff`),
      e.fillRect(t, n, r, i),
      e.save(),
      e.translate(t + r * 0.25, n + i * 0.48),
      e.rotate(-0.25),
      (e.fillStyle = `#d82a3a`),
      e.fillRect(-18, -11, 36, 22),
      (e.fillStyle = `#f2c84a`),
      e.fillRect(-13, -4, 7, 5),
      e.restore(),
      (e.fillStyle = `#123c8c`),
      e.fillRect(t + r * 0.48, n, r * 0.52, i),
      (e.fillStyle = `#ffffff`),
      (e.font = bS(800, 11, o.sans)),
      xS(
        e,
        yo(`landmark.shibuya.ad.card`).ja,
        t + r * 0.74,
        n + i / 2,
        r * 0.46,
      ),
      a(t, n, r, i, 1));
  }
  {
    let [t, n, r, i] = s(`bill3`);
    ((e.fillStyle = `#0f8a4a`),
      e.fillRect(t, n, r, i),
      (e.fillStyle = `#ffffff`),
      e.fillRect(t + 8, n + 8, r * 0.28, i - 16),
      (e.fillStyle = `#0f8a4a`),
      e.fillRect(t + 12, n + i / 2 - 3, r * 0.28 - 8, 6),
      (e.fillStyle = `#ffffff`),
      (e.font = bS(900, 16, o.sans)),
      xS(
        e,
        yo(`landmark.shibuya.ad.lozenge`).ja,
        t + r * 0.66,
        n + i / 2 + 1,
        r * 0.6,
      ),
      a(t, n, r, i, 1));
  }
  {
    let [t, n, r, i] = s(`vision2`),
      o = e.createLinearGradient(0, n, 0, n + i);
    (o.addColorStop(0, `#2a1a5a`),
      o.addColorStop(1, `#e05a8a`),
      (e.fillStyle = o),
      e.fillRect(t, n, r, i));
    let c = yS(911);
    for (let a = 0; a < 14; a++) {
      let a = 6 + c() * 10,
        o = 10 + c() * 26,
        s = t + c() * r;
      ((e.fillStyle = `#140c26`),
        e.fillRect(s, n + i - o, a, o),
        (e.fillStyle = `#ffd86a`));
      for (let t = 0; t < 4; t++)
        e.fillRect(
          s + 1 + c() * (a - 3),
          n + i - o + 2 + c() * (o - 4),
          1.2,
          1.2,
        );
    }
    ((e.fillStyle = `rgba(255,255,255,0.9)`),
      e.fillRect(t + 5, n + 5, r * 0.4, 4),
      CS(e, t, n, r, i),
      a(t, n, r, i, 1));
  }
  for (let [t, n, r, i] of [
    [`blade0`, `#d42a2a`, `#ffffff`, `landmark.shibuya.blade.karaoke`],
    [`blade1`, `#ffffff`, `#1a4fb0`, `landmark.shibuya.blade.kusuri`],
    [`blade2`, `#1d5fc8`, `#ffffff`, `landmark.shibuya.blade.contact`],
    [`blade3`, `#f6efe0`, `#b0201a`, `landmark.shibuya.blade.izakaya`],
  ]) {
    let [c, l, u, d] = s(t);
    ((e.fillStyle = n),
      e.fillRect(c, l, u, d),
      (e.fillStyle = r),
      (e.font = bS(900, 13, o.sans)),
      Qpe(e, yo(i).ja, c, l, u, d),
      a(c, l, u, d, 1));
  }
}
var wS = {
    takeshita: [0, 128],
    sunriseSt: [128, 320],
    sunriseCity: [320, 448],
    seimu: [448, 512],
    tobu: [512, 576],
    pargo: [576, 640],
  },
  eme = {
    takeshita: `landmark.p3hi.takeshita`,
    sunriseSt: `landmark.p3hi.sunriseStreet`,
    sunriseCity: `landmark.p3hi.sunriseCity`,
    seimu: `landmark.p3hi.seimu`,
    tobu: `landmark.p3hi.tobu`,
    pargo: `landmark.p3hi.pargo`,
  },
  tme = {
    takeshita: {
      bg: `#fffaf4`,
      fg: [`#ff4f9a`, `#ff9a1f`, `#2fbf71`, `#2f8fff`],
      edge: `#ff8fc4`,
    },
    sunriseSt: { bg: `#1c2f6b`, fg: `#ffffff`, edge: `#f2c230` },
    sunriseCity: { bg: `#0e5a62`, fg: `#ffffff`, edge: `#0a3e44` },
    seimu: { bg: `#1f3f9a`, fg: `#ffffff`, edge: `#132a6a` },
    tobu: { bg: `#c8461e`, fg: `#ffffff`, edge: `#8a2e12` },
    pargo: { bg: `#ffffff`, fg: `#111111`, edge: `#d8d8d8`, latin: !0 },
  };
function nme(e, t, n, r, i, a, o) {
  ((e.textAlign = `center`), (e.textBaseline = `middle`));
  for (let r of Object.keys(wS)) {
    let [s, c] = wS[r],
      l = tme[r],
      u = t + s,
      d = c - s;
    ((e.fillStyle = l.edge),
      e.fillRect(u, n, d, i),
      (e.fillStyle = l.bg),
      e.fillRect(u + 2, n + 2, d - 4, i - 4),
      a(u, n, d, i, 0.55));
    let f = yo(eme[r]).ja,
      p = [...f];
    e.font = `900 ${Math.round(i * (l.latin ? 0.62 : 0.7))}px ${l.latin ? `Helvetica, Arial, ${o.sans}` : o.sans}`;
    let m = e.measureText(f).width,
      h = d - 10,
      g = m > h ? h / m : 1;
    if (
      (e.save(),
      e.translate(u + d / 2, n + i / 2 + 1),
      e.scale(g, 1),
      Array.isArray(l.fg))
    ) {
      let t = p.map((t) => e.measureText(t).width),
        n = -t.reduce((e, t) => e + t, 0) / 2;
      ((e.textAlign = `left`),
        (e.lineWidth = 3),
        (e.strokeStyle = `#ffffff`),
        p.forEach((r, i) => {
          ((e.fillStyle = l.fg[i % l.fg.length]),
            e.strokeText(r, n, 0),
            e.fillText(r, n, 0),
            (n += t[i]));
        }),
        (e.textAlign = `center`));
    } else ((e.fillStyle = l.fg), e.fillText(f, 0, 0));
    (e.restore(),
      a(
        u + 4,
        n + 4,
        d - 8,
        i - 8,
        l.bg === `#ffffff` || l.bg === `#fffaf4` ? 0.7 : 1,
      ));
  }
}
var TS = {
    station: [0, 256],
    omotesando: [256, 384],
    takeshita: [384, 480],
    west: [480, 560],
    bridge: [560, 656],
    old: [656, 768],
    tkStreet: [768, 912],
    posterA: [912, 968],
    posterB: [968, 1024],
  },
  ES = 1024;
function DS(e, t, n, r, i) {
  let a = e.measureText(t).width,
    o = a > i ? i / a : 1;
  (e.save(),
    e.translate(n, r),
    e.scale(o, 1),
    e.fillText(t, 0, 0),
    e.restore());
}
