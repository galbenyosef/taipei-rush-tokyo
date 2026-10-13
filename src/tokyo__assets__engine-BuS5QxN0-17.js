// tokyo__assets__engine-BuS5QxN0 17 — math
// Lines 6347-6689 of readable/tokyo__assets__engine-BuS5QxN0.pretty.js (statement-aligned).
function Wa(e, t) {
  let n = e.scene,
    r = e.renderer.gl,
    i = (e) => {
      let r = e;
      for (; r.parent && r.parent !== n;) r = r.parent;
      if (r.parent === n) return t(r) ?? `unowned`;
      let i = r;
      return i === n ? `scene` : i.isScene && i.fog ? `far` : `post`;
    },
    a = null,
    o = 0,
    s = r,
    c = s.renderBufferDirect,
    l = e.renderer.frameNo,
    u = function (t, n, s, u, d, f) {
      if (a) {
        let t = e.renderer.frameNo;
        t !== l && ((l = t), o++);
        let n = i(d),
          r = a.get(n);
        r || a.set(n, (r = { calls: 0, tris: 0 }));
        let c = d,
          u = Math.min(
            f
              ? f.count
              : s.index
                ? s.index.count
                : (s.attributes.position?.count ?? 0),
            s.drawRange.count,
          );
        if (c.isBatchedMesh)
          for (let e = (u = 0); e < c._multiDrawCount; e++)
            u += c._multiDrawCounts[e];
        ((!c.isBatchedMesh || c._multiDrawCount > 0) && r.calls++,
          (r.tris += (u / 3) * (d.isInstancedMesh ? d.count : 1)));
      }
      return c.call(r, t, n, s, u, d, f);
    },
    d = {
      start() {
        ((a = new Map()),
          (o = 0),
          (l = e.renderer.frameNo),
          (s.renderBufferDirect = u));
      },
      stop() {
        s.renderBufferDirect = c;
        let e = {},
          t = Math.max(1, o);
        for (let [n, r] of [...(a ?? new Map()).entries()].sort(
          (e, t) => t[1].calls - e[1].calls,
        ))
          e[n] = {
            calls: +(r.calls / t).toFixed(1),
            trisK: Math.round(r.tris / t / 1e3),
          };
        return ((a = null), e);
      },
      census() {
        let e = r.properties,
          i = new Map(),
          a = new Set(),
          o = new Set(),
          s = new Set(),
          c = (t) => (e.get(t).__version === void 0 ? 0 : lr(t) / 1048576),
          l = (e, t) => {
            if (a.has(e)) return;
            a.add(e);
            let n = e.userData?.owner;
            (typeof n == `string` ? u(n) : t).texMB += c(e);
          },
          u = (e) => {
            let t = i.get(e);
            return (
              t ||
                i.set(
                  e,
                  (t = {
                    progs: new Set(),
                    mats: new Set(),
                    unnamed: 0,
                    texMB: 0,
                    geoMB: 0,
                    gpuGeoMB: 0,
                  }),
                ),
              t
            );
          },
          d = (e, t) => {
            let n = (e, t) => {
              (e.userData?.owner && (t = String(e.userData.owner)), f(e, u(t)));
              let r = e.children;
              for (let e = 0; e < r.length; e++) n(r[e], t);
            };
            n(e, t);
          },
          f = (t, n) => {
            {
              let r = t;
              if (!r.material) return;
              let i = r.geometry;
              if (i && !o.has(i)) {
                o.add(i);
                let e = new Set(),
                  t = (t) => {
                    let r = t.isInterleavedBufferAttribute ? t.data : null,
                      i = r ?? t;
                    if (e.has(i)) return;
                    e.add(i);
                    let a = i.array?.BYTES_PER_ELEMENT ?? 4,
                      o =
                        ((r
                          ? r.count * r.stride
                          : (t.count || 0) * (t.itemSize || 0)) *
                          a) /
                        1048576;
                    ((n.geoMB += o), i.__gpu && (n.gpuGeoMB += o));
                  };
                for (let e in i.attributes) t(i.attributes[e]);
                i.index && t(i.index);
              }
              for (let t of Array.isArray(r.material)
                ? r.material
                : [r.material]) {
                if (n.mats.has(t)) continue;
                (n.mats.add(t), t.name || n.unnamed++);
                let r = e.get(t);
                if (r.programs)
                  for (let e of r.programs.values())
                    (n.progs.add(e.id), s.add(e.id));
                else
                  r.currentProgram &&
                    (n.progs.add(r.currentProgram.id),
                    s.add(r.currentProgram.id));
                for (let e in t) {
                  let r = t[e];
                  r && r.isTexture && l(r, n);
                }
                let i = e.get(t).uniforms;
                if (i)
                  for (let e in i) {
                    let t = i[e]?.value;
                    t && t.isTexture && l(t, n);
                  }
              }
            }
          };
        for (let e of n.children) d(e, t(e) ?? `unowned`);
        let p = {};
        for (let [e, t] of [...i.entries()].sort(
          (e, t) => t[1].progs.size - e[1].progs.size,
        ))
          p[e] = {
            programs: t.progs.size,
            materials: t.mats.size,
            unnamed: t.unnamed,
            texMB: Math.round(t.texMB * 10) / 10,
            geoMB: Math.round(t.geoMB * 10) / 10,
            gpuGeoMB: Math.round(t.gpuGeoMB * 10) / 10,
          };
        let m = r.info.programs?.length ?? 0;
        return {
          owners: p,
          programsTotal: m,
          programsInScene: s.size,
          programsElsewhere: Math.max(0, m - s.size),
        };
      },
    };
  return ((window.__owners = d), d);
}
function Ga(e) {
  let t = new Set(),
    n = new Set(),
    r = 0,
    i = 0,
    a = 0;
  e.scene.traverse((e) => {
    let o = e,
      s = o.geometry;
    if (s) {
      let e = Object.values(s.attributes);
      s.index && e.push(s.index);
      for (let n of e) {
        let e = n.array ?? n.data?.array,
          i = e?.buffer;
        e && i && !t.has(i) && (t.add(i), (r += e.byteLength));
      }
    }
    let c = e;
    if (c.isInstancedMesh) {
      let e = c.instanceMatrix.array;
      t.has(e.buffer) || (t.add(e.buffer), (r += e.byteLength));
    }
    let l = Array.isArray(o.material)
      ? o.material
      : o.material
        ? [o.material]
        : [];
    for (let e of l)
      for (let t in e) {
        let r = e[t];
        if (!r || !r.isTexture || n.has(r.image)) continue;
        n.add(r.image);
        let o = r.image;
        o &&
          (o.getContext
            ? ((i += (o.width || 0) * (o.height || 0) * 4), a++)
            : o.data?.byteLength && (i += o.data.byteLength));
      }
  });
  let o = (e) => Math.round(e / 104857.6) / 10,
    s = performance.memory;
  return {
    geoKeptMB: o(r),
    texSourcesMB: o(i),
    canvases: a,
    releasedGeoMB: Math.round(L.geoMB * 10) / 10,
    releasedTexMB: Math.round(L.texMB * 10) / 10,
    clampedMB: Math.round(L.clampedMB * 10) / 10,
    pending: L.pendingGeo + L.pendingTex,
    blockedUpdates: L.blocked,
    heapMB: s ? Math.round(s.usedJSHeapSize / 1048576) : void 0,
  };
}
var Ka = { TWD: !0, JPY: !1 },
  qa = { style: `tight` },
  Ja = { style: `tight`, group: `none` },
  Ya = `TWD`;
function Xa(e) {
  An[e] && (Ya = e);
}
function Za(e = Ya) {
  return An[e].symbol;
}
function Qa(e = `spaced`, t = Ya) {
  return An[t].symbol + (e === `spaced` && Ka[t] ? ` ` : ``);
}
function $a(e, t = `en`) {
  if (t === `none`) return `${e}`;
  let n = Math.round(e);
  return t === `host` ? n.toLocaleString() : n.toLocaleString(`en-US`);
}
function eo(e, t = {}) {
  let n = $a(e, t.group),
    r = t.style ?? `spaced`;
  return r === `bare` ? n : Qa(r, t.currency ?? Ya) + n;
}
function to(e, t = {}) {
  return eo(Mn(e, t.currency ?? Ya), t);
}
function no(e, t) {
  return (
    Xa(t),
    {
      currency: t,
      symbol: Za(t),
      balance: (n = t) => Mn(e.wallet, n),
      add: (n, r = t, i) => e.addMoney(n, i, r),
      canAfford: (n, r = t) => Number.isFinite(n) && e.wallet >= jn(n, r),
      spend(n, r = t, i) {
        return !(Number.isFinite(n) && n >= 0) || e.wallet < jn(n, r)
          ? !1
          : (e.addMoney(-n, i, r), !0);
      },
      format: (e, n) => eo(e, { currency: t, ...n }),
      formatUnits: (e, n) => to(e, { currency: t, ...n }),
    }
  );
}
var ro = `tgta-chunk-reload`,
  io = 6e5,
  ao = 6e4,
  oo = `loading`,
  so = null,
  co = !1,
  lo = !1,
  uo = `none`;
function fo(e, t) {
  ((oo = e),
    t && (so = t),
    co && oo !== `playing` && mo(),
    oo === `playing` && ho());
}
function po(e) {
  if (co || lo) return;
  let t = Number(B(ro)) || 0;
  if (t > 0 && Date.now() - t < io) {
    (console.warn(
      `[update] ${e}: code chunk unavailable again — not reloading (once per 10 min)`,
    ),
      uo === `none` && (uo = `due`),
      ho());
    return;
  }
  if (
    ((co = !0),
    V(ro, String(Date.now())),
    console.warn(
      `[update] ${e}: code chunk unavailable (new deploy or network error) — reloading ${oo === `playing` ? `at the next safe moment` : `now`}`,
    ),
    oo !== `playing` || !so)
  )
    return mo();
  let n = so;
  go(
    n,
    {
      zh: `遊戲已更新，稍後將自動重新載入（進度會保存）`,
      en: `The game was updated — it will reload shortly (progress is saved)`,
    },
    6,
  );
  let r = () => mo();
  (n.events.on(`game:pause`, ({ paused: e }) => e && r()),
    n.events.on(`player:respawned`, r),
    n.events.on(`mission:completed`, r),
    n.events.on(`mission:failed`, r),
    n.events.on(`mrt:travel`, r));
  let i = Date.now(),
    a = () => {
      if (lo) return;
      let e = !1;
      try {
        e = !!n.missions?.active;
      } catch {
        e = !1;
      }
      if (e || Date.now() - i < ao) return void setTimeout(a, 5e3);
      (go(
        n,
        {
          zh: `遊戲已更新，重新載入中…`,
          en: `The game was updated — reloading…`,
        },
        3,
      ),
        setTimeout(r, 2500));
    };
  setTimeout(a, 5e3);
}
