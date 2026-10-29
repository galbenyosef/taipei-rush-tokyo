// tokyo/assets/region-tokyo-d-suidobashi-CZ63KPtp 14 — setmaterial
// Lines 4634-4974 of readable/tokyo/assets/region-tokyo-d-suidobashi-CZ63KPtp.pretty.js (statement-aligned).
function Wt() {
  return Tt(
    [
      ...Nt,
      ...Pt,
      ...Ft,
      ...It,
      ...Lt,
      ...Rt,
      ...zt,
      ...Bt,
      ...Vt,
      ...Ht,
      ...Ut,
    ].map((e) => ({ ...e })),
    Ie,
  );
}
[...Ht, ...Ut];
var Gt = 0.15,
  Kt = 3;
function qt(e, t, n, r, i) {
  z(e, t, n, r, i, `#8e8a84`);
  let a = 11,
    o = () => (a = (a * 16807) % 2147483647) / 2147483647,
    s = r / 8,
    c = i / 8;
  for (let r = 0; r < 8; r++)
    for (let i = 0; i < 8; i++) {
      let a = 0.85 + o() * 0.25;
      ((e.fillStyle = `rgb(${Math.round(150 * a)},${Math.round(144 * a)},${Math.round(136 * a)})`),
        e.fillRect(
          t + i * s + ((r % 2) * s) / 2 + 1,
          n + r * c + 1,
          s - 2,
          c - 2,
        ));
    }
}
var Jt = {
  main: `suido.suzu.gate`,
  bg: `#1a3a2a`,
  fg: `#ffffff`,
  acc: `#e8d070`,
};
function Yt() {
  let e = Dt;
  return [
    {
      name: `suzuran-lane`,
      x: (e.x0 + e.x1) / 2,
      z: (e.z0 + e.z1) / 2,
      range: 240,
      request(e) {
        e.need(`suido:setts`, 128, 128, qt);
      },
      write(t, n) {
        let r = n.uv(`suido:setts`);
        (t.setMaterial(0.85, 0, 0, 0), E(t, 16777215));
        let i = Gt + l.GROUND,
          a = Math.round((e.x1 - e.x0 - 0.5) / 3),
          o = e.x0 + 0.25,
          s = e.x1 - 0.25,
          c = e.z0 + 0.1,
          u = e.z1 - 0.1;
        for (let e = 0; e < a; e++)
          for (let n = 0; n < 2; n++)
            O(
              t,
              o + ((s - o) * e) / a,
              c + ((u - c) * n) / 2,
              o + ((s - o) * (e + 1)) / a,
              c + ((u - c) * (n + 1)) / 2,
              i,
              r,
            );
        E(t, 5921366);
        let d = n.white(),
          f = (e.z0 + e.z1) / 2;
        return (O(t, o, f - 0.11, s, f + 0.11, i + l.PAINT, d), []);
      },
    },
    {
      name: `suzuran-lamps`,
      x: (e.x0 + e.x1) / 2,
      z: (e.z0 + e.z1) / 2,
      range: 300,
      request(e) {
        e.need(U(Jt), 384, 48, de(Jt));
      },
      write(t, n, r) {
        let i = n.white(),
          a = [];
        [-575, -565, -555, -545, -535, -525, -515, -508].forEach((n, o) => {
          let s = o % 2 ? e.z1 - 0.55 : e.z0 + 0.55,
            c = o % 2 ? -1 : 1;
          (t.setMaterial(0.45, 0.6, 0, 0),
            E(t, 1976868),
            M(t, n, Gt, s, n, 4.05, s, 0.055, i),
            k(t, n, s, Gt, 0.5, 0.12, 0.12, 0, 1, i),
            M(t, n, 4.05, s, n, 4.300000000000001, s + c * 0.35, 0.03, i),
            M(
              t,
              n - 0.45,
              4.1000000000000005,
              s + c * 0.35,
              n + 0.45,
              4.1000000000000005,
              s + c * 0.35,
              0.025,
              i,
            ),
            t.setMaterial(0.25, 0, 0.75, Kt),
            E(t, 16774880));
          for (let e of [-0.4, 0, 0.4]) {
            let a = Gt + (e === 0 ? 3.55 : 3.62);
            j(
              t,
              n + e,
              s + c * 0.35,
              [
                0.17,
                a,
                0.16,
                a + 0.06,
                0.11,
                a + 0.2,
                0.06,
                a + 0.29,
                0.012,
                a + 0.33,
              ],
              r > 0 ? 8 : 6,
              i,
            );
          }
          a.push({ cx: n, cz: s, hx: 0.12, hz: 0.12, h: 3.9 });
        });
        let o = n.uv(U(Jt));
        for (let n of [e.x0 + 0.55, e.x1 - 0.55]) {
          (t.setMaterial(0.45, 0.6, 0, 0), E(t, 1976868));
          for (let r of [e.z0 + 0.25, e.z1 - 0.25])
            (k(t, n, r, Gt, 5.45, 0.1, 0.1, 0, 1, i),
              a.push({ cx: n, cz: r, hx: 0.1, hz: 0.1, h: 5.3 }));
          (k(
            t,
            n,
            (e.z0 + e.z1) / 2,
            4.5,
            4.6000000000000005,
            0.08,
            (e.z1 - e.z0) / 2,
            1,
            0,
            i,
          ),
            t.setMaterial(0.5, 0, 0.35, Kt),
            E(t, 16777215));
          let r = e.z0 + 0.45,
            s = e.z1 - 0.45;
          (D(
            t,
            n - 0.07,
            s,
            n - 0.07,
            r,
            4.6000000000000005,
            5.300000000000001,
            o,
          ),
            D(
              t,
              n + 0.07,
              r,
              n + 0.07,
              s,
              4.6000000000000005,
              5.300000000000001,
              o,
            ),
            t.setMaterial(0.25, 0, 0.75, Kt),
            E(t, 16774880));
          for (let e = 0; e < 4; e++)
            j(
              t,
              n,
              r + ((s - r) * (e + 0.5)) / 4,
              [
                0.1, 4.2700000000000005, 0.09, 4.3100000000000005, 0.05,
                4.430000000000001, 0.01, 4.48,
              ],
              6,
              i,
            );
        }
        return a;
      },
    },
    {
      name: `ekimae-canopy`,
      x: -756,
      z: -622,
      range: 260,
      request() {},
      write(e, t) {
        let n = t.white(),
          r = 3.65;
        (e.setMaterial(0.5, 0.6, 0, 0),
          E(e, 12106944),
          k(
            e,
            -1512.5 / 2,
            -1245.8 / 2,
            r,
            3.87,
            8.099999999999909 / 2,
            3 / 2,
            0,
            1,
            n,
          ),
          E(e, 6975090));
        for (let t of [-760, -752.5])
          k(e, t, -621.65, Gt, r, 0.08, 0.08, 0, 1, n);
        return (
          e.setMaterial(0.5, 0, 0.3, Kt),
          E(e, 16765952),
          D(e, -760.3, -621.39, -752.2, -621.39, 3.67, 3.85, n),
          e.setMaterial(0.5, 0, 0.6, Kt),
          E(e, 16053488),
          O(e, -759.9, -624, -752.6, -621.8, 3.64, n, !0),
          [
            { cx: -760, cz: -621.65, hx: 0.08, hz: 0.08, h: r },
            { cx: -752.5, cz: -621.65, hx: 0.08, hz: 0.08, h: r },
          ]
        );
      },
    },
  ];
}
var Xt = {
    nobori: {
      kosho: [`suido.books.kaitori`, `#2a1a0e`, `#f0dca8`],
      festival: [`suido.books.festival`, `#c01818`, `#ffffff`],
      curry: [`suido.curry.word`, `#ffd400`, `#c01818`],
      capital: [`suido.curry.capital`, `#c01818`, `#ffe14a`],
      ski: [`suido.sports.ski`, `#0a3a8a`, `#ffffff`],
      board: [`suido.sports.board`, `#e60012`, `#ffffff`],
      new: [`suido.sports.new`, `#ffffff`, `#0a3a8a`],
      kinken: [`suido.ticket.kaitori`, `#1a3a9a`, `#ffd400`],
      ramen: [`suido.food.iekei`, `#1a1a1a`, `#ffd400`],
      rice: [`suido.food.rice`, `#ffd400`, `#c01818`],
      yakyu: [`suido.goods.yakyu`, `#1a2a6a`, `#ffffff`],
      soba: [`suido.food.tachigui`, `#1a2a5a`, `#ffffff`],
    },
    aboard: {
      books: [
        [
          `suido.books.kinitsu`,
          `suido.books.kinitsu-100`,
          `suido.books.kaitori`,
        ],
        !1,
      ],
      garage: [
        [
          `suido.books.garage`,
          `suido.books.shashin`,
          `suido.books.kinitsu-100`,
        ],
        !1,
      ],
      sanseido: [[`suido.books.shinkan`, `suido.books.best`], !1],
      mangetsu: [
        [
          `suido.curry.mangetsu`,
          `suido.curry.mangetsu-menu`,
          `suido.food.oomori`,
        ],
        !0,
      ],
      abyssinia: [
        [`suido.curry.abyssinia-2f`, `suido.curry.abyssinia-menu`],
        !0,
      ],
      kinken: [
        [`suido.ticket.shinkansen`, `suido.ticket.kitte`, `suido.ticket.yakyu`],
        !1,
      ],
      tsuta: [
        [
          `suido.suzu.tsutakazura`,
          `suido.suzu.naporitan`,
          `suido.suzu.creamsoda`,
        ],
        !0,
      ],
      lunch: [
        [`suido.food.lunch`, `suido.food.oomori`, `suido.food.yoshoku`],
        !0,
      ],
      hanchan: [[`suido.food.saburoku`, `suido.food.hanchan`], !0],
      iekei: [
        [`suido.food.misakiya`, `suido.food.kosa`, `suido.food.rice`],
        !0,
      ],
      tonight: [[`suido.bar.tonight`, `suido.bar.beer`, `suido.bar.happy`], !0],
      today: [
        [`suido.ticket.today`, `suido.ticket.yakyu`, `suido.ticket.kaitori`],
        !1,
      ],
      megaphone: [[`suido.goods.megaphone`, `suido.goods.baseball`], !1],
      izakaya: [
        [`suido.food.hoplee`, `suido.food.sour`, `suido.bar.tonight`],
        !0,
      ],
      soba: [[`suido.food.ekisoba`, `suido.food.tachigui`], !1],
    },
    stand: {
      choko: { main: `suido.suzu.choko`, bg: `#c01818`, fg: `#ffe14a` },
      grill: { main: `suido.suzu.grill`, bg: `#f4ecd8`, fg: `#3a2414` },
      sakaba: { main: `suido.food.sakaba`, bg: `#ffffff`, fg: `#c01818` },
      yakiton: { main: `suido.food.yakiton`, bg: `#ffffff`, fg: `#c01818` },
      kyukaiura: { main: `suido.food.kyukaiura`, bg: `#c01818`, fg: `#ffffff` },
      sonata: { main: `suido.kissa.sonata`, bg: `#2a1a0e`, fg: `#f0dca8` },
    },
    plate: {
      suzuran: [
        `suido.suzu.name`,
        `#1a3a2a`,
        `#ffffff`,
        `suido.street.chiyoda`,
      ],
    },
    wagons: !0,
    shelf: !0,
    price: [`suido.books.kinitsu`, `suido.books.kinitsu-100`],
  },
  Z = { fx: 0, fz: -1 },
  Q = { fx: 0, fz: 1 },
  Zt = { fx: -1, fz: 0 };
