// tokyo/assets/region-tokyo-55J_WESF 311 — map
// Lines 112649-112910 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var vDe = {
  id: `opera-town`,
  site: hDe,
  name: { ja: `東京オペラタウン`, zh: `東京歌劇城`, en: `Tokyo Opera Town` },
  near: 320,
  build: gDe,
  far: _De,
  bounds: () => [LK.x - 40, LK.z - 40, LK.x + 40, LK.z + 40],
  farBoxes: () => [
    {
      x0: LK.x - 18,
      x1: LK.x + 18,
      z0: LK.z - 18,
      z1: LK.z + 18,
      y0: 0.15,
      y1: RK.plate,
      rgb: [0.85, 0.83, 0.78],
      lit: !0,
    },
  ],
};
r.add({
  新宿站: `新宿駅`,
  "小田吉 HALC": `小田吉ハルク`,
  回憶橫丁: `思い出横丁`,
  "新宿站西口地區開發 工地": `新宿駅西口地区開発 工事現場`,
  新宿站西口: `新宿駅西口`,
  新宿站西口廣場: `新宿駅西口広場`,
  新宿站東口: `新宿駅東口`,
  新宿高速巴士總站: `バスタ新宿`,
  新宿大Guard: `新宿大ガード`,
});
var VK = Math.PI,
  HK = () => ({ x: 0, z: 0, gy: 0, facing: 0 }),
  UK = 200,
  WK = new WeakMap();
function yDe(e) {
  let t = WK.get(e);
  if (!t) {
    let n = ac(e).byId.get(`jr-main`);
    ((t = { co: n, sRef: n.path.project(xs, UK).s }), WK.set(e, t));
  }
  return t;
}
var GK = { x: 0, z: 0 };
function KK(e, t, n) {
  return (e.co.path.pos(e.sRef + t - UK, -n, GK), [GK.x, GK.z]);
}
var qK = (e, t) => e.co.deck.at(e.sRef + t - UK),
  JK = (e, t) => (t > 380 ? bs.DECK : qK(e, t));
function bDe(e, t, n = 6) {
  let r = [t.s0];
  for (let e = t.s0 + n; e < t.s1 - 0.5; e += n) r.push(e);
  r.push(t.s1);
  let i = [r[0]];
  for (let n = 1; n < r.length - 1; n++) {
    let a = i[i.length - 1],
      o = r[n],
      s = r[n + 1];
    (s <= 348 &&
      Math.abs(Fs(t, a) - Fs(t, o)) < 0.01 &&
      Math.abs(Fs(t, o) - Fs(t, s)) < 0.01 &&
      Math.abs(JK(e, a) - JK(e, s)) < 0.01 &&
      Math.abs(JK(e, o) - JK(e, s)) < 0.01) ||
      i.push(o);
  }
  return (i.push(r[r.length - 1]), i);
}
var xDe = 8156266,
  SDe = 6248530,
  CDe = 4999236,
  wDe = 13224390,
  YK = 11578274,
  XK = 9078141,
  TDe = 9417627,
  ZK = 7311226,
  QK = 5066834,
  EDe = 13947080,
  DDe = 6973282,
  ODe = 15855592,
  kDe = 14857500,
  ADe = 12172477,
  jDe = 15329249,
  $K = 8095117,
  MDe = 6120552,
  NDe = { JC: 15817250, JB: 16765952, JA: 44186, NEX: 13111342, JY: 8438337 };
function eq(e, t, n, r) {
  for (let i = 0; i + 1 < t.length; i++) {
    let a = t[i],
      o = t[i + 1];
    e.quad(
      a[0],
      n[i],
      a[1],
      o[0],
      n[i + 1],
      o[1],
      o[0],
      r[i + 1],
      o[1],
      a[0],
      r[i],
      a[1],
    );
  }
}
function tq(e, t, n, r, i) {
  for (let a = 0; a + 1 < t.length; a++)
    e.quad(
      n[a][0],
      i[a],
      n[a][1],
      n[a + 1][0],
      i[a + 1],
      n[a + 1][1],
      t[a + 1][0],
      r[a + 1],
      t[a + 1][1],
      t[a][0],
      r[a],
      t[a][1],
    );
}
function nq(e, t, n, r, i, a, o, s, c = 0.8) {
  let l = Math.hypot(r - t, i - n),
    u = (r - t) / l,
    d = (i - n) / l;
  (e.push().col(1973790).mat(0.6, 0, 0, 0),
    e.panel(
      t + a[0] * 0.01,
      n + a[1] * 0.01,
      r + a[0] * 0.01,
      i + a[1] * 0.01,
      o,
      s,
    ),
    e.col(15909913).mat(0.55, 0, 0.05, 1));
  let f = s - o,
    p = c / 2,
    m = 0.03;
  for (let r = -f; r < l; r += c) {
    let i = [],
      s = [];
    for (let [e, t] of [
      [r, 0],
      [r + p, 0],
      [r + p, f],
      [r, f],
    ])
      s.push([e + t, t]);
    let c = s;
    for (let [e, t] of [
      [1, 0],
      [-1, l],
    ]) {
      let n = [];
      for (let r = 0; r < c.length; r++) {
        let i = c[r],
          a = c[(r + 1) % c.length],
          o = e * (i[0] - t) >= 0,
          s = e * (a[0] - t) >= 0;
        if ((o && n.push(i), o !== s)) {
          let e = (t - i[0]) / (a[0] - i[0]);
          n.push([t, i[1] + (a[1] - i[1]) * e]);
        }
      }
      if (((c = n), !c.length)) break;
    }
    if (!(c.length < 3)) {
      for (let e of c) i.push(e);
      for (let r = 1; r + 1 < i.length; r++) {
        let [s, c] = i[0],
          [l, f] = i[r],
          [p, h] = i[r + 1],
          g = (e) => t + u * e + a[0] * m,
          _ = (e) => n + d * e + a[1] * m;
        e.triFace(g(s), o + c, _(s), g(l), o + f, _(l), g(p), o + h, _(p));
      }
    }
  }
  e.pop();
}
function* PDe(e, t) {
  for (let n of Ps) {
    let r = bDe(t, n),
      i = (e, i) =>
        r
          .map((r) => KK(t, r, Fs(n, r) + e))
          .map((e, n) => [e[0], e[1], JK(t, r[n]) + i]),
      a = r.map((e) => JK(t, e)),
      o = i(1.16, 0),
      s = i(-1.16, 0),
      c = i(1.45, 0),
      l = i(-1.45, 0),
      u = (e) => e.map((e) => [e[0], e[1]]);
    if (
      (e.push().col(xDe).mat(1, 0, 0, 0),
      tq(
        e,
        u(o),
        u(s),
        a.map((e) => e + 0.38),
        a.map((e) => e + 0.38),
      ),
      e.col(SDe),
      tq(
        e,
        u(c),
        u(o),
        a.map((e) => e + 0.02),
        a.map((e) => e + 0.38),
      ),
      tq(
        e,
        u(s),
        u(l),
        a.map((e) => e + 0.38),
        a.map((e) => e + 0.02),
      ),
      !e.coarse)
    )
      for (let t of [-0.5335, 0.5335]) {
        let n = u(i(t + 0.035, 0)),
          r = u(i(t - 0.035, 0));
        (e.col(wDe).mat(0.3, 0.9, 0, 0),
          tq(
            e,
            n,
            r,
            a.map((e) => e + 0.55),
            a.map((e) => e + 0.55),
          ),
          e.coarse ||
            (e.col(CDe).mat(0.6, 0.6, 0, 0),
            eq(
              e,
              r,
              a.map((e) => e + 0.38),
              a.map((e) => e + 0.55),
            ),
            eq(
              e,
              [...n].reverse(),
              [...a].reverse().map((e) => e + 0.38),
              [...a].reverse().map((e) => e + 0.55),
            )));
      }
    if (!e.coarse) {
      let t = u(i(0.025, 0)),
        n = u(i(-0.025, 0));
      (e.col(3025446).mat(0.5, 0.7, 0, 0),
        tq(
          e,
          n,
          t,
          a.map((e) => e + 5.61),
          a.map((e) => e + 5.61),
        ));
    }
    (e.pop(), yield);
  }
}
