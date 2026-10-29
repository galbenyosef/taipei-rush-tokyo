// tokyo/assets/region-tokyo-A7LxHjud 425 — color
// Lines 152152-152475 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var A4 = (e, t, n, r = 1, i = `ja`) => ({
    name: { zh: e, en: t, ja: n },
    voice: i,
    pitch: r,
  }),
  Q = {
    tae: A4(`妙子阿嬤`, `Tae`, `タエさん`, 1.12),
    gen: A4(`源さん`, `Gen-san`, `源さん`, 0.82),
    miko: A4(`ミコ`, `Miko`, `ミコ`, 1.25),
    todoroki: A4(`轟`, `Todoroki`, `轟`, 0.78),
    yuki: A4(`勇樹`, `Yuki`, `勇樹`, 1),
    kirishima: A4(`桐島警部補`, `Inspector Kirishima`, `桐島警部補`, 0.92),
    shimizu: A4(`志水的大將`, `Shimizu (auctioneer)`, `志水の大将`, 0.9, `ja`),
    flyer: A4(`發傳單的男人`, `Flyer man`, `チラシの男`, 1),
    crew: A4(`ネオンリンク的人`, `NeonLink crew`, `ネオンリンクの男`, 0.88),
    kamishiro: A4(`神城`, `Kamishiro`, `神城`, 0.95),
    hsiaoChing: A4(`小晴`, `Hsiao-Ching`, `小晴`, 1, null),
    todoroki2: A4(`轟`, `Todoroki`, `轟`, 0.78),
    tatsu: A4(`辰`, `Tatsu`, `辰`, 0.92),
    kito: A4(`鬼頭的老大`, `Old Kito`, `鬼頭の親分`, 0.7),
    kuroda: A4(`黑田`, `Kuroda`, `黒田`, 0.75),
    miura: A4(`三浦司機`, `Driver Miura`, `三浦運転士`, 0.88),
    dispatch: A4(`運行指令`, `Dispatcher`, `運行指令所`, 0.95),
    reporter: A4(`記者`, `Reporter`, `リポーター`, 1.2),
    officer: A4(`警察`, `Officer`, `警察官`, 0.95),
    clerk: A4(`店員`, `Clerk`, `店員`, 1.15),
    voicemail: A4(`語音信箱`, `Voicemail`, `留守番電話`, 1.2),
    station: A4(`站內廣播`, `Station announcement`, `駅アナウンス`, 1.05),
    rival: A4(`隔壁的上班族`, `Office worker next door`, `隣の会社員`, 0.95),
    passer: A4(`路人`, `Passer-by`, `通行人`, 1.05),
    crowd: A4(`人群`, `Crowd`, `客`, 1),
  },
  j4 = {
    tae: () =>
      Nt(`grandma`, `t3-tae`, {
        hair: { style: `elder`, color: 12170928 },
        top: { style: `blouse`, color: 15261906 },
        outer: { style: `cardigan`, color: 8018538, color2: 5914704 },
        bottom: { style: `wide`, color: 3816004 },
        shoes: { style: `slipper`, color: 6965818 },
        acc: kt({ kind: `apron`, color: 2899562 }),
      }),
    gen: () =>
      Nt(`taxiDriver`, `t3-gen`, {
        face: { wrinkles: 0.55, smile: 0.1 },
        hair: { style: `elder`, color: 10131086 },
        top: { style: `shirt`, color: 15790316, sleeve: `long`, tucked: !0 },
        outer: { style: `vest`, color: 2764346, color2: 1974832 },
        bottom: { style: `slacks`, color: 2763826, belt: 1315344 },
        shoes: { style: `dress`, color: 1381135 },
        acc: kt({ kind: `cap`, color: 1974832 }, `glasses`, `watch`),
      }),
    shimizu: () =>
      Nt(`vendor`, `t3-shimizu`, {
        hair: { style: `buzz`, color: 2762790 },
        top: { style: `sweater`, color: 9054762 },
        bottom: { style: `slacks`, color: 2763312 },
        acc: kt(
          { kind: `headband`, color: 15921902 },
          { kind: `apron`, color: 15921126 },
        ),
      }),
    flyer: () =>
      Nt(`hipster`, `t3-flyer`, {
        hair: { style: `twoblock`, color: 3811870 },
        top: { style: `tee`, color: 1052690 },
        outer: { style: `bomber`, color: 2760522, color2: 1577518 },
        bottom: { style: `slacks`, color: 1710622 },
        shoes: { style: `sneaker`, color: 15921906, color2: 14342874 },
        acc: kt(
          { kind: `lanyard`, color: 16727976 },
          { kind: `shoulderBag`, color: 1446938 },
        ),
      }),
    yuki: () =>
      Nt(`student`, `t3-yuki`, {
        height: 1.71,
        face: { smile: -0.3, brow: 0.35 },
        hair: { style: `bowl`, color: 2761244 },
        top: { style: `hoodie`, color: 5924464, color2: 4739674 },
        bottom: { style: `jeans`, color: 2898512 },
        shoes: { style: `sneaker`, color: 15263976, color2: 10132122 },
        acc: kt({ kind: `mask`, color: 15790320 }, `phone`),
      }),
    miko: () =>
      Nt(`ximenGirl`, `t3-miko`, {
        height: 1.58,
        hair: { style: `bangs`, color: 2759714, color2: 14183080 },
        top: { style: `hoodie`, color: 15967944, color2: 1710623 },
        bottom: { style: `skirt`, color: 1710623 },
        shoes: { style: `boot`, color: 1710623 },
        acc: kt({ kind: `shoulderBag`, color: 1710623 }, `phone`, {
          kind: `earbuds`,
          color: 16053492,
        }),
      }),
    courierA: () =>
      Nt(`hipster`, `t3-courier-a`, {
        hair: { style: `fade`, color: 1972760 },
        top: { style: `tee`, color: 15790314 },
        outer: { style: `bomber`, color: 2042442, color2: 1317940 },
        bottom: { style: `jeans`, color: 2764602 },
        acc: kt(
          { kind: `cap`, color: 1118481 },
          { kind: `backpack`, color: 1710618 },
        ),
      }),
    courierB: () =>
      Nt(`hipster`, `t3-courier-b`, {
        hair: { style: `fade`, color: 1972760 },
        top: { style: `hoodie`, color: 9079952, color2: 6974576 },
        bottom: { style: `jeans`, color: 2764602 },
        acc: kt(
          { kind: `backpack`, color: 1710618 },
          { kind: `mask`, color: 15790320 },
        ),
      }),
    hsiaoChing: () =>
      Nt(`friend`, `t3-hsiaoching`, {
        height: 1.6,
        hair: { style: `ponytail`, color: 2760216 },
        top: { style: `tee`, color: 16172754 },
        outer: { style: `cardigan`, color: 14271648, color2: 12889480 },
        bottom: { style: `jeans`, color: 3820138 },
        shoes: { style: `sneaker`, color: 15921906, color2: 14342874 },
        acc: kt({ kind: `tote`, color: 15260868 }),
      }),
    kamishiro: () =>
      Nt(`suit`, `t3-kamishiro`, {
        height: 1.78,
        face: { smile: 0.3, brow: 0.5 },
        hair: { style: `sidepart`, color: 1709586 },
        top: { style: `shirt`, color: 16185074, tucked: !0 },
        outer: { style: `blazer`, color: 2895412, color2: 2369068, closed: !1 },
        bottom: { style: `slacks`, color: 2895412, belt: 921104 },
        shoes: { style: `dress`, color: 1183500 },
        acc: kt({ kind: `watch`, color: 14211280 }),
      }),
    kirishima: () =>
      Nt(`detective`, `t3-kirishima`, {
        face: { facial: `none`, wrinkles: 0.15, smile: -0.1 },
        hair: { style: `fade`, color: 1380879 },
        top: { style: `shirt`, color: 15265267, tucked: !0 },
        outer: { style: `blazer`, color: 2041920, color2: 1581110, closed: !0 },
        bottom: { style: `slacks`, color: 2041920 },
        acc: kt({ kind: `lanyard`, color: 2777784 }, `watch`),
      }),
    todoroki: () =>
      Nt(`worker`, `t3-todoroki`, {
        build: `heavy`,
        face: { facial: `stubble`, wrinkles: 0.3, brow: 0.8 },
        hair: { style: `buzz`, color: 2762274 },
        top: { style: `tee`, color: 1710618 },
        outer: { style: `bomber`, color: 13115436, color2: 1710618 },
        bottom: { style: `track`, color: 1710618 },
        acc: kt({ kind: `headband`, color: 15921906 }),
      }),
    tatsu: () =>
      Nt(`enforcer`, `t3-tatsu`, {
        build: `avg`,
        hair: { style: `undercut`, color: 14205066 },
        top: { style: `hoodie`, color: 1118481, color2: 13214247 },
        bottom: { style: `track`, color: 1118481 },
        acc: kt(`sunglasses`, { kind: `necklace`, color: 14263584 }),
      }),
    kito: () =>
      Nt(`agong`, `t3-kito`, {
        face: { wrinkles: 0.75, brow: 0.6, smile: -0.1 },
        hair: { style: `elder`, color: 13158080 },
        top: { style: `shirt`, color: 15921386, tucked: !0 },
        outer: { style: `vest`, color: 5921374, color2: 4868686 },
        bottom: { style: `slacks`, color: 5921374 },
        shoes: { style: `dress`, color: 1380879 },
        acc: kt(`glasses`, { kind: `watch`, color: 14263584 }),
      }),
    kuroda: () =>
      Nt(`suit`, `t3-kuroda`, {
        build: `heavy`,
        face: { wrinkles: 0.35, brow: 0.8, smile: -0.2 },
        hair: { style: `buzz`, color: 2762274 },
        top: { style: `shirt`, color: 2763312, tucked: !0 },
        outer: { style: `blazer`, color: 1118484, color2: 789518, closed: !0 },
        bottom: { style: `slacks`, color: 1118484 },
        acc: kt(`sunglasses`),
      }),
    miura: () =>
      Nt(`salaryman`, `t3-miura`, {
        top: { style: `shirt`, color: 15331060, tucked: !0 },
        outer: { style: `blazer`, color: 1844792, color2: 1317932, closed: !0 },
        bottom: { style: `slacks`, color: 1844792 },
        acc: kt({ kind: `cap`, color: 1844792 }),
      }),
    officer: () => Jt.cop,
    crew: () => Jt.enforcer,
    crew2: () =>
      Nt(`enforcer`, `t3-crew2`, {
        build: `avg`,
        hair: { style: `twoblock`, color: 6965802 },
        top: { style: `hoodie`, color: 1381658, color2: 921106 },
        bottom: { style: `track`, color: 1579036 },
        acc: kt(`sunglasses`, { kind: `necklace`, color: 14263584 }),
      }),
    clerk: () =>
      Nt(`clerk`, `t3-clerk`, {
        top: { style: `shirt`, color: 4030153, sleeve: `long` },
        acc: kt({ kind: `lanyard`, color: 15921906 }),
      }),
    officeM: () => Jt.salaryman,
    officeF: () => Jt.officeLady,
  },
  M4 = 16762941,
  N4 = 16731486,
  P4 = 5088255;
function F4(e, t, n, r = 10, i = !1) {
  let a = (t, n) => {
    try {
      let r = e.plan.surfaceAt(t, n);
      return r === `water` || (!i && (r === `road` || r === `crosswalk`))
        ? !1
        : !e.statics.overlapsRect(t - 0.45, n - 0.45, t + 0.45, n + 0.45, 0.6);
    } catch {
      return !0;
    }
  };
  if (a(t, n)) return { x: t, z: n };
  for (let e = 1; e <= r; e += 1)
    for (let r = 0; r < 12; r++) {
      let i = (r / 12) * Math.PI * 2,
        o = t + Math.cos(i) * e,
        s = n + Math.sin(i) * e;
      if (a(o, s)) return { x: o, z: s };
    }
  let o = rt(e.plan, t, n);
  return { x: o.x, z: o.z };
}
var I4 = null;
function L4(e, t, n, r = 0) {
  if (!I4) {
    I4 = new Map();
    try {
      for (let e of av) for (let t of e.missionAnchors ?? []) I4.set(t.id, t);
      for (let e of w_()) I4.set(e.id, e);
    } catch (e) {
      console.warn(`[story] anchors`, e);
    }
  }
  let i = I4.get(e);
  return i
    ? { ...i, heading: i.heading ?? r }
    : (console.warn(`[story] no mission anchor ${e} — using the fallback`),
      {
        id: e,
        kind: `spot`,
        label: { zh: e, en: e },
        x: t,
        z: n,
        heading: r,
        radius: 120,
      });
}
function R4(e, t, n) {
  try {
    Promise.resolve(e.districts?.ensureResident?.(t, n)).catch(() => {});
  } catch {}
}
async function z4(e, t, n, r = 12) {
  let i = !1;
  Promise.resolve(e.ctx.districts?.ensureResident?.(t, n))
    .catch(() => {})
    .then(() => {
      i = !0;
    });
  let a = 0;
  await e.until((e) => i || (a += e) > r);
}
async function B4(e, t, n, r = 10, i = 320) {
  let a = e.ctx.buildings,
    o = e.ctx.interiors,
    s = (e) => {
      let o = [];
      for (let s of a.storefronts ?? []) {
        if (s.kind !== `convenience`) continue;
        let c = Math.hypot(s.x - t, s.z - n);
        if (c < r || c > i) continue;
        let l = a.storefront?.(s.poiId);
        !l ||
          (e && !l.painted) ||
          o.push({ x: l.x, z: l.z, facing: l.facing, poiId: s.poiId, d: c });
      }
      return o.sort((e, t) => e.d - t.d);
    },
    c = async (e) => {
      if (!o?.ensure) return e[0] ?? null;
      for (let t of e.slice(0, 8)) {
        let e = !1;
        try {
          let n = o.ensure(t.poiId, { now: !0, timeoutS: 8, holdS: 900 });
          e = o.hasStore?.(t.poiId) !== !1 && (await n);
        } catch {}
        if (e) return { x: t.x, z: t.z, facing: t.facing, poiId: t.poiId };
      }
      return null;
    },
    l = await c(s(!0));
  if (!l) {
    for (let t of s(!1).slice(0, 3))
      if ((await z4(e, t.x, t.z, 6), (l = await c(s(!0))), l)) break;
  }
  if (!l) {
    let e = s(!0)[0];
    l = e ? { x: e.x, z: e.z, facing: e.facing, poiId: e.poiId } : null;
  }
  return l;
}
async function V4(e, t, n, r, i = 12) {
  (await e.hud.fade(1, 0.5), await z4(e, t, n, i));
  try {
    (e.ctx.player.mode === `vehicle` && e.ctx.vehicles?.ejectPlayer?.(),
      e.ctx.player.teleport(t, n, r),
      e.ctx.cameraRig?.snapBehind?.());
  } catch {}
  e.hud.fade(0, 0.6);
}
var tRe = 0;
