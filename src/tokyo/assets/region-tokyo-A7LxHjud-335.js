// tokyo/assets/region-tokyo-A7LxHjud 335 — math
// Lines 120388-121405 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function hAe(e, t, n) {
  let r = new Map(),
    i = {},
    a = (t, n) => e.groundHeight(t, n),
    o = (e, t) => {
      let n = dc(e, t),
        i = r.get(n);
      return (i || r.set(n, (i = { inst: [], boxes: [] })), i);
    },
    s = (e, t, n, r, s, c, l, u = CY.ALWAYS, d = 0, f = 1, p = 1, m = 1) => {
      (xm(wY, t, a(t, r) + n, r, s, c, f, p, m),
        o(t, r).inst.push({
          model: e,
          m: Float32Array.from(wY),
          x: t,
          z: r,
          range: l,
          group: u,
          param: d,
        }),
        (i[e.replace(/-\d+$/, ``)] = (i[e.replace(/-\d+$/, ``)] ?? 0) + 1));
    },
    c = (e, t, n, r, i, a, s) => {
      let c = Math.abs(r) * i + Math.abs(n) * a,
        l = Math.abs(n) * i + Math.abs(r) * a;
      (o(e, t).boxes.push({
        x0: e - c,
        z0: t - l,
        x1: e + c,
        z1: t + l,
        y1: s,
      }),
        u(e, t, n, r, i, a));
    },
    l = [],
    u = (e, t, n, r, i, a) => {
      let o = Math.abs(r) * i + Math.abs(n) * a + 0.25,
        s = Math.abs(n) * i + Math.abs(r) * a + 0.25;
      l.push({ x0: e - o, z0: t - s, x1: e + o, z1: t + s, y1: 0 });
    },
    d = (e, n, r) =>
      t.some(
        (t) =>
          (t.x - e) ** 2 + (t.z - n) ** 2 < r * r ||
          (t.cx - e) ** 2 + (t.cz - n) ** 2 < (r + Math.max(t.hw, t.hl)) ** 2,
      ),
    f = [],
    p = null,
    m = e.dataset.namedPlaces?.find((e) => e.id === `ameyoko`),
    h = e.roads.find((e) => e.id === `ameyoko`);
  if (m && h && h.axis === `z`) {
    let t = Math.max(h.from, m.minZ) + 4,
      r = Math.min(h.to, m.maxZ) - 4;
    p = { x: h.at, z: (t + r) / 2, hx: h.halfTotal, hz: (r - t) / 2 };
    for (let i of [-1, 1]) {
      let a = h.at + i * h.halfTotal,
        o = -i,
        l = a - i * 0.45,
        p = new le(de(`tokyo-culture-ameyoko`, i)),
        m = t;
      for (; m < r - dY;) {
        let t = (2 + Math.floor(p.next() * 3)) * dY,
          h = m,
          g = Math.min(r, m + t),
          _ = Math.floor((g - h) / dY),
          v = (h + g) / 2;
        if (
          !(
            _ < 1 ||
            d(l, v, 4 + t / 2) ||
            e.surfaceAt(l, h) !== `sidewalk` ||
            e.surfaceAt(l, g - 0.1) !== `sidewalk` ||
            e.nodeAt(l, h) ||
            e.nodeAt(l, g)
          ) &&
          p.next() < (i > 0 ? 0.92 : 0.7)
        ) {
          let t = !!n?.claimed(
              a - 0.6,
              h,
              a + 0.6,
              h + Math.floor((g - h) / dY) * dY,
              `buildings`,
            ),
            d = p.next(),
            v =
              d < 0.3
                ? [0, 1, 2]
                : d < 0.5
                  ? [3, 4]
                  : d < 0.68
                    ? [5, 6]
                    : d < 0.82
                      ? [7, 8]
                      : [9, 10],
            y = `st-closed-${de(`tokyo-culture-closed`, i, Math.round(h)) % 3}`;
          for (let e = 0; e < _; e++) {
            let n = h + (e + 0.5) * dY,
              r = lY[v[(e + Math.floor(p.next() * 2)) % v.length]];
            t ||
              (s(r.name, l, 0, n, o, 0, 170, CY.MARKET_OPEN),
              s(y, l, 0, n, o, 0, 170, CY.MARKET_CLOSED));
          }
          if (
            (t || c(l, (h + h + _ * dY) / 2, o, 0, (_ * dY) / 2, 0.45, 1),
            p.next() < 0.75)
          ) {
            let e = v[0] <= 2 ? 3 : v[0] <= 4 ? 5 : p.next() < 0.5 ? 4 : 7;
            (t ||
              s(
                `nobori-${e}`,
                l + o * 1,
                0,
                h + 0.12,
                o,
                0,
                160,
                CY.MARKET_OPEN,
              ),
              t || u(l + o * 1, h + 0.12, o, 0, 0.3, 0.1));
          }
          if (
            (t ||
              f.push({
                x0: l + o * 0.75,
                z0: h,
                x1: l + o * 0.75,
                z1: h + _ * dY,
                fx: o,
                fz: 0,
                units: _,
              }),
            (m = h + _ * dY),
            p.next() < 0.6)
          ) {
            let t = m + 0.45;
            t < r &&
              e.surfaceAt(l, t) === `sidewalk` &&
              (s(
                p.next() < 0.6 ? `foam-stack` : `cardboard`,
                a - i * 0.32,
                0,
                t,
                o,
                0,
                90,
              ),
              c(a - i * 0.32, t, o, 0, 0.32, 0.3, 0.9));
          }
          m += 1 + p.next() * 1.8;
        } else m += 2 + p.next() * 3;
      }
    }
    let i = h.halfTotal - 0.15;
    for (let [e, n] of [
      [t - 2.5, -1],
      [r + 2.5, 1],
    ])
      (s(`gate-ameyoko`, h.at, 0, e, 0, n, 280),
        o(h.at, e).boxes.push({
          x0: h.at - i - 0.15,
          z0: e - 0.15,
          x1: h.at - i + 0.15,
          z1: e + 0.15,
          y1: 5.4,
        }),
        o(h.at, e).boxes.push({
          x0: h.at + i - 0.15,
          z0: e - 0.15,
          x1: h.at + i + 0.15,
          z1: e + 0.15,
          y1: 5.4,
        }));
  }
  let g = (t, n, r, i) => {
      let a = t + r * 0.6,
        o = n + i * 0.6,
        s = e.roadAt(a, o);
      return s
        ? { road: s, w: s.halfTotal - s.halfWidth }
        : { road: null, w: 0 };
    },
    _ = new Map(e.blocks.map((e) => [e.id, e])),
    v = new Map(),
    y = (t) => {
      let r = v.get(t.id);
      return (r || v.set(t.id, (r = yu(e, t, n))), r);
    },
    b = (e, t, n, r, i, a) => {
      if (!e) return -1;
      for (let o of y(e))
        if (r !== 0) {
          if (n - a / 2 < o.z0 || n + a / 2 > o.z1) continue;
          let e = (t - (r > 0 ? o.x1 : o.x0)) * r;
          if (e >= -0.05 && e <= 1.8) return Math.max(0, e);
        } else {
          if (t - a / 2 < o.x0 || t + a / 2 > o.x1) continue;
          let e = (n - (i > 0 ? o.z1 : o.z0)) * i;
          if (e >= -0.05 && e <= 1.8) return Math.max(0, e);
        }
      return -1;
    },
    x = [],
    S = (e, t, n, r, i, a, l) => {
      let d = b(e, t, n, r, i, 1.5);
      if (d < 0) return !1;
      let f = g(t, n, r, i).w + d;
      if (f < 1.6) return !1;
      let p = t - r * d,
        m = n - i * d,
        h = p + r * 0.47000000000000003,
        _ = m + i * 0.47000000000000003,
        v = l % (a === `inari` ? 6 : 3);
      (s(a === `inari` ? `inari` : `jizo-${v}`, h, 0, _, r, i, 130),
        c(h, _, r, i, a === `inari` ? 0.65 : 0.58, 0.45, 1.5));
      let y = h + r * 0.9,
        S = _ + i * 0.9;
      if (a === `inari` && f >= 2.6) {
        let e = p + r * 1.55,
          t = m + i * 1.55;
        (s(`torii-${v}`, e, 0, t, r, i, 150), u(e, t, r, i, 0.85, 0.15));
        for (let n of [-1, 1]) {
          let a = e + i * 0.55 * n,
            s = t - r * 0.55 * n;
          o(a, s).boxes.push({
            x0: a - 0.07,
            z0: s - 0.07,
            x1: a + 0.07,
            z1: s + 0.07,
            y1: 1.7,
          });
        }
        ((y = e + r * 0.6), (S = t + i * 0.6));
      }
      return (x.push({ x: h, z: _, kind: a, frontX: y, frontZ: S }), !0);
    };
  for (let t of e.pois) {
    if (t.kind !== `shrine`) continue;
    let e = Math.sin(t.facing),
      n = -Math.cos(t.facing),
      r = Number(t.id.replace(/\D/g, ``)) || 0;
    S(
      _.get(t.blockId),
      t.x,
      t.z,
      e,
      n,
      /地蔵/.test(t.brand) ? `jizo` : `inari`,
      r,
    );
  }
  {
    let t = new le(de(`tokyo-culture-corner-shrines`)),
      n = 0;
    for (let r of e.blocks) {
      if (n >= 14) break;
      let i = r.district.style;
      if (
        i.old < 0.4 ||
        r.district.id === `marunouchi` ||
        t.next() > 0.06 + 0.1 * i.old
      )
        continue;
      let [a, o, s, c, l, u] = [
        [r.north, 0, -1, r.minX, r.minZ, !0],
        [r.south, 0, 1, r.minX, r.maxZ, !0],
        [r.west, -1, 0, r.minX, r.minZ, !1],
        [r.east, 1, 0, r.maxX, r.minZ, !1],
      ][Math.floor(t.next() * 4)];
      if (!a || (a.kind !== `street` && a.kind !== `lane`)) continue;
      let d = 2.6 + t.next() * 1.5,
        f = u ? c + d : c,
        p = u ? l : l + d;
      e.pois.some((e) => (e.x - f) ** 2 + (e.z - p) ** 2 < 36) ||
        (S(
          r,
          f,
          p,
          o,
          s,
          t.next() < 0.5 ? `jizo` : `inari`,
          Math.floor(t.next() * 6),
        ) &&
          n++);
    }
  }
  let C = [];
  for (let t of e.blocks) {
    let n = t.district;
    if (
      n.id === `marunouchi` ||
      t.reserved.some(
        (e) =>
          e.x - e.w / 2 <= t.minX &&
          e.x + e.w / 2 >= t.maxX &&
          e.z - e.d / 2 <= t.minZ &&
          e.z + e.d / 2 >= t.maxZ,
      )
    )
      continue;
    let r = new le(de(`tokyo-culture-gomi`, t.id)),
      i =
        n.id === `ginza`
          ? 0.25
          : 0.25 + 0.75 * Math.min(1, n.style.old + (n.style.wooden ?? 0));
    if (r.next() > i) continue;
    let a = [
      [t.north, 0, -1, !0],
      [t.south, 0, 1, !0],
      [t.west, -1, 0, !1],
      [t.east, 1, 0, !1],
    ].filter(
      ([e]) => e && (e.kind === `street` || e.kind === `lane`) && !e.pedestrian,
    );
    if (!a.length) continue;
    let [o, l, f, p] = a[Math.floor(r.next() * a.length)];
    if (!o) continue;
    let m = p ? t.minX : t.minZ,
      h = p ? t.maxX : t.maxZ;
    if (h - m < 16) continue;
    let g = r.next() < 0.5 ? m + 6 + r.next() * 4 : h - 6 - r.next() * 4,
      _ = p ? g : l < 0 ? t.minX : t.maxX,
      v = p ? (f < 0 ? t.minZ : t.maxZ) : g,
      y = b(t, _, v, l, f, 2.2);
    if (y < 0) continue;
    let S = _ - l * y,
      w = v - f * y;
    if (
      o.halfTotal - o.halfWidth + y < 1.5 ||
      e.pois.some((e) => (e.x - S) ** 2 + (e.z - w) ** 2 < 25) ||
      x.some((e) => (e.x - S) ** 2 + (e.z - w) ** 2 < 25) ||
      d(S, w, 4)
    )
      continue;
    let T = Math.floor(r.next() * lf.length),
      E = 8.5 + r.next() * 2.5,
      D = r.next() < 0.4 ? `box` : `net`,
      O = C.length;
    (C.push({
      x: S + l * 0.6,
      z: w + f * 0.6,
      group: T,
      pickup: E,
      kind: D,
      fx: l,
      fz: f,
    }),
      s(`gomi-sign`, S + l * 0.02, 0, w + f * 0.02, l, f, 60));
    let k = S + l * 0.5,
      A = w + f * 0.5;
    if ((u(k + l * 0.7, A + f * 0.7, l, f, 1, 1.1), D === `box`))
      (s(`gomi-box`, k, 0, A, l, f, 80, CY.GOMI_IN, O),
        s(`gomi-box-full`, k, 0, A, l, f, 80, CY.GOMI_OUT, O),
        c(k, A, l, f, 0.78, 0.45, 1));
    else {
      (s(`gomi-pile`, k, 0, A, l, f, 80, CY.GOMI_OUT, O),
        u(k, A, l, f, 0.9, 0.5));
      let e = de(`tokyo-life-crow`, O);
      if (e % 3 != 0) {
        let t = -f,
          n = l;
        (s(
          `crow-${e & 1}`,
          k + t * 0.75 + l * 0.55,
          0,
          A + n * 0.75 + f * 0.55,
          -t * 0.7 + l * 0.3,
          -n * 0.7 + f * 0.3,
          45,
          CY.GOMI_OUT,
          O,
        ),
          e % 5 == 1 &&
            s(
              `crow-0`,
              k - t * 1.05 + l * 0.35,
              0,
              A - n * 1.05 + f * 0.35,
              t * 0.6 + l * 0.6,
              n * 0.6 + f * 0.6,
              45,
              CY.GOMI_OUT,
              O,
            ));
      }
      s(
        `gomi-net`,
        S + l * 0.02 + f * 0.9,
        0,
        w + f * 0.02 - l * 0.9,
        l,
        f,
        50,
        CY.GOMI_IN,
        O,
      );
    }
  }
  let w = ac(e),
    T = (e.dataset.namedPlaces ?? []).filter((e) => /-gado$/.test(e.id)),
    E = [],
    D = w?.byId.get(`jr-main`) ?? w?.corridors[0] ?? null,
    O = { x: 0, z: 0, tx: 0, tz: 1 };
  if (D && T.length) {
    let t = D.id === np.corridor ? rp(D.path) : NaN;
    for (let [r, a] of D.brick)
      for (let o = Math.floor(r / 8) * 8; o < a; o += 8)
        if (!(o < r || o + 8 > a))
          for (let r of [-1, 1]) {
            if (!gAe(D, o, r)) continue;
            let a = o + 4.8;
            D.path.at(a, O);
            let l = r < 0 ? D.edge0.at(a) : D.edge1.at(a),
              d = r * -O.tz,
              f = r * O.tx,
              p = O.x - O.tz * l,
              m = O.z + O.tx * l;
            if (
              !T.some(
                (e) =>
                  p >= e.minX - 12 &&
                  p <= e.maxX + 12 &&
                  m >= e.minZ &&
                  m <= e.maxZ,
              ) ||
              n?.claimed(
                Math.min(p, p + d * 1.2),
                Math.min(m, m + f * 1.2),
                Math.max(p, p + d * 1.2),
                Math.max(m, m + f * 1.2),
                `buildings`,
              )
            )
              continue;
            let h = o === t && r === np.side ? -2.6 : 0,
              g = p + d * 1.1 + O.tx * h,
              _ = m + f * 1.1 + O.tz * h,
              v = e.surfaceAt(g, _);
            if (v === `road` || v === `water` || v === `crosswalk`) continue;
            let y = new le(de(`tokyo-culture-gado`, D.id, o, r));
            (s(`crate-table`, g, 0, _, d, f, 80),
              E.push({ x: g, z: _, fx: d, fz: f }),
              c(g, _, d, f, 0.5, 0.26, 0.75));
            for (let e of [-1, 1]) {
              if (y.next() < 0.25) continue;
              let t = g + O.tx * e * 0.85,
                n = _ + O.tz * e * 0.85;
              s(
                y.next() < 0.5 ? `crate-stool-1` : `crate-stool-2`,
                t,
                0,
                n,
                d,
                f,
                60,
              );
            }
            if ((u(g, _, d, f, 1.3, 0.55), y.next() < 0.7)) {
              let e = p + d * 0.45 + O.tx * -3.6,
                t = m + f * 0.45 + O.tz * -3.6;
              (s(`menu-board`, e, 0, t, d, f, 60), u(e, t, d, f, 0.3, 0.2));
            }
            let b = p + d * 0.35,
              x = m + f * 0.35;
            (s(
              `festoon-red-${de(`tokyo-culture-festoon`, D.id, o, r) % 3}`,
              b,
              3.15,
              x,
              d,
              f,
              150,
              CY.ALWAYS,
              0,
              8 / 7.5,
              1,
              1,
            ),
              (i.gadoBays = (i.gadoBays ?? 0) + 1));
          }
  }
  for (let t of T)
    for (let n of e.roads) {
      if (n.kind !== `lane` && n.kind !== `street`) continue;
      let r = n.halfTotal * 2;
      for (
        let i = Math.max(n.from, n.axis === `x` ? t.minX : t.minZ) + 4;
        i <= Math.min(n.to, n.axis === `x` ? t.maxX : t.maxZ) - 4;
        i += 9
      ) {
        let a = n.axis === `x` ? i : n.at,
          o = n.axis === `x` ? n.at : i;
        if (
          a < t.minX - 8 ||
          a > t.maxX + 30 ||
          o < t.minZ ||
          o > t.maxZ ||
          e.nodeAt(a, o)
        )
          continue;
        let c = +(n.axis === `x`),
          l = n.axis === `x` ? 0 : 1,
          u = r / 12;
        for (let e of [-1, 1]) {
          let t = a + (n.axis === `z` ? (e * r) / 4 : 0),
            i = o + (n.axis === `x` ? (e * r) / 4 : 0);
          s(
            `festoon-red-${de(`tokyo-culture-festoon`, Math.round(t), Math.round(i)) % 3}`,
            t,
            4.6,
            i,
            c,
            l,
            170,
            CY.ALWAYS,
            0,
            u,
            1,
            1,
          );
        }
      }
    }
  let k = [];
  {
    let t = e.landmark(`shimbashi-sl`);
    if (t) {
      let e = t.x + t.w / 2 - 1.6,
        n = t.z + t.d * 0.15;
      (s(`yatai-oden`, e, 0, n, 1, 0, 160, CY.NIGHT_YATAI),
        k.push({
          kind: `oden`,
          ax: e + 1.35,
          az: n - 0.8,
          bx: e + 1.35,
          bz: n + 0.8,
          hw: 0.15,
          y: a(e, n),
        }),
        u(e, n, 1, 0, 1.1, 1.3));
    }
    let n = e.landmark(`kanda-myojin`),
      r = e.roads.find((e) => e.id === `kanda-myojin`);
    if (n && r && r.axis === `x`) {
      let t = r.at - r.halfTotal + 0.95;
      k.push({
        kind: `shrine`,
        ax: n.x - n.w / 2 - 14,
        az: r.at - r.halfWidth * 0.5,
        bx: n.x + n.w / 2 + 16,
        bz: r.at - r.halfWidth * 0.5,
        hw: r.halfWidth * 0.45,
        y: 0,
      });
      let i = 0;
      for (let r = n.x - n.w / 2 - 14; r < n.x + n.w / 2 + 16; r += 3)
        e.nodeAt(r, t) ||
          e.surfaceAt(r, t) !== `sidewalk` ||
          Math.abs(r - n.x) < 5 ||
          (s(`yatai-${i % xJ.length}`, r, 0, t, 0, 1, 200, CY.FESTIVAL_STALLS),
          u(r, t, 0, 1, 1.3, 0.95),
          i++);
    }
    let i = e.landmark(`saigo`);
    if (i) {
      let t = 0;
      k.push({
        kind: `sakura`,
        ax: i.x - 16,
        az: i.z - 16,
        bx: i.x - 16,
        bz: i.z - 112,
        hw: 3.6,
        y: a(i.x - 16, i.z - 60),
      });
      for (let n = i.z - 18; n > i.z - 110; n -= 4.2)
        for (let r of [-1, 1]) {
          let a = i.x - 16 + r * 6.5;
          e.surfaceAt(a, n) !== `water` &&
            (s(
              `yatai-${(t++ * 7) % xJ.length}`,
              a,
              0,
              n,
              -r,
              0,
              200,
              CY.SAKURA,
            ),
            u(a, n, -r, 0, 1.3, 0.95));
        }
    }
  }
  for (let [t, n] of (e.dataset.closures ?? []).entries()) {
    let r = e.roads.find((e) => e.id === n.road),
      i = r ? nf(e, n) : null;
    if (r && i)
      for (let [e, n] of [
        [i[0] - SY, 1],
        [i[1] + SY, -1],
      ]) {
        let i = Math.max(2, Math.round((r.halfWidth * 2) / 2.6));
        for (let a = 0; a < i; a++) {
          let o = -r.halfWidth + ((a + 0.5) * r.halfWidth * 2) / i;
          s(
            `hokoten-barrier`,
            r.axis === `z` ? r.at + o : e + n * 4.5,
            0,
            r.axis === `z` ? e + n * 4.5 : r.at + o,
            r.axis === `x` ? -n : 0,
            r.axis === `z` ? -n : 0,
            300,
            CY.HOKOTEN,
            t,
          );
        }
      }
  }
  let A = [];
  {
    let t = e.landmark(`kanda-myojin`),
      n = e.roads.find((e) => e.id === `kanda-myojin`),
      r = e.roads.find((e) => e.id === `chuo-akihabara`),
      i = e.roads.find((e) => e.id === `sotobori-ochanomizu`),
      a = e.roads.find((e) => e.id === `yushima`);
    if (t && n && r && i && a) {
      A.push(
        { x: t.x, z: n.at },
        { x: r.at, z: n.at },
        { x: r.at, z: i.at },
        { x: a.at, z: i.at },
        { x: a.at, z: n.at },
      );
      for (let t = 0; t < A.length; t++) {
        let n = A[t],
          r = A[(t + 1) % A.length],
          i = Math.hypot(r.x - n.x, r.z - n.z),
          a = (r.x - n.x) / i,
          o = (r.z - n.z) / i,
          c = e.roadAt((n.x + r.x) / 2, (n.z + r.z) / 2),
          l = c ? c.halfTotal : 8;
        for (let t = 10; t < i - 6; t += 18) {
          let r = n.x + a * t,
            i = n.z + o * t;
          if (e.nodeAt(r, i)) continue;
          let c = Math.max(2, Math.round((l * 2) / 6));
          for (let e = 0; e < c; e++) {
            let t = -l + ((e + 0.5) * l * 2) / c;
            s(
              `festoon-matsuri`,
              r - o * t,
              5.2,
              i + a * t,
              a,
              o,
              180,
              CY.MATSURI,
              0,
              (l * 2) / c / 6,
              1,
              1,
            );
          }
        }
        let d = n.x + a * 6 + -o * (l - 1.2),
          f = n.z + o * 6 + a * (l - 1.2);
        e.surfaceAt(d, f) === `sidewalk` &&
          (s(`matsuri-banner`, d, 0, f, o, -a, 260, CY.MATSURI),
          u(d, f, o, -a, 1.4, 0.2));
      }
    }
  }
  {
    let t = {
      bench: [`park-bench`, 120],
      lamp: [`park-lamp`, 220],
      bins: [`park-bins`, 90],
      drink: [`park-drink`, 80],
      map: [`park-map`, 130],
      fence: [`park-fence`, 70],
      shrub: [`park-shrub`, 90],
      "bed-sign": [`park-bed-sign`, 45],
      fountain: [`park-fountain`, 320],
    };
    for (let r of jx(e).items) {
      let e = t[r.kind];
      if (!e) continue;
      let { x: i, z: a, fx: c, fz: l } = r;
      if (
        r.kind !== `fountain` &&
        n?.packs.some((e) =>
          e.claims?.some(
            (e) =>
              e.scope !== `buildings` &&
              e.minX < i + 0.5 &&
              e.maxX > i - 0.5 &&
              e.minZ < a + 0.5 &&
              e.maxZ > a - 0.5,
          ),
        )
      )
        continue;
      r.kind === `fence`
        ? s(e[0], i, 0, a, c, l, e[1], CY.ALWAYS, 0, r.k / 200, 1, 1)
        : r.kind === `shrub`
          ? s(
              e[0],
              i,
              0,
              a,
              c,
              l,
              e[1],
              CY.ALWAYS,
              0,
              0.8 + r.k * 0.15,
              0.8 + r.k * 0.12,
              0.8 + r.k * 0.15,
            )
          : s(e[0], i, 0, a, c, l, e[1]);
      let u = (e, t, n) => {
        let r = Math.abs(l) * e + Math.abs(c) * t,
          s = Math.abs(c) * e + Math.abs(l) * t;
        o(i, a).boxes.push({
          x0: i - r,
          z0: a - s,
          x1: i + r,
          z1: a + s,
          y1: n,
        });
      };
      if (r.kind === `bench`) u(0.9, 0.3, 0.5);
      else if (r.kind === `lamp`) u(0.09, 0.09, 3.6);
      else if (r.kind === `bins`) u(0.68, 0.22, 0.9);
      else if (r.kind === `drink`) u(0.2, 0.2, 0.9);
      else if (r.kind === `map`) u(0.78, 0.06, 2);
      else if (r.kind === `fence`) u(r.k / 200, 0.03, 0.4);
      else if (r.kind === `fountain`) {
        for (let e = 0; e < 8; e++) {
          let t = (e / 8) * Math.PI * 2,
            n = i + Math.cos(t) * 6,
            r = a + Math.sin(t) * 6;
          o(i, a).boxes.push({
            x0: n - 1.6,
            z0: r - 1.6,
            x1: n + 1.6,
            z1: r + 1.6,
            y1: 0.45,
          });
        }
        o(i, a).boxes.push({
          x0: i - 0.6,
          z0: a - 0.6,
          x1: i + 0.6,
          z1: a + 0.6,
          y1: 1.2,
        });
      }
    }
  }
  let j = [];
  {
    let e = { x: 0, z: 0 };
    for (let t of w?.corridors ?? [])
      for (let n of t.platforms)
        for (let r of [0, 1]) {
          let i = n.tracks[r];
          if (!i) continue;
          let a = r === 0 ? n.o0 + 1.45 : n.o1 - 1.45,
            o = r === 0 ? 1 : -1,
            s = i.dir > 0 ? n.s1 - 2 : n.s0 + 2;
          for (let r = 0; r < 6; r++) {
            let c = s - i.dir * (10 + 20 * r),
              l = c - 9.6,
              u = c + 9.6;
            if (l < n.s0 + 0.5 || u > n.s1 - 0.5) continue;
            t.path.pos(l, a, e);
            let d = e.x,
              f = e.z;
            t.path.pos(u, a, e);
            let p = e.x,
              m = e.z;
            t.path.pos(c, a + o, e);
            let h = (d + p) / 2,
              g = (f + m) / 2,
              _ = e.x - h,
              v = e.z - g,
              y = Math.hypot(p - d, m - f) || 1,
              b = (p - d) / y,
              x = -((m - f) / y) * _ + b * v > 0 ? 1 : -1,
              S = [],
              C = n.line === `JY`;
            for (let e of [-7.2, -2.4, 2.4, 7.2])
              for (let t of C ? [-0.5, 0.5] : [0])
                S.push(((c + e + t - l) / (u - l)) * y);
            j.push({
              pf: n.id,
              ax: d,
              az: f,
              bx: p,
              bz: m,
              at: S,
              side: x,
              face: Math.atan2(-_, v),
              y: n.y,
              depth: C ? 2 : 1,
            });
          }
        }
  }
  let M = [];
  {
    let n = (t, n) => {
      let r = e.surfaceAt(t, n);
      return r === `lot` || r === `plaza` || r === `sidewalk` || r === `park`;
    };
    for (let e of t) {
      if (e.kind !== `elevated`) continue;
      let t = -Math.sin(e.heading),
        r = Math.cos(e.heading),
        i = 1.2;
      for (
        ;
        i < 24 &&
        n(e.x + t * (i + 1), e.z + r * (i + 1)) &&
        Math.abs(a(e.x + t * (i + 1), e.z + r * (i + 1)) - a(e.x, e.z)) < 0.5;
      )
        i += 1;
      let o =
          i >= 6
            ? {
                ax: e.x + t * 1.2,
                az: e.z + r * 1.2,
                bx: e.x + t * i,
                bz: e.z + r * i,
                hw: 2.2,
              }
            : null,
        s = e.x + t * Math.min(3.5, i * 0.5),
        c = e.z + r * Math.min(3.5, i * 0.5),
        l = 0,
        u = 0;
      for (; l < 7 && n(s - r * (l + 1), c + t * (l + 1));) l += 1;
      for (; u < 7 && n(s + r * (u + 1), c - t * (u + 1));) u += 1;
      let d =
        l + u >= 4
          ? {
              ax: s - r * l,
              az: c + t * l,
              bx: s + r * u,
              bz: c - t * u,
              hw: Math.min(1.2, i * 0.25),
            }
          : null;
      (o || d) &&
        M.push({
          id: `${e.stationId}-${e.exit}`,
          wait: d,
          walk: o,
          y: a(e.x, e.z),
        });
    }
    let r = e.landmark(`shimbashi-sl`);
    if (r) {
      let e = r.x - r.w / 2,
        t = r.x + r.w / 2,
        n = r.z - r.d / 2,
        i = r.z + r.d / 2;
      (M.push({
        id: `shimbashi-sl`,
        wait: { ax: r.x - 9, az: r.z, bx: r.x + 0.5, bz: r.z, hw: 4 },
        walk: { ax: e + 2, az: n + 4, bx: t - 5, bz: i - 3, hw: 3 },
        y: a(r.x, r.z),
      }),
        M.push({
          id: `shimbashi-sl-2`,
          wait: null,
          walk: { ax: e + 3, az: i - 3, bx: t - 16, bz: n + 3, hw: 3 },
          y: a(r.x, r.z),
        }));
    }
    let i = (e.dataset.namedPlaces ?? []).find(
      (e) => e.id === `marunouchi-plaza`,
    );
    if (i) {
      let e = i.maxX - 4;
      M.push({
        id: `marunouchi-plaza`,
        wait: { ax: e, az: -7, bx: e, bz: 7, hw: 1.5 },
        walk: { ax: i.minX + 2, az: 0, bx: e - 2, bz: 0, hw: 6 },
        y: a(e, 0),
      });
    }
  }
  let ee = Fx({ plan: e, entrances: t, tables: E }),
    te = l.length;
  for (let e of ee.props)
    if (e.model === `smoking-area`) {
      s(`smoking-area`, e.x, 0, e.z, e.fx, e.fz, 120);
      let t = e.fz,
        n = -e.fx;
      (c(e.x - e.fx * 1.55, e.z - e.fz * 1.55, e.fx, e.fz, 1.6, 0.05, 1.8),
        c(e.x + t * 1.55, e.z + n * 1.55, t, n, 1.55, 0.05, 1.8),
        c(e.x - t * 1.55, e.z - n * 1.55, t, n, 1.55, 0.05, 1.8),
        u(e.x, e.z, e.fx, e.fz, 1.9, 1.9));
    } else
      e.model === `hanami-tarp`
        ? s(`hanami-tarp`, e.x, 0, e.z, e.fx, e.fz, 140, CY.HANAMI)
        : (s(`kyakuhiki-sign`, e.x, 0, e.z, e.fx, e.fz, 70),
          u(e.x, e.z, e.fx, e.fz, 0.3, 0.2));
  i.lifeClaims = l.length - te;
  for (let t of e.pois) {
    if (t.kind !== `convenience` && t.kind !== `pharmacy`) continue;
    let n = Math.sin(t.facing),
      r = -Math.cos(t.facing),
      i = de(`tokyo-life-kasa`, t.id) & 1 ? 1 : -1,
      a = t.x + n * 0.45 + r * i * (t.width / 2 - 0.4),
      o = t.z + r * 0.45 - n * i * (t.width / 2 - 0.4);
    e.surfaceAt(a, o) === `sidewalk` &&
      s(`kasa-stand`, a, 0, o, n, r, 45, CY.RAIN);
  }
  for (let t of e.roads) {
    if (!(
      t.id.startsWith(`showa`) ||
      t.id === `hibiya` ||
      t.id === `gyoko` ||
      t.id === `yasukuni` ||
      t.id === `eitai`
    ))
      continue;
    let n = t.halfTotal - t.halfWidth;
    if (n < 2) continue;
    let r = 0;
    for (let i = t.from + 5; i < t.to - 5; i += 7.5, r++)
      for (let a of [-1, 1]) {
        let o = a * (t.halfWidth + Math.min(1.4, n * 0.35)),
          c = t.axis === `x` ? i : t.at + o,
          l = t.axis === `x` ? t.at + o : i;
        if (e.surfaceAt(c, l) !== `sidewalk` || e.nodeAt(c, l)) continue;
        let u = de(`tokyo-life-leaves`, t.id, r, a),
          d = (u % 628) / 100;
        s(
          `leaf-litter`,
          c,
          0,
          l,
          Math.sin(d),
          Math.cos(d),
          70,
          CY.LEAVES,
          0,
          0.9 + (u % 5) * 0.1,
          1,
          0.8 + ((u >> 3) % 5) * 0.1,
        );
      }
  }
  for (let t of e.roads) {
    if (t.kind !== `street` && t.kind !== `lane`) continue;
    let n = (t.from + t.to) / 2,
      r = t.axis === `x` ? n : t.at,
      i = t.axis === `x` ? t.at : n,
      a = e.districtAt(r, i);
    if (
      (a.id !== `ueno` &&
        a.id !== `ameyoko` &&
        a.id !== `kanda` &&
        a.id !== `tokyo-east-generic`) ||
      (a.style.old ?? 0) < 0.4 ||
      de(`tokyo-life-natsu`, t.id) % 4 != 0
    )
      continue;
    let o = t.halfTotal;
    for (
      let n = t.from + 9;
      n < Math.min(t.to - 6, t.from + 9 + 108);
      n += 18
    ) {
      let r = t.axis === `x` ? n : t.at,
        i = t.axis === `x` ? t.at : n;
      if (e.nodeAt(r, i)) continue;
      let a = +(t.axis === `x`),
        c = t.axis === `x` ? 0 : 1,
        l = Math.max(2, Math.round((o * 2) / 6));
      for (let e = 0; e < l; e++) {
        let t = -o + ((e + 0.5) * o * 2) / l;
        s(
          `festoon-matsuri`,
          r - c * t,
          5,
          i + a * t,
          a,
          c,
          170,
          CY.SUMMER,
          0,
          (o * 2) / l / 6,
          1,
          1,
        );
      }
    }
  }
  return {
    tiles: r,
    shrines: x,
    gomi: C,
    stallRuns: f,
    market: p,
    route: A,
    claims: l,
    fairs: k,
    counts: i,
    platformLines: j,
    stationFronts: M,
    life: ee,
  };
}
