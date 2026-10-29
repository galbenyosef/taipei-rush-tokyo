// tokyo/assets/actors-bknSEpf2 77 — mesh
// Lines 32045-32323 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function wb() {
  return (
    Cb ||
    ((Cb = new a({
      vertexShader: xb,
      fragmentShader: Sb,
      uniforms: ne.merge([fe.fog]),
      transparent: !0,
      depthWrite: !1,
      blending: 5,
      blendSrc: 201,
      blendDst: 201,
      fog: !0,
    })),
    (Cb.name = `vehicle-fleet-glow`),
    (Cb.uniforms.uNight = Gt.uNight),
    (Cb.uniforms.uTime = Gt.uTime),
    (Cb.uniforms.uWet = Gt.uWet),
    Cb)
  );
}
var Tb = new Map();
function Eb(e) {
  let t = Tb.get(e);
  if (t) return t;
  let n = cr[e],
    r = tr[e],
    i = [],
    a = [],
    o = [],
    s = [],
    c = (e, t, n, r, c, l) => {
      let u = i.length / 3;
      for (let [s, u] of [
        [-0.5, -0.5],
        [0.5, -0.5],
        [0.5, 0.5],
        [-0.5, 0.5],
      ])
        (i.push(s, u, 0), a.push(e, t, n), o.push(r, c, l));
      s.push(u, u + 1, u + 2, u, u + 2, u + 3);
    },
    [l, u, d] = n.headAt,
    [f, p, m] = n.tailAt,
    h = r.twoWheeler;
  if (l === 0) c(0, u, d - 0.08, 0, 0.9, 0);
  else for (let e of [-1, 1]) c(e * l, u, d - 0.08, 0, 1.35, 0);
  if (f === 0) c(0, p, m + 0.05, 1, 0.7, 0);
  else for (let e of [-1, 1]) c(e * f, p, m + 0.05, 1, 0.9, 0);
  let g = h ? 8 : e === `bus` ? 13 : 11;
  if (
    (c(0, 0.04, d - g * 0.5, 2, h ? 3.2 : 5.2, g),
    c(0, 0.04, m + 1.7, 3, 2.8, 3.4),
    n.sirenAt)
  ) {
    let [e, t, r] = n.sirenAt;
    (c(-e * 0.5, t, r, 4, 2.2, 0), c(e * 0.5, t, r, 5, 2.2, 0));
  }
  for (let e of [-1, 1])
    (c(e * (l || 0.15), u, d, 6, 0.8, 0), c(e * (f || 0.15), p, m, 6, 0.8, 0));
  return (
    (t = new le()),
    t.setAttribute(`position`, new I(i, 3)),
    t.setAttribute(`aCenter`, new I(a, 3)),
    t.setAttribute(`aInfo`, new I(o, 3)),
    t.setIndex(s),
    Tb.set(e, t),
    t
  );
}
var Db = new N();
(new v(), new V(), new V(1, 1, 1));
var Ob = new j();
new V(0, 1, 0);
function kb(e, t, n, r = {}) {
  let i = new le();
  i.userData.hasRider = n.geometry.userData.hasRider === !0;
  for (let [e, t] of Object.entries(n.geometry.attributes))
    i.setAttribute(e, t);
  ((i.boundingSphere = n.geometry.boundingSphere),
    (i.boundingBox = n.geometry.boundingBox));
  let a = new oe(new Float32Array(t), 1).setUsage(O),
    o = new oe(new Float32Array(t), 1).setUsage(O);
  (i.setAttribute(`instanceLights`, a), i.setAttribute(`instanceSeed`, o));
  let s = new Ce(i, n.material, t);
  (s.instanceMatrix.setUsage(O),
    s.setColorAt(0, Ob.setHex(16777215)),
    s.instanceColor.setUsage(O),
    (s.frustumCulled = !1),
    (s.castShadow = !0));
  let c = n.material.userData.depthMaterial;
  (c && (s.customDepthMaterial = c), (s.count = 0));
  let l = Eb(e),
    u = new le();
  for (let [e, t] of Object.entries(l.attributes)) u.setAttribute(e, t);
  (u.setIndex(l.index),
    u.setAttribute(`instanceLights`, a),
    u.setAttribute(`instanceSeed`, o));
  let d = new Ce(u, wb(), t);
  ((d.instanceMatrix = s.instanceMatrix),
    (d.frustumCulled = !1),
    (d.count = 0),
    (d.renderOrder = 3));
  let f = r.glow !== !1,
    p = new re();
  ((p.name = `fleet-${e}`), p.add(s), f && p.add(d));
  let m = 0.137,
    h = {
      object: p,
      mesh: s,
      glow: d,
      capacity: t,
      count: 0,
      set(e, t, n, r, i, c, l = 0, u, d) {
        (Do(Db, t, n, r, i, d),
          s.setMatrixAt(e, Db),
          s.setColorAt(e, Ob.setHex(c)),
          (a.array[e] = l));
        let f = o.array;
        u === void 0
          ? f[e] === 0 && (f[e] = (m = (m + 0.6180339) % 1) * 0.998 + 0.001)
          : (f[e] = 0.001 + u * 0.998);
      },
      setFlags(e, t) {
        a.array[e] = t;
      },
      commit() {
        let e = Math.min(h.count, t);
        ((s.count = e),
          (d.count = e),
          (s.instanceMatrix.needsUpdate = !0),
          s.instanceColor && (s.instanceColor.needsUpdate = !0),
          (a.needsUpdate = !0),
          (o.needsUpdate = !0),
          (d.visible = e > 0 && f));
      },
      dispose() {
        (p.removeFromParent(),
          i.dispose(),
          u.dispose(),
          s.dispose(),
          d.dispose());
      },
    };
  return h;
}
var Ab = new we(),
  jb = new b(),
  Mb = new N(),
  Nb = class {
    mesh;
    capacity;
    tris = 0;
    count = 0;
    slots = [];
    slotGeo;
    slotVis;
    nearIds;
    farIds;
    trisOf;
    prevCount = 0;
    constructor(e, t, n, r) {
      this.capacity = r;
      let i = 0,
        a = [],
        o = (e, t) => {
          e.index && (e = e.toNonIndexed());
          let n = new le();
          for (let t of [
            `position`,
            `normal`,
            `color`,
            `uv`,
            `vdata`,
            `vvar`,
          ]) {
            let r = e.getAttribute(t);
            r && n.setAttribute(t, r);
          }
          return (
            n.setAttribute(
              `vkind`,
              new I(new Float32Array(e.attributes.position.count).fill(t), 1),
            ),
            n
          );
        };
      for (let { kind: t, near: n, far: r } of e) {
        let e = Qn.indexOf(t);
        if (e < 0) continue;
        let s = o(n, e);
        if ((a.push([t, s, !1]), (i += s.attributes.position.count), r)) {
          let n = o(r, e);
          (a.push([t, n, !0]), (i += n.attributes.position.count));
        }
      }
      ((this.mesh = new L(r, i, 0, t)),
        (this.nearIds = new Int32Array(Qn.length).fill(-1)),
        (this.farIds = new Int32Array(Qn.length).fill(-1)),
        (this.trisOf = new Float32Array(Qn.length * 2)));
      for (let [e, t, n] of a) {
        let r = Qn.indexOf(e),
          i = this.mesh.addGeometry(t);
        (((n ? this.farIds : this.nearIds)[r] = i),
          (this.trisOf[r * 2 + +!!n] = t.attributes.position.count / 3),
          t.dispose());
      }
      for (let [e, , t] of a) {
        let n = Qn.indexOf(e);
        this.mesh.getBoundingSphereAt((t ? this.farIds : this.nearIds)[n], jb);
      }
      for (let e = 0; e < Qn.length; e++)
        this.farIds[e] < 0 && (this.farIds[e] = this.nearIds[e]);
      ((this.mesh.name = `vehicle-traffic-batch`),
        (this.mesh.customDepthMaterial = n),
        (this.mesh.frustumCulled = !1),
        (this.mesh.perObjectFrustumCulled = !0),
        (this.mesh.sortObjects = !1),
        (this.mesh.castShadow = !1),
        (this.mesh.receiveShadow = !0));
      let s = a.length ? this.nearIds[Qn.indexOf(a[0][0])] : 0;
      ((this.slotGeo = new Int32Array(r).fill(-1)),
        (this.slotVis = new Uint8Array(r)));
      for (let e = 0; e < r; e++) {
        let e = this.mesh.addInstance(s);
        (this.mesh.setColorAt(e, Ab.set(1, 1, 1, 0)),
          this.mesh.setVisibleAt(e, !1),
          this.slots.push(e));
      }
    }
    begin() {
      ((this.count = 0), (this.tris = 0));
    }
    push(e, t, n, r, i, a, o, s, c = 0) {
      if (this.count >= this.capacity) return !1;
      let l = Qn.indexOf(e),
        u = l < 0 ? -1 : s ? this.farIds[l] : this.nearIds[l];
      if (u < 0) return !1;
      let d = this.count++,
        f = this.slots[d],
        p = this.mesh;
      (this.slotGeo[d] !== u &&
        (p.setGeometryIdAt(f, u), (this.slotGeo[d] = u)),
        this.slotVis[d] || (p.setVisibleAt(f, !0), (this.slotVis[d] = 1)),
        p.setMatrixAt(f, t instanceof N ? t : Mb.fromArray(t, c)));
      let m = a >= 0 && a < 1 ? a : ((a % 1) + 1) % 1;
      return (
        p.setColorAt(f, af(Ab, n, r, i, o, m)),
        (this.tris += this.trisOf[l * 2 + +!!s]),
        !0
      );
    }
    end() {
      for (let e = this.count; e < this.prevCount; e++)
        this.slotVis[e] &&
          (this.mesh.setVisibleAt(this.slots[e], !1), (this.slotVis[e] = 0));
      ((this.prevCount = this.count), (this.mesh.visible = this.count > 0));
    }
    dispose() {
      (this.mesh.removeFromParent(), this.mesh.dispose());
    }
  },
  Pb = 14,
  Fb = 72,
  Ib = 16,
  Lb = 4,
  Rb = 5,
  zb = 7,
  Bb = 0.5,
  Vb = 7.5,
  Hb = 12,
  Ub = 18,
  Wb = 0.35,
  Gb = 16777215,
  Kb = 1.1,
  qb = 18,
  Jb = 2,
  Yb = { throttle: 0, brake: 0, steer: 0, handbrake: !0 },
  Xb = { throttle: 0, brake: 0, steer: 0, handbrake: !1 };
