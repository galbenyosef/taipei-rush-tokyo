// tokyo__assets__actors-Bnj6Q1ad 101 — pos
// Lines 48746-49402 of readable/tokyo__assets__actors-Bnj6Q1ad.pretty.js (statement-aligned).
var Gw = new R(0, 1.84, 0),
  Kw = new R(0.14, 1.1, 5.72),
  qw = new R(),
  Jw = new R(),
  Yw = st(),
  Xw = st(),
  Zw = new R(),
  Qw = { amount: 0, source: `police`, weapon: `rifle` },
  $w = class {
    S;
    group = new _();
    bodyMesh;
    bodyMat;
    rotorGeo;
    uRotor = { value: 0 };
    disc;
    active = !1;
    state = `arrive`;
    pos = new R();
    vel = new R();
    heading = 0;
    bank = 0;
    pitch = 0;
    rotorA = 0;
    orbitA = 0;
    alt = 60;
    roofY = 0;
    roofT = 0;
    los = !1;
    losT = 0;
    lastSeenT = -99;
    fireT = 0;
    burst = 0;
    spotX = 0;
    spotZ = 0;
    engine = null;
    thrustA = 0.6;
    lastAlt = 0;
    wind = null;
    announced = !1;
    hp = 450;
    crashT = 0;
    spin = 0;
    body;
    blipT = 0;
    assaultT = -99;
    tower;
    constructor(e) {
      this.S = e;
      let { all: t, rotor: n } = Ww();
      this.rotorGeo = n;
      let r = Hw();
      ((this.bodyMat = fw(`police-heli`, {
        tex: r,
        rotor: this.uRotor,
        rotorP: Gw,
        tailP: Kw,
      })),
        et(t),
        et(n),
        et(r),
        (this.bodyMesh = new Se(t, this.bodyMat, 1)),
        (this.bodyMesh.castShadow = !0),
        (this.bodyMesh.name = `police-heli-body`),
        (this.disc = e.fx.rotorDisc(5.6, 0, 0.5)),
        this.disc.position.set(0, 1.86, 0),
        (this.disc.renderOrder = 5),
        this.group.add(this.bodyMesh, this.disc),
        (this.group.visible = !1),
        (this.body = {
          id: Xe(),
          kind: `police`,
          owner: `police`,
          x: 0,
          y: 0,
          z: 0,
          heading: 0,
          halfW: 2.2,
          halfL: 2.2,
          radius: 2.4,
          height: 3.2,
          vx: 0,
          vz: 0,
          mass: 3e3,
          active: !1,
          userData: { heli: !0 },
          onDamage: (e) => this.onDamage(e),
        }));
    }
    proto = null;
    prototypes() {
      return (
        this.proto ||
          ((this.proto = new Se(this.rotorGeo, this.bodyMat, 1)),
          (this.proto.castShadow = !0),
          (this.proto.receiveShadow = !0),
          (this.proto.name = `police-heli-prewarm`),
          (this.proto.frustumCulled = !1)),
        this.proto.parent ? [] : [this.proto]
      );
    }
    addTo(e) {
      ((this.tower = this.S.ctx.plan.landmark(`taipei101`)), e.add(this.group));
    }
    get meshes() {
      return [this.bodyMesh, this.disc];
    }
    spawn() {
      if (this.active) return;
      let e = this.S.P,
        t = Math.random() * Math.PI * 2;
      (this.pos.set(e.x + Math.sin(t) * 300, 120, e.z - Math.cos(t) * 300),
        this.vel.set(-Math.sin(t) * 30, 0, Math.cos(t) * 30),
        (this.heading = Math.atan2(-Math.sin(t), -Math.cos(t))),
        (this.orbitA = t),
        (this.alt = 120),
        (this.lastAlt = 120),
        (this.state = `arrive`),
        (this.active = !0),
        (this.announced = !1),
        (this.hp = 450),
        (this.fireT = this.S.now + 4),
        (this.group.visible = !0),
        this.bodyMat.color.setHex(16777215),
        (this.body.active = !0),
        this.S.ctx.dynamics.add(this.body));
      let n = this.S.ctx;
      try {
        ((this.engine = n.audio.loop(`helicopter`, {
          x: this.pos.x,
          y: this.pos.y,
          z: this.pos.z,
          volume: 1,
        })),
          this.engine.setParam(`rpm`, 1),
          this.engine.setParam(`thrust`, 0.6),
          (this.thrustA = 0.6),
          (this.wind = n.audio.loop(`wind`, {
            x: this.pos.x,
            y: this.pos.y,
            z: this.pos.z,
            volume: 0.9,
            rate: 1.6,
          })));
      } catch {}
      try {
        n.ui.addBlip(`police-heli`, {
          x: this.pos.x,
          z: this.pos.z,
          icon: `police`,
          color: `#4da3ff`,
          label: { zh: `警用直升機`, en: `Police helicopter` },
        });
      } catch {}
    }
    despawn() {
      if (this.active) {
        ((this.active = !1),
          (this.group.visible = !1),
          (this.body.active = !1),
          this.S.ctx.dynamics.remove(this.body),
          this.engine?.stop(),
          this.wind?.stop(),
          (this.engine = this.wind = null));
        try {
          this.S.ctx.ui.removeBlip(`police-heli`);
        } catch {}
      }
    }
    leave() {
      this.active &&
        this.state !== `crash` &&
        this.state !== `wreck` &&
        (this.state = `leave`);
    }
    onDamage(e) {
      if (
        !this.active ||
        this.state === `crash` ||
        this.state === `wreck` ||
        e.source === `police`
      )
        return;
      this.hp -= e.amount;
      let t = this.S.P,
        n = e.source === `player`;
      this.hp <= 0
        ? ((this.state = `crash`),
          (this.crashT = 0),
          (this.spin = 0),
          this.S.ctx.audio.play(`explosion`, {
            x: this.pos.x,
            y: this.pos.y,
            z: this.pos.z,
            volume: 0.8,
          }),
          this.S.fx.flash(this.pos.x, this.pos.y, this.pos.z, 8, 5, 2, 9, 0.5),
          n && this.S.crimeAgainstPolice(`kill_police`, t.x, t.z, 1.2),
          this.S.dispatch(
            {
              zh: `空勤直升機被擊中！正在墜落！`,
              en: `Air unit hit! We are going down!`,
            },
            !0,
          ))
        : n &&
          this.S.now - this.assaultT > 3 &&
          ((this.assaultT = this.S.now),
          this.S.crimeAgainstPolice(`assault_police`, t.x, t.z, 0.6));
    }
    sampleRoof(e, t) {
      return (
        qw.set(e, 600, t),
        Jw.set(0, -1, 0),
        this.S.ctx.statics.raycast(qw, Jw, 600, Yw) ? 600 - Yw.distance : 0
      );
    }
    sees() {
      let e = this.S.P,
        t = e.x - this.pos.x,
        n = e.y + 1 - this.pos.y,
        r = e.z - this.pos.z,
        i = Math.hypot(t, n, r);
      return i > Sx.heli
        ? !1
        : (qw.set(this.pos.x, this.pos.y - 1.2, this.pos.z),
          Jw.set(t, n, r).multiplyScalar(1 / i),
          !this.S.ctx.statics.raycast(qw, Jw, i - 1));
    }
    seesPoint(e, t) {
      if (
        !this.active ||
        this.state === `crash` ||
        this.state === `wreck` ||
        Math.hypot(e - this.pos.x, t - this.pos.z, this.pos.y) > Sx.heli
      )
        return !1;
      (qw.set(this.pos.x, this.pos.y - 1.2, this.pos.z),
        Jw.set(e - this.pos.x, 0.5 - this.pos.y, t - this.pos.z));
      let n = Jw.length();
      return (
        Jw.multiplyScalar(1 / n),
        !this.S.ctx.statics.raycast(qw, Jw, n - 1)
      );
    }
    update(e) {
      if (!this.active) return;
      let t = this.S,
        n = t.P,
        r = t.W,
        i = t.ctx,
        a = t.now;
      if (this.state === `crash` || this.state === `wreck`) {
        (this.updateCrash(e), this.apply(e));
        return;
      }
      let o, s, c, l;
      if (this.state === `leave`) {
        let e = this.pos.x - n.x,
          t = this.pos.z - n.z,
          r = Math.hypot(e, t) || 1;
        if (
          ((o = this.pos.x + (e / r) * 200),
          (s = this.pos.z + (t / r) * 200),
          (c = 0),
          (l = 0),
          r > 450)
        ) {
          this.despawn();
          return;
        }
      } else
        !r.evading && r.level > 0
          ? ((o = n.x + n.vx * 1.4),
            (s = n.z + n.vz * 1.4),
            (c = 36 + Math.min(n.speed, 25) * 0.9),
            (l = 12),
            this.state === `arrive` &&
              Math.hypot(this.pos.x - n.x, this.pos.z - n.z) < 90 &&
              (this.state = `orbit`),
            this.state === `search` && (this.state = `orbit`))
          : ((o = r.lastX),
            (s = r.lastZ),
            (c = Math.max(45, r.searchR * 0.6)),
            (l = 15),
            this.state !== `arrive` && (this.state = `search`));
      (!this.announced &&
        Math.hypot(this.pos.x - n.x, this.pos.z - n.z) < 170 &&
        this.state !== `leave` &&
        ((this.announced = !0), t.dispatch(Dw.heli, !0)),
        (this.orbitA += (c > 0 ? l / c : 0) * e));
      let u = o + Math.sin(this.orbitA) * c,
        d = s - Math.cos(this.orbitA) * c,
        f = u,
        p = d,
        m = f,
        h = p,
        g = this.tower;
      if (g) {
        let e = m - g.x,
          t = h - g.z,
          n = Math.hypot(e, t);
        n < 95 &&
          ((m = g.x + (e / (n || 1)) * 95), (h = g.z + (t / (n || 1)) * 95));
      }
      let _ = m - this.pos.x,
        v = h - this.pos.z,
        y = Math.hypot(_, v),
        b = this.state === `arrive` || this.state === `leave` ? 42 : 30,
        x = Math.min(b, y * 0.9 + (this.state === `orbit` ? n.speed * 0.5 : 0)),
        S = y > 0.01 ? (_ / y) * x : 0,
        C = y > 0.01 ? (v / y) * x : 0,
        w = (S - this.vel.x) * 1.4,
        T = (C - this.vel.z) * 1.4,
        E = Math.hypot(w, T);
      if (
        (E > 8 && ((w *= 8 / E), (T *= 8 / E)),
        (this.vel.x += w * e),
        (this.vel.z += T * e),
        (this.pos.x += this.vel.x * e),
        (this.pos.z += this.vel.z * e),
        a > this.roofT)
      ) {
        this.roofT = a + 0.35;
        let e = this.sampleRoof(
            this.pos.x + this.vel.x * 1.5,
            this.pos.z + this.vel.z * 1.5,
          ),
          t = this.sampleRoof(this.pos.x, this.pos.z);
        this.roofY = Math.min(170, Math.max(e, t));
      }
      let D = this.state === `leave` ? 140 : this.state === `arrive` ? 90 : 50;
      ((this.alt +=
        (Math.max(D, this.roofY + 26) - this.alt) *
        Math.min(1, e * (this.roofY + 26 > this.alt ? 1.6 : 0.5))),
        (this.pos.y = this.alt + Math.sin(a * 0.9) * 0.6));
      let O;
      O =
        this.state === `orbit` || this.state === `search`
          ? Math.atan2(this.spotX - this.pos.x, -(this.spotZ - this.pos.z))
          : Math.atan2(this.vel.x, -this.vel.z);
      let k = Math.atan2(this.vel.x, -this.vel.z),
        A = Math.hypot(this.vel.x, this.vel.z);
      ((O += z(k - O) * V(A / 60, 0, 0.35)),
        (this.heading = Ye(this.heading, O, 1.2, e)));
      let j = Math.sin(this.heading),
        M = -Math.cos(this.heading),
        N = Math.cos(this.heading),
        P = Math.sin(this.heading),
        F = w * j + T * M,
        ee = w * N + T * P,
        te = this.vel.x * j + this.vel.z * M;
      ((this.pitch +=
        (V(-F * 0.035 - te * 0.006, -0.3, 0.25) - this.pitch) *
        Math.min(1, e * 2.5)),
        (this.bank +=
          (V(-ee * 0.05, -0.38, 0.38) - this.bank) * Math.min(1, e * 2.5)),
        a > this.losT &&
          ((this.losT = a + 0.3),
          (this.los = n.alive && this.sees()),
          this.los && (this.lastSeenT = a)),
        this.los &&
          r.level > 0 &&
          !r.frozen &&
          this.state !== `leave` &&
          t.spotted(`heli`));
      let ne, re;
      if (this.state === `orbit` && this.los)
        ((ne = n.x + Math.sin(a * 1.7) * 1.2),
          (re = n.z + Math.cos(a * 1.3) * 1.2));
      else {
        let e = Math.max(20, r.searchR * 0.55);
        ((ne = r.lastX + Math.sin(a * 0.37) * e),
          (re = r.lastZ + Math.cos(a * 0.29 + 1) * e * 0.8));
      }
      let ie = Math.min(1, e * (this.los ? 3 : 0.8));
      if (
        ((this.spotX += (ne - this.spotX) * ie),
        (this.spotZ += (re - this.spotZ) * ie),
        this.apply(e),
        this.drawLights(),
        r.level >= (ux.heliGun ?? 4) &&
          !r.frozen &&
          this.los &&
          this.state === `orbit` &&
          a > this.fireT)
      ) {
        let e = Math.hypot(
          n.x - this.pos.x,
          n.y - this.pos.y,
          n.z - this.pos.z,
        );
        this.burst <= 0 && Zx(i, n.x, n.z, 3.5) > 0
          ? (this.fireT = a + 0.8)
          : e < Dx.range * 0.7 &&
            (this.burst <= 0 &&
              (this.burst =
                Dx.burst[0] +
                ((Math.random() * (Dx.burst[1] - Dx.burst[0] + 1)) | 0)),
            this.fire(),
            this.burst--,
            (this.fireT =
              a +
              (this.burst > 0
                ? Dx.shotGap
                : Dx.burstGap[0] +
                  Math.random() * (Dx.burstGap[1] - Dx.burstGap[0]))));
      }
      if (this.engine) {
        let t = (this.alt - this.lastAlt) / Math.max(e, 0.001);
        this.lastAlt = this.alt;
        let n = V(0.5 + t * 0.05 + E * 0.03 + A * 0.004, 0.35, 1);
        ((this.thrustA += (n - this.thrustA) * Math.min(1, e * 2)),
          this.engine.setParam(`thrust`, this.thrustA),
          this.engine.setPosition(this.pos.x, this.pos.y, this.pos.z));
      }
      if (
        (this.wind?.setPosition(this.pos.x, this.pos.y, this.pos.z),
        a > this.blipT)
      ) {
        this.blipT = a + 0.2;
        try {
          i.ui.updateBlip(`police-heli`, this.pos.x, this.pos.z);
        } catch {}
      }
    }
    apply(e) {
      let t = this.group;
      (t.position.copy(this.pos),
        t.rotation.set(this.pitch, -this.heading, this.bank, `YXZ`),
        (this.rotorA +=
          e * (this.state === `wreck` ? 0 : this.state === `crash` ? 18 : 27)),
        (this.uRotor.value = this.rotorA % (Math.PI * 2 * 10)),
        (this.disc.visible = this.state !== `wreck`),
        (this.disc.rotation.y = -this.rotorA * 0.37),
        (this.body.x = this.pos.x),
        (this.body.z = this.pos.z),
        (this.body.y = this.pos.y - 1.5),
        (this.body.heading = this.heading),
        (this.body.vx = this.vel.x),
        (this.body.vz = this.vel.z));
    }
    drawLights() {
      let e = this.S,
        t = e.fx,
        n = t.night,
        r = e.now,
        i = this.group.matrixWorld;
      if (
        (this.group.updateMatrixWorld(),
        Zw.set(-1.25, -0.1, -0.4).applyMatrix4(i),
        t.glare(Zw.x, Zw.y, Zw.z, 3, 0.1, 0.08, 0.5 + n * 0.7),
        Zw.set(1.25, -0.1, -0.4).applyMatrix4(i),
        t.glare(Zw.x, Zw.y, Zw.z, 0.1, 2.6, 0.4, 0.5 + n * 0.7),
        Zw.set(0, 0.5, 6.25).applyMatrix4(i),
        t.glare(Zw.x, Zw.y, Zw.z, 2, 2, 2, 0.4 + n * 0.5),
        +((r * 1.1) % 1 < 0.12) &&
          (Zw.set(0, 1.45, 1.5).applyMatrix4(i),
          t.glare(Zw.x, Zw.y, Zw.z, 6, 0.3, 0.2, 0.9 + n * 1.2),
          Zw.set(0, -1.1, 0.2).applyMatrix4(i),
          t.glare(Zw.x, Zw.y, Zw.z, 6, 0.3, 0.2, 0.8 + n * 1.1)),
        n > 0.25 && this.state !== `leave`)
      ) {
        Zw.set(0.45, -1.05, -2.2).applyMatrix4(i);
        let r = e.ctx.plan.groundHeight(this.spotX, this.spotZ);
        Jw.set(this.spotX - Zw.x, r - Zw.y, this.spotZ - Zw.z);
        let a = 3.2 + Jw.length() * 0.045;
        (t.beam(
          Zw.x,
          Zw.y,
          Zw.z,
          this.spotX,
          r,
          this.spotZ,
          0.035 * a,
          a,
          0.22 * n,
        ),
          t.glare(Zw.x, Zw.y, Zw.z, 9 * n, 8.6 * n, 7.6 * n, 1.4),
          t.pool(
            this.spotX,
            r,
            this.spotZ,
            a * 1.15,
            1.25 * n,
            1.2 * n,
            1.05 * n,
          ),
          t.pool(
            this.spotX,
            r,
            this.spotZ,
            a * 0.55,
            0.9 * n,
            0.88 * n,
            0.8 * n,
          ));
      }
    }
    fire() {
      let e = this.S,
        t = e.P,
        n = e.ctx,
        r = this.group.matrixWorld,
        i = Math.cos(this.heading),
        a = Math.sin(this.heading),
        o = (t.x - this.pos.x) * i + (t.z - this.pos.z) * a >= 0 ? 1 : -1;
      qw.set(o * 1.3, -0.2, -0.6).applyMatrix4(r);
      let s = t.x,
        c = t.y + 1.1,
        l = t.z;
      (t.inVehicle &&
        t.vehicle &&
        ((s = t.vehicle.body.x),
        (c = t.vehicle.body.y + 0.9),
        (l = t.vehicle.body.z)),
        Jw.set(s - qw.x, c - qw.y, l - qw.z));
      let u = Jw.length();
      Jw.multiplyScalar(1 / u);
      let d = Dx.spread + Math.min(t.speed, 25) * 0.008 + u * 6e-4;
      (Zw.set(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
      ).multiplyScalar(d),
        Jw.add(Zw).normalize(),
        (Qw.amount = Dx.damage),
        (Qw.source = `police`),
        (Qw.weapon = `rifle`));
      let f = Qx(n, qw, Jw, Dx.range, this.body, Qw, Xw),
        p = qw.x + Jw.x * Dx.range,
        m = qw.y + Jw.y * Dx.range,
        h = qw.z + Jw.z * Dx.range;
      if (f) {
        if (
          ((p = f.point.x),
          (m = f.point.y),
          (h = f.point.z),
          e.fx.flash(p, m, h, 2.2, 1.7, 1, 0.4, 0.09),
          f.body && f.body === n.player.body && !n.player.body.onDamage)
        )
          try {
            n.player.damage({
              amount: Dx.damage,
              source: `police`,
              weapon: `rifle`,
            });
          } catch {}
        Math.hypot(p - t.x, h - t.z) < 30 &&
          n.audio.play(`bullet_impact`, { x: p, y: m, z: h });
      }
      (e.fx.tracer(qw.x, qw.y, qw.z, p, m, h, 3.4, 2.6, 1.2, 0.12),
        e.fx.flash(qw.x, qw.y, qw.z, 5, 3.6, 1.6, 0.7, 0.06),
        n.audio.play(`gunshot`, { x: qw.x, y: qw.y, z: qw.z, rate: 1.25 }));
    }
    updateCrash(e) {
      let t = this.S;
      if (((this.crashT += e), this.state === `crash`)) {
        ((this.spin = Math.min(5, this.spin + e * 3)),
          this.engine?.setParam(`rpm`, Math.max(0.45, 1 - this.crashT * 0.12)),
          this.engine?.setParam(`thrust`, 1),
          (this.heading += this.spin * e),
          (this.vel.y = (this.vel.y || 0) - 9.8 * e),
          (this.vel.x *= 1 - e * 0.3),
          (this.vel.z *= 1 - e * 0.3),
          (this.pos.x += this.vel.x * e),
          (this.pos.z += this.vel.z * e),
          (this.pos.y += this.vel.y * e),
          (this.bank = Math.sin(this.crashT * 3) * 0.3),
          (this.pitch = 0.15),
          t.frame & 1 ||
            t.fx.flash(
              this.pos.x,
              this.pos.y + 1,
              this.pos.z,
              3,
              1.2,
              0.3,
              2.5,
              0.5,
            ));
        let n = t.ctx.plan.groundHeight(this.pos.x, this.pos.z),
          r = this.sampleRoof(this.pos.x, this.pos.z),
          i = Math.max(n, r) + 1.4;
        if (this.pos.y <= i) {
          ((this.pos.y = i),
            (this.state = `wreck`),
            (this.crashT = 0),
            this.vel.set(0, 0, 0),
            (this.bank = 0.4),
            (this.pitch = 0.1),
            t.ctx.audio.play(`explosion`, {
              x: this.pos.x,
              y: this.pos.y,
              z: this.pos.z,
              volume: 1,
            }),
            t.fx.flash(
              this.pos.x,
              this.pos.y + 1,
              this.pos.z,
              12,
              7,
              2.5,
              16,
              0.9,
              22,
              this.pos.y - 1.4,
            ));
          try {
            t.ctx.cameraRig.shake(0.8);
          } catch {}
          (this.bodyMat.color.setHex(2762790),
            this.engine?.stop(),
            this.wind?.stop(),
            (this.engine = this.wind = null),
            (this.body.active = !1));
        }
      } else {
        (t.frame & 3 ||
          t.fx.flash(
            this.pos.x + (Math.random() - 0.5) * 2,
            this.pos.y + 1 + Math.random(),
            this.pos.z + (Math.random() - 0.5) * 2,
            4,
            1.6,
            0.35,
            1.8,
            0.35,
          ),
          t.fx.pool(
            this.pos.x,
            this.pos.y - 1.4,
            this.pos.z,
            8,
            0.6,
            0.25,
            0.05,
          ));
        let e = t.P;
        this.crashT > 25 &&
          (Math.hypot(e.x - this.pos.x, e.z - this.pos.z) > 80 ||
            this.crashT > 90) &&
          this.despawn();
      }
    }
  },
  eT = (function (e) {
    return (
      (e[(e.Barrier = 0)] = `Barrier`),
      (e[(e.Cone = 1)] = `Cone`),
      (e[(e.Sign = 2)] = `Sign`),
      e
    );
  })(eT || {}),
  tT = [10, 28, 3],
  nT = [1.25, 0.32, 0.55];
