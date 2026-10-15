// tokyo/assets/actors-qKVitB-C 111 — math
// Lines 52120-52468 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function qE() {
  return (
    KE ||
      ((KE = new _e(new Uint8Array([255, 255, 255, 255]), 1, 1)),
      (KE.name = `police-lit-white`),
      (KE.needsUpdate = !0)),
    KE
  );
}
var JE = `
attribute float aSpin;
uniform float uRotor;
uniform vec3 uRotorP;
uniform vec3 uTailP;
varying vec2 vPlUv;
vec3 plSpin(vec3 p, bool normal) {
  if (aSpin > 1.5) {
    float a = uRotor * 4.3, c = cos(a), s = sin(a);
    vec3 q = normal ? p : p - uTailP;
    q = vec3(q.x, c * q.y - s * q.z, s * q.y + c * q.z);
    return normal ? q : q + uTailP;
  } else if (aSpin > 0.5) {
    float c = cos(uRotor), s = sin(uRotor);
    vec3 q = normal ? p : p - uRotorP;
    q = vec3(c * q.x + s * q.z, q.y, -s * q.x + c * q.z);
    return normal ? q : q + uRotorP;
  }
  return p;
}`,
  YE = `
uniform float uNight;
uniform sampler2D uTex;
uniform float uRefl;
uniform float uGlow;
varying vec2 vPlUv;`;
function XE(e, t) {
  let n = new E({ vertexColors: !0 });
  n.name = e;
  let r = {
    uTex: { value: t.tex ?? qE() },
    uRotor: t.rotor ?? { value: 0 },
    uRotorP: { value: (t.rotorP ?? new L()).clone() },
    uTailP: { value: (t.tailP ?? new L()).clone() },
    uRefl: { value: +!!t.reflective },
    uGlow: { value: +!!t.ledBoard },
  };
  return (
    (n.onBeforeCompile = (e) => {
      (Object.assign(e.uniforms, r),
        (e.uniforms.uNight = bt.uNight),
        (e.vertexShader = e.vertexShader
          .replace(`#include <common>`, `#include <common>\n${JE}`)
          .replace(
            `#include <uv_vertex>`,
            `#include <uv_vertex>
  vPlUv = uv;`,
          )
          .replace(
            `#include <beginnormal_vertex>`,
            `#include <beginnormal_vertex>
  objectNormal = plSpin(objectNormal, true);`,
          )
          .replace(
            `#include <begin_vertex>`,
            `#include <begin_vertex>
  transformed = plSpin(transformed, false);`,
          )),
        (e.fragmentShader = e.fragmentShader
          .replace(`#include <common>`, `#include <common>\n${YE}`)
          .replace(
            `#include <map_fragment>`,
            `#include <map_fragment>
        float plOn = step(-0.5, vPlUv.x);
        vec4 plTexel = mix(vec4(1.0), texture2D(uTex, vPlUv), plOn);
        diffuseColor *= plTexel;`,
          )
          .replace(
            `#include <emissivemap_fragment>`,
            `#include <emissivemap_fragment>
        {
          float refl = step(0.8, min(vColor.r, min(vColor.g, vColor.b)));
          float orange = step(0.5, vColor.r) * step(vColor.b, 0.1);
          totalEmissiveRadiance += uRefl * (1.0 - plOn) * vColor.rgb * uNight * (refl * 0.55 + orange * 0.12);
          totalEmissiveRadiance += uGlow * plOn * plTexel.rgb * mix(0.25, 1.0, uNight);
        }`,
          )));
    }),
    (n.customProgramCacheKey = () => `police-lit-v1`),
    t.tex && (n.userData.policeTex = t.tex),
    n
  );
}
function ZE(e) {
  return Array.isArray(e) ? null : (e.userData.policeTex ?? null);
}
var QE = {
    freeze: [
      { zh: `不要動！警察！`, en: `Freeze! Police!` },
      { zh: `站住！`, en: `Stop right there!` },
      { zh: `雙手舉起來！`, en: `Hands where I can see them!` },
      { zh: `趴下！趴下！`, en: `Get down! Down!` },
    ],
    dontRun: [
      { zh: `毋通走！（別跑！）`, en: `Don't you run!` },
      { zh: `別跑！`, en: `Don't run!` },
      { zh: `站住！再跑就開槍了！`, en: `Stop or I shoot!` },
    ],
    getOut: [
      { zh: `下車！手放在頭上！`, en: `Out of the car! Hands on your head!` },
      { zh: `引擎熄火，立刻下車！`, en: `Kill the engine and step out!` },
    ],
    dropWeapon: [
      { zh: `放下武器！`, en: `Drop the weapon!` },
      { zh: `把槍丟掉！`, en: `Drop the gun!` },
    ],
    shotsFired: [
      { zh: `開槍了！找掩護！`, en: `Shots fired! Take cover!` },
      { zh: `嫌犯持槍！注意安全！`, en: `Suspect is armed! Watch yourselves!` },
    ],
    spotted: [
      { zh: `看到嫌犯了！`, en: `Suspect spotted!` },
      { zh: `在那裡！追！`, en: `There! Go, go!` },
    ],
    officerDown: [
      {
        zh: `有員警倒下！請求救護！`,
        en: `Officer down! We need an ambulance!`,
      },
    ],
    arrest: [
      { zh: `你被逮捕了！`, en: `You're under arrest!` },
      { zh: `銬起來！`, en: `Cuff him!` },
    ],
    ticket: [
      { zh: `駕照、行照拿出來。`, en: `License and registration, please.` },
      { zh: `你剛剛闖紅燈，開單。`, en: `You ran a red light. Ticket.` },
    ],
    pullOverScooter: [
      { zh: `前面的機車靠邊停！`, en: `Scooter up front, pull over!` },
      {
        zh: `機車騎士，靠右停車！`,
        en: `Scooter rider, pull over to the right!`,
      },
    ],
    backup: [
      { zh: `請求支援！`, en: `Requesting backup!` },
      { zh: `各單位支援！`, en: `All units, assist!` },
    ],
    onFootChase: [
      { zh: `嫌犯徒步逃逸，追上去！`, en: `Suspect on foot, after him!` },
    ],
  },
  $E = {
    assault: { zh: `暴力傷害案`, en: `an assault` },
    assault_police: { zh: `襲警案`, en: `an assault on an officer` },
    carjack: { zh: `強盜搶車案`, en: `a carjacking` },
    hit_ped: { zh: `肇事逃逸`, en: `a hit-and-run` },
    kill: { zh: `殺人案`, en: `a homicide` },
    kill_police: { zh: `員警遭殺害`, en: `an officer killed` },
    shooting: { zh: `開槍事件`, en: `shots fired` },
    vehicle_damage: { zh: `交通事故`, en: `a traffic collision` },
    red_light: { zh: `闖紅燈`, en: `a red-light violation` },
    reckless: { zh: `危險駕駛`, en: `reckless driving` },
  },
  eD = [
    { zh: `往北`, en: `northbound` },
    { zh: `往東`, en: `eastbound` },
    { zh: `往南`, en: `southbound` },
    { zh: `往西`, en: `westbound` },
  ],
  tD = [
    [16777215, { zh: `白色`, en: `white` }],
    [2236962, { zh: `黑色`, en: `black` }],
    [11580602, { zh: `銀色`, en: `silver` }],
    [9051164, { zh: `紅色`, en: `red` }],
    [14042429, { zh: `紅色`, en: `red` }],
    [1916794, { zh: `藍色`, en: `blue` }],
    [2775992, { zh: `藍色`, en: `blue` }],
    [9421268, { zh: `淺藍色`, en: `light blue` }],
    [16106776, { zh: `黃色`, en: `yellow` }],
    [15913547, { zh: `黃色`, en: `yellow` }],
    [3840597, { zh: `綠色`, en: `green` }],
    [16109568, { zh: `黃色`, en: `yellow` }],
  ];
function nD(e) {
  let t = (e >> 16) & 255,
    n = (e >> 8) & 255,
    r = e & 255,
    i = tD[0][1],
    a = 1 / 0;
  for (let [e, o] of tD) {
    let s =
      (((e >> 16) & 255) - t) ** 2 +
      (((e >> 8) & 255) - n) ** 2 +
      ((e & 255) - r) ** 2;
    s < a && ((a = s), (i = o));
  }
  return i;
}
var rD = (e) => $E[e];
function iD(e, t) {
  let n = Math.atan2(e, -t);
  return eD[((Math.round(n / (Math.PI / 2)) % 4) + 4) % 4];
}
function aD(e, t, n) {
  let r = null,
    i = 1 / 0;
  for (let a = 0; a <= 2 && !r; a++)
    for (let o = -a; o <= a; o++)
      for (let s = -a; s <= a; s++)
        if (Math.max(Math.abs(s), Math.abs(o)) === a)
          for (let a of e.roadsNear(t + s * 16, n + o * 16)) {
            let e = a.axis === `x` ? t : n;
            if (e < a.from - 10 || e > a.to + 10) continue;
            let o =
              Math.abs((a.axis === `x` ? n : t) - a.at) - (a.major ? 6 : 0);
            o < i && ((i = o), (r = a));
          }
  return r;
}
function oD(e, t, n) {
  let r = e.roadAt(t, n) ?? aD(e, t, n);
  return r ? e.streetLabel(r, t, n).full : null;
}
function sD(e, t, n) {
  let r = e.districtAt(t, n).name,
    a = e.locationLabel(t, n),
    o = a.zh === r.zh ? oD(e, t, n) : a;
  return o
    ? {
        zh: i.on
          ? i.t(`${r.zh}${o.zh}附近`, `${i.jz(r.zh)}${i.jz(o.zh)}付近`)
          : `${r.zh}${o.zh}附近`,
        en: `${o.en}, ${r.en}`,
      }
    : { zh: r.zh, en: r.en };
}
function cD(e, t, n, r) {
  let a = e.roadAt(n, r),
    o = e.districtAt(n, r).name,
    s = a && !a.pedestrian ? e.address(a, n, r) : null,
    c = s
      ? {
          zh: i.on
            ? i.t(`${o.zh}${s.zh}附近`, `${i.jz(o.zh)}${i.jz(s.zh)}付近`)
            : `${o.zh}${s.zh}附近`,
          en: `${s.en}, ${o.en}`,
        }
      : sD(e, n, r),
    l = rD(t);
  return {
    zh: i.on
      ? i.t(
          `勤務中心呼叫線上警網：${c.zh}發生${l.zh}，請就近前往處理。`,
          `本部から各移動：${i.jz(c.zh)}で${i.jz(l.zh)}発生、最寄りの移動は現場へ急行せよ。`,
        )
      : `勤務中心呼叫線上警網：${c.zh}發生${l.zh}，請就近前往處理。`,
    en: `Dispatch to all units: ${l.en} reported near ${c.en}. Respond.`,
  };
}
function lD(e, t, n, r, a, o) {
  let s = iD(r, a),
    c = oD(e, t, n) ?? e.districtAt(t, n).name;
  return o
    ? {
        zh: i.on
          ? i.t(
              `嫌犯駕駛${o.zh}沿${c.zh}${s.zh}逃逸！`,
              `被疑者は${i.jz(o.zh)}で${i.jz(c.zh)}を${i.jz(s.zh)}逃走中！`,
            )
          : `嫌犯駕駛${o.zh}沿${c.zh}${s.zh}逃逸！`,
        en: `Suspect in a ${o.en} fleeing ${s.en} on ${c.en}!`,
      }
    : {
        zh: i.on
          ? i.t(
              `嫌犯徒步沿${c.zh}${s.zh}逃逸！`,
              `被疑者は徒歩で${i.jz(c.zh)}を${i.jz(s.zh)}逃走中！`,
            )
          : `嫌犯徒步沿${c.zh}${s.zh}逃逸！`,
        en: `Suspect on foot, heading ${s.en} on ${c.en}!`,
      };
}
function uD(e, t, n) {
  let r = sD(e, t, n);
  return {
    zh: i.on
      ? i.t(
          `各單位注意，嫌犯脫離視線，最後出現在${r.zh}。`,
          `各移動へ、被疑者を見失った。最終目撃地点は${i.jz(r.zh)}。`,
        )
      : `各單位注意，嫌犯脫離視線，最後出現在${r.zh}。`,
    en: `All units: lost visual. Last seen near ${r.en}.`,
  };
}
var dD = {
  lost: {
    zh: `嫌犯已失去蹤影，各單位解除追緝。`,
    en: `Suspect lost. All units, stand down.`,
  },
  heli: {
    zh: `空勤總隊直升機抵達現場，空中支援！`,
    en: `NASC helicopter on scene — air support!`,
  },
  swat: { zh: `霹靂小組出動！`, en: `Thunder Squad (SWAT) deployed!` },
  reported: { zh: `有民眾撥打 110 報案！`, en: `A witness called 110!` },
  reacquired: {
    zh: `重新發現嫌犯！全力追緝！`,
    en: `Suspect reacquired! Pursue!`,
  },
};
function fD(e, t, n, r) {
  if (!t)
    return { zh: `前方路口已設置攔檢點！`, en: `Checkpoint set up ahead!` };
  let a = e.streetLabel(t, n, r).full;
  return {
    zh: i.on
      ? i.t(`已在${a.zh}設置攔檢點！`, `${i.jz(a.zh)}に検問を設置した！`)
      : `已在${a.zh}設置攔檢點！`,
    en: `Checkpoint set up on ${a.en}!`,
  };
}
var pD = {
    police: { zh: `警察`, en: `Police` },
    dispatch: { zh: `勤務中心`, en: `Dispatch` },
    megaphone: { zh: `警察（擴音器）`, en: `Police (megaphone)` },
  },
  mD = (e) => ({
    zh: i.on
      ? i.t(`收到紅單！罰鍰 ${pt(e, Et)}`, `違反切符！反則金 ${pt(e, Et)}`)
      : `收到紅單！罰鍰 ${pt(e, Et)}`,
    en: `Traffic ticket! Fine: ${pt(e, Et)}`,
  }),
  hD = 0.97;
function gD(e, t) {
  let n = e.attributes.position,
    r = new Float32Array(n.count * 3),
    i = new Me();
  for (let e = 0; e < n.count; e++)
    (i.setHex(t(n.getX(e), n.getY(e), n.getZ(e))),
      (r[e * 3] = i.r),
      (r[e * 3 + 1] = i.g),
      (r[e * 3 + 2] = i.b));
  return (e.setAttribute(`color`, new P(r, 3)), e);
}
function _D(e) {
  let t = e.attributes.position.count;
  return (e.setAttribute(`uv`, new P(new Float32Array(t * 2).fill(hD), 2)), e);
}
