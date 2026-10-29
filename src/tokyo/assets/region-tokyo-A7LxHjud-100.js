// tokyo/assets/region-tokyo-A7LxHjud 100 — math
// Lines 44574-45144 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var cue = class extends Ph {
    kind = `ramen`;
    page = `ramen`;
    minW = 4.2;
    minD = 7.5;
    maxD = 11.5;
    front = `slide`;
    name;
    audioRoom = `room`;
    L = null;
    ticket = -1;
    serveT = 0;
    taken = new Set();
    constructor(e, t, n) {
      (super(e, t.id, n, t.hours),
        (this.name = { zh: t.label.zh, en: t.label.en }),
        (this.fillHex = 16773336),
        (this.fillK = 0.85));
    }
    layoutDoor() {
      let e = this.seed & 2 ? 1 : -1;
      ((this.doorHW = 0.5),
        (this.dx = -e * (this.W / 2 - 0.75)),
        (this.L = null));
    }
    layout() {
      if (this.L) return this.L;
      let { W: e, D: t } = this,
        n = this.seed & 2 ? 1 : -1,
        r = -n * (e / 2 - 1.55),
        i = r + n * 0.5,
        a = 1.75,
        o = t - 0.75,
        s = Math.max(3, Math.floor((o - a - 0.2) / 0.58)),
        c = [];
      for (let e = 0; e < s; e++) c.push(2.1 + e * 0.58);
      return (
        (this.L = {
          s: n,
          xc0: r,
          xc1: i,
          cz0: a,
          cz1: o,
          stools: c,
          kx: -n * (e / 2 - 0.42),
          kz: 1,
        }),
        this.L
      );
    }
    peopleSpots() {
      let e = this.layout(),
        t = this.rng(3),
        n = [],
        r = e.s;
      (n.push({
        x: e.xc1 + r * 0.55,
        z: (e.cz0 + e.cz1) / 2 - 0.4,
        ry: r > 0 ? Math.PI / 2 : -Math.PI / 2,
        pose: `counter`,
        desc: qh(this.seed),
        staff: !0,
      }),
        n.push({
          x: r * (this.W / 2 - 0.85),
          z: e.cz0 + 1.1,
          ry: r > 0 ? -Math.PI / 2 : Math.PI / 2,
          pose: `cook`,
          desc: qh(this.seed + 5),
          staff: !0,
        }));
      let i = [
        `jp-salaryman`,
        `jp-salaryman-shirt`,
        `jp-daigakusei`,
        `jp-oji`,
        `jp-otaku-casual`,
      ];
      this.taken.clear();
      for (let a = 0; a < e.stools.length; a++)
        t() > 0.42 ||
          (this.taken.add(a),
          n.push({
            x: e.xc0 - r * 0.38,
            z: e.stools[a],
            ry: r > 0 ? -Math.PI / 2 : Math.PI / 2,
            pose: `stool`,
            desc: Kh(i[Math.floor(t() * i.length)], this.seed + 17 + a),
          }));
      return n;
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
        floor: { hex: 16777215, reg: o(`r-floor`), tile: 0.6 },
        wall: { hex: 16777215, reg: o(`r-wall`), tile: 1 },
        walls: {
          [a > 0 ? `right` : `left`]: {
            hex: 16777215,
            reg: o(`r-tile`),
            tile: 0.6,
          },
          back: { hex: 16777215, reg: o(`r-tile`), tile: 0.6 },
        },
        ceiling: { hex: 16777215, reg: o(`r-ceil`), tile: 1.2 },
        baseboard: { hex: 3811870, h: 0.12 },
        openings: [
          { wall: `front`, a: -e / 2, b: e / 2, y0: 0, y1: this.glassTop },
        ],
        ao: 0.36,
      }),
        yield `shell`);
      let s = Math.min(i.xc0, i.xc1),
        c = Math.max(i.xc0, i.xc1);
      (r.tex(o(`r-counter`), 16777215, 0.02),
        r.box(s, 0, i.cz0, c, 0.98, i.cz1, 63),
        r.tex(o(`r-counter`), 14205088, 0.02),
        r.box(s - 0.03, 0.98, i.cz0 - 0.02, c + 0.03, 1.02, i.cz1, 63));
      let l = a > 0 ? c - 0.18 : s,
        u = a > 0 ? c : s + 0.18;
      (r.col(6965808),
        r.box(l, 1.02, i.cz0, u, 1.22, i.cz1, 63),
        this.boxes.push({
          x0: s - 0.03,
          z0: i.cz0 - 0.02,
          x1: c + 0.03,
          z1: i.cz1,
          y0: 0,
          y1: 1.25,
        }));
      for (let e of i.stools)
        (Tn(r, i.xc0 - a * 0.38, e, 0.68, 11019292),
          this.boxes.push({
            x0: i.xc0 - a * 0.38 - 0.16,
            z0: e - 0.16,
            x1: i.xc0 - a * 0.38 + 0.16,
            z1: e + 0.16,
            y0: 0,
            y1: 0.7,
            tag: `prop`,
          }));
      for (let e = 0; e < i.stools.length; e += 2) {
        let t = i.stools[e],
          n = i.xc0 + a * 0.12;
        (r.tex(o(`r-condiments`), 16777215, 0.02),
          r.box(n - 0.08, 1.02, t + 0.12, n + 0.08, 1.16, t + 0.28, 63),
          r.col(16053488),
          r.box(n - 0.06, 1.02, t - 0.18, n + 0.06, 1.12, t - 0.05, 63));
      }
      for (let e = 0; e < i.stools.length; e++) {
        if (!this.taken.has(e)) continue;
        let t = i.stools[e],
          n = i.xc0 + a * 0.2;
        (r.col(15920612),
          r.cyl(n, t, 0.09, 0.14, 1.02, 1.12, 12, !1),
          r.tex(o(`r-noodles`), 16777215, 0.05),
          r.disc(n, 1.105, t, 0.13, 12, !0),
          r.col(15262420),
          r.box(n - 0.01, 1.02, t + 0.16, n + 0.02, 1.3, t + 0.18, 63));
      }
      yield `counter`;
      let d = i.xc1 + a * 0.85,
        f = (e / 2) * a,
        p = Math.min(d, f),
        m = Math.max(d, f);
      (r.tex(o(`r-steel`), 16777215, 0.04),
        r.box(p, 0, i.cz0 + 0.3, m, 0.86, i.cz1 - 0.1, 63),
        this.boxes.push({
          x0: p,
          z0: i.cz0 + 0.3,
          x1: m,
          z1: i.cz1 - 0.1,
          y0: 0,
          y1: 1.5,
        }));
      let h = i.cz0 + 0.9,
        g = (p + m) / 2;
      (r.tex(o(`r-steel`), 13685976, 0.05),
        r.box(p + 0.05, 0.86, h - 0.45, m - 0.05, 1, h + 0.45, 63),
        r.col(3820114, 0.1),
        r.rectY(p + 0.1, h - 0.4, m - 0.1, h + 0.4, 1.005, 1));
      for (let e = 0; e < 4; e++)
        (r.col(9080982),
          r.cyl(
            g - 0.18 + (e % 2) * 0.36,
            h - 0.18 + Math.floor(e / 2) * 0.36,
            0.085,
            0.085,
            0.95,
            1.06,
            10,
            !1,
          ),
          r.box(
            g - 0.18 + (e % 2) * 0.36 - 0.006,
            1.06,
            h - 0.18 + Math.floor(e / 2) * 0.36 - 0.006,
            g - 0.18 + (e % 2) * 0.36 + 0.006,
            1.32,
            h - 0.18 + Math.floor(e / 2) * 0.36 + 0.006,
            63,
          ));
      this.gl.col(16053492, 0.14);
      for (let e = 0; e < 3; e++)
        this.gl.sphere(
          g + (e - 1) * 0.12,
          1.2 + e * 0.14,
          h,
          0.12 + e * 0.05,
          8,
          5,
          0.8,
        );
      for (let e = 0; e < 2; e++) {
        let t = h + 1.2 + e * 0.7;
        if (t > i.cz1 - 0.4) break;
        (r.col(2763824),
          r.box(p + 0.05, 0.86, t - 0.3, m - 0.05, 0.92, t + 0.3, 63),
          r.tex(o(`r-steel`), 16777215, 0.04),
          r.cyl(g, t, 0.24, 0.24, 0.92, 1.42, 16, !0),
          r.col(5913114, 0.05),
          r.disc(g, 1.425, t, 0.22, 16, !0));
      }
      let _ = i.xc1 + a * 0.3;
      (r.tex(o(`r-trays`), 16777215, 0.05),
        r.rectY(
          Math.min(_ - 0.2, _ + 0.2),
          i.cz1 - 1.9,
          Math.max(_ - 0.2, _ + 0.2),
          i.cz1 - 1.2,
          0.9,
          1,
        ),
        r.col(12106944),
        r.box(
          Math.min(_ - 0.22, _ + 0.22),
          0,
          i.cz1 - 1.95,
          Math.max(_ - 0.22, _ + 0.22),
          0.89,
          i.cz1 - 1.15,
          55,
        ),
        r.tex(o(`r-bowls`), 16777215, 0.04),
        r.box(
          Math.min(_ - 0.18, _ + 0.18),
          0.9,
          i.cz1 - 0.95,
          Math.max(_ - 0.18, _ + 0.18),
          1.25,
          i.cz1 - 0.55,
          63,
        ),
        r.col(12106944),
        r.box(
          p + 0.02,
          n - 0.55,
          i.cz0 + 0.3,
          m,
          n - 0.02,
          i.cz1 - 0.2,
          lue | (a > 0 ? 2 : 1) | 48,
        ),
        yield `kitchen`);
      let v = n - 0.95,
        y = n - 0.12,
        b = i.cz0 + 0.2,
        x = (e / 2) * a - a * 0.01;
      for (let e = 0; e < 5; e++) {
        let t = b + e * 0.3;
        (r.tex(o(`r-fuda-${e}`), 16777215, 0.08),
          r.rectX(t, v + 0.05, t + 0.24, y, i.xc1 + a * 0.02, a > 0 ? -1 : 1));
      }
      (r.tex(o(`r-poster`), 16777215, 0.05),
        r.rectX(i.cz0 + 2.2, 1.35, i.cz0 + 2.75, 2.15, x, a > 0 ? -1 : 1),
        r.tex(o(`r-kaedama`), 16777215, 0.06),
        r.rectX(i.cz1 - 1.6, 1.5, i.cz1 - 1.2, 1.9, x, a > 0 ? -1 : 1));
      let S = -a * (e / 2) + a * 0.01;
      (r.tex(o(`r-katasa`), 16777215, 0.06),
        r.rectX(i.cz0 + 1, 1.75, i.cz0 + 2.8, 2.08, S, a > 0 ? 1 : -1));
      let C = i.cz1 - 0.35;
      (r.col(15264492),
        r.box(
          Math.min(S, S + a * 0.4),
          0,
          C - 0.25,
          Math.max(S, S + a * 0.4),
          0.9,
          C + 0.25,
          63,
        ),
        r.col(13165808, 0.15),
        r.box(
          Math.min(S + a * 0.05, S + a * 0.32),
          0.9,
          C - 0.12,
          Math.max(S + a * 0.05, S + a * 0.32),
          1.2,
          C + 0.12,
          63,
        ),
        r.tex(o(`r-ohiya`), 16777215, 0.08),
        r.rectX(C - 0.42, 1.3, C + 0.42, 1.52, S + a * 0.002, a > 0 ? 1 : -1),
        this.boxes.push({
          x0: Math.min(S, S + a * 0.4),
          z0: C - 0.25,
          x1: Math.max(S, S + a * 0.4),
          z1: C + 0.25,
          y0: 0,
          y1: 1.2,
        }),
        yield `walls`);
      let w = i.kx,
        T = Math.min(w - 0.36, w + 0.36),
        E = Math.max(w - 0.36, w + 0.36);
      (r.col(12106944),
        r.box(T, 0, i.kz - 0.28, E, 1.82, i.kz + 0.28, 63),
        r.tex(o(`r-kenbaiki`), 16777215, 0.35, 1.02),
        r.rectZ(T + 0.03, 0.12, E - 0.03, 1.8, i.kz + 0.281, 1),
        this.boxes.push({
          x0: T,
          z0: i.kz - 0.28,
          x1: E,
          z1: i.kz + 0.28,
          y0: 0,
          y1: 1.85,
        }));
      let D = [];
      for (let e = i.cz0 + 0.6; e < i.cz1 - 0.3; e += 1.4) {
        let t = (i.xc0 + i.xc1) / 2;
        (r.col(1710618),
          r.box(t - 0.005, n - 0.75, e - 0.005, t + 0.005, n, e + 0.005, 63),
          r.lathe(t, e, [0.02, n - 0.62, 0.17, n - 0.78, 0.18, n - 0.8], 10),
          r.tex(o(`r-pendant`), 16777215, 1, 1.8),
          r.disc(t, n - 0.79, e, 0.15, 10, !1),
          D.push({ x: t, y: n - 0.85, z: e, r: 3.2, c: [0.55, 0.42, 0.26] }));
      }
      (r.col(16777215, 1, 2.4),
        r.rectY(
          Math.min(d, f) + 0.2,
          i.cz0 + 0.5,
          Math.max(d, f) - 0.2,
          i.cz1 - 0.6,
          n - 0.56,
          -1,
        ),
        D.push({
          x: (p + m) / 2,
          y: n - 0.6,
          z: (i.cz0 + i.cz1) / 2,
          r: 4,
          c: [0.28, 0.3, 0.3],
        }),
        (this.bake = { amb: [0.5, 0.46, 0.42], lights: D, floorAO: 0.5 }));
    }
    kindTick(e) {
      this.serveT > 0 && ((this.serveT -= e), this.serveT <= 0 && this.serve());
    }
    serve() {
      let e = this.sh.ctx,
        t = this.ticket;
      if (((this.ticket = -1), t < 0)) return;
      let [n, , i] = cg[t],
        a = xo(`interior.ramen.voice.omachi`);
      try {
        e.audio.say?.(
          { ja: L(`interior.ramen.voice.omachi`), zh: a.zh, en: a.en },
          { lang: `ja`, priority: 4, volume: 0.8 },
        );
      } catch {}
      let o = xo(n);
      e.events.emit(`subtitle`, {
        text: {
          zh: r.on ? r.t(`「${a.zh}」`, `「${r.jz(a.zh)}」`) : `「${a.zh}」`,
          en: `"${a.en}"`,
        },
        duration: 1.8,
        speaker: e.t({ zh: `店員`, en: `Cook` }),
      });
      try {
        e.player.heal(i);
      } catch {}
      e.events.emit(`notify`, {
        text: {
          zh: r.on
            ? r.t(
                `${o.zh} 上桌了 — 呼嚕呼嚕… +${i} 生命`,
                `${r.jz(o.zh)} お待ち — ズルズル… HP +${i}`,
              )
            : `${o.zh} 上桌了 — 呼嚕呼嚕… +${i} 生命`,
          en: `${o.en} served — slurp… +${i} HP`,
        },
        duration: 3,
        kind: `good`,
      });
    }
    greeting() {
      let e = xo(`interior.ramen.voice.rasshai`);
      return { ja: L(`interior.ramen.voice.rasshai`), zh: e.zh, en: e.en };
    }
    spotDefs() {
      let e = this.layout(),
        t = this.sh.ctx,
        n = { zh: `店員不肯招呼你……`, en: `The staff won’t serve you…` };
      return [
        {
          x: e.kx,
          z: e.kz + 0.75,
          r: 0.75,
          label: () =>
            this.panic > 0
              ? n
              : this.ticket >= 0
                ? {
                    zh: `已經買好餐券了 — 交給櫃檯`,
                    en: `Ticket bought — hand it over at the counter`,
                  }
                : {
                    zh: `按 E 在食券機買餐券`,
                    en: `Press E to buy a meal ticket`,
                  },
          act: () =>
            this.panic > 0 || this.ticket >= 0 ? void 0 : this.openMachine(),
        },
        {
          x: e.xc0 - e.s * 1,
          z: e.stools[Math.min(e.stools.length - 1, 1)],
          r: 1,
          label: () =>
            this.ticket < 0 || this.serveT > 0
              ? null
              : {
                  zh: `按 E 把餐券交給店員`,
                  en: `Press E to hand your ticket over`,
                },
          act: () => {
            if (this.ticket < 0 || this.serveT > 0) return;
            let e = xo(`interior.ramen.voice.ticket`);
            try {
              t.audio.say?.(
                { ja: L(`interior.ramen.voice.ticket`), zh: e.zh, en: e.en },
                { lang: `ja`, priority: 4, volume: 0.8 },
              );
            } catch {}
            (t.events.emit(`subtitle`, {
              text: {
                zh: r.on
                  ? r.t(`「${e.zh}」`, `「${r.jz(e.zh)}」`)
                  : `「${e.zh}」`,
                en: `"${e.en}"`,
              },
              duration: 1.6,
              speaker: t.t({ zh: `店員`, en: `Cook` }),
            }),
              (this.serveT = cg[this.ticket][1] >= 1e3 ? 6 : 3));
          },
        },
      ];
    }
    openMachine() {
      let e = this.sh.ctx,
        t = cg.map(([t, n, i, a], o) => {
          let s = xo(t);
          return {
            name: s,
            price: n,
            glyph: a,
            desc: {
              zh: r.on ? r.t(`+${i} 生命`, `HP +${i}`) : `+${i} 生命`,
              en: `+${i} HP`,
            },
            can: () =>
              e.money.canAfford(n)
                ? !0
                : { zh: `錢不夠…`, en: `Not enough cash…` },
            buy: () => {
              if (
                this.pay(n, t, {
                  zh: r.on
                    ? r.t(
                        `買了餐券：${s.zh}（${e.money.format(n)}）`,
                        `食券を購入：${r.jz(s.zh)}（${e.money.format(n)}）`,
                      )
                    : `買了餐券：${s.zh}（${e.money.format(n)}）`,
                  en: `Ticket: ${s.en} (${e.money.format(n)})`,
                })
              ) {
                this.ticket = o;
                try {
                  e.audio.play(`ui_confirm`, { volume: 0.6 });
                } catch {}
                this.sh.menu.close(!0);
              }
            },
          };
        });
      this.sh.menu.show({
        title: { zh: `食券機`, en: `Ticket machine` },
        subtitle: {
          zh: `先買餐券，再交給櫃檯 · 只收千圓鈔`,
          en: `Buy a ticket, then hand it over · ¥1,000 notes only`,
        },
        accent: `#c81818`,
        items: t,
        owner: this,
      });
    }
    frameHex() {
      return 5913124;
    }
    views() {
      let e = super.views(),
        t = this.layout(),
        n = t.s;
      return (
        (e.sig = [
          t.xc0 - n * 1.1,
          1.62,
          t.cz0 - 0.6,
          t.xc1 + n * 0.6,
          1.25,
          t.cz1 - 0.5,
        ]),
        (e.detail = [t.kx + n * 0.6, 1.45, t.kz + 1.6, t.kx, 1.1, t.kz]),
        e
      );
    }
    kindSpot(e) {
      let t = this.layout();
      return e === `counter`
        ? [t.xc0 - t.s * 1, t.stools[1] ?? t.cz0 + 1]
        : e === `machine`
          ? [t.kx, t.kz + 0.75]
          : null;
    }
  },
  lue = 8,
  lg = 3.9,
  ug = 5.9,
  dg = 1.6,
  fg = [
    [`common.promo.nama-beer`, 550],
    [`interior.izakaya.item.lemonsour`, 450],
    [`trade.izakaya.item.highball`, 480],
    [`interior.izakaya.item.atsukan`, 500],
    [`trade.yakitori.item.negima`, 220],
    [`trade.yakitori.item.tsukune`, 250],
    [`trade.yakitori.item.kawa`, 200],
    [`interior.izakaya.item.reba`, 200],
    [`interior.izakaya.item.nikomi`, 500],
    [`trade.izakaya.item.edamame`, 380],
    [`interior.izakaya.item.hiyayakko`, 350],
    [`interior.izakaya.item.potesara`, 400],
  ],
  uue = [
    [`common.promo.nama-beer`, 550, 5, `啤`],
    [`interior.izakaya.item.lemonsour`, 450, 5, `檸`],
    [`trade.yakitori.item.omakase`, 1100, 70, `串`],
    [`interior.izakaya.item.nikomi`, 500, 40, `燉`],
    [`trade.izakaya.item.edamame`, 380, 20, `豆`],
    [`interior.izakaya.item.atsukan`, 500, 5, `酒`],
  ],
  pg = 300;
