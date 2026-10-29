// tokyo/assets/actors-bknSEpf2 127 — push
// Lines 58315-58481 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function zA(e, t) {
  return RA(LA(e, () => t));
}
function BA(e) {
  return e.index ? e.toNonIndexed() : e;
}
var VA = 15922164,
  HA = 1784442,
  UA = 12854830,
  WA = 1911608,
  GA = 2829875,
  KA = 10133928;
function qA() {
  let [e, t] = ht(512, 128);
  return (
    (t.fillStyle = `#f2f3f4`),
    t.fillRect(0, 0, 512, 128),
    (t.fillStyle = `#1b3a7a`),
    t.fillRect(0, 6, 384, 52),
    (t.textBaseline = `middle`),
    (t.textAlign = `center`),
    cO.paint?.(`heli`, t) ||
      ((t.fillStyle = `#ffffff`),
      (t.font = `900 40px ${Mt}`),
      t.fillText(`警察  POLICE`, 192, 33),
      (t.fillStyle = `#1b3a7a`),
      (t.font = `800 44px ${Mt}`),
      t.fillText(`NA-702`, 128, 96),
      (t.fillStyle = `#1b3a7a`),
      (t.font = `800 30px ${Mt}`),
      t.fillText(`內政部空中勤務總隊`, 384, 96)),
    Ot(e, { mipmaps: !0, anisotropy: 4 })
  );
}
function JA(e, t, n, r, i, a, o, s, c, l) {
  let u = new P(e, t),
    d = u.attributes.uv;
  for (let e = 0; e < d.count; e++)
    d.setXY(e, o + d.getX(e) * (c - o), s + d.getY(e) * (l - s));
  return (
    u.rotateY(a < 0 ? -Math.PI / 2 : Math.PI / 2),
    u.translate(n, r, i),
    LA(u, () => 16777215)
  );
}
function YA() {
  let e = [],
    t = new k(1, 18, 14);
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
    RA(
      LA(BA(t), (e, t, n) =>
        (n < -1.55 && t > -0.2) ||
        (Math.abs(e) > 0.75 && t > 0.05 && t < 0.72 && n > -1.7 && n < 0.3)
          ? WA
          : t < -0.72
            ? KA
            : t > -0.5 && t < -0.2
              ? HA
              : t > -0.58 && t <= -0.5
                ? (cO.heliStripe ?? UA)
                : VA,
      ),
    ),
  );
  let n = new B(0.95, 0.5, 2.1, 1, 1, 1);
  (n.translate(0, 1.12, 0.55), e.push(zA(BA(n), 15132906)));
  let r = new B(1.02, 0.18, 0.5);
  (r.translate(0, 1.05, -0.35), e.push(zA(BA(r), GA)));
  let i = new me(0.2, 0.42, 5.4, 10);
  (i.rotateX(Math.PI / 2),
    i.translate(0, 0.42, 3.15),
    e.push(RA(LA(BA(i), (e, t) => (t < 0.3 && t > 0.12 ? HA : VA)))));
  let a = new B(0.16, 1.7, 1.05);
  (a.translate(0, 1.05, 5.75), e.push(zA(BA(a), HA)));
  let o = new B(2.1, 0.07, 0.5);
  (o.translate(0, 0.45, 4.75), e.push(zA(BA(o), VA)));
  for (let t of [-1, 1]) {
    let n = new B(0.06, 0.45, 0.42);
    (n.translate(t * 1.05, 0.55, 4.8), e.push(zA(BA(n), HA)));
  }
  for (let t of [-1, 1]) {
    let n = new me(0.055, 0.055, 3.4, 6);
    (n.rotateX(Math.PI / 2),
      n.translate(t * 0.98, -1.42, -0.45),
      e.push(zA(BA(n), GA)));
    let r = new me(0.055, 0.055, 0.45, 6);
    (r.rotateX(Math.PI / 2 - 0.7),
      r.translate(t * 0.98, -1.3, -2.25),
      e.push(zA(BA(r), GA)));
    for (let n of [-1.25, 0.35]) {
      let r = new B(0.07, 0.75, 0.1);
      (r.rotateZ(t * 0.35),
        r.translate(t * 0.82, -1.08, n),
        e.push(zA(BA(r), GA)));
    }
  }
  let s = new me(0.16, 0.2, 0.28, 10);
  (s.rotateX(Math.PI / 2),
    s.translate(0.45, -0.95, -2.05),
    e.push(zA(BA(s), GA)));
  let c = new k(0.2, 10, 8);
  (c.translate(-0.4, -0.98, -2.2), e.push(zA(BA(c), 3948872)));
  let l = new me(0.1, 0.13, 0.5, 8);
  (l.translate(0, 1.55, 0),
    e.push(zA(BA(l), GA)),
    e.push(JA(2.3, 0.36, -0.36, 0.42, 3, -1, 0, 0.53, 0.75, 0.95)),
    e.push(JA(2.3, 0.36, 0.36, 0.42, 3, 1, 0, 0.53, 0.75, 0.95)),
    e.push(JA(0.9, 0.3, -0.09, 1.2, 5.75, -1, 0, 0.03, 0.5, 0.47)),
    e.push(JA(0.9, 0.3, 0.09, 1.2, 5.75, 1, 0, 0.03, 0.5, 0.47)),
    e.push(JA(1.5, 0.14, -1.2, -0.1, -0.35, -1, 0.5, 0.1, 1, 0.42)),
    e.push(JA(1.5, 0.14, 1.2, -0.1, -0.35, 1, 0.5, 0.1, 1, 0.42)));
  for (let t of e)
    for (let e of Object.keys(t.attributes))
      e !== `position` &&
        e !== `normal` &&
        e !== `uv` &&
        e !== `color` &&
        t.deleteAttribute(e);
  let u = Vn(e.map((e) => (e.index ? e.toNonIndexed() : e)));
  u.computeBoundingSphere();
  let d = [];
  for (let e = 0; e < 4; e++) {
    let t = new B(0.3, 0.05, 5.3);
    (t.translate(0, 0, 2.75),
      t.rotateY((e * Math.PI) / 2 + 0.2),
      d.push(BA(t)));
  }
  let f = new me(0.28, 0.28, 0.16, 10);
  d.push(BA(f));
  let p = Vn(d.map((e) => zA(e, 2237480))),
    m = [];
  for (let e = 0; e < 2; e++) {
    let t = new B(0.04, 1.2, 0.12);
    (t.rotateX((e * Math.PI) / 2), m.push(BA(t)));
  }
  let h = Vn(m.map((e) => zA(e, 2237480))),
    g = (e, t, n, r, i) => {
      let a = e.attributes.position.count;
      return (
        e.translate(n, r, i),
        e.setAttribute(`aSpin`, new I(new Float32Array(a).fill(t), 1)),
        e
      );
    };
  g(u, 0, 0, 0, 0);
  let _ = Vn([u, g(p, 1, XA.x, XA.y, XA.z), g(h, 2, ZA.x, ZA.y, ZA.z)]);
  return (_.computeBoundingSphere(), { all: _, rotor: p });
}
