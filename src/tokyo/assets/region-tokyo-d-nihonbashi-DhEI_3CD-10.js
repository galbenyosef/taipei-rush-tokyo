// tokyo/assets/region-tokyo-d-nihonbashi-DhEI_3CD 10 — math
// Lines 3828-4175 of readable/tokyo/assets/region-tokyo-d-nihonbashi-DhEI_3CD.pretty.js (statement-aligned).
function hn(e, t, n, r, i, a) {
  (e.setTint(16777215).setInfo(0, 0, 0, 0),
    ht(e, t, n, 0.12 * i * 0.6, r, r + i * 1.1, 6, `wood`),
    e.setTint(a ? 16777215 : 15251600),
    Xt(
      e,
      t,
      r + i * 1.35,
      n,
      i * 0.62,
      i * 0.48,
      i * 0.62,
      a ? `leafdark` : `leaf`,
    ),
    Xt(
      e,
      t + i * 0.3,
      r + i * 1.6,
      n - i * 0.2,
      i * 0.45,
      i * 0.38,
      i * 0.45,
      `leaf`,
    ),
    Xt(
      e,
      t - i * 0.25,
      r + i * 1.55,
      n + i * 0.25,
      i * 0.42,
      i * 0.36,
      i * 0.42,
      a ? `leaf` : `leafdark`,
    ),
    e.setTint(16777215));
}
function gn(e, t, n) {
  for (let r of Kt)
    (hn(e[U(r.x - 1, r.z - 1, r.x + 1, r.z + 1)].sign, r.x, r.z, t, 3, !1),
      n.push({
        x0: r.x - 0.2,
        z0: r.z - 0.2,
        x1: r.x + 0.2,
        z1: r.z + 0.2,
        h: t + 3,
      }));
}
function _n(e, t, n) {
  let r = qt,
    i = [
      [r.z0, -18.4],
      [18.4, 56.4],
      [69.6, r.z1],
    ];
  for (let [a, o] of i) {
    let i = e[U(r.x0, a, r.x1, o)].sign;
    (i.setTint(16777215).setInfo(0, 0, 0, 0),
      V(i, r.x0 + 0.3, t - 0.1, a, r.x1 - 0.3, t + 0.02, o, `black`));
    for (let e of [r.x0, r.x1]) {
      for (let n = a; n < o; n += 3) {
        let r = Math.min(o, n + 3);
        (V(i, e - 0.06, t, n - 0.06, e + 0.06, t + 1.9, n + 0.06, `steel`),
          i.setTint(6982234),
          V(i, e - 0.015, t + 0.25, n, e + 0.015, t + 1.8, r, `green`),
          i.setTint(16777215));
      }
      (V(i, e - 0.2, t, a, e + 0.2, t + 0.25, o, `granite`),
        n.push({ x0: e - 0.2, z0: a, x1: e + 0.2, z1: o, h: t + 1.9 }));
    }
    for (let e of [a, o])
      (i.setTint(6982234),
        V(i, r.x0, t + 0.25, e - 0.015, r.x1, t + 1.8, e + 0.015, `green`),
        i.setTint(16777215),
        n.push({ x0: r.x0, z0: e - 0.1, x1: r.x1, z1: e + 0.1, h: t + 1.9 }));
  }
}
function vn(e, t, n) {
  let r = e.sign,
    i = lt(`white`),
    a = r.info,
    o = t + 0.014,
    s = 4.6;
  r.setTint(6051408);
  for (let e of Mt) {
    if ((e.bright ?? 0) < 140 || e.closed || (n && !n(e))) continue;
    let t = Math.min(190, 40 + (e.bright ?? 100) * 0.5);
    for (let n of e.faces.slice(0, 2)) {
      let c = F(e, n),
        l = Math.max(2, Math.round(c.L / 2.5));
      for (let e = 0; e < 4; e++)
        for (let n = 0; n < l; n++) {
          let u = (n * c.L) / l,
            d = ((n + 1) * c.L) / l,
            f = (e * s) / 4 + 0.05,
            p = ((e + 1) * s) / 4 + 0.05,
            m = (e, t) => [
              c.px + c.tx * e + c.nx * t,
              c.pz + c.tz * e + c.nz * t,
            ],
            [h, g] = m(u, f),
            [_, v] = m(d, f),
            [y, b] = m(d, p),
            [x, S] = m(u, p);
          r.setInfo(0, 0, 0, 0);
          let C = c.tx * c.nz - c.tz * c.nx < 0;
          C
            ? r.quad4(
                h,
                o,
                g,
                _,
                o,
                v,
                y,
                o,
                b,
                x,
                o,
                S,
                0,
                1,
                0,
                i.u,
                i.v,
                i.u,
                i.v,
                i.u,
                i.v,
                i.u,
                i.v,
              )
            : r.quad4(
                h,
                o,
                g,
                x,
                o,
                S,
                y,
                o,
                b,
                _,
                o,
                v,
                0,
                1,
                0,
                i.u,
                i.v,
                i.u,
                i.v,
                i.u,
                i.v,
                i.u,
                i.v,
              );
          let w = (e, n) => {
              let r = Math.max(0, 1 - n / s),
                i = Math.min(1, e / 2.5, (c.L - e) / 2.5);
              return Math.round(t * r * r * r * (0.35 + 0.65 * Math.max(0, i)));
            },
            ee = r.vc - 4,
            T = C
              ? [w(u, f), w(d, f), w(d, p), w(u, p)]
              : [w(u, f), w(u, p), w(d, p), w(d, f)];
          for (let e = 0; e < 4; e++) a[(ee + e) * 4 + 3] = T[e];
        }
    }
  }
}
var yn = e({
    init: () => On,
    keepResident: () => jn,
    start: () => kn,
    unload: () => Mn,
    update: () => An,
  }),
  bn = 1.5,
  $ = {
    built: null,
    building: !1,
    gen: 0,
    atlasTex: null,
    canvas: null,
    mats: new Map(),
    offQuality: null,
    lifeT: 0,
    crowds: [],
  },
  xn = (e) => e.quality.materials === `lambert` || e.quality.level === `low`;
function Sn(e) {
  let t = y();
  if (!t || !$.atlasTex) return null;
  let n = xn(e) ? `L` : `P`,
    r = $.mats.get(n);
  return (
    r ||
      ((r = t({ signs: $.atlasTex }, n === `L`)),
      (r.name = `nihonbashi-hero${n === `L` ? `-l` : ``}`),
      $.mats.set(n, r)),
    r
  );
}
function Cn(e, t, r, a, o, s = !0) {
  let c = new n(e, t);
  return (
    (c.name = r),
    (c.castShadow = o),
    (c.receiveShadow = a.quality.shadows),
    (c.matrixAutoUpdate = !1),
    c.updateMatrix(),
    (c.raycast = () => {}),
    (c.visible = s),
    i(c),
    c
  );
}
async function wn(e) {
  let n = performance.now(),
    r = $.gen,
    s = performance.now(),
    c = async () => {
      performance.now() - s < bn ||
        (await e.yieldFrame(), (s = performance.now()));
    };
  if (!y()) return;
  let l = e.quality.level === `low` || !!e.quality.mobile,
    u = l ? 0.5 : 1;
  if (
    (await Promise.race([_, new Promise((e) => setTimeout(e, 2500))]),
    r !== $.gen)
  )
    return;
  let d = document.createElement(`canvas`);
  ((d.width = Math.round(T * u)), (d.height = Math.round(ct * u)));
  let f = d.getContext(`2d`);
  for (let e of ut(d, f, u)) await c();
  if (r !== $.gen) return;
  let m = a(d, { anisotropy: l ? 2 : 4 });
  ((m.name = `nihonbashi-signs`),
    ($.atlasTex = m),
    p === `pending`
      ? (($.canvas = d),
        v(() => {
          let e = $.canvas;
          if (!e || $.atlasTex !== m) return;
          let t = ut(e, e.getContext(`2d`), u);
          for (; !t.next().done;);
          ((m.needsUpdate = !0), ($.canvas = null), i(m));
        }))
      : i(m),
    await c());
  let h = Sn(e);
  if (!h) return;
  await c();
  let g = e.plan.sidewalkHeight ?? 0.15,
    b = kt.map(() => ft(8192)),
    x = (e) => (e < 2 ? 0 : 1),
    S = [
      { id: `north`, chunks: [0, 1] },
      { id: `south`, chunks: [2, 3] },
    ],
    C = S.map(() => ft(1024)),
    w = [],
    te = 23;
  for (let e of Mt) {
    let t = U(e.x0, e.z0, e.x1, e.z1);
    (vt(b[t], C[x(t)], e, g, (te += 41) & 255, w), await c());
  }
  if (
    (Zt(b, g, w),
    nn(b, g, w),
    await c(),
    rn(b, g, w),
    sn(b, g, w),
    cn(b, g, w),
    await c(),
    un(b, g, w),
    dn(b, g, w),
    fn(b, g, w),
    pn(b, g, w),
    mn(b, g),
    gn(b, g, w),
    _n(b, g, w),
    await c(),
    r !== $.gen)
  )
    return;
  let E = new t();
  E.name = `nihonbashi`;
  let D = [],
    ne = [],
    O = 0;
  for (let t = 0; t < S.length; t++) {
    let n = ft(4096);
    vn(n, g, (e) => x(U(e.x0, e.z0, e.x1, e.z1)) === t);
    let r = S[t].chunks.flatMap((e) => [b[e].body, b[e].sign]),
      a = [C[t].body, C[t].sign, ...r, n.body, n.sign],
      s = o.concat(a);
    if ((await c(), !s)) continue;
    let l = new ee(
      s.geo,
      h,
      `nihonbashi-hero-${S[t].id}`,
      s.starts[2],
      s.starts[2 + r.length],
      { castShadow: !0, receiveShadow: e.quality.shadows },
    );
    l.tris.body <= 0 ||
      (i(l.mesh),
      E.add(l.mesh),
      D.push(l.mesh),
      ne.push(l),
      (O += s.geo.index.count / 3));
  }
  await c();
  let k = (t, n, r) => {
      let i = o.concat([t.body, t.sign]);
      if (!i) return null;
      let a = Cn(i.geo, h, n, e, r, !1);
      return (E.add(a), (O += i.geo.index.count / 3), a);
    },
    A = ft(4096);
  ln(A, g);
  let j = k(A, `nihonbashi-fair`, !0);
  (e.scene.add(E), E.updateMatrixWorld(!0), (E.matrixAutoUpdate = !1));
  for (let t of w) e.statics.addBox(t.x0, t.z0, t.x1, t.z1, 0, t.h, `building`);
  (($.built = {
    root: E,
    meshes: D,
    parts: ne,
    fair: j,
    cols: w.length,
    tris: Math.round(O),
    ms: Math.round(performance.now() - n),
    atlas: `${d.width}x${d.height}`,
  }),
    console.log(
      `[test] nihonbashi built`,
      JSON.stringify({
        cols: w.length,
        tris: Math.round(O),
        ms: $.built.ms,
        atlas: $.built.atlas,
        meshes: D.length,
      }),
    ));
}
