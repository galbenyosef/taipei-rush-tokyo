// tokyo__assets__actors-Bnj6Q1ad 123 — math
// Lines 57892-58850 of readable/tokyo__assets__actors-Bnj6Q1ad.pretty.js (statement-aligned).
var VA = {
    zh: `土地公保佑：任務報酬 +10%（5 分鐘）`,
    en: `Earth God's blessing: +10% mission pay (5 min)`,
  },
  HA = [],
  UA = (e) => {
    let t = 2166136261;
    for (let n = 0; n < e.length; n++)
      t = Math.imul(t ^ e.charCodeAt(n), 16777619);
    return t >>> 0;
  },
  WA = (e, t) => (t + 2048) * 4096 + (e + 2048),
  GA = class {
    ctx;
    hud;
    grid = new Map();
    near = null;
    promptFor = null;
    promptMsg = { zh: ``, en: `` };
    acc = 0;
    cooldown = 0;
    listeners = new Set();
    blessing = 0;
    regenAcc = 0;
    lastPray = new Map();
    cultureShrines = [];
    closedMsg = new Map();
    tickets = new Map();
    day = 0;
    lastHour = -1;
    muteUntil = 0;
    doors = new Map();
    hoursCache = new Map();
    c;
    stock = new Map();
    constructor(e, t, n) {
      ((this.ctx = e),
        (this.hud = t),
        (this.c = n ?? BA()),
        (AA = n?.name?.bind(n)),
        kA.clear());
    }
    itemsFor(e) {
      let t = this.c.items[e.kind];
      return !t || !t.length
        ? HA
        : t.some((e) => e.brand)
          ? t.filter((t) => !t.brand || t.brand === e.brand)
          : t;
    }
    itemOf(e) {
      let t = this.stock.get(e);
      return t ? t.items[t.i] : DA[e.kind];
    }
    get interiors() {
      return this.ctx.interiors ?? null;
    }
    nearestPoi(e, t, n, r) {
      let i = null,
        a = r;
      for (let r of this.ctx.plan.pois) {
        if (r.kind !== e || Math.abs(r.x - t) > a || Math.abs(r.z - n) > a)
          continue;
        let o = Math.hypot(r.x - t, r.z - n);
        o < a && ((a = o), (i = r));
      }
      return i;
    }
    start() {
      this.ctx.events.on(`money:changed`, (e) => {
        if (e.reason !== `store` || !(e.delta < 0) || !this.listeners.size)
          return;
        let t = this.ctx.player.position,
          n = this.interiors?.current ?? ``,
          r = n.startsWith(`store:`) ? n.slice(6) : ``,
          i =
            (r && this.ctx.plan.pois.find((e) => e.id === r)) ||
            this.nearestPoi(`convenience`, t.x, t.z, 30);
        if (i)
          for (let e of this.listeners)
            try {
              e(`convenience`, i);
            } catch (e) {
              console.error(e);
            }
      });
      try {
        let e = this.ctx.culture?.shrines;
        !this.c.shrine.own &&
          e &&
          e.length &&
          (this.cultureShrines = e.map((e) => ({ x: e.x, z: e.z })));
      } catch {}
      for (let e of this.ctx.plan.pois) {
        if (e.kind === `shrine` && this.cultureShrines.length) continue;
        let t = this.itemsFor(e);
        if (!t.length) continue;
        this.stock.set(e, {
          items: t,
          i: t.length > 1 ? UA(e.id) % t.length : 0,
        });
        let n = this.front(e),
          r = WA(Math.floor(n.x / RA), Math.floor(n.z / RA)),
          i = this.grid.get(r);
        (i || this.grid.set(r, (i = [])), i.push(e));
        try {
          let t = this.ctx.buildings?.storefront?.(e.id);
          t &&
            Math.hypot(t.x - n.x, t.z - n.z) > 0.8 &&
            this.doors.set(e, { x: t.x, z: t.z });
        } catch {}
      }
    }
    onBuy(e) {
      return (this.listeners.add(e), () => this.listeners.delete(e));
    }
    hoursOf(e) {
      let t = this.hoursCache.get(e);
      if (t === void 0) {
        let n = NA(jA(this.ctx, e));
        ((t = n === void 0 ? (this.itemOf(e).hours ?? null) : n),
          this.hoursCache.set(e, t));
      }
      return t;
    }
    walkIn(e) {
      try {
        return !!this.ctx.interiors?.hasShop?.(e.id);
      } catch {
        return !1;
      }
    }
    front(e) {
      return {
        x: e.x + Math.sin(e.facing) * 1.4,
        z: e.z - Math.cos(e.facing) * 1.4,
      };
    }
    query() {
      let e = this.ctx.player;
      if (((this.near = null), e.mode !== `foot`)) return;
      let t = e.position.x,
        n = e.position.z,
        r = Math.floor(t / RA),
        i = Math.floor(n / RA),
        a = 1 / 0;
      for (let e = -1; e <= 1; e++)
        for (let o = -1; o <= 1; o++) {
          let s = this.grid.get(WA(r + o, i + e));
          if (s)
            for (let e of s) {
              let r = e.x + Math.sin(e.facing) * 1.4,
                i = e.z - Math.cos(e.facing) * 1.4,
                o = Math.hypot(r - t, i - n),
                s = this.doors.get(e);
              s && (o = Math.min(o, Math.hypot(s.x - t, s.z - n)));
              let c = Math.max(2.4, e.width * 0.5 + 0.6);
              o < c && o < a && ((a = o), (this.near = e));
            }
        }
    }
    get nearPoi() {
      return this.near;
    }
    mute(e) {
      this.muteUntil = this.ctx.time.real + e;
    }
    update(e, t = !1) {
      let n = this.ctx;
      this.acc += e;
      let r = 12;
      try {
        r = n.env.hour;
      } catch {}
      if (
        (this.lastHour >= 0 &&
          r < this.lastHour - 12 &&
          (this.day++, this.tickets.clear()),
        (this.lastHour = r),
        this.cooldown > 0 && (this.cooldown -= e),
        this.acc >= 0.1 && ((this.acc = 0), this.query()),
        this.blessing > 0)
      ) {
        if (((this.blessing -= e), (this.regenAcc += e), this.regenAcc > 2)) {
          this.regenAcc = 0;
          try {
            n.player.health > 0 &&
              n.player.health < n.player.maxHealth &&
              n.player.heal(2);
          } catch {}
        }
        this.blessing <= 0 && this.hud.notify(this.c.shrine.faded, `info`, 3);
      }
      this.cultureShrines.length &&
        n.player.mode === `foot` &&
        !n.missions?.active &&
        n.input.pressed(`interact`) &&
        this.shrinePiggyback();
      let a = this.near;
      if (!a || n.player.mode !== `foot` || t || n.time.real < this.muteUntil)
        return;
      let o = this.interiors;
      if (
        (o && (o.playerInside || o.busy)) ||
        this.walkIn(a) ||
        this.hud.prompted
      )
        return;
      let s = this.itemOf(a),
        c = this.hoursOf(a);
      if (c && !FA(c, r)) {
        let e = this.closedMsg.get(a.id);
        if (!e) {
          let t = MA(a, n);
          ((e = {
            zh: i.on
              ? i.t(
                  `${t.zh}（已打烊・營業 ${PA(c[0])}–${PA(c[1])}）`,
                  `${i.jz(t.zh)}（閉店中・営業 ${PA(c[0])}–${PA(c[1])}）`,
                )
              : `${t.zh}（已打烊・營業 ${PA(c[0])}–${PA(c[1])}）`,
            en: `${IA(t.en)} (closed · open ${PA(c[0])}–${PA(c[1])})`,
          }),
            this.closedMsg.set(a.id, e));
        }
        this.hud.prompt(e);
        return;
      }
      if (a !== this.promptFor) {
        this.promptFor = a;
        let e = MA(a, n),
          t = this.c.shrine.offering,
          r = this.c.lottery.cap;
        this.promptMsg =
          a.kind === `shrine`
            ? {
                zh: i.on
                  ? i.t(
                      `按 {interact} ${s.name.zh}（${t.zh} ${G(s.price)}）`,
                      `{interact} で${i.jz(s.name.zh)}（${i.jz(t.zh)} ${G(s.price)}）`,
                    )
                  : `按 {interact} ${s.name.zh}（${t.zh} ${G(s.price)}）`,
                en: `Press {interact} to ${s.name.en} (${t.en} ${G(s.price)})`,
              }
            : a.kind === `claw`
              ? {
                  zh: i.on
                    ? i.t(
                        `按 {interact} ${s.name.zh}（${G(s.price)}）`,
                        `{interact} で${i.jz(s.name.zh)}（${G(s.price)}）`,
                      )
                    : `按 {interact} ${s.name.zh}（${G(s.price)}）`,
                  en: `Press {interact}: play the claw machine (${G(s.price)})`,
                }
              : a.kind === `lottery`
                ? {
                    zh: i.on
                      ? i.t(
                          `按 {interact} 在${e.zh}買${s.name.zh}（${G(s.price)}，每天限 ${r} 張）`,
                          `{interact} で${i.jz(e.zh)}の${i.jz(s.name.zh)}を買う（${G(s.price)}、1日 ${r} 枚まで）`,
                        )
                      : `按 {interact} 在${e.zh}買${s.name.zh}（${G(s.price)}，每天限 ${r} 張）`,
                    en: `Press {interact}: buy a ${s.name.en} at ${e.en} (${G(s.price)}, ${r}/day)`,
                  }
                : {
                    zh: i.on
                      ? i.t(
                          `按 {interact} 在${e.zh}買${s.name.zh}（${G(s.price)}）`,
                          `{interact} で${i.jz(e.zh)}の${i.jz(s.name.zh)}を買う（${G(s.price)}）`,
                        )
                      : `按 {interact} 在${e.zh}買${s.name.zh}（${G(s.price)}）`,
                    en: `Press {interact}: buy ${s.name.en} at ${e.en} (${G(s.price)})`,
                  };
      }
      this.hud.promptIfFree(this.promptMsg) &&
        this.cooldown <= 0 &&
        n.input.pressed(`interact`) &&
        n.player.controlEnabled !== !1 &&
        this.buy(a);
    }
    shrinePiggyback() {
      let e = this.ctx,
        t = e.player.position;
      for (let n = 0; n < this.cultureShrines.length; n++) {
        let r = this.cultureShrines[n];
        if (
          Math.abs(t.x - r.x) > 2.6 ||
          Math.abs(t.z - r.z) > 2.6 ||
          Math.hypot(t.x - r.x, t.z - r.z) > 2.6
        )
          continue;
        let a = `c${n}`,
          o = this.lastPray.get(a) ?? -1e9;
        if (e.time.elapsed - o < 180) return;
        this.lastPray.set(a, e.time.elapsed);
        let s = this.blessing > 0;
        ((this.blessing = Math.max(this.blessing, 300)),
          s || setTimeout(() => this.hud.notify(VA, `good`, 4), 1200));
        let c = fn(e);
        (c &&
          setTimeout(
            () =>
              this.hud.notify(
                {
                  zh: i.on
                    ? i.t(
                        `拿到「${c.name.zh}」，放進背包了`,
                        `「${i.jz(c.name.zh)}」をもらった。バッグに入れた`,
                      )
                    : `拿到「${c.name.zh}」，放進背包了`,
                  en: `You received ${c.name.en} — in your bag`,
                },
                `good`,
                3.5,
              ),
            s ? 1200 : 5400,
          ),
          e.state.stat(`buy_shrine`));
        for (let e of this.listeners)
          try {
            e(`shrine`, {
              id: `shrine-culture-${n}`,
              kind: `shrine`,
              brand: `土地公`,
              x: r.x,
              z: r.z,
              facing: 0,
              blockId: -1,
              width: 1,
            });
          } catch {}
        return;
      }
    }
    buy(e) {
      let t = this.ctx,
        n = this.itemOf(e);
      this.cooldown = 0.6;
      let r = t.env?.hour ?? 12,
        a = this.hoursOf(e);
      if (a && !FA(a, r)) {
        let n = MA(e, t);
        return (
          this.hud.notify(
            {
              zh: i.on
                ? i.t(
                    `${n.zh}已經打烊了（營業 ${PA(a[0])}–${PA(a[1])}）`,
                    `${i.jz(n.zh)}はもう閉店しています（営業 ${PA(a[0])}–${PA(a[1])}）`,
                  )
                : `${n.zh}已經打烊了（營業 ${PA(a[0])}–${PA(a[1])}）`,
              en: `${IA(n.en)} is closed (open ${PA(a[0])}–${PA(a[1])})`,
            },
            `bad`,
            3,
          ),
          !1
        );
      }
      if (e.kind === `shrine`) {
        let n = this.lastPray.get(e.id) ?? -1e9;
        if (t.time.elapsed - n < 180)
          return (
            this.hud.notify(
              {
                zh: `你剛拜過了，心誠則靈。`,
                en: `You just prayed here. Sincerity is enough.`,
              },
              `info`,
              3,
            ),
            !1
          );
      }
      if (
        e.kind === `lottery` &&
        (this.tickets.get(e.id) ?? 0) >= this.c.lottery.cap
      )
        return (this.hud.notify(this.c.lottery.soldOut, `info`, 3), !1);
      if (t.state.money < n.price) {
        this.hud.notify(
          { zh: `錢不夠！`, en: `Not enough money!` },
          `bad`,
          2.5,
        );
        try {
          t.audio.play(`empty_click`, { ui: !0 });
        } catch {}
        return !1;
      }
      (t.state.addMoney(-n.price, `shop:${e.kind}`),
        t.state.stat(`buy_${e.kind}`));
      let o = (e) => {
        try {
          t.audio.play(e, { ui: !0, volume: 0.8 });
        } catch {}
      };
      switch ((o(`coin`), e.kind)) {
        case `lottery`:
          (this.tickets.set(e.id, (this.tickets.get(e.id) ?? 0) + 1),
            this.scratch());
          break;
        case `claw`: {
          let e = this.c.prizes,
            n = this.c.clawMiss;
          if (this.clawWin()) {
            let n = Math.floor(Math.random() * e.length),
              r = e[n];
            (t.state.stat(`plushies`), o(`pickup`));
            let a = this.c.bag?.prizes?.[n],
              s = !!a && pn(t, a, 1, { quiet: !0 }) > 0;
            this.hud.notify(
              s
                ? {
                    zh: i.on
                      ? i.t(
                          `夾到了！${r.zh}，放進背包了！`,
                          `取れた！${i.jz(r.zh)}、バッグに入れた！`,
                        )
                      : `夾到了！${r.zh}，放進背包了！`,
                    en: `Got it! ${r.en} — in your bag!`,
                  }
                : {
                    zh: i.on
                      ? i.t(`夾到了！${r.zh}！`, `取れた！${i.jz(r.zh)}！`)
                      : `夾到了！${r.zh}！`,
                    en: `Got it! You won ${r.en}!`,
                  },
              `good`,
              3.5,
            );
          } else
            this.hud.notify(
              n[Math.floor(Math.random() * n.length)],
              `info`,
              2.5,
            );
          break;
        }
        case `shrine`:
          (this.lastPray.set(e.id, t.time.elapsed),
            (this.blessing = 300),
            o(`temple_bell`));
          {
            let e = fn(t),
              n = this.c.shrine.blessed;
            e
              ? this.hud.notify(
                  {
                    zh: i.on
                      ? i.t(
                          `${n.zh}，還拿到「${e.name.zh}」（在背包）`,
                          `${i.jz(n.zh)} さらに「${i.jz(e.name.zh)}」もいただいた（バッグの中）`,
                        )
                      : `${n.zh}，還拿到「${e.name.zh}」（在背包）`,
                    en: `${n.en} — and ${e.name.en} (in your bag)`,
                  },
                  `good`,
                  4.5,
                )
              : this.hud.notify(n, `good`, 4);
          }
          break;
        default: {
          let r = n.heal ?? 0,
            a = MA(e, t),
            o = e.kind === `convenience` ? this.c.bag?.receipt : void 0,
            s =
              o && pn(t, o.item, 1, { quiet: !0 }) > 0
                ? o.line
                : { zh: ``, en: `` };
          if (
            n.bag &&
            (r <= 0 || t.player.health >= t.player.maxHealth) &&
            pn(t, n.bag, 1, { quiet: !0 }) > 0
          ) {
            this.hud.notify(
              {
                zh: i.on
                  ? i.t(
                      `${a.zh}：${n.name.zh}外帶，放進背包${s.zh}`,
                      `${i.jz(a.zh)}：${i.jz(n.name.zh)}を持ち帰り、バッグに入れた${i.jz(s.zh)}`,
                    )
                  : `${a.zh}：${n.name.zh}外帶，放進背包${s.zh}`,
                en: `${IA(a.en)}: ${n.name.en} to go — in your bag${s.en}`,
              },
              `good`,
              2.8,
            );
            break;
          }
          if (r > 0) {
            try {
              t.player.heal(r);
            } catch {}
            let e =
              r >= 1e3
                ? { zh: `體力全滿`, en: `fully healed` }
                : {
                    zh: i.on ? i.t(`體力 +${r}`, `体力 +${r}`) : `體力 +${r}`,
                    en: `+${r} HP`,
                  };
            this.hud.notify(
              {
                zh: i.on
                  ? i.t(
                      `${a.zh}：${n.name.zh}（${e.zh}）${s.zh}`,
                      `${i.jz(a.zh)}：${i.jz(n.name.zh)}（${i.jz(e.zh)}）${i.jz(s.zh)}`,
                    )
                  : `${a.zh}：${n.name.zh}（${e.zh}）${s.zh}`,
                en: `${IA(a.en)}: ${n.name.en} (${e.en})${s.en}`,
              },
              `good`,
              2.5,
            );
          } else
            this.hud.notify(
              {
                zh: i.on
                  ? i.t(
                      `${a.zh}：${n.name.zh}${s.zh}`,
                      `${i.jz(a.zh)}：${i.jz(n.name.zh)}${i.jz(s.zh)}`,
                    )
                  : `${a.zh}：${n.name.zh}${s.zh}`,
                en: `${IA(a.en)}: ${n.name.en}${s.en}`,
              },
              `good`,
              2.5,
            );
        }
      }
      let s = this.stock.get(e);
      s &&
        s.items.length > 1 &&
        ((s.i = (s.i + 1) % s.items.length),
        this.promptFor === e && (this.promptFor = null),
        this.hoursCache.delete(e));
      for (let t of this.listeners)
        try {
          t(e.kind, e);
        } catch (e) {
          console.error(e);
        }
      return !0;
    }
    clawWin() {
      try {
        if (this.ctx.params?.has(`clawwin`)) return !0;
      } catch {}
      return Math.random() < 0.12;
    }
    scratch() {
      let e = this.ctx,
        t = this.c.lottery,
        n = Math.random(),
        r = 0;
      for (let [e, i] of t.prizes)
        if (n < e) {
          r = i;
          break;
        }
      if (r > 0) {
        (e.state.addMoney(r, `lottery`), e.state.stat(`lotteryWins`));
        try {
          e.audio.play(r >= t.big ? `mission_pass` : `money`, { ui: !0 });
        } catch {}
        r >= t.big
          ? this.hud.bigMessage({ zh: `中大獎了！`, en: `JACKPOT!` }, G(r), {
              color: `#ffd24d`,
              duration: 3.5,
            })
          : this.hud.notify(
              {
                zh: i.on
                  ? i.t(`刮中了 ${G(r)}！`, `${G(r)} 当たった！`)
                  : `刮中了 ${G(r)}！`,
                en: `You won ${G(r)}!`,
              },
              `good`,
              3,
            );
      } else this.hud.notify(t.lose, `info`, 2.5);
    }
  },
  KA = [
    {
      id: `acheng-moto`,
      name: { zh: `阿成機車行`, en: `A-Cheng's Scooter Shop` },
      road: `和平`,
      x: -742,
      z: 280,
      stock: [
        {
          kind: `scooter`,
          price: 12800,
          name: { zh: `125 速克達`, en: `125 cc scooter` },
          color: 9426628,
        },
        {
          kind: `motorcycle`,
          price: 36800,
          name: { zh: `野狼檔車`, en: `"Wild Wolf" motorcycle` },
          color: 1908257,
        },
        {
          kind: `superbike`,
          price: 98e3,
          name: { zh: `紅牌重機`, en: `red-plate superbike` },
          color: 13112863,
          requires: `stunt`,
        },
      ],
    },
    {
      id: `bade-motors`,
      name: { zh: `八德路名車行`, en: `Bade Rd Motors` },
      road: `八德`,
      x: 640,
      z: -410,
      stock: [
        {
          kind: `sedan`,
          price: 42e3,
          name: { zh: `二手房車`, en: `used sedan` },
          color: 3817288,
        },
        {
          kind: `suv`,
          price: 68e3,
          name: { zh: `休旅車`, en: `SUV` },
          color: 15263976,
        },
        {
          kind: `sports`,
          price: 188e3,
          name: { zh: `跑車`, en: `sports car` },
          color: 16106776,
          requires: `race`,
        },
      ],
    },
  ],
  qA = 80,
  JA = class {
    ctx;
    hud;
    markers;
    live = [];
    acc = 0;
    near = null;
    nearDealer = null;
    defs;
    constructor(e, t, n, r) {
      ((this.ctx = e),
        (this.hud = t),
        (this.markers = n),
        (this.defs = r ?? KA));
    }
    owned(e) {
      return (this.ctx.state.data.stats[`own_${e}`] ?? 0) > 0;
    }
    done(e) {
      return this.ctx.state.data.completedMissions.includes(e);
    }
    start() {
      let e = this.ctx.plan;
      for (let t of this.defs) {
        let n = t.x,
          r = t.z,
          i = 1 / 0;
        for (let a of e.roads) {
          if (!a.name.zh.includes(t.road)) continue;
          let e = a.axis === `x` ? t.x : t.z;
          if (e < a.from + 20 || e > a.to - 20) continue;
          let o = a.axis === `x` ? t.x : a.at,
            s = a.axis === `x` ? a.at : t.z,
            c = Math.hypot(o - t.x, s - t.z);
          c < i &&
            ((i = c),
            (n = o + (a.axis === `z` ? a.halfTotal - 1.2 : 0)),
            (r = s + (a.axis === `x` ? a.halfTotal - 1.2 : 0)));
        }
        let a = Ri(e, n, r),
          o = a.road,
          s = t.stock.map((e, n) => {
            let r =
                (n - (t.stock.length - 1) / 2) *
                (e.kind === `scooter` ||
                e.kind === `motorcycle` ||
                e.kind === `superbike`
                  ? 1.6
                  : 6.2),
              i =
                e.kind === `scooter` ||
                e.kind === `motorcycle` ||
                e.kind === `superbike`,
              s = a.x,
              c = a.z,
              l = 0,
              u = a.x,
              d = a.z;
            if (o) {
              let e =
                  o.axis === `x`
                    ? Math.sign(a.z - o.at) || 1
                    : Math.sign(a.x - o.at) || 1,
                t = i ? o.halfWidth + 1 : o.halfWidth - 1.3,
                n = o.halfWidth + 2.6;
              o.axis === `x`
                ? ((s = a.x + r),
                  (c = o.at + e * t),
                  (l = i
                    ? e > 0
                      ? 0
                      : Math.PI
                    : e > 0
                      ? Math.PI / 2
                      : -Math.PI / 2),
                  (u = s),
                  (d = o.at + e * n))
                : ((c = a.z + r),
                  (s = o.at + e * t),
                  (l = i
                    ? e > 0
                      ? -Math.PI / 2
                      : Math.PI / 2
                    : e > 0
                      ? 0
                      : Math.PI),
                  (d = c),
                  (u = o.at + e * n));
            }
            return {
              stock: e,
              x: s,
              z: c,
              heading: l,
              px: u,
              pz: d,
              v: null,
              prompt: null,
              promptKey: ``,
            };
          });
        (this.live.push({
          def: t,
          x: a.x,
          z: a.z,
          road: o,
          slots: s,
          active: !1,
          sign: null,
        }),
          this.hud.addBlip(`dealer:${t.id}`, {
            x: a.x,
            z: a.z,
            icon: `shop`,
            color: `#ffb03d`,
            label: t.name,
            mapOnly: !0,
          }));
      }
    }
    update(e, t) {
      let n = this.ctx,
        r = n.player.position;
      if (((this.acc += e), this.acc >= 0.2)) {
        ((this.acc = 0), (this.near = null), (this.nearDealer = null));
        for (let e of this.live) {
          let t = Math.hypot(r.x - e.x, r.z - e.z);
          if (
            (!e.active && t < qA
              ? this.open(e)
              : e.active && t > 110 && this.close(e),
            !e.active || n.player.mode !== `foot`)
          )
            continue;
          let i = 2.6;
          for (let t of e.slots) {
            if (!t.v || t.v.destroyed) continue;
            let n = Math.hypot(r.x - t.px, r.z - t.pz);
            n < i && ((i = n), (this.near = t), (this.nearDealer = e));
          }
        }
      }
      let a = this.near,
        o = this.nearDealer;
      if (!a || !o || t || n.player.mode !== `foot`) return;
      let s = this.owned(a.stock.kind),
        c =
          a.stock.requires && !this.done(a.stock.requires)
            ? a.stock.requires
            : null,
        l = `${+!!s}${+!!c}`;
      if (l !== a.promptKey || !a.prompt) {
        a.promptKey = l;
        let e = a.stock.name;
        a.prompt = c
          ? {
              zh: i.on
                ? i.t(
                    `「${e.zh}」${G(a.stock.price)} — 完成特定任務後開放購買`,
                    `「${i.jz(e.zh)}」${G(a.stock.price)} — 特定のミッションをクリアすると購入可能`,
                  )
                : `「${e.zh}」${G(a.stock.price)} — 完成特定任務後開放購買`,
              en: `${e.en} ${G(a.stock.price)} — unlocks after a side mission`,
            }
          : s
            ? {
                zh: i.on
                  ? i.t(
                      `按 {interact} 牽走你的「${e.zh}」（免費）`,
                      `{interact} であなたの「${i.jz(e.zh)}」を引き取る（無料）`,
                    )
                  : `按 {interact} 牽走你的「${e.zh}」（免費）`,
                en: `Press {interact}: take your ${e.en} (free)`,
              }
            : {
                zh: i.on
                  ? i.t(
                      `按 {interact} 在${o.def.name.zh}買下「${e.zh}」（${G(a.stock.price)}）`,
                      `{interact} で${i.jz(o.def.name.zh)}の「${i.jz(e.zh)}」を購入（${G(a.stock.price)}）`,
                    )
                  : `按 {interact} 在${o.def.name.zh}買下「${e.zh}」（${G(a.stock.price)}）`,
                en: `Press {interact}: buy the ${e.en} at ${o.def.name.en} (${G(a.stock.price)})`,
              };
      }
      this.hud.promptIfFree(a.prompt) &&
        !c &&
        n.input.pressed(`interact`) &&
        this.buy(o, a, s);
    }
    buy(e, t, n) {
      let r = this.ctx,
        a = t.v;
      if (a) {
        if (n) {
          this.hud.notify(
            {
              zh: i.on
                ? i.t(
                    `${e.def.name.zh}：你的「${t.stock.name.zh}」保養好了，騎走吧！`,
                    `${i.jz(e.def.name.zh)}：「${i.jz(t.stock.name.zh)}」の整備が終わったよ、乗っていきな！`,
                  )
                : `${e.def.name.zh}：你的「${t.stock.name.zh}」保養好了，騎走吧！`,
              en: `${e.def.name.en}: your ${t.stock.name.en} is serviced — ride on!`,
            },
            `good`,
            3,
          );
          try {
            r.audio.play(`coin`, { ui: !0 });
          } catch {}
        } else {
          if (r.state.money < t.stock.price) {
            this.hud.notify(
              {
                zh: i.on
                  ? i.t(
                      `錢不夠！還差 ${G(t.stock.price - r.state.money)}`,
                      `お金が足りない！あと ${G(t.stock.price - r.state.money)}`,
                    )
                  : `錢不夠！還差 ${G(t.stock.price - r.state.money)}`,
                en: `Not enough cash — ${G(t.stock.price - r.state.money)} short`,
              },
              `bad`,
              3,
            );
            try {
              r.audio.play(`empty_click`, { ui: !0 });
            } catch {}
            return;
          }
          (r.state.addMoney(-t.stock.price, `dealer:${t.stock.kind}`),
            r.state.stat(`own_${t.stock.kind}`),
            r.state.stat(`vehiclesBought`));
          try {
            r.audio.play(`mission_pass`, { ui: !0, volume: 0.6 });
          } catch {}
          this.hud.bigMessage(
            { zh: `成交！`, en: `SOLD!` },
            {
              zh: i.on
                ? i.t(
                    `${t.stock.name.zh} 是你的了 · 之後來${e.def.name.zh}免費牽車`,
                    `${i.jz(t.stock.name.zh)}を手に入れた · 次からは${i.jz(e.def.name.zh)}で無料で引き取れる`,
                  )
                : `${t.stock.name.zh} 是你的了 · 之後來${e.def.name.zh}免費牽車`,
              en: `The ${t.stock.name.en} is yours · pick it up here any time, free`,
            },
            { color: `#ffb03d`, duration: 3.5 },
          );
        }
        ((a.locked = !1), (t.v = null), (this.near = null));
      }
    }
    open(e) {
      e.active = !0;
      let t = this.ctx;
      for (let n of e.slots)
        if (!n.v || n.v.destroyed)
          try {
            n.v = t.vehicles.spawn(n.stock.kind, n.x, n.z, n.heading, {
              color: n.stock.color,
              locked: !0,
              driver: `none`,
              rider: !1,
            });
          } catch {
            n.v = null;
          }
      e.sign = this.markers.add({
        x: e.x,
        z: e.z,
        y: t.plan.groundHeight(e.x, e.z) + 0.02,
        color: 16756797,
        style: `target`,
        icon: `shop`,
        iconY: 3.2,
        iconSize: 1.2,
      });
    }
    close(e) {
      e.active = !1;
      let t = (() => {
        try {
          return this.ctx.vehicles.playerVehicle;
        } catch {
          return null;
        }
      })();
      for (let n of e.slots) {
        if (n.v && n.v !== t && n.v.locked)
          try {
            this.ctx.vehicles.despawn(n.v);
          } catch {}
        n.v = null;
      }
      (e.sign?.remove(), (e.sign = null));
    }
    debug() {
      return this.live.map((e) => ({
        id: e.def.id,
        x: Math.round(e.x),
        z: Math.round(e.z),
        active: e.active,
        stock: e.slots.map((e) => ({
          kind: e.stock.kind,
          price: e.stock.price,
          owned: this.owned(e.stock.kind),
          shown: !!e.v,
        })),
      }));
    }
  },
  YA = (e, t) => {
    let [n, r] = t;
    return n <= r ? e >= n && e < r : e >= n || e < r;
  };
