// tokyo/assets/batch-CN-kL9Gb 01 — mesh
// Lines 1-163 of readable/tokyo/assets/batch-CN-kL9Gb.pretty.js (statement-aligned).
import { Nn as e, d as t, p as n, tr as r, wt as i } from "./three-CC5Mkdpe.js";
var a = class {
    geos = [];
    defs = [];
    geometry(e) {
      return (
        e.boundingBox || e.computeBoundingBox(),
        this.geos.push(e),
        this.geos.length - 1
      );
    }
    instance(e, t) {
      return (this.defs.push({ geo: e, ...t }), this.defs.length - 1);
    }
    get size() {
      return this.defs.length;
    }
    async build(e, n, r = async () => {}) {
      let a = 0,
        o = 0;
      for (let e of this.geos)
        ((a += e.getAttribute(`position`).count),
          (o += e.index ? e.index.count : e.getAttribute(`position`).count));
      let s = new t(
        Math.max(1, this.defs.length),
        Math.max(3, a),
        Math.max(3, o),
        e,
      );
      s.name = n;
      let c = [];
      for (let e of this.geos) (c.push(s.addGeometry(e)), await r());
      let u = [],
        d = new i();
      for (let e of this.defs) {
        let t = s.addInstance(c[e.geo]);
        (d.identity(), e.matrix && d.copy(e.matrix), s.setMatrixAt(t, d));
        let n = this.geos[e.geo].boundingBox.clone().applyMatrix4(d);
        (u.push({
          id: t,
          name: e.name ?? `piece${t}`,
          dist: e.dist,
          shadow: !!e.shadow,
          box: n,
          inRange: !0,
          enabled: !e.hidden,
          free: !1,
        }),
          s.setVisibleAt(t, !e.hidden));
      }
      for (let e of this.geos) e.dispose();
      return (
        (this.geos.length = 0),
        (s.perObjectFrustumCulled = !1),
        (s.sortObjects = !1),
        (s.castShadow = !1),
        (s.receiveShadow = !0),
        (s.frustumCulled = !0),
        new l(s, u)
      );
    }
  },
  o = new n(),
  s = new r(0, -1e3, 0),
  c = new r(0.1, -999.9, 0.1),
  l = class {
    mesh;
    pieces;
    shadowHide = [];
    shadowDist = 130;
    distK = 1;
    constructor(e, n) {
      if (
        ((this.mesh = e), (this.pieces = n), n.filter((e) => e.shadow).length)
      ) {
        let n = t.prototype,
          r = this;
        ((e.onBeforeShadow = function (t, i, a, o, s, c, l) {
          let u = r.shadowHide;
          u.length = 0;
          for (let t of r.pieces)
            !t.shadow &&
              t.enabled &&
              t.inRange &&
              (e.setVisibleAt(t.id, !1), u.push(t.id));
          n.onBeforeShadow.call(e, t, i, a, o, s, c, l);
        }),
          (e.onBeforeRender = function (t, i, a, o, s, c) {
            let l = r.shadowHide;
            for (let t = 0; t < l.length; t++) e.setVisibleAt(l[t], !0);
            ((l.length = 0), n.onBeforeRender.call(e, t, i, a, o, s, c));
          }));
      }
      this.refreshBounds();
    }
    enable(e, t) {
      let n = this.pieces[e];
      n &&
        n.enabled !== t &&
        ((n.enabled = t),
        this.mesh.setVisibleAt(n.id, t && n.inRange),
        (this.dirty = !0));
    }
    setMatrix(e, t, n) {
      let r = this.pieces[e];
      (this.mesh.setMatrixAt(r.id, t), n && (r.box.copy(n), (this.dirty = !0)));
    }
    setFree(e, t) {
      let n = this.pieces[e];
      n &&
        n.free !== t &&
        ((n.free = t),
        t &&
          !n.inRange &&
          ((n.inRange = !0), this.mesh.setVisibleAt(n.id, n.enabled)),
        (this.dirty = !0));
    }
    dirty = !0;
    visibleCount = 0;
    cull(e, t) {
      let n = !1,
        r = !1;
      for (let i of this.pieces) {
        let a = Math.max(i.box.min.x - e, 0, e - i.box.max.x),
          o = Math.max(i.box.min.z - t, 0, t - i.box.max.z),
          s = Math.hypot(a, o),
          c = i.free || s < i.dist * this.distK;
        (c !== i.inRange &&
          ((i.inRange = c),
          this.mesh.setVisibleAt(i.id, c && i.enabled),
          (this.dirty = !0)),
          c &&
            i.enabled &&
            ((n = !0), i.shadow && s < this.shadowDist && (r = !0)));
      }
      return (
        (this.mesh.castShadow = r),
        this.dirty && this.refreshBounds(),
        (this.mesh.visible = n),
        n
      );
    }
    refreshBounds() {
      ((this.dirty = !1), o.makeEmpty());
      let t = 0;
      for (let e of this.pieces)
        e.enabled && e.inRange && (o.union(e.box), t++);
      ((this.visibleCount = t), t === 0 && o.set(s, c));
      let r = this.mesh;
      ((r.boundingBox ||= new n()),
        (r.boundingSphere ||= new e()),
        r.boundingBox.copy(o),
        o.getBoundingSphere(r.boundingSphere));
      let i = r.geometry;
      ((i.boundingBox ||= new n()),
        (i.boundingSphere ||= new e()),
        i.boundingBox.copy(r.boundingBox),
        i.boundingSphere.copy(r.boundingSphere));
    }
    dispose() {
      this.mesh.dispose();
    }
  };
