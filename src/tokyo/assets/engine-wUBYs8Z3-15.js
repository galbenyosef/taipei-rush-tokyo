// tokyo/assets/engine-wUBYs8Z3 15 — math
// Lines 4644-4988 of readable/tokyo/assets/engine-wUBYs8Z3.pretty.js (statement-aligned).
function* Ta(e, t, n = {}) {
  let r = e.getContext();
  if (r.isContextLost()) return `skip`;
  let i = t.image;
  if (t.version === 0 || !i || i.complete === !1) return `skip`;
  let a = i?.width ?? 0,
    o = i?.height ?? 0,
    s = t,
    c = t.isDataTexture ? (i?.data ?? null) : null,
    l = c ? ba(r, t) : null,
    u = !c && xa(i) ? i : null,
    d = e.capabilities.maxTextureSize,
    f =
      typeof WebGL2RenderingContext < `u` &&
      r instanceof WebGL2RenderingContext &&
      !s.isCompressedTexture &&
      !s.isCubeTexture &&
      !s.isDataArrayTexture &&
      !s.isData3DTexture &&
      !s.isVideoTexture &&
      !s.isRenderTargetTexture &&
      !s.isDepthTexture &&
      !(t.mipmaps && t.mipmaps.length) &&
      a > 0 &&
      o > 0 &&
      a <= d &&
      o <= d,
    p = a * (l ? l.comps * l.bpc : 4),
    m =
      f &&
      (l
        ? !!c &&
          c.byteLength >= p * o &&
          p % Math.max(1, t.unpackAlignment) === 0
        : !!u && t.format === 1023 && t.type === 1009) &&
      p * o >= ya;
  if ((wa.jobs++, !m)) {
    try {
      e.initTexture(t);
    } catch (e) {
      return (console.warn(`[upload] texture upload failed`, e), `skip`);
    }
    return (wa.whole++, `whole`);
  }
  let h = Ar(t),
    g = !1,
    _ = () => {
      g || ((g = !0), h(!0));
    };
  try {
    ((t.source.dataReady = !1), e.initTexture(t));
  } catch (e) {
    return (
      (t.source.dataReady = !0),
      h(!1),
      console.warn(`[upload] texture allocation failed`, e),
      (t.needsUpdate = !0),
      `skip`
    );
  } finally {
    t.source.dataReady = !0;
  }
  if (!e.properties.get(t).__webglTexture)
    return (h(!1), (t.needsUpdate = !0), `skip`);
  let v = c,
    y = () => {
      let e = typeof n.bandBytes == `function` ? n.bandBytes() : n.bandBytes;
      return e && e > 0 ? e : 4 << 20;
    },
    b = Math.max(8, Math.min(o, Math.floor(Math.min(y(), ya) / p))),
    x = n.targetMs ?? 3,
    S = null,
    C = null,
    w = performance.now(),
    ee = 0;
  try {
    for (let i = 0; i < o;) {
      if ((yield, r.isContextLost() || !Ca(e, r, t))) return `skip`;
      let s = Math.min(b, o - i, Math.max(8, Math.floor(y() / p))),
        c = performance.now();
      Sa(e, r, t);
      let d = t.flipY ? o - i - s : i;
      if (v && l) {
        let e = v.BYTES_PER_ELEMENT ?? 1;
        r.texSubImage2D(
          r.TEXTURE_2D,
          0,
          0,
          d,
          a,
          s,
          l.format,
          l.type,
          v,
          (i * p) / e,
        );
      } else if (u) {
        if (!S) {
          if (
            ((S =
              typeof document < `u`
                ? document.createElement(`canvas`)
                : new OffscreenCanvas(a, s)),
            (S.width = a),
            (S.height = s),
            (C = S.getContext(`2d`)),
            !C)
          )
            throw Error(`no 2D context for the upload strip`);
          ((C.globalCompositeOperation = `copy`),
            (C.imageSmoothingEnabled = !1));
        }
        (S.height !== s &&
          ((S.height = s),
          (C.globalCompositeOperation = `copy`),
          (C.imageSmoothingEnabled = !1)),
          C.drawImage(u, 0, i, a, s, 0, 0, a, s),
          r.texSubImage2D(r.TEXTURE_2D, 0, 0, d, r.RGBA, r.UNSIGNED_BYTE, S));
      }
      ((i += s), i >= o && t.generateMipmaps && r.generateMipmap(r.TEXTURE_2D));
      let f = performance.now() - c;
      (n.onBand?.(ee++, f, s),
        wa.bands++,
        f > wa.maxBandMs && (wa.maxBandMs = f),
        (b = Math.max(
          8,
          Math.min(
            Math.floor((4 << 20) / p),
            Math.round((s * x) / Math.max(0.25, f)),
          ),
        )));
    }
  } catch (e) {
    return (
      console.warn(
        `[upload] band upload failed — the texture uploads whole on first use`,
        e,
      ),
      (t.needsUpdate = !0),
      h(!1),
      (g = !0),
      `skip`
    );
  } finally {
    (S && (S.width = S.height = 1), (wa.lastMs = performance.now() - w));
  }
  return (_(), `bands`);
}
function Ea(e, t, n, r, i = {}) {
  let a = e.getContext();
  if (
    a.isContextLost() ||
    !(
      typeof WebGL2RenderingContext < `u` && a instanceof WebGL2RenderingContext
    )
  )
    return !1;
  let o = t.image,
    s = i.data ?? o?.data ?? null,
    c = o?.width ?? 0,
    l = o?.height ?? 0,
    u = ba(a, t);
  if (!s || !u || !c || !l) return !1;
  let d = Math.max(0, Math.floor(n)),
    f = Math.min(l, Math.ceil(r));
  if (f <= d) return !0;
  let p = c * u.comps * u.bpc;
  if (
    p % Math.max(1, t.unpackAlignment) !== 0 ||
    s.byteLength < p * f ||
    !e.properties.get(t) ||
    !e.properties.get(t).__webglTexture
  )
    return !1;
  try {
    (Ca(e, a, t), Sa(e, a, t));
    let n = s.BYTES_PER_ELEMENT ?? 1,
      r = f - d;
    return (
      a.texSubImage2D(
        a.TEXTURE_2D,
        0,
        0,
        t.flipY ? l - d - r : d,
        c,
        r,
        u.format,
        u.type,
        s,
        (d * p) / n,
      ),
      i.mips && a.generateMipmap(a.TEXTURE_2D),
      !0
    );
  } catch (e) {
    return (console.warn(`[upload] row upload failed`, e), !1);
  }
}
function Da(e = typeof location > `u` ? `` : location.search) {
  return new URLSearchParams(e).get(`rz`) !== `0`;
}
var Oa =
    /shadowCoord\.xyz \/= shadowCoord\.w;\s*shadowCoord\.z \+= shadowBias;\s*bool inFrustum/,
  ka = `shadowCoord.xyz /= shadowCoord.w;
#ifdef USE_REVERSED_DEPTH_BUFFER
shadowCoord.z -= shadowBias;
#else
shadowCoord.z += shadowBias;
#endif
bool inFrustum`,
  Aa =
    /float getShadow\(\s*sampler2DShadow[^{]*\{[^}]*?USE_REVERSED_DEPTH_BUFFER[^}]*?shadowBias[\s\S]*?bool inFrustum/;
function ja(e = ve) {
  let t = e.shadowmap_pars_fragment;
  return typeof t == `string`
    ? t.includes(`shadowCoord.xyz /= shadowCoord.w;
#ifdef USE_REVERSED_DEPTH_BUFFER
shadowCoord.z -= shadowBias;
#else
shadowCoord.z += shadowBias;
#endif
bool inFrustum`)
      ? `already-patched`
      : Oa.test(t)
        ? ((e.shadowmap_pars_fragment = t.replace(Oa, ka)), `patched`)
        : Aa.test(t)
          ? `native`
          : `unknown`
    : `unknown`;
}
function Ma(e = ve) {
  let t = e.shadowmap_pars_fragment;
  typeof t == `string` &&
    t.includes(`shadowCoord.xyz /= shadowCoord.w;
#ifdef USE_REVERSED_DEPTH_BUFFER
shadowCoord.z -= shadowBias;
#else
shadowCoord.z += shadowBias;
#endif
bool inFrustum`) &&
    (e.shadowmap_pars_fragment = t.replace(ka, Na.get(e) ?? t));
}
var Na = new WeakMap();
function Pa(e) {
  let t = e.shadowmap_pars_fragment,
    n = typeof t == `string` ? Oa.exec(t) : null;
  n && !Na.has(e) && Na.set(e, n[0]);
}
var Fa = 0.6180339,
  Ia = -0.4142135;
function La(e, t) {
  let n = null,
    r = Object.prototype.hasOwnProperty.call(t, `polygonOffset`),
    i = t.polygonOffset;
  t.polygonOffset = (e, t) => {
    n = [e, t];
  };
  try {
    (e.setPolygonOffset(!0, Fa, Ia), e.setPolygonOffset(!1));
  } finally {
    r ? (t.polygonOffset = i) : delete t.polygonOffset;
  }
  let a = n;
  if (!a) return null;
  let o = (e, t) => (Math.abs(e - t) < 1e-6 ? -1 : +(Math.abs(e + t) < 1e-6)),
    s = o(a[0], Fa),
    c = o(a[1], Ia);
  return s && c ? { factor: s, units: c } : null;
}
function Ra(e, t, n = 16) {
  if (t.factor === 1 && t.units === 1 && n === 1) return;
  let r = e.polygonOffset.bind(e),
    i = t.factor,
    a = t.units * n;
  e.polygonOffset = (e, t) => r(e * i, t * a);
}
function za(e, t, n = typeof location > `u` ? `` : location.search) {
  let r = {
      wanted: t,
      supported: !!e.capabilities.reversedDepthBuffer,
      active: !1,
      pcf: `skipped`,
      polygonOffset: null,
      reason: ``,
    },
    i = e.state.buffers.depth;
  if (!t) return ((r.reason = `rz=0`), r);
  if (!r.supported || !i.getReversed())
    return ((r.reason = `EXT_clip_control unavailable`), r);
  if (new URLSearchParams(n).get(`rzfix`) === `0`)
    return ((r.active = !0), (r.reason = `rzfix=0: quirk fixes skipped`), r);
  let a = ve;
  (Pa(a), (r.pcf = ja(a)));
  let o = e.getContext();
  if (
    ((r.polygonOffset = La(e.state, o)),
    r.pcf === `unknown` || !r.polygonOffset)
  )
    return (
      (r.reason =
        r.pcf === `unknown`
          ? `three's PCF shadow chunk changed`
          : `three's polygon-offset handling changed`),
      console.error(
        `[renderer] reversed-Z disabled: ${r.reason} — update src/render/reversedZ.ts (test/reversedZ.test.mjs)`,
      ),
      i.setReversed(!1),
      Ma(a),
      r
    );
  let s = Number(new URLSearchParams(n).get(`rzunits`));
  return (Ra(o, r.polygonOffset, s > 0 ? s : 16), (r.active = !0), r);
}
var Ba = 300;
function Va(e) {
  let t = 0,
    n = 0,
    r = () => {
      ((t = 0), e());
    },
    i = () => {
      (e(),
        (t ||= requestAnimationFrame(r)),
        clearTimeout(n),
        (n = window.setTimeout(e, Ba)));
    },
    a = window.visualViewport;
  return (
    window.addEventListener(`resize`, i),
    window.addEventListener(`orientationchange`, i),
    a?.addEventListener(`resize`, i),
    () => {
      (window.removeEventListener(`resize`, i),
        window.removeEventListener(`orientationchange`, i),
        a?.removeEventListener(`resize`, i),
        t && cancelAnimationFrame(t),
        clearTimeout(n));
    }
  );
}
function Ha() {
  return typeof matchMedia == `function`
    ? matchMedia(`(orientation: portrait)`).matches
    : window.innerHeight > window.innerWidth;
}
