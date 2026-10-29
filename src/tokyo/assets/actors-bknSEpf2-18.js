// tokyo/assets/actors-bknSEpf2 18 — math
// Lines 5952-6065 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function gs(e, t, n) {
  let r = cs(),
    i = new re();
  i.name = `dog-helmet`;
  let a = e.headC.clone().sub(t),
    o = e.skull.x * 1.1,
    s = e.skull.y * 1.08,
    c = e.skull.z * 1.1,
    l = Math.PI * 0.43,
    u = new d(new k(1, 28, 12, 0, Math.PI * 2, 0, l), r.helmet);
  (u.scale.set(o, s, c), u.position.copy(a), (u.castShadow = !0), i.add(u));
  let f = (e, t) => {
      let n = e / o,
        r = t / s;
      return -c * Math.sqrt(Math.max(0.02, 1 - n * n - r * r));
    },
    p = new d(new m(1, 0.03, 6, 32, Math.PI), r.dark);
  (p.scale.set(o * 1.004, s * 1.004, c * 1.004),
    p.position.copy(a),
    (p.rotation.y = Math.PI / 2),
    i.add(p));
  for (let t = 0; t < e.earBases.length; t++) {
    let n = e.earBases[t].clone().sub(e.headC),
      l = e.earDirs[t];
    for (
      let t = 0;
      t < 40 && !((n.x / o) ** 2 + (n.y / s) ** 2 + (n.z / c) ** 2 >= 1);
      t++
    )
      n.addScaledVector(l, e.skull.y * 0.025);
    let u = new d(new m(e.earR * 0.95, e.earR * 0.2, 6, 16), r.dark);
    (u.position.copy(n).add(a),
      u.quaternion.setFromUnitVectors(new V(0, 0, 1), l),
      i.add(u));
  }
  let h = Math.cos(l) * s,
    g = -Math.sin(l) * c,
    _ = new d(
      new me(o * 0.7, o * 0.7, s * 0.04, 20, 1, !1, -Math.PI * 0.5, Math.PI),
      r.helmet,
    );
  (_.scale.set(1, 1, 0.42),
    _.position.copy(a).add(new V(0, h - s * 0.02, g + c * 0.06)),
    _.rotation.set(-0.18, Math.PI, 0),
    i.add(_));
  let v = s * 0.6;
  for (let t of [-1, 1]) {
    let n = t * o * 0.3,
      s = a.clone().add(new V(n, v, f(n, v) - e.eyeR * 0.12)),
      c = new Pe(-0.75, t * 0.25, 0),
      l = new d(new m(e.eyeR * 0.95, e.eyeR * 0.22, 8, 18), r.dark);
    (l.position.copy(s), l.rotation.copy(c), i.add(l));
    let u = new d(new k(e.eyeR * 0.9, 14, 8), r.lens);
    (u.scale.set(1, 1, 0.35), u.position.copy(s), u.rotation.copy(c), i.add(u));
  }
  let y = new d(new m(o * 0.9, o * 0.028, 5, 24, Math.PI), r.strap);
  return (
    y.position.copy(a).add(new V(0, h * 0.6, -c * 0.1)),
    y.rotation.set(0.2, 0, Math.PI),
    y.scale.set(1, 0.95, 1),
    i.add(y),
    i
  );
}
function _s(e, t) {
  let n = cs(),
    r = new re();
  r.name = `dog-shades`;
  let i = e.eyeR * 1.35;
  for (let a of e.eyes) {
    let e = new d(new me(i, i, i * 0.18, 24), n.lens);
    ((e.rotation.x = Math.PI / 2),
      e.position
        .copy(a)
        .sub(t)
        .add(new V(0, i * 0.05, -i * 0.42)),
      r.add(e));
    let o = new d(new m(i, i * 0.12, 6, 24), n.dark);
    (o.position.copy(e.position).add(new V(0, 0, -i * 0.05)), r.add(o));
  }
  let a = e.eyes[0].clone().sub(t),
    o = e.eyes[1].clone().sub(t),
    s = new d(
      new m(Math.abs(o.x - a.x) * 0.5 - i, i * 0.1, 5, 10, Math.PI),
      n.dark,
    );
  (s.position.set(0, a.y + i * 0.35, a.z - i * 0.5), r.add(s));
  for (let e of [a, o]) {
    let t = new d(new B(i * 0.12, i * 0.12, i * 2.2), n.dark);
    (t.position.set(
      e.x + Math.sign(e.x) * i * 0.95,
      e.y + i * 0.2,
      e.z + i * 0.6,
    ),
      (t.rotation.y = Math.sign(e.x) * 0.25),
      r.add(t));
  }
  return r;
}
var vs = 28,
  ys = Math.PI * 2,
  bs = [0.25, 0.75, 0, 0.5],
  xs = [0, 0.5, 0.5, 0],
  Ss = [0.55, 0.65, 0, 0.1];
function Cs(e, t, n) {
  let r = Math.min(1, Math.max(0, (n - e) / (t - e)));
  return r * r * (3 - 2 * r);
}
function ws(e) {
  return e - Math.floor(e);
}
function Ts(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
