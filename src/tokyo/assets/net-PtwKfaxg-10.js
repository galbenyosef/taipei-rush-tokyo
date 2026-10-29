// tokyo/assets/net-PtwKfaxg 10 — peer
// Lines 4297-5780 of readable/tokyo/assets/net-PtwKfaxg.pretty.js (statement-aligned).
var Pn = class e {
    hooks;
    role = `off`;
    status = `idle`;
    peer = An();
    uid = ``;
    slot = 0;
    order = 0;
    epoch = 1;
    code = ``;
    isPublic = !1;
    pvp = !1;
    hostPeer = ``;
    members = new Map();
    relayOnly = !1;
    stats = {
      relayTx: 0,
      relayFwd: 0,
      sigFwd: 0,
      dials: 0,
      meshFailed: 0,
      realtimeMs: 0,
      shardsLooked: 0,
    };
    links = new Map();
    linkStart = new Map();
    linkFailed = new Map();
    channel = null;
    channelAt = 0;
    channelRequest = 0;
    joinAttempt = 0;
    opening = new Set();
    ice = Bt;
    iceUntil = 0;
    nextOrder = 1;
    lobby = null;
    roomMeta = ``;
    lobbyCode = ``;
    helloTimer = null;
    tickTimer = null;
    electTimer = null;
    doorTimer = null;
    joinTimer = null;
    hostCheck = null;
    banned = new Set();
    welcomed = !1;
    ending = !1;
    kicked = !1;
    joinResolve = null;
    relayBuf = new Uint8Array(38);
    fwdBuf = new Uint8Array(36);
    vehicleRelay = new Map();
    vehicleRelayBytes = 0;
    migrationMs = 0;
    trace = [];
    migrateStart = 0;
    mark(e) {
      this.migrateStart &&
        this.trace.length < 40 &&
        this.trace.push([e, Math.round(performance.now() - this.migrateStart)]);
    }
    constructor(e) {
      this.hooks = e;
    }
    get connectedPeers() {
      let e = 0;
      for (let t of this.members.values()) t.peer !== this.peer && e++;
      return e;
    }
    get hostSlot() {
      return this.members.get(this.hostPeer)?.slot ?? -1;
    }
    linkOf(e) {
      let t = this.links.get(e);
      return t && t.status === `open` && t.hello ? t : null;
    }
    hostLink() {
      return this.role === `client` && this.hostPeer
        ? this.linkOf(this.hostPeer)
        : null;
    }
    memberBySlot(e) {
      for (let t of this.members.values()) if (t.slot === e) return t;
    }
    roster() {
      let e = this.hostLink();
      return [...this.members.values()]
        .sort((e, t) => e.slot - t.slot)
        .map((t) => {
          let n = t.peer === this.peer,
            r = n ? null : this.linkOf(t.peer),
            i = n
              ? `self`
              : r
                ? `direct`
                : e && t.peer !== this.hostPeer
                  ? `relay`
                  : `connecting`,
            a = r
              ? Math.round(r.rtt)
              : i === `relay` && e
                ? Math.round(e.rtt * 2)
                : 0;
          return {
            ...t,
            self: n,
            host: t.peer === this.hostPeer,
            via: i,
            rtt: a,
          };
        });
    }
    wire() {
      return [...this.members.values()].map(
        ({
          slot: e,
          peer: t,
          uid: n,
          order: r,
          char: i,
          name: a,
          wanted: o,
          nearby: s,
          vehicleGeneration: c,
        }) => ({
          slot: e,
          peer: t,
          uid: n,
          order: r,
          char: i,
          name: a,
          wanted: o,
          nearby: s,
          vehicleGeneration: c,
        }),
      );
    }
    setStatus(e) {
      this.status !== e && ((this.status = e), this.hooks.onStatus(e));
    }
    me() {
      let e = this.members.get(this.peer);
      return (
        e ||
          ((e = {
            slot: this.slot,
            peer: this.peer,
            uid: this.uid,
            order: this.order,
            char: this.hooks.char(),
            name: this.hooks.name(),
            wanted: 0,
            nearby: 1,
            vehicleGeneration: 1,
          }),
          this.members.set(this.peer, e)),
        (e.slot = this.slot),
        (e.order = this.order),
        (e.uid = this.uid),
        (e.char = this.hooks.char()),
        (e.name = H(this.hooks.name())),
        (e.nearby = 1),
        (e.vehicleGeneration = 1),
        e
      );
    }
    async prepareIce() {
      if (performance.now() < this.iceUntil) return;
      let e = this.gen,
        t = await $t();
      e === this.gen &&
        ((this.ice = t ? [...Bt, ...t.servers] : Bt),
        (this.iceUntil = performance.now() + (t ? t.ttlS * 900 : 6e4)));
    }
    newLink(e) {
      let t = this.links.get(e);
      t && this.drop(t);
      let n = new Vt(this.ice, this.relayOnly);
      ((n.peer = e),
        this.links.set(e, n),
        this.linkStart.set(e, performance.now()));
      let r = this.gen,
        i = () =>
          r === this.gen && !this.ending && this.links.get(n.peer) === n;
      return (
        (n.onOpen = () => {
          i() && (this.mark(`open`), n.sendEvent(this.hiMsg()));
        }),
        (n.onPose = (e) => {
          i() && this.rxPose(n, e);
        }),
        (n.onEvent = (e) => {
          i() && this.rxEvent(n, e);
        }),
        (n.onClose = () => {
          i() && this.linkClosed(n);
        }),
        n
      );
    }
    drop(e) {
      ((e.onOpen = e.onClose = e.onPose = e.onEvent = e.onSignal = void 0),
        this.links.get(e.peer) === e &&
          (this.links.delete(e.peer), this.linkStart.delete(e.peer)),
        e.close());
    }
    hiMsg() {
      let e = this.role === `host` || this.welcomed || this.order > 0;
      return {
        t: `hi`,
        nearby: 1,
        vehicleGeneration: 1,
        peer: this.peer,
        uid: this.uid,
        char: this.hooks.char(),
        name: H(this.hooks.name()),
        order: (e && this.order) || void 0,
        slot: e ? this.slot : void 0,
      };
    }
    dial(e) {
      let t = this.newLink(e);
      (this.stats.dials++,
        (t.onSignal = (t) => this.meshSig(e, t)),
        t.start().catch((e) => {
          (console.warn(`[net] dial`, e), this.failLink(t));
        }));
    }
    meshSig(e, t) {
      this.hostLink()?.sendEvent({
        t: `sig`,
        to: e,
        kind: t.sdp ? `sdp` : `ice`,
        data: t,
      });
    }
    failLink(e) {
      if (this.links.get(e.peer) !== e) return;
      let t = e.peer;
      (this.drop(e),
        this.members.has(t) &&
          (this.linkFailed.set(t, performance.now()),
          this.stats.meshFailed++,
          this.hooks.onRoster(this.roster())));
    }
    meshUp() {
      if (this.role !== `client` || !this.welcomed || !this.hostLink()) return;
      let e = performance.now();
      for (let t of this.members.values()) {
        if (
          t.peer === this.peer ||
          t.peer === this.hostPeer ||
          t.order > this.order ||
          this.links.has(t.peer)
        )
          continue;
        let n = this.linkFailed.get(t.peer);
        (n !== void 0 && e - n < _n) || this.dial(t.peer);
      }
    }
    tick() {
      let e = performance.now();
      for (let [t, n] of [...this.links]) {
        if (n.status === `open` && n.hello) continue;
        let r = t.startsWith(jn) ? Cn : this.members.has(t) ? gn : hn;
        e - (this.linkStart.get(t) ?? e) > r && this.failLink(n);
      }
      (this.meshUp(), this.flushVehicleRelay());
    }
    linkClosed(e) {
      if (
        (this.links.get(e.peer) === e &&
          (this.links.delete(e.peer), this.linkStart.delete(e.peer)),
        this.ending || this.role === `off`)
      )
        return;
      let t = this.members.get(e.peer);
      if (t && t.peer !== this.peer) {
        if (this.role === `host`) {
          (this.members.delete(t.peer),
            this.hooks.notice(U.left(t.slot, t.char, t.name), `info`),
            this.broadcastRoster());
          return;
        }
        if (e.peer === this.hostPeer) return this.hostLost(e.peer, !1);
        (this.linkFailed.set(t.peer, performance.now()),
          this.hooks.onRoster(this.roster()));
      }
    }
    transientBudget = new on();
    transientRx = new Map();
    transientStats = { sent: 0, bytes: 0, dropped: 0, received: 0, relayed: 0 };
    supportsNearby(e) {
      return this.memberBySlot(e)?.nearby === 1;
    }
    supportsVehicleGeneration(e) {
      let t = this.memberBySlot(e);
      return !!t && (t.peer === this.peer || t.vehicleGeneration === 1);
    }
    rxPose(e, t) {
      if (!e.hello) return;
      let n = this.members.get(e.peer);
      if (!n) return;
      let r = new Uint8Array(t);
      if (r[0] === 3 || r[0] === 4) {
        if (r.length > 1202 || r.length < 4 || n.nearby !== 1) return;
        let t = this.transientRx.get(n.peer);
        if (
          (t || this.transientRx.set(n.peer, (t = new on(64e3, 16e3))),
          !t.take(r.length, performance.now()))
        )
          return;
        if (r[0] === 4) {
          if (this.role !== `host`) return;
          let e = this.memberBySlot(r[1]);
          if (!e || e.peer === n.peer || e.nearby !== 1 || !an(r)) return;
          if (e.peer === this.peer) {
            let e = an(r);
            e && this.hooks.onTransient?.(n.slot, e);
            return;
          }
          let t = this.linkOf(e.peer);
          if (!t || !this.transientBudget.take(r.length, performance.now()))
            return;
          ((r[0] = 3),
            (r[1] = n.slot),
            t.sendPose(r) &&
              (this.transientStats.relayed++,
              (this.transientStats.bytes += r.length)));
          return;
        }
        let i = e.peer === this.hostPeer ? r[1] : n.slot;
        if (i === this.slot || !this.supportsNearby(i)) return;
        let a = an(r);
        a && (this.transientStats.received++, this.hooks.onTransient?.(i, a));
        return;
      }
      if (r[0] === 2) {
        if (this.role !== `host` || r.length < 30 || r.length > 38) return;
        let e = this.memberBySlot(r[1]),
          t =
            e && e.peer !== n.peer && e.peer !== this.peer
              ? this.linkOf(e.peer)
              : null;
        if (!t) return;
        let i = this.fwdBuf.subarray(0, r.length - 2);
        (i.set(r.subarray(2)),
          Fe(i, n.slot),
          t.sendPose(i),
          this.stats.relayFwd++);
        return;
      }
      let i = n.slot;
      (e.peer === this.hostPeer &&
        r.length > 1 &&
        r[1] !== n.slot &&
        this.memberBySlot(r[1]) &&
        (i = r[1]),
        i !== this.slot && this.hooks.onPose(i, new DataView(t)));
    }
    rxEvent(e, t) {
      if (t.t === `hi`) return this.rxHi(e, t);
      if (!e.hello) return;
      let n = this.members.get(e.peer);
      switch (t.t) {
        case `welcome`:
          return this.rxWelcome(e, t);
        case `roster`:
          return this.rxRoster(e, t);
        case `ev`:
          return this.rxEv(e, n, t);
        case `sig`:
          this.rxSig(e, n, t);
          return;
        case `char`:
          this.role === `host` &&
            n &&
            ((n.char = m(t.char, n.char)),
            typeof t.name == `string` && (n.name = H(t.name)),
            this.broadcastRoster());
          return;
        case `hgone`:
          return this.answerHostCheck(e, K(t.host));
        case `hstat`:
          return this.rxHostStat(e, t);
        case `bye`:
          return this.rxBye(e, n);
        case `kick`:
          if (this.role !== `client` || e.peer !== this.hostPeer) return;
          ((this.kicked = !0),
            this.hooks.notice(
              t.full ? U.full : t.ban ? U.banned : U.kicked,
              `bad`,
            ),
            this.end());
          return;
      }
    }
    rxHi(e, t) {
      let n = K(t.peer);
      if (!n || n === this.peer) return e.close();
      if (e.peer !== n) {
        if (!e.peer.startsWith(jn)) return this.drop(e);
        this.links.delete(e.peer);
        let t = this.linkStart.get(e.peer);
        this.linkStart.delete(e.peer);
        let r = this.links.get(n);
        (r && r !== e && this.drop(r),
          (e.peer = n),
          this.links.set(n, e),
          t !== void 0 && this.linkStart.set(n, t));
      }
      ((e.hello = !0), this.linkFailed.delete(n));
      let r = m(t.char),
        i = H(t.name);
      if (this.role === `host`)
        return this.admit(
          e,
          n,
          K(t.uid),
          r,
          i,
          q(t.order),
          q(t.slot),
          +(t.nearby === 1),
          +(t.vehicleGeneration === 1),
        );
      let a = this.members.get(n);
      (a &&
        ((a.char = r),
        (a.name = i),
        (a.nearby = +(t.nearby === 1)),
        (a.vehicleGeneration = +(t.vehicleGeneration === 1))),
        this.hooks.onRoster(this.roster()));
    }
    startHost(e = ``, t = !1) {
      ((this.role = `host`),
        (this.pvp = !0),
        (this.slot = 0),
        (this.order = 1),
        (this.nextOrder = 2),
        (this.code = e),
        (this.isPublic = !1),
        (this.epoch = 1),
        (this.uid = Qt()),
        (this.hostPeer = this.peer),
        (this.ending = !1),
        (this.kicked = !1),
        this.me(),
        this.startTick(),
        this.hooks.onHost(!0),
        this.setStatus(`connected`),
        this.hooks.onRoster(this.roster()),
        this.announce());
    }
    async pasteOffer() {
      this.role === `off` && this.startHost();
      let e = this.newLink(jn + An());
      return { offer: await e.offerBlob(), accept: (t) => e.acceptBlob(t) };
    }
    freeSlot(e) {
      let t = new Set([...this.members.values()].map((e) => e.slot));
      if (e >= 0 && e < 8 && !t.has(e)) return e;
      for (let e = 0; e < 8; e++) if (!t.has(e)) return e;
      return -1;
    }
    admit(e, t, n, r, i, a, o, s = 0, c = 0) {
      if (n && this.banned.has(n)) {
        (e.sendEvent({ t: `kick`, ban: !0 }),
          setTimeout(() => this.drop(e), 300));
        return;
      }
      let l = this.members.get(t);
      l && this.members.delete(t);
      let u = this.freeSlot(l ? l.slot : o);
      if (u < 0) {
        (e.sendEvent({ t: `kick`, full: !0 }),
          setTimeout(() => this.drop(e), 300));
        return;
      }
      let d = (e) => [...this.members.values()].some((t) => t.order === e),
        f = l ? l.order : a;
      ((!(f > 0) || d(f)) && (f = this.nextOrder),
        (this.nextOrder = Math.max(this.nextOrder, f + 1)));
      let p = {
        slot: u,
        peer: t,
        uid: n,
        order: f,
        char: r,
        name: i,
        wanted: l?.wanted ?? 0,
        nearby: s,
        vehicleGeneration: c,
      };
      (this.members.set(t, p),
        e.sendEvent({
          t: `welcome`,
          slot: u,
          order: f,
          epoch: this.epoch,
          code: this.code,
          pub: this.isPublic,
          pvp: this.pvp,
          host: this.peer,
          roster: this.wire(),
          banned: [...this.banned],
        }),
        l || this.hooks.notice(U.joined(u, r, i), `good`),
        this.broadcastRoster(),
        this.hooks.onJoined(u));
    }
    broadcastRoster() {
      if (this.role !== `host`) return;
      (this.pruneVehicleRelay(), this.me(), this.hooks.onRoster(this.roster()));
      let e = JSON.stringify({
        t: `roster`,
        roster: this.wire(),
        epoch: this.epoch,
        host: this.peer,
        pub: this.isPublic,
        pvp: this.pvp,
        banned: [...this.banned],
      });
      for (let t of this.members.values())
        t.peer !== this.peer && this.linkOf(t.peer)?.sendText(e);
      this.announce();
    }
    charChanged() {
      this.role === `host`
        ? this.broadcastRoster()
        : this.role === `client` &&
          this.hostLink()?.sendEvent({
            t: `char`,
            char: this.hooks.char(),
            name: H(this.hooks.name()),
          });
    }
    setPvp(e) {
      this.role === `host` && ((this.pvp = e), this.broadcastRoster());
    }
    kick(e, t = !1) {
      if (this.role !== `host`) return;
      let n = this.memberBySlot(e);
      if (!n || n.peer === this.peer) return;
      let r = this.linkOf(n.peer);
      (r?.sendEvent({ t: `kick`, ban: t }),
        this.members.delete(n.peer),
        r && setTimeout(() => this.drop(r), 300),
        t && n.uid && this.banned.size < 64 && this.banned.add(n.uid),
        this.broadcastRoster());
    }
    sendPose(e, t) {
      let n = this.linkOf(e);
      if (n) return (n.sendPose(t), !0);
      let r = this.hostLink(),
        i = this.members.get(e);
      if (!r || !i || e === this.hostPeer) return !1;
      let a = this.relayBuf;
      return (
        (a[0] = 2),
        (a[1] = i.slot),
        a.set(t.subarray(0, 36), 2),
        r.sendPose(a),
        this.stats.relayTx++,
        !0
      );
    }
    sendTransient(e, t) {
      let n = this.memberBySlot(t);
      if (this.role === `off` || !n || n.peer === this.peer || n.nearby !== 1)
        return !1;
      let r = this.linkOf(n.peer),
        i =
          r ??
          (this.supportsNearby(this.memberByPeerHostSlot())
            ? this.hostLink()
            : null);
      if (!i) return !1;
      let a = rn(e, r ? this.slot : t, !r);
      return !a ||
        !this.transientBudget.take(a.length, performance.now()) ||
        !i.sendPose(a)
        ? (this.transientStats.dropped++, !1)
        : (this.transientStats.sent++,
          (this.transientStats.bytes += a.length),
          !0);
    }
    memberByPeerHostSlot() {
      return this.members.get(this.hostPeer)?.slot ?? -1;
    }
    sendEvent(e, t) {
      if (this.role === `off`) return;
      this.role === `host` && this.invalidateVehicleRelay(e, this.peer, t);
      let n = this.hostLink(),
        r = ``;
      for (let i of this.members.values()) {
        if (i.peer === this.peer || (t !== void 0 && i.slot !== t)) continue;
        let a = this.linkOf(i.peer);
        a
          ? a.sendText((r ||= JSON.stringify({ t: `ev`, m: e })))
          : n &&
            i.peer !== this.hostPeer &&
            (n.sendEvent({ t: `ev`, to: i.slot, m: e }), this.stats.relayTx++);
      }
    }
    rxEv(e, t, n) {
      if (!t || !n.m || typeof n.m != `object`) return;
      let r = n.m;
      if (
        (this.role === `host` && this.invalidateVehicleRelay(r, t.peer),
        this.role === `host` && typeof n.to == `number`)
      ) {
        if (n.to === this.slot) return this.hooks.onEvent(t.slot, r);
        let e = this.memberBySlot(n.to);
        if (r.t === `veh-state`) {
          e && e.peer !== t.peer && this.relayVehicleState(t, e, r);
          return;
        }
        (e &&
          e.peer !== t.peer &&
          this.linkOf(e.peer)?.sendEvent({ t: `ev`, from: t.slot, m: r }),
          this.stats.relayFwd++);
        return;
      }
      let i = t.slot;
      (e.peer === this.hostPeer &&
        typeof n.from == `number` &&
        this.memberBySlot(n.from) &&
        (i = n.from),
        this.hooks.onEvent(i, r));
    }
    deleteVehicleRelay(e) {
      let t = this.vehicleRelay.get(e);
      t && ((this.vehicleRelayBytes -= t.bytes), this.vehicleRelay.delete(e));
    }
    pruneVehicleRelay() {
      for (let [e, t] of this.vehicleRelay)
        (this.role !== `host` ||
          this.ending ||
          this.members.get(t.fromPeer)?.slot !== t.fromSlot ||
          this.members.get(t.toPeer)?.slot !== t.toSlot) &&
          this.deleteVehicleRelay(e);
    }
    invalidateVehicleRelay(e, t, n) {
      if (
        e.t !== `veh-owner` &&
        e.t !== `veh-free` &&
        e.t !== `veh-spawn` &&
        e.t !== `veh-park`
      )
        return;
      let r = e.generation === void 0 ? 0 : q(e.generation);
      if (!(r < 0 || r > 2147483647))
        for (let [i, a] of this.vehicleRelay)
          a.id === e.id &&
            r >= a.generation &&
            (n === void 0 || a.toSlot === n) &&
            (a.fromPeer === t ||
              (t === this.peer &&
                (e.t === `veh-free` || e.t === `veh-spawn`))) &&
            this.deleteVehicleRelay(i);
    }
    sendVehicleRelay(e) {
      let t = this.linkOf(e.toPeer);
      return !t ||
        t.events.readyState !== `open` ||
        t.events.bufferedAmount + e.bytes > On
        ? !1
        : (t.sendText(e.text), this.stats.relayFwd++, !0);
    }
    relayVehicleState(e, t, n) {
      let r = q(n.id),
        i = n.condition,
        a = i && typeof i == `object` ? q(i.revision) : -1,
        o = n.generation === void 0 ? 0 : q(n.generation);
      if (
        r < 1 ||
        r > 65535 ||
        a < 1 ||
        a > 2147483647 ||
        o < 0 ||
        o > 2147483647
      )
        return;
      let s = JSON.stringify([e.peer, t.peer, r]),
        c = this.vehicleRelay.get(s);
      if (c && (c.generation > o || (c.generation === o && c.revision >= a)))
        return;
      let l;
      try {
        l = JSON.stringify({ t: `ev`, from: e.slot, m: n });
      } catch {
        return;
      }
      if (l.length > Dn) return;
      let u = kn.encode(l).byteLength;
      if (u > Dn) return;
      let d = {
        fromPeer: e.peer,
        toPeer: t.peer,
        fromSlot: e.slot,
        toSlot: t.slot,
        id: r,
        generation: o,
        revision: a,
        text: l,
        bytes: u,
      };
      if ((this.deleteVehicleRelay(s), !this.sendVehicleRelay(d))) {
        for (
          ;
          this.vehicleRelay.size >= Tn || this.vehicleRelayBytes + u > En;
        ) {
          let e = this.vehicleRelay.keys().next().value;
          if (e === void 0) break;
          this.deleteVehicleRelay(e);
        }
        (this.vehicleRelay.set(s, d), (this.vehicleRelayBytes += u));
      }
    }
    flushVehicleRelay() {
      this.pruneVehicleRelay();
      for (let [e, t] of this.vehicleRelay)
        this.sendVehicleRelay(t) && this.deleteVehicleRelay(e);
    }
    async rxSig(e, t, n) {
      if (this.role === `host`) {
        let e = this.members.get(K(n.to));
        if (!t || !e || e.peer === this.peer || e.peer === t.peer) return;
        (this.linkOf(e.peer)?.sendEvent({
          t: `sig`,
          from: t.peer,
          kind: n.kind,
          data: n.data,
        }),
          this.stats.sigFwd++);
        return;
      }
      if (e.peer !== this.hostPeer) return;
      let r = K(n.from),
        i = Nn(n.data);
      if (!i || !this.members.has(r) || r === this.peer) return;
      let a = this.links.get(r);
      if (
        (i.sdp?.type === `offer` &&
          ((a = this.newLink(r)), (a.onSignal = (e) => this.meshSig(r, e))),
        a)
      )
        try {
          await a.signal(i);
        } catch (e) {
          console.warn(`[net] mesh signalling`, e);
        }
    }
    async pasteAnswer(e) {
      return (
        this.leave(!0),
        this.becomeJoiner(),
        this.newLink(jn + An()).answerBlob(e)
      );
    }
    becomeJoiner() {
      ((this.role = `client`),
        (this.ending = !1),
        (this.kicked = !1),
        (this.welcomed = !1),
        (this.hostPeer = ``),
        this.startTick(),
        this.setStatus(`connecting`));
    }
    rxWelcome(e, t) {
      this.role !== `client` ||
        this.welcomed ||
        ((this.welcomed = !0),
        (this.hostPeer = e.peer),
        (this.slot = Math.max(0, q(t.slot, 0))),
        (this.order = Math.max(1, q(t.order, 1))),
        (this.epoch = Math.max(1, q(t.epoch, this.epoch))),
        typeof t.code == `string` && t.code && (this.code = t.code.slice(0, 8)),
        this.takeShared(t),
        this.applyRoster(t.roster),
        this.stopHello(),
        this.clearJoinTimer(),
        this.mark(`welcome`),
        (this.migrateStart &&=
          ((this.migrationMs = Math.round(
            performance.now() - this.migrateStart,
          )),
          0)),
        this.hooks.onHost(!0),
        this.setStatus(`connected`),
        this.joinResolve?.(!0),
        (this.joinResolve = null),
        this.closeChannel(),
        this.meshUp());
    }
    rxRoster(e, t) {
      if (this.role !== `client`) return;
      let n =
        (this.status === `migrating` || !this.hostPeer) &&
        K(t.host) === e.peer &&
        q(t.epoch, 0) >= this.epoch &&
        this.members.has(e.peer);
      (e.peer === this.hostPeer || n) &&
        (n &&
          e.peer !== this.hostPeer &&
          (this.cancelHostCheck(), (this.hostPeer = e.peer)),
        (this.epoch = Math.max(this.epoch, q(t.epoch, this.epoch))),
        this.takeShared(t),
        this.applyRoster(t.roster),
        this.status === `migrating` && this.welcomed && this.migrated());
    }
    takeShared(e) {
      ((this.isPublic = !1),
        (this.pvp = e.pvp === !0),
        Array.isArray(e.banned) &&
          (this.banned = new Set(
            e.banned
              .slice(0, 64)
              .map((e) => K(e))
              .filter(Boolean),
          )));
    }
    applyRoster(e) {
      if (!Array.isArray(e)) return;
      let t = new Set();
      for (let n of e.slice(0, 8)) {
        let e = K(n?.peer);
        if (!e || t.has(e)) continue;
        t.add(e);
        let r = {
          slot: Math.max(0, q(n.slot, 0)) % 8,
          peer: e,
          uid: K(n.uid),
          order: Math.max(1, q(n.order, 1)),
          char: m(n.char),
          name: H(n.name),
          wanted: Math.max(0, Math.min(5, q(n.wanted, 0))),
          nearby: +(n.nearby === 1),
          vehicleGeneration: +(n.vehicleGeneration === 1),
        };
        (e === this.peer &&
          ((this.slot = r.slot),
          (this.order = r.order),
          (r.char = this.hooks.char()),
          (r.name = H(this.hooks.name()))),
          this.members.set(e, r));
      }
      if (!t.has(this.peer))
        return (this.hooks.notice(U.hostLost, `bad`), this.rejoin());
      for (let e of [...this.members.keys()])
        if (!t.has(e)) {
          (this.members.delete(e), this.linkFailed.delete(e));
          let t = this.links.get(e);
          t && this.drop(t);
        }
      (this.hooks.onRoster(this.roster()), this.meshUp());
    }
    async openRealtime(e) {
      let t = this.gen,
        n = new Jt(Xt(), e, this.peer);
      this.opening.add(n);
      try {
        if ((await n.connect(), t !== this.gen)) throw Mn();
      } catch (e) {
        throw (n.close(), e);
      } finally {
        this.opening.delete(n);
      }
      return n;
    }
    async openChannel(e) {
      this.closeChannel();
      let t = this.gen,
        n = this.channelRequest,
        r = await this.openRealtime(un(e));
      if (t !== this.gen || n !== this.channelRequest) throw (r.close(), Mn());
      return (
        (this.channel = r),
        (this.channelAt = performance.now()),
        (this.roomMeta = ``),
        (r.onBroadcast = (e, n) => {
          e === `sig` &&
            t === this.gen &&
            this.channel === r &&
            !this.ending &&
            this.rxRealtime(n);
        }),
        r
      );
    }
    closeChannel() {
      (this.channelRequest++,
        this.channel &&
          (this.channel.close(),
          (this.channel = null),
          (this.stats.realtimeMs += performance.now() - this.channelAt)));
    }
    city() {
      return this.hooks.city?.() || `taipei`;
    }
    static hosts(e) {
      let t = [];
      for (let n of Object.values(e))
        for (let e of n)
          e.role === `host` && typeof e.peer == `string` && t.push(e);
      return t.sort((e, t) => q(t.epoch, 0) - q(e.epoch, 0));
    }
    async hostRoom(t = !1) {
      this.leave(!0);
      let n = this.gen;
      ((this.ending = !1), (this.uid = Qt()));
      try {
        for (let r = 0; r < 4; r++) {
          let r = fn(),
            i = await this.openChannel(r),
            a = e.hosts(await i.presenceState(2e3));
          if (n !== this.gen || this.channel !== i) throw Mn();
          if (!a.length) return (this.startHost(r, t), r);
        }
        throw Error(`no free room code`);
      } catch (e) {
        throw n === this.gen ? (this.end(), e) : Mn();
      }
    }
    async joinRoom(e) {
      this.leave(!0);
      let t = this.gen;
      (this.becomeJoiner(), (this.code = e), (this.uid = Qt()));
      let n = new Promise((e) => (this.joinResolve = e));
      return (
        this.knock(!0).catch((e) => {
          t === this.gen &&
            (this.hooks.notice(U.joinFailed, `bad`),
            console.warn(`[net] join`, e),
            this.end());
        }),
        n
      );
    }
    async knock(t = !1) {
      let n = this.gen,
        r = ++this.joinAttempt,
        i = () => n === this.gen && r === this.joinAttempt && !this.ending;
      (this.clearJoinTimer(),
        (this.joinTimer = setTimeout(() => {
          i() &&
            ((this.welcomed && this.status === `connected`) ||
              (this.joinResolve?.(!1),
              (this.joinResolve = null),
              this.hooks.notice(U.joinFailed, `bad`),
              this.end()));
        }, hn)));
      let a = await this.openChannel(this.code);
      if (i()) {
        if ((this.mark(`knock`), t)) {
          let t = e.hosts(await a.presenceState(2500))[0];
          if (!i() || this.channel !== a) return;
          let n = performance.now();
          for (; !t && performance.now() - n < pn && this.channel === a && i();)
            (await new Promise((e) => setTimeout(e, 250)),
              (t = e.hosts(a.presence)[0]));
          if (!i() || this.channel !== a || this.role !== `client`) return;
          let r = t ? K(t.city, 32) || `taipei` : ``;
          if (t && r !== this.city())
            return (
              this.hooks.otherCity
                ? this.hooks.otherCity(r, this.code)
                : this.hooks.notice(U.notFound, `bad`),
              this.joinResolve?.(!1),
              (this.joinResolve = null),
              this.end()
            );
          if (!t || t.full === !0 || q(t.players, 0) >= q(t.max, 8))
            return (
              this.hooks.notice(t ? U.full : U.notFound, `bad`),
              this.joinResolve?.(!1),
              (this.joinResolve = null),
              this.end()
            );
        }
        i() && this.channel === a && this.startHello();
      }
    }
    clearJoinTimer() {
      (this.joinTimer && clearTimeout(this.joinTimer), (this.joinTimer = null));
    }
    startHello() {
      this.stopHello();
      let e = () =>
        this.rsig(`host`, `hello`, {
          uid: this.uid,
          char: this.hooks.char(),
          city: this.city(),
        });
      (e(),
        (this.helloTimer = setInterval(() => {
          this.welcomed || e();
        }, mn)));
    }
    stopHello() {
      (this.helloTimer && clearInterval(this.helloTimer),
        (this.helloTimer = null));
    }
    rsig(e, t, n = {}) {
      this.channel?.send(`sig`, {
        from: this.peer,
        to: e,
        kind: t,
        data: n,
        epoch: this.epoch,
      });
    }
    async rxRealtime(e) {
      let t = K(e.from),
        n = K(e.to),
        r = K(e.kind, 16);
      if (
        t &&
        t !== this.peer &&
        (n === this.peer || (n === `host` && this.role === `host`))
      )
        try {
          switch (r) {
            case `hello`: {
              if (this.role !== `host`) return;
              let n = e.data ?? {},
                r = K(n.uid);
              if (r && this.banned.has(r))
                return this.rsig(t, `reject`, { reason: `banned` });
              if ((K(n.city, 32) || `taipei`) !== this.city())
                return this.rsig(t, `reject`, {
                  reason: `city`,
                  city: this.city(),
                });
              if (!this.members.has(t) && this.members.size >= 8)
                return this.rsig(t, `reject`, { reason: `full` });
              let i = this.links.get(t),
                a = this.linkStart.get(t) ?? 0;
              if (
                i &&
                i.status !== `closed` &&
                !i.hello &&
                performance.now() - a < Sn
              )
                return;
              await this.offerTo(t);
              return;
            }
            case `sdp`:
            case `ice`: {
              let n = Nn(e.data);
              if (!n) return;
              if (this.role === `host`) {
                let e = this.links.get(t);
                e && !e.hello && (await e.signal(n));
                return;
              }
              if (this.role !== `client` || this.welcomed) return;
              let r = this.links.get(t);
              (n.sdp?.type === `offer` &&
                (this.mark(`offer`),
                (r = this.newLink(t)),
                (r.bundle = !0),
                (r.onSignal = (e) => this.rsig(t, e.sdp ? `sdp` : `ice`, e))),
                await r?.signal(n));
              return;
            }
            case `reject`: {
              if (this.role !== `client` || this.welcomed) return;
              let t = e.data ?? {};
              (t.reason === `city` && this.hooks.otherCity
                ? this.hooks.otherCity(K(t.city, 32) || `taipei`, this.code)
                : this.hooks.notice(
                    t.reason === `banned`
                      ? U.banned
                      : t.reason === `city`
                        ? U.notFound
                        : U.full,
                    `bad`,
                  ),
                this.joinResolve?.(!1),
                (this.joinResolve = null),
                this.end());
              return;
            }
          }
        } catch (e) {
          console.warn(`[net] signalling`, r, e);
        }
    }
    async offerTo(e) {
      let t = this.newLink(e);
      ((t.bundle = !0),
        (t.onSignal = (t) => this.rsig(e, t.sdp ? `sdp` : `ice`, t)),
        await t.start());
    }
    async openDoor() {
      if (
        (this.doorTimer && clearTimeout(this.doorTimer),
        (this.doorTimer = null),
        this.role !== `host` || !this.code || this.channel)
      )
        return;
      let e = this.gen,
        t = this.openChannel(this.code),
        n = this.channelRequest;
      try {
        (await t, e === this.gen && this.announce());
      } catch (t) {
        if (e !== this.gen || n !== this.channelRequest || this.role !== `host`)
          return;
        (console.warn(`[net] door`, t),
          this.closeChannel(),
          (this.doorTimer = setTimeout(() => {
            e === this.gen && this.openDoor();
          }, xn)));
      }
    }
    announce() {
      if (this.role !== `host` || !this.code) return;
      let e = {
          peer: this.peer,
          role: `host`,
          full: this.members.size >= 8,
          max: 8,
          epoch: this.epoch,
          city: this.city(),
        },
        t = JSON.stringify(e);
      (this.channel &&
        t !== this.roomMeta &&
        ((this.roomMeta = t), this.channel.track(e)),
        this.syncLobby());
    }
    lobbyBusy = !1;
    async syncLobby() {
      let e =
        this.role === `host` &&
        this.isPublic &&
        !!this.code &&
        this.members.size < 8;
      if (
        (this.lobby &&
          (!e || this.lobbyCode !== this.code) &&
          (this.lobby.close(), (this.lobby = null), (this.lobbyCode = ``)),
        !e || this.lobby || this.lobbyBusy)
      )
        return;
      this.lobbyBusy = !0;
      let t = this.code,
        n = this.gen;
      try {
        let e = await this.openRealtime(cn(ln(t), this.city()));
        if (n !== this.gen) {
          e.close();
          return;
        }
        this.lobby = e;
      } catch (e) {
        if (n !== this.gen) return;
        (console.warn(`[net] lobby`, e),
          (this.lobbyBusy = !1),
          setTimeout(() => {
            n === this.gen && this.syncLobby();
          }, xn));
        return;
      }
      if (
        ((this.lobbyBusy = !1),
        (this.lobbyCode = t),
        this.role !== `host` ||
          !this.isPublic ||
          this.code !== t ||
          this.members.size >= 8)
      ) {
        this.syncLobby();
        return;
      }
      (this.lobby.track({ code: t, players: this.members.size, max: 8 }),
        this.syncLobby());
    }
    setPublic(e) {
      this.role === `host` &&
        this.code &&
        ((this.isPublic = !1), this.broadcastRoster());
    }
    async findRoom() {
      return ``;
    }
    hostLost(e, t) {
      if (this.ending || this.kicked || this.role !== `client`) return;
      let n = this.members.get(e);
      if (
        (this.members.delete(e),
        (this.hostPeer = ``),
        (this.migrateStart = performance.now()),
        (this.trace = []),
        this.mark(t ? `host-bye` : `host-lost`),
        !this.welcomed)
      )
        return;
      if (
        (this.setStatus(`migrating`),
        n && this.hooks.notice(U.left(n.slot, n.char, n.name), `info`),
        this.hooks.onRoster(this.roster()),
        t)
      )
        return this.elect();
      let r = [...this.members.values()].filter(
        (e) => e.peer !== this.peer && this.linkOf(e.peer),
      );
      if (!r.length) return this.elect();
      (this.cancelHostCheck(),
        (this.hostCheck = {
          host: e,
          waiting: new Set(r.map((e) => e.peer)),
          alive: !1,
          timer: setTimeout(() => this.hostChecked(), vn),
        }));
      for (let t of r) this.linkOf(t.peer)?.sendEvent({ t: `hgone`, host: e });
    }
    answerHostCheck(e, t) {
      let n = performance.now(),
        r = () => {
          let i = this.linkOf(t),
            a = !!i && i.lastRx > n;
          a || !i || performance.now() - n >= yn
            ? e.sendEvent({ t: `hstat`, host: t, alive: a })
            : setTimeout(r, 100);
        };
      r();
    }
    rxHostStat(e, t) {
      let n = this.hostCheck;
      n &&
        K(t.host) === n.host &&
        (t.alive === !0 && (n.alive = !0),
        n.waiting.delete(e.peer),
        (n.alive || !n.waiting.size) && this.hostChecked());
    }
    cancelHostCheck() {
      (this.hostCheck && clearTimeout(this.hostCheck.timer),
        (this.hostCheck = null));
    }
    hostChecked() {
      let e = this.hostCheck;
      if (
        e &&
        (this.cancelHostCheck(),
        this.mark(e.alive ? `check:alive` : `check:gone`),
        this.status === `migrating`)
      ) {
        if (e.alive) return this.rejoin();
        this.elect();
      }
    }
    elect() {
      let e = [...this.members.values()].sort((e, t) => e.order - t.order),
        t = e[0];
      if (
        (this.mark(
          `elect ${e.map((e) => `${e.order}${e.peer === this.peer ? `*` : ``}`).join(`,`)}`,
        ),
        !t || t.peer === this.peer)
      )
        return this.becomeHost();
      if (((this.hostPeer = t.peer), !this.linkOf(t.peer)))
        return this.rejoin();
      (this.electTimer && clearTimeout(this.electTimer),
        (this.electTimer = setTimeout(() => {
          this.status === `migrating` && this.rejoin();
        }, bn)));
    }
    migrated() {
      (this.electTimer && clearTimeout(this.electTimer),
        (this.electTimer = null),
        this.mark(`migrated`),
        this.migrateStart &&
          (this.migrationMs = Math.round(
            performance.now() - this.migrateStart,
          )),
        (this.migrateStart = 0),
        this.hooks.onHost(!1),
        this.setStatus(`connected`),
        this.meshUp());
    }
    becomeHost() {
      for (let e of [...this.members.values()])
        if (e.peer !== this.peer && !this.linkOf(e.peer)) {
          this.members.delete(e.peer);
          let t = this.links.get(e.peer);
          t && this.drop(t);
        }
      ((this.role = `host`),
        (this.hostPeer = this.peer),
        this.epoch++,
        (this.nextOrder = Math.max(
          this.nextOrder,
          ...[...this.members.values()].map((e) => e.order + 1),
        )),
        this.linkFailed.clear(),
        this.broadcastRoster(),
        this.migrated(),
        this.hooks.notice(U.youHost, `good`),
        this.code && this.openDoor());
    }
    rejoin() {
      if (this.ending) return;
      if (!this.code) return (this.hooks.notice(U.hostLost, `bad`), this.end());
      (this.mark(`rejoin`),
        this.cancelHostCheck(),
        this.electTimer && clearTimeout(this.electTimer),
        (this.electTimer = null),
        this.syncLobby());
      for (let e of [...this.links.values()]) this.drop(e);
      let e = this.me();
      (this.members.clear(),
        this.transientRx.clear(),
        this.transientBudget.reset(),
        this.members.set(e.peer, e),
        (this.role = `client`),
        (this.hostPeer = ``),
        (this.welcomed = !1),
        (this.migrateStart ||= performance.now()),
        this.setStatus(`migrating`),
        this.hooks.onRoster(this.roster()));
      let t = this.gen,
        n = this.knock(),
        r = this.joinAttempt;
      n.catch((e) => {
        t === this.gen &&
          r === this.joinAttempt &&
          (console.warn(`[net] rejoin`, e),
          this.hooks.notice(U.hostLost, `bad`),
          this.end());
      });
    }
    rxBye(e, t) {
      if (this.role === `host`) {
        (t &&
          (this.members.delete(t.peer),
          this.hooks.notice(U.left(t.slot, t.char, t.name), `info`),
          this.broadcastRoster()),
          setTimeout(() => this.drop(e), 100));
        return;
      }
      let n = e.peer === this.hostPeer;
      (this.drop(e), n && this.hostLost(e.peer, !0));
    }
    startTick() {
      this.tickTimer ||= setInterval(() => this.tick(), wn);
    }
    gen = 0;
    leave(e = !1) {
      if (this.role === `off`) return this.end();
      (this.gen++,
        (this.ending = !0),
        this.vehicleRelay.clear(),
        (this.vehicleRelayBytes = 0));
      let t = JSON.stringify({ t: `bye` });
      for (let e of this.links.values()) e.hello && e.sendText(t);
      if (e) return this.end();
      this.hooks.notice(U.youLeft, `info`);
      let n = this.gen;
      setTimeout(() => n === this.gen && this.end(), 150);
    }
    end() {
      (this.gen++, this.joinAttempt++, (this.ending = !0));
      for (let e of this.opening) e.close();
      (this.opening.clear(),
        this.stopHello(),
        this.cancelHostCheck(),
        this.clearJoinTimer());
      for (let e of [this.electTimer, this.doorTimer]) e && clearTimeout(e);
      ((this.electTimer = this.doorTimer = null),
        this.tickTimer && clearInterval(this.tickTimer),
        (this.tickTimer = null));
      for (let e of [...this.links.values()]) this.drop(e);
      (this.links.clear(),
        this.linkStart.clear(),
        this.linkFailed.clear(),
        this.closeChannel(),
        this.lobby?.close(),
        (this.lobby = null),
        (this.lobbyCode = ``),
        (this.lobbyBusy = !1),
        this.members.clear(),
        this.vehicleRelay.clear(),
        (this.vehicleRelayBytes = 0),
        this.transientRx.clear(),
        this.transientBudget.reset(),
        this.banned.clear(),
        (this.role = `off`),
        (this.code = ``),
        (this.isPublic = !1),
        (this.pvp = !1),
        (this.slot = 0),
        (this.order = 0),
        (this.hostPeer = ``),
        (this.welcomed = !1),
        (this.migrateStart = 0),
        this.joinResolve?.(!1),
        (this.joinResolve = null),
        this.setStatus(`idle`),
        this.hooks.onRoster([]));
    }
    debug() {
      let e = (e) => ({
        pc: e.pc.connectionState,
        ice: e.pc.iceConnectionState,
        gather: e.pc.iceGatheringState,
        signaling: e.pc.signalingState,
      });
      return {
        role: this.role,
        status: this.status,
        peer: this.peer,
        uid: this.uid,
        slot: this.slot,
        order: this.order,
        epoch: this.epoch,
        code: this.code,
        public: this.isPublic,
        host: this.hostPeer,
        players: this.roster(),
        channel: this.channel?.status ?? `none`,
        lobby: this.lobby?.status ?? `none`,
        links: [...this.links.values()].map((t) => ({
          peer: t.peer,
          slot: this.members.get(t.peer)?.slot ?? -1,
          status: t.status,
          hello: t.hello,
          rtt: Math.round(t.rtt),
          ...e(t),
          ...t.stats,
        })),
        relay: {
          ...this.stats,
          realtimeMs: Math.round(
            this.stats.realtimeMs +
              (this.channel ? performance.now() - this.channelAt : 0),
          ),
        },
        rt: { ...Wt },
        transient: { ...this.transientStats },
        vehicleRelay: {
          pending: this.vehicleRelay.size,
          bytes: this.vehicleRelayBytes,
        },
        trace: this.trace,
        migrationMs: this.migrationMs,
      };
    }
  },
  Fn = (e, t) => {
    let n = (e - t) & 65535;
    return n !== 0 && n < 32768;
  },
  In = (e, t) => (e - t) | 0,
  Ln = () => ({
    slot: 0,
    seq: 0,
    t: 0,
    x: 0,
    y: 0,
    z: 0,
    heading: 0,
    speed: 0,
    mode: 0,
    anim: 0,
    flags: 0,
    vehicle: 0,
    pitch: 0,
    roll: 0,
    heave: 0,
    surge: 0,
  }),
  Rn = Math.PI * 2,
  zn = 0.05,
  Bn = 250,
  Vn = 0.2,
  Hn = 1500;
