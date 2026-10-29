// tokyo/assets/region-tokyo-A7LxHjud 321 — spec
// Lines 115493-116243 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function OOe(e) {
  let t = e.plan,
    n = e.params,
    r = n.get(`lmOnly`)?.split(`,`).filter(Boolean) ?? null,
    i = n.get(`landmarks`) === `0`,
    o = [...kq, ...(n.get(`lmKit`) === `1` ? [TOe] : [])].filter(
      (e) => !r || r.includes(e.id),
    ),
    s = [],
    c = {},
    l = {},
    u = null,
    d = null,
    f = null,
    p = null,
    m = Mq[e.quality.level] ?? 1,
    h = 0,
    g = 0,
    _ = -1,
    v = { far: { tris: 0, vertices: 0 }, texMB: 0, initMs: 0, atlasMs: 0 },
    y = { avg: 0, max: 0 },
    x = new Map(),
    S = () => !!e.quality.mobile || e.quality.level === `low`,
    C = () => e.quality.materials,
    w = () =>
      ke(`opaque`, {
        policy: C(),
        map: u?.texture ?? null,
        batched: !0,
        name: `tokyo-landmarks`,
      }),
    T = () =>
      ke(`glass`, {
        policy: C(),
        map: u?.texture ?? null,
        opacity: 1,
        name: `tokyo-landmarks-glass`,
      }),
    E = () =>
      ke(`opaque`, {
        policy: C(),
        map: d?.texture ?? null,
        name: `tokyo-landmarks-plaques`,
      });
  function D(e, t, n) {
    let r = Math.cos(e.facing),
      i = Math.sin(e.facing);
    return { x: e.x + t * r - n * i, z: e.z + t * i + n * r };
  }
  let O = () => 420 * Math.min(1, m);
  for (let n = 0; n < o.length; n++) {
    let r = o[n],
      i = Aq(t, r);
    if (!i) continue;
    let [a, u, d, f] = SOe(t, r, i),
      p = (r.clock?.faces ?? []).map((e) => {
        let t = D(i, e.lx, e.lz);
        return { x: t.x, y: i.gy + e.ly, z: t.z, heading: i.facing + e.turn };
      });
    s.push({
      spec: r,
      key: n,
      site: i,
      box: { minX: a, minZ: u, maxX: d, maxZ: f },
      near: -1,
      coarse: -1,
      far: -1,
      cx: (a + d) / 2,
      cy: i.gy + 10,
      cz: (u + f) / 2,
      r: Math.hypot(d - a, f - u) / 2,
      isNear: !1,
      inited: !1,
      hidden: !1,
      dist: 1e9,
      tris: { near: 0, coarse: 0, far: 0 },
      hands: [],
      dials: p,
      lastMinute: -1,
      lastHour: -1,
      bytes: 0,
      buildMs: 0,
      glass: null,
      plaques: null,
    });
    for (let e of r.anchors ?? []) {
      let n = D(i, e.lx, e.lz);
      c[e.key] = {
        x: n.x,
        y: t.groundHeight(n.x, n.z),
        z: n.z,
        heading: i.facing + e.turn,
        name: e.name,
      };
    }
    for (let e of r.volumes ?? []) {
      let t = D(i, e.lx, e.lz);
      l[e.key] = {
        key: e.key,
        landmark: r.id,
        x: t.x,
        z: t.z,
        y0: i.gy + e.y0,
        y1: i.gy + e.y1,
        r: e.r,
        heading: i.facing,
        note: e.note,
      };
    }
    for (let t of r.roofs ?? []) {
      let n = D(i, t.lx0, t.lz0),
        r = D(i, t.lx1, t.lz1);
      e.env?.addRainOccluder?.(
        {
          minX: Math.min(n.x, r.x),
          minZ: Math.min(n.z, r.z),
          maxX: Math.max(n.x, r.x),
          maxZ: Math.max(n.z, r.z),
        },
        i.gy + t.y,
      );
    }
  }
  let k = new Map(s.map((e) => [e.key, e])),
    A = new Map(),
    j = new Map(),
    M = { refused: 0, evicted: 0, retried: 0 },
    ee = (e, t) => `tokyo-landmarks:${e}:${t}`,
    te = (e) => (e.spec.interior ? `lm-interior` : `lm-near`);
  function ne(e, t, n) {
    A.set(ee(e, t), { layer: e, key: t, v: n.n, i: n.ni });
  }
  let re = (e, t) => A.delete(ee(e, t));
  function ie(e, t) {
    let n = ee(e, t),
      r = j.get(n);
    return r !== void 0 && (j.delete(n), performance.now() - r < 3e4);
  }
  function ae(e, t, n) {
    if (!n.n || !n.ni) return (re(e, t), -1);
    if (ie(e, t)) return (ne(e, t, n), -1);
    let r = f.write(n);
    return (r < 0 ? (M.refused++, ne(e, t, n)) : re(e, t), r);
  }
  let oe = (e) => e.state !== `built`,
    se = (e, t, n) =>
      Math.hypot(
        Math.max(e.minX - t, 0, t - e.maxX),
        Math.max(e.minZ - n, 0, n - e.maxZ),
      );
  function ce() {
    if (!f || !A.size) return;
    let t = e.player?.position;
    if (!t) return;
    let n = (e) =>
        e === `lm-near`
          ? be.radius()
          : e === `lm-interior`
            ? Pq.interiorRange * m + Pq.nearPad
            : e === `lm-coarse`
              ? ve.radius()
              : ye.radius(),
      r = null,
      i = 1 / 0;
    for (let e of A.values()) {
      let a = k.get(e.key);
      if (!a) continue;
      let o = se(a.box, t.x, t.z);
      o <= n(e.layer) && o < i && ((r = e), (i = o));
    }
    if (!r) return;
    if (f.fits(r.v, r.i)) {
      let e = Se.unit(ee(r.layer, r.key));
      e && !oe(e) && (Se.dropUnit(e, `room`), oe(e) && M.retried++);
      return;
    }
    let a = O(),
      o = e.camera.far * 0.985,
      c = ``,
      l = -1,
      u = -1,
      d = (e, t, r, a, o, s) => {
        if (r < 0) return;
        let d =
          !o && (s || a > n(e))
            ? 1e6 + a
            : o && s && a > 250 && a > i + 150
              ? a
              : -1;
        d > u && ((u = d), (c = e), (l = t));
      };
    for (let e of s) {
      let n = se(e.box, t.x, t.z);
      if (n < i + 40) continue;
      let r = e.near >= 0 && e.isNear && !e.hidden,
        s = e.coarse >= 0 && !r && e.dist < a && !e.hidden,
        c = e.far >= 0 && !r && !s && e.dist < o && !e.hidden;
      (d(te(e), e.key, e.near, n, r, e.coarse >= 0 || e.far >= 0),
        d(`lm-coarse`, e.key, e.coarse, n, s, e.far >= 0),
        d(`lm-far`, e.key, e.far, n, c, !1));
    }
    if (l < 0) return;
    let p = ee(c, l),
      h = Se.unit(p);
    h &&
      !oe(h) &&
      (Se.dropUnit(h, `evict`),
      oe(h) && (j.set(p, performance.now()), M.evicted++));
  }
  let le = new je(4096, 6144),
    ue = new je(4096, 6144),
    de = new je(64, 96),
    fe = null,
    pe = (n) => {
      let r = u;
      return {
        plan: t,
        A: r,
        c: (e) => r.cell(e),
        site: n.site,
        season: Cm(e),
      };
    };
  function* me(e, t, n) {
    let r = t(e, n);
    r && typeof r.next == `function` && (yield* r);
  }
  let he = (e, t, n, r, i) => {
    (t.reset(),
      (e.w = t),
      e.frame(n.site.x, n.site.gy, n.site.z, n.site.facing),
      (e.coarse = r),
      (e.colliders = i));
  };
  function ge(e, t, n, r, i) {
    (t.reset(),
      (e.w = t),
      e.frame(0, 0, 0, 0),
      (e.coarse = !1),
      (e.colliders = null),
      e.col(1381135).mat(0.4, 0.6, 0, 0));
    let a = -0.02;
    (e.quad(r / 2, -i, a, -r / 2, -i, a, -r * 0.18, n, a, r * 0.18, n, a),
      e.quad(
        -r / 2,
        -i,
        0.02,
        r / 2,
        -i,
        0.02,
        r * 0.18,
        n,
        0.02,
        -r * 0.18,
        n,
        0.02,
      ),
      e.obox(0, 0, 0, r * 0.6, r * 0.6, 0.05));
  }
  function _e(t) {
    let n = e.statics;
    for (let e of t)
      e.kind === `obb`
        ? n.addOBB(e.cx, e.cz, e.hx, e.hz, e.h, e.y0, e.y1, e.tag)
        : e.kind === `circle`
          ? n.addCircle(e.x, e.z, e.r, e.y0, e.y1, e.tag)
          : n.addFloor(e.cx, e.cz, e.hx, e.hz, e.y0, e.y1, e.h, e.tag);
  }
  let ve = {
      name: `lm-coarse`,
      radius: () => O() + Pq.coarsePad,
      dropMargin: Pq.coarseDrop,
      dropAfterS: 12,
      keys: s.filter((e) => !e.spec.interior).map((e) => e.key),
      box: (e) => k.get(e).box,
      *build(t) {
        let n = k.get(t);
        return !n || !u || !fe || !f
          ? null
          : (he(fe, ue, n, !0, null),
            yield* me(fe, n.spec.build, pe(n)),
            {
              bytes: ue.n * 28 + ue.ni * 4,
              tris: ue.ni / 3,
              colliders: 0,
              upload: () => {
                let t = f;
                ((n.coarse = ae(`lm-coarse`, n.key, ue)),
                  !(n.coarse < 0) &&
                    ((n.tris.coarse = t.trisOf(n.coarse)),
                    n.near < 0 &&
                      (t.sphereOf(n.coarse, Lq),
                      ([n.cx, n.cy, n.cz, n.r] = Lq)),
                    e.renderer.uploadDraw?.([t.mesh]),
                    (h = 0)));
              },
            });
      },
      dropped(e) {
        let t = k.get(e);
        t &&
          f &&
          (f.free(t.coarse), (t.coarse = -1), re(`lm-coarse`, e), (h = 0));
      },
    },
    ye = {
      name: `lm-far`,
      radius: () => e.camera.far + Pq.farPad,
      dropMargin: Pq.farDrop,
      dropAfterS: 20,
      keys: s.map((e) => e.key),
      box: (e) => k.get(e).box,
      *build(t) {
        let n = k.get(t);
        if (!n || !u || !fe || !f) return null;
        (he(fe, ue, n, !0, null), yield* me(fe, n.spec.far, pe(n)));
        let r = ue.n * 28 + ue.ni * 4,
          i = ue.n;
        return {
          bytes: r,
          tris: ue.ni / 3,
          colliders: 0,
          upload: () => {
            let t = f;
            ((n.far = ae(`lm-far`, n.key, ue)),
              !(n.far < 0) &&
                ((n.tris.far = t.trisOf(n.far)),
                (v.far.tris += n.tris.far),
                (v.far.vertices += i),
                n.near < 0 &&
                  n.coarse < 0 &&
                  (t.sphereOf(n.far, Lq),
                  ([n.cx, n.cy, n.cz] = Lq),
                  (n.r = Math.max(n.r * 0.6, Lq[3]))),
                e.renderer.uploadDraw?.([t.mesh]),
                (h = 0)));
          },
        };
      },
      dropped(e) {
        let t = k.get(e);
        (re(`lm-far`, e),
          !(!t || !f || t.far < 0) &&
            ((v.far.tris -= t.tris.far),
            f.free(t.far),
            (t.far = -1),
            (t.tris.far = 0),
            (h = 0)));
      },
    },
    be = {
      name: `lm-near`,
      radius: () => Pq.nearRange * m + Pq.nearPad,
      dropMargin: Pq.nearDrop,
      dropAfterS: 10,
      keys: s.filter((e) => !e.spec.interior).map((e) => e.key),
      box: (e) => k.get(e).box,
      *build(t) {
        let n = k.get(t);
        if (!n || !u || !fe || !f) return null;
        let r = performance.now(),
          i = [];
        (he(fe, le, n, !1, i),
          yield* me(fe, n.spec.build, pe(n)),
          (n.buildMs = performance.now() - r));
        let a = e.statics.beginGroup();
        try {
          _e(i);
        } finally {
          e.statics.endGroup();
        }
        let o = le.n * 28 + le.ni * 4;
        return {
          bytes: o,
          tris: le.ni / 3,
          colliders: i.length,
          statics: a,
          upload: () => {
            let t = f;
            if (((n.near = ae(te(n), n.key, le)), !(n.near < 0))) {
              if (
                ((n.tris.near = t.trisOf(n.near)),
                (n.bytes = o),
                t.sphereOf(n.near, Lq),
                ([n.cx, n.cy, n.cz, n.r] = Lq),
                n.spec.clock && fe)
              ) {
                let e = n.spec.clock.r;
                for (let r of n.dials) {
                  ge(fe, de, e * 0.55, e * 0.12, e * 0.12);
                  let i = t.write(de);
                  ge(fe, de, e * 0.82, e * 0.08, e * 0.14);
                  let a = t.write(de);
                  n.hands.push({ hour: i, minute: a, ...r });
                }
                n.lastMinute = -1;
              }
              (e.renderer.uploadDraw?.([t.mesh]), (n.inited = !1), (h = 0));
            }
          },
        };
      },
      dropped(e) {
        let t = k.get(e);
        if (t && f) {
          f.free(t.near);
          for (let e of t.hands) (f.free(e.hour), f.free(e.minute));
          ((t.hands.length = 0),
            (t.near = -1),
            re(te(t), e),
            (t.bytes = 0),
            (h = 0));
        }
      },
    },
    xe = () => {
      let r = n.get(`spawn`);
      if (r) {
        let [e, t] = r.split(`,`).map(Number);
        if (Number.isFinite(e) && Number.isFinite(t)) return { x: e, z: t };
      }
      let i = e.state?.data?.pos;
      return i && Number.isFinite(i.x) && Number.isFinite(i.z)
        ? { x: i.x, z: i.z }
        : t.spawns.start;
    },
    Se = new Zn(e, {
      spawn: xe,
      owner: `tokyo-landmarks`,
      popRadius: () => jq * m,
      requestRadius: () => Math.min(200, O()),
    });
  if (!i) {
    (Se.addLayer(ye), Se.addLayer(ve), Se.addLayer(be));
    let e = s.filter((e) => e.spec.interior).map((e) => e.key);
    e.length &&
      Se.addLayer({
        ...be,
        name: `lm-interior`,
        radius: () => Pq.interiorRange * m + Pq.nearPad,
        dropMargin: Pq.interiorDrop,
        keys: e,
      });
  }
  function Ce(e, t) {
    if (!f) return;
    let n = t % 12,
      r = (t * 60) % 60;
    for (let t of e.hands)
      for (let [e, i] of [
        [t.hour, (n / 12) * Math.PI * 2],
        [t.minute, (Math.floor(r) / 60) * Math.PI * 2],
      ])
        (Fq.makeTranslation(t.x, t.y, t.z),
          Iq.makeRotationY(-t.heading),
          Fq.multiply(Iq),
          Iq.makeRotationZ(i),
          Fq.multiply(Iq),
          f.setMatrix(e, Fq, t.x, t.y, t.z));
  }
  function we() {
    if (!f) return;
    let t = e.camera.position,
      n = e.camera.far * 0.985,
      r = e.quality.shadows !== !1,
      i = O();
    for (let e of s) {
      let a = Math.max(0, Math.hypot(t.x - e.cx, t.y - e.cy, t.z - e.cz) - e.r),
        o = (e.spec.near ?? jq) * m;
      (e.inited
        ? (e.isNear ? a > o * 1.08 : a < o) && (e.isNear = !e.isNear)
        : (e.isNear = a < o),
        (e.inited = !0),
        (e.dist = a));
      let s = !e.hidden,
        c = e.near >= 0 && e.isNear,
        l = e.coarse >= 0 && !c && a < i;
      (f.setMain(e.near, s && c),
        f.setMain(e.coarse, s && l),
        f.setMain(e.far, s && !c && !l && a < n),
        f.setShadow(e.near, s && r && c && a < EOe));
      for (let t of e.hands)
        (f.setMain(t.hour, s && c), f.setMain(t.minute, s && c));
      (e.glass && (e.glass.visible = s && c),
        e.plaques && (e.plaques.visible = s && c));
    }
    f.commit();
  }
  function Ee() {
    let t = 12;
    try {
      t = e.env.hour;
    } catch {
      return;
    }
    if (Number.isFinite(t))
      for (let n of s) {
        if (!n.spec.clock) continue;
        let r = Math.floor(t * 60);
        r !== n.lastMinute && n.hands.length && ((n.lastMinute = r), Ce(n, t));
        let i = Math.floor(t) % 24;
        if (
          n.lastHour >= 0 &&
          i !== n.lastHour &&
          n.spec.clock.melody !== `none`
        ) {
          let t = i % 12 == 0 ? 12 : i % 12;
          _ = i;
          let r = n.dials[0];
          e.events.emit(`landmark:chime`, {
            id: n.spec.id,
            hour: i,
            strikes: t,
            melody: n.spec.clock.melody,
            x: r?.x ?? n.cx,
            y: r?.y ?? n.cy,
            z: r?.z ?? n.cz,
          });
        }
        n.lastHour = i;
      }
  }
  return {
    name: `landmarks`,
    fireworks() {},
    stopFireworks() {},
    fireworksActive: !1,
    dayOfWeek: 0,
    towerColor: 16777215,
    tower: null,
    anchors: c,
    trail: [],
    volumes: l,
    get lastChime() {
      return _;
    },
    facing(e) {
      let n = s.find((t) => t.spec.id === e);
      return n ? n.site.facing : t.landmark(e)?.facing;
    },
    get batchMaterial() {
      return p;
    },
    setHidden(e, t, n = !1) {
      let r = s.find((t) => t.spec.id === e);
      r && r.hidden !== t && ((r.hidden = t), n ? we() : (h = 0));
    },
    ensureResident(e, t, n) {
      return i ? Promise.resolve() : Se.ensureResident(e, t, n);
    },
    unbuiltNear(e, t, n = 150) {
      return !i && Se.unbuiltNear(e, t, n);
    },
    onArrival(e) {
      Se.onArrival(e);
    },
    onPackBuilt(e) {
      Se.onPackBuilt(e);
    },
    onPackDropped(e) {
      Se.onPackDropped(e);
    },
    async init() {
      if (i) return;
      let t = performance.now(),
        n = e.region.signage.fontsReady;
      (n && (await n.catch(() => !1)),
        (u = await pme(
          e.quality,
          e.region.signage.fonts,
          Math.min(8, e.renderer.gl.capabilities.getMaxAnisotropy()),
          () => e.yieldFrame(),
        )),
        (v.atlasMs = Math.round(performance.now() - t)),
        (v.texMB = +(u.bytes / 1048576).toFixed(2)),
        (p = w()),
        Te(u.texture));
      let r = S() ? Nq.low : Nq.high;
      ((f = new ZS(p, DOe, r.vertices, r.indices)),
        (f.mesh.userData.owner = `tokyo-landmarks`),
        e.scene.add(f.mesh),
        (fe = new Ope(le, u.cell(`white`))));
      for (let t of s) {
        if (!t.spec.glass) continue;
        let n = new je(1024, 1536);
        if ((he(fe, n, t, !1, null), t.spec.glass(fe, pe(t)), !n.n)) continue;
        let r = new a(n.build(), T());
        ((r.name = `tokyo-landmarks-glass:${t.spec.id}`),
          (r.userData.owner = `tokyo-landmarks`),
          (r.castShadow = r.receiveShadow = !1),
          (r.visible = !1),
          e.scene.add((t.glass = r)));
      }
      if (s.some((e) => e.spec.plaques)) {
        ((d = bme(
          S(),
          e.region.signage.fonts,
          Math.min(S() ? 4 : 8, e.renderer.gl.capabilities.getMaxAnisotropy()),
        )),
          (v.texMB = +((u.bytes + d.bytes) / 1048576).toFixed(2)),
          Te(d.texture));
        let t = d;
        for (let n of s) {
          if (!n.spec.plaques) continue;
          let r = new je(64, 96);
          if (
            (he(fe, r, n, !1, null), n.spec.plaques(fe, (e) => t.cell(e)), !r.n)
          )
            continue;
          let i = new a(r.build(), E());
          ((i.name = `tokyo-landmarks-plaques:${n.spec.id}`),
            (i.userData.owner = `tokyo-landmarks`),
            (i.castShadow = !1),
            (i.receiveShadow = !0),
            (i.visible = !1),
            e.scene.add((n.plaques = i)));
        }
      }
      await e.yieldFrame();
      let o = xe();
      await Se.buildNow(o.x, o.z, (t) => e.loading(`landmarks`, t));
      for (let e of s) e.near >= 0 && (e.inited = !1);
      (Ee(), we());
      try {
        (e.renderer.preupload?.(u.texture),
          d && e.renderer.preupload?.(d.texture),
          e.renderer.uploadDraw?.([f.mesh]));
      } catch {}
      v.initMs = Math.round(performance.now() - t);
      let c = f.usage();
      console.info(
        `[init] tokyo landmarks ${v.initMs}ms (atlas ${v.atlasMs}ms ${v.texMB} MB; ${s.length} landmarks, far bodies ${v.far.tris} tris; near ${
          s
            .filter((e) => e.near >= 0)
            .map((e) => e.spec.id)
            .join(`,`) || `none`
        }, coarse ${s.filter((e) => e.coarse >= 0).length}; pool ${c.usedMb} / ${c.mb} MB)`,
      );
    },
    start() {
      if (!i) {
        (e.events.on(`game:ready`, () => Se.start()),
          e.events.on(`quality:changed`, () => {
            ((m = Mq[e.quality.level] ?? 1), (h = 0));
            let t = w();
            f && f.mesh.material !== t && (f.mesh.material = p = t);
            let n = T();
            for (let e of s) e.glass && (e.glass.material = n);
            let r = E();
            for (let e of s) e.plaques && (e.plaques.material = r);
          }));
        for (let n of s) {
          if (!n.spec.blip) continue;
          let r = t.landmark(n.spec.lot ?? n.spec.id),
            i = n.spec.name ?? (r ? { zh: r.name.zh, en: r.name.en } : void 0);
          try {
            e.ui.addBlip(`lm-${n.spec.id}`, {
              x: (n.box.minX + n.box.maxX) / 2,
              z: (n.box.minZ + n.box.maxZ) / 2,
              icon: `landmark`,
              label: i ? { zh: i.zh, en: i.en } : void 0,
              mapOnly: !0,
            });
          } catch {}
        }
        n.has(`debug`) &&
          (window.__lmTokyo = {
            groups: s,
            stats: v,
            volumes: l,
            anchors: c,
            perf: y,
            residency: Se,
            get pool() {
              return f?.usage();
            },
            get pressure() {
              return { ...M, waiting: [...A.keys()], parked: j.size };
            },
            get views() {
              return {
                ...(f?.stats ?? {}),
                lod: s
                  .map(
                    (e) =>
                      `${e.spec.id}:${(e.near >= 0 && e.isNear ? `n` : e.coarse >= 0 && e.dist < O() ? `c` : `f`) + (e.near >= 0 ? `N` : ``) + (e.coarse >= 0 ? `C` : ``)}@${Math.round(e.dist)}`,
                  )
                  .join(` `),
              };
            },
            state: () => Se.state(!0),
            resStats: () => Se.stats(),
            log: Se.log,
          });
      }
    },
    update(e) {
      if (i || !f) return;
      let t = performance.now();
      (Se.update(e),
        (g -= e),
        g <= 0 && ((g = 0.5), ce()),
        Ee(),
        (h -= e),
        h <= 0 && ((h = 0.2), we()));
      let n = performance.now() - t;
      ((y.avg += (n - y.avg) * 0.05), n > y.max && (y.max = n));
    },
    prewarm() {
      if (i || !u) return [];
      let e = C(),
        t = x.get(e);
      if (!t) {
        let n = new je(64, 96),
          r = u.cell(`white`);
        n.box(0, 0, 0, 1, 1, 1, r.u0, r.v0, r.u0, r.v0);
        let i = new ZS(w(), 1, 32, 48),
          o = i.write(n);
        if (
          (i.setMain(o, !0),
          i.setShadow(o, !0),
          i.commit(),
          (i.mesh.frustumCulled = !1),
          (i.mesh.name = `tokyo-landmarks-proto`),
          (i.mesh.onBeforeRender = b.prototype.onBeforeRender),
          (i.mesh.onBeforeShadow = b.prototype.onBeforeShadow),
          i.mesh.setVisibleAt(0, !0),
          (t = [i.mesh]),
          s.some((e) => e.spec.glass))
        ) {
          let e = new je(64, 96);
          e.box(0, 0, 0, 1, 1, 1, r.u0, r.v0, r.u0, r.v0);
          let n = new a(e.build(), T());
          ((n.frustumCulled = !1),
            (n.name = `tokyo-landmarks-glass-proto`),
            t.push(n));
        }
        if (d) {
          let e = new je(64, 96);
          e.box(0, 0, 0, 1, 1, 1, r.u0, r.v0, r.u0, r.v0);
          let n = new a(e.build(), E());
          ((n.frustumCulled = !1),
            (n.name = `tokyo-landmarks-plaques-proto`),
            t.push(n));
        }
        x.set(e, t);
      }
      return t;
    },
  };
}
