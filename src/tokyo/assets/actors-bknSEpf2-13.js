// tokyo/assets/actors-bknSEpf2 13 — mesh
// Lines 3867-4135 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
var lo = `
attribute float aBone;
attribute vec4 aFlags;
attribute vec4 aA;
attribute vec4 aB;
attribute vec4 aC;
uniform float uNight;
uniform float uTime;
varying float vGlow;

mat3 oRotX(float a) { float c = cos(a), s = sin(a); return mat3(1.0, 0.0, 0.0, 0.0, c, s, 0.0, -s, c); }
mat3 oRotY(float a) { float c = cos(a), s = sin(a); return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c); }
mat3 oRotZ(float a) { float c = cos(a), s = sin(a); return mat3(c, s, 0.0, -s, c, 0.0, 0.0, 0.0, 1.0); }
void oAbout(inout vec3 p, inout vec3 n, mat3 R, vec3 q) { p = R * (p - q) + q; n = R * n; }

void officerPose(inout vec3 p, inout vec3 n) {
  float variant = floor(aB.y / 8.0 + 0.01);
  // the other body variants' vertices (3 of 4) collapse to a point before any posing work
  if (abs(aFlags.x - variant) > 0.5) { p = vec3(0.0); return; }
  float bone = aBone;
  float ph = aA.x, st = aA.y, aim = aA.z, cr = aA.w;
  float gun = aB.x, pitch = aB.w;
  float rest = aB.y - variant * 8.0;
  float flinch = aC.x, reach = aC.y, talk = aC.z, wave = max(0.0, aC.w), ride = max(0.0, -aC.w);
  float s = sin(ph), c = cos(ph);

  // weapon visibility (hidden parts collapse to a point)
  float vis = 1.0;
  float av = aFlags.y;
  if (av > 0.5) {
    float pistolOut = step(0.5, gun) * step(gun, 1.5);
    float rifleOut = step(1.5, gun);
    if (av < 1.5) vis *= pistolOut;
    else if (av < 2.5) vis *= rifleOut;
    else if (av < 5.5) vis *= 1.0 - pistolOut;
    else if (av < 6.5) vis *= 1.0 - rifleOut;
    else vis *= step(0.4, reach) * (1.0 - step(0.5, gun)); // handcuffs while reaching to arrest
  }

  // ---- legs
  float thighL = st * 0.72 * s;
  float thighR = -st * 0.72 * s;
  float kneeL = -st * (0.15 + 1.05 * max(0.0, c));
  float kneeR = -st * (0.15 + 1.05 * max(0.0, -c));
  thighL += cr * 1.25; thighR += cr * 1.05;
  kneeL -= cr * 2.05; kneeR -= cr * 1.9;
  thighL = mix(thighL, 1.42, ride); thighR = mix(thighR, 1.42, ride);
  kneeL = mix(kneeL, -1.3, ride); kneeR = mix(kneeR, -1.3, ride);
  // ---- arms (swing opposite legs, elbows bend when running; slightly out over the duty-belt gear)
  float elbow = 0.22 + st * 0.95;
  float armL = -st * 0.62 * s, armR = st * 0.62 * s;
  float addL = -0.1, addR = 0.1;
  float twL = 0.0, twR = 0.0;
  float elbL = elbow, elbR = elbow;
  // idle rest poses: 1 hands resting on the belt buckle · 2 hands behind the back
  float restW = clamp(1.0 - st * 2.5, 0.0, 1.0) * (1.0 - aim) * (1.0 - reach) * (1.0 - wave) * (1.0 - ride) * (1.0 - cr) * step(0.5, rest);
  if (restW > 0.0) {
    bool behind = rest > 1.5;
    float ra = behind ? -0.32 : -0.06, rd = behind ? 0.04 : 0.34, re = behind ? 1.45 : 1.3, rt = behind ? 1.75 : 0.95;
    armL = mix(armL, ra, restW); armR = mix(armR, ra, restW);
    addL = mix(addL, -rd, restW); addR = mix(addR, rd, restW);
    elbL = mix(elbL, re, restW); elbR = mix(elbR, re, restW);
    twL = mix(twL, -rt, restW); twR = mix(twR, rt, restW);
  }
  // rifle carried at low ready (drawn, not aiming)
  float carry = step(1.5, gun) * (1.0 - aim) * (1.0 - ride);
  armR = mix(armR, 0.3 + st * 0.1 * s, carry); elbR = mix(elbR, 0.8, carry); addR = mix(addR, -0.05, carry);
  armL = mix(armL, 0.62 + st * 0.1 * s, carry); elbL = mix(elbL, 1.05, carry); addL = mix(addL, 0.48, carry);
  // aim: right arm straight at target, left supports (two-hand grip)
  float aimRifle = step(1.5, gun);
  armR = mix(armR, 1.5708 + pitch, aim);
  elbR = mix(elbR, mix(0.04, 0.1, aimRifle), aim);
  addR = mix(addR, mix(-0.2, -0.06, aimRifle), aim);
  armL = mix(armL, mix(1.34, 1.2, aimRifle) + pitch, aim);
  elbL = mix(elbL, mix(0.4, 0.72, aimRifle), aim);
  addL = mix(addL, mix(0.52, 0.5, aimRifle), aim);
  twL *= 1.0 - aim; twR *= 1.0 - aim;
  // arrest reach: both arms forward
  armL = mix(armL, 1.2, reach); armR = mix(armR, 1.2, reach);
  elbL = mix(elbL, 0.25, reach); elbR = mix(elbR, 0.25, reach);
  addL = mix(addL, 0.16, reach); addR = mix(addR, -0.16, reach);
  // radio (left hand up to the shoulder speaker-mic)
  armL = mix(armL, 0.4, talk); elbL = mix(elbL, 2.25, talk); addL = mix(addL, 0.3, talk); twL *= 1.0 - talk;
  // scooter handlebars
  armL = mix(armL, 0.95, ride); armR = mix(armR, 0.95, ride);
  elbL = mix(elbL, 0.5, ride); elbR = mix(elbR, 0.5, ride);
  addL = mix(addL, 0.1, ride); addR = mix(addR, -0.1, ride);
  // traffic wave (right arm sweeps)
  armR = mix(armR, 1.2 + sin(ph * 0.5) * 0.25, wave); addR = mix(addR, -1.1 + sin(ph) * 0.5, wave); elbR = mix(elbR, 0.1, wave); twR *= 1.0 - wave;

  // idle life: breathing + slight weight shift when standing (per-instance phase from the tone seed)
  float idle = (1.0 - st) * (1.0 - ride) * (1.0 - aim * 0.7);
  float br = sin(uTime * 1.7 + aB.z * 40.0 + variant * 2.1);
  armL += idle * 0.03 * br; armR -= idle * 0.025 * br;
  float lean = st * 0.2 + cr * 0.32 - flinch * 0.35 + aim * 0.04 + ride * 0.12 + carry * 0.08 + idle * 0.012 * br;
  if (bone > 6.5) {
    bool left = bone < 8.5;
    float th = left ? thighL : thighR;
    float kn = left ? kneeL : kneeR;
    float hx = left ? -0.095 : 0.095;
    if (abs(bone - 8.0) < 0.5 || abs(bone - 10.0) < 0.5) oAbout(p, n, oRotX(kn), vec3(hx, 0.5, 0.0));
    oAbout(p, n, oRotX(th), vec3(hx, 0.92, 0.0));
  } else if (bone > 2.5) {
    bool left = bone < 4.5;
    float sx = left ? -0.205 : 0.205;
    float ex = left ? -0.215 : 0.215;
    if (abs(bone - 4.0) < 0.5 || abs(bone - 6.0) < 0.5) oAbout(p, n, oRotY(left ? twL : twR) * oRotX(left ? elbL : elbR), vec3(ex, 1.115, 0.0));
    oAbout(p, n, oRotX(left ? armL : armR) * oRotZ(left ? addL : addR), vec3(sx, 1.4, 0.0));
    oAbout(p, n, oRotX(-lean), vec3(0.0, 0.98, 0.0));
  } else if (bone > 0.5) {
    if (bone > 1.5) oAbout(p, n, oRotX(lean * 0.55 + pitch * 0.4 * aim + sin(ph * 2.0) * 0.02 * st), vec3(0.0, 1.5, 0.0));
    oAbout(p, n, oRotX(-lean), vec3(0.0, 0.98, 0.0));
  }
  // body drop for crouch + running bob
  p.y -= cr * 0.44;
  p.y += st * 0.05 * abs(c);
  p *= vis;
}
`,
  uo = `#include <emissivemap_fragment>
  {
    float oRim = pow(1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0), 3.0);
    vec3 oUpV = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
    float oUp = dot(normal, oUpV) * 0.5 + 0.5;
    // night readability (same fill / rim as peds & library heroes) + retro-reflective bands
    totalEmissiveRadiance += diffuseColor.rgb * (uNight * (0.05 + 0.12 * oUp) + oRim * (0.03 + 0.14 * uNight));
    totalEmissiveRadiance += diffuseColor.rgb * vGlow * (0.04 + 0.9 * uNight);
  }`;
function fo(e) {
  let t = e
    ? new C({ vertexColors: !0, roughness: 0.78, metalness: 0 })
    : new he({ vertexColors: !0 });
  return (
    (t.name = `police-officer`),
    (t.onBeforeCompile = (e) => {
      ((e.uniforms.uNight = Gt.uNight),
        (e.uniforms.uTime = Gt.uTime),
        (e.vertexShader = e.vertexShader
          .replace(`#include <common>`, `#include <common>\n${lo}`)
          .replace(
            `#include <color_vertex>`,
            `#include <color_vertex>
        vColor.rgb *= mix(1.0, aB.z, aFlags.w);
        vGlow = aFlags.z;`,
          )
          .replace(
            `#include <beginnormal_vertex>`,
            `#include <beginnormal_vertex>
{ vec3 pp = position; officerPose(pp, objectNormal); }`,
          )
          .replace(
            `#include <begin_vertex>`,
            `#include <begin_vertex>
{ vec3 nn = vec3(0.0, 1.0, 0.0); officerPose(transformed, nn); }`,
          )),
        (e.fragmentShader = e.fragmentShader
          .replace(
            `#include <common>`,
            `#include <common>
uniform float uNight;
varying float vGlow;`,
          )
          .replace(`#include <emissivemap_fragment>`, uo)));
    }),
    (t.customProgramCacheKey = () =>
      e ? `police-officer-std-v4` : `police-officer-lambert-v4`),
    t
  );
}
function po(e, t, n, r) {
  let { geo: i, tris: a } = co(e);
  yt(i);
  let o = new oe(new Float32Array(64), 4).setUsage(O),
    s = new oe(new Float32Array(64), 4).setUsage(O),
    c = new oe(new Float32Array(64), 4).setUsage(O);
  (i.setAttribute(`aA`, o), i.setAttribute(`aB`, s), i.setAttribute(`aC`, c));
  let l = new Ce(i, t, 16);
  ((l.customDepthMaterial = n),
    l.instanceMatrix.setUsage(O),
    (l.count = 0),
    (l.visible = !1));
  let u = new b(new V(), 1);
  return (
    (l.boundingSphere = u),
    (l.frustumCulled = !0),
    (l.castShadow = e === 1),
    (l.receiveShadow = !0),
    (l.name = r),
    { mesh: l, aA: o, aB: s, aC: c, tris: a, sphere: u }
  );
}
function mo(e) {
  let t = {},
    n = (e) => (t[e ? `std` : `lambert`] ??= fo(e)),
    r = new E({ depthPacking: R });
  ((r.name = `police-officer-depth`),
    (r.onBeforeCompile = (e) => {
      ((e.uniforms.uNight = Gt.uNight),
        (e.uniforms.uTime = Gt.uTime),
        (e.vertexShader = e.vertexShader
          .replace(`#include <common>`, `#include <common>\n${lo}`)
          .replace(
            `#include <begin_vertex>`,
            `#include <begin_vertex>
{ vec3 nn = vec3(0.0, 1.0, 0.0); officerPose(transformed, nn); }`,
          )));
    }),
    (r.customProgramCacheKey = () => `police-officer-depth-v4`));
  let i = po(1, n(e), r, `police-officers`),
    a = po(2, n(e), r, `police-officers-far`),
    o = null,
    s = null;
  return {
    near: i,
    far: a,
    setPbr(e) {
      ((i.mesh.material = n(e)),
        (a.mesh.material = n(e)),
        o && (o.material = n(e)),
        s && (s.material = n(e)));
    },
    prototypes() {
      if (!o) {
        let e = (e, t) => {
          let n = new Ce(e.mesh.geometry, e.mesh.material, 1);
          return (
            (n.customDepthMaterial = r),
            (n.castShadow = !0),
            (n.receiveShadow = !0),
            (n.frustumCulled = !1),
            (n.name = t),
            n
          );
        };
        ((o = e(a, `police-officers-prewarm`)),
          (s = e(i, `police-officers-near-prewarm`)));
      }
      return [o, s];
    },
  };
}
var ho = (e) => wa[e].desc.height / ro,
  go = 16,
  _o = 10,
  vo = 2,
  yo = [`police`, `scooter`, `van`];
function bo(e) {
  let t = e.mesh.geometry,
    n = new le();
  for (let [e, r] of Object.entries(t.attributes)) n.setAttribute(e, r);
  n.setIndex(t.index);
  let r = [`aA`, `aB`, `aC`].map((e) => {
      let t = new oe(new Float32Array(64), 4).setUsage(O);
      return (n.setAttribute(e, t), t);
    }),
    i = new Ce(n, e.mesh.material, go);
  ((i.customDepthMaterial = e.mesh.customDepthMaterial),
    i.instanceMatrix.setUsage(O),
    (i.count = 0),
    (i.visible = !1),
    (i.castShadow = e.mesh.castShadow),
    (i.receiveShadow = !0),
    (i.name = `net-police-officers`));
  let a = new b();
  return (
    (i.boundingSphere = a),
    { mesh: i, aA: r[0], aB: r[1], aC: r[2], sphere: a, tris: e.tris }
  );
}
