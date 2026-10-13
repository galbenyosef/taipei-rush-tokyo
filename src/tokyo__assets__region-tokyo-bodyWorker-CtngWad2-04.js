// tokyo__assets__region-tokyo-bodyWorker-CtngWad2 04 — spaces
// Lines 1553-1763 of readable/tokyo__assets__region-tokyo-bodyWorker-CtngWad2.pretty.js (statement-aligned).
function oe() {
  let e = {
      enabled: !0,
      workingColorSpace: d,
      spaces: {},
      convert: function (e, t, n) {
        return this.enabled === !1 || t === n || !t || !n
          ? e
          : (this.spaces[t].transfer === `srgb` &&
              ((e.r = ce(e.r)), (e.g = ce(e.g)), (e.b = ce(e.b))),
            this.spaces[t].primaries !== this.spaces[n].primaries &&
              (e.applyMatrix3(this.spaces[t].toXYZ),
              e.applyMatrix3(this.spaces[n].fromXYZ)),
            this.spaces[n].transfer === `srgb` &&
              ((e.r = le(e.r)), (e.g = le(e.g)), (e.b = le(e.b))),
            e);
      },
      workingToColorSpace: function (e, t) {
        return this.convert(e, this.workingColorSpace, t);
      },
      colorSpaceToWorking: function (e, t) {
        return this.convert(e, t, this.workingColorSpace);
      },
      getPrimaries: function (e) {
        return this.spaces[e].primaries;
      },
      getTransfer: function (e) {
        return e === `` ? f : this.spaces[e].transfer;
      },
      getToneMappingMode: function (e) {
        return (
          this.spaces[e].outputColorSpaceConfig.toneMappingMode || `standard`
        );
      },
      getLuminanceCoefficients: function (e, t = this.workingColorSpace) {
        return e.fromArray(this.spaces[t].luminanceCoefficients);
      },
      define: function (e) {
        Object.assign(this.spaces, e);
      },
      _getMatrix: function (e, t, n) {
        return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ);
      },
      _getDrawingBufferColorSpace: function (e) {
        return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace;
      },
      _getUnpackColorSpace: function (e = this.workingColorSpace) {
        return this.spaces[e].workingColorSpaceConfig.unpackColorSpace;
      },
      fromWorkingColorSpace: function (t, n) {
        return (
          x(
            `ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`,
          ),
          e.workingToColorSpace(t, n)
        );
      },
      toWorkingColorSpace: function (t, n) {
        return (
          x(
            `ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`,
          ),
          e.colorSpaceToWorking(t, n)
        );
      },
    },
    t = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06],
    n = [0.2126, 0.7152, 0.0722],
    r = [0.3127, 0.329];
  return (
    e.define({
      [d]: {
        primaries: t,
        whitePoint: r,
        transfer: f,
        toXYZ: ie,
        fromXYZ: ae,
        luminanceCoefficients: n,
        workingColorSpaceConfig: { unpackColorSpace: u },
        outputColorSpaceConfig: { drawingBufferColorSpace: u },
      },
      [u]: {
        primaries: t,
        whitePoint: r,
        transfer: `srgb`,
        toXYZ: ie,
        fromXYZ: ae,
        luminanceCoefficients: n,
        outputColorSpaceConfig: { drawingBufferColorSpace: u },
      },
    }),
    e
  );
}
const se = /*@__PURE__*/ oe();
function ce(e) {
  return e < 0.04045
    ? e * 0.0773993808
    : (e * 0.9478672986 + 0.0521327014) ** 2.4;
}
function le(e) {
  return e < 0.0031308 ? e * 12.92 : 1.055 * e ** 0.41666 - 0.055;
}
let ue;
var de = class {
  static getDataURL(e, t = `image/png`) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > `u`) return e.src;
    let n;
    if (e instanceof HTMLCanvasElement) n = e;
    else {
      (ue === void 0 && (ue = g(`canvas`)),
        (ue.width = e.width),
        (ue.height = e.height));
      let t = ue.getContext(`2d`);
      (e instanceof ImageData
        ? t.putImageData(e, 0, 0)
        : t.drawImage(e, 0, 0, e.width, e.height),
        (n = ue));
    }
    return n.toDataURL(t);
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < `u` && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < `u` && e instanceof ImageBitmap)
    ) {
      let t = g(`canvas`);
      ((t.width = e.width), (t.height = e.height));
      let n = t.getContext(`2d`);
      n.drawImage(e, 0, 0, e.width, e.height);
      let r = n.getImageData(0, 0, e.width, e.height),
        i = r.data;
      for (let e = 0; e < i.length; e++) i[e] = ce(i[e] / 255) * 255;
      return (n.putImageData(r, 0, 0), t);
    }
    if (e.data) {
      let t = e.data.slice(0);
      for (let e = 0; e < t.length; e++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[e] = Math.floor(ce(t[e] / 255) * 255))
          : (t[e] = ce(t[e]));
      return { data: t, width: e.width, height: e.height };
    }
    return (
      y(
        `ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`,
      ),
      e
    );
  }
};
let fe = 0;
var pe = class {
  constructor(e = null) {
    ((this.isTextureSource = !0),
      Object.defineProperty(this, "id", { value: fe++ }),
      (this.uuid = w()),
      (this.data = e),
      (this.dataReady = !0),
      (this.version = 0));
  }
  getSize(e) {
    let t = this.data;
    return (
      typeof HTMLVideoElement < `u` && t instanceof HTMLVideoElement
        ? e.set(t.videoWidth, t.videoHeight, 0)
        : typeof VideoFrame < `u` && t instanceof VideoFrame
          ? e.set(t.displayWidth, t.displayHeight, 0)
          : t === null
            ? e.set(0, 0, 0)
            : e.set(t.width, t.height, t.depth || 0),
      e
    );
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    let t = e === void 0 || typeof e == `string`;
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    let n = { uuid: this.uuid, url: `` },
      r = this.data;
    if (r !== null) {
      let e;
      if (Array.isArray(r)) {
        e = [];
        for (let t = 0, n = r.length; t < n; t++)
          r[t].isDataTexture ? e.push(me(r[t].image)) : e.push(me(r[t]));
      } else e = me(r);
      n.url = e;
    }
    return (t || (e.images[this.uuid] = n), n);
  }
};
function me(e) {
  return (typeof HTMLImageElement < `u` && e instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < `u` && e instanceof ImageBitmap)
    ? de.getDataURL(e)
    : e.data
      ? {
          data: Array.from(e.data),
          width: e.width,
          height: e.height,
          type: e.data.constructor.name,
        }
      : (y(`Texture: Unable to serialize Texture.`), {});
}
let he = 0;
const ge = /*@__PURE__*/ new M();
