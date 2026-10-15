// tokyo/assets/region-tokyo-BcM3fReU 102 — math
// Lines 48143-48482 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var NC = (e, t) => [MC(jC, e), MC(jC, t)].sort((e, t) => e - t),
  [ste, cte] = NC(560, 190),
  [lte, ute] = NC(-200, -400),
  PC = [
    [-700, -636],
    [-250, -636],
    [-200, -566],
    [-150, -566],
    [-42, -430],
  ],
  FC = (e, t) =>
    e
      .slice(0, t)
      .reduce(
        (t, n, r) => t + Math.hypot(e[r + 1][0] - n[0], e[r + 1][1] - n[1]),
        0,
      ),
  dte = [
    {
      id: `jr-main`,
      name: G(
        `JR線高架橋（山手線・京浜東北線・東海道線・新幹線）`,
        `JR高架橋（山手線・京濱東北線・東海道線・新幹線）`,
        `JR Viaduct (Yamanote / Keihin-Tohoku / Tokaido / Shinkansen)`,
      ),
      path: jC,
      halfWidth: 14,
      structure: `viaduct`,
      deck: 8,
      lines: [`JY`, `JK`, `JT`, `JU`, `SK`],
      arches: [
        { from: ste, to: cte, style: `brick` },
        { from: lte, to: ute, style: `brick` },
      ],
    },
    {
      id: `jr-chuo`,
      name: G(`中央線高架橋`, `中央線高架橋`, `Chuo Line Viaduct`),
      path: PC,
      halfWidth: 7,
      structure: `viaduct`,
      deck: 9,
      lines: [`JC`],
      arches: [{ from: FC(PC, 2), to: FC(PC, 3) + 40, style: `brick` }],
    },
    {
      id: `jr-sobu`,
      name: G(`総武線高架橋`, `總武線高架橋`, `Sobu Line Viaduct`),
      path: [
        [-700, -644],
        [700, -644],
      ],
      halfWidth: 6,
      structure: `viaduct`,
      deck: 15,
      lines: [`JB`],
    },
  ],
  fte = [
    {
      id: `shuto-c1`,
      name: G(
        `首都高速都心環状線`,
        `首都高速都心環狀線`,
        `Shuto Expressway Inner Circular Route`,
      ),
      route: `C1`,
      halfWidth: 9,
      path: [
        [-800, -180],
        [-200, -180],
        [-74, -180],
        [-48, -180],
        [-5, -180],
        [60, -180],
        [320, -180],
        [290, -140],
        [290, -32],
        [290, 125],
        [290, 640],
        [250, 700],
        [-15, 700],
        [-85, 743.6],
        [-165, 781.8],
        [-370, 1e3],
      ],
      levels: [
        11, 11, 6.4, 4.6, 4.6, 6.8, 11, 10, 0, -7, -7, 2, 13, 17.5, 17.5, 17.5,
      ],
      portals: [8],
    },
    {
      id: `shuto-1`,
      name: G(
        `首都高速1号上野線`,
        `首都高速1號上野線`,
        `Shuto Expressway Route 1 (Ueno)`,
      ),
      route: `1`,
      halfWidth: 9,
      overRoads: [`showa-edobashi`, `showa-ueno`],
      path: [
        [320, -180],
        [320, -510],
        [75, -510],
        [75, -1600],
      ],
      levels: [11, 10, 10, 10],
    },
    {
      id: `shuto-6`,
      name: G(
        `首都高速6号向島線`,
        `首都高速6號向島線`,
        `Shuto Expressway Route 6 (Mukojima)`,
      ),
      route: `6`,
      halfWidth: 8,
      path: [
        [320, -180],
        [558, -180],
        [558, -620],
        [620, -720],
        [760, -960],
      ],
      levels: [11, 10, 10, 10, 10],
    },
    {
      id: `shuto-kk`,
      name: G(
        `東京高速道路（KK線）`,
        `東京高速道路（KK線）`,
        `Tokyo Expressway (KK Line)`,
      ),
      route: `KK`,
      halfWidth: 7,
      path: [
        [-36, 218],
        [-36, 600],
        [-15, 608],
        [250, 608],
        [290, 640],
      ],
      levels: [9, 9, 9, 9, 2],
    },
  ],
  IC = {
    id: `ueno-plateau`,
    name: G(`上野台地（上野山）`, `上野台地（上野山）`, `Ueno Plateau`),
    kind: `plateau`,
    height: 16,
    polygon: [
      [-139, -1520],
      [-139, -1192],
      [-175, -1188],
      [-232, -1200],
      [-300, -1228],
      [-420, -1262],
      [-480, -1290],
      [-480, -1520],
    ],
    edges: [
      { from: [-139, -1520], to: [-139, -1192], kind: `cliff`, width: 0 },
      { from: [-139, -1192], to: [-232, -1200], kind: `cliff`, width: 0 },
      { from: [-232, -1200], to: [-480, -1290], kind: `slope`, width: 45 },
    ],
    stairs: [
      {
        id: `ueno-park-south`,
        name: G(
          `上野公園 正面階段`,
          `上野公園 正面階梯`,
          `Ueno Park Main Stairs`,
        ),
        x: -168,
        z: -1186,
        heading: 0,
        width: 12,
        length: 26,
      },
      {
        id: `ueno-park-keisei`,
        x: -142,
        z: -1196,
        heading: -Math.PI / 2,
        width: 5,
        length: 24,
      },
      {
        id: `ueno-park-kiyomizu`,
        x: -230,
        z: -1197,
        heading: 0,
        width: 5,
        length: 24,
      },
    ],
  },
  pte = [IC],
  mte = [
    {
      x: -820,
      z: -1150,
      height: 18,
      radius: 380,
      name: G(`本郷台地`, `本鄉台地`, `Hongo Plateau`),
    },
    {
      x: -520,
      z: -1800,
      height: 18,
      radius: 360,
      name: G(`上野台地（谷中）`, `上野台地（谷中）`, `Yanaka Heights`),
    },
    {
      x: -800,
      z: -480,
      height: 14,
      radius: 280,
      name: G(`駿河台`, `駿河台`, `Surugadai`),
    },
  ],
  LC = IC.height,
  RC = -139,
  zC = -1191,
  BC = -1196,
  VC = -175,
  HC = -232,
  UC = -1250,
  WC = [-232, -1200],
  GC = [-480, -1290],
  KC = 14.5,
  qC = -480,
  JC = -1520,
  YC = 250,
  XC = 700,
  ZC = GC[0] - WC[0],
  QC = GC[1] - WC[1],
  $C = Math.hypot(ZC, QC),
  ew = ZC / $C,
  tw = QC / $C,
  nw = -ew > 0 ? tw : -tw,
  rw = -ew > 0 ? -ew : ew,
  iw = jC.findIndex((e) => e[1] <= UC),
  aw = jC.slice(iw);
{
  let e = aw[aw.length - 2],
    t = aw[aw.length - 1],
    n = 800 / Math.hypot(t[0] - e[0], t[1] - e[1]);
  aw.push([t[0] + (t[0] - e[0]) * n, t[1] + (t[1] - e[1]) * n]);
}
var ow = new Float64Array((aw.length - 1) * 6);
for (let e = 0; e + 1 < aw.length; e++) {
  let [t, n] = aw[e],
    [r, i] = aw[e + 1],
    a = Math.hypot(r - t, i - n),
    o = (r - t) / a,
    s = (i - n) / a;
  ow.set([t, n, s, -o, n, i], e * 6);
}
function sw(e, t) {
  let n = ow.length / 6,
    r = 0;
  for (; r < n - 1 && t < ow[r * 6 + 5];) r++;
  let i = r * 6;
  return (e - ow[i]) * ow[i + 2] + (t - ow[i + 1]) * ow[i + 3];
}
function cw(e) {
  let t = ow.length / 6,
    n = 0;
  for (; n < t - 1 && e < ow[n * 6 + 5];) n++;
  let r = ow[n * 6 + 2];
  return (-14.5 - sw(0, e)) / r;
}
function lw(e) {
  let t = ow.length / 6,
    n = 0;
  for (; n < t - 1 && e < ow[n * 6 + 5];) n++;
  return (24 - sw(0, e)) / ow[n * 6 + 2];
}
var uw = nC.find((e) => e.id === `kototoi`),
  dw = uw.at,
  fw = sg(uw, KS),
  pw = cw(dw),
  mw = lw(dw) - 1,
  hw = 25;
function gw(e) {
  if (e <= pw) return 1;
  if (e >= -30) return 0;
  let t = -30 - pw,
    n = hw,
    r = e - pw,
    i = 1 / (t - n),
    a;
  if (r < n) a = (i * r * r) / 50;
  else if (r > t - n) {
    let e = t - r;
    a = 1 - (i * e * e) / 50;
  } else a = i * (r - n / 2);
  return 1 - a;
}
var _w = IC.stairs.map((e) => {
    let t = Math.round(Math.sin(e.heading) * 1e6) / 1e6,
      n = Math.round(-Math.cos(e.heading) * 1e6) / 1e6;
    return {
      id: e.id,
      x: e.x,
      z: e.z,
      dx: t,
      dz: n,
      half: e.width / 2,
      len: e.length,
    };
  }),
  vw = (e) => (e <= 0 ? 0 : e >= 1 ? 1 : e * e * e * (e * (e * 6 - 15) + 10));
function yw(e, t) {
  let n;
  if (t >= -1250) {
    if (e >= -139) return 0;
    if (e >= -232) return t >= (e >= -175 ? -1191 : -1196) ? 0 : 1;
    n = 1;
  } else {
    let r = sw(e, t);
    if (r <= 14.5) return 0;
    n = r >= 24 ? 1 : vw((r - KC) / 9.5);
  }
  if (e < -232) {
    let r = (e - WC[0]) * nw + (t - WC[1]) * rw;
    if (r >= 45) return 0;
    r > 0 && (n *= 1 - vw(r / 45));
  }
  if (e < qC || t < JC) {
    let r = e < qC ? qC - e : 0,
      i = t < JC ? JC - t : 0,
      a = Math.sqrt(r * r + i * i);
    if (a >= XC) return 0;
    a > YC && (n *= 1 - vw((a - YC) / 450));
  }
  return n;
}
