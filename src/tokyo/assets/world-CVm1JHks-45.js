// tokyo/assets/world-CVm1JHks 45 — extfallback
// Lines 14263-14592 of readable/tokyo/assets/world-CVm1JHks.pretty.js (statement-aligned).
function fd(e) {
  let t = 0;
  for (let n of e) {
    let e = 1 / 0,
      r = -1 / 0,
      i = 1 / 0,
      a = -1 / 0;
    for (let t of n.sites)
      (t.x < e && (e = t.x),
        t.x > r && (r = t.x),
        t.z < i && (i = t.z),
        t.z > a && (a = t.z));
    if (e > r) continue;
    let o = Math.hypot(r - e, a - i);
    o > t && (t = o);
  }
  return Math.round(t);
}
function pd(e, t, n, r, i) {
  let a = new Map();
  for (let e of n) a.set(e.id, e);
  let s = t.filter((e) => e.ok && (a.get(e.id)?.proxy?.length ?? 0) > 0),
    c = new Map(),
    l = dd(s, i?.items ?? []);
  l.forEach((e, t) => {
    for (let n of e.sites)
      c.set(n.id, {
        id: n.id,
        cell: t,
        start: 0,
        count: 0,
        hidden: !1,
        range: { start: 0, count: 0 },
      });
  });
  let u = new ne();
  ((u.name = `sites-far`),
    (u.userData.hlodIgnore = !0),
    (u.userData.sites = `far`),
    (u.userData.owner = `sites`),
    (u.matrixAutoUpdate = !1));
  let d = e.quality?.mobile || e.quality?.level === `low` ? zu.low : zu.high,
    f = [],
    p = {
      sites: s.length,
      cells: l.length,
      tris: 0,
      gapItems: i?.items.length ?? 0,
      buildMs: 0,
      sliceMaxMs: 0,
      waitingForMaterial: !1,
      extFallback: !1,
      meshes: 0,
      hidden: 0,
      spanM: fd(l),
      triCap: d,
      degraded: 0,
      skipped: 0,
    };
  l.length > Iu &&
    console.warn(
      `[test] sites proxy: ${l.length} cells > ${Iu} — the far layer would cost one draw call each`,
    );
  let m = !1,
    h = !1,
    g = null,
    _ = null;
  try {
    let t = e.statics;
    if (t && i && i.items.length) {
      let e = Fc(t, `sites:gaps`);
      for (let t of i.items)
        e.addBox(t.x0, t.z0, t.x1, t.z1, t.y0 - 0.2, t.y1, `site`);
      _ = e;
    }
  } catch (e) {
    console.warn(`[init] sites gap colliders failed`, e);
  }
  function v(e) {
    e.mesh &&
      (e.mesh.visible =
        !p.waitingForMaterial &&
        (e.hiddenCount < e.sites.length || e.gaps.length > 0));
  }
  function y(e, t) {
    let n = e.mesh,
      r = e.orig;
    if (!n || !r || t.count <= 0) return;
    let i = n.geometry.index,
      a = i.array,
      o = t.start + t.count;
    if (t.hidden) a.fill(0, t.start, o);
    else for (let e = t.start; e < o; e++) a[e] = r[e];
    ((t.range.start = t.start), (t.range.count = t.count));
    let s = i.updateRanges;
    (s.indexOf(t.range) < 0 && s.push(t.range), (i.needsUpdate = !0));
  }
  function b() {
    if (p.extFallback || r.city) return !0;
    r.lmFallback && Yc(e, r);
    let t = !r.lmFallback;
    if (((p.waitingForMaterial = !t), t)) for (let e of f) e.material = r.lm;
    for (let e of l) v(e);
    return t;
  }
  function x() {
    if (!(p.extFallback || m)) {
      ((p.extFallback = !0), (p.waitingForMaterial = !1));
      for (let e of f)
        (Ou(e.geometry, r.atlas.white),
          (e.material = r.ext),
          (e.receiveShadow = !1));
      for (let e of l) (e.far instanceof o && (e.far.material = r.ext), v(e));
      console.warn(
        `[test] sites proxy: landmark material never appeared — far layer falls back to the sites-ext material (flat shading, no fog match) so the massing stays on screen; expose LandmarksAPI.shared = {main, foliage}`,
      );
    }
  }
  function S(e) {
    if (m || e <= 0) {
      m || x();
      return;
    }
    g = setTimeout(() => {
      ((g = null), !m && (b() || S(e - 1)));
    }, 1e3);
  }
  let C = [];
  async function w() {
    let t = ud(),
      n = ud(),
      i = 0,
      g = 0,
      _ = d * 0.45,
      x = async () => {
        let t = ud() - n;
        (t > p.sliceMaxMs && (p.sliceMaxMs = t),
          t > Vu &&
            typeof e?.yieldFrame == `function` &&
            ((p.buildMs += t), await e.yieldFrame(), (n = ud())));
      };
    for (let t = 0; t < l.length; t++) {
      if (m) return;
      let s = l[t],
        h = new ut(2048);
      h.coarse = !0;
      for (let t of s.sites) {
        let n = a.get(t.id),
          r = c.get(t.id);
        ((r.start = h.icount), h.place(t.x, t.y, t.z, t.facing));
        let o = n.lot.w > 0 ? t.w / n.lot.w : 1,
          l = n.lot.d > 0 ? t.d / n.lot.d : 1,
          u = o < 0.999 || l < 0.999;
        id(e, t, n, C);
        let f = !1,
          g = 0;
        for (let e of n.proxy.slice(0, 8)) {
          let n = i >= d * 0.97;
          if (n && g > 0) {
            p.skipped++;
            continue;
          }
          let r = e;
          if (u) {
            let t = Math.min(o, l),
              n = e.rot ? t : o,
              i = e.rot ? t : l;
            r = { ...e, x: e.x * o, z: e.z * l, w: e.w * n, d: e.d * i };
          }
          for (let e = 0; e < C.length; e++) {
            let n = rd(r, C[e]);
            n &&
              ((r = n),
              f ||
                ((f = !0),
                console.warn(
                  `[test] sites proxy: ${t.id} far massing trimmed to ${C[e].why} — the authored box reached outside it`,
                )));
          }
          let a = n || i >= d * Bu,
            c = h.icount;
          (ad(h, r, { inset: Lu, low: Ru, detail: `far`, plain: a }),
            (i += (h.icount - c) / 3),
            g++,
            a && (r.roof ?? `flat`) !== `flat` && p.degraded++);
          let _ = nd(r);
          if ((_ > s.maxH && (s.maxH = _), await x(), m)) return;
        }
        if ((h.reset(), (r.count = h.icount - r.start), await x(), m)) return;
      }
      if (s.gaps.length) {
        ((h.coarse = !1), h.reset());
        for (let e of s.gaps) {
          if (i + g >= d) {
            p.skipped++;
            continue;
          }
          let t = h.icount;
          (g >= _ ? (ld(h, e), p.degraded++) : cd(h, e),
            (g += (h.icount - t) / 3));
        }
        if (((h.coarse = !0), await x(), m)) return;
      }
      if (h.icount === 0) continue;
      if (typeof e?.yieldFrame == `function`) {
        if (((p.buildMs += ud() - n), await e.yieldFrame(), m)) return;
        n = ud();
      }
      let b = h.build();
      b.name = `sites-far-${t}`;
      let S = (r.cityLook && r.city) || null;
      (!S && !p.extFallback && r.lmFallback && Yc(e, r),
        !S &&
          !p.extFallback &&
          r.lmFallback &&
          ((p.extFallback = !0), (p.waitingForMaterial = !1)),
        S
          ? r.cityLook.convert(b, r.atlas.white)
          : p.extFallback && Ou(b, r.atlas.white));
      let w = S
        ? new o(b, S)
        : p.extFallback
          ? new o(b, r.ext)
          : Hc(b, r.lm, `sites-far-${t}`);
      ((b = w.geometry),
        (w.name = `sites-far-${t}`),
        (w.renderOrder = 1),
        (w.castShadow = !1),
        (w.receiveShadow = !!S || !p.extFallback),
        (w.frustumCulled = !0),
        (w.matrixAutoUpdate = !1),
        w.updateMatrix(),
        (w.userData.sites = `far`),
        p.extFallback || S
          ? ((w.userData.keepCpu = !0), (b.userData.keepCpu = !0))
          : Ue(w),
        (w.userData.hlodIgnore = !0),
        (s.mesh = w),
        (s.orig = b.index.array.slice()),
        (p.tris += h.icount / 3),
        f.push(w),
        u.add(w));
      for (let e of s.sites) {
        let t = c.get(e.id);
        t.hidden && (s.hiddenCount++, y(s, t));
      }
      (v(s), await x());
    }
    if (
      ((p.buildMs += ud() - n),
      (p.buildMs = Math.round(p.buildMs * 100) / 100),
      m)
    )
      return;
    h = !0;
    try {
      (e.scene?.add(u), u.updateMatrixWorld(!0));
    } catch {}
    (b() || S(60), (p.meshes = f.length));
    let w = Math.round(ud() - t),
      T = Math.round(p.tris);
    (s.length &&
      console.info(
        `[init] sites proxy ${s.length} sites · ${f.length} meshes · ${T}/${d} tris · ${p.buildMs} ms cpu (${w} ms wall) · ${p.gapItems} gap fillers · span ${p.spanM} m` +
          (p.degraded || p.skipped
            ? ` · budget: ${p.degraded} flattened, ${p.skipped} dropped`
            : ``),
      ),
      f.length > Iu &&
        console.warn(
          `[test] sites proxy over budget: ${f.length} draw calls > ${Iu}`,
        ),
      T > d && console.warn(`[test] sites proxy over budget: ${T} tris > ${d}`),
      p.sliceMaxMs > 2.5 &&
        console.warn(
          `[test] sites proxy slice ${p.sliceMaxMs.toFixed(1)} ms > 2.5 ms (one site's massing is too heavy)`,
        ));
  }
  return {
    ready: s.length
      ? w().catch((e) => console.warn(`[test] sites proxy build failed`, e))
      : Promise.resolve(),
    root: u,
    meshes: f,
    stats: p,
    get gapColliders() {
      return _?.colliderCount ?? 0;
    },
    has(e) {
      return c.has(e);
    },
    isHidden(e) {
      return c.get(e)?.hidden ?? !1;
    },
    range(e) {
      let t = c.get(e);
      return t && h ? [t.start, t.count] : null;
    },
    setHidden(e, t) {
      let n = c.get(e);
      if (!n || n.hidden === t || m) return;
      ((n.hidden = t), (p.hidden += t ? 1 : -1));
      let r = l[n.cell];
      r.mesh && ((r.hiddenCount += t ? 1 : -1), y(r, n), v(r));
    },
    dispose() {
      if (!m) {
        ((m = !0), g && clearTimeout(g), (g = null), u.removeFromParent());
        for (let t of l) {
          if (t.far) {
            try {
              e.env?.removeFar?.(t.far);
            } catch {}
            (t.far.removeFromParent(), (t.far = null));
          }
          ((t.mesh &&=
            (Gc(t.mesh) ? t.mesh.dispose() : t.mesh.geometry.dispose(),
            t.mesh.removeFromParent(),
            null)),
            (t.orig = null));
        }
        f.length = 0;
        try {
          _?.dispose();
        } catch {}
        ((_ = null), c.clear());
      }
    },
  };
}
