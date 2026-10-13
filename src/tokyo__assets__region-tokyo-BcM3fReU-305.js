// tokyo__assets__region-tokyo-BcM3fReU 305 — math
// Lines 119827-119942 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var W7 = `tokyo:side_delivery`,
  G7 = 15073298,
  K7 = (e, t, n, r = 1) => ({
    name: { zh: e, en: t, ja: n },
    voice: `ja`,
    pitch: r,
  }),
  q7 = K7(
    `外送城 佐佐木班長`,
    `Sasaki (Demae-jo captain)`,
    `出前城の佐々木班長`,
    1.02,
  ),
  J7 = K7(`店員`, `Shop staff`, `店員さん`, 1.1),
  Y7 = K7(`客人`, `Customer`, `お客さん`, 1.08),
  X7 = {
    captain: () =>
      Ht(`courier`, `tk-side-delivery-captain`, {
        top: { style: `hoodie`, color: G7, color2: 11534350 },
        bottom: { style: `track`, color: 1842208 },
        acc: zt({ kind: `cap`, color: G7 }),
      }),
    cook: () =>
      Ht(`vendor`, `tk-side-delivery-cook`, {
        top: { style: `shirt`, color: 16053488, sleeve: `long` },
        bottom: { style: `slacks`, color: 2763312 },
        acc: zt(
          { kind: `headband`, color: 15921902 },
          { kind: `apron`, color: 2899562 },
        ),
      }),
  },
  Z7 = [
    `office`,
    `student`,
    `grandma`,
    `officeLady`,
    `salaryman`,
    `businesswoman`,
    `hipster`,
  ],
  Q7 = [
    {
      anchor: `tokyo:kanda:hokkai-curry`,
      fx: -455.7,
      fz: -494.7,
      fh: 0,
      name: F(`北海廚房`, `Kitchen Hokkai`, `キッチン北海`),
      dish: F(`炸豬排咖哩兩份`, `two katsu curries`, `カツカレー２つ`),
      call: F(
        `外送城的？讓你久等了！炸豬排咖哩兩份，醬汁很燙，要放平喔！`,
        `Demae-jo? Sorry to keep you! Two katsu curries — the roux is hot, keep them level!`,
        `出前城さん？お待たせしました！カツカレー２つです。ルーが熱いんで、水平にお願いしますね！`,
      ),
    },
    {
      anchor: `tokyo:kanda:matsuba`,
      fx: -184.2,
      fz: -532,
      fh: -Math.PI / 2,
      name: F(`神田 松葉`, `Kanda Matsuba`, `神田 まつ葉`),
      dish: F(`天婦羅蕎麥涼麵`, `a tempura zaru soba`, `天ざる`),
      call: F(
        `天婦羅蕎麥涼麵一份！醬汁另外裝了，別灑出來。`,
        `One tempura zaru soba! The dipping sauce is in its own cup — don’t spill it.`,
        `天ざる一枚、上がりました！つゆは別にしてありますから、こぼさないでね。`,
      ),
    },
    {
      anchor: `tokyo:kanda:gado-kajicho`,
      fx: -10.2,
      fz: -353.75,
      fh: -Math.PI / 2,
      name: F(`大眾酒場 鍛冶町`, `Taishu Sakaba Kajicho`, `大衆酒場 かじ町`),
      dish: F(`炸雞定食`, `a karaage set meal`, `唐揚げ定食`),
      call: F(
        `炸雞定食好了！味噌湯蓋子壓緊了，路上小心。`,
        `Karaage set, ready! The miso soup lid is on tight — careful out there.`,
        `唐揚げ定食、お待ち！味噌汁のフタはしっかり閉めたから、気をつけてね。`,
      ),
    },
  ],
  $7 = { minX: -470, maxX: 120, minZ: -760, maxZ: -210 },
  gre = [``, `一`, `二`, `三`, `四`, `五`, `六`, `七`, `八`, `九`];
function _re(e, t) {
  let n = e.chome > 0 ? `${gre[e.chome] ?? e.chome}丁目` : ``,
    r = e.town.ja ?? e.town.zh;
  return {
    zh: `${e.town.zh}${n}${e.ban}番${t}號`,
    en:
      e.chome > 0
        ? `${e.chome}-${e.ban}-${t} ${e.town.en}`
        : `${e.ban}-${t} ${e.town.en}`,
    ja: `${r}${n}${e.ban}番${t}号`,
  };
}
function e9(e, t, n, r, i, a, o) {
  let s = e.ctx.plan;
  for (let c = 0; c < 60; c++) {
    let c = t.range(0, Math.PI * 2),
      l = t.range(i, a),
      u = Math.max($7.minX, Math.min($7.maxX, n + Math.sin(c) * l)),
      d = Math.max($7.minZ, Math.min($7.maxZ, r - Math.cos(c) * l)),
      f = rt(s, u, d);
    if (!f.road) continue;
    let p = Math.hypot(f.x - n, f.z - r);
    if (
      !(p < i * 0.75 || p > a * 1.3) &&
      s.surfaceAt(f.x, f.z) === `sidewalk` &&
      x2(e.ctx, f.x, f.z) &&
      !(o && o(f.x, f.z))
    )
      return f;
  }
  return rt(s, n + i, r);
}
