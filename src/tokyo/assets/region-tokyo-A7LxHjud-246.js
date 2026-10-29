// tokyo/assets/region-tokyo-A7LxHjud 246 — col
// Lines 92959-93262 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function ZI(e, t, n, r) {
  let i = Math.max(1, Math.round((r - n) / 10)),
    a = (r - n) / i,
    o = -707.3,
    s = -706.8,
    c = t.c(`brick`);
  (e.col(16777215).mat(0.85, 0, 0.05, 1),
    e.wall(o, n, o, r, 0, 0.62, c, 3, 1.24),
    e.col(9325110).mat(0.85, 0, 0, 0),
    e.panel(s, r, s, n, 0, 0.62),
    e.col(12367530).mat(0.85, 0, 0, 0).flat(o, n, s, r, 0.62),
    e.solid(o, n, s, r, 0, 1.9, `fence`));
  for (let t = 0; t <= i; t++) {
    let r = n + t * a;
    (e.col(16777215).mat(0.85, 0, 0.05, 1),
      e.box(-707.4, 0.62, r - 0.35, -706.6999999999999, 1.85, r + 0.35, c),
      e.coarse ||
        e
          .col(12367530)
          .mat(0.85, 0, 0.04, 1)
          .box(-707.4599999999999, 1.85, r - 0.41, -706.64, 2, r + 0.41));
  }
  e.col(2106149).mat(0.45, 0.6, 0, 0);
  let l = iSe;
  if ((e.box(-707.0799999999999, 1.62, n, -707.02, 1.68, r), !e.coarse))
    for (let t = 0; t < i; t++) {
      let r = n + t * a + 0.75,
        i = n + (t + 1) * a - 0.5;
      for (let t = r; t < i; t += 2.5) e.rod(l, 0.62, t, l, 1.8, t, 0.022, 3);
    }
  e.col(16777215).mat(0.85, 0, 0, 0).emis(0, 0);
}
function QI(e, t, n, r, i) {
  (e.col(4021808).mat(0.95, 0, 0, 0),
    e.box(t, 0, n, r, 1.15, i),
    e.solid(t, n, r, i, 0, 1.2, `hedge`));
}
function $I(e, t, n, r, i, a) {
  if (e.coarse && a & 1) return;
  let o = new le(a),
    s = r * 0.22 * o.range(0.88, 1.08);
  if (
    (e.push().col(6181962).mat(0.95, 0, 0, 0),
    e.rod(t, 0, n, t, r * 0.72, n, 0.3, e.coarse ? 3 : 5, 0.14),
    e.pole(t, n, 0.35, 0, 3),
    i === `bare`)
  ) {
    if (!e.coarse)
      for (let i = 0; i < 7; i++) {
        let a = o.next() * Math.PI * 2,
          c = r * (0.28 + i * 0.07),
          l = s * (1.05 - i * 0.1);
        e.rod(
          t,
          c,
          n,
          t + Math.cos(a) * l,
          c + l * 0.95,
          n + Math.sin(a) * l,
          0.08,
          3,
          0.03,
        );
      }
    e.pop();
    return;
  }
  e.col(VI[i], o.range(0.88, 1.08)).mat(0.9, 0, 0, 0);
  let c = o.next();
  if (e.coarse)
    e.lathe(
      t,
      n,
      [0.3, r * 0.22, s, r * 0.47, s * 0.6, r * 0.8, 0.05, r],
      5,
      c,
    );
  else {
    e.lathe(
      t,
      n,
      [
        0.3,
        r * 0.22,
        s * 0.85,
        r * 0.32,
        s,
        r * 0.5,
        s * 0.68,
        r * 0.75,
        0.05,
        r,
      ],
      6,
      c,
    );
    let a = o.next() * Math.PI * 2,
      l = s * 0.55;
    (e.col(VI[i], o.range(0.85, 1.05)),
      e.lathe(
        t + Math.cos(a) * l,
        n + Math.sin(a) * l,
        [0.2, r * 0.36, s * 0.6, r * 0.5, 0.05, r * 0.72],
        5,
        c + 0.4,
      ));
  }
  e.pop();
}
function eL(e, t, n, r, i, a, o) {
  if (e.coarse && o & 1) return;
  let s = new le(o);
  e.push().col(6247755).mat(0.95, 0, 0, 0);
  let c = s.range(-0.6, 0.6);
  if (
    (e.rod(
      t,
      0,
      n,
      t + c,
      r * 0.5,
      n + c * 0.5,
      r * 0.03,
      e.coarse ? 3 : 4,
      r * 0.018,
    ),
    e.pole(t, n, Math.max(0.25, r * 0.03), 0, 3),
    a !== null && i === `bare`)
  ) {
    if (!e.coarse)
      for (let i = 0; i < 5; i++) {
        let i = s.next() * Math.PI * 2,
          a = r * 0.3;
        e.rod(
          t + c,
          r * 0.48,
          n + c * 0.5,
          t + c + Math.cos(i) * a,
          r * 0.85,
          n + c * 0.5 + Math.sin(i) * a,
          r * 0.012,
          3,
          r * 0.004,
        );
      }
    e.pop();
    return;
  }
  let l = a ? a[i] : UI,
    u = e.coarse ? 1 : 2,
    d = e.coarse ? 4 : 6;
  for (let i = 0; i < u; i++) {
    let a = s.next() * Math.PI * 2,
      o = i === 0 ? 0 : r * 0.2,
      u = t + c + Math.cos(a) * o,
      f = n + c * 0.5 + Math.sin(a) * o,
      p = r * (i === 0 ? 0.32 : 0.24) * s.range(0.85, 1.1),
      m = r * (i === 0 ? 0.42 : 0.5);
    (e.col(l, s.range(0.82, 1.1)).mat(0.92, 0, 0, 0),
      e.lathe(
        u,
        f,
        [0.1, m, p, m + p * 0.6, p * 0.75, m + p * 1.2, 0.05, m + p * 1.55],
        d,
        s.next(),
      ));
  }
  e.pop();
}
var tL = [13159632, 2500651, 15263972, 11022888, 2903948, 7109210, 13680736];
function nL(e, t, n, r, i, a) {
  if (!e.coarse) {
    (e.push().col(9080466).mat(0.4, 0.7, 0, 0),
      e.box(t - 0.2, 0.28, n - 0.03, t + r * 0.62, 0.34, n + 0.03));
    for (let o = 0; o < r; o++) {
      if (a.chance(0.15)) continue;
      let r = t + o * 0.62,
        s = tL[a.int(0, tL.length - 1)],
        c = n - i * 0.1,
        l = n + i * 1.05;
      (e.col(1842204).mat(0.8, 0, 0, 0),
        e.rod(r - 0.02, 0.34, c, r + 0.02, 0.34, c, 0.33, 6),
        e.rod(r - 0.02, 0.34, l, r + 0.02, 0.34, l, 0.33, 6),
        e.col(s).mat(0.45, 0.5, 0, 0),
        e.rod(r, 0.34, c, r, 0.62, (c + l) / 2, 0.025, 3),
        e.rod(r, 0.62, (c + l) / 2, r, 0.9, c + i * 0.15, 0.025, 3),
        e
          .col(2763306)
          .box(
            r - 0.08,
            0.86,
            l - i * 0.35 - 0.12,
            r + 0.08,
            0.92,
            l - i * 0.35 + 0.12,
          ),
        a.chance(0.5) &&
          e
            .col(9080466)
            .box(
              r - 0.17,
              0.78,
              c - i * 0.3 - 0.15,
              r + 0.17,
              1,
              c - i * 0.3 + 0.15,
            ));
    }
    (e.pop(),
      e.solid(
        t - 0.3,
        Math.min(n - 0.3, n + i * 1.4),
        t + r * 0.62,
        Math.max(n - 0.3, n + i * 1.4),
        0,
        1,
        `prop`,
      ));
  }
}
function rL(e, t, n, r, i, a, o, s) {
  r - t < 0.01 || i - n < 0.01 || e.flat(t, n, r, i, a, o, s, s);
}
function iL(e, t, n, r, i, a, o, s) {
  let c = EI;
  if (r <= c.x0 || t >= c.x1 || i <= c.z0 || n >= c.z1)
    return rL(e, t, n, r, i, a, o, s);
  (rL(e, t, n, r, c.z0, a, o, s),
    rL(e, t, c.z1, r, i, a, o, s),
    rL(e, t, Math.max(n, c.z0), c.x0, Math.min(i, c.z1), a, o, s),
    rL(e, c.x1, Math.max(n, c.z0), r, Math.min(i, c.z1), a, o, s));
}
function* vSe(e, t, n) {
  let r = t.c(`lawn`),
    i = t.c(`paving`),
    a = e.coarse ? 0 : 14;
  (e.col(16777215).mat(0.95, 0, 0, 0),
    rL(e, -706.5, -1166.5, -571, -1012, jI, r, a),
    iL(e, -706.5, -988, -632, -940, jI, r, a),
    rL(e, -706.5, -940, -571, -847.5, jI, r, a),
    rL(e, -520, -1166.5, -505, -847.5, jI, r, a),
    rL(e, -561, -1166.5, -520, -1095, jI, r, a),
    rL(e, -561, -900, -520, -847.5, jI, r, a),
    e.col(9213032).mat(0.97, 0, 0, 0),
    iL(e, -671, -986, -621, -900, MI, r, a),
    yield,
    e.col(sSe).mat(0.92, 0, 0, 0),
    rL(e, -707, -1004, -632, -996, NI, e.white, 0),
    rL(e, -626, -970, -618, -876, NI, e.white, 0),
    rL(e, -626, -1105, -618, -1030, NI, e.white, 0),
    rL(e, -706.5, -1105, -562, -1097, NI, e.white, 0),
    rL(e, -570, -1166.5, -562, -847.5, NI, e.white, 0),
    rL(e, -576, -1004, -504, -996, NI, e.white, 0),
    rL(e, -562, -944, -504, -938, NI, e.white, 0),
    rL(e, -707, -884, -598, -876, NI, e.white, 0),
    rL(e, -626, -1166.5, -618, -1105, NI, e.white, 0),
    rL(e, -626, -876, -618, -847.5, NI, e.white, 0),
    rL(e, -562, -1050, -556, -950, NI, e.white, 0),
    e.col(12893874).mat(0.88, 0, 0, 0));
  let o = e.coarse ? 0 : 4;
  (rL(e, -706.5, -1012, -632, -1004, PI, i, o),
    rL(e, -706.5, -996, -632, -988, PI, i, o),
    rL(e, -632, -1032, -612, -968, PI, i, o),
    rL(e, -706.5, -967, -672, -955, PI, i, o),
    rL(e, -706.5, -893, -692, -867, PI, i, o),
    rL(e, -706.5, -1009, -700, -991, 0.1, i, o),
    rL(e, -612, -1030, -598, -1028, PI, i, o),
    rL(e, -604, -905, -594, -865, PI, i, o),
    yield,
    e.col(12102544).mat(0.95, 0, 0, 0));
  let s = e.coarse ? 16 : 40;
  for (let n = 0; n < s; n++) {
    let r = (n / s) * Math.PI * 2,
      i = ((n + 1) / s) * Math.PI * 2,
      a = (e, t) => [
        DI.x + (23 + t) * Math.cos(e),
        DI.z + (21 + t) * Math.sin(e),
      ],
      [o, c] = a(r, -1),
      [l, u] = a(r, 1),
      [d, f] = a(i, -1),
      [p, m] = a(i, 1);
    e.quad(o, FI, c, d, FI, f, p, FI, m, l, FI, u, t.c(`gravel`));
  }
  if (n === `autumn`) {
    let n = t.c(`gravel`),
      r = e.coarse ? 0 : 6;
    (e.col(16172586).mat(0.95, 0, 0, 0),
      rL(e, -704, -1012, -634, -1004.6, II, n, r),
      rL(e, -704, -995.4, -634, -988, II, n, r),
      rL(e, -704, -1019, -634, -1012.5, II, n, r),
      rL(e, -704, -987.5, -672, -982, II, n, r));
  }
  if (!e.coarse) {
    e.col(15263454).mat(0.8, 0, 0.02, 0);
    for (let t = -700; t < -636; t += 6)
      rL(e, t, -1000.08, t + 3, -999.92, 0.06999999999999999, e.white, 0);
    (e.col(11052188).mat(0.85, 0, 0, 0),
      e
        .box(-706.5, 0, -1004.15, -632, 0.14, -1004)
        .box(-706.5, 0, -996, -632, 0.14, -995.85));
  }
  e.col(16777215);
}
