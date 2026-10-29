// tokyo/assets/region-tokyo-A7LxHjud 478 — color
// Lines 172670-172770 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function LVe(e, t, n, r) {
  e.branch(async () => {
    ((n.anim = `idle`), (t.anim = `idle`), await e.wait(0.6));
    let i = Z4(e, { x: n.x, z: n.z }, r),
      a =
        i.find((e) => Math.hypot(e.x - n.x, e.z - n.z) > 6) ?? i[i.length - 1];
    (a && (n.moveTo(a.x, a.z, 1.2), t.moveTo(a.x + 0.8, a.z + 0.4, 1.2)),
      await e.wait(12),
      e.removeActor(n),
      e.removeActor(t));
  });
}
var RVe = `tokyo:side_thief`,
  M7 = (e, t, n, r = 1, i = `ja`) => ({
    name: { zh: e, en: t, ja: n },
    voice: i,
    pitch: r,
  }),
  N7 = {
    mori: M7(`保全員 森小姐`, `Ms. Mori (store detective)`, `保安員の森`, 1.1),
    thief: M7(`偷竊犯`, `Shoplifter`, `万引き犯`, 1),
    officer: M7(`警察`, `Officer`, `警察官`, 0.95),
  },
  P7 = {
    mori: () =>
      Nt(`officeLady`, `tk-side-thief-mori`, {
        hair: { style: `ponytail`, color: 3811872 },
        top: { style: `blouse`, color: 15394524 },
        outer: { style: `cardigan`, color: 12101258, color2: 10719610 },
        bottom: { style: `slacks`, color: 3816516 },
        shoes: { style: `sneaker`, color: 2763310, color2: 1710620 },
        acc: kt(`glasses`, { kind: `tote`, color: 5925498 }),
      }),
    thief: () =>
      Nt(`student`, `tk-side-thief-runner`, {
        hair: { style: `fade`, color: 1972760 },
        top: { style: `hoodie`, color: 6975092, color2: 5593438 },
        bottom: { style: `jeans`, color: 2765894 },
        acc: kt(
          { kind: `cap`, color: 1315862 },
          { kind: `mask`, color: 15658734 },
          { kind: `backpack`, color: 1973794 },
        ),
      }),
    officer: () => Jt.cop,
  },
  F7 = { x: -161.3, z: -713.4, h: Math.PI / 2 },
  zVe = [
    { x: -158.8, z: -760.4 },
    { x: -185.3, z: -760.4 },
    { x: -185.3, z: -621.8 },
    { x: -158.8, z: -621.8 },
  ],
  BVe = [
    N(`別追了啦！`, `Quit chasing me!`, `ついてくんなって！`),
    N(`讓開！讓開！`, `Move! Move!`, `どいて！どいてくれ！`),
    N(
      `只是一台遊戲機而已啊！`,
      `It's just one console!`,
      `ゲーム機一個くらいでさあ！`,
    ),
  ],
  I7 = [
    {
      id: RVe,
      title: { zh: `抓小偷`, en: `The Shoplifter`, ja: `万引きGメン` },
      description: {
        zh: `秋葉原中央通的電腦館，保全員森小姐盯上了一個在遊戲機貨架前徘徊的男人。他一出店門，就是你出場的時候。`,
        en: `At the PC store on Chuo-dori, store detective Ms. Mori is watching a man at the console shelf. The moment he walks out, it is your turn.`,
        ja: `秋葉原・中央通りのPC館で、保安員の森さんがゲーム機の棚の前をうろつく男を見張っている。男が店を出た瞬間が、あなたの出番だ。`,
      },
      category: `side`,
      reward: 9e3,
      icon: `thief`,
      glyph: `万`,
      blip: `mission`,
      color: 12160255,
      order: 312,
      giver: {
        outfit: `v:tk-side-thief-mori`,
        dx: 0.7,
        dz: -1.7,
        anim: `idle`,
      },
      giverName: $4(N7.mori)[0],
      hours: [11, 20],
      skipTo: 15,
      skipCaption: {
        zh: `下午 3:00 · 秋葉原`,
        en: `3:00 PM · Akihabara`,
        ja: `午後3時・秋葉原`,
      },
      noPolice: !0,
      start() {
        (P7.mori(), P7.thief());
        let e = L4(`tokyo:akihabara:softnap-pc`, F7.x, F7.z, F7.h);
        return { x: e.x, z: e.z, heading: e.heading };
      },
      run: VVe,
    },
  ];
