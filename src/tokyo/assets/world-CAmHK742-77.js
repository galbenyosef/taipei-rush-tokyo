// tokyo/assets/world-CAmHK742 77 — math
// Lines 26068-26356 of readable/tokyo/assets/world-CAmHK742.pretty.js (statement-aligned).
function Xh(e) {
  let t = new Map(),
    n = (e, t) => (e + 512) * 4096 + (t + 512);
  for (let r of e)
    for (
      let e = Math.floor((r.x0 - 3) / 64);
      e <= Math.floor((r.x1 + 3) / 64);
      e++
    )
      for (
        let i = Math.floor((r.z0 - 3) / 64);
        i <= Math.floor((r.z1 + 3) / 64);
        i++
      ) {
        let a = n(e, i),
          o = t.get(a);
        (o || t.set(a, (o = [])), o.push(r));
      }
  return (e, r) => {
    let i = t.get(n(Math.floor(e / 64), Math.floor(r / 64)));
    if (!i) return !1;
    for (let t of i)
      if (e > t.x0 - 3 && e < t.x1 + 3 && r > t.z0 - 3 && r < t.z1 + 3)
        return !0;
    return !1;
  };
}
function Zh(e) {
  let t = Math.sin(e * 127.1 + 311.7) * 43758.5453;
  return t - Math.floor(t);
}
var Qh = { uPx: { value: 0.002 }, uSplit: { value: 760 } },
  $h = `
uniform float uTime;
uniform float uNight;
uniform float uLodNear;
uniform float uPx;
uniform float uSplit;
/** 1 = the main-view copy (was the MAIN_VIEW define: one program for both views) */
uniform float uMainView;
attribute vec2 aCorner;
attribute vec3 aCol;
attribute vec4 aP;
attribute vec4 aQ;
varying vec3 vCol;
varying vec2 vC;
varying float vKind;
#include <common>
#include <fog_pars_vertex>
void main() {
  vec3 c = position;
  float kind = aP.w;
  vec3 dir = vec3(1.0, 0.0, 0.0);
  vec3 col = aCol;
  // kind 3 = streak of an 'always' road
  float always = kind > 1.5 ? step(2.5, kind) : aQ.w;
  if (kind > 1.5) {
    // car streak: slides along its road (aQ = from, to, phase, axisZ), aP.z = signed speed
    float span = aQ.y - aQ.x;
    float s = mod(aQ.z + uTime * abs(aP.z), span);
    float along = aP.z >= 0.0 ? aQ.x + s : aQ.y - s;
    if (aQ.w > 0.5) { c.z = along; dir = vec3(0.0, 0.0, sign(aP.z)); }
    else { c.x = along; dir = vec3(sign(aP.z), 0.0, 0.0); }
    float toward = dot(dir, cameraPosition - c);
    col = toward > 0.0 ? vec3(1.0, 0.9, 0.74) * 2.1 : vec3(1.0, 0.1, 0.045) * 1.7;
    col *= smoothstep(0.0, 30.0, s) * smoothstep(0.0, 30.0, span - s);
  }
  vec4 mvC = viewMatrix * vec4(c, 1.0);
  float depth = -mvC.z;
  float ext = (kind > 0.5 && kind < 1.5) ? aP.x : 0.0;
  bool mainView = uMainView > 0.5;
  bool cull = mainView ? (always < 0.5 || depth > uSplit) : (always < 0.5 ? depth - ext < uLodNear : depth < uSplit);
  if (cull) {
    gl_Position = vec4(0.0, 0.0, -2.0, 1.0);
    vCol = vec3(0.0);
    vC = vec2(2.0);
    vKind = 0.0;
    return;
  }
  float pxW = uPx * max(depth, 1.0);
  vec4 mvPosition;
  if (kind < 0.5) {
    // lamp sprite (camera-facing), ≥ aP.y px radius; in the main view (edge districts, near the camera) only a
    // tight halo — the real lamp heads & light pools are there too
    float rw = aP.x * (mainView ? 0.42 : 1.0);
    if (mainView) col *= 0.75;
    float r = max(rw, pxW * aP.y);
    col *= clamp((rw * rw) / (r * r), 0.32, 1.0);
    mvPosition = mvC + vec4(aCorner * r, 0.0, 0.0);
  } else if (kind < 1.5) {
    // flat light wash along the carriageway (aP = halfLen, halfWidth, axisZ)
    vec3 ax = aP.z > 0.5 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
    vec3 pp = aP.z > 0.5 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 0.0, 1.0);
    float hw = max(aP.y, pxW * 1.2);
    col *= clamp(aP.y / hw, 0.45, 1.0);
    mvPosition = viewMatrix * vec4(c + ax * aCorner.x * aP.x + pp * aCorner.y * hw, 1.0);
  } else {
    // streak: ribbon between tail and head, facing the camera
    vec3 vd = normalize((viewMatrix * vec4(dir, 0.0)).xyz);
    vec3 side = cross(vd, normalize(mvC.xyz));
    side = length(side) > 1e-3 ? normalize(side) : vec3(0.0, 1.0, 0.0);
    float w = max(aP.y, pxW * 1.25);
    col *= clamp(aP.y / w, 0.4, 1.0);
    mvPosition = mvC + vec4(vd * aCorner.x * (aP.x * 0.5 + w) + side * aCorner.y * w, 0.0);
  }
  // main view: near the camera the real lamp heads and light pools take over: the grid only fills in the distance
  if (mainView) col *= smoothstep(70.0, 220.0, depth);
  vCol = col * uNight * smoothstep(0.08, 0.22, uNight);
  vC = aCorner;
  vKind = kind;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}
`,
  eg = `
varying vec3 vCol;
varying vec2 vC;
varying float vKind;
#include <common>
#include <fog_pars_fragment>
void main() {
  float f;
  if (vKind < 0.5) {
    float r2 = dot(vC, vC);
    if (r2 > 1.0) discard;
    f = exp(-r2 * 7.0) + 0.1 * (1.0 - r2);
  } else if (vKind < 1.5) {
    float a = 1.0 - vC.y * vC.y;
    f = a * a;
  } else {
    f = (1.0 - vC.y * vC.y) * smoothstep(1.0, 0.55, abs(vC.x));
  }
  vec3 col = vCol * f;
  #ifdef USE_FOG
  // haze swallows distant lights (additive: attenuate instead of mixing towards the fog colour)
  col *= 1.0 - 0.82 * taipeiHaze(length(vFogRel), vFogRel.y);
  #endif
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,
  tg = class {
    cap = 0;
    nv = 0;
    ni = 0;
    pos = new Float32Array();
    corner = new Float32Array();
    col = new Float32Array();
    p = new Float32Array();
    q = new Float32Array();
    idx = new Uint32Array();
    counts = { lamps: 0, wash: 0, streaks: 0, nodes: 0 };
    constructor(e = 2048) {
      this.grow(e * 4);
    }
    grow(e) {
      let t = Math.max(e, Math.ceil(this.cap * 1.5)),
        n = (e, n, r) => {
          let i = new r(t * n);
          return (i.set(e.subarray(0, this.nv * n)), i);
        };
      ((this.pos = n(this.pos, 3, Float32Array)),
        (this.corner = n(this.corner, 2, Float32Array)),
        (this.col = n(this.col, 3, Float32Array)),
        (this.p = n(this.p, 4, Float32Array)),
        (this.q = n(this.q, 4, Float32Array)));
      let r = new Uint32Array((t / 4) * 6);
      (r.set(this.idx.subarray(0, this.ni)), (this.idx = r), (this.cap = t));
    }
    quad(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      this.nv + 4 > this.cap && this.grow(this.nv + 4);
      let m = this.nv;
      for (let h = 0; h < 4; h++) {
        let g = m + h;
        ((this.pos[g * 3] = e),
          (this.pos[g * 3 + 1] = t),
          (this.pos[g * 3 + 2] = n),
          (this.corner[g * 2] = h === 0 || h === 3 ? -1 : 1),
          (this.corner[g * 2 + 1] = h < 2 ? -1 : 1),
          (this.col[g * 3] = r),
          (this.col[g * 3 + 1] = i),
          (this.col[g * 3 + 2] = a),
          (this.p[g * 4] = o),
          (this.p[g * 4 + 1] = s),
          (this.p[g * 4 + 2] = c),
          (this.p[g * 4 + 3] = l),
          (this.q[g * 4] = u),
          (this.q[g * 4 + 1] = d),
          (this.q[g * 4 + 2] = f),
          (this.q[g * 4 + 3] = p));
      }
      let h = this.idx,
        g = this.ni;
      ((h[g] = m),
        (h[g + 1] = m + 1),
        (h[g + 2] = m + 2),
        (h[g + 3] = m),
        (h[g + 4] = m + 2),
        (h[g + 5] = m + 3),
        (this.ni = g + 6),
        (this.nv = m + 4));
    }
    lamp(e, t, n, r, i, a, o, s, c = !1) {
      (this.quad(e, t, n, a, o, s, r, i, 0, 0, 0, 0, 0, +!!c),
        this.counts.lamps++);
    }
    wash(e, t, n, r, i, a, o, s, c, l = !1) {
      (this.quad(e, t, n, o, s, c, i, a, +!!r, 1, 0, 0, 0, +!!l),
        this.counts.wash++);
    }
    streak(e, t, n, r, i, a, o, s, c, l = !1) {
      (this.quad(
        e ? t : r,
        n,
        e ? r : t,
        1,
        1,
        1,
        s,
        c,
        o,
        l ? 3 : 2,
        r,
        i,
        a,
        +!!e,
      ),
        this.counts.streaks++);
    }
    build() {
      let e = new V(),
        t = this.nv,
        n = t >= this.cap * 0.85,
        r = (e, r) => (n ? e.subarray(0, t * r) : e.slice(0, t * r));
      (e.setAttribute(`position`, new H(r(this.pos, 3), 3)),
        e.setAttribute(`aCorner`, new H(r(this.corner, 2), 2)),
        e.setAttribute(`aCol`, new H(r(this.col, 3), 3)),
        e.setAttribute(`aP`, new H(r(this.p, 4), 4)),
        e.setAttribute(`aQ`, new H(r(this.q, 4), 4)));
      let i = this.idx.subarray(0, this.ni);
      return (
        e.setIndex(
          t > 65535
            ? new H(n ? i : i.slice(), 1)
            : new H(Uint16Array.from(i), 1),
        ),
        (e.boundingSphere = new d(new U(), 8e3)),
        e
      );
    }
  },
  ng = (e, t) => {
    let n = Math.sin(e * 127.1 + t * 311.7) * 43758.5453;
    return n - Math.floor(n);
  };
function rg(e) {
  return new E({
    name: e ? `env-city-lights-main` : `env-city-lights`,
    uniforms: {
      ...Se.clone(ue.fog),
      uTime: q.uTime,
      uNight: q.uNight,
      uLodNear: Wm.uLodNear,
      uPx: Qh.uPx,
      uSplit: Qh.uSplit,
      uMainView: { value: +!!e },
    },
    vertexShader: $h,
    fragmentShader: eg,
    transparent: !0,
    blending: 2,
    depthWrite: !1,
    fog: !0,
  });
}
function ig(e, t, n, r) {
  let i = ag(new tg(), e, t, n, !1, r),
    a = ag(new tg(), e, t, n, !0, r),
    o = new M(i.build(), rg(!1));
  ((o.name = `env-city-lights`), (o.frustumCulled = !1), (o.renderOrder = 4));
  let s = new M(a.build(), rg(!0));
  return (
    (s.name = `env-city-lights-main`),
    (s.frustumCulled = !1),
    (s.renderOrder = 4),
    { mesh: o, main: s, counts: i.counts }
  );
}
