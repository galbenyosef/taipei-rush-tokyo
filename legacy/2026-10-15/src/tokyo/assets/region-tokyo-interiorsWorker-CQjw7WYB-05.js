// tokyo/assets/region-tokyo-interiorsWorker-CQjw7WYB 05 — math
// Lines 1770-1986 of readable/tokyo/assets/region-tokyo-interiorsWorker-CQjw7WYB.pretty.js (statement-aligned).
var xe = class r extends O {
  constructor(
    e = r.DEFAULT_IMAGE,
    n = r.DEFAULT_MAPPING,
    o = t,
    c = t,
    l = i,
    u = a,
    d = s,
    f = 1009,
    p = r.DEFAULT_ANISOTROPY,
    m = ``,
  ) {
    (super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: ye++ }),
      (this.uuid = A()),
      (this.name = ``),
      (this.source = new _e(e)),
      (this.mipmaps = []),
      (this.mapping = n),
      (this.channel = 0),
      (this.wrapS = o),
      (this.wrapT = c),
      (this.magFilter = l),
      (this.minFilter = u),
      (this.anisotropy = p),
      (this.format = d),
      (this.internalFormat = null),
      (this.type = f),
      (this.offset = new M(0, 0)),
      (this.repeat = new M(1, 1)),
      (this.center = new M(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new P()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.colorSpace = m),
      (this.userData = {}),
      (this.updateRanges = []),
      (this.version = 0),
      (this.onUpdate = null),
      (this.renderTarget = null),
      (this.isRenderTargetTexture = !1),
      (this.isArrayTexture = !!(e && e.depth && e.depth > 1)),
      (this.pmremVersion = 0),
      (this.normalized = !1));
  }
  get width() {
    return this.source.getSize(be).x;
  }
  get height() {
    return this.source.getSize(be).y;
  }
  get depth() {
    return this.source.getSize(be).z;
  }
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y,
    );
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      (this.normalized = e.normalized),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.colorSpace = e.colorSpace),
      (this.renderTarget = e.renderTarget),
      (this.isRenderTargetTexture = e.isRenderTargetTexture),
      (this.isArrayTexture = e.isArrayTexture),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  setValues(e) {
    for (let t in e) {
      let n = e[t];
      if (n === void 0) {
        T(`Texture.setValues(): parameter '${t}' has value of undefined.`);
        continue;
      }
      let r = this[t];
      if (r === void 0) {
        T(`Texture.setValues(): property '${t}' does not exist.`);
        continue;
      }
      (r && n && r.isVector2 && n.isVector2) ||
      (r && n && r.isVector3 && n.isVector3) ||
      (r && n && r.isMatrix3 && n.isMatrix3)
        ? r.copy(n)
        : (this[t] = n);
    }
  }
  toJSON(e) {
    let t = e === void 0 || typeof e == `string`;
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    let n = {
      metadata: { version: 4.7, type: `Texture`, generator: `Texture.toJSON` },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      normalized: this.normalized,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: `dispose` });
  }
  transformUv(r) {
    if (this.mapping !== 300) return r;
    if ((r.applyMatrix3(this.matrix), r.x < 0 || r.x > 1))
      switch (this.wrapS) {
        case e:
          r.x -= Math.floor(r.x);
          break;
        case t:
          r.x = r.x < 0 ? 0 : 1;
          break;
        case n:
          Math.abs(Math.floor(r.x) % 2) === 1
            ? (r.x = Math.ceil(r.x) - r.x)
            : (r.x -= Math.floor(r.x));
      }
    if (r.y < 0 || r.y > 1)
      switch (this.wrapT) {
        case e:
          r.y -= Math.floor(r.y);
          break;
        case t:
          r.y = r.y < 0 ? 0 : 1;
          break;
        case n:
          Math.abs(Math.floor(r.y) % 2) === 1
            ? (r.y = Math.ceil(r.y) - r.y)
            : (r.y -= Math.floor(r.y));
      }
    return (this.flipY && (r.y = 1 - r.y), r);
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
};
((xe.DEFAULT_IMAGE = null),
  (xe.DEFAULT_MAPPING = 300),
  (xe.DEFAULT_ANISOTROPY = 1));
