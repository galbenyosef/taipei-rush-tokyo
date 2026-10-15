// tokyo/assets/region-tokyo-55J_WESF 406 — fillstyle
// Lines 146287-146543 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function tIe(e, t) {
  let [n, r] = xe(512, 512);
  br(n, r);
  let i = (e) => yo(e).ja,
    a = (e, t) => {
      ((r.fillStyle = t), r.fillRect(e[0], e[1], e[2], e[3]));
    };
  (r.clearRect(0, 0, 512, 512),
    a(u2.white, `#ffffff`),
    (r.textAlign = `center`),
    (r.textBaseline = `middle`));
  {
    let [e, n, a, o] = u2.fascia;
    ((r.fillStyle = `rgba(22,38,86,0.32)`),
      r.fillRect(e, n, a, o),
      (r.strokeStyle = `rgba(200,206,214,1)`),
      (r.lineWidth = 3),
      r.strokeRect(e + 2, n + 2, a - 4, o - 4));
    let s = e + 54,
      c = n + o / 2;
    ((r.fillStyle = `#e2bd52`), r.beginPath());
    for (let e = 0; e < 10; e++) {
      let t = (e / 10) * Math.PI * 2 - Math.PI / 2,
        n = e % 2 ? 9 : 24;
      r.lineTo(s + Math.cos(t) * n, c + Math.sin(t) * n);
    }
    (r.closePath(),
      r.fill(),
      (r.fillStyle = `#ffffff`),
      (r.font = `900 50px ${t}`));
    let l = i(`common.facility.koban`);
    (r.fillText(l.split(``).join(` `), e + a / 2 + 22, n + 30),
      (r.font = `800 20px ${t}`),
      r.fillText(
        i(`common.facility.koban-latin`).split(``).join(` `),
        e + a / 2 + 22,
        n + 63,
      ));
  }
  {
    let [e, n, o, s] = u2.door;
    a(u2.door, `rgba(60,72,82,0.55)`);
    let c = r.createLinearGradient(e, n, e + o, n + s);
    (c.addColorStop(0, `rgba(170,186,196,0.62)`),
      c.addColorStop(0.5, `rgba(84,96,104,0.5)`),
      c.addColorStop(1, `rgba(120,132,138,0.6)`),
      (r.fillStyle = c),
      r.fillRect(e + 6, n + 6, o - 12, s - 12),
      (r.fillStyle = `rgba(38,40,44,0.75)`),
      r.fillRect(e + 14, n + s * 0.62, o - 28, 10),
      r.fillRect(e + 20, n + s * 0.66, 8, s * 0.3),
      r.fillRect(e + o - 28, n + s * 0.66, 8, s * 0.3),
      (r.strokeStyle = `#c4c9ce`),
      (r.lineWidth = 6),
      r.strokeRect(e + 3, n + 3, o - 6, s - 6),
      r.beginPath(),
      r.moveTo(e + o / 2, n),
      r.lineTo(e + o / 2, n + s),
      r.stroke(),
      (r.lineWidth = 3),
      r.beginPath(),
      r.moveTo(e, n + s * 0.48),
      r.lineTo(e + o, n + s * 0.48),
      r.stroke(),
      (r.fillStyle = `#8a9096`),
      r.fillRect(e + o / 2 - 12, n + s * 0.5, 4, 22),
      r.fillRect(e + o / 2 + 8, n + s * 0.5, 4, 22),
      (r.fillStyle = `#f4f4f0`),
      r.fillRect(e + 14, n + 26, 40, 30),
      (r.fillStyle = `#c4202a`),
      (r.font = `900 13px ${t}`),
      r.fillText(`110`, e + 34, n + 36),
      (r.fillStyle = `#1b2a55`),
      (r.font = `800 8px ${t}`),
      r.fillText(i(`police.org`), e + 34, n + 49));
  }
  {
    let [e, n, o, s] = u2.board;
    (a(u2.board, `#3d4a3e`),
      (r.fillStyle = `#e9e6dc`),
      r.fillRect(e + 4, n + 4, o - 8, s - 8),
      (r.fillStyle = `#1d3a7a`),
      r.fillRect(e + 4, n + 4, o - 8, 22),
      (r.fillStyle = `#ffffff`),
      (r.font = `800 14px ${t}`),
      r.fillText(i(`police.koban.board.title`), e + o / 2, n + 15));
    let c = (e, n, a, o, s, c, l, u, d) => {
      ((r.fillStyle = s),
        r.fillRect(e, n, a, o),
        (r.fillStyle = c),
        (r.font = `900 ${u}px ${t}`));
      let f = i(l);
      if (d === `wanted`) {
        r.fillText(f, e + a / 2, n + 10);
        for (let t = 0; t < 3; t++)
          ((r.fillStyle = `#8c8a86`),
            r.fillRect(e + 4 + t * ((a - 8) / 3), n + 20, (a - 14) / 3, o - 26),
            (r.fillStyle = `#4a4744`),
            r.beginPath(),
            r.arc(
              e + 4 + t * ((a - 8) / 3) + (a - 14) / 6,
              n + 31,
              5,
              0,
              Math.PI * 2,
            ),
            r.fill(),
            r.fillRect(
              e + 4 + t * ((a - 8) / 3) + 2,
              n + 37,
              (a - 14) / 3 - 4,
              8,
            ));
        return;
      }
      if (f.length > 6) {
        let t = Math.ceil(f.length / 2);
        (r.fillText(f.slice(0, t), e + a / 2, n + o * 0.36),
          r.fillText(f.slice(t), e + a / 2, n + o * 0.68));
      } else r.fillText(f, e + a / 2, n + o / 2);
      d === `phone` &&
        ((r.fillStyle = c), r.fillRect(e + 4, n + o - 6, a - 8, 2));
    };
    (c(
      e + 8,
      n + 32,
      54,
      56,
      `#c7262e`,
      `#ffffff`,
      `police.koban.board.110`,
      12,
      `phone`,
    ),
      c(
        e + 66,
        n + 32,
        54,
        56,
        `#f2d23a`,
        `#1a1a1a`,
        `police.koban.board.fraud`,
        11,
      ),
      c(
        e + 8,
        n + 94,
        112,
        50,
        `#f0efe9`,
        `#1a1a1a`,
        `police.koban.board.wanted`,
        11,
        `wanted`,
      ),
      (r.fillStyle = `#c42`));
    for (let [t, i] of [
      [10, 34],
      [118, 34],
      [10, 96],
      [118, 96],
    ])
      r.fillRect(e + t, n + i, 3, 3);
  }
  {
    let [e, t, n, i] = u2.window;
    (a(u2.window, `#c4c9cc`),
      (r.fillStyle = `rgba(232,236,232,0.85)`),
      r.fillRect(e + 5, t + 5, n - 10, i - 10),
      (r.fillStyle = `rgba(150,156,160,0.85)`));
    for (let i = 0; i < 9; i++) r.fillRect(e + 5, t + 8 + i * 9, n - 10, 2);
    ((r.strokeStyle = `#aab0b4`),
      (r.lineWidth = 4),
      r.strokeRect(e + 2, t + 2, n - 4, i - 4));
  }
  {
    let [e, n, o, s] = u2.stand;
    (a(u2.stand, `#f4f4f0`),
      (r.fillStyle = `#1d3a7a`),
      r.fillRect(e, n, o, 30),
      (r.fillStyle = `#ffffff`),
      (r.font = `900 15px ${t}`),
      r.fillText(i(`common.facility.koban`), e + o / 2, n + 15),
      (r.fillStyle = `#c4202a`),
      (r.font = `900 17px ${t}`));
    let c = i(`police.koban.patrol`);
    (r.fillText(c.slice(0, 4), e + o / 2, n + 48),
      r.fillText(c.slice(4), e + o / 2, n + 70),
      (r.fillStyle = `#222`),
      (r.font = `700 9.5px ${t}`));
    let l = i(`police.koban.patrol-call`),
      u = Math.ceil(l.length / 2);
    (r.fillText(l.slice(0, u), e + o / 2, n + 96),
      r.fillText(l.slice(u), e + o / 2, n + 110));
  }
  {
    let [e, t, n, i] = u2.tile;
    (a(u2.tile, `#d8d1c3`), (r.fillStyle = `rgba(120,110,96,0.35)`));
    for (let a = 0; a <= n; a += 8) r.fillRect(e + a, t, 1, i);
    for (let a = 0; a <= i; a += 8) r.fillRect(e, t + a, n, 1);
  }
  {
    let [e, t, n, i] = u2.ac;
    (a(u2.ac, `#e3e4e2`),
      (r.fillStyle = `#9a9c9c`),
      r.beginPath(),
      r.arc(e + n * 0.38, t + i / 2, i * 0.36, 0, Math.PI * 2),
      r.fill(),
      (r.strokeStyle = `#5a5c5c`),
      (r.lineWidth = 2));
    for (let a = -3; a <= 3; a++)
      (r.beginPath(),
        r.moveTo(e + n * 0.38 - i * 0.34, t + i / 2 + a * 3.6),
        r.lineTo(e + n * 0.38 + i * 0.34, t + i / 2 + a * 3.6),
        r.stroke());
  }
  {
    let [e, n, o, s] = u2.box;
    (a(u2.box, `#f3f4f2`),
      (r.fillStyle = `#1b2a55`),
      (r.font = `900 30px ${t}`),
      r.fillText(i(`police.bike.box`), e + o / 2, n + 27),
      (r.fillStyle = `#c4202a`),
      r.fillRect(e + 10, n + 48, o - 20, 6));
  }
  e.forEach((e, n) => {
    let i = n * d2,
      a = p2;
    ((r.fillStyle = `#f6f5f0`),
      r.fillRect(i + 2, a, 28, f2),
      (r.strokeStyle = `#7a776f`),
      (r.lineWidth = 2),
      r.strokeRect(i + 3, 321, 26, 190));
    let o = Ar(e),
      s = Math.min(24, 178 / Math.max(1, o.length));
    ((r.fillStyle = `#141414`),
      (r.font = `800 ${Math.round(s * 0.86)}px ${t}`),
      o.forEach((e, t) => {
        let n = 328 + s * (t + 0.5);
        e.rotate
          ? (r.save(),
            r.translate(i + d2 / 2, n),
            r.rotate(Math.PI / 2),
            r.fillText(e.text, 0, 0),
            r.restore())
          : r.fillText(e.text, i + d2 / 2, n);
      }));
  });
  let o = Ee(n, { mipmaps: !0, anisotropy: 4 });
  return ((o.name = `tokyo-koban-atlas`), ke(o), o);
}
var nIe = 14472647,
  rIe = 8354676,
  iIe = 15329249,
  aIe = 9146518,
  h2 = 3159098,
  g2 = 12172995;
