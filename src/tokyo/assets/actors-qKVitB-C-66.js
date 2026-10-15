// tokyo/assets/actors-qKVitB-C 66 — abandoned
// Lines 29998-30080 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function vv() {
  let e = new E({ vertexColors: !0 });
  return (
    (e.name = `traffic-proxy`),
    (e.onBeforeCompile = (e) => {
      e.vertexShader = e.vertexShader
        .replace(
          `#include <common>`,
          `#include <common>
attribute float paint;`,
        )
        .replace(
          `#include <color_vertex>`,
          `vColor = vec4(1.0);
#ifdef USE_COLOR
  vColor.rgb *= color.rgb;
#endif
#ifdef USE_INSTANCING_COLOR
  vColor.rgb *= mix(vec3(1.0), instanceColor.rgb, paint);
#endif`,
        );
    }),
    (e.customProgramCacheKey = () => `traffic-proxy-v1`),
    e
  );
}
var yv = new Me(),
  bv = [
    [0, 0.98, -0.86, 0, 0.78, 0.92],
    [0.62, 0.66, -2.28, 0.68, 0.86, 2.3],
    [0.62, 0.66, -2.28, 0.68, 0.86, 2.3],
    [0.64, 0.8, -2.33, 0.72, 1, 2.33],
    [0.66, 0.78, -2.43, 0.8, 0.9, 2.44],
    [0.6, 0.72, -2.2, 0.72, 0.62, 2.2],
    [0.95, 0.72, -5.6, 1.05, 0.9, 5.6],
    [0.62, 0.66, -2.28, 0.68, 0.86, 2.3],
    [0, 0.95, -0.95, 0, 0.8, 0.98],
    [0, 0.9, -1, 0, 0.82, 1.02],
  ],
  xv = 1,
  Sv = 2,
  Cv = 4,
  wv = 8,
  Tv = 16,
  Ev = 32,
  Dv = 64,
  Ov = 128,
  kv = 256;
function Av(e) {
  let t = e.userData ?? {};
  if (t.hasRider || t.rider) return !0;
  let n = e.getAttribute(`vdata`);
  if (!n) return !1;
  for (let e = 0; e < n.count; e += 3) {
    let t = n.getX(e);
    if (t > 1.5 && t < 3.5) return !0;
  }
  return !1;
}
var jv = { occupied: null };
function Mv(e, t, n) {
  if (e.burnt) return Ov;
  let r = 0;
  return (
    e.braking && !e.abandoned && !(e.wrecked && e.v < 0.2) && (r |= xv),
    e.hazard
      ? (r |= wv)
      : e.blinker < 0
        ? (r |= Sv)
        : e.blinker > 0 && (r |= Cv),
    !e.abandoned && (t || e.two) && (r |= Ev),
    e.back > 0 && (r |= Dv),
    (e.kind === 1 || e.kind === n_) &&
      (jv.occupied ? jv.occupied(e) : e.seed > 0.45) &&
      (r |= kv),
    e.kind === 7 &&
      !e.abandoned &&
      !e.wrecked &&
      (e.alert > 0 || (n && e.seed < 0.65)) &&
      (r |= Tv),
    r
  );
}
