// tokyo/assets/tokyo-CqLdAwml 09 — math
// Lines 3641-3980 of readable/tokyo/assets/tokyo-CqLdAwml.pretty.js (statement-aligned).
var Sr = {
    user: { core: `#ff4fa6`, glow: `rgba(255,61,154,0.3)`, blip: `#ff3d9a` },
    mission: { core: `#ffc93d`, glow: `rgba(255,201,61,0.3)`, blip: `#ffc93d` },
  },
  Cr = class {
    ctx;
    get colors() {
      return this.waypoint && !this.waypoint.user ? Sr.mission : Sr.user;
    }
    waypoint = null;
    pts = new Float32Array(512);
    count = 0;
    distance = 0;
    tail = 0;
    version = 0;
    rev = 0;
    timer = 0;
    lastX = 1e9;
    lastZ = 1e9;
    lastFoot = !0;
    dirty = !1;
    soft = !1;
    targetY = NaN;
    courseOn = !1;
    constructor(e) {
      this.ctx = e;
    }
    set(e, t, n = !1) {
      let r = this.waypoint;
      if (e && r && r.user === n) {
        t !== void 0 && (r.label = t);
        let n = Math.hypot(e.x - r.x, e.z - r.z);
        if (n < 0.5) return;
        if (((r.x = e.x), (r.z = e.z), this.rev++, this.courseOn)) {
          this.timer = 0;
          return;
        }
        (this.count >= 2 &&
          ((this.pts[(this.count - 1) * 2] = e.x),
          (this.pts[(this.count - 1) * 2 + 1] = e.z)),
          n > 60 ? (this.dirty = !0) : (this.soft = !0));
        return;
      }
      (e || r) &&
        ((this.waypoint = e ? { x: e.x, z: e.z, label: t, user: n } : null),
        (this.count = 0),
        (this.dirty = !0),
        (this.soft = !1),
        (this.timer = 0),
        this.version++,
        this.rev++);
    }
    update(e, t, n, r) {
      let i = this.waypoint;
      if (!i) return;
      let a = i.user ? null : br;
      if (a) {
        if (
          (this.count >= 2 && ((this.pts[0] = t), (this.pts[1] = n)),
          (this.timer -= e),
          this.timer > 0 && this.courseOn)
        )
          return;
        ((this.timer = 0.2), (this.courseOn = !0));
        let r = { n: 0, toTarget: 0, y: NaN };
        try {
          r = a.fill(t, n, this.pts, 255);
        } catch {}
        ((this.count = r.n),
          (this.tail = 0),
          (this.distance = r.toTarget),
          (this.targetY = r.y),
          this.rev++);
        return;
      }
      (this.courseOn &&
        ((this.courseOn = !1), (this.targetY = NaN), (this.dirty = !0)),
        this.count >= 2 && ((this.pts[0] = t), (this.pts[1] = n)),
        (this.timer -= e),
        !(this.timer > 0 && !this.dirty) &&
          ((this.timer = 1),
          (this.dirty ||
            this.soft ||
            r !== this.lastFoot ||
            Math.hypot(t - this.lastX, n - this.lastZ) > 8) &&
            (this.compute(t, n, r), (this.dirty = !1), (this.soft = !1))));
    }
    remaining(e, t) {
      return this.courseOn
        ? this.distance
        : this.count < 2
          ? this.directDistance(e, t)
          : this.tail + Math.hypot(this.pts[2] - e, this.pts[3] - t);
    }
    directDistance(e, t) {
      let n = this.waypoint;
      return n ? Math.hypot(n.x - e, n.z - t) : 0;
    }
    compute(e, t, n) {
      let r = this.waypoint;
      ((this.lastX = e), (this.lastZ = t), (this.lastFoot = n));
      let i = this.ctx.plan,
        a = [];
      try {
        a = i.gpsRoute(e, t, r.x, r.z, n);
      } catch {
        a = [];
      }
      let o = this.pts,
        s = 0,
        c = (e, t) => {
          s >= 255 || ((o[s * 2] = e), (o[s * 2 + 1] = t), s++);
        };
      c(e, t);
      let l = i.nodes,
        u = null,
        d = null;
      try {
        ((u = i.routeAnchor(e, t, n)), (d = i.routeAnchor(r.x, r.z, n)));
      } catch {}
      let f = (e, t, n, r) => {
          let a = null;
          try {
            i.walkClear(e, t, n, r) || (a = i.walkPath(e, t, n, r));
          } catch {
            a = null;
          }
          if (a) for (let e = 0; e < a.length - 1; e++) c(a[e].x, a[e].z);
          c(n, r);
        },
        p = !1;
      if (
        n &&
        u &&
        d &&
        (u.off > 0.5 || d.off > 0.5) &&
        Math.hypot(r.x - e, r.z - t) < 320
      )
        try {
          p = i.walkClear(e, t, r.x, r.z, !0);
        } catch {
          p = !1;
        }
      if (!p) {
        if (u && d) {
          u.off > 0.5 && f(e, t, u.x, u.z);
          for (let e of a) c(l[e].x, l[e].z);
          if (
            ((d.off > 0.5 || u.link === d.link) && c(d.x, d.z), d.off > 0.5)
          ) {
            let e = o[(s - 1) * 2],
              t = o[(s - 1) * 2 + 1],
              n = null;
            try {
              i.walkClear(e, t, r.x, r.z) || (n = i.walkPath(e, t, r.x, r.z));
            } catch {
              n = null;
            }
            if (n) for (let e = 0; e < n.length - 1; e++) c(n[e].x, n[e].z);
          }
        } else {
          let n = 0;
          if (a.length >= 2) {
            let r = l[a[0]],
              i = l[a[1]],
              o = Math.hypot(r.x - i.x, r.z - i.z);
            Math.hypot(e - i.x, t - i.z) < o && (n = 1);
          }
          let i = a.length;
          if (i - n >= 2) {
            let e = l[a[i - 2]],
              t = l[a[i - 1]],
              n = Math.hypot(e.x - t.x, e.z - t.z);
            Math.hypot(e.x - r.x, e.z - r.z) < n && --i;
          }
          for (let e = n; e < i; e++) {
            let t = l[a[e]];
            if (e === n) {
              let e = o[(s - 1) * 2],
                n = o[(s - 1) * 2 + 1];
              Math.abs(t.x - e) > 3 &&
                Math.abs(t.z - n) > 3 &&
                (Math.abs(t.x - e) < Math.abs(t.z - n) ? c(t.x, n) : c(e, t.z));
            }
            c(t.x, t.z);
          }
          if (s > 1) {
            let e = o[(s - 1) * 2],
              t = o[(s - 1) * 2 + 1];
            if (Math.abs(r.x - e) > 3 && Math.abs(r.z - t) > 3) {
              let n = s > 1 ? o[(s - 2) * 2] : e;
              Math.abs(n - e) > 1 ? c(r.x, t) : c(e, r.z);
            }
          }
        }
      }
      (c(r.x, r.z), (this.count = s));
      let m = 0;
      for (let e = 2; e < s; e++)
        m += Math.hypot(o[e * 2] - o[e * 2 - 2], o[e * 2 + 1] - o[e * 2 - 1]);
      ((this.tail = m),
        (this.distance = s >= 2 ? m + Math.hypot(o[2] - e, o[3] - t) : 0));
      let h = Math.hypot(r.x - e, r.z - t);
      (n &&
        !r.user &&
        h < 130 &&
        this.distance > Math.max(250, h * 4) &&
        ((o[0] = e),
        (o[1] = t),
        (o[2] = r.x),
        (o[3] = r.z),
        (this.count = 2),
        (this.tail = 0),
        (this.distance = h)),
        this.version++,
        this.rev++);
    }
  },
  wr = {
    F: `enter`,
    E: `interact`,
    SPACE: `jump`,
    空白鍵: `jump`,
    SHIFT: `sprint`,
    H: `horn`,
    Q: `radio`,
    T: `phone`,
    M: `map`,
    V: `camera`,
    C: `lookBehind`,
    R: `reload`,
    TAB: `weaponNext`,
    ESC: `pause`,
    P: `pause`,
    LMB: `attack`,
    RMB: `aim`,
    左鍵: `attack`,
    右鍵: `aim`,
  },
  Tr = {
    sprint: `Shift`,
    jump: `Space`,
    handbrake: `Space`,
    enter: `F`,
    interact: `E`,
    attack: `LMB`,
    aim: `RMB`,
    horn: `H`,
    pause: `Esc`,
    map: `M`,
    phone: `T`,
    camera: `V`,
    lookBehind: `C`,
    radio: `Q`,
    weaponNext: `Tab`,
    weaponPrev: `Wheel`,
    reload: `R`,
  },
  Er = {
    sprint: 1,
    jump: 0,
    handbrake: 0,
    enter: 3,
    interact: 2,
    attack: 7,
    aim: 6,
    horn: 10,
    pause: 9,
    map: 8,
    phone: 12,
    camera: 11,
    lookBehind: 13,
    radio: 4,
    weaponNext: 5,
    weaponPrev: 4,
    reload: 15,
  },
  Dr = {
    xbox: [`A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `⧉`, `☰`, `L3`, `R3`],
    ps: [`✕`, `○`, `□`, `△`, `L1`, `R1`, `L2`, `R2`, `⧉`, `☰`, `L3`, `R3`],
    nintendo: [`B`, `A`, `Y`, `X`, `L`, `R`, `ZL`, `ZR`, `−`, `+`, `L3`, `R3`],
  },
  Or = {
    xbox: [`a`, `b`, `x`, `y`],
    ps: [`ps-x`, `ps-o`, `ps-s`, `ps-t`],
    nintendo: [`nt`, `nt`, `nt`, `nt`],
  },
  kr = {
    A: 0,
    B: 1,
    X: 2,
    Y: 3,
    LB: 4,
    RB: 5,
    LT: 6,
    RT: 7,
    "⧉": 8,
    "☰": 9,
    L3: 10,
    R3: 11,
    "▲": 12,
    "▼": 13,
    "◀": 14,
    "▶": 15,
  },
  Ar = [`up`, `down`, `left`, `right`],
  jr = `xbox`,
  Mr = -1e9;
function Nr() {
  let e = performance.now();
  if (e - Mr < 1e3) return jr;
  Mr = e;
  try {
    let e = navigator.getGamepads?.()?.find((e) => e && e.connected)?.id ?? ``,
      t =
        /vendor:?\s*([0-9a-f]{4})/i.exec(e)?.[1] ??
        /^([0-9a-f]{4})-[0-9a-f]{4}-/i.exec(e)?.[1] ??
        ``;
    jr =
      t === `054c`
        ? `ps`
        : t === `057e`
          ? `nintendo`
          : t || /xbox|xinput/i.test(e)
            ? `xbox`
            : /dualsense|dualshock|playstation|^wireless controller/i.test(e)
              ? `ps`
              : /nintendo|pro controller|joy-con/i.test(e)
                ? `nintendo`
                : `xbox`;
  } catch {
    jr = `xbox`;
  }
  return jr;
}
function Pr(e) {
  return e >= 12 ? `` : (Dr[Nr()][e] ?? ``);
}
var Fr = (e) =>
  `<svg viewBox="0 0 20 20" width="15" height="15" aria-hidden="true"><path d="M7.5 1.5h5v6h6v5h-6v6h-5v-6h-6v-5h6z" fill="rgba(255,255,255,.28)"/>${e === `up` ? `<path d="M7.5 1.5h5v6h-5z" fill="#fff"/>` : e === `down` ? `<path d="M7.5 12.5h5v6h-5z" fill="#fff"/>` : e === `left` ? `<path d="M1.5 7.5h6v5h-6z" fill="#fff"/>` : `<path d="M12.5 7.5h6v5h-6z" fill="#fff"/>`}</svg>`;
