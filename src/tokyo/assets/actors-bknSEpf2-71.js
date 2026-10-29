// tokyo/assets/actors-bknSEpf2 71 — mesh
// Lines 27855-28182 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function Bv(e, t) {
  let n = new kf(),
    r = t.side ?? 1,
    i = zd().build;
  if (i && i(e, n, t)) return n;
  switch (e) {
    case `sedan`:
    case `police`:
    case `taxi`:
      Cv(n, e, r);
      break;
    case `sports`:
      Ev(n, r);
      break;
    case `suv`:
      Dv(n, r);
      break;
    case `van`:
      Ov(n, !1);
      break;
    case `ambulance`:
      Ov(n, !0);
      break;
    case `bus`:
      kv(n, r);
      break;
    case `garbage`:
      Av(n);
      break;
    case `truck`:
      jv(n);
      break;
    case `scooter`:
      if ((Mv(n, !1), t.wheels || t.steer)) {
        let e = n.vertexCount;
        (Nv(n, 0), (n.steer = [e, n.vertexCount]));
      }
      t.rider && (O_(n, A_, 0, 6), O_(n, j_, 5, 5));
      break;
    case `motorcycle`:
      if ((H_(n, !1), t.wheels || t.steer)) {
        let e = n.vertexCount;
        (U_(n), (n.steer = [e, n.vertexCount]));
      }
      t.rider && X_(n, `motorcycle`);
      break;
    case `superbike`:
      if ((W_(n, !1), t.wheels || t.steer)) {
        let e = n.vertexCount;
        (G_(n), (n.steer = [e, n.vertexCount]));
      }
      t.rider && X_(n, `superbike`);
  }
  return (
    t.wheels &&
      (e === `scooter`
        ? zv(n)
        : e === `motorcycle` || e === `superbike`
          ? Z_(n, e)
          : Vv(n, e)),
    n
  );
}
function Vv(e, t) {
  dv(e, t);
  let n = Hv[t];
  (e.style({ color: 328965, rough: 1 }),
    e.quad(
      [-n.w, 0.03, -n.l],
      [n.w, 0.03, -n.l],
      [n.w, 0.03, n.l],
      [-n.w, 0.03, n.l],
      [0, 1, 0],
    ));
}
var Hv = {
    scooter: { w: 0.2, l: 0.8 },
    motorcycle: { w: 0.2, l: 0.9 },
    superbike: { w: 0.2, l: 0.95 },
    sedan: { w: 0.88, l: 2.15 },
    taxi: { w: 0.88, l: 2.15 },
    suv: { w: 0.92, l: 2.2 },
    van: { w: 0.94, l: 2.3 },
    bus: { w: 1.22, l: 5.4 },
    police: { w: 0.9, l: 2.2 },
    ambulance: { w: 0.98, l: 2.6 },
    garbage: { w: 1.1, l: 3.45 },
    sports: { w: 0.94, l: 2.1 },
    truck: { w: 0.82, l: 2.05 },
  },
  Uv = {
    scooter: { a: [0.3, 0.4, 0.45, 0.45], b: [0.16, 0.45, 0, 0.3] },
    motorcycle: { a: [0.25, 0.25, 0.25, 0.25], b: [0.12, 0, 0, 0] },
    superbike: { a: [0, 0, 0, 0], b: [0.08, 0, 0.55, 0] },
    sports: { a: [0, 0, 0, 0], b: [0.6, 0.45, 0, 0] },
    suv: { a: [0, 0, 0, 0], b: [0.3, 0, 0, 0] },
    van: { a: [0.35, 0.35, 0.35, 0.35], b: [0.25, 0, 0, 0] },
    truck: { a: [0.3, 0.6, 0.75, 0.75], b: [0, 0, 0, 0] },
  };
function Wv(e) {
  let t = zd();
  if ((!t.delivery && e?.length && (t.delivery = e), Bd())) {
    (Object.assign(tr, t.specs),
      Object.assign(cr, t.handling),
      Object.assign(Uv, t.variants),
      Object.assign(Hv, t.shadow),
      Object.assign(Pv, t.riderPose),
      Object.assign(Lv, t.steerPivot));
    for (let e of t.kinds ?? []) Qn.includes(e) || Qn.push(e);
    for (let e of Object.keys({ ...t.specs, ...t.handling }))
      tr[e] && cr[e] && lr(e);
  }
}
var Gv = 768,
  Kv = class {
    mesh;
    cap;
    ids;
    vis;
    prev = 0;
    constructor(e, t, n, r) {
      ((this.mesh = e),
        (this.cap = n),
        (this.ids = new Int32Array(n)),
        (this.vis = new Uint8Array(n)));
      for (let i = 0; i < n; i++) {
        let n = e.addInstance(t);
        (e.setColorAt(n, r), e.setVisibleAt(n, !1), (this.ids[i] = n));
      }
    }
    setMatrixAt(e, t) {
      if (e >= this.cap) return;
      let n = this.ids[e];
      (this.mesh.setMatrixAt(n, t),
        this.vis[e] || (this.mesh.setVisibleAt(n, !0), (this.vis[e] = 1)));
    }
    end(e) {
      for (let t = e; t < this.prev; t++)
        this.vis[t] &&
          (this.mesh.setVisibleAt(this.ids[t], !1), (this.vis[t] = 0));
      this.prev = Math.min(e, this.cap);
    }
  },
  qv = class {
    mesh;
    geoIds = new Map();
    lodIds = new Map();
    members = new Map();
    far = new Set();
    camX = 0;
    camZ = 0;
    col = new we();
    c = new j();
    enabled = !0;
    wheels = null;
    spokes = null;
    parkedCap;
    constructor(e, t, n, r, i = 24, a = () => !1, o = null, s = null) {
      this.parkedCap = i;
      let c = [],
        l = 0,
        u = (e, t) => {
          let n = new le();
          for (let t in e.attributes) n.setAttribute(t, e.attributes[t]);
          return n.setAttribute(
            `vkind`,
            new z(new Float32Array(e.attributes.position.count).fill(t), 1),
          );
        };
      e.forEach((e, n) => {
        let r = t(e),
          i = a(e) ? 0.12 : void 0,
          o = r.userData.lod,
          d =
            o && i === void 0 && o.userData.cell === Math.max(0.045, Gf(r))
              ? o
              : Kf(r, i),
          f = u(r, n),
          p = u(d, n);
        (c.push([e, f, !1], [e, p, !0]),
          (l += f.attributes.position.count + p.attributes.position.count),
          (s?.(e) ?? []).forEach((t, r) => {
            if (!t) return;
            let a = u(t, n),
              o = u(Kf(t, i), n);
            (c.push([`${e}#${r}`, a, !1], [`${e}#${r}`, o, !0]),
              (l += a.attributes.position.count + o.attributes.position.count));
          }));
      });
      let d = o ? u(o.plain, 0) : null,
        f = o ? u(o.spoke, 0) : null;
      d &&
        f &&
        (l += d.attributes.position.count + f.attributes.position.count);
      let p = o ? o.plainCap + o.spokeCap : 0;
      this.mesh = new L(i + p, l, 0, n);
      let m = new b();
      for (let [e, t, n] of c) {
        let r = this.mesh.addGeometry(t);
        ((n ? this.lodIds : this.geoIds).set(e, r),
          this.mesh.getBoundingSphereAt(r, m));
      }
      if (o && d && f) {
        let e = this.mesh.addGeometry(d),
          t = this.mesh.addGeometry(f);
        (this.mesh.getBoundingSphereAt(e, m),
          this.mesh.getBoundingSphereAt(t, m),
          af(this.col, 1, 1, 1, Gv, 0),
          (this.wheels = new Kv(this.mesh, e, o.plainCap, this.col)),
          (this.spokes = new Kv(this.mesh, t, o.spokeCap, this.col)));
      }
      this.mesh.name = `vehicle-parked-batch`;
      {
        let e = this.geoIds.values().next().value;
        if (e !== void 0) {
          let t = this.mesh.addInstance(e);
          (this.mesh.setColorAt(t, this.col.set(1, 1, 1, 0)),
            this.mesh.deleteInstance(t));
        }
      }
      ((this.mesh.castShadow = !0),
        (this.mesh.receiveShadow = !1),
        (this.mesh.customDepthMaterial = r),
        (this.mesh.frustumCulled = !1),
        (this.mesh.perObjectFrustumCulled = !0),
        (this.mesh.sortObjects = !1));
    }
    get count() {
      return this.members.size;
    }
    key(e) {
      return e.altIdx >= 0 ? `${e.kind}#${e.altIdx}` : e.kind;
    }
    add(e) {
      let t = this.geoIds.get(this.key(e));
      if (t === void 0 || this.members.size >= this.parkedCap) return;
      let n = this.mesh.addInstance(t);
      (e.object.updateMatrixWorld(!0),
        this.mesh.setMatrixAt(n, e.tilt.matrixWorld),
        this.c.setHex(e.color),
        af(this.col, this.c.r, this.c.g, this.c.b, Gv, e.seed),
        this.mesh.setColorAt(n, this.col),
        this.members.set(e, n),
        this.far.delete(e),
        this.updateLod(e, n),
        (e.inBatch = !0),
        (e.tilt.visible = !1),
        (e.object.matrixWorldAutoUpdate = !1));
    }
    remove(e) {
      let t = this.members.get(e);
      t !== void 0 &&
        (this.mesh.deleteInstance(t),
        this.members.delete(e),
        this.far.delete(e),
        (e.inBatch = !1),
        (e.tilt.visible = !0),
        (e.object.matrixWorldAutoUpdate = !0));
    }
    list = [];
    check = (e, t) => {
      !this.enabled || !t.batchable || !this.list.includes(t)
        ? this.remove(t)
        : this.updateLod(t, e);
    };
    updateLod(e, t) {
      let n = (e.x - this.camX) ** 2 + (e.z - this.camZ) ** 2,
        r = this.far.has(e),
        i = r ? n > 1296 : n > 1764;
      if (i === r) return;
      let a = (i ? this.lodIds : this.geoIds).get(this.key(e));
      a !== void 0 &&
        (this.mesh.setGeometryIdAt(t, a),
        i ? this.far.add(e) : this.far.delete(e));
    }
    sync(e, t = this.camX, n = this.camZ) {
      if (
        ((this.list = e),
        (this.camX = t),
        (this.camZ = n),
        this.members.size && this.members.forEach(this.check),
        this.enabled)
      )
        for (let t = 0; t < e.length; t++) {
          let n = e[t];
          !n.inBatch && n.batchable && this.add(n);
        }
    }
  },
  Jv;
function Yv() {
  ((Jv = null),
    tt &&
      t(
        () =>
          Promise.resolve()
            .then(() => ld)
            .then(
              (e) => void (Jv = e.h2Simulate),
              (e) => console.warn(`[vehicles] v2 handling unavailable`, e),
            ),
        void 0,
      ));
}
var Xv = 1 / 120,
  Zv = 0.15,
  Qv = 16,
  $v = 0.05,
  ey = 0.45,
  ty = 0.5,
  ny = 0.18,
  ry = 5.5,
  iy = $e(),
  ay = { x: 0, y: 0, z: 0 },
  oy = new V(),
  sy = new V(),
  cy = { distance: 0, point: new V(), normal: new V(), tag: ``, body: null },
  ly = [],
  uy = new N(),
  dy = new N(),
  fy = new N(),
  py = new v(),
  my = new V(),
  Z = new V(),
  hy = new Pe(),
  gy = new V(),
  _y = new V();
new V(0, 1, 0);
