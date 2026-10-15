// tokyo/assets/region-tokyo-d-akihabara-CilcTp8S 02 — minx
// Lines 171-503 of readable/tokyo/assets/region-tokyo-d-akihabara-CilcTp8S.pretty.js (statement-aligned).
var k = {
    w65: { minX: -183.75, minZ: -757.75, maxX: -161.75, maxZ: -706.25 },
    w66: { minX: -183.75, minZ: -693.75, maxX: -161.75, maxZ: -624.25 },
    e90: { minX: -128.25, minZ: -757.75, maxX: -86.25, maxZ: -697.25 },
    e91: { minX: -128.25, minZ: -684.75, maxX: -86.25, maxZ: -618.25 },
  },
  ne = 17.5,
  re = [
    {
      box: { ...k.w65 },
      label: `akiba-sotokanda3-north (中央通り west + 裏通り)`,
    },
    {
      box: { ...k.w66 },
      label: `akiba-sotokanda3-south (中央通り west + 裏通り)`,
    },
    {
      box: {
        minX: k.e90.minX,
        minZ: k.e90.minZ,
        maxX: k.e90.minX + ne,
        maxZ: k.e90.maxZ,
      },
      label: `akiba-sotokanda4 (中央通り east row)`,
    },
    {
      box: {
        minX: k.e91.minX,
        minZ: k.e91.minZ,
        maxX: k.e91.minX + ne,
        maxZ: -652,
      },
      label: `akiba-sotokanda1-north (中央通り east row)`,
    },
    {
      box: {
        minX: k.e91.minX,
        minZ: -636,
        maxX: k.e91.minX + ne,
        maxZ: k.e91.maxZ,
      },
      label: `akiba-sotokanda1-south (中央通り east row)`,
    },
  ],
  ie = { minX: -215, minZ: -790, maxX: -40, maxZ: -540 },
  ae = { x: -145, hokotenZ0: -770, hokotenZ1: -612 },
  oe = { x: -190, z0: -770, z1: -612 },
  se = [-172.75, k.w65.maxX - 0.12],
  ce = [k.w65.minX + 0.12, -172.75],
  le = [k.e90.minX + 0.12, k.e90.minX + ne],
  ue = [
    {
      id: `w65`,
      x: se,
      dir: `E`,
      specs: [
        [
          -757.75,
          -750.5,
          `anzen`,
          2,
          `anzen`,
          `akiba.anzen.name`,
          { corner: `N` },
        ],
        [-750.5, -742.5, `gacha`, 7, `gacha`, `akiba.gacha.name`],
        [-742.5, -735.5, `retro`, 6, `retro`, `akiba.shop.retro`],
        [-735.5, -727.5, `pcshop`, 8, `pcparts`, `tsukuyo`],
        [-727.5, -720.5, `zakkyo`, 9, `figure`, `akiba.word.figure`],
        [
          -720.5,
          -706.25,
          `softnap`,
          8,
          `electronics`,
          `softnap`,
          { corner: `S`, v: 0 },
        ],
      ],
    },
    {
      id: `w66`,
      x: se,
      dir: `E`,
      specs: [
        [
          -693.75,
          -682.75,
          `office`,
          18,
          `konbini`,
          `brand.lawsan`,
          {
            corner: `N`,
            poi: {
              id: `convenience-62`,
              dir: `N`,
              at: 5.6,
              width: 6,
              kind: `konbini`,
              name: `LAWSAN`,
              category: `trade.konbini.name`,
              hours: `24H`,
            },
          },
        ],
        [-682.75, -673.75, `arcade`, 7, `crane`, `gigoo`],
        [-673.75, -663.75, `softnap`, 8, `electronics`, `softnap`, { v: 1 }],
        [-663.75, -652, `redarcade`, 7, `crane`, `akiba.tophat.name`],
        [-636, -630.5, `onoden`, 5, `electronics`, `akiba.onoden.name`],
        [-630.5, -624.25, `naox`, 8, `dutyfree`, `naox`, { corner: `S` }],
      ],
    },
    {
      id: `u65`,
      x: ce,
      dir: `W`,
      specs: [
        [-757.75, -748, `pcshop`, 5, `junk`, `chanpara`, { corner: `N` }],
        [-748, -741, `kebab`, 3, `kebab`, `akiba.shop.kebab`],
        [-741, -734, `maid`, 5, `maid`, `akiba.maid.name.2`],
        [-734, -727, `junk`, 4, `junk`, `trade.junk.sign.junk`],
        [-727, -716, `mandarara`, 8, `figure`, `mandarara`],
        [
          -716,
          -706.25,
          `zakkyo`,
          6,
          `konbini`,
          `brand.lawsan`,
          {
            corner: `S`,
            poi: {
              id: `convenience-61`,
              dir: `W`,
              at: 4.9,
              width: 6,
              kind: `konbini`,
              name: `LAWSAN`,
              category: `trade.konbini.name`,
              hours: `24H`,
            },
          },
        ],
      ],
    },
    {
      id: `u66`,
      x: ce,
      dir: `W`,
      specs: [
        [
          -693.75,
          -685,
          `retro`,
          5,
          `retro`,
          `akiba.shop.retro`,
          { corner: `N`, v: 1 },
        ],
        [-685, -677, `card`, 5, `card`, `akiba.shop.card`],
        [-677, -669, `maid`, 5, `maid`, `akiba.maid.name.3`],
        [-669, -661, `junk`, 4, `junk`, `trade.junk.sign.junk`, { v: 1 }],
        [-661, -652, `radiodept`, 4, `pcparts`, `akiba.radiodept.name`],
        [
          -636,
          -624.25,
          `zakkyo`,
          4,
          `ramen`,
          `trade.ramen.name`,
          { corner: `S` },
        ],
      ],
    },
    {
      id: `e90`,
      x: le,
      dir: `W`,
      specs: [
        [
          -757.75,
          -751,
          `zakkyo`,
          6,
          `gacha`,
          `akiba.word.gacha`,
          { corner: `N`, v: 2 },
        ],
        [-751, -744, `maid`, 7, `maid`, `akiba.maid.name.1`],
        [-744, -730, `donco`, 8, `donco`, `doncoyote`],
        [-730, -720, `anime`, 8, `figure`, `animake`],
        [-720, -711, `arcade`, 7, `crane`, `titlestation`],
        [
          -711,
          -697.25,
          `piccamera`,
          8,
          `electronics`,
          `piccamera`,
          {
            corner: `S`,
            poi: {
              id: `bubbletea-93`,
              dir: `S`,
              at: 6.6,
              width: 3.2,
              kind: `tea`,
              name: `珍煮紅`,
              category: `trade.tea-stand.name`,
              hours: `10:00-21:00`,
            },
          },
        ],
      ],
    },
    {
      id: `e91`,
      x: le,
      dir: `W`,
      specs: [
        [
          -684.75,
          -673.5,
          `zakkyo`,
          8,
          `card`,
          `akiba.word.toreka`,
          { corner: `N`, v: 3 },
        ],
        [-673.5, -666.5, `kebab`, 5, `kebab`, `akiba.shop.kebab`, { v: 1 }],
        [-666.5, -652, `hobby`, 10, `figure`, `akiba.hobby.name`],
        [-636, -627, `gamies`, 7, `figure`, `akiba.gamies.name`],
        [-627, -618.25, `karaoke`, 8, `crane`, `gigoo`, { corner: `S` }],
      ],
    },
  ],
  de = 4.3,
  fe = 3.45,
  pe = (e) => de + (e - 1) * fe + 0.9;
function me() {
  let e = [],
    t = ue.map((t) =>
      t.specs.map(([n, r, i, a, o, s, c]) => {
        let l = {
          id: `${t.id}-${e.length}`,
          x0: t.x[0],
          x1: t.x[1],
          z0: n,
          z1: r,
          dir: t.dir,
          floors: a,
          kind: i,
          shop: o,
          name: s,
          ...c,
        };
        return (e.push(l), l);
      }),
    );
  ue.forEach((e, n) => {
    let r = t[n];
    r.forEach((t, n) => {
      let i =
          n > 0 && Math.abs(r[n - 1].z1 - t.z0) < 1 ? pe(r[n - 1].floors) : 0,
        a =
          n + 1 < r.length && Math.abs(r[n + 1].z0 - t.z1) < 1
            ? pe(r[n + 1].floors)
            : 0;
      e.dir === `E`
        ? ((t.coverL = a), (t.coverR = i))
        : ((t.coverL = i), (t.coverR = a));
    });
  });
  let n = (e, t) => {
    for (let n of e) {
      let e = 1 / 0;
      for (let r of t)
        r.z1 > n.z0 + 0.5 &&
          r.z0 < n.z1 - 0.5 &&
          (e = Math.min(e, pe(r.floors)));
      n.coverB = Number.isFinite(e) ? e : 0;
    }
  };
  return (n(t[0], t[2]), n(t[2], t[0]), n(t[1], t[3]), n(t[3], t[1]), e);
}
var he = new Uint8Array(256);
for (let e = 0; e < 256; e++) he[e] = Math.round(255 * (e / 255) ** 2.2);
var ge = (e) => he[e <= 0 ? 0 : e >= 255 ? 255 : Math.round(e)];
function A(e, t, n = 1) {
  return (
    e.setColor(
      ge(((t >> 16) & 255) * n),
      ge(((t >> 8) & 255) * n),
      ge((t & 255) * n),
    ),
    e
  );
}
function j(e, t, n, r, i, a, o, s) {
  let c = e.n;
  return (
    e.quad(t, a, n, r, a, i, r, o, i, t, o, n, s.u0, s.v0, s.u1, s.v1),
    c
  );
}
function _e(e, t, n, r, i, a, o, s, c, l, u, d) {
  let f = s.u1 - s.u0,
    p = s.v1 - s.v0;
  e.quad(
    t,
    a,
    n,
    r,
    a,
    i,
    r,
    o,
    i,
    t,
    o,
    n,
    s.u0 + f * c,
    s.v0 + p * u,
    s.u0 + f * l,
    s.v0 + p * d,
  );
}
function ve(e, t, n, r, i, a, o, s = !1) {
  s
    ? e.quad(t, a, n, r, a, n, r, a, i, t, a, i, o.u0, o.v0, o.u1, o.v1)
    : e.quad(t, a, i, r, a, i, r, a, n, t, a, n, o.u0, o.v0, o.u1, o.v1);
}
