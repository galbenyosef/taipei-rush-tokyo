// tokyo/assets/region-tokyo-d-kanda-DcnnktoK 12 — need
// Lines 3713-4056 of readable/tokyo/assets/region-tokyo-d-kanda-DcnnktoK.pretty.js (statement-aligned).
function qt(e, t, n) {
  let r = [],
    i = t.white(),
    a = t.uv(`sei:black`),
    o = t.uv(`sei:kawara`),
    s = t.uv(`sei:wall`),
    c = oe,
    l = 2.8,
    u = 0.5,
    d = Y.gateZ - 2.4,
    f = Y.gateZ + 2.4,
    p = [
      [c.minX + 0.2, c.minZ + 0.2, c.maxX - 0.2, c.minZ + 0.2 + u],
      [c.maxX - 0.2 - u, c.minZ + 0.2, c.maxX - 0.2, c.maxZ - 0.2],
      [c.minX + 0.2, c.maxZ - 0.2 - u, c.maxX - 0.2, c.maxZ - 0.2],
      [c.minX + 0.2, c.minZ + 0.2, c.minX + 0.2 + u, d],
      [c.minX + 0.2, f, c.minX + 0.2 + u, c.maxZ - 0.2],
    ];
  for (let [t, n, i, c] of p)
    (e.setMaterial(0.85, 0, 0, 0),
      D(e, 16777215),
      A(e, t, 0, n, i, l, c, s),
      e.setMaterial(0.7, 0, 0, 0),
      F(e, t, n, i, c, l, 0.45, i - t > c - n ? `x` : `z`, o, !1, 0.3, a),
      r.push({
        cx: (t + i) / 2,
        cz: (n + c) / 2,
        hx: (i - t) / 2,
        hz: (c - n) / 2,
        h: l,
      }));
  (Kt(e, t, c.minX + 0.45, Y.gateZ, 4.8, 1.4, 4.2, `z`, r),
    e.setMaterial(0.9, 0, 0, 0),
    D(e, 16777215));
  {
    let n = c.minX - 0.9,
      a = d - 1.4,
      o = t.uv(`sei:stone`);
    (j(e, n, a, 0, 2.3, 0.3, 0.3, -1, 0, i, o, o),
      r.push({ cx: n, cz: a, hx: 0.32, hz: 0.32, h: 2.3 }),
      O(
        e,
        c.minX + 0.18,
        f + 0.3,
        c.minX + 0.18,
        f + 1.9,
        1.1,
        1.5,
        t.uv(`sei:hours`),
      ));
  }
  (e.setMaterial(0.9, 0, 0, 0),
    D(e, 16777215),
    k(
      e,
      c.minX + 0.8,
      Y.gateZ - 1.6,
      Y.kyodan.x + 3,
      Y.gateZ + 1.6,
      0.03,
      t.uv(`sei:pave`),
    ),
    Kt(e, t, Y.nittoku.x, Y.gateZ, 3.8, 2.4, 4.6, `z`, r, `sei:gaku-nittoku`));
  let m = Y.court,
    h = 3.6,
    g = Y.kyodan.x - 3,
    _ = Y.kyodan.x + 3,
    v = [
      [m.x0, m.z0, m.x1, m.z0 + 0.6],
      [m.x0, m.z0, m.x0 + 0.6, m.z1],
      [m.x1 - 0.6, m.z0, m.x1, m.z1],
      [m.x0, m.z1 - 0.6, g, m.z1],
      [_, m.z1 - 0.6, m.x1, m.z1],
    ],
    y = t.uv(`sei:renji`);
  for (let [t, n, i, s] of v) {
    (e.setMaterial(0.5, 0.1, 0, 0),
      D(e, 16777215),
      A(e, t, 0, n, i, 0.6, s, a));
    let c = i - t > s - n,
      l = c ? i - t : s - n,
      u = Math.max(1, Math.round(l / 2.2));
    for (let r = 0; r < u; r++) {
      let a = (c ? t : n) + (l * r) / u,
        o = (c ? t : n) + (l * (r + 1)) / u;
      c
        ? (O(e, a, s, o, s, 0.6, h, y), O(e, o, n, a, n, 0.6, h, y))
        : (O(e, i, o, i, a, 0.6, h, y), O(e, t, a, t, o, 0.6, h, y));
    }
    (e.setMaterial(0.7, 0, 0, 0),
      F(e, t, n, i, s, h, 0.9, c ? `x` : `z`, o, !1, 0.7, a),
      r.push({
        cx: (t + i) / 2,
        cz: (n + s) / 2,
        hx: (i - t) / 2,
        hz: (s - n) / 2,
        h,
      }));
  }
  (Kt(e, t, Y.kyodan.x, m.z1 - 0.3, 6, 2.2, 5.6, `x`, r),
    e.setMaterial(0.9, 0, 0, 0),
    D(e, 16777215),
    k(
      e,
      m.x0 + 0.6,
      m.z0 + 0.6,
      m.x1 - 0.6,
      m.z1 - 0.6,
      0.03,
      t.uv(`sei:pave`),
    ),
    k(
      e,
      Y.kyodan.x - 1.6,
      m.z1,
      Y.kyodan.x + 1.6,
      Y.gateZ + 1.6,
      0.03,
      t.uv(`sei:pave`),
    ));
  let b = Y.hall,
    x = 7.6;
  (e.setMaterial(0.9, 0, 0, 0),
    D(e, 10131086),
    A(e, b.x0 - 1.2, 0, b.z0 - 1.2, b.x1 + 1.2, 1, b.z1 + 1.2, i));
  let S = (b.x0 + b.x1) / 2;
  for (let t = 0; t < 4; t++)
    A(
      e,
      S - 2.5,
      0,
      b.z1 + 1.2,
      S + 2.5,
      1 - t * 0.25,
      b.z1 + 1.2 + (4 - t) * 0.35,
      i,
    );
  (e.setMaterial(0.3, 0.15, 0, 0), D(e, 16777215));
  let C = t.uv(`sei:door`);
  for (let t = 0; t < 5; t++) {
    let r = b.x0 + ((b.x1 - b.x0) * t) / 5,
      i = b.x0 + ((b.x1 - b.x0) * (t + 1)) / 5;
    O(e, r, b.z1, i, b.z1, 1, 6.8, t === 2 || n > 0 ? C : a);
  }
  (O(e, b.x1, b.z0, b.x0, b.z0, 1, 6.8, a),
    O(e, b.x1, b.z1, b.x1, b.z0, 1, 6.8, a),
    O(e, b.x0, b.z0, b.x0, b.z1, 1, 6.8, a),
    A(e, b.x0 - 0.3, 6.8, b.z0 - 0.3, b.x1 + 0.3, x, b.z1 + 0.3, a));
  for (let t = 0; t <= 5; t++) {
    let n = b.x0 + ((b.x1 - b.x0) * t) / 5;
    A(e, n - 0.28, 1, b.z1 - 0.1, n + 0.28, 6.8, b.z1 + 0.5, a);
  }
  (e.setMaterial(0.65, 0.05, 0, 0),
    D(e, 16777215),
    F(e, b.x0, b.z0, b.x1, b.z1, x, 4.2, `x`, o, !0, 1.6),
    e.setMaterial(0.5, 0.3, 0, 0),
    D(e, 1973792));
  {
    let t = (b.z0 + b.z1) / 2,
      n = Math.min((b.z1 - b.z0 + 3.2) / 2, (b.x1 - b.x0 + 3.2) / 2 - 0.1),
      r = b.x0 - 1.6 + n,
      a = b.x1 + 1.6 - n;
    A(e, r, 11.75, t - 0.3, a, 12.3, t + 0.3, i);
    for (let n of [r, a])
      A(e, n - 0.45, 11.8, t - 0.35, n + 0.45, 13.2, t + 0.35, i);
  }
  (e.setMaterial(0.4, 0.3, 0, 0), D(e, 16777215));
  let ee = t.uv(`sei:gaku-taisei`);
  return (
    j(e, S, b.z1 + 0.55, 5.5, 7, 0.42, 0.05, 0, 1, i, ee, ee),
    r.push({
      cx: S,
      cz: (b.z0 + b.z1) / 2,
      hx: (b.x1 - b.x0) / 2 + 1.2,
      hz: (b.z1 - b.z0) / 2 + 1.2,
      h: 1,
    }),
    r.push({
      cx: S,
      cz: (b.z0 + b.z1) / 2,
      hx: (b.x1 - b.x0) / 2,
      hz: (b.z1 - b.z0) / 2,
      h: 11.6,
    }),
    r
  );
}
var Jt = [
    [-305, -688, 1.15],
    [-304, -678, 1],
    [-305, -670, 1.2],
    [-300, -686, 0.9],
    [-296, -676, 1.05],
    [-262, -662.5, 0.9],
    [-268, -663, 1],
    [-288, -662.5, 0.85],
  ],
  Yt = (e, t) => (n) => (t > 24 ? n >= e || n < t - 24 : n >= e && n < t),
  Xt = {
    guitar: [`kanda.gakki.guitar`, `#d0101a`, `#ffffff`],
    chuko: [`kanda.gakki.chuko`, `#ffd400`, `#d0101a`],
    kaitori: [`kanda.gakki.kaitori`, `#141414`, `#ffd400`],
    wind: [`kanda.gakki.wind-word`, `#16264a`, `#e8c86a`],
    drum: [`kanda.gakki.drum`, `#e86a10`, `#ffffff`],
    ski: [`kanda.sports.ski`, `#0a3a8a`, `#ffffff`],
    board: [`kanda.sports.snowboard`, `#e60012`, `#ffffff`],
    new: [`kanda.sports.newmodel`, `#ffffff`, `#0a3a8a`],
    curry: [`kanda.curry.word`, `#ffd400`, `#c01818`],
    gp: [`kanda.curry.gp`, `#c01818`, `#ffe14a`],
    kosho: [`kanda.books.kaitori`, `#2a1a0e`, `#f0dca8`],
  };
function Zt(e) {
  for (let [t, [n, r, i]] of Object.entries(Xt))
    e.need(`nobori:${t}`, 48, 192, we(n, r, i));
  (e.need(
    `aboard:curry`,
    96,
    128,
    De([
      `kanda.curry.word`,
      `kanda.curry.hokkai-menu`,
      `kanda.curry.hiru`,
      `kanda.curry.omori`,
    ]),
  ),
    e.need(
      `aboard:gado`,
      96,
      128,
      De([
        `kanda.gado.senbero`,
        `kanda.gado.hoplee`,
        `kanda.gado.yakiton`,
        `kanda.gado.sour`,
      ]),
    ),
    e.need(
      `aboard:gado2`,
      96,
      128,
      De([`kanda.gado.kanpai`, `kanda.gado.motsu`, `kanda.gado.hiruzake`]),
    ),
    e.need(
      `aboard:soba`,
      96,
      128,
      De([`kanda.old.teuchi`, `kanda.old.noren-m`], !1),
    ),
    e.need(
      `aboard:gakki`,
      96,
      128,
      De(
        [
          `kanda.gakki.sale`,
          `kanda.gakki.price`,
          `kanda.gakki.shiso`,
          `kanda.gakki.menzei`,
        ],
        !1,
      ),
    ));
  for (let t of [0, 1, 2]) e.need(`wagon:${t}`, 128, 64, Ie(t));
  (e.need(`price:3`, 96, 40, Le(`kanda.books.kinitsu`)),
    e.need(`price:1`, 96, 40, Le(`kanda.books.kinitsu-100`)),
    e.need(`crate:y`, 64, 40, Re(`#f0c000`, `#c01818`)),
    e.need(`crate:r`, 64, 40, Re(`#c81818`, `#ffffff`)),
    e.need(`leaves:0`, 128, 128, ze(0)),
    e.need(`leaves:1`, 128, 128, ze(1, `#4a7040`)),
    e.need(
      `plate:meidai`,
      128,
      48,
      Be(`kanda.street.meidai`, `#1e4a9a`, `#ffffff`, `kanda.street.gakkigai`),
    ),
    e.need(`wood`, 32, 32, (e, t, n, r, i) => {
      ((e.fillStyle = `#7a5530`), e.fillRect(t, n, r, i));
    }));
  for (let t of [0, 1, 2, 3]) e.need(`ema:${t}`, 256, 160, Ve(t));
}
function Qt(e, t, n) {
  let r = t.white();
  (e.setMaterial(0.5, 0.5, 0, 0),
    D(e, 15263976),
    P(e, 0, 0, 0, 0, 2.75, 0, 0.022, r),
    P(e, 0, 2.62, 0, 0.62, 2.62, 0, 0.012, r),
    e.setMaterial(0.85, 0, 0, 0),
    D(e, 16777215));
  let i = t.uv(`nobori:${n}`);
  (O(e, 0.02, 0, 0.62, 0, 0.75, 2.6, i),
    O(e, 0.62, 0, 0.02, 0, 0.75, 2.6, {
      u0: i.u1,
      v0: i.v0,
      u1: i.u0,
      v1: i.v1,
    }),
    D(e, 2763306),
    M(e, 0, 0, 0, 0.12, 0.2, r, 6));
}
function $t(e, t, n) {
  let r = t.white(),
    i = t.uv(`aboard:${n}`);
  (e.setMaterial(0.7, 0, 0.08, 1),
    D(e, 16777215),
    e.quad(
      -0.3,
      0,
      0.22,
      0.3,
      0,
      0.22,
      0.3,
      0.95,
      0.02,
      -0.3,
      0.95,
      0.02,
      i.u0,
      i.v0,
      i.u1,
      i.v1,
    ),
    e.quad(
      0.3,
      0,
      -0.22,
      -0.3,
      0,
      -0.22,
      -0.3,
      0.95,
      -0.02,
      0.3,
      0.95,
      -0.02,
      i.u0,
      i.v0,
      i.u1,
      i.v1,
    ),
    e.setMaterial(0.8, 0, 0, 0),
    D(e, 5913114),
    j(e, 0, 0, 0.93, 1, 0.31, 0.05, 0, 1, r));
}
