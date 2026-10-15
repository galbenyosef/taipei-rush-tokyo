// tokyo/assets/world-CAmHK742 37 — math
// Lines 11425-12209 of readable/tokyo/assets/world-CAmHK742.pretty.js (statement-aligned).
var jl = class {
  plan;
  keepOpen;
  lots = [];
  nextId = 0;
  poisByBlock = new Map();
  constructor(e, t = []) {
    ((this.plan = e), (this.keepOpen = t));
    for (let t of e.pois) {
      let e = this.poisByBlock.get(t.blockId);
      (e || this.poisByBlock.set(t.blockId, (e = [])), e.push(t));
    }
    for (let t of e.blocks) this.layoutBlock(t);
  }
  reservedRects(e) {
    return e.reserved.map((e) => {
      let t =
        Math.round(
          (((e.facing % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)) /
            (Math.PI / 2),
        ) % 4;
      return {
        x0: e.x - e.w / 2 - 2,
        z0: e.z - e.d / 2 - 2,
        x1: e.x + e.w / 2 + 2,
        z1: e.z + e.d / 2 + 2,
        front: t,
        open: e.kind === `temple` ? [t, (t + 2) % 4] : [t],
      };
    });
  }
  overlapsReserved(e, t) {
    return t.some(
      (t) => e.x1 > t.x0 && e.x0 < t.x1 && e.z1 > t.z0 && e.z0 < t.z1,
    );
  }
  makeLot(e, t, n, r, i, a, o = !1) {
    let s = 0.05,
      c = [
        Math.abs(t.z0 - e.minZ) < s,
        Math.abs(t.x1 - e.maxX) < s,
        Math.abs(t.z1 - e.maxZ) < s,
        Math.abs(t.x0 - e.minX) < s,
      ],
      l = [
        c[0] ? e.north : null,
        c[1] ? e.east : null,
        c[2] ? e.south : null,
        c[3] ? e.west : null,
      ],
      u = {
        ...t,
        id: this.nextId++,
        block: e,
        type: n,
        front: r,
        street: c,
        road: l,
        arcade: [0, 0, 0, 0],
        floors: i,
        district: e.district,
        seed: a.int(0, 255),
        pois: [],
        interior: o,
        alley: [!1, !1, !1, !1],
      };
    if (n === `apt` || n === `mid`) {
      let r = e.district.style,
        a = (je(`pocket`, e.id) % 1e3) / 1e3,
        o =
          (je(`floors`, e.id, Math.round(t.x0 * 10), Math.round(t.z0 * 10)) %
            1e3) /
          1e3;
      r.floors[1] <= 16 && a < 0.07 + 0.12 * r.old
        ? ((u.type = `apt`), (u.floors = o < 0.3 ? 2 : o < 0.85 ? 3 : 4))
        : n === `apt`
          ? o < 0.12
            ? (u.floors = Math.max(3, i - 1))
            : o > 0.88 && (u.floors = i + (r.floors[1] >= 8 ? 2 : 1))
          : o < 0.14
            ? (u.floors = Math.max(6, Math.round(i * 0.72)))
            : o > 0.84 &&
              r.towers >= 0.2 &&
              (u.floors = Math.min(26, Math.round(i * 1.4)));
      let s = Sl((t.x0 + t.x1) / 2, (t.z0 + t.z1) / 2);
      s && (u.floors = Math.min(u.floors, s.maxFloors));
    }
    return (this.lots.push(u), u);
  }
  limitSites(e) {
    let t = e
        .filter((e) => El.has(e.kind))
        .map((e) => ({
          x0: e.x - e.w / 2,
          x1: e.x + e.w / 2,
          z0: e.z - e.d / 2,
          z1: e.z + e.d / 2,
        })),
      n = this.lots
        .filter((e) => e.type === `site`)
        .sort((e, t) => je(`site`, e.id) - je(`site`, t.id)),
      r = [];
    for (let e of n) {
      if (
        r.length < Cl &&
        t.every((t) => Dl(e, t) >= wl) &&
        r.every((t) => Dl(e, t) >= Tl)
      ) {
        r.push(e);
        continue;
      }
      let n = new Oe(je(Pe, `site-conv`, e.id)),
        i = Math.min(e.x1 - e.x0, e.z1 - e.z0),
        a = e.block.district.style;
      ((e.type =
        a.floors[1] >= 7 && i >= 11 && n.chance(0.2 + 1.2 * a.towers)
          ? `mid`
          : `apt`),
        (e.floors = this.floorsFor(e.type, e.block, n)));
      let o = Sl((e.x0 + e.x1) / 2, (e.z0 + e.z1) / 2);
      o && (e.floors = Math.min(e.floors, o.maxFloors));
    }
    return r.length;
  }
  pickType(e, t) {
    let n = e.district.style,
      r = [];
    return (
      n.old >= 0.9
        ? r.push([`shophouse`, 0.55])
        : n.old >= 0.55 && r.push([`shophouse`, 0.08]),
      r.push([`apt`, 0.3 + 0.9 * n.old]),
      n.floors[1] >= 7 &&
        r.push([`mid`, 0.2 + 1.2 * n.towers + (n.floors[0] >= 5 ? 0.25 : 0)]),
      t.weighted(r)
    );
  }
  floorsFor(e, t, n) {
    let [r, i] = t.district.style.floors;
    switch (e) {
      case `shophouse`:
        return n.weighted([
          [2, 3],
          [3, 4],
          [4, 1],
        ]);
      case `apt`:
        return Math.max(
          3,
          Math.min(
            n.weighted([
              [4, 4],
              [5, 5],
              [3, 1],
              [6, 1],
            ]),
            Math.max(4, i),
          ),
        );
      case `mid`:
        return n.int(Math.max(7, r), Math.max(8, Math.min(16, i)));
      case `low`:
        return n.int(1, 2);
      case `setback`:
        return n.int(1, 2);
      default:
        return n.int(Math.max(18, r), Math.max(22, i + 5));
    }
  }
  widthFor(e, t) {
    switch (e) {
      case `shophouse`:
        return t.range(4.4, 6.6);
      case `apt`:
        return t.range(6.5, 12.5);
      case `mid`:
        return t.range(14, 26);
      default:
        return t.range(8, 12);
    }
  }
  layoutBlock(e) {
    let t = e.district.style;
    if (t.floors[1] <= 0) return;
    let n = new Oe(je(Pe, `bld`, e.id)),
      r = this.reservedRects(e),
      i = e.maxX - e.minX,
      a = e.maxZ - e.minZ,
      o = this.poisByBlock.get(e.id) ?? [],
      s = t.towers >= 0.6 ? t.towers * 0.8 : t.towers * 0.22;
    (!r.length &&
      i >= 38 &&
      a >= 38 &&
      !e.zones.length &&
      n.chance(s) &&
      !Sl((e.minX + e.maxX) / 2, (e.minZ + e.maxZ) / 2) &&
      this.layoutTowerBlock(e, n, o)) ||
      this.layoutPerimeter(e, n, r, o, i, a);
  }
  layoutTowerBlock(e, t, n) {
    let r = [!1, !1, !1, !1];
    for (let e of n) yl.has(e.kind) && (r[Ol(e)] = !0);
    let i = (e, n) =>
        Math.max(
          r[n] ? 8.5 : 0,
          e ? (e.major ? t.range(6, 10) : t.range(3, 5.5)) : 3,
        ),
      a = {
        x0: e.minX + i(e.west, 3),
        x1: e.maxX - i(e.east, 1),
        z0: e.minZ + i(e.north, 0),
        z1: e.maxZ - i(e.south, 2),
      },
      o = a.x1 - a.x0,
      s = a.z1 - a.z0;
    if (o < 22 || s < 22) return !1;
    let c = [];
    if (o >= 92) {
      let e = (a.x0 + a.x1) / 2 + t.range(-8, 8);
      c.push({ ...a, x1: e - 7 }, { ...a, x0: e + 7 });
    } else if (s >= 92) {
      let e = (a.z0 + a.z1) / 2 + t.range(-8, 8);
      c.push({ ...a, z1: e - 7 }, { ...a, z0: e + 7 });
    } else c.push(a);
    let l = [
        [e.north, 0],
        [e.east, 1],
        [e.south, 2],
        [e.west, 3],
      ],
      u = (e) =>
        e ? (e.kind === `boulevard` ? 3 : e.kind === `arterial` ? 2 : 1) : 0,
      d = 0;
    for (let [e, t] of l) u(e) > u(l[d][0]) && (d = t);
    for (let n of c) {
      let r = n.x1 - n.x0,
        i = n.z1 - n.z0,
        a = Math.min(44, Math.max(16, r - t.range(4, 12))),
        o = Math.min(40, Math.max(16, i - t.range(4, 12))),
        s = (n.x0 + n.x1) / 2 + t.range(-1, 1) * (r - a) * 0.3,
        c = (n.z0 + n.z1) / 2 + t.range(-1, 1) * (i - o) * 0.3,
        l = this.floorsFor(`tower`, e, t),
        u = this.makeLot(e, n, `tower`, d, l, t);
      ((u.tower = {
        x0: s - a / 2,
        x1: s + a / 2,
        z0: c - o / 2,
        z1: c + o / 2,
        floors: l,
      }),
        (u.podiumFloors = t.int(2, 5)),
        (u.street = [!0, !0, !0, !0]));
    }
    for (let r of n) yl.has(r.kind) && this.kioskForPoi(e, r, t);
    return !0;
  }
  kioskForPoi(e, t, n) {
    let r = Ol(t),
      i = kl(t, r),
      a;
    a =
      r === 0
        ? {
            x0: i - t.width / 2,
            x1: i + t.width / 2,
            z0: e.minZ,
            z1: e.minZ + 6,
          }
        : r === 2
          ? {
              x0: i - t.width / 2,
              x1: i + t.width / 2,
              z0: e.maxZ - 6,
              z1: e.maxZ,
            }
          : r === 3
            ? {
                z0: i - t.width / 2,
                z1: i + t.width / 2,
                x0: e.minX,
                x1: e.minX + 6,
              }
            : {
                z0: i - t.width / 2,
                z1: i + t.width / 2,
                x0: e.maxX - 6,
                x1: e.maxX,
              };
    for (let t of this.lots)
      if (
        t.block === e &&
        a.x1 > t.x0 + 0.1 &&
        a.x0 < t.x1 - 0.1 &&
        a.z1 > t.z0 + 0.1 &&
        a.z0 < t.z1 - 0.1
      )
        return;
    let o = this.makeLot(e, a, `setback`, r, 1, n);
    ((o.type = `low`), o.pois.push(t));
  }
  layoutPerimeter(e, t, n, r, i, a) {
    let o = e.district.style,
      s = n.flatMap((t) =>
        t.open.map((n) =>
          n === 0
            ? { x0: t.x0, x1: t.x1, z0: e.minZ - 1, z1: t.z0 }
            : n === 2
              ? { x0: t.x0, x1: t.x1, z0: t.z1, z1: e.maxZ + 1 }
              : n === 3
                ? { x0: e.minX - 1, x1: t.x0, z0: t.z0, z1: t.z1 }
                : { x0: t.x1, x1: e.maxX + 1, z0: t.z0, z1: t.z1 },
        ),
      );
    for (let t of this.keepOpen)
      t.x1 > e.minX &&
        t.x0 < e.maxX &&
        t.z1 > e.minZ &&
        t.z0 < e.maxZ &&
        s.push(t);
    let c = (e) => t.range(12.5, Math.max(13, Math.min(e, 19))),
      l,
      u,
      d = a < 36;
    d
      ? ((l = a * t.range(0.44, 0.56)), (u = a - l))
      : ((l = c(a / 2 - 3)), (u = c(a / 2 - 3)));
    let f = !d && a - l - u >= 8,
      p = 0,
      m = 0,
      h = i < 36;
    f &&
      (h
        ? ((p = i * t.range(0.44, 0.56)), (m = i - p))
        : ((p = c(i / 2 - 3)), (m = c(i / 2 - 3))));
    for (let t = 0; t < 3; t++)
      for (let t of r) {
        let n = Ol(t);
        if (n !== 1 && n !== 3) continue;
        let r = t.z - t.width / 2,
          i = t.z + t.width / 2,
          o = e.minZ + l;
        r < o &&
          i > o &&
          ((l =
            i - e.minZ + 0.3 <= a - (d ? 8 : u + (f ? 8 : 0))
              ? i - e.minZ + 0.3
              : Math.max(6, r - e.minZ - 0.3)),
          d && (u = a - l));
        let s = e.maxZ - u;
        r < s &&
          i > s &&
          ((u =
            e.maxZ - r + 0.3 <= a - (d ? 8 : l + (f ? 8 : 0))
              ? e.maxZ - r + 0.3
              : Math.max(6, e.maxZ - i - 0.3)),
          d && (l = a - u));
      }
    f = !d && a - l - u >= 8;
    let g = { 0: [], 1: [], 2: [], 3: [] },
      _ = (e) =>
        r
          .filter((t) => Ol(t) === e)
          .map((t) => ({
            a: kl(t, e) - t.width / 2 - 1,
            b: kl(t, e) + t.width / 2 + 1,
          })),
      v = (e, n, r) => {
        for (let i = 0; i < 6; i++) {
          let i = t.range(3.2, 4.2),
            a = t.range(n + 16, r - 16),
            o = { a: a - i / 2, b: a + i / 2 };
          if (!e.some((e) => _(e).some((e) => o.b > e.a && o.a < e.b))) {
            for (let t of e) g[t].push(o);
            return;
          }
        }
      },
      y = e.zones.length > 0 && i < 50;
    (!y &&
      i >= 58 &&
      t.chance(0.7) &&
      (d
        ? v([0, 2], e.minX, e.maxX)
        : v([t.chance(0.5) ? 0 : 2], e.minX + p, e.maxX - m)),
      !y &&
        f &&
        a - l - u >= 40 &&
        t.chance(0.55) &&
        v(h ? [1, 3] : [t.chance(0.5) ? 1 : 3], e.minZ + l, e.maxZ - u));
    let b = [
      { side: 0, a0: e.minX, a1: e.maxX, depth: l },
      { side: 2, a0: e.minX, a1: e.maxX, depth: u },
    ];
    f &&
      b.push(
        { side: 3, a0: e.minZ + l, a1: e.maxZ - u, depth: p },
        { side: 1, a0: e.minZ + l, a1: e.maxZ - u, depth: m },
      );
    let x = (t) =>
      !!(t === 0 ? e.north : t === 1 ? e.east : t === 2 ? e.south : e.west);
    for (let i of b) {
      let a = (t, n, r) => {
          switch (i.side) {
            case 0:
              return { x0: t, x1: n, z0: e.minZ, z1: e.minZ + r };
            case 2:
              return { x0: t, x1: n, z0: e.maxZ - r, z1: e.maxZ };
            case 3:
              return { z0: t, z1: n, x0: e.minX, x1: e.minX + r };
            default:
              return { z0: t, z1: n, x0: e.maxX - r, x1: e.maxX };
          }
        },
        c = [...g[i.side]],
        l = [],
        u = [],
        p = a(i.a0, i.a1, i.depth);
      for (let t of n) {
        let n =
          i.side === 0 || i.side === 2
            ? { a: t.x0, b: t.x1 }
            : { a: t.z0, b: t.z1 };
        if (t.open.includes(i.side) && n.b > i.a0 && n.a < i.a1) {
          c.push(n);
          continue;
        }
        if (!(p.x1 > t.x0 && p.x0 < t.x1 && p.z1 > t.z0 && p.z0 < t.z1))
          continue;
        let r =
          i.side === 0
            ? t.z0 - e.minZ
            : i.side === 2
              ? e.maxZ - t.z1
              : i.side === 3
                ? t.x0 - e.minX
                : e.maxX - t.x1;
        r >= 7
          ? l.push({ ...n, d: r - 0.3 })
          : (c.push(n), u.push({ ...n, d: r - 0.3 }));
      }
      let m = (e, t) => {
          let n = 1 / 0;
          for (let r of l) t > r.a && e < r.b && (n = Math.min(n, r.d));
          return n;
        },
        _ = r.filter((e) => Ol(e) === i.side),
        v = [];
      for (let n of _) {
        if (!bl.has(n.kind)) continue;
        let r = kl(n, i.side);
        if (r < i.a0 || r > i.a1) continue;
        let o = {
          a: Math.max(i.a0, r - n.width / 2 - 0.7),
          b: Math.min(i.a1, r + n.width / 2 + 0.7),
        };
        if (
          (o.a - i.a0 < 1.6 && (o.a = i.a0),
          i.a1 - o.b < 1.6 && (o.b = i.a1),
          c.some((e) => o.b > e.a && o.a < e.b))
        )
          continue;
        (v.push(o), c.push(o));
        let s = a(o.a, o.b, i.depth);
        if (i.depth > 9) {
          let n = { ...s };
          (i.side === 0
            ? (n.z0 += 4.5)
            : i.side === 2
              ? (n.z1 -= 4.5)
              : i.side === 3
                ? (n.x0 += 4.5)
                : (n.x1 -= 4.5),
            this.makeLot(
              e,
              n,
              `setback`,
              i.side,
              this.floorsFor(`setback`, e, t),
              t,
            ));
        }
      }
      let y = _.filter((e) => yl.has(e.kind)).map((e) => ({
          a: kl(e, i.side) - e.width / 2,
          b: kl(e, i.side) + e.width / 2,
        })),
        b = Al({ a: i.a0, b: i.a1 }, c),
        S = i.side === 0 || i.side === 2;
      for (let r of b) {
        let c = r.a,
          l = null;
        for (; c < r.b - 0.01;) {
          let u = l && t.chance(0.6) ? l : this.pickType(e, t);
          l = u;
          let p = this.widthFor(u, t);
          S && Math.abs(c - e.minX) < 0.01 && x(3) && (p = Math.max(p, 8));
          let v = c + p,
            b = u === `shophouse` ? 4 : 5.5;
          r.b - v < b && (v = r.b);
          for (let e of y)
            v > e.a + 0.01 &&
              v < e.b - 0.01 &&
              (v = e.b - c >= b || e.a - c < b ? e.b : e.a);
          if ((r.b - v < b && (v = r.b), v - c < 3.2)) {
            c = v;
            continue;
          }
          (u === `mid` && v - c < 11 && (u = `apt`),
            !y.some((e) => e.b > c && e.a < v) &&
              v - c >= 11 &&
              o.floors[1] >= 6 &&
              !e.zones.length &&
              t.chance(0.022) &&
              (u = `site`),
            u === `shophouse` && v - c > 9 && (u = `apt`));
          let C =
              S &&
              ((Math.abs(c - e.minX) < 0.01 && f) ||
                (Math.abs(v - e.maxX) < 0.01 && f)),
            w = i.depth;
          (!C && !(S && d) && u !== `mid` && (w *= t.range(0.8, 1)),
            !S && h && (w = i.depth),
            (w = Math.min(w, m(c, v))));
          let T = a(c, v, w);
          if (!this.overlapsReserved(T, n) && !this.overlapsReserved(T, s)) {
            let n = this.makeLot(e, T, u, i.side, this.floorsFor(u, e, t), t);
            for (let e of g[i.side])
              (Math.abs(v - e.a) < 0.05 && (n.alley[S ? 1 : 2] = !0),
                Math.abs(c - e.b) < 0.05 && (n.alley[S ? 3 : 0] = !0));
            for (let e of _) {
              if (!yl.has(e.kind)) continue;
              let t = kl(e, i.side);
              t >= c - 0.01 && t <= v + 0.01 && n.pois.push(e);
            }
          }
          c = v;
        }
      }
      for (let n of _) {
        if (!yl.has(n.kind)) continue;
        let r = kl(n, i.side),
          o = u.find((e) => r > e.a && r < e.b);
        if (!o || o.d < 2.5) continue;
        let c = r - n.width / 2,
          l = r + n.width / 2;
        if (g[i.side].some((e) => l > e.a && c < e.b)) continue;
        let d = a(c, l, Math.min(i.depth, o.d));
        this.overlapsReserved(d, s) ||
          this.makeLot(e, d, `low`, i.side, 1, t).pois.push(n);
      }
    }
    for (let t of r) {
      if (!yl.has(t.kind) || this.lots.some((e) => e.pois.includes(t)))
        continue;
      let n = Ol(t);
      for (let r = this.lots.length - 1; r >= 0; r--) {
        let i = this.lots[r];
        if (i.block !== e || !i.street[n]) continue;
        let a = kl(t, n),
          [o, s] = n === 0 || n === 2 ? [i.x0, i.x1] : [i.z0, i.z1];
        if (a >= o - 0.01 && a <= s + 0.01) {
          i.pois.push(t);
          break;
        }
      }
    }
    for (let i of r) {
      if (!yl.has(i.kind) || this.lots.some((e) => e.pois.includes(i)))
        continue;
      let r = Ol(i),
        a = kl(i, r),
        o = 6,
        c = (t) =>
          r === 0
            ? {
                x0: a - i.width / 2,
                x1: a + i.width / 2,
                z0: e.minZ,
                z1: e.minZ + t,
              }
            : r === 2
              ? {
                  x0: a - i.width / 2,
                  x1: a + i.width / 2,
                  z0: e.maxZ - t,
                  z1: e.maxZ,
                }
              : r === 3
                ? {
                    z0: a - i.width / 2,
                    z1: a + i.width / 2,
                    x0: e.minX,
                    x1: e.minX + t,
                  }
                : {
                    z0: a - i.width / 2,
                    z1: a + i.width / 2,
                    x0: e.maxX - t,
                    x1: e.maxX,
                  },
        l = n.map((e) => ({
          x0: e.x0 + 1.5,
          x1: e.x1 - 1.5,
          z0: e.z0 + 1.5,
          z1: e.z1 - 1.5,
        }));
      for (
        ;
        o > 2.2 &&
        (this.overlapsReserved(c(o), l) ||
          this.lots.some(
            (t) =>
              t.block === e &&
              this.overlapsReserved(c(o), [
                {
                  x0: t.x0 + 0.1,
                  x1: t.x1 - 0.1,
                  z0: t.z0 + 0.1,
                  z1: t.z1 - 0.1,
                },
              ]),
          ));
      )
        o -= 0.5;
      this.overlapsReserved(c(o), s) && (o = Math.min(o, 3.2));
      let u = c(o);
      o <= 2.2 ||
        this.overlapsReserved(u, this.keepOpen) ||
        this.makeLot(e, u, `low`, r, 1, t).pois.push(i);
    }
    if (f) {
      let r = {
          x0: e.minX + p + 3.5,
          x1: e.maxX - m - 3.5,
          z0: e.minZ + l + 3.5,
          z1: e.maxZ - u - 3.5,
        },
        i = r.x1 - r.x0,
        a = r.z1 - r.z0;
      if (i >= 10 && a >= 10 && o.towers < 0.6) {
        let o = t.next();
        if (o < 0.5) {
          let o = i >= a,
            c = Math.max(1, Math.round((o ? i : a) / t.range(14, 22))),
            d = ((o ? i : a) - (c - 1) * 3) / c;
          for (let i = 0; i < c; i++) {
            let a = (o ? r.x0 : r.z0) + i * (d + 3),
              c = o
                ? { x0: a, x1: a + d, z0: r.z0, z1: r.z1 }
                : { x0: r.x0, x1: r.x1, z0: a, z1: a + d };
            this.overlapsReserved(c, n) ||
              this.overlapsReserved(c, s) ||
              this.hitsLaneCorridor(c, e, g, l, u) ||
              this.makeLot(e, c, `apt`, 0, t.int(3, 5), t, !0);
          }
        } else if (o < 0.8) {
          let i = { x0: r.x0 + 1, x1: r.x1 - 1, z0: r.z0 + 1, z1: r.z1 - 1 };
          !this.overlapsReserved(i, n) &&
            !this.overlapsReserved(i, s) &&
            !this.hitsLaneCorridor(i, e, g, l, u) &&
            this.makeLot(e, i, `low`, 0, t.int(1, 2), t, !0);
        }
      }
    }
    for (let t of r) bl.has(t.kind) && this.clearYard(e, t);
    let S = [0, 0, 0, 0],
      C = [e.north, e.east, e.south, e.west];
    for (let e = 0; e < 4; e++) {
      let n = C[e];
      if (!n || n.pedestrian) continue;
      let r =
        n.kind === `boulevard` || n.kind === `arterial`
          ? 0.35 + 0.6 * Math.max(o.old, o.shops * 0.75)
          : 0.18 + 0.5 * o.old;
      (o.towers >= 0.6 && (r *= 0.3), t.chance(r) && (S[e] = t.range(3, 3.8)));
    }
    for (let n of this.lots) {
      if (
        n.block !== e ||
        n.interior ||
        n.type === `tower` ||
        n.type === `setback` ||
        n.type === `low` ||
        n.type === `site`
      )
        continue;
      let r = n.x1 - n.x0,
        i = n.z1 - n.z0;
      for (let e = 0; e < 4; e++)
        n.street[e] &&
          S[e] &&
          ((e === 0 || e === 2 ? i : r) < S[e] + 5 ||
            t.chance(0.07) ||
            (n.arcade[e] = S[e]));
    }
  }
  clearYard(e, t) {
    let n = Ol(t),
      r = kl(t, n),
      i = t.width / 2 + 0.25 + 0.15,
      a = 2.75,
      o =
        n === 0
          ? { x0: r - i, x1: r + i, z0: e.minZ - 1, z1: e.minZ + a }
          : n === 2
            ? { x0: r - i, x1: r + i, z0: e.maxZ - a, z1: e.maxZ + 1 }
            : n === 3
              ? { x0: e.minX - 1, x1: e.minX + a, z0: r - i, z1: r + i }
              : { x0: e.maxX - a, x1: e.maxX + 1, z0: r - i, z1: r + i },
      s = 0.05;
    for (let t = this.lots.length - 1; t >= 0; t--) {
      let n = this.lots[t];
      if (
        n.block !== e ||
        n.interior ||
        !(
          n.x1 > o.x0 + s &&
          n.x0 < o.x1 - s &&
          n.z1 > o.z0 + s &&
          n.z0 < o.z1 - s
        )
      )
        continue;
      let r = [
          [{ ...n, x0: o.x1 }, 3],
          [{ ...n, x1: o.x0 }, 1],
          [{ ...n, z0: o.z1 }, 0],
          [{ ...n, z1: o.z0 }, 2],
        ],
        i = null,
        a = 0;
      for (let e of r) {
        let [t] = e,
          r = t.x1 - t.x0,
          o = t.z1 - t.z0;
        r < 3.5 ||
          o < 3.5 ||
          n.pois.some(
            (e) =>
              e.x < t.x0 - 0.01 ||
              e.x > t.x1 + 0.01 ||
              e.z < t.z0 - 0.01 ||
              e.z > t.z1 + 0.01,
          ) ||
          (r * o > a && ((a = r * o), (i = e)));
      }
      if (!i) {
        this.lots.splice(t, 1);
        continue;
      }
      let [c, l] = i;
      ((n.x0 = c.x0), (n.x1 = c.x1), (n.z0 = c.z0), (n.z1 = c.z1));
      let u = [
        Math.abs(n.z0 - e.minZ) < s,
        Math.abs(n.x1 - e.maxX) < s,
        Math.abs(n.z1 - e.maxZ) < s,
        Math.abs(n.x0 - e.minX) < s,
      ];
      ((n.street = u),
        (n.road = [
          u[0] ? e.north : null,
          u[1] ? e.east : null,
          u[2] ? e.south : null,
          u[3] ? e.west : null,
        ]),
        n.street[n.front] ||
          (n.front = [0, 1, 2, 3].find((e) => n.street[e]) ?? n.front),
        ((n.open ??= [!1, !1, !1, !1])[l] = !0),
        n.tower &&
          ((n.tower.x0 = Math.max(n.tower.x0, n.x0 + 2)),
          (n.tower.x1 = Math.min(n.tower.x1, n.x1 - 2)),
          (n.tower.z0 = Math.max(n.tower.z0, n.z0 + 2)),
          (n.tower.z1 = Math.min(n.tower.z1, n.z1 - 2))));
    }
  }
  hitsLaneCorridor(e, t, n, r, i) {
    for (let a of [0, 2])
      for (let o of n[a]) {
        let n = a === 0 ? t.minZ : t.maxZ - i - 4,
          s = a === 0 ? t.minZ + r + 4 : t.maxZ;
        if (e.x1 > o.a && e.x0 < o.b && e.z1 > n && e.z0 < s) return !0;
      }
    return !1;
  }
};
