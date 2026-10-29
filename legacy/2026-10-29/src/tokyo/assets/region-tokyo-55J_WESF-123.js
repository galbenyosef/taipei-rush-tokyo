// tokyo/assets/region-tokyo-55J_WESF 123 — box
// Lines 53817-54507 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var Bue = class extends jh {
  kind = `sento`;
  page = `sento`;
  minW = 8;
  minD = 7;
  maxD = 8;
  front = `slide`;
  name;
  audioRoom = `room`;
  paidAt = -1e9;
  bathing = !1;
  constructor(e, t) {
    (super(e, Qf.id, t, `06:00-20:00`),
      (this.name = { zh: Qf.label.zh, en: Qf.label.en }),
      (this.fillHex = 16774368),
      (this.fillK = 0.85));
  }
  get L() {
    return A_(this.W, this.D);
  }
  isOpen() {
    return (
      (this.stagedUntil > 0 && this.sh.ctx.time.elapsed < this.stagedUntil) ||
      w_(Zg.hours, this.sh.ctx)
    );
  }
  prepare() {
    let e = this.sh.ctx,
      t = S_().find((e) => e.site === Qf.site);
    if (!t) return 0;
    let n = wg({ x: t.x, z: t.z, facing: t.heading }, e.plan);
    if (!Eg(e, n, `site`)) return 0;
    let { W: r, D: i } = xg[`walkin-sento-enraiyu`];
    return (
      this.adopt(n, r, i, 3.4, 3.12),
      (this.glassTop = 2.5),
      (this.doorTop = 2.2),
      1
    );
  }
  layoutDoor() {
    ((this.dx = 0), (this.doorHW = 0.9));
  }
  carveFilter() {
    let e = this.fr.py;
    return (t) =>
      t.tag === `site` && t.kind === 0 && t.minY < e + 0.5 && t.minY > e - 1.5;
  }
  peopleSpots() {
    let e = this.L,
      t = this.D,
      n = Uh(
        `jp-obaachan`,
        this.seed + 1,
        (e) => {
          ((e.outer = {
            style: `cardigan`,
            color: 4872810,
            color2: 3820122,
            over: !0,
            length: -0.055,
          }),
            (e.acc = [{ kind: `apron`, color: 2767466 }]));
        },
        `sento-desk`,
      ),
      r = Uh(
        `jp-ojiichan`,
        this.seed + 2,
        (e) => {
          ((e.top = { style: `tank`, color: 16053488 }),
            (e.outer = void 0),
            (e.acc = []));
        },
        `sento-ojii`,
      );
    return [
      {
        x: (e.desk.x0 + e.desk.x1) / 2,
        z: t - 0.45,
        y: e.desk.seatY,
        ry: 0,
        pose: `sit`,
        desc: n,
        staff: !0,
        noCollide: !0,
      },
      {
        x: e.massage.x + 0.05,
        z: e.massage.z,
        y: D_,
        ry: -Math.PI / 2,
        pose: `sit`,
        desc: r,
        noCollide: !0,
      },
      {
        x: 2.9,
        z: 5.9,
        y: D_,
        ry: Math.PI * 0.75,
        pose: `hold`,
        desc: Uh(`jp-mama`, this.seed + 3),
      },
    ];
  }
  *content() {
    let { W: e, D: t, H: n, g: r } = this,
      i = this.L,
      a = (e) => this.R(e);
    (tn(r, {
      x0: -e / 2,
      z0: 0,
      x1: e / 2,
      z1: t,
      h: n,
      floor: { hex: 5917242 },
      wall: { hex: 16777215, reg: a(`s-plaster`), tile: 1.2 },
      ceiling: { hex: 16777215, reg: a(`s-ceil`), tile: 1 },
      openings: [
        { wall: `front`, a: -i.e, b: i.e, y0: 0, y1: i.soffit },
        { wall: `back`, a: i.norenM.x0, b: i.norenM.x1, y0: 0, y1: 2.15 },
        { wall: `back`, a: i.norenF.x0, b: i.norenF.x1, y0: 0, y1: 2.15 },
      ],
      ao: 0.32,
    }),
      r.tex(a(`s-doma`), 16777215, 0.02));
    for (let e = 0; e < i.step - 0.01; e += 1.2)
      r.rectY(-i.e - 0.02, e, i.e + 0.02, Math.min(i.step, e + 1.2), E_, 1);
    r.tex(a(`s-boards`), 16777215, 0.02);
    let o = (e, t, n, i) => {
      for (let a = e; a < n - 0.01; a += 1.2)
        for (let e = t; e < i - 0.01; e += 1.2)
          r.rectY(a, e, Math.min(n, a + 1.2), Math.min(i, e + 1.2), D_, 1);
    };
    (o(-e / 2, i.step, e / 2, t),
      o(-e / 2, 0, -i.e - i.wing, i.step),
      o(i.e + i.wing, 0, e / 2, i.step),
      this.floorDefs.push({ x0: -i.e, z0: 0, x1: i.e, z1: i.step, y: E_ }),
      this.floorDefs.push({ x0: -e / 2, z0: i.step, x1: e / 2, z1: t, y: D_ }),
      this.floorDefs.push({
        x0: -e / 2,
        z0: 0,
        x1: -i.e - i.wing,
        z1: i.step,
        y: D_,
      }),
      this.floorDefs.push({
        x0: i.e + i.wing,
        z0: 0,
        x1: e / 2,
        z1: i.step,
        y: D_,
      }),
      r.tex(a(`s-boards`), 9067056, 0.03),
      r.box(-i.e, E_, i.step - 0.09, i.e, 0.185, i.step, 36),
      r.tex(a(`s-shoes`), 16777215, 0.15),
      r.rectZ(-0.55, 2, 0.55, 2.27, i.step + 0.001, -1),
      r.tex(a(`s-wains`), 16777215, 0.02));
    for (let n = i.step; n < t - 0.01; n += 1)
      (r.rectX(n, D_, Math.min(t, n + 1), 1.05, -e / 2 + 0.01, 1),
        r.rectX(n, D_, Math.min(t, n + 1), 1.05, e / 2 - 0.01, -1));
    yield `shell`;
    for (let e of [-1, 1]) {
      let t = e * i.e,
        n = e * (i.e + i.wing),
        o = Math.min(t, n),
        s = Math.max(t, n);
      (r.col(6965802),
        r.box(o, 0, 0, s, i.soffit, i.step, (e < 0 ? 2 : 1) | 16),
        r.tex(a(`s-lockers`), 16777215, 0.04),
        r.rectX(0.05, 0.25, i.step - 0.05, 1.95, t, e < 0 ? 1 : -1),
        r.col(4861462),
        r.rectX(0.05, E_, i.step - 0.05, 0.25, t - e * 0.001, e < 0 ? 1 : -1),
        r.col(15525074),
        r.rectX(0, 1.95, i.step, i.soffit, t - e * 0.001, e < 0 ? 1 : -1),
        this.boxes.push({
          x0: o,
          z0: 0,
          x1: s,
          z1: i.step,
          y0: 0,
          y1: i.soffit,
        }));
    }
    (r.col(15525074),
      r.box(-i.e - i.wing, i.soffit, 0, i.e + i.wing, n, i.step, 24),
      r.tex(a(`s-panel`), 16777215, 1, 1.4),
      r.rectY(-0.5, 0.6, 0.5, 1.6, i.soffit - 0.005, -1),
      yield `doma`);
    let s = i.desk;
    (r.tex(a(`s-boards`), 10119738, 0.03),
      r.box(s.x0, D_, s.z0, s.x1, s.h + D_, s.z1, 55),
      r.tex(a(`s-wains`), 16777215, 0.03),
      r.rectZ(
        s.x0,
        0.22999999999999998,
        s.x1,
        s.h + D_ - 0.08,
        s.z0 - 0.002,
        -1,
      ),
      r.col(3810320),
      r.box(
        s.x0 - 0.04,
        s.h + D_,
        s.z0 - 0.08,
        s.x1 + 0.04,
        s.h + D_ + 0.05,
        s.z1,
        55,
      ),
      this.boxes.push({
        x0: s.x0 - 0.04,
        z0: s.z0 - 0.08,
        x1: s.x1 + 0.04,
        z1: s.z1,
        y0: 0,
        y1: s.h + D_ + 0.05,
      }),
      r.tex(a(`s-boards`), 12094042, 0.02),
      r.rectY(-1.4, s.z1, 1.4, t, s.seatY + D_, 1),
      this.floorDefs.push({
        x0: -1.4,
        z0: s.z1,
        x1: 1.4,
        z1: t,
        y: s.seatY + D_,
      }),
      r.col(5913120),
      r.box(-1.4, D_, s.z1, 1.4, s.seatY + D_, s.z1 + 0.02, 32));
    for (let e of [-1, 1]) {
      let n = e < 0 ? -2.15 : 1.4,
        i = e < 0 ? -1.4 : 2.15;
      (r.tex(a(`s-wains`), 16777215, 0.03),
        r.box(n, D_, t - 1.15, i, 2.15, t, 39),
        this.boxes.push({ x0: n, z0: t - 1.15, x1: i, z1: t, y0: 0, y1: 2.2 }));
    }
    (r.tex(a(`s-price`), 16777215, 0.12),
      r.rectZ(-0.45, 1.75, 0.45, 2.85, t - 0.012, -1),
      r.col(16053488));
    for (let e = 0; e < 4; e++)
      r.box(
        0.3,
        s.h + D_ + 0.05 + e * 0.035,
        s.z0 - 0.02,
        0.62,
        s.h + D_ + 0.08 + e * 0.035,
        s.z0 + 0.2,
        55,
      );
    (r.col(2763306),
      r.box(
        -0.7,
        s.h + D_ + 0.05,
        s.z0,
        -0.4,
        s.h + D_ + 0.09,
        s.z0 + 0.18,
        55,
      ),
      yield `desk`);
    for (let [e, n] of [
      [i.norenM, `s-noren-m`],
      [i.norenF, `s-noren-f`],
    ]) {
      let i = t + 0.9;
      (r.tex(a(`s-passage`), 16777215, 0.15),
        r.rectZ(e.x0, D_, e.x1, 2.15, i, -1),
        r.col(4864554, 0.05),
        r.rectX(t, D_, i, 2.15, e.x0, 1),
        r.rectX(t, D_, i, 2.15, e.x1, -1),
        r.col(3811866),
        r.rectY(e.x0, t, e.x1, i, 2.15, -1),
        r.tex(a(`s-boards`), 6965808, 0.02),
        r.rectY(e.x0, t, e.x1, i, D_, 1),
        r.col(3810320),
        r.box(e.x0 - 0.05, 2.12, t - 0.06, e.x1 + 0.05, 2.17, t - 0.02, 55),
        r.tex(a(n), 16777215, 0.1));
      let o = (e.x0 + e.x1) / 2;
      (r.rectZ(e.x0 + 0.02, 1, o - 0.01, 2.12, t - 0.04, -1, 0, 0, 0.5, 1),
        r.rectZ(o + 0.01, 1, e.x1 - 0.02, 2.12, t - 0.04, -1, 0.5, 0, 1, 1),
        r.rectZ(e.x0 + 0.02, 1, o - 0.01, 2.12, t - 0.035, 1, 0, 0, 0.5, 1),
        r.rectZ(o + 0.01, 1, e.x1 - 0.02, 2.12, t - 0.035, 1, 0.5, 0, 1, 1),
        this.boxes.push({
          x0: e.x0,
          z0: t - 0.05,
          x1: e.x1,
          z1: t + 0.5,
          y0: 0,
          y1: 2.2,
        }));
    }
    (r.tex(a(`s-manners`), 16777215, 0.12),
      r.rectZ(i.norenF.x1 + 0.2, 1.25, i.norenF.x1 + 0.95, 2.35, t - 0.012, -1),
      r.tex(a(`s-fuji`), 16777215, 0.08),
      r.rectZ(
        i.norenM.x0 - 0.95,
        1.6,
        i.norenM.x0 - 0.1 + 0.05,
        2.2,
        t - 0.012,
        -1,
      ),
      yield `noren`);
    for (let e of i.benches) {
      (r.tex(a(`s-boards`), 9067060, 0.02),
        r.box(e.x - 0.2, 0.5800000000000001, e.z0, e.x + 0.2, 0.62, e.z1, 55),
        r.col(3810320));
      for (let t of [e.z0 + 0.1, e.z1 - 0.1])
        r.box(
          e.x - 0.17,
          D_,
          t - 0.03,
          e.x + 0.17,
          0.5800000000000001,
          t + 0.03,
          51,
        );
    }
    let c = -e / 2 + 0.01;
    (r.col(5913120),
      r.box(c, 1.86, i.tv.z - 0.55, c + 0.42, 1.9, i.tv.z + 0.55, 63),
      r.col(1710620),
      r.box(c + 0.04, 1.9, i.tv.z - 0.48, c + 0.38, 2.5, i.tv.z + 0.48, 55),
      this.mark(`tv`, () => {
        (r.tex(a(`s-tv`), 16777215, 1, 1.15),
          r.rectX(i.tv.z - 0.44, 1.94, i.tv.z + 0.44, 2.46, c + 0.381, 1));
      }));
    let l = i.massage;
    (r
      .push()
      .translate(l.x, D_, l.z)
      .rotateY(-Math.PI / 2),
      r.tex(a(`s-massage`), 16777215, 0.02),
      r.box(-0.36, 0, -0.42, 0.36, 0.45, 0.35, 55),
      r.box(-0.36, 0.45, 0.2, 0.36, 1.25, 0.45, 55),
      r.box(-0.4, 0.45, -0.38, -0.26, 0.72, 0.25, 55),
      r.box(0.26, 0.45, -0.38, 0.4, 0.72, 0.25, 55),
      r.box(-0.3, 0, -0.75, 0.3, 0.3, -0.42, 55),
      r.col(14211280),
      r.box(0.4, 0.5, -0.1, 0.5, 0.7, 0.1, 55),
      r.pop(),
      r.tex(a(`s-massage-sign`), 16777215, 0.12),
      r.rectX(l.z - 0.4, 1.55, l.z + 0.4, 1.95, -e / 2 + 0.012, 1),
      this.boxes.push({
        x0: -e / 2,
        z0: l.z - 0.42,
        x1: l.x + 0.75,
        z1: l.z + 0.42,
        y0: 0,
        y1: 1.3,
        tag: `prop`,
      }),
      yield `lobby`);
    let u = i.fridge;
    (r
      .push()
      .translate(e / 2, D_, (u.z0 + u.z1) / 2)
      .rotateY(Math.PI / 2),
      uue(
        r,
        this.gl,
        -(u.z1 - u.z0) / 2,
        (u.z1 - u.z0) / 2,
        0,
        1.85,
        a(`s-milk`),
        a(`s-milk-head`),
        16053490,
      ),
      r.pop(),
      this.boxes.push({
        x0: e / 2 - 0.64,
        z0: u.z0,
        x1: e / 2,
        z1: u.z1,
        y0: 0,
        y1: 2.1,
      }),
      r.col(9067060),
      r.cyl(
        e / 2 - 1,
        u.z1 + 0.9,
        0.3,
        0.3,
        0.8799999999999999,
        0.9199999999999999,
        14,
        !0,
      ),
      r.cyl(e / 2 - 1, u.z1 + 0.9, 0.04, 0.04, D_, 0.8799999999999999, 6, !1),
      this.boxes.push({
        x0: e / 2 - 1.3,
        z0: u.z1 + 0.6,
        x1: e / 2 - 0.7,
        z1: u.z1 + 1.2,
        y0: 0,
        y1: 0.95,
        tag: `prop`,
      }),
      r.col(16315626, 0.1),
      r.cyl(
        e / 2 - 0.95,
        u.z1 + 0.85,
        0.03,
        0.03,
        0.9199999999999999,
        1.04,
        8,
        !0,
      ),
      r.push().translate(0, D_, 0),
      Tn(r, e / 2 - 0.4, 0.5, 1.15, 9067060, 3828266),
      Tn(r, -e / 2 + 0.4, 0.5, 1, 9067060, 4880954),
      r.pop(),
      this.boxes.push({
        x0: e / 2 - 0.65,
        z0: 0.25,
        x1: e / 2 - 0.15,
        z1: 0.75,
        y0: 0,
        y1: 1.2,
        tag: `prop`,
      }),
      this.boxes.push({
        x0: -e / 2 + 0.15,
        z0: 0.25,
        x1: -e / 2 + 0.65,
        z1: 0.75,
        y0: 0,
        y1: 1.2,
        tag: `prop`,
      }),
      r.tex(a(`s-yu`), 16777215, 0.2),
      r.rectZ(-0.25, 2.62, 0.25, 3, i.step + 0.001, -1),
      yield `fridge`);
    let d = [];
    for (let [e, t] of [
      [-2.4, 3.6],
      [2.4, 3.6],
      [-2.4, 6.4],
      [2.4, 6.4],
      [0, 5],
    ])
      (r.tex(a(`s-panel`), 16777215, 1, 1.6),
        r.rectY(e - 0.55, t - 0.2, e + 0.55, t + 0.2, n - 0.005, -1),
        d.push({ x: e, y: n - 0.3, z: t, r: 3.8, c: [0.32, 0.3, 0.26] }));
    (d.push({ x: 0, y: i.soffit - 0.2, z: 1.1, r: 2.6, c: [0.34, 0.3, 0.24] }),
      (this.bake = { amb: [0.5, 0.46, 0.4], lights: d, floorAO: 0.45 }));
  }
  afterBake(e, t, n) {
    e === `tv` && this.g.emitRange(t, n, 1);
  }
  frontage(e, t) {
    let n = this.L.e + 0.02,
      r = this.doorTop,
      i = -this.doorHW,
      a = this.doorHW;
    e.col(4861984);
    for (let t of [-n, i, a, n])
      e.box(t - 0.04, 0, -0.1, t + 0.04, r + 0.08, 0, 35);
    return (
      e.box(-n, r, -0.1, n, r + 0.08, 0, 44),
      e.box(-n, r + 0.08, -0.06, n, this.L.soffit, -0.02, 40),
      e.col(10133670),
      e.box(i - 0.1, 0, -0.11, n, 0.012, -0.02, 36),
      t.col(15526108, 0.55),
      t.rectZ(-n + 0.04, 0.1, i - 0.04, r, -0.03, -1),
      t.rectZ(a + 0.04, 0.1, n - 0.04, r, -0.03, -1),
      [this.leaf(i, a, 1)]
    );
  }
  portal(e) {
    let t = this.L,
      n = t.siteLockers;
    (e.rectZ(-t.e - 0.02, 0, t.e + 0.02, t.soffit, -0.012, -1),
      e.rectZ(-t.e, E_, t.e, t.soffit - 0.01, n.z0 - 0.02, -1),
      e.rectY(-n.x, n.z0 - 0.02, n.x, n.z1 + 0.02, n.h + 0.012, 1));
  }
  greeting() {
    let e = xo(`walkin.sento.voice.irasshai`);
    return { ja: L(`walkin.sento.voice.irasshai`), zh: e.zh, en: e.en };
  }
  paid() {
    return this.sh.ctx.time.elapsed - this.paidAt < 1800;
  }
  spotDefs() {
    let e = this.L,
      t = this.D,
      n = () => Te(this.sh.ctx.player.character),
      i = (r) => ({
        x: r
          ? (e.norenF.x0 + e.norenF.x1) / 2
          : (e.norenM.x0 + e.norenM.x1) / 2,
        z: t - 0.6,
        r: 0.8,
        label: () =>
          this.bathing
            ? null
            : r === n()
              ? this.paid()
                ? {
                    zh: `按 E 泡湯（約 45 分鐘・生命全滿）`,
                    en: `Press E to take the bath (≈ 45 min · full health)`,
                  }
                : { zh: `先在番台付入浴費`, en: `Pay at the desk first` }
              : r
                ? {
                    zh: `女湯 — 不是你的那邊`,
                    en: `Women’s bath — not your side`,
                  }
                : {
                    zh: `男湯 — 不是你的那邊`,
                    en: `Men’s bath — not your side`,
                  },
        act: () =>
          r === n() && this.paid() && !this.bathing
            ? void this.bathe()
            : void 0,
      });
    return [
      {
        x: (e.desk.x0 + e.desk.x1) / 2,
        z: e.desk.z0 - 0.55,
        r: 0.8,
        label: () =>
          this.panic > 0
            ? { zh: `番台不理你……`, en: `The desk won’t serve you…` }
            : this.paid()
              ? {
                  zh: `已付入浴費 — 去暖簾那邊`,
                  en: `Paid — through your noren`,
                }
              : {
                  zh: r.on
                    ? r.t(
                        `按 E 在番台付入浴費（${this.sh.ctx.money.format(O_)}）`,
                        `E で番台に入浴料を払う（${this.sh.ctx.money.format(O_)}）`,
                      )
                    : `按 E 在番台付入浴費（${this.sh.ctx.money.format(O_)}）`,
                  en: `Press E to pay at the desk (${this.sh.ctx.money.format(O_)})`,
                },
        act: () => {
          if (
            this.panic > 0 ||
            this.paid() ||
            !this.pay(O_, `walkin.sento.bath`)
          )
            return;
          this.paidAt = this.sh.ctx.time.elapsed;
          let e = xo(`walkin.sento.voice.goyukkuri`);
          this.sh.ctx.events.emit(`subtitle`, {
            text: {
              zh: r.on
                ? r.t(`「${e.zh}」`, `「${r.jz(e.zh)}」`)
                : `「${e.zh}」`,
              en: `"${e.en}"`,
            },
            duration: 2,
            speaker: this.sh.ctx.t({ zh: `番台`, en: `Desk` }),
          });
        },
      },
      i(!1),
      i(!0),
      {
        x: this.W / 2 - 0.95,
        z: (e.fridge.z0 + e.fridge.z1) / 2,
        r: 0.8,
        label: () => ({
          zh: `按 E 買瓶裝牛乳`,
          en: `Press E for a bottle of milk`,
        }),
        act: () => this.milkMenu(),
      },
      {
        x: e.massage.x + 1,
        z: e.massage.z,
        r: 0.7,
        label: () => ({
          zh: r.on
            ? r.t(
                `按 E 坐按摩椅（${this.sh.ctx.money.format(100)}／10 分）`,
                `E でマッサージチェアに座る（${this.sh.ctx.money.format(100)}／10 分）`,
              )
            : `按 E 坐按摩椅（${this.sh.ctx.money.format(100)}／10 分）`,
          en: `Press E for the massage chair (${this.sh.ctx.money.format(100)} / 10 min)`,
        }),
        act: () => {
          if (this.pay(100, `walkin.sento.massage`)) {
            try {
              this.sh.ctx.player.heal(15);
            } catch {}
            this.sh.ctx.events.emit(`notify`, {
              text: {
                zh: `咕嘰咕嘰……肩膀鬆了 +15 生命`,
                en: `Whirr, knead… shoulders loosened +15 HP`,
              },
              duration: 2.6,
              kind: `good`,
            });
          }
        },
      },
    ];
  }
  milkMenu() {
    let e = k_.map(([e, t, n, i]) =>
      this.menuItem(
        xo(e),
        t,
        n,
        i,
        {
          zh: r.on
            ? r.t(
                `+${n} 生命・手扠腰一口乾`,
                `HP +${n}・腰に手を当てて一気飲み`,
              )
            : `+${n} 生命・手扠腰一口乾`,
          en: `+${n} HP · hand on hip, in one go`,
        },
        e,
      ),
    );
    this.sh.menu.show({
      title: xo(`walkin.sento.milk.title`),
      subtitle: {
        zh: `泡完澡就是要喝這個`,
        en: `What you drink after the bath`,
      },
      accent: `#2a6ab0`,
      items: e,
      owner: this,
    });
  }
  async bathe() {
    let e = this.sh.ctx;
    this.bathing = !0;
    try {
      await e.ui.fade(1, 0.8);
      let t = e.env?.hour ?? 16;
      e.env.setHour(Math.min(23.9, t + 0.75));
      try {
        e.player.heal(1e3);
      } catch {}
      this.paidAt = -1e9;
      let n = xo(`walkin.sento.voice.iiyu`);
      (e.events.emit(`subtitle`, {
        text: {
          zh: r.on ? r.t(`「${n.zh}」`, `「${r.jz(n.zh)}」`) : `「${n.zh}」`,
          en: `"${n.en}"`,
        },
        duration: 2.4,
      }),
        await new Promise((e) => setTimeout(e, 600)),
        await e.ui.fade(0, 0.8));
    } catch {
      try {
        await e.ui.fade(0, 0.3);
      } catch {}
    } finally {
      this.bathing = !1;
    }
  }
  namedSpots() {
    return j_(this.W, this.D);
  }
  views() {
    let e = this.L,
      t = this.D,
      n = this.W;
    return {
      street: [1.2, 1.62, -5, -0.2, 1.5, 2],
      sig: [0.4, 1.7, 2.9, -0.2, 1.25, t - 0.3],
      detail: [
        n / 2 - 2.6,
        1.6,
        2.9,
        n / 2 - 0.3,
        1.1,
        (e.fridge.z0 + e.fridge.z1) / 2,
      ],
    };
  }
  kindSpot(e) {
    let t = j_(this.W, this.D)[e];
    return t ? [t[0], t[1]] : null;
  }
};
