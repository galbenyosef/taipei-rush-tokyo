// tokyo__assets__region-tokyo-BcM3fReU 159 — spec
// Lines 67193-67794 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function cR(e) {
  let t = e.plan,
    n = e.params,
    r = n.get(`lmOnly`)?.split(`,`).filter(Boolean) ?? null,
    i = n.get(`landmarks`) === `0`,
    a = [...qL, ...(n.get(`lmKit`) === `1` ? [QL] : [])].filter(
      (e) => !r || r.includes(e.id),
    ),
    o = [],
    s = {},
    c = {},
    l = null,
    u = null,
    d = null,
    f = null,
    m = tR[e.quality.level] ?? 1,
    h = 0,
    g = -1,
    _ = { far: { tris: 0, vertices: 0 }, texMB: 0, initMs: 0, atlasMs: 0 },
    y = { avg: 0, max: 0 },
    b = new Map(),
    x = () => !!e.quality.mobile || e.quality.level === `low`,
    S = () => e.quality.materials,
    C = () =>
      ge(`opaque`, {
        policy: S(),
        map: l?.texture ?? null,
        batched: !0,
        name: `tokyo-landmarks`,
      }),
    w = () =>
      ge(`glass`, {
        policy: S(),
        map: l?.texture ?? null,
        opacity: 1,
        name: `tokyo-landmarks-glass`,
      }),
    T = () =>
      ge(`opaque`, {
        policy: S(),
        map: u?.texture ?? null,
        name: `tokyo-landmarks-plaques`,
      });
  function E(e, t, n) {
    let r = Math.cos(e.facing),
      i = Math.sin(e.facing);
    return { x: e.x + t * r - n * i, z: e.z + t * i + n * r };
  }
  let D = () => 420 * Math.min(1, m);
  for (let n = 0; n < a.length; n++) {
    let r = a[n],
      i = JL(t, r);
    if (!i) continue;
    let [l, u, d, f] = YL(t, r, i),
      p = (r.clock?.faces ?? []).map((e) => {
        let t = E(i, e.lx, e.lz);
        return { x: t.x, y: i.gy + e.ly, z: t.z, heading: i.facing + e.turn };
      });
    o.push({
      spec: r,
      key: n,
      site: i,
      box: { minX: l, minZ: u, maxX: d, maxZ: f },
      near: -1,
      coarse: -1,
      far: -1,
      cx: (l + d) / 2,
      cy: i.gy + 10,
      cz: (u + f) / 2,
      r: Math.hypot(d - l, f - u) / 2,
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
      let n = E(i, e.lx, e.lz);
      s[e.key] = {
        x: n.x,
        y: t.groundHeight(n.x, n.z),
        z: n.z,
        heading: i.facing + e.turn,
        name: e.name,
      };
    }
    for (let e of r.volumes ?? []) {
      let t = E(i, e.lx, e.lz);
      c[e.key] = {
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
      let n = E(i, t.lx0, t.lz0),
        r = E(i, t.lx1, t.lz1);
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
  let O = new Map(o.map((e) => [e.key, e])),
    k = new ce(4096, 6144),
    A = new ce(4096, 6144),
    j = new ce(64, 96),
    M = null,
    ee = (e) => {
      let n = l;
      return { plan: t, A: n, c: (e) => n.cell(e), site: e.site };
    };
  function* te(e, t, n) {
    let r = t(e, n);
    r && typeof r.next == `function` && (yield* r);
  }
  let ne = (e, t, n, r, i) => {
    (t.reset(),
      (e.w = t),
      e.frame(n.site.x, n.site.gy, n.site.z, n.site.facing),
      (e.coarse = r),
      (e.colliders = i));
  };
  function N(e, t, n, r, i) {
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
  function re(t) {
    let n = e.statics;
    for (let e of t)
      e.kind === `obb`
        ? n.addOBB(e.cx, e.cz, e.hx, e.hz, e.h, e.y0, e.y1, e.tag)
        : e.kind === `circle`
          ? n.addCircle(e.x, e.z, e.r, e.y0, e.y1, e.tag)
          : n.addFloor(e.cx, e.cz, e.hx, e.hz, e.y0, e.y1, e.h, e.tag);
  }
  let ie = {
      name: `lm-coarse`,
      radius: () => D() + iR.coarsePad,
      dropMargin: iR.coarseDrop,
      dropAfterS: 12,
      keys: o.map((e) => e.key),
      box: (e) => O.get(e).box,
      *build(t) {
        let n = O.get(t);
        return !n || !l || !M || !d
          ? null
          : (ne(M, A, n, !0, null),
            yield* te(M, n.spec.build, ee(n)),
            {
              bytes: A.n * 28 + A.ni * 4,
              tris: A.ni / 3,
              colliders: 0,
              upload: () => {
                let t = d;
                ((n.coarse = t.write(A)),
                  !(n.coarse < 0) &&
                    ((n.tris.coarse = t.trisOf(n.coarse)),
                    n.near < 0 &&
                      (t.sphereOf(n.coarse, sR),
                      ([n.cx, n.cy, n.cz, n.r] = sR)),
                    e.renderer.uploadDraw?.([t.mesh]),
                    (h = 0)));
              },
            });
      },
      dropped(e) {
        let t = O.get(e);
        t && d && (d.free(t.coarse), (t.coarse = -1), (h = 0));
      },
    },
    ae = {
      name: `lm-near`,
      radius: () => iR.nearRange * m + iR.nearPad,
      dropMargin: iR.nearDrop,
      dropAfterS: 10,
      keys: o.map((e) => e.key),
      box: (e) => O.get(e).box,
      *build(t) {
        let n = O.get(t);
        if (!n || !l || !M || !d) return null;
        let r = performance.now(),
          i = [];
        (ne(M, k, n, !1, i),
          yield* te(M, n.spec.build, ee(n)),
          (n.buildMs = performance.now() - r));
        let a = e.statics.beginGroup();
        try {
          re(i);
        } finally {
          e.statics.endGroup();
        }
        let o = k.n * 28 + k.ni * 4;
        return {
          bytes: o,
          tris: k.ni / 3,
          colliders: i.length,
          statics: a,
          upload: () => {
            let t = d;
            if (((n.near = t.write(k)), !(n.near < 0))) {
              if (
                ((n.tris.near = t.trisOf(n.near)),
                (n.bytes = o),
                t.sphereOf(n.near, sR),
                ([n.cx, n.cy, n.cz, n.r] = sR),
                n.spec.clock && M)
              ) {
                let e = n.spec.clock.r;
                for (let r of n.dials) {
                  N(M, j, e * 0.55, e * 0.12, e * 0.12);
                  let i = t.write(j);
                  N(M, j, e * 0.82, e * 0.08, e * 0.14);
                  let a = t.write(j);
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
        let t = O.get(e);
        if (t && d) {
          d.free(t.near);
          for (let e of t.hands) (d.free(e.hour), d.free(e.minute));
          ((t.hands.length = 0), (t.near = -1), (t.bytes = 0), (h = 0));
        }
      },
    },
    oe = () => {
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
    se = new di(e, {
      spawn: oe,
      owner: `tokyo-landmarks`,
      popRadius: () => $L * m,
      requestRadius: () => Math.min(200, D()),
    });
  i || (se.addLayer(ie), se.addLayer(ae));
  function P(e, t) {
    if (!d) return;
    let n = t % 12,
      r = (t * 60) % 60;
    for (let t of e.hands)
      for (let [e, i] of [
        [t.hour, (n / 12) * Math.PI * 2],
        [t.minute, (Math.floor(r) / 60) * Math.PI * 2],
      ])
        (aR.makeTranslation(t.x, t.y, t.z),
          oR.makeRotationY(-t.heading),
          aR.multiply(oR),
          oR.makeRotationZ(i),
          aR.multiply(oR),
          d.setMatrix(e, aR, t.x, t.y, t.z));
  }
  function le() {
    if (!d) return;
    let t = e.camera.position,
      n = e.camera.far * 0.985,
      r = e.quality.shadows !== !1,
      i = D();
    for (let e of o) {
      let a = Math.max(0, Math.hypot(t.x - e.cx, t.y - e.cy, t.z - e.cz) - e.r),
        o = (e.spec.near ?? $L) * m;
      (e.inited
        ? (e.isNear ? a > o * 1.08 : a < o) && (e.isNear = !e.isNear)
        : (e.isNear = a < o),
        (e.inited = !0),
        (e.dist = a));
      let s = !e.hidden,
        c = e.near >= 0 && e.isNear,
        l = e.coarse >= 0 && !c && a < i;
      (d.setMain(e.near, s && c),
        d.setMain(e.coarse, s && l),
        d.setMain(e.far, s && !c && !l && a < n),
        d.setShadow(e.near, s && r && c && a < eR));
      for (let t of e.hands)
        (d.setMain(t.hour, s && c), d.setMain(t.minute, s && c));
      (e.glass && (e.glass.visible = s && c),
        e.plaques && (e.plaques.visible = s && c));
    }
    d.commit();
  }
  function ue() {
    let t = 12;
    try {
      t = e.env.hour;
    } catch {
      return;
    }
    if (Number.isFinite(t))
      for (let n of o) {
        if (!n.spec.clock) continue;
        let r = Math.floor(t * 60);
        r !== n.lastMinute && n.hands.length && ((n.lastMinute = r), P(n, t));
        let i = Math.floor(t) % 24;
        if (
          n.lastHour >= 0 &&
          i !== n.lastHour &&
          n.spec.clock.melody !== `none`
        ) {
          let t = i % 12 == 0 ? 12 : i % 12;
          g = i;
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
    anchors: s,
    trail: [],
    volumes: c,
    get lastChime() {
      return g;
    },
    facing(e) {
      let n = o.find((t) => t.spec.id === e);
      return n ? n.site.facing : t.landmark(e)?.facing;
    },
    get batchMaterial() {
      return f;
    },
    setHidden(e, t, n = !1) {
      let r = o.find((t) => t.spec.id === e);
      r && r.hidden !== t && ((r.hidden = t), n ? le() : (h = 0));
    },
    ensureResident(e, t, n) {
      return i ? Promise.resolve() : se.ensureResident(e, t, n);
    },
    unbuiltNear(e, t, n = 150) {
      return !i && se.unbuiltNear(e, t, n);
    },
    onArrival(e) {
      se.onArrival(e);
    },
    onPackBuilt(e) {
      se.onPackBuilt(e);
    },
    onPackDropped(e) {
      se.onPackDropped(e);
    },
    async init() {
      if (i) return;
      let t = performance.now(),
        n = e.region.signage.fontsReady;
      (n && (await n.catch(() => !1)),
        (l = await sD(
          e.quality,
          e.region.signage.fonts,
          Math.min(8, e.renderer.gl.capabilities.getMaxAnisotropy()),
          () => e.yieldFrame(),
        )),
        (_.atlasMs = Math.round(performance.now() - t)),
        (_.texMB = +(l.bytes / 1048576).toFixed(2)),
        (f = C()),
        de(l.texture));
      let r = x() ? nR.low : nR.high;
      ((d = new CD(f, rR, r.vertices, r.indices)),
        (d.mesh.userData.owner = `tokyo-landmarks`),
        e.scene.add(d.mesh),
        (M = new _E(k, l.cell(`white`))));
      for (let e of o) {
        let t = ee(e);
        (ne(M, A, e, !0, null),
          e.spec.far(M, t),
          (e.far = d.write(A)),
          (e.tris.far = d.trisOf(e.far)),
          (_.far.tris += e.tris.far),
          (_.far.vertices += A.n),
          e.far >= 0 &&
            (d.sphereOf(e.far, sR),
            ([e.cx, e.cy, e.cz] = sR),
            (e.r = Math.max(e.r * 0.6, sR[3]))));
      }
      for (let t of o) {
        if (!t.spec.glass) continue;
        let n = new ce(1024, 1536);
        if ((ne(M, n, t, !1, null), t.spec.glass(M, ee(t)), !n.n)) continue;
        let r = new p(n.build(), w());
        ((r.name = `tokyo-landmarks-glass:${t.spec.id}`),
          (r.userData.owner = `tokyo-landmarks`),
          (r.castShadow = r.receiveShadow = !1),
          (r.visible = !1),
          e.scene.add((t.glass = r)));
      }
      if (o.some((e) => e.spec.plaques)) {
        ((u = _te(
          x(),
          e.region.signage.fonts,
          Math.min(x() ? 4 : 8, e.renderer.gl.capabilities.getMaxAnisotropy()),
        )),
          (_.texMB = +((l.bytes + u.bytes) / 1048576).toFixed(2)),
          de(u.texture));
        let t = u;
        for (let n of o) {
          if (!n.spec.plaques) continue;
          let r = new ce(64, 96);
          if (
            (ne(M, r, n, !1, null), n.spec.plaques(M, (e) => t.cell(e)), !r.n)
          )
            continue;
          let i = new p(r.build(), T());
          ((i.name = `tokyo-landmarks-plaques:${n.spec.id}`),
            (i.userData.owner = `tokyo-landmarks`),
            (i.castShadow = !1),
            (i.receiveShadow = !0),
            (i.visible = !1),
            e.scene.add((n.plaques = i)));
        }
      }
      await e.yieldFrame();
      let a = oe();
      await se.buildNow(a.x, a.z, (t) => e.loading(`landmarks`, t));
      for (let e of o) e.near >= 0 && (e.inited = !1);
      (ue(), le());
      try {
        (e.renderer.preupload?.(l.texture),
          u && e.renderer.preupload?.(u.texture),
          e.renderer.uploadDraw?.([d.mesh]));
      } catch {}
      _.initMs = Math.round(performance.now() - t);
      let s = d.usage();
      console.info(
        `[init] tokyo landmarks ${_.initMs}ms (atlas ${_.atlasMs}ms ${_.texMB} MB; ${o.length} landmarks, far bodies ${_.far.tris} tris; near ${
          o
            .filter((e) => e.near >= 0)
            .map((e) => e.spec.id)
            .join(`,`) || `none`
        }, coarse ${o.filter((e) => e.coarse >= 0).length}; pool ${s.usedMb} / ${s.mb} MB)`,
      );
    },
    start() {
      if (!i) {
        (e.events.on(`game:ready`, () => se.start()),
          e.events.on(`quality:changed`, () => {
            ((m = tR[e.quality.level] ?? 1), (h = 0));
            let t = C();
            d && d.mesh.material !== t && (d.mesh.material = f = t);
            let n = w();
            for (let e of o) e.glass && (e.glass.material = n);
            let r = T();
            for (let e of o) e.plaques && (e.plaques.material = r);
          }));
        for (let n of o) {
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
            groups: o,
            stats: _,
            volumes: c,
            anchors: s,
            perf: y,
            residency: se,
            get pool() {
              return d?.usage();
            },
            get views() {
              return {
                ...(d?.stats ?? {}),
                lod: o
                  .map(
                    (e) =>
                      `${e.spec.id}:${(e.near >= 0 && e.isNear ? `n` : e.coarse >= 0 && e.dist < D() ? `c` : `f`) + (e.near >= 0 ? `N` : ``) + (e.coarse >= 0 ? `C` : ``)}@${Math.round(e.dist)}`,
                  )
                  .join(` `),
              };
            },
            state: () => se.state(!0),
            resStats: () => se.stats(),
            log: se.log,
          });
      }
    },
    update(e) {
      if (i || !d) return;
      let t = performance.now();
      (se.update(e), ue(), (h -= e), h <= 0 && ((h = 0.2), le()));
      let n = performance.now() - t;
      ((y.avg += (n - y.avg) * 0.05), n > y.max && (y.max = n));
    },
    prewarm() {
      if (i || !l) return [];
      let e = S(),
        t = b.get(e);
      if (!t) {
        let n = new ce(64, 96),
          r = l.cell(`white`);
        n.box(0, 0, 0, 1, 1, 1, r.u0, r.v0, r.u0, r.v0);
        let i = new CD(C(), 1, 32, 48),
          a = i.write(n);
        if (
          (i.setMain(a, !0),
          i.setShadow(a, !0),
          i.commit(),
          (i.mesh.frustumCulled = !1),
          (i.mesh.name = `tokyo-landmarks-proto`),
          (i.mesh.onBeforeRender = v.prototype.onBeforeRender),
          (i.mesh.onBeforeShadow = v.prototype.onBeforeShadow),
          i.mesh.setVisibleAt(0, !0),
          (t = [i.mesh]),
          o.some((e) => e.spec.glass))
        ) {
          let e = new ce(64, 96);
          e.box(0, 0, 0, 1, 1, 1, r.u0, r.v0, r.u0, r.v0);
          let n = new p(e.build(), w());
          ((n.frustumCulled = !1),
            (n.name = `tokyo-landmarks-glass-proto`),
            t.push(n));
        }
        if (u) {
          let e = new ce(64, 96);
          e.box(0, 0, 0, 1, 1, 1, r.u0, r.v0, r.u0, r.v0);
          let n = new p(e.build(), T());
          ((n.frustumCulled = !1),
            (n.name = `tokyo-landmarks-plaques-proto`),
            t.push(n));
        }
        b.set(e, t);
      }
      return t;
    },
  };
}
