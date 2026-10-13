// tokyo__assets__region-tokyo-BcM3fReU 289 — math
// Lines 114257-115407 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var K5 = C2(`tokyo:s5_shinobazu`, {
    description: F(
      `神城衝出上野站，要去搭京成 Skyliner。在公園那頭截住他——不忍池上只剩一條路。`,
      `Kamishiro runs out of Ueno station for the Keisei Skyliner. Head him off by the park — on Shinobazu Pond there is only one way left.`,
    ),
    glyph: `池`,
    noPolice: !0,
    start: () => {
      let e = T0(`tokyo:ueno:koenguchi`, -153.4, -1241.5, -Math.PI / 2);
      return { x: e.x, z: e.z, heading: e.heading + Math.PI };
    },
    async run(e) {
      let t = e.ctx,
        n = T0(`tokyo:ueno:koenguchi`, -153.4, -1241.5, -Math.PI / 2),
        r = await B0(e);
      (await U0(e, { window: [15.5, 17], at: n }),
        E0(t, F5.x, F5.z),
        E0(t, L5.x, L5.z));
      let i = G0(t),
        a = Q0(t),
        o = t.params.has(`autosolve`);
      I0(e, 0.25);
      let s = null;
      if (r.from < 1) {
        let i = C0(t, n.x - 6, n.z, 3);
        ((s = X0(e, Q.kamishiro, y0.kamishiro, i.x, i.z, Math.PI)),
          await m2(e, async (e) => {
            (await e.say(
              Q.kamishiro,
              F(
                `……你也真是不死心。`,
                `…You really don’t give up.`,
                `……しつこいですね、あなたも。`,
              ),
              s,
            ),
              await e.say(
                Q.kamishiro,
                F(
                  `京成上野的 Skyliner，四十一分鐘到成田。之後就是別的國家了。`,
                  `The Skyliner from Keisei Ueno: forty-one minutes to Narita. After that, another country.`,
                  `京成上野からスカイライナーで、成田まで四十一分。その先は別の国です。`,
                ),
                s,
              ),
              await e.say(
                Q.kirishima,
                F(
                  `（無線）京成上野已經封鎖了。他會往不忍池那邊跑——別跟丟！`,
                  `(radio) Keisei Ueno is sealed. He'll make for Shinobazu — don't lose him!`,
                  `（無線）京成上野は封鎖済み。不忍池の方へ逃げるはず——見失うな！`,
                ),
              ));
          }));
        let a = V5({ x: i.x, z: i.z });
        e.objective(
          F(
            `追上神城！別讓他離開視線`,
            `Catch Kamishiro! Don't let him out of your sight`,
          ),
        );
        let o = s;
        o.collide = !1;
        let c = e.marker({
          x: o.x,
          z: o.z,
          y: o.y + 0.2,
          color: x0,
          style: `target`,
          iconSize: 0.8,
        });
        e.blip(`kami`, {
          x: o.x,
          z: o.z,
          icon: `target`,
          label: Q.kamishiro.name,
          pulse: !0,
          clampToEdge: !0,
          color: `#ff4d5e`,
        });
        let l = [
            [-196, -1176.5, () => hn.tourist],
            [-227.8, -1162, () => hn.mom],
            [-262, -1152.6, () => hn.jogger],
            [-338, -1154.2, () => hn.hipster],
            [-382, -1152.8, () => y0.officeF()],
            [-423.8, -1110, () => hn.agong],
          ].map(([n, r, i]) => {
            let a = C0(t, n, r, 2),
              o = e.actor(i(), a.x, a.z, Math.PI / 2);
            return ((o.collide = !1), { a: o, hit: !1, t: 0 });
          }),
          u = [0, 1, 2, 3].map((n) => {
            let r = -360 + (n - 1.5) * 1.3,
              i = -1153.4 + (n % 2 ? 0.5 : -0.5);
            return {
              pr: e.prop(`cone`, r, t.groundAt(r, i, 1, 0.5) + 0.06, i, 0, 1),
              x: r,
              z: i,
              hit: !1,
              vx: 0,
              vz: 0,
              t: 0,
            };
          }),
          d = 0,
          f = 0,
          p = 0,
          m = 6,
          h = 1 / 0,
          g = 0,
          _ = 0,
          v = { kind: `goto`, x: o.x, z: o.z, onFoot: !0 },
          y = [
            F(`跑得太慢了。`, `Too slow.`, `遅いですね。`),
            F(
              `你以為你是誰？`,
              `Who do you think you are?`,
              `何様のつもりですか。`,
            ),
            F(`讓開！`, `Out of the way!`, `どけ！`),
          ],
          b = [
            F(`哇！`, `Whoa!`, `わっ！`),
            F(`危險耶！`, `Watch it!`, `危ないな！`),
            F(`搞什麼！`, `What the—!`, `なんなの！`),
          ],
          x = !1,
          S = !1,
          C = 0;
        if (
          (e.every((n) => {
            if (x || S) return;
            let r = e.dist(o.x, o.z);
            if (p > 0) ((p -= n), o.stop());
            else {
              let i = a[d];
              if (!i) {
                x = !0;
                return;
              }
              o.moveTo(i.x, i.z, r < 7 ? 6.6 : r > 28 ? 4.6 : 6);
              let s = Math.hypot(o.x - i.x, o.z - i.z);
              if (s < h - 0.4) ((h = s), (g = 0));
              else if ((g += n) > 2) {
                let e = Math.min(1, 1.5 / Math.max(0.01, s));
                (o.place(o.x + (i.x - o.x) * e, o.z + (i.z - o.z) * e),
                  (g = 0));
              }
              (s < 1.4 && (d++, (h = 1 / 0), (g = 0)),
                r < 1.7 &&
                  e.onFoot &&
                  (t.input.pressed(`interact`) || t.input.pressed(`attack`)) &&
                  ((p = _ < 2 ? 1.1 : 0.8),
                  _++,
                  o.flinch(o.x - e.px, o.z - e.pz, 1),
                  e.sfx(`punch`, { volume: 0.6 }),
                  J0(
                    e,
                    Q.kamishiro,
                    _ === 1
                      ? F(`放手！`, `Let go!`, `離せ！`)
                      : _ === 2
                        ? F(`……煩死了！`, `…Get off me!`, `……しつこい！`)
                        : F(`（甩開你）`, `(he twists free)`, `（振りほどく）`),
                    1.2,
                  )));
            }
            for (let t of l) {
              if (t.hit) {
                (t.t -= n) <= 0 && t.a.anim === `fallen` && (t.a.anim = `idle`);
                continue;
              }
              Math.hypot(t.a.x - o.x, t.a.z - o.z) < 1.5 &&
                ((t.hit = !0),
                (t.t = 3),
                t.a.flinch(t.a.x - o.x, t.a.z - o.z, 1),
                (t.a.anim = `fallen`),
                (p = Math.max(p, 0.3)),
                e.sfx(`ped_scream`, { volume: 0.5 }),
                J0(e, Q.passer, b[C++ % b.length], 1.3));
            }
            for (let r of u)
              if (r.pr) {
                if (!r.hit && Math.hypot(r.x - o.x, r.z - o.z) < 1.3) {
                  ((r.hit = !0), (r.t = 0.5));
                  let t = o.heading;
                  ((r.vx = Math.sin(t) * 4 + (r.x - o.x) * 2),
                    (r.vz = -Math.cos(t) * 4 + (r.z - o.z) * 2),
                    e.sfx(`crash_light`, { volume: 0.45 }));
                }
                r.hit &&
                  r.t > 0 &&
                  ((r.t -= n),
                  (r.x += r.vx * n),
                  (r.z += r.vz * n),
                  r.pr.set(
                    r.x,
                    t.groundAt(r.x, r.z, 1, 0.5) + 0.15,
                    r.z,
                    Math.atan2(r.vx, -r.vz),
                    1,
                    Math.PI / 2,
                  ));
              }
            ((m -= n) <= 0 &&
              r < 20 &&
              ((m = 9),
              J0(e, Q.kamishiro, y[Math.floor(Math.random() * y.length)], 1.8)),
              c.setPos(o.x, o.y + 0.15, o.z),
              e.moveBlip(`kami`, o.x, o.z),
              (v.x = o.x),
              (v.z = o.z),
              (e.waitFor = v),
              (f = r > 45 ? f + n : 0),
              f > 6 && (S = !0));
          }),
          await e.until(() => x || S),
          c.remove(),
          e.removeBlip(`kami`),
          (e.waitFor = null),
          S)
        ) {
          e.fail(F(`神城跑掉了`, `Kamishiro got away`));
          return;
        }
        r.mark(1, { x: F5.x - 2, z: F5.z + 3, heading: Math.PI / 2 });
      }
      let c = e.vehicle(`swan`, N5.x, N5.z, Math.PI / 2, {
          driver: `ai`,
          locked: !0,
          seed: 0.9,
        }),
        l = e.vehicle(`swan`, P5.x, P5.z, Math.PI / 2, { seed: 0.3 });
      if (!c || !l) {
        e.fail(F(`沒有天鵝船`, `No swan boat`));
        return;
      }
      c.driver = `ai`;
      let u = s;
      ((u ||= X0(e, Q.kamishiro, y0.kamishiro, F5.x, F5.z, Math.PI / 2)),
        (u.collide = !1),
        u.moveTo(N5.x - 2.2, N5.z, 5));
      let d = 0;
      (await e.until(
        (e) => Math.hypot(u.x - (N5.x - 2.2), u.z - N5.z) < 0.6 || (d += e) > 4,
      ),
        u.stop(),
        (u.anim = `sit`));
      let f = u,
        p = !0;
      (e.every(() => {
        p && H5(f, c, -1);
      }),
        e.sfx(`splash`, { volume: 0.4 }));
      let m = [],
        h = { x: -330, z: -1110 };
      [
        [-332, mg.minZ - 3.2, y0.gen, Q.gen],
        [-329, mg.minZ - 3.6, y0.miko, Q.miko],
        [-326, mg.minZ - 3.2, y0.todoroki, Q.todoroki2],
        [-323, mg.minZ - 3.6, y0.hsiaoChing, Q.hsiaoChing],
      ].forEach(([n, r, i, a]) => {
        let o = C0(t, n, r, 3),
          s = X0(e, a, i, o.x, o.z, 0);
        (s.faceTo(h.x, h.z), (s.anim = `cheer`), m.push(s));
      });
      let g = C0(t, R5.x + 2, mg.minZ - 2.2, 3),
        _ = X0(e, Q.kirishima, y0.kirishima, g.x, g.z, Math.PI),
        v = X0(e, Q.officer, y0.officer, g.x - 2.5, g.z - 0.6, Math.PI),
        y = e.vehicle(`taxi`, -199.7, L5.z, 0, { locked: !0, seed: 0.42 });
      (L0(e, 16.72),
        await $(
          e,
          Q.kamishiro,
          F(
            `（他跳上了一艘天鵝船）`,
            `(he jumps into a swan boat)`,
            `（スワンボートに飛び乗った）`,
          ),
          2.2,
        ));
      let b = { x: mg.minX - 1.1, z: l.body.z };
      e.objective(
        F(`跳上另一艘天鵝船追！`, `Take the other swan boat — after him!`),
      );
      let x = new lt(I5, !1),
        S = new Nt(t, c, x, {
          maxSpeed: z5,
          latAccel: 1.6,
          decel: 1.6,
          avoid: !1,
          canReset: !0,
        }),
        C = 25,
        w = e.every((t) => {
          e.playerVehicle === l || (C -= t) <= 0 || S.update(t, 0.45, 26);
        });
      if (
        (await e.pressE(
          b.x,
          b.z,
          3,
          F(
            `按 {interact} 跳上天鵝船`,
            `Press {interact}: jump into the swan boat`,
          ),
          { orWhen: () => e.playerVehicle === l },
        ),
        w(),
        e.playerVehicle !== l)
      )
        try {
          t.vehicles.putPlayerIn(l);
        } catch {}
      (e.keepVehicle(l),
        r.mark(2, { x: l.body.x, z: l.body.z, heading: Math.PI / 2 }));
      let T = e.marker({
        x: c.body.x,
        z: c.body.z,
        y: 2.6,
        color: x0,
        style: `target`,
        iconSize: 0.9,
      });
      (e.blip(`kami`, {
        x: c.body.x,
        z: c.body.z,
        icon: `target`,
        label: Q.kamishiro.name,
        pulse: !0,
        clampToEdge: !0,
        color: `#ff4d5e`,
      }),
        e.blip(`land`, {
          x: L5.x,
          z: L5.z,
          icon: `target`,
          label: F(`他的車`, `His car`, `彼の車`),
          color: `#ffc83d`,
        }));
      let E = (t) =>
        e.objective(
          F(
            `撞他的天鵝船（${t}/${B5}）——在他到東岸上車之前`,
            `Ram his swan (${t}/${B5}) — before he reaches his car on the east bank`,
            `彼のスワンにぶつけろ（${t}/${B5}）——東岸の車にたどり着く前に`,
          ),
        );
      (E(0),
        e.hud.bigMessage(
          F(`不忍池`, `Shinobazu Pond`, `不忍池`),
          F(`天鵝船追逐`, `A swan-boat chase`),
          { duration: 2, color: `#ffc83d` },
        ));
      let D = S,
        O = x.length - 1.2,
        A = `flee`,
        j = 0,
        M = 0,
        ee = 0,
        te = 0,
        ne = !1,
        N = !1,
        re = 0,
        ie = 8,
        ae = 5,
        oe = { kind: `goto`, x: c.body.x, z: c.body.z, inVehicle: !0 },
        se = [
          [
            Q.miko,
            F(
              `加油——！直播中喔！`,
              `Go go go! We are live!`,
              `がんばれー！配信中だよ！`,
            ),
          ],
          [
            Q.todoroki2,
            F(`撞上去！踩！`, `Ram him! Pedal!`, `ぶつけろ！漕げ！`),
          ],
          [
            Q.gen,
            F(
              `（中文）快一點啊！`,
              `(in Mandarin) Faster!`,
              `（中国語で）早く！`,
            ),
          ],
          [Q.hsiaoChing, F(`${a.zh}——！`, `${a.en}—!`, `${a.ja}——！`)],
        ],
        ce = [
          F(
            `你瘋了嗎！這是天鵝船！`,
            `Are you insane? This is a swan boat!`,
            `正気ですか！スワンボートですよ！`,
          ),
          F(`住手……會翻的！`, `Stop — we’ll capsize!`, `やめろ……転覆する！`),
          F(
            `……好、好！我認輸了！`,
            `…Fine! Fine! I give up!`,
            `……わかった、わかった！降参だ！`,
          ),
        ];
      if (
        (e.every((n) => {
          if (ne || N) return;
          let r = l.body,
            i = c.body,
            a = i.x - r.x,
            s = i.z - r.z,
            u = Math.hypot(a, s),
            d = u > 32 ? 0.78 : u < 6 ? 1 : 0.92;
          if (
            (ee > 0 && ((ee -= n), (d = 0.2)),
            D.update(n, d, A === `yield` ? O : -1),
            T.setPos(i.x, 2.6, i.z),
            e.moveBlip(`kami`, i.x, i.z),
            (M -= n),
            A === `flee` &&
              e.playerVehicle === l &&
              u < 3.1 &&
              M <= 0 &&
              (((r.vx - i.vx) * a + (r.vz - i.vz) * s) / Math.max(0.01, u) >
                0.6 ||
                o))
          ) {
            (j++,
              (M = 1.8),
              (ee = 1.5),
              e.sfx(`crash_light`, { volume: 0.7 }),
              e.sfx(`splash`, { volume: 0.5 }));
            try {
              t.cameraRig.shake(0.35);
            } catch {}
            if (
              (J0(e, Q.kamishiro, ce[Math.min(ce.length - 1, j - 1)], 2),
              E(j),
              j >= B5)
            ) {
              A = `yield`;
              let n = new lt(G5({ x: i.x, z: i.z }, D.seg), !1);
              ((D = new Nt(t, c, n, {
                maxSpeed: 4,
                latAccel: 1.6,
                decel: 1.6,
                avoid: !1,
                canReset: !0,
              })),
                (O = n.length - 0.8),
                e.removeBlip(`land`),
                e.objective(
                  F(
                    `押著他到北岸——桐島在碼頭等`,
                    `Herd him to the north landing — Kirishima waits there`,
                    `北岸の船着き場へ追い込め——桐島が待っている`,
                  ),
                ),
                (_.anim = `point`));
            }
          }
          let f = W5(
            e,
            i.x - Math.sin(c.heading) * (A === `flee` ? 2.2 : 5),
            i.z + Math.cos(c.heading) * (A === `flee` ? 2.2 : 5),
            i.x,
            i.z,
          );
          if (
            ((oe.x = f.x),
            (oe.z = f.z),
            (e.waitFor = oe),
            (te = u > 60 ? te + n : 0),
            r.x > M5.minX - 4 &&
              r.x < M5.maxX + 4 &&
              r.z > M5.minZ - 4 &&
              r.z < M5.maxZ + 4 &&
              (re -= n) <= 0 &&
              ((re = 6),
              e.notify(
                F(`那是弁天堂——繞開它`, `That's Benten-do — go round it`),
                `info`,
                2.6,
              )),
            (ie -= n) <= 0)
          ) {
            ie = 9 + Math.random() * 4;
            let [t, n] = se[Math.floor(Math.random() * se.length)];
            J0(e, t, n, 2.2);
          }
          (A === `flee` &&
            (ae -= n) <= 0 &&
            u < 25 &&
            ((ae = 11),
            J0(
              e,
              Q.kamishiro,
              F(
                `東岸有車在等我。再見了。`,
                `A car waits for me on the east bank. Goodbye.`,
                `東岸に車を待たせてある。さようなら。`,
              ),
              2,
            )),
            A === `flee` && D.s >= O && (N = !0),
            A === `yield` && D.s >= O - 0.6 && (ne = !0));
        }),
        await e.until(() => ne || N || te > 10),
        T.remove(),
        e.removeBlip(`kami`),
        e.removeBlip(`land`),
        (e.waitFor = null),
        !ne)
      ) {
        (N &&
          ((p = !1),
          (f.anim = `idle`),
          f.place(L5.x + 4.5, L5.z, Math.PI / 2),
          f.moveTo(-201, L5.z, 6),
          y && (y.locked = !1),
          await $(
            e,
            Q.kamishiro,
            F(
              `……再見了，觀光客。`,
              `…Goodbye, tourist.`,
              `……さようなら、観光客さん。`,
            ),
            2.2,
          )),
          e.fail(
            N
              ? F(
                  `神城在東岸上了岸，坐車跑了`,
                  `Kamishiro landed on the east bank and drove off`,
                )
              : F(`神城的天鵝船跑遠了`, `Kamishiro's swan got away`),
          ));
        return;
      }
      (L0(e, 16.985), (p = !1));
      let P = C0(t, R5.x, mg.minZ - 1.6, 3);
      ((f.anim = `idle`), f.place(P.x, P.z, Math.PI));
      let le = C0(t, R5.x - 3.2, mg.minZ - 2.6, 3);
      try {
        (e.inVehicle && t.vehicles.ejectPlayer?.(),
          t.player.teleport(le.x, le.z, Math.PI / 2));
      } catch {}
      (_.place(P.x + 1.2, P.z - 1.6, Math.PI),
        v.place(P.x - 1.2, P.z - 1.8, Math.PI),
        (_.anim = `idle`),
        _.faceTo(f.x, f.z),
        v.faceTo(f.x, f.z),
        f.faceTo(_.x, _.z));
      let ue = t.groundAt(P.x, P.z, 2, 0),
        de = new k(P.x - 5, ue + 2.2, mg.minZ + 7),
        fe = new k(P.x + 0.4, ue + 1.4, P.z - 0.8);
      (await m2(
        e,
        async (e) => {
          (e.shot(de, fe),
            await e.say(
              Q.kirishima,
              F(
                `神城先生。關於詐欺與強盜未遂的嫌疑，請跟我們走一趟。`,
                `Mr. Kamishiro. On suspicion of fraud and attempted robbery — you will come with us.`,
                `神城さん。詐欺と強盗未遂の容疑で、ご同行願います。`,
              ),
              _,
            ),
            await e.say(
              Q.kamishiro,
              F(
                `……誰都做得來的簡單工作，是吧。`,
                `…Easy work anyone can do, right.`,
                `……誰でもできる簡単なお仕事、ですか。`,
              ),
              f,
            ),
            (v.anim = `idle`),
            await e.wait(1.2),
            await e.say(
              null,
              F(
                `（傍晚五點。不忍池上響起〈晚霞漸淡〉。）`,
                `(Five o’clock. 「Yuyake Koyake」 drifts over the pond.)`,
                `（午後五時。不忍池に「夕焼け小焼け」が流れる）`,
              ),
              null,
              { dur: 4.5 },
            ),
            await e.say(
              Q.kirishima,
              F(
                `……源さん說得沒錯。你們這些「觀光客」，真是不得了。`,
                `…Gen-san was right about you. Some "tourists" you are.`,
                `……源さんの言った通りだ。とんでもない「観光客」ですね。`,
              ),
              _,
            ),
            await e.say(
              i,
              F(
                `我只是來找表妹的。`,
                `I only came to find my cousin.`,
                `従妹を探しに来ただけです。`,
              ),
              `me`,
            ));
        },
        { thin: !1 },
      ),
        e.removeActor(f));
      for (let e of m) e.anim = `clap`;
      e.pass({ bonus: 3e3, note: F(`神城落網。`, `Kamishiro is in custody.`) });
    },
  }),
  q5 = 30,
  cne = {
    "jy-tokyo": F(`東京`, `Tokyo`, `東京`),
    "jy-kanda": F(`神田`, `Kanda`, `神田`),
    "jy-akihabara": F(`秋葉原`, `Akihabara`, `秋葉原`),
    "jy-okachimachi": F(`御徒町`, `Okachimachi`, `御徒町`),
    "jy-ueno": F(`上野`, `Ueno`, `上野`),
  },
  lne = C2(`tokyo:s5_cab`, {
    description: F(
      `神城搭上了往上野的山手線。你跟上車——然後，司機倒下了。`,
      `Kamishiro boards the Yamanote for Ueno. You get on after him — and then the driver collapses.`,
    ),
    glyph: `運`,
    noPolice: !0,
    start: () => {
      let e = T0(`tokyo:shimbashi:sl-front`, -158.5, 589.6, Math.PI);
      return { x: e.x, z: e.z, heading: e.heading };
    },
    async run(e) {
      let t = e.ctx;
      await U0(e, { window: [21.5, 23.8] });
      let n = G0(t),
        i = t.transit.drive?.bind(t.transit);
      if (
        (await m2(e, async (e) => {
          (await e.say(
            Q.kirishima,
            F(
              `（電話）神城在新橋上了山手線內回り，往上野。我們在上野月台等。你在車上盯著他。`,
              `(phone) Kamishiro boarded the Yamanote at Shimbashi, inner loop, for Ueno. We wait on the Ueno platform. You keep him in sight on board.`,
              `（電話）神城は新橋から山手線の内回りに乗った。上野のホームで待ち構えます。車内で目を離さないでください。`,
            ),
          ),
            await e.say(
              null,
              F(
                `（你上了同一班車，隔著兩節車廂。）`,
                `(You board the same train, two cars back.)`,
                `（同じ電車の、二両後ろに乗り込む）`,
              ),
              null,
              { dur: 3 },
            ),
            await e.say(
              Q.station,
              F(
                `（廣播）下一站，東京。`,
                `(announcement) The next station is Tokyo.`,
                `（アナウンス）次は、東京。`,
              ),
              null,
            ),
            await e.say(
              null,
              F(
                `（列車突然慢慢停了下來。車廂廣播一片安靜。）`,
                `(The train slows to a gentle stop between stations. The intercom goes quiet.)`,
                `（電車がゆっくりと駅の間で止まる。車内放送が途切れる）`,
              ),
              null,
              { dur: 3.4 },
            ),
            await e.say(
              Q.dispatch,
              F(
                `（廣播）這裡是運行指令所。司機身體不適。乘客中有人能協助嗎？`,
                `(intercom) This is the dispatch centre. The driver has been taken ill. Is there anyone on board who can help?`,
                `（車内放送）こちら運行指令所です。運転士が体調不良です。お客様の中に、ご協力いただける方はいらっしゃいますか。`,
              ),
            ),
            await e.say(
              n,
              F(
                `……我。在家裡玩了幾百個小時的電車遊戲——現在派得上用場了。`,
                `…Me. Hundreds of hours of train games back home — they finally count.`,
                `……俺がやります。家で何百時間も電車のゲームをやってきた——今こそだ。`,
              ),
              `me`,
            ),
            await e.say(
              Q.miura,
              F(
                `（倒在駕駛座旁）……主控制器……往前推是加速，往後拉是煞車……停車位置，對準標記……`,
                `(on the cab floor) …The master controller… push for power, pull for brake… stop on the marker…`,
                `（運転台の床で）……マスコン……前で力行、手前でブレーキ……停止位置、目標に合わせて……`,
              ),
            ),
            await e.say(
              Q.dispatch,
              F(
                `（廣播）收到。救護人員會在東京站上車。之後請照時刻表開到上野——警察會在每一站從指定的車門上車。`,
                `(intercom) Understood. Paramedics will board at Tokyo. Then please follow the timetable to Ueno — the police will board at the marked doors at each station.`,
                `（車内放送）了解しました。救急隊が東京駅で乗車します。その後は時刻表通り上野まで——各駅で警察が指定のドアから乗車します。`,
              ),
            ));
        }),
        !i)
      ) {
        (await Promise.resolve(t.transit.travelTo(`jy-ueno`)).catch(() => {}),
          e.pass({ note: F(`列車抵達上野`, `The train reached Ueno`) }));
        return;
      }
      let a = 0;
      ((e.waitFor = { kind: `drive`, x: e.px, z: e.pz }),
        e.objective(
          F(
            `照時刻表開到上野——晚到超過 ${q5} 秒，神城就會溜走`,
            `Drive to Ueno on the timetable — more than ${q5} s late and Kamishiro slips away`,
            `時刻表通り上野まで——${q5}秒以上遅れたら神城に逃げられる`,
          ),
        ));
      let o = await i({
        from: `jy-yurakucho`,
        to: `jy-ueno`,
        timetable: `late`,
        coach: !0,
        incidents: [
          {
            kind: `alarm`,
            before: `jy-akihabara`,
            at: 0.42,
            limit: 12,
            hold: 10,
          },
        ],
        onStop: (t) => {
          t.pitta && a++;
          let n = cne[t.station],
            r = t.lateS ?? 0;
          r > 12 && t.station !== `jy-ueno`
            ? J0(
                e,
                Q.kirishima,
                F(
                  `（無線）晚了 ${r} 秒。上野的人手還沒到齊——快一點！`,
                  `(radio) ${r} s late. Ueno isn't covered yet — faster!`,
                  `（無線）${r}秒遅れ。上野の配置がまだだ——急いで！`,
                ),
                2.6,
              )
            : t.pitta
              ? J0(
                  e,
                  Q.miura,
                  F(
                    `……剛剛好。漂亮。`,
                    `…Right on the mark. Beautiful.`,
                    `……ピッタリだ。見事。`,
                  ),
                  2,
                )
              : Math.abs(t.offsetCm) > 150
                ? J0(
                    e,
                    Q.miura,
                    F(
                      `……下一站，早一點開始煞車。`,
                      `…Next station, start braking earlier.`,
                      `……次はもう少し早めにブレーキを。`,
                    ),
                    2.4,
                  )
                : n &&
                  J0(
                    e,
                    Q.kirishima,
                    F(
                      `（無線）${n.zh}，上車完畢。`,
                      `(radio) ${n.en}: we're aboard.`,
                      `（無線）${n.ja}、乗車完了。`,
                    ),
                    2,
                  );
        },
        onEvent: (t) => {
          t.kind === `alarm`
            ? J0(
                e,
                Q.kirishima,
                F(
                  `（無線）是神城！他在 3 號車按了非常通報——想讓你在站間開門！`,
                  `(radio) It's Kamishiro! He hit the alarm in car 3 — he wants the doors open between stations!`,
                  `（無線）神城だ！三号車で非常通報を——駅間でドアを開けさせる気だ！`,
                ),
                3.2,
              )
            : t.kind === `alarm-stop`
              ? J0(
                  e,
                  Q.miura,
                  F(
                    `……停得好。車門不會開的，交給車掌。`,
                    `…Good stop. The doors stay shut — leave it to the conductor.`,
                    `……いい停止だ。ドアは開かない、車掌に任せろ。`,
                  ),
                  3,
                )
              : t.kind === `alarm-clear` &&
                J0(
                  e,
                  Q.dispatch,
                  F(
                    `（廣播）運轉再開。上野的警力還在路上——請盡量追回時間。`,
                    `(intercom) Resume. The police are still on their way to Ueno — make up what time you can.`,
                    `（車内放送）運転再開。上野の警察はまだ移動中——できるだけ遅れを取り戻してください。`,
                  ),
                  3.2,
                );
        },
      });
      if (((e.waitFor = null), !o.completed)) {
        e.fail(F(`列車沒有開到上野`, `The train didn't reach Ueno`));
        return;
      }
      let s = o.stops[o.stops.length - 1];
      if (s && (s.lateS ?? 0) > q5) {
        (await m2(e, async (e) => {
          await e.say(
            Q.kirishima,
            F(
              `（無線）……晚了 ${s.lateS} 秒。我們的人還沒到月台，神城已經混在人群裡出站了。`,
              `(radio) …${s.lateS} s late. Our people weren't on the platform yet — Kamishiro slipped out with the crowd.`,
              `（無線）……${s.lateS}秒遅れ。まだホームに配置できていない——神城は人混みに紛れて改札を出た。`,
            ),
          );
        }),
          e.fail(
            F(
              `太晚到上野，神城溜走了`,
              `Too late into Ueno — Kamishiro slipped away`,
            ),
          ));
        return;
      }
      (await m2(e, async (e) => {
        (await e.say(
          Q.station,
          F(
            `（廣播）上野、上野。`,
            `(announcement) Ueno, Ueno.`,
            `（アナウンス）上野、上野です。`,
          ),
          null,
        ),
          await e.say(
            Q.kirishima,
            F(
              `（無線）月台上全是我們的人。……神城看到了——他往公園口跑了！`,
              `(radio) The platform is all ours. …Kamishiro saw us — he's running for the Park exit!`,
              `（無線）ホームはこちらで固めた。……神城が気づいた——公園口へ走った！`,
            ),
          ),
          await e.say(
            Q.miura,
            F(
              `……謝謝你。快去吧。`,
              `…Thank you. Go.`,
              `……ありがとう。行ってくれ。`,
            ),
          ));
      }),
        e.pass({
          bonus: a * 2e3 + (o.grade === `S` ? 5e3 : o.grade === `A` ? 3e3 : 0),
          note: F(
            r.on
              ? r.t(`駕駛評價：${o.grade}`, `運転評価：${o.grade}`)
              : `駕駛評價：${o.grade}`,
            `Driving grade: ${o.grade}`,
          ),
        }));
    },
  }),
  J5 = `walkin-sento-enraiyu`,
  Y5 = { x: 66, z: 43, heading: -Math.PI / 2 },
  une = C2(`tokyo:epilogue`, {
    description: F(
      `一週後，燕來湯。妙子阿嬤請大家喝咖啡牛奶。`,
      `A week later, at 燕来湯. Tae buys everyone coffee milk.`,
    ),
    glyph: `湯`,
    giver: { outfit: `v:t3-tae`, dx: 1.2, dz: 0.6, anim: `talk` },
    giverName: Q.tae,
    noPolice: !0,
    start: () => {
      let e = l4(J5);
      return { x: e.x, z: e.z, heading: e.facing };
    },
    async run(e) {
      let t = e.ctx,
        n = l4(J5);
      await U0(e, { window: [15, 16.9], at: n });
      let r = G0(t),
        i = Q0(t);
      await _4(e, J5, `lobby`, { staff: !1, guests: !1 });
      let a = v4(e, J5, `milk-fridge`, Q.tae, y0.tae, 0.4, 0.6),
        o = v4(e, J5, `bench-1`, Q.gen, y0.gen);
      o.anim = `sit`;
      let s = v4(e, J5, `bench-2`, Q.miko, y0.miko);
      s.anim = `phone`;
      let c = v4(e, J5, `tv`, Q.kirishima, y0.kirishima, 0.6, 0),
        l = v4(e, J5, `lobby`, Q.todoroki2, y0.todoroki, -0.8, 1.6),
        u = v4(e, J5, `lobby`, Q.yuki, y0.yuki, 0.6, 1.9),
        d = v4(e, J5, `lobby`, Q.hsiaoChing, y0.hsiaoChing, 1.2, -0.6);
      for (let t of [a, c, l, u, d]) t.faceTo(e.px, e.pz);
      let f = y4(J5, `milk-fridge`);
      (await m2(
        e,
        async (e) => {
          (await e.say(
            Q.tae,
            F(
              `來來來，泡完澡就是要喝這個！咖啡牛奶，我請客！`,
              `Come, come — after a bath, it has to be this! Coffee milk, on me!`,
              `はいはい、お風呂上がりはこれよ！コーヒー牛乳、おごりだからね！`,
            ),
            a,
          ),
            await e.say(
              Q.kirishima,
              F(
                `神城今天被起訴了。詐欺、強盜未遂、恐嚇。打工者的身分證照片和手機，全部還回去了。`,
                `Kamishiro was indicted today. Fraud, attempted robbery, intimidation. The recruits' ID photos and phones have all been returned.`,
                `神城は今日、起訴されました。詐欺、強盗未遂、脅迫。闇バイトの子たちの身分証の写真と携帯は、全部本人に返しました。`,
              ),
              c,
            ),
            await e.say(
              Q.todoroki2,
              F(
                `這小子下禮拜開始在我店裡打工。正當的工作。時薪照最低工資以上付。`,
                `This kid starts at my shop next week. Honest work. Paid above minimum wage.`,
                `こいつは来週からうちの店でバイトだ。まっとうな仕事だ。時給は最低賃金以上な。`,
              ),
              l,
            ),
            await e.say(
              Q.yuki,
              F(
                `……我媽說，要好好謝謝你。`,
                `…My mum says to thank you properly.`,
                `……母さんが、ちゃんとお礼言えって。`,
              ),
              u,
            ),
            await e.say(
              Q.miko,
              F(
                `那天的直播已經破十萬觀看了喔！標題是「不忍池・天鵝船追緝」。`,
                `That stream passed a hundred thousand views! It's called 'The Shinobazu Swan-Boat Chase'.`,
                `あの日の配信、十万再生超えたよ！タイトルは「不忍池・スワンボート追跡」。`,
              ),
              s,
            ),
            await e.say(
              Q.gen,
              F(
                `（對桐島）今天你請客。`,
                `(to Kirishima) Your treat today.`,
                `（桐島に）今日はお前のおごりな。`,
              ),
              o,
            ),
            await e.say(
              Q.kirishima,
              F(
                `……每次都是平分吧，源さん。`,
                `…We always split it, Gen-san.`,
                `……いつも割り勘でしょう、源さん。`,
              ),
              c,
            ));
        },
        { thin: !1 },
      ),
        await e.goto(
          { x: f.x, z: f.z, y: f.y },
          {
            objective: F(
              `去冰箱拿一瓶咖啡牛奶`,
              `Get a bottle of coffee milk from the fridge`,
            ),
            radius: 1.6,
            onFoot: !0,
            label: F(`牛奶冰箱`, `Milk fridge`),
          },
        ),
        e.sfx(`pickup`, { ui: !0 }),
        await $(
          e,
          null,
          F(
            `（手扠腰，一口氣喝完——這是規矩。）`,
            `(Hand on hip, down it in one go — that is the rule.)`,
            `（腰に手を当てて、一気に飲み干す——それが作法だ）`,
          ),
          3,
        ),
        await m2(
          e,
          async (e) => {
            (await e.say(
              Q.hsiaoChing,
              F(
                `${i.zh}……我決定了，我跟你回臺灣。`,
                `${i.en}… I've decided. I'm coming home with you.`,
                `（中国語で）${i.ja}……決めた。一緒に台湾に帰る。`,
              ),
              d,
            ),
              await e.say(
                Q.hsiaoChing,
                F(
                  `明年櫻花開的時候，我再回來。這次只看櫻花。`,
                  `I'll come back when the cherry blossoms are out next year. Just for the blossoms this time.`,
                  `（中国語で）来年の桜の季節に、また来る。今度は桜を見るだけ。`,
                ),
                d,
              ),
              await e.say(
                Q.tae,
                F(
                  `明年的二樓，也幫你們空著。`,
                  `I'll keep the upstairs room free for you next year too.`,
                  `来年も二階、空けとくからね。`,
                ),
                a,
              ));
          },
          { thin: !1 },
        ),
        L0(e, 16.985),
        await k0(
          e,
          n.x + Math.sin(n.facing) * 2.2,
          n.z - Math.cos(n.facing) * 2.2,
          n.facing,
          6,
        ));
      let p = C0(
          t,
          n.x + Math.sin(n.facing) * 5 - 6,
          n.z - Math.cos(n.facing) * 5,
          3,
        ),
        m = X0(e, Q.kuroda, y0.kuroda, p.x, p.z, Math.PI / 2);
      m.moveTo(p.x + 14, p.z, 1.1);
      let h = X0(
        e,
        Q.kirishima,
        y0.kirishima,
        n.x + Math.sin(n.facing) * 2.4 + 1.2,
        n.z - Math.cos(n.facing) * 2.4,
        n.facing,
      );
      (await m2(
        e,
        async (t) => {
          (await t.wait(1.6),
            m.faceTo(e.px, e.pz),
            m.play(`bow`),
            await t.say(
              null,
              F(
                `（黑田經過巷子，點了一下頭。桐島看向別的地方。）`,
                `(Kuroda passes in the lane and nods once. Kirishima looks the other way.)`,
                `（黒田が路地を通り過ぎ、一度だけ会釈する。桐島はよそを向いている）`,
              ),
              null,
              { dur: 4 },
            ),
            h.faceTo(h.x - 5, h.z + 5),
            await t.say(
              null,
              F(
                `（傍晚五點。〈晚霞漸淡〉的旋律從遠處傳來。）`,
                `(Five o’clock. 「Yuyake Koyake」 drifts in from far away.)`,
                `（午後五時。遠くから「夕焼け小焼け」が聞こえてくる）`,
              ),
              null,
              { dur: 4.5 },
            ));
        },
        { thin: !1 },
      ),
        await k0(e, Y5.x, Y5.z, Y5.heading, 8));
      let g = C0(t, Y5.x + 1.4, Y5.z + 0.6, 3),
        _ = X0(e, Q.hsiaoChing, y0.hsiaoChing, g.x, g.z, Y5.heading);
      _.anim = `carry`;
      let v = t.groundAt(Y5.x, Y5.z, 2, 0);
      (await m2(
        e,
        async (e) => {
          (e.shot(
            new k(Y5.x + 6, v + 1.9, Y5.z + 5),
            new k(Y5.x, v + 1.3, Y5.z),
          ),
            await e.say(
              Q.hsiaoChing,
              F(
                `行李箱好重……都是買給阿嬤的伴手禮。`,
                `This suitcase is so heavy… it is all presents for Grandma.`,
                `（中国語で）スーツケース重い……全部おばあちゃんへのおみやげ。`,
              ),
              _,
            ),
            await e.say(
              null,
              F(
                `（RUSH AIR 的看板翻了過去：RX 852　羽田 → 松山。）`,
                `(The RUSH AIR board flips: RX 852, Haneda → Songshan.)`,
                `（RUSH AIR の案内板がめくれる：RX 852　羽田 → 松山）`,
              ),
              null,
              { dur: 3.6 },
            ),
            await e.say(r, F(`回家吧。`, `Let's go home.`, `帰ろう。`), `me`));
        },
        { thin: !1 },
      ),
        e.hud.bigMessage(
          F(`終電までに`, `Before the Last Train`, `終電までに`),
          F(`— 完 —`, `— The End —`, `— 完 —`),
          { duration: 5, color: `#ffc83d` },
        ),
        await e.wait(4),
        e.pass({
          note: F(
            `《東京狂飆》主線完結。謝謝遊玩！`,
            `The Tokyo story is complete. Thank you for playing!`,
          ),
        }));
    },
  });
