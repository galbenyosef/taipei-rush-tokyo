// tokyo/assets/actors-bknSEpf2 108 — math
// Lines 46637-47407 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
var cE = class {
    idx;
    body;
    active = !1;
    kind = `office`;
    female = 0;
    height = 1;
    width = 1;
    belly = 0;
    stoop = 0;
    skin = 0;
    hair = 0;
    top = 0;
    bottom = 0;
    shoes = 0;
    accA = 0;
    accB = 0;
    accBase = 0;
    accMask = 0;
    cloth = 0;
    walkSpeed = 1.3;
    runSpeed = 5;
    brave = 0;
    umbrellaAt = 0.3;
    parasol = !1;
    umbColor = 0;
    headAccA = !1;
    seed = 0;
    variant = -1;
    vTop = 0;
    vBottom = 0;
    vOuter = 0;
    rightBusy = !1;
    x = 0;
    y = 0;
    z = 0;
    yTarget = 0;
    heading = 0;
    vx = 0;
    vz = 0;
    sepX = 0;
    sepZ = 0;
    edge = -1;
    dir = 1;
    lat = 0;
    latFrac = 0.5;
    prefX = 0;
    prefZ = -1;
    crossing = 0;
    stuckT = 0;
    stuckN = 0;
    lastS = 0;
    speedMul = 1;
    state = 15;
    stateT = 0;
    timer = 0;
    tx = 0;
    tz = 0;
    faceH = 0;
    idlePose = 0;
    pose = 0;
    poseW = 0;
    poseTarget = 0;
    phase = 0;
    gait = 0;
    headYaw = 0;
    headYawT = 0;
    fade = 1;
    fadeTarget = 1;
    dying = !1;
    pitch = 0;
    roll = 0;
    pitchV = 0;
    rollV = 0;
    vy = 0;
    cy = 0.9;
    air = !1;
    health = 65;
    maxHealth = 65;
    cashDropped = !1;
    limp = 0;
    hitBy = null;
    hitByT = 0;
    bike = !1;
    brake = 1;
    seatY = 0;
    holdSeat = !1;
    seatH = 0;
    busStop = -1;
    arcade = !1;
    inArcade = !1;
    sheltered = !1;
    shelterT = 0;
    indoors = !1;
    alive = !0;
    threatX = 0;
    threatZ = 0;
    fearT = 0;
    talkCd = 0;
    bumpCd = 0;
    hitCd = 0;
    punchT = 0;
    punchCd = 0;
    witness = !1;
    lastByPlayer = !1;
    daze = 0;
    hitCb = null;
    qSlot = -1;
    qWait = 0;
    spot = -1;
    slot = -1;
    crowd = -1;
    crowdRef = null;
    gen = 0;
    crimeType = ``;
    crimeX = 0;
    crimeZ = 0;
    crimeSev = 1;
    reported = !1;
    a0 = 0;
    a1 = 0;
    latBias = 0;
    probeT = 0;
    ux = 0;
    uz = 0;
    fleeAfter = !1;
    recruitT = 0;
    scripted = !1;
    scriptRun = !1;
    inWorld = !1;
    lite = !1;
    hiddenT = 0;
    pairSeed = 0;
    glanceT = 0;
    prevHeading = 0;
    phaseRate = 0;
    rx = 0;
    rz = 0;
    rphase = 0;
    doorT = 0;
    distP = 0;
    updAcc = 0;
    visible = !1;
    groundT = 0;
    bornT = 0;
    colX = NaN;
    colZ = NaN;
    avSlot = -1;
    avW = 0;
    avHands = !1;
    avRx = 0;
    avRy = 0;
    avRz = 0;
    avLx = 0;
    avLy = 0;
    avLz = 0;
    avChest = 0;
    avHy = 0;
    avHxz = 0;
    avHyp = 0;
    constructor(e) {
      ((this.idx = e),
        (this.body = {
          id: Ue(),
          kind: `ped`,
          owner: `peds`,
          x: 0,
          y: 0,
          z: 0,
          heading: 0,
          halfW: iw,
          halfL: iw,
          radius: iw,
          height: rw,
          vx: 0,
          vz: 0,
          mass: 70,
          active: !1,
          userData: { ped: e },
        }));
    }
    applyLook(e) {
      ((this.kind = e.kind),
        (this.female = e.female),
        (this.height = e.height),
        (this.width = e.width),
        (this.belly = e.belly),
        (this.stoop = e.stoop),
        (this.skin = e.skin),
        (this.hair = e.hair),
        (this.top = e.top),
        (this.bottom = e.bottom),
        (this.shoes = e.shoes),
        (this.accA = e.accA),
        (this.accB = e.accB),
        (this.accBase = e.acc),
        (this.accMask = e.acc),
        (this.cloth = e.cloth),
        (this.walkSpeed = e.walkSpeed),
        (this.runSpeed = e.runSpeed),
        (this.brave = e.brave),
        (this.umbrellaAt = e.umbrellaAt),
        (this.parasol = e.parasol),
        (this.maxHealth = e.hp));
    }
    resetDynamic(e) {
      ((this.vx = this.vz = this.sepX = this.sepZ = 0),
        (this.edge = -1),
        (this.dir = 1),
        (this.crossing = 0),
        (this.stuckT = 0),
        (this.stuckN = 0),
        (this.speedMul = 1),
        (this.stateT = 0),
        (this.timer = 0),
        (this.pose = this.poseTarget = 0),
        (this.poseW = 0),
        (this.gait = 0),
        (this.headYaw = this.headYawT = 0),
        (this.fade = 0),
        (this.fadeTarget = 1),
        (this.dying = !1),
        (this.pitch = this.roll = this.pitchV = this.rollV = this.vy = 0),
        (this.cy = 0.9),
        (this.air = !1),
        (this.health = this.maxHealth),
        (this.alive = !0),
        (this.cashDropped = !1),
        (this.limp = 0),
        (this.hitBy = null),
        (this.hitByT = 0),
        (this.bike = !1),
        (this.brake = 1),
        (this.seatY = 0),
        (this.seatH = 0),
        (this.busStop = -1),
        (this.arcade = !1),
        (this.inArcade = !1),
        (this.fearT = 0),
        (this.talkCd = 2 + e() * 6),
        (this.bumpCd = 0),
        (this.hitCd = 0),
        (this.punchT = 0),
        (this.punchCd = 0),
        (this.witness = !1),
        (this.lastByPlayer = !1),
        (this.daze = 0),
        (this.hitCb = null),
        (this.qSlot = -1),
        (this.spot = this.slot = this.crowd = -1),
        (this.crowdRef = null),
        (this.reported = !1),
        (this.fleeAfter = !1),
        (this.recruitT = 1 + e() * 2),
        (this.scripted = !1),
        (this.indoors = !1),
        (this.scriptRun = !1),
        (this.updAcc = 0),
        (this.groundT = 0),
        (this.lite = !1),
        (this.hiddenT = 0),
        (this.pairSeed = 0),
        (this.doorT = 2 + e() * 4),
        (this.lastS = 0),
        (this.colX = this.colZ = NaN),
        (this.avSlot = -1),
        (this.avW = 0),
        (this.avHands = !1));
    }
  },
  lE = 64,
  uE = [`convenience`, `bubbletea`, `pharmacy`, `claw`, `breakfast`, `lottery`],
  dE = class {
    spots = [];
    doors = [];
    grid = new Map();
    doorGrid = new Map();
    constructor(e, t) {
      let n = (e) => [Math.sin(e), -Math.cos(e)],
        r = (e) => [Math.cos(e), Math.sin(e)],
        i = (e) => {
          let t = { ...e, id: this.spots.length };
          this.spots.push(t);
          let n = pE(Math.floor(t.x / lE), Math.floor(t.z / lE)),
            r = this.grid.get(n);
          (r || this.grid.set(n, (r = [])), r.push(t.id));
        };
      for (let a of e.pois) {
        let e;
        try {
          e = uE.includes(a.kind) ? t?.(a) : void 0;
        } catch {
          e = void 0;
        }
        let o =
            !!e &&
            Number.isFinite(e.x) &&
            Number.isFinite(e.z) &&
            Number.isFinite(e.facing),
          s = n(o ? e.facing : a.facing),
          c = o
            ? {
                ...a,
                x: e.x - s[0] * 0.45,
                z: e.z - s[1] * 0.45,
                facing: e.facing,
              }
            : a;
        if (uE.includes(c.kind)) {
          let [e, t] = n(c.facing);
          this.addDoor({
            x: c.x + e * 0.35,
            z: c.z + t * 0.35,
            h: c.facing,
            kind: c.kind,
            depth: 0,
          });
        }
        let [l, u] = n(c.facing),
          [d, f] = r(c.facing),
          p = c.facing + Math.PI,
          m = (e, t, n, r = 0) => ({
            x: c.x + l * e + d * t,
            z: c.z + u * e + f * t,
            h: n,
            pose: r,
            occ: -1,
          });
        switch (c.kind) {
          case `bubbletea`:
            i({
              type: `queue`,
              x: c.x,
              z: c.z,
              from: 10,
              to: 23.5,
              kinds: null,
              stayMin: 14,
              stayMax: 40,
              fill: 0.5,
              slots: [
                m(0.85, -0.2, p),
                m(1, 0.65, p + 0.25),
                m(1.05, 1.45, p + 0.4, 5),
                m(1.1, 2.2, p + 0.5),
              ],
              lines: [`sugar`, `really`, `hot`],
              extraAcc: 0,
              poses: [0, 0, 5],
              giveCup: !0,
            });
            break;
          case `breakfast`:
            i({
              type: `queue`,
              x: c.x,
              z: c.z,
              from: 6,
              to: 10.5,
              kinds: [`office`, `student`, `auntie`, `elder`, `uncle`],
              stayMin: 15,
              stayMax: 45,
              fill: 0.6,
              slots: [m(0.9, 0, p), m(1, 0.8, p + 0.3), m(1.05, 1.6, p + 0.4)],
              lines: [`eaten`, `late`],
              extraAcc: 0,
              poses: [0, 5],
              giveCup: !1,
            });
            break;
          case `convenience`:
            i({
              type: `loiter`,
              x: c.x,
              z: c.z,
              from: 0,
              to: 24,
              kinds: null,
              stayMin: 10,
              stayMax: 35,
              fill: 0.35,
              slots: [
                m(1.2, c.width / 2 + 0.9, c.facing + 0.9),
                m(1.5, -c.width / 2 - 0.7, c.facing - 1.2),
              ],
              lines: [`hot`, `eaten`, `really`],
              extraAcc: 0,
              poses: [0, 5, 7],
              giveCup: !1,
            });
            break;
          case `claw`:
            i({
              type: `claw`,
              x: c.x,
              z: c.z,
              from: 11,
              to: 24,
              kinds: [`student`, `tourist`, `office`],
              stayMin: 12,
              stayMax: 30,
              fill: 0.35,
              slots: [m(0.9, -0.7, p), m(1, 0.8, p + 0.2)],
              lines: [`cute`, `really`],
              extraAcc: 0,
              poses: [0, 12],
              giveCup: !1,
            });
            break;
          case `lottery`:
            i({
              type: `lottery`,
              x: c.x,
              z: c.z,
              from: 9,
              to: 22,
              kinds: [`uncle`, `elder`, `auntie`],
              stayMin: 20,
              stayMax: 60,
              fill: 0.4,
              slots: [m(1, 0.8, p + 0.6, 15), m(1.1, -0.9, p - 0.4)],
              lines: [`eaten`, `really`],
              extraAcc: 0,
              poses: [0, 15, 5],
              giveCup: !1,
            });
            break;
          case `betelnut`:
            i({
              type: `betel`,
              x: c.x,
              z: c.z,
              from: 8,
              to: 24,
              kinds: [`uncle`],
              stayMin: 20,
              stayMax: 60,
              fill: 0.45,
              slots: [m(1.3, 1.2, c.facing + 2.1, 15)],
              lines: [`eaten`],
              extraAcc: 0,
              poses: [15, 0],
              giveCup: !1,
            });
            break;
          case `shrine`:
            i({
              type: `shrine`,
              x: c.x,
              z: c.z,
              from: 6,
              to: 21,
              kinds: [`worshipper`, `elder`, `auntie`],
              stayMin: 18,
              stayMax: 45,
              fill: 0.5,
              slots: [m(1.35, 0, p, 4)],
              lines: [`bless`],
              extraAcc: Q(21),
              poses: [4],
              giveCup: !1,
            });
        }
      }
      for (let t of e.mrtStations) {
        let [e, a] = n(t.eh),
          [o, s] = r(t.eh),
          c = (n, r, i) => ({
            x: t.ex + e * n + o * r,
            z: t.ez + a * n + s * r,
            h: i,
            pose: 0,
            occ: -1,
          });
        i({
          type: `mrt`,
          x: t.ex,
          z: t.ez,
          from: 6,
          to: 24.5,
          kinds: null,
          stayMin: 10,
          stayMax: 30,
          fill: 0.45,
          slots: [
            c(0.8, 3.2, t.eh - 1.2),
            c(0.4, -3.4, t.eh + 1.4),
            c(1.3, 4.3, t.eh - 2),
            c(0.9, -4.6, t.eh + 2.4),
          ],
          lines: [`wait`, `go`, `late`],
          extraAcc: 0,
          poses: [0, 5, 5, 7],
          giveCup: !1,
        });
      }
      for (let [t, a] of [
        [`taipei101`, 1],
        [`redhouse`, 0.8],
        [`cks`, 0.8],
        [`longshan`, 0.9],
        [`presidential`, 0.7],
        [`xingtian`, 0.5],
        [`arena`, 0.4],
        [`main-station`, 0.5],
      ]) {
        let o = e.landmark(t);
        if (!o) continue;
        let [s, c] = n(o.facing),
          l = (Math.abs(s) > 0.5 ? o.w : o.d) / 2 + 6,
          u = e.snapToSidewalk(o.x + s * l, o.z + c * l);
        if (!u.road) continue;
        let d = [];
        for (let e = 0; e < 4; e++) {
          let t = (e - 1.5) * 1.6,
            [n, i] = r(o.facing),
            a = u.x + n * t,
            s = u.z + i * t,
            c = Math.atan2(o.x - a, -(o.z - s));
          d.push({ x: a, z: s, h: c, pose: 12, occ: -1 });
        }
        i({
          type: `photo`,
          x: u.x,
          z: u.z,
          from: 9,
          to: 21.5,
          kinds: [`tourist`, `tourist`, `student`],
          stayMin: 8,
          stayMax: 25,
          fill: a,
          slots: d,
          lines: t === `taipei101` ? [`wow101`, `film`] : [`film`, `cute`],
          extraAcc: 0,
          poses: t === `taipei101` ? [12, 17] : [12, 0],
          giveCup: !1,
        });
      }
      let a = e.landmark(`daan-park`);
      if (a) {
        let e = a.x - 20,
          t = a.z - 30,
          n = [];
        for (let r = 0; r < 2; r++)
          for (let i = 0; i < 4; i++)
            n.push({
              x: e + (i - 1.5) * 2.2,
              z: t + r * 2.4,
              h: 0,
              pose: 9,
              occ: -1,
            });
        i({
          type: `taichi`,
          x: e,
          z: t,
          from: 5.5,
          to: 9.5,
          kinds: [`elder`],
          stayMin: 200,
          stayMax: 400,
          fill: 0.9,
          slots: n,
          lines: [],
          extraAcc: 0,
          poses: [9],
          giveCup: !1,
        });
        let r = a.x + 40,
          o = a.z + 35,
          s = [];
        for (let e = 0; e < 4; e++) {
          let t = (e / 4) * Math.PI * 2;
          s.push({
            x: r + Math.sin(t) * 0.95,
            z: o - Math.cos(t) * 0.95,
            h: t + Math.PI,
            pose: 1,
            occ: -1,
          });
        }
        i({
          type: `stools`,
          x: r,
          z: o,
          from: 9,
          to: 19,
          kinds: [`uncle`, `elder`],
          stayMin: 120,
          stayMax: 300,
          fill: 0.7,
          slots: s,
          lines: [`eaten`, `really`],
          extraAcc: Q(20),
          poses: [1],
          giveCup: !1,
        });
      }
    }
    addDoor(e) {
      let t = pE(Math.floor(e.x / lE), Math.floor(e.z / lE)),
        n = this.doorGrid.get(t);
      (n || this.doorGrid.set(t, (n = [])),
        n.push(this.doors.length),
        this.doors.push(e));
    }
    addRegionSpot(e) {
      this.addSpot(e);
    }
    addSpot(e) {
      let t = { ...e, id: this.spots.length };
      this.spots.push(t);
      let n = pE(Math.floor(t.x / lE), Math.floor(t.z / lE)),
        r = this.grid.get(n);
      (r || this.grid.set(n, (r = [])), r.push(t.id));
    }
    addFurniture(e, t) {
      let n = (e) => [Math.sin(e), -Math.cos(e)],
        r = (e) => [Math.cos(e), Math.sin(e)],
        i = e?.busStops ?? [],
        a = e?.benches ?? [];
      for (let e = 0; e < i.length; e++) {
        let t = i[e],
          [o, s] = n(t.heading),
          [c, l] = r(t.heading),
          u = [],
          d = (e, n, r, i = 0) =>
            u.push({
              x: t.x + o * e + c * n,
              z: t.z + s * e + l * n,
              h: t.heading + r,
              pose: i,
              occ: -1,
            });
        (d(0.35, -1.5, 0.35),
          d(0.55, 0.9, -0.25, 5),
          d(0.3, 2.2, -0.45),
          d(0.75, -0.3, 0.15, 5));
        let f = null;
        for (let e of a) (e.x - t.x) ** 2 + (e.z - t.z) ** 2 < 4 && (f = e);
        if (f) {
          let [e, t] = n(f.heading),
            [i, a] = r(f.heading);
          for (let n of [-0.62, 0.55])
            u.push({
              x: f.x - e * 0.04 + i * n,
              z: f.z - t * 0.04 + a * n,
              h: f.heading,
              pose: 1,
              occ: -1,
              seat: 0.045,
            });
        }
        this.addSpot({
          type: `bus`,
          x: t.x,
          z: t.z,
          from: 5.5,
          to: 23.8,
          kinds: null,
          stayMin: 25,
          stayMax: 90,
          fill: 0.55,
          slots: u,
          lines: [`wait`, `late`, `hot`],
          extraAcc: 0,
          poses: [0, 5, 5, 7],
          giveCup: !1,
          bus: e,
        });
      }
      for (let t of e?.bikeStations ?? []) {
        if (!Number.isFinite(t.x) || !Number.isFinite(t.z)) continue;
        let [e, i] = n(t.heading),
          [a, o] = r(t.heading),
          s = Math.max(1, (t.docks ?? 4) * 0.78),
          c = [];
        for (let n of [-0.3, 0.25]) {
          let r = n * s;
          c.push({
            x: t.x - e * 1.05 + a * r,
            z: t.z - i * 1.05 + o * r,
            h: t.heading + (n < 0 ? 0.2 : -0.25),
            pose: 5,
            occ: -1,
          });
        }
        this.addSpot({
          type: `bike`,
          x: t.x,
          z: t.z,
          from: 6,
          to: 23,
          kinds: [`student`, `office`, `tourist`],
          stayMin: 8,
          stayMax: 22,
          fill: 0.3,
          slots: c,
          lines: [`late`, `go`],
          extraAcc: 0,
          poses: [5],
          giveCup: !1,
        });
      }
      for (let e of t?.entrances ?? []) {
        let t = e.heading + Math.PI;
        this.addDoor({ x: e.x, z: e.z, h: t, kind: `mrt`, depth: 2.2 });
        let i = !1;
        for (let t of this.spots)
          t.type === `mrt` &&
            (t.x - e.x) ** 2 + (t.z - e.z) ** 2 < 100 &&
            (i = !0);
        if (i) continue;
        let [a, o] = n(t),
          [s, c] = r(t),
          l = (t, n, r) => ({
            x: e.x + a * t + s * n,
            z: e.z + o * t + c * n,
            h: r,
            pose: 0,
            occ: -1,
          });
        this.addSpot({
          type: `mrt`,
          x: e.x,
          z: e.z,
          from: 6,
          to: 24.5,
          kinds: null,
          stayMin: 10,
          stayMax: 30,
          fill: 0.35,
          slots: [
            l(1.4, 2.4, t - 1.3),
            l(1.2, -2.6, t + 1.5),
            l(2.2, 3.4, t - 2.1),
          ],
          lines: [`wait`, `go`, `late`],
          extraAcc: 0,
          poses: [0, 5, 5, 7],
          giveCup: !1,
        });
      }
    }
    nearDoors(e, t, n, r) {
      let i = 0,
        a = Math.floor((e - n) / lE),
        o = Math.floor((e + n) / lE),
        s = Math.floor((t - n) / lE),
        c = Math.floor((t + n) / lE);
      for (let e = s; e <= c; e++)
        for (let t = a; t <= o; t++) {
          let n = this.doorGrid.get(pE(t, e));
          if (n) for (let e = 0; e < n.length; e++) r[i++] = n[e];
        }
      return ((r.length = i), i);
    }
    near(e, t, n, r) {
      let i = 0,
        a = Math.floor((e - n) / lE),
        o = Math.floor((e + n) / lE),
        s = Math.floor((t - n) / lE),
        c = Math.floor((t + n) / lE);
      for (let e = s; e <= c; e++)
        for (let t = a; t <= o; t++) {
          let n = this.grid.get(pE(t, e));
          if (n) for (let e = 0; e < n.length; e++) r[i++] = n[e];
        }
      return ((r.length = i), i);
    }
  };
