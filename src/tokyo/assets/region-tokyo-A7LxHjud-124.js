// tokyo/assets/region-tokyo-A7LxHjud 124 — add
// Lines 54599-54851 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function P_(e, t) {
  let n = N_(e, t),
    r = (n.fridge.z0 + n.fridge.z1) / 2;
  return {
    door: [0, 0.9, k_, Math.PI],
    lockers: [-0.55, 1.2, k_, -Math.PI / 2],
    lobby: [0, 4.6, A_, Math.PI],
    bandai: [(n.desk.x0 + n.desk.x1) / 2, n.desk.z0 - 0.55, A_, Math.PI],
    "bandai-seat": [
      (n.desk.x0 + n.desk.x1) / 2,
      t - 0.45,
      n.desk.seatY + A_,
      0,
    ],
    "milk-fridge": [e / 2 - 0.95, r, A_, Math.PI / 2],
    "bench-1": [
      n.benches[0].x,
      (n.benches[0].z0 + n.benches[0].z1) / 2 - 0.3,
      A_,
      -Math.PI / 2,
    ],
    "bench-2": [
      n.benches[1].x,
      (n.benches[1].z0 + n.benches[1].z1) / 2 + 0.3,
      A_,
      -Math.PI / 2,
    ],
    tv: [-e / 2 + 1.25, n.tv.z, A_, -Math.PI / 2],
    "noren-men": [(n.norenM.x0 + n.norenM.x1) / 2, t - 0.6, A_, Math.PI],
    "noren-women": [(n.norenF.x0 + n.norenF.x1) / 2, t - 0.6, A_, Math.PI],
  };
}
var F_ = 1.08,
  $ue = 6,
  I_ = 0.18,
  L_ = 0.25,
  R_ = 1.2;
function z_(e, t) {
  let n = e ?? tp.door,
    r = Math.cos(n.facing),
    i = Math.sin(n.facing),
    a = Math.sin(n.facing),
    o = -Math.cos(n.facing),
    s = tp.mouthX - tp.doorX,
    c = n.x + r * s - a * 0.4,
    l = n.z + i * s - o * 0.4,
    u = t ? t.groundHeight(c - a * 0.8, l - o * 0.8) + 0.012 : 0.162;
  return new bn(c, u, l, n.facing);
}
function B_() {
  let e = T_().find((e) => e.site === tp.site);
  return e ? { x: e.x, z: e.z, facing: e.heading } : null;
}
function ede(e) {
  (e.add(`cc-terrazzo`, 128, 128, (e, t, n, r) => {
    W(e, 0, 0, t, n, `#b8b0a2`);
    for (let i = 0; i < 700; i++)
      ((e.fillStyle = [`#8a8070`, `#d8d0c0`, `#6a6458`, `#c8a888`][
        Math.floor(r() * 4)
      ]),
        e.fillRect(r() * t, r() * n, 1 + r() * 3, 1 + r() * 3));
    ((e.fillStyle = `rgba(60,50,40,0.35)`),
      e.fillRect(0, 0, t, 2),
      e.fillRect(0, 0, 2, n));
  }),
    e.add(`cc-mosaic`, 128, 64, (e, t, n, r) => {
      for (let t = 0; t < 32; t++)
        for (let n = 0; n < 16; n++)
          W(
            e,
            t * 4,
            n * 4,
            3.4,
            3.4,
            [`#5a8a72`, `#6a9a82`, `#e8e0c8`, `#4a7a62`][Math.floor(r() * 4)],
          );
      $h(e, t, n, r, 80, 0.12, 0.02, 3);
    }),
    e.add(`cc-wall`, 64, 64, (e, t, n, r) => {
      (W(e, 0, 0, t, n, `#d8d2c2`), $h(e, t, n, r, 90, 0.1, 0.03, 4));
    }),
    e.add(`cc-ceil`, 64, 64, (e, t, n, r) => {
      eg(e, t, n, r, `#d4d0c4`, `rgba(90,85,75,0.5)`, 2, 0.8);
    }),
    e.add(`cc-carpet`, 64, 64, (e, t, n, r) => {
      (eg(e, t, n, r, `#5a5e64`, `rgba(30,30,34,0.6)`, 2, 1.4),
        $h(e, t, n, r, 120, 0.12, 0.05, 2));
    }),
    e.add(`cc-shutter`, 128, 128, (e, t, n, r) => {
      Qh(e, 0, 0, t, n, `#a8acae`, `#8a8e90`);
      for (let r = 0; r < n; r += 6) W(e, 0, r, t, 1.5, `rgba(40,40,40,0.35)`);
      $h(e, t, n, r, 120, 0.08, 0.05, 3);
    }),
    e.add(`cc-kinken`, 256, 48, (e, t, n) => {
      (W(e, 0, 0, t, n, `#f8d000`),
        W(e, 0, 0, t, 4, `#c81818`),
        U(
          e,
          L(`walkin.callcentre.kinken`),
          t / 2,
          n * 0.55,
          t - 16,
          26,
          `#c81818`,
        ));
    }),
    e.add(`cc-kissa`, 96, 192, (e, t, n, r) => {
      (W(e, 0, 0, t, n, `#4a2c18`),
        $h(e, t, n, r, 100, 0.12, 0.04, 2),
        Qh(e, 14, 20, t - 28, n * 0.42, `#c8b080`, `#8a7048`),
        W(e, t * 0.22, n * 0.52, t * 0.56, 34, `#fffaf0`),
        U(
          e,
          L(`walkin.callcentre.kissa`),
          t / 2,
          n * 0.52 + 11,
          t * 0.5,
          10,
          `#3a2010`,
          { weight: `600` },
        ),
        U(
          e,
          L(`walkin.callcentre.kyugyo`),
          t / 2,
          n * 0.52 + 25,
          t * 0.5,
          10,
          `#b01010`,
        ),
        W(e, t - 18, n * 0.55, 6, 14, `#c8a050`));
    }),
    e.add(`cc-massage`, 96, 192, (e, t, n) => {
      (Qh(e, 0, 0, t, n, `#e8e4ec`, `#c8c0d4`),
        W(e, 0, 0, t, 8, `#8a6ab0`),
        Zh(
          e,
          L(`walkin.callcentre.massage`),
          t / 2,
          24,
          n * 0.62,
          26,
          `#5a3a8a`,
          !1,
        ),
        U(
          e,
          L(`walkin.callcentre.massage.price`),
          t / 2,
          n * 0.82,
          t - 10,
          12,
          `#b01060`,
        ));
    }),
    e.add(`cc-mahjong`, 128, 48, (e, t, n) => {
      (W(e, 0, 0, t, n, `#1a5a2a`),
        U(
          e,
          L(`walkin.callcentre.mahjong`),
          t / 2,
          n / 2,
          t - 12,
          26,
          `#f4f0e0`,
          { serif: !0 },
        ));
    }),
    e.add(`cc-plate`, 192, 48, (e, t, n) => {
      (W(e, 0, 0, t, n, `#f0f0ee`),
        (e.strokeStyle = `#888`),
        e.strokeRect(2, 2, t - 4, n - 4),
        U(
          e,
          L(`walkin.callcentre.company`),
          t / 2,
          n * 0.42,
          t - 16,
          18,
          `#1a1a1a`,
        ),
        U(
          e,
          L(`walkin.callcentre.staffonly`),
          t / 2,
          n * 0.8,
          t - 30,
          9,
          `#b01010`,
          { weight: `600` },
        ));
    }),
    e.add(`cc-board`, 256, 128, (e, t, n, r) => {
      (W(e, 0, 0, t, n, `#f8f8f6`),
        (e.strokeStyle = `#a0a4a8`),
        (e.lineWidth = 5),
        e.strokeRect(2, 2, t - 4, n - 4),
        U(e, L(`walkin.callcentre.quota`), t * 0.3, 16, t * 0.5, 15, `#c81818`),
        (e.strokeStyle = `rgba(30,60,160,0.85)`),
        (e.lineWidth = 1.5));
      for (let n = 0; n < 6; n++) {
        let i = 36 + n * 15;
        (e.beginPath(),
          e.moveTo(10, i + 6),
          e.lineTo(t - 10, i + 6),
          e.stroke(),
          U(
            e,
            L(`walkin.callcentre.name.${(n % 4) + 1}`),
            34,
            i,
            50,
            10,
            `#1a2a6a`,
            { weight: `600` },
          ));
        let a = 2 + Math.floor(r() * 9);
        for (let t = 0; t < a; t++) W(e, 72 + t * 9, i - 5, 2, 10, `#1a2a6a`);
        U(e, String(a * 3), t - 34, i, 40, 11, a > 6 ? `#1a7a2a` : `#c81818`);
      }
    }),
    e.add(`cc-screen`, 64, 48, (e, t, n, r) => {
      W(e, 0, 0, t, n, `#14306a`);
      for (let t = 0; t < 8; t++)
        W(e, 4, 4 + t * 5, 20 + r() * 34, 2, `rgba(220,235,255,0.75)`);
    }),
    e.add(`cc-list`, 64, 64, (e, t, n, r) => {
      W(e, 0, 0, t, n, `#f4f2ec`);
      for (let n = 0; n < 12; n++)
        (W(e, 4, 4 + n * 5, 14, 2, `rgba(30,30,30,0.6)`),
          W(e, 22, 4 + n * 5, 24 + r() * 14, 2, `rgba(30,30,30,0.45)`),
          r() < 0.4 && W(e, 3, 3 + n * 5, t - 6, 4, `rgba(240,220,40,0.35)`));
    }),
    e.add(`cc-rack`, 64, 128, (e, t, n, r) => {
      W(e, 0, 0, t, n, `#16181c`);
      for (let n = 0; n < 14; n++) {
        W(e, 4, 4 + n * 9, t - 8, 7, `#24282e`);
        for (let t = 0; t < 4; t++)
          W(e, 8 + t * 5, 7 + n * 9, 2, 2, r() < 0.7 ? `#3af06a` : `#f0a020`);
        W(e, t - 18, 6 + n * 9, 10, 3, `#3a3e46`);
      }
    }),
    e.add(`cc-exit`, 96, 48, (e, t, n) => {
      (W(e, 0, 0, t, n, `#1a9a4a`),
        U(e, L(`walkin.callcentre.exit`), t / 2, n / 2, t - 12, 24, `#ffffff`));
    }),
    e.add(`cc-box`, 64, 64, (e, t, n, r) => {
      (W(e, 0, 0, t, n, `#b8905a`),
        $h(e, t, n, r, 60, 0.1, 0.04, 3),
        W(e, 0, n / 2 - 3, t, 6, `#d8c090`));
    }),
    e.add(`cc-tube`, 16, 16, (e, t, n) => W(e, 0, 0, t, n, `#f4fbff`)));
}
