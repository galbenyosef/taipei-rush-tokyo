// tokyo__assets__region-tokyo-BcM3fReU 250 — color
// Lines 99540-99881 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function a0(e) {
  (E1(), e.params.get(`shuto`) !== `0` && W1(e));
}
var o0 = { sim: (e, t, n) => new i0(e, t, n), pop: (e, t) => new j1(e, t) },
  s0 = 7,
  c0 = 16,
  l0 = 5,
  u0 = 26,
  d0 = 6,
  f0 = 2.8;
function p0(e, t) {
  let n = [];
  for (let e of t)
    n.push(
      e.curbX,
      e.curbZ,
      Math.sin(e.busHeading),
      -Math.cos(e.busHeading),
      c0,
      l0,
      f0,
    );
  let r = I1(e, e.links.length);
  for (let t of e.links) {
    let i = r[t.id];
    if (!(i >= 0)) continue;
    let a = t.road.halfWidth - 1.3,
      o = t.sx + t.dx * i + t.rx * a * e.side,
      s = t.sz + t.dz * i + t.rz * a * e.side;
    n.push(o, s, t.dx, t.dz, u0, d0, f0);
  }
  for (let t of gc(e)) {
    let [e, r] = yc(t),
      [i, a] = vc(t, (e + r) / 2, pc.lat);
    n.push(
      i,
      a,
      +(t.axis === `x`),
      +(t.axis === `z`),
      (r - e) / 2,
      (r - e) / 2,
      pc.half + 0.6,
    );
  }
  return new Float32Array(n);
}
function m0(e, t, n, r) {
  for (let i = 0; i < e.length; i += s0) {
    let a = t - e[i],
      o = n - e[i + 1],
      s = e[i + 2],
      c = e[i + 3],
      l = a * s + o * c;
    if (l < -e[i + 4] - r || l > e[i + 5] + r) continue;
    let u = a * -c + o * s;
    if (!(u < -e[i + 6] - r * 0.5 || u > e[i + 6] + r * 0.5)) return !0;
  }
  return !1;
}
var h0 = 0.75;
function g0(e) {
  let t = [];
  for (let n of e.dataset.closures ?? []) {
    let r = Ip(e, n);
    if (!r.length) continue;
    let i = r[0].road,
      a = 1 / 0,
      o = -1 / 0;
    for (let e of r) {
      let t = i.axis === `x` ? e.sx : e.sz,
        n = i.axis === `x` ? e.ex : e.ez;
      ((a = Math.min(a, t, n)), (o = Math.max(o, t, n)));
    }
    let s = i.at - i.halfWidth,
      c = i.at + i.halfWidth;
    t.push(
      i.axis === `x`
        ? { def: n, x0: a, z0: s, x1: o, z1: c }
        : { def: n, x0: s, z0: a, x1: c, z1: o },
    );
  }
  return t;
}
function _0(e) {
  let t = null,
    n = g0(e.plan);
  return (r, i, a) => {
    let o = e.time;
    if (n.length && o?.date) {
      let t = e.env?.hour ?? 12;
      for (let e of n)
        if (
          !(r + a < e.x0 || r - a > e.x1 || i + a < e.z0 || i - a > e.z1) &&
          (Pp(e.def, o.date, o.weekday, t) ||
            Pp(e.def, o.date, o.weekday, t + h0))
        )
          return !0;
    }
    if (!t) {
      let n = e.streets?.busStops;
      if (!n || !n.length) return !1;
      t = p0(e.plan, n);
    }
    return m0(t, r, i, a);
  };
}
var v0 = (e, t, n, r = 1, i = `ja`) => ({
    name: { zh: e, en: t, ja: n },
    voice: i,
    pitch: r,
  }),
  Q = {
    tae: v0(`妙子阿嬤`, `Tae`, `タエさん`, 1.12),
    gen: v0(`源さん`, `Gen-san`, `源さん`, 0.82),
    miko: v0(`ミコ`, `Miko`, `ミコ`, 1.25),
    todoroki: v0(`轟`, `Todoroki`, `轟`, 0.78),
    yuki: v0(`勇樹`, `Yuki`, `勇樹`, 1),
    kirishima: v0(`桐島警部補`, `Inspector Kirishima`, `桐島警部補`, 0.92),
    shimizu: v0(`志水的大將`, `Shimizu (auctioneer)`, `志水の大将`, 0.9, `ja`),
    flyer: v0(`發傳單的男人`, `Flyer man`, `チラシの男`, 1),
    crew: v0(`ネオンリンク的人`, `NeonLink crew`, `ネオンリンクの男`, 0.88),
    kamishiro: v0(`神城`, `Kamishiro`, `神城`, 0.95),
    hsiaoChing: v0(`小晴`, `Hsiao-Ching`, `小晴`, 1, null),
    todoroki2: v0(`轟`, `Todoroki`, `轟`, 0.78),
    tatsu: v0(`辰`, `Tatsu`, `辰`, 0.92),
    kito: v0(`鬼頭的老大`, `Old Kito`, `鬼頭の親分`, 0.7),
    kuroda: v0(`黑田`, `Kuroda`, `黒田`, 0.75),
    miura: v0(`三浦司機`, `Driver Miura`, `三浦運転士`, 0.88),
    dispatch: v0(`運行指令`, `Dispatcher`, `運行指令所`, 0.95),
    reporter: v0(`記者`, `Reporter`, `リポーター`, 1.2),
    officer: v0(`警察`, `Officer`, `警察官`, 0.95),
    clerk: v0(`店員`, `Clerk`, `店員`, 1.15),
    voicemail: v0(`語音信箱`, `Voicemail`, `留守番電話`, 1.2),
    station: v0(`站內廣播`, `Station announcement`, `駅アナウンス`, 1.05),
    rival: v0(`隔壁的上班族`, `Office worker next door`, `隣の会社員`, 0.95),
    passer: v0(`路人`, `Passer-by`, `通行人`, 1.05),
    crowd: v0(`人群`, `Crowd`, `客`, 1),
  },
  y0 = {
    tae: () =>
      Ht(`grandma`, `t3-tae`, {
        hair: { style: `elder`, color: 12170928 },
        top: { style: `blouse`, color: 15261906 },
        outer: { style: `cardigan`, color: 8018538, color2: 5914704 },
        bottom: { style: `wide`, color: 3816004 },
        shoes: { style: `slipper`, color: 6965818 },
        acc: zt({ kind: `apron`, color: 2899562 }),
      }),
    gen: () =>
      Ht(`taxiDriver`, `t3-gen`, {
        face: { wrinkles: 0.55, smile: 0.1 },
        hair: { style: `elder`, color: 10131086 },
        top: { style: `shirt`, color: 15790316, sleeve: `long`, tucked: !0 },
        outer: { style: `vest`, color: 2764346, color2: 1974832 },
        bottom: { style: `slacks`, color: 2763826, belt: 1315344 },
        shoes: { style: `dress`, color: 1381135 },
        acc: zt({ kind: `cap`, color: 1974832 }, `glasses`, `watch`),
      }),
    shimizu: () =>
      Ht(`vendor`, `t3-shimizu`, {
        hair: { style: `buzz`, color: 2762790 },
        top: { style: `sweater`, color: 9054762 },
        bottom: { style: `slacks`, color: 2763312 },
        acc: zt(
          { kind: `headband`, color: 15921902 },
          { kind: `apron`, color: 15921126 },
        ),
      }),
    flyer: () =>
      Ht(`hipster`, `t3-flyer`, {
        hair: { style: `twoblock`, color: 3811870 },
        top: { style: `tee`, color: 1052690 },
        outer: { style: `bomber`, color: 2760522, color2: 1577518 },
        bottom: { style: `slacks`, color: 1710622 },
        shoes: { style: `sneaker`, color: 15921906, color2: 14342874 },
        acc: zt(
          { kind: `lanyard`, color: 16727976 },
          { kind: `shoulderBag`, color: 1446938 },
        ),
      }),
    yuki: () =>
      Ht(`student`, `t3-yuki`, {
        height: 1.71,
        face: { smile: -0.3, brow: 0.35 },
        hair: { style: `bowl`, color: 2761244 },
        top: { style: `hoodie`, color: 5924464, color2: 4739674 },
        bottom: { style: `jeans`, color: 2898512 },
        shoes: { style: `sneaker`, color: 15263976, color2: 10132122 },
        acc: zt({ kind: `mask`, color: 15790320 }, `phone`),
      }),
    miko: () =>
      Ht(`ximenGirl`, `t3-miko`, {
        height: 1.58,
        hair: { style: `bangs`, color: 2759714, color2: 14183080 },
        top: { style: `hoodie`, color: 15967944, color2: 1710623 },
        bottom: { style: `skirt`, color: 1710623 },
        shoes: { style: `boot`, color: 1710623 },
        acc: zt({ kind: `shoulderBag`, color: 1710623 }, `phone`, {
          kind: `earbuds`,
          color: 16053492,
        }),
      }),
    courierA: () =>
      Ht(`hipster`, `t3-courier-a`, {
        hair: { style: `fade`, color: 1972760 },
        top: { style: `tee`, color: 15790314 },
        outer: { style: `bomber`, color: 2042442, color2: 1317940 },
        bottom: { style: `jeans`, color: 2764602 },
        acc: zt(
          { kind: `cap`, color: 1118481 },
          { kind: `backpack`, color: 1710618 },
        ),
      }),
    courierB: () =>
      Ht(`hipster`, `t3-courier-b`, {
        hair: { style: `fade`, color: 1972760 },
        top: { style: `hoodie`, color: 9079952, color2: 6974576 },
        bottom: { style: `jeans`, color: 2764602 },
        acc: zt(
          { kind: `backpack`, color: 1710618 },
          { kind: `mask`, color: 15790320 },
        ),
      }),
    hsiaoChing: () =>
      Ht(`friend`, `t3-hsiaoching`, {
        height: 1.6,
        hair: { style: `ponytail`, color: 2760216 },
        top: { style: `tee`, color: 16172754 },
        outer: { style: `cardigan`, color: 14271648, color2: 12889480 },
        bottom: { style: `jeans`, color: 3820138 },
        shoes: { style: `sneaker`, color: 15921906, color2: 14342874 },
        acc: zt({ kind: `tote`, color: 15260868 }),
      }),
    kamishiro: () =>
      Ht(`suit`, `t3-kamishiro`, {
        height: 1.78,
        face: { smile: 0.3, brow: 0.5 },
        hair: { style: `sidepart`, color: 1709586 },
        top: { style: `shirt`, color: 16185074, tucked: !0 },
        outer: { style: `blazer`, color: 2895412, color2: 2369068, closed: !1 },
        bottom: { style: `slacks`, color: 2895412, belt: 921104 },
        shoes: { style: `dress`, color: 1183500 },
        acc: zt({ kind: `watch`, color: 14211280 }),
      }),
    kirishima: () =>
      Ht(`detective`, `t3-kirishima`, {
        face: { facial: `none`, wrinkles: 0.15, smile: -0.1 },
        hair: { style: `fade`, color: 1380879 },
        top: { style: `shirt`, color: 15265267, tucked: !0 },
        outer: { style: `blazer`, color: 2041920, color2: 1581110, closed: !0 },
        bottom: { style: `slacks`, color: 2041920 },
        acc: zt({ kind: `lanyard`, color: 2777784 }, `watch`),
      }),
    todoroki: () =>
      Ht(`worker`, `t3-todoroki`, {
        build: `heavy`,
        face: { facial: `stubble`, wrinkles: 0.3, brow: 0.8 },
        hair: { style: `buzz`, color: 2762274 },
        top: { style: `tee`, color: 1710618 },
        outer: { style: `bomber`, color: 13115436, color2: 1710618 },
        bottom: { style: `track`, color: 1710618 },
        acc: zt({ kind: `headband`, color: 15921906 }),
      }),
    tatsu: () =>
      Ht(`enforcer`, `t3-tatsu`, {
        build: `avg`,
        hair: { style: `undercut`, color: 14205066 },
        top: { style: `hoodie`, color: 1118481, color2: 13214247 },
        bottom: { style: `track`, color: 1118481 },
        acc: zt(`sunglasses`, { kind: `necklace`, color: 14263584 }),
      }),
    kito: () =>
      Ht(`agong`, `t3-kito`, {
        face: { wrinkles: 0.75, brow: 0.6, smile: -0.1 },
        hair: { style: `elder`, color: 13158080 },
        top: { style: `shirt`, color: 15921386, tucked: !0 },
        outer: { style: `vest`, color: 5921374, color2: 4868686 },
        bottom: { style: `slacks`, color: 5921374 },
        shoes: { style: `dress`, color: 1380879 },
        acc: zt(`glasses`, { kind: `watch`, color: 14263584 }),
      }),
    kuroda: () =>
      Ht(`suit`, `t3-kuroda`, {
        build: `heavy`,
        face: { wrinkles: 0.35, brow: 0.8, smile: -0.2 },
        hair: { style: `buzz`, color: 2762274 },
        top: { style: `shirt`, color: 2763312, tucked: !0 },
        outer: { style: `blazer`, color: 1118484, color2: 789518, closed: !0 },
        bottom: { style: `slacks`, color: 1118484 },
        acc: zt(`sunglasses`),
      }),
    miura: () =>
      Ht(`salaryman`, `t3-miura`, {
        top: { style: `shirt`, color: 15331060, tucked: !0 },
        outer: { style: `blazer`, color: 1844792, color2: 1317932, closed: !0 },
        bottom: { style: `slacks`, color: 1844792 },
        acc: zt({ kind: `cap`, color: 1844792 }),
      }),
    officer: () => hn.cop,
    crew: () => hn.enforcer,
    crew2: () =>
      Ht(`enforcer`, `t3-crew2`, {
        build: `avg`,
        hair: { style: `twoblock`, color: 6965802 },
        top: { style: `hoodie`, color: 1381658, color2: 921106 },
        bottom: { style: `track`, color: 1579036 },
        acc: zt(`sunglasses`, { kind: `necklace`, color: 14263584 }),
      }),
    clerk: () =>
      Ht(`clerk`, `t3-clerk`, {
        top: { style: `shirt`, color: 4030153, sleeve: `long` },
        acc: zt({ kind: `lanyard`, color: 15921906 }),
      }),
    officeM: () => hn.salaryman,
    officeF: () => hn.officeLady,
  },
  b0 = 16762941,
  x0 = 16731486,
  S0 = 5088255;
function C0(e, t, n, r = 10, i = !1) {
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
var w0 = null;
