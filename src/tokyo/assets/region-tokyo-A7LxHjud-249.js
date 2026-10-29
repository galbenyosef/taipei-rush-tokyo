// tokyo/assets/region-tokyo-A7LxHjud 249 — math
// Lines 93808-94146 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var oL = (e) => e - wI.x,
  sL = (e) => e - wI.z,
  wSe = {
    id: `todai-hongo`,
    site: SSe,
    name: {
      ja: `東京大学 本郷キャンパス`,
      zh: `東京大學 本鄉校區`,
      en: `University of Tokyo, Hongo Campus`,
    },
    near: 240,
    build: bSe,
    far: xSe,
    farBoxes: CSe,
    bounds: () => [TI.x0, TI.z0, TI.x1, TI.z1],
    blip: !0,
    anchors: [
      {
        key: `todai-akamon`,
        lx: oL(-714),
        lz: sL(OI),
        turn: Math.PI / 2,
        name: {
          zh: `東京大學 赤門`,
          en: `University of Tokyo Akamon (Red Gate)`,
        },
      },
      {
        key: `todai-seimon`,
        lx: oL(-714),
        lz: sL(kI),
        turn: Math.PI / 2,
        name: { zh: `東京大學 正門`, en: `University of Tokyo Main Gate` },
      },
      {
        key: `todai-yasuda`,
        lx: oL(-650),
        lz: sL(-1e3),
        turn: Math.PI / 2,
        name: { zh: `東京大學 安田講堂`, en: `Yasuda Auditorium` },
      },
      {
        key: `todai-sanshiro`,
        lx: oL(-668),
        lz: sL(-944),
        turn: Math.PI * 0.6,
        name: { zh: `三四郎池`, en: `Sanshiro Pond` },
      },
    ],
    roofs: [
      {
        lx0: oL(-711),
        lz0: sL(-884.5),
        lx1: oL(-702),
        lz1: sL(-875.5),
        y: 4.7,
      },
      { lx0: oL(-698), lz0: sL(-985), lx1: oL(-672), lz1: sL(-981), y: 4.3 },
      { lx0: oL(-675), lz0: sL(-1024), lx1: oL(-633), lz1: sL(-1020), y: 4.3 },
    ],
  };
r.add({ 櫻田門: `桜田門` });
var cL = 0.15,
  lL = 13.15,
  uL = 15724264,
  dL = 9212312,
  fL = 14209734,
  pL = 0.03,
  mL = () => ({ x: 0, z: 0, gy: 0, facing: 0 });
function hL(e, t, n, r, i, a, o, s, c, l = 4, u = 0) {
  let d = Math.min(r, i),
    f = Math.max(r, i);
  if (f - d < 0.001 || s - o < 0.001) return;
  let p = Math.max(1, Math.round((f - d) / (l * (e.coarse ? 2 : 1)))),
    m = Math.max(1, Math.round((s - o) / (l * (e.coarse ? 2 : 1)))),
    h = n - a * u;
  if (t === `x`) {
    let [t, r] = a > 0 ? [f, d] : [d, f];
    e.grid(n, o, t, n, o, r, h, s, r, h, s, t, c, p, m);
  } else {
    let [t, r] = a > 0 ? [d, f] : [f, d];
    e.grid(t, o, n, r, o, n, r, s, h, t, s, h, c, p, m);
  }
}
function gL(e, t, n, r, i, a, o = t.c(`ishigaki`), s = 4) {
  let c = n.length,
    l = (e) => {
      let [t, r] = n[e],
        [i, a] = n[e + 1],
        o = Math.hypot(i - t, a - r) || 1;
      return [(a - r) / o, -(i - t) / o];
    },
    u = [],
    d = n[0][0] === n[c - 1][0] && n[0][1] === n[c - 1][1];
  for (let e = 0; e < c; e++) {
    let t = e > 0 ? l(e - 1) : d ? l(c - 2) : null,
      n = e < c - 1 ? l(e) : d ? l(0) : null;
    u.push([(t?.[0] ?? 0) + (n?.[0] ?? 0), (t?.[1] ?? 0) + (n?.[1] ?? 0)]);
  }
  let f = s * (e.coarse ? 2 : 1);
  for (let t = 0; t + 1 < c; t++) {
    let [s, c] = n[t],
      [d, p] = n[t + 1],
      m = Math.hypot(d - s, p - c),
      h = Math.max(1, Math.ceil(m / f));
    for (let n = 0; n < h; n++) {
      let f = n / h,
        g = (n + 1) / h,
        _ = s + (d - s) * f,
        v = c + (p - c) * f,
        y = s + (d - s) * g,
        b = c + (p - c) * g,
        x = r(_, v),
        S = r(y, b);
      if (x - i < 0.05 && S - i < 0.05) continue;
      let [C, w] = l(t),
        T = n === 0 ? u[t] : [C, w],
        E = n === h - 1 ? u[t + 1] : [C, w],
        D = a * Math.max(0, x - i),
        O = a * Math.max(0, S - i),
        k = i - 0.35,
        A = Math.max(1, Math.round(Math.max(x, S) - i) / (e.coarse ? 8 : 4));
      e.grid(
        y + E[0] * O,
        k,
        b + E[1] * O,
        _ + T[0] * D,
        k,
        v + T[1] * D,
        _,
        x,
        v,
        y,
        S,
        b,
        o,
        Math.max(1, Math.round(m / h / 4)),
        Math.max(1, Math.round(A)),
      );
    }
  }
}
function _L(e, t, n, r, i, a, o, s = -1, c = 2.3) {
  let l = Math.hypot(i - n, a - r);
  if (l < 0.3) return;
  let u = (i - n) / l,
    d = (a - r) / l,
    f = l - 0.1,
    p = e.sub(n + u * 0.05, 0, r + d * 0.05, Math.atan2(a - r, i - n));
  if (
    (e.col(10130570).mat(0.9, 0, 0, 0),
    e.box(0, o - 0.25, -0.38, f, o + 0.45, 0.38),
    e.col(uL).mat(0.85, 0, 0.06, G),
    e.box(0, o + 0.45, -0.22, f, o + c - 0.32, 0.22, t.c(`plaster`), 4, 2),
    e.col(3948612).mat(0.6, 0.1, 0, 0),
    e.extrudeX([-0.6, o + c - 0.36, 0, o + c, 0.6, o + c - 0.36], 0, f, !0, !0),
    !e.coarse)
  ) {
    e.col(2762790).mat(0.9, 0, 0, 0);
    let t = s * 0.225;
    for (let n = 1.5; n < f - 1; n += 3)
      s < 0
        ? e.panel(n + 0.18, t, n - 0.18, t, o + 1, o + 1.36)
        : e.panel(n - 0.18, t, n + 0.18, t, o + 1, o + 1.36);
  }
  (e.solid(0, -0.3, f, 0.3, o - 0.3, o + c), e.leave(p));
}
function vL(e, t, n, r, i, a, o, s = `gravel`, c = 4) {
  let l = e.coarse ? 0 : c,
    u = e.coarse ? e.white : t.c(s === `stone` ? `granite` : `gravel`);
  s === `gravel`
    ? e
        .col(e.coarse ? 13222836 : 15394006)
        .mat(0.95, 0, 0, 0)
        .flat(n, r, i, a, o + pL, u, l, l)
    : s === `earth`
      ? e
          .col(e.coarse ? 10324848 : 12034691)
          .mat(0.95, 0, 0, 0)
          .flat(n, r, i, a, o + pL, u, l, l)
      : e
          .col(e.coarse ? 12170151 : 13617597)
          .mat(0.85, 0, 0, 0)
          .flat(n, r, i, a, o + pL, u, l / 2, l / 2);
}
function yL(e, t, n, r, i, a, o, s, c) {
  e.col(13222838).mat(0.85, 0, 0, 0);
  let l = t.c(`granite`),
    u = (e, t, r) => (n ? [e, r, t] : [t, r, e]),
    d = (t, a, o, s) => {
      let c = a[0] - t[0],
        u = a[1] - t[1],
        d = a[2] - t[2],
        f = s[0] - t[0],
        p = s[1] - t[1],
        m = s[2] - t[2],
        h = d * f - c * m,
        g = n ? u * m - d * p : c * p - u * f,
        _ = Math.sign(r - i);
      (Math.abs(h) > 1e-6 ? h < 0 : g * _ * 1 < 0)
        ? e.quad(
            t[0],
            t[1],
            t[2],
            s[0],
            s[1],
            s[2],
            o[0],
            o[1],
            o[2],
            a[0],
            a[1],
            a[2],
            l,
          )
        : e.quad(
            t[0],
            t[1],
            t[2],
            a[0],
            a[1],
            a[2],
            o[0],
            o[1],
            o[2],
            s[0],
            s[1],
            s[2],
            l,
          );
    };
  if (e.coarse) {
    d(u(r, a, s), u(r, o, s), u(i, o, c), u(i, a, c));
    return;
  }
  let f = Math.max(1, Math.round(Math.abs(c - s) / 0.17)),
    p = (c - s) / f;
  for (let e = 0; e < f; e++) {
    let t = r + ((i - r) * e) / f,
      n = r + ((i - r) * (e + 1)) / f,
      c = s + p * (e + 1) + 0.02;
    (d(u(t, a, c), u(t, o, c), u(n, o, c), u(n, a, c)),
      d(u(t, a, c - p - 0.02), u(t, o, c - p - 0.02), u(t, o, c), u(t, a, c)));
  }
}
function bL(e, t, n, r, i, a, o, s) {
  e.lathe(
    t,
    r,
    [
      0.04,
      n - i * 0.5 * a,
      i,
      n - i * 0.05 * a,
      i * 0.64,
      n + i * 0.55 * a,
      0.04,
      n + i * 0.85 * a,
    ],
    o,
    s,
  );
}
function TSe(e, t, n, r, i) {
  let a = new le(i);
  e.push().col(5917503).mat(0.95, 0, 0, 0);
  let o = t + a.range(-0.4, 0.4),
    s = n + a.range(-0.4, 0.4),
    c = r * 0.42;
  e.rod(t, 0, n, o, c, s, r * 0.032, 5, r * 0.024);
  let l = e.coarse ? 1 : 3 + +(a.next() < 0.5),
    u = e.coarse ? 4 : 5,
    d = a.range(0, Math.PI * 2),
    f = a.range(0.85, 1.1);
  for (let t = 0; t < l; t++) {
    let n = d + (t / l) * Math.PI * 2 + a.range(-0.3, 0.3),
      i = t === 0 ? 0 : r * a.range(0.16, 0.24),
      p = o + Math.cos(n) * i,
      m = s + Math.sin(n) * i,
      h = r * (t === 0 ? 0.78 : a.range(0.6, 0.7));
    (t > 0 &&
      !e.coarse &&
      e
        .col(5917503)
        .mat(0.95, 0, 0, 0)
        .rod(o, c, s, p, h - r * 0.08, m, r * 0.016, 4, r * 0.01),
      e
        .col(t === 0 ? 4681786 : 5208636, f * a.range(0.9, 1.08))
        .mat(0.95, 0, 0, 0),
      bL(
        e,
        p,
        h,
        m,
        r * (t === 0 ? 0.3 : a.range(0.22, 0.27)),
        1,
        u,
        a.next() * 3,
      ));
  }
  e.pop();
}
function ESe(e, t, n, r, i, a = 0, o = 0) {
  let s = new le(i);
  e.push().col(4208186).mat(0.95, 0, 0, 0);
  let c = t + a * r * 0.12,
    l = n + o * r * 0.12,
    u = r * 0.34;
  e.rod(t, 0, n, c, u, l, r * 0.034, 5, r * 0.026);
  let d = e.coarse ? 2 : 3,
    f = e.coarse ? 4 : 5,
    p = s.range(0, Math.PI * 2);
  for (let t = 0; t < d; t++) {
    let n = p + (t / d) * Math.PI * 2 + s.range(-0.25, 0.25),
      i = r * s.range(0.28, 0.38),
      m = c + Math.cos(n) * i + a * r * 0.22,
      h = l + Math.sin(n) * i + o * r * 0.22,
      g = r * s.range(0.58, 0.7);
    (e.coarse ||
      e
        .col(4208186)
        .mat(0.95, 0, 0, 0)
        .rod(c, u, l, m, g - r * 0.06, h, r * 0.017, 4, r * 0.01),
      e.col(6259264, s.range(0.86, 1.08)).mat(0.95, 0, 0, 0),
      bL(e, m, g, h, r * s.range(0.24, 0.3), 0.62, f, s.next() * 3));
  }
  (e.col(5930044, s.range(0.9, 1.05)).mat(0.95, 0, 0, 0),
    bL(
      e,
      c + a * r * 0.12,
      r * 0.8,
      l + o * r * 0.12,
      r * 0.3,
      0.6,
      f,
      s.next() * 3,
    ),
    e.pop());
}
