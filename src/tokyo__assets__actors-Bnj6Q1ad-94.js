// tokyo__assets__actors-Bnj6Q1ad 94 — math
// Lines 44488-44836 of readable/tokyo__assets__actors-Bnj6Q1ad.pretty.js (statement-aligned).
var YS = `
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
  XS = `#include <emissivemap_fragment>
  {
    float oRim = pow(1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0), 3.0);
    vec3 oUpV = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
    float oUp = dot(normal, oUpV) * 0.5 + 0.5;
    // night readability (same fill / rim as peds & library heroes) + retro-reflective bands
    totalEmissiveRadiance += diffuseColor.rgb * (uNight * (0.05 + 0.12 * oUp) + oRim * (0.03 + 0.14 * uNight));
    totalEmissiveRadiance += diffuseColor.rgb * vGlow * (0.04 + 0.9 * uNight);
  }`;
function ZS(e) {
  let t = e
    ? new _e({ vertexColors: !0, roughness: 0.78, metalness: 0 })
    : new E({ vertexColors: !0 });
  return (
    (t.name = `police-officer`),
    (t.onBeforeCompile = (e) => {
      ((e.uniforms.uNight = Qe.uNight),
        (e.uniforms.uTime = Qe.uTime),
        (e.vertexShader = e.vertexShader
          .replace(`#include <common>`, `#include <common>\n${YS}`)
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
          .replace(`#include <emissivemap_fragment>`, XS)));
    }),
    (t.customProgramCacheKey = () =>
      e ? `police-officer-std-v4` : `police-officer-lambert-v4`),
    t
  );
}
function QS(e, t, n, r) {
  let { geo: i, tris: o } = JS(e);
  et(i);
  let s = new a(new Float32Array(64), 4).setUsage(b),
    c = new a(new Float32Array(64), 4).setUsage(b),
    l = new a(new Float32Array(64), 4).setUsage(b);
  (i.setAttribute(`aA`, s), i.setAttribute(`aB`, c), i.setAttribute(`aC`, l));
  let u = new Se(i, t, 16);
  ((u.customDepthMaterial = n),
    u.instanceMatrix.setUsage(b),
    (u.count = 0),
    (u.visible = !1));
  let d = new C(new R(), 1);
  return (
    (u.boundingSphere = d),
    (u.frustumCulled = !0),
    (u.castShadow = e === 1),
    (u.receiveShadow = !0),
    (u.name = r),
    { mesh: u, aA: s, aB: c, aC: l, tris: o, sphere: d }
  );
}
function $S(e) {
  let t = {},
    n = (e) => (t[e ? `std` : `lambert`] ??= ZS(e)),
    r = new u({ depthPacking: O });
  ((r.name = `police-officer-depth`),
    (r.onBeforeCompile = (e) => {
      ((e.uniforms.uNight = Qe.uNight),
        (e.uniforms.uTime = Qe.uTime),
        (e.vertexShader = e.vertexShader
          .replace(`#include <common>`, `#include <common>\n${YS}`)
          .replace(
            `#include <begin_vertex>`,
            `#include <begin_vertex>
{ vec3 nn = vec3(0.0, 1.0, 0.0); officerPose(transformed, nn); }`,
          )));
    }),
    (r.customProgramCacheKey = () => `police-officer-depth-v4`));
  let i = QS(1, n(e), r, `police-officers`),
    a = QS(2, n(e), r, `police-officers-far`),
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
          let n = new Se(e.mesh.geometry, e.mesh.material, 1);
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
var eC = (e) => dS[e].desc.height / US,
  tC = Object.fromEntries(
    [
      `hips`,
      `chest`,
      `head`,
      `foreL`,
      `foreR`,
      `thighR`,
      `shinL`,
      `shinR`,
      `pistol`,
      `rifle`,
      `holster`,
      `sling`,
      `armL`,
      `armR`,
      `cuffs`,
    ].map((e, t) => [e, t]),
  ),
  nC = null,
  rC = [0, 0.75, 1, 0.25],
  iC = [0, 0.5, 1, 0.25],
  aC = [0, 0.25, 0.5, 0.25],
  oC = [0.5, 0.25, 0.5, 0.25],
  sC = [0, 0, 0.25, 0.25];
function cC() {
  if (nC) return nC;
  let e = document.createElement(`canvas`);
  ((e.width = 512), (e.height = 512));
  let t = e.getContext(`2d`);
  if (!ux.paint?.(`gear`, t)) {
    let e = `"Noto Sans TC","PingFang TC","Microsoft JhengHei","Heiti TC",sans-serif`,
      n = (n, r, i) => {
        ((t.fillStyle = `#2a2d33`),
          t.fillRect(0, n, 512, r),
          (t.strokeStyle = `rgba(255,255,255,0.14)`),
          (t.lineWidth = 3),
          t.setLineDash([7, 5]),
          t.strokeRect(10, n + 8, 492, r - 16),
          t.setLineDash([]),
          (t.fillStyle = `#eef0f2`),
          (t.textAlign = `center`),
          (t.textBaseline = `middle`),
          i
            ? ((t.font = `900 64px ${e}`),
              t.fillText(`POLICE`, 256, n + r * 0.36),
              (t.font = `900 44px ${e}`),
              t.fillText(`警 察`, 256, n + r * 0.76))
            : ((t.font = `900 78px ${e}`),
              t.fillText(`POLICE`, 256, n + r * 0.52)));
      };
    (n(0, 128, !0),
      n(128, 128, !1),
      (t.fillStyle = `#16203a`),
      (t.textAlign = `center`),
      (t.textBaseline = `middle`),
      (t.font = `900 70px ${e}`),
      t.fillText(`警 察`, 128, 302),
      (t.font = `800 34px ${e}`),
      t.fillText(`P O L I C E`, 128, 357),
      (t.fillStyle = `#1f2d4f`),
      (t.font = `900 84px ${e}`),
      t.fillText(`警察`, 384, 318),
      t.fillRect(292, 364, 184, 7),
      t.save(),
      t.beginPath(),
      t.moveTo(14, 392),
      t.lineTo(114, 392),
      t.lineTo(114, 462),
      t.quadraticCurveTo(112, 492, 64, 508),
      t.quadraticCurveTo(16, 492, 14, 462),
      t.closePath(),
      (t.fillStyle = `#1b2a4c`),
      t.fill(),
      (t.lineWidth = 7),
      (t.strokeStyle = `#d7b24a`),
      t.stroke(),
      (t.fillStyle = `#d7b24a`),
      (t.textAlign = `center`),
      (t.textBaseline = `middle`),
      (t.font = `900 21px ${e}`),
      t.fillText(`臺北市`, 64, 410),
      (t.font = `900 17px ${e}`),
      t.fillText(`警察局`, 64, 480));
    for (let e = 0; e < 5; e++) {
      let n = (e / 5) * Math.PI * 2 - Math.PI / 2;
      (t.beginPath(),
        t.arc(64 + Math.cos(n) * 11, 444 + Math.sin(n) * 11, 9, 0, Math.PI * 2),
        t.fill());
    }
    ((t.fillStyle = `#f4f1e6`), t.beginPath());
    for (let e = 0; e < 10; e++) {
      let n = (e / 10) * Math.PI * 2 - Math.PI / 2,
        r = e % 2 ? 4 : 9;
      t.lineTo(64 + Math.cos(n) * r, 444 + Math.sin(n) * r);
    }
    (t.closePath(), t.fill(), t.restore());
  }
  return (
    (nC = new Oe(e)),
    (nC.colorSpace = j),
    (nC.anisotropy = 4),
    (nC.name = `police-gear-decals`),
    et(nC),
    nC
  );
}
