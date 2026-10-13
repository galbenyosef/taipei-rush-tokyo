// tokyo__assets__region-tokyo-BcM3fReU 80 — add
// Lines 40006-40342 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function kb(e, t) {
  let n = Ob(e, t),
    r = {
      door: [n.dx, 0.9, 0, Math.PI],
      greet: [n.lectern.x, n.lectern.z + 0.45, 0, 0],
      counter: [1.8, n.counter.z0 - 0.75, 0, Math.PI],
      hatch: [(n.hatch.x0 + n.hatch.x1) / 2, t - 0.75, 0, Math.PI],
      stage: [(n.stage.x0 + n.stage.x1) / 2, n.stage.z0 + 1, n.stage.h, 0],
      cheki: [-e / 2 + 1, n.stage.z0 - 0.9, 0, -Math.PI / 2],
    };
  for (let e = 0; e < 4; e++) {
    let t = n.tables[e];
    ((r[`table-${e + 1}`] = [
      t.side * n.chairX,
      t.z,
      0,
      t.side > 0 ? Math.PI / 2 : -Math.PI / 2,
    ]),
      (r[`table-${e + 1}-serve`] = [
        t.side * (n.chairX - 0.6),
        t.z + 0.45,
        0,
        t.side > 0 ? Math.PI / 2 : -Math.PI / 2,
      ]));
  }
  return r;
}
var Ab = [
    [`walkin.kissa.item.blend`, 600, 25, `咖`],
    [`walkin.kissa.item.napolitan`, 1e3, 70, `麵`],
    [`walkin.kissa.item.mixsand`, 900, 55, `三`],
    [`walkin.kissa.item.creamsoda`, 750, 20, `汽`],
    [`walkin.kissa.item.purin`, 550, 20, `布`],
  ],
  jb = [`walkin.kissa.item.morning`, 700, 45, `早`];
function qee(e) {
  (e.add(`k-carpet`, 128, 128, (e, t, n, r) => {
    (J(e, 0, 0, t, n, `#5a1a1c`),
      (e.strokeStyle = `rgba(200,150,80,0.22)`),
      (e.lineWidth = 2));
    for (let r = 0; r < 2; r++)
      for (let i = 0; i < 2; i++) {
        let a = (r + 0.5) * (t / 2),
          o = (i + 0.5) * (n / 2);
        (e.beginPath(),
          e.moveTo(a, o - 20),
          e.lineTo(a + 20, o),
          e.lineTo(a, o + 20),
          e.lineTo(a - 20, o),
          e.closePath(),
          e.stroke());
      }
    xy(e, t, n, r, 260, 0.12, 0.04, 2);
  }),
    e.add(`k-plaster`, 128, 128, (e, t, n, r) => {
      (by(e, 0, 0, t, n, `#b89a62`, `#d6c08c`),
        xy(e, t, n, r, 220, 0.08, 0.04, 4));
      for (let i = 0; i < 6; i++) {
        let i = e.createRadialGradient(
          r() * t,
          r() * n * 0.5,
          2,
          r() * t,
          r() * n * 0.5,
          30,
        );
        (i.addColorStop(0, `rgba(110,80,30,0.18)`),
          i.addColorStop(1, `rgba(110,80,30,0)`),
          (e.fillStyle = i),
          e.fillRect(0, 0, t, n));
      }
    }),
    e.add(`k-panel`, 128, 64, (e, t, n, r) => {
      (Cy(e, t, n, r, [70, 40, 24], 1),
        (e.strokeStyle = `rgba(0,0,0,0.45)`),
        (e.lineWidth = 3),
        e.strokeRect(6, 6, t / 2 - 10, n - 12),
        e.strokeRect(t / 2 + 4, 6, t / 2 - 10, n - 12),
        J(e, 0, 0, t, 3, `#2a160c`));
    }),
    e.add(`k-ceil`, 64, 64, (e, t, n, r) => {
      (J(e, 0, 0, t, n, `#a88a5a`), xy(e, t, n, r, 60, 0.1, 0.03, 3));
    }),
    e.add(`k-wood`, 128, 64, (e, t, n, r) => Cy(e, t, n, r, [92, 52, 30], 3)),
    e.add(`k-velvet`, 128, 64, (e, t, n, r) => {
      (by(e, 0, 0, t, n, `#a8121c`, `#7a0a12`),
        xy(e, t, n, r, 200, 0.12, 0.05, 2));
      for (let t = 0; t < 6; t++)
        for (let n = 0; n < 2; n++)
          J(e, 10 + t * 20, 18 + n * 26, 2, 2, `rgba(255,220,180,0.35)`);
    }),
    e.add(`k-tabletop`, 64, 64, (e, t, n, r) => {
      (Cy(e, t, n, r, [60, 34, 20], 2),
        J(e, 0, 0, t, n, `rgba(255,255,255,0.05)`));
    }),
    e.add(`k-menu`, 48, 192, (e, t, n, r) => {
      (Cy(e, t, n, r, [214, 186, 140], 1),
        (e.strokeStyle = `rgba(60,40,20,0.6)`),
        (e.lineWidth = 2),
        e.strokeRect(2, 2, t - 4, n - 4));
    }));
  for (let t = 0; t < 6; t++) {
    let [n, r] = t < 5 ? Ab[t] : jb;
    e.add(`k-fuda-${t}`, 48, 192, (e, t, i, a) => {
      (Cy(e, t, i, a, [222, 196, 150], 1),
        (e.strokeStyle = `rgba(60,40,20,0.6)`),
        (e.lineWidth = 2),
        e.strokeRect(2, 2, t - 4, i - 4),
        yy(e, B(n), t / 2, 10, i * 0.72, 26, `#141210`),
        yy(
          e,
          ea(r).replace(`¥`, ``),
          t / 2,
          i * 0.74,
          i - 8,
          16,
          `#8a1010`,
          !1,
        ));
    });
  }
  (e.add(`k-name`, 256, 64, (e, t, n) => {
    (J(e, 0, 0, t, n, `#2a160c`),
      (e.strokeStyle = `#c8a050`),
      (e.lineWidth = 3),
      e.strokeRect(4, 4, t - 8, n - 8),
      q(e, B(`walkin.kissa.name`), t / 2, n * 0.46, t - 30, 30, `#e8c878`, {
        serif: !0,
      }),
      q(e, B(`walkin.kissa.coffee`), t / 2, n * 0.82, t - 60, 10, `#c8a050`, {
        weight: `500`,
      }));
  }),
    e.add(`k-sample`, 256, 96, (e, t, n) => {
      J(e, 0, 0, t, n, `#f4ece0`);
      let r = (t, r, i) => {
        ((e.fillStyle = `#ffffff`),
          e.beginPath(),
          e.ellipse(t, n * 0.55, 26, 10, 0, 0, Math.PI * 2),
          e.fill(),
          (e.fillStyle = r),
          e.beginPath(),
          e.ellipse(t, n * 0.48, 18, 9, 0, 0, Math.PI * 2),
          e.fill(),
          (e.fillStyle = i),
          e.fillRect(t - 6, n * 0.42, 5, 4));
      };
      (r(36, `#d8502a`, `#3a8a2a`),
        (e.fillStyle = `rgba(80,200,90,0.85)`),
        e.fillRect(84, n * 0.2, 18, 40),
        (e.fillStyle = `#fff8e8`),
        e.beginPath(),
        e.arc(93, n * 0.2, 10, 0, Math.PI * 2),
        e.fill(),
        (e.fillStyle = `#d01020`),
        e.beginPath(),
        e.arc(97, n * 0.1, 4, 0, Math.PI * 2),
        e.fill(),
        (e.fillStyle = `#e8b040`),
        e.fillRect(140, n * 0.32, 22, 18),
        (e.fillStyle = `#6a3010`),
        e.fillRect(140, n * 0.32, 22, 5),
        (e.fillStyle = `#fff`),
        e.beginPath(),
        e.arc(130, n * 0.48, 8, 0, Math.PI * 2),
        e.arc(172, n * 0.48, 8, 0, Math.PI * 2),
        e.fill(),
        r(214, `#f4e0a0`, `#e8d0a0`));
      for (let [t, r, i] of [
        [`walkin.kissa.item.napolitan`, 1e3, 36],
        [`walkin.kissa.item.creamsoda`, 750, 93],
        [`walkin.kissa.item.purin`, 550, 151],
        [`walkin.kissa.item.mixsand`, 900, 214],
      ])
        (J(e, i - 26, n - 22, 52, 18, `#ffffff`),
          q(e, B(t), i, n - 17, 48, 7, `#222`, { weight: `600` }),
          q(e, ea(r), i, n - 8, 48, 8, `#b01010`));
    }),
    e.add(`k-cups`, 128, 64, (e, t, n) => {
      J(e, 0, 0, t, n, `#3a2214`);
      for (let n = 0; n < 2; n++) {
        J(e, 0, n * 32 + 28, t, 4, `#5a3a20`);
        for (let t = 0; t < 7; t++) {
          let r = 6 + t * 17,
            i = n * 32 + 12;
          ((e.fillStyle = `#f8f4ea`),
            e.fillRect(r, i, 12, 14),
            (e.fillStyle = [`#2a4a8a`, `#8a2a2a`, `#2a6a4a`, `#c8a040`][
              (t + n) % 4
            ]),
            e.fillRect(r, i + 3, 12, 3),
            (e.fillStyle = `#f8f4ea`),
            e.fillRect(r + 1, i + 14, 14, 2));
        }
      }
    }),
    e.add(`k-painting`, 192, 128, (e, t, n, r) => {
      (J(e, 0, 0, t, n, `#6a4a20`),
        by(e, 10, 10, t - 20, n * 0.55, `#8ab0c8`, `#e8d8b0`),
        (e.fillStyle = `#4a5a6a`),
        e.beginPath(),
        e.moveTo(10, n * 0.62),
        e.lineTo(t * 0.35, n * 0.28),
        e.lineTo(t * 0.55, n * 0.5),
        e.lineTo(t * 0.75, n * 0.32),
        e.lineTo(t - 10, n * 0.6),
        e.lineTo(t - 10, n - 10),
        e.lineTo(10, n - 10),
        e.fill(),
        by(e, 10, n * 0.66, t - 20, n * 0.3, `#5a7a4a`, `#3a5a2a`),
        xy(e, t, n, r, 300, 0.1, 0.06, 3),
        (e.strokeStyle = `#c8a050`),
        (e.lineWidth = 8),
        e.strokeRect(4, 4, t - 8, n - 8));
    }),
    e.add(`k-smoke`, 128, 32, (e, t, n) => {
      (J(e, 0, 0, t, n, `#ffffff`),
        J(e, 0, 0, t, 3, `#c81818`),
        J(e, 0, n - 3, t, 3, `#c81818`),
        q(e, B(`walkin.kissa.smoke`), t / 2, n * 0.42, t - 12, 13, `#c81818`),
        q(e, B(`walkin.kissa.smoke.u20`), t / 2, n * 0.78, t - 12, 7, `#333`, {
          weight: `600`,
        }));
    }),
    e.add(`k-hours`, 96, 64, (e, t, n) => {
      (J(e, 0, 0, t, n, `rgba(250,240,220,0.95)`),
        q(e, B(`walkin.kissa.hours`), t / 2, n * 0.36, t - 10, 11, `#3a2010`, {
          weight: `600`,
        }),
        q(e, B(`walkin.kissa.closed`), t / 2, n * 0.7, t - 10, 9, `#3a2010`, {
          weight: `500`,
        }));
    }),
    e.add(`k-glass-name`, 256, 48, (e, t, n) => {
      (J(e, 0, 0, t, n, `#2a160c`),
        q(e, B(`walkin.kissa.name`), t / 2, n * 0.5, t - 20, 30, `#e8c060`, {
          serif: !0,
        }));
    }),
    e.add(`k-frost`, 64, 64, (e, t, n, r) => {
      (J(e, 0, 0, t, n, `rgba(236,228,206,0.92)`),
        xy(e, t, n, r, 80, 0.05, 0.08, 2),
        (e.strokeStyle = `rgba(160,130,80,0.5)`),
        e.strokeRect(6, 6, t - 12, n - 12));
    }),
    e.add(`k-stained`, 64, 64, (e, t, n) => {
      let r = [
        `#e89a2a`,
        `#c8402a`,
        `#f4d060`,
        `#6a9a3a`,
        `#e8a868`,
        `#b8302a`,
      ];
      for (let i = 0; i < 4; i++)
        for (let a = 0; a < 4; a++)
          J(
            e,
            (i * t) / 4,
            (a * n) / 4,
            t / 4,
            n / 4,
            r[(i * 3 + a) % r.length],
          );
      ((e.strokeStyle = `#2a1a0a`), (e.lineWidth = 2));
      for (let r = 0; r <= 4; r++)
        (e.beginPath(),
          e.moveTo((r * t) / 4, 0),
          e.lineTo((r * t) / 4, n),
          e.moveTo(0, (r * n) / 4),
          e.lineTo(t, (r * n) / 4),
          e.stroke());
    }),
    e.add(`k-game`, 128, 96, (e, t, n, r) => {
      J(e, 0, 0, t, n, `#060a10`);
      let i = [`#f04040`, `#40e0f0`, `#f0e040`, `#a0f040`];
      for (let t = 0; t < 4; t++)
        for (let n = 0; n < 8; n++) {
          let r = 14 + n * 13,
            a = 18 + t * 11;
          ((e.fillStyle = i[t]),
            e.fillRect(r, a, 8, 5),
            e.fillRect(r - 1, a + 5, 2, 2),
            e.fillRect(r + 7, a + 5, 2, 2));
        }
      (J(e, t / 2 - 6, n - 14, 12, 6, `#40f060`),
        xy(e, t, n, r, 40, 0, 0.2, 1),
        q(e, B(`walkin.kissa.game.score`), t / 2, 7, t - 10, 7, `#f0f0f0`, {
          weight: `600`,
        }));
    }),
    e.add(`k-phone`, 64, 64, (e, t, n) => {
      (J(e, 0, 0, t, n, `#f080a0`), J(e, 6, 8, t - 12, 14, `#e86890`));
      for (let t = 0; t < 12; t++)
        J(e, 12 + (t % 3) * 14, 28 + Math.floor(t / 3) * 8, 9, 6, `#fff4f8`);
    }),
    e.add(`k-paper`, 64, 64, (e, t, n, r) => {
      (J(e, 0, 0, t, n, `#ece6d8`), J(e, 4, 4, t - 8, 14, `#c81818`));
      for (let t = 0; t < 12; t++)
        J(
          e,
          4 + (t % 3) * 20,
          22 + Math.floor(t / 3) * 10,
          16,
          6,
          `rgba(30,30,30,${0.3 + r() * 0.4})`,
        );
    }),
    e.add(`k-lamp`, 32, 32, (e, t, n) =>
      by(e, 0, 0, t, n, `#ffe0a0`, `#f0a040`),
    ));
}
function Mb(e, t) {
  let n = -e / 2;
  return {
    dx: -(e / 2 - 1),
    doorHW: 0.55,
    counter: { x0: e / 2 - 1.65, x1: e / 2 - 1.1, z0: 2.2, z1: 7.4, h: 1 },
    back: { x0: e / 2 - 0.55, x1: e / 2, z0: 1.8, z1: t - 0.9 },
    stools: [2.9, 3.9, 4.9, 5.9],
    stoolX: e / 2 - 1.95,
    booths: [
      { z0: 2.4, z1: 4.3 },
      { z0: 4.6, z1: 6.5 },
    ],
    boothX: [n, n + 1.45],
    tables: [
      { x: -1.25, z: 3.45 },
      { x: -1.25, z: 5.55 },
      { x: 0.55, z: 6.55 },
    ],
    game: { x: 0.2, z: 1.75 },
    showcase: { x0: 1.4, x1: e / 2 - 0.5, z0: 0.06, z1: 0.62 },
    corner: { tx: n + 1.1, tz: t - 1.45, screenX: n + 2.3, screenZ0: t - 1.95 },
    phone: { x: e / 2 - 1.38, z: 2.36 },
  };
}
