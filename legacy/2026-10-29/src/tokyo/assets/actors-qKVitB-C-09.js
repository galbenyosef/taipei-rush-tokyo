// tokyo/assets/actors-qKVitB-C 09 — math
// Lines 2969-3255 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function Qa(e, t, n, r, i) {
  let a = new L(),
    o = new R();
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
function $a(e, t, n, r) {
  if (n === `capback`) {
    let { min: n, max: i } = t.head;
    ((e.post = Xa(
      (n.x + i.x) / 2,
      t.eyeY,
      (n.z + i.z) / 2,
      0,
      Math.PI,
      0,
    ).premultiply(new R().makeTranslation(0, 0.006, 0))),
      $a(e, t, `cap`, r),
      (e.post = null));
    return;
  }
  if (_o(e, t, n, r)) return;
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
      Ka(c + 0.01, i, l + 0.01, 0, Math.PI * 0.5, 24, 8, 0.6),
      G(o, n, s, a),
      r,
      za,
      Fa,
      0.85,
    ),
      e.add(
        new _(0.009, 8, 4),
        G(o, u - 0.002, s + i * Math.sin(0.1)),
        r,
        za,
        Fa,
        0.85,
      ));
    let d = c * 0.92,
      f = new w(1, 1, 0.007, 20, 1, !1, Math.PI * 0.5, Math.PI);
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
    (e.add(f, G(o, m, p, -0.14), r, za, Fa, 0.8),
      e.add(f.clone(), G(o, m - 0.006, p, -0.14), qa(r, 0.55), za, Fa, 0.9),
      e.add(
        new F(c * 0.7, 0.014, 0.004),
        G(o, n + 0.03, s + l + 0.012),
        qa(r, 0.6),
        za,
        Ia,
        0.6,
      ));
  } else if (n === `bucket`) {
    let n = t.eyeY + 0.04,
      i = u - n;
    e.add(
      Ka(c * 1.04, i, l * 1.04, 0, Math.PI * 0.5, 24, 8, 0.5),
      G(o, n, s),
      r,
      za,
      Fa,
      0.9,
    );
    let a = new w(c * 1.02, c * 1.55, 0.05, 28, 1, !0);
    e.add(a, G(o, n - 0.018, s, 0, 0, 0, 1, 1, l / c), r, za, Fa, 0.9);
    let d = Ya(new w(c * 1.015, c * 1.545, 0.05, 28, 1, !0));
    (e.add(
      d,
      G(o, n - 0.018, s, 0, 0, 0, 1, 1, l / c),
      qa(r, 0.8),
      za,
      Fa,
      0.9,
    ),
      e.add(
        new M(1, 0.0016, 3, 32),
        G(o, n - 0.03, s, Math.PI / 2, 0, 0, c * 1.36, l * 1.36, 1),
        qa(r, 0.75),
        za,
        Fa,
        0.9,
      ),
      e.add(
        new M(1, 0.0018, 3, 32),
        G(o, n + 0.006, s, Math.PI / 2, 0, 0, c * 1.025, l * 1.025, 1),
        qa(r, 0.75),
        za,
        Fa,
        0.9,
      ));
  } else if (n === `beanie`) {
    let n = t.eyeY + 0.02,
      i = u + 0.012 - n;
    e.add(
      Ka(c + 0.012, i, l + 0.012, 0, Math.PI * 0.5, 24, 9, 0.45),
      G(o, n, s),
      r,
      za,
      Fa,
      0.95,
    );
    let a = new w(1, 1, 0.05, 32, 1, !0);
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
      G(o, n + 0.022, s, 0, 0, 0, c + 0.012, 1, l + 0.012),
      qa(r, 0.92),
      za,
      Fa,
      0.95,
    );
  }
}
function eo(e, t, n, r) {
  if (n === `heart` || n === `y2k`) return go(e, t, n, r);
  let i = t.faceZ - 0.008,
    a = t.eyeY - 0.002,
    o = n === `sun`,
    s = o ? 0.026 : 0.022,
    c = o ? r : n === `round` && r === fa.yellow.hex ? 13214282 : r,
    l = !o;
  for (let n of [t.eyeL, t.eyeR]) {
    let t = n.x;
    (e.add(
      new M(s, o ? 0.0032 : 0.0016, 5, 22),
      G(t, a, i, 0, 0, 0, o ? 1.12 : 1, 1, 1),
      c,
      Ra,
      l ? La : Ia,
      0.35,
    ),
      o &&
        e.add(
          new Pe(s, 22),
          G(t, a, i + 5e-4, 0, Math.PI, 0, 1.12, 1, 1),
          723982,
          Ra,
          Ia,
          0.06,
        ),
      o &&
        e.add(
          new Pe(s, 22),
          G(t, a, i - 5e-4, 0, 0, 0, 1.12, 1, 1),
          1382428,
          Ra,
          Ia,
          0.04,
        ));
  }
  let u = Math.abs(t.eyeL.x - t.eyeR.x);
  e.add(
    new F(Math.max(0.004, u - 2 * s * (o ? 1.12 : 1)), 0.003, 0.003),
    G((t.eyeL.x + t.eyeR.x) / 2, a + s * 0.35, i),
    c,
    Ra,
    l ? La : Ia,
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
      f = new L(r, a + 0.004, i),
      p = new L(u, a + 0.002, d),
      m = f.distanceTo(p),
      h = new R().compose(
        f.clone().add(p).multiplyScalar(0.5),
        new I().setFromUnitVectors(
          new L(0, 0, 1),
          p.clone().sub(f).normalize(),
        ),
        new L(1, 1, 1),
      );
    e.add(
      new F(o ? 0.004 : 0.0022, o ? 0.006 : 0.0025, m),
      h,
      c,
      Ra,
      l ? La : Ia,
      0.35,
    );
  }
}
function to(e, t, n, r, i) {
  let a = t.distanceTo(n),
    o = new R().compose(
      t.clone().add(n).multiplyScalar(0.5),
      new I().setFromUnitVectors(new L(0, 1, 0), n.clone().sub(t).normalize()),
      new L(1, 1, 1),
    );
  e.add(new F(r, a, 0.004), o, i, Ba, Fa, 0.85);
}
