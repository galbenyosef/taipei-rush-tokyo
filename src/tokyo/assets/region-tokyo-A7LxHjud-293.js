// tokyo/assets/region-tokyo-A7LxHjud 293 — math
// Lines 107324-107638 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var aW = (e) => 7 + 6 * ((e - QU.x0) / (QU.x1 - QU.x0)),
  QTe = [
    tTe,
    yTe,
    kTe,
    qTe,
    {
      id: `shinjuku-gyoen`,
      site: FU(JU),
      name: { ja: `新宿御苑`, zh: `新宿御苑`, en: `Shinjuku Gyoen` },
      near: 260,
      build: ZTe,
      glass(e, t) {
        let n = IU(e, JU),
          r = QU,
          i = t.c(`glass`);
        e.col(14675696).mat(0.1, 0.2, 0.2, 1);
        for (let t = 0; t < 8; t++) {
          let n = r.x0 + (t * (r.x1 - r.x0)) / 8,
            a = r.x0 + ((t + 1) * (r.x1 - r.x0)) / 8;
          (e.quad(a, 0, r.z0, n, 0, r.z0, n, aW(n), r.z0, a, aW(a), r.z0, i),
            e.quad(n, 0, r.z1, a, 0, r.z1, a, aW(a), r.z1, n, aW(n), r.z1, i),
            e.quad(
              n,
              aW(n),
              r.z1,
              a,
              aW(a),
              r.z1,
              a,
              aW(a),
              r.z0,
              n,
              aW(n),
              r.z0,
              i,
            ));
        }
        (e.quad(
          r.x0,
          0,
          r.z0,
          r.x0,
          0,
          r.z1,
          r.x0,
          aW(r.x0),
          r.z1,
          r.x0,
          aW(r.x0),
          r.z0,
          i,
        ),
          e.quad(
            r.x1,
            0,
            r.z1,
            r.x1,
            0,
            r.z0,
            r.x1,
            aW(r.x1),
            r.z0,
            r.x1,
            aW(r.x1),
            r.z1,
            i,
          ),
          e.leave(n));
      },
      far(e, t) {
        let n = IU(e, JU),
          r = t.season ?? `green`;
        (XV(
          e,
          JU.x0,
          JU.z0,
          JU.x1,
          JU.z1,
          zV.LAWN,
          64,
          r === `bare` ? 9407582 : 6525514,
          8301142,
          71,
        ),
          KV(e, {
            x0: JU.x0,
            z0: JU.z0,
            x1: JU.x1,
            z1: JU.z1,
            step: 14,
            inside: (e, t) =>
              e < JU.x0 + 14 ||
              e > JU.x1 - 14 ||
              t < JU.z0 + 14 ||
              t > JU.z1 - 14 ||
              (NU(e, t, eW) && !NU(e, t, iW)) ||
              (t > 440 &&
                e < -1770 &&
                !tW.some(
                  (n) => Math.hypot((e - n.x) / n.rx, (t - n.z) / n.rz) < 1.2,
                )),
            height: () => 14,
            dark: 4087603,
            light: 6063932,
            salt: 73,
            lump: 5,
            jitter: 3,
          }));
        for (let t of tW) QV(e, t.x, t.z, t.rx, t.rz, 7101, t.r, !1);
        (e
          .col(13162716)
          .mat(0.2, 0.3, 0, 0)
          .box(QU.x0, 0, QU.z0, QU.x1, 10, QU.z1),
          e.leave(n));
      },
      bounds: () => [JU.x0, JU.z0, JU.x1, JU.z1],
      farBoxes: () => [
        {
          x0: JU.x0 + 2,
          x1: JU.x1 - 2,
          z0: JU.z0 + 2,
          z1: JU.z0 + 12,
          y0: 0.15,
          y1: 14,
          rgb: [0.07, 0.13, 0.06],
        },
        {
          x0: JU.x0 + 2,
          x1: JU.x1 - 2,
          z0: JU.z1 - 11,
          z1: JU.z1 - 2,
          y0: 0.15,
          y1: 14,
          rgb: [0.07, 0.13, 0.06],
        },
      ],
      anchors: [
        {
          key: `shinjuku-gyoen-gate`,
          lx: YU.x - (JU.x0 + JU.x1) / 2,
          lz: JU.z0 - 12 - (JU.z0 + JU.z1) / 2,
          turn: Math.PI,
          name: { zh: `新宿御苑 新宿門`, en: `Shinjuku Gyoen, Shinjuku Gate` },
        },
      ],
      blip: !0,
    },
    ...RTe,
    UTe,
  ];
r.add({ 神宮前天橋: `神宮前歩道橋` });
function oW(e, t) {
  let n = e.landmark(t);
  return n ? [n.w / 2, n.d / 2] : [5, 5];
}
var sW = {
  omokakuBack: [-1675, 912.4, -1652.6, 943.1],
  terraceBack: [-1603.3, 928, -1582.9, 944.9],
  harakakuBack: [-1726.4, 1029.9, -1717.6, 1074.9],
  luis: [-1602.1, 1006, -1586.6, 1038.3],
  toads: [-1572.3, 1006, -1555.3, 1034.8],
};
function cW(e, t) {
  let n = e.site,
    r = Math.cos(n.facing) < 0 ? -1 : 1,
    i = r * (t[0] - n.x),
    a = r * (t[2] - n.x),
    o = r * (t[1] - n.z),
    s = r * (t[3] - n.z);
  return [Math.min(i, a), Math.min(o, s), Math.max(i, a), Math.max(o, s)];
}
function lW(e) {
  return (t, n) =>
    e.map(([e, t, r]) => ({
      x0: e[0],
      z0: e[1],
      x1: e[2],
      z1: e[3],
      y0: n.gy,
      y1: n.gy + t,
      rgb: r,
      lit: !0,
    }));
}
function uW(e, t, n, r, i, a = 0) {
  let [o, s, c, l] = cW(t, n),
    u = e.sub(0, a, 0, 0);
  (e.col(i).mat(0.5, 0.2, 0.08, G),
    e.box(o, 0, s, c, r, l, t.c(`office`), 7.2, 8),
    e.col(10131604).mat(0.9, 0, 0, 0),
    e.flat(o, s, c, l, r + 0.03),
    e.solid(o, s, c, l, 0, r),
    e.leave(u));
}
function $Te(e, t) {
  let n = 1 / 0;
  for (let r = 0; r <= 6; r++)
    for (let i of [t[1] + 0.5, t[3] - 0.5])
      n = Math.min(
        n,
        e.plan.groundHeight(t[0] + 0.5 + ((t[2] - t[0] - 1) * r) / 6, i),
      );
  return Math.max(0, n - e.site.gy);
}
function eEe(e, t, n, r = !0) {
  return (i, a) => {
    let o = i.landmark(e);
    return o
      ? [
          {
            x0: o.x - o.w / 2,
            x1: o.x + o.w / 2,
            z0: o.z - o.d / 2,
            z1: o.z + o.d / 2,
            y0: a.gy,
            y1: a.gy + t,
            rgb: n,
            lit: r,
          },
        ]
      : [];
  };
}
function dW(e, t, n, r, i, a, o = 0.35) {
  (e.push().col(16777215).mat(0.3, 0.2, o, G),
    e.wall(r, i, n, i, 0, a, t.c(`doors`), 2.4, a),
    e.pop());
}
function tEe(e, t, n, r, i, a, o, s, c, l, u = !1) {
  (e.wall(i, r, t, r, n, a, s, c, l),
    e.wall(t, r, t, o, n, a, s, c, l),
    e.wall(i, o, i, r, n, a, s, c, l),
    e.panel(t, o, i, o, n, a),
    e.flat(t, r, i, o, a),
    u && e.flat(t, r, i, o, n, e.white, 0, 0, !1));
}
function fW(e, t, n, r, i, a, o, s, c, l) {
  e.coarse ||
    (e.push().col(s).mat(0.4, 0.2, c, 1),
    WB(e, t, n, r, i, a, o, { align: 0.5, px: 22, maxW: l }),
    e.pop());
}
function nEe(e, t, n) {
  let r = Math.cos(e.facing),
    i = Math.sin(e.facing);
  return [e.x + t * r - n * i, e.z + t * i + n * r];
}
function pW(e, t, n) {
  let [r, i] = nEe(e.site, t, n);
  return e.plan.groundHeight(r, i) - e.site.gy;
}
function mW(e, t, n, r) {
  let i = -1 / 0,
    a = Math.max(1, Math.ceil(Math.abs(n - t)));
  for (let o = 0; o <= a; o++) i = Math.max(i, pW(e, t + ((n - t) * o) / a, r));
  return i;
}
function hW(e, t = []) {
  return (n) => {
    let r = n.landmark(e);
    if (!r) return { x: 0, z: 0, gy: 0, facing: 0 };
    let i = [
        [r.x - r.w / 2, r.z - r.d / 2, r.x + r.w / 2, r.z + r.d / 2],
        ...t,
      ],
      a = 1 / 0;
    for (let e of i)
      for (let t = 0; t <= 10; t++)
        for (let r of [e[1] + 0.5, e[3] - 0.5])
          a = Math.min(
            a,
            n.groundHeight(e[0] + 0.5 + ((e[2] - e[0] - 1) * t) / 10, r),
          );
    return { x: r.x, z: r.z, gy: a, facing: r.facing };
  };
}
function gW(e, t, n, r, i, a) {
  return (
    a > 0.02 &&
      (e.col(9341572).mat(0.85, 0, 0, 0),
      e.panel(r, n, t, n, 0, a),
      e.panel(t, n, t, i, 0, a),
      e.panel(r, i, r, n, 0, a),
      e.solid(t, n, r, i, 0, a)),
    e.sub(0, a, 0, 0)
  );
}
var _W = (e, t, n) => Math.max(0, mW(e, -t, t, -n - 0.5)) / 2;
function vW(e, t, n, r, i, a = 0, o = 0, s) {
  for (let c = 0; c < t.length; c++) {
    if (s?.(c)) continue;
    let l = t[c],
      u = t[(c + 1) % t.length];
    i && a > 0
      ? e.wall(l[0], l[1], u[0], u[1], n, r, i, a, o)
      : e.panel(l[0], l[1], u[0], u[1], n, r, i);
  }
}
function yW(e, t, n, r = !1) {
  for (let i = 1; i < t.length - 1; i++) {
    let a = t[0],
      o = t[i],
      s = t[i + 1];
    r
      ? e.triFace(a[0], n, a[1], s[0], n, s[1], o[0], n, o[1])
      : e.triFace(a[0], n, a[1], o[0], n, o[1], s[0], n, s[1]);
  }
}
var bW = (e, t, n, r) => [
  [n, t],
  [e, t],
  [e, r],
  [n, r],
];
