// tokyo/assets/avatar-CbvrNwG6 08 — workerconfig
// Lines 2789-3015 of readable/tokyo/assets/avatar-CbvrNwG6.pretty.js (statement-aligned).
var xn = class {
    init() {
      return Promise.reject(
        Error(`KTX2Loader (avatars): raw zstd KTX2 is not supported`),
      );
    }
  },
  Sn = `display-p3`,
  Cn = `display-p3-linear`,
  wn = `basis_transcoder.wasm`,
  Tn = `basis_transcoder.js`,
  En = new WeakMap(),
  Dn = 0,
  On,
  K = class e extends tt {
    constructor(e) {
      (super(e),
        (this.transcoderPath = ``),
        (this.transcoderBinary = null),
        (this.transcoderPending = null),
        (this.workerPool = new fn()),
        (this.workerSourceURL = ``),
        (this.workerConfig = null),
        typeof MSC_TRANSCODER < `u` &&
          console.warn(
            `THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.`,
          ));
    }
    setTranscoderPath(e) {
      return ((this.transcoderPath = e), this);
    }
    setWorkerLimit(e) {
      return (this.workerPool.setWorkerLimit(e), this);
    }
    async detectSupportAsync(e) {
      return (
        console.warn(
          `KTX2Loader: "detectSupportAsync()" has been deprecated. Use "detectSupport()" and "await renderer.init();" when creating the renderer.`,
        ),
        await e.init(),
        this.detectSupport(e)
      );
    }
    detectSupport(e) {
      return (
        e.isWebGPURenderer === !0
          ? (this.workerConfig = {
              astcSupported: e.hasFeature(`texture-compression-astc`),
              astcHDRSupported: !1,
              etc1Supported: e.hasFeature(`texture-compression-etc1`),
              etc2Supported: e.hasFeature(`texture-compression-etc2`),
              dxtSupported: e.hasFeature(`texture-compression-s3tc`),
              bptcSupported: e.hasFeature(`texture-compression-bc`),
              pvrtcSupported: e.hasFeature(`texture-compression-pvrtc`),
            })
          : ((this.workerConfig = {
              astcSupported: e.extensions.has(`WEBGL_compressed_texture_astc`),
              astcHDRSupported:
                e.extensions.has(`WEBGL_compressed_texture_astc`) &&
                e.extensions
                  .get(`WEBGL_compressed_texture_astc`)
                  .getSupportedProfiles()
                  .includes(`hdr`),
              etc1Supported: e.extensions.has(`WEBGL_compressed_texture_etc1`),
              etc2Supported: e.extensions.has(`WEBGL_compressed_texture_etc`),
              dxtSupported: e.extensions.has(`WEBGL_compressed_texture_s3tc`),
              bptcSupported: e.extensions.has(`EXT_texture_compression_bptc`),
              pvrtcSupported:
                e.extensions.has(`WEBGL_compressed_texture_pvrtc`) ||
                e.extensions.has(`WEBKIT_WEBGL_compressed_texture_pvrtc`),
            }),
            typeof navigator < `u` &&
              navigator.platform !== void 0 &&
              navigator.userAgent !== void 0 &&
              navigator.platform.indexOf(`Linux`) >= 0 &&
              navigator.userAgent.indexOf(`Android`) < 0 &&
              this.workerConfig.astcSupported &&
              this.workerConfig.etc2Supported &&
              this.workerConfig.bptcSupported &&
              this.workerConfig.dxtSupported &&
              ((this.workerConfig.astcSupported = !1),
              (this.workerConfig.etc1Supported = !1),
              (this.workerConfig.etc2Supported = !1))),
        this
      );
    }
    init() {
      if (!this.transcoderPending) {
        let t = new T(this.manager);
        t.setWithCredentials(this.withCredentials);
        let n = new T(this.manager);
        (n.setWithCredentials(this.withCredentials),
          n.setResponseType(`arraybuffer`));
        let r, i;
        (this.transcoderPath === ``
          ? ((r = t.loadAsync(Tn)), (i = n.loadAsync(wn)))
          : (t.setPath(this.transcoderPath),
            (r = t.loadAsync(`basis_transcoder.js`)),
            n.setPath(this.transcoderPath),
            (i = n.loadAsync(`basis_transcoder.wasm`))),
          (this.transcoderPending = Promise.all([r, i]).then(([t, n]) => {
            let r = e.BasisWorker.toString(),
              i = [
                `/* constants */`,
                `let _EngineFormat = ` + JSON.stringify(e.EngineFormat),
                `let _EngineType = ` + JSON.stringify(e.EngineType),
                `let _TranscoderFormat = ` + JSON.stringify(e.TranscoderFormat),
                `let _BasisFormat = ` + JSON.stringify(e.BasisFormat),
                `/* basis_transcoder.js */`,
                t,
                `/* worker */`,
                r.substring(r.indexOf(`{`) + 1, r.lastIndexOf(`}`)),
              ].join(`
`);
            ((this.workerSourceURL = URL.createObjectURL(new Blob([i]))),
              (this.transcoderBinary = n),
              this.workerPool.setWorkerCreator(() => {
                let e = new Worker(this.workerSourceURL),
                  t = this.transcoderBinary.slice(0);
                return (
                  e.postMessage(
                    {
                      type: `init`,
                      config: this.workerConfig,
                      transcoderBinary: t,
                    },
                    [t],
                  ),
                  e
                );
              }));
          })),
          Dn > 0 &&
            console.warn(
              `THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances.`,
            ),
          Dn++);
      }
      return this.transcoderPending;
    }
    load(e, t, n, r) {
      if (this.workerConfig === null)
        throw Error(
          "THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.",
        );
      let i = new T(this.manager);
      (i.setPath(this.path),
        i.setCrossOrigin(this.crossOrigin),
        i.setWithCredentials(this.withCredentials),
        i.setRequestHeader(this.requestHeader),
        i.setResponseType(`arraybuffer`),
        i.load(
          e,
          (e) => {
            this.parse(e, t, r);
          },
          n,
          r,
        ));
    }
    parse(e, t, n) {
      if (this.workerConfig === null)
        throw Error(
          "THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.",
        );
      if (En.has(e)) return En.get(e).promise.then(t).catch(n);
      this._createTexture(e)
        .then((e) => (t ? t(e) : null))
        .catch(n);
    }
    _createTextureFrom(e, t) {
      let {
        type: n,
        error: r,
        data: {
          faces: i,
          width: o,
          height: s,
          format: c,
          type: l,
          dfdFlags: u,
        },
      } = e;
      if (n === `error`) return Promise.reject(r);
      let d;
      if (t.faceCount === 6) d = new nt(i, c, l);
      else {
        let e = i[0].mipmaps;
        d =
          t.layerCount > 1
            ? new a(e, o, s, t.layerCount, c, l)
            : new ae(e, o, s, c, l);
      }
      return (
        (d.minFilter = i[0].mipmaps.length === 1 ? A : ke),
        (d.magFilter = A),
        (d.generateMipmaps = !1),
        (d.needsUpdate = !0),
        (d.colorSpace = Nn(t)),
        (d.premultiplyAlpha = !!(u & 1)),
        d
      );
    }
    async _createTexture(e, t = {}) {
      let n = bn(new Uint8Array(e)),
        r =
          n.vkFormat === 1000066e3 &&
          n.dataFormatDescriptor[0].colorModel === 167;
      if (!(n.vkFormat === 0 || (r && !this.workerConfig.astcHDRSupported)))
        return Mn(n);
      let i = t,
        a = this.init()
          .then(() =>
            this.workerPool.postMessage(
              { type: `transcode`, buffer: e, taskConfig: i },
              [e],
            ),
          )
          .then((e) => this._createTextureFrom(e.data, n));
      return (En.set(e, { promise: a }), a);
    }
    dispose() {
      (this.workerPool.dispose(),
        this.workerSourceURL && URL.revokeObjectURL(this.workerSourceURL),
        Dn--);
    }
  };
