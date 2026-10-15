// tokyo/assets/actors-qKVitB-C 67 — math
// Lines 30081-30983 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
var Nv = class {
  ctx;
  sim;
  cap;
  meshes = Array(t_).fill(null);
  lampsByKind = e_.map((e, t) => (bv[t] ?? bv[i_(t) ? 0 : 2]).slice());
  lightAttr = Array(t_).fill(null);
  seedAttr = Array(t_).fill(null);
  riders = null;
  fx;
  counts = new Int32Array(t_);
  rJ;
  rH;
  rA;
  rM;
  aJ;
  aH;
  aA;
  aM;
  riderColors = new Float32Array();
  patrolLights = !0;
  drawCalls = 0;
  tris = 0;
  trisPerKind = new Float64Array(t_);
  riderTris = 0;
  farS = null;
  farC = null;
  farSL = null;
  farSS = null;
  farCL = null;
  farCS = null;
  farSTris = 0;
  farCTris = 0;
  farCount = 0;
  batch = null;
  tier1 = new Float64Array(t_);
  tier2 = new Float64Array(t_);
  lampNearOk = !0;
  lampWet = !1;
  lampWetK = 0;
  lampDay = !1;
  lampOn = 0;
  lampTime = 0;
  constructor(e, t, n) {
    ((this.ctx = e),
      (this.sim = t),
      (this.cap = n),
      (this.fx = new Q_(n * 14)));
  }
  build(e, t, n, r = !0) {
    let i = this.ctx;
    if (
      t !== `on` &&
      e !== !0 &&
      ((this.batch = J_.build(i, this.cap, n, r)), this.batch)
    ) {
      for (let e = 0; e < t_; e++) {
        try {
          this.readLamps(e, i.vehicles.getInstancedAsset(e_[e]).geometry);
        } catch {}
        let t = i_(e);
        ((this.tier1[e] = t ? J.farScooter : e === 6 ? J.midBus : J.midCar),
          (this.tier2[e] = t || e === 6 ? 1e9 : J.farCar));
      }
      ((this.batch.mesh.castShadow = i.quality.level === `ultra`),
        i.scene.add(this.batch.mesh),
        i.scene.add(this.fx.mesh),
        this.fx.share(i.renderer, i.scene));
      return;
    }
    let o = !1,
      s = [],
      c,
      l = null;
    for (let e = 0; e < t_; e++) {
      let r = null,
        u = null;
      try {
        let t = i.vehicles.getInstancedAsset(e_[e]);
        ((r = t.geometry), (u = t.material));
      } catch (t) {
        console.warn(`[traffic] no instanced asset for`, e_[e], t);
      }
      let d = !r || r.type === `BoxGeometry`,
        f = t === `on` || (t === `auto` && d);
      if (f) {
        let [t, i, a] = n(e);
        ((r = _v(e_[e], t, i, a)), (u = l ??= vv()));
      }
      if (((s[e] = f), !r || !u)) continue;
      (this.readLamps(e, r),
        e === 0 && ((o = !f && Av(r)), (c = r.userData?.seat)));
      let p = new pe();
      for (let e of Object.keys(r.attributes))
        p.setAttribute(e, r.attributes[e]);
      r.index && p.setIndex(r.index);
      for (let e of r.groups) p.addGroup(e.start, e.count, e.materialIndex);
      ((p.boundingSphere = r.boundingSphere),
        (p.boundingBox = r.boundingBox),
        (p.userData = r.userData));
      let m = new a(new Float32Array(this.cap), 1).setUsage(b),
        h = new a(new Float32Array(this.cap), 1).setUsage(b);
      (p.setAttribute(`instanceLights`, m),
        p.setAttribute(`instanceSeed`, h),
        (this.lightAttr[e] = m),
        (this.seedAttr[e] = h),
        (this.trisPerKind[e] =
          (r.index ? r.index.count : r.attributes.position.count) / 3));
      let g = new we(p, u, this.cap);
      ((g.name = `traffic-${e_[e]}`),
        g.instanceMatrix.setUsage(b),
        (g.instanceColor = new a(new Float32Array(this.cap * 3).fill(1), 3)),
        g.instanceColor.setUsage(b),
        (g.frustumCulled = !1));
      let _ = Array.isArray(u) ? void 0 : u.userData.depthMaterial;
      (_ && (g.customDepthMaterial = _),
        (g.castShadow = i.quality.level === `ultra` && !i_(e)),
        (g.receiveShadow = !0),
        (g.count = 0),
        (g.visible = !1),
        i.scene.add(g),
        (this.meshes[e] = g));
    }
    if (e === !0 || (e !== !1 && !o)) {
      let e = ov(c?.y ?? 0.78, c?.z ?? 0.1),
        t = this.cap;
      ((this.rJ = new Float32Array(t * 3)),
        (this.rH = new Float32Array(t * 3)),
        (this.rA = new Float32Array(t * 3)),
        (this.rM = new Float32Array(t * 4)),
        (this.aJ = new a(this.rJ, 3).setUsage(b)),
        (this.aH = new a(this.rH, 3).setUsage(b)),
        (this.aA = new a(this.rA, 3).setUsage(b)),
        (this.aM = new a(this.rM, 4).setUsage(b)),
        e.setAttribute(`iJacket`, this.aJ),
        e.setAttribute(`iHelmet`, this.aH),
        e.setAttribute(`iAlt`, this.aA),
        e.setAttribute(`iMisc`, this.aM));
      let n = new we(e, sv(), t);
      ((n.name = `traffic-riders`),
        n.instanceMatrix.setUsage(b),
        (n.frustumCulled = !1),
        (n.receiveShadow = !0),
        (n.count = 0),
        (n.visible = !1),
        i.scene.add(n),
        (this.riders = n),
        (this.riderTris = e.attributes.position.count / 3),
        (this.riderColors = new Float32Array(this.sim.cars.length * 9)));
    }
    if (r && !this.riders) {
      let e = this.meshes[0],
        t = this.meshes[2];
      if (e && !s[0]) {
        let t = this.makeFar(R_(), e.material, `traffic-scooter-far`);
        ((this.farS = t.mesh),
          (this.farSL = t.la),
          (this.farSS = t.sa),
          (this.farSTris = t.tris));
      }
      if (t && !s[2]) {
        let e = this.makeFar(z_(), t.material, `traffic-car-far`);
        ((this.farC = e.mesh),
          (this.farCL = e.la),
          (this.farCS = e.sa),
          (this.farCTris = e.tris));
      }
    }
    (i.scene.add(this.fx.mesh), this.fx.share(i.renderer, i.scene));
  }
  makeFar(e, t, n) {
    let r = new a(new Float32Array(this.cap), 1).setUsage(b),
      i = new a(new Float32Array(this.cap), 1).setUsage(b);
    (e.setAttribute(`instanceLights`, r), e.setAttribute(`instanceSeed`, i));
    let o = new we(e, t, this.cap);
    return (
      (o.name = n),
      o.instanceMatrix.setUsage(b),
      (o.instanceColor = new a(new Float32Array(this.cap * 3).fill(1), 3)),
      o.instanceColor.setUsage(b),
      (o.frustumCulled = !1),
      (o.castShadow = !1),
      (o.receiveShadow = !0),
      (o.count = 0),
      (o.visible = !1),
      this.ctx.scene.add(o),
      { mesh: o, la: r, sa: i, tris: e.attributes.position.count / 3 }
    );
  }
  applyQuality() {
    let e = this.ctx.quality.level === `ultra`;
    this.batch && (this.batch.mesh.castShadow = e);
    for (let t = 0; t < t_; t++) {
      let n = this.meshes[t];
      n && (n.castShadow = e && !i_(t));
    }
  }
  setLod(e) {
    this.lodOn = e;
  }
  lodOn = !0;
  readLamps(e, t) {
    let n = t.userData?.lamps;
    if (!n?.head || !n?.tail || n.head.length < 3 || n.tail.length < 3) return;
    let r = this.lampsByKind[e];
    ((r[0] = Math.abs(n.head[0])),
      (r[1] = n.head[1]),
      (r[2] = n.head[2]),
      (r[3] = Math.abs(n.tail[0])),
      (r[4] = n.tail[1]),
      (r[5] = n.tail[2]));
  }
  prepareCar(e) {
    if (!this.riders || !e.two) return;
    let t = e.idx * 9,
      n = this.riderColors;
    (yv.setHex(e.riderJ),
      (n[t] = yv.r),
      (n[t + 1] = yv.g),
      (n[t + 2] = yv.b),
      yv.setHex(e.riderH),
      (n[t + 3] = yv.r),
      (n[t + 4] = yv.g),
      (n[t + 5] = yv.b),
      yv.setHex(e.riderAlt),
      (n[t + 6] = yv.r),
      (n[t + 7] = yv.g),
      (n[t + 8] = yv.b));
  }
  write() {
    let e = this.sim.active,
      t = this.counts;
    t.fill(0);
    let n = 0,
      r = 0,
      i = 0,
      a = bt.uNight.value,
      o = bt.uWet.value,
      s = bt.uTime.value,
      c = 0;
    try {
      c = this.ctx.env?.rain ?? 0;
    } catch {
      c = 0;
    }
    let l = Math.min(1, Math.max(a * 1.25 - 0.1, c * 0.8, 0)),
      u = c > 0.3,
      d = +(c > 0.3),
      f = this.fx,
      p = this.patrolLights;
    ((this.lampNearOk = this.ctx.quality.level !== `low`),
      (this.lampWet = o > 0.12 && l > 0.3),
      (this.lampWetK = o),
      (this.lampOn = l),
      (this.lampTime = s),
      (this.lampDay = l < 0.02));
    let m = this.lodOn ? this.farS : null,
      h = this.lodOn ? this.farC : null,
      g = J.farScooter,
      _ = J.farCar,
      v = J.farHyst;
    f.begin();
    let y = f.d,
      b,
      x = 0.5 * (1 - 0.45 * a);
    for (let t = 0; t < e.length; t++) {
      let n = e[t];
      n.visible &&
        ((n.dirty &&= (Pv(n), !1)),
        !(n.camDist > J.fxRange) &&
          (b = f.take()) >= 0 &&
          ((y[b] = n.x),
          (y[b + 1] = n.y + 0.035),
          (y[b + 2] = n.z),
          (y[b + 3] = n.halfW + (n.two ? 0.22 : 0.32)),
          (y[b + 4] = n.halfL + 0.35),
          (y[b + 5] = 1),
          (y[b + 6] = 0),
          (y[b + 7] = 0),
          (y[b + 8] = 0),
          (y[b + 9] = x),
          (y[b + 10] = n.sh),
          (y[b + 11] = -n.ch)));
    }
    let S = 0,
      C = this.batch;
    C && C.begin();
    let w = this.lodOn,
      T = 0;
    for (let o = 0; o < e.length; o++) {
      let c = e[o];
      if (!c.visible) continue;
      let l = c.kind,
        f = Mv(c, u, p),
        y = !1,
        b = c.two;
      if (C) {
        let e = 0;
        if (w) {
          let t = c.camDist,
            n = c.lod;
          t > this.tier1[l] + (n >= 1 ? -v : v) &&
            (e = t > this.tier2[l] + (n >= 2 ? -v : v) ? 2 : 1);
        }
        ((c.lod = e),
          (c.far = e > 0),
          e > 0 && T++,
          C.set(c, e, f),
          (S += C.trisOf(l, e)));
      } else
        (b
          ? m && (y = c.camDist > (c.far ? g - v : g + v))
          : l !== 6 && h && (y = c.camDist > (c.far ? _ - v : _ + v)),
          (c.far = y));
      let x = c.burnt ? 0.2 : c.wrecked ? 0.82 : 1,
        E = 0.001 + c.seed * 0.998;
      if (!C) {
        if (y) {
          let e = b ? m : h,
            t = b ? r++ : i++,
            n = e.instanceMatrix.array,
            a = t * 16;
          if ((n.set(c.mat, a), !b)) {
            let e = c.halfW,
              t = c.height,
              r = c.halfL;
            ((n[a] *= e),
              (n[a + 1] *= e),
              (n[a + 2] *= e),
              (n[a + 4] *= t),
              (n[a + 5] *= t),
              (n[a + 6] *= t),
              (n[a + 8] *= r),
              (n[a + 9] *= r),
              (n[a + 10] *= r));
          }
          let o = e.instanceColor.array;
          ((o[t * 3] = c.cr * x),
            (o[t * 3 + 1] = c.cg * x),
            (o[t * 3 + 2] = c.cb * x));
          let s = b ? this.farSL : this.farCL,
            l = b ? this.farSS : this.farCS;
          ((s.array[t] = f),
            (l.array[t] = E),
            (S += b ? this.farSTris : this.farCTris));
        } else {
          let e = this.meshes[l];
          if (!e) continue;
          let r = t[l]++;
          e.instanceMatrix.array.set(c.mat, r * 16);
          let i = e.instanceColor.array;
          if (
            ((i[r * 3] = c.cr * x),
            (i[r * 3 + 1] = c.cg * x),
            (i[r * 3 + 2] = c.cb * x),
            (this.lightAttr[l].array[r] = f),
            (this.seedAttr[l].array[r] = E),
            (S += this.trisPerKind[l]),
            l === 0 && this.riders && !c.abandoned && !c.wrecked)
          ) {
            this.riders.instanceMatrix.array.set(c.mat, n * 16);
            let e = c.idx * 9,
              t = this.riderColors;
            ((this.rJ[n * 3] = t[e]),
              (this.rJ[n * 3 + 1] = t[e + 1]),
              (this.rJ[n * 3 + 2] = t[e + 2]),
              (this.rH[n * 3] = t[e + 3]),
              (this.rH[n * 3 + 1] = t[e + 4]),
              (this.rH[n * 3 + 2] = t[e + 5]),
              (this.rA[n * 3] = t[e + 6]),
              (this.rA[n * 3 + 1] = t[e + 7]),
              (this.rA[n * 3 + 2] = t[e + 8]));
            let r = d && c.ponchoWearer ? 1 : 0;
            ((this.rM[n * 4] = +!!c.passenger),
              (this.rM[n * 4 + 1] = c.box),
              (this.rM[n * 4 + 2] = r),
              (this.rM[n * 4 + 3] =
                (c.mask && !r ? 1 : 0) + (c.v < 0.25 && c.mode !== 2 ? 2 : 0)),
              n++,
              (S += this.riderTris));
          }
        }
      }
      c.camDist < J.fxRange &&
        (!c.burnt && !(c.wrecked && c.fireT > 0) && this.lamps(c, f),
        (c.fireT > 0 || c.burnT > 0 || c.health < 40) && this.smoke(c, s, a));
    }
    f.end();
    let E = +(f.n > 0);
    if (C) {
      (C.end() > 0 && E++,
        (this.drawCalls = E),
        (this.tris = S),
        (this.farCount = T));
      return;
    }
    for (let e = 0; e < t_; e++) {
      let n = this.meshes[e];
      if (!n) continue;
      let r = t[e];
      ((n.count = r),
        (n.visible = r > 0),
        r > 0 &&
          (ev(n.instanceMatrix, r * 16),
          ev(n.instanceColor, r * 3),
          ev(this.lightAttr[e], r),
          ev(this.seedAttr[e], r),
          E++));
    }
    (m &&
      ((m.count = r),
      (m.visible = r > 0),
      r > 0 &&
        (ev(m.instanceMatrix, r * 16),
        ev(m.instanceColor, r * 3),
        ev(this.farSL, r),
        ev(this.farSS, r),
        E++)),
      h &&
        ((h.count = i),
        (h.visible = i > 0),
        i > 0 &&
          (ev(h.instanceMatrix, i * 16),
          ev(h.instanceColor, i * 3),
          ev(this.farCL, i),
          ev(this.farCS, i),
          E++)),
      this.riders &&
        ((this.riders.count = n),
        (this.riders.visible = n > 0),
        n > 0 &&
          (ev(this.riders.instanceMatrix, n * 16),
          ev(this.aJ, n * 3),
          ev(this.aH, n * 3),
          ev(this.aA, n * 3),
          ev(this.aM, n * 4),
          E++)),
      (this.drawCalls = E),
      (this.tris = S),
      (this.farCount = r + i));
  }
  smoke(e, t, n) {
    let r = this.fx,
      i = e.fireT > 0,
      a = e.burnT,
      o = i || (a > 0 && a < 14),
      s = a > 0 ? Math.max(0, 1 - a / 40) : 0,
      c = i ? 1 : e.health < 40 ? (40 - Math.max(0, e.health)) / 40 : 0;
    if (!o && s <= 0 && c <= 0) return;
    let l = e.sh,
      u = -e.ch,
      d = -u,
      f = l,
      p = e.two ? 0.1 : e.halfL * 0.55,
      m = e.x + l * p,
      h = e.z + u * p,
      g = e.y + (e.burnt ? e.height * 0.5 : e.two ? 0.55 : e.height * 0.62);
    if (a > 0 && a < 0.6) {
      let t = 1 - a / 0.6,
        n = 2.5 + a * 12;
      (r.push(
        0,
        e.x,
        e.y + 1.2 + a * 2,
        e.z,
        0,
        0,
        6 * t,
        3 * t,
        0.9 * t,
        0,
        n,
        0,
      ),
        r.push(
          0,
          e.x,
          e.y + 1.8 + a * 4,
          e.z,
          0,
          0,
          2.2 * t,
          0.8 * t,
          0.18 * t,
          0,
          n * 1.4,
          0,
        ),
        r.push(
          5,
          e.x,
          e.y,
          e.z,
          0,
          0,
          3 * t,
          1.3 * t,
          0.35 * t,
          0.5,
          e.halfW * 2.2 + a * 3,
          3 + a * 9,
        ));
    }
    if (o) {
      let o = i
          ? 0.6 + 0.4 * Math.min(1, (6.5 - e.fireT) / 3)
          : a < 2
            ? 1.25
            : Math.max(0.25, 1 - (a - 2) / 12),
        s = e.two ? 2 : i ? 3 : 5,
        c = i ? e.halfW * 0.75 : e.halfL * 0.8;
      for (let a = 0; a < s; a++) {
        let p = s > 1 ? a / (s - 1) - 0.5 : 0,
          _ =
            0.7 +
            0.3 *
              Math.sin(t * (11 + a * 3.7) + e.seed * 40 + a * 2.1) *
              Math.sin(t * 17.3 + a),
          v = i ? p * 2 * c : 0,
          y = i ? 0 : p * 2 * c,
          b = (i ? m : e.x) + d * v + l * y,
          x = (i ? h : e.z) + f * v + u * y,
          S = (e.two ? 1 : 1.8) * o * _ * (a % 2 ? 0.8 : 1.1),
          C = (2.4 + 0.8 * (1 - n)) * o * (0.8 + 0.2 * _);
        r.push(
          5,
          b,
          g - 0.2,
          x,
          0,
          0,
          1 * C,
          0.45 * C,
          0.12 * C,
          (e.seed * 7 + a * 0.37) % 1,
          (e.two ? 0.34 : 0.5) * o,
          S,
        );
      }
      let p = (i ? 1.2 : 1.6) * o * (1 + n);
      r.push(
        0,
        i ? m : e.x,
        g + 0.5,
        i ? h : e.z,
        0,
        0,
        1 * p,
        0.42 * p,
        0.1 * p,
        0,
        (e.two ? 1.2 : 2.2) * o,
        0,
      );
    }
    let _ = i || o,
      v = _ ? 10 : s > 0 ? 6 : c > 0.5 ? 5 : 4,
      y = _ ? 0.42 : 0.34,
      b = _ ? 9 : s > 0 ? 7 : 3.6,
      x = (_ ? 0.07 : s > 0 ? 0.13 : 0.66 - 0.36 * c) * (1 - 0.6 * n),
      S = _ ? 0.8 : s > 0 ? 0.55 * s + 0.1 : 0.22 + 0.4 * c,
      C = _ && !i ? e.x : m,
      w = _ && !i ? e.z : h;
    for (let i = 0; i < v; i++) {
      let a = t * y + i / v + e.seed * 7.3;
      a -= Math.floor(a);
      let o = g + 0.4 + a * b,
        s = a * a * (_ ? 4 : 2.2),
        c = Math.sin(i * 2.3 + e.seed * 11 + t * 0.7) * 0.45 * a,
        l = C + s * 0.85 + c,
        u = w + s * 0.3 - c * 0.5,
        d = (_ ? 0.8 : 0.45) + a * (_ ? 3.4 : 1.7),
        f = S * (a < 0.1 ? a / 0.1 : 1 - ((a - 0.1) / 0.9) * ((a - 0.1) / 0.9)),
        p = _ ? (1 - a) * (1 - a) * (0.2 + 0.35 * n) : 0;
      f > 0.01 &&
        r.push(
          4,
          l,
          o,
          u,
          0,
          0,
          x + p,
          x * 0.97 + p * 0.42,
          x * 0.94 + p * 0.12,
          f,
          d,
          0,
        );
    }
  }
  lamps(e, t) {
    let n = this.lampOn,
      r = this.lampTime,
      i = t & xv ? 1 : 0;
    if (this.lampDay && !i && !(t & 30) && !(e.two && e.camDist < J.drlRange))
      return;
    let a = this.fx,
      o = a.d,
      s,
      c = this.lampWetK,
      l = e.sh,
      u = -e.ch,
      d = -u,
      f = l,
      p = this.lampsByKind[e.kind],
      m = p[0] < 0.05,
      h = -p[2],
      g = -p[5],
      _ = e.y,
      v = e.two ? e.lean : 0,
      y = e.camDist < 130 && this.lampNearOk,
      b = y && this.lampWet,
      x = this.lampDay,
      S = e.mode === 2,
      C = e.abandoned || e.wrecked,
      w = C ? 0 : e.two ? Math.max(n, 0.12) : n,
      T = (C ? 0 : 0.08) + 2.2 * w,
      E = 0.13 + 0.24 * w;
    if (T > 0.01 && !(x && (!e.two || e.camDist > J.drlRange))) {
      if (m) {
        let t = p[1] * Math.cos(v),
          r = -Math.sin(v) * p[1],
          i = e.x + l * (h + 0.02) + d * r,
          m = e.z + u * (h + 0.02) + f * r;
        ((s = a.take()) >= 0 &&
          ((o[s] = i),
          (o[s + 1] = _ + t),
          (o[s + 2] = m),
          (o[s + 3] = E * 0.85),
          (o[s + 4] = 0),
          (o[s + 5] = 0),
          (o[s + 6] = 1 * T),
          (o[s + 7] = 0.94 * T),
          (o[s + 8] = 0.8 * T),
          (o[s + 9] = 0),
          (o[s + 10] = l),
          (o[s + 11] = u)),
          n > 0.3 &&
            y &&
            !S &&
            (s = a.take()) >= 0 &&
            ((o[s] = e.x + l * (h + 4)),
            (o[s + 1] = _ + 0.045),
            (o[s + 2] = e.z + u * (h + 4)),
            (o[s + 3] = 1.1),
            (o[s + 4] = 4.2),
            (o[s + 5] = 2),
            (o[s + 6] = 0.2 * n),
            (o[s + 7] = 0.18 * n),
            (o[s + 8] = 0.14 * n),
            (o[s + 9] = 0),
            (o[s + 10] = l),
            (o[s + 11] = u)),
          b &&
            (s = a.take()) >= 0 &&
            ((o[s] = i),
            (o[s + 1] = _ + 0.05),
            (o[s + 2] = m),
            (o[s + 3] = 0.22),
            (o[s + 4] = 1.1 + t * 1.1),
            (o[s + 5] = 3),
            (o[s + 6] = 0.3 * c * n),
            (o[s + 7] = 0.28 * c * n),
            (o[s + 8] = 0.22 * c * n),
            (o[s + 9] = 0),
            (o[s + 10] = 0),
            (o[s + 11] = 0)));
      } else {
        let t = p[0];
        for (let r = -1; r <= 1; r += 2) {
          let i = e.x + l * h + d * t * r,
            m = e.z + u * h + f * t * r;
          ((s = a.take()) >= 0 &&
            ((o[s] = i),
            (o[s + 1] = _ + p[1]),
            (o[s + 2] = m),
            (o[s + 3] = E),
            (o[s + 4] = 0),
            (o[s + 5] = 0),
            (o[s + 6] = 1 * T),
            (o[s + 7] = 0.94 * T),
            (o[s + 8] = 0.8 * T),
            (o[s + 9] = 0),
            (o[s + 10] = l),
            (o[s + 11] = u)),
            b &&
              (s = a.take()) >= 0 &&
              ((o[s] = i),
              (o[s + 1] = _ + 0.05),
              (o[s + 2] = m),
              (o[s + 3] = 0.28),
              (o[s + 4] = 1.1 + p[1] * 1.1),
              (o[s + 5] = 3),
              (o[s + 6] = 0.28 * c * n),
              (o[s + 7] = 0.26 * c * n),
              (o[s + 8] = 0.2 * c * n),
              (o[s + 9] = 0),
              (o[s + 10] = 0),
              (o[s + 11] = 0)));
        }
        if (n > 0.3 && y && !S) {
          let t = e.kind === 6 ? 9 : 7.5;
          (s = a.take()) >= 0 &&
            ((o[s] = e.x + l * (h + t)),
            (o[s + 1] = _ + 0.045),
            (o[s + 2] = e.z + u * (h + t)),
            (o[s + 3] = e.halfW + 1.4),
            (o[s + 4] = t),
            (o[s + 5] = 2),
            (o[s + 6] = 0.22 * n),
            (o[s + 7] = 0.2 * n),
            (o[s + 8] = 0.16 * n),
            (o[s + 9] = 0),
            (o[s + 10] = l),
            (o[s + 11] = u));
        }
      }
    }
    let D = C ? 0 : n,
      O = (C ? 0 : 0.06) + 0.75 * D + i * (1.2 + 0.6 * n),
      k = 0.13 + 0.12 * D + 0.06 * i;
    if (O > 0.01 && (!x || i)) {
      if (m) {
        let t = p[4] * Math.cos(v),
          r = -Math.sin(v) * p[4],
          i = e.x + l * g + d * r,
          m = e.z + u * g + f * r;
        ((s = a.take()) >= 0 &&
          ((o[s] = i),
          (o[s + 1] = _ + t),
          (o[s + 2] = m),
          (o[s + 3] = k * 0.8),
          (o[s + 4] = 0),
          (o[s + 5] = 0),
          (o[s + 6] = 1 * O),
          (o[s + 7] = 0.05 * O),
          (o[s + 8] = 0.03 * O),
          (o[s + 9] = 0),
          (o[s + 10] = -l),
          (o[s + 11] = -u)),
          b &&
            (s = a.take()) >= 0 &&
            ((o[s] = i),
            (o[s + 1] = _ + 0.05),
            (o[s + 2] = m),
            (o[s + 3] = 0.2),
            (o[s + 4] = 0.9 + t * 1),
            (o[s + 5] = 3),
            (o[s + 6] = 0.26 * c * O * n),
            (o[s + 7] = 0.012 * c * n),
            (o[s + 8] = 0.008 * c * n),
            (o[s + 9] = 0),
            (o[s + 10] = 0),
            (o[s + 11] = 0)));
      } else {
        let t = p[3];
        for (let r = -1; r <= 1; r += 2) {
          let i = e.x + l * g + d * t * r,
            m = e.z + u * g + f * t * r;
          ((s = a.take()) >= 0 &&
            ((o[s] = i),
            (o[s + 1] = _ + p[4]),
            (o[s + 2] = m),
            (o[s + 3] = k),
            (o[s + 4] = 0),
            (o[s + 5] = 0),
            (o[s + 6] = 1 * O),
            (o[s + 7] = 0.05 * O),
            (o[s + 8] = 0.03 * O),
            (o[s + 9] = 0),
            (o[s + 10] = -l),
            (o[s + 11] = -u)),
            b &&
              (s = a.take()) >= 0 &&
              ((o[s] = i),
              (o[s + 1] = _ + 0.05),
              (o[s + 2] = m),
              (o[s + 3] = 0.24),
              (o[s + 4] = 0.9 + p[4] * 1),
              (o[s + 5] = 3),
              (o[s + 6] = 0.24 * c * O * n),
              (o[s + 7] = 0.012 * c * n),
              (o[s + 8] = 0.008 * c * n),
              (o[s + 9] = 0),
              (o[s + 10] = 0),
              (o[s + 11] = 0)));
        }
      }
    }
    if (t & 14) {
      let n = (r + (0.001 + e.seed * 0.998) * 3.7) * 1.45;
      if (n - Math.floor(n) >= 0.5) {
        let n = 2.6,
          r = t & wv ? 0 : t & Sv ? -1 : 1;
        for (let t = -1; t <= 1; t += 2) {
          if (r !== 0 && t !== r) continue;
          let i = m ? 0.12 : p[0] + 0.08,
            c = m ? 0.9 : p[1] + 0.02,
            v = m ? 0.7 : p[4],
            y = e.x + l * h + d * i * t,
            b = e.z + u * h + f * i * t;
          ((s = a.take()) >= 0 &&
            ((o[s] = y),
            (o[s + 1] = _ + c),
            (o[s + 2] = b),
            (o[s + 3] = 0.2),
            (o[s + 4] = 0),
            (o[s + 5] = 0),
            (o[s + 6] = 1 * n),
            (o[s + 7] = 0.45 * n),
            (o[s + 8] = 0.02 * n),
            (o[s + 9] = 0),
            (o[s + 10] = l),
            (o[s + 11] = u)),
            (y = e.x + l * g + d * i * t),
            (b = e.z + u * g + f * i * t),
            (s = a.take()) >= 0 &&
              ((o[s] = y),
              (o[s + 1] = _ + v),
              (o[s + 2] = b),
              (o[s + 3] = 0.2),
              (o[s + 4] = 0),
              (o[s + 5] = 0),
              (o[s + 6] = 1 * n),
              (o[s + 7] = 0.45 * n),
              (o[s + 8] = 0.02 * n),
              (o[s + 9] = 0),
              (o[s + 10] = -l),
              (o[s + 11] = -u)));
        }
      }
    }
    if (t & Tv) {
      let t = r * 2.6,
        i = t - Math.floor(t),
        c = e.height + 0.08,
        p = 0.9 + 1.8 * n,
        m = i >= 0.5 ? 1 : 0.08,
        h = i < 0.5 ? 1 : 0.08,
        g = e.x - l * 0.1 - d * 0.3,
        v = e.z - u * 0.1 - f * 0.3;
      ((s = a.take()) >= 0 &&
        ((o[s] = g),
        (o[s + 1] = _ + c),
        (o[s + 2] = v),
        (o[s + 3] = 0.32),
        (o[s + 4] = 0),
        (o[s + 5] = 0),
        (o[s + 6] = 1 * p * m),
        (o[s + 7] = 0.04 * p * m),
        (o[s + 8] = 0.05 * p * m),
        (o[s + 9] = 0),
        (o[s + 10] = 0),
        (o[s + 11] = 0)),
        (g = e.x - l * 0.1 + d * 0.3),
        (v = e.z - u * 0.1 + f * 0.3),
        (s = a.take()) >= 0 &&
          ((o[s] = g),
          (o[s + 1] = _ + c),
          (o[s + 2] = v),
          (o[s + 3] = 0.32),
          (o[s + 4] = 0),
          (o[s + 5] = 0),
          (o[s + 6] = 0.05 * p * h),
          (o[s + 7] = 0.2 * p * h),
          (o[s + 8] = 1 * p * h),
          (o[s + 9] = 0),
          (o[s + 10] = 0),
          (o[s + 11] = 0)));
    } else
      (e.kind === 1 || e.kind === n_) && n > 0.2 && !(t & kv) && !C
        ? (s = a.take()) >= 0 &&
          ((o[s] = e.x - l * 0.3),
          (o[s + 1] = _ + e.height + 0.12),
          (o[s + 2] = e.z - u * 0.3),
          (o[s + 3] = 0.35),
          (o[s + 4] = 0),
          (o[s + 5] = 0),
          (o[s + 6] = 0.9 * n),
          (o[s + 7] = 0.7 * n),
          (o[s + 8] = 0.3 * n),
          (o[s + 9] = 0),
          (o[s + 10] = 0),
          (o[s + 11] = 0))
        : e.kind === 6 &&
          n > 0.2 &&
          !C &&
          (s = a.take()) >= 0 &&
          ((o[s] = e.x + l * (e.halfL - 0.05)),
          (o[s + 1] = _ + e.height - 0.35),
          (o[s + 2] = e.z + u * (e.halfL - 0.05)),
          (o[s + 3] = 0.55),
          (o[s + 4] = 0),
          (o[s + 5] = 0),
          (o[s + 6] = 1 * n),
          (o[s + 7] = 0.55 * n),
          (o[s + 8] = 0.1 * n),
          (o[s + 9] = 0),
          (o[s + 10] = l),
          (o[s + 11] = u));
  }
};
