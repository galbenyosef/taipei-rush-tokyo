// tokyo/assets/actors-bknSEpf2 27 — math
// Lines 8794-9138 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function kl(e, t, n, r) {
  if (Gl(e, t, n, r)) return;
  let i = (e, t, n) => new V(e, t, n),
    a = t.shoulderX * 0.62;
  if (n === `backpack`) {
    let n = Math.min(0.32, t.torsoHalfW * 2 * 0.95),
      o = 0.4,
      s = 0.13,
      c = t.shoulderY - 0.06,
      l = c - o / 2,
      u = t.backZ + s / 2 + 0.008,
      d = new B(n, o, s, 2, 3, 2);
    {
      let e = d.attributes.position;
      for (let t = 0; t < e.count; t++) {
        let r = e.getX(t) / (n / 2),
          i = e.getY(t) / (o / 2),
          a = e.getZ(t) / (s / 2),
          c = 1 - 0.12 * (r * r * a * a + i * i * r * r * 0.5);
        e.setXYZ(
          t,
          e.getX(t) * c,
          e.getY(t) * (1 - 0.06 * r * r),
          e.getZ(t) * (1 - 0.15 * r * r * (i > 0 ? i : 0)),
        );
      }
      d.computeVertexNormals();
    }
    (e.add(d, X(0, l, u), r, pl, cl, 0.8),
      e.add(
        new B(n * 0.72, o * 0.36, 0.03),
        X(0, l - o * 0.2, u + s / 2 + 0.012),
        bl(r, 0.9),
        pl,
        cl,
        0.8,
      ),
      e.add(
        new B(n * 0.7, 0.004, 0.004),
        X(0, l - o * 0.03, u + s / 2 + 0.028),
        2763306,
        pl,
        ul,
        0.4,
      ),
      e.add(
        new m(0.03, 0.006, 4, 10, Math.PI),
        X(0, c + 0.002, u),
        bl(r, 0.8),
        pl,
        cl,
        0.8,
      ));
    for (let d of [-1, 1]) {
      let f = d * a,
        p = i(f * 0.8, c - 0.02, u - s * 0.3),
        m = i(f, t.shoulderY + 0.005, (t.backZ + t.frontZ) / 2 + 0.02),
        h = i(f * 1.05, t.chestY - 0.02, t.frontZ - 0.012),
        g = i(
          d * t.torsoHalfW * 0.98,
          t.chestY - 0.16,
          (t.backZ + t.frontZ) / 2,
        ),
        _ = i(d * n * 0.42, l - o * 0.45, t.backZ + 0.01);
      (Ol(e, p, m, 0.045, bl(r, 0.85)),
        Ol(e, m, h, 0.045, bl(r, 0.85)),
        Ol(e, h, g, 0.03, bl(r, 0.85)),
        Ol(e, g, _, 0.03, bl(r, 0.85)));
    }
  } else if (n === `sling`) {
    let n = 0.1,
      i = -t.torsoHalfW * 0.55,
      a = t.hipY + 0.02,
      o = t.frontZ - 0.035,
      s = new me(n, n, 0.07, 22, 1, !1, Math.PI / 2, Math.PI);
    {
      let e = s.attributes.position;
      for (let t = 0; t < e.count; t++) {
        let r = e.getX(t),
          i = e.getY(t),
          a = e.getZ(t),
          o = Math.hypot(r, a) / n;
        e.setXYZ(t, r, i * (1 - 0.55 * o * o), a);
      }
      s.computeVertexNormals();
    }
    (e.add(s, X(i, a, o, -Math.PI / 2, 0, 0), r, pl, cl, 0.75),
      e.add(
        new B(n * 2, 0.004, 0.004),
        X(i, a, o - 0.033),
        2763306,
        pl,
        ul,
        0.4,
      ),
      Al(e, t, i, a, o, n * 0.85, bl(r, 0.85)));
  }
}
function Al(e, t, n, r, i, a, o) {
  let s = (e, t, n) => new V(e, t, n),
    c = t.shoulderX * 0.62,
    l = s(c, t.shoulderY + 0.005, (t.backZ + t.frontZ) / 2 + 0.01),
    u = s(c * 0.4, t.chestY + 0.02, t.frontZ - 0.012),
    d = s(-t.torsoHalfW * 0.3, t.chestY - 0.08, t.backZ + 0.012),
    f = s(-t.torsoHalfW * 1.02, t.hipY + 0.06, (t.backZ + t.frontZ) / 2),
    p = 0.028;
  (Ol(e, s(n + a, r + 0.01, i - 0.01), u, p, o),
    Ol(e, u, l, p, o),
    Ol(e, l, d, p, o),
    Ol(e, d, f, p, o),
    Ol(e, f, s(n - a, r + 0.01, i + 0.01), p, o));
}
var jl = (e, t, n) => new V(e, t, n),
  Ml = 14266956,
  Nl = 1974050;
function Pl(e) {
  let { min: t, max: n } = e.head;
  return {
    cx: (t.x + n.x) / 2,
    cz: (t.z + n.z) / 2,
    rx: (n.x - t.x) / 2,
    rz: (n.z - t.z) / 2,
    top: n.y,
  };
}
function Fl(e, t, n, r, i, a, o = ll) {
  let s = n.clone().sub(t);
  e.add(
    new me(r, r, 1, 8, 1),
    wl(t, s, s.length(), 1, s.length(), 1),
    i,
    a,
    o,
    0.5,
  );
}
function Il(e, t, n) {
  let r = Pl(t),
    i = r.rx + 0.006,
    a = t.eyeY + 0.005,
    o = r.top + 0.006 - a,
    s = r.cz - r.rz * 0.12,
    c = (i + o) / 2;
  return (
    e.add(
      new m(1, 0.0055 / c, 5, 28, Math.PI),
      X(r.cx, a, s, 0, 0, 0, i, o, c),
      n,
      fl,
      ll,
      0.45,
    ),
    (e) => {
      let t = jl(Math.sin(e) / i, Math.cos(e) / o, 0).normalize();
      return {
        p: jl(r.cx + i * Math.sin(e), a + o * Math.cos(e), s),
        n: t,
        rz: -Math.atan2(t.x, t.y),
      };
    }
  );
}
function Ll(e, t, n, r) {
  let i = -Math.cos(r) * Math.sin(n),
    a = Math.cos(n),
    o = Math.sin(r) * Math.sin(n);
  return {
    p: jl(e.x + t.x * i, e.y + t.y * a, e.z + t.z * o),
    n: jl(i / t.x, a / t.y, o / t.z).normalize(),
  };
}
function Rl(e, t, n, r, i, a, o) {
  e.add(new me(r, n, i, 26, 1), X(t.x, t.y + i / 2, t.z), a, o, ll, 0.3);
  let s = (e) => n + ((r - n) * e) / i;
  e.add(
    new me(s(i * 0.66) + 0.0015, s(i * 0.5) + 0.0015, i * 0.16, 26, 1, !0),
    X(t.x, t.y + i * 0.58, t.z),
    16513265,
    o,
    ll,
    0.35,
  );
  let c = n * 0.2;
  for (let n = 0; n < 2; n++) {
    let r = c * (1.1 + n * 1.7),
      i = Math.round((2 * Math.PI * s(r)) / (c * 2.1));
    for (let a = 0; a < i; a++) {
      let l = ((a + n * 0.5) / i) * Math.PI * 2,
        u = s(r) - c * 0.25;
      e.add(
        new k(c, 8, 5),
        X(t.x + u * Math.sin(l), t.y + r, t.z + u * Math.cos(l)),
        2824722,
        o,
        ll,
        0.2,
      );
    }
  }
  (e.add(
    yl(r + 0.004, r * 0.42, r + 0.004, 0, Math.PI * 0.5, 22, 5),
    X(t.x, t.y + i, t.z),
    15987695,
    o,
    ll,
    0.12,
  ),
    e.add(
      new m(r + 0.003, 0.004, 4, 26),
      X(t.x, t.y + i, t.z, Math.PI / 2),
      15132384,
      o,
      ll,
      0.2,
    ));
  let l = jl(t.x + r * 0.2, t.y + i * 0.7, t.z - r * 0.1),
    u = i * 1.15;
  e.add(
    new me(r * 0.14, r * 0.14, u, 10, 1),
    wl(l, jl(0.22, 1, -0.08).normalize(), u),
    Nl,
    o,
    ll,
    0.3,
  );
}
function zl(e, t, n) {
  let r = xl(n, 16774892, 0.6);
  (e.add(
    new k(0.028, 12, 8),
    X(t.x, t.y - 0.04, t.z, 0, 0, 0, 1, 1.15, 0.85),
    n,
    pl,
    cl,
    1,
  ),
    e.add(
      new k(0.034, 14, 10),
      X(t.x, t.y + 0.01, t.z, 0, 0, 0, 1.05, 0.95, 0.9),
      n,
      pl,
      cl,
      1,
    ));
  for (let r of [-1, 1])
    (e.add(
      new k(0.012, 10, 8),
      X(t.x + r * 0.017, t.y + 0.058, t.z + 0.004, 0, 0, -r * 0.2, 1, 2.6, 0.7),
      n,
      pl,
      cl,
      1,
    ),
      e.add(
        new k(0.0065, 8, 6),
        X(t.x + r * 0.012, t.y + 0.016, t.z - 0.03),
        1052688,
        pl,
        ll,
        0.15,
      ),
      e.add(
        new k(0.009, 8, 6),
        X(t.x + r * 0.028, t.y - 0.035, t.z - 0.004, 0, 0, r * 0.5, 1, 1.6, 1),
        n,
        pl,
        cl,
        1,
      ),
      e.add(
        new k(0.011, 8, 6),
        X(t.x + r * 0.013, t.y - 0.07, t.z - 0.006, 0, 0, 0, 1, 0.7, 1.3),
        n,
        pl,
        cl,
        1,
      ));
  e.add(
    new k(0.026, 12, 8),
    X(t.x, t.y + 0.006, t.z - 0.021, 0, 0, 0, 1, 0.78, 0.42),
    r,
    pl,
    cl,
    1,
  );
  for (let n = -4; n <= 4; n++) {
    let r = n * 0.0036;
    e.add(
      new B(0.0028, 0.0055, 0.003),
      X(t.x + r, t.y - 0.002 + r * r * 6, t.z - 0.0335),
      16777215,
      pl,
      ll,
      0.3,
    );
  }
}
function Bl(e, t) {
  return (
    e.moveTo(0, -0.9 * t),
    e.bezierCurveTo(-0.2 * t, -0.6 * t, -1 * t, -0.25 * t, -1 * t, 0.25 * t),
    e.bezierCurveTo(-1 * t, 0.7 * t, -0.45 * t, 0.95 * t, 0, 0.55 * t),
    e.bezierCurveTo(0.45 * t, 0.95 * t, 1 * t, 0.7 * t, 1 * t, 0.25 * t),
    e.bezierCurveTo(1 * t, -0.25 * t, 0.2 * t, -0.6 * t, 0, -0.9 * t),
    e
  );
}
function Vl(e, t, n, r, i, a, o, s) {
  let c = Math.abs(t.eyeL.x - t.eyeR.x);
  e.add(
    new B(Math.max(0.004, c - 2 * i + 0.004), s, s),
    X((t.eyeL.x + t.eyeR.x) / 2, n + 0.004, r),
    a,
    dl,
    o,
    0.35,
  );
  for (let c of [-1, 1]) {
    let l = jl(
        (c < 0
          ? t.eyeL.x < t.eyeR.x
            ? t.eyeL
            : t.eyeR
          : t.eyeL.x < t.eyeR.x
            ? t.eyeR
            : t.eyeL
        ).x +
          c * i,
        n + 0.004,
        r,
      ),
      u = jl(
        c * (t.earX + 0.004),
        n + 0.002,
        (t.head.min.z + t.head.max.z) / 2 + 0.01,
      ),
      d = l.distanceTo(u),
      f = new N().compose(
        l.clone().add(u).multiplyScalar(0.5),
        new v().setFromUnitVectors(jl(0, 0, 1), u.clone().sub(l).normalize()),
        jl(1, 1, 1),
      );
    e.add(new B(s, s * 1.3, d), f, a, dl, o, 0.35);
  }
}
