// tokyo/assets/heli-C2W-6EbV 06 — math
// Lines 1225-1979 of readable/tokyo/assets/heli-C2W-6EbV.pretty.js (statement-aligned).
var lt = { y: 0, water: !1 },
  ut = [
    [-1.12, -2],
    [1.12, -2],
    [-1.12, 1.35],
    [1.12, 1.35],
    [0, -0.3],
  ],
  dt = class {
    env;
    id = 1e6 + ot++;
    kind = `helicopter`;
    livery;
    spec;
    object = new u();
    seat = new c();
    body;
    maxHealth = X.HP;
    health = X.HP;
    color;
    driver = `none`;
    sirenOn = !1;
    locked = !1;
    controls = { throttle: 0, brake: 0, steer: 0, handbrake: !1 };
    inPitch = 0;
    inYaw = 0;
    inColl = 0;
    vx = 0;
    vy = 0;
    vz = 0;
    heading = 0;
    yawRate = 0;
    pitch = 0;
    bank = 0;
    rpm = 0;
    rotorA = 0;
    grounded = !0;
    agl = 0;
    ground = 0;
    overWater = !1;
    destroyed = !1;
    destroyedAt = -1;
    onFire = !1;
    fireFuse = 1 / 0;
    sinking = 0;
    used = !1;
    reported = !1;
    strikeT = -10;
    hitT = -10;
    smokeT = 0;
    dustT = 0;
    loop = null;
    thrustA = 0.4;
    lastY = 0;
    wobT = Math.random() * 10;
    mats;
    bodyMesh;
    rotorMesh;
    tailMesh;
    farMesh;
    disc;
    discMat;
    near = !0;
    constructor(e, t, n, r, a, o) {
      this.env = e;
      let s = (this.livery = ce[t]);
      ((this.color = s.paint),
        (this.spec = {
          kind: `helicopter`,
          name: s.name,
          halfW: 1.2,
          halfL: 3.5,
          height: 3.2,
          mass: 2250,
          maxSpeed: X.VMAX,
          accel: X.ACCEL,
          twoWheeler: !1,
          seats: 6,
          colors: [s.paint],
        }));
      let c = e.geos;
      this.mats = e.material(s);
      let l = (e, t, n) => {
        let r = new i(e, this.mats.mat);
        return (
          (r.name = t),
          (r.castShadow = n),
          (r.receiveShadow = !0),
          (r.customDepthMaterial = this.mats.depth),
          r
        );
      };
      ((this.bodyMesh = l(c.body, `vehicle-heli-body`, !0)),
        (this.rotorMesh = l(c.rotor, `vehicle-heli-rotor`, !0)),
        this.rotorMesh.position.copy(xe),
        (this.rotorMesh.rotation.y = Math.random() * Math.PI * 2),
        (this.tailMesh = l(c.tail, `vehicle-heli-tail-rotor`, !1)),
        this.tailMesh.position.copy(Se),
        (this.farMesh = l(c.far, `vehicle-heli-far`, !0)),
        (this.farMesh.visible = !1),
        (this.discMat = e.discMaterial()),
        (this.disc = new i(mt(), this.discMat)),
        (this.disc.name = `vehicle-heli-disc`),
        this.disc.position.set(xe.x, xe.y + 0.03, xe.z),
        (this.disc.renderOrder = 5),
        (this.disc.visible = !1),
        this.seat.position.copy(we),
        (this.seat.userData = { kind: `helicopter`, pelvis: [0, 0, 0] }),
        (this.object.name = `heli-${t}`),
        this.object.add(
          this.bodyMesh,
          this.rotorMesh,
          this.tailMesh,
          this.farMesh,
          this.disc,
          this.seat,
        ),
        (this.body = {
          id: x(),
          kind: `vehicle`,
          owner: `vehicles-heli`,
          x: n,
          y: r,
          z: a,
          heading: o,
          halfW: 1.25,
          halfL: 3.55,
          radius: 3.8,
          height: Te.height,
          vx: 0,
          vz: 0,
          mass: 2250,
          active: !0,
          userData: { heli: this, noJack: !0, kind: `helicopter` },
          onDamage: (e) => this.onDamage(e),
          onImpact: (e, t) => this.onImpact(e, t),
        }));
      let u = this.mats.mat.vu;
      (u.uPaint.value.setHex(s.paint),
        u.uVarA.value.set(0, 0, 0, 0),
        u.uVarB.value.set(...s.varB),
        u.uState.value.set(0, 0, 0, 0),
        u.uSig.value.set(0, 0, 0, 0.5),
        this.place(n, r, a, o),
        e.ctx.dynamics.add(this.body));
    }
    get x() {
      return this.object.position.x;
    }
    get y() {
      return this.object.position.y;
    }
    get z() {
      return this.object.position.z;
    }
    get speed() {
      return (
        this.vx * Math.sin(this.heading) - this.vz * Math.cos(this.heading)
      );
    }
    get kmh() {
      return Math.hypot(this.vx, this.vz) * 3.6;
    }
    get hSpeed() {
      return Math.hypot(this.vx, this.vz);
    }
    get piloted() {
      return this.driver === `player`;
    }
    place(e, t, n, r) {
      (this.object.position.set(e, t, n),
        (this.heading = r),
        (this.vx = this.vy = this.vz = 0),
        (this.yawRate = 0),
        (this.pitch = this.bank = 0),
        (this.grounded = !0),
        (this.lastY = t),
        (this.ground = t),
        (this.agl = 0),
        this.syncBody(),
        this.object.rotation.set(0, -r, 0, `YXZ`),
        this.object.updateMatrixWorld(!0));
    }
    hits = [];
    hurt(e, t = ``) {
      if (!(this.destroyed || e <= 0)) {
        if (
          (this.hits.push({
            t: Math.round(this.env.ctx.time.elapsed * 10) / 10,
            why: t,
            dmg: Math.round(e),
          }),
          this.hits.length > 8 && this.hits.shift(),
          (this.health -= e),
          this.health <= 0)
        ) {
          ((this.health = 0), this.explode());
          return;
        }
        this.health <= X.FIRE_HP &&
          !this.onFire &&
          ((this.onFire = !0), (this.fireFuse = X.FIRE_FUSE));
      }
    }
    onDamage(e) {
      let t =
        e.source === `explosion` ? 1.4 : e.source === `vehicle` ? 0.5 : 0.6;
      this.hurt(e.amount * t, e.source);
    }
    onImpact(e, t) {
      let n = Math.hypot(e, t) / this.spec.mass;
      (n > 2 && this.hurt(0.8 * (n * n - 4), `rammed`),
        this.grounded &&
          !this.destroyed &&
          ((this.vx += (e / this.spec.mass) * 0.3),
          (this.vz += (t / this.spec.mass) * 0.3)));
    }
    explode() {
      if (this.destroyed) return;
      let e = this.env.ctx;
      ((this.destroyed = !0),
        (this.destroyedAt = e.time.elapsed),
        (this.health = 0),
        (this.onFire = !1),
        (this.fireFuse = 1 / 0),
        this.mats.mat.vu.uState.value.set(0, 0, 0, 1),
        (this.mats.mat.vu.uSig.value.x = 0));
      let t = this.x,
        n = this.y,
        r = this.z;
      (this.env.fx.explosion(t, n + 0.6, r, 1.5, this.livery.paint),
        this.env.onDestroyed(this));
    }
    repair() {
      this.destroyed ||
        ((this.health = X.HP), (this.onFire = !1), (this.fireFuse = 1 / 0));
    }
    update(e, t, n, r, i) {
      let a = this.piloted && !this.destroyed;
      if (
        ((this.rpm = a
          ? Math.min(1, this.rpm + e / X.SPOOL)
          : Math.max(0, this.rpm - e / (this.destroyed ? 1.2 : X.SPOOL_DOWN))),
        this.onFire &&
          !this.destroyed &&
          ((this.fireFuse -= e), this.fireFuse <= 0 && this.explode()),
        !this.grounded ||
          this.rpm > 0 ||
          this.hSpeed > 0.05 ||
          Math.abs(this.vy) > 0.05 ||
          this.sinking > 0)
      ) {
        let t = Math.hypot(this.vx, this.vy, this.vz),
          n = S(Math.ceil((t * e) / 0.4), 1, 8),
          r = e / n;
        for (let e = 0; e < n; e++) this.step(r, a);
        this.syncBody();
      }
      (this.sinking > 0 && (this.sinking += e),
        this.visuals(e, t, n, r, i),
        this.sound(e, t, n, r));
    }
    step(e, t) {
      let n = this.env.ctx,
        r = X,
        i = this.object.position,
        a = this.destroyed
          ? 0
          : t
            ? y(0.72, 1, this.rpm)
            : y(0.25, 0.85, this.rpm),
        o = Math.sin(this.heading),
        s = -Math.cos(this.heading),
        c = Math.cos(this.heading),
        l = Math.sin(this.heading),
        u = this.vx * o + this.vz * s,
        d = this.vx * c + this.vz * l;
      if (this.grounded) {
        let n = Math.exp(-6 * e);
        ((u *= n),
          (d *= n),
          (this.yawRate = 0),
          (this.vy = Math.min(this.vy, 0)),
          t &&
            this.inColl > 0.05 &&
            a > 0.97 &&
            ((this.grounded = !1), (this.vy = 0.8)));
      } else {
        let n = t ? this.inPitch : 0,
          o = n >= 0 ? n * r.VMAX : n * r.VBACK,
          s;
        s =
          Math.abs(o) > Math.abs(u) && o * u >= 0
            ? r.ACCEL * (1 - 0.55 * (u / r.VMAX) ** 2)
            : n === 0
              ? r.DECEL
              : r.BRAKE;
        let c = o - u,
          l = s * e * (t ? a : 0.15 * a);
        ((u += S(c, -l, l)), a < 0.5 && (u *= 1 - 0.12 * e));
        let f = d * Math.exp(-r.SIDE_DAMP * e);
        (Math.abs(u) > 1 &&
          (u += Math.sign(u) * (Math.abs(d) - Math.abs(f)) * 0.5),
          (d = f));
        let p = w(r.YAW_HOVER, r.YAW_FAST, S(Math.abs(u) / r.VMAX, 0, 1)),
          m = t
            ? this.inYaw * p
            : this.destroyed
              ? this.yawRate
              : 1.1 * (1 - 0.6 * a);
        ((this.yawRate += (m - this.yawRate) * Math.min(1, r.YAW_RESP * e)),
          (this.heading = te(this.heading + this.yawRate * e)));
        let h;
        if (t) {
          let e = this.inColl;
          ((h = e > 0 ? e * r.CLIMB : e < 0 ? e * r.DESCEND : 0),
            e < 0
              ? (h = Math.max(h, -(0.9 + this.agl * 0.85)))
              : e === 0 &&
                this.agl < 0.7 &&
                Math.hypot(u, d) < 2.5 &&
                (h = -0.6),
            (h = Math.min(h, ((this.env.ceiling ?? r.CEILING) - i.y) * 0.6)));
        } else h = this.destroyed ? -40 : -3;
        let g = this.vy + S(h - this.vy, -r.VACC * e, r.VACC * e),
          _ = this.vy - r.G * e;
        this.vy = w(_, g, a);
        let v = this.destroyed ? 40 : this.rpm > 0.15 ? r.AUTOROT : 30;
        this.vy < -v && (this.vy = -v);
      }
      ((this.vx = o * u + c * d),
        (this.vz = s * u + l * d),
        (i.x += this.vx * e),
        (i.y += this.vy * e),
        (i.z += this.vz * e),
        this.collide(o, s),
        this.separate(o, s));
      let f = -1 / 0,
        p = !1,
        m = Math.cos(this.heading),
        h = Math.sin(this.heading);
      for (let e = 0; e < ut.length; e++) {
        let [t, r] = ut[e];
        (st(n, i.x + t * m - r * h, i.z + t * h + r * m, i.y, lt),
          lt.y > f && ((f = lt.y), (p = lt.water)));
      }
      if (
        ((this.ground = f),
        (this.overWater = p),
        (this.agl = Math.max(0, i.y - f)),
        i.y <= f + 0.001)
      ) {
        let e = -this.vy;
        if (((i.y = f), !this.grounded)) {
          this.grounded = !0;
          let n = Math.hypot(this.vx, this.vz),
            r = 0;
          (e > 3.5 && (r += 7 * (e * e - 12)),
            n > 9 && (r += 1.2 * (n * n - 81)),
            r > 0 &&
              (this.hitFx(i.x, f + 0.2, i.z, 0, 0, Math.min(1, r / 300)),
              this.collision(e, `ground`),
              !t && e > 11
                ? this.hurt(X.HP, `crash`)
                : this.hurt(r, `landing ${e.toFixed(1)} m/s`)));
        }
        ((this.vy = 0),
          p && !this.destroyed && this.sinking === 0 && (this.sinking = 0.001));
      } else this.grounded && i.y > f + 0.06 && (this.grounded = !1);
      this.sinking > 0 &&
        ((i.y = f - Math.min(3.2, this.sinking * 0.6)),
        (this.vx *= 0.95),
        (this.vz *= 0.95));
    }
    collide(e, t) {
      let n = this.env.ctx,
        r = this.object.position,
        i = n.time.elapsed,
        a = ft;
      for (let o = 0; o < a.length; o++) {
        let [s, c, l, u, d] = a[o];
        if (d === 2 && this.rpm < 0.02 && this.grounded) continue;
        ((nt.x = r.x + e * -s), (nt.y = r.y + l), (nt.z = r.z + t * -s));
        let f = nt.x,
          p = nt.z;
        if ((n.statics.resolveCircle(nt, c, u, tt), !tt.hit && tt.depth <= 0))
          continue;
        let m = nt.x - f,
          h = nt.z - p,
          g = Math.hypot(m, h);
        if (g < 1e-5) continue;
        let _ = m / g,
          v = h / g;
        ((r.x += m), (r.z += h));
        let y = this.vx * _ + this.vz * v,
          b = tt.tag;
        if (y < 0) {
          let e = d === 2 ? 0.6 : 0.25;
          ((this.vx -= (1 + e) * y * _), (this.vz -= (1 + e) * y * v));
        }
        let x = Math.max(0, -y);
        if (!(at.has(b) || b.startsWith(`invisible`))) {
          if (d === 2) {
            if (this.rpm > 0.3 && i - this.strikeT > 0.25) {
              ((this.strikeT = i),
                (this.vx += _ * 3),
                (this.vz += v * 3),
                (this.yawRate += (Math.random() < 0.5 ? -1 : 1) * 1.2));
              let e = r.x - _ * Ce,
                t = r.z - v * Ce;
              (this.env.fx.sparks(e, r.y + xe.y, t, _, v, 22, 9),
                this.collision(6 + x, b),
                this.hurt(
                  40 + 3 * Math.hypot(this.vx, this.vz) + 14 * x,
                  `rotor strike (${b})`,
                ),
                this.env.onRotorStrike?.(this));
            }
          } else
            x > 3.5 &&
              i - this.hitT > 0.2 &&
              ((this.hitT = i),
              this.hitFx(
                nt.x - _ * c,
                r.y + l + u * 0.4,
                nt.z - v * c,
                _,
                v,
                Math.min(1, x / 20),
              ),
              this.collision(x, b),
              this.hurt(1.6 * (x * x - 12), `hit ${b} ${x.toFixed(1)} m/s`));
        }
      }
    }
    separate(e, t) {
      let n = this.object.position,
        r = n.x + e * 0.55,
        i = n.z + t * 0.55;
      for (let e of this.env.helis()) {
        if (e === this || Math.abs(e.y - n.y) > 3.2) continue;
        let t = r - e.body.x,
          a = i - e.body.z,
          o = Math.hypot(t, a);
        if (o >= 3.4 || o < 1e-4) continue;
        let s = t / o,
          c = a / o,
          l = 3.4 - o;
        ((n.x += s * l), (n.z += c * l));
        let u = this.vx * s + this.vz * c;
        u < 0 &&
          ((this.vx -= 1.3 * u * s),
          (this.vz -= 1.3 * u * c),
          -u > 3.5 &&
            (this.hurt(1.6 * (u * u - 12), `helicopter`),
            e.hurt(1 * (u * u - 12), `helicopter`)));
      }
    }
    collision(e, t) {
      let n = this.env.ctx;
      try {
        n.events.emit(`vehicle:collision`, {
          pos: new h(this.x, this.y + 1, this.z),
          impulse: Math.round(e * 100) / 100,
          vehicleId: this.id,
          other: t,
        });
      } catch {}
      if (this.piloted)
        try {
          (n.cameraRig.shake(S(e * 0.05, 0.1, 1)),
            n.input.rumble(S(e / 18, 0.2, 1), 160));
        } catch {}
    }
    hitFx(e, t, n, r, i, a) {
      let o = this.env.fx;
      o.sparks(e, t, n, r, i, Math.round(6 + 14 * a), 4 + 6 * a);
      for (let s = 0; s < 2 + 4 * a; s++)
        o.smokePuff(
          e,
          t,
          n,
          r * 2,
          1,
          i * 2,
          0.6,
          2.4,
          1.2,
          0.55,
          0.55,
          0.55,
          0.4,
          2,
          0.4,
        );
    }
    syncBody() {
      let e = this.body,
        t = this.object.position,
        n = Math.sin(this.heading),
        r = -Math.cos(this.heading);
      ((e.x = t.x + n * 0.55),
        (e.z = t.z + r * 0.55),
        (e.y = t.y),
        (e.heading = this.heading),
        (e.vx = this.vx),
        (e.vz = this.vz));
    }
    visuals(e, t, n, r, i) {
      let a = this.env.ctx,
        o = this.object;
      if (this.grounded)
        ((this.pitch = T(this.pitch, 0, 8, e)),
          (this.bank = T(this.bank, 0, 8, e)));
      else {
        let t = Math.sin(this.heading),
          n = -Math.cos(this.heading),
          r = Math.cos(this.heading),
          i = Math.sin(this.heading),
          a = this.vx * t + this.vz * n,
          o = this.vx * r + this.vz * i,
          s = e > 0 ? (a - this.vFa) / e : 0,
          c = e > 0 ? (o - this.vSa) / e : 0;
        ((this.vFa = a),
          (this.vSa = o),
          (this.aFs = T(this.aFs, S(s, -12, 12), 4, e)),
          (this.aSs = T(this.aSs, S(c, -12, 12), 4, e)));
        let l = S(-0.032 * this.aFs - 0.0021 * a, -0.3, 0.24),
          u = S(
            -this.yawRate * Math.abs(a) * 0.021 - 0.03 * this.aSs,
            -0.55,
            0.55,
          );
        this.wobT += e;
        let d =
          this.rpm > 0.9 && !this.grounded
            ? 1 - S(Math.hypot(a, o) / 8, 0, 1)
            : 0;
        ((this.pitch = T(
          this.pitch,
          l + d * 0.012 * Math.sin(this.wobT * 1.3),
          3,
          e,
        )),
          (this.bank = T(
            this.bank,
            u + d * 0.014 * Math.sin(this.wobT * 0.9 + 1),
            3.5,
            e,
          )),
          this.destroyed && (this.bank = T(this.bank, 0.35, 1, e)));
      }
      (o.rotation.set(this.pitch, -this.heading, this.bank, `YXZ`),
        (this.rotorA += this.rpm * 31 * e),
        this.rotorA > 1e4 && (this.rotorA -= Math.PI * 2 * 1e3),
        (this.rotorMesh.rotation.y = -this.rotorA),
        (this.tailMesh.rotation.x = this.rotorA * 4.6));
      let s = y(0.35, 1, this.rpm);
      ((this.disc.visible = s > 0.01 && !this.destroyed),
        this.disc.visible &&
          ((this.discMat.opacity = 0.5 * s),
          (this.disc.rotation.y = -this.rotorA * 0.13)));
      let c = Math.hypot(o.position.x - t, o.position.y - n, o.position.z - r),
        l = this.rpm > 0 || this.piloted || c < 95;
      (l !== this.near &&
        ((this.near = l),
        (this.bodyMesh.visible = this.rotorMesh.visible = l),
        (this.farMesh.visible = !l)),
        (this.tailMesh.visible = l && c < 70));
      let u = this.mats.mat.vu,
        d = this.rpm > 0.04 && !this.destroyed,
        f = a.time.elapsed,
        p = (f + (this.id % 7) * 0.13) % 1.3,
        m = d && (p < 0.05 || (p > 0.16 && p < 0.21)) ? 1 : 0,
        h = d && (i > 0.25 || this.agl < 30) ? 1 : 0;
      if (
        (u.uState.value.set(+!!d, m, h, +!!this.destroyed),
        (u.uSig.value.x = +!!d),
        (this.mats.mat.envMapIntensity = this.env.ownEnv() ? 1 - 0.8 * i : 1),
        c > 260)
      )
        return;
      let g = this.env.fx,
        _ = o.position;
      if (i > 0.2 && d) {
        if ((o.updateMatrixWorld(), m))
          for (let e of [-1.19, 1.19])
            (Z.set(e, 2.06, 5.7).applyMatrix4(o.matrixWorld),
              g.sprite(Z.x, Z.y, Z.z, 1.2, 1, 1, 1, 1.1 * i));
        if (
          ((f * 1.45 + 0) % 1 < 0.5 &&
            (Z.set(0, 2.76, 1.72).applyMatrix4(o.matrixWorld),
            g.sprite(Z.x, Z.y, Z.z, 0.55, 1, 0.15, 0.08, 0.7 * i)),
          h && this.agl < 45)
        ) {
          Z.set(0, 0, -3.4 - this.agl * 0.35).applyMatrix4(o.matrixWorld);
          let e = 3 + this.agl * 0.25;
          g.pool(
            Z.x,
            this.ground + 0.03,
            Z.z,
            this.heading,
            e,
            e * 1.3,
            1,
            0.95,
            0.85,
            0.55 * i * (1 - this.agl / 50),
          );
        }
      }
      let v = g.density;
      if (this.rpm > 0.45 && this.agl < 14 && !this.destroyed) {
        let t = (1 - this.agl / 14) * this.rpm;
        for (this.dustT -= e * t * 40 * v; this.dustT < 0;) {
          this.dustT += 1;
          let e = Math.random() * Math.PI * 2,
            n = 2.5 + Math.random() * 3.5,
            r = Math.cos(e),
            i = Math.sin(e),
            a = this.overWater,
            o = a ? 0.86 : 0.6 + Math.random() * 0.08;
          g.smokePuff(
            _.x + r * n,
            this.ground + 0.25,
            _.z + i * n,
            r * (7 + Math.random() * 5),
            0.4 + Math.random(),
            i * (7 + Math.random() * 5),
            0.8,
            3.2 + Math.random() * 1.5,
            0.9 + Math.random() * 0.6,
            o,
            a ? 0.9 : o * 0.93,
            a ? 0.95 : o * 0.82,
            (a ? 0.38 : 0.22) * t,
            1.6,
            0.2,
          );
        }
      }
      if (
        (this.health < X.SMOKE_HP || this.destroyed) &&
        ((this.smokeT -= e), this.smokeT <= 0)
      ) {
        ((this.smokeT = this.destroyed ? 0.09 : this.onFire ? 0.05 : 0.11),
          o.updateMatrixWorld(),
          Z.set(0, 2.65, 2.55).applyMatrix4(o.matrixWorld));
        let e =
          this.onFire || this.destroyed
            ? 0.08
            : 0.32 * (this.health / X.SMOKE_HP) + 0.08;
        (g.smokePuff(
          Z.x,
          Z.y,
          Z.z,
          this.vx * 0.3 + (Math.random() - 0.5),
          1.5 + Math.random(),
          this.vz * 0.3 + (Math.random() - 0.5),
          0.6,
          3.5,
          2.2,
          e,
          e,
          e,
          0.7,
          0.8,
          1.2,
        ),
          (this.onFire || (this.destroyed && f - this.destroyedAt < 25)) &&
            g.glowParticle(
              0,
              Z.x + (Math.random() - 0.5) * 0.6,
              Z.y,
              Z.z + (Math.random() - 0.5) * 0.6,
              this.vx * 0.2,
              1.5,
              this.vz * 0.2,
              1.1,
              1.8,
              0.45,
              1,
              0.5 + Math.random() * 0.2,
              0.15,
              2.2,
            ));
      }
    }
    vFa = 0;
    vSa = 0;
    aFs = 0;
    aSs = 0;
    sound(e, t, n, r) {
      let i = this.env.ctx,
        a = this.object.position,
        o = Math.hypot(a.x - t, a.y - n, a.z - r),
        s = this.rpm > 0.01 && o < 320 && !this.destroyed;
      if (s && !this.loop)
        try {
          this.loop = i.audio.loop(`helicopter`, {
            x: a.x,
            y: a.y + 2,
            z: a.z,
            volume: 1,
          });
        } catch {
          this.loop = null;
        }
      else if (!s && this.loop) {
        try {
          this.loop.stop();
        } catch {}
        this.loop = null;
      }
      let c = this.loop;
      if (!c) return;
      let l = (a.y - this.lastY) / Math.max(e, 0.001);
      this.lastY = a.y;
      let u =
        S(
          0.32 +
            Math.abs(this.inColl) * 0.28 +
            Math.max(0, l) * 0.03 +
            Math.abs(this.aFs) * 0.03 +
            this.hSpeed * 0.004,
          0.25,
          1,
        ) * this.rpm;
      this.thrustA += (u - this.thrustA) * Math.min(1, e * 2.5);
      try {
        (c.setParam(`rpm`, this.rpm),
          c.setParam(`thrust`, this.thrustA),
          c.setPosition(a.x, a.y + 2, a.z));
      } catch {}
    }
    dispose() {
      let e = this.env.ctx;
      try {
        this.loop?.stop();
      } catch {}
      ((this.loop = null),
        e.dynamics.remove(this.body),
        (this.body.active = !1),
        this.object.removeFromParent(),
        this.env.releaseMaterial(this.mats),
        this.discMat.dispose());
    }
  },
  ft = [
    [-1.1, 1.45, 0.25, 2.5, 0],
    [4.4, 0.55, 1.2, 1.5, 1],
    [6.6, 0.7, 1, 2.2, 1],
    [0, Ce - 0.15, xe.y - 0.15, 0.32, 2],
  ],
  pt = null;
