// tokyo/assets/region-tokyo-55J_WESF 31 — math
// Lines 17450-17741 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
for (let e of lre)
  for (let [t, n] of Object.entries(e)) (vo.has(t), vo.set(t, n));
function yo(e) {
  return vo.get(e) || { ja: `` };
}
function L(e) {
  return yo(e).ja;
}
function bo(e, t) {
  return jr(yo(e).ja, t);
}
function xo(e, t) {
  let n = yo(e),
    r = (e) => (t ? jr(e, t) : e);
  return { zh: r(n.zh ?? n.ja), en: r(n.en ?? n.ja) };
}
var So = (e) => vo.has(e);
function Co() {
  return [...vo.keys()];
}
var wo = (e) => e.kind === `boulevard` || e.kind === `arterial`,
  To = (e) => e.kind !== `end` && (e.signal || e.roads.some((e) => e.major));
function Eo(e, t, n) {
  if (t.signal || t.kind === `end` || t.kind === `corner`) return !1;
  let r = n.road,
    i = 0,
    a = !1;
  for (let e of t.roads)
    e !== r &&
      e.axis !== r.axis &&
      ((i = Math.max(i, e.halfWidth)), e.major && (a = !0));
  return !i || r.major
    ? !1
    : a || r.halfWidth < i - 0.01
      ? !0
      : r.halfWidth > i + 0.01
        ? !1
        : (ge(t.id, `giveway`) & 1) == (r.axis === `x` ? 0 : 1);
}
var ure = new Set([`chuo-ginza`, `chuo-kyobashi`, `chuo-nihonbashi`]),
  Do = (e, t) => wo(e) && ge(e.id, `bikelane`) % 3 == 0 && t > 40,
  Oo = {
    lat: 12.95,
    half: 1.8,
    parapet: 0.3,
    run: 143,
    merge: 45,
    lead: 8,
    clear: 5,
    slab: 0.5,
    wall: 1.05,
  },
  dre = [
    [`r1-ueno-off`, `off`, `showa-ueno`, -1, -1305],
    [`r1-ueno-on`, `on`, `showa-ueno`, 1, -1440],
  ],
  ko = new WeakMap();
function Ao(e) {
  let t = ko.get(e);
  if (t) return t;
  t = [];
  for (let [n, r, i, a, o] of dre) {
    let s = fre(e, n, r, i, a, o);
    s && t.push(s);
  }
  return (ko.set(e, t), t);
}
function fre(e, t, n, r, i, a) {
  let o = e.roads.find((e) => e.id === r);
  if (!o) return null;
  let s = o.axis,
    c = (e, t) => (s === `x` ? e : t),
    l = e.nodes.find(
      (e) => e.roads.includes(o) && Math.abs(c(e.x, e.z) - a) < 1,
    );
  if (!l) return null;
  let u = (e) => (s === `x` ? e.dx : e.dz) * i > 0.9,
    d = e.links.find(
      (e) =>
        e.road === o && u(e) && (n === `off` ? e.to === l.id : e.from === l.id),
    );
  if (!d) return null;
  let f = n === `off` ? c(d.ex, d.ez) : c(d.sx, d.sz),
    p = n === `on` ? i : -i,
    m = f + p * Oo.lead,
    h = m + p * Oo.run,
    g = h + p * Oo.merge,
    _ = pre(e, s, o.at, h);
  if (!_) return null;
  let v = s === `z` ? -i * e.side : i * e.side,
    y = {
      id: t,
      kind: n,
      road: o,
      axis: s,
      at: o.at,
      travel: i,
      u: p,
      side: v,
      junction: a,
      foot: f,
      start: m,
      top: h,
      gore: g,
      deckY: _.y,
      deckHalf: _.half,
      underLinks: [],
      piers: [],
    },
    b = m + (p * Oo.clear * Oo.run) / _.y,
    x = Math.min(m, b),
    S = Math.max(m, b);
  for (let t of e.links) {
    if (t.road !== o || !u(t)) continue;
    let e = c(t.sx, t.sz),
      n = c(t.ex, t.ez);
    Math.max(e, n) > x && Math.min(e, n) < S && y.underLinks.push(t.id);
  }
  let C = y.underLinks.map((t) => {
    let n = e.links[t],
      r = c(n.sx, n.sz),
      i = c(n.ex, n.ez);
    return [Math.min(r, i) + 2, Math.max(r, i) - 2];
  });
  for (let e = b + p * 6; (h - e) * p > 8; e += p * 20)
    C.some(([t, n]) => e > t && e < n) && y.piers.push(e);
  return y;
}
function pre(e, t, n, r) {
  let i = e.dataset.expressways ?? [];
  for (let e of i)
    if (e.route === `1` && e.levels.length === e.path.length)
      for (let i = 0; i + 1 < e.path.length; i++) {
        let [a, o] = e.path[i],
          [s, c] = e.path[i + 1];
        if (
          !(t === `z`
            ? Math.abs(a - n) < 0.5 && Math.abs(s - n) < 0.5
            : Math.abs(o - n) < 0.5 && Math.abs(c - n) < 0.5)
        )
          continue;
        let l = t === `z` ? o : a,
          u = t === `z` ? c : s;
        if (r < Math.min(l, u) || r > Math.max(l, u)) continue;
        let d = (r - l) / (u - l || 1);
        return {
          y: e.levels[i] + (e.levels[i + 1] - e.levels[i]) * d,
          half: e.halfWidth,
        };
      }
  return null;
}
function jo(e, t) {
  let n = (t - e.start) * e.u;
  return n <= 0 ? 0 : n >= Oo.run ? e.deckY : (e.deckY * n) / Oo.run;
}
function Mo(e, t, n) {
  let r = e.at + e.side * n;
  return e.axis === `z` ? [r, t] : [t, r];
}
function No(e) {
  return [Math.min(e.foot, e.gore), Math.max(e.foot, e.gore)];
}
function Po(e, t, n, r, i) {
  for (let a of Ao(e)) {
    if (a.road !== t || a.side !== n) continue;
    let [e, o] = No(a);
    if (i > e && r < o) return !0;
  }
  return !1;
}
var Fo = new Uint8Array(256);
for (let e = 0; e < 256; e++) Fo[e] = Math.round(255 * (e / 255) ** 2.2);
var R = (e) => Fo[e <= 0 ? 0 : e >= 255 ? 255 : Math.round(e)];
r.add({ 新宿區: `新宿区`, 澀谷區: `渋谷区`, 豐島區: `豊島区` });
function z(e, t, n) {
  return { ja: e, zh: t, en: n };
}
var Io = [`〇`, `一`, `二`, `三`, `四`, `五`, `六`, `七`, `八`, `九`, `十`],
  Lo = {
    chiyoda: z(`千代田区`, `千代田區`, `Chiyoda-ku`),
    chuo: z(`中央区`, `中央區`, `Chuo-ku`),
    minato: z(`港区`, `港區`, `Minato-ku`),
    taito: z(`台東区`, `台東區`, `Taito-ku`),
    bunkyo: z(`文京区`, `文京區`, `Bunkyo-ku`),
    shinjuku: z(`新宿区`, `新宿區`, `Shinjuku-ku`),
    shibuya: z(`渋谷区`, `澀谷區`, `Shibuya-ku`),
    toshima: z(`豊島区`, `豐島區`, `Toshima-ku`),
  };
(Object.fromEntries(
  Object.entries({
    駅: `站`,
    楽: `樂`,
    浜: `濱`,
    区: `區`,
    内: `內`,
    広: `廣`,
    国: `國`,
    蔵: `藏`,
    浅: `淺`,
    伝: `傳`,
    戸: `戶`,
    郷: `鄉`,
    沢: `澤`,
    恵: `惠`,
    図: `圖`,
    学: `學`,
    鉄: `鐵`,
    関: `關`,
    桜: `櫻`,
    稲: `稻`,
    県: `縣`,
    気: `氣`,
    売: `賣`,
    読: `讀`,
    様: `樣`,
    来: `來`,
    両: `兩`,
    薬: `藥`,
    発: `發`,
    総: `總`,
    横: `橫`,
    黒: `黑`,
    当: `當`,
    実: `實`,
    宝: `寶`,
    弁: `辯`,
    万: `萬`,
    与: `與`,
    豊: `豐`,
    亀: `龜`,
    経: `經`,
    続: `續`,
    応: `應`,
    単: `單`,
    戦: `戰`,
    対: `對`,
    掲: `揭`,
    塩: `鹽`,
    団: `團`,
    辺: `邊`,
    斎: `齋`,
    霊: `靈`,
    剣: `劍`,
    険: `險`,
    検: `檢`,
    歳: `歲`,
    帰: `歸`,
    数: `數`,
    観: `觀`,
    庁: `廳`,
    営: `營`,
    転: `轉`,
    軽: `輕`,
    鉱: `鑛`,
    価: `價`,
    児: `兒`,
    写: `寫`,
    画: `畫`,
    静: `靜`,
    渋: `澀`,
    増: `增`,
    弥: `彌`,
    麹: `麴`,
  })
    .filter(([, e]) => e !== `站`)
    .map(([e, t]) => [t, e]),
),
  r.add({
    江戶橋JCT: `江戸橋JCT`,
    寶町: `宝町`,
    一之橋JCT: `一ノ橋JCT`,
    霞關: `霞が関`,
    千鳥之淵: `千鳥ヶ淵`,
    吳服橋: `呉服橋`,
  }));
var Ro = {
  half: 9,
  edge: 0.4,
  parapet: 1.05,
  wall: 2,
  slab: 0.5,
  girder: 1.5,
  fascia: 1.9,
  clear: 5.4,
  roof: 0.6,
  coping: 1.1,
  lanes: [6.6, 3],
};
function zo(e) {
  return Math.max(0.6, Math.min(Ro.girder, e - Ro.slab - 4.2));
}
