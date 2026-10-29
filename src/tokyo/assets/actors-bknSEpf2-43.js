// tokyo/assets/actors-bknSEpf2 43 — addcolorstop
// Lines 14828-14936 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function hf(e, t, n = !1) {
  let r = new E({ depthPacking: R });
  return (
    (r.onBeforeCompile = (t) => {
      (Object.assign(t.uniforms, e),
        (t.uniforms.uNight = Gt.uNight),
        (t.uniforms.uTime = Gt.uTime),
        (t.uniforms.uWet = Gt.uWet),
        (t.vertexShader = t.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
` + lf,
          )
          .replace(
            `#include <begin_vertex>`,
            uf +
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
function gf(e, t, n) {
  let r = Math.sin(e * t + n) * 43758.5453123;
  return r - Math.floor(r);
}
var _f = null;
function vf(e) {
  if (_f) return _f;
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
    let l = new ke(t);
    ((l.mapping = 303), (l.colorSpace = T));
    let u = new Te(e);
    ((_f = u.fromEquirectangular(l).texture), u.dispose(), l.dispose());
  } catch {
    _f = null;
  }
  return _f;
}
var yf = [16 / 1024, 1 - 16 / 1024],
  bf = new j(),
  xf = 2048,
  Sf = 2,
  Cf = [],
  wf = !0,
  Tf = new Float32Array();
function Ef(e) {
  return {
    P: new Float32Array(e * 3),
    N: new Float32Array(e * 3),
    C: new Float32Array(e * 3),
    UV: new Float32Array(e * 2),
    D: new Float32Array(e * 4),
    VV: new Float32Array(e),
    cap: e,
  };
}
function Df() {
  ((wf = !1), (Cf.length = 0));
}
