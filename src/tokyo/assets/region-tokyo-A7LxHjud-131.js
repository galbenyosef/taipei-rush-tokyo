// tokyo/assets/region-tokyo-A7LxHjud 131 — sidewalk
// Lines 56852-57177 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function Sde(e) {
  let t = xde;
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
var bv = {
    chuo: z(`中央通り`, `中央通`, `Chuo-dori`),
    showa: z(`昭和通り`, `昭和通`, `Showa-dori`),
    sotobori: z(`外堀通り`, `外堀通`, `Sotobori-dori`),
    hibiya: z(`日比谷通り`, `日比谷通`, `Hibiya-dori`),
    hongo: z(`本郷通り`, `本鄉通`, `Hongo-dori`),
    marunouchiNaka: z(`丸の内仲通り`, `丸之內仲通`, `Marunouchi Naka-dori`),
    otemachiNaka: z(`大手町仲通り`, `大手町仲通`, `Otemachi Naka-dori`),
    namiki: z(`並木通り`, `並木通`, `Namiki-dori`),
    azuma: z(`あづま通り`, `吾妻通`, `Azuma-dori`),
    kobikicho: z(`木挽町通り`, `木挽町通`, `Kobikicho-dori`),
    shinOhashi: z(`新大橋通り`, `新大橋通`, `Shin-Ohashi-dori`),
    teppozu: z(`鉄砲洲通り`, `鐵砲洲通`, `Teppozu-dori`),
    yaesuNaka: z(`八重洲仲通り`, `八重洲仲通`, `Yaesu Naka-dori`),
    kiyosubashi: z(`清洲橋通り`, `清洲橋通`, `Kiyosubashi-dori`),
    edo: z(`江戸通り`, `江戶通`, `Edo-dori`),
    daiichiKeihin: z(`第一京浜`, `第一京濱`, `Daiichi-Keihin`),
    kototoi: z(`言問通り`, `言問通`, `Kototoi-dori`),
    asakusa: z(`浅草通り`, `淺草通`, `Asakusa-dori`),
    kasuga: z(`春日通り`, `春日通`, `Kasuga-dori`),
    kuramaebashi: z(`蔵前橋通り`, `藏前橋通`, `Kuramaebashi-dori`),
    myojin: z(`神田明神通り`, `神田明神通`, `Kanda-Myojin-dori`),
    awajizaka: z(`淡路坂`, `淡路坂`, `Awajizaka`),
    yanagiwara: z(`柳原通り`, `柳原通`, `Yanagiwara-dori`),
    yasukuni: z(`靖国通り`, `靖國通`, `Yasukuni-dori`),
    keisatsu: z(`神田警察通り`, `神田警察通`, `Kanda-Keisatsu-dori`),
    eitai: z(`永代通り`, `永代通`, `Eitai-dori`),
    gyoko: z(`行幸通り`, `行幸通`, `Gyoko-dori`),
    yaesu: z(`八重洲通り`, `八重洲通`, `Yaesu-dori`),
    babasaki: z(`馬場先通り`, `馬場先通`, `Babasaki-dori`),
    kajibashi: z(`鍛冶橋通り`, `鍛冶橋通`, `Kajibashi-dori`),
    yanagi: z(`柳通り`, `柳通`, `Yanagi-dori`),
    marronnier: z(`マロニエ通り`, `馬羅尼爾通`, `Marronnier-dori`),
    matsuya: z(`松屋通り`, `松屋通`, `Matsuya-dori`),
    harumi: z(`晴海通り`, `晴海通`, `Harumi-dori`),
    miyuki: z(`みゆき通り`, `御幸通`, `Miyuki-dori`),
    kojunsha: z(`交詢社通り`, `交詢社通`, `Kojunsha-dori`),
    hanatsubaki: z(`花椿通り`, `花椿通`, `Hanatsubaki-dori`),
    ameyoko: z(`アメ横`, `阿美橫`, `Ameyoko`),
  },
  xv = { median: 10, sidewalk: 5 },
  Sv = { ...xv, elevated: `expressway` },
  Cv = [
    mc(`hongo`, bv.hongo, -380, -950, -165, `arterial`),
    mc(`hibiya`, bv.hibiya, -315, -165, 820, `boulevard`, {
      median: 3,
      sidewalk: 6,
    }),
    mc(`kanda-nishikicho`, null, -315, -580, -195, `street`),
    mc(`yushima`, null, -315, -950, -612, `street`),
    mc(`chuo-ueno`, bv.chuo, -190, -1170, -770, `boulevard`, { sidewalk: 6 }),
    mc(`sotokanda-w`, null, -190, -770, -612, `street`),
    mc(`awajicho`, null, -190, -580, -195, `street`),
    mc(`otemachi-naka`, bv.otemachiNaka, -190, -165, -110, `street`, {
      sidewalk: 5,
    }),
    mc(`marunouchi-naka`, bv.marunouchiNaka, -190, -110, 355, `street`, {
      sidewalk: 6,
    }),
    mc(`uchisaiwaicho`, null, -190, 355, 820, `street`),
    mc(`ameyoko`, bv.ameyoko, -145, -1170, -950, `lane`, { pedestrian: !0 }),
    mc(`ueno-3`, null, -145, -950, -770, `street`),
    mc(`chuo-akihabara`, bv.chuo, -145, -770, -420, `boulevard`, {
      sidewalk: 6,
    }),
    mc(`uchikanda`, null, -145, -420, -195, `street`),
    mc(`otemachi-2`, null, -145, -165, -110, `street`),
    mc(`marunouchi-2`, null, -145, -110, 125, `street`, { sidewalk: 5 }),
    mc(`shimbashi-w`, null, -145, 355, 620, `street`),
    mc(`sotobori-ginza`, bv.sotobori, -15, 125, 620, `arterial`),
    mc(`daiichi-keihin`, bv.daiichiKeihin, -15, 620, 820, `boulevard`, {
      sidewalk: 5,
    }),
    mc(`nihonbashi-gado`, null, -15, -165, -110, `lane`),
    mc(`kanda-gado`, null, -15, -420, -195, `lane`),
    mc(`kanda-sudacho-e`, null, -15, -580, -420, `lane`),
    mc(`akihabara-e`, null, -15, -1520, -612, `street`),
    mc(`namiki`, bv.namiki, 30, 125, 620, `street`),
    mc(`shiodome-30`, null, 30, 620, 690, `lane`),
    mc(`honkokucho`, null, 30, -165, -110, `lane`),
    mc(`kajicho-w`, null, 30, -420, -195, `lane`),
    mc(`iwamotocho-w`, null, 30, -580, -420, `lane`),
    mc(`sakumacho`, null, 30, -1520, -612, `lane`, { sidewalk: 1.5 }),
    mc(`chuo-ginza`, bv.chuo, 75, 125, 620, `boulevard`, { sidewalk: 7 }),
    mc(`shiodome-75`, null, 75, 620, 690, `street`),
    mc(`sotobori-yaesu`, bv.sotobori, 75, -195, 125, `arterial`),
    mc(`kajicho`, null, 75, -510, -195, `street`),
    mc(`showa-ueno`, bv.showa, 75, -1520, -510, `boulevard`, Sv),
    mc(`azuma`, bv.azuma, 128, 125, 620, `lane`),
    mc(`shiodome-128`, null, 128, 620, 690, `lane`),
    mc(`yaesu-w`, null, 128, -165, 125, `street`),
    mc(`muromachi-w`, null, 128, -420, -195, `street`),
    mc(`iwamotocho`, null, 128, -580, -420, `street`),
    mc(`taito-w`, null, 128, -1520, -612, `street`),
    mc(`showa-ginza`, bv.showa, 175, 125, 690, `boulevard`, xv),
    mc(`yaesu-naka`, bv.yaesuNaka, 175, -110, 125, `street`, { sidewalk: 4 }),
    mc(`nihonbashi-w`, null, 175, -165, -110, `street`),
    mc(`muromachi`, null, 175, -420, -195, `street`),
    mc(`kiyosubashi`, bv.kiyosubashi, 175, -950, -420, `arterial`),
    mc(`kojima`, null, 175, -1520, -950, `street`),
    mc(`kobikicho`, bv.kobikicho, 250, 125, 690, `lane`),
    mc(`chuo-nihonbashi`, bv.chuo, 250, -420, 125, `boulevard`, {
      sidewalk: 7,
    }),
    mc(`higashi-kanda-w`, null, 250, -580, -420, `street`),
    mc(`torigoe-w`, null, 250, -1520, -612, `street`),
    mc(`shin-ohashi-tsukiji`, bv.shinOhashi, 320, 125, 690, `arterial`),
    mc(`showa-nihonbashi`, bv.showa, 320, -165, 125, `boulevard`, xv),
    mc(`showa-edobashi`, bv.showa, 320, -510, -165, `boulevard`, Sv),
    mc(`higashi-kanda`, null, 320, -580, -510, `street`),
    mc(`torigoe`, null, 320, -1520, -612, `street`),
    mc(`teppozu`, bv.teppozu, 450, 125, 355, `street`),
    mc(`tsukiji-6`, null, 450, 355, 620, `street`),
    mc(`shin-ohashi-ningyocho`, bv.shinOhashi, 450, -420, 125, `arterial`),
    mc(`edo-asakusabashi`, bv.edo, 450, -1520, -420, `arterial`),
    mc(`sumida-riverside`, null, 545, -1520, 820, `street`),
    hc(`kototoi`, bv.kototoi, -1440, -480, 560, `arterial`),
    hc(`asakusa`, bv.asakusa, -1170, -190, 560, `arterial`),
    hc(`kasuga`, bv.kasuga, -950, -480, 560, `arterial`),
    hc(`kuramaebashi`, bv.kuramaebashi, -770, -480, 560, `arterial`),
    hc(`kanda-myojin`, bv.myojin, -700, -380, -145, `street`),
    hc(`sotobori-ochanomizu`, bv.sotobori, -612, -480, -145, `arterial`),
    hc(`kandagawa-n`, null, -612, -145, 545, `street`),
    hc(`kandagawa-s-w`, null, -580, -480, -380, `street`),
    hc(`awajizaka`, bv.awajizaka, -580, -380, -145, `street`),
    hc(`yanagiwara`, bv.yanagiwara, -580, -145, 545, `street`),
    hc(`yasukuni`, bv.yasukuni, -510, -480, 560, `boulevard`, { sidewalk: 5 }),
    hc(`kanda-keisatsu`, bv.keisatsu, -420, -480, -145, `street`),
    hc(`chuo-kanda`, bv.chuo, -420, -145, 250, `boulevard`, { sidewalk: 6 }),
    hc(`edo-kodemmacho`, bv.edo, -420, 250, 450, `arterial`),
    hc(`higashi-nihonbashi`, null, -420, 450, 545, `street`),
    hc(`nihonbashigawa-n`, null, -195, -480, 545, `street`),
    hc(`nihonbashigawa-s`, null, -165, -480, 545, `street`),
    hc(`eitai`, bv.eitai, -110, -315, 560, `boulevard`, { sidewalk: 5 }),
    hc(`gyoko`, bv.gyoko, 0, -315, -80, `boulevard`, {
      lanesPerDir: 2,
      median: 16,
      sidewalk: 7,
      treeMedian: !0,
    }),
    hc(`yaesu`, bv.yaesu, 0, 75, 545, `boulevard`, {
      median: 6,
      sidewalk: 5,
      treeMedian: !0,
    }),
    hc(`babasaki`, bv.babasaki, 125, -315, -15, `arterial`),
    hc(`kajibashi-w`, bv.kajibashi, 125, -15, 75, `arterial`),
    hc(`chuo-kyobashi`, bv.chuo, 125, 75, 250, `boulevard`, { sidewalk: 6 }),
    hc(`kajibashi-e`, bv.kajibashi, 125, 250, 560, `arterial`),
    hc(`yanagi`, bv.yanagi, 185, -15, 250, `lane`),
    hc(`marronnier`, bv.marronnier, 245, -15, 250, `street`),
    hc(`matsuya`, bv.matsuya, 300, -15, 250, `lane`),
    hc(`harumi`, bv.harumi, 355, -480, 560, `boulevard`),
    hc(`miyuki`, bv.miyuki, 410, -315, 250, `street`),
    hc(`kojunsha`, bv.kojunsha, 465, -15, 250, `lane`),
    hc(`hanatsubaki`, bv.hanatsubaki, 520, -15, 250, `street`),
    hc(`sotobori-shimbashi`, bv.sotobori, 620, -480, -15, `arterial`),
    hc(`shiodome`, null, 620, -15, 545, `street`),
    hc(`shin-ohashi-shiodome`, bv.shinOhashi, 690, -15, 320, `arterial`),
    ...Pce,
    ...die,
  ],
  Cde = [];
r.add({ 櫻田門: `桜田門`, 霞關二丁目: `霞が関二丁目`, 虎之門: `虎ノ門` });
var wv = 30;
function Tv(e, t) {
  for (let n = 0; n < _v.length; n++) {
    let r = _v[n];
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
    let d = Math.max(1, Math.ceil((o - a) / wv)),
      f = Math.max(0, Math.min(d - 1, Math.floor((e - a) / wv))),
      p = Math.max(0, Math.floor((t - s) / wv)),
      m = ((p * d + (p % 2 == 0 ? f : d - 1 - f)) % 99) + 1;
    return { idx: n, chome: i, ban: m };
  }
  return null;
}
function Ev(e, t) {
  if (!t) return e.town;
  let n = Io[t] ?? String(t);
  return {
    ja: `${e.town.ja}${n}丁目`,
    zh: `${e.town.zh}${n}丁目`,
    en: `${e.town.en} ${t}-chome`,
  };
}
function wde(e, t) {
  for (let n of pv)
    if (e >= n.minX && e < n.maxX && t >= n.minZ && t < n.maxZ)
      return fv.find((e) => e.id === n.id).name;
  for (let n of fv)
    if (e >= n.minX && e < n.maxX && t >= n.minZ && t < n.maxZ) return n.name;
  return fv[fv.length - 1].name;
}
function Dv(e, t) {
  let n = Tv(e, t);
  if (n) return Ev(_v[n.idx], n.chome);
  let r = wde(e, t);
  return { ja: r.ja ?? r.zh, zh: r.zh, en: r.en };
}
function Ov(e) {
  return !!e.unnamed || !!e.lane || !e.name.zh;
}
function Tde(e, t, n) {
  let r = Dv(t, n);
  if (Ov(e))
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
var kv = (e) =>
  e >= 1e3
    ? {
        idx: Math.floor(e / 1e3) - 1,
        chome: Math.floor(e / 100) % 10,
        ban: e % 100,
      }
    : null;
function Ede(e, t, n) {
  let r = bp(e, yv) + 2,
    i = Tv(
      e.axis === `x` ? t : e.at + n * r,
      e.axis === `x` ? e.at + n * r : t,
    );
  return i ? ((i.idx + 1) * 10 + i.chome) * 100 + i.ban : 0;
}
function Dde(e, t, n) {
  let r = Lo[e.ward],
    i = t ? ` ${Io[t] ?? t}丁目` : ``;
  return {
    ja: `${r.ja} ${e.town.ja}${i} ${n}`,
    zh: `${r.zh} ${e.town.zh}${i} ${n}`,
    en: t ? `${t}-${n} ${e.town.en}, ${r.en}` : `${n} ${e.town.en}, ${r.en}`,
  };
}
function Ode(e, t) {
  let n = kv(t),
    r = n ? _v[n.idx] : void 0;
  if (!n || !r)
    return {
      ja: `東京都 ${e.full.ja ?? e.full.zh}`,
      zh: `東京都 ${e.full.zh}`,
      en: `${e.full.en}, Tokyo`,
    };
  let i = Lo[r.ward],
    a = n.chome ? `${Io[n.chome] ?? n.chome}丁目` : ``;
  return {
    ja: `${i.ja}${r.town.ja}${a}${n.ban}番`,
    zh: `${i.zh}${r.town.zh}${a}${n.ban}番`,
    en: n.chome
      ? `${n.chome}-${n.ban} ${r.town.en}, ${i.en}`
      : `${n.ban} ${r.town.en}, ${i.en}`,
  };
}
function kde(e, t) {
  let n = Tv(e, t);
  if (!n) return null;
  let r = _v[n.idx];
  return {
    ward: Lo[r.ward],
    town: r.town,
    chome: n.chome,
    ban: n.ban,
    plate: Dde(r, n.chome, n.ban),
  };
}
