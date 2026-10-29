// tokyo/assets/actors-bknSEpf2 22 — root
// Lines 7084-7433 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function uc(e) {
  let t = oc.get(e);
  if (t) return t;
  let n = e.parent,
    r = null,
    i = 0;
  if (n)
    for (let e of n.children) {
      let t = e;
      if (!t.isMesh || !t.geometry) continue;
      t.geometry.boundingBox || t.geometry.computeBoundingBox();
      let n = t.geometry.boundingBox,
        a = (n.max.x - n.min.x) * (n.max.y - n.min.y) * (n.max.z - n.min.z);
      a > i && ((i = a), (r = t));
    }
  let a = e.position,
    o = a.x > 0.05 ? 1 : -1;
  return (
    r
      ? (ac.copy(r.geometry.boundingBox).applyMatrix4(r.matrix),
        (t = {
          side: o,
          x: (o < 0 ? ac.min.x : ac.max.x) - a.x,
          sill: ac.min.y + (ac.max.y - ac.min.y) * 0.56 - a.y,
        }))
      : (t = { side: o, x: o * 0.75, sill: 0.45 }),
    oc.set(e, t),
    t
  );
}
var dc = class {
    id;
    model;
    anim;
    drive = {
      state: `stand`,
      speed: 0,
      turn: 0,
      vy: 0,
      lookYaw: 0,
      lookPitch: 0,
      pawL: null,
      pawR: null,
      side: -1,
    };
    pawL = new V();
    pawR = new V();
    carOfs = new V();
    carSeat = null;
    visible = !0;
    fpOfs = 0;
    fpHid = !1;
    seed = (Date.now() % 1e5) + 7;
    barkIn = 6;
    barksLeft = 0;
    barkGap = 0;
    autoBark = !1;
    poopIn = 40;
    pooped = !1;
    poopAt = null;
    poopAsked = !1;
    peeSide = 1;
    peed = !1;
    peeAt = null;
    ready = !1;
    awake = !1;
    eyeY;
    constructor(e) {
      ((this.id = e), (this.model = ms(e)), (this.anim = new Es(this.model)));
      let t = this.model;
      (t.root.updateMatrixWorld(!0),
        t.bones[J.eyeL].getWorldPosition(nc),
        t.bones[J.eyeR].getWorldPosition(rc),
        (this.eyeY = (nc.y + rc.y) * 0.5));
    }
    get eyeHeight() {
      return this.eyeY + 0.035;
    }
    get height() {
      return this.model.dims.height * this.model.spec.scale;
    }
    get root() {
      return this.model.root;
    }
    setVisible(e) {
      ((this.visible = e), (this.model.root.visible = e));
    }
    bark() {
      this.anim.bark();
    }
    rnd() {
      return (
        (this.seed = (this.seed * 16807) % 2147483647),
        this.seed / 2147483647
      );
    }
    takeAutoBark() {
      let e = this.autoBark;
      return ((this.autoBark = !1), e);
    }
    takePoop() {
      let e = this.poopAt;
      return ((this.poopAt = null), e);
    }
    poop() {
      return !this.ready || !this.anim.squat(2.6)
        ? !1
        : ((this.pooped = !1), (this.poopAsked = !0), !0);
    }
    get poopWasAsked() {
      return this.poopAsked;
    }
    pee() {
      return !this.ready ||
        ((this.peeSide = -this.peeSide), !this.anim.liftLeg(this.peeSide, 3))
        ? !1
        : ((this.peed = !1), !0);
    }
    takePee() {
      let e = this.peeAt;
      return ((this.peeAt = null), e);
    }
    peeStream(e, t) {
      if (this.anim.action !== 3) return !1;
      let n = this.anim.actionProgress;
      if (n < 0.24 || n > 0.8) return !1;
      let r = this.model,
        i = r.dims,
        a = this.anim.legSide;
      return (
        r.root.updateMatrixWorld(!0),
        e
          .set(a * i.bodyW * 0.25, i.cy - i.bodyH * 0.8, i.bodyL * 0.3)
          .applyMatrix4(r.root.matrixWorld),
        t
          .set(a * i.bodyW * 1.9, 0, i.bodyL * 0.45)
          .applyMatrix4(r.root.matrixWorld),
        !0
      );
    }
    get canAct() {
      return this.ready && !this.anim.action;
    }
    get canBark() {
      return this.awake;
    }
    eat() {
      return this.anim.eat(1.8);
    }
    get holdFeet() {
      return this.anim.action !== 0;
    }
    get barking() {
      return this.anim.barking;
    }
    update(e, t) {
      let n = this.model,
        r = this.drive,
        i = n.spec.scale,
        a = t.st === `vehicle` && !!t.seat,
        o = a && t.vehPose === `drive`,
        s = o ? t.seat : t.object;
      (n.root.parent !== s && (s.add(n.root), this.carOfs.set(0, 0, 0)),
        (n.root.visible = this.visible));
      let c = `stand`;
      if (
        ((r.pawL = r.pawR = null),
        (r.speed = t.speed),
        (r.turn = t.turn),
        (r.vy = t.vy),
        (r.lookYaw = t.lookYaw),
        (r.lookPitch = t.lookPitch),
        (n.helmet.visible = !1),
        (n.shades.visible = !1),
        n.root.rotation.set(0, 0, 0),
        t.st === `swim`)
      )
        ((c = `swim`),
          n.root.position.set(
            0,
            Math.max(0, t.swimDepth - n.dims.cy * i * 0.85),
            0,
          ));
      else if (t.st === `knockdown` || t.st === `dead`)
        ((c = `down`), n.root.position.set(0, 0, 0));
      else if (t.st === `busted`)
        ((c = `busted`), n.root.position.set(0, 0, 0));
      else if (a && !o) {
        ((c = `ride`),
          (r.speed = t.vehSpeed),
          (n.helmet.visible = !0),
          n.root.position.set(0, t.hipHeight - 0.1, 0.04));
        let e = t.seat.userData?.grips;
        Array.isArray(e) &&
          e.length >= 2 &&
          e[0]?.length >= 3 &&
          e[1]?.length >= 3 &&
          (n.root.updateMatrix(),
          t.object.updateMatrix(),
          ic.copy(t.object.matrix).multiply(n.root.matrix).invert(),
          this.pawL.set(e[0][0], e[0][1], e[0][2]).applyMatrix4(ic),
          this.pawR.set(e[1][0], e[1][1], e[1][2]).applyMatrix4(ic),
          (r.pawL = this.pawL),
          (r.pawR = this.pawR));
      } else if (o) {
        ((c = `drive`), (r.speed = t.vehSpeed), (n.shades.visible = !0));
        let e = uc(t.seat);
        ((r.side = e.side),
          this.carSeat !== t.seat &&
            ((this.carSeat = t.seat),
            this.carOfs.set(e.x - e.side * 0.45, e.sill - 0.5, 0.1)),
          n.root.position.copy(this.carOfs),
          n.root.rotation.set(0, 0, -e.side * sc),
          n.root.updateMatrix(),
          ic.copy(n.root.matrix).invert(),
          this.pawL.set(e.x - e.side * 0.14, e.sill, 0).applyMatrix4(ic),
          this.pawR.set(e.x - e.side * 0.16, e.sill, -0.2).applyMatrix4(ic),
          e.side < 0
            ? ((r.pawL = this.pawL), (r.pawR = this.pawR))
            : ((r.pawL = this.pawR), (r.pawR = this.pawL)));
      } else
        ((c = t.st === `foot` && !t.grounded ? `air` : `stand`),
          n.root.position.set(0, 0, t.firstPerson ? this.fpOfs : 0));
      if (
        ((r.state = c),
        this.life(e, t, c),
        this.anim.update(e, r),
        this.firstPersonFit(
          !!t.firstPerson && t.st === `foot` && (c === `stand` || c === `air`),
          t.object,
        ),
        c === `drive` && t.seat)
      ) {
        let r = uc(t.seat);
        (n.root.updateMatrixWorld(!0),
          n.bones[J.head].getWorldPosition(nc),
          t.seat.worldToLocal(nc),
          rc.set(r.x - r.side * 0.08, r.sill + 0.13, -0.06));
        let i = Math.min(1, e * 6);
        ((this.carOfs.x += (rc.x - nc.x) * i),
          (this.carOfs.y += (rc.y - nc.y) * i),
          (this.carOfs.z += (rc.z - nc.z) * i));
      }
    }
    firstPersonFit(e, t) {
      let n = this.model.bones;
      if (!e) {
        ((this.fpOfs = 0),
          this.fpHid &&
            ((this.fpHid = !1),
            n[J.earL0].scale.setScalar(1),
            n[J.earR0].scale.setScalar(1)));
        return;
      }
      this.fpHid = !0;
      for (let e of [J.eyeL, J.eyeR, J.earL0, J.earR0])
        n[e].scale.setScalar(lc);
      (this.model.root.updateMatrixWorld(!0),
        t.updateMatrixWorld(),
        n[J.eyeL].getWorldPosition(nc),
        n[J.eyeR].getWorldPosition(rc),
        nc.add(rc).multiplyScalar(0.5),
        t.worldToLocal(nc),
        (this.fpOfs = Math.min(
          1,
          Math.max(0, this.fpOfs + Math.max(-0.5, Math.min(0.5, cc - nc.z))),
        )));
    }
    life(e, t, n) {
      let r = t.active && n === `stand` && t.st === `foot` && t.grounded;
      if (
        ((this.ready = r),
        (this.awake =
          t.active &&
          t.st !== `dead` &&
          t.st !== `knockdown` &&
          t.st !== `busted`),
        (this.barkGap -= e),
        this.barksLeft > 0 &&
          this.barkGap <= 0 &&
          (this.anim.bark(),
          (this.autoBark = !0),
          this.barksLeft--,
          (this.barkGap = this.model.spec.howl ? 1.5 : 0.36)),
        r &&
          ((this.barkIn -= e),
          this.barkIn <= 0 &&
            !this.anim.barking &&
            !this.anim.action &&
            ((this.barksLeft =
              this.model.spec.howl || this.rnd() < 0.6 ? 1 : 2),
            (this.barkGap = 0),
            (this.barkIn = 9 + this.rnd() * 18)),
          (this.poopIn -= e),
          this.poopIn <= 0 &&
            !this.anim.action &&
            (t.calm && t.speed < 2.4 && this.anim.squat(2.6)
              ? ((this.pooped = !1),
                (this.poopAsked = !1),
                (this.poopIn = 70 + this.rnd() * 80))
              : (this.poopIn = 6))),
        this.anim.action === 1 &&
          !this.pooped &&
          this.anim.actionProgress > 0.62)
      ) {
        this.pooped = !0;
        let e = this.model;
        (e.root.updateMatrixWorld(!0),
          (this.poopAt = new V(0, 0, e.dims.bodyL * 1.12).applyMatrix4(
            e.root.matrixWorld,
          )),
          (this.poopAt.y = t.object.getWorldPosition(rc).y));
      }
      if (
        this.anim.action === 3 &&
        !this.peed &&
        this.anim.actionProgress > 0.26
      ) {
        this.peed = !0;
        let e = this.model,
          n = e.dims;
        (e.root.updateMatrixWorld(!0),
          (this.peeAt = new V(
            this.anim.legSide * n.bodyW * 2.1,
            0,
            n.bodyL * 0.45,
          ).applyMatrix4(e.root.matrixWorld)),
          (this.peeAt.y = t.object.getWorldPosition(rc).y));
      }
    }
    dispose() {
      this.model.dispose();
    }
  },
  fc = 6.2,
  pc = 1.15,
  mc = 3.1,
  hc = [];
function gc(e, t, n, r) {
  let i = document.createElement(`canvas`);
  i.width = i.height = 1;
  let a = new ke(i);
  return (
    hc.push({ tex: a, w: e, h: t, paint: n }),
    (a.colorSpace = T),
    (a.anisotropy = 4),
    r && ((a.wrapS = a.wrapT = M), a.repeat.set(r[0], r[1])),
    a
  );
}
