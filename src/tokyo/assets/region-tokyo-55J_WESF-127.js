// tokyo/assets/region-tokyo-55J_WESF 127 — streamer
// Lines 55520-55840 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function Yue(e, t) {
  let n = G_;
  if (!n) return;
  let r = performance.now(),
    i = t.player.position;
  if (
    (Zue(n, e, i.x, i.y, i.z),
    n.streamer.update(e, i.x, i.y, i.z),
    (n.closeT -= e) <= 0)
  ) {
    n.closeT = 0.5;
    for (let e of [...n.streamer.activeSites])
      e.closedOut() && n.streamer.drop(e);
  }
  let a = n.sh;
  ((a.interact.blocked = a.menu.open),
    a.interact.update(t, e),
    a.menu.update(e),
    n.waits.length && $ue(n),
    n.streamer.pending > 0
      ? (n.geoIdle = 0)
      : (n.geoIdle += e) > 20 && Gee() > 0 && Wee());
  let o = t.camera.position,
    s = on(i.x, i.y + 0.9, i.z),
    c = s && s.contains(o.x, o.y, o.z) ? s : on(o.x, o.y, o.z);
  (s ?? c) && a.fill.want((s ?? c).light, s ? 0.9 : 0.4);
  let l = 1;
  try {
    l = t.renderer.gl.toneMappingExposure || 1;
  } catch {}
  let u = t.env?.night ?? 0;
  n.adapt += (+!!n.api._shelter - n.adapt) * Math.min(1, e * 2.5);
  let d = 1 / l ** 0.25,
    f = d + (0.72 - d) * n.adapt * u;
  for (let e of B_) n.mats.room[e].userData.uLight.value.setScalar(f);
  for (let e of B_) n.mats.glass[e].opacity = 1;
  let p = null,
    m = !1,
    h = null,
    g = null;
  for (let e of n.streamer.activeSites)
    (!p && e.contains(i.x, i.y + 0.9, i.z) && ((p = `store:${e.id}`), (h = e)),
      !m && e.contains(o.x, o.y, o.z) && ((m = !0), (g = e)));
  n.cull.site = g;
  let _ = !p && s ? s : null;
  (_ && (p = _.id), !m && c && (m = !0));
  let v = p;
  if (!v) {
    for (let e of n.streamer.activeSites)
      if (e.atCounter) {
        v = `store:${e.id}`;
        break;
      }
  }
  ((n.api._inside = !!v),
    (n.api._current = v),
    (n.api._shelter = m),
    ede(n, p, h),
    a.fill.update(e));
  let y = t.env;
  typeof y.setSheltered == `function`
    ? y.setSheltered(m)
    : m &&
      (n.rainMesh === void 0 &&
        (n.rainMesh = t.scene.getObjectByName(`env-rain`) ?? null),
      n.rainMesh && (n.rainMesh.visible = !1));
  let b = performance.now() - r;
  ((n.perf.avg += (b - n.perf.avg) * 0.05),
    (n.perf.max = Math.max(n.perf.max * 0.995, b)));
}
function Xue() {
  let e = G_;
  return !!e && (e.api._inside || e.sh.menu.open);
}
function Zue(e, t, n, r, i) {
  let a = e.pages;
  if (((e.resScan -= t), e.resScan <= 0)) {
    e.resScan = 0.5;
    let t = e.use,
      r = (e) => {
        let n = t[e.page];
        ((n.want = !0), (n.x = e.x), (n.z = e.z));
      };
    for (let e of B_) t[e].want = !1;
    for (let t of e.streamer.activeSites) r(t);
    for (let t of e.streamer.holding.keys()) e.streamer.held(t) && r(t);
    let o = e.sh.menu.open ? e.sh.menu.owner : void 0;
    o && o.page && r(o);
    for (let a of e.rooms)
      t[a.page].want ||
        (a.x - n) ** 2 + (a.z - i) ** 2 > 6400 ||
        (a.canBuild() && r(a));
    for (let e of B_) t[e].want && !a[e].started && a[e].begin();
  }
  let o = e.ctx.quality,
    s =
      Number(e.ctx.params.get(`intpagettl`)) ||
      (o.mobile || o.level === `low` ? 60 : 1 / 0),
    c = sn.R * sn.R;
  for (let r of B_) {
    let o = e.use[r],
      l = a[r];
    if (o.want) {
      o.far = o.idle = 0;
      continue;
    }
    l.started &&
      ((o.idle += t),
      (n - o.x) ** 2 + (i - o.z) ** 2 >= c ? (o.far += t) : (o.far = 0),
      (o.far >= sn.S || o.idle > s) && J_(e, r));
  }
  if (e.pendingUpload.length) {
    let t = e.pendingUpload[0];
    (t.uploadStep(e.ctx.renderer.gl) || !t.ready) && e.pendingUpload.shift();
    return;
  }
  for (let t of B_) {
    let n = a[t];
    if (n.started && !n.ready) {
      n.step(3) && e.pendingUpload.push(n);
      break;
    }
  }
}
function J_(e, t) {
  let n = e.pages[t],
    r = e.pendingUpload.indexOf(n);
  (r >= 0 && e.pendingUpload.splice(r, 1),
    n.release(),
    (e.use[t].far = e.use[t].idle = 0),
    e.pageReleases++);
}
function Y_(e, t) {
  (e.ready || e.finish(), e.upload(t.renderer.gl));
}
function Que(e) {
  let t = e.ctx,
    n = e.sh,
    r = new Map(e.rooms.map((e) => [e.id, e]));
  return {
    _inside: !1,
    _shelter: !1,
    _current: null,
    get playerInside() {
      return this._inside;
    },
    get cameraSheltered() {
      return this._shelter;
    },
    get current() {
      return this._current;
    },
    hasStore: (e) => {
      let t = r.get(e);
      return !!t && t.kind === `konbini` && !t.dead;
    },
    hasShop: (e) => {
      let t = r.get(e);
      return !!t && !t.dead;
    },
    get busy() {
      return !1;
    },
    charFill: n.fill,
    get indoorView() {
      return e.cull.active;
    },
    requestLight(e, t, r, i, a) {
      n.fill.want(i, Math.min(1.2, Math.max(0, a / 7)));
    },
    get purchases() {
      return n.purchases;
    },
    onPurchase(e) {
      return (
        n.buyListeners.push(e),
        () => {
          let t = n.buyListeners.indexOf(e);
          t >= 0 && n.buyListeners.splice(t, 1);
        }
      );
    },
    shopAt(n, r) {
      for (let i of e.rooms)
        if (i.built && i.contains(n, t.player.position.y + 0.9, r)) return i.id;
      return null;
    },
    ensure: (t, n) => Z_(e, t, n),
    release: (t) => {
      for (let n of X_(e, t)) e.streamer.unhold(n);
    },
    residency: () => Q_(e),
  };
}
function X_(e, t) {
  if (typeof t == `string`) {
    let n = t.startsWith(`store:`) ? t.slice(6) : t,
      r = e.rooms.find((e) => e.id === n);
    return r ? [r] : [];
  }
  let n = t.radius ?? 60;
  return e.rooms
    .map((e) => ({ r: e, d: Math.hypot(e.x - t.x, e.z - t.z) }))
    .filter((e) => e.d <= n)
    .sort((e, t) => e.d - t.d)
    .slice(0, 2)
    .map((e) => e.r);
}
function Z_(e, t, n) {
  let r = X_(e, t).filter((e) => e.openNow());
  if (!r.length) return Promise.resolve(!1);
  let i = Math.max(1, n?.holdS ?? 90) * 1e3;
  for (let t of r) e.streamer.hold(t, i + (n?.timeoutS ?? 20) * 1e3);
  if (n?.now) {
    for (let t of r) t.prepareNow() && Y_(e.pages[t.page], e.ctx);
    let t = e.ctx.player.position;
    (e.streamer.scan(t.x, t.y, t.z), e.streamer.flush());
  }
  return r.every((e) => e.built)
    ? Promise.resolve(!0)
    : new Promise((t) => {
        let a = {
          sites: r,
          holdMs: i,
          resolve: t,
          timer: setTimeout(
            () => {
              let n = e.waits.indexOf(a);
              (n >= 0 && e.waits.splice(n, 1), t(!1));
            },
            (n?.timeoutS ?? 20) * 1e3,
          ),
        };
        e.waits.push(a);
      });
}
function $ue(e) {
  for (let t = 0; t < e.waits.length; t++) {
    let n = e.waits[t];
    if (n.sites.every((e) => e.built)) {
      (e.waits.splice(t--, 1), clearTimeout(n.timer));
      for (let t of n.sites) e.streamer.hold(t, n.holdMs);
      n.resolve(!0);
    }
  }
}
function Q_(e) {
  let t = {},
    n = { built: 0, building: 0, warm: 0, cold: 0 };
  for (let r of e.streamer.sites) {
    let i = e.streamer.tier(r);
    (n[i]++, i !== `cold` && (t[`store:${r.id}`] = i));
  }
  let r = {};
  for (let t of B_) {
    let n = e.pages[t];
    r[t] = n.started
      ? n.live
        ? `live`
        : n.ready
          ? `uploading`
          : `painting`
      : `cold`;
  }
  return {
    dormant: !1,
    sites: t,
    counts: n,
    pages: r,
    staff: { pooled: 0, active: 0, inflight: 0, pages: 0 },
    held: [...e.streamer.holding.keys()]
      .filter((t) => e.streamer.held(t))
      .map((e) => e.id),
    mission: null,
  };
}
function ede(e, t, n) {
  if (t === e.audio.cur) return;
  let r = e.ctx.audio;
  e.audio.cur = t;
  try {
    e.audio.loop?.stop();
  } catch {}
  e.audio.loop = null;
  try {
    if (!t || !n) {
      r.setIndoor?.(+!!t, `room`);
      return;
    }
    r.setIndoor?.(1, n.audioRoom);
    let i =
      n.audioRoom === `store`
        ? `ambient_store`
        : n.audioRoom === `hall`
          ? `ambient_hall`
          : null;
    i &&
      r.loop &&
      (e.audio.loop = r.loop(i, {
        x: n.x,
        y: (n.fr?.py ?? 0) + 1.5,
        z: n.z,
        volume: n.audioRoom === `store` ? 0.55 : 0.6,
      }));
  } catch {}
}
var tde = new Set([
    `environment`,
    `streets`,
    `buildings`,
    `tiles`,
    `landmarks`,
    `districts`,
    `culture`,
    `transit`,
    `traffic`,
    `peds`,
    `sites`,
  ]),
  $_ = new l(),
  ev = new M();
