// tokyo/assets/world-CVm1JHks 27 — math
// Lines 8186-8395 of readable/tokyo/assets/world-CVm1JHks.pretty.js (statement-aligned).
function Ro(e) {
  let t = e.trim().replace(/\s+/g, ``),
    r = /^(?:(\d+)巷)?(?:(\d+)弄)?(?:(\d+(?:-\d+)?)號?)?$/.exec(t);
  if (!r || (!r[1] && !r[2] && !r[3])) {
    let e = t
      .replace(/(\d+)巷/g, `Ln. $1, `)
      .replace(/(\d+)弄/g, `Aly. $1, `)
      .replace(/(\d+)號?/g, `No. $1, `)
      .replace(/[^\x20-\x7e]/g, ``);
    return { zh: t, en: e.replace(/,\s*$/, ``) + (e.trim() ? `, ` : ``) };
  }
  let [, i, a, o] = r,
    s = `${i ? (n.on ? n.t(`${i}巷`, `${i}巷`) : `${i}巷`) : ``}${a ? (n.on ? n.t(`${a}弄`, `${a}弄`) : `${a}弄`) : ``}${o ? (n.on ? n.t(`${o}號`, `${o}号`) : `${o}號`) : ``}`,
    c = [];
  return (
    o && c.push(`No. ${o}`),
    a && c.push(`Aly. ${a}`),
    i && c.push(`Ln. ${i}`),
    { zh: s, en: c.length ? `${c.join(`, `)}, ` : `` }
  );
}
function zo(e, t, n, r, i) {
  let a = r.full,
    o = () => ({ zh: a.zh, en: a.en, ...(a.ja ? { ja: a.ja } : {}) });
  if (Hi(t) && !i) return o();
  if (i) {
    let e = Ro(i);
    return { zh: `${r.full.zh}${e.zh}`, en: `${e.en}${r.full.en}` };
  }
  let s = e;
  if (typeof s.address == `function`) {
    let e = s.address(t, n.x, n.z);
    if (e && e.zh) return { zh: e.zh, en: e.en, ...(e.ja ? { ja: e.ja } : {}) };
  }
  return o();
}
function Bo(e, t, n, r) {
  return {
    id: e?.id ?? `?`,
    ok: !1,
    rejections: r,
    x: 0,
    z: 0,
    y: 0,
    facing: 0,
    w: e?.lot?.w ?? 0,
    d: e?.lot?.d ?? 0,
    rect: { minX: 0, minZ: 0, maxX: 0, maxZ: 0 },
    address: { zh: ``, en: `` },
    claims: [],
    anchors: [],
    replaces: (e?.placement?.replaces ?? []).map((e) => ({
      id: e.id,
      note: e.note,
      known: !1,
    })),
    warnings: Wo(n).map((t) => (t.startsWith(`[`) ? t : yo(e?.id ?? `?`, t))),
    errors: t,
  };
}
function Vo(e, t) {
  e.reasons.set(t, (e.reasons.get(t) ?? 0) + 1);
}
function Ho(e, t) {
  return {
    minX: Math.min(e.minX, t.minX),
    minZ: Math.min(e.minZ, t.minZ),
    maxX: Math.max(e.maxX, t.maxX),
    maxZ: Math.max(e.maxZ, t.maxZ),
  };
}
function Uo(e) {
  let t = Math.round(e * 1e6) / 1e6;
  return Object.is(t, -0) ? 0 : t;
}
function Wo(e) {
  return [...new Set(e)];
}
function Go(e) {
  if (!e) return 0;
  let t = e.index;
  if (t)
    return Math.floor(
      (e.drawRange.count === 1 / 0
        ? t.count
        : Math.min(t.count, e.drawRange.count)) / 3,
    );
  let n = e.getAttribute(`position`);
  return n
    ? Math.floor(
        (e.drawRange.count === 1 / 0
          ? n.count
          : Math.min(n.count, e.drawRange.count)) / 3,
      )
    : 0;
}
function Ko(e, t = { calls: 0, tris: 0 }) {
  if (((t.calls = 0), (t.tris = 0), !e)) return t;
  let n = (e) => {
    if (!e.visible) return;
    let r = e;
    if (r.isMesh && r.geometry) {
      let e = Go(r.geometry);
      if (e > 0) {
        let n = r.isInstancedMesh ? Math.max(0, r.count ?? 0) : 1;
        if (n > 0) {
          let i = Array.isArray(r.material)
            ? Math.max(1, r.geometry.groups.length)
            : 1;
          ((t.calls += i), (t.tris += e * n));
        }
      }
    }
    let i = e.children;
    for (let e = 0; e < i.length; e++) n(i[e]);
  };
  return (n(e), t);
}
function qo(e, t) {
  return e === `far` ? null : yt[t][e];
}
function Jo(e, t, n) {
  let r = qo(e, t);
  if (!r) return null;
  let i = [];
  return (
    n.calls > r.calls && i.push(`${n.calls} calls > ${r.calls}`),
    n.tris > r.tris && i.push(`${n.tris} tris > ${r.tris}`),
    i.length ? `${e}/${t}: ${i.join(`, `)}` : null
  );
}
var Yo = { menu: 0, decal: 1, other: 1, plaque: 2, signH: 3, signV: 9 };
function Xo(e) {
  let t = e.toLowerCase();
  return /vert|vsign|blade|neon/.test(t)
    ? `signV`
    : /floor|pavers|terrazzo/.test(t)
      ? `other`
      : /plaque|lacquer|shrine|hall/.test(t)
        ? `plaque`
        : /sign|fascia|logo|name|mark|banner/.test(t)
          ? `signH`
          : /menu|price|soldout|^(st|sg|col)-/.test(t)
            ? `menu`
            : /decal|poster|notice|sticker|couplet|ad$|-ad|ad-/.test(t)
              ? `decal`
              : `other`;
}
var Zo = class {
    buf = new Float64Array(4096);
  },
  Qo = [
    `width`,
    `actualBoundingBoxLeft`,
    `actualBoundingBoxRight`,
    `actualBoundingBoxAscent`,
    `actualBoundingBoxDescent`,
    `fontBoundingBoxAscent`,
    `fontBoundingBoxDescent`,
    `alphabeticBaseline`,
    `hangingBaseline`,
  ],
  $o = 1,
  es = 2,
  ts = 3,
  ns = 4,
  rs = 5,
  is = 6,
  as = 7,
  os = 8,
  ss = 9,
  cs = 10,
  ls = 11,
  us = 12,
  ds = 13,
  fs = 14,
  ps = 15,
  ms = 16,
  hs = 17,
  gs = 18,
  _s = 19,
  vs = 20,
  ys = 21,
  bs = 22,
  xs = 23,
  Ss = 24,
  Cs = 25,
  ws = 26,
  Ts = 27,
  Es = 28,
  Ds = 29,
  Os = 30,
  ks = 31,
  As = 32,
  js = 33,
  Ms = 34,
  Ns = 35,
  Ps = 36,
  Fs = 37,
  Is = 38,
  Ls = 39,
  Rs = 40,
  zs = 41,
  Bs = 42,
  Vs =
    `fillStyle.strokeStyle.lineWidth.lineCap.lineJoin.miterLimit.lineDashOffset.font.textAlign.textBaseline.direction.letterSpacing.wordSpacing.fontKerning.globalAlpha.globalCompositeOperation.shadowBlur.shadowColor.shadowOffsetX.shadowOffsetY.imageSmoothingEnabled.imageSmoothingQuality.filter.fontStretch.fontVariantCaps.textRendering.lang`.split(
      `.`,
    ),
  Hs = {};
for (let e = 0; e < Vs.length; e++) Hs[Vs[e]] = e;
