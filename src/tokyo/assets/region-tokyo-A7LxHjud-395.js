// tokyo/assets/region-tokyo-A7LxHjud 395 — fillstyle
// Lines 142873-143596 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function T0(e) {
  w0 = !0;
  try {
    e.canvas.lang = `ja`;
  } catch {}
  let t = new le(7389454),
    n = (t, n, r, i, a, o, s = 700, c = x0, l = 0.8, u = 0, d = `center`) => {
      (e.save(),
        (e.fillStyle = o),
        (e.textAlign = d),
        (e.textBaseline = `middle`));
      let f = a * l;
      ((e.font = `${s} ${f}px ${c}`), (e.letterSpacing = `${u}px`));
      let p = e.measureText(t).width;
      p > i * 0.94 && ((f *= (i * 0.94) / p), (e.font = `${s} ${f}px ${c}`));
      let m = d === `left` ? n : d === `right` ? n + i : n + i / 2;
      (e.fillText(t, m, r + a / 2 + f * 0.04), e.restore());
    },
    r = (t, n, r, i, a) => {
      (e.beginPath(),
        e.moveTo(t + a, n),
        e.arcTo(t + r, n, t + r, n + i, a),
        e.arcTo(t + r, n + i, t, n + i, a),
        e.arcTo(t, n + i, t, n, a),
        e.arcTo(t, n, t + r, n, a),
        e.closePath());
    },
    i = (t, n, i, a, o, s) => {
      ((e.fillStyle = s), r(t, n, i, a, o), e.fill());
    },
    a = (t, n, r, i, a, o, s = x0, c = 3, l = `center`) => {
      let [u, d] = Re(Math.ceil(i / c), Math.ceil(a / c));
      ((d.fillStyle = `#fff`), (d.textAlign = l), (d.textBaseline = `middle`));
      let f = u.height * 0.84;
      d.font = `800 ${f}px ${s}`;
      let p = d.measureText(t).width;
      (p > u.width * 0.96 && (f *= (u.width * 0.96) / p),
        (d.font = `800 ${f}px ${s}`),
        d.fillText(t, l === `left` ? 1 : u.width / 2, u.height / 2 + 1));
      let m = d.getImageData(0, 0, u.width, u.height).data;
      e.fillStyle = o;
      for (let t = 0; t < u.height; t++)
        for (let i = 0; i < u.width; i++)
          m[(t * u.width + i) * 4 + 3] > 90 &&
            (e.beginPath(),
            e.arc(
              n + i * c + c / 2,
              r + t * c + c / 2,
              c * 0.42,
              0,
              Math.PI * 2,
            ),
            e.fill());
    };
  {
    let a = [
        `shinagawa`,
        `adachi`,
        `nerima`,
        `koto`,
        `setagaya`,
        `suginami`,
      ].map((e) => L(`vehicles.plate.region.${e}`)),
      o = [...L(`vehicles.plate.kana.private`)],
      s = [...L(`vehicles.plate.kana.commercial`)],
      c = [`chiyoda`, `chuo`, `taito`, `minato`].map((e) =>
        L(`vehicles.plate.moped.${e}`),
      ),
      l = (e) => e[t.int(0, e.length - 1)],
      u = () => {
        if (t.next() < 0.8)
          return `${t.int(10, 99)}-${String(t.int(0, 99)).padStart(2, `0`)}`;
        let e = String(t.int(1, 999));
        return e.length === 3
          ? `・${e[0]} ${e.slice(1)}`
          : e.length === 2
            ? `・・ ${e}`
            : `・・・ ${e}`;
      },
      d = (t, a, o, s, c, l, u, d) => {
        (i(t + 3, a + 3, 122, 50, 5, o),
          (e.strokeStyle = d),
          (e.lineWidth = 1.6),
          r(t + 4.5, a + 4.5, 119, 47, 4),
          e.stroke(),
          (e.fillStyle = `rgba(0,0,0,0.28)`));
        for (let n of [t + 18, t + 128 - 18])
          (e.beginPath(), e.arc(n, a + 11, 2.6, 0, Math.PI * 2), e.fill());
        (n(c, t + 26, a + 6, 76, 15, s, 700, x0, 0.95),
          n(l, t + 7, a + 25, 18, 22, s, 700, x0, 0.82),
          n(u, t + 24, a + 21, 98, 31, s, 800, vFe, 1.02));
      };
    for (let f = 0; f < 4; f++) {
      let p = f * 128;
      if (
        (d(
          p,
          64,
          `#f6f6f0`,
          `#0f5a35`,
          `${l(a)} ${l([`300`, `330`, `500`, `531`, `301`])}`,
          l(o),
          u(),
          `#9aa69e`,
        ),
        d(
          p,
          120,
          `#0d5c38`,
          `#f4f4ee`,
          `${l(a)} ${l([`500`, `400`, `200`, `100`])}`,
          l(s),
          u(),
          `#073b23`,
        ),
        d(
          p,
          232,
          `#f1d13d`,
          `#151515`,
          `${l(a)} ${l([`580`, `583`, `480`, `581`])}`,
          l(o),
          u(),
          `#9b8420`,
        ),
        d(
          p,
          288,
          `#141414`,
          `#f0cf3a`,
          `${l(a)} ${l([`480`, `41`, `480`])}`,
          l(s),
          u(),
          `#3a3a3a`,
        ),
        f === 3)
      ) {
        d(p, 176, `#f6f6f0`, `#0f5a35`, l(a), l(o), u(), `#9aa69e`);
        continue;
      }
      let m = f === 0 ? `#f4f4f0` : f === 1 ? `#efd64a` : `#f0b4c4`;
      (i(p + 3, 179, 122, 50, 14, m),
        (e.strokeStyle = `#555`),
        (e.lineWidth = 1.4),
        r(p + 5, 181, 118, 46, 12),
        e.stroke(),
        n(c[f], p + 10, 183, 108, 16, `#1d2a5c`, 700, x0, 0.95),
        n(
          `${l([`あ`, `い`, `う`, `え`, `か`])} ${t.int(1e3, 9999)}`,
          p + 10,
          198,
          108,
          28,
          `#1d2a5c`,
          800,
          x0,
          0.95,
        ));
    }
  }
  let o = [`hinomoto`, `tokyoyusen`, `chesscab`, `cktaxi`],
    s = o.map((e) => L(`vehicles.taxi.co.${e}`)),
    c = [`#111111`, `#003f8e`, `#111111`, `#003f8e`],
    l = [`#e60012`, `#e60012`, `#e60012`, `#f2c230`],
    u = (t, n, r, i) => {
      if ((e.save(), t === 0))
        ((e.strokeStyle = `#111`),
          (e.lineWidth = Math.max(1.5, i * 0.16)),
          e.beginPath(),
          e.arc(n, r, i * 0.92, 0, Math.PI * 2),
          e.stroke(),
          (e.fillStyle = `#e60012`),
          e.beginPath(),
          e.arc(n, r, i * 0.58, 0, Math.PI * 2),
          e.fill());
      else if (t === 1)
        ((e.fillStyle = `#003f8e`),
          e.beginPath(),
          e.arc(n, r, i, 0, Math.PI * 2),
          e.fill(),
          (e.fillStyle = `#ffd400`),
          e.beginPath(),
          e.moveTo(n + i * 0.2, r - i * 0.8),
          e.lineTo(n - i * 0.42, r + i * 0.12),
          e.lineTo(n - i * 0.02, r + i * 0.12),
          e.lineTo(n - i * 0.22, r + i * 0.8),
          e.lineTo(n + i * 0.45, r - i * 0.15),
          e.lineTo(n + i * 0.05, r - i * 0.15),
          e.closePath(),
          e.fill());
      else if (t === 2) {
        let t = (i * 1.6) / 3;
        ((e.fillStyle = `#e60012`), e.fillRect(n - i, r - i, i * 2, i * 2));
        for (let a = 0; a < 3; a++)
          for (let o = 0; o < 3; o++)
            ((e.fillStyle = (a + o) % 2 ? `#ffffff` : `#111111`),
              e.fillRect(n - i * 0.8 + a * t, r - i * 0.8 + o * t, t, t));
      } else
        ((e.fillStyle = `#003f8e`),
          e.beginPath(),
          e.arc(n, r, i, 0, Math.PI * 2),
          e.fill(),
          (e.fillStyle = `#ffffff`),
          (e.font = `900 ${i * 1.15}px ${S0}`),
          (e.textAlign = `center`),
          (e.textBaseline = `middle`),
          e.fillText(`ck`, n, r - i * 0.06),
          (e.fillStyle = `#f2c230`),
          e.fillRect(n - i * 0.55, r + i * 0.5, i * 1.1, i * 0.16));
      e.restore();
    };
  o.forEach((t, r) => {
    let i = [512 + r * 128, 64, 128, 48];
    if (
      ((e.fillStyle = r === 0 ? `#f6d43a` : `#fbfaf2`),
      e.fillRect(...i),
      r === 2)
    )
      for (let t = 0; t < 16; t++)
        ((e.fillStyle = t % 2 ? `#111` : `#fff`),
          e.fillRect(i[0] + t * 8, i[1], 8, 5),
          (e.fillStyle = t % 2 ? `#fff` : `#111`),
          e.fillRect(i[0] + t * 8, i[1] + 5, 8, 5));
    let a = r === 2 ? 10 : 2;
    (u(r, i[0] + 17, i[1] + a + 12, 10),
      n(s[r], i[0] + 30, i[1] + a, i[2] - 33, 24, c[r], 900, x0, 0.8),
      (e.fillStyle = r === 0 ? `#111111` : l[r]),
      e.fillRect(i[0], i[1] + 35, i[2], 13),
      n(
        L(`vehicles.taxi.word`),
        i[0],
        i[1] + 35,
        i[2],
        13,
        r === 0 ? `#f6d43a` : `#ffffff`,
        900,
        C0,
        0.8,
        3,
      ));
  });
  {
    let [t, r, i, a] = [512, 112, 96, 64];
    ((e.fillStyle = `#fbf3df`),
      e.fillRect(t, r, i, a),
      (e.fillStyle = `#b3241f`),
      e.fillRect(t, r, i, 7),
      e.fillRect(t, r + a - 7, i, 7),
      n(
        L(`vehicles.taxi.kojin`),
        t + 4,
        r + 9,
        i - 8,
        a - 18,
        `#1a1410`,
        900,
        x0,
        0.86,
        2,
      ));
  }
  {
    let [t, n, r, i] = [608, 112, 112, 44];
    ((e.fillStyle = `#140404`),
      e.fillRect(t, n, r, i),
      a(L(`vehicles.taxi.vacant`), t + 2, n + 2, r - 4, i - 4, `#ff2a1a`));
  }
  {
    let [t, n, r, i] = [720, 112, 112, 44];
    ((e.fillStyle = `#031208`),
      e.fillRect(t, n, r, i),
      a(L(`vehicles.taxi.fare`), t + 2, n + 2, r - 4, i - 4, `#20c848`));
  }
  o.forEach((t, r) => {
    let [a, o, d, f] = [512, 176 + r * 48, 320, 48];
    (i(a + 2, o + 2, d - 4, f - 4, 8, `#fbfbf6`),
      (e.fillStyle = l[r]),
      e.fillRect(a + 8, o + f - 9, d - 16, 3),
      u(r, a + 24, o + 22, 15),
      n(s[r], a + 46, o + 3, d - 54, 28, c[r], 900, x0, 0.86, 2, `left`),
      n(
        L(`vehicles.taxi.phone`),
        a + 46,
        o + 29,
        d - 54,
        12,
        `#2a2a2a`,
        700,
        x0,
        0.95,
        0,
        `left`,
      ));
  });
  {
    let [t, n] = [768, 416];
    for (let r = 0; r < 32; r++)
      for (let i = 0; i < 2; i++)
        ((e.fillStyle = (r + i) % 2 ? `#111111` : `#ffffff`),
          e.fillRect(t + r * 8, n + i * 8, 8, 8));
    ((e.fillStyle = `#e60012`), e.fillRect(t, n + 16, 256, 6));
  }
  (n(L(`vehicles.taxi.cards`), 768, 380, 256, 32, `#1d1d1d`, 700, x0, 0.7),
    n(L(`vehicles.police.org`), 832, 176, 192, 64, `#111111`, 900, x0, 0.8, 10),
    n(L(`vehicles.police.word`), 832, 240, 192, 48, `#f4f4f4`, 900, C0, 0.7, 4),
    (e.fillStyle = `#101010`),
    e.fillRect(832, 288, 192, 40),
    n(L(`vehicles.police.org`), 832, 288, 192, 40, `#f4f4f4`, 900, x0, 0.74, 8),
    n(
      L(`vehicles.ambulance.word`),
      0,
      440,
      360,
      64,
      `#d0161d`,
      900,
      x0,
      0.8,
      14,
    ),
    n(
      L(`vehicles.ambulance.front`),
      360,
      440,
      160,
      56,
      `#d0161d`,
      900,
      x0,
      0.8,
      8,
    ),
    n(
      L(`vehicles.ambulance.org`),
      520,
      440,
      248,
      40,
      `#d0161d`,
      800,
      x0,
      0.7,
      4,
    ),
    n(
      `${L(`vehicles.garbage.ward`)}  ${L(`vehicles.garbage.word`)}`,
      0,
      512,
      360,
      64,
      `#13457a`,
      900,
      x0,
      0.74,
      6,
    ),
    n(L(`vehicles.garbage.notice`), 0, 580, 420, 40, `#13457a`, 700, x0, 0.6));
  {
    let [t, r] = [360, 512];
    ((e.fillStyle = `#f2c230`),
      e.beginPath(),
      e.arc(t + 32, r + 32, 28, 0, Math.PI * 2),
      e.fill(),
      (e.fillStyle = `#ffffff`),
      (e.strokeStyle = `#141414`),
      (e.lineWidth = 2),
      e.beginPath(),
      e.ellipse(t + 30, r + 42, 13, 9, 0, 0, Math.PI * 2),
      e.arc(t + 20, r + 28, 9, 0, Math.PI * 2),
      e.fill(),
      e.beginPath(),
      e.moveTo(t + 13, r + 24),
      e.lineTo(t + 13, r + 13),
      e.lineTo(t + 19, r + 20),
      e.moveTo(t + 27, r + 24),
      e.lineTo(t + 27, r + 13),
      e.lineTo(t + 21, r + 20),
      e.fill(),
      e.stroke(),
      e.beginPath(),
      e.ellipse(t + 30, r + 42, 13, 9, 0, 0, Math.PI * 2),
      e.stroke(),
      e.beginPath(),
      e.arc(t + 20, r + 28, 9, 0, Math.PI * 2),
      e.fill(),
      e.stroke(),
      (e.lineWidth = 3),
      e.beginPath(),
      e.moveTo(t + 42, r + 40),
      e.quadraticCurveTo(t + 54, r + 34, t + 50, r + 18),
      e.stroke(),
      (e.fillStyle = `#141414`),
      e.beginPath(),
      e.arc(t + 17, r + 27, 1.6, 0, Math.PI * 2),
      e.arc(t + 23, r + 27, 1.6, 0, Math.PI * 2),
      e.fill(),
      n(
        L(`vehicles.courier.yamane`),
        t + 68,
        r + 2,
        330,
        40,
        `#00843d`,
        900,
        x0,
        0.86,
        4,
        `left`,
      ),
      n(
        L(`vehicles.courier.yamane.tag`),
        t + 70,
        r + 42,
        300,
        20,
        `#00843d`,
        700,
        x0,
        0.9,
        2,
        `left`,
      ));
  }
  {
    let [t, r] = [0, 624];
    ((e.fillStyle = `#00479d`),
      e.beginPath(),
      e.arc(t + 32, r + 32, 28, 0, Math.PI * 2),
      e.fill(),
      (e.strokeStyle = `#fff`),
      (e.lineWidth = 4),
      (e.lineCap = `round`),
      e.beginPath(),
      e.arc(t + 36, r + 15, 5, 0, Math.PI * 2),
      e.moveTo(t + 34, r + 22),
      e.lineTo(t + 28, r + 36),
      e.lineTo(t + 38, r + 46),
      e.moveTo(t + 28, r + 36),
      e.lineTo(t + 18, r + 46),
      e.moveTo(t + 32, r + 27),
      e.lineTo(t + 42, r + 32),
      e.moveTo(t + 32, r + 27),
      e.lineTo(t + 22, r + 26),
      e.stroke(),
      n(
        L(`vehicles.courier.sayama`),
        t + 68,
        r + 2,
        330,
        40,
        `#00479d`,
        900,
        x0,
        0.86,
        4,
        `left`,
      ),
      n(
        L(`vehicles.courier.sayama.tag`),
        t + 70,
        r + 42,
        300,
        20,
        `#00479d`,
        700,
        x0,
        0.9,
        2,
        `left`,
      ));
  }
  (n(
    L(`vehicles.contractor.yamada`),
    400,
    624,
    320,
    36,
    `#1f2a44`,
    900,
    x0,
    0.86,
    6,
  ),
    n(
      L(`vehicles.contractor.phone`),
      400,
      660,
      320,
      20,
      `#1f2a44`,
      700,
      S0,
      0.9,
      1,
    ),
    n(
      L(`vehicles.keitruck.door`),
      0,
      690,
      320,
      48,
      `#1d4f25`,
      900,
      x0,
      0.82,
      8,
    ),
    n(
      `${L(`vehicles.bus.operator`)}`,
      0,
      372,
      512,
      60,
      `#ffffff`,
      900,
      x0,
      0.62,
      10,
    ),
    i(512, 374, 256, 44, 8, `#2a7d4a`),
    n(
      `♿ ${L(`vehicles.bus.nonstep`)}`,
      516,
      374,
      248,
      44,
      `#ffffff`,
      800,
      x0,
      0.62,
    ));
  for (let t = 0; t < mee.length; t++) {
    let n = L(`vehicles.bus.route.${t}.no`),
      r = L(`vehicles.bus.route.${t}.dest`),
      i = 760 + t * 32;
    ((e.fillStyle = `#0b0b0b`), e.fillRect(0, i, 768, 32));
    for (let e of [0, 320])
      (a(n, e + 3, i + 1, 104, 30, `#ffb21a`, x0, 2),
        a(
          `${r}${e === 0 ? ` 行` : ``}`,
          e + 104 + 8,
          i + 1,
          204,
          30,
          `#ffb21a`,
          x0,
          2,
        ));
    a(n, 642, i + 1, 124, 30, `#ffb21a`, x0, 2);
  }
  (n(
    L(`vehicles.brand.scooter`),
    330,
    690,
    160,
    40,
    `#d8d8d8`,
    900,
    C0,
    0.7,
    3,
  ),
    (e.fillStyle = `rgba(255,255,255,0.95)`),
    e.fillRect(508, 690, 18, 64),
    e.fillRect(538, 690, 18, 64),
    (e.fillStyle = `#0d0e10`),
    e.fillRect(580, 690, 128, 48),
    (e.strokeStyle = `#3a3d42`),
    (e.lineWidth = 2));
  for (let t = 0; t < 12; t++)
    (e.beginPath(),
      e.moveTo(580, 692 + t * 4),
      e.lineTo(708, 692 + t * 4),
      e.stroke());
  {
    let [t, r] = [768, 512];
    (i(t + 2, r + 2, 124, 108, 10, `#e60012`),
      (e.fillStyle = `#ffffff`),
      e.fillRect(t + 40, r + 50, 48, 22));
    for (let [n, i, a, o] of [
      [60, 36, 38, 12],
      [44, 22, 22, 12],
    ])
      (e.beginPath(),
        e.moveTo(t + 64 - n / 2, r + a + o),
        e.lineTo(t + 64 + n / 2, r + a + o),
        e.lineTo(t + 64 + i / 2, r + a),
        e.lineTo(t + 64 - i / 2, r + a),
        e.closePath(),
        e.fill());
    ((e.fillStyle = `#e60012`),
      e.fillRect(t + 58, r + 60, 12, 12),
      n(
        L(`vehicles.delivery.demaejo`),
        t,
        r + 76,
        128,
        30,
        `#ffffff`,
        900,
        x0,
        0.86,
        4,
      ),
      (t = 896),
      i(t + 2, r + 2, 124, 108, 10, `#161616`),
      (e.fillStyle = `#06c167`),
      e.beginPath(),
      e.arc(t + 46, r + 22, 9, 0, Math.PI * 2),
      e.arc(t + 82, r + 22, 9, 0, Math.PI * 2),
      e.fill(),
      e.beginPath(),
      e.arc(t + 64, r + 40, 22, 0, Math.PI * 2),
      e.fill(),
      (e.fillStyle = `#161616`),
      e.beginPath(),
      e.arc(t + 56, r + 36, 2.8, 0, Math.PI * 2),
      e.arc(t + 72, r + 36, 2.8, 0, Math.PI * 2),
      e.fill(),
      e.beginPath(),
      e.ellipse(t + 64, r + 47, 5, 3.6, 0, 0, Math.PI * 2),
      e.fill(),
      n(
        L(`vehicles.delivery.beareats`),
        t,
        r + 70,
        128,
        32,
        `#06c167`,
        900,
        C0,
        0.78,
        1,
      ));
  }
  {
    let [t, i, a, o] = [64, 2, 160, 56],
      s = e.createLinearGradient(0, i, 0, i + o);
    (s.addColorStop(0, `#f4f5f6`),
      s.addColorStop(0.5, `#9ea3a8`),
      s.addColorStop(1, `#e6e8ea`),
      (e.fillStyle = s),
      r(t + 6, i + 8, a - 12, o - 16, 18),
      e.fill(),
      (e.strokeStyle = `#5b5f64`),
      (e.lineWidth = 2),
      r(t + 8, i + 10, a - 16, o - 20, 16),
      e.stroke(),
      n(
        L(`vehicles.brand.moto`),
        t + 10,
        i + 10,
        a - 60,
        o - 20,
        `#b3141b`,
        900,
        x0,
        0.86,
      ),
      n(`125`, t + a - 58, i + 16, 46, o - 32, `#1b1b1b`, 900, C0, 0.8),
      n(`125`, 224, 2, 96, 56, `#f2f2f0`, 900, C0, 0.62),
      e.save(),
      e.translate(440, 30),
      e.transform(1, 0, -0.22, 1, 0, 0),
      n(`TYPHOON`, -118, -26, 200, 44, `#ffffff`, 900, C0, 0.72, 2),
      n(`R1K`, 78, -18, 40, 34, `#ffd23f`, 900, C0, 0.8),
      e.restore(),
      (e.fillStyle = `rgba(255,255,255,0.95)`),
      e.beginPath(),
      e.moveTo(560, 44),
      e.lineTo(784, 20),
      e.lineTo(784, 30),
      e.lineTo(560, 54),
      e.fill(),
      (e.fillStyle = `rgba(20,20,22,0.95)`),
      e.beginPath(),
      e.moveTo(560, 36),
      e.lineTo(784, 12),
      e.lineTo(784, 18),
      e.lineTo(560, 42),
      e.fill(),
      n(`46`, 690, 30, 60, 28, `#ffffff`, 900, C0, 0.9));
  }
  ((e.fillStyle = `#f4f5f7`),
    e.fillRect(784, 14, 240, 32),
    (e.fillStyle = `#c8161d`),
    e.fillRect(784, 46, 240, 5),
    n(L(`vehicles.police.org`), 784, 14, 240, 32, `#111111`, 900, x0, 0.8, 6),
    (e.fillStyle = `#737c7b`),
    e.fillRect(768, 896, 128, 96),
    (e.fillStyle = `#eeeee6`),
    e.fillRect(768, 896, 128, 8),
    (e.fillStyle = `#4f5655`),
    e.fillRect(768, 905, 128, 2),
    (e.fillStyle = `#949d9f`));
  for (let t = 0; t < 4; t++) e.fillRect(772 + t * 32, 912, 24, 34);
  ((e.fillStyle = `#5f6766`),
    e.fillRect(768, 929, 128, 1),
    (e.fillStyle = `#3e4544`),
    e.fillRect(768, 909, 128, 2),
    (e.strokeStyle = `#3a413f`),
    (e.lineWidth = 1.5));
  for (let t = 0; t < 8; t++) {
    let n = 776 + t * 16;
    (e.fillRect(n, 911, 1, 9),
      e.beginPath(),
      e.arc(n + 0.5, 923, 3, 0, Math.PI * 2),
      e.stroke());
  }
  e.fillStyle = `#2e3335`;
  for (let [t, n, r] of [
    [22, 13, 30],
    [70, 12, 36],
    [98, 14, 28],
  ])
    (e.beginPath(),
      e.arc(768 + t, 896 + r, 5, 0, Math.PI * 2),
      e.fill(),
      e.fillRect(768 + t - n / 2, 896 + r + 5, n, 96 - r - 5));
  e.fillStyle = `#36566a`;
  for (let t = 0; t < 6; t++) e.fillRect(771 + t * 21, 958, 17, 34);
  e.fillStyle = `#8c9292`;
  for (let t = 0; t < 6; t++) e.fillRect(771 + t * 21, 956, 17, 2);
}
