// tokyo/assets/region-tokyo-d-kanda-BOuhI6B0 08 — key
// Lines 2715-2847 of readable/tokyo/assets/region-tokyo-d-kanda-BOuhI6B0.pretty.js (statement-aligned).
function ht() {
  return [...st, ...ct, ...lt, ...ut, ...ft, ...pt, ...mt];
}
[...ft, ...pt];
var gt = -183.6,
  _t = -171.4,
  vt = [
    {
      id: `isehei`,
      z0: -558.9,
      z1: -551.5,
      floors: 3,
      kind: `nabe`,
      wood: `#4a3020`,
      boardAt: `eave`,
      rail: `diamond`,
      hours: [11.5, 22],
      board: {
        main: `kanda.old.isehei`,
        bg: `#3a2614`,
        fg: `#f2e2b0`,
        style: `wood`,
        serif: !0,
      },
      noren: { key: `kanda.old.noren-a`, bg: `#1a2a4a`, fg: `#ffffff` },
      lanterns: [{ key: `kanda.old.isehei-sub`, body: `#f0e6d0` }],
    },
    {
      id: `sasamura`,
      z0: -551.5,
      z1: -544.5,
      floors: 3,
      kind: `kanmi`,
      wood: `#5a3a22`,
      boardAt: `door`,
      rail: `bars`,
      hours: [11, 20],
      board: {
        main: `kanda.old.sasamura`,
        bg: `#2a1a0e`,
        fg: `#f0dca8`,
        style: `wood`,
        serif: !0,
      },
      noren: { key: `kanda.old.noren-k`, bg: `#6a1a18`, fg: `#ffffff` },
      lanterns: [
        { key: `kanda.old.sasamura-menu`, body: `#f4ecd8` },
        { key: `kanda.old.sasamura-menu`, body: `#f4ecd8` },
      ],
    },
    {
      id: `shakuyaku`,
      z0: -544.5,
      z1: -537,
      floors: 3,
      kind: `nabe`,
      wood: `#3e2a1c`,
      boardAt: `door`,
      rail: `bars`,
      hours: [11.5, 21],
      board: {
        main: `kanda.old.shakuyaku`,
        bg: `#24180e`,
        fg: `#e8d8a8`,
        style: `wood`,
        serif: !0,
      },
      noren: { key: `kanda.old.noren-s`, bg: `#2a2a2a`, fg: `#ffffff` },
    },
    {
      id: `matsuba`,
      z0: -537,
      z1: -527,
      floors: 2,
      kind: `soba`,
      wood: `#4a3222`,
      boardAt: `door`,
      rail: `bars`,
      hours: [11, 20.5],
      cornerS: !0,
      board: {
        main: `kanda.old.matsuba`,
        bg: `#2a1a0e`,
        fg: `#f4e4b4`,
        style: `wood`,
        serif: !0,
      },
      noren: { key: `kanda.old.noren-m`, bg: `#1a2a5a`, fg: `#ffffff` },
      lanterns: [{ key: `kanda.old.teuchi`, body: `#f0e6d0` }],
    },
  ],
  yt = 3.4,
  bt = 2.9,
  xt = (e) => yt + (e.floors - 1) * bt;
function St(e, t, n, r, i) {
  B(e, t, n, r, i, `#efe6d0`);
  let a = e.createLinearGradient(0, n, 0, n + i);
  (a.addColorStop(0, `rgba(255,230,180,0.0)`),
    a.addColorStop(1, `rgba(180,120,60,0.25)`),
    (e.fillStyle = a),
    e.fillRect(t, n, r, i),
    e.save(),
    (e.globalCompositeOperation = `copy`),
    (e.fillStyle = `rgba(0,0,0,0)`));
  for (let a = 0; a <= 8; a++) e.fillRect(t + (a * r) / 8 - 1.5, n, 3, i);
  for (let a = 0; a <= 4; a++) e.fillRect(t, n + (a * i) / 4 - 1.5, r, 3);
  e.restore();
}
function Ct(e) {
  (e.need(`old:kawara`, 128, 64, je(`#4c5054`)),
    e.need(`old:shoji`, 128, 64, St),
    e.need(`old:lattice`, 128, 96, Ae(`#2a1a10`, `#b88a52`, 18)),
    e.need(
      `old:rekiken`,
      128,
      48,
      Be(`kanda.old.rekiken`, `#e8e2d0`, `#3a3020`),
    ));
  for (let t of vt) {
    (e.need(`old:boards:${t.wood}`, 128, 128, ke(t.wood)),
      e.need(U(t.board), 384, 96, xe(t.board)),
      e.need(`shop:${t.kind}:0`, 400, 160, Pe(t.kind)),
      e.need(
        `noren:${t.noren.key}:${t.noren.bg}`,
        128,
        80,
        Ee(t.noren.key, t.noren.bg, t.noren.fg),
      ));
    for (let n of t.lanterns ?? [])
      e.need(`chochinw:${n.key}:${n.body}`, 64, 96, Te(n.key, n.body));
  }
}
var wt = 3;
