// tokyo__assets__world-Bo9wkXrT 56 — setattribute
// Lines 18137-18478 of readable/tokyo__assets__world-Bo9wkXrT.pretty.js (statement-aligned).
function Up(e, t, n = [zp], r = 1) {
  let i = e.B,
    a = Pp,
    o = (t ? 1.6 : 1) * r,
    s = Ip(
      [
        [-5200, -2600, 260 * o],
        [-2600, -1500, 48 * o],
        [-1500, -960, 22 * o],
        [-960, 900, 26 * o],
        [900, 1900, 14 * o],
        [1900, 2700, 45 * o],
        [2700, a, 260 * o],
      ],
      [
        i.minX,
        i.maxX,
        ...(e.basin ? [e.riverX, e.riverX - 1.5] : []),
        ...n.flatMap((e) => [e.x0, e.x1]),
      ],
    ),
    c = Ip(
      [
        [-5200, -2700, 260 * o],
        [-2700, -1500, 48 * o],
        [-1500, -1030, 16 * o],
        [-1030, 560, 24 * o],
        [560, 1500, 14 * o],
        [1500, 2700, 45 * o],
        [2700, a, 260 * o],
      ],
      [
        i.minZ,
        i.maxZ,
        ...(e.basin ? [e.riverNorthZ, e.riverNorthZ - 1.5] : []),
        ...n.flatMap((e) => [e.z0, e.z1]),
      ],
    ),
    l = s.length,
    u = c.length,
    d = l * u,
    f = new Float32Array(d);
  for (let t = 0; t < u; t++)
    for (let n = 0; n < l; n++) f[t * l + n] = e.height(s[n], c[t]);
  let p = Bp(e, s, c, f),
    m = (e, t) => n.some((n) => e > n.x0 && e < n.x1 && t > n.z0 && t < n.z1),
    h = new Uint32Array((l - 1) * (u - 1) * 6 + 6),
    g = 0,
    _ = (e, t, n, r) => {
      if (g + 6 > h.length) {
        let e = new Uint32Array(Math.ceil(h.length * 1.5) + 6);
        (e.set(h.subarray(0, g)), (h = e));
      }
      ((h[g] = e),
        (h[g + 1] = n),
        (h[g + 2] = t),
        (h[g + 3] = t),
        (h[g + 4] = n),
        (h[g + 5] = r),
        (g += 6));
    };
  for (let t = 0; t + 1 < u; t++)
    for (let n = 0; n + 1 < l; n++) {
      let i = (s[n] + s[n + 1]) / 2,
        a = (c[t] + c[t + 1]) / 2;
      if ((e.inCity(i, a) && !(r > 1 && e.raised(i, a))) || m(i, a)) continue;
      let o = t * l + n,
        u = o + 1,
        d = o + l,
        p = d + 1;
      (f[o] < -3.1500000000000004 &&
        f[u] < -3.1500000000000004 &&
        f[d] < -3.1500000000000004 &&
        f[p] < -3.1500000000000004) ||
        _(o, u, d, p);
    }
  let v = [p],
    y = d;
  for (let t of n) {
    let n = Vp(t.x0, t.x1, t.step * o, s),
      r = Vp(t.z0, t.z1, t.step * o, c),
      i = s.indexOf(t.x0),
      a = s.indexOf(t.x1),
      u = c.indexOf(t.z0),
      d = c.indexOf(t.z1);
    if (i < 0 || a < 0 || u < 0 || d < 0) continue;
    let p = s.slice(i, a + 1),
      m = c.slice(u, d + 1),
      h = n.length,
      g = r.length,
      b = new Float32Array(h * g);
    for (let t = 0; t < g; t++)
      for (let o = 0; o < h; o++) {
        let s = n[o],
          c = r[t],
          _;
        ((_ =
          t === 0
            ? Hp(p, s, (e) => f[u * l + i + e])
            : t === g - 1
              ? Hp(p, s, (e) => f[d * l + i + e])
              : o === 0
                ? Hp(m, c, (e) => f[(u + e) * l + i])
                : o === h - 1
                  ? Hp(m, c, (e) => f[(u + e) * l + a])
                  : e.height(s, c)),
          (b[t * h + o] = _));
      }
    v.push(Bp(e, n, r, b));
    for (let e = 0; e + 1 < g; e++)
      for (let t = 0; t + 1 < h; t++) {
        let n = y + e * h + t,
          r = n + 1,
          i = n + h;
        _(n, r, i, i + 1);
      }
    y += h * g;
  }
  let b = y + 4,
    x = new Float32Array(b * 3),
    S = new Float32Array(b * 3),
    C = new Float32Array(b * 3),
    w = new Float32Array(b * 2),
    E = 0;
  for (let e of v)
    (x.set(e.pos, E * 3),
      S.set(e.nrm, E * 3),
      C.set(e.col, E * 3),
      w.set(e.ter, E * 2),
      (E += e.pos.length / 3));
  ([
    [i.minX, i.minZ],
    [i.maxX, i.minZ],
    [i.minX, i.maxZ],
    [i.maxX, i.maxZ],
  ].forEach(([t, n], r) => {
    (x.set([t, e.gapY, n], (y + r) * 3),
      S.set([0, 1, 0], (y + r) * 3),
      C.set([Rp.gap.r, Rp.gap.g, Rp.gap.b], (y + r) * 3),
      w.set([0, 1], (y + r) * 2));
  }),
    _(y, y + 1, y + 2, y + 3));
  let D = new V();
  (D.setAttribute(`position`, new H(x, 3)),
    D.setAttribute(`normal`, new H(S, 3)),
    D.setAttribute(`color`, new H(C, 3)),
    D.setAttribute(`aTer`, new H(w, 2)));
  let O = h.subarray(0, g);
  return (
    D.setIndex(new H(b <= 65536 ? Uint16Array.from(O) : O, 1)),
    (D.boundingSphere = new T(new U(0, 0, 0), a * 1.5)),
    { geometry: D, tris: g / 3 }
  );
}
function Wp(e, t = !1) {
  let n = new O({ vertexColors: !0 });
  return (
    (n.name = e ? `env-terrain-far` : `env-terrain`),
    (n.defines = t
      ? { FOG_NO_CLIP: `` }
      : { FOG_NO_CLIP: ``, TERRAIN_BUMP: `` }),
    (n.onBeforeCompile = (e) => {
      ((e.uniforms.uWet = K.uWet),
        (e.vertexShader = e.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
attribute vec2 aTer;
varying vec2 vTer;
varying vec3 vTWorld;`,
          )
          .replace(
            `#include <begin_vertex>`,
            `#include <begin_vertex>
vTer = aTer;
vTWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`,
          )
          .replace(
            `#include <project_vertex>`,
            `#include <project_vertex>
#ifdef USE_REVERSED_DEPTH_BUFFER
if (aTer.y > 0.5) gl_Position.z -= 0.0002 * gl_Position.w;
#else
if (aTer.y > 0.5) gl_Position.z += 0.0004 * gl_Position.w;
#endif`,
          )),
        (e.fragmentShader = e.fragmentShader
          .replace(
            `#include <common>`,
            `#include <common>
        uniform float uWet;
        varying vec2 vTer;
        varying vec3 vTWorld;
        ${pp}
        // triplanar value noise: the three planar projections blended by the (sharpened) normal, so steep
        // flanks get undistorted detail instead of plan-projected streaks; negligible planes are skipped
        float eTri(vec3 p, vec3 w, float s, float o) {
          float r = 0.0, ws = 0.0;
          const mat2 R = mat2(0.8, -0.6, 0.6, 0.8);
          if (w.y > 0.03) { r += w.y * eNoise(R * p.xz * s + o); ws += w.y; }
          if (w.x > 0.03) { r += w.x * eNoise(R * p.zy * s + o + 3.1); ws += w.x; }
          if (w.z > 0.03) { r += w.z * eNoise(R * p.xy * s + o + 7.3); ws += w.z; }
          return r / max(ws, 1e-3);
        }`,
          )
          .replace(
            `#include <normal_fragment_maps>`,
            `#include <normal_fragment_maps>
        vec3 tN = inverseTransformDirection(normalize(vNormal), viewMatrix);
        vec3 tW = pow(abs(tN), vec3(4.0));
        tW /= (tW.x + tW.y + tW.z);
        #ifdef TERRAIN_BUMP
        {
          // canopy / rock relief: bump-map the normal with world-space triplanar noise (lit by the sun)
          float bD = length(vTWorld - cameraPosition);
          // fade with distance and at grazing angles (avoids sparkly aliasing)
          float bk = (1.0 - smoothstep(220.0, 1000.0, bD)) * smoothstep(0.08, 0.35, abs(dot(normal, normalize(vViewPosition))));
          bk *= max(vTer.x, 0.6 * (1.0 - smoothstep(0.6, 0.85, tN.y)));
          if (bk > 0.001) {
            float hC = (eTri(vTWorld, tW, 0.15, 0.0) * 0.55 + eTri(vTWorld, tW, 0.41, 7.0) * 0.3 + eTri(vTWorld, tW, 0.97, 3.1) * 0.15) * 1.5 * bk;
            vec3 sp = -vViewPosition;
            vec3 sx = dFdx(sp), sy = dFdy(sp);
            vec2 dh = vec2(dFdx(hC), dFdy(hC));
            vec3 r1 = cross(sy, normal), r2 = cross(normal, sx);
            float bdet = dot(sx, r1) * faceDirection;
            vec3 grad = sign(bdet) * (dh.x * r1 + dh.y * r2);
            normal = normalize(abs(bdet) * normal - grad);
          }
        }
        #endif`,
          )
          .replace(
            `#include <color_fragment>`,
            `#include <color_fragment>
        {
          vec3 tN0 = inverseTransformDirection(normalize(vNormal), viewMatrix);
          vec3 tW0 = pow(abs(tN0), vec3(4.0));
          tW0 /= (tW0.x + tW0.y + tW0.z);
          float tDist = length(vTWorld - cameraPosition);
          vec2 wq = vTWorld.xz;
          float mid = eNoise(wq * 0.0055 + 1.7) * 0.55 + eNoise(wq * 0.017 - 4.2) * 0.45;
          float land = 1.0 - vTer.y;
          diffuseColor.rgb *= mix(1.0, 0.72 + 0.56 * mid, land * (0.35 + 0.65 * vTer.x));
          // yellow-green / blue-green hue drift across the forest
          float hueN = eNoise(wq * 0.0031 + 9.1);
          diffuseColor.rgb *= mix(vec3(1.0), mix(vec3(0.85, 0.97, 1.1), vec3(1.15, 1.05, 0.8), hueN), vTer.x * 0.8);
          float det = (1.0 - smoothstep(350.0, 1600.0, tDist)) * vTer.x;
          float cn = eTri(vTWorld, tW0, 0.15, 0.0) * 0.62 + eTri(vTWorld, tW0, 0.41, 7.0) * 0.38;
          diffuseColor.rgb *= mix(1.0, 0.6 + 0.7 * cn, det);
          // steep faces (> ~40°): exposed soil & rock break up the canopy (landslide scars, cut slopes); subtle under forest
          float steep = (1.0 - smoothstep(0.5, 0.78, tN0.y)) * land * (1.0 - smoothstep(900.0, 2200.0, tDist));
          if (steep > 0.01) {
            float rn = eTri(vTWorld, tW0, 0.045, 11.0) * 0.6 + eTri(vTWorld, tW0, 0.19, 5.0) * 0.4;
            float expo = steep * smoothstep(0.5, 0.78, rn + 0.2 * (1.0 - vTer.x)) * mix(1.0, 0.3, vTer.x);
            vec3 soil = mix(vec3(0.13, 0.09, 0.055), vec3(0.16, 0.145, 0.12), smoothstep(0.45, 0.75, eTri(vTWorld, tW0, 0.6, 2.0)));
            diffuseColor.rgb = mix(diffuseColor.rgb, soil * (0.75 + 0.5 * cn), expo * 0.65);
          }
          // river banks: a concrete / riprap revetment (堤岸護坡) from below the water line (-0.8) up to ~1.6 m on
          // every sloped bank face, with a dark wet band and a pale dry crest — not a stretched lawn
          float rvK = smoothstep(-2.6, -1.4, vTWorld.y) * (1.0 - smoothstep(1.1, 1.8, vTWorld.y)) * (1.0 - smoothstep(0.9, 0.985, tN0.y)) * land;
          if (rvK > 0.01) {
            float rr = eTri(vTWorld, tW0, 1.6, 2.0) * 0.6 + eTri(vTWorld, tW0, 0.37, 8.0) * 0.4;
            vec3 rev = mix(vec3(0.2, 0.198, 0.186), vec3(0.34, 0.33, 0.31), smoothstep(0.25, 0.75, rr));
            rev *= 0.62 + 0.38 * smoothstep(-0.9, 0.2, vTWorld.y);
            diffuseColor.rgb = mix(diffuseColor.rgb, rev, rvK);
          }
          #ifdef TERRAIN_BUMP
          // close range (walkable hills, trails, lawns): 0.3–5 m ground detail. Under forest canopy (vTer.x) the
          // canopy colour gives way to a forest floor — humus, moss cushions, leaf-litter drifts; open lawns and
          // river banks keep their grass colour and only get grass-scale variation (fresh / sun-dried patches,
          // clover). Both are mean-preserving, so no darker ring follows the camera across open ground.
          float nearK = (1.0 - smoothstep(18.0, 80.0, tDist)) * land;
          if (nearK > 0.001) {
            float f1 = eTri(vTWorld, tW0, 1.3, 3.7);
            float f2 = eTri(vTWorld, tW0, 3.7, -1.3);
            float fc = smoothstep(0.35, 0.7, vTer.x);
            if (fc > 0.001) {
              float f3 = eTri(vTWorld, tW0, 0.35, 11.0);
              float leaf = smoothstep(0.5, 0.8, f3 * 0.6 + f1 * 0.4);
              vec3 floorCol = mix(vec3(0.055, 0.092, 0.036), vec3(0.11, 0.086, 0.055), leaf);
              floorCol = mix(floorCol, vec3(0.1, 0.096, 0.086), smoothstep(0.74, 0.92, f2 * 0.55 + f1 * 0.45) * 0.6);
              diffuseColor.rgb = mix(diffuseColor.rgb, floorCol, nearK * fc * 0.45);
            }
            float g = f1 * 0.55 + f2 * 0.45;
            diffuseColor.rgb *= mix(1.0, 0.8 + 0.4 * g, nearK);
            float lawnK = nearK * (1.0 - fc);
            if (lawnK > 0.001) {
              float f4 = eTri(vTWorld, tW0, 0.21, 5.3);
              vec3 dry = vec3(1.1, 1.03, 0.78), lush = vec3(0.9, 1.05, 0.96);
              diffuseColor.rgb *= mix(vec3(1.0), mix(dry, lush, smoothstep(0.3, 0.7, f4 * 0.7 + f2 * 0.3)), lawnK * 0.55);
            }
          }
          #endif
          diffuseColor.rgb *= 1.0 - 0.3 * uWet * (1.0 - vTer.y);
        }`,
          )));
    }),
    (n.customProgramCacheKey = () =>
      t ? `env-terrain-v5-low` : `env-terrain-v5`),
    n
  );
}
function Gp(e) {
  let t = [],
    n = [],
    r = [],
    i = new W();
  for (let a of e) {
    let e = a.geo.index ? a.geo.toNonIndexed() : a.geo;
    e.computeVertexNormals();
    let o = e.attributes.position,
      s = e.attributes.normal;
    e.computeBoundingBox();
    let c = e.boundingBox,
      l = (c.min.x + c.max.x) / 2,
      u = (c.min.y + c.max.y) / 2,
      d = (c.min.z + c.max.z) / 2;
    for (let e = 0; e < o.count; e++) {
      let f = o.getY(e),
        p = (f - c.min.y) / Math.max(0.01, c.max.y - c.min.y);
      (i.copy(a.bottom).lerp(a.top, p), t.push(o.getX(e), f, o.getZ(e)));
      let m = o.getX(e) - l,
        h = o.getY(e) - u,
        g = o.getZ(e) - d,
        _ = Math.hypot(m, h, g) || 1;
      ((m /= _), (h /= _), (g /= _));
      let v = a.soft,
        y = s.getX(e) * (1 - v) + m * v,
        b = s.getY(e) * (1 - v) + h * v,
        x = s.getZ(e) * (1 - v) + g * v,
        S = Math.hypot(y, b, x) || 1;
      (n.push(y / S, b / S, x / S), r.push(i.r, i.g, i.b));
    }
  }
  let a = new V();
  return (
    a.setAttribute(`position`, new F(t, 3)),
    a.setAttribute(`normal`, new F(n, 3)),
    a.setAttribute(`color`, new F(r, 3)),
    a
  );
}
