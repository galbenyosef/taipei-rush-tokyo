// tokyo/assets/tokyo-_rNKO_Y7 04 — math
// Lines 957-2694 of readable/tokyo/assets/tokyo-_rNKO_Y7.pretty.js (statement-aligned).
function fn(e) {
  on = e.plan.districts;
  let t = new Map(),
    n = (e, n, r) => {
      let i = (t.get(e) ?? 0) + 1;
      (t.set(e, i),
        i <= 3 && console.error(`[districts] ${e.id} ${n} failed`, r));
    },
    s = e.params.has(`debug`),
    c = new Set(),
    l = new Set(),
    f = new Set(),
    m = new Set(),
    h = new Set(),
    g = new Set(),
    _ = (e) => h.has(e) || g.has(e),
    v = (e) => c.has(e) && !f.has(e) && !m.has(e),
    y = new Map();
  typeof window < `u` &&
    (window.__packTimes = (e) => {
      let t = {};
      for (let [e, n] of [...y.entries()].sort((e, t) => t[1].max - e[1].max))
        t[e] = { avg: +n.avg.toFixed(3), max: +n.max.toFixed(1) };
      if (e) for (let e of y.values()) e.max = 0;
      return t;
    });
  let b = [],
    S = !1,
    w = [],
    T = [],
    ee = [],
    E = [],
    te = null,
    D = !1,
    ne = null,
    re = new Promise((e) => (ne = e)),
    O = null,
    ie = new Promise((e) => (O = e)),
    k = e.params,
    A = k.get(`residency`),
    ae = k.get(`districts`) === `all` || k.has(`cam`) || k.has(`far`),
    oe = () => A !== `0` && !ae,
    se = C(),
    le = A === `all` || (A !== `0` && !!e.quality.mobile && se >= 1),
    ue = (e) =>
      oe() && !!cn(e) && (le || typeof e.registerMissions == `function`),
    fe = (e) =>
      ue(e) &&
      typeof e.unload == `function` &&
      typeof e.registerMissions == `function`,
    me = Number(k.get(`resr`) ?? 0) || 0,
    j = () => {
      if (!oe()) return 1 / 0;
      if (me > 0) return me;
      let t = e.quality.drawDistance + 180;
      return e.quality.mobile ? Math.max(se >= 2 ? 450 : 600, t) : t;
    },
    he = () => Math.min(j(), e.quality.drawDistance + 180),
    ge = () => Math.min(e.quality.drawDistance * 0.5, 350) + 50,
    _e = () => j() + 300,
    ve = e.quality.mobile
      ? 0
      : Math.max(0, Number(k.get(`resbudget`) ?? 0) || 0),
    M = () => {
      let t = k.get(`spawn`);
      if (t) {
        let [e, n] = t.split(`,`).map(Number);
        if (Number.isFinite(e) && Number.isFinite(n)) return { x: e, z: n };
      }
      let n = e.state.data.pos;
      return n && Number.isFinite(n.x) && Number.isFinite(n.z)
        ? n
        : e.plan.spawns.start;
    },
    N = !1;
  e.events.on(`player:spawned`, () => {
    ((N = !0),
      queueMicrotask(() => {
        let t = e.player?.position;
        t && Ft.ensureResident?.(t.x, t.z);
      }));
  });
  let P = () => {
      let t = e.player?.position ?? M();
      return { x: t.x, z: t.z };
    },
    F = { x: NaN, z: NaN, vx: 0, vz: 0 },
    I = null,
    L = -1e9,
    ye = [],
    be = new Set(),
    xe = new Map(),
    Se = new Map(),
    Ce = new p(),
    we = (t) => {
      let { x: n, z: r } = P(),
        i = j(),
        a = dn(t, n, r),
        o = a,
        s = a,
        c = Math.hypot(F.vx, F.vz);
      if (c > 2.5) {
        let e = Math.min(c, 90) * Qt,
          i = Math.max(1, Math.ceil(e / 60)),
          a = F.vx / c,
          l = F.vz / c;
        for (let c = 1; c <= i; c++) {
          let u = (e * c) / i,
            d = dn(t, n + a * u, r + l * u);
          d < o && (o = d);
          let f = d + u * 0.5;
          f < s && (s = f);
        }
      }
      if (
        (Ce.setFromMatrixPosition(e.camera.matrixWorld),
        Math.abs(Ce.x - n) + Math.abs(Ce.z - r) > 40)
      ) {
        let e = dn(t, Ce.x, Ce.z);
        (e < o && (o = e), e < s && (s = e));
      }
      if (!N) {
        let e = M(),
          n = dn(t, e.x, e.z);
        (n < o && (o = n), n < s && (s = n));
      }
      let l = !1;
      for (let e of ye) {
        let n = dn(t, e.x, e.z);
        n <= e.r && !e.doneAt && (l = !0);
        let r = Number.isFinite(i) ? n - e.r + i : n;
        r < o && (o = r);
      }
      return { d: o, urgent: s, req: l };
    },
    Te = new Map(),
    Ee = new Map(),
    De = (e) => {
      let t = Te.get(e);
      if (t) return t;
      let n = Ee.get(e);
      return (n || Ee.set(e, (n = cn(e) ? un(e) : [])), n);
    },
    Oe = new d();
  function* ke(e) {
    let t = cn(e),
      n = Le.get(e);
    if (!t || !n?.size) return;
    let r = e.residencyBounds ? un(e) : null,
      i = r
        ? {
            minX: Math.min(...r.map((e) => e.minX)) - 50,
            minZ: Math.min(...r.map((e) => e.minZ)) - 50,
            maxX: Math.max(...r.map((e) => e.maxX)) + 50,
            maxZ: Math.max(...r.map((e) => e.maxZ)) + 50,
          }
        : {
            minX: t.minX - 300,
            minZ: t.minZ - 300,
            maxX: t.maxX + 300,
            maxZ: t.maxZ + 300,
          },
      a = new Set(),
      o = (e) => {
        let t = e,
          n = t.geometry;
        if (!n || !(t.isMesh || e.isPoints || e.isLine)) return;
        let r = e;
        if (r.isInstancedMesh) {
          if (!r.count) return;
          if (!r.boundingBox) {
            if (!n.boundingBox && !(n.attributes.position?.array?.length > 0))
              return;
            r.computeBoundingBox();
          }
          Oe.copy(r.boundingBox);
        } else {
          if (!n.boundingBox) {
            let e = n.attributes.position;
            if (!e || !(e.array?.length > 0)) return;
            n.computeBoundingBox();
          }
          Oe.copy(n.boundingBox);
        }
        if (Oe.isEmpty()) return;
        Oe.applyMatrix4(e.matrixWorld);
        let o = Math.max(Oe.min.x, i.minX),
          s = Math.min(Oe.max.x, i.maxX),
          c = Math.max(Oe.min.z, i.minZ),
          l = Math.min(Oe.max.z, i.maxZ);
        if (o <= s && c <= l)
          for (let e = Math.floor(o / 100); e <= Math.floor(s / 100); e++)
            for (let t = Math.floor(c / 100); t <= Math.floor(l / 100); t++)
              a.add((e + 512) * 1024 + (t + 512));
      },
      c = [],
      l = 0,
      u = function* (e) {
        for (c.push(e); c.length;) {
          let e = c.pop();
          for (let t = 0; t < e.children.length; t++) c.push(e.children[t]);
          (o(e), ++l % 150 == 0 && (yield));
        }
      };
    for (let e of [...n]) (e.updateWorldMatrix(!0, !0), yield* u(e));
    for (let [t, n] of [...(Re.get(e) ?? [])])
      Fe.get(n) === e.id && (t.updateWorldMatrix(!0, !0), yield* u(t));
    if (!a.size) return;
    let d = [];
    for (let e of a) {
      let t = Math.floor(e / 1024) - 512,
        n = (e % 1024) - 512,
        i = {
          minX: t * 100,
          minZ: n * 100,
          maxX: (t + 1) * 100,
          maxZ: (n + 1) * 100,
        };
      (r &&
        r.length > 1 &&
        !r.some(
          (e) =>
            i.maxX > e.minX - 50 &&
            i.minX < e.maxX + 50 &&
            i.maxZ > e.minZ - 50 &&
            i.minZ < e.maxZ + 50,
        )) ||
        d.push(i);
    }
    d.length &&
      (Te.set(e, d),
      s &&
        console.info(
          `[districts] ${e.id}: ${d.length} content cells (${Math.round((d.length * 100 * 100) / 1e4) / 100} km², bounds ${Math.round(((t.maxX - t.minX) * (t.maxZ - t.minZ)) / 1e4) / 100} km²)`,
        ));
  }
  let Ae = !1,
    R = async (t) => {
      if (!(Ae || Te.has(t))) {
        Ae = !0;
        try {
          let n = ke(t);
          if (e.work) await e.work.run(n);
          else for (; !n.next().done;);
        } catch (e) {
          console.warn(`[districts] ${t.id} content cells failed`, e);
        } finally {
          (Te.has(t) || Te.set(t, De(t)), (Ae = !1));
        }
      }
    },
    je = (e) => {
      let t = De(e);
      return t.length ? we(t).d : 0;
    },
    Me = (e) => !ue(e) || be.has(e) || je(e) <= j(),
    Ne = (e, t) => {
      (h.add(e),
        b.includes(e) || b.push(e),
        console.warn(
          `[districts] ${e.id} code chunk unavailable — the district stays unbuilt until the page reloads`,
          t,
        ),
        pe(`district ${e.id}`));
    },
    Pe = async (t, r = e, i) => {
      let a = performance.now();
      try {
        if (t.load) {
          let e;
          try {
            e = await ce(t.load(), Xt, `districts: ${t.id} code chunk`);
          } catch (e) {
            return (Ne(t, e), !1);
          }
          (e.init && (t.init = e.init),
            e.start && (t.start = e.start),
            e.update && (t.update = e.update));
        }
        (i?.(), await t.init?.(r));
      } catch (e) {
        n(t, `init`, e);
      }
      c.add(t);
      let o = performance.now() - a;
      return (
        o > 50 && console.info(`[init] districts:${t.id} ${o.toFixed(0)}ms`),
        !0
      );
    },
    Fe = new WeakMap(),
    Ie = new Map();
  for (let e of K) Ie.set(e.id, e);
  let Le = new Map(),
    Re = new Map(),
    ze = (e, t) => {
      if ((Fe.has(t) || Fe.set(t, e.id), Fe.get(t) !== e.id)) return;
      let n = Le.get(e);
      (n || Le.set(e, (n = new Set())), n.add(t));
    },
    Be = (e) => !!cn(e),
    z = null,
    Ve = new Map(),
    He = null,
    Ue = null,
    We = !1,
    Ge = !1,
    Ke = typeof MessageChannel < `u` ? new MessageChannel() : null,
    qe = !1,
    Je = 0,
    Ye = 0,
    Xe = 0,
    Ze = ``,
    Qe = `init start`,
    $e = 0,
    et = !1,
    B = (e) => {
      if (We) {
        let t = performance.now();
        !e && $e > Je && $e < t && (t = $e);
        let n = t - Je;
        n > Ye && ((Ye = n), s && (Ze = `${Qe} → ${e ?? `end of task`}`));
      }
      We = !1;
    };
  Ke &&
    (Ke.port1.onmessage = () => {
      ((qe = !1), B());
    });
  let tt = () => {
      He &&
        (We || (Je = performance.now()),
        (We = !0),
        !et &&
          typeof requestAnimationFrame == `function` &&
          ((et = !0),
          requestAnimationFrame((e) => {
            ((et = !1), ($e = e));
          })),
        Ke && !qe && ((qe = !0), Ke.port2.postMessage(0)));
    },
    nt = (e) => {
      let t = !0;
      return (
        e.traverse((e) => {
          (e.isLight || e.isSkinnedMesh || e.isCamera) && (t = !1);
        }),
        t
      );
    },
    rt = new Map(),
    V = (t) => {
      let n = rt.get(t);
      if (n) return n;
      let r = e.scene,
        i = (n) => {
          for (let i of n) {
            if (
              !i ||
              i.parent !== r ||
              !nt(i) ||
              (ze(t, i), Fe.get(i) !== t.id)
            )
              continue;
            let n = Ve.get(t);
            n && !n.has(i) && (n.add(i), e.renderer.hold?.([i]));
          }
        },
        a = new Map(),
        o = new Proxy(r, {
          get(e, t) {
            if (t === `add`) return (...t) => (e.add(...t), i(t), o);
            if (t === `attach`) return (t) => (e.attach(t), i([t]), o);
            let n = Reflect.get(e, t, e);
            if (typeof n != `function`) return n;
            let r = a.get(t);
            return (
              (!r || r.src !== n) && a.set(t, (r = { src: n, fn: n.bind(e) })),
              r.fn
            );
          },
          set(e, t, n) {
            return Reflect.set(e, t, n, e);
          },
        });
      return (rt.set(t, (n = o)), n);
    },
    it = () => {
      if (Ge) return;
      Ge = !0;
      let t = e.scene,
        n = o.prototype;
      if (n.__tgtaPackRemove) return;
      n.__tgtaPackRemove = 1;
      let r = n.remove;
      n.remove = function (...n) {
        if (n.length) {
          if (this === t) {
            let e = z;
            if (e && !Be(e.p))
              for (let t of n)
                t &&
                  t.parent === this &&
                  !e.before.has(t) &&
                  !Fe.has(t) &&
                  ze(e.p, t);
          } else {
            let r = this;
            for (; r.parent && r.parent !== t;) r = r.parent;
            let i = !!He && We && !e.work?.inFrame && r.parent !== t,
              a =
                Fe.get(r) ??
                (i ? Ue?.id : z && r.parent !== t ? z.p.id : void 0),
              o = a === void 0 ? void 0 : Ie.get(a);
            if (o && fe(o) && !m.has(o)) {
              let e = Re.get(o);
              e || Re.set(o, (e = new Map()));
              for (let t of n) t && t.parent === this && e.set(t, r);
            }
          }
        }
        return r.apply(this, n);
      };
    },
    at = () => {
      let e = (Error().stack ?? ``)
          .split(
            `
`,
          )
          .map((e) => e.trim())
          .filter(
            (e) => e.startsWith(`at `) && !/districts\/index\.ts/.test(e),
          ),
        t = (e) =>
          (e ?? `?`)
            .replace(/^at /, ``)
            .replace(/https?:\/\/[^/]+\//, ``)
            .replace(/\?[^:)]*/, ``);
      return `${t(e[0])} ← ${t(e[1])}`.slice(0, 200);
    },
    H = async () => {
      let t = s ? at() : ``;
      (B(s ? t : void 0), s && (Qe = t), Xe++);
      try {
        await (e.work ? e.work.yield() : e.yieldFrame());
      } finally {
        tt();
      }
    },
    ot = null,
    U = () => {
      let t = e.work;
      if (!t) return t;
      if (ot) return ot;
      let n = (e) =>
        e.finally(() => {
          tt();
        });
      return (
        (ot = new Proxy(t, {
          get(e, t) {
            if (t === `nextFrame`)
              return () => (B(s ? at() : void 0), n(e.nextFrame()));
            if (t === `yield`)
              return () =>
                e.remaining() > 0
                  ? e.yield()
                  : (B(s ? at() : void 0), n(e.yield()));
            if (t === `run`)
              return (t) => (
                B(s ? at() : void 0),
                n(
                  e.run({
                    next: () => {
                      let e = performance.now(),
                        n = t.next(),
                        r = performance.now() - e;
                      return (
                        He &&
                          r > Ye &&
                          ((Ye = r), s && (Ze = `a ctx.work.run() step`)),
                        n
                      );
                    },
                  }),
                )
              );
            let r = Reflect.get(e, t, e);
            return typeof r == `function` ? r.bind(e) : r;
          },
        })),
        ot
      );
    },
    st = null,
    ct = () =>
      (st ??= Object.create(e.plan, {
        pois: { value: e.plan.allPois, enumerable: !0 },
      })),
    W = new Set([`addBox`, `addOBB`, `addCircle`, `addFloor`, `addFloorRect`]),
    G = new Map(),
    lt = new Map(),
    ut = (t) => {
      if (!ue(t)) return e.statics;
      let n = lt.get(t);
      if (!n) {
        let r = G.get(t);
        r || G.set(t, (r = { c: [], f: [] }));
        let i = r;
        ((n = new Proxy(e.statics, {
          get(e, t) {
            let n = Reflect.get(e, t, e);
            return typeof n == `function`
              ? W.has(t)
                ? (...r) => {
                    let a = n.apply(e, r);
                    return (
                      a &&
                        (t === `addFloor` || t === `addFloorRect`
                          ? i.f
                          : i.c
                        ).push(a),
                      a
                    );
                  }
                : n.bind(e)
              : n;
          },
        })),
          lt.set(t, n));
      }
      return n;
    },
    dt = new Map(),
    ft = null,
    pt = (e, t) => {
      if (!ft) {
        let t = [];
        try {
          t = e.list?.() ?? [];
        } catch {}
        ((ft = new Set(t.map((e) => e.id))), queueMicrotask(() => (ft = null)));
      }
      return ft.has(t);
    },
    mt = (t) => {
      let n = e.missions;
      if (!n || !ue(t)) return n;
      let r = dt.get(t);
      return (
        r ||
          ((r = new Proxy(n, {
            get(e, n) {
              let r = Reflect.get(e, n, e);
              return n !== `registerMission` || typeof r != `function`
                ? typeof r == `function`
                  ? r.bind(e)
                  : r
                : (n) => {
                    let i = n && typeof n.id == `string` ? n.id : null;
                    if (i && xe.get(i) === t && pt(e, i)) return !0;
                    let a = r.call(e, n);
                    return (i && !xe.has(i) && xe.set(i, t), a);
                  };
            },
          })),
          dt.set(t, r)),
        r
      );
    },
    ht = new Map(),
    gt = (t) => {
      if (!Be(t) && !ue(t)) return e;
      let n = ht.get(t);
      return (
        n ||
          ht.set(
            t,
            (n = new Proxy(e, {
              get(e, n) {
                return n === `scene`
                  ? Be(t)
                    ? V(t)
                    : e.scene
                  : n === `statics`
                    ? ut(t)
                    : n === `missions`
                      ? mt(t)
                      : Reflect.get(e, n, e);
              },
            })),
          ),
        n
      );
    },
    _t = new Map(),
    vt = (t) => {
      let n = _t.get(t);
      return (
        n ||
          _t.set(
            t,
            (n = new Proxy(e, {
              get(e, n) {
                return n === `yieldFrame`
                  ? H
                  : n === `work`
                    ? U()
                    : n === `plan`
                      ? ct()
                      : n === `scene`
                        ? Be(t)
                          ? V(t)
                          : e.scene
                        : n === `statics`
                          ? ut(t)
                          : n === `missions`
                            ? mt(t)
                            : Reflect.get(e, n, e);
              },
            })),
          ),
        n
      );
    },
    yt = (e, t) => {
      if (!e.storefront || !c.has(e)) return !1;
      try {
        return !!e.storefront(t);
      } catch {
        return !1;
      }
    },
    bt = (t) => {
      let { x: n, z: r } = P(),
        i = e.camera.matrixWorld.elements,
        a = -i[8],
        o = -i[10],
        s = Math.hypot(a, o) || 1;
      ((a /= s), (o /= s));
      let c = e.quality.drawDistance,
        l = null;
      for (let e of t) {
        let t = cn(e),
          i = De(e),
          s = i.length ? we(i) : { d: 0, urgent: 0, req: !1 },
          u = 0;
        if (t && s.urgent > 1) {
          let e = (t.minX + t.maxX) / 2 - n,
            i = (t.minZ + t.maxZ) / 2 - r,
            s = Math.hypot(e, i) || 1;
          u = (e * a + i * o) / s;
        }
        let d = (s.req || be.has(e) ? -1e6 : 0) + s.urgent * (1 - 0.35 * u),
          f = s.req || be.has(e) || s.urgent <= c + 150;
        (!l || d < l.s) && (l = { p: e, d: s.urgent, s: d, urgent: f });
      }
      return l;
    },
    xt = (t, n) => {
      if (!Be(t))
        for (let r of e.scene.children) !n.has(r) && !Fe.has(r) && ze(t, r);
    },
    St = (t, n) => {
      if (!s || !Be(t)) return;
      let r = e.scene.children
        .filter((e) => !n.has(e) && !Fe.has(e) && nt(e))
        .map((e) => e.name || e.type);
      r.length &&
        console.info(
          `[districts] ${t.id}: ${r.length} new scene roots during its build not added through its ctx.scene (not its content): ${r.slice(0, 8).join(`, `)}`,
        );
    },
    Ct = (t) => {
      if (l.has(t)) return;
      l.add(t);
      let r = new Set(e.scene.children);
      try {
        t.start?.(gt(t));
      } catch (e) {
        n(t, `start`, e);
      }
      xt(t, r);
    },
    wt = (t) =>
      document.hidden
        ? e.yieldFrame()
        : new Promise((e) => {
            let n = 0,
              r = () =>
                ++n >= t || document.hidden ? e() : requestAnimationFrame(r);
            requestAnimationFrame(r);
          }),
    Tt = (e, t, n) => {
      for (let r of K) {
        let i = De(r);
        if (!(!i.length || dn(i, e, t) > n) && !v(r) && !_(r)) return !1;
      }
      return !0;
    },
    Et = () => {
      let e = performance.now();
      for (let t = ye.length - 1; t >= 0; t--) {
        let n = ye[t];
        if (n.doneAt) e - n.doneAt > tn && ye.splice(t, 1);
        else {
          let t = e - n.t0 > en;
          (t || Tt(n.x, n.z, n.r)) &&
            (t &&
              console.warn(
                `[districts] ensureResident(${Math.round(n.x)}, ${Math.round(n.z)}) still building after ${en / 1e3} s — continuing`,
              ),
            (n.doneAt = e),
            n.resolve());
        }
      }
    },
    Dt = (e, t, n) =>
      new Promise((r) => {
        let i = {
          x: e,
          z: t,
          r: n,
          t0: performance.now(),
          doneAt: 0,
          resolve: r,
        };
        (ye.push(i),
          s &&
            console.info(
              `[districts] ensureResident(${Math.round(e)}, ${Math.round(t)}, ${Math.round(n)})`,
            ),
          jt(),
          setTimeout(() => {
            i.doneAt || ((i.doneAt = performance.now()), r());
          }, 31e3));
      }),
    Ot = (t, n, r) => {
      let i = [],
        a = (e) => {
          try {
            let t = e();
            t &&
              typeof t.then == `function` &&
              i.push(
                ce(Promise.resolve(t), en, `ensureResident part`).catch((e) => {
                  s &&
                    console.warn(`[districts] ensureResident part failed`, e);
                }),
              );
          } catch (e) {
            s && console.warn(`[districts] ensureResident part failed`, e);
          }
        };
      return (
        a(() => e.buildings?.ensureResident?.(t, n)),
        a(() => e.transit?.ensureResident?.(t, n)),
        a(() => e.culture?.ensureResident?.(t, n)),
        a(() => e.sites?.ensureResident(t, n)),
        r &&
          a(() =>
            e.interiors?.ensure?.(
              { x: t, z: n, radius: 15 },
              { holdS: 30, timeoutS: 10 },
            ),
          ),
        i
      );
    },
    kt = (t, n) => {
      try {
        return !!e.sites?.unbuiltAt(t, n);
      } catch {
        return !1;
      }
    },
    At = null,
    jt = () => {
      let e = At;
      ((At = null), e?.());
    },
    Mt = (e) =>
      new Promise((t) => {
        let n = () => {
            (clearTimeout(r), At === n && (At = null), t());
          },
          r = setTimeout(n, e);
        At = n;
      }),
    Nt = null,
    Pt = (e) =>
      m.has(e)
        ? `dropping`
        : f.has(e) || Nt === e || g.has(e)
          ? `building`
          : c.has(e)
            ? `built`
            : _(e)
              ? `skipped`
              : `dormant`,
    Ft = {
      name: `districts`,
      get packs() {
        return K;
      },
      get pending() {
        let e = 0;
        for (let t of b) (!c.has(t) || f.has(t)) && !_(t) && Me(t) && e++;
        return e;
      },
      get dormant() {
        let e = 0;
        for (let t of b) !c.has(t) && !_(t) && !Me(t) && e++;
        return e;
      },
      claimed(e, t, n, r, i) {
        for (let a = 0; a < K.length; a++) {
          let o = K[a].claims;
          if (o)
            for (let a = 0; a < o.length; a++) {
              let s = o[a];
              if (
                (s.scope === `all` || s.scope === i) &&
                n > s.minX &&
                e < s.maxX &&
                r > s.minZ &&
                t < s.maxZ
              )
                return !0;
            }
        }
        return !1;
      },
      packAt(t, n) {
        return ln(K, e.plan, t, n, cn);
      },
      shopTradesAt(e, t) {
        let n = Ft.packAt(e, t);
        return n?.shopTrades?.length ? n.shopTrades : null;
      },
      storefront(e) {
        for (let t of K)
          if (t.storefront && c.has(t))
            try {
              let n = t.storefront(e);
              if (n) return n;
            } catch {}
        return null;
      },
      ensureResident(e, t, n, r) {
        if (!Number.isFinite(e) || !Number.isFinite(t))
          return Promise.resolve();
        let i = n !== void 0 && n >= 0 ? n : he(),
          a = Ot(e, t, r?.interiors !== !1),
          o = Tt(e, t, i) ? null : Dt(e, t, i);
        return (
          o && a.push(o),
          a.length ? Promise.all(a).then(() => void 0) : Promise.resolve()
        );
      },
      residencyOn() {
        return oe();
      },
      residency() {
        let e = {};
        for (let t of K) e[t.id] = Pt(t);
        return e;
      },
      unbuiltNear(e, t, n) {
        return !Tt(e, t, n ?? he()) || kt(e, t);
      },
      isBuilt(e) {
        return c.has(e);
      },
      packOf(e) {
        return Fe.get(e);
      },
      onPackBuilt(e) {
        w.push(e);
      },
      onPackDropped(e) {
        T.push(e);
      },
      onArrival(e) {
        ee.push(e);
      },
      whenAllBuilt() {
        return re;
      },
      whenResidentBuilt() {
        return ie;
      },
      onPackStart(e) {
        E.push(e);
      },
      async init() {
        it();
        let t = M(),
          n = ge(),
          r = [],
          i = [];
        for (let e of K) {
          let a = cn(e),
            o = a ? dn(un(e), t.x, t.z) : 0;
          ae || !a || o <= n ? r.push(e) : i.push({ p: e, d: o });
        }
        (i.sort((e, t) => e.d - t.d),
          (b = i.map((e) => e.p)),
          r.sort((e, t) => +!cn(e) - !cn(t)));
        let a = !1,
          o = () => {
            if (a) return;
            a = !0;
            let t = e.plan.settleClaimedPois?.((e) =>
              K.some((t) => yt(t, e.id)),
            );
            t &&
              console.info(
                `[init] districts: ${t} POIs in pack-claimed lots dropped (plan.claimedPois)`,
              );
          };
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          (cn(n) || o(), e.loading(`districts: ${n.id}`, t / r.length));
          let i = new Set(e.scene.children);
          z = { p: n, before: i };
          try {
            await Pe(n, gt(n));
          } finally {
            z = null;
          }
          (xt(n, i),
            St(n, i),
            e.loading(`districts: ${n.id}`, (t + 1) / r.length),
            await e.yieldFrame());
        }
        (o(),
          b.length &&
            console.info(
              `[init] districts: ${r.length} built, deferred ${b.map((e) => e.id).join(`, `)}${oe() ? ` (residency on: R ${Math.round(j())} m)` : ``}`,
            ),
          b.length || (ne?.(), O?.()));
      },
      start() {
        S = !0;
        for (let e of K) c.has(e) && Ct(e);
      },
      buildDeferred() {
        return (
          te ||
          ((te = (async () => {
            ((D = !0), it());
            let t = e.quality.mobile ? performance.now() : 0;
            for (;;) {
              (nn(), Et());
              let n = b.filter((e) => !c.has(e) && !_(e) && !m.has(e));
              if (!n.length && !oe()) break;
              let r = n.filter(Me);
              if (!r.length) {
                (n.length || ne?.(), O?.(), await Mt(500));
                continue;
              }
              e.work ? await e.work.nextFrame() : await wt(2);
              let i = bt(r.filter(Me));
              if (!i) continue;
              oe() && performance.now() - L < 4e3 && (await En());
              let a = i.p;
              Nt = a;
              try {
                await sn(i.d, t, i.urgent);
              } finally {
                Nt = null;
              }
              c.has(a) ||
                m.has(a) ||
                ((await qt(gn(a), Zt)) ||
                  (g.add(a),
                  f.delete(a),
                  console.warn(
                    `[districts] ${a.id} deferred build still running after ${Zt / 1e3} s — moving on (it finishes in the background)`,
                  )),
                (t = performance.now()));
            }
            ((D = !1), O?.(), ne?.());
          })()),
          te)
        );
      },
      update(t) {
        let { x: r, z: i } = P();
        if (Number.isFinite(F.x) && t > 0) {
          let e = r - F.x,
            n = i - F.z;
          if (Math.abs(e) + Math.abs(n) > 60)
            ((F.vx = F.vz = 0),
              (L = performance.now()),
              N &&
                (Ft.ensureResident?.(r, i),
                (I =
                  Tt(r, i, ge()) && !kt(r, i) ? null : { x: r, z: i, t: 0 })));
          else {
            let r = Math.min(1, t * 2.5);
            ((F.vx += (e / t - F.vx) * r), (F.vz += (n / t - F.vz) * r));
          }
        }
        if (((F.x = r), (F.z = i), I)) {
          I.t += t;
          let n = ge();
          if (
            (Ce.setFromMatrixPosition(e.camera.matrixWorld),
            I.t > 15 || (Tt(I.x, I.z, n) && !kt(I.x, I.z)))
          )
            I = null;
          else if (Math.hypot(Ce.x - r, Ce.z - i) < 60) {
            let e = I;
            I = null;
            for (let t of ee)
              try {
                t(e.x, e.z, n);
              } catch (e) {
                console.warn(`[districts] arrival hook failed`, e);
              }
          }
        }
        for (let r = 0; r < K.length; r++) {
          let i = K[r];
          if (!i.update || !l.has(i)) continue;
          let a = performance.now();
          try {
            i.update(t, e);
          } catch (e) {
            n(i, `update`, e);
          }
          let o = performance.now() - a,
            s = y.get(i.id);
          (s || y.set(i.id, (s = { avg: 0, max: 0, n: 0 })),
            (s.avg += (o - s.avg) * 0.05),
            o > s.max && (s.max = o),
            s.n++);
        }
        ((_n -= t), _n <= 0 && ((_n = 1), Cn(1)));
      },
      prewarm() {
        let t = [];
        for (let r of K)
          if (r.prewarm && !h.has(r))
            try {
              let n = r.prewarm(e);
              if (n) for (let e of n) e && e.isObject3D && t.push(e);
            } catch (e) {
              n(r, `prewarm`, e);
            }
        let r = t.filter((e) => e.castShadow);
        return (
          r.length &&
            (!It && e.quality.mobile && e.params.get(`lateprewarm`) !== `0`
              ? Rt.push(...r)
              : (Wt(r), Lt(r, () => e.yieldFrame()))),
          t
        );
      },
    },
    It = !1;
  e.events.on(`game:ready`, () => {
    if (((It = !0), !Rt.length)) return;
    let t = Rt.splice(0),
      n = () => (e.work ? e.work.nextFrame() : e.yieldFrame());
    (async () => {
      for (let e of t) (await n(), Wt([e]));
      Lt(t, n);
    })().catch((e) =>
      console.warn(`[districts] late shadow-depth prewarm failed`, e),
    );
  });
  let Lt = (t, n) => {
      e.quality.shadows &&
        e.renderer.warmShadowCasters &&
        e.renderer.warmShadowCasters(t, n).catch((e) => {
          s && console.warn(`[districts] shadow warm failed`, e);
        });
    },
    Rt = [],
    zt = { 0: 1, 1: 0, 2: 2 },
    Bt = null,
    Vt = new WeakMap(),
    Ht = null,
    Ut = (e, t) => {
      let n = e.customDepthMaterial;
      if (!n) {
        if (
          (t.displacementMap && t.displacementScale !== 0) ||
          (t.alphaMap && t.alphaTest > 0) ||
          (t.map && t.alphaTest > 0) ||
          t.alphaToCoverage === !0
        ) {
          let e = Vt.get(t);
          (e || Vt.set(t, (e = new i())), (n = e));
        } else n = Ht ??= new i();
      }
      return (
        (n.visible = t.visible),
        (n.wireframe = t.wireframe),
        (n.side =
          t.shadowSide !== null && t.shadowSide !== void 0
            ? t.shadowSide
            : zt[t.side]),
        (n.alphaMap = t.alphaMap ?? null),
        (n.alphaTest = t.alphaToCoverage === !0 ? 0.5 : t.alphaTest),
        (n.map = t.map ?? null),
        (n.clipShadows = t.clipShadows),
        (n.clippingPlanes = t.clippingPlanes),
        (n.clipIntersection = t.clipIntersection),
        (n.displacementMap = t.displacementMap ?? null),
        (n.displacementScale = t.displacementScale ?? 1),
        (n.displacementBias = t.displacementBias ?? 0),
        n
      );
    },
    Wt = (t) => {
      let n = e.renderer.gl;
      if (!n.shadowMap.enabled || !e.quality.shadows) return 0;
      let i = [];
      e.scene.traverseVisible((e) => {
        e.isLight && i.push(e);
      });
      let o = new r();
      o.children = i;
      let c = new a(),
        l = c,
        d = n.getRenderTarget(),
        f = 0;
      try {
        n.setRenderTarget((Bt ??= new u(1, 1, { depthBuffer: !0 })));
        for (let r of t) {
          let t = r;
          if (
            !r.castShadow ||
            !(t.isMesh || r.isPoints || r.isLine) ||
            !t.material
          )
            continue;
          let i = Array.isArray(t.material) ? t.material : [t.material];
          for (let a of new Set(i)) {
            if (!a || !a.visible) continue;
            let i = Ut(r, a);
            try {
              r.onBeforeShadow(n, r, e.camera, e.camera, t.geometry, i, null);
            } catch {}
            let u = Object.create(r);
            ((u.children = []), (u.material = i), (l.children = [u]));
            try {
              (n.compile(c, e.camera, o), f++);
            } catch (e) {
              s && console.warn(`[districts] shadow-depth prewarm failed`, e);
            }
          }
        }
      } finally {
        (n.setRenderTarget(d), (l.children = []), (o.children = []));
      }
      return f;
    },
    Gt = ({ id: e }) => {
      let t = xe.get(e);
      t && Se.get(t) === e && (Se.delete(t), be.delete(t));
    };
  (e.events.on(`mission:started`, ({ id: e }) => {
    let t = xe.get(e);
    t &&
      (Se.set(t, e),
      v(t) ||
        (be.add(t),
        s &&
          console.info(
            `[districts] mission '${e}' started: building ${t.id} now`,
          ),
        jt()));
  }),
    e.events.on(`mission:completed`, Gt),
    e.events.on(`mission:failed`, Gt),
    e.events.on(`mission:aborted`, Gt));
  let Kt = (e) => new Promise((t) => setTimeout(t, e)),
    qt = (e, t) =>
      new Promise((n) => {
        let r = !1;
        e.then(
          () => ((r = !0), n(!0)),
          (e) => {
            ((r = !0),
              console.warn(`[districts] deferred build failed`, e),
              n(!0));
          },
        );
        let i = 0,
          a = () => {
            r ||
              (document.hidden || (i += 1e3),
              i >= t ? n(!1) : setTimeout(a, 1e3));
          };
        setTimeout(a, 1e3);
      }),
    Jt = new Set(),
    Yt = (e, t = !1) => {
      if (!(!e.registerMissions || (Jt.has(e) && !t))) {
        Jt.add(e);
        try {
          e.registerMissions(gt(e));
        } catch (t) {
          n(e, `registerMissions`, t);
        }
      }
    },
    nn = () => {
      if (oe()) for (let e of b) c.has(e) || _(e) || !ue(e) || Me(e) || Yt(e);
    },
    rn = () => {
      let e = performance.memory;
      return e ? e.usedJSHeapSize / 1048576 : -1;
    },
    an = x() < 12e4,
    sn = async (t, n, r) => {
      if (document.hidden) return;
      let i = !!e.quality.mobile,
        a = r
          ? an
            ? 1200
            : i
              ? 600
              : 0
          : an
            ? 2500
            : i
              ? 600 + (t > e.quality.drawDistance ? 1e3 : 0)
              : 0;
      if (a > 0) {
        let e = n + a - performance.now();
        e > 0 && (await Kt(e));
      }
      if (rn() < 0) return;
      let o = r ? 300 : 1500,
        c = performance.now(),
        l = rn(),
        u = c;
      for (;;) {
        await Kt(150);
        let e = rn(),
          t = performance.now(),
          n = ((e - l) * 1e3) / Math.max(1, t - u);
        if (((l = e), (u = t), n < 60 || t - c > o || document.hidden)) {
          t - c > 300 &&
            s &&
            console.info(
              `[districts] heap gate ${Math.round(t - c)}ms (heap ${Math.round(e)} MB, ${Math.round(n)} MB/s)`,
            );
          return;
        }
      }
    },
    fn = [],
    mn = (e) => {
      (fn.push(`${(performance.now() / 1e3).toFixed(1)}s ${e}`),
        fn.length > 60 && fn.shift());
    },
    hn = new Map(),
    gn = async (t) => {
      let n = new Set(e.scene.children),
        r = new Set();
      (Ve.set(t, r),
        (He = r),
        (Ue = t),
        (We = !1),
        (Ye = 0),
        (Ze = ``),
        (Qe = `init start`),
        (Xe = 0),
        f.add(t));
      let i = (hn.get(t) ?? 0) + 1;
      hn.set(t, i);
      let a = performance.now();
      for (let e of E)
        try {
          e(t);
        } catch (e) {
          console.warn(`[districts] onPackStart hook failed`, e);
        }
      let o = !1;
      try {
        ((o = await Pe(t, vt(t), tt)), tt(), o && S && Ct(t));
      } finally {
        (B(`the end of init + start()`),
          Ve.get(t) === r && Ve.delete(t),
          He === r && ((He = null), (Ue = null)));
      }
      g.delete(t);
      let c = Math.round(performance.now() - a);
      if (
        ((Ye > 50 || s) &&
          console.info(
            `[init] districts:${t.id} deferred build ${c}ms, ${Xe} yields, longest slice ${Ye.toFixed(0)}ms${i > 1 ? ` (rebuild ${i - 1})` : ``}${s && Ze ? ` — ended at ${Ze}` : ``}`,
          ),
        t.storefront)
      )
        for (let n of [...e.plan.claimedPois])
          yt(t, n.id) && e.plan.honorPoi(n.id);
      let l = o
        ? [...r].filter((n) => n.parent === e.scene && Fe.get(n) === t.id)
        : [];
      St(t, n);
      let u = [...r].filter((t) => t.parent !== e.scene);
      u.length && e.renderer.unhold?.(u);
      let d = performance.now();
      if (w.length)
        for (let e of w)
          try {
            await e(t, l);
          } catch (e) {
            console.warn(`[districts] onPackBuilt hook failed`, e);
          }
      (e.renderer.unhold?.(r),
        f.delete(t),
        fe(t) && !Te.has(t) && R(t),
        mn(
          `built ${t.id}${i > 1 ? ` (rebuild ${i - 1})` : ``}: init ${c} ms (longest slice ${Ye.toFixed(0)} ms), pipeline ${Math.round(performance.now() - d)} ms, ${Math.round(je(t))} m`,
        ),
        Et());
    },
    _n = 2,
    vn = new Map(),
    yn = new Map(),
    bn = new Map(),
    xn = (e) => {
      let t = bn.get(e);
      if (t !== void 0) return t;
      let n = new Set(),
        r = new Set(),
        i = 0;
      for (let t of Le.get(e) ?? [])
        t.traverse((e) => {
          let t = e;
          if (t.geometry && !r.has(t.geometry)) {
            r.add(t.geometry);
            for (let e in t.geometry.attributes) {
              let n = t.geometry.attributes[e];
              i +=
                (n.count || 0) *
                (n.itemSize || 0) *
                (n.array?.BYTES_PER_ELEMENT ?? 4);
            }
          }
          for (let e of Array.isArray(t.material)
            ? t.material
            : t.material
              ? [t.material]
              : [])
            for (let t in e) {
              let r = e[t];
              if (r && r.isTexture && !n.has(r)) {
                n.add(r);
                let e = r.userData?.gpuBytes,
                  t = r.image;
                i += e ?? (t?.width ?? 0) * (t?.height ?? 0) * 4 * 1.33;
              }
            }
        });
      return ((t = i / 1048576), bn.set(e, t), t);
    },
    Sn = (t) => {
      if (Se.has(t)) return !0;
      try {
        return !!t.keepResident?.(e);
      } catch (e) {
        return (n(t, `keepResident`, e), !0);
      }
    },
    Cn = (t) => {
      if (!oe() || m.size) return;
      if (!Ae) {
        for (let e of K)
          if (fe(e) && v(e) && l.has(e) && !Te.has(e)) {
            R(e);
            break;
          }
      }
      let n = performance.now(),
        r = _e(),
        i = [];
      for (let e of K) {
        if (!fe(e) || !v(e) || !l.has(e)) {
          vn.delete(e);
          continue;
        }
        if (je(e) <= r || Sn(e) || be.has(e)) {
          (vn.delete(e), yn.set(e, n));
          continue;
        }
        let a = (vn.get(e) ?? 0) + t;
        (vn.set(e, a), a >= $t && i.push(e));
      }
      if (!i.length) return;
      if (ve > 0 && !e.renderer.gpuOom) {
        let e = 0;
        for (let t of K) fe(t) && c.has(t) && (e += xn(t));
        if (e <= ve) return;
      }
      i.sort((e, t) => (yn.get(e) ?? 0) - (yn.get(t) ?? 0));
      let a = i[0];
      (vn.delete(a), kn(a));
    },
    wn = e.renderer.gl.properties,
    Tn = (e) => pn(e, e.isShaderMaterial ? void 0 : wn.get(e).uniforms),
    En = async () => {
      let e = _e();
      for (;;) {
        if (m.size) {
          await Kt(50);
          continue;
        }
        let t = K.find(
          (t) => fe(t) && v(t) && l.has(t) && !be.has(t) && je(t) > e && !Sn(t),
        );
        if (!t) return;
        await kn(t, `jump`);
      }
    },
    Dn = new Map(),
    On = (t) => {
      let n = 0;
      for (let r of t) {
        let t = r,
          i = Array.isArray(t.material)
            ? t.material
            : t.material
              ? [t.material]
              : [];
        for (let t of i) {
          let i = t;
          if (!i || !i.isShaderMaterial) continue;
          let a = `${i.vertexShader}\u0000${i.fragmentShader}`;
          if (!Dn.has(a) && wn.get(i).programs?.size)
            try {
              let t = i.clone();
              ((t.name = `${i.name || `shader`}:keeper`),
                Object.prototype.hasOwnProperty.call(i, `onBeforeCompile`) &&
                  (t.onBeforeCompile = i.onBeforeCompile),
                Object.prototype.hasOwnProperty.call(
                  i,
                  `customProgramCacheKey`,
                ) && (t.customProgramCacheKey = i.customProgramCacheKey));
              for (let e in t.uniforms) {
                let n = t.uniforms[e]?.value;
                n &&
                  (n.isTexture || Array.isArray(n)) &&
                  (t.uniforms[e].value = null);
              }
              let o = e.renderer.gl.info.programs?.length ?? 0;
              if (!e.renderer.compileAs?.(r, t)) continue;
              ((e.renderer.gl.info.programs?.length ?? 0) > o &&
                s &&
                console.info(
                  `[districts] shader keeper '${t.name}' compiled a new program (its key differs from the pack's)`,
                ),
                Dn.set(a, t),
                n++);
            } catch (e) {
              console.warn(`[districts] shader keeper failed`, e);
            }
        }
      }
      return n;
    },
    kn = async (t, r = `far`) => {
      if (m.has(t) || !c.has(t)) return;
      m.add(t);
      let i = performance.now(),
        a = i,
        o = 0,
        s = async () => {
          ((o = Math.max(o, performance.now() - a)),
            e.work ? await e.work.yield() : await e.yieldFrame(),
            (a = performance.now()));
        },
        u = () => (e.work ? e.work.shouldYield() : performance.now() - a > 4),
        d = Math.round(je(t)),
        f = 0,
        p = new Set(),
        h = new Set(),
        g = new Set(),
        _ = 0,
        v = 0,
        y = 0,
        x = 0;
      try {
        let r = new Set(Le.get(t) ?? []);
        for (let n of e.scene.children)
          (Fe.get(n) === t.id || n.userData?.owner === t.id) && r.add(n);
        let i = [],
          a = new Set(),
          o = (e) => {
            if (a.has(e)) return;
            (a.add(e), i.push(e));
            let t = e;
            t.geometry && p.add(t.geometry);
            let n = Array.isArray(t.material)
                ? t.material
                : t.material
                  ? [t.material]
                  : [],
              r = [e.customDepthMaterial, e.customDistanceMaterial];
            for (let e of [...n, ...r]) e && h.add(e);
          };
        for (let e of r) e.traverse(o);
        for (let [n, r] of Re.get(t) ?? []) {
          if (Fe.get(r) !== t.id) continue;
          let i = n;
          for (; i.parent && i.parent !== e.scene;) i = i.parent;
          (i.parent !== e.scene || Fe.get(i) === t.id) && n.traverse(o);
        }
        (Le.delete(t), Re.delete(t));
        for (let e of h) for (let t of Tn(e)) g.add(t);
        x = On(i);
        let c = performance.now();
        l.delete(t);
        try {
          t.unload?.(e);
        } catch (e) {
          n(t, `unload`, e);
        }
        ((f = performance.now() - c), await s());
        let d = [];
        for (let e of r) {
          let t = !1;
          if (
            (e.traverse((e) => {
              e.isLight && (t = !0);
            }),
            t)
          ) {
            (d.push(e), r.delete(e));
            continue;
          }
          e.parent && e.parent.remove(e);
        }
        (d.length &&
          console.warn(
            `[districts] ${t.id}: ${d.length} roots with lights stay in the scene (hide them in unload())`,
          ),
          e.renderer.unhold?.(r),
          (_ = r.size));
        let m = new Set(),
          b = e.scene.children.slice();
        for (let e of b)
          (e.traverse((e) => {
            let t = e;
            t.geometry && p.delete(t.geometry);
            let n = Array.isArray(t.material)
              ? t.material
              : t.material
                ? [t.material]
                : [];
            for (let e of n)
              if (e) {
                h.delete(e);
                for (let t of Tn(e)) (g.delete(t), t.image && m.add(t.image));
              }
          }),
            u() && (await s()));
        e.renderer.pinPrograms?.();
        let S = 0;
        for (let e of i) {
          let t = e;
          try {
            t.isInstancedMesh || t.isBatchedMesh
              ? t.dispose()
              : e.isSkinnedMesh && e.skeleton?.dispose?.();
          } catch {}
          ++S % 64 == 0 && u() && (await s());
        }
        for (let e of p)
          (e.dispose(),
            (e.userData.__tgtaDropped = t.id),
            y++,
            ++S % 32 == 0 && u() && (await s()));
        for (let e of g)
          (e.dispose(),
            m.has(e.image) || de(e, t.id),
            v++,
            ++S % 16 == 0 && u() && (await s()));
        for (let e of h) e.dispose();
        let C = G.get(t);
        if (C) {
          for (let t of C.c) e.statics.remove(t);
          for (let t of C.f) e.statics.removeFloor?.(t);
          ((C.c.length = 0), (C.f.length = 0));
        }
      } catch (e) {
        console.warn(`[districts] ${t.id} drop failed`, e);
      } finally {
        (c.delete(t),
          l.delete(t),
          bn.delete(t),
          vn.delete(t),
          Re.delete(t),
          Yt(t, !0));
        for (let e of T)
          try {
            e(t, { geometries: p, textures: g, materials: h });
          } catch (e) {
            console.warn(`[districts] onPackDropped hook failed`, e);
          }
        (m.delete(t),
          b.includes(t) || b.push(t),
          (o = Math.max(o, performance.now() - a)));
        let e = Math.round(performance.now() - i),
          n = `dropped ${t.id} (${r}, ${d} m): ${_} roots, ${y} geometries, ${v} textures${x ? `, ${x} shader keepers` : ``} in ${e} ms (unload ${f.toFixed(0)} ms, longest slice ${o.toFixed(0)} ms)`;
        (mn(n),
          console.info(`[districts] ${n}`),
          D || ((te = null), Ft.buildDeferred()),
          jt());
      }
    },
    An = (e) => {
      try {
        return e() ?? null;
      } catch {
        return null;
      }
    },
    jn = () => {
      let t = {},
        n = An(() => e.buildings?.residency?.());
      n &&
        (t[`@buildings`] = n.on
          ? `${n.building ? `building` : `built`} (${n.built} built, ${n.building} building, ${n.dormant} dormant chunks, ${n.geoMB.toFixed(1)} MB)`
          : `off`);
      let r = An(() => e.transit?.residency?.());
      if (r) {
        let e = Object.values(r),
          n = (t) => e.filter((e) => String(e).startsWith(t)).length;
        t[`@transit`] =
          `resident (${n(`signs+interior`)} signs+interior, ${n(`interior`)} interior, ${n(`signs`) - n(`signs+interior`)} signs, ${n(`far`)} far stations)`;
      }
      let i = An(() => e.culture?.residency?.());
      if (i) {
        let e = Object.values(i),
          n = e.filter((e) => e === `building`).length,
          r = e.filter((e) => e === `built`).length;
        t[`@culture`] =
          `${n ? `building` : `built`} (${r} built, ${n} building, ${e.length - r - n} dormant areas)`;
      }
      let a = An(() => e.interiors?.residency?.());
      a &&
        (t[`@interiors`] = a.dormant
          ? `dormant`
          : `${a.counts.building ? `building` : `built`} (${a.counts.built} built, ${a.counts.building} building, ${a.counts.warm} warm, ${a.counts.cold} cold)`);
      let o = An(() => e.sites?.residency());
      return (
        o &&
          (t[`@sites`] = o.off
            ? `off`
            : `${o.counts.busy ? `building` : `built`} (${o.counts.visible} tiers shown, ${o.counts.cached} parked, ${o.counts.busy} building, ${o.sites} far proxies, ${o.geoMB.toFixed(1)} MB geometry, atlas ${o.atlasMB} MB ${o.slots})`),
        t
      );
    };
  return (
    (window.__residency = {
      drop: (e) => {
        let t = K.find((t) => t.id === e);
        return !t || !v(t) || !l.has(t)
          ? `not built`
          : !t.unload || !t.registerMissions
            ? `no unload/registerMissions`
            : m.size
              ? `busy`
              : (kn(t, `debug`), !0);
      },
      state: () => ({ ...Ft.residency(), ...jn() }),
      systems: () => ({
        buildings: An(() => e.buildings?.residency?.()),
        transit: An(() => e.transit?.residency?.()),
        culture: An(() => e.culture?.residency?.()),
        interiors: An(() => e.interiors?.residency?.()),
        sites: An(() => e.sites?.residency()),
      }),
      content: () =>
        Object.fromEntries(
          K.filter((e) => cn(e)).map((e) => {
            let t = Te.get(e),
              n = t?.length
                ? [
                    Math.min(...t.map((e) => e.minX)),
                    Math.min(...t.map((e) => e.minZ)),
                    Math.max(...t.map((e) => e.maxX)),
                    Math.max(...t.map((e) => e.maxZ)),
                  ]
                : null;
            return [
              e.id,
              {
                bounds: cn(e),
                residencyBounds: e.residencyBounds ?? null,
                cells: t?.length ?? 0,
                cellsExtent: n,
              },
            ];
          }),
        ),
      anchors: () => {
        let { x: e, z: t } = P();
        return {
          player: [Math.round(e), Math.round(t)],
          velocity: [+F.vx.toFixed(1), +F.vz.toFixed(1)],
          R: Math.round(j()),
          dropR: Math.round(_e()),
          requests: ye.map((e) => ({
            x: Math.round(e.x),
            z: Math.round(e.z),
            r: Math.round(e.r),
            done: !!e.doneAt,
          })),
          forced: [...be].map((e) => e.id),
          dist: Object.fromEntries(
            K.filter((e) => cn(e)).map((e) => [e.id, Math.round(je(e))]),
          ),
          now: Object.fromEntries(
            K.filter((e) => cn(e)).map((n) => [
              n.id,
              Math.round(dn(De(n), e, t)),
            ]),
          ),
          cells: Object.fromEntries([...Te].map(([e, t]) => [e.id, t.length])),
        };
      },
      log: fn,
    }),
    Ft
  );
}
