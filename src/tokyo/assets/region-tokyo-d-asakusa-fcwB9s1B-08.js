// tokyo/assets/region-tokyo-d-asakusa-fcwB9s1B 08 — units
// Lines 1986-2331 of readable/tokyo/assets/region-tokyo-d-asakusa-fcwB9s1B.pretty.js (statement-aligned).
function mt(e, t, n, r, i) {
  let a = t.white(),
    o = lt(n),
    s = n.trade;
  pt(e, t, n, o, r, Math.min(o.depth - 0.3, s.front === `open` ? 3.2 : 2.6));
  let c = t.uv(`shop:goods:${s.id}`),
    l = n.arcade ? 16 : 0;
  if (s.front === `open`) {
    let t = n.arcade ? 0.7 : 0.95;
    (e.setMaterial(0.85, 0, 0, l), L(e, 9071176));
    let [s, u] = K(o, 0.08, 0.05),
      [d, f] = K(o, 0.62, t);
    if (
      (z(
        e,
        Math.min(s, d),
        r,
        Math.min(u, f),
        Math.max(s, d),
        r + 0.78,
        Math.max(u, f),
        a,
      ),
      e.setMaterial(0.5, 0, 0.06, l),
      L(e, 16777215),
      J(e, o, 0.08, 0.62, 0.05, r + 1.02, t, r + 0.8, c),
      i >= 1)
    ) {
      let [t, n] = K(o, 0.8, 0.35);
      (e.setMaterial(0.5, 0.5, 0, l),
        L(e, 9080466),
        B(e, t, r, n, t, r + 1.8, n, 0.02, a),
        e.setMaterial(0.8, 0, 0.05, l),
        L(e, 16777215),
        Se(
          e,
          t + o.nx * 0.03,
          n + o.nz * 0.03,
          r + 0.7,
          r + 1.75,
          0.4,
          0.04,
          o.nx,
          o.nz,
          a,
          c,
          c,
          !1,
        ));
    }
  } else if (s.front === `glass` || s.front === `window`) {
    (e.setMaterial(0.4, 0.6, 0, l), L(e, 2763308));
    for (let t of [0.04, 0.35, 0.65, 0.96]) {
      let [n, i] = K(o, t, 0.03);
      z(e, n - 0.04, r, i - 0.04, n + 0.04, r + 2.62, i + 0.04, a);
    }
    let [t, n] = K(o, 0.04, 0.03),
      [i, u] = K(o, 0.96, 0.03);
    if ((B(e, t, r + 2.2, n, i, r + 2.2, u, 0.03, a), s.front === `window`)) {
      (e.setMaterial(0.6, 0.2, 0, l), L(e, 6965806));
      let [t, n] = K(o, 0.06, -0.1),
        [i, s] = K(o, 0.62, 0.55);
      (z(
        e,
        Math.min(t, i),
        r,
        Math.min(n, s),
        Math.max(t, i),
        r + 0.95,
        Math.max(n, s),
        a,
      ),
        e.setMaterial(0.3, 0.1, 0.12, l),
        L(e, 16777215),
        J(e, o, 0.06, 0.62, -0.1, r + 1.12, 0.55, r + 0.96, c));
    }
  } else if (s.front === `noren`) {
    (e.setMaterial(0.7, 0, 0, l), L(e, 3811870));
    for (let t of [0.04, 0.3, 0.7, 0.96]) {
      let [n, i] = K(o, t, 0.03);
      z(e, n - 0.045, r, i - 0.045, n + 0.045, r + 2.5, i + 0.045, a);
    }
    let [n, i] = K(o, 0.04, 0.03),
      [u, d] = K(o, 0.96, 0.03);
    (B(e, n, r + 2.5, i, u, r + 2.5, d, 0.05, a),
      B(e, n, r + 1, i, u, r + 1, d, 0.02, a),
      e.setMaterial(0.9, 0, 0, l),
      L(e, 16777215),
      q(e, o, 0.3, 0.7, 0.09, r + 1.62, r + 2.46, t.uv(`shop:noren:${s.id}`)));
    let [f, p] = K(o, 0.74, 0.08),
      [m, h] = K(o, 0.95, 0.6);
    (e.setMaterial(0.5, 0.2, 0, l),
      L(e, 4863012),
      z(
        e,
        Math.min(f, m),
        r,
        Math.min(p, h),
        Math.max(f, m),
        r + 0.9,
        Math.max(p, h),
        a,
      ),
      e.setMaterial(0.2, 0.1, 0.25, 1 | l),
      L(e, 16777215),
      J(e, o, 0.74, 0.95, 0.08, r + 1.38, 0.6, r + 0.92, c));
  } else if (s.front === `kimono`) {
    for (let [t, n] of [
      [0.2, 14178426],
      [0.42, 3824296],
    ]) {
      let [i, s] = K(o, t, 0.45);
      (e.setMaterial(0.8, 0, 0.05, l),
        L(e, n),
        Ce(e, i, s, r, r + 1.38, 0.2, a, 8),
        L(e, 15253578),
        Ce(e, i, s, r + 0.9, r + 1.12, 0.215, a, 8),
        L(e, 15786708),
        z(e, i - 0.09, r + 1.38, s - 0.09, i + 0.09, r + 1.62, s + 0.09, a),
        L(e, 1315860),
        z(e, i - 0.1, r + 1.62, s - 0.1, i + 0.1, r + 1.72, s + 0.1, a));
    }
    (e.setMaterial(0.6, 0, 0.3, 3 | l),
      L(e, 16777215),
      q(e, o, 0.55, 0.95, 0.06, r + 1.95, r + 2.5, t.uv(`panel:kimono`)));
  }
  if (
    !n.arcade &&
    s.front !== `noren` &&
    s.id !== `tokiwakado` &&
    ((n.x0 * 7 + n.z0 * 3) | 0) % 3 != 0
  ) {
    let t = parseInt(s.cloth.slice(1), 16);
    (e.setMaterial(0.9, 0, 0, 0),
      L(e, t),
      J(e, o, 0, 1, 0, r + 2.58, 1.25, r + 2.2, a),
      L(e, t, 0.55),
      J(e, o, 0, 1, 0, r + 2.57, 1.25, r + 2.19, a, !0),
      L(e, t, 0.8),
      q(e, o, 0, 1, 1.25, r + 1.98, r + 2.2, a));
  }
  let u =
    s.front === `kimono`
      ? `aboard:kimono`
      : s.id === `ningyoyaki` || s.id === `kibayashi`
        ? `aboard:ningyo`
        : s.id === `matcha`
          ? `aboard:matcha`
          : null;
  if (u && i >= 1) {
    let [n, i] = K(o, 0.92, 1),
      s = t.uv(u),
      c = (o.rx - o.lx) / o.wid,
      l = (o.rz - o.lz) / o.wid;
    (e.setMaterial(0.7, 0, 0.08, 1), L(e, 16777215));
    let d = c * 0.28,
      f = l * 0.28;
    (e.quad(
      n - d + o.nx * 0.16,
      r,
      i - f + o.nz * 0.16,
      n + d + o.nx * 0.16,
      r,
      i + f + o.nz * 0.16,
      n + d + o.nx * 0.02,
      r + 0.95,
      i + f + o.nz * 0.02,
      n - d + o.nx * 0.02,
      r + 0.95,
      i - f + o.nz * 0.02,
      s.u0,
      s.v0,
      s.u1,
      s.v1,
    ),
      L(e, 6965802),
      e.quad(
        n + d - o.nx * 0.16,
        r,
        i + f - o.nz * 0.16,
        n - d - o.nx * 0.16,
        r,
        i - f - o.nz * 0.16,
        n - d - o.nx * 0.02,
        r + 0.95,
        i - f - o.nz * 0.02,
        n + d - o.nx * 0.02,
        r + 0.95,
        i + f - o.nz * 0.02,
        a.u0,
        a.v0,
        a.u1,
        a.v1,
      ));
  }
}
function ht(e, t, n, r) {
  let i = lt(n);
  (e.setMaterial(0.6, 0.3, 0, n.arcade ? 16 : 0),
    L(e, 16777215),
    q(e, i, 0.04, 0.96, 0.02, r, r + 2.62, t.uv(`shop:shut:${n.shut}`)));
}
async function gt(e, t, n, r, i, a) {
  let o = 0;
  for (let s of r) {
    if (!s.units.length) continue;
    let r = 1 / 0,
      c = 1 / 0,
      l = -1 / 0,
      u = -1 / 0;
    for (let e of s.units)
      ((r = Math.min(r, e.x0)),
        (c = Math.min(c, e.z0)),
        (l = Math.max(l, e.x1)),
        (u = Math.max(u, e.z1)));
    let d = (r + l) / 2,
      f = (c + u) / 2,
      [p, m] = K(lt(s.units[0]), 0.5, -1),
      h = n.groundHeight(p, m),
      g = e.begin();
    for (let e of s.units) ft(g, t, e, h);
    e.end(`row-${s.id}`, d, f, 520);
    for (let n of [`shop`, `eat`, `bar`]) {
      let r = s.units.filter((e) => e.trade.sched === n);
      if (r.length) {
        g = e.begin();
        for (let e of r) mt(g, t, e, h, i);
        (e.end(`row-${s.id}-${n}-open`, d, f, 200, Oe[n]), (g = e.begin()));
        for (let e of r) ht(g, t, e, h);
        e.end(`row-${s.id}-${n}-shut`, d, f, 200, ke[n]);
      }
    }
    for (let t of s.units) e.box(t.x0, t.z0, t.x1, t.z1, h, h + t.h);
    ((o += s.units.length), await a());
  }
  return o;
}
var _t = 12;
function vt() {
  let e = [],
    t = Fe,
    n = G(`kmd-s`, `N`, x.x0, j.x1, x.z0, _t, t, {
      floors: [3, 6],
      kinds: [1, 2, 3],
      tail: [[7.2, `kibayashi`, void 0, 4]],
    });
  (e.push(n),
    e.push(
      G(`kmd-s-w`, `W`, x.z0 + _t, x.z1, x.x0, x.x1 - x.x0, t, {
        floors: [3, 5],
        kinds: [2, 3],
        width: [8, 8],
      }),
    ));
  let r = G(`namiki-w`, `E`, j.z0 + _t, j.z1, j.x1, j.x1 - j.x0, t, {
    floors: [2, 4],
    kinds: [0, 0, 1, 2],
    fixed: [
      [6.4, `kissa`, void 0, 3],
      [5.6, `hakimono`, void 0, 2],
      [7.4, `sasayabu`, void 0, 2],
    ],
  });
  (e.push(r),
    e.push(
      G(`namiki-e`, `W`, k.z1 + 0.4, pe.z1, pe.x0, pe.x1 - pe.x0, t, {
        floors: [2, 5],
        kinds: [0, 1, 2],
        fixed: [[6, `unagi`, void 0, 2]],
      }),
    ));
  let i = T.z1 + 0.2,
    a = G(`kmd-koban`, `N`, _.x0, b.x0, i, _.z1 - i, t, {
      floors: [3, 4],
      kinds: [2, 3],
      width: [9, 9],
    });
  ((a.units[a.units.length - 1].endMax = !1), e.push(a));
  let o = G(`kmd-s2`, `N`, b.x0, _.x1, _.z0, _.z1 - _.z0, t, {
    floors: [2, 5],
    kinds: [0, 1, 2, 3],
    fixed: [[b.x1 - b.x0, `tsuruju`, void 0, 2]],
    tail: [[6, `kimono-sig`, void 0, 4]],
  });
  ((o.units[o.units.length - 1].endMax = !1), e.push(o));
  let s = G(`kmd-s3`, `N`, le.x0, le.x1, le.z0, le.z1 - le.z0, t, {
    floors: [4, 7],
    kinds: [2, 3],
    width: [9, 10.5],
  });
  ((s.units[0].endMin = !1), e.push(s));
  let c = G(`kmd-n-w`, `S`, v.x0, se, v.z1, v.z1 - v.z0, t, {
    floors: [3, 5],
    kinds: [1, 2, 3],
    tail: [[7.6, `sansho`, void 0, 3]],
  });
  ((c.units[c.units.length - 1].endMax = !1), e.push(c));
  let l = G(`kmd-n-e`, `S`, 684, te.x1, te.z1, te.z1 - te.z0, t, {
    floors: [2, 4],
    kinds: [0, 1, 2],
    fixed: [[10.5, `tokiwakado`, void 0, 3]],
  });
  ((l.units[0].endMin = !1),
    (l.units[l.units.length - 1].endMax = !1),
    e.push(l));
  let u = G(`kmd-n-x`, `S`, A.x0, A.x1, A.z1, A.z1 - A.z0, t, {
    fixed: [[A.x1 - A.x0, `kamiura`, void 0, 4]],
  });
  ((u.units[0].endMin = !1),
    (u.units[0].fac = 7),
    (u.units[0].sode = !0),
    (u.units[0].lanterns = !1),
    e.push(u));
  let d = { arcade: !0, floors: [3, 5], kinds: [1, 2, 3] };
  for (let [n, r] of [
    [E, `arc-n-1`],
    [g, `arc-n-2`],
    [y, `arc-n-3`],
    [S, `arc-n-4`],
    [f, `arc-n-5`],
  ]) {
    let i = G(r, `S`, n.x0, n.x1, n.z1, n.z1 - n.z0, t, {
      ...d,
      fixed:
        r === `arc-n-3`
          ? [[6.5, `melonpan`, void 0, 3]]
          : r === `arc-n-5`
            ? [[9.8, `miyage`, void 0, 3]]
            : void 0,
    });
    for (let e of i.units)
      ((e.endMin = r === `arc-n-1` && e === i.units[0]), (e.endMax = !1));
    e.push(i);
  }
  let p = G(`arc-s-1`, `N`, D.x0, D.x1, D.z0, D.z1 - D.z0, t, {
    ...d,
    fixed: [[6, `menchi`, void 0, 3]],
    tail: [[7, `imoyokan`, void 0, 4]],
  });
  e.push(p);
  let m = G(`arc-s-2`, `N`, fe.x0, fe.x1, fe.z0, fe.z1 - fe.z0, t, {
    ...d,
    fixed: [[6.4, `matcha`, void 0, 3]],
  });
  return ((m.units[m.units.length - 1].endMax = !1), e.push(m), e);
}
