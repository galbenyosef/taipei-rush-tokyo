// tokyo/assets/net-PtwKfaxg 19 — pose
// Lines 9431-10582 of readable/tokyo/assets/net-PtwKfaxg.pretty.js (statement-aligned).
function createNet(e, n = {}) {
  let r = Kr(n.city),
    i = null,
    a = null,
    o = null,
    s = null,
    c = !1,
    l = null,
    u = { phase: ``, error: null },
    d = !1,
    f = 0,
    p = () => {
      qe();
    },
    h = 0,
    g = 0,
    _ = new Map(),
    v = ``,
    b = !1,
    se = 0,
    ce = ``,
    x = null,
    le = new Map(),
    S = ``;
  try {
    S = H(localStorage.getItem(`tgta-net-name`));
  } catch {}
  let ue = new Set(),
    de = (e) => {
      for (let t of k.members.values()) if (t.slot === e) return ue.has(t.peer);
      return !1;
    },
    fe = 0,
    pe = 0,
    me = -1e9,
    he = null,
    ge = 0,
    _e = 0,
    ve = 0,
    xe = !1,
    Te = 0,
    Ee = innerWidth,
    Oe = innerHeight,
    C = new Map(),
    w = new Map(),
    Ae = new Set(),
    je = new ArrayBuffer(36),
    Me = new DataView(je),
    Fe = new Uint8Array(je),
    T = ke(),
    Ie = ke(),
    E = [],
    Le = [],
    Re = new Set(),
    D = [],
    ze = null,
    Be = null,
    O = (t, n = `info`) => e.events.emit(`notify`, { text: t, kind: n }),
    k = new Pn({
      onPose: (e, t) => {
        Pe(t, Ie) && w.get(e)?.push(Ie, performance.now());
      },
      onTransient: (e, t) => {
        (j.onEvent(e, t), M.onEvent(e, t));
      },
      onEvent: (e, t) => {
        (M.onEvent(e, t),
          !j.onEvent(e, t) &&
            !Ve.onEvent(e, t) &&
            !N.onEvent(e, t) &&
            !P.onEvent(e, t) &&
            A.onEvent(e, t));
      },
      onRoster: (e) => {
        (a?.roster(e), F(e));
      },
      onStatus: (e) => {
        (a?.status(e), L(e));
      },
      onHost: (e) => {
        (e
          ? (j.reset(), M.clear(), N.clear(), A.clear(), A.resync())
          : (A.hostChanged(), M.hostChanged()),
          i?.refresh(!0));
      },
      onJoined: (e) => A.welcome(e),
      notice: (e, t) => {
        (a?.notice(e), t === `bad` && ((u.error = e), i?.refresh(!0)), O(e, t));
      },
      char: () => m(e.player?.character),
      name: () => S,
      city: () => r,
      otherCity: (e, t) => {
        let n = Object.prototype.hasOwnProperty.call(Gr, e) ? Gr[e] : void 0;
        if (!n) {
          ((u.error = U.notFound), O(U.notFound, `bad`), i?.refresh(!0));
          return;
        }
        ((u.error = U.otherCity(n.name)), (u.retryLabel = U.goCity(n.name)));
        let r = ae(t, e, n.page);
        ((p = () => {
          location.assign(r);
        }),
          O(u.error, `bad`),
          i?.refresh(!0));
      },
    }),
    A = new Dr(e, k, (e) => w.get(e)),
    j = new We(e, k, () =>
      [...C.values()]
        .filter((e) => e.goneT < 0 && e.buf.count)
        .map((e) => ({
          slot: e.slot,
          peer: e.peer,
          x: e.pose.x,
          y: e.pose.y,
          z: e.pose.z,
        })),
    ),
    M = new Qe(e, k, (e) => w.get(e)),
    Ve = new nt(e, k, (e) => w.get(e)),
    N = new St(e, k, A, (e) => le.get(e)),
    He = new Map(),
    P = new Pt(
      e,
      k,
      () => {
        (He.clear(),
          He.set(k.slot, { x: e.player.position.x, z: e.player.position.z }));
        for (let e of C.values())
          e.goneT < 0 &&
            e.buf.count &&
            He.set(e.slot, { x: e.pose.x, z: e.pose.z });
        return He;
      },
      (e) => {
        for (let t of k.members.values())
          if (t.slot === e) return V(t.slot, t.char, t.name);
        return { zh: `玩家 ${e + 1}`, en: `Player ${e + 1}` };
      },
      de,
    );
  A.muted = de;
  function F(t) {
    let n = new Set(),
      r = new Set(),
      a = !1;
    w.clear();
    for (let o of t) {
      if ((r.add(o.slot), o.self)) continue;
      n.add(o.peer);
      let t = C.get(o.peer);
      (t ||
        ((t = new br(
          e,
          o.slot,
          o.peer,
          o.char,
          {
            onDamage: (e, t) => A.hit(e, t),
            onImpact: (e, t, n, r, i) => A.impact(e, t, n, r, i),
            vehicle: (e) => A.vehicles.get(e),
            pvp: () => k.pvp,
          },
          i.tags,
        )),
        C.set(o.peer, t),
        (a = !0)),
        (t.slot = o.slot),
        (t.goneT = -1),
        t.setChar(o.char),
        (t.name = o.name),
        w.set(o.slot, t));
    }
    for (let e of C.values()) !n.has(e.peer) && e.goneT < 0 && (e.goneT = 0);
    if (k.role === `off`) for (let e of [...C.values()]) I(e);
    (b && !n.has(ce) && Ze(),
      x && !n.has(x.peer) && tt(!0),
      M.onRoster(),
      Ve.onRoster(),
      A.onRoster(r),
      N.onRoster(r),
      P.onRoster(r),
      a && (A.announceWanted(), N.announce(), P.announce()),
      i?.refresh(!0));
  }
  function I(t) {
    (t.dispose(), C.delete(t.peer));
    let n = `net-${t.peer}`;
    if (Ae.delete(n))
      try {
        e.ui.removeBlip(n);
      } catch {}
  }
  function L(t) {
    if (
      (t === `connected`
        ? e.missions?.setMultiplayerActive?.(!0)
        : t === `idle` && e.missions?.setMultiplayerActive?.(!1),
      t === `connected` && (u.error = null),
      t === `connected` && k.role === `client` && O(U.connected, `good`),
      t === `connected` && k.code && re(k.code),
      t !== `connected` && Ze(),
      t === `idle`)
    ) {
      (j.reset(),
        M.clear(),
        Ve.clear(),
        N.clear(),
        P.clear(),
        A.clear(),
        (v = ``),
        tt(!0),
        _.clear());
      for (let e of [...C.values()]) I(e);
    }
    i?.refresh(!0);
  }
  function Ue(t) {
    o &&
      !o.isOpen &&
      (t && (s = t), (c = e.paused), o.open(), e.setPaused(!0), i?.refresh(!0));
  }
  function R() {
    if (d || k.status !== `connected`) return;
    let t = e.ui.menuOpen === `main` ? s : null;
    (o?.close(), t ? t() : (e.ui.closeMenu(), e.input.lockPointer()));
  }
  async function z(e, t, n, r) {
    if (d) return n;
    d = !0;
    let o = ++f,
      s = () => o === f;
    ((p = t),
      (u.phase = e),
      (u.error = null),
      (u.retryLabel = null),
      i?.refresh(!0));
    try {
      if (!Yt()) throw Error(`multiplayer unavailable`);
      let e = await r(s);
      return s() ? (e ? (u.error = null) : (u.error ??= U.joinFailed), e) : n;
    } catch (e) {
      return (
        s() &&
          (console.warn(`[net] connect`, e),
          k.end(),
          (u.error ??= U.offline),
          O(u.error, `bad`)),
        n
      );
    } finally {
      (s() && ((d = !1), (u.phase = ``), a?.settle()), i?.refresh(!0));
    }
  }
  async function Ge(e = {}) {
    return z(
      `hosting`,
      () => {
        Ge(e);
      },
      ``,
      async (t) => {
        let n = performance.now();
        if ((await k.prepareIce(), !t())) return ``;
        a?.begin(`host`, `create`, { isPublic: !!e.public, t0: n });
        let r = await k.hostRoom(!!e.public);
        return (t() && r && O(U.hosting, `good`), r);
      },
    );
  }
  async function Ke(e, t = `code`) {
    return z(
      `connecting`,
      () => {
        Ke(e, t);
      },
      !1,
      async (n) => {
        let r = y(e);
        if (!r) return ((u.error = U.invalidCode), !1);
        let i = performance.now();
        if ((await k.prepareIce(), !n())) return !1;
        a?.begin(`guest`, t, { room: r, t0: i });
        let o = await k.joinRoom(r);
        return (o && n() && (v = k.hostPeer), o);
      },
    );
  }
  async function qe() {
    return !1;
  }
  function B() {
    (++f,
      he?.clear(),
      (d = !1),
      Ze(),
      tt(!0),
      (u.phase = ``),
      (u.error = null),
      ne(),
      a?.leave(),
      k.leave(),
      i?.refresh(!0));
  }
  function Je(e) {
    (k.setPublic(e), i?.refresh(!0));
  }
  function Ye() {
    let t = vt.shareLink();
    if (!t) return;
    let n = navigator,
      i = (e, t) => {
        o?.isOpen ? o.showFeedback(e) : O(e, t);
      },
      a = () =>
        navigator.clipboard?.writeText(t).then(
          () => i(U.linkCopied, `good`),
          () => i({ zh: t, en: t }, `info`),
        ) ?? i({ zh: t, en: t }, `info`);
    e.input.isTouch && n.share
      ? n.share({ title: `《${Gr[r].game.zh}》`, url: t }).catch(a)
      : a();
  }
  function Xe(e) {
    return w.get(e) ?? null;
  }
  function Ze() {
    (++se,
      (ce = ``),
      b &&
        ((b = !1),
        e.player.setControlEnabled(!0),
        Promise.resolve(e.ui.fade(0, 0.2)).catch(() => {})));
  }
  async function $e(t) {
    let n = Xe(t),
      r = e.player;
    if (
      !n ||
      n.goneT >= 0 ||
      !n.buf.count ||
      n.pose.mode > 1 ||
      b ||
      k.status !== `connected`
    )
      return !1;
    if (r.mode !== `foot` && r.mode !== `vehicle`)
      return (O(U.noGoBusy, `bad`), !1);
    try {
      if (e.police.level > 0) return (O(U.noGoWanted, `bad`), !1);
      if (e.missions.active) return (O(U.noGoBusy, `bad`), !1);
    } catch {}
    ((b = !0), (ce = n.peer));
    let i = ++se,
      a = () =>
        i === se &&
        k.status === `connected` &&
        C.get(n.peer) === n &&
        n.goneT < 0 &&
        n.pose.mode <= 1,
      o = !1;
    try {
      if (
        (r.setControlEnabled(!1),
        await Promise.resolve(e.ui.fade(1, 0.35)).catch(() => {}),
        !a())
      )
        return !1;
      let t = { ...n.pose },
        i = t.heading,
        s = t.x - Math.sin(i) * 3,
        c = t.z + Math.cos(i) * 3;
      if (t.mode === 1 || e.plan.surfaceAt?.(s, c) === `road`) {
        let n = e.plan.snapToSidewalk(t.x, t.z);
        ((s = n.x), (c = n.z));
      }
      if (
        (await Promise.race([
          Promise.allSettled([e.districts?.ensureResident?.(s, c)]),
          new Promise((e) => setTimeout(e, 6e3)),
        ]),
        !a())
      )
        return !1;
      if (r.mode === `foot` || r.mode === `vehicle` || r.mode === `cutscene`) {
        r.vehicleId >= 0 && e.vehicles?.ejectPlayer?.();
        let n =
          Math.hypot(t.x - s, t.z - c) > 0.5
            ? Math.atan2(t.x - s, -(t.z - c))
            : i;
        (r.teleport(s, c, n, t.mode === 1 ? void 0 : t.y),
          e.cameraRig?.snapBehind?.(n),
          (o = !0));
      }
    } catch (e) {
      console.warn(`[net] goTo`, e);
    } finally {
      i === se &&
        (r.setControlEnabled(!0),
        Promise.resolve(e.ui.fade(0, 0.5)).catch(() => {}),
        (b = !1),
        (ce = ``));
    }
    return (o && O(U.arrived(n.slot, n.char, n.name), `good`), o);
  }
  function et(t) {
    let n = Xe(t);
    if (!(!n || n.goneT >= 0 || !n.buf.count || k.status !== `connected`)) {
      x = { peer: n.peer, x: n.pose.x, z: n.pose.z, t: 0 };
      try {
        (e.ui.setWaypoint(
          { x: n.pose.x, z: n.pose.z },
          V(n.slot, n.char, n.name),
          !0,
        ),
          Object.assign(x, e.ui.waypoint ?? {}));
      } catch {}
      O(U.following(n.slot, n.char, n.name), `info`);
    }
  }
  function tt(t = !1) {
    if (x && t)
      try {
        let t = e.ui.waypoint;
        t &&
          Math.hypot(t.x - x.x, t.z - x.z) < 0.5 &&
          t.label === x.label &&
          t.user === x.user &&
          e.ui.setWaypoint(null);
      } catch {}
    x = null;
  }
  function rt(t) {
    let n = x;
    if (!n || ((n.t += t * 1e3), n.t < Zr)) return;
    n.t = 0;
    let r = C.get(n.peer),
      i = e.ui.waypoint;
    if (!r || r.goneT >= 0) return tt(!0);
    if (
      !i ||
      Math.abs(i.x - n.x) > 0.5 ||
      Math.abs(i.z - n.z) > 0.5 ||
      i.label !== n.label ||
      i.user !== n.user
    )
      return tt();
    let a = e.player.position;
    if (Math.hypot(r.pose.x - a.x, r.pose.z - a.z) < Qr) return tt(!0);
    if (!(Math.hypot(r.pose.x - n.x, r.pose.z - n.z) < 8)) {
      ((n.x = r.pose.x), (n.z = r.pose.z));
      try {
        (e.ui.setWaypoint({ x: n.x, z: n.z }, V(r.slot, r.char, r.name), !0),
          Object.assign(n, e.ui.waypoint ?? {}));
      } catch {}
    }
  }
  function it(t) {
    let n = !1,
      r = e.player.position.x,
      i = e.player.position.z;
    for (let e of k.members.values()) {
      if (e.peer === k.peer) continue;
      let a = (_.get(e.peer) ?? 0) - t;
      if (a > 0) {
        _.set(e.peer, a);
        continue;
      }
      let o = C.get(e.peer),
        s = o && o.buf.count ? Math.hypot(o.pose.x - r, o.pose.z - i) : 0,
        c = Jr[Jr.length - 1][1];
      for (let [e, t] of Jr)
        if (s < e) {
          c = t;
          break;
        }
      (_.set(e.peer, Math.max(0, a + c)),
        (n ||= (at(), !0)),
        k.sendPose(e.peer, Fe));
    }
  }
  function at() {
    let t = e.player,
      n = e.vehicles?.playerVehicle ?? null;
    ((T.slot = k.slot),
      (T.seq = g = (g + 1) & 65535),
      (T.t = Math.floor(performance.now()) >>> 0),
      (T.mode = Math.max(0, we.indexOf(t.mode))));
    let r = 0;
    if (((T.pitch = T.roll = T.heave = T.surge = 0), t.mode === `vehicle` && n))
      (Object.assign(T, n.visualPose ?? {}),
        (T.x = n.body.x),
        (T.y = n.body.y),
        (T.z = n.body.z),
        (T.heading = n.heading),
        (T.speed = Math.abs(n.speed)),
        (T.anim = n.spec.twoWheeler ? $.ride : $.drive),
        n.speed < -0.2 && (r |= 2),
        (n.sirenOn || n.lightsOn) && (r |= 8),
        (T.vehicle = A.myVehicle));
    else if (N.ride) {
      let e = N.ride.proxy;
      (Object.assign(T, e.visualPose ?? {}),
        (T.x = e.body.x),
        (T.y = e.body.y),
        (T.z = e.body.z),
        (T.heading = e.heading),
        (T.speed = Math.abs(e.speed)),
        (T.anim = e.spec.twoWheeler ? $.ride : $.drive),
        (r |= 16),
        (T.vehicle = N.ride.id));
    } else {
      ((T.x = t.position.x),
        (T.y = t.position.y),
        (T.z = t.position.z),
        (T.heading = t.heading));
      let e = t.velocity;
      ((T.speed = Math.hypot(e.x, e.z)),
        (T.anim =
          t.mode === `dead`
            ? $.dead
            : t.aiming
              ? $.aim
              : t.sprinting
                ? $.sprint
                : T.speed > 2.4
                  ? $.run
                  : T.speed > 0.25
                    ? $.walk
                    : $.idle),
        t.aiming && (r |= 4),
        t.mode === `foot` && (r |= De(t.weapon)),
        (T.vehicle = 0));
    }
    (e.paused && (r |= 32), (T.flags = r), Ne(Me, T));
  }
  function ot() {
    for (let t of C.values()) {
      let n = `net-${t.peer}`;
      try {
        Ae.has(n)
          ? e.ui.updateBlip(n, t.pose.x, t.pose.z)
          : (e.ui.addBlip(n, {
              x: t.pose.x,
              z: t.pose.z,
              icon: `target`,
              color: $r[t.slot] ?? `#35e0ff`,
              label: V(t.slot, t.char, t.name),
              clampToEdge: !0,
            }),
            Ae.add(n));
      } catch {}
    }
  }
  function W(e) {
    S = H(e);
    try {
      S
        ? localStorage.setItem(`tgta-net-name`, S)
        : localStorage.removeItem(`tgta-net-name`);
    } catch {}
    (k.charChanged(), O(U.nickSaved(S), `good`), i?.refresh(!0));
  }
  function st(e) {
    for (let t of k.members.values())
      if (t.slot === e && t.peer !== k.peer) {
        let e = V(t.slot, t.char, t.name);
        ue.delete(t.peer)
          ? O(U.unmuted(e), `info`)
          : (ue.add(t.peer), O(U.muted(e), `info`));
      }
    i?.refresh(!0);
  }
  function ct() {
    let t = e.player.position,
      n = null,
      r = 1 / 0;
    for (let e of C.values()) {
      if (e.goneT >= 0 || !e.buf.count) continue;
      let i = Math.hypot(e.pose.x - t.x, e.pose.z - t.z);
      i < r && ((r = i), (n = e));
    }
    ((fe = 0), n && $e(n.slot));
  }
  function lt(e) {
    let t = ar(e);
    if (!t || k.role === `off`) return !0;
    let n = performance.now();
    return n - me < 1200
      ? !1
      : ((me = n),
        k.sendEvent({ t: `say`, s: t }),
        a?.chat(),
        (he ??= i ? new ur(i.tags) : null)?.show(t),
        !0);
  }
  function ut() {
    if (!he?.needsFrame) return;
    let t = e.player.position,
      n =
        e.player.mode === `vehicle`
          ? (e.vehicles?.playerVehicle ?? null)
          : (N.ride?.proxy ?? null),
      r = n ? n.spec.height + 0.6 : 2.05;
    he.place(e.camera, Ee, Oe, t.x, t.y + r, t.z, !1);
  }
  function dt(t) {
    try {
      if (!e.player.emote?.(t)) return;
    } catch {
      return;
    }
    k.sendEvent({ t: `emote`, id: t });
  }
  function ft(t) {
    ((pe = Math.max(0, pe - t)),
      !(!A.myVehicle || pe > 0 || !e.input.pressed(`horn`) || e.paused) &&
        ((pe = 0.33), k.sendEvent({ t: `horn` })));
  }
  function pt(t) {
    if (j.sharing || ((_e += t), _e < 0.5)) return;
    _e = 0;
    let n = e.camera.position,
      r = (t, r) => {
        if (!(Math.hypot(t - n.x, r - n.z) > 90))
          try {
            e.traffic.claimNearest(t, r, 1.6);
          } catch {}
      };
    for (let e of E) r(e.p.x, e.p.z);
    let i = N.ride?.proxy;
    i && r(i.body.x, i.body.z);
  }
  function mt(t) {
    let n = w.get(t);
    if (!n || !n.buf.count) return -1;
    let r = e.player.position;
    return Math.hypot(n.pose.x - r.x, n.pose.z - r.z);
  }
  let ht = [];
  function gt(e, t, n) {
    ((n.kind = e.kind),
      (n.idx = t),
      (n.anchor = null),
      (n.pitch = n.roll = n.heave = n.surge = 0));
    let r = A.localOf(e.id) ?? (N.ride?.id === e.id ? N.ride.proxy : void 0),
      i = r ? null : le.get(e.id);
    return (
      r
        ? ((n.x = r.body.x),
          (n.y = r.body.y),
          (n.z = r.body.z),
          (n.heading = r.heading),
          Object.assign(n, r.visualPose ?? {}),
          (n.anchor = r.seat?.parent ?? r.object))
        : i
          ? ((n.x = i.pose.x),
            (n.y = i.pose.y),
            (n.z = i.pose.z),
            (n.heading = i.pose.heading),
            (n.pitch = i.pose.pitch ?? 0),
            (n.roll = i.pose.roll ?? 0),
            (n.heave = i.pose.heave ?? 0),
            (n.surge = i.pose.surge ?? 0))
          : ((n.x = e.x),
            (n.y = e.y),
            (n.z = e.z),
            (n.heading = e.heading),
            Object.assign(n, e.visualPose ?? {})),
      n
    );
  }
  function _t() {
    let t = !!e.paused;
    if (
      (t !== xe &&
        ((xe = t),
        (ve = performance.now()),
        t && k.connectedPeers && O(U.pausedOnline, `info`)),
      !t || k.role !== `host` || !k.connectedPeers)
    )
      return;
    let n = performance.now();
    if (!(n - ve < 1e3)) {
      try {
        let t = e.env;
        t.setHour((t.hour + ((n - ve) / 1e3) * (t.timeScale / 60)) % 24);
      } catch {}
      ve = n;
    }
  }
  let vt = {
    name: `net`,
    alwaysUpdate: !0,
    get role() {
      return k.role;
    },
    get status() {
      return k.status;
    },
    get roundActive() {
      return !1;
    },
    get roundCanShoot() {
      return !1;
    },
    roundShot: (e, t) => void 0,
    roundTarget: (e) => !1,
    get inSession() {
      return k.role !== `off`;
    },
    get code() {
      return k.code;
    },
    get players() {
      return k.roster();
    },
    shareLink: () => (k.code ? ae(k.code, r) : ``),
    host: Ge,
    join: Ke,
    find: qe,
    leave: B,
    goTo: $e,
    follow: (e) => et(e),
    async init() {
      (t(
        async () => {
          let { MpStats: e } = await import(`./stats-CnSkeCaG.js`);
          return { MpStats: e };
        },
        __vite__mapDeps([28, 4, 3, 5, 6, 2, 7, 8, 11, 29]),
      ).then(
        ({ MpStats: t }) => {
          a = new t(e, k, () => `free`);
        },
        (e) => console.warn(`[net] stats unavailable`, e),
      ),
        (k.relayOnly = e.params.get(`relay`) === `1`),
        (i = new Nr(e, {
          lobbyOpen: () => !!o?.isOpen,
          openLobby: () => Ue(),
          match: () => u,
          retry: () => p(),
          players: () => k.roster(),
          role: () => k.role,
          status: () => k.status,
          code: () => k.code,
          isPublic: () => k.isPublic,
          share: Ye,
          leave: B,
          kick: (e, t) => {
            (a?.kick(e), k.kick(e, t));
          },
          setPublic: (e) => Je(e),
          chat: (e) => {
            (a?.chat(), k.sendEvent({ t: `chat`, i: e }));
          },
          say: (e) => lt(e),
          goTo: (e) => void $e(e),
          follow: (e) => et(e),
          activity: () => P.status(),
          busy: () => P.busy || !1,
          referee: () => P.race?.org === k.slot || P.hunt?.org === k.slot,
          hasPing: () => !!P.ping,
          sharePing: () => {
            P.sharePing();
          },
          goToPing: () => void P.goToPing(),
          startRace: () => {
            P.startRace();
          },
          startHunt: () => {
            P.startHunt();
          },
          stopActivity: () => P.stop(),
          nickname: () => S,
          setNickname: W,
          pvp: () => k.pvp,
          setPvp: (e) => {
            (k.setPvp(e), i?.refresh(!0));
          },
          isMuted: (e) => de(e),
          toggleMute: st,
          distance: mt,
          canRegroup: () => performance.now() < fe && C.size > 0,
          regroup: ct,
          emote: dt,
          touch: () =>
            N.ride
              ? (N.occ.get(N.ride.id)?.[0] ?? -1) < 0
                ? `slide`
                : `out`
              : N.candidate
                ? N.candidate.driven
                  ? `ride`
                  : `take`
                : ``,
          tap: (t) => e.input.virtual.tap(t),
        })),
        (o = new Lr(e, {
          game: Gr[r].game.en,
          state: () => ({
            players: k.roster(),
            role: k.role,
            status: k.status,
            code: k.code,
            public: k.isPublic,
            pvp: k.pvp,
            character: m(e.player?.character),
            nickname: S,
            phase: u.phase,
            error: u.error,
            retryLabel: u.retryLabel,
            invitedCode: ie(),
            recentCode: Yt() ? ee() : ``,
          }),
          host: () => {
            (oe(), Ge());
          },
          find: () => {
            (oe(), qe());
          },
          join: (e) => {
            let t = e === y(ie()) ? `link` : e === ee() ? `rejoin` : `code`;
            (oe(), Ke(e, t));
          },
          share: Ye,
          leave: B,
          setPublic: Je,
          setPvp: (e) => {
            (k.setPvp(e), i?.refresh(!0));
          },
          setCharacter: (t) => {
            (ye({ character: t }), e.player.setCharacter(t));
          },
          setNickname: W,
          retry: () => p(),
          enter: R,
          cops: void 0,
          closed: () => {
            (e.setPaused(c), i?.refresh(!0));
          },
        })),
        e.events.on(`player:respawned`, ({ reason: e }) => {
          k.role !== `off` &&
            C.size &&
            e !== `load` &&
            ((fe = performance.now() + 9e4), O(U.regroupHint, `info`));
        }),
        e.events.on(`player:character`, () => k.charChanged()),
        (ze = new xr(e)),
        e.params.get(`debug`) === `1` && (l = new Rr(k, () => h)),
        window.addEventListener(`resize`, () => {
          ((Ee = innerWidth), (Oe = innerHeight));
        }),
        window.addEventListener(`pagehide`, () => {
          (a?.pagehide(), k.leave(!0));
        }),
        Yt() &&
          (Se({
            key: `net`,
            label: U.multiplayer,
            icon: `friends`,
            run: () => Ue(),
          }),
          te() &&
            e.events.once(`player:spawned`, () => setTimeout(() => Ue(), 600))),
        Ce(
          `play`,
          (e, t, n) => {
            if (!Yt()) return;
            s = n;
            let r = be(e, t, U.multiplayer, () => Ue(n), {
                cls: `ti-btn ti-net`,
                icon: `friends`,
              }),
              i = document.createElement(`span`);
            ((i.className = `nl-beta`),
              r.append(i),
              e.bind(i, U.beta),
              e.bindTitle(r, U.betaNote));
          },
          `net`,
        ),
        (window.__net = {
          state: () => ({
            ...k.debug(),
            actions: { ...Ve.stats },
            pvp: k.pvp,
            nickname: S,
            world: {
              ...A.stats,
              vehicles: [...A.vehicles.values()],
              myVehicle: A.myVehicle,
            },
            seats: {
              ride: N.ride
                ? { id: N.ride.id, seat: N.ride.seat, proxy: N.ride.proxy.id }
                : null,
              occ: Object.fromEntries(N.occ),
              ...N.stats,
            },
            play: {
              race: P.race
                ? {
                    rid: P.race.rid,
                    org: P.race.org,
                    go: P.race.go > 0,
                    done: P.race.done,
                    ranks: P.race.ranks,
                  }
                : null,
              hunt: P.hunt
                ? {
                    org: P.hunt.org,
                    targets: P.hunt.targets.map((e) => ({
                      x: e.x,
                      z: e.z,
                      by: e.by,
                    })),
                  }
                : null,
              ping: P.ping,
              status: P.status(),
              ...P.stats,
            },
            ms: +h.toFixed(4),
            remotes: [...C.values()].map((e) => ({
              slot: e.slot,
              peer: e.peer,
              char: e.char,
              x: +e.pose.x.toFixed(2),
              z: +e.pose.z.toFixed(2),
              mode: e.pose.mode,
              vehicle: e.pose.vehicle,
              buffered: e.buf.count,
              accepted: e.buf.accepted,
              dropped: e.buf.dropped,
              interval: e.buf.interval,
              delay: Math.round(e.buf.delay),
              flags: e.pose.flags,
              wanted: e.wanted,
              name: e.name,
              emote: e.emote?.id ?? ``,
              seatIdx: e.seatIdx,
              visual: {
                x: e.root.position.x,
                y: e.root.position.y,
                z: e.root.position.z,
                pitch: e.root.rotation.x,
                roll: e.root.rotation.z,
              },
              shown: e.root.visible,
            })),
          }),
          cops: void 0,
          police: () => M.debugSnapshot(),
          ambient: () => j.snapshot(),
          matchmaking: () => ({ ...u, busy: d }),
          lobby: () => ({ open: !!o?.isOpen }),
          host: Ge,
          join: Ke,
          find: qe,
          leave: B,
          setPublic: Je,
          kick: (e, t = !1) => {
            (a?.kick(e), k.kick(e, t));
          },
          ping: () => P.sharePing(),
          goToPing: () => P.goToPing(),
          race: () => P.startRace(),
          hunt: () => P.startHunt(),
          stopActivity: () => P.stop(),
          seat: () => N.ride,
          leaveSeat: () => N.leave(),
          nickname: (e) => W(e),
          pvp: (e) => k.setPvp(e),
          mute: st,
          regroup: ct,
          emote: dt,
          chat: (e) => {
            (a?.chat(), k.sendEvent({ t: `chat`, i: e }));
          },
          shareLink: () => vt.shareLink(),
          goTo: $e,
          follow: et,
          pasteOffer: async () => {
            if (l) return l.host();
            let e = await k.pasteOffer();
            return ((Be = e.accept), e.offer);
          },
          pasteAnswer: (e) => l?.join(e) ?? k.pasteAnswer(e),
          pasteAccept: (e) => (l ? l.connect(e) : Be?.(e)),
          bench: (t = 300) => {
            let n = performance.now();
            for (let n = 0; n < t; n++) vt.update(1 / 60, e);
            return +((performance.now() - n) / t).toFixed(4);
          },
          trace: (e, t = 3e3) =>
            new Promise((n) => {
              let r = w.get(e);
              if (!r) return n([]);
              ((r.trace = []),
                setTimeout(() => {
                  let e = r.trace ?? [];
                  r.trace = null;
                  let t = [];
                  for (let n = 0; n + 2 < e.length; n += 3)
                    t.push([e[n], e[n + 1], e[n + 2]]);
                  n(t);
                }, t));
            }),
          benchParts: (t = 300) => {
            let n = performance.now(),
              r = performance.now();
            for (let r = 0; r < t; r++)
              for (let t of C.values())
                (t.sample(n), t.render(1 / 60, n, e.camera, Ee, Oe, null));
            let i = (performance.now() - r) / t;
            r = performance.now();
            for (let e = 0; e < t; e++) {
              at();
              for (let e of k.members.values())
                e.peer !== k.peer && k.sendPose(e.peer, Fe);
            }
            let a = (performance.now() - r) / t;
            r = performance.now();
            for (let e = 0; e < t; e++) ze?.draw(E, D);
            let o = (performance.now() - r) / t;
            r = performance.now();
            for (let e = 0; e < t; e++) ot();
            let s = (performance.now() - r) / t;
            r = performance.now();
            for (let e = 0; e < t; e++) A.update(1 / 60);
            let c = (performance.now() - r) / t;
            return {
              remotes: +i.toFixed(4),
              send: +a.toFixed(4),
              cars: +o.toFixed(4),
              blipsPerCall: +s.toFixed(4),
              world: +c.toFixed(4),
              n: C.size,
            };
          },
        }));
    },
    start() {
      (A.start(), Ve.start(), M.start());
    },
    prewarm() {
      return ze?.prewarm() ?? [];
    },
    lateUpdate() {
      k.role !== `off` && N.prompt();
    },
    update(t) {
      if (
        (o?.update(e.time.dt > 0 ? e.time.dt : 0.016),
        k.role === `off` && !C.size)
      ) {
        ((h *= 0.95), l?.update(t), i?.update(t));
        return;
      }
      let n = performance.now(),
        r = e.time.dt > 0 ? Math.min(0.1, e.time.dt) : 0.016;
      if (
        (A.update(r),
        k.status !== `idle` && it(r * 1e3),
        v && !o?.isOpen && e.ui.menuOpen !== `main`)
      ) {
        let t = C.get(v);
        if (!t || k.status !== `connected`) k.members.has(v) || (v = ``);
        else if (t.buf.count > 2) {
          v = ``;
          let n = e.player.position;
          Math.hypot(t.pose.x - n.x, t.pose.z - n.z) > Xr && $e(t.slot);
        }
      }
      rt(r);
      let a = performance.now();
      ((E.length = 0), Re.clear(), le.clear());
      let s = N.ride?.id ?? 0,
        c = 0;
      for (let e of C.values()) {
        if (
          e.goneT >= 0 &&
          ((e.goneT += r), e.goneT > Yr || k.role === `off`)
        ) {
          I(e);
          continue;
        }
        if (!e.sample(a)) continue;
        let t = e.pose.mode === 1 && e.pose.vehicle ? e.pose.vehicle : 0,
          n = t && !(e.pose.flags & 16) ? A.vehicles.get(t) : void 0;
        if (
          (n && e.goneT < 0 && le.set(n.id, e), n && e.goneT < 0 && n.id !== s)
        ) {
          let t = (Le[c] ??= { v: n, p: ke() });
          (c++, (t.v = n), Object.assign(t.p, e.pose), E.push(t), Re.add(n.id));
        }
      }
      N.syncRidePose();
      let u = 0;
      for (let n of C.values()) {
        let r = n.pose.mode === 1 && n.pose.vehicle ? n.pose.vehicle : 0,
          i = r ? A.vehicles.get(r) : void 0,
          o = null;
        if (i) {
          let e =
            n.pose.flags & 16
              ? Math.max(1, N.occ.get(r)?.indexOf(n.slot) ?? 1)
              : 0;
          ((o = gt(
            i,
            e,
            (ht[u++] ??= {
              x: 0,
              y: 0,
              z: 0,
              heading: 0,
              kind: i.kind,
              idx: 0,
            }),
          )),
            (n.seatIdx = e));
        } else n.seatIdx = 0;
        (n.render(t, a, e.camera, Ee, Oe, o), n.setPoliceUniform(!1));
      }
      (s && Re.add(s),
        A.parked(Re, D),
        ze?.draw(E, D),
        A.updateVehicleFx(r, s),
        N.update(),
        P.update(r),
        M.update(r),
        j.update(r),
        ft(r),
        pt(r),
        _t(),
        (ge += r),
        ge > 15 && k.status === `connected` && k.code && ((ge = 0), re(k.code)),
        (Te += r),
        Te > 0.25 && ((Te = 0), ot()),
        ut(),
        (h += (performance.now() - n - h) * 0.05),
        i?.update(r),
        l?.update(r));
    },
  };
  return vt;
}
