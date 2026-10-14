// tokyo/assets/region-tokyo-BcM3fReU 58 — math
// Lines 29975-31050 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var Hv = null,
  Uv = {
    id: `kanda`,
    name: { zh: `神田・御茶之水`, en: `Kanda & Ochanomizu` },
    residencyBounds: fee.map((e) => ({ ...e })),
    claims: Rv
      ? []
      : qr.map((e) => ({ ...e.box, scope: `buildings`, label: e.label })),
    missionAnchors: Jr,
    load: () =>
      Rv
        ? Promise.resolve({})
        : t(
            () =>
              import(`./region-tokyo-d-kanda-CYJun2NB.js`)
                .then((e) => e.n)
                .then((e) => (Hv = e)),
            __vite__mapDeps([23, 1, 2, 3, 4, 5, 6]),
          ),
    registerMissions() {},
    unload(e) {
      Hv?.unload(e);
    },
    prewarm(e) {
      if (!Rv) return Vv(e);
    },
    keepResident() {
      return !1;
    },
  },
  Wv = 4,
  Gv = 0.31,
  Kv = 1200,
  qv = [],
  Jv = class {
    sh;
    anchor;
    id;
    x;
    z;
    buildR = 45;
    dropR = 62;
    group = `store`;
    built = !1;
    fillHex = 16054015;
    fillK = 0.9;
    audioRoom = `store`;
    fr = null;
    W = 0;
    D = 0;
    H = 3;
    ovH = 3.8;
    signY = 3;
    dx = 0;
    doorHW = 0.85;
    doorTop = 2.2;
    glassTop = 2.6;
    prep = 0;
    rect = { minX: 0, minZ: 0, maxX: 0, maxZ: 0 };
    seed;
    hours;
    stagedUntil = -1;
    showStaff = !0;
    showGuests = !0;
    personV = [];
    personP = null;
    root = null;
    roomG = null;
    meshes = [];
    roomMesh = null;
    glassMesh = null;
    leafVerts = null;
    leafX0 = null;
    leafDir = [];
    leafE = 0;
    open = 0;
    wasNear = !1;
    greetCD = 0;
    cv = null;
    peopleCol = [];
    own = [];
    unspots = [];
    shown = !0;
    inside = !1;
    atCounter = !1;
    t = 0;
    panic = 0;
    echoAt = -1e9;
    people = [];
    peopleRanges = [];
    staffSpot = null;
    g;
    gl;
    boxes = [];
    floorDefs = [];
    floorObjs = [];
    bake = { amb: [0.8, 0.8, 0.82], lights: [] };
    marks = new Map();
    constructor(e, t, n, r) {
      ((this.sh = e), (this.anchor = n), (this.id = t));
      let i = Math.sin(n.facing),
        a = -Math.cos(n.facing);
      ((this.x = n.x - i * 4), (this.z = n.z - a * 4));
      let o = 2166136261;
      for (let e = 0; e < t.length; e++)
        o = Math.imul(o ^ t.charCodeAt(e), 16777619);
      this.seed = o >>> 0 || 1;
      let s = Jn(r);
      this.hours = s ? [qn(s), cee(s)] : null;
    }
    kindTick(e, t, n) {}
    greeting() {
      return null;
    }
    R(e) {
      let t = this.sh.pages[this.page];
      return t.has(e) ? t.r(e) : t.r(`white`);
    }
    white() {
      return this.sh.pages[this.page].r(`white`);
    }
    rng(e = 0) {
      let t = (this.seed ^ Math.imul(e + 1, 2654435761)) >>> 0 || 1;
      return () => (t = (t * 1664525 + 1013904223) >>> 0) / 4294967296;
    }
    prepare() {
      let e = this.sh.ctx,
        t = Yv(e, this.id),
        n = t ?? e.buildings?.storefront?.(this.id);
      if (!n || (!t && !n.painted)) return 0;
      let r = n.facing,
        i = Math.sin(r),
        a = -Math.cos(r),
        o = n.x - i * 0.6,
        s = n.z - a * 0.6,
        c = o - i * 0.8,
        l = s - a * 0.8,
        u = e.plan.groundHeight(c, l) + 0.012,
        d = new er(o, u, s, r);
      ((qv.length = 0),
        e.statics.query(c - 0.05, l - 0.05, c + 0.05, l + 0.05, qv));
      let f = qv.find(
        (e) => e.tag === `building` && !e.disabled && e.kind === 0,
      );
      if (!f) return 0;
      let p = 1 / 0,
        m = -1 / 0,
        h = -1 / 0;
      for (let [e, t] of [
        [f.minX, f.minZ],
        [f.maxX, f.minZ],
        [f.maxX, f.maxZ],
        [f.minX, f.maxZ],
      ]) {
        let n = d.lx(e, t),
          r = d.lz(e, t);
        ((p = Math.min(p, n)), (m = Math.max(m, n)), (h = Math.max(h, r)));
      }
      let g = 1 / 0;
      for (let t of [1.2, 2])
        g = Math.min(g, e.plan.groundHeight(o + i * t, s + a * t));
      if (Math.abs(g - (u - 0.012)) > 0.5) return -1;
      let _ = Math.min(n.width - 0.2, 2 * Math.min(-p, m) - 0.3),
        v = Math.min(this.maxD, h - 0.35);
      if (_ < this.minW || v < this.minD) return -1;
      let y = (e) => {
        let t = d.aabb(-_ / 2 + 0.02, -0.6, _ / 2 - 0.02, e - 0.02);
        return this.sh.rooms.some(
          (e) =>
            e.id !== this.id &&
            t.minX < e.maxX - 0.05 &&
            t.maxX > e.minX + 0.05 &&
            t.minZ < e.maxZ - 0.05 &&
            t.maxZ > e.minZ + 0.05,
        );
      };
      for (; v >= this.minD && y(v);) v -= 0.5;
      if (v < this.minD) return -1;
      let b = n.height ?? Math.max(3.4, f.maxY - u);
      return this.adopt(d, _, v, b, n.signY ?? b - 0.9);
    }
    adopt(e, t, n, r, i) {
      ((this.fr = e),
        (this.W = t),
        (this.D = n),
        (this.ovH = r),
        (this.signY = Math.max(2.5, i)),
        (this.H = Math.max(2.55, Math.min(3.1, this.signY - 0.12))),
        (this.glassTop = Math.min(this.H - 0.05, this.signY - 0.25)),
        (this.doorTop = Math.min(2.25, this.glassTop - 0.2)),
        (this.x = e.wx(0, n / 2)),
        (this.z = e.wz(0, n / 2)),
        (this.rect = e.aabb(-t / 2 + 0.02, -0.6, t / 2 - 0.02, n - 0.02)));
      let a = this.sh.rooms.findIndex((e) => e.id === this.id);
      return (
        a >= 0 && this.sh.rooms.splice(a, 1),
        this.sh.rooms.push({ ...this.rect, id: this.id }),
        this.layoutDoor(),
        1
      );
    }
    layoutDoor() {
      this.dx = 0;
    }
    isOpen() {
      if (this.stagedUntil > 0 && this.sh.ctx.time.elapsed < this.stagedUntil)
        return !0;
      let e = this.hours;
      if (!e) return !0;
      let t = this.sh.ctx.env?.hour ?? 12;
      return (t < e[0] && (t += 24), t >= e[0] && t < e[1]);
    }
    openNow() {
      return this.isOpen();
    }
    closedOut() {
      let e = this.fr;
      if (!this.built || !e || this.isOpen() || this.inside || this.atCounter)
        return !1;
      let t = this.sh.ctx.player.position,
        n = e.lx(t.x, t.z),
        r = e.lz(t.x, t.z);
      return !(
        r > -1 &&
        r < this.D + 0.5 &&
        Math.abs(n) < this.W / 2 + 0.6 &&
        Math.abs(t.y - e.py) < 3
      );
    }
    canBuild() {
      if (this.prep < 0 || !this.isOpen()) return !1;
      let e = this.sh.ctx.player;
      if (e.mode !== `foot`) {
        let t = e.velocity;
        if (Math.hypot(t.x, t.z) >= 3) return !1;
      }
      return (this.prep === 0 && (this.prep = this.prepare()), this.prep === 1);
    }
    ready() {
      return this.prepareNow() && this.sh.pages[this.page].live;
    }
    build() {
      if (!this.root) return this.steps();
      let e = this.sh.lru.indexOf(this);
      (e >= 0 && this.sh.lru.splice(e, 1), this.activate());
    }
    *steps() {
      let e = this.sh,
        t = this.white();
      ((this.g = new jn(t, 16384)),
        (this.gl = new jn(t, 1024)),
        (this.boxes = []),
        (this.floorDefs = []),
        (this.bake = { amb: [0.8, 0.8, 0.82], lights: [] }),
        this.marks.clear(),
        (this.people.length = 0),
        (this.personV.length = 0),
        (this.personP = null));
      let n = this.peopleSpots();
      this.staffSpot = n.find((e) => e.staff) ?? null;
      let r = n.map((t) => e.jobs.bake(t.desc, t.pose));
      (yield `post`, yield* this.content());
      let i = new jn(t, 2048),
        a = this.frontage(i, this.gl);
      yield `front`;
      for (let t = 0; t < n.length; t++) {
        let i = yield* or(e.jobs, r[t]);
        if (!i) continue;
        let a = n[t];
        this.g
          .push()
          .translate(a.x, a.y ?? 0, a.z)
          .rotateY(a.ry);
        let o = this.g.vcount;
        (kn(this.g, i),
          this.peopleRanges.push([o, this.g.vcount]),
          this.g.pop(),
          this.personV.push({
            a: o,
            b: this.g.vcount,
            staff: !!a.staff,
            col: a.noCollide ? -1 : this.people.length,
          }),
          a.noCollide || this.people.push([a.x, a.z]),
          yield `person`);
      }
      let o = this.g,
        s = o.vcount;
      for (let e = 0; e < s; e += Kv)
        (o.bakeLight(e, Math.min(s, e + Kv), {
          amb: this.bake.amb,
          lights: this.bake.lights,
          dir: this.bake.dir,
          floorAO: this.bake.floorAO ?? 0.4,
        }),
          yield `bake`);
      for (let [e, [t, n]] of this.marks) this.afterBake(e, t, n);
      for (let [e, t] of this.peopleRanges) o.shade(e, t, () => 0.8);
      ((this.peopleRanges.length = 0),
        i.vcount &&
          i.bakeLight(0, i.vcount, {
            amb: [0.58, 0.59, 0.62],
            dir: { x: 0.15, y: 1, z: -0.7, k: 0.24 },
          }),
        yield* this.assemble(i, a),
        this.activate());
    }
    afterBake(e, t, n) {}
    mark(e, t) {
      let n = this.g.vcount;
      (t(), this.marks.set(e, [n, this.g.vcount]));
    }
    frontage(e, t) {
      let {
        W: n,
        dx: r,
        doorHW: i,
        doorTop: a,
        glassTop: o,
        ovH: s,
        signY: c,
      } = this;
      e.col(this.transomHex());
      let l = Math.min(c, s - 0.05);
      if (
        (l > o + 0.05 && e.box(-n / 2, o, -0.06, n / 2, l, -0.015, Xv | 35),
        this.transom(e, o, l),
        this.front === `open`)
      )
        return (
          e.col(7107450),
          e.box(-n / 2, 0, -0.12, -n / 2 + 0.1, o, 0.02, 35),
          e.box(n / 2 - 0.1, 0, -0.12, n / 2, o, 0.02, 35),
          e.col(9080982),
          e.box(-n / 2, o - 0.18, -0.16, n / 2, o, 0, Xv | 36),
          []
        );
      let u = r - i,
        d = r + i,
        f = 0.12,
        p = this.frameHex();
      e.col(p);
      let m = (t, n = o) => e.box(t - 0.03, 0, -0.09, t + 0.03, n, 0, 35);
      (m(-n / 2 + 0.03), m(n / 2 - 0.03), m(u), m(d));
      let h = (e, t) => {
        let n = Math.max(1, Math.round((t - e) / 1.6));
        for (let r = 1; r < n; r++) m(e + ((t - e) * r) / n);
      };
      (u > -n / 2 + 0.2 && h(-n / 2, u),
        d < n / 2 - 0.2 && h(d, n / 2),
        e.box(-n / 2, o - 0.05, -0.09, n / 2, o + 0.02, 0, Xv | 36),
        e.box(u, a, -0.09, d, a + 0.07, 0, Xv | 36),
        u > -n / 2 + 0.05 && e.box(-n / 2, 0, -0.09, u, f, -0.01, 36),
        d < n / 2 - 0.05 && e.box(d, 0, -0.09, n / 2, f, -0.01, 36),
        e.col(10133670),
        e.box(
          u - (this.front === `auto` ? 0.85 : 0.1),
          0,
          -0.11,
          d + 0.85,
          0.012,
          -0.02,
          36,
        ),
        t.col(14216944, 0.13),
        (t.both = !0));
      let g = (e, n, r, i) => t.rectZ(e, r, n, i, -0.03, -1);
      return (
        u > -n / 2 + 0.1 && g(-n / 2 + 0.06, u - 0.03, f, o - 0.05),
        d < n / 2 - 0.1 && g(d + 0.03, n / 2 - 0.06, f, o - 0.05),
        g(u + 0.03, d - 0.03, a + 0.07, o - 0.05),
        (t.both = !1),
        this.glassDressing(t, u, d),
        this.front === `auto`
          ? [this.leaf(r - i, r + 0.01, -1), this.leaf(r - 0.01, r + i, 1)]
          : [this.leaf(u, d, r > 0 ? -1 : 1)]
      );
    }
    leaf(e, t, n) {
      let r = new jn(this.white(), 256),
        i = this.doorTop;
      r.col(this.front === `slide` ? 6965808 : 11186615, 1);
      let a = this.front === `slide` ? 0.06 : 0.045;
      return (
        r.box(e, 0, -0.08, e + a, i, -0.05),
        r.box(t - a, 0, -0.08, t, i, -0.05),
        r.box(e, 0, -0.08, t, 0.1, -0.05),
        r.box(e, i - 0.07, -0.08, t, i, -0.05),
        r.col(14216944, 0.16),
        (r.both = !0),
        r.rectZ(e + a, 0.1, t - a, i - 0.07, -0.065, -1),
        (r.both = !1),
        this.leafSticker(r, e, t, n),
        (r.dir = n),
        r
      );
    }
    leafSticker(e, t, n, r) {}
    glassDressing(e, t, n) {}
    transom(e, t, n) {}
    transomHex() {
      return 14276561;
    }
    frameHex() {
      return 12041666;
    }
    *assemble(e, t) {
      let n = this.sh,
        r = new a();
      r.name = `interior:${this.id}`;
      let i = new a();
      i.renderOrder = -30;
      let o = new a();
      ((o.renderOrder = -28), r.add(i, o));
      let s = (e, t, n, r) => {
          let i = new p(e, t);
          return (
            (i.name = r),
            (i.castShadow = !1),
            (i.receiveShadow = !1),
            (i.matrixAutoUpdate = !1),
            n.add(i),
            this.meshes.push(i),
            i
          );
        },
        c = [this.g, e].filter((e) => e.vcount > 0),
        u = jn.merge(c);
      ((this.roomMesh = s(u.geo, n.roomMat[this.page], i, `room`)),
        this.personV.length && u.geo.attributes.position.setUsage(l),
        this.marks.size && u.geo.attributes.uv.setUsage(l),
        this.marks.size && u.geo.attributes.color.setUsage(l),
        this.g.release(),
        e.release(),
        yield `room-mesh`);
      let d = [this.gl, ...t].filter((e) => e.vcount > 0);
      if (d.length) {
        let e = jn.merge(d);
        if (
          ((this.glassMesh = s(e.geo, n.glassMat[this.page], r, `glass`)),
          t.length)
        ) {
          let n = e.verts.length,
            r = [],
            i = [],
            a = e.geo.attributes.position.array;
          this.leafDir = [];
          for (let o = 0; o < t.length; o++) {
            let [s, c] = e.verts[n - t.length + o];
            r.push(s, c);
            for (let e = 0; e < c; e++) i.push(a[(s + e) * 3]);
            this.leafDir.push(t[o].dir ?? 1);
          }
          ((this.leafVerts = r),
            (this.leafX0 = new Float32Array(i)),
            e.geo.attributes.position.setUsage(l),
            (e.geo.boundingSphere.radius += 1));
        }
      }
      for (let e of d) e.release();
      this.leafE = 0;
      let f = new jn(this.white(), 16);
      (this.portal(f),
        s(f.toGeometry(), n.portalMat, o, `portal`),
        f.release(),
        this.fr.place(r),
        r.traverse((e) => e.updateMatrixWorld(!0)),
        (this.root = r),
        (this.roomG = i),
        (this.shown = !0));
    }
    portal(e) {
      e.rectZ(
        -this.W / 2 + 0.01,
        0,
        this.W / 2 - 0.01,
        this.glassTop,
        -0.012,
        -1,
      );
    }
    activate() {
      let e = this.sh,
        t = e.ctx;
      (Mn(t).add(this.root),
        this.carveOn(),
        this.own.length || this.makeColliders());
      for (let e of this.own) e.disabled = !1;
      let n = this.fr;
      if (!this.floorObjs.length)
        for (let t of this.floorDefs) {
          let r = (t.x0 + t.x1) / 2,
            i = (t.z0 + t.z1) / 2;
          this.floorObjs.push(
            e.ctx.statics.addFloor(
              n.wx(r, i),
              n.wz(r, i),
              Math.abs(t.x1 - t.x0) / 2,
              Math.abs(t.z1 - t.z0) / 2,
              n.py + t.y,
              n.py + t.y,
              n.facing,
              `interior`,
            ),
          );
        }
      for (let t of this.spotDefs())
        this.unspots.push(
          e.interact.add({
            x: n.wx(t.x, t.z),
            y: n.py,
            z: n.wz(t.x, t.z),
            r: t.r,
            label: () => (e.menu.open ? null : t.label()),
            act: () => t.act(),
          }),
        );
      ((this.open = 0),
        (this.panic = 0),
        this.applyPeople(),
        this.onActivate());
    }
    onActivate() {}
    carveFilter() {
      let e = this.fr.py;
      return (t) =>
        t.tag === `building` &&
        t.minY < e + 0.5 &&
        t.minY > e - 1.5 &&
        t.kind === 0;
    }
    carveOn() {
      let e = this.sh.ctx,
        t = this.carveFilter();
      (this.cv &&
        this.cv.disabled.some((e) => e._idx === -1) &&
        this.freeCarve(),
        (this.cv ||= fr(e.statics, this.rect, this.fr.py + this.H, t)),
        this.cv.set(!0));
    }
    carveScan = 0;
    checkCarve(e) {
      if ((this.carveScan -= e) > 0 || !this.fr || !this.cv) return;
      this.carveScan = 0.5;
      let t = this.fr,
        n = t.wx(0, this.D / 2),
        r = t.wz(0, this.D / 2);
      ((qv.length = 0),
        this.sh.ctx.statics.query(n - 0.05, r - 0.05, n + 0.05, r + 0.05, qv));
      let i = this.carveFilter();
      qv.find(
        (e) =>
          !e.disabled &&
          i(e) &&
          !this.cv.added.includes(e) &&
          !this.own.includes(e),
      ) && (this.freeCarve(), this.carveOn());
    }
    freeCarve() {
      let e = this.sh.ctx.statics;
      if (this.cv) {
        if ((this.cv.set(!1), typeof e.remove == `function`))
          for (let t of this.cv.added) e.remove(t);
        this.cv = null;
      }
    }
    makeColliders() {
      let e = this.sh.ctx.statics,
        t = this.fr;
      for (let n of this.boxes)
        this.own.push(
          t.box(e, n.x0, n.z0, n.x1, n.z1, n.y0, n.y1, n.tag ?? `wall`),
        );
      this.peopleCol.length = 0;
      for (let [n, r] of this.people) {
        let i = t.circle(e, n, r, 0.24, 0, 1.7, `prop`);
        (this.own.push(i), this.peopleCol.push(i));
      }
      let { dx: n, doorHW: r, H: i, W: a } = this;
      (this.front === `open`
        ? (this.own.push(
            t.box(
              e,
              -a / 2,
              -0.34,
              a / 2,
              -0.02,
              -0.5,
              this.sillTop(-a / 2, a / 2),
              `curb`,
            ),
          ),
          this.own.push(
            t.box(
              e,
              -a / 2,
              -0.1,
              a / 2,
              0.06,
              this.glassTop,
              i + 0.35,
              `wall`,
            ),
          ))
        : (this.own.push(
            t.box(
              e,
              n - r,
              -0.34,
              n + r,
              -0.02,
              -0.5,
              this.sillTop(n - r, n + r),
              `curb`,
            ),
          ),
          this.own.push(
            t.box(
              e,
              n - r,
              -0.1,
              n + r,
              0.06,
              this.doorTop + 0.05,
              i + 0.35,
              `wall`,
            ),
          )),
        this.front !== `open` &&
          (n - r > -a / 2 + 0.05 &&
            this.own.push(t.box(e, -a / 2, -0.12, n - r, 0.02, 0, i, `wall`)),
          n + r < a / 2 - 0.05 &&
            this.own.push(t.box(e, n + r, -0.12, a / 2, 0.02, 0, i, `wall`))));
    }
    sillTop(e, t) {
      let n = this.fr,
        r = this.sh.ctx.plan,
        i = 1 / 0;
      for (let a of [-0.2, -0.6, -1.2])
        for (let o of [0.1, 0.5, 0.9]) {
          let s = e + (t - e) * o;
          i = Math.min(i, r.groundHeight(n.wx(s, a), n.wz(s, a)));
        }
      return (Number.isFinite(i) ? i : n.py) + Gv - n.py;
    }
    dispose() {
      let e = this.sh;
      (this.root?.removeFromParent(), this.cv?.set(!1));
      for (let e of this.own) e.disabled = !0;
      for (let e of this.unspots) e();
      ((this.unspots.length = 0),
        this.inside && e.order.set(!1),
        (this.inside = !1),
        (this.atCounter = !1),
        e.menu.open && e.menu.owner === this && e.menu.close(!0));
      for (let t of this.floorObjs) e.ctx.statics.removeFloor(t);
      for (
        this.floorObjs.length = 0, this.onDispose(), e.lru.push(this);
        e.lru.length > Wv;
      )
        e.lru.shift().freeGpu();
    }
    onDispose() {}
    gpuBytes() {
      return Vn(this.meshes);
    }
    release() {
      let e = this.sh.lru,
        t = e.indexOf(this);
      (t >= 0 && e.splice(t, 1), this.freeGpu());
    }
    freeGpu() {
      if (this.built) return;
      for (let e of this.meshes) e.geometry.dispose();
      ((this.meshes.length = 0),
        (this.root = this.roomG = null),
        (this.roomMesh = this.glassMesh = null),
        (this.leafVerts = null),
        (this.leafX0 = null));
      let e = this.sh.ctx.statics;
      if (typeof e.remove == `function`) {
        for (let t of this.own) e.remove(t);
        if (((this.own.length = 0), this.cv)) {
          for (let t of this.cv.added) e.remove(t);
          for (let e of this.cv.disabled) e.disabled = !1;
          this.cv = null;
        }
      }
      this.prep === 1 && (this.prep = 0);
    }
    tick(e) {
      let t = this.sh,
        n = t.ctx,
        r = this.fr;
      if (((this.t += e), this.root)) {
        let e = n.camera,
          t = e.position.x - r.px,
          i = e.position.y - r.py,
          a = e.position.z - r.pz,
          o = t * t + i * i + a * a,
          s = this.shown ? 46 : 42,
          c = o < s * s;
        if (!c) {
          let t = ((e.fov || 60) * Math.PI) / 180;
          c =
            (this.W * 2.6) / (o * t * t * (e.aspect || 1.7)) >
            (this.shown ? 0.01 : 0.014);
        }
        c !== this.shown && ((this.shown = c), (this.root.visible = c));
      }
      let i = n.player.position,
        a = r.lx(i.x, i.z),
        o = r.lz(i.x, i.z),
        s = n.player.mode === `foot`,
        c = Math.abs(i.y - r.py) < 2;
      if (this.front !== `open`) {
        let t =
          Math.abs(a - this.dx) < this.doorHW + 0.55 &&
          o > -2.3 &&
          o < 1.9 &&
          c;
        (t && !this.wasNear && o < -0.1 && this.greetCD <= 0 && this.greet(s),
          (this.wasNear = t));
        let n = +!!t,
          r =
            n > this.open
              ? this.front === `slide`
                ? 1.6
                : 2.6
              : this.front === `slide`
                ? 1
                : 1.4;
        this.open +=
          Math.sign(n - this.open) * Math.min(Math.abs(n - this.open), e * r);
        let i = this.open * this.open * (3 - 2 * this.open);
        i !== this.leafE && this.slideLeaves(i);
      } else {
        let e = o > -1.6 && o < 1.2 && Math.abs(a) < this.W / 2 && c;
        (e && !this.wasNear && this.greetCD <= 0 && this.greet(s),
          (this.wasNear = e));
      }
      this.greetCD -= e;
      let l =
        o > -0.25 &&
        o < this.D + 0.2 &&
        Math.abs(a) < this.W / 2 + 0.2 &&
        Math.abs(i.y - r.py) < 3;
      l !== this.inside && ((this.inside = l), t.order.set(l));
      let u =
        o > -3 &&
        o < this.D &&
        Math.abs(a) < this.W / 2 + 1.5 &&
        Math.abs(i.y - r.py) < 3;
      ((l || u) &&
        t.fill.want(
          this.fillHex,
          l ? this.fillK : this.front === `open` ? 0.5 : 0.35,
        ),
        this.panic > 0 && (this.panic -= e),
        this.root && this.root.parent && this.checkCarve(e),
        this.kindTick(e, a, o));
    }
    greet(e) {
      let t = this.sh.ctx,
        n = this.fr;
      if (
        ((this.greetCD = 7),
        this.front === `auto` && this.chime(),
        !e || this.panic > 0 || !this.showStaff)
      )
        return;
      let i = this.greeting();
      if (i) {
        try {
          t.audio.say?.(
            { ja: i.ja, zh: i.zh, en: i.en },
            {
              lang: `ja`,
              x: n.wx(this.staffSpot?.x ?? 0, this.staffSpot?.z ?? 2),
              y: n.py + 1.5,
              z: n.wz(this.staffSpot?.x ?? 0, this.staffSpot?.z ?? 2),
              priority: 3,
              volume: 0.75,
            },
          );
        } catch {}
        t.events.emit(`subtitle`, {
          text: {
            zh: r.on ? r.t(`「${i.zh}」`, `「${r.jz(i.zh)}」`) : `「${i.zh}」`,
            en: `"${i.en}"`,
          },
          duration: 1.8,
          speaker: t.t({ zh: `店員`, en: `Staff` }),
        });
      }
    }
    chime() {
      let e = this.fr;
      try {
        this.sh.ctx.audio.play(`store_chime`, {
          x: e.wx(this.dx, 0),
          y: e.py + 2.4,
          z: e.wz(this.dx, 0),
          volume: 0.8,
        });
      } catch {}
    }
    slideLeaves(e) {
      this.leafE = e;
      let t = this.glassMesh,
        n = this.leafVerts,
        r = this.leafX0;
      if (!t || !n || !r) return;
      let i = t.geometry.attributes.position,
        a = i.array,
        o =
          this.front === `slide` ? this.doorHW * 2 - 0.12 : this.doorHW - 0.05,
        s = 0,
        c = 1 / 0,
        l = 0;
      for (let t = 0; t < n.length; t += 2) {
        let i = n[t],
          u = n[t + 1],
          d = this.leafDir[t / 2];
        for (let t = 0; t < u; t++) a[(i + t) * 3] = r[s + t] + d * o * e;
        ((s += u), (c = Math.min(c, i)), (l = Math.max(l, i + u)));
      }
      (i.clearUpdateRanges(),
        i.addUpdateRange(c * 3, (l - c) * 3),
        (i.needsUpdate = !0));
    }
    pay(e, t, n) {
      let r = this.sh.ctx;
      if (!r.money.spend(e, void 0, this.kind))
        return (
          r.events.emit(`notify`, {
            text: { zh: `錢不夠…`, en: `Not enough cash…` },
            duration: 2,
            kind: `bad`,
          }),
          !1
        );
      try {
        r.audio.play(`money`, { ui: !0, volume: 0.65 });
      } catch {}
      let i = {
          item: t,
          t: r.time.elapsed,
          store: this.id,
          kind: this.kind,
          price: e,
        },
        a = this.sh;
      (a.purchases.push(i), a.purchases.length > 64 && a.purchases.shift());
      try {
        r.events.emit(`shop:purchase`, {
          kind: this.kind,
          item: t,
          poiId: this.id,
          price: e,
        });
      } catch {}
      for (let e of a.buyListeners)
        try {
          e(i);
        } catch {}
      return (
        n && r.events.emit(`notify`, { text: n, duration: 2.6, kind: `good` }),
        !0
      );
    }
    menuItem(e, t, n, i, a, o, s) {
      let c = this.sh.ctx,
        l = (e) => c.money.format(e);
      return {
        name: e,
        price: t,
        glyph: i,
        desc: a,
        can: () =>
          c.money.canAfford(t) ? !0 : { zh: `錢不夠…`, en: `Not enough cash…` },
        buy: () => {
          if (
            this.pay(t, o, {
              zh: `${e.zh} −${l(t)}${n > 0 ? (r.on ? r.t(` · +${n} 生命`, ` · HP +${n}`) : ` · +${n} 生命`) : ``}`,
              en: `${e.en} −${l(t)}${n > 0 ? ` · +${n} HP` : ``}`,
            })
          ) {
            if (n > 0)
              try {
                c.player.heal(n);
              } catch {}
            s?.();
          }
        },
      };
    }
    onCrime(e, t, n) {
      if (!this.built || !this.staffSpot || !this.fr) return !1;
      let r = this.fr,
        i = r.lx(e, t),
        a = r.lz(e, t);
      if (a < -4 || a > this.D + 1 || Math.abs(i) > this.W / 2 + 3) return !1;
      ((this.panic = 60),
        this.sh.menu.open &&
          this.sh.menu.owner === this &&
          this.sh.menu.close(!0));
      let o = this.sh.ctx;
      return o.time.elapsed - this.echoAt < 20 || n
        ? !1
        : ((this.echoAt = o.time.elapsed),
          o.events.emit(`subtitle`, {
            text: {
              zh: `店員：「警察を…110番します！」（報警中）`,
              en: `Staff: "I'm calling 110!"`,
            },
            duration: 2.6,
          }),
          !0);
    }
    setPeople(e, t) {
      ((this.showStaff = e),
        (this.showGuests = t),
        this.built && this.applyPeople());
    }
    get peopleShown() {
      return { staff: this.showStaff, guests: this.showGuests };
    }
    applyPeople() {
      let e = this.roomMesh;
      if (!e || !this.personV.length) return;
      let t = e.geometry.attributes.position,
        n = t.array;
      if (!this.personP) {
        let e = this.personV[0].a,
          t = this.personV[this.personV.length - 1].b;
        this.personP = n.slice(e * 3, t * 3);
      }
      let r = this.personV[0].a,
        i = this.personP,
        a = 1 / 0,
        o = -1;
      for (let e of this.personV) {
        let t = e.staff ? this.showStaff : this.showGuests,
          s =
            n[e.a * 3 + 1] !== n[e.a * 3 + 4] ||
            n[e.a * 3] !== n[e.a * 3 + 3] ||
            n[e.a * 3 + 2] !== n[e.a * 3 + 5];
        if (t && !s) n.set(i.subarray((e.a - r) * 3, (e.b - r) * 3), e.a * 3);
        else if (!t && s) {
          let t = n[e.a * 3],
            r = n[e.a * 3 + 1],
            i = n[e.a * 3 + 2];
          for (let a = e.a; a < e.b; a++)
            ((n[a * 3] = t), (n[a * 3 + 1] = r), (n[a * 3 + 2] = i));
        } else continue;
        ((a = Math.min(a, e.a)), (o = Math.max(o, e.b)));
      }
      for (let e of this.personV)
        e.col >= 0 &&
          this.peopleCol[e.col] &&
          (this.peopleCol[e.col].disabled = !(e.staff
            ? this.showStaff
            : this.showGuests));
      o < 0 ||
        (t.clearUpdateRanges(),
        t.addUpdateRange(a * 3, (o - a) * 3),
        (t.needsUpdate = !0));
    }
    namedSpots() {
      return {};
    }
    contains(e, t, n) {
      let r = this.fr;
      return r
        ? t > r.py - 0.5 &&
            t < r.py + this.H &&
            r.inside(e, n, -this.W / 2, 0.02, this.W / 2, this.D)
        : !1;
    }
    viewInside(e, t, n) {
      let r = this.fr;
      return r
        ? this.built &&
            this.shown &&
            t > r.py + 0.05 &&
            t < r.py + this.H - 0.05 &&
            r.inside(
              e,
              n,
              -this.W / 2 + 0.05,
              0.35,
              this.W / 2 - 0.05,
              this.D - 0.05,
            )
        : !1;
    }
    _portal = null;
    portalBox() {
      if (!this._portal) {
        let e = this.fr,
          t = 0.15,
          n = e.aabb(-this.W / 2 - t, -0.15, this.W / 2 + t, t);
        this._portal = new O(
          new k(n.minX, e.py - t, n.minZ),
          new k(n.maxX, e.py + Math.max(this.glassTop, 2.6) + t, n.maxZ),
        );
      }
      return this._portal;
    }
    spot(e) {
      let t = this.fr;
      if (!t) return null;
      if (e === `staff` && this.staffSpot) {
        let e = this.staffSpot;
        return { x: t.wx(e.x, e.z), z: t.wz(e.x, e.z), h: t.heading(e.ry) };
      }
      let n = this.dx,
        r = -1.8,
        i = this.kindSpot(e);
      return (
        i
          ? ([n, r] = i)
          : e === `inside`
            ? (r = 1)
            : e === `back` && ((n = 0), (r = Math.max(0.8, this.D - 1.5))),
        { x: t.wx(n, r), z: t.wz(n, r), h: t.facing + Math.PI }
      );
    }
    kindSpot(e) {
      return null;
    }
    views() {
      let { dx: e, W: t, D: n } = this,
        r = e >= 0 ? 1 : -1;
      return {
        street: [e + r * 1.6, 1.62, -5.2, e - r * 0.3, 1.5, 1.5],
        sig: [e * 0.85, 1.68, 0.55, -e * 0.5 - r * t * 0.1, 1.15, n * 0.78],
        detail: [0, 1.55, n * 0.45, 0, 1.2, n],
      };
    }
    get dead() {
      return this.prep < 0;
    }
    prepareNow() {
      return (this.prep === 0 && (this.prep = this.prepare()), this.prep === 1);
    }
    info() {
      return {
        id: this.id,
        kind: this.kind,
        page: this.page,
        name: this.name.zh,
        prepared: this.prep,
        built: this.built,
        open: this.isOpen(),
        W: +this.W.toFixed(2),
        D: +this.D.toFixed(2),
        H: +this.H.toFixed(2),
        ovH: +this.ovH.toFixed(2),
        signY: +this.signY.toFixed(2),
        x: +this.x.toFixed(1),
        z: +this.z.toFixed(1),
        facing: this.fr?.facing ?? this.anchor.facing,
        dx: +this.dx.toFixed(2),
        colliders: this.own.length,
        tris: this.roomMesh
          ? (this.roomMesh.geometry.index?.count ?? 0) / 3
          : 0,
      };
    }
    world(e, t) {
      let n = this.fr;
      return { x: n.wx(e, t), z: n.wz(e, t), y: n.py };
    }
  };
