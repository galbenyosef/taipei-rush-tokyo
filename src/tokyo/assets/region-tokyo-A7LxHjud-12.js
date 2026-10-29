// tokyo/assets/region-tokyo-A7LxHjud 12 — push
// Lines 5285-5422 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function Mne(e) {
  let t = [];
  return e
    .replace(jne, (e) => `\u0000${t.push(e) - 1}\u0000`)
    .replace(Ane, (e) => di[e] ?? e)
    .replace(/\u0000(\d+)\u0000/g, (e, n) => t[+n]);
}
var pi = {},
  mi = [],
  hi = (e, [t, n, r, i]) => {
    let a = { ja: t, review: `approved` };
    (n != null && (a.zh = n),
      r != null && (a.en = r),
      (pi[e] = i ? { ...a, ...i } : a));
  };
function gi(e, t) {
  let n = `trade.${e}`;
  hi(`${n}.name`, [t.name[0], t.name[1], t.name[2], { ui: !0 }]);
  let r = (t.shops ?? []).map(
      ([e, t, r, i], a) => (
        hi(`${n}.shop.${a + 1}`, [
          e,
          t,
          r,
          {
            note: i ? `shop-name pattern, {name} = a '${i}' stem` : `shop name`,
          },
        ]),
        { key: `${n}.shop.${a + 1}`, stem: i }
      ),
    ),
    i = [];
  for (let [e, r] of Object.entries(t.signs ?? {}))
    (hi(`${n}.sign.${e}`, r), i.push(`${n}.sign.${e}`));
  i.push(...(t.uses ?? []));
  let a = [];
  for (let [e, [r, i, o, s]] of Object.entries(t.items ?? {}))
    (hi(`${n}.item.${e}`, [r, o, s]),
      a.push({ key: `${n}.item.${e}`, price: i }));
  mi.push({
    id: e,
    name: `${n}.name`,
    genres: t.genres,
    tone: t.tone,
    font: t.font ?? `sans`,
    floor: t.floor ?? `street`,
    chain: t.chain,
    names: r,
    signs: i,
    items: a,
  });
}
var _i = { dir: `v` },
  vi = { dir: `hv` },
  Nne = { tone: `casual` },
  yi = { tone: `honorific` },
  bi = {
    kanji: [
      [`一心`, `一心`, `Isshin`],
      [`喜楽`, `喜樂`, `Kiraku`],
      [`千成`, `千成`, `Sennari`],
      [`若竹`, `若竹`, `Wakatake`],
      [`松葉`, `松葉`, `Matsuba`],
      [`丸幸`, `丸幸`, `Maruko`],
      [`福徳`, `福德`, `Fukutoku`],
      [`富久`, `富久`, `Fuku`],
      [`春日`, `春日`, `Kasuga`],
      [`宝来`, `寶來`, `Horai`],
      [`万福`, `萬福`, `Manpuku`],
      [`三好`, `三好`, `Miyoshi`],
      [`吉祥`, `吉祥`, `Kissho`],
      [`寿`, `壽`, `Kotobuki`],
      [`東雲`, `東雲`, `Shinonome`],
      [`楓`, `楓`, `Kaede`],
    ],
    kana: [
      [`まるや`, `丸屋`, `Maruya`],
      [`さくら`, `櫻`, `Sakura`],
      [`ひばり`, `雲雀`, `Hibari`],
      [`みどり`, `綠`, `Midori`],
      [`こころ`, `心`, `Kokoro`],
      [`ふくや`, `福屋`, `Fukuya`],
      [`つばめ`, `燕`, `Tsubame`],
      [`かもめ`, `海鷗`, `Kamome`],
      [`すずめ`, `小麻雀`, `Suzume`],
      [`たぬき`, `狸貓`, `Tanuki`],
    ],
    surname: [
      [`佐藤`, `佐藤`, `Sato`],
      [`鈴木`, `鈴木`, `Suzuki`],
      [`高橋`, `高橋`, `Takahashi`],
      [`田中`, `田中`, `Tanaka`],
      [`渡辺`, `渡邊`, `Watanabe`],
      [`伊藤`, `伊藤`, `Ito`],
      [`中村`, `中村`, `Nakamura`],
      [`小林`, `小林`, `Kobayashi`],
      [`加藤`, `加藤`, `Kato`],
      [`斎藤`, `齋藤`, `Saito`],
      [`井上`, `井上`, `Inoue`],
      [`清水`, `清水`, `Shimizu`],
      [`山田`, `山田`, `Yamada`],
      [`森`, `森`, `Mori`],
      [`池田`, `池田`, `Ikeda`],
      [`橋本`, `橋本`, `Hashimoto`],
      [`石井`, `石井`, `Ishii`],
      [`岡田`, `岡田`, `Okada`],
    ],
    mama: [
      [`ゆかり`, `Yukari`, `Yukari`],
      [`恵`, `惠`, `Megumi`],
      [`純`, `純`, `Jun`],
      [`葵`, `葵`, `Aoi`],
      [`みゆき`, `Miyuki`, `Miyuki`],
      [`舞`, `舞`, `Mai`],
      [`京子`, `京子`, `Kyoko`],
      [`薫`, `薰`, `Kaoru`],
      [`茜`, `茜`, `Akane`],
      [`千代`, `千代`, `Chiyo`],
    ],
    latin: [
      [`Lumière`, `Lumière`, `Lumière`],
      [`Bloom`, `Bloom`, `Bloom`],
      [`Forest`, `Forest`, `Forest`],
      [`Luce`, `Luce`, `Luce`],
      [`Mimosa`, `Mimosa`, `Mimosa`],
      [`Oak`, `Oak`, `Oak`],
      [`Nest`, `Nest`, `Nest`],
      [`Juniper`, `Juniper`, `Juniper`],
      [`Calme`, `Calme`, `Calme`],
      [`Bonheur`, `Bonheur`, `Bonheur`],
      [`Kaze`, `Kaze`, `Kaze`],
      [`Tsubaki`, `Tsubaki`, `Tsubaki`],
    ],
  };
for (let [e, t] of Object.entries(bi))
  t.forEach(([t, n, r], i) =>
    hi(`trade.stem.${e}.${i + 1}`, [t, n, r, { note: `name stem (${e})` }]),
  );
