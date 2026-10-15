// tokyo/assets/avatar-CgSTz8jy 07 — nextuint32
// Lines 2615-2788 of readable/tokyo/assets/avatar-CgSTz8jy.pretty.js (statement-aligned).
function yn(e) {
  let t = new Uint8Array(e.buffer, e.byteOffset, K.length);
  if (
    t[0] !== K[0] ||
    t[1] !== K[1] ||
    t[2] !== K[2] ||
    t[3] !== K[3] ||
    t[4] !== K[4] ||
    t[5] !== K[5] ||
    t[6] !== K[6] ||
    t[7] !== K[7] ||
    t[8] !== K[8] ||
    t[9] !== K[9] ||
    t[10] !== K[10] ||
    t[11] !== K[11]
  )
    throw Error(`Missing KTX 2.0 identifier.`);
  let n = {
      vkFormat: 0,
      typeSize: 1,
      pixelWidth: 0,
      pixelHeight: 0,
      pixelDepth: 0,
      layerCount: 0,
      faceCount: 1,
      levelCount: 0,
      supercompressionScheme: 0,
      levels: [],
      dataFormatDescriptor: [
        {
          vendorId: 0,
          descriptorType: 0,
          versionNumber: 2,
          colorModel: 0,
          colorPrimaries: 1,
          transferFunction: 2,
          flags: 0,
          texelBlockDimension: [0, 0, 0, 0],
          bytesPlane: [0, 0, 0, 0, 0, 0, 0, 0],
          samples: [],
        },
      ],
      keyValue: {},
      globalData: null,
    },
    r = 17 * Uint32Array.BYTES_PER_ELEMENT,
    i = new G(e, K.length, r, !0);
  ((n.vkFormat = i._nextUint32()),
    (n.typeSize = i._nextUint32()),
    (n.pixelWidth = i._nextUint32()),
    (n.pixelHeight = i._nextUint32()),
    (n.pixelDepth = i._nextUint32()),
    (n.layerCount = i._nextUint32()),
    (n.faceCount = i._nextUint32()),
    (n.levelCount = i._nextUint32()),
    (n.supercompressionScheme = i._nextUint32()));
  let a = i._nextUint32(),
    o = i._nextUint32(),
    s = i._nextUint32(),
    c = i._nextUint32(),
    l = i._nextUint64(),
    u = i._nextUint64(),
    d = 3 * Math.max(n.levelCount, 1) * 8,
    f = new G(e, K.length + r, d, !0);
  for (let t = 0, r = Math.max(n.levelCount, 1); t < r; t++)
    n.levels.push({
      levelData: new Uint8Array(
        e.buffer,
        e.byteOffset + f._nextUint64(),
        f._nextUint64(),
      ),
      uncompressedByteLength: f._nextUint64(),
    });
  let p = new G(e, a, o, !0);
  p._skip(4);
  let m = p._nextUint16(),
    h = p._nextUint16(),
    g = p._nextUint16(),
    _ = p._nextUint16(),
    v = {
      vendorId: m,
      descriptorType: h,
      versionNumber: g,
      colorModel: p._nextUint8(),
      colorPrimaries: p._nextUint8(),
      transferFunction: p._nextUint8(),
      flags: p._nextUint8(),
      texelBlockDimension: [
        p._nextUint8(),
        p._nextUint8(),
        p._nextUint8(),
        p._nextUint8(),
      ],
      bytesPlane: [
        p._nextUint8(),
        p._nextUint8(),
        p._nextUint8(),
        p._nextUint8(),
        p._nextUint8(),
        p._nextUint8(),
        p._nextUint8(),
        p._nextUint8(),
      ],
      samples: [],
    },
    y = (_ / 4 - 6) / 4;
  for (let e = 0; e < y; e++) {
    let t = {
      bitOffset: p._nextUint16(),
      bitLength: p._nextUint8(),
      channelType: p._nextUint8(),
      samplePosition: [
        p._nextUint8(),
        p._nextUint8(),
        p._nextUint8(),
        p._nextUint8(),
      ],
      sampleLower: -1 / 0,
      sampleUpper: 1 / 0,
    };
    (64 & t.channelType
      ? ((t.sampleLower = p._nextInt32()), (t.sampleUpper = p._nextInt32()))
      : ((t.sampleLower = p._nextUint32()), (t.sampleUpper = p._nextUint32())),
      (v.samples[e] = t));
  }
  ((n.dataFormatDescriptor.length = 0), n.dataFormatDescriptor.push(v));
  let b = new G(e, s, c, !0);
  for (; b._offset < c;) {
    let e = b._nextUint32(),
      t = b._scan(e),
      r = vn(t);
    if (
      ((n.keyValue[r] = b._nextUint8Array(e - t.byteLength - 1)),
      r.match(/^ktx/i))
    ) {
      let e = vn(n.keyValue[r]);
      n.keyValue[r] = e.substring(0, e.lastIndexOf(`\0`));
    }
    b._skip(e % 4 ? 4 - (e % 4) : 0);
  }
  if (u <= 0) return n;
  let x = new G(e, l, u, !0),
    S = x._nextUint16(),
    ee = x._nextUint16(),
    te = x._nextUint32(),
    ne = x._nextUint32(),
    re = x._nextUint32(),
    ie = x._nextUint32(),
    ae = [];
  for (let e = 0, t = Math.max(n.levelCount, 1); e < t; e++)
    ae.push({
      imageFlags: x._nextUint32(),
      rgbSliceByteOffset: x._nextUint32(),
      rgbSliceByteLength: x._nextUint32(),
      alphaSliceByteOffset: x._nextUint32(),
      alphaSliceByteLength: x._nextUint32(),
    });
  let oe = l + x._offset,
    se = oe + te,
    ce = se + ne,
    le = ce + re;
  return (
    (n.globalData = {
      endpointCount: S,
      selectorCount: ee,
      imageDescs: ae,
      endpointsData: new Uint8Array(e.buffer, e.byteOffset + oe, te),
      selectorsData: new Uint8Array(e.buffer, e.byteOffset + se, ne),
      tablesData: new Uint8Array(e.buffer, e.byteOffset + ce, re),
      extendedData: new Uint8Array(e.buffer, e.byteOffset + le, ie),
    }),
    n
  );
}
