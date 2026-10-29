// tokyo/assets/world-CVm1JHks 47 — state
// Lines 14877-16087 of readable/tokyo/assets/world-CVm1JHks.pretty.js (statement-aligned).
var hf = class {
  env;
  recs = [];
  byId = new Map();
  atlasPainter = null;
  glass = null;
  nearCache;
  midCache;
  nearCap;
  nearCapMax;
  nearTriCap;
  nearCallCap;
  clusterCallCap;
  nearAdmitD = 1 / 0;
  admitD = new Float64Array(rf);
  admitC = new Float64Array(rf);
  grid = new Map();
  active = [];
  activeNext = [];
  cand = [];
  candD = [];
  candN = 0;
  scanId = 0;
  timer = Kd;
  dirty = !0;
  lastX = NaN;
  lastZ = NaN;
  boostUntil = -1 / 0;
  prepUntil = -1 / 0;
  prepX = 0;
  prepY = void 0;
  prepZ = 0;
  prepGen = 0;
  secX = NaN;
  secZ = NaN;
  fast = !1;
  speedX = 0;
  speedZ = 0;
  speedT = -1 / 0;
  buildMode;
  radiiLevel = ``;
  radiiMobile = !1;
  disposed = !1;
  tmp = { x: 0, y: 0, z: 0 };
  lastSliceMs = 0;
  tel = {
    builds: 0,
    rebuilds: 0,
    cancels: 0,
    preempts: 0,
    quarantines: 0,
    maxConcurrent: 0,
    evicts: 0,
    demotes: 0,
    demoted: 0,
    staleArt: 0,
  };
  scans = 0;
  scanMs = 0;
  constructor(e, t) {
    this.env = e;
    let n = e.ctx.params?.get(`sitesbuild`);
    this.buildMode = n === `0` ? 0 : n === `mid` ? 1 : 2;
    let r = xt.lru,
      i = e.mobile ? Le() : 0,
      a = i >= 2 ? 2 : i >= 1 ? 3 : 1 / 0,
      o = i >= 2 ? 4 : i >= 1 ? 8 : 1 / 0;
    ((this.nearCap = Math.min(a, e.mobile ? r.nearMobile : r.nearDesktop)),
      (this.nearCapMax = Math.min(
        a,
        e.mobile ? r.nearMaxMobile : r.nearMaxDesktop,
      )),
      (this.nearTriCap =
        (e.mobile ? r.nearTrisMobile : r.nearTrisDesktop) * (i >= 1 ? 0.6 : 1)),
      (this.nearCallCap = e.mobile ? r.nearCallsMobile : r.nearCallsDesktop),
      (this.clusterCallCap = e.mobile
        ? bt.clusterNearCallsMobile
        : bt.clusterNearCalls),
      (this.nearCache = new Kn(this.nearCapMax, (e) => this.evicted(e))),
      (this.midCache = new Kn(
        Math.min(o, e.mobile ? r.midMobile : r.midDesktop),
        (e) => this.evicted(e),
      )));
    for (let n of t) {
      if (!n.site.ok) continue;
      let t = new ff(n.meta, n.site, this.recs.length, e.catalog);
      (this.recs.push(t), this.byId.set(t.id, t));
    }
    (this.refreshRadii(!0),
      e.atlas.setStealer((e, t) =>
        this.stealSlot(this.byId.get(e) ?? null, t),
      ));
  }
  get(e) {
    return this.byId.get(e);
  }
  refreshRadii(e = !1) {
    let t = this.env.ctx.quality,
      n = t?.level ?? `high`,
      r = !!t?.mobile;
    if (!e && n === this.radiiLevel && r === this.radiiMobile) return;
    ((this.radiiLevel = n), (this.radiiMobile = r));
    let i =
        this.env.mobile || t?.mobile
          ? xt.mobile
          : (xt.quality[t?.level ?? `high`] ?? 1),
      a = this.env.mobile ? xt.interior.mobile : xt.interior.desktop;
    for (let e of this.recs) {
      let t = e.meta.hero ? xt.hero : 1,
        n = e.radii;
      ((n.midB = xt.mid.build * i * t),
        (n.midD = xt.mid.drop * i * t),
        (n.nearB = xt.near.build * i * t),
        (n.nearD = xt.near.drop * i * t),
        (n.intB = a.build * t),
        (n.intD = a.drop * t));
    }
    this.grid.clear();
    for (let e of this.recs) {
      let t = e.site.rect,
        n = e.radii.midD + 8,
        r = Math.floor((t.minX - n) / qd),
        i = Math.floor((t.maxX + n) / qd),
        a = Math.floor((t.minZ - n) / qd),
        o = Math.floor((t.maxZ + n) / qd);
      for (let t = r; t <= i; t++)
        for (let n = a; n <= o; n++) {
          let r = gf(t, n),
            i = this.grid.get(r);
          (i || this.grid.set(r, (i = [])), i.push(e));
        }
    }
  }
  update(e) {
    if (this.disposed || this.recs.length === 0) return;
    let t = sf();
    if (
      (Sd(t < this.boostUntil || t < this.prepUntil),
      this.glass?.flush(),
      (this.timer += e),
      sf() < this.prepUntil)
    ) {
      if (this.timer < Kd && !this.dirty) return;
      ((this.timer = 0),
        (this.dirty = !1),
        this.scan(this.prepX, this.prepY, this.prepZ, !1));
      return;
    }
    if (this.lastX === this.lastX) {
      let e = this.env.ctx.player?.position ?? this.env.ctx.camera?.position;
      if (e) {
        let t = e.x - this.lastX,
          n = e.z - this.lastZ;
        if (t * t + n * n > xt.teleport * xt.teleport) {
          ((this.timer = 0), (this.dirty = !1), this.scan(e.x, e.y, e.z, !0));
          return;
        }
      }
    }
    (this.timer < Kd && !this.dirty) ||
      ((this.timer = 0), (this.dirty = !1), this.scan());
  }
  scan(e, t, n, r = !1) {
    if (this.disposed) return;
    let i = sf(),
      a = this.env.ctx,
      o,
      s,
      c;
    if (e !== void 0 && n !== void 0 && e === e && n === n)
      ((o = e),
        (s = n),
        (c =
          t !== void 0 && t === t
            ? t
            : ((a.player?.position ?? a.camera?.position)?.y ?? 0)));
    else {
      let e = a.player?.position ?? a.camera?.position;
      if (!e) return;
      ((o = e.x), (s = e.z), (c = e.y));
    }
    let l = `foot`;
    try {
      l = a.player?.mode ?? `foot`;
    } catch {}
    let u = l === `foot`;
    (this.refreshRadii(), this.computeNearAdmit(o, s));
    let d = a.player?.velocity,
      f = d ? Math.sqrt(d.x * d.x + d.z * d.z) : 0,
      p = a.player?.position;
    if (p) {
      let e = (i - this.speedT) / 1e3;
      if (e > 0.05 && e < 2) {
        let t = p.x - this.speedX,
          n = p.z - this.speedZ,
          r = Math.sqrt(t * t + n * n);
        r < xt.teleport && (f = Math.max(f, r / e));
      }
      ((this.speedX = p.x), (this.speedZ = p.z), (this.speedT = i));
    }
    ((this.fast = !u && f > Zd && !(sf() < this.prepUntil)), bd(this.fast));
    let m = sf() < this.prepUntil,
      h = NaN,
      g = NaN;
    if (m) {
      let e = a.player?.position ?? a.camera?.position;
      (Math.abs(o - this.prepX) < 1 && Math.abs(s - this.prepZ) < 1
        ? e && ((h = e.x), (g = e.z))
        : ((h = this.prepX), (g = this.prepZ)),
        h === h && Math.abs(h - o) < 1 && Math.abs(g - s) < 1 && (h = g = NaN));
    }
    ((this.secX = h), (this.secZ = g));
    let _ = r && this.lastX !== this.lastX;
    if (!_ && (r || !m) && this.lastX === this.lastX) {
      let e = o - this.lastX,
        t = s - this.lastZ;
      _ = e * e + t * t > xt.teleport * xt.teleport;
    }
    if (_) {
      for (let e of this.recs)
        (this.cancel(e.mid), this.cancel(e.near), this.cancel(e.interior));
      try {
        this.env.onJump?.();
      } catch {}
      this.boostUntil = sf() + Xd * 1e3;
    }
    ((this.lastX = o), (this.lastZ = s));
    let v = ++this.scanId;
    this.candN = 0;
    let y = this.activeNext;
    y.length = 0;
    let b = this.grid.get(gf(Math.floor(o / qd), Math.floor(s / qd)));
    if (b)
      for (let e = 0; e < b.length; e++) this.visit(b[e], v, o, s, c, u, y);
    if (h === h) {
      let e = this.grid.get(gf(Math.floor(h / qd), Math.floor(g / qd)));
      if (e)
        for (let t = 0; t < e.length; t++) this.visit(e[t], v, o, s, c, u, y);
    }
    let x = this.active;
    for (let e = 0; e < x.length; e++) this.visit(x[e], v, o, s, c, u, y);
    ((this.activeNext = x),
      (this.active = y),
      this.startCandidates(),
      this.glass?.flush(),
      this.scans++,
      (this.scanMs = sf() - i),
      Pd(r ? `scan (jump)` : `scan`, this.scanMs, i));
  }
  async prepareAt(e, t, n, r = Qd) {
    if (this.disposed || this.recs.length === 0) return;
    let i = sf() + Math.max(0, r),
      a = ++this.prepGen;
    ((this.boostUntil = i),
      (this.prepX = e),
      (this.prepY = n),
      (this.prepZ = t),
      (this.prepUntil = i),
      this.scan(e, n, t, !0));
    try {
      for (let r = 0; r < 200; r++) {
        if (this.disposed || a !== this.prepGen) return;
        let r = i - sf();
        if (r <= 0) return;
        let o = [];
        for (let e of this.active)
          (e.near.job && o.push(e.near.job.done),
            e.mid.job && o.push(e.mid.job.done),
            e.interior.job && o.push(e.interior.job.done));
        if (o.length === 0) {
          let i = !1;
          for (let e of this.active)
            i ||= e.near.busy || e.mid.busy || e.interior.busy;
          if (!i) {
            this.scan(e, n, t, !1);
            for (let e of this.active)
              i ||= e.near.busy || e.mid.busy || e.interior.busy;
            if (!i) return;
          }
          if ((await lf(Math.min(r, cf)), this.disposed || a !== this.prepGen))
            return;
          this.scan(e, n, t, !1);
          continue;
        }
        if ((await uf(o, r), this.disposed || a !== this.prepGen)) return;
        this.scan(e, n, t, !1);
      }
    } finally {
      a === this.prepGen &&
        ((this.prepUntil = -1 / 0),
        (this.secX = this.secZ = NaN),
        (this.dirty = !0));
    }
  }
  visit(e, t, n, r, i, a, o) {
    if (e.stamp === t) return;
    ((e.stamp = t), this.evaluate(e, n, r, i, a));
    let s =
      e.shown !== `far` ||
      e.mid.visible ||
      e.near.visible ||
      e.interior.visible ||
      e.mid.busy ||
      e.near.busy ||
      e.interior.busy ||
      e.d < e.radii.midD;
    ((e.active = s), s && o.push(e));
  }
  evaluate(e, t, n, r, i) {
    let a = pf(e.site.rect, t, n);
    this.secX === this.secX &&
      (a = Math.min(a, pf(e.site.rect, this.secX, this.secZ)));
    let o = (e.d = a),
      s = e.radii,
      c = e.mid,
      l = e.near,
      u = e.interior;
    if (e.quarantined) {
      (e.shown !== `far` && this.showExt(e, null),
        u.visible && this.hide(u, !0));
      return;
    }
    if (e.scene?.state) {
      let t = this.stateOf(e);
      (t !== e.near.builtState && this.restate(e, e.near, o),
        t !== e.interior.builtState && this.restate(e, e.interior, o));
    }
    let d =
        this.buildMode === 2 &&
        e.hasNear &&
        l.state !== Wd &&
        this.admitNear(e, o) &&
        (!this.fast || l.state === Ud || l.busy),
      f = `far`;
    if (
      (d && o < (l.visible || l.busy ? s.nearD : s.nearB)
        ? (f = `near`)
        : o < (c.visible || c.busy || l.visible ? s.midD : s.midB) &&
          (f = `mid`),
      f === `near`
        ? (c.busy && this.cancel(c),
          l.state === Ud
            ? this.showExt(e, l)
            : (l.state === Bd && this.want(l, o),
              e.shown === `far` && c.state === Ud && this.showExt(e, c)))
        : f === `mid`
          ? (l.busy && this.cancel(l),
            c.state === Ud
              ? this.showExt(e, c)
              : c.state === Bd && !this.fast
                ? this.want(c, o)
                : c.state === Wd && this.showExt(e, null))
          : (l.busy && this.cancel(l),
            c.busy && this.cancel(c),
            e.shown !== `far` && this.showExt(e, null),
            e.paintState === 2 && this.maybeFreeSlot(e)),
      e.hasInt && u.state !== Wd && this.buildMode === 2)
    ) {
      let a = this.env.ctx.player?.position;
      (u.visible &&
        u.handle &&
        uu(
          e.site,
          e.cos,
          e.sin,
          u.handle.indoor,
          a ? a.x : t,
          a ? a.y : r,
          a ? a.z : n,
        ) >= 0) ||
      (i && o < (u.visible || u.busy ? s.intD : s.intB))
        ? u.state === Ud
          ? this.show(u)
          : u.state === Bd && this.want(u, o)
        : (u.busy && this.cancel(u), u.visible && this.hide(u, !0));
    } else u.visible && this.hide(u, !0);
    this.syncProxy(e);
  }
  stateOf(e) {
    let t = e.scene?.state;
    if (!t) return 0;
    try {
      return t(this.env.ctx) | 0;
    } catch {
      return 0;
    }
  }
  restate(e, t, n) {
    if (t.state === Ud) {
      if (t.visible) {
        if (n < Yd || t.tier === `interior`) return;
        (this.release(t),
          t.tier === `near` &&
            this.showExt(e, e.mid.state === Ud ? e.mid : null));
        return;
      }
      this.release(t);
    }
  }
  computeNearAdmit(e, t) {
    if (((this.nearAdmitD = 1 / 0), !this.env.mobile)) return;
    let n = 0,
      r = 0;
    for (let i of this.recs) {
      let a = i.near;
      if (a.visible || a.busy) {
        n += a.handle?.calls ?? (i.nearCalls || nf);
        continue;
      }
      if (!i.hasNear || a.state === Wd || i.quarantined) continue;
      let o = pf(i.site.rect, e, t);
      if (o >= i.radii.nearB || (r === rf && o >= this.admitD[11])) continue;
      let s = a.handle?.calls ?? (i.nearCalls || nf),
        c = r < rf ? r : 11;
      for (; c > 0 && this.admitD[c - 1] > o;)
        ((this.admitD[c] = this.admitD[c - 1]),
          (this.admitC[c] = this.admitC[c - 1]),
          c--);
      ((this.admitD[c] = o), (this.admitC[c] = s), r < rf && r++);
    }
    for (let e = 0; e < r; e++) {
      if (n + this.admitC[e] > this.clusterCallCap) {
        ((this.nearAdmitD = this.admitD[e] - 0.001),
          this.tel.demoted === 0 && this.tel.demotes++,
          (this.tel.demoted = r - e));
        return;
      }
      n += this.admitC[e];
    }
    this.tel.demoted = 0;
  }
  admitNear(e, t) {
    return t <= this.nearAdmitD || e.near.visible || e.near.busy;
  }
  want(e, t) {
    let n = this.candN++;
    ((this.cand[n] = e),
      (this.candD[n] =
        e.tier === `interior` ? t - 1e3 : e.tier === `near` ? t : t + 50));
  }
  busyCount() {
    let e = 0;
    for (let t of this.recs)
      (t.mid.busy && e++, t.near.busy && e++, t.interior.busy && e++);
    return e;
  }
  startCandidates() {
    let e = this.candN;
    if (this.buildMode === 0 && e) {
      for (let t = 0; t < e; t++) this.cand[t] = null;
      this.candN = 0;
      return;
    }
    if (e === 0) return;
    let t = sf() < this.boostUntil ? ef : $d,
      n = this.busyCount();
    n > this.tel.maxConcurrent && (this.tel.maxConcurrent = n);
    for (let r = 0; r < e; r++) {
      let r = -1,
        i = 1 / 0;
      for (let t = 0; t < e; t++) {
        let e = this.cand[t];
        e &&
          e.state === Bd &&
          this.candD[t] < i &&
          ((i = this.candD[t]), (r = t));
      }
      if (r < 0) break;
      let a = this.cand[r];
      this.cand[r] = null;
      let o = a.tier === `interior`;
      (n >= t &&
        (!o ||
          !this.preemptExterior(a.s) ||
          ((n = this.busyCount()), n >= t))) ||
        (n++, this.start(a));
    }
    for (let t = 0; t < e; t++) this.cand[t] = null;
    this.candN = 0;
  }
  preemptExterior(e) {
    let t = null,
      n = -1 / 0;
    for (let r of this.recs)
      if (r !== e)
        for (let e = 0; e < 2; e++) {
          let i = e === 0 ? r.mid : r.near;
          i.busy && r.d > n && ((n = r.d), (t = i));
        }
    return t
      ? (this.cancel(t), this.tel.preempts++, (this.dirty = !0), !0)
      : !1;
  }
  ensureModules(e) {
    return e.mods === 2
      ? Promise.resolve()
      : e.modsPromise
        ? e.modsPromise
        : ((e.mods = 1),
          (e.modsPromise = (async () => {
            let [t, n] = await Promise.all([
              e.hasNear
                ? this.env.catalog.loadScene(e.id)
                : Promise.resolve(null),
              e.hasInt
                ? this.env.catalog.loadInterior(e.id)
                : Promise.resolve(null),
            ]);
            if (this.disposed) return;
            (e.hasNear &&
              !t &&
              this.quarantine(e, `scene chunk failed to load`),
              e.hasInt &&
                !n &&
                ((e.hasInt = !1),
                this.fail(e.interior, `interior chunk failed to load`)),
              (e.scene = t),
              (e.interiorMod = n));
            let r = [],
              i = new Set();
            for (let e of [...(t?.art ?? []), ...(n?.art ?? [])])
              e && !i.has(e.key) && (i.add(e.key), r.push(e));
            ((e.arts = r), (e.mods = 2));
          })()),
          e.modsPromise);
  }
  start(e) {
    let t = e.s,
      n = ++e.gen;
    ((e.state = Vd),
      this.ensureModules(t).then(
        () => {
          if (this.disposed || e.gen !== n || e.state !== Vd) return;
          if (
            t.quarantined ||
            (e.tier === `near` && !t.scene) ||
            (e.tier === `interior` && !t.interiorMod)
          ) {
            (e.state === Vd && (e.state = t.quarantined ? Bd : Wd),
              (this.dirty = !0));
            return;
          }
          e.state = Hd;
          let r = Rd(this.env.ctx.work, e.label, this.work(e, n));
          ((e.job = r),
            r.done.then(
              (t) => {
                (e.job === r && (e.job = null),
                  t === `done` &&
                    e.gen === n &&
                    e.state === Hd &&
                    (e.state = Bd));
              },
              (t) => {
                (e.job === r && (e.job = null),
                  e.gen === n &&
                    this.fail(
                      e,
                      `build job failed: ${t?.message ?? String(t)}`,
                    ));
              },
            ));
        },
        (r) => {
          e.gen === n &&
            this.quarantine(t, `chunk load failed: ${r?.message ?? String(r)}`);
        },
      ));
  }
  *work(e, t) {
    let n = e.s,
      r = this.env,
      i = r.atlas,
      a = n.id,
      o = !1,
      s = 0;
    try {
      let c = e.tier !== `mid` || vt(n.meta),
        l = c ? n.arts : of;
      if (l.length && !i.painted(a, l)) {
        for (; n.paintState === 1;) yield md;
        for (
          ;
          this.atlasPainter &&
          this.atlasPainter !== n &&
          this.atlasPainter.paintState === 1;
        )
          yield md;
        if (n.paintState !== 2 || !i.painted(a, l)) {
          let e = _t(n.meta);
          (!i.slotsOf(a) && i.slotsFree < e && this.stealSlot(n, e),
            (n.paintState = 1),
            (o = !0),
            (this.atlasPainter = n));
          let t = i.paint(a, l, e);
          try {
            for (;;) {
              let e = sf(),
                n = t.next(),
                r = sf() - e;
              if (
                ((_d.v = `atlas:${i.stepKind}`),
                r > s && (s = r),
                wu(`${a}:atlas`, r),
                n.done)
              )
                break;
              n.value === lc ? yield md : yield;
            }
          } finally {
            t.return(void 0);
          }
          ((n.paintState = 2),
            (o = !1),
            this.atlasPainter === n && (this.atlasPainter = null));
        }
      }
      ((r.mats.lmFallback || r.mats.leafFallback) &&
        ((_d.v = `mats`), Yc(r.ctx, r.mats)),
        i.created && Qc(r.mats),
        (e.artGen = l.length ? i.rectsGen(a) : -1),
        yield);
      let u = 0;
      _d.v = `genA`;
      let d = sf(),
        f = Pu(
          {
            ctx: r.ctx,
            mats: r.mats,
            atlasView: c ? i.view(a) : i.whiteView(),
            q: r.q,
            camDist: n.d,
          },
          n.meta,
          n.site,
          e.tier,
        ),
        p = e.tier === `mid` ? 0 : this.stateOf(n);
      ((f.b.state = p), (e.builtState = p));
      let m = e.lives;
      ((m.length = 0),
        (f.b.live = (t, n, r, i) => {
          if (m.length >= Jd) {
            console.warn(
              `[test] sites ${a}:${e.tier} live() over ${Jd} per tier ignored`,
            );
            return;
          }
          m.push({ x: t, z: n, rot: r, pose: i });
        }));
      let h;
      if (
        ((h =
          e.tier === `interior`
            ? n.interiorMod.build(f.b)
            : e.tier === `near`
              ? n.scene.near(f.b)
              : n.scene?.mid
                ? n.scene.mid(f.b)
                : mf(f.b)),
        (u += sf() - d),
        yield,
        this.disposed || e.gen !== t)
      )
        return;
      if (h)
        for (let n = 0; ; n++) {
          _d.v = n === 0 ? `gen0` : `gen`;
          let r = sf(),
            i = h.next(),
            a = sf() - r;
          if (((u += a), a > s && (s = a), wu(e.label, a), i.done)) break;
          if ((yield, this.disposed || e.gen !== t)) return;
        }
      if ((yield, this.disposed || e.gen !== t)) return;
      let g = f.finishSteps(!1),
        _ = null;
      for (let n = 0; ; n++) {
        _d.v = `fin${n}`;
        let r = sf(),
          i = g.next(),
          a = sf() - r;
        if (
          ((u += a), a > s && (s = a), wu(`${e.label}:finish${n}`, a), i.done)
        ) {
          _ = i.value;
          break;
        }
        if ((yield, this.disposed || e.gen !== t)) return;
      }
      let v = !1;
      e.bytes = _f(_.root);
      try {
        let n = r.ctx.renderer;
        if (n && typeof n.uploadDraw == `function`) {
          let r = _.root.children;
          for (let i = 0; i < r.length; i++) {
            let a = r[i];
            if (!a.isMesh) continue;
            Ue(a);
            let o = a.geometry.attributes;
            for (let r in o) {
              if ((yield, this.disposed || e.gen !== t)) return;
              _d.v = `up`;
              let i = sf();
              xf(n, o[r]);
              let a = sf() - i;
              ((u += a), a > s && (s = a), wu(`${e.label}:upload`, a));
            }
            if ((yield, this.disposed || e.gen !== t)) return;
            _d.v = `up`;
            let c = sf();
            ((af[0] = a), n.uploadDraw(af), (af[0] = null));
            let l = sf() - c;
            ((u += l), l > s && (s = l), wu(`${e.label}:upload`, l));
          }
          if ((yield, this.disposed || e.gen !== t)) return;
        }
        v = !0;
      } finally {
        v || _.dispose();
      }
      ((e.handle = _),
        e.tier === `near` && (e.s.nearCalls = _.calls ?? 0),
        (e.col = f.colliders),
        (e.scope = null),
        (e.buildMs = u),
        (this.lastSliceMs = s),
        this.makeSpots(e),
        (e.state = Ud),
        (e.job = null),
        e.builds++,
        this.tel.builds++,
        e.builds > 1 && this.tel.rebuilds++,
        this.park(e),
        (this.dirty = !0));
    } catch (t) {
      this.fail(e, `build failed: ${t?.stack ?? String(t)}`);
    } finally {
      (o && n.paintState === 1 && (n.paintState = 0),
        o && this.atlasPainter === n && (this.atlasPainter = null));
    }
  }
  makeSpots(e) {
    let t = e.handle;
    if (((e.spots.length = 0), !t || t.spots.length === 0)) return;
    let n = this.env.ctx,
      r = e.s.site,
      i = e.s.id;
    for (let a of t.spots) {
      let t = Fu(r, a.x, a.y, a.z, this.tmp),
        o = a.label;
      e.spots.push({
        x: t.x,
        y: t.y,
        z: t.z,
        r: a.r,
        label: () => {
          let e = typeof o == `function` ? o() : o;
          return e ? n.t(e) : null;
        },
        act: () => {
          try {
            a.act(n, r);
          } catch (e) {
            console.error(`[test] sites ${i} spot action failed`, e);
          }
        },
      });
    }
  }
  cancel(e) {
    if (!e.busy) return;
    (this.tel.cancels++, e.gen++);
    let t = e.job;
    ((e.job = null), (e.state = Bd), t?.cancel());
  }
  fail(e, t) {
    (e.gen++, (e.job = null), (e.state = Wd));
    let n = `${e.s.id}:${e.tier} ${t}`;
    (this.env.errors.push(n),
      console.error(`[test] sites ${n}`),
      (this.dirty = !0));
  }
  quarantine(e, t) {
    if (e.quarantined) return;
    ((e.quarantined = !0), this.tel.quarantines++);
    let n = `${e.id} quarantined: ${t}`;
    (this.env.errors.push(n), console.error(`[test] sites ${n}`));
    for (let t of [e.mid, e.near, e.interior])
      (this.cancel(t), (t.state === Vd || t.state === Hd) && (t.state = Bd));
    this.dirty = !0;
  }
  showExt(e, t) {
    let n = t ? t.tier : `far`;
    (t && this.show(t),
      n !== `mid` && e.mid.visible && this.hide(e.mid, !0),
      n !== `near` && e.near.visible && this.hide(e.near, !0),
      (e.shown = n),
      this.syncProxy(e));
  }
  syncProxy(e) {
    let t = e.shown !== `far` || e.interior.visible,
      n = this.env.proxy();
    if (!n) {
      e.proxyHidden = !1;
      return;
    }
    if (e.proxyHidden !== t) {
      e.proxyHidden = t;
      try {
        n.setHidden(e.id, t);
      } catch (e) {
        console.warn(`[test] sites proxy.setHidden failed`, e);
      }
    }
  }
  syncAllProxies() {
    for (let e of this.recs)
      ((e.proxyHidden = !(e.shown !== `far` || e.interior.visible)),
        this.syncProxy(e));
  }
  cacheOf(e) {
    return e.tier === `mid` ? this.midCache : this.nearCache;
  }
  glassBatch() {
    if (!this.glass) {
      let e = this.env.mats.glass;
      if (!e) return null;
      this.glass = new ju(this.env.ctx.scene, e);
    }
    return this.glass;
  }
  show(e) {
    if (e.visible || !e.handle) return;
    let t = this.env.ctx;
    if (
      (e.artGen >= 0 &&
        e.artGen !== this.env.atlas.rectsGen(e.s.id) &&
        (this.tel.staleArt++,
        this.tel.staleArt <= 3 &&
          console.warn(
            `[test] sites stale atlas art ${e.label}: built on rects gen ${e.artGen}, atlas at ${this.env.atlas.rectsGen(e.s.id)}`,
          )),
      (e.cached &&= (this.cacheOf(e).remove(e), !1)),
      t.scene.add(e.handle.root),
      e.handle.glass && this.glassBatch()?.add(e.label, e.handle.glass),
      !e.scope && e.col && e.col.list.length)
    )
      try {
        e.scope = e.col.commit(t.statics, e.label);
      } catch (e) {
        console.warn(`[test] sites collider re-commit failed`, e);
      }
    let n = this.env.interactions;
    for (let t = 0; t < e.spots.length; t++) e.spotOff.push(n.add(e.spots[t]));
    (this.spawnPeds(e),
      e.tier === `interior` &&
        e.handle.indoor.length &&
        (e.indoorOff = fu(
          e.s.id,
          e.s.site,
          e.handle.indoor,
          e.s.meta.category,
        )),
      (e.visible = !0),
      e.tier !== `mid` && this.trimResident());
  }
  hide(e, t) {
    if (e.visible) {
      e.visible = !1;
      let t = e.handle?.root;
      (t?.parent?.remove(t),
        e.handle?.glass && this.glass?.remove(e.label),
        e.scope?.dispose(),
        (e.scope = null));
      for (let t = 0; t < e.spotOff.length; t++) e.spotOff[t]();
      ((e.spotOff.length = 0),
        this.releasePeds(e),
        e.indoorOff?.(),
        (e.indoorOff = null));
    }
    t && e.handle && !e.cached && this.park(e);
  }
  park(e) {
    if (e.visible) {
      this.hide(e, !0);
      return;
    }
    (e.scope?.dispose(),
      (e.scope = null),
      !e.cached &&
        e.handle &&
        ((e.cached = !0),
        (e.hiddenAt = sf()),
        this.cacheOf(e).retain(e),
        e.tier !== `mid` && this.trimResident()));
  }
  evicted(e) {
    ((e.cached = !1), this.release(e));
  }
  release(e) {
    (e.cached && ((e.cached = !1), this.cacheOf(e).remove(e)),
      this.hide(e, !1),
      e.scope?.dispose(),
      (e.scope = null));
    let t = e.handle;
    if (((e.handle = null), (e.col = null), (e.spots.length = 0), t))
      try {
        t.dispose();
      } catch (e) {
        console.warn(`[test] sites tier dispose failed`, e);
      }
    (e.state === Ud && (e.state = Bd), this.maybeFreeSlot(e.s));
  }
  trimResident() {
    let e = 0,
      t = 0,
      n = 0,
      r = 0;
    for (let i of this.recs)
      (i.near.handle &&
        (e++, (t += i.near.handle.tris ?? 0), (n += i.near.handle.calls ?? 0)),
        i.interior.handle &&
          (e++,
          (t += i.interior.handle.tris ?? 0),
          (r += i.interior.handle.calls ?? 0)));
    for (;;) {
      let i =
        t > this.nearTriCap ||
        n > this.clusterCallCap ||
        n + r > this.nearCallCap;
      if (!i && e <= this.nearCapMax) break;
      let a = null,
        o = -1 / 0;
      for (let e = 0; e < 2 && a === null && (e !== 1 || i); e++)
        for (let t of this.recs) {
          if (e === 0 && t.d < t.radii.nearB) continue;
          let n = t.near,
            r = t.interior;
          (n.cached &&
            (e === 0 || t.d >= t.radii.nearB) &&
            (t.d > o || (t.d === o && a !== null && n.hiddenAt < a.hiddenAt)) &&
            ((a = n), (o = t.d)),
            r.cached &&
              (e === 0 || t.d >= t.radii.intB) &&
              (t.d > o ||
                (t.d === o && a !== null && r.hiddenAt < a.hiddenAt)) &&
              ((a = r), (o = t.d)));
        }
      if (!a) break;
      ((t -= a.handle?.tris ?? 0),
        a.tier === `interior`
          ? (r -= a.handle?.calls ?? 0)
          : (n -= a.handle?.calls ?? 0),
        this.tel.evicts++,
        this.release(a),
        e--);
    }
  }
  maybeFreeSlot(e) {
    e.mid.handle ||
      e.near.handle ||
      e.interior.handle ||
      e.mid.busy ||
      e.near.busy ||
      e.interior.busy ||
      (e.paintState !== 1 &&
        (e.d < e.radii.midD ||
          this.env.atlas.slotsFree > tf ||
          this.dropSlot(e)));
  }
  dropSlot(e) {
    (this.env.atlas.slotsOf(e.id) && this.env.atlas.freeSlot(e.id),
      (e.paintState = 0));
  }
  stealable(e, t) {
    return !(
      e === t ||
      !this.env.atlas.slotsOf(e.id) ||
      e.near.visible ||
      e.interior.visible ||
      (e.mid.visible && vt(e.meta)) ||
      e.mid.busy ||
      e.near.busy ||
      e.interior.busy ||
      e.paintState === 1
    );
  }
  stealSlot(e, t) {
    let n = this.env.atlas,
      r = 0;
    for (; n.slotsFree < t && r++ < 16;) {
      let t = null,
        n = !1;
      for (let r of this.recs) {
        if (!this.stealable(r, e)) continue;
        let i = r.d >= r.radii.nearB;
        (t && n && !i) ||
          ((!t || (i && !n) || r.d > t.d) && ((t = r), (n = i)));
      }
      if (!t) return;
      ((vt(t.meta) || !t.mid.visible) && this.release(t.mid),
        this.release(t.near),
        this.release(t.interior),
        this.dropSlot(t));
    }
  }
  spawnPeds(e) {
    let t = this.env.ctx;
    if (!e.lives.length) return;
    let n = t.peds?.spawnScripted?.bind(t.peds);
    if (!n) return;
    let r = e.s.site,
      i = r.facing;
    for (let t of e.lives)
      try {
        let a = Fu(r, t.x, 0, t.z, this.tmp),
          o = t.pose ?? `idle`,
          s = n(a.x, a.z, {
            heading: i + t.rot,
            pose: o,
            y: r.y,
            indoors: e.tier === `interior`,
          });
        s && (s.stop(o, i + t.rot), e.peds.push(s));
      } catch (t) {
        console.warn(`[test] sites ${e.s.id} live() failed`, t);
      }
  }
  releasePeds(e) {
    for (let t of e.peds)
      try {
        t.release();
      } catch {}
    e.peds.length = 0;
  }
  shownTier(e) {
    let t = this.byId.get(e);
    if (!t) return null;
    let n = t.interior.visible ? t.interior.handle : null;
    if (n && n.indoor.length) {
      let e = this.env.ctx.player?.position;
      if (e && uu(t.site, t.cos, t.sin, n.indoor, e.x, e.y, e.z) >= 0)
        return `interior`;
    }
    return t.shown;
  }
  exteriorTier(e) {
    return this.byId.get(e)?.shown ?? null;
  }
  tierStats(e, t) {
    let n = this.byId.get(e);
    if (!n) return null;
    let r = n.tierOf(t),
      i = r.handle;
    return {
      tier: t,
      state: Gd[r.state],
      visible: r.visible,
      cached: r.cached,
      calls: i?.calls ?? 0,
      tris: i?.tris ?? 0,
      colliders: i?.colliderCount ?? 0,
      floors: i?.floorCount ?? 0,
      spots: r.spots.length,
      indoor: i?.indoor.length ?? 0,
      buildMs: +r.buildMs.toFixed(2),
      over: i?.over ?? null,
    };
  }
  firstVolume(e) {
    let t = this.byId.get(e)?.interior.handle?.indoor[0];
    return t
      ? {
          x: (t.x0 + t.x1) / 2,
          z: t.z0 + (t.z1 - t.z0) * 0.25,
          y: t.floorY ?? 0,
        }
      : null;
  }
  radiiOf(e) {
    return this.byId.get(e)?.radii ?? null;
  }
  report() {
    let e = xt.lru;
    return {
      tel: this.tel,
      counts: this.counts(),
      atlas: this.env.atlas.counters,
      build: xu(),
      work: hd,
      caps: {
        builds: $d,
        buildsVeiled: ef,
        near: this.nearCap,
        mid: this.env.mobile ? e.midMobile : e.midDesktop,
      },
    };
  }
  unbuiltAt(e, t) {
    for (let n of this.recs) {
      if (n.quarantined) continue;
      let r = n.site.rect;
      if (
        !(
          e < r.minX - 2 ||
          e > r.maxX + 2 ||
          t < r.minZ - 2 ||
          t > r.maxZ + 2
        ) &&
        ((n.hasNear && n.near.state !== Ud && n.near.state !== Wd) ||
          (n.hasInt && n.interior.state !== Ud && n.interior.state !== Wd))
      )
        return !0;
    }
    return !1;
  }
  tierMap() {
    let e = {};
    for (let t of this.recs) {
      let n = t.interior.visible
          ? `+int`
          : t.interior.busy
            ? `+int…`
            : t.interior.cached
              ? `+int(parked)`
              : ``,
        r = t.near.busy ? ` (near…)` : t.mid.busy ? ` (mid…)` : ``;
      if (t.shown === `far` && !n && !r && !t.near.cached && !t.mid.cached)
        continue;
      let i =
        t.shown === `far` && (t.near.cached || t.mid.cached)
          ? `parked`
          : t.shown;
      e[t.id] = `${i}${n}${r}`;
    }
    return e;
  }
  geoMB() {
    let e = 0;
    for (let t of this.recs)
      (t.mid.handle && (e += t.mid.bytes),
        t.near.handle && (e += t.near.bytes),
        t.interior.handle && (e += t.interior.bytes));
    return e / 1048576;
  }
  busyTiers() {
    let e = [];
    for (let t of this.recs)
      for (let n of [t.mid, t.near, t.interior])
        n.busy &&
          e.push({
            id: t.id,
            tier: n.tier,
            state: n.state,
            job: n.job ? n.job.state : null,
            steps: n.job ? n.job.steps : 0,
            paintState: t.paintState,
            d: Math.round(t.d),
          });
    return e;
  }
  counts() {
    let e = 0,
      t = 0,
      n = 0,
      r = 0,
      i = 0;
    for (let a of this.recs) {
      a.quarantined && i++;
      for (let i of [a.mid, a.near, a.interior])
        (i.visible && e++,
          i.cached && t++,
          i.busy && n++,
          i.state === Wd && r++);
    }
    return {
      visible: e,
      cached: t,
      busy: n,
      failed: r,
      quarantined: i,
      active: this.active.length,
    };
  }
  dispose() {
    if (!this.disposed) {
      this.disposed = !0;
      try {
        this.env.atlas.setStealer(null);
      } catch {}
      zd(`sites:`);
      for (let e of this.recs) {
        for (let t of [e.mid, e.near, e.interior])
          (t.busy && (t.gen++, t.job?.cancel(), (t.job = null), (t.state = Bd)),
            this.release(t));
        this.dropSlot(e);
      }
      try {
        (this.nearCache.clear(), this.midCache.clear());
      } catch {}
      (this.glass?.dispose(),
        (this.glass = null),
        (this.active.length = 0),
        (this.activeNext.length = 0),
        this.grid.clear(),
        this.byId.clear());
    }
  }
};
