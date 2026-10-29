// tokyo/assets/world-CAmHK742 27 — math
// Lines 8119-8328 of readable/tokyo/assets/world-CAmHK742.pretty.js (statement-aligned).
function jo(e) {
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
function Mo(e, t, n, r, i) {
  let a = r.full,
    o = () => ({ zh: a.zh, en: a.en, ...(a.ja ? { ja: a.ja } : {}) });
  if (Fi(t) && !i) return o();
  if (i) {
    let e = jo(i);
    return { zh: `${r.full.zh}${e.zh}`, en: `${e.en}${r.full.en}` };
  }
  let s = e;
  if (typeof s.address == `function`) {
    let e = s.address(t, n.x, n.z);
    if (e && e.zh) return { zh: e.zh, en: e.en, ...(e.ja ? { ja: e.ja } : {}) };
  }
  return o();
}
function No(e, t, n, r) {
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
    warnings: Lo(n).map((t) => (t.startsWith(`[`) ? t : fo(e?.id ?? `?`, t))),
    errors: t,
  };
}
function Po(e, t) {
  e.reasons.set(t, (e.reasons.get(t) ?? 0) + 1);
}
function Fo(e, t) {
  return {
    minX: Math.min(e.minX, t.minX),
    minZ: Math.min(e.minZ, t.minZ),
    maxX: Math.max(e.maxX, t.maxX),
    maxZ: Math.max(e.maxZ, t.maxZ),
  };
}
function Io(e) {
  let t = Math.round(e * 1e6) / 1e6;
  return Object.is(t, -0) ? 0 : t;
}
function Lo(e) {
  return [...new Set(e)];
}
function Ro(e) {
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
function zo(e, t = { calls: 0, tris: 0 }) {
  if (((t.calls = 0), (t.tris = 0), !e)) return t;
  let n = (e) => {
    if (!e.visible) return;
    let r = e;
    if (r.isMesh && r.geometry) {
      let e = Ro(r.geometry);
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
function Bo(e, t) {
  return e === `far` ? null : ft[t][e];
}
function Vo(e, t, n) {
  let r = Bo(e, t);
  if (!r) return null;
  let i = [];
  return (
    n.calls > r.calls && i.push(`${n.calls} calls > ${r.calls}`),
    n.tris > r.tris && i.push(`${n.tris} tris > ${r.tris}`),
    i.length ? `${e}/${t}: ${i.join(`, `)}` : null
  );
}
var Ho = { menu: 0, decal: 1, other: 1, plaque: 2, signH: 3, signV: 9 };
function Uo(e) {
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
var Wo = class {
    buf = new Float64Array(4096);
  },
  Go = [
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
  Ko = 1,
  qo = 2,
  Jo = 3,
  Yo = 4,
  Xo = 5,
  Zo = 6,
  Qo = 7,
  $o = 8,
  es = 9,
  ts = 10,
  ns = 11,
  rs = 12,
  is = 13,
  as = 14,
  os = 15,
  ss = 16,
  cs = 17,
  ls = 18,
  us = 19,
  ds = 20,
  fs = 21,
  ps = 22,
  ms = 23,
  hs = 24,
  gs = 25,
  _s = 26,
  vs = 27,
  ys = 28,
  bs = 29,
  xs = 30,
  Ss = 31,
  Cs = 32,
  ws = 33,
  Ts = 34,
  Es = 35,
  Ds = 36,
  Os = 37,
  ks = 38,
  As = 39,
  js = 40,
  Ms = 41,
  Ns = 42,
  Ps =
    `fillStyle.strokeStyle.lineWidth.lineCap.lineJoin.miterLimit.lineDashOffset.font.textAlign.textBaseline.direction.letterSpacing.wordSpacing.fontKerning.globalAlpha.globalCompositeOperation.shadowBlur.shadowColor.shadowOffsetX.shadowOffsetY.imageSmoothingEnabled.imageSmoothingQuality.filter.fontStretch.fontVariantCaps.textRendering.lang`.split(
      `.`,
    ),
  Fs = {};
for (let e = 0; e < Ps.length; e++) Fs[Ps[e]] = e;
