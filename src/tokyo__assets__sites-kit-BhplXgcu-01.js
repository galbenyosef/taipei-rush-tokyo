// tokyo__assets__sites-kit-BhplXgcu 01 — pants
// Lines 1-347 of readable/tokyo__assets__sites-kit-BhplXgcu.pretty.js (statement-aligned).
function e(e, t, n, r = 0, i = 1) {
  let a = (e.u1 - e.u0) / n,
    o = (e.v1 - e.v0) / i;
  return {
    u0: e.u0 + a * t,
    u1: e.u0 + a * (t + 1),
    v1: e.v1 - o * r,
    v0: e.v1 - o * (r + 1),
  };
}
var t = { m1: 0, f1: 1, old: 2, m2: 3, f2: 4, kid: 5, gold: 6, monk: 7 },
  n = `fig-faces`,
  r = 51,
  i = 55,
  a = 59,
  o = {
    casual: [
      { shirt: 15921902, pants: 3820138 },
      { shirt: 2973578, pants: 2829104 },
      { shirt: 13126460, pants: 4872818 },
      { shirt: 6982234, pants: 13220249 },
      { shirt: 15255898, pants: 3159100 },
      { shirt: 9067162, pants: 2763310 },
      { shirt: 4212304, pants: 10134704 },
      { shirt: 15775424, pants: 3820138 },
    ],
    office: [
      { shirt: 16119287, pants: 2303534 },
      { shirt: 13228266, pants: 2830138 },
      { shirt: 3159100, pants: 3159100 },
    ],
    student: [
      { shirt: 16185074, pants: 2046570 },
      { shirt: 16185074, pants: 2771514 },
      { shirt: 10139864, pants: 2894898 },
    ],
    elder: [
      { shirt: 9075306, pants: 4867136, hair: 10131088 },
      { shirt: 5925498, pants: 3815998, hair: 12104878 },
      { shirt: 12093034, pants: 3947064, hair: 9078400 },
    ],
    vendor: [
      { shirt: 16053488, pants: 2763310, apron: 2775690 },
      { shirt: 6978186, pants: 2894896, apron: 9054762 },
      { shirt: 16053488, pants: 3816e3, apron: 15262416 },
    ],
    monk: [
      { shirt: 9071162, pants: 9071162, hair: 14133636 },
      { shirt: 5917242, pants: 5917242, hair: 14133636 },
    ],
    tourist: [
      { shirt: 16747066, pants: 14272937 },
      { shirt: 3846361, pants: 15790314 },
      { shirt: 15790314, pants: 5929626 },
      { shirt: 15223402, pants: 2763312 },
    ],
    worker: [
      { shirt: 3824266, pants: 2896960, apron: 16751146 },
      { shirt: 6974042, pants: 3815988 },
    ],
  },
  s = [14858646, 14265736, 15517352, 13212276, 15122334],
  c = [1709330, 2761760, 2037523, 3810840, 1315087];
function l(e, t = e.art) {
  let r = e.atlas.r(n);
  return { g: t, faces: r === e.atlas.white ? null : r, q: e.q, rng: e.rng };
}
function u(e, t) {
  let n = l(e);
  return (t.rng && (n.rng = t.rng), f(n, t));
}
function d(e, t) {
  let n;
  if (!e) n = o.casual[Math.floor(t.next() * o.casual.length)];
  else if (typeof e == `string`) {
    let r = o[e] ?? o.casual;
    n = r[Math.floor(t.next() * r.length)];
  } else n = e;
  return {
    shirt: n.shirt,
    pants: n.pants,
    skin: n.skin ?? s[Math.floor(t.next() * s.length)],
    hair: n.hair ?? c[Math.floor(t.next() * c.length)],
    shoes: n.shoes ?? (t.next() < 0.3 ? 15790314 : 2829102),
    apron: n.apron,
  };
}
function f(n, o) {
  let s = n.g,
    c = n.rng,
    l = s.icount,
    u = s.vcount,
    f = o.pose ?? `stand`,
    h = o.lod ?? n.q,
    g = d(o.palette ?? (f === `cook` ? `vendor` : void 0), c),
    _ = typeof o.palette == `string` ? o.palette : ``,
    v = o.face;
  v === void 0 &&
    (v =
      _ === `monk`
        ? t.monk
        : _ === `elder`
          ? t.old
          : [t.m1, t.f1, t.m2, t.f2, t.f1, t.m1][Math.floor(c.next() * 6)]);
  let y = v === t.f1 || v === t.f2,
    b = o.long ?? (y && _ !== `monk`),
    x = n.faces ? e(n.faces, Math.max(0, Math.min(7, v)), 8) : null,
    S = (o.scale ?? 1) * (y ? 0.95 : 1) * (0.96 + c.next() * 0.08),
    C = `down`,
    w = o.hold;
  if (f === `cook`) C = `fore`;
  else if (f === `pray`) C = `pray`;
  else if (f === `phone`) C = `phone`;
  else if (f === `read`) C = `book`;
  else if (f === `carry`) C = `tray`;
  else if (f === `point`) C = `point`;
  else if (f === `lean` || f === `write`) C = `fore`;
  else if (f === `queue`) {
    let e = c.next();
    e < 0.35
      ? (C = `phone`)
      : e < 0.5 &&
        w === void 0 &&
        ((C = `fore`),
        (w = [16049864, 13777450, 15263968][Math.floor(c.next() * 3)]));
  } else w !== void 0 && (C = `fore`);
  s.push()
    .translate(o.x, o.y ?? 0, o.z)
    .rotateY(-(o.rot ?? 0))
    .scale(S);
  let T = f === `sit` || f === `write` || f === `squat`,
    E = o.seatH ?? (f === `squat` ? 0.26 : 0.45),
    D =
      f === `bow`
        ? 0.45
        : f === `lean`
          ? 0.24
          : f === `write`
            ? 0.18
            : f === `squat`
              ? 0.12
              : 0,
    O = T ? E + 0.05 : 0.9,
    k = O + 0.52,
    A = k + 0.2;
  if (h === `low`) {
    if ((s.col(g.pants), T))
      (s.box(-0.16, O - 0.14, -0.42, 0.16, O, 0.08, 39),
        s.box(-0.15, 0, -0.48, 0.15, O - 0.14, -0.3, r));
    else {
      let e = f === `walk` ? 0.08 : 0;
      s.box(-0.17, 0, -0.08 - e, 0.17, O, 0.08 + e, r);
    }
    (D && s.push().translate(0, O, 0).rotateX(D).translate(0, -O, 0),
      s.col(g.apron ?? g.shirt),
      s.box(-0.22, O - 0.06, -0.12, 0.22, k, 0.12, i),
      C !== `down` &&
        (s.col(g.skin),
        s.box(-0.16, k - 0.36, -0.36, 0.16, k - 0.26, -0.1, 39),
        (C === `tray` || C === `book`) &&
          (s.col(C === `tray` ? 14209732 : 13128762),
          s.box(-0.17, k - 0.25, -0.4, 0.17, k - 0.22, -0.16, i))),
      p(s, x, g, A, 6, 4, b, !1),
      D && s.pop());
  } else {
    if (T) {
      s.col(g.pants);
      for (let e of [-1, 1])
        (s.box(e * 0.1 - 0.075, O - 0.15, -0.44, e * 0.1 + 0.075, O, 0.04, 39),
          s.box(
            e * 0.1 - 0.06,
            0.08,
            -0.48,
            e * 0.1 + 0.06,
            O - 0.15,
            -0.34,
            r,
          ),
          s.col(g.shoes),
          s.box(e * 0.1 - 0.055, 0, -0.58, e * 0.1 + 0.055, 0.09, -0.32, i),
          s.col(g.pants));
    } else
      for (let e of [-1, 1]) {
        let t = f === `walk` ? e * 0.32 : 0;
        (s
          .push()
          .translate(e * 0.1, O, 0)
          .rotateX(t),
          s.col(g.pants),
          s.box(-0.07, 0.08 - O, -0.075, 0.07, 0, 0.075, r),
          s.col(g.shoes),
          s.box(-0.055, -O, -0.17, 0.055, 0.09 - O, 0.08, i),
          s.pop());
      }
    (D && s.push().translate(0, O, 0).rotateX(D).translate(0, -O, 0),
      s.push().scale(1, 1, 0.62),
      s.col(g.pants),
      s.cyl(0, 0, 0.17, 0.175, O - 0.12, O + 0.04, 8, !1),
      s.col(g.shirt),
      s.cyl(0, 0, 0.18, 0.205, O + 0.04, k, 8, !0),
      s.pop(),
      g.apron !== void 0 &&
        (s.col(g.apron),
        s.rectZ(-0.15, O - 0.35, 0.15, k - 0.12, -0.132),
        s.rectZ(-0.15, O - 0.35, 0.15, k - 0.12, -0.13, 1)));
    for (let e of [-1, 1]) {
      if (
        (s.push().translate(e * 0.235, k - 0.03, 0),
        C === `down` || ((C === `phone` || C === `point`) && e < 0))
      )
        (s.rotateZ(e * 0.07).rotateX(f === `walk` ? -e * 0.3 : 0),
          s.col(g.shirt),
          s.box(-0.05, -0.3, -0.05, 0.05, 0, 0.05, a),
          s.col(g.skin),
          s.box(-0.04, -0.6, -0.04, 0.04, -0.3, 0.04, 59));
      else {
        (s.rotateX(C === `point` ? 1.15 : 0.3),
          s.col(g.shirt),
          s.box(-0.05, -0.28, -0.05, 0.05, 0, 0.05, a),
          s.translate(0, -0.27, 0));
        let t =
          C === `pray`
            ? 0.75
            : C === `phone`
              ? 0.45
              : C === `tray`
                ? 0.35
                : C === `point`
                  ? 0.05
                  : 0.25;
        (s
          .rotateX(C === `pray` ? 1.55 : C === `point` ? 0.35 : 1.3)
          .rotateZ(-e * t),
          s.col(g.skin),
          s.box(-0.04, -0.28, -0.04, 0.04, 0, 0.04, 59));
      }
      s.pop();
    }
    let e = k - 0.28;
    (C === `phone`
      ? (s.col(2764342),
        s.box(0.02, e + 0.04, -0.27999999999999997, 0.1, e + 0.18, -0.265, 55),
        s.col(11131135, 0.85),
        s.rectZ(0.03, e + 0.05, 0.09, e + 0.17, -0.26, 1))
      : C === `pray`
        ? (s.col(9054746),
          s.box(-0.008, e, -0.21999999999999997, 0.008, e + 0.34, -0.204, r),
          s.col(16742954, 1),
          s.box(
            -0.011,
            e + 0.34,
            -0.22299999999999998,
            0.011,
            e + 0.37,
            -0.20099999999999998,
            55,
          ))
        : C === `book`
          ? (s
              .push()
              .translate(0, e + 0.06, -0.32)
              .rotateX(-0.5),
            s.col(w ?? 11552558),
            s.box(-0.13, -0.008, -0.09, 0.13, 0.008, 0.09, 63),
            s.col(15920352),
            s.box(-0.125, 0.008, -0.085, 0.125, 0.016, 0.085, i),
            s.col(13157046),
            s.box(-0.004, 0.016, -0.085, 0.004, 0.022, 0.085, 55),
            s.pop())
          : C === `tray`
            ? (s.col(w ?? 14209732),
              s.box(-0.2, e - 0.05, -0.4, 0.2, e - 0.02, -0.18, i),
              s.col(15262418),
              s.box(-0.18, e - 0.02, -0.38, -0.02, e + 0.02, -0.24, i),
              s.col(12597547),
              s.box(0.02, e - 0.02, -0.36, 0.16, e + 0.05, -0.24, i))
            : C === `fore` &&
              w !== void 0 &&
              (s.col(w),
              s.box(
                -0.06,
                e - 0.02,
                -0.32,
                0.06,
                e + 0.1,
                -0.19999999999999998,
                i,
              )),
      p(s, x, g, A, 8, 5, b, !0),
      D && s.pop());
  }
  return (s.pop(), m(s, u, s.vcount), (s.icount - l) / 3);
}
function p(e, t, n, a, o, s, c, l) {
  (l && (e.col(n.skin), e.box(-0.04, a - 0.2, -0.04, 0.04, a - 0.1, 0.04, r)),
    t ? e.tex(t, 16777215) : e.col(n.skin),
    e.sphere(0, a, 0, 0.105, o, s, 1.12, 0.95, 1.02),
    e.col(n.hair),
    t || e.box(-0.1, a + 0.04, -0.06, 0.1, a + 0.125, 0.1, i),
    c && e.box(-0.09, a - 0.2, 0.04, 0.09, a + 0.06, 0.115, i));
}
function m(e, t, n = e.vcount) {
  n <= t ||
    e.shade(
      t,
      n,
      (e, t, n, r, i, a) =>
        0.82 + 0.18 * i + 0.05 * r - 0.03 * a - (i < 0 ? 0.02 : 0),
    );
}
function h(e, t, n, r = {}) {
  let i = e.rng.fork(50189 + t),
    a = e.q === `low` ? Math.max(1, Math.ceil(t / 2)) : t,
    o = r.spacing ?? 0.7,
    s = [],
    c = l(e);
  c.rng = i;
  for (let t = 0, l = 0; s.length < a && l < a * 25; l++) {
    let a = i.range(n.x0, n.x1),
      l = i.range(n.z0, n.z1),
      u = !0;
    for (let e of s) (e.x - a) ** 2 + (e.z - l) ** 2 < o * o && (u = !1);
    if (u && r.avoid)
      for (let e of r.avoid)
        a > e.x0 && a < e.x1 && l > e.z0 && l < e.z1 && (u = !1);
    if (!u) continue;
    let d;
    d =
      typeof r.face == `number`
        ? r.face + i.range(-0.25, 0.25)
        : r.face
          ? Math.atan2(r.face[0] - a, -(r.face[1] - l)) + i.range(-0.2, 0.2)
          : i.range(-Math.PI, Math.PI);
    let p = r.poses ?? [`stand`, `phone`, `stand`, `walk`];
    (f(c, {
      x: a,
      z: l,
      y: r.y,
      rot: d,
      pose: p[t++ % p.length],
      palette: r.palette,
    }),
      r.solid !== !1 && e.circle(a, l, 0.22, r.y ?? 0, (r.y ?? 0) + 1.7),
      s.push({ x: a, z: l, rot: d }));
  }
  return s;
}
