// tokyo/assets/region-tokyo-d-suidobashi-BBv4Djc2 10 — setmaterial
// Lines 2940-3261 of readable/tokyo/assets/region-tokyo-d-suidobashi-BBv4Djc2.pretty.js (statement-aligned).
function ot(e, t, n) {
  if (!t.noren) return !1;
  let r = P(t, t.dir);
  return (
    e.setMaterial(0.9, 0, 0, 16),
    E(e, 16777215),
    I(
      e,
      r,
      r.L / 2 - 1,
      r.L / 2 + 1,
      1.95,
      3.04,
      0.06,
      n.uv(`noren:${t.noren.key}:${t.noren.bg}`),
    ),
    !0
  );
}
function st(e, t, n) {
  if (!t.hours || t.kind === `house`) return !1;
  let r = t.corner ? [P(t, t.dir), P(t, t.corner)] : [P(t, t.dir)];
  (e.setMaterial(0.85, 0, 0, 16), E(e, 16777215, 0.7));
  for (let i of r)
    I(e, i, 0.24, i.L - 0.24, 0, 3.04, -0.06, n.uv(`old:boards:${t.wood}`));
  return !0;
}
var G = (e, t) => (n) => (t > 24 ? n >= e || n < t - 24 : n >= e && n < t);
function ct(e, t) {
  for (let [n, [r, i, a]] of Object.entries(t.nobori ?? {}))
    e.need(`nobori:${n}`, 48, 192, me(r, i, a));
  for (let [n, [r, i]] of Object.entries(t.aboard ?? {}))
    e.need(`aboard:${n}`, 96, 128, _e(r, i));
  for (let n of Object.values(t.stand ?? {})) e.need(fe(n), 52, 364, pe(n));
  for (let [n, [r, i, a, o]] of Object.entries(t.plate ?? {}))
    e.need(`kplate:${n}`, 128, 48, ke(r, i, a, o));
  for (let [n, [r, i]] of Object.entries(t.crossing ?? {}))
    e.need(`crossing:${n}`, 192, 48, Fe(r, i));
  for (let [n, [r, i, a]] of Object.entries(t.explain ?? {}))
    e.need(`explain:${n}`, 256, 160, Pe(r, i, a));
  if (t.wagons || t.shelf) {
    for (let t of [0, 1, 2]) e.need(`wagon:${t}`, 128, 64, Ee(t));
    let [n, r] = t.price ?? [`common.promo.sale`, `common.promo.sale`];
    (e.need(`price:3`, 96, 40, De(n)), e.need(`price:1`, 96, 40, De(r)));
  }
  (t.shelf && e.need(`shelf:spines`, 128, 96, lt),
    t.trees &&
      (e.need(`leaves:0`, 128, 128, Oe(0)),
      e.need(`leaves:1`, 128, 128, Oe(1, `#4a7040`))),
    e.need(`wood`, 32, 32, (e, t, n, r, i) => z(e, t, n, r, i, `#7a5530`)));
}
function lt(e, t, n, r, i) {
  z(e, t, n, r, i, `#6a4a2a`);
  let a = 7,
    o = () => (a = (a * 16807) % 2147483647) / 2147483647;
  for (let a = 0; a < 3; a++) {
    let s = n + (i / 3) * a + 3;
    z(e, t + 2, s, r - 4, i / 3 - 6, `#b89060`);
    let c = t + 4;
    for (; c < t + r - 4;) {
      let t = 2 + o() * 3;
      (z(
        e,
        c,
        s + 2,
        t - 0.5,
        i / 3 - 10,
        [
          `#e8e0d0`,
          `#c0a070`,
          `#304060`,
          `#a03020`,
          `#f4f4f0`,
          `#5a7a3a`,
          `#d8c090`,
        ][Math.floor(o() * 7)],
      ),
        (c += t));
    }
  }
}
var ut = (e) => ({ u0: e.u1, v0: e.v0, u1: e.u0, v1: e.v1 });
function dt(e, t, n) {
  let r = t.white();
  (e.setMaterial(0.5, 0.5, 0, 0),
    E(e, 15263976),
    M(e, 0, 0, 0, 0, 2.75, 0, 0.022, r),
    M(e, 0, 2.62, 0, 0.62, 2.62, 0, 0.012, r),
    e.setMaterial(0.85, 0, 0, 0),
    E(e, 16777215));
  let i = t.uv(`nobori:${n}`);
  (D(e, 0.02, 0, 0.62, 0, 0.75, 2.6, i),
    D(e, 0.62, 0, 0.02, 0, 0.75, 2.6, ut(i)),
    E(e, 2763306),
    A(e, 0, 0, 0, 0.12, 0.2, r, 6));
}
function ft(e, t, n) {
  let r = t.white(),
    i = t.uv(`aboard:${n}`);
  (e.setMaterial(0.7, 0, 0.08, 1),
    E(e, 16777215),
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
    E(e, 5913114),
    k(e, 0, 0, 0.93, 1, 0.31, 0.05, 0, 1, r));
}
function pt(e, t, n) {
  let r = t.white(),
    i = t.uv(fe(n));
  (e.setMaterial(0.5, 0, 0.35, 3),
    E(e, 16777215),
    k(e, 0, 0, 0.12, 1.32, 0.2, 0.2, 1, 0, r, i, i, !1),
    e.setMaterial(0.6, 0, 0, 0),
    E(e, 1710618),
    k(e, 0, 0, 0, 0.12, 0.23, 0.23, 1, 0, r),
    k(e, 0, 0, 1.32, 1.36, 0.21, 0.21, 1, 0, r));
}
function mt(e, t, n) {
  let r = t.white(),
    i = t.uv(`wood`);
  (e.setMaterial(0.85, 0, 0, 0),
    E(e, 16777215),
    k(e, 0, 0, 0.12, 0.68, 0.75, 0.35, 0, 1, i));
  let a = t.uv(`wagon:${n}`);
  (e.quad(
    -0.72,
    0.7,
    0.36,
    0.72,
    0.7,
    0.36,
    0.72,
    0.86,
    -0.3,
    -0.72,
    0.86,
    -0.3,
    a.u0,
    a.v0,
    a.u1,
    a.v1,
  ),
    E(e, 2763306));
  for (let t of [-0.6, 0.6]) A(e, t, 0.28, 0, 0.12, 0.07, r, 6);
  E(e, 16777215);
  let o = t.uv(n === 2 ? `price:1` : `price:3`);
  (M(e, 0.6, 0.86, -0.25, 0.6, 1.25, -0.25, 0.01, r),
    D(e, 0.38, -0.24, 0.82, -0.24, 1.08, 1.27, o));
}
function ht(e, t) {
  t.white();
  let n = t.uv(`wood`);
  (e.setMaterial(0.85, 0, 0, 0),
    E(e, 16777215),
    k(e, -0.88, 0, 0, 1.1, 0.03, 0.22, 0, 1, n),
    k(e, 0.88, 0, 0, 1.1, 0.03, 0.22, 0, 1, n),
    k(e, 0, -0.2, 0, 1.12, 0.9, 0.02, 0, 1, n));
  let r = t.uv(`shelf:spines`);
  e.quad(
    -0.86,
    0.05,
    0.2,
    0.86,
    0.05,
    0.2,
    0.86,
    1.05,
    0.1,
    -0.86,
    1.05,
    0.1,
    r.u0,
    r.v0,
    r.u1,
    r.v1,
  );
  let i = t.uv(`wagon:1`);
  (e.quad(
    -0.86,
    1.06,
    0.12,
    0.86,
    1.06,
    0.12,
    0.86,
    1.12,
    -0.18,
    -0.86,
    1.12,
    -0.18,
    i.u0,
    i.v0,
    i.u1,
    i.v1,
  ),
    E(e, 16777215),
    D(e, 0.3, 0.21, 0.8, 0.21, 0.82, 1.02, t.uv(`price:1`)));
}
function gt(e, t, n) {
  let r = t.white();
  (e.setMaterial(0.9, 0, 0, 0),
    E(e, 5916212),
    A(e, 0, 0, 0, 3.4, 0.22, r, 6, !1, 0.14),
    e.setMaterial(0.85, 0, 0, 0),
    E(e, 16777215));
  let i = t.uv(`leaves:${n}`);
  (j(
    e,
    0,
    0,
    [0.4, 2.6, 2.3, 3.4, 2.7, 4.8, 2.2, 6.2, 1.2, 7.1, 0.05, 7.4],
    8,
    i,
  ),
    j(e, 0.9, 0.6, [0.3, 4.6, 1.5, 5.4, 1.7, 6.4, 1, 7.4, 0.05, 7.8], 6, i));
}
function _t(e, t, n, r = 2.9) {
  let i = t.white();
  (e.setMaterial(0.5, 0.5, 0, 0),
    E(e, 9080466),
    M(e, 0, 0, 0, 0, r, 0, 0.04, i),
    e.setMaterial(0.6, 0, 0, 0),
    E(e, 16777215));
  let a = t.uv(n),
    o = n.startsWith(`crossing:`) ? 1.5 : 1,
    s = n.startsWith(`crossing:`) ? 0.4 : 0.37;
  (D(e, -o / 2, 0.05, o / 2, 0.05, r - 0.55, r - 0.55 + s, a),
    D(e, o / 2, -0.05, -o / 2, -0.05, r - 0.55, r - 0.55 + s, ut(a)),
    E(e, 4869714),
    k(e, 0, 0, r - 0.57, r - 0.53 + s, o / 2 + 0.03, 0.035, 0, 1, i));
}
function vt(e, t, n) {
  let r = t.white();
  (e.setMaterial(0.7, 0.2, 0, 0), E(e, 3811868));
  for (let t of [-0.62, 0.62]) k(e, t, 0, 0, 1.95, 0.05, 0.05, 0, 1, r);
  (k(e, 0, 0, 1.9, 1.98, 0.72, 0.14, 0, 1, r),
    k(e, 0, -0.02, 1.08, 1.85, 0.64, 0.035, 0, 1, r),
    e.setMaterial(0.6, 0, 0, 0),
    E(e, 16777215),
    D(e, -0.6, 0.02, 0.6, 0.02, 1.1, 1.83, t.uv(`explain:${n}`)));
}
function yt(e, t) {
  let n = t.white();
  (e.setMaterial(0.9, 0, 0, 0),
    E(e, 10131600),
    k(e, 0, 0, 0, 0.35, 0.55, 0.55, 0, 1, n),
    E(e, 9078912),
    k(e, 0, 0.75, 0, 0.32, 0.45, 0.3, 0, 1, n),
    e.setMaterial(0.45, 0.6, 0, 0),
    E(e, 2306090),
    A(e, 0, 0, 0.35, 1.25, 0.09, n, 8),
    j(e, 0, 0, [0.12, 1.25, 0.13, 1.33, 0.06, 1.42, 0.01, 1.44], 8, n),
    M(e, 0, 1, 0.06, 0, 0.92, 0.42, 0.035, n),
    M(e, 0, 1.36, -0.02, 0, 1.55, -0.58, 0.025, n),
    M(e, 0, 1.55, -0.58, 0, 1.18, -0.92, 0.02, n),
    e.setMaterial(0.6, 0.3, 0, 0),
    E(e, 4876954),
    A(e, 0.28, 0.72, 0.32, 0.6, 0.13, n, 8, !1, 0.15));
}
function bt(e, t, n) {
  let r = [],
    i = new p(2048, 3072),
    a = new Map(),
    o = (e, t) => {
      (i.reset(),
        t(),
        a.set(e, i.ni / 3),
        r.push({ name: e, geo: g(i, `${n}-${e}`) }));
    };
  for (let n of Object.keys(t.nobori ?? {}))
    o(`nobori:${n}`, () => dt(i, e, n));
  for (let n of Object.keys(t.aboard ?? {}))
    o(`aboard:${n}`, () => ft(i, e, n));
  for (let [n, r] of Object.entries(t.stand ?? {}))
    o(`stand:${n}`, () => pt(i, e, r));
  if (t.wagons) for (let t of [0, 1, 2]) o(`wagon:${t}`, () => mt(i, e, t));
  if ((t.shelf && o(`shelf`, () => ht(i, e)), t.trees))
    for (let t of [0, 1]) o(`tree:${t}`, () => gt(i, e, t));
  for (let n of Object.keys(t.plate ?? {}))
    o(`plate:${n}`, () => _t(i, e, `kplate:${n}`));
  for (let n of Object.keys(t.crossing ?? {}))
    o(`crossing:${n}`, () => _t(i, e, `crossing:${n}`, 4.2));
  for (let n of Object.keys(t.explain ?? {}))
    o(`explain:${n}`, () => vt(i, e, n));
  return (t.pump && o(`pump`, () => yt(i, e)), { models: r, tris: a });
}
var xt = (e, [t, n]) => (n > 24 ? e >= t || e < n - 24 : e >= t && e < n);
