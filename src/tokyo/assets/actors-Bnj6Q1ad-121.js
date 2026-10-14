// tokyo/assets/actors-Bnj6Q1ad 121 — math
// Lines 57233-57796 of readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js (statement-aligned).
var _A = class {
    ctx;
    hud;
    markers;
    props;
    daruma;
    finds = [];
    bursts = [];
    visAcc = 0;
    t = 0;
    galleryAt = null;
    constructor(e, t, n, r, i = () => []) {
      ((this.ctx = e),
        (this.hud = t),
        (this.markers = n),
        (this.props = r),
        (this.daruma = i));
    }
    get found() {
      return this.finds.filter((e) => e.found).length;
    }
    get total() {
      return hA.length;
    }
    start() {
      let e = gA(this.ctx),
        t = new Pe(31647);
      hA.forEach((n, r) => {
        let i = this.resolve(n),
          a = {
            def: n,
            x: i.x,
            y: i.y,
            z: i.z,
            found: e.has(`find-${n.id}`),
            prop: null,
            halo: null,
            near: !1,
            phase: r * 1.13,
            chime: t.range(0, 3),
            checked: 0,
          };
        (a.found ||
          ((a.prop = this.props.add(n.prop, a.x, a.y + 0.25, a.z, a.phase, mA)),
          (a.halo = this.markers.add({
            x: a.x,
            z: a.z,
            y: a.y,
            color: 7330047,
            style: `glow`,
            iconY: 0.55,
            iconSize: 1.7,
            intensity: 0.7,
          }))),
          this.finds.push(a));
      });
    }
    clearOfDaruma(e, t) {
      for (let n of this.daruma())
        if ((n.x - e) ** 2 + (n.z - t) ** 2 < 36) return !1;
      return !0;
    }
    free(e, t) {
      let n = this.ctx.plan.surfaceAt(e, t);
      return n === `water` ||
        n === `crosswalk` ||
        (n === `road` && !this.pedestrianOnly(e, t)) ||
        !this.clearOfDaruma(e, t)
        ? !1
        : !this.ctx.statics.overlapsRect(
            e - 0.45,
            t - 0.45,
            e + 0.45,
            t + 0.45,
            0.6,
          );
    }
    pedestrianOnly(e, t) {
      let n = 0;
      for (let r of this.ctx.plan.roadsNear(e, t)) {
        let i = r.axis === `x` ? e : t;
        if (
          !(i < r.from - 0.5 || i > r.to + 0.5) &&
          !(Math.abs((r.axis === `x` ? t : e) - r.at) > r.halfWidth + 0.5)
        ) {
          if (!r.pedestrian) return !1;
          n++;
        }
      }
      return n > 0;
    }
    spiral(e, t) {
      if (this.free(e, t)) return { x: e, z: t };
      for (let n = 1.5; n <= 14; n += 1.5)
        for (let r = 0; r < 12; r++) {
          let i = (r / 12) * Math.PI * 2,
            a = e + Math.cos(i) * n,
            o = t + Math.sin(i) * n;
          if (this.free(a, o)) return { x: a, z: o };
        }
      return null;
    }
    resolve(e) {
      let t = this.ctx.plan,
        n = (e, n) => ({ x: e, y: t.groundHeight(e, n), z: n });
      if (e.mode === `free`) {
        let t = this.spiral(e.x, e.z);
        if (t) return n(t.x, t.z);
      }
      let r = Ri(t, e.x, e.z),
        i = r.x,
        a = r.z;
      if (r.road) {
        let e = r.road,
          t = e.halfTotal - 0.75;
        e.axis === `x`
          ? (a = e.at + Math.sign(r.z - e.at) * t)
          : (i = e.at + Math.sign(r.x - e.at) * t);
      }
      let o = this.spiral(i, a) ?? this.spiral(r.x, r.z) ?? { x: r.x, z: r.z };
      return n(o.x, o.z);
    }
    recheck(e) {
      if ((e.checked++, this.free(e.x, e.z))) return;
      let t = this.resolve(e.def);
      ((e.x = t.x),
        (e.y = t.y),
        (e.z = t.z),
        e.prop?.set(e.x, e.y + 0.25, e.z, e.phase, mA),
        e.halo?.setPos(e.x, e.y, e.z));
    }
    update(e) {
      if (((this.t += e), this.galleryAt)) {
        let e = this.galleryAt;
        this.finds.forEach((t, n) =>
          t.prop?.set(e.x + n * 1.2, e.y, e.z, 0, mA),
        );
        return;
      }
      let t = this.ctx.player.position;
      this.visAcc += e;
      let n = this.visAcc >= 0.25;
      n && (this.visAcc = 0);
      for (let e of this.finds) {
        if (e.found) continue;
        if (n) {
          let n = Math.hypot(e.x - t.x, e.z - t.z);
          ((e.near = n < 140),
            ((e.checked === 0 && n < 220) || (e.checked === 1 && n < 60)) &&
              this.recheck(e));
          let r = n < (this.ctx.quality.level === `low` ? 150 : 230);
          if (
            (e.prop?.setVisible(r),
            e.halo?.setVisible(r),
            n < 22 && ((e.chime -= 0.25), e.chime <= 0))
          ) {
            e.chime = 3.6;
            try {
              this.ctx.audio.play(`coin`, {
                x: e.x,
                y: e.y + 0.5,
                z: e.z,
                volume: 0.18,
                rate: 1.15,
              });
            } catch {}
          }
        }
        if (!e.near) continue;
        e.prop?.set(
          e.x,
          e.y + 0.28 + Math.sin(this.t * 2 + e.phase) * 0.06,
          e.z,
          this.t * 1.1 + e.phase,
          mA,
        );
        let r = t.x - e.x,
          i = t.z - e.z,
          a = t.y - e.y,
          o = this.ctx.player.mode === `vehicle` ? 2.4 : 1.35;
        r * r + i * i < o * o && Math.abs(a) < 2.5 && this.collect(e);
      }
      for (let t = this.bursts.length - 1; t >= 0; t--) {
        let n = this.bursts[t];
        n.t += e;
        let r = n.t / 0.8;
        r >= 1
          ? (n.h.remove(), this.bursts.splice(t, 1))
          : n.h.setIntensity((1 - r) * 1.5);
      }
    }
    collect(e) {
      let t = this.ctx;
      ((e.found = !0),
        e.prop?.remove(),
        e.halo?.remove(),
        (e.prop = e.halo = null));
      let n = t.state.data,
        r = gA(t);
      (r.add(`find-${e.def.id}`),
        (n.bagFinds = [...r]),
        t.state.scheduleSave(0.5),
        t.state.stat(`bagFinds`),
        this.bursts.push({
          h: this.markers.add({
            x: e.x,
            z: e.z,
            y: e.y,
            color: 10217471,
            style: `glow`,
            iconY: 0.6,
            iconSize: 3.2,
            intensity: 1.5,
          }),
          t: 0,
        }));
      try {
        t.audio.play(`pickup`, { ui: !0, volume: 0.8 });
      } catch {}
      pn(t, e.def.item, 1, { quiet: !0 });
      let a = Ot[e.def.item]?.name ?? { zh: e.def.item, en: e.def.item };
      this.hud.notify(
        {
          zh: i.on
            ? i.t(
                `🎒 在${e.def.zh}找到「${a.zh}」！放進背包`,
                `🎒 ${i.jz(e.def.zh)}で「${i.jz(a.zh)}」を見つけた！バッグに入れた`,
              )
            : `🎒 在${e.def.zh}找到「${a.zh}」！放進背包`,
          en: `🎒 Found ${a.en} at ${e.def.en} — in your bag`,
        },
        `good`,
        4,
      );
    }
    gallery(e, t = 0) {
      this.galleryAt =
        e === null ? null : { x: e, y: this.ctx.plan.groundHeight(e, t), z: t };
      for (let t of this.finds)
        (t.halo?.setVisible(e === null),
          t.prop?.setVisible(!0),
          e === null && t.prop?.set(t.x, t.y + 0.25, t.z, t.phase, mA));
      return this.finds.filter((e) => !e.found).length;
    }
    remaining() {
      return this.finds
        .filter((e) => !e.found)
        .map((e) => ({
          id: e.def.id,
          item: e.def.item,
          x: +e.x.toFixed(1),
          y: +e.y.toFixed(2),
          z: +e.z.toFixed(1),
        }));
    }
  },
  vA = { cash: `cash`, armor: `vest`, pistol: `pistol`, bat: `bat` },
  yA = { cash: 6160266, armor: 5086719, pistol: 16734794, bat: 16752704 },
  bA = { cash: 1.8, armor: 1.1, pistol: 2.2, bat: 1 },
  xA = [
    [`armor`, -600, 600],
    [`armor`, 300, -700],
    [`armor`, -820, -500],
    [`armor`, 520, 380],
    [`pistol`, -860, 480],
    [`pistol`, 860, -300],
    [`pistol`, -250, -900],
    [`bat`, -350, 420],
    [`bat`, 100, -600],
    [`bat`, 600, 40],
    [`bat`, -700, -620],
  ],
  SA = { zh: `撿到球棒 — 台灣之光！`, en: `Baseball bat — go Taiwan!` },
  CA = 240,
  wA = 16,
  TA = 300,
  EA = class {
    ctx;
    hud;
    markers;
    props;
    live = [];
    spots = [];
    t = 0;
    dropped = new Map();
    recent = [];
    c;
    cashScale = 1;
    constructor(e, t, n, r, i) {
      ((this.ctx = e),
        (this.hud = t),
        (this.markers = n),
        (this.props = r),
        (this.c = i ?? { spots: xA, batLine: SA }));
    }
    start() {
      let e = this.ctx.plan;
      try {
        this.cashScale =
          nt.TWD.unitsPer / nt[this.ctx.region.currency].unitsPer;
      } catch {}
      for (let [t, n, r] of this.c.spots) {
        let i = Ri(e, n, r),
          a = i.x,
          o = i.z;
        if (i.road) {
          let e = i.road,
            t = e.halfTotal - 0.8;
          (e.axis === `x`
            ? (o = e.at + Math.sign(i.z - e.at) * t)
            : (a = e.at + Math.sign(i.x - e.at) * t),
            this.ctx.statics.overlapsRect(
              a - 0.4,
              o - 0.4,
              a + 0.4,
              o + 0.4,
              0.6,
            ) && ((a = i.x), (o = i.z)));
        }
        let s = { type: t, ax: n, az: r, x: a, z: o, respawn: 0, pickup: null };
        (this.spots.push(s), (s.pickup = this.spawn(t, a, o, 0, 1 / 0, s)));
      }
      this.ctx.events.on(`ped:hit`, (e) => {
        let t = e.cash;
        t !== !1 &&
          this.onPedHit(e.pos.x, e.pos.z, e.killed, e.byPlayer, t === !0);
      });
    }
    onPedHit(e, t, n, r, i = !1) {
      if (!r) return;
      let a = this.ctx,
        o = this.t,
        s = null;
      try {
        s = a.peds?.nearest?.(e, t, 1.2) ?? null;
      } catch {}
      if (s) {
        let e = this.dropped.get(s);
        if (e !== void 0 && o - e < TA) return;
        let t = n;
        try {
          let e = a.peds.bodyInfo?.(s);
          e && (t = t || e.down || !e.alive);
        } catch {}
        if (!t && !i) return;
        if ((this.dropped.set(s, o), this.dropped.size > 64))
          for (let [e, t] of this.dropped) o - t > TA && this.dropped.delete(e);
      } else if (!n && !i) return;
      for (let n of this.recent)
        if (o - n.t < 60 && (n.x - e) * (n.x - e) + (n.z - t) * (n.z - t) < 9)
          return;
      (this.recent.push({ x: e, z: t, t: o }),
        this.recent.length > 24 && this.recent.shift());
      let c =
          (n
            ? 40 + Math.floor(Math.random() * 110)
            : 15 + Math.floor(Math.random() * 70)) * this.cashScale,
        l = e,
        u = t,
        d = Math.random() * Math.PI * 2;
      for (let n = 0; n < 8; n++) {
        let r = d + (n * Math.PI) / 4,
          i = 1.6 + Math.random() * 0.6,
          o = e + Math.cos(r) * i,
          s = t + Math.sin(r) * i;
        if (!a.statics.overlapsRect(o - 0.3, s - 0.3, o + 0.3, s + 0.3, 0.5)) {
          ((l = o), (u = s));
          break;
        }
      }
      this.dropCash(l, u, c, 0.9);
    }
    dropCash(e, t, n, r = 0.6) {
      let i = 0;
      for (let e of this.live) e.type === `cash` && i++;
      if (i >= wA) {
        let e = this.live.find((e) => e.type === `cash`);
        e && this.despawn(e);
      }
      let a = this.spawn(`cash`, e, t, n, 45, null);
      a.delay = r;
    }
    spawn(e, t, n, r, i, a) {
      let o = this.ctx.plan.groundHeight(t, n),
        s = {
          type: e,
          x: t,
          y: o,
          z: n,
          amount: r,
          life: i,
          spot: a,
          phase: Math.random() * 6,
          delay: 0,
          prop: this.props.add(vA[e], t, o + 0.4, n, 0, bA[e]),
          ring: this.markers.add({
            x: t,
            z: n,
            y: o + 0.01,
            color: yA[e],
            style: `pickup`,
            radius: 0.7,
            iconY: 0.55,
            iconSize: 1.4,
            intensity: 0.9,
          }),
        };
      return (this.live.push(s), s);
    }
    despawn(e) {
      (e.prop?.remove(), e.ring?.remove(), (e.prop = e.ring = null));
      let t = this.live.indexOf(e);
      (t >= 0 && this.live.splice(t, 1),
        e.spot && ((e.spot.pickup = null), (e.spot.respawn = CA)));
    }
    update(e) {
      this.t += e;
      let t = this.ctx.player,
        n = t.position,
        r = t.mode === `vehicle`;
      for (let i = this.live.length - 1; i >= 0; i--) {
        let a = this.live[i];
        if (a.life !== 1 / 0 && ((a.life -= e), a.life <= 0)) {
          this.despawn(a);
          continue;
        }
        let o = n.x - a.x,
          s = n.z - a.z,
          c = o * o + s * s;
        if (c > 19600) continue;
        let l = a.life < 5 && Math.sin(this.t * 18) < 0;
        a.prop?.setVisible(!l);
        let u = a.type === `bat` ? 0.5 : (a.type, 0);
        if (
          (a.prop?.set(
            a.x,
            a.y + 0.38 + Math.sin(this.t * 2.4 + a.phase) * 0.08,
            a.z,
            this.t * 1.6 + a.phase,
            bA[a.type],
            0,
            u,
          ),
          a.delay > 0)
        ) {
          a.delay -= e;
          continue;
        }
        let d = r ? 2.6 : 1.3;
        c < d * d &&
          Math.abs(n.y - a.y) < 2.5 &&
          t.mode !== `dead` &&
          this.collect(a);
      }
      for (let t of this.spots)
        t.pickup ||
          t.respawn <= 0 ||
          ((t.respawn -= e),
          t.respawn <= 0 &&
            (t.pickup = this.spawn(t.type, t.x, t.z, 0, 1 / 0, t)));
    }
    collect(e) {
      let t = this.ctx,
        n = t.player,
        r = (e) => {
          try {
            t.audio.play(e, { ui: !0 });
          } catch {}
        };
      switch (e.type) {
        case `cash`:
          (t.state.addMoney(e.amount, `pickup`),
            r(`money`),
            this.hud.notify(
              {
                zh: i.on
                  ? i.t(`撿到 ${G(e.amount)}`, `${G(e.amount)} を拾った`)
                  : `撿到 ${G(e.amount)}`,
                en: `Picked up ${G(e.amount)}`,
              },
              `good`,
              2,
            ));
          break;
        case `armor`:
          if ((n.armor ?? 0) >= 100) return;
          ((n.armor = 100),
            r(`pickup`),
            this.hud.notify(
              { zh: `防彈背心 +100 護甲`, en: `Body armor +100` },
              `good`,
              3,
            ));
          break;
        case `pistol`:
          try {
            n.giveWeapon(`pistol`, 36);
          } catch {}
          (r(`reload`),
            this.hud.notify(
              { zh: `撿到手槍（36 發）`, en: `Pistol (36 rounds)` },
              `good`,
              3,
            ));
          break;
        case `bat`:
          try {
            n.giveWeapon(`bat`, 1);
          } catch {}
          (r(`pickup`), this.hud.notify(this.c.batLine, `good`, 3));
      }
      (t.state.stat(`pickups`), this.despawn(e));
    }
    debug() {
      return this.live.map((e) => ({
        type: e.type,
        x: +e.x.toFixed(1),
        z: +e.z.toFixed(1),
        amount: e.amount,
      }));
    }
  },
  DA = {
    convenience: { name: { zh: `茶葉蛋`, en: `tea egg` }, price: 13, heal: 25 },
    bubbletea: {
      name: { zh: `珍珠奶茶`, en: `bubble milk tea` },
      price: 55,
      heal: 15,
    },
    breakfast: {
      name: { zh: `蛋餅加豆漿`, en: `egg crepe & soy milk` },
      price: 45,
      heal: 35,
      hours: [5, 13],
    },
    pharmacy: {
      name: { zh: `急救包`, en: `first-aid kit` },
      price: 250,
      heal: 1e3,
    },
    lottery: { name: { zh: `刮刮樂`, en: `scratch card` }, price: 100 },
    claw: { name: { zh: `夾一次娃娃`, en: `one claw-machine try` }, price: 10 },
    betelnut: {
      name: { zh: `提神飲料`, en: `energy drink` },
      price: 35,
      heal: 10,
    },
    shrine: {
      name: { zh: `拜土地公`, en: `pray to the Earth God` },
      price: 20,
    },
  },
  OA = {
    convenience: { zh: `超商`, en: `the convenience store` },
    bubbletea: { zh: `手搖飲店`, en: `the tea shop` },
    breakfast: { zh: `早餐店`, en: `the breakfast shop` },
    pharmacy: { zh: `藥局`, en: `the pharmacy` },
    lottery: { zh: `彩券行`, en: `the lottery shop` },
    claw: { zh: `夾娃娃機店`, en: `the claw-machine arcade` },
    betelnut: { zh: `檳榔攤`, en: `the betel-nut stand` },
    shrine: { zh: `土地公廟`, en: `the Earth God shrine` },
  },
  kA = new Map(),
  AA;
