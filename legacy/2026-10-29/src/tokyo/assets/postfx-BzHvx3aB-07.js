// tokyo/assets/postfx-BzHvx3aB 07 — math
// Lines 3334-3359 of readable/tokyo/assets/postfx-BzHvx3aB.pretty.js (statement-aligned).
function Pt(e, t, n) {
  let r = new Map([
      [oe, 1],
      [w, 2],
      [S, 4],
    ]),
    i;
  if ((r.has(t) || console.error(`Invalid noise texture format`), n === 1009)) {
    i = new Uint8Array(e * r.get(t));
    for (let e = 0, t = i.length; e < t; ++e) i[e] = Math.random() * 255 + 0.5;
  } else {
    i = new Float32Array(e * r.get(t));
    for (let e = 0, t = i.length; e < t; ++e) i[e] = Math.random();
  }
  return i;
}
var Ft = class extends ne {
    constructor(e, t, n = oe, r = s) {
      (super(Pt(e * t, n, r), e, t, n, r), (this.needsUpdate = !0));
    }
  },
  It = `uniform lowp sampler2D perturbationMap;uniform bool active;uniform float columns;uniform float random;uniform vec2 seeds;uniform vec2 distortion;void mainUv(inout vec2 uv){if(active){if(uv.y<distortion.x+columns&&uv.y>distortion.x-columns*random){float sx=clamp(ceil(seeds.x),0.0,1.0);uv.y=sx*(1.0-(uv.y+distortion.y))+(1.0-sx)*distortion.y;}if(uv.x<distortion.y+columns&&uv.x>distortion.y-columns*random){float sy=clamp(ceil(seeds.y),0.0,1.0);uv.x=sy*distortion.x+(1.0-sy)*(1.0-(uv.x+distortion.x));}vec2 normal=texture2D(perturbationMap,uv*random*random).rg;uv+=normal*seeds*(random*0.2);}}`,
  Lt = `Glitch.Generated`;
function G(e, t) {
  return e + Math.random() * (t - e);
}
