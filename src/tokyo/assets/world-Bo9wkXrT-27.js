// tokyo/assets/world-Bo9wkXrT 27 — math
// Lines 8059-8268 of readable/tokyo/assets/world-Bo9wkXrT.pretty.js (statement-aligned).
function So(e) {
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
function Co(e, t, n, r, i) {
  let a = r.full,
    o = () => ({ zh: a.zh, en: a.en, ...(a.ja ? { ja: a.ja } : {}) });
  if (Ei(t) && !i) return o();
  if (i) {
    let e = So(i);
    return { zh: `${r.full.zh}${e.zh}`, en: `${e.en}${r.full.en}` };
  }
  let s = e;
  if (typeof s.address == `function`) {
    let e = s.address(t, n.x, n.z);
    if (e && e.zh) return { zh: e.zh, en: e.en, ...(e.ja ? { ja: e.ja } : {}) };
  }
  return o();
}
function wo(e, t, n, r) {
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
    warnings: Oo(n).map((t) => (t.startsWith(`[`) ? t : no(e?.id ?? `?`, t))),
    errors: t,
  };
}
function To(e, t) {
  e.reasons.set(t, (e.reasons.get(t) ?? 0) + 1);
}
function Eo(e, t) {
  return {
    minX: Math.min(e.minX, t.minX),
    minZ: Math.min(e.minZ, t.minZ),
    maxX: Math.max(e.maxX, t.maxX),
    maxZ: Math.max(e.maxZ, t.maxZ),
  };
}
function Do(e) {
  let t = Math.round(e * 1e6) / 1e6;
  return Object.is(t, -0) ? 0 : t;
}
function Oo(e) {
  return [...new Set(e)];
}
function ko(e) {
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
function Ao(e, t = { calls: 0, tris: 0 }) {
  if (((t.calls = 0), (t.tris = 0), !e)) return t;
  let n = (e) => {
    if (!e.visible) return;
    let r = e;
    if (r.isMesh && r.geometry) {
      let e = ko(r.geometry);
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
function jo(e, t) {
  return e === `far` ? null : Hr[t][e];
}
function Mo(e, t, n) {
  let r = jo(e, t);
  if (!r) return null;
  let i = [];
  return (
    n.calls > r.calls && i.push(`${n.calls} calls > ${r.calls}`),
    n.tris > r.tris && i.push(`${n.tris} tris > ${r.tris}`),
    i.length ? `${e}/${t}: ${i.join(`, `)}` : null
  );
}
var No = { menu: 0, decal: 1, other: 1, plaque: 2, signH: 3, signV: 9 };
function Po(e) {
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
var Fo = class {
    buf = new Float64Array(4096);
  },
  Io = [
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
  Lo = 1,
  Ro = 2,
  zo = 3,
  Bo = 4,
  Vo = 5,
  Ho = 6,
  Uo = 7,
  Wo = 8,
  Go = 9,
  Ko = 10,
  qo = 11,
  Jo = 12,
  Yo = 13,
  Xo = 14,
  Zo = 15,
  Qo = 16,
  $o = 17,
  es = 18,
  ts = 19,
  ns = 20,
  rs = 21,
  is = 22,
  as = 23,
  os = 24,
  ss = 25,
  cs = 26,
  ls = 27,
  us = 28,
  ds = 29,
  fs = 30,
  ps = 31,
  ms = 32,
  hs = 33,
  gs = 34,
  _s = 35,
  vs = 36,
  ys = 37,
  bs = 38,
  xs = 39,
  Ss = 40,
  Cs = 41,
  ws = 42,
  Ts =
    `fillStyle.strokeStyle.lineWidth.lineCap.lineJoin.miterLimit.lineDashOffset.font.textAlign.textBaseline.direction.letterSpacing.wordSpacing.fontKerning.globalAlpha.globalCompositeOperation.shadowBlur.shadowColor.shadowOffsetX.shadowOffsetY.imageSmoothingEnabled.imageSmoothingQuality.filter.fontStretch.fontVariantCaps.textRendering.lang`.split(
      `.`,
    ),
  Es = {};
for (let e = 0; e < Ts.length; e++) Es[Ts[e]] = e;
