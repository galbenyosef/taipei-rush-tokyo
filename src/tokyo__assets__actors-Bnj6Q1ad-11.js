// tokyo__assets__actors-Bnj6Q1ad 11 — math
// Lines 5204-6057 of readable/tokyo__assets__actors-Bnj6Q1ad.pretty.js (statement-aligned).
var Ua = 0,
  Wa = 1,
  Ga = 2,
  Ka = class {
    max;
    points;
    pos;
    col;
    misc;
    vel;
    life;
    maxLife;
    grow;
    grav;
    drag;
    alpha0;
    size0;
    n = 0;
    gPos;
    gCol;
    gMisc;
    constructor(e, t) {
      ((this.max = e),
        (this.pos = new Float32Array(e * 3)),
        (this.col = new Float32Array(e * 4)),
        (this.misc = new Float32Array(e * 4)),
        (this.vel = new Float32Array(e * 3)),
        (this.life = new Float32Array(e)),
        (this.maxLife = new Float32Array(e)),
        (this.grow = new Float32Array(e)),
        (this.grav = new Float32Array(e)),
        (this.drag = new Float32Array(e)),
        (this.alpha0 = new Float32Array(e)),
        (this.size0 = new Float32Array(e)));
      let n = new fe();
      ((this.gPos = new I(this.pos, 3).setUsage(b)),
        (this.gCol = new I(this.col, 4).setUsage(b)),
        (this.gMisc = new I(this.misc, 4).setUsage(b)),
        n.setAttribute(`position`, this.gPos),
        n.setAttribute(`aColor`, this.gCol),
        n.setAttribute(`aMisc`, this.gMisc),
        n.setDrawRange(0, 0),
        (this.points = new F(n, t)),
        (this.points.name = `player-fx-points`),
        (this.points.frustumCulled = !1),
        (this.points.visible = !0),
        (this.points.renderOrder = 11));
    }
    spawn(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
      let g = this.n;
      g >= this.max ? (g = (Math.random() * this.max) | 0) : this.n++;
      let _ = g * 3,
        v = g * 4;
      ((this.pos[_] = t),
        (this.pos[_ + 1] = n),
        (this.pos[_ + 2] = r),
        (this.vel[_] = i),
        (this.vel[_ + 1] = a),
        (this.vel[_ + 2] = o),
        (this.col[v] = s),
        (this.col[v + 1] = c),
        (this.col[v + 2] = l),
        (this.col[v + 3] = u),
        (this.misc[v] = d),
        (this.misc[v + 1] = e),
        (this.alpha0[g] = u),
        (this.size0[g] = d),
        (this.grow[g] = f),
        (this.life[g] = p),
        (this.maxLife[g] = p),
        (this.grav[g] = m),
        (this.drag[g] = h));
    }
    update(e, t = !1) {
      let n = this.n;
      if (n === 0) {
        this.points.visible = t;
        return;
      }
      for (let t = 0; t < n; t++) {
        if (((this.life[t] -= e), this.life[t] <= 0)) {
          (n--, t !== n && this.copy(n, t), t--);
          continue;
        }
        let r = t * 3,
          i = Math.max(0, 1 - this.drag[t] * e);
        ((this.vel[r] *= i),
          (this.vel[r + 1] = this.vel[r + 1] * i - this.grav[t] * e),
          (this.vel[r + 2] *= i),
          (this.pos[r] += this.vel[r] * e),
          (this.pos[r + 1] += this.vel[r + 1] * e),
          (this.pos[r + 2] += this.vel[r + 2] * e));
        let a = this.life[t] / this.maxLife[t];
        ((this.col[t * 4 + 3] = this.alpha0[t] * (a < 0.6 ? a / 0.6 : 1)),
          (this.misc[t * 4] =
            this.size0[t] + this.grow[t] * (1 - a) * this.maxLife[t]));
      }
      ((this.n = n),
        (this.points.visible = n > 0),
        this.points.geometry.setDrawRange(0, n),
        this.gPos.clearUpdateRanges(),
        this.gPos.addUpdateRange(0, n * 3),
        (this.gPos.needsUpdate = !0),
        this.gCol.clearUpdateRanges(),
        this.gCol.addUpdateRange(0, n * 4),
        (this.gCol.needsUpdate = !0),
        this.gMisc.clearUpdateRanges(),
        this.gMisc.addUpdateRange(0, n * 4),
        (this.gMisc.needsUpdate = !0));
    }
    copy(e, t) {
      let n = e * 3,
        r = t * 3,
        i = e * 4,
        a = t * 4;
      for (let e = 0; e < 3; e++)
        ((this.pos[r + e] = this.pos[n + e]),
          (this.vel[r + e] = this.vel[n + e]));
      for (let e = 0; e < 4; e++)
        ((this.col[a + e] = this.col[i + e]),
          (this.misc[a + e] = this.misc[i + e]));
      ((this.life[t] = this.life[e]),
        (this.maxLife[t] = this.maxLife[e]),
        (this.grow[t] = this.grow[e]),
        (this.grav[t] = this.grav[e]),
        (this.drag[t] = this.drag[e]),
        (this.alpha0[t] = this.alpha0[e]),
        (this.size0[t] = this.size0[e]));
    }
  },
  qa = class {
    pool;
    mode;
    constructor(e, t) {
      ((this.pool = e), (this.mode = t));
    }
    spawn(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m) {
      this.pool.spawn(this.mode, e, t, n, r, i, a, o, s, c, l, u, d, f, p, m);
    }
  },
  Ja = 24,
  Ya = 64,
  Xa = 88,
  Za = class {
    ctx;
    pool;
    add;
    alpha;
    uniforms;
    quads;
    qPos;
    qCol;
    qMisc;
    qDirty = !1;
    tracers = [];
    tracerN = 0;
    decalIdx = 0;
    decalCount = 0;
    light = null;
    lightT = 0;
    v = new R();
    a = new R();
    b = new R();
    side = new R();
    toCam = new R();
    tu = new R();
    tv = new R();
    warm = 12;
    constructor(e) {
      this.ctx = e;
    }
    init() {
      let e = this.ctx.scene;
      this.ctx.events.on(`quality:changed`, () => (this.warm = 8));
      let [t, n] = mt(64, 64),
        r = n.createRadialGradient(32, 32, 2, 32, 32, 30);
      (r.addColorStop(0, `rgba(8,8,8,1)`),
        r.addColorStop(0.22, `rgba(20,18,16,.95)`),
        r.addColorStop(0.35, `rgba(60,55,50,.55)`),
        r.addColorStop(1, `rgba(60,55,50,0)`),
        (n.fillStyle = r),
        n.fillRect(0, 0, 64, 64),
        (n.strokeStyle = `rgba(15,15,15,.6)`),
        (n.lineWidth = 1.2));
      for (let e = 0; e < 7; e++) {
        let t = (e / 7) * Math.PI * 2 + Math.sin(e * 3.1) * 0.4;
        (n.beginPath(),
          n.moveTo(32 + Math.cos(t) * 6, 32 + Math.sin(t) * 6),
          n.lineTo(
            32 + Math.cos(t) * (14 + (e % 3) * 5),
            32 + Math.sin(t) * (14 + (e % 3) * 5),
          ),
          n.stroke());
      }
      ((this.uniforms = m.merge([
        me.fog,
        { uScale: { value: 600 }, uDecal: { value: null } },
      ])),
        (this.uniforms.uDecal.value = yt(t)),
        (this.uniforms.uNight = Qe.uNight),
        (this.pool = new Ka(480, Ha(this.uniforms, `player-fx`))),
        (this.add = new qa(this.pool, Ua)),
        (this.alpha = new qa(this.pool, Wa)),
        e.add(this.pool.points));
      let i = new fe();
      ((this.qPos = new Float32Array(1056)),
        (this.qCol = new Float32Array(1408)),
        (this.qMisc = new Float32Array(1408)));
      for (let e = 0; e < Xa; e++)
        for (let t = 0; t < 4; t++) {
          let n = (e * 4 + t) * 4;
          ((this.qMisc[n + 1] = e < Ya ? Ga : Ua),
            (this.qMisc[n + 2] = t & 1),
            (this.qMisc[n + 3] = t >> 1));
        }
      (i.setAttribute(`position`, new I(this.qPos, 3).setUsage(b)),
        i.setAttribute(`aColor`, new I(this.qCol, 4).setUsage(b)),
        i.setAttribute(`aMisc`, new I(this.qMisc, 4)));
      let a = [];
      for (let e = 0; e < Xa; e++)
        a.push(e * 4, e * 4 + 1, e * 4 + 2, e * 4 + 2, e * 4 + 1, e * 4 + 3);
      (i.setIndex(a), i.setDrawRange(0, 0));
      let o = Ha(this.uniforms, `player-fx`);
      ((o.polygonOffset = !0),
        (o.polygonOffsetFactor = -4),
        (o.polygonOffsetUnits = -4),
        (this.quads = new M(i, o)),
        (this.quads.name = `player-fx-quads`),
        (this.quads.frustumCulled = !1),
        (this.quads.visible = !0),
        (this.quads.renderOrder = 10),
        e.add(this.quads));
      for (let e = 0; e < Ja; e++)
        this.tracers.push({
          sx: 0,
          sy: 0,
          sz: 0,
          dx: 0,
          dy: 0,
          dz: 0,
          len: 0,
          t: 0,
          life: 0,
        });
      this.ctx.quality.dynamicLights >= 4 &&
        ((this.light = new g(16757850, 0, 9, 2)), e.add(this.light));
    }
    muzzle(e, t, n) {
      let r = this.add,
        i = (n ? 1.1 : 1) * (0.85 + Math.random() * 0.3);
      (r.spawn(
        e.x + t.x * 0.03,
        e.y + t.y * 0.03,
        e.z + t.z * 0.03,
        0,
        0,
        0,
        3.6,
        2.2,
        0.9,
        1,
        0.17 * i,
        0,
        0.04,
        0,
        0,
      ),
        r.spawn(
          e.x + t.x * 0.1,
          e.y + t.y * 0.1,
          e.z + t.z * 0.1,
          t.x * 5,
          t.y * 5,
          t.z * 5,
          3.2,
          1.5,
          0.35,
          1,
          0.13 * i,
          -1,
          0.045,
          0,
          0,
        ),
        r.spawn(
          e.x + t.x * 0.2,
          e.y + t.y * 0.2,
          e.z + t.z * 0.2,
          t.x * 8,
          t.y * 8,
          t.z * 8,
          2.6,
          0.9,
          0.2,
          0.9,
          0.09 * i,
          -1,
          0.04,
          0,
          0,
        ));
      for (let n = 0; n < 3; n++) {
        let n = 3 + Math.random() * 3;
        r.spawn(
          e.x,
          e.y,
          e.z,
          t.x * n + (Math.random() - 0.5) * 2,
          t.y * n + (Math.random() - 0.5) * 2,
          t.z * n + (Math.random() - 0.5) * 2,
          3,
          1.6,
          0.4,
          1,
          0.04,
          0,
          0.08,
          4,
          2,
        );
      }
      (this.alpha.spawn(
        e.x + t.x * 0.1,
        e.y + t.y * 0.1,
        e.z + t.z * 0.1,
        t.x * 0.6,
        0.35,
        t.z * 0.6,
        0.55,
        0.55,
        0.55,
        0.22,
        0.12,
        0.5,
        0.5,
        -0.2,
        1.5,
      ),
        this.light &&
          (this.light.position.copy(e),
          (this.light.intensity = n ? 9 : 7),
          (this.lightT = 0.05)));
    }
    tracer(e, t) {
      let n = t.x - e.x,
        r = t.y - e.y,
        i = t.z - e.z,
        a = Math.hypot(n, r, i);
      if (a < 1.5) return;
      let o =
        this.tracers[
          this.tracerN < Ja ? this.tracerN++ : (Math.random() * Ja) | 0
        ];
      ((o.sx = e.x),
        (o.sy = e.y),
        (o.sz = e.z),
        (o.dx = n / a),
        (o.dy = r / a),
        (o.dz = i / a),
        (o.len = a),
        (o.t = 0),
        (o.life = a / 380 + 0.03));
    }
    impact(e, t, n) {
      let r = this.add,
        i = this.alpha;
      if (n === `flesh`) {
        for (let n = 0; n < 6; n++)
          i.spawn(
            e.x,
            e.y,
            e.z,
            t.x * 1.2 + (Math.random() - 0.5) * 1.6,
            0.4 + Math.random() * 1.2,
            t.z * 1.2 + (Math.random() - 0.5) * 1.6,
            0.32,
            0.02,
            0.02,
            0.85,
            0.07 + Math.random() * 0.05,
            0.12,
            0.35 + Math.random() * 0.2,
            7,
            1,
          );
        i.spawn(
          e.x,
          e.y,
          e.z,
          t.x * 0.3,
          0.2,
          t.z * 0.3,
          0.25,
          0.02,
          0.02,
          0.35,
          0.18,
          0.5,
          0.35,
          0,
          2,
        );
        return;
      }
      if (n === `water`) {
        this.splash(e, !1);
        return;
      }
      let a = n === `metal` ? 12 : 7;
      for (let n = 0; n < a; n++) {
        let n = 2.5 + Math.random() * 4;
        r.spawn(
          e.x + t.x * 0.02,
          e.y + t.y * 0.02,
          e.z + t.z * 0.02,
          (t.x + (Math.random() - 0.5) * 1.4) * n,
          (t.y + Math.random() * 0.9) * n,
          (t.z + (Math.random() - 0.5) * 1.4) * n,
          3.2,
          1.7,
          0.5,
          1,
          0.035,
          0,
          0.18 + Math.random() * 0.22,
          9.8,
          1,
        );
      }
      let o = n === `metal` ? 0.5 : 0.62;
      for (let n = 0; n < 4; n++)
        i.spawn(
          e.x + t.x * 0.05,
          e.y + t.y * 0.05,
          e.z + t.z * 0.05,
          t.x * (0.6 + Math.random()) + (Math.random() - 0.5) * 0.5,
          t.y * 0.6 + 0.25 + Math.random() * 0.3,
          t.z * (0.6 + Math.random()) + (Math.random() - 0.5) * 0.5,
          o,
          o * 0.95,
          o * 0.88,
          0.5,
          0.1,
          0.9,
          0.55 + Math.random() * 0.3,
          0.3,
          2.2,
        );
      n !== `metal` && this.decal(e, t);
    }
    punch(e, t) {
      let n = this.add;
      n.spawn(
        e.x,
        e.y,
        e.z,
        0,
        0,
        0,
        1.3,
        1.15,
        1,
        0.8,
        t ? 0.26 : 0.18,
        1,
        0.06,
        0,
        0,
      );
      for (let r = 0; r < (t ? 8 : 5); r++) {
        let t = Math.random() * Math.PI * 2,
          r = (Math.random() - 0.3) * 2;
        n.spawn(
          e.x,
          e.y,
          e.z,
          Math.cos(t) * 3,
          r * 1.5,
          Math.sin(t) * 3,
          2.5,
          2.2,
          1.6,
          1,
          0.05,
          0,
          0.12,
          2,
          4,
        );
      }
      this.alpha.spawn(
        e.x,
        e.y,
        e.z,
        0,
        0.2,
        0,
        0.8,
        0.78,
        0.72,
        0.25,
        0.2,
        0.9,
        0.35,
        0,
        2,
      );
    }
    dust(e, t, n) {
      for (let r = 0; r < t; r++) {
        let i = (r / t) * Math.PI * 2 + Math.random() * 0.5,
          a = (0.8 + Math.random() * 0.8) * n;
        this.alpha.spawn(
          e.x + Math.cos(i) * 0.15,
          e.y + 0.05,
          e.z + Math.sin(i) * 0.15,
          Math.cos(i) * a,
          0.25 + Math.random() * 0.3,
          Math.sin(i) * a,
          0.62,
          0.6,
          0.55,
          0.32,
          0.2,
          0.9,
          0.6 + Math.random() * 0.3,
          0.2,
          2.5,
        );
      }
    }
    splash(e, t) {
      let n = t ? 34 : 12;
      for (let r = 0; r < n; r++) {
        let n = Math.random() * Math.PI * 2,
          r = Math.random(),
          i = (t ? 3.5 : 2) + Math.random() * (t ? 3 : 1.5);
        this.alpha.spawn(
          e.x + Math.cos(n) * r * 0.3,
          e.y,
          e.z + Math.sin(n) * r * 0.3,
          Math.cos(n) * (0.6 + r * 1.8),
          i,
          Math.sin(n) * (0.6 + r * 1.8),
          0.85,
          0.92,
          0.95,
          0.75,
          0.1 + Math.random() * 0.08,
          0.25,
          0.6 + Math.random() * 0.4,
          9.8,
          0.4,
        );
      }
      for (let n = 0; n < (t ? 6 : 2); n++) {
        let t = Math.random() * Math.PI * 2;
        this.alpha.spawn(
          e.x,
          e.y + 0.05,
          e.z,
          Math.cos(t) * 0.8,
          0.1,
          Math.sin(t) * 0.8,
          0.9,
          0.95,
          1,
          0.35,
          0.4,
          1.4,
          0.8,
          0,
          2,
        );
      }
    }
    puddle(e, t) {
      let n = 2 + ((t * 4) | 0);
      for (let r = 0; r < n; r++) {
        let n = Math.random() * Math.PI * 2,
          r = 0.4 + Math.random() * 0.8;
        this.alpha.spawn(
          e.x,
          e.y,
          e.z,
          Math.cos(n) * r,
          0.9 + Math.random() * 1.1 * t,
          Math.sin(n) * r,
          0.78,
          0.84,
          0.9,
          0.5,
          0.035,
          0.05,
          0.25 + Math.random() * 0.15,
          9.8,
          0.5,
        );
      }
    }
    wake(e, t, n) {
      let r = this.alpha,
        i = Math.sin(t),
        a = -Math.cos(t),
        o = Math.cos(t),
        s = Math.sin(t),
        c = Math.min(1, n / 2.2);
      if (Math.random() < 0.18 + c * 0.3)
        for (let t = -1; t <= 1; t += 2) {
          let n = (Math.random() - 0.5) * 0.08,
            l = e.x + i * 0.3 + o * (t * 0.16 + n),
            u = e.z + a * 0.3 + s * (t * 0.16 + n),
            d = 0.22 + c * 0.28;
          r.spawn(
            l,
            e.y,
            u,
            o * t * d - i * 0.1,
            0,
            s * t * d - a * 0.1,
            0.78,
            0.86,
            0.9,
            0.13 + c * 0.07,
            0.05,
            0.3,
            0.95,
            0,
            1.6,
          );
        }
      if (Math.random() < c * 0.3) {
        let t = e.x - i * 0.95 + (Math.random() - 0.5) * 0.25,
          n = e.z - a * 0.95 + (Math.random() - 0.5) * 0.25;
        r.spawn(
          t,
          e.y + 0.01,
          n,
          -i * 0.15,
          0.08,
          -a * 0.15,
          0.85,
          0.9,
          0.93,
          0.16,
          0.05,
          0.2,
          0.55,
          0.3,
          1.5,
        );
      }
    }
    decal(e, t) {
      let n = this.decalIdx;
      ((this.decalIdx = (n + 1) % Ya),
        (this.decalCount = Math.min(Ya, this.decalCount + 1)));
      let r = this.tu,
        i = this.tv;
      (Math.abs(t.y) < 0.9 ? r.set(t.z, 0, -t.x) : r.set(0, -t.z, t.y),
        r.normalize(),
        i.crossVectors(t, r));
      let a = Math.random() * Math.PI * 2,
        o = Math.cos(a),
        s = Math.sin(a),
        c = (0.1 + Math.random() * 0.05) * 0.5,
        l = (r.x * o + i.x * s) * c,
        u = (r.y * o + i.y * s) * c,
        d = (r.z * o + i.z * s) * c,
        f = (i.x * o - r.x * s) * c,
        p = (i.y * o - r.y * s) * c,
        m = (i.z * o - r.z * s) * c,
        h = this.v.copy(e).addScaledVector(t, 0.012),
        g = this.qPos,
        _ = this.qCol,
        v = n * 12;
      for (let e = 0; e < 4; e++) {
        let t = e & 1 ? 1 : -1,
          r = e >> 1 ? 1 : -1;
        ((g[v + e * 3] = h.x + l * t + f * r),
          (g[v + e * 3 + 1] = h.y + u * t + p * r),
          (g[v + e * 3 + 2] = h.z + d * t + m * r));
        let i = (n * 4 + e) * 4;
        _[i] = _[i + 1] = _[i + 2] = _[i + 3] = 1;
      }
      this.qDirty = !0;
    }
    update(e) {
      let t = this.ctx,
        n = t.camera;
      this.uniforms.uScale.value =
        (t.renderer.height * t.renderer.pixelRatio) /
        (2 * Math.tan((n.fov * Math.PI) / 360));
      let r = this.warm > 0;
      (r && this.warm--,
        this.pool.update(e, r),
        this.light &&
          this.lightT > 0 &&
          ((this.lightT -= e), this.lightT <= 0 && (this.light.intensity = 0)));
      let i = this.tracerN,
        a = 0;
      for (let t = 0; t < i; t++) {
        let r = this.tracers[t];
        if (((r.t += e), r.t >= r.life)) {
          i--;
          let e = this.tracers[i];
          ((this.tracers[i] = r), (this.tracers[t] = e), t--);
          continue;
        }
        let o = Math.min(r.len, (r.t + 0.012) * 380),
          s = Math.max(0, o - Math.min(7, r.len * 0.5));
        (this.a.set(r.sx + r.dx * s, r.sy + r.dy * s, r.sz + r.dz * s),
          this.b.set(r.sx + r.dx * o, r.sy + r.dy * o, r.sz + r.dz * o),
          this.toCam.subVectors(n.position, this.a),
          this.side
            .set(r.dx, r.dy, r.dz)
            .cross(this.toCam)
            .normalize()
            .multiplyScalar(0.022));
        let c = Ya + a,
          l = c * 12,
          u = this.qPos,
          d = this.qCol;
        ((u[l] = this.a.x - this.side.x),
          (u[l + 1] = this.a.y - this.side.y),
          (u[l + 2] = this.a.z - this.side.z),
          (u[l + 3] = this.a.x + this.side.x),
          (u[l + 4] = this.a.y + this.side.y),
          (u[l + 5] = this.a.z + this.side.z),
          (u[l + 6] = this.b.x - this.side.x),
          (u[l + 7] = this.b.y - this.side.y),
          (u[l + 8] = this.b.z - this.side.z),
          (u[l + 9] = this.b.x + this.side.x),
          (u[l + 10] = this.b.y + this.side.y),
          (u[l + 11] = this.b.z + this.side.z));
        let f = (1 - r.t / r.life) * 1.35,
          p = c * 16;
        for (let e = 0; e < 2; e++)
          ((d[p + e * 4] = 0.25 * f),
            (d[p + e * 4 + 1] = 0.15 * f),
            (d[p + e * 4 + 2] = 0.05 * f),
            (d[p + e * 4 + 3] = 1));
        for (let e = 2; e < 4; e++)
          ((d[p + e * 4] = 2.4 * f),
            (d[p + e * 4 + 1] = 1.8 * f),
            (d[p + e * 4 + 2] = 0.9 * f),
            (d[p + e * 4 + 3] = 1));
        a++;
      }
      this.tracerN = i;
      let o = this.decalCount,
        s = this.quads.geometry;
      (a > 0
        ? s.setDrawRange(o > 0 ? 0 : 384, (o > 0 ? Ya + a : a) * 6)
        : s.setDrawRange(0, o * 6),
        (a > 0 || this.qDirty) &&
          ((this.qDirty = !1),
          (s.attributes.position.needsUpdate = !0),
          (s.attributes.aColor.needsUpdate = !0)),
        (this.quads.visible = r || o > 0 || a > 0));
    }
    clearDecals() {
      ((this.decalCount = 0),
        (this.decalIdx = 0),
        this.qPos.fill(0, 0, 768),
        (this.qDirty = !0));
    }
  },
  Qa = 0,
  $a = 4,
  eo = 5,
  to = 6,
  no = 9,
  ro = class {
    pos = [];
    nor = [];
    col = [];
    surf = [];
    si = [];
    idx = [];
    c = new Ae();
    v = new R();
    n = new R();
    nm = new c();
    add(e, t, n, r, i = $a, a = 0.5, o = 0) {
      let s = e.attributes.position;
      e.attributes.normal || e.computeVertexNormals();
      let c = e.attributes.normal,
        l = this.pos.length / 3;
      (this.nm.getNormalMatrix(t), typeof n == `number` && this.c.setHex(n));
      for (let e = 0; e < s.count; e++)
        (this.v.fromBufferAttribute(s, e).applyMatrix4(t),
          this.n.fromBufferAttribute(c, e).applyMatrix3(this.nm).normalize(),
          this.pos.push(this.v.x, this.v.y, this.v.z),
          this.nor.push(this.n.x, this.n.y, this.n.z),
          typeof n == `function` && n(this.v.x, this.v.y, this.v.z, this.c),
          this.col.push(this.c.r, this.c.g, this.c.b),
          this.surf.push(i, a, 0, o),
          this.si.push(r, 0, 0, 0));
      if (e.index)
        for (let t = 0; t < e.index.count; t++)
          this.idx.push(l + e.index.getX(t));
      else for (let e = 0; e < s.count; e++) this.idx.push(l + e);
      e.dispose();
    }
    build() {
      let e = this.pos.length / 3,
        t = new fe();
      (t.setAttribute(`position`, new N(this.pos, 3)),
        t.setAttribute(`normal`, new N(this.nor, 3)),
        t.setAttribute(`color`, new N(this.col, 3)),
        t.setAttribute(`uv`, new N(new Float32Array(e * 2).fill(0.5), 2)),
        t.setAttribute(`uvRect`, new N(new Float32Array(e * 4), 4)),
        t.setAttribute(`surf`, new N(this.surf, 4)),
        t.setAttribute(`skinIndex`, new h(this.si, 4)));
      let n = new Float32Array(e * 4);
      for (let t = 0; t < e; t++) n[t * 4] = 1;
      return (
        t.setAttribute(`skinWeight`, new N(n, 4)),
        t.setIndex(e > 65535 ? new P(this.idx, 1) : new h(this.idx, 1)),
        t.computeBoundingSphere(),
        (this.pos = []),
        (this.nor = []),
        (this.col = []),
        (this.surf = []),
        (this.si = []),
        (this.idx = []),
        t
      );
    }
  },
  io = new y(),
  ao = new k(),
  oo = new R(),
  so = new R(),
  co = (e, t, n, r = 0, i = 0, a = 0, o = 1, s = 1, c = 1) =>
    new ke().compose(
      so.set(e, t, n),
      io.setFromEuler(ao.set(r, i, a)),
      oo.set(o, s, c),
    ),
  lo = (e, t, n, r = 0.004) =>
    new mn(
      e,
      t,
      n,
      1,
      Math.max(1e-4, Math.min(r, e / 2 - 1e-4, t / 2 - 1e-4, n / 2 - 1e-4)),
    ),
  uo = (e, t, n, r = 10, i = !1) => new w(e, t, n, r, 1, i),
  fo = (e, t, n, r = 10, i = 8, a = 0, o = Math.PI * 2, s = 0, c = Math.PI) => {
    let l = new D(1, r, i, a, o, s, c);
    return (l.scale(e, t, n), l);
  };
