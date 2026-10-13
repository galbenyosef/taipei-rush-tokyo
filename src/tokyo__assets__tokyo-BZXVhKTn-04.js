// tokyo__assets__tokyo-BZXVhKTn 04 — math
// Lines 757-2489 of readable/tokyo__assets__tokyo-BZXVhKTn.pretty.js (statement-aligned).
function tn(e) {
  Yt = e.plan.districts;
  let t = new Map(),
    n = (e, n, r) => {
      let i = (t.get(e) ?? 0) + 1;
      (t.set(e, i),
        i <= 3 && console.error(`[districts] ${e.id} ${n} failed`, r));
    },
    o = e.params.has(`debug`),
    c = new Set(),
    l = new Set(),
    d = new Set(),
    m = new Set(),
    h = new Set(),
    g = new Set(),
    _ = (e) => h.has(e) || g.has(e),
    y = (e) => c.has(e) && !d.has(e) && !m.has(e),
    b = new Map();
  typeof window < `u` &&
    (window.__packTimes = (e) => {
      let t = {};
      for (let [e, n] of [...b.entries()].sort((e, t) => t[1].max - e[1].max))
        t[e] = { avg: +n.avg.toFixed(3), max: +n.max.toFixed(1) };
      if (e) for (let e of b.values()) e.max = 0;
      return t;
    });
  let x = [],
    S = !1,
    C = [],
    ee = [],
    w = [],
    T = [],
    E = null,
    D = !1,
    te = null,
    ne = new Promise((e) => (te = e)),
    re = null,
    ie = new Promise((e) => (re = e)),
    ae = e.params,
    oe = ae.get(`residency`),
    ue = ae.get(`districts`) === `all` || ae.has(`cam`) || ae.has(`far`),
    de = () => oe !== `0` && !ue,
    fe = v(),
    pe = oe === `all` || (oe !== `0` && !!e.quality.mobile && fe >= 1),
    k = (e) =>
      de() && !!Zt(e) && (pe || typeof e.registerMissions == `function`),
    A = (e) =>
      k(e) &&
      typeof e.unload == `function` &&
      typeof e.registerMissions == `function`,
    j = Number(ae.get(`resr`) ?? 0) || 0,
    M = () => {
      if (!de()) return 1 / 0;
      if (j > 0) return j;
      let t = e.quality.drawDistance + 180;
      return e.quality.mobile ? Math.max(fe >= 2 ? 450 : 600, t) : t;
    },
    N = () => Math.min(M(), e.quality.drawDistance + 180),
    me = () => Math.min(e.quality.drawDistance * 0.5, 350) + 50,
    he = () => M() + 300,
    ge = e.quality.mobile
      ? 0
      : Math.max(0, Number(ae.get(`resbudget`) ?? 0) || 0),
    P = () => {
      let t = ae.get(`spawn`);
      if (t) {
        let [e, n] = t.split(`,`).map(Number);
        if (Number.isFinite(e) && Number.isFinite(n)) return { x: e, z: n };
      }
      let n = e.state.data.pos;
      return n && Number.isFinite(n.x) && Number.isFinite(n.z)
        ? n
        : e.plan.spawns.start;
    },
    _e = !1;
  e.events.on(`player:spawned`, () => {
    ((_e = !0),
      queueMicrotask(() => {
        let t = e.player?.position;
        t && Ft.ensureResident?.(t.x, t.z);
      }));
  });
  let ve = () => {
      let t = e.player?.position ?? P();
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
      let { x: n, z: r } = ve(),
        i = M(),
        a = en(t, n, r),
        o = a,
        s = a,
        c = Math.hypot(F.vx, F.vz);
      if (c > 2.5) {
        let e = Math.min(c, 90) * Ht,
          i = Math.max(1, Math.ceil(e / 60)),
          a = F.vx / c,
          l = F.vz / c;
        for (let c = 1; c <= i; c++) {
          let u = (e * c) / i,
            d = en(t, n + a * u, r + l * u);
          d < o && (o = d);
          let f = d + u * 0.5;
          f < s && (s = f);
        }
      }
      if (
        (Ce.setFromMatrixPosition(e.camera.matrixWorld),
        Math.abs(Ce.x - n) + Math.abs(Ce.z - r) > 40)
      ) {
        let e = en(t, Ce.x, Ce.z);
        (e < o && (o = e), e < s && (s = e));
      }
      if (!_e) {
        let e = P(),
          n = en(t, e.x, e.z);
        (n < o && (o = n), n < s && (s = n));
      }
      let l = !1;
      for (let e of ye) {
        let n = en(t, e.x, e.z);
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
      return (n || Ee.set(e, (n = Zt(e) ? $t(e) : [])), n);
    },
    Oe = new f();
  function* ke(e) {
    let t = Zt(e),
      n = Le.get(e);
    if (!t || !n?.size) return;
    let r = e.residencyBounds ? $t(e) : null,
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
      s = (e) => {
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
          (s(e), ++l % 150 == 0 && (yield));
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
      o &&
        console.info(
          `[districts] ${e.id}: ${d.length} content cells (${Math.round((d.length * 100 * 100) / 1e4) / 100} km², bounds ${Math.round(((t.maxX - t.minX) * (t.maxZ - t.minZ)) / 1e4) / 100} km²)`,
        ));
  }
  let Ae = !1,
    je = async (t) => {
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
    Me = (e) => {
      let t = De(e);
      return t.length ? we(t).d : 0;
    },
    Ne = (e) => !k(e) || be.has(e) || Me(e) <= M(),
    Pe = (e, t) => {
      (h.add(e),
        x.includes(e) || x.push(e),
        console.warn(
          `[districts] ${e.id} code chunk unavailable — the district stays unbuilt until the page reloads`,
          t,
        ),
        ce(`district ${e.id}`));
    },
    R = async (t, r = e, i) => {
      let a = performance.now();
      try {
        if (t.load) {
          let e;
          try {
            e = await O(t.load(), Bt, `districts: ${t.id} code chunk`);
          } catch (e) {
            return (Pe(t, e), !1);
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
    Be = (e) => !!Zt(e),
    Ve = null,
    He = new Map(),
    Ue = null,
    We = null,
    Ge = !1,
    Ke = !1,
    qe = typeof MessageChannel < `u` ? new MessageChannel() : null,
    Je = !1,
    z = 0,
    Ye = 0,
    Xe = 0,
    Ze = ``,
    B = `init start`,
    Qe = 0,
    $e = !1,
    V = (e) => {
      if (Ge) {
        let t = performance.now();
        !e && Qe > z && Qe < t && (t = Qe);
        let n = t - z;
        n > Ye && ((Ye = n), o && (Ze = `${B} → ${e ?? `end of task`}`));
      }
      Ge = !1;
    };
  qe &&
    (qe.port1.onmessage = () => {
      ((Je = !1), V());
    });
  let et = () => {
      Ue &&
        (Ge || (z = performance.now()),
        (Ge = !0),
        !$e &&
          typeof requestAnimationFrame == `function` &&
          (($e = !0),
          requestAnimationFrame((e) => {
            (($e = !1), (Qe = e));
          })),
        qe && !Je && ((Je = !0), qe.port2.postMessage(0)));
    },
    H = (e) => {
      let t = !0;
      return (
        e.traverse((e) => {
          (e.isLight || e.isSkinnedMesh || e.isCamera) && (t = !1);
        }),
        t
      );
    },
    U = new Map(),
    tt = (t) => {
      let n = U.get(t);
      if (n) return n;
      let r = e.scene,
        i = (n) => {
          for (let i of n) {
            if (!i || i.parent !== r || !H(i) || (ze(t, i), Fe.get(i) !== t.id))
              continue;
            let n = He.get(t);
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
      return (U.set(t, (n = o)), n);
    },
    W = () => {
      if (Ke) return;
      Ke = !0;
      let t = e.scene,
        n = s.prototype;
      if (n.__tgtaPackRemove) return;
      n.__tgtaPackRemove = 1;
      let r = n.remove;
      n.remove = function (...n) {
        if (n.length) {
          if (this === t) {
            let e = Ve;
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
            let i = !!Ue && Ge && !e.work?.inFrame && r.parent !== t,
              a =
                Fe.get(r) ??
                (i ? We?.id : Ve && r.parent !== t ? Ve.p.id : void 0),
              o = a === void 0 ? void 0 : Ie.get(a);
            if (o && A(o) && !m.has(o)) {
              let e = Re.get(o);
              e || Re.set(o, (e = new Map()));
              for (let t of n) t && t.parent === this && e.set(t, r);
            }
          }
        }
        return r.apply(this, n);
      };
    },
    G = () => {
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
    nt = async () => {
      let t = o ? G() : ``;
      (V(o ? t : void 0), o && (B = t), Xe++);
      try {
        await (e.work ? e.work.yield() : e.yieldFrame());
      } finally {
        et();
      }
    },
    rt = null,
    it = () => {
      let t = e.work;
      if (!t) return t;
      if (rt) return rt;
      let n = (e) =>
        e.finally(() => {
          et();
        });
      return (
        (rt = new Proxy(t, {
          get(e, t) {
            if (t === `nextFrame`)
              return () => (V(o ? G() : void 0), n(e.nextFrame()));
            if (t === `yield`)
              return () =>
                e.remaining() > 0
                  ? e.yield()
                  : (V(o ? G() : void 0), n(e.yield()));
            if (t === `run`)
              return (t) => (
                V(o ? G() : void 0),
                n(
                  e.run({
                    next: () => {
                      let e = performance.now(),
                        n = t.next(),
                        r = performance.now() - e;
                      return (
                        Ue &&
                          r > Ye &&
                          ((Ye = r), o && (Ze = `a ctx.work.run() step`)),
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
        rt
      );
    },
    at = null,
    ot = () =>
      (at ??= Object.create(e.plan, {
        pois: { value: e.plan.allPois, enumerable: !0 },
      })),
    st = new Set([`addBox`, `addOBB`, `addCircle`, `addFloor`, `addFloorRect`]),
    ct = new Map(),
    lt = new Map(),
    ut = (t) => {
      if (!k(t)) return e.statics;
      let n = lt.get(t);
      if (!n) {
        let r = ct.get(t);
        r || ct.set(t, (r = { c: [], f: [] }));
        let i = r;
        ((n = new Proxy(e.statics, {
          get(e, t) {
            let n = Reflect.get(e, t, e);
            return typeof n == `function`
              ? st.has(t)
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
      if (!n || !k(t)) return n;
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
      if (!Be(t) && !k(t)) return e;
      let n = ht.get(t);
      return (
        n ||
          ht.set(
            t,
            (n = new Proxy(e, {
              get(e, n) {
                return n === `scene`
                  ? Be(t)
                    ? tt(t)
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
                  ? nt
                  : n === `work`
                    ? it()
                    : n === `plan`
                      ? ot()
                      : n === `scene`
                        ? Be(t)
                          ? tt(t)
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
      let { x: n, z: r } = ve(),
        i = e.camera.matrixWorld.elements,
        a = -i[8],
        o = -i[10],
        s = Math.hypot(a, o) || 1;
      ((a /= s), (o /= s));
      let c = e.quality.drawDistance,
        l = null;
      for (let e of t) {
        let t = Zt(e),
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
      if (!o || !Be(t)) return;
      let r = e.scene.children
        .filter((e) => !n.has(e) && !Fe.has(e) && H(e))
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
        if (!(!i.length || en(i, e, t) > n) && !y(r) && !_(r)) return !1;
      }
      return !0;
    },
    Et = () => {
      let e = performance.now();
      for (let t = ye.length - 1; t >= 0; t--) {
        let n = ye[t];
        if (n.doneAt) e - n.doneAt > Gt && ye.splice(t, 1);
        else {
          let t = e - n.t0 > Wt;
          (t || Tt(n.x, n.z, n.r)) &&
            (t &&
              console.warn(
                `[districts] ensureResident(${Math.round(n.x)}, ${Math.round(n.z)}) still building after ${Wt / 1e3} s — continuing`,
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
          o &&
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
                O(Promise.resolve(t), Wt, `ensureResident part`).catch((e) => {
                  o &&
                    console.warn(`[districts] ensureResident part failed`, e);
                }),
              );
          } catch (e) {
            o && console.warn(`[districts] ensureResident part failed`, e);
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
        : d.has(e) || Nt === e || g.has(e)
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
        for (let t of x) (!c.has(t) || d.has(t)) && !_(t) && Ne(t) && e++;
        return e;
      },
      get dormant() {
        let e = 0;
        for (let t of x) !c.has(t) && !_(t) && !Ne(t) && e++;
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
        return Qt(K, e.plan, t, n, Zt);
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
        let i = n !== void 0 && n >= 0 ? n : N(),
          a = Ot(e, t, r?.interiors !== !1),
          o = Tt(e, t, i) ? null : Dt(e, t, i);
        return (
          o && a.push(o),
          a.length ? Promise.all(a).then(() => void 0) : Promise.resolve()
        );
      },
      residencyOn() {
        return de();
      },
      residency() {
        let e = {};
        for (let t of K) e[t.id] = Pt(t);
        return e;
      },
      unbuiltNear(e, t, n) {
        return !Tt(e, t, n ?? N()) || kt(e, t);
      },
      isBuilt(e) {
        return c.has(e);
      },
      packOf(e) {
        return Fe.get(e);
      },
      onPackBuilt(e) {
        C.push(e);
      },
      onPackDropped(e) {
        ee.push(e);
      },
      onArrival(e) {
        w.push(e);
      },
      whenAllBuilt() {
        return ne;
      },
      whenResidentBuilt() {
        return ie;
      },
      onPackStart(e) {
        T.push(e);
      },
      async init() {
        W();
        let t = P(),
          n = me(),
          r = [],
          i = [];
        for (let e of K) {
          let a = Zt(e),
            o = a ? en($t(e), t.x, t.z) : 0;
          ue || !a || o <= n ? r.push(e) : i.push({ p: e, d: o });
        }
        (i.sort((e, t) => e.d - t.d),
          (x = i.map((e) => e.p)),
          r.sort((e, t) => +!Zt(e) - !Zt(t)));
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
          (Zt(n) || o(), e.loading(`districts: ${n.id}`, t / r.length));
          let i = new Set(e.scene.children);
          Ve = { p: n, before: i };
          try {
            await R(n, gt(n));
          } finally {
            Ve = null;
          }
          (xt(n, i),
            St(n, i),
            e.loading(`districts: ${n.id}`, (t + 1) / r.length),
            await e.yieldFrame());
        }
        (o(),
          x.length &&
            console.info(
              `[init] districts: ${r.length} built, deferred ${x.map((e) => e.id).join(`, `)}${de() ? ` (residency on: R ${Math.round(M())} m)` : ``}`,
            ),
          x.length || (te?.(), re?.()));
      },
      start() {
        S = !0;
        for (let e of K) c.has(e) && Ct(e);
      },
      buildDeferred() {
        return (
          E ||
          ((E = (async () => {
            ((D = !0), W());
            let t = e.quality.mobile ? performance.now() : 0;
            for (;;) {
              (ln(), Et());
              let n = x.filter((e) => !c.has(e) && !_(e) && !m.has(e));
              if (!n.length && !de()) break;
              let r = n.filter(Ne);
              if (!r.length) {
                (n.length || te?.(), re?.(), await Mt(500));
                continue;
              }
              e.work ? await e.work.nextFrame() : await wt(2);
              let i = bt(r.filter(Ne));
              if (!i) continue;
              de() && performance.now() - L < 4e3 && (await En());
              let a = i.p;
              Nt = a;
              try {
                await fn(i.d, t, i.urgent);
              } finally {
                Nt = null;
              }
              c.has(a) ||
                m.has(a) ||
                ((await on(gn(a), Vt)) ||
                  (g.add(a),
                  d.delete(a),
                  console.warn(
                    `[districts] ${a.id} deferred build still running after ${Vt / 1e3} s — moving on (it finishes in the background)`,
                  )),
                (t = performance.now()));
            }
            ((D = !1), re?.(), te?.());
          })()),
          E)
        );
      },
      update(t) {
        let { x: r, z: i } = ve();
        if (Number.isFinite(F.x) && t > 0) {
          let e = r - F.x,
            n = i - F.z;
          if (Math.abs(e) + Math.abs(n) > 60)
            ((F.vx = F.vz = 0),
              (L = performance.now()),
              _e &&
                (Ft.ensureResident?.(r, i),
                (I =
                  Tt(r, i, me()) && !kt(r, i) ? null : { x: r, z: i, t: 0 })));
          else {
            let r = Math.min(1, t * 2.5);
            ((F.vx += (e / t - F.vx) * r), (F.vz += (n / t - F.vz) * r));
          }
        }
        if (((F.x = r), (F.z = i), I)) {
          I.t += t;
          let n = me();
          if (
            (Ce.setFromMatrixPosition(e.camera.matrixWorld),
            I.t > 15 || (Tt(I.x, I.z, n) && !kt(I.x, I.z)))
          )
            I = null;
          else if (Math.hypot(Ce.x - r, Ce.z - i) < 60) {
            let e = I;
            I = null;
            for (let t of w)
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
            s = b.get(i.id);
          (s || b.set(i.id, (s = { avg: 0, max: 0, n: 0 })),
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
              : (tn(r), Lt(r, () => e.yieldFrame()))),
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
      for (let e of t) (await n(), tn([e]));
      Lt(t, n);
    })().catch((e) =>
      console.warn(`[districts] late shadow-depth prewarm failed`, e),
    );
  });
  let Lt = (t, n) => {
      e.quality.shadows &&
        e.renderer.warmShadowCasters &&
        e.renderer.warmShadowCasters(t, n).catch((e) => {
          o && console.warn(`[districts] shadow warm failed`, e);
        });
    },
    Rt = [],
    zt = { 0: 1, 1: 0, 2: 2 },
    Kt = null,
    qt = new WeakMap(),
    Jt = null,
    Xt = (e, t) => {
      let n = e.customDepthMaterial;
      if (!n) {
        if (
          (t.displacementMap && t.displacementScale !== 0) ||
          (t.alphaMap && t.alphaTest > 0) ||
          (t.map && t.alphaTest > 0) ||
          t.alphaToCoverage === !0
        ) {
          let e = qt.get(t);
          (e || qt.set(t, (e = new r())), (n = e));
        } else n = Jt ??= new r();
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
    tn = (t) => {
      let n = e.renderer.gl;
      if (!n.shadowMap.enabled || !e.quality.shadows) return 0;
      let r = [];
      e.scene.traverseVisible((e) => {
        e.isLight && r.push(e);
      });
      let s = new i();
      s.children = r;
      let c = new a(),
        l = c,
        d = n.getRenderTarget(),
        f = 0;
      try {
        n.setRenderTarget((Kt ??= new u(1, 1, { depthBuffer: !0 })));
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
            let i = Xt(r, a);
            try {
              r.onBeforeShadow(n, r, e.camera, e.camera, t.geometry, i, null);
            } catch {}
            let u = Object.create(r);
            ((u.children = []), (u.material = i), (l.children = [u]));
            try {
              (n.compile(c, e.camera, s), f++);
            } catch (e) {
              o && console.warn(`[districts] shadow-depth prewarm failed`, e);
            }
          }
        }
      } finally {
        (n.setRenderTarget(d), (l.children = []), (s.children = []));
      }
      return f;
    },
    rn = ({ id: e }) => {
      let t = xe.get(e);
      t && Se.get(t) === e && (Se.delete(t), be.delete(t));
    };
  (e.events.on(`mission:started`, ({ id: e }) => {
    let t = xe.get(e);
    t &&
      (Se.set(t, e),
      y(t) ||
        (be.add(t),
        o &&
          console.info(
            `[districts] mission '${e}' started: building ${t.id} now`,
          ),
        jt()));
  }),
    e.events.on(`mission:completed`, rn),
    e.events.on(`mission:failed`, rn),
    e.events.on(`mission:aborted`, rn));
  let an = (e) => new Promise((t) => setTimeout(t, e)),
    on = (e, t) =>
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
    sn = new Set(),
    cn = (e, t = !1) => {
      if (!(!e.registerMissions || (sn.has(e) && !t))) {
        sn.add(e);
        try {
          e.registerMissions(gt(e));
        } catch (t) {
          n(e, `registerMissions`, t);
        }
      }
    },
    ln = () => {
      if (de()) for (let e of x) c.has(e) || _(e) || !k(e) || Ne(e) || cn(e);
    },
    un = () => {
      let e = performance.memory;
      return e ? e.usedJSHeapSize / 1048576 : -1;
    },
    dn = le() < 12e4,
    fn = async (t, n, r) => {
      if (document.hidden) return;
      let i = !!e.quality.mobile,
        a = r
          ? dn
            ? 1200
            : i
              ? 600
              : 0
          : dn
            ? 2500
            : i
              ? 600 + (t > e.quality.drawDistance ? 1e3 : 0)
              : 0;
      if (a > 0) {
        let e = n + a - performance.now();
        e > 0 && (await an(e));
      }
      if (un() < 0) return;
      let s = r ? 300 : 1500,
        c = performance.now(),
        l = un(),
        u = c;
      for (;;) {
        await an(150);
        let e = un(),
          t = performance.now(),
          n = ((e - l) * 1e3) / Math.max(1, t - u);
        if (((l = e), (u = t), n < 60 || t - c > s || document.hidden)) {
          t - c > 300 &&
            o &&
            console.info(
              `[districts] heap gate ${Math.round(t - c)}ms (heap ${Math.round(e)} MB, ${Math.round(n)} MB/s)`,
            );
          return;
        }
      }
    },
    pn = [],
    mn = (e) => {
      (pn.push(`${(performance.now() / 1e3).toFixed(1)}s ${e}`),
        pn.length > 60 && pn.shift());
    },
    hn = new Map(),
    gn = async (t) => {
      let n = new Set(e.scene.children),
        r = new Set();
      (He.set(t, r),
        (Ue = r),
        (We = t),
        (Ge = !1),
        (Ye = 0),
        (Ze = ``),
        (B = `init start`),
        (Xe = 0),
        d.add(t));
      let i = (hn.get(t) ?? 0) + 1;
      hn.set(t, i);
      let a = performance.now();
      for (let e of T)
        try {
          e(t);
        } catch (e) {
          console.warn(`[districts] onPackStart hook failed`, e);
        }
      let s = !1;
      try {
        ((s = await R(t, vt(t), et)), et(), s && S && Ct(t));
      } finally {
        (V(`the end of init + start()`),
          He.get(t) === r && He.delete(t),
          Ue === r && ((Ue = null), (We = null)));
      }
      g.delete(t);
      let c = Math.round(performance.now() - a);
      if (
        ((Ye > 50 || o) &&
          console.info(
            `[init] districts:${t.id} deferred build ${c}ms, ${Xe} yields, longest slice ${Ye.toFixed(0)}ms${i > 1 ? ` (rebuild ${i - 1})` : ``}${o && Ze ? ` — ended at ${Ze}` : ``}`,
          ),
        t.storefront)
      )
        for (let n of [...e.plan.claimedPois])
          yt(t, n.id) && e.plan.honorPoi(n.id);
      let l = s
        ? [...r].filter((n) => n.parent === e.scene && Fe.get(n) === t.id)
        : [];
      St(t, n);
      let u = [...r].filter((t) => t.parent !== e.scene);
      u.length && e.renderer.unhold?.(u);
      let f = performance.now();
      if (C.length)
        for (let e of C)
          try {
            await e(t, l);
          } catch (e) {
            console.warn(`[districts] onPackBuilt hook failed`, e);
          }
      (e.renderer.unhold?.(r),
        d.delete(t),
        A(t) && !Te.has(t) && je(t),
        mn(
          `built ${t.id}${i > 1 ? ` (rebuild ${i - 1})` : ``}: init ${c} ms (longest slice ${Ye.toFixed(0)} ms), pipeline ${Math.round(performance.now() - f)} ms, ${Math.round(Me(t))} m`,
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
      if (!de() || m.size) return;
      if (!Ae) {
        for (let e of K)
          if (A(e) && y(e) && l.has(e) && !Te.has(e)) {
            je(e);
            break;
          }
      }
      let n = performance.now(),
        r = he(),
        i = [];
      for (let e of K) {
        if (!A(e) || !y(e) || !l.has(e)) {
          vn.delete(e);
          continue;
        }
        if (Me(e) <= r || Sn(e) || be.has(e)) {
          (vn.delete(e), yn.set(e, n));
          continue;
        }
        let a = (vn.get(e) ?? 0) + t;
        (vn.set(e, a), a >= Ut && i.push(e));
      }
      if (!i.length) return;
      if (ge > 0 && !e.renderer.gpuOom) {
        let e = 0;
        for (let t of K) A(t) && c.has(t) && (e += xn(t));
        if (e <= ge) return;
      }
      i.sort((e, t) => (yn.get(e) ?? 0) - (yn.get(t) ?? 0));
      let a = i[0];
      (vn.delete(a), kn(a));
    },
    wn = e.renderer.gl.properties,
    Tn = (e) => nn(e, e.isShaderMaterial ? void 0 : wn.get(e).uniforms),
    En = async () => {
      let e = he();
      for (;;) {
        if (m.size) {
          await an(50);
          continue;
        }
        let t = K.find(
          (t) => A(t) && y(t) && l.has(t) && !be.has(t) && Me(t) > e && !Sn(t),
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
              let s = e.renderer.gl.info.programs?.length ?? 0;
              if (!e.renderer.compileAs?.(r, t)) continue;
              ((e.renderer.gl.info.programs?.length ?? 0) > s &&
                o &&
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
        d = Math.round(Me(t)),
        f = 0,
        p = new Set(),
        h = new Set(),
        g = new Set(),
        _ = 0,
        v = 0,
        y = 0,
        b = 0;
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
        b = On(i);
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
          x = e.scene.children.slice();
        for (let e of x)
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
            m.has(e.image) || se(e, t.id),
            v++,
            ++S % 16 == 0 && u() && (await s()));
        for (let e of h) e.dispose();
        let C = ct.get(t);
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
          cn(t, !0));
        for (let e of ee)
          try {
            e(t, { geometries: p, textures: g, materials: h });
          } catch (e) {
            console.warn(`[districts] onPackDropped hook failed`, e);
          }
        (m.delete(t),
          x.includes(t) || x.push(t),
          (o = Math.max(o, performance.now() - a)));
        let e = Math.round(performance.now() - i),
          n = `dropped ${t.id} (${r}, ${d} m): ${_} roots, ${y} geometries, ${v} textures${b ? `, ${b} shader keepers` : ``} in ${e} ms (unload ${f.toFixed(0)} ms, longest slice ${o.toFixed(0)} ms)`;
        (mn(n),
          console.info(`[districts] ${n}`),
          D || ((E = null), Ft.buildDeferred()),
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
        return !t || !y(t) || !l.has(t)
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
          K.filter((e) => Zt(e)).map((e) => {
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
                bounds: Zt(e),
                residencyBounds: e.residencyBounds ?? null,
                cells: t?.length ?? 0,
                cellsExtent: n,
              },
            ];
          }),
        ),
      anchors: () => {
        let { x: e, z: t } = ve();
        return {
          player: [Math.round(e), Math.round(t)],
          velocity: [+F.vx.toFixed(1), +F.vz.toFixed(1)],
          R: Math.round(M()),
          dropR: Math.round(he()),
          requests: ye.map((e) => ({
            x: Math.round(e.x),
            z: Math.round(e.z),
            r: Math.round(e.r),
            done: !!e.doneAt,
          })),
          forced: [...be].map((e) => e.id),
          dist: Object.fromEntries(
            K.filter((e) => Zt(e)).map((e) => [e.id, Math.round(Me(e))]),
          ),
          now: Object.fromEntries(
            K.filter((e) => Zt(e)).map((n) => [
              n.id,
              Math.round(en(De(n), e, t)),
            ]),
          ),
          cells: Object.fromEntries([...Te].map(([e, t]) => [e.id, t.length])),
        };
      },
      log: pn,
    }),
    Ft
  );
}
