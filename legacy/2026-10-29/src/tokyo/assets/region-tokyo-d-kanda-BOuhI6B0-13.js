// tokyo/assets/region-tokyo-d-kanda-BOuhI6B0 13 — setmaterial
// Lines 4057-4181 of readable/tokyo/assets/region-tokyo-d-kanda-BOuhI6B0.pretty.js (statement-aligned).
function en(e, t, n) {
  let r = t.white(),
    i = t.uv(`wood`);
  (e.setMaterial(0.85, 0, 0, 0),
    D(e, 16777215),
    j(e, 0, 0, 0.12, 0.68, 0.75, 0.35, 0, 1, i));
  let a = t.uv(`wagon:${n}`);
  (D(e, 16777215),
    e.quad(
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
    D(e, 2763306));
  for (let t of [-0.6, 0.6]) M(e, t, 0.28, 0, 0.12, 0.07, r, 6);
  D(e, 16777215);
  let o = t.uv(n === 2 ? `price:1` : `price:3`);
  (P(e, 0.6, 0.86, -0.25, 0.6, 1.25, -0.25, 0.01, r),
    O(e, 0.38, -0.24, 0.82, -0.24, 1.08, 1.27, o));
}
function tn(e, t) {
  let n = t.white();
  (e.setMaterial(0.35, 0.8, 0, 0),
    D(e, 13159632),
    M(e, 0, 0, 0, 0.95, 0.26, n, 10),
    e.setMaterial(0.7, 0, 0, 0),
    D(e, 5913114),
    M(e, 0, 0, 0.95, 1, 0.42, n, 10),
    N(e, 0, 0, [0.42, 1, 0.01, 1], 10, n),
    D(e, 16777215));
  let r = t.uv(`crate:y`),
    i = t.uv(`crate:r`);
  (j(e, -0.75, 0.15, 0, 0.42, 0.23, 0.18, 0, 1, r, r, r),
    j(e, 0.75, -0.1, 0, 0.42, 0.23, 0.18, 0, 1, i, i, i),
    j(e, 0.75, -0.1, 0.42, 0.84, 0.23, 0.18, 0, 1, r, r, r));
}
function nn(e, t, n) {
  let r = t.white();
  (e.setMaterial(0.9, 0, 0, 0),
    D(e, 5916212),
    M(e, 0, 0, 0, 3.4, 0.22, r, 6, !1, 0.14),
    e.setMaterial(0.85, 0, 0, 0),
    D(e, 16777215));
  let i = t.uv(`leaves:${n}`);
  (N(
    e,
    0,
    0,
    [0.4, 2.6, 2.3, 3.4, 2.7, 4.8, 2.2, 6.2, 1.2, 7.1, 0.05, 7.4],
    8,
    i,
  ),
    N(e, 0.9, 0.6, [0.3, 4.6, 1.5, 5.4, 1.7, 6.4, 1, 7.4, 0.05, 7.8], 6, i));
}
function rn(e, t) {
  let n = t.white();
  (e.setMaterial(0.5, 0.5, 0, 0),
    D(e, 9080466),
    P(e, 0, 0, 0, 0, 2.9, 0, 0.04, n),
    e.setMaterial(0.6, 0, 0, 0),
    D(e, 16777215));
  let r = t.uv(`plate:meidai`);
  (O(e, -0.5, 0.05, 0.5, 0.05, 2.35, 2.72, r),
    O(e, 0.5, -0.05, -0.5, -0.05, 2.35, 2.72, {
      u0: r.u1,
      v0: r.v0,
      u1: r.u0,
      v1: r.v1,
    }));
}
function an(e, t) {
  (e.setMaterial(0.8, 0, 0.08, 3),
    D(e, 16777215),
    E.forEach((n, r) => {
      let i = n.x - n.w / 2 + 0.12,
        a = n.x + n.w / 2 - 0.12;
      (O(
        e,
        i,
        n.z + 0.12,
        a,
        n.z + 0.12,
        0.72,
        2.28,
        t.uv(`ema:${(r * 2) % 4}`),
      ),
        O(
          e,
          a,
          n.z - 0.12,
          i,
          n.z - 0.12,
          0.72,
          2.28,
          t.uv(`ema:${(r * 2 + 1) % 4}`),
        ));
    }));
}
function on(e) {
  let t = [],
    n = new l(2048, 3072),
    r = (e, r) => {
      (n.reset(), r(), t.push({ name: e, geo: d(n, `kanda-${e}`) }));
    };
  for (let t of Object.keys(Xt)) r(`nobori:${t}`, () => Qt(n, e, t));
  for (let t of [`curry`, `gado`, `gado2`, `soba`, `gakki`])
    r(`aboard:${t}`, () => $t(n, e, t));
  for (let t of [0, 1, 2]) r(`wagon:${t}`, () => en(n, e, t));
  r(`barrel`, () => tn(n, e));
  for (let t of [0, 1]) r(`tree:${t}`, () => nn(n, e, t));
  return (r(`plate`, () => rn(n, e)), r(`ema`, () => an(n, e)), t);
}
