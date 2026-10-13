// tokyo__assets__region-tokyo-BcM3fReU 68 — cz0
// Lines 35035-35703 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var Wy = class e extends Jv {
    kind = `izakaya`;
    page = `izakaya`;
    minW = 5.5;
    minD = 7;
    maxD = 10.5;
    front = `slide`;
    name;
    audioRoom = `room`;
    L = null;
    otoshi = !1;
    rumble = 0;
    rumbleScan = 0;
    lastGrumble = -1e9;
    trains;
    wantCrown = Ry;
    static create(t, n) {
      let r = Lc(t.ctx.plan)?.byId.get(n.corridor);
      if (!r) return null;
      let i = n.s0 + zy + (8 - zy) / 2,
        a = r.path.at(i, { x: 0, z: 0, tx: 0, tz: 1 }),
        o = (n.side < 0 ? r.edge0.at(i) : r.edge1.at(i)) - n.side * bl,
        s = r.path.pos(i, o, { x: 0, z: 0 }),
        c = -a.tz * n.side,
        l = a.tx * n.side,
        u = Math.atan2(c, -l),
        d = new e(t, n, {
          x: s.x + c * 0.6,
          z: s.z + l * 0.6,
          facing: u,
          width: 8 - zy,
        });
      return (
        (d.bayFrame = {
          x: s.x,
          z: s.z,
          facing: u,
          depth: Math.abs((n.side < 0 ? r.edge1.at(i) : r.edge0.at(i)) - o),
        }),
        d
      );
    }
    bayFrame = null;
    constructor(e, t, n) {
      (super(e, t.id, n, t.hours),
        (this.name = { zh: t.label.zh, en: t.label.en }),
        (this.fillHex = 16766624),
        (this.fillK = 0.85));
    }
    prepare() {
      let e = this.bayFrame;
      if (!e) return -1;
      let t = this.sh.ctx,
        n = Math.sin(e.facing),
        r = -Math.cos(e.facing),
        i = e.x - n * 2,
        a = e.z - r * 2,
        o = [];
      t.statics.query(i - 0.05, a - 0.05, i + 0.05, a + 0.05, o);
      let s = o.find(
        (e) =>
          !e.disabled &&
          e.tag === `wall` &&
          e.minY < 0.5 &&
          e.maxY > Ry &&
          e.kind === 0,
      );
      if (!s) return 0;
      let c = t.plan.groundHeight(e.x + n * 0.8, e.z + r * 0.8) + 0.012,
        l = new er(e.x, c, e.z, e.facing);
      return (
        (this.fr = l),
        (this.W = 8 - zy - 0.02),
        (this.D = Math.min(this.maxD, e.depth - 2.5)),
        this.D < this.minD
          ? -1
          : ((this.wantCrown = Math.min(Ry, s.maxY - c - 0.3)),
            (this.H = this.wantCrown),
            (this.ovH = this.wantCrown),
            (this.glassTop = 2.3),
            (this.doorTop = 2.05),
            (this.signY = 3.4),
            (this.doorHW = 0.85),
            (this.dx = 0),
            (this.x = l.wx(0, this.D / 2)),
            (this.z = l.wz(0, this.D / 2)),
            (this.rect = l.aabb(
              -this.W / 2 + 0.02,
              -0.6,
              this.W / 2 - 0.02,
              this.D - 0.02,
            )),
            1)
      );
    }
    carveOn() {
      let e = this.fr,
        t = this.W,
        n = e.aabb(-t / 2 + 0.02, -bl - 0.05, t / 2 - 0.02, this.D - 0.02);
      ((this.cv ||= fr(
        this.sh.ctx.statics,
        n,
        e.py + this.wantCrown,
        (e) => e.tag === `wall` && e.minY < 0.5 && e.maxY > Ry && e.kind === 0,
      )),
        this.cv.set(!0));
    }
    layout() {
      if (this.L) return this.L;
      let { W: e, D: t } = this,
        n = 1 * (e / 2 - 1.55),
        r = 1 * (e / 2 - 1.05),
        i = Math.min(t - 1.2, 6.2),
        a = [];
      for (let e = 1.6; e < i - 0.2; e += 0.6) a.push(e);
      let o = [];
      for (let n = 1.6; n < t - 1; n += 1.9) o.push([-1 * (e / 2 - 0.95), n]);
      return (
        t - i > 2.4 && o.push([1 * (e / 2 - 1.3), i + 1.4]),
        (this.L = {
          s: 1,
          cx0: n,
          cx1: r,
          cz0: 1.2,
          cz1: i,
          stools: a,
          tables: o,
        }),
        this.L
      );
    }
    peopleSpots() {
      let e = this.layout(),
        t = this.rng(5),
        n = e.s,
        r = [];
      r.push({
        x: n * (this.W / 2 - 0.55),
        z: e.cz0 + 0.9,
        ry: n > 0 ? Math.PI / 2 : -Math.PI / 2,
        pose: `cook`,
        desc: hy(this.seed),
        staff: !0,
      });
      let i = 0;
      for (let [n, a] of e.tables)
        for (let e of [-0.55, 0.55])
          t() > 0.7 ||
            i > 6 ||
            (r.push({
              x: n,
              z: a + e,
              y: -0.12,
              ry: e < 0 ? Math.PI : 0,
              pose: t() < 0.5 ? `eat` : `sit`,
              desc:
                t() < 0.55
                  ? _y(this.seed + 31 + i, t() < 0.4)
                  : fy(
                      t() < 0.5 ? `jp-oji` : `jp-ol-casual`,
                      this.seed + 47 + i,
                    ),
            }),
            i++);
      for (let i = 0; i < e.stools.length; i += 3)
        t() > 0.6 ||
          r.push({
            x: e.cx0 - n * 0.35,
            z: e.stools[i],
            ry: n > 0 ? -Math.PI / 2 : Math.PI / 2,
            pose: `stool`,
            desc: _y(this.seed + 71 + i, !1),
          });
      return r;
    }
    archY(e) {
      let t = e / (this.W / 2);
      return Ly + (this.wantCrown - Ly) * Math.sqrt(Math.max(0, 1 - t * t));
    }
    *content() {
      let { W: e, D: t, g: n } = this,
        r = this.layout(),
        i = r.s,
        a = (e) => this.R(e);
      Hn(
        n,
        -e / 2,
        0,
        e / 2,
        t,
        0,
        { hex: 16777215, reg: a(`i-floor`), tile: 2 },
        !0,
      );
      for (let r of [-1, 1]) {
        let i = (r * e) / 2;
        for (let e = 0; e < t - 0.001; e += 2) {
          let o = Math.min(t, e + 2);
          (n.tex(a(`i-plaster`), 16777215, 0),
            n.rectX(e, 0, o, 1.9, i, r > 0 ? -1 : 1, 0, 0, (o - e) / 2, 1),
            n.tex(a(`i-brick`), 16777215, 0),
            n.rectX(e, 1.9, o, Ly, i, r > 0 ? -1 : 1, 0, 0, (o - e) / 2, 1));
        }
        (n.col(3811870),
          n.box(
            r > 0 ? i - 0.05 : i,
            1.86,
            0,
            r > 0 ? i : i + 0.05,
            1.92,
            t,
            63,
          ));
      }
      for (let r = 0; r < 14; r++) {
        let i = -e / 2 + (e * r) / 14,
          o = -e / 2 + (e * (r + 1)) / 14,
          s = this.archY(i),
          c = this.archY(o);
        n.tex(a(`i-brick`), 13156536, 0);
        for (let e = 0; e < t - 0.001; e += 2.5) {
          let r = Math.min(t, e + 2.5);
          n.quad(i, s, r, o, c, r, o, c, e, i, s, e, 0, 0, 1, (r - e) / 2.5);
        }
      }
      n.tex(a(`i-brick`), 11577504, 0);
      for (let r = 0; r < 14; r++) {
        let i = -e / 2 + (e * r) / 14,
          a = -e / 2 + (e * (r + 1)) / 14,
          o = this.archY(i),
          s = this.archY(a);
        (n.quad(
          a,
          0,
          t,
          i,
          0,
          t,
          i,
          o,
          t,
          a,
          s,
          t,
          (a + e / 2) / e,
          0,
          (i + e / 2) / e,
          1,
        ),
          n.quad(
            i,
            this.glassTop,
            0,
            a,
            this.glassTop,
            0,
            a,
            s,
            0,
            i,
            o,
            0,
            (i + e / 2) / e,
            0,
            (a + e / 2) / e,
            1,
          ));
      }
      yield `shell`;
      let o = Math.min(r.cx0, r.cx1),
        s = Math.max(r.cx0, r.cx1);
      (n.tex(a(`i-counter`), 16777215, 0.02),
        n.box(o, 0, r.cz0, s, 1, r.cz1, 63),
        n.col(5913122),
        n.box(o - 0.04, 1, r.cz0 - 0.03, s + 0.03, 1.04, r.cz1 + 0.02, 63),
        this.boxes.push({
          x0: o - 0.04,
          z0: r.cz0 - 0.03,
          x1: s + 0.03,
          z1: r.cz1 + 0.02,
          y0: 0,
          y1: 1.1,
        }));
      for (let e of r.stools)
        (Qn(n, r.cx0 - i * 0.35, e, 0.66, 9050644),
          this.boxes.push({
            x0: r.cx0 - i * 0.35 - 0.16,
            z0: e - 0.16,
            x1: r.cx0 - i * 0.35 + 0.16,
            z1: e + 0.16,
            y0: 0,
            y1: 0.68,
            tag: `prop`,
          }));
      let c = i * (e / 2 - 0.45),
        l = Math.min(c - 0.22, c + 0.22),
        u = Math.max(c - 0.22, c + 0.22);
      (n.col(6975090),
        n.box(l, 0, r.cz0 + 0.2, u, 0.85, r.cz0 + 1.6, 63),
        n.col(2763824),
        n.box(l, 0.85, r.cz0 + 0.2, u, 1, r.cz0 + 1.6, 59),
        this.mark(`coals`, () => {
          (n.tex(a(`i-coals`), 16777215, 1, 2.2),
            n.rectY(l + 0.03, r.cz0 + 0.24, u - 0.03, r.cz0 + 1.56, 0.97, 1));
        }),
        n.tex(a(`i-skewers`), 16777215, 0.15),
        n.rectY(l + 0.02, r.cz0 + 0.3, u - 0.02, r.cz0 + 1.5, 1.01, 1),
        this.gl.col(14210252, 0.16));
      for (let e = 0; e < 4; e++)
        this.gl.sphere(
          c - i * 0.06 * e,
          1.3 + e * 0.3,
          r.cz0 + 0.6 + (e % 2) * 0.45,
          0.16 + e * 0.05,
          8,
          5,
          0.7,
        );
      (n.col(10133670),
        n.box(l - 0.1, 2.45, r.cz0 + 0.1, u + 0.05, 2.6, r.cz0 + 1.7, 63),
        n.box(
          l + 0.05,
          2.6,
          r.cz0 + 0.7,
          u - 0.1,
          this.archY(c) - 0.1,
          r.cz0 + 1,
          63,
        ),
        this.boxes.push({
          x0: l,
          z0: r.cz0 + 0.2,
          x1: u,
          z1: r.cz0 + 1.6,
          y0: 0,
          y1: 1.05,
        }));
      let d = r.cz0 + 2;
      (n.tex(a(`i-shelf-bottles`), 16777215, 0.06),
        n.rectX(
          d,
          1.3,
          Math.min(r.cz1 + 0.6, d + 2.4),
          1.9,
          (e / 2) * i - i * 0.01,
          i > 0 ? -1 : 1,
        ),
        n.col(4861984),
        n.box(
          i > 0 ? e / 2 - 0.3 : -e / 2,
          1.26,
          d,
          i > 0 ? e / 2 : -e / 2 + 0.3,
          1.3,
          Math.min(r.cz1 + 0.6, d + 2.4),
          63,
        ),
        yield `counter`);
      let f = [`i-crate-y`, `i-crate-r`, `i-crate-b`],
        p = 0,
        m = (e, t, r) => {
          (n.tex(a(f[p++ % 3]), 16777215, 0.02),
            n.box(e - 0.22, r, t - 0.18, e + 0.22, r + 0.31, t + 0.18, 63));
        };
      for (let [e, t] of r.tables) {
        (m(e, t, 0),
          m(e, t, 0.31),
          n.tex(a(`i-ply`), 16777215, 0.02),
          n.box(e - 0.42, 0.62, t - 0.36, e + 0.42, 0.65, t + 0.36, 63));
        let r = (e, t) => {
          (n.tex(a(`i-beer`), 16777215, 0.08),
            n.cyl(e, t, 0.045, 0.045, 0.65, 0.81, 8, !0));
        };
        (r(e - 0.2, t - 0.12),
          r(e + 0.18, t + 0.1),
          n.col(15920612),
          n.cyl(e, t, 0.12, 0.12, 0.65, 0.67, 10, !0),
          n.tex(a(`i-skewers`), 16777215, 0.05),
          n.rectY(e - 0.09, t - 0.06, e + 0.09, t + 0.06, 0.672, 1));
        for (let n of [-0.55, 0.55]) m(e, t + n, 0);
        this.boxes.push({
          x0: e - 0.43,
          z0: t - 0.37,
          x1: e + 0.43,
          z1: t + 0.37,
          y0: 0,
          y1: 0.66,
        });
      }
      yield `tables`;
      let h = -i * (e / 2) + -i * -0.012,
        g = (e / 2) * i - i * 0.012;
      (By.forEach((e, r) => {
        let o = 0.6 + r * 0.26;
        o + 0.2 > t - 0.4 ||
          (n.tex(a(`i-tan-${r}`), 16777215, 0.12),
          n.rectX(o, 2, o + 0.2, 2.95, h, i > 0 ? 1 : -1));
      }),
        n.tex(a(`i-osusume`), 16777215, 0.08),
        n.rectX(r.cz1 + 0.2, 1.25, r.cz1 + 1.1, 1.85, g, i > 0 ? -1 : 1),
        n.tex(a(`i-yureru`), 16777215, 0.1),
        n.rectZ(-0.5, 1.4, 0.5, 1.9, t - 0.012, -1),
        n.tex(a(`i-since`), 16777215, 0.05),
        n.rectZ(-0.9, 2.6, 0.9, 3.05, t - 0.012, -1),
        n.tex(a(`i-poster`), 16777215, 0.06),
        n.rectZ(1, 1.5, 1.6, 2.5, t - 0.012, -1));
      let _ = t - 0.02;
      (n.col(14206106),
        n.box(-2.2, 2.95, _ - 0.32, -1.3, 3, _, 63),
        n.col(15260864),
        n.box(-2, 3, _ - 0.26, -1.5, 3.32, _ - 0.06, 63),
        n.col(2763306),
        n.box(-2.1, 3.32, _ - 0.3, -1.4, 3.38, _ - 0.02, 63),
        n.col(16777215, 0.3),
        n.box(-1.95, 3.1, _ - 0.32, -1.92, 3.25, _ - 0.29, 63),
        n.box(-1.58, 3.1, _ - 0.32, -1.55, 3.25, _ - 0.29, 63),
        n.col(16052456),
        n.sphere(c - i * 0.1, 1.12, r.cz1 - 0.2, 0.08, 8, 6, 1.2),
        n.col(13113368),
        n.box(
          c - i * 0.1 - 0.02,
          1.05,
          r.cz1 - 0.26,
          c - i * 0.1 + 0.02,
          1.08,
          r.cz1 - 0.12,
          63,
        ));
      let v = -i * (e / 2 - 0.4);
      (n.col(1447962),
        n.box(v - 0.34, 2.38, t - 0.75, v + 0.34, 2.82, t - 0.6, 63),
        this.mark(`tv`, () => {
          (n.tex(a(`i-tv`), 16777215, 1, 1.15),
            n.rectZ(v - 0.31, 2.41, v + 0.31, 2.79, t - 0.751, -1));
        }),
        yield `walls`);
      let y = [],
        b = (e, t, r) => {
          (n.col(1710618),
            n.box(
              e - 0.004,
              t + 0.24,
              r - 0.004,
              e + 0.004,
              this.archY(e),
              r + 0.004,
              63,
            ),
            n.tex(a(`i-lantern`), 16777215, 0.9, 1.6),
            n.cyl(e, r, 0.16, 0.16, t - 0.24, t + 0.24, 10, !0, !0),
            y.push({ x: e, y: t, z: r, r: 2.2, c: [0.42, 0.12, 0.06] }));
        };
      (b(-1.2, 2.6, 0.9), b(1.2, 2.6, 0.9), b(0, 2.8, t * 0.55));
      for (let e = 1.5; e < t - 0.5; e += 2.6)
        (n.col(16777215, 1, 2),
          n.box(
            -0.6,
            this.archY(0) - 0.32,
            e - 0.03,
            0.6,
            this.archY(0) - 0.28,
            e + 0.03,
            63,
          ),
          n.col(2763306),
          n.box(
            -0.004,
            this.archY(0) - 0.28,
            e,
            0.004,
            this.archY(0),
            e + 0.004,
            63,
          ),
          y.push({
            x: 0,
            y: this.archY(0) - 0.4,
            z: e,
            r: 4.2,
            c: [0.32, 0.3, 0.26],
          }));
      (y.push({ x: c, y: 1.2, z: r.cz0 + 0.9, r: 2.6, c: [0.6, 0.26, 0.08] }),
        (this.bake = { amb: [0.42, 0.35, 0.3], lights: y, floorAO: 0.55 }));
    }
    afterBake(e, t, n) {
      (e === `smoke` && this.g.emitRange(t, n, 0.5),
        (e === `coals` || e === `tv`) && this.g.emitRange(t, n, 1));
    }
    frameHex() {
      return 4861984;
    }
    transomHex() {
      return 3810840;
    }
    transom(e, t) {
      (e.tex(this.R(`i-sign`), 16777215, 0.45, 1.1),
        e.rectZ(-1.3, t + 0.12, 1.3, t + 0.78, -0.08, -1),
        e.col(2759184),
        e.box(-1.33, t + 0.1, -0.08, 1.33, t + 0.8, -0.05, 31));
    }
    glassDressing(e, t, n) {}
    kindTick(e) {
      let t = this.sh.ctx;
      if (
        ((this.rumbleScan -= e),
        this.rumbleScan <= 0 &&
          ((this.rumbleScan = 0.25), (this.rumble = this.carsOverhead())),
        this.inside && this.rumble > 0)
      ) {
        try {
          t.cameraRig.shake?.(Math.min(0.06, 0.012 * this.rumble) * e * 4);
        } catch {}
        if (t.time.elapsed - this.lastGrumble > 50) {
          this.lastGrumble = t.time.elapsed;
          let e = ac(`interior.izakaya.voice.densha`);
          try {
            t.audio.say?.(
              { ja: B(`interior.izakaya.voice.densha`), zh: e.zh, en: e.en },
              { lang: `ja`, priority: 2, volume: 0.6 },
            );
          } catch {}
          t.events.emit(`subtitle`, {
            text: {
              zh: r.on
                ? r.t(`「${e.zh}」`, `「${r.jz(e.zh)}」`)
                : `「${e.zh}」`,
              en: `"${e.en}"`,
            },
            duration: 1.6,
            speaker: t.t({ zh: `常客`, en: `Regular` }),
          });
        }
      }
    }
    carsOverhead() {
      this.trains === void 0 &&
        (this.trains =
          this.sh.ctx.scene.getObjectByName(`transit-trains`) ?? null);
      let e = this.trains;
      if (!e) return 0;
      let t = Gy.elements,
        n = 0;
      for (let r = 0; r < e.instanceCount; r++) {
        try {
          if (!e.getVisibleAt(r)) continue;
          e.getMatrixAt(r, Gy);
        } catch {
          continue;
        }
        let i = t[12] - this.x,
          a = t[14] - this.z;
        i * i + a * a < 144 && t[13] > 5 && n++;
      }
      return n;
    }
    greeting() {
      let e = ac(`interior.izakaya.voice.rasshai`);
      return { ja: B(`interior.izakaya.voice.rasshai`), zh: e.zh, en: e.en };
    }
    spotDefs() {
      let e = this.layout();
      return [
        {
          x: e.cx0 - e.s * 0.95,
          z: e.stools[1] ?? e.cz0 + 1,
          r: 1,
          label: () =>
            this.panic > 0
              ? { zh: `老闆不理你……`, en: `The master ignores you…` }
              : { zh: `按 E 點菜`, en: `Press E to order` },
          act: () => (this.panic > 0 ? void 0 : this.openMenu()),
        },
      ];
    }
    openMenu() {
      let e = this.sh.ctx,
        t = Vy.map(([t, n, i, a]) => {
          let o = ac(t);
          return this.menuItem(
            o,
            n,
            i,
            a,
            {
              zh:
                i > 5
                  ? r.on
                    ? r.t(`+${i} 生命`, `HP +${i}`)
                    : `+${i} 生命`
                  : `乾杯！`,
              en: i > 5 ? `+${i} HP` : `Kanpai!`,
            },
            t,
            () => {
              if (this.otoshi) return;
              ((this.otoshi = !0),
                e.money.spend(Hy, void 0, `izakaya`) &&
                  e.events.emit(`notify`, {
                    text: {
                      zh: r.on
                        ? r.t(
                            `附上一小碟「お通し」（日式小菜費）−${e.money.format(Hy)}`,
                            `お通し（席料代わりの小鉢）が付いてきた −${e.money.format(Hy)}`,
                          )
                        : `附上一小碟「お通し」（日式小菜費）−${e.money.format(Hy)}`,
                      en: `A little "otoshi" dish comes with it (table charge) −${e.money.format(Hy)}`,
                    },
                    duration: 3.2,
                  }));
              let t = ac(`interior.izakaya.voice.yorokonde`);
              try {
                e.audio.say?.(
                  {
                    ja: B(`interior.izakaya.voice.yorokonde`),
                    zh: t.zh,
                    en: t.en,
                  },
                  { lang: `ja`, priority: 4, volume: 0.8 },
                );
              } catch {}
            },
          );
        });
      this.sh.menu.show({
        title: { zh: this.name.zh, en: this.name.en },
        subtitle: {
          zh: `電車在頭頂上轟隆隆 · 第一份附「お通し」`,
          en: `Trains rumble overhead · first order comes with an "otoshi"`,
        },
        speaker: {
          name: { zh: `老闆`, en: `Master` },
          line: { zh: `「要喝什麼？」`, en: `"What are you drinking?"` },
        },
        accent: `#c8281c`,
        items: t,
        owner: this,
      });
    }
    views() {
      let e = super.views(),
        t = this.layout(),
        n = t.s;
      return (
        (e.street = [1.6, 1.62, -6.5, 0, 2.2, 1]),
        (e.sig = [-n * 0.9, 1.6, 0.7, n * 0.4, 2.4, this.D - 0.5]),
        (e.detail = [
          t.cx0 - n * 1,
          1.45,
          t.cz0 + 2.4,
          n * (this.W / 2 - 0.5),
          1.05,
          t.cz0 + 0.7,
        ]),
        e
      );
    }
    kindSpot(e) {
      let t = this.layout();
      return e === `counter`
        ? [t.cx0 - t.s * 0.95, t.stools[1] ?? t.cz0 + 1]
        : e === `tables`
          ? [0, (t.tables[0]?.[1] ?? 2) + 0.4]
          : null;
    }
  },
  Gy = new M(),
  Ky = 390,
  qy = 400,
  Jy = 4;
