// tokyo__assets__region-tokyo-BcM3fReU 266 — color
// Lines 104076-104408 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var w4 = {
    akiba: {
      id: `akiba`,
      name: {
        zh: `秋葉原電器街`,
        en: `Akihabara Electric Town`,
        ja: `秋葉原電気街`,
      },
      points: [
        { x: -145, z: -510 },
        { x: -145, z: -770 },
        { x: 75, z: -770 },
        { x: 75, z: -510 },
      ],
      laps: 3,
      start: { x: -147.6, z: -640, heading: 0 },
    },
    ginza: {
      id: `ginza`,
      name: {
        zh: `銀座・日本橋`,
        en: `Ginza – Nihonbashi`,
        ja: `銀座・日本橋`,
      },
      points: [
        { x: 75, z: 355 },
        { x: 75, z: 125 },
        { x: 250, z: 125 },
        { x: 250, z: -195 },
        { x: 320, z: -195 },
        { x: 320, z: 355 },
      ],
      laps: 2,
      start: { x: 72.4, z: 312, heading: 0 },
    },
    marunouchi: {
      id: `marunouchi`,
      name: {
        zh: `丸之內・行幸通`,
        en: `Marunouchi – Gyoko-dori`,
        ja: `丸の内・行幸通り`,
      },
      points: [
        { x: -80, z: 0 },
        { x: -315, z: 0 },
        { x: -315, z: 125 },
        { x: -80, z: 125 },
      ],
      laps: 3,
      start: { x: -112, z: 9.6, heading: -Math.PI / 2 },
    },
  },
  T4 = {
    akiba: {
      route: [
        { x: -145, z: -600 },
        { x: -145, z: -770 },
        { x: 75, z: -770 },
        { x: 75, z: -510 },
        { x: -145, z: -510 },
        { x: -145, z: -560 },
      ],
      stops: [{ x: -147.6, z: -700, hold: 4 }],
    },
    ginza: {
      route: [
        { x: 75, z: 330 },
        { x: 75, z: 125 },
        { x: 250, z: 125 },
        { x: 250, z: -110 },
      ],
      stops: [{ x: 252.4, z: -60, hold: 4 }],
    },
    marunouchi: {
      route: [
        { x: -100, z: 0 },
        { x: -315, z: 0 },
        { x: -315, z: 125 },
        { x: -80, z: 125 },
        { x: -80, z: 40 },
      ],
      stops: [{ x: -80, z: 60, hold: 4 }],
    },
  },
  E4 = {
    grand: {
      route: [
        { x: -145, z: -770 },
        { x: -145, z: -420 },
        { x: 250, z: -420 },
        { x: 250, z: 125 },
        { x: 75, z: 125 },
        { x: 75, z: 355 },
        { x: -315, z: 355 },
        { x: -315, z: 0 },
        { x: -104, z: 0 },
      ],
      stops: [{ x: -104, z: -9.6, hold: 6 }],
    },
    escape: {
      route: [
        { x: -190, z: -940 },
        { x: -190, z: -770 },
        { x: 75, z: -770 },
        { x: 75, z: -510 },
        { x: -145, z: -510 },
        { x: -145, z: -660 },
      ],
      stops: [],
    },
  },
  D4 = [
    {
      name: { zh: `小綠`, en: `Midori`, ja: `ミドリ` },
      color: 8177210,
      skill: 0.55,
      costume: 2,
    },
    {
      name: { zh: `阿健`, en: `Ken`, ja: `ケン` },
      color: 3117024,
      skill: 0.7,
      costume: 4,
    },
    {
      name: { zh: `小花`, en: `Hana`, ja: `ハナ` },
      color: 15755944,
      skill: 0.5,
      costume: 1,
    },
    {
      name: { zh: `五郎`, en: `Goro`, ja: `ゴロー` },
      color: 15895068,
      skill: 0.62,
      costume: 3,
    },
    {
      name: { zh: `櫻`, en: `Sakura`, ja: `サクラ` },
      color: 15987695,
      skill: 0.45,
      costume: 2,
    },
    {
      name: { zh: `阿丈`, en: `Jo`, ja: `ジョー` },
      color: 8015824,
      skill: 0.78,
      costume: 3,
    },
    {
      name: { zh: `桃子`, en: `Momo`, ja: `モモ` },
      color: 15909913,
      skill: 0.4,
      costume: 1,
    },
  ],
  O4 = {
    start: [
      {
        zh: `全速前進！別擋路！`,
        en: `Flat out! Stay out of my way!`,
        ja: `全開で行くぜ！どいてな！`,
      },
      {
        zh: `這條路我閉著眼都能跑。`,
        en: `I could drive this street with my eyes shut.`,
        ja: `この道なら目をつぶっても走れる。`,
      },
    ],
    passed: [
      { zh: `什麼！？`, en: `What!?`, ja: `なにっ！？` },
      {
        zh: `可惡，還挺快的嘛！`,
        en: `Damn, you’re quick!`,
        ja: `くそっ、やるじゃん！`,
      },
      { zh: `等一下！`, en: `Hey, wait up!`, ja: `ちょっと待て！` },
    ],
    pass: [
      { zh: `先走一步囉～`, en: `After you — not!`, ja: `お先に〜！` },
      { zh: `讓開讓開！`, en: `Coming through!`, ja: `道を空けな！` },
    ],
    final: [{ zh: `最後一圈！`, en: `Last lap!`, ja: `ラスト一周！` }],
    win: [{ zh: `輕鬆贏！`, en: `Too easy!`, ja: `楽勝！` }],
    lose: [
      {
        zh: `下次絕對不會輸。`,
        en: `Next time you’re mine.`,
        ja: `次は負けねえ。`,
      },
      { zh: `……服了你。`, en: `…Fine. You win this one.`, ja: `……参ったよ。` },
    ],
  },
  k4 = {
    go: {
      zh: `出發囉！跟緊我，靠左行駛，紅燈要停！`,
      en: `Off we go! Stay right behind me, keep left, stop at the reds!`,
      ja: `出発しまーす！後ろにぴったり、左側通行、赤信号では止まってね！`,
    },
    stop: {
      zh: `拍照時間！在這裡停一下。`,
      en: `Photo stop! We’ll pull in here.`,
      ja: `撮影タイム！ここで止まりまーす。`,
    },
    wait: {
      zh: `跟上來！我在這裡等你。`,
      en: `Catch up! I’ll wait here.`,
      ja: `追いついてー！ここで待ってるよ。`,
    },
    red: {
      zh: `喂！紅燈啊！`,
      en: `Hey! That was a red light!`,
      ja: `ちょっと！赤信号だよ！`,
    },
    end: {
      zh: `辛苦了！今天的行程到此結束。`,
      en: `Thanks, everyone! That’s the end of today’s tour.`,
      ja: `お疲れさまでした！本日のツアーはここまで！`,
    },
  },
  A4 = { throttle: 0, brake: 0, steer: 0, handbrake: !1, hold: !0 },
  j4 = { x: 0, z: 0 },
  M4 = { x: 0, z: 0 },
  N4 = { s: 0, seg: 0, dist: 0 },
  P4 = (e) => Math.atan2(e.x, -e.z),
  F4 = new WeakMap();
function I4(e, t) {
  let n = F4.get(e);
  n || F4.set(e, (n = new Map()));
  let r = n.get(t.id);
  if (!r) {
    let i = Je(e, t.points, !0);
    ((r = {
      main: new lt(En(e, i, 0, !0, 12), !0),
      alt: new lt(En(e, i, 1, !0, 12), !0),
      nodes: i,
    }),
      n.set(t.id, r));
  }
  return r;
}
function L4(e, t) {
  let n = [],
    r = Math.max(2, Math.ceil(e.length / t));
  for (let t = 0; t < r; t++)
    n.push(e.pointAt((e.length * t) / r, { x: 0, z: 0 }));
  return n;
}
function R4(e, t) {
  for (let n of L4(t, 220))
    try {
      Promise.resolve(e.ctx.districts?.ensureResident?.(n.x, n.z)).catch(
        () => {},
      );
    } catch {}
}
async function z4(e, t, n = 12) {
  let r = 0;
  for (let n of L4(t, 220)) {
    r++;
    try {
      Promise.resolve(e.ctx.districts?.ensureResident?.(n.x, n.z))
        .catch(() => {})
        .then(() => void r--);
    } catch {
      r--;
    }
  }
  let i = 0;
  await e.until((e) => r <= 0 || (i += e) > n);
}
function B4(e, t, n, r) {
  return (
    e.pointAt(t, j4),
    e.dirAt(t, M4),
    (n - j4.x) * -M4.z + (r - j4.z) * M4.x
  );
}
function V4(e, t, n) {
  let r = e.pointAt(t, { x: 0, z: 0 });
  return (
    e.dirAt(t, M4),
    { x: r.x - M4.z * n, z: r.z + M4.x * n, heading: P4(M4) }
  );
}
function H4(e, t, n, r) {
  let i = e.ctx.traffic;
  if (typeof i?.claimNearest != `function`) return null;
  try {
    return i.claimNearest(t, n, r);
  } catch {
    return null;
  }
}
function U4(e, t, n, r) {
  let i = e.ctx,
    a = i.traffic,
    o = new Float32Array(1024),
    s = { s: 0, seg: 0, dist: 0 },
    c = 0,
    l = 0;
  return (u) => {
    if (
      typeof a?.claimNearest != `function` ||
      typeof a?.writePositions != `function` ||
      (c -= u) > 0
    )
      return;
    c = 0.25;
    let d = 0;
    try {
      d = a.writePositions(o);
    } catch {}
    let f = i.camera,
      p = f.position,
      m = -f.matrixWorld.elements[8],
      h = -f.matrixWorld.elements[10],
      g = Math.hypot(m, h) || 1,
      _ = n ? n() : -1 / 0,
      v = r ? r() : 1 / 0,
      y = 0;
    for (let n = 0; n < d && y < 6; n++) {
      let r = o[n * 4],
        i = o[n * 4 + 1];
      if ((t.project(r, i, s), s.dist > 9 || s.s < _ || s.s > v)) continue;
      let a = r - p.x,
        c = i - p.z,
        u = Math.hypot(a, c);
      (u < 55 && (a * m + c * h) / (u * g || 1) > 0.3) ||
        (H4(e, r, i, 2.5) && (y++, l++));
    }
    e.vars.kartSwept = l;
  };
}
