// tokyo/assets/net-PtwKfaxg 04 — session
// Lines 1665-2104 of readable/tokyo/assets/net-PtwKfaxg.pretty.js (statement-aligned).
var Xe = (e) => typeof e == `number` && Number.isSafeInteger(e) && e > 0,
  Ze = (e) => typeof e == `number` && Number.isFinite(e),
  Qe = class {
    ctx;
    session;
    remote;
    replicas;
    subscribers = new Map();
    versions = new Map();
    lastHit = new Map();
    hitVersions = new Map();
    pendingHits = new Map();
    seq = 0;
    hitSeq = 0;
    nextSend = 0;
    turn = 0;
    off;
    lastAttack = -1 / 0;
    reliableTokens = 4096;
    reliableAt = 0;
    origin = new l();
    direction = new l();
    stats = {
      packets: 0,
      bytes: 0,
      received: 0,
      dropped: 0,
      hits: 0,
      replicas: 0,
    };
    constructor(e, t, n) {
      ((this.ctx = e),
        (this.session = t),
        (this.remote = n),
        (this.replicas = new fe(e, (e, t, n) => this.hit(e, t, n))));
    }
    start() {
      this.off ??= this.ctx.events.on(`player:attack`, () => {
        this.lastAttack = performance.now();
      });
    }
    debugSnapshot() {
      return {
        source: this.ctx.police.networkSource?.()?.capture() ?? [],
        stats: { ...this.stats },
        replicas: [...this.replicas.entries.values()].map((e) => ({
          owner: e.owner,
          ...e.target,
          bodyId: e.body.id,
          active: e.body.active,
          drawn: { x: e.x, y: e.y, z: e.z, heading: e.heading },
        })),
      };
    }
    hostChanged() {
      this.nextSend = 0;
    }
    resync() {
      this.nextSend = 0;
    }
    onRoster() {
      let e = this.session.members;
      for (let t of this.subscribers.keys())
        e.has(t) || this.subscribers.delete(t);
      for (let [t, n] of this.replicas.entries)
        e.has(n.owner) || this.replicas.remove(t);
      for (let t of this.versions.keys())
        e.has(t.split(`/`)[0]) || this.versions.delete(t);
      for (let t of this.hitVersions.keys())
        e.has(t) || this.hitVersions.delete(t);
    }
    update(e) {
      if (this.session.role === `off`) {
        (this.replicas.size || this.subscribers.size) && this.clear();
        return;
      }
      let t = performance.now(),
        n = this.ctx.player.position;
      this.onRoster();
      for (let [e, r] of this.replicas.entries)
        (t - r.received > 2200 || B(r.target, n) > 285) &&
          this.replicas.remove(e);
      for (let [e, n] of this.versions)
        t - n.at > 1e4 && this.versions.delete(e);
      for (let [e, n] of this.lastHit) t - n > 1e4 && this.lastHit.delete(e);
      for (let [e, n] of this.pendingHits)
        t - n.at > 3e3 && this.pendingHits.delete(e);
      (t >= this.nextSend && ((this.nextSend = t + 125), this.send(t)),
        this.replicas.draw(Math.min(Math.max(e, 0), 0.1), t),
        (this.stats.replicas = this.replicas.size));
    }
    send(e) {
      let t = this.ctx.police.networkSource?.();
      if (!t) return;
      let n = [...this.session.members.values()].filter(
        (e) =>
          e.peer !== this.session.peer && this.session.supportsNearby(e.slot),
      );
      if (!n.length) return;
      let r = t.capture(),
        i = ++this.seq,
        a = this.turn++ % n.length;
      for (let t = 0; t < n.length; t++) {
        let o = n[(a + t) % n.length],
          s = this.remote(o.slot);
        if (!s || s.peer !== o.peer) continue;
        let c = this.subscribers.get(o.peer);
        c ||
          ((c = { ids: new Set(), sent: new Map() }),
          this.subscribers.set(o.peer, c));
        let l = r
            .filter((e) => B(e, s.pose) < 240)
            .sort((e, t) => B(e, s.pose) - B(t, s.pose))
            .slice(0, 24),
          u = new Set(l.map((e) => e.id)),
          d = [...c.ids].filter((e) => !u.has(e));
        if (
          d.length &&
          this.reliable(
            { t: `police-drop`, owner: this.session.peer, seq: i, ids: d },
            o.slot,
          )
        )
          for (let e of d) (c.ids.delete(e), c.sent.delete(e));
        let f = l.filter(
          (t) =>
            e - (c.sent.get(t.id) ?? -1 / 0) >=
            (B(t, s.pose) < 110 ? 125 : 500),
        );
        for (let t of qe(this.session.peer, i, f)) {
          if (!this.session.sendTransient(t, o.slot)) {
            this.stats.dropped++;
            break;
          }
          (this.stats.packets++,
            (this.stats.bytes += JSON.stringify(t).length));
          for (let n of t.units) (c.ids.add(n[0]), c.sent.set(n[0], e));
        }
      }
    }
    onEvent(e, t) {
      if (this.session.role === `off` || !this.session.supportsNearby(e))
        return;
      let n = [...this.session.members.values()].find(
          (t) => t.slot === e && t.peer !== this.session.peer,
        ),
        r = this.remote(e);
      if (!n || !r || r.peer !== n.peer) return;
      if (t.t === `police-hit`) {
        this.receiveHit(n.peer, e, r, t);
        return;
      }
      if (t.t === `police-hit-result`) {
        if (!Xe(t.hit)) return;
        let e = this.pendingHits.get(t.hit);
        if (!e || e.peer !== n.peer || t.owner !== n.peer) return;
        (this.pendingHits.delete(t.hit),
          this.ctx.events.emit(`crime`, {
            type: t.killed === !0 ? `kill_police` : `assault_police`,
            pos: e.pos,
            severity: 1,
            witnessed: !0,
          }));
        return;
      }
      if (t.owner !== n.peer || !Xe(t.seq)) return;
      let i = performance.now();
      if (t.t === `police-drop`) {
        if (!Array.isArray(t.ids) || t.ids.length > 24) return;
        for (let e of t.ids) {
          if (typeof e != `string` || e.length > 24) continue;
          let r = `${n.peer}/${e}`,
            a = this.versions.get(r);
          (a && a.seq >= t.seq) ||
            (this.versions.size >= 512 && !a) ||
            (this.versions.set(r, { seq: t.seq, at: i }),
            this.replicas.remove(r));
        }
      } else if (t.t === `police-state`) {
        if (!Array.isArray(t.units) || t.units.length > 24) return;
        for (let e of t.units) {
          let r = Ke(e);
          if (!r || B(r, this.ctx.player.position) > 270) continue;
          let a = `${n.peer}/${r.id}`,
            o = this.versions.get(a);
          (o && o.seq >= t.seq) ||
            (this.versions.size >= 512 && !o) ||
            (this.versions.set(a, { seq: t.seq, at: i }),
            this.replicas.put(n.peer, r, i),
            this.stats.received++);
        }
      }
    }
    hit(e, t, n) {
      let r = this.session.members.get(e),
        i = performance.now();
      if (
        !r ||
        !this.session.supportsNearby(r.slot) ||
        !Ze(n.amount) ||
        n.amount <= 0 ||
        t.health <= 0
      )
        return;
      let a = n.source,
        o = n.weapon ?? (a === `player` ? `fists` : ``),
        s = Ye(o, a);
      if (!s || (a === `explosion` && i - this.lastAttack > 2500)) return;
      if (a === `vehicle`) {
        let e = this.ctx.vehicles.playerVehicle;
        if (!e || Math.hypot(t.x - e.body.x, t.z - e.body.z) > 12) return;
      }
      if (Je(t, this.ctx.player.position) > s.range) return;
      let c = `send/${e}/${t.id}`;
      if (i - (this.lastHit.get(c) ?? -1 / 0) < s.gap) return;
      this.lastHit.set(c, i);
      let u = ++this.hitSeq;
      this.reliable(
        {
          t: `police-hit`,
          owner: e,
          id: t.id,
          hit: u,
          amount: Math.min(n.amount, s.amount),
          src: a,
          weapon: o,
          dx: n.dir?.x ?? 0,
          dz: n.dir?.z ?? 0,
        },
        r.slot,
      ) &&
        this.pendingHits.set(u, { peer: e, at: i, pos: new l(t.x, t.y, t.z) });
    }
    receiveHit(e, t, n, r) {
      if (
        r.owner !== this.session.peer ||
        typeof r.id != `string` ||
        !Xe(r.hit) ||
        !Ze(r.amount) ||
        r.amount <= 0 ||
        !Ze(r.dx) ||
        !Ze(r.dz) ||
        Math.abs(r.dx) > 2 ||
        Math.abs(r.dz) > 2 ||
        r.hit <= (this.hitVersions.get(e) ?? 0)
      )
        return;
      let i = this.ctx.police.networkSource?.();
      if (!i) return;
      let a = String(r.src),
        o = String(r.weapon),
        s = Ye(o, a);
      if (!s) return;
      let c = i.capture().find((e) => e.id === r.id);
      if (!c || c.health <= 0 || Je(c, n.pose) > s.range + 3) return;
      let u = performance.now(),
        d = `receive/${e}/${c.id}`;
      if (u - (this.lastHit.get(d) ?? -1 / 0) < s.gap * 0.8) return;
      (this.origin.set(n.pose.x, n.pose.y + 1.35, n.pose.z),
        this.direction.set(
          c.x - this.origin.x,
          c.y + (c.kind === 2 ? 0 : 1) - this.origin.y,
          c.z - this.origin.z,
        ));
      let f = this.direction.length();
      if (
        f > 0.5 &&
        this.ctx.statics.raycast(
          this.origin,
          this.direction.normalize(),
          f - 0.5,
        )
      )
        return;
      (this.hitVersions.set(e, r.hit), this.lastHit.set(d, u));
      let p = i.damage(c.id, {
        amount: Math.min(r.amount, s.amount),
        source: a,
        weapon: o,
        dir: new l(r.dx, 0, r.dz),
        point: new l(c.x, c.y + 1, c.z),
      });
      p &&
        (this.stats.hits++,
        this.reliable(
          {
            t: `police-hit-result`,
            owner: this.session.peer,
            hit: r.hit,
            killed: p.killed,
          },
          t,
        ),
        (this.nextSend = 0));
    }
    reliable(e, t) {
      let n = performance.now();
      ((this.reliableTokens = Math.min(
        4096,
        this.reliableTokens + Math.max(0, n - this.reliableAt) * 4.096,
      )),
        (this.reliableAt = n));
      let r = JSON.stringify(e).length;
      return r > this.reliableTokens
        ? !1
        : ((this.reliableTokens -= r), this.session.sendEvent(e, t), !0);
    }
    clear() {
      (this.replicas.clear(),
        this.subscribers.clear(),
        this.versions.clear(),
        this.pendingHits.clear(),
        this.lastHit.clear(),
        this.hitVersions.clear(),
        (this.nextSend = 0),
        (this.stats.replicas = 0));
    }
    dispose() {
      (this.off?.(),
        (this.off = void 0),
        this.clear(),
        this.replicas.dispose());
    }
  },
  $e = new Set([`fists`, `bat`, `pistol`, `smg`]),
  et = new Set([
    `jab`,
    `cross`,
    `hook`,
    `uppercut`,
    `kick`,
    `batFore`,
    `batBack`,
  ]),
  tt = 200,
  nt = class {
    ctx;
    session;
    remote;
    stats = { sent: 0, played: 0, rejected: 0 };
    sequence = 0;
    seen = new Map();
    unsubscribe;
    constructor(e, t, n) {
      ((this.ctx = e), (this.session = t), (this.remote = n));
    }
    start() {
      this.unsubscribe = this.ctx.events.on(
        `player:attack`,
        ({ weapon: e, action: t }) => {
          if (this.session.role === `off` || !$e.has(e) || this.ctx.paused)
            return;
          let n = this.ctx.player.position,
            r = {
              t: `action`,
              seq: ++this.sequence,
              at: performance.now() >>> 0,
              weapon: e,
              action: t,
              x: Math.round(n.x * 100) / 100,
              y: Math.round(n.y * 100) / 100,
              z: Math.round(n.z * 100) / 100,
            };
          for (let e of this.session.members.values()) {
            let t = this.remote(e.slot);
            e.peer === this.session.peer ||
              !this.session.supportsNearby(e.slot) ||
              !t ||
              t.goneT >= 0 ||
              Math.hypot(t.pose.x - n.x, t.pose.z - n.z) > tt ||
              (this.session.sendEvent(r, e.slot), this.stats.sent++);
          }
        },
      );
    }
    onEvent(e, t) {
      if (t.t !== `action`) return !1;
      let n = this.remote(e),
        r = performance.now(),
        i = n && this.seen.get(n.peer),
        a = typeof t.weapon == `string` ? t.weapon : ``,
        o = Number(t.seq),
        s = Number(t.at),
        c = Number(t.x),
        l = Number(t.y),
        u = Number(t.z);
      if (
        !n ||
        n.goneT >= 0 ||
        !this.session.supportsNearby(e) ||
        !$e.has(a) ||
        !Number.isSafeInteger(o) ||
        o < 1 ||
        !Number.isInteger(s) ||
        s < 0 ||
        s > 4294967295 ||
        ![c, l, u].every(Number.isFinite) ||
        Math.abs(c) > 1e5 ||
        Math.abs(u) > 1e5 ||
        Math.abs(l) > 1e4 ||
        (i && (o <= i.seq || r - i.at < 35)) ||
        T(n.pose.t, s) > 1e3 ||
        T(n.pose.t, s) < -3e3 ||
        Math.hypot(c - n.pose.x, u - n.pose.z) > 35 ||
        Math.hypot(
          c - this.ctx.player.position.x,
          u - this.ctx.player.position.z,
        ) > 225
      )
        return (this.stats.rejected++, !0);
      this.seen.set(n.peer, { seq: o, at: r });
      let d =
        typeof t.action == `string` && et.has(t.action) ? t.action : void 0;
      n.playAttack?.(a, d);
      try {
        this.ctx.audio.play(
          a === `fists` || a === `bat` ? `punch_whoosh` : `gunshot`,
          {
            x: c,
            y: l + 1.2,
            z: u,
            volume: a === `fists` || a === `bat` ? 0.7 : 0.8,
            rate: a === `bat` ? 0.72 : 1,
          },
        );
      } catch {}
      return (this.stats.played++, !0);
    }
    onRoster() {
      for (let e of this.seen.keys())
        this.session.members.has(e) || this.seen.delete(e);
    }
    clear() {
      this.seen.clear();
    }
    dispose() {
      (this.unsubscribe?.(), this.clear());
    }
  },
  rt = p;
