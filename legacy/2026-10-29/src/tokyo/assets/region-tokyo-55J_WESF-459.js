// tokyo/assets/region-tokyo-55J_WESF 459 — math
// Lines 165682-166130 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var b5 = [
    { x: 353.1, z: 380 },
    { x: 353.1, z: 430 },
    { x: 353.1, z: 494 },
    { x: 369, z: 499 },
    { x: 385, z: 504 },
    { x: 385, z: 540 },
    { x: 385, z: 556 },
  ],
  x5 = { x: 336, z: 372 },
  eBe = _3(`tokyo:s4_tsukiji`, {
    description: N(
      `勇樹傳來訊息：小晴天一亮就會被市場的廂型車移走。市場的巷子太窄，車子進不去——騎菜籃車追。`,
      `Yuki texts: Hsiao-Ching is being moved at dawn in a market van. The lanes are too narrow for a car — chase it on a shopping bike.`,
    ),
    glyph: `築`,
    noPolice: !0,
    start: () => ({ x: x5.x, z: x5.z, heading: Math.PI }),
    async run(e) {
      let t = e.ctx,
        n = I4(`tokyo:shimbashi:tsukiji-gate`, x5.x, x5.z, -Math.PI / 4),
        r = await J4(e);
      await Y4(e, { window: [4.5, 7], at: n });
      for (let e of b5) L4(t, e.x, e.z);
      let i = Z4(t),
        a = r3(t),
        o = P4(t, x5.x + 2.2, x5.z + 1.5, 4),
        s = e.vehicle(`mamachari`, o.x, o.z, Math.PI, { seed: 0.42 });
      if (
        (r.from < 1 &&
          (await d3(e, async (e) => {
            (await e.say(
              Q.yuki,
              N(
                `（訊息）小晴姊早上五點會被市場的廂型車移走。白色的，品川車牌。對不起，我只知道這些。`,
                `(text) They are moving Hsiao-Ching at 5 in a market van. White, Shinagawa plates. Sorry, that is all I know.`,
                `（メッセージ）小晴さん、朝五時に市場のバンで移されます。白いバン、品川ナンバー。すみません、これしか分かりません。`,
              ),
            ),
              await e.say(
                i,
                N(
                  `築地……這個時間，巷子裡全是推車和人。開車進不去。`,
                  `Tsukiji… at this hour the lanes are all carts and people. No car gets through.`,
                  `築地……この時間、路地は台車と人だらけだ。車じゃ入れない。`,
                ),
                `me`,
              ),
              await e.say(
                Q.passer,
                N(
                  `（玉子燒店的老闆）要騎就騎吧！記得還我喔，那是我老婆的！`,
                  `(the tamagoyaki shop owner) Take it if you need it! Bring it back though — it's my wife's!`,
                  `（玉子焼屋の主人）乗ってきな！ちゃんと返してくれよ、女房のなんだから！`,
                ),
              ));
          })),
        !s)
      ) {
        e.fail(N(`找不到腳踏車`, `No bike to borrow`));
        return;
      }
      (await e.enterVehicle({
        vehicle: s,
        kinds: [`mamachari`],
        objective: N(`騎上借來的菜籃車`, `Get on the borrowed shopping bike`),
      }),
        e.keepVehicle(s),
        r.mark(1, { x: s.body.x, z: s.body.z, heading: Math.PI }));
      let c = new rt(b5, !1),
        l = b5[0],
        u = e.vehicle(`van`, l.x, l.z, Math.PI, {
          driver: `ai`,
          locked: !0,
          color: 15921904,
          health: 1500,
          seed: 0.77,
        });
      if (!u) {
        e.fail(N(`廂型車不見了`, `The van is gone`));
        return;
      }
      u.driver = `ai`;
      let d = new wt(t, u, c, {
          maxSpeed: 5.6,
          latAccel: 3,
          decel: 6,
          avoid: !0,
          swerve: 1.2,
          canReset: !0,
          yieldToPlayer: !1,
        }),
        f = e.marker({
          x: u.body.x,
          z: u.body.z,
          y: 3.4,
          color: M4,
          style: `target`,
          iconSize: 1,
        });
      (e.blip(`van`, {
        x: u.body.x,
        z: u.body.z,
        icon: `target`,
        label: N(`白色廂型車`, `White van`),
        pulse: !0,
        clampToEdge: !0,
        color: `#ff4d5e`,
      }),
        e.objective(
          N(
            `騎車跟上白色廂型車——按鈴讓路，別撞到人`,
            `Follow the white van on the bike — ring your bell, never hit a shopper`,
          ),
        ),
        e.hud.bigMessage(
          N(`追！`, `GO!`),
          N(`築地場外市場 5:00`, `Tsukiji Outer Market, 5:00`),
          { duration: 1.8, color: `#ffc83d` },
        ));
      let p = !1;
      e.on(`ped:hit`, (e) => {
        e.byPlayer && (p = !0);
      });
      let m = c.length - 2,
        h = 0,
        g = !1,
        _ = 6,
        v = { kind: `goto`, x: u.body.x, z: u.body.z, inVehicle: !0 },
        y = [
          N(
            `（叮叮）借過一下！`,
            `(ring ring) Excuse me!`,
            `（チリンチリン）すみません、通ります！`,
          ),
          N(
            `（叮叮）不好意思！`,
            `(ring ring) Sorry!`,
            `（チリン）ごめんなさい！`,
          ),
        ];
      if (
        (e.every((t) => {
          if (g) return;
          let n = e.dist(u.body.x, u.body.z),
            r = n > 45 ? 0.7 : n > 28 ? 0.88 : 1;
          (d.update(t, r, m),
            f.setPos(u.body.x, 3.4, u.body.z),
            e.moveBlip(`van`, u.body.x, u.body.z),
            (v.x = u.body.x + 6),
            (v.z = u.body.z - 6),
            (e.waitFor = v),
            (h = n > 60 ? h + t : 0),
            (_ -= t) <= 0 &&
              e.playerSpeed > 2 &&
              ((_ = 7 + Math.random() * 4),
              $4(e, i, y[Math.floor(Math.random() * y.length)], 1.6)),
            d.s >= m - 1 && Math.abs(u.speed) < 0.3 && (g = !0));
        }),
        await e.until(() => g || h > 7 || p || !!u.destroyed),
        p)
      ) {
        e.fail(N(`你撞到了買菜的人`, `You hit a shopper`));
        return;
      }
      if (!g) {
        e.fail(N(`跟丟了廂型車`, `You lost the van`));
        return;
      }
      (f.remove(),
        e.removeBlip(`van`),
        (e.waitFor = null),
        r.mark(2, { x: u.body.x - 4, z: u.body.z - 4 }));
      try {
        e.inVehicle && t.vehicles.ejectPlayer?.();
      } catch {}
      let b = u.body.x,
        x = u.body.z,
        S = u.body.heading ?? 0,
        C = { x: Math.cos(S), z: Math.sin(S) },
        w = P4(t, b + C.x * 2.2, x + C.z * 2.2, 3),
        T = P4(t, b - C.x * 2.2, x - C.z * 2.2, 3),
        E = [
          t3(e, Q.crew, j4.crew, w.x, w.z, 0),
          t3(e, Q.crew, j4.crew2, T.x, T.z, 0),
        ];
      for (let t of E) t.faceTo(e.px, e.pz);
      await $(
        e,
        Q.crew,
        N(
          `……又是你。這裡是市場，給我滾。`,
          `…You again. This is a market. Get lost.`,
          `……またお前か。ここは市場だ、失せろ。`,
        ),
      );
      let D = H4(e, E, {
          dmg: 7,
          label: N(`ネオンリンク的人`, `NeonLink crew`),
        }),
        O = { kind: `brawl`, x: E[0].x, z: E[0].z },
        k = e.every(() => {
          for (let e = 0; e < E.length; e++)
            if (!D.isDown(e)) {
              ((O.x = E[e].x), (O.z = E[e].z));
              break;
            }
          e.waitFor = D.left ? O : null;
        });
      (e.objective(
        N(
          `打倒押車的人（只用拳頭）`,
          `Take down the men with the van (fists only)`,
        ),
      ),
        await e.until(() => D.left === 0),
        k(),
        (e.waitFor = null),
        D.stop(),
        e.objective(null));
      let A = { x: b - Math.sin(S) * 3.6, z: x + Math.cos(S) * 3.6 },
        j = P4(t, A.x, A.z, 3),
        ee = t3(e, Q.hsiaoChing, j4.hsiaoChing, j.x, j.z, S + Math.PI);
      (ee.faceTo(e.px, e.pz),
        await d3(e, async (e) => {
          (await e.say(i, N(`小晴！`, `Hsiao-Ching!`, `小晴！`), `me`),
            await e.say(
              Q.hsiaoChing,
              N(
                `${a.zh}……？真的是你？你怎麼會在東京……`,
                `${a.en}…? Is it really you? What are you doing in Tokyo…`,
                `${a.ja}……？本当に？なんで東京に……`,
              ),
              ee,
            ),
            await e.say(
              i,
              N(
                `妙子阿嬤、源さん、ミコ、轟……大家都在找妳。`,
                `Tae, Gen-san, Miko, Todoroki… everyone has been looking for you.`,
                `タエさん、源さん、ミコ、轟さん……みんなで探してたんだ。`,
              ),
              `me`,
            ),
            await e.say(
              Q.hsiaoChing,
              N(
                `他們逼我們打電話給老人家，說是孫子出了車禍……我偷拍了名單。這些人都是被騙的對象。`,
                `They made us call old people, saying their grandson had a car accident… I photographed the list. Everyone on it is a target.`,
                `（中国語で）お年寄りに電話させられたの。孫が事故に遭ったって……リストをこっそり撮った。ここに載ってる人、みんな騙される側なの。`,
              ),
              ee,
            ),
            await e.say(
              Q.hsiaoChing,
              N(
                `勇樹和其他人還在新橋的客服中心。今晚神城要把伺服器搬走。`,
                `Yuki and the others are still at the call centre in Shimbashi. Kamishiro is moving the server out tonight.`,
                `（中国語で）勇樹くんたちはまだ新橋のコールセンターにいる。今夜、神城がサーバーを移すって。`,
              ),
              ee,
            ));
        }),
        e.removeActor(ee),
        e.pass({
          note: N(
            `小晴平安了。名單在手上。`,
            `Hsiao-Ching is safe. The list is in your hands.`,
          ),
        }));
    },
  }),
  S5 = `walkin-capsule-kanda`,
  tBe = _3(`tokyo:s4_capsule`, {
    description: N(
      `燕來湯被盯上了。今晚睡神田的膠囊旅館——凌晨三點，有人一層一層在找你。`,
      `The sento is being watched. Tonight you sleep in a Kanda capsule hotel — and at 3 a.m. someone is searching it floor by floor.`,
    ),
    glyph: `箱`,
    noPolice: !0,
    start: () => {
      let e = P3(S5);
      return { x: e.x, z: e.z, heading: e.facing };
    },
    async run(e) {
      let t = e.ctx,
        n = await J4(e);
      await Y4(e, { window: [2, 4.5], at: P3(S5) });
      let r = Z4(t);
      await B3(e, S5, `capsule`, { guests: !1 });
      let i = H3(S5, `capsule`),
        a = [`row-a`, `row-b`, `row-c`, `back`].map((e) => H3(S5, e)),
        o = H3(S5, `door`);
      if (n.from < 1) {
        e.lockPlayer(!0);
        let r = new j(i.x, i.y + 0.55, i.z + 0.15),
          s = new j(a[1].x, i.y + 1.1, a[1].z);
        try {
          t.cameraRig.override(r, s);
        } catch {}
        (e.onCleanup(() => t.cameraRig.override(null)),
          await $(
            e,
            null,
            N(
              `（凌晨三點。走廊的燈亮了，有人在一個一個拉開膠囊的簾子。）`,
              `(3 a.m. The corridor lights come on. Someone is pulling capsule blinds open, one by one.)`,
              `（午前三時。廊下の明かりがつき、誰かがカプセルのブラインドを一つずつ開けている）`,
            ),
            3.6,
          ));
        let c = [];
        for (let t = 0; t < 2; t++) {
          let n = t3(e, Q.crew, t ? j4.crew2 : j4.crew, o.x, o.z, o.heading);
          ((n.y = o.y), c.push(n));
        }
        let l = nBe(e);
        for (let [e, t] of c.entries()) t.moveTo(a[2 + e].x, a[2 + e].z, 1.1);
        let u = 0;
        if (
          ($4(
            e,
            Q.crew,
            N(
              `（小聲）臺灣來的那個，應該在這層……`,
              `(low) The one from Taiwan should be on this floor…`,
              `（小声）台湾から来たやつ、この階にいるはずだ……`,
            ),
            3,
          ),
          await e.until((e) => {
            u += e;
            let t = c.some((e) => e.distTo(i.x, i.z) < 2.4);
            return (l.tick(e, t), u > 18 || l.caught);
          }),
          l.end(),
          l.caught)
        ) {
          e.fail(N(`被發現了`, `They found you`));
          return;
        }
        (t.cameraRig.override(null), e.lockPlayer(!1));
        for (let t of c) e.removeActor(t);
        n.mark(1, { x: i.x, z: i.z, heading: i.heading });
      }
      let s = [];
      for (let t = 0; t < 2; t++) {
        let n = a[2 + t],
          r = t3(e, Q.crew, t ? j4.crew2 : j4.crew, n.x, n.z, Math.PI / 2);
        ((r.y = n.y), s.push(r));
      }
      e.objective(
        N(
          `趁他們背對你的時候，沿著走道溜到門口（別被看到）`,
          `Slip along the aisle to the door while their backs are turned (don't be seen)`,
        ),
      );
      let c = 0,
        l = 4,
        u = 0,
        d = !1;
      e.progress(N(`被發現`, `Spotted`), 0);
      let f = { kind: `goto`, x: o.x, z: o.z, onFoot: !0 };
      if (
        (e.every((t) => {
          if (d) return;
          ((l -= t) <= 0 && u <= 0 && ((u = 1.6), (l = 4 + Math.random() * 3)),
            u > 0 && (u -= t));
          let n = !1;
          for (let t of s)
            (t.faceTo(u > 0 ? e.px : t.x + 5, u > 0 ? e.pz : t.z),
              u > 0 && t.distTo(e.px, e.pz) < 9 && (n = !0));
          (n && e.playerSpeed > 0.4
            ? (c += t * 0.9)
            : (c = Math.max(0, c - t * 0.3)),
            e.progress(N(`被發現`, `Spotted`), Math.min(1, c)),
            (e.waitFor = f));
        }),
        await e.until(() => c >= 1 || e.dist(o.x, o.z) < 1.4),
        e.progress(null),
        c >= 1)
      ) {
        e.fail(N(`被看到了`, `They saw you`));
        return;
      }
      ((d = !0), (e.waitFor = null));
      let p = P3(S5);
      await B4(
        e,
        p.x + Math.sin(p.facing) * 1.5,
        p.z - Math.cos(p.facing) * 1.5,
        p.facing,
        6,
      );
      let m = {
        x: p.x + Math.sin(p.facing) * 4.5,
        z: p.z - Math.cos(p.facing) * 4.5,
      };
      e.vehicle(
        `sedan`,
        m.x + Math.cos(p.facing) * 2,
        m.z + Math.sin(p.facing) * 2,
        p.facing + Math.PI / 2,
        { color: 723725, seed: 0.12, locked: !0 },
      );
      let h = P4(t, m.x, m.z, 3),
        g = t3(e, Q.kuroda, j4.kuroda, h.x, h.z, 0);
      (g.faceTo(e.px, e.pz),
        await d3(e, async (e) => {
          (await e.say(
            Q.kuroda,
            N(
              `……別緊張。我不是神城的人。`,
              `…Relax. I am not one of Kamishiro’s.`,
              `……構えるな。神城の身内じゃねえ。`,
            ),
            g,
          ),
            await e.say(
              Q.kuroda,
              N(
                `鬼頭組的黑田。老大想見你。`,
                `Kuroda, of the Kito family. The old man wants to meet you.`,
                `鬼頭組の黒田だ。親分があんたに会いたいそうだ。`,
              ),
              g,
            ),
            await e.say(
              r,
              N(
                `……黑道找我做什麼？`,
                `…What does a yakuza family want with me?`,
                `……ヤクザが俺に何の用だ。`,
              ),
              `me`,
            ),
            await e.say(
              Q.kuroda,
              N(
                `早上八點半，御徒町的「白樺」。老大討厭遲到的人。`,
                `Half past eight, the kissa Shirakaba in Okachimachi. The old man hates people who are late.`,
                `朝八時半、御徒町の「白樺」。親分は遅刻が嫌いだ。`,
              ),
              g,
            ));
        }),
        e.pass({ note: N(`鬼頭組找上門了`, `The Kito family came calling`) }));
    },
  });
