// tokyo__assets__region-tokyo-d-marunouchi-BoijeA75 02 — math
// Lines 332-667 of readable/tokyo__assets__region-tokyo-d-marunouchi-BoijeA75.pretty.js (statement-aligned).
function ve(e, t, n, r = 11) {
  (_e(e, 0.75),
    e.setMaterial(0.95, 0, 0, 0),
    _(e, 9076336),
    A(e, 0, 0, 0, 8.6, 0.15, 6, 0.09, !1));
  for (let n = 0; n < (t === `bare` ? 11 : 6); n++) {
    let t = n * 2.3 + r,
      i = 3.4 + n * 0.6,
      a = 1.25 - n * 0.07;
    j(e, 0, i, 0, Math.cos(t) * a, i + 1.1, Math.sin(t) * a, 0.045, 3);
  }
  t !== `bare` &&
    (e.setMaterial(0.9, 0, 0, 0),
    he(
      e,
      0,
      7.4,
      0,
      1.75,
      4.1,
      1.75,
      n ? 18 : 5,
      n ? 0.85 : 1.35,
      ge.ginkgo[t],
      r,
      0.34,
    ));
}
function ye(e, t, n, r = 5, i = `naka`) {
  (_e(e, 0.7),
    e.setMaterial(0.95, 0, 0, 0),
    _(e, 6773583),
    A(e, 0, 0, 0, 4, 0.2, 6, 0.13, !1));
  for (let [t, n] of be) j(e, 0, 3.3, 0, t * 1.6, 6.2, n * 1.6, 0.075, 4);
  if (t === `bare`) {
    for (let [t, n] of be)
      j(e, t * 1.6, 6.2, n * 1.6, t * 2.6, 7.6, n * 2.6, 0.03, 3);
    return;
  }
  (e.setMaterial(0.9, 0, 0, 0),
    he(e, 0, 6.9, 0, 2.9, 1.9, 2.9, n ? 16 : 5, n ? 0.95 : 1.55, ge[i][t], r));
}
var be = [
    [1, 0.3],
    [-0.8, 0.6],
    [0.2, -1],
    [-0.3, -0.7],
    [0.75, -0.65],
  ],
  xe = 16045196;
function Se(e, t, n = 5, r = !1) {
  let i = de(n * 977 + 3),
    a = r ? 0.34 : 1,
    o = r ? 1.7 : 1;
  (e.setMaterial(0.6, 0, a, 1), _(e, xe));
  let s = 0.21,
    c = 0.6,
    l = 0;
  for (let t = 1; t <= 32; t++) {
    let n = t / 32,
      r = n * Math.PI * 10,
      i = 0.21 - n * 0.07,
      a = Math.cos(r) * i,
      o = 0.6 + n * 3,
      u = Math.sin(r) * i;
    (j(e, s, c, l, a, o, u, 0.018, 3), (s = a), (c = o), (l = u));
  }
  e.setMaterial(0.6, 0, 0.55 * a, 1);
  for (let [t, n] of be)
    (j(e, 0, 3.3, 0, t * 1.6, 6.2, n * 1.6, 0.014 * o, 3),
      j(e, t * 1.6, 6.2, n * 1.6, t * 2.75, 7.7, n * 2.75, 0.011 * o, 3),
      j(
        e,
        t * 1.6,
        6.2,
        n * 1.6,
        t * 2.3 - n * 0.9,
        8.3,
        n * 2.3 + t * 0.9,
        0.01 * o,
        3,
      ));
  e.setMaterial(0.6, 0, a, 1);
  let u = Math.PI * (3 - Math.sqrt(5));
  for (let n = 0; n < t; n++) {
    let r = 1 - (2 * (n + 0.5)) / t;
    if (r < -0.75) continue;
    let a = Math.sqrt(Math.max(0, 1 - r * r)),
      s = n * u + i() * 0.4,
      c = 1.04 + i() * 0.08,
      l = Math.cos(s) * a,
      d = Math.sin(s) * a,
      f = l * 2.9 * c,
      p = 6.9 + r * 1.9 * c,
      m = d * 2.9 * c,
      h = 0.07 * o,
      g = -d * h,
      _ = l * h;
    (e.quad(
      f - g,
      p,
      m - _,
      f,
      p - h,
      m,
      f + g,
      p,
      m + _,
      f,
      p + h,
      m,
      N.u,
      N.v,
      N.u,
      N.v,
    ),
      e.quad(
        f + g,
        p,
        m + _,
        f,
        p - h,
        m,
        f - g,
        p,
        m - _,
        f,
        p + h,
        m,
        N.u,
        N.v,
        N.u,
        N.v,
      ));
  }
}
function Ce(e, t, n = 11, r = !1) {
  let i = de(n * 613 + 5),
    a = r ? 0.34 : 1,
    o = r ? 1.7 : 1;
  (e.setMaterial(0.6, 0, a, 1), _(e, xe));
  let s = 0.21,
    c = 0.8,
    l = 0;
  for (let t = 1; t <= 36; t++) {
    let n = t / 36,
      r = n * Math.PI * 14,
      i = 0.22 - n * 0.09,
      a = Math.cos(r) * i,
      u = 0.8 + n * 5,
      d = Math.sin(r) * i;
    (j(e, s, c, l, a, u, d, 0.018 * o, 3), (s = a), (c = u), (l = d));
  }
  let u = Math.PI * (3 - Math.sqrt(5));
  for (let n = 0; n < t; n++) {
    let r = 1 - (2 * (n + 0.5)) / t,
      a = Math.sqrt(Math.max(0, 1 - r * r)),
      s = 1 - 0.66 * (r * 0.5 + 0.5),
      c = n * u + i() * 0.4,
      l = Math.cos(c) * a,
      d = Math.sin(c) * a,
      f = l * 1.75 * s * 1.08,
      p = 7.4 + r * 4.1,
      m = d * 1.75 * s * 1.08,
      h = 0.07 * o,
      g = -d * h,
      _ = l * h;
    (e.quad(
      f - g,
      p,
      m - _,
      f,
      p - h,
      m,
      f + g,
      p,
      m + _,
      f,
      p + h,
      m,
      N.u,
      N.v,
      N.u,
      N.v,
    ),
      e.quad(
        f + g,
        p,
        m + _,
        f,
        p - h,
        m,
        f - g,
        p,
        m - _,
        f,
        p + h,
        m,
        N.u,
        N.v,
        N.u,
        N.v,
      ));
  }
}
function we(e, t, n, r, i, a, o, s, c = !0) {
  (e.setMaterial(0.95, 0, 0, 0),
    _(e, 5918272),
    j(e, t, n, r, t, n + i, r, 0.17, 6, 0.1, !1, !1),
    e.setMaterial(0.9, 0, 0, 0),
    he(e, t, n + i + a * 0.55, r, a, a * 0.8, a, c ? 12 : 5, a * 0.42, o, s));
}
var Te = [
    [3099690, 3824176, 2638886, 3428912],
    [3824174, 4614202, 3296810, 4218420],
    [4876852, 5797950, 4218926, 5403194],
  ],
  Ee = [8036426, 9089110, 7115842];
function R(e, t, n, r, i, a, o, s = g(), c = `bold`) {
  e.font = `${c} ${a}px ${s}`;
  let l = e.measureText(t).width;
  (l > i && (e.font = `${c} ${Math.max(6, Math.floor((a * i) / l))}px ${s}`),
    (e.fillStyle = o),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    e.fillText(t, n, r));
}
var z = (e) => [(e >> 16) & 255, (e >> 8) & 255, e & 255],
  B = (e, t = 1) =>
    `rgb(${Math.min(255, ((e >> 16) & 255) * t) | 0},${Math.min(255, ((e >> 8) & 255) * t) | 0},${Math.min(255, (e & 255) * t) | 0})`;
function V(e, t, n, r, i, a, o, s) {
  let c = e.createLinearGradient(0, r, 0, r + a);
  (c.addColorStop(0, B(o)),
    c.addColorStop(1, B(s)),
    (e.globalAlpha = 1),
    (e.fillStyle = c),
    e.fillRect(n, r, i, a),
    (e.fillStyle = `rgba(255,255,255,0.10)`),
    e.fillRect(n, r + a * 0.06, i, a * 0.05),
    (e.fillStyle = `rgba(20,24,28,0.16)`),
    e.fillRect(n, r + a * 0.62, i, a * 0.08),
    (e.fillStyle = `rgba(255,255,255,${0.05 + t.next() * 0.06})`),
    e.beginPath(),
    e.moveTo(n + i * 0.15, r),
    e.lineTo(n + i * 0.42, r),
    e.lineTo(n + i * 0.2, r + a),
    e.lineTo(n - i * 0.07, r + a),
    e.closePath(),
    e.fill());
}
function De(e, t, n, r, i, a = 0.18) {
  (e.save(),
    (e.globalCompositeOperation = `destination-in`),
    (e.fillStyle = `rgba(0,0,0,${a})`),
    e.fillRect(t, n, r, i),
    e.restore());
}
var Oe = {
  en: {
    frame: 11967100,
    top: 10465468,
    bot: 5925494,
    spandrel: 0.3,
    mullion: 0.12,
  },
  shinen: {
    frame: 13028560,
    top: 10335430,
    bot: 5005940,
    spandrel: 0.18,
    mullion: 0.05,
    split: !0,
  },
  hagaki: {
    frame: 14672868,
    top: 12109519,
    bot: 7044747,
    spandrel: 0.16,
    mullion: 0.04,
    split: !0,
  },
  park: {
    frame: 15132386,
    top: 10793142,
    bot: 5661290,
    spandrel: 0.22,
    mullion: 0.06,
    fin: 15790316,
  },
  ote: {
    frame: 9082010,
    top: 8229795,
    bot: 3359052,
    spandrel: 0.12,
    mullion: 0.035,
    split: !0,
  },
  one: {
    frame: 13814976,
    top: 10136244,
    bot: 5135462,
    spandrel: 0.34,
    mullion: 0.16,
  },
  meiji: {
    frame: 13616045,
    top: 10004142,
    bot: 5003360,
    spandrel: 0.32,
    mullion: 0.14,
  },
};
function ke(e) {
  let n = Oe[e];
  return (i, a, o, s, c) => {
    let l = new t(r(`maru-cw`, e));
    i.clearRect(a, o, s, c);
    let u = s / 4,
      d = c / 4;
    I(i, a, o, s, c, B(n.frame), 0.2);
    for (let e = 0; e < 4; e++)
      for (let t = 0; t < 4; t++) {
        let r = a + t * u + (u * n.mullion) / 2,
          s = o + e * d + d * n.spandrel,
          c = u * (1 - n.mullion),
          f = d * (1 - n.spandrel) - 1;
        (V(i, l, r, s, c, f, n.top, n.bot),
          n.split && I(i, r + c / 2 - 1, s, 2, f, B(n.frame, 0.92), 0.2));
      }
    if (n.fin)
      for (let e = 0; e <= 4; e++)
        I(i, a + e * u - u * 0.07, o, u * 0.14, c, B(n.fin), 0.25);
    for (let e = 0; e < 4; e++)
      I(i, a, o + e * d + d * n.spandrel - 2, s, 2, `rgba(0,0,0,0.25)`, 0.2);
  };
}
