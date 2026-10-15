// tokyo/assets/region-tokyo-55J_WESF 73 — math
// Lines 32032-34678 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var Hf = (e, t) => e.weighted(t),
  Uf = (e, t) => {
    let n = (n) => Math.max(0, Math.min(255, Math.round(((e >> n) & 255) * t)));
    return (n(16) << 16) | (n(8) << 8) | n(0);
  },
  Wse = (e, t, n) => {
    let r = (r) =>
      Math.round(((e >> r) & 255) * (1 - n) + ((t >> r) & 255) * n);
    return (r(16) << 16) | (r(8) << 8) | r(0);
  },
  Gse = (e, t) => {
    if (e.hours === `show`) return 0;
    let n = gf(e.id);
    return un(
      n
        ? Sse(n)
        : e.hours ||
            (t === `akihabara`
              ? `11:00-22:00`
              : t === `ginza` || t === `marunouchi`
                ? `11:00-21:00`
                : `10:00-20:00`),
    );
  },
  Wf = (e) => {
    let t = 2166136261;
    for (let n = 0; n < e.length; n++)
      t = Math.imul(t ^ e.charCodeAt(n), 16777619);
    return t >>> 0;
  },
  Kse = new Set([
    `convenience`,
    `pharmacy`,
    `claw`,
    `lottery`,
    `bubbletea`,
    `ramen`,
    `karaoke`,
    `pachinko`,
    `electronics`,
    `capsule`,
  ]),
  Gf = {
    convenience: {
      room: V.CONV,
      hours: `24H`,
      bright: 54,
      bg: 2787914,
      fg: 16777215,
      category: `trade.konbini.name`,
    },
    pharmacy: {
      room: V.DRUG,
      hours: `09:00-22:00`,
      bright: 50,
      bg: 16769280,
      fg: 1908872,
      category: `trade.drugstore.name`,
    },
    claw: {
      room: V.GAME,
      hours: `10:00-24:00`,
      bright: 48,
      bg: 1710618,
      fg: 16726666,
      category: `trade.arcade.name`,
    },
    lottery: {
      room: V.LOTTERY,
      hours: `10:00-19:00`,
      bright: 28,
      bg: 13635600,
      fg: 16769024,
      category: `buildings.room.takarakuji`,
    },
    bubbletea: {
      room: V.TEA,
      hours: `10:00-21:00`,
      bright: 36,
      bg: 16183004,
      fg: 6961690,
      category: `trade.tea-stand.name`,
    },
    ramen: {
      room: V.NOODLE,
      hours: `11:00-02:00`,
      bright: 40,
      bg: 1710620,
      fg: 16051416,
      category: `trade.ramen.name`,
    },
    karaoke: {
      room: V.LOUNGE,
      hours: `24H`,
      bright: 50,
      bg: 16777215,
      fg: 15073298,
      category: `trade.karaoke.name`,
    },
    pachinko: {
      room: V.GAME,
      hours: `10:00-22:45`,
      bright: 60,
      bg: 15073298,
      fg: 16765952,
      category: `trade.pachinko.name`,
    },
    electronics: {
      room: V.PARTS,
      hours: `11:00-20:00`,
      bright: 52,
      bg: 18333,
      fg: 16777215,
      category: `trade.electronics.name`,
    },
    capsule: {
      room: V.LOBBY,
      hours: `24H`,
      bright: 44,
      bg: 1845842,
      fg: 16052454,
      category: `trade.hotel.sign.capsule`,
    },
  },
  Kf = new Map(),
  qse = [],
  Jse = (e) =>
    [0, 1, 2, 3][
      Math.round(
        (((e % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)) / (Math.PI / 2),
      ) % 4
    ],
  Yse = Gf,
  qf = [1845842, 3810328, 6953492, 1845842, 2767402],
  Jf = [13637656, 1723048, 1118481, 15781888, 16738816, 6953648],
  Xse = [
    `common.tenant.boshu`,
    `common.door.tax-free`,
    `common.promo.daitokka`,
    `common.promo.gekiyasu`,
    `common.estate.tsukigime`,
    `common.estate.kashi-jimusho`,
  ],
  Yf = {
    akihabara: [
      `electronics`,
      `pcshop`,
      `discount`,
      `anime`,
      `karaoke`,
      `arcade`,
    ],
    ginza: [`luxury`, `depato`, `fashion`, `drinks`],
    shimbashi: [`karaoke`, `izakaya`, `pachinko`, `drinks`],
    ueno: [`discount`, `pachinko`, `karaoke`, `drinks`],
    ameyoko: [`discount`, `pachinko`, `drinks`],
    default: [`drinks`, `karaoke`, `realestate`, `pachinko`],
  },
  Zse = null,
  Qse = () =>
    (Zse ??= [
      `electronics`,
      `pcparts`,
      `anime-goods`,
      `card-shop`,
      `retro-games`,
      `duty-free`,
      `junk`,
      `arcade`,
    ]
      .flatMap((e) => Rd(e)?.trade.signs ?? [])
      .filter(
        (e) =>
          So(e) &&
          !L(e).includes(`{`) &&
          L(e).length <= 10 &&
          !/返品|未確認|両替|禁煙|お断り/.test(L(e)),
      )),
  Xf = 20,
  $se = 0.5,
  ece = class {
    signs;
    detail = 1;
    signDensity = 1;
    base = 0.15;
    pois = null;
    areaAt = null;
    shopSink = null;
    constructor(e) {
      this.signs = e;
    }
    wallOn(e, t, n, r, i, a, o, s, c, l, u) {
      e.wall(
        t.px + t.tx * r + t.nx * n,
        t.pz + t.tz * r + t.nz * n,
        t.tx,
        t.tz,
        i - r,
        a,
        o,
        s,
        c,
        l,
        u,
      );
    }
    info(e, t, n, r, i, a) {
      e.setInfo(t, (n & 15) | (r << 4), i & 255, a & 255);
    }
    cells(e, t, n, r, i, a, o, s, c, l) {
      if (i - r < 0.05 || o - a < 0.05) return;
      let u = Math.max(1, Math.round((i - r) / s));
      this.wallOn(e, t, n, r, i, a, o, 0, u, (a - l) / c, (o - l) / c);
    }
    fbox(e, t, n, r, i, a, o, s, c = 1, l = 1, u = !0, d = !0) {
      let f = (e, n) => [
          t.px + t.tx * e + t.nx * n,
          t.pz + t.tz * e + t.nz * n,
        ],
        [p, m] = f(n, a);
      e.wall(p, m, t.tx, t.tz, r - n, o, s, 0, c, 0, l);
      let [h, g] = f(r, a);
      e.wall(
        h,
        g,
        -t.nx,
        -t.nz,
        a - i,
        o,
        s,
        0,
        ((a - i) / Math.max(0.01, r - n)) * c,
        0,
        l,
      );
      let [_, v] = f(n, i);
      e.wall(
        _,
        v,
        t.nx,
        t.nz,
        a - i,
        o,
        s,
        0,
        ((a - i) / Math.max(0.01, r - n)) * c,
        0,
        l,
      );
      let [y, b] = f(n, i),
        [x, S] = f(r, a),
        C = Math.min(y, x),
        w = Math.max(y, x),
        T = Math.min(b, S),
        E = Math.max(b, S);
      (u && e.hrect(C, T, w, E, s, !0, 0, 0, c, 1),
        d && e.hrect(C, T, w, E, o, !1, 0, 0, c, 1));
    }
    signQuad(e, t, n, r, i, a, o, s) {
      let c = t.px + t.tx * r + t.nx * n,
        l = t.pz + t.tz * r + t.nz * n,
        u = t.px + t.tx * i + t.nx * n,
        d = t.pz + t.tz * i + t.nz * n;
      this.signQuadXZ(e, c, l, u, d, t.nx, t.nz, a, o, s);
    }
    signQuadXZ(e, t, n, r, i, a, o, s, c, l) {
      let u = l.rot === !0,
        d = l.face;
      (d !== void 0 && this.signs.quad?.(d, e.vc, (t + r) / 2, (n + i) / 2),
        u
          ? e.quad4(
              t,
              s,
              n,
              r,
              s,
              i,
              r,
              c,
              i,
              t,
              c,
              n,
              a,
              0,
              o,
              l.u1,
              l.v1,
              l.u1,
              l.v0,
              l.u0,
              l.v0,
              l.u0,
              l.v1,
            )
          : e.quad4(
              t,
              s,
              n,
              r,
              s,
              i,
              r,
              c,
              i,
              t,
              c,
              n,
              a,
              0,
              o,
              l.u0,
              l.v1,
              l.u1,
              l.v1,
              l.u1,
              l.v0,
              l.u0,
              l.v0,
            ));
    }
    sw(e) {
      return this.signs.swatch(e);
    }
    swBox(e, t, n, r, i, a, o, s) {
      let c = this.sw(s);
      e.solidBox(t, n, r, i, a, o, c.u0, c.v0);
    }
    lot(e, t, n, r, i) {
      let a = new ie(t.seed ^ 1540483477);
      switch (
        (this.signs.lot?.((t.x0 + t.x1) / 2, (t.z0 + t.z1) / 2, t.district),
        t.ty)
      ) {
        case uu.OFFICE:
          this.office(e, t, a, n);
          break;
        case uu.ZAKKYO:
          this.zakkyo(e, t, a, n);
          break;
        case uu.MANSION:
          this.mansion(e, t, a, n);
          break;
        case uu.SHITAMACHI:
          this.shitamachi(e, t, a, n);
          break;
        case uu.KURA:
          this.kura(e, t, a, n);
          break;
        case uu.DEPATO:
          this.depato(e, t, a, n);
      }
      return !i || !r
        ? 0
        : (r.addBox(t.x0, t.z0, t.x1, t.z1, 0, t.h, `building`), 1);
    }
    streetSides(e) {
      let t = [];
      for (let n = 0; n < 4; n++) (e.street >> n) & 1 && t.push(n);
      return (
        t.sort(
          (t, n) =>
            ((e.big >> n) & 1) - ((e.big >> t) & 1) || Vf(e, n).L - Vf(e, t).L,
        ),
        t
      );
    }
    covered(e, t) {
      return Math.max(0, e.cover[t] - 0.1);
    }
    sideFace(e, t, n, r, i, a, o, s, c, l, u) {
      if (i < 0.05) return !1;
      let d = e.body,
        f = this.base,
        p = this.covered(t, r);
      if ((d.setTint(Uf(o, 0.93)), u && t.cover[r] < 1 && n.L > 4))
        (this.info(d, V.SIDE + s, 1, an.RES, c, 0),
          this.cells(d, n, 0, 0, n.L, 0, f + t.gH, 3.2, 3.2, 0),
          d.setTint(o),
          this.info(d, u.tile, u.vars, u.mode, c + r, l),
          this.cells(d, n, 0, 0, n.L, f + t.gH, a, u.bay, t.fh, f + t.gH),
          this.info(d, V.CONCRETE, 1, an.NONE, 0, 0),
          this.cells(d, n, 0, 0, n.L, a, i, 3.2, 3.2, a));
      else {
        (this.info(d, V.SIDE + s, 1, an.RES, c + r, l >> 1),
          this.cells(d, n, 0, 0, n.L, 0, i, 3.2, 3.2, 0));
        let e = ((c + r * 77) * 2654435761) >>> 0;
        if (this.detail > 0 && n.L > 3 && i - p > 6 && e & 1) {
          let t = Math.min(2, Math.floor((i - p) / 5));
          for (let r = 0; r < t; r++) {
            e = Math.imul(e ^ (e >>> 13), 1540483477) >>> 0;
            let t = p + 1 + ((e & 1023) / 1024) * (i - p - 2.5),
              r = 0.4 + (((e >>> 10) & 1023) / 1024) * (n.L - 1.4);
            (d.setTint(16777215),
              this.info(d, V.AC, 1, an.NONE, 0, 0),
              this.fbox(d, n, r, r + 0.8, 0, 0.32, t, t + 0.62, 1, 1, !0, !1));
          }
        }
      }
      return !0;
    }
    pickGenre(e, t, n) {
      return tse(t.district, e, n ? `upper` : `street`);
    }
    roofChain(e, t) {
      return Hd(e.pick(Yf[t.district] ?? Yf.default), t.district, e);
    }
    signLevel(e, t) {
      return Math.round(40 + 100 * e.glow * (0.45 + 0.55 * t.neon));
    }
    storefront(e, t, n, r, i, a, o, s, c) {
      let l = e.body,
        u = this.base,
        d = u,
        f = u + a;
      (l.setTint(6973024),
        this.info(l, V.CONCRETE, 1, an.NONE, 0, 0),
        this.wallOn(l, n, 0.02, r, i, 0, d + 0.02, 0, (i - r) / 3.2, 0, 0.1));
      let p = r,
        m = i,
        h = c.entrance ?? 0;
      if (h > 0 && m - p > h + 2.5) {
        let r = o.chance(0.5),
          i = r ? p : m - h;
        if (
          (l.setTint(16777215),
          this.info(l, c.lobbyTile ?? V.LOBBY, 1, an.SHOP, 0, 26),
          this.wallOn(l, n, 0, i, i + h, d, f, 0, 1, 0, 1),
          o.chance(0.75))
        ) {
          let r = this.plateName(t, o, t.ty === uu.MANSION),
            a = {
              kind: `plate`,
              key: r,
              bg: 2763306,
              fg: 15790320,
              style: Wf(r) % 2 ? 2 : 0,
              dist: t.district,
            };
          (e.sign.setTint(16777215).setInfo(0, o.int(0, 255), 40, 0),
            this.signQuad(
              e.sign,
              n,
              0.05,
              i + 0.1,
              i + h - 0.1,
              f - 0.62,
              f - 0.62 + (h - 0.2) / 4,
              this.signs.acquire(a, s),
            ));
        }
        r ? (p += h) : (m -= h);
      }
      let g = [],
        _ = n.tx < -0.5 ? 0 : n.tz < -0.5 ? 1 : n.tx > 0.5 ? 2 : 3,
        v =
          ((t.big >> _) & 1) == 1 ||
          t.district === `marunouchi` ||
          t.district === `ginza` ||
          t.district === `nihonbashi`,
        y = v ? 0.05 : 0.07 + 0.12 * (1 - t.shops),
        b = p,
        x = (e, t) => {
          if (t - e < 1.2) {
            g.length && (g[g.length - 1][1] = t);
            return;
          }
          let n = Math.max(
            1,
            Math.round((t - e) / (o.chance(0.5) ? 4.2 : 6.5)),
          );
          for (let r = 0; r < n; r++)
            g.push([e + ((t - e) * r) / n, e + ((t - e) * (r + 1)) / n, null]);
        };
      for (let e of this.poisOn(t, _)) {
        let t = (e.x - n.px) * n.tx + (e.z - n.pz) * n.tz,
          r = Math.max(b, t - e.width / 2),
          i = Math.min(m, t + e.width / 2);
        i - r < 2.4 || r < p || (x(b, r), g.push([r, i, e]), (b = i));
      }
      x(b, m);
      let S = ``,
        C = 0;
      for (let [r, i, u] of g) {
        let p = i - r;
        if ((C++, u)) {
          (this.poiUnit(e, t, n, r, i, a, u, s), (S = ``));
          continue;
        }
        if (o.chance(y)) {
          if (
            ((S = ``),
            l.setTint(o.chance(0.7) ? 16777215 : 15262936),
            this.info(
              l,
              o.chance(0.15) ? V.KUGURI : V.SHUTTER,
              o.chance(0.15) ? 1 : 2,
              an.NONE,
              o.int(0, 255),
              0,
            ),
            this.wallOn(
              l,
              n,
              0,
              r,
              i,
              d,
              f,
              0,
              Math.max(1, Math.round(p / 3.4)),
              0,
              1,
            ),
            o.chance(0.25))
          ) {
            e.sign.setTint(16777215).setInfo(0, 0, 0, 0);
            let t = this.signs.staticCell(kf.VACANT),
              a = Math.min(p - 0.6, 1.6),
              o = (r + i) / 2;
            this.signQuad(
              e.sign,
              n,
              0.03,
              o - a / 2,
              o + a / 2,
              d + 1.2,
              d + 1.2 + a / 4,
              t,
            );
          }
          continue;
        }
        let m = this.pickGenre(o, t, !1);
        for (let e = 0; e < 3 && (m.id === S || (v && nse(m) >= 15)); e++)
          m = this.pickGenre(o, t, !1);
        S = m.id;
        let h = m.id === `konbini`,
          g = Gse(m, t.district),
          _ = (r + i) / 2,
          b = p,
          x = h ? V.CONV : m.room >= 0 ? m.room : V.GOODS,
          w = h
            ? 54
            : m.id === `drugstore`
              ? 50
              : x === V.GAME
                ? 48
                : m.hours === `show`
                  ? 72
                  : 18 + Math.round(20 * m.glow);
        if (h) {
          let e = Math.max(2, Math.round(p / 3.3)),
            t = p / e,
            i = e >> 1;
          for (let a = 0; a < e; a++)
            (l.setTint(16777215),
              this.info(l, a === i ? V.CONV_DOOR : V.CONV, 1, an.SHOP, g, w),
              this.wallOn(
                l,
                n,
                0,
                r + a * t,
                r + (a + 1) * t,
                d,
                f,
                0,
                1,
                0,
                1,
              ));
        } else {
          let e = Math.max(1, Math.round(p / 4.2));
          if ((l.setTint(Wse(16777215, m.bg, 0.06)), e < 2))
            (this.info(l, x, 1, an.SHOP, g, w),
              this.wallOn(l, n, 0, r, i, d, f, 0, 1, 0, 1));
          else {
            let t = p / e,
              i = e === 2 ? +!o.chance(0.5) : e >> 1;
            ((_ = r + (i + 0.5) * t), (b = t));
            for (let a = 0; a < e; a++)
              (this.info(l, a === i ? V.GLASS_DOOR : x, 1, an.SHOP, g, w),
                this.wallOn(
                  l,
                  n,
                  0,
                  r + a * t,
                  r + (a + 1) * t,
                  d,
                  f,
                  0,
                  1,
                  0,
                  1,
                ));
          }
        }
        let T = c.trad || m.trad,
          E = Gd(m, t.district, o, 0.75, (t.seed >>> 5) + C),
          D = E.key,
          O = Wf(D),
          k = Kd(D, m, !!E.brand),
          A = {
            kind: `fascia`,
            key: D,
            sub:
              !E.brand &&
              !T &&
              D !== m.short &&
              O % 2 == 0 &&
              L(m.short).length <= 4
                ? m.short
                : void 0,
            bg: E.bg,
            fg: E.fg,
            style: k,
            dist: t.district,
          };
        D !== m.short &&
          (A.alt = {
            kind: `fascia`,
            key: m.short,
            bg: m.bg,
            fg: m.fg,
            style: Kd(m.short, m, !1),
          });
        let j = Math.min(0.9, (p - 0.2) / 4);
        (e.sign
          .setTint(16777215)
          .setInfo(+(k === 3), o.int(0, 255), this.signLevel(m, t), 0),
          this.signQuad(
            e.sign,
            n,
            0.1,
            r + 0.1,
            i - 0.1,
            f - j - 0.08,
            f - 0.08,
            this.signs.acquire(A, s),
          ),
          this.signFrame(
            e.sign,
            n,
            r + 0.08,
            i - 0.08,
            0,
            0.1,
            f - j - 0.1,
            f - 0.06,
          ));
        let ee = this.shopSink,
          M =
            ee && !h && m.hours !== `24H`
              ? {
                  x: n.px + n.tx * _,
                  z: n.pz + n.tz * _,
                  nx: n.nx,
                  nz: n.nz,
                  tx: n.tx,
                  tz: n.tz,
                  w: b,
                  uw: p,
                  cs: (r + i) / 2 - _,
                  h: a - j - 0.1,
                  trade: m.id,
                  district: t.district,
                  eat: m.eat,
                  noren: !1,
                  seed: (t.seed ^ (C * 2654435761)) >>> 0,
                }
              : null;
        if (this.detail <= 0) {
          M && ee(M);
          continue;
        }
        if (m.eat && (m.trad || o.chance(0.3)) && p > 2.4) {
          let t = Math.min(p - 0.8, 2.4),
            a = r + p * (0.3 + 0.4 * o.next());
          if (M) M.noren = !0;
          else {
            let o = m.short,
              c = {
                kind: `noren`,
                key: o,
                bg: qf[Wf(o) % qf.length],
                fg: 16051416,
                style: 0,
              };
            e.sign.setTint(16777215).setInfo(0, 0, 18, 0);
            let l =
              D === o
                ? this.signs.staticCell(kf.N_PLAIN)
                : this.signs.acquire(c, s);
            this.signQuad(
              e.sign,
              n,
              0.32,
              Math.max(r + 0.2, a - t / 2),
              Math.min(i - 0.2, a + t / 2),
              f - j - 0.95,
              f - j - 0.1,
              l,
            );
          }
        }
        if (
          (M && ee(M), m.trade.genres.includes(`chochin`) && o.chance(0.85))
        ) {
          let t = {
            kind: `lantern`,
            key: m.short,
            bg: 13641752,
            fg: 1315860,
            style: 0,
          };
          (this.lantern(e, n, r + 0.45, f - j - 0.25, this.signs.acquire(t, s)),
            p > 4 &&
              this.lantern(
                e,
                n,
                i - 0.45,
                f - j - 0.25,
                this.signs.acquire(t, s),
              ));
        } else
          !m.eat &&
            !h &&
            o.chance(0.3) &&
            this.awning(e, n, r + 0.1, i - 0.1, f - j - 0.12, Hf(o, kae));
      }
    }
    poisOn(e, t) {
      let n = this.pois?.(e.blockId);
      if (!n?.length) return qse;
      let r = [];
      for (let i of n)
        Kse.has(i.kind) &&
          Jse(i.facing) === t &&
          (t === 0 || t === 2
            ? i.x > e.x0 &&
              i.x < e.x1 &&
              Math.abs(i.z - (t === 0 ? e.z0 : e.z1)) < 3
            : i.z > e.z0 &&
              i.z < e.z1 &&
              Math.abs(i.x - (t === 3 ? e.x0 : e.x1)) < 3) &&
          r.push(i);
      let i = Vf(e, t);
      return r.sort(
        (e, t) =>
          (e.x - i.px) * i.tx +
          (e.z - i.pz) * i.tz -
          ((t.x - i.px) * i.tx + (t.z - i.pz) * i.tz),
      );
    }
    poiUnit(e, t, n, r, i, a, o, s) {
      let c = e.body,
        l = this.base,
        u = l + a,
        d = Gf[o.kind] ?? Gf.convenience,
        f = ui(o.brand),
        p = un(d.hours),
        m = i - r;
      if (o.kind === `convenience`) {
        let e = Math.max(2, Math.round(m / 3.3)),
          t = m / e,
          i = e >> 1;
        for (let a = 0; a < e; a++)
          (c.setTint(16777215),
            this.info(c, a === i ? V.CONV_DOOR : V.CONV, 1, an.SHOP, p, 54),
            this.wallOn(c, n, 0, r + a * t, r + (a + 1) * t, l, u, 0, 1, 0, 1));
      } else
        (c.setTint(16777215),
          this.info(c, d.room, 1, an.SHOP, p, d.bright),
          this.wallOn(
            c,
            n,
            0,
            r,
            i,
            l,
            u,
            0,
            Math.max(1, Math.round(m / 4.2)),
            0,
            1,
          ));
      let h = f ? `brand.${f.id}` : o.brand,
        g = f ? parseInt(f.colors[0].slice(1), 16) : d.bg,
        _ = f ? parseInt(f.colors[1].slice(1), 16) : d.fg,
        v = Math.min(0.9, (m - 0.2) / 4),
        y = (r + i) / 2;
      if (
        (Kf.set(o.id, {
          x: n.px + n.tx * y,
          z: n.pz + n.tz * y,
          facing: Math.atan2(n.nx, -n.nz),
          width: m,
          base: l,
          gH: a,
          signY: a - v - 0.1,
        }),
        o.kind === `ramen` && this.detail > 0)
      ) {
        let t = Math.min(m - 0.6, 1.9),
          a = r + m * 0.62;
        (e.sign.setTint(16777215).setInfo(0, 0, 18, 0),
          this.signQuad(
            e.sign,
            n,
            0.32,
            Math.max(r + 0.2, a - t / 2),
            Math.min(i - 0.2, a + t / 2),
            u - v - 1,
            u - v - 0.12,
            this.signs.acquire(
              {
                kind: `noren`,
                key: `trade.ramen.sign.ramen`,
                bg: 16052454,
                fg: 1447450,
                style: 0,
              },
              s,
            ),
          ));
      }
      (e.sign.setTint(16777215).setInfo(0, Wf(o.id) & 255, 130, 0),
        this.signQuad(
          e.sign,
          n,
          0.1,
          r + 0.1,
          i - 0.1,
          u - v - 0.08,
          u - 0.08,
          this.signs.acquire(
            {
              kind: `fascia`,
              key: h,
              bg: g,
              fg: _,
              style: +(o.kind === `convenience` || o.kind === `pharmacy`),
            },
            s,
          ),
        ),
        this.signFrame(
          e.sign,
          n,
          r + 0.08,
          i - 0.08,
          0,
          0.1,
          u - v - 0.1,
          u - 0.06,
        ));
    }
    signFrame(e, t, n, r, i, a, o, s) {
      let c = this.sw(`frame`);
      e.setTint(16777215).setInfo(0, 0, Xf, 0);
      let l = (e, n) => [
          t.px + t.tx * e + t.nx * n,
          t.pz + t.tz * e + t.nz * n,
        ],
        [u, d] = l(r, a);
      e.wall(u, d, -t.nx, -t.nz, a - i, o, s, c.u0, c.u0, c.v0, c.v0);
      let [f, p] = l(n, i);
      e.wall(f, p, t.nx, t.nz, a - i, o, s, c.u0, c.u0, c.v0, c.v0);
      let [m, h] = l(n, i),
        [g, _] = l(r, a);
      e.hrect(
        Math.min(m, g),
        Math.min(h, _),
        Math.max(m, g),
        Math.max(h, _),
        o,
        !1,
        c.u0,
        c.v0,
        c.u0,
        c.v0,
      );
    }
    lantern(e, t, n, r, i) {
      let a = e.sign,
        o = 0.42,
        s = 0.2,
        c = t.px + t.tx * n + t.nx * o,
        l = t.pz + t.tz * n + t.nz * o;
      a.setTint(16777215).setInfo(1, 37, 150, 0);
      let u = r - 0.9,
        d = r;
      (this.signQuadXZ(a, c - s, l + s, c + s, l + s, 0, 1, u, d, i),
        this.signQuadXZ(a, c + s, l - s, c - s, l - s, 0, -1, u, d, i),
        this.signQuadXZ(a, c + s, l + s, c + s, l - s, 1, 0, u, d, i),
        this.signQuadXZ(a, c - s, l - s, c - s, l + s, -1, 0, u, d, i),
        a.setInfo(0, 0, Xf, 0));
      let f = this.sw(`black`);
      a.hrect(c - s, l - s, c + s, l + s, u, !1, f.u0, f.v0, f.u0, f.v0);
    }
    awning(e, t, n, r, i, a) {
      let o = e.body,
        s = 1.1,
        c = (e, n) => [t.px + t.tx * e + t.nx * n, t.pz + t.tz * e + t.nz * n];
      (o.setTint(a), this.info(o, V.CANVAS, 1, an.NONE, 0, 0));
      let [l, u] = c(n, 0.02),
        [d, f] = c(r, 0.02),
        [p, m] = c(r, s),
        [h, g] = c(n, s),
        _ = i - 0.45,
        v = r - n;
      (o.quad4(
        l,
        i,
        u,
        h,
        _,
        g,
        p,
        _,
        m,
        d,
        i,
        f,
        t.nx * 0.4,
        0.9,
        t.nz * 0.4,
        0,
        0.5,
        0,
        0.84,
        v / 3,
        0.84,
        v / 3,
        0.5,
      ),
        o.quad4(
          d,
          i,
          f,
          p,
          _,
          m,
          h,
          _,
          g,
          l,
          i,
          u,
          -t.nx * 0.4,
          -0.9,
          -t.nz * 0.4,
          0,
          0.5,
          0,
          0.84,
          v / 3,
          0.84,
          v / 3,
          0.5,
        ),
        this.wallOn(o, t, s, n, r, _ - 0.28, _, 0, v / 3, 0, 0.16),
        o.wallSloped(
          h,
          g,
          -t.nx,
          -t.nz,
          1.08,
          _ - 0.28,
          _,
          i,
          0,
          0.3,
          0,
          0.1,
          0.3,
        ),
        o.wallSloped(
          d,
          f,
          t.nx,
          t.nz,
          1.08,
          _ - 0.28,
          i,
          _,
          0,
          0.3,
          0,
          0.3,
          0.1,
        ));
    }
    flatRoof(e, t, n, r, i) {
      let a = e.body;
      (a.setTint(Uf(i, 0.9)), this.info(a, V.CONCRETE, 1, an.NONE, 0, 0));
      let o = 0.18;
      if (r > 0.05)
        for (let e = 0; e < 4; e++) {
          let i = Vf(
            { x0: t.x0 + o, z0: t.z0 + o, x1: t.x1 - o, z1: t.z1 - o },
            e,
          );
          a.wall(
            i.px + i.tx * i.L,
            i.pz + i.tz * i.L,
            -i.tx,
            -i.tz,
            i.L,
            n,
            n + r,
            0,
            i.L / 3.2,
            0,
            r / 3.2,
          );
        }
      (a.setTint(13158596),
        this.info(a, V.ROOF_FLAT, 1, an.NONE, 0, 0),
        a.hrect(
          t.x0 + o,
          t.z0 + o,
          t.x1 - o,
          t.z1 - o,
          n,
          !0,
          0,
          0,
          (t.x1 - t.x0) / 8,
          (t.z1 - t.z0) / 8,
        ));
    }
    rooftop(e, t, n, r, i, a, o, s) {
      let c = e.body,
        l = n.x1 - n.x0,
        u = n.z1 - n.z0;
      if (l < 4 || u < 4) return;
      let d = (e, t, r, i) => {
        let a = n.x0 + r + 0.4 + (l - 2 * r - 0.8) * e,
          o = n.z0 + i + 0.4 + (u - 2 * i - 0.8) * t;
        return { x0: a - r, x1: a + r, z0: o - i, z1: o + i };
      };
      if (i.chance(0.75)) {
        let e = Math.min(l * 0.3, 1.3 + i.next()),
          t = Math.min(u * 0.3, 1.3 + i.next()),
          n = d(i.next(), i.next(), e, t);
        (c.setTint(Uf(14736854, 0.95)),
          this.info(c, V.CONCRETE, 1, an.NONE, 0, 0),
          c.box(
            n.x0,
            r,
            n.z0,
            n.x1,
            r + 2.6,
            n.z1,
            (n.x1 - n.x0) / 3.2,
            0.8,
            1,
            31,
          ));
      }
      let f = this.detail >= $se;
      if (i.chance(0.65) && this.detail > 0) {
        let e = Math.min(l * 0.25, 1 + i.next() * 0.6),
          t = Math.min(u * 0.25, 0.8 + i.next() * 0.5),
          n = d(i.next(), i.next(), e, t),
          a = i.chance(0.3) ? 13161696 : 16777215;
        f &&
          (c.setTint(a),
          this.info(c, V.TANK, 1, an.NONE, 0, 0),
          c.box(
            n.x0,
            r,
            n.z0,
            n.x1,
            r + 1.9,
            n.z1,
            (n.x1 - n.x0) / 1.6,
            1.9 / 1.6,
            1,
            31,
          ));
      }
      if (this.detail > 0) {
        let e = i.int(0, 2);
        for (let t = 0; t < e; t++) {
          let e = d(i.next(), i.next(), 0.42, 0.16);
          f &&
            (c.setTint(16777215),
            this.info(c, V.AC, 1, an.NONE, 0, 0),
            c.box(e.x0, r, e.z0, e.x1, r + 0.65, e.z1, 1, 1, 1, 31));
        }
      }
      if (o && s && i.chance(0.25 + 0.4 * t.neon) && o.L > 6) {
        let n = this.pickGenre(i, t, !0),
          s = Math.min(o.L - 1, 4 + i.next() * 6),
          c = s / 8,
          l = (o.L - s) / 2,
          u = r + 1.2,
          d = i.chance(0.65) ? this.roofChain(i, t) : null,
          f = d ? d.key : i.pick(Xse),
          p = {
            kind: `band`,
            key: f,
            bg: d ? d.bg : Jf[Wf(f) % Jf.length],
            fg: d ? d.fg : 16777215,
            style: Wf(f) % 4 == 0 ? 3 : 0,
          };
        (p.bg === 15781888 && !d && (p.fg = 1118481),
          e.sign
            .setTint(16777215)
            .setInfo(
              i.chance(0.2) ? 3 : 0,
              i.int(0, 255),
              this.signLevel(n, t) + 20,
              0,
            ),
          this.signQuad(
            e.sign,
            o,
            -1.2,
            l,
            l + s,
            u,
            u + c,
            this.signs.acquire(p, a),
          ),
          e.sign.setInfo(0, 0, Xf, 0));
        let m = this.sw(`steel`);
        for (let t of [l + 0.3, l + s - 0.4])
          this.wallOn(
            e.sign,
            o,
            -1.25,
            t,
            t + 0.1,
            r,
            u,
            m.u0,
            m.u0,
            m.v0,
            m.v0,
          );
      }
    }
    gable(e, t, n, r, i, a, o, s, c, l) {
      let u = e.body,
        d = t.x0 - (i ? a * 0.5 : a),
        f = t.x1 + (i ? a * 0.5 : a),
        p = t.z0 - (i ? a : a * 0.5),
        m = t.z1 + (i ? a : a * 0.5),
        h = n + r,
        g = n - a * (r / Math.max(1, (i ? t.z1 - t.z0 : t.x1 - t.x0) / 2));
      if ((u.setTint(s), this.info(u, o, 1, an.NONE, 0, 0), i)) {
        let e = (p + m) / 2,
          i = Math.hypot(e - p, h - g),
          a = (e - p) / i,
          o = (h - g) / i;
        (u.quad4(
          f,
          g,
          p,
          d,
          g,
          p,
          d,
          h,
          e,
          f,
          h,
          e,
          0,
          a,
          -o,
          0,
          0,
          (f - d) / 3,
          0,
          (f - d) / 3,
          i / 3,
          0,
          i / 3,
        ),
          u.quad4(
            d,
            g,
            m,
            f,
            g,
            m,
            f,
            h,
            e,
            d,
            h,
            e,
            0,
            a,
            o,
            0,
            0,
            (f - d) / 3,
            0,
            (f - d) / 3,
            i / 3,
            0,
            i / 3,
          ),
          u.box(
            d,
            h - 0.05,
            e - 0.14,
            f,
            h + 0.16,
            e + 0.14,
            (f - d) / 3,
            0.1,
            0.1,
            31,
          ),
          u.setTint(l),
          this.info(u, c, 1, an.NONE, 0, 0));
        let s = t.z1 - t.z0;
        (u.wallSloped(
          t.x0,
          t.z0,
          0,
          1,
          s / 2,
          n - 0.01,
          n,
          h - 0.05,
          0,
          s / 6,
          0,
          0,
          r / 3,
        ),
          u.wallSloped(
            t.x0,
            (t.z0 + t.z1) / 2,
            0,
            1,
            s / 2,
            n - 0.01,
            h - 0.05,
            n,
            0,
            s / 6,
            0,
            r / 3,
            0,
          ),
          u.wallSloped(
            t.x1,
            t.z1,
            0,
            -1,
            s / 2,
            n - 0.01,
            n,
            h - 0.05,
            0,
            s / 6,
            0,
            0,
            r / 3,
          ),
          u.wallSloped(
            t.x1,
            (t.z0 + t.z1) / 2,
            0,
            -1,
            s / 2,
            n - 0.01,
            h - 0.05,
            n,
            0,
            s / 6,
            0,
            r / 3,
            0,
          ));
      } else {
        let e = (d + f) / 2,
          i = Math.hypot(e - d, h - g),
          a = (e - d) / i,
          o = (h - g) / i;
        (u.quad4(
          d,
          g,
          p,
          d,
          g,
          m,
          e,
          h,
          m,
          e,
          h,
          p,
          -o,
          a,
          0,
          0,
          0,
          (m - p) / 3,
          0,
          (m - p) / 3,
          i / 3,
          0,
          i / 3,
        ),
          u.quad4(
            f,
            g,
            m,
            f,
            g,
            p,
            e,
            h,
            p,
            e,
            h,
            m,
            o,
            a,
            0,
            0,
            0,
            (m - p) / 3,
            0,
            (m - p) / 3,
            i / 3,
            0,
            i / 3,
          ),
          u.box(
            e - 0.14,
            h - 0.05,
            p,
            e + 0.14,
            h + 0.16,
            m,
            0.1,
            0.1,
            (m - p) / 3,
            31,
          ),
          u.setTint(l),
          this.info(u, c, 1, an.NONE, 0, 0));
        let s = t.x1 - t.x0;
        (u.wallSloped(
          t.x1,
          t.z0,
          -1,
          0,
          s / 2,
          n - 0.01,
          n,
          h - 0.05,
          0,
          s / 6,
          0,
          0,
          r / 3,
        ),
          u.wallSloped(
            (t.x0 + t.x1) / 2,
            t.z0,
            -1,
            0,
            s / 2,
            n - 0.01,
            h - 0.05,
            n,
            0,
            s / 6,
            0,
            r / 3,
            0,
          ),
          u.wallSloped(
            t.x0,
            t.z1,
            1,
            0,
            s / 2,
            n - 0.01,
            n,
            h - 0.05,
            0,
            s / 6,
            0,
            0,
            r / 3,
          ),
          u.wallSloped(
            (t.x0 + t.x1) / 2,
            t.z1,
            1,
            0,
            s / 2,
            n - 0.01,
            h - 0.05,
            n,
            0,
            s / 6,
            0,
            r / 3,
            0,
          ));
      }
    }
    zakkyo(e, t, n, r) {
      let i = e.body,
        a = this.base,
        { gH: o, fh: s, floors: c } = t,
        l = a + o + (c - 1) * s,
        u = t.h - (o + (c - 1) * s),
        d = Hf(n, du),
        f = n.int(90, 170),
        p = n.int(0, 255),
        m = this.streetSides(t)[0] ?? 0,
        h = [],
        g = n.next();
      for (let e = 1; e < c; e++)
        h.push(
          n.chance(0.18)
            ? V.LETTER
            : g < 0.55
              ? V.ZWIN
              : g < 0.8
                ? V.RIBBON
                : V.WIN,
        );
      let _ = n.chance(0.5),
        v = n.int(0, 2);
      for (let g = 0; g < 4; g++) {
        let y = Vf(t, g);
        if ((t.street >> g) & 1) {
          (this.storefront(e, t, y, 0, y.L, o, n, r, {
            entrance: y.L > 5 && g === m ? 1.5 + n.next() * 0.5 : 0,
            lobbyTile: V.GLASS_DOOR,
          }),
            i.setTint(d));
          for (let e = 1; e < c; e++) {
            let t = a + o + (e - 1) * s,
              n = h[e - 1],
              r = n === V.ZWIN ? 3 : n === V.RIBBON ? 2 : n === V.WIN ? 4 : 1;
            (this.info(i, n, r, n === V.WIN ? an.RES : an.OFFICE, p + e, f),
              this.cells(
                i,
                y,
                0,
                0,
                y.L,
                t,
                t + s,
                n === V.RIBBON ? 3.6 : 3.1,
                s,
                t,
              ));
          }
          (this.info(i, V.CONCRETE, 1, an.NONE, 0, 0),
            this.cells(i, y, 0, 0, y.L, l, l + u, 3.2, 3.2, l));
          let v = n.next();
          (g === m && c >= 3 && v < 0.62 * this.signDensity + 0.08
            ? this.tenantStack(e, t, y, _ ? 0.25 : y.L - 0.25, n, r)
            : c >= 3 && v < 0.9 && this.wallBoards(e, t, y, n, r),
            t.district === `akihabara` &&
              g === m &&
              c >= 5 &&
              n.chance(0.65) &&
              this.akibaSigns(e, t, y, n, r, !_));
        } else {
          let r =
            t.cover[g] < 1 &&
            c >= 3 &&
            y.L > 5 &&
            n.chance(0.5) &&
            this.detail > 0;
          if (
            !this.sideFace(
              e,
              t,
              y,
              g,
              l + u,
              l,
              d,
              v,
              p,
              f,
              r ? null : { tile: V.WIN, vars: 4, mode: an.RES, bay: 3.1 },
            )
          )
            continue;
          r &&
            this.outsideStair(e, y, n.chance(0.5) ? 0.2 : y.L - 3, 2.8, a, l);
        }
      }
      (this.flatRoof(e, t, l, u, d),
        this.rooftop(
          e,
          t,
          { x0: t.x0 + 0.3, z0: t.z0 + 0.3, x1: t.x1 - 0.3, z1: t.z1 - 0.3 },
          l,
          n,
          r,
          Vf(t, m),
          !0,
        ));
    }
    tenantStack(e, t, n, r, i, a) {
      let o = e.sign,
        s = this.base,
        { gH: c, fh: l, floors: u } = t,
        d = 0.8 + i.next() * 0.25,
        f = 0.15,
        p = f + d,
        m = 0.12,
        h = (e, t) => [n.px + n.tx * e + n.nx * t, n.pz + n.tz * e + n.nz * t],
        g = s + c + 0.15,
        _ = Math.min(u, 1 + Math.floor(i.range(u * 0.7, u + 0.99))),
        v = this.usedTrades;
      v.length = 0;
      for (let e = 1; e < _; e++) {
        let u = s + c + (e - 1) * l + 0.06,
          g = u + l - 0.12,
          _ = i.chance(0.14),
          y = this.tenant(i, t, v),
          b = !_ && i.chance(0.25),
          x = _
            ? `common.tenant.boshu`
            : b
              ? Gd(y, t.district, i, 1, (t.seed >>> 7) + e).key
              : y.short,
          S = _
            ? { kind: `vpanel`, key: x, bg: 16777215, fg: 13637656, style: 1 }
            : {
                kind: `vpanel`,
                key: x,
                bg: y.bg,
                fg: y.fg,
                style: Kd(x, null, !1) % 2,
              };
        b &&
          x !== y.short &&
          (S.alt = {
            kind: `vpanel`,
            key: y.short,
            bg: y.bg,
            fg: y.fg,
            style: Kd(y.short, null, !1) % 2,
          });
        let C = this.signs.acquire(S, a);
        o.setTint(16777215).setInfo(
          _ ? 0 : +!!i.chance(0.08),
          i.int(0, 255),
          _ ? 50 : this.signLevel(y, t),
          0,
        );
        let w = Math.min(d * 0.7, 0.55),
          T = this.signs.floorTag(e + 1),
          [E, D] = h(r + m, p),
          [O, k] = h(r + m, f);
        this.signQuadXZ(o, O, k, E, D, n.tx, n.tz, u + w + 0.04, g, C);
        let [A, j] = h(r - m, f),
          [ee, M] = h(r - m, p);
        this.signQuadXZ(o, ee, M, A, j, -n.tx, -n.tz, u + w + 0.04, g, C);
        let te = (f + p) / 2,
          [ne, re] = h(r + m, te - w / 2),
          [ie, ae] = h(r + m, te + w / 2);
        this.signQuadXZ(
          o,
          ne,
          re,
          ie,
          ae,
          n.tx,
          n.tz,
          u + 0.02,
          u + 0.02 + w,
          T,
        );
        let [oe, se] = h(r - m, te + w / 2),
          [ce, le] = h(r - m, te - w / 2);
        this.signQuadXZ(
          o,
          oe,
          se,
          ce,
          le,
          -n.tx,
          -n.tz,
          u + 0.02,
          u + 0.02 + w,
          T,
        );
      }
      let y = s + c + (_ - 1) * l;
      o.setTint(16777215).setInfo(0, 0, Xf, 0);
      let b = this.sw(`frame`),
        [x, S] = h(r - m, p);
      o.wall(x, S, n.tx, n.tz, m * 2, g - 0.1, y, b.u0, b.u0, b.v0, b.v0);
      let [C, w] = h(r - m, f),
        [T, E] = h(r + m, p),
        D = Math.min(C, T),
        O = Math.max(C, T),
        k = Math.min(w, E),
        A = Math.max(w, E);
      (o.hrect(D, k, O, A, g - 0.1, !1, b.u0, b.v0, b.u0, b.v0),
        o.hrect(D, k, O, A, y, !0, b.u0, b.v0, b.u0, b.v0));
    }
    wallBoards(e, t, n, r, i) {
      let a = e.sign,
        o = this.base,
        { gH: s, fh: c, floors: l } = t,
        u = Math.min(n.L - 0.6, 3.6 + r.next() * 1.6),
        d = Math.min(0.8, u / 5.33),
        f = (n.L - u) * (r.chance(0.5) ? 0.5 : r.next()),
        p = this.usedTrades;
      p.length = 0;
      for (let e = 1; e < l; e++) {
        if (!r.chance(0.6)) continue;
        let l = this.tenant(r, t, p),
          m = Gd(l, t.district, r, 0.6, (t.seed >>> 9) + e),
          h = o + s + (e - 1) * c + c - d - 0.12,
          g = {
            kind: `fascia`,
            key: m.key,
            bg: m.bg,
            fg: m.fg,
            style: Kd(m.key, l, !!m.brand),
          };
        (m.key !== l.short &&
          (g.alt = {
            kind: `fascia`,
            key: l.short,
            bg: l.bg,
            fg: l.fg,
            style: Kd(l.short, l, !1),
          }),
          a
            .setTint(16777215)
            .setInfo(0, r.int(0, 255), this.signLevel(l, t), 0),
          this.signQuad(
            a,
            n,
            0.08,
            f,
            f + u,
            h,
            h + d,
            this.signs.acquire(g, i),
          ));
      }
    }
    usedTrades = [];
    tenant(e, t, n) {
      let r = this.pickGenre(e, t, !0);
      for (let i = 0; i < 4 && n.includes(r.id); i++)
        r = this.pickGenre(e, t, !0);
      return (n.push(r.id), r);
    }
    plateName(e, t, n) {
      let r = t.chance(0.65)
          ? this.areaAt?.((e.x0 + e.x1) / 2, (e.z0 + e.z1) / 2)?.town.ja
          : void 0,
        i = Nd(n ? `buildings.mansion-town.` : `buildings.bldg-town.`);
      if (r && i.length) return bo(t.pick(i), { town: r });
      let a = Nd(`buildings.bldg.`);
      return t.pick(a);
    }
    akibaSigns(e, t, n, r, i, a) {
      let o = e.sign,
        s = this.base,
        { gH: c, fh: l, floors: u } = t,
        d = r.chance(0.5),
        f = this.pickGenre(r, t, !0),
        p = d ? this.roofChain(r, t) : null,
        m = p ? p.key : f.short,
        h = p ? p.bg : f.bg,
        g = p ? p.fg : f.fg,
        _ = Math.min((u - 1) * l - 0.6, 16),
        v = Math.max(1.2, _ / 8),
        y = s + c + 0.4,
        b = a ? 0.1 : n.L - 0.1 - 0.25,
        x = this.signs.acquire(
          { kind: `vbig`, key: m, bg: h, fg: g, style: 0 },
          i,
        );
      o.setTint(16777215).setInfo(r.chance(0.2) ? 3 : 0, r.int(0, 255), 175, 0);
      let S = (e, t) => [
          n.px + n.tx * e + n.nx * t,
          n.pz + n.tz * e + n.nz * t,
        ],
        C = 0.2,
        w = 0.2 + v,
        [T, E] = S(b + 0.12, w),
        [D, O] = S(b + 0.12, C);
      this.signQuadXZ(o, D, O, T, E, n.tx, n.tz, y, y + _, x);
      let [k, A] = S(b - 0.12, C),
        [j, ee] = S(b - 0.12, w);
      (this.signQuadXZ(o, j, ee, k, A, -n.tx, -n.tz, y, y + _, x),
        this.swBox(
          o,
          Math.min(T, k, D, j),
          y - 0.12,
          Math.min(E, A, O, ee),
          Math.max(T, k, D, j),
          y,
          Math.max(E, A, O, ee),
          `frame`,
        ));
      let M = Qse(),
        te = a ? 0.6 + v * 0 + 0.3 : 0.4,
        ne = a ? n.L - 0.4 : n.L - 0.9;
      if (!(ne - te < 3)) {
        for (let e = 1; e < u - 1; e++) {
          if (!r.chance(0.7)) continue;
          let t = s + c + (e - 1) * l + l * 0.72,
            a = Math.min(0.9, (ne - te) / 8),
            u = r.pick(M),
            d = {
              kind: `band`,
              key: u,
              bg: Jf[Wf(u) % Jf.length],
              fg: 16777215,
              style: Wf(u) % 3 == 0 ? 3 : 0,
            };
          (d.bg === 15781888 && (d.fg = 1118481),
            o
              .setTint(16777215)
              .setInfo(r.chance(0.15) ? 3 : 0, r.int(0, 255), 155, 0),
            this.signQuad(
              o,
              n,
              0.12,
              te,
              ne,
              t,
              t + a,
              this.signs.acquire(d, i),
            ));
        }
        if (r.chance(0.5) && u >= 5) {
          let t = Math.min(ne - te, 6),
            i = t * 0.56,
            a = s + c + l * 1.2;
          (e.screen.setTint(16777215).setInfo(0, r.int(0, 255), 0, 0),
            this.wallOn(
              e.screen,
              n,
              0.2,
              (te + ne) / 2 - t / 2,
              (te + ne) / 2 + t / 2,
              a,
              a + i,
              0,
              1,
              0,
              1,
            ));
        }
      }
    }
    outsideStair(e, t, n, r, i, a) {
      let o = e.body;
      (o.setTint(16777215), this.info(o, V.STAIR_OUT, 1, an.NONE, 0, 0));
      let s = 1.2,
        c = 3.2,
        l = (e, n) => [t.px + t.tx * e + t.nx * n, t.pz + t.tz * e + t.nz * n],
        [u, d] = l(n, s);
      (o.wall(u, d, t.tx, t.tz, r, i, a, 0, 1, 0, (a - i) / c),
        this.info(o, V.STAIR_SIDE, 1, an.NONE, 0, 0));
      let [f, p] = l(n + r, s);
      o.wall(f, p, -t.nx, -t.nz, s, i, a, 0, 0.5, 0, (a - i) / (c * 2));
      let [m, h] = l(n, 0);
      o.wall(m, h, t.nx, t.nz, s, i, a, 0, 0.5, 0, (a - i) / (c * 2));
      let [g, _] = l(n, 0),
        [v, y] = l(n + r, s);
      (this.info(o, V.CONCRETE, 1, an.NONE, 0, 0),
        o.hrect(
          Math.min(g, v),
          Math.min(_, y),
          Math.max(g, v),
          Math.max(_, y),
          a,
          !0,
          0,
          0,
          1,
          1,
        ));
    }
    office(e, t, n, r) {
      let i = e.body,
        a = this.base,
        { gH: o, fh: s, floors: c } = t,
        l = a + o + (c - 1) * s,
        u = t.h - (o + (c - 1) * s),
        d = n.int(0, 255),
        f = n.int(90, 160),
        p = this.streetSides(t)[0] ?? 0,
        m = Hf(n, pu),
        h = Hf(n, mu);
      if (t.tower) {
        let c = t.podium > 0 ? a + t.podium : 0,
          g = n.next();
        c || a + o;
        for (let l = 0; l < 4; l++) {
          let u = Vf(t, l),
            h = (t.street >> l) & 1;
          if ((i.setTint(16777215), h)) {
            if (u.L > 14) {
              let s =
                  l === p ? Math.min(u.L * 0.4, 16) : Math.min(u.L * 0.25, 8),
                c = u.L * (0.3 + 0.4 * n.next());
              (this.info(i, V.LOBBY_GLASS, 1, an.SHOP, 0, 40),
                this.wallOn(
                  i,
                  u,
                  0,
                  c - s / 2,
                  c + s / 2,
                  a,
                  a + o,
                  0,
                  Math.max(1, Math.round(s / 4)),
                  0,
                  1,
                ),
                this.storefront(e, t, u, 0, c - s / 2, o, n, r, {}),
                this.storefront(e, t, u, c + s / 2, u.L, o, n, r, {}));
            } else
              (this.info(i, V.LOBBY_GLASS, 1, an.SHOP, 0, 30),
                this.wallOn(
                  i,
                  u,
                  0,
                  0,
                  u.L,
                  a,
                  a + o,
                  0,
                  Math.max(1, Math.round(u.L / 5)),
                  0,
                  1,
                ));
          } else
            (i.setTint(m),
              this.info(i, V.STONE_PLAIN, 1, an.NONE, 0, 0),
              this.cells(i, u, 0, 0, u.L, 0, a + o, 4, 3.2, 0));
          c &&
            (i.setTint(m),
            this.info(i, V.STONE_WIN, 1, an.OFFICE, d + l, f),
            this.cells(i, u, 0, 0, u.L, a + o, c, 3.6, s, a + o));
        }
        let _ = c ? Math.min(6, Math.min(t.x1 - t.x0, t.z1 - t.z0) * 0.12) : 0,
          v = { x0: t.x0 + _, z0: t.z0 + _, x1: t.x1 - _, z1: t.z1 - _ },
          y = c || a + o;
        c && this.flatRoof(e, t, c, 1.1, m);
        let b = g < 0.6 ? V.CURTAIN : g < 0.85 ? V.RIBBON : V.STONE_WIN,
          x = b === V.CURTAIN ? 3 : b === V.RIBBON ? 2 : 1;
        i.setTint(b === V.STONE_WIN ? m : h);
        for (let e = 0; e < 4; e++) {
          let t = Vf(v, e);
          (this.info(i, b, x, an.OFFICE, d + 11 * e, f),
            this.cells(i, t, 0, 0, t.L, y, l, b === V.RIBBON ? 3.6 : 3.2, s, y),
            this.info(i, V.LOUVRE, 1, an.NONE, 0, 0),
            this.cells(i, t, 0, 0, t.L, l, l + u + 2.4, 3.2, 3.2, l));
        }
        let S = l + u + 2.4;
        this.flatRoof(e, v, S, 0.01, h);
        let C = (v.x0 + v.x1) / 2,
          w = (v.z0 + v.z1) / 2,
          T = Math.min(v.x1 - v.x0, v.z1 - v.z0) * 0.35;
        if (S > 90 && T > 6) {
          let t = this.signs.staticCell(kf.HELI);
          e.sign.setTint(16777215).setInfo(0, 0, 0, 0);
          let n = t.u0,
            r = t.u0 + (t.v1 - t.v0) * 0.75;
          e.sign.quad4(
            C - T,
            S + 0.03,
            w + T,
            C + T,
            S + 0.03,
            w + T,
            C + T,
            S + 0.03,
            w - T,
            C - T,
            S + 0.03,
            w - T,
            0,
            1,
            0,
            n,
            t.v1,
            r,
            t.v1,
            r,
            t.v0,
            n,
            t.v0,
          );
        }
        if (S > 60) {
          e.sign.setTint(16777215).setInfo(2, (d * 7) & 255, 255, 0);
          let t = this.sw(`aviation`);
          for (let [n, r] of [
            [v.x0, v.z0],
            [v.x1, v.z0],
            [v.x0, v.z1],
            [v.x1, v.z1],
          ])
            e.sign.solidBox(
              n - 0.18,
              S,
              r - 0.18,
              n + 0.18,
              S + 0.35,
              r + 0.18,
              t.u0,
              t.v0,
            );
        }
        return;
      }
      let g = t.district === `ginza` && t.big !== 0,
        _ = n.next(),
        v = g
          ? _ < 0.3
            ? V.CURTAIN
            : _ < 0.8
              ? V.DEPATO
              : V.STONE_WIN
          : _ < 0.5
            ? V.RIBBON
            : n.chance(0.5)
              ? V.STONE_WIN
              : V.CURTAIN,
        y = v === V.CURTAIN ? 3 : v === V.RIBBON ? 2 : 1,
        b = v === V.DEPATO ? an.LIT : an.OFFICE,
        x = v === V.CURTAIN ? h : v === V.DEPATO ? Hf(n, _u) : m;
      for (let m = 0; m < 4; m++) {
        let h = Vf(t, m);
        if ((t.street >> m) & 1) {
          if (m === p) {
            let s = Math.min(4, h.L * 0.3);
            (i.setTint(16777215),
              this.info(i, V.GLASS_DOOR, 1, an.SHOP, 0, 36));
            let c = n.chance(0.5) ? 0 : h.L - s;
            (this.wallOn(i, h, 0, c, c + s, a, a + o, 0, 1, 0, 1),
              c === 0
                ? this.storefront(e, t, h, s, h.L, o, n, r, {})
                : this.storefront(e, t, h, 0, h.L - s, o, n, r, {}));
            let l = n.chance(0.6)
                ? this.plateName(t, n, !1)
                : Gd(
                    Rd(n.pick([`realestate`, `bank`, `juku`, `clinic`])),
                    t.district,
                    n,
                    1,
                    t.seed >>> 3,
                  ).key,
              u = {
                kind: `plate`,
                key: l,
                bg: 2763306,
                fg: 15790320,
                style: Wf(l) % 2 ? 2 : 0,
              };
            e.sign.setTint(16777215).setInfo(0, 0, 50, 0);
            let d = Math.min(s - 0.4, 2.6);
            this.signQuad(
              e.sign,
              h,
              0.06,
              c + (s - d) / 2,
              c + (s + d) / 2,
              a + o + 0.2,
              a + o + 0.2 + d / 5.3,
              this.signs.acquire(u, r),
            );
          } else this.storefront(e, t, h, 0, h.L, o, n, r, {});
          if (
            (i.setTint(x),
            this.info(i, v, y, b, d + m, f),
            this.cells(
              i,
              h,
              0,
              0,
              h.L,
              a + o,
              l,
              v === V.RIBBON ? 3.6 : v === V.DEPATO ? 2.4 : 3.2,
              s,
              a + o,
            ),
            this.info(i, V.CONCRETE, 1, an.NONE, 0, 0),
            this.cells(i, h, 0, 0, h.L, l, l + u, 3.2, 3.2, l),
            m === p && g && n.chance(0.85))
          ) {
            let i = Rd(n.pick([`fashion`, `watch`, `jewelry`, `luxury`])),
              u = Gd(i, t.district, n, 1).key,
              d = Math.min(l - a - o - 2, 14),
              f = Math.max(1.4, d / 8),
              p = n.chance(0.5) ? 1.2 : h.L - 1.2 - f;
            if (
              (e.sign.setTint(16777215).setInfo(0, n.int(0, 255), 165, 0),
              this.signQuad(
                e.sign,
                h,
                0.15,
                p,
                p + f,
                a + o + 1.2,
                a + o + 1.2 + d,
                this.signs.acquire(
                  {
                    kind: `vbig`,
                    key: u,
                    bg: i.id === `fashion` ? 1118481 : i.bg,
                    fg: i.id === `fashion` ? 16777215 : i.fg,
                    style: 0,
                  },
                  r,
                ),
              ),
              n.chance(0.3) && h.L > 10 && c >= 5)
            ) {
              let t = Math.min(h.L * 0.45, 9),
                r = t * 0.56,
                i = p < h.L / 2 ? h.L - 1.2 - t : 1.2,
                c = a + o + s * 1.5;
              (e.screen.setTint(16777215).setInfo(0, n.int(0, 255), 0, 0),
                this.wallOn(e.screen, h, 0.2, i, i + t, c, c + r, 0, 1, 0, 1));
            }
          }
          m === p &&
            t.district === `akihabara` &&
            c >= 5 &&
            this.akibaSigns(e, t, h, n, r, n.chance(0.5));
        } else
          this.sideFace(e, t, h, m, l + u, l, x, n.int(0, 1), d, f, {
            tile: v,
            vars: y,
            mode: b,
            bay: v === V.RIBBON ? 3.6 : 3.2,
          });
      }
      (this.flatRoof(e, t, l, u, x),
        this.rooftop(
          e,
          t,
          { x0: t.x0 + 0.4, z0: t.z0 + 0.4, x1: t.x1 - 0.4, z1: t.z1 - 0.4 },
          l,
          n,
          r,
          Vf(t, p),
          t.neon > 0.3,
        ));
    }
    mansion(e, t, n, r) {
      let i = e.body,
        a = this.base,
        { gH: o, fh: s, floors: c } = t,
        l = a + o + (c - 1) * s,
        u = t.h - (o + (c - 1) * s),
        d = Hf(n, fu),
        f = n.int(110, 190),
        p = n.int(0, 255),
        m = this.streetSides(t)[0] ?? t.cover.indexOf(Math.min(...t.cover)),
        h = n.chance(0.62),
        g = n.chance(0.5) ? V.PARAPET_GLASS : V.PARAPET_SOLID,
        _ = n.chance(0.6) ? V.BALC : V.BALC2;
      for (let v = 0; v < 4; v++) {
        let y = Vf(t, v),
          b = (t.street >> v) & 1,
          x = v === (m + 2) % 4;
        b &&
          (v === m
            ? this.storefront(e, t, y, 0, y.L, o, n, r, {
                entrance: Math.min(4, y.L * 0.3),
              })
            : (i.setTint(d),
              this.info(i, V.PLINTH, 1, an.NONE, 0, 0),
              this.cells(i, y, 0, 0, y.L, 0, a + o, 3.2, o + a, 0)));
        let S = Math.max(a + o, b ? 0 : this.covered(t, v)),
          C = (v === m && h) || (x && !h),
          w = (v === m && !h) || (x && h);
        if (!b) {
          let e = Math.min(S, l);
          if ((C || w) && y.L > 5) {
            e = l;
            for (let t = 1; t < c; t++) {
              let n = a + o + (t - 1) * s;
              if (n + s > S) {
                e = n;
                break;
              }
            }
          }
          (i.setTint(Uf(d, 0.9)),
            this.info(i, V.SIDE, 1, an.RES, p, 0),
            this.cells(i, y, 0, 0, y.L, 0, e, 3.2, 3.2, 0));
        }
        if (C && y.L > 5)
          for (let e = 1; e < c; e++) {
            let t = a + o + (e - 1) * s;
            t + s <= S ||
              (i.setTint(d),
              this.info(i, _, 2, an.RES, p + e, f),
              this.cells(i, y, 0, 0, y.L, t, t + s, 3.4, s, t),
              i.setTint(g === V.PARAPET_GLASS ? 16777215 : d),
              this.info(i, g, 1, an.NONE, 0, 0),
              this.fbox(
                i,
                y,
                0.1,
                y.L - 0.1,
                0,
                1.15,
                t - 0.18,
                t + 1.05,
                Math.max(1, Math.round(y.L / 3.4)),
                1,
                !0,
                !0,
              ));
          }
        else if (w && y.L > 5)
          for (let e = 1; e < c; e++) {
            let t = a + o + (e - 1) * s;
            t + s <= S ||
              (i.setTint(d),
              this.info(i, V.CORRIDOR, 1, an.RES, p + e, f),
              this.cells(i, y, 0, 0, y.L, t, t + s, 3.6, s, t));
          }
        else
          (i.setTint(d),
            this.info(i, V.WIN, 4, an.RES, p + v, f),
            this.cells(i, y, 0, 0, y.L, S, l, 3.6, s, a + o));
        (i.setTint(d),
          this.info(i, V.CONCRETE, 1, an.NONE, 0, 0),
          this.cells(i, y, 0, 0, y.L, l, l + u, 3.2, 3.2, l));
      }
      (this.flatRoof(e, t, l, u, d),
        this.rooftop(
          e,
          t,
          { x0: t.x0 + 0.5, z0: t.z0 + 0.5, x1: t.x1 - 0.5, z1: t.z1 - 0.5 },
          l,
          n,
          r,
          null,
          !1,
        ));
    }
    shitamachi(e, t, n, r) {
      let i = e.body,
        a = this.base,
        { gH: o, fh: s, floors: c } = t,
        l = a + o + (c - 1) * s,
        u = t.h - (o + (c - 1) * s),
        d = n.next(),
        f = d < 0.45 ? V.WIN : d < 0.75 ? V.TIN_WIN : V.LATTICE_WIN,
        p = f === V.WIN ? V.SIDE : f === V.TIN_WIN ? V.TIN : V.BOARDS,
        m =
          f === V.TIN_WIN
            ? Hf(n, Dae)
            : f === V.LATTICE_WIN
              ? 16777215
              : Hf(n, hu),
        h = n.int(110, 200),
        g = n.int(0, 255),
        _ = this.streetSides(t),
        v = _[0] ?? 0,
        y =
          _.length > 0 &&
          (n.chance(0.25 + 0.6 * t.shops) || ((t.big >> v) & 1) == 1);
      for (let u = 0; u < 4; u++) {
        let d = Vf(t, u),
          _ = (t.street >> u) & 1;
        if (_ && u === v) {
          if (y)
            this.storefront(e, t, d, 0, d.L, o, n, r, { trad: n.chance(0.3) });
          else {
            i.setTint(16777215);
            let t = Math.min(d.L - 0.5, 2.4),
              r = n.chance(0.5) ? 0.3 : d.L - t - 0.3;
            (this.info(
              i,
              n.chance(0.55) ? V.LATTICE_DOOR : V.DOOR,
              1,
              an.SHOP,
              0,
              10,
            ),
              this.wallOn(i, d, 0, r, r + t, a, a + o, 0, 1, 0, 1),
              i.setTint(m),
              this.info(
                i,
                f === V.LATTICE_WIN ? V.LATTICE_WIN : V.SMALL,
                f === V.LATTICE_WIN ? 1 : 2,
                an.RES,
                g,
                h,
              ),
              r > 0.5 && this.cells(i, d, 0, 0, r, 0, a + o, 2.6, a + o, 0),
              d.L - r - t > 0.5 &&
                this.cells(i, d, 0, r + t, d.L, 0, a + o, 2.6, a + o, 0),
              this.detail > 0 &&
                this.plants(
                  e,
                  d,
                  r + t + 0.2,
                  Math.min(d.L - 0.2, r + t + 2.4),
                  n,
                ));
          }
          (i.setTint(m),
            this.info(i, f, f === V.WIN ? 4 : 1, an.RES, g, h),
            c > 1 && this.cells(i, d, 0, 0, d.L, a + o, l, 2.8, s, a + o));
        } else
          (i.setTint(m),
            this.info(i, _ ? f : p, _ && f === V.WIN ? 4 : 1, an.RES, g + u, h),
            this.cells(i, d, 0, 0, d.L, 0, l, 2.8, s, a + o));
      }
      let b = Vf(t, v).tz === 0;
      if (n.chance(0.82)) {
        let r = n.chance(0.55);
        this.gable(
          e,
          t,
          l,
          u,
          b,
          0.45,
          r ? V.KAWARA : V.TIN_ROOF,
          r ? Hf(n, gu) : Hf(n, Oae),
          p,
          m,
        );
      } else
        (this.flatRoof(e, t, l, 0.6, m),
          this.detail > 0 &&
            this.rooftop(
              e,
              t,
              {
                x0: t.x0 + 0.4,
                z0: t.z0 + 0.4,
                x1: t.x1 - 0.4,
                z1: t.z1 - 0.4,
              },
              l,
              n,
              r,
              null,
              !1,
            ));
    }
    plants(e, t, n, r, i) {
      let a = e.body;
      for (let e = n; e < r - 0.3; e += 0.35 + i.next() * 0.3) {
        let n = 0.12 + i.next() * 0.1,
          r = 0.22 + i.next() * 0.2,
          o = t.px + t.tx * e + t.nx * r,
          s = t.pz + t.tz * e + t.nz * r;
        (a.setTint(i.chance(0.5) ? 10115642 : 6975088),
          this.info(a, V.CONCRETE, 1, an.NONE, 0, 0),
          a.box(
            o - n,
            this.base,
            s - n,
            o + n,
            this.base + 0.3,
            s + n,
            0.2,
            0.1,
            0.2,
            31,
          ),
          a.setTint(i.chance(0.5) ? 4880954 : 5933626));
        let c = 0.3 + i.next() * 0.5;
        a.box(
          o - n * 1.3,
          this.base + 0.3,
          s - n * 1.3,
          o + n * 1.3,
          this.base + 0.3 + c,
          s + n * 1.3,
          0.2,
          0.2,
          0.2,
          31,
        );
      }
    }
    kura(e, t, n, r) {
      let i = e.body,
        a = this.base,
        { gH: o, fh: s } = t,
        c = a + o + s,
        l = t.h - (o + s),
        u = n.chance(0.5) ? 5920854 : 16777215,
        d = this.streetSides(t)[0] ?? 0;
      for (let l = 0; l < 4; l++) {
        let f = Vf(t, l);
        (t.street >> l) & 1 && l === d
          ? (n.chance(0.75) || ((t.big >> l) & 1) == 1
              ? this.storefront(e, t, f, 0, f.L, o, n, r, { trad: !0 })
              : (i.setTint(16777215),
                this.info(i, V.KURA_DOOR, 1, an.NONE, 0, 0),
                this.cells(i, f, 0, 0, f.L, 0, a + o, 3.4, a + o, 0)),
            this.pent(e, f, a + o + 0.35, 1, Hf(n, gu)),
            i.setTint(u),
            this.info(i, V.KURA_WIN, 2, an.RES, n.int(0, 255), 120),
            this.cells(i, f, 0, 0, f.L, a + o, c, 3.4, s, a + o))
          : (i.setTint(u),
            this.info(i, V.KURA_WALL, 1, an.NONE, 0, 0),
            this.cells(i, f, 0, 0, f.L, 0, c, 3.2, 3.4, 0));
      }
      let f = Vf(t, d);
      this.gable(
        e,
        t,
        c,
        l,
        f.tz === 0,
        0.7,
        V.KAWARA,
        Hf(n, gu),
        V.KURA_WALL,
        u,
      );
    }
    pent(e, t, n, r, i) {
      let a = e.body;
      (a.setTint(i), this.info(a, V.KAWARA, 1, an.NONE, 0, 0));
      let o = (e, n) => [
          t.px + t.tx * e + t.nx * n,
          t.pz + t.tz * e + t.nz * n,
        ],
        [s, c] = o(0, 0),
        [l, u] = o(t.L, 0),
        [d, f] = o(t.L, r),
        [p, m] = o(0, r),
        h = n - r * 0.45;
      (a.quad4(
        s,
        n + 0.15,
        c,
        p,
        h,
        m,
        d,
        h,
        f,
        l,
        n + 0.15,
        u,
        t.nx * 0.4,
        0.9,
        t.nz * 0.4,
        0,
        0,
        0,
        r / 3,
        t.L / 3,
        r / 3,
        t.L / 3,
        0,
      ),
        a.quad4(
          l,
          n,
          u,
          d,
          h - 0.08,
          f,
          p,
          h - 0.08,
          m,
          s,
          n,
          c,
          -t.nx * 0.4,
          -0.9,
          -t.nz * 0.4,
          0,
          0,
          0,
          0.1,
          0.1,
          0.1,
          0.1,
          0,
        ));
    }
    depato(e, t, n, r) {
      let i = e.body,
        a = this.base,
        { gH: o, fh: s, floors: c } = t,
        l = a + o + (c - 1) * s,
        u = t.h - (o + (c - 1) * s),
        d = Hf(n, _u),
        f = Hd(`depato`, t.district, n),
        p = f.key,
        m = f.bg;
      for (let h = 0; h < 4; h++) {
        let g = Vf(t, h);
        if ((t.street >> h) & 1) {
          let t = 0;
          for (let e = 0; e < g.L - 1; e += 6, t++) {
            let n = Math.min(g.L, e + 6);
            (i.setTint(16777215),
              t % 3 == 1
                ? this.info(i, V.GLASS_DOOR, 1, an.SHOP, un(`10:00-20:00`), 50)
                : this.info(i, V.BOUTIQUE, 1, an.SHOP, 0, 46),
              this.wallOn(
                i,
                g,
                0,
                e,
                n,
                a,
                a + o,
                0,
                Math.max(1, Math.round((n - e) / 4)),
                0,
                1,
              ));
          }
          (i.setTint(15262940),
            this.info(i, V.CONCRETE, 1, an.NONE, 0, 0),
            this.fbox(
              i,
              g,
              0,
              g.L,
              0,
              2.2,
              a + o - 0.6,
              a + o - 0.3,
              g.L / 3.2,
              0.1,
            ),
            i.setTint(d),
            i.setTint(16777215),
            this.info(i, V.STONE_WIN, 1, an.OFFICE, 17, 160),
            this.cells(i, g, 0, 0, g.L, a + o, a + o + s, 3.6, s, a + o),
            i.setTint(d),
            this.info(i, V.DEPATO, 1, an.LIT, 0, 0),
            this.cells(i, g, 0, 0, g.L, a + o + s, l + u, 2.4, 4.6, a + o),
            this.info(i, V.RIBBON, 2, an.OFFICE, 31, 150));
          let h = l - s;
          this.cells(i, g, 0.03, 0, g.L, h, h + s, 3.6, s, h);
          let _ = Math.min((c - 2) * s, 16),
            v = Math.max(1.6, _ / 8),
            y = this.signs.acquire(
              { kind: `vbig`, key: p, bg: m, fg: f.fg, style: 0 },
              r,
            );
          e.sign.setTint(16777215).setInfo(0, n.int(0, 255), 160, 0);
          for (let t of [1, g.L - 1 - v])
            this.signQuad(
              e.sign,
              g,
              0.25,
              t,
              t + v,
              a + o + 1.5,
              a + o + 1.5 + _,
              y,
            );
          let b = Math.min(g.L * 0.5, 24),
            x = { kind: `band`, key: p, bg: m, fg: f.fg, style: 0 };
          this.signQuad(
            e.sign,
            g,
            0.2,
            (g.L - b) / 2,
            (g.L + b) / 2,
            l - b / 8 - 0.3,
            l - 0.3,
            this.signs.acquire(x, r),
          );
        } else
          (i.setTint(d),
            this.info(i, V.DEPATO, 1, an.NONE, 0, 0),
            this.cells(i, g, 0, 0, g.L, 0, l + u, 2.4, 4.6, 0));
      }
      (this.flatRoof(e, t, l, u, d),
        this.rooftop(
          e,
          t,
          { x0: t.x0 + 2, z0: t.z0 + 2, x1: t.x1 - 2, z1: t.z1 - 2 },
          l,
          n,
          r,
          null,
          !1,
        ));
    }
  },
  Zf = [
    {
      id: `walkin-ramen-kanda`,
      kind: `ramen`,
      brand: `interior.ramen.name`,
      lot: [-9.6, -392.3, 7.7, -385.6],
      side: 3,
      hours: `11:00-02:00`,
      district: `kanda`,
      label: { ja: `らーめん 太田屋`, zh: `太田屋拉麵`, en: `Ota-ya Ramen` },
    },
    {
      id: `walkin-capsule-kanda`,
      kind: `capsule`,
      brand: `interior.capsule.name`,
      lot: [36.5, -385.4, 50.2, -359.5],
      side: 3,
      share: 0.34,
      hours: `24H`,
      district: `kanda`,
      label: {
        ja: `カプセル＆サウナ ニュー神田`,
        zh: `新神田膠囊旅館`,
        en: `Capsule & Sauna New Kanda`,
      },
    },
    {
      id: `walkin-karaoke-ueno`,
      kind: `karaoke`,
      brand: `カラオケまねきいぬ`,
      lot: [-226, -927.8, -206.9, -919.8],
      side: 1,
      hours: `24H`,
      district: `ueno`,
      label: {
        ja: `カラオケまねきいぬ 上野広小路店`,
        zh: `招財狗卡拉OK 上野廣小路店`,
        en: `Karaoke Maneki Inu, Ueno-hirokoji`,
      },
    },
    {
      id: `walkin-pachinko-shimbashi`,
      kind: `pachinko`,
      brand: `マルパン`,
      lot: [-54.6, 633.5, -31.9, 678.8],
      side: 0,
      share: 0.7,
      hours: `10:00-22:45`,
      district: `shimbashi`,
      label: {
        ja: `マルパン 新橋店`,
        zh: `Marupan 新橋店`,
        en: `Marupan, Shimbashi`,
      },
    },
    {
      id: `walkin-electronics-akiba`,
      kind: `electronics`,
      brand: `ソフトナップ`,
      lot: [-240.7, -756.5, -197.4, -730.6],
      side: 1,
      share: 0.36,
      hours: `11:00-20:00`,
      district: `akihabara`,
      label: {
        ja: `ソフトナップ 秋葉原裏通り店`,
        zh: `SoftNap 秋葉原後街店`,
        en: `SoftNap, Akihabara back street`,
      },
    },
    {
      id: `walkin-maid-akiba`,
      kind: `maid`,
      paint: `claw`,
      brand: `walkin.maid.name`,
      lot: [-173.1, -846.1, -161.9, -839.5],
      side: 3,
      hours: `11:00-22:00`,
      district: `akihabara`,
      label: {
        ja: `メイドカフェ ゆめいろポシェット`,
        zh: `夢色小包女僕咖啡`,
        en: `Maid Café Yumeiro Pochette`,
      },
    },
    {
      id: `walkin-kissa-okachimachi`,
      kind: `kissa`,
      paint: `bubbletea`,
      brand: `walkin.kissa.name`,
      lot: [-102.1, -971.5, -86.4, -962.4],
      side: 1,
      hours: `08:00-19:00`,
      district: `ameyoko`,
      label: { ja: `純喫茶 白樺`, zh: `白樺純喫茶`, en: `Kissa Shirakaba` },
    },
  ],
  Qf = {
    id: `walkin-sento-enraiyu`,
    site: `enrai-yu`,
    district: `ameyoko`,
    brand: `walkin.sento.name`,
    label: { ja: `燕来湯`, zh: `燕來湯`, en: `Enrai-yu` },
    door: { x: -151.25, z: -876.77, facing: Math.PI / 2 },
  },
  $f = {
    id: `walkin-callcentre-shimbashi`,
    site: `new-karasumori-bldg`,
    district: `shimbashi`,
    brand: `walkin.callcentre.company`,
    doorX: -10,
    mouthX: 2,
    label: {
      ja: `ネオンリンク（ニュー烏森ビル）`,
      zh: `霓虹連結電話詐騙據點（新烏森大樓）`,
      en: `NeonLink call centre (New Karasumori Bldg)`,
    },
    door: { x: -173.975, z: 632.25, facing: 0 },
  },
  ep = {
    id: `walkin-izakaya-yurakucho`,
    corridor: `jr-main`,
    s0: 944,
    side: -1,
    hours: `16:00-24:00`,
    district: `ginza`,
    brand: `interior.izakaya.name`,
    label: {
      ja: `やきとり 有楽家`,
      zh: `有樂家烤雞串`,
      en: `Yakitori Yurakuya`,
    },
  },
  tce = [0, Math.PI / 2, Math.PI, -Math.PI / 2];
