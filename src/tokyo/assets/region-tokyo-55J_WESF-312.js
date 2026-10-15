// tokyo/assets/region-tokyo-55J_WESF 312 — col
// Lines 112911-113243 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function FDe(e, t) {
  let { x0: n, x1: r, z0: i, z1: a } = t,
    o = bs.DECK + 1.65,
    s = (n + r) / 2;
  (e.push().col(DDe).mat(0.9, 0, 0, 0),
    e.panel(n, i, n, a, bs.DECK, o),
    e.panel(r, a, r, i, bs.DECK, o),
    e.panel(r, i, n, i, bs.DECK, o),
    e.panel(n, a, r, a, bs.DECK, o),
    e.col(ODe).mat(0.8, 0, 0, 0),
    e.flat(n, i, n + 0.3, a, o),
    e.flat(r - 0.3, i, r, a, o),
    e.col(EDe).mat(0.85, 0, 0.16, 1),
    e.flat(n + 0.3, i, n + 0.86, a, o),
    e.flat(r - 0.86, i, r - 0.3, a, o),
    e.flat(n + 1.16, i, r - 1.16, a, o),
    e.col(kDe).mat(0.7, 0, 0, 0),
    e.flat(n + 0.86, i, n + 1.16, a, o),
    e.flat(r - 1.16, i, r - 0.86, a, o),
    e.pop(),
    e.solid(n, i, r, a, bs.DECK, o, `platform`));
  let c = i + 4,
    l = a - 4,
    u = o + 3.55,
    d = 0.7;
  e.push().col($K).mat(0.6, 0.4, 0, 0);
  for (let t = c + 3; t < l; t += e.coarse ? 24 : 12)
    (e.box(s - 0.14, o, t - 0.14, s + 0.14, u + 0.2, t + 0.14),
      e.pole(s, t, 0.2, o, u));
  if (
    (e.col(ADe).mat(0.6, 0.3, 0, 0),
    e.quad(
      n - d,
      u + 0.12,
      l,
      s,
      u + 0.45,
      l,
      s,
      u + 0.45,
      c,
      n - d,
      u + 0.12,
      c,
    ),
    e.quad(
      s,
      u + 0.45,
      l,
      r + d,
      u + 0.12,
      l,
      r + d,
      u + 0.12,
      c,
      s,
      u + 0.45,
      c,
    ),
    e.col(6054246).mat(0.6, 0.3, 0, 0),
    e.panel(n - d, c, n - d, l, u - 0.15, u + 0.12),
    e.panel(r + d, l, r + d, c, u - 0.15, u + 0.12),
    e.panel(r + d, c, n - d, c, u - 0.15, u + 0.12),
    e.triFace(r + d, u + 0.12, c, n - d, u + 0.12, c, s, u + 0.45, c),
    e.panel(n - d, l, r + d, l, u - 0.15, u + 0.12),
    e.triFace(n - d, u + 0.12, l, r + d, u + 0.12, l, s, u + 0.45, l),
    e.col(jDe).mat(0.8, 0, 0.3, 1),
    e.flat(n - d, c, r + d, l, u - 0.15, e.white, 0, 0, !1),
    e.coarse ||
      (e.col(16513780).mat(0.5, 0, 0.5, 1),
      e.flat(s - 1.4, c + 1, s - 1.15, l - 1, u - 0.17, e.white, 0, 0, !1),
      e.flat(s + 1.15, c + 1, s + 1.4, l - 1, u - 0.17, e.white, 0, 0, !1)),
    e.pop(),
    e.coarse)
  )
    return;
  for (let t of [i + 0.32 * (a - i), i + 0.68 * (a - i)]) {
    let n = s - 1.4,
      r = s + 1.4;
    (e.push().col(1842206).mat(1, 0, 0, 0),
      e.flat(n, t, r, t + 9, o + 0.01),
      e.col(11909564).mat(0.5, 0.6, 0, 0),
      e.box(n - 0.1, o, t, n, o + 1.05, t + 9),
      e.box(r, o, t, r + 0.1, o + 1.05, t + 9),
      e.box(n, o, t - 0.1, r, o + 1.05, t),
      e.pop(),
      e.solid(n - 0.1, t - 0.1, r + 0.1, t + 9, o, o + 1.05, `rail`));
  }
  let f = NDe[t.line];
  for (let n of [i + 0.28 * (a - i), i + 0.72 * (a - i)])
    for (let [r, i] of [
      [-1, t.nums[1]],
      [1, t.nums[0]],
    ]) {
      let t = s + r * 1.6;
      for (let r of [LB, RB]) {
        let a = n + r[1] * 0.06;
        (e.push().col(2304045).mat(0.5, 0.3, 0.2, 1),
          e.box(t - 0.75, u - 0.85, a - 0.04, t + 0.75, u - 0.3, a + 0.04),
          e.col(f).mat(0.5, 0, 0.3, 1),
          e.panel(
            t - 0.7 * r[1],
            a + r[1] * 0.05,
            t - 0.45 * r[1],
            a + r[1] * 0.05,
            u - 0.8,
            u - 0.35,
          ),
          e.col(16777215).mat(0.5, 0, 0.5, 1),
          UB(e, String(i), t + 0.08, u - 0.78, a + r[1] * 0.06, r, 0.42, {
            raw: !0,
            px: 20,
            align: 0.5,
          }),
          e.pop());
      }
      (e.push().col($K).mat(0.6, 0.4, 0, 0),
        e.box(t - 0.02, u - 0.3, n - 0.02, t + 0.02, u - 0.15, n + 0.02),
        e.pop());
    }
}
function rq(e, t) {
  let n = Ts.in - xs + 1.45;
  for (let e of Ps)
    t >= e.s0 && t <= e.s1 && (n = Math.max(n, Fs(e, t) + 1.45));
  return n;
}
var iq = -4.8;
function* IDe(e, t) {
  e.push().col(7169629).mat(1, 0, 0, 0);
  let n = [];
  for (let e = 84; e < 212; e += 6) n.push(e);
  n.push(212);
  let r = n.map((e) => KK(t, e, rq(t, e) + 0.6)),
    i = n.map((e) => KK(t, e, iq)),
    a = n.map((e) => qK(t, e) + 0.01);
  tq(e, r, i, a, a);
  let o = 0.17;
  (e.flat(xs + iq, 212, -2106.6, 262, o),
    e.flat(xs + iq, 262, -2089.2, 404, o),
    e.pop(),
    yield);
}
function* LDe(e, t, n) {
  let r = t.plan,
    i = [
      [84, 133.25],
      [166.75, 210],
    ];
  e.push().col(YK).mat(0.92, 0, 0, 0);
  for (let [t, a] of i) {
    let i = [];
    for (let e = t; e < a; e += 5) i.push(e);
    i.push(a);
    let o = i.map((e) => KK(n, e, iq)),
      s = i.map((e) => KK(n, e, rq(n, e) + 0.6)),
      c = i.map((e) => qK(n, e) + 1),
      l = o.map((e) => r.groundHeight(e[0], e[1]) - 0.3),
      u = s.map((e) => r.groundHeight(e[0], e[1]) - 0.3);
    (eq(e, o, l, c),
      eq(e, [...s].reverse(), [...u].reverse(), [...c].reverse()));
    let d = i.map((e) => KK(n, e, -4.5)),
      f = i.map((e) => KK(n, e, rq(n, e) + 0.3));
    (e.col(XK),
      tq(e, d, o, c, c),
      tq(e, s, f, c, c),
      eq(
        e,
        [...d].reverse(),
        [...i].reverse().map((e) => qK(n, e)),
        [...c].reverse(),
      ),
      eq(
        e,
        f,
        i.map((e) => qK(n, e)),
        c,
      ),
      e.col(YK));
    for (let t = 0; t + 1 < i.length; t++)
      for (let n of [o, s])
        e.solid(
          n[t][0] - 0.3,
          n[t][1],
          n[t][0] + 0.3,
          n[t + 1][1],
          Math.min(l[t], u[t]),
          c[t],
          `wall`,
        );
    yield;
  }
  {
    let t = KK(n, 84, rq(n, 84) + 0.6),
      i = KK(n, 84, iq),
      a = r.groundHeight(t[0], t[1]) - 0.3,
      o = r.groundHeight(i[0], i[1]) - 0.3,
      s = qK(n, 84) + 1;
    (e.quad(t[0], a, t[1], i[0], o, i[1], i[0], s, i[1], t[0], s, t[1]),
      e.solid(
        Math.min(t[0], i[0]),
        t[1] - 0.3,
        Math.max(t[0], i[0]),
        t[1] + 0.3,
        Math.min(a, o),
        s,
        `wall`,
      ));
  }
  e.pop();
}
function* RDe(e, t) {
  let n = 133.25,
    r = 166.75,
    i = xs + iq,
    a = xs + rq(t, 150) + 0.6,
    o = bs.OG,
    s = bs.OG - 1.3,
    c = bs.OG + 1.05;
  (e.push().col(QK).mat(0.9, 0.2, 0, 0),
    e.flat(i, n, a, r, s, e.white, 0, 0, !1),
    e.col(ZK).mat(0.6, 0.5, 0, 0));
  for (let t = i + 4; t < a - 2; t += 8.4)
    (e.panel(t, n, t, r, s - 0.35, s),
      e.panel(t + 0.4, r, t + 0.4, n, s - 0.35, s),
      e.flat(t, n, t + 0.4, r, s - 0.35, e.white, 0, 0, !1));
  (e.pop(), yield);
  for (let [t, l] of [
    [i, BB],
    [a, zB],
  ]) {
    e.push().col(TDe).mat(0.55, 0.45, 0.02, 1);
    let [i, a] = l === BB ? [n, r] : [r, n];
    if (
      (e.panel(t, i, t, a, s - 0.35, c),
      e.flat(Math.min(t, t - l[0] * 0.4), n, Math.max(t, t - l[0] * 0.4), r, c),
      e.panel(t - l[0] * 0.4, a, t - l[0] * 0.4, i, o, c),
      e.col(ZK).mat(0.55, 0.45, 0, 0),
      e.box(
        Math.min(t, t + l[0] * 0.18),
        s - 0.42,
        n,
        Math.max(t, t + l[0] * 0.18),
        s - 0.3,
        r,
      ),
      !e.coarse)
    )
      for (let n = 134.05; n < 166.35; n += 1.6)
        e.box(
          Math.min(t, t + l[0] * 0.12),
          s - 0.3,
          n - 0.05,
          Math.max(t, t + l[0] * 0.12),
          c - 0.08,
          n + 0.05,
        );
    (e.pop(),
      e.coarse ||
        WB(
          e,
          t,
          s + 0.2,
          150 + (l === zB ? 3 : -3),
          l,
          4.4,
          0.9,
          0.06,
          1920924,
          l === zB ? `青梅街道` : `靖国通り`,
          16777215,
          { raw: !0, px: 22, lit: 0.3 },
        ));
  }
  if (!e.coarse) {
    e.push().col(7314044).mat(0.5, 0.5, 0, 0);
    for (let t of [i + 0.2, a - 0.2]) {
      for (let i of [c + 0.45, c + 1])
        e.box(t - 0.05, i, n, t + 0.05, i + 0.07, r);
      for (let n = 134.25; n < r; n += 2)
        e.box(t - 0.04, c, n - 0.04, t + 0.04, c + 1, n + 0.04);
    }
    e.col(9344410).mat(0.5, 0.6, 0, 0);
    for (let t of [i + 0.6, a - 0.6])
      e.box(t - 0.18, o, 149.82, t + 0.18, o + 7.4, 150.18);
    (e.box(i + 0.4, o + 7, 149.8, a - 0.4, o + 7.5, 150.2), e.pop());
  }
  yield;
  let l = 149.3,
    u = 150.7;
  for (let t = i + 1.5; t < a - 1; t += 9.2) {
    let n = t,
      r = Math.min(t + 3.2, a - 0.5);
    (e.coarse ||
      (nq(e, r, l, n, l, LB, bs.DIP, s - 0.4),
      nq(e, n, u, r, u, RB, bs.DIP, s - 0.4)),
      e.push().col(1973790).mat(0.6, 0, 0, 0),
      e.coarse &&
        (e.panel(r, l, n, l, bs.DIP, s - 0.4),
        e.panel(n, u, r, u, bs.DIP, s - 0.4)),
      e.panel(n, l, n, u, bs.DIP, s - 0.4),
      e.panel(r, u, r, l, bs.DIP, s - 0.4),
      e.pop(),
      e.solid(n, l, r, u, bs.DIP, s, `pier`));
  }
  if (!e.coarse)
    for (let [t, o] of [
      [n, RB],
      [r, LB],
    ])
      for (let n of [i, a]) {
        let r = o === RB ? n - 0.8 : n + 0.8,
          i = o === RB ? n + 0.8 : n - 0.8;
        nq(
          e,
          r,
          t + o[1] * 0.02,
          i,
          t + o[1] * 0.02,
          o,
          bs.DIP + 0.4,
          s - 0.4,
          0.7,
        );
      }
  (e.push().col(XK).mat(0.92, 0, 0, 0),
    e.panel(i, n, a, n, bs.DIP - 0.3, s),
    e.panel(a, r, i, r, bs.DIP - 0.3, s),
    e.pop(),
    e.solid(i, 132.65, a, n, bs.DIP - 0.3, s, `wall`),
    e.solid(i, r, a, 167.35, bs.DIP - 0.3, s, `wall`),
    e.floor(i, n, a, r, o));
}
