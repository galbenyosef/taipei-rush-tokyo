// tokyo/assets/world-CAmHK742 14 — jobs
// Lines 4070-4368 of readable/tokyo/assets/world-CAmHK742.pretty.js (statement-aligned).
var zn = class {
    limit;
    release;
    entries = [];
    constructor(e, t) {
      if (
        ((this.limit = e),
        (this.release = t),
        !Number.isSafeInteger(e) || e < 0 || e > 64)
      )
        throw RangeError(`inactive resource cache limit must be in [0, 64]`);
    }
    get size() {
      return this.entries.length;
    }
    retain(e) {
      for (
        this.remove(e), this.entries.push(e);
        this.entries.length > this.limit;
      )
        this.release(this.entries.shift());
    }
    remove(e) {
      let t = this.entries.indexOf(e);
      t >= 0 && this.entries.splice(t, 1);
    }
    clear() {
      let e;
      for (let t of this.entries.splice(0))
        try {
          this.release(t);
        } catch (t) {
          e ??= t;
        }
      if (e !== void 0) throw e;
    }
  },
  Bn = Symbol(`interiors-wait`),
  Vn = { sync: !1 },
  Hn = { R: 250, S: 20 },
  Un = class {
    sites = [];
    active = [];
    get activeSites() {
      return this.active;
    }
    caps = new Map();
    timer = 0;
    cand = [];
    counts = new Map();
    jobs = [];
    budget = 2.5;
    lastBuildMs = 0;
    maxSliceMs = 0;
    warm = new Map();
    holds = new Map();
    keep = null;
    relT = 0;
    released = 0;
    paused = !1;
    add(e) {
      (this.sites.push(e), e.built && this.active.push(e));
    }
    cap(e, t) {
      this.caps.set(e, t);
    }
    hold(e, t) {
      let n = performance.now() + t;
      ((this.holds.get(e) ?? 0) < n && this.holds.set(e, n), (this.timer = 0));
    }
    unhold(e) {
      this.holds.delete(e);
    }
    held(e) {
      let t = this.holds.get(e);
      return t === void 0
        ? !1
        : t > performance.now() || (this.holds.delete(e), !1);
    }
    get holding() {
      return this.holds;
    }
    pin(e) {
      return (e.pinned?.() ?? !1) || this.held(e);
    }
    update(e, t, n, r) {
      if (!this.paused) {
        if (
          ((this.timer -= e),
          this.timer <= 0 && ((this.timer = 0.25), this.scan(t, n, r)),
          this.jobs.length)
        ) {
          let e = performance.now(),
            t = this.jobs[0];
          try {
            let n = this.step(t);
            for (
              ;
              !n.done && n.value !== Bn && performance.now() - e < this.budget;
            )
              n = this.step(t);
            n.done &&
              (this.setBuilt(t.s, !0),
              this.jobs.shift(),
              (this.lastBuildMs = t.ms + (performance.now() - e)));
          } catch (e) {
            (console.error(`[interiors] build failed`, t.s.id, e),
              this.jobs.shift());
          }
          let n = performance.now() - e;
          ((t.ms += n), n > this.maxSliceMs && (this.maxSliceMs = n));
        }
        for (let t = 0; t < this.active.length; t++) this.active[t].tick?.(e);
        if (((this.relT += e), this.relT >= 1 && this.warm.size)) {
          let e = this.relT;
          ((this.relT = 0), this.releaseFar(e, t, n, r));
        } else this.warm.size || (this.relT = 0);
      }
    }
    releaseFar(e, t, n, r) {
      let i = Hn.R,
        a = 0;
      for (let [o, s] of this.warm) {
        if (o.built || this.building(o)) {
          this.warm.delete(o);
          continue;
        }
        if (this.pin(o) || this.keep?.(o)) {
          this.warm.set(o, 0);
          continue;
        }
        let c = o.y === void 0 ? 0 : n - o.y;
        if ((o.x - t) ** 2 + (o.z - r) ** 2 + c * c < i * i) {
          s && this.warm.set(o, 0);
          continue;
        }
        let l = s + e;
        if (l < Hn.S || a >= 2) {
          this.warm.set(o, l);
          continue;
        }
        (this.warm.delete(o), this.releaseSite(o), a++);
      }
    }
    releaseSite(e) {
      try {
        (e.release?.(), this.released++);
      } catch (t) {
        console.error(`[interiors] release failed`, e.id, t);
      }
    }
    tier(e) {
      return e.built
        ? `built`
        : this.building(e)
          ? `building`
          : this.warm.has(e)
            ? `warm`
            : `cold`;
    }
    get warmCount() {
      return this.warm.size;
    }
    worstStep = { id: ``, step: 0, label: ``, ms: 0 };
    step(e) {
      let t = performance.now(),
        n = e.it.next(),
        r = performance.now() - t;
      return (
        (e.n = (e.n ?? 0) + 1),
        r > this.worstStep.ms &&
          ((this.worstStep.id = e.s.id),
          (this.worstStep.step = e.n),
          (this.worstStep.label =
            typeof n.value == `string` ? n.value : n.done ? `done` : ``),
          (this.worstStep.ms = r)),
        n
      );
    }
    setBuilt(e, t) {
      if (e.built === t) return;
      if (((e.built = t), t)) {
        (this.warm.delete(e), this.active.push(e));
        return;
      }
      let n = this.active.indexOf(e);
      (n >= 0 && this.active.splice(n, 1), e.release && this.warm.set(e, 0));
    }
    drop(e) {
      try {
        e.dispose();
      } catch (t) {
        console.error(`[interiors] dispose failed`, e.id, t);
      }
      this.setBuilt(e, !1);
    }
    building(e) {
      for (let t of this.jobs) if (t.s === e) return !0;
      return !1;
    }
    cancel(e) {
      for (let t = 0; t < this.jobs.length; t++)
        this.jobs[t].s === e &&
          (this.jobs.splice(t--, 1), e.release && this.warm.set(e, 0));
    }
    scan(e, t, n) {
      let r = this.cand;
      r.length = 0;
      for (let i of this.sites) {
        let a = i.y === void 0 ? 0 : t - i.y,
          o = Math.sqrt((i.x - e) ** 2 + (i.z - n) ** 2 + a * a),
          s = this.pin(i);
        (i.built && o > i.dropR && !s && this.drop(i),
          !i.built && o > i.dropR && !s && this.cancel(i),
          !(!s && !i.built && o < i.buildR && i.canBuild && !i.canBuild()) &&
            ((s && !i.built && i.openNow && !i.openNow() && this.held(i)) ||
              (!i.built && (o < i.buildR || s) && i.ready && !i.ready()) ||
              ((o < i.buildR || (i.built && o <= i.dropR) || s) &&
                r.push({ s: i, d: s ? -1 : o }))));
      }
      (r.sort((e, t) => e.d - t.d), this.counts.clear());
      for (let e of r) {
        let t = this.counts.get(e.s.group) ?? 0;
        if (t >= (this.caps.get(e.s.group) ?? 99)) {
          (e.s.built && !this.pin(e.s) && this.drop(e.s), this.cancel(e.s));
          continue;
        }
        if (
          (this.counts.set(e.s.group, t + 1), !e.s.built && !this.building(e.s))
        ) {
          let t = performance.now();
          try {
            let n = e.s.build();
            (this.warm.delete(e.s),
              n && typeof n.next == `function`
                ? (this.jobs.push({ s: e.s, it: n, ms: performance.now() - t }),
                  e.d < 0 &&
                    this.jobs.length > 1 &&
                    this.jobs.unshift(this.jobs.pop()))
                : (this.setBuilt(e.s, !0),
                  (this.lastBuildMs = performance.now() - t)));
          } catch (t) {
            console.error(`[interiors] build failed`, e.s.id, t);
          }
        }
      }
    }
    flush() {
      let e = Vn.sync;
      Vn.sync = !0;
      try {
        for (; this.jobs.length;) {
          let e = this.jobs.shift();
          try {
            let t = e.it.next();
            for (; !t.done;) t = e.it.next();
            this.setBuilt(e.s, !0);
          } catch (t) {
            console.error(`[interiors] build failed`, e.s.id, t);
          }
        }
      } finally {
        Vn.sync = e;
      }
    }
    releaseAll() {
      this.jobs.length = 0;
      for (let e of [...this.active]) this.drop(e);
      for (let e of [...this.warm.keys()]) this.releaseSite(e);
      (this.warm.clear(), this.holds.clear());
    }
    get pending() {
      return this.jobs.length;
    }
    pendingSites(e = []) {
      e.length = 0;
      for (let t of this.jobs) e.push(t.s);
      return e;
    }
    get builtCount() {
      return this.active.length;
    }
  };
function Wn(e) {
  let t = 0,
    n = new Set();
  for (let r of e) {
    let e = r.geometry;
    if (e && !n.has(e)) {
      n.add(e);
      for (let n in e.attributes) {
        let r = e.attributes[n];
        t += r.count * r.itemSize * (r.array?.BYTES_PER_ELEMENT ?? 4);
      }
      e.index && (t += e.index.count * (e.index.array?.BYTES_PER_ELEMENT ?? 4));
    }
  }
  return t;
}
