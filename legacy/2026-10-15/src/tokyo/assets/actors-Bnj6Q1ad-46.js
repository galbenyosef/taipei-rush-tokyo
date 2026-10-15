// tokyo/assets/actors-Bnj6Q1ad 46 — mesh
// Lines 21231-21511 of readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js (statement-aligned).
function Pp() {
  return (
    Np ||
    ((Np = new l({
      vertexShader: jp,
      fragmentShader: Mp,
      uniforms: m.merge([me.fog]),
      transparent: !0,
      depthWrite: !1,
      blending: 5,
      blendSrc: 201,
      blendDst: 201,
      fog: !0,
    })),
    (Np.name = `vehicle-fleet-glow`),
    (Np.uniforms.uNight = Qe.uNight),
    (Np.uniforms.uTime = Qe.uTime),
    (Np.uniforms.uWet = Qe.uWet),
    Np)
  );
}
var Fp = new Map();
function Ip(e) {
  let t = Fp.get(e);
  if (t) return t;
  let n = Ks[e],
    r = zs[e],
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
    (t = new fe()),
    t.setAttribute(`position`, new N(i, 3)),
    t.setAttribute(`aCenter`, new N(a, 3)),
    t.setAttribute(`aInfo`, new N(o, 3)),
    t.setIndex(s),
    Fp.set(e, t),
    t
  );
}
var Lp = new ke(),
  Rp = new y(),
  zp = new R(),
  Bp = new R(1, 1, 1),
  Vp = new Ae(),
  Hp = new R(0, 1, 0);
function Up(e, t, n, r = {}) {
  let i = new fe();
  for (let [e, t] of Object.entries(n.geometry.attributes))
    i.setAttribute(e, t);
  ((i.boundingSphere = n.geometry.boundingSphere),
    (i.boundingBox = n.geometry.boundingBox));
  let o = new a(new Float32Array(t), 1).setUsage(b),
    s = new a(new Float32Array(t), 1).setUsage(b);
  (i.setAttribute(`instanceLights`, o), i.setAttribute(`instanceSeed`, s));
  let c = new Se(i, n.material, t);
  (c.instanceMatrix.setUsage(b),
    c.setColorAt(0, Vp.setHex(16777215)),
    c.instanceColor.setUsage(b),
    (c.frustumCulled = !1),
    (c.castShadow = !0));
  let l = n.material.userData.depthMaterial;
  (l && (c.customDepthMaterial = l), (c.count = 0));
  let u = Ip(e),
    d = new fe();
  for (let [e, t] of Object.entries(u.attributes)) d.setAttribute(e, t);
  (d.setIndex(u.index),
    d.setAttribute(`instanceLights`, o),
    d.setAttribute(`instanceSeed`, s));
  let f = new Se(d, Pp(), t);
  ((f.instanceMatrix = c.instanceMatrix),
    (f.frustumCulled = !1),
    (f.count = 0),
    (f.renderOrder = 3));
  let p = r.glow !== !1,
    m = new _();
  ((m.name = `fleet-${e}`), m.add(c), p && m.add(f));
  let h = 0.137,
    g = {
      object: m,
      mesh: c,
      glow: f,
      capacity: t,
      count: 0,
      set(e, t, n, r, i, a, l = 0, u) {
        (Rp.setFromAxisAngle(Hp, -i),
          Lp.compose(zp.set(t, n, r), Rp, Bp),
          c.setMatrixAt(e, Lp),
          c.setColorAt(e, Vp.setHex(a)),
          (o.array[e] = l));
        let d = s.array;
        u === void 0
          ? d[e] === 0 && (d[e] = (h = (h + 0.6180339) % 1) * 0.998 + 0.001)
          : (d[e] = 0.001 + u * 0.998);
      },
      setFlags(e, t) {
        o.array[e] = t;
      },
      commit() {
        let e = Math.min(g.count, t);
        ((c.count = e),
          (f.count = e),
          (c.instanceMatrix.needsUpdate = !0),
          c.instanceColor && (c.instanceColor.needsUpdate = !0),
          (o.needsUpdate = !0),
          (s.needsUpdate = !0),
          (f.visible = e > 0 && p));
      },
      dispose() {
        (m.removeFromParent(),
          i.dispose(),
          d.dispose(),
          c.dispose(),
          f.dispose());
      },
    };
  return g;
}
var Wp = new xe(),
  Gp = new C(),
  Kp = new ke(),
  qp = class {
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
          let n = new fe();
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
              new N(new Float32Array(e.attributes.position.count).fill(t), 1),
            ),
            n
          );
        };
      for (let { kind: t, near: n, far: r } of e) {
        let e = Is.indexOf(t);
        if (e < 0) continue;
        let s = o(n, e);
        if ((a.push([t, s, !1]), (i += s.attributes.position.count), r)) {
          let n = o(r, e);
          (a.push([t, n, !0]), (i += n.attributes.position.count));
        }
      }
      ((this.mesh = new se(r, i, 0, t)),
        (this.nearIds = new Int32Array(Is.length).fill(-1)),
        (this.farIds = new Int32Array(Is.length).fill(-1)),
        (this.trisOf = new Float32Array(Is.length * 2)));
      for (let [e, t, n] of a) {
        let r = Is.indexOf(e),
          i = this.mesh.addGeometry(t);
        (((n ? this.farIds : this.nearIds)[r] = i),
          (this.trisOf[r * 2 + +!!n] = t.attributes.position.count / 3),
          t.dispose());
      }
      for (let [e, , t] of a) {
        let n = Is.indexOf(e);
        this.mesh.getBoundingSphereAt((t ? this.farIds : this.nearIds)[n], Gp);
      }
      for (let e = 0; e < Is.length; e++)
        this.farIds[e] < 0 && (this.farIds[e] = this.nearIds[e]);
      ((this.mesh.name = `vehicle-traffic-batch`),
        (this.mesh.customDepthMaterial = n),
        (this.mesh.frustumCulled = !1),
        (this.mesh.perObjectFrustumCulled = !0),
        (this.mesh.sortObjects = !1),
        (this.mesh.castShadow = !1),
        (this.mesh.receiveShadow = !0));
      let s = a.length ? this.nearIds[Is.indexOf(a[0][0])] : 0;
      ((this.slotGeo = new Int32Array(r).fill(-1)),
        (this.slotVis = new Uint8Array(r)));
      for (let e = 0; e < r; e++) {
        let e = this.mesh.addInstance(s);
        (this.mesh.setColorAt(e, Wp.set(1, 1, 1, 0)),
          this.mesh.setVisibleAt(e, !1),
          this.slots.push(e));
      }
    }
    begin() {
      ((this.count = 0), (this.tris = 0));
    }
    push(e, t, n, r, i, a, o, s, c = 0) {
      if (this.count >= this.capacity) return !1;
      let l = Is.indexOf(e),
        u = l < 0 ? -1 : s ? this.farIds[l] : this.nearIds[l];
      if (u < 0) return !1;
      let d = this.count++,
        f = this.slots[d],
        p = this.mesh;
      (this.slotGeo[d] !== u &&
        (p.setGeometryIdAt(f, u), (this.slotGeo[d] = u)),
        this.slotVis[d] || (p.setVisibleAt(f, !0), (this.slotVis[d] = 1)),
        p.setMatrixAt(f, t instanceof ke ? t : Kp.fromArray(t, c)));
      let m = a >= 0 && a < 1 ? a : ((a % 1) + 1) % 1;
      return (
        p.setColorAt(f, kc(Wp, n, r, i, o, m)),
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
  Jp = 14,
  Yp = 72,
  Xp = 16,
  Zp = 4,
  Qp = 5,
  $p = 7,
  em = 0.5,
  tm = 7.5,
  nm = 12,
  rm = 18,
  im = 0.35,
  am = 16777215,
  om = 1.1,
  sm = 18,
  cm = 2,
  lm = { throttle: 0, brake: 0, steer: 0, handbrake: !0 },
  um = { throttle: 0, brake: 0, steer: 0, handbrake: !1 };
