// tokyo/assets/avatar-Cm3dja-U 12 — copy
// Lines 3727-4169 of readable/tokyo/assets/avatar-Cm3dja-U.pretty.js (statement-aligned).
var Jn = class {
    proxy;
    bip = [];
    parentIdx;
    sem;
    role;
    fingerK;
    side;
    Qref = [];
    Pref = [];
    Lref = [];
    Oref = [];
    Q = [];
    P = [];
    Qs = [];
    Ps = [];
    qInv = new _();
    qTmp = new _();
    qTw = new _();
    vTmp = new j();
    lidTopOfs = new j();
    lidBotOfs = new j();
    armAxis = [new j(), new j()];
    constructor(e) {
      let t = [];
      (e.traverse((e) => {
        e.isBone && t.push(e);
      }),
        (this.bip = t));
      let n = t.length,
        r = new Map();
      (t.forEach((e, t) => r.set(e, t)),
        (this.parentIdx = new Int16Array(n)),
        (this.sem = new Int16Array(n).fill(-1)),
        (this.role = new Uint8Array(n)),
        (this.fingerK = new Float32Array(n)),
        (this.side = new Int8Array(n)));
      let i = new Map(t.map((e, t) => [e.name.replace(/_/g, ` `), t])),
        a = (e) => i.get(e) ?? -1;
      for (let e = 0; e < n; e++) {
        this.parentIdx[e] = r.get(t[e].parent) ?? -1;
        let n = t[e].name.replace(/_/g, ` `);
        this.side[e] = / L |LEye|^Bip01 L/.test(n)
          ? -1
          : +!!/ R |REye|^Bip01 R/.test(n);
        let i = n.match(/ (L|R) Finger(\d)(\d?)$/);
        (i &&
          ((this.role[e] = Bn),
          (this.fingerK[e] =
            (i[3] === `` ? 1 : Number(i[3]) + 1) + (i[2] === `0` ? 10 : 0))),
          n === `Bip01 Spine2` && (this.role[e] = zn),
          /EyeBlinkTop$/.test(n) && (this.role[e] = Vn),
          /EyeBlinkBottom$/.test(n) && (this.role[e] = Hn));
      }
      for (let [e, t] of Object.entries(Ln)) {
        let n = a(t);
        n >= 0 && (this.sem[n] = Number(e));
      }
      e.parent?.updateWorldMatrix(!0, !0);
      let o = new D().copy(e.parent.matrixWorld).invert(),
        s = [],
        c = [],
        l = new D(),
        u = new j();
      for (let e = 0; e < n; e++) {
        l.multiplyMatrices(o, t[e].matrixWorld);
        let n = new _(),
          r = new j();
        (l.decompose(r, n, u),
          s.push(n),
          c.push(r),
          this.Q.push(new _()),
          this.P.push(new j()));
      }
      let d = [],
        f = (e, t) => {
          let n = a(t);
          return (n >= 0 && this.parentIdx[n], n);
        },
        p = {
          "Bip01 L UpperArm": [
            `Bip01 L Forearm`,
            new j(-Math.sin(Rn), -Math.cos(Rn), 0),
          ],
          "Bip01 L Forearm": [
            `Bip01 L Hand`,
            new j(-Math.sin(q), -Math.cos(q), 0),
          ],
          "Bip01 L Hand": [
            `Bip01 L Finger2`,
            new j(-Math.sin(q), -Math.cos(q), -0.02),
          ],
          "Bip01 R UpperArm": [
            `Bip01 R Forearm`,
            new j(Math.sin(Rn), -Math.cos(Rn), 0),
          ],
          "Bip01 R Forearm": [
            `Bip01 R Hand`,
            new j(Math.sin(q), -Math.cos(q), 0),
          ],
          "Bip01 R Hand": [
            `Bip01 R Finger2`,
            new j(Math.sin(q), -Math.cos(q), -0.02),
          ],
          "Bip01 L Thigh": [`Bip01 L Calf`, new j(0.012, -1, 0)],
          "Bip01 L Calf": [`Bip01 L Foot`, new j(0, -1, 0)],
          "Bip01 R Thigh": [`Bip01 R Calf`, new j(-0.012, -1, 0)],
          "Bip01 R Calf": [`Bip01 R Foot`, new j(0, -1, 0)],
        };
      for (let e = 0; e < n; e++) {
        let n = this.parentIdx[e],
          r = new _();
        n >= 0 && r.copy(d[n]);
        let i = t[e].name.replace(/_/g, ` `),
          a = p[i];
        if (a) {
          let t = f(e, a[0]);
          t >= 0 &&
            (Kn(new j().subVectors(c[t], c[e]).applyQuaternion(r), a[1], J),
            r.premultiply(J));
        }
        (/ (L|R) Foot$/.test(i) && r.identity(), d.push(r));
      }
      for (let e = 0; e < n; e++) {
        let t = this.parentIdx[e];
        (this.Qref.push(d[e].clone().multiply(s[e])),
          t < 0
            ? this.Pref.push(c[e].clone())
            : this.Pref.push(
                new j()
                  .subVectors(c[e], c[t])
                  .applyQuaternion(d[t])
                  .add(this.Pref[t]),
              ));
      }
      for (let e = 0; e < n; e++) {
        let t = this.parentIdx[e];
        if (t < 0)
          (this.Lref.push(this.Qref[e].clone()),
            this.Oref.push(this.Pref[e].clone()));
        else {
          let n = this.Qref[t].clone().invert();
          (this.Lref.push(n.clone().multiply(this.Qref[e])),
            this.Oref.push(
              new j().subVectors(this.Pref[e], this.Pref[t]).applyQuaternion(n),
            ));
        }
      }
      let m = a(`Bip01 LEye`),
        h = a(`Bip01 LEyeBlinkTop`),
        g = a(`Bip01 LEyeBlinkBottom`);
      if (m >= 0 && h >= 0 && g >= 0) {
        let e = Math.max(0.004, this.Pref[h].y - this.Pref[g].y);
        (this.lidTopOfs.set(0, -e * 0.82, -0.0015),
          this.lidBotOfs.set(0, e * 0.18, -5e-4));
      }
      let v = [],
        y = (e) => (e >= 0 ? this.Pref[e].clone() : null);
      for (let e = 0; e < 27; e++) {
        let t = Ln[e];
        v.push(y(t ? a(t) : -1) ?? new j());
      }
      let b = v,
        x = (e, t) => {
          let n = a(t);
          b[e === P.handL ? P.fingersL : P.fingersR] =
            n >= 0
              ? this.Pref[n].clone()
              : b[e].clone().add(new j(0, -0.09, 0));
        };
      (x(P.handL, `Bip01 L Finger2`),
        x(P.handR, `Bip01 R Finger2`),
        a(`Bip01 MJaw`) < 0 &&
          (b[P.jaw] = b[P.head].clone().add(new j(0, 0.02, -0.02))),
        a(`Bip01 LEye`) < 0 &&
          (b[P.eyeL] = b[P.head].clone().add(new j(-0.032, 0.08, -0.09))),
        a(`Bip01 REye`) < 0 &&
          (b[P.eyeR] = b[P.head].clone().add(new j(0.032, 0.08, -0.09))),
        (b[P.lidL] = b[P.eyeL].clone()),
        (b[P.lidR] = b[P.eyeR].clone()),
        (b[P.hair] = b[P.head].clone().add(new j(0, 0.2, 0.02))));
      let S = [];
      for (let e = 0; e < 27; e++) {
        let t = new ke();
        ((t.name = `sem:${ht[e]}`), S.push(t));
      }
      for (let e = 0; e < 27; e++) {
        let t = gt[e];
        (t >= 0
          ? (S[t].add(S[e]), S[e].position.subVectors(b[e], b[t]))
          : S[e].position.copy(b[e]),
          S[e].scale.set(1, e === P.lidL || e === P.lidR ? 0.001 : 1, 1));
      }
      let C = 0;
      for (let e of t) C = Math.max(C, e.position.y);
      this.proxy = {
        bones: S,
        rest: S.map((e) => e.position.clone()),
        joints: v,
        root: S[P.hips],
        height: C,
        thighLen: b[P.thighL].distanceTo(b[P.shinL]),
        shinLen: b[P.shinL].distanceTo(b[P.footL]),
      };
      for (let e = 0; e < 27; e++)
        (this.Qs.push(new _()), this.Ps.push(new j()));
      (this.armAxis[0].copy(b[P.handL]).sub(b[P.foreL]).normalize(),
        this.armAxis[1].copy(b[P.handR]).sub(b[P.foreR]).normalize());
    }
    get boneCount() {
      return this.bip.length;
    }
    reset() {
      for (let e of this.proxy.bones) e.rotation.set(0, 0, 0);
      for (let e = 0; e < 27; e++)
        this.proxy.bones[e].position.copy(this.proxy.rest[e]);
      this.update();
    }
    update() {
      let e = this.proxy.bones,
        t = this.Qs,
        n = this.Ps;
      for (let r = 0; r < 2; r++)
        for (let r = 0; r < 27; r++) {
          let i = gt[r],
            a = e[r];
          i < 0
            ? (t[r].copy(a.quaternion), n[r].copy(a.position))
            : (t[r].multiplyQuaternions(t[i], a.quaternion),
              n[r].copy(a.position).applyQuaternion(t[i]).add(n[i]));
        }
      let r = this.bip.length,
        i = this.Q,
        a = this.P,
        o = e[P.lidL].scale.y,
        s = e[P.lidR].scale.y;
      for (let c = 0; c < r; c++) {
        let r = this.parentIdx[c],
          l = this.sem[c];
        if (l >= 0) {
          if (l === P.chest)
            (this.qTmp.copy(e[P.chest].quaternion),
              J.identity().slerp(this.qTmp, 0.5),
              i[c].multiplyQuaternions(t[P.spine], J).multiply(this.Qref[c]));
          else if (l === P.foreL || l === P.foreR) {
            let n = this.armAxis[l === P.foreL ? 0 : 1];
            (qn(e[l].quaternion, n, this.qTw),
              this.qInv.copy(this.qTw).invert(),
              J.copy(e[l].quaternion).multiply(this.qInv),
              Un.identity().slerp(this.qTw, 0.5),
              J.multiply(Un),
              i[c].multiplyQuaternions(t[gt[l]], J).multiply(this.Qref[c]));
          } else i[c].multiplyQuaternions(t[l], this.Qref[c]);
          a[c].copy(n[l]);
        } else if (r >= 0) {
          let n = this.role[c];
          if (n === zn) i[c].multiplyQuaternions(t[P.chest], this.Qref[c]);
          else if (n === Bn) {
            let t = e[this.side[c] < 0 ? P.fingersL : P.fingersR].quaternion,
              n = this.fingerK[c],
              a = n > 10 ? 0.15 : n === 1 ? 0.5 : 0.6;
            (J.identity().slerp(t, a),
              this.qInv.copy(this.Qref[r]).invert(),
              i[c]
                .multiplyQuaternions(i[r], this.qInv)
                .multiply(J)
                .multiply(this.Qref[c]));
          } else i[c].multiplyQuaternions(i[r], this.Lref[c]);
          if (
            (a[c].copy(this.Oref[c]).applyQuaternion(i[r]).add(a[r]),
            n === Vn || n === Hn)
          ) {
            let e = this.side[c] < 0 ? o : s,
              t = Math.max(0, Math.min(1, (e - 0.001) / 0.999));
            t > 0 &&
              (this.vTmp
                .copy(n === Vn ? this.lidTopOfs : this.lidBotOfs)
                .multiplyScalar(t),
              this.qTmp.copy(i[r]).multiply(Un.copy(this.Qref[r]).invert()),
              a[c].add(this.vTmp.applyQuaternion(this.qTmp)));
          }
        } else (i[c].copy(this.Qref[c]), a[c].copy(this.Pref[c]));
      }
      for (let e = 0; e < r; e++) {
        let t = this.bip[e],
          n = this.parentIdx[e];
        n < 0
          ? (t.quaternion.copy(i[e]), t.position.copy(a[e]))
          : (this.qInv.copy(i[n]).invert(),
            t.quaternion.multiplyQuaternions(this.qInv, i[e]),
            t.position.subVectors(a[e], a[n]).applyQuaternion(this.qInv));
      }
    }
  },
  Yn = `
uniform float uNight;
uniform float uWet;
uniform float uSss;
float gSkin;
float gCloth;
float gHair;
vec3 gAlbedo;
#ifdef RBX_LOOK
varying float vRbxY;
float gFab;
#endif
`,
  Xn = `
#ifdef RBX_LOOK
varying float vRbxY;
#endif
`,
  Zn = `
#ifdef RBX_LOOK
  vRbxY = transformed.y;
#endif
`,
  Qn = `
#ifdef RBX_CARDS
  gSkin = 0.0; gCloth = 0.0; gHair = 1.0;
  #ifdef RBX_FRINGE
    if (diffuseColor.a >= 0.5) discard;
    diffuseColor.a = smoothstep(0.04, 0.5, diffuseColor.a) * 0.9;
  #endif
#else
  {
    // mask: R skin · G roughness · B kind (0…0.5 cloth-sheen weight, 0.5…1 hair weight)
    vec4 rbxM = texture2D(roughnessMap, vRoughnessMapUv);
    gSkin = rbxM.r;
    gCloth = rbxM.b < 0.5 ? rbxM.b * 2.0 : 0.0;
    gHair = clamp((rbxM.b - 0.5) * 2.0, 0.0, 1.0);
  }
#endif
  diffuseColor.rgb *= 1.0 - uWet * (0.24 * gCloth + 0.12 * gHair + 0.03 * gSkin);
  gAlbedo = diffuseColor.rgb;
`,
  $n = `
#ifdef RBX_CARDS
  roughnessFactor = 0.62;
#endif
  // rain: cloth soaks darker & glossier, skin and hair get a wet sheen
  roughnessFactor = mix(roughnessFactor, min(roughnessFactor, 0.28 + 0.2 * gCloth), uWet * 0.75);
`,
  er = `
void rbxDirect(const in IncidentLight directLight, const in vec3 N, const in vec3 V, inout ReflectedLight reflectedLight) {
  vec3 L = directLight.direction;
  float ndl = dot(N, L);
  float ndv = clamp(dot(N, V), 0.0, 1.0);
  if (gSkin > 0.01) {
    float wrapR = clamp((ndl + 0.55) / 1.55, 0.0, 1.0);
    float wrapG = clamp((ndl + 0.25) / 1.25, 0.0, 1.0);
    float lam = clamp(ndl, 0.0, 1.0);
    vec3 scatter = vec3(wrapR * wrapR, wrapG * wrapG, wrapG * wrapG * 0.92) - vec3(lam);
    reflectedLight.directDiffuse += directLight.color * gAlbedo * max(scatter, vec3(0.0)) * vec3(0.9, 0.42, 0.32) * RECIPROCAL_PI * gSkin * uSss;
    float back = pow(clamp(dot(V, -L), 0.0, 1.0), 4.0) * pow(1.0 - ndv, 2.0);
    reflectedLight.directDiffuse += directLight.color * gAlbedo * vec3(1.0, 0.3, 0.2) * back * 0.3 * gSkin * uSss;
  }
  if (gHair > 0.01) {
    // Kajiya-Kay along the strand direction ≈ "down the head" projected on the surface
    vec3 upV = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
    vec3 T = normalize(upV - N * dot(N, upV) + 1e-5);
    vec3 H = normalize(L + V);
    vec3 T1 = normalize(T + N * 0.1), T2 = normalize(T - N * 0.12);
    float th1 = dot(T1, H), th2 = dot(T2, H);
    float s1 = pow(sqrt(max(0.0, 1.0 - th1 * th1)), 90.0);
    float s2 = pow(sqrt(max(0.0, 1.0 - th2 * th2)), 18.0);
    float vis = smoothstep(-0.1, 0.4, ndl);
#ifdef RBX_LOOK
    // strand variation from the painted albedo (dark gaps between locks catch less) — breaks the solid-helmet read
    float hv = clamp(dot(gAlbedo, vec3(0.3, 0.59, 0.11)) * 28.0, 0.35, 1.6);
    reflectedLight.directSpecular += directLight.color * vis * gHair * hv * (vec3(0.13) * s1 + min(gAlbedo, vec3(0.28)) * 1.1 * s2) * (1.0 + 1.5 * uWet);
#else
    reflectedLight.directSpecular += directLight.color * vis * gHair * (vec3(0.06) * s1 + min(gAlbedo, vec3(0.28)) * 0.8 * s2) * (1.0 + 1.5 * uWet);
#endif
    // strands light from any side: softer terminator
    float tl = dot(T, L);
    float kd = sqrt(max(0.0, 1.0 - tl * tl));
    reflectedLight.directDiffuse += directLight.color * gAlbedo * RECIPROCAL_PI * gHair * max(0.0, 0.3 * kd * smoothstep(-0.4, 0.3, ndl) - 0.22 * max(ndl, 0.0));
  }
#ifdef RBX_LOOK
  // fabric sheen: broader, and desaturated toward a faint grey so black / navy clothes still show their form
  float wFab = max(gCloth, gFab);
  if (wFab > 0.01) {
    float wrap = clamp((ndl + 0.3) / 1.3, 0.0, 1.0);
    float sheen = pow(1.0 - ndv, 3.0) * 0.5;
    reflectedLight.directSpecular += directLight.color * (gAlbedo * 0.7 + vec3(0.03)) * sheen * wrap * RECIPROCAL_PI * wFab;
  }
#else
  if (gCloth > 0.01) {
    float wrap = clamp((ndl + 0.3) / 1.3, 0.0, 1.0);
    float sheen = pow(1.0 - ndv, 4.0) * 0.5;
    reflectedLight.directSpecular += directLight.color * gAlbedo * sheen * wrap * RECIPROCAL_PI * gCloth;
  }
#endif
}
void RE_Direct_Physical(const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
  RE_Direct_Physical_Base(directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight);
  rbxDirect(directLight, geometryNormal, geometryViewDir, reflectedLight);
}
`,
  tr = `
  {
    vec3 Vv = normalize(vViewPosition);
    float ndv = clamp(dot(normal, Vv), 0.0, 1.0);
    float rim = pow(1.0 - ndv, 3.0);
    vec3 upV = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
    float up = dot(normal, upV) * 0.5 + 0.5;
    float day = 1.0 - uNight;
    // night readability: soft overhead fill + cool city-light rim
    totalEmissiveRadiance += diffuseColor.rgb * uNight * (0.035 + 0.09 * up);
    totalEmissiveRadiance += vec3(0.62, 0.72, 1.0) * rim * (0.012 + 0.14 * uNight) * (0.35 + 0.65 * dot(diffuseColor.rgb, vec3(0.33)));
    // skin: warm bounce (light scattered inside skin never looks grey in shade)
    totalEmissiveRadiance += diffuseColor.rgb * vec3(1.0, 0.5, 0.4) * (0.008 + 0.014 * day) * (0.6 + 0.4 * up) * gSkin * uSss;
  }
`,
  nr = `
#ifdef RBX_LOOK
  {
    gFab = (1.0 - gSkin) * (1.0 - gHair) * smoothstep(0.3, 0.45, roughnessFactor);
    // near-black fabric reads as a hole in the frame: lift it toward real black cloth (≈ 3–4 % albedo) multiplicatively,
    // so the folds baked into the albedo survive; mid / light colours are untouched
    float lkL = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
    diffuseColor.rgb *= 1.0 + gFab * 1.2 * (1.0 - smoothstep(0.006, 0.045, lkL));
    gAlbedo = diffuseColor.rgb;
    float lkRim = pow(1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0), 3.0);
    float lkDay = 1.0 - uNight;
    totalEmissiveRadiance += vec3(0.62, 0.7, 0.85) * lkRim * gHair * (0.035 + 0.02 * lkDay);
    totalEmissiveRadiance += (diffuseColor.rgb * 0.6 + vec3(0.012)) * lkRim * gFab * (0.25 + 0.15 * lkDay);
    // eyes (the only glossy region of the head): a little light in the iris / whites — they read grey and dead
    totalEmissiveRadiance += diffuseColor.rgb * (1.0 - smoothstep(0.17, 0.27, roughnessFactor)) * (1.0 - gCloth) * 0.05;
  }
#endif
`,
  rr = `
#ifdef RBX_LOOK
  {
    float lkAo = mix(0.55, 1.0, smoothstep(0.02, 0.5, vRbxY));
    reflectedLight.indirectDiffuse *= lkAo;
    reflectedLight.indirectSpecular *= mix(0.7, 1.0, lkAo);
  }
#endif
`,
  ir = (e) => ft && e !== `atlas`;
