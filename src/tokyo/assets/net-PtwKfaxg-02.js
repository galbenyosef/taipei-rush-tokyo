// tokyo/assets/net-PtwKfaxg 02 — peer
// Lines 307-1532 of readable/tokyo/assets/net-PtwKfaxg.pretty.js (statement-aligned).
var Ve = 180,
  N = 230,
  He = 32,
  P = (e) => (typeof e == `number` && Number.isFinite(e) ? e : NaN),
  F = (e) => typeof e == `string` && /^[a-zA-Z0-9:._-]{1,90}$/.test(e),
  I = (e) => e,
  L = (e, t) => (e.x - t.x) ** 2 + (e.z - t.z) ** 2,
  Ue = (e, t) => !e.body?.userData?.noJack && Math.abs(e.y - t) <= 1.2,
  We = class {
    ctx;
    session;
    remotes;
    pools = [];
    cells = new Map();
    subscriptions = new Map();
    replicas = new Map();
    participants = [];
    elapsed = 0;
    topologyAt = 0;
    snapshotsAt = 0;
    motionAt = 0;
    serial = 0;
    sequence = 0;
    motionTurn = 0;
    hitSeq = 0;
    outstandingHits = new Map();
    seenHits = new Map();
    cooldowns = new Map();
    pending = new Map();
    reservations = new Map();
    accepted = new Map();
    transfers = new Map();
    transferSeen = new Map();
    retired = new Map();
    applying = !1;
    outgoing = [];
    selectionAt = 0;
    reliableTokens = 4096;
    selected = new Map();
    selectedIds = new Set();
    selectedCount = new Map();
    sharedCells = new Set();
    ownedLimit = 48;
    sent = 0;
    dropped = 0;
    ownClaimShared;
    ownRelease;
    constructor(e, t, n) {
      ((this.ctx = e), (this.session = t), (this.remotes = n));
    }
    init() {
      if (this.pools.length) return !0;
      let e = this.ctx.peds.ambient?.(),
        t = this.ctx.traffic.ambient?.();
      if (!e || !t) return !1;
      this.pools = [e, t];
      for (let e of this.pools)
        e.hooks({
          blocked: (t, n) => this.spawnBlocked(e, t, n),
          damage: (t, n) => this.hit(e, I(t), n),
          impact: (t, n, r, i) => this.impact(e, I(t), n, r, i),
          claim: (e) => {
            let t = I(e);
            return t.ambientRemote || this.reservations.has(t.ambientId)
              ? !0
              : (this.retire(t), !1);
          },
        });
      return (
        (this.ownClaimShared = this.ctx.traffic.claimSharedNearest),
        (this.ownRelease = this.ctx.traffic.releaseSharedClaim),
        (this.ctx.traffic.claimSharedNearest = (e, t, n, r) =>
          this.claim(e, t, n, r)),
        (this.ctx.traffic.releaseSharedClaim = (e) => this.releaseClaim(e)),
        !0
      );
    }
    update(e) {
      if (((this.elapsed += Math.min(0.1, Math.max(0, e))), this.init())) {
        for (
          this.elapsed >= this.topologyAt &&
            ((this.topologyAt = this.elapsed + 0.5), this.topology()),
            this.interpolate(Math.min(e, 0.1)),
            this.elapsed >= this.selectionAt &&
              ((this.selectionAt = this.elapsed + 0.1),
              this.select(),
              this.pruneLocal()),
            this.elapsed >= this.snapshotsAt &&
              ((this.snapshotsAt = this.elapsed + 1), this.refresh()),
            this.elapsed >= this.motionAt &&
              ((this.motionAt = this.elapsed + 0.1), this.motion()),
            this.reliableTokens = Math.min(
              4096,
              this.reliableTokens + e * 12288,
            );
          this.outgoing.length;
        ) {
          let e = this.outgoing[0],
            t = JSON.stringify(e.m).length;
          if (t > this.reliableTokens) break;
          if (
            (this.outgoing.shift(),
            (this.reliableTokens -= t),
            e.m.t === `ambient-transfer` && typeof e.m.id == `string`)
          ) {
            let t = this.transfers.get(e.m.id);
            t && (t.until = this.elapsed + 2);
          }
          this.reliable(e.m, e.to);
        }
        for (let [e, t] of this.pending)
          (t.until < this.elapsed || t.signal?.aborted) &&
            (this.pending.delete(e),
            this.reliable({ t: `ambient-claim-cancel`, q: e, id: t.id }, t.to),
            t.resolve(null));
        for (let [e, t] of this.transfers) {
          if (
            !t.e.active ||
            !this.participants.some((e) => e.slot === t.to && e.peer === t.peer)
          ) {
            this.transfers.delete(e);
            continue;
          }
          if (t.until < this.elapsed) {
            if (
              this.outgoing.some(
                (n) =>
                  n.m.t === `ambient-transfer` && n.m.id === e && n.to === t.to,
              )
            )
              t.until = this.elapsed + 0.6;
            else {
              (t.pool.remove(t.e), this.transfers.delete(e));
              continue;
            }
          }
          t.retry < this.elapsed &&
            ((t.retry = this.elapsed + 0.6), this.sendTransfer(e, t));
        }
        for (let [e, t] of this.accepted)
          t.until < this.elapsed && this.accepted.delete(e);
        for (let [e, t] of this.reservations)
          (t.until < this.elapsed ||
            !this.participants.some(
              (e) => e.slot === t.to && e.peer === t.peer,
            )) &&
            ((t.e.ambientRemote = !1), this.reservations.delete(e));
      }
    }
    topology() {
      let e = this.ctx.player.position;
      if (
        ((this.participants = [
          {
            slot: this.session.slot,
            peer: this.session.peer,
            x: e.x,
            y: e.y,
            z: e.z,
          },
          ...this.remotes().filter((e) => this.session.supportsNearby(e.slot)),
        ]),
        this.participants.length < 2)
      ) {
        for (let t of this.replicas.values())
          L(t.e, e) < N ** 2 ? t.pool.promote(t.e) : t.pool.remove(t.e);
        (this.replicas.clear(),
          this.cells.clear(),
          this.subscriptions.clear(),
          (this.outgoing.length = 0));
        return;
      }
      let t = new Set(),
        n = Math.floor(e.x / 128),
        r = Math.floor(e.z / 128);
      for (let i = n - 2; i <= n + 2; i++)
        for (let n = r - 2; n <= r + 2; n++) {
          let r = Math.max(0, i * 128 - e.x, e.x - (i + 1) * 128),
            a = Math.max(0, n * 128 - e.z, e.z - (n + 1) * 128),
            o = `${i},${n}`,
            s = this.cells.get(o);
          if (r * r + a * a > (s ? N : Ve) ** 2) continue;
          t.add(o);
          let c = M(o, this.participants);
          if (c < 0) continue;
          let l = this.participants.find((e) => e.slot === c)?.peer || ``;
          if (!s || s.owner !== c || s.peer !== l) {
            if (c === this.session.slot)
              for (let [e, t] of this.replicas)
                D(t.e.x, t.e.z) === o &&
                  (t.pool.promote(t.e), this.replicas.delete(e));
            if (s?.owner === this.session.slot && c !== this.session.slot) {
              for (let e of this.pools)
                for (let t of e.entities().map(I))
                  if (this.eligible(e, t) && t.ambientId && D(t.x, t.z) === o) {
                    let n = {
                      peer: l,
                      pool: e,
                      e: t,
                      to: c,
                      cell: o,
                      until: this.elapsed + 2,
                      retry: this.elapsed + 0.6,
                    };
                    (this.transfers.set(t.ambientId, n),
                      this.sendTransfer(t.ambientId, n));
                  }
            }
            this.cells.set(o, {
              peer: l,
              owner: c,
              ready: c === this.session.slot,
              requested: 0,
              seq: -1,
            });
          }
          let u = this.cells.get(o);
          c !== this.session.slot &&
            this.elapsed >= u.requested &&
            ((u.requested = this.elapsed + 3),
            this.reliable({ t: `ambient-sub`, c: o, reset: !u.ready }, c));
        }
      let i = new Set();
      for (let e of this.participants)
        for (let t = -1; t <= 1; t++)
          for (let n = -1; n <= 1; n++) {
            let r = `${Math.floor(e.x / 128) + t},${Math.floor(e.z / 128) + n}`;
            i.add(M(r, this.participants));
          }
      let a = Math.floor(
        32 / Math.sqrt(Math.max(1, this.participants.length - 1)),
      );
      this.ownedLimit = Math.max(
        4,
        Math.floor(Math.min(this.replicaLimit() / 2, a) / Math.max(1, i.size)),
      );
      for (let [e] of this.cells) t.has(e) || this.cells.delete(e);
      for (let [t, n] of this.replicas)
        (!this.cells.has(D(n.e.x, n.e.z)) ||
          !this.participants.some(
            (e) => e.slot === n.owner && e.peer === n.peer,
          )) &&
          (L(n.e, e) < N ** 2 ? n.pool.promote(n.e) : n.pool.remove(n.e),
          this.replicas.delete(t));
      for (let e of this.seenHits.keys())
        this.participants.some((t) => t.peer === e) || this.seenHits.delete(e);
      for (let [e, t] of this.retired)
        t.until < this.elapsed && this.retired.delete(e);
      for (let [e, t] of this.transferSeen)
        t < this.elapsed && this.transferSeen.delete(e);
      for (let [e, t] of this.outstandingHits)
        t.until < this.elapsed && this.outstandingHits.delete(e);
      for (let [e, t] of this.cooldowns)
        t < this.elapsed - 2 && this.cooldowns.delete(e);
      for (let [e, t] of this.subscriptions)
        (!this.participants.some(
          (e) => e.slot === t.slot && e.peer === t.peer,
        ) ||
          t.until < this.elapsed) &&
          this.subscriptions.delete(e);
    }
    spawnBlocked(e, t, n) {
      let r = D(t, n),
        i = this.cells.get(r);
      return i?.ready && i.owner !== this.session.slot
        ? !0
        : this.sharedCells.has(r)
          ? (this.selectedCount.get(e.kind) || 0) >= this.ownedLimit ||
            (this.selected.get(r) || []).filter((t) => t.pool === e).length >=
              He
          : !1;
    }
    id(e) {
      return (e.ambientId ||= `${this.session.peer.slice(0, 40)}:${++this.serial}`);
    }
    eligible(e, t) {
      return (
        t.active &&
        !t.ambientRemote &&
        !(e.kind === `ped` && t.scripted) &&
        !this.reservations.has(t.ambientId)
      );
    }
    select() {
      (this.selected.clear(),
        this.selectedIds.clear(),
        this.selectedCount.clear());
      let e = (this.sharedCells = new Set(
        [...this.subscriptions.values()].map((e) => e.cell),
      ));
      for (let t of this.pools) {
        let n = t
            .entities()
            .map(I)
            .filter((n) => this.eligible(t, n) && e.has(D(n.x, n.z))),
          r = (e) => Math.min(...this.participants.map((t) => L(e, t)));
        n.sort((e, t) =>
          Number(e.health) < Number(t.health)
            ? -1
            : Number(e.health) > Number(t.health)
              ? 1
              : r(e) - r(t),
        );
        let i = 0,
          a = new Map();
        for (let e = 0; e < n.length; e++) {
          let r = n[e],
            o = D(r.x, r.z),
            s = a.get(o) || 0;
          if (i >= this.ownedLimit || s >= He) {
            t.remove(r);
            continue;
          }
          (i++, a.set(o, s + 1));
          let c = this.id(r);
          this.selectedIds.add(c);
          let l = this.selected.get(o);
          (l || this.selected.set(o, (l = [])), l.push({ pool: t, e: r }));
        }
        this.selectedCount.set(t.kind, i);
      }
    }
    list(e, t) {
      return (this.selected.get(t) || [])
        .filter((t) => t.pool === e && t.e.active && !t.e.ambientRemote)
        .map((e) => e.e);
    }
    reliable(e, t) {
      this.session.sendEvent({ ...e, u: this.session.peer }, t);
    }
    enqueue(e, t) {
      this.outgoing.length < 192 && this.outgoing.push({ to: e, m: t });
    }
    sendSnapshot(e) {
      if (
        this.outgoing.some((t) => t.to === e.slot && t.m.c === e.cell) ||
        M(e.cell, this.participants) !== this.session.slot
      )
        return;
      let t = [],
        n = ++this.sequence,
        r = [],
        i = new Map(e.known);
      for (let a of this.pools)
        for (let o of this.list(a, e.cell)) {
          let s = this.id(o);
          (t.push(s), (o.ambientCell = e.cell));
          let c =
            a.kind === `ped`
              ? `${o.state}:${o.health}:${o.variant}`
              : `${o.mode}:${o.link}:${o.health}:${o.abandoned}`;
          i.get(s) !== c &&
            (r.push({
              t: `ambient-spawn`,
              c: e.cell,
              q: n,
              k: a.kind,
              id: s,
              d: Be(o, a.kind === `ped` ? Ie : E),
            }),
            i.set(s, c));
        }
      for (let e of i.keys()) t.includes(e) || i.delete(e);
      if (
        (r.push({ t: `ambient-manifest`, c: e.cell, q: n, ids: t }),
        !(this.outgoing.length + r.length > 192))
      ) {
        e.known = i;
        for (let t of r) this.enqueue(e.slot, t);
      }
    }
    refresh() {
      for (let e of this.subscriptions.values()) this.sendSnapshot(e);
    }
    pruneLocal() {
      for (let e of this.pools)
        for (let t of e.entities()) {
          let n = I(t);
          if (!this.eligible(e, n)) continue;
          let r = this.cells.get(D(n.x, n.z));
          if (r?.ready && r.owner !== this.session.slot) {
            if (n.ambientId && n.ambientCell && n.ambientCell !== D(n.x, n.z)) {
              if (!this.transfers.has(n.ambientId)) {
                let t = {
                  peer: r.peer,
                  pool: e,
                  e: n,
                  to: r.owner,
                  cell: D(n.x, n.z),
                  until: this.elapsed + 2,
                  retry: this.elapsed + 0.6,
                };
                (this.transfers.set(n.ambientId, t),
                  this.sendTransfer(n.ambientId, t));
              }
            } else this.transfers.has(n.ambientId) || e.remove(n);
          }
        }
    }
    sendTransfer(e, t) {
      let n = {
          t: `ambient-transfer`,
          id: e,
          c: t.cell,
          previous: t.e.ambientCell,
          k: t.pool.kind,
          d: Be(t.e, t.pool.kind === `ped` ? Ie : E),
        },
        r = this.outgoing.find(
          (n) => n.to === t.to && n.m.t === `ambient-transfer` && n.m.id === e,
        );
      r ? (r.m = n) : this.enqueue(t.to, n);
    }
    motion() {
      let e = new Map();
      for (let t of this.subscriptions.values()) {
        if (M(t.cell, this.participants) !== this.session.slot) continue;
        let n = e.get(t.slot);
        (n || e.set(t.slot, (n = new Set())), n.add(t.cell));
      }
      let t = [...e],
        n = t.length ? this.motionTurn++ % t.length : 0;
      for (let e = 0; e < t.length; e++) {
        let [r, i] = t[(e + n) % t.length],
          a = this.participants.find((e) => e.slot === r);
        if (!a) continue;
        let o = [];
        for (let e of i)
          for (let t of this.selected.get(e) || [])
            t.e.active && !t.e.ambientRemote && L(t.e, a) < N ** 2 && o.push(t);
        o.sort((e, t) => L(e.e, a) - L(t.e, a));
        let s = [],
          c = () => {
            if (!s.length) return;
            let e = { t: `ambient-state`, q: ++this.sequence, r: s };
            (this.session.sendTransient({ ...e, u: this.session.peer }, r)
              ? this.sent++
              : this.dropped++,
              (s = []));
          };
        for (let { pool: e, e: t } of o.slice(0, 80)) {
          let n =
            e.kind === `ped` ? (L(t, a) > 6400 ? 4 : 2) : L(t, a) > 1e4 ? 2 : 1;
          if (Math.floor(this.elapsed * 10) % n) continue;
          let r = [
            this.id(t),
            e.kind === `ped` ? 0 : 1,
            Be(t, e.kind === `ped` ? Le : Re),
          ];
          ((s.length >= 8 ||
            JSON.stringify({
              t: `ambient-state`,
              q: this.sequence + 1,
              r: [...s, r],
            }).length > 1120) &&
            c(),
            s.push(r));
        }
        c();
      }
    }
    interpolate(e) {
      for (let t of this.replicas.values()) {
        let n = t.e,
          r = t.target;
        if (!n.active || !r) continue;
        let i = this.elapsed - t.time,
          a = 1 - Math.exp(-e * 18),
          o = Number(r.vx ?? Math.sin(Number(r.heading)) * Number(r.v || 0)),
          s = Number(r.vz ?? -Math.cos(Number(r.heading)) * Number(r.v || 0)),
          c = Math.min(0.15, Math.max(0, i));
        ((n.x += (Number(r.x) + o * c - n.x) * a),
          (n.z += (Number(r.z) + s * c - n.z) * a),
          (n.y += (Number(r.y) - n.y) * a));
        let l = (Number(r.heading) - n.heading) % (Math.PI * 2);
        (l > Math.PI && (l -= Math.PI * 2),
          l < -Math.PI && (l += Math.PI * 2),
          (n.heading += l * a),
          t.pool.kind === `ped` &&
            ((n.phase = Number(r.phase) + Number(r.phaseRate || 0) * c),
            (n.updAcc = 0)),
          t.pool.sync(n));
      }
    }
    hit(e, t, n) {
      if (this.applying || !t.ambientRemote) return !1;
      let r = this.replicas.get(t.ambientId);
      if (
        !r ||
        (n.source !== `player` &&
          n.source !== `vehicle` &&
          n.source !== `explosion`) ||
        (n.source === `vehicle` && n.weapon === `traffic`)
      )
        return !0;
      let i = `d:${t.ambientId}`;
      if ((this.cooldowns.get(i) || 0) > this.elapsed) return !0;
      this.cooldowns.set(i, this.elapsed + 0.08);
      let a = ++this.hitSeq;
      return (
        this.outstandingHits.set(a, {
          peer: r.peer,
          id: t.ambientId,
          owner: r.owner,
          until: this.elapsed + 3,
        }),
        this.reliable(
          {
            t: `ambient-hit`,
            id: t.ambientId,
            q: a,
            a: Math.min(130, Math.max(0, n.amount)),
            w: n.weapon || ``,
            src: n.source,
            dx: n.dir?.x || 0,
            dz: n.dir?.z || 0,
          },
          r.owner,
        ),
        !0
      );
    }
    impact(e, t, n, r, i) {
      if (this.applying || !t.ambientRemote) return !1;
      let a = this.replicas.get(t.ambientId);
      if (
        !a ||
        (i !== this.ctx.player.body &&
          i !== this.ctx.vehicles.playerVehicle?.body)
      )
        return !0;
      let o = `i:${t.ambientId}`;
      return (
        (this.cooldowns.get(o) || 0) > this.elapsed ||
        (this.cooldowns.set(o, this.elapsed + 0.15),
        this.reliable(
          {
            t: `ambient-impact`,
            id: t.ambientId,
            q: ++this.hitSeq,
            ix: Math.max(-24e3, Math.min(24e3, n)),
            iz: Math.max(-24e3, Math.min(24e3, r)),
          },
          a.owner,
        ),
        !0)
      );
    }
    find(e) {
      for (let t of this.pools)
        for (let n of t.entities()) {
          let r = I(n);
          if (r.active && r.ambientId === e) return { pool: t, e: r };
        }
      return null;
    }
    claim(e, t, n, r) {
      let i = null,
        a = n;
      for (let n of this.replicas.values()) {
        let o = n.e;
        if (
          n.pool.kind !== `car` ||
          !o.active ||
          o.wrecked ||
          !Ue(o, this.ctx.player.position.y) ||
          Number(o.v) > (r?.maxSpeed ?? 1 / 0)
        )
          continue;
        let s = e - o.x,
          c = t - o.z,
          l = Math.sin(o.heading),
          u = -Math.cos(o.heading),
          d = Math.hypot(
            Math.max(0, Math.abs(s * -u + c * l) - Number(o.halfW)),
            Math.max(0, Math.abs(s * l + c * u) - Number(o.halfL)),
          );
        d < a && ((a = d), (i = n));
      }
      if (!i) return null;
      if (this.pending.size || r?.signal?.aborted) return Promise.resolve(null);
      let o = i,
        s = ++this.hitSeq;
      return new Promise((e) => {
        (this.pending.set(s, {
          peer: o.peer,
          to: o.owner,
          id: o.e.ambientId,
          until: this.elapsed + 1.4,
          resolve: e,
          signal: r?.signal,
        }),
          this.reliable(
            { t: `ambient-claim`, id: o.e.ambientId, q: s },
            o.owner,
          ));
      });
    }
    retire(e) {
      if (!e.ambientId) return;
      let t = ++this.sequence,
        n = D(e.x, e.z),
        r = new Set();
      for (let t of this.subscriptions.values())
        (t.cell === n || t.known.has(e.ambientId)) &&
          (r.add(t.slot), t.known.delete(e.ambientId));
      for (let i of r)
        this.reliable({ t: `ambient-retire`, id: e.ambientId, c: n, q: t }, i);
    }
    releaseClaim(e) {
      e.ambientClaim &&
        this.reliable(
          {
            t: `ambient-claim-cancel`,
            id: e.ambientClaim.id,
            q: e.ambientClaim.q,
          },
          e.ambientClaim.owner,
        );
    }
    claimed(e, t) {
      return {
        kind: he[Number(e.kind)],
        color: Number(e.color),
        x: e.x,
        z: e.z,
        y: e.y,
        heading: e.heading,
        speed:
          Number(e.mode) === 2
            ? Math.hypot(Number(e.svx), Number(e.svz))
            : Number(e.v),
        abandoned: !!e.abandoned,
        health: Number(e.health),
        seed: 0.001 + Number(e.seed) * 0.998,
        police: Number(e.kind) === 7 && !e.abandoned,
        ambientClaim: { id: e.ambientId, owner: this.session.slot, q: t },
      };
    }
    onEvent(e, t) {
      if (typeof t.t != `string` || !t.t.startsWith(`ambient-`)) return !1;
      if (!this.init() || !this.session.supportsNearby(e)) return !0;
      let n = this.participants.find((t) => t.slot === e);
      if (!n || t.u !== n.peer) return !0;
      let r = typeof t.c == `string` ? t.c : ``,
        i = this.cells.get(r);
      if (t.t === `ambient-retire`) {
        if (!F(t.id) || !Number.isInteger(t.q) || P(t.q) < 0) return !0;
        let r = this.replicas.get(t.id),
          a = this.retired.get(t.id);
        return (r
          ? r.owner !== e || r.peer !== n.peer || r.seq > P(t.q)
          : !i || i.owner !== e || i.peer !== n.peer) ||
          (a && a.peer === n.peer && a.q >= P(t.q))
          ? !0
          : (this.retired.set(t.id, {
              peer: n.peer || ``,
              q: P(t.q),
              until: this.elapsed + 30,
            }),
            this.retired.size > 256 &&
              this.retired.delete(this.retired.keys().next().value),
            r && (r.pool.remove(r.e), this.replicas.delete(t.id)),
            !0);
      }
      if (t.t === `ambient-transfer`) {
        if (
          !F(t.id) ||
          !ze(r) ||
          M(r, this.participants) !== this.session.slot ||
          (t.k !== `ped` && t.k !== `car`)
        )
          return !0;
        let i = this.pools.find((e) => e.kind === t.k),
          a = j(t.d, i.kind === `ped` ? Ie : E);
        if (
          !a ||
          D(Number(a.x), Number(a.z)) !== r ||
          L({ x: Number(a.x), z: Number(a.z) }, n) > N ** 2
        )
          return !0;
        if (!this.transferSeen.has(`${t.id}:${r}`)) {
          let e = this.find(t.id),
            n = this.replicas.get(t.id),
            o = e?.e ?? i.spawn(a);
          if (!o) return !0;
          (Object.assign(o, a),
            (o.ambientId = t.id),
            (o.ambientCell = r),
            i.promote(o),
            i.sync(o),
            n && this.replicas.delete(t.id),
            this.transferSeen.set(`${t.id}:${r}`, this.elapsed + 8),
            (this.selectionAt = 0),
            (this.snapshotsAt = 0));
        }
        return (
          this.reliable({ t: `ambient-transfer-ok`, id: t.id, c: r }, e),
          !0
        );
      }
      if (t.t === `ambient-transfer-ok`) {
        if (!F(t.id)) return !0;
        let i = this.transfers.get(t.id);
        return (
          i &&
            i.to === e &&
            i.peer === n.peer &&
            i.cell === r &&
            (i.pool.remove(i.e),
            this.transfers.delete(t.id),
            (this.outgoing = this.outgoing.filter(
              (n) =>
                n.m.t !== `ambient-transfer` || n.m.id !== t.id || n.to !== e,
            )),
            (this.selectionAt = 0),
            (this.snapshotsAt = 0)),
          !0
        );
      }
      if (t.t === `ambient-sub`) {
        let i = ze(r);
        if (
          !i ||
          Math.abs(i[0] * 128 + 64 - n.x) > 320 ||
          Math.abs(i[1] * 128 + 64 - n.z) > 320 ||
          M(r, this.participants) !== this.session.slot
        )
          return !0;
        let a = `${e}:${r}`,
          o = this.subscriptions.get(a);
        return (
          o
            ? (o.until = this.elapsed + 6)
            : ((o = {
                peer: n.peer || ``,
                slot: e,
                cell: r,
                until: this.elapsed + 6,
                known: new Map(),
              }),
              this.subscriptions.set(a, o)),
          t.reset === !0 && o.known.clear(),
          this.select(),
          this.sendSnapshot(o),
          !0
        );
      }
      if (t.t === `ambient-spawn`) {
        if (
          !i ||
          i.owner !== e ||
          !F(t.id) ||
          !Number.isInteger(t.q) ||
          P(t.q) < i.seq ||
          (t.k !== `ped` && t.k !== `car`)
        )
          return !0;
        let a = this.retired.get(t.id);
        if (a && a.peer === n.peer && P(t.q) <= a.q) return !0;
        let o = this.pools.find((e) => e.kind === t.k),
          s = j(t.d, o.kind === `ped` ? Ie : E);
        if (!s || D(Number(s.x), Number(s.z)) !== r) return !0;
        let c = `${r}:${t.q}`,
          l = this.staged.get(c);
        return (
          l || this.staged.set(c, (l = new Map())),
          l.size < 64 && l.set(t.id, { pool: o, data: s, owner: e }),
          this.staged.size > 48 &&
            this.staged.delete(this.staged.keys().next().value),
          !0
        );
      }
      if (t.t === `ambient-manifest`) {
        if (
          !i ||
          i.owner !== e ||
          !Number.isInteger(t.q) ||
          P(t.q) < i.seq ||
          !Array.isArray(t.ids) ||
          t.ids.length > 64 ||
          !t.ids.every(F)
        )
          return !0;
        let a = `${r}:${t.q}`,
          o = this.staged.get(a),
          s = new Set(
            t.ids.filter((e) => {
              let r = this.retired.get(e);
              return !r || r.peer !== n.peer || P(t.q) > r.q;
            }),
          );
        if ([...s].some((e) => !this.replicas.has(e) && !o?.has(e)))
          return ((i.requested = 0), !0);
        for (let t of this.pools)
          for (let i of t.entities()) {
            let a = I(i);
            if (this.eligible(t, a) && D(a.x, a.z) === r) {
              if (
                a.ambientId &&
                a.ambientCell &&
                a.ambientCell !== r &&
                !this.transfers.has(a.ambientId)
              ) {
                let i = {
                  peer: n.peer || ``,
                  pool: t,
                  e: a,
                  to: e,
                  cell: r,
                  until: this.elapsed + 2,
                  retry: this.elapsed + 0.6,
                };
                (this.transfers.set(a.ambientId, i),
                  this.sendTransfer(a.ambientId, i));
              }
              this.transfers.has(a.ambientId) || t.remove(a);
            }
          }
        for (let [t, n] of this.replicas)
          n.e.ambientCell === r &&
            n.owner === e &&
            !s.has(t) &&
            (n.pool.remove(n.e), this.replicas.delete(t));
        for (let i of s) {
          let a = o?.get(i);
          if (!a) continue;
          let s = this.replicas.get(i),
            c = s?.e;
          if (!c && this.replicas.size >= this.replicaLimit()) continue;
          let l = c ?? a.pool.spawn(a.data);
          if (!l) continue;
          let u = !s || P(t.q) >= s.seq;
          (u && Object.assign(l, a.data),
            (l.ambientId = i),
            (l.ambientRemote = !0),
            (l.ambientCell = r),
            a.pool.kind === `ped` && ((l.scripted = !0), (l.lite = !1)),
            s
              ? ((s.owner = e),
                (s.peer = n.peer || ``),
                u &&
                  ((s.seq = P(t.q)),
                  (s.target = null),
                  (s.time = this.elapsed)))
              : ((s = {
                  peer: n.peer || ``,
                  e: l,
                  pool: a.pool,
                  owner: e,
                  seq: P(t.q),
                  time: this.elapsed,
                  target: null,
                }),
                this.replicas.set(i, s)),
            a.pool.sync(l));
          let d = this.retired.get(i);
          d && d.peer === n.peer && P(t.q) > d.q && this.retired.delete(i);
        }
        return (
          (i.seq = P(t.q)),
          (i.ready = [...s].every((e) => this.replicas.has(e))),
          i.ready || (i.requested = 0),
          this.staged.delete(a),
          !0
        );
      }
      if (t.t === `ambient-state`) {
        if (!Number.isInteger(t.q) || !Array.isArray(t.r) || t.r.length > 8)
          return !0;
        for (let r of t.r) {
          if (!Array.isArray(r) || r.length !== 3 || !F(r[0])) continue;
          let i = this.replicas.get(r[0]);
          if (
            !i ||
            i.owner !== e ||
            i.peer !== n.peer ||
            P(t.q) <= i.seq ||
            (r[1] === 0) != (i.pool.kind === `ped`)
          )
            continue;
          let a = j(r[2], i.pool.kind === `ped` ? Le : Re);
          if (a && !(L({ x: Number(a.x), z: Number(a.z) }, i.e) > 6400)) {
            for (let [e, t] of Object.entries(a))
              e !== `x` &&
                e !== `y` &&
                e !== `z` &&
                e !== `heading` &&
                e !== `phase` &&
                (i.e[e] = t);
            ((i.target = a), (i.time = this.elapsed), (i.seq = P(t.q)));
          }
        }
        return !0;
      }
      if (
        t.t === `ambient-hit` ||
        t.t === `ambient-impact` ||
        t.t === `ambient-claim`
      ) {
        if (!F(t.id) || !Number.isInteger(t.q) || P(t.q) < 0) return !0;
        let r = this.seenHits.get(n.peer || ``);
        if (
          (r ||
            ((r = { seq: -1, time: this.elapsed, count: 0 }),
            this.seenHits.set(n.peer || ``, r)),
          P(t.q) <= r.seq ||
            (this.elapsed - r.time >= 1 &&
              ((r.count = 0), (r.time = this.elapsed)),
            ++r.count > 24))
        )
          return !0;
        r.seq = P(t.q);
        let i = this.find(t.id);
        if (
          !i ||
          i.e.ambientRemote ||
          M(D(i.e.x, i.e.z), this.participants) !== this.session.slot
        )
          return !0;
        let { pool: a, e: o } = i;
        if (t.t === `ambient-claim`) {
          if (
            a.kind !== `car` ||
            L(o, n) > 144 ||
            o.wrecked ||
            !Ue(o, n.y ?? 0) ||
            (Number(o.mode) === 2
              ? Math.hypot(Number(o.svx), Number(o.svz))
              : Math.abs(Number(o.v))) > 4 ||
            this.reservations.has(t.id)
          )
            return (
              this.reliable({ t: `ambient-claim-denied`, q: t.q }, e),
              !0
            );
          let r = this.claimed(o, P(t.q));
          return (
            (o.ambientRemote = !0),
            this.reservations.set(t.id, {
              peer: n.peer || ``,
              e: o,
              pool: a,
              to: e,
              until: this.elapsed + 3,
              q: P(t.q),
              data: j(Be(o, E), E),
            }),
            this.reliable(
              { t: `ambient-claim-grant`, q: t.q, id: t.id, car: r },
              e,
            ),
            !0
          );
        }
        let s =
          typeof t.w == `string` &&
          ![``, `fists`, `bat`, `knife`].includes(t.w);
        if (L(o, n) > (t.t === `ambient-impact` ? 14 : s ? 140 : 6) ** 2)
          return !0;
        let c = o.body;
        this.applying = !0;
        try {
          if (t.t === `ambient-impact`) {
            if (!Number.isFinite(P(t.ix)) || !Number.isFinite(P(t.iz)))
              return !0;
            c.onImpact?.(
              Math.max(-24e3, Math.min(24e3, P(t.ix))),
              Math.max(-24e3, Math.min(24e3, P(t.iz))),
              null,
            );
          } else {
            if (
              !Number.isFinite(P(t.a)) ||
              !Number.isFinite(P(t.dx)) ||
              !Number.isFinite(P(t.dz))
            )
              return !0;
            let n = new l(
                Math.max(-1, Math.min(1, P(t.dx))),
                0,
                Math.max(-1, Math.min(1, P(t.dz))),
              ),
              r = Number(o.health);
            (c.onDamage?.({
              amount: Math.min(s ? 130 : 65, Math.max(0, P(t.a))),
              source: `net-player`,
              weapon: typeof t.w == `string` ? t.w.slice(0, 24) : ``,
              dir: n,
            }),
              this.reliable(
                {
                  t: `ambient-hit-result`,
                  q: t.q,
                  id: t.id,
                  k: a.kind,
                  killed: r > 0 && Number(o.health) <= 0,
                  x: o.x,
                  y: o.y,
                  z: o.z,
                },
                e,
              ));
          }
        } finally {
          this.applying = !1;
        }
        for (let e of this.subscriptions.values())
          e.cell === D(o.x, o.z) &&
            (e.known.delete(o.ambientId), this.sendSnapshot(e));
        return !0;
      }
      if (t.t === `ambient-hit-result`) {
        let r = this.outstandingHits.get(P(t.q));
        return (
          !r ||
          r.owner !== e ||
          r.peer !== n.peer ||
          r.id !== t.id ||
          r.until < this.elapsed ||
          (this.outstandingHits.delete(P(t.q)),
          t.k === `ped` &&
            t.killed === !0 &&
            Number.isFinite(P(t.x)) &&
            Number.isFinite(P(t.z)) &&
            this.ctx.events.emit(`ped:hit`, {
              pos: new l(P(t.x), P(t.y) || 0, P(t.z)),
              killed: !0,
              byPlayer: !0,
              cash: !1,
            }),
          !0)
        );
      }
      if (t.t === `ambient-claim-grant`) {
        let r = P(t.q),
          i = this.pending.get(r);
        if (
          !i ||
          i.to !== e ||
          i.peer !== n.peer ||
          i.id !== t.id ||
          i.signal?.aborted
        )
          return (
            F(t.id) &&
              this.reliable({ t: `ambient-claim-cancel`, q: r, id: t.id }, e),
            !0
          );
        this.pending.delete(r);
        let a = t.car;
        if (
          !a ||
          !he.includes(a.kind) ||
          ![a.x, a.z, a.heading, a.color, a.speed, a.y, a.health, a.seed].every(
            Number.isFinite,
          ) ||
          Math.abs(a.speed) > 4 ||
          Number(a.health) < 0 ||
          Number(a.health) > 100 ||
          Number(a.seed) < 0 ||
          Number(a.seed) > 1 ||
          Math.abs(Number(a.y)) > 1e4 ||
          Math.abs(Number(a.y) - this.ctx.player.position.y) > 1.2 ||
          L(a, this.ctx.player.position) > 196
        )
          return (
            this.reliable({ t: `ambient-claim-cancel`, q: r, id: t.id }, e),
            i.resolve(null),
            !0
          );
        let o = this.replicas.get(i.id);
        return (
          o && (o.pool.remove(o.e), this.replicas.delete(i.id)),
          this.reliable({ t: `ambient-claim-accept`, q: r, id: t.id }, e),
          i.resolve(a),
          !0
        );
      }
      if (t.t === `ambient-claim-accept` || t.t === `ambient-claim-cancel`) {
        if (!F(t.id)) return !0;
        let r = this.reservations.get(t.id);
        if (!r) {
          let r = this.accepted.get(t.id);
          if (
            t.t === `ambient-claim-cancel` &&
            r &&
            r.to === e &&
            r.peer === n.peer &&
            r.q === t.q
          ) {
            let e = r.pool.spawn(r.data);
            e &&
              (Object.assign(e, r.data),
              (e.ambientId = t.id),
              r.pool.promote(e),
              r.pool.sync(e));
            for (let e of this.subscriptions.values()) e.known.delete(t.id);
            (this.accepted.delete(t.id),
              (this.selectionAt = 0),
              (this.snapshotsAt = 0));
          }
          return !0;
        }
        return (
          r.to !== e ||
            r.peer !== n.peer ||
            r.q !== t.q ||
            (t.t === `ambient-claim-accept`
              ? (this.retire(r.e),
                this.accepted.set(t.id, {
                  peer: r.peer,
                  pool: r.pool,
                  to: e,
                  until: this.elapsed + 6,
                  q: r.q,
                  data: r.data,
                }),
                r.pool.remove(r.e),
                this.reservations.delete(t.id),
                (this.selectionAt = 0),
                (this.snapshotsAt = 0))
              : ((r.e.ambientRemote = !1), this.reservations.delete(t.id))),
          !0
        );
      }
      if (t.t === `ambient-claim-denied`) {
        let r = P(t.q),
          i = this.pending.get(r);
        return (
          i?.to === e &&
            i.peer === n.peer &&
            (this.pending.delete(r), i.resolve(null)),
          !0
        );
      }
      return !0;
    }
    staged = new Map();
    replicaLimit() {
      return this.ctx.quality.level === `low` ? 64 : 96;
    }
    get sharing() {
      return this.participants.length > 1 && this.cells.size > 0;
    }
    stats() {
      return {
        replicas: this.replicas.size,
        cells: this.cells.size,
        subscriptions: this.subscriptions.size,
        queued: this.outgoing.length,
        sent: this.sent,
        dropped: this.dropped,
        pendingClaims: this.pending.size,
      };
    }
    snapshot() {
      return {
        cells: [...this.cells].map(([e, t]) => ({ id: e, ...t })),
        entities: this.pools.flatMap((e) =>
          e
            .entities()
            .map(I)
            .filter((e) => e.active && !!e.ambientId)
            .map((t) => ({
              id: t.ambientId,
              kind: e.kind,
              cell: D(t.x, t.z),
              owner: this.replicas.get(t.ambientId)?.owner ?? this.session.slot,
              replica: t.ambientRemote,
              x: t.x,
              y: t.y,
              z: t.z,
              health: Number(t.health),
              state: t.state ?? t.mode,
            })),
        ),
        stats: this.stats(),
      };
    }
    reset() {
      for (let e of this.pending.values()) e.resolve(null);
      this.pending.clear();
      for (let e of this.replicas.values()) e.pool.remove(e.e);
      this.replicas.clear();
      for (let e of this.reservations.values()) e.e.ambientRemote = !1;
      (this.reservations.clear(),
        this.cells.clear(),
        this.subscriptions.clear(),
        this.accepted.clear(),
        this.transfers.clear(),
        this.transferSeen.clear(),
        this.retired.clear(),
        this.staged.clear(),
        this.seenHits.clear(),
        this.cooldowns.clear(),
        (this.outgoing.length = 0),
        (this.topologyAt =
          this.snapshotsAt =
          this.motionAt =
          this.selectionAt =
            0),
        (this.elapsed = 0),
        (this.participants = []),
        this.outstandingHits.clear(),
        this.selected.clear(),
        this.selectedIds.clear(),
        this.selectedCount.clear(),
        this.sharedCells.clear(),
        (this.reliableTokens = 4096));
      for (let e of this.pools) {
        e.hooks(null);
        for (let t of e.entities().map(I))
          ((t.ambientId = ``), (t.ambientCell = ``));
      }
      (this.pools.length &&
        ((this.ctx.traffic.claimSharedNearest = this.ownClaimShared),
        (this.ctx.traffic.releaseSharedClaim = this.ownRelease)),
        (this.pools = []));
    }
    dispose() {
      this.reset();
    }
  },
  R = (e, t) => Math.round(e * t),
  z = (e, t, n) => Math.max(t, Math.min(n, e));
