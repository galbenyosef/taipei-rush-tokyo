// tokyo/assets/region-tokyo-55J_WESF 125 — box
// Lines 54761-55182 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var Uue = class extends jh {
  kind = `callcentre`;
  page = `callcentre`;
  minW = 8;
  minD = 14;
  maxD = 16;
  front = `open`;
  name = { zh: $f.label.zh, en: $f.label.en };
  audioRoom = `room`;
  constructor(e, t) {
    (super(e, $f.id, t, `00:00-00:01`),
      (this.fillHex = 15660287),
      (this.fillK = 0.85));
  }
  isOpen() {
    return this.stagedUntil > 0 && this.sh.ctx.time.elapsed < this.stagedUntil;
  }
  prepare() {
    let e = this.sh.ctx,
      t = L_();
    if (!t) return 0;
    let n = I_(t, e.plan);
    if (!Eg(e, n, `site`)) return 0;
    let { W: r, D: i } = xg[`walkin-callcentre-shimbashi`];
    return (
      this.adopt(n, r, i, 4.2, 4),
      (this.H = 3.83),
      (this.glassTop = 3.36),
      (this.doorTop = 3.2),
      1
    );
  }
  layoutDoor() {
    ((this.dx = 0), (this.doorHW = 2.5));
  }
  carveFilter() {
    let e = this.fr,
      t = e.py;
    return (n) => {
      if (n.tag !== `site` || n.minY > t + 0.5 || n.minY < t - 1.5) return !1;
      if (n.kind === 0) return !0;
      let r = e.lx((n.minX + n.maxX) / 2, (n.minZ + n.maxZ) / 2),
        i = e.lz((n.minX + n.maxX) / 2, (n.minZ + n.maxZ) / 2);
      return Math.abs(r) < 2.6 && i > 0.2 && i < 3;
    };
  }
  peopleSpots() {
    return [];
  }
  *content() {
    let { W: e, D: t, g: n } = this,
      r = (e) => this.R(e),
      i = R_(e, t),
      a = i.mouth;
    (n.tex(r(`cc-terrazzo`), 16777215, 0.02), n.rectY(-a, 0, a, F_, 0.006, 1));
    for (let e = 0; e < Vue; e++) {
      let t = F_ + e * P_ - 0.012,
        o = (e + 1) * N_;
      (n.tex(r(`cc-terrazzo`), 14209220, 0.02),
        n.rectY(-a, t, a, i.landing, o, 1),
        n.col(9077364),
        n.rectZ(-a, e * N_, a, o, t, -1),
        n.col(4868680),
        n.box(-a, o - 0.02, t - 0.01, a, o + 0.004, t + 0.04, 36),
        this.floorDefs.push({
          x0: -a,
          z0: t + 0.012,
          x1: a,
          z1: t + 0.012 + P_,
          y: o,
        }));
    }
    for (let e of [-1, 1])
      (n.tex(r(`cc-mosaic`), 16777215, 0.02),
        n.rectX(0, 0, i.landing, 1.2, e * a - e * 0.004, e < 0 ? 1 : -1),
        n.tex(r(`cc-wall`), 16777215, 0.02),
        n.rectX(0, 1.2, i.landing, 3.36, e * a - e * 0.004, e < 0 ? 1 : -1),
        this.boxes.push({
          x0: e < 0 ? -a - 0.3 : a,
          z0: 0,
          x1: e < 0 ? -a : a + 0.3,
          z1: i.landing,
          y0: 0,
          y1: this.H,
        }));
    (n.col(14209730),
      n.rectY(-a, 2.35, a, i.landing, 3.355, -1),
      n.tex(r(`cc-wall`), 16777215, 0.02));
    for (let e of [-1, 1]) {
      let t = e < 0 ? -a : i.cw,
        r = e < 0 ? -i.cw : a;
      (n.rectZ(t, M_, r, this.H, i.landing, -1),
        this.boxes.push({
          x0: t,
          z0: i.landing,
          x1: r,
          z1: i.landing + 0.2,
          y0: 0,
          y1: this.H,
        }));
    }
    (n.rectZ(-i.cw, 3.58, i.cw, this.H, i.landing, -1), yield `stairs`);
    let o = i.landing,
      s = i.roomZ;
    (n.push().translate(0, M_, 0), n.tex(r(`cc-terrazzo`), 16777215, 0.02));
    for (let e = o; e < s - 0.01; e += 1.2)
      n.rectY(-i.cw, e, i.cw, Math.min(s, e + 1.2), 0, 1);
    n.tex(r(`cc-ceil`), 16777215, 0.02);
    for (let e = o; e < s - 0.01; e += 1.2)
      n.rectY(-i.cw, e, i.cw, Math.min(s, e + 1.2), 2.5, -1);
    for (let e of [-1, 1]) {
      let t = e * i.cw,
        a = e < 0 ? 1 : -1;
      n.tex(r(`cc-mosaic`), 16777215, 0.02);
      for (let e = o; e < s - 0.01; e += 1)
        n.rectX(e, 0, Math.min(s, e + 1), 1, t, a);
      (n.tex(r(`cc-wall`), 16777215, 0.02),
        n.rectX(o, 1, s, 2.5, t, a),
        this.boxes.push({
          x0: e < 0 ? -i.cw - 0.3 : i.cw,
          z0: o,
          x1: e < 0 ? -i.cw : i.cw + 0.3,
          z1: s,
          y0: 0,
          y1: this.H,
        }));
    }
    (n.tex(r(`cc-shutter`), 16777215, 0.02),
      n.rectX(o + 0.5, 0, o + 2.6, 2.05, -i.cw + 0.006, 1),
      n.tex(r(`cc-kinken`), 16777215, 0.2),
      n.rectX(o + 0.5, 2.08, o + 2.6, 2.42, -i.cw + 0.006, 1),
      n.tex(r(`cc-mahjong`), 16777215, 0.2),
      n.rectX(s - 1.9, 1.6, s - 0.7, 2.05, -i.cw + 0.006, 1),
      n.tex(r(`cc-kissa`), 16777215, 0.05),
      n.rectX(o + 0.9, 0, o + 1.85, 2.05, i.cw - 0.006, -1),
      n.tex(r(`cc-massage`), 16777215, 0.15),
      n.rectX(s - 2.3, 0, s - 1.35, 2.05, i.cw - 0.006, -1));
    for (let e = o + 0.9; e < s - 0.3; e += 1.9)
      (n.col(10132118),
        n.box(-0.62, 2.44, e - 0.04, 0.62, 2.5, e + 0.04, 56),
        n.tex(r(`cc-tube`), 16777215, 1, 2.2),
        n.box(-0.6, 2.4, e - 0.016, 0.6, 2.432, e + 0.016, 56));
    (n.pop(), yield `corridor`);
    let c = i.roomZ,
      l = t,
      u = e / 2;
    (n.push().translate(0, M_, 0),
      tn(n, {
        x0: -u,
        z0: c,
        x1: u,
        z1: l,
        h: 2.7,
        floor: { hex: 16777215, reg: r(`cc-carpet`), tile: 1 },
        wall: { hex: 16777215, reg: r(`cc-wall`), tile: 1.2 },
        ceiling: { hex: 16777215, reg: r(`cc-ceil`), tile: 1.2 },
        baseboard: { hex: 5921370, h: 0.08 },
        openings: [
          { wall: `front`, a: -0.5, b: 0.5, y0: 0, y1: 2.05 },
          { wall: `left`, a: i.back.z0, b: i.back.z1, y0: 0, y1: 2.05 },
        ],
        ao: 0.34,
      }),
      n.col(14209730),
      n.rectZ(-i.cw, 2.05, i.cw, 2.5, c, -1),
      n.rectZ(-i.cw, 0, -0.5, 2.05, c, -1),
      n.rectZ(0.5, 0, i.cw, 2.05, c, -1),
      n.col(6975092),
      n.box(-0.56, 0, c - 0.04, -0.5, 2.1, c + 0.04, 63),
      n.box(0.5, 0, c - 0.04, 0.56, 2.1, c + 0.04, 63),
      n.box(-0.56, 2.05, c - 0.04, 0.56, 2.11, c + 0.04, 63),
      n.col(9080468),
      n.box(0.5, 0, c + 0.06, 0.54, 2.04, c + 0.98, 63),
      n.tex(r(`cc-plate`), 16777215, 0.15),
      n.rectZ(-0.7, 2.15, 0.7, 2.47, c - 0.004, -1),
      this.boxes.push({
        x0: 0.48,
        z0: c,
        x1: 0.58,
        z1: c + 1,
        y0: 0,
        y1: this.H,
        tag: `prop`,
      }),
      this.boxes.push({
        x0: -i.cw - 0.1,
        z0: c - 0.1,
        x1: -0.52,
        z1: c + 0.05,
        y0: 0,
        y1: this.H,
      }),
      this.boxes.push({
        x0: 0.52,
        z0: c - 0.1,
        x1: i.cw + 0.1,
        z1: c + 0.05,
        y0: 0,
        y1: this.H,
      }),
      n.col(6975092),
      n.box(-u, 0, i.back.z0 - 0.06, -u + 0.08, 2.1, i.back.z0, 63),
      n.box(-u, 0, i.back.z1, -u + 0.08, 2.1, i.back.z1 + 0.06, 63),
      n.col(2763824),
      n.rectX(i.back.z0, 0, i.back.z1, 2.05, -u - 0.3, 1),
      n.col(9080468),
      n.rectX(i.back.z0, 0, i.back.z1, 0.002, -u - 0.3, 1),
      n.tex(r(`cc-exit`), 16777215, 1, 1.4),
      n.rectX(i.back.z0, 2.15, i.back.z1, 2.4, -u + 0.006, 1),
      this.boxes.push({
        x0: -u - 0.4,
        z0: i.back.z0,
        x1: -u - 0.25,
        z1: i.back.z1,
        y0: 0,
        y1: this.H,
      }),
      yield `room`);
    for (let e of i.rows)
      for (let t of i.deskX) {
        let i = e;
        (n.col(15263456),
          n.box(t - 0.75, 0.7, i - 0.32, t + 0.75, 0.73, i + 0.32, 63),
          n.col(6975092));
        for (let e of [-1, 1])
          n.box(
            t + e * 0.7 - 0.02,
            0,
            i - 0.3,
            t + e * 0.7 + 0.02,
            0.7,
            i + 0.3,
            51,
          );
        (n.box(t - 0.7, 0.3, i + 0.28, t + 0.7, 0.7, i + 0.3, 48),
          this.boxes.push({
            x0: t - 0.75,
            z0: i - 0.32,
            x1: t + 0.75,
            z1: i + 0.32,
            y0: 0,
            y1: 1.83,
            tag: `prop`,
          }));
        for (let a of [-0.36, 0.36])
          (n.col(1711136),
            n.box(
              t + a - 0.22,
              0.75,
              i + 0.16,
              t + a + 0.22,
              1.08,
              i + 0.2,
              63,
            ),
            n.box(
              t + a - 0.03,
              0.73,
              i + 0.18,
              t + a + 0.03,
              0.78,
              i + 0.24,
              63,
            ),
            this.mark(`scr${t}${e}${a}`, () => {
              (n.tex(r(`cc-screen`), 16777215, 1, 1.1),
                n.rectZ(t + a - 0.2, 0.77, t + a + 0.2, 1.06, i + 0.159, -1));
            }),
            n.col(1710618),
            n.box(
              t + a + 0.12,
              0.73,
              i - 0.14,
              t + a + 0.3,
              0.79,
              i + 0.02,
              63,
            ),
            n.box(
              t + a + 0.13,
              0.79,
              i - 0.12,
              t + a + 0.29,
              0.82,
              i - 0.08,
              63,
            ),
            n.col(2763310),
            n.box(t + a - 0.3, 0.73, i - 0.2, t + a - 0.12, 0.76, i - 0.04, 63),
            n.box(
              t + a - 0.29,
              0.76,
              i - 0.13,
              t + a - 0.13,
              0.9,
              i - 0.11,
              63,
            ),
            n.tex(r(`cc-list`), 16777215, 0.05),
            n.rectY(t + a - 0.12, i - 0.26, t + a + 0.1, i - 0.02, 0.732, 1));
        (mn(n, t - 0.36, i - 0.62, Math.PI, 2763828, 6975092),
          mn(n, t + 0.36, i - 0.62, Math.PI, 2763828, 6975092));
      }
    for (let e of [-3.2, -0.6])
      (n.col(10527912),
        n.box(e - 1.2, 0.95, l - 0.04, e + 1.2, 2.25, l, 47),
        n.tex(r(`cc-board`), 16777215, 0.15),
        n.rectZ(e - 1.15, 1, e + 1.15, 2.2, l - 0.042, -1));
    let d = i.rack;
    (n.col(1447964),
      n.box(d.x0, 0, d.z0, d.x1, 2, d.z1, 55),
      this.mark(`rack`, () => {
        (n.tex(r(`cc-rack`), 16777215, 1, 1.2),
          n.rectX(d.z0 + 0.05, 0.1, d.z1 - 0.05, 1.95, d.x0 - 0.002, -1));
      }),
      this.boxes.push({
        x0: d.x0,
        z0: d.z0,
        x1: d.x1,
        z1: d.z1,
        y0: 0,
        y1: 3.08,
      }),
      n.tex(r(`cc-box`), 16777215, 0.02));
    for (let [e, t, r] of [
      [3.9, c + 0.5, 0.45],
      [3.9, c + 1, 0.9],
      [3.4, c + 0.5, 0.45],
    ])
      n.box(e - 0.25, r - 0.45, t - 0.22, e + 0.25, r, t + 0.22, 55);
    (this.boxes.push({
      x0: 3.15,
      z0: c + 0.28,
      x1: u,
      z1: c + 1.22,
      y0: 0,
      y1: 1.98,
      tag: `prop`,
    }),
      n.col(15264492),
      n.box(u - 0.4, 0, c + 2.2, u - 0.05, 1, c + 2.55, 55),
      n.col(9095408, 0.1),
      n.cyl(u - 0.22, c + 2.38, 0.13, 0.13, 1, 1.4, 10, !0),
      this.boxes.push({
        x0: u - 0.4,
        z0: c + 2.2,
        x1: u,
        z1: c + 2.55,
        y0: 0,
        y1: 2.48,
        tag: `prop`,
      }),
      Tn(n, -u + 0.35, c + 0.4, 1, 6975092, 5929530));
    for (let e = c + 1.2; e < l - 0.4; e += 2)
      for (let t of [-2.4, 0, 2.4])
        (n.col(12106944),
          n.box(t - 0.62, 2.66, e - 0.16, t + 0.62, 2.7, e + 0.16, 8),
          n.tex(r(`cc-tube`), 16777215, 1, 2.4),
          n.rectY(t - 0.58, e - 0.12, t + 0.58, e + 0.12, 2.655, -1));
    (n.pop(),
      this.floorDefs.push({
        x0: -i.cw,
        z0: i.landing,
        x1: i.cw,
        z1: i.roomZ + 0.05,
        y: M_,
      }),
      this.floorDefs.push({ x0: -u, z0: i.roomZ, x1: u, z1: t, y: M_ }),
      yield `desks`);
    let f = [];
    for (let e = i.landing + 0.9; e < i.roomZ - 0.3; e += 1.9)
      f.push({ x: 0, y: 3.38, z: e, r: 2.8, c: [0.3, 0.32, 0.32] });
    for (let e = i.roomZ + 1.2; e < t - 0.4; e += 2)
      for (let t of [-2.4, 0, 2.4])
        f.push({ x: t, y: 3.58, z: e, r: 3.2, c: [0.26, 0.28, 0.3] });
    (f.push({ x: 0, y: 3, z: 1.2, r: 3.2, c: [0.3, 0.28, 0.24] }),
      f.push({
        x: (d.x0 + d.x1) / 2 - 0.5,
        y: 2.08,
        z: (d.z0 + d.z1) / 2,
        r: 1.8,
        c: [0.05, 0.2, 0.08],
      }),
      (this.bake = { amb: [0.42, 0.43, 0.45], lights: f, floorAO: 0.45 }));
  }
  afterBake(e, t, n) {
    (e === `rack` || e.startsWith(`scr`)) && this.g.emitRange(t, n, 1);
  }
  frontage() {
    return [];
  }
  portal(e) {
    let t = R_(this.W, this.D);
    (e.rectZ(-t.mouth, 0, t.mouth, 3.36, -0.012, -1),
      e.rectZ(-t.mouth, 1.09, t.mouth, 3.35, 2.488, -1));
  }
  spotDefs() {
    return [];
  }
  namedSpots() {
    return z_(this.W, this.D);
  }
  views() {
    let e = R_(this.W, this.D);
    return {
      street: [1.6, 1.62, -5, 0, 1.6, 2.5],
      sig: [
        3,
        2.7800000000000002,
        e.roomZ + 0.4,
        -1.5,
        1.8800000000000001,
        this.D - 0.6,
      ],
      detail: [0, 2.68, e.landing + 0.3, 0, 2.18, e.roomZ + 0.5],
    };
  }
  kindSpot(e) {
    let t = z_(this.W, this.D)[e];
    return t ? [t[0], t[1]] : null;
  }
};
