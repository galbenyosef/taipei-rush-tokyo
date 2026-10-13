// tokyo__assets__region-tokyo-BcM3fReU 79 — hatch
// Lines 39347-40005 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var Kee = class extends hb {
  kind = `maid`;
  page = `maid`;
  minW = 5.5;
  minD = 9;
  maxD = 10;
  front = `auto`;
  name;
  audioRoom = `room`;
  constructor(e, t, n) {
    (super(e, t, n),
      (this.name = { zh: t.label.zh, en: t.label.en }),
      (this.fillHex = 16773364),
      (this.fillK = 0.95));
  }
  get L() {
    return Ob(this.W, this.D);
  }
  layoutDoor() {
    let e = this.L;
    ((this.dx = e.dx), (this.doorHW = e.doorHW));
  }
  peopleSpots() {
    let e = this.L,
      t = this.D,
      n = (e, t, n) =>
        fy(
          `jp-maid`,
          this.seed + e,
          (n) => {
            ((n.top = { style: `blouse`, color: 1710634, sleeve: `short` }),
              (n.hair = { style: e % 2 ? `ponytail` : `long`, color: t }));
          },
          n,
        ),
      r = fy(
        `jp-salaryman-shirt`,
        this.seed + 7,
        (e) => {
          ((e.top = {
            style: `shirt`,
            color: 16316662,
            sleeve: `long`,
            tucked: !0,
          }),
            (e.outer = {
              style: `vest`,
              color: 1315866,
              color2: 1315866,
              over: !0,
            }),
            (e.bottom = { style: `slacks`, color: 1315866 }),
            (e.hair = { style: `sidepart`, color: 1709330 }),
            (e.acc = [{ kind: `tie`, color: 1315866 }, { kind: `glasses` }]));
        },
        `butler`,
      ),
      i = e.tables[4];
    return [
      {
        x: e.lectern.x,
        z: e.lectern.z + 0.45,
        ry: 0,
        pose: `attention`,
        desc: n(1, 2759958, `maid1`),
        staff: !0,
      },
      { x: 1.8, z: t - 0.95, ry: 0, pose: `counter`, desc: r, staff: !0 },
      {
        x: e.chairX - 0.55,
        z: i.z + 0.35,
        ry: -Math.PI / 2 + 0.3,
        pose: `hold`,
        desc: n(2, 5913130, `maid2`),
        staff: !0,
      },
      {
        x: e.tableX + 0.62,
        z: i.z,
        ry: Math.PI / 2,
        pose: `sit`,
        desc: fy(`jp-otaku`, this.seed + 21),
      },
      {
        x: e.chairX,
        z: i.z,
        ry: -Math.PI / 2,
        pose: `sit`,
        desc: fy(`jp-tourist-west`, this.seed + 22),
      },
      {
        x: e.stools[1],
        z: e.counter.z0 - 0.4,
        ry: Math.PI,
        pose: `stool`,
        desc: fy(`jp-otaku-casual`, this.seed + 23),
      },
    ];
  }
  *content() {
    let { W: e, D: t, H: n, g: r } = this,
      i = this.L,
      a = (e) => this.R(e);
    (hr(r, {
      x0: -e / 2,
      z0: 0,
      x1: e / 2,
      z1: t,
      h: n,
      floor: { hex: 16777215, reg: a(`m-floor`), tile: 0.8 },
      wall: { hex: 16777215, reg: a(`m-wall`), tile: 1.2 },
      ceiling: { hex: 16777215, reg: a(`m-ceil`), tile: 1.2 },
      baseboard: { hex: 15918812, h: 0.1 },
      openings: [
        { wall: `front`, a: -e / 2, b: e / 2, y0: 0, y1: this.glassTop },
        {
          wall: `back`,
          a: i.hatch.x0,
          b: i.hatch.x1,
          y0: i.hatch.y0,
          y1: i.hatch.y1,
        },
      ],
      ao: 0.28,
    }),
      r.tex(a(`m-wains`), 16777215, 0.02));
    for (let n of [-1, 1]) {
      let i = n * (e / 2 - 0.012);
      for (let e = 0; e < t - 0.01; e += 1.2)
        r.rectX(e, 0.1, Math.min(t, e + 1.2), 0.92, i, n > 0 ? -1 : 1);
    }
    for (let n = -e / 2; n < e / 2 - 0.01; n += 1.2)
      (n + 1.2 > i.hatch.x0 && n < i.hatch.x1) ||
        r.rectZ(n, 0.1, Math.min(e / 2, n + 1.2), 0.92, t - 0.012, -1);
    (vb(r, e, t, n),
      r.col(14200944),
      r.box(-e / 2, 0.92, 0.02, -e / 2 + 0.03, 0.96, t - 0.02, 5),
      r.box(e / 2 - 0.03, 0.92, 0.02, e / 2, 0.96, t - 0.02, 6),
      yield `shell`);
    let o = gb(r, `z`, i.benchR.a, i.benchR.b, e / 2, -1, {
        seat: 16777215,
        reg: a(`m-velvet`),
        frame: 15917784,
      }),
      s = gb(r, `z`, i.benchL.a, i.benchL.b, -e / 2, 1, {
        seat: 16777215,
        reg: a(`m-velvet`),
        frame: 15917784,
      });
    (this.boxes.push({
      x0: o[0],
      z0: o[1],
      x1: o[2],
      z1: o[3],
      y0: 0,
      y1: 0.98,
      tag: `prop`,
    }),
      this.boxes.push({
        x0: s[0],
        z0: s[1],
        x1: s[2],
        z1: s[3],
        y0: 0,
        y1: 0.98,
        tag: `prop`,
      }));
    for (let e of i.tables) {
      let t = e.side * i.tableX,
        n = e.side * i.chairX;
      (_b(r, t, e.z, 0.6, 0.6, 0.7, 16777215, 14200944, a(`m-tabletop`)),
        this.boxes.push({
          x0: t - 0.3,
          z0: e.z - 0.3,
          x1: t + 0.3,
          z1: e.z + 0.3,
          y0: 0,
          y1: 0.72,
          tag: `prop`,
        }),
        lr(
          r,
          n,
          e.z,
          e.side > 0 ? -Math.PI / 2 : Math.PI / 2,
          15899576,
          16051428,
        ),
        r.col(14200944),
        r.cyl(t + 0.15 * e.side, e.z - 0.18, 0.03, 0.035, 0.7, 0.76, 8, !0),
        r.tex(a(`m-menu`), 16777215, 0.1),
        r
          .push()
          .translate(t, 0.7, e.z + 0.12)
          .rotateY(e.side > 0 ? -Math.PI / 2 : Math.PI / 2),
        r.rectZ(-0.08, 0, 0.08, 0.12, 0, -1),
        r.pop());
    }
    let c = i.tables[4];
    (r.col(16777215),
      r.cyl(i.tableX - 0.12, c.z, 0.11, 0.12, 0.7, 0.715, 12, !0),
      r.col(16306256),
      r.sphere(i.tableX - 0.12, 0.72, c.z, 0.07, 8, 5, 0.5, 1.4, 1),
      r.col(13642282, 0.05),
      r.box(
        i.tableX - 0.15,
        0.755,
        c.z - 0.02,
        i.tableX - 0.09,
        0.758,
        c.z + 0.02,
        4,
      ),
      r.col(9097456, 0.1),
      r.cyl(i.tableX + 0.15, c.z + 0.15, 0.035, 0.04, 0.7, 0.86, 8, !0),
      yield `tables`);
    let l = i.lectern;
    (r.col(16775924),
      r.box(l.x - 0.28, 0, l.z - 0.2, l.x + 0.28, 1.02, l.z + 0.2, 55),
      r.tex(a(`m-logo`), 16777215, 0.15),
      r.rectZ(l.x - 0.26, 0.45, l.x + 0.26, 0.71, l.z - 0.202, -1),
      r.col(14200944),
      r.box(l.x - 0.3, 1.02, l.z - 0.22, l.x + 0.3, 1.05, l.z + 0.22, 55),
      r.col(15777856, 0.2),
      r.sphere(l.x + 0.18, 1.08, l.z - 0.08, 0.035, 8, 5, 0.7),
      this.boxes.push({
        x0: l.x - 0.3,
        z0: l.z - 0.22,
        x1: l.x + 0.3,
        z1: l.z + 0.22,
        y0: 0,
        y1: 1.1,
        tag: `prop`,
      }),
      r.tex(a(`m-rules`), 16777215, 0.12),
      r.rectX(0.5, 1.05, 1.5, 2.55, -e / 2 + 0.006, 1));
    let u = l.x + 0.85,
      d = l.z + 0.1;
    (r.col(11569232),
      r.box(u - 0.26, 0, d + 0.02, u - 0.23, 1.5, d + 0.05, 63),
      r.box(u + 0.23, 0, d + 0.02, u + 0.26, 1.5, d + 0.05, 63),
      r.box(u - 0.02, 0, d + 0.2, u + 0.02, 1.45, d + 0.24, 63),
      r.tex(a(`m-today`), 16777215, 0.1),
      r.rectZ(u - 0.25, 0.75, u + 0.25, 1.38, d - 0.002, -1),
      this.boxes.push({
        x0: u - 0.28,
        z0: d,
        x1: u + 0.28,
        z1: d + 0.26,
        y0: 0,
        y1: 1.5,
        tag: `prop`,
      }),
      r.tex(a(`m-menu`), 16777215, 0.12),
      r.rectX(2.2, 1.35, 3.6, 2.25, e / 2 - 0.008, -1),
      r.tex(a(`m-logo`), 16777215, 0.2),
      r.rectX(3.2, 1.45, 4.4, 2.05, -e / 2 + 0.008, 1),
      r.tex(a(`m-garland`), 16777215, 0.3));
    for (let i = 0.6; i < t - 2.4; i += 1)
      (r.rectX(i, n - 0.38, i + 1, n - 0.12, e / 2 - 0.01, -1),
        r.rectX(i, n - 0.38, i + 1, n - 0.12, -e / 2 + 0.01, 1));
    let f = i.hatch.x1 + 0.15,
      p = t - 0.2;
    (r.col(16777215),
      r.box(f, 1.55, p - 0.2, e / 2, 1.58, t, 47),
      r.tex(a(`m-plush`), 16777215, 0.05),
      r.rectZ(f, 1.58, e / 2, 1.88, p + 0.05, -1),
      Xn(r, e / 2 - 0.35, 7.35, 1.1, 16775924, 5937754),
      this.boxes.push({
        x0: e / 2 - 0.6,
        z0: 7.1,
        x1: e / 2,
        z1: 7.6,
        y0: 0,
        y1: 1.2,
        tag: `prop`,
      }),
      yield `greeting`);
    let m = i.counter;
    (r.col(16775924),
      r.box(m.x0, 0, m.z0, m.x1, m.h, m.z1, 55),
      r.tex(a(`m-wains`), 16777215, 0.03),
      r.rectZ(m.x0, 0.05, m.x1, m.h - 0.05, m.z0 - 0.002, -1),
      r.col(14200944),
      r.box(m.x0 - 0.02, m.h, m.z0 - 0.06, m.x1, m.h + 0.04, m.z1, 55),
      this.boxes.push({
        x0: m.x0 - 0.02,
        z0: m.z0 - 0.06,
        x1: m.x1,
        z1: m.z1,
        y0: 0,
        y1: m.h + 0.05,
      }));
    for (let e of i.stools)
      (Qn(r, e, m.z0 - 0.4, 0.68, 15899576),
        this.boxes.push({
          x0: e - 0.15,
          z0: m.z0 - 0.55,
          x1: e + 0.15,
          z1: m.z0 - 0.25,
          y0: 0,
          y1: 0.7,
          tag: `prop`,
        }));
    (r.col(16775924),
      r.box(i.hatch.x1 + 0.1, 0, t - 0.45, e / 2, 0.9, t, 55),
      r.col(14200944),
      r.box(i.hatch.x1 + 0.1, 0.9, t - 0.47, e / 2, 0.93, t, 55));
    for (let e = 0; e < 6; e++)
      (r.col([16298184, 10148080, 16310400, 13168840][e % 4], 0.15),
        r.cyl(
          i.hatch.x1 + 0.25 + e * 0.1,
          t - 0.2,
          0.03,
          0.035,
          0.93,
          1.08,
          8,
          !0,
        ));
    this.boxes.push({
      x0: i.hatch.x1 + 0.1,
      z0: t - 0.47,
      x1: e / 2,
      z1: t,
      y0: 0,
      y1: 0.95,
    });
    let h = t;
    (r.col(14200944),
      r.box(
        i.hatch.x0 - 0.06,
        i.hatch.y0 - 0.04,
        h - 0.18,
        i.hatch.x1 + 0.06,
        i.hatch.y0,
        h + 0.02,
        55,
      ),
      r.box(
        i.hatch.x0 - 0.06,
        i.hatch.y1,
        h - 0.04,
        i.hatch.x1 + 0.06,
        i.hatch.y1 + 0.06,
        h,
        44,
      ),
      r.tex(a(`m-kitchen`), 16777215, 0.35, 1.1),
      r.rectZ(
        i.hatch.x0,
        i.hatch.y0 - 0.3,
        i.hatch.x1,
        i.hatch.y1 + 0.3,
        h + 0.5,
        -1,
      ),
      r.col(14212318, 0.2),
      r.rectX(h, i.hatch.y0, h + 0.5, i.hatch.y1, i.hatch.x0, 1),
      r.rectX(h, i.hatch.y0, h + 0.5, i.hatch.y1, i.hatch.x1, -1),
      r.rectY(i.hatch.x0, h, i.hatch.x1, h + 0.5, i.hatch.y0, 1),
      r.col(16053492, 0.6),
      r.rectY(i.hatch.x0, h, i.hatch.x1, h + 0.5, i.hatch.y1, -1),
      r.col(16777215),
      r.cyl(
        (i.hatch.x0 + i.hatch.x1) / 2,
        h - 0.08,
        0.11,
        0.12,
        i.hatch.y0,
        i.hatch.y0 + 0.015,
        12,
        !0,
      ),
      r.col(16306256),
      r.sphere(
        (i.hatch.x0 + i.hatch.x1) / 2,
        i.hatch.y0 + 0.02,
        h - 0.08,
        0.07,
        8,
        5,
        0.5,
        1.4,
        1,
      ),
      yield `counter`);
    let g = i.stage;
    (r.col(16775924),
      r.box(g.x0, 0, g.z0, g.x1, g.h, g.z1, 37),
      r.col(14200944),
      r.box(g.x0, g.h - 0.03, g.z0 - 0.01, g.x1, g.h, g.z0, 32),
      this.floorDefs.push({ x0: g.x0, z0: g.z0, x1: g.x1, z1: g.z1, y: g.h }),
      r.tex(a(`m-stage`), 16777215, 0.35, 1.1),
      r.rectZ(g.x0 + 0.02, g.h, g.x1 - 0.02, n - 0.05, t - 0.01, -1),
      r.col(2763310),
      r.cyl((g.x0 + g.x1) / 2, g.z0 + 0.7, 0.12, 0.12, g.h, g.h + 0.02, 10, !0),
      r.cyl(
        (g.x0 + g.x1) / 2,
        g.z0 + 0.7,
        0.012,
        0.012,
        g.h,
        g.h + 1.45,
        6,
        !1,
      ),
      r.sphere((g.x0 + g.x1) / 2, g.h + 1.5, g.z0 + 0.66, 0.035, 8, 5, 1.3),
      r.tex(a(`m-cheki`), 16777215, 0.12),
      r.rectX(g.z0 - 1.6, 1.15, g.z0 - 0.15, 2.1, -e / 2 + 0.008, 1),
      r.col(16777215),
      r.box(-e / 2 + 0.05, 0, g.z0 - 1.25, -e / 2 + 0.45, 0.8, g.z0 - 0.55, 55),
      r.col(15900864),
      r.box(-e / 2 + 0.15, 0.8, g.z0 - 1, -e / 2 + 0.3, 0.9, g.z0 - 0.8, 55),
      this.boxes.push({
        x0: -e / 2 + 0.05,
        z0: g.z0 - 1.25,
        x1: -e / 2 + 0.45,
        z1: g.z0 - 0.55,
        y0: 0,
        y1: 0.9,
        tag: `prop`,
      }),
      yield `stage`,
      Hee(r, a(`m-aboard`), i.dx + 1.35, -0.75),
      this.boxes.push({
        x0: i.dx + 1.05,
        z0: -0.95,
        x1: i.dx + 1.65,
        z1: -0.55,
        y0: -0.4,
        y1: 1.1,
        tag: `prop`,
      }));
    let _ = [],
      v = t * 0.42;
    (r.col(14200944),
      r.box(-0.005, n - 0.5, v - 0.005, 0.005, n, v + 0.005, 63),
      r.lathe(
        0,
        v,
        [0.04, n - 0.85, 0.3, n - 0.72, 0.34, n - 0.66, 0.05, n - 0.5],
        12,
      ));
    for (let e = 0; e < 6; e++) {
      let t = (e / 6) * Math.PI * 2;
      (r.tex(a(`m-glow`), 16777215, 1, 1.8),
        r.sphere(
          Math.cos(t) * 0.3,
          n - 0.62,
          v + Math.sin(t) * 0.3,
          0.05,
          6,
          4,
          1.3,
        ));
    }
    _.push({ x: 0, y: n - 0.7, z: v, r: 5.2, c: [0.42, 0.34, 0.36] });
    for (let e of i.tables) {
      let t = e.side * (i.tableX - 0.1);
      (r.col(16777215),
        r.box(t - 0.004, n - 0.6, e.z - 0.004, t + 0.004, n, e.z + 0.004, 63),
        r.tex(a(`m-glow`), 16777215, 1, 1.6),
        r.sphere(t, n - 0.66, e.z, 0.09, 8, 6, 0.9),
        _.push({ x: t, y: n - 0.75, z: e.z, r: 2.2, c: [0.3, 0.24, 0.24] }));
    }
    (_.push({
      x: (g.x0 + g.x1) / 2,
      y: n - 0.3,
      z: g.z0 + 0.4,
      r: 3.4,
      c: [0.4, 0.3, 0.45],
    }),
      _.push({
        x: 1.8,
        y: n - 0.4,
        z: m.z0 + 0.3,
        r: 3,
        c: [0.32, 0.28, 0.24],
      }),
      _.push({ x: i.dx, y: n - 0.4, z: 1.2, r: 3.2, c: [0.3, 0.26, 0.26] }),
      (this.bake = { amb: [0.6, 0.53, 0.56], lights: _, floorAO: 0.4 }));
  }
  glassDressing(e, t, n) {
    let r = (e) => this.R(e),
      i = Math.min(1.25, this.glassTop - 0.2);
    (e.tex(r(`m-film`), 16777215, 0.75),
      n < this.W / 2 - 0.2 &&
        e.rectZ(n + 0.06, 0.15, this.W / 2 - 0.08, i, -0.04, -1),
      t > -this.W / 2 + 0.2 &&
        e.rectZ(-this.W / 2 + 0.08, 0.15, t - 0.06, i, -0.04, -1),
      e.tex(r(`m-logo`), 16777215, 0.9));
    let a = (n + this.W / 2) / 2;
    e.rectZ(a - 0.6, i + 0.15, a + 0.6, i + 0.75, -0.045, -1);
  }
  leafSticker(e, t, n) {
    e.tex(this.R(`m-film`), 16777215, 0.8);
    let r = (t + n) / 2;
    e.rectZ(r - 0.12, 1, r + 0.12, 1.24, -0.071, -1);
  }
  frameHex() {
    return 16051428;
  }
  transomHex() {
    return 16774390;
  }
  transom(e, t, n) {
    if (!(n - t < 0.15)) {
      e.tex(this.R(`m-garland`), 16777215, 0.6, 1.1);
      for (let r = -this.W / 2; r < this.W / 2 - 0.01; r += 0.8)
        e.rectZ(
          r,
          t + 0.02,
          Math.min(this.W / 2, r + 0.8),
          Math.min(n, t + 0.22),
          -0.062,
          -1,
        );
    }
  }
  greeting() {
    let e =
        this.sh.ctx.player.character === `wen`
          ? `walkin.maid.voice.okaeri-f`
          : `walkin.maid.voice.okaeri-m`,
      t = ac(e);
    return { ja: B(e), zh: t.zh, en: t.en };
  }
  spotDefs() {
    let e = this.L,
      t = { zh: `女僕暫停服務……`, en: `The staff won’t serve you…` };
    return [
      {
        x: 1.8,
        z: e.counter.z0 - 0.75,
        r: 0.9,
        label: () =>
          this.panic > 0
            ? t
            : {
                zh: `按 E 點餐（女僕咖啡）`,
                en: `Press E to order (maid café)`,
              },
        act: () => (this.panic > 0 ? void 0 : this.openMenu()),
      },
      {
        x: e.lectern.x,
        z: e.lectern.z - 0.6,
        r: 0.75,
        label: () =>
          this.panic > 0
            ? t
            : {
                zh: r.on
                  ? r.t(
                      `按 E 看店內規則（入場費 ${this.sh.ctx.money.format(xb)}／小時）`,
                      `E で店内ルールを見る（入場料 ${this.sh.ctx.money.format(xb)}／時間）`,
                    )
                  : `按 E 看店內規則（入場費 ${this.sh.ctx.money.format(xb)}／小時）`,
                en: `Press E for the house rules (cover ${this.sh.ctx.money.format(xb)} / hour)`,
              },
        act: () => this.rules(),
      },
    ];
  }
  rules() {
    let e = this.sh.ctx,
      t = ac(`walkin.maid.rules.touch`),
      n = ac(`walkin.maid.rules.photo`);
    e.events.emit(`notify`, {
      text: {
        zh: r.on
          ? r.t(`${t.zh}・${n.zh}`, `${r.jz(t.zh)}・${r.jz(n.zh)}`)
          : `${t.zh}・${n.zh}`,
        en: `${t.en} · ${n.en}`,
      },
      duration: 3.5,
      kind: `info`,
    });
  }
  openMenu() {
    let e = this.sh.ctx,
      t = bb.map(([t, n, i, a]) =>
        this.menuItem(
          ac(t),
          n,
          i,
          a,
          i > 0
            ? {
                zh: r.on ? r.t(`+${i} 生命`, `HP +${i}`) : `+${i} 生命`,
                en: `+${i} HP`,
              }
            : { zh: `和女僕一起拍拍立得`, en: `An instant photo with a maid` },
          t,
          () => {
            if (
              t === `walkin.maid.item.omurice` ||
              t === `walkin.maid.item.cheki`
            ) {
              let n =
                  t === `walkin.maid.item.omurice`
                    ? `walkin.maid.voice.moe`
                    : `walkin.maid.voice.cheki`,
                i = ac(n);
              try {
                e.audio.say?.(
                  { ja: B(n), zh: i.zh, en: i.en },
                  { lang: `ja`, priority: 4, volume: 0.8 },
                );
              } catch {}
              e.events.emit(`subtitle`, {
                text: {
                  zh: r.on
                    ? r.t(`「${i.zh}」`, `「${r.jz(i.zh)}」`)
                    : `「${i.zh}」`,
                  en: `"${i.en}"`,
                },
                duration: 2.2,
                speaker: e.t({ zh: `女僕`, en: `Maid` }),
              });
            }
          },
        ),
      );
    this.sh.menu.show({
      title: ac(`walkin.maid.name`),
      subtitle: {
        zh: r.on
          ? r.t(
              `入場費 ${e.money.format(xb)}／小時・一人一杯飲料`,
              `入場料 ${e.money.format(xb)}／時間・ワンドリンク制`,
            )
          : `入場費 ${e.money.format(xb)}／小時・一人一杯飲料`,
        en: `Cover ${e.money.format(xb)} / hour · one drink each`,
      },
      accent: `#e8588a`,
      items: t,
      owner: this,
    });
  }
  namedSpots() {
    return kb(this.W, this.D);
  }
  views() {
    let e = super.views(),
      t = this.L,
      n = this.D;
    return (
      (e.sig = [t.dx + 0.3, 1.62, 0.7, 0.4, 1.2, n - 1.2]),
      (e.detail = [0.6, 1.5, t.stage.z0 - 1.6, t.stage.x0 + 0.6, 1.3, n - 0.4]),
      e
    );
  }
  kindSpot(e) {
    let t = kb(this.W, this.D)[e];
    return t ? [t[0], t[1]] : null;
  }
};
