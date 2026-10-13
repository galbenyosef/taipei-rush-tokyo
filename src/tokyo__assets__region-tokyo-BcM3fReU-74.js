// tokyo__assets__region-tokyo-BcM3fReU 74 — math
// Lines 37578-38050 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var ib = class extends Jv {
    kind = `electronics`;
    page = `akiba`;
    minW = 5.5;
    minD = 7.5;
    maxD = 12;
    front = `auto`;
    name;
    L = null;
    constructor(e, t, n) {
      (super(e, t.id, n, t.hours),
        (this.name = { zh: t.label.zh, en: t.label.en }),
        (this.fillHex = 16054015),
        (this.fillK = 0.95));
    }
    layoutDoor() {
      let e = this.seed & 1 ? 1 : -1;
      ((this.doorHW = 0.8),
        (this.dx = e * (this.W / 2 - 1.15)),
        (this.L = null));
    }
    layout() {
      if (this.L) return this.L;
      let { W: e, D: t } = this,
        n = this.seed & 1 ? 1 : -1,
        r = t - 2.4,
        i = e - 1.1 - 2,
        a = (i > 2.4 ? 2 : 1) == 2 ? [-i / 4 - 0.1, i / 4 + 0.1] : [0];
      return (
        (this.L = {
          s: n,
          ix: a,
          iz0: 2.4,
          iz1: r,
          rx0: n * (e / 2 - 2.3),
          rx1: n * (e / 2 - 0.6),
          rz0: t - 1.75,
          rz1: t - 1.2,
          gx0: -n * (e / 2 - 0.05),
          gx1: this.dx - n * (this.doorHW + 0.3),
        }),
        this.L
      );
    }
    peopleSpots() {
      let e = this.layout(),
        t = this.rng(21),
        n = e.s,
        r = [
          {
            x: (e.rx0 + e.rx1) / 2,
            z: e.rz1 + 0.45,
            ry: Math.PI,
            pose: `counter`,
            desc: gy(this.seed, 18333, t() < 0.4),
            staff: !0,
          },
        ];
      return (
        r.push({
          x: -n * (this.W / 2 - 0.95),
          z: 3.4,
          ry: n > 0 ? Math.PI / 2 : -Math.PI / 2,
          pose: `browse`,
          desc: fy(`jp-otaku`, this.seed + 2),
        }),
        t() < 0.7 &&
          r.push({
            x: (e.ix[0] + (e.ix[1] ?? e.ix[0] + 2)) / 2,
            z: (e.iz0 + e.iz1) / 2,
            ry: Math.PI / 2,
            pose: `browse`,
            desc: fy(
              t() < 0.5 ? `jp-otaku-casual` : `jp-tourist-west`,
              this.seed + 3,
            ),
          }),
        r
      );
    }
    *content() {
      let { W: e, D: t, H: n, g: r } = this,
        i = this.layout(),
        a = i.s,
        o = (e) => this.R(e);
      (hr(r, {
        x0: -e / 2,
        z0: 0,
        x1: e / 2,
        z1: t,
        h: n,
        floor: { hex: 16777215, reg: o(`a-floor`), tile: 0.9 },
        wall: { hex: 16777215, reg: o(`a-wall`), tile: 1.2 },
        ceiling: { hex: 16777215, reg: o(`a-ceil`), tile: 1.2 },
        baseboard: { hex: 2763312, h: 0.08 },
        openings: [
          { wall: `front`, a: -e / 2, b: e / 2, y0: 0, y1: this.glassTop },
        ],
        ao: 0.25,
      }),
        yield `shell`);
      let s = Math.min(i.gx0, i.gx1),
        c = Math.max(i.gx0, i.gx1),
        l = Math.max(1, Math.floor((c - s) / 0.5));
      for (let e = 0; e < l; e++) {
        let t = s + e * 0.5;
        (r.col(14211292),
          r.box(t + 0.02, 0, 0.12, t + 0.48, 1.85, 0.58, 63),
          r.tex(o(`a-gacha`), 16777215, 0.3),
          r.rectZ(t + 0.04, 0.05, t + 0.46, 1.82, 0.581, 1),
          r.rectZ(t + 0.04, 0.05, t + 0.46, 1.82, 0.119, -1));
      }
      (this.boxes.push({ x0: s, z0: 0.1, x1: c, z1: 0.6, y0: 0, y1: 1.9 }),
        r.tex(o(`a-gacha-sign`), 16777215, 0.35),
        r.rectZ((s + c) / 2 - 0.45, 1.95, (s + c) / 2 + 0.45, 2.2, 0.59, 1));
      let u = -a * (e / 2),
        d = (e / 2) * a,
        f = (e, t, n, i, a, s = 2.1) => {
          (r.col(15263978),
            r.box(
              Math.min(e, e + t * 0.45),
              0,
              n,
              Math.max(e, e + t * 0.45),
              0.85,
              i,
              63,
            ),
            r.tex(o(a), 16777215, 0.08),
            r.rectX(n, 0.88, i, s, e + t * 0.012, t),
            this.boxes.push({
              x0: Math.min(e, e + t * 0.45),
              z0: n,
              x1: Math.max(e, e + t * 0.45),
              z1: i,
              y0: 0,
              y1: 0.9,
            }));
        };
      f(u, a > 0 ? 1 : -1, 1, t * 0.55, `a-earphones`, 2.15);
      for (let e = 0; e < 4; e++) {
        let t = 1.3 + e * 0.55,
          n = u + a * 0.25;
        (r.col(10133670),
          r.cyl(n, t, 0.012, 0.012, 0.85, 1.15, 6, !1),
          r.col([1710618, 13113368, 15921904, 2779856][e]),
          r.box(n - 0.06, 1.1, t - 0.09, n + 0.06, 1.24, t + 0.09, 63));
      }
      (r.tex(o(`a-shicho`), 16777215, 0.3),
        r.rectX(1.2, 2.2, 2, 2.5, u + a * 0.012, a > 0 ? 1 : -1),
        f(u, a > 0 ? 1 : -1, t * 0.55, t - 0.3, `a-peg`),
        f(d, a > 0 ? -1 : 1, 1.9, i.rz0 - 0.4, `a-peg`),
        yield `walls`);
      for (let e of i.ix)
        (r
          .push()
          .translate(e, 0, (i.iz0 + i.iz1) / 2)
          .rotateY(Math.PI / 2),
          gr(
            r,
            -(i.iz1 - i.iz0) / 2,
            (i.iz1 - i.iz0) / 2,
            -0.4,
            0.4,
            1.8,
            [
              o(`a-manga`),
              o(`a-manga`),
              o(`a-gpu`),
              o(`a-manga`),
              o(`a-manga`),
            ],
            { body: 15790320, seg: 0.8 },
          ),
          r.pop(),
          r
            .push()
            .translate(e, 0, (i.iz0 + i.iz1) / 2)
            .rotateY(-Math.PI / 2),
          gr(
            r,
            -(i.iz1 - i.iz0) / 2,
            (i.iz1 - i.iz0) / 2,
            -0.4,
            0.4,
            1.8,
            [
              o(`a-manga`),
              o(`a-manga`),
              o(`a-manga`),
              o(`a-manga`),
              o(`a-manga`),
            ],
            { body: 15790320, seg: 0.8 },
          ),
          r.pop(),
          this.boxes.push({
            x0: e - 0.42,
            z0: i.iz0,
            x1: e + 0.42,
            z1: i.iz1,
            y0: 0,
            y1: 1.85,
          }),
          rr(
            r,
            o(e === i.ix[0] ? `a-aisle-comic` : `a-aisle-figure`),
            e,
            n - 0.5,
            i.iz0 - 0.2,
            1,
            0.25,
            0,
            0.35,
            0.25,
          ),
          r.tex(o(`a-star-${Math.abs(Math.round(e * 3)) % 3}`), 16777215, 0.2),
          r.rectZ(e - 0.15, 1.55, e + 0.15, 1.85, i.iz0 - 0.01, -1));
      let p = i.iz0 - 0.9;
      (r.col(6965808),
        r.box(-0.7, 0, p - 0.3, 0.7, 0.8, p + 0.3, 63),
        r.tex(o(`a-flat`), 16777215, 0.05),
        r.rectY(-0.68, p - 0.28, 0.68, p + 0.28, 0.802, 1),
        r.tex(o(`a-shinkan`), 16777215, 0.3),
        r.rectZ(-0.3, 0.85, 0.3, 1.07, p - 0.31, -1),
        this.boxes.push({
          x0: -0.7,
          z0: p - 0.3,
          x1: 0.7,
          z1: p + 0.3,
          y0: 0,
          y1: 0.85,
        }),
        yield `shelves`,
        r.col(16053494),
        r.box(
          -e / 2 + 0.2,
          0,
          t - 0.5,
          Math.min(i.rx0, i.rx1) - 0.4,
          2.2,
          t - 0.02,
          63,
        ),
        r.tex(o(`a-showcase`), 16777215, 0.45, 1.1),
        r.rectZ(
          -e / 2 + 0.25,
          0.2,
          Math.min(i.rx0, i.rx1) - 0.45,
          2.15,
          t - 0.505,
          -1,
        ),
        this.gl.col(14741752, 0.18),
        this.gl.rectZ(
          -e / 2 + 0.22,
          0.18,
          Math.min(i.rx0, i.rx1) - 0.42,
          2.18,
          t - 0.52,
          -1,
        ),
        r.tex(o(`a-showcase-sign`), 16777215, 0.35),
        r.rectZ(-e / 2 + 0.5, 2.3, -e / 2 + 1.6, 2.58, t - 0.52, -1),
        this.boxes.push({
          x0: -e / 2,
          z0: t - 0.55,
          x1: Math.min(i.rx0, i.rx1) - 0.4,
          z1: t,
          y0: 0,
          y1: 2.2,
        }));
      let m = Math.min(i.rx0, i.rx1),
        h = Math.max(i.rx0, i.rx1);
      (r.col(16053488),
        r.box(m, 0, i.rz0, h, 1, i.rz1, 63),
        r.tex(o(`a-logo`), 16777215, 0.4),
        r.rectZ(m + 0.05, 0.5, h - 0.05, 0.92, i.rz0 - 0.002, -1),
        r.push().translate((m + h) / 2, 1, (i.rz0 + i.rz1) / 2),
        r.col(1776928),
        r.box(-0.18, 0, -0.1, 0.18, 0.08, 0.15, 63),
        r.tex(o(`a-pos`), 16777215, 0.8),
        r.rectZ(-0.15, 0.12, 0.15, 0.32, -0.02, -1),
        r.pop(),
        r.tex(o(`a-taxfree`), 16777215, 0.4),
        r.rectZ(m + 0.1, 2.25, m + 0.9, 2.55, t - 0.02, -1),
        this.boxes.push({
          x0: m,
          z0: i.rz0,
          x1: h,
          z1: i.rz1,
          y0: 0,
          y1: 1.05,
        }));
      let g = [];
      nr(
        r,
        -e / 2 + 0.5,
        0.6,
        e / 2 - 0.5,
        t - 0.6,
        n,
        Math.max(2, Math.round(e / 2)),
        Math.max(2, Math.round(t / 2.2)),
        0.6,
        0.6,
        void 0,
        3.4,
      );
      for (let r = 0; r < 3; r++)
        for (let i = 0; i < 3; i++)
          g.push({
            x: -e / 3 + (r * e) / 3,
            y: n - 0.1,
            z: t * (0.2 + 0.3 * i),
            r: 4,
            c: [0.34, 0.34, 0.36],
          });
      (rr(
        r,
        o(`a-aisle-earphone`),
        u + a * 0.9,
        n - 0.5,
        1,
        1,
        0.25,
        0,
        0.35,
        0.25,
      ),
        rr(
          r,
          o(`a-aisle-smartphone`),
          d - a * 0.9,
          n - 0.5,
          2.2,
          1,
          0.25,
          0,
          0.35,
          0.25,
        ),
        (this.bake = { amb: [0.7, 0.7, 0.72], lights: g, floorAO: 0.4 }));
    }
    transom(e, t, n) {
      n - t < 0.15 ||
        (e.tex(this.R(`a-logo`), 16777215, 0.75, 1.15),
        e.rectZ(-this.W / 2, t, this.W / 2, Math.min(n, t + 0.55), -0.062, -1));
    }
    leafSticker(e, t, n) {
      e.tex(this.R(`a-taxfree`), 16777215, 0.9);
      let r = (t + n) / 2;
      e.rectZ(r - 0.24, 1.3, r + 0.24, 1.48, -0.071, -1);
    }
    greeting() {
      let e = ac(`interior.akiba.voice.irasshai`);
      return { ja: B(`interior.akiba.voice.irasshai`), zh: e.zh, en: e.en };
    }
    spotDefs() {
      let e = this.layout(),
        t = this.sh.ctx,
        n = Math.min(e.gx0, e.gx1),
        i = Math.max(e.gx0, e.gx1);
      return [
        {
          x: (e.rx0 + e.rx1) / 2,
          z: e.rz0 - 0.6,
          r: 0.85,
          label: () =>
            this.panic > 0
              ? { zh: `店員不肯結帳……`, en: `The clerk won’t serve you…` }
              : {
                  zh: `按 E 在收銀台結帳`,
                  en: `Press E to pay at the register`,
                },
          act: () => (this.panic > 0 ? void 0 : this.openMenu()),
        },
        {
          x: (n + i) / 2,
          z: 1.05,
          r: 0.8,
          label: () => ({
            zh: r.on
              ? r.t(
                  `按 E 轉一次扭蛋（${t.money.format(tb)}）`,
                  `E でガチャを回す（${t.money.format(tb)}）`,
                )
              : `按 E 轉一次扭蛋（${t.money.format(tb)}）`,
            en: `Press E: one capsule toy (${t.money.format(tb)})`,
          }),
          act: () => {
            let e = nb[Math.floor(Math.random() * nb.length)];
            this.pay(tb, `gacha`, {
              zh: r.on
                ? r.t(
                    `喀啦喀啦…扭到了${e.zh}`,
                    `ガチャガチャ…${r.jz(e.zh)}が出た`,
                  )
                : `喀啦喀啦…扭到了${e.zh}`,
              en: `Clack-clack… you got ${e.en}`,
            });
          },
        },
      ];
    }
    openMenu() {
      let e = (e, t, n, r) => this.menuItem(ac(e), t, 0, n, r, e),
        t = [
          e(`trade.electronics.item.earphone`, 12800, `耳`, {
            zh: `降噪無線耳機`,
            en: `Noise-cancelling, wireless`,
          }),
          e(`trade.pcparts.item.ssd`, 9980, `碟`, {
            zh: `電腦零件`,
            en: `PC parts`,
          }),
          this.menuItem(
            { zh: `漫畫單行本`, en: `A manga volume` },
            594,
            0,
            `漫`,
            { zh: `新刊入荷`, en: `New release` },
            `manga`,
          ),
          e(`trade.electronics.item.tv`, 89800, `電`, {
            zh: `免稅可（觀光客）`,
            en: `Tax-free for tourists`,
          }),
        ];
      this.sh.menu.show({
        title: { zh: this.name.zh, en: this.name.en },
        subtitle: {
          zh: `電器・電腦零件・動漫周邊`,
          en: `Electronics, PC parts, anime goods`,
        },
        speaker: {
          name: { zh: `店員`, en: `Clerk` },
          line: { zh: `「需要袋子嗎？」`, en: `"Would you like a bag?"` },
        },
        accent: `#00479d`,
        items: t,
        owner: this,
      });
    }
    views() {
      let e = super.views(),
        t = this.layout().s;
      return (
        (e.detail = [
          -t * (this.W / 2 - 1.6),
          1.5,
          1,
          -t * (this.W / 2),
          1.3,
          2.4,
        ]),
        (e.showcase = [0, 1.5, this.D - 2.6, -t * 0.6, 1.2, this.D - 0.5]),
        e
      );
    }
    kindSpot(e) {
      let t = this.layout();
      return e === `counter`
        ? [(t.rx0 + t.rx1) / 2, t.rz0 - 0.7]
        : e === `gacha`
          ? [(t.gx0 + t.gx1) / 2, 1.2]
          : e === `aisle`
            ? [0, (t.iz0 + t.iz1) / 2]
            : null;
    }
  },
  ab = 4800,
  ob = 0.12;
