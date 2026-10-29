// tokyo/assets/actors-bknSEpf2 87 — abandoned
// Lines 37696-37778 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function RS() {
  let e = new he({ vertexColors: !0 });
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
var zS = new j(),
  BS = [
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
  VS = 1,
  HS = 2,
  US = 4,
  WS = 8,
  GS = 16,
  KS = 32,
  qS = 64,
  JS = 128,
  YS = 256;
function XS(e) {
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
var ZS = { occupied: null };
function QS(e, t, n) {
  if (e.burnt) return JS;
  let r = 0;
  return (
    e.braking && !e.abandoned && !(e.wrecked && e.v < 0.2) && (r |= VS),
    e.hazard
      ? (r |= WS)
      : e.blinker < 0
        ? (r |= HS)
        : e.blinker > 0 && (r |= US),
    !e.abandoned && (t || e.two) && (r |= KS),
    e.back > 0 && (r |= qS),
    (e.kind === 1 || e.kind === ax) &&
      (ZS.occupied ? ZS.occupied(e) : e.seed > 0.45) &&
      (r |= YS),
    e.kind === 7 &&
      !e.abandoned &&
      !e.wrecked &&
      (e.alert > 0 || (n && e.seed < 0.65)) &&
      (r |= GS),
    r
  );
}
