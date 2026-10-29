// tokyo/assets/region-tokyo-d-hongo-D07gR5X4 04 — setmaterial
// Lines 1246-1516 of readable/tokyo/assets/region-tokyo-d-hongo-D07gR5X4.pretty.js (statement-aligned).
function ce() {
  let e = C;
  return [
    {
      name: `ichiyo-court`,
      x: (e.courtX0 + e.courtX1) / 2,
      z: (e.courtZ0 + e.courtZ1) / 2,
      range: 160,
      request(e) {
        e.need(`hongo:court`, 128, 128, K);
      },
      write(t, r) {
        let i = r.uv(`hongo:court`);
        (t.setMaterial(0.9, 0, 0, 0), s(t, 16777215));
        let a = oe + n.GROUND;
        return (
          b(t, e.alleyX0, -998.6, e.alleyX1, e.courtZ0, a, i),
          b(t, e.courtX0, e.courtZ0, w.x0 - 0.1, e.courtZ1, a, i),
          b(t, w.x0 - 0.1, w.z1 + 0.1, e.courtX1, e.courtZ1, a, i),
          []
        );
      },
    },
    {
      name: `iseya-kura`,
      x: (w.x0 + w.x1) / 2,
      z: (w.z0 + w.z1) / 2,
      range: 260,
      request(e) {
        (e.need(`hongo:namako`, 128, 64, se),
          e.need(`hongo:kura-kawara`, 128, 64, o(`#3a3c3e`)));
      },
      write(e, t) {
        let i = t.white(),
          o = 6.4,
          { x0: c, x1: l, z0: u, z1: d } = w;
        (e.setMaterial(0.9, 0, 0, 0),
          s(e, 15921386),
          r(
            e,
            (c + l) / 2,
            (u + d) / 2,
            0,
            o,
            (l - c) / 2,
            (d - u) / 2,
            0,
            1,
            i,
          ),
          e.setMaterial(0.7, 0, 0, 0),
          s(e, 16777215));
        let f = t.uv(`hongo:namako`);
        return (
          a(e, c - n.PANEL, u, c - n.PANEL, d, 0, 1.4, f),
          a(e, c, d + n.PANEL, l, d + n.PANEL, 0, 1.4, f),
          s(e, 2762790),
          a(e, c - 0.06, d - 3.6, c - 0.06, d - 1.6, 0, 2.4, i),
          s(e, 14737112),
          a(e, c - 0.12, d - 3.4, c - 0.12, d - 1.8, 0.1, 2.2, i),
          s(e, 2762790),
          a(e, c + 2.4, d + 0.05, c + 3.4, d + 0.05, 4.3, 5.1, i),
          e.setMaterial(0.7, 0, 0, 0),
          s(e, 16777215),
          y(e, c, u, l, d, o, 1.8, `x`, t.uv(`hongo:kura-kawara`), !1, 0.45, i),
          s(e, 2762790),
          r(
            e,
            (c + l) / 2,
            (u + d) / 2,
            8.15,
            8.45,
            (l - c) / 2 + 0.45,
            0.16,
            0,
            1,
            i,
          ),
          [
            {
              cx: (c + l) / 2,
              cz: (u + d) / 2,
              hx: (l - c) / 2,
              hz: (d - u) / 2,
              h: 8.200000000000001,
            },
          ]
        );
      },
    },
    {
      name: `inari`,
      x: (T.x0 + T.x1) / 2,
      z: (T.z0 + T.z1) / 2,
      range: 160,
      request(e) {
        (e.need(
          `hongo:inari-nobori`,
          48,
          192,
          ee(`hongo.kiku.inari-nobori`, `#c81818`, `#ffffff`),
        ),
          e.need(
            `chochin:hongo.kiku.inari-chochin`,
            64,
            96,
            d(`hongo.kiku.inari-chochin`, `#f0e6d0`),
          ));
      },
      write(e, t, n) {
        let o = t.white(),
          { x0: c, x1: l, z0: u, z1: d } = T,
          f = (c + l) / 2,
          p = [];
        (e.setMaterial(0.9, 0, 0, 0),
          s(e, 10131600),
          r(e, f, u + 0.55, 0, 0.55, 0.75, 0.5, 0, 1, o),
          s(e, 6965802),
          r(e, f, u + 0.55, 0.55, 1.25, 0.38, 0.32, 0, 1, o),
          s(e, 15261896),
          a(e, f - 0.22, u + 0.88, f + 0.22, u + 0.88, 0.7, 1.12, o),
          e.setMaterial(0.7, 0, 0, 0),
          s(e, 4869198),
          y(
            e,
            f - 0.4,
            u + 0.2,
            f + 0.4,
            u + 0.9,
            1.25,
            0.32,
            `z`,
            o,
            !1,
            0.12,
          ));
        let m = d - 0.25;
        (e.setMaterial(0.6, 0, 0, 0), s(e, 13119518));
        for (let t of [-0.55, 0.55])
          r(e, f + t, m, 0, 1.75, 0.06, 0.06, 0, 1, o);
        (r(e, f, m, 1.5, 1.6, 0.62, 0.05, 0, 1, o),
          s(e, 1710618),
          r(e, f, m, 1.75, 1.86, 0.78, 0.08, 0, 1, o),
          p.push(
            { cx: f - 0.55, cz: m, hx: 0.06, hz: 0.06, h: 1.75 },
            { cx: f + 0.55, cz: m, hx: 0.06, hz: 0.06, h: 1.75 },
          ),
          e.setMaterial(0.85, 0, 0, 0),
          s(e, 16777215));
        let h = t.uv(`hongo:inari-nobori`);
        for (let t of [c + 0.15, l - 0.55])
          (s(e, 15263976),
            r(e, t, u + 1.15, 0, 2.3, 0.015, 0.015, 0, 1, o),
            s(e, 16777215),
            a(e, t + 0.02, u + 1.15, t + 0.4, u + 1.15, 0.6, 2.2, h),
            a(e, t + 0.4, u + 1.13, t + 0.02, u + 1.13, 0.6, 2.2, {
              u0: h.u1,
              v0: h.v0,
              u1: h.u0,
              v1: h.v1,
            }));
        return (
          n > 0 &&
            (e.setMaterial(0.6, 0, 0.4, 3),
            s(e, 16777215),
            i(
              e,
              f,
              m,
              1.05,
              1.45,
              0.14,
              t.uv(`chochin:hongo.kiku.inari-chochin`),
            )),
          p.push({ cx: f, cz: u + 0.55, hx: 0.75, hz: 0.5, h: 1.3 }),
          p
        );
      },
    },
  ];
}
var le = {
    nobori: {
      kosho: [`hongo.books.kaitori`, `#2a1a0e`, `#f0dca8`],
      teishoku: [`hongo.food.teishoku`, `#ffffff`, `#1a3a6a`],
      curry: [`hongo.food.curry`, `#ffd400`, `#c01818`],
      ramen: [`hongo.food.noren-ramen`, `#c01818`, `#ffffff`],
      copy: [`hongo.copy.sotsuron`, `#1a6ac0`, `#ffffff`],
      soba: [`hongo.kiku.teuchi`, `#1a2a5a`, `#ffffff`],
      taiyaki: [`hongo.nezu.taiyaki-word`, `#1a2a5a`, `#ffffff`],
    },
    aboard: {
      teishoku: [
        [`hongo.food.higawari`, `hongo.food.oomori`, `hongo.food.teishoku`],
        !0,
      ],
      copy: [
        [`hongo.copy.price`, `hongo.copy.sotsuron`, `hongo.copy.poster`],
        !1,
      ],
      runar: [
        [`hongo.food.runar`, `hongo.food.runar-menu`, `hongo.food.since`],
        !0,
      ],
      fruit: [
        [`hongo.food.parfait`, `hongo.food.melon`, `hongo.food.parlour`],
        !1,
      ],
      ramen: [
        [`hongo.food.iccho`, `hongo.food.ramen-menu`, `hongo.food.oomori`],
        !0,
      ],
      books: [
        [
          `hongo.books.kinitsu`,
          `hongo.books.kinitsu-100`,
          `hongo.books.kaitori`,
        ],
        !1,
      ],
      kokoro: [
        [`hongo.food.kokoro`, `hongo.food.morning`, `hongo.food.blend`],
        !0,
      ],
      soba: [[`hongo.kiku.soba`, `hongo.kiku.teuchi`], !1],
      taiyaki: [[`hongo.nezu.taiyaki`, `hongo.nezu.taiyaki-price`], !1],
      senbei: [[`hongo.nezu.senbei`, `hongo.nezu.senbei-menu`], !1],
    },
    stand: {
      izakaya: { main: `hongo.food.izakaya`, bg: `#ffffff`, fg: `#c01818` },
      yakitori: { main: `hongo.nezu.yakitori`, bg: `#c01818`, fg: `#ffffff` },
      hanten: { main: `hongo.food.hanten`, bg: `#c01818`, fg: `#ffe14a` },
    },
    plate: {
      kikuzaka: [
        `hongo.kiku.name`,
        `#1e4a9a`,
        `#ffffff`,
        `hongo.street.bunkyo`,
      ],
    },
    explain: {
      kaneyasu: [
        `hongo.kane.board-title`,
        [
          `hongo.kane.board-1`,
          `hongo.kane.board-2`,
          `hongo.kane.board-3`,
          `hongo.kane.board-4`,
        ],
        `hongo.street.bunkyo-kyoiku`,
      ],
      ichiyo: [
        `hongo.ichiyo.board-title`,
        [
          `hongo.ichiyo.board-1`,
          `hongo.ichiyo.board-2`,
          `hongo.ichiyo.board-3`,
          `hongo.ichiyo.board-4`,
        ],
        `hongo.street.bunkyo-kyoiku`,
      ],
    },
    wagons: !0,
    shelf: !0,
    pump: !0,
    price: [`hongo.books.kinitsu`, `hongo.books.kinitsu-100`],
  },
  q = { fx: 0, fz: -1 },
  J = { fx: 0, fz: 1 },
  Y = { fx: 1, fz: 0 };
