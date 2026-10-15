// tokyo/assets/actors-qKVitB-C 36 — math
// Lines 16218-16447 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function yd(e, t, n = !1) {
  let r = new u({ depthPacking: o });
  return (
    (r.onBeforeCompile = (t) => {
      (Object.assign(t.uniforms, e),
        (t.uniforms.uNight = bt.uNight),
        (t.uniforms.uTime = bt.uTime),
        (t.uniforms.uWet = bt.uWet),
        (t.vertexShader = t.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
` + pd,
          )
          .replace(
            `#include <begin_vertex>`,
            md +
              `
#include <begin_vertex>
  if (visible < 0.5) transformed = vec3(0.0);`,
          )),
        (t.fragmentShader = t.fragmentShader.replace(
          `#include <common>`,
          `#include <common>
varying float vEmK;
varying vec2 vRM;
varying float vBurnt;
varying float vPaintK;`,
        )));
    }),
    (r.customProgramCacheKey = () =>
      n ? `veh-depth-batch-v2` : t ? `veh-depth-inst-v1` : `veh-depth-v1`),
    (r.name = n
      ? `vehicle-depth-batch`
      : t
        ? `vehicle-depth-instanced`
        : `vehicle-depth`),
    r
  );
}
function bd(e, t, n) {
  let r = Math.sin(e * t + n) * 43758.5453123;
  return r - Math.floor(r);
}
var xd = null;
function Sd(e) {
  if (xd) return xd;
  try {
    let t = document.createElement(`canvas`);
    ((t.width = 512), (t.height = 256));
    let n = t.getContext(`2d`),
      r = n.createLinearGradient(0, 0, 0, 128);
    (r.addColorStop(0, `#7fa2c8`),
      r.addColorStop(0.7, `#c9d6e2`),
      r.addColorStop(1, `#e9ecec`),
      (n.fillStyle = r),
      n.fillRect(0, 0, 512, 128));
    let i = n.createRadialGradient(153.6, 46.08, 2, 153.6, 46.08, 60);
    (i.addColorStop(0, `rgba(255,250,235,1)`),
      i.addColorStop(1, `rgba(255,250,235,0)`),
      (n.fillStyle = i),
      n.fillRect(0, 0, 512, 128));
    let a = 0,
      o = 7,
      s = () => (o = (o * 16807) % 2147483647) / 2147483647;
    for (; a < 512;) {
      let e = 6 + s() * 22,
        t = 8 + s() * s() * 70,
        r = 70 + s() * 60;
      ((n.fillStyle = `rgb(${r},${r + 4},${r + 10})`),
        n.fillRect(a, 128 - t, e, t),
        (a += e + s() * 3));
    }
    let c = n.createLinearGradient(0, 128, 0, 256);
    (c.addColorStop(0, `#6a6c6e`),
      c.addColorStop(0.15, `#3c3d3f`),
      c.addColorStop(1, `#1d1e20`),
      (n.fillStyle = c),
      n.fillRect(0, 128, 512, 128));
    let l = new je(t);
    ((l.mapping = 303), (l.colorSpace = f));
    let u = new ke(e);
    ((xd = u.fromEquirectangular(l).texture), u.dispose(), l.dispose());
  } catch {
    xd = null;
  }
  return xd;
}
var Cd = 0.095,
  wd = 0.92,
  Td = 0.5,
  Ed = 0.205,
  Dd = 1.4,
  Od = 0.215,
  kd = 1.115,
  Ad = 0.865,
  jd = 1.5,
  Md = 0.98,
  Nd = 0.085,
  Pd = 0,
  Fd = 1,
  Id = 2,
  Ld = 3,
  Rd = 4,
  zd = 5,
  Bd = 6,
  Vd = 7,
  Hd = 8,
  Ud = 9,
  Wd = 10,
  Gd = 16711935,
  Kd = 16776960,
  qd = 255;
function Jd(e, t) {
  let n = !!e.passenger,
    r = en({ jaw: n ? 0.35 : 0.55, eyeSize: 0.97, lid: 0.4, smile: 0 }),
    i = e.fullFace ? [] : [{ kind: `mask`, color: Kd }];
  return n
    ? {
        id: `veh-pillion-${+!!t}`,
        sex: `f`,
        age: `adult`,
        build: `slim`,
        height: 1.62,
        skin: 14990748,
        face: r,
        hair: { style: `long`, color: 1906194 },
        top: {
          style: t ? `hoodie` : `tee`,
          color: qd,
          color2: qd,
          sleeve: `long`,
        },
        bottom: {
          style: t ? `wide` : `jeans`,
          color: t ? 2763827 : 4016742,
          pattern: t ? `solid` : `denim`,
        },
        shoes: {
          style: `sneaker`,
          color: 15658730,
          color2: 13684940,
          sole: 15921902,
        },
        acc: i,
        seed: t ? 77 : 41,
      }
    : {
        id: `veh-rider-${e.fullFace ? `ff` : `sc`}`,
        sex: `m`,
        age: `adult`,
        build: `avg`,
        height: 1.72,
        skin: 14199428,
        face: r,
        hair: { style: `buzz`, color: 1117708 },
        top: { style: `tee`, color: 2763310 },
        outer: {
          style: e.fullFace ? `bomber` : `windbreaker`,
          color: Gd,
          color2: 2500395,
          closed: !0,
        },
        bottom: { style: `jeans`, color: 2832981, pattern: `denim` },
        shoes: {
          style: e.fullFace ? `boot` : `sneaker`,
          color: 1842207,
          color2: 3815998,
          sole: 15263972,
        },
        acc: i,
        seed: 19,
      };
}
var Yd = new Map(),
  Xd = new Map(),
  Zd = !0,
  Qd = (e) => !!e.passenger && e.hipZ > 0.6,
  $d = (e) => `${e.passenger ? `p` : `d`}${+!!Qd(e)}${+!!e.fullFace}`;
async function ef(e) {
  let t = [],
    n = new Set();
  for (let r of e) {
    if (Yd.has(r)) continue;
    let e = $d(r);
    Xd.has(e) ||
      n.has(e) ||
      (n.add(e),
      t.push(
        fn(Jd(r, Qd(r))).then(
          (t) => void (Zd && !Xd.has(e) && Xd.set(e, t)),
          () => void 0,
        ),
      ));
  }
  await Promise.all(t);
}
function tf() {
  ((Zd = !1), Xd.clear());
}
function nf(e, t, n) {
  let r = Math.max(e, t, n);
  return r < 0.03 || Math.min(e, t, n) > r * 0.12
    ? 0
    : t < r * 0.12 && Math.abs(e - n) < r * 0.2
      ? 2
      : e < r * 0.12 && Math.abs(t - n) < r * 0.2
        ? 3
        : n < r * 0.12 && Math.abs(e - t) < r * 0.2
          ? 6
          : e < r * 0.12 && t < r * 0.12
            ? 5
            : 0;
}
new I();
var rf = new L(),
  af = new L();
function of(e, t, n, r, i, a, o) {
  af.subVectors(t, e);
  let s = af.length(),
    c = (n + r) * 0.995;
  (s > c && (s = c),
    s < Math.abs(n - r) + 0.01 && (s = Math.abs(n - r) + 0.01),
    af.normalize(),
    o.copy(e).addScaledVector(af, s));
  let l = (n * n - r * r + s * s) / (2 * s),
    u = Math.sqrt(Math.max(0, n * n - l * l));
  (rf.copy(i).addScaledVector(af, -i.dot(af)).normalize(),
    a.copy(e).addScaledVector(af, l).addScaledVector(rf, u));
}
