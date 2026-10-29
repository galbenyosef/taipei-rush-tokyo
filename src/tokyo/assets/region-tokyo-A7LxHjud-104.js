// tokyo/assets/region-tokyo-A7LxHjud 104 — math
// Lines 46191-46900 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var mue = class extends Ph {
    kind = `karaoke`;
    page = `karaoke`;
    minW = 5.2;
    minD = 11;
    maxD = 16;
    front = `auto`;
    name;
    audioRoom = `room`;
    L = null;
    rentUntil = -1;
    singing = 0;
    prevStation = -1;
    lyric = 0;
    lyricT = 0;
    constructor(e, t, n) {
      (super(e, t.id, n, t.hours),
        (this.name = { zh: t.label.zh, en: t.label.en }),
        (this.fillHex = 14203135),
        (this.fillK = 0.8));
    }
    layoutDoor() {
      let e = this.seed & 1 ? 1 : -1;
      ((this.doorHW = 0.85),
        (this.dx = e * (this.W / 2 - 1.2)),
        (this.L = null));
    }
    layout() {
      if (this.L) return this.L;
      let { W: e, D: t } = this,
        n = this.seed & 1 ? 1 : -1,
        r = -n * (e / 2 - 0.05),
        i = -n * Math.max(0.5, e / 2 - 2.6),
        a = t - 0.3,
        o = n * 0.77,
        s = n * (e / 2 - 0.02),
        c = Math.max(7.6000000000000005, t - 3.8),
        l = t - 0.12;
      return (
        (this.L = {
          s: n,
          rz0: 2.6,
          rz1: 3.25,
          rx0: r,
          rx1: i,
          cx: 0,
          chw: 0.65,
          cz0: 4.4,
          cz1: a,
          kx0: o,
          kx1: s,
          kz0: c,
          kz1: l,
          dz: c + 0.7,
        }),
        this.L
      );
    }
    peopleSpots() {
      let e = this.layout(),
        t = e.s,
        n = this.rng(9),
        r = [];
      return (
        r.push({
          x: (e.rx0 + e.rx1) / 2,
          z: e.rz1 + 0.5,
          ry: Math.PI * 0 + Math.PI,
          pose: `counter`,
          desc: Jh(this.seed, 6949402, !0),
          staff: !0,
        }),
        n() < 0.8 &&
          (r.push({
            x: (e.rx0 + e.rx1) / 2 + t * 0.3,
            z: e.rz0 - 0.55,
            ry: 0,
            pose: `phone`,
            desc: Kh(`jp-blazer-f`, this.seed + 3),
          }),
          r.push({
            x: (e.rx0 + e.rx1) / 2 + t * 1,
            z: e.rz0 - 0.8,
            ry: -t * 0.6,
            pose: `stand`,
            desc: Kh(`jp-blazer-m`, this.seed + 4),
          })),
        r
      );
    }
    *content() {
      let { W: e, D: t, H: n, g: r } = this,
        i = this.layout(),
        a = i.s,
        o = (e) => this.R(e);
      (Dn(r, {
        x0: -e / 2,
        z0: 0,
        x1: e / 2,
        z1: t,
        h: n,
        floor: { hex: 16777215, reg: o(`ka-lobby-floor`), tile: 1.2 },
        wall: { hex: 16777215, reg: o(`ka-wall`), tile: 1.2 },
        ceiling: { hex: 16777215, reg: o(`ka-ceil`), tile: 1.2 },
        baseboard: { hex: 1052692, h: 0.08 },
        openings: [
          { wall: `front`, a: -e / 2, b: e / 2, y0: 0, y1: this.glassTop },
        ],
        ao: 0.3,
      }),
        mn(
          r,
          i.cx - i.chw,
          i.cz0,
          i.cx + i.chw,
          i.cz1,
          0.004,
          { hex: 16777215, reg: o(`ka-floor`), tile: 1.3 },
          !0,
        ),
        yield `shell`);
      let s = Math.min(i.rx0, i.rx1),
        c = Math.max(i.rx0, i.rx1);
      (r.col(1710624),
        r.box(s, 0, i.rz0, c, 1.05, i.rz1, 63),
        r.col(15263976, 0.6, 1.4),
        r.box(s, 1.05, i.rz0 - 0.03, c, 1.09, i.rz1 + 0.02, 63),
        r.col(16726666, 1, 1.8),
        r.rectZ(s, 0.06, c, 0.1, i.rz0 - 0.002, -1),
        this.boxes.push({
          x0: s,
          z0: i.rz0 - 0.03,
          x1: c,
          z1: i.rz1 + 0.02,
          y0: 0,
          y1: 1.1,
        }));
      let l = i.rz1 + 1.05;
      (r.col(1447452),
        r.box(s, 0, l, c + 0, n, l + 0.12, 63),
        this.mark(`back`, () => {
          (r.tex(o(`ka-back`), 16777215, 0.9, 1.25),
            r.rectZ(s + 0.1, 1.25, c - 0.1, 2.45, l - 0.002, -1));
        }),
        this.boxes.push({ x0: s, z0: l, x1: c, z1: l + 0.12, y0: 0, y1: n }));
      let u = -a * (e / 2) + a * 0.012;
      (r.tex(o(`ka-price`), 16777215, 0.75, 1.1),
        r.rectX(0.6, 1, 1.75, 2.55, u, a > 0 ? 1 : -1),
        r.tex(o(`ka-poster`), 16777215, 0.3),
        r.rectZ(-e / 2 + 0.3, 1, -e / 2 + 1, 2.1, 0.012, 1));
      let d = (e / 2) * a - a * 0.012;
      (r.col(14211804),
        r.box(
          Math.min(d, d - a * 0.55),
          0,
          2.4,
          Math.max(d, d - a * 0.55),
          0.9,
          3.6,
          63,
        ),
        r.tex(o(`ka-drinkbar`), 16777215, 0.5),
        r.rectX(2.45, 0.9, 3.55, 1.95, d - a * 0.4, a > 0 ? -1 : 1),
        r.col(13159632),
        r.box(
          Math.min(d, d - a * 0.45),
          0.9,
          2.45,
          Math.max(d, d - a * 0.45),
          1.95,
          2.48,
          63,
        ),
        this.boxes.push({
          x0: Math.min(d, d - a * 0.55),
          z0: 2.4,
          x1: Math.max(d, d - a * 0.55),
          z1: 3.6,
          y0: 0,
          y1: 1.95,
        }),
        yield `reception`);
      let f = (e, t, i, a) => {
          (r.tex(o(`ka-room-wall`), 16777215, 0),
            r.rectX(i, 0, a, n, e, t, 0, 0, (a - i) / 1.2, n / 1.2));
        },
        p = i.cx - i.chw,
        m = i.cx + i.chw,
        h = 0.85,
        g = 1;
      for (let [t, s, c] of [
        [p, 1, -1],
        [m, -1, 1],
      ]) {
        let l = [],
          u = i.cz0,
          d = c === a ? i.dz : -1;
        for (; u < i.cz1 - 0.5;) {
          let e = u + 0.6,
            a = e + h;
          if (a > i.cz1 - 0.2) break;
          if (d > 0 && d > e - 0.1 && d < a + 0.1) {
            (l.push([u, e]), (u = a));
            continue;
          }
          (l.push([u, e]),
            r.tex(o(`ka-door`), 16777215, 0.02),
            r.rectX(e, 0, a, 2.05, t, s),
            r.col([16726696, 3836671, 16758842, 9059071][g % 4], 1, 1.6),
            r.rectX(
              e + h * 0.3,
              0.82,
              e + h * 0.7,
              2.05 * 0.85,
              t + s * 0.004,
              s,
            ),
            r.tex(o(`ka-no-${((g - 1) % 8) + 1}`), 16777215, 0.4),
            r.rectX(e + 0.15, 2.12, e + 0.55, 2.3, t + s * 0.004, s),
            r.col(920594),
            r.rectX(e, 2.05, a, n, t, s),
            g++,
            (u = a));
        }
        l.push([u, i.cz1]);
        for (let [e, n] of l) n - e > 0.01 && f(t, s, e, n);
        let _ = c < 0 ? -e / 2 : m,
          v = c < 0 ? p : e / 2;
        c === a
          ? this.boxes.push({
              x0: Math.min(_, v),
              z0: i.cz0,
              x1: Math.max(_, v),
              z1: i.kz0 - 0.05,
              y0: 0,
              y1: n,
            })
          : this.boxes.push({
              x0: Math.min(_, v),
              z0: i.cz0,
              x1: Math.max(_, v),
              z1: i.cz1,
              y0: 0,
              y1: n,
            });
      }
      {
        let e = a > 0 ? m : p,
          t = 0.1,
          r = a > 0 ? e : e - t,
          o = a > 0 ? e + t : e;
        (this.boxes.push({
          x0: r,
          z0: i.kz0,
          x1: o,
          z1: i.dz - 0.43,
          y0: 0,
          y1: n,
        }),
          this.boxes.push({
            x0: r,
            z0: i.dz + 0.43,
            x1: o,
            z1: i.cz1,
            y0: 0,
            y1: n,
          }));
      }
      let _ = [];
      for (let e = i.cz0 + 0.8; e < i.cz1 - 0.4; e += 2.2)
        (r.col(16773336, 1, 2.2),
          r.disc(i.cx, n - 0.005, e, 0.07, 10, !1),
          _.push({ x: i.cx, y: n - 0.2, z: e, r: 2.8, c: [0.32, 0.28, 0.24] }));
      for (let t = -e / 2 + 0.8; t < e / 2 - 0.5; t += 1.6)
        (r.col(16771272, 1, 2.4),
          r.disc(t, n - 0.005, 1.4, 0.08, 10, !1),
          _.push({ x: t, y: n - 0.2, z: 1.4, r: 3.2, c: [0.42, 0.36, 0.3] }));
      (_.push({
        x: (s + c) / 2,
        y: 1.8,
        z: l - 0.5,
        r: 3,
        c: [0.45, 0.08, 0.1],
      }),
        yield `corridor`);
      let v = Math.min(i.kx0, i.kx1),
        y = Math.max(i.kx0, i.kx1),
        b = a > 0 ? v : y;
      (r.tex(o(`ka-room-wall`), 16777215, 0),
        r.rectZ(v, 0, y, n, i.kz0 + 0.12, 1),
        r.col(789008),
        r.box(v, 0, i.kz0, y, n, i.kz0 + 0.12, 63));
      let x = i.dz - h / 2,
        S = i.dz + h / 2;
      (r.tex(o(`ka-room-wall`), 10129584, 0),
        r.rectX(i.kz0 + 0.12, 0, x, n, b + a * 0.01, a > 0 ? 1 : -1),
        r.rectX(S, 0, i.kz1, n, b + a * 0.01, a > 0 ? 1 : -1),
        r.rectX(x, 2.05, S, n, b + a * 0.01, a > 0 ? 1 : -1),
        r.tex(o(`ka-door`), 16777215, 0.02),
        r
          .push()
          .translate(b + a * 0.02, 0, x)
          .rotateY(a > 0 ? -Math.PI + 0.25 : -0.25),
        r.box(-0.85, 0, -0.025, 0, 2.05, 0.025, 63),
        r.pop(),
        this.boxes.push({
          x0: v,
          z0: i.kz0,
          x1: y,
          z1: i.kz0 + 0.12,
          y0: 0,
          y1: n,
        }));
      let C = (e, t, n, i) => {
          (r.tex(o(`ka-sofa`), 16777215, 0.02),
            r.box(
              Math.min(e, n),
              0,
              Math.min(t, i),
              Math.max(e, n),
              0.42,
              Math.max(t, i),
              63,
            ),
            this.boxes.push({
              x0: Math.min(e, n),
              z0: Math.min(t, i),
              x1: Math.max(e, n),
              z1: Math.max(t, i),
              y0: 0,
              y1: 0.45,
            }));
        },
        w = (e / 2) * a - a * 0.02;
      (C(w, i.kz0 + 0.3, w - a * 0.6, i.kz1 - 0.05),
        r.tex(o(`ka-sofa`), 13156560, 0.02),
        r.box(
          Math.min(w, w - a * 0.18),
          0.42,
          i.kz0 + 0.3,
          Math.max(w, w - a * 0.18),
          0.85,
          i.kz1 - 0.05,
          63,
        ),
        C(w - a * 0.6, i.kz1 - 0.65, b + a * 0.9, i.kz1 - 0.05),
        r.box(
          Math.min(w - a * 0.6, b + a * 0.9),
          0.42,
          i.kz1 - 0.23,
          Math.max(w - a * 0.6, b + a * 0.9),
          0.85,
          i.kz1 - 0.05,
          63,
        ));
      let T = (w - a * 0.6 + b + a * 0.6) / 2,
        E = (i.kz0 + i.kz1) / 2 + 0.1;
      (r.col(1710622),
        r.box(T - 0.45, 0, E - 0.32, T + 0.45, 0.42, E + 0.32, 63),
        r.col(2763310),
        r.box(T - 0.47, 0.42, E - 0.34, T + 0.47, 0.45, E + 0.34, 63),
        this.boxes.push({
          x0: T - 0.47,
          z0: E - 0.34,
          x1: T + 0.47,
          z1: E + 0.34,
          y0: 0,
          y1: 0.46,
        }),
        r.col(10133670),
        r.box(T - 0.12, 0.45, E - 0.08, T + 0.12, 0.5, E + 0.08, 63),
        r.col(1710618));
      for (let e of [-0.05, 0.05])
        r.cyl(T + e, E, 0.02, 0.025, 0.47, 0.68, 6, !0);
      (r.tex(o(`ka-denmoku`), 16777215, 0.6),
        r.rectY(T + 0.18, E - 0.12, T + 0.36, E + 0.12, 0.452, 1),
        r.col(15786160, 0.1),
        r.cyl(T - 0.3, E + 0.15, 0.035, 0.035, 0.45, 0.58, 8, !0));
      let D = (i.kz0 + i.kz1) / 2 + 0.1;
      (r.col(657932),
        r.box(
          Math.min(b + a * 0.02, b + a * 0.1),
          1,
          D - 0.75,
          Math.max(b + a * 0.02, b + a * 0.1),
          1.85,
          D + 0.75,
          63,
        ),
        this.mark(`screen`, () => {
          (r.tex(o(`ka-lyric-0`), 16777215, 1, 1.15),
            r.rectX(
              D - 0.72,
              1.03,
              D + 0.72,
              1.82,
              b + a * 0.101,
              a > 0 ? 1 : -1,
            ));
        }),
        r.col(1447450),
        r.box(
          Math.min(b + a * 0.02, b + a * 0.25),
          1.9,
          D - 1,
          Math.max(b + a * 0.02, b + a * 0.25),
          2.3,
          D - 0.8,
          63,
        ),
        r.box(
          Math.min(b + a * 0.02, b + a * 0.25),
          1.9,
          D + 0.8,
          Math.max(b + a * 0.02, b + a * 0.25),
          2.3,
          D + 1,
          63,
        ));
      let O = T,
        k = E;
      (r.col(14212328, 0.5, 1.4),
        r.sphere(O, n - 0.35, k, 0.15, 10, 7),
        r.col(8947848),
        r.box(O - 0.005, n - 0.2, k - 0.005, O + 0.005, n, k + 0.005, 63),
        this.mark(`spots`, () => {
          let e = [16726696, 3856639, 16764986, 9067263, 5963658];
          for (let t = 0; t < 9; t++) {
            r.col(e[t % e.length], 1, 1.4);
            let n = i.kz0 + 0.4 + ((t * 0.37) % 1) * (i.kz1 - i.kz0 - 0.8),
              o = 1 + ((t * 0.61) % 1) * 1.4,
              s = 0.06 + (t % 3) * 0.025;
            r.rectX(n - s, o - s, n + s, o + s, w - a * 0.006, a > 0 ? -1 : 1);
          }
        }),
        _.push({ x: T, y: n - 0.4, z: E, r: 3.6, c: [0.42, 0.26, 0.5] }),
        _.push({ x: b + a * 0.6, y: 1.4, z: D, r: 2.8, c: [0.24, 0.3, 0.5] }),
        _.push({ x: T, y: n - 0.1, z: E + 0.6, r: 3.2, c: [0.32, 0.28, 0.24] }),
        (this.bake = { amb: [0.55, 0.5, 0.62], lights: _, floorAO: 0.5 }));
    }
    afterBake(e, t, n) {
      (e === `screen` || e === `back` || e === `spots`) &&
        this.g.emitRange(t, n, 1);
    }
    transom(e, t, n) {
      n - t < 0.15 ||
        (e.tex(this.R(`ka-band`), 16777215, 0.8, 1.2),
        e.rectZ(-this.W / 2, t, this.W / 2, Math.min(n, t + 0.5), -0.062, -1));
    }
    leafSticker(e, t, n) {
      e.tex(this.R(`ka-poster`), 16777215, 0.8);
      let r = (t + n) / 2;
      e.rectZ(r - 0.16, 1, r + 0.16, 1.48, -0.071, -1);
    }
    frameHex() {
      return 2763312;
    }
    kindTick(e) {
      this.singing > 0 &&
        ((this.singing -= e),
        (this.lyricT -= e),
        this.lyricT <= 0 &&
          ((this.lyricT = 6),
          (this.lyric = (this.lyric + 1) % _g),
          this.setScreen(this.lyric)),
        (this.singing <= 0 || !this.inside) &&
          this.stopSinging(this.singing <= 0));
    }
    setScreen(e) {
      let t = this.roomMesh,
        n = this.marks.get(`screen`);
      if (!t || !n) return;
      let r = t.geometry.attributes.uv,
        i = this.R(`ka-lyric-0`),
        a = this.R(`ka-lyric-${e}`),
        o = r.array;
      for (let e = n[0]; e < n[1]; e++) {
        let t = (this.screenUV0[(e - n[0]) * 2] - i.u0) / (i.u1 - i.u0),
          r = (this.screenUV0[(e - n[0]) * 2 + 1] - i.v0) / (i.v1 - i.v0);
        ((o[e * 2] = a.u0 + (a.u1 - a.u0) * t),
          (o[e * 2 + 1] = a.v0 + (a.v1 - a.v0) * r));
      }
      (r.clearUpdateRanges(),
        r.addUpdateRange(n[0] * 2, (n[1] - n[0]) * 2),
        (r.needsUpdate = !0));
    }
    screenUV0 = new Float32Array();
    onActivate() {
      let e = this.roomMesh,
        t = this.marks.get(`screen`);
      if (e && t && this.screenUV0.length === 0) {
        let n = e.geometry.attributes.uv.array;
        this.screenUV0 = n.slice(t[0] * 2, t[1] * 2);
      }
    }
    startSinging() {
      let e = this.sh.ctx,
        t = e.audio;
      try {
        this.prevStation = t.station;
        let e = t.stations.findIndex((e) =>
          /pop|city|シティ/i.test(`${e.genre} ${e.name.en}`),
        );
        (e >= 0 && t.setStation(e), t.setRadioActive(!0));
      } catch {}
      ((this.singing = 48),
        (this.lyric = 0),
        (this.lyricT = 6),
        this.setScreen(0));
      let n = xo(`interior.karaoke.song`);
      e.events.emit(`notify`, {
        text: {
          zh: r.on
            ? r.t(
                `點唱：「${n.zh}」— 開唱！`,
                `選曲：「${r.jz(n.zh)}」— 歌うぞ！`,
              )
            : `點唱：「${n.zh}」— 開唱！`,
          en: `Now singing: "${n.en}"`,
        },
        duration: 3,
        kind: `good`,
      });
    }
    stopSinging(e) {
      let t = this.sh.ctx;
      ((this.singing = 0), this.setScreen(0));
      try {
        (t.vehicles?.playerVehicle || t.audio.setRadioActive(!1),
          this.prevStation >= 0 && t.audio.setStation(this.prevStation));
      } catch {}
      if (e) {
        let e = xo(`interior.karaoke.score`, {
          n: (
            78 +
            Math.floor(this.rng(Math.floor(t.time.elapsed))() * 200) / 10
          ).toFixed(1),
        });
        t.events.emit(`notify`, {
          text: {
            zh: r.on ? r.t(`${e.zh}！`, `${r.jz(e.zh)}！`) : `${e.zh}！`,
            en: `${e.en}!`,
          },
          duration: 3.5,
          kind: `good`,
        });
        try {
          t.audio.play(`mission_pass`, { ui: !0, volume: 0.5 });
        } catch {}
      }
    }
    onDispose() {
      this.singing > 0 && this.stopSinging(!1);
    }
    greeting() {
      let e = xo(`interior.karaoke.voice.irasshai`);
      return { ja: L(`interior.karaoke.voice.irasshai`), zh: e.zh, en: e.en };
    }
    spotDefs() {
      let e = this.layout(),
        t = this.sh.ctx,
        n = e.s,
        i = () => t.time.elapsed < this.rentUntil,
        a = Math.min(e.kx0, e.kx1),
        o = Math.max(e.kx0, e.kx1),
        s = (n * (this.W / 2) - n * 0.62 + (n > 0 ? a : o) + n * 0.6) / 2;
      return [
        {
          x: (e.rx0 + e.rx1) / 2,
          z: e.rz0 - 0.6,
          r: 0.9,
          label: () =>
            this.panic > 0
              ? { zh: `店員不肯接待你……`, en: `The staff refuse to serve you…` }
              : i()
                ? {
                    zh: `包廂已經開好了 — 到最裡面的房間`,
                    en: `Your room is ready — the last one down the corridor`,
                  }
                : {
                    zh: r.on
                      ? r.t(
                          `按 E 開包廂（30 分鐘 ${t.money.format(hg)} + 飲料 ${t.money.format(gg)}）`,
                          `E でルームを借りる（30 分 ${t.money.format(hg)} ＋ ドリンク ${t.money.format(gg)}）`,
                        )
                      : `按 E 開包廂（30 分鐘 ${t.money.format(hg)} + 飲料 ${t.money.format(gg)}）`,
                    en: `Press E for a room (30 min ${t.money.format(hg)} + a drink ${t.money.format(gg)})`,
                  },
          act: () => {
            if (
              this.panic > 0 ||
              i() ||
              !this.pay(790, `karaoke room`, {
                zh: r.on
                  ? r.t(
                      `包廂 30 分鐘 + 一杯飲料 −${t.money.format(790)}`,
                      `ルーム 30 分 ＋ ドリンク 1杯 −${t.money.format(790)}`,
                    )
                  : `包廂 30 分鐘 + 一杯飲料 −${t.money.format(790)}`,
                en: `Room for 30 min + one drink −${t.money.format(790)}`,
              })
            )
              return;
            this.rentUntil = t.time.elapsed + 600;
            let e = xo(`interior.karaoke.voice.room`, { n: 108 });
            try {
              t.audio.say?.(
                {
                  ja: bo(`interior.karaoke.voice.room`, { n: 108 }),
                  zh: e.zh,
                  en: e.en,
                },
                { lang: `ja`, priority: 4, volume: 0.8 },
              );
            } catch {}
            t.events.emit(`subtitle`, {
              text: {
                zh: r.on
                  ? r.t(`「${e.zh}」`, `「${r.jz(e.zh)}」`)
                  : `「${e.zh}」`,
                en: `"${e.en}"`,
              },
              duration: 2,
              speaker: t.t({ zh: `店員`, en: `Staff` }),
            });
          },
        },
        {
          x: s,
          z: (e.kz0 + e.kz1) / 2 - 0.55,
          r: 0.85,
          label: () =>
            this.singing > 0
              ? { zh: `按 E 停止唱歌`, en: `Press E to stop singing` }
              : i()
                ? {
                    zh: `按 E 拿起麥克風唱一首`,
                    en: `Press E to pick up the mic and sing`,
                  }
                : {
                    zh: `這間包廂要先到櫃檯開房`,
                    en: `Book this room at the reception first`,
                  },
          act: () => {
            this.singing > 0
              ? this.stopSinging(!0)
              : i() && this.startSinging();
          },
        },
      ];
    }
    views() {
      let e = super.views(),
        t = this.layout(),
        n = t.s;
      ((e.sig = [t.s * 0.9, 1.6, 0.8, (t.rx0 + t.rx1) / 2, 1.5, t.rz1 + 1]),
        (e.corridor = [t.cx, 1.6, t.cz0 - 0.5, t.cx, 1.3, t.cz1]));
      let r = Math.max(t.kx0, t.kx1),
        i = Math.min(t.kx0, t.kx1);
      return (
        (e.detail = [
          n > 0 ? r - 0.3 : i + 0.3,
          1.5,
          t.kz1 - 0.4,
          n > 0 ? i : r,
          1.3,
          (t.kz0 + t.kz1) / 2,
        ]),
        e
      );
    }
    namedSpots() {
      let e = this.layout(),
        t = e.s,
        n = t * (this.W / 2 - 0.02),
        r = (e.kz0 + e.kz1) / 2 + 0.1,
        i = Math.min(e.kx0, e.kx1),
        a = Math.max(e.kx0, e.kx1),
        o = t > 0 ? i : a,
        s = e.cz0 + 0.6 + 0.425;
      for (let t = e.cz0; t < e.cz1 - 0.5;) {
        let n = t + 0.6,
          r = n + 0.85;
        if (r > e.cz1 - 0.2 || (e.dz > n - 0.1 && e.dz < r + 0.1)) break;
        ((s = (n + r) / 2), (t = r));
      }
      let c = t > 0 ? Math.PI / 2 : -Math.PI / 2;
      return {
        door: [this.dx, 0.9, 0, Math.PI],
        reception: [(e.rx0 + e.rx1) / 2, e.rz0 - 0.7, 0, Math.PI],
        corridor: [e.cx, e.cz0 + 0.8, 0, Math.PI],
        booth: [n - t * 0.32, r, 0, -c],
        "booth-door": [o + t * 0.45, e.dz, 0, c],
        "booth-next": [e.cx + t * 0.25, s, 0, c],
        stairs: [this.dx, 0.6, 0, 0],
      };
    }
    kindSpot(e) {
      let t = this.layout();
      return e === `counter`
        ? [(t.rx0 + t.rx1) / 2, t.rz0 - 0.7]
        : e === `corridor`
          ? [t.cx, t.cz0 + 0.8]
          : e === `room`
            ? [t.s * (this.W / 2 - 1.5), (t.kz0 + t.kz1) / 2 - 0.3]
            : null;
    }
  },
  vg = 1e3,
  yg = 0.58;
