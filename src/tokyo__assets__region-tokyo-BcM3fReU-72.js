// tokyo__assets__region-tokyo-BcM3fReU 72 — math
// Lines 36860-37330 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var eb = class extends Jv {
    kind = `pachinko`;
    page = `pachinko`;
    minW = 9;
    minD = 12;
    maxD = 22;
    front = `auto`;
    name;
    audioRoom = `hall`;
    L = null;
    spinT = 0;
    clackT = 0;
    told = !1;
    seatsTaken = new Set();
    constructor(e, t, n) {
      (super(e, t.id, n, t.hours),
        (this.name = { zh: t.label.zh, en: t.label.en }),
        (this.fillHex = 16773344),
        (this.fillK = 1));
    }
    layoutDoor() {
      ((this.doorHW = 0.95), (this.dx = 0), (this.L = null));
    }
    layout() {
      if (this.L) return this.L;
      let { W: e, D: t } = this,
        n = 0.62,
        r = 1.55,
        i = e - 2 * n,
        a = Math.max(1, Math.floor((i - r) / 2.55)),
        o = a * 1 + (a + 1) * r,
        s = [];
      for (let t = 0; t < a; t++)
        s.push(-e / 2 + n + (i - o) / 2 + r + 1 / 2 + t * 2.55);
      let c = t - 2.6,
        l = [];
      if (s.length)
        for (let e of [-1, 1])
          for (let t = 0; t < 3; t++)
            l.push([s[0] + e * 0.9199999999999999, 3.8 + t * Qy, e]);
      return (
        (this.L = {
          ix: s,
          iz0: 3.4,
          iz1: c,
          wall: [-e / 2 + n, e / 2 - n],
          kx0: e / 2 - 3.6,
          kx1: e / 2 - 0.4,
          kz0: 1.1,
          kz1: 1.75,
          seats: l,
        }),
        this.L
      );
    }
    peopleSpots() {
      let e = this.layout(),
        t = this.rng(13),
        n = [];
      (n.push({
        x: (e.kx0 + e.kx1) / 2,
        z: e.kz1 + 0.45,
        ry: Math.PI,
        pose: `counter`,
        desc: gy(this.seed, 1714794, t() < 0.5),
        staff: !0,
      }),
        this.seatsTaken.clear());
      let r = [
          `jp-oji`,
          `jp-salaryman-shirt`,
          `jp-ojiichan`,
          `jp-obasan`,
          `jp-daigakusei`,
          `jp-salaryman`,
        ],
        i = 0;
      for (let a of e.ix)
        for (let o of [-1, 1])
          for (let s = e.iz0 + 0.4; s < e.iz1 - 0.3 && i < 11; s += Qy) {
            if (t() > 0.16) continue;
            let c = `${a.toFixed(2)}:${o}:${s.toFixed(2)}`;
            e.seats.some(
              ([e, t, n]) =>
                n === o &&
                Math.abs(e - (a + o * 0.92)) < 0.1 &&
                Math.abs(t - s) < 0.2,
            ) ||
              (this.seatsTaken.add(c),
              n.push({
                x: a + o * 0.92,
                z: s,
                ry: o > 0 ? -Math.PI / 2 : Math.PI / 2,
                pose: `stool`,
                desc: fy(r[Math.floor(t() * r.length)], this.seed + 100 + i),
              }),
              i++);
          }
      return n;
    }
    row(e, t, n, r, i) {
      let a = this.g,
        o = (e) => this.R(e),
        s = e - t * 0.5;
      (a.col(1710624),
        a.box(Math.min(e, s), 0, n, Math.max(e, s), 0.75, r, 63),
        a.tex(o(`p-tray`), 16777215, 0.05),
        a.box(
          Math.min(e, e - t * 0.18),
          0.75,
          n,
          Math.max(e, e - t * 0.18),
          0.8,
          r,
          63,
        ),
        a.col(2763314),
        a.box(
          Math.min(e - t * 0.12, s),
          0.8,
          n,
          Math.max(e - t * 0.12, s),
          2.15,
          r,
          63,
        ));
      let c = Math.floor((r - n) / Qy);
      for (let r = 0; r < c; r++) {
        let s = n + r * Qy + 0.03,
          c = s + 0.5;
        (a.tex(o(`p-machine-${(i + +(r % 7 == 3)) % 3}`), 16777215, 0.75, 1.15),
          a.rectX(s, 0.8, c, 1.72, e - t * 0.117, t),
          a.tex(o(`p-lamp`), 16777215, 0.9, 1.2),
          a.rectX(s + 0.04, 1.78, c - 0.04, 2.02, e - t * 0.117, t),
          a.tex(o(`p-unit`), 16777215, 0.4),
          a.rectX(c + 0.005, 0.85, c + 0.075, 1.6, e - t * 0.117, t));
        let l = e + t * 0.42,
          u = (s + c) / 2;
        (a.tex(o(`p-stool`), 16777215, 0.02),
          a.cyl(l, u, 0.03, 0.03, 0, 0.58, 6, !1),
          a.cyl(l, u, 0.19, 0.19, 0.58, 0.66, 10, !0),
          a.cyl(l, u, 0.16, 0.2, 0, 0.03, 8, !0));
      }
    }
    *content() {
      let { W: e, D: t, H: n, g: r } = this,
        i = this.layout(),
        a = (e) => this.R(e);
      (hr(r, {
        x0: -e / 2,
        z0: 0,
        x1: e / 2,
        z1: t,
        h: n,
        floor: { hex: 16777215, reg: a(`p-floor`), tile: 1.6 },
        wall: { hex: 16777215, reg: a(`p-wall`), tile: 1.2 },
        ceiling: { hex: 16777215, reg: a(`p-ceil`), tile: 1.2 },
        baseboard: { hex: 2763312, h: 0.1 },
        openings: [
          { wall: `front`, a: -e / 2, b: e / 2, y0: 0, y1: this.glassTop },
        ],
        ao: 0.2,
      }),
        Hn(
          r,
          -e / 2,
          0,
          e / 2,
          2.8,
          0.004,
          { hex: 16777215, reg: a(`p-entry`), tile: 1.2 },
          !0,
        ),
        yield `shell`);
      for (let e = 0; e < i.ix.length; e++) {
        let t = i.ix[e];
        (this.row(t + 0.5, 1, i.iz0, i.iz1, e),
          this.row(t - 0.5, -1, i.iz0, i.iz1, e + 1),
          r.col(2763312),
          r.box(t - 0.5, 2.15, i.iz0, t + 0.5, 2.3, i.iz1, 63));
        for (let e of [i.iz0 - 0.05, i.iz1 + 0.05])
          (r.col(3816004),
            r.box(
              t - 0.5,
              0,
              Math.min(e, e + (e < i.iz0 ? 0.05 : -0.05)),
              t + 0.5,
              2.3,
              Math.max(e, e + (e < i.iz0 ? 0.05 : -0.05)),
              63,
            ));
        (r.tex(a(`p-shindai`), 16777215, 0.8, 1.2),
          r.rectZ(t - 0.48, 1.2, t + 0.48, 1.6, i.iz0 - 0.101, -1),
          r.tex(a(`p-kinen`), 16777215, 0.3),
          r.rectZ(t - 0.45, 0.4, t + 0.45, 0.7, i.iz0 - 0.101, -1),
          this.boxes.push({
            x0: t - 0.5,
            z0: i.iz0 - 0.1,
            x1: t + 0.5,
            z1: i.iz1 + 0.1,
            y0: 0,
            y1: 2.3,
          }),
          rr(
            r,
            a(e % 2 ? `p-yen1` : `p-yen4`),
            t,
            n - 0.45,
            i.iz0 + 1.2,
            1.1,
            0.28,
            0,
            0.4,
            0.25,
          ),
          e % 2 == 0 && (yield `island`));
      }
      let o = i.iz0 - 0.4,
        s = t - 0.3;
      (this.row(i.wall[0], 1, o, s, 2),
        this.row(i.wall[1], -1, Math.max(o, i.kz1 + 1.6), s, 0),
        this.boxes.push({
          x0: -e / 2,
          z0: o,
          x1: i.wall[0],
          z1: s,
          y0: 0,
          y1: 2.2,
        }),
        this.boxes.push({
          x0: i.wall[1],
          z0: Math.max(o, i.kz1 + 1.6),
          x1: e / 2,
          z1: s,
          y0: 0,
          y1: 2.2,
        }),
        yield `walls`,
        r.col(16053488),
        r.box(i.kx0, 0, i.kz0, i.kx1, 1, i.kz1, 63),
        r.tex(a(`p-keihin`), 16777215, 0.6, 1.1),
        r.rectZ(i.kx0 + 0.1, 0.55, i.kx1 - 0.1, 0.92, i.kz0 - 0.002, -1),
        this.boxes.push({
          x0: i.kx0,
          z0: i.kz0,
          x1: i.kx1,
          z1: i.kz1,
          y0: 0,
          y1: 1.05,
        }),
        r.tex(a(`p-prizes`), 16777215, 0.35),
        r.rectZ(i.kx0, 1, i.kx1, 2.2, i.kz1 + 0.9, -1),
        r.col(14212320),
        r.box(i.kx0, 0, i.kz1 + 0.9, i.kx1, 1, i.kz1 + 1.3, 63),
        this.boxes.push({
          x0: i.kx0,
          z0: i.kz1 + 0.9,
          x1: i.kx1,
          z1: i.kz1 + 1.3,
          y0: 0,
          y1: 2.2,
        }));
      let c = -e / 2 + 0.012;
      (r.tex(a(`p-nomeri`), 16777215, 0.12),
        r.rectX(0.8, 1.3, 2, 2.1, c, 1),
        r.tex(a(`p-under18`), 16777215, 0.12),
        r.rectZ(-e / 2 + 0.6, 2.2, -e / 2 + 2.6, 2.5, 0.012, 1));
      let l = e / 2 - 2.4,
        u = e / 2 - 0.05,
        d = t - 2.4,
        f = t - 0.05;
      (this.gl.col(13163748, 0.28),
        (this.gl.both = !0),
        this.gl.rectZ(l, 0, u, 2.3, d, -1),
        this.gl.rectX(d, 0, f, 2.3, l, -1),
        (this.gl.both = !1),
        r.col(10133670),
        r.box(l - 0.03, 2.3, d - 0.03, u, 2.38, f, 63),
        r.tex(a(`p-kitsuen`), 16777215, 0.7),
        r.rectZ(l + 0.3, 2.42, u - 0.3, 2.72, d - 0.01, -1),
        this.boxes.push({
          x0: l - 0.05,
          z0: d - 0.05,
          x1: u,
          z1: f,
          y0: 0,
          y1: 2.4,
        }),
        yield `counter`);
      let p = [];
      for (let i = -e / 2 + 1.2; i < e / 2 - 0.8; i += 2.4)
        for (let e = 1.2; e < t - 0.8; e += 2.6)
          (r.col(16777215, 1, 2.6),
            r.rectY(i - 0.5, e - 0.12, i + 0.5, e + 0.12, n - 0.005, -1),
            p.push({ x: i, y: n - 0.2, z: e, r: 4, c: [0.3, 0.29, 0.28] }));
      for (let i = 0; i < 3; i++) {
        let o = 2.4 + i * ((t - 4) / 3);
        (r.tex(a(`p-shindai`), 16777215, 0.6, 1.1),
          r.rectZ(
            -e / 2 + 0.8 + i * 1.5,
            n - 0.8,
            -e / 2 + 3.6 + i * 1.5,
            n - 0.25,
            o,
            -1,
          ),
          r.rectZ(
            -e / 2 + 0.8 + i * 1.5,
            n - 0.8,
            -e / 2 + 3.6 + i * 1.5,
            n - 0.25,
            o + 0.002,
            1,
          ));
      }
      this.bake = { amb: [0.62, 0.6, 0.6], lights: p, floorAO: 0.4 };
    }
    transom(e, t, n) {
      if (n - t < 0.15) return;
      e.tex(this.R(`p-logo`), 16777215, 0.85, 1.25);
      let r = Math.min(this.W, (n - t) * 4.5);
      (e.rectZ(-r / 2, t, r / 2, n, -0.063, -1),
        e.col(15073298, 0.6),
        r < this.W - 0.05 &&
          (e.rectZ(-this.W / 2, t, -r / 2, n, -0.062, -1),
          e.rectZ(r / 2, t, this.W / 2, n, -0.062, -1)));
    }
    glassDressing(e, t, n) {}
    leafSticker(e, t, n) {
      e.tex(this.R(`p-kinen`), 16777215, 0.9);
      let r = (t + n) / 2;
      e.rectZ(r - 0.3, 1.25, r + 0.3, 1.45, -0.071, -1);
    }
    frameHex() {
      return 14200896;
    }
    kindTick(e) {
      let t = this.sh.ctx;
      if (this.inside && ((this.clackT -= e), this.clackT <= 0)) {
        let e = Math.random;
        this.clackT = 0.08 + e() * 0.22;
        let n = t.player.position;
        try {
          t.audio.play(`coin`, {
            x: n.x + (e() - 0.5) * 8,
            y: n.y + 1,
            z: n.z + (e() - 0.5) * 8,
            volume: 0.12 + e() * 0.15,
            rate: 1.4 + e() * 0.8,
          });
        } catch {}
      }
      this.spinT > 0 && ((this.spinT -= e), this.spinT <= 0 && this.result());
    }
    result() {
      let e = this.sh.ctx,
        t = Math.random();
      if (t < 0.04) {
        (e.money.add(8e3, void 0, `pachinko`),
          e.ui.bigMessage(
            { zh: `大當り！`, en: `JACKPOT!` },
            { zh: `特殊景品換得 ¥8,000`, en: `Special prizes worth ¥8,000` },
            { color: `#ffd34a`, duration: 3 },
          ));
        try {
          e.audio.play(`mission_pass`, { ui: !0, volume: 0.7 });
        } catch {}
      } else
        t < 0.26
          ? (e.money.add(1500, void 0, `pachinko`),
            e.events.emit(`notify`, {
              text: {
                zh: r.on
                  ? r.t(
                      `小贏一點：特殊景品 ${e.money.format(1500)}`,
                      `ちょっと勝った：特殊景品 ${e.money.format(1500)} 分`,
                    )
                  : `小贏一點：特殊景品 ${e.money.format(1500)}`,
                en: `A small win: special prizes worth ${e.money.format(1500)}`,
              },
              duration: 3,
              kind: `good`,
            }))
          : e.events.emit(`notify`, {
              text: {
                zh: `小鋼珠全被吃光了……`,
                en: `Every last ball is gone…`,
              },
              duration: 2.6,
              kind: `bad`,
            });
      t < 0.26 &&
        !this.told &&
        ((this.told = !0),
        e.events.emit(`subtitle`, {
          text: {
            zh: `（獎品要拿到店外的景品交換所換現金——「三店方式」）`,
            en: `(Prizes are swapped for cash at the exchange booth outside — the "three-shop system")`,
          },
          duration: 4,
        }));
    }
    greeting() {
      let e = ac(`interior.pachinko.voice.announce`);
      return { ja: B(`interior.pachinko.voice.announce`), zh: e.zh, en: e.en };
    }
    spotDefs() {
      let e = this.layout(),
        t = this.sh.ctx;
      return e.seats.map(([e, n]) => ({
        x: e,
        z: n,
        r: 0.42,
        label: () =>
          this.spinT > 0
            ? { zh: `小鋼珠嘩啦啦地落下…`, en: `The balls rattle down…` }
            : {
                zh: r.on
                  ? r.t(
                      `按 E 投入 ${t.money.format(Zy)} 打一局`,
                      `E で ${t.money.format(Zy)} 入れて打つ`,
                    )
                  : `按 E 投入 ${t.money.format(Zy)} 打一局`,
                en: `Press E to put ${t.money.format(Zy)} in`,
              },
        act: () => {
          if (!(this.spinT > 0) && this.pay(Zy, `pachinko 1000`)) {
            this.spinT = 3.5;
            try {
              t.audio.play(`coin`, { ui: !0, volume: 0.5 });
            } catch {}
          }
        },
      }));
    }
    views() {
      let e = super.views(),
        t = this.layout(),
        n = t.ix.length > 1 ? (t.ix[0] + t.ix[1]) / 2 : (t.ix[0] ?? 0) + 1.3;
      return (
        (e.sig = [n, 1.6, t.iz0 - 1.2, n, 1.25, t.iz1]),
        (e.detail = [
          (t.ix[0] ?? 0) + 1.4,
          1.35,
          t.iz0 + 1.6,
          (t.ix[0] ?? 0) + 0.5,
          1.3,
          t.iz0 + 0.6,
        ]),
        e
      );
    }
    kindSpot(e) {
      let t = this.layout();
      return e === `counter`
        ? [(t.kx0 + t.kx1) / 2, t.kz0 - 0.7]
        : e === `aisle` && t.ix.length
          ? [t.ix[0] + 1.25, t.iz0 + 2]
          : e === `seat` && t.seats.length
            ? [t.seats[0][0], t.seats[0][1]]
            : null;
    }
  },
  tb = 300,
  nb = [
    { zh: `迷你壽司鑰匙圈`, en: `a mini sushi keyring` },
    { zh: `柴犬公仔（隱藏版！）`, en: `a shiba figure (the secret one!)` },
    { zh: `迷你自動販賣機模型`, en: `a tiny vending-machine model` },
    { zh: `電車吊環吊飾`, en: `a train hand-strap charm` },
    { zh: `招財貓徽章`, en: `a lucky-cat badge` },
  ];
