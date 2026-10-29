// tokyo/assets/region-tokyo-d-akihabara-UGh9Bzey 08 — setmaterial
// Lines 2081-2371 of readable/tokyo/assets/region-tokyo-d-akihabara-UGh9Bzey.pretty.js (statement-aligned).
function ze(e, t) {
  let [n, r] = Fe[t],
    i = r,
    a = -n,
    o = [
      [e.x0, e.z0],
      [e.x1, e.z0],
      [e.x1, e.z1],
      [e.x0, e.z1],
    ].filter(([t, i]) =>
      n ? (n > 0 ? t === e.x1 : t === e.x0) : r > 0 ? i === e.z1 : i === e.z0,
    );
  o.sort((e, t) => e[0] * i + e[1] * a - (t[0] * i + t[1] * a));
  let [s, c] = o[0];
  return {
    ox: s,
    oz: c,
    tx: i,
    tz: a,
    nx: n,
    nz: r,
    L: Math.abs(n ? e.z1 - e.z0 : e.x1 - e.x0),
  };
}
var V = (e, t, n = 0) => [
  e.ox + e.tx * t + e.nx * n,
  e.oz + e.tz * t + e.nz * n,
];
function H(e, t, n, r, i, a, o, s) {
  let [c, l] = V(t, n, o),
    [u, d] = V(t, r, o);
  j(e, c, l, u, d, i, a, s);
}
function Be(e, t) {
  let r = new Map();
  for (let i of t) {
    let t = Re(i);
    (r.set(i.id, t),
      t.vsign && e.need(He(t.vsign), 52, 364, Te(t.vsign)),
      t.vsign2 && e.need(He(t.vsign2), 52, 364, Te(t.vsign2)));
    for (let n of t.bands ?? []) e.need(U(n), 384, 48, Ee(n));
    (t.stack &&
      e.need(
        `stack:${i.id}`,
        52,
        400,
        De(
          t.stack.map((e, n) => ({ n: t.stack.length + 1 - n, ...e })),
          `#3a3a40`,
        ),
      ),
      t.roof && e.need(`roof:${U(t.roof)}`, 288, 100, Oe(t.roof)),
      t.wrap && e.need(`wrap:${t.wrap.join(`|`)}`, 288, 432, ke(...t.wrap)),
      t.led && e.need(`led:${t.led}`, 224, 112, Ae(t.led, n(i.id) % 4)),
      e.need(`win:${t.win}`, 160, 60, Me(t.win, 1)),
      e.need(`shop:${i.shop}`, 288, 144, je(i.shop, 1)),
      i.poi && e.need(`shop:${i.poi.kind}`, 288, 144, je(i.poi.kind, 2)));
    let a = Ue(i, t);
    e.need(U(a), 384, 48, Ee(a));
  }
  for (let t of Ve) e.need(`wrap:${t.join(`|`)}`, 288, 432, ke(...t));
  return (
    e.need(`wall:concrete`, 64, 64, Ne(`concrete`, `#c8c4bc`)),
    e.need(`shutter`, 64, 64, Ne(`panel`, `#b4b8bc`)),
    r
  );
}
var Ve = [
    [0, `akiba.wrap.rpg`, `akiba.wrap.rpg-sub`],
    [3, `akiba.wrap.figure`, `akiba.word.akiba`],
    [4, `akiba.wrap.vtuber`, `akiba.word.akiba`],
  ],
  He = (e) => `v:${e.main}|${e.top ?? ``}|${e.bg}|${e.fg}`,
  U = (e) => `b:${e.main}|${e.sub ?? ``}|${e.bg}|${e.fg}|${e.floor ?? ``}`;
function Ue(e, t) {
  if (t.bands?.length) return t.bands[0];
  let n = t.vsign?.bg ?? `#1d2088`,
    r = t.vsign?.fg ?? `#ffffff`;
  return { main: e.name, bg: n, fg: r };
}
var We = 35,
  W = 3;
function Ge(e, r, i, a, o) {
  let s = new t(n(`akiba-hero`, r.id)),
    c = Ie(r),
    l = a.white(),
    u = ze(r, r.dir),
    d = (e) => {
      if (e === r.dir || e === r.corner) return 0;
      let t = ze(r, e),
        n = u;
      return t.nx === -n.nx && t.nz === -n.nz
        ? (r.coverB ?? 0)
        : ((t.nx === n.tx && t.nz === n.tz ? r.coverR : r.coverL) ?? 0);
    },
    f = a.uv(`win:${i.win}`);
  for (let t of [`N`, `E`, `S`, `W`]) {
    let o = ze(r, t),
      u = d(t);
    if (t !== r.dir && t !== r.corner) {
      if (u >= c - 0.05) continue;
      (e.setMaterial(0.9, 0, 0, 0),
        A(e, i.wall, 0.92),
        H(e, o, 0, o.L, Math.max(0, u), c, 0, l));
      let s = i.wrap
        ? `wrap:${i.wrap.join(`|`)}`
        : c - u > 12 && o.L > 8 && n(r.id, t) % 2 == 0
          ? `wrap:${Ve[n(r.id, `wp`) % Ve.length].join(`|`)}`
          : null;
      if (s && c - u > 9 && o.L > 7) {
        (e.setMaterial(0.6, 0, 0.16, W), A(e, 16777215));
        let t = c - 1.2,
          n = Math.max(u + 0.5, t - (o.L - 1.2) * 1.5);
        H(e, o, 0.6, o.L - 0.6, n, t, 0.06, a.uv(s));
      }
      continue;
    }
    Ke(e, r, i, o, a, t === r.dir, s);
    for (let t = 1; t < r.floors; t++) {
      let n = L + (t - 1) * R,
        r = n + R;
      if (i.closedFront !== void 0) {
        (e.setMaterial(0.7, 0, 0, 0),
          A(e, i.closedFront),
          H(e, o, 0, o.L, n, r, 0, l));
        continue;
      }
      (e.setMaterial(0.85, 0, 0, 0),
        A(e, i.wall),
        H(e, o, 0, o.L, n, n + 0.95, 0, l));
      let a = Math.max(1, Math.round(o.L / 3.6));
      (e.setMaterial(0.2, 0.3, 0.22, We), A(e, 16777215));
      for (let t = 0; t < a; t++)
        H(
          e,
          o,
          (o.L * t) / a + 0.12,
          (o.L * (t + 1)) / a - 0.12,
          n + 0.95,
          r,
          0,
          f,
        );
      (e.setMaterial(0.85, 0, 0, 0), A(e, i.wall, 0.96));
      for (let t = 0; t <= a; t++) {
        let i = (o.L * t) / a;
        H(
          e,
          o,
          Math.max(0, i - 0.12),
          Math.min(o.L, i + 0.12),
          n + 0.95,
          r,
          0,
          l,
        );
      }
    }
    if (
      (e.setMaterial(0.85, 0, 0, 0),
      A(e, i.wall, 0.9),
      H(e, o, 0, o.L, c - 0.9, c, 0, l),
      t === r.dir && i.bands?.length)
    ) {
      let t = i.bands.some(
          (e) => e.floor !== void 0 && /\.floor\./.test(e.main),
        ),
        n = new Map(),
        s = 0,
        c = i.led && r.floors >= 6 ? 2 : -1;
      for (let l = 1; l < r.floors - 1; l++) {
        if (l === c) continue;
        let r = i.bands.find((e) => e.floor === l + 1) ?? null;
        if (!r) {
          if (t || (l - 1) % 2) continue;
          r = i.bands[s++ % i.bands.length];
        }
        let u = U(r);
        if ((n.get(u) ?? 0) >= 2) continue;
        n.set(u, (n.get(u) ?? 0) + 1);
        let d = L + (l - 1) * R + 0.15,
          f = i.closedFront === void 0 ? 1.15 : Math.min(R * 0.7, o.L / 6);
        (e.setMaterial(0.5, 0, 0.3, W), A(e, 16777215));
        let p = Math.min(o.L - 0.4, f * 8),
          m = (o.L - p) / 2;
        H(e, o, m, m + p, d, d + f, 0.12, a.uv(u));
      }
    }
    if (t === r.dir && i.led && r.floors >= 5) {
      let t = r.floors >= 6 ? 8 : 4.8999999999999995,
        n = Math.min(o.L * 0.7, 7, (R * 2 - 0.4) * 2),
        s = n / 2;
      (e.setMaterial(0.3, 0, 0.32, 6),
        A(e, 16777215),
        H(
          e,
          o,
          (o.L - n) / 2,
          (o.L + n) / 2,
          t,
          t + s,
          0.16,
          a.uv(`led:${i.led}`),
        ));
    }
    t === r.dir &&
      i.wrap &&
      r.kind === `wrap` &&
      (e.setMaterial(0.6, 0, 0.18, W),
      A(e, 16777215),
      H(
        e,
        o,
        0.3,
        o.L - 0.3,
        5.5,
        c - 1.4,
        0.14,
        a.uv(`wrap:${i.wrap.join(`|`)}`),
      ));
  }
  (e.setMaterial(0.9, 0, 0, 0),
    A(e, 9079430),
    ve(e, r.x0, r.z0, r.x1, r.z1, c - 0.6, l));
  let p = (t, n, r, i, o) => {
      let [s, c] = V(u, n, 0.35 + o / 2);
      (e.setMaterial(0.5, 0, 0.32, W), A(e, 16777215));
      let d = a.uv(He(t));
      (M(e, s, c, r, i, o / 2, 0.2, u.tx, u.tz, l, d, d),
        e.setMaterial(0.6, 0.4, 0, 0),
        A(e, 5264472));
      let [f, p] = V(u, n, 0.18);
      M(e, f, p, r + 0.3, i - 0.3, 0.17, 0.05, u.tx, u.tz, l);
    },
    m = c - (i.roof ? 0.9 : 0.2),
    h = Math.min(m - 4.6, 26);
  if (
    (i.vsign &&
      r.floors >= 3 &&
      p(i.vsign, 0.9, m - h, m, r.kind === `hobby` ? 2 : 1.3),
    i.vsign2 && r.floors >= 4)
  )
    p(i.vsign2, u.L - 0.9, m - h * 0.7, m, 1);
  else if (i.stack && r.floors >= 3 && u.L > 5) {
    let t = L + i.stack.length * R,
      [n, o] = V(u, u.L - 0.8, 0.85);
    (e.setMaterial(0.5, 0, 0.3, W), A(e, 16777215));
    let s = a.uv(`stack:${r.id}`);
    M(e, n, o, 4.5, Math.min(t, c - 1), 0.5, 0.16, u.tx, u.tz, l, s, s);
  }
  if (i.roof) {
    let t = r.kind === `hobby` ? 5.5 : 3.2,
      n = Math.min(u.L - 0.6, t * 2.86);
    (e.setMaterial(0.7, 0.5, 0, 0), A(e, 6317160));
    for (let n of [0.7, u.L - 0.7]) {
      let [r, i] = V(u, n, -1.2);
      M(e, r, i, c - 0.6, c + t * 0.4, 0.08, 0.6, u.nx, u.nz, l);
    }
    (e.setMaterial(0.5, 0, 0.32, W), A(e, 16777215));
    let [o, s] = V(u, u.L / 2, -0.6),
      d = a.uv(`roof:${U(i.roof)}`);
    M(e, o, s, c + 0.1, c + 0.1 + t, n / 2, 0.2, u.nx, u.nz, l, d, d);
  }
  return (
    !i.roof &&
      o > 0 &&
      s.next() < 0.5 &&
      (e.setMaterial(0.6, 0.2, 0, 0),
      A(e, 14212312),
      M(
        e,
        (r.x0 + r.x1) / 2 + (s.next() - 0.5) * 2,
        (r.z0 + r.z1) / 2,
        c - 0.6,
        c + 1.6,
        0.9,
        0.9,
        0,
        1,
        l,
      )),
    {
      id: r.id,
      h: c,
      cx: (r.x0 + r.x1) / 2,
      cz: (r.z0 + r.z1) / 2,
      hx: (r.x1 - r.x0) / 2,
      hz: (r.z1 - r.z0) / 2,
    }
  );
}
