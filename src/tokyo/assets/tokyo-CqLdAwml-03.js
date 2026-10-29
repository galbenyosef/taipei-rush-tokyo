// tokyo/assets/tokyo-CqLdAwml 03 — console
// Lines 631-931 of readable/tokyo/assets/tokyo-CqLdAwml.pretty.js (statement-aligned).
var Y = {
    name: { zh: `東京狂飆`, en: `TOKYO RUSH`, ja: `東京ラッシュ` },
    tagline: {
      zh: `去東京狂飆`,
      en: `Full throttle through Tokyo`,
      ja: `東京を駆け抜けろ`,
    },
    city: { zh: `東京`, en: `Tokyo`, ja: `東京` },
    slug: `tokyo-rush`,
  },
  tn = `'PingFang TC','Noto Sans TC','Microsoft JhengHei','Heiti TC',sans-serif`,
  nn = `'Hiragino Sans','Hiragino Kaku Gothic ProN','Noto Sans JP','Noto Sans CJK JP','Yu Gothic','Meiryo','PingFang TC','Noto Sans TC',sans-serif`,
  rn = `'Avenir Next Condensed','Bahnschrift','DIN Condensed','Roboto Condensed','Arial Narrow',sans-serif`,
  an = [
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
function on(e, t, n, r, i = 1) {
  let a = ``,
    o = e;
  for (let e of an) {
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
function sn(e, t, n, r) {
  let i = (t, n, r = 0) =>
    `<path d="${e}"${r ? ` transform="translate(${r} ${r})"` : ``} fill="none" stroke="${t}" stroke-width="${n}" stroke-linejoin="miter" stroke-miterlimit="3" stroke-linecap="square"/>`;
  return (
    i(`#09090c`, t + n * 2, r) +
    i(`#d81f2a`, t, r) +
    i(`#09090c`, t + n * 2) +
    i(`#fff`, t)
  );
}
function cn(e = ``, t = `zh`) {
  return t === `en`
    ? $t(e, `Tokyo`, `TOK`, `YO`)
    : ln(`${e} tk-brand-zh`) + un(`${e} tk-brand-ja`);
}
function ln(e) {
  return `<svg class="${e}" viewBox="0 0 492 214" role="img" aria-label="東京狂飆 去東京狂飆">
  <g font-family="${tn}">
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
    <text x="370" y="179" font-size="13" font-weight="800" fill="#ff4b52" letter-spacing="3.6" font-family="${rn}">TOKYO</text>
    <text x="370" y="197" font-size="13" font-weight="800" fill="#fff" letter-spacing="3.2" font-family="${rn}">RUSH</text>
  </g>
</svg>`;
}
function un(e) {
  return `<svg class="${e}" viewBox="0 0 492 214" role="img" aria-label="東京ラッシュ TOKYO RUSH">
  <g font-family="${nn}">
    <rect x="4" y="4" width="104" height="206" rx="3" fill="#d81f2a" stroke="#09090c" stroke-width="6"/>
    <rect x="13.5" y="13.5" width="85" height="187" fill="none" stroke="#fff" stroke-width="2.4" opacity=".92"/>
    <text x="56" y="95" font-size="72" font-weight="900" fill="#fff" text-anchor="middle">東</text>
    <text x="56" y="182" font-size="72" font-weight="900" fill="#fff" text-anchor="middle">京</text>
    <g transform="skewX(-10) translate(18 0)">${sn(on(142, 142, 100, 6, 1.16).d, 20, 4.5, 6)}</g>
    <rect x="126" y="160" width="232" height="46" fill="#09090c"/>
    <text x="242" y="192" font-size="24" font-weight="800" fill="#fff" letter-spacing="2.6" text-anchor="middle">東京を駆け抜けろ</text>
    <text x="370" y="179" font-size="13" font-weight="800" fill="#ff4b52" letter-spacing="3.6" font-family="${rn}">TOKYO</text>
    <text x="370" y="197" font-size="13" font-weight="800" fill="#fff" letter-spacing="3.2" font-family="${rn}">RUSH</text>
  </g>
</svg>`;
}
function dn(e = ``, t = `zh`) {
  return t === `en`
    ? en(e, `Tokyo`)
    : `<svg class="${e} tk-brand-zh" viewBox="0 0 206 64" role="img" aria-label="東京狂飆">
  <rect x="2" y="2" width="84" height="60" rx="2" fill="#d81f2a" stroke="#09090c" stroke-width="3"/>
  <rect x="7.5" y="7.5" width="73" height="49" fill="none" stroke="#fff" stroke-width="1.6" opacity=".9"/>
  <text x="44" y="44" font-family="${tn}" font-size="30" font-weight="900" fill="#fff" text-anchor="middle" letter-spacing="3">東京</text>
  <text x="98" y="48" font-family="${tn}" font-size="44" font-weight="900" fill="#fff" stroke="#09090c" stroke-width="2" paint-order="stroke">狂飆</text>
</svg><svg class="${e} tk-brand-ja" viewBox="0 0 206 64" role="img" aria-label="東京ラッシュ">
  <rect x="2" y="2" width="84" height="60" rx="2" fill="#d81f2a" stroke="#09090c" stroke-width="3"/>
  <rect x="7.5" y="7.5" width="73" height="49" fill="none" stroke="#fff" stroke-width="1.6" opacity=".9"/>
  <text x="44" y="44" font-family="${nn}" font-size="30" font-weight="900" fill="#fff" text-anchor="middle" letter-spacing="3">東京</text>
  <g transform="skewX(-10) translate(8 0)">${sn(on(98, 54, 31, 2.5, 1.3).d, 7.4, 1.5, 2)}</g>
</svg>`;
}
var fn = [];
function pn(e) {
  fn.some((t) => t.key === e.key) || fn.push(e);
}
function mn() {
  return fn;
}
function hn(e, t = !1) {
  let n = e[0].index !== null,
    r = new Set(Object.keys(e[0].attributes)),
    i = new Set(Object.keys(e[0].morphAttributes)),
    a = {},
    o = {},
    c = e[0].morphTargetsRelative,
    l = new s(),
    u = 0;
  for (let s = 0; s < e.length; ++s) {
    let d = e[s],
      f = 0;
    if (n !== (d.index !== null))
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
            s +
            `. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`,
        ),
        null
      );
    for (let e in d.attributes) {
      if (!r.has(e))
        return (
          console.error(
            `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
              s +
              `. All geometries must have compatible attributes; make sure "` +
              e +
              `" attribute exists among all geometries, or in none of them.`,
          ),
          null
        );
      (a[e] === void 0 && (a[e] = []), a[e].push(d.attributes[e]), f++);
    }
    if (f !== r.size)
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
            s +
            `. Make sure all geometries have the same number of attributes.`,
        ),
        null
      );
    if (c !== d.morphTargetsRelative)
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
            s +
            `. .morphTargetsRelative must be consistent throughout all geometries.`,
        ),
        null
      );
    for (let e in d.morphAttributes) {
      if (!i.has(e))
        return (
          console.error(
            `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
              s +
              `.  .morphAttributes must be consistent throughout all geometries.`,
          ),
          null
        );
      (o[e] === void 0 && (o[e] = []), o[e].push(d.morphAttributes[e]));
    }
    if (t) {
      let e;
      if (n) e = d.index.count;
      else if (d.attributes.position !== void 0)
        e = d.attributes.position.count;
      else
        return (
          console.error(
            `THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ` +
              s +
              `. The geometry must have either an index or a position attribute`,
          ),
          null
        );
      (l.addGroup(u, e, s), (u += e));
    }
  }
  if (n) {
    let t = 0,
      n = [];
    for (let r = 0; r < e.length; ++r) {
      let i = e[r].index;
      for (let e = 0; e < i.count; ++e) n.push(i.getX(e) + t);
      t += e[r].attributes.position.count;
    }
    l.setIndex(n);
  }
  for (let e in a) {
    let t = gn(a[e]);
    if (!t)
      return (
        console.error(
          `THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the ` +
            e +
            ` attribute.`,
        ),
        null
      );
    l.setAttribute(e, t);
  }
  for (let e in o) {
    let t = o[e][0].length;
    if (t !== 0) {
      ((l.morphAttributes = l.morphAttributes || {}),
        (l.morphAttributes[e] = []));
      for (let n = 0; n < t; ++n) {
        let t = [];
        for (let r = 0; r < o[e].length; ++r) t.push(o[e][r][n]);
        let r = gn(t);
        if (!r)
          return (
            console.error(
              `THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the ` +
                e +
                ` morphAttribute.`,
            ),
            null
          );
        l.morphAttributes[e].push(r);
      }
    }
  }
  return l;
}
