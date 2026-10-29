// tokyo/assets/region-tokyo-A7LxHjud 56 — math
// Lines 25899-26228 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function yu(e, t, n) {
  let r = e.districtAt((t.minX + t.maxX) / 2, (t.minZ + t.maxZ) / 2),
    i = r.style,
    a = r.id,
    o = i.zakkyo ?? 0.3,
    s = i.wooden ?? 0.1,
    c = i.office ?? 0.2,
    l = new le(de(e.dataset.seed, `tokyo-lots`, t.id)),
    u = t.maxX - t.minX,
    d = t.maxZ - t.minZ,
    f = [t.north, t.east, t.south, t.west],
    p = f.some(vu),
    m = l.next(),
    h = l.next(),
    g = Math.min(u, d),
    _ = [],
    v = [],
    y = (e, t, n, r, i) => {
      (_.push([e, t, n, r]), v.push(i));
    },
    b = u >= d ? `x` : `z`;
  if (p && h < (Pae[a] ?? 0) && u <= 90 && d <= 110 && u >= 30 && d >= 30)
    y(t.minX, t.minZ, t.maxX, t.maxZ, uu.DEPATO);
  else if (m < c * 0.85 && g <= 72) {
    let e = b === `x` ? t.minX : t.minZ,
      n = b === `x` ? t.maxX : t.maxZ,
      r = e;
    for (; r < n - 0.5;) {
      let e = l.range(28, 64);
      (n - (r + e) < 22 && (e = n - r),
        b === `x`
          ? y(r, t.minZ, r + e, t.maxZ, uu.OFFICE)
          : y(t.minX, r, t.maxX, r + e, uu.OFFICE),
        (r += e));
    }
  } else {
    let e = b === `x` ? 0 : 3,
      n = b === `x` ? 2 : 1,
      r = b === `x` ? t.minZ : t.minX,
      i = b === `x` ? t.maxZ : t.maxX,
      u = b === `x` ? t.minX : t.minZ,
      d = b === `x` ? t.maxX : t.maxZ,
      p = !!f[e],
      m = !!f[n],
      h = [];
    if (g < 19 || (!p && !m)) h.push([r, i, p ? e : m ? n : -1]);
    else if (g <= 52) {
      let t = r + g * (0.42 + 0.16 * l.next());
      h.push([r, t, p ? e : -1], [t, i, m ? n : -1]);
    } else {
      let t = Math.min(24, Math.max(15, g * 0.3)),
        a = p ? r + t : r,
        o = m ? i - t : i;
      p && h.push([r, a, e]);
      let s = Math.max(1, Math.round((o - a) / 20));
      for (let e = 0; e < s; e++)
        h.push([a + ((o - a) * e) / s, a + ((o - a) * (e + 1)) / s, -1]);
      m && h.push([o, i, n]);
    }
    for (let [e, t, n] of h) {
      let r = u;
      for (; r < d - 0.5;) {
        let i;
        i = n < 0 ? Vae(l, s) : Bae(l, a, o, s, c, vu(f[n]));
        let [u, p] = Mae[i],
          m =
            n < 0
              ? i === uu.MANSION
                ? l.range(16, 30)
                : l.range(6, 11)
              : l.range(u, p);
        (d - (r + m) < Math.max(4, u * 0.6) && (m = d - r),
          b === `x`
            ? y(r, e, r + m, t, n < 0 ? i : i | 64)
            : y(e, r, t, r + m, n < 0 ? i : i | 64),
          (r += m));
      }
    }
  }
  let x = Gl(Wl(e), t.minX, t.minZ, t.maxX, t.maxZ, Rae),
    S = [];
  for (let e = 0; e < _.length; e++) {
    let [r, o, s, c] = _[e],
      u = l.next(),
      d = l.next(),
      p = l.next(),
      m = l.next(),
      h = l.next(),
      g = (l.next() * 4294967296) >>> 0,
      y = v[e] & 63,
      b = 0,
      C = 0,
      w = [
        o <= t.minZ + 0.01,
        s >= t.maxX - 0.01,
        c >= t.maxZ - 0.01,
        r <= t.minX + 0.01,
      ];
    for (let e = 0; e < 4; e++)
      w[e] && f[e] && ((b |= 1 << e), vu(f[e]) && (C |= 1 << e));
    let T = 0.22 + 0.25 * m,
      E = y === uu.OFFICE || y === uu.DEPATO,
      D = (e) => ((b >> e) & 1 ? (E ? 1.2 : 0.12) : w[e] ? 0.4 : T / 2),
      O = r + D(3),
      k = s - D(1),
      A = o + D(0),
      j = c - D(2);
    if (
      k - O < 3 ||
      j - A < 3 ||
      t.reserved.some(
        (e) =>
          k > e.x - e.w / 2 &&
          O < e.x + e.w / 2 &&
          j > e.z - e.d / 2 &&
          A < e.z + e.d / 2,
      ) ||
      n?.claimed(O, A, k, j, `buildings`) ||
      kie(O, A, k, j)
    )
      continue;
    if (x.length && Kl(x, O, A, k, j)) {
      let e = zae(x, O, A, k, j);
      if (
        !e ||
        (e[4] >= 0 && ((b &= ~(1 << e[4])), (C &= ~(1 << e[4]))),
        ([O, A, k, j] = e),
        k - O < 4 || j - A < 4)
      )
        continue;
    }
    let M = b !== 0,
      ee = Hae(y, i, a, M, C !== 0, u, d, p, h, Math.min(k - O, j - A));
    S.push({
      x0: O,
      z0: A,
      x1: k,
      z1: j,
      ...ee,
      seed: g,
      front: M,
      blockId: t.id,
      ty: y,
      street: b,
      big: C,
      cover: [0, 0, 0, 0],
      district: a,
      neon: i.neon,
      old: i.old,
      shops: i.shops,
    });
  }
  return (Wae(S), S);
}
function zae(e, t, n, r, i) {
  let a = null,
    o = 0;
  for (let s = 0; s < 4; s++) {
    let c = s === 0 || s === 2 ? i - n : r - t;
    for (let l = 1.5; l <= c * 0.7; l += 1.5) {
      let c = [
        t + (s === 3 ? l : 0),
        n + (s === 0 ? l : 0),
        r - (s === 1 ? l : 0),
        i - (s === 2 ? l : 0),
        s,
      ];
      if (Kl(e, c[0], c[1], c[2], c[3])) continue;
      let u = (c[2] - c[0]) * (c[3] - c[1]);
      u > o && ((o = u), (a = c));
      break;
    }
  }
  return a;
}
function Bae(e, t, n, r, i, a) {
  let o = a && (t === `nihonbashi` || t === `ginza` || t === `marunouchi`),
    s = a && t === `ginza`,
    c = i * (a ? (s ? 2.2 : 1.25) : 0.45),
    l = n * (a ? (s ? 0.5 : 1.2) : 0.95),
    u = s ? 0 : Math.max(0.06, 1 - i - n - r) * (a ? 0.55 : 1.15),
    d = o ? 0 : r * (a ? 0.12 : 1.6),
    f = o ? 0 : (Nae[t] ?? 0) * (a ? 0.7 : 1.1),
    p = e.next() * (c + l + u + d + f);
  return p < c
    ? uu.OFFICE
    : p < c + l
      ? uu.ZAKKYO
      : p < c + l + u
        ? uu.MANSION
        : p < c + l + u + d
          ? uu.SHITAMACHI
          : uu.KURA;
}
function Vae(e, t) {
  return e.next() < 0.35 + t * 1.6 ? uu.SHITAMACHI : uu.MANSION;
}
function Hae(e, t, n, r, i, a, o, s, c, l) {
  let u = 1,
    d = 3.6,
    f = 3.2,
    p = 0.9,
    m = 0,
    h = !1,
    [g, _] = t.floors;
  switch (e) {
    case uu.OFFICE:
      ((d = 5),
        (f = 3.9 + 0.3 * s),
        (h = o < t.towers * (i ? 1 : 0.6) && _ >= 14 && l >= 24),
        h
          ? ((u = Math.round(Math.max(15, _ * (0.55 + 0.45 * a)))),
            (d = 6.5),
            (m = n === `marunouchi` || n === `nihonbashi` || c < 0.35 ? 31 : 0))
          : (u = Math.round(
              Math.max(5, Math.min(13, g + (Math.min(_, 14) - g) * a)),
            )),
        (p = 1.2));
      break;
    case uu.ZAKKYO: {
      let e = Math.max(4, Math.min(8, g)),
        t = Math.max(e + 2, Math.min(10, _));
      ((u = Math.round(e + (t - e) * a) + +!!i),
        n === `akihabara` && i && (u += Math.round(2 * o)),
        (d = 3.8 + 0.5 * s),
        (f = 3.15 + 0.35 * o),
        (p = 0.9));
      break;
    }
    case uu.MANSION:
      ((u = Math.round(
        Math.max(4, Math.min(14, g + 1 + (Math.min(_, 14) - g) * a)),
      )),
        (d = 3.3 + 0.3 * s),
        (f = 2.9 + 0.12 * o),
        (p = 1.1));
      break;
    case uu.SHITAMACHI:
      ((u = a < 0.62 ? 2 : 3),
        (d = 2.9 + 0.3 * s),
        (f = 2.7 + 0.12 * o),
        (p = 1.4 + 0.6 * c));
      break;
    case uu.KURA:
      ((u = 2), (d = 3.7 + 0.3 * s), (f = 3), (p = 2.6));
      break;
    case uu.DEPATO:
      ((u = Math.round(7 + 3 * a)), (d = 5.5), (f = 4.6), (p = 1.4));
  }
  !r && e !== uu.SHITAMACHI && (u = Math.max(3, Math.round(u * 0.75)));
  let v = Math.floor((160 - d - p) / f) + 1;
  u > v && (u = v);
  let y = d + (u - 1) * f + p;
  return {
    floors: u,
    gH: d,
    fh: f,
    h: y,
    podium: m && y > m + 12 ? m : 0,
    tower: h,
  };
}
function Uae(e) {
  return e.podium > 0 ? e.podium : e.h;
}
function Wae(e) {
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    for (let r = 0; r < 4; r++) {
      if ((n.street >> r) & 1) continue;
      let i = r === 0 || r === 2,
        a = i ? n.x0 : n.z0,
        o = i ? n.x1 : n.z1,
        s =
          r === 0
            ? n.z0 - 0.9
            : r === 1
              ? n.x1 + 0.9
              : r === 2
                ? n.z1 + 0.9
                : n.x0 - 0.9,
        c = Math.max(2, Math.ceil((o - a) / 1.5)),
        l = 1 / 0;
      for (let n = 0; n <= c && l > 0; n++) {
        let r = a + 0.3 + ((o - a - 0.6) * n) / c,
          u = i ? r : s,
          d = i ? s : r,
          f = 0;
        for (let n = 0; n < e.length; n++) {
          if (n === t) continue;
          let r = e[n];
          if (u >= r.x0 && u <= r.x1 && d >= r.z0 && d <= r.z1) {
            f = Uae(r);
            break;
          }
        }
        f < l && (l = f);
      }
      n.cover[r] = l === 1 / 0 ? 0 : l;
    }
  }
}
function Gae(e, t, n) {
  let r = [];
  for (let i of e.blocks)
    if (!(
      i.maxX < t.minX ||
      i.minX > t.maxX ||
      i.maxZ < t.minZ ||
      i.minZ > t.maxZ
    ))
      for (let a of yu(e, i, n))
        rie(t, (a.x0 + a.x1) / 2, (a.z0 + a.z1) / 2) && r.push(a);
  return r;
}
r.add({
  雷門對面: `雷門の向かい`,
  淺草文化觀光中心: `浅草文化観光センター`,
  人力車乘車處: `人力車のりば`,
  搭人力車遊淺草: `人力車で浅草めぐり`,
  鶴十的排隊人龍: `鶴十の行列`,
  "常若堂 雷米香本鋪": `常若堂 雷おこし本舗`,
  神浦酒吧: `神浦バー`,
  "Hoplee通（燉菜通）": `ホップリー通り`,
  燉菜居酒屋的戶外座: `煮込み屋の外席`,
  "並木 竹藪蕎麥": `並木 竹藪`,
  和服租借: `着物レンタル`,
  柳橙通: `オレンジ通り`,
  雷門通: `雷門通り`,
});
