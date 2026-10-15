// tokyo/assets/region-tokyo-55J_WESF 326 — fillstyle
// Lines 117574-117912 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var kJ = { u: 16 / gJ, v: 1 - 16 / _J },
  YOe = class {
    s;
    sans;
    serif;
    ward;
    canvas;
    g;
    texture;
    constructor(e, t, n, r, i, o) {
      ((this.s = e), (this.sans = t), (this.serif = n), (this.ward = o));
      let [s, c] = xe(Math.round(gJ * e), Math.round(_J * e));
      (s.setAttribute(`lang`, r),
        (c.lang = r),
        (this.canvas = s),
        (this.g = c),
        (c.fillStyle = `#808080`),
        c.fillRect(0, 0, s.width, s.height),
        this.paint());
      let l = (this.texture = new ee(s));
      ((l.colorSpace = a),
        (l.anisotropy = i),
        (l.generateMipmaps = !0),
        (l.minFilter = x),
        (l.magFilter = E),
        (l.name = `tokyo-culture-atlas`));
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
        xJ.white,
        `#ffffff`,
      ),
        t(xJ.wood, (e, t, n) => IJ(e, t, n)),
        t(xJ.bulb, (e, t, n) => {
          let r = e.createRadialGradient(t / 2, n / 2, 1, t / 2, n / 2, t / 2);
          (r.addColorStop(0, `#fffbe8`),
            r.addColorStop(1, `#ffd890`),
            (e.fillStyle = r),
            e.fillRect(0, 0, t, n));
        }),
        t(xJ.stone, (e, t, n) => FJ(e, t, n, `#9a9890`, 0.18, 11)),
        t(xJ.lacquer, (e, t, n) => FJ(e, t, n, `#16100c`, 0.08, 12)),
        t(xJ.gold, (e, t, n) => FJ(e, t, n, `#c9a03a`, 0.12, 13)),
        [
          [`#d4141e`, `#f6f2ea`],
          [`#1f7a3a`, `#f6f2ea`],
          [`#1d4aa8`, `#f6f2ea`],
        ].forEach(([e, n], r) =>
          t(xJ[`awn${r}`], (t, r, i) => XOe(t, r, i, e, n)),
        ),
        t(xJ.fishA, (e, t, n) => RJ(e, t, n, `silver`, 21)),
        t(xJ.fishB, (e, t, n) => RJ(e, t, n, `tuna`, 22)),
        t(xJ.fishC, (e, t, n) => RJ(e, t, n, `crab`, 23)),
        t(xJ.fishD, (e, t, n) => RJ(e, t, n, `salmon`, 24)),
        t(xJ.driedA, (e, t, n) =>
          zJ(e, t, n, [`#c89a50`, `#e8d8b0`, `#8a5a2a`, `#f0e6c8`], 31, !0),
        ),
        t(xJ.driedB, (e, t, n) =>
          zJ(e, t, n, [`#3a4a2a`, `#2a2a22`, `#c8b080`, `#6a4a2a`], 32, !0),
        ),
        t(xJ.sweetsA, (e, t, n) =>
          zJ(
            e,
            t,
            n,
            [`#e8141e`, `#ffd200`, `#1d6ad8`, `#ff7ab0`, `#2aa84a`, `#ffffff`],
            33,
            !1,
          ),
        ),
        t(xJ.sweetsB, (e, t, n) =>
          zJ(
            e,
            t,
            n,
            [`#5a2a14`, `#3a1a0c`, `#d8b070`, `#c00018`, `#ffffff`],
            34,
            !1,
          ),
        ),
        t(xJ.fruitA, (e, t, n) => ZOe(e, t, n)),
        t(xJ.clothesA, (e, t, n) =>
          BJ(
            e,
            t,
            n,
            [`#4a5a2a`, `#2a2a2e`, `#6a4a2a`, `#1d2a52`, `#8a8a7a`, `#5a3a2a`],
            41,
          ),
        ),
        t(xJ.clothesB, (e, t, n) =>
          BJ(
            e,
            t,
            n,
            [`#e8e8e4`, `#1d4aa8`, `#d4141e`, `#2a2a2e`, `#f2c400`, `#2a5a9a`],
            42,
          ),
        ),
        t(xJ.produce, (e, t, n) => QOe(e, t, n)),
        t(xJ.foam, (e, t, n) => $Oe(e, t, n, this)),
        GOe.forEach(([e, n, r, i], a) =>
          t(SJ(a), (t, o, s) => eke(t, o, s, AJ(e, n), r, i, this, a)),
        ),
        KOe.forEach(([e, n, r], i) =>
          t(CJ(i), (t, i, a) => tke(t, i, a, AJ(e), n, r, this)),
        ),
        yJ.forEach(([e, n, r], i) =>
          t(wJ(i), (t, i, a) => nke(t, i, a, AJ(e), n, r, this)),
        ));
      for (let e = 0; e < 6; e++)
        t(TJ(e), (t, n, r) =>
          VJ(
            t,
            n,
            r,
            AJ(`culture.shrine.name.${e + 1}`),
            `#f2ead8`,
            `#1a1a1a`,
            this,
          ),
        );
      for (let e = 0; e < 3; e++)
        t(EJ(e), (t, n, r) =>
          VJ(
            t,
            n,
            r,
            AJ(`culture.jizo.name.${e + 1}`),
            `#e8e0cc`,
            `#2a2a2a`,
            this,
          ),
        );
      (t(xJ.gomiBoard, (e, t, n) => rke(e, t, n, this)),
        t(xJ.gomiNotice, (e, t, n) => ike(e, t, n, this)),
        t(xJ.netPile, (e, t, n) => WJ(e, t, n, !0)),
        t(xJ.bags, (e, t, n) => WJ(e, t, n, !1)),
        t(xJ.netFolded, (e, t, n) => ake(e, t, n, `#2a5ac8`, 6)),
        t(xJ.hokoten, (e, t, n) => oke(e, t, n, this)),
        t(xJ.saisen, (e, t, n) => {
          (IJ(e, t, n, `#5a3a1c`),
            (e.fillStyle = `#f2ead8`),
            (e.font = jJ(this, 22, 900, !0)),
            (e.textAlign = `center`),
            (e.textBaseline = `middle`),
            MJ(e, AJ(`culture.shrine.saisen`), t / 2, n / 2 + 1, t - 8));
        }));
      let n = (e, n, r) => t(e, (e, t, i) => ske(e, t, i, n, r, this)),
        r = ui(`YUHI`);
      (n(xJ.crate0, `#f2c400`, `#c8141e`),
        n(xJ.crate1, `#d4141e`, `#ffffff`),
        n(xJ.crate2, (r?.colors?.[2], `#e8e8e4`), `#c8141e`),
        bJ.forEach(([e, n, r], i) =>
          t(DJ(i), (t, i, a) => cke(t, i, a, AJ(e), n, r, this)),
        ),
        t(xJ.noren, (e, t, n) => lke(e, t, n, AJ(`culture.yatai.oden`), this)),
        t(xJ.menu, (e, t, n) => uke(e, t, n, this)),
        t(xJ.gate, (e, t, n) => dke(e, t, n, this)),
        t(xJ.banner, (e, t, n) => fke(e, t, n, this)),
        t(xJ.fence, (e, t, n) => {
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
        t(xJ.tiles, (e, t, n) => pke(e, t, n)),
        t(xJ.festSake, (e, t, n) =>
          KJ(e, t, n, AJ(`trade.izakaya.sign.sake`), this, !0),
        ),
        t(xJ.festYaki, (e, t, n) =>
          KJ(e, t, n, AJ(`trade.yakitori.sign.yakitori`), this, !1),
        ),
        t(xJ.festPlain, (e, t, n) => KJ(e, t, n, ``, this, !1)),
        t(xJ.parkMap, (e, t, n) => mke(e, t, n, this)));
      let i = (e, n, r) =>
        t(e, (e, t, i) => {
          ((e.fillStyle = r),
            e.fillRect(0, 0, t, i),
            (e.fillStyle = `#ffffff`),
            (e.font = jJ(this, 15, 900)),
            (e.textAlign = `center`),
            (e.textBaseline = `middle`),
            MJ(e, AJ(n), t / 2, i / 2 + 1, t - 8));
        });
      (i(xJ.binMoeru, `common.facility.moeru`, `#c8321e`),
        i(xJ.binKan, `common.facility.kan-bin`, `#1d5ab0`),
        i(xJ.binPet, `common.facility.petbottle`, `#2a8a3a`),
        t(xJ.bedSign, (e, t, n) => {
          ((e.fillStyle = `#f4f2ea`),
            e.fillRect(0, 0, t, n),
            (e.fillStyle = `#2a6a3a`),
            e.fillRect(0, 0, t, 8),
            e.fillRect(0, n - 4, t, 4),
            (e.font = jJ(this, 13, 700)),
            (e.textAlign = `center`),
            (e.textBaseline = `middle`),
            MJ(e, AJ(`culture.park.bed`), t / 2, n / 2 + 2, t - 10));
        }),
        t(xJ.tarpBlue, (e, t, n) => qJ(e, t, n, `#2f63b8`, 61)),
        t(xJ.tarpGreen, (e, t, n) => qJ(e, t, n, `#4d6650`, 62)),
        t(xJ.smokeSign, (e, t, n) => {
          ((e.fillStyle = `#2a6a3a`),
            e.fillRect(0, 0, t, n),
            (e.fillStyle = `#ffffff`),
            (e.font = jJ(this, 26, 900)),
            (e.textAlign = `center`),
            (e.textBaseline = `middle`),
            MJ(e, AJ(`life.smoke.sign`), t / 2, n * 0.38, t - 12),
            (e.font = `700 10px system-ui, sans-serif`),
            MJ(e, `SMOKING AREA`, t / 2, n * 0.78, t - 12));
        }),
        t(xJ.kyaku, (e, t, n) => {
          ((e.fillStyle = `#ffffff`),
            e.fillRect(0, 0, t, n),
            (e.strokeStyle = `#c8141e`),
            (e.lineWidth = 4),
            e.strokeRect(3, 3, t - 6, n - 6),
            (e.fillStyle = `#c8141e`),
            NJ(
              e,
              AJ(`life.kyakuhiki.sign`),
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
            (e.font = jJ(this, 11, 700)),
            (e.textAlign = `center`),
            (e.textBaseline = `middle`),
            MJ(e, AJ(`life.kyakuhiki.ward`), t / 2, n - 13, t - 10));
        }),
        t(xJ.kasa, (e, t, n) => {
          ((e.fillStyle = `#1d4aa8`),
            e.fillRect(0, 0, t, n),
            (e.fillStyle = `#ffffff`),
            (e.font = jJ(this, 13, 900)),
            (e.textAlign = `center`),
            (e.textBaseline = `middle`),
            MJ(e, AJ(`life.kasa.bag`), t / 2, n / 2, t - 8));
        }));
      let a = (e, n, r) =>
        t(e, (e, t, i) => {
          ((e.fillStyle = r),
            e.fillRect(0, 0, t, i),
            (e.fillStyle = `#ffffff`),
            (e.font = jJ(this, 15, 900)),
            (e.textAlign = `center`),
            (e.textBaseline = `middle`),
            MJ(e, AJ(n), t / 2, i / 2 + 1, t - 6));
        });
      (a(xJ.vendHot, `life.vending.hot`, `#d0141e`),
        a(xJ.vendCold, `life.vending.cold`, `#1d5ab0`));
      let o = (e, n, r, i) =>
        t(e, (e, t, a) => {
          (IJ(e, t, a, r),
            (e.fillStyle = i),
            (e.font = jJ(this, 16, 900, !0)),
            (e.textAlign = `center`),
            (e.textBaseline = `middle`),
            MJ(e, AJ(n), t / 2, a / 2 + 1, t - 8));
        });
      (o(xJ.plateOpen, `common.door.eigyochu`, `#f2e6c8`, `#c8141e`),
        o(xJ.plateJunbi, `common.door.junbichu`, `#f2e6c8`, `#1a1a1a`),
        o(xJ.plateTeikyu, `common.door.teikyubi`, `#ffffff`, `#1a1a1a`),
        o(xJ.plateKyugyo, `common.door.honjitsu-kyugyo`, `#ffffff`, `#c8141e`),
        t(xJ.leaves, (e, t, n) => hke(e, t, n, 71)));
      for (let [e, n, r, i, a] of qOe)
        t(xJ[e], (e, t, o) =>
          gke(
            e,
            t,
            o,
            AJ(n),
            r.map((e) => AJ(e)),
            i,
            a,
            this,
          ),
        );
      for (let [e, n, r] of JOe)
        t(xJ[e], (e, t, i) => _ke(e, t, i, n ? AJ(n) : ``, r, this));
      (t(xJ.shutter, (e, t, n) => {
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
function AJ(e, t) {
  return So(e) ? (t && Object.keys(t).length ? bo(e, t) : L(e)) : ``;
}
function jJ(e, t, n = 700, r = !1) {
  return `${n} ${t}px ${r ? e.serif : e.sans}`;
}
function MJ(e, t, n, r, i) {
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
