// tokyo__assets__actors-Bnj6Q1ad 63 — copy
// Lines 31783-32016 of readable/tokyo__assets__actors-Bnj6Q1ad.pretty.js (statement-aligned).
function Hg(e, t) {
  return (t + 2048) * 4096 + (e + 2048);
}
function Ug(e, t, n, r, i, a) {
  let o = i - n,
    s = a - r,
    c = o * o + s * s || 1,
    l = ((e - n) * o + (t - r) * s) / c;
  return (
    (l = l < 0 ? 0 : l > 1 ? 1 : l),
    Math.hypot(e - (n + o * l), t - (r + s * l))
  );
}
var Wg = 64,
  Gg = class extends se {
    cap;
    data;
    dataArr;
    mats;
    n = 0;
    nShadow = 0;
    tris = 0;
    starts;
    counts;
    bpe;
    geoStart = [];
    geoCount = [];
    drawnSinceAdd = 0;
    released = !1;
    constructor(e, t, n, r, i) {
      (super(e, t, n, r), (this.cap = e));
      let a = this;
      this.mats = a._matricesTexture.image.data;
      let s = a._indirectTexture.image.data;
      for (let e = 0; e < s.length; e++) s[e] = e;
      ((a._indirectTexture.needsUpdate = !0),
        (this.starts = a._multiDrawStarts),
        (this.counts = a._multiDrawCounts),
        (this.bpe = t > 65535 ? 4 : 2));
      let c = Math.ceil(e / Wg);
      ((this.dataArr = new Float32Array(320 * c * 4)),
        (this.data = new he(this.dataArr, 320, c, o, ne)),
        (this.data.needsUpdate = !0),
        (this.customDepthMaterial = i),
        (this.perObjectFrustumCulled = !1),
        (this.sortObjects = !1),
        (this.frustumCulled = !1),
        (this.castShadow = !1),
        (this.receiveShadow = !0),
        (this.boundingSphere = new C(new R(), 1e5)),
        (this.name = `peds`));
    }
    addGeo(e) {
      if (this.released)
        throw Error(
          `PedBatch: geometry added after the CPU arrays were released`,
        );
      let t = this.addGeometry(e);
      this.drawnSinceAdd = 0;
      let n = this._geometryInfo[t];
      return ((this.geoStart[t] = n.start), (this.geoCount[t] = n.count), t);
    }
    fits(e) {
      return (
        !this.released &&
        e.attributes.position.count <= this.unusedVertexCount &&
        (e.index?.count ?? 0) <= this.unusedIndexCount
      );
    }
    triangles(e) {
      return this.geoCount[e] / 3;
    }
    begin() {
      ((this.n = 0), (this.nShadow = 0), (this.tris = 0));
    }
    entry(e) {
      let t = this.n++;
      return (
        (this.starts[t] = this.geoStart[e] * this.bpe),
        (this.counts[t] = this.geoCount[e]),
        (this.tris += this.geoCount[e] / 3),
        t
      );
    }
    get full() {
      return this.n >= this.cap;
    }
    markShadow() {
      this.nShadow = this.n;
    }
    end() {
      if (((this.visible = this.n > 0), this.n === 0)) return;
      let e = this;
      ((e._matricesTexture.needsUpdate = !0), (this.data.needsUpdate = !0));
    }
    releaseCpu() {
      this.released ||
        ((this.released = !0),
        (this.geometry.boundingSphere = this.boundingSphere.clone()),
        (this.geometry.boundingBox = new Ce().setFromCenterAndSize(
          new R(),
          new R(2e5, 2e5, 2e5),
        )),
        et(this.geometry));
    }
    raycast() {}
    onBeforeRender() {
      let e = this;
      ((e._multiDrawCount = this.n),
        (e._multiDrawBytesPerElement = this.bpe),
        this.drawnSinceAdd++);
    }
    onBeforeShadow() {
      let e = this;
      ((e._multiDrawCount = this.nShadow),
        (e._multiDrawBytesPerElement = this.bpe),
        this.drawnSinceAdd++);
    }
  },
  Kg = 0.095,
  qg = 0.92,
  Jg = 0.5,
  Yg = 0.205,
  Xg = 1.4,
  Zg = 0.215,
  Qg = 1.115,
  $g = 0.865,
  e_ = 1.625,
  t_ = 2304,
  n_ = 4608,
  r_ = 9216,
  i_ = 18432,
  a_ = (e, t) => Math.floor(e / t) % 2 == 1,
  Y = (e) => 1 << e,
  o_ = 1.7,
  s_ = 0.3,
  c_ = { x: 0, y: 0, w: 1, h: 1 },
  l_ = 16711680,
  u_ = 65280,
  d_ = 255;
function f_(e) {
  let t = e.joints.p;
  for (let n of [-1, 1]) {
    let r = n < 0 ? 0 : 1,
      i = n < 0 ? H.thighL : H.thighR,
      a = n < 0 ? H.shinL : H.shinR,
      o = n < 0 ? H.footL : H.footR;
    (t[i].set(n * 0.095, 0.92, 0),
      t[a].set(n * 0.095, 0.5, -0.006),
      t[o].set(n * 0.095, 0.086, 0.012));
    let s = n < 0 ? H.armL : H.armR,
      c = n < 0 ? H.foreL : H.foreR,
      l = n < 0 ? H.handL : H.handR,
      u = n < 0 ? H.fingersL : H.fingersR;
    (t[s].set(n * 0.205, 1.4, 0),
      t[c].set(n * 0.215, 1.115, 0.012),
      t[l].set(n * 0.222, 0.865, -0.01),
      t[u]
        .copy(t[l])
        .add(new R(n * 0.004, -0.098 * (e.female ? 0.93 : 1), -0.004)));
    let d = e.arms[r],
      f = e.legs[r];
    (d.a.copy(t[s]),
      d.b.copy(t[c]),
      d.c.copy(t[l]),
      f.a.copy(t[i]),
      f.b.copy(t[a]),
      f.c.copy(t[o]));
  }
}
function p_(e, t, n) {
  let r = { ...e, height: 1.72 },
    i = qt(r);
  f_(i);
  let a = kt(r, i),
    o = It(r, i),
    s = new Ft();
  ((s.blank = Pt), (s.textured = n));
  let c = r.seed >>> 0 || 1,
    l = {
      desc: r,
      b: i,
      h: a,
      m: s,
      lod: t,
      atlas: null,
      page: null,
      rnd: () => ((c = (c * 1664525 + 1013904223) >>> 0), c / 4294967296),
      nT: t === 0 ? 16 : 8,
      nL: t === 0 ? 10 : 6,
      fit: o,
    };
  return (
    Jt({ m: s, h: a, b: i, lod: t, skin: r.skin, faceRect: n ? c_ : null }),
    on(l, Vt(r.acc)),
    jt(l),
    Rt(l),
    an(l),
    Mt(l),
    At(l),
    sn(l),
    { m: s, b: i, h: a, desc: r }
  );
}
function m_(e) {
  let t = JSON.parse(JSON.stringify(e));
  return (
    (t.top.color = l_),
    (t.bottom.color = u_),
    t.outer && (t.outer.color = d_),
    t
  );
}
var h_ = new Float32Array(16),
  g_ = new Ae();
function __(e) {
  let t = new fe();
  return (
    t.setAttribute(`position`, new I(e.pos, 3)),
    t.setAttribute(`normal`, new I(e.nor, 3)),
    t.setAttribute(`color`, new I(e.col, 3)),
    t.setAttribute(`aInfo`, new I(e.info, 4)),
    t.setAttribute(`aExt`, new I(e.ext, 4)),
    t.setIndex(new I(e.idx, 1)),
    t.computeBoundingSphere(),
    t
  );
}
function v_(e, t) {
  return { desc: e, lod: t, A: p_(e, t, t === 0) };
}
function y_(e, t) {
  return b_(e, t);
}
