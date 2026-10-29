// tokyo/assets/region-tokyo-d-shimbashi-DyBSAck1 04 — awn
// Lines 1020-1304 of readable/tokyo/assets/region-tokyo-d-shimbashi-DyBSAck1.pretty.js (statement-aligned).
function He(e) {
  return (t, n, r, i, a) => {
    (M(t, n, r, i, a, `#8d9092`), (t.fillStyle = `#7a7d80`));
    for (let e = 0; e < 26; e++) t.fillRect(n, r + (a * e) / 26, i, a / 70);
    let [o, s] = ze[e % ze.length];
    (e % 2 == 0 &&
      (M(t, n + i * 0.18, r + a * 0.3, i * 0.64, a * 0.22, o),
      H(
        t,
        V(`shim.gado.bar.${e + 1}`),
        n + i / 2,
        r + a * 0.41,
        i * 0.6,
        a * 0.16,
        s,
        `900`,
      )),
      (t.fillStyle = `rgba(40,36,30,0.25)`),
      t.fillRect(n, r + a * 0.86, i, a * 0.14));
  };
}
function Ue(e, t, n, r, i) {
  (M(e, t, n, r, i, `#1c1c1c`),
    M(e, t + 3, n + 3, r - 6, i - 6, `#26301f`),
    H(
      e,
      V(`shim.gado.menu.osusume`),
      t + r / 2,
      n + i * 0.12,
      r * 0.86,
      i * 0.1,
      `#ffe14a`,
      `900`,
    ),
    [
      `shim.gado.menu.senbero`,
      `shim.gado.menu.yakiton`,
      `shim.gado.menu.nikomi`,
      `shim.gado.menu.hoppy`,
      `shim.gado.hiruzake`,
    ].forEach((a, o) =>
      H(
        e,
        V(a),
        t + r / 2,
        n + i * (0.3 + o * 0.15),
        r * 0.86,
        i * 0.09,
        o === 0 ? `#ff8a6a` : `#f4f4f4`,
        `700`,
      ),
    ));
}
function We(e) {
  return (t, n, r, i, a) => {
    (ue(t, n, r, i, a, `#d01c14`, 0.8),
      (t.globalAlpha = 1),
      (t.fillStyle = `rgba(0,0,0,0.25)`));
    for (let e = 1; e < 8; e++) t.fillRect(n, r + (a * e) / 8, i, 1);
    C(
      t,
      V(e),
      n + i / 2,
      r + a * 0.14,
      r + a * 0.86,
      i * 0.42,
      `#1a0a08`,
      S(),
      `900`,
    );
  };
}
var Ge = [
    {
      id: `fish`,
      names: [
        `shim.mkt.fish.1`,
        `shim.mkt.fish.2`,
        `shim.mkt.fish.3`,
        `shim.mkt.fish.4`,
      ],
      cat: `shim.mkt.cat.fish`,
      awn: [`#1d4f9a`, `#ffffff`],
      board: [`#ffffff`, `#0d2a6a`],
      weight: 5,
    },
    {
      id: `maguro`,
      names: [`shim.mkt.maguro.1`, `shim.mkt.maguro.2`, `shim.mkt.maguro.3`],
      cat: `shim.mkt.cat.maguro`,
      awn: [`#c8161c`, `#ffffff`],
      board: [`#c8161c`, `#ffffff`],
      weight: 3,
    },
    {
      id: `kanbutsu`,
      names: [
        `shim.mkt.kanbutsu.1`,
        `shim.mkt.kanbutsu.2`,
        `shim.mkt.kanbutsu.3`,
      ],
      cat: `shim.mkt.cat.kanbutsu`,
      awn: [`#c98a2a`, `#4a2a10`],
      board: [`#f2e4c4`, `#4a2a10`],
      weight: 3,
    },
    {
      id: `knife`,
      names: [`shim.mkt.knife.1`, `shim.mkt.knife.2`],
      cat: `shim.mkt.cat.knife`,
      awn: [`#2a2a2a`, `#d8d0b8`],
      board: [`#1a1a1a`, `#f0e6c8`],
      weight: 2,
    },
    {
      id: `nori`,
      names: [`shim.mkt.nori.1`, `shim.mkt.nori.2`],
      cat: `shim.mkt.cat.nori`,
      awn: [`#1f3a22`, `#e8e0c8`],
      board: [`#1f3a22`, `#f4ecd4`],
      weight: 2,
    },
    {
      id: `tea`,
      names: [`shim.mkt.tea`],
      cat: `shim.mkt.cat.tea`,
      awn: [`#4a6a2a`, `#f0f0e0`],
      board: [`#f4f0e0`, `#2f4a1a`],
      weight: 1,
    },
    {
      id: `katsuo`,
      names: [`shim.mkt.katsuo`],
      cat: `shim.mkt.cat.katsuo`,
      awn: [`#7a3a12`, `#f0e0c0`],
      board: [`#f6ead0`, `#5a2a0a`],
      weight: 1.5,
    },
    {
      id: `tsukemono`,
      names: [`shim.mkt.tsukemono`],
      cat: `shim.mkt.cat.tsukemono`,
      awn: [`#8a6a1a`, `#ffffff`],
      board: [`#ffffff`, `#5a3a0a`],
      weight: 1,
    },
    {
      id: `kitchen`,
      names: [`shim.mkt.kitchen.1`, `shim.mkt.kitchen.2`],
      cat: `shim.mkt.cat.kitchen`,
      awn: [`#e08a1a`, `#ffffff`],
      board: [`#ffcc00`, `#1a1a1a`],
      weight: 2,
    },
    {
      id: `utsuwa`,
      names: [`shim.mkt.utsuwa`],
      cat: `shim.mkt.cat.utsuwa`,
      awn: [`#3a4a5a`, `#e8e8e0`],
      board: [`#e8e4da`, `#2a3440`],
      weight: 1,
    },
    {
      id: `don`,
      names: [`shim.mkt.don.1`, `shim.mkt.don.2`, `shim.mkt.don.3`],
      cat: `shim.mkt.cat.don`,
      awn: [`#0d3c8c`, `#ffffff`],
      board: [`#0d3c8c`, `#ffffff`],
      weight: 4,
      eat: !0,
    },
    {
      id: `sushi`,
      names: [`shim.mkt.sushi2`],
      cat: `shim.mkt.cat.sushi`,
      awn: [`#1a1a1a`, `#ffffff`],
      board: [`#1a1a1a`, `#e8d8a8`],
      weight: 1.5,
      eat: !0,
    },
    {
      id: `tamago`,
      names: [`shim.mkt.tamago`],
      cat: `shim.mkt.cat.tamago`,
      awn: [`#f2b81a`, `#5a2a0a`],
      board: [`#ffffff`, `#c8161c`],
      weight: 1,
    },
    {
      id: `ramen`,
      names: [`shim.mkt.ramen`],
      cat: `shim.mkt.cat.ramen`,
      awn: [`#b5121b`, `#ffffff`],
      board: [`#f4e0b0`, `#b5121b`],
      weight: 0.7,
      eat: !0,
    },
    {
      id: `coffee`,
      names: [`shim.mkt.coffee`],
      cat: `shim.mkt.cat.coffee`,
      awn: [`#5a3a1e`, `#f0e4cc`],
      board: [`#3a2a1a`, `#f0e0c0`],
      weight: 0.7,
      eat: !0,
    },
    {
      id: `taiyaki`,
      names: [`shim.mkt.taiyaki`],
      cat: `shim.mkt.cat.taiyaki`,
      awn: [`#c8161c`, `#ffe060`],
      board: [`#ffe060`, `#c8161c`],
      weight: 0.6,
    },
    {
      id: `yasai`,
      names: [`shim.mkt.yasai`],
      cat: `shim.mkt.cat.yasai`,
      awn: [`#2a7a2a`, `#ffffff`],
      board: [`#ffffff`, `#1a5a1a`],
      weight: 1,
    },
    {
      id: `kai`,
      names: [`shim.mkt.kai`],
      cat: `shim.mkt.cat.kai`,
      awn: [`#1a6a8a`, `#ffffff`],
      board: [`#e8f4f8`, `#0a4a6a`],
      weight: 1,
    },
  ],
  Ke = (e) => Ge.find((t) => t.id === e) ?? Ge[0];
function qe(e, t) {
  return (n, r, i, a, o) => {
    let [s, c] = e.board;
    (M(n, r, i, a, o, s),
      (n.strokeStyle = c),
      (n.globalAlpha = 0.6),
      (n.lineWidth = 2),
      n.strokeRect(r + 3, i + 3, a - 6, o - 6),
      (n.globalAlpha = 1));
    let l = o * 0.95;
    (M(n, r + a - l - 4, i + 4, l, o - 8, c),
      C(
        n,
        V(e.cat),
        r + a - l / 2 - 4,
        i + o * 0.1,
        i + o * 0.9,
        l * 0.55,
        s,
        S(),
        `900`,
      ),
      H(
        n,
        V(t),
        r + (a - l) / 2,
        i + o / 2,
        a - l - 18,
        o * 0.66,
        c,
        `900`,
        /classic|knife|nori|tea|katsuo|kanbutsu|tsukemono|utsuwa|sushi/.test(
          e.id,
        )
          ? D()
          : S(),
      ));
  };
}
function Je(e, t, n) {
  return (r, i, a, o, s) => {
    if ((M(r, i, a, o, s, e), n))
      for (let e = 0; e < 8; e += 2) M(r, i + (o * e) / 8, a, o / 8, s, t);
    ((r.fillStyle = `rgba(0,0,0,0.12)`),
      r.fillRect(i, a + s * 0.9, o, s * 0.1));
  };
}
function Ye(e, t) {
  return (n, r, i, a, o) => {
    (M(n, r, i, a, o, e.awn[0]),
      H(n, V(t), r + a / 2, i + o / 2, a * 0.86, o * 0.7, e.awn[1], `900`));
  };
}
