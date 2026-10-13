// tokyo__assets__postfx-Beafm2Vo 07 — math
// Lines 3334-3359 of readable/tokyo__assets__postfx-Beafm2Vo.pretty.js (statement-aligned).
function Lt(e, n, r) {
  let i = new Map([
      [_, 1],
      [ae, 2],
      [t, 4],
    ]),
    a;
  if ((i.has(n) || console.error(`Invalid noise texture format`), r === 1009)) {
    a = new Uint8Array(e * i.get(n));
    for (let e = 0, t = a.length; e < t; ++e) a[e] = Math.random() * 255 + 0.5;
  } else {
    a = new Float32Array(e * i.get(n));
    for (let e = 0, t = a.length; e < t; ++e) a[e] = Math.random();
  }
  return a;
}
var Rt = class extends ne {
    constructor(e, t, n = _, r = s) {
      (super(Lt(e * t, n, r), e, t, n, r), (this.needsUpdate = !0));
    }
  },
  zt = `uniform lowp sampler2D perturbationMap;uniform bool active;uniform float columns;uniform float random;uniform vec2 seeds;uniform vec2 distortion;void mainUv(inout vec2 uv){if(active){if(uv.y<distortion.x+columns&&uv.y>distortion.x-columns*random){float sx=clamp(ceil(seeds.x),0.0,1.0);uv.y=sx*(1.0-(uv.y+distortion.y))+(1.0-sx)*distortion.y;}if(uv.x<distortion.y+columns&&uv.x>distortion.y-columns*random){float sy=clamp(ceil(seeds.y),0.0,1.0);uv.x=sy*distortion.x+(1.0-sy)*(1.0-(uv.x+distortion.x));}vec2 normal=texture2D(perturbationMap,uv*random*random).rg;uv+=normal*seeds*(random*0.2);}}`,
  Bt = `Glitch.Generated`;
function H(e, t) {
  return e + Math.random() * (t - e);
}
