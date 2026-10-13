// tokyo__assets__region-tokyo-d-ginza-B8PkMMHp 03 — key
// Lines 370-994 of readable/tokyo__assets__region-tokyo-d-ginza-B8PkMMHp.pretty.js (statement-aligned).
var Se = (e, t, n) => {
    (R(e, t, n, `#1a1030`, `#2a1a40`),
      I(e, t / 2, t * 0.7, n * 0.8, 0.45),
      (e.fillStyle = `#3a2050`),
      e.beginPath(),
      e.moveTo(t * 0.36, n * 0.82),
      e.quadraticCurveTo(t * 0.36, n * 0.38, t * 0.5, n * 0.3),
      e.quadraticCurveTo(t * 0.64, n * 0.38, t * 0.64, n * 0.82),
      e.fill());
    for (let r = 0; r < 15; r++) {
      let i = Math.PI * (0.15 + (0.7 * r) / 14);
      P(
        e,
        t * 0.5 - Math.cos(i) * t * 0.12,
        n * 0.42 + Math.sin(i) * n * 0.12,
        4,
        `#fffaf0`,
      );
    }
    for (let r of [0.2, 0.8])
      (m(e, t * r - 18, n * 0.62, 36, n * 0.2, `#e8e2d6`),
        P(e, t * r, n * 0.6, 7, `#fff6d8`));
    z(e, t, n);
  },
  Ce = (e, t, n, r) => {
    R(e, t, n, `#5a4a3e`, `#3a2e24`);
    for (let i = 0; i < 26; i++)
      P(
        e,
        r.next() * t,
        r.next() * n * 0.7,
        4 + r.next() * 6,
        [`#c8501e`, `#e0902a`, `#a8321a`, `#d8b040`][i % 4],
      );
    for (let [r, i] of [
      [0.3, `#5a1e1e`],
      [0.68, `#2a2a34`],
    ])
      (P(e, t * r, n * 0.2, 11, `#f0e6dc`),
        (e.fillStyle = i),
        e.beginPath(),
        e.moveTo(t * r - 16, n * 0.28),
        e.lineTo(t * r + 16, n * 0.28),
        e.lineTo(t * r + 30, n * 0.82),
        e.lineTo(t * r - 30, n * 0.82),
        e.closePath(),
        e.fill());
    (I(e, t * 0.3, t * 0.4, n * 0.8, 0.25),
      I(e, t * 0.68, t * 0.4, n * 0.8, 0.25),
      z(e, t, n));
  },
  we = (e, t, n) => {
    R(e, t, n, `#4a4038`, `#2e261e`);
    for (let r = 0; r < 3; r++) {
      let i = t * (0.2 + r * 0.3),
        a = n * (0.46 + (r % 2) * 0.12);
      m(e, i - 26, a + 34, 52, n * 0.82 - a - 34, `#ddd2c0`);
      let o = [`#c86a1e`, `#1a1a1a`, `#8a1e2a`][r];
      (m(e, i - 22, a, 44, 34, o),
        (e.strokeStyle = o),
        (e.lineWidth = 4),
        e.beginPath(),
        e.arc(i, a, 12, Math.PI, 0),
        e.stroke(),
        m(e, i - 4, a + 12, 8, 6, `#e8c870`));
    }
    z(e, t, n);
  },
  Te = (e, t, n) => {
    (R(e, t, n, `#101418`, `#1a2028`), I(e, t / 2, t * 0.8, n * 0.8, 0.3));
    for (let r = 0; r < 6; r++) {
      let i = (r / 6) * N,
        a = t / 2 + Math.cos(i) * t * 0.26,
        o = n * 0.44 + Math.sin(i) * n * 0.2;
      (P(e, a, o, 15, `#c8a860`),
        P(e, a, o, 12, `#f4f0e6`),
        m(e, a - 1, o - 9, 2, 9, `#1a1a1a`),
        m(e, a, o - 1, 7, 2, `#1a1a1a`));
    }
    (P(e, t / 2, n * 0.44, 26, `#d8b868`),
      P(e, t / 2, n * 0.44, 22, `#1a2a4a`),
      z(e, t, n));
  },
  Ee = (e, t, n) => {
    R(e, t, n, `#4a3a40`, `#2e2228`);
    for (let r = 0; r < 5; r++) {
      let i = t * (0.14 + r * 0.18),
        a = 40 + (r % 3) * 16;
      (m(
        e,
        i - 12,
        n * 0.78 - a,
        24,
        a,
        [
          `rgba(240,200,120,0.85)`,
          `rgba(200,220,240,0.85)`,
          `rgba(250,180,190,0.85)`,
          `rgba(230,230,210,0.85)`,
          `rgba(210,190,240,0.85)`,
        ][r],
      ),
        m(e, i - 5, n * 0.78 - a - 12, 10, 12, `#c8a860`));
    }
    for (let r = 0; r < 9; r++)
      P(
        e,
        t * (0.1 + r * 0.1),
        n * 0.2 + (r % 2) * 14,
        9,
        r % 2 ? `#f8f0f2` : `#e8a8b8`,
      );
    z(e, t, n);
  },
  De = (e, t, n, r) => {
    R(e, t, n, `#6a6a68`, `#3a3a38`);
    for (let i = 0; i < 22; i++) {
      let a = 20 + r.next() * (t - 40),
        o = 20 + r.next() * n * 0.6;
      ((e.strokeStyle = `rgba(80,80,80,0.4)`),
        (e.lineWidth = 1),
        e.beginPath(),
        e.moveTo(a, 0),
        e.lineTo(a, o),
        e.stroke(),
        (e.fillStyle = [`#e85a2a`, `#f0c030`, `#2a7ac8`, `#ffffff`, `#e8a0b0`][
          i % 5
        ]),
        e.beginPath(),
        e.moveTo(a - 10, o),
        e.lineTo(a + 10, o - 2),
        e.lineTo(a, o + 8),
        e.closePath(),
        e.fill());
    }
    (m(e, t * 0.3, n * 0.66, t * 0.4, n * 0.14, `#d0c8b8`), z(e, t, n));
  },
  Oe = (e, t, n, r) => {
    R(e, t, n, `#5a4a30`, `#3a2e1a`);
    for (let r = 0; r < 3; r++) {
      let i = t * (0.2 + r * 0.3),
        a = n * 0.5;
      (P(e, i, a, 22, [`#b8804a`, `#f0e0c8`, `#8a5a3a`][r]),
        P(e, i, a - 28, 15, [`#b8804a`, `#f0e0c8`, `#8a5a3a`][r]),
        P(e, i - 11, a - 40, 6, [`#a8703a`, `#e0d0b8`, `#7a4a2a`][r]),
        P(e, i + 11, a - 40, 6, [`#a8703a`, `#e0d0b8`, `#7a4a2a`][r]));
    }
    ((e.strokeStyle = `#6a6a6a`),
      (e.lineWidth = 3),
      e.beginPath(),
      e.ellipse(t / 2, n * 0.84, t * 0.4, n * 0.06, 0, 0, Math.PI * 2),
      e.stroke());
    for (let r = 0; r < 4; r++)
      m(
        e,
        t * 0.22 + r * 26,
        n * 0.79,
        22,
        10,
        r === 0 ? `#1a6a3a` : `#e8a020`,
      );
    for (let t = 0; t < 5; t++)
      m(
        e,
        14 + t * 46,
        n * 0.1,
        36,
        24,
        [`#d02a1a`, `#2a6ac8`, `#f0c020`, `#2a9a4a`, `#e85aa0`][
          Math.floor(r.next() * 5)
        ],
      );
    z(e, t, n);
  },
  ke = (e, t, n, r) => {
    (c(e, 0, 0, t, n, `#f4f2ee`, `#dedbd4`),
      m(e, 20, 24, t - 40, n * 0.36, `#d8dde2`),
      P(e, t / 2, 24 + n * 0.18, n * 0.1, `#bcc4cc`));
    for (let r = 0; r < 2; r++) {
      let i = n * (0.62 + r * 0.14);
      m(e, 16, i, t - 32, 7, `#b8925c`);
      for (let n = 0; n < 6; n++)
        m(e, 26 + n * ((t - 52) / 6), i - 6, 16, 6, `#2a2a2c`);
    }
    for (let i = 0; i < 5; i++) {
      let a = 20 + r.next() * (t - 40),
        o = n * 0.5 + r.next() * n * 0.1;
      (m(
        e,
        a - 5,
        o,
        10,
        n * 0.34,
        [`#2a3a5a`, `#5a4a3a`, `#3a3a3a`, `#8a5a4a`, `#4a5a4a`][i],
      ),
        P(e, a, o - 6, 6, `#e0c4a8`));
    }
    ((e.strokeStyle = `#1a1a1a`),
      (e.lineWidth = 6),
      e.strokeRect(3, 3, t - 6, n - 6),
      z(e, t, n));
  },
  Ae = {
    channel: {
      key: `brand.channel`,
      bg: `#0b0b0d`,
      fg: `#ffffff`,
      spacing: 0.35,
    },
    luisbutton: {
      key: `brand.luisbutton`,
      bg: `#3a2a1c`,
      fg: `#f4e6c4`,
      spacing: 0.22,
    },
    hermit: { key: `brand.hermit`, bg: `#2a2620`, fg: `#ffffff`, spacing: 0.3 },
    guchi: { key: `brand.guchi`, bg: `#101010`, fg: `#e8d6a8`, spacing: 0.3 },
    tiffin: {
      key: `brand.tiffin`,
      bg: `#9ed8d0`,
      fg: `#0d2a28`,
      spacing: 0.12,
      serif: !0,
    },
    prawda: { key: `brand.prawda`, bg: `#101010`, fg: `#ffffff`, spacing: 0.3 },
    minamoto: {
      key: `brand.minamoto`,
      bg: `#f4f1ea`,
      fg: `#14246a`,
      spacing: 0.28,
      serif: !0,
    },
    pearstore: {
      key: `brand.pearstore`,
      bg: `#f2f2ef`,
      fg: `#2a2a2a`,
      spacing: 0.04,
    },
    unishiro: {
      key: `brand.unishiro`,
      bg: `#e60012`,
      fg: `#ffffff`,
      spacing: 0.05,
    },
    yotsukoshi: {
      key: `brand.yotsukoshi`,
      bg: `#e3dccd`,
      fg: A,
      serif: !0,
      spacing: 0.25,
    },
    umeya: {
      key: `ginza.mark.umeya`,
      bg: `#f4f4f0`,
      fg: `#1d2088`,
      spacing: 0.22,
    },
    bvlgaro: {
      key: `ginza.mark.bvlgaro`,
      bg: `#1e1a16`,
      fg: `#f4e2b0`,
      spacing: 0.32,
      serif: !0,
    },
    diar: {
      key: `ginza.mark.diar`,
      bg: `#ece8e0`,
      fg: `#1a1a1a`,
      spacing: 0.12,
      serif: !0,
    },
    carter: {
      key: `ginza.mark.carter`,
      bg: `#5a0e14`,
      fg: `#f0d8a0`,
      spacing: 0.1,
      serif: !0,
    },
    seika: {
      key: `ginza.mark.seika`,
      bg: `#1a1a1a`,
      fg: `#ffffff`,
      spacing: 0.3,
    },
    shiseido: {
      key: `ginza.mark.shiseido-parlour`,
      bg: `#7a2e22`,
      fg: `#f6eedc`,
      serif: !0,
      spacing: 0.08,
    },
    tiger: {
      key: `ginza.mark.beerhall`,
      bg: `#1c1410`,
      fg: `#f0c860`,
      serif: !0,
      spacing: 0.05,
    },
    kimuraya: {
      key: `ginza.mark.kimuraya`,
      bg: `#8a1a14`,
      fg: `#f6eedc`,
      serif: !0,
      spacing: 0.2,
    },
    itoya: {
      key: `ginza.mark.itoya`,
      bg: `#d0141a`,
      fg: `#ffffff`,
      spacing: 0.15,
    },
    hakuhinkan: {
      key: `ginza.mark.hakuhinkan`,
      bg: `#f6c400`,
      fg: `#c8101a`,
      spacing: 0.1,
    },
    kyukyodo: {
      key: `ginza.mark.kyukyodo`,
      bg: `#2a1e14`,
      fg: `#f0e2c0`,
      serif: !0,
      spacing: 0.3,
    },
    fujiya: {
      key: `ginza.mark.fujiya`,
      bg: `#ffffff`,
      fg: `#d0141a`,
      spacing: 0.1,
    },
  },
  je = (e) => (t, n, r) => {
    (m(t, 0, 0, n, r, e.bg),
      e.band && m(t, 0, r - 6, n, 6, e.band),
      ie(t, s(e.key), n, r, e.fg, { serif: e.serif, spacing: e.spacing }));
  },
  Me = {
    kyukyodo: {
      key: `ginza.mark.kyukyodo`,
      bg: `#2a1e14`,
      fg: `#f0e2c0`,
      serif: !0,
    },
    kimuraya: {
      key: `ginza.mark.kimuraya`,
      bg: `#f4ecd8`,
      fg: `#8a1a14`,
      serif: !0,
    },
    yotsukoshi: { key: `brand.yotsukoshi`, bg: A, fg: `#ffffff`, serif: !0 },
  },
  Ne = (e) => (t, n, r) => {
    (m(t, 0, 0, n, r, e.bg),
      (t.strokeStyle = e.fg),
      (t.lineWidth = 3),
      t.strokeRect(6, 6, n - 12, r - 12),
      k(t, s(e.key), n / 2, 18, r - 18, n * 0.62, e.fg, e.serif ? f() : u()));
  },
  Pe = (e) => (t, n, r) => {
    (m(t, 0, 0, n, r, `#1a1410`),
      (t.strokeStyle = `#c8a050`),
      (t.lineWidth = 4),
      t.strokeRect(4, 4, n - 8, r - 8),
      k(t, s(e), n / 2, 10, r - 10, n * 0.6, `#e8c870`, f()));
  },
  Fe = (e, t, n) => {
    (m(e, 0, 0, t, n, `#d0201a`),
      m(e, 0, 0, t, 10, `#ffffff`),
      k(
        e,
        s(`culture.shrine.nobori`),
        t / 2,
        16,
        n - 10,
        t * 0.6,
        `#ffffff`,
        f(),
      ));
  },
  Ie = (e, t, n) => {
    (m(e, 0, 0, t, n, `#1a1a1a`),
      F(e, t / 2, n / 2, t * 0.5, `#fff0c0`, `#d8401a`),
      m(e, 0, 0, t, 8, `#1a1a1a`),
      m(e, 0, n - 8, t, 8, `#1a1a1a`));
  },
  Le = (e, t, n) => {
    for (let r = 0; r < 8; r++)
      m(e, (r * t) / 8, 0, t / 8, n, r % 2 ? `#f4efe4` : `#c8b896`);
  },
  Re = (e, t, n, r) => {
    m(e, 0, 0, t, n, `#14100e`);
    let i = n / 6;
    for (let n = 0; n < 6; n++) {
      let a = [
          `#f6f0e4`,
          `#1a1a2a`,
          `#f0e0f0`,
          `#2a1414`,
          `#f4f0e0`,
          `#101c1a`,
        ][n],
        o = [`#3a1a40`, `#e8c878`, `#6a1a4a`, `#f0d8a0`, `#1a1a1a`, `#e0f0e8`][
          n
        ];
      (m(e, 4, n * i + 3, t - 8, i - 6, a),
        p(
          e,
          s(`ginza.club.${1 + ((n + Math.floor(r.next() * 3)) % 8)}`),
          t / 2,
          n * i + i / 2,
          t - 18,
          i * 0.42,
          o,
          n % 2 ? f() : u(),
        ));
    }
  },
  ze = (e, t, n) => {
    (m(e, 0, 0, t, n, `#f6f0e2`),
      m(e, 0, 0, t, 14, A),
      m(e, 0, n - 14, t, 14, A),
      k(e, s(`ginza.ad.hokkaido`), t / 2, 22, n - 22, t * 0.7, `#1a1a1a`, f()));
  },
  Be = (e, t, n) => {
    (c(e, 0, 0, t, n, `#f4f4f0`, `#e4e4de`),
      m(e, 0, n * 0.7, t, n * 0.08, `#2a8a4a`));
    for (let r = 0; r < t; r += 64) m(e, r, 0, 2, n, `rgba(0,0,0,0.12)`);
    m(e, 0, n - 8, t, 8, `#9a9a94`);
  },
  Ve = (e, t, n) => {
    (m(e, 0, 0, t, n, `#ffffff`),
      (e.strokeStyle = `#1a1a1a`),
      (e.lineWidth = 3),
      e.strokeRect(3, 3, t - 6, n - 6),
      p(
        e,
        s(`ginza.site.notice`),
        t / 2,
        n * 0.1,
        t * 0.86,
        n * 0.07,
        `#1a1a1a`,
        u(),
        `bold`,
      ));
    for (let r = 0; r < 9; r++)
      (m(e, 12, n * 0.2 + r * n * 0.075, t * 0.3, 1.5, `#1a1a1a`),
        m(
          e,
          12 + t * 0.34,
          n * 0.2 + r * n * 0.075 - 6,
          t * 0.5 * (0.5 + ((r * 37) % 10) / 20),
          3,
          `#6a6a6a`,
        ));
    e.strokeRect(t * 0.6, n * 0.62, t * 0.3, n * 0.32);
  },
  He = (e, t, n) => {
    (m(e, 0, 0, t, n, `#ffffff`),
      m(e, 0, 0, t, n * 0.2, `#f0d000`),
      p(
        e,
        s(`common.safety.koji-chu`),
        t / 2,
        n * 0.1,
        t * 0.8,
        n * 0.13,
        `#1a1a1a`,
        u(),
        `900`,
      ),
      P(e, t * 0.36, n * 0.42, t * 0.08, `#f0d000`),
      m(e, t * 0.4, n * 0.42, t * 0.2, n * 0.12, `#2a5aa8`),
      m(e, t * 0.56, n * 0.5, t * 0.08, n * 0.24, `#2a5aa8`),
      p(
        e,
        s(`common.safety.koji-owabi`),
        t / 2,
        n * 0.86,
        t * 0.92,
        n * 0.08,
        `#1a1a1a`,
        u(),
        `bold`,
      ));
  },
  B = [
    [`white`, `#f4f4f0`],
    [`black`, `#141414`],
    [`gold`, `#c8a050`],
    [`bronze`, `#7a5a34`],
    [`steel`, `#8a9096`],
    [`vermilion`, `#d23a1e`],
    [`wood`, `#6a4428`],
    [`granite`, `#6a6660`],
    [`cream`, `#efe6d2`],
    [`red`, `#c8101a`],
    [`green`, `#2a5a3a`],
    [`navy`, `#1a2440`],
    [`warm`, `#ffe8b0`],
    [`glass`, `#3a4a52`],
    [`canvas`, `#ece4d4`],
    [`chair`, `#2a2a2a`],
    [`orange`, `#f08a1a`],
  ],
  Ue = (e, t, n) => {
    let r = t / B.length;
    B.forEach(([, t], i) => m(e, i * r, 0, r, n, t));
  },
  We = [
    `glassblock`,
    `ledmesh`,
    `pearl`,
    `lattice`,
    `goldfin`,
    `wave`,
    `aqua`,
    `gridwhite`,
    `whitebox`,
    `brickwash`,
    `stonewash`,
    `glassfloors`,
    `eaves`,
    `cylinder`,
    `depato`,
    `seigaiha`,
    `sheet`,
  ],
  Ge = {
    glassblock: ae,
    ledmesh: oe,
    pearl: se,
    lattice: ce,
    goldfin: le,
    wave: ue,
    aqua: de,
    gridwhite: fe,
    whitebox: pe,
    brickwash: me,
    stonewash: he,
    glassfloors: ge,
    eaves: _e,
    cylinder: ve,
    depato: ye,
    seigaiha: be,
    sheet: xe,
  },
  Ke = [`jewel`, `couture`, `bags`, `watch`, `perfume`, `art`, `toys`, `store`],
  qe = {
    jewel: Se,
    couture: Ce,
    bags: we,
    watch: Te,
    perfume: Ee,
    art: De,
    toys: Oe,
    store: ke,
  },
  Je = [
    ...We.flatMap((e) =>
      [0, 1].map((t) => ({
        id: `skin.${e}.${t}`,
        w: 168,
        h: 168,
        dw: 256,
        paint: Ge[e],
      })),
    ),
    ...Ke.map((e) => ({
      id: `vit.${e}`,
      w: 192,
      h: 192,
      dw: 256,
      paint: qe[e],
    })),
    ...Object.entries(Ae).map(([e, t]) => ({
      id: `mark.${e}`,
      w: 328,
      h: 62,
      paint: je(t),
    })),
    ...Object.entries(Me).map(([e, t]) => ({
      id: `vmark.${e}`,
      w: 72,
      h: 288,
      paint: Ne(t),
    })),
    { id: `gaku.asahi`, w: 64, h: 160, paint: Pe(`ginza.shrine.asahi`) },
    { id: `gaku.hodo`, w: 64, h: 160, paint: Pe(`ginza.shrine.hodo`) },
    { id: `gaku.azuma`, w: 64, h: 160, paint: Pe(`ginza.shrine.azuma`) },
    { id: `nobori`, w: 48, h: 224, paint: Fe },
    { id: `lantern`, w: 48, h: 64, paint: Ie },
    { id: `parasol`, w: 128, h: 64, paint: Le },
    { id: `clubs`, w: 96, h: 384, paint: Re },
    { id: `tare`, w: 64, h: 384, paint: ze },
    { id: `hoarding`, w: 256, h: 96, paint: Be },
    { id: `kenchiku`, w: 128, h: 176, paint: Ve },
    { id: `owabi`, w: 96, h: 176, paint: He },
    { id: `swatches`, w: 512, h: 16, paint: Ue },
  ],
  V = 4,
  Ye = (() => {
    let e = new Map(),
      t = [...Je].sort((e, t) => t.h - e.h || t.w - e.w),
      n = 0,
      r = 0,
      i = 0,
      a = [];
    for (let o of t) {
      let t = o.w + 8,
        s = o.h + 8,
        c = a.find((e) => e.w >= t && i - e.used >= s);
      if (c) {
        (e.set(o.id, [c.x + V, r + c.used + V, o.w, o.h]), (c.used += s));
        continue;
      }
      (n + t > 2048 && ((n = 0), (r += i), (i = 0), (a.length = 0)),
        (i ||= s),
        e.set(o.id, [n + V, r + V, o.w, o.h]),
        a.push({ x: n, w: t, used: s }),
        (n += t));
    }
    if (r + i > 1536) throw Error(`[ginza] atlas overflow: ${r + i} > ${M}`);
    return e;
  })();
