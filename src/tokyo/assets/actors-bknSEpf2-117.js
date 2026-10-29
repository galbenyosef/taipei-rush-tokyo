// tokyo/assets/actors-bknSEpf2 117 — pos
// Lines 53089-53454 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function sO(e, t) {
  let n = null,
    r = 1,
    i = [],
    a = [],
    o = -1,
    s = 0,
    c = 0,
    l = [],
    u = null,
    d = null,
    f = () => {
      if (u) return;
      let n = e.params;
      try {
        l =
          n?.get(`pedlib`) === `0`
            ? []
            : JE(
                e.quality.mobile ? `low` : e.quality.level,
                ut ^ 20907,
                t?.specs,
              );
      } catch (e) {
        (console.warn(`[peds] character variants failed`, e), (l = []));
      }
      u = new yT(n?.get(`pedworker`) !== `0`, t?.bodyWorker);
      let r = u;
      r.usesWorker && (d = l.map((e) => r.build(e.desc, 1, hT)));
    };
  try {
    f();
  } catch (e) {
    console.warn(`[peds] body prebuild failed`, e);
  }
  let p = null;
  try {
    p = l.length ? new eO(e, l) : null;
  } catch (e) {
    console.warn(`[peds] avatars unavailable`, e);
  }
  let m = {
    name: `peds`,
    get count() {
      return n?.count ?? 0;
    },
    get density() {
      return r;
    },
    set density(e) {
      ((r = Math.max(0, Math.min(1.5, Number(e) || 0))), n && (n.density = r));
    },
    get stats() {
      return n?.stats ?? oO;
    },
    panic(e, t, r) {
      n?.panic(e, t, r, `generic`);
    },
    spawnFleeing(e, t, r, i) {
      n?.spawnFleeing(e, t, r, i);
    },
    nearest(e, t, r) {
      return n ? n.nearest(e, t, r) : null;
    },
    crowd(e, t, r, a, o, s) {
      if (n) return n.crowd(e, t, r, a, o, s);
      let c = {
        x: e,
        z: t,
        r,
        n: a,
        kinds: o,
        opts: s,
        release: null,
        cancelled: !1,
      };
      return (
        i.push(c),
        () => {
          ((c.cancelled = !0), c.release?.());
        }
      );
    },
    spawnScripted(e, t, r) {
      return n ? n.spawnScripted(e, t, r) : null;
    },
    thin(e, t, r, i) {
      if (n) return n.thin(e, t, r, i);
      let o = null,
        s = !1;
      return (
        a.push(() => {
          !s && n && (o = n.thin(e, t, r, i));
        }),
        () => {
          ((s = !0), o?.());
        }
      );
    },
    clearArea(e, t, r, i) {
      if (n) return n.clearArea(e, t, r, i);
      let o = null,
        s = !1;
      return (
        a.push(() => {
          !s && n && (o = n.clearArea(e, t, r, i));
        }),
        () => {
          ((s = !0), o?.());
        }
      );
    },
    cyclistLoop(e, t, r) {
      if (n) return n.cyclistLoop(e, t, r);
      let i = null,
        o = !1;
      return (
        a.push(() => {
          !o && n && (i = n.cyclistLoop(e, t, r));
        }),
        () => {
          ((o = !0), i?.());
        }
      );
    },
    bodyInfo(e) {
      return n ? n.bodyInfo(e) : null;
    },
    async init() {
      let s = performance.now(),
        c = e.params,
        m = new IC(e.plan);
      try {
        m.addArcades(e.buildings?.arcades ?? []);
        let t = e.env?.paths;
        t?.length && m.addPaths(t);
      } catch (e) {
        console.warn(`[peds] arcades / paths failed`, e);
      }
      let h = performance.now();
      await e.yieldFrame();
      let g = e.buildings,
        _ = new dE(
          e.plan,
          typeof g?.storefront == `function`
            ? (e) => g.storefront(e.id)
            : void 0,
        );
      try {
        _.addFurniture(e.streets, e.transit);
      } catch (e) {
        console.warn(`[peds] street furniture spots failed`, e);
      }
      if (t?.spots)
        try {
          t.spots(_.spots, (e) => _.addRegionSpot(e));
        } catch (e) {
          console.warn(`[peds] region spots failed`, e);
        }
      f();
      let v = await vT.create(
        e.scene,
        170,
        e.quality.level,
        l,
        u,
        d,
        () => e.yieldFrame(),
        (t) => e.loading(`peds`, 0.2 + 0.75 * t),
        t?.bike,
        t?.props,
      );
      d = null;
      try {
        v.setMultiDraw(!!e.renderer?.gl?.extensions?.has?.(`WEBGL_multi_draw`));
      } catch {}
      try {
        let t = e.streets?.lightMap;
        t?.texture &&
          t.xf &&
          ((yw.uLampMap.value = t.texture),
          (yw.uLampXf.value = t.xf),
          (yw.uLampOn.value = c.get(`pedlamp`) === `0` ? 0 : 1));
      } catch (e) {
        console.warn(`[peds] street light map unavailable`, e);
      }
      let y = performance.now();
      (await e.yieldFrame(),
        (n = new gD(
          e,
          m,
          _,
          v,
          new kC(e.scene, {
            scale: e.quality.level === `low` ? 0.5 : 1,
            keepCpu: c.get(`gpumem`) === `0`,
            upload: (t) => e.renderer.gl.initTexture(t),
            table: t?.lines
              ? { lines: t.lines, font: t.font ?? `sans-serif` }
              : null,
          }),
          t,
        )));
      let b = performance.now();
      n.density = r;
      let x = c.get(`peds`);
      if (x !== null) {
        let e = Number(x);
        e === 0 ? (n.enabled = !1) : e > 0 && (n.maxOverride = e);
      }
      (c.get(`pedbubbles`) === `0` && (n.bubbles.enabled = !1),
        c.get(`pedambient`) === `0` && (n.ambientOff = !0));
      let S = c.get(`pedcyclists`);
      if (S !== null) {
        let e = Number(S);
        e === 0 ? (n.cyclistsOff = !0) : e > 0 && (n.cyclistMul = e);
      }
      let C = c.get(`pedrain`);
      C !== null && (n.rainOverride = Math.max(0, Math.min(1, Number(C) || 0)));
      let w = c.get(`pednight`);
      w !== null && (o = Math.max(0, Math.min(1, Number(w) || 0)));
      for (let e of i)
        e.cancelled ||
          (e.release = n.crowd(e.x, e.z, e.r, e.n, e.kinds, e.opts));
      i.length = 0;
      for (let e of a) e();
      if (((a.length = 0), c.has(`pednav`))) {
        let t = [],
          n = [];
        for (let e of m.edges) {
          let r = (e.latMin + e.latMax) / 2;
          for (let i of [e.latMin, r, e.latMax]) {
            t.push(
              e.ax + e.px * i,
              e.y + 0.08,
              e.az + e.pz * i,
              e.bx + e.px * i,
              e.y + 0.08,
              e.bz + e.pz * i,
            );
            let a = e.cross
              ? e.signal
                ? [1, 0.2, 0.2]
                : [1, 0.9, 0.2]
              : i === r
                ? [0.1, 1, 0.3]
                : [0.1, 0.5, 0.2];
            n.push(...a, ...a);
          }
        }
        let r = new le();
        (r.setAttribute(`position`, new I(t, 3)),
          r.setAttribute(`color`, new I(n, 3)));
        let i = new ge(r, new ce({ vertexColors: !0, depthTest: !1 }));
        ((i.renderOrder = 20), e.scene.add(i));
      }
      let T = c.get(`pedcrowd`)?.split(`,`).map(Number);
      if (
        (T &&
          T.length >= 4 &&
          T.every((e) => Number.isFinite(e)) &&
          n.crowd(T[0], T[1], T[2], T[3]),
        p?.enabled)
      ) {
        n.avatars = p;
        let e = performance.now();
        (await p.ready(4e3),
          c.has(`peddebug`) &&
            console.info(
              `[test] peds avatars ready ${(performance.now() - e).toFixed(0)}ms`,
            ));
      }
      c.has(`peddebug`) &&
        console.info(
          `[test] peds init nav ${(h - s).toFixed(1)}ms, spots+meshes ${(y - h).toFixed(1)}ms, bubbles+sim ${(b - y).toFixed(1)}ms edges=${n.nav.edges.length} spots=${n.spots.spots.length}`,
        );
    },
    start() {
      let t = e.events;
      (t.on(`player:attack`, ({ weapon: e, pos: t }) => {
        n &&
          t &&
          (e === `pistol` || e === `smg`
            ? n.panic(t.x, t.z, 45, `gun`)
            : ++c % 3 == 0 && n.panic(t.x, t.z, 5, `melee`));
      }),
        t.on(`crime`, (e) => {
          if (n && e && !e.witnessed && e.pos)
            switch (e.type) {
              case `shooting`:
                n.panic(e.pos.x, e.pos.z, 45, `gun`);
                break;
              case `kill`:
              case `kill_police`:
              case `assault_police`:
                (n.panic(e.pos.x, e.pos.z, 28, `generic`),
                  n.reportCrime(
                    e.type,
                    e.pos.x,
                    e.pos.z,
                    e.severity ?? 2,
                    null,
                  ));
                break;
              case `carjack`:
              case `assault`:
              case `hit_ped`:
                n.reportCrime(e.type, e.pos.x, e.pos.z, e.severity ?? 1, null);
            }
        }),
        t.on(`vehicle:destroyed`, ({ pos: e }) => {
          if (n && e) {
            n.panic(e.x, e.z, 38, `explosion`);
            for (let t of n.peds) {
              if (!t.active || !t.alive) continue;
              let n = Math.hypot(t.x - e.x, t.z - e.z);
              n > 7 ||
                t.body.onDamage?.({
                  amount: (7 - n) * 22,
                  source: `explosion`,
                });
            }
          }
        }),
        t.on(`vehicle:collision`, ({ pos: e, impulse: t }) => {
          n && e && t > 9 && n.panic(e.x, e.z, 9, `melee`);
        }),
        t.on(`fireworks`, ({ x: e, z: t, duration: r }) =>
          n?.lookUp(e, t, 800, Math.min(45, r || 20)),
        ),
        t.on(`player:respawned`, () => n?.clearAmbient()),
        t.on(`weather:changed`, ({ weather: e }) => {
          if (!n || (e !== `rain` && e !== `storm`)) return;
          let t = 0;
          for (let e of n.peds)
            !e.active ||
              !e.visible ||
              e.distP > 30 ||
              t > 1 ||
              (n.say(e, `rain`, !1), t++);
        }),
        t.on(`quality:changed`, () => {
          (n?.render.configure(e.quality.level, e.quality.shadows),
            p?.configure());
        }));
    },
    prewarm() {
      return p?.enabled ? p.prewarm() : [];
    },
    update(e) {
      n && (o >= 0 && (Gt.uNight.value = o), n.update(e));
    },
    lateUpdate(t) {
      n &&
        (n.lateUpdate(t),
        e.params.has(`peddebug`) &&
          ((s -= t),
          s <= 0 &&
            ((s = 3), console.info(`[test] peds ${JSON.stringify(n.stats)}`))));
    },
  };
  return (
    Object.defineProperty(m, "_sim", { get: () => n, enumerable: !1 }),
    m
  );
}
