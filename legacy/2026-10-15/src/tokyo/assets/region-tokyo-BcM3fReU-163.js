// tokyo/assets/region-tokyo-BcM3fReU 163 — fillstyle
// Lines 68875-69213 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var bz = { u: 16 / rz, v: 1 - 16 / iz },
  xz = class {
    s;
    sans;
    serif;
    ward;
    canvas;
    g;
    texture;
    constructor(e, t, n, r, i, a) {
      ((this.s = e), (this.sans = t), (this.serif = n), (this.ward = a));
      let [o, s] = ye(Math.round(rz * e), Math.round(iz * e));
      (o.setAttribute(`lang`, r),
        (s.lang = r),
        (this.canvas = o),
        (this.g = s),
        (s.fillStyle = `#808080`),
        s.fillRect(0, 0, o.width, o.height),
        this.paint());
      let c = (this.texture = new A(o));
      ((c.colorSpace = f),
        (c.anisotropy = i),
        (c.generateMipmaps = !0),
        (c.minFilter = S),
        (c.magFilter = E),
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
        uz.white,
        `#ffffff`,
      ),
        t(uz.wood, (e, t, n) => Oz(e, t, n)),
        t(uz.bulb, (e, t, n) => {
          let r = e.createRadialGradient(t / 2, n / 2, 1, t / 2, n / 2, t / 2);
          (r.addColorStop(0, `#fffbe8`),
            r.addColorStop(1, `#ffd890`),
            (e.fillStyle = r),
            e.fillRect(0, 0, t, n));
        }),
        t(uz.stone, (e, t, n) => Dz(e, t, n, `#9a9890`, 0.18, 11)),
        t(uz.lacquer, (e, t, n) => Dz(e, t, n, `#16100c`, 0.08, 12)),
        t(uz.gold, (e, t, n) => Dz(e, t, n, `#c9a03a`, 0.12, 13)),
        [
          [`#d4141e`, `#f6f2ea`],
          [`#1f7a3a`, `#f6f2ea`],
          [`#1d4aa8`, `#f6f2ea`],
        ].forEach(([e, n], r) =>
          t(uz[`awn${r}`], (t, r, i) => Az(t, r, i, e, n)),
        ),
        t(uz.fishA, (e, t, n) => jz(e, t, n, `silver`, 21)),
        t(uz.fishB, (e, t, n) => jz(e, t, n, `tuna`, 22)),
        t(uz.fishC, (e, t, n) => jz(e, t, n, `crab`, 23)),
        t(uz.fishD, (e, t, n) => jz(e, t, n, `salmon`, 24)),
        t(uz.driedA, (e, t, n) =>
          Mz(e, t, n, [`#c89a50`, `#e8d8b0`, `#8a5a2a`, `#f0e6c8`], 31, !0),
        ),
        t(uz.driedB, (e, t, n) =>
          Mz(e, t, n, [`#3a4a2a`, `#2a2a22`, `#c8b080`, `#6a4a2a`], 32, !0),
        ),
        t(uz.sweetsA, (e, t, n) =>
          Mz(
            e,
            t,
            n,
            [`#e8141e`, `#ffd200`, `#1d6ad8`, `#ff7ab0`, `#2aa84a`, `#ffffff`],
            33,
            !1,
          ),
        ),
        t(uz.sweetsB, (e, t, n) =>
          Mz(
            e,
            t,
            n,
            [`#5a2a14`, `#3a1a0c`, `#d8b070`, `#c00018`, `#ffffff`],
            34,
            !1,
          ),
        ),
        t(uz.fruitA, (e, t, n) => Nz(e, t, n)),
        t(uz.clothesA, (e, t, n) =>
          Pz(
            e,
            t,
            n,
            [`#4a5a2a`, `#2a2a2e`, `#6a4a2a`, `#1d2a52`, `#8a8a7a`, `#5a3a2a`],
            41,
          ),
        ),
        t(uz.clothesB, (e, t, n) =>
          Pz(
            e,
            t,
            n,
            [`#e8e8e4`, `#1d4aa8`, `#d4141e`, `#2a2a2e`, `#f2c400`, `#2a5a9a`],
            42,
          ),
        ),
        t(uz.produce, (e, t, n) => Fz(e, t, n)),
        t(uz.foam, (e, t, n) => Iz(e, t, n, this)),
        oz.forEach(([e, n, r, i], a) =>
          t(pz(a), (t, o, s) => Lz(t, o, s, Sz(e, n), r, i, this, a)),
        ),
        sz.forEach(([e, n, r], i) =>
          t(mz(i), (t, i, a) => Rz(t, i, a, Sz(e), n, r, this)),
        ),
        cz.forEach(([e, n, r], i) =>
          t(hz(i), (t, i, a) => zz(t, i, a, Sz(e), n, r, this)),
        ));
      for (let e = 0; e < 6; e++)
        t(gz(e), (t, n, r) =>
          Bz(
            t,
            n,
            r,
            Sz(`culture.shrine.name.${e + 1}`),
            `#f2ead8`,
            `#1a1a1a`,
            this,
          ),
        );
      for (let e = 0; e < 3; e++)
        t(_z(e), (t, n, r) =>
          Bz(
            t,
            n,
            r,
            Sz(`culture.jizo.name.${e + 1}`),
            `#e8e0cc`,
            `#2a2a2a`,
            this,
          ),
        );
      (t(uz.gomiBoard, (e, t, n) => Vz(e, t, n, this)),
        t(uz.gomiNotice, (e, t, n) => Uz(e, t, n, this)),
        t(uz.netPile, (e, t, n) => Gz(e, t, n, !0)),
        t(uz.bags, (e, t, n) => Gz(e, t, n, !1)),
        t(uz.netFolded, (e, t, n) => qz(e, t, n, `#2a5ac8`, 6)),
        t(uz.hokoten, (e, t, n) => Jz(e, t, n, this)),
        t(uz.saisen, (e, t, n) => {
          (Oz(e, t, n, `#5a3a1c`),
            (e.fillStyle = `#f2ead8`),
            (e.font = Cz(this, 22, 900, !0)),
            (e.textAlign = `center`),
            (e.textBaseline = `middle`),
            wz(e, Sz(`culture.shrine.saisen`), t / 2, n / 2 + 1, t - 8));
        }));
      let n = (e, n, r) => t(e, (e, t, i) => Yz(e, t, i, n, r, this)),
        r = Wa(`YUHI`);
      (n(uz.crate0, `#f2c400`, `#c8141e`),
        n(uz.crate1, `#d4141e`, `#ffffff`),
        n(uz.crate2, (r?.colors?.[2], `#e8e8e4`), `#c8141e`),
        lz.forEach(([e, n, r], i) =>
          t(vz(i), (t, i, a) => Xz(t, i, a, Sz(e), n, r, this)),
        ),
        t(uz.noren, (e, t, n) => Zz(e, t, n, Sz(`culture.yatai.oden`), this)),
        t(uz.menu, (e, t, n) => Qz(e, t, n, this)),
        t(uz.gate, (e, t, n) => $z(e, t, n, this)),
        t(uz.banner, (e, t, n) => eB(e, t, n, this)),
        t(uz.fence, (e, t, n) => {
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
        t(uz.tiles, (e, t, n) => tB(e, t, n)),
        t(uz.festSake, (e, t, n) =>
          nB(e, t, n, Sz(`trade.izakaya.sign.sake`), this, !0),
        ),
        t(uz.festYaki, (e, t, n) =>
          nB(e, t, n, Sz(`trade.yakitori.sign.yakitori`), this, !1),
        ),
        t(uz.festPlain, (e, t, n) => nB(e, t, n, ``, this, !1)),
        t(uz.parkMap, (e, t, n) => rB(e, t, n, this)));
      let i = (e, n, r) =>
        t(e, (e, t, i) => {
          ((e.fillStyle = r),
            e.fillRect(0, 0, t, i),
            (e.fillStyle = `#ffffff`),
            (e.font = Cz(this, 15, 900)),
            (e.textAlign = `center`),
            (e.textBaseline = `middle`),
            wz(e, Sz(n), t / 2, i / 2 + 1, t - 8));
        });
      (i(uz.binMoeru, `common.facility.moeru`, `#c8321e`),
        i(uz.binKan, `common.facility.kan-bin`, `#1d5ab0`),
        i(uz.binPet, `common.facility.petbottle`, `#2a8a3a`),
        t(uz.bedSign, (e, t, n) => {
          ((e.fillStyle = `#f4f2ea`),
            e.fillRect(0, 0, t, n),
            (e.fillStyle = `#2a6a3a`),
            e.fillRect(0, 0, t, 8),
            e.fillRect(0, n - 4, t, 4),
            (e.font = Cz(this, 13, 700)),
            (e.textAlign = `center`),
            (e.textBaseline = `middle`),
            wz(e, Sz(`culture.park.bed`), t / 2, n / 2 + 2, t - 10));
        }),
        t(uz.tarpBlue, (e, t, n) => iB(e, t, n, `#2f63b8`, 61)),
        t(uz.tarpGreen, (e, t, n) => iB(e, t, n, `#4d6650`, 62)),
        t(uz.smokeSign, (e, t, n) => {
          ((e.fillStyle = `#2a6a3a`),
            e.fillRect(0, 0, t, n),
            (e.fillStyle = `#ffffff`),
            (e.font = Cz(this, 26, 900)),
            (e.textAlign = `center`),
            (e.textBaseline = `middle`),
            wz(e, Sz(`life.smoke.sign`), t / 2, n * 0.38, t - 12),
            (e.font = `700 10px system-ui, sans-serif`),
            wz(e, `SMOKING AREA`, t / 2, n * 0.78, t - 12));
        }),
        t(uz.kyaku, (e, t, n) => {
          ((e.fillStyle = `#ffffff`),
            e.fillRect(0, 0, t, n),
            (e.strokeStyle = `#c8141e`),
            (e.lineWidth = 4),
            e.strokeRect(3, 3, t - 6, n - 6),
            (e.fillStyle = `#c8141e`),
            Tz(
              e,
              Sz(`life.kyakuhiki.sign`),
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
            (e.font = Cz(this, 11, 700)),
            (e.textAlign = `center`),
            (e.textBaseline = `middle`),
            wz(e, Sz(`life.kyakuhiki.ward`), t / 2, n - 13, t - 10));
        }),
        t(uz.kasa, (e, t, n) => {
          ((e.fillStyle = `#1d4aa8`),
            e.fillRect(0, 0, t, n),
            (e.fillStyle = `#ffffff`),
            (e.font = Cz(this, 13, 900)),
            (e.textAlign = `center`),
            (e.textBaseline = `middle`),
            wz(e, Sz(`life.kasa.bag`), t / 2, n / 2, t - 8));
        }));
      let a = (e, n, r) =>
        t(e, (e, t, i) => {
          ((e.fillStyle = r),
            e.fillRect(0, 0, t, i),
            (e.fillStyle = `#ffffff`),
            (e.font = Cz(this, 15, 900)),
            (e.textAlign = `center`),
            (e.textBaseline = `middle`),
            wz(e, Sz(n), t / 2, i / 2 + 1, t - 6));
        });
      (a(uz.vendHot, `life.vending.hot`, `#d0141e`),
        a(uz.vendCold, `life.vending.cold`, `#1d5ab0`));
      let o = (e, n, r, i) =>
        t(e, (e, t, a) => {
          (Oz(e, t, a, r),
            (e.fillStyle = i),
            (e.font = Cz(this, 16, 900, !0)),
            (e.textAlign = `center`),
            (e.textBaseline = `middle`),
            wz(e, Sz(n), t / 2, a / 2 + 1, t - 8));
        });
      (o(uz.plateOpen, `common.door.eigyochu`, `#f2e6c8`, `#c8141e`),
        o(uz.plateJunbi, `common.door.junbichu`, `#f2e6c8`, `#1a1a1a`),
        o(uz.plateTeikyu, `common.door.teikyubi`, `#ffffff`, `#1a1a1a`),
        o(uz.plateKyugyo, `common.door.honjitsu-kyugyo`, `#ffffff`, `#c8141e`),
        t(uz.leaves, (e, t, n) => aB(e, t, n, 71)));
      for (let [e, n, r, i, a] of dz)
        t(uz[e], (e, t, o) =>
          oB(
            e,
            t,
            o,
            Sz(n),
            r.map((e) => Sz(e)),
            i,
            a,
            this,
          ),
        );
      for (let [e, n, r] of fz)
        t(uz[e], (e, t, i) => sB(e, t, i, n ? Sz(n) : ``, r, this));
      (t(uz.shutter, (e, t, n) => {
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
function Sz(e, t) {
  return oc(e) ? (t && Object.keys(t).length ? ic(e, t) : B(e)) : ``;
}
function Cz(e, t, n = 700, r = !1) {
  return `${n} ${t}px ${r ? e.serif : e.sans}`;
}
function wz(e, t, n, r, i) {
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
