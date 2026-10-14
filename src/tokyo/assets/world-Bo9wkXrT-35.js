// tokyo/assets/world-Bo9wkXrT 35 — math
// Lines 10907-11314 of readable/tokyo/assets/world-Bo9wkXrT.pretty.js (statement-aligned).
function ll(e) {
  let { ctx: t } = e,
    n = new Map();
  for (let t of e.resolved) n.set(t.id, t);
  let r = new Map();
  for (let t of e.metas) r.set(t.id, t);
  let i = (t) => {
      let r = n.get(t);
      if (!r) return null;
      let i = e.streamer(),
        a = i?.get(t),
        o = i?.shownTier(t) ?? (r.ok ? `far` : null),
        s = i?.tierStats(t, `mid`) ?? null,
        c = i?.tierStats(t, `near`) ?? null,
        l = i?.tierStats(t, `interior`) ?? null,
        u = o === `mid` ? s : o === `near` ? c : o === `interior` ? l : null,
        d = e.atlas()?.slotsOf(t),
        f = d && d.length ? d[0] : null;
      return {
        id: t,
        tier: o,
        calls: u?.calls ?? 0,
        tris: u?.tris ?? 0,
        colliders: u?.colliders ?? 0,
        buildMs: u?.buildMs ?? 0,
        slot: f,
        mid: s,
        near: c,
        interior: l,
        quarantined: a?.quarantined ?? !1,
        d: a ? +a.d.toFixed(1) : NaN,
      };
    },
    a = (e, t) => {
      let n = e.frontage;
      if (!n) return t;
      let r = Math.max(1.5, n.sidewalk),
        i = r * 0.5,
        a = r + 2 * n.halfWidth,
        o = a + r * 0.5;
      return t <= r
        ? Math.max(t, Math.min(i, r))
        : t >= a
          ? Math.max(t, o)
          : t - r < a - t
            ? i
            : o;
    },
    o = (t, n) => {
      let r = 1,
        i = 1 / 0;
      for (let a of [1, -1]) {
        let o = 0;
        for (let r = 0.25; r <= 1.001; r += 0.25) {
          let i = Xa(t, a * n * r, -t.d / 2 - sl * 0.5);
          for (let n of e.resolved)
            n.ok &&
              n.id !== t.id &&
              i.x > n.rect.minX &&
              i.x < n.rect.maxX &&
              i.z > n.rect.minZ &&
              i.z < n.rect.maxZ &&
              (o += 1);
        }
        if ((o < i && ((i = o), (r = a)), o === 0)) break;
      }
      return r;
    },
    s = (e, n, r = 0) => {
      let i = r,
        s = -e.d / 2 - a(e, n);
      if (n > 60 && !r) {
        let t = e.frontage,
          r = Math.min(n, Math.max(10, t ? t.sidewalk + t.halfWidth : sl)),
          a = Math.sqrt(Math.max(0, n * n - r * r));
        ((i = o(e, a) * a), (s = -e.d / 2 - r));
      }
      let c = Xa(e, i, s),
        l = Xa(e, 0, 0),
        u = Math.atan2(l.x - c.x, -(l.z - c.z));
      t.player.teleport(c.x, c.z, u);
      try {
        t.cameraRig?.snapBehind?.(u);
      } catch {}
    },
    c = async (t, n, r, i = ol) => {
      let a = e.streamer();
      if (!a) return n === `far` ? `ok` : `failed`;
      for (; performance.now() - r < i;) {
        if (
          (a.scan(),
          n === `interior`
            ? a.get(t)?.interior.visible
            : a.exteriorTier(t) === n)
        )
          return `ok`;
        let e = a.get(t);
        if (e?.quarantined || (n !== `far` && e && e.tierOf(n).state === 4))
          return `failed`;
        await cl(100);
      }
      return `timeout`;
    },
    l = async (r, a, l, u) => {
      let d = n.get(r),
        f = e.streamer(),
        p = a === `facade` ? `near` : a,
        m = Math.max(1e3, u?.timeoutMs ?? ol);
      if (!d || !d.ok)
        return (
          console.warn(`[test] sites view: unknown or unplaced site '${r}'`),
          null
        );
      let h = (e) => {
        let t = i(r);
        return (
          t &&
          ((t.wantTier = p),
          (t.reachedReason = e),
          (t.reachedTier = e === `ok` && t.tier === p),
          t.reachedTier ||
            console.warn(
              `[test] sites view: '${r}' did not reach tier '${p}' (${e}, shown ${t.tier ?? `none`})`,
            ),
          t)
        );
      };
      l !== void 0 && t.env?.setHour?.(l);
      let g = f?.radiiOf(r),
        _ = performance.now();
      if (!g) return (s(d, 320), h(p === `far` ? `ok` : `unplaced`));
      if (p === `far`) s(d, Math.max(320, g.midD + 30 + d.w / 2));
      else if (p === `mid`)
        s(d, Math.max(g.nearD + 10 + d.w / 2, Math.min(180, g.midB - 20)));
      else if (a === `facade`) {
        let e = Math.max(4, Math.min(d.w * 0.45, 26));
        s(d, 1.2, o(d, e) * e);
      } else if (p === `near`) s(d, Math.min(30, g.nearB * 0.5));
      else if (p === `interior`) {
        s(d, Math.min(4, g.intB * 0.3));
        let e = await c(r, `interior`, _, m),
          n = e === `ok` ? f.firstVolume(r) : null;
        if (n) {
          let e = Xa(d, n.x, n.z);
          t.player.teleport(e.x, e.z, d.facing + Math.PI, d.y + n.y);
          try {
            t.cameraRig?.snapBehind?.(d.facing + Math.PI);
          } catch {}
          f.scan();
        } else
          console.warn(
            `[test] sites view: '${r}' interior not available (${e})`,
          );
        return (
          l !== void 0 && t.env?.setHour?.(l),
          h(e === `ok` && !n ? `no-volume` : e)
        );
      }
      let v = await c(r, p, _, m);
      return (l !== void 0 && t.env?.setHour?.(l), h(v));
    },
    u = null,
    d = () => {
      if (u) return u;
      let t = e.resolved.filter((e) => e.ok && r.has(e.id)),
        n = t.map((e, t) => t),
        i = (e) => {
          for (; n[e] !== e;) e = n[e] = n[n[e]];
          return e;
        },
        a = (e, t) => {
          let r = i(e),
            a = i(t);
          r !== a && (n[a] = r);
        },
        o = Ur.clusterRadius * Ur.clusterRadius;
      for (let e = 0; e < t.length; e++) {
        let n = r.get(t[e].id)?.cluster;
        for (let i = e + 1; i < t.length; i++) {
          let s = r.get(t[i].id)?.cluster,
            c = t[e].x - t[i].x,
            l = t[e].z - t[i].z;
          ((n && s && n === s) || c * c + l * l <= o) && a(e, i);
        }
      }
      let s = new Map();
      for (let e = 0; e < t.length; e++) {
        let t = i(e),
          n = s.get(t);
        n ? n.push(e) : s.set(t, [e]);
      }
      let c = [];
      for (let e of s.values()) {
        let n = 0,
          i = 0;
        for (let r of e) ((n += t[r].x), (i += t[r].z));
        ((n /= e.length), (i /= e.length));
        let a = 0,
          o = [];
        for (let s of e) {
          a = Math.max(a, Math.hypot(t[s].x - n, t[s].z - i));
          let e = r.get(t[s].id)?.cluster;
          e && !o.includes(e) && o.push(e);
        }
        let s = e.map((e) => t[e].id).sort();
        c.push({
          ids: s,
          x: +n.toFixed(1),
          z: +i.toFixed(1),
          radius: +a.toFixed(1),
          label: o.sort()[0] ?? `@${s[0]}`,
        });
      }
      return (
        c.sort(
          (e, t) => t.ids.length - e.ids.length || (e.label < t.label ? -1 : 1),
        ),
        (u = c),
        c
      );
    },
    f = () => {
      let t = e.streamer(),
        n = { tris: Ur.clusterNearTris, calls: Ur.clusterNearCalls };
      return d().map((e) => {
        let i = 0,
          a = 0,
          o = 0,
          s = 0;
        for (let n of e.ids) {
          let e = r.get(n);
          e && (s += Br(e));
          let c = t?.tierStats(n, `near`);
          c && (c.visible || c.cached) && (o++, (i += c.calls), (a += c.tris));
        }
        return {
          id: e.label,
          sites: e.ids,
          x: e.x,
          z: e.z,
          radius: e.radius,
          near: { sites: o, calls: i, tris: a },
          atlasSlots: s,
          budget: n,
          over: a > n.tris || i > n.calls,
        };
      });
    },
    p = () => {
      let t = e.atlas(),
        n = e.streamer(),
        r = 0;
      if (n)
        for (let e of n.recs) {
          let t = n.tierStats(e.id, `near`),
            i = n.tierStats(e.id, `interior`);
          ((t && (t.visible || t.cached)) || (i && (i.visible || i.cached))) &&
            (r += Br(e.meta));
        }
      let i = t?.slotCount ?? 0,
        a = t?.slotsUsed ?? 0;
      return {
        size: t?.size ?? 0,
        slotPx: t?.slotPx ?? 0,
        slots: i,
        slotsUsed: a,
        free: t?.slotsFree ?? Math.max(0, i - a),
        pressure: i ? +(a / i).toFixed(3) : 0,
        demand: r,
        stats: t?.stats ?? null,
      };
    },
    m = () => {
      let e = t.scene;
      if (!e) return null;
      let n = null;
      if (
        (e.traverse((e) => {
          let t = e.userData;
          !n && t && t.sites === `far` && (n = e);
        }),
        !n)
      )
        return null;
      let r = 0,
        i = 0,
        a = !1;
      return (
        n.traverse((e) => {
          let t = e;
          if (!t.isMesh || !t.geometry) return;
          (r++, t.visible && (a = !0));
          let n = t.geometry.index
            ? t.geometry.index.count
            : (t.geometry.attributes?.position?.count ?? 0);
          i += Math.floor(n / 3);
        }),
        { meshes: r, tris: i, visible: a && n.visible }
      );
    };
  return {
    ready: !1,
    list() {
      let t = e.streamer();
      return e.resolved.map((e) => {
        let n = r.get(e.id);
        return {
          id: e.id,
          ok: e.ok,
          tier: t?.shownTier(e.id) ?? (e.ok ? `far` : null),
          x: +e.x.toFixed(1),
          z: +e.z.toFixed(1),
          facing: +e.facing.toFixed(4),
          w: +e.w.toFixed(2),
          d: +e.d.toFixed(2),
          y: +e.y.toFixed(2),
          quarantined: t?.get(e.id)?.quarantined ?? !1,
          interior: n?.interior ?? `none`,
          hero: n?.hero === !0,
        };
      });
    },
    stats: i,
    view: l,
    clusters: f,
    perf: () => {
      let n = e.streamer(),
        r = t.quality?.mobile || t.quality?.level === `low` ? `low` : `high`,
        i = Hr[r],
        a = {
          mid: { sites: 0, calls: 0, tris: 0 },
          near: { sites: 0, calls: 0, tris: 0 },
          interior: { sites: 0, calls: 0, tris: 0 },
        },
        o = { sites: 0, calls: 0, tris: 0 },
        s = [];
      if (n)
        for (let e of n.recs)
          for (let t of [`mid`, `near`, `interior`]) {
            let r = n.tierStats(e.id, t);
            if (!r || !(r.visible || r.cached)) continue;
            let c = a[t];
            (c.sites++,
              (c.calls += r.calls),
              (c.tris += r.tris),
              r.visible &&
                (o.sites++, (o.calls += r.calls), (o.tris += r.tris)));
            let l = i[t];
            (r.calls > l.calls || r.tris > l.tris) &&
              s.push(
                `${e.id}:${t} ${r.calls}c/${(r.tris / 1e3).toFixed(1)}k (≤${l.calls}c/${(l.tris / 1e3).toFixed(0)}k)`,
              );
          }
      let c = f()
        .filter((e) => e.over)
        .map(
          (e) =>
            `${e.id} ${e.near.sites} sites ${e.near.calls}c/${(e.near.tris / 1e3).toFixed(1)}k`,
        );
      return {
        tiers: a,
        visible: o,
        far: m(),
        atlas: p(),
        counts: n?.counts() ?? null,
        lastSliceMs: +(n?.lastSliceMs ?? 0).toFixed(2),
        over: s,
        hotClusters: c,
        budgets: {
          near: i.near,
          mid: i.mid,
          proxyCalls: Ur.proxyCalls,
          proxyTris: Ur.proxyTris[r],
        },
      };
    },
    get atlas() {
      return p();
    },
    get lastSliceMs() {
      return +(e.streamer()?.lastSliceMs ?? 0).toFixed(2);
    },
    get stream() {
      return e.streamer()?.report() ?? null;
    },
    get errors() {
      return e.errors;
    },
    get counts() {
      return e.streamer()?.counts() ?? null;
    },
    busy() {
      return e.streamer()?.busyTiers() ?? [];
    },
    volumes(t) {
      return (e.streamer()?.get(t)?.interior.handle?.indoor ?? []).map((e) => ({
        x0: e.x0,
        z0: e.z0,
        x1: e.x1,
        z1: e.z1,
        ceilY: e.ceilY,
        floorY: e.floorY ?? 0,
        maxCamDist: e.maxCamDist,
        openFront: e.openFront !== !1,
      }));
    },
  };
}
