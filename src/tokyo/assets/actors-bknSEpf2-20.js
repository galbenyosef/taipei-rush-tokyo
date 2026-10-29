// tokyo/assets/actors-bknSEpf2 20 — math
// Lines 6661-6734 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function Hs(e, t) {
  let n = new j(t),
    r = e.attributes.position.count,
    i = new Float32Array(r * 3);
  for (let e = 0; e < r; e++)
    ((i[e * 3] = n.r), (i[e * 3 + 1] = n.g), (i[e * 3 + 2] = n.b));
  return (
    e.setAttribute(`color`, new z(i, 3)),
    e.index && (e = e.toNonIndexed()),
    e.deleteAttribute(`uv`),
    e
  );
}
function Us() {
  let e = [
      new ie(0.001, 0),
      new ie(0.11, 0),
      new ie(0.155, 0.075),
      new ie(0.14, 0.08),
      new ie(0.1, 0.018),
      new ie(0.001, 0.018),
    ],
    t = Hs(new Oe(e, 22), 14169151),
    n = new k(0.128, 16, 6, 0, Math.PI * 2, 0, Math.PI / 2);
  (n.scale(1, 0.42, 1), n.translate(0, 0.045, 0));
  let r = [t, Hs(n, 9065512)],
    i = new me(0.03, 0.03, 0.2, 10);
  (i.rotateZ(Math.PI / 2), i.translate(0, 0.55, 0), r.push(Hs(i, 16181968)));
  for (let e of [-1, 1])
    for (let t of [-1, 1]) {
      let n = new k(0.042, 10, 8);
      (n.translate(e * 0.105, 0.55, t * 0.03), r.push(Hs(n, 16181968)));
    }
  let a = Vn(r);
  return (a.computeVertexNormals(), a);
}
function Ws() {
  let e = [],
    t = (e) => {
      let t = ((e % 22) / 22) * Math.PI * 2,
        n =
          1 +
          0.16 * Math.sin(t * 3 + 0.7) +
          0.09 * Math.sin(t * 5 + 2.1) +
          0.05 * Math.sin(t * 9);
      return [Math.sin(t) * n, 0, Math.cos(t) * n];
    };
  for (let n = 0; n < 22; n++) e.push(0, 0.004, 0, ...t(n), ...t(n + 1));
  let n = new le();
  return (
    n.setAttribute(`position`, new I(e, 3)),
    n.computeVertexNormals(),
    Hs(n, 13216062)
  );
}
function Gs() {
  let e = new me(1, 0.7, 1, 6, 1, !0);
  return (e.translate(0, 0.5, 0), Hs(e, 15781714));
}
function Ks() {
  let e = [];
  for (let [t, n, r] of [
    [0.05, 0.022, 0.03],
    [0.038, 0.058, 0.026],
    [0.026, 0.087, 0.02],
  ]) {
    let i = new k(1, 14, 8);
    (i.scale(t, r, t), i.translate(0, n, 0), e.push(Hs(i, 6175516)));
  }
  let t = new l(0.014, 0.03, 8);
  (t.translate(0.004, 0.115, 0), e.push(Hs(t, 6175516)));
  let n = Vn(e);
  return (n.computeVertexNormals(), n);
}
