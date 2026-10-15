// tokyo/assets/avatar-CgSTz8jy 10 — pixeldepth
// Lines 3334-3515 of readable/tokyo/assets/avatar-CgSTz8jy.pretty.js (statement-aligned).
var On = new Set([E, Ve, D, M]),
  kn = new Set([91]),
  An = {
    109: E,
    103: D,
    100: M,
    97: E,
    83: D,
    76: M,
    91: E,
    43: E,
    37: E,
    22: D,
    16: D,
    15: M,
    9: M,
    123: Ve,
    122: Ve,
    152: Fe,
    148: ke,
    153: ge,
    154: ae,
    155: ne,
    156: ce,
    [gn]: j,
    158: j,
    157: j,
    [_n]: We,
    166: We,
    165: We,
    134: $e,
    133: $e,
    132: He,
    131: He,
    138: we,
    137: we,
    140: ot,
    139: ve,
    142: i,
    141: me,
    146: Qe,
    145: Qe,
    [hn]: qe,
    [pn]: qe,
    [mn]: ye,
    [fn]: ye,
  },
  J = {
    109: fe,
    103: fe,
    100: fe,
    97: w,
    83: w,
    76: w,
    91: tt,
    43: m,
    37: m,
    22: m,
    16: m,
    15: m,
    9: m,
    123: _e,
    122: he,
    152: m,
    148: m,
    153: m,
    154: m,
    155: m,
    156: m,
    [gn]: w,
    158: m,
    157: m,
    [_n]: w,
    166: m,
    165: m,
    134: m,
    133: m,
    132: m,
    131: m,
    138: m,
    137: m,
    140: m,
    139: m,
    142: m,
    141: m,
    146: m,
    145: m,
    [hn]: m,
    [pn]: m,
    [mn]: m,
    [fn]: m,
  };
async function jn(e) {
  let { vkFormat: t } = e;
  if (An[t] === void 0)
    throw Error(`THREE.KTX2Loader: Unsupported vkFormat: ` + t);
  J[t] === void 0 &&
    console.warn(`THREE.KTX2Loader: Missing ".type" for vkFormat: ` + t);
  let n;
  e.supercompressionScheme === 2 &&
    ((Dn ||= new Promise(async (e) => {
      let t = new bn();
      (await t.init(), e(t));
    })),
    (n = await Dn));
  let r = [];
  for (let i = 0; i < e.levels.length; i++) {
    let a = Math.max(1, e.pixelWidth >> i),
      o = Math.max(1, e.pixelHeight >> i),
      s = e.pixelDepth ? Math.max(1, e.pixelDepth >> i) : 0,
      c = e.levels[i],
      l;
    if (e.supercompressionScheme === 0) l = c.levelData;
    else if (e.supercompressionScheme === 2)
      l = n.decode(c.levelData, c.uncompressedByteLength);
    else throw Error(`THREE.KTX2Loader: Unsupported supercompressionScheme.`);
    let u;
    ((u =
      J[t] === 1015
        ? new Float32Array(
            l.buffer,
            l.byteOffset,
            l.byteLength / Float32Array.BYTES_PER_ELEMENT,
          )
        : J[t] === 1016 || J[t] === 1012
          ? new Uint16Array(
              l.buffer,
              l.byteOffset,
              l.byteLength / Uint16Array.BYTES_PER_ELEMENT,
            )
          : J[t] === 35902 || J[t] === 35899
            ? new Uint32Array(
                l.buffer,
                l.byteOffset,
                l.byteLength / Uint32Array.BYTES_PER_ELEMENT,
              )
            : l),
      r.push({ data: u, width: a, height: o, depth: s }));
  }
  let i = e.levelCount === 0 || r.length > 1,
    a;
  if (On.has(An[t]))
    ((a =
      e.pixelDepth === 0
        ? new Le(r[0].data, e.pixelWidth, e.pixelHeight)
        : new ze(r[0].data, e.pixelWidth, e.pixelHeight, e.pixelDepth)),
      (a.minFilter = i ? c : x),
      (a.magFilter = x),
      (a.generateMipmaps = e.levelCount === 0),
      (a.normalized = kn.has(t)));
  else {
    if (e.pixelDepth > 0)
      throw Error(`THREE.KTX2Loader: Unsupported pixelDepth.`);
    ((a = new se(r, e.pixelWidth, e.pixelHeight)),
      (a.minFilter = i ? Pe : O),
      (a.magFilter = O));
  }
  return (
    (a.mipmaps = r),
    (a.type = J[t]),
    (a.format = An[t]),
    (a.colorSpace = Mn(e)),
    (a.needsUpdate = !0),
    Promise.resolve(a)
  );
}
function Mn(e) {
  let t = e.dataFormatDescriptor[0];
  return t.colorPrimaries === 1
    ? t.transferFunction === 2
      ? a
      : T
    : t.colorPrimaries === 10
      ? t.transferFunction === 2
        ? xn
        : Sn
      : (t.colorPrimaries === 0 ||
          console.warn(
            `THREE.KTX2Loader: Unsupported color primaries, "${t.colorPrimaries}"`,
          ),
        ``);
}
