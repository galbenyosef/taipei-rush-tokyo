// tokyo/assets/avatar-CbvrNwG6 10 — pixeldepth
// Lines 3334-3515 of readable/tokyo/assets/avatar-CbvrNwG6.pretty.js (statement-aligned).
var kn = new Set([n, _e, k, D]),
  An = new Set([91]),
  jn = {
    109: n,
    103: k,
    100: D,
    97: n,
    83: k,
    76: D,
    91: n,
    43: n,
    37: n,
    22: k,
    16: k,
    15: D,
    9: D,
    123: _e,
    122: _e,
    152: Je,
    148: ye,
    153: h,
    154: it,
    155: pe,
    156: rt,
    [_n]: xe,
    158: xe,
    157: xe,
    [vn]: Qe,
    166: Qe,
    165: Qe,
    134: Ve,
    133: Ve,
    132: We,
    131: We,
    138: Xe,
    137: Xe,
    140: o,
    139: ue,
    142: re,
    141: fe,
    146: ze,
    145: ze,
    [gn]: me,
    [mn]: me,
    [hn]: Ae,
    [pn]: Ae,
  },
  q = {
    109: ce,
    103: ce,
    100: ce,
    97: E,
    83: E,
    76: E,
    91: t,
    43: g,
    37: g,
    22: g,
    16: g,
    15: g,
    9: g,
    123: de,
    122: Ke,
    152: g,
    148: g,
    153: g,
    154: g,
    155: g,
    156: g,
    [_n]: E,
    158: g,
    157: g,
    [vn]: E,
    166: g,
    165: g,
    134: g,
    133: g,
    132: g,
    131: g,
    138: g,
    137: g,
    140: g,
    139: g,
    142: g,
    141: g,
    146: g,
    145: g,
    [gn]: g,
    [mn]: g,
    [hn]: g,
    [pn]: g,
  };
async function Mn(e) {
  let { vkFormat: t } = e;
  if (jn[t] === void 0)
    throw Error(`THREE.KTX2Loader: Unsupported vkFormat: ` + t);
  q[t] === void 0 &&
    console.warn(`THREE.KTX2Loader: Missing ".type" for vkFormat: ` + t);
  let n;
  e.supercompressionScheme === 2 &&
    ((On ||= new Promise(async (e) => {
      let t = new xn();
      (await t.init(), e(t));
    })),
    (n = await On));
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
      q[t] === 1015
        ? new Float32Array(
            l.buffer,
            l.byteOffset,
            l.byteLength / Float32Array.BYTES_PER_ELEMENT,
          )
        : q[t] === 1016 || q[t] === 1012
          ? new Uint16Array(
              l.buffer,
              l.byteOffset,
              l.byteLength / Uint16Array.BYTES_PER_ELEMENT,
            )
          : q[t] === 35902 || q[t] === 35899
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
  if (kn.has(jn[t]))
    ((a =
      e.pixelDepth === 0
        ? new Me(r[0].data, e.pixelWidth, e.pixelHeight)
        : new Fe(r[0].data, e.pixelWidth, e.pixelHeight, e.pixelDepth)),
      (a.minFilter = i ? l : S),
      (a.magFilter = S),
      (a.generateMipmaps = e.levelCount === 0),
      (a.normalized = An.has(t)));
  else {
    if (e.pixelDepth > 0)
      throw Error(`THREE.KTX2Loader: Unsupported pixelDepth.`);
    ((a = new ae(r, e.pixelWidth, e.pixelHeight)),
      (a.minFilter = i ? ke : A),
      (a.magFilter = A));
  }
  return (
    (a.mipmaps = r),
    (a.type = q[t]),
    (a.format = jn[t]),
    (a.colorSpace = Nn(e)),
    (a.needsUpdate = !0),
    Promise.resolve(a)
  );
}
function Nn(e) {
  let t = e.dataFormatDescriptor[0];
  return t.colorPrimaries === 1
    ? t.transferFunction === 2
      ? w
      : O
    : t.colorPrimaries === 10
      ? t.transferFunction === 2
        ? Sn
        : Cn
      : (t.colorPrimaries === 0 ||
          console.warn(
            `THREE.KTX2Loader: Unsupported color primaries, "${t.colorPrimaries}"`,
          ),
        ``);
}
