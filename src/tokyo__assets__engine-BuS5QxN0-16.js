// tokyo__assets__engine-BuS5QxN0 16 — ctx
// Lines 6028-6346 of readable/tokyo__assets__engine-BuS5QxN0.pretty.js (statement-aligned).
function Aa(e) {
  let t = this.geometry,
    n = t.boundingBox,
    r = t.boundingSphere;
  if (!n || !r) return e.intersectsObject(this);
  let i = this.matrixWorld.elements,
    a = this.__wk,
    o = this.__wb;
  return a &&
    o &&
    this.__wbSrc === n &&
    a[12] === i[12] &&
    a[13] === i[13] &&
    a[14] === i[14] &&
    a[0] === i[0] &&
    a[5] === i[5] &&
    a[10] === i[10] &&
    a[1] === i[1] &&
    a[2] === i[2] &&
    a[4] === i[4] &&
    a[6] === i[6] &&
    a[8] === i[8] &&
    a[9] === i[9] &&
    a[16] === r.center.x &&
    a[17] === r.center.y &&
    a[18] === r.center.z &&
    a[19] === r.radius
    ? e.intersectsBox(o) && !ja(this, e, o)
    : Na(this, n, r)
      ? e.intersectsBox(this.__wb) && !ja(this, e, this.__wb)
      : ((this.__tight = 0),
        delete this.intersectsFrustum,
        e.intersectsObject(this));
}
function ja(e, t, n) {
  if (!W.on) return !1;
  let r = t.planes[5],
    i = r.normal;
  return (i.x > 0 ? n.min.x : n.max.x) * i.x +
    (i.y > 0 ? n.min.y : n.max.y) * i.y +
    (i.z > 0 ? n.min.z : n.max.z) * i.z +
    r.constant <=
    W.depth ||
    (e.__fcMat !== e.material &&
      ((e.__fcMat = e.material), (e.__fc = Ma(e.material))),
    !e.__fc)
    ? !1
    : (W.culled++, !0);
}
function Ma(e) {
  let t = Array.isArray(e) ? e : [e];
  if (!t.length) return !1;
  for (let e of t) {
    let t = e;
    if (!e || !e.fog || t.isShaderMaterial || t.defines?.FOG_NO_CLIP !== void 0)
      return !1;
  }
  return !0;
}
function Na(e, t, n) {
  let r = e.geometry,
    i = e.matrixWorld.elements,
    a = (e.__wk ??= new Float64Array(20)),
    o = (e.__wb ??= new Se());
  for (let e = 0; e < 16; e++) a[e] = i[e];
  if (
    ((a[16] = n.center.x),
    (a[17] = n.center.y),
    (a[18] = n.center.z),
    (a[19] = n.radius),
    (e.__wbSrc = t),
    t.isEmpty() || !Pa(t, n))
  ) {
    let e = r.attributes.position;
    if (!e || !e.array || !e.array.length) return !1;
    r.computeBoundingBox();
  }
  return (
    o.copy(r.boundingBox).applyMatrix4(e.matrixWorld).expandByScalar(1),
    !0
  );
}
function Pa(e, t) {
  let n = t.radius * 1.001 + 0.01,
    r = t.center,
    i = Math.max(r.x - e.min.x, e.max.x - r.x),
    a = Math.max(r.y - e.min.y, e.max.y - r.y),
    o = Math.max(r.z - e.min.z, e.max.z - r.z);
  return i <= n && a <= n && o <= n;
}
function Fa(e) {
  let t = e;
  if (!t.isMesh || !t.material || e.userData?.noWarm) return null;
  let n = Array.isArray(t.material) ? t.material : [t.material];
  if (
    !e.castShadow &&
    (t.customDepthMaterial ||
      n.some((e) => !e || e.transparent || !e.depthWrite || !e.visible))
  )
    return null;
  let r = t.customDepthMaterial ? t.customDepthMaterial.uuid + `:` : ``;
  if (!r)
    for (let e of n) {
      let t = e;
      if (!t) continue;
      let n =
        (t.alphaTest > 0 && (t.map || t.alphaMap)) ||
        (t.displacementMap && t.displacementScale !== 0) ||
        t.alphaToCoverage;
      r +=
        (n
          ? `clone` +
            (t.displacementMap && t.displacementScale !== 0 ? `d` : ``) +
            (t.alphaToCoverage ? `c` : ``)
          : `shared`) +
        `:` +
        (e.shadowSide ?? e.side) +
        (t.map ? `m` : ``) +
        (t.alphaMap ? `a` : ``) +
        (t.alphaTest > 0 ? `t` : ``) +
        `,`;
    }
  let i = e,
    a = e;
  return (
    (r +=
      (i.isInstancedMesh ? `i` + (i.instanceColor ? `c` : ``) : ``) +
      (e.isSkinnedMesh ? `s` : ``) +
      (a.isBatchedMesh ? `b` + (a._colorsTexture ? `c` : ``) : ``) +
      (t.morphTargetInfluences ? `m` : ``)),
    r
  );
}
function Ia(e) {
  try {
    if (
      e.getExtension(`EXT_color_buffer_float`) ||
      e.getExtension(`EXT_color_buffer_half_float`)
    )
      return E;
  } catch {}
  return p;
}
function La(e) {
  let t = e.geometry?.attributes;
  if (!t) return ``;
  let n = e;
  return (
    (t.normal ? `n` : ``) +
    (t.color && t.color.itemSize === 4 ? `a` : ``) +
    (t.tangent ? `t` : ``) +
    (n.isInstancedMesh && n.instanceColor ? `c` : ``) +
    (n.isInstancedMesh && n.morphTexture ? `M` : ``)
  );
}
function Ra(e, t) {
  for (let n = e; n; n = n.parent) if (n === t) return !0;
  return !1;
}
function za(e) {
  if (e.isInstancedMesh) return !0;
  let t = e.geometry;
  if (t.isInstancedBufferGeometry || t.drawRange.count !== 1 / 0) return !0;
  let n = t.index;
  if (n) return n.count === 0;
  let r = t.attributes.position;
  return !r || r.count === 0;
}
function Ba(e) {
  return Math.round(e / Ta) * Ta;
}
function Va(e) {
  if (e.isInstancedMesh && e.count === 0) return !0;
  let t = e.geometry;
  if (!t) return !1;
  if (
    t.drawRange.count === 0 ||
    (t.isInstancedBufferGeometry && t.instanceCount === 0)
  )
    return !0;
  let n = t.index;
  if (n) return n.count === 0;
  let r = t.attributes.position;
  return !!r && r.count === 0;
}
var Ha = class {
  ctx;
  visible;
  timings;
  el;
  acc = 0;
  top = [];
  constructor(e, t, n = []) {
    ((this.ctx = e),
      (this.visible = t),
      (this.timings = n),
      (this.el = document.createElement(`div`)),
      (this.el.id = `perf-overlay`),
      Object.assign(this.el.style, {
        position: `fixed`,
        left: `8px`,
        top: `8px`,
        zIndex: `9999`,
        font: `11px/1.35 ui-monospace,Menlo,monospace`,
        color: `#9f9`,
        background: `rgba(0,0,0,.55)`,
        padding: `6px 8px`,
        borderRadius: `6px`,
        pointerEvents: `none`,
        whiteSpace: `pre`,
        display: t ? `block` : `none`,
      }),
      document.body.appendChild(this.el),
      (window.__memCensus = () => Ga(e)));
  }
  setVisible(e) {
    ((this.visible = e), (this.el.style.display = e ? `block` : `none`));
  }
  update(e, t) {
    if (((this.acc += e), this.acc < 0.5)) return;
    this.acc = 0;
    let n = 0,
      r = 0,
      i = 0;
    for (let e = 0; e < t.length; e++) {
      let a = t[e];
      a > 0 && ((n += a), r++, (i = Math.max(i, a)));
    }
    let a = r ? n / r : 16.7,
      o = this.ctx.renderer,
      s = o.gl.info,
      c = this.ctx.player?.position,
      l = this.top;
    l.length = 0;
    for (let e of this.timings) l.push(e);
    (l.sort((e, t) => t.avg - e.avg), (l.length = Math.min(5, l.length)));
    let u = 0;
    for (let e of this.timings) u += e.avg;
    let d = {
      fps: Math.round(1e3 / a),
      frameMs: +a.toFixed(2),
      worstMs: +i.toFixed(1),
      calls: s.render.calls,
      tris: s.render.triangles,
      geometries: s.memory.geometries,
      textures: s.memory.textures,
      programs: s.programs?.length ?? 0,
      progAfterReady: Math.max(
        0,
        (s.programs?.length ?? 0) -
          (o.programsAtReady || (s.programs?.length ?? 0)),
      ),
      releasedMB: Math.round(L.geoMB + L.texMB),
      dpr: +o.pixelRatio.toFixed(2),
      cpuMs: +o.cpuMs.toFixed(2),
      gpuMs: o.gpuMs >= 0 ? +o.gpuMs.toFixed(2) : void 0,
      sysMs: +u.toFixed(2),
      emptySkipped: o.skippedEmpty,
      dissolveCulled: o.dissolveCulled,
      shed: +o.shed.toFixed(2),
      cpuBound: o.cpuBound,
      workMs: +(this.ctx.work?.lastUsedMs ?? 0).toFixed(2),
      workWaiting: this.ctx.work?.waiting ?? 0,
      quality:
        this.ctx.quality.level + (this.ctx.quality.mobile ? `-mobile` : ``),
      traffic: this.ctx.traffic?.count ?? 0,
      peds: this.ctx.peds?.count ?? 0,
      bodies: this.ctx.dynamics.bodies.size,
      colliders: this.ctx.statics.count,
      heapMB: performance.memory
        ? Math.round(performance.memory.usedJSHeapSize / 1048576)
        : void 0,
      gpuMB: o.gpuAccount ? Math.round(o.gpuAccount.totalMB()) : void 0,
      gpuPeakMB: o.gpuAccount ? o.gpuAccount.report().peakMB : void 0,
      fpsCap: o.frameCapMs > 0 ? Math.round(1e3 / o.frameCapMs) : 0,
      pos: c ? `${c.x.toFixed(0)},${c.z.toFixed(0)}` : ``,
      packs: Ua(this.ctx),
      topSystems: l.map((e) => `${e.name} ${e.avg.toFixed(2)}`),
    };
    ((window.__perf = d),
      this.visible &&
        (this.el.textContent =
          `${d.fps} fps  ${d.frameMs}ms (worst ${d.worstMs})\ncalls ${d.calls}  tris ${(d.tris / 1e3).toFixed(0)}k  dpr ${d.dpr} [${d.quality}]\ncpu ${d.cpuMs}ms  gpu ${d.gpuMs ?? `–`}ms  js ${d.sysMs}ms\ngeo ${d.geometries} tex ${d.textures} prog ${d.programs} (+${d.progAfterReady}) skip ${d.emptySkipped}/${d.dissolveCulled}\n` +
          (d.shed || d.workWaiting
            ? `shed ${d.shed}${d.cpuBound ? ` CPU-BOUND` : ``}  work ${d.workMs}ms ×${d.workWaiting}\n`
            : ``) +
          `traffic ${d.traffic} peds ${d.peds} bodies ${d.bodies} static ${d.colliders}\n` +
          (d.packs ? `packs ${d.packs}\n` : ``) +
          (d.gpuMB === void 0
            ? ``
            : `gpu mem ${d.gpuMB}MB (peak ${Math.round(d.gpuPeakMB ?? 0)})  cap ${d.fpsCap || `∞`} fps\n`) +
          `pos ${d.pos}` +
          (d.heapMB ? `  heap ${d.heapMB}MB (freed ${d.releasedMB})` : ``) +
          (l.length
            ? `
— slowest (ms) —
` +
              d.topSystems.join(`
`)
            : ``)));
  }
};
function Ua(e) {
  let t = e.districts?.residency?.();
  if (!t) return ``;
  let n = 0,
    r = 0,
    i = 0;
  for (let e in t) {
    if (e.startsWith(`_`)) continue;
    let a = t[e];
    a === `built`
      ? n++
      : a === `building` || a === `dropping`
        ? r++
        : a === `dormant` && i++;
  }
  return `${n} built${r ? ` · ${r} building` : ``}${i ? ` · ${i} dormant` : ``}`;
}
