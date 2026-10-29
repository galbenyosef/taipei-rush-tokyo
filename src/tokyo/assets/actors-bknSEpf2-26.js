// tokyo/assets/actors-bknSEpf2 26 — math
// Lines 8484-8793 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function Sl(e) {
  let t = e.index;
  for (let e = 0; e < t.count; e += 3) {
    let n = t.getX(e + 1);
    (t.setX(e + 1, t.getX(e + 2)), t.setX(e + 2, n));
  }
  e.attributes.normal || e.computeVertexNormals();
  let n = e.attributes.normal;
  for (let e = 0; e < n.count; e++)
    n.setXYZ(e, -n.getX(e), -n.getY(e), -n.getZ(e));
  return e;
}
var Cl = (e, t, n, r, i, a) =>
    new N()
      .makeTranslation(e, t, n)
      .multiply(X(0, 0, 0, r, i, a))
      .multiply(new N().makeTranslation(-e, -t, -n)),
  wl = (e, t, n, r = 1, i = 1, a = 1) =>
    new N().compose(
      e.clone().addScaledVector(t, n / 2),
      new v().setFromUnitVectors(new V(0, 1, 0), t.clone().normalize()),
      new V(r, i, a),
    );
function Tl(e, t, n, r, i) {
  let a = new V(),
    o = new N();
  (e.updateMatrixWorld(!0), o.copy(e.matrixWorld).invert());
  let s = (n.eyeL.y + n.eyeR.y) / 2,
    c = 1 / 0,
    l = 0,
    u = -1 / 0,
    d = 1 / 0,
    f = 0,
    p = n.chest.y + 0.06,
    m = n.neck.y - 0.1,
    h = 1 / 0;
  for (let e of t) {
    let t = /-head$/.test(e.name),
      r = /-body$/.test(e.name);
    if (!t && !r) continue;
    let i = e.geometry.attributes.position.count;
    for (let g = 0; g < i; g++)
      (e.getVertexPosition(g, a),
        a.applyMatrix4(e.matrixWorld).applyMatrix4(o),
        t &&
          Math.abs(a.y - s) < 0.025 &&
          (Math.abs(a.x) < 0.05 && (c = Math.min(c, a.z)),
          (l = Math.max(l, Math.abs(a.x)))),
        r &&
          Math.abs(a.y - p) < 0.05 &&
          Math.abs(a.x) < 0.12 &&
          ((u = Math.max(u, a.z)), (d = Math.min(d, a.z))),
        r &&
          Math.abs(a.y - p) < 0.03 &&
          Math.abs(a.z - n.chest.z) < 0.08 &&
          (f = Math.max(f, Math.abs(a.x))),
        r &&
          Math.abs(a.y - m) < 0.02 &&
          Math.abs(a.x) < 0.06 &&
          (h = Math.min(h, a.z)));
  }
  return (
    Number.isFinite(c) || (c = Math.min(n.eyeL.z, n.eyeR.z) - 0.01),
    (l ||= (r.max.x - r.min.x) / 2),
    Number.isFinite(u) || (u = n.chest.z + 0.11),
    Number.isFinite(d) || (d = n.chest.z - 0.11),
    (f ||= Math.abs(n.armL.x - n.armR.x) / 2),
    {
      head: r,
      eyeY: s,
      eyeL: n.eyeL.clone(),
      eyeR: n.eyeR.clone(),
      faceZ: c,
      earX: l,
      backZ: u,
      frontZ: d,
      chestY: p,
      torsoHalfW: Math.min(f, Math.abs(n.armL.x - n.armR.x) / 2),
      shoulderY: Math.max(n.armL.y, n.armR.y) + 0.04,
      shoulderX: Math.abs(n.armL.x - n.armR.x) / 2,
      hipY: n.hips.y,
      neck: n.neck.clone(),
      collarZ: Number.isFinite(h) ? h : Math.max(d, n.neck.z - 0.09),
      female: i,
    }
  );
}
function El(e, t, n, r) {
  if (n === `capback`) {
    let { min: n, max: i } = t.head;
    ((e.post = Cl(
      (n.x + i.x) / 2,
      t.eyeY,
      (n.z + i.z) / 2,
      0,
      Math.PI,
      0,
    ).premultiply(new N().makeTranslation(0, 0.006, 0))),
      El(e, t, `cap`, r),
      (e.post = null));
    return;
  }
  if (Ul(e, t, n, r)) return;
  let { min: i, max: a } = t.head,
    o = (i.x + a.x) / 2,
    s = (i.z + a.z) / 2,
    c = (a.x - i.x) / 2 + 0.012,
    l = (a.z - i.z) / 2 + 0.012,
    u = a.y + 0.01;
  if (n === `cap`) {
    let n = t.eyeY + 0.052,
      i = u - n,
      a = -0.1;
    (e.add(
      yl(c + 0.01, i, l + 0.01, 0, Math.PI * 0.5, 24, 8, 0.6),
      X(o, n, s, a),
      r,
      fl,
      cl,
      0.85,
    ),
      e.add(
        new k(0.009, 8, 4),
        X(o, u - 0.002, s + i * Math.sin(0.1)),
        r,
        fl,
        cl,
        0.85,
      ));
    let d = c * 0.92,
      f = new me(1, 1, 0.007, 20, 1, !1, Math.PI * 0.5, Math.PI);
    {
      let e = f.attributes.position;
      for (let t = 0; t < e.count; t++) {
        let n = e.getX(t),
          r = e.getZ(t);
        e.setXYZ(t, n * d, e.getY(t) - n * n * 0.018, r * 0.075);
      }
      f.computeVertexNormals();
    }
    let p = s - (l + 0.01) * Math.cos(a) + 0.004,
      m = n + (l + 0.01) * Math.sin(a) + 0.003;
    (e.add(f, X(o, m, p, -0.14), r, fl, cl, 0.8),
      e.add(f.clone(), X(o, m - 0.006, p, -0.14), bl(r, 0.55), fl, cl, 0.9),
      e.add(
        new B(c * 0.7, 0.014, 0.004),
        X(o, n + 0.03, s + l + 0.012),
        bl(r, 0.6),
        fl,
        ll,
        0.6,
      ));
  } else if (n === `bucket`) {
    let n = t.eyeY + 0.04,
      i = u - n;
    e.add(
      yl(c * 1.04, i, l * 1.04, 0, Math.PI * 0.5, 24, 8, 0.5),
      X(o, n, s),
      r,
      fl,
      cl,
      0.9,
    );
    let a = new me(c * 1.02, c * 1.55, 0.05, 28, 1, !0);
    e.add(a, X(o, n - 0.018, s, 0, 0, 0, 1, 1, l / c), r, fl, cl, 0.9);
    let d = Sl(new me(c * 1.015, c * 1.545, 0.05, 28, 1, !0));
    (e.add(
      d,
      X(o, n - 0.018, s, 0, 0, 0, 1, 1, l / c),
      bl(r, 0.8),
      fl,
      cl,
      0.9,
    ),
      e.add(
        new m(1, 0.0016, 3, 32),
        X(o, n - 0.03, s, Math.PI / 2, 0, 0, c * 1.36, l * 1.36, 1),
        bl(r, 0.75),
        fl,
        cl,
        0.9,
      ),
      e.add(
        new m(1, 0.0018, 3, 32),
        X(o, n + 0.006, s, Math.PI / 2, 0, 0, c * 1.025, l * 1.025, 1),
        bl(r, 0.75),
        fl,
        cl,
        0.9,
      ));
  } else if (n === `beanie`) {
    let n = t.eyeY + 0.02,
      i = u + 0.012 - n;
    e.add(
      yl(c + 0.012, i, l + 0.012, 0, Math.PI * 0.5, 24, 9, 0.45),
      X(o, n, s),
      r,
      fl,
      cl,
      0.95,
    );
    let a = new me(1, 1, 0.05, 32, 1, !0);
    {
      let e = a.attributes.position;
      for (let t = 0; t < e.count; t++) {
        let n = Math.atan2(e.getZ(t), e.getX(t)),
          r = 1 + 0.012 * Math.cos(n * 16);
        e.setXYZ(t, e.getX(t) * r, e.getY(t), e.getZ(t) * r);
      }
      a.computeVertexNormals();
    }
    e.add(
      a,
      X(o, n + 0.022, s, 0, 0, 0, c + 0.012, 1, l + 0.012),
      bl(r, 0.92),
      fl,
      cl,
      0.95,
    );
  }
}
function Dl(e, t, n, r) {
  if (n === `heart` || n === `y2k`) return Hl(e, t, n, r);
  let i = t.faceZ - 0.008,
    a = t.eyeY - 0.002,
    o = n === `sun`,
    s = o ? 0.026 : 0.022,
    c = o ? r : n === `round` && r === Lc.yellow.hex ? 13214282 : r,
    l = !o;
  for (let n of [t.eyeL, t.eyeR]) {
    let t = n.x;
    (e.add(
      new m(s, o ? 0.0032 : 0.0016, 5, 22),
      X(t, a, i, 0, 0, 0, o ? 1.12 : 1, 1, 1),
      c,
      dl,
      l ? ul : ll,
      0.35,
    ),
      o &&
        e.add(
          new ae(s, 22),
          X(t, a, i + 5e-4, 0, Math.PI, 0, 1.12, 1, 1),
          723982,
          dl,
          ll,
          0.06,
        ),
      o &&
        e.add(
          new ae(s, 22),
          X(t, a, i - 5e-4, 0, 0, 0, 1.12, 1, 1),
          1382428,
          dl,
          ll,
          0.04,
        ));
  }
  let u = Math.abs(t.eyeL.x - t.eyeR.x);
  e.add(
    new B(Math.max(0.004, u - 2 * s * (o ? 1.12 : 1)), 0.003, 0.003),
    X((t.eyeL.x + t.eyeR.x) / 2, a + s * 0.35, i),
    c,
    dl,
    l ? ul : ll,
    0.35,
  );
  for (let n of [-1, 1]) {
    let r =
        (n < 0
          ? t.eyeL.x < t.eyeR.x
            ? t.eyeL
            : t.eyeR
          : t.eyeL.x < t.eyeR.x
            ? t.eyeR
            : t.eyeL
        ).x +
        n * s * (o ? 1.12 : 1),
      u = n * (t.earX + 0.004),
      d = (t.head.min.z + t.head.max.z) / 2 + 0.01,
      f = new V(r, a + 0.004, i),
      p = new V(u, a + 0.002, d),
      m = f.distanceTo(p),
      h = new N().compose(
        f.clone().add(p).multiplyScalar(0.5),
        new v().setFromUnitVectors(
          new V(0, 0, 1),
          p.clone().sub(f).normalize(),
        ),
        new V(1, 1, 1),
      );
    e.add(
      new B(o ? 0.004 : 0.0022, o ? 0.006 : 0.0025, m),
      h,
      c,
      dl,
      l ? ul : ll,
      0.35,
    );
  }
}
function Ol(e, t, n, r, i) {
  let a = t.distanceTo(n),
    o = new N().compose(
      t.clone().add(n).multiplyScalar(0.5),
      new v().setFromUnitVectors(new V(0, 1, 0), n.clone().sub(t).normalize()),
      new V(1, 1, 1),
    );
  e.add(new B(r, a, 0.004), o, i, pl, cl, 0.85);
}
