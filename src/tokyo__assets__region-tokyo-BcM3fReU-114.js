// tokyo__assets__region-tokyo-BcM3fReU 114 — fillstyle
// Lines 52199-53324 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var nD = {
  white: (e, t, n, r, i, a) => {
    ((e.fillStyle = `#ffffff`), e.fillRect(t, n, r, i), a(t, n, r, i, 1));
  },
  brick: (e, t, n, r, i, a) => {
    ($E(e, t, n, r, i, 30, 9, 11), a(t, n, r, i, 0.32));
  },
  ekiBay: (e, t, n, r, i, a) => {
    ($E(e, t, n, r, i, 75, 11, 21),
      a(t, n, r, i, 0.32),
      eD(e, t, n + i - 16, r, 16, 22),
      a(t, n + i - 16, r, 16, 0.42));
    let o = r * 0.36,
      s = t + (r - o) / 2,
      c = n + i * 0.16,
      l = i * 0.6;
    (eD(e, s - 9, c - 14, o + 18, 14, 23, [226, 220, 206], 3),
      (e.fillStyle = `#e4ded0`),
      e.fillRect(s + o / 2 - 7, c - 18, 14, 20),
      eD(e, s - 7, c + l, o + 14, 9, 24, [220, 214, 200], 2),
      a(s - 9, c - 18, o + 18, 18, 0.42),
      tD(e, s, c, o, l, a));
  },
  ekiBay3: (e, t, n, r, i, a) => {
    ($E(e, t, n, r, i, 60, 11, 31),
      a(t, n, r, i, 0.3),
      eD(e, t, n, r, 26, 32),
      a(t, n, r, 26, 0.38));
    let o = r * 0.32,
      s = t + (r - o) / 2,
      c = n + i * 0.3,
      l = i * 0.5;
    (eD(e, s - 7, c + l, o + 14, 8, 33, [220, 214, 200], 2),
      tD(e, s, c, o, l, a, !0));
  },
  ekiArch: (e, t, n, r, i, a) => {
    ($E(e, t, n, r, i, 75, 11, 41),
      a(t, n, r, i, 0.32),
      eD(e, t, n + i - 16, r, 16, 42),
      a(t, n + i - 16, r, 16, 0.42));
    let o = r * 0.46,
      s = t + (r - o) / 2,
      c = n + i * 0.1,
      l = i * 0.7;
    for (let t = 0; t < 11; t++) {
      let n = Math.PI + (t / 11) * Math.PI,
        r = Math.PI + ((t + 1) / 11) * Math.PI;
      ((e.fillStyle = t % 2 ? `#e2dccd` : `#9c4330`),
        e.beginPath(),
        e.arc(s + o / 2, c + o / 2, o / 2 + 14, n, r),
        e.arc(s + o / 2, c + o / 2, o / 2, r, n, !0),
        e.closePath(),
        e.fill());
    }
    tD(e, s, c, o, l, a, !0);
  },
  ekiDoor: (e, t, n, r, i, a) => {
    (eD(e, t, n, r, i, 51, [214, 206, 190], 3), a(t, n, r, i, 0.4));
    let o = r * 0.74,
      s = t + (r - o) / 2,
      c = n + i * 0.08;
    ((e.fillStyle = `#1c1a18`),
      e.beginPath(),
      e.moveTo(s, n + i),
      e.lineTo(s, c + o / 2),
      e.arc(s + o / 2, c + o / 2, o / 2, Math.PI, 0),
      e.lineTo(s + o, n + i),
      e.closePath(),
      e.fill());
    let l = e.createLinearGradient(0, c, 0, n + i);
    (l.addColorStop(0, `#6b5a3e`),
      l.addColorStop(1, `#d9c7a0`),
      (e.fillStyle = l),
      e.fillRect(s + 8, c + o * 0.55, o - 16, n + i - (c + o * 0.55)),
      (e.fillStyle = `#2a2724`));
    for (let t = 0; t <= 4; t++)
      e.fillRect(
        s + 8 + ((o - 16) * t) / 4 - 2,
        c + o * 0.55,
        4,
        n + i - (c + o * 0.55),
      );
    (e.fillRect(s + 8, c + o * 0.55 + 30, o - 16, 4),
      a(s + 8, c + o * 0.55, o - 16, n + i - (c + o * 0.55), 1));
  },
  slate: (e, t, n, r, i, a) => {
    let o = XE(61);
    ((e.fillStyle = `#20252b`), e.fillRect(t, n, r, i));
    for (let a = 0; a < 20; a++)
      for (let s = -1; s <= 10; s++) {
        let c = 0.75 + o() * 0.35;
        e.fillStyle = ZE(52 * c, 58 * c, 66 * c);
        let l = t + (r / 10) * s + (a % 2 ? r / 10 / 2 : 0),
          u = Math.max(t, l + 1),
          d = Math.min(t + r, l + r / 10 - 1);
        d > u && e.fillRect(u, n + (i / 20) * a + 1, d - u, i / 20 - 2);
      }
    a(t, n, r, i, 0.15);
  },
  copper: (e, t, n, r, i, a) => {
    let o = XE(71);
    ((e.fillStyle = `#5f9a84`), e.fillRect(t, n, r, i));
    for (let a = 0; a < 260; a++)
      ((e.fillStyle = `rgba(${o() < 0.5 ? `40,80,66` : `130,180,160`},${(0.08 + o() * 0.12).toFixed(2)})`),
        e.fillRect(t + o() * r, n + o() * i, 2 + o() * 10, 6 + o() * 40));
    e.fillStyle = `rgba(30,60,50,0.55)`;
    for (let a = 0; a < 5; a++) e.fillRect(t + (r * a) / 4.44, n, 2.5, i);
    e.fillStyle = `rgba(190,230,210,0.35)`;
    for (let a = 0; a < 5; a++) e.fillRect(t + (r * a) / 4.44 + 2.5, n, 1.2, i);
    a(t, n, r, i, 0.25);
  },
  granite: (e, t, n, r, i, a) => {
    let o = XE(81);
    (e.save(),
      e.beginPath(),
      e.rect(t, n, r, i),
      e.clip(),
      (e.fillStyle = `rgb(198,194,186)`),
      e.fillRect(t, n, r, i));
    for (let a = 0; a < 4; a++)
      for (let s = -1; s < 3; s++) {
        let c = 0.94 + o() * 0.08;
        e.fillStyle = ZE(206 * c, 202 * c, 194 * c);
        let l = a % 2 ? r / 6 : 0;
        e.fillRect(t + (s * r) / 3 + l, n + (a * i) / 4, r / 3, i / 4);
      }
    e.fillStyle = `rgba(70,66,60,0.45)`;
    for (let a = 0; a <= 4; a++) e.fillRect(t, n + (a * i) / 4 - 0.6, r, 1.2);
    for (let a = 0; a < 4; a++)
      for (let o = -1; o < 3; o++)
        e.fillRect(
          t + (o * r) / 3 + (a % 2 ? r / 6 : 0),
          n + (a * i) / 4,
          1.2,
          i / 4,
        );
    (e.restore(),
      QE(e, t, n, r, i, 82, (r * i) / 12, 0.2),
      QE(e, t, n, r, i, 83, (r * i) / 30, 0.25, !1),
      a(t, n, r, i, 0.38));
  },
  ishigaki: (e, t, n, r, i, a) => {
    let o = XE(91);
    ((e.fillStyle = `#4b463e`), e.fillRect(t, n, r, i));
    let s = n;
    for (; s < n + i;) {
      let a = 22 + o() * 18,
        c = t - o() * 30;
      for (; c < t + r;) {
        let l = 34 + o() * 40,
          u = 0.8 + o() * 0.35;
        ((e.fillStyle = ZE(128 * u, 121 * u, 108 * u)),
          e.fillRect(
            Math.max(t, c + 1.5),
            s + 1.5,
            Math.min(l - 3, t + r - c - 1.5),
            Math.min(a - 3, n + i - s - 1.5),
          ),
          (c += l));
      }
      s += a;
    }
    for (let a = 0; a < 70; a++)
      ((e.fillStyle = `rgba(60,82,40,${(0.1 + o() * 0.2).toFixed(2)})`),
        e.fillRect(t + o() * r, n + o() * i, 4 + o() * 18, 2 + o() * 6));
    (QE(e, t, n, r, i, 92, (r * i) / 20, 0.2), a(t, n, r, i, 0));
  },
  gravel: (e, t, n, r, i, a) => {
    ((e.fillStyle = `#c9c3b4`), e.fillRect(t, n, r, i));
    let o = XE(101);
    for (let a = 0; a < (r * i) / 6; a++) {
      let a = 0.7 + o() * 0.45;
      ((e.fillStyle = ZE(200 * a, 194 * a, 180 * a)),
        e.fillRect(t + o() * r, n + o() * i, 1.5 + o() * 2, 1.5 + o() * 2));
    }
    a(t, n, r, i, 0);
  },
  kawara: (e, t, n, r, i, a) => {
    let o = XE(111);
    ((e.fillStyle = `#3a3e43`), e.fillRect(t, n, r, i));
    for (let a = 0; a < 8; a++) {
      let s = t + (a + 0.5) * (r / 8),
        c = e.createLinearGradient(s - r / 8 / 2, 0, s + r / 8 / 2, 0),
        l = 0.9 + o() * 0.15;
      (c.addColorStop(0, ZE(40 * l, 44 * l, 48 * l)),
        c.addColorStop(0.45, ZE(104 * l, 110 * l, 116 * l)),
        c.addColorStop(1, ZE(34 * l, 37 * l, 41 * l)),
        (e.fillStyle = c),
        e.fillRect(s - r / 8 / 2 + 1, n, r / 8 - 2, i));
    }
    e.fillStyle = `rgba(15,16,18,0.6)`;
    for (let a = 1; a < 8; a++) e.fillRect(t, n + (a * i) / 8, r, 2);
    (QE(e, t, n, r, i, 112, (r * i) / 40, 0.2, !1), a(t, n, r, i, 0.1));
  },
  glass: (e, t, n, r, i, a) => {
    ((e.fillStyle = `#a3b7c0`),
      e.fillRect(t, n, r, i),
      a(t, n, r, i, 0.85),
      (e.fillStyle = `rgba(232,236,236,0.85)`));
    for (let a = 0; a <= 4; a++) e.fillRect(t + (r * a) / 4 - 1, n, 2, i);
    (e.fillRect(t, n + i / 2 - 1, r, 2),
      (e.fillStyle = `#eef0f0`),
      e.fillRect(t, n, r, 3),
      e.fillRect(t, n + i - 3, r, 3),
      a(t, n, r, 3, 0.2),
      a(t, n + i - 3, r, 3, 0.2));
  },
  forumGlass: (e, t, n, r, i, a) => {
    ((e.fillStyle = `#b4c8d0`),
      e.fillRect(t, n, r, i),
      a(t, n, r, i, 0.26),
      (e.fillStyle = `#dfe4e4`),
      e.fillRect(t + r / 2 - 0.75, n, 1.5, i),
      a(t + r / 2 - 0.75, n, 1.5, i, 0.75),
      e.fillRect(t, n + i / 2 - 0.75, r, 1.5),
      a(t, n + i / 2 - 0.75, r, 1.5, 0.75),
      (e.fillStyle = `#eceeee`));
    for (let [o, s, c, l] of [
      [t, n, r, 2],
      [t, n + i - 2, r, 2],
      [t, n, 2, i],
      [t + r - 2, n, 2, i],
    ])
      (e.fillRect(o, s, c, l), a(o, s, c, l, 0.95));
  },
  forumWood: (e, t, n, r, i, a) => {
    ((e.fillStyle = `#c98a3e`), e.fillRect(t, n, r, i));
    for (let a = 0; a < 12; a++)
      ((e.fillStyle = [
        `#d49647`,
        `#c4853a`,
        `#dba052`,
        `#bf7f35`,
        `#cf9043`,
        `#d89a4c`,
        `#c88a3d`,
      ][(a * 37) % 7]),
        e.fillRect(t + (r * a) / 12 + 1, n, r / 12 - 2, i),
        (e.fillStyle = `rgba(120,70,20,0.12)`),
        e.fillRect(t + (r * a) / 12 + 3, n, 1, i));
    e.fillStyle = `rgba(60,35,10,0.55)`;
    for (let a = 0; a <= 12; a++) e.fillRect(t + (r * a) / 12 - 1, n, 2, i);
    ((e.fillStyle = `rgba(60,35,10,0.35)`),
      e.fillRect(t, n + i - 3, r, 3),
      a(t, n, r, i, 0.3));
  },
  office: (e, t, n, r, i, a) => {
    ((e.fillStyle = `#d6d6d2`), e.fillRect(t, n, r, i));
    let o = r * 0.86,
      s = t + (r - o) / 2,
      c = i * 0.7,
      l = n + i * 0.08,
      u = e.createLinearGradient(s, l, s, l + c);
    (u.addColorStop(0, `#5e7380`),
      u.addColorStop(1, `#3c4b55`),
      (e.fillStyle = u),
      e.fillRect(s, l, o, c),
      (e.fillStyle = `#d6d6d2`),
      e.fillRect(s + o / 2 - 2, l, 4, c),
      a(t, n, r, i, 0),
      a(s, l, o, c, 1));
  },
  wakoBay: (e, t, n, r, i, a) => {
    (eD(e, t, n, r, i, 121, [214, 206, 192], 2),
      (e.fillStyle = `rgba(80,70,60,0.35)`));
    for (let a = 1; a < 8; a++) e.fillRect(t, n + (i * a) / 8, r, 1.2);
    a(t, n, r, i, 0.5);
    let o = r * 0.5,
      s = t + (r - o) / 2,
      c = n + i * 0.1,
      l = i * 0.78;
    ((e.fillStyle = `#2d2a26`), e.fillRect(s - 4, c - 4, o + 8, l + 8));
    let u = e.createLinearGradient(s, c, s, c + l);
    (u.addColorStop(0, `#7d8890`),
      u.addColorStop(1, `#4c5459`),
      (e.fillStyle = u),
      e.fillRect(s, c, o, l),
      (e.fillStyle = `#5c4a32`),
      e.fillRect(s, c + l * 0.46, o, l * 0.08),
      (e.fillStyle = `#d8d2c4`),
      e.fillRect(s + o / 2 - 1.5, c, 3, l),
      a(s, c, o, l * 0.46, 1),
      a(s, c + l * 0.54, o, l * 0.46, 1));
  },
  wakoShow: (e, t, n, r, i, a) => {
    (eD(e, t, n, r, i, 131, [208, 200, 186], 2), a(t, n, r, i, 0.5));
    let o = r * 0.8,
      s = t + (r - o) / 2,
      c = n + i * 0.1,
      l = i * 0.84;
    ((e.fillStyle = `#4a3a26`),
      e.beginPath(),
      e.moveTo(s - 6, n + i),
      e.lineTo(s - 6, c + 20),
      e.quadraticCurveTo(s + o / 2, c - 18, s + o + 6, c + 20),
      e.lineTo(s + o + 6, n + i),
      e.fill());
    let u = e.createLinearGradient(s, c, s, n + i);
    (u.addColorStop(0, `#e9ddc4`),
      u.addColorStop(1, `#b49a72`),
      (e.fillStyle = u),
      e.fillRect(s, c + 18, o, l - 18),
      (e.fillStyle = `#f4efe4`),
      e.fillRect(s + o * 0.1, c + l * 0.7, o * 0.3, l * 0.3),
      e.fillRect(s + o * 0.58, c + l * 0.62, o * 0.3, l * 0.38),
      (e.fillStyle = `#8a6a3a`),
      e.fillRect(s + o * 0.2, c + l * 0.55, o * 0.1, l * 0.15),
      (e.fillStyle = `#3a4250`),
      e.fillRect(s + o * 0.68, c + l * 0.45, o * 0.12, l * 0.17),
      a(s, c + 18, o, l - 18, 1));
  },
  clock: (e, t, n, r, i, a, o) => {
    let s = t + r / 2,
      c = n + i / 2,
      l = r / 2 - 4;
    ((e.fillStyle = `#5a4a2e`),
      e.fillRect(t, n, r, i),
      (e.fillStyle = `#efe8d6`),
      e.beginPath(),
      e.arc(s, c, l, 0, Math.PI * 2),
      e.fill(),
      (e.strokeStyle = `#1c1a17`),
      (e.lineWidth = 3),
      e.beginPath(),
      e.arc(s, c, l - 6, 0, Math.PI * 2),
      e.stroke(),
      (e.lineWidth = 1.2),
      e.beginPath(),
      e.arc(s, c, l - 16, 0, Math.PI * 2),
      e.stroke());
    for (let t = 0; t < 60; t++) {
      let n = (t / 60) * Math.PI * 2,
        r = l - (t % 5 ? 12 : 16),
        i = l - 7;
      ((e.lineWidth = t % 5 ? 1.2 : 3),
        e.beginPath(),
        e.moveTo(s + Math.sin(n) * r, c - Math.cos(n) * r),
        e.lineTo(s + Math.sin(n) * i, c - Math.cos(n) * i),
        e.stroke());
    }
    let u = [
      `XII`,
      `I`,
      `II`,
      `III`,
      `IIII`,
      `V`,
      `VI`,
      `VII`,
      `VIII`,
      `IX`,
      `X`,
      `XI`,
    ];
    ((e.fillStyle = `#1c1a17`),
      (e.textAlign = `center`),
      (e.textBaseline = `middle`));
    for (let t = 0; t < 12; t++) {
      let n = (t / 12) * Math.PI * 2,
        r = l - 34;
      (e.save(),
        e.translate(s + Math.sin(n) * r, c - Math.cos(n) * r),
        e.rotate(n),
        (e.font = `600 ${t % 3 == 0 ? 22 : 18}px ${o.serif}`),
        e.fillText(u[t], 0, 0),
        e.restore());
    }
    (a(t, n, r, i, 0), a(s - l * 0.7, c - l * 0.7, l * 1.4, l * 1.4, 1));
  },
  kabukiWall: (e, t, n, r, i, a) => {
    ((e.fillStyle = `#efece4`),
      e.fillRect(t, n, r, i),
      QE(e, t, n, r, i, 141, (r * i) / 40, 0.1),
      (e.fillStyle = `#4a4a48`),
      e.fillRect(t, n + i * 0.82, r, i * 0.18));
    let o = r * 0.6,
      s = t + (r - o) / 2,
      c = n + i * 0.2,
      l = i * 0.42;
    ((e.fillStyle = `#a33a22`),
      e.fillRect(s - 6, c - 6, o + 12, l + 12),
      (e.fillStyle = `#e8dcc0`),
      e.fillRect(s, c, o, l),
      (e.fillStyle = `#5b2a1a`));
    for (let t = 0; t <= 10; t++) e.fillRect(s + (o * t) / 10 - 1.5, c, 3, l);
    (a(t, n, r, i, 0.45), a(s, c, o, l, 1));
  },
  kabukiSign: (e, t, n, r, i, a, o) => {
    ((e.fillStyle = `#4a2e18`),
      e.fillRect(t, n, r, i),
      (e.fillStyle = `#121010`),
      e.fillRect(t + 8, n + 8, r - 16, i - 16),
      (e.strokeStyle = `#b8913e`),
      (e.lineWidth = 3),
      e.strokeRect(t + 13, n + 13, r - 26, i - 26),
      (e.fillStyle = `#d9b358`),
      (e.textAlign = `center`),
      (e.textBaseline = `middle`),
      (e.font = `700 74px ${o.serif}`),
      e.fillText(
        rc(`landmark.kabukiza.board`).ja,
        t + r / 2,
        n + i / 2 + 3,
        r - 40,
      ),
      a(t, n, r, i, 0.2),
      a(t + 20, n + 20, r - 40, i - 40, 0.9));
  },
  nobori: (e, t, n, r, i, a, o) => {
    let s = [
        [`#1f3a6e`, `#f2ede0`],
        [`#a8282a`, `#fff6e8`],
        [`#f2ede0`, `#1a1a1a`],
        [`#3a6b3a`, `#f6efe0`],
      ],
      c = rc(`landmark.kabukiza.nobori`).ja;
    for (let a = 0; a < 4; a++) {
      let l = t + (r / 4) * a;
      ((e.fillStyle = s[a][0]),
        e.fillRect(l + 2, n, r / 4 - 4, i),
        (e.fillStyle = s[a][1]),
        (e.font = `700 34px ${o.serif}`),
        (e.textAlign = `center`),
        (e.textBaseline = `middle`));
      let u = [...c];
      for (let t = 0; t < u.length; t++)
        e.fillText(u[t], l + r / 8, n + 46 + t * 52);
      e.fillStyle = `rgba(0,0,0,0.25)`;
      for (let t = 0; t < 6; t++) e.fillRect(l + 2, n + 20 + t * 62, 6, 10);
    }
    a(t, n, r, i, 0.15);
  },
  forumSign: (e, t, n, r, i, a, o) => {
    eD(e, t, n, r, i, 151, [196, 194, 188], 3);
    let s = rc(`landmark.forum.name`);
    ((e.fillStyle = `#2b2b2b`),
      (e.textAlign = `center`),
      (e.textBaseline = `middle`),
      (e.font = `500 44px ${o.sans}`),
      e.fillText(s.ja, t + r / 2, n + i * 0.38, r - 30),
      (e.font = `500 22px ${o.sans}`),
      e.fillText((s.en ?? ``).toUpperCase(), t + r / 2, n + i * 0.78, r - 30),
      a(t, n, r, i, 0.3));
  },
  lantern: (e, t, n, r, i, a) => {
    ((e.fillStyle = `#c4231c`),
      e.fillRect(t, n, r, i),
      (e.fillStyle = `rgba(80,0,0,0.35)`));
    for (let a = 0; a < 12; a++) e.fillRect(t, n + (i * a) / 12, r, 2);
    ((e.fillStyle = `#151210`),
      e.fillRect(t, n, r, i * 0.12),
      e.fillRect(t, n + i * 0.88, r, i * 0.12),
      a(t, n, r, i, 0),
      a(t, n + i * 0.12, r, i * 0.76, 1));
  },
  shoji: (e, t, n, r, i, a) => {
    ((e.fillStyle = `#e8e0cc`),
      e.fillRect(t, n, r, i),
      (e.fillStyle = `#5a4630`));
    for (let a = 0; a <= 4; a++) e.fillRect(t + (r * a) / 4 - 1.5, n, 3, i);
    for (let a = 0; a <= 6; a++) e.fillRect(t, n + (i * a) / 6 - 1.5, r, 3);
    a(t, n, r, i, 1);
  },
  doors: (e, t, n, r, i, a) => {
    ((e.fillStyle = `#2d261e`), e.fillRect(t, n, r, i));
    let o = e.createLinearGradient(0, n, 0, n + i);
    (o.addColorStop(0, `#8a7556`),
      o.addColorStop(0.6, `#cdb48a`),
      o.addColorStop(1, `#e3cfa6`),
      (e.fillStyle = o),
      e.fillRect(t + 10, n + 10, r - 20, i - 14),
      (e.fillStyle = `rgba(255,240,200,0.45)`),
      e.beginPath(),
      e.ellipse(t + r / 2, n + i * 0.28, r * 0.22, i * 0.07, 0, 0, Math.PI * 2),
      e.fill(),
      (e.fillStyle = `#3a3026`),
      e.fillRect(t + r / 2 - 4, n + 10, 8, i - 14),
      e.fillRect(t + 10, n + i * 0.18, r - 20, 5),
      (e.fillStyle = `#b8954f`),
      e.fillRect(t + r / 2 - 26, n + i * 0.55, 16, 4),
      e.fillRect(t + r / 2 + 10, n + i * 0.55, 16, 4),
      a(t, n, r, i, 0.1),
      a(t + 10, n + 10, r - 20, i - 14, 1));
  },
  paving: (e, t, n, r, i, a) => {
    let o = XE(171);
    ((e.fillStyle = `#9d9a94`), e.fillRect(t, n, r, i));
    for (let a = 0; a < 4; a++) {
      let s = a % 2 ? r / 2 / 2 : 0;
      for (let c = -1; c <= 2; c++) {
        let l = 0.94 + o() * 0.08;
        e.fillStyle = ZE(214 * l, 211 * l, 204 * l);
        let u = Math.max(t, t + s + (c * r) / 2 + 1.2),
          d = Math.min(t + r, t + s + ((c + 1) * r) / 2 - 1.2);
        d > u && e.fillRect(u, n + (a * i) / 4 + 1.2, d - u, i / 4 - 2.4);
      }
    }
    (QE(e, t, n, r, i, 172, (r * i) / 26, 0.1), a(t, n, r, i, 0.25));
  },
  lawn: (e, t, n, r, i, a) => {
    ((e.fillStyle = `#4f7a35`),
      e.fillRect(t, n, r, i),
      (e.fillStyle = `rgba(160,200,90,0.16)`),
      e.fillRect(t, n, r / 2, i));
    let o = XE(181);
    for (let a = 0; a < 700; a++)
      ((e.fillStyle =
        o() < 0.5 ? `rgba(30,60,20,0.25)` : `rgba(150,190,90,0.22)`),
        e.fillRect(t + o() * r, n + o() * i, 1 + o() * 1.5, 2 + o() * 3));
    a(t, n, r, i, 0);
  },
  gtGlass: (e, t, n, r, i, a) => {
    let o = XE(191),
      s = r / 4,
      c = i / 3;
    for (let i = 0; i < 3; i++) {
      let l = n + i * c,
        u = e.createLinearGradient(t, l, t, l + c);
      (u.addColorStop(0, `#6f8fa8`),
        u.addColorStop(0.7, `#4d6d88`),
        u.addColorStop(1, `#5d7d97`),
        (e.fillStyle = u),
        e.fillRect(t, l, r, c));
      for (let n = 0; n < 4; n++)
        ((e.fillStyle = `rgba(220,235,245,${(0.06 + o() * 0.12).toFixed(3)})`),
          e.fillRect(t + n * s + s * 0.08, l, s * 0.22, c * 0.8));
      (a(t, l, r, c, 0.9),
        (e.fillStyle = `#3b4e5f`),
        e.fillRect(t, l + c * 0.82, r, c * 0.18),
        a(t, l + c * 0.82, r, c * 0.18, 0),
        (e.fillStyle = `#c9d2d8`),
        e.fillRect(t, l + c * 0.82 - 1.5, r, 2.5));
    }
    e.fillStyle = `#c9d2d8`;
    for (let a = 0; a <= 8; a++)
      e.fillRect(t + (r * a) / 8 - (a % 2 ? 1 : 1.5), n, a % 2 ? 2 : 3, i);
  },
  flag: (e, t, n, r, i, a) => {
    ((e.fillStyle = `#f7f6f2`),
      e.fillRect(t, n, r, i),
      (e.fillStyle = `#bc002d`),
      e.beginPath(),
      e.arc(t + r / 2, n + i / 2, i * 0.3, 0, Math.PI * 2),
      e.fill(),
      a(t, n, r, i, 0.2));
  },
  signTaxi: (e, t, n, r, i, a, o) =>
    iD(e, t, n, r, i, a, o, `common.facility.taxi`, `#f2c200`),
  signBus: (e, t, n, r, i, a, o) =>
    iD(e, t, n, r, i, a, o, `common.facility.bus`, `#3c9a4a`),
  signYaesu: (e, t, n, r, i, a, o) =>
    iD(e, t, n, r, i, a, o, `transit.exit.jy-tokyo.e`, `#e8e4da`),
  nbPlaques: (e, t, n, r, i, a, o) => {
    let s = [`landmark.nihonbashi.plaque`];
    for (let a = 0; a < s.length; a++) {
      let c = t,
        l = r;
      aD(e, c + 4, n + 4, l - 8, i - 8, 10);
      let u = [...rc(s[a]).ja];
      ((e.textAlign = `center`), (e.textBaseline = `middle`));
      let d = (i - 56) / u.length;
      e.font = `700 ${Math.min(l - 26, d * 0.92) | 0}px ${o.serif}`;
      for (let t = 0; t < u.length; t++) {
        let r = n + 28 + d * (t + 0.5);
        ((e.fillStyle = `#26332c`),
          e.fillText(u[t], c + l / 2 + 1.5, r + 1.5),
          (e.fillStyle = `#9fbaa8`),
          e.fillText(u[t], c + l / 2, r));
      }
      e.fillStyle = `#6d7f74`;
      for (let t of [n + 16, n + i - 16])
        (e.beginPath(), e.arc(c + l / 2, t, 4, 0, Math.PI * 2), e.fill());
    }
    a(t, n, r, i, 0.3);
  },
  nbBoard: (e, t, n, r, i, a, o) => {
    ((e.fillStyle = `#bdbab0`),
      e.fillRect(t, n, r, i),
      (e.fillStyle = `#9d9a90`),
      e.fillRect(t + 6, n + 6, r - 12, i - 12),
      (e.fillStyle = `#2a3036`),
      e.fillRect(t + 10, n + 10, r - 20, i - 20),
      (e.strokeStyle = `#8f7d55`),
      (e.lineWidth = 2),
      e.strokeRect(t + 15, n + 15, r - 30, i - 30));
    let s = [...rc(`landmark.nihonbashi.plaque`).ja];
    ((e.textAlign = `center`),
      (e.textBaseline = `middle`),
      (e.font = `700 54px ${o.serif}`));
    for (let a = 0; a < s.length; a++) {
      let o = t + r / 2 + (a - (s.length - 1) / 2) * 78;
      ((e.fillStyle = `#16191c`),
        e.fillText(s[a], o + 1.5, n + i / 2 + 3.5),
        (e.fillStyle = `#c3a768`),
        e.fillText(s[a], o, n + i / 2 + 2));
    }
    (a(t, n, r, i, 0.25), a(t + 16, n + 16, r - 32, i - 32, 0.45));
  },
  nbGenpyo: (e, t, n, r, i, a, o) => {
    (aD(e, t + 2, n + 2, r - 4, i - 4, 6),
      (e.strokeStyle = `#8fa092`),
      (e.lineWidth = 2.5),
      e.beginPath(),
      e.arc(t + r / 2, n + i / 2, r * 0.36, 0, Math.PI * 2),
      e.stroke());
    let s = [...rc(`landmark.nihonbashi.genpyo`).ja];
    ((e.fillStyle = `#9fb2a4`),
      (e.textAlign = `center`),
      (e.textBaseline = `middle`),
      (e.font = `700 15px ${o.serif}`));
    let c = [s.slice(0, 3), s.slice(3)];
    for (let a = 0; a < 2; a++)
      for (let o = 0; o < c[a].length; o++)
        e.fillText(
          c[a][o],
          t + r / 2 + (a === 0 ? 10 : -10),
          n + i / 2 - 24 + o * 16 + (a === 0 ? 8 : 0),
        );
    a(t, n, r, i, 0.15);
  },
  nbRelief: (e, t, n, r, i, a) => {
    let o = XE(171);
    ((e.fillStyle = `#3f5a4b`),
      e.fillRect(t, n, r, i),
      (e.fillStyle = `#5d7a69`),
      e.fillRect(t, n, r, 5),
      e.fillRect(t, n + i - 5, r, 5),
      e.fillRect(t, n, 5, i),
      e.fillRect(t + r - 5, n, 5, i),
      (e.strokeStyle = `#7a9886`),
      (e.lineWidth = 2),
      e.beginPath(),
      e.moveTo(t + r / 2, n + i - 8),
      e.lineTo(t + r / 2, n + 10),
      e.stroke());
    for (let i = 0; i < 6; i++) {
      let a = n + 18 + i * 19,
        o = i % 2 ? 1 : -1,
        s = t + r / 2 + o * 18;
      for (let t = 0; t < 9; t++) {
        let n = -Math.PI / 2 + o * (0.25 + t * 0.17);
        ((e.strokeStyle = t % 2 ? `#93b09d` : `#78957f`),
          (e.lineWidth = 1.6),
          e.beginPath(),
          e.moveTo(s, a + 6),
          e.lineTo(s + Math.cos(n) * 20, a + 6 + Math.sin(n) * 16),
          e.stroke());
      }
      ((e.fillStyle = `#86a492`),
        e.beginPath(),
        e.ellipse(t + r / 2 - o * 20, a + 10, 7, 4.5, o * 0.6, 0, Math.PI * 2),
        e.fill());
    }
    QE(e, t, n, r, i, 172, (r * i) / 25, 0.25);
    for (let a = 0; a < 40; a++)
      ((e.fillStyle = `rgba(120,160,140,${(0.05 + o() * 0.08).toFixed(3)})`),
        e.fillRect(t + o() * r, n + o() * i, 2 + o() * 5, 2 + o() * 8));
    a(t, n, r, i, 0.1);
  },
  nbGate: (e, t, n, r, i, a, o) => {
    ((e.fillStyle = `#5b4632`),
      e.fillRect(t, n, r, i),
      (e.strokeStyle = `#a88c5c`),
      (e.lineWidth = 2),
      e.strokeRect(t + 3, n + 3, r - 6, i - 6),
      (e.fillStyle = `#e0c47e`),
      (e.textAlign = `center`),
      (e.textBaseline = `middle`),
      (e.font = `700 30px ${o.serif}`),
      e.fillText(
        rc(`landmark.nihonbashi.pier`).ja,
        t + r / 2,
        n + i / 2 + 1,
        r - 16,
      ),
      a(t, n, r, i, 0.3));
  },
  nbCage: (e, t, n, r, i, a) => {
    ((e.fillStyle = `#f2e3bd`), e.fillRect(t, n, r, i));
    let o = e.createRadialGradient(
      t + r / 2,
      n + i / 2,
      2,
      t + r / 2,
      n + i / 2,
      r * 0.6,
    );
    (o.addColorStop(0, `rgba(255,250,230,0.5)`),
      o.addColorStop(1, `rgba(200,170,110,0.25)`),
      (e.fillStyle = o),
      e.fillRect(t, n, r, i),
      a(t, n, r, i, 1),
      (e.fillStyle = `#41594b`));
    let s = (t, n, r, i) => {
      (e.fillRect(t, n, r, i), a(t, n, r, i, 0));
    };
    for (let e = 0; e < 6; e++) s(t + (r * e) / 6 - 2, n, 4, i);
    (s(t + r - 2, n, 2, i),
      s(t, n + i / 2 - 2, r, 4),
      s(t, n, r, 4),
      s(t, n + i - 4, r, 4),
      (e.strokeStyle = `rgba(65,89,75,0.85)`),
      (e.lineWidth = 1.5));
    for (let a = 0; a < 6; a++) {
      let o = t + (r * a) / 6;
      (e.beginPath(),
        e.moveTo(o, n + 4),
        e.lineTo(o + r / 6, n + i / 2 - 2),
        e.moveTo(o + r / 6, n + i / 2 + 2),
        e.lineTo(o, n + i - 4),
        e.stroke());
    }
  },
  plaster: (e, t, n, r, i, a) => {
    ((e.fillStyle = `#ecebe5`), e.fillRect(t, n, r, i));
    let o = XE(161);
    for (let a = 0; a < 90; a++)
      ((e.fillStyle = `rgba(150,150,140,${(0.04 + o() * 0.06).toFixed(3)})`),
        e.fillRect(t + o() * r, n + o() * i, 10 + o() * 30, 2 + o() * 4));
    let s = e.createLinearGradient(0, n + i * 0.7, 0, n + i);
    (s.addColorStop(0, `rgba(110,105,95,0)`),
      s.addColorStop(1, `rgba(110,105,95,0.18)`),
      (e.fillStyle = s),
      e.fillRect(t, n + i * 0.7, r, i * 0.3),
      a(t, n, r, i, 0.4));
  },
  benWall: (e, t, n, r, i, a) => {
    let o = `#b8391f`;
    ((e.fillStyle = `#eeeae0`),
      e.fillRect(t, n, r, i),
      QE(e, t, n, r, i, 171, (r * i) / 50, 0.08),
      (e.fillStyle = o),
      e.fillRect(t, n, r, i * 0.06),
      e.fillRect(t, n + i * 0.22, r, i * 0.06),
      e.fillRect(t, n + i * 0.86, r, i * 0.06),
      e.fillRect(t + r * 0.48, n + i * 0.06, r * 0.04, i * 0.16));
    let s = t + r * 0.2,
      c = n + i * 0.36,
      l = r * 0.6,
      u = i * 0.44;
    (e.fillRect(s - 5, c - 5, l + 10, u + 10),
      (e.fillStyle = `#18201b`),
      e.fillRect(s, c, l, u));
    for (let t = 0; t < 15; t++) {
      let n = s + 2 + (t * (l - 4)) / 15,
        r = e.createLinearGradient(n, 0, n + l / 22, 0);
      (r.addColorStop(0, `#2f7a5c`),
        r.addColorStop(0.5, `#5aa684`),
        r.addColorStop(1, `#2a6a50`),
        (e.fillStyle = r),
        e.fillRect(n, c, (l - 4) / 15 - 4, u));
    }
    ((e.fillStyle = `#d7cfbe`),
      e.fillRect(t, n + i * 0.92, r, i * 0.08),
      (e.fillStyle = o),
      e.fillRect(t, n, r * 0.07, i),
      e.fillRect(t + r * 0.93, n, r * 0.07, i),
      (e.fillStyle = `rgba(0,0,0,0.18)`),
      e.fillRect(t + r * 0.07, n, 2, i),
      e.fillRect(t + r * 0.93 - 2, n, 2, i),
      a(t, n, r, i, 0.4),
      a(s, c, l, u, 0.2));
  },
  benRack: (e, t, n, r, i, a, o) => {
    let s = rc(`landmark.bentendo.lanterns`).ja.split(/\s+/);
    ((e.fillStyle = `#2a1a12`), e.fillRect(t, n, r, i), a(t, n, r, i, 0));
    let c = i / 2,
      l = r / 5;
    for (let r = 0; r < 2; r++)
      for (let i = 0; i < 5; i++) {
        let u = t + (i + 0.5) * l,
          d = n + r * c + 3,
          f = n + (r + 1) * c - 3,
          p = l * 0.44,
          m = e.createLinearGradient(u - p, 0, u + p, 0);
        (m.addColorStop(0, `#bdb5a6`),
          m.addColorStop(0.45, `#fbf8f0`),
          m.addColorStop(1, `#c4bcad`),
          (e.fillStyle = m),
          e.beginPath(),
          e.ellipse(u, (d + f) / 2, p, (f - d) / 2, 0, 0, Math.PI * 2),
          e.fill(),
          e.fillRect(u - p * 0.92, d + 6, p * 1.84, f - d - 12),
          (e.fillStyle = `rgba(120,110,95,0.25)`));
        for (let t = 1; t < 8; t++)
          e.fillRect(u - p, d + ((f - d) * t) / 8, p * 2, 1);
        ((e.fillStyle = `#141210`),
          e.fillRect(u - p * 0.62, d, p * 1.24, 5),
          e.fillRect(u - p * 0.62, f - 5, p * 1.24, 5));
        let h = [...(s[(r * 5 + i) % s.length] ?? ``)];
        ((e.fillStyle = `#1a1714`),
          (e.font = `700 15px ${o.serif}`),
          (e.textAlign = `center`),
          (e.textBaseline = `middle`));
        let g = (d + f) / 2;
        for (let t = 0; t < h.length; t++)
          e.fillText(h[t], u, g + (t - (h.length - 1) / 2) * 16);
        a(u - p, d + 2, p * 2, f - d - 4, 0.95);
      }
  },
  benMisc: (e, t, n, r, i, a, o) => {
    ((e.fillStyle = `#c98d2e`),
      e.fillRect(t, n, 128, 128),
      (e.fillStyle = `#d65a1c`),
      e.fillRect(t + 6, n + 6, 116, 116),
      (e.fillStyle = `#e7712a`));
    for (let [r, i] of [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ])
      (e.beginPath(),
        e.arc(t + 64 + r * 22, n + 64 + i * 22, 26, 0, Math.PI * 2),
        e.fill());
    ((e.strokeStyle = `#fbf6ea`),
      (e.fillStyle = `#fbf6ea`),
      (e.lineWidth = 4),
      e.beginPath(),
      e.arc(t + 64, n + 64, 22, 0, Math.PI * 2),
      e.stroke(),
      e.beginPath(),
      e.arc(t + 64, n + 64, 6, 0, Math.PI * 2),
      e.fill());
    for (let r = 0; r < 8; r++) {
      let i = (r / 8) * Math.PI * 2;
      ((e.lineWidth = 3),
        e.beginPath(),
        e.moveTo(t + 64 + Math.cos(i) * 6, n + 64 + Math.sin(i) * 6),
        e.lineTo(t + 64 + Math.cos(i) * 30, n + 64 + Math.sin(i) * 30),
        e.stroke(),
        e.beginPath(),
        e.arc(
          t + 64 + Math.cos(i) * 31,
          n + 64 + Math.sin(i) * 31,
          3.5,
          0,
          Math.PI * 2,
        ),
        e.fill());
    }
    ((e.fillStyle = `#7a3a14`),
      e.fillRect(t + 64 - 1, n + 6, 2, 116),
      a(t, n, 128, 128, 0.55));
    for (let [r, i] of [
      [128, `#4f9d88`],
      [160, `#4a4e54`],
    ]) {
      ((e.fillStyle = i),
        e.fillRect(t, n + r, 128, 9),
        (e.fillStyle = `#a8321e`),
        e.fillRect(t, n + r + 9, 128, 23),
        (e.fillStyle = `#e6bf3a`));
      for (let i = 0; i < 12; i++)
        (e.fillRect(t + 2 + (128 / 12) * i, n + r + 11, 6, 5),
          e.fillRect(t + 6 + (128 / 12) * i, n + r + 22, 6, 6));
      a(t, n + r, 128, 32, 0.3);
    }
    ((e.fillStyle = `#ebe6da`),
      e.fillRect(t, n + 192, 128, 64),
      (e.fillStyle = `#2f5d4a`),
      e.fillRect(t, n + 192, 128, 8),
      (e.fillStyle = `#b4371f`));
    for (let r = 0; r < 4; r++) {
      let i = t + r * 32 + 16;
      (e.fillRect(i - 4, n + 222, 8, 34),
        e.fillRect(i - 12, n + 214, 24, 8),
        e.fillRect(i - 15, n + 204, 30, 8),
        (e.fillStyle = `#e1b63a`),
        e.fillRect(i - 15, n + 204, 4, 4),
        e.fillRect(i + 11, n + 204, 4, 4),
        (e.fillStyle = `#b4371f`));
    }
    (e.fillRect(t, n + 250, 128, 6), a(t, n + 192, 128, 64, 0.35));
    let s = t + 128;
    ((e.fillStyle = `#c3241c`),
      e.fillRect(s, n, 64, i),
      (e.fillStyle = `#fbf6ea`),
      e.beginPath(),
      e.arc(s + 32, n + 22, 15, 0, Math.PI * 2),
      e.fill(),
      (e.fillStyle = `#c3241c`));
    for (let [t, r] of [
      [0, -6],
      [-6, 4],
      [6, 4],
    ])
      (e.beginPath(),
        e.moveTo(s + 32 + t, n + 22 + r - 5),
        e.lineTo(s + 32 + t - 5.5, n + 22 + r + 4),
        e.lineTo(s + 32 + t + 5.5, n + 22 + r + 4),
        e.closePath(),
        e.fill());
    let c = [...rc(`landmark.bentendo.nobori`).ja];
    ((e.fillStyle = `#fbf6ea`),
      (e.font = `700 24px ${o.serif}`),
      (e.textAlign = `center`),
      (e.textBaseline = `middle`));
    for (let t = 0; t < c.length; t++)
      e.fillText(c[t], s + 32, n + 56 + t * ((i - 66) / c.length));
    a(s, n, 64, i, 0.12);
    let l = t + 192;
    (eD(e, l, n, 64, i, 181, [176, 172, 163], 1),
      QE(e, l, n, 64, i, 182, 600, 0.25));
    let u = [...rc(`landmark.bentendo.pillar`).ja];
    ((e.fillStyle = `#4b4842`), (e.font = `700 30px ${o.serif}`));
    for (let t = 0; t < u.length; t++)
      e.fillText(u[t], l + 32, n + 30 + t * ((i - 50) / u.length));
    a(l, n, 64, i, 0);
  },
  akibaFront: OE,
  akibaGlass: kE,
  akibaSigns: AE,
  myojinOrn: (e, t, n, r, i, a) => uD(e, t, n, r, i, a),
  myojinSign: (e, t, n, r, i, a, o) => dD(e, t, n, r, i, a, o),
  myojinShop: (e, t, n, r, i, a) => fD(e, t, n, r, i, a),
  tnmBay: (e, t, n, r, i, a) => {
    let o = XE(201),
      s = Math.round(i * 0.766);
    ((e.fillStyle = `#d6cbb2`),
      e.fillRect(t, n, r, s),
      (e.fillStyle = `rgba(120,108,90,0.22)`));
    for (let i = 1; i < 8; i++) e.fillRect(t, n + (s * i) / 8.2, r, 1);
    for (let i = 0; i < 8; i++)
      e.fillRect(
        t + (i % 2 ? 0.33 : 0.66) * r + (o() - 0.5) * 10,
        n + (s * i) / 8.2,
        1,
        s / 8.2,
      );
    QE(e, t, n, r, s, 202, (r * s) / 30, 0.12);
    let c = r * 0.46,
      l = t + (r - c) / 2,
      u = n + s * 0.24,
      d = s * 0.5;
    ((e.fillStyle = `rgba(90,80,64,0.35)`),
      e.fillRect(l - 7, u - 7, c + 14, d + 12),
      (e.fillStyle = `#5f594f`),
      e.fillRect(l - 3, u - 3, c + 6, d + 6));
    let f = e.createLinearGradient(0, u, 0, u + d);
    (f.addColorStop(0, `#9f9a8f`),
      f.addColorStop(0.15, `#bdb6a6`),
      f.addColorStop(1, `#c9c2b2`),
      (e.fillStyle = f),
      e.fillRect(l, u, c, d),
      (e.fillStyle = `#6a6358`));
    for (let t = 1; t < 3; t++) e.fillRect(l + (c * t) / 3 - 1.5, u, 3, d);
    (e.fillRect(l, u + d * 0.22, c, 3),
      (e.fillStyle = `rgba(255,255,255,0.18)`));
    for (let t = 0; t < 3; t++)
      e.fillRect(l + (c * t) / 3 + 3, u + d * 0.22 + 5, 2, d * 0.74);
    ((e.fillStyle = `#cdc3ad`),
      e.fillRect(l - 10, u + d + 3, c + 20, 6),
      (e.fillStyle = `rgba(110,98,80,0.3)`),
      e.fillRect(l - 10, u + d + 9, c + 20, 2),
      e.fillRect(t, n + 6, r, 2),
      a(t, n, r, s, 0.48),
      a(l, u, c, d, 0.07));
    let p = n + s,
      m = i - s;
    ((e.fillStyle = `#d3c9b4`),
      e.fillRect(t, p, r, m),
      (e.fillStyle = `#e2dac8`),
      e.fillRect(t, p, r, 8),
      (e.fillStyle = `rgba(100,88,70,0.45)`),
      e.fillRect(t, p + 8, r, 2),
      e.fillRect(t, p + m - 9, r, 2),
      (e.fillStyle = `#e0d8c5`),
      e.fillRect(t, p + m - 7, r, 7));
    for (let n of [0.25, 0.75]) {
      let i = t + r * n,
        a = p + m * 0.52,
        o = m * 0.27;
      ((e.fillStyle = `rgba(95,84,66,0.4)`),
        e.beginPath(),
        e.arc(i + 1, a + 1.5, o + 2, 0, Math.PI * 2),
        e.fill(),
        (e.fillStyle = `#e6dfcd`),
        e.beginPath(),
        e.arc(i, a, o, 0, Math.PI * 2),
        e.fill(),
        (e.strokeStyle = `rgba(110,98,80,0.5)`),
        (e.lineWidth = 1.5),
        e.beginPath(),
        e.arc(i, a, o * 0.6, 0, Math.PI * 2),
        e.stroke());
    }
    for (let [n, i] of [
      [0.02, 0.17],
      [0.33, 0.67],
      [0.83, 0.98],
    ]) {
      let a = t + r * n,
        o = r * (i - n);
      ((e.fillStyle = `rgba(95,84,66,0.35)`),
        e.fillRect(a, p + 15, o, m - 30),
        (e.fillStyle = `#cbc0a9`),
        e.fillRect(a + 2, p + 17, o - 2, m - 32));
    }
    a(t, p, r, m, 0.5);
  },
  tnmKawara: (e, t, n, r, i, a) => {
    let o = XE(211);
    ((e.fillStyle = `#3a3633`), e.fillRect(t, n, r, i));
    let s = r / 10;
    for (let r = 0; r < 10; r++) {
      let a = 0.92 + o() * 0.12;
      ((e.fillStyle = ZE(62 * a, 58 * a, 55 * a)),
        e.fillRect(t + r * s + 1, n, s * 0.5, i));
      let c = t + r * s + s * 0.75,
        l = e.createLinearGradient(c - s * 0.28, 0, c + s * 0.28, 0);
      (l.addColorStop(0, ZE(52 * a, 49 * a, 46 * a)),
        l.addColorStop(0.45, ZE(104 * a, 99 * a, 93 * a)),
        l.addColorStop(1, ZE(44 * a, 41 * a, 39 * a)),
        (e.fillStyle = l),
        e.fillRect(c - s * 0.28, n, s * 0.56, i));
    }
    e.fillStyle = `rgba(18,16,14,0.55)`;
    for (let a = 1; a < 10; a++) e.fillRect(t, n + (i * a) / 10, r, 2);
    (QE(e, t, n, r, i, 212, (r * i) / 40, 0.12, !1),
      QE(e, t, n, r, i, 213, (r * i) / 40, 0.2),
      a(t, n, r, i, 0.04));
  },
  tnmBanner: (e, t, n, r, i, a, o) => {
    let s = r / 2;
    ((e.fillStyle = `#b5322a`),
      e.fillRect(t, n, s, i),
      (e.fillStyle = `rgba(0,0,0,0.18)`),
      e.fillRect(t, n, s, 10),
      (e.fillStyle = `#f6f1e6`),
      (e.textAlign = `center`),
      (e.textBaseline = `middle`),
      (e.font = `600 36px ${o.serif}`));
    let c = [...rc(`landmark.tnm.name`).ja];
    for (let r = 0; r < c.length; r++)
      e.fillText(c[r], t + s / 2, n + 34 + r * 41);
    ((e.fillStyle = `#1f3258`),
      e.fillRect(t + s, n, s, i),
      (e.strokeStyle = `rgba(235,240,245,0.85)`),
      (e.lineWidth = 3));
    for (let a = 0; a < 4; a++) {
      e.beginPath();
      let o = n + i * 0.6 + a * 22;
      (e.moveTo(t + s, o),
        e.bezierCurveTo(t + s + 18, o - 24, t + s + 40, o + 16, t + r, o - 10),
        e.stroke());
    }
    ((e.fillStyle = `#f2ead8`), (e.font = `700 40px ${o.serif}`));
    let l = [...rc(`landmark.tnm.banner`).ja];
    for (let r = 0; r < l.length; r++)
      e.fillText(l[r], t + s * 1.5, n + 38 + r * 46);
    a(t, n, r, i, 0.7);
  },
  tnmPlaque: (e, t, n, r, i, a, o) => {
    let s = XE(221),
      c = rc(`landmark.tnm.name`);
    for (let [a, o] of [
      [n, i / 2],
      [n + i / 2, i / 2],
    ]) {
      ((e.fillStyle = `#3f8b74`), e.fillRect(t, a, r, o));
      for (let n = 0; n < 60; n++)
        ((e.fillStyle =
          s() < 0.5 ? `rgba(30,70,58,0.25)` : `rgba(140,200,180,0.22)`),
          e.fillRect(t + s() * r, a + s() * o, 6 + s() * 24, 4 + s() * 12));
      ((e.strokeStyle = `rgba(30,60,50,0.6)`),
        (e.lineWidth = 2),
        e.strokeRect(t + 2, a + 2, r - 4, o - 4));
    }
    ((e.textAlign = `center`),
      (e.textBaseline = `middle`),
      (e.fillStyle = `#6a4a2a`),
      (e.font = `600 36px ${o.serif}`),
      e.fillText(c.ja, t + r / 2 + 1, n + i / 4 + 2, r - 24),
      (e.fillStyle = `#9a7445`),
      e.fillText(c.ja, t + r / 2, n + i / 4, r - 24));
    let l = (c.en ?? ``).toUpperCase().split(` `);
    e.font = `600 17px ${o.sans}`;
    for (let a = 0; a < l.length; a++) {
      let o = n + i / 2 + 15 + a * 17;
      ((e.fillStyle = `#6a4a2a`),
        e.fillText(l[a], t + r / 2 + 1, o + 1.5, r - 40),
        (e.fillStyle = `#9a7445`),
        e.fillText(l[a], t + r / 2, o, r - 40));
    }
    a(t, n, r, i, 0.2);
  },
  saigoPlaque: (e, t, n, r, i, a) => {
    let o = XE(231);
    ((e.fillStyle = `#2f2c28`),
      e.fillRect(t, n, r, i),
      (e.strokeStyle = `#5a5246`),
      (e.lineWidth = 2),
      e.strokeRect(t + 3, n + 3, r - 6, i - 6));
    let s = (r - 16) / 11;
    for (let a = 0; a < 11; a++) {
      let c = t + r - 8 - (a + 0.5) * s,
        l = a === 10 ? 4 : 9;
      for (let t = 0; t < l; t++) {
        let r = n + 9 + t * ((i - 18) / 9),
          a = s * 0.62;
        e.fillStyle = `rgba(150,140,118,0.75)`;
        for (let t = 0; t < 4; t++) {
          let t = o() < 0.55;
          e.fillRect(
            c - a / 2 + o() * a * (t ? 0.2 : 0.8),
            r + o() * a * (t ? 0.8 : 0.2),
            t ? a * (0.5 + o() * 0.5) : 1.4,
            t ? 1.4 : a * (0.4 + o() * 0.6),
          );
        }
      }
    }
    e.fillStyle = `#7d725f`;
    for (let a of [t + 4, t + r - 7])
      for (let t = 0; t < 4; t++)
        e.fillRect(a, n + 12 + (t * (i - 27)) / 3, 3, 3);
    a(t, n, r, i, 0.15);
  },
  uenoWin: IE,
  uenoBay: LE,
  uenoSign: zE,
  uenoMisc: BE,
  uenoVision: VE,
  ...rD(),
};
