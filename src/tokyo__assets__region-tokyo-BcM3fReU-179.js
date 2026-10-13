// tokyo__assets__region-tokyo-BcM3fReU 179 — key
// Lines 75157-75486 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var YV = {
    JY: `#80C241`,
    JK: `#00B2E5`,
    JB: `#FFD400`,
    JC: `#F15A22`,
    SK: `#1A66B5`,
    G: `#FF9500`,
    H: `#B5B5AC`,
    M: `#F62E36`,
  },
  XV = (e) => 1 + e,
  ZV = {
    board: [384, 115],
    dir: [288, 54],
    exit: [320, 80],
    metro: [256, 100],
    plate: [160, 36],
    name: [384, 72],
  },
  QV = class {
    tex;
    regions = new Map();
    white;
    px;
    constructor(e, t, n, r = 4096, i = 4) {
      let a = [],
        o = t.sans;
      (a.push({ key: `white`, w: 16, h: 16, bg: `#ffffff`, paint() {} }),
        a.push({ key: `brick`, w: 512, h: 256, bg: `#7a3a26`, paint: eH }),
        a.push({ key: `conc`, w: 256, h: 256, bg: `#bdbab3`, paint: tH }),
        a.push({ key: `floor`, w: 256, h: 256, bg: `#b8b6ae`, paint: nH }),
        a.push({ key: `ballast`, w: 128, h: 256, bg: `#6c645a`, paint: rH }),
        a.push({ key: `slab`, w: 128, h: 256, bg: `#9a9890`, paint: iH }));
      for (let t of e.boards)
        a.push({
          key: t.key,
          w: ZV.board[0],
          h: ZV.board[1],
          bg: `#ffffff`,
          paint: (e, n, r) => sH(e, n, r, t, o),
        });
      for (let t of e.dirs)
        a.push({
          key: t.key,
          w: ZV.dir[0],
          h: ZV.dir[1],
          bg: `#1d2024`,
          paint: (e, n, r) => cH(e, n, r, t, o),
        });
      for (let t of e.exits)
        a.push({
          key: t.key,
          w: ZV.exit[0],
          h: ZV.exit[1],
          bg: `#f7f7f4`,
          sharp: !0,
          paint: (e, n, r) => lH(e, n, r, t, o),
        });
      for (let t of e.metro)
        a.push({
          key: t.key,
          w: ZV.metro[0],
          h: ZV.metro[1],
          bg: `#ffffff`,
          paint: (e, n, r) => dH(e, n, r, t, o),
        });
      for (let t of e.plates)
        a.push({
          key: t.key,
          w: ZV.plate[0],
          h: ZV.plate[1],
          bg: `#f4f4ef`,
          paint: (e, n, r) => fH(e, n, r, t, o),
        });
      for (let t of e.names)
        a.push({
          key: t.key,
          w: ZV.name[0],
          h: ZV.name[1],
          bg: `#f7f7f4`,
          paint: (e, n, r) => pH(e, n, r, t, o),
        });
      (a.push({
        key: `concGates`,
        w: 128,
        h: 176,
        bg: `#c8ccc8`,
        sharp: !0,
        paint: (e, t, n) => mH(e, t, n, `gates`, o),
      }),
        a.push({
          key: `concTickets`,
          w: 128,
          h: 176,
          bg: `#c8ccc8`,
          sharp: !0,
          paint: (e, t, n) => mH(e, t, n, `tickets`, o),
        }),
        a.push({
          key: `concShop`,
          w: 128,
          h: 176,
          bg: `#c8ccc8`,
          sharp: !0,
          paint: (e, t, n) => mH(e, t, n, `shop`, o),
        }),
        a.push({
          key: `concPassage`,
          w: 128,
          h: 176,
          bg: `#c8ccc8`,
          sharp: !0,
          paint: (e, t, n) => mH(e, t, n, `passage`, o),
        }),
        a.push({
          key: `tkt`,
          w: 64,
          h: 112,
          bg: `#d9dcdc`,
          sharp: !0,
          paint: (e, t, n) => hH(e, t, n, o),
        }),
        a.push({
          key: `fare`,
          w: 320,
          h: 96,
          bg: `#ffffff`,
          sharp: !0,
          paint: (e, t, n) => gH(e, t, n, o),
        }),
        a.push({ key: `fan`, w: 128, h: 64, bg: `#2a3034`, paint: _H }),
        a.push({ key: `tile`, w: 128, h: 128, bg: `#e6e2d8`, paint: bH }),
        a.push({ key: `shutter`, w: 128, h: 176, bg: `#9a9c9a`, paint: yH }),
        a.push({
          key: `stopmark`,
          w: 64,
          h: 64,
          bg: `#ffffff`,
          paint: (e, t, n) => vH(e, t, n, o),
        }));
      let s = Array(a.length),
        c = 0,
        l = 0,
        u = n,
        d = 4;
      for (let e = 0; e < 12; e++, u *= 0.9) {
        let e = XV(u);
        d = Math.max(4, Math.round(6 * u));
        let t = (t) => [
            Math.max(4, Math.round(t.w * (t.sharp ? e : u))),
            Math.max(4, Math.round(t.h * (t.sharp ? e : u))),
          ],
          n = 0,
          i = 0;
        for (let e of a) {
          let [r, a] = t(e);
          ((n += (r + d * 2) * (a + d * 2)), (i = Math.max(i, r + d * 2)));
        }
        c = Math.max(
          256,
          Math.ceil(Math.max(i, Math.sqrt(n * 1.1)) / 256) * 256,
        );
        let o = a.map(t),
          f = a
            .map((e, t) => t)
            .sort((e, t) => o[t][1] - o[e][1] || o[t][0] - o[e][0]),
          p = 0,
          m = 0,
          h = 0;
        for (let e of f) {
          let [n, r] = t(a[e]);
          (p + n + d * 2 > c && ((p = 0), (m += h), (h = 0)),
            (s[e] = [p + d, m + d, n, r]),
            (p += n + d * 2),
            (h = Math.max(h, r + d * 2)));
        }
        if (((l = Math.ceil((m + h) / 32) * 32), Math.max(c, l) <= r)) break;
      }
      let [f, p] = ye(c, l);
      (f.setAttribute(`lang`, `ja`),
        `lang` in p && (p.lang = `ja`),
        (this.px = [c, l]),
        (p.fillStyle = `#808080`),
        p.fillRect(0, 0, c, l));
      for (let e = 0; e < a.length; e++) {
        let t = a[e],
          [n, r, i, o] = s[e];
        ((p.fillStyle = t.bg),
          p.fillRect(n - d, r - d, i + d * 2, o + d * 2),
          p.save(),
          p.translate(n, r),
          p.scale(i / t.w, o / t.h),
          p.beginPath(),
          p.rect(0, 0, t.w, t.h),
          p.clip());
        try {
          t.paint(p, t.w, t.h);
        } catch (e) {
          console.warn(`[transit] atlas paint failed`, t.key, e);
        }
        (p.restore(),
          this.regions.set(t.key, {
            u0: (n + 0.5) / c,
            u1: (n + i - 0.5) / c,
            v0: 1 - (r + o - 0.5) / l,
            v1: 1 - (r + 0.5) / l,
          }));
      }
      this.white = this.regions.get(`white`);
      let m = Se(f, { srgb: !0, anisotropy: i });
      ((m.name = `tokyo-transit-atlas`),
        (m.userData.noClamp = !0),
        de(m),
        (this.tex = m));
    }
    uv(e) {
      return this.regions.get(e) ?? this.white;
    }
    has(e) {
      return this.regions.has(e);
    }
  };
function $V(e, t, n, r, i, a = `left`) {
  let o = e.measureText(t).width,
    s = o > i ? i / o : 1;
  (e.save(),
    e.translate(n, r),
    e.scale(s, 1),
    (e.textAlign = a),
    e.fillText(t, 0, 0),
    e.restore());
}
function eH(e, t, n) {
  let r = new ne(9137);
  ((e.fillStyle = `#9b9488`), e.fillRect(0, 0, t, n));
  let i = n / 26,
    a = [
      [132, 56, 36],
      [148, 66, 42],
      [120, 50, 33],
      [156, 74, 48],
      [110, 44, 30],
      [138, 62, 44],
      [98, 40, 30],
    ];
  for (let n = 0; n < 26; n++) {
    let o = n % 2 == 1,
      s = o ? t / 36 : t / 18,
      c = o && n % 4 == 1 ? s / 2 : 0;
    for (let o = -s + c; o < t; o += s) {
      let t = a[Math.floor(r.next() * a.length)],
        c = 0.86 + r.next() * 0.22;
      ((e.fillStyle = `rgb(${Math.min(255, t[0] * c) | 0},${Math.min(255, t[1] * c) | 0},${Math.min(255, t[2] * c) | 0})`),
        e.fillRect(o + 1.2, n * i + 1.1, s - 2.2, i - 2));
    }
  }
  for (let i = 0; i < 40; i++) {
    e.fillStyle = `rgba(30,24,20,${0.03 + r.next() * 0.05})`;
    let i = r.next() * t,
      a = 4 + r.next() * 30;
    e.fillRect(i, 0, a, n * (0.3 + r.next() * 0.7));
  }
}
function tH(e, t, n) {
  let r = new ne(5521);
  for (let i = 0; i < 900; i++) {
    let i = 168 + r.next() * 40;
    e.fillStyle = `rgba(${i | 0},${(i - 3) | 0},${(i - 9) | 0},0.25)`;
    let a = 3 + r.next() * 18;
    e.fillRect(r.next() * t, r.next() * n, a, a);
  }
  e.fillStyle = `rgba(80,78,72,0.35)`;
  for (let r = 0; r <= t; r += t / 4) e.fillRect(r - 0.6, 0, 1.2, n);
  (e.fillRect(0, n * 0.5 - 0.8, t, 1.6), (e.fillStyle = `rgba(60,58,54,0.5)`));
  for (let r = t / 8; r < t; r += t / 4)
    for (let t = n / 8; t < n; t += n / 4) e.fillRect(r - 1.5, t - 1.5, 3, 3);
  for (let i = 0; i < 18; i++)
    ((e.fillStyle = `rgba(70,66,60,${0.05 + r.next() * 0.07})`),
      e.fillRect(r.next() * t, 0, 2 + r.next() * 6, n * r.next()));
}
function nH(e, t, n) {
  let r = new ne(771),
    i = t / 13;
  for (let t = 0; t < 13; t++)
    for (let n = 0; n < 13; n++) {
      let a = 172 + r.next() * 16;
      ((e.fillStyle = `rgb(${a | 0},${(a - 2) | 0},${(a - 7) | 0})`),
        e.fillRect(t * i + 0.6, n * i + 0.6, i - 1.2, i - 1.2));
    }
  for (let i = 0; i < 40; i++) {
    e.fillStyle = `rgba(60,58,54,${0.015 + r.next() * 0.025})`;
    let i = 4 + r.next() * 18;
    (e.beginPath(),
      e.arc(r.next() * t, r.next() * n, i, 0, Math.PI * 2),
      e.fill());
  }
}
function rH(e, t, n) {
  let r = new ne(4242);
  for (let i = 0; i < 2600; i++) {
    let i = 70 + r.next() * 70;
    ((e.fillStyle = `rgb(${(i + 8) | 0},${(i + 2) | 0},${(i - 6) | 0})`),
      e.fillRect(
        r.next() * t,
        r.next() * n,
        1.5 + r.next() * 2.5,
        1.5 + r.next() * 2.5,
      ));
  }
  for (let r = 0; r < 7; r++) {
    let i = (r + 0.5) * (n / 6.67);
    ((e.fillStyle = `#9d9a92`),
      e.fillRect(t * 0.155, i - 7, t * 0.69, 15),
      (e.fillStyle = `rgba(40,38,34,0.35)`),
      e.fillRect(t * 0.155, i + 7, t * 0.69, 3));
  }
  e.fillStyle = `rgba(96,58,34,0.35)`;
  for (let r of [0.31, 0.69]) e.fillRect(t * r - 4, 0, 8, n);
}
function iH(e, t, n) {
  ((e.fillStyle = `#a4a29a`),
    e.fillRect(t * 0.08, 0, t * 0.84, n),
    (e.fillStyle = `rgba(50,48,44,0.6)`),
    e.fillRect(t * 0.08, n * 0.98, t * 0.84, n * 0.02),
    (e.fillStyle = `#5a5854`));
  for (let r = 6; r < n; r += n / 6.67)
    for (let n of [0.25, 0.75]) e.fillRect(t * n - 6, r, 12, 6);
  e.fillStyle = `rgba(96,58,34,0.3)`;
  for (let r of [0.25, 0.75]) e.fillRect(t * r - 3, 0, 6, n);
}
