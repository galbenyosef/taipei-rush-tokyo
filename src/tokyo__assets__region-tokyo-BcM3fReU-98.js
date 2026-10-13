// tokyo__assets__region-tokyo-BcM3fReU 98 — sidewalk
// Lines 46812-47160 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function JS(e) {
  let t = qS;
  return (
    e.markFlush((n) => {
      if (
        (n.kind !== `street` && n.kind !== `lane`) ||
        n.pedestrian ||
        2 * n.halfTotal > t.maxWidth + 1e-6 ||
        t.kerbed.includes(n.id) ||
        (n.major && !n.unnamed)
      )
        return !1;
      let r = n.axis === `x` ? (n.from + n.to) / 2 : n.at,
        i = n.axis === `x` ? n.at : (n.from + n.to) / 2;
      return t.districts.includes(e.districtAt(r, i).id);
    }),
    e
  );
}
var YS = {
  boulevard: { lanes: 3, median: 2, sidewalk: 6, speed: 50 },
  arterial: { lanes: 2, median: 1.5, sidewalk: 5, speed: 40 },
  street: { lanes: 1, median: 0, sidewalk: 3, speed: 30 },
  lane: { lanes: 1, median: 0, sidewalk: 2, speed: 20 },
};
function XS(e, t, n, r, i, a, o, s = {}) {
  let c = YS[o];
  return {
    id: e,
    name: t ?? { ja: ``, zh: ``, en: `` },
    axis: n,
    at: r,
    from: i,
    to: a,
    kind: o,
    lanesPerDir: c.lanes,
    median: c.median,
    sidewalk: c.sidewalk,
    speedKmh: c.speed,
    ...(t ? {} : { unnamed: !0 }),
    ...s,
  };
}
var ZS = (e, t, n, r, i, a, o) => XS(e, t, `z`, n, r, i, a, o),
  QS = (e, t, n, r, i, a, o) => XS(e, t, `x`, n, r, i, a, o),
  $S = {
    chuo: G(`中央通り`, `中央通`, `Chuo-dori`),
    showa: G(`昭和通り`, `昭和通`, `Showa-dori`),
    sotobori: G(`外堀通り`, `外堀通`, `Sotobori-dori`),
    hibiya: G(`日比谷通り`, `日比谷通`, `Hibiya-dori`),
    hongo: G(`本郷通り`, `本鄉通`, `Hongo-dori`),
    marunouchiNaka: G(`丸の内仲通り`, `丸之內仲通`, `Marunouchi Naka-dori`),
    otemachiNaka: G(`大手町仲通り`, `大手町仲通`, `Otemachi Naka-dori`),
    namiki: G(`並木通り`, `並木通`, `Namiki-dori`),
    azuma: G(`あづま通り`, `吾妻通`, `Azuma-dori`),
    kobikicho: G(`木挽町通り`, `木挽町通`, `Kobikicho-dori`),
    shinOhashi: G(`新大橋通り`, `新大橋通`, `Shin-Ohashi-dori`),
    teppozu: G(`鉄砲洲通り`, `鐵砲洲通`, `Teppozu-dori`),
    yaesuNaka: G(`八重洲仲通り`, `八重洲仲通`, `Yaesu Naka-dori`),
    kiyosubashi: G(`清洲橋通り`, `清洲橋通`, `Kiyosubashi-dori`),
    edo: G(`江戸通り`, `江戶通`, `Edo-dori`),
    daiichiKeihin: G(`第一京浜`, `第一京濱`, `Daiichi-Keihin`),
    kototoi: G(`言問通り`, `言問通`, `Kototoi-dori`),
    asakusa: G(`浅草通り`, `淺草通`, `Asakusa-dori`),
    kasuga: G(`春日通り`, `春日通`, `Kasuga-dori`),
    kuramaebashi: G(`蔵前橋通り`, `藏前橋通`, `Kuramaebashi-dori`),
    myojin: G(`神田明神通り`, `神田明神通`, `Kanda-Myojin-dori`),
    awajizaka: G(`淡路坂`, `淡路坂`, `Awajizaka`),
    yanagiwara: G(`柳原通り`, `柳原通`, `Yanagiwara-dori`),
    yasukuni: G(`靖国通り`, `靖國通`, `Yasukuni-dori`),
    keisatsu: G(`神田警察通り`, `神田警察通`, `Kanda-Keisatsu-dori`),
    eitai: G(`永代通り`, `永代通`, `Eitai-dori`),
    gyoko: G(`行幸通り`, `行幸通`, `Gyoko-dori`),
    yaesu: G(`八重洲通り`, `八重洲通`, `Yaesu-dori`),
    babasaki: G(`馬場先通り`, `馬場先通`, `Babasaki-dori`),
    kajibashi: G(`鍛冶橋通り`, `鍛冶橋通`, `Kajibashi-dori`),
    yanagi: G(`柳通り`, `柳通`, `Yanagi-dori`),
    marronnier: G(`マロニエ通り`, `馬羅尼爾通`, `Marronnier-dori`),
    matsuya: G(`松屋通り`, `松屋通`, `Matsuya-dori`),
    harumi: G(`晴海通り`, `晴海通`, `Harumi-dori`),
    miyuki: G(`みゆき通り`, `御幸通`, `Miyuki-dori`),
    kojunsha: G(`交詢社通り`, `交詢社通`, `Kojunsha-dori`),
    hanatsubaki: G(`花椿通り`, `花椿通`, `Hanatsubaki-dori`),
    ameyoko: G(`アメ横`, `阿美橫`, `Ameyoko`),
  },
  eC = { median: 10, sidewalk: 5 },
  tC = { ...eC, elevated: `expressway` },
  nC = [
    ZS(`hongo`, $S.hongo, -380, -950, -165, `arterial`),
    ZS(`hibiya`, $S.hibiya, -315, -165, 820, `boulevard`, {
      median: 3,
      sidewalk: 6,
    }),
    ZS(`kanda-nishikicho`, null, -315, -580, -195, `street`),
    ZS(`yushima`, null, -315, -950, -612, `street`),
    ZS(`chuo-ueno`, $S.chuo, -190, -1170, -770, `boulevard`, { sidewalk: 6 }),
    ZS(`sotokanda-w`, null, -190, -770, -612, `street`),
    ZS(`awajicho`, null, -190, -580, -195, `street`),
    ZS(`otemachi-naka`, $S.otemachiNaka, -190, -165, -110, `street`, {
      sidewalk: 5,
    }),
    ZS(`marunouchi-naka`, $S.marunouchiNaka, -190, -110, 355, `street`, {
      sidewalk: 6,
    }),
    ZS(`uchisaiwaicho`, null, -190, 355, 820, `street`),
    ZS(`ameyoko`, $S.ameyoko, -145, -1170, -950, `lane`, { pedestrian: !0 }),
    ZS(`ueno-3`, null, -145, -950, -770, `street`),
    ZS(`chuo-akihabara`, $S.chuo, -145, -770, -420, `boulevard`, {
      sidewalk: 6,
    }),
    ZS(`uchikanda`, null, -145, -420, -195, `street`),
    ZS(`otemachi-2`, null, -145, -165, -110, `street`),
    ZS(`marunouchi-2`, null, -145, -110, 125, `street`, { sidewalk: 5 }),
    ZS(`shimbashi-w`, null, -145, 355, 620, `street`),
    ZS(`sotobori-ginza`, $S.sotobori, -15, 125, 620, `arterial`),
    ZS(`daiichi-keihin`, $S.daiichiKeihin, -15, 620, 820, `boulevard`, {
      sidewalk: 5,
    }),
    ZS(`nihonbashi-gado`, null, -15, -165, -110, `lane`),
    ZS(`kanda-gado`, null, -15, -420, -195, `lane`),
    ZS(`kanda-sudacho-e`, null, -15, -580, -420, `lane`),
    ZS(`akihabara-e`, null, -15, -1520, -612, `street`),
    ZS(`namiki`, $S.namiki, 30, 125, 620, `street`),
    ZS(`shiodome-30`, null, 30, 620, 690, `lane`),
    ZS(`honkokucho`, null, 30, -165, -110, `lane`),
    ZS(`kajicho-w`, null, 30, -420, -195, `lane`),
    ZS(`iwamotocho-w`, null, 30, -580, -420, `lane`),
    ZS(`sakumacho`, null, 30, -1520, -612, `lane`, { sidewalk: 1.5 }),
    ZS(`chuo-ginza`, $S.chuo, 75, 125, 620, `boulevard`, { sidewalk: 7 }),
    ZS(`shiodome-75`, null, 75, 620, 690, `street`),
    ZS(`sotobori-yaesu`, $S.sotobori, 75, -195, 125, `arterial`),
    ZS(`kajicho`, null, 75, -510, -195, `street`),
    ZS(`showa-ueno`, $S.showa, 75, -1520, -510, `boulevard`, tC),
    ZS(`azuma`, $S.azuma, 128, 125, 620, `lane`),
    ZS(`shiodome-128`, null, 128, 620, 690, `lane`),
    ZS(`yaesu-w`, null, 128, -165, 125, `street`),
    ZS(`muromachi-w`, null, 128, -420, -195, `street`),
    ZS(`iwamotocho`, null, 128, -580, -420, `street`),
    ZS(`taito-w`, null, 128, -1520, -612, `street`),
    ZS(`showa-ginza`, $S.showa, 175, 125, 690, `boulevard`, eC),
    ZS(`yaesu-naka`, $S.yaesuNaka, 175, -110, 125, `street`, { sidewalk: 4 }),
    ZS(`nihonbashi-w`, null, 175, -165, -110, `street`),
    ZS(`muromachi`, null, 175, -420, -195, `street`),
    ZS(`kiyosubashi`, $S.kiyosubashi, 175, -950, -420, `arterial`),
    ZS(`kojima`, null, 175, -1520, -950, `street`),
    ZS(`kobikicho`, $S.kobikicho, 250, 125, 690, `lane`),
    ZS(`chuo-nihonbashi`, $S.chuo, 250, -420, 125, `boulevard`, {
      sidewalk: 7,
    }),
    ZS(`higashi-kanda-w`, null, 250, -580, -420, `street`),
    ZS(`torigoe-w`, null, 250, -1520, -612, `street`),
    ZS(`shin-ohashi-tsukiji`, $S.shinOhashi, 320, 125, 690, `arterial`),
    ZS(`showa-nihonbashi`, $S.showa, 320, -165, 125, `boulevard`, eC),
    ZS(`showa-edobashi`, $S.showa, 320, -510, -165, `boulevard`, tC),
    ZS(`higashi-kanda`, null, 320, -580, -510, `street`),
    ZS(`torigoe`, null, 320, -1520, -612, `street`),
    ZS(`teppozu`, $S.teppozu, 450, 125, 355, `street`),
    ZS(`tsukiji-6`, null, 450, 355, 620, `street`),
    ZS(`shin-ohashi-ningyocho`, $S.shinOhashi, 450, -420, 125, `arterial`),
    ZS(`edo-asakusabashi`, $S.edo, 450, -1520, -420, `arterial`),
    ZS(`sumida-riverside`, null, 545, -1520, 820, `street`),
    QS(`kototoi`, $S.kototoi, -1440, -480, 560, `arterial`),
    QS(`asakusa`, $S.asakusa, -1170, -190, 560, `arterial`),
    QS(`kasuga`, $S.kasuga, -950, -480, 560, `arterial`),
    QS(`kuramaebashi`, $S.kuramaebashi, -770, -480, 560, `arterial`),
    QS(`kanda-myojin`, $S.myojin, -700, -380, -145, `street`),
    QS(`sotobori-ochanomizu`, $S.sotobori, -612, -480, -145, `arterial`),
    QS(`kandagawa-n`, null, -612, -145, 545, `street`),
    QS(`kandagawa-s-w`, null, -580, -480, -380, `street`),
    QS(`awajizaka`, $S.awajizaka, -580, -380, -145, `street`),
    QS(`yanagiwara`, $S.yanagiwara, -580, -145, 545, `street`),
    QS(`yasukuni`, $S.yasukuni, -510, -480, 560, `boulevard`, { sidewalk: 5 }),
    QS(`kanda-keisatsu`, $S.keisatsu, -420, -480, -145, `street`),
    QS(`chuo-kanda`, $S.chuo, -420, -145, 250, `boulevard`, { sidewalk: 6 }),
    QS(`edo-kodemmacho`, $S.edo, -420, 250, 450, `arterial`),
    QS(`higashi-nihonbashi`, null, -420, 450, 545, `street`),
    QS(`nihonbashigawa-n`, null, -195, -480, 545, `street`),
    QS(`nihonbashigawa-s`, null, -165, -480, 545, `street`),
    QS(`eitai`, $S.eitai, -110, -315, 560, `boulevard`, { sidewalk: 5 }),
    QS(`gyoko`, $S.gyoko, 0, -315, -80, `boulevard`, {
      lanesPerDir: 2,
      median: 16,
      sidewalk: 7,
      treeMedian: !0,
    }),
    QS(`yaesu`, $S.yaesu, 0, 75, 545, `boulevard`, {
      median: 6,
      sidewalk: 5,
      treeMedian: !0,
    }),
    QS(`babasaki`, $S.babasaki, 125, -315, -15, `arterial`),
    QS(`kajibashi-w`, $S.kajibashi, 125, -15, 75, `arterial`),
    QS(`chuo-kyobashi`, $S.chuo, 125, 75, 250, `boulevard`, { sidewalk: 6 }),
    QS(`kajibashi-e`, $S.kajibashi, 125, 250, 560, `arterial`),
    QS(`yanagi`, $S.yanagi, 185, -15, 250, `lane`),
    QS(`marronnier`, $S.marronnier, 245, -15, 250, `street`),
    QS(`matsuya`, $S.matsuya, 300, -15, 250, `lane`),
    QS(`harumi`, $S.harumi, 355, -480, 560, `boulevard`),
    QS(`miyuki`, $S.miyuki, 410, -315, 250, `street`),
    QS(`kojunsha`, $S.kojunsha, 465, -15, 250, `lane`),
    QS(`hanatsubaki`, $S.hanatsubaki, 520, -15, 250, `street`),
    QS(`sotobori-shimbashi`, $S.sotobori, 620, -480, -15, `arterial`),
    QS(`shiodome`, null, 620, -15, 545, `street`),
    QS(`shin-ohashi-shiodome`, $S.shinOhashi, 690, -15, 320, `arterial`),
  ],
  rC = [],
  iC = 30;
function aC(e, t) {
  for (let n = 0; n < WS.length; n++) {
    let r = WS[n];
    if (e < r.minX || e >= r.maxX || t < r.minZ || t >= r.maxZ) continue;
    let i = 0,
      a = r.minX,
      o = r.maxX,
      s = r.minZ;
    r.maxZ;
    let c = r.axis === `x`,
      l = c ? e : t,
      u = r.first ?? 1;
    if (Array.isArray(r.chome)) {
      let e = r.chome,
        t = 0;
      for (; t + 2 < e.length && l >= e[t + 1];) t++;
      ((i = u + t), c ? ((a = e[t]), (o = e[t + 1])) : ((s = e[t]), e[t + 1]));
    } else if (r.chome > 0) {
      let e = c ? r.minX : r.minZ,
        t = ((c ? r.maxX : r.maxZ) - e) / r.chome,
        n = Math.max(0, Math.min(r.chome - 1, Math.floor((l - e) / t)));
      ((i = u - 1 + (r.rev ? r.chome - n : n + 1)),
        c
          ? ((a = e + n * t), (o = e + (n + 1) * t))
          : ((s = e + n * t), e + (n + 1) * t));
    }
    let d = Math.max(1, Math.ceil((o - a) / iC)),
      f = Math.max(0, Math.min(d - 1, Math.floor((e - a) / iC))),
      p = Math.max(0, Math.floor((t - s) / iC)),
      m = ((p * d + (p % 2 == 0 ? f : d - 1 - f)) % 99) + 1;
    return { idx: n, chome: i, ban: m };
  }
  return null;
}
function oC(e, t) {
  if (!t) return e.town;
  let n = ag[t] ?? String(t);
  return {
    ja: `${e.town.ja}${n}丁目`,
    zh: `${e.town.zh}${n}丁目`,
    en: `${e.town.en} ${t}-chome`,
  };
}
function sC(e, t) {
  for (let n of BS)
    if (e >= n.minX && e < n.maxX && t >= n.minZ && t < n.maxZ)
      return zS.find((e) => e.id === n.id).name;
  for (let n of zS)
    if (e >= n.minX && e < n.maxX && t >= n.minZ && t < n.maxZ) return n.name;
  return zS[zS.length - 1].name;
}
function cC(e, t) {
  let n = aC(e, t);
  if (n) return oC(WS[n.idx], n.chome);
  let r = sC(e, t);
  return { ja: r.ja ?? r.zh, zh: r.zh, en: r.en };
}
function lC(e) {
  return !!e.unnamed || !!e.lane || !e.name.zh;
}
function uC(e, t, n) {
  let r = cC(t, n);
  if (lC(e))
    return {
      zh: r.zh,
      sec: ``,
      en: r.en,
      n: 0,
      ja: r.ja,
      full: { zh: r.zh, en: r.en, ja: r.ja },
    };
  let i = e.name,
    a = i.ja || i.zh;
  return {
    zh: i.zh,
    sec: ``,
    en: i.en,
    n: 0,
    ja: a,
    full: {
      zh: `${i.zh}・${r.zh}`,
      en: `${i.en}, ${r.en}`,
      ja: `${a}・${r.ja}`,
    },
  };
}
var dC = (e) =>
  e >= 1e3
    ? {
        idx: Math.floor(e / 1e3) - 1,
        chome: Math.floor(e / 100) % 10,
        ban: e % 100,
      }
    : null;
function fC(e, t, n) {
  let r = sg(e, KS) + 2,
    i = aC(
      e.axis === `x` ? t : e.at + n * r,
      e.axis === `x` ? e.at + n * r : t,
    );
  return i ? ((i.idx + 1) * 10 + i.chome) * 100 + i.ban : 0;
}
function pC(e, t, n) {
  let r = og[e.ward],
    i = t ? ` ${ag[t] ?? t}丁目` : ``;
  return {
    ja: `${r.ja} ${e.town.ja}${i} ${n}`,
    zh: `${r.zh} ${e.town.zh}${i} ${n}`,
    en: t ? `${t}-${n} ${e.town.en}, ${r.en}` : `${n} ${e.town.en}, ${r.en}`,
  };
}
function mC(e, t) {
  let n = dC(t),
    r = n ? WS[n.idx] : void 0;
  if (!n || !r)
    return {
      ja: `東京都 ${e.full.ja ?? e.full.zh}`,
      zh: `東京都 ${e.full.zh}`,
      en: `${e.full.en}, Tokyo`,
    };
  let i = og[r.ward],
    a = n.chome ? `${ag[n.chome] ?? n.chome}丁目` : ``;
  return {
    ja: `${i.ja}${r.town.ja}${a}${n.ban}番`,
    zh: `${i.zh}${r.town.zh}${a}${n.ban}番`,
    en: n.chome
      ? `${n.chome}-${n.ban} ${r.town.en}, ${i.en}`
      : `${n.ban} ${r.town.en}, ${i.en}`,
  };
}
function hC(e, t) {
  let n = aC(e, t);
  if (!n) return null;
  let r = WS[n.idx];
  return {
    ward: og[r.ward],
    town: r.town,
    chome: n.chome,
    ban: n.ban,
    plate: pC(r, n.chome, n.ban),
  };
}
