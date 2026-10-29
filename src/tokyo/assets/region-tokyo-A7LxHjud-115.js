// tokyo/assets/region-tokyo-A7LxHjud 115 — box
// Lines 50618-51244 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var Due = class extends Ag {
  kind = `kissa`;
  page = `kissa`;
  minW = 8;
  minD = 8.5;
  maxD = 9.5;
  front = `slide`;
  name;
  audioRoom = `room`;
  constructor(e, t, n) {
    (super(e, t, n),
      (this.name = { zh: t.label.zh, en: t.label.en }),
      (this.fillHex = 16769720),
      (this.fillK = 0.8));
  }
  get L() {
    return qg(this.W, this.D);
  }
  isOpen() {
    return (this.stagedUntil <= 0 ||
      this.sh.ctx.time.elapsed >= this.stagedUntil) &&
      this.sh.ctx.time.weekday === 0
      ? !1
      : super.isOpen();
  }
  layoutDoor() {
    ((this.dx = this.L.dx), (this.doorHW = this.L.doorHW));
  }
  peopleSpots() {
    let e = this.L,
      t = Kh(
        `jp-ojiichan`,
        this.seed + 3,
        (e) => {
          ((e.top = {
            style: `shirt`,
            color: 16052972,
            sleeve: `long`,
            tucked: !0,
          }),
            (e.outer = {
              style: `vest`,
              color: 2759186,
              color2: 2759186,
              over: !0,
            }),
            (e.acc = [{ kind: `tie`, color: 1710618 }]));
        },
        `kissa-master`,
      ),
      n = Kh(
        `jp-obaachan`,
        this.seed + 4,
        (e) => {
          ((e.outer = void 0),
            (e.top = { style: `blouse`, color: 15525076, sleeve: `long` }),
            (e.acc = [{ kind: `apron`, color: 3811876 }]));
        },
        `kissa-mama`,
      ),
      r = e.tables[2];
    return [
      {
        x: e.counter.x1 + 0.3,
        z: 4.4,
        ry: Math.PI / 2,
        pose: `counter`,
        desc: t,
        staff: !0,
      },
      {
        x: 1.5,
        z: e.counter.z1 + 0.3,
        ry: 0.4,
        pose: `hold`,
        desc: n,
        staff: !0,
      },
      {
        x: r.x + 0.55,
        z: r.z,
        ry: Math.PI / 2,
        pose: `sit`,
        desc: Kh(`jp-oji`, this.seed + 11),
      },
      {
        x: e.stoolX,
        z: e.stools[1],
        ry: -Math.PI / 2,
        pose: `stool`,
        desc: Kh(`jp-salaryman`, this.seed + 12),
      },
    ];
  }
  *content() {
    let { W: e, D: t, H: n, g: r } = this,
      i = this.L,
      a = (e) => this.R(e);
    (Dn(r, {
      x0: -e / 2,
      z0: 0,
      x1: e / 2,
      z1: t,
      h: n,
      floor: { hex: 16777215, reg: a(`k-carpet`), tile: 1 },
      wall: { hex: 16777215, reg: a(`k-plaster`), tile: 1.4 },
      ceiling: { hex: 16777215, reg: a(`k-ceil`), tile: 1.2 },
      baseboard: { hex: 2758156, h: 0.12 },
      openings: [
        { wall: `front`, a: -e / 2, b: e / 2, y0: 0, y1: this.glassTop },
      ],
      ao: 0.42,
    }),
      r.tex(a(`k-panel`), 16777215, 0.02));
    for (let n = 0; n < t - 0.01; n += 1)
      (r.rectX(n, 0.12, Math.min(t, n + 1), 1.2, -e / 2 + 0.01, 1),
        r.rectX(n, 0.12, Math.min(t, n + 1), 1.2, e / 2 - 0.01, -1));
    for (let n = -e / 2; n < e / 2 - 0.01; n += 1)
      r.rectZ(n, 0.12, Math.min(e / 2, n + 1), 1.2, t - 0.01, -1);
    (r.col(2758156),
      r.box(-e / 2, 1.2, 0.02, -e / 2 + 0.04, 1.25, t - 0.02, 5),
      r.box(e / 2 - 0.04, 1.2, 0.02, e / 2, 1.25, t - 0.02, 6),
      r.box(-e / 2, 1.2, t - 0.04, e / 2, 1.25, t, 36),
      Ng(r, e, t, n),
      r.tex(a(`k-wood`), 9071178, 0.02));
    for (let i = 1.2; i < t - 0.4; i += 1.6)
      r.box(-e / 2, n - 0.16, i - 0.08, e / 2, n, i + 0.08, 56);
    yield `shell`;
    for (let e of i.booths) {
      let [t, n] = i.boothX,
        o = jg(r, `x`, t, n, e.z0, 1, {
          seat: 16777215,
          reg: a(`k-velvet`),
          frame: 2758156,
          backH: 1.25,
          depth: 0.55,
        }),
        s = jg(r, `x`, t, n, e.z1, -1, {
          seat: 16777215,
          reg: a(`k-velvet`),
          frame: 2758156,
          backH: 1.25,
          depth: 0.55,
        });
      (this.boxes.push({
        x0: o[0],
        z0: o[1],
        x1: o[2],
        z1: o[3],
        y0: 0,
        y1: 1.25,
        tag: `prop`,
      }),
        this.boxes.push({
          x0: s[0],
          z0: s[1],
          x1: s[2],
          z1: s[3],
          y0: 0,
          y1: 1.25,
          tag: `prop`,
        }),
        r.tex(a(`k-wood`), 16777215, 0.02),
        r.box(t, 1.25, e.z0, n, 1.29, e.z0 + 0.17, 55),
        r.box(t, 1.25, e.z1 - 0.17, n, 1.29, e.z1, 55));
      let c = (e.z0 + e.z1) / 2;
      (r.tex(a(`k-tabletop`), 16777215, 0.02),
        r.box(t + 0.08, 0.68, c - 0.34, n - 0.12, 0.72, c + 0.34, 55),
        r.col(1708040),
        r.box(t + 0.5, 0, c - 0.05, t + 0.6, 0.68, c + 0.05, 51),
        this.boxes.push({
          x0: t + 0.08,
          z0: c - 0.34,
          x1: n - 0.12,
          z1: c + 0.34,
          y0: 0,
          y1: 0.74,
          tag: `prop`,
        }),
        this.ashtray(n - 0.35, c - 0.12, 0.72),
        this.lamp((t + n) / 2 - 0.1, c, 0.7));
    }
    yield `booths`;
    for (let e of i.tables)
      (Mg(r, e.x, e.z, 0.62, 0.62, 0.7, 16777215, 1708040, a(`k-tabletop`)),
        this.boxes.push({
          x0: e.x - 0.31,
          z0: e.z - 0.31,
          x1: e.x + 0.31,
          z1: e.z + 0.31,
          y0: 0,
          y1: 0.72,
          tag: `prop`,
        }),
        gn(r, e.x - 0.55, e.z, -Math.PI / 2, 10097180, 2758156),
        gn(r, e.x + 0.55, e.z, Math.PI / 2, 10097180, 2758156),
        this.ashtray(e.x + 0.12, e.z + 0.15, 0.7),
        this.lamp(e.x, e.z, 0.6));
    let o = i.tables[2];
    (r.tex(a(`k-paper`), 16777215, 0.04),
      r.rectY(o.x - 0.1, o.z - 0.2, o.x + 0.22, o.z + 0.12, 0.705, 1),
      this.cup(o.x - 0.15, o.z + 0.15, 0.7));
    let s = i.game;
    (r.col(1710622),
      r.box(s.x - 0.38, 0, s.z - 0.3, s.x + 0.38, 0.68, s.z + 0.3, 55),
      r.col(2763312),
      r.box(s.x - 0.4, 0.68, s.z - 0.32, s.x + 0.4, 0.71, s.z + 0.32, 51),
      this.mark(`game`, () => {
        (r.tex(a(`k-game`), 16777215, 1, 1.1),
          r.rectY(s.x - 0.24, s.z - 0.18, s.x + 0.24, s.z + 0.18, 0.712, 1));
      }),
      r.col(14211280, 0.05));
    for (let e of [-1, 1])
      r.box(
        s.x - 0.06,
        0.6,
        s.z + e * 0.3 - 0.04,
        s.x + 0.06,
        0.66,
        s.z + e * 0.3 + 0.04,
        63,
      );
    (this.gl.col(13162720, 0.14),
      this.gl.rectY(s.x - 0.38, s.z - 0.3, s.x + 0.38, s.z + 0.3, 0.716, 1));
    for (let e of [-1, 1])
      (Tn(r, s.x, s.z + e * 0.62, 0.48, 10097180),
        this.boxes.push({
          x0: s.x - 0.15,
          z0: s.z + e * 0.62 - 0.15,
          x1: s.x + 0.15,
          z1: s.z + e * 0.62 + 0.15,
          y0: 0,
          y1: 0.5,
          tag: `prop`,
        }));
    (this.boxes.push({
      x0: s.x - 0.4,
      z0: s.z - 0.32,
      x1: s.x + 0.4,
      z1: s.z + 0.32,
      y0: 0,
      y1: 0.72,
      tag: `prop`,
    }),
      this.ashtray(s.x + 0.3, s.z + 0.22, 0.712),
      yield `tables`);
    let c = i.counter,
      l = i.back;
    (r.tex(a(`k-wood`), 16777215, 0.02),
      r.box(c.x0, 0, c.z0, c.x1, c.h - 0.05, c.z1, 55),
      r.tex(a(`k-tabletop`), 16777215, 0.03),
      r.box(c.x0 - 0.08, c.h - 0.05, c.z0 - 0.04, c.x1 + 0.02, c.h, c.z1, 55),
      r.col(11569216),
      r.box(c.x0 - 0.06, 0.14, c.z0, c.x0 - 0.04, 0.17, c.z1, 6),
      this.boxes.push({
        x0: c.x0 - 0.08,
        z0: c.z0 - 0.04,
        x1: c.x1 + 0.02,
        z1: c.z1,
        y0: 0,
        y1: c.h + 0.02,
      }));
    for (let e of i.stools)
      (Tn(r, i.stoolX, e, 0.68, 10097180),
        this.boxes.push({
          x0: i.stoolX - 0.15,
          z0: e - 0.15,
          x1: i.stoolX + 0.15,
          z1: e + 0.15,
          y0: 0,
          y1: 0.7,
          tag: `prop`,
        }));
    for (let e = 0; e < 3; e++) this.cup(c.x0 + 0.12, i.stools[e] + 0.05, c.h);
    (r.tex(a(`k-wood`), 16777215, 0.02),
      r.box(l.x0, 0, l.z0, l.x1, 0.9, l.z1, 55),
      r.col(6969930),
      r.box(l.x0 - 0.02, 0.9, l.z0, l.x1, 0.93, l.z1, 55),
      this.boxes.push({
        x0: l.x0 - 0.02,
        z0: l.z0,
        x1: l.x1,
        z1: l.z1,
        y0: 0,
        y1: 2.3,
      }));
    let u = (l.x0 + l.x1) / 2;
    for (let e = 0; e < 5; e++) {
      let t = 3 + e * 0.42;
      (r.col(10133670),
        r.box(u - 0.08, 0.93, t - 0.08, u + 0.08, 0.95, t + 0.08, 55),
        r.box(u + 0.07, 0.95, t - 0.01, u + 0.08, 1.42, t + 0.01, 63),
        r.col(3811866),
        r.cyl(u, t, 0.03, 0.03, 0.95, 1, 8, !0),
        r.col(3828440, 1, 1.8),
        r.cyl(u, t, 0.012, 0, 1, 1.035, 6, !1),
        this.gl.col(14215408, 0.22),
        this.gl.sphere(u, 1.12, t, 0.075, 10, 7),
        this.gl.cyl(u, t, 0.05, 0.05, 1.2, 1.36, 10, !1),
        r.col(2757640, 0.05),
        r.sphere(u, 1.1, t, 0.06, 8, 5, 0.55));
    }
    (r.tex(a(`k-cups`), 16777215, 0.08),
      r.rectX(l.z0 + 0.4, 1.45, l.z1 - 0.3, 2.05, l.x0 + 0.1, -1),
      r.col(3809812),
      r.box(l.x0 + 0.05, 1.42, l.z0 + 0.35, l.x1, 1.45, l.z1 - 0.25, 55),
      r.box(l.x0 + 0.05, 1.74, l.z0 + 0.35, l.x1, 1.77, l.z1 - 0.25, 55));
    for (let t = 0; t < 6; t++) {
      let i = l.z0 + 0.5 + t * 0.32;
      (r.tex(a(`k-fuda-${t}`), 16777215, 0.08),
        r.rectX(i, n - 0.95, i + 0.26, n - 0.2, e / 2 - 0.012, -1));
    }
    let d = i.phone;
    (r.tex(a(`k-phone`), 16777215, 0.05),
      r.box(d.x - 0.12, c.h, d.z - 0.1, d.x + 0.12, c.h + 0.12, d.z + 0.1, 55),
      r.col(15761568),
      r.box(
        d.x - 0.1,
        c.h + 0.12,
        d.z - 0.06,
        d.x + 0.1,
        c.h + 0.16,
        d.z + 0.02,
        55,
      ),
      r.sphere(d.x - 0.1, c.h + 0.17, d.z - 0.02, 0.03, 6, 4, 1.2),
      r.sphere(d.x + 0.1, c.h + 0.17, d.z - 0.02, 0.03, 6, 4, 1.2),
      yield `counter`);
    let f = i.corner;
    (r.col(2758156),
      r.box(
        f.screenX - 0.04,
        0,
        f.screenZ0,
        f.screenX + 0.04,
        1.6,
        t - 0.02,
        55,
      ));
    for (let e = f.screenZ0; e < t - 0.4; e += 0.6)
      (r.tex(a(`k-frost`), 16777215, 0.12),
        r.rectX(e + 0.05, 0.5, e + 0.55, 1.5, f.screenX - 0.045, -1),
        r.rectX(e + 0.05, 0.5, e + 0.55, 1.5, f.screenX + 0.045, 1));
    (vn(r, f.screenX, f.screenZ0 - 0.35, 1.25, 5913124, 3828266),
      this.boxes.push({
        x0: f.screenX - 0.05,
        z0: f.screenZ0,
        x1: f.screenX + 0.05,
        z1: t,
        y0: 0,
        y1: 1.6,
      }),
      this.boxes.push({
        x0: f.screenX - 0.25,
        z0: f.screenZ0 - 0.6,
        x1: f.screenX + 0.25,
        z1: f.screenZ0 - 0.1,
        y0: 0,
        y1: 1.2,
        tag: `prop`,
      }),
      Mg(r, f.tx, f.tz, 0.75, 0.75, 0.7, 16777215, 1708040, a(`k-tabletop`)),
      this.boxes.push({
        x0: f.tx - 0.38,
        z0: f.tz - 0.38,
        x1: f.tx + 0.38,
        z1: f.tz + 0.38,
        y0: 0,
        y1: 0.72,
        tag: `prop`,
      }),
      this.armchair(f.tx, f.tz + 0.72, 0),
      this.armchair(f.tx, f.tz - 0.72, Math.PI),
      this.ashtray(f.tx + 0.2, f.tz + 0.1, 0.7),
      this.cup(f.tx - 0.12, f.tz + 0.2, 0.7),
      this.lamp(f.tx, f.tz, 0.8),
      r.tex(a(`k-painting`), 16777215, 0.06),
      r.rectZ(-1.3, 1.35, 0.4, 2.3, t - 0.012, -1),
      r
        .push()
        .translate(-e / 2 + 0.03, 2, t - 3.4)
        .rotateZ(-Math.PI / 2),
      r.col(3809812),
      r.cyl(0, 0, 0.18, 0.18, -0.02, 0.02, 16, !0, !0),
      r.col(16051416, 0.1),
      r.disc(0, 0.025, 0, 0.15, 16, !0),
      r.pop(),
      r.tex(a(`k-wood`), 9071178, 0.02),
      r.rectZ(1.2, 0, 2, 2.05, t - 0.013, -1),
      r.col(11569216),
      r.box(1.86, 0.95, t - 0.05, 1.9, 1.05, t - 0.013, 47),
      yield `corner`);
    let p = i.showcase;
    (r.tex(a(`k-wood`), 16777215, 0.02),
      r.box(p.x0, 0, p.z0, p.x1, 0.9, p.z1, 55),
      r.tex(a(`k-sample`), 16777215, 0.55, 1.2),
      r.rectZ(p.x0 + 0.04, 0.95, p.x1 - 0.04, 1.42, p.z1 - 0.1, -1),
      r.rectY(
        p.x0 + 0.04,
        p.z0 + 0.02,
        p.x1 - 0.04,
        p.z1 - 0.02,
        0.9,
        1,
        0,
        0.75,
        1,
        1,
      ),
      r.col(16774360, 1, 1.4),
      r.rectY(p.x0 + 0.06, p.z0 + 0.05, p.x1 - 0.06, p.z1 - 0.05, 1.5, -1),
      this.gl.col(15266032, 0.14),
      this.gl.rectZ(p.x0, 0.9, p.x1, 1.52, p.z1, 1),
      r.col(2758156),
      r.box(p.x0, 1.5, p.z0, p.x1, 1.54, p.z1, 55),
      this.boxes.push({
        x0: p.x0,
        z0: p.z0,
        x1: p.x1,
        z1: p.z1,
        y0: 0,
        y1: 1.55,
        tag: `prop`,
      }),
      r.col(3809812),
      r.box(-e / 2 + 0.05, 0, 0.9, -e / 2 + 0.35, 1.1, 1.7, 55),
      r.tex(a(`k-paper`), 16777215, 0.04),
      r.rectX(0.95, 0.7, 1.65, 1.08, -e / 2 + 0.352, 1),
      this.boxes.push({
        x0: -e / 2 + 0.05,
        z0: 0.9,
        x1: -e / 2 + 0.35,
        z1: 1.7,
        y0: 0,
        y1: 1.1,
        tag: `prop`,
      }),
      yield `window`);
    let m = this.lampLights;
    (m.push({ x: 0, y: n - 0.3, z: t / 2, r: 6, c: [0.12, 0.09, 0.06] }),
      m.push({
        x: c.x1 + 0.2,
        y: n - 0.3,
        z: 4.2,
        r: 3.2,
        c: [0.3, 0.24, 0.16],
      }),
      m.push({
        x: (p.x0 + p.x1) / 2,
        y: 1.45,
        z: p.z1 - 0.2,
        r: 1.6,
        c: [0.36, 0.32, 0.24],
      }),
      (this.bake = { amb: [0.34, 0.28, 0.22], lights: m, floorAO: 0.55 }),
      (this.lampLights = []));
  }
  lampLights = [];
  lamp(e, t, n) {
    let r = this.g,
      i = this.H;
    (r.col(1708040),
      r.box(e - 0.004, i - n + 0.25, t - 0.004, e + 0.004, i, t + 0.004, 63),
      r.tex(this.R(`k-stained`), 16777215, 0.9, 1.5),
      r.lathe(e, t, [0.05, i - n + 0.25, 0.2, i - n + 0.08, 0.24, i - n], 10),
      r.tex(this.R(`k-lamp`), 16777215, 1, 1.6),
      r.disc(e, i - n + 0.005, t, 0.2, 10, !1),
      this.lampLights.push({
        x: e,
        y: i - n - 0.1,
        z: t,
        r: 2.3,
        c: [0.46, 0.3, 0.14],
      }));
  }
  ashtray(e, t, n) {
    (this.gl.col(14214376, 0.35),
      this.gl.cyl(e, t, 0.06, 0.065, n, n + 0.03, 10, !0));
  }
  cup(e, t, n) {
    let r = this.g;
    (r.col(16315626),
      r.cyl(e, t, 0.07, 0.07, n, n + 0.008, 10, !0),
      r.cyl(e, t, 0.035, 0.042, n + 0.008, n + 0.07, 10, !1),
      r.col(2757640),
      r.disc(e, n + 0.062, t, 0.034, 10, !0));
  }
  armchair(e, t, n) {
    let r = this.g;
    (r.push().translate(e, 0, t).rotateY(-n),
      r.col(2758156),
      r.box(-0.32, 0, -0.3, 0.32, 0.3, 0.3, 55),
      r.tex(this.R(`k-velvet`), 16777215, 0.02),
      r.box(-0.3, 0.3, -0.28, 0.3, 0.44, 0.28, 55),
      r.box(-0.32, 0.44, 0.16, 0.32, 0.95, 0.3, 55),
      r.box(-0.32, 0.44, -0.26, -0.22, 0.62, 0.16, 55),
      r.box(0.22, 0.44, -0.26, 0.32, 0.62, 0.16, 55),
      r.pop());
  }
  afterBake(e, t, n) {
    e === `game` && this.g.emitRange(t, n, 1);
  }
  frameHex() {
    return 3809812;
  }
  transomHex() {
    return 2758156;
  }
  transom(e, t, n) {
    if (n - t < 0.12) return;
    e.tex(this.R(`k-name`), 16777215, 0.5, 1.1);
    let r = (this.dx + this.doorHW + this.W / 2) / 2;
    e.rectZ(r - 1, t + 0.03, r + 1, Math.min(n - 0.02, t + 0.5), -0.062, -1);
  }
  glassDressing(e, t, n) {
    e.tex(this.R(`k-glass-name`), 16777215, 0.6);
    let r = n + 0.3,
      i = Math.min(this.W / 2 - 0.2, r + 2.6);
    (i - r > 1 && e.rectZ(r, 1.62, i, 2.05, -0.035, -1),
      e.tex(this.R(`k-hours`), 16777215, 0.3),
      e.rectZ(t - 0.62, 1.1, t - 0.12, 1.43, -0.035, -1));
  }
  leafSticker(e, t, n) {
    e.tex(this.R(`k-smoke`), 16777215, 0.4);
    let r = (t + n) / 2;
    e.rectZ(r - 0.2, 1.3, r + 0.2, 1.42, -0.071, -1);
  }
  greeting() {
    let e = xo(`walkin.kissa.voice.irasshai`);
    return { ja: L(`walkin.kissa.voice.irasshai`), zh: e.zh, en: e.en };
  }
  spotDefs() {
    let e = this.L,
      t = { zh: `老闆不理你……`, en: `The master ignores you…` };
    return [
      {
        x: e.stoolX - 0.3,
        z: 5.4,
        r: 1.1,
        label: () =>
          this.panic > 0
            ? t
            : { zh: `按 E 在吧台點餐`, en: `Press E to order at the counter` },
        act: () => (this.panic > 0 ? void 0 : this.openMenu()),
      },
      {
        x: e.phone.x,
        z: e.phone.z - 0.6,
        r: 0.6,
        label: () => ({
          zh: `按 E 打粉紅公共電話（¥10）`,
          en: `Press E to use the pink phone (¥10)`,
        }),
        act: () => this.phone(),
      },
    ];
  }
  phone() {
    let e = this.sh.ctx;
    if (!this.pay(10, `walkin.kissa.phone`)) return;
    let t = xo(`walkin.kissa.voice.phone`);
    try {
      e.audio.play(`ui_confirm`, { volume: 0.4 });
    } catch {}
    e.events.emit(`subtitle`, {
      text: {
        zh: r.on ? r.t(`「${t.zh}」`, `「${r.jz(t.zh)}」`) : `「${t.zh}」`,
        en: `"${t.en}"`,
      },
      duration: 2.6,
      speaker: e.t({ zh: `電話`, en: `Phone` }),
    });
  }
  openMenu() {
    let e = this.sh.ctx.env?.hour ?? 12,
      t = (e < 11 ? [Kg, ...Gg] : Gg).map(([e, t, n, i]) =>
        this.menuItem(
          xo(e),
          t,
          n,
          i,
          {
            zh: r.on ? r.t(`+${n} 生命`, `HP +${n}`) : `+${n} 生命`,
            en: `+${n} HP`,
          },
          e,
        ),
      );
    this.sh.menu.show({
      title: xo(`walkin.kissa.name`),
      subtitle:
        e < 11
          ? { zh: `早餐套餐供應到 11:00`, en: `Morning set until 11:00` }
          : {
              zh: `老派純喫茶・虹吸咖啡`,
              en: `An old-school kissa · siphon coffee`,
            },
      accent: `#8a2a1a`,
      items: t,
      owner: this,
    });
  }
  namedSpots() {
    return Jg(this.W, this.D);
  }
  views() {
    let e = super.views(),
      t = this.L,
      n = this.D;
    return (
      (e.sig = [t.dx + 0.4, 1.55, 0.8, 0.9, 1.1, n - 1]),
      (e.detail = [
        t.corner.tx + 1.6,
        1.55,
        t.corner.tz - 1.9,
        t.corner.tx - 0.2,
        0.85,
        t.corner.tz + 0.5,
      ]),
      e
    );
  }
  kindSpot(e) {
    let t = Jg(this.W, this.D)[e];
    return t ? [t[0], t[1]] : null;
  }
};
