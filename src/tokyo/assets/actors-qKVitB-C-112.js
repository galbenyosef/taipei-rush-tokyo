// tokyo/assets/actors-qKVitB-C 112 — push
// Lines 52469-52635 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function vD(e, t) {
  return _D(gD(e, () => t));
}
function yD(e) {
  return e.index ? e.toNonIndexed() : e;
}
var bD = 15922164,
  xD = 1784442,
  SD = 12854830,
  CD = 1911608,
  wD = 2829875,
  TD = 10133928;
function ED() {
  let [e, t] = ut(512, 128);
  return (
    (t.fillStyle = `#f2f3f4`),
    t.fillRect(0, 0, 512, 128),
    (t.fillStyle = `#1b3a7a`),
    t.fillRect(0, 6, 384, 52),
    (t.textBaseline = `middle`),
    (t.textAlign = `center`),
    JC.paint?.(`heli`, t) ||
      ((t.fillStyle = `#ffffff`),
      (t.font = `900 40px ${st}`),
      t.fillText(`警察  POLICE`, 192, 33),
      (t.fillStyle = `#1b3a7a`),
      (t.font = `800 44px ${st}`),
      t.fillText(`NA-702`, 128, 96),
      (t.fillStyle = `#1b3a7a`),
      (t.font = `800 30px ${st}`),
      t.fillText(`內政部空中勤務總隊`, 384, 96)),
    yt(e, { mipmaps: !0, anisotropy: 4 })
  );
}
function DD(e, t, n, r, i, a, o, s, c, l) {
  let u = new g(e, t),
    d = u.attributes.uv;
  for (let e = 0; e < d.count; e++)
    d.setXY(e, o + d.getX(e) * (c - o), s + d.getY(e) * (l - s));
  return (
    u.rotateY(a < 0 ? -Math.PI / 2 : Math.PI / 2),
    u.translate(n, r, i),
    gD(u, () => 16777215)
  );
}
function OD() {
  let e = [],
    t = new _(1, 18, 14);
  (t.scale(1.22, 1.15, 2.65), t.translate(0, 0, -0.55));
  {
    let e = t.attributes.position;
    for (let t = 0; t < e.count; t++) {
      let n = e.getX(t),
        r = e.getY(t),
        i = e.getZ(t);
      if ((r < -0.62 && (r = -0.62 - (-0.62 - r) * 0.35), i < -1.6)) {
        let e = Math.min(1, (-1.6 - i) / 1.6);
        ((n *= 1 - e * 0.28), (r = r * (1 - e * 0.3) - e * 0.22));
      }
      if (i > 0.8) {
        let e = Math.min(1, (i - 0.8) / 1.3);
        ((n *= 1 - e * 0.35), (r = r * (1 - e * 0.3) + e * 0.18));
      }
      e.setXYZ(t, n, r, i);
    }
    t.computeVertexNormals();
  }
  e.push(
    _D(
      gD(yD(t), (e, t, n) =>
        (n < -1.55 && t > -0.2) ||
        (Math.abs(e) > 0.75 && t > 0.05 && t < 0.72 && n > -1.7 && n < 0.3)
          ? CD
          : t < -0.72
            ? TD
            : t > -0.5 && t < -0.2
              ? xD
              : t > -0.58 && t <= -0.5
                ? (JC.heliStripe ?? SD)
                : bD,
      ),
    ),
  );
  let n = new F(0.95, 0.5, 2.1, 1, 1, 1);
  (n.translate(0, 1.12, 0.55), e.push(vD(yD(n), 15132906)));
  let r = new F(1.02, 0.18, 0.5);
  (r.translate(0, 1.05, -0.35), e.push(vD(yD(r), wD)));
  let i = new w(0.2, 0.42, 5.4, 10);
  (i.rotateX(Math.PI / 2),
    i.translate(0, 0.42, 3.15),
    e.push(_D(gD(yD(i), (e, t) => (t < 0.3 && t > 0.12 ? xD : bD)))));
  let a = new F(0.16, 1.7, 1.05);
  (a.translate(0, 1.05, 5.75), e.push(vD(yD(a), xD)));
  let o = new F(2.1, 0.07, 0.5);
  (o.translate(0, 0.45, 4.75), e.push(vD(yD(o), bD)));
  for (let t of [-1, 1]) {
    let n = new F(0.06, 0.45, 0.42);
    (n.translate(t * 1.05, 0.55, 4.8), e.push(vD(yD(n), xD)));
  }
  for (let t of [-1, 1]) {
    let n = new w(0.055, 0.055, 3.4, 6);
    (n.rotateX(Math.PI / 2),
      n.translate(t * 0.98, -1.42, -0.45),
      e.push(vD(yD(n), wD)));
    let r = new w(0.055, 0.055, 0.45, 6);
    (r.rotateX(Math.PI / 2 - 0.7),
      r.translate(t * 0.98, -1.3, -2.25),
      e.push(vD(yD(r), wD)));
    for (let n of [-1.25, 0.35]) {
      let r = new F(0.07, 0.75, 0.1);
      (r.rotateZ(t * 0.35),
        r.translate(t * 0.82, -1.08, n),
        e.push(vD(yD(r), wD)));
    }
  }
  let s = new w(0.16, 0.2, 0.28, 10);
  (s.rotateX(Math.PI / 2),
    s.translate(0.45, -0.95, -2.05),
    e.push(vD(yD(s), wD)));
  let c = new _(0.2, 10, 8);
  (c.translate(-0.4, -0.98, -2.2), e.push(vD(yD(c), 3948872)));
  let l = new w(0.1, 0.13, 0.5, 8);
  (l.translate(0, 1.55, 0),
    e.push(vD(yD(l), wD)),
    e.push(DD(2.3, 0.36, -0.36, 0.42, 3, -1, 0, 0.53, 0.75, 0.95)),
    e.push(DD(2.3, 0.36, 0.36, 0.42, 3, 1, 0, 0.53, 0.75, 0.95)),
    e.push(DD(0.9, 0.3, -0.09, 1.2, 5.75, -1, 0, 0.03, 0.5, 0.47)),
    e.push(DD(0.9, 0.3, 0.09, 1.2, 5.75, 1, 0, 0.03, 0.5, 0.47)),
    e.push(DD(1.5, 0.14, -1.2, -0.1, -0.35, -1, 0.5, 0.1, 1, 0.42)),
    e.push(DD(1.5, 0.14, 1.2, -0.1, -0.35, 1, 0.5, 0.1, 1, 0.42)));
  for (let t of e)
    for (let e of Object.keys(t.attributes))
      e !== `position` &&
        e !== `normal` &&
        e !== `uv` &&
        e !== `color` &&
        t.deleteAttribute(e);
  let u = An(e.map((e) => (e.index ? e.toNonIndexed() : e)));
  u.computeBoundingSphere();
  let d = [];
  for (let e = 0; e < 4; e++) {
    let t = new F(0.3, 0.05, 5.3);
    (t.translate(0, 0, 2.75),
      t.rotateY((e * Math.PI) / 2 + 0.2),
      d.push(yD(t)));
  }
  let f = new w(0.28, 0.28, 0.16, 10);
  d.push(yD(f));
  let p = An(d.map((e) => vD(e, 2237480))),
    m = [];
  for (let e = 0; e < 2; e++) {
    let t = new F(0.04, 1.2, 0.12);
    (t.rotateX((e * Math.PI) / 2), m.push(yD(t)));
  }
  let h = An(m.map((e) => vD(e, 2237480))),
    g = (e, t, n, r, i) => {
      let a = e.attributes.position.count;
      return (
        e.translate(n, r, i),
        e.setAttribute(`aSpin`, new j(new Float32Array(a).fill(t), 1)),
        e
      );
    };
  g(u, 0, 0, 0, 0);
  let v = An([u, g(p, 1, kD.x, kD.y, kD.z), g(h, 2, AD.x, AD.y, AD.z)]);
  return (v.computeBoundingSphere(), { all: v, rotor: p });
}
