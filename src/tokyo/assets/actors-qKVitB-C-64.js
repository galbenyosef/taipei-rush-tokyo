// tokyo/assets/actors-qKVitB-C 64 — geo
// Lines 29213-29649 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
var J_ = class e {
    mesh;
    material;
    geo = new Int32Array(t_ * 3);
    tris = [];
    slotGeo;
    slotStamp;
    slotOn;
    stamp = 0;
    _m = new R();
    _c = new ge();
    src;
    constructor(e, t, n, r) {
      ((this.mesh = e),
        (this.material = t),
        (this.src = n),
        (this.slotGeo = new Int32Array(r).fill(-1)),
        (this.slotStamp = new Uint32Array(r)),
        (this.slotOn = new Uint8Array(r)));
    }
    static build(t, n, r, i) {
      if (t.params.get(`trafficBatch`) === `0`) return null;
      let a;
      try {
        if (((a = t.renderer.gl), !a.extensions.has(`WEBGL_multi_draw`)))
          return null;
      } catch {
        return null;
      }
      let s = [];
      for (let e = 0; e < t_; e++)
        try {
          let n = t.vehicles.getInstancedAsset(e_[e]),
            r = n.material,
            i = n.geometry;
          if (
            !i ||
            i.type === `BoxGeometry` ||
            i.index ||
            !r?.onBeforeCompile ||
            !i.attributes.vdata ||
            !i.attributes.vvar
          )
            return null;
          let a = i.attributes.position;
          if (!a || a.array.length < a.count * 3) return null;
          s.push({ geometry: i, material: r });
        } catch {
          return null;
        }
      let c = s[2].material;
      try {
        let e = {
          vertexShader: Oe.standard.vertexShader,
          fragmentShader: Oe.standard.fragmentShader,
          uniforms: {},
          defines: {},
        };
        if ((c.onBeforeCompile(e, a), !q_(e.vertexShader))) return null;
      } catch {
        return null;
      }
      let l = [],
        d = [];
      for (let e = 0; e < W_; e++) {
        let t = e < t_ ? s[e].material.vu : void 0;
        (l.push(t?.uVarA?.value ? t.uVarA.value.clone() : new ge()),
          d.push(t?.uVarB?.value ? t.uVarB.value.clone() : new ge()));
      }
      let f = { value: l },
        p = { value: d },
        m = [],
        h = Object.keys(s[0].geometry.attributes),
        g = (e) =>
          !!e &&
          !e.index &&
          h.every(
            (t) =>
              !!e.attributes[t] &&
              e.attributes[t].itemSize === s[0].geometry.attributes[t].itemSize,
          );
      for (let e = 0; e < t_; e++) {
        let t = s[e].geometry;
        if (!g(t)) return null;
        if ((m.push([e, 0, t]), !i)) continue;
        let n = t.userData.lod;
        if ((g(n) && e !== 0 && m.push([e, 1, n]), e === 0)) {
          let t = R_();
          g(t) && m.push([e, 1, t]);
        } else if (!i_(e) && e !== 6) {
          let [t, n, i] = r(e),
            a = U_(e_[e], t, n, i);
          g(a) && m.push([e, 2, a]);
        }
      }
      let _ = 0;
      for (let [, , e] of m) _ += e.attributes.position.count;
      let v = new ye({
        vertexColors: !0,
        roughness: c.roughness,
        metalness: c.metalness,
        map: c.map,
        envMap: c.envMap,
        envMapIntensity: c.envMapIntensity,
      });
      ((v.name = `traffic-batch`),
        (v.onBeforeCompile = (e, t) => {
          c.onBeforeCompile(e, t);
          let n = q_(e.vertexShader);
          (n && (e.vertexShader = n),
            (e.uniforms.uVarAk = f),
            (e.uniforms.uVarBk = p));
        }),
        (v.customProgramCacheKey = () => `traffic-batch-v1`));
      let y = new ce(n, _, 0, v);
      y.name = `traffic-batch`;
      let b = new e(y, v, c, n);
      b.geo.fill(-1);
      for (let [e, t, n] of m) {
        let r = new pe();
        for (let e of h) r.setAttribute(e, n.attributes[e]);
        r.setAttribute(
          `vkind`,
          new j(new Float32Array(n.attributes.position.count).fill(e), 1),
        );
        let i = y.addGeometry(r);
        ((b.geo[e * 3 + t] = i),
          (b.tris[i] = n.attributes.position.count / 3),
          t > 0 && n !== s[e].geometry.userData.lod && n.dispose());
      }
      for (let e = 0; e < t_; e++)
        for (let t = 1; t < 3; t++)
          b.geo[e * 3 + t] < 0 && (b.geo[e * 3 + t] = b.geo[e * 3 + t - 1]);
      let x = b._c.set(1, 1, 1, 0.5);
      for (let e = 0; e < n; e++) {
        let e = y.addInstance(b.geo[0]);
        (y.setColorAt(e, x), y.setVisibleAt(e, !1));
      }
      ((y.perObjectFrustumCulled = !1),
        (y.sortObjects = !1),
        (y.frustumCulled = !1),
        (y.castShadow = !1),
        (y.receiveShadow = !0),
        (y.visible = !1));
      let S = c.userData.depthMaterial;
      if (S?.onBeforeCompile) {
        let e = new u({ depthPacking: o });
        ((e.name = `traffic-batch-depth`),
          (e.onBeforeCompile = (e, t) => {
            (S.onBeforeCompile(e, t),
              (e.uniforms.uVarAk = f),
              (e.uniforms.uVarBk = p));
          }),
          (e.customProgramCacheKey = () => `traffic-batch-depth-v1`),
          (y.customDepthMaterial = e));
      }
      return (t.params.get(`gpumem`) !== `0` && Ct(y.geometry), b);
    }
    begin() {
      this.stamp++;
      let e = this.src,
        t = this.material;
      (t.envMap !== e.envMap && (t.envMap = e.envMap),
        (t.envMapIntensity = e.envMapIntensity));
    }
    set(e, t, n) {
      let r = this.mesh,
        i = e.idx,
        a = this.geo[e.kind * 3 + t];
      (this.slotGeo[i] !== a &&
        ((this.slotGeo[i] = a), r.setGeometryIdAt(i, a)),
        this.slotOn[i] || ((this.slotOn[i] = 1), r.setVisibleAt(i, !0)),
        (this.slotStamp[i] = this.stamp),
        r.setMatrixAt(i, this._m.fromArray(e.mat)));
      let o = e.burnt ? 0.2 : e.wrecked ? 0.82 : 1;
      r.setColorAt(
        i,
        this._c.set(
          e.cr * o + 2 * n,
          e.cg * o,
          e.cb * o,
          0.001 + e.seed * 0.998,
        ),
      );
    }
    end() {
      let e = this.slotOn,
        t = this.slotStamp,
        n = this.stamp,
        r = 0;
      for (let i = 0; i < e.length; i++)
        e[i] &&
          (t[i] === n ? r++ : ((e[i] = 0), this.mesh.setVisibleAt(i, !1)));
      return ((this.mesh.visible = r > 0), r);
    }
    trisOf(e, t) {
      return this.tris[this.geo[e * 3 + t]] ?? 0;
    }
  },
  Y_ = `
attribute vec3 iPos;
attribute vec4 iColor;
attribute vec3 iShape;
attribute vec2 iDir;
varying vec2 vUv;
varying vec4 vColor;
varying float vMode;
#include <fog_pars_vertex>
void main() {
  vUv = position.xy;
  vColor = iColor;
  vMode = iShape.z;
  vec4 mvPosition;
  if (iShape.z < 0.5) {
    mvPosition = viewMatrix * vec4(iPos, 1.0);
    float dl = length(iDir);
    float vis = 1.0;
    if (dl > 0.01) {
      vec3 toCam = cameraPosition - iPos;
      float facing = dot(normalize(toCam.xz), iDir / dl);
      vis = smoothstep(-0.25, 0.75, facing);
    }
    vColor.rgb *= mix(0.1, 1.0, vis);
    // pull toward the camera so the lamp's own body doesn't clip the sprite (big fireballs: the ground either)
    float d = length(mvPosition.xyz);
    float pull = min(0.45 + max(0.0, iShape.x - 1.0) * 0.9, d * 0.6);
    mvPosition.xyz *= max(0.0, (d - pull)) / max(d, 0.001);
    float sz = iShape.x * mix(0.6, 1.0, vis) * (1.0 + clamp(d / 70.0, 0.0, 3.0));
    // far lamps: keep a minimum on-screen size, but fade energy so they don't bloom into blobs
    vColor.rgb *= 1.0 / (1.0 + clamp(d / 70.0, 0.0, 3.0) * 0.5);
    mvPosition.xy += position.xy * sz;
  } else if (iShape.z > 5.5) {
    // shared ground shadows (src/render/fxBatch.ts): ped blobs (6), the player's foot contact (7) — flat quads, w across
    // × l along the unit direction iDir
    vec2 f = iDir;
    vec2 r = vec2(-f.y, f.x);
    vec3 wp = iPos + vec3(r.x, 0.0, r.y) * (position.x * iShape.x) + vec3(f.x, 0.0, f.y) * (position.y * iShape.y);
    mvPosition = viewMatrix * vec4(wp, 1.0);
  } else if (iShape.z > 4.5) {
    // flame: faces the camera around the world up axis, grows upward from iPos (w = half width, l = height)
    vec2 tc = cameraPosition.xz - iPos.xz;
    vec2 f = tc / max(length(tc), 0.001);
    vec3 wp = iPos + vec3(-f.y, 0.0, f.x) * (position.x * iShape.x) + vec3(0.0, (position.y * 0.5 + 0.5) * iShape.y, 0.0);
    mvPosition = viewMatrix * vec4(wp, 1.0);
  } else if (iShape.z > 3.5) {
    mvPosition = viewMatrix * vec4(iPos, 1.0);
    mvPosition.xy += position.xy * iShape.x;
  } else {
    vec3 wp;
    if (iShape.z < 2.5) {
      vec2 f = iDir;
      vec2 r = vec2(-f.y, f.x);
      wp = iPos + vec3(r.x, 0.0, r.y) * (position.x * iShape.x) + vec3(f.x, 0.0, f.y) * (position.y * iShape.y);
    } else {
      vec2 toC = cameraPosition.xz - iPos.xz;
      float dc = max(length(toC), 0.001);
      vec2 cf = toC / dc;
      vec2 cr = vec2(-cf.y, cf.x);
      float len = min(iShape.y, dc * 0.8);
      wp = iPos + vec3(cr.x, 0.0, cr.y) * (position.x * iShape.x) + vec3(cf.x, 0.0, cf.y) * ((position.y + 1.0) * len);
    }
    mvPosition = viewMatrix * vec4(wp, 1.0);
  }
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}
`,
  X_ = `
varying vec2 vUv;
varying vec4 vColor;
varying float vMode;
#include <fog_pars_fragment>
void main() {
  vec4 outc;
  float r2 = dot(vUv, vUv);
  if (vMode < 0.5) {
    float g = exp(-r2 * 34.0) * 1.1 + exp(-r2 * 5.0) * 0.18;
    g *= 1.0 - smoothstep(0.7, 1.0, r2);
    outc = vec4(vColor.rgb * g, 0.0);
  } else if (vMode < 1.5) {
    vec2 q = abs(vUv);
    // rounded-rect falloff (car footprint)
    vec2 e = max(q - vec2(0.55, 0.72), 0.0) / vec2(0.45, 0.28);
    float d = length(e);
    float a = vColor.a * (1.0 - smoothstep(0.0, 1.0, d)) * (0.75 + 0.25 * (1.0 - q.y));
    outc = vec4(0.0, 0.0, 0.0, a);
  } else if (vMode < 2.5) {
    // clamp (modes 2, 3, 5): at grazing angles (a pool 100 m ahead, ~1° below the eye) the interpolated vUv overshoots
    // ±1 by an ulp, and sqrt / pow of a negative number is NaN — which bloom spread into a big BLACK square on the road
    float along = clamp(vUv.y * 0.5 + 0.5, 0.0, 1.0);
    float w = mix(0.28, 1.0, sqrt(along));
    float across = abs(vUv.x) / w;
    float g = exp(-across * across * 2.6) * (1.0 - smoothstep(0.75, 1.0, across)) * smoothstep(0.0, 0.25, along) * (1.0 - along) * (1.0 - along);
    outc = vec4(vColor.rgb * g, 0.0);
  } else if (vMode < 3.5) {
    float along = clamp(vUv.y * 0.5 + 0.5, 0.0, 1.0);
    float g = exp(-vUv.x * vUv.x * 5.0) * pow(1.0 - along, 1.3) * smoothstep(0.0, 0.06, along);
    outc = vec4(vColor.rgb * g, 0.0);
  } else if (vMode < 4.5) {
    // billowy puff: a disc with lumpy edges (lobes vary per puff through its alpha), lighter on top
    float r = sqrt(r2);
    float ang = atan(vUv.y, r2 < 1e-12 ? 1.0 : vUv.x); // atan(0, 0) is undefined (NaN on some GPUs)
    float edge = 0.78 + 0.12 * sin(ang * 5.0 + vColor.a * 37.0) + 0.07 * sin(ang * 9.0 - vColor.a * 23.0);
    float a = vColor.a * (1.0 - smoothstep(edge * 0.45, edge, r));
    outc = vec4(vColor.rgb * (0.78 + 0.32 * vUv.y) * a, a);
  } else if (vMode > 5.5) {
    float a;
    if (vMode > 6.5) {
      // the player's foot contact (was player-fx mode 3)
      a = (1.0 - smoothstep(0.0, 1.0, r2)) * vColor.a;
    } else {
      // ped blob shadow: the former blob texture's radial ramp (1 → 0.75 at r 0.45 → 0 at the rim)
      float r = min(sqrt(r2), 1.0);
      a = (r < 0.45 ? mix(1.0, 0.75, r / 0.45) : mix(0.75, 0.0, (r - 0.45) / 0.55)) * vColor.a;
    }
    outc = vec4(0.0, 0.0, 0.0, a);
  } else {
    // flame tongue: wide at the base, licking up to a point; flicker comes from the per-frame size / colour
    float h = clamp(vUv.y * 0.5 + 0.5, 0.0, 1.0);
    float w = mix(0.9, 0.06, pow(h, 0.75));
    float x = abs(vUv.x + 0.18 * h * sin(h * 7.0 + vColor.a * 50.0));
    float g = (1.0 - smoothstep(w * 0.3, w, x)) * smoothstep(0.0, 0.1, h) * (1.0 - smoothstep(0.6, 1.0, h));
    vec3 col = vColor.rgb * mix(vec3(1.0, 1.7, 2.6), vec3(1.0, 0.8, 0.6), smoothstep(0.05, 0.7, h));
    // a little coverage too (premultiplied), so the flame still reads against a bright daytime background
    outc = vec4(col * g * (1.25 - h), g * 0.35);
  }
  #ifdef USE_FOG
    #ifdef FOG_EXP2
      float fogF = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
    #else
      float fogF = smoothstep(fogNear, fogFar, vFogDepth);
    #endif
    outc *= 1.0 - fogF;
  #endif
  gl_FragColor = outc;
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,
  Z_ = 192,
  Q_ = class {
    mesh;
    geo;
    buf;
    d;
    n = 0;
    shared = null;
    frame = -1;
    cap;
    constructor(e) {
      this.cap = e + Z_;
      let t = new de();
      (t.setAttribute(
        `position`,
        new j([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0], 3),
      ),
        t.setIndex([0, 1, 2, 0, 2, 3]),
        (this.d = new Float32Array(this.cap * 12)),
        (this.buf = new Ae(this.d, 12).setUsage(b)),
        t.setAttribute(`iPos`, new oe(this.buf, 3, 0)),
        t.setAttribute(`iShape`, new oe(this.buf, 3, 3)),
        t.setAttribute(`iColor`, new oe(this.buf, 4, 6)),
        t.setAttribute(`iDir`, new oe(this.buf, 2, 10)),
        (t.instanceCount = 0),
        (t.boundingSphere = new m(new L(), 1e6)),
        (this.geo = t));
      let n = new T({
        name: `traffic-fx`,
        vertexShader: Y_,
        fragmentShader: X_,
        uniforms: De.clone(he.fog),
        fog: !0,
        transparent: !0,
        depthWrite: !1,
        depthTest: !0,
        blending: 5,
        blendEquation: 100,
        blendSrc: 201,
        blendDst: 205,
        blendSrcAlpha: 200,
        blendDstAlpha: 201,
        polygonOffset: !0,
        polygonOffsetFactor: -2,
        polygonOffsetUnits: -2,
      });
      ((this.mesh = new A(t, n)),
        (this.mesh.frustumCulled = !1),
        (this.mesh.renderOrder = 5),
        (this.mesh.name = `traffic-fx`));
    }
    share(e, t) {
      this.shared ||
        ((this.shared = e),
        e.preRender.push(() => this.publish()),
        xt(t, this));
    }
    sync() {
      let e = this.shared.frameNo;
      e !== this.frame && ((this.frame = e), (this.n = 0));
    }
    begin() {
      this.shared ? this.sync() : (this.n = 0);
    }
    take() {
      this.shared && this.sync();
      let e = this.n;
      return e >= this.cap ? -1 : ((this.n = e + 1), e * 12);
    }
    push(e, t, n, r, i, a, o, s, c, l, u, d) {
      let f = this.take();
      if (f < 0) return;
      let p = this.d;
      ((p[f] = t),
        (p[f + 1] = n),
        (p[f + 2] = r),
        (p[f + 3] = u),
        (p[f + 4] = d),
        (p[f + 5] = e),
        (p[f + 6] = o),
        (p[f + 7] = s),
        (p[f + 8] = c),
        (p[f + 9] = l),
        (p[f + 10] = i),
        (p[f + 11] = a));
    }
    end() {
      this.shared || this.publish();
    }
    publish() {
      if (this.shared && this.frame !== this.shared.frameNo) return;
      let e = this.n;
      ((this.geo.instanceCount = e),
        e > 0 && ev(this.buf, e * 12),
        (this.mesh.visible = e > 0));
    }
  },
  $_ = () => {};
