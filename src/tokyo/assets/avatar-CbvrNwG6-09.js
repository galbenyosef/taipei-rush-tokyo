// tokyo/assets/avatar-CbvrNwG6 09 — basisformat
// Lines 3016-3333 of readable/tokyo/assets/avatar-CbvrNwG6.pretty.js (statement-aligned).
((K.BasisFormat = { ETC1S: 0, UASTC: 1, UASTC_HDR: 2 }),
  (K.TranscoderFormat = {
    ETC1: 0,
    ETC2: 1,
    BC1: 2,
    BC3: 3,
    BC4: 4,
    BC5: 5,
    BC7_M6_OPAQUE_ONLY: 6,
    BC7_M5: 7,
    PVRTC1_4_RGB: 8,
    PVRTC1_4_RGBA: 9,
    ASTC_4x4: 10,
    ATC_RGB: 11,
    ATC_RGBA_INTERPOLATED_ALPHA: 12,
    RGBA32: 13,
    RGB565: 14,
    BGR565: 15,
    RGBA4444: 16,
    BC6H: 22,
    RGB_HALF: 24,
    RGBA_HALF: 25,
  }),
  (K.EngineFormat = {
    RGBAFormat: n,
    RGBA_ASTC_4x4_Format: xe,
    RGB_BPTC_UNSIGNED_Format: Le,
    RGBA_BPTC_Format: ze,
    RGBA_ETC2_EAC_Format: Je,
    RGBA_PVRTC_4BPPV1_Format: me,
    RGBA_S3TC_DXT5_Format: Xe,
    RGB_ETC1_Format: $e,
    RGB_ETC2_Format: ye,
    RGB_PVRTC_4BPPV1_Format: we,
    RGBA_S3TC_DXT1_Format: Ve,
  }),
  (K.EngineType = { UnsignedByteType: g, HalfFloatType: E, FloatType: ce }),
  (K.BasisWorker = function () {
    let e,
      t,
      n,
      r = _EngineFormat,
      i = _EngineType,
      a = _TranscoderFormat,
      o = _BasisFormat;
    self.addEventListener(`message`, function (n) {
      let r = n.data;
      switch (r.type) {
        case `init`:
          ((e = r.config), s(r.transcoderBinary));
          break;
        case `transcode`:
          t.then(() => {
            try {
              let {
                faces: e,
                buffers: t,
                width: n,
                height: i,
                hasAlpha: a,
                format: o,
                type: s,
                dfdFlags: l,
              } = c(r.buffer);
              self.postMessage(
                {
                  type: `transcode`,
                  id: r.id,
                  data: {
                    faces: e,
                    width: n,
                    height: i,
                    hasAlpha: a,
                    format: o,
                    type: s,
                    dfdFlags: l,
                  },
                },
                t,
              );
            } catch (e) {
              (console.error(e),
                self.postMessage({
                  type: `error`,
                  id: r.id,
                  error: e.message,
                }));
            }
          });
      }
    });
    function s(e) {
      t = new Promise((t) => {
        ((n = { wasmBinary: e, onRuntimeInitialized: t }), BASIS(n));
      }).then(() => {
        (n.initializeBasis(),
          n.KTX2File === void 0 &&
            console.warn(
              `THREE.KTX2Loader: Please update Basis Universal transcoder.`,
            ));
      });
    }
    function c(e) {
      let t = new n.KTX2File(new Uint8Array(e));
      function r() {
        (t.close(), t.delete());
      }
      if (!t.isValid())
        throw (
          r(),
          Error(`THREE.KTX2Loader:	Invalid or unsupported .ktx2 file`)
        );
      let a;
      if (t.isUASTC()) a = o.UASTC;
      else if (t.isETC1S()) a = o.ETC1S;
      else if (t.isHDR()) a = o.UASTC_HDR;
      else throw Error(`THREE.KTX2Loader: Unknown Basis encoding`);
      let s = t.getWidth(),
        c = t.getHeight(),
        l = t.getLayers() || 1,
        u = t.getLevels(),
        f = t.getFaces(),
        m = t.getHasAlpha(),
        h = t.getDFDFlags(),
        { transcoderFormat: g, engineFormat: _, engineType: v } = d(a, s, c, m);
      if (!s || !c || !u)
        throw (r(), Error(`THREE.KTX2Loader:	Invalid texture`));
      if (!t.startTranscoding())
        throw (r(), Error(`THREE.KTX2Loader: .startTranscoding failed`));
      let y = [],
        b = [];
      for (let e = 0; e < f; e++) {
        let n = [];
        for (let a = 0; a < u; a++) {
          let o = [],
            s,
            c;
          for (let n = 0; n < l; n++) {
            let l = t.getImageLevelInfo(a, n, e);
            (e === 0 &&
              a === 0 &&
              n === 0 &&
              (l.origWidth % 4 != 0 || l.origHeight % 4 != 0) &&
              console.warn(
                `THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions.`,
              ),
              u > 1
                ? ((s = l.origWidth), (c = l.origHeight))
                : ((s = l.width), (c = l.height)));
            let d = new Uint8Array(t.getImageTranscodedSizeInBytes(a, n, 0, g)),
              f = t.transcodeImage(d, a, n, e, g, 0, -1, -1);
            if (
              (v === i.HalfFloatType &&
                (d = new Uint16Array(
                  d.buffer,
                  d.byteOffset,
                  d.byteLength / Uint16Array.BYTES_PER_ELEMENT,
                )),
              !f)
            )
              throw (r(), Error(`THREE.KTX2Loader: .transcodeImage failed.`));
            o.push(d);
          }
          let d = p(o);
          (n.push({ data: d, width: s, height: c }), b.push(d.buffer));
        }
        y.push({ mipmaps: n, width: s, height: c, format: _, type: v });
      }
      return (
        r(),
        {
          faces: y,
          buffers: b,
          width: s,
          height: c,
          hasAlpha: m,
          dfdFlags: h,
          format: _,
          type: v,
        }
      );
    }
    let l = [
        {
          if: `astcSupported`,
          basisFormat: [o.UASTC],
          transcoderFormat: [a.ASTC_4x4, a.ASTC_4x4],
          engineFormat: [r.RGBA_ASTC_4x4_Format, r.RGBA_ASTC_4x4_Format],
          engineType: [i.UnsignedByteType],
          priorityETC1S: 1 / 0,
          priorityUASTC: 1,
          needsPowerOfTwo: !1,
        },
        {
          if: `bptcSupported`,
          basisFormat: [o.ETC1S, o.UASTC],
          transcoderFormat: [a.BC7_M5, a.BC7_M5],
          engineFormat: [r.RGBA_BPTC_Format, r.RGBA_BPTC_Format],
          engineType: [i.UnsignedByteType],
          priorityETC1S: 3,
          priorityUASTC: 2,
          needsPowerOfTwo: !1,
        },
        {
          if: `dxtSupported`,
          basisFormat: [o.ETC1S, o.UASTC],
          transcoderFormat: [a.BC1, a.BC3],
          engineFormat: [r.RGBA_S3TC_DXT1_Format, r.RGBA_S3TC_DXT5_Format],
          engineType: [i.UnsignedByteType],
          priorityETC1S: 4,
          priorityUASTC: 5,
          needsPowerOfTwo: !1,
        },
        {
          if: `etc2Supported`,
          basisFormat: [o.ETC1S, o.UASTC],
          transcoderFormat: [a.ETC1, a.ETC2],
          engineFormat: [r.RGB_ETC2_Format, r.RGBA_ETC2_EAC_Format],
          engineType: [i.UnsignedByteType],
          priorityETC1S: 1,
          priorityUASTC: 3,
          needsPowerOfTwo: !1,
        },
        {
          if: `etc1Supported`,
          basisFormat: [o.ETC1S, o.UASTC],
          transcoderFormat: [a.ETC1],
          engineFormat: [r.RGB_ETC1_Format],
          engineType: [i.UnsignedByteType],
          priorityETC1S: 2,
          priorityUASTC: 4,
          needsPowerOfTwo: !1,
        },
        {
          if: `pvrtcSupported`,
          basisFormat: [o.ETC1S, o.UASTC],
          transcoderFormat: [a.PVRTC1_4_RGB, a.PVRTC1_4_RGBA],
          engineFormat: [r.RGB_PVRTC_4BPPV1_Format, r.RGBA_PVRTC_4BPPV1_Format],
          engineType: [i.UnsignedByteType],
          priorityETC1S: 5,
          priorityUASTC: 6,
          needsPowerOfTwo: !0,
        },
        {
          if: `bptcSupported`,
          basisFormat: [o.UASTC_HDR],
          transcoderFormat: [a.BC6H],
          engineFormat: [r.RGB_BPTC_UNSIGNED_Format],
          engineType: [i.HalfFloatType],
          priorityHDR: 1,
          needsPowerOfTwo: !1,
        },
        {
          basisFormat: [o.ETC1S, o.UASTC],
          transcoderFormat: [a.RGBA32, a.RGBA32],
          engineFormat: [r.RGBAFormat, r.RGBAFormat],
          engineType: [i.UnsignedByteType, i.UnsignedByteType],
          priorityETC1S: 100,
          priorityUASTC: 100,
          needsPowerOfTwo: !1,
        },
        {
          basisFormat: [o.UASTC_HDR],
          transcoderFormat: [a.RGBA_HALF],
          engineFormat: [r.RGBAFormat],
          engineType: [i.HalfFloatType],
          priorityHDR: 100,
          needsPowerOfTwo: !1,
        },
      ],
      u = {
        [o.ETC1S]: l
          .filter((e) => e.basisFormat.includes(o.ETC1S))
          .sort((e, t) => e.priorityETC1S - t.priorityETC1S),
        [o.UASTC]: l
          .filter((e) => e.basisFormat.includes(o.UASTC))
          .sort((e, t) => e.priorityUASTC - t.priorityUASTC),
        [o.UASTC_HDR]: l
          .filter((e) => e.basisFormat.includes(o.UASTC_HDR))
          .sort((e, t) => e.priorityHDR - t.priorityHDR),
      };
    function d(t, n, r, i) {
      let a = u[t];
      for (let o = 0; o < a.length; o++) {
        let s = a[o];
        if (
          (!s.if || e[s.if]) &&
          s.basisFormat.includes(t) &&
          !(i && s.transcoderFormat.length < 2) &&
          (!s.needsPowerOfTwo || (f(n) && f(r)))
        )
          return {
            transcoderFormat: s.transcoderFormat[+!!i],
            engineFormat: s.engineFormat[+!!i],
            engineType: s.engineType[0],
          };
      }
      throw Error(`THREE.KTX2Loader: Failed to identify transcoding target.`);
    }
    function f(e) {
      return e <= 2 || (!(e & (e - 1)) && e !== 0);
    }
    function p(e) {
      if (e.length === 1) return e[0];
      let t = 0;
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        t += r.byteLength;
      }
      let n = new Uint8Array(t),
        r = 0;
      for (let t = 0; t < e.length; t++) {
        let i = e[t];
        (n.set(i, r), (r += i.byteLength));
      }
      return n;
    }
  }));
