// tokyo/assets/region-tokyo-A7LxHjud 110 — math
// Lines 48545-49122 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var bue = class extends Ph {
    kind = `capsule`;
    page = `capsule`;
    minW = 5.2;
    minD = 11;
    maxD = 15;
    front = `auto`;
    name;
    audioRoom = `room`;
    L = null;
    resting = !1;
    constructor(e, t, n) {
      (super(e, t.id, n, t.hours),
        (this.name = { zh: t.label.zh, en: t.label.en }),
        (this.fillHex = 16773852),
        (this.fillK = 0.85));
    }
    layoutDoor() {
      let e = this.seed & 1 ? 1 : -1;
      ((this.doorHW = 0.8),
        (this.dx = e * (this.W / 2 - 1.05)),
        (this.L = null));
    }
    layout() {
      if (this.L) return this.L;
      let { W: e, D: t } = this,
        n = this.seed & 1 ? 1 : -1,
        r = Math.max(6, t - 6.6),
        i = t - 0.1,
        a = [-e / 2 + 2, e / 2 - 2],
        o = Math.floor((i - r) / 1.05),
        s = Math.min(o - 1, 2);
      return (
        (this.L = {
          s: n,
          step: 1.5,
          fx0: n * (e / 2 - 0.05),
          fx1: n * (e / 2 - 1.9),
          fz0: 2.4,
          fz1: 3,
          lz0: 2.1,
          lz1: r - 0.4,
          cz0: r,
          cz1: i,
          cx: a,
          mine: {
            x: a[+(n > 0)] - n * 0.45,
            z: r + s * 1.05 + 0.52,
            no: 100 + s + (n > 0 ? 7 : 1),
          },
        }),
        this.L
      );
    }
    peopleSpots() {
      let e = this.layout();
      return [
        {
          x: (e.fx0 + e.fx1) / 2,
          z: e.fz1 + 0.45,
          y: Cg,
          ry: Math.PI,
          pose: `counter`,
          desc: Jh(this.seed, 1845842),
          staff: !0,
        },
      ];
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
        floor: { hex: 16777215, reg: o(`c-floor`), tile: 1.2 },
        wall: { hex: 16777215, reg: o(`c-wall`), tile: 1.2 },
        ceiling: { hex: 16777215, reg: o(`c-ceil`), tile: 1.2 },
        baseboard: { hex: 6965808, h: 0.1 },
        openings: [
          { wall: `front`, a: -e / 2, b: e / 2, y0: 0, y1: this.glassTop },
        ],
        ao: 0.3,
      }),
        mn(
          r,
          -e / 2,
          0,
          e / 2,
          i.step,
          0.004,
          { hex: 16777215, reg: o(`c-doma`), tile: 1.2 },
          !0,
        ),
        r.tex(o(`c-wood`), 16777215, 0),
        r.box(-e / 2, 0, i.step, e / 2, Cg, t, 36),
        r.col(6965808),
        r.box(-e / 2, 0.09, i.step - 0.04, e / 2, 0.125, i.step + 0.02, 63),
        yield `shell`);
      let s = -a * (e / 2);
      (r.col(12099706),
        r.box(
          Math.min(s, s + a * 0.4),
          0,
          0.15,
          Math.max(s, s + a * 0.4),
          1.8,
          i.step - 0.05,
          63,
        ),
        r.tex(o(`c-getabako`), 16777215, 0.04),
        r.rectX(0.18, 0.05, i.step - 0.08, 1.78, s + a * 0.401, a > 0 ? 1 : -1),
        this.boxes.push({
          x0: Math.min(s, s + a * 0.4),
          z0: 0.15,
          x1: Math.max(s, s + a * 0.4),
          z1: i.step - 0.05,
          y0: 0,
          y1: 1.8,
        }),
        r.tex(o(`c-dosoku`), 16777215, 0.3),
        r.rectZ(-0.75, 1.5, 0.75, 2, i.step + 0.6, -1),
        r.col(9080466),
        r.box(-0.02, 0, i.step + 0.58, 0.02, 1.5, i.step + 0.62, 63));
      let c = Math.min(i.fx0, i.fx1),
        l = Math.max(i.fx0, i.fx1);
      (r.tex(o(`c-wood`), 16777215, 0.02),
        r.box(c, Cg, i.fz0, l, 1.17, i.fz1, 63),
        r.col(15261900),
        r.box(c - 0.03, 1.17, i.fz0 - 0.04, l + 0.03, 1.21, i.fz1 + 0.02, 63),
        this.boxes.push({
          x0: c,
          z0: i.fz0,
          x1: l,
          z1: i.fz1,
          y0: 0,
          y1: 1.2200000000000002,
        }),
        r.tex(o(`c-front`), 16777215, 0.45, 1.05),
        r.rectZ(c + 0.1, 1.52, l - 0.1, 2.22, i.fz1 + 0.99, -1),
        r.tex(o(`c-wood`), 9072728, 0),
        r.box(c, Cg, i.fz1 + 1, l, n, i.fz1 + 1.1, 63),
        this.boxes.push({
          x0: c,
          z0: i.fz1 + 1,
          x1: l,
          z1: i.fz1 + 1.1,
          y0: 0,
          y1: n,
        }),
        r.tex(o(`c-price`), 16777215, 0.3),
        r.rectX(
          i.fz0 - 0.9,
          1.12,
          i.fz0 - 0.1,
          2.12,
          (e / 2) * a - a * 0.012,
          a > 0 ? -1 : 1,
        ),
        yield `desk`);
      let u = -a * (e / 2);
      (r.col(5925498),
        r.box(
          Math.min(u, u + a * 0.5),
          Cg,
          i.lz0,
          Math.max(u, u + a * 0.5),
          2.02,
          i.lz1,
          63,
        ));
      for (let e = i.lz0; e < i.lz1 - 0.3; e += 1)
        (r.tex(o(`c-locker`), 16777215, 0.04),
          r.rectX(
            e,
            0.13999999999999999,
            Math.min(i.lz1, e + 1),
            2,
            u + a * 0.501,
            a > 0 ? 1 : -1,
          ));
      this.boxes.push({
        x0: Math.min(u, u + a * 0.5),
        z0: i.lz0,
        x1: Math.max(u, u + a * 0.5),
        z1: i.lz1,
        y0: 0,
        y1: 2.02,
      });
      let d = (e / 2) * a,
        f = i.fz1 + 1.4;
      (i.cz0 - f > 1.4 &&
        (r
          .push()
          .translate(d - a * 0.2, Cg, (f + i.cz0 - 0.4) / 2)
          .rotateY(a > 0 ? -Math.PI / 2 : Math.PI / 2),
        fn(
          r,
          -(i.cz0 - 0.4 - f) / 2,
          (i.cz0 - 0.4 - f) / 2,
          -0.2,
          0.2,
          1.7,
          [o(`c-manga`), o(`c-manga`), o(`c-manga`), o(`c-manga`)],
          { body: 9071178, seg: 0.6 },
        ),
        r.pop(),
        this.boxes.push({
          x0: Math.min(d, d - a * 0.42),
          z0: f,
          x1: Math.max(d, d - a * 0.42),
          z1: i.cz0 - 0.4,
          y0: 0,
          y1: 1.8199999999999998,
        }),
        r.tex(o(`c-kyukei`), 16777215, 0.3),
        r.rectX(
          f + 0.2,
          1.9700000000000002,
          f + 1,
          2.27,
          d - a * 0.012,
          a > 0 ? -1 : 1,
        )),
        yield `lockers`);
      let p = Math.floor((i.cz1 - i.cz0) / 1.05),
        m = 0;
      for (let t of [-1, 1]) {
        let n = (e / 2) * t,
          s = i.cx[+(t > 0)],
          c = -t;
        (r.col(15920868),
          r.box(
            Math.min(n, s),
            Cg,
            i.cz0,
            Math.max(n, s),
            2.3200000000000003,
            i.cz1,
            63,
          ));
        for (let e = 0; e < p; e++) {
          let n = i.cz0 + e * 1.05 + 0.025,
            l = n + 1;
          for (let i of [0, 1]) {
            let u = 0.22 + i * 1.08,
              d = u + 0.98,
              f =
                (t === a && e === Math.min(p - 1, 2) && i === 0) ||
                (m * 7 + e) % 3 == 0
                  ? `open`
                  : (m * 5 + e) % 3 == 1
                    ? `half`
                    : `shut`;
            (r.tex(o(`c-pod-${f}`), 16777215, f === `shut` ? 0.05 : 0.35),
              r.rectX(n, u, l, d, s + c * 0.002, c),
              r.tex(
                o(`c-no-${(t > 0 ? 12 : 0) + i * 6 + (e % 6)}`),
                16777215,
                0.2,
              ),
              r.rectX(
                n + 0.35,
                d + 0.005,
                n + 0.65,
                d + 0.075,
                s + c * 0.004,
                c,
              ));
          }
          (r.col(12099706),
            r.box(
              Math.min(s, s + c * 0.25),
              Cg,
              n + 0.7,
              Math.max(s, s + c * 0.25),
              0.5700000000000001,
              n + 0.95,
              63,
            ),
            m++);
        }
        (this.boxes.push({
          x0: Math.min(n, s),
          z0: i.cz0,
          x1: Math.max(n, s),
          z1: i.cz1,
          y0: 0,
          y1: 2.3200000000000003,
        }),
          r.tex(o(t > 0 ? `c-jodan` : `c-gedan`), 16777215, 0.3),
          r.rectX(
            i.cz0 + 0.1,
            2.3600000000000003,
            i.cz0 + 0.8,
            2.58,
            s + c * 0.01,
            c,
          ));
      }
      (r.tex(o(`c-shizuka`), 16777215, 0.3),
        r.rectZ(-0.7, 1.7200000000000002, 0.7, 2.07, t - 0.012, -1),
        r.tex(o(`c-kinen`), 16777215, 0.3),
        r.rectZ(-0.4, 2.17, 0.4, 2.42, t - 0.012, -1),
        yield `capsules`,
        this.floorDefs.push({
          x0: -e / 2,
          z0: i.step,
          x1: e / 2,
          z1: t,
          y: Cg,
        }));
      let h = [];
      for (let e = 0.8; e < t - 0.4; e += 1.8)
        (r.col(16773848, 1, 2),
          r.disc(0, n - 0.005, e, 0.08, 10, !1),
          h.push({ x: 0, y: n - 0.2, z: e, r: 3.2, c: [0.36, 0.32, 0.26] }));
      this.bake = { amb: [0.5, 0.47, 0.44], lights: h, floorAO: 0.5 };
    }
    transom(e, t, n) {
      n - t < 0.15 ||
        (e.tex(this.R(`c-front`), 16777215, 0.6, 1.1),
        e.rectZ(
          -this.W / 2 + 0.1,
          t + 0.02,
          this.W / 2 - 0.1,
          Math.min(n, t + 0.5),
          -0.062,
          -1,
        ));
    }
    leafSticker(e, t, n) {
      e.tex(this.R(`c-kinen`), 16777215, 0.9);
      let r = (t + n) / 2;
      e.rectZ(r - 0.2, 1.3, r + 0.2, 1.45, -0.071, -1);
    }
    checkedIn() {
      let e = this.sh.ctx,
        t = this.sh.stay;
      if (t.day < 0) return !1;
      let n = e.time.day ?? 0,
        r = e.env?.hour ?? 12;
      return n === t.day || (n === t.day + 1 && r < 10);
    }
    greeting() {
      let e = xo(`interior.capsule.voice.irasshai`);
      return { ja: L(`interior.capsule.voice.irasshai`), zh: e.zh, en: e.en };
    }
    namedSpots() {
      let e = this.layout(),
        t = e.s,
        n = (e.cx[0] + e.cx[1]) / 2,
        r = [n, e.cz1 - 0.4, Cg, Math.PI];
      return {
        door: [this.dx, 0.9, 0, Math.PI],
        desk: [(e.fx0 + e.fx1) / 2, e.fz0 - 0.6, Cg, Math.PI],
        capsule: [e.mine.x, e.mine.z, Cg, t > 0 ? Math.PI / 2 : -Math.PI / 2],
        "row-a": [n, e.cz0 + 0.5, Cg, Math.PI],
        "row-b": [n, (e.cz0 + e.cz1) / 2, Cg, Math.PI],
        "row-c": [n, e.cz1 - 0.9, Cg, 0],
        back: r,
        laundry: r,
      };
    }
    spotDefs() {
      let e = this.layout(),
        t = this.sh.ctx;
      return [
        {
          x: (e.fx0 + e.fx1) / 2,
          z: e.fz0 - 0.6,
          r: 0.9,
          label: () =>
            this.checkedIn()
              ? {
                  zh: r.on
                    ? r.t(
                        `已入住 — 你的膠囊是 ${e.mine.no} 號（下段）`,
                        `チェックイン済み — あなたのカプセルは ${e.mine.no} 番（下段）`,
                      )
                    : `已入住 — 你的膠囊是 ${e.mine.no} 號（下段）`,
                  en: `Checked in — your capsule is No. ${e.mine.no} (lower tier)`,
                }
              : {
                  zh: r.on
                    ? r.t(
                        `按 E 辦理入住（膠囊一晚 ${t.money.format(Sg)}）`,
                        `E でチェックイン（カプセル 1泊 ${t.money.format(Sg)}）`,
                      )
                    : `按 E 辦理入住（膠囊一晚 ${t.money.format(Sg)}）`,
                  en: `Press E to check in (one night ${t.money.format(Sg)})`,
                },
          act: () => {
            if (
              this.checkedIn() ||
              this.panic > 0 ||
              !this.pay(4800, `capsule night`, {
                zh: r.on
                  ? r.t(
                      `入住 ${e.mine.no} 號膠囊 −${t.money.format(4800)}（明早 10:00 退房）`,
                      `${e.mine.no} 番カプセルにチェックイン −${t.money.format(4800)}（明朝 10:00 チェックアウト）`,
                    )
                  : `入住 ${e.mine.no} 號膠囊 −${t.money.format(4800)}（明早 10:00 退房）`,
                en: `Capsule No. ${e.mine.no} −${t.money.format(4800)} (check-out 10:00)`,
              })
            )
              return;
            ((this.sh.stay.day = t.time.day ?? 0),
              (this.sh.stay.capsule = this.id));
            let n = xo(`interior.capsule.voice.kutsu`);
            try {
              t.audio.say?.(
                { ja: L(`interior.capsule.voice.kutsu`), zh: n.zh, en: n.en },
                { lang: `ja`, priority: 4, volume: 0.8 },
              );
            } catch {}
          },
        },
        {
          x: e.mine.x,
          z: e.mine.z,
          r: 0.8,
          label: () =>
            this.resting
              ? null
              : this.checkedIn()
                ? {
                    zh: `按 E 進膠囊休息（存檔・回復）`,
                    en: `Press E to rest in your capsule (save & heal)`,
                  }
                : {
                    zh: `這是住客的膠囊 — 先到櫃台入住`,
                    en: `Guests only — check in at the front desk`,
                  },
          act: () => {
            this.checkedIn() && !this.resting && this.rest();
          },
        },
        {
          x: -e.s * (this.W / 2 - 0.95),
          z: (e.lz0 + e.lz1) / 2,
          r: 0.9,
          label: () =>
            this.checkedIn()
              ? {
                  zh: `按 E 打開置物櫃換裝`,
                  en: `Press E to open your locker (change clothes)`,
                }
              : { zh: `置物櫃 — 入住後才能使用`, en: `Lockers — for guests` },
          act: () => (this.checkedIn() ? this.wardrobe() : void 0),
        },
      ];
    }
    async rest() {
      let e = this.sh.ctx;
      this.resting = !0;
      try {
        await e.ui.fade(1, 0.8);
        let t = e.env?.hour ?? 12,
          n = t >= 18 || t < 5 ? 7 : Math.min(23.5, t + 3);
        e.env.setHour(n);
        try {
          e.player.heal(1e3);
        } catch {}
        e.state.saveNow();
        let i = xo(`interior.capsule.voice.oyasumi`);
        (e.ui.bigMessage(
          { zh: `已存檔`, en: `Game saved` },
          {
            zh: `在膠囊裡睡了一覺 — 生命全滿`,
            en: `A night in the capsule — full health`,
          },
          { color: `#e8c860`, duration: 2.6 },
        ),
          e.events.emit(`subtitle`, {
            text: {
              zh: r.on
                ? r.t(`「${i.zh}」`, `「${r.jz(i.zh)}」`)
                : `「${i.zh}」`,
              en: `"${i.en}"`,
            },
            duration: 2,
            speaker: e.t({ zh: `櫃台`, en: `Front desk` }),
          }),
          await new Promise((e) => setTimeout(e, 700)),
          await e.ui.fade(0, 0.8));
      } catch {
        try {
          await e.ui.fade(0, 0.3);
        } catch {}
      } finally {
        this.resting = !1;
      }
    }
    wardrobe() {
      let e = this.sh.ctx,
        t = e.player.character;
      this.sh.menu.show({
        title: { zh: `置物櫃`, en: `Locker` },
        subtitle: {
          zh: `換裝（存為你的角色）`,
          en: `Change clothes (saved as your character)`,
        },
        accent: `#1c2a52`,
        items: me.map((n) => ({
          name: he[n],
          price: 0,
          glyph: he[n].zh.slice(-1),
          desc:
            t === n
              ? { zh: `現在的樣子`, en: `Current look` }
              : { zh: `換上這套`, en: `Change into this` },
          can: () =>
            t !== n || { zh: `已經是這套了`, en: `Already wearing it` },
          buy: () => {
            e.player.setCharacter(n);
            try {
              Kee({ character: n });
            } catch {}
            (e.events.emit(`notify`, {
              text: {
                zh: r.on
                  ? r.t(
                      `換好衣服了：${he[n].zh}`,
                      `着替えた：${r.jz(he[n].zh)}`,
                    )
                  : `換好衣服了：${he[n].zh}`,
                en: `Changed: ${he[n].en}`,
              },
              duration: 2.2,
              kind: `good`,
            }),
              this.sh.menu.close(!0));
          },
        })),
        owner: this,
      });
    }
    views() {
      let e = super.views(),
        t = this.layout();
      return (
        (e.sig = [0, 1.75, t.cz0 - 1.2, 0, 1.2, t.cz1]),
        (e.detail = [t.s * 0.4, 1.5, 0.3, -t.s * (this.W / 2), 1, t.step]),
        (e.desk = [
          -t.s * 0.6,
          1.7,
          t.step + 0.2,
          (t.fx0 + t.fx1) / 2,
          1.4,
          t.fz1 + 0.6,
        ]),
        e
      );
    }
    kindSpot(e) {
      let t = this.layout();
      return e === `counter` || e === `desk`
        ? [(t.fx0 + t.fx1) / 2, t.fz0 - 0.7]
        : e === `capsule`
          ? [t.mine.x, t.mine.z]
          : e === `locker`
            ? [-t.s * (this.W / 2 - 0.95), (t.lz0 + t.lz1) / 2]
            : e === `corridor`
              ? [0, (t.cz0 + t.cz1) / 2]
              : null;
    }
  },
  wg = {
    "walkin-maid-akiba": { W: 6, D: 10 },
    "walkin-kissa-okachimachi": { W: 8.6, D: 9.5 },
    "walkin-sento-enraiyu": { W: 9, D: 8 },
    "walkin-callcentre-shimbashi": { W: 9, D: 16 },
  };
