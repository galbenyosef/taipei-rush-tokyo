// tokyo/assets/actors-Bnj6Q1ad 22 — fillstyle
// Lines 11571-12067 of readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js (statement-aligned).
function Cc(e) {
  let t = new Pe(8002529),
    n = () => `ABCDEFGHJKLMNPQRSTUVWXYZ`[t.int(0, 23)],
    r = () => String(t.int(0, 9)),
    i = (t, n, r, i, a, o, s = 700, c = ft, l = 0.8, u = 0) => {
      (e.save(),
        (e.fillStyle = o),
        (e.textAlign = `center`),
        (e.textBaseline = `middle`));
      let d = a * l;
      ((e.font = `${s} ${d}px ${c}`), (e.letterSpacing = `${u}px`));
      let f = e.measureText(t).width;
      (f > i * 0.94 && ((d *= (i * 0.94) / f), (e.font = `${s} ${d}px ${c}`)),
        e.fillText(t, n + i / 2, r + a / 2 + d * 0.04),
        e.restore());
    },
    a = (t, n, r, i, a) => {
      (e.beginPath(),
        e.moveTo(t + a, n),
        e.arcTo(t + r, n, t + r, n + i, a),
        e.arcTo(t + r, n + i, t, n + i, a),
        e.arcTo(t, n + i, t, n, a),
        e.arcTo(t, n, t + r, n, a),
        e.closePath());
    };
  for (let t = 0; t < 4; t++)
    for (let o = 0; o < 4; o++) {
      let s = o * 128,
        c = 64 + t * 56;
      ((e.fillStyle = `#f4f4ef`),
        a(s + 3, c + 3, 122, 50, 6),
        e.fill(),
        (e.strokeStyle = `#222`),
        (e.lineWidth = 2.5),
        a(s + 5, c + 5, 118, 46, 5),
        e.stroke());
      let l,
        u = `#111`;
      (t === hc.car
        ? (l = `${n()}${n()}${n()}-${r()}${r()}${r()}${r()}`)
        : t === hc.commercial
          ? ((l = `K${n()}${n()}-${r()}${r()}${r()}${r()}`), (u = `#c0161c`))
          : t === hc.scooter
            ? (l = `${n()}${n()}${n()}-${r()}${r()}${r()}`)
            : ((l = `T${n()}${n()}-${r()}${r()}${r()}${r()}`), (u = `#c0161c`)),
        i(
          l,
          s + 8,
          c + 12,
          112,
          36,
          u,
          800,
          `Arial Narrow, Helvetica, Arial, sans-serif`,
          0.95,
        ),
        t === hc.scooter &&
          i(`臺北市`, s + 8, c + 5, 112, 11, `#333`, 600, ft, 1));
    }
  {
    let t = [512, 64, 128, 44];
    ((e.fillStyle = `#fbfaf2`),
      e.fillRect(...t),
      i(
        `TAXI`,
        t[0],
        t[1],
        t[2],
        t[3],
        `#111`,
        900,
        `Arial Black, Helvetica, Arial, sans-serif`,
        0.8,
        2,
      ));
    let n = [640, 64, 160, 44];
    ((e.fillStyle = `#fbfaf2`),
      e.fillRect(...n),
      i(`計程車`, n[0], n[1], n[2], n[3], `#c8161d`, 900, ft, 0.8, 4));
    let r = [800, 64, 112, 44];
    ((e.fillStyle = `#120404`),
      e.fillRect(...r),
      o(`空車`, r[0], r[1], r[2], r[3], `#ff2a1a`),
      i(`臺北小黃 計程車`, 512, 112, 320, 32, `#161616`, 800, ft, 0.85),
      i(
        `TAXI · 24H 叫車 (02)5566-8899`,
        512,
        144,
        320,
        22,
        `#161616`,
        700,
        ft,
        0.8,
      ));
  }
  function o(t, n, r, i, a, o, s = ft, c = 3) {
    let [l, u] = xt(Math.ceil(i / c), Math.ceil(a / c));
    ((u.fillStyle = `#fff`),
      (u.textAlign = `center`),
      (u.textBaseline = `middle`));
    let d = l.height * 0.82;
    u.font = `800 ${d}px ${s}`;
    let f = u.measureText(t).width;
    (f > l.width * 0.94 && (d *= (l.width * 0.94) / f),
      (u.font = `800 ${d}px ${s}`),
      u.fillText(t, l.width / 2, l.height / 2 + 1));
    let p = u.getImageData(0, 0, l.width, l.height).data;
    e.fillStyle = o;
    for (let t = 0; t < l.height; t++)
      for (let i = 0; i < l.width; i++)
        p[(t * l.width + i) * 4 + 3] > 90 &&
          (e.beginPath(),
          e.arc(n + i * c + c / 2, r + t * c + c / 2, c * 0.42, 0, Math.PI * 2),
          e.fill());
  }
  {
    let t = `Arial Black, Helvetica, sans-serif`;
    (gc.forEach(([n, r], i) => {
      let a = _c + i * vc;
      ((e.fillStyle = `#0b0b0b`), e.fillRect(0, a, 768, vc));
      let s = /[^0-9A-Za-z]/.test(n),
        c = s ? 104 : 86;
      for (let e of [0, 320])
        (o(n, e + 3, a + 1, c, 30, `#ffb21a`, s ? ft : t, 2),
          o(
            e === 0 ? r : r.replace(` `, ``),
            e + c + 8,
            a + 1,
            320 - c - 12,
            30,
            `#ffb21a`,
            ft,
            2,
          ));
      o(n, 642, a + 1, 124, 30, `#ffb21a`, s ? ft : t, 2);
    }),
      i(`北都客運  TAIPEI CITY BUS`, 0, 372, 512, 60, `#ffffff`, 800, ft, 0.62),
      (e.fillStyle = `#1f63b8`),
      a(512, 374, 256, 44, 8),
      e.fill(),
      i(`♿ 低地板公車`, 516, 374, 248, 44, `#ffffff`, 800, ft, 0.66),
      i(`307`, 720, 690, 160, 40, `#1b1b1b`, 900, t, 0.9));
  }
  (i(`臺北市政府警察局`, 0, 440, 360, 64, `#111820`, 900, ft, 0.68),
    i(
      `110`,
      360,
      440,
      120,
      64,
      `#d5282d`,
      900,
      `Arial Black, Helvetica, sans-serif`,
      0.78,
    ),
    i(`萬華分局`, 640, 176, 192, 48, `#111820`, 900, ft, 0.79, 2),
    i(
      `021`,
      640,
      230,
      192,
      98,
      `#111820`,
      900,
      `Arial Black, Helvetica, sans-serif`,
      0.92,
      5,
    ),
    i(`警察  POLICE`, 832, 176, 192, 64, `#f8fafb`, 900, ft, 0.65),
    i(`警 察`, 832, 248, 192, 48, `#f8fafb`, 900, ft, 0.9),
    i(`POLICE`, 832, 296, 192, 32, `#f8fafb`, 800, `Arial, sans-serif`, 0.8, 4),
    e.save(),
    e.translate(576, 257),
    (e.fillStyle = `#d6a229`));
  for (let t of [-1, 1]) {
    (e.save(), e.scale(t, 1));
    for (let t = 0; t < 7; t++) {
      let n = -30 + t * 9;
      (e.beginPath(),
        e.moveTo(9, n + 26),
        e.quadraticCurveTo(29, n + 18, 48 - t * 2, n - 14),
        e.lineTo(42 - t * 2, n + 8),
        e.quadraticCurveTo(27, n + 31, 9, n + 31),
        e.fill());
    }
    ((e.strokeStyle = `#b78a23`),
      (e.lineWidth = 2.5),
      e.beginPath(),
      e.moveTo(4, 67),
      e.quadraticCurveTo(52, 50, 48, -7),
      e.stroke());
    for (let t = 0; t < 7; t++) {
      let n = t * 0.16;
      (e.beginPath(),
        e.ellipse(45 - t * t * 0.7, 7 + t * 8, 3, 7, 0.6 + n, 0, Math.PI * 2),
        e.fill());
    }
    e.restore();
  }
  ((e.fillStyle = `#16365f`),
    e.beginPath(),
    e.arc(0, -42, 17, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#fff8df`));
  for (let t = 0; t < 12; t++)
    (e.save(),
      e.translate(0, -42),
      e.rotate((t * Math.PI) / 6),
      e.beginPath(),
      e.moveTo(-2, -8),
      e.lineTo(0, -13),
      e.lineTo(2, -8),
      e.fill(),
      e.restore());
  (e.beginPath(),
    e.arc(0, -42, 6, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#d6a229`),
    e.beginPath(),
    e.moveTo(0, -17),
    e.lineTo(13, 10),
    e.lineTo(8, 44),
    e.lineTo(0, 56),
    e.lineTo(-8, 44),
    e.lineTo(-13, 10),
    e.closePath(),
    e.fill(),
    (e.fillStyle = `#a87415`),
    e.fillRect(-2, 0, 4, 36),
    e.restore(),
    i(`救護車 119`, 480, 440, 300, 64, `#d0161d`, 900, ft, 0.72),
    e.save(),
    e.translate(360, 0),
    e.scale(-1, 1),
    i(
      `AMBULANCE`,
      0,
      512,
      360,
      56,
      `#d0161d`,
      900,
      `Arial Black, Helvetica, sans-serif`,
      0.66,
    ),
    e.restore(),
    (e.fillStyle = `#1f5fbf`));
  for (let t = 0; t < 3; t++)
    (e.save(),
      e.translate(392, 544),
      e.rotate((t * Math.PI) / 3),
      e.fillRect(-7, -26, 14, 52),
      e.restore());
  ((e.fillStyle = `#fff`),
    e.fillRect(390, 528, 4, 32),
    i(`垃圾車`, 430, 512, 300, 64, `#1d4f25`, 900, ft, 0.8, 8),
    i(`資源回收 · 請做好垃圾分類`, 0, 584, 420, 60, `#1d4f25`, 800, ft, 0.56),
    (e.fillStyle = `#ffd400`),
    e.beginPath(),
    e.arc(478, 632, 40, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#111`),
    e.beginPath(),
    e.arc(478, 638, 20, 0, Math.PI * 2),
    e.fill(),
    e.beginPath(),
    e.moveTo(460, 630),
    e.lineTo(462, 608),
    e.lineTo(474, 622),
    e.moveTo(496, 630),
    e.lineTo(494, 608),
    e.lineTo(482, 622),
    e.fill(),
    (e.fillStyle = `#ffd400`),
    e.beginPath(),
    e.arc(471, 636, 3.5, 0, Math.PI * 2),
    e.arc(485, 636, 3.5, 0, Math.PI * 2),
    e.fill(),
    i(`黑喵宅配`, 526, 592, 230, 52, `#151515`, 900, ft, 0.82),
    i(
      `KUROMEOW EXPRESS`,
      526,
      644,
      230,
      28,
      `#151515`,
      800,
      `Helvetica, Arial, sans-serif`,
      0.7,
    ),
    i(`阿明水電行`, 0, 690, 320, 40, `#f5f5f5`, 900, ft, 0.85, 3),
    i(`專業水電 (02)2345-6789`, 0, 728, 320, 24, `#f5f5f5`, 700, ft, 0.8));
  {
    let [t, n] = uc().delivery ?? [],
      r = 768;
    ((e.fillStyle = t?.colors[0] ?? `#c8284f`),
      a(r + 2, 514, 124, 108, 10),
      e.fill(),
      (e.fillStyle = `#fff4e6`),
      e.beginPath(),
      e.ellipse(r + 64, 556, 30, 24, 0, 0, Math.PI * 2),
      e.fill(),
      (e.strokeStyle = `#e6c9a8`),
      (e.lineWidth = 2));
    for (let t = -2; t <= 2; t++)
      (e.beginPath(),
        e.moveTo(r + 64, 536),
        e.quadraticCurveTo(r + 64 + t * 9, 542, r + 64 + t * 13, 552),
        e.stroke());
    ((e.fillStyle = `#3a1a1a`),
      e.beginPath(),
      e.arc(r + 54, 562, 3, 0, Math.PI * 2),
      e.arc(r + 74, 562, 3, 0, Math.PI * 2),
      e.fill(),
      (e.strokeStyle = `#3a1a1a`),
      e.beginPath(),
      e.arc(r + 64, 565, 6, 0.2 * Math.PI, 0.8 * Math.PI),
      e.stroke(),
      i(
        t?.zh ?? `胖達外送`,
        r,
        584,
        128,
        32,
        t?.colors[1] ?? `#fff`,
        900,
        ft,
        0.8,
      ),
      (r = 896));
    let o = n?.colors[2] ?? `#ffffff`,
      s = n?.colors[1] ?? `#111111`;
    ((e.fillStyle = n?.colors[0] ?? `#06c167`),
      a(r + 2, 514, 124, 108, 10),
      e.fill(),
      (e.fillStyle = o),
      e.beginPath(),
      e.arc(r + 46, 532, 9, 0, Math.PI * 2),
      e.arc(r + 82, 532, 9, 0, Math.PI * 2),
      e.fill(),
      e.beginPath(),
      e.arc(r + 64, 548, 21, 0, Math.PI * 2),
      e.fill(),
      (e.fillStyle = s),
      e.beginPath(),
      e.arc(r + 56, 544, 2.6, 0, Math.PI * 2),
      e.arc(r + 72, 544, 2.6, 0, Math.PI * 2),
      e.fill(),
      e.beginPath(),
      e.ellipse(r + 64, 554, 4.5, 3.2, 0, 0, Math.PI * 2),
      e.fill(),
      i(n?.zh ?? `熊愛送`, r, 574, 128, 30, o, 900, ft, 0.85),
      i(
        n?.en ?? `BearEats`,
        r,
        600,
        128,
        20,
        o,
        900,
        `Helvetica, Arial, sans-serif`,
        0.85,
      ));
  }
  (i(
    `KIMBO`,
    330,
    690,
    160,
    40,
    `#d8d8d8`,
    900,
    `Arial Black, Helvetica, sans-serif`,
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
    let [t, n, r, o] = [64, 2, 160, 56],
      s = e.createLinearGradient(0, n, 0, n + o);
    (s.addColorStop(0, `#f4f5f6`),
      s.addColorStop(0.5, `#9ea3a8`),
      s.addColorStop(1, `#e6e8ea`),
      (e.fillStyle = s),
      a(t + 6, n + 8, r - 12, o - 16, 18),
      e.fill(),
      (e.strokeStyle = `#5b5f64`),
      (e.lineWidth = 2),
      a(t + 8, n + 10, r - 16, o - 20, 16),
      e.stroke(),
      i(`猛狼`, t + 10, n + 10, r - 60, o - 20, `#b3141b`, 900, ft, 0.86),
      i(
        `125`,
        t + r - 58,
        n + 16,
        46,
        o - 32,
        `#1b1b1b`,
        900,
        `Arial Black, Helvetica, sans-serif`,
        0.8,
      ),
      i(
        `125`,
        224,
        2,
        96,
        56,
        `#f2f2f0`,
        900,
        `Arial Black, Helvetica, sans-serif`,
        0.62,
      ),
      e.save(),
      e.translate(440, 30),
      e.transform(1, 0, -0.22, 1, 0, 0),
      i(
        `TYPHOON`,
        -118,
        -26,
        200,
        44,
        `#ffffff`,
        900,
        `Arial Black, Helvetica, sans-serif`,
        0.72,
        2,
      ),
      i(
        `R1K`,
        78,
        -18,
        40,
        34,
        `#ffd23f`,
        900,
        `Arial Black, Helvetica, sans-serif`,
        0.8,
      ),
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
      i(
        `46`,
        690,
        30,
        60,
        28,
        `#ffffff`,
        900,
        `Arial Black, Helvetica, sans-serif`,
        0.9,
      ));
  }
  ((e.fillStyle = `#1a3f9c`),
    e.fillRect(784, 14, 240, 32),
    (e.fillStyle = `#f2c500`),
    e.fillRect(784, 46, 240, 5),
    i(`警察 POLICE`, 784, 14, 240, 32, `#ffffff`, 900, ft, 0.78),
    i(`霹靂小組`, 832, 760, 192, 40, `#e8e8e8`, 900, ft, 0.86, 4),
    i(`SWAT · 保安警察`, 832, 800, 192, 22, `#f2c500`, 800, ft, 0.86),
    i(
      `POLICE  110`,
      832,
      834,
      192,
      44,
      `#e8e8e8`,
      900,
      `Arial Black, Helvetica, sans-serif`,
      0.66,
    ));
}
