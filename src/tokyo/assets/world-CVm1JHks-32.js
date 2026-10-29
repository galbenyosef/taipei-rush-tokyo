// tokyo/assets/world-CVm1JHks 32 — math
// Lines 10325-10642 of readable/tokyo/assets/world-CVm1JHks.pretty.js (statement-aligned).
function Fc(e, t) {
  return new Pc(e, t);
}
var Ic = new Set(),
  Lc = class {
    frame;
    list = [];
    cos;
    sin;
    colliders = 0;
    floors = 0;
    scope = null;
    warnings = [];
    constructor(e) {
      ((this.frame = e),
        (this.cos = Math.cos(e.facing)),
        (this.sin = Math.sin(e.facing)));
    }
    wx(e, t) {
      return this.frame.ox + e * this.cos - t * this.sin;
    }
    wz(e, t) {
      return this.frame.oz + e * this.sin + t * this.cos;
    }
    box(e, t, n, r, i = 0, a = i + 3) {
      let o = (e + n) / 2,
        s = (t + r) / 2;
      this.push({
        kind: `obb`,
        cx: this.wx(o, s),
        cz: this.wz(o, s),
        hx: Math.abs(n - e) / 2,
        hz: Math.abs(r - t) / 2,
        h: this.frame.facing,
        y0: this.frame.y0 + Math.min(i, a),
        y1: this.frame.y0 + Math.max(i, a),
      });
    }
    obb(e, t, n, r, i, a = 0, o = a + 3) {
      this.push({
        kind: `obb`,
        cx: this.wx(e, t),
        cz: this.wz(e, t),
        hx: Math.abs(n),
        hz: Math.abs(r),
        h: this.frame.facing - i,
        y0: this.frame.y0 + Math.min(a, o),
        y1: this.frame.y0 + Math.max(a, o),
      });
    }
    circle(e, t, n, r = 0, i = r + 3) {
      this.push({
        kind: `circle`,
        x: this.wx(e, t),
        z: this.wz(e, t),
        r: Math.abs(n),
        y0: this.frame.y0 + Math.min(r, i),
        y1: this.frame.y0 + Math.max(r, i),
      });
    }
    floor(e, t, n, r, i) {
      let a = (e + n) / 2,
        o = (t + r) / 2;
      this.push({
        kind: `floor`,
        cx: this.wx(a, o),
        cz: this.wz(a, o),
        hx: Math.abs(n - e) / 2,
        hz: Math.abs(r - t) / 2,
        h: this.frame.facing,
        y0: this.frame.y0 + i,
        y1: this.frame.y0 + i,
      });
    }
    stairs(e, t, n, r, i, a, o) {
      let s = Math.max(1, Math.round(i)),
        c = a;
      (c > 0 || (c = 0.15),
        c > 0.45 &&
          (this.warnings.push(`stairs rise ${a.toFixed(2)} > ${wt} clamped`),
          (c = wt)));
      let l = Math.sin(r),
        u = -Math.cos(r),
        d = this.frame.facing + r,
        f = Math.abs(n) / 2,
        p = Math.abs(o) / 2;
      for (let n = 0; n < s; n++) {
        let r = (n + 0.5) * Math.abs(o),
          i = e + l * r,
          a = t + u * r,
          s = this.wx(i, a),
          m = this.wz(i, a),
          h = this.frame.y0 + (n + 1) * c;
        (this.push({
          kind: `floor`,
          cx: s,
          cz: m,
          hx: f,
          hz: p,
          h: d,
          y0: h,
          y1: h,
        }),
          this.push({
            kind: `obb`,
            cx: s,
            cz: m,
            hx: f,
            hz: p,
            h: d,
            y0: this.frame.y0 - 0.3,
            y1: h - c / 2,
          }));
      }
      return c;
    }
    push(e) {
      (this.list.push(e),
        e.kind === `floor` ? this.floors++ : this.colliders++);
    }
    commit(e, t) {
      if (!e || this.list.length === 0) return null;
      this.list.length > 220 &&
        t !== `sites:shells` &&
        !Ic.has(t) &&
        (Ic.add(t),
        console.warn(
          `[test] sites ${t} registers ${this.list.length} collision shapes (> 220) — merge walls into fewer boxes`,
        ));
      let n = Fc(e, t);
      for (let e of this.list)
        e.kind === `obb`
          ? n.addOBB(e.cx, e.cz, e.hx, e.hz, e.h, e.y0, e.y1, Nc)
          : e.kind === `circle`
            ? n.addCircle(e.x, e.z, e.r, e.y0, e.y1, Nc)
            : n.addFloor(e.cx, e.cz, e.hx, e.hz, e.y0, e.y1, e.h, Nc);
      return ((this.scope = n), n);
    }
  },
  Rc = 3e4,
  zc = -1,
  Bc = !1;
function Vc() {
  return typeof performance < `u` ? performance.now() : Date.now();
}
function Hc(e, t, n, r = Wc) {
  let i = Uc(e, t, n, r);
  for (;;) {
    let e = i.next();
    if (e.done) return e.value;
  }
}
function* Uc(e, t, n, r = Wc) {
  let i = Array.isArray(e) ? e : [e],
    a = 0,
    o = 0;
  for (let e of i) {
    let t = e.getAttribute(`position`).count;
    ((a += t), (o += e.index ? e.index.count : t));
  }
  let s = new R(i.length, Math.max(3, a), Math.max(3, o), t);
  s.name = n;
  let c = [];
  for (let e of i) (c.push(s.addInstance(s.addGeometry(e))), yield);
  ((s.perObjectFrustumCulled = !1), (s.sortObjects = !1));
  let l = 1 / 0,
    u = 1 / 0,
    d = 1 / 0,
    f = -1 / 0,
    m = -1 / 0,
    h = -1 / 0;
  for (let e of i) {
    let t = e.getAttribute(`position`).array;
    for (let e = 0; e < t.length; e += 3) {
      let n = t[e],
        r = t[e + 1],
        i = t[e + 2];
      (n < l && (l = n),
        n > f && (f = n),
        r < u && (u = r),
        r > m && (m = r),
        i < d && (d = i),
        i > h && (h = i));
    }
  }
  let g =
      l <= f
        ? new pe(new U(l, u, d), new U(f, m, h))
        : new pe(new U(), new U()),
    _ = g.getBoundingSphere(new p());
  ((s.boundingBox = g),
    (s.boundingSphere = _),
    (s.geometry.boundingBox = g.clone()),
    (s.geometry.boundingSphere = _.clone()));
  for (let e of i) e.dispose();
  if (r.length) {
    let e = r.map((e) => c[e]).filter((e) => e !== void 0),
      t = R.prototype;
    ((s.onBeforeShadow = function (n, r, i, a, o, c, l) {
      for (let t = 0; t < e.length; t++) s.setVisibleAt(e[t], !1);
      t.onBeforeShadow.call(s, n, r, i, a, o, c, l);
    }),
      (s.onBeforeRender = function (n, r, i, a, o, c) {
        for (let t = 0; t < e.length; t++) s.setVisibleAt(e[t], !0);
        t.onBeforeRender.call(s, n, r, i, a, o, c);
      }));
  }
  return s;
}
var Wc = [];
function Gc(e) {
  return !!e.isBatchedMesh;
}
function Kc(e) {
  let t = null;
  try {
    t = e?.landmarks?.material ?? null;
  } catch {
    t = null;
  }
  if (t) return { lm: t, leaf: t };
  let n = Vc();
  return (
    zc < 0
      ? (zc = n)
      : !Bc &&
        e?.landmarks &&
        `material` in e.landmarks &&
        n - zc > Rc &&
        ((Bc = !0),
        console.error(
          `[sites] landmark material still missing after 30 s — every site renders flat on sites-ext (check landmarks.init / LandmarksAPI.material)`,
        )),
    { lm: null, leaf: null }
  );
}
function qc(e) {
  let t = e?.quality;
  return !t || t.mobile || t.level === `low` ? `low` : `high`;
}
function Jc(e, t, n = qc(e), r) {
  let i = new m(new Uint8Array([255, 255, 255, 255]), 1, 1, ve, I);
  ((i.name = `sites-atlas-placeholder`),
    (i.colorSpace = y),
    (i.needsUpdate = !0));
  let a = t.created ? t.texture : i,
    o = Un(a, 0.95);
  o.name = `sites-ext`;
  let s = Un(a, 1);
  s.name = `sites-room`;
  let c = n === `high` && !r ? Wn() : null;
  c && ((c.name = `sites-glass`), (c.map = i));
  let l = Kc(e),
    u = null;
  return (
    r && (u = We(`opaque`, { policy: r.policy, map: a, name: `sites-city` })),
    {
      city: u,
      cityLook: r?.look ?? null,
      lm: l.lm ?? o,
      leaf: l.leaf ?? l.lm ?? o,
      ext: o,
      room: s,
      glass: c,
      lmFallback: !l.lm,
      leafFallback: !l.leaf,
      atlas: t,
      atlasBound: a !== i,
      placeholder: i,
      lmSource: l.lm ? `landmarks.material` : `fallback`,
    }
  );
}
function Yc(e, t) {
  if (!t.lmFallback && !t.leafFallback) return !0;
  let n = Kc(e);
  return (
    n.lm &&
      t.lmFallback &&
      ((t.lm = n.lm), (t.lmFallback = !1), (t.lmSource = `landmarks.material`)),
    n.leaf && t.leafFallback && ((t.leaf = n.leaf), (t.leafFallback = !1)),
    !t.lmFallback
  );
}
function Xc(e, t) {
  !t.atlasBound && t.atlas.created && Qc(t);
  let n = q.uNight.value;
  t.ext.userData.uLight.value.setScalar(0.95 + (0.14 - 0.95) * n);
  let r = 1;
  try {
    r = e?.renderer?.gl?.toneMappingExposure || 1;
  } catch {
    r = 1;
  }
  t.room.userData.uLight.value.setScalar(1 / r ** 0.55);
}
function Zc(e) {
  (e.placeholder.dispose(),
    e.ext.dispose(),
    e.room.dispose(),
    e.glass?.dispose(),
    e.city?.dispose());
}
function Qc(e) {
  if (e.atlasBound) return;
  let t = e.atlas.texture;
  ((e.ext.map = t),
    (e.room.map = t),
    e.city && (e.city.map = t),
    (e.atlasBound = !0));
}
function $c(e) {
  e.atlasBound &&=
    ((e.ext.map = e.placeholder),
    (e.room.map = e.placeholder),
    e.city && (e.city.map = e.placeholder),
    !1);
}
