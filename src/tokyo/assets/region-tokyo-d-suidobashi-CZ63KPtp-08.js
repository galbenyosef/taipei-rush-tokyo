// tokyo/assets/region-tokyo-d-suidobashi-CZ63KPtp 08 — math
// Lines 2358-2579 of readable/tokyo/assets/region-tokyo-d-suidobashi-CZ63KPtp.pretty.js (statement-aligned).
function Ye(e, t, n, r, i, a) {
  let o = r.white(),
    s = t.gh ?? 4,
    c = s - 0.95,
    l = t.front ?? `glass`,
    u = r.uv(Ge(t)),
    d = Math.max(1, Math.round(n.L / 3)),
    f = l === `open` ? 0.9 : 0.35;
  (e.setMaterial(0.3, 0.1, 0.17, 17), E(e, 16053492));
  for (let t = 0; t < d; t++) {
    let r = (n.L * t) / d,
      a = (n.L * (t + 1)) / d,
      [o, s] = F(n, r + 0.08, -f),
      [l, p] = F(n, a - 0.08, -f),
      m = ((t + +!i) % 2) / 2;
    re(e, o, s, l, p, 0, c, u, m, m + 0.5, 0, 1);
  }
  if (l === `lattice`) {
    (e.setMaterial(0.7, 0, 0.22, Re | 16), E(e, 16777215));
    let t = r.uv(`lattice`);
    for (let r = 0; r < d; r++) {
      let i = (n.L * r) / d,
        a = (n.L * (r + 1)) / d;
      I(e, n, i + 0.06, a - 0.06, 0, c, -0.12, t);
    }
  }
  (e.setMaterial(0.85, 0, 0, 0), E(e, t.wall, 0.8));
  {
    let [t, r] = F(n, 0, 0),
      [i, a] = F(n, 0, -f);
    D(e, t, r, i, a, 0, c, o);
    let [s, l] = F(n, n.L, 0),
      [u, d] = F(n, n.L, -f);
    D(e, u, d, s, l, 0, c, o);
  }
  if (l !== `open`) {
    (e.setMaterial(0.6, 0.3, 0, 0), E(e, l === `lattice` ? 2759184 : 3816512));
    for (let t = 0; t <= d; t++) {
      let r = (n.L * t) / d;
      I(e, n, Math.max(0, r - 0.08), Math.min(n.L, r + 0.08), 0, c, 0, o);
    }
  } else {
    (e.setMaterial(0.6, 0, 0, 16), E(e, 6964260));
    let [t, r] = F(n, 0.3, -0.45),
      [i, a] = F(n, n.L - 0.3, 0.05);
    O(
      e,
      Math.min(t, i),
      Math.min(r, a),
      Math.max(t, i),
      Math.max(r, a),
      1.05,
      o,
    );
  }
  (e.setMaterial(0.85, 0, 0, 0), E(e, 14211284));
  {
    let [t, r] = F(n, 0, -f),
      [i, a] = F(n, n.L, 0);
    O(
      e,
      Math.min(t, i),
      Math.min(r, a),
      Math.max(t, i),
      Math.max(r, a),
      c,
      o,
      !0,
    );
  }
  let p = t.fascia;
  if (
    (e.setMaterial(
      0.5,
      0,
      p.style === `wood` || p.style === `enamel` ? 0 : 0.3,
      p.style === `wood` || p.style === `enamel` ? 0 : Re,
    ),
    E(e, 16777215),
    I(e, n, 0, n.L, c, s, 0.05, r.uv(U(p))),
    t.awning !== void 0 && i)
  ) {
    (e.setMaterial(0.8, 0, 0, 0), E(e, t.awning));
    let [r, i] = F(n, 0.1, 0),
      [a, s] = F(n, n.L - 0.1, 0),
      [l, u] = F(n, 0.1, 1.1),
      [d, f] = F(n, n.L - 0.1, 1.1);
    e.quad(
      l,
      c - 0.5,
      u,
      d,
      c - 0.5,
      f,
      a,
      c - 0.02,
      s,
      r,
      c - 0.02,
      i,
      o.u0,
      o.v0,
      o.u1,
      o.v1,
    );
    let [p, m] = F(n, 0.1, 1.1),
      [h, g] = F(n, n.L - 0.1, 1.1);
    D(e, p, m, h, g, c - 0.75, c - 0.5, o);
  }
  if (i && t.lanterns?.length) {
    let i = t.lanterns;
    for (let t = 0; t < i.length; t++) {
      let [a, o] = F(n, (n.L * (t + 0.5)) / i.length, 0.45);
      (e.setMaterial(0.6, 0, 0.42, Re), E(e, 16777215));
      let s = r.uv(`chochin:${i[t]}`);
      ie(e, a, o, c - 1.05, c - 0.1, 0.25, s);
    }
  }
}
function Xe(e, t, n) {
  if (!t.hours) return !1;
  let r = W(t, t.dir),
    i = (t.gh ?? 4) - 0.95;
  if (
    (e.setMaterial(0.7, 0.4, 0, 0),
    E(e, 16777215),
    I(e, r, 0.05, r.L - 0.05, 0, i, 0.04, n.uv(`shutter`)),
    t.corner)
  ) {
    let r = W(t, t.corner);
    I(e, r, 0.05, r.L - 0.05, 0, i, 0.04, n.uv(`shutter`));
  }
  return !0;
}
function Ze(e, t, n) {
  if (!t.noren) return !1;
  let r = W(t, t.dir),
    i = (t.gh ?? 4) - 0.95,
    a = Math.min(2.4, r.L * 0.45);
  return (
    e.setMaterial(0.9, 0, 0, 16),
    E(e, 16777215),
    I(
      e,
      r,
      r.L / 2 - a / 2,
      r.L / 2 + a / 2,
      i - 1.15,
      i - 0.05,
      0.12,
      n.uv(`noren:${t.noren.key}:${t.noren.bg}`),
    ),
    !0
  );
}
var Qe = 3.4,
  $e = 2.9,
  et = (e) => Qe + (e.floors - 1) * $e,
  tt = 3;
function nt(e, t, n, r, i) {
  z(e, t, n, r, i, `#efe6d0`);
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
function rt(e, t, n, r, i) {
  z(e, t, n, r, i, `#d8dcd8`);
  let a = e.createLinearGradient(0, n, 0, n + i);
  (a.addColorStop(0, `#eef0ea`),
    a.addColorStop(1, `#b8bcb4`),
    (e.fillStyle = a),
    e.fillRect(t, n, r, i),
    e.save(),
    (e.globalCompositeOperation = `copy`),
    (e.fillStyle = `rgba(120,124,128,0)`),
    e.fillRect(t, n, r, 3),
    e.fillRect(t, n + i - 3, r, 3),
    e.fillRect(t + r / 2 - 2, n, 4, i),
    e.fillRect(t, n, 3, i),
    e.fillRect(t + r - 3, n, 3, i));
  for (let a = 1; a < 4; a++) e.fillRect(t, n + (a * i) / 4 - 1, r, 2);
  e.restore();
}
function it(e, t) {
  (e.need(`old:kawara`, 128, 64, xe(`#4c5054`)),
    e.need(`old:kawara2`, 128, 64, xe(`#3e4246`)),
    e.need(`old:shoji`, 128, 64, nt),
    e.need(`old:glass`, 128, 96, rt),
    e.need(`old:lattice`, 128, 96, be(`#2a1a10`, `#b88a52`, 18)),
    e.need(`old:leaves`, 64, 64, Oe(7, `#3a6a30`)));
  for (let n of t) {
    (e.need(`old:boards:${n.wood}`, 128, 128, ye(n.wood)),
      n.skin === `mortar` &&
        e.need(
          `old:mortar:${n.mortar ?? `#c8c0b0`}`,
          64,
          64,
          Se(`mortar`, n.mortar ?? `#c8c0b0`),
        ),
      n.board && e.need(U(n.board), 384, 96, de(n.board)),
      n.plate &&
        e.need(`plate:${n.plate}`, 128, 48, ke(n.plate, `#e8e2d0`, `#3a3020`)),
      n.kind !== `house` && e.need(`shop:${n.kind}:0`, 320, 128, we(n.kind)),
      n.noren &&
        e.need(
          `noren:${n.noren.key}:${n.noren.bg}`,
          128,
          80,
          ge(n.noren.key, n.noren.bg, n.noren.fg),
        ));
    for (let t of n.lanterns ?? [])
      e.need(`chochinw:${t.key}:${t.body}`, 64, 96, he(t.key, t.body));
  }
}
