// tokyo/assets/avatar-Cm3dja-U 10 — pixeldepth
// Lines 3340-3521 of readable/tokyo/assets/avatar-Cm3dja-U.pretty.js (statement-aligned).
var jn = new Set([M, rt, Ne, be]),
  Mn = new Set([91]),
  Nn = {
    109: M,
    103: Ne,
    100: be,
    97: M,
    83: Ne,
    76: be,
    91: M,
    43: M,
    37: M,
    22: Ne,
    16: Ne,
    15: be,
    9: be,
    123: rt,
    122: rt,
    152: _e,
    148: Xe,
    153: fe,
    154: at,
    155: t,
    156: a,
    [yn]: Ke,
    158: Ke,
    157: Ke,
    [bn]: $e,
    166: $e,
    165: $e,
    134: Se,
    133: Se,
    132: Ie,
    131: Ie,
    138: Ve,
    137: Ve,
    140: c,
    139: ne,
    142: se,
    141: he,
    146: Re,
    145: Re,
    [vn]: tt,
    [gn]: tt,
    [_n]: qe,
    [hn]: qe,
  },
  K = {
    109: f,
    103: f,
    100: f,
    97: O,
    83: O,
    76: O,
    91: ze,
    43: k,
    37: k,
    22: k,
    16: k,
    15: k,
    9: k,
    123: De,
    122: te,
    152: k,
    148: k,
    153: k,
    154: k,
    155: k,
    156: k,
    [yn]: O,
    158: k,
    157: k,
    [bn]: O,
    166: k,
    165: k,
    134: k,
    133: k,
    132: k,
    131: k,
    138: k,
    137: k,
    140: k,
    139: k,
    142: k,
    141: k,
    146: k,
    145: k,
    [vn]: k,
    [gn]: k,
    [_n]: k,
    [hn]: k,
  };
async function Pn(e) {
  let { vkFormat: t } = e;
  if (Nn[t] === void 0)
    throw Error(`THREE.KTX2Loader: Unsupported vkFormat: ` + t);
  K[t] === void 0 &&
    console.warn(`THREE.KTX2Loader: Missing ".type" for vkFormat: ` + t);
  let r;
  e.supercompressionScheme === 2 &&
    ((An ||= new Promise(async (e) => {
      let t = new Cn();
      (await t.init(), e(t));
    })),
    (r = await An));
  let i = [];
  for (let n = 0; n < e.levels.length; n++) {
    let a = Math.max(1, e.pixelWidth >> n),
      o = Math.max(1, e.pixelHeight >> n),
      s = e.pixelDepth ? Math.max(1, e.pixelDepth >> n) : 0,
      c = e.levels[n],
      l;
    if (e.supercompressionScheme === 0) l = c.levelData;
    else if (e.supercompressionScheme === 2)
      l = r.decode(c.levelData, c.uncompressedByteLength);
    else throw Error(`THREE.KTX2Loader: Unsupported supercompressionScheme.`);
    let u;
    ((u =
      K[t] === 1015
        ? new Float32Array(
            l.buffer,
            l.byteOffset,
            l.byteLength / Float32Array.BYTES_PER_ELEMENT,
          )
        : K[t] === 1016 || K[t] === 1012
          ? new Uint16Array(
              l.buffer,
              l.byteOffset,
              l.byteLength / Uint16Array.BYTES_PER_ELEMENT,
            )
          : K[t] === 35902 || K[t] === 35899
            ? new Uint32Array(
                l.buffer,
                l.byteOffset,
                l.byteLength / Uint32Array.BYTES_PER_ELEMENT,
              )
            : l),
      i.push({ data: u, width: a, height: o, depth: s }));
  }
  let a = e.levelCount === 0 || i.length > 1,
    o;
  if (jn.has(Nn[t]))
    ((o =
      e.pixelDepth === 0
        ? new S(i[0].data, e.pixelWidth, e.pixelHeight)
        : new n(i[0].data, e.pixelWidth, e.pixelHeight, e.pixelDepth)),
      (o.minFilter = a ? g : T),
      (o.magFilter = T),
      (o.generateMipmaps = e.levelCount === 0),
      (o.normalized = Mn.has(t)));
  else {
    if (e.pixelDepth > 0)
      throw Error(`THREE.KTX2Loader: Unsupported pixelDepth.`);
    ((o = new s(i, e.pixelWidth, e.pixelHeight)),
      (o.minFilter = a ? Pe : Le),
      (o.magFilter = Le));
  }
  return (
    (o.mipmaps = i),
    (o.type = K[t]),
    (o.format = Nn[t]),
    (o.colorSpace = Fn(e)),
    (o.needsUpdate = !0),
    Promise.resolve(o)
  );
}
function Fn(e) {
  let t = e.dataFormatDescriptor[0];
  return t.colorPrimaries === 1
    ? t.transferFunction === 2
      ? w
      : N
    : t.colorPrimaries === 10
      ? t.transferFunction === 2
        ? wn
        : Tn
      : (t.colorPrimaries === 0 ||
          console.warn(
            `THREE.KTX2Loader: Unsupported color primaries, "${t.colorPrimaries}"`,
          ),
        ``);
}
