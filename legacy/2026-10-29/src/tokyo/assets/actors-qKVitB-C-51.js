// tokyo/assets/actors-qKVitB-C 51 — math
// Lines 20218-21247 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
var Em = 768,
  Dm = class {
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
  Om = class {
    mesh;
    geoIds = new Map();
    lodIds = new Map();
    members = new Map();
    far = new Set();
    camX = 0;
    camZ = 0;
    col = new ge();
    c = new Me();
    enabled = !0;
    wheels = null;
    spokes = null;
    parkedCap;
    constructor(e, t, n, r, i = 24, a = () => !1, o = null) {
      this.parkedCap = i;
      let s = [],
        c = 0,
        l = (e, t) => {
          let n = new pe();
          for (let t in e.attributes) n.setAttribute(t, e.attributes[t]);
          return n.setAttribute(
            `vkind`,
            new P(new Float32Array(e.attributes.position.count).fill(t), 1),
          );
        };
      e.forEach((e, n) => {
        let r = t(e),
          i = a(e) ? 0.12 : void 0,
          o = r.userData.lod,
          u =
            o && i === void 0 && o.userData.cell === Math.max(0.045, gm(r))
              ? o
              : _m(r, i),
          d = l(r, n),
          f = l(u, n);
        (s.push([e, d, !1], [e, f, !0]),
          (c += d.attributes.position.count + f.attributes.position.count));
      });
      let u = o ? l(o.plain, 0) : null,
        d = o ? l(o.spoke, 0) : null;
      u &&
        d &&
        (c += u.attributes.position.count + d.attributes.position.count);
      let f = o ? o.plainCap + o.spokeCap : 0;
      this.mesh = new ce(i + f, c, 0, n);
      let p = new m();
      for (let [e, t, n] of s) {
        let r = this.mesh.addGeometry(t);
        ((n ? this.lodIds : this.geoIds).set(e, r),
          this.mesh.getBoundingSphereAt(r, p));
      }
      if (o && u && d) {
        let e = this.mesh.addGeometry(u),
          t = this.mesh.addGeometry(d);
        (this.mesh.getBoundingSphereAt(e, p),
          this.mesh.getBoundingSphereAt(t, p),
          ld(this.col, 1, 1, 1, Em, 0),
          (this.wheels = new Dm(this.mesh, e, o.plainCap, this.col)),
          (this.spokes = new Dm(this.mesh, t, o.spokeCap, this.col)));
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
    add(e) {
      let t = this.geoIds.get(e.kind);
      if (t === void 0 || this.members.size >= this.parkedCap) return;
      let n = this.mesh.addInstance(t);
      (e.object.updateMatrixWorld(!0),
        this.mesh.setMatrixAt(n, e.tilt.matrixWorld),
        this.c.setHex(e.color),
        ld(this.col, this.c.r, this.c.g, this.c.b, Em, e.seed),
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
      let a = (i ? this.lodIds : this.geoIds).get(e.kind);
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
  km = `
attribute vec4 iPos;   // xyz, rotation
attribute vec4 iSize;  // w, h, type * 4 + mode (type 0 smoke, 1 glow, 2 decal; mode 0 billboard, 1 flat on ground), extra
attribute vec4 iColor; // rgba
varying vec2 vUv;
varying vec4 vCol;
varying float vExtra;
varying float vVy;
varying float vTy;
#include <fog_pars_vertex>
void main() {
  vUv = position.xy + 0.5;
  vCol = iColor;
  vExtra = iSize.w;
  float ty = floor(iSize.z * 0.25 + 0.01);
  float bm = iSize.z - ty * 4.0;
  vTy = ty;
  float c = cos(iPos.w), s = sin(iPos.w);
  vec2 p = vec2(position.x * iSize.x, position.y * iSize.y);
  vec4 mvPosition;
  vVy = position.y + 0.5;
  if (bm < 0.5) {
    p = vec2(p.x * c - p.y * s, p.x * s + p.y * c);
    vVy = p.y / max(iSize.y, 1e-3) + 0.5;
    mvPosition = viewMatrix * vec4(iPos.xyz, 1.0);
    mvPosition.xy += p;
  } else {
    p = vec2(p.x * c - p.y * s, p.x * s + p.y * c);
    mvPosition = viewMatrix * vec4(iPos.xyz + vec3(p.x, 0.0, p.y), 1.0);
  }
  // ground decals: a hair toward the camera instead of the old material polygon offset (one material for all FX)
  if (ty > 1.5) mvPosition.xyz *= 0.9985;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}
`,
  Am = `
varying vec2 vUv;
varying vec4 vCol;
varying float vExtra;
varying float vVy;
varying float vTy;
uniform float uNight;
uniform vec3 uSunDir;
uniform float uClock;
#include <common>
#include <fog_pars_fragment>
void main() {
  vec2 q = vUv - 0.5;
  float d = length(q) * 2.0;
  float a;
  vec3 col;
  if (vTy < 0.5) {
    // smoke: puffy edge (angular noise seeded per particle)
    float ang = atan(q.y, q.x);
    float n = 0.82 + 0.12 * sin(ang * 3.0 + vExtra * 6.28) + 0.06 * sin(ang * 7.0 - vExtra * 12.0);
    a = 1.0 - smoothstep(n * 0.35, n, d);
    a *= vCol.a * smoothstep(0.02, 0.42, vVy);
    if (a < 0.004) discard;
    // fake lighting: lighter top; smoke / spray / dust is lit by the sky — dark at night (no glowing fog walls),
    // a touch dimmer when the sun is low
    float sky = (1.0 - 0.78 * uNight) * (0.8 + 0.2 * clamp(uSunDir.y * 2.0, 0.0, 1.0));
    col = vCol.rgb * (0.85 + 0.3 * vUv.y) * sky;
  } else if (vTy < 1.5) {
    if (vExtra > 1.5) {
      // ring (shockwave)
      a = smoothstep(0.7, 0.9, d) * (1.0 - smoothstep(0.92, 1.0, d));
    } else if (vExtra > 0.5) {
      // soft pool (ground light)
      a = pow(max(0.0, 1.0 - d), 1.6);
    } else {
      // hot core + halo
      a = pow(max(0.0, 1.0 - d), 2.2) + 0.6 * pow(max(0.0, 1.0 - d), 8.0);
    }
    a *= vCol.a;
    if (a < 0.003) discard;
    col = vCol.rgb;
  } else {
    if (vExtra < 0.0) {
      // blob shadow: soft rounded rectangle
      vec2 e = abs(q) * 2.0;
      vec2 k = 1.0 - smoothstep(vec2(0.62), vec2(1.0), e);
      a = k.x * k.y;
    } else {
      // skid mark: fade with age (vExtra = birth time), soft sides, streaky
      float age = uClock - vExtra;
      a = (1.0 - smoothstep(18.0, 30.0, age)) * (1.0 - smoothstep(0.25, 0.5, abs(q.x)));
      a *= 0.85 + 0.15 * sin(vUv.x * 9.0 + vExtra * 3.0);
    }
    a *= vCol.a;
    if (a < 0.004) discard;
    col = vCol.rgb;
  }
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  // premultiplied: additive glow keeps the destination (alpha 0), smoke / decals blend over it
  gl_FragColor = vec4(gl_FragColor.rgb * a, (vTy > 0.5 && vTy < 1.5) ? 0.0 : a);
}
`,
  jm = 0,
  Mm = 4,
  Nm = 8,
  Pm = class {
    cap;
    type;
    pos;
    size;
    col;
    count = 0;
    constructor(e, t) {
      ((this.cap = e),
        (this.type = t),
        (this.pos = new Float32Array(e * 4)),
        (this.size = new Float32Array(e * 4)),
        (this.col = new Float32Array(e * 4)));
    }
    set(e, t, n, r, i, a, o, s, c, l, u, d, f) {
      let p = e * 4;
      ((this.pos[p] = t),
        (this.pos[p + 1] = n),
        (this.pos[p + 2] = r),
        (this.pos[p + 3] = i),
        (this.size[p] = a),
        (this.size[p + 1] = o),
        (this.size[p + 2] = this.type + s),
        (this.size[p + 3] = c),
        (this.col[p] = l),
        (this.col[p + 1] = u),
        (this.col[p + 2] = d),
        (this.col[p + 3] = f));
    }
  },
  Fm = class {
    cap;
    mesh;
    geo;
    pos;
    size;
    col;
    aPos;
    aSize;
    aCol;
    range = { start: 0, count: 0 };
    count = 0;
    constructor(e, t) {
      this.cap = e;
      let n = new de(),
        r = new Float32Array([
          -0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0,
        ]);
      (n.setAttribute(`position`, new P(r, 3)),
        n.setIndex([0, 1, 2, 0, 2, 3]),
        (this.pos = new Float32Array(e * 4)),
        (this.size = new Float32Array(e * 4)),
        (this.col = new Float32Array(e * 4)),
        (this.aPos = new a(this.pos, 4).setUsage(b)),
        (this.aSize = new a(this.size, 4).setUsage(b)),
        (this.aCol = new a(this.col, 4).setUsage(b)),
        n.setAttribute(`iPos`, this.aPos),
        n.setAttribute(`iSize`, this.aSize),
        n.setAttribute(`iColor`, this.aCol),
        (n.instanceCount = 0),
        (this.geo = n));
      let i = { uNight: bt.uNight, uSunDir: bt.uSunDir, uClock: t },
        o = new T({
          vertexShader: km,
          fragmentShader: Am,
          uniforms: De.merge([he.fog, i]),
          transparent: !0,
          depthWrite: !1,
          blending: 5,
          blendSrc: 201,
          blendDst: 205,
          blendEquation: 100,
          fog: !0,
          side: 2,
        });
      for (let e of Object.keys(i)) o.uniforms[e] = i[e];
      ((o.name = `vehicle-fx`),
        (this.mesh = new A(n, o)),
        (this.mesh.name = `vehicle-fx-quads`),
        (this.mesh.frustumCulled = !1),
        (this.mesh.renderOrder = 2),
        (this.mesh.visible = !1));
    }
    begin() {
      this.count = 0;
    }
    append(e, t) {
      t = Math.min(t, this.cap - this.count);
      let n = this.count * 4,
        r = t * 4,
        i = this.pos,
        a = this.size,
        o = this.col,
        s = e.pos,
        c = e.size,
        l = e.col;
      for (let e = 0; e < r; e++)
        ((i[n + e] = s[e]), (a[n + e] = c[e]), (o[n + e] = l[e]));
      this.count += t;
    }
    commit() {
      let e = this.count;
      if (((this.geo.instanceCount = e), (this.mesh.visible = e > 0), e > 0)) {
        this.range.count = e * 4;
        let t = this.aPos.updateRanges,
          n = this.aSize.updateRanges,
          r = this.aCol.updateRanges;
        ((t.length = n.length = r.length = 0),
          t.push(this.range),
          n.push(this.range),
          r.push(this.range),
          (this.aPos.needsUpdate = !0),
          (this.aSize.needsUpdate = !0),
          (this.aCol.needsUpdate = !0));
      }
    }
  },
  Im = class {
    cap;
    n = 0;
    px;
    py;
    pz;
    vx;
    vy;
    vz;
    life;
    max;
    s0;
    s1;
    r;
    g;
    b;
    a;
    grav;
    drag;
    rot;
    seed;
    gy;
    kind;
    constructor(e) {
      this.cap = e;
      let t = () => new Float32Array(e);
      ((this.px = t()),
        (this.py = t()),
        (this.pz = t()),
        (this.vx = t()),
        (this.vy = t()),
        (this.vz = t()),
        (this.life = t()),
        (this.max = t()),
        (this.s0 = t()),
        (this.s1 = t()),
        (this.r = t()),
        (this.g = t()),
        (this.b = t()),
        (this.a = t()),
        (this.grav = t()),
        (this.drag = t()),
        (this.rot = t()),
        (this.seed = t()),
        (this.gy = t()),
        (this.kind = new Uint8Array(e)));
    }
    spawn() {
      return this.n >= this.cap
        ? Math.floor(Math.random() * this.cap)
        : this.n++;
    }
    kill(e) {
      let t = --this.n;
      e !== t &&
        ((this.px[e] = this.px[t]),
        (this.py[e] = this.py[t]),
        (this.pz[e] = this.pz[t]),
        (this.vx[e] = this.vx[t]),
        (this.vy[e] = this.vy[t]),
        (this.vz[e] = this.vz[t]),
        (this.life[e] = this.life[t]),
        (this.max[e] = this.max[t]),
        (this.s0[e] = this.s0[t]),
        (this.s1[e] = this.s1[t]),
        (this.r[e] = this.r[t]),
        (this.g[e] = this.g[t]),
        (this.b[e] = this.b[t]),
        (this.a[e] = this.a[t]),
        (this.grav[e] = this.grav[t]),
        (this.drag[e] = this.drag[t]),
        (this.rot[e] = this.rot[t]),
        (this.seed[e] = this.seed[t]),
        (this.gy[e] = this.gy[t]),
        (this.kind[e] = this.kind[t]));
    }
  },
  Lm = 520,
  Rm = 700,
  zm = 260,
  Bm = 900,
  Vm = 24,
  Hm = 64,
  Um = class {
    groundAt;
    group = new v();
    clock = { value: 0 };
    smokePool = new Pm(Lm, jm);
    glowPool = new Pm(960, Mm);
    decalPool = new Pm(924, Nm);
    quads = new Fm(2404, this.clock);
    smoke = new Im(Lm);
    glow = new Im(Rm);
    sprites = 0;
    shadows = 0;
    skidHead = 0;
    skidCount = 0;
    skidDirty = !1;
    skidLast = new Map();
    debris;
    dN = 0;
    dPos = new Float32Array(192);
    dVel = new Float32Array(192);
    dRot = new Float32Array(192);
    dSpin = new Float32Array(192);
    dLife = new Float32Array(Hm);
    dScale = new Float32Array(192);
    time = 0;
    pruneT = 5;
    density = 1;
    constructor(e) {
      ((this.groundAt = e),
        (this.group.name = `vehicle-fx`),
        this.group.add(this.quads.mesh));
      let t = new F(1, 1, 1);
      {
        let e = t.attributes.position.count,
          n = new Float32Array(e * 4);
        for (let t = 0; t < e; t++) n.set([1, 0, 0.6, 0.4], t * 4);
        (t.setAttribute(`color`, new j(new Float32Array(e * 3).fill(1), 3)),
          t.setAttribute(`vdata`, new j(n, 4)),
          t.setAttribute(`vvar`, new j(new Float32Array(e), 1)),
          t.setAttribute(`uv`, new j(new Float32Array(e * 2), 2)));
      }
      let n = new ye({ roughness: 0.6, metalness: 0.4 });
      ((n.name = `vehicle-fx-debris`),
        (this.debris = new we(t, n, Hm)),
        (this.debris.name = `vehicle-fx-debris`),
        this.debris.instanceMatrix.setUsage(b),
        (this.debris.count = 0),
        (this.debris.frustumCulled = !1),
        (this.debris.castShadow = !1));
      let r = new Me();
      for (let e = 0; e < Hm; e++) this.debris.setColorAt(e, r.setHex(2236962));
      this.group.add(this.debris);
    }
    useDebrisMaterial(e) {
      let t = this.debris.material;
      ((this.debris.material = e), t.dispose());
    }
    smokePuff(e, t, n, r, i, a, o, s, c, l, u, d, f, p = 1.2, m = 0.8) {
      let h = this.smoke,
        g = h.spawn();
      ((h.px[g] = e),
        (h.py[g] = t),
        (h.pz[g] = n),
        (h.vx[g] = r),
        (h.vy[g] = i),
        (h.vz[g] = a),
        (h.life[g] = 0),
        (h.max[g] = c),
        (h.s0[g] = o),
        (h.s1[g] = s),
        (h.r[g] = l),
        (h.g[g] = u),
        (h.b[g] = d),
        (h.a[g] = f),
        (h.grav[g] = -m),
        (h.drag[g] = p),
        (h.rot[g] = Math.random() * 6.28),
        (h.seed[g] = Math.random()),
        (h.gy[g] = t - 0.3));
    }
    glowParticle(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      let m = this.glow,
        h = m.spawn();
      ((m.px[h] = t),
        (m.py[h] = n),
        (m.pz[h] = r),
        (m.vx[h] = i),
        (m.vy[h] = a),
        (m.vz[h] = o),
        (m.life[h] = 0),
        (m.max[h] = l),
        (m.s0[h] = s),
        (m.s1[h] = c),
        (m.r[h] = u),
        (m.g[h] = d),
        (m.b[h] = f),
        (m.a[h] = p),
        (m.grav[h] = e === 1 ? 9.8 : e === 0 ? -1.5 : 0),
        (m.drag[h] = e === 1 ? 0.4 : 1.5),
        (m.rot[h] = Math.random() * 6.28),
        (m.seed[h] = Math.random()),
        (m.kind[h] = e),
        (m.gy[h] = e === 1 ? this.groundAt(t, r, n) : 0));
    }
    sprite(e, t, n, r, i, a, o, s) {
      this.sprites >= zm ||
        this.glowPool.set(
          Rm + this.sprites++,
          e,
          t,
          n,
          0,
          r,
          r,
          0,
          0,
          i,
          a,
          o,
          s,
        );
    }
    pool(e, t, n, r, i, a, o, s, c, l) {
      this.sprites >= zm ||
        this.glowPool.set(
          Rm + this.sprites++,
          e,
          t + 0.03,
          n,
          r,
          i,
          a,
          1,
          1,
          o,
          s,
          c,
          l,
        );
    }
    shadow(e, t, n, r, i, a, o) {
      this.shadows >= Vm ||
        this.decalPool.set(
          Bm + this.shadows++,
          e,
          t + 0.02,
          n,
          r,
          i,
          a,
          1,
          -1,
          0,
          0,
          0,
          o,
        );
    }
    skid(e, t, n, r, i, a) {
      let o = this.skidLast.get(e),
        s = this.time;
      if (!o || s - o.t > 0.12) {
        this.skidLast.set(e, { x: t, z: n, t: s });
        return;
      }
      let c = t - o.x,
        l = n - o.z,
        u = Math.hypot(c, l);
      if (u < 0.35) {
        o.t = s;
        return;
      }
      let d = this.skidHead;
      (this.decalPool.set(
        d,
        (t + o.x) / 2,
        a + 0.015,
        (n + o.z) / 2,
        Math.atan2(-c, l),
        i,
        u + 0.06,
        1,
        this.clock.value,
        0.025,
        0.025,
        0.028,
        Math.min(0.85, 0.42 + r * 0.5),
      ),
        (this.skidHead = (this.skidHead + 1) % Bm),
        (this.skidCount = Math.min(Bm, this.skidCount + 1)),
        (this.skidDirty = !0),
        (o.x = t),
        (o.z = n),
        (o.t = s));
    }
    sparks(e, t, n, r, i, a, o = 5) {
      a = Math.ceil(a * this.density);
      for (let s = 0; s < a; s++) {
        let a = o * (0.4 + Math.random());
        this.glowParticle(
          1,
          e,
          t,
          n,
          r * a + (Math.random() - 0.5) * 4,
          1 + Math.random() * 3,
          i * a + (Math.random() - 0.5) * 4,
          0.09,
          0.03,
          0.25 + Math.random() * 0.35,
          1,
          0.72,
          0.3,
          1.4,
        );
      }
    }
    explosion(e, t, n, r = 1, i = 3355443) {
      let a = r;
      (this.glowParticle(
        2,
        e,
        t + 1.2,
        n,
        0,
        0,
        0,
        9 * a,
        14 * a,
        0.2,
        1,
        0.85,
        0.6,
        3.5,
      ),
        this.glowParticle(
          3,
          e,
          t + 0.15,
          n,
          0,
          0,
          0,
          1 * a,
          20 * a,
          0.5,
          1,
          0.62,
          0.3,
          0.9,
        ));
      let o = Math.ceil(34 * this.density);
      for (let r = 0; r < o; r++) {
        let r = Math.random() * 6.28,
          i = (1.5 + Math.random() * 6) * a;
        this.glowParticle(
          0,
          e + Math.cos(r) * 0.8,
          t + 0.8 + Math.random() * 1.2,
          n + Math.sin(r) * 0.8,
          Math.cos(r) * i,
          1.5 + Math.random() * 3 * a,
          Math.sin(r) * i,
          (2 + Math.random() * 2) * a,
          3.2 * a,
          0.45 + Math.random() * 0.5,
          1,
          0.5 + Math.random() * 0.25,
          0.18,
          2.4,
        );
      }
      let s = Math.ceil(22 * this.density);
      for (let r = 0; r < s; r++) {
        let r = Math.random() * 6.28,
          i = (1 + Math.random() * 4) * a,
          o = 0.06 + Math.random() * 0.08;
        this.smokePuff(
          e + Math.cos(r),
          t + 1 + Math.random() * 2,
          n + Math.sin(r),
          Math.cos(r) * i,
          2 + Math.random() * 4,
          Math.sin(r) * i,
          (2 + Math.random() * 2) * a,
          (6 + Math.random() * 5) * a,
          3 + Math.random() * 3,
          o,
          o,
          o,
          0.85,
          0.8,
          1.6,
        );
      }
      this.sparks(e, t + 1, n, 0, 0, 30, 12 * a);
      let c = Math.min(18, Hm);
      for (let r = 0; r < c; r++) {
        let a = this.dN < Hm ? this.dN++ : Math.floor(Math.random() * Hm),
          o = Math.random() * 6.28,
          s = 4 + Math.random() * 10;
        ((this.dPos[a * 3] = e),
          (this.dPos[a * 3 + 1] = t + 1),
          (this.dPos[a * 3 + 2] = n),
          (this.dVel[a * 3] = Math.cos(o) * s),
          (this.dVel[a * 3 + 1] = 5 + Math.random() * 10),
          (this.dVel[a * 3 + 2] = Math.sin(o) * s));
        for (let e = 0; e < 3; e++)
          ((this.dRot[a * 3 + e] = Math.random() * 6),
            (this.dSpin[a * 3 + e] = (Math.random() - 0.5) * 16),
            (this.dScale[a * 3 + e] = 0.05 + Math.random() * 0.22));
        ((this.dLife[a] = 6 + Math.random() * 6),
          this.debris.setColorAt(
            a,
            this._c
              .setHex(r % 3 == 0 ? i : r % 3 == 1 ? 1842206 : 3816253)
              .multiplyScalar(r % 3 == 0 ? 0.55 : 1),
          ));
      }
      this.debris.instanceColor && (this.debris.instanceColor.needsUpdate = !0);
    }
    _c = new Me();
    _m = new R();
    _q = new I();
    _e = new O();
    _p = new L();
    _s = new L();
    update(e, t) {
      if (((this.time += e), (this.pruneT -= e) < 0)) {
        this.pruneT = 5;
        for (let [e, t] of this.skidLast)
          this.time - t.t > 3 && this.skidLast.delete(e);
      }
      this.clock.value = t;
      {
        let t = this.smoke,
          n = this.smokePool,
          r = n.pos,
          i = n.size,
          a = n.col,
          o = 0;
        for (let n = 0; n < t.n;) {
          t.life[n] += e;
          let s = t.life[n] / t.max[n];
          if (s >= 1) {
            t.kill(n);
            continue;
          }
          let c = Math.exp(-t.drag[n] * e);
          ((t.vx[n] *= c),
            (t.vz[n] *= c),
            (t.vy[n] = t.vy[n] * c - t.grav[n] * e),
            (t.px[n] += t.vx[n] * e),
            (t.py[n] += t.vy[n] * e),
            (t.pz[n] += t.vz[n] * e));
          let l = t.s0[n] + (t.s1[n] - t.s0[n]) * Math.sqrt(s),
            u = t.a[n] * Math.min(1, s * 6) * (1 - s) * (1 - s);
          t.rot[n] += e * 0.3;
          let d = Math.max(t.py[n], t.gy[n] + l * 0.36),
            f = o * 4;
          ((r[f] = t.px[n]),
            (r[f + 1] = d),
            (r[f + 2] = t.pz[n]),
            (r[f + 3] = t.rot[n]),
            (i[f] = l),
            (i[f + 1] = l),
            (i[f + 2] = jm),
            (i[f + 3] = t.seed[n]),
            (a[f] = t.r[n]),
            (a[f + 1] = t.g[n]),
            (a[f + 2] = t.b[n]),
            (a[f + 3] = u),
            o++,
            n++);
        }
        n.count = o;
      }
      {
        let t = this.glow,
          n = this.glowPool,
          r = n.pos,
          i = n.size,
          a = n.col,
          o = 0;
        for (let n = 0; n < t.n;) {
          t.life[n] += e;
          let s = t.life[n] / t.max[n];
          if (s >= 1) {
            t.kill(n);
            continue;
          }
          let c = Math.exp(-t.drag[n] * e);
          ((t.vx[n] *= c),
            (t.vz[n] *= c),
            (t.vy[n] = t.vy[n] * c - t.grav[n] * e),
            (t.px[n] += t.vx[n] * e),
            (t.py[n] += t.vy[n] * e),
            (t.pz[n] += t.vz[n] * e));
          let l = t.kind[n];
          if (l === 1) {
            let e = t.gy[n];
            t.py[n] < e &&
              ((t.py[n] = e),
              (t.vy[n] *= -0.35),
              (t.vx[n] *= 0.6),
              (t.vz[n] *= 0.6));
          }
          let u = t.s0[n] + (t.s1[n] - t.s0[n]) * s,
            d = t.r[n],
            f = t.g[n],
            p = t.b[n],
            m = t.a[n];
          l === 0
            ? ((f *= 1 - s * 0.75),
              (p *= 1 - s),
              (d *= 1 - s * 0.3),
              (m *= (1 - s) * Math.min(1, s * 10)))
            : (m *= l === 1 ? 1 - s * s : l === 2 ? (1 - s) * (1 - s) : 1 - s);
          let h = o * 4;
          ((r[h] = t.px[n]),
            (r[h + 1] = t.py[n]),
            (r[h + 2] = t.pz[n]),
            (r[h + 3] = t.rot[n]),
            (i[h] = u),
            (i[h + 1] = u),
            (i[h + 2] = Mm + +(l === 3)),
            (i[h + 3] = l === 3 ? 2 : 0),
            (a[h] = d),
            (a[h + 1] = f),
            (a[h + 2] = p),
            (a[h + 3] = m),
            o++,
            n++);
        }
        let s = Rm;
        for (let e = 0; e < this.sprites; e++) {
          let t = (s + e) * 4,
            r = (o + e) * 4;
          for (let e = 0; e < 4; e++)
            ((n.pos[r + e] = n.pos[t + e]),
              (n.size[r + e] = n.size[t + e]),
              (n.col[r + e] = n.col[t + e]));
        }
        ((n.count = o + this.sprites), (this.sprites = 0));
      }
      {
        let e = this.decalPool,
          t = this.skidCount;
        for (let n = 0; n < this.shadows; n++) {
          let r = (Bm + n) * 4,
            i = (t + n) * 4;
          if (r !== i)
            for (let t = 0; t < 4; t++)
              ((e.pos[i + t] = e.pos[r + t]),
                (e.size[i + t] = e.size[r + t]),
                (e.col[i + t] = e.col[r + t]));
        }
        ((e.count = t + this.shadows),
          (this.shadows = 0),
          (this.skidDirty = !1));
      }
      {
        let e = this.quads;
        (e.begin(),
          e.append(this.decalPool, this.decalPool.count),
          e.append(this.smokePool, this.smokePool.count),
          e.append(this.glowPool, this.glowPool.count),
          e.commit());
      }
      if (this.dN > 0) {
        let t = 0;
        for (let n = 0; n < this.dN; n++) {
          if (this.dLife[n] <= 0) continue;
          this.dLife[n] -= e;
          let r = n * 3;
          ((this.dVel[r + 1] -= 9.8 * e),
            (this.dPos[r] += this.dVel[r] * e),
            (this.dPos[r + 1] += this.dVel[r + 1] * e),
            (this.dPos[r + 2] += this.dVel[r + 2] * e));
          let i =
            this.groundAt(this.dPos[r], this.dPos[r + 2], this.dPos[r + 1]) +
            this.dScale[r + 1] * 0.5;
          (this.dPos[r + 1] < i &&
            ((this.dPos[r + 1] = i),
            (this.dVel[r + 1] *= -0.3),
            (this.dVel[r] *= 0.55),
            (this.dVel[r + 2] *= 0.55),
            (this.dSpin[r] *= 0.5),
            (this.dSpin[r + 1] *= 0.5),
            (this.dSpin[r + 2] *= 0.5)),
            (this.dRot[r] += this.dSpin[r] * e),
            (this.dRot[r + 1] += this.dSpin[r + 1] * e),
            (this.dRot[r + 2] += this.dSpin[r + 2] * e));
          let a = Math.min(1, this.dLife[n]);
          if (
            (this._q.setFromEuler(
              this._e.set(this.dRot[r], this.dRot[r + 1], this.dRot[r + 2]),
            ),
            this._s.set(
              this.dScale[r] * a,
              this.dScale[r + 1] * a,
              this.dScale[r + 2] * a,
            ),
            this._m.compose(
              this._p.set(this.dPos[r], this.dPos[r + 1], this.dPos[r + 2]),
              this._q,
              this._s,
            ),
            this.debris.setMatrixAt(t, this._m),
            t !== n)
          ) {
            for (let e = 0; e < 3; e++)
              ((this.dPos[t * 3 + e] = this.dPos[r + e]),
                (this.dVel[t * 3 + e] = this.dVel[r + e]),
                (this.dRot[t * 3 + e] = this.dRot[r + e]),
                (this.dSpin[t * 3 + e] = this.dSpin[r + e]),
                (this.dScale[t * 3 + e] = this.dScale[r + e]));
            this.dLife[t] = this.dLife[n];
          }
          t++;
        }
        ((this.dN = t),
          (this.debris.count = t),
          (this.debris.instanceMatrix.needsUpdate = !0),
          (this.debris.visible = t > 0));
      } else this.debris.visible = !1;
    }
    warmup(e) {
      for (let t of this.group.children) t.visible = e;
    }
    get particleCount() {
      return this.smoke.n + this.glow.n;
    }
    get drawCalls() {
      return +(this.quads.count > 0) + +(this.dN > 0);
    }
  },
  Wm = 1 / 120,
  Gm = 0.15,
  Km = 16,
  qm = 0.05,
  Jm = 0.45,
  Ym = 0.5,
  Xm = 0.18,
  Zm = 5.5,
  Qm = ot(),
  $m = { x: 0, y: 0, z: 0 },
  eh = new L(),
  th = new L(),
  nh = { distance: 0, point: new L(), normal: new L(), tag: ``, body: null },
  rh = [],
  ih = new R(),
  ah = new R(),
  oh = new R(),
  sh = new I(),
  ch = new L(),
  q = new L(),
  lh = new O(),
  uh = new L(),
  dh = new L();
