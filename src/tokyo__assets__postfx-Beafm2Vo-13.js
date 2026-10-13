// tokyo__assets__postfx-Beafm2Vo 13 — add
// Lines 8456-8620 of readable/tokyo__assets__postfx-Beafm2Vo.pretty.js (statement-aligned).
function Xr(e) {
  let t = qr >= 167 ? Yr : Jr;
  return (e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3]) / 255;
}
var Zr = class extends Kr {
  constructor({ depthPacking: e = u, mode: t = W.SINGLE } = {}) {
    if (e !== 3201 && e !== 3200)
      throw Error(`Unsupported depth packing: ${e}`);
    (super({ depthPacking: e }),
      (this.name = `DepthPickingPass`),
      (this.fullscreenMaterial.mode = t),
      (this.pixelBuffer = e === 3201 ? new Uint8Array(4) : new Float32Array(4)),
      (this.callback = null));
  }
  readDepth(e) {
    return (
      this.fullscreenMaterial.texelPosition.set(
        e.x * 0.5 + 0.5,
        e.y * 0.5 + 0.5,
      ),
      new Promise((e) => {
        this.callback = e;
      })
    );
  }
  render(e, t, n, r, i) {
    let a = this.fullscreenMaterial,
      o = a.mode;
    if ((o === W.FULL && super.render(e), this.callback !== null)) {
      let t = this.renderTarget,
        n = this.pixelBuffer,
        r = t.texture.type !== h,
        i = 0,
        s = 0;
      if (o === W.SINGLE) super.render(e);
      else {
        let e = a.texelPosition;
        ((i = Math.round(e.x * t.width)), (s = Math.round(e.y * t.height)));
      }
      (e.readRenderTargetPixels(t, i, s, 1, 1, n),
        this.callback(r ? Xr(n) : n[0]),
        (this.callback = null));
    }
  }
  setSize(e, t) {
    this.fullscreenMaterial.mode === W.FULL && super.setSize(e, t);
  }
};
function Qr(e, t, n) {
  for (let r of t) {
    let t = `$1` + e + r.charAt(0).toUpperCase() + r.slice(1),
      i = RegExp(`([^\\.])(\\b` + r + `\\b)`, `g`);
    for (let e of n.entries()) e[1] !== null && n.set(e[0], e[1].replace(i, t));
  }
}
function $r(e, t, n) {
  let r = t.getFragmentShader(),
    i = t.getVertexShader(),
    a = r !== void 0 && /mainImage/.test(r),
    o = r !== void 0 && /mainUv/.test(r);
  if (((n.attributes |= t.getAttributes()), r === void 0))
    throw Error(`Missing fragment shader (${t.name})`);
  if (o && (n.attributes & j.CONVOLUTION) !== 0)
    throw Error(
      `Effects that transform UVs are incompatible with convolution effects (${t.name})`,
    );
  if (!a && !o)
    throw Error(`Could not find mainImage or mainUv function (${t.name})`);
  {
    let s = /\w+\s+(\w+)\([\w\s,]*\)\s*{/g,
      c = n.shaderParts,
      l = c.get(M.FRAGMENT_HEAD) || ``,
      u = c.get(M.FRAGMENT_MAIN_UV) || ``,
      d = c.get(M.FRAGMENT_MAIN_IMAGE) || ``,
      f = c.get(M.VERTEX_HEAD) || ``,
      p = c.get(M.VERTEX_MAIN_SUPPORT) || ``,
      m = new Set(),
      h = new Set();
    if (
      (o &&
        ((u += `	${e}MainUv(UV);
`),
        (n.uvTransformation = !0)),
      i !== null && /mainSupport/.test(i))
    ) {
      let t = /mainSupport *\([\w\s]*?uv\s*?\)/.test(i);
      ((p += `	${e}MainSupport(`),
        (p += t
          ? `vUv);
`
          : `);
`));
      for (let e of i.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))
        for (let t of e[1].split(/\s*,\s*/))
          (n.varyings.add(t), m.add(t), h.add(t));
      for (let e of i.matchAll(s)) h.add(e[1]);
    }
    for (let e of r.matchAll(s)) h.add(e[1]);
    for (let e of t.defines.keys()) h.add(e.replace(/\([\w\s,]*\)/g, ``));
    for (let e of t.uniforms.keys()) h.add(e);
    (h.delete(`while`),
      h.delete(`for`),
      h.delete(`if`),
      t.uniforms.forEach((t, r) =>
        n.uniforms.set(e + r.charAt(0).toUpperCase() + r.slice(1), t),
      ),
      t.defines.forEach((t, r) =>
        n.defines.set(e + r.charAt(0).toUpperCase() + r.slice(1), t),
      ));
    let g = new Map([
      [`fragment`, r],
      [`vertex`, i],
    ]);
    (Qr(e, h, n.defines),
      Qr(e, h, g),
      (r = g.get(`fragment`)),
      (i = g.get(`vertex`)));
    let _ = t.blendMode;
    if ((n.blendModes.set(_.blendFunction, _), a)) {
      (t.inputColorSpace !== null &&
        t.inputColorSpace !== n.colorSpace &&
        (d +=
          t.inputColorSpace === `srgb`
            ? `color0 = sRGBTransferOETF(color0);
	`
            : `color0 = sRGBToLinear(color0);
	`),
        t.outputColorSpace === ``
          ? t.inputColorSpace !== null && (n.colorSpace = t.inputColorSpace)
          : (n.colorSpace = t.outputColorSpace),
        (d += `${e}MainImage(color0, UV, `),
        (n.attributes & j.DEPTH) !== 0 &&
          /MainImage *\([\w\s,]*?depth[\w\s,]*?\)/.test(r) &&
          ((d += `depth, `), (n.readDepth = !0)),
        (d += `color1);
	`));
      let i = e + `BlendOpacity`;
      (n.uniforms.set(i, _.opacity),
        (d += `color0 = blend${_.blendFunction}(color0, color1, ${i});

	`),
        (l += `uniform float ${i};

`));
    }
    if (
      ((l +=
        r +
        `
`),
      i !== null &&
        (f +=
          i +
          `
`),
      c.set(M.FRAGMENT_HEAD, l),
      c.set(M.FRAGMENT_MAIN_UV, u),
      c.set(M.FRAGMENT_MAIN_IMAGE, d),
      c.set(M.VERTEX_HEAD, f),
      c.set(M.VERTEX_MAIN_SUPPORT, p),
      t.extensions !== null)
    )
      for (let e of t.extensions) n.extensions.add(e);
  }
}
