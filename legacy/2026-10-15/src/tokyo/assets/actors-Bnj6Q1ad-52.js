// tokyo/assets/actors-Bnj6Q1ad 52 — geo
// Lines 25339-25775 of readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js (statement-aligned).
var uh = class e {
    mesh;
    material;
    geo = new Int32Array(_m * 3);
    tris = [];
    slotGeo;
    slotStamp;
    slotOn;
    stamp = 0;
    _m = new ke();
    _c = new xe();
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
      let o = [];
      for (let e = 0; e < _m; e++)
        try {
          let n = t.vehicles.getInstancedAsset(gm[e]),
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
          o.push({ geometry: i, material: r });
        } catch {
          return null;
        }
      let s = o[2].material;
      try {
        let e = {
          vertexShader: Te.standard.vertexShader,
          fragmentShader: Te.standard.fragmentShader,
          uniforms: {},
          defines: {},
        };
        if ((s.onBeforeCompile(e, a), !lh(e.vertexShader))) return null;
      } catch {
        return null;
      }
      let c = [],
        l = [];
      for (let e = 0; e < oh; e++) {
        let t = e < _m ? o[e].material.vu : void 0;
        (c.push(t?.uVarA?.value ? t.uVarA.value.clone() : new xe()),
          l.push(t?.uVarB?.value ? t.uVarB.value.clone() : new xe()));
      }
      let d = { value: c },
        f = { value: l },
        p = [],
        m = Object.keys(o[0].geometry.attributes),
        h = (e) =>
          !!e &&
          !e.index &&
          m.every(
            (t) =>
              !!e.attributes[t] &&
              e.attributes[t].itemSize === o[0].geometry.attributes[t].itemSize,
          );
      for (let e = 0; e < _m; e++) {
        let t = o[e].geometry;
        if (!h(t)) return null;
        if ((p.push([e, 0, t]), !i)) continue;
        let n = t.userData.lod;
        if ((h(n) && e !== 0 && p.push([e, 1, n]), e === 0)) {
          let t = eh();
          h(t) && p.push([e, 1, t]);
        } else if (!bm(e) && e !== 6) {
          let [t, n, i] = r(e),
            a = ah(gm[e], t, n, i);
          h(a) && p.push([e, 2, a]);
        }
      }
      let g = 0;
      for (let [, , e] of p) g += e.attributes.position.count;
      let _ = new _e({
        vertexColors: !0,
        roughness: s.roughness,
        metalness: s.metalness,
        map: s.map,
        envMap: s.envMap,
        envMapIntensity: s.envMapIntensity,
      });
      ((_.name = `traffic-batch`),
        (_.onBeforeCompile = (e, t) => {
          s.onBeforeCompile(e, t);
          let n = lh(e.vertexShader);
          (n && (e.vertexShader = n),
            (e.uniforms.uVarAk = d),
            (e.uniforms.uVarBk = f));
        }),
        (_.customProgramCacheKey = () => `traffic-batch-v1`));
      let v = new se(n, g, 0, _);
      v.name = `traffic-batch`;
      let y = new e(v, _, s, n);
      y.geo.fill(-1);
      for (let [e, t, n] of p) {
        let r = new fe();
        for (let e of m) r.setAttribute(e, n.attributes[e]);
        r.setAttribute(
          `vkind`,
          new N(new Float32Array(n.attributes.position.count).fill(e), 1),
        );
        let i = v.addGeometry(r);
        ((y.geo[e * 3 + t] = i),
          (y.tris[i] = n.attributes.position.count / 3),
          t > 0 && n !== o[e].geometry.userData.lod && n.dispose());
      }
      for (let e = 0; e < _m; e++)
        for (let t = 1; t < 3; t++)
          y.geo[e * 3 + t] < 0 && (y.geo[e * 3 + t] = y.geo[e * 3 + t - 1]);
      let b = y._c.set(1, 1, 1, 0.5);
      for (let e = 0; e < n; e++) {
        let e = v.addInstance(y.geo[0]);
        (v.setColorAt(e, b), v.setVisibleAt(e, !1));
      }
      ((v.perObjectFrustumCulled = !1),
        (v.sortObjects = !1),
        (v.frustumCulled = !1),
        (v.castShadow = !1),
        (v.receiveShadow = !0),
        (v.visible = !1));
      let x = s.userData.depthMaterial;
      if (x?.onBeforeCompile) {
        let e = new u({ depthPacking: O });
        ((e.name = `traffic-batch-depth`),
          (e.onBeforeCompile = (e, t) => {
            (x.onBeforeCompile(e, t),
              (e.uniforms.uVarAk = d),
              (e.uniforms.uVarBk = f));
          }),
          (e.customProgramCacheKey = () => `traffic-batch-depth-v1`),
          (v.customDepthMaterial = e));
      }
      return (t.params.get(`gpumem`) !== `0` && et(v.geometry), y);
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
  dh = `
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
  fh = `
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
  ph = 192,
  mh = class {
    mesh;
    geo;
    buf;
    d;
    n = 0;
    shared = null;
    frame = -1;
    cap;
    constructor(e) {
      this.cap = e + ph;
      let t = new ue();
      (t.setAttribute(
        `position`,
        new N([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0], 3),
      ),
        t.setIndex([0, 1, 2, 0, 2, 3]),
        (this.d = new Float32Array(this.cap * 12)),
        (this.buf = new De(this.d, 12).setUsage(b)),
        t.setAttribute(`iPos`, new ae(this.buf, 3, 0)),
        t.setAttribute(`iShape`, new ae(this.buf, 3, 3)),
        t.setAttribute(`iColor`, new ae(this.buf, 4, 6)),
        t.setAttribute(`iDir`, new ae(this.buf, 2, 10)),
        (t.instanceCount = 0),
        (t.boundingSphere = new C(new R(), 1e6)),
        (this.geo = t));
      let n = new l({
        name: `traffic-fx`,
        vertexShader: dh,
        fragmentShader: fh,
        uniforms: m.clone(me.fog),
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
      ((this.mesh = new M(t, n)),
        (this.mesh.frustumCulled = !1),
        (this.mesh.renderOrder = 5),
        (this.mesh.name = `traffic-fx`));
    }
    share(e, t) {
      this.shared ||
        ((this.shared = e),
        e.preRender.push(() => this.publish()),
        dt(t, this));
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
        e > 0 && gh(this.buf, e * 12),
        (this.mesh.visible = e > 0));
    }
  },
  hh = () => {};
