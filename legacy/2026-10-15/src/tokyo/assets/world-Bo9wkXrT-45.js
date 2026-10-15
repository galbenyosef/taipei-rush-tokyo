// tokyo/assets/world-Bo9wkXrT 45 — extfallback
// Lines 14136-14465 of readable/tokyo/assets/world-Bo9wkXrT.pretty.js (statement-aligned).
function Xu(e) {
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
function Zu(e, t, n, r, i) {
  let a = new Map();
  for (let e of n) a.set(e.id, e);
  let o = t.filter((e) => e.ok && (a.get(e.id)?.proxy?.length ?? 0) > 0),
    s = new Map(),
    c = Yu(o, i?.items ?? []);
  c.forEach((e, t) => {
    for (let n of e.sites)
      s.set(n.id, {
        id: n.id,
        cell: t,
        start: 0,
        count: 0,
        hidden: !1,
        range: { start: 0, count: 0 },
      });
  });
  let l = new v();
  ((l.name = `sites-far`),
    (l.userData.hlodIgnore = !0),
    (l.userData.sites = `far`),
    (l.userData.owner = `sites`),
    (l.matrixAutoUpdate = !1));
  let u = e.quality?.mobile || e.quality?.level === `low` ? Cu.low : Cu.high,
    d = [],
    f = {
      sites: o.length,
      cells: c.length,
      tris: 0,
      gapItems: i?.items.length ?? 0,
      buildMs: 0,
      sliceMaxMs: 0,
      waitingForMaterial: !1,
      extFallback: !1,
      meshes: 0,
      hidden: 0,
      spanM: Xu(c),
      triCap: u,
      degraded: 0,
      skipped: 0,
    };
  c.length > bu &&
    console.warn(
      `[test] sites proxy: ${c.length} cells > ${bu} — the far layer would cost one draw call each`,
    );
  let p = !1,
    m = !1,
    h = null,
    g = null;
  try {
    let t = e.statics;
    if (t && i && i.items.length) {
      let e = yc(t, `sites:gaps`);
      for (let t of i.items)
        e.addBox(t.x0, t.z0, t.x1, t.z1, t.y0 - 0.2, t.y1, `site`);
      g = e;
    }
  } catch (e) {
    console.warn(`[init] sites gap colliders failed`, e);
  }
  function _(e) {
    e.mesh &&
      (e.mesh.visible =
        !f.waitingForMaterial &&
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
    if (f.extFallback || r.city) return !0;
    r.lmFallback && Nc(e, r);
    let t = !r.lmFallback;
    if (((f.waitingForMaterial = !t), t)) for (let e of d) e.material = r.lm;
    for (let e of c) _(e);
    return t;
  }
  function x() {
    if (!(f.extFallback || p)) {
      ((f.extFallback = !0), (f.waitingForMaterial = !1));
      for (let e of d)
        (fu(e.geometry, r.atlas.white),
          (e.material = r.ext),
          (e.receiveShadow = !1));
      for (let e of c) (e.far instanceof P && (e.far.material = r.ext), _(e));
      console.warn(
        `[test] sites proxy: landmark material never appeared — far layer falls back to the sites-ext material (flat shading, no fog match) so the massing stays on screen; expose LandmarksAPI.shared = {main, foliage}`,
      );
    }
  }
  function S(e) {
    if (p || e <= 0) {
      p || x();
      return;
    }
    h = setTimeout(() => {
      ((h = null), !p && (b() || S(e - 1)));
    }, 1e3);
  }
  let C = [];
  async function w() {
    let t = Ju(),
      n = Ju(),
      i = 0,
      h = 0,
      g = u * 0.45,
      v = async () => {
        let t = Ju() - n;
        (t > f.sliceMaxMs && (f.sliceMaxMs = t),
          t > Tu &&
            typeof e?.yieldFrame == `function` &&
            ((f.buildMs += t), await e.yieldFrame(), (n = Ju())));
      };
    for (let t = 0; t < c.length; t++) {
      if (p) return;
      let o = c[t],
        m = new rt(2048);
      m.coarse = !0;
      for (let t of o.sites) {
        let n = a.get(t.id),
          r = s.get(t.id);
        ((r.start = m.icount), m.place(t.x, t.y, t.z, t.facing));
        let c = n.lot.w > 0 ? t.w / n.lot.w : 1,
          l = n.lot.d > 0 ? t.d / n.lot.d : 1,
          d = c < 0.999 || l < 0.999;
        Hu(e, t, n, C);
        let h = !1,
          g = 0;
        for (let e of n.proxy.slice(0, 8)) {
          let n = i >= u * 0.97;
          if (n && g > 0) {
            f.skipped++;
            continue;
          }
          let r = e;
          if (d) {
            let t = Math.min(c, l),
              n = e.rot ? t : c,
              i = e.rot ? t : l;
            r = { ...e, x: e.x * c, z: e.z * l, w: e.w * n, d: e.d * i };
          }
          for (let e = 0; e < C.length; e++) {
            let n = Vu(r, C[e]);
            n &&
              ((r = n),
              h ||
                ((h = !0),
                console.warn(
                  `[test] sites proxy: ${t.id} far massing trimmed to ${C[e].why} — the authored box reached outside it`,
                )));
          }
          let a = n || i >= u * wu,
            s = m.icount;
          (Uu(m, r, { inset: xu, low: Su, detail: `far`, plain: a }),
            (i += (m.icount - s) / 3),
            g++,
            a && (r.roof ?? `flat`) !== `flat` && f.degraded++);
          let _ = Bu(r);
          if ((_ > o.maxH && (o.maxH = _), await v(), p)) return;
        }
        if ((m.reset(), (r.count = m.icount - r.start), await v(), p)) return;
      }
      if (o.gaps.length) {
        ((m.coarse = !1), m.reset());
        for (let e of o.gaps) {
          if (i + h >= u) {
            f.skipped++;
            continue;
          }
          let t = m.icount;
          (h >= g ? (qu(m, e), f.degraded++) : Ku(m, e),
            (h += (m.icount - t) / 3));
        }
        if (((m.coarse = !0), await v(), p)) return;
      }
      if (m.icount === 0) continue;
      if (typeof e?.yieldFrame == `function`) {
        if (((f.buildMs += Ju() - n), await e.yieldFrame(), p)) return;
        n = Ju();
      }
      let b = m.build();
      b.name = `sites-far-${t}`;
      let x = (r.cityLook && r.city) || null;
      (!x && !f.extFallback && r.lmFallback && Nc(e, r),
        !x &&
          !f.extFallback &&
          r.lmFallback &&
          ((f.extFallback = !0), (f.waitingForMaterial = !1)),
        x
          ? r.cityLook.convert(b, r.atlas.white)
          : f.extFallback && fu(b, r.atlas.white));
      let S = x
        ? new P(b, x)
        : f.extFallback
          ? new P(b, r.ext)
          : Ec(b, r.lm, `sites-far-${t}`);
      ((b = S.geometry),
        (S.name = `sites-far-${t}`),
        (S.renderOrder = 1),
        (S.castShadow = !1),
        (S.receiveShadow = !!x || !f.extFallback),
        (S.frustumCulled = !0),
        (S.matrixAutoUpdate = !1),
        S.updateMatrix(),
        (S.userData.sites = `far`),
        f.extFallback || x
          ? ((S.userData.keepCpu = !0), (b.userData.keepCpu = !0))
          : Ne(S),
        (S.userData.hlodIgnore = !0),
        (o.mesh = S),
        (o.orig = b.index.array.slice()),
        (f.tris += m.icount / 3),
        d.push(S),
        l.add(S));
      for (let e of o.sites) {
        let t = s.get(e.id);
        t.hidden && (o.hiddenCount++, y(o, t));
      }
      (_(o), await v());
    }
    if (
      ((f.buildMs += Ju() - n),
      (f.buildMs = Math.round(f.buildMs * 100) / 100),
      p)
    )
      return;
    m = !0;
    try {
      (e.scene?.add(l), l.updateMatrixWorld(!0));
    } catch {}
    (b() || S(60), (f.meshes = d.length));
    let x = Math.round(Ju() - t),
      w = Math.round(f.tris);
    (o.length &&
      console.info(
        `[init] sites proxy ${o.length} sites · ${d.length} meshes · ${w}/${u} tris · ${f.buildMs} ms cpu (${x} ms wall) · ${f.gapItems} gap fillers · span ${f.spanM} m` +
          (f.degraded || f.skipped
            ? ` · budget: ${f.degraded} flattened, ${f.skipped} dropped`
            : ``),
      ),
      d.length > bu &&
        console.warn(
          `[test] sites proxy over budget: ${d.length} draw calls > ${bu}`,
        ),
      w > u && console.warn(`[test] sites proxy over budget: ${w} tris > ${u}`),
      f.sliceMaxMs > 2.5 &&
        console.warn(
          `[test] sites proxy slice ${f.sliceMaxMs.toFixed(1)} ms > 2.5 ms (one site's massing is too heavy)`,
        ));
  }
  return {
    ready: o.length
      ? w().catch((e) => console.warn(`[test] sites proxy build failed`, e))
      : Promise.resolve(),
    root: l,
    meshes: d,
    stats: f,
    get gapColliders() {
      return g?.colliderCount ?? 0;
    },
    has(e) {
      return s.has(e);
    },
    isHidden(e) {
      return s.get(e)?.hidden ?? !1;
    },
    range(e) {
      let t = s.get(e);
      return t && m ? [t.start, t.count] : null;
    },
    setHidden(e, t) {
      let n = s.get(e);
      if (!n || n.hidden === t || p) return;
      ((n.hidden = t), (f.hidden += t ? 1 : -1));
      let r = c[n.cell];
      r.mesh && ((r.hiddenCount += t ? 1 : -1), y(r, n), _(r));
    },
    dispose() {
      if (!p) {
        ((p = !0), h && clearTimeout(h), (h = null), l.removeFromParent());
        for (let t of c) {
          if (t.far) {
            try {
              e.env?.removeFar?.(t.far);
            } catch {}
            (t.far.removeFromParent(), (t.far = null));
          }
          ((t.mesh &&=
            (kc(t.mesh) ? t.mesh.dispose() : t.mesh.geometry.dispose(),
            t.mesh.removeFromParent(),
            null)),
            (t.orig = null));
        }
        d.length = 0;
        try {
          g?.dispose();
        } catch {}
        ((g = null), s.clear());
      }
    },
  };
}
