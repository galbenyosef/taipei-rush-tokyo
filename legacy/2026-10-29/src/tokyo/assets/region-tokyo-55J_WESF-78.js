// tokyo/assets/region-tokyo-55J_WESF 78 — filter
// Lines 36151-36253 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function _p(e, t) {
  return e.lanesPerDir * t + e.median / 2 + e.sidewalk;
}
var xce = (e) => e + 3;
function vp(e, t, n, r, i = 3.25, a) {
  let o = a ? Object.values(a.seams ?? {}) : [],
    s = e.filter((e) =>
      a ? e.sector === a.id || o.includes(e.id) : !e.sector,
    ),
    c = s.filter((e) => e.axis === `z`).sort((e, t) => e.at - t.at),
    l = s.filter((e) => e.axis === `x`).sort((e, t) => e.at - t.at),
    u = t.filter((e) => !e.zone),
    d = t.filter((e) => e.zone === `pedestrian`),
    f = [...new Set(c.map((e) => e.at))].sort((e, t) => e - t),
    p = a ? `${a.id}-` : ``,
    m = [];
  for (let e = 0; e + 1 < f.length; e++) {
    let t = f[e],
      o = f[e + 1],
      s = (t + o) / 2,
      c = l.filter((e) => e.from <= s && e.to >= s);
    for (let e = 0; e + 1 < c.length; e++) {
      if (c[e].at > n || c[e + 1].at < r) continue;
      let l = c[e].at,
        f = c[e + 1].at,
        h = (l + f) / 2;
      if (a && !(s > a.minX && s < a.maxX && h > a.minZ && h < a.maxZ))
        continue;
      let g = d.some(
        (e) =>
          e.kind === `plaza` &&
          Math.abs(s - e.x) <= e.w / 2 + 60 &&
          Math.abs(h - e.z) <= e.d / 2 + 60,
      )
        ? 3
        : 2;
      if (!(o - t <= 110))
        for (let e = 1; e < g; e++) {
          let n = Math.round(t + ((o - t) * e) / g),
            r = { minX: n - 8, maxX: n + 8, minZ: l, maxZ: f };
          u.some(
            (e) =>
              r.maxX > e.x - e.w / 2 - 4 &&
              r.minX < e.x + e.w / 2 + 4 &&
              r.maxZ > e.z - e.d / 2 - 4 &&
              r.minZ < e.z + e.d / 2 + 4,
          ) || m.push({ id: `${p}ns-${n}-${l}`, x: n, half: xce(i) });
        }
    }
  }
  return m;
}
r.add({
  內堀通: `内堀通り`,
  外苑東通: `外苑東通り`,
  白山通: `白山通り`,
  不忍通: `不忍通り`,
  櫻田通: `桜田通り`,
  六本木通: `六本木通り`,
  代官町通: `代官町通り`,
  國會通: `国会通り`,
  櫻麻通: `桜麻通り`,
  海岸通: `海岸通り`,
  東京鐵塔通: `東京タワー通り`,
  大門通: `大門通り`,
  雷門通: `雷門通り`,
  仲見世通: `仲見世通り`,
  新仲見世通: `新仲見世通り`,
  柳橙通: `オレンジ通り`,
  "本鄉・東大": `本郷・東大`,
  "番町・麴町": `番町・麹町`,
  "霞關・虎之門": `霞が関・虎ノ門`,
  "芝・濱松町": `芝・浜松町`,
  淺草: `浅草`,
  本鄉: `本郷`,
  彌生: `弥生`,
  後樂: `後楽`,
  北之丸公園: `北の丸公園`,
  一橋: `一ツ橋`,
  麴町: `麹町`,
  霞關: `霞が関`,
  虎之門: `虎ノ門`,
  花川戶: `花川戸`,
  西淺草: `西浅草`,
  東京巨蛋城: `東京ドームシティ`,
  小石川後樂園: `小石川後楽園`,
  "東京大學 本鄉校區": `東京大学 本郷キャンパス`,
  國會議事堂: `国会議事堂`,
  "虎之門之丘 車站大樓": `虎ノ門ヒルズ ステーションタワー`,
  麻布台之丘: `麻布台ヒルズ`,
  東京中町: `東京ナカマチ`,
  增上寺: `増上寺`,
  淺草花屋敷: `浅草花やしき`,
  東武淺草站: `東武浅草駅`,
  合羽橋道具街: `かっぱ橋道具街`,
  六本木十字路口: `六本木交差点`,
  稻荷町: `稲荷町`,
  國會議事堂前: `国会議事堂前`,
  後樂園: `後楽園`,
  六本木派出所: `六本木交番`,
  雷門派出所: `雷門交番`,
  水道橋站前派出所: `水道橋駅前交番`,
});
