// tokyo/assets/region-tokyo-A7LxHjud 326 — fillstyle
// Lines 117665-118003 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var AJ = { u: 16 / _J, v: 1 - 16 / vJ },
  lke = class {
    s;
    sans;
    serif;
    ward;
    canvas;
    g;
    texture;
    constructor(e, t, n, r, i, a) {
      ((this.s = e), (this.sans = t), (this.serif = n), (this.ward = a));
      let [o, s] = be(Math.round(_J * e), Math.round(vJ * e));
      (o.setAttribute(`lang`, r),
        (s.lang = r),
        (this.canvas = o),
        (this.g = s),
        (s.fillStyle = `#808080`),
        s.fillRect(0, 0, o.width, o.height),
        this.paint());
      let c = (this.texture = new te(o));
      ((c.colorSpace = u),
        (c.anisotropy = i),
        (c.generateMipmaps = !0),
        (c.minFilter = C),
        (c.magFilter = T),
        (c.name = `tokyo-culture-atlas`));
    }
    repaint() {
      (this.paint(), (this.texture.needsUpdate = !0));
    }
    paint() {
      let e = this.g;
      (e.save(), e.scale(this.s, this.s));
      let t = (t, n) => {
        (e.save(),
          e.beginPath(),
          e.rect(t.x, t.y, t.w, t.h),
          e.clip(),
          e.translate(t.x, t.y),
          n(e, t.w, t.h),
          e.restore());
      };
      (((e, n) =>
        t(e, (e, t, r) => ((e.fillStyle = n), e.fillRect(0, 0, t, r))))(
        SJ.white,
        `#ffffff`,
      ),
        t(SJ.wood, (e, t, n) => LJ(e, t, n)),
        t(SJ.bulb, (e, t, n) => {
          let r = e.createRadialGradient(t / 2, n / 2, 1, t / 2, n / 2, t / 2);
          (r.addColorStop(0, `#fffbe8`),
            r.addColorStop(1, `#ffd890`),
            (e.fillStyle = r),
            e.fillRect(0, 0, t, n));
        }),
        t(SJ.stone, (e, t, n) => IJ(e, t, n, `#9a9890`, 0.18, 11)),
        t(SJ.lacquer, (e, t, n) => IJ(e, t, n, `#16100c`, 0.08, 12)),
        t(SJ.gold, (e, t, n) => IJ(e, t, n, `#c9a03a`, 0.12, 13)),
        [
          [`#d4141e`, `#f6f2ea`],
          [`#1f7a3a`, `#f6f2ea`],
          [`#1d4aa8`, `#f6f2ea`],
        ].forEach(([e, n], r) =>
          t(SJ[`awn${r}`], (t, r, i) => uke(t, r, i, e, n)),
        ),
        t(SJ.fishA, (e, t, n) => zJ(e, t, n, `silver`, 21)),
        t(SJ.fishB, (e, t, n) => zJ(e, t, n, `tuna`, 22)),
        t(SJ.fishC, (e, t, n) => zJ(e, t, n, `crab`, 23)),
        t(SJ.fishD, (e, t, n) => zJ(e, t, n, `salmon`, 24)),
        t(SJ.driedA, (e, t, n) =>
          BJ(e, t, n, [`#c89a50`, `#e8d8b0`, `#8a5a2a`, `#f0e6c8`], 31, !0),
        ),
        t(SJ.driedB, (e, t, n) =>
          BJ(e, t, n, [`#3a4a2a`, `#2a2a22`, `#c8b080`, `#6a4a2a`], 32, !0),
        ),
        t(SJ.sweetsA, (e, t, n) =>
          BJ(
            e,
            t,
            n,
            [`#e8141e`, `#ffd200`, `#1d6ad8`, `#ff7ab0`, `#2aa84a`, `#ffffff`],
            33,
            !1,
          ),
        ),
        t(SJ.sweetsB, (e, t, n) =>
          BJ(
            e,
            t,
            n,
            [`#5a2a14`, `#3a1a0c`, `#d8b070`, `#c00018`, `#ffffff`],
            34,
            !1,
          ),
        ),
        t(SJ.fruitA, (e, t, n) => dke(e, t, n)),
        t(SJ.clothesA, (e, t, n) =>
          VJ(
            e,
            t,
            n,
            [`#4a5a2a`, `#2a2a2e`, `#6a4a2a`, `#1d2a52`, `#8a8a7a`, `#5a3a2a`],
            41,
          ),
        ),
        t(SJ.clothesB, (e, t, n) =>
          VJ(
            e,
            t,
            n,
            [`#e8e8e4`, `#1d4aa8`, `#d4141e`, `#2a2a2e`, `#f2c400`, `#2a5a9a`],
            42,
          ),
        ),
        t(SJ.produce, (e, t, n) => fke(e, t, n)),
        t(SJ.foam, (e, t, n) => pke(e, t, n, this)),
        ake.forEach(([e, n, r, i], a) =>
          t(CJ(a), (t, o, s) => mke(t, o, s, jJ(e, n), r, i, this, a)),
        ),
        oke.forEach(([e, n, r], i) =>
          t(wJ(i), (t, i, a) => hke(t, i, a, jJ(e), n, r, this)),
        ),
        bJ.forEach(([e, n, r], i) =>
          t(TJ(i), (t, i, a) => gke(t, i, a, jJ(e), n, r, this)),
        ));
      for (let e = 0; e < 6; e++)
        t(EJ(e), (t, n, r) =>
          HJ(
            t,
            n,
            r,
            jJ(`culture.shrine.name.${e + 1}`),
            `#f2ead8`,
            `#1a1a1a`,
            this,
          ),
        );
      for (let e = 0; e < 3; e++)
        t(DJ(e), (t, n, r) =>
          HJ(
            t,
            n,
            r,
            jJ(`culture.jizo.name.${e + 1}`),
            `#e8e0cc`,
            `#2a2a2a`,
            this,
          ),
        );
      (t(SJ.gomiBoard, (e, t, n) => _ke(e, t, n, this)),
        t(SJ.gomiNotice, (e, t, n) => vke(e, t, n, this)),
        t(SJ.netPile, (e, t, n) => GJ(e, t, n, !0)),
        t(SJ.bags, (e, t, n) => GJ(e, t, n, !1)),
        t(SJ.netFolded, (e, t, n) => yke(e, t, n, `#2a5ac8`, 6)),
        t(SJ.hokoten, (e, t, n) => bke(e, t, n, this)),
        t(SJ.saisen, (e, t, n) => {
          (LJ(e, t, n, `#5a3a1c`),
            (e.fillStyle = `#f2ead8`),
            (e.font = MJ(this, 22, 900, !0)),
            (e.textAlign = `center`),
            (e.textBaseline = `middle`),
            NJ(e, jJ(`culture.shrine.saisen`), t / 2, n / 2 + 1, t - 8));
        }));
      let n = (e, n, r) => t(e, (e, t, i) => xke(e, t, i, n, r, this)),
        r = ui(`YUHI`);
      (n(SJ.crate0, `#f2c400`, `#c8141e`),
        n(SJ.crate1, `#d4141e`, `#ffffff`),
        n(SJ.crate2, (r?.colors?.[2], `#e8e8e4`), `#c8141e`),
        xJ.forEach(([e, n, r], i) =>
          t(OJ(i), (t, i, a) => Ske(t, i, a, jJ(e), n, r, this)),
        ),
        t(SJ.noren, (e, t, n) => Cke(e, t, n, jJ(`culture.yatai.oden`), this)),
        t(SJ.menu, (e, t, n) => wke(e, t, n, this)),
        t(SJ.gate, (e, t, n) => Tke(e, t, n, this)),
        t(SJ.banner, (e, t, n) => Eke(e, t, n, this)),
        t(SJ.fence, (e, t, n) => {
          ((e.fillStyle = `#6f7a72`), e.fillRect(0, 0, t, n));
          let r = e.createLinearGradient(0, 0, 0, n);
          (r.addColorStop(0, `rgba(255,255,255,0.15)`),
            r.addColorStop(1, `rgba(0,0,0,0.25)`),
            (e.fillStyle = r),
            e.fillRect(0, 0, t, n),
            (e.strokeStyle = `#2f6a46`),
            (e.lineWidth = 1.5));
          for (let r = 0; r <= t; r += 6)
            (e.beginPath(), e.moveTo(r, 0), e.lineTo(r, n), e.stroke());
          for (let r = 0; r <= n; r += 6)
            (e.beginPath(), e.moveTo(0, r), e.lineTo(t, r), e.stroke());
        }),
        t(SJ.tiles, (e, t, n) => Dke(e, t, n)),
        t(SJ.festSake, (e, t, n) =>
          qJ(e, t, n, jJ(`trade.izakaya.sign.sake`), this, !0),
        ),
        t(SJ.festYaki, (e, t, n) =>
          qJ(e, t, n, jJ(`trade.yakitori.sign.yakitori`), this, !1),
        ),
        t(SJ.festPlain, (e, t, n) => qJ(e, t, n, ``, this, !1)),
        t(SJ.parkMap, (e, t, n) => Oke(e, t, n, this)));
      let i = (e, n, r) =>
        t(e, (e, t, i) => {
          ((e.fillStyle = r),
            e.fillRect(0, 0, t, i),
            (e.fillStyle = `#ffffff`),
            (e.font = MJ(this, 15, 900)),
            (e.textAlign = `center`),
            (e.textBaseline = `middle`),
            NJ(e, jJ(n), t / 2, i / 2 + 1, t - 8));
        });
      (i(SJ.binMoeru, `common.facility.moeru`, `#c8321e`),
        i(SJ.binKan, `common.facility.kan-bin`, `#1d5ab0`),
        i(SJ.binPet, `common.facility.petbottle`, `#2a8a3a`),
        t(SJ.bedSign, (e, t, n) => {
          ((e.fillStyle = `#f4f2ea`),
            e.fillRect(0, 0, t, n),
            (e.fillStyle = `#2a6a3a`),
            e.fillRect(0, 0, t, 8),
            e.fillRect(0, n - 4, t, 4),
            (e.font = MJ(this, 13, 700)),
            (e.textAlign = `center`),
            (e.textBaseline = `middle`),
            NJ(e, jJ(`culture.park.bed`), t / 2, n / 2 + 2, t - 10));
        }),
        t(SJ.tarpBlue, (e, t, n) => JJ(e, t, n, `#2f63b8`, 61)),
        t(SJ.tarpGreen, (e, t, n) => JJ(e, t, n, `#4d6650`, 62)),
        t(SJ.smokeSign, (e, t, n) => {
          ((e.fillStyle = `#2a6a3a`),
            e.fillRect(0, 0, t, n),
            (e.fillStyle = `#ffffff`),
            (e.font = MJ(this, 26, 900)),
            (e.textAlign = `center`),
            (e.textBaseline = `middle`),
            NJ(e, jJ(`life.smoke.sign`), t / 2, n * 0.38, t - 12),
            (e.font = `700 10px system-ui, sans-serif`),
            NJ(e, `SMOKING AREA`, t / 2, n * 0.78, t - 12));
        }),
        t(SJ.kyaku, (e, t, n) => {
          ((e.fillStyle = `#ffffff`),
            e.fillRect(0, 0, t, n),
            (e.strokeStyle = `#c8141e`),
            (e.lineWidth = 4),
            e.strokeRect(3, 3, t - 6, n - 6),
            (e.fillStyle = `#c8141e`),
            PJ(
              e,
              jJ(`life.kyakuhiki.sign`),
              6,
              6,
              t - 12,
              n - 30,
              this,
              900,
              !1,
              15,
            ),
            (e.fillStyle = `#1a1a1a`),
            (e.font = MJ(this, 11, 700)),
            (e.textAlign = `center`),
            (e.textBaseline = `middle`),
            NJ(e, jJ(`life.kyakuhiki.ward`), t / 2, n - 13, t - 10));
        }),
        t(SJ.kasa, (e, t, n) => {
          ((e.fillStyle = `#1d4aa8`),
            e.fillRect(0, 0, t, n),
            (e.fillStyle = `#ffffff`),
            (e.font = MJ(this, 13, 900)),
            (e.textAlign = `center`),
            (e.textBaseline = `middle`),
            NJ(e, jJ(`life.kasa.bag`), t / 2, n / 2, t - 8));
        }));
      let a = (e, n, r) =>
        t(e, (e, t, i) => {
          ((e.fillStyle = r),
            e.fillRect(0, 0, t, i),
            (e.fillStyle = `#ffffff`),
            (e.font = MJ(this, 15, 900)),
            (e.textAlign = `center`),
            (e.textBaseline = `middle`),
            NJ(e, jJ(n), t / 2, i / 2 + 1, t - 6));
        });
      (a(SJ.vendHot, `life.vending.hot`, `#d0141e`),
        a(SJ.vendCold, `life.vending.cold`, `#1d5ab0`));
      let o = (e, n, r, i) =>
        t(e, (e, t, a) => {
          (LJ(e, t, a, r),
            (e.fillStyle = i),
            (e.font = MJ(this, 16, 900, !0)),
            (e.textAlign = `center`),
            (e.textBaseline = `middle`),
            NJ(e, jJ(n), t / 2, a / 2 + 1, t - 8));
        });
      (o(SJ.plateOpen, `common.door.eigyochu`, `#f2e6c8`, `#c8141e`),
        o(SJ.plateJunbi, `common.door.junbichu`, `#f2e6c8`, `#1a1a1a`),
        o(SJ.plateTeikyu, `common.door.teikyubi`, `#ffffff`, `#1a1a1a`),
        o(SJ.plateKyugyo, `common.door.honjitsu-kyugyo`, `#ffffff`, `#c8141e`),
        t(SJ.leaves, (e, t, n) => kke(e, t, n, 71)));
      for (let [e, n, r, i, a] of ske)
        t(SJ[e], (e, t, o) =>
          Ake(
            e,
            t,
            o,
            jJ(n),
            r.map((e) => jJ(e)),
            i,
            a,
            this,
          ),
        );
      for (let [e, n, r] of cke)
        t(SJ[e], (e, t, i) => jke(e, t, i, n ? jJ(n) : ``, r, this));
      (t(SJ.shutter, (e, t, n) => {
        ((e.fillStyle = `#b4b6b4`), e.fillRect(0, 0, t, n));
        for (let r = 0; r < n; r += 2)
          ((e.fillStyle =
            r % 4 ? `rgba(0,0,0,0.16)` : `rgba(255,255,255,0.18)`),
            e.fillRect(0, r, t, 1));
        ((e.fillStyle = `rgba(40,30,20,0.12)`), e.fillRect(0, n - 5, t, 5));
      }),
        e.restore());
    }
  };
function jJ(e, t) {
  return So(e) ? (t && Object.keys(t).length ? bo(e, t) : L(e)) : ``;
}
function MJ(e, t, n = 700, r = !1) {
  return `${n} ${t}px ${r ? e.serif : e.sans}`;
}
function NJ(e, t, n, r, i) {
  let a = e.measureText(t).width;
  if (a <= i || a === 0) {
    e.fillText(t, n, r);
    return;
  }
  (e.save(),
    e.translate(n, r),
    e.scale(i / a, 1),
    e.fillText(t, 0, 0),
    e.restore());
}
