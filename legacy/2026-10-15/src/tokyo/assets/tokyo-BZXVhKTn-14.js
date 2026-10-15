// tokyo/assets/tokyo-BZXVhKTn 14 — msg
// Lines 5957-6203 of readable/tokyo/assets/tokyo-BZXVhKTn.pretty.js (statement-aligned).
function Ar(e) {
  return ((e %= Tr), e > Math.PI ? e - Tr : e <= -Math.PI ? e + Tr : e);
}
function jr(e) {
  try {
    return e.vehicles.playerVehicle;
  } catch {
    return null;
  }
}
function Mr(e, t, n, r, i, a, o, s, c) {
  let l = e.getContext(`2d`),
    u = e.width,
    d = e.height,
    f = Math.min(2, window.devicePixelRatio || 1),
    p = s * f;
  l.setTransform(p, 0, 0, p, u / 2 - i * p, d / 2 - a * p);
  let m = u / 2 / p,
    h = d / 2 / p,
    g = { minX: i - m, maxX: i + m, minZ: a - h, maxZ: a + h };
  if (
    (t && mr(l, g, n, t.look), t && xr(l, t, g), r.waypoint && r.count >= 2)
  ) {
    let e = r.pts;
    (l.beginPath(), l.moveTo(e[0], e[1]));
    for (let t = 1; t < r.count; t++) l.lineTo(e[t * 2], e[t * 2 + 1]);
    ((l.lineJoin = `round`),
      (l.lineCap = `round`),
      (l.strokeStyle = r.colors.core),
      (l.lineWidth = (4 * f) / p),
      l.stroke());
  }
  l.setTransform(1, 0, 0, 1, 0, 0);
  let _ = Math.round(26 * f);
  if (c) {
    let e = c.player,
      t = u / 2 + (e.x - i) * p,
      n = d / 2 + (e.z - a) * p;
    t > 0 &&
      t < u &&
      n > 0 &&
      n < d &&
      (l.translate(t, n),
      l.rotate(e.heading),
      l.drawImage(Ge(_), -_ / 2, -_ / 2),
      l.setTransform(1, 0, 0, 1, 0, 0));
    let r = Math.round(30 * f);
    ((l.globalAlpha = 0.35),
      (l.fillStyle = `#ffc93d`),
      l.beginPath(),
      l.arc(u / 2, d / 2, r * 0.9, 0, Tr),
      l.fill(),
      (l.globalAlpha = 1),
      l.drawImage(qe(c.icon, r), u / 2 - r / 2, d / 2 - r / 2));
    return;
  }
  (l.translate(u / 2, d / 2),
    l.rotate(o),
    l.drawImage(Ge(_), -_ / 2, -_ / 2),
    l.setTransform(1, 0, 0, 1, 0, 0));
}
var Nr = {
    name: { zh: `東京狂飆`, en: `TOKYO RUSH`, ja: `東京ラッシュ` },
    tagline: {
      zh: `去東京狂飆`,
      en: `Full throttle through Tokyo`,
      ja: `東京を駆け抜けろ`,
    },
    city: { zh: `東京`, en: `Tokyo`, ja: `東京` },
    slug: `tokyo-rush`,
  },
  Pr = `'PingFang TC','Noto Sans TC','Microsoft JhengHei','Heiti TC',sans-serif`,
  Fr = `'Hiragino Sans','Hiragino Kaku Gothic ProN','Noto Sans JP','Noto Sans CJK JP','Yu Gothic','Meiryo','PingFang TC','Noto Sans TC',sans-serif`,
  Ir = `'Avenir Next Condensed','Bahnschrift','DIN Condensed','Roboto Condensed','Arial Narrow',sans-serif`,
  Lr = [
    {
      w: 0.86,
      h: 1,
      strokes: [
        [
          [0.14, 0.1],
          [0.8, 0.1],
        ],
        [
          [0.02, 0.4],
          [0.9, 0.4],
          [0.84, 0.66],
          [0.3, 1],
        ],
      ],
    },
    {
      w: 0.7,
      h: 0.66,
      strokes: [
        [
          [0.05, 0.12],
          [0.2, 0.52],
        ],
        [
          [0.38, 0.06],
          [0.52, 0.44],
        ],
        [
          [0.94, 0.06],
          [0.78, 0.6],
          [0.24, 1],
        ],
      ],
    },
    {
      w: 0.9,
      h: 1,
      strokes: [
        [
          [0.04, 0.06],
          [0.36, 0.24],
        ],
        [
          [0, 0.4],
          [0.3, 0.56],
        ],
        [
          [0.06, 1],
          [0.6, 0.8],
          [0.98, 0.1],
        ],
      ],
    },
    {
      w: 0.7,
      h: 0.66,
      strokes: [
        [
          [0.12, 0.2],
          [0.8, 0.2],
          [0.76, 0.86],
        ],
        [
          [0, 0.86],
          [1, 0.86],
        ],
      ],
    },
  ];
function Rr(e, t, n, r, i = 1) {
  let a = ``,
    o = e;
  for (let e of Lr) {
    let s = e.w * n,
      c = e.h * n * i,
      l = t - c;
    for (let t of e.strokes)
      a += t
        .map(
          ([e, t], n) =>
            `${n ? `L` : `M`}${(o + e * s).toFixed(1)} ${(l + t * c).toFixed(1)}`,
        )
        .join(``);
    o += s + r;
  }
  return { d: a, width: o - r - e };
}
function zr(e, t, n, r) {
  let i = (t, n, r = 0) =>
    `<path d="${e}"${r ? ` transform="translate(${r} ${r})"` : ``} fill="none" stroke="${t}" stroke-width="${n}" stroke-linejoin="miter" stroke-miterlimit="3" stroke-linecap="square"/>`;
  return (
    i(`#09090c`, t + n * 2, r) +
    i(`#d81f2a`, t, r) +
    i(`#09090c`, t + n * 2) +
    i(`#fff`, t)
  );
}
function Br(e = ``) {
  return Vr(`${e} tk-brand-zh`) + Hr(`${e} tk-brand-ja`);
}
function Vr(e) {
  return `<svg class="${e}" viewBox="0 0 492 214" role="img" aria-label="東京狂飆 去東京狂飆">
  <g font-family="${Pr}">
    <rect x="4" y="4" width="104" height="206" rx="3" fill="#d81f2a" stroke="#09090c" stroke-width="6"/>
    <rect x="13.5" y="13.5" width="85" height="187" fill="none" stroke="#fff" stroke-width="2.4" opacity=".92"/>
    <text x="56" y="95" font-size="72" font-weight="900" fill="#fff" text-anchor="middle">東</text>
    <text x="56" y="182" font-size="72" font-weight="900" fill="#fff" text-anchor="middle">京</text>
    <g font-size="142" font-weight="900" stroke="#09090c" stroke-width="5" paint-order="stroke" transform="skewX(-6)">
      <text x="146" y="141" fill="#d81f2a">狂飆</text>
      <text x="140" y="135" fill="#fff">狂飆</text>
    </g>
    <rect x="126" y="160" width="232" height="46" fill="#09090c"/>
    <text x="142" y="193" font-size="28" font-weight="800" fill="#fff" letter-spacing="7">去東京狂飆</text>
    <text x="370" y="179" font-size="13" font-weight="800" fill="#ff4b52" letter-spacing="3.6" font-family="${Ir}">TOKYO</text>
    <text x="370" y="197" font-size="13" font-weight="800" fill="#fff" letter-spacing="3.2" font-family="${Ir}">RUSH</text>
  </g>
</svg>`;
}
function Hr(e) {
  return `<svg class="${e}" viewBox="0 0 492 214" role="img" aria-label="東京ラッシュ TOKYO RUSH">
  <g font-family="${Fr}">
    <rect x="4" y="4" width="104" height="206" rx="3" fill="#d81f2a" stroke="#09090c" stroke-width="6"/>
    <rect x="13.5" y="13.5" width="85" height="187" fill="none" stroke="#fff" stroke-width="2.4" opacity=".92"/>
    <text x="56" y="95" font-size="72" font-weight="900" fill="#fff" text-anchor="middle">東</text>
    <text x="56" y="182" font-size="72" font-weight="900" fill="#fff" text-anchor="middle">京</text>
    <g transform="skewX(-10) translate(18 0)">${zr(Rr(142, 142, 100, 6, 1.16).d, 20, 4.5, 6)}</g>
    <rect x="126" y="160" width="232" height="46" fill="#09090c"/>
    <text x="242" y="192" font-size="24" font-weight="800" fill="#fff" letter-spacing="2.6" text-anchor="middle">東京を駆け抜けろ</text>
    <text x="370" y="179" font-size="13" font-weight="800" fill="#ff4b52" letter-spacing="3.6" font-family="${Ir}">TOKYO</text>
    <text x="370" y="197" font-size="13" font-weight="800" fill="#fff" letter-spacing="3.2" font-family="${Ir}">RUSH</text>
  </g>
</svg>`;
}
function Ur(e = ``) {
  return `<svg class="${e} tk-brand-zh" viewBox="0 0 206 64" role="img" aria-label="東京狂飆">
  <rect x="2" y="2" width="84" height="60" rx="2" fill="#d81f2a" stroke="#09090c" stroke-width="3"/>
  <rect x="7.5" y="7.5" width="73" height="49" fill="none" stroke="#fff" stroke-width="1.6" opacity=".9"/>
  <text x="44" y="44" font-family="${Pr}" font-size="30" font-weight="900" fill="#fff" text-anchor="middle" letter-spacing="3">東京</text>
  <text x="98" y="48" font-family="${Pr}" font-size="44" font-weight="900" fill="#fff" stroke="#09090c" stroke-width="2" paint-order="stroke">狂飆</text>
</svg><svg class="${e} tk-brand-ja" viewBox="0 0 206 64" role="img" aria-label="東京ラッシュ">
  <rect x="2" y="2" width="84" height="60" rx="2" fill="#d81f2a" stroke="#09090c" stroke-width="3"/>
  <rect x="7.5" y="7.5" width="73" height="49" fill="none" stroke="#fff" stroke-width="1.6" opacity=".9"/>
  <text x="44" y="44" font-family="${Fr}" font-size="30" font-weight="900" fill="#fff" text-anchor="middle" letter-spacing="3">東京</text>
  <g transform="skewX(-10) translate(8 0)">${zr(Rr(98, 54, 31, 2.5, 1.3).d, 7.4, 1.5, 2)}</g>
</svg>`;
}
var Wr = [
    { id: `all`, msg: { zh: `附近`, en: `Nearby` } },
    { id: `story`, msg: J.catStory },
    { id: `side`, msg: J.catSide },
    { id: `job`, msg: J.catJob },
    { id: `race`, msg: J.catRace },
    { id: `culture`, msg: J.catCulture },
  ],
  Gr = (e) =>
    e >= 1e3 ? `${(e / 1e3).toFixed(1)} km` : `${Math.round(e / 10) * 10} m`;
function Kr(e) {
  try {
    return e.ctx.missions.list() ?? [];
  } catch {
    return [];
  }
}
function qr(e) {
  try {
    return e.ctx.missions.active?.id ?? null;
  } catch {
    return null;
  }
}
var Jr = (e) => e.completed && !e.repeatable;
