// tokyo/assets/world-Bo9wkXrT 57 — math
// Lines 18479-18800 of readable/tokyo/assets/world-Bo9wkXrT.pretty.js (statement-aligned).
var Kp = (e, t, n, r, i, a, o, s, c = 0) => {
    let l = new ne(1, 0);
    return (
      c && l.rotateY(c),
      l.scale(r, i, a),
      l.translate(e, t, n),
      { geo: l, top: o, bottom: s, soft: 0.95 }
    );
  },
  qp = (
    e,
    t,
    n,
    r = 0,
    i = new W(0.25, 0.19, 0.13),
    a = new W(0.18, 0.13, 0.09),
  ) => {
    let o = new D(n, t, e, 4, 1, !0);
    return (
      o.translate(0, r + e / 2, 0),
      { geo: o, top: i, bottom: a, soft: 0 }
    );
  };
function Jp() {
  let e = new W(0.19, 0.29, 0.075),
    t = new W(0.04, 0.075, 0.028),
    n = new W(0.12, 0.22, 0.07),
    r = new W(0.03, 0.06, 0.025),
    i = Gp([
      Kp(0, 6.3, 0, 4.4, 3.7, 4.4, e, t),
      Kp(3, 4.6, 1.5, 3.2, 2.7, 3.2, e, t, 0.7),
      Kp(-2.4, 5, -1.9, 2.9, 2.5, 2.9, e, t, 1.9),
      qp(4.6, 0.42, 0.26, -0.1),
    ]),
    a = Gp([
      Kp(0, 9, 0, 2.3, 4.6, 2.3, n, r),
      Kp(0.3, 5.6, -0.2, 2.9, 3.2, 2.9, n, r, 0.9),
      qp(6.5, 0.34, 0.2, -0.1),
    ]),
    o = [],
    s = new W(0.2, 0.3, 0.08),
    c = new W(0.08, 0.14, 0.04);
  for (let e = 0; e < 7; e++) {
    let t = (e / 7) * Math.PI * 2 + (e % 2) * 0.2,
      n = new V(),
      r = 3.4,
      i = new Float32Array([
        0,
        0,
        0,
        r * 0.55,
        0.5,
        -0.55,
        r,
        -1.3,
        0,
        r * 0.55,
        0.5,
        0.55,
      ]);
    (n.setAttribute(`position`, new H(i, 3)),
      n.setIndex([0, 2, 1, 0, 3, 2, 0, 1, 2, 0, 2, 3]),
      n.rotateY(t),
      n.translate(0, 9.2, 0),
      o.push({ geo: n, top: s, bottom: c, soft: 0.35 }));
  }
  return [
    i,
    a,
    Gp([
      ...o,
      Kp(0, 9.3, 0, 0.55, 0.5, 0.55, s, c),
      qp(9.3, 0.2, 0.15, -0.1, new W(0.42, 0.4, 0.34), new W(0.3, 0.28, 0.24)),
    ]),
  ];
}
var Yp = { uTreeFade: { value: new ce(600, 760) }, uWindAmt: { value: 0.3 } };
function Xp() {
  let e = new O({ vertexColors: !0 });
  return (
    (e.name = `env-trees`),
    (e.defines = { FOG_NO_CLIP: `` }),
    (e.onBeforeCompile = (e) => {
      ((e.uniforms.uTreeFade = Yp.uTreeFade),
        (e.uniforms.uWindAmt = Yp.uWindAmt),
        (e.uniforms.uTime = K.uTime),
        (e.uniforms.uWet = K.uWet),
        (e.vertexShader = e.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
uniform vec2 uTreeFade;
uniform float uWindAmt;
uniform float uTime;
varying vec3 vLeafP;
varying float vLeafSeed;`,
          )
          .replace(
            `#include <begin_vertex>`,
            `#include <begin_vertex>
        {
          #ifdef USE_INSTANCING
          vec4 tiW = modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          #else
          vec4 tiW = modelMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          #endif
          float tdist = distance(tiW.xyz, cameraPosition);
          float tk = 1.0 - smoothstep(uTreeFade.x, uTreeFade.y, tdist);
          float h = max(transformed.y - 2.5, 0.0) / 6.0;
          float sw = sin(uTime * 1.4 + tiW.x * 0.05 + tiW.z * 0.07) + 0.5 * sin(uTime * 2.3 + tiW.z * 0.11);
          transformed.x += sw * 0.12 * uWindAmt * h;
          transformed.z += sw * 0.07 * uWindAmt * h;
          transformed *= tk;
          // leaf-clump texture coordinates: object space (moves with the crown), per-tree offset
          vLeafP = transformed;
          vLeafSeed = fract(tiW.x * 0.137 + tiW.z * 0.091);
        }`,
          )),
        (e.fragmentShader = e.fragmentShader
          .replace(
            `#include <common>`,
            `#include <common>\nuniform float uWet;\nvarying vec3 vLeafP;\nvarying float vLeafSeed;\n${pp}`,
          )
          .replace(
            `#include <color_fragment>`,
            `#include <color_fragment>
        {
          // clumped foliage: dark gaps between leaf masses + sunlit tufts (breaks up the blob crowns in the
          // mid range; the nearest ~115–340 m are drawn with leaf-card crowns, forest.ts)
          float lf = 1.0 - smoothstep(260.0, 520.0, length(vViewPosition));
          if (lf > 0.001) {
            vec3 q = vLeafP * 1.35 + vLeafSeed * 17.0;
            float n = eNoise(q.xz + q.y * 0.7) * 0.6 + eNoise(q.zy * 2.1 + 3.3) * 0.4;
            diffuseColor.rgb *= mix(1.0, 0.62 + 0.62 * smoothstep(0.25, 0.8, n), lf);
          }
          diffuseColor.rgb *= 1.0 - 0.2 * uWet;
        }`,
          )));
    }),
    (e.customProgramCacheKey = () => `env-trees-v3`),
    e
  );
}
function Zp(e, t, n) {
  let r = { matrices: [], colors: [], species: [], colliders: [] },
    i = new we(),
    a = new x(),
    o = new U(),
    s = new U(),
    c = new U(0, 1, 0),
    l = e.B,
    u = 1,
    d = (t, d, f, p) => {
      u++;
      let m = Sp(u, 11),
        h = Sp(u, 23),
        g = Sp(u, 37),
        _ = Sp(u, 51),
        v = t + (m - 0.5) * f * 0.9,
        y = d + (h - 0.5) * f * 0.9,
        b = e.kind(v, y);
      if (b === `city` || b === `water`) return;
      let x = e.outside(v, y);
      if (
        x < 9 ||
        x > (b === `land` ? 720 : 520) ||
        (p && ((b !== `land` && e.knoll(v, y) < 0.3) || x > 440)) ||
        n(v, y)
      )
        return;
      let S = e.height(v, y);
      if (
        S < 0.4 ||
        (b === `land` && e.edgeUrban(v, y) > 0.3 && S - e.sw < 8) ||
        (v < l.minX && v > e.riverX - 2 && y > l.minZ)
      )
        return;
      let C = S - (b === `farbank` ? 2.2 : e.sw);
      if (
        b === `farbank` &&
        ((e.dazhiPlain(v, y) > 0.3 && C < 10) ||
          (C < 6 && e.bankDist(v, y) > 45))
      )
        return;
      let w = e.height(v + 3, y) - e.height(v - 3, y),
        T = e.height(v, y + 3) - e.height(v, y - 3);
      if (
        Math.hypot(w, T) / 6 > 4.5 ||
        g > (p ? 0.85 * G(3, 11, C) : 0.12 + 0.88 * G(1.5, 14, C)) ||
        Math.hypot(v + 330, y + 1130) < 70
      )
        return;
      let E = Sp(u, 67),
        D = C > 3 && C < 75 ? (x < 500 ? 0.17 : 0.07) : 0,
        O = E < D ? 2 : +(E < D + (C > 30 ? 0.3 : 0.14)),
        k = O === 2 ? 0.8 + _ * 0.45 : C > 18 ? 1 + _ * 0.85 : 0.75 + _ * 0.6;
      (s.set(v, S - (O === 2 ? 0.2 : 0.6), y),
        a.setFromAxisAngle(c, m * Math.PI * 2),
        O === 2
          ? o.set(k, k * (0.85 + g * 0.3), k)
          : o.set(
              k * (0.9 + h * 0.25),
              k * (0.85 + g * 0.35),
              k * (0.9 + _ * 0.2),
            ),
        i.compose(s, a, o),
        r.matrices.push(i.clone()),
        r.colors.push(
          O === 2 ? Qp(0.5, h, g).multiplyScalar(1.05) : Qp(m, h, g),
        ),
        r.species.push(O),
        b === `land` && x < 900 && r.colliders.push({ x: v, z: y, y: S }));
    },
    f = 30 / Math.sqrt(Math.max(0.2, t));
  for (let e = -1500; e < 1300; e += f)
    for (let t = -1500; t < 1700; t += f) d(t, e, f, !1);
  let p = 14 / Math.sqrt(Math.max(0.2, t));
  for (let e = l.minZ - 440; e < l.maxZ + 440; e += p)
    for (let t = l.minX - 440; t < l.maxX + 440; t += p)
      (t > l.minX && t < l.maxX && e > l.minZ && e < l.maxZ) ||
        d(t + p * 0.5, e + p * 0.5, p, !0);
  return r;
}
function Qp(e, t, n) {
  let r = new W(1, 1, 1),
    i = 0.78 + n * 0.42;
  return (
    e < 0.12
      ? r.setRGB(1.12, 1.08, 0.7)
      : e < 0.2
        ? r.setRGB(0.8, 0.95, 0.95)
        : t < 0.012 && r.setRGB(1.7, 0.95, 1.05),
    r.multiplyScalar(i)
  );
}
function $p(e = 256) {
  let t = [8, 16, 32, 64],
    n = [1, 0.55, 0.3, 0.14],
    r = t.map((e, t) => {
      let n = new Float32Array(e * e),
        r = 1234567 + t * 7919;
      for (let e = 0; e < n.length; e++)
        ((r = (Math.imul(r, 1664525) + 1013904223) >>> 0),
          (n[e] = r / 4294967296));
      return n;
    }),
    i = new Float32Array(e * e);
  for (let a = 0; a < e; a++)
    for (let o = 0; o < e; o++) {
      let s = 0;
      for (let i = 0; i < t.length; i++) {
        let c = t[i],
          l = (o / e) * c,
          u = (a / e) * c,
          d = Math.floor(l),
          f = Math.floor(u),
          p = l - d,
          m = u - f,
          h = p * p * (3 - 2 * p),
          g = m * m * (3 - 2 * m),
          _ = r[i],
          v = d % c,
          y = (d + 1) % c,
          b = f % c,
          x = (f + 1) % c,
          S = _[b * c + v],
          C = _[b * c + y],
          w = _[x * c + v],
          T = _[x * c + y];
        s += n[i] * (S + (C - S) * h + (w - S) * g + (S - C - w + T) * h * g);
      }
      i[a * e + o] = s;
    }
  let [a, o] = We(e, e),
    s = o.createImageData(e, e),
    c = 3.2;
  for (let t = 0; t < e; t++)
    for (let n = 0; n < e; n++) {
      let r = i[t * e + ((n + 1) % e)] - i[t * e + ((n - 1 + e) % e)],
        a = i[((t + 1) % e) * e + n] - i[((t - 1 + e) % e) * e + n],
        o = -r * c,
        l = -a * c,
        u = 1,
        d = Math.hypot(o, l, u);
      ((o /= d), (l /= d), (u /= d));
      let f = (t * e + n) * 4;
      ((s.data[f] = (o * 0.5 + 0.5) * 255),
        (s.data[f + 1] = (l * 0.5 + 0.5) * 255),
        (s.data[f + 2] = (u * 0.5 + 0.5) * 255),
        (s.data[f + 3] = 255));
    }
  o.putImageData(s, 0, 0);
  let l = new Ce(a);
  return (
    (l.colorSpace = ``),
    (l.wrapS = l.wrapT = Te),
    (l.anisotropy = 4),
    (l.needsUpdate = !0),
    l
  );
}
function em(e, t) {
  return {
    uSkySun: e.uSkySun,
    uZenith: e.uZenith,
    uHorizon: e.uHorizon,
    uSunset: e.uSunset,
    uSunGlow: e.uSunGlow,
    uMoonDir: e.uMoonDir,
    uMoonCol: e.uMoonCol,
    uFlash: e.uFlash,
    uNormalMap: { value: t },
    uLightDir: { value: new U(0, 1, 0) },
    uLightCol: { value: new W(1, 1, 1) },
    uAmbient: { value: new W(0.4, 0.45, 0.5) },
    uDeep: { value: new W(0.03, 0.045, 0.035) },
    uWTime: { value: 0 },
    uWNight: { value: 0 },
    uWRain: { value: 0 },
    uCloudShade: { value: 0 },
  };
}
