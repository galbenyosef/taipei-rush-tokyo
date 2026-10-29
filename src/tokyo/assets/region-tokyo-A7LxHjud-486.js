// tokyo/assets/region-tokyo-A7LxHjud 486 — color
// Lines 176032-176196 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var I9 = `tokyo:side_lostkid`,
  L9 = 16754253,
  R9 = 0.64,
  z9 = (e, t, n, r = 1) => ({
    name: { zh: e, en: t, ja: n },
    voice: `ja`,
    pitch: r,
  }),
  B9 = {
    boy: z9(`悠斗`, `Yuto`, `ゆうと`, 1.5),
    obaa: z9(`志工阿嬤`, `Volunteer grandma`, `ボランティアのおばあさん`, 1.12),
    staff: z9(`公園職員`, `Park staff`, `公園の職員`, 1),
    pa: z9(`園內廣播`, `Park announcement`, `園内放送`, 1.08),
    mama: z9(`悠斗的媽媽`, `Yuto's mother`, `ゆうとのママ`, 1.15),
    passer: z9(`路人`, `Passer-by`, `通行人`, 0.95),
  },
  V9 = {
    boy: () =>
      Nt(`student`, `tk-side-lostkid-boy`, {
        face: { smile: -0.5, brow: 0.6 },
        hair: { style: `bowl`, color: 1972758 },
        top: { style: `tee`, color: 15909424 },
        bottom: { style: `shorts`, color: 2372698 },
        shoes: { style: `sneaker`, color: 3836632, color2: 15921906 },
        acc: kt(
          { kind: `cap`, color: 3836632 },
          { kind: `backpack`, color: 15227450 },
        ),
      }),
    obaa: () =>
      Nt(`grandma`, `tk-side-lostkid-obaa`, {
        hair: { style: `perm`, color: 12104876 },
        top: { style: `blouse`, color: 15262420 },
        outer: { style: `vest`, color: 5939274, color2: 4622906 },
        bottom: { style: `wide`, color: 4868690 },
        shoes: { style: `flat`, color: 5917242 },
        acc: kt({ kind: `visor`, color: 5939274 }),
      }),
    staff: () =>
      Nt(`worker`, `tk-side-lostkid-staff`, {
        hair: { style: `sidepart`, color: 2762274 },
        top: { style: `shirt`, color: 15263452, tucked: !0 },
        outer: { style: `windbreaker`, color: 9075274, color2: 6970424 },
        bottom: { style: `slacks`, color: 3815988 },
        acc: kt(
          { kind: `cap`, color: 3824186 },
          { kind: `lanyard`, color: 2783802 },
        ),
      }),
    mama: () =>
      Nt(`mom`, `tk-side-lostkid-mama`, {
        height: 1.6,
        hair: { style: `ponytail`, color: 2760216 },
        top: { style: `tee`, color: 15921128 },
        outer: { style: `cardigan`, color: 13115436, color2: 10492452 },
        bottom: { style: `jeans`, color: 3820138 },
        shoes: { style: `sneaker`, color: 15921906, color2: 14342874 },
        acc: kt({ kind: `shoulderBag`, color: 6965810 }),
      }),
  };
function yHe() {
  let e = L4(`tokyo:ueno:landing-north`, -303, -1151.5, Math.PI);
  return [
    {
      name: N(`噴水廣場`, `The fountain plaza`, `噴水広場`),
      x: Ex.x,
      z: Ex.z + Ex.r + 4,
      hint: N(
        `紅色開襟衫的人？她拿著熊貓氣球，在噴水池那邊找人喔。`,
        `A red cardigan? She had a panda balloon — she was looking for someone by the fountain.`,
        `赤いカーディガンの人？パンダの風船を持って、噴水のほうで誰か探してたよ。`,
      ),
      passer: `hipster`,
    },
    {
      name: N(`櫻花大道`, `Sakura-dori`, `さくら通り`),
      x: -185,
      z: -1246,
      hint: N(
        `拿熊貓氣球的女生？剛剛往櫻花大道那邊跑過去了。`,
        `The woman with the panda balloon? She ran off toward Sakura-dori just now.`,
        `パンダの風船の女の人なら、さっきさくら通りのほうへ走っていったよ。`,
      ),
      passer: `officeLady`,
    },
    {
      name: N(`不忍池北岸`, `Shinobazu, the north promenade`, `不忍池の北岸`),
      x: e.x + 4,
      z: e.z - 4.5,
      hint: N(
        `紅色開襟衫……啊，拿熊貓氣球的那位吧。她往池子那邊下去了。`,
        `A red cardigan… ah, the one with the panda balloon. She went down toward the pond.`,
        `赤いカーディガン……ああ、パンダの風船の人ね。池のほうへ下りていったよ。`,
      ),
      passer: `agong`,
    },
  ];
}
function bHe(e, t, n) {
  let r = null,
    i = 1 / 0;
  try {
    for (let a of jx(e.plan).items) {
      if (a.kind !== `map` || !N9(e, a.x, a.z)) continue;
      let o = Math.hypot(a.x - t, a.z - n);
      o < i && ((i = o), (r = { x: a.x, z: a.z, fx: a.fx, fz: a.fz }));
    }
  } catch {}
  if (r && i < 80) {
    let t = F4(
      e,
      r.x - r.fz * 1.5 + r.fx * 0.7,
      r.z + r.fx * 1.5 + r.fz * 0.7,
      4,
    );
    return { x: t.x, z: t.z, h: Math.atan2(r.fx, -r.fz) };
  }
  let a = F4(e, t - 18, n + 20, 6);
  return { x: a.x, z: a.z, h: Math.PI };
}
function xHe(e) {
  let t = L4(`tokyo:ueno:zoo-gate`, -311, -1287.6, Math.PI),
    n = F4(e, t.x + 7, t.z + 7, 4);
  return { x: n.x, z: n.z, heading: Math.PI, gate: t };
}
var SHe = N(
    `按 {interact} 請公園職員廣播「迷子のお知らせ」`,
    `Press {interact} to ask the park staff for a lost-child announcement`,
    `{interact} で公園の職員に迷子のお知らせを頼む`,
  ),
  CHe = N(`等一下悠斗`, `Wait for Yuto`, `ゆうとを待つ`),
  wHe = N(`和悠斗一起走路`, `Walk with Yuto`, `ゆうとと一緒に歩く`),
  THe = [
    {
      id: I9,
      title: N(`迷路的孩子`, `The Lost Child`, `迷子`),
      description: N(
        `上野動物園正門前，一個五歲的男孩哭著找媽媽。陪他把媽媽找回來。`,
        `By Ueno Zoo’s main gate a five-year-old is crying for his mum. Help him find her.`,
        `上野動物園の表門の前で、五歳の男の子がママを探して泣いている。一緒に探してあげよう。`,
      ),
      category: `side`,
      reward: 6e3,
      icon: `escort`,
      glyph: `迷`,
      blip: `mission`,
      color: L9,
      order: 311,
      giver: {
        outfit: `v:tk-side-lostkid-obaa`,
        dx: -1.1,
        dz: -0.9,
        anim: `talk`,
      },
      giverName: B9.obaa.name,
      hours: [9, 17],
      skipTo: 11,
      start(e) {
        V9.obaa();
        let t = xHe(e);
        return { x: t.x, z: t.z, heading: t.heading };
      },
      run: EHe,
    },
  ];
