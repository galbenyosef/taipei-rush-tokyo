// tokyo/assets/region-tokyo-d-nihonbashi-DhEI_3CD 02 — key
// Lines 314-1368 of readable/tokyo/assets/region-tokyo-d-nihonbashi-DhEI_3CD.pretty.js (statement-aligned).
var ge = (e, t, n, r) => {
    (M(e, t, n, `#4a3a30`, `#2e2218`),
      O(e, t / 2, t * 0.8, n * 0.8, 0.3),
      (e.fillStyle = `#7a1e2a`),
      e.beginPath(),
      e.moveTo(t * 0.18, n * 0.22),
      e.lineTo(t * 0.82, n * 0.22),
      e.lineTo(t * 0.7, n * 0.36),
      e.lineTo(t * 0.66, n * 0.82),
      e.lineTo(t * 0.34, n * 0.82),
      e.lineTo(t * 0.3, n * 0.36),
      e.closePath(),
      e.fill(),
      g(e, t * 0.34, n * 0.46, t * 0.32, 14, `#d8b060`));
    for (let i = 0; i < 14; i++)
      D(
        e,
        t * 0.3 + r.next() * t * 0.4,
        n * 0.3 + r.next() * n * 0.5,
        5,
        [`#e0902a`, `#f0c040`, `#c8501e`][i % 3],
      );
    (g(e, t * 0.14, n * 0.2, t * 0.72, 5, `#2a1a10`), N(e, t, n));
  },
  _e = (e, t, n, r) => {
    M(e, t, n, `#5a4430`, `#3a2a1a`);
    for (let i = 0; i < 20; i++)
      D(
        e,
        r.next() * t,
        r.next() * n * 0.5,
        4 + r.next() * 5,
        [`#c8501e`, `#e0902a`, `#a8321a`][i % 3],
      );
    g(e, t * 0.16, n * 0.62, t * 0.68, n * 0.18, `#a8804a`);
    for (let r = 0; r < 6; r++)
      D(e, t * (0.24 + r * 0.1), n * 0.6, 12, r % 2 ? `#e8701e` : `#6a3a1a`);
    N(e, t, n);
  },
  ve = (e, t, n) => {
    he(e, t, n);
    for (let t = 0; t < 4; t++) {
      let r = 22 + t * 56;
      (g(e, r, n * 0.4, 44, n * 0.26, `#1a2a1a`),
        g(e, r + 4, n * 0.46, 36, 12, `#c8101a`),
        g(e, r + 10, n * 0.48, 24, 6, `#f0e0b0`));
    }
    for (let t = 0; t < 3; t++)
      g(
        e,
        30 + t * 74,
        n * 0.18,
        56,
        n * 0.16,
        [`#e8dcc0`, `#1a2a1a`, `#c8a050`][t],
      );
    N(e, t, n);
  },
  ye = (e, t, n) => {
    (he(e, t, n, `#4a3a2a`), g(e, 20, 30, t - 40, n * 0.56, `#1a2430`));
    for (let t = 0; t < 7; t++) {
      let r = 34 + t * 28;
      (g(e, r, 46, 10, n * 0.32, `#d8dde2`),
        g(e, r + 2, 46, 3, n * 0.32, `#f8faff`),
        g(e, r - 1, 46 + n * 0.32, 12, 26, `#5a3a22`));
    }
    N(e, t, n);
  },
  be = (e, t, n, r) => {
    he(e, t, n, `#7a5a34`);
    for (let t = 0; t < 5; t++) {
      let i = 30 + t * 40 + r.next() * 6,
        a = n * 0.5 + (t % 2) * 8;
      ((e.fillStyle = `#4a2e1a`),
        e.beginPath(),
        e.ellipse(i, a, 17, 9, -0.3, 0, E),
        e.fill(),
        D(e, i - 4, a - 2, 3, `rgba(200,180,140,0.5)`));
    }
    (g(e, t * 0.62, n * 0.24, 64, 44, `#c89a60`),
      g(e, t * 0.62, n * 0.24, 64, 6, `#8a6a42`));
    for (let t = 0; t < 3; t++) g(e, 24 + t * 40, n * 0.2, 30, 44, `#f0e6d0`);
    N(e, t, n);
  },
  xe = (e, t, n, r) => {
    M(e, t, n, `#efe8dc`, `#c8bca8`);
    for (let t = 0; t < 2; t++)
      for (let n = 0; n < 6; n++) {
        let i = [
          `#c8402a`,
          `#e8b030`,
          `#3a6a9a`,
          `#6a9a4a`,
          `#d87aa0`,
          `#f4efe0`,
        ][Math.floor(r.next() * 6)];
        g(e, 16 + n * 38, 22 + t * 90, 32, 80, i);
        for (let r = 0; r < 6; r++)
          g(
            e,
            16 + n * 38,
            26 + t * 90 + r * 13,
            32,
            1,
            `rgba(255,255,255,0.3)`,
          );
      }
    N(e, t, n);
  },
  Se = (e, t, n) => {
    he(e, t, n, `#5a3a22`);
    for (let t = 0; t < 5; t++) {
      let r = 28 + t * 42;
      (g(e, r, n * 0.52, 34, 18, `#e8e0d0`),
        g(
          e,
          r + 3,
          n * 0.52,
          28,
          7,
          [`#2a1a10`, `#4a2a10`, `#1a1a0a`, `#5a3a1a`, `#3a2010`][t],
        ),
        g(e, r + 6, n * 0.45, 22, 8, `#ffffff`));
    }
    N(e, t, n);
  },
  Ce = (e, t, n) => {
    he(e, t, n, `#6a4a2a`);
    for (let t = 0; t < 6; t++)
      D(
        e,
        28 + t * 34,
        n * 0.58,
        12,
        [`#f4e8f0`, `#8a4a5a`, `#f0f0e8`, `#6a8a4a`, `#e8a8b8`, `#c89a60`][t],
      );
    g(e, 30, n * 0.2, t - 60, n * 0.26, `#2a1a10`);
    for (let t = 0; t < 4; t++)
      g(e, 40 + t * 44, n * 0.24, 34, n * 0.18, `#a8321a`);
    N(e, t, n);
  },
  we = (e, t, n) => {
    (M(e, t, n, `#d8d0c0`, `#8a7a62`),
      O(e, t * 0.4, t * 0.5, n * 0.8, 0.35),
      g(e, t * 0.26, 16, t * 0.28, n * 0.72, `#5a6a5a`),
      g(e, t * 0.29, 30, t * 0.22, n * 0.6, `#f0ead8`),
      (e.fillStyle = `rgba(40,40,40,0.6)`),
      e.beginPath(),
      e.moveTo(t * 0.3, n * 0.5),
      e.lineTo(t * 0.36, n * 0.3),
      e.lineTo(t * 0.42, n * 0.46),
      e.lineTo(t * 0.47, n * 0.36),
      e.lineTo(t * 0.5, n * 0.55),
      e.closePath(),
      e.fill(),
      g(e, t * 0.66, n * 0.7, t * 0.18, 10, `#3a2a1a`),
      (e.fillStyle = `#a8c8b0`),
      e.beginPath(),
      e.ellipse(t * 0.75, n * 0.58, 20, 30, 0, 0, E),
      e.fill(),
      g(e, t * 0.75 - 6, n * 0.36, 12, 18, `#a8c8b0`),
      N(e, t, n));
  },
  Te = (e, t, n) => {
    (M(e, t, n, `#2a2622`, `#1a1612`), O(e, t / 2, t * 0.8, n * 0.8, 0.4));
    for (let r = 0; r < 3; r++) {
      let i = t * (0.22 + r * 0.28);
      (g(e, i - 22, n * 0.62, 44, n * 0.2, `#d8d0c0`),
        (e.fillStyle = [`#3a2a1e`, `#a8c8b0`, `#c8a878`][r]),
        e.beginPath(),
        r === 1
          ? e.ellipse(i, n * 0.5, 22, 30, 0, 0, E)
          : e.ellipse(i, n * 0.58, 20, 12, 0, 0, Math.PI),
        e.fill());
    }
    N(e, t, n);
  },
  Ee = (e, t, n, r) => {
    (M(e, t, n, `#ecebe6`, `#bdb8ae`),
      O(e, t / 2, t * 0.8, n * 0.8, 0.25),
      g(e, t * 0.2, n * 0.14, t * 0.6, n * 0.48, `#b8902c`),
      u(e, t * 0.24, n * 0.18, t * 0.52, n * 0.4, `#8ab0c8`, `#d8c890`));
    for (let i = 0; i < 8; i++)
      D(
        e,
        t * 0.26 + r.next() * t * 0.48,
        n * 0.4 + r.next() * n * 0.16,
        6,
        [`#4a7a3a`, `#c86a2a`, `#e8d070`][i % 3],
      );
    (g(e, t * 0.48, n * 0.62, 8, n * 0.24, `#5a3a22`), N(e, t, n));
  },
  De = (e, t, n) => {
    M(e, t, n, `#f4f2ea`, `#c8c0b0`);
    for (let r = 0; r < 3; r++) {
      let i = t * (0.2 + r * 0.3);
      (g(e, i - 30, n * 0.6, 60, 26, `#c8a070`),
        D(e, i, n * 0.54, 24, `#a8c87a`));
      for (let t = 0; t < 6; t++)
        g(e, i - 20, n * 0.46 + t * 6, 40, 1, `rgba(240,240,220,0.6)`);
      g(e, i - 1, n * 0.4, 3, 10, `#6a7a3a`);
    }
    for (let r = 0; r < 8; r++)
      D(
        e,
        t * 0.4 + (r % 4) * 9,
        n * 0.2 + Math.floor(r / 4) * 9,
        5,
        `#5a2a6a`,
      );
    N(e, t, n);
  },
  Oe = (e, t, n, r) => {
    M(e, t, n, `#efe8da`, `#b8a888`);
    for (let n = 0; n < 3; n++) {
      g(e, 14, 40 + n * 60, t - 28, 4, `#6a4a2a`);
      for (let i = 18; i < t - 22;) {
        let t = 8 + r.next() * 12;
        (g(
          e,
          i,
          40 + n * 60 - 44,
          t - 1,
          44,
          [`#2a3a6a`, `#8a2a1a`, `#e8dcc0`, `#3a5a3a`, `#c8a050`][
            Math.floor(r.next() * 5)
          ],
        ),
          (i += t));
      }
    }
    N(e, t, n);
  },
  ke = {
    yotsukoshi: {
      key: `brand.yotsukoshi`,
      bg: `#ddd0b4`,
      fg: C,
      serif: !0,
      spacing: 0.35,
    },
    takayamaya: {
      key: `brand.takayamaya`,
      bg: `#cfc4ae`,
      fg: `#00603e`,
      serif: !0,
      spacing: 0.35,
    },
    soredo: {
      key: `nihonbashi.mark.soredo`,
      bg: `#2a1e16`,
      fg: `#f0dcb0`,
      spacing: 0.12,
    },
    soredonb: {
      key: `nihonbashi.mark.soredo-nihonbashi`,
      bg: `#1e1e22`,
      fg: `#e8e4dc`,
      spacing: 0.12,
    },
    ninpen: {
      key: `nihonbashi.mark.ninpen`,
      bg: `#f4ecd8`,
      fg: `#1a1a1a`,
      serif: !0,
      spacing: 0.2,
      band: `#c8101a`,
    },
    moriya: {
      key: `nihonbashi.mark.moriya`,
      bg: `#1a1a1a`,
      fg: `#e8e0c8`,
      serif: !0,
      spacing: 0.25,
    },
    yamanaka: {
      key: `nihonbashi.mark.yamanaka`,
      bg: `#14201a`,
      fg: `#e8d6a0`,
      serif: !0,
      spacing: 0.2,
    },
    kawamotoyama: {
      key: `nihonbashi.mark.kawamotoyama`,
      bg: `#f0e8d4`,
      fg: `#2a5a2a`,
      serif: !0,
      spacing: 0.3,
    },
    koisa: {
      key: `nihonbashi.mark.koisa`,
      bg: `#2a1a10`,
      fg: `#f0e2c0`,
      serif: !0,
      spacing: 0.25,
    },
    otsu: {
      key: `nihonbashi.mark.otsu`,
      bg: `#f6f0e2`,
      fg: `#3a2a1a`,
      serif: !0,
      spacing: 0.25,
    },
    manbikiya: {
      key: `nihonbashi.mark.manbikiya`,
      bg: `#2a3a2a`,
      fg: `#f0e8d0`,
      serif: !0,
      spacing: 0.15,
    },
    eijudo: {
      key: `nihonbashi.mark.eijudo`,
      bg: `#4a1a24`,
      fg: `#f4e6d0`,
      serif: !0,
      spacing: 0.25,
    },
    bank: {
      key: `nihonbashi.mark.bank`,
      bg: `#c4beb0`,
      fg: `#3a3628`,
      serif: !0,
      spacing: 0.4,
    },
    gallery1: {
      key: `nihonbashi.gallery.1`,
      bg: `#1a1a1a`,
      fg: `#e8dcc0`,
      serif: !0,
      spacing: 0.2,
    },
    gallery2: {
      key: `nihonbashi.gallery.2`,
      bg: `#f2efe8`,
      fg: `#2a2a2a`,
      serif: !0,
      spacing: 0.2,
    },
    gallery3: {
      key: `nihonbashi.gallery.3`,
      bg: `#3a2e22`,
      fg: `#e8d8b0`,
      serif: !0,
      spacing: 0.2,
    },
    museum: {
      key: `nihonbashi.mark.museum`,
      bg: `#e8e6e0`,
      fg: `#2a2a2a`,
      spacing: 0.3,
    },
    busterm: {
      key: `nihonbashi.bus.name`,
      bg: `#1a3a6a`,
      fg: `#ffffff`,
      spacing: 0.08,
    },
  },
  Ae = (e) => (t, n, r) => {
    (g(t, 0, 0, n, r, e.bg),
      e.band && g(t, 0, r - 6, n, 6, e.band),
      re(t, l(e.key), n, r, e.fg, { serif: e.serif, spacing: e.spacing }));
  },
  je = {
    yotsukoshi: { key: `brand.yotsukoshi`, bg: C, fg: `#ffffff`, serif: !0 },
    takayamaya: {
      key: `brand.takayamaya`,
      bg: `#00603e`,
      fg: `#ffffff`,
      serif: !0,
    },
    yamanaka: {
      key: `nihonbashi.mark.yamanaka`,
      bg: `#14201a`,
      fg: `#e8d6a0`,
      serif: !0,
    },
    koisa: {
      key: `nihonbashi.mark.koisa`,
      bg: `#f0e2c0`,
      fg: `#2a1a10`,
      serif: !0,
    },
    otsu: {
      key: `nihonbashi.mark.otsu`,
      bg: `#2a1e14`,
      fg: `#f6f0e2`,
      serif: !0,
    },
    eijudo: {
      key: `nihonbashi.mark.eijudo`,
      bg: `#f4e6d0`,
      fg: `#4a1a24`,
      serif: !0,
    },
  },
  Me = (e) => (t, n, r) => {
    (g(t, 0, 0, n, r, e.bg),
      (t.strokeStyle = e.fg),
      (t.lineWidth = 3),
      t.strokeRect(6, 6, n - 12, r - 12),
      S(t, l(e.key), n / 2, 18, r - 18, n * 0.62, e.fg, e.serif ? m() : f()));
  },
  Ne = {
    nori: {
      key: `trade.nori-tea.sign.nori`,
      bg: `#1c2a4a`,
      fg: `#f4efe4`,
      panels: 3,
    },
    katsuo: {
      key: `trade.katsuobushi.sign.katsuobushi`,
      bg: `#5a3418`,
      fg: `#f4efe4`,
      panels: 3,
    },
    hamono: {
      key: `trade.knives.sign.hamono`,
      bg: `#f0ece2`,
      fg: `#1a1a1a`,
      panels: 3,
    },
    washi: {
      key: `nihonbashi.noren.washi`,
      bg: `#e8e0cc`,
      fg: `#3a2a1a`,
      panels: 3,
    },
    tsukudani: {
      key: `nihonbashi.noren.tsukudani`,
      bg: `#20283a`,
      fg: `#f4efe4`,
      panels: 3,
    },
    kashi: {
      key: `trade.wagashi.sign.wagashi`,
      bg: `#4a2050`,
      fg: `#f4efe4`,
      panels: 4,
    },
    soba: {
      key: `trade.soba.sign.kisoba`,
      bg: `#1a1a1a`,
      fg: `#f4efe4`,
      panels: 3,
    },
  },
  Pe = (e) => (t, n, r) => {
    let i = n / e.panels;
    for (let n = 0; n < e.panels; n++) {
      g(t, n * i + 1.5, 0, i - 3, r, e.bg);
      let a = t.createLinearGradient(n * i, 0, (n + 1) * i, 0);
      (a.addColorStop(0, `rgba(0,0,0,0.12)`),
        a.addColorStop(0.5, `rgba(255,255,255,0.06)`),
        a.addColorStop(1, `rgba(0,0,0,0.12)`),
        (t.fillStyle = a),
        t.fillRect(n * i + 1.5, 0, i - 3, r));
    }
    g(t, 0, 0, n, 10, e.bg);
    let a = l(e.key),
      o = [...a];
    o.length === e.panels
      ? o.forEach((n, a) =>
          h(t, n, (a + 0.5) * i, r * 0.5, i * 0.8, r * 0.4, e.fg, m()),
        )
      : h(t, a, n / 2, r * 0.5, n * 0.84, r * 0.36, e.fg, m());
  },
  Fe = (e, t, n) => (r, i, a) => {
    (g(r, 0, 0, i, a, t),
      g(r, 0, 0, i, 8, `#c8a050`),
      S(r, l(e), i / 2, 18, a - 12, i * 0.6, n, m()));
  },
  Ie = (e, t) => (n, r, i) => {
    (g(n, 0, 0, r, i, `#f6f0e2`),
      g(n, 0, 0, r, 14, t),
      g(n, 0, i - 14, r, 14, t),
      S(n, l(e), r / 2, 22, i - 22, r * 0.7, `#1a1a1a`, m()));
  },
  Le = (e, t, n) => {
    (u(e, 0, 0, t, n, `#f6f6f2`, `#e6e6e0`),
      g(e, 0, 0, t, 14, `#1e4f9a`),
      h(
        e,
        l(`nihonbashi.works.title`),
        t / 2,
        7.5,
        t * 0.92,
        11,
        `#ffffff`,
        f(),
        `bold`,
      ),
      u(e, 16, 22, t - 32, n * 0.5, `#9fc8ea`, `#dceaf4`),
      g(e, 16, 22 + n * 0.5, t - 32, n * 0.12, `#5a8aa0`),
      (e.fillStyle = `#d8d2c4`),
      e.fillRect(t * 0.28, 22 + n * 0.38, t * 0.44, n * 0.13),
      (e.fillStyle = `#5a8aa0`));
    for (let r of [t * 0.4, t * 0.6])
      (e.beginPath(),
        e.ellipse(r, 22 + n * 0.51, t * 0.07, n * 0.08, 0, Math.PI, 0),
        e.fill());
    for (let t = 0; t < 6; t++) D(e, 30 + t * 18, 22 + n * 0.42, 9, `#6a9a5a`);
    for (let r = 0; r < 5; r++)
      D(e, t - 30 - r * 18, 22 + n * 0.42, 9, `#6a9a5a`);
    (h(
      e,
      l(`nihonbashi.works.vision`),
      t / 2,
      22 + n * 0.12,
      t * 0.6,
      12,
      `#1e3f6a`,
      m(),
      `bold`,
    ),
      g(e, 0, n - 16, t, 16, `#1e4f9a`),
      h(
        e,
        l(`nihonbashi.works.operator`),
        t / 2,
        n - 8,
        t * 0.9,
        10,
        `#ffffff`,
        f(),
        `bold`,
      ));
    for (let r = 0; r < t; r += 64)
      g(e, r, 14, 1.5, n - 30, `rgba(0,0,0,0.12)`);
  },
  Re = (e, t, n) => {
    (u(e, 0, 0, t, n, `#f4f4f0`, `#e4e4de`),
      g(e, 0, n * 0.7, t, n * 0.08, `#2a8a4a`));
    for (let r = 0; r < t; r += 64) g(e, r, 0, 2, n, `rgba(0,0,0,0.12)`);
    g(e, 0, n - 8, t, 8, `#9a9a94`);
  },
  ze = (e, t, n) => {
    (g(e, 0, 0, t, n, `#ffffff`),
      g(e, 0, 0, t, n * 0.14, `#1e4f9a`),
      h(
        e,
        l(`nihonbashi.works.notice`),
        t / 2,
        n * 0.07,
        t * 0.86,
        n * 0.08,
        `#ffffff`,
        f(),
        `bold`,
      ));
    for (let r = 0; r < 7; r++)
      (g(e, 10, n * 0.22 + r * n * 0.09, t * 0.28, 1.5, `#1a1a1a`),
        g(
          e,
          10 + t * 0.32,
          n * 0.22 + r * n * 0.09 - 5,
          t * 0.56 * (0.5 + ((r * 37) % 10) / 20),
          3,
          `#6a6a6a`,
        ));
    h(
      e,
      l(`nihonbashi.works.hours`),
      t / 2,
      n * 0.88,
      t * 0.86,
      n * 0.06,
      `#c8101a`,
      f(),
      `bold`,
    );
  },
  Be = (e, t, n) => {
    (g(e, 0, 0, t, n, `#ffffff`),
      (e.strokeStyle = `#1a1a1a`),
      (e.lineWidth = 3),
      e.strokeRect(3, 3, t - 6, n - 6),
      h(
        e,
        l(`nihonbashi.site.notice`),
        t / 2,
        n * 0.1,
        t * 0.86,
        n * 0.07,
        `#1a1a1a`,
        f(),
        `bold`,
      ));
    for (let r = 0; r < 9; r++)
      (g(e, 12, n * 0.2 + r * n * 0.075, t * 0.3, 1.5, `#1a1a1a`),
        g(
          e,
          12 + t * 0.34,
          n * 0.2 + r * n * 0.075 - 6,
          t * 0.5 * (0.5 + ((r * 37) % 10) / 20),
          3,
          `#6a6a6a`,
        ));
    e.strokeRect(t * 0.6, n * 0.62, t * 0.3, n * 0.32);
  },
  Ve = (e, t, n) => {
    (g(e, 0, 0, t, n, `#ffffff`),
      g(e, 0, 0, t, n * 0.2, `#f0d000`),
      h(
        e,
        l(`common.safety.koji-chu`),
        t / 2,
        n * 0.1,
        t * 0.8,
        n * 0.13,
        `#1a1a1a`,
        f(),
        `900`,
      ),
      D(e, t * 0.36, n * 0.42, t * 0.08, `#f0d000`),
      g(e, t * 0.4, n * 0.42, t * 0.2, n * 0.12, `#2a5aa8`),
      g(e, t * 0.56, n * 0.5, t * 0.08, n * 0.24, `#2a5aa8`),
      h(
        e,
        l(`common.safety.koji-owabi`),
        t / 2,
        n * 0.86,
        t * 0.92,
        n * 0.08,
        `#1a1a1a`,
        f(),
        `bold`,
      ));
  },
  He = (e) => (t, n, r) => {
    (g(t, 0, 0, n, r, `#1a1410`),
      (t.strokeStyle = `#c8a050`),
      (t.lineWidth = 4),
      t.strokeRect(4, 4, n - 8, r - 8),
      S(t, l(e), n / 2, 10, r - 10, n * 0.6, `#e8c870`, m()));
  },
  Ue = (e, t, n) => {
    (g(e, 0, 0, t, n, `#d0201a`),
      g(e, 0, 0, t, 10, `#ffffff`),
      S(
        e,
        l(`nihonbashi.shrine.nobori`),
        t / 2,
        16,
        n - 10,
        t * 0.6,
        `#ffffff`,
        m(),
      ));
  },
  We = (e, t, n) => {
    (g(e, 0, 0, t, n, `#1a1a1a`),
      ne(e, t / 2, n / 2, t * 0.5, `#fff0c0`, `#d8401a`),
      g(e, 0, 0, t, 8, `#1a1a1a`),
      g(e, 0, n - 8, t, 8, `#1a1a1a`));
  },
  Ge = (e, t, n) => {
    (g(e, 0, 0, t, n, `#1a1a1a`),
      u(e, 2, 8, t - 4, n - 16, `#fffaf0`, `#f2e6cc`));
    for (let r = 14; r < n - 10; r += 7)
      g(e, 2, r, t - 4, 1, `rgba(120,100,70,0.25)`);
    (g(e, 2, n - 22, t - 4, 8, `#c8101a`),
      S(
        e,
        l(`nihonbashi.chochin`),
        t / 2,
        14,
        n - 26,
        t * 0.58,
        `#1a1a1a`,
        m(),
      ));
  },
  Ke = (e) => (t, n, r) => {
    g(t, 0, 0, n, r, `#bdb6a8`);
    for (let e = 0; e < 40; e++)
      g(t, (e * 53) % n, (e * 97) % r, 2, 2, `rgba(60,56,50,0.25)`);
    ((t.strokeStyle = `rgba(70,64,56,0.5)`),
      (t.lineWidth = 3),
      t.strokeRect(8, 8, n - 16, r - 16),
      S(
        t,
        l(e),
        n / 2 + 1.5,
        18,
        r - 16,
        n * 0.56,
        `rgba(255,255,255,0.35)`,
        m(),
      ),
      S(t, l(e), n / 2, 16, r - 18, n * 0.56, `#3e3a32`, m()));
  },
  qe = (e, t, n) => {
    (g(e, 0, 0, t, n, `#f6f4ee`),
      g(e, 0, n - 8, t, 8, `#5a3a24`),
      (e.strokeStyle = `#6a4228`),
      (e.lineWidth = 6),
      e.beginPath(),
      e.arc(36, n * 0.62, 22, Math.PI, 0),
      e.stroke(),
      g(e, 10, n * 0.62, 52, 5, `#6a4228`),
      g(e, 14, n * 0.62 + 9, 44, 3, `#2a6ab0`),
      g(e, 20, n * 0.62 + 15, 32, 3, `#2a6ab0`),
      h(
        e,
        l(`nihonbashi.chikagai`),
        t * 0.6,
        n * 0.36,
        t * 0.66,
        n * 0.34,
        `#3a2a1c`,
        f(),
        `900`,
      ),
      h(
        e,
        l(`nihonbashi.chikagai.en`),
        t * 0.6,
        n * 0.72,
        t * 0.66,
        n * 0.15,
        `#2a5a9a`,
        f(),
        `bold`,
      ),
      (e.fillStyle = `#3a2a1c`));
    for (let r = 0; r < 4; r++)
      e.fillRect(t - 44 + r * 7, n * 0.24 + r * 7, 10, 3);
  },
  Je = (e, t) => (n, r, i) => {
    (g(n, 0, 0, r, i, `#fbfaf6`),
      g(n, 0, 0, r, 6, t),
      h(n, l(e), r / 2, i * 0.14, r * 0.86, i * 0.08, `#1a1a1a`, f(), `bold`));
    for (let e = 0; e < 8; e++)
      g(
        n,
        14,
        i * 0.3 + e * i * 0.075,
        (r - 28) * (0.55 + ((e * 41) % 10) / 22),
        2.5,
        `#4a4a4a`,
      );
    g(n, r * 0.5, i * 0.9, r * 0.38, 2.5, `#4a4a4a`);
  },
  Ye = (e, t, n) => {
    (g(e, 0, 0, t, n, `#fbf8ee`),
      (e.strokeStyle = `#c8101a`),
      (e.lineWidth = 3),
      e.strokeRect(3, 3, t - 6, n - 6),
      h(
        e,
        l(`nihonbashi.bettara.zuke`),
        t / 2,
        n * 0.38,
        t * 0.84,
        n * 0.34,
        `#c8101a`,
        m(),
        `900`,
      ),
      h(
        e,
        l(`nihonbashi.bettara.price`),
        t / 2,
        n * 0.76,
        t * 0.7,
        n * 0.2,
        `#1a1a1a`,
        f(),
        `bold`,
      ));
  },
  Xe = (e, t, n) => {
    let r = t / 8;
    for (let t = 0; t < 8; t++)
      g(e, t * r, 0, r, n, t % 2 ? `#f6f4ee` : `#c8101a`);
    g(e, 0, 0, t, 3, `#1a1a1a`);
  },
  Ze = (e, t, n) => {
    (g(e, 0, 0, t, n, `#4a3a26`),
      (e.strokeStyle = `#c8a050`),
      (e.lineWidth = 3),
      e.strokeRect(5, 5, t - 10, n - 10),
      (e.fillStyle = `#8a6a3a`),
      e.beginPath(),
      e.moveTo(t * 0.22, n * 0.5),
      e.lineTo(t * 0.78, n * 0.5),
      e.lineTo(t * 0.7, n * 0.62),
      e.lineTo(t * 0.3, n * 0.62),
      e.closePath(),
      e.fill());
    for (let r of [0.36, 0.5, 0.64])
      (g(e, t * r - 1, n * 0.2, 2, n * 0.3, `#8a6a3a`),
        g(e, t * r - 8, n * 0.24, 16, n * 0.1, `#a8885a`));
    h(
      e,
      l(`nihonbashi.joosten`),
      t / 2,
      n * 0.8,
      t * 0.84,
      n * 0.13,
      `#e8d6a0`,
      m(),
      `bold`,
    );
  },
  Qe = (e, t, n) => {
    (g(e, 0, 0, t, n, `#1a3a6a`),
      g(e, 0, 0, t, 6, `#f0b818`),
      g(e, 12, n * 0.3, 40, 26, `#ffffff`),
      g(e, 16, n * 0.34, 32, 9, `#1a3a6a`),
      D(e, 22, n * 0.3 + 28, 5, `#ffffff`),
      D(e, 42, n * 0.3 + 28, 5, `#ffffff`),
      h(
        e,
        l(`nihonbashi.bus.name`),
        t * 0.6,
        n * 0.36,
        t * 0.7,
        n * 0.3,
        `#ffffff`,
        f(),
        `bold`,
      ),
      h(
        e,
        l(`nihonbashi.bus.sub`),
        t * 0.6,
        n * 0.72,
        t * 0.7,
        n * 0.18,
        `#f0d890`,
        f(),
        `bold`,
      ));
  },
  $e = (e) => (t, n, r) => {
    (g(t, 0, 0, n, r, `#6e6a62`),
      (t.strokeStyle = `rgba(30,28,24,0.5)`),
      (t.lineWidth = 2),
      t.strokeRect(6, 6, n - 12, r - 12),
      S(t, l(e), n / 2, 14, r - 14, n * 0.5, `#e8e2d2`, m()));
  },
  et = [
    [`white`, `#f4f4f0`],
    [`black`, `#141414`],
    [`gold`, `#c8a050`],
    [`bronze`, `#6a5434`],
    [`steel`, `#8a9096`],
    [`vermilion`, `#d23a1e`],
    [`wood`, `#6a4428`],
    [`granite`, `#8a857c`],
    [`cream`, `#efe6d2`],
    [`red`, `#c8101a`],
    [`green`, `#2a5a3a`],
    [`navy`, `#1a2440`],
    [`warm`, `#ffe8b0`],
    [`glass`, `#3a4a52`],
    [`stone`, `#ece4d4`],
    [`stonedark`, `#b8ae98`],
    [`copper`, `#6a8a74`],
    [`indigo`, `#1c2a4a`],
    [`orange`, `#f08a1a`],
    [`blue`, `#1e4f9a`],
    [`leaf`, `#4a7040`],
    [`leafdark`, `#2e4a2a`],
    [`yellow`, `#f0c818`],
    [`verdigris`, `#52705f`],
  ],
  tt = (e, t, n) => {
    let r = t / et.length;
    et.forEach(([, t], i) => g(e, i * r, 0, r, n, t));
  },
  nt = {
    mitsu: ie,
    honkan: oe,
    taka: se,
    finglass: ue,
    louvre: de,
    stonegrid: fe,
    sheet: pe,
    darkstone: me,
  },
  rt = { mitsu: ae, taka: ce },
  it = {
    kimono: ge,
    autumn: _e,
    nori: ve,
    knives: ye,
    katsuo: be,
    washi: xe,
    tsukudani: Se,
    scroll: we,
    celadon: Te,
    painting: Ee,
    fruit: De,
    wagashi: Ce,
    books: Oe,
  },
  at = [
    ...Object.keys(nt).flatMap((e) =>
      [0, 1].map((t) => ({
        id: `skin.${e}.${t}`,
        w: 168,
        h: 168,
        dw: 256,
        paint: nt[e],
      })),
    ),
    ...Object.keys(rt).map((e) => ({
      id: `skin.${e}.arch`,
      w: 168,
      h: 168,
      dw: 256,
      paint: rt[e],
    })),
    { id: `skin.taka.first`, w: 168, h: 168, dw: 256, paint: le },
    ...Object.keys(it).map((e) => ({
      id: `vit.${e}`,
      w: 168,
      h: 168,
      dw: 256,
      paint: it[e],
    })),
    ...Object.entries(ke).map(([e, t]) => ({
      id: `mark.${e}`,
      w: 328,
      h: 62,
      paint: Ae(t),
    })),
    ...Object.entries(je).map(([e, t]) => ({
      id: `vmark.${e}`,
      w: 72,
      h: 288,
      paint: Me(t),
    })),
    ...Object.entries(Ne).map(([e, t]) => ({
      id: `noren.${e}`,
      w: 160,
      h: 72,
      paint: Pe(t),
    })),
    {
      id: `flag.yotsukoshi`,
      w: 48,
      h: 176,
      paint: Fe(`brand.yotsukoshi`, C, `#ffffff`),
    },
    {
      id: `flag.takayamaya`,
      w: 48,
      h: 176,
      paint: Fe(`brand.takayamaya`, `#00603e`, `#ffffff`),
    },
    {
      id: `tare.kyoto`,
      w: 64,
      h: 384,
      paint: Ie(`nihonbashi.ad.kyoto`, `#6a2a7a`),
    },
    {
      id: `tare.kyushu`,
      w: 64,
      h: 384,
      paint: Ie(`nihonbashi.ad.kyushu`, `#00603e`),
    },
    { id: `hoarding.c1`, w: 384, h: 128, paint: Le },
    { id: `hoarding`, w: 256, h: 96, paint: Re },
    { id: `koji`, w: 128, h: 176, paint: ze },
    { id: `kenchiku`, w: 128, h: 176, paint: Be },
    { id: `owabi`, w: 96, h: 176, paint: Ve },
    {
      id: `gaku.fukutoku`,
      w: 64,
      h: 160,
      paint: He(`nihonbashi.shrine.fukutoku`),
    },
    { id: `gaku.ebisu`, w: 64, h: 160, paint: He(`nihonbashi.shrine.ebisu`) },
    { id: `nobori`, w: 48, h: 224, paint: Ue },
    { id: `lantern`, w: 48, h: 64, paint: We },
    { id: `chochin`, w: 56, h: 112, paint: Ge },
    {
      id: `pillar.kanji`,
      w: 64,
      h: 192,
      paint: Ke(`nihonbashi.kyobashi.kanji`),
    },
    { id: `pillar.kana`, w: 64, h: 192, paint: Ke(`nihonbashi.kyobashi.kana`) },
    {
      id: `monument.kabuki`,
      w: 64,
      h: 224,
      paint: $e(`nihonbashi.kyobashi.kabuki`),
    },
    {
      id: `monument.daikon`,
      w: 64,
      h: 224,
      paint: $e(`nihonbashi.kyobashi.daikon`),
    },
    { id: `chikagai`, w: 256, h: 72, paint: qe },
    {
      id: `notice.kyugyo`,
      w: 128,
      h: 176,
      paint: Je(`nihonbashi.notice.kyugyo`, `#6a1a24`),
    },
    {
      id: `notice.opening`,
      w: 128,
      h: 176,
      paint: Je(`nihonbashi.notice.opening`, `#1a1a1a`),
    },
    {
      id: `tare.closing`,
      w: 64,
      h: 384,
      paint: Ie(`nihonbashi.ad.closing`, `#1e1e22`),
    },
    { id: `bettara`, w: 96, h: 64, paint: Ye },
    { id: `kohaku`, w: 128, h: 32, paint: Xe },
    { id: `joosten`, w: 128, h: 96, paint: Ze },
    { id: `busterm`, w: 320, h: 80, paint: Qe },
    { id: `swatches`, w: 768, h: 16, paint: tt },
  ],
  ot = 4,
  st = (() => {
    let e = new Map(),
      t = [...at].sort((e, t) => t.h - e.h || t.w - e.w),
      n = 0,
      r = 0,
      i = 0,
      a = [];
    for (let o of t) {
      let t = o.w + 8,
        s = o.h + 8,
        c = a.find((e) => e.w >= t && i - e.used >= s);
      if (c) {
        (e.set(o.id, [c.x + ot, r + c.used + ot, o.w, o.h]), (c.used += s));
        continue;
      }
      (n + t > 2048 && ((n = 0), (r += i), (i = 0), (a.length = 0)),
        (i ||= s),
        e.set(o.id, [n + ot, r + ot, o.w, o.h]),
        a.push({ x: n, w: t, used: s }),
        (n += t));
    }
    if (r + i > te)
      throw Error(`[nihonbashi] atlas overflow: ${r + i} > ${te}`);
    return e;
  })(),
  ct =
    Math.ceil(
      Math.max(...[...st.values()].map(([, e, , t]) => e + t + ot)) / 64,
    ) * 64;
