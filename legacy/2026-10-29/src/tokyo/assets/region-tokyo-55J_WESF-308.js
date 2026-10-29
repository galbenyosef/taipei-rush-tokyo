// tokyo/assets/region-tokyo-55J_WESF 308 — math
// Lines 111806-112035 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* nDe(e, t) {
  let n = e.sub(-gK.x, 0, -gK.z, 0),
    r = (e, n) => t.plan.groundHeight(e, n) - t.site.gy,
    i = t.season ?? `green`;
  for (let t of mK)
    YV(
      e,
      t.x0,
      t.z0,
      t.x1,
      t.z1,
      0.04,
      e.coarse ? 8 : 4,
      8093548,
      10263180,
      61,
      void 0,
      r,
    );
  yield;
  let a = VV(6101);
  for (let t of mK) {
    for (let n = t.z0 + 2.2; n < t.z1 - 1.5; n += 3.4) {
      let i = null,
        o = (t) => {
          if (i !== null) {
            if (t - i > 2) {
              let o = a.next() < 0.3;
              e.push()
                .col(o ? 5008184 : 12039081, o ? a.range(0.9, 1.1) : 1)
                .mat(o ? 0.95 : 0.8, 0, 0, 0);
              let s =
                Math.abs(r(i, n) - r(t, n)) +
                  Math.abs(r((i + t) / 2, n) - r(i, n)) <
                0.08
                  ? 1
                  : Math.max(1, Math.round((t - i) / 8));
              for (let a = 0; a < s; a++) {
                let c = i + ((t - i) * a) / s,
                  l = i + ((t - i) * (a + 1)) / s,
                  u = Math.min(r(c, n + 1.2), r(l, n + 1.2));
                o
                  ? e.box(c, u - 0.3, n + 0.95, l, u + 0.75, n + 1.45)
                  : e.box(c, u - 0.3, n + 1.05, l, u + 0.28, n + 1.35);
              }
              e.pop();
            }
            i = null;
          }
        };
      for (let s = t.x0 + 1.6; s < t.x1 - 1.4; s += 3) {
        if (!(
          !eDe.some((e) => Math.abs(s + 3 / 2 - e) < 2.2) &&
          vK(s + 3 / 2, n) &&
          yK(s + 3 / 2, n, 1.2) &&
          Math.abs(s + 3 / 2 - bK.n.x) > 6 &&
          Math.abs(s + 3 / 2 - bK.s.x) > 6
        )) {
          o(s);
          continue;
        }
        if ((i === null && (i = s), a.next() > (e.coarse ? 0.2 : 0.5)))
          continue;
        let t = s + 3 / 2 + a.range(-0.4, 0.4),
          c = r(t, n);
        if (
          (e
            .push()
            .col(xK[Math.floor(a.next() * xK.length)], a.range(0.92, 1.06))
            .mat(0.55, 0.05, 0, 0),
          e.coarse)
        )
          e.box(t - 0.5, c - 0.2, n - 0.3, t + 0.5, c + 1.6, n + 0.3);
        else {
          a.next() < 0.4 &&
            e.box(t - 0.55, c - 0.2, n - 0.4, t + 0.55, c + 0.45, n + 0.4);
          let r = a.next() < 0.05,
            i = r ? a.range(3, 3.8) : a.range(1.1, 1.9),
            o = r ? 0.36 : a.range(0.26, 0.34);
          (e.box(t - o, c - 0.2, n - 0.2, t + o, c + 0.45 + i, n + 0.2),
            r &&
              e.box(
                t - o * 0.6,
                c + 0.45 + i,
                n - 0.12,
                t + o * 0.6,
                c + 0.75 + i,
                n + 0.12,
              ));
        }
        e.pop();
      }
      o(t.x1 - 1.4);
    }
    yield;
  }
  for (let t of [bK.n, bK.s])
    for (let n = t.z0 + 4; n < t.z1 - 2; n += e.coarse ? 24 : 12)
      for (let o of [-5.2, 5.2])
        yK(t.x + o, n) &&
          WV(
            e,
            `sakura`,
            t.x + o,
            n,
            a.range(7, 9.5),
            Math.floor(a.next() * 1e6),
            i,
            r(t.x + o, n),
          );
  let o = VV(6203),
    s = [`keyaki`, `pine`, `ginkgo`, `keyaki`, `ever`];
  for (let t = 0; t < (e.coarse ? 10 : 30); t++) {
    let n = o.range(_K.x0, _K.x1),
      a = o.range(_K.z0, _K.z1);
    vK(n, a) &&
      yK(n, a, 3) &&
      WV(
        e,
        s[t % s.length],
        n,
        a,
        o.range(10, 16),
        Math.floor(o.next() * 1e6),
        i,
        r(n, a),
      );
  }
  yield;
  let c = bK.n.x,
    l = bK.n.z0 + 0.5;
  e.push().col(12762286).mat(0.8, 0, 0.05, 1);
  for (let t of [-4.2, 4.2]) {
    let n = r(c + t, l);
    (e.box(c + t - 0.45, n - 0.2, l - 0.45, c + t + 0.45, n + 2.6, l + 0.45),
      e.box(c + t - 0.55, n + 2.6, l - 0.55, c + t + 0.55, n + 2.85, l + 0.55));
  }
  (e.coarse ||
    (e.col(3815475).mat(0.7, 0, 0, 0),
    UB(e, `青山霊園`, c - 4.2, r(c - 4.2, l) + 0.5, l - 0.47, LB, 1.8, {
      px: 20,
      align: 0.5,
      vertical: !0,
      maxW: 0.6,
      raw: !0,
      serif: !0,
    })),
    e.pop(),
    e.leave(n));
}
function rDe(e, t) {
  let n = e.sub(-gK.x, 0, -gK.z, 0),
    r = (e, n) => t.plan.groundHeight(e, n) - t.site.gy;
  for (let t of mK)
    YV(e, t.x0, t.z0, t.x1, t.z1, 0.3, 16, 7109210, 9409154, 61, void 0, r);
  e.leave(n);
}
var iDe = {
  id: `aoyama-cemetery`,
  site: tDe,
  name: { ja: `青山霊園`, zh: `青山靈園`, en: `Aoyama Cemetery` },
  near: 200,
  build: nDe,
  far: rDe,
  bounds: () => [_K.x0, _K.z0, _K.x1, _K.z1],
  farBoxes: () => [],
};
r.add({ "JHK 放送中心": `JHK放送センター` });
var SK = { x0: -2030, z0: 1183, x1: -1906, z1: 1240 },
  CK = { x: (SK.x0 + SK.x1) / 2, z: (SK.z0 + SK.z1) / 2 },
  wK = { x0: -1972, x1: -1928, z0: 1192, z1: 1218, base: 9, h: 100 },
  TK = { x: -1956, z: 1205, r: 8, h: 12 },
  EK = { x0: SK.x0 + 2, x1: wK.x0 + 4, z0: 1188, z1: SK.z1 - 2, h: 14 },
  DK = { x0: wK.x1 - 4, x1: SK.x1 - 1, z0: 1188, z1: 1212, h: 14 },
  OK = {
    x0: -1935,
    x1: -1907,
    z0: 1214,
    z1: 1238,
    h: 30,
    cz1: 1242,
    cy0: 12,
    cy1: 26,
  },
  kK = 14605524,
  AK = 10461859,
  aDe = 8020552,
  oDe = (e) => ({
    x: CK.x,
    z: CK.z,
    gy: e.groundHeight(CK.x, CK.z),
    facing: 0,
  });
function jK(e, t, n, r, i, a, o, s) {
  let c = Math.cos(a) * Math.cos(o),
    l = Math.sin(o),
    u = Math.sin(a) * Math.cos(o),
    d = -Math.sin(a),
    f = Math.cos(a),
    p = l * f - u * 0,
    m = u * d - c * f,
    h = c * 0 - l * d,
    g = (e) => {
      let a = (e / s) * Math.PI * 2,
        o = Math.cos(a) * i,
        c = Math.sin(a) * i;
      return [t + d * o + p * c, n + 0 * o + m * c, r + f * o + h * c];
    },
    _ = i * 0.35,
    v = t - c * _,
    y = n - l * _,
    b = r - u * _;
  for (let t = 0; t < s; t++) {
    let n = g(t),
      r = g(t + 1);
    (e.triFace(v, y, b, r[0], r[1], r[2], n[0], n[1], n[2]),
      e.triFace(
        v - c * 0.15,
        y - l * 0.15,
        b - u * 0.15,
        n[0],
        n[1],
        n[2],
        r[0],
        r[1],
        r[2],
      ));
  }
  e.rod(t, n, r, t + c * i * 0.9, n + l * i * 0.9, r + u * i * 0.9, 0.06, 3);
}
