// tokyo/assets/region-tokyo-d-akihabara-CilcTp8S 12 — math
// Lines 3246-3459 of readable/tokyo/assets/region-tokyo-d-akihabara-CilcTp8S.pretty.js (statement-aligned).
function ft(e) {
  for (let t = 0; t < G.length; t++) {
    e.need(`maach:${t}`, 192, 128, je(G[t].kind, 30 + t));
    let n = dt(t);
    e.need(`maachplate:${t}`, 256, 40, Ee(n));
  }
  e.need(
    `maachplace`,
    320,
    48,
    Ee({
      main: `akiba.maach.place`,
      sub: `akiba.maach.1912`,
      bg: `#2a2420`,
      fg: `#f0e0c0`,
    }),
  );
}
var K = { x: 0, z: 0 },
  q = { x: 0, z: 0, tx: 0, tz: 0 };
function pt(e, t, n) {
  let r = x(t)?.byId.get(`jr-chuo`);
  if (!r) return;
  let i = n.white(),
    a = 0;
  for (let [t, o] of r.brick)
    for (let s = Math.floor(t / 8) * 8; s < o; s += 8) {
      if (
        s < t - 0.01 ||
        s + 8 > o + 0.01 ||
        (r.path.at(s + 4, q), q.x < lt || q.x > ut)
      )
        continue;
      let c = s + st,
        u = s + 8,
        d = u - c,
        f = (e) => {
          let t = ((e - c) / d) * 2 - 1;
          return ot + 2.0000000000000004 * Math.sqrt(Math.max(0, 1 - t * t));
        },
        p = r.deck.at(s) - ct;
      for (let t of [-1, 1]) {
        let o = t < 0 ? r.edge0.at(s) : r.edge1.at(s),
          m = o - t * (l - 0.08),
          h = a++ % G.length,
          g = (e, t) => (r.path.pos(e, t, K), [K.x, K.z]),
          _ = t < 0;
        for (let r = 0; r < 8; r++) {
          let a = c + (d * r) / 8,
            o = c + (d * (r + 1)) / 8,
            s = Math.min(f(a), p),
            l = Math.min(f(o), p),
            [u, v] = g(_ ? o : a, m),
            [y, b] = g(_ ? a : o, m),
            x = _ ? l : s,
            S = _ ? s : l,
            C = _ ? 1 - (r + 1) / 8 : r / 8,
            w = _ ? 1 - r / 8 : (r + 1) / 8;
          if (
            (e.setMaterial(0.2, 0.2, 0.2, 17),
            A(e, 16777215),
            _e(e, u, v, y, b, 0, 2.6, n.uv(`maach:${h}`), C, w, 0, 1),
            e.setMaterial(0.12, 0.5, 0.1, 17),
            A(e, 5917242),
            e.quad(
              u,
              2.6,
              v,
              y,
              2.6,
              b,
              y,
              S,
              b,
              u,
              x,
              v,
              i.u0,
              i.v0,
              i.u1,
              i.v1,
            ),
            r % 2 == 0)
          ) {
            (e.setMaterial(0.5, 0.6, 0, 0), A(e, 1710620));
            let [n, r] = g(a, m + t * 0.03),
              [o, c] = g(a + 0.07, m + t * 0.03),
              [l, u] = _ ? [o, c] : [n, r],
              [d, f] = _ ? [n, r] : [o, c];
            j(e, l, u, d, f, 0, Math.max(s, 2.6), i);
          }
        }
        (e.setMaterial(0.5, 0.6, 0, 0), A(e, 1710620));
        {
          let [n, r] = g(_ ? u : c, m + t * 0.04),
            [a, o] = g(_ ? c : u, m + t * 0.04);
          j(e, n, r, a, o, 2.55, 2.68, i);
        }
        (e.setMaterial(0.5, 0, 0.25, 19), A(e, 16777215));
        let v = (c + u) / 2;
        {
          let [r, i] = g(_ ? v + 1.4 : v - 1.4, o - t * 0.5),
            [a, s] = g(_ ? v - 1.4 : v + 1.4, o - t * 0.5);
          j(e, r, i, a, s, 3, 3.42, n.uv(`maachplate:${h}`));
        }
      }
    }
  let [o, s] = r.brick[0] ?? [0, 0];
  if (s > o) {
    for (let t = Math.floor(o / 8) * 8; t < s; t += 8)
      if ((r.path.at(t, q), q.x > -158 && q.x < -144)) {
        let i = r.edge0.at(t);
        r.path.pos(t - 1.6, i + -0.06, K);
        let a = K.x,
          o = K.z;
        (r.path.pos(t + 1.6, i + -0.06, K),
          e.setMaterial(0.5, 0, 0.2, 3),
          A(e, 16777215),
          j(e, K.x, K.z, a, o, 4.4, 4.9, n.uv(`maachplace`)));
        break;
      }
  }
}
var mt = [
    [1, `akiba.wrap.movie`, `akiba.word.akiba`],
    [2, `akiba.wrap.rpg`, `akiba.wrap.rpg-sub`],
    [4, `akiba.wrap.anisong`, `akiba.word.akiba`],
    [3, `akiba.wrap.idol`, `akiba.word.akiba`],
  ],
  ht = `jy-akihabara`;
function gt(e) {
  for (let t of mt) e.need(`poster:${t.join(`|`)}`, 288, 128, Pe(...t));
}
var J = { x: 0, z: 0, tx: 0, tz: 0 },
  Y = { x: 0, z: 0 };
function _t(e, t, n) {
  let r = f(t),
    i = r?.m.byId.get(`jr-main`),
    a = i?.platforms.find((e) => e.id === ht),
    o = a && r?.geo.walls.get(a.id);
  if (!r || !i || !a || !o) return;
  let s = [];
  for (let e of r.geo.entrances) {
    if (e.kind !== `jr`) continue;
    let t = i.path.project(e.cx, e.cz);
    if (t.d > 30) continue;
    (i.path.at(t.s, J), i.path.pos(t.s, 0, Y));
    let n = (e.cx - Y.x) * -J.tz + (e.cz - Y.z) * J.tx;
    s.push([t.s, n < 0 ? -1 : 1]);
  }
  let c = i.deck.at(a.sc) - 1.2 - 0.9,
    l = 3.25,
    u = Math.min(c - 0.5, 5.35);
  if (u - l < 1.2) return;
  let d = ((u - l) * 2.25) / 2,
    p = 0;
  for (let t of [-1, 1]) {
    let r = o[t < 0 ? 0 : 1];
    if (Number.isFinite(r))
      for (let o of [-31, -10.5, 10.5, 31]) {
        let c = a.sc + o;
        if (
          s.some(([e, n]) => n === t && Math.abs(e - c) < d + 4) ||
          Math.abs(Math.abs(o) - 20) < d + 3.8
        )
          continue;
        (i.path.at(c, J), i.path.pos(c, r + t * 0.42, Y));
        let f = Y.x - J.tx * d,
          m = Y.z - J.tz * d,
          h = Y.x + J.tx * d,
          g = Y.z + J.tz * d,
          _ = mt[p++ % mt.length];
        (e.setMaterial(0.4, 0, 0.22, 3), A(e, 16777215));
        let v = n.uv(`poster:${_.join(`|`)}`);
        (t > 0 ? j(e, f, m, h, g, l, u, v) : j(e, h, g, f, m, l, u, v),
          e.setMaterial(0.5, 0.6, 0, 0),
          A(e, 10133154),
          i.path.pos(c, r + t * 0.38, Y));
        let y = Y.x - J.tx * (d + 0.08),
          b = Y.z - J.tz * (d + 0.08),
          x = Y.x + J.tx * (d + 0.08),
          S = Y.z + J.tz * (d + 0.08);
        t > 0
          ? j(e, y, b, x, S, 3.17, u + 0.08, n.white())
          : j(e, x, S, y, b, 3.17, u + 0.08, n.white());
      }
  }
}
var vt = e({
    init: () => Ct,
    start: () => wt,
    storefront: () => Dt,
    unload: () => Ot,
    update: () => Et,
  }),
  X = null,
  yt = !1,
  Z = !1,
  bt = -1,
  Q = new Map(),
  xt = Error(`akihabara: dropped while building`);
function St(e) {
  for (let [t, n] of Object.entries(k))
    e.plan.blocks.find(
      (e) =>
        Math.abs(e.minX - n.minX) < 0.6 &&
        Math.abs(e.minZ - n.minZ) < 0.6 &&
        Math.abs(e.maxX - n.maxX) < 0.6 &&
        Math.abs(e.maxZ - n.maxZ) < 0.6,
    ) ||
      console.warn(
        `[akihabara] block ${t} no longer matches the plan (layout.ts BLOCKS)`,
      );
}
