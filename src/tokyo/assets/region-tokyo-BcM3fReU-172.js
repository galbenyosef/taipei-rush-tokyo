// tokyo/assets/region-tokyo-BcM3fReU 172 — push
// Lines 72611-72814 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function xV(e, t, n) {
  return !Sl(e, t) && Cl(e, t, n);
}
var SV = (e) => ly.find((t) => t.id === e) ?? null;
function CV(e, t, n, r) {
  let i = JSON.parse(JSON.stringify(e));
  i.id = `${e.id}~${t}`;
  let a = n[t % n.length];
  return (
    i.outer ? (i.outer.color = a) : i.top && (i.top.color = a),
    r && i.bottom && (i.bottom.color = r[(t * 3 + 1) % r.length]),
    i
  );
}
function wV(e) {
  let t = [],
    n = {},
    r = (r, i, a, o = [], s) => {
      if (!i) return;
      let c = (n[r] ??= []),
        l = o.slice(0, e ? 2 : 1),
        u = 1 + l.length,
        d = t.findIndex((e) => e.id === i.id);
      (d < 0 && (d = t.push(i) - 1),
        c.push([d, a / u]),
        l.forEach((e, n) => {
          let r = CV(i, n, l, s);
          c.push([t.push(r) - 1, a / u]);
        }));
    },
    i = [2763310, 6967360, 1909824, 9075306, 13154464, 3816006],
    a = [1919656, 14210248, 2763310, 6978138, 11024954, 15261904],
    o = [5921386, 6969930, 3820122, 8022650];
  (r(`ginza`, SV(`jp-shopper`), 3, i, [2763310, 5917242, 14209216]),
    r(`ginza`, SV(`jp-shopper-m`), 2, i.slice(2)),
    r(`ginza`, SV(`jp-madam`), 1.5, [9071194, 2763310]),
    r(`ginza`, SV(`jp-tourist-west`), 1.2, a.slice(0, 3)),
    r(`ginza`, SV(`jp-tourist-west-f`), 1.2, a.slice(3)),
    r(`ginza`, SV(`jp-tourist-asia`), 1.6, a),
    r(`ginza`, SV(`jp-ol-casual`), 1.2, [13154464, 9083562]),
    r(`ginza`, SV(`jp-salaryman`), 1, [2829619]),
    r(`ginza`, SV(`jp-daigakusei`), 0.8, a.slice(1, 4)),
    r(`ginza`, SV(`jp-mama`), 0.6),
    r(
      `akiba`,
      SV(`jp-otaku`),
      3,
      [5913146, 3820138, 4872762],
      [2767450, 3815990],
    ),
    r(`akiba`, SV(`jp-otaku-casual`), 2.5, [2763310, 4868690]),
    r(`akiba`, SV(`jp-tourist-west`), 1.5, a.slice(0, 3)),
    r(`akiba`, SV(`jp-tourist-asia`), 1.5, a.slice(2)),
    r(`akiba`, SV(`jp-daigakusei`), 1.2, a.slice(0, 2)),
    r(`akiba`, SV(`jp-salaryman-shirt`), 1),
    r(`akiba`, SV(`jp-gakuran`), 0.6),
    r(`akiba`, SV(`jp-sailor`), 0.4),
    r(`ameyoko`, SV(`jp-obasan`), 2.2, o),
    r(`ameyoko`, SV(`jp-oji`), 2, [3816e3, 5917242, 2767434]),
    r(`ameyoko`, SV(`jp-obaachan`), 1.2, o.slice(1)),
    r(`ameyoko`, SV(`jp-ojiichan`), 1),
    r(`ameyoko`, SV(`jp-tourist-asia`), 2, a),
    r(`ameyoko`, SV(`jp-tourist-west`), 1.2, a.slice(2)),
    r(`ameyoko`, SV(`jp-mama`), 0.8),
    r(`ameyoko`, SV(`jp-salaryman-shirt`), 0.6));
  let s = SV(`jp-ameyoko`);
  if (s) {
    let e = JSON.parse(JSON.stringify(s));
    ((e.id = `jp-ameyoko~apron`),
      e.top && (e.top.color = 2046554),
      r(`vendor`, e, 1, [2763310, 6953498, 2050618]));
  }
  (r(`maid`, SV(`jp-maid`), 1),
    r(`festival`, SV(`jp-happi`), 3, [11545130, 2046586, 15262420]),
    r(`festival`, SV(`jp-yukata-f`), 1.5, [2767466, 14178938]),
    r(`festival`, SV(`jp-yukata-m`), 1),
    r(`office`, SV(`jp-salaryman`), 2, [2041142, 2829619]),
    r(`office`, SV(`jp-ol`), 1.4),
    r(`park`, SV(`jp-obaachan`), 1.6),
    r(`park`, SV(`jp-ojiichan`), 1.4),
    r(`park`, SV(`jp-mama`), 1.4),
    r(`park`, SV(`jp-shogakusei-m`), 0.8),
    r(`park`, SV(`jp-shogakusei-f`), 0.8),
    r(`park`, SV(`jp-tourist-asia`), 1.6),
    r(`park`, SV(`jp-tourist-west`), 1),
    r(`park`, SV(`jp-tourist-west-f`), 1),
    r(`park`, SV(`jp-daigakusei`), 1),
    r(`park`, SV(`jp-ol-casual`), 0.8),
    r(`park`, SV(`jp-shopper`), 0.8),
    r(`park`, SV(`jp-salaryman-shirt`), 0.6),
    r(`park`, SV(`jp-gakuran`), 0.6),
    r(`park`, SV(`jp-sailor`), 0.6),
    r(
      `jogger`,
      SV(`jp-daigakusei`),
      1,
      e ? [1936096, 15224874] : [1936096],
      [1710622, 2763322],
    ));
  for (let [e, t] of n.office) (n.commute ??= []).push([e, t * 1.1]);
  (r(
    `commute`,
    SV(`jp-salaryman`),
    1.3,
    [6053992, 11048558],
    [2763824, 3816514],
  ),
    r(`commute`, SV(`jp-salaryman-shirt`), 1.2, [12899558]),
    r(`commute`, SV(`jp-ol`), 0.8, [6975094, 14209736]),
    r(`commute`, SV(`jp-ol-casual`), 1),
    r(`commute`, SV(`jp-daigakusei`), 0.9),
    r(`commute`, SV(`jp-recruit-m`), 0.4),
    r(`commute`, SV(`jp-recruit-f`), 0.3),
    r(`commute`, SV(`jp-gakuran`), 0.4),
    r(`commute`, SV(`jp-sailor`), 0.4),
    r(`commute`, SV(`jp-tourist-asia`), 0.5));
  let c = t.map(() => null),
    l = 14673640,
    u = 1842208,
    d = 1976392,
    f = (e, r, i, a, o) => {
      let s = SV(r);
      if (!s) return;
      let l = JSON.parse(JSON.stringify(s));
      ((l.id = `${s.id}~umb${t.length}`),
        o !== void 0 &&
          (l.outer ? (l.outer.color = o) : l.top && (l.top.color = o)),
        (n[e] ??= []).push([t.push(l) - 1, i]),
        c.push(a));
    };
  (f(`rainBiz`, `jp-salaryman`, 2, l),
    f(`rainBiz`, `jp-salaryman`, 1.2, u, 4869720),
    f(`rainBiz`, `jp-ol`, 1.2, l),
    f(`rainBiz`, `jp-salaryman-shirt`, 1, d),
    f(`rainShop`, `jp-shopper`, 1.5, l),
    f(`rainShop`, `jp-tourist-asia`, 1, d),
    e &&
      (f(`rainBiz`, `jp-daigakusei`, 0.8, l),
      f(`rainShop`, `jp-madam`, 0.8, u),
      f(`rainShop`, `jp-shopper-m`, 0.8, l),
      f(`rainTown`, `jp-obasan`, 1, 5909050),
      f(`rainTown`, `jp-otaku`, 1, l)));
  for (let [e, t] of n.rainShop) (n.rainTown ??= []).push([e, t * 0.6]);
  for (let [e, t] of n.rainBiz) (n.rainTown ??= []).push([e, t * 0.4]);
  return { looks: t, sets: n, umbrella: c };
}
var TV = [
  {
    lThigh: 0.2,
    lShin: -0.34,
    rThigh: -0.12,
    rShin: -0.14,
    lUpper: 1.2,
    lFore: 1.5,
    rUpper: 1.3,
    rFore: 1.35,
    lOut: -0.1,
    rOut: -0.1,
    bob: -0.03,
  },
  {
    lThigh: -0.12,
    lShin: -0.1,
    rThigh: 0.2,
    rShin: -0.3,
    lUpper: 1.25,
    lFore: 1.45,
    rUpper: 2.7,
    rFore: 0.25,
    rOut: 0.15,
    bob: 0.03,
  },
  {
    lThigh: 0.04,
    lShin: -0.05,
    rThigh: -0.04,
    rShin: -0.02,
    lUpper: 0.05,
    lFore: 0.2,
    rUpper: 2.6,
    rFore: 0.3,
    rOut: 0.25,
    bob: 0,
  },
];
function EV(e, t, n, r) {
  let i = [];
  for (let a of e.nodes) {
    let e = t.axis === `z` ? a.z : a.x,
      o = t.axis === `z` ? a.x : a.z;
    if (Math.abs(o - t.at) > 1 || e < n - 30 || e > r + 30) continue;
    let s = t.axis === `z` ? a.halfZ : a.halfX;
    i.push([e - s - 1.5, e + s + 1.5]);
  }
  i.sort((e, t) => e[0] - t[0]);
  let a = [],
    o = n;
  for (let [e, t] of i)
    if (
      (e > o + 6 && a.push([o, Math.min(e, r)]), (o = Math.max(o, t)), o >= r)
    )
      break;
  return (r > o + 6 && a.push([o, r]), a);
}
